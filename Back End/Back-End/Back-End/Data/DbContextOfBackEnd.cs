using Back_End.Models;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Data
{
    public class DbContextOfBackEnd : DbContext
    {
        public DbContextOfBackEnd(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Employee> Employee { get; set; }
    }
}
