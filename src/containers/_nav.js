const _nav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["홈"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "메인",
    to: "/",
    icon: "cil-speedometer",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["설정"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "설정 변경",
    to: "/setting",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "업데이트",
    to: "/update",
    icon: "cil-pencil",
  },
];

export default _nav;
