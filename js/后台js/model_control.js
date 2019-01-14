//禁止浏览器右键
$(document).bind("contextmenu",function(e){
    return false;
});


//拖拽排序
$( '.body' ).DDSort({
	target: '.rank',		
	floatStyle: {
		'border': '1px solid #ccc',
		'background-color': '#fff'
	}
});
// setInterval(function(){console.log($(".abc").position().top - $(window).scrollTop());},1000);

// 左键点击 右键菜单
$(".body").on("mousedown",".block",function(ev) {
	Dindex = $(this).index();
	var e = ev || window.evnet;
	// 显示信息
	$(".message", window.parent.document).eq(0).attr("value",Dindex+1);

	$(".message", window.parent.document).eq(1).attr("value",$(this).attr("position"));

	//链接
	if($(this).hasClass('download')){
		$(".message", window.parent.document).eq(2).attr("value","已添加");
	}else{
		$(".message", window.parent.document).eq(2).attr("value","无");
	}
	// $(this).css("filter","brightness(.5)");

	//层级
	$(".message", window.parent.document).eq(3).attr("value",$(this).css("z-index"));


	// 右键
    if (e.which == 3) {

		if($(".message", window.parent.document).eq(0).attr("value") != oldIndex){
			$("#contextMenu").hide();
		}

		oldIndex = $(".message", window.parent.document).eq(0).attr("value");

		$("#contextMenu").hide();

		var St = $(window).scrollTop(),
			Ch = $(window).height(),
			ContextMenuT,
			ContextMenuH = $('#contextMenu').outerHeight();

		//判断右键菜单向上还是向下显示
		if(e.pageY + ContextMenuH > Ch + St){
			ContextMenuT = e.pageY - ContextMenuH;
		}else{
			ContextMenuT = e.pageY;
		}
		$("#contextMenu").css("top",""+ ContextMenuT / htmlFontSize +"rem").show(100);

		tipTop = e.pageY / htmlFontSize;//下载链接提示

    }
    //左键
    else if(e.which == 1){

		if($(".message", window.parent.document).eq(0).attr("value") != oldIndex){
			$("#contextMenu").hide();
		}
    }

    e.stopPropagation();

});


// 取消选中
$(document).click(function(){
	$("#contextMenu").hide();
});
$(parent.document).click(function(){
	if(parent.isCheck){
		$("#contextMenu").hide();
	}
});
	


// 运行拖拽
function Rdrag(){
	dr();
	$this = $('.block').eq(Dindex);

	var top = $this.offset().top,
        left = $this.offset().left,
        height = $this.outerHeight(),
        width = $this.outerWidth();
	
	$this.append('<div class="coor"></div>');

	$this.css({"position":"absolute","top":""+ top/20 +"rem","left":""+ left/20 +"rem","width":""+ width/20 +"rem","height":""+ height/20 +"rem"}).attr("position","可覆盖定位").removeClass("rank isfixed").addClass('drag');

	// $this.find(".fixScript").remove();

	if( $(".block").hasClass("isfixed") ){
		return;
	}else{
		$(".fixScript").remove();
	}

	$(".message", window.parent.document).eq(1).attr("value",$this.attr("position"));


}

// 固定定位
function Rfix(){
	
	var i = Dindex;

	var script = '<script class="fixScript">$(function() {var olArr = [],oFixL = 0;$.each($(".isfixed"),function(){	oFixL = $(this).offset().left / parseInt($("html").css("font-size"));olArr.push(oFixL);});function setFix(){var wW = $(window).width(),bW = $("body").width(),oL = 0,nL = 0;$.each($(".isfixed"),function(index){oL = olArr[index];nL = ( ( wW - bW )/2 )/ parseInt( $("html").css("font-size") ) + oL;$(this).css("left","" +nL+ "rem");});}setFix();window.addEventListener("resize", function() { setFix(); });});<\/script>';

	$this = $(".block").eq(i);

	if($this.offset().left == 0){
		$this.css("left",0+"rem")
	}

    $this.unbind();
    $this.addClass("isfixed");

    var scrT = $(window).scrollTop(),
    	winH = $(window).height(),
    	Ctop,
    	wH,
    	Cbottom;

    Ctop = $this.offset().top - scrT;//求出元素块在可视区的高度

    wH = winH - $this.height(); //wH=0为元素贴住可视区底部

    $this.attr("position","悬浮").removeClass("drag rank");

    $this.find(".coor").remove();//清除拖拽缩放右下角

    if( Ctop >= wH ){//判断top大于(可视区高-元素高)直接设置为bottom0
        $this.css({"top":"","bottom":"0rem","position":"fixed"});
    }else if( Ctop <= 0 ){
    	$this.css({"top":"0rem","bottom":"","position":"fixed"});
    }else if( Ctop < winH /2 ){
        $this.css({"top":""+ Ctop / 20 +"rem","bottom":"","position":"fixed"});
    }else{
    	Cbottom = winH - Ctop - $this.height();
    	$this.css({"bottom":""+ Cbottom / 20 +"rem","top":"","position":"fixed"})
    }
    

    $(".message").eq(0).attr("value",$('.block').eq(i).attr('position'));

    $(".message", window.parent.document).eq(1).attr("value",$this.attr("position"));
	
    if($("script").hasClass("fixScript")){
		return;
	}else{
		$(".footer").append(script);
	}

}

//恢复排序
function Bdad(){
	var i = Dindex;

	$this = $(".block").eq(i);
	$this.unbind();
	$this.css({"position":"relative","top":"","left":"","bottom":"","right":"","z-index":""}).attr("position","无定位").removeClass("drag isfixed").addClass("rank");
	// $this.find(".fixScript").remove();

	if( $(".block").hasClass("isfixed") ){
		return;
	}else{
		$(".fixScript").remove();
	}

	$(".message", window.parent.document).eq(1).attr("value",$this.attr("position"));
	$('.coor').remove();

}

//删除
function Ddiv(){
    var i = Dindex;
	$(".block").eq(i).remove();

	if( $(".block").hasClass("isfixed") ){
		return;
	}else{
		$(".fixScript").remove();
	}
}

//下载链接
function Slink(){
	var i = Dindex;

	$(".block").eq(i).attr("onclick","").addClass("download");

    $(".tips").css("top",""+ tipTop +"rem").fadeIn(100).fadeOut(1800);

    $(".message", window.parent.document).eq(2).attr("value","已添加");
}
//取消链接
function Dlink(){
	var i = Dindex;

	$(".block").eq(i).removeClass("download");

    $(".Dtips").css("top",""+ tipTop +"rem").fadeIn(100).fadeOut(1800);

    $(".message", window.parent.document).eq(2).attr("value","无");
}

// 添加缩放
function Sanimation(type){
	var i = Dindex,
		thisblock = $(".block").eq(i);
	if( thisblock.hasClass(type) ){
		thisblock.removeClass(type);
	}else{
		thisblock.addClass(type);
	}
}

function addZindex(){
	var i = $(".message", window.parent.document).eq(0).attr("value") - 1;
	$this = $(".block").eq(i);
	var oZindex = $this.css("z-index") == "auto" ? 0 : $this.css("z-index");
	$this.css("z-index",parseInt(oZindex)+1);
	$(".message", window.parent.document).eq(3).attr("value",$this.css("z-index"));
}

function delZindex(){
	$this = $(".block").eq(Dindex);
	var oZindex = $this.css("z-index") == "auto" ? 0 : $this.css("z-index");
	$this.css("z-index",oZindex-1);
	$(".message", window.parent.document).eq(3).attr("value",$this.css("z-index"));
}