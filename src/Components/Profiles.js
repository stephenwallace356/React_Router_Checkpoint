import HardCode from './HardCode'
import { Switch, Route, useRouteMatch, NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import { findRenderedComponentWithType } from 'react-dom/test-utils';

// function Data(){
//     const [friend, setFriend] = useState();
//     }

//     useEffect(() => {
//         HardCode. 
//     }, [firstName])
// }

// well i wasted a lot of time


const Profiles = () => {
    let match = useRouteMatch()
    console.log(HardCode)
  return (
    <div>
        <ul>
          <Link to={`${match.url}/Willie`}>Willie</Link>
        </ul>


    </div>
    );
};

export default Profiles;

     /* <h2>Friends on your Profile</h2>
         {(HardCode.map((contactProfiles, index)=>(
            <ul>
                <NavLink className="NavLink" to={`${match.url}/${index}`}>
                    {contactProfiles[index].firstName}
                </NavLink>
            </ul>
        )))}
        <Switch>
            <Route path={`${match.HardCode.contactProfiles}`}>
                profile of a person to be impleimented
            </Route>
        </Switch> */