const express = require('express');
const router = express.Router();

// Import the controller(s) for repositories
const repositoriesController = require('../controllers/repositoriesController');

// Define the routes for repositories
router.get('/', repositoriesController.getAll);
router.get('/:id', repositoriesController.getById);
router.post('/', repositoriesController.create);
router.put('/:id', repositoriesController.update);
router.delete('/:id', repositoriesController.delete);

module.exports = router;
