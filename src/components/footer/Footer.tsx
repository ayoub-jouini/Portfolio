import Form from "./Form";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="w-full bg-primary3 shadow-inner py-14">
      <h2 className="mb-16 text-center font-semibold text-4xl">Contact</h2>
      <div className="px-4 md:px-8 mx-auto lg:max-w-7xl grid grid-cols-2 justify-items-center gap-5">
        <div className="w-11/12 justify-self-start">
          <h3 className="text-3xl text-secondary font-medium">Contact me</h3>
          <p className="text-base my-5 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            recusandae quos rem nobis voluptates vel sequi corporis tenetur
            soluta aliquam dignissimos, consectetur nemo dolor, optio voluptas.
            Suscipit dolorum a consequuntur?
          </p>
          <div className="flex my-3">
            <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <img className="" alt="adress" src="/icons/adress.svg" />
            </div>
            <div className="mx-5">
              <h4 className="font-medium text-lg">Adress</h4>
              <p className="">15 omar ibn abdelaziz street,Megrine Riadh </p>
            </div>
          </div>
          <div className="flex my-3">
            <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <img className="" alt="phone" src="/icons/phone.svg" />
            </div>
            <div className="mx-5">
              <h4 className="font-medium text-lg">Phone number</h4>
              <p className="">+216 95 651 756</p>
            </div>
          </div>
          <div className="flex my-3">
            <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
              <img className="" alt="email" src="/icons/email.svg" />
            </div>
            <div className="mx-5">
              <h4 className="font-medium text-lg">Email</h4>
              <p className="">ayoubjouini135@gmail.com</p>
            </div>
          </div>
          <div className="flex mt-3">
            <img alt="" src="/icons/facebookicon.svg" className="mr-3" />
            <img alt="" src="/icons/linkedinicon.svg" className="mr-3" />
            <img alt="" src="/icons/githubicon.svg" className="mr-3" />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Footer;
