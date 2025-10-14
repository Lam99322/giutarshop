import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Notifications from './Notifications';

const products = [
    { name: 'Analytics', description: 'Hiểu rõ hơn về lưu lượng truy cập của bạn', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Giao tiếp trực tiếp với khách hàng', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Dữ liệu của khách hàng sẽ được bảo mật', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Kết nối với các công cụ bên thứ ba', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Xây dựng các chiến lược tự động hóa hiệu quả', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Xem demo', href: '#', icon: PlayCircleIcon },
    { name: 'Liên hệ với đội ngũ bán hàng', href: '#', icon: PhoneIcon },
];

export default function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        const confirmLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất không?');
        if (confirmLogout) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        }
    };

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt="Logo"
                            src="data:image/png;base64,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"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
                            Thông tin
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel className="absolute z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div>
                                            <a href={item.href} className="font-semibold text-gray-900">
                                                {item.name}
                                            </a>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm font-semibold text-gray-900">Kết nối</a>
                    <Link to="/support" className="text-sm font-semibold text-gray-900">
                        Hỗ trợ
                    </Link>
                    <a href="#" className="text-sm font-semibold text-gray-900">Tải ứng dụng</a>
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
                    {user ? (
                        <>
                            <Notifications />
                            {/* Thông tin người dùng */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.avatar || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQExIVERIXFRoaGBUXFRoYGRkaGB8XGBgXGBcYHiggHRomGxYVITMhJSktLi4vGh8zODMsNygtLisBCgoKDg0OGxAQGysiICUtLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQ8AugMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAE8QAAIBAwMBBAUIAwoLCQAAAAECAwAEEQUSITEGE0FRIjJhcYEHFCNCUpGhsYLB0RUzNDVDYnKSouEkJVNjc3WTo7LS8BcmRVVllLPCw//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAQMDBAAHAAAAAAAAAAABAhEDEiFRBBMxIjJBYQUUI1KBkaH/2gAMAwEAAhEDEQA/AOlmlDSvQPKFKUoQKUpQClKUApSlAKUpQClKUApSlAKUpQA0oaUJFKUoQKUpQCtTVrhooJZVxuSN2GemVBIz7OK26+MoIIIyDwQeQfZQkq47RymR49giOUVFkHpZY24OQrkH9+J4PTFa0XaO4hUPIqmIQ7mPLMjFpEjZj9ZC0eCcZG4eRNW02qE7iilgcg7RkHG3IPngAZ8q+G1jwRsXBG0jaMFeTtI8uTx7TVKfJbUuCG0fWJp27sp3ZKSkOV9FismxSoDZKgHkHBzUeO0dyibmRZCY4X3qm1F7x3UhgZC3RRgjxq2JCowQoBAIGABgE5IHsJGa8m1QjaUUjjjaMccjj2Gpp8jUuCraXrs5inMmO8jhaQZTbztVxldx49MDGegFfT2kmZhAQsMqgCX0C+GAkb0FyNwcKrL7C3iKtHzVOfQXldp9EcrwNp9nA49leLmwhlBEkSSBsZ3IDnbnbnI5xk499KfI1Lgrcvawk7F7pNxAWRicR5ZV3zJxtDbgVG7nPWrTC2VByGyB6Q6H2jk8fGvItUwRsXBABGOMLwBjpgVkRAoCgAADAAGAB5AVKv5IbXwfaUpUlRSlKAUpSgFKUoAaUNKEilKUIFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoAaUNKEilR+u6n81i73YZGLoioCBueRgijJ4Ayw5rAZtTH/hn3XUVVlOMfJeOOUlaRL0qst2juleWJtOk3wIskoWaJtqNu2kZIz6jcDyrYftIXMK21tJdNLB34VSibY+BklyOctjFR3I8jtT8UTrEAZPA868xyBhlSGHmDkfeKpfabVo57e0umTfaNL9Lbs6oXJyiK3OGVZOWGcYGelbmgJCt/OloEWBYI++SI/Qi4zn6IeW3OSB5VHc9VFu16NRa6VG9odTNrD3ioJHLoiKTtBeRlRKnI1xwKYH55y2vkeOlKZJblhvgBeutgjddhb1Mflqfpylw5A72kpw7ltX9xwVSjmtGoWkkdlt4tHlIbeEq3JbkRO8Hq0Pq8HfHyED6gPr2FzzY1rsJ1W5j1kzwnZFTzHpziYXJrzppd1XgqpfN3RzEv6TtnoP9v//Z'}
                                    alt="User Avatar"
                                    className="h-8 w-8 rounded-full"
                                />
                                <span className="text-sm font-semibold text-gray-900">{user.name}</span>
                                <button onClick={handleLogout} className="text-sm font-semibold text-red-600">Đăng xuất</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-semibold text-gray-900">Đăng nhập</Link>
                            <Link to="/register" className="text-sm font-semibold text-gray-900">Đăng ký</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
