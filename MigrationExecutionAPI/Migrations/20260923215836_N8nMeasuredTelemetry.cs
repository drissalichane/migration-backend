using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class N8nMeasuredTelemetry : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsMeasured",
                table: "NodeExecutionLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsSubNode",
                table: "NodeExecutionLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Runs",
                table: "NodeExecutionLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "N8nExecutionIdPhase1",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "N8nExecutionIdPhase2",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Calls",
                table: "LlmUsageLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<long>(
                name: "DurationMs",
                table: "LlmUsageLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<string>(
                name: "FinishReasons",
                table: "LlmUsageLogs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsMeasured",
                table: "LlmUsageLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Phase",
                table: "LlmUsageLogs",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 23, 21, 58, 31, 737, DateTimeKind.Utc).AddTicks(6023));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsMeasured",
                table: "NodeExecutionLogs");

            migrationBuilder.DropColumn(
                name: "IsSubNode",
                table: "NodeExecutionLogs");

            migrationBuilder.DropColumn(
                name: "Runs",
                table: "NodeExecutionLogs");

            migrationBuilder.DropColumn(
                name: "N8nExecutionIdPhase1",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "N8nExecutionIdPhase2",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "Calls",
                table: "LlmUsageLogs");

            migrationBuilder.DropColumn(
                name: "DurationMs",
                table: "LlmUsageLogs");

            migrationBuilder.DropColumn(
                name: "FinishReasons",
                table: "LlmUsageLogs");

            migrationBuilder.DropColumn(
                name: "IsMeasured",
                table: "LlmUsageLogs");

            migrationBuilder.DropColumn(
                name: "Phase",
                table: "LlmUsageLogs");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 19, 4, 18, 41, 780, DateTimeKind.Utc).AddTicks(2353));
        }
    }
}
