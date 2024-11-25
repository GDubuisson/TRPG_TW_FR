/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

export class TWActorSheet extends ActorSheet {

    /** @override */
    /*activateListeners(html) {
        super.activateListeners(html);

        // Everything below here is only needed if the sheet is editable
        if (!this.options.editable) return;
    }*/

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObjet(super.defaultOptions, {
            classes: ["TRPG_TW_FR","sheet","actor","personnage"],
            template: "systems/TRPG_TW_FR/templates/actors/personnages/personnage-sheet.hbs"/*System.templatesPath+"/actors/personnages/personnage-sheet.hbs"*/,
            width: 600,
            height: 400,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial:"stats"}],
            // dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
        });
    }

    /** @override */
    getData() {
        const context = super.getData();

        context.customData = "Données supplémentaires";
        return context;
        //Actor's Data
        /*const source = this.actor.toObject();
        const actorData = this.actor.toObject(false);

        // Basic data
        let isOwner = this.actor.isOwner;
        const data = {
            owner : isOwner,
            limited: this.actor.limited,
            options: this.options,
            editable: this.isEditable,
            config: CONFIG.TW,
            actor: actorData,
            system: actorData.system,
            items: actorData.items
        };

        return data;*/
    }
}