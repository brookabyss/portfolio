import * as React from 'react';
import { getCommonStyles } from '../Common/common.styles';
import profileImg from '../Assets/profile.png';
import designProcess from '../Assets/designProcess.png';
import * as strings from '../Common/app.strings.json'
import {ContactCard} from '../Common/Contact'

export const About = ()=>{
    const styles = getCommonStyles();
  
    return (
        <div className="about">
            <div className="container-70">
                <img style={styles.profileImg} className="profileImg" src={profileImg} alt="profile image"/>
                <h1 className="gradient">{strings.About.Title}</h1>
                <p>{strings.About.p1}</p>
                <p>{strings.About.p2}</p>
            </div>

            <div className="container-min">
                <p>{strings.About.designPricipleTitle}</p>
                <h1>{strings.About.designPrinciple}</h1> 
            </div>

            <div className="container-70">
                <p>{strings.About.p3}</p>
                <span className={"container designProcessTitle"} >{strings.About.designProcessTitle}</span>
            </div>
            <div>
                <img className="cover" src={designProcess} alt="design process sketch image"/>
                </div>
                <ContactCard/>
        </div>
    )
}