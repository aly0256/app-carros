exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',  // Permitir todos los orígenes, puedes especificar tu dominio si lo prefieres
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',  // Métodos permitidos
      'Access-Control-Allow-Headers': 'Content-Type',  // Cabeceras permitidas
    },
    body: JSON.stringify({
      carros: [
        { id: '1', marca: 'Chevrolet', modelo: 'Camaro', ano: '2015', precio: '45000'},
        { id: '2', marca: 'Ford', modelo: 'Mustang', ano: '2011', precio: '115000'},
        { id: '3', marca: 'Pontiac', modelo: 'Firebird', ano: '2018', precio: '90000'},
        { id: '4', marca: 'Grand Cheroke', modelo: 'Jeep', ano: '2024', precio: '150000'},
        { id: '5', marca: 'Grand Marquiz', modelo: 'Crown Victoria', ano: '1995', precio: '14000'},
        { id: '6', marca: 'Nuevo carro', modelo: 'Crown Victoria', ano: '1995', precio: '14000'},
        { id: '7', marca: 'Chrysler', modelo: '300ZR', ano: '2024', precio: '850000'}
      ]
    }),
  };
};
