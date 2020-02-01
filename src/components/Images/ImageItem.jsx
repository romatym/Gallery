import React from "react";
import noImage from "../../images/noimage.gif";

export default class ImageItem extends React.Component {
  render() {
    const { item } = this.props;
    const imagePath = item.thumbnail === "self" ? noImage : item.thumbnail;
    //console.log("item.thumbnail", item.thumbnail);
    //const imagePath = item.poster_path;
    return (
      <div
        className="card"
        // style={{ width: "100%" }}
      >
        <img
          className="card-img-top card-img--height"
          //className="card-img-top "
          src={imagePath}
          //src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt=""
        />
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
