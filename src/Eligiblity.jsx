import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Eligiblity = (props) => {
    let links = [{
        name: 'Sample Papers',
        url: '/sample-paper'
    },
    {
        name: 'Zone',
        url: '/zones'
    },
    {
        name: 'Test Centers',
        url: '/test-centers'
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
                        {links.map((e, index) => {
                            return (
                                <div key={index} className="comm121">
                                    <NavLink to={e.url}>{`>> ${e.name}`}</NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="comm2">
                    <h4>ELIGIBLITY</h4>
                    <p>FOR JEE / NEET ASPIRANTS OF BIHAR,
                        STUDYING IN CLASS 7,8,9,10,11 & 12</p>
                </div>
            </div>
        </div>
    )
}

export default Eligiblity
