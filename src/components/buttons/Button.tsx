interface Props {
  title: string;
  style?: "outlined";
}

const Button: React.FC<Props> = (props) => {
  const { title, style } = props;

  return (
    <button
      className={`px-8 md:px-16 py-2 md:py-3 rounded-[12px] md:rounded-[19px] border-2 border-secondary transition ease-in-out delay-100  ${
        style === "outlined"
          ? "dark:text-white text-primary1 hover:bg-secondary dark:hover:text-primary1 dark:bg-primary1 bg-white"
          : "bg-secondary text-primary1 hover:bg-primary1 hover:text-white"
      } `}
    >
      {title}
    </button>
  );
};

export default Button;
