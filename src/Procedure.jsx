import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Procedure = (props) => {
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
                                    <NavLink to={e.url}>{e.name}</NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="comm2">
                    <h4>PROCEDURE FOR REGISTRATION</h4>
                    <p>HOW TO APPLY: -APPLY ONLINE ON www.vegre.in
                        GET OFFLINE REGISTRATION FORM FROM OUR CORPORATE OFFICE</p>
                </div>
            </div>
        </div>
    )
}

export default Procedure
