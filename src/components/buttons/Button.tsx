interface Props {
  title: string;
  style?: "outlined";
}

const Button: React.FC<Props> = (props) => {
  const { title, style } = props;

  return (
    <button
      className={`px-8 md:px-16 py-2 md:py-3 rounded-[12px] md:rounded-[19px] border-2 border-tertiary dark:border-secondary transition ease-in-out delay-100  ${
        style === "outlined"
          ? "dark:text-white text-primary1 hover:bg-tertiary hover:text-white1 dark:hover:text-primary1 dark:hover:bg-secondary dark:bg-primary1 bg-white"
          : "bg-tertiary dark:bg-secondary hover:bg-white1 text-white1 dark:hover:bg-primary1 dark:hover:text-secondary dark:text-primary1 hover:text-tertiary"
      } `}
    >
      {title}
    </button>
  );
};

export default Button;
