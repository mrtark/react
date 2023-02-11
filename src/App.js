import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import RegisterList from './component/register crud page/RegisterList';
import RegisterCreate from './component/register crud page/RegisterCreate';
import RegisterDetail from './component/register crud page/RegisterDetail';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={RegisterList}></Route>
          <Route path="/register-list" component={RegisterList}></Route>
          <Route path="/register-add/:id" component={RegisterCreate}></Route>
          <Route path="/register-detail/:id" component={RegisterDetail}></Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
