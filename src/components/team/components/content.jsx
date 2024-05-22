
import EmptyImage from "../../../assets/image/Image.png";
import Linkedin from "../../../assets/image/LinkedIn.png";
import X from "../../../assets/image/X.png";
import Drible from "../../../assets/image/Vector.png";

function Content() {
  return (
    <div className="content-container">
      <img src={EmptyImage} alt="teste" className="content-image" />
      <div className="content-title">
        <h3>Full name</h3>
        <h4>Job title</h4>
      </div>
      <p className="content-dscription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="content-icon">
        <img src={Linkedin} alt="teste" />
        <img src={X} alt="teste" />
        <img src={Drible} alt="teste" />
      </div>
    </div>
  );
}

export default Content;
