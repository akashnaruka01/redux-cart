import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from "axios";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const productList = [];

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
        setCartItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, []);

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    toast.success("added to cart");
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <Box className="home">
      {cartItems.toReversed().map((i) => (
        <ProductCard
          key={i.id}
          id={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.image}
          handler={addToCartHandler}
        />
      ))}
    </Box>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <Box className="productCard" >
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </Box>
);

export default Home;
