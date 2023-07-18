import ContactIcon from "../icons/ContactIcon";
import SocialMediaIcons from "../icons/SocialMediaIcons";
import Form from "./Form";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div
      id="contact"
      className="w-full h-full bg-white2 dark:bg-primary3 shadow-inner py-14"
    >
      <h2 className="mb-8 md:mb-16 text-center font-semibold text-2xl md:text-4xl text-primary1 dark:text-white1">
        Contact
      </h2>
      <div className="px-4 md:px-8 mx-auto lg:max-w-7xl flex md:grid md:grid-cols-2 md:justify-items-center md:gap-5">
        <div className=" flex flex-col justify-between md:block md:w-11/12 md:justify-self-start">
          <h3 className="text-lg md:text-3xl dark:text-secondary text-tertiary font-medium">
            Contact me
          </h3>
          <p className="text-sm md:text-base my-5 text-justify text-primary1 dark:text-white1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            recusandae quos rem nobis voluptates vel sequi corporis tenetur
            soluta aliquam dignissimos, consectetur nemo dolor, optio voluptas.
            Suscipit dolorum a consequuntur?
          </p>
          <div className="h-full w-full flex md:hidden">
            <Form />
          </div>
          <div className="grid grid-cols-6 md:flex my-3">
            <div className="bg-tertiary dark:bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <ContactIcon name="adress" />
            </div>
            <div className="md:mx-5 col-span-5">
              <h4 className="font-medium text-base md:text-lg text-primary1 dark:text-white1">
                Adress
              </h4>
              <p className="text-sm md:text-base text-primary1 dark:text-white1">
                15 omar ibn abdelaziz street,Megrine Riadh
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 md:flex my-3">
            <div className="bg-tertiary dark:bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <ContactIcon name="phone" />
            </div>
            <div className="md:mx-5 col-span-5">
              <h4 className="font-medium text-lg text-primary1 dark:text-white1">
                Phone number
              </h4>
              <p className="text-primary1 dark:text-white1">+216 95 651 756</p>
            </div>
          </div>
          <div className="grid grid-cols-6 md:flex my-3">
            <div className="bg-tertiary dark:bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <ContactIcon name="email" />
            </div>
            <div className="md:mx-5 col-span-5">
              <h4 className="font-medium text-lg text-primary1 dark:text-white1">
                Email
              </h4>
              <p className="text-primary1 dark:text-white1">
                ayoubjouini135@gmail.com
              </p>
            </div>
          </div>

          <SocialMediaIcons />
        </div>
        <div className="h-full w-full hidden md:flex">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Footer;
