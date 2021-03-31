const fs = require("fs");

walk_dir_rec=((I=f=>fs.promises.readdir(f,{withFileTypes:1}).then(D=>Promise.all(D.map(d=>d.isDirectory(D=f+'/'+d.name)?I(D):D)).then(q=>q.flat())))=>I)()
