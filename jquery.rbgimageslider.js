(function($){
  
  $.rbgimageslider=function(){
  var counter=0; 
  var para=new Array();
  var len=arguments.length;
  var a=document.getElementById('aalekhimage');  
  for(var i=0;i <= len-1;i++)
    {
   para[i]=arguments[i]; 
    }
    
    
    return this.each(function(){
    
    

    $("#next2").click(function(){
    var adi=document.getElementById('aalekhimage');
    var adi2=document.getElementById('next1');
    var adi5=document.getElementById('aalekh2');
    adi5.style.width="900px";  
    adi.style.height="600px";
    adi.style.width="800px"; 
    adi2.style.marginLeft="300px";
    var adi3=document.getElementById('next2');
    var adi4=document.getElementById('next');  
    adi3.style.marginLeft="26px";
    adi4.style.marginLeft="340px"; 
    var adi6=document.getElementById('fullscreen');
    adi6.style.marginLeft="600px";  

});
      
      
      $('#next').click(function(){
      
        if(counter >= len){
         counter=0;
         
         a.src=para[counter]; 
          
        }  
        else{
         
         a.src=para[counter];
         counter++;
          
        }
        
      });
      
      $('.back').click(function(){
        if(counter < 0){
         counter=len-1; 
         
         a.src=para[counter]; 
        }
        else{
        
        a.src=para[counter];
        counter--;
        }
        
      });
      
      
      $('#next2').on('click', function(){  
        var elem = document.getElementById('fullscreen');  
        if(document.webkitFullscreenElement) {  
            document.webkitCancelFullScreen(); 
        }  
        else {  
            elem.webkitRequestFullScreen();  
             } 
         }); 
      
      
      
});
    
    
    
  }

}(jQuery));

$('#aalekhimage').rbgimageslider("http://t0.gstatic.com/images?q=tbn:ANd9GcS8qATHbHl-sMtFKBtXk9Aahz4JA46jKowiy2YkcNvR92xGA1bNug","http://www.wired.com/opinion/wp-content/uploads/2013/11/u3c0282.jpg");
