'use client';
import React from 'react';
import { Layout, Typography, Card, Row, Col, Avatar } from 'antd';
import { UserOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function About() {
  const stats = [
    { icon: <UserOutlined />, title: '10,000+', description: 'Happy Customers' },
    { icon: <TeamOutlined />, title: '50+', description: 'Team Members' },
    { icon: <TrophyOutlined />, title: '5 Years', description: 'Experience' },
  ];

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Navbar />
      <Content className="mt-16 py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Title level={1} className="!mb-4 text-4xl lg:text-5xl">
              About Us
            </Title>
            <Paragraph className="text-gray-600 text-lg">
              Learn more about our company and mission
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} className="mb-16">
            <Col xs={24} lg={12}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <Title level={2} className="!mb-6 text-blue-600">
                  Our Story
                </Title>
                <Paragraph className="text-base leading-relaxed mb-4">
                  Founded in 2019, we started with a simple mission: to make technology 
                  accessible and enjoyable for everyone. What began as a small startup 
                  has grown into a trusted platform serving thousands of customers worldwide.
                </Paragraph>
                <Paragraph className="text-base leading-relaxed">
                  We believe in innovation, quality, and putting our customers first. 
                  Every product we offer is carefully selected and tested to ensure 
                  it meets our high standards.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop"
                  alt="Our team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Col>
          </Row>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Title level={2} className="text-center !mb-8 text-3xl">
              Our Achievements
            </Title>
            <Row gutter={[24, 24]} justify="center">
              {stats.map((stat, index) => (
                <Col key={index} xs={24} sm={8}>
                  <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
                    <Avatar 
                      size={64} 
                      icon={stat.icon} 
                      className="bg-blue-500 mb-4 mx-auto"
                    />
                    <Title level={2} className="!mb-2 text-blue-600">
                      {stat.title}
                    </Title>
                    <Paragraph className="text-gray-600 !mb-0">
                      {stat.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}