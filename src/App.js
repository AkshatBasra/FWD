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
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
        {/*<NavBar />*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <NavBar Heading='TravOn'/>
                        <MainPage />
                    </>
                } />
                <Route path="/Food" element={
                    <>
                        <NavBar Heading='Restaurants Near BMS'/>
                        <Food />
                    </>
                } />
                <Route path="/LongTrip" element={
                    <>
                        <NavBar Heading='Long Trip Destinations'/>
                        <LongTrip />
                    </>
                }/>
                <Route path="/ShortTrip" element={
                    <>
                        <NavBar Heading='Short Trip Destinations'/>
                        <ShortTrip />
                    </>
                }/>
                <Route path="/Register" element={
                    <Register />
                }/>
                <Route path="/Login" element={
                    <Login/>
                }/>
                <Route path='/DashBoard' element={
                    <>
                        <NavBar Heading='DashBoard'/>
                        <Dashboard/>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
