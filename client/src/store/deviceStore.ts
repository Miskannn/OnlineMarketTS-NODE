import { makeAutoObservable } from "mobx";
import { IBrand, IDevice, IType } from "../types/deviceTypes";


class Device{
  constructor(){
      makeAutoObservable(this);
  }
  //states
  types: IType[] = []

  brands: IBrand[] = [];

  devices: IDevice[] = [];
  
  //device?: IDevice;
  selectedType?: IType;
  selectedBrand?: IBrand;
  device?: IDevice;

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
    this.selectedType = selectedType;
  }
  setSelectedBrand(selectedBrand: IBrand){
    this.selectedBrand = selectedBrand;
  }
  setDevice(device: IDevice){
    this.devices.push(device)
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
  
}

export default new Device();