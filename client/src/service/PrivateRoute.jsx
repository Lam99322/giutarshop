import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, adminRequired = false }) => {
    const [authStatus, setAuthStatus] = useState('checking');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        const parsedUser = user ? JSON.parse(user) : null;

        if (token && token.trim() !== '' && parsedUser) {
            setAuthStatus('authenticated');
            setIsAdmin(parsedUser.role === 'admin');  // Kiểm tra quyền admin
        } else {
            setAuthStatus('unauthenticated');
        }
    }, []);

    // Nếu đang kiểm tra quyền truy cập, hiển thị thông báo
    if (authStatus === 'checking') {
        return (
            <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
                <p>Đang kiểm tra quyền truy cập...</p>
            </div>
        );
    }

    // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    if (authStatus === 'unauthenticated') {
        return <Navigate to="/login" replace />;
    }

    // Nếu yêu cầu admin và người dùng không phải là admin, chuyển hướng về trang chủ
    if (adminRequired && !isAdmin) {
        return <Navigate to="/" replace />;
    }

    // Nếu người dùng đã đăng nhập và có quyền truy cập, render trang con
    return children;
};

export default PrivateRoute;
