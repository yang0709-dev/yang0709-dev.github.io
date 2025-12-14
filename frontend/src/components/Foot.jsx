import { FiYoutube } from "react-icons/fi";
import { TiSocialGithubCircular } from "react-icons/ti";
import "../css/Foot.css";

export default function Foot() {
  return (
    <div id="foot-container">
      <div id="big-div">
        <div className="icons">
          <a href='https://youtube.com/@Scorp588' className="links">
            <FiYoutube className="icon" />
          </a>
          
          <a href="https://github.com/yang0709-dev" className="links">
            <TiSocialGithubCircular className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
