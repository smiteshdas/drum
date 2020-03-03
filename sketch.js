let video;
let classifier;
let audio;
let labell;
let options = {
     video: {
         facingMode: {
          exact: "environment"
        }
     }
   };

function preload(){
  video = createCapture(options);
  classifier = ml5.imageClassifier('model.json',video,modelLoaded)
  audio = loadSound('drum.mp3');
}

function setup() {
	createCanvas(400,400)
	background(0)
	

}

function modelLoaded() {
	console.log("Model is Ready.")
	classifier.classify(gotResults);
}

function gotResults(err,results) {
	if(err){
		console.log("Error")
	}else{
        labell = results.label[0];

        if(label == "play"){
        audio.play();
classifier.classify(gotResults)
        
}else{
classifier.classify(gotResults)
}
		
      
	}
}
