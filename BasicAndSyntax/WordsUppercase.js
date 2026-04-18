const wordsUppercase = (argument) => {
  const words = argument.match(/\w+/g);

  if (!words) return;

  let result = words.map((word) => word.toUpperCase()).join(", ");

  console.log(result);
};

wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
