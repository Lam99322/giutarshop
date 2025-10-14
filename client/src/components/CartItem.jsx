import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Zap } from "lucide-react";

const CartItem = ({ id, image, title, originalPrice, price, discount }) => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate("/cartpay", {
            state: {
                id,
                image,
                title,
                originalPrice,
                price,
                discount,
            },
        });
    };

    // Format price with thousand separators
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
        }).format(price).replace('₫', '') + '₫';
    };

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 w-full max-w-xs border border-gray-100">
            {/* Product Image */}
            <Link to={`/product/${id}`} className="block relative group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {discount > 0 && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{discount}%
                    </div>
                )}
            </Link>

            {/* Product Info */}
            <div className="p-4">
                <Link to={`/product/${id}`}>
                    <h3 className="font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {title}
                    </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-red-600">
                        {formatPrice(price)}
                    </span>
                    {originalPrice > price && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                            {formatPrice(originalPrice)}
                        </span>
                    )}
                </div>

                {/* Badge & Button */}
                <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        <Zap className="w-3 h-3 mr-1" />
                        Bán chạy
                    </span>
                    <button
                        onClick={handleBuyNow}
                        className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                    >
                        <ShoppingCart className="w-4 h-4 mr-1.5" />
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;