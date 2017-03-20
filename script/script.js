jsPlumb.ready(function() {
//jsPlumb.bind("ready",function(){
	var defaultConfig = {
		Anchor : "BottomCenter",//端点的定位点的位置声明（锚点）：left，top，bottom等
		Anchors : [ null, null ],//多个锚点的位置声明
		ConnectionsDetachable   : true,//连接是否可以使用鼠标默认分离
		ConnectionOverlays  : [],//附加到每个连接的默认重叠
		Connector : "Bezier",//要使用的默认连接器的类型：折线，流程等
		Container : '#testParent',//设置父级的元素，一个容器
		DoNotThrowErrors  : false,//如果请求不存在的Anchor，Endpoint或Connector，是否会抛出
		DragOptions : { },//用于配置拖拽元素的参数
		DropOptions : { },//用于配置元素的drop行为的参数
		Endpoint : "Dot",//端点（锚点）的样式声明（Dot）
		Endpoints : [ null, null ],//多个端点的样式声明（Dot）
		EndpointOverlays : [ ],//端点的重叠
		EndpointStyle : { fill : "#456" },//端点的css样式声明
		EndpointStyles : [ null, null ],//同上
		EndpointHoverStyle : null,//鼠标经过样式
		EndpointHoverStyles : [ null, null ],//同上
		HoverPaintStyle : null,//鼠标经过线的样式
		LabelStyle : { color : "black" },//标签的默认样式。
		LogEnabled : false,//是否打开jsPlumb的内部日志记录
		Overlays : [ ],//重叠
		MaxConnections : 1,//最大连接数
		PaintStyle : { lineWidth : 8, stroke : "#456" },//连线样式
		ReattachConnections : false,//是否重新连接使用鼠标分离的线
		RenderMode : "svg",//默认渲染模式
		Scope : "jsPlumb_DefaultScope"//范围，标识
	};

	var default2 = {
        DragOptions : { cursor: 'pointer', zIndex:2000 },
        PaintStyle : { strokeStyle:'#666' },
        EndpointStyle : { width:10, height:16, strokeStyle:'#666' },
        Endpoint : "Rectangle",
        Anchors : ["TopCenter"]
    };
    //global settings
    jsPlumb.importDefaults(defaultConfig);

    //setting of single instance
    // var instance = jsPlumb.getInstance(default2);
    // console.log(instance);

    var exampleDropOptions = {
        hoverClass:"dropHover",
        activeClass:"dragActive"
    };

    var color1 = "green";
    var exampleEndpoint1 = {
//        Anchor : "BottomCenter",
        Anchors : [ 'BottomCenter', 'BottomRight' ],
        Container : '#testParent'

        endpoint:["Dot", { radius:3 }],
        paintStyle:{ fillStyle:color1 },
        isSource:true,
        scope:"green dot",
        connectorStyle:{ strokeStyle:color1, lineWidth:2 },
        connector: ["Bezier", { curviness:63 } ],
        maxConnections:1,
        isTarget:true,
        dropOptions : exampleDropOptions
    };

    //adding to #state1
    jsPlumb.addEndpoint("state1", exampleEndpoint1);


});