import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/repositories');
                setRepositories(response.data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>リポジトリ一覧</h1>
            {repositories.map((repo) => (
                <div key={repo.id}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RepositoryList;