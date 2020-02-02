import React, { Component } from "react";
import ImageItem from "./ImageItem";

export default class ImageList extends Component {
  constructor() {
    super();

    this.initialState = {
      loaded: false,
      autoRefresh: false,
      numberOfCommentsFilter: 0,
      posts: []
    };
    this.state = this.initialState;
  }

  handleClick = () => {
    this.setState(() => ({
        autoRefresh: !this.state.autoRefresh
      }),
      this.switchRefresh
    );
  };

  switchRefresh = () => {
    if (this.state.autoRefresh) {
      this.interval = setInterval(() => {
        this.getImages(this.props.filters);
      }, 3000);
      //console.log("setInterval");
    } else {
      clearInterval(this.interval);
      //console.log("clearInterval");
    }
  };

  onChangeFilter = event => {
    const { value } = event.target;
    this.setState({
      numberOfCommentsFilter: Number(value)
    });
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    const link = "https://www.reddit.com/r/reactjs.json?limit=100";

    fetch(link)
      .then(response => {
        this.setState({ loaded: true });
        return response.json();
      })
      .then(response => {
        const postsArray = response.data.children.sort((elem1, elem2) => {
          return elem2.data.num_comments - elem1.data.num_comments;
        });

        this.setState({
          posts: postsArray
        });

      });
  };

  render() {
    const { posts, numberOfCommentsFilter } = this.state;

    return (
      <div>
        <form className="range-field my-4 w-75">
          <button
            type="button"
            className="btn btn-secondary btn-refresh"
            onClick={this.handleClick}
          >
            {this.state.autoRefresh
              ? "Stop auto refresh"
              : "Start auto refresh"}
          </button>
          <div className="form-group">
            <label htmlFor="formControlRange">
              {"Current filter: " + numberOfCommentsFilter}
            </label>
            <input
              type="range"
              min="0"
              max="200"
              className="form-control-range"
              id="formControlRange"
              name="numberOfCommentsFilter"
              value={numberOfCommentsFilter}
              onChange={this.onChangeFilter}
            ></input>
          </div>
        </form>

        <div className="row">
          {!this.state.loaded && <div className="loader"></div>}

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
