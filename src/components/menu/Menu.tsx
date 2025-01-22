import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'cars'}>See all cars</Link></li>
            </ul>
        </div>
    );
};

export default Menu;