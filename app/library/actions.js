"use server";

import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  console.log(username, email, password, address, isAdmin, isActive);

  try {
    connectDb();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectDb();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const updateProduct = async (formData) => {
  const { id, title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectDb();

    const updateFields = {
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/products");
  redirect("/products");
};

export const addProduct = async (formData) => {
  const { title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectDb();
    const newProduct = new Product({
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    });

    await newProduct.save();
  } catch (error) {
    throw new Error("Failed to add product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    throw err;
  }
};