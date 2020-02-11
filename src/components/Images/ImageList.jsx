import React, { Component } from "react";
import ImageItem from "./ImageItem";

export default class ImageList extends Component {
  constructor() {
    super();

    this.initialState = {
      loaded: false,
      posts: [],
    };
    this.state = this.initialState;
  }

  render() {
    const { numberOfCommentsFilter, posts } = this.props;

    return (
      <div>
        <div className="row">
          {posts
            .filter(post => post.data.num_comments >= numberOfCommentsFilter)
            .map(post => {
              return (
                <div key={post.data.id} className="col-6 mb-4">
                  <ImageItem item={post.data} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
