import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import "./Step1.scss";

const Step1 = () => {
  const { setEmail, setFullName, setId, setPhone } = useGlobalContext();
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
          <p>Enter Your Personal Informations</p>
        </div>
        <form className="form" method="POST">
          <div className="field">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="id"
              placeholder="ID:5463"
              onChange={(event) => setId(event.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="phone"
              placeholder="Phone number:XX-XX-XX-XX-XX"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="btn-control">
            {/* <button type="submit"> */}
            <Link
              to={{
                pathname: "/step2",
              }}
              className="btn next"
            >
              Next
            </Link>
            {/* </button> */}

            <Link to={`/`} className="btn back">
              Home
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step1;
