function getUserID() {
  return 50;
}

function isUserValid() {
  return ((getUserID() > 30) ? true : false);
}

(isUserValid()) ? console.log('User valid') : console.log('User not valid');

