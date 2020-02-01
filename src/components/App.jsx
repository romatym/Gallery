import React from "react";
import Header from "./Header";
import ImageList from "./Images/ImageList";

export default class App extends React.Component {
  constructor() {
    super();

    this.initialState = {
      image: null,
      title: "",
      //numberOfComments: 0,
      link: "",
      filters: {
        numberOfComments: 0
      }
    };

    this.state = this.initialState;
  }

  render() {
    const { filters } = this.state;

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-4">
            <div className="col-8">
              <ImageList
                filters={filters}
                onChangeFilters={this.onChangeFilters}
              />
            </div>
          </div>
        </div>
      </div>
    );

  }
}
