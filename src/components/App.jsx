import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import ImageList from "./Images/ImageList";

export default class App extends React.Component {
  constructor() {
    super();

    this.initialState = {
      autoRefresh: false,
      numberOfCommentsFilter: 0,
      loaded: false,
      posts: [],
    };
    this.state = this.initialState;
  }

  onChangeFilter = event => {
    const { value } = event.target;
    this.setState({
      numberOfCommentsFilter: Number(value),
    });
  };

  onChangeRefresh = () => {
    this.setState(
      prevState => ({
        autoRefresh: !prevState.autoRefresh,
      }),
      this.switchRefresh
    );
  };

  switchRefresh = () => {
    const { autoRefresh } = this.state;

    if (autoRefresh) {
      this.interval = setInterval(() => {
        this.getImages();
      }, 3000);
    } else {
      clearInterval(this.interval);
    }
  };

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
          posts: postsArray,
        });
      });
  };

  componentDidMount() {
    this.getImages();
  }

  render() {
    return (
      <div>
        <Header />
        <Filters
          numberOfCommentsFilter={this.state.numberOfCommentsFilter}
          autoRefresh={this.state.autoRefresh}
          onChangeFilter={this.onChangeFilter}
          onChangeRefresh={this.onChangeRefresh}
        />
        <div className="container">
          {!this.state.loaded ? (
            <div className="loader"></div>
          ) : (
            <div className="row mt-4">
              <div className="col-8">
                <ImageList
                  posts={this.state.posts}
                  numberOfCommentsFilter={this.state.numberOfCommentsFilter}
                  autoRefresh={this.state.autoRefresh}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
