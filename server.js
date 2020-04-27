var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')
(
    {
    // Explicitly enable the Azure Mobile Apps home page
    homePage: true,
    // Explicitly enable swagger support. UI support is enabled by
    // installing the swagger-ui npm module.
    // swagger: true,
    // App will use MS_SqliteFilename or MS_TableConnectionString to choose the SQLite or SQL data provider
    data: {
        dynamicSchema: true
    }
); // Create an instance of a Mobile App with default settings


mobileApp.tables.add('Post'); // Add a table for 'Post' with default settings
mobileApp.tables.add('Users'); // Add a table for 'Users' (Plural, because user is reserved word in SQL)
mobileApp.tables.add('Delivery'); // Add a table for 'Delivery' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
