export interface IWizard {
    elixirs:   IElixir[];
    id:        string;
    firstName: null | string;
    lastName:  string;
}

export interface IElixir {
    id:   string;
    name: string;
}


export class Wizard {
    elixirs: IElixir[];
    id: string;
    firstName: string | null;
    lastName: string;
    constructor(obj: IWizard) {
        this.id = obj.id;
        this.elixirs = obj.elixirs;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }
}