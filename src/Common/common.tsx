import * as React from 'react';

interface IParagraph{
    text:string;
    className?: string;
}


export const Paragraph = (props:IParagraph)=>{
    const className = !!props.className? "container" + props.className: "container";
    return (
        <p className={className} >{props.text}</p>
    )
}

export const SectionHeader = (props:IParagraph)=>{
    const className = !!props.className? "container commonSubTitle" + props.className: "container commonSubTitle";
    return (
        <span className={className} >{props.text}</span>
    )
}

export const PageTitle = (props:IParagraph)=>{
    const className = !!props.className? "container title" + props.className: "container title";
    return (
        <div className={className} >{props.text}</div>
    )
}

export const SubHeader = (props:IParagraph)=>{
    const className = !!props.className? "container subHeader" + props.className: "container subHeader";
    return (
        <h2 className={className} >{props.text}</h2>
    )
}