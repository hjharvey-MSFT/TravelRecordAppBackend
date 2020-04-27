var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

module.exports = {
    data: {
        provider: 'mssql',
        connectionString: "Server=tcp:lackrinnodejs-test-server.database.windows.net,1433;Initial Catalog=lackrinNodeJS-test-Database;Persist Security Info=False;User ID=lackrin;Password={your_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
    }
};

mobileApp.tables.add('Post'); // Add a table for 'Post' with default settings
mobileApp.tables.add('Users'); // Add a table for 'Users' (Plural, because user is reserved word in SQL)
mobileApp.tables.add('Delivery'); // Add a table for 'Delivery' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
