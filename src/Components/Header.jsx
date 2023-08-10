import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { GiShoppingCart, GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <Box>
        <GiShoppingCart size={50} />
        <Text color={"white"} fontSize={"1.4rem"}>
          Dmart
        </Text>
      </Box>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <GiShoppingBag size={40} color="white" />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
