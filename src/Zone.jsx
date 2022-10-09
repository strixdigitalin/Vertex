import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Zone = (props) => {
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
            <div className="comm zone0">
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
                    <h4>IMPORTANT DATES</h4>
                    <table className="table zones table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Zone</th>
                                <th scope="col">District</th>
                                <th scope="col">LAST DATE OF REGISTRATION </th>
                                <th scope="col">TEST DATE</th>
                                <th scope="col">RESULT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Sheohar,EastChamparan,Sitamarhi,Madhubani,Darbhanga,Muzaffarpur,Samastipur,Patna,Hajipur,Ara,Buxar,Kaimur,Rohtas,Arwal,Aurangabad,Jehanabad,Gaya,Nalanda,Nawada,Saran,Begusarai,Godda,Dumka</td>
                                <td>09-12-22</td>
                                <td>11-12-2022</td>
                                <td>05-02-2023</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Gopalganj,Siwan,West Champaran,Supaul,Saharsha,Lakhisarai,Munger,Bhagalpur,Jamui,Banka,Purnea,Katihar,Kishanganj,Madhepura,Supaul,Araria,Khagaria,Patna,Garhwa,Daltonganj</td>
                                <td>27-01-23</td>
                                <td>29-01-2023</td>
                                <td>05-02-2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Zone
