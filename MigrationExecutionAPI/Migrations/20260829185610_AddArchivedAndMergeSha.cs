using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddArchivedAndMergeSha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsArchived",
                table: "MigrationJobs",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "MergeCommitSha",
                table: "MigrationJobs",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsArchived",
                table: "MigrationJobs");

            migrationBuilder.DropColumn(
                name: "MergeCommitSha",
                table: "MigrationJobs");
        }
    }
}
