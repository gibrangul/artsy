import React from "react";
import { ScaleLoader } from "react-spinners";

const SiteLoader = ({ loading, absolute }) => {
  return (
    <ScaleLoader
      height={35}
      width={4}
      radius={2}
      margin={2}
      color={"#5d67ff"}
      loading={loading}
      css={absolute ? "position: absolute; top: 50%;left: 50%;" : ""}
    />
  );
};

export default SiteLoader;
