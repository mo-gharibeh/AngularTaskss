using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductCcontroller : ControllerBase
    {
        private readonly MyDbContext _db;
        public ProductCcontroller(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetProducts")]
        public IActionResult GetProduct()
        {
            var Servise = _db.Products.ToList();
            return Ok(Servise);
        }
    }
}
