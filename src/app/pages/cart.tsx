// pages/cart.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Product } from "../../../types/products";
import Link from 'next/link';

const CartPage = () => {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
    }, []);

    const handleRemoveFromCart = (productId: string) => {
        const updatedCart = cart.filter(item => item._id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleIncrementInventory = (productId: string) => {
        const updatedCart = cart.map(item => {
            if (item._id === productId) {
                return { ...item, inventory: item.inventory + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDecrementInventory = (productId: string) => {
        const updatedCart = cart.map(item => {
            if (item._id === productId && item.inventory > 1) {
                return { ...item, inventory: item.inventory - 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>
                
                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li key={item._id} className="flex justify-between items-center border-b border-gray-200 pb-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            // src={item.image || 'https://via.placeholder.com/150'}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-sm text-gray-500">Price: ${item.price}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => handleDecrementInventory(item._id)}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded-md shadow hover:bg-yellow-600"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg">{item.inventory}</span>
                                        <button
                                            onClick={() => handleIncrementInventory(item._id)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md shadow hover:bg-blue-600"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => handleRemoveFromCart(item._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Total: ${cart.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2)}</h2>
                            <button className="bg-green-500 text-white px-6 py-2 rounded-md shadow hover:bg-green-600">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
