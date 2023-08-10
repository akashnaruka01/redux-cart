import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";


const Home = () => {
  const productList = [
    { name: "macBook", price: "1200",id: 1, imgSrc: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuqF24_VEv2Gv8xswJHGw8hk1IazTc-IItyMOxGG0zVKNiIQORgyGMgLSSGzs6dPmnrbfoqdBfha5Lpv9FguPsZGn0DpxNgOpt0IajhPK6Kra4BIcB4yP8uw"},
    { name: "shoes", price: "1200",id: 2, imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAfGsxQww1E5kHMXekuJermKalNWo2ZDPJGDx-LgiJhPQq0UuvQLQW6kYfD5gWyo3rRjT4Jeb486vyI9grJ2rOLM4oGC20tKa_Rb3gDaqShkPCN4neRzJ4 "},
    { name: "shoes", price: "1200",id: 3, imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAfGsxQww1E5kHMXekuJermKalNWo2ZDPJGDx-LgiJhPQq0UuvQLQW6kYfD5gWyo3rRjT4Jeb486vyI9grJ2rOLM4oGC20tKa_Rb3gDaqShkPCN4neRzJ4 "},
  ];
  
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    toast.success('added to cart');
    dispatch({type:'addToCart',payload:options})
    dispatch({type:'calculatePrice'})
  };

  return (
    <Box className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          id = {i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
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
