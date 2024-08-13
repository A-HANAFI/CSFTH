import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Candidat } from "../models/Candidat";
import { BehaviorSubject, Observable, catchError, finalize, of } from "rxjs";
import { Section } from "../models/Section";
import { SectionService } from "../_services/section.service";


export class SectionsDataSource extends DataSource<Section>{

    private usersSubject = new BehaviorSubject<Section[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    
    constructor(private sectionService: SectionService) {
        super();
    }

    override connect(collectionViewer: CollectionViewer): Observable<readonly Section[]> {
        return this.usersSubject.asObservable();
    }
    override disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }

    loadSections(){
        this.loadingSubject.next(true);

        this.sectionService.getAllSections()
        .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe((candidats)=> this.usersSubject.next(candidats))
    }


}