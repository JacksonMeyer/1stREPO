const {
    getCarts,
    getCartByCartId,
    getCartsByCustomerId,
    addCart,
    updateCart,
    removeCartByCartId
} = require('../services/cart-service');

const getCartsroute = (server) => {
    server.get('/carts', (req, res, next) => {
        res.send(200, getCarts());
        return next();
    })
};

const getCartByCartIdroute = (server) => {
    server.get('/carts/:cartId', (req, res, next) => {
        try {
            const cart = getCartByCartId(req.params.cartId);
            res.send(200, cart);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const getCartsByCustomerIdRoute = (server) => {
    server.get('/customers/:customerId/carts', (req, res, next) => {

        try {
            const carts = getCartsByCustomerId(req.params.customerId);
            res.send(200, carts);
        
        } catch(error) {
            res.send(404);
        }
        return next();

    })
};

const addCarts = (server) => {
    server.post('/carts', (req, res, next) => {
        const cart = req.params;
        addCart(cart);
        res.send(201);
        return next();
    })
};

const updateCartroute = (server) => {
    server.put('/carts/:cartId', (req, res, next) => {
        updateCart(req.params);
        res.send(200);
        return next();
    })
};

const deleteCart = (server) => {
    server.del('/carts/:cartId', (req, res, next) => {
        removeCartByCartId(req.params.cartId);
        res.send(204);
        return next();
    })
};

const initCartControllers = (server) => {
    getCartsroute(server);
    getCartByCartIdroute(server);
    getCartsByCustomerIdRoute(server);
    addCarts(server);
    updateCartroute(server);
    deleteCart(server);
};

module.exports = {
    initCartControllers
};
