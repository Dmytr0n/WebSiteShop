import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor(){
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._selectedType = [];
        this._selectedBrand = [];
        this._page = 3;
        this._totalCount = 0;
        this._limit = 5;
        this._searchQuery = ''; // Corrected this line
        makeAutoObservable(this);
    }

    setSelectedType(type){
        this.setPage(1);
        this._selectedType = type;
    }

    setSelectedBrand(brand){
        this.setPage(1);
        this._selectedBrand = brand;
    }

    setPage(page){
        this._page = page;
    }

    setTotalCount(count){
        this._totalCount = count;
    }

    setTypes(types){
        this._types = types;
    }

    setBrands(brands){
        this._brands = brands;
    }

    setDevices(devices){
        this._devices = devices;
    }

    setSearchQuery(query) {
        this._searchQuery = query; // Corrected the setter
    }

    get types(){
        return this._types;
    }

    get brands(){
        return this._brands;
    }

    get devices(){
        return this._devices;
    }

    get selectedType(){
        return this._selectedType;
    }

    get selectedBrand(){
        return this._selectedBrand;
    }

    get page(){
        return this._page;
    }

    get totalCount(){
        return this._totalCount;
    }

    get limit(){
        return this._limit;
    }

    get searchQuery() { // Added getter for searchQuery
        return this._searchQuery;
    }
}
