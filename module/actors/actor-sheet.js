/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

export class TWActorSheet extends ActorSheet {

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Everything below here is only needed if the sheet is editable
        if (!this.options.editable) return;
    }

    /** @override */
    async getData(options) {
        // Actor's Data
        const source = this.actor.toObject();
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

        return data;
    }
}