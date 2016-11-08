Collections = new Mongo.Collection("collections");

const Schemas = {}

Schemas.Collections = new SimpleSchema({
  "name": {
    type: String,
    label: "Collection Name"
  },
  "description": {
    type: String,
    label: "Description"
  },
  "url": {
    type: String,
    label: "the short url for your collections",
  },
  "links": {
    type: [String],
    label: "Links",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  },
  "createdAt": {
    type: Date,
    label: "Date Created At",
    autoValue: function(){
      if(this.isInsert){
        return new Date
      }
    }
  },
  "createdBy": {
    type: String,
    label: "Owner",
    autoValue: function(){
      if(this.isInsert){
        return this.userId
      }
    }
  }
})

Collections.attachSchema(Schemas.Collections)

export default Collections