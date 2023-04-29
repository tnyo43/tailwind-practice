type Theme = "default" | "accent" | "alert";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  theme?: Theme;
};

export const Button: React.FC<Props> = ({ theme = "default", ...props }) => (
  <button
    className={`h-7 rounded-lg border px-4
    ${theme === "default" ? "bg-mono-background text-mono" : undefined}
    ${theme === "accent" ? "bg-accent-background text-accent" : undefined}
    ${theme === "alert" ? "bg-alert-background text-alert" : undefined}`}
    {...props}
  />
);
