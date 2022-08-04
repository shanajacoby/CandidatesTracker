import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout  from './components/Layout';
import Home  from './Pages/Home';
import Confirmed from './Pages/Confirmed';
import Pending  from './Pages/Pending';
import Refused  from './Pages/Refused';
import ViewDetails  from './Pages/ViewDetails';
import {CandidateContextComponent} from './CandidateContext';
import AddCandidate from './Pages/AddCandidate'


import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <CandidateContextComponent>
      <Layout>
        <Route exact path='/' component={Home} />
          <Route path='/addcandidate' component={AddCandidate} />
            <Route path='/confirmed' component={Confirmed}/>
            <Route path='/pending' component={Pending} />
            <Route path='/refused' component={Refused} />
            <Route path='/viewdetails/:id' component={ViewDetails} />
       </Layout>
       </CandidateContextComponent>
    );
  }
}
