﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using CertProject.Services;

namespace CertProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly CandidateServices candidateServices;

        public CandidatesController(CandidateServices candidateServices)
        {
            this.candidateServices = candidateServices;
        }

        //[HttpGet("{id}")]   // Show Candidate
        //public IActionResult GetCandidate(int id)
        //{
        //    var candidate = context.Candidates.Find(id);

        //    if (candidate == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(candidate);
        //}

        [HttpPost]  // Create Candidate
        public IActionResult CreateCandidate(CandidateDTO candidateDTO)
        {
            if (candidateServices.EmailExists(candidateDTO.Email))
            {
                return BadRequest("This email address is already in use");
            }


            candidateServices.CreateCandidate(candidateDTO);
            return Ok();
        }


        [HttpPut("{candidateNumber}")]   // Update Candidate
        public IActionResult UpdateCandidate(int candidateNumber, CandidateDTO candidateDTO)
        {
            if (candidateNumber == null)
            {
                return BadRequest("Candidate number doesnt exist");
            }
            candidateServices.UpdateCandidate(candidateNumber, candidateDTO);

            return Ok();
        }
    }
}
