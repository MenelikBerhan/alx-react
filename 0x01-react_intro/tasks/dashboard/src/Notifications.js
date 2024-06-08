// import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{
          position: 'absolute',
          right: '3rem',
          top: '1.5rem',
          border: 'none',
          padding: 0,
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img
          alt='close notifications icon'
          src={closeIcon}
          width='16px'
        />
      </button>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
