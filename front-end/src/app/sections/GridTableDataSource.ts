import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { Candidat } from "../models/Candidat";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { CandidatService } from "../_services/candidat.service";
import { Section } from "../models/Section";
import { SectionService } from "../_services/section.service";


const PAGESIZE = 20;
const ROW_HEIGHT = 48;

export class GridTableDataSource extends DataSource<any>{
    private _data: any[];
    private readonly visibleData: BehaviorSubject<any[]> = new BehaviorSubject(<any>[]);
    offset = 0;
    offsetChange = new BehaviorSubject(0);

    constructor(
        initialData: Section[],
         private viewport: CdkVirtualScrollViewport, 
         private itemSize: number,
         private sectionService : SectionService
         ) {
        super();
        this._data = initialData;
      }

    get allData(): Candidat[] {
        this.sectionService.getAllSections().subscribe(
            (data)=>  this._data = data
        )
        return this._data;
      }

      set allData(data: Candidat[]) {
        this.sectionService.getAllSections().subscribe(
            (data) => this._data = data
        )
        this.viewport.scrollToOffset(0);
        this.viewport.setTotalContentSize(this.itemSize * data.length);
        this.visibleData.next(this._data.slice(0, PAGESIZE));
        }

        connect(collectionViewer: import('@angular/cdk/collections').CollectionViewer): Observable<any[] | ReadonlyArray<any>> {
            return this.visibleData;
          }
        
          disconnect(collectionViewer: import('@angular/cdk/collections').CollectionViewer): void {
          }

}