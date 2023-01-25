import logoBrand from '../assets/lamb.svg';

export const Header = () => {
  return (
    <header className="px-10 py-4 justify-items-start absolute top-0 w-full">
      <nav className="md:w-1/2 m-auto text-xl text-white flex place-items-center justify-between">
        <a href="https://dnlambb.com" target="_blank" className="hover:scale-90 transition-all">
          <img className="w-14" src={logoBrand} alt="logo brand" />
        </a>
        <a
          className="hover:text-yellow-300 transition-all"
          href="https://github.com/dnlambb/tic-tac-toe">
          Repository
        </a>
      </nav>
    </header>
  );
};
