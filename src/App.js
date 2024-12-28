import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Food from "./Food";

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
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
