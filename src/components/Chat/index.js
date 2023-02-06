import { useState } from "react";
import { Images } from "../../images";
import "./Chat.scss";

function Chat() {
  const [show, setShow] = useState(false);

  const showChatIcons = () => {
    setShow(true);
  };

  const hideChatIcons = (event) => {
    if (event.target.className.includes("icons")) {
      return;
    }

    setShow(false);
  };

  return (
    <div className="fixed">
      <button className="showIcon" onClick={showChatIcons}>
        <img src={Images.fixed.message} alt="message-icon" />
      </button>

      <div
        className={`wrapper ${show ? "active" : ""}`}
        onClick={hideChatIcons}
      >
        <div className={`icons ${show ? "active" : ""}`}>
          <a href="https://zalo.me/0967401489">
            <img className="zalo" src={Images.fixed.zalo} alt="zalo-icon" />
          </a>
          <a href="https://zalo.me/0967401489">
            <img className="zalo" src={Images.fixed.zalo} alt="zalo-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chat;
