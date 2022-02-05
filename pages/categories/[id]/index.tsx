import type { NextPage } from "next";
import Head from "next/head";
import MainContant from "../../../components/Content/Content";
import Layout from "../../../components/Layout/Layout";
import { InferGetStaticPropsType } from "next";
import { categorie, product } from "../../../interfaces/products_data";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/departments`);
  const Departments_data = await res.json();
  const Departments: categorie[] = Departments_data.data;
  const ids = Departments.map((department) => department.department_id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoriesres = await fetch(
    `${process.env.API_URL}/api/v1/departments`
  );
  let categorie_products: product[] | [] = [];
  let currentCategorie = "";
  if (context.params) {
    if (typeof context.params.id == "string") {
      currentCategorie = context.params.id;
    }
    const categorie_products_res = await fetch(
      `${process.env.API_URL}/api/v1/departments/${context.params.id}`
    );
    const categorie_products_data = await categorie_products_res.json();
    categorie_products = await categorie_products_data.data;
  } else {
    categorie_products = [];
  }
  const categoriesdata = await categoriesres.json();

  const categories: Array<categorie> = await categoriesdata.data;
  return {
    props: {
      categories,
      categorie_products,
      currentCategorie,
    },
  };
};

const CategoryPage: NextPage = ({
  categories,
  categorie_products,
  currentCategorie,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>{categorie_products[0].product_department}</title>
        <meta
          name="description"
          content={`${categorie_products[0].product_department} products page`}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout
        showSide={true}
        categories={categories}
        currentCategorie={currentCategorie}
      >
        <MainContant data={categorie_products} />
      </Layout>
    </div>
  );
};

export default CategoryPage;
