export interface ITable {
  objectID: string;
  name: string;
  docTypeName: string;
  folder: boolean;
  attributes?: Array<{ name: string; value: string }>;
}
