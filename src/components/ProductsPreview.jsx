import React, { useState, useEffect } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";


export const ProductsPreview = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const [notification, setNotification] = useState("");

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        fetch('https://giancarlos.onrender.com/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
        setNotification(`${product.name} has been added to the cart`);
        setTimeout(() => {
          setNotification(""); // Clear the notification after a certain time
      }, 3000);

    }
    
    return (
        <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
          {/* Display the notification if there is one */}
          {notification && (
                <div className="notification fixed top-0 inset-x-0 mx-auto mt-4 w-80 bg-green-200 p-2 rounded-lg text-black">
                    {notification}
                </div>
            )}
            <Carousel responsive={responsive}>
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                        <div className="w-full p-3">
                            <ProductPreviewCard key={index} product={product} onAddProduct={onAddProduct} />
                        </div>
                    )
                })
            }
            </Carousel>
        </div>
    )
}
