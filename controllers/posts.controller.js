exports.getPosts = (req,res) => {
    res.status(200).send(`Get all posts filtered by "${req.query.title}"`)
}

exports.getPost = (req,res) => {
    res.status(200).send("Get a post")
}

exports.createPost = (req,res) => {
    res.status(200).send("Create post")
}
exports.updatePost = (req,res) => {
    res.status(201).send(`Post with ID ${req.params.postId} has been updated`)
}

exports.deletePost = (req,res) => {
    res.status(200).send(`Post with ID ${req.params.postId} has been deleted`)
}