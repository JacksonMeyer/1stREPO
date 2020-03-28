const {
  getCartItemByCartItemID
} = require('../services/cartItem-service');

const getCartItemByCartItemIDRoute = (server) => {
  server.route({
    path: '/cartItems/{cartItemID}',
    method: 'GET',
    handler: (request, h) => {
      const cartItem = getCartItemByCartItemID(request.params.cartItemID);

      if (!cartItem) {
        return h.response().code(404);
      }

      return cartItem;
    }
  });
};

const initCartItemControllers = (server) => {
  getCartItemByCartItemIDRoute(server);
};

module.exports = {
  initCartItemControllers
};
