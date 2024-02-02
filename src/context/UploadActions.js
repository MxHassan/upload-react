export const UploadStart = () => ({
  type: "UPLOAD_START",
});
export const UploadSuccess = (data) => ({
  type: "UPLOAD_SUCCESS",
  payload: data,
});
export const UploadFailure = () => ({
  type: "UPLOAD_FAILURE",
});
