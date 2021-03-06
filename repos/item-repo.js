const uuid = require('uuid');

let items = [
    {
        'item_id': uuid.v4(),
        'name': 'Turtle socks',
        'description': 'Fluffy turtle socks or socks for your pet turtle',
        'price': 19.99,
        'size': 'Large'
    }
];

const selectItems = () => ({
    rows: items,
    error: new Error(),
    driver: 'postgres'
});

const selectItemByItemId = (itemId) =>
    items.find((item) => item['item_id'] === itemId);

module.exports = {
    selectItems,
    selectItemByItemId
}; 
