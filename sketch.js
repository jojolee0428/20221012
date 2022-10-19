function setup() {
 createCanvas(windowWidth, windowHeight);  
}

function draw() {
background("	#990099"); 
stroke("#CC00CC") 
noFill() 
rectMode(CENTER) 

for(var j=0;j<(height/50) ;j++){ 
for(var i=0;i<(width/50);i=i+1)
{
ellipse(25+(i*50),25+(j*50),50+mouseX )
stroke(214,80,65)
rect(25+(i*50),25+(j*50),50) 
stroke(0,245,212)
ellipse(50+(i*50),50+(j*50),25+mouseY) 
stroke("#008844")
}
}

}

