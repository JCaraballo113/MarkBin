import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../ui/App';
import BinsMain from '../ui/BinsMain';
import BinsList from '../ui/BinsList';

const AppRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={BinsList} />
            <Route path="bins/:binId" component={BinsMain}></Route>
        </Route>
    </Router>
);

export default AppRouter;