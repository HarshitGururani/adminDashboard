import { updateProduct } from "@/app/library/actions";
import { fetchProduct } from "@/app/library/data";
import styles from "@/app/ui/dashboard/users/singleUser/SingleUser.module.css";
import Image from "next/image";
const SingleUserPage = async ({ params }) => {
  const { product: product_id } = params;
  const singleProduct = await fetchProduct(product_id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={singleProduct.img || "/noproduct.jpg"}
            alt="user profile"
            fill
            className={styles.userImage}
          />
        </div>
        {singleProduct.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product_id} />
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={singleProduct.title}
          />

          <label>Price</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder={singleProduct.price}
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder={singleProduct.stock}
          />

          <label>Color</label>
          <input type="text" name="color" id="color" placeholder="black" />
          <label>Size</label>
          <textarea type="text" name="size" id="size" placeholder="size" />

          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
            <option value="computers">Computers</option>
          </select>

          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={"10"}
            placeholder={singleProduct.desc}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
export default SingleUserPage;
