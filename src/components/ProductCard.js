'use client';
import React from 'react';
import { Card, Button, Tag } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductCard = ({
  title,
  description,
  price,
  image,
  tags = [],
  onAddToCart,
  onLike,
}) => {
  return (
    <Card
      hoverable
      className="w-80 m-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      cover={
        <div className="h-48 overflow-hidden">
          <img
            alt={title}
            src={image}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      }
      actions={[
        <HeartOutlined 
          key="like" 
          onClick={onLike}
          className="text-red-500 hover:text-red-600 text-lg transition-colors"
        />,
        <ShoppingCartOutlined 
          key="cart" 
          onClick={onAddToCart}
          className="text-blue-500 hover:text-blue-600 text-lg transition-colors"
        />,
      ]}
    >
      <Meta title={title} description={description} />
      <div className="mt-3">
        <div className="text-lg font-bold text-blue-600 mb-2">
          {price}
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Tag key={tag} color="blue" className="mb-1">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;