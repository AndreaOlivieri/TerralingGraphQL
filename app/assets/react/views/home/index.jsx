import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class ReactComponent extends React.Component {

  render() {

    let imgId = Math.floor((Math.random() * 11) + 1);

    return (~
      .
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
                              %input#resources-search-field.form-control.input-lg(autoComplete={'off'} placeholder={'Loading...'} type={'text'})
        .container
          .row(style={{minHeight: '300px', marginTop: '280px'}})
            .col-md-10.col-md-offset-1
              .row
                .col-md-4
                  %div
                    .text-center
                      %span.fa-stack.fa-8x
                        = //icon "square", '', :class => "fa-stack-2x yellow"
                        = //icon "database", '', :class => "fa-stack-1x fa-inverse"
                    .caption
                      %p.lead
                        Terraling is built to host your own dataset and let you start discover new insight from your linguistic dataset!
                .col-md-4
                  %div
                    .text-center
                      %span.fa-stack.fa-8x
                        = //icon "square", '', :class => "fa-stack-2x blue"
                        = //icon "slideshare", '', :class => "fa-stack-1x fa-inverse"
                    .caption
                      %p.lead
                        Collaborate with experts to expand and study your dataset. Or simply partecipate to an existing group!
                .col-md-4
                  %div
                    .text-center
                      %span.fa-stack.fa-8x
                        = //icon "square", '', :class => "fa-stack-2x red"
                        = //icon "search", '', :class => "fa-stack-1x fa-inverse"
                    .caption
                      %p.lead
                        Do advanced searches within your dataset to discover insight in your data, download or visualize the results!
          #bigImage(style={{minHeight: '400px'}})
            .hero(style={{marginTop: '-20px'}})
              .landing(style={{minHeight: '200px'}})
                .text-center(style={{marginTop: '120px', marginBottom: '120px', padding: '20px'}})
                  %h1(style={{fontSize: '65px'}})
                    Explore the World's Languages
          .container
            .row
              %p.lead
                Terraling is a collection of searchable linguistic databases that allows users to discover which properties (morphological, syntactic, and semantic)
                characterize a language, as well as how these properties relate across languages. This system is designed to be 
                %strong free to the public and open-ended
                \.
                Anyone can use the database to perform queries.
              %p.lead
                Linguistic researchers can put up their own data using the open-ended framework we provide.
                Visit the list of #{link_to "public groups", groups_path} to begin searching.
                \#{link_to 'Sign up for an account', new_user_registration_path} to get access more groups and search features.
              %p.lead
                Terraling is the next generation of the #{link_to "Linguistic Explorer", "http://linguisticexplorer.org/"} project. The linguistic leads have been Chris Collins, Hilda Koopman and Richard Kayne.
                The principal developers of the original site (SSWL) were Sangeeta Vishwanath, Hiral Rajani, and Jillian
                Kozyra.
                The principal developers of this site have been:
              .row
                .container
                  - each_developer_row(3) do |row|
                    .row
                      -row.each do |dev|
                        = render :partial => "contributors", :locals => dev
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