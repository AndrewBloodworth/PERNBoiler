import React from "react";
import { connect } from "react-redux";
import QueryString from "qs";

export const FourOhFour = ({ match, location }) => {
  const { any } = match.params;
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  let message = any;
  if (query.id) {
    message += " with id: " + query.id;
  }
  return <div>{message} - Does not exist</div>;
};

export default connect(null, null)(FourOhFour);
