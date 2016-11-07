import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import RenderedMenuItems from '/imports/ui/components/RenderedMenuItems.jsx';
import Collections from '/imports/api/collections/collections.jsx';

export default RenderedMenuItemsContainer = createContainer(({params}) => {
  Meteor.subscribe('getAllCollections')
  return {
    Collections: Collections.find().fetch()
  }
}, RenderedMenuItems)
