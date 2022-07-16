import { AuthProvider } from "react-admin";
import axios, { AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";
import { User, UsersPageResponse } from "./types";

const authProvider: AuthProvider = {
  login: ({ username: email, password }) => {
    return axios
      .post(
        `https://visit-egypt.herokuapp.com/api/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response: any) => {
        localStorage.setItem("auth", JSON.stringify(response.data));
        localStorage.setItem("username", "s");
        return {
          data: response.data,
        };
      })
      .catch((err) => {
        throw new Error(err.message || "Wrong Credentials");
      });
  },

  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  checkError: (err) => {
    if (err.status === 401) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    let auth = localStorage.getItem("auth");
    if (!auth) return Promise.reject();
    let token = JSON.parse(auth as string).access_token;
    const decodedToken: any = jwt_decode(token);
    // compare expiration timestamp to date, if expired, return false
    if (decodedToken.exp < new Date().getTime() / 1000) {
      localStorage.removeItem("auth");
      return Promise.reject();
      // return false;
    }

    return Promise.resolve();
  },
  getPermissions: () => {
    const auth = localStorage.getItem("auth");
    if (!auth) return Promise.reject();
    let token = JSON.parse(auth as string).access_token;
    const decodedToken: any = jwt_decode(token);

    return Promise.resolve(decodedToken.role)

  },
  getIdentity: async () => {
    const auth = localStorage.getItem("auth");
    if (!auth) return Promise.reject();
    let token = JSON.parse(auth as string).access_token;
    const decodedToken: any = jwt_decode(token);

    let response: AxiosResponse<User> = await axios.get(
      `https://visit-egypt.herokuapp.com/api/user`,
      {
        params: {
          user_id: decodedToken.user_id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${JSON.parse(auth as string).token_type} ${
            JSON.parse(auth as string).access_token
          }`,
        },
      }
    );
    // fetch and encode image as base64
    let imageBase64;
    // try {
    //   let image = await axios.get(response.data.photo_link || "", {
    //     responseType: "arraybuffer",
    //   });
    //   let imageBase64 = btoa(
    //     new Uint8Array(image.data).reduce(
    //       (data, byte) => data + String.fromCharCode(byte),
    //       ""
    //     )
    //   );
    // } catch (error) {
    // }

    return Promise.resolve({
      id: response.data.id,
      fullName: `${response.data.first_name} ${response.data.last_name}`,
      // avatar: imageBase64,
      ...(imageBase64 ? { avatar: imageBase64 } : {}),
    });
  },
};

export default authProvider;
