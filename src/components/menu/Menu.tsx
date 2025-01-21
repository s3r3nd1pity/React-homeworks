import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>All users</Link></li>
                <li><Link to={'posts'}>All posts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;