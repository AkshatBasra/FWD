import "./Item.css"
// const path = require("path");

const Item = (props) => {
        console.log(process.env.PUBLIC_URL + props.Obj.imageUrl);
    return(
      <div className="container">
          <div className="restaurant">
              <img src={process.env.PUBLIC_URL + props.Obj.imageUrl} alt={props.Obj.name}/>
                  <div>
                      <strong>{props.Obj.name}</strong><br/>
                      {props.Obj.info}<br/>
                      <a href={props.Obj.maps}>
                          Google Maps
                      </a>
                  </div>
          </div>
      </div>
  )
}

export default Item;