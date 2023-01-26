# Tic Tac Toe

Two-player game. Players alternate turns and the first to mark three squares in a row wins.

**View deploy:** [tic-tac-toe](https://dnlambb.github.io/tic-tac-toe/)

## Tech Stack

- Vite
- React
- TailwindCSS

## What I learned/practice?
- Using the State Hook.
- Using conditional styles with Tailwind in components.
- How to use a Spread.
- How to update the game board when the user marks a cell.
- How not to re-render an already marked cell using a conditional.
- How to reset the game and score with setState.
- How to show a scoreboard using State.
- How to check for a winner using "for" and conditionals.
- How to change turns with setState.
- How to change the message to notify a winner or a draw.
- Show all the squares of the game board with map and State.
- Deploy with vite and gh-pages.

## Run Locally

Clone the project

```bash
  git clone https://github.com/dnlambb/tic-tac-toe.git
```

Go to the project directory

```bash
  cd tic-tac-toe
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

## Deployment

To deploy this project first run

```bash
  pnpm build
```

and then

```bash
  pnpm gh-deploy
```

## License

[MIT](./LICENSE)

## Feedback

If you have any feedback, please write me at [dnlambb@writeme.com](mailto:dnlambb@writeme.com)
