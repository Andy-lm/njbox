import React, { CSSProperties, FC } from "react";
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";

interface MenuProps {
  defaultIndex?: number;
  className?: string;
  style?: CSSProperties;
  mode?: MenuMode;
  onSelect?: (selectIndex: number) => void;
  children: React.ReactNode;
}

const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, className, style, mode, onSelect, children } = props;

  const classes = classNames("njbox-menu", className, {
    vertical: mode === "vertical",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
