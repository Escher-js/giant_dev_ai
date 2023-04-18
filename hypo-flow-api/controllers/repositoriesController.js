const db = require('../db');



// ... その他の関数 ...

exports.getAll = async (req, res) => {
  // Your code to fetch all repositories from the database
};

exports.getById = async (req, res) => {
  // Your code to fetch a single repository by its ID
};

exports.create = async (req, res) => {
  const { title, description } = req.body;

  try {
    await db.query('INSERT INTO repositories (title, description) VALUES ($1, $2)', [title, description]);
    res.status(201).json({ message: 'Repository created successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while creating the repository.' });
  }
};

exports.update = async (req, res) => {
  // Your code to update an existing repository
};

exports.delete = async (req, res) => {
  // Your code to delete a repository
};
