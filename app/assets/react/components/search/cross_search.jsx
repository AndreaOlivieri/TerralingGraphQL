import React from 'react';
import Relay from 'react-relay';
import Table from './results/table.jsx';

class CrossSearch extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    console.log(this.props);
    let cross_search = this.props.search.cross;

    return (
      <div>
        <Table result={cross_search}
               tableID="tableNotCommon"
               rowClass="search_result"/>
      </div>
    )
  }

}

var CrossSearchContainer = Relay.createContainer(CrossSearch, {
  initialVariables: {
    search_id: null,
    user_id: null,
    group_id: null,
    query: null,
    result_groups: null,
    offset: 0
  },
  fragments: {
    search: () => Relay.QL`
      fragment on Search {
        cross(search_id: $search_id, user_id: $user_id, group_id: $group_id, query: $query, result_groups: $result_groups, offset: $offset) {
          header
          rows
        }
      }
    `
  }
});


class CrossSearchRoute extends Relay.Route {
  static routeName = 'CrossSearch';
  static queries = {
    search: (Component, variables) => Relay.QL`
      query CrossSearch {
        search {
          ${Component.getFragment('search', variables)}
        }
      }
    `,
  };
}

export {CrossSearchContainer, CrossSearchRoute};