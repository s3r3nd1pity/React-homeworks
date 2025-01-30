import {Link} from "react-router-dom";

export const Menu=()=>{
    return(
        <div>
            <ul>
                <li><Link to={'users'}>Go to users</Link></li>
                <li><Link to={'users/1'}>Go to user 1</Link></li>
                <li><Link to={'posts'}>Go to posts</Link></li>
            </ul>
        </div>
    )
}