import "./module/data-model.mjs";
import "./module/document.mjs";

Hooks.once('init', async function() {
  console.log('TRPG_TW_FR | Initialisation du système The Witcher (FR)');

  // Exemple de setting système
  game.settings.register('trpg_tw_fr', 'demoMode', {
    name: 'TRPG_TW_FR.Settings.DemoMode.Name',
    hint: 'TRPG_TW_FR.Settings.DemoMode.Hint',
    scope: 'world',
    config: true,
    type: Boolean,
    default: false
  });

  // Définir des classes Document personnalisées fournies par module/data-model.mjs
  if (typeof TRPGActor !== 'undefined') CONFIG.Actor.documentClass = TRPGActor;
  if (typeof TRPGItem !== 'undefined') CONFIG.Item.documentClass = TRPGItem;

  // Enregistrer les sheets personnalisées pour le type 'character'
  if (typeof TRPGActorSheet !== 'undefined') {
    Actors.registerSheet('trpg_tw_fr', TRPGActorSheet, { types: ['character'], makeDefault: true });
  }
  if (typeof TRPGItemSheet !== 'undefined') {
    Items.registerSheet('trpg_tw_fr', TRPGItemSheet, { makeDefault: true });
  }

  // Configuration minimale (exemples)
  CONFIG.Combat.initiative = { formula: "1d20", decimals: 2 };

  console.log('TRPG_TW_FR | Configuration initiale appliquée');

  // Garantir qu'un type par défaut est défini si l'UI omet le champ 'type'
  // Cela évite DataModelValidationError: type may not be undefined
  Hooks.on('preCreateActor', (actor, createData, _options, _userId) => {
    try {
      if (!createData || !createData.type) {
        createData = createData ?? {};
        createData.type = 'character';
      }
    } catch (err) {
      console.error('TRPG_TW_FR | Erreur dans preCreateActor hook', err);
    }
    return createData;
  });
});

Hooks.once('ready', async function() {
  console.log('TRPG_TW_FR | Système prêt');

  // Placez ici les migrations, preload de templates, ou initialisations qui nécessitent game.*
  if (game.user.isGM) {
    console.log('TRPG_TW_FR | Utilisateur GM détecté');
  }
});

// Exporter les symboles si d'autres modules veulent les utiliser
export { };
