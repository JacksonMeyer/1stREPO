const {
    getAllCartItems,
    getCartItemByCartItemId,
    addCartItem,
    updateCartItem,
    removeCartItemByCartItemId,
    getCartItemsByCartId
} = require('../services/cart-item-service');

const {getCartByCartId} = require('../services/cart-service');

const getCartItemsroute = (server) => {
    server.get('/cart-items', (req, res, next) => {
        res.send(200, getAllCartItems());
        return next();
    })
};

const getCartItemsByCartItemIdroute = (server) => {
    server.get('/cart-items/:cartItemId', (req, res, next) => {
        try {
            const cartItem = getCartItemByCartItemId(req.params.cartItemId);
            res.send(200, cartItem);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const getCartItemsByCartIdroute = (server) => {
    server.get('/carts/:cartId/cart-items', (req, res, next) => {
        try {
            const cartItems = getCartItemsByCartId(req.params.cartId);
            res.send(200, cartItems);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addCartItemsRoute = (server) => {
    server.post('/cart-items', (req, res, next) => {
        const cartItem = req.params;
        addCartItem(cartItem);
        res.send(201);
        return next();
    })
};

const updateCartItemRoute = (server) => {
    server.put('/cart-items/:cartItemId', (req, res, next) => {
        updateCartItem(req.params);
        res.send(200);
        return next();
    })
};

const deleteCartItemRoute = (server) => {
    server.del('/cart-items/:cartItemId', (req, res, next) => {
        removeCartItemByCartItemId(req.params.cartItemId);
        res.send(204);
        return next();
    })
};


const initCartItemControllers = (server) => {
    getCartItemsroute(server);
    getCartItemsByCartItemIdroute(server);
    addCartItemsRoute(server);
    updateCartItemRoute(server);
    deleteCartItemRoute(server);
    getCartItemsByCartIdroute(server);
};

module.exports = {
    initCartItemControllers
};
