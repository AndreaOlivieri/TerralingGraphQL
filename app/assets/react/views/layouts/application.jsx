import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

export default class Application extends React.Component {

  render() {

    return (~
      .
        #header.navbar.navbar-fixed-top.navbar-inverse(role="navigation")
        .container
          .navbar-header
            %button.navbar-toggle(dataToggle="collapse" dataTarget="#terraling-navbar-collapse")
              %span.sr-only Toggle navigation
              %span.icon-bar
              %span.icon-bar
              %span.icon-bar
            %a.navbar-brand.logo-darker.logo-font.brand-bigger(href="/") TerraLing
          #terraling-navbar-collapse.collapse.navbar-collapse
            %ul.nav.navbar-nav
              {this._group_nav_bar()}
            %ul.nav.navbar-nav.pull-right.user-nav
              {this._status_bar()}
            %ul
        #main.container
          #messages
            .alert.alert-danger.hidden
            .alert.alert-success.hidden
          {this.props.children}
        #footer
          %p
            \&copy; 2013 terraling.com, Version: {this.props.version}
            %br/
            10 Washington Place, New York, NY 10003 .
            All Rights Reserved
    ~);
  }

  _group_nav_bar(){
    // = render :partial => 'layouts/group_nav_bar' unless Settings.in_preview
    return (~
      .
    ~)
  }

  _status_bar(){
    // = render :partial => 'layouts/status_bar'

    return (~
      .
    ~)
  }

};