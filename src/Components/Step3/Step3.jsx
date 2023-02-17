import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
const Step3 = () => {
  const { handelSubmit } = useGlobalContext();
  return (
    <section className="section">
      <div className="part1">{/* <h1>BlueDEV</h1> */}</div>
      <div className="part2">
        <div className="titel">
          <h1>
            Welcom To Blue<span>DEV</span>
          </h1>
          <p className="subtitel">The Blueprint Of The Web !!!</p>
        </div>
        <div className="form-desc">
          <p>Talk About Yourself in Few Lines</p>
        </div>
        <form method="POST" className="form" onSubmit={handelSubmit}>
          <textarea name="about" id="" cols="30" rows="10"></textarea>
          <div className="btn-control">
            <button type="submit">Send</button>

            <Link to={`/step2`} className="btn back">
              Back
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step3;
