export class Wish{
    index: number;
    univerName:string;
    majorsName:string;
    subjectGroup:string;
}
export class University {
    id: string;
    code: string;
    name: string;
}
export class MajorOfUniversity{
    universityId : string;
    majorsId : string;
    majorsCode : string;
    majorsName : string;
    year: string;
}

export class SubjectGroup{
    universityId:string;
    subjectGroupId:string;
    majorsId: string;
    year: string;
}
export class Province{
    id : string;
    code : string;
    name: string;
}
export class District{
    provinceId:string;
    id : string;
    code : string;
    name: string;
}
export class Town{
    districtId:string;
    id : string;
    code : string;
    name: string;
}
export class HighSchool{
    provinceId: string;
    id:string;
    code :string;
    name:string;
    address:string;
}