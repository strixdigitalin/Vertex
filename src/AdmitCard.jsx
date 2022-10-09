import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AdmitCard = (props) => {
    let links=[{
        name:'Sample Papers',
        url:'/sample-paper'
    },
    {
        name:'Zone',
        url:'/zones'
    },
    {
        name:'Test Centers',
        url:'/test-centers'
    }];

    useEffect(() => {
        props.setFlag(!props.flag);
    }, []);

    return (
        <div>
            <div className="comm">
                <div className="comm1">
                    <div className="comm11">
                        <h4>Quick Links</h4>
                    </div>
                    <div className="comm12">
                        {links.map((e,index)=>{
                            return (
                                <div key={index} className="comm121">
                                    <NavLink to={e.url}>{e.name}</NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="comm2">
                    <h4>ADMIT CARD</h4>
                    <h1 className="display-1">Coming Soon</h1>
                </div>
            </div>
        </div>
    )
}

export default AdmitCard
