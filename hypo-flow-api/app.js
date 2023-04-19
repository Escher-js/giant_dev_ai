const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());

const repositoriesRouter = require('./routes/repositories');
// const hypothesesRouter = require('./routes/hypotheses');
// const contributionsRouter = require('./routes/contributions');

// Register the routers as API endpoints
app.use('/api/repositories', repositoriesRouter);
// app.use('/api/hypotheses', hypothesesRouter);
// app.use('/api/contributions', contributionsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/repositories', async (req, res) => {
    const { title, description } = req.body;

    try {
        await db.query('INSERT INTO repositories (title, description) VALUES ($1, $2)', [title, description]);
        res.status(201).json({ message: 'Repository created successfully!' });
    } catch (err) {
        console.error('Error in app.post:', err);
        res.status(500).json({ message: 'An error occurred while creating the repository.' });
    }
});