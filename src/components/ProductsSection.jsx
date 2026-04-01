import React from 'react';

export default function ProductsSection({ products, cartItems, onBuy, activeTab, setActiveTab }) {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-3 rounded-md font-medium transition ${
                activeTab === "products"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-3 rounded-md font-medium transition relative ${
                activeTab === "cart"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Cart
              {cartItems.length > 0 && (
                <span className="ml-2 bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={onBuy}
                isInCart={cartItems.some(item => item.id === product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product, onBuy, isInCart }) {
  const [buttonText, setButtonText] = React.useState("Buy Now");
  
  const handleBuyClick = () => {
    if (!isInCart) {
      onBuy(product);
      setButtonText("Added to cart!");
      setTimeout(() => setButtonText("Buy Now"), 2000);
    }
  };

  const getTagColor = (tagType) => {
    switch (tagType) {
      case "popular":
        return "bg-blue-100 text-blue-700";
      case "new":
        return "bg-green-100 text-green-700";
      case "bestSeller":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
      {/* Header with icon and tag */}
      <div className="flex justify-between items-start mb-4">
        <div className="text-4xl">{product.icon}</div>
        {product.tag && (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(product.tagType)}`}>
            {product.tag}
          </span>
        )}
      </div>

      {/* Product info */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-500 ml-2">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {product.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy button */}
      <button
        onClick={handleBuyClick}
        disabled={isInCart}
        className={`w-full py-3 rounded-lg font-medium transition ${
          isInCart
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : buttonText === "Added to cart!"
            ? "bg-green-100 text-green-700"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
      >
        {isInCart ? "In Cart" : buttonText}
      </button>
    </div>
  );
}
