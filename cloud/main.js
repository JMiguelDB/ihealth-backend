Parse.Cloud.define('hello', function(req, res) {
    res.success('Hi');
  });

// With Legacy Backbone callbacks
Parse.Push.send({
  where: {
    deviceType: 'android'
  },
  data: {
    alert: 'Test',
    badge: 1,
    sound: 'default'
  }
}, {
  useMasterKey: true,
  success: function() {
    // Push sent!
    console.log("Push sent");
  },
  error: function(error) {
    // There was a problem :(
    console.log("Error sending push");
  }
});