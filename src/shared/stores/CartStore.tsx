import { makeAutoObservable } from "mobx";
import Product from "../interfaces/Product";

class CartStore {
  openPickAddressDialog: boolean = false;
  openInputAddressDialog: boolean = false;
  address: JSX.Element | null = null;
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

  setOpenPickAddressDialog() {
    this.openPickAddressDialog = true;
  }
  setClosePickAddressDialog() {
    this.openPickAddressDialog = false;
  }

  setOpenInputAddressDialog() {
    this.openInputAddressDialog = true;
  }
  setCloseInputAddressDialog() {
    this.openInputAddressDialog = false;
  }

  setAddress(address: JSX.Element) {
    this.address = address;
  }
  get getSelectedAddress() {
    return this.address;
  }

  get getContent() {
    return this.content;
  }
}

const MobxCartStore = new CartStore();

export default MobxCartStore;
