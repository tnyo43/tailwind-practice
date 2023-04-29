type Props = React.ComponentPropsWithoutRef<"input">;

export const TextInput: React.FC<Props> = (props) => (
  <input
    className={`
      h-32 rounded border px-8 text-black outline-offset-4
      invalid:border-alert invalid:bg-alert-background
      disabled:cursor-not-allowed disabled:bg-gray-40
    `}
    {...props}
  />
);
