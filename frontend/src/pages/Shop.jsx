import React from "react";
import Head from "../components/shopheader/header";
import PProducts from "../components/perproducts/products";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";

const Shop = () => {
  return (
    <div>
      <Head />
      <PProducts />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Shop;
