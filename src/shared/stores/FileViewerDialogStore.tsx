import { makeAutoObservable } from "mobx";

class FileViewerDialogStore {
  isFileDialogOpen: boolean = false;
  file: string = "";
  fileName: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  openFileViewerDialog() {
    this.isFileDialogOpen = true;
  }
  closeFileViewerDialog() {
    this.isFileDialogOpen = false;
  }

  setFile(file: string) {
    this.file = file;
  }

  setFileName(filename: string) {
    this.fileName = filename;
  }

  get getFile() {
    return this.file;
  }

  get getFileName() {
    return this.fileName;
  }

  get isFileViewerDialogOpen() {
    return this.isFileDialogOpen;
  }
}

const MobxFileViewerDialogStore = new FileViewerDialogStore();

export default MobxFileViewerDialogStore;
