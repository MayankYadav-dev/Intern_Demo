'use client';
import React from 'react';
import { Layout, Button, Typography, Row, Col, Space } from 'antd';
import { RocketOutlined, StarOutlined } from '@ant-design/icons';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const sampleProducts = [
  {
    title: 'Premium Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: '$299.99',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
    tags: ['Electronics', 'Audio'],
  },
  {
    title: 'Smart Watch',
    description: 'Advanced fitness tracking and smart notifications',
    price: '$199.99',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
    tags: ['Wearable', 'Tech'],
  },
  {
    title: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for better posture',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop',
    tags: ['Accessories', 'Ergonomic'],
  },
];

export default function Home() {
  const handleAddToCart = (title) => {
    alert(`Added ${title} to cart`);
  };

  const handleLike = (title) => {
    alert(`Liked ${title}`);
  };

  return (
    <Layout className="min-h-screen flex flex-col">
      <Navbar />
      <Content className="mt-16 flex-1">
        <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-blue-800 py-20 px-5 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Title level={1} className="!text-white !mb-6 text-4xl lg:text-6xl">
              Welcome to Our Amazing Platform
            </Title>
            <Paragraph className="!text-white text-lg lg:text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Discover incredible products and services that will transform your experience. 
              Join thousands of satisfied customers today!
            </Paragraph>
            <Space size="large" className="flex-wrap justify-center">
              <Button 
                type="primary" 
                size="large" 
                icon={<RocketOutlined />}
                className="bg-white text-blue-600 border-white hover:bg-gray-100 hover:text-blue-700 font-semibold px-8 py-6 h-auto"
              >
                Get Started Now
              </Button>
              <Button 
                size="large" 
                className="text-white border-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-6 h-auto bg-transparent"
              >
                Learn More
              </Button>
            </Space>
          </div>
        </div>

        <div className="py-16 px-5 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Title level={2} className="!mb-4 text-3xl lg:text-4xl">
                Featured Products
              </Title>
              <Paragraph className="text-gray-600 text-lg">
                Check out our most popular items
              </Paragraph>
            </div>
            
            <Row justify="center" gutter={[16, 16]} className="flex-wrap">
              {sampleProducts.map((product, index) => (
                <Col key={index} className="flex justify-center">
                  <ProductCard
                    {...product}
                    onAddToCart={() => handleAddToCart(product.title)}
                    onLike={() => handleLike(product.title)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="py-16 px-5 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <StarOutlined className="text-5xl text-blue-500 mb-6" />
            <Title level={2} className="!mb-4 text-3xl lg:text-4xl">
              Ready to Get Started?
            </Title>
            <Paragraph className="text-gray-600 text-lg mb-8">
              Join our community and experience the difference
            </Paragraph>
            <Button 
              type="primary" 
              size="large"
              className="bg-blue-500 hover:bg-blue-600 border-blue-500 font-semibold px-8 py-6 h-auto text-lg"
            >
              Sign Up Today
            </Button>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}