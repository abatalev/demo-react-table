import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import QueueTable from "./tables/QueueTable";

const AppRoutes = () => {
    return (
        <Switch>
          <Route exact path="/table" component={ QueueTable } />
          <Redirect to="/" />
        </Switch>
    );
}

export default AppRoutes;