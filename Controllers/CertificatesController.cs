using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CertProject.Models;
using CertProject.Services;

namespace CertProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificatesController : ControllerBase
    {
        private readonly CertificateServices certificateServices;

        public CertificatesController(CertificateServices certificateServices)
        {
            this.certificateServices = certificateServices;
        }

        [HttpGet]   // Show List of Certificates
        public IActionResult GetCertificates()
        {
            return Ok(certificateServices.GetCertificates());
        }

        [HttpGet("{TitleOfCertificate}")]   // Show Certificate
        public IActionResult GetCertificate(string TitleOfCertificate)
        {
           return Ok(certificateServices.GetCertificateByTitle(TitleOfCertificate));
        }

        [HttpPost]  // Create Certificate
        public IActionResult CreateCertificate(CertificateDTO certificateDTO)
        {
            certificateServices.CreateCertificate(certificateDTO);
            return Ok();
        }

        [HttpDelete("{TitleOfCertificate}")]    // Delete Certificate
        public IActionResult DeleteCertificate(string TitleOfCertificate)
        {
            if (!certificateServices.DeleteCertificate(TitleOfCertificate))
            {
                return NotFound("This certificate does not exist!");
            }

            return Ok();
        }

        [HttpPut("{TitleOfCertificate}")]   // Update Certificate
        public IActionResult UpdateCertificate(string TitleOfCertificate, CertificateDTO certificateDTO)
        {
            certificateServices.UpdateCertificate(TitleOfCertificate, certificateDTO);
            return Ok();
        }
    }
}
