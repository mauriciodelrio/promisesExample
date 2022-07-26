const walkingInterval = setInterval(() => {
  console.log('caminando por la montaña...');
}
, 1000);

const getSomeWater = (water) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(water) {
        resolve(`Llevamos agua a nuestra casa, llevamos una cantidad de ${
          water
        } Litros`);
      } else {
        reject('No hay agua');
      }
    }, 4000);
  });
}

const goToHill = (wet_floor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(wet_floor) {
          clearInterval(walkingInterval);
          reject(`No pudimos llegar a la cima, hay suelo húmedo`);
        } else {
          clearInterval(walkingInterval)
          resolve('Llegamos bien a la montaña a buscar agua');
        }
      }, 4000)
  });
}

module.exports = {
  getSomeWater,
  goToHill
}

