export interface Location{
    city:string;
    country:string;
    lat: number;
    lng: number;
    postalCode:string;
    timezone:string;
}

export interface Data{
    ip:string;
    isp:string;
    location:Location;
}