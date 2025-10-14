import React from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';
import { Truck, Music, Headphones, Gift, Shield } from 'lucide-react';

export default function Carousel() {
    return (
        <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Features */}
                    <div className="w-full lg:w-1/4 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <Truck className="text-blue-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Miễn phí vận chuyển</h3>
                                    <p className="text-gray-600 mt-1">Giao hàng toàn quốc với đơn từ 1.000.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-100 rounded-full">
                                    <Gift className="text-green-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Quà tặng hấp dẫn</h3>
                                    <p className="text-gray-600 mt-1">Tặng kèm phụ kiện trị giá 300.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Carousel */}
                    <div className="w-full lg:w-2/4 rounded-xl overflow-hidden shadow-lg">
                        <TECarousel ride="carousel" showIndicators showControls interval={3000}>
                            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                                <TECarouselItem 
                                    itemID={1} 
                                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                >
                                    <div className="relative h-80 md:h-96">
                                        <img 
                                            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                            className="absolute inset-0 w-full h-full object-cover" 
                                            alt="Guitar Collection"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center pl-12">
                                            <div className="max-w-md">
                                                <h2 className="text-3xl font-bold text-white mb-3">Bộ Sưu Tập Mới</h2>
                                                <p className="text-gray-200 mb-4">Khám phá những cây đàn guitar chất lượng cao với thiết kế độc đáo</p>
                                                <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                                                    Xem ngay
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </TECarouselItem>
                                
                                <TECarouselItem 
                                    itemID={2} 
                                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                >
                                    <div className="relative h-80 md:h-96">
                                        <img 
                                            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                            className="absolute inset-0 w-full h-full object-cover" 
                                            alt="Guitar Sale"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center pl-12">
                                            <div className="max-w-md">
                                                <h2 className="text-3xl font-bold text-white mb-3">Giảm Giá Lên Đến 30%</h2>
                                                <p className="text-gray-200 mb-4">Ưu đãi đặc biệt trong tháng này - Đừng bỏ lỡ!</p>
                                                <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                                                    Mua ngay
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </TECarouselItem>
                                
                                <TECarouselItem 
                                    itemID={3} 
                                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                >
                                    <div className="relative h-80 md:h-96">
                                        <img 
                                            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                            className="absolute inset-0 w-full h-full object-cover" 
                                            alt="Guitar Workshop"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center pl-12">
                                            <div className="max-w-md">
                                                <h2 className="text-3xl font-bold text-white mb-3">Workshop Guitar</h2>
                                                <p className="text-gray-200 mb-4">Tham gia lớp học miễn phí cùng các nghệ sĩ chuyên nghiệp</p>
                                                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                                                    Đăng ký ngay
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </TECarouselItem>
                            </div>
                        </TECarousel>
                    </div>

                    {/* Right Features */}
                    <div className="w-full lg:w-1/4 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 rounded-full">
                                    <Music className="text-purple-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Âm thanh chuẩn</h3>
                                    <p className="text-gray-600 mt-1">Kiểm tra chất lượng âm thanh trước khi mua</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-100 rounded-full">
                                    <Shield className="text-red-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Bảo hành dài hạn</h3>
                                    <p className="text-gray-600 mt-1">Bảo hành chính hãng lên đến 24 tháng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    {['Guitar Acoustic', 'Guitar Classic', 'Guitar Điện', 'Phụ kiện', 'Dây đàn', 'Capo', 'Amply', 'Hiệu ứng'].map((tag) => (
                        <span 
                            key={tag}
                            className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:bg-teal-50 hover:text-teal-600 transition"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}