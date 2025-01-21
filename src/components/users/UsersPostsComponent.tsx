import {FC, useEffect, useState} from "react";
import {getPosts} from "../../services/api.services.tsx";
import {IUsersPosts} from "../../models/IUsersPosts.ts";

type PostsPropsType={
    userId:string
}
const UsersPostsComponent:FC<PostsPropsType>= ({userId}) => {
    const [posts, setPosts] = useState<IUsersPosts[]>([])

    useEffect(() => {
        if (userId) {
            getPosts(+userId)
                .then(value => {
                    setPosts(value)
                })
        }


    }, [userId])
    return (
        <div>
            {
                posts.map(value => <div key={value.id}>{value.title}</div>)
            }
        </div>
    );
};

export default UsersPostsComponent;