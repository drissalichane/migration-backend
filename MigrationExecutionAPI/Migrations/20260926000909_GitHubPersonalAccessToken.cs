using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class GitHubPersonalAccessToken : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GitHubPatEncrypted",
                table: "Users",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GitHubPatLogin",
                table: "Users",
                type: "TEXT",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 26, 0, 9, 7, 199, DateTimeKind.Utc).AddTicks(2688));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "GitHubPatEncrypted", "GitHubPatLogin" },
                values: new object[] { null, null });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GitHubPatEncrypted",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "GitHubPatLogin",
                table: "Users");

            migrationBuilder.UpdateData(
                table: "Organizations",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2026, 9, 23, 21, 58, 31, 737, DateTimeKind.Utc).AddTicks(6023));
        }
    }
}
