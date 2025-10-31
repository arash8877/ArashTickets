using System.Reflection.Metadata.Ecma335;
using backend.core.context;
using backend.core.entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace backend.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        // Dependency injection of the AppDbContext to access the database 
        private readonly AppDbContext _context;

        // Constructor
        public TicketsController(AppDbContext context)
        {
            _context = context;
        }

        // ------------ CRUD ------------
        
        // CREATE
        [HttpPost]
        [Route("create")]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTickets()
        {
            return await _context.Tickets.ToListAsync();
        }

        
    }
    
}
