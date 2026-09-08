using CadastroPontosBackend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CadastroPontosBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PontosController : ControllerBase
{
    private readonly AppDbContext _context;

    public PontosController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var pontos = await _context.PontoApoios
            .Include(p => p.IdResponsavelNavigation)
            .Include(p => p.IdEnderecoNavigation)
                .ThenInclude(e => e.IdCidadeNavigation)
                    .ThenInclude(c => c.IdUfNavigation)
            .Include(p => p.IdContatoNavigation)
            .ToListAsync();

        return Ok(pontos);
    }
}