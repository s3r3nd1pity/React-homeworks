import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
           <ul>
               <li><Link to={'/users'}>us</Link></li>
               <li><Link to={'/posts'}>post</Link></li>
           </ul>
        </div>
    );
};

export default Menu;