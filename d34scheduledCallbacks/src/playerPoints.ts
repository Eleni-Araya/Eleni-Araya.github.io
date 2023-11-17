

/*Be sure to use meaningful variable names.  
Try to use map and reduce in your functions as appropriate. */

type Player = {
    jersey: number;
    stats: Stats[];
}

type Stats = {
    game: number;
    points: number;
}

type JerseyPoints = {
    jersey: number;
    total: number;
}

//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];

export function findTotalPlayerPoints(player:Player):number{
    // let totalPoints:number=0;
   
   return player.stats.reduce((totalPoints,statsOfPlayer)=>(totalPoints+statsOfPlayer.points),0)

}
export function findTotalPointsByJersey(jersyNum:number):number{
    let playerPoints:number=0;
    for(let player of teamStats){
        if(jersyNum===player.jersey){
            playerPoints=findTotalPlayerPoints(player);
        } 
    }
    return playerPoints;
}
export function findTotalScores(teamStats:Player[]):JerseyPoints[]{ 
     return teamStats.map((player)=>{
        return {jersey:player.jersey,
                total:findTotalPlayerPoints(player)
            }
    });   
}
