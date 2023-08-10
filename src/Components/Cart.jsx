import { Box } from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const { cartItems, subTotal, shipping, tax, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({type:'addToCart',payload: {id}})
    dispatch({type:'calculatePrice'})
  }
  const decrement = (id) => {
    dispatch({type:'decrement',payload: id})
    dispatch({type:'calculatePrice'})
  }
  const deleteHandler = (id) => {
    dispatch({type:'deleteFromCart',payload:id})
    dispatch({type:'calculatePrice'})
  }

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>no items yet</h1>
        )}
      </main>

      <aside>
        <h2>subtotal: ${subTotal}</h2>
        <h2>shipping: ${shipping}</h2>
        <h2>tax: ${tax}</h2>
        <h2>total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartitem">
    <img src={imgSrc} alt="item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
