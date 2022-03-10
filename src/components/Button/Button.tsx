import React, { ReactNode } from "react";
import { styled } from "../../../stitches.config";
import {
  colorBackgroundButtonPrimaryDefault,
  colorBackgroundButtonPrimaryHover,
  colorBackgroundButtonPrimaryFocus,
  colorBackgroundButtonPrimaryActive,
  colorBackgroundButtonPrimaryDisabled,
  colorTextButtonPrimaryDefault,
  colorTextButtonPrimaryActive,
  colorTextButtonPrimaryDisabled,
  colorBackgroundButtonSecondaryDefault,
  colorBackgroundButtonSecondaryHover,
  colorBackgroundButtonSecondaryFocus,
  colorBackgroundButtonSecondaryActive,
  colorBackgroundButtonSecondaryDisabled,
  colorTextButtonSecondaryDefault,
  colorTextButtonSecondaryDisabled,
  colorBackgroundButtonTertiaryDefault,
  colorBackgroundButtonTertiaryHover,
  colorBackgroundButtonTertiaryFocus,
  colorBackgroundButtonTertiaryActive,
  colorBackgroundButtonTertiaryDisabled,
  colorBorderButtonTertiaryDefault,
  colorBorderButtonTertiaryHover,
  colorBorderButtonTertiaryFocus,
  colorBorderButtonTertiaryActive,
  colorBorderButtonTertiaryDisabled,
  colorTextButtonTertiaryDefault,
  colorTextButtonTertiaryDisabled,
  colorBorderButtonGhostDefault,
  colorBorderButtonGhostHover,
  colorBorderButtonGhostFocus,
  colorBorderButtonGhostActive,
  colorBorderButtonGhostDisabled,
  colorTextButtonGhostDefault,
  colorTextButtonGhostDisabled,
} from "@digitalservice4germany/style-dictionary";

interface VisualProps {
  look?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "large" | "medium" | "small";
  icon?: ReactNode;
  iconRight?: ReactNode;
  as?: ReactNode;
}

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VisualProps {}

export interface ButtonLinkProps
  extends React.ComponentPropsWithoutRef<"a">,
    VisualProps {}

function Button(props: ButtonProps): JSX.Element;
function Button(props: ButtonLinkProps): JSX.Element;
function Button(props: any) {
  const {
    look = "primary",
    size = "large",
    children,
    icon,
    iconRight,
    as,
    ...rest
  } = props;

  const iconLeft = children && icon;
  const iconAlone = !children && icon;

  const Component = styled(as ? as : props.href ? "a" : "button", {
    // base styles
    display: "inline-flex",
    alignItems: "center",
    maxWidth: "100%",

    // focus outline is the same for all looks and sizes
    "&:focus": {
      outlineOffset: "4px",
      outlineWidth: "4px",
      outlineColor: "$blue800",
      outlineStyle: "solid",
    },
    "&[disabled]": {
      cursor: "not-allowed",
    },
    variants: {
      look: {
        primary: {
          backgroundColor: colorBackgroundButtonPrimaryDefault,
          color: colorTextButtonPrimaryDefault,
          "&:hover": {
            backgroundColor: colorBackgroundButtonPrimaryHover,
          },
          "&:focus": {
            backgroundColor: colorBackgroundButtonPrimaryFocus,
          },
          "&:active": {
            backgroundColor: colorBackgroundButtonPrimaryActive,
            color: colorTextButtonPrimaryActive,
          },
          "&[disabled]": {
            backgroundColor: colorBackgroundButtonPrimaryDisabled,
            color: colorTextButtonPrimaryDisabled,
          },
        },
        secondary: {
          backgroundColor: colorBackgroundButtonSecondaryDefault,
          color: colorTextButtonSecondaryDefault,
          "&:hover": {
            backgroundColor: colorBackgroundButtonSecondaryHover,
          },
          "&:focus": {
            backgroundColor: colorBackgroundButtonSecondaryFocus,
          },
          "&:active": {
            backgroundColor: colorBackgroundButtonSecondaryActive,
          },
          "&[disabled]": {
            backgroundColor: colorBackgroundButtonSecondaryDisabled,
            color: colorTextButtonSecondaryDisabled,
          },
        },
        tertiary: {
          backgroundColor: colorBackgroundButtonTertiaryDefault,
          boxShadow: `inset 0 0 0 2px ${colorBorderButtonTertiaryDefault}`,
          color: colorTextButtonTertiaryDefault,
          "&:hover": {
            backgroundColor: colorBackgroundButtonTertiaryHover,
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonTertiaryHover}`,
          },
          "&:focus": {
            backgroundColor: colorBackgroundButtonTertiaryFocus,
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonTertiaryFocus}`,
          },
          "&:active": {
            backgroundColor: colorBackgroundButtonTertiaryActive,
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonTertiaryActive}`,
          },
          "&[disabled]": {
            backgroundColor: colorBackgroundButtonTertiaryDisabled,
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonTertiaryDisabled}`,
            color: colorTextButtonTertiaryDisabled,
          },
        },
        ghost: {
          backgroundColor: "transparent",
          boxShadow: `inset 0 0 0 2px ${colorBorderButtonGhostDefault}`,
          color: colorTextButtonGhostDefault,
          "&:hover": {
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonGhostHover}`,
          },
          "&:focus": {
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonGhostFocus}`,
          },
          "&:active": {
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonGhostActive}`,
          },
          "&[disabled]": {
            boxShadow: `inset 0 0 0 2px ${colorBorderButtonGhostDisabled}`,
            color: colorTextButtonGhostDisabled,
          },
        },
      },
      size: {
        large: {
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: "bold",
          padding: iconAlone ? "17px" : "17px 24px",
        },
        medium: {
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: "bold",
          padding: iconAlone ? "14px" : "11px 24px",
        },
        small: {
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: "bold",
          padding: iconAlone ? "10px" : "7px 24px",
        },
      },
    },
  });

  const InnerText = styled("div", {
    minWidth: 0,
    wordWrap: "break-word",
    padding: "3px 0",
  });

  const IconWrapper = styled("div", {
    flexShrink: 0,
    variants: {
      size: {
        large: {
          width: "30px",
          marginLeft: iconAlone ? 0 : iconLeft ? "3px" : "12px",
          marginRight: iconAlone ? 0 : iconRight ? "3px" : "12px",
        },
        medium: {
          width: "20px",
          marginLeft: iconAlone ? 0 : iconLeft ? "2px" : "10px",
          marginRight: iconAlone ? 0 : iconRight ? "2px" : "10px",
        },
        small: {
          width: "20px",
          marginLeft: iconAlone ? 0 : iconLeft ? "2px" : "10px",
          marginRight: iconAlone ? 0 : iconRight ? "2px" : "10px",
        },
      },
    },
  });

  return (
    <Component {...{ look, size }} {...rest}>
      {iconLeft ? <IconWrapper {...{ size }}>{iconLeft}</IconWrapper> : ""}
      {children ? <InnerText>{children}</InnerText> : ""}
      {iconAlone ? <IconWrapper {...{ size }}>{iconAlone}</IconWrapper> : ""}
      {iconRight ? <IconWrapper {...{ size }}>{iconRight}</IconWrapper> : ""}
    </Component>
  );
}

export default Button;
