import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { PostList } from "../store/post-list-store";
import { FaHashtag } from "react-icons/fa";


const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
<div className="card text-center post-card">
  <div className="card-header text-end">
    <button type="button" onClick={() => deletePost(post.id)} className="btn-close" aria-label="Close"></button>
  </div>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            <FaHashtag />{tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
           <FcLike/>{post.reactions} 
        </div>
  </div>
</div>




  );
};

export default Post;