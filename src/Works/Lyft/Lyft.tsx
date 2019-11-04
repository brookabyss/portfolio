import * as React from 'react';
import { getCommonStyles } from '../../Common/common.styles';
import profileImg from '../Assets/profile.png';
import watch from '../../Assets/watch.png';
import * as strings from '../../Common/app.strings.json'
import {ContactCard} from '../../Common/Contact'

import { PageTitle, SubHeader, SectionHeader, Paragraph } from '../../Common/common';

export const Lyft = ()=>{
    return (
        <div className="lyft">
            <PageTitle text={strings.Works.Lyft.header}/>
            <SubHeader text={strings.Works.Lyft.title}/>
            <SectionHeader text={strings.Works.Lyft.projectOverviewTitle}/>
            <Paragraph text={strings.Works.Lyft.projectOverview}/>
            <img className="lyftWatch" src={watch} alt="lyft watch image"/>
            <SectionHeader text={strings.Works.Lyft.problemTitle}/>
            <Paragraph text={strings.Works.Lyft.problem.p1}/>
            <Paragraph text={strings.Works.Lyft.problem.p2}/>
            <SectionHeader text={strings.Works.Lyft.designProcessTitle1}/>
            <Paragraph text={strings.Works.Lyft.designProcess1.p1}/>
            {/* <img className="designProcess" src={designIteration} alt="design process image"/> */}
        </div>
    )
}