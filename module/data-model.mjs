/**
 * Classe Actor minimale pour le système The Witcher (FR)
 * Étend la classe Actor de Foundry et prépare les données système de base.
 */
class TRPGActor extends Actor {
  prepareData() {
    super.prepareData();
    // Préparez ici les données spécifiques au système (ex: resources, caractéristiques)
    const actorData = this.system || this.data?.data || {};
    actorData.resources = actorData.resources || { health: { value: 0, max: 0 }, power: { value: 0, max: 0 } };
  }
}

/**
 * Classe Item minimale pour le système The Witcher (FR)
 */
class TRPGItem extends Item {
  prepareData() {
    super.prepareData();
    const itemData = this.system || this.data?.data || {};
    itemData.description = itemData.description || "";
  }
}

// Exposer globalement pour que TRPG_TW_FR.mjs puisse les référencer lors de l'init
window.TRPGActor = TRPGActor;
window.TRPGItem = TRPGItem;

export { TRPGActor, TRPGItem };
