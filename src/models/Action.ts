import { Membre } from "./Membre";

export class Action{
   
    nom!: string;
    objectif!: string;
    responsable!: Membre;
    nombreDePersonnes!:number;
    inscriDate!:Date;
  estReussie: any;
    
    constructor(nom: string, objectif: string , responsable:Membre, nombreDePersonnes:number, inscriDate:Date){
        this.nom=nom,
        this.objectif=objectif;
        this.responsable=responsable;
        this.nombreDePersonnes=nombreDePersonnes;
        this.inscriDate=inscriDate;
       
    }
}