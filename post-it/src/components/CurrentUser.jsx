import React from 'react';
import { signOut } from '../firebase';

const CurrentUser = ({ displayName, email, children }) => {
  return (
    <section>
      <div>
        <div>
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
};

export default CurrentUser;