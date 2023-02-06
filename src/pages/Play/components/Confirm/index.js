import { Images } from "../../../../images";

function Confirm() {
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
            <span data-name="price"></span>
          </p>
          <p className="row">
            <span className="title">Discount</span>
            <span data-name="discount"></span>
          </p>
          <p className="row">
            <span className="title">Total</span>
            <span data-name="total"></span>
          </p>
        </div>
        <div className="pay">
          <button data-function="pay">Pay</button>
          <p>* Cheaper with Onbit Coin</p>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
