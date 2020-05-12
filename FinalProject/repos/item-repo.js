var uuid = require('uuid');

let items = [
    {
        'itemId': uuid.v4(),
        'name': 'Bulldog Mug',
        'description': 'Cofee Mug with Bulldog logo',
        'price': 8.99
    },
    {
        'itemId': uuid.v4(),
        'name': 'Drake Basketball Throwback Jersey',
        'description': 'Drake Throwback replica Jersey from 1969',
        'price': 99.99
    }
];

const selectItems = () => ({
    rows: items,
    error: new Error(),
    driver: 'postgres'
});

const insertItem = (item) => items.push(item);

const selectItemByItemId = (itemId) =>
    items.find((item) => item['itemId'] == itemId);

const updateItem = (updatedItem) => {
    const itemsThatDontMatch = items.filter((item) =>
        item['item_id'] !== updatedItem['item_id']
    );

    items = [
        ...itemsThatDontMatch, updatedItem
    ];
};

const deleteItemByItemId = (itemId) => {
    items = items.filter((item) =>
        item['item_id'] !== itemId
    );
};

module.exports = {
    selectItems,
    insertItem,
    selectItemByItemId,
    updateItem,
    deleteItemByItemId
};
