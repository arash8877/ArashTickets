using AutoMapper;
using backend.core.dto;
using backend.core.entities;

namespace server.core.autoMapperConfig
{
    public class AutoMapperConfigProfile : Profile
    {
        public AutoMapperConfigProfile()
        {
            // Tickets
            CreateMap<CreateTicketDto, Ticket>();
        }
    }
}