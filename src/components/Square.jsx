export const Square = ({ children, isSelected, updateBoard, index }) => {
  const squareClass =
    'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-white flex place-items-center justify-center border border-yellow-300 rounded-md shadow-md shadow-gray-900 cursor-pointer active:scale-90 transition-all';
  const is_selected = 'bg-yellow-300 text-black';
  const selectStyle = `${squareClass} ${isSelected ? is_selected : ''}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={selectStyle}>
      <span className="text-3xl sm:text-4xl lg:text-5xl">{children}</span>
    </div>
  );
};
