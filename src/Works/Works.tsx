import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import * as React from 'react';

export const Works=()=> {
    let match = useRouteMatch();
    let content = !!match?(<div>
        <h2>Works</h2>
  
        <ul>
          <li>   
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:workId`}>
            <Work />
          </Route>
          <Route path={match.path}>
            <h3>Please select a work item.</h3>
          </Route>
        </Switch>
      </div>):<></>
  
    return (
        content
    );
  }
  
  export const  Work= () =>{
    let { workId } = useParams();
    return <h3>Requested work ID: {workId}</h3>;
  }
