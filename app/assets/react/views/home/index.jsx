import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class ReactComponent extends React.Component {

  render() {

    let imgId = Math.floor((Math.random() * 11) + 1);

    return (~
      #bigImage
        .hero(style={{marginTop: '-20px'}})
          .landing(id={this._daily_image(imgId)})
            %div(style={{position: 'absolute', bottom: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.8)', padding: '5px'}})
              {this._daily_attribution(imgId)}
            .container
              .home-lead
                #title.text-center(style={{marginBottom: '30px',borderBottom: '0px'}})
                  %h1.logo-font.logo-light Terraling
                .row(style={{width:'80%', margin:'auto', marginBottom: '60px'}})
                  .col-md-12
                    %form.form
                      .row
                        .col-md-12
                          .form-group
                            %input#resources-search-field.form-control.input-lg(autocomplete={'off'} placeholder={'Loading...'} type={'text'})
    ~);
  }

  _daily_image(id) {
    let photos = ["clouds", "words", "birds", "birds-bn", "ancient", "sign", "books", "shakespeare", "words2", "languages"];
    if (id >= photos.length) {
      id = 0;
    }
    return photos[id];
  }

  _daily_attribution(id){
    let photos = [
      {url: "nofrills/10895361", title: "language variety on cadbury&#x27;s choc by nofrills"},
      {url: "silveraquarius/9972360303", title: "Language of the Ancients by JimmyMac210"},
      {url: "davidyuweb/4344917629", title: "Language of The birds with Transamerica of San Francisco by David Yu"},
      {url: "multimaniaco/11409492903", title: "The Language of Birds by Cesar Viteri Ramirez"},
      {url: "curiousexpeditions/1568278214", title: "Closeup on the Linen Book/Mummy Wrappings of the Lost Etruscan Language by Curious Expeditions"},
      {url: "valeriebb/3008977110", title: "Learn sign language at the playground by Valerie Everett"},
      {url: "hindrik/6486016175", title: "focus on language by Hindrik Sijens"},
      {url: "disowned/1158260369", title: "Shakespeare's words"},
      {url: "tuinkabouter/497701876", title: "Words"},
      {url: "jurek_durczak/16235946053", title: "Language"}
    ]
    if (id >= photos.length) {
      id = 0;
    }
    let href = "https://www.flickr.com/photos/"+photos[id]['url'];
    return (<p><Link to={href}>{photos[id]["title"]}, on Flickr</Link> under CC License</p>);
  }

};

export default Relay.createContainer(ReactComponent, {
  fragments: {
    info: () => Relay.QL`
      fragment on Info {
        test
      }
    `
  }
});