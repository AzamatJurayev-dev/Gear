import Logo from "../assets/Logo.png";
import mode from "../assets/mode.png";
import { Flex, Menu } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Services",
    key: "services",
  },
];

export const HeaderView = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Flex
      justify="space-between"
      align="center"
      className="shadow"
      style={{ height: "80px", background: "white", padding: "0 10rem" }}
    >
      <div>
        <img src={Logo} alt="" className="h-11 w-10" />
      </div>
      <Flex className="link">
        <Menu
          className="flex justify-around w-120"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Flex>
      <button>
        <img className="w-9" src={mode} alt="" />
      </button>
    </Flex>
  );
};
