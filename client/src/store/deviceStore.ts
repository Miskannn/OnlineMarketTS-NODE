import { makeAutoObservable } from "mobx";
import { IBrand, IDevice, IType } from "../types/deviceTypes";


class Device{
  constructor(){
      makeAutoObservable(this);
  }
  //states
  types: IType[] = [
    {id: 1,name: "Smartphones"},
    {id: 2,name: "Refregerators"},
    {id: 3,name: "Laptops"},
    {id: 4,name: "TVs"}
  ]

  brands: IBrand[] = [
     {id: 1, name: "Samsung"},
     {id: 2, name: "Apple"},
     {id: 3, name: "Lenovo"},
     {id: 4, name: "Asus"}
  ];

  devices: IDevice[] = [
    {id: 1,name: '12 PRO',price: 25000,image: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',rating: 5},
    {id: 2,name: 'Galaxy s9',price: 25000,image: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',rating: 5},
    {id: 3,name: 'Xiaomi',price: 25000,image: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',rating: 5},
  ];

  selectedType?: IType;
  selectedBrand?: IBrand;


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