import React, { useRef } from 'react';

export default function FlashSale() {
    const flashProducts = [
        {
            name: 'Đàn Guitar Acoustic Yamaha F310',
            price: '2.500.000',
            sold: 120,
            image: 'data:image/jpeg;base64,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',
            discount: 15,
        },
        {
            name: 'Đàn Guitar Classic Cordoba C1',
            price: '3.200.000',
            sold: 89,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqA9yneaKxF7J6EzvQvNaPUhl3XE8AWkoEyX-YRTYLJ0Qio-II',
            discount: 10,
        },
        {
            name: 'Đàn Guitar Điện Fender Stratocaster',
            price: '7.500.000',
            sold: 45,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQha6_RwPeoAhl4RFzCYlt_5bbSfke2hKEZ27srFZQml4ACv_JH',
            discount: 20,
        },
        {
            name: 'Đàn Guitar Acoustic Taylor GS Mini',
            price: '15.000.000',
            sold: 33,
            image: 'https://jamstik.com/cdn/shop/files/JSTMG-BLU-1_6196f67e-5672-4bef-9537-e82db02f14c5_5000x.jpg?v=1740418759',
            discount: 12,
        },
        {
            name: 'Đàn Guitar Classic Suzuki SCG-11',
            price: '1.950.000',
            sold: 76,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KbxsLdJjNp8xtgKDOXKTP2QKSjU2X3fcxw&s',
            discount: 8,
        },
    ];

    const productRef = useRef();

    const handleScrollLeft = () => {
        productRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const handleScrollRight = () => {
        productRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="bg-white mt-6 p-4 shadow rounded-md border border-gray-200">
            {/* Header Flash Sale */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-black-600">FLASH SALE - ĐÀN GUITAR</h2>
                    <div className="flex gap-1">
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">01</span>
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">14</span>
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">01</span>
                    </div>
                </div>
                <button className="text-black-500 text-sm hover:underline">Xem tất cả &gt;</button>
            </div>

            {/* Product Scroll List with buttons */}
            <div className="relative">
                <div className="flex gap-4 overflow-hidden" ref={productRef}>
                    {flashProducts.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[160px] bg-white border border-gray-200 rounded-md shadow-sm p-2 flex-shrink-0 relative"
                        >
                            <div className="absolute top-1 right-1 bg-yellow-400 text-xs font-bold px-1 rounded">
                                -{item.discount}%
                            </div>
                            <img src={item.image} alt={item.name} className="w-full h-24 object-contain mb-2" />
                            <div className="text-red-600 font-semibold text-sm">₫ {item.price}</div>
                            <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs text-center mt-1 py-0.5 rounded-full">
                                ĐÃ BÁN {item.sold}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleScrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-green p-2 rounded-full"
                >
                    &lt;
                </button>
                <button
                    onClick={handleScrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-green p-2 rounded-full"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
