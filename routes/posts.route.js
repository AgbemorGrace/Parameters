const router = require("express").Router;
const{createPost,
    deletePost,
    updatePost,
    getPosts,
    getPost,} = require ("../controllers/posts.controller");
   

    const postRouter = router();

    postRouter.route("/").post(createPost).get(getPosts);
    postRouter.route("/:postId").get(getPost).patch(updatePost).delete(deletePost);

    module.exports = postRouter;