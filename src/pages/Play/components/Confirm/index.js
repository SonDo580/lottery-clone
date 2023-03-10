import { useSelector } from "react-redux";
import { Images } from "../../../../images";
import {
  discountSelector,
  priceSelector,
  totalSelector,
} from "../../../../redux/play/selectors";
import "./Confirm.scss";

function Confirm() {
  const price = useSelector(priceSelector);
  const discount = useSelector(discountSelector);
  const total = useSelector(totalSelector);

  return (
    <div className="confirmAndPay">
      <h2>
        <span>Step 4:</span> Confirm and Pay
      </h2>
      <div>
        <img src={Images.play.ticketGuarantee} alt="ticket_guarantee" />
        <div className="price">
          <p className="row">
            <span className="title">Price</span>
            <span data-name="price">${price}</span>
          </p>
          <p className="row">
            <span className="title">Discount</span>
            <span data-name="discount">${discount}</span>
          </p>
          <p className="row">
            <span className="title">Total</span>
            <span data-name="total">${total}</span>
          </p>
        </div>
        <div className="pay">
          <button
            data-function="pay"
            onClick={() => alert("This feature is not implemented yet!")}
          >
            Pay
          </button>
          <p>* Cheaper with Onbit Coin</p>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
