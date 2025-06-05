'use client';
import React from 'react';
import { Layout, Typography, Row, Col, Space, Divider } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  const quickLinks = [
    { icon: <HomeOutlined />, label: 'Home', href: '/' },
    { icon: <InfoCircleOutlined />, label: 'About', href: '/about' },
    { icon: <ContactsOutlined />, label: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { icon: <MailOutlined />, text: 'intern@irinfotech.com' },
    { icon: <PhoneOutlined />, text: '+91 84419*****' },
    { icon: <EnvironmentOutlined />, text: '123, Main-circle, Behror' },
  ];

  const socialLinks = [
    { icon: <FacebookOutlined />, href: '#', label: 'Facebook' },
    { icon: <TwitterOutlined />, href: '#', label: 'Twitter' },
    { icon: <LinkedinOutlined />, href: '#', label: 'LinkedIn' },
    { icon: <InstagramOutlined />, href: '#', label: 'Instagram' },
  ];

  return (
    <AntFooter className="bg-white text-gray-800 mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-8">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} lg={6}>
            <div className="mb-6">
              <Title level={3} className="!text-blue-600 !mb-4">
                Intern Demo
              </Title>
              <Paragraph className="!text-gray-600 !mb-4">
                Making technology accessible and enjoyable for everyone. 
                Join thousands of satisfied customers today!
              </Paragraph>
              <Space size="large" className="flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-xl"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </Space>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Title level={4} className="!text-blue-600 !mb-4">
              Quick Links
            </Title>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-500 transition-colors duration-300 flex items-center"
                  >
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Title level={4} className="!text-blue-600 !mb-4">
              Contact Info
            </Title>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-3">{contact.icon}</span>
                  <Text className="!text-gray-600">{contact.text}</Text>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Title level={4} className="!text-blue-600 !mb-4">
              Stay Updated
            </Title>
            <Paragraph className="!text-gray-600 !mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </Paragraph>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-50 text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 font-semibold border-blue-500">
                Subscribe
              </button>
            </div>
          </Col>
        </Row>

        <Divider className="bg-gray-300 my-8" />

        <Row justify="space-between" align="middle" className="flex-wrap">
          <Col xs={24} md={12} className="text-center md:text-left mb-4 md:mb-0">
            <Text className="!text-gray-500">
              © 2025 Intern Demo. All rights reserved.
            </Text>
          </Col>
          <Col xs={24} md={12} className="text-center md:text-right">
            <Space size="large" className="flex-wrap justify-center md:justify-end">
              <Link href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                Support
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;