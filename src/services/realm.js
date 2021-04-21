import Realm from 'realm';

import ExampleSchema from '../schemas/example';

export function connect() {
    return Realm.open({
        schema: [ExampleSchema],
        inMemory: false,
    });
}
