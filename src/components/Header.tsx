const Header = () => {
  return (
    <header className="bg-[#161410]">
      <div className="mx-auto flex w-full max-w-184.5 items-center justify-between p-3 md:p-0">
        <img src="./logo.png" alt="logo" />
        <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded bg-[#F2DAAC]">
          Entrar
        </div>
      </div>
    </header>
  );
};

export default Header;
