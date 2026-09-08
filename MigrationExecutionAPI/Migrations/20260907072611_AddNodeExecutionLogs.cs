using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddNodeExecutionLogs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "Phase1ExecutionTimeMs",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "Phase2ExecutionTimeMs",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "NodeExecutionLogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    MigrationJobId = table.Column<int>(type: "INTEGER", nullable: false),
                    NodeName = table.Column<string>(type: "TEXT", nullable: false),
                    Phase = table.Column<string>(type: "TEXT", nullable: false),
                    ExecutionTimeMs = table.Column<long>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NodeExecutionLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NodeExecutionLogs_MigrationJobs_MigrationJobId",
                        column: x => x.MigrationJobId,
                        principalTable: "MigrationJobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 7, 7, 26, 10, 341, DateTimeKind.Utc).AddTicks(1672));

            migrationBuilder.CreateIndex(
                name: "IX_NodeExecutionLogs_MigrationJobId",
                table: "NodeExecutionLogs",
                column: "MigrationJobId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NodeExecutionLogs");

            migrationBuilder.DropColumn(
                name: "Phase1ExecutionTimeMs",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "Phase2ExecutionTimeMs",
                table: "MigrationJobs");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 6, 22, 40, 34, 889, DateTimeKind.Utc).AddTicks(4979));
        }
    }
}
