var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('Birthday.jpg', function(Img))
        block_image_object = Img;
        block_image_object.ScaletoWidth(700);
        block_image_object.ScaletoHidth(400);
        block_image_object.set({
          top:0,
          left:0  
        });
        canvas.add(block_image_object);
        });
	
}

function playSound(){
	x.play();
}
