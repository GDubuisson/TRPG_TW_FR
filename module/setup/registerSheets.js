import {TWActorSheet} from "../actors/TWActorSheet";

export const registerSheets = () => {
    Items.unregisterSheet('core', ActorSheet);
    Items.registerSheet('witcher', TWActorSheet, {
        makeDefault: true,
        types: ['personnage']
    });
}