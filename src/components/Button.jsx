export const Button = ({handler, content}) => {
  return (
    <button
      onClick={handler}
      className="w-fit m-auto px-8 py-2 text-white text-xl font-semibold tracking-widest border border-yellow-300 rounded-xl active:scale-90 hover:bg-yellow-300 hover:text-black transition-all">
      {content}
    </button>
  );
};
