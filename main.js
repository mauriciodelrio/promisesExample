const f = require('./promises.js');

// promesas
f.goToHill(false).then(
  (result) => {
    console.log(result);
    f.getSomeWater(10).then(
      (result) => {
        console.log(result);
      }
      ).catch(
        (error) => {
          console.log(error);
        }
        );
      }
      ).catch(
  (error) => {
    console.log(error);
  }
  );
  
  // usando promise all
/*   Promise.all([f.goToHill(false), f.getSomeWater(10)]).then(
    (result) => {
      console.log(result);
    }
  ).catch(
    (error) => {
      console.log(error);
    }
  ); */

// using async/await
/* async function main() {
  try {
    const result = await Promise.all([f.goToHill(false), f.getSomeWater(10)]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main(); */
