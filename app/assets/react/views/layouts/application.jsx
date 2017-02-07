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
              {this._group_nav_bar_jsx()}
              {this._status_bar_jsx()}
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

  // = render :partial => 'layouts/group_nav_bar' unless Settings.in_preview
  _group_nav_bar_jsx(){
    return (~
      %ul.nav.navbar-nav
    ~)
  }









  // = render :partial => 'layouts/status_bar'
  _status_bar_jsx(){
    if (this._user_signed_in()) {
      return (~
        %ul.nav.navbar-nav.pull-right.user-nav
          %li#userInfo.pull-right.dropdown.black-dropdown
            {this._dropdown_jsx()}
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
      return (~
        %ul.nav.navbar-nav.pull-right.user-nav
          %li.pull-right.buttons
            %a#sign_in.btn.btn-default(href="/users/sign_in")
              Sign in
      ~)
    }
  }

  _dropdown_jsx(){
    let user_icon;
    let user_icon_path = '';
    let group = this.props.group;

    if (group) {
      user_icon = this._user_icon_by_group_jsx(group);
      user_icon_path = this._group_membership_path_if_any(group);
    } else {
      user_icon = this._user_icon_jsx();
    }

    return (~
      %a.compact(href={user_icon_path})
        %p(style={{marginBottom: '0'}})
          {this._current_user()["name"]}
        {user_icon}
    ~)
  }

  _user_icon_by_group_jsx(group){
    if(this._current_user()["admin"]){
      return (~
        .col-md-.nav-status
          Site Admin
      ~)
    } else if (this._current_user_administrated_groups(group)) {
      return (~
        .col-md-.nav-status
          %i.fa.fa-group
            Group Admin
      ~)
    } else if (this._current_user_member_of(group)) {
      let icon_expert;
      if (this._current_user_is_expert(group)) {
        icon_expert = (~
          .
            %i.fa.fa-certificate
            Expert
        ~)
      } else {
        icon_expert = (~
          .
            %i.fa.fa-user
            Member
        ~)
      }
      return (~
        .col-md-.nav-status
          {icon_expert}
      ~)
    }
  }

  _user_icon_jsx(){
    if (this._current_user()["admin"]) {
      return (~
        .col-md-.nav-status
          Site Admin
      ~)
    } else {
      return (~
        .
          %i.fa.fa-user
          Member
      ~)
    }
  }

  _group_membership_path_if_any(group){
    // membership = @group.membership_for(current_user)
    // membership.present? ? group_membership_path(@group, membership) : group_memberships_path(@group)
    return "#"
  }

  _user_signed_in(){
    return true;
  }

  _current_user_member_of(group){
    return true;
  }

  _current_user_administrated_groups(group){
    return false;
  }

  _current_user_is_expert(group){
    return true;
  }

  _current_user() {
    return {
      name: "Andrea",
      admin: false,
      memberships: {
        size: 5
      },
      groups: [1,2]
    }
  }

};