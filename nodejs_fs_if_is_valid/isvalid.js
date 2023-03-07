/* Search src and find out type. (0: none / 1: file / 2: folder) */
function isValid(src){
  if(src != undefined && typeof src === 'string'){
    const { existsSync, lstatSync } = require('fs');
    if(existsSync(src) === true && lstatSync(src).isDirectory() === false){
      return(1);
    } else if(existsSync(src) === true && lstatSync(src).isDirectory() === true){
      return(2);
    } else { return(0); };
  } else { console.log('File or Folder name must be string!'); return(0); };
};
