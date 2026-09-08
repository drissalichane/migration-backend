using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModelsForGovernanceAndLlm : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApprovalRecords_Users_ApprovedByUserId",
                table: "ApprovalRecords");

            migrationBuilder.RenameColumn(
                name: "TokensUsed",
                table: "LlmUsageLogs",
                newName: "TotalTokens");

            migrationBuilder.RenameColumn(
                name: "Cost",
                table: "LlmUsageLogs",
                newName: "TotalCostUsd");

            migrationBuilder.RenameColumn(
                name: "ApprovedByUserId",
                table: "ApprovalRecords",
                newName: "ApproverUserId");

            migrationBuilder.RenameIndex(
                name: "IX_ApprovalRecords_ApprovedByUserId",
                table: "ApprovalRecords",
                newName: "IX_ApprovalRecords_ApproverUserId");

            migrationBuilder.AddColumn<int>(
                name: "CompletionTokens",
                table: "LlmUsageLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ModelName",
                table: "LlmUsageLogs",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "PromptTokens",
                table: "LlmUsageLogs",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 1, 22, 8, 1, 979, DateTimeKind.Utc).AddTicks(8555));

            migrationBuilder.AddForeignKey(
                name: "FK_ApprovalRecords_Users_ApproverUserId",
                table: "ApprovalRecords",
                column: "ApproverUserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApprovalRecords_Users_ApproverUserId",
                table: "ApprovalRecords");

            migrationBuilder.DropColumn(
                name: "CompletionTokens",
                table: "LlmUsageLogs");

            migrationBuilder.DropColumn(
                name: "ModelName",
                table: "LlmUsageLogs");

            migrationBuilder.DropColumn(
                name: "PromptTokens",
                table: "LlmUsageLogs");

            migrationBuilder.RenameColumn(
                name: "TotalTokens",
                table: "LlmUsageLogs",
                newName: "TokensUsed");

            migrationBuilder.RenameColumn(
                name: "TotalCostUsd",
                table: "LlmUsageLogs",
                newName: "Cost");

            migrationBuilder.RenameColumn(
                name: "ApproverUserId",
                table: "ApprovalRecords",
                newName: "ApprovedByUserId");

            migrationBuilder.RenameIndex(
                name: "IX_ApprovalRecords_ApproverUserId",
                table: "ApprovalRecords",
                newName: "IX_ApprovalRecords_ApprovedByUserId");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 1, 21, 23, 6, 506, DateTimeKind.Utc).AddTicks(3280));

            migrationBuilder.AddForeignKey(
                name: "FK_ApprovalRecords_Users_ApprovedByUserId",
                table: "ApprovalRecords",
                column: "ApprovedByUserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
