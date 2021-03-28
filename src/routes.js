import React from "react";

const Dashboard = React.lazy(() => import("./views/main/Main"));
const Setting = React.lazy(() => import("./views/setting/Setting"));
const Update = React.lazy(() => import("./views/update/Update"));

const routes = [
  { path: "/", name: "홈", exact: true, component: Dashboard },
  { path: "/setting", name: "설정", exact: true, component: Setting },
  { path: "/update", name: "업데이트", exact: true, component: Update },
];

export default routes;
