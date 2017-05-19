import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

Meteor.methods({
  sendEmail:function(message){
    check(message, Object);

    Meteor.defer(() => {
      Email.send({
        to: 'Ivan Baena <ivan.baena04@gmail.com>',
        from: `${message.name} ${message.email}`,
        subject: `${message.name} sent a message!`,
        text: message.message,
      });
    });
  }
});
