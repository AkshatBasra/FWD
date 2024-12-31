import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Food from "./Food";
import LongTrip from "./LongTrip";
import ShortTrip from "./ShortTrip";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="App">
        {/*<NavBar />*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                    <NavBar />
                    <MainPage />
                </>
                } />
                <Route path="/Food" element={
                    <Food />
                } />
                <Route path="/LongTrip" element={
                    <LongTrip />
                }/>
                <Route path="/ShortTrip" element={
                    <ShortTrip />
                }/>
                <Route path="/Register" element={
                    <Register />
                }/>
                <Route path="/Login" element={
                    <Login/>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
