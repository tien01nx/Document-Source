using DemoRedis.Attributes;
using DemoRedis.Service;
using Microsoft.AspNetCore.Mvc;

namespace DemoRedis.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class WeatherForecastController : ControllerBase
  {
    private static readonly string[] Summaries = new[]
    {
          "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
      };

    private readonly ILogger<WeatherForecastController> _logger;

    private readonly IResponseCacheService _responseCacheService;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IResponseCacheService responseCacheService)
    {
      _logger = logger;
      _responseCacheService = responseCacheService;
    }

    [HttpGet("Test")]
    [Cache(60)]
    public async Task<IActionResult> GetAsync(string ketyword, int pageIndex, int pageSize)
    {
      var result = new List<WeatherForecast>()
      {
        new WeatherForecast { Name = "WeatherForecast1" },
        new WeatherForecast { Name = "WeatherForecast2" },
        new WeatherForecast { Name = "WeatherForecast3" },
        new WeatherForecast { Name = "WeatherForecast4" },
        new WeatherForecast { Name = "WeatherForecast5" },
        new WeatherForecast { Name = "WeatherForecast6" },
        new WeatherForecast { Name = "WeatherForecast7" },
        new WeatherForecast { Name = "WeatherForecast8" },
        new WeatherForecast { Name = "WeatherForecast9" },
        new WeatherForecast { Name = "WeatherForecast10" },
        new WeatherForecast { Name = "WeatherForecast11" },
      };
      return Ok(result);
    }

    [HttpGet("Create")]
    public async Task<IActionResult> Create()
    {
      _responseCacheService.RemoveCacheResponseAsync("/WeatherForecast/Test");
      return Ok();
    }

  }
}
