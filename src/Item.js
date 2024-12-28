import "./Item.css"

const Item = (props) => {
  return(
      <div className="container">
          <div className="restaurant">
              <img src={props.Obj.imageUrl} alt={props.Obj.name}/>
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