function ifcongif(){

        $.each(swiper,function(index){
            $(".Swselect").append("<option value='"+index+"'>swiper"+index+"</option>");
        });
        
        
        //拖拽缩放
        /*$("#drag").click(function(){
            iframe.$('.block').append('<div class="coor"></div>');
            iframe.$('.coor').css("display","block");
            iframe.dr();
            iframe.$(".drag").mouseup(function(){
                iframe.$('.drag').unbind();
            }); 
        });*/
/*        $("#closeDrag").click(function(){
            iframe.$('.drag').unbind();
            iframe.$('.coor').css("display","none");
        });*/

        //拖拽排序
        $("#star").bind("click",function(){
            window.dad = iframe.$(".content").dad();
        });
        //拖拽排序
        $("#stop").bind("click",function(){
            dad.deactivate();
        });

        //固定定位
        /*$("#Sfixed").bind("click",function(){
            var i = iframe.Dindex;
            iframe.$(".block").eq(i).find('img').css("height","auto");
            if(isFix){
                iframe.$(".block").eq(i).attr("position","悬浮");
                if(iframe.$(".block").eq(i).offset().top > $("#ifr").height()){
                    iframe.$(".block").eq(i).css({"top":"","bottom":"0rem","position":"fixed","z-index":"888888"});
                }else{
                    iframe.$(".block").eq(i).css({"position":"fixed","z-index":""+iframe.Zindex+""});
                }
            }else{
                iframe.$(".block").eq(i).attr("position","无定位");
                iframe.$(".block").eq(i).css({"position":"relative","bottom":""});
            }
            $(".message").eq(0).attr("value",iframe.$('.block').eq(i).attr('position'));
            isFix = !isFix;
        });*/

        //删除块
        /*$("#delete").bind("click",function(){
            var i = iframe.Dindex;
            iframe.$(".block").eq(i).remove();
        });*/
        
        //div下载
        /*$("#alink").bind("click",function(){
            var i = iframe.Dindex;
            if(isDivLink){
                iframe.$(".block").eq(i).attr("onclick","");
                iframe.$(".block").eq(i).addClass("download");
                alert("已为图片块添加下载！");
            }else{
                iframe.$(".block").eq(i).removeClass("download");
                alert("已取消图片块下载！");
            }
            isDivLink = !isDivLink;
        });*/
        //全局下载
        $("#bodyLink").click(function(){
            if(isBodyLink){
                iframe.$("body").attr("onclick","");
                iframe.$("body").addClass("download");
                alert("已添加全页面下载！");
            }else{
                iframe.$("body").removeClass("download");
                alert("已取消全页面下载！");
            }
            isBodyLink = !isBodyLink;
        });

        //查看div
        $("#getDiv").click(function(){
            //判断是否开启查看块
            if(isCheck){
                $("#divSelect").css("display","block").html("");
                iframe.$(".block").each(function(index){
                    $("#divSelect").append("<option>div"+ parseInt(index+1) +"</option>");
                    /*oldZindex  = iframe.$(".block").eq(index).css("z-index") =='auto' ? 0 : iframe.$(".block").eq(index).css("z-index");
                    // console.log(oldZindex);
                    console.log(iframe.$(".block").attr("position"));*/
                });
                
                $("option").on("click",function(){
                    var Oindex = $(this).index();
                    iframe.Dindex = Oindex;
                    $(".message").eq(0).attr("value",Oindex + 1);
                    $(".message").eq(1).attr("value",iframe.$(".block").eq(Oindex).attr("position"));

                    //链接
                    if(iframe.$(".block").eq(Oindex).hasClass('download')){
                        $(".message").eq(2).attr("value","已添加");
                    }else{
                        $(".message").eq(2).attr("value","无");
                    }

                    //层级
                    $(".message").eq(3).attr("value",iframe.$(".block").eq(Oindex).css("z-index"));

                    iframe.$(".block").css({"opacity":"0.2"});
                    iframe.$(".block").eq(Oindex).css({"opacity":"1"});
                });
            }else{
                $("#divSelect").css("display","none");
                iframe.$(".block").css({"opacity":"","filter":""});
            }
            isCheck = !isCheck;
        });

        //清空页面
        $("#cleanUp").click(function(){
            var ifCle = confirm('是否清空页面');
            if(ifCle){
                iframe.$(".content").empty();
            }
        });


        /*$("#addIn").click(function(){
            iframe.addZindex();
        });*/
        /*$("#delIn").click(function(){
            iframe.delZindex();
        });*/
        
}

//插入轮播
function addSwiper (srcArr,selectVal){//传入选择的轮播序号
    window.newArr = srcArr;//swConfig获取图片数组
    //获取与select值相应轮播
    var container = swiper[selectVal].container();
    var js = swiper[selectVal].js();

    parent.container;

    parent.js;

    SWPindex ++;//匹配对应轮播 参照swConfig.js
}

//插入图片
function addImg (imgArr){
    $.each(imgArr,function(index){
        var img = '<img src="'+ imgArr[index] +'">';
        iframe.$(".content").append('<div class="block rank imgBox" position="无定位">'+ img +'</div>');
    });
}

//完成并获取代码
function getCode(){
    /*iframe.$('.imgBox').each(function(index){
        iframe.$('.imgBox').eq(index).css("height",""+iframe.$('.block img').eq(index).height()/20+"rem");
    });*/
    iframe.$(".block").css("background-color","transparent");
    iframe.$(".coor").remove();
    // iframe.$(".block").css("background-color","#fff");
    var frameContent = iframe.$(".body").html();
    return frameContent;
}

//轮播select
function selArr(){
    var val = new Array();
    $(swiper).each(function(index){
        
        val.push("swiper"+parseInt(index+1));
    });
    return val;
}

//增加z-index数值
function addIn(){
    iframe.addZindex();
}

function delIn(){
    iframe.delZindex();
}