import { Button, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFileUploader from "../hook/useFileUploader";

const Singlefile = ({ file }) => {

  const [completed, setCompleted] = useState(0);

  const upload = (file) => {
    uploadFile({ request: { file }, setCompleted });
  };
  const { mutate: uploadFile, data } = useFileUploader();

console.log(data?.data)

  return (
    <div>
      sfi {completed} 
      <Button
        disabled={!file}
        color="primary"
        onClick={() => upload(file)}
      >
        Upload
      </Button>
      <LinearProgress variant="determinate" value={completed} />

    </div>
  );
};

export default Singlefile;
