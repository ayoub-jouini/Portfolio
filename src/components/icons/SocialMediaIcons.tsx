import Link from "next/link";

interface Props {}

const SocialMediaIcons: React.FC<Props> = () => {
  return (
    <div className="flex mt-7 md:mt-3 md:justify-start justify-center">
      <Link
        href="https://www.facebook.com/ayoub.jouini.79"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt=""
          src="/icons/facebookiconlight.svg"
          className="mr-3 dark:hidden flex"
        />
        <img
          alt=""
          src="/icons/facebookicon.svg"
          className="mr-3 dark:flex hidden"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mohamed-ayoub-jouini-254152205/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt=""
          src="/icons/linkediniconlight.svg"
          className="mr-3 dark:hidden flex"
        />
        <img
          alt=""
          src="/icons/linkedinicon.svg"
          className="mr-3 dark:flex hidden"
        />
      </Link>
      <Link
        href="https://github.com/ayoub-jouini"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt=""
          src="/icons/githubiconlight.svg"
          className="mr-3 dark:hidden flex"
        />
        <img
          alt=""
          src="/icons/githubicon.svg"
          className="mr-3 dark:flex hidden"
        />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
