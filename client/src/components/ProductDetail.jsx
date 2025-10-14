import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/${id}`);
                console.log(res.data);
                if (res.data) {
                    setProduct(res.data);
                } else {
                    setError("Không tìm thấy sản phẩm.");
                }
            } catch (err) {
                setError("Lỗi khi lấy dữ liệu sản phẩm.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        // Logic thêm sản phẩm vào giỏ hàng
        console.log(`Đã thêm ${product.title} vào giỏ hàng.`);
    };

    if (loading) return <div className="p-6">Đang tải...</div>;
    if (error) return <div className="p-6 text-red-500">{error}</div>;
    if (!product) return null;

    return (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img
                            src={product.image_url || "/assets/"}
                            alt={product.title}
                            className="w-full max-w-md rounded-lg shadow-md mb-4"
                        />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            {product.title}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                {product.price}₫
                            </p>
                            <p className="text-gray-500 line-through mb-1">{product.originalPrice}₫</p>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-1">
                                    {/* Hiển thị đánh giá sao */}
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-4 h-4 ${index < 4 ? "text-yellow-300" : "text-gray-300"}`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                    (5.0)
                                </p>
                                <a
                                    href="#"
                                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                >
                                    345 Reviews
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <button
                                onClick={handleAddToCart}
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                            >
                                <svg
                                    className="w-5 h-5 -ms-2 me-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                    />
                                </svg>
                                Thêm vào giỏ
                            </button>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                        <p className="mb-6 text-gray-500 dark:text-gray-400">
                            {product.tag}
                        </p>

                        <p className="text-gray-500 dark:text-gray-400">
                            Hãy mua ngay chúng tôi luôn bán những sản phẩm tốt nhất trong thị trường hiện nay.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
