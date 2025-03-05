import {TWActorSheet} from "../actors/TWActorSheet.js";

export const registerSheets = () => {
    Items.unregisterSheet('core', ActorSheet);
    Items.registerSheet('witcher', TWActorSheet, {
        makeDefault: true,
        types: ['personnage']
    });
}