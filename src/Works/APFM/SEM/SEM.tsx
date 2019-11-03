import * as React from 'react';
import { getCommonStyles } from '../../../Common/common.styles';
import profileImg from '../Assets/profile.png';
import designProcess from '../Assets/designProcess.png';
import * as strings from '../../../Common/app.strings.json'
import {ContactCard} from '../../../Common/Contact'
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom';
import { General } from './General/General';
import { Veteran } from './Veteran/Veteran';
import { NearMe } from './NearMe/NearMe';

export const SEM = ()=>{
    const styles = getCommonStyles();
    const match = useRouteMatch();
    const content =  !!match? 
    <Switch>
        <Route path={`${match.path}/:SEMid`}>
            {<SEMSubComponents/>}
        </Route>
        <Route path={match.path}>
            {"SEM exact"}
        </Route>
    </Switch>: <></>
    return (
        <div className="about">
            
            {content}
            {/* <img style={styles.profileImg} className="profileImg" src={profileImg} alt="profile image"/>
            <div className="title" style={styles.title}>{strings.About.Title}</div>
            <div className={"container"} style={styles.subTitle}>{subTitle[0]+",\n"+subTitle[1]}</div>
            <p className={"container"} >{strings.About.p1}</p>
            <p className={"container"} >{strings.About.p2}</p>
            <div className={"container container60"}>
                <span className={"container designPrincipleTitle"} >{strings.About.designPricipleTitle}</span>
                <span className={"container designPrinciple"} >{strings.About.designPrinciple}</span>
            </div>
            <p className={"container"} >{strings.About.p3}</p>
            <span className={"container designProcessTitle"} >{strings.About.designProcessTitle}</span>
            <img className="designProcess" src={designProcess} alt="design process sketch image"/>
            <ContactCard/> */}
        </div>
    )
}

const SEMSubComponents = ()=>{
    let content;
    let { SEMid } = useParams();
    switch(SEMid){
        case "general":
          content = <General/>
          break
        case "verteran":
            content=  <Veteran/>
            break;
        case "nearMe":
          content= <NearMe/>
          break;
        default:
          content = <></>
      }
      return content;
}