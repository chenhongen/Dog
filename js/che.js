var svg = document.getElementById("dog"),
    svgNS = "http://www.w3.org/2000/svg",
    body = svg.getElementById("body"),
    neck = svg.getElementById("neck"),
    tongue = svg.getElementById("tongue"),
    ears = svg.getElementById("ears"),
    head = svg.getElementById("arr"),
    config = { repeat: -1, yoyo: true },
    tl = new TimelineMax(config),
    bodyTl = new TimelineMax(config),
    neckTl = new TimelineMax(config),
    headTl = new TimelineMax(config),
    tongueTl = new TimelineMax(config),
    earsTl = new TimelineMax(config);

var Tail = document.createElementNS(svgNS,"path");
    svg.insertBefore(Tail, body);
	TweenLite.set(Tail,{strokeLinecap:"round",fill:"none",stroke:"#fff",strokeWidth:22,svgOrigin:"39.6875 8.604166",rotation:0});
	TweenLite.set(Tail,{attr:{d:Left()},rotation:'+=0',scale:0.7,y:45});

    // 尾巴运动
    tl.to(Tail, .125, {attr:{d:Center()}, ease:Sine.easeInOut})
        .to(Tail, .125, {attr:{d:Right()}, ease:Sine.easeInOut}, '-=0.125');

    // 下半身运动
    bodyTl.to(body, .2, {x: -8, ease:Sine.easeInOut});
    // 上半身运动
    neckTl.to(neck, .2, {x: 4, ease:Sine.easeInOut});
    // 头部运动(多个动作如何yoyo)
    headTl.to(head, .3, {rotation: 30, transformOrigin:"50% 50%", ease: Expo.easeIn})
        .to(head, .3, {rotation: -30, transformOrigin:"50% 50%", ease: Expo.easeIn},"+=1")
        .to(head, .3, {rotation: 0, transformOrigin:"50% 50%"},"+=1");
    // 舌头
    tongueTl.to(tongue, .2, {x: 3, ease:Sine.easeInOut});
    // 耳朵
    earsTl.to(ears, .3, {x: 1.5, rotation: 2, ease:Sine.easeInOut});
    function Left(){return  "M 45,33 C 0,26 0,-9 0,-15" };
    function Center(){return  "M 45,33 C 43,15 43,-10 43,-30" };
    function Right(){return  "M 45,33 C 83,26 83,-9 83,-15" };
    //M 45,33 C 0,26 0,-9 0,-24
    //M 45,33 C 43,14.648933 43,-10.064841 41.208041,-25.808254
    //M 45,33 C 83,26 83,-9 83,-24
