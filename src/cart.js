import { writable } from 'svelte/store';


export const cart = writable([]);


export function addToCart(item) {
  cart.update((items) => [...items, item]);
}

export function removeFromCart(id) {
  cart.update((items) => items.filter(item => item.id !== id));
}
