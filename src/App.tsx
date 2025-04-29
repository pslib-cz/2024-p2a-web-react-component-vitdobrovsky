import PercentView from "./PrecentView"



function App() {


  const makeColor = (percent: number): string => {
    const hue: number = percent / 100 * 120
    return `hsl(${hue}, 100%, 50%)`
  }
  

  return (
    <>
      <PercentView value={5} maxValue={5} makeColor={makeColor}/>
    </>
  )
}

export default App
