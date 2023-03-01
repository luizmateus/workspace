interface IDateDate {
  obj: Date;
  full: string;
  year?: string;
  month?: string;
  monthNum?: number;
  day?: string;
}

interface IDateTime {
  full: string;
  hour?: string;
  minutes?: string;
  seconds?: string;
}

export interface IDate {
  date: IDateDate;
  time: IDateTime;
}

export interface IDateParts {
  year?: string;
  month?: string;
  day?: string;
}
