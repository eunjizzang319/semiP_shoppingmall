import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shopUsers } from "../data/shopUsers";

const UserPage = () => {
  console.log(shopUsers);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(shopUsers);
  }, []);

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* 상단 헤더 */}
      <header className="bg-black text-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SEMIP</div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-200 hover:text-white">
            홈
          </Link>
          <Link to="/cart" className="text-gray-200 hover:text-white">
            장바구니
          </Link>
          <Link to="/login" className="text-gray-200 hover:text-white">
            로그아웃
          </Link>
        </nav>
      </header>

      {/* 메인 메뉴 */}
      <nav className="bg-white shadow border-b border-gray-200">
        <ul className="flex justify-center">
          {[
            { name: "Top", path: "top" },
            { name: "Bottom", path: "bottom" },
            { name: "Outer", path: "outer" },
            { name: "Acc", path: "acc" },
            { name: "Event", path: "event" },
            { name: "My Page", path: "user" },
          ].map((menu) => (
            <li key={menu.path}>
              <Link
                to={`/${menu.path}`}
                className="block px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 메인 컨테이너 */}
      <main className="max-w-5xl mx-auto p-6">
        {/* 회원 정보 카드 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">회원 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            {user.map((i) => {
              <div key={i.uno} className="mb-4 p-3 border rounded">
                <p>
                  <span className="font-semibold">아이디:</span> {i.id}
                </p>
                <p>
                  <span className="font-semibold">이름:</span> {i.name}
                </p>
                <p>
                  <span className="font-semibold">이메일:</span> {i.email}
                </p>
                <p>
                  <span className="font-semibold">연락처:</span> {i.num}
                </p>
              </div>;
            })}
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              회원정보 수정
            </button>
          </div>
        </div>

        {/* 주문 내역 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">주문 내역</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white text-left">
                <th className="p-3">주문번호</th>
                <th className="p-3">상품명</th>
                <th className="p-3">가격</th>
                <th className="p-3">상태</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">10001</td>
                <td className="p-3">여름 반팔 티셔츠</td>
                <td className="p-3">₩29,900</td>
                <td className="p-3 text-green-600 font-semibold">배송 완료</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">10002</td>
                <td className="p-3">가죽 지갑</td>
                <td className="p-3">₩59,900</td>
                <td className="p-3 text-yellow-600 font-semibold">배송 중</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 배송지 관리 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">배송지 관리</h2>
          <p className="mb-2 text-gray-800">
            <span className="font-semibold">기본 배송지:</span> 서울시 성남구
            분당동 123-4
          </p>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            배송지 변경
          </button>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-black text-gray-300 text-center py-6 mt-12">
        <p>ⓒ 2025 SEMIP. All rights reserved.</p>
        <p className="mt-1">고객센터: 1234-5678 | 이메일: help@shop.com</p>
      </footer>
    </div>
  );
};

export default UserPage;
