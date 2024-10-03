using AngularApp2.Server.DTOs;
using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ServicesController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetServices")]
        public IActionResult GetServices()
        {
            var Servise = _db.Services.ToList();
            return Ok(Servise);
        }


        //Add SErvoce
        [HttpPost("AddService")]
        public IActionResult AddService([FromForm] AddServiceDto serviceDto)
        {
            if (serviceDto == null)
            {
                return BadRequest("Service is null");
            }
            if (serviceDto.ServiceImage != null)
            {
                var uploadsFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
                if (!Directory.Exists(uploadsFolderPath))
                {
                    Directory.CreateDirectory(uploadsFolderPath);
                }
                var filePath = Path.Combine(uploadsFolderPath, serviceDto.ServiceImage.FileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    serviceDto.ServiceImage.CopyToAsync(stream);
                };
            }
                var service = new Service
                {
                    ServiceName = serviceDto.ServiceName,
                    ServiceDescription = serviceDto.ServiceDescription,
                    ServiceImage = serviceDto.ServiceImage.FileName,
                };
                _db.Services.Add(service);
                _db.SaveChanges();
                return Ok(service);
            
            
        }

        [HttpPut("UpdateServicesDetails/{serviceId}")]
        public IActionResult UpdateServicesDetails([FromForm] AddServiceDto serviceInfo, int serviceId)
        {

            var service = _db.Services.Find(serviceId);


            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, serviceInfo.ServiceImage.FileName);

            if (!System.IO.File.Exists(fileImage))
            {
                using (var stream = new FileStream(fileImage, FileMode.Create))
                {

                    serviceInfo.ServiceImage.CopyToAsync(stream);

                }
            }

            service.ServiceName = serviceInfo.ServiceName;
            service.ServiceDescription = serviceInfo.ServiceDescription;
            service.ServiceImage = serviceInfo.ServiceImage.FileName;

            _db.Services.Update(service);
            _db.SaveChanges();

            return Ok();
        }

    }
}