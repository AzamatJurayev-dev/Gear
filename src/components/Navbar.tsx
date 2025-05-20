import Logo from "../assets/Logo.png";
import mode from "../assets/mode.png";
import { Flex, Menu, Drawer, Button } from "antd";
import type { MenuProps } from "antd";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useThemeStore } from "../store/themeStore";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { label: "Home", key: "1",},
  { label: "Popular", key: "2" },
  { label: "New Comer", key: "3" },
];

const Navbar = () => {
  const [current, setCurrent] = useState("1");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    setDrawerOpen(false);
  };

  return (
    <div className="w-full shadow px-4 md:px-24 bg-background dark:bg-darkbg text-primary dark:text-darktext">
      <Flex
        justify="space-between"
        align="center"
        className="h-20"
        wrap="wrap"
      >
        <img src={Logo} alt="Logo" className="h-11 w-10" />

        <div className="hidden md:flex flex-1 justify-center">
          <Menu
            mode="horizontal"
            onClick={onClick}
            selectedKeys={[current]}
            items={items}
            className="font-medium text-[18px] uppercase font-poppins bg-transparent dark:bg-darkbg text-primary dark:text-white"
          />
        </div>

        <div className="hidden md:block">
          <button
          onClick={toggleTheme}>
            <img
            src={mode}
            alt="Mode"
            className="w-9 cursor-pointer"
          />
          </button>
        </div>

        <div className="block md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="text-2xl" />}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </Flex>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        className="md:hidden"
      >
        <Menu
          mode="vertical"
          onClick={onClick}
          selectedKeys={[current]}
          items={items}
        />
        <div className="mt-4">
          <img
            onClick={toggleTheme}
            src={mode}
            alt="Mode toggle"
            className="w-8 cursor-pointer"
          />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
