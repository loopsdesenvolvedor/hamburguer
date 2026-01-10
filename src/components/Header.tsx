const Header = () => {
  return (
    <header className="bg-[#161410]">
      <div className="w-full max-w-184.5 p-3 md:p-0 mx-auto flex justify-between items-center">
        <img src="./logo.png" alt="logo" />
        <div className="w-32.5 h-8.75 flex rounded justify-center items-center cursor-pointer bg-[#F2DAAC]">
          Entrar
        </div>
      </div>
    </header>
  );
};

export default Header;
