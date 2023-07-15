import Form from "./Form";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div id="contact" className="w-full h-full bg-primary3 shadow-inner py-14">
      <h2 className="mb-8 md:mb-16 text-center font-semibold text-2xl md:text-4xl">
        Contact
      </h2>
      <div className="px-4 md:px-8 mx-auto lg:max-w-7xl flex md:grid md:grid-cols-2 md:justify-items-center md:gap-5">
        <div className=" flex flex-col justify-between md:block md:w-11/12 md:justify-self-start">
          <h3 className="text-lg md:text-3xl text-secondary font-medium">
            Contact me
          </h3>
          <p className="text-sm md:text-base my-5 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            recusandae quos rem nobis voluptates vel sequi corporis tenetur
            soluta aliquam dignissimos, consectetur nemo dolor, optio voluptas.
            Suscipit dolorum a consequuntur?
          </p>
          <div className="h-full w-full flex md:hidden">
            <Form />
          </div>
          <div className="grid grid-cols-6 md:flex my-3">
            <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <img className="" alt="adress" src="/icons/adress.svg" />
            </div>
            <div className="md:mx-5 col-span-5">
              <h4 className="font-medium text-base md:text-lg">Adress</h4>
              <p className="text-sm md:text-base">
                15 omar ibn abdelaziz street,Megrine Riadh
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 md:flex my-3">
            <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <img className="" alt="phone" src="/icons/phone.svg" />
            </div>
            <div className="md:mx-5 col-span-5">
              <h4 className="font-medium text-lg">Phone number</h4>
              <p className="">+216 95 651 756</p>
            </div>
          </div>
          <div className="grid grid-cols-6 md:flex my-3">
            <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <img className="" alt="email" src="/icons/email.svg" />
            </div>
            <div className="md:mx-5 col-span-5">
              <h4 className="font-medium text-lg">Email</h4>
              <p className="">ayoubjouini135@gmail.com</p>
            </div>
          </div>
          <div className="flex mt-7 md:mt-3 md:justify-start justify-center">
            <img alt="" src="/icons/facebookicon.svg" className="mr-3" />
            <img alt="" src="/icons/linkedinicon.svg" className="mr-3" />
            <img alt="" src="/icons/githubicon.svg" className="mr-3" />
          </div>
        </div>
        <div className="h-full w-full hidden md:flex">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Footer;
