function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function change_bottom(channel) {
    if(bottom_info(channel)) {
        $(".footer").html(bottom_info(channel));
    } else {
        $(".footer").html(bottom_info('default'));
    }

    
}

function change_package_download_url(type) {


    if(package_info(type)) {

        $(".download").attr("onclick","window.location.href='"+ package_info(type) +"'");
    } else {
        document.getElementsByClassName("calling_label1").href = package_info("default");
       
    }

    var Request = new Object();
    Request = GetRequest();
    ry_post(Request['ry']);//热云链接
}

function ry_post(str){
    if(ry_config(str)){
        var ryUrl = ry_config(str);
        $.ajax({
            url: ryUrl,
            type: 'get',
            contentType:"application/x-www-form-urlencoded",
            dataType: 'jsonp',
            success: function(){
                console.log('success');
            },
            error: function(XMLHttpRequest,textStatus){
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }
        });
    }  
}
