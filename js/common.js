$(document).ready(function() {

        
            window.addEventListener("load", readyFunc2);
            function readyFunc2(){
                Draggable.create(".draggable_div2", {type:"x", edgeResistance:0.64, 
                bounds:"#container_div3", throwProps:true, onDrag:updateFunc, onDragEnd:endFunc});
            }
            function updateFunc(){
                
            }
            var now = 1;
            function endFunc(){
                var basic_location = document.getElementById("content_div3")
                .getBoundingClientRect().left;
                var parent_location = document.getElementById("content_div3")
                .offsetParent.getBoundingClientRect().left;
                var offset_location = document.getElementById("content_div3")
                .offsetLeft;
                var root_location = parent_location+offset_location;
                var relative_location = basic_location - root_location;
                var abs_location = Math.abs(relative_location);
                var child_container_width = document.getElementById("child1_1").getBoundingClientRect().width;
                
                var ban = child_container_width/2.5;
                var left_0;
                if(abs_location <= ban){
                    content0_animation();
                    TweenMax.to("#content_div3" , 1, {x:0, y:0, ease:Circ.easeOut});
                    
                }else if(abs_location <= ban+child_container_width*1){
                    content1_animation();
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*1), y:0, ease:Circ.easeOut});
                
                }else if(abs_location <= ban+child_container_width*2){
                    content2_animation();
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*2), y:0, ease:Circ.easeOut});
                    
                }else if(abs_location <= ban+child_container_width*3){
                    content3_animation();
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*3), y:0, ease:Circ.easeOut});
                    
                }else if(abs_location <= ban+child_container_width*4){
                    content4_animation();
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*4), y:0, ease:Circ.easeOut});
                    
                }else if(abs_location <= ban+child_container_width*5){
                    content5_animation();
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*5), y:0, ease:Circ.easeOut});
                    
                }else if(abs_location <= ban+child_container_width*6){
                    content6_animation();
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*6), y:0, ease:Circ.easeOut});
                    
                }else if(abs_location <= ban+child_container_width*7){
                    content7_animation();
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*7), y:0, ease:Circ.easeOut});
                    
                }else if(abs_location <= ban+child_container_width*8){
                    TweenMax.to("#content_div3" , 1, {x:-(child_container_width*8), y:0, ease:Circ.easeOut});
                    
                }

            }
            $(".slideSelectors > div").css("cursor", "pointer");
            $(".slideSelectors > div").on("click", function(e){
                e.preventDefault();

                $(".slideSelectors > div").removeClass("selected");
                $(this).addClass("selected");

                var child_container_width = document.getElementById("child1_1").getBoundingClientRect().width;
                switch ($(this).index()){

                    case 0:
                        content0_animation();
                    case 1:
                        content1_animation();   
                    case 2:
                        content2_animation(); 
                    case 3:
                        content3_animation();                         
                    case 4:
                        content4_animation();                         
                    case 5:
                        content5_animation();                         
                    case 6:
                        content6_animation();                         
                    case 7:
                        content7_animation();                         
                }
                TweenMax.to("#content_div3" , 1, {x:-(child_container_width*$(this).index()), y:0, ease:Circ.easeOut});
            })

            function content0_animation(){
                $('.content_div_d').delay(1000).animate({
                    opacity: '1'
                })
                $('.dot_bot_d').delay(1100).animate({
                    opacity: '1',
                    bottom: '10px'
                })
                $('.dot_top_d').delay(1100).animate({
                    opacity: '1',
                    top: '10px'
                })
                $('.text0').delay(700).animate({
                    opacity: '1',
                    top: '65px'
                })
                $('.line_d').stop().delay(900).animate({
                    width: '100%'
                },1000)
                $('.menu_click2').css
            };
            
            function content1_animation(){
                $('.content_div_a').delay(1000).animate({
                    opacity: '1'
                })
                $('.dot_bot_a').delay(1100).animate({
                    opacity: '1',
                    bottom: '10px'
                })
                $('.dot_top_a').delay(1100).animate({
                    opacity: '1',
                    top: '10px'
                })
                $('.text1').delay(700).animate({
                    opacity: '1',
                    top: '65px'
                })
                $('.line_a').stop().delay(900).animate({
                    width: '100%'
                },1000)
            };
            function content2_animation(){
                $('.content_div_b').delay(1000).animate({
                    opacity: '1'
                })
                $('.dot_bot_b').delay(1100).animate({
                    opacity: '1',
                    bottom: '10px'
                })
                $('.dot_top_b').delay(1100).animate({
                    opacity: '1',
                    top: '10px'
                })
                $('.text2').delay(700).animate({
                    opacity: '1',
                    top: '65px'
                })
                $('.line_b').stop().delay(900).animate({
                    width: '100%'
                },1000)
            };

            function content3_animation(){
                $('.content_div_c').delay(1000).animate({
                    opacity: '1'
                })
                $('.dot_bot_c').delay(1100).animate({
                    opacity: '1',
                    bottom: '10px'
                })
                $('.dot_top_c').delay(1100).animate({
                    opacity: '1',
                    top: '10px'
                })
                $('.text3').delay(700).animate({
                    opacity: '1',
                    top: '65px'
                })
                $('.line_c').stop().delay(900).animate({
                    width: '100%'
                },1000)
            };

            function content4_animation(){
                $('.about_div1').delay(900).animate({
                    opacity: '1'
                })
                $('.about_div2').delay(1000).animate({
                    opacity: '1'
                })
                $('.text4').delay(700).animate({
                    opacity: '1',
                    top: '65px'
                })
            };

            function content5_animation(){
                $('.text5').delay(700).animate({
                    opacity: '1',
                    top: '65px'
                })

                 /* 능력 박스 */
                $('#box1').delay(1000).animate({
                    height: '380px'
                })
                $('#box2').delay(1000).animate({
                    height: '230px'
                })
                $('#box3').delay(1000).animate({
                    height: '297px'
                })
                $('#box4').delay(1000).animate({
                    height: '230px'
                })
                $('#box5').delay(1000).animate({
                    height: '140px'
                })
                $('#box6').delay(1000).animate({
                    height: '200px'
                })
                $('#box7').delay(1000).animate({
                    height: '140px'
                })

                //능력 텍스트
                $('#txt1, #txt2, #txt3, #txt4, #txt5, #txt6, #txt7').delay(900).animate({
                    bottom: '20px',
                    opacity: '1'
                })

                //능력 퍼센트
                $('.box_title').delay(1300).animate({
                    top: '-30px',
                    opacity: '1'
                })
            };

            function content6_animation(){
                $('.form').delay(1000).animate({
                    opacity: '1'
                })

                $('.text6').delay(700).animate({
                    opacity: '1',
                    top: '65px'
                })
            };

            function content7_animation(){
                $('.copy_txt').delay(800).animate({
                    opacity: '1'
                })
            };


            $("#port_a > li, #port_b > li, #port_c > li").on("mouseover", function(){
                $(this).find(".menu_over").stop().animate({opacity:1},300);
            });

            $("#port_a > li, #port_b > li, #port_c > li").on("mouseout", function(){
                $(this).find(".menu_over").stop().animate({opacity:0},300);
            });

            $(".close").click(function(){
                $(".a_click2_over").stop().animate({"top": "100%"}, 500);
                $(".a_click3_over").stop().animate({"top": "100%"}, 500);
                $(".a_click4_over").stop().animate({"top": "100%"}, 500);
                $(".a_click5_over").stop().animate({"top": "100%"}, 500);
                $(".a_click6_over").stop().animate({"top": "100%"}, 500);
                $(".a_click7_over").stop().animate({"top": "100%"}, 500);
            });

            $(".menu_click2").click(function(){
                console.log("menu2");
            }); 

            $(".slideSelectors > div").on("click", function(){
                console.log("click");
            });

            


            $(".a_click2").click(function(){
                $(".a_click2_over").stop().animate({"top": 0}, 500);
            });
            $(".a_click3").click(function(){
                $(".a_click3_over").stop().animate({"top": 0}, 500);
            });
            $(".a_click4").click(function(){
                $(".a_click4_over").stop().animate({"top": 0}, 500);
            });
            $(".a_click5").click(function(){
                $(".a_click5_over").stop().animate({"top": 0}, 500);
            });
            $(".a_click6").click(function(){
                $(".a_click6_over").stop().animate({"top": 0}, 500);
            });
            $(".a_click7").click(function(){
                $(".a_click7_over").stop().animate({"top": 0}, 500);
            });


            content0_animation();

});