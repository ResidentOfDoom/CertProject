﻿    using Microsoft.AspNetCore.Identity;
    using CertProject.Models;
    using System;
    using System.ComponentModel.DataAnnotations; 

    public class Candidate : User
    {
        //[Required]
        //public Guid CandidateID { get; set; }


        public int CandidateNumber { get; set; }

       

    [StringLength(100)]
        public string MiddleName { get; set; } = "";

    

    [StringLength(50)]
        public string Gender { get; set; } = "";

    [StringLength(100)]
        public string NativeLanguage { get; set; } = "";

    public DateTime? BirthDate { get; set; } 

    [StringLength(50)]
        public string PhotoIDType { get; set; } = "";

    [StringLength(50)]
        public string PhotoIDNumber { get; set; } = "";

    public DateTime? PhotoIDIssueDate { get; set; } 


    

    [StringLength(200)]
        public string AddressLine2 { get; set; } = "";

    [Required]
        [StringLength(100)]
        public string CountryOfResidence { get; set; } = "";

    [StringLength(100)]
        public string StateOrTerritoryOrProvince { get; set; } = "";

    [StringLength(100)]
        public string TownOrCity { get; set; } = "";

    [StringLength(20)]
        public string PostalCode { get; set; } = "";

    [StringLength(20)]
        public string LandlineNumber { get; set; } = "";

    [Required]
    [StringLength(30)]
    public string FirstName { get; set; }
    [Required]
    [StringLength(30)]
    public string LastName { get; set; }
    public string Address { get; set; }

    public string MobileNumber { get; set; }

    public DateTime CreatedAt { get; set; }

    public Candidate() : base()
    {
        CreatedAt = DateTime.Now;
    }
}
