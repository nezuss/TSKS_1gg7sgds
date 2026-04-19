function extensibleObject() {
  const obj = Object.create({});

  obj.extend = function (template) {
    for (let key in template) {
      if (typeof template[key] === "function") {
        Object.getPrototypeOf(this)[key] = template[key];
      } else {
        this[key] = template[key];
      }
    }
  };

  return obj;
}

const myObj = extensibleObject();
const template = {
  extensionMethod: function () {
    console.log("I am a method!");
  },
  extensionProperty: "Something",
};

myObj.extend(template);
console.log(myObj.extensionProperty);
myObj.extensionMethod();
