import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component"
import Authentication from "./routes/authentication/authentication.component";
const Shop = () =>{
  return(
    <h1> I am the shop page</h1>
  )
}

const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element= {<Shop/>} />
        <Route path="/auth" element= {<Authentication/>} />
      </Route>
    </Routes>

  );

};

//if we give the path / we assign it as a home page or we can say end of the way if cant find any matches.we can give something like /home but it should match.
export default App;
