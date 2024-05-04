/* eslint-disable react/prop-types */
import "./CartModal.scss";
import { shopping_cart } from "../../utils/images";
import { formatPrice } from "../../utils/helpers";
// import { Link } from "react-router-dom";

function CartModal({ carts }) {
  return (
    <div className="cart-modal">
      <h5 className="cart-modal-title fw-5 fs-15 font-manrope text-center">
        Recently Added Products
      </h5>
      {carts?.length > 0 ? (
        <div>
          <div className="cart-modal-list grid">
            {carts.map((cart) => {
              return (
                <div
                  className="cart-modal-item grid aling-center font-manrope py-2"
                  key={cart.id}
                >
                  <div className="cart-modal-item-img">
                    <img src={cart?.thumbnail} alt="" className="img-cover" />
                  </div>
                  <div className="cart-modal-item-title fs-13 font-manrope text-capitalize">
                    {cart?.title}
                  </div>
                  <div className="cart-modal-item-price text-orange fs-14 fw-6">
                    {formatPrice(cart?.discountedPrice)}
                  </div>
                </div>
              );
            })}
            <div className="text-capitalize view-cart-btn bg-orange fs-15 font-manrope text-center">
              view my shopping cart
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-column align-center justify-center cart-modal-empty">
          <img src={shopping_cart} alt="" className="" />
          <h5 className="text-dark fw-4">No products yet</h5>
        </div>
      )}
    </div>
  );
}

export default CartModal;
