const item = {
    itemId: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    name: 'Turtle socks',
    description: 'Fluffy turtle socks or socks for your pet turtle!',
    price: 12.34,
    size: 'XL'
};

const firstName = 'Jackson';
const lastName = 'Meyer';

const customer = {
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+15155555555'
};

const cart = {
	owner = customer,
	createdDate: '2020-02-15',
	purchasedDate: '2025-02-15'
};

const cartItems = [{
  itemId : ['02bbdbc7-e22e-4153-abd8-b5732a4ba6a5'],
  itemName : "Turtle Socks",	  
  quantity : 2
}, {
  itemId : '01bbdbc7-e22e-4153-abd8-b5732a4ba2a7',
  itemName : "Turtle Mittens",
  quantity : 1
}];



console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartItems', cartItems); 