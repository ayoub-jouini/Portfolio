interface Props {
  name: string;
}

const ContactIcon: React.FC<Props> = ({ name }) => {
  return (
    <>
      <img
        className="dark:hidden flex"
        alt={`${name}`}
        src={`/icons/${name}light.svg`}
      />
      <img
        className="dark:flex hidden"
        alt={`${name}`}
        src={`/icons/${name}.svg`}
      />
    </>
  );
};

export default ContactIcon;
