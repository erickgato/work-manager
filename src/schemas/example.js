const ExampleSchema = {
    name: 'Example',
    primaryKey: 'id',
    properties: {
        id: { type: 'int', indexed: true },
        field_1: 'string',
        field_2: 'int?',
        field_3: 'date',
    },
};

export default ExampleSchema;
