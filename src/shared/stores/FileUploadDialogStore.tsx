import { makeAutoObservable } from "mobx";

class FileUploadDialogStore {
  private fileUploadDialogState: boolean = false;
  files: string[] = [""];

  constructor() {
    makeAutoObservable(this);
  }

  openFileUploadDialog() {
    this.fileUploadDialogState = true;
  }
  closeFileUploadDialog() {
    this.fileUploadDialogState = false;
  }

  get isFileUploadDialogOpen() {
    return this.fileUploadDialogState;
  }
}

const MobxFileUploadDialogStore = new FileUploadDialogStore();

export default MobxFileUploadDialogStore;
