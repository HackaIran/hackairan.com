import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './routes/App'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
