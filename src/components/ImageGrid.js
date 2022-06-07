import React from "react";
import ImageBox from "./ImageBox";

const PLACEHOLDER_FILE = {
  name: "placeholder-img",
  source: require("../assets/img/placeholder.png"),
  size: 0,
  selected: false,
};

const ImageGrid = ({ files }) => {
  console.log(files);
  if (files.length === 0) return <ImageBox file={PLACEHOLDER_FILE} />;
  return files.map((file) => <ImageBox key={file.id} file={file} />);
};

export default ImageGrid;
