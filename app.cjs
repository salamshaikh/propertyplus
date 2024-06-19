const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'property'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
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

// POST endpoint to handle contact form submission
app.post('/postproperty', (req, res) => {
  const { name, email, phone, role, title, description, status, type, price, area, location } = req.body;

  // Insert into MySQL
  const sql = 'INSERT INTO property (name, email, phone, role, title, description, status, type, price, area, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [name, email, phone, role, title, description, status, type, price, area, location];
  
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      console.log(values);
      res.status(500).send('Error saving to database');
    } else {
      console.log('Data inserted into MySQL');
      res.status(200).send('Data inserted successfully');
    }
  });
});


// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
