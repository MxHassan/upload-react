export const LoginStart = () => ({
  type: "UPLOAD_START",
});
export const LoginSucess = (data) => ({
  type: "UPLOAD_SUCCESS",
  payload: data,
});
export const LoginFailure = () => ({
  type: "UPLOAD_FAILURE",
});
