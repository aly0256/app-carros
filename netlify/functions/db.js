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
        { id: '3', marca: 'BMW', modelo: 'Serie 3', ano: '2018', precio: '90000'},
        { id: '4', marca: 'BMW', modelo: 'Serie 5', ano: '2024', precio: '150000'},
        { id: '5', marca: 'Dodge', modelo: 'Challenger', ano: '2018', precio: '95000'},
        { id: '6', marca: 'Mercedes Benz', modelo: 'Clase C', ano: '1995', precio: '14000'},
        { id: '7', marca: 'Chrysler', modelo: '300C', ano: '2012', precio: '850000'},
        { id: '8', marca: 'Ford', modelo: 'Mustang', ano: '2022', precio: '115000'},
        { id: '9', marca: 'Audi', modelo: 'A4', ano: '2025', precio: '125000'},
        { id: '10', marca: 'Toyota', modelo: 'Camry', ano: '2023', precio: '97000'},
        { id: '11', marca: 'Chevrolet', modelo: 'Camaro', ano: '2024', precio: '95000'},
        { id: '12', marca: 'Honda', modelo: 'Civic', ano: '2016', precio: '87000'},
        { id: '13', marca: 'Toyota', modelo: 'Corola', ano: '2012', precio: '90000'},
        { id: '14', marca: 'BMW', modelo: 'Serie 3', ano: '2020', precio: '87000'},
        { id: '15', marca: 'Dodge', modelo: 'Challenger', ano: '2011', precio: '55000'},
        { id: '16', marca: 'Mercedes Benz', modelo: 'Clase C', ano: '2011', precio: '75000'},
        { id: '17', marca: 'Nissan', modelo: 'Altima', ano: '2015', precio: '85000'},
        { id: '18', marca: 'Ford', modelo: 'Mustang', ano: '2011', precio: '115000'},
        { id: '19', marca: 'Audi', modelo: 'A3', ano: '2024', precio: '225000'},
        { id: '20', marca: 'Toyota', modelo: 'Camry', ano: '2016', precio: '89565'}
      ]
    }),
  };
};
