import { makeAutoObservable } from "mobx";

class TabsStore {
  selectedTab = "Dashboard";

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedTab(selectedTab: string) {
    this.selectedTab = selectedTab;
  }
}

const tabstore = TabsStore;
export default tabstore;
