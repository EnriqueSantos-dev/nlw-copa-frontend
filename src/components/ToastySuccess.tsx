import { useEffect } from "react";
import CheckIcon from "./CheckIcon";

interface Props {
  code: string;
}

function ToastySuccess({ code }: Props) {
  async function copyToClipboard() {
    await navigator.clipboard.writeText(code);
  }

  useEffect(() => {
    copyToClipboard();
  });

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full">
      <CheckIcon />
      <p className="text-gray-300 text-lg">
        O seu bolão foi criado com sucesso e o código abaixo foi copiado para
        área de trasnferência
      </p>

      <strong className="text-2xl text-[#129E57]">{code}</strong>
    </div>
  );
}

export default ToastySuccess;
