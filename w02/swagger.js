const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Contacts API",
        description: "Contacts API Documentation",
    },
    host: 'cse341w02-bjre.onrender.com',
    schemes: ['https'],
    definitions: {
        Contact: {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            favoriteColor: "Blue",
            birthday: "01-01-1990"
        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);