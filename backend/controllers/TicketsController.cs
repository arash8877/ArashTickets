using System.Reflection.Metadata.Ecma335;
using AutoMapper;
using backend.core.context;
using backend.core.dto;
using backend.core.entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.core.dto;



namespace backend.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        // Dependency injection of the AppDbContext to access the database 
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        // Constructor
        public TicketsController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // ------------ CRUD ------------

        // CREATE
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateTicket([FromBody] core.dto.CreateTicketDto createTicketDto)
        {
            var newTicket = new Ticket();
            _mapper.Map(createTicketDto, newTicket);
            // {
            //     Time = createTicketDto.Time,
            //     PassengersName = createTicketDto.PassengersName,
            //     PassengerSSN = createTicketDto.PassengerSSN,
            //     From = createTicketDto.From,
            //     To = createTicketDto.To,
            //     Price = createTicketDto.Price
            // };

            // Save to database
            _context.Tickets.Add(newTicket);
            await _context.SaveChangesAsync();

            // Return success response
            return Ok("Ticket created successfully");

        }

        // READ (read all)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetTicketDto>>> GetTickets()
        {
            var tickets = await _context.Tickets.ToListAsync(); // get tickets from context
            var ticketsDto = _mapper.Map<IEnumerable<GetTicketDto>>(tickets);
            return Ok(ticketsDto);
        }

        // READ (one by id)
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<IEnumerable<GetTicketDto>>> GetTicketById([FromRoute] long id)
        {
            var ticket = await _context.Tickets.FirstOrDefaultAsync(t => t.Id == id);
            if (ticket is null)
            {
                return NotFound("Ticket not found");
            }
            var ticketDto = _mapper.Map<GetTicketDto>(ticket);
            return Ok(ticketDto);
        }

        // UPDATE
        [HttpPut]
        [Route("edit/{id}")]
        public async Task<IActionResult> EditTicket([FromRoute] long id, [FromBody] UpdateTicketDto updateTicketDto)
        {
            var ticket = await _context.Tickets.FirstOrDefaultAsync(t => t.Id == id);
            if (ticket is null)
            {
                return NotFound("Ticket not found");
            }
            _mapper.Map(updateTicketDto, ticket);
            ticket.UpdatedAt = DateTime.Now;
            await _context.SaveChangesAsync();
            return Ok("Ticket updated successfully");
        }
 
        // DELETE
        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<IActionResult> DeleteTicket([FromRoute] long id)
        {
            var ticket = await _context.Tickets.FirstOrDefaultAsync(t => t.Id == id);
            if (ticket is null)
            {
                return NotFound("Ticket not found");
            }
            _context.Tickets.Remove(ticket);
            await _context.SaveChangesAsync();
            return Ok("Ticket deleted successfully");
        }
    }

}
