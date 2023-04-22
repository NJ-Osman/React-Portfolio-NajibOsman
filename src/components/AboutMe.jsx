import "./aboutMe.css";
import image from '/Images/IMG_6649.jpg'

export default function aboutMe(props) {
  return (
    <div>
      <h2 className="about-me">{props.myself}</h2>
      <div className="about">
        <div className="about-myself">
          <p class="description">{props.description}</p>
          <p className="other">{props.other}</p>
        </div>
        <div className="myself-image">
          <img src={image} class="myself-image" />
        </div>
      </div>
      <h3 className="newSection">{props.newSection}</h3>  
    </div>
  );
}
