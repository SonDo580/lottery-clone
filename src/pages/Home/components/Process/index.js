import { Images } from "../../../../images";
import "./Process.scss";

function Process() {
  return (
    <section
      className="process"
      style={{ backgroundImage: Images.home.process.background }}
    >
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        dignissimos quod voluptatum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis
        dolores dolore aspernatur optio.
      </p>

      <h2>Process</h2>
      <div className="steps">
        <div className="step step1">
          <h3>Step 1</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="icon">⟹</p>
        </div>
        <div className="step step2">
          <h3>Step 2</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="icon">⟹</p>
        </div>
        <div className="step step3">
          <h3>Step 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p className="icon">⟹</p>
        </div>
        <div className="step step4">
          <h3>Step 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p className="icon">⟹</p>
        </div>
      </div>
    </section>
  );
}

export default Process;
