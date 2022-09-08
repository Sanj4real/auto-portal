import Axios from "../axios";

export function setAvatar(url) {
  const apiUrl = `/profile/update`;
  return Axios.patch(apiUrl, { avatar: url });
}

 export const updateProfileApi = (data) => {
    return Axios.patch(`/profile/update`, data);
  };

 export function getUser() {
  return Axios.get("/users/me");
}
// export default { getUser, setAvatar, updateProfileApi };

