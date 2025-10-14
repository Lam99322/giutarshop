import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả sử backend sẽ trả thông tin người dùng từ một API (GET /api/user)
    fetch('http://localhost:5000/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`  // Giả sử có token để xác thực
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Lỗi khi lấy thông tin người dùng:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Đang tải thông tin...</p>;
  }

  if (!user) {
    return (
      <div className="login-prompt">
        <p>Vui lòng đăng nhập để xem thông tin.</p>
        <button onClick={() => window.location.href = '/login'}>Đăng nhập</button>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1>Thông tin người dùng</h1>
      <p><strong>Tên:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={() => window.location.href = '/edit-profile'}>Chỉnh sửa thông tin</button>
    </div>
  );
};

export default Profile;
