import { prompt } from 'inquirer';

export const main = () => {
  prompt([{ message: 'Really?', type: 'confirm', name: 'youSaidOkay' }]).then(
    ({ youSaidOkay }) => {
      process.exit(youSaidOkay ? 0 : 1);
    },
  );
};

main();
