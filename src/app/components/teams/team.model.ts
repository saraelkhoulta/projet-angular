import { Player } from '../players/Player.model';

export class Team{


constructor(public name:string,public description:string, public image:string,public players?:Player[]){
   //pour dire que players est optionnels
}


}