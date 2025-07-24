// src/layouts/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
