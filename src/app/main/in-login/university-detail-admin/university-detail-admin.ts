export class UniverDetail{
    id : string;
    code : string;
    name: string;
    address: string;
    website: string;
    university_Majors: [
        {
            universityId : string;
            universityCode : string;
            universityName : string;
            majorsId : string;
            majorsCode : string;
            majorsName : string;
            benchmark : string;
            subjectGroupId : string;
            subjectGroupCode : string;
            subjectGroupName : string;
            year : string; 
            quantity : number;
        }
    ]
}
export class Major{
    universityId : string;
    universityCode : string;
    universityName : string;
    majorsId : string;
    majorsCode : string;
    majorsName : string;
    benchmark : string;
    subjectGroupId : string;
    subjectGroupCode : string;
    subjectGroupName : string;
    year : string; 
    quantity : number;
}
export class majorOfUniversity{
    id : string;
    year: string;
}
export class UniverDelete{
    id : string;
}

export class MajorDelete{
    universityId: string;
    majorsId : string;
    subjectGroupId:string;
    year:string;
}