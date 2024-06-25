import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AttendancePage from './pages/AttendancePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/attendance" component={AttendancePage} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
};

export default App;
