import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import {CompareSearchContainer, CompareSearchRoute} from './compare_search';
import {CrossSearchContainer, CrossSearchRoute} from './cross_search';

var isReactEnabled = true;

$(document).ready(function(){
  if($('#search-react').length && isReactEnabled){
    $("#search-form").submit(function(event) {
      event.preventDefault();
      let user = $('#search-react').data("currentUser");
      let group = $('#search-react').data("currentGroup");
      let query = getInputObject('#search-form').search;

      console.log(query);

      let search = getSearch(query, {
        user_id: user && user.user.id,
        group_id: group && group.group.id,
        query: JSON.stringify(query),
      });

      ReactDOM.render(
        <Relay.RootContainer
          Component={search["component"]}
          route={search["route"]}
        />,
        document.getElementById('search-react')
      );
    });
  }
});

function getSearch(query, input) {
  let type = getSearchType(query);
  let component, route;

  console.log("type: "+ type);

  switch(type) {
    case "compare":
      component = CompareSearchContainer;
      route = new CompareSearchRoute(input);
      break;
    case "implication":
      component = null;
      route = null;
      break;
    case "cross":
      component = CrossSearchContainer;
      route = new CrossSearchRoute(input);
      break;
    case "clustering":
      component = null;
      route = null;
      break;
    default:
      console.log("Error");
  }

  return {
    "component": component,
    "route": route,
  };
}

function getSearchType(query) {
  return  (is_compare_search(query)     && "compare")     ||
          (is_implication_search(query) && "implication") ||
          (is_cross_search(query)       && "cross")       ||
          (is_clustering_search(query)  && "clustering");
}

function is_compare_search(query){
  return query.ling_set && Object.values(query.ling_set).some(arrVal => arrVal=="compare");
}

function is_implication_search(query){
  return query.advanced_set && (
            query.advanced_set.impl=="both" ||
            query.advanced_set.impl=="ante" ||
            query.advanced_set.impl=="cons" ||
            query.advanced_set.impl=="double" );
}

function is_cross_search(query){
  return query.property_set && Object.values(query.property_set).some(arrVal => arrVal=="cross");
}

function is_clustering_search(query){
  return query.advanced_set && query.advanced_set.clustering.includes("hamming");
}

function getInputObject(formId){
  let inputObj = {};
  $.each($(formId).serializeArray(), function(i, field) {
      let names = field.name.replace(/\]/g,'').split("[");
      createObject(inputObj, names, field.value);
  });
  return inputObj;
}

function createObject(parent, [firstName, ...others], value){
  if (others.length > 1 || (others.length == 1 && others[0] !== "")) {
    if (parent[firstName] != undefined) {
      createObject(parent[firstName], others, value);
    } else {
      parent[firstName] = createObject({}, others, value);
    }
  } else if (others.length == 1 && others[0] === "") {
    let [secondName] = others;
    if (parent[firstName] != undefined) {
      parent[firstName].push(value);
    } else {
      parent[firstName] = [value];
    }
  } else {
    parent[firstName] = value;
  }

  return parent;
}