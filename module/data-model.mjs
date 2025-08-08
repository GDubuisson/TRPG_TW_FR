import { DocumentDataModel } from "@league-of-foundry-developers/foundry-vtt-types";

export class HeroDataModel extends DocumentDataModel {
    static defineSchema() {
        return {
            resources: {
                health: { value: 10, max: 10 },
                power: 5
            },
            goodness: { value: 0},
            level: { value: 1 }
        };
    }
}

export class WeaponDataModel extends DocumentDataModel {
    static defineSchema() {
        return {
            name: { type: String, required: true },
            damage: { value: 5, type: Number },
            range: { value: 10, type: Number }
        };
    }
}