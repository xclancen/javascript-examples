/* Variables that help us for if-else compare */
const is_non_white_space = /^\S*$/;
const is_contains_upper_case = /^(?=.*[A-Z]).*$/;
const is_contains_lower_case = /^(?=.*[a-z]).*$/;
const is_contains_number = /^(?=.*[0-9]).*$/;
const is_contains_symbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
const isValidLength = /^.{6,16}$/;

const config = {
  check_white_space: true,
  check_upper_case: true,
  check_lower_case: true,
  check_number: true,
  check_symbol: true,
  check_length: true
};

/* This function checks password and changes "pass_verification_status" char to "F" if it finds a problem. */
function auth(password){
  if(password != undefined && typeof password === 'string'){
  let pass_verification_status = '';
    if(config.check_white_space === true){ if(is_non_white_space.test(password)){pass_verification_status += 'P'} else {pass_verification_status += 'F'}; };
    if(config.check_upper_case === true){ if(is_contains_upper_case.test(password)){pass_verification_status += 'P'} else {pass_verification_status += 'F'}; };
    if(config.check_lower_case === true){ if(is_contains_lower_case.test(password)){pass_verification_status += 'P'} else {pass_verification_status += 'F'}; };
    if(config.check_number === true){ if(is_contains_number.test(password)){pass_verification_status += 'P'} else {pass_verification_status += 'F'}; };
    if(config.check_symbol === true){ if(is_contains_symbol.test(password)){pass_verification_status += 'P'} else {pass_verification_status += 'F'}; };
    if(config.check_length === true){ if(isValidLength.test(password)){pass_verification_status += 'P'} else {pass_verification_status += 'F'}; };
    if(pass_verification_status.includes('F') === true){ return(0); } else { return(1); };
  } else { return(0); };
};
