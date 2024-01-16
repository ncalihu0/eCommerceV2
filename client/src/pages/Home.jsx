import React from 'react';
import '../styles/Home.css';
import CarouselPage from '../components/Carousel';

export default function Home() {
    return (
        <>
            <main>
                <CarouselPage></CarouselPage>
            </main>
            <div className="gridHeader">
                <h2>Best Sellers</h2>
            </div>
            <section className="grid">
                <div className="containerGrid">
                    <div className="product">
                        <a href="/Products" aria-label="products page">
                            <img src="https://bananarepublicfactory.gapfactory.com/webcontent/0054/063/799/cn54063799.jpg"
                                alt="coat" />
                        </a>
                        <div className="description">
                            <h4>CLASSIC COAT</h4>
                            <h5>$138.00</h5>
                        </div>
                    </div>
                    <div className="product">
                        <a href="/Products" aria-label="products page">
                            <img src="https://bananarepublicfactory.gapfactory.com/webcontent/0054/199/364/cn54199364.jpg"
                                alt="skirt" />
                        </a>
                        <div className="description">
                            <h4>VEGAN LEATHER MIDI SKIRT</h4>
                            <h5>$72.00</h5>
                        </div>

                    </div>

                    <div className="product">
                        <a href="/Products" aria-label="products page">
                            <img src="https://bananarepublicfactory.gapfactory.com/webcontent/0054/199/342/cn54199342.jpg"
                                alt="skirt" />
                        </a>
                        <div className="description">
                            <h4>PLAID WRAP MINI SKIRT</h4>
                            <h5>$48.00</h5>
                        </div>

                    </div>
                    <div className="product">
                        <a href="/Products" aria-label="products page">
                            <img src="https://bananarepublicfactory.gapfactory.com/webcontent/0054/318/795/cn54318795.jpg"
                                alt="skirt" />
                        </a>
                        <div className="description">
                            <h4>VEGAN LEATHER MINI SKIRT</h4>
                            <h5>$51.00</h5>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}

