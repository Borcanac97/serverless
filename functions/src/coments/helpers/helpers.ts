import { IComment,ICreateCommentRequest } from "../models/models" 

export const createCommentRequest = (comment: ICreateCommentRequest): IComment => {
  return { ...comment};
};