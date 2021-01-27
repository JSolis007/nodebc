function getLongerText(text1, text2) {
  if (text1.length >= text2.length) {
    return text1;
  } else {
    return text2;
  }
}


console.log(getLongerText('hi', 'hiii'));
console.log(getLongerText('theneverendingtext', 'ok'));
console.log(getLongerText('say', 'what'));
console.log(getLongerText('', 'emptystring'));

