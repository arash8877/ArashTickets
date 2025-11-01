using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using server.core.autoMapperConfig;

var builder = WebApplication.CreateBuilder(args);

// ------------- Config DB ------------
builder.Services.AddDbContext<backend.core.context.AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("local"));
});

// -------- Config AutoMapper --------
builder.Services.AddAutoMapper(typeof(AutoMapperConfigProfile));


// ------------- Services ------------
builder.Services.AddControllers();              // If you add controllers later
builder.Services.AddEndpointsApiExplorer();     // Required for non-controller endpoints discovery
builder.Services.AddOpenApi();                   // .NET 9 built-in OpenAPI doc generation
builder.Services.AddSwaggerGen();                // provides Swagger UI and extras

var app = builder.Build();


// ------------ Middleware / Pipeline -------------
if (app.Environment.IsDevelopment())
{
    // Expose the generated OpenAPI JSON at /openapi/v1.json (MapOpenApi)
    app.MapOpenApi();

    // Add the classic Swagger JSON + UI via Swashbuckle
    app.UseSwagger(); // adds /swagger/v1/swagger.json (Swashbuckle-generated JSON)
    app.UseSwaggerUI(options =>
    {
        // Point UI at the .NET 9 OpenAPI doc if you want, or to the Swashbuckle doc.
        // Both are possible; here we show both endpoints in the UI:
        options.SwaggerEndpoint("/openapi/v1.json", "OpenAPI (built-in) v1");
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Swashbuckle v1");
        options.RoutePrefix = "swagger"; // UI at /swagger
    });
}

// If HTTPS redirection causes annoyance in dev, comment this out
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


app.Run();

