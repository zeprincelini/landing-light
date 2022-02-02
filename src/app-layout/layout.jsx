import { Switch, Route } from "react-router-dom";
import Header from "../components/navigation/header/header";
import Homepage from "../pages/homepage/homepage";

const Layout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
      </Switch>
    </>
  );
};

export default Layout;
