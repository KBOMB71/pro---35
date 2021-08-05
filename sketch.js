//Create variables here
var dog,happyDog,foodS,foodStock;
var database,dogImg,happyDogImg;
var a;




function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);

  database = firebase.database()


  dog = createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale = 0.25

  foodStock=database.ref('food')
  foodStock.on("value",readStock)

  a = "UP ARROW KEY"
  
}


function draw() {  
  textSize(20)
  fill(rgb(12,12,12))
  text("note:press the "+  " to feed the dog")

  //add styles here
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){

writeStock(foodS)
dog.addImage(happyDogImg)

  }


  drawSprites();

}


function readStock(data){
foodS = data.val()


}


function writeStock(x){
  database.ref('/').update({
    food : x
  })




}