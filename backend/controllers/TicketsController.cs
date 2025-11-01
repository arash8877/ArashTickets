using System.Reflection.Metadata.Ecma335;
using AutoMapper;
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


    }

}
