﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static CertProject.Models.User;

namespace CertProject.Models
{
    public class Admin : User
    {

        //These properties could be inherited by user, since Admin,Marker and QualityControl,Candidate already have this
        //Reduces Redundancy
        //Enopoihsh me User etsi k allios?

        [Required]
        [StringLength(30)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(30)]
        public string LastName { get; set; }
        public string Address { get; set; }

        public string MobileNumber { get; set; }


        public Admin():base()
        {
  
        }

    }
}
