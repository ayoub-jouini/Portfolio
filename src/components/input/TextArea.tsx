"use client";

interface Props {
  value: string;
  changeValue: (event: any) => void;
  placeholder: string;
}

const TextArea: React.FC<Props> = (props) => {
  const { value, changeValue, placeholder } = props;
  return (
    <textarea
      className="w-full my-3 h-full resize-none px-5 py-3 rounded-[18px] border-2 border-secondary bg-primary3"
      value={value}
      onChange={changeValue}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
