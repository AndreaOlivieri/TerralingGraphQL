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
            \&copy; 2013 terraling.com, Version: {this.props.data.version}
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
                  {this.props.data.viewer.groups.length}
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
    let group = this.props.data.group;

    if (group) {
      user_icon = this._user_icon_by_group_jsx(group);
      user_icon_path = this._group_membership_path_if_any(group);
    } else {
      user_icon = this._user_icon_jsx();
    }

    return (~
      %a.compact(href={user_icon_path})
        %p(style={{marginBottom: '0'}})
          {this.props.data.viewer.name}
        {user_icon}
    ~)
  }

  _user_icon_by_group_jsx(group){
    if(this._is_user_an_admin()) {
      return (~
        .col-md-.nav-status
          Site Admin
      ~)
    } else if (this._is_user_admin_of(group)) {
      return (~
        .col-md-.nav-status
          %i.fa.fa-group
            Group Admin
      ~)
    } else if (this._is_user_member_of(group)) {
      if (this._is_user_expert_of(group)) {
        return (~
          .col-md-.nav-status
            %i.fa.fa-certificate
            Expert
        ~)
      } else {
        return (~
          .col-md-.nav-status
            %i.fa.fa-user
            Member
        ~)
      }
    }
    return;
  }

  _user_icon_jsx(){
    if (this._is_user_an_admin()) {
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
    if (this._is_user_a_member_of(group)) {
      return "/groups/"+group.id+"/membership/"+this.props.data.viewer.memberships[0].id;
    } else {
      return "/groups/"+group.id+"/memberships";
    }
  }

  _is_user_a_member_of(group){
    return this.props.data.viewer.groups.some(function(element, index, array) {
      return group.id == element.id;
    })
  }

  _user_signed_in(){
    return true;
  }

  _is_user_member_of(group){
    return true;
  }

  _is_user_expert_of(group){
    return true;
  }

  _is_user_admin_of(group){
    return false;
  }

  _is_user_an_admin(){
    return this.props.data.viewer.memberships.level == "admin"
  }

};