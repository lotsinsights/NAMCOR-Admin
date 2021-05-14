import { makeAutoObservable } from "mobx";

class QuoteRequestStore {
  private requestDialogState: boolean = false;
  request: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  openRequestDialog() {
    this.requestDialogState = true;
  }
  closeRequestDialog() {
    this.requestDialogState = false;
  }

  get isRequestDialogOpen() {
    return this.requestDialogState;
  }
}

const MobxQuoteRequestStore = new QuoteRequestStore();

export default MobxQuoteRequestStore;
