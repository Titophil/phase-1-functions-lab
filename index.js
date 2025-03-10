const hq = 42
function distanceFromHqInBlocks(pickup){
  
  return Math.abs(pickup-hq)
}
console.log(distanceFromHqInBlocks(43))

function distanceFromHqInFeet(dist){
  distanceFromHqInBlocks(dist)
  return Math.abs(dist-42)*264


}
console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(start, destination){
  return Math.abs(destination-start)*264


}
console.log(distanceTravelledInFeet(47,42))

function calculatesFarePrice(start,destination){
  const distance = Math.abs(destination-start)*264
  if(distance<=400&& distance<=400){
    return 0
  }
  else if(distance>400&&distance<=2000){
    return (distance-400)*0.02
  }
  else if(distance>2000&&distance<=2500){
    return 25
  }
  else{
    return (`cannot travel that far`)
  }
  }


