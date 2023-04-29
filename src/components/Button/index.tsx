type Theme = "default" | "accent" | "alert";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  theme?: Theme;
};

export const Button: React.FC<Props> = ({ theme = "default", ...props }) => (
  <button
    className={`h-7 rounded-lg  px-4
    ${theme === "default" ? "bg-gray-light text-gray-dark" : undefined}
    ${theme === "accent" ? "bg-blue text-white" : undefined}
    ${theme === "alert" ? "bg-white text-orange" : undefined}`}
    {...props}
  />
);
