import { Square } from './Square';
import { Button } from './Button';

export const TurnsBoard = ({ turn, TURNS, restart, mssg }) => {
  return (
    <section className="pb-10 flex flex-col gap-5 text-5xl justify-center">
      <h1 className="text-center text-3xl font-bold text-yellow-300 pt-8 pb-5">Tic Tac Toe</h1>
      <p className="text-xl text-white text-center">{mssg}</p>
      <div className="flex m-auto gap-5">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </div>
      <Button handler={restart} content="Restart game" />
    </section>
  );
};
