type Props = {
  iconType: string;
  onClick: () => void;
};

export const IconButton: React.FC<Props> = (props) => (
  <button
    className="inline-flex h-32 w-32 items-center justify-center rounded-max hover:bg-gray-60"
    onClick={props.onClick}
  >
    <span className="material-symbols-outlined h-auto w-auto">
      {props.iconType}
    </span>
  </button>
);
