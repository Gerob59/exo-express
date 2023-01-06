/**
 * containtes :
 * date de naissance / nationalité sont facultatives
 * la date de naissance doit etre au format dd/mm/yyyy hh:mm:ss
 */
export default class UserModel {
  id!: number;
  [nom: string]: any;
  prenom: string;
  date_inscription!: string;
  date_de_naissance?: string;
  nationalite?: string;

  constructor(
    nom: string,
    prenom: string,
    date_de_naissance?: string,
    nationalite?: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.date_inscription = this.setDateInscription();
    this.date_de_naissance = date_de_naissance || "";
    this.nationalite = nationalite || "";
  }

  update = (user: UserModel) => {
    if (user.nom) this.nom = user.nom;
    if (user.prenom) this.prenom = user.prenom;
    if (user.date_de_naissance) this.date_de_naissance = user.date_de_naissance;
    if (user.nationalite) this.nationalite = user.nationalite;
  };

  private setDateInscription = (): string => {
    const d: Date = new Date(Date.now());
    const dformat: string = `${[
      d.getDate(),
      d.getMonth() + 1,
      d.getFullYear(),
    ].join("/")} ${[d.getHours(), d.getMinutes(), d.getSeconds()].join(":")}`;

    return dformat;
  };
}
