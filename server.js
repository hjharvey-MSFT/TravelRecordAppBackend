var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')();


mobileApp.tables.add('Post'); // Add a table for 'Post' with default settings
mobileApp.tables.add('Users'); // Add a table for 'Users' (Plural, because user is reserved word in SQL)
mobileApp.tables.add('Delivery'); // Add a table for 'Delivery' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
