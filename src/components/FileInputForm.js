import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import SelectFiles from "./SelectFiles";
import DownloadAllBtn from "./DownloadAllBtn";
import CompressBtn from "./CompressBtn";

import { F_BETWEEN, KB_TO_MB } from "./constants";

const FileInputForm = ({
  handleFileSelection,
  handleCompression,
  handleDownloadAll,
  hasFiles,
  compressedFiles,
}) => {
  const [config, setConfig] = useState({
    options: {
      maxSizeKB: 1024,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    },
    hasSizeErr: false,
    hasResErr: false,
    errMsg: {
      maxSizeKB: "Min Size 10KB",
      maxWidthOrHeight: "Min Width or Height 10px",
    },
  });

  useEffect(() => {}, [config]);

  const sanitizeValue = (value, oldValue) => {
    return !value ? "" : isNaN(value) ? oldValue : parseInt(value);
  };

  const checkErr = (key, value) => {
    const sanitizedValue = sanitizeValue(value, config.options[key]);

    if (key === "maxWidthOrHeight") {
      if (sanitizedValue < 11) {
        return {
          err: { hasResErr: true, errMsg: "Minimum Width or Height is 11PX" },
          sanitizedValue,
        };
      }
    } else if (key === "maxSizeKB") {
      if (sanitizedValue < 10) {
        return {
          err: { hasSizeErr: true, errMsg: "Minimum Size is 10KB" },
          sanitizedValue,
        };
      }
    }
    return {
      err: { hasSizeErr: false, hasResErr: false },
      sanitizedValue,
    };
  };

  const handleChange = (key, value) => {
    const { err, sanitizedValue } = checkErr(key, value);
    setConfig({
      ...config,
      options: { ...config.options, [key]: sanitizedValue },
      hasSizeErr: err.hasSizeErr,
      hasResErr: err.hasResErr,
      errMsg: { ...config.errMsg, [key]: err.errMsg },
    });
  };

  const formStyles = {
    position: { xs: "fixed", sm: "static" },
    bottom: "0px",
    right: "0px",
    left: "0px",
    ...F_BETWEEN,
    gap: "20px",
    maxWidth: "90%",
    mx: "auto",
    mb: "20px",
    p: "20px 20px",
    borderRadius: "5px",
    zIndex: 99,
    backgroundColor: "rgba(255, 255, 255, .6)",
  };

  return (
    <Box sx={formStyles} component="form" noValidate autoComplete="off">
      <SelectFiles handleFileSelection={handleFileSelection} />
      <TextField
        error={config.hasResErr}
        helperText={config.errMsg.maxWidthOrHeight}
        sx={{ ml: "auto" }}
        label="Max Width or Height in PX"
        value={config.options.maxWidthOrHeight}
        onChange={(e) => handleChange("maxWidthOrHeight", e.target.value)}
      />
      <TextField
        error={config.hasSizeErr}
        helperText={config.errMsg.maxSizeKB}
        variant="outlined"
        label="Max Size in KB"
        min={1}
        value={config.options.maxSizeKB}
        onChange={(e) => handleChange("maxSizeKB", e.target.value)}
      />
      <CompressBtn
        disabled={!hasFiles || config.hasSizeErr || config.hasResErr}
        handleCompression={handleCompression}
        options={{
          ...config.options,
          maxSizeMB: config.options.maxSizeKB / KB_TO_MB,
        }}
      />
      <DownloadAllBtn
        files={compressedFiles}
        handleDownloadAll={handleDownloadAll}
        disabled={!(compressedFiles.length > 1)}
      />
    </Box>
  );
};

export default FileInputForm;
