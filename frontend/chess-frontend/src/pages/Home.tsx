import { useNavigate } from "react-router-dom"
import chessImg from "../assets/board.png"
import { Button } from "../components/Button";

export const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-center">
      <div className='pt-8 max-w-screen-lg'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className="flex justify-center">
            <img src={chessImg} className="max-w-96"></img>
          </div>
          <div className="flex justify-center flex-col gap-4"> 
            <h1 className="text-4xl font-bold text-gray-100">Play chess online</h1>
            <div className="mt-4">
            <Button onClick={()=>{
              navigate("/game")
            }}>
             Play Online
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
