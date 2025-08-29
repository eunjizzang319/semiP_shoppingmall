import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* 상단 헤더 */}
      <div className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-gray-800 shadow-sm">
        <div className="text-2xl font-bold">SEMIP</div>

        {/* 검색창 */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="상품을 검색하세요"
            className="w-full max-w-md px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>

        {/* 상단 메뉴 */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-200 font-medium hover:text-white"
          >
            로그인
          </Link>
          <Link
            to="/join"
            className="text-gray-200 font-medium hover:text-white"
          >
            회원가입
          </Link>
          <Link
            to="/cart"
            className="text-gray-200 font-medium hover:text-white"
          >
            장바구니
          </Link>
        </div>
      </div>

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

      {/* 메인 배너 */}
      <div
        className="flex items-center justify-center h-80 bg-cover bg-center text-white text-3xl font-bold"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1400x350/000000/FFFFFF?text=Modern+Promo+Banner')",
        }}
      >
        2025 NEW COLLECTION
      </div>

      {/* 추천 상품 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold border-l-4 border-black pl-3 mb-6 text-gray-900">
          추천 상품
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "상품 1", price: "₩29,900" },
            { name: "상품 2", price: "₩49,900" },
            { name: "상품 3", price: "₩19,900" },
            { name: "상품 4", price: "₩99,900" },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=${p.name}`}
                alt={p.name}
                className="w-full rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-900">
                  {p.name}
                </h3>
                <p className="text-black font-bold">{p.price}</p>
                <button className="inline-block mt-3 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition">
                  장바구니
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 푸터 */}
      <footer className="bg-black text-gray-300 text-center py-6 mt-12">
        <p>ⓒ 2025 SEMIP. All rights reserved.</p>
        <p className="mt-1">고객센터: 1234-5678 | 이메일: help@shop.com</p>
      </footer>
    </div>
  );
};

export default MainPage;
