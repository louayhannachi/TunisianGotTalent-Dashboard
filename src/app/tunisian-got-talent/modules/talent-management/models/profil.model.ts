import { User } from './../../../models/user.model';
export class Profil {
    id?: number;
    address: string;
    governorate: string;
    age: number;
    telephone: number;
    talent: string;
    category: string;
    description: string;
    video: string;
    photo: string;
    banned: boolean;
    nbbanners: number;
    banneduntil?: Date;
    iduser: User;
}

export class Rating {
    id?: number;
    rate: string;
    iduser: User;
    profil: Profil;
}