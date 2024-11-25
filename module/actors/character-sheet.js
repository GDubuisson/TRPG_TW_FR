/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {TWCharacterSheet}
 */
import {TWActorSheet} from "./actor-sheet.js";
import {System} from "../config.js";

export class TWCharacterSheet extends TWActorSheet {

    static defaultHeight() {
        return "100%";
    }

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObjet(super.defaultOptions, {
            classes: ["theWitcher", "sheet", "actor", "character"],
            template: "/systems/TRPG_TW_FR/templates/actors/personnages/personnage-sheet.hbs"/*System.templatesPath+"/actors/personnages/personnage-sheet.hbs"*/,
            width: "100%",
            height: this.defaultHeight(),
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial:"stats"}],
            dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
        });
    }
}