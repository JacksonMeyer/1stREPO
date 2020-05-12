var uuid = require('uuid');

let items = [
    {
        'itemId': uuid.v4(),
        'name': 'Drake Car Sticker',
        'description': 'blue and white bulldog car sticker',
        'price': 9.99
    },
    {
        'itemId': uuid.v4(),
        'name': 'Drake Baseball Cap',
        'description': 'Grey Baseball Cap',
        'price': 19.99
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
