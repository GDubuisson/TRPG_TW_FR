/**
 * Classe Actor minimale pour le système The Witcher (FR)
 * Étend la classe Actor de Foundry et prépare les données système de base.
 */
class TRPGActor extends Actor {
  /** @override */
  prepareData() {
    super.prepareData();
    // Utiliser this.system (ou this._source.system si nécessaire) pour accéder aux données système
    const sys = this.system ?? (this._source && this._source.system) ?? {};
    // Ne rien faire si resources existe déjà
    if (!sys.resources) {
      // Merger directement dans this.system (modification sûre et attendue par Foundry)
      // mergeObject modifie l'objet cible en place lorsqu'on lui passe this.system
      mergeObject(this.system ?? (this._source.system = {}), {
        resources: {
          health: { value: 0, max: 0 },
          power: { value: 0, max: 0 }
        }
      }, { inplace: true, overwrite: false });
    }
  }
}

/**
 * Classe Item minimale pour le système The Witcher (FR)
 */
class TRPGItem extends Item {
  /** @override */
  prepareData() {
    super.prepareData();
    const sys = this.system ?? (this._source && this._source.system) ?? {};
    if (!sys.description) {
      mergeObject(this.system ?? (this._source.system = {}), { description: "" }, { inplace: true, overwrite: false });
    }
  }
}

// Exposer globalement pour que TRPG_TW_FR.mjs puisse les référencer lors de l'init
window.TRPGActor = TRPGActor;
window.TRPGItem = TRPGItem;

// Référence explicite pour les analyseurs statiques : Foundry appelle prepareData dynamiquement
// Cette ligne empêche les outils d'analyse de signaler "Unused method prepareData".
const _used = [TRPGActor, TRPGItem];

export { TRPGActor, TRPGItem };
