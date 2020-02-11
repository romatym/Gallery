import React from "react";

export default class Filters extends React.Component {
  constructor() {
    super();

    this.initialState = {
      autoRefresh: false,
    };
    this.state = this.initialState;
  }

  handleClick = () => {
    this.props.onChangeRefresh();
  };

  render() {
    const { onChangeFilter, autoRefresh, numberOfCommentsFilter } = this.props;

    return (
      <div className="container">
        <form className="range-field my-4 w-75">
          <button
            type="button"
            className="btn btn-secondary btn-refresh"
            onClick={this.handleClick}
          >
            {autoRefresh ? "Stop auto refresh" : "Start auto refresh"}
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
              onChange={onChangeFilter}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
