-- repositories table
CREATE TABLE IF NOT EXISTS repositories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  owner_id INTEGER
);

-- hypotheses table
CREATE TABLE IF NOT EXISTS hypotheses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) NOT NULL DEFAULT 'Open',
  repository_id INTEGER REFERENCES repositories(id),
  creator_id INTEGER
);

-- contributions table
CREATE TABLE IF NOT EXISTS contributions (
  id SERIAL PRIMARY KEY,
  description TEXT,
  type VARCHAR(50) NOT NULL,
  hypothesis_id INTEGER REFERENCES hypotheses(id),
  contributor_id INTEGER
);
