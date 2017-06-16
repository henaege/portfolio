$(document).ready(function() {
    $('#about-button').click((e)=> {
        e.preventDefault();
        function aboutComplete() {
            $('#projects').scrollTop(0);
            $('#about').fadeIn(600);
        }
        $("#landing").fadeOut(600, aboutComplete);
            
    })

    $("#aboutBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $('#about').offset({top:0})
            $("#landing").fadeIn(600);
        }
        $("#about").fadeOut(600, backComplete);
    })

    $('#skills-button').click((e)=> {
        e.preventDefault();
        function skillsComplete() {
            $('#skills').offset({top:0})
            $('#skills').fadeIn(600);
        }
        $("#landing").fadeOut(600, skillsComplete);
    });

    $('#projects-button').click((e)=> {
        e.preventDefault();
        function projectsComplete() {
            $('#projects').offset({top:0})
            $('#projects').fadeIn(600);
        }
        $("#landing").fadeOut(600, projectsComplete);
    });

    $('#contact-button').click((e)=> {
        e.preventDefault();
        function projectsComplete() {
            $('#contact').offset({top:0})
            $('#contact').fadeIn(600);
        }
        $("#landing").fadeOut(600, projectsComplete);
    });

    $("#skillsBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $("#landing").fadeIn(600);
        }
        $("#skills").fadeOut(600, backComplete);
    })

    $("#projectsBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $("#landing").fadeIn(600);
        }
        $("#projects").fadeOut(600, backComplete);
    })

    $("#contactBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $("#landing").fadeIn(600);
        }
        $("#contact").fadeOut(600, backComplete);
    })

	// $('#start-btn').click(()=>{
	// 	function complete(){
	// 	$('.second-section').fadeIn(1000);
	// 	$('.login-form-container').css('display','none');			
	// 	}
	// 	$('.first-section').fadeOut(1000,complete);					
	// 	$('#wrapper_bgndVideo').css('filter','blur(10px)');
	// });

})