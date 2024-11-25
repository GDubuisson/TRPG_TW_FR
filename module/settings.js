export const registerSystemSettings = function() {
    console.info("Register system settings")

    game.settings.register("TRPG_TW_FR", "systemMigrationVersion", {
        name: "System Migration Version",
        scope: "world",
        config: false,
        type: String,
        default: ""
    });
}