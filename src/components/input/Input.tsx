"use client";

interface Props {
  type: string;
  value: string;
  changeValue: (event: any) => void;
  placeholder: string;
}

const Input: React.FC<Props> = (props) => {
  const { type, value, changeValue, placeholder } = props;
  return (
    <input
      className="w-full my-3 px-5 py-3 rounded-[18px] border-2 border-secondary bg-primary3"
      type={type}
      value={value}
      onChange={changeValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
