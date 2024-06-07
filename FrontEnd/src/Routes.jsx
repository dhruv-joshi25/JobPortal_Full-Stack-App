import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={Home} />
      </Switch>
    </>
  );
}
