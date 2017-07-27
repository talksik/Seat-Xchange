$(document).ready(function(){
    
    $('a').on('click',function(event){
			var thetarget = this.getAttribute('target')
			if (thetarget != "_blank"){			
				var thehref = this.getAttribute('href')
				event.preventDefault();
				$('body').fadeOut(function(){
					//alert(thehref)
					window.location = thehref			
				});
			}
		});
    
    
    
    $("#sevenfiveseven").click(function() {
        $(".sevenfiveseven").fadeIn(500);
        $(".cancel").fadeIn(500);
        $(".one").fadeIn(500);
        
        $(".threePlanes").hide(500);
        
    });
    
    $(".cancel").click(function() {
       $(".sevenfiveseven").fadeOut(400);
       $(this).fadeOut(300);
        $(".one").fadeOut(400);
        $(".threePlanes").show(400);
    });
    
    
    
    
    
    
    $("#seveneightseven").click(function() {
        $(".seveneightseven").fadeIn(500);
        $(".cancel").fadeIn(500);
        $(".two").fadeIn(500);
        
        $(".threePlanes").hide(500);
        
    });
    
    $(".cancel").click(function() {
       $(".seveneightseven").fadeOut(400);
       $(this).fadeOut(300);
        $(".two").fadeOut(400);
        $(".threePlanes").show(400);
    });
    
    
    
    
    
    
    $("#threeeighty").click(function() {
        $(".threeeighty").fadeIn(500);
        $(".cancel").fadeIn(500);
        $(".three").fadeIn(500);
        
        $(".threePlanes").hide(500);
        
    });
    
    $(".cancel").click(function() {
       $(".threeeighty").fadeOut(400);
       $(this).fadeOut(300);
        $(".three").fadeOut(400);
        $(".threePlanes").show(400);
    });
    
    
    
    $(".request").click(function(){
        $(".greyOut").fadeIn(400);
        $(".form").fadeIn(500);
    });
    
    $(".cancel2").click(function(){
      $(".greyOut").fadeOut(400);
        $(".form").fadeOut(500); 
        $(".loading").fadeOut(500);
        $(".aord").fadeOut(500);
    });
    
    $(".submit").click(function() {
        $(".form").fadeOut(400); 
        $(".loading").fadeIn(400);
        var nameInput = $(".name").val();
        var seatInput = $(".number").val() + $(".letter").val();
        var msg = $(".msg").val();
        
        setTimeout (function() {
            
        $(".loading").fadeOut(400);
        var randomYesorNo = randomNum();
            if ( randomYesorNo < 1 )
                {
                    $(".acceptordeny").html( "Request ACCEPTED, " + (nameInput) + "! " + "\r\n" + "Please Proceed to Seat " + (seatInput) + "!").css("color", "green");
                }
            else {
                    $(".acceptordeny").html( "Request DENIED!" + "\r\n" + "Please try another seat." ).css("color", "darkred");
                }
        $(".aord").fadeIn(700);
        }, 4000);
    });
    
    
    function randomNum() {
        return Math.random()*2;
    };
    
    
});











