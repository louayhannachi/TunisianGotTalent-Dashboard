import { Subject } from "rxjs";

export class User {
    username: string;
    username_canonical: string;
    email: string;
    email_canonical: string;
    enabled: boolean;
    password: string;
    roles: any[];
}

export class UserDetails {
    username: string;
    password: string;
    constructor(){}
}

export enum dialogTypes {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFORMATION = 'INFORMATION',
  }
  
  export const AlertNotificationSubject: Subject<{
    dialogType: dialogTypes;
    header?: string,
    message?: string,
    stackTrace?: string,
    okBtn?: boolean,
    cancelBtn?: boolean,
    customBtn?: boolean,
    customBtnLabel?: string,
    okBtnAction?(),
    cancelBtnAction?(),
    customBtnAction?()
  }> = new Subject();