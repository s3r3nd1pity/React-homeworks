import {IPost} from "./IPost.ts";

export interface IPosts {
    posts: IPost,
    total: number,
    skip: number,
    limit: number
}