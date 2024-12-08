import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { shopcontext } from '../context/shopcontext';
import ProdLooks from '../components/prodlooks/prodlooks';
import ProDisplay from '../components/proDisplay/proDisplay';
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";

const Product = () => {
  const { all_product } = useContext(shopcontext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="min-h-screen bg-gray-300">
      <ProdLooks product={product} />
      <ProDisplay product={product} all_product={all_product} />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Product;
