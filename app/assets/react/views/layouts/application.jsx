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
              %button.navbar-toggle(data-toggle="collapse" data-target="#terraling-navbar-collapse")
                %span.sr-only Toggle navigation
                %span.icon-bar
                %span.icon-bar
                %span.icon-bar
              %a.navbar-brand.logo-darker.logo-font.brand-bigger(href="/") TerraLing
            #terraling-navbar-collapse.collapse.navbar-collapse
              {this._group_nav_bar()}
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
      %ul.nav.navbar-nav
    ~)
  }

  _status_bar(){
    // = render :partial => 'layouts/status_bar'
    let bar;
    if (this._user_signed_in()) {
      let dropdown;

      debugger;
      if (this.props.group) {
        dropdown = (~
          .true
        ~)
      } else {
        let user_icon;
        if (this._current_user()["admin"]) {
          user_icon = (~
            .col-md-.nav-status
              Site Admin
          ~)
        } else {
          user_icon = (~
            .
              %i.fa.fa-user
              Member
          ~)
        }

        dropdown = (~
          %a.compact(href="")
            %p(style={{marginBottom: '0'}})
              {this._current_user()["name"]}
            {user_icon}
        ~)
      }

      bar = (~
        %ul.nav.navbar-nav.pull-right.user-nav
          %li#userInfo.pull-right.dropdown.black-dropdown
            {dropdown}
          %ul.dropdown-menu(aria-labelledby="dLabel" role="menu")
            %li
              %a(href="/groups/user")
                Groups
                %span.label.label-success.pull-right
                  {this._current_user()["memberships"]["size"]}
            %li
              %a(href="/users/sign_out")
                Sign out
                %i.fa.fa-sign-out.pull-right.fa-15x
      ~)
    } else {
      bar = (~
        %ul.nav.navbar-nav.pull-right.user-nav
          %li.pull-right.buttons
            %a#sign_in.btn.btn-default(href="/users/sign_in")
              Sign in
      ~)
    }


    return bar;
  }

  _user_signed_in(){
    return true;
  }

  _current_user() {
    return {
      name: "Andrea",
      admin: false,
      memberships: {
        size: 5
      }
    }
  }

};