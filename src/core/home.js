// import React, { useState, useEffect} from 'react'
// import Layout from './layout'
// import Carousel from './carousel';
// import { getProducts} from './apicore'
 
// // Home page that will serve as a landing page on the product site

// const Home = () => (
//     const [] = useState({})
//     (<Layout title='Welcome to Eleutheria™' description='Shop all your favs today.' className='container col-md-8 offset-md-2'>
//         <Carousel />
//     </Layout>
//     )
// )
// export default Home


import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { getProducts } from './apicore';
import Card from './card'

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <Layout
            title="FullStack React Node MongoDB Ecommerce App"
            description="Node React E-commerce App"
            className="container-fluid"
        >
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;

