import {User} from "./User";


// interface Depart {topManagers: Array<User>, administrators: Array<User>};
// type Depart = {topManagers: Array<User>, administrators: Array<User>}

export class Tree {
  sales: Array<User>;
  administration: {topManagers: Array<User>, administrators: Array<User>};
  accounting: Array<User>;
  engineers: Array<User>;

  constructor(sales: Array<User>, administration: {topManagers: Array<User>, administrators: Array<User>}, accounting: Array<User>, engineers: Array<User>) {
    this.sales = sales;
    this.administration = administration;
    this.accounting = accounting;
    this.engineers = engineers
  }

  // [Symbol.iterator(): Iterator<string>]
}
