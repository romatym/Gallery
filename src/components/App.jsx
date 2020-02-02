import React from "react";
import Header from "./Header";
import ImageList from "./Images/ImageList";

export default class App extends React.Component {
  // constructor() {
  //   super();

  //   this.initialState = {
  //     image: null,
  //     title: "",
  //     numberOfComments: 0,
  //     link: ""
  //   };
  //   this.state = this.initialState;
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-4">
            <div className="col-8">
              <ImageList
              />
            </div>
          </div>
        </div>
      </div>
    );

  }
}
