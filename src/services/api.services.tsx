import {urls} from "../url/urls.ts";
import {IPost} from "../models/Posts/IPost.ts";
import {all} from "../models/users/IUsers.ts";

export const getAllUsers=async ():Promise<all>=>{
    return(
        await fetch(urls.users.allUsers)
            .then(value => value.json())
    )
}
export const getAllPosts=async ():Promise<IPost>=>{
    return(
        await fetch(urls.posts.allPosts)
            .then(value => value.json())
    )
}
