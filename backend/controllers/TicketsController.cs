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
        public async Task<IActionResult> CreateTicket([FromBody] core.dto.CreateTicketDto createTicketDto)
        {
            var newTicket = new Ticket()
            {
                Time = createTicketDto.Time,
                PassengersName = createTicketDto.PassengersName,
                PassengerSSN = createTicketDto.PassengerSSN,
                From = createTicketDto.From,
                To = createTicketDto.To,
                Price = createTicketDto.Price
            };

            // Save to database
            _context.Tickets.Add(newTicket);
            await _context.SaveChangesAsync();

            // Return success response
            return CreatedAtAction(nameof(CreateTicket), new { id = newTicket.Id }, newTicket);

        }


    }

}
