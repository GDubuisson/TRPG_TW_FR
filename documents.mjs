import { Actor } from 'foundry-vtt-api';

export class SystemActor extends Actor {
    async applyDamage(amount) {
        const hp = this.system.resources.health;
        const loss = Math.max(amount, 1);
        const newVal = Math.clamped(hp.value - loss, 0, hp.max);
        await this.update({
            "system.resources.health.value": newVal });
        ChatMessage.create({content: `${this.name} takes ${loss} damage! Remaining HP: ${newVal}`});
    }
    prepareDerivedData() {
        super.prepareDerivedData();
        const hp = this.system.resources.health;
        hp.value = Math.clamped(hp.value, 0, hp.max);
    }
}

export class SystemItem extends Item {
    get isFree() {
        return this.system.price === 0;
    }
}