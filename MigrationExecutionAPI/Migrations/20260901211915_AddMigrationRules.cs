using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MigrationExecutionAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddMigrationRules : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MigrationRules",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SourceVersion = table.Column<string>(type: "TEXT", nullable: false),
                    TargetVersion = table.Column<string>(type: "TEXT", nullable: false),
                    Pattern = table.Column<string>(type: "TEXT", nullable: false),
                    Replacement = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MigrationRules", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "MigrationRules",
                columns: new[] { "Id", "Description", "IsActive", "Pattern", "Replacement", "SourceVersion", "TargetVersion" },
                values: new object[] { 1, "Migrate from Startup.cs to Program.cs minimal hosting", true, "UseStartup<Startup>()", "builder.Services.AddControllers();", "net6.0", "net8.0" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MigrationRules");
        }
    }
}
