import React from 'react';
import '../styles/Home.css';
import '../styles/Products.css'
import CarouselPage from '../components/Carousel';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [id, setId] = useState([]);
    const bestSellers = [1, 10, 12, 11]
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                let url = `https://byshop-backend.onrender.com/products?id=${bestSellers}`
                const res = await axios.get(url);
                setId(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllProducts()
    })

    return (
        <>
            <main>
                <CarouselPage></CarouselPage>
            </main>
            <div className="gridHeader">
                <h2>Best Sellers</h2>
            </div>

            <section className='productsDisplay'>
                <div className='gridProducts'>
                    {id.map(id => (
                        <div className='product' key={id.idproducts}>
                            {id.productImage && <img src={id.productImage} alt={id.productTitle} />}
                            <div className='description'>
                                <h4>{id.productTitle}</h4>
                                <h5>{`$` + id.productPrice}</h5>
                                <h5>{id.productDesc}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

