import React from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';

export default function CartSection({ cartItems, onRemove, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* Header */}
            <div className="flex items-center mb-8">
              <ShoppingCart className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            </div>

            {/* Cart items */}
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <ShoppingCart className="w-16 h-16 mx-auto" />
                </div>
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 mt-2">Add some products to get started!</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      onRemove={onRemove}
                    />
                  ))}
                </div>

                {/* Total and Checkout */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-purple-600">${total}</span>
                  </div>
                  <button
                    onClick={onCheckout}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="text-2xl">{item.icon}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{item.name}</h4>
          <p className="text-gray-500">${item.price}/{item.period}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item)}
        className="text-red-500 hover:text-red-700 transition p-2"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
