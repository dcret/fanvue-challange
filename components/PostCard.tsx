import { Button, Card,  CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import Comment from '../components/Comment';


export interface PostCard {
    title: string;
    description: string;
    comments: Comment[];
}

const PostCard = (postCard: PostCard) => {
    const { title, description, comments} = postCard;
    const [showComments, setShowComments] = useState(false);

    if(!postCard) {
        return <Typography > No posts </Typography>
    }

    return (
      <Card sx={{ width: 600}}>
        <CardContent>
          <Typography variant="h3" color="text.primary" gutterBottom>
           {title}
          </Typography>
          <Typography variant="h6" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          { comments && comments.length ? <Button onClick={() => setShowComments(!showComments)} size="small">Show Comments - {comments?.length}</Button>: <> </> }
        </CardActions>
        {showComments ? <div> <h1>Comments</h1>
        {comments?.map((comment: any) => {
            return (
                <Comment name={comment?.name} content={comment?.body} />
            )
        })}
        </div>
        : <> </> }
      </Card>
    );
  }

  export default PostCard;