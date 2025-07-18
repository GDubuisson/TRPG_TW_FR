// module/mon-systeme.js

// Importations si tu utilises des modules ES6
// import { MY_SYSTEM_CONFIG } from './config.js';

// Hook pour l'initialisation du système
Hooks.on("init", function() {
    console.log("Mon Système JDR est initialisé !");

    // Enregistrer les types d'acteurs et d'objets
    CONFIG.Actor.documentClass = class MonSystemeActor extends Actor {}; // Si tu as une classe Actor personnalisée
    CONFIG.Item.documentClass = class MonSystemeItem extends Item {};   // Si tu as une classe Item personnalisée

    // Enregistrer les feuilles de personnage/objet
    Actors.unregisterSheet("core", ActorSheet); // Désenregistre la feuille par défaut de Foundry
    Actors.registerSheet("TRPG_TW_FR", MonSystemeActorSheet, { types: ["character"], makeDefault: true });
    Actors.registerSheet("TRPG_TW_FR", MonSystemeNPCActorSheet, { types: ["npc"], makeDefault: false });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("TRPG_TW_FR", MonSystemeItemSheet, { types: ["item"], makeDefault: true });
});


// Définition de la classe de la feuille de personnage
class MonSystemeActorSheet extends ActorSheet {
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["TRPG_TW_FR", "sheet", "actor"],
            template: "systems/TRPG_TW_FR/templates/actor/character-sheet.hbs",
            width: 600,
            height: 600
        });
    }

    /** @override */
    getData() {
        const data = super.getData();
        // Ajoute des données spécifiques à ta feuille ici si besoin
        // data.monNouvelAttribut = this.actor.system.monNouvelAttribut;
        return data;
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
        // Ajoute des écouteurs d'événements pour les boutons, champs, etc.
        // Ex: html.find('.my-button').click(this._onMyButtonClick.bind(this));
    }

    // Exemple de gestionnaire d'événement
    // _onMyButtonClick(event) {
    //   event.preventDefault();
    //   // Logique quand le bouton est cliqué
    // }
}

// Définition de la classe de la feuille d'objet (similaire)
class MonSystemeItemSheet extends ItemSheet {
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["TRPG_TW_FR", "sheet", "item"],
            template: "systems/TRPG_TW_FR/templates/item/item-sheet.hbs",
            width: 500,
            height: 300
        });
    }

    /** @override */
    getData() {
        const data = super.getData();
        return data;
    }
}

// Définir la structure des données pour un acteur de type "character"
class MonSystemeCharacterData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            strength: new fields.NumberField({
                required: true,
                nullable: false,
                integer: true,
                min: 0,
                initial: 10,
                label: "TRPG_TW_FR.Strength"
            }),
            agility: new fields.NumberField({
                required: true,
                nullable: false,
                integer: true,
                min: 0,
                initial: 10,
                label: "TRPG_TW_FR.Agility"
            }),
            // ... autres attributs, compétences, etc.
        };
    }
}

// Enregistrer les schémas de données
Hooks.once("setup", function() {
    CONFIG.Actor.dataModels.character = MonSystemeCharacterData;
    // CONFIG.Actor.dataModels.npc = MonSystemeNPCData; // Si tu as un schéma différent pour les PNJ
});