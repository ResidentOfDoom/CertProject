using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static CertProject.Models.User;

namespace CertProject.Models
{
    public class AdminDTO
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Address { get; set; }
        public string MobileNumber { get; set; }
        [EmailAddress]
        public string Email { get; set; }

        public string Password { get; set; }

 
    }
}
