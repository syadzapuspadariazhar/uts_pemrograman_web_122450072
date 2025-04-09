import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      {/* ⬇️ Kasih prop onSearch ke Header */}
      <Header title="Beauty in Click" onSearch={setSearchKeyword} />
      
      {/* ⬇️ Pass keyword ke halaman anak */}
      <main className="flex-grow p-4">
        <Outlet context={{ searchKeyword }} />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
