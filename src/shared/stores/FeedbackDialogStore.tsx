import { makeAutoObservable } from "mobx";

class FeedbackDialogStore {
  private feedbackDialogState: boolean = false;
  feedback: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  openFeedbackDialog() {
    this.feedbackDialogState = true;
  }
  closeFeedbackDialog() {
    this.feedbackDialogState = false;
  }

  get isFeedbackDialogOpen() {
    return this.feedbackDialogState;
  }
}

const MobxFeedbackDialogStore = new FeedbackDialogStore();

export default MobxFeedbackDialogStore;
