//remove post

export function removePost(index) {
  return {
    type: "Remove_Posts",
    index,
  };
}

//adding post

export function addPost(post) {
  return {
    type: "Add_Posts",
    post,
  };
}
