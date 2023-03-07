/* This code writed for EcmaScript */

  let config_defaults = {
  recursive: false,
  
};

/* Thanks to github.com/ghybs to teach me
comparing assigment to an object reference */
let active_config = config_defaults;

export function setcfg(options){
  options = Object.assign({}, config_defaults, options);
  active_config = options;
  return(options);
};

export function getcfg(){
  return(active_config);
};
