/* This code writed for JavaScript */

  let config_defaults = {
  recursive: false,
  
};

/* Thanks to github.com/ghybs to teach me
comparing assigment to an object reference */
let active_config = config_defaults;

exports.setcfg = function(options){
  options = Object.assign({}, config_defaults, options);
  active_config = options;
  return(options);
};

exports.getcfg = function(){
  return(active_config);
};
