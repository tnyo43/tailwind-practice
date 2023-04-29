type Theme = "default" | "accent" | "alert";
type Size = "s" | "m" | "l";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  theme?: Theme;
  size: Size;
};

export const Button: React.FC<Props> = ({
  theme = "default",
  size,
  ...props
}) => (
  <button
    className={`
      rounded border outline-offset-4 hover:opacity-70     
      ${theme === "default" ? "bg-mono-background text-mono" : ""}
      ${theme === "accent" ? "bg-accent-background text-accent" : ""}
      ${theme === "alert" ? "bg-alert-background text-alert" : ""}

      ${size === "s" ? "h-24 px-16 text-sm" : ""}
      ${size === "m" ? "h-32 px-24 text-base" : ""}
      ${size === "l" ? "h-40 px-40 text-xl" : ""}
    `}
    {...props}
  />
);
