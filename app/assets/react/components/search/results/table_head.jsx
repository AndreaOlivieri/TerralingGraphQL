import React from 'react';
import Relay from 'react-relay';

export default class TableHead extends React.Component {

  render() {
    return (
      <thead>
        <tr>{this._create_header(this.props.header)}</tr>
      </thead>
    )
  }

  _create_header(row){
    return row.map(function(value, i) {
      let val_key = row[0]+"#"+i;
      return <th key={val_key}>{value}</th>
    })
  }
}