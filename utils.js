import {dirname} from 'path';
import {fileURLToPath} from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename);

export {_filename, __dirname};