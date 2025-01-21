import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
           <ul>
               <li><Link to={'users'}>Go to all users</Link></li>
               <li><Link to={''}>Go to Home Page</Link></li>
           </ul>
        </div>
    );
};

export default Menu;