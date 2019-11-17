export class Univer {
    id : string;
    code :string;
    name :string;
}
export class UniverCreate {
    id : string;
    code :string;
    name :string;
    address : string;
    website : string;
    errors : {
        code: string;
    }
}
export class UniName{
    name : string;
}
export class UniCode{
    orderType: number;
}
export class UniId{
    id : string;
}