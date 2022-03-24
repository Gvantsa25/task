import {User, Status} from './app.component'

export class DataService {
  data: User[] = [
  {
    firstName: 'gvantsa1',
    lastName: 'noniashvili1',
    about: 'about gvantsa1',
    birthDate: '11/25/2000',
    status: Status.Deleted,
  },
  {
    firstName: 'gvantsa2',
    lastName: 'noniashvili2',
    about: 'about gvantsa2',
    birthDate: '05/20/2004',
    status: Status.Active,
  },
  {
    firstName: 'gvantsa3',
    lastName: 'noniashvili3',
    about: 'about gvantsa3',
    birthDate: '12/01/1994',
    status: Status.Inactive,
  },
];

  getUsers(): Promise<any> {
    return new Promise((resolve) => {
        return resolve(this.data);
    });
  }
}
