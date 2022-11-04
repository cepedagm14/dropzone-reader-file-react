import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Singlefile from "./Singlefile";

export const Dropzone = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((accFiles, rejfiles) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejfiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>

      {files.map((fileWrapper, index) => (
        <Singlefile key={index} file={fileWrapper.file} />
      ))}
    </>
  );
};
