
function dr(){
    $(document).bind('mousemove',function(e) {
        //判断是否有类名drag可以拖拽
        if($(".block").hasClass("drag")){
            if (!!this.move) {
                var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
                    callback = document.call_down || function() {
                        var L = (e.pageX-posix.x)/20 > 0 ? ''+(e.pageX - posix.x)/20 + 'rem' : 0 + 'rem';//判断左边
                        var R = ($("body").width()-$(this.move_target).width())/20 + 'rem';
                        $(this.move_target).css({
                            'top': (e.pageY - posix.y)/20 > 0 ? ''+(e.pageY - posix.y)/20+'rem' : 0,
                            'left': parseFloat(L) > parseFloat(R) ?  R : L
                        });
                    };

                callback.call(this, e, posix);
            }
        }
        return false;
    }).bind('mouseup',function(e) {
        if (!!this.move) {
            $(".drag").eq(index).css({"opacity":""});
            var callback = document.call_up || function(){};
            callback.call(this, e);
            $.extend(this, {
                'move': false,
                'move_target': null,
                'call_down': false,
                'call_up': false
            });
        }
    });

    //绑定动态插入元素
    $(".content").on('mouseover','.drag',function(){
        window.index = $(".drag").index(this);
        var $box = $('.drag').eq(index).mousedown(function(e) {

        var offset = $(this).offset();
        
        this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};

        $(".drag").eq(index).css({"opacity":"0.8"});

        $.extend(document, {'move': true, 'move_target': this});
    }).on('mousedown', '.coor', function(e) {
        $(".drag").eq(index).css({"opacity":"0.8"});
        var posix = {
                'w': $box.width(),
                'h': $box.height(), 
                'x': e.pageX, 
                'y': e.pageY
            };
            
        
        $.extend(document, {'move': true, 'call_down': function(e) {
        	if(e.pageX > 318 || e.pageX <= 0){
	            if (!!this.move) {
	                $(".drag").eq(index).css({"opacity":""});
	                var callback = document.call_up || function(){};
	                callback.call(this, e);
	                $.extend(this, {
	                    'move': false,
	                    'move_target': null,
	                    'call_down': false,
	                    'call_up': false
	                });
	            }
	        }
            $box.css({
                'width': (e.pageX - posix.x + posix.w) > $(window).width() ? '16rem' : (e.pageX - posix.x + posix.w)/20 +'rem',
                'height': Math.max(30/20, (e.pageY - posix.y + posix.h)/20) + 'rem'
            });
        }});
        return false;
    });
    });
}
