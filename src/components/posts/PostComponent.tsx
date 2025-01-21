import {IPost} from "../../models/Posts/IPost.ts";
import {FC} from "react";

type PostComponentPropType={
    post:IPost
}
const PostComponent:FC<PostComponentPropType> = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;