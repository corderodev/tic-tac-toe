import { Button } from "./Button";

export const ScoreBoard = ({TURNS, score_x, score_o, resetBoard}) => {
  return (
    <section className="block pt-20 text-center text-2xl text-white lg:pt-0 lg:place-self-center">
      <h2 className="pb-6 text-yellow-300">Score Board</h2>
      <p className="mb-6">
        <span className="border border-yellow-300 px-3 py-1 mr-2 rounded-md">{TURNS.X}</span> won:{' '}
        <span className="text-yellow-300">{score_x}</span>
      </p>
      <p className="mb-10">
        <span className="border border-yellow-300 px-3 py-1 mr-2 rounded-md">{TURNS.O}</span> won:{' '}
        <span className="text-yellow-300">{score_o}</span>
      </p>
      <Button handler={resetBoard} content="Reset Score" />
    </section>
  );
};
