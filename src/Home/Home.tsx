import * as React from 'react';
import fas from '../Assets/FAS.png'
import apfm from '../Assets/APFM.png'
import lyft from '../Assets/Lyft.png'
import profile from '../Assets/HomeProfile.png'
import * as strings from '../Common/app.strings.json';
import { Link } from 'react-router-dom';
interface IWorkCard{
    title: string;
    description: string;
    link: string;
}
export const Home = ()=>{
    return (
        <div>
        <Profile/>
        <div id="works">
            <div className="workBox">
                <img className="thumbImg" src={apfm} alt="A place for mom thumb nail"/>
                <WorkCard title={strings.Home.uxStrategy} description={strings.Home.apfm} link="/works/APFM"/>
            </div>     
            <div className="workBox"> 
                <WorkCard title={strings.Home.appleWatch} description={strings.Home.lyft} link="/works/Lyft"/>
                <img className="thumbImg" src={lyft} alt="Lyft thumb nail"/>
            </div>
            <div className="workBox">
                <img className="thumbImg" src={fas} alt="FAS Law firm thumb nail"/>
                <WorkCard title={strings.Home.responseDesign} description={strings.Home.fas} link="/works/FAS"/>
            </div>
        </div>
        </div>      
    )
}

const  Profile = ()=>{
    return (      
            <div className="container-fluid"> 
               <img src={profile} alt=""/>
            </div>
    )  
}


const  WorkCard = (props:IWorkCard)=>{
    return (
        <Link  to={props.link} style={{ textDecoration: 'none', padding:"0" }}>
            <div className="workCard"> 
                <div>{props.title}</div>
                <div>{props.description}</div>
                <div className="workCardViewMore">{strings.Common.viewMore}</div>
            </div>
         </Link>
    )  
}