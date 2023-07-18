"use client";

interface Props {
  type: string;
  value: string;
  changeValue: (event: any) => void;
  placeholder: string;
  error: string;
}

const Input: React.FC<Props> = (props) => {
  const { type, value, changeValue, placeholder, error } = props;
  return (
    <div className="my-3">
      <input
        className="w-full px-5 py-3 rounded-[18px] border-2 border-tertiary dark:border-secondary bg-white2 dark:bg-primary3 placeholder:text-gray-600 dark:placeholder:text-white1"
        type={type}
        value={value}
        onChange={changeValue}
        placeholder={placeholder}
      />
      {error && <p className="text-right text-red-300">{error}</p>}
    </div>
  );
};

export default Input;
