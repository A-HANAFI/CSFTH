import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { User } from "../models/User";
import { BehaviorSubject, Observable, catchError, finalize, of } from "rxjs";
import { UserService } from "../_services/user.service";
import { Session } from "../models/Session";
import { SessionService } from "../_services/session.service";

export class SessionsDataSource implements DataSource<Session>
{
    private usersSubject = new BehaviorSubject<Session[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private sessionService: SessionService) {}

    connect(collectionViewer: CollectionViewer): Observable<Session[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }

    loadSessions() {

        this.loadingSubject.next(true);

        this.sessionService.getAllSessions()
            .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((sessions ) => this.usersSubject.next(sessions));
    }    
}