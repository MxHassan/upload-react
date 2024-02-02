export const FileStart = () => ({
  type: "FILESAVE_START",
});
export const FileSucess = (data) => ({
  type: "FILESAVE_SUCCESS",
  payload: data,
});
export const FileFailure = () => ({
  type: "FILESAVE_FAILURE",
});
export const FileRemove = () => ({
  type: "FILESAVE_REMOVE",
});
