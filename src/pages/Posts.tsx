import UsersPostsComponent from "../components/users/UsersPostsComponent.tsx";
import {useParams} from "react-router-dom";

const Posts = () => {        const {userId} = useParams()
    return (

        <div>
            {userId && <UsersPostsComponent userId={userId}/>}

        </div>
    );
};

export default Posts;