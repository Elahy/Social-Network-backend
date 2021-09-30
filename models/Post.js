const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    image: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    // coverPicture: {
    //   type: String,
    //   default: "",
    // },
    // followers: {
    //   type: Array,
    //   default: [],
    // },
    // following: {
    //   type: Array,
    //   default: [],
    // },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    // city: {
    //   type: String,
    //   max: 50,
    // },

    // relationship: {
    //   type: Number,
    //   enum: [1, 2, 3],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
