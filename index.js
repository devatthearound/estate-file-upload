const express = require('express');
const path = require('path');   


const PORT = 3197;
const app = express();


const clientDir = path.join(__dirname,"client");
app.use(
  express.static(
    path.join(clientDir)
  )
);

app.get('/', (req, res) => {
  console.log('uploads');
  res.sendFile(path.join(clientDir, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  