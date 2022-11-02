import CheckIcon from "./CheckIcon";

interface Props {
  count: number;
  label: string;
}

function Count({ count, label }: Props) {

  return (
    <div className="flex gap-6 items-center">
      <CheckIcon />

      <div>
        <span className="font-bold text-2xl text-gray-100">
          {count === 0 ? 0 : `+ ${count}`}
        </span>

        <p className="text-gray-100 first-letter:capitalize">{label}</p>
      </div>
    </div>
  );
}

export default Count;
