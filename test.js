const main = async function () {

  try {

    const ensure = require(__dirname + "/ensure.js");

    // Uso de la API
    const v1 = 5;
    const v2 = 10;
    const v3 = 50;

    ensure({ v1 }).is(5);
    ensure({ v2 }).is(10);
    ensure({ v3 }).is(50);
    ensure({ v3 }).isnt(51);
    ensure({ v3 }).type("number");

    // Ejemplo del README
    const v = 500;

    ensure({ v }).is(500);
    ensure({ v }).isnt(501);
    ensure({ v }).type("number");
    ensure({ v }).notType("string");
    ensure({ v }).can(n => n > 100);
    ensure({ v }).cant(n => n < 100);
    ensure({ v }).throws(n => { throw new Error("wherever"); });
    ensure({ v }).doesntThrow(n => "ok!");

  } catch (error) {
    console.log(error);
  }

};

main();