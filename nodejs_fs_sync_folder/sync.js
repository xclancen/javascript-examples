/* Thanks to github.com/valtingojer */

/* Looking "src" for folders and files. repeating same process for subfolders */
function node_sync(src, dest){
  if(src != undefined && typeof src === 'string' && dest != undefined && typeof dest === 'string'){
    if(isValid(src) === 1 && isValid(dest) === 0 && isValid(dest) === 1){
      const { readFileSync, writeFile } = require('fs');
      let data = readFileSync(src, 'utf8');
      writeFile(dest, data, (err) => {
      if (err) throw err;
      });
      return(1);
    }else if(isValid(src) === 2 && isValid(dest) === 0 && isValid(dest) === 2){
      const { readdirSync } = require('fs');
      const { join } = require('path');
      if(isValid(dest) === 0){ node_mkdir(dest, { recursive: true }); };
      readdirSync(src).forEach(childItemName => {
        node_sync(join(src, childItemName), join(dest, childItemName));
      });
      return(1);
    } else { return(0); };
  } else { return(0); };
};
