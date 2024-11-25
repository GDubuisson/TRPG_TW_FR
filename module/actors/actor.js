export class TWActor extends Actor {

    /** @override */
    static async create(data, options={}) {
        console.log(data)
        if (typeof data.items === "undefined") {
            data.items = [];
            let caps = game.tw.config.competences;

            if (data.type === "character") {
                foundry.utils.mergeObject(data.items, caps, {overwrite: false});
            }
        }

        return super.create(data, options);
    }
}