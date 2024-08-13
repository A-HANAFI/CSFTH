import { CdkVirtualScrollViewport, FixedSizeVirtualScrollStrategy } from "@angular/cdk/scrolling";

const PAGESIZE = 20;
const ROW_HEIGHT = 48;

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
      super(ROW_HEIGHT, 1000, 2000);
    }
  
    override attach(viewport: CdkVirtualScrollViewport): void {
      this.onDataLengthChanged();
    }
  }