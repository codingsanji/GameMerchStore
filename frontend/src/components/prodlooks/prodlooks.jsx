import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaAngleRight } from 'react-icons/fa';

const ProdLooks = ({ product }) => {
  if (!product) return null;

  const categoryLink = product.category.toLowerCase() === 'phasmophobia' ? '/phasmo' : product.category.toLowerCase() === 'valorant' ? '/valo' : '/shop';

  return (
    <div className="breadcrumb flex items-center space-x-1.5 md:space-x-2 lg:space-x-3 px-4 md:px-6 lg:px-8 pt-4 bg-transparent">
      <Link to="/" className="flex items-center text-gray-800 hover:text-gray-600 transition-colors">
        <span className="text-sm md:text-base lg:text-lg">Home</span> 
        <FaAngleRight className="w-4 h-4 ml-0.5 md:w-4.5 md:h-4.5 md:ml-0.75 lg:w-5 lg:h-5 lg:ml-1" />
      </Link>
      <Link to="/shop" className="flex items-center text-gray-800 hover:text-gray-600 transition-colors">
        <span className="text-sm md:text-base lg:text-lg">Shop</span> 
        <FaAngleRight className="w-4 h-4 ml-0.5 md:w-4.5 md:h-4.5 md:ml-0.75 lg:w-5 lg:h-5 lg:ml-1" />
      </Link>
      <Link to={categoryLink} className="flex items-center text-gray-800 hover:text-gray-600 transition-colors">
        <span className="text-sm md:text-base lg:text-lg">{product.category}</span> 
        <FaAngleRight className="w-4 h-4 ml-0.5 md:w-4.5 md:h-4.5 md:ml-0.75 lg:w-5 lg:h-5 lg:ml-1" />
      </Link>
      <span className="text-sm md:text-base lg:text-lg">{product.name}</span>
    </div>
  );
};

export default ProdLooks;
