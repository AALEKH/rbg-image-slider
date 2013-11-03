(function($){
  
  $.fn.rbgimageslider=function(){
 
    
  var counter=0; 
  var para=new Array();
  var len=arguments.length;
  var a=document.getElementById('aalekhimage');  
  for(var i=0;i <= len-1;i++)
    {
   para[i]=arguments[i]; 
    }
    
    
    return this.each(function(){
    
     
      $('#next2').click(function(){
      
      $('#aalekhimage').toggle(function(){
    
    var adi=document.getElementById('aalekhimage');
    var adi7=document.getElementById('fullscreen');   
    var adi5=document.getElementById('prev');
    adi5.style.top="623px";
    adi5.style.right="920px";   
    adi.style.height="600px";
    adi.style.width="900px";
    adi7.style.marginLeft="600px";   
    var adi3=document.getElementById('next2');
    var adi4=document.getElementById('next');  
    adi3.style.top="623px";
    adi3.style.right="540px";
    adi4.style.top="623px";
    adi4.style.right="100px";   
    var adi6=document.getElementById('fullscreen');
    adi6.style.marginLeft="600px";  

    var elem = document.getElementById('fullscreen');  
    if(document.webkitFullscreenElement) {  
      document.webkitCancelFullScreen(); 
      }  
    else {  
            elem.webkitRequestFullScreen();  
          } 
        
      },function(){
      
    var adi=document.getElementById('aalekhimage');
    var adi7=document.getElementById('fullscreen');   
    var adi5=document.getElementById('prev');
    adi5.style.top="320px";
    adi5.style.right="420px";   
    adi.style.height="300px";
    adi.style.width="400px";
    adi7.style.marginLeft="0px";   
    var adi3=document.getElementById('next2');
    var adi4=document.getElementById('next');  
    adi3.style.top="320px";
    adi3.style.right="270px";
    adi4.style.top="320px";
    adi4.style.right="100px";   
    var adi6=document.getElementById('fullscreen');
    adi6.style.marginLeft="0px";  

    var elem = document.getElementById('fullscreen');  
    if(document.webkitFullscreenElement) {  
      document.webkitCancelFullScreen(); 
      }  
    else {  
            elem.webkitRequestFullScreen();  
          }
        
      });
      });
     

     
      $('.back').click(function() {
       $('#aalekhimage').fadeOut(200);
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
$('#aalekhimage').fadeIn(200);
});
      
      $('#next').click(function() {
        $('#aalekhimage').fadeOut('fast');
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
        $('#aalekhimage').fadeIn('fast');
});
       
      
      
      
      
    
    }); 
    
  }

}(jQuery));

$('#aalekhimage').rbgimageslider("http://t0.gstatic.com/images?q=tbn:ANd9GcS8qATHbHl-sMtFKBtXk9Aahz4JA46jKowiy2YkcNvR92xGA1bNug","http://www.wired.com/opinion/wp-content/uploads/2013/11/u3c0282.jpg");
