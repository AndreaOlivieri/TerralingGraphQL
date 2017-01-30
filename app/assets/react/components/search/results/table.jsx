import React from 'react';
import Relay from 'react-relay';
import TableHead from './table_head.jsx';
import TableBody from './table_body.jsx';

export default class Table extends React.Component {

  render() {
    return (
      <table className="show-table table table-bordered table-striped table-hover" id={this.props.tableID}>
        <TableHead header={this.props.result.header}/>
        <TableBody rows={this.props.result.rows} rowClass={this.props.rowClass}/>
      </table>
    )
  }
}