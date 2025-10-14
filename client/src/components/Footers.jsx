import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footers() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <svg className="h-8 mr-2" viewBox="0 0 28 24" fill="currentColor">
                                <path d="M0 0h28v24H0z" fill="none" />
                                <text x="0" y="15" fontSize="14" fontWeight="bold" fill="currentColor">GuitarShop</text>
                            </svg>
                            <span className="text-xl font-bold text-teal-400">GuitarShop</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Chuyên cung cấp các loại guitar chất lượng cao với giá cả hợp lý. Đồng hành cùng bạn trên con đường âm nhạc.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <FaFacebook className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <FaYoutube className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-teal-400 border-b border-teal-400 pb-2">Sản phẩm</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Guitar Acoustic</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Guitar Điện</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Guitar Classic</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Phụ kiện</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Amply & Hiệu ứng</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-teal-400 border-b border-teal-400 pb-2">Hỗ trợ</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Trung tâm hỗ trợ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Hướng dẫn mua hàng</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Chính sách bảo hành</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Đổi trả & Hoàn tiền</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Câu hỏi thường gặp</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-teal-400 border-b border-teal-400 pb-2">Liên hệ</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-2 text-teal-400" />
                                <span className="text-gray-400">123 Đường Âm Nhạc, Quận 1, TP.HCM</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-2 text-teal-400" />
                                <span className="text-gray-400">(028) 1234 5678</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2 text-teal-400" />
                                <span className="text-gray-400">info@guitarshop.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Đăng ký nhận bản tin</h3>
                            <p className="text-gray-400">Nhận thông tin khuyến mãi và sản phẩm mới nhất</p>
                        </div>
                        <form className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-md transition-colors"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} GuitarShop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}