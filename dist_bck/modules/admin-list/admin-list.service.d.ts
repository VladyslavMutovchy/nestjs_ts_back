import { Datum } from './admin-list-datum.model';
import { AdminListAttrs } from './admin-list.module';
export declare class AdminListService {
    private datumModel;
    constructor(datumModel: typeof Datum);
    createPerson(attrs: AdminListAttrs): Promise<Datum>;
}
