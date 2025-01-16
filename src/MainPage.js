import 'bootstrap/dist/css/bootstrap.min.css';
import {CardImg} from "react-bootstrap";
import {Link} from "react-router-dom";
import './MainPage.css';

const MainPage = () => {

  return (
      <>
        <CardImg src={process.env.PUBLIC_URL + '/Pics/cola.jpeg.jpg'} className="img-fluid" alt="MainPageImage"/>

        {/*Text For Homepage*/}
        <p className='main-text text-center fst-italic'>
          Explore the vibrant city of Bangalore and discover the beauty around BMS College of Engineering. From historic landmarks to modern attractions, there's something for every traveler looking to blend education with adventure.
          <br/><br/><br/>
        {/*<strong>Motivation Behind Travon</strong><br/>*/}
        {/*The idea for Travon emerged from the need to simplify travel and food discovery for students and staff at BMSCE. With busy schedules, finding nearby eateries, quick getaway spots, or planning longer trips can be daunting. By creating a platform that highlights local gems and incorporates peer-driven favorites, Travon encourages exploration while building a sense of community. This project reflects the spirit of BMSCE by blending technology with a shared passion for food, travel, and discovery.*/}
        </p>
        <table className="grid">
          <tbody>
          <tr>
            <td>
              <Link to={"/ShortTrip"}>
                <div className="box">
                  <img src={process.env.PUBLIC_URL + '/Pics/image 7.png'} height={169} width={294} alt="Long Trip Pic"/>
                  <p className="title"/>
                  <h2>LONG TRIP?</h2>
                  <p/>
                  <p>Fun things to do within 10 km</p>
                </div>
              </Link>
            </td>
            <td>
              <div className="box">
                <Link to={"/Food"}>
                  <img
                      src={process.env.PUBLIC_URL + '/Pics/image 6.png'}
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
              <Link to={"/LongTrip"}>
                <div className="box">
                  <img src={process.env.PUBLIC_URL + '/Pics/image 5.png'} height={169} width={293} alt="Day Out Pic"/>
                  <p className="title"/>
                  <h2>DAY OUT?</h2>
                  <p/>
                  <p>Places to visit during a long weekend</p>
                </div>
              </Link>
            </td>
          </tr>
          </tbody>
        </table>
      </>
  )
}

export default MainPage;