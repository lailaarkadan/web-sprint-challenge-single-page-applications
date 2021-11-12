import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Form from "./Components/Form";

const App = () => {
  return (
    <Router>
    <div className="App">
      <nav>
        <div className="header">Lambda Eats</div>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order Pizza</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Form
    
          />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}
export default App;
