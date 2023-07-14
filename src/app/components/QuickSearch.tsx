import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter" />
        <div className="font-medium text-grayPrimary whitespace-nowrap px-5">
          Tente pesquisar por
        </div>
        <div className="w-full h-[1px] bg-grayLighter" />
      </div>
      <div className="flex w-full justify-around mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/hotel-icon.png" alt="hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/farm-icon.png" alt="hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/cottage-icon.png" alt="hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/inn-icon.png" alt="hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;