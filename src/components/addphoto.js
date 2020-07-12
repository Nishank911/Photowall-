import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };

    if (description && imageLink) {
      this.props.addPost(post);
      this.props.onHistory.push("/");
    }
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input name="link" type="text" placeholder="Link" />
          <input
            name="description"
            type="description"
            placeholder="Description"
          />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default AddPhoto;
