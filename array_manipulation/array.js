function arr_filter(arr, criteria){
  return(arr.filter(function(obj){
    return(Object.keys(criteria).every(function(c){
      return(obj[c] == criteria[c]);
    }));
  }));
};

function addUsername(username, src){ /* src file data: [] */
	const { readFileSync } = require('fs');
	const fileModule = readFileSync;

const new_entry = JSON.parse( fileModule(src) );
  new_entry.push({ "user" : `${username}` });
  console.log(new_entry);
  console.log("don't forget to write array data to file after that!"); return(1);
};

const isUsernameValid(username, src){
  const reserved_usernames = require(src);
  return(reserved_usernames.find( function({ user }){ user[0] === username } )?.user[0]);
};
