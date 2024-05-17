import "./style.css"

import Vector from "../../asssets/images/svg/Vector.svg"

import Img from "../../asssets/images/Image.svg"


export default
 function Layot(props){
  return(
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-text">
          <h4>Tagline</h4>
          <h1>Medium length section heading goes here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <div className="layout-button">
          <button>button</button>
          <button>
            <p>button</p>
            <img className="vector" src={Vector} alt="" /> 
          </button>
        </div>
        </div>
        
        <img src={Img} alt="teste" />
      </div>
    </div>
  );
}