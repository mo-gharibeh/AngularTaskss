namespace AngularApp2.Server.DTOs
{
    public class AddUserDto
    {
        public string? UserName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;

    }
}
