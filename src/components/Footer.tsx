import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col bg-wlalterWhite p-5 items-center">
      <Image src="/logo.png" width={133} height={23} alt="Full Stack Week" />
      <p className="text-sm font-medium text-primaryDarker mt-1">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
