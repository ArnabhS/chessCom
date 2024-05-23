import React, { useEffect } from "react";
import { ChessBoard } from "../components/ChessBoard";
import { Button } from "../components/Button";
import { useSocket } from "../hooks/useSocket";

export const INIT_GAME= "init_game";
export const MOVE= "move";
export const GAME_OVER="game over"


export const Game = () => {
 const socket= useSocket();

  useEffect(()=>{
    if(!socket){
      return;
    }
    socket.onmessage=(event)=>{
      
    }
  }, [socket])

  if(!socket) return <div>Connecting...</div>
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full md:grid-cols-2">
          <div className="col-span-4 bg-red-300 w-full">
           <ChessBoard/>
          </div>
          <div className="col-span-2 bg-green-300 w-full">
          <Button onClick={()=>{
              socket?.send(JSON.stringify({
                type:INIT_GAME
              }))
            }}>
             Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
