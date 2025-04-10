﻿using Microsoft.AspNetCore.Mvc;
using CertProject.Models;
using CertProject.Services;
using System;

namespace CertProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExamsController : ControllerBase
    {
        private readonly ExamService _examService;

        public ExamsController(ExamService examService)
        {
            _examService = examService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var exams = _examService.GetAllExams();
            return Ok(exams);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var exam = _examService.GetExamById(id);
            if (exam == null)
                return NotFound();

            return Ok(exam);
        }

        [HttpPost]
        public IActionResult Create([FromBody] ExamDto examDto)
        {
            _examService.AddExam(examDto);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, [FromBody] ExamDto examDto)
        {
            _examService.UpdateExam(id, examDto);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _examService.DeleteExam(id);
            return Ok();
        }
    }
}
