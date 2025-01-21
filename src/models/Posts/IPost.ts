import {Reactions} from "./IPostReactions.ts";

export interface IPost {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: Reactions;
	views: number;
	userId: number;
}
