import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CategoryProductDetail from '../../components/CategoryProductDetail/CategoryProductDetail';
import UseDetail from '../../components/CategoryProductDetail/useDetail';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [page, setPageOpen] = useState(true);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:8000/products/${params.id}`)
      .then(res => res.json())
      .then(res => setProduct(res));
  }, []);

  return (
    <>
      <Header page={page} setPageOpen={setPageOpen} />
      {product.map(props => {
        return <CategoryProductDetail key={props.id} {...props} />;
      })}
      <UseDetail />
      <Carousel />
      <Footer />
    </>
  );
}

export default ProductDetail;
