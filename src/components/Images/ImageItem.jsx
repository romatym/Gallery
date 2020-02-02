import React from "react";
import noImage from "../../images/noimage.gif";

export default class ImageItem extends React.Component {
  render() {
    const { item } = this.props;
    const imagePath = item.thumbnail === "self" ? noImage : item.thumbnail;

    return (
      <div className="card">
        <img className="card-img-top card-img--height" src={imagePath} alt="" />
        <div className="card-body">
          <h6 className="card-title card-title--height">{item.title}</h6>
          <div className="card-text">
            Number of comments: {item.num_comments}
          </div>
          <a
            href={`https://www.reddit.com${item.permalink}`}
            className="badge badge-primary"
          >
            Link
          </a>
        </div>
      </div>
    );
  }
}
