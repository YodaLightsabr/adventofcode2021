import { day, logger, input } from './tools.js';

import('./' + (day + '').padStart(2, '0') + '/index.js').then(async module => {
  let data = await input();
  logger.info('Output: ', await module.main(data));
});