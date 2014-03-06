var OSMBuildings=function(){function sa(a,d){var b=a.x-d.x,c=a.y-d.y;return b*b+c*c}function Na(a){for(var d=Infinity,b=-Infinity,c=Infinity,e=-Infinity,f=0,g=a.length-3;f<g;f+=2)d=S(d,a[f]),b=I(b,a[f]),c=S(c,a[f+1]),e=I(e,a[f+1]);return{x:d+(b-d)/2<<0,y:c+(e-c)/2<<0}}function ta(a,d,b,c){var e=a.x-b.x,f=a.y-b.y,g=d-c,k=e*e+f*f;if(!(k<=g*g)){var k=ua(k),e=-e/k,f=-f/k,g=g/k,k=[],h,p,l;h=ua(I(0,1-g*g));for(var m=1;-1<=m;m-=2)p=e*g-m*h*f,l=f*g+m*h*e,k.push({x1:a.x+d*p<<0,y1:a.y+d*l<<0,x2:b.x+c*p<<0,
y2:b.y+c*l<<0});return k}}function X(a,d){var b={};a/=T;d/=T;b[Oa]=0>=d?90:1<=d?-90:va*(2*Pa(Qa(E*(1-2*d)))-J);b[Ra]=360*(1===a?1:(a%1+1)%1)-180;return b}function wa(a,d,b){function c(a){if("XDomainRequest"in U&&a!==e.readyState&&(e.readyState=a,e.onreadystatechange))e.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return d[b]||a});var e="XDomainRequest"in U?new XDomainRequest:new XMLHttpRequest;e.onerror=function(){e.status=500;e.statusText="Error";c(4)};e.ontimeout=function(){e.status=
408;e.statusText="Timeout";c(4)};e.onprogress=function(){c(3)};e.onload=function(){e.status=200;e.statusText="Ok";c(4)};e.onreadystatechange=function(){4===e.readyState&&e.status&&!(200>e.status||299<e.status)&&b&&e.responseText&&b(JSON.parse(e.responseText))};c(0);e.open("GET",a);c(1);e.send(null);c(2);return e}function xa(a){B=a.w;u=a.h;K=B/2<<0;ea=u/2<<0;L=K;M=u;w.setSize(B,u);fa=y-50}function ya(a){F=a;T=Sa<<F;a=X(t+K,r+ea);ga=Math.abs(40075040*za(a.latitude)/Aa(2,F+8));v=Aa(0.9,F-Y);ha=D.alpha(v)+
"";ia=Z.alpha(v)+"";$=N.alpha(v)+""}var Ba=Ba||Array,Ca=Ca||Array,j=Math,Qa=j.exp,Ta=j.log,Ua=j.sin,za=j.cos,Da=j.tan,Pa=j.atan,aa=j.atan2,S=j.min,I=j.max,ua=j.sqrt,Ea=j.ceil,Fa=j.floor,Aa=j.pow,U=window,ja=document;U.console||(U.console={});var G,ka=function(a,d,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(d-a)*b:0.5>b?d:b<2/3?a+6*(d-a)*(2/3-b):a},Va={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",
blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",
darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",
lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",
mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",
pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",
whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},O=function(a,d,b,c){this.H=a;this.S=d;this.L=b;this.A=c},j=O.prototype;j.toString=function(){var a=Math.min(360,Math.max(0,this.H)),d=Math.min(1,Math.max(0,this.S)),b=Math.min(1,Math.max(0,this.L)),c=Math.min(1,Math.max(0,this.A)),e;if(0===d)a=e=d=b;else{var f=0.5>b?b*(1+d):b+d-b*d,b=2*b-f,a=a/360,d=ka(b,f,a+1/3);e=ka(b,f,a);a=ka(b,f,a-1/3)}d*=255;e*=255;a*=255;return 1===c?"#"+(16777216+(d<<16)+(e<<8)+a).toString(16).slice(1,7):"rgba("+
[Math.round(d),Math.round(e),Math.round(a),c.toFixed(2)].join()+")"};j.hue=function(a){return new O(this.H*a,this.S,this.L,this.A)};j.saturation=function(a){return new O(this.H,this.S*a,this.L,this.A)};j.lightness=function(a){return new O(this.H,this.S,this.L*a,this.A)};j.alpha=function(a){return new O(this.H,this.S,this.L,this.A*a)};G=function(a){var d=0,b=0,c=0,e=1,f;a=(""+a).toLowerCase().replace("grey","gray");a=Va[a]||a;if(f=a.match(/^#(\w{2})(\w{2})(\w{2})$/))d=parseInt(f[1],16),b=parseInt(f[2],
16),c=parseInt(f[3],16);if(f=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))d=parseInt(f[1],10),b=parseInt(f[2],10),c=parseInt(f[3],10),e=f[4]?parseFloat(f[5]):1;d/=255;b/=255;c/=255;a=Math.max(d,b,c);var g=Math.min(d,b,c),k;f=(a+g)/2;var h=a-g;if(h){g=0.5<f?h/(2-a-g):h/(a+g);switch(a){case d:k=(b-c)/h+(b<c?6:0);break;case b:k=(c-d)/h+2;break;case c:k=(d-b)/h+4}k*=60}else k=g=0;return new O(k,g,f,e)};var Ga,j=Math,la=j.PI,s=j.sin,C=j.cos,Ha=j.tan,Ia=j.asin,Ja=j.atan2,H=la/180,ba=23.4397*
H;Ga=function(a,d,b){b=H*-b;d*=H;a=a.valueOf()/864E5-0.5+2440588-2451545;var c=H*(357.5291+0.98560028*a),e=H*(1.9148*s(c)+0.02*s(2*c)+3E-4*s(3*c)),e=c+e+102.9372*H+la,c=Ia(s(0)*C(ba)+C(0)*s(ba)*s(e)),e=Ja(s(e)*C(ba)-Ha(0)*s(ba),C(e));b=H*(280.16+360.9856235*a)-b-e;return{altitude:Ia(s(d)*s(c)+C(d)*C(c)*C(b)),azimuth:Ja(s(b),C(b)*s(d)-Ha(c)*C(d))-la/2}};var n={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",getWinding:function(a){var d,
b,c,e,f=0,g,k;g=0;for(k=a.length-3;g<k;g+=2)d=a[g],b=a[g+1],c=a[g+2],e=a[g+3],f+=d*e-c*b;return 0<f/2?this.clockwise:this.counterClockwise},makeWinding:function(a,d){if(this.getWinding(a)===d)return a;for(var b=[],c=a.length-2;0<=c;c-=2)b.push(a[c],a[c+1]);return b},toMeters:function(a){a=""+a;var d=parseFloat(a);return d===a||~a.indexOf("m")?d<<0:~a.indexOf("yd")?d*this.YARD_TO_METER<<0:~a.indexOf("ft")?d*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+a[1]*this.INCH_TO_METER<<
0):d<<0},getRadius:function(a){for(var d=90,b=-90,c=0,e=a.length;c<e;c+=2)d=S(d,a[c]),b=I(b,a[c]);return 6378137*((b-d)/va)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",
bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||
a]||null}},Ka,La=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},na=function(a){if(a){for(var d=[],b,c=0,e=a.length;c<e;c++)b=ma[a[c]],d.push(b[0],b[1]);d[d.length-2]!==d[0]&&d[d.length-1]!==d[1]&&d.push(d[0],d[1]);if(!(8>d.length))return d}},Wa=function(a,d){for(var b in d)a[b]||(a[b]=d[b]);return a},oa=function(a,d){var b={},c=a.tags||{};a.id&&(b.id=a.id);d&&(b.footprint=n.makeWinding(d,n.clockwise));c.height&&(b.height=n.toMeters(c.height));!b.height&&
c["building:height"]&&(b.height=n.toMeters(c["building:height"]));!b.height&&c.levels&&(b.height=c.levels*n.METERS_PER_LEVEL<<0);!b.height&&c["building:levels"]&&(b.height=c["building:levels"]*n.METERS_PER_LEVEL<<0);c.min_height&&(b.minHeight=n.toMeters(c.min_height));!b.minHeight&&c["building:min_height"]&&(b.minHeight=n.toMeters(c["building:min_height"]));!b.minHeight&&c.min_level&&(b.minHeight=c.min_level*n.METERS_PER_LEVEL<<0);!b.minHeight&&c["building:min_level"]&&(b.minHeight=c["building:min_level"]*
n.METERS_PER_LEVEL<<0);c["building:material"]&&(b.wallColor=n.getMaterialColor(c["building:material"]));c["building:facade:material"]&&(b.wallColor=n.getMaterialColor(c["building:facade:material"]));c["building:cladding"]&&(b.wallColor=n.getMaterialColor(c["building:cladding"]));c["building:color"]&&(b.wallColor=c["building:color"]);c["building:colour"]&&(b.wallColor=c["building:colour"]);c["roof:material"]&&(b.roofColor=n.getMaterialColor(c["roof:material"]));c["building:roof:material"]&&(b.roofColor=
n.getMaterialColor(c["building:roof:material"]));c["roof:color"]&&(b.roofColor=c["roof:color"]);c["roof:colour"]&&(b.roofColor=c["roof:colour"]);c["building:roof:color"]&&(b.roofColor=c["building:roof:color"]);c["building:roof:colour"]&&(b.roofColor=c["building:roof:colour"]);b.height=b.height||Ma;if("dome"===c["roof:shape"]||"cylinder"===c["building:shape"]||"sphere"===c["building:shape"])b.shape="cylinder",b.radius=n.getRadius(b.footprint),"dome"===c["roof:shape"]&&c["roof:height"]&&(b.roofShape=
"cylinder",b.roofHeight=n.toMeters(c["roof:height"]),b.height=I(0,b.height-b.roofHeight));return b},ma,V,ca,da;Ka=function(a,d){ma={};V={};ca=[];da=d;for(var b,c=0,e=a.length;c<e;c++)switch(b=a[c],b.type){case "node":ma[b.id]=[b.lat,b.lon];break;case "way":if(La(b)){var f=void 0,f=void 0;if((f=na(b.nodes))&&!1!==da(b))f=oa(b,f),ca.push(f)}else if(f=b.tags,!f||!f.highway&&!f.railway&&!f.landuse)V[b.id]=b;break;case "relation":var g=b,k=void 0,h=void 0;b=[];var p=h=void 0,l=void 0,f=void 0;if(La(g)&&
!("multipolygon"!==g.tags.type&&"building"!==g.tags.type||!1===da(g))){for(var k=g.members,h=p=void 0,l=[],m=0,z=k.length;m<z;m++)p=k[m],"way"===p.type&&V[p.ref]&&(!p.role||"outer"===p.role?h=V[p.ref]:("inner"===p.role||"enclave"===p.role)&&l.push(V[p.ref]));k=h?{outer:h,inner:l}:void 0;if(k&&(p=oa(g),h=k.outer))if((l=na(h.nodes))&&!1!==da(h)){h=oa(h,l);g=0;for(l=k.inner.length;g<l;g++)(f=na(k.inner[g].nodes))&&b.push(n.makeWinding(f,n.counterClockwise));b.length&&(h.holes=b);ca.push(Wa(h,p))}}}return ca};
var E=Math.PI,J=E/2,Xa=E/4,va=180/E,Sa=256,Y=15,Oa="latitude",Ra="longitude",B=0,u=0,K=0,ea=0,t=0,r=0,F,T,D=G("rgba(200, 190, 180)"),Z=D.lightness(0.8),N=D.lightness(1.2),ha=""+D,ia=""+Z,$=""+N,P,ga=1,v=1,fa,Ma=5,L,M,y=450,pa,qa={time:new Date,data:{},add:function(a,d){this.data[d]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},
A={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},getPixelFootprint:function(a){for(var d,b,c=new Ba(a.length),e=0,f=a.length-1;e<f;e+=2)d=a[e+1],b=S(1,I(0,0.5-Ta(Da(Xa+J*a[e]/180))/E/2)),d=(d/360+0.5)*T<<0,b=b*T<<0,c[e]=d,c[e+1]=b;a=c;c=a.length/2;e=new Ca(c);f=0;d=c-1;var g,k,h,p=[],l=[],m=[];for(e[f]=e[d]=1;d;){g=0;for(b=f+1;b<d;b++){k=a[2*b];var z=a[2*b+1],Q=a[2*f],j=a[2*f+1],n=a[2*d],t=a[2*d+1],r=n-Q,q=t-j,u=void 0;if(0!==r||0!==q)u=((k-Q)*r+(z-j)*q)/
(r*r+q*q),1<u?(Q=n,j=t):0<u&&(Q+=r*u,j+=q*u);r=k-Q;q=z-j;k=r*r+q*q;k>g&&(h=b,g=k)}2<g&&(e[h]=1,p.push(f),l.push(h),p.push(h),l.push(d));f=p.pop();d=l.pop()}for(b=0;b<c;b++)e[b]&&m.push(a[2*b],a[2*b+1]);c=m;if(!(8>c.length))return c},createClosure:function(a){var d=this;return function(b){b=d.parse(b);qa.add(b,a);d.addRenderItems(b,!0)}},parse:function(a){if(!a)return[];if("FeatureCollection"===a.type){a=a.features;var d=this.each,b,c,e,f,g,k,h=[],p,l,m,z,j;b=0;for(c=a.length;b<c;b++)if(e=a[b],"Feature"===
e.type&&(j={},f=e.geometry,p=e.properties,"LineString"===f.type&&(m=l.length-1,l[0][0]===l[m][0]&&l[0][1]===l[m][1]&&(l=f.coordinates)),"Polygon"===f.type&&(l=f.coordinates),"MultiPolygon"===f.type&&(l=f.coordinates[0]),l&&!1!==d(e))){m=l[0];g=[];e=0;for(f=m.length;e<f;e++)g.push(m[e][1],m[e][0]);j.id=p.id||[g[0],g[1],p.height,p.minHeight].join();j.footprint=n.makeWinding(g,n.clockwise);z=[];e=1;for(f=l.length;e<f;e++){m=l[e];z[e-1]=[];g=0;for(k=m.length;g<k;g++)z[e-1].push(m[g][1],m[g][0]);z[e-1]=
n.makeWinding(z[e-1],n.counterClockwise)}z.length&&(j.holes=z);j.height=n.toMeters(p.height)||Ma;p.minHeight&&(j.minHeight=n.toMeters(p.minHeight));if(p.color||p.wallColor)j.wallColor=p.color||p.wallColor;p.roofColor&&(j.roofColor=p.roofColor);h.push(j)}return h}return a.osm3s?Ka(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,d){for(var b=this.scale(a),c=0,e=b.length;c<e;c++)this.currentItemsIndex[b[c].id]||(b[c].scale=d?0:1,this.items.push(b[c]),
this.currentItemsIndex[b[c].id]=1);P||(P=setInterval(function(){for(var a=A.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);w.render();b||(clearInterval(P),P=null)},33))},scale:function(a){var d,b,c,e,f=[],g,k,h,p,l,m,j,n,r,q=3*ga;d=0;for(b=a.length;d<b;d++)if(g=a[d],k=g.height/q,h=isNaN(g.minHeight)?0:g.minHeight/q,!(h>fa)&&(p=this.getPixelFootprint(g.footprint))){n=[];if(g.holes){c=0;for(e=g.holes.length;c<e;c++)(r=this.getPixelFootprint(g.holes[c]))&&
n.push(r)}e=c=null;if(g.wallColor&&(l=G(g.wallColor)))c=l.alpha(v),e=""+c.lightness(0.8),c=""+c;m=null;if(g.roofColor&&(l=G(g.roofColor)))m=""+l.alpha(v);j=g.roofHeight/q;k<=h&&0>=j||f.push({id:g.id,footprint:p,height:S(k,fa),minHeight:h,wallColor:c,altColor:e,roofColor:m,roofShape:g.roofShape,roofHeight:j,center:Na(p),holes:n.length?n:null,shape:g.shape,radius:g.radius/ga})}return f},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=this.parse(a),!0)},load:function(a){this.url=
a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),wa(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(F<Y))if(this.isStatic)this.addRenderItems(this.staticData);
else if(this.url){var a,d,b,c,e=X(t,r);a=X(t+B,r+u);var f=0.0075*Ea(e.latitude/0.0075),g=0.015*Ea(a.longitude/0.015);a=0.0075*Fa(a.latitude/0.0075);for(e=0.015*Fa(e.longitude/0.015);a<=f;a+=0.0075)for(d=e;d<=g;d+=0.015)a=this.cropDecimals(a),d=this.cropDecimals(d),c=a+","+d,(b=qa.get(c))?this.addRenderItems(b):wa(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(d+0.015),s:a,w:d},this.createClosure(c));qa.purge()}},each:function(){}},ra={project:function(a,d,b){return{x:(a-L)*b+L<<0,y:(d-
M)*b+M<<0}},drawSolid:function(a,d,b,c,e){for(var f={x:0,y:0},g={x:0,y:0},k,h,p=[],l=0,m=a.length-3;l<m;l+=2)f.x=a[l]-t,f.y=a[l+1]-r,g.x=a[l+2]-t,g.y=a[l+3]-r,k=this.project(f.x,f.y,d),h=this.project(g.x,g.y,d),b&&(f=this.project(f.x,f.y,b),g=this.project(g.x,g.y,b)),(g.x-f.x)*(k.y-f.y)>(k.x-f.x)*(g.y-f.y)&&(this.context.fillStyle=f.x<g.x&&f.y<g.y||f.x>g.x&&f.y>g.y?e:c,this.drawFace([g.x,g.y,f.x,f.y,k.x,k.y,h.x,h.y])),p[l]=k.x,p[l+1]=k.y;return p},drawFace:function(a,d,b){if(a.length){var c,e,f,g;
this.context.beginPath();this.context.moveTo(a[0],a[1]);c=2;for(e=a.length;c<e;c+=2)this.context.lineTo(a[c],a[c+1]);if(b){c=0;for(e=b.length;c<e;c++){a=b[c];this.context.moveTo(a[0],a[1]);f=2;for(g=a.length;f<g;f+=2)this.context.lineTo(a[f],a[f+1])}}this.context.closePath();d&&this.context.stroke();this.context.fill()}},drawCircle:function(a,d,b){this.context.beginPath();this.context.arc(a.x,a.y,d,0,2*E);b&&this.context.stroke();this.context.fill()},drawCylinder:function(a,d,b,c,e,f){var g=y/(y-
b);b=this.project(a.x,a.y,g);var g=d*g,k;c&&(c=y/(y-c),a=this.project(a.x,a.y,c),d*=c);if(k=ta(a,d,b,g))c=aa(k[0].y1-a.y,k[0].x1-a.x),k=aa(k[1].y1-a.y,k[1].x1-a.x),f||(f=G(e),f=""+f.lightness(0.8)),this.context.fillStyle=e,this.context.beginPath(),this.context.arc(b.x,b.y,g,J,c,!0),this.context.arc(a.x,a.y,d,c,J),this.context.closePath(),this.context.fill(),this.context.fillStyle=f,this.context.beginPath(),this.context.arc(b.x,b.y,g,k,J,!0),this.context.arc(a.x,a.y,d,J,k),this.context.closePath(),
this.context.fill();return{c:b,r:g}},render:function(){this.context.clearRect(0,0,B,u);if(!(F<Y||pa)){var a,d,b,c,e,f,g,k={x:L+t,y:M+r},h=t,p=t+B,l=r,m=r+u,j,n,q,x,v,s=A.items;s.sort(function(a,b){return a.minHeight-b.minHeight||sa(b.center,k)-sa(a.center,k)||b.height-a.height});a=0;for(d=s.length;a<d;a++){e=s[a];f=!1;j=e.footprint;b=0;for(c=j.length-1;b<c;b+=2)f||(f=j[b]>h&&j[b]<p&&j[b+1]>l&&j[b+1]<m);if(f)if(b=1>e.scale?e.height*e.scale:e.height,f=y/(y-b),g=c=0,e.minHeight&&(c=1>e.scale?e.minHeight*
e.scale:e.minHeight,g=y/(y-c)),q=e.wallColor||ha,x=e.altColor||ia,v=e.roofColor||$,this.context.strokeStyle=x,"cylinder"===e.shape)j=this.drawCylinder({x:e.center.x-t,y:e.center.y-r},e.radius,b,c,q,x),"cylinder"===e.roofShape&&(j=this.drawCylinder({x:e.center.x-t,y:e.center.y-r},e.radius,b+e.roofHeight,b,v)),this.context.fillStyle=v,this.drawCircle(j.c,j.r,!0);else{j=this.drawSolid(j,f,g,q,x);n=[];if(e.holes){b=0;for(c=e.holes.length;b<c;b++)n[b]=this.drawSolid(e.holes[b],f,g,q,x)}this.context.fillStyle=
v;this.drawFace(j,!0,n)}}}}},W={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,d,b){return{x:a+this.direction.x*b,y:d+this.direction.y*b}},cylinder:function(a,d,b,c){b=this.project(a.x,a.y,b);var e;c&&(a=this.project(a.x,a.y,c));var f=ta(a,d,b,d);f&&(c=aa(f[0].y1-a.y,f[0].x1-a.x),e=aa(f[1].y1-a.y,f[1].x1-a.x),this.context.moveTo(f[1].x2,f[1].y2),this.context.arc(b.x,b.y,d,e,c),this.context.arc(a.x,a.y,d,c,e))},render:function(){var a,
d,b;this.context.clearRect(0,0,B,u);if(this.enabled&&!(F<Y||pa))if(a=X(t+K,r+ea),a=Ga(this.date,a.latitude,a.longitude),!(0>=a.altitude)){d=1/Da(a.altitude);b=5>d?1:5*(1/d);this.direction.x=za(a.azimuth)*d;this.direction.y=Ua(a.azimuth)*d;var c,e,f,g,k,h,j,l,m,n,q,s,x,w;a=[];d=[];var y=A.items;this.context.canvas.style.opacity=b/(2*v);this.context.shadowColor=this.blurColor;this.context.shadowBlur=this.blurSize*(v/2);this.context.fillStyle=this.color;this.context.beginPath();b=0;for(c=y.length;b<
c;b++){h=y[b];m=!1;j=h.footprint;g=[];e=0;for(f=j.length-1;e<f;e+=2)g[e]=k=j[e]-t,g[e+1]=l=j[e+1]-r,m||(m=0<k&&k<B&&0<l&&l<u);if(m)if(k=1>h.scale?h.height*h.scale:h.height,j=0,h.minHeight&&(j=1>h.scale?h.minHeight*h.scale:h.minHeight),"cylinder"===h.shape)"cylinder"===h.roofShape&&(k+=h.roofHeight),a.push({shape:h.shape,center:{x:h.center.x-t,y:h.center.y-r},radius:h.radius,h:k,mh:j});else{l=null;e=0;for(f=g.length-3;e<f;e+=2)m=g[e],n=g[e+1],q=g[e+2],s=g[e+3],x=this.project(m,n,k),w=this.project(q,
s,k),j&&(n=this.project(m,n,j),s=this.project(q,s,j),m=n.x,n=n.y,q=s.x,s=s.y),(q-m)*(x.y-n)>(x.x-m)*(s-n)?(1===l&&this.context.lineTo(m,n),l=0,e||this.context.moveTo(m,n),this.context.lineTo(q,s)):(0===l&&this.context.lineTo(x.x,x.y),l=1,e||this.context.moveTo(x.x,x.y),this.context.lineTo(w.x,w.y));j||d.push(g);if(h.holes){e=0;for(f=h.holes.length;e<f;e++){l=h.holes[e];m=[l[0]-t,l[1]-r];this.context.moveTo(m[0],m[1]);g=2;for(k=l.length;g<k;g+=2)m[g]=l[g]-t,m[g+1]=l[g+1]-r,this.context.lineTo(m[g],
m[g+1]);j||d.push(m)}}}}b=0;for(c=a.length;b<c;b++)h=a[b],"cylinder"===h.shape&&this.cylinder(h.center,h.radius,h.h,h.mh);this.context.closePath();this.context.fill();this.context.shadowBlur=null;this.context.globalCompositeOperation="destination-out";this.context.beginPath();b=0;for(c=d.length;b<c;b++){l=d[b];this.context.moveTo(l[0],l[1]);e=2;for(f=l.length;e<f;e+=2)this.context.lineTo(l[e],l[e+1]);this.context.lineTo(l[0],l[1])}b=0;for(c=a.length;b<c;b++)h=a[b],"cylinder"===h.shape&&!h.mh&&(this.context.moveTo(h.center.x+
h.radius,h.center.y),this.context.arc(h.center.x,h.center.y,h.radius,0,2*E));this.context.fillStyle="#00ff00";this.context.fill();this.context.globalCompositeOperation="source-over"}}},w={container:ja.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;W.context=this.createContext();ra.context=this.createContext()},render:function(){W.render();ra.render()},createContext:function(){var a=
ja.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var d=a.getContext("2d");d.lineCap="round";d.lineJoin="round";d.lineWidth=1;d.mozImageSmoothingEnabled=!1;d.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);return d},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,
d){for(var b=0,c=this.items.length;b<c;b++)this.items[b].width=a,this.items[b].height=d},screenshot:function(){var a=ja.createElement("CANVAS"),d=a.getContext("2d"),b,c,e;a.width=B;a.height=u;clearInterval(P);P=null;e=A.items;b=0;for(c=e.length;b<c;b++)e[b].scale=1;this.render();b=0;for(c=this.items.length;b<c;b++)e=this.items[b],""!==e.style.opacity&&(d.globalAlpha=parseFloat(e.style.opacity)),d.drawImage(e,0,0),d.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,d){this.container.style.left=
a+"px";this.container.style.top=d+"px"}};w.init();var R=OpenLayers.Layer.prototype,j=function(a){this.offset={x:0,y:0};R.initialize.call(this,this.name,{projection:"EPSG:900913"});a.addLayer(this)},q=j.prototype=new OpenLayers.Layer;q.name="OSM Buildings";q.attribution='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';q.isBaseLayer=!1;q.alwaysInRange=!0;q.setOrigin=function(){var a=this.map,d=a.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),a=a.resolution,b=this.maxExtent,c=(b.top-d.lat)/
a<<0;t=(d.lon-b.left)/a<<0;r=c};q.setMap=function(a){this.map||R.setMap.call(this,a);w.appendTo(this.div);xa(a.size);ya(a.zoom);this.setOrigin();A.update()};q.removeMap=function(a){w.remove();R.removeMap.call(this,a);this.map=null};q.onMapResize=function(){var a=this.map;R.onMapResize.call(this);xa(a.size.w,a.size.h);w.render();A.update()};q.moveTo=function(a,d,b){var c=this.map;a=R.moveTo.call(this,a,d,b);if(!b){b=parseInt(c.layerContainerDiv.style.left,10);var e=parseInt(c.layerContainerDiv.style.top,
10);this.div.style.left=-b+"px";this.div.style.top=-e+"px"}this.setOrigin();this.offset.x=0;this.offset.y=0;b=this.offset;L=K+b.x;M=u+b.y;d?(d=c.zoom,pa=!1,ya(d),A.update(),w.render()):(w.render(),A.update());return a};q.moveByPx=function(a,d){this.offset.x+=a;this.offset.y+=d;var b=R.moveByPx.call(this,a,d),c=this.offset;L=K+c.x;M=u+c.y;ra.render();return b};q.setStyle=function(a){a=a||{};var d;if(d=a.color||a.wallColor)D=G(d),ha=""+D.alpha(v),Z=D.lightness(0.8),ia=""+Z.alpha(v),N=D.lightness(1.2),
$=""+N.alpha(v);a.roofColor&&(N=G(a.roofColor),$=""+N.alpha(v));void 0!==a.shadows&&(W.enabled=!!a.shadows);w.render();return this};q.setDate=function(a){W.date=a;W.render();return this};q.loadData=function(a){A.load(a);return this};q.setData=function(a){A.set(a);return this};q.each=function(a,d){A.each=function(b){return a.call(d,b)};return this};q.screenshot=function(a){var d=w.screenshot();a&&(U.location.href=d.replace("image/png","image/octet-stream"));return d};j.VERSION="0.1.9a";j.ATTRIBUTION=
'&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return j}();
