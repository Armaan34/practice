const person = {
  firstName: "Ateeq",
  lastName: "Uddin",
  age: 30,
  bio: function () {
    return {
      aa: 1,
      bb: 2,
      cc: function () {
        console.log(this);
      },
    };
  },
  test: function () {
    console.log(this);
  },
};

console.log(this);
person.bio().cc();
person.test()
