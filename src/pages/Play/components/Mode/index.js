import { Images } from "../../../../images";

function Mode() {
  return (
    <div className="chooseMode">
      <h2>
        <span>Step 3:</span> Choose play mode
      </h2>
      <ul>
        <li>
          <label htmlFor="one">
            <input type="radio" name="mode" id="oneTime" />
            Once
          </label>
        </li>

        <li>
          <label htmlFor="multipleTimes">
            <input type="radio" name="mode" id="multipleTimes" />
            Multiple Times
            <img src={Images.play.question} alt="question mark" />
            <p className="comment">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              praesentium consequatur cum!
            </p>
          </label>
          <select name="times" id="times">
            <option value="0">2 times</option>
            <option value="1">4 times</option>
            <option value="2">8 times</option>
          </select>
        </li>

        <li>
          <label htmlFor="longTerm">
            <input type="radio" name="mode" id="longTerm" />
            Long Term
            <img src={Images.play.question} alt="question mark" />
            <p className="comment">
              Lorem ipsum dolor sit amet consectetur: <br />
              - Lorem ipsum dolor sit amet. <br />
              - Lorem ipsum dolor sit amet. <br />
              - Lorem ipsum dolor sit amet. <br />
              <em>*Lorem ipsum dolor sit amet consectetur adipisicing.</em>
            </p>
          </label>
          <select name="term" id="term">
            <option value="0">Every quarter</option>
            <option value="1">Every week</option>
            <option value="2">Every month</option>
          </select>
          <p className="note">* Free for 10th time</p>
        </li>
      </ul>
    </div>
  );
}

export default Mode;
