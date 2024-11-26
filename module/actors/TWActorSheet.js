/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

export class TWActorSheet extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObjet(super.defaultOptions, {
            classes: ["witcher", "sheet", "actor"],
            template: "systems/TRPG_TW_FR/templates/actors/personnages/personnage-sheet.hbs",
            width: 600,
            height: 400,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body"}]
        });
    }

    /** @override */
    getData() {
        const context = super.getData();

        context.config = CONFIG.WITCHER;

        context.isGM = game.user.isGM;
        return context;
    }

}