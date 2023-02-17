import "./Form.scss";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <>
      <section className="section">
        <div className="part1">{/* <h1>BlueDEV</h1> */}</div>
        <div className="part2">
          <div className="titel">
            <h1>
              Welcom To Blue<span>DEV</span>
            </h1>
            <p className="subtitel">The Blueprint Of The Web !!!</p>
          </div>

          <p className="desc">
            BlueDEV is a cutting-edge IT company that specializes in software
            development, web design, and IT consulting. With a team of skilled
            professionals and a focus on innovation, BlueDEV delivers tailored
            solutions to help businesses thrive in the digital age.
          </p>
          <Link to={`/step1`} className="btn">
            Get started
          </Link>
        </div>
      </section>
    </>
  );
};

export default Form;
