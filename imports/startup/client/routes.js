import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/app/app.js';
import '../../ui/screens/faces/faces.js';
import '../../ui/screens/end/end.js';
import '../../ui/screens/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('app', { main: 'faces' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('app', { main: 'App_notFound' });
  },
};
