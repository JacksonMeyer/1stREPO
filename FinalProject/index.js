const restify = require('restify');
const {initCartControllers} = require('./controllers/cart-controller');
const {initCustomerControllers} = require('./controllers/customer-controller');
const {initItemControllers} = require('./controllers/item-controller');
const {initCartItemControllers} = require('./controllers/cart-item-controller');
const port = 5555;

const server = restify.createServer({
	name: 'Server'
});

server.pre((req, res, next) => {
	console.info('%s - %s', req.method, req.url);
	return next();
});

server.use(restify.plugins.bodyParser({mapParams: true}));

initCartControllers(server);
initCustomerControllers(server);
initItemControllers(server);
initCartItemControllers(server);

server.listen(port, () => {
	console.info('%s listening on port %s', server.name, port);
});
