'use strict';

const app = require('./server');

const port = process.env.PORT || 80;
app.listen(port,() => { console.log(`Server listening on port ${port}`) })