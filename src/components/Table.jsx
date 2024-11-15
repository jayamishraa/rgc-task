import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SortableList from '../components/SortableList';

function Table({ ifModule }) {
  const items = [
    {
      id: 1,
      name: 'Module 1',
      children: [
        { name: 'Manage Locations', category: 'Report', container: '', assign: false, write: false },
        { name: 'View Locations', category: 'Master', container: '', assign: false, write: false },
      ],
    },
    {
      id: 2,
      name: 'Module 2',
      children: [
        { name: 'Manage Cost Centers', category: 'Master', container: '', assign: false, write: false },
        { name: 'View Cost Centers', category: 'Transition', container: '', assign: false, write: false },
      ],
    },
    {
      id: 3,
      name: 'Module 3',
      children: [
        { name: 'Manage Cost Centers', category: 'Master', container: '', assign: false, write: false },
        { name: 'View Cost Centers', category: 'Transition', container: '', assign: false, write: false },
      ],
    },
    {
      id: 4,
      name: 'Module 4',
      children: [
        { name: 'Manage Cost Centers', category: 'Master', container: '', assign: false, write: false },
        { name: 'View Cost Centers', category: 'Transition', container: '', assign: false, write: false },
      ],
    },
    {
      id: 5,
      name: 'Module 5',
      children: [
        { name: 'Manage Cost Centers', category: 'Master', container: '', assign: false, write: false },
        { name: 'View Cost Centers', category: 'Transition', container: '', assign: false, write: false },
      ],
    }
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <SortableList items={items} ifModule={ifModule} />
    </DndProvider>
  );
}

export default Table;
