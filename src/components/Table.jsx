// import * as React from 'react';
// import { DataGridPro } from '@mui/x-data-grid-pro';
// import { Checkbox, MenuItem, Select, TextField, Box } from '@mui/material';

// function updateRowPosition(initialIndex, newIndex, rows) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const rowsClone = [...rows];
//       const row = rowsClone.splice(initialIndex, 1)[0];
//       rowsClone.splice(newIndex, 0, row);
//       resolve(rowsClone);
//     }, Math.random() * 500 + 100); // simulate network latency
//   });
// }

// export default function Table() {
//   // Data for modules named "Module 1" through "Module 5"
//   const rows = [
//     { id: 1, module: 'Module 1', linkCategory: '-', containerName: '', assign: true, write: false },
//     { id: 2, module: 'Module 2', linkCategory: '-', containerName: '', assign: false, write: true },
//     { id: 3, module: 'Module 3', linkCategory: '-', containerName: '', assign: false, write: false },
//     { id: 4, module: 'Module 4', linkCategory: '-', containerName: '', assign: true, write: false },
//     { id: 5, module: 'Module 5', linkCategory: '-', containerName: '', assign: false, write: false },
//   ];

//   const [tableRows, setTableRows] = React.useState(rows);
//   const [loading, setLoading] = React.useState(false);

//   const handleRowOrderChange = async (params) => {
//     setLoading(true);
//     const newRows = await updateRowPosition(params.oldIndex, params.targetIndex, tableRows);
//     setTableRows(newRows);
//     setLoading(false);
//   };

//   const columns = [
//     { field: 'module', headerName: 
//     <TextField
//       label="Search Module"
//       variant="outlined"
//       size="small"
//       onChange={(e) => setSearchQuery(e.target.value)}
//     />, width: 150 },
//     { field: 'linkCategory', headerName: 'Link Category', width: 200 },
//     {
//       field: 'containerName',
//       headerName: 'Container Name',
//       width: 150,
//       renderCell: (params) => (
//         <Select
//           value={params.value || ''}
//           displayEmpty
//           variant="standard"
//           sx={{ width: '100%' }}
//         >
//           <MenuItem value="">Select</MenuItem>
//           <MenuItem value="Master">Master</MenuItem>
//           <MenuItem value="Report">Report</MenuItem>
//           <MenuItem value="Transition">Transition</MenuItem>
//         </Select>
//       ),
//     },
//     {
//       field: 'assign',
//       headerName: 'Assign',
//       width: 100,
//       renderCell: (params) => <Checkbox checked={params.value || false} />,
//     },
//     {
//       field: 'write',
//       headerName: 'Write',
//       width: 100,
//       renderCell: (params) => <Checkbox checked={params.value || false} />,
//     },
//   ];

//   return (
//     <div style={{ height: 600, width: '100%' }}>
//       {/* Search Bar
//       <Box display="flex" justifyContent="flex-start" mb={2}>
//         <TextField
//           placeholder="Search..."
//           variant="outlined"
//           size="small"
//           sx={{ width: '300px' }}
//         />
//       </Box> */}

//       {/* Data Grid Table */}
//       <DataGridPro
//         columns={columns}
//         rows={tableRows}
//         rowReordering
//         onRowOrderChange={handleRowOrderChange}
//         loading={loading}
//         sx={{
//           '& .MuiDataGrid-columnHeaderTitle': {
//             fontWeight: 'bold',
//             color: '#7A7A7A',
//           },
//           '& .MuiDataGrid-cell': {
//             padding: '10px',
//           },
//           '& .MuiCheckbox-root': {
//             color: '#4CAF50',
//           },
//           '& .MuiSelect-standard': {
//             fontSize: '14px',
//           },
//         }}
//       />
//     </div>
//   );
// }
// App.js

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SortableList from '../components/SortableList';

function Table() {
  const items = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'];

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <SortableList items={items} />
      </>
    </DndProvider>
  );
}

export default Table;
