import "./Resources.css";
import { Link } from "react-router-dom";
const Resources=()=>{
return(
    <div className="Resources">
        <h3 className="Resources_Title">Resources</h3>
        <div className="Resources_Name">
                        <h4>Frontend</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link  className="alink"to="#!">How does it work</Link></li>
  	 				        <li><Link  className="alink" to="#!">How does it work</Link></li>
  	 			         </ul>
        </div>
        <div className="Resources_Name">
                        <h4>Backend</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link  className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 			         </ul>
        </div>
        <div className="Resources_Name">
                        <h4>Artificial Intelligence</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 			         </ul>
        </div>
        <div className="Resources_Name">
                        <h4>Cyber Security</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 				        <li><Link className="alink" to="#!">How does it work</Link></li>
  	 			         </ul>
        </div>
    
    </div>
);
}
export default Resources;