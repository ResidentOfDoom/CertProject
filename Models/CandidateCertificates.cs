﻿using CertProject.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class CandidateCertificates
{
    [Required]
    [Key]
    public Guid RecordID { get; set; } 

    [Required]
    [ForeignKey("Candidate")] 
    public Guid CandidateID { get; set; }

    [Required]
    [ForeignKey("Certificate")] 
    public Guid CertificateID { get; set; }

    //This is just a random string (does not contain the exam by itself)
    [Required]  
    [StringLength(50)]
    public string? AssessmentTestCode { get; set; }  //ANTI GIA CODE AS EINAI DATE GIA PIO EUKOLA KAI ANTI GIA CreatedAt, NO?


    public int? CandidateScore { get; set; } 
    public float? PercentageScore { get; set; } 
    public string? AssessmentResultLabel { get; set; } 

    public DateTime CreatedAt { get; set; }

    // JSON fields for topic descriptions and scores
    //public string TopicDescriptions { get; set; }
    //public string TopicScores { get; set; }


    
  

    // Navigation properties
    public Candidate Candidate { get; set; }
    public Certificate Certificate { get; set; }



    
    public CandidateCertificates()
    {
        RecordID = Guid.NewGuid();
        CreatedAt=DateTime.Now;
    }

    
}
