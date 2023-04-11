/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable no-console */

// stateless objects

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

const obj = { f: foo, g: bar };
obj.f();
obj.g();

const obj2 = {
  foo: function () {
    console.log("foo");
  },

  bar: function () {
    console.log("bar");
  },
};

obj2.foo();
obj2.bar();

const obj3 = {
  foo() {
    console.log("foo");
  },
  bar() {
    console.log("bar");
  },
};

obj3.foo();
obj3.bar();

const obj4 = {
  foo: () => {
    console.log("foo");
  },
  bar: () => {
    console.log("bar");
  },
};

obj4.foo();
obj4.bar();

// stateful objects
const point = {
  x: 1,
  y: 2,
  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
};

console.log(point.distance());

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const p = new Point(1, 2);
console.log(p.distance());
