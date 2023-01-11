using Back_End.Data;
using Back_End.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DbContextOfBackEnd _dbContext;

        public EmployeeController(DbContextOfBackEnd dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetList() 
        {
            var emp = await _dbContext.Employee.ToListAsync();
            return Ok(emp);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Employee employee)
        {
            employee.Id = Guid.NewGuid();

            await _dbContext.Employee.AddAsync(employee);

            await _dbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
           var emp = await _dbContext.Employee.FirstOrDefaultAsync(x => x.Id== id);
            if (emp == null)
            {
                return NotFound();
            }

            return Ok(emp);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, Employee employee)
        {
            var emp = await _dbContext.Employee.FindAsync(id);
            if (emp == null)
            {
                return NotFound();
            }

            emp.Name= employee.Name;
            emp.Email= employee.Email;
            emp.Phone= employee.Phone;
            emp.Salary= employee.Salary;
            emp.Department= employee.Department;
            await _dbContext.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var emp = await _dbContext.Employee.FindAsync(id);
            if (emp == null)
            {
                return NotFound();
            }
            _dbContext.Employee.Remove(emp);
            await _dbContext.SaveChangesAsync();
            return Ok();    
        }
    }
}
