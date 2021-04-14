import { makeAutoObservable } from "mobx";

class TrackingDialogStore {
  private trackingDialogState: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  openTrackingDialog() {
    this.trackingDialogState = true;
  }
  closeTrackingDialog() {
    this.trackingDialogState = false;
  }

  get isTrackingDialogOpen() {
    return this.trackingDialogState;
  }
}

const MobxTrackingDialogStore = new TrackingDialogStore();

export default MobxTrackingDialogStore;
