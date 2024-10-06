using AngularApp2.Server.DTOs;
using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult Post([FromForm] AddUserDto userDto) 
        {
            var check = _db.Users.Where(u => u.Email == userDto.Email).FirstOrDefault();
            if (check != null) {
                return BadRequest("the user is exist");
            }
            var user = new User
            {
                UserName = userDto.UserName,
                Email = userDto.Email,
                PasswordHash = userDto.PasswordHash
            };
            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok(user);

        }

        [HttpPost("login")]
        public IActionResult login([FromForm] AddUserDto userDto)
        {

            var user = _db.Users.Where(u => u.Email == userDto.Email && u.PasswordHash == userDto.PasswordHash).FirstOrDefault();
            if (user == null)
            {
                return Unauthorized();
            }


            return Ok(user);
        }


    }
}
