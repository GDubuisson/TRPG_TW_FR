import {System, TW} from "./config.js";
import {registerSystemSettings} from "./settings.js"
import {preloadHandlebarsTemplates} from "./templates.js"

import {TWActor} from "./actors/actor.js"

import {TWCharacterSheet} from "./actors/character-sheet.js"

Hooks.once("init", async function () {
    console.info("Initialisation du système...")

    // Register System Settings
    registerSystemSettings();

    /**
     * Formule d'initiative pour le système
     * @type {String}
     */
    CONFIG.Combat.initiative = {
        formula: "1d100",
        decimals: 2
    }

    CONFIG.TW = TW;
    CONFIG.Actor.typeLabels = {
        personnage: "personnage"
    }
    CONFIG.Actor.documentClass = TWActor;

    game.tw = {
        skin : "base",
        macros : Macros,
        config : TW
    }

    Actors.unregisterSheet("core", ActorSheet);

    Actors.registerSheet("TRPG_TW_FR", TWCharacterSheet, {
        types: ["personnage"],
        makeDefault: true,
        label: "Fiche de Personnage TW par défaut"
    });

    // Preload Handlebars Templates
    preloadHandlebarsTemplates();

    console.info("Aria : Init Done");
})