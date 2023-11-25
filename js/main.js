// JavaScript Document

/* ========選單=========== */
$(function(){
	
    $('.menu')
        .on('mouseover', function() {
            $(this).stop(true).animate({
                backgroundColor: '#F4F106',
            }, 200);
        })
		
        .on('mouseout', function(){
            $(this).stop(true).animate({
                backgroundColor: '#EEE',
            }, 200); 
			});	
			
			
    $('.menuli span')
        .on('mouseover', function() {
            $(this).stop(true).animate({
                color: '#FFFFFF',
            }, 200);
        })
        .on('mouseout', function(){
            $(this).stop(true).animate({
                color: '#2f2f2f',
            }, 200); 
			});	

});

/* ========生平內容=========== */

$(function(){
	
    $('.bio_expand')
        .on('mouseover', function() {
            $(this).stop(true).animate({
                backgroundColor: '#EEE',
            }, 500);
        })
		
        .on('mouseout', function(){
            $(this).stop(true).animate({
                backgroundColor: '#F4F106',
            }, 500); 
			});	

});

$(document).ready(function(){
			
    $('.bio_expand')
        .click(function(){
            $('.contain_life02').slideToggle(500);
        });
		
});

$(function(){

	  $('#blueimg')
	      .on('mouseover',function(){
			 $(this).find('strong').stop(true).animate({
				 bottom:'0px'},300);
			 $(this).find('span').stop(true).animate({
				 opacity:1},300);
		     $(this).find('img').stop(true).animate({
				 top:'-50px'},300);
		  })
	     .on('mouseout',function(){
			 $(this).find('strong').stop(true).animate({
				 bottom:'-80px'},300);
			 $(this).find('span').stop(true).animate({
				 opacity:0},300);
		     $(this).find('img').stop(true).animate({
				 top:'0px'},300);
    });
});

$(function(){

	  $('.othersimgclick')
	      .on('mouseover',function(){
			 $(this).find('strong').stop(true).animate({
				 bottom:'0px'},300);
			 $(this).find('span').stop(true).animate({
				 opacity:1},300);
		     $(this).find('img').stop(true).animate({
				 top:'-50px'},300);
		  })
	     .on('mouseout',function(){
			 $(this).find('strong').stop(true).animate({
				 bottom:'-80px'},300);
			 $(this).find('span').stop(true).animate({
				 opacity:0},300);
		     $(this).find('img').stop(true).animate({
				 top:'0px'},300);
    });
});

$(function(){
	
    $('.kon')
        .load(function(){
            $(this).animate({
				 opacity:100},10000);
        });
		
});

/* ========分析內容=========== */

$(document).ready(function(){
			
    $('.analysis_expand01')
        .click(function(){
            $('#analysis_title01').slideToggle(500);
        });
		
});

$(document).ready(function(){
			
    $('.analysis_expand02')
        .click(function(){
            $('#analysis_title02').slideToggle(500);
        });
		
});

$(document).ready(function(){
			
    $('.analysis_expand03')
        .click(function(){
            $('#analysis_title03').slideToggle(500);
        });
		
});

$(document).ready(function(){
			
    $('.analysis_expand04')
        .click(function(){
            $('#analysis_title04').slideToggle(500);
        });
		
});

$(document).ready(function(){
			
    $('.analysis_expand05')
        .click(function(){
            $('#analysis_title05').slideToggle(500);
        });
		
});

$(document).ready(function(){
			
    $('.analysis_expand06')
        .click(function(){
            $('#analysis_title06').slideToggle(500);
        });
		
});