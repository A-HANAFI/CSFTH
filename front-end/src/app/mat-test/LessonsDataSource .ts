import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, finalize, map, of } from "rxjs";
import { User } from "../_models/User";
import { UserService } from "../_services/user.service";

export class LessonsDataSource implements DataSource<User> {

    private lessonsSubject = new BehaviorSubject<User[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private usersService: UserService) {}

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

    loadLessons(courseId: number, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.usersService.getAllUsers()
            .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((lessons) => this.lessonsSubject.next(lessons));
    }    
}