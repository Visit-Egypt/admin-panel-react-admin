import * as React from "react";
import { Admin, CustomRoutes, ListGuesser, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { Route } from "react-router";

import authProvider from "./authProvider";
import { Login, Layout } from "./layout";
import { Dashboard } from "./dashboard";
import englishMessages from "./i18n/en";
import { lightTheme } from "./layout/themes";

import visitors from "./users";
import tags from "./tags";
import places from "./places";
import badges from "./badges";
import items from "./items";

import dataProvider from "./dataProvider";

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "fr") {
    return import("./i18n/fr").then((messages) => messages.default);
  }

  // Always fallback on english
  return englishMessages;
}, "en");

const dataProviderInstance = dataProvider("https://visit-egypt.herokuapp.com");

const App = () => {
  return (
    <Admin
      title=""
      dataProvider={dataProviderInstance}
      authProvider={authProvider}
      dashboard={Dashboard}
      loginPage={Login}
      layout={Layout}
      i18nProvider={i18nProvider}
      disableTelemetry
      theme={lightTheme}
    >
      {/* <CustomRoutes>
                <Route path="/configuration" element={<Configuration />} />
                <Route path="/segments" element={<Segments />} />
            </CustomRoutes> */}
      <Resource
        name="users"
         {...visitors}
      />
            <Resource
        name="items"
         {...items}
      />
            <Resource
        name="places"
         {...places}
      />
            <Resource
        name="badges"
         {...badges}
      />
            <Resource
        name="tags"
         {...tags}
      />
      {/* <Resource
                name="commands"
                {...orders}
                options={{ label: 'Orders' }}
            /> */}
      {/* <Resource name="invoices" {...invoices} /> */}
      {/* <Resource name="products" {...products} /> */}
      {/* <Resource name="categories" {...categories} /> */}
      {/* <Resource name="reviews" {...reviews} /> */}
    </Admin>
  );
};

export default App;
