import "./Step2.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";

const Step2 = () => {
  const { setSpecialty, setYoex, setDiploma } = useGlobalContext();
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
          <p>Enter Your Professional Informations</p>
        </div>
        <form method="POST" className="form">
          <div className="field">
            <select
              name="diploma"
              id=""
              placeholder="Diploma"
              onChange={(e) => {
                setDiploma(e.target.value);
              }}
            >
              <option value="BAC+5">BAC+5</option>
              <option value="BAC+3">BAC+3</option>
              <option value="BAC+2">BAC+2</option>
              <option value="Self-taugh">Self-taugh</option>
            </select>
          </div>
          <div className="field">
            <input
              type="text"
              name="specialty"
              onChange={(e) => {
                setSpecialty(e.target.value);
              }}
              placeholder="Specialty"
            />
          </div>

          <div className="field">
            <input
              type="number"
              placeholder="Years of experience"
              name="yoex"
              onChange={(e) => {
                setYoex(e.target.value);
              }}
            />
          </div>
          <div className="btn-control">
            <Link to={`/step3`} className="btn next">
              Next
            </Link>
            <Link to={`/step1`} className="btn back">
              Back
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step2;
