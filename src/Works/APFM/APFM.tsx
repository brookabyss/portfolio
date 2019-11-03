import * as React from 'react';
import researchImg from '../../Assets/research.png';
import PLHImg from '../../Assets/PLH.png';
import peopleImg from '../../Assets/hero-apfm.png';
import SEMImg from '../../Assets/SEM.png';
import * as strings from '../../Common/app.strings.json'
import {ContactCard} from '../../Common/Contact'
import { useParams, Switch, Route, match, useRouteMatch, Link } from 'react-router-dom';
import { Research } from './Research/Research';
import { SEM } from './SEM/SEM';
import { ProjectLightHouse } from './ProjectLightHouse/ProjectLightHouse';

export const APFM = ()=>{
    const match = useRouteMatch();
    const content =  !!match? 
    <Switch>
        <Route path={`${match.path}/:APFMId`}>
            {<APFMSubComponents/>}
        </Route>
        <Route path={match.path}>
            {<APFMContent/>}
        </Route>
    </Switch>: <></>
    return (
        <div className="APFM">         
            {content}          
        </div>
    )
}

const APFMContent = ()=>{
    const listItem3 = strings.Works.APFM.ul.l3.split("//n");
    return (
        <div className="container-fluid"> 
               
            <div className=" container title" >{strings.Works.APFM.Title}</div>
            <span className={"container commonSubTitle"} >{strings.Works.APFM.projectOverview}</span>
            <p className={"container"} >{strings.Works.APFM.p1}</p>
            <div className="container-fluid">
            <img className="peopleImg" src={peopleImg} alt="people image"/>
            </div>
            <span className={"container commonSubTitle"} >{strings.Works.APFM.approachTitle}</span>
            <p className={"container"} >{strings.Works.APFM.approach}</p>
           
            <div className="container-min">
                <span className={"quote"} >{strings.Works.APFM.quote}</span>
                <p className="name">{strings.Works.APFM.name}</p>
            </div>
            
            <div className="container">
            <span className={"commonSubTitle"} >{strings.Works.APFM.strategyTitle}</span>
            <span className={"subTitle"} >{strings.Works.APFM.strategySubTitle}</span>
            <ul>
                <li className="text">{strings.Works.APFM.ul.l1}</li>
                <li className="text">{strings.Works.APFM.ul.l2}</li>
                <li className="text">{listItem3[0]}{"-"}{listItem3[1]}</li>
                <li className="text">{strings.Works.APFM.ul.l4}</li>
                <li className="text">{strings.Works.APFM.ul.l5}</li>         
            </ul>
            </div>
           
            <Card/>
    </div>
    )
}

const APFMSubComponents = ()=>{
    let content;
    let { APFMId } = useParams();
    switch(APFMId){
        case "research":
          content = <Research/>
          break
        case "SEM":
            content=  <SEM/>
            break;
        case "PLH":
          content= <ProjectLightHouse/>
          break;
        default:
          content = <></>
      }
      return content;
}

const Card =()=>{
    return (
        <div className="container cards">
            <div className="card">
            <Link style={{ textDecoration:"none"}}to="/works/APFM/research">
                <img className="cardImg" src={researchImg} alt="research card image"/>
                <div>
                    <h3>{strings.Works.APFM.researchCardTitle}</h3>
                    <h6>{strings.Works.APFM.researchCardText}</h6>
                    <span>{strings.Works.APFM.viewMore}</span>
                </div>
            </Link>
            </div>
            <div className="card">
            <Link style={{ textDecoration:"none"}} to="/works/APFM/SEM">
                <img className="cardImg" src={SEMImg} alt="SEM card image"/>
                <div>
                    <h3>{strings.Works.APFM.semCardTitle}</h3>
                    <h6 >{strings.Works.APFM.semCardText}</h6>
                    <span>{strings.Works.APFM.viewMore}</span>
                </div>
            </Link>
            </div>
            <div className="card">
            <Link style={{ textDecoration:"none"}}to="/works/APFM/PLH">
                <img className="cardImg" src={PLHImg} alt="Project light house card image"/>
                <div className="cardText">
                    <h3>{strings.Works.APFM.phlCardTitle}</h3>
                    <h6>{strings.Works.APFM.phlCardText}</h6>
                    <span>{strings.Works.APFM.viewMore}</span>
                </div>
            </Link>
            </div>
        </div>
    )
}