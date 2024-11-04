'use client';
import React, { useEffect, useState } from 'react';

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "200px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#342e2e",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "4px",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "8px 0",
    },
    price: {
        fontSize: "16px",
        color: "#4CAF50",
    },
    rating: {
        fontSize: "14px",
        color: "#f3f3f3",
    }
};

const Store = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const ProductCard = ({ product }) => {
        return (
            <div style={styles.card}>
                <img src={product.image} alt={product.title} style={styles.image} />
                <h2 style={styles.title}>{product.title}</h2>
                <p style={styles.price}>${product.price}</p>
                <p style={styles.rating}>Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
            </div>
        );
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Store!</h1>
            <p>Explore our range of products and enjoy your shopping experience.</p>
            <div style={{margin: 50}}>
                <input style={{width: "400px", height: "25px", borderRadius: "5px", outline: "none", border: "1px solid lightgrey", fontSize: "16px", backgroundColor: "#7a7a7a"}}
                       title={"Search Products"}
                       type={"text"}
                       placeholder="Search products..."
                       value={searchQuery}
                       onChange={handleSearch}/>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Store;
