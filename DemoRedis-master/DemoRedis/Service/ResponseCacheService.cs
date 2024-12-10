
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using StackExchange.Redis;

namespace DemoRedis.Service
{
  public class ResponseCacheService : IResponseCacheService
  {
    private readonly IDistributedCache _distributedCache;
    private readonly IConnectionMultiplexer _connectionMultiplexer;

    public ResponseCacheService(IDistributedCache distributedCache, IConnectionMultiplexer connectionMultiplexer)
    {
      _distributedCache = distributedCache;
      _connectionMultiplexer = connectionMultiplexer;
    }
    public async Task<string> GetCachResponseAsync(string cacheKey)
    {
      var cacheResponse = await _distributedCache.GetStringAsync(cacheKey);
      return string.IsNullOrEmpty(cacheResponse) ? null : cacheResponse;
    }

    public async Task RemoveCacheResponseAsync(string cacheKey)
    {
      if (string.IsNullOrEmpty(cacheKey))
      {
        throw new ArgumentException("Cache key is null or empty", nameof(cacheKey));
      }
      await foreach (var key in GetKeysAsync(cacheKey + "*"))
      {
        await _distributedCache.RemoveAsync(key);
      }
    }

    private async IAsyncEnumerable<string> GetKeysAsync(string pattern)
    {
      if (string.IsNullOrEmpty(pattern))
      {
        throw new ArgumentException("Pattern is null or empty", nameof(pattern));
      }
      foreach (var endPoint in _connectionMultiplexer.GetEndPoints())
      {
        var server = _connectionMultiplexer.GetServer(endPoint);
        var keys = server.Keys(pattern: pattern);
        foreach (var key in keys)
        {
          yield return key;
        }
      }
    }

    public async Task SetCacheResponseAsync(string cacheKey, object response, TimeSpan timeOut)
    {
      if (response == null)
      {
        return;
      }
      var serializedResponse = JsonConvert.SerializeObject(response, new JsonSerializerSettings()
      {
        ContractResolver = new CamelCasePropertyNamesContractResolver()
      });

      await _distributedCache.SetStringAsync(cacheKey, serializedResponse, new DistributedCacheEntryOptions
      {
        AbsoluteExpirationRelativeToNow = timeOut
      });
    }
  }
}
