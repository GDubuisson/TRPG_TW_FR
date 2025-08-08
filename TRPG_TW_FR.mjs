import { CONFIG } from '@foundry/core';
import {HeroDataModel, WeaponDataModel} from "./module/data-model.mjs";
import {SystemActor, SystemItem} from "./documents.mjs";

CONFIG.Actor.documentTypes = { hero: {}, villain: {}, pawn: {} };
CONFIG.Item.documentTypes = {weapon: {}, spell: {} };

CONFIG.Actor.dataModels = { hero: HeroDataModel, villain: HeroDataModel, pawn: HeroDataModel };
CONFIG.Item.dataModels = { weapon: WeaponDataModel, spell: WeaponDataModel };

CONFIG.Actor.documentClass = SystemActor;
CONFIG.Item.documentClass = SystemItem;