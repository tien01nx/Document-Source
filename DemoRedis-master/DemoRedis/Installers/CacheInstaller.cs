
using DemoRedis.Configuration;
using DemoRedis.Service;
using StackExchange.Redis;

namespace DemoRedis.Installers
{
  public class CacheInstaller : IInstaller
  {
    public void InstallServices(IServiceCollection services, IConfiguration configuration)
    {
      var redisCongifuration = new RedisConfiguration();
      configuration.GetSection(nameof(RedisConfiguration)).Bind(redisCongifuration);
      services.AddSingleton(redisCongifuration);

      if (!redisCongifuration.Enabled)
      {
        return;
      }
      services.AddSingleton<IConnectionMultiplexer>(_ => ConnectionMultiplexer.Connect(redisCongifuration.ConnectionString));
      services.AddStackExchangeRedisCache(option =>
      {
        option.Configuration = redisCongifuration.ConnectionString;
      });
      services.AddSingleton<IResponseCacheService, ResponseCacheService>();

    }
  }
}
