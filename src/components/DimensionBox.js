import React from "react";

const DimensionBox = ({ el }) => {
  return <span>{`${el.naturalWidth}x${el.naturalHeight}`}</span>;
};

export default DimensionBox;
