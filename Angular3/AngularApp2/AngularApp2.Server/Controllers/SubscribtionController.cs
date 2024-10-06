using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribtionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubscribtionController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetSubscribtion")]
        public IActionResult GetSubscribtion()
        {
            var subscription = _db.Subscriptions.ToList();
            return Ok(subscription);
        }

    }
}
