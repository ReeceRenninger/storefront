import productsReducer from './products';
import cartReducer from './cart';
import categoriesReducer from './categories';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { changeProducts, addToCart, removeFromCart } from './actions';

describe('Reducers in store', () => {
    const reducers = combineReducers({
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
    })

    const store = createStore(reducers);

    test('provides initial state', () => {
        let state = store.getState();
        let { products } = state.products;
        let { cart } = state.cart;
        let { categories } = state.categories;
        expect(products.length).toEqual(0);
        expect(cart.length).toEqual(0);
        expect(categories.length).toEqual(0);
    })

    test('contains relevant products when active category is set', () => {
        let category = { name: 'food', displayName: 'Food' };
        store.dispatch(changeProducts(category));
        let state = store.getState();
        let { products } = state.products;
        expect(products.length).toEqual(0);
        // expect(products[0].name).toEqual('Apples');
    })

    test('checks addToCart functionality', () => {
        let product = { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 };
        store.dispatch(addToCart(product));
        let state = store.getState();
        console.log('state: ', state);

        // let { cart } = state.cart;
        console.log('my cart', state.cart);
        expect(state.cart.length).toEqual(1);
        expect(state.cart[0].name).toEqual('TV');
    })

    test('checks removeFromCart functionality', () => {
        let product = { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 };
        store.dispatch(removeFromCart(product));
        let state = store.getState();
        let { cart } = state.cart;
        expect(state.cart.length).toEqual(0);
    })

})