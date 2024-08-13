import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, finalize, of } from "rxjs";
import { ApprenantService } from "src/app/_services/apprenant.service";
import { Apprenant } from "src/app/models/Apprenant";


export  class ApprenantsDataSource extends DataSource<Apprenant>{

    private usersSubject = new BehaviorSubject<Apprenant[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    
    constructor(private ApprenantService: ApprenantService) {
        super();
    }

    override connect(collectionViewer: CollectionViewer): Observable<readonly Apprenant[]> {
        return this.usersSubject.asObservable();
    }

    override disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }

    loadApprenants(){
        this.loadingSubject.next(true);

        this.ApprenantService.getAllApprenant()
        .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe((candidats)=> this.usersSubject.next(candidats))
    }

}