import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import Banner from '../components/banner/banner';
import FeatureHome from '../components/featureHome/featureHome';
import IsotopeProduct from 'src/components/IsotopeProduct/isotopeProduct';
import ProductSide from 'src/components/product/product';
import Contact from 'src/components/contact/contact';
import Footer from 'src/components/footer/footer';
import LayoutStatic from 'src/components/layout/layout';
import ClientSide from 'src/components/clientSite/client';
import Blog from 'src/components/blog/blog';
import useProduct from './products/useProduct';
// import 'src/pages/css/main.css';

const Home = () => {
  const [data, setData] = useState(false);
  const { listProduct, loading } = useProduct({});
  return (
    <div style={{ background: 'white' }}>
      <Banner />
      <FeatureHome />
      <IsotopeProduct listProduct={listProduct} loading={loading} />
      <ProductSide />
      <Contact />
      <Blog />
      <ClientSide />
      <LayoutStatic />
    </div>
  );
};

export default Home;
