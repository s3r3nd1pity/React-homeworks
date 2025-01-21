import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/api.services.tsx";
import PostComponent from "./PostComponent.tsx";
import {IPost} from "../../models/Posts/IPost.ts";

const PostsComponent = () => {
    const [allPosts, setAllPosts] = useState<IPost[]>([])
    useEffect(
        () => {

            getAllPosts()
                .then(({posts}) => {
                    setAllPosts(posts)
                })

        }, []
    )
    return (
        <div>
            {
                allPosts.map(value => <PostComponent key={value.id} post={value}/>)
            }
        </div>
    );
};

export default PostsComponent;