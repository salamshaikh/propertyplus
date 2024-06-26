const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: '',
  // database: 'property'
  host: 'o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'wp062e680v3b8qd5',
  password: 'o775cw5cuzm9ydsm',
  database: 'lk3i5sx0rlwbm3o2'
  
  // host: "demotest.mysql.database.azure.com",
  // user: "codecwsq_wp605",
  // password: "Welcome@123",
  // database: "codecwsq_wp605"
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Serve index.html for all routes to support client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// POST endpoint to handle form submission
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Insert into MySQL
  const sql = 'INSERT INTO subscribers (email) VALUES (?)';
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving to database');
    } else {
      console.log('Data inserted into MySQL');
      res.status(200).send('Data inserted successfully');
    }
  });
});

// POST endpoint to handle contact form submission
app.post('/contact', (req, res) => {
  const { user_name, user_email, user_phone, user_subject, message } = req.body;

  // Insert into MySQL
  const sql = 'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
  const values = [user_name, user_email, user_phone, user_subject, message];
  
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving to database');
    } else {
      console.log('Data inserted into MySQL');
      res.status(200).send('Data inserted successfully');
    }
  });
});

// Example endpoint to fetch properties
app.get('/api/properties', (req, res) => {
  const query = 'SELECT title, description, status, type, price, area, location,images FROM property';
  db.query(query, (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.json(results);
      }
  });
});

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });


// POST endpoint to handle contact form submission
app.post('/postproperty', upload.array('images', 10), (req, res) => {

  console.log('Incoming request:', req.body);
  console.log('Incoming files:', req.files);

  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const { name, email, phone, role, title, description, status, type, price, area, location } = req.body;
  const images = req.files.map(file => file.filename);

  // Insert into MySQL
  const sql = 'INSERT INTO property (name, email, phone, role, title, description, status, type, price, area, location, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [name, email, phone, role, title, description, status, type, price, area, location, JSON.stringify(images)];
  
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting into MySQL:', err);
      return res.status(500).send('Error saving to database');
    } else {
      console.log('Data inserted into MySQL');
      return res.status(200).send('Data inserted successfully');
    }
  });
});


// // POST endpoint to handle contact form submission
// app.post('/postproperty', (req, res) => {
//   const { name, email, phone, role, title, description, status, type, price, area, location } = req.body;

//   // Insert into MySQL
//   const sql = 'INSERT INTO property (name, email, phone, role, title, description, status, type, price, area, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
//   const values = [name, email, phone, role, title, description, status, type, price, area, location];
  
//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error(err);
//       console.log(values);
//       res.status(500).send('Error saving to database');
//     } else {
//       console.log('Data inserted into MySQL');
//       res.status(200).send('Data inserted successfully');
//     }
//   });
// });


// Start server
const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
