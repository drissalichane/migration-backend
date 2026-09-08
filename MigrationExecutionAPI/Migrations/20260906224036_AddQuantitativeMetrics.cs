using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddQuantitativeMetrics : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ErrorFixerIterations",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ExecutionTimeMs",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "InitialErrorCount",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "RegressionRate",
                table: "MigrationJobs",
                type: "REAL",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ResidualErrorCount",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "SuccessRate",
                table: "MigrationJobs",
                type: "REAL",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 6, 22, 40, 34, 889, DateTimeKind.Utc).AddTicks(4979));

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ErrorFixerIterations",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "ExecutionTimeMs",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "InitialErrorCount",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "RegressionRate",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "ResidualErrorCount",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "SuccessRate",
                table: "MigrationJobs");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 1, 23, 27, 24, 950, DateTimeKind.Utc).AddTicks(3059));
        }
    }
}
