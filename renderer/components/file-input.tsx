import { ComponentProps } from "react";

export function FileInput({ name, ...rest }: ComponentProps<"input">) {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor={name}
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-zinc-800 border-dashed rounded-lg cursor-pointer hover:bg-zinc-900"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              stroke="white"
              d="M6 2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
            />
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M13 2v6h7"
            />
            <text x="8" y="18" fontSize="6" color="white" stroke-width={0.25}>
              .csv
            </text>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-base">
              Clique para enviar sua planilha
            </span>
          </p>
          <p className="flex flex-col text-sm text-gray-500 dark:text-gray-400">
            <span> ⚠️ Sua planilha deve estar no formato .csv!</span>
          </p>
        </div>
        <input name={name} id={name} type="file" className="hidden" {...rest} />
      </label>
    </div>
  );
}
