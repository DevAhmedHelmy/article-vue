import Home from "@/pages/admin/Home";
import indexProduct from "@/pages/admin/products/index";
import editProduct from "@/pages/admin/products/edit";
import createProduct from "@/pages/admin/products/create";
export default [
  {
    path: "/admin/test",
    name: "adminTest",
    components: {
      adminPages: Home,
    },
  },
  {
    path: "/admin/products",
    name: "all-products",
    components: {
      adminPages: indexProduct,
    },
  },
  {
    path: "/admin/products/create",
    name: "create-products",
    components: {
      adminPages: createProduct,
    },
  },
  {
    path: "/admin/products/edit/:id",
    name: "edit-products",
    components: {
      adminPages: editProduct,
    },
  },
  {
    path: "/admin/products/delete/:id",
    name: "delete-products",
  },
];
