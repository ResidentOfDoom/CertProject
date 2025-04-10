﻿using System.ComponentModel.DataAnnotations;

namespace CertProject.Models
{
    public class CertificateDTO
    {

        [Required]
        [StringLength(200)] // Adjust the length based on your requirements
        public string TitleOfCertificate { get; set; }

        [Required]
        [StringLength(50)]
        public string AssessmentTestCode { get; set; }

        [Required]
        public DateTime ExaminationDate { get; set; }

        [Required]
        public DateTime ScoreReportDate { get; set; }

        [Required]
        public int MaximumScore { get; set; }
        [Required]
        public string Description { get; set; }
        public int Prices { get; set; }
        public string ImageSrc { get; set; }


    }
}
