import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  MODULE: 'module',
};

const SortableList = ({ items, ifModule }) => {
  const [sortedItems, setSortedItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = sortedItems.filter((item) => {
    const itemString = JSON.stringify(item).toLowerCase();
    return itemString.includes(searchTerm.toLowerCase());
  });
  

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = sortedItems[dragIndex];
    const newSortedItems = [...sortedItems];
    newSortedItems.splice(dragIndex, 1);
    newSortedItems.splice(hoverIndex, 0, draggedItem);
    setSortedItems(newSortedItems);
  };

  const toggleCheckboxAll = (checkboxType) => {
    setSortedItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        children: item.children.map(child => ({
          ...child,
          [checkboxType]: true 
        }))
      }))
    );
  };
  
  
  const toggleCheckboxAllIndividual = (moduleIndex, checkboxType) => {
    setSortedItems(prevItems =>
      prevItems.map((item, idx) => {
        if (idx === moduleIndex) {
          return {
            ...item,
            children: item.children.map((child) => ({
              ...child,
              [checkboxType]: true 
            }))
          };
        }
        return item;
      })
    );
  };

  const toggleCheckbox = (moduleIndex, childIndex, checkboxType) => {
    setSortedItems(prevItems =>
      prevItems.map((item, idx) => {
        if (idx === moduleIndex) {
          return {
            ...item,
            children: item.children.map((child, cIdx) => {
              if (cIdx === childIndex) {
                return {
                  ...child,
                  [checkboxType]: !child[checkboxType]
                };
              }
              return child;
            })
          };
        }
        return item;
      })
    );
  };

  const toggleExpand = (index) => {
    setSortedItems(prevItems =>
      prevItems.map((item, idx) => {
        if (idx === index) {
          return { ...item, isExpanded: !item.isExpanded };
        }
        return item;
      })
    );
  };

  const ModuleItem = ({ item, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.MODULE,
      item: { type: ItemTypes.MODULE, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemTypes.MODULE,
      hover: (draggedItem) => {
        const dragIndex = draggedItem.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveItem(dragIndex, hoverIndex);
        draggedItem.index = hoverIndex;
      },
    });

    return (
      <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className="bg-gray-100 p-2 font-bold border-b border-gray-300 border-r flex items-center">
          <div className='flex-1 border-r border-gray-300'>
            <button onClick={() => toggleExpand(index)} className="text-gray-500 mr-1 text-xs">
              {item.isExpanded ? '▲' : '▼'}
            </button>
            <span>{item.name}</span>
          </div>
          <p className='flex-1 border-r flex justify-center border-gray-300'>-</p>
          <p className='flex-1 border-r flex justify-center border-gray-300'>-</p>
          <input 
            type="checkbox" 
            className='flex-1 border-r border-gray-300'
            checked={item.children.every(child => child.assign)}
            onClick={() => toggleCheckboxAllIndividual(index, 'assign')}
          />
          <input 
            type="checkbox" 
            className='flex-1 border-l border-gray-300'
            checked={item.children.every(child => child.write)}
            onClick={() => toggleCheckboxAllIndividual(index, 'write')}
          />
        </div>
        
        {(ifModule || item.isExpanded) && item.children.map((child, childIndex) => (
          <div 
            key={childIndex} 
            className="flex items-center bg-white p-2 border-b"
          >
            <div className="flex-1 p-1 border-r border-gray-300">{child.name}</div>
            <div className="flex-1 p-1 border-r flex justify-center border-gray-300">{child.category}</div>
            <div className="flex-1 p-1 border-r flex justify-center border-gray-300">
              <select defaultValue={child.container} className='outline-none'>
                <option value="">Select</option>
                <option value="Container 1">Container 1</option>
              </select>
            </div>
            <div className="flex-1 flex justify-center p-1 border-r border-gray-300">
              <input 
                type="checkbox" 
                checked={child.assign} 
                onChange={() => toggleCheckbox(index, childIndex, 'assign')} 
              />
            </div>
            <div className="p-1 flex-1 flex justify-center">
              <input 
                type="checkbox" 
                disabled={!child.assign}
                checked={child.write} 
                onChange={() => toggleCheckbox(index, childIndex, 'write')} 
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mr-[-10px] ml-[-10px]">
      {/* Top Section with Search and Table Headers */}
      <div className="flex border-gray-100 border-t-2 border-b-2 p-2 font-semibold">
        <div className="flex items-center flex-1 border-gray-300">
          <p className="transform scale-x-[-1]">⌕</p>
          <input
            type="text"
            placeholder="Search..."
            className="p-1 bg-inherit border-r outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-1 p-1 flex justify-center border-r border-gray-300">Category</div>
        <div className="flex-1 p-1 border-r flex justify-center  border-gray-300">Container</div>
        <div className="flex-1 p-1 border-r border-gray-300 flex justify-center items-center text-gray-700 font-medium">
          Assign All(
          <button className="p-1 px-0.5 h-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 flex items-center"
            onClick={() => toggleCheckboxAll('assign')} >
            +
          </button> )
        </div>
        <div className="flex-1 flex justify-center items-center">Write</div>
      </div>

      {/* Draggable List */}
      {filteredItems.map((item, index) => (
        <ModuleItem key={item.id} item={item} index={index} />
      ))}
      
      <button 
        className="mt-4 ml-2 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded"
        onClick={() => alert("Form submitted successfully!")}
      >
        Save
      </button>
    </div>
  );
};

export default SortableList;
