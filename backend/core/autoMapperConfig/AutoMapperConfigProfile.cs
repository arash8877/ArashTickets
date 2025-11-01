using AutoMapper;
using backend.core.dto;
using backend.core.entities;
using server.core.dto;

namespace server.core.autoMapperConfig
{
    public class AutoMapperConfigProfile : Profile
    {
        public AutoMapperConfigProfile()
        {
            // Tickets
            CreateMap<CreateTicketDto, Ticket>();
            CreateMap<Ticket, GetTicketDto>();
            CreateMap<UpdateTicketDto, Ticket>();
        }
    }
}