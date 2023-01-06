export default class TodoModelPersistant {
  id!: number;
  [nom: string]: any;
  prenom!: string;
  date_inscription!: string;
  date_de_naissance?: string;
  nationalite?: string;

  constructor(
    nom: string,
    prenom: string,
    date_naissance?: string,
    nationalite?: string
  ) {
    this.create(nom, prenom, date_naissance, nationalite);
  }

  create = (
    nom: string,
    prenom: string,
    date_naissance?: string,
    nationalite?: string
  ) => {
    this.nom = nom;
    this.prenom = prenom;
    this.date_inscription = "" + new Date(Date.now()).getUTCDate();
    this.date_de_naissance = date_naissance || "";
    this.nationalite = nationalite || "";
  };

  update = (obj: any) => {
    const checkAttribute: string[] = [
      "id",
      "nom",
      "prenom",
      "date_de_naissance",
      "nationalite",
    ];
    for (let key in obj) {
      if (checkAttribute.includes(key)) {
        this[key] = obj[key];
      }
    }
  };
}
