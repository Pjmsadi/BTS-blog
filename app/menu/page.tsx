import React from 'react';
import Link from 'next/link';

const MenuPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-extrabold mb-12 drop-shadow-lg">Menu</h1>
            <ul className="space-y-6">
                {['Home', 'About', 'Blog', 'Contact'].map((item) => (
                    <li key={item}>
                        <Link legacyBehavior href={`/${item.toLowerCase()}`}>
                            <a className="text-2xl font-semibold hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">{item}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuPage;
