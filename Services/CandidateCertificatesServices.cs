﻿using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using CertProject.Models;
using System.Runtime.ConstrainedExecution;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace CertProject.Services
{
    public class CandidateCertificatesServices
    {
        private readonly ApplicationDBContext context;
        private const int passingScore = 50; 

        public CandidateCertificatesServices(ApplicationDBContext context)
        {
            this.context = context;
        }


        public List<Certificate> GetObtainedCertificates(int candidateNumber)
        {
            // Fetching the candidate
            Candidate candidate = context.Candidates.FirstOrDefault(x => x.CandidateNumber == candidateNumber);
            if (candidate == null)
            {
                // If the candidate is not found, return an empty list
                return new List<Certificate>();
            }

            Dictionary<Certificate, int> ExamsPassed = new Dictionary<Certificate, int>();
            List<Certificate> ObtainedCerts = new List<Certificate>();

            // Modify the query to use eager loading correctly
            var boughtCertificates = context.CandidateCertificates
                                            .Where(x => x.CandidateID == candidate.UserID)
                                            .Include(x => x.Certificate)  // Eagerly load Certificate
                                            .ThenInclude(c => c.Exams)    // Eagerly load Exams related to Certificate
                                            .Select(x => x.Certificate)
                                            .ToList();

            foreach (var certificate in boughtCertificates)
            {
                int passedExamsCount = 0;

                foreach (var exam in certificate.Exams)
                {
                    if (exam.AwardedMarks > 50)
                    {
                        passedExamsCount++;
                    }
                }

                if (passedExamsCount == certificate.Exams.Count && passedExamsCount!=0)
                {
                    ObtainedCerts.Add(certificate);
                }
                
            }

            return ObtainedCerts;
        }


        public List<Certificate> GetUnobtainedCertificates(int candidateNumber)
        {

            Candidate candidate = context.Candidates.FirstOrDefault(x => x.CandidateNumber == candidateNumber);
            if (candidate == null)
            {

                return new List<Certificate>();
            }


            List<Certificate> UnobtainedCertificates = new List<Certificate>();

            var boughtCertificates = context.CandidateCertificates
                                            .Where(x => x.CandidateID == candidate.UserID)
                                            .Include(x => x.Certificate)  // Eagerly load Certificate
                                            .ThenInclude(c => c.Exams)    // Eagerly load Exams related to Certificate
                                            .Select(x => x.Certificate)
                                            .ToList();

            foreach (var certificate in boughtCertificates)
            {
                foreach (var exam in certificate.Exams)
                {
                    if (exam.AwardedMarks < 50)
                    {
                        UnobtainedCertificates.Add(certificate);

                    }
                }
            }
            return UnobtainedCertificates;
        }


        public bool CreateCandidateCertificate(CandidateCertificatesDTO candidateCertificatesDTO)
        {
            
            var candidate = context.Candidates.FirstOrDefault(x => x.CandidateNumber == candidateCertificatesDTO.CandidateNumber);
            var certificate = context.Certificates.FirstOrDefault(x => x.TitleOfCertificate == candidateCertificatesDTO.TitleOfCertificate);
            
            if (candidate == null || certificate == null)
            {
                return false; // Or throw an exception
            }

            CandidateCertificates enrollment = new CandidateCertificates
            {
                Candidate = candidate,
                Certificate = certificate,
                CandidateID = candidate.UserID,
                CertificateID = certificate.CertificateID,
                CandidateScore = null,
                PercentageScore = null,
                AssessmentTestCode = "",
                AssessmentResultLabel = ""

            };

            context.CandidateCertificates.Add(enrollment);
            context.SaveChanges();
            return true;
        }

        //We need to have a date that is initialized when the exam is passed
        public CertificateCountResult GetCertificateCountsByDateRange(DateTime startDate, DateTime endDate)
        {
            var result = new CertificateCountResult();

            var certificatesInRange = context.CandidateCertificates
                                             .Where(cc => cc.CreatedAt >= startDate && cc.CreatedAt <= endDate)
                                             .ToList();

            foreach (var certificate in certificatesInRange)
            {
                if (certificate.CandidateScore.HasValue && certificate.CandidateScore.Value >= passingScore)
                {
                    result.PassedCount++;
                }
                else
                {
                    result.FailedCount++;
                }
            }

            return result;
        }
        public List<Certificate> GetAvailableCertificates(int candidateNumber)
        {
            // Fetching the candidate
            Candidate candidate = context.Candidates.FirstOrDefault(x => x.CandidateNumber == candidateNumber);
            if (candidate == null)
            {

                return new List<Certificate>();
            }

            List<Certificate> AvailableCertificates = new List<Certificate>();



            var boughtCertificates = context.CandidateCertificates
                                            .Where(x => x.CandidateID == candidate.UserID)
                                            .Include(x => x.Certificate)  // Eagerly load Certificate
                                            .ThenInclude(c => c.Exams)    // Eagerly load Exams related to Certificate
                                            .Select(x => x.Certificate)
                                            .ToList();


            var allCertificatesId = context.Certificates
                                   .ToList();

            var availCert = allCertificatesId.Except(boughtCertificates).ToList();


            foreach (var certificate in availCert)
            {
                AvailableCertificates.Add(certificate);
            }

            return AvailableCertificates;

        }

        public List<Certificate> GetObtainedCertificatesByDate(int candidateNumber, DateTime startDate, DateTime endDate)
        {
            Candidate candidate = context.Candidates.FirstOrDefault(x => x.CandidateNumber == candidateNumber);
            if (candidate == null)
            {
                return new List<Certificate>();
            }

            List<Certificate> ObtainedCerts = new List<Certificate>();

            var boughtCertificates = context.CandidateCertificates
                                            .Where(x => x.CandidateID == candidate.UserID)
                                            .Include(x => x.Certificate)
                                            .ThenInclude(c => c.Exams)
                                            .Select(x => x.Certificate)
                                            .ToList();

            foreach (var certificate in boughtCertificates)
            {
                int passedExamsCount = 0;

                foreach (var exam in certificate.Exams)
                {
                    if (exam.AwardedMarks > 50)
                    {
                        passedExamsCount++;
                    }
                }

                if (passedExamsCount == certificate.Exams.Count)
                {
                    ObtainedCerts.Add(certificate);
                }
            }

            List<Certificate> ObtainedCertsByDate = new List<Certificate>();

            foreach (var certificate in ObtainedCerts)
            {
                if (certificate.CreatedAt >= startDate && certificate.CreatedAt <= endDate)
                {
                    ObtainedCertsByDate.Add(certificate);
                }
            }

            return ObtainedCertsByDate;
        }

        public List<Exam> GetMarksPerExamPerCertificate(int? candidateNumber)
        {
            var candidate = context.Candidates.FirstOrDefault(x => x.CandidateNumber == candidateNumber)!;

            if (candidate == null)
            {
                return new List<Exam>();
            }

            // Searching for certificates of this candidtate
            var certificates = context.CandidateCertificates
                                    .Where(x => x.CandidateID == candidate.UserID)
                                    .Include(x => x.Certificate)
                                    //.ThenInclude(c => c.Exams)
                                    .Select(x => x.Certificate)
                                    .ToList();


            
            List<Exam> CertificatesMarks = new List<Exam>();

            foreach (var cert in certificates)
            {
                var examAwardedMarks = context.CandidateExams
                            .Where(x => x.CandidateID == candidate.UserID && x.Exam.CertificateID == cert.CertificateID)
                            .Select(x => x.Exam)
                            .ToList();

                CertificatesMarks = examAwardedMarks;
            }

            return CertificatesMarks;
        }

    }
}