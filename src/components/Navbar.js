'use client';
import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ContactsOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header } = Layout;

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: <Link href="/about">About</Link>,
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: <Link href="/contact">Contact</Link>,
    },
  ];

  return (
    <Header className="fixed top-0 z-50 w-full bg-slate-800 px-4 lg:px-8">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div className="text-white text-xl font-bold">
          Intern Demo
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
          items={menuItems}
          className="flex-1 min-w-0 justify-center bg-transparent border-none"
        />
        <Button type="primary" className="bg-blue-500 hover:bg-blue-600 border-blue-500">
          Get Started
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;