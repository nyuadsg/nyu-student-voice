if (Posts.find().count() === 0) {
  var now = Date();
  
  // create two users
  var tomId = Meteor.users.insert({
    profile: {name: 'Tom Coleman'}
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: {name: 'Sacha Greif'}
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Thanks!'
  });

  Posts.insert({
    title: 'The Meteor Book',
    commentsCount: 0
  });
  

  Posts.insert({
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/',
    commentsCount: 0
  });

  Posts.insert({
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com',
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com',
    commentsCount: 0
  });
}
