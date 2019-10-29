import * as React from 'react';
import { getCommonStyles } from '../Common/common.styles';
import profileImg from '../Assets/profile.png';
import * as strings from '../Common/app.strings.json'

export const About = ()=>{
    const styles = getCommonStyles();
    const subTitle = strings.About.SubTitle.split(",");
    return (
        <div className="about">
            <img style={styles.profileImg} className="profileImg" src={profileImg} alt="profile image"/>
            <div className="title" style={styles.title}>{strings.About.Title}</div>
            <div style={styles.subTitle}>{subTitle[0]+",\n"+subTitle[1]}</div>
        </div>
    )
}