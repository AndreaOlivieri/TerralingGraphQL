import React from 'react';
import Relay from 'react-relay';

export default class TableBody extends React.Component {

  render() {
    return (
      <tbody>
        {this._create_rows(this.props.rows)}
      </tbody>
    )
  }

  _create_rows(rows){
    let rowClass = this.props.rowClass;
    let _this = this;

    return rows.map(function(row, i) {
      let val_key = rowClass+"#"+i;
      return <tr className={rowClass} key={val_key}>{_this._create_cells(row)}</tr>
    })
  }

  _create_cells(row){
    return row.map(function(value, i) {
      let val_key = row[0]+"#"+i;
      return <td key={val_key}>{value}</td>
    })
  }
}