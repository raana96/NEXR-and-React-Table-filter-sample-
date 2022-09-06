import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function Table(props) {
  React.useEffect(()=>{
    console.log(">>",props)
  })
  return (
    <div style={{ height: 400, width: '80%',marginRight:"auto",marginLeft:"auto" }}>
      <DataGrid rows={props.data} columns={props.columns} components={{ Toolbar: GridToolbar }} />
    </div>
  );
}


export default Table;
