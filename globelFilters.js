Vue.filter("textLimit", function (value) {
  if (value.length > 22) return `${value.slice(0, 22)} ...`;
  return value;
});
