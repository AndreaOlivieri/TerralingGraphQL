import React from 'react';
import Relay from 'react-relay';
import Table from './results/table.jsx';

class CompareSearch extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    console.log(this.props)
    let commons, differents;
    let compare_search = this.props.search.compare;

    if (compare_search.commons.rows.length > 0 ) {
      commons =
        <div>
          <div id="tableCommonHeader">
            <h3 className="red_grad">Properties in Common:</h3>
          </div>
          <Table result={compare_search.commons}
                 tableID="tableCommon"
                 rowClass="search_common_result"/>
        </div>
    }
    if (compare_search.differents.rows.length > 0 ) {
      differents =
        <div>
          <div id="tableNotCommonHeader">
            <h3 className="red_grad">Properties not in Common:</h3>
          </div>
          <Table result={compare_search.differents}
                 tableID="tableNotCommon"
                 rowClass="search_diff_result"/>
        </div>
    }

    return (
      <div>
        {commons}
        {differents}
      </div>
    )
  }

}

var CompareSearchContainer = Relay.createContainer(CompareSearch, {
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
        compare(search_id: $search_id, user_id: $user_id, group_id: $group_id, query: $query, result_groups: $result_groups, offset: $offset) {
          commons {
            header
            rows
          }
          differents{
            header
            rows
          }
        }
      }
    `
  }
});


class CompareSearchRoute extends Relay.Route {
  static routeName = 'CompareSearch';
  static queries = {
    search: (Component, variables) => Relay.QL`
      query CompareSearch {
        search {
          ${Component.getFragment('search', variables)}
        }
      }
    `,
  };
}

export {CompareSearchContainer, CompareSearchRoute};