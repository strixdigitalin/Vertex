import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SamplePaper = (props) => {
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
                    <h4>SAMPLE PAPER</h4>
                    <div className="sample">
                        <h2 className="mb-3">VE-GRE Sample Paper</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">S No.</th>
                                    <th scope="col">Class</th>
                                    <th scope="col">Question Paper with Key</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>For Class 7 Students Moving to Class 8 in 2023</td>
                                    <td className="text-warning">Click to download</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>For Class 8 Students Moving to Class 9 in 2023</td>
                                    <td className="text-warning">Click to download</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>For Class 9 Students Moving to Class 10 in 2023</td>
                                    <td className="text-warning">Click to download</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>For Class 10 Students Moving to Class 11 [E] in 2023</td>
                                    <td className="text-warning">Click to download</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>For Class 10 Students Moving to Class 11 [M] in 2023</td>
                                    <td className="text-warning">Click to download</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>For Class 11 Students Moving to Class 12 [E] in 2023</td>
                                    <td className="text-warning">Click to download</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>For Class 11 Students Moving to Class 12 [M] in 2023</td>
                                    <td className="text-warning">Click to download</td>
                                </tr>
                            </tbody>
                        </table>
                        <b className="text-danger mt-5"><em>*Note: Open a page of Coming Soon on click of Click to download.</em></b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SamplePaper
