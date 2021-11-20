export interface IType{
    id?: number;
    name?: string;
}

export interface IBrand{
    id?: number;
    name?: string;
}

export interface IDevice{
    id?: number;
    name?: string;
    price?: number;
    image?: string;
    rating?: number;
    info?: any[];
}

export interface IInfo{
    title: string;
    description: string;
    number: number;
}

export interface IPagi{
    rows: number[];
    count: number[];
}