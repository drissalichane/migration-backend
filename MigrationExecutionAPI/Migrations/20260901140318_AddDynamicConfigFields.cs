using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddDynamicConfigFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CustomBranchName",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CustomPrompt",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SourceFramework",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TargetFramework",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomBranchName",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "CustomPrompt",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "SourceFramework",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "TargetFramework",
                table: "MigrationJobs");
        }
    }
}
