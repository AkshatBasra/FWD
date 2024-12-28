import 'bootstrap/dist/css/bootstrap.min.css';
import {CardImg} from "react-bootstrap";
import {Link} from "react-router-dom";
import './MainPage.css';

const MainPage = () => {

  return (
      <>
        <CardImg src={require('./Pics/cola.jpeg.jpg')} className="img-fluid" alt="MainPageImage"/>
        <table className="grid">
          <tbody>
          <tr>
            <td>
              <div className="box">
                <img src={require('./Pics/image 7.png')} height={169} width={294} alt="Long Trip Pic"/>
                <p className="title"/>
                <h2>LONG TRIP?</h2>
                <p/>
                <p>Fun things to do within 10 km</p>
              </div>
            </td>
            <td>
              <Link to="Restaurants.html"></Link>
              <div className="box">
                <Link to={"/Food"}>
                  <img
                      src={require('./Pics/image 6.png')}
                      //src="./Pics/image 6.png"
                      height={181}
                      width={207}
                      alt="Restaurants Pic"
                  />
                  <p className="title"/>
                  <h2>HUNGRY?</h2>
                  <p/>
                  <p>Best places to grab something for lunch within 3 km</p>
                </Link>
              </div>
            </td>
            <td>
              <div className="box">
                <img src={require('./Pics/image 5.png')} height={169} width={293} alt="Day Out Pic"/>
                <p className="title"/>
                <h2>DAY OUT?</h2>
                <p/>
                <p>Places to visit during a long weekend</p>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </>
  )
}

export default MainPage;