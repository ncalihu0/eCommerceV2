import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/Products.css'

export default function Products() {
    const [products, setProducts] = useState([])
    const [sortOrder, setSortOrder] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                let url = 'http://localhost:8080/products'
                if (sortOrder) {
                    url = `http://localhost:8080/products?sortOrder=${sortOrder}`
                } else if (category) {
                    url = `http://localhost:8080/products?category=${category}`
                }
                const res = await axios.get(url);
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllProducts()
    }, [sortOrder, category])

    const handleSort = (sortValue) => {
        if (sortValue === '') {
            setSortOrder('');
            setCategory('');
        } else {
            setSortOrder(sortValue);
        }
    }

    const handleCategory = (categoryValue) => {
        setSortOrder('');
        setCategory(categoryValue);
    }

    return (
        <>
            <nav className='tabs'>
                <section className='dropdown'>
                    <span className='mainContent'>Sort &#9662;</span>
                    <section className='dropdown-content'>
                        <a onClick={() => handleSort('')}>Featured</a>
                        <a onClick={() => handleSort('Asc')}>Price: Low-High</a>
                        <a onClick={() => handleSort('Desc')}>Price: High-Low</a>
                    </section>

                </section>

                <section className='dropdown'>
                    <span className='mainContent'>Category &#9662;</span>
                    <section className='dropdown-content'>
                        <a onClick={() => handleCategory('Coat')} >Coat</a>
                        <a onClick={() => handleCategory('Blazer')} >Blazer</a>
                        <a onClick={() => handleCategory('Jacket')}>Jacket</a>
                        <a onClick={() => handleCategory('Shirtdress')}>Shirtdress</a>
                        <a onClick={() => handleCategory('Skirt')} >Skirt</a>
                        <a onClick={() => handleCategory('Shirt')}>Shirt</a>
                    </section>

                </section>
            </nav>



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
