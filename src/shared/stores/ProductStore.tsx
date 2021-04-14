import { makeAutoObservable } from "mobx";
import Product from "../interfaces/Product";

class ProductStore {
  open: boolean = false;
  openDeleteConfirmation: boolean = false;
  isEditProduct: boolean = false;
  content: Product = {
    id: "32cfdaradwewf2",
    productName: "Petrol",
    productAvailabilityStatus: "Available",
    productDescription:
      "It is derived during fractional distillation process and has a translucent liquid form. It's not used in its crude form. Different additives are added like ethanol to use it as fuel for passenger vehicles.",
    productPrice: 12.5,
    // thumbnail:
    //   "https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setOpen() {
    this.open = true;
  }
  setClose() {
    this.open = false;
  }

  openDeleteConfirmationDialog() {
    this.openDeleteConfirmation = true;
  }
  closeDeleteConfirmationDialog() {
    this.openDeleteConfirmation = false;
  }

  // Content functions
  setSingleProductContent(content: Product) {
    this.content = content;
  }

  // Set edit product to false
  setIsEditProduct() {
    this.isEditProduct = true;
  }

  // Clear edit product to false
  clearIsEditProduct() {
    this.isEditProduct = false;
  }

  get getContent() {
    return this.content;
  }
}

const MobxProductStore = new ProductStore();

export default MobxProductStore;
