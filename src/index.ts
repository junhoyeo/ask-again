import { prompt } from 'inquirer';

export const main = () => {
  prompt([{ message: 'Really?', type: 'confirm', name: 'youSaidOkay' }]);
};

main();
