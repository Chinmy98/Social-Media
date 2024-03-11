import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const HandelOnClickFeatch = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
      .then(data => {
      addInitialPosts(data.posts)
    });
  }
  return (
    <>
      {
        postList.length === 0 && <WelcomeMessage getOnClickFeatch={HandelOnClickFeatch} />
      }
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;