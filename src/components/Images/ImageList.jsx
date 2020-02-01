import React, { Component } from "react";
//import PropTypes from "prop-types";
import ImageItem from "./ImageItem";
//import _ from "lodash";
//import queryString from "querystring";
//import { API_URL, API_KEY_3 } from "../../api/api";

export default class ImageList extends Component {
  static propTypes = {
    // onChangeTotalPages: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.initialState = {
      loaded: false,
      posts: []
    };
    this.state = this.initialState;
  }

  getImages = filters => {
    //const { numberOfComments } = filters;
    // const queryStringParams = {
    //   api_key: API_KEY_3,
    //   language: "ru-RU"
    // };

    // if (numberOfComments > 0) {
    //   queryStringParams.numberOfComments = numberOfComments;
    // }
    // const link = `${API_URL}/discover/image?${queryString.stringify(
    //   queryStringParams
    // )}`;
    const link = "https://www.reddit.com/r/reactjs.json?limit=100";

    // const oldLink =
    //   `${API_URL}/discover/image?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}` +
    //   (release_year ? `&primary_release_year=${release_year}` : "") +
    //   (with_genres.length > 0 ? `&with_genres=${with_genres.join()}` : "");

    fetch(link)
      .then(response => {
        this.setState({ loaded: true });
        return response.json();
      })
      .then(response => {
        const postsArray = response.data.children.sort((elem1, elem2) => {
          return elem2.data.num_comments - elem1.data.num_comments
        });

        this.setState({
          posts: postsArray
        });
        // this.props.onChangeTotalPages(data.total_pages);
      });
  };

  componentDidMount() {
    this.getImages(this.props.filters);
  }

  // componentDidUpdate(prevProps) {
  //   if (!_.isEqual(this.props.filters, prevProps.filters)) {
  //     this.setState({ loaded: false });
  //     this.getImages(this.props.filters, this.props.onChangeTotalPages);
  //   }
  // }

  render() {
    const { posts } = this.state;

    //console.log("posts", posts);

    return (
      <div className="row">
        {!this.state.loaded && <div className="loader"></div>}

        {posts.map(post => {
          return (
            <div key={post.data.id} className="col-6 mb-4">
              <ImageItem item={post.data} />
            </div>
          );
        })}
      </div>
    );
  }
}
