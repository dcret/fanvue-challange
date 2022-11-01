import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { NextPage } from "next";
import Head from "next/head";
import { Typography} from '@mui/material';
import PostCard from '../components/PostCard';

const Feed: NextPage = (props) => {
  if( !props ) {
    return <Typography>Loading posts...</Typography>
  }


  const getCommentsByPostId = (postId) => {

    const commentsByPostsId = props?.comments.filter(comment => comment.postId === postId);

    return commentsByPostsId;
  }

  return <div>
      <Head>
          <title>Feed</title>
          <meta name="description" content="Fanvue Coding challenge" />
          <meta name="keywords" content="React, NextJS, MaterialUI"/>
          <meta name="author" content="Darius Cret"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Box sx={{ width: '100%' }}>
      <Stack spacing={2} p={2} justifyContent="center"   alignItems="center">
       { props && props?.posts && props?.posts?.map((post: any, index) => {
        return (
          <div key={index}>
             <PostCard comments={getCommentsByPostId(post.id)} title={post.title} description={post.body}/>
          </div>
        )
       })}
      </Stack>
    </Box>
  </div>;
};

interface Post {
  userId: number;
  id: number;
  title: string;
  description: string;
  comments?: Comment[];
}

interface Comment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

const getPosts = async () =>  {
  let posts: Post[] = [];
  const res =  await fetch('https://jsonplaceholder.typicode.com/posts');
  posts  = await res.json();

  return posts;
}

const getAllComments = async () => {
  let comments = [];  
  const res =  await fetch('https://jsonplaceholder.typicode.com/comments/');
  if(res) {
    comments  = await res.json();
    return comments;
  }
 return [];
}

export async function getServerSideProps(context) {
  const posts: Post[] = await getPosts(); 
  return {
    props: {
      posts: posts ,
      comments: await getAllComments()
    }, // will be passed to the page component as props
  }
}

export default Feed;
