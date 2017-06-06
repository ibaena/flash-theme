import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      message: {
        name:'',
        email:'',
        message:''
      }
    };
  }

  showForm() {
    $('#hand-icon, .mobile-hand').on('click', function() {
        $('.oc-form').css({
          'visibility':'visible',
          'opacity':'1',
          'transition':'all .3s ease-in-out',
          'top':'50%'
        });
    });
  }
  hideForm() {
    $('#exit-form, mobile-exit').on('click', function() {
      $('.oc-form').css({
        'visibility':'hidden',
        'opacity':'0',
        'transition':'all .3s ease-in-out',
        'top':'30%'
      });
    })
  }
  submitForm() {
    this.state = {message:{
      name:this.refs.f_name.value,
      email:this.refs.email.value,
      message:this.refs.comment.value
    }};

      Meteor.call('sendEmail', this.state.message, (error) => {
        let name = this.state.message.name;
        let email = this.state.message.email;
        let message = this.state.message.message;

          if (name === '') {
          Bert.alert('Enter a valid name please!', 'danger');
        } else if(email === ''){
          Bert.alert('Enter a valid email please!', 'danger');
        }else if(message === ''){
          Bert.alert('Enter a valid message please!', 'danger');
        }
        else if(error){
          Bert.alert(error.reason, 'danger');
        }else {
          //this.contactForm.reset();
          Bert.alert('Message sent!', 'success');
          $('.oc-form').css({
            'visibility':'hidden',
            'opacity':'0',
            'transition':'all .3s ease-in-out'
          });
          this.setState({
            message: {
              name:'',
              email:'',
              message:''
            }
          });
          this.refs.email.value = '';
          this.refs.f_name.value = '';
          this.refs.comment.value = '';
        }
      });
  }
  componentDidMount() {
    this.showForm();
    this.hideForm();
    //this.submitForm();
  }
  render() {
    return (
      <form className="form-horizontal oc-form">
        <div className="form-header">
          <p>Have an idea, and want to get started let send us a quick message and we will be in touch.</p>
        </div>
        <div id="exit-form" className="mobile-exit"><i className="fa fa-times" aria-hidden="true"></i></div>
        <div className="name-group form-group">
          <div className="col-sm-12">
            <input ref="f_name" className="form-control" placeholder="Name" required/>
          </div>
        </div>
        <div className="name-group form-group">
          <div className="col-sm-12">
            <input ref="email" className="form-control" placeholder="Email" required/>
          </div>
        </div>
        <div className="name-group form-group">
          <div className="col-sm-12">
            <textarea ref="comment" className="form-control oc-message"></textarea>
          </div>
        </div>
        <div className="name-group form-group">
          <div  className="oc-form-btn" onClick={this.submitForm.bind(this)}>
            Submit!
          </div>
        </div>
      </form>
    )
  }
}

export default ContactForm;
