export class TWActor extends Actor {

    /** @override */
    static async create(data, options={}) {
        if (typeof data.items === "undefinied") {
            data.items = [];
            let caps = game.tw.config.competences;

            if (data.type === "character") {
                foundry.utils.mergeObject(data.items, caps, {overwrite: false});
            }
        }

        return super.create(data, options);
    }
}