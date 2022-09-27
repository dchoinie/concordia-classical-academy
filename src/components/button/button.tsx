import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import { Button } from "../../types/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sizeMap = {
  larger: "btnLarger",
  large: "btnLarge",
  medium: "btnMedium",
  small: "btnSmall",
  smaller: "btnSmaller",
} as any;

const themeMap = {
  primary: "btnPrimary",
  secondary: "btnSecondary",
  accent: "btnAccent",
  white: "btnWhite",
} as any;

const ButtonComponent = ({
  label,
  size = "medium",
  theme,
  startIcon,
  endIcon,
  disabled,
  onClick,
  classes,
  link = "/",
  onChange,
  href,
  download,
  disableTargetBlank,
  submissionInProgress,
}: Button): JSX.Element => {
  const getLinkType = () => {
    if (href) {
      return (
        <a
          href={href}
          className={cx(
            "btn capitalize",
            size && sizeMap[size],
            theme && themeMap[theme],
            classes
          )}
          target={disableTargetBlank ? undefined : "_blank"}
          rel="noopener noreferrer"
          download={download}
        >
          {startIcon && <FontAwesomeIcon icon={startIcon} className="mr-2" />}
          {label}
          {endIcon && <FontAwesomeIcon icon={endIcon} className="ml-2" />}
        </a>
      );
    }
    return (
      <Link
        to={link}
        className={cx(
          "btn capitalize",
          size && sizeMap[size],
          theme && themeMap[theme],
          classes
        )}
      >
        {startIcon && <FontAwesomeIcon icon={startIcon} className="mr-2" />}
        {label}
        {endIcon && <FontAwesomeIcon icon={endIcon} className="ml-2" />}
      </Link>
    );
  };
  return (
    <>
      {onClick ? (
        <button
          onClick={onClick}
          onChange={onChange}
          className={cx(
            "btn capitalize",
            size && sizeMap[size],
            theme && themeMap[theme],
            classes
          )}
          disabled={disabled || submissionInProgress}
        >
          {startIcon && <FontAwesomeIcon icon={startIcon} className="mr-2" />}
          {label}
          {endIcon && <FontAwesomeIcon icon={endIcon} className="ml-2" />}
        </button>
      ) : (
        <>{getLinkType()}</>
      )}
    </>
  );
};

export default ButtonComponent;
