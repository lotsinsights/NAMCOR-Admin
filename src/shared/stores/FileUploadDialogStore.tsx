import { makeAutoObservable } from "mobx";

class FileUploadDialogStore {
  // Show/Hide the upload dialog
  private fileUploadDialogState: boolean = false;

  // The selected files.
  files: string[] = [""];

  // Firebase collection and Document to which we're uploading..
  private collectionName = "";
  private docID = "";

  constructor() {
    makeAutoObservable(this);
  }

  // Show the dialog
  openFileUploadDialog() {
    this.fileUploadDialogState = true;
  }
  // Hide the dialog
  closeFileUploadDialog() {
    this.fileUploadDialogState = false;
  }

  // Return state of the dialog, is it Shown/Hidden.
  get isFileUploadDialogOpen() {
    return this.fileUploadDialogState;
  }

  // Set Firebase collection name
  setCollectionName(collectionName: string) {
    this.collectionName = collectionName;
  }
  // Set Firebase document id
  setDocumentID(docID: string) {
    this.docID = docID;
  }

  // Read Firebase collection name
  get getCollectionName() {
    return this.collectionName;
  }
  // Read Firebase document id
  get getDocumentID() {
    return this.docID;
  }
}

const MobxFileUploadDialogStore = new FileUploadDialogStore();

export default MobxFileUploadDialogStore;
