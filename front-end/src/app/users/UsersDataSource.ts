import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { User } from "../models/User";
import { BehaviorSubject, Observable, catchError, finalize, of } from "rxjs";
import { UserService } from "../_services/user.service";

export class UsersDataSource implements DataSource<User>
{
    private usersSubject = new BehaviorSubject<User[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private usersService: UserService) {}

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }

    loadUsers() {

        this.loadingSubject.next(true);

        this.usersService.getAllUsers()
            .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((users ) => this.usersSubject.next(users));
    }    
}