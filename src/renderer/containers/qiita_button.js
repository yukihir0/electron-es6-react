import React from "react";
import { connect } from "react-redux";
import QiitaButton from "../components/qiita_button";
import { requestItem } from "../actions";

function mapStateToProps(state) {
  return {items: state.items};
}

function mapDispatchToProps(dispatch) {
  return {
    onClickQiitaButton: () => { dispatch(requestItem()) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QiitaButton);
