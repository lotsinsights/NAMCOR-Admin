import { makeAutoObservable } from "mobx";
import Product from "../interfaces/Product";

class ProductStore {
  open: boolean = false;
  content: Product = {
    id: "32cfdaradwewf2",
    name: "Petrol",
    description:
      "It is derived during fractional distillation process and has a translucent liquid form. It's not used in its crude form. Different additives are added like ethanol to use it as fuel for passenger vehicles.",
    price: 12.5,
    thumbnail:
      "https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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

  // Content functions
  setSingleProductContent(content: Product) {
    this.content = content;
  }

  get getContent() {
    return this.content;
  }
}

const MobxProductStore = new ProductStore();

export default MobxProductStore;
