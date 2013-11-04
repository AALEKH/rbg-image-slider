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

-----------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------
to add the plugin copy and paste the following code :
<!--


<div id="fullscreen" class="html5-fullscreen-api"  > 
  <img id="mainimage" src="http://t0.gstatic.com/images?q=tbn:ANd9GcS8qATHbHl-sMtFKBtXk9Aahz4JA46jKowiy2YkcNvR92xGA1bNug">
 
    <div class="back" id="prev"></div> 
   
    <div id="fscrn" > </div>
    <div id="next" "> </div>
   
  </div>


-->  
-----------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------
for positioning the element it is advisable to add additional tag around div(id=fullscreen) 

for ex:
<div>
<div id="fullscreen".....

</div>
</div>



Additional advice and contributions are sincerely welcome
