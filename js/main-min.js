$(document).ready(function(){function t(){$(".clock-circle").each(function(t){var t=t+1,e=$(this).data("timezone"),i=moment().utcOffset(e),n=6*i.seconds(),o=6*i.minutes()+n/60,a=i.hours()%12/12*360+90+o/12;$("#hour"+t).css("transform","rotate("+a+"deg)"),$("#minute"+t).css("transform","rotate("+o+"deg)"),$("#second"+t).css("transform","rotate("+n+"deg)")})}function e(){t(),setTimeout(e,1e3)}var i=$("#list-hero-hp > li").length,n=Math.floor(Math.random()*i)+1,o=$("#list-hero-hp").find("li:nth-child("+n+")").text();$(".hero--hp").css("background-image","url("+o+")");var a=$("#list-hero-404 > li").length,s=Math.floor(Math.random()*a)+1,r=$("#list-hero-404").find("li:nth-child("+s+")").text();$(".hero--404").css("background-image","url("+r+")");var h=$("article.content-blog-post").readingtime();$(".read-time").text(h>0?h+" min read":"1 min read");var c="current_page_item current-menu-item";if(($("#single-work").length||$("#our-work").length)&&$("#menu-item-1325, #menu-item-1324, #menu-item-1356, #menu-item-1357").addClass(c),($("#single-post").length||$("#blog").length)&&$("#menu-item-1109, #menu-item-26, #menu-item-1110").addClass(c),$(".navbar-toggle").click(function(){$("#menu-overlay").fadeToggle(300)}),$("#menu-overlay").click(function(){$(this).fadeOut(300)}),window.location.hash){var l=window.location.hash.substring(1);"scrolltoform"==l&&setTimeout(function(){$("html, body").animate({scrollTop:$("#send-message").offset().top},2e3,"easeOutCubic")},500)}if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($(".core-cards a").click(function(t){t.preventDefault();var e=$(this),i=e.attr("href");setTimeout(function(){window.location.href=i},1200)}),$(".team-list .member-img-box").click(function(){$(this).toggleClass("hovered")})),$("body").hasClass("page-template-what_we_do")&&particlesJS("particles-js",{particles:{color:"#fff",color_random:!1,shape:"triangle",opacity:{opacity:.2,anim:{enable:!1,speed:1.5,opacity_min:0,sync:!1}},size:5,size_random:!0,nb:100,line_linked:{enable_auto:!0,distance:140,color:"#fff",opacity:.3,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},anim:{enable:!0,speed:1}},interactivity:{enable:!1,mouse:{distance:250},detect_on:"canvas",mode:"grab",line_linked:{opacity:.2},events:{onclick:{enable:!0,mode:"push",nb:4},onresize:{enable:!0,mode:"out",density_auto:!1,density_area:800}}},retina_detect:!0}),$("body").hasClass("page-template-about")){var d=function(t,e){this.stageConfig=t,this.particleConfig=e},u=d.prototype;u.draw=function(){this.stageConfig.context.fillStyle="#3d78ce",this.stageConfig.context.beginPath(),this.stageConfig.context.arc(this.particleConfig.x,this.particleConfig.y,this.particleConfig.r,0,2*Math.PI,!1),this.stageConfig.context.fill()};var f=function(){this.init()},p=f.prototype;p.init=function(){this.setupHandlers().layout().createParticls().render()},p.setupHandlers=function(){return this.renderHandler=this.render.bind(this),this},p.layout=function(){var t=document.createElement("canvas");t.width=$("#particles-about").width(),t.height=$("#particles-about").height();var e=t.getContext("2d"),i=t.width/2,n=t.height/2;return this.stageConfig={stage:t,context:e,centerX:i,centerY:n},document.getElementById("particles-about").appendChild(this.stageConfig.stage),this.particleStore=[],this},p.createParticls=function(){for(var t=0,e=120;e>t;t++)this.particleStore.push({x:0,y:0,r:4*Math.random(),angle:360*Math.random(),speed:.01*Math.random()-.005,rad:Math.random()*this.stageConfig.centerX});return this},p.render=function(){this.update(),this.draw(),window.requestAnimationFrame(this.renderHandler)},p.update=function(){for(var t=0,e=this.particleStore.length;e>t;t++)this.particleStore[t].x=this.stageConfig.centerX+Math.cos(this.particleStore[t].angle)*this.particleStore[t].rad,this.particleStore[t].y=this.stageConfig.centerY+Math.sin(this.particleStore[t].angle)*this.particleStore[t].rad,this.particleStore[t].angle+=this.particleStore[t].speed},p.draw=function(){this.stageConfig.context.clearRect(0,0,this.stageConfig.stage.width,this.stageConfig.stage.height);for(var t=0,e=this.particleStore.length;e>t;t++){var i=new d(this.stageConfig,this.particleStore[t]);i.draw()}},new f,$(window).resize(function(){$("#particles-about canvas").remove(),new f})}if(null!==document.getElementById("c-contact")){var m=100,g=60,w=-1,v="rgba(233, 233, 234, 1)",y=2,b=function(t){0!==t.length&&(this.$element=t,this.lastTimeStamp=null,this.particles=[],this.init())},p=b.prototype;p.init=function(){this.createChildren().layout().enable()},p.createChildren=function(){return this.canvas=this.$element[0],this.context=this.canvas.getContext("2d"),this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.lastTimeStamp=(new Date).getTime(),this},p.layout=function(){return window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}(),this},p.removeChildren=function(){return this.context=null,this.canvasWidth=null,this.canvasHeight=null,this.lastTimeStamp=null,this},p.enable=function(){this.createParticleData(),this.renderLoop()},p.createParticleData=function(){for(var t=0,e=m;e>t;t++)this.particles[t]={},this.setParticleData(this.particles[t])},p.setParticleData=function(t){t.x=Math.random()*this.canvasWidth,t.y=Math.random()*this.canvasHeight,t.vx=Math.random()-.5,t.vy=Math.random()-.5},p.update=function(){for(var t=0,e=m;e>t;t++){var i=this.particles[t];i.x+=i.vx,i.y+=i.vy,i.x>this.canvasWidth?(i.x=this.canvasWidth,i.vx*=w):i.x<0&&(i.x=0,i.vx*=w),i.y>this.canvasHeight?(i.y=this.canvasHeight,i.vy*=w):i.y<0&&(i.y=0,i.vy*=w)}},p.draw=function(){var t=0;if(this.context)for(this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.strokeStyle=v;m>t;t++){var e=this.particles[t];this.context.save(),this.context.beginPath(),this.context.arc(e.x,e.y,y,0,2*Math.PI),this.context.stroke(),this.context.restore()}},p.renderLoop=function(){requestAnimationFrame(this.renderLoop.bind(this)),this.update(),this.draw()};var x=new b($("#c-contact"))}e(),$(".navbar").headroom({offset:50,tolerance:-5,classes:{initial:"slide",pinned:"slide--reset",unpinned:"slide--up"},onTop:function(){$(".navbar").removeClass("navbar--nav-white"),$("#fakeNavBar").fadeOut(600)},onPin:function(){var t=$(window).scrollTop(),e=$("body").hasClass("home");e&&270>t?($(".navbar").removeClass("navbar--nav-white"),$("#fakeNavBar").hide()):($(".navbar").addClass("navbar--nav-white"),$("#fakeNavBar").show())}}),$(".js-scrollTo").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}}),$("#message").keyup(function(){$(this).val()?($(this).height(0),$(this).height(this.scrollHeight+55)):$(this).height(55)}),$("#message").keyup();var C=$(".shape-pos1").offset().top,k=$(".shape-pos2").offset().top,S=$(".shape-pos3").offset().top,T=$(".shape-pos4").offset().top,M=$(".shape-pos5").offset().top,P=$(".shape-pos6").offset().top,A=$(".shape-pos7").offset().top;$(window).scroll(function(){var t=$(this).scrollTop();$(".shape-pos1").offset({top:C+t/50}),$(".shape-pos2").offset({top:k+t/60}),$(".shape-pos3").offset({top:S-t/50}),$(".shape-pos4").offset({top:T+t/60}),$(".shape-pos5").offset({top:M-t/50}),$(".shape-pos6").offset({top:P+t/60}),$(".shape-pos7").offset({top:A-t/50})})}),null!==document.getElementById("world")&&!function(){function t(){r.fillStyle=h,r.fillRect(0,0,window.innerWidth,window.innerHeight)}function e(){this.x=Math.random()*window.innerWidth,this.y=Math.random()*window.innerHeight,this.vx=-1+1*Math.random(),this.vy=-1+1*Math.random(),this.radius=particleRadius;var t=colors[Math.floor(Math.random()*colors.length)];this.color={r:t.r,g:t.g,b:t.b},this.blur=Math.floor(-7*Math.random()+9)/10,this.draw=function(){r.fillStyle="white",r.beginPath(),r.rect(this.x-3,this.y-3,6,6),r.fillStyle="rgb("+this.color.r+", "+this.color.g+", "+this.color.b+")",r.fill()}}function i(){t();for(var e=0;e<particles.length;e++){var i=particles[e];i.draw()}n()}function n(){for(var t=0;t<particles.length;t++){var e=particles[t];e.x+=e.vx,e.y+=e.vy,e.x>window.innerWidth+e.radius?e.x=e.radius:e.x<0-e.radius&&(e.x=window.innerWidth-e.radius),e.y>window.innerHeight+e.radius?e.y=e.radius:e.y<0-e.radius&&(e.y=window.innerHeight-e.radius);for(var i=t+1;i<particles.length;i++){var n=particles[i];o(e,n)}}}function o(t,e){var i,n=t.x-e.x,o=t.y-e.y,i=Math.sqrt(n*n+o*o);if(minDist>=i){if(JSON.stringify(t.color)!=JSON.stringify(e.color)){r.beginPath();var a=r.createLinearGradient(t.x,t.y,e.x,e.y);a.addColorStop("0","rgb("+t.color.r+", "+t.color.g+", "+t.color.b+")"),a.addColorStop("1.0","rgb("+e.color.r+", "+e.color.g+", "+e.color.b+")"),r.strokeStyle=a,r.moveTo(t.x,t.y),r.lineTo(e.x,e.y),r.lineWidth=2,r.stroke(),r.closePath()}var s=n/(1e3*velocity),h=o/(1e3*velocity);t.vx-=s,t.vy-=h,e.vx+=s,e.vy+=h}}function a(){i(),requestAnimFrame(a)}function s(){c.width=$("#particles-blog").width(),c.height=$("#particles-blog").height(),r=document.getElementById("world").getContext("2d"),particleCount=50,particles=[],particleRadius=5,minDist=50,velocity=5,colors=[{r:44,g:51,b:58},{r:56,g:62,b:68},{r:44,g:51,b:58}];for(var t=0;particleCount>t;t++)particles.push(new e);a()}var r,h="rgb(33,40,47)",c=document.getElementById("world");window.onload=function(t){s()},window.onresize=function(t){c.width=$("#particles-blog").width(),c.height=$("#particles-blog").height()},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()}(window),null!==document.getElementById("canvas-work")&&function(){var t,e,i,n,o,a,s,r,c,l,d,u,f;i=10,t=[[255,255,255],[181,184,187],[255,255,255],[181,184,187],[69,202,88]],n=2*Math.PI,o=document.getElementById("canvas-work"),s=o.getContext("2d"),window.w=$("#particles-work").width(),window.h=$("#particles-work").height(),$("#particles-work #canvas-work").hide(),window.resizeWindow=function(){return window.w=o.width=$("#particles-work").width(),$("#particles-work #canvas-work").show(),window.h=o.height=$("#particles-work").height()},window.addEventListener("resize",resizeWindow,!1),window.onload=function(){return setTimeout(resizeWindow,0)},u=function(t,e){return(e-t)*Math.random()+t},r=function(t,e,i,n){return s.beginPath(),s.moveTo(t,e),s.lineTo(t+10,e+10),s.lineTo(t,e+20),s.lineTo(t-10,e+10),s.lineTo(t,e),s.lineWidth=1,s.strokeStyle=n,s.stroke()},c=function(t,e,i,n){return s.beginPath(),s.moveTo(t,e),s.lineTo(t+10,e+10),s.lineTo(t+10,e),s.closePath(),s.fillStyle=n,s.fill()},l=function(t,e,i,n){return s.beginPath(),s.moveTo(t,e),s.lineTo(t+10,e+10),s.lineTo(t+10,e),s.closePath(),s.fillStyle=n,s.fill()},f=.5,document.onmousemove=function(t){},window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,5)}}(),e=function(){function e(){this.style=t[~~u(0,5)],this.rgb="rgba("+this.style[0]+","+this.style[1]+","+this.style[2],this.r=~~u(2,0),this.r2=1*this.r,this.replace()}return e.prototype.replace=function(){return this.opacity=0,this.dop=.01*u(1,5),this.x=u(-this.r2,w-this.r2),this.y=u(-10,h-this.r2),this.xmax=w-this.r,this.ymax=h-this.r,this.vx=u(0,2)+8*f-5,this.vy=.7*this.r+u(-2,1)},e.prototype.draw=function(){var t;return this.x+=this.vx,this.y+=this.vy,this.opacity+=this.dop,this.opacity>1&&(this.opacity=1,this.dop*=-1),(this.opacity<0||this.y>this.ymax)&&this.replace(),0<(t=this.x)&&t<this.xmax||(this.x=(this.x+this.xmax)%this.xmax),r(~~this.x,~~this.y,this.r,this.rgb+","+this.opacity+")"),l(.5*~~this.x,~~this.y,this.r,this.rgb+","+this.opacity+")"),c(1.5*~~this.x,1.5*~~this.y,this.r,this.rgb+","+this.opacity+")")},e}(),a=function(){var t,n,o;for(o=[],d=t=1,n=i;n>=1?n>=t:t>=n;d=n>=1?++t:--t)o.push(new e);return o}(),window.step=function(){var t,e,i,n;for(requestAnimationFrame(step),s.clearRect(0,0,w,h),n=[],e=0,i=a.length;i>e;e++)t=a[e],n.push(t.draw());return n},step()}.call(this);