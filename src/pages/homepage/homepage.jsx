import { Switch, Route, Link } from "react-router-dom";
import Visa from "../../components/visa/visa";
import visa from "../../assets/visa.png";
import discover from "../../assets/discover.png";
import paypal from "../../assets/paypal.png";
import "./homepage.css";
const Homepage = ({ match }) => {
  return (
    <>
      <div className="payment-section">
        <hr className="line" />
        <div className="payment-header">
          <div className="payment-information">
            <p>Payment Information</p>
            <p>choose your method of payment</p>
          </div>
          <div className="payment-methods">
            <Link to={match.url}>
              <img src={visa} alt="visa" />
            </Link>
            <Link to={match.url}>
              <img src={discover} alt="discover" />
            </Link>
            <Link to={match.url} className="paypal">
              <div className="dot"></div>
              <img src={paypal} alt="paypal" />
            </Link>
          </div>
        </div>
        <Switch>
          <Route path={match.url} component={Visa} />
        </Switch>
        <hr className="line" style={{ marginTop: "10px" }} />
        <div className="total-section">
          <div className="total">
            <div className="total-price">
              <p>Subtotal</p>
              <p>Estimated Tax</p>
              <p>
                Promotional Code: <span>Z4KXLM9A</span>
              </p>
            </div>
            <div className="total-price">
              <p>&#8358;2,497.00</p>
              <p>&#8358;119.64</p>
              <p>&#8358;-60.00</p>
            </div>
          </div>
          <hr className="line" style={{ margin: "40px 0px" }} />
          <div className="total-payment">
            <button>Complete payment</button>
            <p>Total: &#8358;2556.64</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
