using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        public EmployeeController()
        {
        }

        [HttpGet]
        public async Task<IActionResult> GetList() 
        {
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Create()
        {

            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetById()
        {
            return Ok();
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update()
        {
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete()
        {

            return Ok();    
        }
    }
}
