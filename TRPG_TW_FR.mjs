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

  // Configuration minimale (exemples)
  CONFIG.Combat.initiative = { formula: "1d20", decimals: 2 };

  console.log('TRPG_TW_FR | Configuration initiale appliquée');
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
