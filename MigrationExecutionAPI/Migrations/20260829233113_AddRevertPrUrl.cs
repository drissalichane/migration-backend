using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddRevertPrUrl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RevertPrUrl",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RevertPrUrl",
                table: "MigrationJobs");
        }
    }
}
