iframeWin=null;//初始化iframe 句柄 ###重要
                layer.open({
                  title:'插入元素',
                  btn:['刷新','新增元素','插入轮播','搜索</a><div style="height:15px"  class="layui-input-inline"><input id="search" placeholder="内容关键字" class="form-control" ></div>'],
                  btn1:function(){
                      iframeWin.location.reload()
                  },
                  btn2:function(){
                      layer.open({
                          title:'新增元素',
                          type: 1,
                          area: ['30%', '250px'],
                          shadeClose: true, //开启遮罩关闭
                          content: '<input class="form-control fodder_name" placeholder="标题" type="text"><input  class="form-control fodder_url" placeholder="素材连接" type="text">',
                          btn:['确认','取消'],
                          btn1:function(){
                            var str=$('.fodder_url').val();
                            //str.replace(/jd-game-packages.oss-cn-beijing.aliyuncs.com/, "anydown.1017sy.cn")
                            $.post("/index.php/Home/Ground/save_fodder.html",{
                                    fodder_name:$('.fodder_name').val(),
                                    fodder_url:str
                                },function(data){
                            },'json')
                          }
                        });
                      return false;
                  },
                   btn3:function(layero, index){
                        if(fodder_src==false){
                            layer.msg('未选择图片', function(){});
                            return false;
                        }
                        var banner_btn_html='';
                        var banner_btn=selArr();
                        for(var i in banner_btn){
                            banner_btn_html+='<button onclick="add_banner('+i+',\''+escape(JSON.stringify(layero))+'\')" >swiper'+(parseInt(i)+1)+'</button>';
                        }
                        fodder_banner_obj = layer.alert(banner_btn_html, {time: 0, title:'选择轮播样式',btn:['关闭'], end:function(){
                                fodder_banner_obj=null;
                        }})
                    return false;
                  },
                  btn4:function(layero, index){
                    
                    layer.iframeSrc(layero, '/index.php/Home/Ground/illustrate.html?search='+$('#search').val())
                    return false;
                  },
                 
                  success:function(layero, index){
                      iframeWin = window[layero.find('iframe')[0]['name']]; //加载完毕获取iframe 索引
                  },
                  end:function(){
                    for(var i in fodder_src){
                        addImg(fodder_src[i])
                    }
                    fodder_src=[];
                    iframeWin=null;//释放iframe 句柄 ###重要
                  },
                  type: 2,
                  area: ['720px', '450px'],
                  fixed: false, //不固定
                  maxmin: true,
                  content: "/index.php/Home/Ground/illustrate.html"
                });
            })