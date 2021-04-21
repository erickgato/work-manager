import { action, makeObservable, observable, computed } from 'mobx';

class ExampleStore {
    total = 0;

    constructor() {
        makeObservable(this, {
            total: observable,
            add: action,
            subtract: action,
            totalValue: computed,
        });
    }

    add = () => {
        this.total++;
    };

    subtract = () => {
        if (this.total > 0) {
            this.total--;
        }
    };

    get totalValue() {
        return this.total;
    }
}

export default new ExampleStore();
