using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidatesTracker.Data
{
    public class CandidateRepo
    {
        private readonly string _connectionString;
        public CandidateRepo(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate candidate)
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }
        public List<Candidate> GetAll()
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.ToList();
        }
        public List<Candidate> GetPending()
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }
        public List<Candidate> GetConfirmed()
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }
        public List<Candidate> GetRefused()
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }
        public void ConfirmCandidate(int id)
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            Candidate currentCandidate = ctx.Candidates.FirstOrDefault(c => c.Id == id);
            currentCandidate.RegistrationStatus = RegistrationStatus.Confirmed;
            ctx.Candidates.Update(currentCandidate);
            ctx.SaveChanges();   
        }
        public void RefuseCandidate(int id)
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            Candidate currentCandidate = ctx.Candidates.FirstOrDefault(c => c.Id == id);
            currentCandidate.RegistrationStatus = RegistrationStatus.Refused;
            ctx.Candidates.Update(currentCandidate);
            ctx.SaveChanges();
        }
        public int GetPendingCount()
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).Count();
        }
        public int GetConfirmedCount()
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).Count();
        }
        public int GetRefusedCount()
        {
            using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).Count();
        }
        public Candidate GetCandidateById(int id)
        { using var ctx = new CandidatesTrackerDataContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
            }
        }
    }

