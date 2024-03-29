import { DataProvider } from "react-admin";

import { stringify } from "query-string";
import { fetchUtils } from "ra-core";
import usersDataProvider from "./users";
import itemsDataProvider from "./items";
import placesDataProvider from "./places";
import badgesDataProvider from "./badges";
import tagsDataProvider from "./tags";
import notificationsDataProvider from "./notifications";

const defaultDataProvider: DataProvider = {
  // @ts-ignore
  create: () => Promise.resolve({ data: { id: 0 } }),
  // @ts-ignore
  delete: () => Promise.resolve({ data: {} }),
  deleteMany: () => Promise.resolve({}),
  getList: () => Promise.resolve({ data: [], total: 0 }),
  getMany: () => Promise.resolve({ data: [] }),
  getManyReference: () => Promise.resolve({ data: [], total: 0 }),
  // @ts-ignore
  getOne: () => Promise.resolve({ data: {} }),
  // @ts-ignore
  update: () => Promise.resolve({ data: {} }),
  updateMany: () => Promise.resolve({}),
};

let resourselist: any = {
  users: usersDataProvider,
  items: itemsDataProvider,
  places: placesDataProvider,
  badges: badgesDataProvider,
  tags: tagsDataProvider,
  notifications: notificationsDataProvider,
  default: defaultDataProvider,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  apiUrl: any,
  httpClient = fetchUtils.fetchJson,
  _countHeader = "Content-Range"
) => ({
  getList: (resource: any, params: any) => {
    
    return resourselist[resource]
      ? resourselist[resource].getList(resource, params, apiUrl)
      : defaultDataProvider.getList(resource, params);
  },

  getOne: (resource: any, params: any) =>
    resourselist[resource]
      ? resourselist[resource].getOne(resource, params, apiUrl)
      : defaultDataProvider.getOne(resource, params),

  getMany: (resource: any, params: any) => {
    return resourselist[resource]
      ? resourselist[resource].getMany(resource, params, apiUrl)
      : defaultDataProvider.getMany(resource, params);
  },

  getManyReference: (resource: any, params: any) => {
    return resourselist[resource]
      ? resourselist[resource].getManyReference(resource, params, apiUrl)
      : defaultDataProvider.getManyReference(resource, params);
  },

  update: (resource: any, params: any) =>
    resourselist[resource]
      ? resourselist[resource].update(resource, params, apiUrl)
      : defaultDataProvider.update(resource, params),

  // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
  updateMany: (resource: any, params: any) =>
    Promise.all(
      params.ids.map((id: any) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) })),

  create: (resource: any, params: any) =>
    resourselist[resource]
      ? resourselist[resource].create(resource, params, apiUrl)
      : defaultDataProvider.create(resource, params),

  delete: (resource: any, params: any) =>
    resourselist[resource]
      ? resourselist[resource].delete(resource, params, apiUrl)
      : defaultDataProvider.delete(resource, params),

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource: any, params: any) =>
    Promise.all(
      params.ids.map((id: any) =>
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

