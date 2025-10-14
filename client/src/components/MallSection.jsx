import React from 'react';

export default function MallSection() {
    const brands = [
        { logo: 'https://jamstik.com/cdn/shop/files/JSTMG-BLU-1_6196f67e-5672-4bef-9537-e82db02f14c5_5000x.jpg?v=1740418759', text: 'Ưu đãi đến 50%' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdprq0ugBtiNbCsCsk3b2AEQ0NUnFZtoPJA&s', text: 'Mua 1 tặng 1' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmm6mJhBokbxp4qDFTO6Y9-tERAhVTRtMwQ&s', text: 'Mua là có quà' },
        { logo: 'https://static.wixstatic.com/media/8c564a_b569c0d4d5dd4f5b9df395a04a6665a4~mv2.webp/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8c564a_b569c0d4d5dd4f5b9df395a04a6665a4~mv2.webp', text: 'Deli siêu sale' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpMMWVaQqXvoj8Ee-31YwvoGucgA4LbQyJg&s', text: 'Mua 1 tặng 1' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZwnK7z8bfk46Ej1-hpKKkDcDSsEixYlnUA&s', text: 'Mua 1 được 2' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYV_F4KFNscmpZevYhrXvYloHaEPDWOkwEWg&s', text: 'Mua 1 tặng 1' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixS5SaSOQLAmzczn10UHJxGA1HHwXIpFjLg&s', text: 'Mua là có quà' },
    ];

    return (
        <div className="bg-white mt-6 p-4 shadow rounded-md border border-gray-200">

            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                    <span className="text-base">LW</span>
                    <span className="text-gray-400 text-sm">| Trả hàng 15 ngày | Hàng chính hãng | Free ship</span>
                </div>
                <button className="text-red-500 text-sm hover:underline">Xem tất cả &gt;</button>
            </div>


            <div className="flex">

                <div className="w-1/4 pr-4">
                    <img
                        src="https://acemusic.com.vn/wp-content/uploads/2023/12/vi-tri-not-nhac-tren-dan-guitar.jpg"
                        alt="Mall Banner"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                <div className="w-3/4 grid grid-cols-4 gap-4">
                    {brands.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center border border-gray-200 rounded-md p-2 hover:shadow-sm transition-shadow"
                        >
                            <div className="bg-white rounded-full border p-2 w-20 h-20 flex items-center justify-center">
                                <img src={item.logo} alt={item.text} className="max-w-full max-h-full object-contain" />
                            </div>
                            <p className="text-sm mt-2 text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
