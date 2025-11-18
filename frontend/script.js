
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});



