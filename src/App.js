// in src/App.js
import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";
import AuthProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./dashboard";
import Dataprovider from "./dataProvider";
import themeReducer from './themeReducer';


import UserList from "./views/user/list";
import UserEdit from "./views/user/edit";
import UserCreate from "./views/user/create";
import UserShow from "./views/user/show";

import ItemList from "./views/items/list";
import ItemEdit from "./views/items/edit";
import ItemCreate from "./views/items/create";
import ItemShow from "./views/items/show";

import placeList from "./views/places/list";
import placeEdit from "./views/places/edit";
import placeCreate from "./views/places/create";
import PlaceShow from "./views/places/show";

import BadgeList from "./views/badges/list";
import BadgeEdit from "./views/badges/edit";
import BadgeCreate from "./views/badges/create";
import BadgeShow from "./views/places/show";

import decodeJwt from "jwt-decode";

const dataProviderInstance = Dataprovider("https://visit-egypt.herokuapp.com");

const App = () => {
  let checkForAuthExpiration = () => {
    let accessToken = JSON.parse(localStorage.getItem("auth"))?.access_token;
    if (!accessToken) {
      localStorage.removeItem("auth");
      return;
    }
    let decodedToken = decodeJwt(accessToken);
    if (Date.now() / 1000 > decodedToken.exp) {
      localStorage.removeItem("auth");
    }
    // console.log(decodedToken);
  };
  checkForAuthExpiration();
  return (
    <Admin
      dataProvider={dataProviderInstance}
      authProvider={AuthProvider}
      dashboard={Dashboard}
      customReducers={{ theme: themeReducer }}

    >
      <Resource
        name="users"
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
        name="items"
        list={ItemList}
        show={ItemShow}
        edit={ItemEdit}
        create={ItemCreate}
      />
      <Resource
        name="places"
        list={placeList}
        show={PlaceShow}
        edit={placeEdit}
        create={placeCreate}
      />
      <Resource
        name="badges"
        list={BadgeList}
        show={ShowGuesser}
        edit={BadgeEdit}
        create={BadgeCreate}
      />
    </Admin>
  );
};

export default App;
