import chessImg from "../assets/board.png"

export const Home = () => {
  return (
    <div>
      <div className='mt-2'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <img src={chessImg}></img>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-100">Play chess online</h1>
            <div className="mt-4">
              <button className="text-gray-100">
                    Play Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
