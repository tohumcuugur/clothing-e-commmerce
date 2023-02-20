import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component"
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>

  );

};

//if we give the path / we assign it as a home page or we can say end of the way if cant find any matches.we can give something like /home but it should match.
export default App;
