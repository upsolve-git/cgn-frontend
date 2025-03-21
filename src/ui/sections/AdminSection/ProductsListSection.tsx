import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { Product } from '../../../interfaces/Product';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const columnDefs: ColDef<Product>[] = [
    { field: 'product_id' as keyof Product, headerName: 'ID' },
    { field: 'name' as keyof Product, headerName: 'Name' },
    { field: 'product_type' as keyof Product, headerName: 'Type' },
    { field: 'description' as keyof Product, headerName: 'Description' },
    { field: 'price' as keyof Product, headerName: 'Price' },
    { field: 'discounted_price' as keyof Product, headerName: 'Discounted Price' },
    { field: 'discounted_business_price' as keyof Product, headerName: 'Business Price' },
    { field: 'inventory_count' as keyof Product, headerName: 'Inventory' },
    { 
      field: 'categories' as keyof Product, 
      headerName: 'Categories', 
      valueFormatter: (params: any) =>
        Array.isArray(params.value) ? params.value.join(', ') : params.value 
    },
    {
      headerName: 'Color Range',
      valueGetter: (params) => {
        if (!params.data) return 'N/A';
        const colors = params.data.colors;
        if (Array.isArray(colors) && colors.length > 0) {
          const numericColors = colors
            .map((color: any) => Number(color.color_name))
            .filter((num: number) => !isNaN(num));
          if (numericColors.length === 0) {
            return 'N/A';
          }
          const min = Math.min(...numericColors);
          const max = Math.max(...numericColors);
          return `${min}-${max}`;
        }
        return 'N/A';
      }
    }
  ];

  return (
    <div className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={products}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default ProductsList;