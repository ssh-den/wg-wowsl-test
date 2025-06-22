import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Commander } from "../../models/commander.model";
import { MOCK_COMMANDER } from "../mocks/mock-commanders";

@Injectable({
    providedIn: 'root'
})

export class CommanderDataService {
    constructor() { }

    getCommander(): Observable<Commander> {
        return of(MOCK_COMMANDER);
    }
}