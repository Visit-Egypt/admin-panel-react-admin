/* eslint-disable import/no-anonymous-default-export */
import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import usersDataProvider from "./users";
import itemsDataProvider from "./items";
import placesDataProvider from "./places";
import badgesDataProvider from "./badges";

let resourselist = {
  users: usersDataProvider,
  items: itemsDataProvider,
  places: placesDataProvider,
  badges: badgesDataProvider,
};

export default (
  apiUrl,
  httpClient = fetchUtils.fetchJson,
  countHeader = "Content-Range"
) => ({
  getList: (resource, params) =>
    resourselist[resource].getList(resource, params, apiUrl),

  getOne: (resource, params) =>
    resourselist[resource].getOne(resource, params, apiUrl),

  getMany: (resource, params) => {
    console.log(resource,params);
    return resourselist[resource].getMany(resource, params, apiUrl);
  },

  getManyReference: (resource, params) => {
    return resourselist[resource].getManyReference(resource, params, apiUrl);
  },

  update: (resource, params) =>
    resourselist[resource].update(resource, params, apiUrl),

  // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) })),

  create: (resource, params) =>
    resourselist[resource].create(resource, params, apiUrl),

  delete: (resource, params) =>
    resourselist[resource].delete(resource, params, apiUrl),

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "text/plain",
          }),
        })
      )
    ).then((responses) => ({
      data: responses.map(({ json }) => json.id),
    })),
});
