import "./CartWidget.scss";
import cart from "../../assets/cartBlack.png";

export const CartWidget = () => {
  return (
    <div className="cart-cont">
      <div className="cart">
        <button className="cart_button">
          <img src={cart} className="cart_icon" alt="cart icon" />
        </button>
        <div className="cart_counter_fondo">
          <p className="cart_counter">0</p>
        </div>
      </div>
    </div>
  );
};
