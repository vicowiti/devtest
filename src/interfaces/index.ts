//Post Interface

export interface Post {
    id: number
  title: string
  body: string
  userId: number
}

export interface PostsState  {
    posts: Post[]
    post: Post | null
    isPending: boolean
    isError : boolean
}

export interface CommentState {
    comments: Comment[],
    comment: Comment | null
    isPending: boolean
    isError : boolean
}

 export interface CreatedPost {
    title: string
    body: string
    userId: number // id for created user.
}

export interface Comment {
    postId: number
    id : number
    name : string
    email: string
    body : string
}