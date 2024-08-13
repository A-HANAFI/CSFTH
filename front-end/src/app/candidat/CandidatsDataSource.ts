import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Candidat } from "../models/Candidat";
import { BehaviorSubject, Observable, catchError, finalize, of } from "rxjs";
import { CandidatService } from "../_services/candidat.service";


export class CandidatsDataSource extends DataSource<Candidat>{

    private usersSubject = new BehaviorSubject<Candidat[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    
    constructor(private CandidatService: CandidatService) {
        super();
    }

    override connect(collectionViewer: CollectionViewer): Observable<readonly Candidat[]> {
        return this.usersSubject.asObservable();
    }
    override disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }

    loadCandidats(){
        this.loadingSubject.next(true);

        this.CandidatService.getAllCandidats()
        .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe((candidats)=> this.usersSubject.next(candidats))
    }


}