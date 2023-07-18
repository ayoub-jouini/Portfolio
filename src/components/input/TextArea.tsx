"use client";

interface Props {
  value: string;
  changeValue: (event: any) => void;
  placeholder: string;
  error: string;
}

const TextArea: React.FC<Props> = (props) => {
  const { value, changeValue, placeholder, error } = props;
  return (
    <div className="my-3 w-full h-full">
      <textarea
        className="w-full h-full resize-none px-5 py-3 rounded-[18px] border-2 border-tertiary dark:border-secondary bg-white2 dark:bg-primary3 placeholder:text-gray-600 dark:placeholder:text-white1"
        value={value}
        onChange={changeValue}
        placeholder={placeholder}
      />
      {error && <p className="text-right text-red-300">{error}</p>}
    </div>
  );
};

export default TextArea;
