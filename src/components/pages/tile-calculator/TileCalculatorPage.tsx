import RoomCanvas from "../../UI/molecules/canvas/RoomCanvas"

const TileCalculatorPage = () => {
  return (
    <>
      <section>
        <RoomCanvas tileHeight={100} tileWidth={100}/>
      </section>
    </>
  )
}

export default TileCalculatorPage