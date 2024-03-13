import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [Fetching, setFetching] = useState(false);
  const Controller = AbortController();
  const signal = Controller;
  useEffect(() => {
    setFetching(true);
    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts)
        setFetching(false);
      });
  
    return () => {
      Controller.abort();
    }
    
  },[]);
  return (
    <>
      {
        Fetching && <LoadingSpinner/>
      }
      {
        !Fetching && postList.length === 0 && <WelcomeMessage />
      }
      {!Fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;