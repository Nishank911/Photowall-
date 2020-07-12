import React, { Component } from "react";
import "./App.css";
import PhotoWall from "./components/photowall";
import AddPhoto from "./components/addphoto";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/"> PhotoWall </Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => <div>{<PhotoWall {...this.props} />}</div>}
        />
        {
          <Route
            path="/Addphoto"
            render={({ history }) => (
              <AddPhoto {...this.props} onHistory={history} />
            )}
          />
        }
      </div>
    );
  }
}

export default App;
