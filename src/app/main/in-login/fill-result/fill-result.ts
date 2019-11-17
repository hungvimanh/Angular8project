export class Student{
    studentId: string;
    identify:string;
    name:string;
    email:string;
    dob:string;
}
export class Score{
    studentId :string;
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