import React from "react";
import { useEffect } from "react";
import "./AbsoluteSkeleton.css";

const AbsoluteSkeleton = (props: React.PropsWithChildren<{}>) => {
  useEffect(() => {
    console.log("skeletad");
  }, []);
  return <div className="AbsoluteSkeleton">{props.children}</div>;
};

export default AbsoluteSkeleton;
