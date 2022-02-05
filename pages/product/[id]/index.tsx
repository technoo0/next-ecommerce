import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../../components/Layout/Layout";
import ProductLayout from "../../../components/Content/ProductPage/Layout";
import { categorie, product } from "../../../interfaces/products_data";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  const categoriesres = await fetch(
    `${process.env.API_URL}/api/v1/departments`
  );
  const categoriesdata = await categoriesres.json();

  const categories: Array<categorie> = await categoriesdata.data;
  var product_info: product;
  if (context.params) {
    const product_res = await fetch(
      `${process.env.API_URL}/api/v1/products/${context.params.id}`
    );
    const product_data = await product_res.json();
    product_info = await product_data.data;
  } else {
    product_info = {
      product_image_sm: "/gadgets/mobilephone_150.png",
      product_image_md: "/gadgets/mobilephone_300.png",
      product_image_lg: "/gadgets/mobilephone_600.png",
      _id: "0",
      product_type: "ERROR",
      product_name: "ERROR",
      product_department: "ERROR",
      product_departmentId: "ERROR",
      product_description: "ERROR",
      product_stock: 0,
      product_color: "ERROR",
      product_price: 0,
      product_material: "ERROR",
      product_ratings: 0,
      product_sales: 0,
    };
  }
  return {
    props: {
      categories,
      product_info,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/products?limit=500`);
  const Productsdata = await res.json();
  const Products: product[] = Productsdata.data;
  const ids = Products.map((product) => product._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};
interface PropsTypes {
  categories: Array<categorie>;
  product_info: product;
}

const ProductPage: NextPage<PropsTypes> = ({ categories, product_info }) => {
  return (
    <div>
      <Head>
        <title>{product_info.product_name}</title>
        <meta name="description" content={product_info.product_description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout
        showSide={true}
        categories={categories}
        currentCategorie={product_info.product_departmentId}
      >
        <ProductLayout product_data={product_info} />
      </Layout>
    </div>
  );
};

export default ProductPage;
