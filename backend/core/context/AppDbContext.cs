

using Microsoft.EntityFrameworkCore;

namespace backend.core.context
{

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }      

        public DbSet<entities.Ticket> Tickets { get; set; }
    }
}