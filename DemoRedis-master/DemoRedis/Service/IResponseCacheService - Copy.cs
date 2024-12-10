namespace DemoRedis.Service
{
  public interface IResponseCacheService
  {
    Task SetCacheResponseAsync(string cacheKey, object response, TimeSpan timeOut);
    Task<string> GetCachResponseAsync(string cacheKey);

    Task RemoveCacheResponseAsync(string cacheKey);
  }
}
