import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import SelectFiles from "./SelectFiles";
import ConfigBtn from "./ConfigBtn";
import DownloadAllBtn from "./DownloadAllBtn";
import CompressBtn from "./CompressBtn";

import { FC_ALL, KB_TO_MB } from "./constants";

const FileInputForm = ({
  handleFileSelection,
  handleCompression,
  handleDownloadAll,
  hasFiles,
  compressedFiles,
}) => {
  const [config, setConfig] = useState({
    options: {
      maxSizeKB: 500,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    },
    hasSizeErr: false,
    hasResErr: false,
    errMsg: {
      maxSizeKB: "Min 10KB",
      maxWidthOrHeight: "Min 12px",
    },
  });

  const [showConfigForm, setShowConfigForm] = useState(false);

  const sanitizeValue = (value, oldValue) => {
    return !value ? "" : isNaN(value) ? oldValue : parseInt(value);
  };

  const checkErr = (key, value) => {
    const sanitizedValue = sanitizeValue(value, config.options[key]);

    if (key === "maxWidthOrHeight") {
      if (sanitizedValue < 12) {
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

  const handleShowConfigForm = () => {
    setShowConfigForm(!showConfigForm);
  };

  const formStyles = {
    position: { xs: "fixed", sm: "static" },
    bottom: "0px",
    right: "0px",
    left: "0px",
    ...FC_ALL,
    gap: "20px",
    maxWidth: { xs: "100%", lg: "80vw" },
    mx: "auto",
    mb: { xs: 0, sm: "20px" },
    p: "20px 20px",
    borderRadius: "5px",
    zIndex: 99,
    backgroundColor: "#f1f1f1",
  };

  const textfieldStyles = {
    " & .MuiFormHelperText-root": {
      fontSize: {
        xs: "12px",
        md: "14px",
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: {
        xs: "14px",
        md: "16px",
      },
    },
  };

  return (
    <Box sx={formStyles} component="form" noValidate autoComplete="off">
      <SelectFiles handleFileSelection={handleFileSelection} />
      <Box
        sx={{
          ...FC_ALL,
          gap: "10px",
          display: { xs: "flex  " },
          position: { xs: "absolute", sm: "static" },
          width: "100%",
          maxWidth: { md: "50%" },
          minHeight: "120px",
          p: "20px",
          backgroundColor: "#f1f1f1",
          zIndex: { xs: -2, sm: 0 },
          opacity: { xs: showConfigForm ? 1 : 0, sm: 1 },
          marginBottom: { xs: showConfigForm ? "220px" : "-100px", sm: "0px" },
          transition: "all .2s ease-in",
        }}
      >
        <TextField
          error={config.hasResErr}
          helperText={config.errMsg.maxWidthOrHeight}
          sx={{ ml: "20px", ...textfieldStyles }}
          label="Max Width or Height in PX"
          value={config.options.maxWidthOrHeight}
          onChange={(e) => handleChange("maxWidthOrHeight", e.target.value)}
        />
        <TextField
          sx={textfieldStyles}
          error={config.hasSizeErr}
          helperText={config.errMsg.maxSizeKB}
          variant="outlined"
          label="Max Size in KB"
          min={1}
          value={config.options.maxSizeKB}
          onChange={(e) => handleChange("maxSizeKB", e.target.value)}
        />
      </Box>
      <ConfigBtn
        sx={{ display: { xs: "flex", sm: "none" } }}
        handleShowConfigForm={handleShowConfigForm}
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
