import { ButtonHTMLAttributes, FunctionComponent } from "react";

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className: classNameProp,
  ...rest
}) => {
  return (
    <button
      className={`${classNameProp} bg-indigo-500 py-3 px-8 font-semibold rounded-md text-base disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-80 transition`}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
