import React, { useState, useEffect } from 'react';
import { getDevice }  from '../js/framework7-custom.js';
import {
  f7,
  f7ready,
  App,
  View,
} from 'framework7-react';

import capacitorApp from '../js/capacitor-app';
import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {

  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'Vonjy', // App name
      theme: 'auto', // Automatic theme detection
      colors: {
        primary: '#5e5872',
      },
      darkMode: true,


      // App store
      store: store,
      // App routes
      routes: routes,


      // Input settings
      input: {
        scrollIntoViewOnFocus: device.capacitor,
        scrollIntoViewCentered: device.capacitor,
      },
      // Capacitor Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
  };

  f7ready(() => {

    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

    </App>
  );
}
export default MyApp;