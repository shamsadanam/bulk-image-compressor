import React from "react";
import ImageBox from "./ImageBox";

const PLACEHOLDER_FILE = {
  name: "placeholder-img",
  source: require("../assets/img/placeholder.png"),
  size: 0,
  selected: false,
};

const ImageGrid = ({ files }) => {
  // files.compressed ? console.log(files) : console.log("SelectedFiles");
  console.log(files);
  if (files.length === 0) return <ImageBox file={PLACEHOLDER_FILE} />;
  // console.log(`Files passed in ImageGrid`);
  // console.log(files);
  return files.map((file) => (
    <ImageBox
      key={file.compressed ? `compressed-${file.id}` : file.id}
      file={file}
    />
  ));
};

export default ImageGrid;
