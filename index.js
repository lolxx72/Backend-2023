class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Se deben completar todos los campos requeridos");
      return;
    }
    if (this.products.some((p) => p.code === product.code)) {
      console.log(`Ya existe un producto con el código ${product.code}.`);
      return;
    }

    product.id = this.generateProductId();
    this.products.push(product);
    console.log(`Producto agregado: ${product.title}`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log("Error: Producto no encontrado.");
    }
  }

  generateProductId() {
    return this.products.length + 1;
  }
}

const productManager = new ProductManager();

console.log("getProducts inicial:", productManager.getProducts());

productManager.addProduct({
  title: "Producto 1",
  description: "Descripción del producto 1",
  price: 12500,
  thumbnail: "Sin imagen",
  code: "Producto1",
  stock: 16,
  id: null,
});

productManager.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 2",
  price: 4500,
  thumbnail: "Sin imagen",
  code: "Producto2",
  stock: 19,
  id: null,
});

productManager.addProduct({
  title: "Producto 3",
  description: "Descripción del producto 3",
  price: 2670,
  thumbnail: "Sin imagen",
  code: "Producto3",
  stock: 28,
  id: null,
});

console.log(
  "getProducts después de agregar un producto:",
  productManager.getProducts()
);

productManager.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 2",
  price: 4500,
  thumbnail: "Sin imagen",
  code: "Producto2",
  stock: 15,
  id: null,
});

const productById = productManager.getProductById(2);
console.log("Producto por ID:", productById);

const nonExistentProduct = productManager.getProductById(10);
