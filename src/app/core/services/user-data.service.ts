import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../../models/user.model";
import { MOCK_USER } from "../mocks/mock-userdata";

@Injectable({
    providedIn: 'root'
})

export class UserDataService {
    constructor() { }

    getUser(): Observable<User> {
        return of(MOCK_USER);
    }
}