import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/Bins';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../imports/router';

Meteor.startup(() => {
  ReactDOM.render(AppRouter, document.getElementById('app'));
});