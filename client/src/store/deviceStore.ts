import { makeAutoObservable } from "mobx";
import { IBrand, IDevice, IType } from "../types/deviceTypes";


class Device{
  constructor(){
      makeAutoObservable(this);
  }
  //main states
  types: IType[] = []

  brands: IBrand[] = [];

  devices: IDevice[] = [];

  //"selected states"
  selectedType?: IType;

  selectedBrand?: IBrand;

 // device?: IDevice;
  //for pagination
  page: number = 1;
  total_count: number = 0;
  limit: number = 3;

  //setters
  setTypes(types: IType[]): void{
    this.types = types;
  }
  setBrands(brands: IBrand []): void{
    this.brands = brands;
  }    
  setDevices(devices: IDevice []): void{
    this.devices = devices;
  }    
  setSelectedType(selectedType: IType){
    this.setPage(1);
    this.selectedType = selectedType;
  }
  setSelectedBrand(selectedBrand: IBrand){
    this.setPage(1);
    this.selectedBrand = selectedBrand;
  }
  setDevice(device: IDevice){
    this.devices.push(device)
  }
  setPage(page: number){
    this.page = page;
  }
  setTotalCount(total_count: number){
    this.total_count = total_count;
  }
  setLimit(limit: number){
    this.limit = limit;
  }
  //getters
  get getTypes(): IType[]{
    return this.types;
  }
  get getBrands(): IBrand[]{
    return this.brands;
  } 
  get getDevices(): IDevice[]{
    return this.devices;
  } 
  get getSelectedType(): IType | undefined{
    return this.selectedType;
  }
  get getSelectedBrand(): IBrand | undefined{
    return this.selectedBrand;
  }
  get getPage(): number{
    return this.page;
  }
  get getTotalCount(): number{
    return this.total_count;
  }
  get getLimit(): number{
    return this.limit;
  }
}

export default new Device();