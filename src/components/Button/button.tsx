import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
} from "react";
import ClassNames from "classnames";

export enum ButtonSize {
  Large = "large",
  Small = "small",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

// 这里使用的是交叉类型，可以将一个类型合并为多个类型
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const { disabled, size, btnType, href, children, className, ...restProps } =
    props;
  const classes = ClassNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
