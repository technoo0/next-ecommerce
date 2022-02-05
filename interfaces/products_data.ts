export interface categorie {
  department_name: string;
  department_id: string;
  department_numProducts: number;
}
export interface product {
  product_image_sm: string;
  product_image_md: string;
  product_image_lg: string;
  _id: string;
  product_type: string;
  product_name: string;
  product_description: string;
  product_department: string;
  product_departmentId: string;
  product_stock: number;
  product_color: string;
  product_price: number;
  product_material: string;
  product_ratings: number;
  product_sales: number;
}
