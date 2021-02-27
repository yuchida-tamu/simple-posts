const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	user_id: {type: String, required: true},
	content: {type: String, required: true}
})

mongoose.model("Post", PostSchema);