import {all} from "../models/users/IUsers.ts";
import {urls} from "../url/urls.ts";

export const getUsersInfo=async (page:string):Promise<all>=>{
    const limit=30
    const pg=+page
    let skip=0
    if(pg>0){
         skip=limit*pg-limit
    }

    return (
        await fetch(urls.users.allUsers +'?skip=' + skip )
            .then(value => value.json())
    )
}
