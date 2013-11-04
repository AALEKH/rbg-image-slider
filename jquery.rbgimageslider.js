/*
 * jQuery RBG Image Slider  v1.0
 *
 * @mailto:aalekh.nigam@gmail.com
 *
 * Copyright 2013, 	Aalekh Nigam
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */


(function($){
  
  $.fn.rbgimageslider=function(){
 
    
  var counter=0; 
  var para=new Array();
  var len=arguments.length;
  var a=document.getElementById('mainimage');  
  for(var i=0;i <= len-1;i++)
    {
   para[i]=arguments[i]; 
    }
    
    
    return this.each(function(){
    
     document.addEventListener("keyup", function(e) {
    var image=document.getElementById('mainimage');
    var peh=document.getElementById('prev');
    var fscrnvar=document.getElementById('fscrn');
    var nextvar=document.getElementById('next');    
    var fullscreenvar=document.getElementById('fullscreen');
       
       if (e.keyCode == 27) {
    if (document.cancelFullScreen) {
    document.cancelFullScreen();
   
    peh.style.top="320px";
    peh.style.right="420px";   
    image.style.height="300px";
    image.style.width="400px";
       
     
    fscrnvar.style.top="320px";
    fscrnvar.style.right="270px";
    nextvar.style.top="320px";
    nextvar.style.right="100px";   
    
    fullscreenvar.style.marginLeft="0px";  

    
   
     $('#mainimage').removeClass('cool');   
 
    } else if (document.mozCancelFullScreen) {
   document.mozCancelFullScreen();
   
    peh.style.top="320px";
    peh.style.right="420px";   
    image.style.height="300px";
    image.style.width="400px";
    
    fscrnvar.style.top="320px";
    fscrnvar.style.right="270px";
    nextvar.style.top="320px";
    nextvar.style.right="100px";   
   
    fullscreenvar.style.marginLeft="0px";  

   
   
     $('#mainimage').removeClass('cool');   
 
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
     
    peh.style.top="320px";
    peh.style.right="420px";   
    image.style.height="300px";
    image.style.width="400px";
   
    fscrnvar.style.top="320px";
    fscrnvar.style.right="270px";
    nextvar.style.top="320px";
    nextvar.style.right="100px";   
    fullscreenvar.style.marginLeft="0px";  

      
    
     $('#mainimage').removeClass('cool');   
 
    }
 }
 
}, false);
      
      
      $('#fscrn').click(function(){
      var image=document.getElementById('mainimage');  
    var peh=document.getElementById('prev');  
    var fscrnvar=document.getElementById('fscrn');
    var nextvar=document.getElementById('next');   
    var fullscreenvar=document.getElementById('fullscreen');
        if($('#mainimage').is('.cool')){
        
    peh.style.top="320px";
    peh.style.right="420px";   
    image.style.height="300px";
    image.style.width="400px";
   
    fscrnvar.style.top="320px";
    fscrnvar.style.right="270px";
    nextvar.style.top="320px";
    nextvar.style.right="100px";   
   
    fullscreenvar.style.marginLeft="0px";  

    var elem = document.getElementById('fullscreen');  
    if(document.webkitFullscreenElement) {  
      document.webkitCancelFullScreen(); 
      }  
    else {  
            elem.webkitRequestFullScreen();  
          }
     $('#mainimage').removeClass('cool');   
 
      }
        else{
          
       peh.style.top="623px";
       peh.style.right="920px";   
       image.style.height="600px";
       image.style.width="900px";
     
        
       fscrnvar.style.top="623px";
       fscrnvar.style.right="540px";
       nextvar.style.top="623px";
       nextvar.style.right="100px";   
      
       fullscreenvar.style.marginLeft="500px";  

      var elem = document.getElementById('fullscreen');  
      if(document.webkitFullscreenElement) {  
       document.webkitCancelFullScreen(); 
       }  
     else{  
            elem.webkitRequestFullScreen();  
          }
          
     $('#mainimage').addClass("cool");     
        }
      });
     

     
      $('.back').click(function() {
       $('#mainimage').fadeOut(200);
       });
      
      $('.back').click(function(){
       
        if(counter >= len){
         counter=0;
         a.src=para[counter]; 
         counter++; 
        }  
        else{
         
         a.src=para[counter];
         counter++;
          
        }
      
        
      });

  $('.back').click(function() {
$('#mainimage').fadeIn(200);
});
      
      $('#next').click(function() {
        $('#mainimage').fadeOut('fast');
        });
      $('#next').click(function(){
        
        
        if(counter < 0){
         counter=len-1; 
         a.src=para[counter];
         counter--; 
        }
        else{
        
        a.src=para[counter];
        counter--;
        }
       
      });
       $('#next').click(function() {
        $('#mainimage').fadeIn('fast');
});
       
      
      
      
      
    
    }); 
    
  }

}(jQuery));

$('#mainimage').rbgimageslider(/*Add links of images here ,inside double quotes*/);
