const config = {
  use_lowchars: true,
  use_highchars: true,
  use_numbers: true,
  use_symbols: true
  /* Length Paramater in function */
};

function generate_token(length){
  /*const basic_characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';*/
  const lowchars ='abcdefghijklmnopqrstuvwxyz';
  const highchars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers ='0123456789';
  const symbols ="~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
    let preresult = '';
    if(config.use_lowchars === true){ preresult += lowchars };
    if(config.use_highchars === true){ preresult += highchars };
    if(config.use_numbers === true){ preresult += numbers };
    if(config.use_symbols === true){ preresult += symbols };

  let result = '';
  for(let i = 0; i < length; i++){result += preresult.charAt(Math.floor(Math.random() * preresult.length));};
  return(result);
};
