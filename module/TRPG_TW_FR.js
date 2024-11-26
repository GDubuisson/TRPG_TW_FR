import { WITCHER } from './setup/config.js'
import { registerSheets } from './setup/registerSheets.js';
import {TWActor} from "./actors/TWActor";

async function preloadHandlebarsTemplates() {
    const templatePath = [
        'systems/TRPG_TW_FR/templates/actors/personnages/personnage-sheet.hbs'
    ];
    return loadTemplates(templatePath);
}

Hooks.once("init", function () {
    console.info("Initialisation du système...");

    CONFIG.WITCHER = WITCHER;

    CONFIG.Actor.documentClass = TWActor;

    registerSheets();
    preloadHandlebarsTemplates();

    console.info("The Witcher : Init Done");
})