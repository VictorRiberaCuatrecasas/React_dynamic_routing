import React from 'react';
import {Link} from "react-router-dom"

function Nav() {
  return (
   <nav>
      <Link className="links" to="/">
          <h3>Logo</h3>
      </Link>
       <ul>
           <Link className="links" to="/achievements">
                <li>Achievements</li>
           </Link>
           <Link className="links" to="/shop">
                <li>Shop</li>
           </Link>
           
       </ul>

   </nav>
  );
}

export default Nav;
