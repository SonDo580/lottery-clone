import Lottery from "./components/Lottery";
import Mode from "./components/Mode";
import Number from "./components/Number";
import Ticket from "./components/Ticket";

function Play() {
  return (
    <>
      <Lottery />
      <Ticket />
      <Number />
      <Mode />

      <div className="confirmAndPay">
        <h2>
          <span>Bước 4:</span> Xác nhận và thanh toán
        </h2>
        <div>
          <img src="./image/play/ticket_guarantee.png" alt="ticket_guarantee" />
          <div className="price">
            <p className="row">
              <span className="title">Giá vé</span>
              <span data-name="price"></span>
            </p>
            <p className="row">
              <span className="title">Giảm giá</span>
              <span data-name="discount"></span>
            </p>
            <p className="row">
              <span className="title">Tổng cộng</span>
              <span data-name="total"></span>
            </p>
          </div>
          <div className="pay">
            <button data-function="pay">Thanh toán</button>
            <p>* Thanh toán rẻ hơn với đồng Onbit</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;
