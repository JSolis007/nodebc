function revert(text) {
  let result = '';

  for (let i = text.length; i > 0; i--) {
    result += text[i - 1];
  }
  console.log(result);
}

revert('hello');
revert('comit');
revert('olleh');
revert('hi');
revert('i\'ll be back');