using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddSuccessTracking : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsSuccess",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Phase1Success",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Phase2Success",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 8, 1, 12, 28, 59, DateTimeKind.Utc).AddTicks(1663));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsSuccess",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "Phase1Success",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "Phase2Success",
                table: "MigrationJobs");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 7, 7, 26, 10, 341, DateTimeKind.Utc).AddTicks(1672));
        }
    }
}
