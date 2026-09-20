using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddNugetWarningsAndVulnerabilities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NugetVulnerabilities",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NugetWarnings",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 19, 4, 18, 41, 780, DateTimeKind.Utc).AddTicks(2353));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NugetVulnerabilities",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "NugetWarnings",
                table: "MigrationJobs");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 8, 1, 12, 28, 59, DateTimeKind.Utc).AddTicks(1663));
        }
    }
}
