import { Images } from "../../images";
import "./Chat.scss";

function Chat() {
  return (
    <div class="fixed">
      <button class="showIcon">
        <img src={Images.fixed.message} alt="message-icon" />
      </button>

      <div class="wrapper">
        <div class="icons">
          <a href="https://zalo.me/0967401489">
            <img class="zalo" src={Images.fixed.zalo} alt="zalo-icon" />
          </a>
          <a href="https://zalo.me/0967401489">
            <img class="zalo" src={Images.fixed.zalo} alt="zalo-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chat;
