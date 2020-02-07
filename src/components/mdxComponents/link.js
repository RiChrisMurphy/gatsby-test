import * as React from "react";
import { Link } from "gatsby"

const LinkTag = ({ children: link, ...props }) => {
  if(link) {
    return (
      <Link to={props.to}>{link}</Link>
    );
  } else {
    return null;
  }
};

export default LinkTag;
