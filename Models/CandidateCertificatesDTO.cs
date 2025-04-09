using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CertProject.Models
{
    public class CandidateCertificatesDTO
    {

        [Required]
        public int CandidateNumber { get; set; }
        [Required]
        public string TitleOfCertificate { get; set; }


    }
}
