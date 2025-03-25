import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { Product } from '../../../interfaces/Product';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useColorInventoryOverlay } from '../../../utils/hooks/useAdminPage';


interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {

  let {
    colorCounts,
    showColorCountsOverlay, setShowColorCountsOverlay,
    handleRowClick
  } = useColorInventoryOverlay()

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
    <div>
      <div className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
        <AgGridReact
          rowData={products}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          onRowClicked={handleRowClick}
        />
      </div>

      {showColorCountsOverlay && (
        <div className="fixed inset-0 backdrop-blur-lg z-30 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-3/4">
            <div className="text-right">
              <button onClick={() => setShowColorCountsOverlay(false)}>X</button>
            </div>
            <h3 className="text-lg font-bold mb-4">Color Counts</h3>
            <div className="ag-theme-quartz" style={{ height: 400, width: '100%' }}>
              <AgGridReact
                rowData={colorCounts}
                columnDefs={[
                  { field: 'color_name', headerName: 'Color' },
                  { field: 'shade_name', headerName: 'Shade' },
                  { field: 'color_count', headerName: 'Count' },
                ]}
                pagination={true}
                paginationPageSize={5}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
