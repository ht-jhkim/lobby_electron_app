import React from "react";

const Dashboard = React.lazy(() => import("./views/main/Main"));
const Lobby = React.lazy(() => import("./views/lobby/Lobby"));
const LobbyDetail = React.lazy(() => import("./views/lobby/LobbyDetail"));

const routes = [
  { path: "/", name: "홈", exact: true, component: Dashboard },
  { path: "/lobby", name: "로비", exact: true, component: Lobby },
  { path: "/lobby/:id", name: "로비", exact: true, component: LobbyDetail },

];

export default routes;
