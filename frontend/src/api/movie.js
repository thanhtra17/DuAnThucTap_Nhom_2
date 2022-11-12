import { cathError, getToken } from "../utils/helper";
import client from "./client";

export const uploadTrailer = async (formData, onUploadProgress) => {
  const token = getToken()
  try {
    const { data } = await client.post("/movie/upload-trailer", formData, {
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: ({loaded, total}) => {
        if (onUploadProgress) onUploadProgress(Math.floor((loaded / total) * 100));
      }
    });
    return data;
  } catch (error) {
    return cathError(error)
  }
};
