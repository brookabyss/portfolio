import * as React from 'react';
import { getCommonStyles } from '../../Common/common.styles';
import researchImg from '../../Assets/research.png';
import PLHImg from '../../Assets/PLH.png';
import peopleImg from '../../Assets/people.png';
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

const APFMContent = ()=>{
    const quote = strings.Works.APFM.quote.split("//n");
    const listItem3 = strings.Works.APFM.ul.l3.split("//n");
    return (
        <div className="APFM">    
            <div className="title" >{strings.Works.APFM.Title}</div>
            <span className={"container commonSubTitle"} >{strings.Works.APFM.projectOverview}</span>
            <p className={"container"} >{strings.Works.APFM.p1}</p>
            <img className="peopleImg" src={peopleImg} alt="people image"/>
            <span className={"container commonSubTitle"} >{strings.Works.APFM.myRoleTitle}</span>
            <p className={"container"} >{strings.Works.APFM.myRole}</p>
            <span className={"container commonSubTitle"} >{strings.Works.APFM.approachTitle}</span>
            <p className={"container"} >{strings.Works.APFM.approach}</p>
            <span className={"container quote"} >{quote[0]}</span>
            <span className={"quote"} >{"-"+quote[1]}</span>
            <span className={"container commonSubTitle"} >{strings.Works.APFM.strategyTitle}</span>
            <span className={"subTitle"} >{strings.Works.APFM.strategySubTitle}</span>
            <ul>
                <li className="text">{strings.Works.APFM.ul.l1}</li>
                <li className="text">{strings.Works.APFM.ul.l2}</li>
                <li className="text">{listItem3[0]}{"-"}{listItem3[1]}</li>
                <li className="text">{strings.Works.APFM.ul.l4}</li>
                <li className="text">{strings.Works.APFM.ul.l5}</li>         
            </ul>
            <Card/>
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
            <Link to="/works/APFM/research">
                <img className="cardImg" src={researchImg} alt="research card image"/>
                <div className="cardText">
                    <span className={"commonSubTitle"} >{strings.Works.APFM.researchCardTitle}</span>
                    <span className={"subTitle"} >{strings.Works.APFM.researchCardText}</span>
                    <span>{strings.Works.APFM.viewMore}</span>
                </div>
            </Link>
            </div>
            <div className="card">
            <Link to="/works/APFM/SEM">
                <img className="cardImg" src={SEMImg} alt="SEM card image"/>
                <div className="cardText">
                    <span className={"commonSubTitle"} >{strings.Works.APFM.semCardTitle}</span>
                    <span className={"subTitle"} >{strings.Works.APFM.semCardText}</span>
                    <span>{strings.Works.APFM.viewMore}</span>
                </div>
            </Link>
            </div>
            <div className="card">
            <Link to="/works/APFM/PLH">
                <img className="cardImg" src={PLHImg} alt="Project light house card image"/>
                <div className="cardText">
                    <span className={"commonSubTitle"} >{strings.Works.APFM.phlCardTitle}</span>
                    <span className={"subTitle"} >{strings.Works.APFM.phlCardText}</span>
                    <span>{strings.Works.APFM.viewMore}</span>
                </div>
            </Link>
            </div>
        </div>
    )
}