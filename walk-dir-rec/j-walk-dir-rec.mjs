import { promises as fs } from 'fs';
import path from 'path';

allFilesRecusive=z=>fs.readdir(z).then(y=>y.reduce((p,f,x)=>p.then(async a=>a.concat(await((await fs.stat(x=path.join(z,f))).isDirectory()?allFilesRecusive(x):x))),(async()=>[])()))
