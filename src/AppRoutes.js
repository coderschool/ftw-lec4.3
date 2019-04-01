import React from 'react'
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Candidate from './Candidate';

const TEST_DATA = [
  {id: 1, name: "charles", skill: 3, experience: 13},
  {id: 2, name: "tuan", skill: 7, experience: 2},
  {id: 10, name: "bill gates", skill: 8, experience: 30}
]

const getData = id => TEST_DATA.find(d => d.id == id);

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/candidates/:id" render={props => <Candidate getData={id => getData(id)} {...props} />}/>
    </Switch>
  )
}

export default AppRoutes
