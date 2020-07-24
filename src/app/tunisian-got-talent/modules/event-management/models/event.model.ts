export class EventModel {
  id?: number;
  titre: string;
  description: string;
  nbparticipant: number;
  date: string;
  idcat: CategoryModel;
}

export class CategoryModel {
  id?: number;
  titrecat?: string;
}
