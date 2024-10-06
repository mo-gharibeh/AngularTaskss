namespace AngularApp2.Server.DTOs
{
    public class AddServiceDto
    {
        
        public string? ServiceName { get; set; }

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }

    }
}
