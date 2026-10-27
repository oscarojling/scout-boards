import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="flex items-center gap-4 rounded-md bg-navy p-5 md:p-6 mb-4">
      <div className="rounded-md bg-steel p-2">
        <Image src="/logo.svg" alt="Binoculars" width={80} height={60} />
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Welcome to Scout <span className="text-accent">Boards</span>
        </h1>
        <p className="text-sm text-ice">Scouting tomorrow's stars</p>
      </div>
    </div>
  );
};

export default HomeHero;
