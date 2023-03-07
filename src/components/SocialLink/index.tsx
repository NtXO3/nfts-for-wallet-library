import { AnchorHTMLAttributes, FunctionComponent } from "react";

const SocialLink: FunctionComponent<
  AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...rest }) => {
  return (
    <a
      className="flex w-8 h-8 justify-center items-center bg-slate-600 hover:bg-slate-500 
      cursor-pointer transition rounded-full"
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};

export { SocialLink };
