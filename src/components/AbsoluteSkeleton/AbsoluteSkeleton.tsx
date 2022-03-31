import React from "react";
import "./AbsoluteSkeleton.css";

const AbsoluteSkeleton = (props: React.PropsWithChildren<{}>) => {
  return <div className="AbsoluteSkeleton">{props.children}</div>;
};

export default AbsoluteSkeleton;
