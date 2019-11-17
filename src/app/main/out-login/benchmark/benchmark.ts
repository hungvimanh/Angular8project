export class benchmark{
    universityId: string;
    universityCode: string;
    universityName: string;
    majorsId: string;
    majorsCode: string;
    majorsName: string;
    benchmark: number;
    subjectGroupId: string;
    subjectGroupCode: string;
    subjectGroupName: string;
    year: string;
    quantity: number;
    descreption: string;
}
export class subjectGroup {
    id : string;
    code: string;
    name: string;
}
export class AboutScore {
    benchmarkLow : number;
    benchmarkHigh : number;
    subjectGroupCode : string;
    year : string;
}