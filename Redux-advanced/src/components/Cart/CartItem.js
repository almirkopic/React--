import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const removeHandlerItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addHandlerItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandlerItem}>-</button>
          <button onClick={addHandlerItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
