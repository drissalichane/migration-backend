using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddExecutionReport : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ExecutionReport",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExecutionReport",
                table: "MigrationJobs");
        }
    }
}
