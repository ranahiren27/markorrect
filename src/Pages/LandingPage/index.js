import "./index.scss";
import logo from "../../assets/main_logo.svg";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <header className="for-desktop">
        <span>
          <img src={logo} alt="LOGO" />
        </span>
        <ul>
          <li className="ctc-btn">Let's Connect</li>
          <li>Our Team</li>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </header>
      <header className="for-mobile">
        <span>
          <img src={logo} alt="LOGO" />
        </span>
        <ul>
          <li className="ctc-btn">Let's Connect</li>
          <li>Our Team</li>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </header>

      <main>
        <div className="main-text">
          mark<span>orrect</span> is completely <br />
          dedicated in PROVIDING
          <br />
          SOLUTION TO clients
          <br />
          FOR achievING new hights
          <br />
          in this<span> digital era</span>.
        </div>
        <div className="ctc-btn-middle">
          <button>
            {" "}
            <span>Work</span> With Mark<span>orrect</span>
          </button>
        </div>
      </main>
    </div>
  );
}
