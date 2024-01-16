import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/Products.css'

export default function Products() {

    const [products, setProducts] = useState([])
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                let url = 'http://localhost:8080/products'
                if (sortOrder) {
                    url = `http://localhost:8080/price?sortOrder=${sortOrder}`
                }
                const res = await axios.get(url);
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllProducts()
    }, [sortOrder])

    const handleAscClick = () => {
        setSortOrder('Asc')
    }
    const handleDescClick = () => {
        setSortOrder('Desc')
    }

    const handleDefault = () => {
        setSortOrder('')
    }

    return (
        <>
            <section className='dropdown'>
                <span className='mainContent'>Sort &#9662;</span>
                <section className='dropdown-content'>
                    <a onClick={handleDefault}>Featured</a>
                    <a onClick={handleAscClick}>Price: Low-High</a>
                    <a onClick={handleDescClick}>Price: High-Low</a>
                </section>

            </section>
            {/* <button onClick={handleDefault} className='clikedButton'>Featured</button>
            <button onClick={handleAscClick} className='clikedButton'>Price: Low-High</button>
            <button onClick={handleDescClick} className='clikedButton'>Price: High-Low</button> */}

            <section className='productsDisplay'>
                <div className='gridProducts'>
                    {products.map(product => (
                        <div className='product' key={product.idproducts}>
                            {product.productImage && <img src={product.productImage} alt={product.productTitle} />}
                            <div className='description'>
                                <h4>{product.productTitle}</h4>
                                <h5>{`$` + product.productPrice}</h5>
                                <h5>{product.productDesc}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
