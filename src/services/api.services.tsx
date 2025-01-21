import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IUsersPosts} from "../models/IUsersPosts.ts";

export const getUsers=async ():Promise<IUser[]>=>{
    return(await fetch(urls.users.allUsers)
        .then(value => value.json()))
}
export const getPosts=async (id:number):Promise<IUsersPosts[]>=>{
    return (await fetch(urls.posts.userPostsById(id))
        .then(value=>value.json())
    )
}