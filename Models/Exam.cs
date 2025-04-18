﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CertProject.Models
{
    public class Exam
    {
        [Required]
        [Key]
        public Guid ExamId { get; set; }
        public string? ExamDescription { get; set; }
        public int? AwardedMarks { get; set; }
        public int? PossibleMarks { get; set; }
        [Required]
        public string Title { get; set; }
        public int Time {  get; set; }  

        //public Certificate Certificate { get; set; }


        [Required]
        [ForeignKey("Certificate")]
        public Guid CertificateID { get; set; }

        public ICollection<Questions> Questions { get; set; }

        public  Certificate Certificate { get; set; }
        //public Questions questions { get; set; }

        public Exam()
        {
            CertificateID = new Guid();
        }


    }
}