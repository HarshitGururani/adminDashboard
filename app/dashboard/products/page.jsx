import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import { fetchProducts } from "@/app/library/data";
import { deleteProduct } from "@/app/library/actions";

const ProductsPage = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page) || 1;
  const q = searchParams?.q || "";
  const { products, count } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a product..."} />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt={product.title}
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{new Date(product.createdAt).toDateString()}</td>{" "}
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" value={product.id} name="id" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
