function Play() {
  return (
    <>
      <div className="lottery">
        <div className="img">
          <img src="./image/play/euromillions.png" alt="euromillions" />
        </div>
        <p className="time">
          Còn lại <span>2:03:05</span>
        </p>
        <p className="prize">174,000,000 EUR</p>
      </div>

      <div className="chooseTicket">
        <h2>
          <span>Bước 1:</span> Chọn số lượng vé
        </h2>
        <ul>
          <li data-num="1">1 vé</li>
          <li data-num="3" className="active">
            3 vé
          </li>
          <li data-num="5">5 vé</li>
          <li data-num="10">10 vé</li>
          <li data-num="15">15 vé</li>
        </ul>
      </div>

      <div className="chooseNumber">
        <h2>
          <span>Bước 2:</span> Chọn dãy số may mắn
        </h2>
        <p className="note">
          *Với ô TC, vé sẽ được chọn ngẫu nhiên bằng máy Vietlott, với phí tính
          thêm chỉ 500đ/vé.
        </p>
        <div className="buttonsAll">
          <button className="choose" data-function="quickPickAll">
            Chọn nhanh
          </button>
          <button className="reset" data-function="resetAll">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="cards"></div>
      </div>

      <div className="chooseMode">
        <h2>
          <span>Bước 3:</span> Chọn chế độ chơi
        </h2>
        <ul>
          <li>
            <label for="one">
              <input type="radio" name="mode" id="oneTime" checked />
              Một lần
            </label>
          </li>
          <li>
            <label for="multipleTimes">
              <input type="radio" name="mode" id="multipleTimes" />
              Nhiều kỳ
              <img src="./image/play/question.png" alt="question mark" />
              <p className="comment">
                Sử dụng bộ số đã chọn cho 5, 10 hoặc 20 lần chơi tiếp theo với
                nhiều ưu đãi và giảm giá hấp dẫn.
              </p>
            </label>
            <select name="times" id="times">
              <option value="0">2 kỳ</option>
              <option value="1">4 kỳ</option>
              <option value="2">8 kỳ</option>
            </select>
          </li>
          <li>
            <label for="longTerm">
              <input type="radio" name="mode" id="longTerm" />
              Dài hạn
              <img src="./image/play/question.png" alt="question mark" />
              <p className="comment">
                Tự động sử dụng bộ số vừa chọn cho: <br />
                - Tất cả các kỳ tiếp theo (Hàng kỳ) <br />
                - Kỳ đầu tiên mỗi tuần (Hàng tuần) <br />
                - Kỳ đầu tiên mỗi tháng (Hàng tháng) <br />
                <em>
                  *Lưu ý, bạn cần nạp đồng Onbit để thực hiện chức năng này.
                </em>
              </p>
            </label>
            <select name="term" id="term">
              <option value="0">Hàng kỳ</option>
              <option value="1">Hàng tuần</option>
              <option value="2">Hàng tháng</option>
            </select>
            <p className="note">* Miễn phí mọi lần chơi thứ 10</p>
          </li>
        </ul>
      </div>

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
