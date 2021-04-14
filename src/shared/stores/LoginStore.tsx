import { makeAutoObservable } from "mobx";

class LoginDialogStore {
  // Show/Hide the login dialog
  private loginDialogState: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Show the dialog
  openLoginDialog() {
    this.loginDialogState = true;
  }
  // Hide the dialog
  closeLoginDialog() {
    this.loginDialogState = false;
  }

  // Return state of the dialog, is it Shown/Hidden.
  get isLoginDialogOpen() {
    return this.loginDialogState;
  }
}

const MobxLoginDialogStore = new LoginDialogStore();

export default MobxLoginDialogStore;
