import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetchRepositories();
    }, []);

    const fetchRepositories = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/repositories`);
            const data = await response.json();
            setRepositories(data);
        } catch (err) {
            console.error(err);
        }
        console.log(repositories)
    };

    return (
        <div>
            <h2>リポジトリ一覧</h2>
            <ul>
                {repositories.map((repository) => (
                    <li key={repository.id}>{repository.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RepositoryList;