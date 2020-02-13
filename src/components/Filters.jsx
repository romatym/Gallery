import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function Filters(props) {
  const classes = useStyles();
  const {
    onChangeFilter,
    onChangeRefresh,
    autoRefresh,
    numberOfCommentsFilter,
  } = props;

  //console.log("numberOfCommentsFilter", numberOfCommentsFilter);

  return (
    <div className="container">
      <div className="one-line">
        <button
          type="button"
          className="btn btn-secondary btn-refresh"
          onClick={onChangeRefresh}
        >
          {autoRefresh ? "Stop auto refresh" : "Start auto refresh"}
        </button>
      </div>

      <div className="form-group slider-filter ">
        <div className={classes.margin} />
        <Typography
          id="discrete-slider-small-steps"
          gutterBottom
          align="center"
        >
          Number of comments
        </Typography>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={5}
          marks
          min={0}
          max={200}
          valueLabelDisplay="on"
          name="numberOfCommentsFilter"
          value={numberOfCommentsFilter}
          onChange={onChangeFilter}
        />
        {/* <div className={classes.margin} /> */}
      </div>
    </div>
  );
}
// export default class Filters extends React.Component {
//   constructor() {
//     super();

//     this.initialState = {
//       autoRefresh: false,
//     };
//     this.state = this.initialState;
//   }

//   handleClick = () => {
//     this.props.onChangeRefresh();
//   };

//   render() {
//     const { onChangeFilter, autoRefresh, numberOfCommentsFilter } = this.props;
//     const classes = useStyles();

//     return (
//       <div className="container">
//         <form className="range-field my-4 w-75">
//           <button
//             type="button"
//             className="btn btn-secondary btn-refresh"
//             onClick={this.handleClick}
//           >
//             {autoRefresh ? "Stop auto refresh" : "Start auto refresh"}
//           </button>
//           <div className="form-group">
//             <label htmlFor="formControlRange">
//               {"Current filter: " + numberOfCommentsFilter}
//             </label>

//             <input
//               type="range"
//               min="0"
//               max="200"
//               className="form-control-range"
//               id="formControlRange"
//               name="numberOfCommentsFilter"
//               value={numberOfCommentsFilter}
//               onChange={onChangeFilter}
//             ></input>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
