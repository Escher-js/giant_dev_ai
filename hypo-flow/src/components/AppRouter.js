import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateRepository from './components/CreateRepository';
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
            <Switch>
                <Route exact path="/" component={CreateRepository} />
                <Route path="/repositories" component={RepositoryList} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
