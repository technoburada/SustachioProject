import { React} from "react";
import { Link } from "react-router-dom";

import "./Careerus.css";

const Joinus = () => {
  return (
    <div className="JoinUs">
      {/* Background Section with Overlay */}
      <div className="JoinUs-background">
        <div className="overlay"></div> {/* Overlay */}
        <div className="JoinUs-content">
          <h1>GREEN JOBS</h1>
          <div className="JoinUs-buttons">
            <Link to="/jobapplicationform"><button className="JoinUs-button join-team">Join the Team</button></Link>
            <Link to="/"><button className="JoinUs-button culture">Culture</button></Link>
          </div>
          <p className="JoinUs-description">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without relying on meaningful
            content. Lorem ipsum may be used as a placeholder before final copy is available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
