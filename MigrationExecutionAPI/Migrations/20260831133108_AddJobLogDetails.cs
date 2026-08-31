using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddJobLogDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Details",
                table: "JobLogs",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Details",
                table: "JobLogs");
        }
    }
}
