import App from "../App";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPost, removePost } from "../actions/action";
import { withRouter } from "react-router";

//Connecting Store
function mapStateToProps(state) {
  return {
    posts: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost, removePost }, dispatch);
}

const Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default Main;
