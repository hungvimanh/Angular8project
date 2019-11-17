export class Student{
    id: string;
    identify:string;
    name:string;
    email:string;
    dob:string;
}
export class Score{
    id:string;
    maths:number;
    physics:number;
    literature:number;
    languages:number;
    history:number;
    geography:number;
    civicEducation: number;
    chemistry: number;
    biology:number;
    errors : {
        code: string;
    }
}