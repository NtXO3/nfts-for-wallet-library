import { CSSProperties, FunctionComponent } from "react";

type SkeletonProps = CSSProperties & {
  className?: string;
};

const Skeleton: FunctionComponent<SkeletonProps> = ({
  className,
  ...props
}) => {
  return <div className={`skeleton ${className}`} style={props} />;
};

export { Skeleton };
