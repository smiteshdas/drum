let video;
let classifier;
let audio;
let brainLink =createA('http://github.com/brainclaps', 'Brainclaps');
let shareLink =createA('https://www.addtoany.com/share#url=https%3A%2F%2Fbit.ly%2Fio-drum&amp;title=Bi-Drum', 'Share');
let options;
let label;

function preload(){
  audio = loadSound('drum.mp3');
  brainLink.position(10,390);
  shareLink.position(30,390);
}

function setup() {
	createCanvas(400,400)
  options = {
     video: {
         facingMode: {
          exact: "environment"
        }
     }
   };
	video = createCapture(options);
        video.size(400,380);
	background(0)
	classifier = ml5.imageClassifier('model.json',video,modelLoaded)

}

function modelLoaded() {
	console.log("Model is Ready.")
	classifier.classify(gotResults);
}

function gotResults(err,results) {
	if(err){
		//console.log("Error")
	}else{
        label = results.label[0];

        if(label == "play"){
        audio.play();
}
		
      classifier.classify(gotResults);
	}
}
