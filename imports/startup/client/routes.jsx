import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';


import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import BlankLayout from '/imports/ui/layouts/BlankLayout.jsx';

import SignUpPage from '/imports/ui/pages/SignUp.jsx';
import LoginPage from '/imports/ui/pages/login.jsx';

FlowRouter.route('/',{
  action: function(){
    mount(MainLayout)
  }
})
FlowRouter.route('/:name',{
  action: function(){
    mount(MainLayout)
  }
})
FlowRouter.route('/signup',{
  action: function(){
    mount(BlankLayout, {content: <SignUpPage/>})
  }
})
FlowRouter.route('/login',{
  action: function(){
    mount(BlankLayout, {content: <LoginPage/>})
  }
})
