interface Props {
  skill: string;
}

const SkillIcon: React.FC<Props> = ({ skill }) => {
  return (
    <img
      className={`cursor-pointer transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-100 invert-[99%] sepia-[5%] saturate-[357%] hue-rotate-[202deg] brightness-[114%] contrast-[87%] dark:filter-none`}
      alt={skill}
      src={`/icons/${skill}.svg`}
    />
  );
};

export default SkillIcon;
