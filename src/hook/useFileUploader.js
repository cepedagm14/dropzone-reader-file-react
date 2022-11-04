import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const uploadFile = async ({ request, setCompleted }) => {
  const url = `http://httpbin.org/post`;

  const config = {
    onUploadProgress: function (progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setCompleted(percentCompleted);
    },
  };

  const data = new FormData();
  data.append("file", request.file);

  try {
    const res = await axios.post(url, data, config);
    return res;
  } catch (error) {
    const errorMessage = error.response.data.message;
    throw new createHttpError(errorMessage);
  }
};

export default function useFileUploader() {
  return useMutation(
    async ({ request, setCompleted }) => {
      return await uploadFile({ request, setCompleted });
    },
    {
      onError: (e) => {
        console.log(e.message);
      },
      onSuccess: () => {
        console.log("file uploaded successfully");
      },
    }
  );
}
