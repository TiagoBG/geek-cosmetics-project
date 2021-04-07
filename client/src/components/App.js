import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import BuyItems from "../pages/BuyItems";
import SeeOrders from "../pages/SeeOrders";

export default function App() {
  return (
    <section>
      <Router>
        <div>
          <Switch className="mt-5">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/buy">
              <BuyItems />
            </Route>
            <Route path="/orders">
              <SeeOrders />
            </Route>
          </Switch>
        </div>
      </Router>
    </section>
  );
}
