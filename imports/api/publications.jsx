import {Meteor} from 'meteor/meteor';
import Collections from '/imports/api/collections/collections.jsx';

Meteor.publish('getAllCollections', function(){
  return Collections.find()
})