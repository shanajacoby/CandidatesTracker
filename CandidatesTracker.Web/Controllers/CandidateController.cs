using CandidatesTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidatesTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.AddCandidate(candidate);
        }
        [Route("confirmcandidate")]
        [HttpPost]
        public void ConfirmCandidate(int id)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.ConfirmCandidate(id);
        }
        [Route("refusecandidate")]
        [HttpPost]
        public void RefuseCandidate(int id)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.RefuseCandidate(id);
        }
        [Route("getpendingcandidates")]
        [HttpGet]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetPending();
        }
        [Route("getconfirmedcandidates")]
        [HttpGet]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetConfirmed();
        }
        [Route("getrefusedcandidates")]
        [HttpGet]
        public List<Candidate> GetRefusedCandidates()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetRefused();
        }
        [Route("getpendingcount")]
        [HttpGet]
        public int GetPendingCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetPendingCount();
        }
        [Route("getconfirmedcount")]
        [HttpGet]
        public int GetConfirmedCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetConfirmedCount();
        }
        [Route("getrefusedcount")]
        [HttpGet]
        public int GetRefusedCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetRefusedCount();
        }
        [Route("getcandidatesbyid")]
        [HttpGet]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetCandidateById(id);
        }
    }
}
