
namespace backend.core.dto
{
    public class UpdateTicketDto
    {
      
        public DateTime Time { get; set; }
        public string PassengersName { get; set; } = string.Empty;
        public long PassengerSSN { get; set; }
        // public string From { get; set; } = string.Empty;
        // public string To { get; set; } = string.Empty;
        public int Price { get; set; }
    }
}