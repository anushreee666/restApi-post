const express = require("express");
const router = express.Router();
const Post = require("../model/Post");
//get all post
router.get("/", (req, res) => {
	const post = Post.find();
	post
		.then((data) => {
			res.json(data);
		})
		.catch((e) => {
			res.json({ message: e });
		});
});

//get specific post

router.get("/:postId", (req, res) => {
	const post = Post.findById(req.params.postId);
	post
		.then((data) => {
			res.json(data);
		})
		.catch((e) => {
			res.json({ message: e });
		});
});

//submit post
router.post("/", (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	post
		.save()
		.then((data) => {
			res.json(data);
			console.log("h");
		})
		.catch((e) => {
			res.json({ message: "error" });
			console.log("wrong");
		});

	console.log(post);
});

//delete a specific post
router.delete("/:postId", (req, res) => {
	const removePost = Post.remove({ _id: req.params.postId });
	removePost
		.then((data) => res.json(data))
		.catch((e) => {
			res.json({ message: "error" });
			console.log("wrong");
		});
});

//update a post
router.patch("/:postId", (req, res) => {
	const updatePost = Post.updateOne(
		{ _id: req.params.postId },
		{ $set: { title: req.body.title } }
	);
	updatePost
		.then((data) => {
			res.json(data);
		})
		.catch((e) => {
			res.json({ message: "error" });
			console.log("wrong");
		});
});

module.exports = router;
