import { Home } from "./Routes/home/home.component";
import { Navigate } from "./Routes/navigate/navigate.compnent";
import { Routes, Route, } from "react-router-dom";
import { SignIn } from "./Routes/sign-in/sign-in.component";

const App = () =>  {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate />} >
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} exact="true"/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
