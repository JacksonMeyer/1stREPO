const {
    getAllItems,
    getItemByItemId,
    addItem,
    modifyItem,
    removeItemByItemId
} = require('../services/item-service');

const getItemsRoute = (app) => {
    app.get('/items', (req, res, next) => {
        res.send(200, getAllItems());
        return next();
    })
};

const getItemByItemIdRoute = (app) => {
    app.get('/items/:itemId', (req, res, next) => {
        try {
            const item = getItemByItemId(req.params.itemId);
            res.send(200, item);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addItemsRoute = (app) => {
    app.post('/items', (req, res, next) => {
        const item = req.params;
        addItem(item);
        res.send(201);
        return next();
    })
};

const modifyItemRoute = (app) => {
    app.put('/items/:itemId', (req, res, next) => {
        modifyItem(req.params);
        res.send(200);
        return next();
    })
};

const deleteItemRoute = (app) => {
    app.delete('/items/:itemId', (req, res, next) => {
        removeItemByItemId(req.params.itemId);
        res.send(204);
        return next();
    })
};

const initItemControllers = (app) => {
    getItemsRoute(app);
    getItemByItemIdRoute(app);
    addItemsRoute(app);
    modifyItemRoute(app);
    deleteItemRoute(app);
};

module.exports = {
    initItemControllers
};
