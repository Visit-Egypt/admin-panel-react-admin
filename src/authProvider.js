import decodeJwt from "jwt-decode";
import axios from "axios";

function refreshToken() {
  let userData = JSON.parse(localStorage.getItem("auth"));
  let currentToken = userData?.access_token;
  let refreshToken = userData?.refresh_token;
  if (!currentToken || !refreshToken) {
    localStorage.removeItem("auth");
    return;
  }
  axios
    .post(
      `https://visit-egypt.herokuapp.com/api/user/refresh`,
      {
        access_token: currentToken,
        refresh_token: refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      }
    )
    .then((response) => {
      localStorage.setItem("auth", JSON.stringify(response.data));
    });
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // called when the user attempts to log in
  login: ({ username: email, password }) => {
    const request = new Request(
      "https://visit-egypt.herokuapp.com/api/user/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        let decodedJWT = decodeJwt(auth.access_token);
        if (decodedJWT.role === "USER")
          throw new Error("not Authorized to use the Admin Panel");
        localStorage.setItem("auth", JSON.stringify(auth));
      })
      .catch((err) => {
        throw new Error(err.message || "Wrong Credentials");
      });

    // accept all username/password combinations
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (parseInt(status) === 401 || parseInt(status) === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    // const role = localStorage.getItem('permissions');
    // return role ? Promise.resolve(role) : Promise.reject();
    return Promise.resolve();
  },
};
