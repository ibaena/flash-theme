import { Meteor } from 'meteor/meteor';
import '/imports/startup/server';

Meteor.startup(() => {
    process.env.MAIL_URL = "smtp://postmaster@sandbox91e87e03349d4dd380f810dcf21ad519.mailgun.org:40bd2c83309f200f732105951a0a2b6d@smtp.mailgun.org:587";
  // code to run on server at startup
});
