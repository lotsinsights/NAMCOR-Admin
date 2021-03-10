import { makeAutoObservable } from "mobx";

class ActiveSalesAccordionStore {
  activeStage: string | false = "requests";

  constructor() {
    makeAutoObservable(this);
  }

  setActiveStage(stage: string | false) {
    this.activeStage = stage;
  }

  get getActiveStage() {
    return this.activeStage;
  }
}

const MobxActiveSalesAccordionStore = new ActiveSalesAccordionStore();

export default MobxActiveSalesAccordionStore;
