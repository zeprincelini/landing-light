import { Switch, Route } from "react-router-dom";
import Visa from "../../components/navigation/visa/visa";
import "./homepage.css";
const Homepage = ({ match }) => {
  return (
    <>
      <hr className="line" />
      <div className="payment-section">
        <div className="payment-header">
          <div className="payment-information">
            <p>Payment Information</p>
            <p>choose your method of payment</p>
          </div>
          <div className="payment-methods">
            <span>visa</span>
            <span>sisa</span>
            <span>paypal</span>
          </div>
        </div>
        <Switch>
          <Route path={match.url} component={Visa} />
        </Switch>
        <div></div>
      </div>
    </>
  );
};

export default Homepage;
