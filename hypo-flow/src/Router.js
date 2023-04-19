import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CreateRepositoryForm from './components/CreateRepositoryForm';
import RepositoryList from './components/RepositoryList';

const AppRouter = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">リポジトリ作成</Link>
                    </li>
                    <li>
                        <Link to="/repositories">リポジトリ一覧</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<CreateRepositoryForm />} />
                <Route path="/repositories" element={<RepositoryList />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
