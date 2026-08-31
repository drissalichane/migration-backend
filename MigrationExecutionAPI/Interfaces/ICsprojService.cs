using MigrationExecutionAPI.DTOs;

namespace MigrationExecutionAPI.Interfaces;

public interface ICsprojService
{
    Task UpdateCsprojAsync(UpdateCsprojRequest request);
}
