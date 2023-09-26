import React from 'react';
import { Table, TableProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { AnyObject } from 'antd/es/_util/type';

interface DynamicTableProps<T> {
  data: AnyObject[];
  columns: ColumnsType<AnyObject> | undefined;
  onRowClick: (record: T) => void;
}

function DynamicTable<T>({ data, columns, onRowClick }: DynamicTableProps<T>) {
  return <Table dataSource={data} columns={columns} onRow={(record) => ({
    onClick: () => onRowClick(record),
  })} />;
}

export default DynamicTable;
