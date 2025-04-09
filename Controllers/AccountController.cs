using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CertProject.Services;

namespace CertProject.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration configuration;
        
        private readonly AccountServices accountServices;

        public AccountController(IConfiguration configuration, AccountServices accountServices)
        {
            this.configuration = configuration;
            this.accountServices = accountServices;
        }

        

        [HttpPost("Login")]
        public IActionResult Login(string email, string password)
        {

            var (success, token, user) = accountServices.Login(email, password);

            if (!success)
            {
                ModelState.AddModelError("Error", "Email or password is not valid");
                return BadRequest(ModelState);
            }

            var response = new
            {
                Token = token,
                User = user
            };

            return Ok(response);
        }


        [Authorize]
        [HttpGet("AuthorizeAuthenticatedCandidates")]
        public IActionResult AuthorizeAuthenticatedCandidates()
        {
            return Ok("Authorized candidate");
        }

        [Authorize(Roles = "admin")]
        [HttpGet("AuthorizeAdmin")]
        public IActionResult AuthorizeAdmin()
        {
            return Ok("Authorized Admin");
        }


        //private string CreateJWToken(Candidate candidate)
        //{
        //    List<Claim> claims = new List<Claim>()
        //    {
        //        new Claim("id",  ""+candidate.UserID),
        //        //new Claim("role","" +  Models.User.Role.Candidate)
        //    };

        //    string strKey = configuration["JwtSettings:Key"]!;

        //    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(strKey));

        //    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        //    var token = new JwtSecurityToken(
        //            issuer: configuration["JwtSettings:Issuer"],
        //            audience: configuration["JwtSettings:Audience"],
        //            claims: claims,
        //            expires: DateTime.Now.AddDays(1),
        //            signingCredentials: creds
        //        );

        //    var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        //    return jwt;
        //}
    }
}
