const Footer = () => {
  return (
    <footer className="mt-auto border-t-4 border-accent bg-navy text-ice">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 py-6 md:flex-row md:justify-between">
            <p className="text-2xl font-bold text-white">
              Scout<span className="text-accent ml-2">Boards</span>
            </p>
            <p className="text-sm text-ice">Made by Oscar Öjling</p>
      </div>
    </footer>
  );
};

export default Footer;
