rbg-image-slider
================

jQuery plugin for slideshow 

Include both style.css file(using link tag) and jquery.rbgimageslider.js(using script tag) in your script file.

->   The red button is for prev image ////
->   The blue button is for toggling fullscreen mode
->   The Green button is for going to the next image  


$('#mainimage').rbgimageslider(/*Add links of images here ,inside double quotes*/);
you have the advantage to add as many src as you wish and enjoy the slide show even in fullscreen mode
for ex:$('#mainimage').rbgimageslider(""src1","src2",.....");


for positioning the element it is advisable to add additional tag around div(id=fullscreen) 

for ex:
<div>
<div id="fullscreen".....

</div>
</div>



Additional advice and contributions are sincerely welcome
