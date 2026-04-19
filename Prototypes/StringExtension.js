(function solve() {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this;
  };

  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : this + str;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (n < 4) return ".".repeat(n);
    if (this.length < +n) return this.toString();

    const lastSpace = this.substring(0, n - 2).lastIndexOf(" ");

    return lastSpace !== -1
      ? this.substring(0, lastSpace) + "..."
      : this.substring(0, n - 3) + "...";
  };

  String.format = function (string, ...params) {
    return string.replace(/{(\d+)}/g, (match, group1) => {
      const index = Number(group1);

      return params[index] !== undefined ? params[index] : match;
    });
  };
})();

let str = "my string";

str = str.ensureStart("my"); // 'my string' (already present)
str = str.ensureStart("hello "); // 'hello my string'
str = str.truncate(16); // 'hello my string' (length is 15)
str = str.truncate(14); // 'hello my...' (split at space)
str = str.truncate(8); // 'hello...'
str = str.truncate(4); // 'h...'
str = str.truncate(2); // '..'
console.log(str);

let formatted = String.format("The {0} {1} fox", "quick", "brown");
console.log(formatted); // 'The quick brown fox'

let missingParam = String.format("jumps {0} {1}", "dog");
console.log(missingParam); // 'jumps dog {1}'
