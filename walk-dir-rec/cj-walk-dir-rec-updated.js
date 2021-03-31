// cole's attempt at joshua's reduce
const fs = require("fs").promises;

walk_dir_rec=((I=z=>fs.readdir(z,{withFileTypes:1}).then(y=>y.reduce((p,f)=>p.then(async a=>a.concat(await(f.isDirectory(y=z+'/'+f.name)?I(y):y))),(async()=>[])())))=>I)()
