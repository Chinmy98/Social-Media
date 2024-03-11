import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <center><h1>Create your own Post</h1></center>
      
      <div className="form-group row">
        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Enter User Id</label>
        <div className="col-sm-10">
          <input type="text" className="form-control form-control-lg" id="userId"
          placeholder="Your User Id" ref={userIdElement}/>
        </div>
      </div>
      
      <div className="form-group row">
        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Post Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control form-control-lg" id="title"
          placeholder="How are you feeling today..." ref={postTitleElement}/>
        </div>
      </div>
      
      <div className="form-group row">
        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Post Content</label>
        <div className="col-sm-10">
          <input type="text" className="form-control form-control-lg" id="body"
          placeholder="Tell us more about it" ref={postBodyElement}/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Number of reactions</label>
        <div className="col-sm-10">
          <input type="text" className="form-control form-control-lg" id="reactions"
          placeholder="How many people reacted to this post" ref={reactionsElement}/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Enter hashtags</label>
        <div className="col-sm-10">
          <input type="text" id="tags" className="form-control form-control-lg" placeholder="Please enter tags using space" ref={tagsElement}/>
        </div>
        </div>
        <center>
        <div className="Post-Button">
          <button type="submit" className="btn btn-primary">
          Post
          </button>
        </div>
      </center>
    </form>
  );
};

export default CreatePost;