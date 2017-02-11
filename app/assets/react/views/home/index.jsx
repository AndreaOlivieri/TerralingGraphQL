import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import Application from '../layouts/application';

class HomeComponent extends React.Component {

  componentDidMount() {
  }

  render() {
    console.log(this.props.data);
    return (
      <Application data={this.props.data}>
        {this._page_content()}
      </Application>
    );
  }

  _page_content() {
    if (this.props.data.in_preview) {
      document.title = "Preview";
      return this._preview_page();
    } else {
      document.title = "Home";
      let imgId = Math.floor((Math.random() * 11) + 1);
      return this._home_page(imgId);
    }
  }

  _preview_page() {
    return (~
      .
        %h2 Terraling
        %br/
        %div Coming soon, an advanced linguistics search engine from the New York University Computer Science department.
        %br/
        %div
          Send us an email at {<Link to="mailto:support@terraling.com">support@terraling.com</Link>} for more information.
    ~)
  }

  _home_page(imgId) {
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
                        %i.fa.fa-square.fa-stack-2x.yellow
                        %i.fa.fa-database.fa-stack-1x.fa-inverse
                    .caption
                      %p.lead
                        Terraling is built to host your own dataset and let you start discover new insight from your linguistic dataset!
                .col-md-4
                  %div
                    .text-center
                      %span.fa-stack.fa-8x
                        %i.fa.fa-square.fa-stack-2x.blue
                        %i.fa.fa-slideshare.fa-stack-1x.fa-inverse
                    .caption
                      %p.lead
                        Collaborate with experts to expand and study your dataset. Or simply partecipate to an existing group!
                .col-md-4
                  %div
                    .text-center
                      %span.fa-stack.fa-8x
                        %i.fa.fa-square.fa-stack-2x.red
                        %i.fa.fa-search.fa-stack-1x.fa-inverse
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
                Visit the list of {<Link to="groups">public groups</Link>} to begin searching.
                {<Link to="users/sign_up">Sign up for an account</Link>} to get access more groups and search features.
              %p.lead
                Terraling is the next generation of the {<Link to="http://linguisticexplorer.org/">Linguistic Explorer</Link>} project. The linguistic leads have been Chris Collins, Hilda Koopman and Richard Kayne.
                The principal developers of the original site (SSWL) were Sangeeta Vishwanath, Hiral Rajani, and Jillian
                Kozyra.
                The principal developers of this site have been:
              .row
                .container
                  {this._developer_rows(3)}
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

  _developer_rows(columns) {
    let _this = this;
    let devs = [
      {name: "Dennis Shasha", img: "hat_dev", role: "System Architect", link: "#"},
      {name: "Ross Kaffenberger", img: "cool_dev", role: "", link: "#"},
      {name: "Alex Lobascio (Bosh)", img: "cool_dev", role: "", link: "#"},
      {name: "Marco Liberati", img: "cool_dev", role: "", link: "#"},
      {name: "Oleg Grishin", img: "dev", role: "", link: "#"},
      {name: "Lingliang Zhang", img: "dev", role: "", link: "#"},
      {name: "Hannan Butt", img: "dev", role: "", link: "#"},
      {name: "Andrea Olivieri", img: "coolest_dev", role: "", link: "http://www.andrea-olivieri.com"}
    ];
    let devs_slices = this._array_slices(devs, columns);

    return devs_slices.map(function(devs_row, row_index) {
      let devs_row_html = devs_row.map(function(dev, column_index) {
        let dev_key = "dev_"+row_index+"_"+column_index;
        return _this._developer(dev, dev_key);
      });


      return (~
        .row(key={"developer_row_"+row_index})
          {devs_row_html}
      ~);
    });
  }

  _developer(dev, dev_key) {
    let role;
    if (dev.role.length) {
      role = (~
        %p.small(style={{marginTop: '-20px'}}) ({dev.role})
      ~)
    }
    let classImage = "col-md-offset-4 img-circle about-img "+dev.img+"_img";
    return (~
      .col-md-4.text-center(key={dev_key})
        %a.developer(href={dev.link})
          .(class={classImage})
          %p.lead {dev.name}
          {role}
    ~);
  }

  _array_slices(a, size) {
    var arrays = [];

    while (a.length > 0)
      arrays.push(a.splice(0, size));

    return arrays;
  }

};

var HomeContainer = Relay.createContainer(HomeComponent, {
  initialVariables: {
    group_id: null
  },
  fragments: {
    data: () => Relay.QL`
      fragment on Data {
        in_preview
        version
        all_groups {
          id
          name
        }
        group(group_id: $group_id) {
          name
          category_name
          ling0_name
          ling1_name
          depth_maximum
          property_name
          category_name
        }
        user {
          name
          access_level
          memberships {
            level
            group {
              id
              name
            }
          }
        }
      }
    `
  }
});

function homePrepareParams(params, {location}){
  const { group_id } = location.query;
  return {
    group_id: group_id || null
  };
}

export {HomeContainer, homePrepareParams}