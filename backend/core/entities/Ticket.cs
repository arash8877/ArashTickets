using System.ComponentModel.DataAnnotations;

namespace backend.core.entities
{
    public class Ticket
    {
        [Key]
        public long Id { get; set; }
        public DateTime Time { get; set; }
        public string PassengersName { get; set; } = string.Empty;
        public long PassengerSSN { get; set; }
        public string From { get; set; } = string.Empty;
        public string To { get; set; } = string.Empty;
        public int Price { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public string ConfidentialComment { get; set; } = "Normal";
    }
}