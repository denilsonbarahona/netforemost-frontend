export interface ISorting {
  sort: <T>(payload: T[], key: keyof T) => T[];
}

export interface IWithSorting {
  sort: <T>(sorting: ISorting, payload: T[], key: keyof T) => T[];
}
