import React, { useState } from 'react';
import DynamicTable from '../@core/components/Table/Table';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { AnyObject } from 'antd/es/_util/type';

interface OrderData {
  key: string;
  name: string;
  quantity: number;
  city: string;
}

const columns: (ColumnGroupType<AnyObject> | ColumnType<AnyObject>)[] = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  { title: 'City', dataIndex: 'city', key: 'city' },
];

const TableExample: React.FC = () => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const data: OrderData[] = [
    { key: '1', name: 'Acetaminophen', quantity: 3, city: 'Bengaluru' },
    { key: '2', name: 'Azithromycin', quantity: 25, city: 'Sirsi' },
    { key: '3', name: 'Ibuprofen', quantity: 100, city: 'Mangalore' },
  ];

  const handleRowClick = (record: OrderData) => {
    setSelectedName(record.name);
    console.log('Selected name::::',record.name )
  };

  return (
    <div className='container mt-10'>
      <h1 className='my-5'>Order List</h1>
      <DynamicTable data={data} columns={columns} onRowClick={handleRowClick} />
      {selectedName && <p>Selected Name: {selectedName}</p>}
    </div>
  );
};

export default TableExample;
