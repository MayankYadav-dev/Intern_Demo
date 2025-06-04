'use client';
import React from 'react';
import { Layout, Typography, Form, Input, Button, Card, Row, Col, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Navbar from '@/components/Navbar';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    alert('Form submitted:', values);
    message.success('Thank you for your message! We\'ll get back to you soon.');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <MailOutlined className="text-2xl text-blue-500" />,
      title: 'Email',
      content: 'intern@irinfotech.com',
    },
    {
      icon: <PhoneOutlined className="text-2xl text-blue-500" />,
      title: 'Phone',
      content: '+91 84419*****',
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-blue-500" />,
      title: 'Address',
      content: '123, Main-circle, Behror',
    },
  ];

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Navbar />
      <Content className="mt-16 py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Title level={1} className="!mb-4 text-4xl lg:text-5xl">
              Contact Us
            </Title>
            <Paragraph className="text-gray-600 text-lg">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
                <Title level={3} className="!mb-6 text-blue-600">
                  Get in Touch
                </Title>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="shadow-md hover:shadow-lg transition-shadow duration-300 border-0"
                      stylesbody={{ padding: '16px' }}
                    >
                      <div className="flex items-center">
                        {info.icon}
                        <div className="ml-4">
                          <Title level={5} className="!mb-1">
                            {info.title}
                          </Title>
                          <Paragraph className="!mb-0 text-gray-600">
                            {info.content}
                          </Paragraph>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Col>

            <Col xs={24} lg={16}>
              <Card className="shadow-lg border-0">
                <Title level={3} className="!mb-6 text-blue-600">
                  Send us a Message
                </Title>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="space-y-4"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="firstName"
                        label={<span className="font-semibold">First Name</span>}
                        rules={[{ required: true, message: 'Please enter your first name' }]}
                      >
                        <Input 
                          placeholder="Your first name" 
                          className="py-2 px-3 rounded-md"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="lastName"
                        label={<span className="font-semibold">Last Name</span>}
                        rules={[{ required: true, message: 'Please enter your last name' }]}
                      >
                        <Input 
                          placeholder="Your last name" 
                          className="py-2 px-3 rounded-md"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    label={<span className="font-semibold">Email</span>}
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' },
                    ]}
                  >
                    <Input 
                      placeholder="your.email@example.com" 
                      className="py-2 px-3 rounded-md"
                    />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    label={<span className="font-semibold">Subject</span>}
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                  >
                    <Input 
                      placeholder="What is this about?" 
                      className="py-2 px-3 rounded-md"
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label={<span className="font-semibold">Message</span>}
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <TextArea
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="py-2 px-3 rounded-md resize-none"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      size="large"
                      className="bg-blue-500 hover:bg-blue-600 border-blue-500 font-semibold px-8 py-6 h-auto"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}