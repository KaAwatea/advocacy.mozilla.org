var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Signup = require(`../../components/encrypt-signup.jsx`);
var CTA = require(`../../components/cta.jsx`);
var Icon = require(`../../components/footer-icon.jsx`);
var ShareThisNow = require(`../../components/encrypt-share-this-now`);
var EncryptHeader = require(`../../components/encrypt-header`);
var EncryptVideo = require(`../../components/encrypt-video.jsx`);

module.exports = React.createClass({
  getInitialState: function() {
    return {
      didSignup: false
    };
  },
  hideForm: function() {
    this.setState({
      formIsVisible: false
    });
  },
  userDidSignup: function() {
    this.setState({
      didSignup: true
    });
    this.hideForm();
    console.log('userDidSignup');
  },
  render: function() {
    return (
      <div className="encrypt v3">
        <EncryptHeader />
        <main className="page">
          <div className="videoSection">
            <EncryptVideo />
            {!this.state.didSignup ? <Signup onSubmission={this.userDidSignup} ref="signup" className="encrypt-signup">
              <CTA
                HrClassName="cta-hr"
                headerClassName="cta-header"
                textClassName="cta-text"
                header="Join Mozilla"
                text="For more resources and videos about encryption and other topics essential to protecting the Web, signup for email updates from Mozilla."
              />
            </Signup> : `Thank you`}
          </div>
          <ShareThisNow/>
        </main>
        <Footer>
          <Icon><div className="social-circle"><i className="fa fa-medium"></i></div>Join the Conversation</Icon>
        </Footer>
      </div>
    );
  }
});
