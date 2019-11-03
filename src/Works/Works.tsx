import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import * as React from 'react';
import { APFM } from "./APFM/APFM";
import { Lyft } from "./Lyft/Lyft";
import { FAS } from "./FASLawFirm/FAS";

export const Works=()=> {
    let match = useRouteMatch();
    let content = !!match?(<div>
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
    switch(workId){
      case "APFM":
        return <APFM/>
      case "Lyft":
          return <Lyft/>
      case "FAS":
        return <FAS/>
      default:
        return <></>
    }
  }
