let 封装API = {
    uiView:null,
    name:null,
    aVersion:device.release.split("."),
    随机数:function (a,b){
    let exists = {};
    for(let i = 0; i < 1; i++){
        let r;
        do{
            r = random(a, b);
        }while(exists[r]);
        exists[r] = true;
        return r}
    }, //不封装则为随机数不重复
    等待 : function(a,b){
        if(b==null){
            sleep(a+random(0,200));
        }
        else{
            t = random(a,b);
            sleep(t);
        }
    },
    随机上滑 : function(){
        let rdm = new java.util.Random();
        let kd = rdm.nextInt(100);
        let dd = rdm.nextInt (300) / 100.0;
        let s = rdm.nextInt(1000) + 1000;
        封装API.swipe(this.随机范围(400,600) + dd,this.随机范围(1000,1200) + kd,this.随机范围(300,500) - dd,this.随机范围(400,600) - kd,s);
    },
    快速上滑 : function(){
        let rdm = new java.util.Random();
        let kd = rdm.nextInt(100);
        let dd = rdm.nextInt (300) / 100.0;
        let s = rdm.nextInt(400) + 400;
        封装API.swipe(this.随机范围(400,600) + dd,this.随机范围(1000,1200) + kd,this.随机范围(300,500) - dd,this.随机范围(400,600) - kd,s);
    },
    随机下滑 : function(){
        let rdm = new java.util.Random();
        let kd = rdm.nextInt(100);
        let dd = rdm.nextInt (300) / 100.0;
        let s = rdm.nextInt(1000) + 1000;
        封装API.swipe(this.随机范围(400,600) + dd,this.随机范围(400,600) + kd,this.随机范围(300,500) - dd,this.随机范围(1000,1200) - kd,s);
    },
    随机左滑 : function(){
        let X1 = 封装API.随机数(800,1000);
        let Y1 = 封装API.随机数(800,1000);
        let X2 = 封装API.随机数(100,300);
        let Y2 = 封装API.随机数(800,1000);
        let time = 封装API.随机数(1000,2000)
        封装API.swipe(X1,Y1,X2,Y2,time);
    },
    快速左滑 : function(){
        let X1 = 封装API.随机数(800,1000);
        let Y1 = 封装API.随机数(800,1000);
        let X2 = 封装API.随机数(100,300);
        let Y2 = 封装API.随机数(800,1000);
        let time = 封装API.随机数(200,500)
        封装API.swipe(X1,Y1,X2,Y2,time);
    },
    随机右滑 : function(){
        let X1 = 封装API.随机数(100,300);
        let Y1 = 封装API.随机数(800,1000);
        let X2 = 封装API.随机数(800,1000);
        let Y2 = 封装API.随机数(800,1000);
        let time = 封装API.随机数(1000,2000)
        封装API.swipe(X1,Y1,X2,Y2,time);
    },
    快速右滑 : function(){
        let X1 = 封装API.随机数(100,300);
        let Y1 = 封装API.随机数(800,1000);
        let X2 = 封装API.随机数(800,1000);
        let Y2 = 封装API.随机数(800,1000);
        let time = 封装API.随机数(200,500)
        封装API.swipe(X1,Y1,X2,Y2,time);
    },
    随机范围:function(a,b){
        if(a > b) {let t = a; a = b; b = t;}
        let rdm = new java.util.Random();
        return a + rdm.nextInt(b-a);
    },
    id : function(text){
        封装API.name = text;
        封装API.uiView = id(text).findOne(2000);
        return 封装API;
    },
    id1 : function(text){
        封装API.name = text;
        封装API.uiView = id(text).findOnce();
        return 封装API;
    },
    idCon : function(text){
        封装API.name = text;
        封装API.uiView = idContains(text).findOne(2000);
        return 封装API;
    },
    desc : function(text){
        封装API.name = text;
        封装API.uiView = desc(text).findOne(2000);
        return 封装API;
    },
    desc1 : function(text){
        封装API.name = text;
        封装API.uiView = desc(text).findOnce();
        return 封装API;
    },
    descCon : function(text){
        封装API.name = text;
        封装API.uiView = descContains(text).findOne(2000);
        return 封装API;
    },
    text : function(string){
        封装API.name = string;
        封装API.uiView = text(string).findOne(2000);
        return 封装API;
    },
    text1 : function(string){
        封装API.name = string;
        封装API.uiView = text(string).findOnce();
        return 封装API;
    },
    textCon :  function(string){
        封装API.name = string;
        封装API.uiView = textContains(string).findOne(2000);
        return 封装API;
    },
    textCon1 :  function(string){
        封装API.name = string;
        封装API.uiView = textContains(string).findOnce();
        return 封装API;
    },
    className1 :  function(string){
        封装API.name = string;
        封装API.uiView = className(string).findOnce();
        return 封装API;
    },
    getView:function(){
        return this.uiView;
    },
    getText:function(){
        if(this.uiView == null) return "";
        return this.uiView.text();
    },
    setView : function(view){
        this.uiView = view;
        return this;
    },
    click : function(){
        if(this.uiView == null){
            console.log(this.name + "===>没有找到");
            return false;
        }
        else{
            if(this.uiView.clickable()==true){
                封装API.uiView.click();
            }
            else{
                if(封装API.aVersion[0] >= "7"){
                    console.log(this.name + "===>开始点击");
                    let widget = 封装API.uiView;
                    this.等待(100,500);
                    if(widget.bounds().centerX() >= 0 && widget.bounds().centerY() >= 0){
                        click(widget.bounds().centerX(), widget.bounds().centerY());
                    }
                    else{console.log(this.name + "===>坐标为负,无法点击");}
                }else if(封装API.aVersion[0] < "7"){
                    console.log(this.name + "===>开始点击");
                    let widget = 封装API.uiView;
                    ra = new RootAutomator();
                    if(widget.bounds().centerX() >= 0 && widget.bounds().centerY() >= 0){
                        ra.press(widget.bounds().centerX(), widget.bounds().centerY(),200);
                        sleep(500);
                        ra.exit();
                    }
                    else{console.log(this.name + "===>坐标为负,无法点击");}
                }
            }
        }
    },
    press:function(x,y,time){
        if(time == null) time = 200;
        if(封装API.aVersion[0] >= "7"){
            press(x,y,time);
            sleep(500);
        }
        else if(封装API.aVersion[0] < "7"){
            ra = new RootAutomator();
            ra.press(x,y,time);
            sleep(500);
            ra.exit();
        }
    },
    clickParent:function(uiView){
        if(uiView == null) return false;
        if(typeof uiView == "string"){

        }else{
            while(uiView.click() == false){
                uiView = uiView.parent();
            }
            return true;
        }
        return false;
    },  
    longClickParent:function(uiView){
        if(uiView == null) return false;
        if(typeof uiView == "string"){

        }
        else{
            while(uiView.longClick() == false){
                uiView = uiView.parent();
            }
            return true;
        }
        return false;
    },  
    randomSwipe:function (sx,sy,ex,ey){
        //设置随机滑动时长范围
        var timeMin=500
        var timeMax=1500
        //设置控制点极限距离
        var leaveHeightLength=500
        
        //根据偏差距离，应用不同的随机方式
        if(Math.abs(ex-sx)>Math.abs(ey-sy)){
            var my=(sy+ey)/2
            var y2=my+random(0,leaveHeightLength)
            var y3=my-random(0,leaveHeightLength)
        
            var lx=(sx-ex)/3
            if(lx<0){lx=-lx}
            var x2=sx+lx/2+random(0,lx)
            var x3=sx+lx+lx/2+random(0,lx)
        }else{
            var mx=(sx+ex)/2
            var y2=mx+random(0,leaveHeightLength)
            var y3=mx-random(0,leaveHeightLength)
    
            var ly=(sy-ey)/3
            if(ly<0){ly=-ly}
            var y2=sy+ly/2+random(0,ly)
            var y3=sy+ly+ly/2+random(0,ly)
        }
    
        //获取运行轨迹，及参数
        var time=[0,random(timeMin,timeMax)]
        var track=this.bezierCreate(sx,sy,x2,y2,x3,y3,ex,ey)
        
        //滑动
        gestures(time.concat(track))
        console.hide()
    },
    swipe : function(x1,y1,x2,y2,time){
        if(封装API.aVersion[0] >= "7"){
                if(x2-x1<=10){
                    var XR1 = x1+random(-10,10)
                }
                else{
                    var XR1 = random((x2-x1)/4,(x2-x1)/2)
                }
                if(y2-y1<=10){
                    var YR1 = y1+random(-10,10)
                }
                else{
                    var YR1 = random((y2-y1)/4,(y2-y1)/2)
                }
                gesture(time/2,[x1,y1],[XR1,YR1],[x2,y2])
        }else{
            var ra = new RootAutomator();
            ra.swipe(x1,y1,x2,y2,time);
            sleep(2000); 
            ra.exit()
        }
    },
    超级点击:function(变量){
        if(desc(变量).exists()==true){this.封装API.desc(变量).click()}
        else if(text(变量).exists()==true){this.封装API.text(变量).click()}
    },
    bezierCreate:function(x1,y1,x2,y2,x3,y3,x4,y4){
        //构建参数
        var h=100;
        var cp=[{x:x1,y:y1+h},{x:x2,y:y2+h},{x:x3,y:y3+h},{x:x4,y:y4+h}];
        var numberOfPoints = 100;
        var curve = [];
        var dt = 1.0 / (numberOfPoints - 1);
        
        //计算轨迹
        for (var i = 0; i < numberOfPoints; i++){
            var ax, bx, cx;
            var ay, by, cy;
            var tSquared, tCubed;
            var result_x, result_y;
        
            cx = 3.0 * (cp[1].x - cp[0].x);
            bx = 3.0 * (cp[2].x - cp[1].x) - cx;
            ax = cp[3].x - cp[0].x - cx - bx;
            cy = 3.0 * (cp[1].y - cp[0].y);
            by = 3.0 * (cp[2].y - cp[1].y) - cy;
            ay = cp[3].y - cp[0].y - cy - by;
        
            var t=dt*i
            tSquared = t * t;
            tCubed = tSquared * t;
            result_x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
            result_y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
            curve[i] = {
                x: result_x,
                y: result_y
            };
        }
    
        //轨迹转路数组
        var array=[];
        for (var i = 0;i<curve.length; i++) {
            try {
                var j = (i < 100) ? i : (199 - i);
                xx = parseInt(curve[j].x)
                yy = parseInt(Math.abs(100 - curve[j].y))
            } catch (e) {
                break
            }
            array.push([xx, yy])
        }
        
        return array
    }
}
module.exports = 封装API
