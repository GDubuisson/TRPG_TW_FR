/**
 * Feuille d'acteur minimale pour The Witcher (FR)
 */
class TRPGActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["trpg-tw-fr", "sheet", "actor"],
      template: "systems/trpg_tw_fr/templates/actor-sheet.html",
      width: 720,
      height: 680
    });
  }

  getData() {
    // Ajoutez ici les données nécessaires pour le template
    return super.getData();
  }
}

/**
 * Feuille d'objet minimale pour The Witcher (FR)
 */
class TRPGItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["trpg-tw-fr", "sheet", "item"],
      template: "systems/trpg_tw_fr/templates/item-sheet.html",
      width: 520,
      height: 480
    });
  }

  getData() {
    return super.getData();
  }
}

// Exposer globalement pour être utilisé lors de l'init
window.TRPGActorSheet = TRPGActorSheet;
window.TRPGItemSheet = TRPGItemSheet;

export { TRPGActorSheet, TRPGItemSheet };
