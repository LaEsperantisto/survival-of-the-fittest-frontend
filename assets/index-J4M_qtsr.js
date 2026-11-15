(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="180",tu=0,Pl=1,nu=2,Jc=1,iu=2,Jn=3,xi=0,en=1,Ot=2,mi=0,hs=1,Dl=2,Ul=3,Nl=4,su=5,Ui=100,ru=101,ou=102,au=103,lu=104,cu=200,hu=201,uu=202,du=203,Ko=204,jo=205,fu=206,pu=207,mu=208,gu=209,_u=210,vu=211,xu=212,Mu=213,yu=214,Zo=0,Jo=1,Qo=2,ps=3,ea=4,ta=5,na=6,ia=7,$a=0,Su=1,bu=2,gi=0,Eu=1,wu=2,Tu=3,Au=4,Ru=5,Cu=6,Iu=7,Qc=300,ms=301,gs=302,sa=303,ra=304,Jr=306,oa=1e3,Oi=1001,aa=1002,hn=1003,Lu=1004,sr=1005,Bn=1006,ho=1007,Bi=1008,Wn=1009,eh=1010,th=1011,zs=1012,Ka=1013,Hi=1014,Qn=1015,$s=1016,ja=1017,Za=1018,Hs=1020,nh=35902,ih=35899,sh=1021,rh=1022,Pn=1023,Gs=1026,Vs=1027,oh=1028,Ja=1029,ah=1030,Qa=1031,el=1033,Fr=33776,kr=33777,Or=33778,Br=33779,la=35840,ca=35841,ha=35842,ua=35843,da=36196,fa=37492,pa=37496,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,Ma=37813,ya=37814,Sa=37815,ba=37816,Ea=37817,wa=37818,Ta=37819,Aa=37820,Ra=37821,Ca=36492,Ia=36494,La=36495,Pa=36283,Da=36284,Ua=36285,Na=36286,Pu=3200,Du=3201,lh=0,Uu=1,fi="",Qt="srgb",_s="srgb-linear",Wr="linear",rt="srgb",Yi=7680,Fl=519,Nu=512,Fu=513,ku=514,ch=515,Ou=516,Bu=517,zu=518,Hu=519,kl=35044,Ol="300 es",zn=2e3,Xr=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const us=Math.PI/180,Ws=180/Math.PI;function ys(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function tl(s,e){return(s%e+e)%e}function Gu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Vu(s,e,t){return s!==e?(t-s)/(e-s):0}function Bs(s,e,t){return(1-t)*s+t*e}function Wu(s,e,t,n){return Bs(s,e,1-Math.exp(-t*n))}function Xu(s,e=1){return e-Math.abs(tl(s,e*2)-e)}function qu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Yu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $u(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ku(s,e){return s+Math.random()*(e-s)}function ju(s){return s*(.5-Math.random())}function Zu(s){s!==void 0&&(Bl=s);let e=Bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ju(s){return s*us}function Qu(s){return s*Ws}function ed(s){return(s&s-1)===0&&s!==0}function td(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function nd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function id(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),h=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*d,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*d,a*c);break;case"XZX":s.set(a*d,l*p,l*h,a*c);break;case"YXY":s.set(l*h,a*d,l*p,a*c);break;case"ZYZ":s.set(l*p,l*h,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ls(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _i={DEG2RAD:us,RAD2DEG:Ws,generateUUID:ys,clamp:je,euclideanModulo:tl,mapLinear:Gu,inverseLerp:Vu,lerp:Bs,damp:Wu,pingpong:Xu,smoothstep:qu,smootherstep:Yu,randInt:$u,randFloat:Ku,randFloatSpread:ju,seededRandom:Zu,degToRad:Ju,radToDeg:Qu,isPowerOfTwo:ed,ceilPowerOfTwo:td,floorPowerOfTwo:nd,setQuaternionFromProperEuler:id,normalize:Wt,denormalize:ls};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const f=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==f||c!==h||d!==p){let _=1-a;const m=l*f+c*h+d*p+u*x,E=m>=0?1:-1,g=1-m*m;if(g>Number.EPSILON){const T=Math.sqrt(g),A=Math.atan2(T,m*E);_=Math.sin(_*A)/T,a=Math.sin(a*A)/T}const v=a*E;if(l=l*_+f*v,c=c*_+h*v,d=d*_+p*v,u=u*_+x*v,_===1-a){const T=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=T,c*=T,d*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+d*u+l*h-c*f,e[t+1]=l*p+d*f+c*u-a*h,e[t+2]=c*p+d*h+a*f-l*u,e[t+3]=d*p-a*u-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(r/2),f=l(n/2),h=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u-f*h*p;break;case"YXZ":this._x=f*d*u+c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u+f*h*p;break;case"ZXY":this._x=f*d*u-c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u-f*h*p;break;case"ZYX":this._x=f*d*u-c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u+f*h*p;break;case"YZX":this._x=f*d*u+c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u-f*h*p;break;case"XZY":this._x=f*d*u-c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+a+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(o-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(d-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(r+c)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(o-i)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=i+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new D,zl=new Ks;class He{constructor(e,t,n,i,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],h=n[5],p=n[8],x=i[0],_=i[3],m=i[6],E=i[1],g=i[4],v=i[7],T=i[2],A=i[5],R=i[8];return r[0]=o*x+a*E+l*T,r[3]=o*_+a*g+l*A,r[6]=o*m+a*v+l*R,r[1]=c*x+d*E+u*T,r[4]=c*_+d*g+u*A,r[7]=c*m+d*v+u*R,r[2]=f*x+h*E+p*T,r[5]=f*_+h*g+p*A,r[8]=f*m+h*v+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*r,h=c*r-o*l,p=t*u+n*f+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=u*x,e[1]=(i*c-d*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(d*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=h*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new He;function hh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sd(){const s=qr("canvas");return s.style.display="block",s}const Hl={};function Xs(s){s in Hl||(Hl[s]=!0,console.warn(s))}function rd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Gl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){const s={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[_s]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),s}const nt=od();function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $i;class ad{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$i===void 0&&($i=qr("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ld=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(po(i[o].image)):r.push(po(i[o]))}else r=po(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function po(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ad.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;const mo=new D;class jt extends Ms{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Oi,i=Oi,r=Bn,o=Bi,a=Pn,l=Wn,c=jt.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ys(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oa:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oa:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Qc;jt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],h=l[5],p=l[9],x=l[2],_=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+_)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,v=(h+1)/2,T=(m+1)/2,A=(d+f)/4,R=(u+x)/4,P=(p+_)/4;return g>v&&g>T?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=A/n,r=R/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=P/r),this.set(n,i,r,t),this}let E=Math.sqrt((_-p)*(_-p)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(_-p)/E,this.y=(u-x)/E,this.z=(f-d)/E,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends Ms{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new jt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends hd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uh extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ud extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),or.subVectors(this.max,Ts),Ki.subVectors(e.a,Ts),ji.subVectors(e.b,Ts),Zi.subVectors(e.c,Ts),ai.subVectors(ji,Ki),li.subVectors(Zi,ji),wi.subVectors(Ki,Zi);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-wi.z,wi.y,ai.z,0,-ai.x,li.z,0,-li.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-li.y,li.x,0,-wi.y,wi.x,0];return!go(t,Ki,ji,Zi,or)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Ki,ji,Zi,or))?!1:(ar.crossVectors(ai,li),t=[ar.x,ar.y,ar.z],go(t,Ki,ji,Zi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,rr=new js,Ki=new D,ji=new D,Zi=new D,ai=new D,li=new D,wi=new D,Ts=new D,or=new D,ar=new D,Ti=new D;function go(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),d=n.dot(Ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const dd=new js,As=new D,_o=new D;class Zs{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(_o)),this.expandByPoint(As.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new D,vo=new D,lr=new D,ci=new D,xo=new D,cr=new D,Mo=new D;class il{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vo.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(vo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=ci.dot(this.direction),l=-ci.dot(lr),c=ci.lengthSq(),d=Math.abs(1-o*o);let u,f,h,p;if(d>0)if(u=o*l-a,f=o*a-l,p=r*d,u>=0)if(f>=-p)if(f<=p){const x=1/d;u*=x,f*=x,h=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),h=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),h=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),h=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vo).addScaledVector(lr,f),h}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){xo.subVectors(t,e),cr.subVectors(n,e),Mo.crossVectors(xo,cr);let o=this.direction.dot(Mo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(cr.crossVectors(ci,cr));if(l<0)return null;const c=a*this.direction.dot(xo.cross(ci));if(c<0||l+c>o)return null;const d=-a*ci.dot(Mo);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,i,r,o,a,l,c,d,u,f,h,p,x,_){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,u,f,h,p,x,_)}set(e,t,n,i,r,o,a,l,c,d,u,f,h,p,x,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*d,h=o*u,p=a*d,x=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,h=l*u,p=c*d,x=c*u;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,h=l*u,p=c*d,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,h=o*u,p=a*d,x=a*u;t[0]=l*d,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*d,t[4]=x-f*u,t[8]=p*u+h,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=h*u+p,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+x,t[5]=o*d,t[9]=h*u-p,t[2]=p*u-h,t[6]=a*d,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fd,e,pd)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),hi.crossVectors(n,sn),hi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),hi.crossVectors(n,sn)),hi.normalize(),hr.crossVectors(sn,hi),i[0]=hi.x,i[4]=hr.x,i[8]=sn.x,i[1]=hi.y,i[5]=hr.y,i[9]=sn.y,i[2]=hi.z,i[6]=hr.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],h=n[13],p=n[2],x=n[6],_=n[10],m=n[14],E=n[3],g=n[7],v=n[11],T=n[15],A=i[0],R=i[4],P=i[8],b=i[12],y=i[1],C=i[5],U=i[9],O=i[13],q=i[2],W=i[6],G=i[10],Y=i[14],B=i[3],ne=i[7],le=i[11],me=i[15];return r[0]=o*A+a*y+l*q+c*B,r[4]=o*R+a*C+l*W+c*ne,r[8]=o*P+a*U+l*G+c*le,r[12]=o*b+a*O+l*Y+c*me,r[1]=d*A+u*y+f*q+h*B,r[5]=d*R+u*C+f*W+h*ne,r[9]=d*P+u*U+f*G+h*le,r[13]=d*b+u*O+f*Y+h*me,r[2]=p*A+x*y+_*q+m*B,r[6]=p*R+x*C+_*W+m*ne,r[10]=p*P+x*U+_*G+m*le,r[14]=p*b+x*O+_*Y+m*me,r[3]=E*A+g*y+v*q+T*B,r[7]=E*R+g*C+v*W+T*ne,r[11]=E*P+g*U+v*G+T*le,r[15]=E*b+g*O+v*Y+T*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],h=e[14],p=e[3],x=e[7],_=e[11],m=e[15];return p*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*h-n*l*h)+x*(+t*l*h-t*c*f+r*o*f-i*o*h+i*c*d-r*l*d)+_*(+t*c*u-t*a*h-r*o*u+n*o*h+r*a*d-n*c*d)+m*(-i*a*d-t*l*u+t*a*f+i*o*u-n*o*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],h=e[11],p=e[12],x=e[13],_=e[14],m=e[15],E=u*_*c-x*f*c+x*l*h-a*_*h-u*l*m+a*f*m,g=p*f*c-d*_*c-p*l*h+o*_*h+d*l*m-o*f*m,v=d*x*c-p*u*c+p*a*h-o*x*h-d*a*m+o*u*m,T=p*u*l-d*x*l-p*a*f+o*x*f+d*a*_-o*u*_,A=t*E+n*g+i*v+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(x*f*r-u*_*r-x*i*h+n*_*h+u*i*m-n*f*m)*R,e[2]=(a*_*r-x*l*r+x*i*c-n*_*c-a*i*m+n*l*m)*R,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*h-n*l*h)*R,e[4]=g*R,e[5]=(d*_*r-p*f*r+p*i*h-t*_*h-d*i*m+t*f*m)*R,e[6]=(p*l*r-o*_*r-p*i*c+t*_*c+o*i*m-t*l*m)*R,e[7]=(o*f*r-d*l*r+d*i*c-t*f*c-o*i*h+t*l*h)*R,e[8]=v*R,e[9]=(p*u*r-d*x*r-p*n*h+t*x*h+d*n*m-t*u*m)*R,e[10]=(o*x*r-p*a*r+p*n*c-t*x*c-o*n*m+t*a*m)*R,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*h-t*a*h)*R,e[12]=T*R,e[13]=(d*x*i-p*u*i+p*n*f-t*x*f-d*n*_+t*u*_)*R,e[14]=(p*a*i-o*x*i-p*n*l+t*x*l+o*n*_-t*a*_)*R,e[15]=(o*u*i-d*a*i+d*n*l-t*u*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,f=r*c,h=r*d,p=r*u,x=o*d,_=o*u,m=a*u,E=l*c,g=l*d,v=l*u,T=n.x,A=n.y,R=n.z;return i[0]=(1-(x+m))*T,i[1]=(h+v)*T,i[2]=(p-g)*T,i[3]=0,i[4]=(h-v)*A,i[5]=(1-(f+m))*A,i[6]=(_+E)*A,i[7]=0,i[8]=(p+g)*R,i[9]=(_-E)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);const c=1/r,d=1/o,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=d,Mn.elements[5]*=d,Mn.elements[6]*=d,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===zn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===zn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Xr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new D,Mn=new pt,fd=new D(0,0,0),pd=new D(1,1,1),hi=new D,hr=new D,sn=new D,Wl=new pt,Xl=new Ks;class Xn{constructor(e=0,t=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let md=0;const ql=new D,Qi=new Ks,Kn=new pt,ur=new D,Rs=new D,gd=new D,_d=new Ks,Yl=new D(1,0,0),$l=new D(0,1,0),Kl=new D(0,0,1),jl={type:"added"},vd={type:"removed"},es={type:"childadded",child:null},yo={type:"childremoved",child:null};class Tt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new D,t=new Xn,n=new Ks,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Rs,ur,this.up):Kn.lookAt(ur,Rs,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jl),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vd),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jl),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new D,jn=new D,So=new D,Zn=new D,ts=new D,ns=new D,Zl=new D,bo=new D,Eo=new D,wo=new D,To=new ot,Ao=new ot,Ro=new ot;class gn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yn.subVectors(i,t),jn.subVectors(n,t),So.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(jn),l=yn.dot(So),c=jn.dot(jn),d=jn.dot(So),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,h=(c*l-a*d)*f,p=(o*d-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return To.setScalar(0),Ao.setScalar(0),Ro.setScalar(0),To.fromBufferAttribute(e,t),Ao.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(Ao,r.y),o.addScaledVector(Ro,r.z),o}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),jn.subVectors(e,t),yn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),yn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),bo.subVectors(e,n);const l=ts.dot(bo),c=ns.dot(bo);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,i);const d=ts.dot(Eo),u=ns.dot(Eo);if(d>=0&&u<=d)return t.copy(i);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ts,o);wo.subVectors(e,r);const h=ts.dot(wo),p=ns.dot(wo);if(p>=0&&h<=p)return t.copy(r);const x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ns,a);const _=d*p-h*u;if(_<=0&&u-d>=0&&h-p>=0)return Zl.subVectors(r,i),a=(u-d)/(u-d+(h-p)),t.copy(i).addScaledVector(Zl,a);const m=1/(_+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Co(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=tl(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Co(o,r,e+1/3),this.g=Co(o,r,e),this.b=Co(o,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return nt.workingToColorSpace(Nt.copy(this),e),Math.round(je(Nt.r*255,0,255))*65536+Math.round(je(Nt.g*255,0,255))*256+Math.round(je(Nt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Qt){nt.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(dr);const n=Bs(ui.h,dr.h,t),i=Bs(ui.s,dr.s,t),r=Bs(ui.l,dr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new We;We.NAMES=fh;let xd=0;class Xi extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=hs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=jo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ni extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new D,fr=new Je;let Md=0;class Vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class ph extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mh extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yd=0;const fn=new pt,Io=new Tt,is=new D,rn=new js,Cs=new js,It=new D;class Zt extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hh(e)?mh:ph)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(rn.min,Cs.min),rn.expandByPoint(It),It.addVectors(rn.max,Cs.max),rn.expandByPoint(It)):(rn.expandByPoint(Cs.min),rn.expandByPoint(Cs.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)It.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),It.add(is)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const c=new D,d=new D,u=new D,f=new Je,h=new Je,p=new Je,x=new D,_=new D;function m(P,b,y){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),d.sub(c),u.sub(c),h.sub(f),p.sub(f);const C=1/(h.x*p.y-p.x*h.y);isFinite(C)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(u,-h.y).multiplyScalar(C),_.copy(u).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(C),a[P].add(x),a[b].add(x),a[y].add(x),l[P].add(_),l[b].add(_),l[y].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,b=E.length;P<b;++P){const y=E[P],C=y.start,U=y.count;for(let O=C,q=C+U;O<q;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const g=new D,v=new D,T=new D,A=new D;function R(P){T.fromBufferAttribute(i,P),A.copy(T);const b=a[P];g.copy(b),g.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(A,b);const C=v.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,C)}for(let P=0,b=E.length;P<b;++P){const y=E[P],C=y.start,U=y.count;for(let O=C,q=C+U;O<q;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let f=0,h=e.count;f<h;f+=3){const p=e.getX(f+0),x=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,_),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let h=0,p=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*d;for(let m=0;m<d;m++)f[p++]=c[h++]}return new Vn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],h=e(f,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const h=c[u];d.push(h.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new pt,Ai=new il,pr=new Zs,Ql=new D,mr=new D,gr=new D,_r=new D,Lo=new D,vr=new D,ec=new D,xr=new D;class Bt extends Tt{constructor(e=new Zt,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(Lo.fromBufferAttribute(u,e),o?vr.addScaledVector(Lo,d):vr.addScaledVector(Lo.sub(t),d))}t.add(vr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(pr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(pr,Ql)===null||Ai.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const _=f[p],m=o[_.materialIndex],E=Math.max(_.start,h.start),g=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let v=E,T=g;v<T;v+=3){const A=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);i=Mr(this,m,e,n,c,d,u,A,R,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let _=p,m=x;_<m;_+=3){const E=a.getX(_),g=a.getX(_+1),v=a.getX(_+2);i=Mr(this,o,e,n,c,d,u,E,g,v),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const _=f[p],m=o[_.materialIndex],E=Math.max(_.start,h.start),g=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let v=E,T=g;v<T;v+=3){const A=v,R=v+1,P=v+2;i=Mr(this,m,e,n,c,d,u,A,R,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let _=p,m=x;_<m;_+=3){const E=_,g=_+1,v=_+2;i=Mr(this,o,e,n,c,d,u,E,g,v),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function Sd(s,e,t,n,i,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===xi,a),l===null)return null;xr.copy(a),xr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:s}}function Mr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,mr),s.getVertexPosition(l,gr),s.getVertexPosition(c,_r);const d=Sd(s,e,t,n,mr,gr,_r,ec);if(d){const u=new D;gn.getBarycoord(ec,mr,gr,_r,u),i&&(d.uv=gn.getInterpolatedAttribute(i,a,l,c,u,new Je)),r&&(d.uv1=gn.getInterpolatedAttribute(r,a,l,c,u,new Je)),o&&(d.normal=gn.getInterpolatedAttribute(o,a,l,c,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};gn.getNormal(mr,gr,_r,f.normal),d.face=f,d.barycoord=u}return d}class Mi extends Zt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,h=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(u,2));function p(x,_,m,E,g,v,T,A,R,P,b){const y=v/R,C=T/P,U=v/2,O=T/2,q=A/2,W=R+1,G=P+1;let Y=0,B=0;const ne=new D;for(let le=0;le<G;le++){const me=le*C-O;for(let Te=0;Te<W;Te++){const $e=Te*y-U;ne[x]=$e*E,ne[_]=me*g,ne[m]=q,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[_]=0,ne[m]=A>0?1:-1,d.push(ne.x,ne.y,ne.z),u.push(Te/R),u.push(1-le/P),Y+=1}}for(let le=0;le<P;le++)for(let me=0;me<R;me++){const Te=f+me+W*le,$e=f+me+W*(le+1),Ze=f+(me+1)+W*(le+1),et=f+(me+1)+W*le;l.push(Te,$e,et),l.push($e,Ze,et),B+=6}a.addGroup(h,B,b),h+=B,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){const e={};for(let t=0;t<s.length;t++){const n=vs(s[t]);for(const i in n)e[i]=n[i]}return e}function bd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Ed={clone:vs,merge:Xt};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _h extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new D,tc=new Je,nc=new Je;class ln extends _h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,tc,nc),t.subVectors(nc,tc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Ad extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(ss,rs,e,t);i.layers=this.layers,this.add(i);const r=new ln(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new ln(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new ln(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new ln(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new ln(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class vh extends jt{constructor(e=[],t=ms,n,i,r,o,a,l,c,d){super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Mi(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:mi});r.uniforms.tEquirect.value=t;const o=new Bt(i,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Bn),new Ad(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class _n extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cd={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,n),m=this._getHandJoint(c,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Id extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Do=new D,Ld=new D,Pd=new He;class Pi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Do.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Do),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pd.getNormalMatrix(e),i=this.coplanarPoint(Do).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Zs,Dd=new Je(.5,.5),yr=new D;class rl{constructor(e=new Pi,t=new Pi,n=new Pi,i=new Pi,r=new Pi,o=new Pi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],h=r[7],p=r[8],x=r[9],_=r[10],m=r[11],E=r[12],g=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,h-d,m-p,T-E).normalize(),i[1].setComponents(c+o,h+d,m+p,T+E).normalize(),i[2].setComponents(c+a,h+u,m+x,T+g).normalize(),i[3].setComponents(c-a,h-u,m-x,T-g).normalize(),n)i[4].setComponents(l,f,_,v).normalize(),i[5].setComponents(c-l,h-f,m-_,T-v).normalize();else if(i[4].setComponents(c-l,h-f,m-_,T-v).normalize(),t===zn)i[5].setComponents(c+l,h+f,m+_,T+v).normalize();else if(t===Xr)i[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=Dd.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yr.x=i.normal.x>0?e.max.x:e.min.x,yr.y=i.normal.y>0?e.max.y:e.min.y,yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xh extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yr=new D,$r=new D,ic=new pt,Is=new il,Sr=new Zs,Uo=new D,sc=new D;class Ud extends Tt{constructor(e=new Zt,t=new xh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Yr.fromBufferAttribute(t,i-1),$r.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yr.distanceTo($r);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;ic.copy(i).invert(),Is.copy(e.ray).applyMatrix4(ic);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,_=p-1;x<_;x+=c){const m=d.getX(x),E=d.getX(x+1),g=br(this,e,Is,l,m,E,x);g&&t.push(g)}if(this.isLineLoop){const x=d.getX(p-1),_=d.getX(h),m=br(this,e,Is,l,x,_,p-1);m&&t.push(m)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,_=p-1;x<_;x+=c){const m=br(this,e,Is,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=br(this,e,Is,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function br(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Yr.fromBufferAttribute(a,i),$r.fromBufferAttribute(a,r),t.distanceSqToSegment(Yr,$r,Uo,sc)>n)return;Uo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Uo);if(!(c<e.near||c>e.far))return{distance:c,point:sc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const rc=new D,oc=new D;class Nd extends Ud{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rc.fromBufferAttribute(t,i),oc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rc.distanceTo(oc);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mh extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ac=new pt,Fa=new il,Er=new Zs,wr=new D;class Fd extends Tt{constructor(e=new Zt,t=new Mh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;ac.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){const _=c.getX(p);wr.fromBufferAttribute(u,_),lc(wr,_,l,i,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let p=f,x=h;p<x;p++)wr.fromBufferAttribute(u,p),lc(wr,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lc(s,e,t,n,i,r,o){const a=Fa.distanceSqToPoint(s);if(a<t){const l=new D;Fa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class yh extends jt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sh extends jt{constructor(e,t,n=Hi,i,r,o,a=hn,l=hn,c,d=Gs,u=1){if(d!==Gs&&d!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bh extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kr extends Zt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new D,d=new Je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const h=n+u/t*i;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ol extends Zt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],u=[],f=[],h=[];let p=0;const x=[],_=n/2;let m=0;E(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(h,2));function E(){const v=new D,T=new D;let A=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const b=[],y=P/r,C=y*(t-e)+e;for(let U=0;U<=i;U++){const O=U/i,q=O*l+a,W=Math.sin(q),G=Math.cos(q);T.x=C*W,T.y=-y*n+_,T.z=C*G,u.push(T.x,T.y,T.z),v.set(W,R,G).normalize(),f.push(v.x,v.y,v.z),h.push(O,1-y),b.push(p++)}x.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const y=x[b][P],C=x[b+1][P],U=x[b+1][P+1],O=x[b][P+1];(e>0||b!==0)&&(d.push(y,C,O),A+=3),(t>0||b!==r-1)&&(d.push(C,U,O),A+=3)}c.addGroup(m,A,0),m+=A}function g(v){const T=p,A=new Je,R=new D;let P=0;const b=v===!0?e:t,y=v===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,_*y,0),f.push(0,y,0),h.push(.5,.5),p++;const C=p;for(let U=0;U<=i;U++){const q=U/i*l+a,W=Math.cos(q),G=Math.sin(q);R.x=b*G,R.y=_*y,R.z=b*W,u.push(R.x,R.y,R.z),f.push(0,y,0),A.x=W*.5+.5,A.y=G*.5*y+.5,h.push(A.x,A.y),p++}for(let U=0;U<i;U++){const O=T+U,q=C+U;v===!0?d.push(q,q+1,O):d.push(q+1,q,O),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Tr=new D,Ar=new D,No=new D,Rr=new gn;class kd extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(us*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),f={},h=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:_,c:m}=Rr;if(x.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Rr.getNormal(No),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const g=(E+1)%3,v=u[E],T=u[g],A=Rr[d[E]],R=Rr[d[g]],P=`${v}_${T}`,b=`${T}_${v}`;b in f&&f[b]?(No.dot(f[b].normal)<=r&&(h.push(A.x,A.y,A.z),h.push(R.x,R.y,R.z)),f[b]=null):P in f||(f[P]={index0:c[E],index1:c[g],normal:No.clone()})}}for(const p in f)if(f[p]){const{index0:x,index1:_}=f[p];Tr.fromBufferAttribute(a,x),Ar.fromBufferAttribute(a,_),h.push(Tr.x,Tr.y,Tr.z),h.push(Ar.x,Ar.y,Ar.z)}this.setAttribute("position",new vt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qr extends Zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=e/a,f=t/l,h=[],p=[],x=[],_=[];for(let m=0;m<d;m++){const E=m*f-o;for(let g=0;g<c;g++){const v=g*u-r;p.push(v,-E,0),x.push(0,0,1),_.push(g/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const g=E+c*m,v=E+c*(m+1),T=E+1+c*(m+1),A=E+1+c*m;h.push(g,v,A),h.push(v,T,A)}this.setIndex(h),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class al extends Zt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let u=e;const f=(t-e)/i,h=new D,p=new Je;for(let x=0;x<=i;x++){for(let _=0;_<=n;_++){const m=r+_/n*o;h.x=u*Math.cos(m),h.y=u*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,d.push(p.x,p.y)}u+=f}for(let x=0;x<i;x++){const _=x*(n+1);for(let m=0;m<n;m++){const E=m+_,g=E,v=E+n+1,T=E+n+2,A=E+1;a.push(g,v,A),a.push(v,T,A)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Dn extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bd extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ll extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zd extends ll{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fo=new pt,cc=new D,hc=new D;class Eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(cc),hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hc),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const uc=new pt,Ls=new D,ko=new D;class Hd extends Eh{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ls),ko.copy(n.position),ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ko),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc,n.coordinateSystem,n.reversedDepth)}}class dc extends ll{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wh extends _h{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gd extends Eh{constructor(){super(new wh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vd extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Gd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wd extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function fc(s,e,t,n){const i=Xd(n);switch(t){case sh:return s*e;case oh:return s*e/i.components*i.byteLength;case Ja:return s*e/i.components*i.byteLength;case ah:return s*e*2/i.components*i.byteLength;case Qa:return s*e*2/i.components*i.byteLength;case rh:return s*e*3/i.components*i.byteLength;case Pn:return s*e*4/i.components*i.byteLength;case el:return s*e*4/i.components*i.byteLength;case Fr:case kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ca:case ua:return Math.max(s,16)*Math.max(e,8)/4;case la:case ha:return Math.max(s,8)*Math.max(e,8)/2;case da:case fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ya:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ca:case Ia:case La:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pa:case Da:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ua:case Na:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xd(s){switch(s){case Wn:case eh:return{byteLength:1,components:1};case zs:case th:case $s:return{byteLength:2,components:1};case ja:case Za:return{byteLength:2,components:4};case Hi:case Ka:case Qn:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Th(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qd(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,d),a.onUploadCallback();let h;if(c instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=s.SHORT;else if(c instanceof Uint32Array)h=s.UNSIGNED_INT;else if(c instanceof Int32Array)h=s.INT;else if(c instanceof Int8Array)h=s.BYTE;else if(c instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,d);else{u.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<u.length;h++){const p=u[f],x=u[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let h=0,p=u.length;h<p;h++){const x=u[h];s.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Yd,alphahash_pars_fragment:$d,alphamap_fragment:Kd,alphamap_pars_fragment:jd,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:xf,displacementmap_pars_vertex:Mf,displacementmap_vertex:yf,emissivemap_fragment:Sf,emissivemap_pars_fragment:bf,colorspace_fragment:Ef,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:zf,envmap_vertex:If,fog_vertex:Lf,fog_pars_vertex:Pf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:$f,lights_fragment_end:Kf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:Mp,opaque_fragment:yp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Lp,shadowmask_pars_fragment:Pp,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:kp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:zp,transmission_fragment:Hp,transmission_pars_fragment:Gp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:$p,backgroundCube_vert:Kp,backgroundCube_frag:jp,cube_vert:Zp,cube_frag:Jp,depth_vert:Qp,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:vm,meshtoon_vert:xm,meshtoon_frag:Mm,points_vert:ym,points_frag:Sm,shadow_vert:bm,shadow_frag:Em,sprite_vert:wm,sprite_frag:Tm},re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},kn={basic:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Xt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Xt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Xt([re.points,re.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Xt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Xt([re.common,re.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Xt([re.sprite,re.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Xt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Xt([re.lights,re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};kn.physical={uniforms:Xt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Cr={r:0,b:0,g:0},Ci=new Xn,Am=new pt;function Rm(s,e,t,n,i,r,o){const a=new We(0);let l=r===!0?0:1,c,d,u=null,f=0,h=null;function p(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v}function x(g){let v=!1;const T=p(g);T===null?m(a,l):T&&T.isColor&&(m(T,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(g,v){const T=p(v);T&&(T.isCubeTexture||T.mapping===Jr)?(d===void 0&&(d=new Bt(new Mi(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:vs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Ci)),d.material.toneMapped=nt.getTransfer(T.colorSpace)!==rt,(u!==T||f!==T.version||h!==s.toneMapping)&&(d.material.needsUpdate=!0,u=T,f=T.version,h=s.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Bt(new Qr(2,2),new yi({name:"BackgroundMaterial",uniforms:vs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,h=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,v){g.getRGB(Cr,gh(s)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,v,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:x,addToRenderList:_,dispose:E}}function Cm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,C,U,O,q){let W=!1;const G=u(O,U,C);r!==G&&(r=G,c(r.object)),W=h(y,O,U,q),W&&p(y,O,U,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(y,C,U,O),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function d(y){return s.deleteVertexArray(y)}function u(y,C,U){const O=U.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let W=q[C.id];W===void 0&&(W={},q[C.id]=W);let G=W[O];return G===void 0&&(G=f(l()),W[O]=G),G}function f(y){const C=[],U=[],O=[];for(let q=0;q<t;q++)C[q]=0,U[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:y,attributes:{},index:null}}function h(y,C,U,O){const q=r.attributes,W=C.attributes;let G=0;const Y=U.getAttributes();for(const B in Y)if(Y[B].location>=0){const le=q[B];let me=W[B];if(me===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function p(y,C,U,O){const q={},W=C.attributes;let G=0;const Y=U.getAttributes();for(const B in Y)if(Y[B].location>=0){let le=W[B];le===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));const me={};me.attribute=le,le&&le.data&&(me.data=le.data),q[B]=me,G++}r.attributes=q,r.attributesNum=G,r.index=O}function x(){const y=r.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function _(y){m(y,0)}function m(y,C){const U=r.newAttributes,O=r.enabledAttributes,q=r.attributeDivisors;U[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),q[y]!==C&&(s.vertexAttribDivisor(y,C),q[y]=C)}function E(){const y=r.newAttributes,C=r.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==y[U]&&(s.disableVertexAttribArray(U),C[U]=0)}function g(y,C,U,O,q,W,G){G===!0?s.vertexAttribIPointer(y,C,U,q,W):s.vertexAttribPointer(y,C,U,O,q,W)}function v(y,C,U,O){x();const q=O.attributes,W=U.getAttributes(),G=C.defaultAttributeValues;for(const Y in W){const B=W[Y];if(B.location>=0){let ne=q[Y];if(ne===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){const le=ne.normalized,me=ne.itemSize,Te=e.get(ne);if(Te===void 0)continue;const $e=Te.buffer,Ze=Te.type,et=Te.bytesPerElement,$=Ze===s.INT||Ze===s.UNSIGNED_INT||ne.gpuType===Ka;if(ne.isInterleavedBufferAttribute){const j=ne.data,ue=j.stride,Ne=ne.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)m(B.location+Ee,j.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)_(B.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let Ee=0;Ee<B.locationSize;Ee++)g(B.location+Ee,me/B.locationSize,Ze,le,ue*et,(Ne+me/B.locationSize*Ee)*et,$)}else{if(ne.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)m(B.location+j,ne.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let j=0;j<B.locationSize;j++)_(B.location+j);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let j=0;j<B.locationSize;j++)g(B.location+j,me/B.locationSize,Ze,le,me*et,me/B.locationSize*j*et,$)}}else if(G!==void 0){const le=G[Y];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(B.location,le);break;case 3:s.vertexAttrib3fv(B.location,le);break;case 4:s.vertexAttrib4fv(B.location,le);break;default:s.vertexAttrib1fv(B.location,le)}}}}E()}function T(){P();for(const y in n){const C=n[y];for(const U in C){const O=C[U];for(const q in O)d(O[q].object),delete O[q];delete C[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const U in C){const O=C[U];for(const q in O)d(O[q].object),delete O[q];delete C[U]}delete n[y.id]}function R(y){for(const C in n){const U=n[C];if(U[y.id]===void 0)continue;const O=U[y.id];for(const q in O)d(O[q].object),delete O[q];delete U[y.id]}}function P(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:_,disableUnusedAttributes:E}}function Im(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(s.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let h=0;for(let p=0;p<u;p++)h+=d[p];t.update(h,n,1)}function l(c,d,u,f){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],d[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=d[x]*f[x];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Pn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qn&&!P)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:E,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function Pm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Pi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||i;return i=f,n=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const p=u.clippingPlanes,x=u.clipIntersection,_=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!_)r?d(null):c();else{const E=r?0:n,g=E*4;let v=m.clippingState||null;l.value=v,v=d(p,f,g,h);for(let T=0;T!==g;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,p){const x=u!==null?u.length:0;let _=null;if(x!==0){if(_=l.value,p!==!0||_===null){const m=h+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<m)&&(_=new Float32Array(m));for(let g=0,v=h;g!==x;++g,v+=4)o.copy(u[g]).applyMatrix4(E,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function Dm(s){let e=new WeakMap;function t(o,a){return a===sa?o.mapping=ms:a===ra&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sa||a===ra)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rd(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const cs=4,pc=[.125,.215,.35,.446,.526,.582],Fi=20,Oo=new wh,mc=new We;let Bo=null,zo=0,Ho=0,Go=!1;const Di=(1+Math.sqrt(5))/2,os=1/Di,gc=[new D(-Di,os,0),new D(Di,os,0),new D(-os,0,Di),new D(os,0,Di),new D(0,Di,-os),new D(0,Di,os),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Um=new D;class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Um}=r;Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,zo,Ho),this._renderer.xr.enabled=Go,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:$s,format:Pn,colorSpace:_s,depthBuffer:!1},i=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=Fm(r,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,i,r){const l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(mc),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new Ni({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new Bt(new Mi,x);let m=!1;const E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,m=!0):(x.color.copy(mc),m=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[g],r.y,r.z)):v===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[g]));const T=this._cubeSize;Ir(i,v*T,g>2?T:0,T,T),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gc[(i-r-1)%gc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Bt(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Fi-1),x=r/p,_=isFinite(r)?1+Math.floor(d*x):Fi;_>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Fi}`);const m=[];let E=0;for(let R=0;R<Fi;++R){const P=R/x,b=Math.exp(-P*P/2);m.push(b),R===0?E+=b:R<_&&(E+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=p,f.mipInt.value=g-n;const v=this._sizeLods[i],T=3*v*(i>g-cs?i-g+cs:0),A=4*(this._cubeSize-v);Ir(t,T,A,3*v,2*v),l.setRenderTarget(t),l.render(u,Oo)}}function Nm(s){const e=[],t=[],n=[];let i=s;const r=s-cs+1+pc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-cs?l=pc[o-s+cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,p=6,x=3,_=2,m=1,E=new Float32Array(x*p*h),g=new Float32Array(_*p*h),v=new Float32Array(m*p*h);for(let A=0;A<h;A++){const R=A%3*2/3-1,P=A>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];E.set(b,x*p*A),g.set(f,_*p*A);const y=[A,A,A,A,A,A];v.set(y,m*p*A)}const T=new Zt;T.setAttribute("position",new Vn(E,x)),T.setAttribute("uv",new Vn(g,_)),T.setAttribute("faceIndex",new Vn(v,m)),e.push(T),i>cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(s,e,t){const n=new Gi(s,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fm(s,e,t){const n=new Float32Array(Fi),i=new D(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xc(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Mc(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sa||l===ra,d=l===ms||l===gs;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _c(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const h=a.image;return c&&h&&h.height>0||d&&h&&i(h)?(t===null&&(t=new _c(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Om(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bm(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const h in f)e.update(f[h],s.ARRAY_BUFFER)}function c(u){const f=[],h=u.index,p=u.attributes.position;let x=0;if(h!==null){const E=h.array;x=h.version;for(let g=0,v=E.length;g<v;g+=3){const T=E[g+0],A=E[g+1],R=E[g+2];f.push(T,A,A,R,R,T)}}else if(p!==void 0){const E=p.array;x=p.version;for(let g=0,v=E.length/3-1;g<v;g+=3){const T=g+0,A=g+1,R=g+2;f.push(T,A,A,R,R,T)}}else return;const _=new(hh(f)?mh:ph)(f,1);_.version=x;const m=r.get(u);m&&e.remove(m),r.set(u,_)}function d(u){const f=r.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function zm(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){s.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,p){p!==0&&(s.drawElementsInstanced(n,h,r,f*o,p),t.update(h,n,p))}function d(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,n,1)}function u(f,h,p,x){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{_.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,x,0,p);let m=0;for(let E=0;E<p;E++)m+=h[E]*x[E];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Hm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gm(s,e,t){const n=new WeakMap,i=new ot;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var h=y;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let T=a.attributes.position.count*v,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*u),P=new uh(R,T,A,u);P.type=Qn,P.needsUpdate=!0;const b=v*4;for(let C=0;C<u;C++){const U=m[C],O=E[C],q=g[C],W=T*A*4*C;for(let G=0;G<U.count;G++){const Y=G*b;p===!0&&(i.fromBufferAttribute(U,G),R[W+Y+0]=i.x,R[W+Y+1]=i.y,R[W+Y+2]=i.z,R[W+Y+3]=0),x===!0&&(i.fromBufferAttribute(O,G),R[W+Y+4]=i.x,R[W+Y+5]=i.y,R[W+Y+6]=i.z,R[W+Y+7]=0),_===!0&&(i.fromBufferAttribute(q,G),R[W+Y+8]=i.x,R[W+Y+9]=i.y,R[W+Y+10]=i.z,R[W+Y+11]=q.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new Je(T,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Vm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ah=new jt,yc=new Sh(1,1),Rh=new uh,Ch=new ud,Ih=new vh,Sc=[],bc=[],Ec=new Float32Array(16),wc=new Float32Array(9),Tc=new Float32Array(4);function Ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Sc[i];if(r===void 0&&(r=new Float32Array(i),Sc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function eo(s,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function Ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function $m(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Tc.set(n),s.uniformMatrix2fv(this.addr,!1,Tc),Rt(t,n)}}function Km(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;wc.set(n),s.uniformMatrix3fv(this.addr,!1,wc),Rt(t,n)}}function jm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Ec.set(n),s.uniformMatrix4fv(this.addr,!1,Ec),Rt(t,n)}}function Zm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function Qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function e0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function t0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function s0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function r0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yc.compareFunction=ch,r=yc):r=Ah,t.setTexture2D(e||r,i)}function o0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ch,i)}function a0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ih,i)}function l0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rh,i)}function c0(s){switch(s){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return $m;case 35675:return Km;case 35676:return jm;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(s,e){s.uniform1fv(this.addr,e)}function u0(s,e){const t=Ss(e,this.size,2);s.uniform2fv(this.addr,t)}function d0(s,e){const t=Ss(e,this.size,3);s.uniform3fv(this.addr,t)}function f0(s,e){const t=Ss(e,this.size,4);s.uniform4fv(this.addr,t)}function p0(s,e){const t=Ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function m0(s,e){const t=Ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function g0(s,e){const t=Ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _0(s,e){s.uniform1iv(this.addr,e)}function v0(s,e){s.uniform2iv(this.addr,e)}function x0(s,e){s.uniform3iv(this.addr,e)}function M0(s,e){s.uniform4iv(this.addr,e)}function y0(s,e){s.uniform1uiv(this.addr,e)}function S0(s,e){s.uniform2uiv(this.addr,e)}function b0(s,e){s.uniform3uiv(this.addr,e)}function E0(s,e){s.uniform4uiv(this.addr,e)}function w0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ah,r[o])}function T0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ch,r[o])}function A0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ih,r[o])}function R0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rh,r[o])}function C0(s){switch(s){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return x0;case 35669:case 35673:return M0;case 5125:return y0;case 36294:return S0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c0(t.type)}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}}class P0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Ac(s,e){s.seq.push(e),s.map[e.id]=e}function D0(s,e,t){const n=s.name,i=n.length;for(Vo.lastIndex=0;;){const r=Vo.exec(n),o=Vo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ac(t,c===void 0?new I0(a,s,e):new L0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new P0(a),Ac(t,u)),t=u}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);D0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const U0=37297;let N0=0;function F0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Cc=new He;function k0(s){nt._getMatrix(Cc,nt.workingColorSpace,s);const e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case Wr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ic(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+F0(s.getShaderSource(e),a)}else return r}function O0(s,e){const t=k0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B0(s,e){let t;switch(e){case Eu:t="Linear";break;case wu:t="Reinhard";break;case Tu:t="Cineon";break;case Au:t="ACESFilmic";break;case Cu:t="AgX";break;case Iu:t="Neutral";break;case Ru:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lr=new D;function z0(){nt.getLuminanceCoefficients(Lr);const s=Lr.x.toFixed(4),e=Lr.y.toFixed(4),t=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function G0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Us(s){return s!==""}function Lc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(s){return s.replace(W0,q0)}const X0=new Map;function q0(s,e){let t=Ve[e];if(t===void 0){const n=X0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ka(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(s){return s.replace(Y0,$0)}function $0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function j0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function J0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case Su:e="ENVMAP_BLENDING_MIX";break;case bu:e="ENVMAP_BLENDING_ADD";break}return e}function Q0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=K0(t),c=j0(t),d=Z0(t),u=J0(t),f=Q0(t),h=H0(t),p=G0(r),x=i.createProgram();let _,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Us).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Us).join(`
`),m.length>0&&(m+=`
`)):(_=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),m=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==gi?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,O0("linearToOutputTexel",t.outputColorSpace),z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=ka(o),o=Lc(o,t),o=Pc(o,t),a=ka(a),a=Lc(a,t),a=Pc(a,t),o=Dc(o),a=Dc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=E+_+o,v=E+m+a,T=Rc(i,i.VERTEX_SHADER,g),A=Rc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(C){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",O=i.getShaderInfoLog(T)||"",q=i.getShaderInfoLog(A)||"",W=U.trim(),G=O.trim(),Y=q.trim();let B=!0,ne=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,A);else{const le=Ic(i,T,"vertex"),me=Ic(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+le+`
`+me)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Y==="")&&(ne=!1);ne&&(C.diagnostics={runnable:B,programLog:W,vertexShader:{log:G,prefix:_},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(T),i.deleteShader(A),P=new zr(i,x),b=V0(i,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,U0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}let tg=0;class ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ig(e),t.set(e,n)),n}}class ig{constructor(e){this.id=tg++,this.code=e,this.usedTimes=0}}function sg(s,e,t,n,i,r,o){const a=new dh,l=new ng,c=new Set,d=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,y,C,U,O){const q=U.fog,W=O.geometry,G=b.isMeshStandardMaterial?U.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),B=Y&&Y.mapping===Jr?Y.image.height:null,ne=p[b.type];b.precision!==null&&(h=i.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=le!==void 0?le.length:0;let Te=0;W.morphAttributes.position!==void 0&&(Te=1),W.morphAttributes.normal!==void 0&&(Te=2),W.morphAttributes.color!==void 0&&(Te=3);let $e,Ze,et,$;if(ne){const it=kn[ne];$e=it.vertexShader,Ze=it.fragmentShader}else $e=b.vertexShader,Ze=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),$=l.getFragmentShaderID(b);const j=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,Qe=!!b.map,Dt=!!b.matcap,I=!!Y,dt=!!b.aoMap,Be=!!b.lightMap,Le=!!b.bumpMap,_e=!!b.normalMap,ft=!!b.displacementMap,ve=!!b.emissiveMap,Ge=!!b.metalnessMap,Ct=!!b.roughnessMap,Mt=b.anisotropy>0,w=b.clearcoat>0,M=b.dispersion>0,k=b.iridescence>0,X=b.sheen>0,Z=b.transmission>0,V=Mt&&!!b.anisotropyMap,be=w&&!!b.clearcoatMap,ie=w&&!!b.clearcoatNormalMap,Me=w&&!!b.clearcoatRoughnessMap,ye=k&&!!b.iridescenceMap,ee=k&&!!b.iridescenceThicknessMap,ce=X&&!!b.sheenColorMap,Ie=X&&!!b.sheenRoughnessMap,Se=!!b.specularMap,oe=!!b.specularColorMap,ze=!!b.specularIntensityMap,L=Z&&!!b.transmissionMap,te=Z&&!!b.thicknessMap,se=!!b.gradientMap,de=!!b.alphaMap,J=b.alphaTest>0,K=!!b.alphaHash,ge=!!b.extensions;let ke=gi;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=s.toneMapping);const ct={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:$e,fragmentShader:Ze,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:_s,alphaToCoverage:!!b.alphaToCoverage,map:Qe,matcap:Dt,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:B,aoMap:dt,lightMap:Be,bumpMap:Le,normalMap:_e,displacementMap:f&&ft,emissiveMap:ve,normalMapObjectSpace:_e&&b.normalMapType===Uu,normalMapTangentSpace:_e&&b.normalMapType===lh,metalnessMap:Ge,roughnessMap:Ct,anisotropy:Mt,anisotropyMap:V,clearcoat:w,clearcoatMap:be,clearcoatNormalMap:ie,clearcoatRoughnessMap:Me,dispersion:M,iridescence:k,iridescenceMap:ye,iridescenceThicknessMap:ee,sheen:X,sheenColorMap:ce,sheenRoughnessMap:Ie,specularMap:Se,specularColorMap:oe,specularIntensityMap:ze,transmission:Z,transmissionMap:L,thicknessMap:te,gradientMap:se,opaque:b.transparent===!1&&b.blending===hs&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:K,combine:b.combine,mapUv:Qe&&x(b.map.channel),aoMapUv:dt&&x(b.aoMap.channel),lightMapUv:Be&&x(b.lightMap.channel),bumpMapUv:Le&&x(b.bumpMap.channel),normalMapUv:_e&&x(b.normalMap.channel),displacementMapUv:ft&&x(b.displacementMap.channel),emissiveMapUv:ve&&x(b.emissiveMap.channel),metalnessMapUv:Ge&&x(b.metalnessMap.channel),roughnessMapUv:Ct&&x(b.roughnessMap.channel),anisotropyMapUv:V&&x(b.anisotropyMap.channel),clearcoatMapUv:be&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(b.sheenRoughnessMap.channel),specularMapUv:Se&&x(b.specularMap.channel),specularColorMapUv:oe&&x(b.specularColorMap.channel),specularIntensityMapUv:ze&&x(b.specularIntensityMap.channel),transmissionMapUv:L&&x(b.transmissionMap.channel),thicknessMapUv:te&&x(b.thicknessMap.channel),alphaMapUv:de&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_e||Mt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Qe||de),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Qe&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:ve&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function m(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(E(y,b),g(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function g(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const y=p[b.type];let C;if(y){const U=kn[y];C=Ed.clone(U.uniforms)}else C=b.uniforms;return C}function T(b,y){let C;for(let U=0,O=d.length;U<O;U++){const q=d[U];if(q.cacheKey===y){C=q,++C.usedTimes;break}}return C===void 0&&(C=new eg(s,y,b,r),d.push(C)),C}function A(b){if(--b.usedTimes===0){const y=d.indexOf(b);d[y]=d[d.length-1],d.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:P}}function rg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Nc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,h,p,x,_){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:h,groupOrder:p,renderOrder:u.renderOrder,z:x,group:_},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=_),e++,m}function a(u,f,h,p,x,_){const m=o(u,f,h,p,x,_);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):t.push(m)}function l(u,f,h,p,x,_){const m=o(u,f,h,p,x,_);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||og),n.length>1&&n.sort(f||Nc),i.length>1&&i.sort(f||Nc)}function d(){for(let u=e,f=s.length;u<f;u++){const h=s[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function ag(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Fc,s.set(n,[o])):i>=r.length?(o=new Fc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function lg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function cg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hg=0;function ug(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dg(s){const e=new lg,t=cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new pt,o=new pt;function a(c){let d=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let h=0,p=0,x=0,_=0,m=0,E=0,g=0,v=0,T=0,A=0,R=0;c.sort(ug);for(let b=0,y=c.length;b<y;b++){const C=c[b],U=C.color,O=C.intensity,q=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=U.r*O,u+=U.g*O,f+=U.b*O;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],O);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[h]=B,n.directionalShadowMap[h]=W,n.directionalShadowMatrix[h]=C.shadow.matrix,E++}n.directional[h]=G,h++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(O),G.distance=q,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const Y=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,Y.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=Y.matrix,C.castShadow){const B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=W,v++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(O),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=G,_++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Y=C.shadow,B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=C.shadow.matrix,g++}n.point[p]=G,p++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(O),G.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[m]=G,m++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==_||P.hemiLength!==m||P.numDirectionalShadows!==E||P.numPointShadows!==g||P.numSpotShadows!==v||P.numSpotMaps!==T||P.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=h,P.pointLength=p,P.spotLength=x,P.rectAreaLength=_,P.hemiLength=m,P.numDirectionalShadows=E,P.numPointShadows=g,P.numSpotShadows=v,P.numSpotMaps=T,P.numLightProbes=R,n.version=hg++)}function l(c,d){let u=0,f=0,h=0,p=0,x=0;const _=d.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const g=c[m];if(g.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),u++}else if(g.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),h++}else if(g.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(g.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(g.width*.5,0,0),v.halfHeight.set(0,g.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),f++}else if(g.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:n}}function kc(s){const e=new dg(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new kc(s),e.set(i,[a])):r>=o.length?(a=new kc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gg(s,e,t){let n=new rl;const i=new Je,r=new Je,o=new ot,a=new Od({depthPacking:Du}),l=new Bd,c={},d=t.maxTextureSize,u={[xi]:en,[en]:xi,[Ot]:Ot},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new Zt;p.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bt(p,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let m=this.type;this.render=function(A,R,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),U=s.state;U.setBlending(mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=m!==Jn&&this.type===Jn,q=m===Jn&&this.type!==Jn;for(let W=0,G=A.length;W<G;W++){const Y=A[W],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const ne=B.getFrameExtents();if(i.multiply(ne),r.copy(B.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ne.x),i.x=r.x*ne.x,B.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ne.y),i.y=r.y*ne.y,B.mapSize.y=r.y)),B.map===null||O===!0||q===!0){const me=this.type!==Jn?{minFilter:hn,magFilter:hn}:{};B.map!==null&&B.map.dispose(),B.map=new Gi(i.x,i.y,me),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const le=B.getViewportCount();for(let me=0;me<le;me++){const Te=B.getViewport(me);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),U.viewport(o),B.updateMatrices(Y,me),n=B.getFrustum(),v(R,P,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Jn&&E(B,P),B.needsUpdate=!1}m=this.type,_.needsUpdate=!1,s.setRenderTarget(b,y,C)};function E(A,R){const P=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,P,f,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,P,h,x,null)}function g(A,R,P,b){let y=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=y.uuid,O=R.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let W=q[O];W===void 0&&(W=y.clone(),q[O]=W,R.addEventListener("dispose",T)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Jn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=s.properties.get(y);U.light=P}return y}function v(A,R,P,b,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),q=A.material;if(Array.isArray(q)){const W=O.groups;for(let G=0,Y=W.length;G<Y;G++){const B=W[G],ne=q[B.materialIndex];if(ne&&ne.visible){const le=g(A,ne,b,y);A.onBeforeShadow(s,A,R,P,O,le,B),s.renderBufferDirect(P,null,O,le,A,B),A.onAfterShadow(s,A,R,P,O,le,B)}}}else if(q.visible){const W=g(A,q,b,y);A.onBeforeShadow(s,A,R,P,O,W,null),s.renderBufferDirect(P,null,O,W,A,null),A.onAfterShadow(s,A,R,P,O,W,null)}}const U=A.children;for(let O=0,q=U.length;O<q;O++)v(U[O],R,P,b,y)}function T(A){A.target.removeEventListener("dispose",T);for(const P in c){const b=c[P],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const _g={[Zo]:Jo,[Qo]:na,[ea]:ia,[ps]:ta,[Jo]:Zo,[na]:Qo,[ia]:ea,[ta]:ps};function vg(s,e){function t(){let L=!1;const te=new ot;let se=null;const de=new ot(0,0,0,0);return{setMask:function(J){se!==J&&!L&&(s.colorMask(J,J,J,J),se=J)},setLocked:function(J){L=J},setClear:function(J,K,ge,ke,ct){ct===!0&&(J*=ke,K*=ke,ge*=ke),te.set(J,K,ge,ke),de.equals(te)===!1&&(s.clearColor(J,K,ge,ke),de.copy(te))},reset:function(){L=!1,se=null,de.set(-1,0,0,0)}}}function n(){let L=!1,te=!1,se=null,de=null,J=null;return{setReversed:function(K){if(te!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),te=K;const ke=J;J=null,this.setClear(ke)}},getReversed:function(){return te},setTest:function(K){K?j(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(K){se!==K&&!L&&(s.depthMask(K),se=K)},setFunc:function(K){if(te&&(K=_g[K]),de!==K){switch(K){case Zo:s.depthFunc(s.NEVER);break;case Jo:s.depthFunc(s.ALWAYS);break;case Qo:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case ea:s.depthFunc(s.EQUAL);break;case ta:s.depthFunc(s.GEQUAL);break;case na:s.depthFunc(s.GREATER);break;case ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=K}},setLocked:function(K){L=K},setClear:function(K){J!==K&&(te&&(K=1-K),s.clearDepth(K),J=K)},reset:function(){L=!1,se=null,de=null,J=null,te=!1}}}function i(){let L=!1,te=null,se=null,de=null,J=null,K=null,ge=null,ke=null,ct=null;return{setTest:function(it){L||(it?j(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(it){te!==it&&!L&&(s.stencilMask(it),te=it)},setFunc:function(it,qn,Nn){(se!==it||de!==qn||J!==Nn)&&(s.stencilFunc(it,qn,Nn),se=it,de=qn,J=Nn)},setOp:function(it,qn,Nn){(K!==it||ge!==qn||ke!==Nn)&&(s.stencilOp(it,qn,Nn),K=it,ge=qn,ke=Nn)},setLocked:function(it){L=it},setClear:function(it){ct!==it&&(s.clearStencil(it),ct=it)},reset:function(){L=!1,te=null,se=null,de=null,J=null,K=null,ge=null,ke=null,ct=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,h=[],p=null,x=!1,_=null,m=null,E=null,g=null,v=null,T=null,A=null,R=new We(0,0,0),P=0,b=!1,y=null,C=null,U=null,O=null,q=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Y>=2);let ne=null,le={};const me=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),$e=new ot().fromArray(me),Ze=new ot().fromArray(Te);function et(L,te,se,de){const J=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<se;ge++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(te+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return K}const $={};$[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(ps),Le(!1),_e(Pl),j(s.CULL_FACE),dt(mi);function j(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function ue(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ne(L,te){return u[L]!==te?(s.bindFramebuffer(L,te),u[L]=te,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=te),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Ee(L,te){let se=h,de=!1;if(L){se=f.get(te),se===void 0&&(se=[],f.set(te,se));const J=L.textures;if(se.length!==J.length||se[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ge=J.length;K<ge;K++)se[K]=s.COLOR_ATTACHMENT0+K;se.length=J.length,de=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,de=!0);de&&s.drawBuffers(se)}function Qe(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Dt={[Ui]:s.FUNC_ADD,[ru]:s.FUNC_SUBTRACT,[ou]:s.FUNC_REVERSE_SUBTRACT};Dt[au]=s.MIN,Dt[lu]=s.MAX;const I={[cu]:s.ZERO,[hu]:s.ONE,[uu]:s.SRC_COLOR,[Ko]:s.SRC_ALPHA,[_u]:s.SRC_ALPHA_SATURATE,[mu]:s.DST_COLOR,[fu]:s.DST_ALPHA,[du]:s.ONE_MINUS_SRC_COLOR,[jo]:s.ONE_MINUS_SRC_ALPHA,[gu]:s.ONE_MINUS_DST_COLOR,[pu]:s.ONE_MINUS_DST_ALPHA,[vu]:s.CONSTANT_COLOR,[xu]:s.ONE_MINUS_CONSTANT_COLOR,[Mu]:s.CONSTANT_ALPHA,[yu]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(L,te,se,de,J,K,ge,ke,ct,it){if(L===mi){x===!0&&(ue(s.BLEND),x=!1);return}if(x===!1&&(j(s.BLEND),x=!0),L!==su){if(L!==_||it!==b){if((m!==Ui||v!==Ui)&&(s.blendEquation(s.FUNC_ADD),m=Ui,v=Ui),it)switch(L){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dl:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ul:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,g=null,T=null,A=null,R.set(0,0,0),P=0,_=L,b=it}return}J=J||te,K=K||se,ge=ge||de,(te!==m||J!==v)&&(s.blendEquationSeparate(Dt[te],Dt[J]),m=te,v=J),(se!==E||de!==g||K!==T||ge!==A)&&(s.blendFuncSeparate(I[se],I[de],I[K],I[ge]),E=se,g=de,T=K,A=ge),(ke.equals(R)===!1||ct!==P)&&(s.blendColor(ke.r,ke.g,ke.b,ct),R.copy(ke),P=ct),_=L,b=!1}function Be(L,te){L.side===Ot?ue(s.CULL_FACE):j(s.CULL_FACE);let se=L.side===en;te&&(se=!se),Le(se),L.blending===hs&&L.transparent===!1?dt(mi):dt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;a.setTest(de),de&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){y!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),y=L)}function _e(L){L!==tu?(j(s.CULL_FACE),L!==C&&(L===Pl?s.cullFace(s.BACK):L===nu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),C=L}function ft(L){L!==U&&(G&&s.lineWidth(L),U=L)}function ve(L,te,se){L?(j(s.POLYGON_OFFSET_FILL),(O!==te||q!==se)&&(s.polygonOffset(te,se),O=te,q=se)):ue(s.POLYGON_OFFSET_FILL)}function Ge(L){L?j(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=s.TEXTURE0+W-1),ne!==L&&(s.activeTexture(L),ne=L)}function Mt(L,te,se){se===void 0&&(ne===null?se=s.TEXTURE0+W-1:se=ne);let de=le[se];de===void 0&&(de={type:void 0,texture:void 0},le[se]=de),(de.type!==L||de.texture!==te)&&(ne!==se&&(s.activeTexture(se),ne=se),s.bindTexture(L,te||$[L]),de.type=L,de.texture=te)}function w(){const L=le[ne];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){$e.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),$e.copy(L))}function Ie(L){Ze.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Ze.copy(L))}function Se(L,te){let se=c.get(te);se===void 0&&(se=new WeakMap,c.set(te,se));let de=se.get(L);de===void 0&&(de=s.getUniformBlockIndex(te,L.name),se.set(L,de))}function oe(L,te){const de=c.get(te).get(L);l.get(te)!==de&&(s.uniformBlockBinding(te,de,L.__bindingPointIndex),l.set(te,de))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ne=null,le={},u={},f=new WeakMap,h=[],p=null,x=!1,_=null,m=null,E=null,g=null,v=null,T=null,A=null,R=new We(0,0,0),P=0,b=!1,y=null,C=null,U=null,O=null,q=null,$e.set(0,0,s.canvas.width,s.canvas.height),Ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ue,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:Qe,setBlending:dt,setMaterial:Be,setFlipSided:Le,setCullFace:_e,setLineWidth:ft,setPolygonOffset:ve,setScissorTest:Ge,activeTexture:Ct,bindTexture:Mt,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:ye,texImage3D:ee,updateUBOMapping:Se,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:Me,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:V,compressedTexSubImage3D:be,scissor:ce,viewport:Ie,reset:ze}}function xg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,M){return h?new OffscreenCanvas(w,M):qr("canvas")}function x(w,M,k){let X=1;const Z=Mt(w);if((Z.width>k||Z.height>k)&&(X=k/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(X*Z.width),be=Math.floor(X*Z.height);u===void 0&&(u=p(V,be));const ie=M?p(V,be):u;return ie.width=V,ie.height=be,ie.getContext("2d").drawImage(w,0,0,V,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+be+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function _(w){return w.generateMipmaps}function m(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function g(w,M,k,X,Z=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=M;if(M===s.RED&&(k===s.FLOAT&&(V=s.R32F),k===s.HALF_FLOAT&&(V=s.R16F),k===s.UNSIGNED_BYTE&&(V=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(V=s.R8UI),k===s.UNSIGNED_SHORT&&(V=s.R16UI),k===s.UNSIGNED_INT&&(V=s.R32UI),k===s.BYTE&&(V=s.R8I),k===s.SHORT&&(V=s.R16I),k===s.INT&&(V=s.R32I)),M===s.RG&&(k===s.FLOAT&&(V=s.RG32F),k===s.HALF_FLOAT&&(V=s.RG16F),k===s.UNSIGNED_BYTE&&(V=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(V=s.RG8UI),k===s.UNSIGNED_SHORT&&(V=s.RG16UI),k===s.UNSIGNED_INT&&(V=s.RG32UI),k===s.BYTE&&(V=s.RG8I),k===s.SHORT&&(V=s.RG16I),k===s.INT&&(V=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(V=s.RGB8UI),k===s.UNSIGNED_SHORT&&(V=s.RGB16UI),k===s.UNSIGNED_INT&&(V=s.RGB32UI),k===s.BYTE&&(V=s.RGB8I),k===s.SHORT&&(V=s.RGB16I),k===s.INT&&(V=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),k===s.UNSIGNED_INT&&(V=s.RGBA32UI),k===s.BYTE&&(V=s.RGBA8I),k===s.SHORT&&(V=s.RGBA16I),k===s.INT&&(V=s.RGBA32I)),M===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),M===s.RGBA){const be=Z?Wr:nt.getTransfer(X);k===s.FLOAT&&(V=s.RGBA32F),k===s.HALF_FLOAT&&(V=s.RGBA16F),k===s.UNSIGNED_BYTE&&(V=be===rt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(w,M){let k;return w?M===null||M===Hi||M===Hs?k=s.DEPTH24_STENCIL8:M===Qn?k=s.DEPTH32F_STENCIL8:M===zs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===Hs?k=s.DEPTH_COMPONENT24:M===Qn?k=s.DEPTH_COMPONENT32F:M===zs&&(k=s.DEPTH_COMPONENT16),k}function T(w,M){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==hn&&w.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),P(M),M.isVideoTexture&&d.delete(M)}function R(w){const M=w.target;M.removeEventListener("dispose",R),y(M)}function P(w){const M=n.get(w);if(M.__webglInit===void 0)return;const k=w.source,X=f.get(k);if(X){const Z=X[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(w),Object.keys(X).length===0&&f.delete(k)}n.remove(w)}function b(w){const M=n.get(w);s.deleteTexture(M.__webglTexture);const k=w.source,X=f.get(k);delete X[M.__cacheKey],o.memory.textures--}function y(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Z=0;Z<M.__webglFramebuffer[X].length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[X][Z]);else s.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)s.deleteFramebuffer(M.__webglFramebuffer[X]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=w.textures;for(let X=0,Z=k.length;X<Z;X++){const V=n.get(k[X]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(w)}let C=0;function U(){C=0}function O(){const w=C;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),C+=1,w}function q(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function W(w,M){const k=n.get(w);if(w.isVideoTexture&&Ge(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,w,M);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function G(w,M){const k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){$(k,w,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function Y(w,M){const k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){$(k,w,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function B(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const ne={[oa]:s.REPEAT,[Oi]:s.CLAMP_TO_EDGE,[aa]:s.MIRRORED_REPEAT},le={[hn]:s.NEAREST,[Lu]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[ho]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},me={[Nu]:s.NEVER,[Hu]:s.ALWAYS,[Fu]:s.LESS,[ch]:s.LEQUAL,[ku]:s.EQUAL,[zu]:s.GEQUAL,[Ou]:s.GREATER,[Bu]:s.NOTEQUAL};function Te(w,M){if(M.type===Qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===ho||M.magFilter===sr||M.magFilter===Bi||M.minFilter===Bn||M.minFilter===ho||M.minFilter===sr||M.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,ne[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ne[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ne[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,le[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==sr&&M.minFilter!==Bi||M.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $e(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const X=M.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const V=q(M);if(V!==w.__cacheKey){Z[V]===void 0&&(Z[V]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[V].usedTimes++;const be=Z[w.__cacheKey];be!==void 0&&(Z[w.__cacheKey].usedTimes--,be.usedTimes===0&&b(M)),w.__cacheKey=V,w.__webglTexture=Z[V].texture}return k}function Ze(w,M,k){return Math.floor(Math.floor(w/k)/M)}function et(w,M,k,X){const V=w.updateRanges;if(V.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,k,X,M.data);else{V.sort((ee,ce)=>ee.start-ce.start);let be=0;for(let ee=1;ee<V.length;ee++){const ce=V[be],Ie=V[ee],Se=ce.start+ce.count,oe=Ze(Ie.start,M.width,4),ze=Ze(ce.start,M.width,4);Ie.start<=Se+1&&oe===ze&&Ze(Ie.start+Ie.count-1,M.width,4)===oe?ce.count=Math.max(ce.count,Ie.start+Ie.count-ce.start):(++be,V[be]=Ie)}V.length=be+1;const ie=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ee=0,ce=V.length;ee<ce;ee++){const Ie=V[ee],Se=Math.floor(Ie.start/4),oe=Math.ceil(Ie.count/4),ze=Se%M.width,L=Math.floor(Se/M.width),te=oe,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,ze,L,te,se,k,X,M.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function $(w,M,k){let X=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=s.TEXTURE_3D);const Z=$e(w,M),V=M.source;t.bindTexture(X,w.__webglTexture,s.TEXTURE0+k);const be=n.get(V);if(V.version!==be.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const ie=nt.getPrimaries(nt.workingColorSpace),Me=M.colorSpace===fi?null:nt.getPrimaries(M.colorSpace),ye=M.colorSpace===fi||ie===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ee=x(M.image,!1,i.maxTextureSize);ee=Ct(M,ee);const ce=r.convert(M.format,M.colorSpace),Ie=r.convert(M.type);let Se=g(M.internalFormat,ce,Ie,M.colorSpace,M.isVideoTexture);Te(X,M);let oe;const ze=M.mipmaps,L=M.isVideoTexture!==!0,te=be.__version===void 0||Z===!0,se=V.dataReady,de=T(M,ee);if(M.isDepthTexture)Se=v(M.format===Vs,M.type),te&&(L?t.texStorage2D(s.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,ce,Ie,null));else if(M.isDataTexture)if(ze.length>0){L&&te&&t.texStorage2D(s.TEXTURE_2D,de,Se,ze[0].width,ze[0].height);for(let J=0,K=ze.length;J<K;J++)oe=ze[J],L?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Ie,oe.data):t.texImage2D(s.TEXTURE_2D,J,Se,oe.width,oe.height,0,ce,Ie,oe.data);M.generateMipmaps=!1}else L?(te&&t.texStorage2D(s.TEXTURE_2D,de,Se,ee.width,ee.height),se&&et(M,ee,ce,Ie)):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,ce,Ie,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Se,ze[0].width,ze[0].height,ee.depth);for(let J=0,K=ze.length;J<K;J++)if(oe=ze[J],M.format!==Pn)if(ce!==null)if(L){if(se)if(M.layerUpdates.size>0){const ge=fc(oe.width,oe.height,M.format,M.type);for(const ke of M.layerUpdates){const ct=oe.data.subarray(ke*ge/oe.data.BYTES_PER_ELEMENT,(ke+1)*ge/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,ke,oe.width,oe.height,1,ce,ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Se,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,Ie,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Se,oe.width,oe.height,ee.depth,0,ce,Ie,oe.data)}else{L&&te&&t.texStorage2D(s.TEXTURE_2D,de,Se,ze[0].width,ze[0].height);for(let J=0,K=ze.length;J<K;J++)oe=ze[J],M.format!==Pn?ce!==null?L?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Ie,oe.data):t.texImage2D(s.TEXTURE_2D,J,Se,oe.width,oe.height,0,ce,Ie,oe.data)}else if(M.isDataArrayTexture)if(L){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Se,ee.width,ee.height,ee.depth),se)if(M.layerUpdates.size>0){const J=fc(ee.width,ee.height,M.format,M.type);for(const K of M.layerUpdates){const ge=ee.data.subarray(K*J/ee.data.BYTES_PER_ELEMENT,(K+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ce,Ie,ge)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ie,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,ce,Ie,ee.data);else if(M.isData3DTexture)L?(te&&t.texStorage3D(s.TEXTURE_3D,de,Se,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ie,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,ce,Ie,ee.data);else if(M.isFramebufferTexture){if(te)if(L)t.texStorage2D(s.TEXTURE_2D,de,Se,ee.width,ee.height);else{let J=ee.width,K=ee.height;for(let ge=0;ge<de;ge++)t.texImage2D(s.TEXTURE_2D,ge,Se,J,K,0,ce,Ie,null),J>>=1,K>>=1}}else if(ze.length>0){if(L&&te){const J=Mt(ze[0]);t.texStorage2D(s.TEXTURE_2D,de,Se,J.width,J.height)}for(let J=0,K=ze.length;J<K;J++)oe=ze[J],L?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce,Ie,oe):t.texImage2D(s.TEXTURE_2D,J,Se,ce,Ie,oe);M.generateMipmaps=!1}else if(L){if(te){const J=Mt(ee);t.texStorage2D(s.TEXTURE_2D,de,Se,J.width,J.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Ie,ee)}else t.texImage2D(s.TEXTURE_2D,0,Se,ce,Ie,ee);_(M)&&m(X),be.__version=V.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function j(w,M,k){if(M.image.length!==6)return;const X=$e(w,M),Z=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const V=n.get(Z);if(Z.version!==V.__version||X===!0){t.activeTexture(s.TEXTURE0+k);const be=nt.getPrimaries(nt.workingColorSpace),ie=M.colorSpace===fi?null:nt.getPrimaries(M.colorSpace),Me=M.colorSpace===fi||be===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!ye&&!ee?ce[K]=x(M.image[K],!0,i.maxCubemapSize):ce[K]=ee?M.image[K].image:M.image[K],ce[K]=Ct(M,ce[K]);const Ie=ce[0],Se=r.convert(M.format,M.colorSpace),oe=r.convert(M.type),ze=g(M.internalFormat,Se,oe,M.colorSpace),L=M.isVideoTexture!==!0,te=V.__version===void 0||X===!0,se=Z.dataReady;let de=T(M,Ie);Te(s.TEXTURE_CUBE_MAP,M);let J;if(ye){L&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ze,Ie.width,Ie.height);for(let K=0;K<6;K++){J=ce[K].mipmaps;for(let ge=0;ge<J.length;ge++){const ke=J[ge];M.format!==Pn?Se!==null?L?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,ke.width,ke.height,Se,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,ze,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,ke.width,ke.height,Se,oe,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,ze,ke.width,ke.height,0,Se,oe,ke.data)}}}else{if(J=M.mipmaps,L&&te){J.length>0&&de++;const K=Mt(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ze,K.width,K.height)}for(let K=0;K<6;K++)if(ee){L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Se,oe,ce[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,ce[K].width,ce[K].height,0,Se,oe,ce[K].data);for(let ge=0;ge<J.length;ge++){const ct=J[ge].image[K].image;L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,ct.width,ct.height,Se,oe,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,ze,ct.width,ct.height,0,Se,oe,ct.data)}}else{L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,oe,ce[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,Se,oe,ce[K]);for(let ge=0;ge<J.length;ge++){const ke=J[ge];L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Se,oe,ke.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,ze,Se,oe,ke.image[K])}}}_(M)&&m(s.TEXTURE_CUBE_MAP),V.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ue(w,M,k,X,Z,V){const be=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),Me=g(k.internalFormat,be,ie,k.colorSpace),ye=n.get(M),ee=n.get(k);if(ee.__renderTarget=M,!ye.__hasExternalTextures){const ce=Math.max(1,M.width>>V),Ie=Math.max(1,M.height>>V);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,V,Me,ce,Ie,M.depth,0,be,ie,null):t.texImage2D(Z,V,Me,ce,Ie,0,be,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ve(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Z,ee.__webglTexture,0,ft(M)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Z,ee.__webglTexture,V),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(w,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer){const X=M.depthTexture,Z=X&&X.isDepthTexture?X.type:null,V=v(M.stencilBuffer,Z),be=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=ft(M);ve(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,V,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,V,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,V,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,w)}else{const X=M.textures;for(let Z=0;Z<X.length;Z++){const V=X[Z],be=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),Me=g(V.internalFormat,be,ie,V.colorSpace),ye=ft(M);k&&ve(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Me,M.width,M.height):ve(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,Me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Me,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Z=X.__webglTexture,V=ft(M);if(M.depthTexture.format===Gs)ve(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Vs)ve(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Qe(w){const M=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=X}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const X=w.texture.mipmaps;X&&X.length>0?Ee(M.__webglFramebuffer[0],w):Ee(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=s.createRenderbuffer(),Ne(M.__webglDepthbuffer[X],w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,V)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ne(M.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,V)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(w,M,k){const X=n.get(w);M!==void 0&&ue(X.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Qe(w)}function I(w){const M=w.texture,k=n.get(w),X=n.get(M);w.addEventListener("dispose",R);const Z=w.textures,V=w.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=M.version,o.memory.textures++),V){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let Me=0;Me<M.mipmaps.length;Me++)k.__webglFramebuffer[ie][Me]=s.createFramebuffer()}else k.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)k.__webglFramebuffer[ie]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(be)for(let ie=0,Me=Z.length;ie<Me;ie++){const ye=n.get(Z[ie]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&ve(w)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const Me=Z[ie];k.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);const ye=r.convert(Me.format,Me.colorSpace),ee=r.convert(Me.type),ce=g(Me.internalFormat,ye,ee,Me.colorSpace,w.isXRRenderTarget===!0),Ie=ft(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Te(s.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ue(k.__webglFramebuffer[ie][Me],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me);else ue(k.__webglFramebuffer[ie],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);_(M)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ie=0,Me=Z.length;ie<Me;ie++){const ye=Z[ie],ee=n.get(ye);let ce=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Te(ce,ye),ue(k.__webglFramebuffer,w,ye,s.COLOR_ATTACHMENT0+ie,ce,0),_(ye)&&m(ce)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,X.__webglTexture),Te(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ue(k.__webglFramebuffer[Me],w,M,s.COLOR_ATTACHMENT0,ie,Me);else ue(k.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,ie,0);_(M)&&m(ie),t.unbindTexture()}w.depthBuffer&&Qe(w)}function dt(w){const M=w.textures;for(let k=0,X=M.length;k<X;k++){const Z=M[k];if(_(Z)){const V=E(w),be=n.get(Z).__webglTexture;t.bindTexture(V,be),m(V),t.unbindTexture()}}}const Be=[],Le=[];function _e(w){if(w.samples>0){if(ve(w)===!1){const M=w.textures,k=w.width,X=w.height;let Z=s.COLOR_BUFFER_BIT;const V=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(w),ie=M.length>1;if(ie)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Me=w.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const ee=n.get(M[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,Z,s.NEAREST),l===!0&&(Be.length=0,Le.length=0,Be.push(s.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Be.push(V),Le.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const ee=n.get(M[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ft(w){return Math.min(i.maxSamples,w.samples)}function ve(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(w){const M=o.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}function Ct(w,M){const k=w.colorSpace,X=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==_s&&k!==fi&&(nt.getTransfer(k)===rt?(X!==Pn||Z!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Dt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ve}function Mg(s,e){function t(n,i=fi){let r;const o=nt.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return s.BYTE;if(n===th)return s.SHORT;if(n===zs)return s.UNSIGNED_SHORT;if(n===Ka)return s.INT;if(n===Hi)return s.UNSIGNED_INT;if(n===Qn)return s.FLOAT;if(n===$s)return s.HALF_FLOAT;if(n===sh)return s.ALPHA;if(n===rh)return s.RGB;if(n===Pn)return s.RGBA;if(n===Gs)return s.DEPTH_COMPONENT;if(n===Vs)return s.DEPTH_STENCIL;if(n===oh)return s.RED;if(n===Ja)return s.RED_INTEGER;if(n===ah)return s.RG;if(n===Qa)return s.RG_INTEGER;if(n===el)return s.RGBA_INTEGER;if(n===Fr||n===kr||n===Or||n===Br)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ca||n===ha||n===ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===fa)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ya)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Ia||n===La)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ca)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pa||n===Da||n===Ua||n===Na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yi({vertexShader:yg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eg extends Ms{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,h=null,p=null;const x=typeof XRWebGLBinding<"u",_=new bg,m={},E=t.getContextAttributes();let g=null,v=null;const T=[],A=[],R=new Je;let P=null;const b=new ln;b.viewport=new ot;const y=new ln;y.viewport=new ot;const C=[b,y],U=new Wd;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=T[$];return j===void 0&&(j=new Po,T[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=T[$];return j===void 0&&(j=new Po,T[$]=j),j.getGripSpace()},this.getHand=function($){let j=T[$];return j===void 0&&(j=new Po,T[$]=j),j.getHandSpace()};function W($){const j=A.indexOf($.inputSource);if(j===-1)return;const ue=T[j];ue!==void 0&&(ue.update($.inputSource,$.frame,c||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<T.length;$++){const j=A[$];j!==null&&(A[$]=null,T[$].disconnect(j))}O=null,q=null,_.reset();for(const $ in m)delete m[$];e.setRenderTarget(g),h=null,f=null,u=null,i=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),E.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ne=null,Ee=null;E.depth&&(Ee=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=E.stencil?Vs:Gs,Ne=E.stencil?Hs:Hi);const Qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Qe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Gi(f.textureWidth,f.textureHeight,{format:Pn,type:Wn,depthTexture:new Sh(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Gi(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let j=0;j<$.removed.length;j++){const ue=$.removed[j],Ne=A.indexOf(ue);Ne>=0&&(A[Ne]=null,T[Ne].disconnect(ue))}for(let j=0;j<$.added.length;j++){const ue=$.added[j];let Ne=A.indexOf(ue);if(Ne===-1){for(let Qe=0;Qe<T.length;Qe++)if(Qe>=A.length){A.push(ue),Ne=Qe;break}else if(A[Qe]===null){A[Qe]=ue,Ne=Qe;break}if(Ne===-1)break}const Ee=T[Ne];Ee&&Ee.connect(ue)}}const B=new D,ne=new D;function le($,j,ue){B.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(ue.matrixWorld);const Ne=B.distanceTo(ne),Ee=j.projectionMatrix.elements,Qe=ue.projectionMatrix.elements,Dt=Ee[14]/(Ee[10]-1),I=Ee[14]/(Ee[10]+1),dt=(Ee[9]+1)/Ee[5],Be=(Ee[9]-1)/Ee[5],Le=(Ee[8]-1)/Ee[0],_e=(Qe[8]+1)/Qe[0],ft=Dt*Le,ve=Dt*_e,Ge=Ne/(-Le+_e),Ct=Ge*-Le;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ct),$.translateZ(Ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Mt=Dt+Ge,w=I+Ge,M=ft-Ct,k=ve+(Ne-Ct),X=dt*I/w*Mt,Z=Be*I/w*Mt;$.projectionMatrix.makePerspective(M,k,X,Z,Mt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let j=$.near,ue=$.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),U.near=y.near=b.near=j,U.far=y.far=b.far=ue,(O!==U.near||q!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,q=U.far),U.layers.mask=$.layers.mask|6,b.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const Ne=$.parent,Ee=U.cameras;me(U,Ne);for(let Qe=0;Qe<Ee.length;Qe++)me(Ee[Qe],Ne);Ee.length===2?le(U,b,y):U.projectionMatrix.copy(b.projectionMatrix),Te($,U,Ne)};function Te($,j,ue){ue===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ws*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(U)},this.getCameraTexture=function($){return m[$]};let $e=null;function Ze($,j){if(d=j.getViewerPose(c||o),p=j,d!==null){const ue=d.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Ne=!1;ue.length!==U.cameras.length&&(U.cameras.length=0,Ne=!0);for(let I=0;I<ue.length;I++){const dt=ue[I];let Be=null;if(h!==null)Be=h.getViewport(dt);else{const _e=u.getViewSubImage(f,dt);Be=_e.viewport,I===0&&(e.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(v))}let Le=C[I];Le===void 0&&(Le=new ln,Le.layers.enable(I),Le.viewport=new ot,C[I]=Le),Le.matrix.fromArray(dt.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(dt.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Be.x,Be.y,Be.width,Be.height),I===0&&(U.matrix.copy(Le.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ne===!0&&U.cameras.push(Le)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const I=u.getDepthInformation(ue[0]);I&&I.isValid&&I.texture&&_.init(I,i.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<ue.length;I++){const dt=ue[I].camera;if(dt){let Be=m[dt];Be||(Be=new bh,m[dt]=Be);const Le=u.getCameraImage(dt);Be.sourceTexture=Le}}}}for(let ue=0;ue<T.length;ue++){const Ne=A[ue],Ee=T[ue];Ne!==null&&Ee!==void 0&&Ee.update(Ne,j,c||o)}$e&&$e($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}const et=new Th;et.setAnimationLoop(Ze),this.setAnimationLoop=function($){$e=$},this.dispose=function(){}}}const Ii=new Xn,wg=new pt;function Tg(s,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,gh(s)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,E,g,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),d(_,m)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&h(_,m,v)):m.isMeshMatcapMaterial?(r(_,m),p(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),x(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,E,g):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===en&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===en&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const E=e.get(m),g=E.envMap,v=E.envMapRotation;g&&(_.envMap.value=g,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),_.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Ii)),_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,E,g){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*E,_.scale.value=g*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function d(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function h(_,m,E){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){const E=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ag(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,g){const v=g.program;n.uniformBlockBinding(E,v)}function c(E,g){let v=i[E.id];v===void 0&&(p(E),v=d(E),i[E.id]=v,E.addEventListener("dispose",_));const T=g.program;n.updateUBOMapping(E,T);const A=e.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function d(E){const g=u();E.__bindingPointIndex=g;const v=s.createBuffer(),T=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const g=i[E.id],v=E.uniforms,T=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let A=0,R=v.length;A<R;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,y=P.length;b<y;b++){const C=P[b];if(h(C,A,b,T)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let W=0;W<O.length;W++){const G=O[W],Y=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+q,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(E,g,v,T){const A=E.value,R=g+"_"+v;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const P=T[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function p(E){const g=E.uniforms;let v=0;const T=16;for(let R=0,P=g.length;R<P;R++){const b=Array.isArray(g[R])?g[R]:[g[R]];for(let y=0,C=b.length;y<C;y++){const U=b[y],O=Array.isArray(U.value)?U.value:[U.value];for(let q=0,W=O.length;q<W;q++){const G=O[q],Y=x(G),B=v%T,ne=B%Y.boundary,le=B+ne;v+=ne,le!==0&&T-le<Y.storage&&(v+=T-le),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const A=v%T;return A>0&&(v+=T-A),E.__size=v,E.__cache={},this}function x(E){const g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function _(E){const g=E.target;g.removeEventListener("dispose",_);const v=o.indexOf(g.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function m(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Rg{constructor(e={}){const{canvas:t=sd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const E=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Qt;let A=0,R=0,P=null,b=-1,y=null;const C=new ot,U=new ot;let O=null;const q=new We(0);let W=0,G=t.width,Y=t.height,B=1,ne=null,le=null;const me=new ot(0,0,G,Y),Te=new ot(0,0,G,Y);let $e=!1;const Ze=new rl;let et=!1,$=!1;const j=new pt,ue=new D,Ne=new ot,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Dt(){return P===null?B:1}let I=n;function dt(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",J,!1),I===null){const N="webgl2";if(I=dt(N,S),I===null)throw dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,Le,_e,ft,ve,Ge,Ct,Mt,w,M,k,X,Z,V,be,ie,Me,ye,ee,ce,Ie,Se,oe,ze;function L(){Be=new Om(I),Be.init(),Se=new Mg(I,Be),Le=new Lm(I,Be,e,Se),_e=new vg(I,Be),Le.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),ft=new Hm(I),ve=new rg,Ge=new xg(I,Be,_e,ve,Le,Se,ft),Ct=new Dm(v),Mt=new km(v),w=new qd(I),oe=new Cm(I,w),M=new Bm(I,w,ft,oe),k=new Vm(I,M,w,ft),ee=new Gm(I,Le,Ge),ie=new Pm(ve),X=new sg(v,Ct,Mt,Be,Le,oe,ie),Z=new Tg(v,ve),V=new ag,be=new fg(Be),ye=new Rm(v,Ct,Mt,_e,k,h,l),Me=new gg(v,k,Le),ze=new Ag(I,ft,Le,_e),ce=new Im(I,Be,ft),Ie=new zm(I,Be,ft),ft.programs=X.programs,v.capabilities=Le,v.extensions=Be,v.properties=ve,v.renderLists=V,v.shadowMap=Me,v.state=_e,v.info=ft}L();const te=new Eg(v,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(G,Y,!1))},this.getSize=function(S){return S.set(G,Y)},this.setSize=function(S,N,z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Y=N,t.width=Math.floor(S*B),t.height=Math.floor(N*B),z===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(G*B,Y*B).floor()},this.setDrawingBufferSize=function(S,N,z){G=S,Y=N,B=z,t.width=Math.floor(S*z),t.height=Math.floor(N*z),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,N,z,H){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,N,z,H),_e.viewport(C.copy(me).multiplyScalar(B).round())},this.getScissor=function(S){return S.copy(Te)},this.setScissor=function(S,N,z,H){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,N,z,H),_e.scissor(U.copy(Te).multiplyScalar(B).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){_e.setScissorTest($e=S)},this.setOpaqueSort=function(S){ne=S},this.setTransparentSort=function(S){le=S},this.getClearColor=function(S){return S.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,z=!0){let H=0;if(S){let F=!1;if(P!==null){const Q=P.texture.format;F=Q===el||Q===Qa||Q===Ja}if(F){const Q=P.texture.type,ae=Q===Wn||Q===Hi||Q===zs||Q===Hs||Q===ja||Q===Za,fe=ye.getClearColor(),he=ye.getClearAlpha(),Re=fe.r,Pe=fe.g,we=fe.b;ae?(p[0]=Re,p[1]=Pe,p[2]=we,p[3]=he,I.clearBufferuiv(I.COLOR,0,p)):(x[0]=Re,x[1]=Pe,x[2]=we,x[3]=he,I.clearBufferiv(I.COLOR,0,x))}else H|=I.COLOR_BUFFER_BIT}N&&(H|=I.DEPTH_BUFFER_BIT),z&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ye.dispose(),V.dispose(),be.dispose(),ve.dispose(),Ct.dispose(),Mt.dispose(),k.dispose(),oe.dispose(),ze.dispose(),X.dispose(),te.dispose(),te.removeEventListener("sessionstart",Nn),te.removeEventListener("sessionend",Tl),bi.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=ft.autoReset,N=Me.enabled,z=Me.autoUpdate,H=Me.needsUpdate,F=Me.type;L(),ft.autoReset=S,Me.enabled=N,Me.autoUpdate=z,Me.needsUpdate=H,Me.type=F}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function K(S){const N=S.target;N.removeEventListener("dispose",K),ge(N)}function ge(S){ke(S),ve.remove(S)}function ke(S){const N=ve.get(S).programs;N!==void 0&&(N.forEach(function(z){X.releaseProgram(z)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,z,H,F,Q){N===null&&(N=Ee);const ae=F.isMesh&&F.matrixWorld.determinant()<0,fe=Kh(S,N,z,H,F);_e.setMaterial(H,ae);let he=z.index,Re=1;if(H.wireframe===!0){if(he=M.getWireframeAttribute(z),he===void 0)return;Re=2}const Pe=z.drawRange,we=z.attributes.position;let Ke=Pe.start*Re,st=(Pe.start+Pe.count)*Re;Q!==null&&(Ke=Math.max(Ke,Q.start*Re),st=Math.min(st,(Q.start+Q.count)*Re)),he!==null?(Ke=Math.max(Ke,0),st=Math.min(st,he.count)):we!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,we.count));const xt=st-Ke;if(xt<0||xt===1/0)return;oe.setup(F,H,fe,z,he);let ht,at=ce;if(he!==null&&(ht=w.get(he),at=Ie,at.setIndex(ht)),F.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*Dt()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(F.isLine){let Ae=H.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*Dt()),F.isLineSegments?at.setMode(I.LINES):F.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else F.isPoints?at.setMode(I.POINTS):F.isSprite&&at.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,mt=F._multiDrawCounts,tt=F._multiDrawCount,tn=he?w.get(he).bytesPerElement:1,qi=ve.get(H).currentProgram.getUniforms();for(let nn=0;nn<tt;nn++)qi.setValue(I,"_gl_DrawID",nn),at.render(Ae[nn]/tn,mt[nn])}else if(F.isInstancedMesh)at.renderInstances(Ke,xt,F.count);else if(z.isInstancedBufferGeometry){const Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mt=Math.min(z.instanceCount,Ae);at.renderInstances(Ke,xt,mt)}else at.render(Ke,xt)};function ct(S,N,z){S.transparent===!0&&S.side===Ot&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,ir(S,N,z),S.side=xi,S.needsUpdate=!0,ir(S,N,z),S.side=Ot):ir(S,N,z)}this.compile=function(S,N,z=null){z===null&&(z=S),m=be.get(z),m.init(N),g.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const fe=Q[ae];ct(fe,z,F),H.add(fe)}else ct(Q,z,F),H.add(Q)}),m=g.pop(),H},this.compileAsync=function(S,N,z=null){const H=this.compile(S,N,z);return new Promise(F=>{function Q(){if(H.forEach(function(ae){ve.get(ae).currentProgram.isReady()&&H.delete(ae)}),H.size===0){F(S);return}setTimeout(Q,10)}Be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let it=null;function qn(S){it&&it(S)}function Nn(){bi.stop()}function Tl(){bi.start()}const bi=new Th;bi.setAnimationLoop(qn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(S){it=S,te.setAnimationLoop(S),S===null?bi.stop():bi.start()},te.addEventListener("sessionstart",Nn),te.addEventListener("sessionend",Tl),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,P),m=be.get(S,g.length),m.init(N),g.push(m),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ze.setFromProjectionMatrix(j,zn,N.reversedDepth),$=this.localClippingEnabled,et=ie.init(this.clippingPlanes,$),_=V.get(S,E.length),_.init(),E.push(_),te.enabled===!0&&te.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&lo(Q,N,-1/0,v.sortObjects)}lo(S,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ne,le),Qe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Qe&&ye.addToRenderList(_,S),this.info.render.frame++,et===!0&&ie.beginShadows();const z=m.state.shadowsArray;Me.render(z,S,N),et===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,F=_.transmissive;if(m.setupLights(),N.isArrayCamera){const Q=N.cameras;if(F.length>0)for(let ae=0,fe=Q.length;ae<fe;ae++){const he=Q[ae];Rl(H,F,S,he)}Qe&&ye.render(S);for(let ae=0,fe=Q.length;ae<fe;ae++){const he=Q[ae];Al(_,S,he,he.viewport)}}else F.length>0&&Rl(H,F,S,N),Qe&&ye.render(S),Al(_,S,N);P!==null&&R===0&&(Ge.updateMultisampleRenderTarget(P),Ge.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(v,S,N),oe.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?(m=g[g.length-1],et===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function lo(S,N,z,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ze.intersectsSprite(S)){H&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(j);const ae=k.update(S),fe=S.material;fe.visible&&_.push(S,ae,fe,z,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ze.intersectsObject(S))){const ae=k.update(S),fe=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ne.copy(ae.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(j)),Array.isArray(fe)){const he=ae.groups;for(let Re=0,Pe=he.length;Re<Pe;Re++){const we=he[Re],Ke=fe[we.materialIndex];Ke&&Ke.visible&&_.push(S,ae,Ke,z,Ne.z,we)}}else fe.visible&&_.push(S,ae,fe,z,Ne.z,null)}}const Q=S.children;for(let ae=0,fe=Q.length;ae<fe;ae++)lo(Q[ae],N,z,H)}function Al(S,N,z,H){const F=S.opaque,Q=S.transmissive,ae=S.transparent;m.setupLightsView(z),et===!0&&ie.setGlobalState(v.clippingPlanes,z),H&&_e.viewport(C.copy(H)),F.length>0&&nr(F,N,z),Q.length>0&&nr(Q,N,z),ae.length>0&&nr(ae,N,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Rl(S,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Gi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?$s:Wn,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Q=m.state.transmissionRenderTarget[H.id],ae=H.viewport||C;Q.setSize(ae.z*v.transmissionResolutionScale,ae.w*v.transmissionResolutionScale);const fe=v.getRenderTarget(),he=v.getActiveCubeFace(),Re=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(q),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&ye.render(z);const Pe=v.toneMapping;v.toneMapping=gi;const we=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),et===!0&&ie.setGlobalState(v.clippingPlanes,H),nr(S,z,H),Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let st=0,xt=N.length;st<xt;st++){const ht=N[st],at=ht.object,Ae=ht.geometry,mt=ht.material,tt=ht.group;if(mt.side===Ot&&at.layers.test(H.layers)){const tn=mt.side;mt.side=en,mt.needsUpdate=!0,Cl(at,z,H,Ae,mt,tt),mt.side=tn,mt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q))}v.setRenderTarget(fe,he,Re),v.setClearColor(q,W),we!==void 0&&(H.viewport=we),v.toneMapping=Pe}function nr(S,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,Q=S.length;F<Q;F++){const ae=S[F],fe=ae.object,he=ae.geometry,Re=ae.group;let Pe=ae.material;Pe.allowOverride===!0&&H!==null&&(Pe=H),fe.layers.test(z.layers)&&Cl(fe,N,z,he,Pe,Re)}}function Cl(S,N,z,H,F,Q){S.onBeforeRender(v,N,z,H,F,Q),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,N,z,H,S,Q),F.transparent===!0&&F.side===Ot&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,v.renderBufferDirect(z,N,H,F,S,Q),F.side=xi,F.needsUpdate=!0,v.renderBufferDirect(z,N,H,F,S,Q),F.side=Ot):v.renderBufferDirect(z,N,H,F,S,Q),S.onAfterRender(v,N,z,H,F,Q)}function ir(S,N,z){N.isScene!==!0&&(N=Ee);const H=ve.get(S),F=m.state.lights,Q=m.state.shadowsArray,ae=F.state.version,fe=X.getParameters(S,F.state,Q,N,z),he=X.getProgramCacheKey(fe);let Re=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?Mt:Ct).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",K),Re=new Map,H.programs=Re);let Pe=Re.get(he);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===ae)return Ll(S,fe),Pe}else fe.uniforms=X.getUniforms(S),S.onBeforeCompile(fe,v),Pe=X.acquireProgram(fe,he),Re.set(he,Pe),H.uniforms=fe.uniforms;const we=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=ie.uniform),Ll(S,fe),H.needsLights=Zh(S),H.lightsStateVersion=ae,H.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function Il(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=zr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ll(S,N){const z=ve.get(S);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Kh(S,N,z,H,F){N.isScene!==!0&&(N=Ee),Ge.resetTextureUnits();const Q=N.fog,ae=H.isMeshStandardMaterial?N.environment:null,fe=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_s,he=(H.isMeshStandardMaterial?Mt:Ct).get(H.envMap||ae),Re=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let xt=gi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xt=v.toneMapping);const ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=ht!==void 0?ht.length:0,Ae=ve.get(H),mt=m.state.lights;if(et===!0&&($===!0||S!==y)){const Vt=S===y&&H.id===b;ie.setState(H,S,Vt)}let tt=!1;H.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==mt.state.version||Ae.outputColorSpace!==fe||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==he||H.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==we||Ae.morphNormals!==Ke||Ae.morphColors!==st||Ae.toneMapping!==xt||Ae.morphTargetsCount!==at)&&(tt=!0):(tt=!0,Ae.__version=H.version);let tn=Ae.currentProgram;tt===!0&&(tn=ir(H,N,F));let qi=!1,nn=!1,ws=!1;const gt=tn.getUniforms(),un=Ae.uniforms;if(_e.useProgram(tn.program)&&(qi=!0,nn=!0,ws=!0),H.id!==b&&(b=H.id,nn=!0),qi||y!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),gt.setValue(I,"projectionMatrix",S.projectionMatrix),gt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Jt=gt.map.cameraPosition;Jt!==void 0&&Jt.setValue(I,ue.setFromMatrixPosition(S.matrixWorld)),Le.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,nn=!0,ws=!0)}if(F.isSkinnedMesh){gt.setOptional(I,F,"bindMatrix"),gt.setOptional(I,F,"bindMatrixInverse");const Vt=F.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),gt.setValue(I,"boneTexture",Vt.boneTexture,Ge))}F.isBatchedMesh&&(gt.setOptional(I,F,"batchingTexture"),gt.setValue(I,"batchingTexture",F._matricesTexture,Ge),gt.setOptional(I,F,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",F._indirectTexture,Ge),gt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",F._colorsTexture,Ge));const dn=z.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ee.update(F,z,tn),(nn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,gt.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(un.envMap.value=he,un.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),nn&&(gt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&jh(un,ws),Q&&H.fog===!0&&Z.refreshFogUniforms(un,Q),Z.refreshMaterialUniforms(un,H,B,Y,m.state.transmissionRenderTarget[S.id]),zr.upload(I,Il(Ae),un,Ge)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(zr.upload(I,Il(Ae),un,Ge),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(I,"center",F.center),gt.setValue(I,"modelViewMatrix",F.modelViewMatrix),gt.setValue(I,"normalMatrix",F.normalMatrix),gt.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Vt=H.uniformsGroups;for(let Jt=0,co=Vt.length;Jt<co;Jt++){const Ei=Vt[Jt];ze.update(Ei,tn),ze.bind(Ei,tn)}}return tn}function jh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Zh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,N,z){const H=ve.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ve.get(S.texture).__webglTexture=N,ve.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const z=ve.get(S);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Jh=I.createFramebuffer();this.setRenderTarget=function(S,N=0,z=0){P=S,A=N,R=z;let H=!0,F=null,Q=!1,ae=!1;if(S){const he=ve.get(S);if(he.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(he.__webglFramebuffer===void 0)Ge.setupRenderTarget(S);else if(he.__hasExternalTextures)Ge.rebindTextures(S,ve.get(S.texture).__webglTexture,ve.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const we=S.depthTexture;if(he.__boundDepthTexture!==we){if(we!==null&&ve.has(we)&&(S.width!==we.image.width||S.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(S)}}const Re=S.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ae=!0);const Pe=ve.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?F=Pe[N][z]:F=Pe[N],Q=!0):S.samples>0&&Ge.useMultisampledRTT(S)===!1?F=ve.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[z]:F=Pe,C.copy(S.viewport),U.copy(S.scissor),O=S.scissorTest}else C.copy(me).multiplyScalar(B).floor(),U.copy(Te).multiplyScalar(B).floor(),O=$e;if(z!==0&&(F=Jh),_e.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&_e.drawBuffers(S,F),_e.viewport(C),_e.scissor(U),_e.setScissorTest(O),Q){const he=ve.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,z)}else if(ae){const he=N;for(let Re=0;Re<S.textures.length;Re++){const Pe=ve.get(S.textures[Re]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,z,he)}}else if(S!==null&&z!==0){const he=ve.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(S,N,z,H,F,Q,ae,fe=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ve.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){_e.bindFramebuffer(I.FRAMEBUFFER,he);try{const Re=S.textures[fe],Pe=Re.format,we=Re.type;if(!Le.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&z>=0&&z<=S.height-F&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe),I.readPixels(N,z,H,F,Se.convert(Pe),Se.convert(we),Q))}finally{const Re=P!==null?ve.get(P).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,N,z,H,F,Q,ae,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ve.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he)if(N>=0&&N<=S.width-H&&z>=0&&z<=S.height-F){_e.bindFramebuffer(I.FRAMEBUFFER,he);const Re=S.textures[fe],Pe=Re.format,we=Re.type;if(!Le.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe),I.readPixels(N,z,H,F,Se.convert(Pe),Se.convert(we),0);const st=P!==null?ve.get(P).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,st);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await rd(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Ke),I.deleteSync(xt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,z=0){const H=Math.pow(2,-z),F=Math.floor(S.image.width*H),Q=Math.floor(S.image.height*H),ae=N!==null?N.x:0,fe=N!==null?N.y:0;Ge.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ae,fe,F,Q),_e.unbindTexture()};const Qh=I.createFramebuffer(),eu=I.createFramebuffer();this.copyTextureToTexture=function(S,N,z=null,H=null,F=0,Q=null){Q===null&&(F!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let ae,fe,he,Re,Pe,we,Ke,st,xt;const ht=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(z!==null)ae=z.max.x-z.min.x,fe=z.max.y-z.min.y,he=z.isBox3?z.max.z-z.min.z:1,Re=z.min.x,Pe=z.min.y,we=z.isBox3?z.min.z:0;else{const dn=Math.pow(2,-F);ae=Math.floor(ht.width*dn),fe=Math.floor(ht.height*dn),S.isDataArrayTexture?he=ht.depth:S.isData3DTexture?he=Math.floor(ht.depth*dn):he=1,Re=0,Pe=0,we=0}H!==null?(Ke=H.x,st=H.y,xt=H.z):(Ke=0,st=0,xt=0);const at=Se.convert(N.format),Ae=Se.convert(N.type);let mt;N.isData3DTexture?(Ge.setTexture3D(N,0),mt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ge.setTexture2DArray(N,0),mt=I.TEXTURE_2D_ARRAY):(Ge.setTexture2D(N,0),mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=I.getParameter(I.UNPACK_ROW_LENGTH),tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qi=I.getParameter(I.UNPACK_SKIP_PIXELS),nn=I.getParameter(I.UNPACK_SKIP_ROWS),ws=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,we);const gt=S.isDataArrayTexture||S.isData3DTexture,un=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const dn=ve.get(S),Vt=ve.get(N),Jt=ve.get(dn.__renderTarget),co=ve.get(Vt.__renderTarget);_e.bindFramebuffer(I.READ_FRAMEBUFFER,Jt.__webglFramebuffer),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let Ei=0;Ei<he;Ei++)gt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.get(S).__webglTexture,F,we+Ei),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,Q,xt+Ei)),I.blitFramebuffer(Re,Pe,ae,fe,Ke,st,ae,fe,I.DEPTH_BUFFER_BIT,I.NEAREST);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||ve.has(S)){const dn=ve.get(S),Vt=ve.get(N);_e.bindFramebuffer(I.READ_FRAMEBUFFER,Qh),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,eu);for(let Jt=0;Jt<he;Jt++)gt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,F,we+Jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,F),un?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,Q,xt+Jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,Q),F!==0?I.blitFramebuffer(Re,Pe,ae,fe,Ke,st,ae,fe,I.COLOR_BUFFER_BIT,I.NEAREST):un?I.copyTexSubImage3D(mt,Q,Ke,st,xt+Jt,Re,Pe,ae,fe):I.copyTexSubImage2D(mt,Q,Ke,st,Re,Pe,ae,fe);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else un?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(mt,Q,Ke,st,xt,ae,fe,he,at,Ae,ht.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(mt,Q,Ke,st,xt,ae,fe,he,at,ht.data):I.texSubImage3D(mt,Q,Ke,st,xt,ae,fe,he,at,Ae,ht):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Ke,st,ae,fe,at,Ae,ht.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Ke,st,ht.width,ht.height,at,ht.data):I.texSubImage2D(I.TEXTURE_2D,Q,Ke,st,ae,fe,at,Ae,ht);I.pixelStorei(I.UNPACK_ROW_LENGTH,tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,nn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ws),Q===0&&N.generateMipmaps&&I.generateMipmap(mt),_e.unbindTexture()},this.initRenderTarget=function(S){ve.get(S).__webglFramebuffer===void 0&&Ge.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ge.setTextureCube(S,0):S.isData3DTexture?Ge.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ge.setTexture2DArray(S,0):Ge.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,_e.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const qe=0,Un=1,Si=2,ni=3,Js=4,xs=5,bs=6,Es=7,to=8,Qs=9,wn=10,Kt=11,Pt=12,Tn=13,no=14,on=15,an=16,mn=17,vn=18,er=19,Gt=20,Vi=21,ri=22,Ft=23,On=24,Hn=25,io=26,hl=27,ul=28,dl=29,fl=30,pl=31,so=32,vi=33,Rn=34,Cn=35,ii=36,In=37,Wi=38,tr=39,An=40,zt=41,Ht=42,$t=43,Ln=44,Gn=45,De=s=>s,si=[De({id:qe,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),De({id:Un,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),De({id:Si,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),De({id:ni,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),De({id:Js,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),De({id:xs,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),De({id:bs,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),De({id:Es,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),De({id:to,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),De({id:Qs,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),De({id:wn,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),De({id:Kt,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),De({id:Pt,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),De({id:Tn,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),De({id:no,name:"Metal Block",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),De({id:on,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),De({id:an,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),De({id:mn,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),De({id:vn,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),De({id:er,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),De({id:Gt,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),De({id:Vi,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),De({id:ri,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),De({id:Ft,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),De({id:On,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),De({id:Hn,name:"Cactus",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),De({id:io,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),De({id:hl,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),De({id:ul,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),De({id:dl,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),De({id:fl,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),De({id:pl,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),De({id:so,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),De({id:vi,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),De({id:Rn,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.28,.52,.28]}),De({id:Cn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),De({id:ii,name:"Wheat Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.66,.66,.34]}),De({id:In,name:"Desert Wheat",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),De({id:Wi,name:"Fruiting Cactus",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),De({id:tr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),De({id:An,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),De({id:zt,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),De({id:Ht,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),De({id:$t,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),De({id:Ln,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),De({id:Gn,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,minTier:0,placeable:!1,color:[.6,.25,.24]})],wt=96,pe=16,Lt=1440;function qt(s){return si[s].solid}function Cg(s){return si[s].opaque}function pi(s){return s===vn||s>=io&&s<=so}function as(s){return s===vn?8:pi(s)?33-s:0}function Oc(s){return 33-s}function Ig(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}class ml{s;constructor(e){this.s=e>>>0||1}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}}function _t(s,e,t){let n=s*374761393+e*668265263+t*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function Oa(s){return s*s*(3-2*s)}function gl(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=Oa(s-n),o=Oa(e-i),a=_t(n,i,t),l=_t(n+1,i,t),c=_t(n,i+1,t),d=_t(n+1,i+1,t);return a+(l-a)*r+(c-a)*o+(a-l-c+d)*r*o}function Ns(s,e,t,n=4,i=2,r=.5){let o=0,a=1,l=1,c=0;for(let d=0;d<n;d++)o+=gl(s*l,e*l,t+d*101)*a,c+=a,a*=r,l*=i;return o/c}function Lg(s,e,t,n=3){let i=0,r=1,o=1,a=0;for(let l=0;l<n;l++){const c=Math.abs(gl(s*o,e*o,t+l*101)*2-1);i+=(1-c)*r,a+=r,r*=.5,o*=2}return i/a}function Lh(s,e){const t=Math.floor(s),n=Oa(s-t),i=_t(t,0,e),r=_t(t+1,0,e);return i+(r-i)*n}const Bc=0,Ba=1,Pg=2,za=3,Hr=4,Dg=1e6,Et=320;class Ug{constructor(e){this.seed=e;const t=new ml(e^24378);for(let n=0;n<6;n++){const i=t.range(0,Math.PI*2),r=t.range(160,900);this.oases.push({x:Math.round(Math.cos(i)*r),z:Math.round(Math.sin(i)*r),r:t.int(3,5)})}{const n=t.range(0,Math.PI*2),i=t.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*i),z:Math.round(Math.sin(n)*i)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,i=Math.hypot(this.secondShip.x,this.secondShip.z)*t.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*i),z:Math.round(Math.sin(n)*i)}}for(let n=0;n<13;n++){const i=t.range(0,Math.PI*2),r=t.range(30,600);this.canisters.push({x:Math.round(Math.cos(i)*r),z:Math.round(Math.sin(i)*r),buried:t.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(e,t){for(const n of this.oases)if(Math.abs(n.x-e)<=n.r+1&&Math.abs(n.z-t)<=n.r+1)return n;return null}townCenter(e,t){if(e===this.gtx&&t===this.gtz)return this.homeTown;const n=(_t(e,t,this.seed+53)-.5)*110,i=(_t(e,t,this.seed+55)-.5)*110;return{x:Math.round(e*Et+n),z:Math.round(t*Et+i)}}get gtx(){return Math.round(this.homeTown.x/Et)}get gtz(){return Math.round(this.homeTown.z/Et)}townAt(e,t){if(Math.abs(e)<2&&Math.abs(t)<2)return!1;if(e===this.gtx&&t===this.gtz)return!0;if(_t(e,t,this.seed+51)>=.4)return!1;const n=this.townCenter(e,t);for(const i of this.oases)if(Math.hypot(i.x-n.x,i.z-n.z)<i.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(e,t,n){let i=null,r=n;const o=Math.floor((e-n)/Et),a=Math.floor((e+n)/Et),l=Math.floor((t-n)/Et),c=Math.floor((t+n)/Et);for(let d=o;d<=a;d++)for(let u=l;u<=c;u++){if(!this.townAt(d,u))continue;const f=this.townCenter(d,u),h=Math.hypot(f.x-e,f.z-t);h<=r&&(r=h,i=f)}return i}nearestTown(e,t){let n=null,i=1/0;const r=Math.floor(e/Et),o=Math.floor(t/Et);for(let a=r-4;a<=r+4;a++)for(let l=o-4;l<=o+4;l++){if(!this.townAt(a,l))continue;const c=this.townCenter(a,l),d=Math.hypot(c.x-e,c.z-t);d<i&&(i=d,n=c)}return n??this.homeTown}}function _l(s,e,t){const n=Math.min(.999,Math.max(.001,Ns(s/900+.5,e/900+.5,t,3))),r=[.17,.42,.57,.72,.9].map(l=>Math.exp(-Math.abs(n-l)/.05)),o=Math.max(Math.abs(s),Math.abs(e));o<80&&(r[0]+=Math.pow(1-o/80,2)*6);const a=r.reduce((l,c)=>l+c,0);return r.map(l=>l/a)}function Gr(s,e,t){const n=_l(s,e,t);let i=0;for(let r=1;r<5;r++)n[r]>n[i]&&(i=r);return i}function Ng(s,e,t){const n=_l(e,t,s),i=[30+Ns(e/140,t/140,s+7)*8+Math.sin(e/9+t/13)*.9,29+Ns(e/160,t/160,s+9)*6+Math.max(0,gl(e/26,t/26,s+11)-.72)*10,28+Ns(e/220,t/220,s+5)*3,33+Math.floor(Ns(e/170,t/170,s+13)*4.99)*5,29-Lg(e/210,t/210,s+17)*9];let r=0;for(let o=0;o<5;o++)r+=n[o]*i[o];return r}function kt(s,e,t){const n=Math.max(Math.abs(e),Math.abs(t)),i=Ng(s,e,t);if(n>=30)return i;if(n<=14)return 30;const r=(n-14)/16,o=r*r*(3-2*r);return 30+(i-30)*o}function Fg(s,e,t,n,i){const r=_l(e,t,s);let o=0,a=1;r[1]>r[0]&&(o=1,a=0);for(let l=2;l<5;l++)r[l]>r[o]?(a=o,o=l):r[l]>r[a]&&(a=l);return r[a]/r[o]>.35&&_t(e,t,s+45)<r[a]/(r[o]+r[a])&&(o=a),n===i?o===Pg?bs:o===Hr?ni:o===za?Si:o===Ba&&_t(e,t,s+41)>.78?Js:Un:n>=i-3?o===Hr?ni:Un:o===za||o===Hr?ni:Si}function kg(s){const n=(a,l)=>a===4||a===-6?Math.abs(l)<=4:l===5||l===-5?a>=-5&&a<=3:a>=-5&&a<=3&&l>=-4&&l<=4,i=(a,l,c)=>(a===4||a===-6)&&Math.abs(c)>=3&&(l===30||l===34);for(let a=-6;a<=4;a++)for(let l=-5;l<=5;l++)for(let c=30;c<=34;c++){if(!n(a,l)||i(a,c,l))continue;const d=a>=2&&Math.abs(l)>2,u=a>=-5&&a<=3&&l>=-4&&l<=4&&c>=31&&c<=33&&!d;s(a,c,l,u?qe:c===30?An:wn)}for(let a=-3;a<=1;a++)for(let l=-2;l<=2;l++)s(a,35,l,wn);for(let a=-2;a<=0;a++)for(let l=-1;l<=1;l++)s(a,36,l,wn);for(let a=-2;a<=1;a++)for(const l of[6,7,8,9,-6,-7,-8,-9])s(a,32,l,An);for(const a of[-3,2])for(const l of[6,7,8,-6,-7,-8])s(a,32,l,An);for(const a of[-1,0])s(a,31,10,An),s(a,31,-10,An);const r=(a,l,c)=>{s(a,l,c,Kt),s(a,l+1,c,Gt)},o=(a,l,c)=>{s(a,l,c,zt),s(a,l+1,c,Ht)};for(let a=-4;a<=4;a++)for(let l=31;l<=33;l++)s(1,l,a,wn),s(-2,l,a,wn);for(let a=-5;a<=-3;a++)for(const l of[-2,2])for(let c=31;c<=33;c++)s(a,c,l,wn);o(1,31,0),o(-2,31,0),o(-2,31,3),o(-2,31,-3),r(-6,31,0);for(let a=-2;a<=2;a++)for(let l=32;l<=33;l++)s(4,l,a,Qs);s(-4,30,4,vn),s(-4,29,4,vn),s(-3,30,4,vn),s(-4,31,-4,ri),s(-1,33,0,ri),s(-4,31,-1,on),s(0,31,-3,an),s(0,31,-2,On);for(const[a,l]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])s(a,34,l,Tn);for(const[a,l]of[[0,3],[0,4],[-1,4],[2,2]])s(a,31,l,An)}function Og(s,e,t){const n=new ml(Dg+77);for(let i=0;i<40;i++){const r=e.x+n.int(-5,5),o=e.z+n.int(-5,5),a=Math.round(kt(t,r,o));s(r,a+n.int(0,1),o,n.next()<.5?wn:An)}s(e.x,Math.round(kt(t,e.x,e.z))+1,e.z,Vi)}function Bg(s,e,t){const n=Math.round(kt(t,e.x,e.z));for(let i=-e.r-1;i<=e.r+1;i++)for(let r=-e.r-1;r<=e.r+1;r++){const o=e.x+i,a=e.z+r,l=Math.sqrt(i*i+r*r),c=Math.round(kt(t,o,a));if(l<=e.r){for(let d=c;d>n-2;d--)s(o,d,a,qe);s(o,n-2,a,Un);for(let d=n-1;d<=n;d++)s(o,d,a,vn)}else if(l<=e.r+1)for(let d=c;d<n+1;d++)s(o,d,a,Un)}for(let i=0;i<3;i++){const r=e.x+Math.round(Math.cos(i*2.1)*(e.r+2)),o=e.z+Math.round(Math.sin(i*2.1)*(e.r+2)),a=Math.round(kt(t,r,o));for(let l=a+1;l<=a+4;l++)s(r,l,o,Es)}for(let i=0;i<5;i++){if(_t(e.x,e.z,t+61+i)<.35)continue;const r=i*1.27+_t(e.z,e.x,t+67+i)*.8,o=e.r-.4,a=e.x+Math.round(Math.cos(r)*o),l=e.z+Math.round(Math.sin(r)*o);Math.hypot(a-e.x,l-e.z)<e.r||s(a,n+1,l,Cn)}}function zg(s,e,t){for(const[i,r]of[[-4,-3],[2,2],[-2,4]]){const o=Math.round(kt(t,e.x+i,e.z+r));for(let a=0;a<4;a++)for(let l=0;l<4;l++)for(let c=o+1;c<=o+3;c++){if(!(a===0||a===3||l===0||l===3||c===o+1||c===o+3)){s(e.x+i+a,c,e.z+r+l,qe);continue}a===0&&l===1&&c<=o+2||s(e.x+i+a,c,e.z+r+l,er)}s(e.x+i+1,o+2,e.z+r+1,Ft),s(e.x+i+1,o+2,e.z+r+2,Ln),s(e.x+i+2,o+2,e.z+r+2,Gn)}const n=Math.round(kt(t,e.x,e.z+9));for(let i=0;i<5;i++)for(let r=0;r<3;r++)s(e.x-6+i,n,e.z+8+r,vi);s(e.x-5,n+1,e.z+9,In),s(e.x-3,n+1,e.z+8,In),s(e.x-2,n+1,e.z+10,Cn)}function Hg(s,e,t,n){const i=new Uint8Array(pe*pe*wt),r=(d,u,f,h)=>{const p=d-t*pe,x=f-n*pe;p>=0&&p<pe&&x>=0&&x<pe&&u>=0&&u<wt&&(i[(p*pe+x)*wt+u]=h)};for(let d=0;d<pe;d++)for(let u=0;u<pe;u++){const f=t*pe+d,h=n*pe+u,p=Math.round(kt(s,f,h));for(let _=0;_<=p;_++)i[(d*pe+u)*wt+_]=Fg(s,f,h,_,p);const x=f*f+h*h<240;if(!x&&_t(f,h,s+21)>.988){const _=Gr(f,h,s);if(_===Bc||_===Ba){for(let m=1;m<=2;m++)r(f,p+m,h,ni);d>0&&r(f-1,p+1,h,ni)}}if(!x&&_t(f,h,s+23)>.9935){const _=Gr(f,h,s);if(_!==za&&_!==Hr){const m=3+(_t(f,h,s+29)*3|0);for(let E=p+1;E<=p+m;E++)r(f,E,h,Es)}}if(!x&&i[(d*pe+u)*wt+p+1]===0&&_t(f,h,s+31)>.9915){const _=Gr(f,h,s);if(_===Bc||_===Ba){const m=2+(_t(f,h,s+37)*3|0);for(let E=p+1;E<=p+m;E++)r(f,E,h,Hn);m>=3&&_t(f,h,s+41)>.55&&r(f+(_t(f,h,s+43)>.5?1:-1),p+2,h,Hn),m>=3&&_t(f,h,s+47)>.7&&r(f,p+m,h,Wi)}}}t>=-1&&t<=0&&n>=-1&&n<=0&&kg(r);for(const d of e.oases)Math.abs(t*pe+8-d.x)<d.r+8&&Math.abs(n*pe+8-d.z)<d.r+8&&Bg(r,d,s);const o=Math.floor((t*pe-14-Et)/Et),a=Math.floor((t*pe+pe+14+Et)/Et),l=Math.floor((n*pe-14-Et)/Et),c=Math.floor((n*pe+pe+14+Et)/Et);for(let d=o;d<=a;d++)for(let u=l;u<=c;u++){if(!e.townAt(d,u))continue;const f=e.townCenter(d,u);t*pe<=f.x+12&&t*pe+pe-1>=f.x-12&&n*pe<=f.z+12&&n*pe+pe-1>=f.z-10&&zg(r,f,s)}return Math.abs(t*pe+8-e.secondShip.x)<12&&Math.abs(n*pe+8-e.secondShip.z)<12&&Og(r,e.secondShip,s),i}const Fs=(s,e)=>s+","+e,zc=(s,e,t)=>(s*pe+e)*wt+t,Wo=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];class Gg{constructor(e){this.seed=e,this.gen=new Ug(e)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;waterQ=new Set;gen;chunk(e,t){const n=Fs(e,t);let i=this.chunks.get(n);if(!i){i=Hg(this.seed,this.gen,e,t);const r=this.deltas.get(n);if(r)for(const[o,a]of r)i[o]=a;this.chunks.set(n,i)}return i}get(e,t,n){if(t<0||t>=wt)return qe;const i=Math.floor(e/pe),r=Math.floor(n/pe);return this.chunk(i,r)[zc(e-i*pe,n-r*pe,t)]}skyResistance(e,t,n,i=40){let r=0;for(let o=1;o<=i;o++){const a=this.get(e,t+o,n);if(a!==qe&&(r+=Vg[a],r>=6))return{R:r,openSky:!1}}return{R:r,openSky:r===0}}roomInfo(e,t,n,i=400){if(this.get(e,t,n)!==qe)return{size:0,sealed:!1,regulators:0,regCells:[]};const r=new Set([`${e},${t},${n}`]),o=[[e,t,n]],a=new Set;let l=0,c=!0;for(;o.length;){const[d,u,f]=o.pop();if(++l>i){c=!1;break}for(const[h,p,x]of Wo){const _=d+h,m=u+p,E=f+x;if(m>=wt){c=!1;continue}const g=this.get(_,m,E);if(g===qe||g===Pt||g===$t){const v=_+","+m+","+E;r.has(v)||(r.add(v),o.push([_,m,E]))}else g===ri&&a.add(_+","+m+","+E)}}return{size:l,sealed:c,regulators:a.size,regCells:[...a]}}set(e,t,n,i){if(t<0||t>=wt)return;const r=Math.floor(e/pe),o=Math.floor(n/pe),a=this.chunk(r,o),l=zc(e-r*pe,n-o*pe,t);if(a[l]===i)return;const c=a[l];if(a[l]=i,pi(i)||pi(c)){this.queueWater(e,t,n);for(const[h,p,x]of Wo)this.queueWater(e+h,t+p,n+x)}let d=this.deltas.get(Fs(r,o));d||this.deltas.set(Fs(r,o),d=new Map),d.set(l,i),this.markDirty(r,o);const u=e-r*pe,f=n-o*pe;u===0&&this.markDirty(r-1,o),f===0&&this.markDirty(r,o-1),u===pe-1&&this.markDirty(r+1,o),f===pe-1&&this.markDirty(r,o+1)}markDirty(e,t){this.dirty.add(Fs(e,t))}queueWater(e,t,n){t>=0&&t<wt&&this.waterQ.add(e+","+t+","+n)}processWater(e=4e3){let t=0;for(;this.waterQ.size&&t<e;){const n=this.waterQ.values().next().value;this.waterQ.delete(n);const[i,r,o]=n.split(",").map(Number);t+=this.drainFlow(i,r,o,e-t),t+=this.floodFrom(i,r,o,e-t)}return t}drainFlow(e,t,n,i){let r=0;const o=[[e,t,n],[e+1,t,n],[e-1,t,n],[e,t,n+1],[e,t,n-1]],a=new Set;for(;o.length&&r++<i;){const[l,c,d]=o.pop(),u=as(this.get(l,c,d));if(!u||u===8)continue;const f=l+","+c+","+d;if(!a.has(f)&&(a.add(f),!this.waterSupported(l,c,d,u))){this.set(l,c,d,qe);for(const[h,p,x]of Wo)o.push([l+h,c+p,d+x])}}return r}waterSupported(e,t,n,i){for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(as(this.get(e+r,t,n+o))>i)return!0;return as(this.get(e,t+1,n))>=i}floodFrom(e,t,n,i){let r=0;const o=[[e,t,n],[e+1,t,n],[e-1,t,n],[e,t,n+1],[e,t,n-1]];for(;o.length&&r++<i;){const[a,l,c]=o.shift(),d=as(this.get(a,l,c));if(!d)continue;if(l>0){const f=this.get(a,l-1,c);(f===qe||pi(f))&&as(f)<d&&(this.set(a,l-1,c,Oc(d===8?7:d)),o.push([a,l-1,c]))}const u=d===8?7:d-1;if(!(u<1))for(const[f,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const p=this.get(a+f,l,c+h);(p===qe||pi(p))&&as(p)<u&&(this.set(a+f,l,c+h,Oc(u)),o.push([a+f,l,c+h]))}}return r}surface(e,t){for(let n=wt-1;n>=0;n--)if(this.get(e,n,t)!==qe)return n;return 0}serializeDeltas(){const e={};for(const[t,n]of this.deltas){const i=[];for(const[r,o]of n)i.push(r,o);e[t]=i}return e}loadDeltas(e){this.deltas.clear();for(const[t,n]of Object.entries(e)){const i=new Map;for(let r=0;r<n.length;r+=2)i.set(n[r],n[r+1]);this.deltas.set(t,i)}this.chunks.clear(),this.dirty.clear();for(const t of this.deltas.keys())this.dirty.add(t)}}const Vg=si.map(s=>s.R);function Wg(s,e,t,n,i){const r=s.get(e,t,n);return r===Kt||r===Gt||r===zt||r===Ht?!0:!(Cg(r)||r===i)}const Pr=.6,Xg=1.8,Hc=1.62;class qg{constructor(e){this.world=e}pos=new D(.5,31.01,2.5);vel=new D;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;waterAt(e){return pi(this.world.get(Math.floor(this.pos.x),Math.floor(this.pos.y+e),Math.floor(this.pos.z)))}collides(e,t,n){const i=Math.floor(e-Pr/2),r=Math.floor(e+Pr/2),o=Math.floor(n-Pr/2),a=Math.floor(n+Pr/2),l=Math.floor(t),c=Math.floor(t+Xg-.001);for(let d=i;d<=r;d++)for(let u=o;u<=a;u++)for(let f=l;f<=c;f++)if(qt(this.world.get(d,f,u)))return!0;return!1}update(e,t,n,i,r,o){this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Hc);const a=this.inWater,l=(this.sprinting?7.2:4.5)*r*(o?.25:1)*(a?.55:1),c=new D(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),d=new D(-c.z,0,c.x),u=c.multiplyScalar(n).add(d.multiplyScalar(t));u.lengthSq()>1&&u.normalize();const f=this.onGround?40:a?12:8;this.vel.x+=(u.x*l-this.vel.x)*Math.min(1,f*e),this.vel.z+=(u.z*l-this.vel.z)*Math.min(1,f*e),a?(this.vel.y-=7*e,i&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*e),this.vel.y=_i.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*e)):(this.vel.y-=24*e,i&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*e,0),this.moveAxis(this.vel.z*e,2),this.moveAxis(this.vel.y*e,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0)),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(e,t){if(e===0)return;const n=this.pos,i=Math.max(1,Math.ceil(Math.abs(e)/.3)),r=e/i;for(let o=0;o<i;o++){const a=n.x+(t===0?r:0),l=n.y+(t===1?r:0),c=n.z+(t===2?r:0);if(!this.collides(a,l,c)){n.set(a,l,c);continue}t===1?(r<0&&(this.onGround=!0),this.vel.y=0):t===0?this.vel.x*=.25:this.vel.z*=.25;return}t===1&&e!==0&&(this.onGround=!1)}eye(){return new D(this.pos.x,this.pos.y+Hc,this.pos.z)}}const ki=20,ks=45,vl=36,xl=37.5,Ha=39.5,Ga=31.5,Va=5,Yg=27,$g=25,jr=100;class Kg{constructor(e){this.weatherSeed=e}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};embedKey="";embedAir=null;worldTimeToDayFrac(e){return e%Lt/Lt}ambient(e,t,n){const i=(t-.28+1)%1;let r=Yg-$g*(i<=.3?Math.cos(i/.3*Math.PI):Math.cos((1+(i-.3)/.7)*Math.PI));e===2&&(r-=2),(e===3||e===4)&&(r+=3);const o=Lh(Math.floor(n/10)/60,this.weatherSeed)*2-1;return r+o*8}update(e,t,n,i){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=e);const r=this.worldTimeToDayFrac(i.tSec),o=this.ambient(i.biome,r,i.tSec),a=Math.floor(n.x),l=Math.floor(n.y),c=Math.floor(n.z),d=(E,g,v)=>{const{R:T,openSky:A}=t.skyResistance(E,g,v);let R=1-Math.exp(-T),P=o;A&&i.sunElev>0&&(P+=8+10*i.sunElev);const b=t.roomInfo(E,g,v);return b.sealed&&(b.regulators*jr>=b.size?(P=36.6,R=1):(P=o,R=0)),{R:T,openSky:A,shelter:R,ambEff:P,room:b}};let u=d(a,l,c);if(u.room.size===0){const E=`${a},${l},${c}|${Math.floor(i.tSec*2)}`;if(this.embedKey!==E){let g=u;for(let v=-1;v<=1;v++)for(let T=-1;T<=1;T++)for(let A=-1;A<=1;A++){if(!v&&!T&&!A)continue;const R=d(a+v,l+T,c+A);R.room.size!==0&&Math.abs(R.ambEff-37)<Math.abs(g.ambEff-37)&&(g=R)}this.embedKey=E,this.embedAir=g}this.embedAir&&(u=this.embedAir)}this.lastOpenSky=u.openSky;let f=u.shelter,h=u.ambEff;const p=u.room;if(this.lastRoom=p,i.inWater){const E=_i.clamp(o,12,24)-3;h=(h+E)/2}i.warmth&&(h+=i.warmth);const x=36.6+(h-36.6)*(1-f);this.lastAmbient=o,this.lastAmbientEff=h,this.lastShelterR=u.R,this.lastTarget=x;const _=p.sealed?.022:.0075;this.body+=(x-this.body)*_*e,this.body=_i.clamp(this.body,12,44.5);let m=100/(Lt*1.5);this.body>37&&(m+=(this.body-37)*.02),i.sprinting&&(m*=1.7),i.overencumbered&&(m+=.05),this.water=Math.max(0,this.water-m*e),this.body>Ha&&this.hurt((this.body-Ha)*.6,"heat stroke"),this.body<Ga&&this.hurt((Ga-this.body)*.7,"hypothermia"),this.water<=0?this.hurt(1.2,"dehydration"):this.water<Va&&this.hurt((Va-this.water)*.15,"dehydration"),this.water>25&&this.body>=vl&&this.body<=xl&&this.health>0&&(this.health=Math.min(100,this.health+.25*e)),this.vision=_i.clamp((28-this.water)/28,0,1)}airTempAt(e,t,n,i,r){const o=this.worldTimeToDayFrac(r),a=this.ambient(0,o,r),{openSky:l}=e.skyResistance(t,n,i);let c=a;const d=Math.max(0,Math.sin((o-.28)*Math.PI*2));l&&d>0&&(c+=8+10*d);const u=e.roomInfo(t,n,i);return u.sealed&&(c=u.regulators*jr>=u.size?36.6:a),c}hurt(e,t){this.health<=0||this.invincible||(this.health-=e,this.health<=0&&(this.health=0,this.causeOfDeath=t))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=10,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const jg=new Set([Kt,Gt,Pt,zt,Ht,$t]),Zg=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],cn=16,fs=16,Wa=[Un,Si,ni,Js,xs,bs,Es,to,Qs,wn,Kt,Gt,Tn,no,on,an,mn,vn,er,Pt,Vi,ri,Ft,On,Hn,io,hl,ul,dl,fl,pl,so,vi,Rn,Cn,ii,In,Wi,tr,An,zt,Ht,$t,Ln,Gn];let Xo=null;function Ph(){if(Xo)return Xo;const s=document.createElement("canvas");s.width=s.height=fs*cn;const e=s.getContext("2d"),t=new ml(48879),n={};Wa.forEach((o,a)=>n[o]=a);const i=o=>Math.max(0,Math.min(1,o)),r=o=>{const a=n[o],l=a%fs*cn,c=(a/fs|0)*cn,[d,u,f]=si[o].color,h=(g,v=1,T=0,A=0,R=0)=>`rgba(${Math.round(i(d+g+T)*255)},${Math.round(i(u+g+A)*255)},${Math.round(i(f+g+R)*255)},${v})`,p=(g,v,T)=>{e.fillStyle=T,e.fillRect(l+g,c+v,1,1)},x=g=>{e.fillStyle=g,e.fillRect(l,c,cn,cn)},_=g=>(t.next()-.5)*g,m=(g,v)=>{for(let T=0;T<g;T++)p(t.int(0,15),t.int(0,15),h(_(v)))},E=(g,v)=>{let T=t.int(1,13),A=t.int(1,13);for(let R=0;R<g;R++)p(T,A,h(_(v)-.15)),T+=t.int(-1,1),A+=t.int(0,1),T=Math.max(0,Math.min(15,T)),A=Math.max(0,Math.min(15,A))};switch(o){case Un:x(h(0)),m(50,.14);break;case Si:x(h(0)),m(30,.1);for(const g of[3,8,12])for(let v=0;v<16;v++)t.next()>.25&&p(v,g+v%2,h(-.12));break;case ni:x(h(_(.08))),m(40,.12),E(9,.05),E(7,.05);break;case Js:x(h(-.04));for(let g=0;g<14;g++){const v=t.int(1,14),T=t.int(1,14);p(v,T,h(.12)),p(v+1,T,h(.05)),p(v,T+1,h(-.15)),p(v-1,T,h(-.1))}break;case xs:x(h(0)),m(70,.22);break;case bs:x(h(.04)),m(25,.08);for(let g=2;g<16;g+=5)for(let v=0;v<16;v++)t.next()>.4&&p(v,g+(v%3===2?1:0),h(-.12));break;case Es:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(g,v,h(_(.16)+Math.sin(v*.9+g)*.03));p(5,6,h(-.2)),p(6,6,h(-.25)),p(5,7,h(-.15));break;case to:x(h(0,.16));for(let g=0;g<16;g++)p(g,0,h(.12,.4)),p(g,15,h(.12,.4)),p(0,g,h(.12,.4)),p(15,g,h(.12,.4));for(let g=2;g<8;g++)p(g,g+2,h(.3,.4));break;case Qs:x(h(0,.26));for(let g=0;g<16;g++)p(g,0,h(.1,.55)),p(g,15,h(.1,.55)),p(0,g,h(.1,.55)),p(15,g,h(.1,.55)),p(8,g,h(.06,.5)),p(g,8,h(.06,.5));break;case wn:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(v,g,h(-g*.006+_(.05)));for(let g=0;g<16;g++)p(g,10,h(-.22));for(const g of[1,5,9,13])p(g,9,h(.18)),p(g,11,h(.12));break;case Kt:x(h(-.03)),m(12,.06);for(let g=0;g<16;g++)p(g,0,h(-.22)),p(g,15,h(-.22)),p(0,g,h(-.22)),p(15,g,h(-.22));e.strokeStyle=h(.08),e.strokeRect(l+3.5,c+2.5,8,10);for(let g=7;g<=9;g++)p(12,g,h(.3));break;case Gt:x(h(-.03)),m(12,.06);for(let g=0;g<16;g++)p(g,0,h(-.22)),p(g,15,h(-.22)),p(0,g,h(-.22)),p(15,g,h(-.22));for(let g=4;g<=11;g++)for(let v=5;v<=10;v++)p(v,g,h(-.3,1,-.1,-.02,.06));e.strokeStyle=h(.14),e.strokeRect(l+4.5,c+3.5,7,9);break;case Pt:for(let g=0;g<16;g++)p(0,g,h(-.1,.9)),p(1,g,h(.05,.85)),p(2,g,h(-.15,.7));p(1,7,h(.3,.9)),p(1,8,h(.3,.9));break;case Tn:x(h(-.25));for(let g=5;g<=10;g++)for(let v=5;v<=10;v++)p(v,g,h(g>5&&g<10&&v>5&&v<10?.38:.2));for(let g=4;g<=11;g++)p(g,4,h(-.15)),p(g,11,h(-.15));break;case no:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(v,g,h((g%3===0?-.06:.03)+_(.05)));for(const[g,v]of[[2,2],[13,2],[2,13],[13,13]])p(g,v,h(.2));break;case on:x(h(-.25)),m(10,.08);for(let g=-3;g<=3;g++){const v=3-Math.abs(g);for(let T=-v;T<=v;T++)p(8+T,8+g,h(g===0?0:.05,1))}p(8,7,h(.3,1)),p(7,8,h(.2,1));break;case an:x(h(0)),m(14,.08);for(let g=0;g<16;g++)p(g,0,h(-.28)),p(g,1,h(.12)),p(g,5,h(-.22));for(let g=0;g<16;g++)for(let v=6;v<16;v++)p(g,v,h(-.12+(v%4===0?-.08:0)+_(.05)));for(let g=3;g<=12;g++)p(g,3,"rgba(150,156,168,1)");p(2,3,"rgba(90,64,40,1)"),p(2,4,"rgba(90,64,40,1)");for(let g=8;g<=11;g++)p(g,2,"rgba(110,80,50,1)");p(11,2,"rgba(150,156,168,1)"),p(12,2,"rgba(150,156,168,1)"),p(11,3,"rgba(150,156,168,1)"),p(12,3,"rgba(150,156,168,1)");break;case On:x(h(-.18)),m(10,.06);for(const g of[1,2,13,14])for(let v=0;v<16;v++)p(g,v,h(.1));for(let g=3;g<=8;g++)for(let v=4;v<=11;v++)p(v,g,h(.06+_(.04)));for(let g=4;g<=11;g++)p(g,3,h(-.3)),p(g,8,h(-.3));p(7,5,"rgba(190,190,190,1)"),p(8,5,"rgba(190,190,190,1)");for(let g=3;g<=12;g++)p(g,12,h(.12));for(let g=3;g<=12;g++)p(g,13,h(-.25));break;case mn:x(h(-.1));for(let g=0;g<16;g+=2)p(g,13,h(.15,1,.02,-.02,0)),p(g+1,14,h(.08));for(let g=2;g<12;g++)p(g,14-g+2,h(.05,1,-.1,-.15,-.25)),p(g,g-1,h(0,1,-.12,-.18,-.3));for(let g=5;g<=10;g++)for(let v=6;v<=9;v++)p(v,g,h(g<8?.3:.18,1,.25,-.05,-.3));p(7,6,h(.45,1,.3,.1,-.25)),p(8,5,h(.4,1,.25,.05,-.25));break;case io:case hl:case ul:case dl:case fl:case pl:case so:case vn:x(h(0,.72));for(const g of[2,6,10,14])for(let v=0;v<16;v++)t.next()>.45&&p(v,g+(v%4<2?0:1),h(.15,.8));m(10,.08);break;case er:x(h(_(.06)));for(const g of[3,7,11])for(let v=0;v<16;v++)p(v,g,h(-.18));for(let g=0,v=0;v<16;v+=4,g++)for(let T=g%2*4;T<16;T+=8)for(let A=v;A<v+3;A++)p(T,A,h(-.15));break;case Vi:x(h(-.35,1,.05,0,.1));for(let g=0;g<24;g++)p(t.int(0,15),t.int(0,15),h(-.25,1,.1,0,.18));for(let g=4;g<=11;g++)for(let v=4;v<=11;v++){const T=Math.max(Math.abs(g-7.5),Math.abs(v-7.5));T>=3.5?p(g,v,h(.12,1,.55,.15,.85)):p(g,v,h(.3+(3-T)*.15,1,.75,.3,1))}break;case ri:x(h(-.08)),m(10,.05);for(const g of[1,3,5])for(let v=2;v<=13;v++)p(v,g,h(-.25));for(let g=4;g<=11;g++)for(let v=7;v<=14;v++){const T=Math.max(Math.abs(g-7.5),Math.abs(v-10.5));T>=3.2?p(g,v,h(.12)):p(g,v,h(.22+(3-T)*.1,1,-.05,.15,.2))}break;case Hn:x(h(0)),m(36,.1);for(const g of[2,7,12])for(let v=0;v<16;v++)p(g,v,h(-.14));for(const[g,v]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])p(g,v,h(.22)),p(g+1,v,h(-.2)),p(g,v+1,h(-.2));p(13,1,"rgba(214,74,130,1)"),p(1,6,"rgba(198,58,114,1)"),p(5,11,"rgba(214,74,130,1)");break;case Ft:x(h(-.02)),m(18,.07);for(let g=0;g<16;g++)p(g,0,h(-.28)),p(g,7,h(-.24)),p(g,15,h(-.3));for(let g=0;g<16;g++)p(g,4,"rgba(148,154,166,1)"),p(g,5,"rgba(120,126,138,1)");for(let g=2;g<5;g++)for(const v of[7,8])p(v,g,"rgba(200,205,215,1)");p(7,6,"rgba(40,42,48,1)"),p(8,6,"rgba(40,42,48,1)");break;case vi:x(h(_(.04)));for(const g of[2,6,10,14])for(let v=0;v<16;v++)p(v,g,h(-.14));for(const g of[3,7,11])for(let v=0;v<16;v++)t.next()>.6&&p(v,g,h(.1));break;case Rn:case Cn:{if(x(h(_(.03))),o===Rn){for(const[g,v]of[[7,13],[8,13],[7,12],[8,12],[9,13]])p(g,v,h(.08));p(6,11,h(.16)),p(9,10,h(.12)),p(7,11,h(.02))}else{for(let g=6;g<=13;g++)for(let v=3;v<=12;v++)Math.hypot(v-7.5,(g-9.5)*1.35)>5.2||p(v,g,(v+(g/2|0))%4===0?h(-.14):h(.05));p(8,5,h(-.1)),p(7,5,h(-.16)),p(2,13,h(.1)),p(13,12,h(.06)),p(4,14,h(.08))}break}case ii:case In:{x(h(_(.03)));for(const g of[13,14])for(let v=0;v<16;v++)p(v,g,h(-.12));if(o===ii)for(const g of[4,8,12])for(let v=11;v<=14;v++)p(g,v,h(.1));else for(const g of[3,8,13]){for(let v=3;v<=14;v++)p(g,v,h(-.05));for(let v=3;v<=8;v+=2)p(g-1,v,h(.2)),p(g+1,v,h(.15))}break}case Wi:x(h(0)),m(36,.1);for(const g of[2,7,12])for(let v=0;v<16;v++)p(g,v,h(-.14));for(const[g,v]of[[4,4],[9,6],[6,10],[11,12],[3,14]])p(g,v,h(.22)),p(g+1,v,h(-.2)),p(g,v+1,h(-.2));for(let g=0;g<=3;g++)for(let v=5;v<=10;v++)p(v,g,"rgba(214,74,130,1)");p(6,0,"rgba(238,150,190,1)"),p(9,1,"rgba(238,150,190,1)");break;case tr:x(h(-.12)),m(10,.05);for(let g=0;g<16;g++)p(g,0,h(-.26)),p(g,15,h(-.26)),p(g,7,"rgba(150,156,168,1)"),p(g,8,"rgba(110,116,128,1)");for(const[g,v]of[[2,3],[13,3],[2,12],[13,12]])p(g,v,"rgba(200,205,215,1)");for(let g=2;g<=5;g++)p(0,g,h(.14));for(let g=2;g<=5;g++)p(15,g,h(.14));break;case An:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(v,g,h((v%4===0?-.05:.02)+_(.04)));for(let g=0;g<16;g++)p(g,0,h(-.2)),p(g,15,h(-.2)),p(0,g,h(-.16)),p(15,g,h(-.16));for(const[g,v]of[[3,3],[12,3],[3,12],[12,12]])p(g,v,h(.22));break;case zt:case Ht:{x(h(-.05)),m(10,.05);for(let g=0;g<16;g++)p(g,0,h(-.2)),p(g,15,h(-.2)),p(0,g,h(-.2)),p(15,g,h(-.2));if(o===zt){e.strokeStyle=h(.06),e.strokeRect(l+4.5,c+3.5,7,9);for(let g=7;g<=9;g++)p(12,g,h(.26))}else{for(let g=5;g<=10;g++)for(let v=6;v<=9;v++)p(v,g,h(.1,1,-.05,.1,.15));e.strokeStyle=h(.12),e.strokeRect(l+5.5,c+4.5,5,7)}break}case $t:for(let g=0;g<16;g++)p(0,g,h(-.12,.9)),p(1,g,h(.03,.85)),p(2,g,h(-.17,.7));p(1,7,h(.26,.9)),p(1,8,h(.26,.9));break;case Ln:x(h(_(.03)));for(let g=0;g<16;g++)for(let v=0;v<16;v++)(v+g)%5===0&&p(v,g,h(-.08));e.strokeStyle="rgba(60,26,24,1)",e.lineWidth=1,e.strokeRect(l+.5,c+.5,15,15);for(let g=0;g<16;g++)p(g,11,"rgba(90,40,36,1)"),p(g,12,"rgba(150,80,70,1)");for(let g=0;g<11;g++)p(0,g,h(.12)),p(15,g,h(-.1));break;case Gn:x(h(_(.03))),e.strokeStyle="rgba(60,26,24,1)",e.lineWidth=1,e.strokeRect(l+.5,c+.5,15,15),e.fillStyle="rgba(226,220,206,1)",e.fillRect(l+3,c+4,10,8),e.strokeStyle="rgba(160,152,134,1)",e.strokeRect(l+3.5,c+4.5,9,7);for(let g=0;g<16;g++)p(g,11,"rgba(90,40,36,1)"),p(g,12,"rgba(150,80,70,1)");break}};for(const o of Wa)r(o);return Xo=s,s}function Jg(){const s=new yh(Ph());return s.flipY=!1,s.magFilter=s.minFilter=hn,s.generateMipmaps=!1,s.colorSpace=Qt,s}const Dh=[];Wa.forEach((s,e)=>Dh[s]=e);const Dr=fs*cn,Xa=s=>{const e=Dh[s]??0;return[e%fs*cn,(e/fs|0)*cn]};class Qg{scene=new Id;camera;three;chunkMeshes=new Map;group=new _n;entityGroup=new _n;sun;hemi;stars;sunDisc;moonDisc;highlight;renderDistance=7;atlas=Jg();matOpaque=new Dn({map:this.atlas,vertexColors:!0,side:Ot});matEmissive=new Ni({map:this.atlas,vertexColors:!0,side:Ot});matTrans=new Dn({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ot});torch;dynLights=[];constructor(e){this.three=new Rg({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),e.appendChild(this.three.domElement),this.camera=new ln(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new dc(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.sun=new Vd(16777215,1),this.hemi=new zd(12571878,9073749,.55),this.scene.add(this.sun,this.hemi),this.scene.fog=new sl(14207392,40,this.renderDistance*pe);const t=new Zt,n=[];for(let r=0;r<500;r++){const o=Math.random()*Math.PI*2,a=Math.acos(Math.random()*2-1);n.push(Math.sin(a)*Math.cos(o)*400,Math.abs(Math.cos(a))*400,Math.sin(a)*Math.sin(o)*400)}t.setAttribute("position",new vt(n,3)),this.stars=new Fd(t,new Mh({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new Bt(new Kr(24,24),new Ni({color:16771504,fog:!1,side:Ot,toneMapped:!1})),this.moonDisc=new Bt(new Kr(15,24),new Ni({color:14213877,fog:!1,side:Ot,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const i=new Mi(1.002,1.002,1.002);this.highlight=new Nd(new kd(i),new xh({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(e){this.three.setPixelRatio(e==="low"?.75:e==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const e of this.chunkMeshes.values())for(const t of e)this.group.remove(t),t.geometry.dispose();this.chunkMeshes.clear()}addPointLight(e,t,n,i){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===e&&o.y===t&&o.z===n))return;const r=new dc(i==="lamp"?16773296:i==="fire"?16745280:9427199,i==="lamp"?.9:i==="fire"?1.1:.8,i==="lamp"?12:i==="fire"?9:10,1.3);r.position.set(e+.5,t+.6,n+.5),this.scene.add(r),this.dynLights.push({x:e,y:t,z:n,light:r,flame:i==="fire"})}removePointLight(e,t,n){const i=this.dynLights.findIndex(r=>r.x===e&&r.y===t&&r.z===n);i<0||(this.scene.remove(this.dynLights[i].light),this.dynLights.splice(i,1))}dispose(){this.resetChunkMeshes();for(const e of this.dynLights)this.scene.remove(e.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(e){const t=(e-.25)*Math.PI*2,n=Math.sin(t),i=_i.clamp(n*2.2,0,1),r=_i.clamp(1-Math.abs(n)*5,0,1),o=new We(660006),a=new We(13201213),l=new We(12570592),c=o.clone().lerp(l,i);r>0&&c.lerp(a,r*.7);const d=new We(16767392).lerp(new We(16743231),r);return{sky:c,sunColor:d,sunElev:n,sunI:Math.max(.06,n*1.15)}}updateSky(e,t){const n=e%Lt/Lt,i=this.keyframe(n);this.scene.background=i.sky,this.scene.fog.color.copy(i.sky),this.scene.fog.far=this.renderDistance*pe*.98,this.sun.color.copy(i.sunColor),this.sun.intensity=i.sunI,i.sunElev<0&&(this.sun.color.setHex(10335464),this.sun.intensity=.28),this.sun.position.set(t.x+Math.cos((n-.25)*Math.PI*2)*100,t.y+i.sunElev*100,t.z+40),this.hemi.intensity=.22+i.sunI*.35,this.stars.material.opacity=Math.max(0,1-i.sunI*3),this.stars.position.set(t.x,t.y,t.z);const r=(n-.25)*Math.PI*2,o=430;this.sunDisc.position.set(t.x+Math.cos(r)*o,t.y+Math.sin(r)*o,t.z+o*.4),this.moonDisc.position.set(t.x-Math.cos(r)*o,t.y-Math.sin(r)*o,t.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(r)>-.12,this.moonDisc.visible=Math.sin(r)<.12,this.torch.intensity=.12+(1-Math.min(1,i.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+Lh(e*5.3+a.x*3.1+a.z,7)*.45);return i}setHighlight(e){if(!e){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(e.x+.5,e.y+.5,e.z+.5)}rebuildDirty(e){let t=3;for(const n of e.dirty){if(t<=0)break;this.buildChunk(e,n),e.dirty.delete(n),t--}}ensureChunks(e,t,n){for(let i=-this.renderDistance;i<=this.renderDistance;i++)for(let r=-this.renderDistance;r<=this.renderDistance;r++){const o=Fs(t+i,n+r);this.chunkMeshes.has(o)||e.markDirty(t+i,n+r)}}buildChunk(e,t){const[n,i]=t.split(",").map(Number),r=e.chunk(n,i),o=[],a=[],l=[],c=[],d=[],u=[],f=[],h=[],p=[],x=[],_=[],m=[];for(let T=0;T<pe;T++)for(let A=0;A<pe;A++)for(let R=0;R<wt;R++){const P=r[(T*pe+A)*wt+R];if(P===qe)continue;if(jg.has(P)){this.emitDoor(o,a,l,c,e,T,R,A,n*pe,i*pe,P);continue}const b=si[P],y=b.emissive,C=b.transparent,U=C?p:y?d:o,O=C?x:y?u:a,q=C?_:y?f:l,W=C?m:y?h:c,[G,Y]=Xa(P);for(const B of Zg){const ne=T+B.dir[0],le=R+B.dir[1],me=A+B.dir[2];if(!Wg(e,n*pe+ne,le,i*pe+me,P))continue;const Te=U.length/3,$e=y?1:B.shade;for(const Ze of B.corners)U.push(T+Ze[0],R+Ze[1],A+Ze[2]),O.push($e,$e,$e),W.push((G+.5+Ze[B.uv[0]]*(cn-1))/Dr,(Y+.5+Ze[B.uv[1]]*(cn-1))/Dr);q.push(Te,Te+1,Te+2,Te,Te+2,Te+3)}}const E=this.chunkMeshes.get(t);if(E)for(const T of E)this.group.remove(T),T.geometry.dispose();const g=[],v=(T,A,R,P,b)=>{if(T.length===0)return;const y=new Zt;y.setAttribute("position",new vt(T,3)),y.setAttribute("color",new vt(A,3)),y.setAttribute("uv",new vt(P,2)),y.setIndex(R),y.computeVertexNormals();const C=new Bt(y,b);C.position.set(n*pe,0,i*pe),this.group.add(C),g.push(C)};v(o,a,l,c,this.matOpaque),v(d,u,f,h,this.matEmissive),v(p,x,_,m,this.matTrans),this.chunkMeshes.set(t,g)}emitDoor(e,t,n,i,r,o,a,l,c,d,u){const f=c+o,h=d+l,p=u===zt||u===Ht||u===$t,x=u===Gt||u===Ht||u===Pt&&r.get(f,a-1,h)===Pt||u===$t&&r.get(f,a-1,h)===$t,_=Xa(x?p?Ht:Gt:p?zt:Kt),m=u===Pt||u===$t,g=!(qt(r.get(f-1,a,h))||qt(r.get(f+1,a,h)))&&(qt(r.get(f,a,h-1))||qt(r.get(f,a,h+1))),v=g?!qt(r.get(f-1,a,h)):!qt(r.get(f,a,h-1)),T=g?!qt(r.get(f+1,a,h)):!qt(r.get(f,a,h+1)),A=f+h&1;let R,P;A&&T?(R=1,P=1):!A&&v?(R=0,P=-1):T?(R=1,P=1):(R=0,P=-1);const b=r.doorSwing.get(f+","+h);b&&(P=b);const y=.04,C=.96,U=R?.84:.02,O=R?.98:.16,q=y,W=R?.98:.02,G=(ne,le,me)=>{const Te=e.length/3;for(let $e=0;$e<4;$e++){let[Ze,et,$]=ne[$e];if(m){const j=Ze-q,ue=$-W;Ze=q-P*ue,$=W+P*j}e.push(g?o+$:o+Ze,a+et,g?l+Ze:l+$),t.push(me,me,me),i.push((_[0]+.5+le[$e][0]*(cn-1))/Dr,(_[1]+.5+le[$e][1]*(cn-1))/Dr)}n.push(Te,Te+1,Te+2,Te,Te+2,Te+3)},Y=ne=>(ne-y)/(C-y),B=ne=>(ne-U)/(O-U);G([[y,0,O],[C,0,O],[C,1,O],[y,1,O]],[[Y(y),0],[Y(C),0],[Y(C),1],[Y(y),1]],.85),G([[y,0,U],[C,0,U],[C,1,U],[y,1,U]],[[Y(C),0],[Y(y),0],[Y(y),1],[Y(C),1]],.7),G([[C,0,U],[C,0,O],[C,1,O],[C,1,U]],[[B(U),0],[B(O),0],[B(O),1],[B(U),1]],.6),G([[y,0,U],[y,0,O],[y,1,O],[y,1,U]],[[B(O),0],[B(U),0],[B(U),1],[B(O),1]],.6),G([[y,1,U],[C,1,U],[C,1,O],[y,1,O]],[[Y(y),B(U)],[Y(C),B(U)],[Y(C),B(O)],[Y(y),B(O)]],1),G([[y,0,U],[C,0,U],[C,0,O],[y,0,O]],[[Y(y),B(O)],[Y(C),B(O)],[Y(C),B(U)],[Y(y),B(U)]],.45)}addEntityMesh(e,t,n,i=.35){const r=new Bt(new Mi(i,i,i),new Dn({color:n}));return r.position.set(...t),r.userData.eid=e,this.entityGroup.add(r),r}removeEntityMesh(e){const t=this.entityGroup.children.find(n=>n.userData.eid===e);t&&(this.entityGroup.remove(t),t.geometry.dispose())}moveEntityMesh(e,t){const n=this.entityGroup.children.find(i=>i.userData.eid===e);n&&n.position.set(...t)}entityMesh(e){return this.entityGroup.children.find(t=>t.userData.eid===e)}addSceneObject(e){this.entityGroup.add(e)}removeSceneObject(e){this.entityGroup.remove(e)}nextEid=1e6;addBeam(e,t,n,i,r=14){const o=this.nextEid++,a=new Bt(new ol(.14,.28,r,6,1,!0),new Ni({color:i,transparent:!0,opacity:.4,depthWrite:!1,side:Ot,fog:!1}));return a.position.set(e,t+r/2,n),a.userData.eid=o,this.entityGroup.add(a),o}addGroundRing(e,t,n,i,r=1.1){const o=this.nextEid++,a=new Bt(new al(r*.55,r,24),new Ni({color:i,transparent:!0,opacity:.7,side:Ot,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(e,t+.06,n),a.userData.eid=o,this.entityGroup.add(a),o}render(){this.three.render(this.scene,this.camera)}}const Fe=s=>s,e_=(s,e)=>`${s.charAt(0).toUpperCase()+s.slice(1)} (tier ${e}). Higher tiers break faster and unlock harder blocks.`,Fn=(s,e,t,n)=>Fe({id:`${t}_${s}`,name:`${t.charAt(0).toUpperCase()+t.slice(1)} ${s}`,desc:e_(s,e),w:1,h:2,mass:1.2+e*.8,tool:{type:s,tier:e},color:n}),t_=[Fe({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Un,color:"#d4b880"}),Fe({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:Si,color:"#c2a670"}),Fe({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:ni,color:"#736d69"}),Fe({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Js,color:"#8d8680"}),Fe({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:xs,color:"#6b5238"}),Fe({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:bs,color:"#d9dbd6"}),Fe({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:Es,color:"#61492f"}),Fe({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:to,color:"#a6cfe6"}),Fe({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:Qs,color:"#8cc0a0"}),Fe({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:wn,color:"#858a99"}),Fe({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:Kt,color:"#999fa8"}),Fe({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:Tn,color:"#fff0a0"}),Fe({id:"metal",name:"Metal Rod",desc:"Salvaged from the wreck. The backbone of every tool.",w:1,h:1,mass:1,block:no,color:"#9aa0aa"}),Fe({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:on,color:"#66e5f0"}),Fe({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:an,color:"#806647"}),Fe({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:mn,color:"#e67333"}),Fe({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:ri,color:"#59bfcc"}),Fe({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:er,color:"#b3956b"}),Fe({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Ft,color:"#8a6d3b"}),Fe({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),Fe({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),Fe({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),Fe({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:Vi,color:"#c468e8"}),Fe({id:"ironrod",name:"Iron Rod",desc:"Iron baked out of desert Rock at a Campfire. Two rods forge one Metal Rod at a Crafting Bench — tools without touching the wreck.",w:1,h:1,mass:1,color:"#b0683f"}),Fe({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),Fn("pickaxe",1,"wood","#a8834f"),Fn("pickaxe",2,"stone","#8d8680"),Fn("pickaxe",3,"metal","#9aa0aa"),Fn("shovel",1,"wood","#a8834f"),Fn("shovel",2,"stone","#8d8680"),Fn("shovel",3,"metal","#9aa0aa"),Fn("axe",1,"wood","#a8834f"),Fn("axe",2,"stone","#8d8680"),Fn("axe",3,"metal","#9aa0aa"),Fn("disassembler",1,"metal","#c0c8d8"),Fe({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),Fe({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",color:"#7a5a3a"}),Fe({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:Hn,color:"#3d8042"}),Fe({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),Fe({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),Fe({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",color:"#8a6f4d"}),Fe({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),Fe({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),Fe({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:vi,color:"#573d23"}),Fe({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:Rn,color:"#c8b060"}),Fe({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:ii,color:"#d8c878"}),Fe({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),Fe({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),Fe({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),Fe({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:tr,color:"#8a744a"}),Fe({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:An,color:"#9aa0ac"}),Fe({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. Keeps rooms apart when closed; leave one open and the spaces share one temperature.",w:1,h:1,mass:2,block:zt,color:"#82868e"}),Fe({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:Ln,color:"#a84a42"})],Oe=Object.fromEntries(t_.map(s=>[s.id,s])),oi={};for(const s of Object.values(Oe))s.block!==void 0&&(oi[s.block]=s.id);oi[Gt]="door";oi[Ht]="door_inner";oi[Gn]="bed";oi[Rn]="seed_melon";oi[Cn]="dune_melon";oi[ii]="seed_wheat";oi[In]="wheat";oi[Wi]="cactus";function pn(s){const e=Oe[s.itemId];return s.rot?{w:e.h,h:e.w}:{w:e.w,h:e.h}}class qo{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(e,t,n){const i=this.slots;this.w=e,this.h=t,this.bonusLimit=n,this.slots=[];for(const r of i)this.addItem(r.itemId,r.count)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let e=0;for(const t of this.slots)e+=Oe[t.itemId].mass*t.count;return e}occupied(e,t,n){for(const i of this.slots){if(i===n)continue;const r=pn(i);if(e>=i.x&&e<i.x+r.w&&t>=i.y&&t<i.y+r.h)return i}return null}fits(e,t,n,i,r){if(e<0||t<0||e+n>this.w||t+i>this.h)return!1;for(let o=0;o<i;o++)for(let a=0;a<n;a++)if(this.occupied(e+a,t+o,r))return!1;return!0}move(e,t,n){const i=pn(e);return t===e.x&&n===e.y?!0:this.fits(t,n,i.w,i.h,e)?(e.x=t,e.y=n,!0):!1}rotate(e){const t=pn(e);return t.w===t.h||!this.fits(e.x,e.y,t.h,t.w,e)?!1:(e.rot=!e.rot,!0)}addItem(e,t=1){const n=Oe[e],i=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let r=0;r<t;r++){let o=!1;for(const[a,l,c]of i){for(let d=0;d<=this.h-l&&!o;d++)for(let u=0;u<=this.w-a&&!o;u++){let f=!0;for(let h=0;h<l&&f;h++)for(let p=0;p<a&&f;p++)this.occupied(u+p,d+h)&&(f=!1);f&&(this.slots.push(c?{itemId:e,count:1,x:u,y:d,rot:!0}:{itemId:e,count:1,x:u,y:d}),o=!0)}if(o)break}if(!o)return t-r}return 0}removeItem(e,t=1){let n=0;for(let i=this.slots.length-1;i>=0&&n<t;i--){const r=this.slots[i];if(r.itemId!==e)continue;const o=Math.min(r.count,t-n);r.count-=o,n+=o,r.count===0&&this.slots.splice(i,1)}return n}countOf(e){let t=0;for(const n of this.slots)n.itemId===e&&(t+=n.count);return t}has(e,t=1){return this.countOf(e)>=t}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const Ps={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]}},n_=new Mi(1,1,1);function i_(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Uh(s){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");s(t,i_(5370855));const n=new yh(e);return n.magFilter=n.minFilter=hn,n.generateMipmaps=!1,n.colorSpace=Qt,n}function s_(){return Uh((s,e)=>{s.fillStyle="#c8a76d",s.fillRect(0,0,64,64);for(let n=0;n<420;n++){const i=.5+(e()-.5)*.22;s.fillStyle=i>.5?"#d4b781":"#b89359",s.fillRect(e()*64|0,e()*64|0,1,1)}const t=[4,16,28,40];for(const n of t){for(let i=0;i<9;i++){const r=5-Math.abs(i-4);s.fillStyle="#6f5230",s.fillRect(32-r,n+i,r*2,1),s.fillStyle="#8a6a3f",s.fillRect(32-r+1,n+i,Math.max(1,r*2-2),1)}s.fillStyle="#a9884f",s.fillRect(10+(e()*4|0),n+3,3,2),s.fillRect(48+(e()*4|0),n+5,3,2)}for(let n=52;n<64;n++)s.fillStyle=n>=56?"#e9dab1":"#d8c494",s.fillRect(0,n,64,1);for(let n=0;n<40;n++)s.fillStyle="#ddcba0",s.fillRect(e()*64|0,52+(e()*12|0),1,1)})}function r_(){return Uh((s,e)=>{s.fillStyle="#c9a878",s.fillRect(0,0,64,64);for(let t=0;t<700;t++)s.fillStyle=e()>.5?"#ddc295":"#a9854f",s.fillRect(e()*64|0,e()*64|0,1,1);for(let t=0;t<60;t++)s.fillStyle="#8a6a3c",s.fillRect(e()*64|0,e()*48|0,1,2);for(let t=50;t<64;t++)s.fillStyle=t>=54?"#f2ead9":"#e2d4ba",s.fillRect(0,t,64,1);s.fillStyle="#efe6d2",s.beginPath(),s.arc(10,12,8,0,Math.PI*2),s.fill(),s.fillStyle="#6b4e2c",s.fillRect(8,10,4,4)})}let Yo=null,$o=null;function o_(){return Yo||(Yo={body:new Dn({map:s_()}),ridge:new Dn({color:7295536}),eye:new Dn({color:1445898})}),Yo}function a_(){return $o||($o={fur:new Dn({map:r_()}),pale:new Dn({color:15260868}),dark:new Dn({color:6045731}),pink:new Dn({color:14196896})}),$o}function yt(s,e,t,n,i,r,o){const a=new Bt(n_,n);return a.scale.set(s,e,t),a.position.set(i,r,o),a}function l_(){const s=o_(),e=new _n,t=[],n=[],i=[.36,.13,-.1,-.33,-.54,-.72],r=[.26,.27,.26,.23,.18,.12],o=[.22,.23,.22,.2,.16,.11],a=.24;for(let u=0;u<i.length;u++){const f=Math.sin(u*.8)*.05,h=yt(r[u],o[u],a,s.body,f,o[u]/2+.005,i[u]);t.push({mesh:h,bx:f,w:r[u],h:o[u],d:a}),n.push({mesh:yt(r[u]*.3,.02,a*.92,s.ridge,f,o[u]+.008,i[u]),w:r[u]}),e.add(h,n[u].mesh)}const l=new _n;l.position.set(Math.sin(0)*.05,.095+.005,.6);const c=yt(.27,.19,.27,s.body,0,.095,0);return l.add(c),l.add(yt(.035,.035,.03,s.eye,-.115,.14,.11)),l.add(yt(.035,.035,.03,s.eye,.115,.14,.11)),e.add(l),{group:e,animate:(u,f)=>{const h=Math.max(0,Math.min(1,f)),p=.015+.075*h,x=u*(3.2+2.6*h);for(let _=0;_<t.length;_++){const m=t[_],E=Math.sin(x-_*.85)*p;m.mesh.position.x=m.bx+E,m.mesh.rotation.y=-E*1.4;const g=1+Math.sin(u*1.9)*.03*(1-h*.6);m.mesh.scale.set(m.w*g,m.h,m.d);const v=n[_];v.mesh.position.x=m.mesh.position.x,v.mesh.rotation.y=m.mesh.rotation.y,v.mesh.scale.x=v.w*.3*g}l.position.x=Math.sin(x+.85)*p*.5,l.rotation.y=Math.sin(u*(2.2+2.4*h))*(.06+.14*h)}}}function c_(){const s=a_(),e=new _n,t=new _n;e.add(t);const n=yt(.22,.26,.34,s.fur,0,.26,-.02);t.add(n);const i=new _n;i.position.set(0,.31,.19),i.add(yt(.15,.14,.15,s.fur,0,0,.05)),i.add(yt(.045,.035,.04,s.pink,0,-.02,.13)),i.add(yt(.028,.028,.02,s.dark,-.062,.03,.1)),i.add(yt(.028,.028,.02,s.dark,.062,.03,.1)),t.add(i);const r=yt(.05,.12,.025,s.fur,-.075,.41,.16),o=yt(.05,.12,.025,s.fur,.075,.41,.16);r.rotation.z=.15,o.rotation.z=-.15,t.add(r,o);const a=yt(.09,.14,.11,s.fur,-.12,.14,-.06),l=yt(.09,.14,.11,s.fur,.12,.14,-.06),c=yt(.07,.05,.22,s.pale,-.13,.028,.02),d=yt(.07,.05,.22,s.pale,.13,.028,.02);t.add(a,l,c,d),t.add(yt(.035,.035,.07,s.pale,-.08,.11,.15)),t.add(yt(.035,.035,.07,s.pale,.08,.11,.15));const u=new _n;return u.position.set(0,.16,-.19),u.add(yt(.04,.04,.24,s.fur,0,0,-.12)),u.add(yt(.032,.032,.22,s.fur,0,-.045,-.34)),u.add(yt(.07,.055,.11,s.dark,0,-.075,-.5)),t.add(u),{group:e,animate:(h,p)=>{const x=Math.max(0,Math.min(1,p)),_=Math.abs(Math.sin(h*(2.6+2.4*x)));t.position.y=_*.13*x+Math.sin(h*1.7)*.004,n.scale.y=.26*(1+Math.sin(h*1.9)*.03*(1-x)),c.rotation.x=d.rotation.x=-.55*_*x,a.rotation.x=l.rotation.x=-.35*_*x,u.rotation.y=Math.sin(h*(1.8+3.4*x))*(.1+.3*x),u.rotation.x=-.12-.18*x+Math.sin(h*(2.6+2.4*x))*.06*x;const m=Math.max(0,Math.sin(h*6.3))**8*(1-x);r.rotation.z=.15+m*.25,o.rotation.z=-.15-Math.max(0,Math.sin(h*6.3+2.1))**8*(1-x)*.25,i.rotation.x=-.1*_*x+Math.sin(h*1.3)*.03*(1-x)}}}function h_(s){return s==="snake"?l_():c_()}const Nh=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"sword",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0},{out:"metal",count:1,needs:{ironrod:2},bench:!0},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},bench:!0},{out:"reptile_armor",count:1,needs:{snake_skin:3},bench:!0},{out:"farmland",count:1,needs:{dirt:1},bench:!1},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},bench:!1},{out:"metal_plating",count:1,needs:{metal:1},bench:!1},{out:"door_inner",count:1,needs:{metal:1,deadwood:1},bench:!0},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},bench:!0}],Fh=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"ironrod"},{in:"rat_raw",out:"rat_cooked"},{in:"wheat",out:"cooked_wheat"}];function kh(s,e){return Object.entries(e.needs).every(([t,n])=>s.has(t,n))}function u_(s,e){if(!kh(s,e))return null;for(const[t,n]of Object.entries(e.needs))s.removeItem(t,n);return s.addItem(e.out,e.count)}const qs=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it within reach of a Save Beacon.",goal:1}];function d_(){return{i:0,p:qs.map(()=>0)}}function f_(s){const e=d_();if(!s)return e;e.i=Math.max(0,Math.min(qs.length,s.i|0));for(let t=0;t<e.p.length;t++){const n=qs[t].goal;e.p[t]=Math.max(0,Math.min(n,(s.p&&s.p[t])|0))}return e}function Os(s){return s.i<qs.length?qs[s.i]:null}function p_(s,e,t=1){const n=Os(s);if(!n||n.kind!==e||s.p[s.i]>=n.goal||(s.p[s.i]=Math.min(n.goal,s.p[s.i]+t),s.p[s.i]<n.goal))return null;const i=n;return s.i++,i}const m_=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],Ds=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:s=>s.setClock(.56),poll:s=>s.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:s=>{s.inv.has("canister_empty")||s.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:s=>s.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:s=>s.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at sand to till it into <b>Farm Land</b>, then plant seeds in it. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. The desert used to be farmed; the towns still hold seeds.",goal:"plant",hold:40,enter:s=>{s.giveOrDrop("seed_wheat",2),s.selectHeld("shovel")}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class g_{constructor(e){this.g=e,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(e){this.step>=0&&this.advanceAt===null&&Ds[this.step].goal===e&&(this.advanceAt=this.acc+1.4)}tick(e){if(this.step<0||this.ended)return;this.acc+=e;const t=Ds[this.step];this.advanceAt===null?t.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=t.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const e=this.g.world;e.get(-6,31,0)===Pt&&(e.set(-6,31,0,Kt),e.set(-6,32,0,Gt),e.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=Ds.length){this.finish();return}this.beginStep(this.step+1)}beginStep(e){this.step=e,this.acc=0,this.advanceAt=null;const t=Ds[e];this.setCard(t.t,t.cap),this.g.tutGuide=t.guide??null,t.enter?.(this.g)}setCard(e,t){this.ttlEl.textContent=e,this.capEl.innerHTML=t,this.dotsEl.textContent=Ds.map((n,i)=>i===this.step?"●":i<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const Oh="sotf:index",Bh="sotf:settings",zh="sotf:best",Gc={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1};function __(){try{return{...Gc,...JSON.parse(localStorage.getItem(Bh)||"{}")}}catch{return{...Gc}}}function v_(s){localStorage.setItem(Bh,JSON.stringify(s))}function Ys(){return Number(localStorage.getItem(zh)||0)}function Vc(s){s>Ys()&&localStorage.setItem(zh,String(s))}function ro(){try{return JSON.parse(localStorage.getItem(Oh)||"[]")}catch{return[]}}function Ml(s){localStorage.setItem(Oh,JSON.stringify(s))}function Hh(s,e){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:s||e||"world",seedStr:e,updated:Date.now()},i=ro();return i.unshift(n),Ml(i),n}function x_(s){Ml(ro().filter(e=>e.id!==s)),localStorage.removeItem("sotf:w:"+s)}function Gh(s,e){try{localStorage.setItem("sotf:w:"+s.id,JSON.stringify(e));const t=ro(),n=t.find(i=>i.id===s.id);return n&&(n.updated=Date.now(),Ml(t)),!0}catch{return!1}}function Vh(s){try{const e=localStorage.getItem("sotf:w:"+s);return e?JSON.parse(e):null}catch{return null}}function Wh(s,e){const t=new Blob([JSON.stringify({meta:s,run:e})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=`${s.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function M_(s){const e=JSON.parse(await s.text());if(!e||e.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const t=Hh(e.meta?.name??"imported",e.run.seedStr);return Gh(t,e.run),t}const Ye=cn;function zi(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}const En=(s,e,t,n)=>{const[i,r]=Xa(n);s.drawImage(Ph(),i,r,Ye,Ye,e,t,Ye,Ye)},Ue=(s,e,t,n,i,r)=>{s.fillStyle=r,s.fillRect(e,t,n,i)},Li=(s,e,t,n,i,r)=>{s.strokeStyle=r,s.lineWidth=1,s.strokeRect(e+.5,t+.5,n-1,i-1)},Sn=(s,e,t,n,i,r,o=2)=>{s.strokeStyle=r,s.lineWidth=o,s.beginPath(),s.moveTo(e,t),s.lineTo(n,i),s.stroke()};function Xh(s,e,t,n){const[i,r]=zi(e*Ye,t*Ye);if(s.includes("_")&&(s.endsWith("pickaxe")||s.endsWith("shovel")||s.endsWith("axe")||s.endsWith("disassembler"))){const a=s.replace(/^(wood|stone|metal)_/,"");return Ue(r,7,16,2,14,"#6b5238"),Ue(r,6,14,4,3,"#4a4a52"),a==="pickaxe"?(Sn(r,3,12,13,12,n,2),Sn(r,3,12,3,15,n),Sn(r,13,12,13,15,n),Sn(r,4,9,12,9,"#00000022",1)):a==="shovel"?(Ue(r,5,6,6,7,n),Li(r,5,6,6,7,"#00000044"),Sn(r,6,13,6,13,n),Sn(r,9,13,9,13,n),Sn(r,6,13,7,14,n,1),Sn(r,9,13,8,14,n,1)):a==="axe"?(Ue(r,9,7,5,6,n),Li(r,9,7,5,6,"#00000044"),Ue(r,8,8,1,4,n)):(Ue(r,4,7,8,2,n),Ue(r,4,7,2,5,n),Ue(r,10,7,2,5,n),Ue(r,7,11,2,2,"#66e5f0"),Ue(r,6,12,4,1,"#2f97a6")),i}switch(s){case"canister_full":case"canister_empty":{const a=s==="canister_full",l=t*Ye;return Ue(r,6,0,4,3,"#8a98a8"),Ue(r,7,3,2,2,"#8a98a8"),Ue(r,4,5,8,l-7,a?"#2f7fd6":"#3a4750"),Li(r,4,5,8,l-7,"#dfe6ee"),a?(Ue(r,5,10,1,l-13,"#5fa3ea"),Ue(r,4,9,8,1,"#7f2b2b")):(Ue(r,4,14,8,4,"#c8d2da"),Ue(r,6,15,4,2,"#3a4750")),i}case"sword":return Ue(r,8,0,1,1,"#eef3f8"),Ue(r,7,1,3,17,"#c9d2dc"),Ue(r,8,1,1,17,"#eef3f8"),Ue(r,4,18,8,2,"#4a4a52"),Ue(r,7,20,3,9,"#6b5238"),Ue(r,7,22,3,1,"#4a3926"),Ue(r,7,25,3,1,"#4a3926"),Ue(r,6,29,5,2,"#4a4a52"),i;case"ironrod":Ue(r,6,1,3,14,"#8a4f2e"),Ue(r,7,2,1,12,"#d08a52"),r.fillStyle="#5c3319";for(const[a,l]of[[6,3],[8,7],[6,11],[8,13]])r.fillRect(a,l,1,1);return Ue(r,5,1,5,1,"#5c3319"),Ue(r,5,14,5,1,"#5c3319"),i;case"visor":return Ue(r,1,6,14,3,"#2e3a45"),Ue(r,3,4,10,6,"#123c44"),Ue(r,4,5,8,4,"#66e5f0"),Ue(r,5,5,2,1,"#d2f8ff"),Li(r,3,4,10,6,"#c8d2da"),Ue(r,1,5,2,1,"#5a6875"),Ue(r,13,5,2,1,"#5a6875"),i;case"catalyst":return Ue(r,7,3,2,2,"#8898a8"),r.fillStyle="#c07fe0",r.beginPath(),r.arc(8,10,4,0,Math.PI*2),r.fill(),r.strokeStyle="#7a4a9a",r.lineWidth=1,r.beginPath(),r.arc(8,10,4.5,0,Math.PI*2),r.stroke(),r.fillStyle="#e8b8ff",r.fillRect(6,8,2,1),r.fillRect(7,7,1,1),i;case"backpack1":return Ue(r,8,1,3,6,"#5a4229"),Ue(r,21,1,3,6,"#5a4229"),Ue(r,5,7,22,21,"#7a5a3a"),Li(r,5,7,22,21,"#4c3822"),Ue(r,5,7,22,8,"#8a6a48"),Li(r,5,7,22,8,"#4c3822"),Ue(r,13,13,6,3,"#d8b74f"),Ue(r,9,20,14,6,"#6b4d30"),Li(r,9,20,14,6,"#4c3822"),i;case"beacon":return r.fillStyle="#66e5f0",r.globalAlpha=.35,r.beginPath(),r.arc(8,5,6,0,Math.PI*2),r.fill(),r.globalAlpha=1,r.fillStyle="#66e5f0",r.beginPath(),r.arc(8,5,3,0,Math.PI*2),r.fill(),Ue(r,6,5,1,1,"#d2f8ff"),Ue(r,7,8,2,8,"#8a98a8"),En(r,0,Ye,on),i;case"campfire":return Sn(r,3,10,12,4,"#61492f",2),Sn(r,4,4,13,10,"#61492f",2),Sn(r,3,10,12,4,"#7d5f3d",1),En(r,0,Ye,mn),i;case"door":return En(r,0,0,Gt),En(r,0,Ye,Kt),i;case"bed":return En(r,0,0,Ln),En(r,Ye,0,Gn),i;case"dune_melon":r.fillStyle="#5f7f2c",r.beginPath(),r.ellipse(16,11,12,8,0,0,Math.PI*2),r.fill(),r.strokeStyle="#3c541c",r.lineWidth=2,r.beginPath(),r.ellipse(16,11,12,8,0,0,Math.PI*2),r.stroke(),r.strokeStyle="#88a84c",r.lineWidth=1;for(const a of[-7,0,7])r.beginPath(),r.moveTo(16+a,3),r.lineTo(16+a,19),r.stroke();return Ue(r,15,1,2,3,"#6b5238"),i;case"wheat":{r.strokeStyle="#c8a844",r.lineWidth=2;for(const a of[4,8,12])r.beginPath(),r.moveTo(a,15),r.lineTo(a,3),r.stroke();r.fillStyle="#e0c860";for(const a of[4,8,12])for(let l=2;l<9;l+=2)r.fillRect(a-2,l,4,2);return r.strokeStyle="#7a5a30",r.lineWidth=1,r.beginPath(),r.moveTo(2,12),r.lineTo(14,12),r.stroke(),i}case"cooked_wheat":return r.fillStyle="#a8712e",r.beginPath(),r.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),r.fill(),r.strokeStyle="#74501f",r.lineWidth=1,r.beginPath(),r.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),r.stroke(),r.fillStyle="#d8a860",r.fillRect(5,8,6,1),r.fillRect(6,7,4,1),i;case"bench":return En(r,0,0,an),En(r,0,Ye,On),i}return null}const Ur=new Map;function Vr(s){const e=Ur.get(s);if(e)return e;const t=Oe[s];if(!t)return Ur.set(s,[]),Ur.get(s);let i=Xh(s,t.w,t.h,t.color);if(!i&&t.block!==void 0){const[o,a]=zi(t.w*Ye,t.h*Ye);for(let l=0;l<t.h;l++)for(let c=0;c<t.w;c++)En(a,c*Ye,l*Ye,t.block);i=o}const r=[];if(i){const[o,a]=zi(Ye,Ye);for(let l=0;l<t.h;l++)for(let c=0;c<t.w;c++)a.clearRect(0,0,Ye,Ye),a.drawImage(i,c*Ye,l*Ye,Ye,Ye,0,0,Ye,Ye),r.push(o.toDataURL())}else{const[o,a]=zi(Ye,Ye);Ue(a,2,2,Ye-4,Ye-4,t.color),r.push(o.toDataURL())}return Ur.set(s,r),r}function ei(s,e=0){const t=Oe[s];if(!t)return"";if(t.w===1&&t.h===1)return Vr(s)[0]??"";const[n,i]=zi(t.w*Ye,t.h*Ye);i.imageSmoothingEnabled=!1;const r=Xh(s,t.w,t.h,t.color);if(r)i.drawImage(r,0,0);else if(t.block!==void 0)for(let l=0;l<t.h;l++)for(let c=0;c<t.w;c++)En(i,c*Ye,l*Ye,t.block);if(!e)return n.toDataURL();const[o,a]=zi(t.h*Ye,t.w*Ye);return a.imageSmoothingEnabled=!1,a.translate(t.h*Ye,0),a.rotate(Math.PI/2),a.drawImage(n,0,0),o.toDataURL()}function y_(s){const[e,t]=zi(Ye,Ye);return En(t,0,0,s),e.toDataURL()}const bt=s=>document.getElementById(s);let Wc=0;function xe(s){const e=bt("toast");e.textContent=s,e.style.opacity="1",clearTimeout(Wc),Wc=setTimeout(()=>e.style.opacity="0",2600)}function S_(s){const e=bt("prompt");if(!s){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=s}function b_(s){bt("vision-water").style.opacity=s?"1":"0"}function E_(s){const e=bt("blockname");if(!s){e.classList.add("hidden");return}e.textContent=s,e.classList.remove("hidden")}function w_(){const s=bt("vision-hit");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash")}let Xc="";function T_(s){const e=s.selectedSlot()?.itemId??"",t=s.slots.map(r=>r.itemId+":"+r.count).join(",")+"|"+e;if(t===Xc)return;Xc=t;const n=[];for(const r of s.slots){const o=n.find(a=>a.itemId===r.itemId);o?o.count+=r.count:n.push({itemId:r.itemId,count:r.count})}const i=bt("hotbar");i.innerHTML="",n.slice(0,9).forEach((r,o)=>{const a=document.createElement("div");a.className="hb-slot"+(r.itemId===e?" sel":""),a.dataset.hb=String(o);const l=document.createElement("img");l.src=ei(r.itemId),l.alt=Oe[r.itemId].name,a.appendChild(l);const c=document.createElement("span");if(c.className="hb-key",c.textContent=String(o+1),a.appendChild(c),r.count>1){const d=document.createElement("span");d.className="hb-count",d.textContent=String(r.count),a.appendChild(d)}i.appendChild(a)})}function A_(){const s=document.querySelector("#bar-water .safe");s.style.left="25%",s.style.right="0%";const e=document.querySelector("#bar-heat .safe");e.style.left=((vl-ki)/(ks-ki)*100).toFixed(1)+"%",e.style.right=((ks-xl)/(ks-ki)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const t=(i,r,o)=>{const a=document.createElement("span");a.className="dmg",a.style.left=r.toFixed(1)+"%",a.title=o,document.getElementById(i).appendChild(a)};t("bar-water",Va,"below this, dehydration drains Health");const n=i=>(i-ki)/(ks-ki)*100;t("bar-heat",n(Ga),"below this, hypothermia drains Health"),t("bar-heat",n(Ha),"above this, heat stroke drains Health")}function qc(s,e=0,t=0,n=0,i=0,r=0){const o=document.getElementById("waypoint");if(!s){o.classList.add("hidden");return}const a=e-n,l=t-i,c=Math.atan2(a,-l)+r;bt("wp-arrow").style.transform=`rotate(${c*180/Math.PI}deg)`,bt("wp-name").textContent=s,bt("wp-dist").textContent=`${Math.round(Math.hypot(a,l))} m`,o.classList.remove("hidden")}function Yc(s,e,t,n,i,r,o){const a=E=>document.querySelector(`#${E} .fill`);a("bar-health").style.width=s.health+"%",a("bar-water").style.width=s.water+"%";const l=(s.body-ki)/(ks-ki)*100;a("bar-heat").style.width=l+"%";const c=t%Lt/Lt,d=String(Math.floor(c*24)).padStart(2,"0"),u=String(Math.floor(c*24%1*60)).padStart(2,"0");bt("clock-day").textContent="Day "+n,bt("clock-time").textContent=d+":"+u;const f=E=>i==="C"?Math.round(E)+"°C":Math.round(E*9/5+32)+"°F";bt("clock-temp").textContent=`air ${f(s.lastAmbientEff)}  body ${f(s.body)}`;const h=e.selectedSlot();bt("held").textContent=h?Oe[h.itemId].name:"—",T_(e),bt("warn-hot").classList.toggle("hidden",s.body<=xl),bt("warn-cold").classList.toggle("hidden",s.body>=vl),bt("chip-reg").classList.toggle("hidden",!o?.regulated),bt("chip-nap").classList.toggle("hidden",!o?.napReady);const p=e.weight(),x=e.weightLimit(),_=bt("weight");_.textContent=`${p.toFixed(1)} / ${x} kg`,_.classList.toggle("encumbered",p>x),bt("vision-vignette").style.opacity=String(s.vision*.85);const m=s.water<5||s.health<30;bt("vision-red").style.opacity=m?String(.35+.25*Math.sin(r/220)):"0"}const Nr=s=>s===Kt||s===Gt||s===zt||s===Ht;class ut{constructor(e,t,n,i,r){this.meta=e,this.settings=i,this.audio=r,this.seed=Ig(e.seedStr||e.id),this.world=new Gg(this.seed),this.survival=new Kg(this.seed^7),this.quests=f_(t?.quest),this.renderer=new Qg(n),this.player=new qg(this.world),this.timeSec=t?.time??Lt*.7,this.playSec=t?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),t?this.restore(t):this.spawnStarterEntities(),this.world.get(-6,35,0)===Tn&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===Tn&&this.renderer.addPointLight(6,35,0,"lamp"),A_(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(i)}seed;world;survival;player;inv=new qo;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null};collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((e,t)=>{if(!e.buried)return;const n=Math.round(kt(this.seed,e.x,e.z));this.entities.push({id:this.entitySeq++,x:e.x+.5,y:n,z:e.z+.5,itemId:"canister_full",count:1,buried:e.buried,buriedAt:e.buried?[e.x,n,e.z]:void 0,srcIndex:t})}),this.spawnStarterChest()}spawnStarterChest(){const[e,t,n]=[3,31,0];this.world.get(e,t,n)===qe&&(this.world.set(e,t,n,Ft),this.chests.set(ut.chestKey([[e,t,n]]),[{itemId:"canister_full",count:1,x:0,y:0},{itemId:"canister_full",count:1,x:1,y:0},{itemId:"canister_full",count:1,x:2,y:0}]))}chestCluster(e,t,n){const i=new Set([`${e},${t},${n}`]),r=[[e,t,n]],o=[];for(;r.length;){const a=r.pop();this.world.get(a[0],a[1],a[2])===Ft&&o.push(a);for(const[l,c,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=a[0]+l,f=a[1]+c,h=a[2]+d,p=`${u},${f},${h}`,x=this.world.get(u,f,h);i.has(p)||x!==Ft&&x!==tr||(i.add(p),r.push([u,f,h]))}}return o}static chestKey(e){return[...e].sort((t,n)=>t[0]-n[0]||t[1]-n[1]||t[2]-n[2]).map(t=>t.join(",")).join(";")}static chestDims(e){return e<=3?[3*e,3]:[9,3+(e-3)]}static placeSlotFree(e,t){const n=Oe[t.itemId],i=n.w===n.h?[!!t.rot]:[!!t.rot,!t.rot];for(const r of i){const o=r?n.h:n.w,a=r?n.w:n.h;for(let l=0;l+a<=e.h;l++)for(let c=0;c+o<=e.w;c++)if(e.fits(c,l,o,a))return t.x=c,t.y=l,t.rot=r||void 0,e.slots.push(t),!0}return!1}emptyChestGrid(e){const t=new qo;t.slots=[];const[n,i]=ut.chestDims(e);return t.w=n,t.h=i,t.baseLimit=1e9,t}inTown(e,t){const n=this.world.gen,i=Math.floor(e/Et),r=Math.floor(t/Et);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){if(!n.townAt(i+o,r+a))continue;const l=n.townCenter(i+o,r+a);if(Math.abs(l.x-e)<=10&&Math.abs(l.z-t)<=10)return!0}return!1}townLoot(e,t){const n=r=>_t(e,t,this.seed+r),i=[{itemId:"canister_empty",count:2}];return n(11)<.7&&i.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&i.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&i.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&i.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&i.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&i.push({itemId:"door_inner",count:1}),n(22)<.25&&i.push({itemId:"bed",count:1}),i}openChest(e,t,n){const i=this.chestCluster(e,t,n),r=ut.chestKey(i),o=this.chests.has(r);this.chests.has(r)||this.chests.set(r,[]);const a=this.emptyChestGrid(i.length);if(a.slots=this.chests.get(r),!o&&i.some(([l,,c])=>this.inTown(l,c))){for(const l of this.townLoot(i[0][0],i[0][2])){const c={itemId:l.itemId,count:l.count,x:0,y:0};ut.placeSlotFree(a,c)||this.dropEntity(l.itemId,l.count,2)}xe("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=a,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(e,t,n,i){const r=this.chestCluster(e,t,n),o=this.emptyChestGrid(r.length);for(const a of i)ut.placeSlotFree(o,a)||this.dropEntity(a.itemId,a.count,2);o.slots.length&&this.chests.set(ut.chestKey(r),o.slots),r.length>1&&xe(`Chests linked — one ${o.w}×${o.h} inventory.`)}adoptLegacyChest(e){if(this.world.get(e.x,e.y,e.z)!==Ft){if(qt(this.world.get(e.x,e.y,e.z))){for(const r of e.items)this.dropEntity(r.itemId,r.count,2);return}this.world.set(e.x,e.y,e.z,Ft)}const t=this.chestCluster(e.x,e.y,e.z),n=ut.chestKey(t);this.chests.has(n)||this.chests.set(n,[]);const i=this.emptyChestGrid(t.length);i.slots=this.chests.get(n);for(const r of e.items)for(let o=0;o<r.count;o++){const a={itemId:r.itemId,count:1,x:0,y:0};ut.placeSlotFree(i,a)||this.dropEntity(r.itemId,1,2)}}cacheColor(e){return e.kind==="reward"?11569726:7035460}cacheMeshPos(e){return[e.x,e.y+.5,e.z]}restore(e){this.world.loadDeltas(e.deltas),this.player.pos.set(e.player.x,e.player.y,e.player.z),this.player.yaw=e.player.yaw,this.player.pitch=e.player.pitch,this.survival.health=e.survival.health,this.survival.water=e.survival.water,this.survival.body=e.survival.body,this.inv.slots=e.inventory.slots.map(a=>({...a}));const t=this.inv.slots.filter(a=>a.count>1);if(t.length){this.inv.slots=this.inv.slots.filter(a=>a.count===1);for(const a of t)this.giveOrDrop(a.itemId,a.count)}this.inv.selected=e.inventory.selected,e.inventory.w!==this.inv.w||e.inventory.h!==this.inv.h?(this.inv.w=e.inventory.w,this.inv.h=e.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=e.inventory.bonusLimit):this.inv.bonusLimit=e.inventory.bonusLimit;for(const a of["backpack","head","body"]){const l=e.equip?.[a];l&&(this.equip[a]={itemId:l,count:1,x:0,y:0})}this.beaconMarks=e.beaconMarks??[],this.collected=new Set(e.collected??[]);const n=this.collected;let i=0;const r=[];this.world.gen.canisters.forEach(a=>{if(a.buried&&!n.has(i)){const l=Math.round(kt(this.seed,a.x,a.z));r.push({id:this.entitySeq++,x:a.x+.5,y:l,z:a.z+.5,itemId:"canister_full",count:1,buried:a.buried,buriedAt:a.buried?[a.x,l,a.z]:void 0,srcIndex:i})}i++});for(const a of e.entities)r.push({id:this.entitySeq++,...a});this.entities=r;const o=[];for(const a of e.caches){const l=a.kind??"death";if(l==="chest"){o.push(a);continue}const c={id:this.entitySeq++,x:a.x,y:a.y,z:a.z,kind:l,items:a.items.map(d=>({...d}))};this.caches.push(c),c.items.length&&this.renderer.addEntityMesh(c.id,this.cacheMeshPos(c),this.cacheColor(c),.7)}this.campCharges=new Map(Object.entries(e.campfires??{}).map(([a,l])=>[a,l])),this.crops=new Map(e.crops??[]),e.lastSleep&&(this.lastSleep=e.lastSleep),this.chests=new Map((e.chests??[]).map(a=>[a.cells,a.slots.map(l=>({...l}))]));for(const a of o)this.adoptLegacyChest(a);this.pods=(e.pods??[]).map(a=>({...a,ringEid:this.renderer.addGroundRing(a.x+.5,Math.round(kt(this.seed,a.x,a.z)),a.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(a.x+.5,Math.round(kt(this.seed,a.x,a.z)),a.z+.5,13382434)})),this.won=!!e.won;for(const[a,l]of this.world.deltas){const[c,d]=a.split(",").map(Number);for(const[u,f]of l){if(f!==Tn&&f!==mn)continue;const h=Math.floor(u/(pe*wt)),p=u%(pe*wt);this.renderer.addPointLight(c*pe+h,p%wt,d*pe+Math.floor(p/wt),f===Tn?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(e=>({...e})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(e=>!e.buried).map(e=>({x:e.x,y:e.y,z:e.z,itemId:e.itemId,count:e.count})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(e=>({x:e.x,y:e.y,z:e.z,kind:e.kind,items:e.items.map(t=>({...t}))})),chests:[...this.chests].map(([e,t])=>({cells:e,slots:t.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(e){const t=Math.floor(this.timeSec/Lt);this.timeSec=(t+e)*Lt}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new g_(this),this.startCine(m_,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),xe("Tour complete. Now survive."),this.saveNow()}startCine(e,t){this.cineSegs=e,this.cine={t:0},this.cineOnEnd=t}cineFrame(e){const t=this.cine;t.t+=e;const n=this.cineSegs,i=n.find(l=>t.t<l.t1)??n[n.length-1];if(i.openDoor&&t.t>=i.openDoor.t){const{x:l,y:c,z:d}=i.openDoor;if(this.world.get(l,c,d)!==Pt){this.world.set(l,c,d,Pt);for(const u of[-1,1])Nr(this.world.get(l,c+u,d))&&this.world.set(l,c+u,d,Pt);this.audio.door()}}const r=Math.min(1,Math.max(0,(t.t-i.t0)/(i.t1-i.t0))),o=r*r*(3-2*r),a=this.renderer.camera;if(a.position.set(i.from[0]+(i.to[0]-i.from[0])*o,i.from[1]+(i.to[1]-i.from[1])*o,i.from[2]+(i.to[2]-i.from[2])*o),a.lookAt(i.look[0],i.look[1],i.look[2]),t.t>=n[n.length-1].t1){this.cine=null;const l=n[n.length-1];this.player.yaw=Math.atan2(-(l.look[0]-l.to[0]),-(l.look[2]-l.to[2])),this.player.pitch=0;const c=this.renderer.camera;c.position.copy(this.player.eye()),c.rotation.order="YXZ",c.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(e=!1){if(this.isGuest)return e&&xe("Guest worlds are never saved."),!1;const t=Gh(this.meta,this.snapshot());return e&&xe(t?"Game saved.":"Storage full — use Export World."),t}exportWorld(){Wh(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const e=t=>{if(!this.running)return;this.raf=requestAnimationFrame(e);const n=Math.min(.1,(t-this.last)/1e3);this.last=t,this.frame(n,t)};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[e,t]of this.bound)removeEventListener(e,t);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(e){this.settings=e,this.renderer.renderDistance=e.renderDist,this.renderer.camera.fov=e.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(e.quality),this.audio.setVolume(e.volume),this.audio.setMusic(e.music),this.renderer.resetChunkMeshes();const t=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,t,n)}dayNumber(){return 1+Math.floor(this.timeSec/Lt)}questBump(e,t=1){if(this.tut)return;const n=p_(this.quests,e,t);if(!n){e==="mine"&&this.renderQuest();return}xe(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&this.win(),this.renderQuest(),this.saveNow(!0)}crashPod(e,t){const n=this.player.pos,i=Math.round(n.x)+2,r=Math.round(n.z)+1,o=Math.round(kt(this.seed,i,r)),a=this.renderer.addGroundRing(i+.5,o,r+.5,13382434,1.1),l=this.renderer.addBeam(i+.5,o,r+.5,13382434);this.pods.push({x:i,z:r,t:3,itemId:e,n:t,ringEid:a,beamEid:l}),this.audio.warn(),setTimeout(()=>{this.running&&xe("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(e){for(let t=this.pods.length-1;t>=0;t--){const n=this.pods[t];if(n.t-=e,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const i=Math.round(kt(this.seed,n.x,n.z));this.caches.push({id:this.entitySeq++,x:n.x,y:i,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,i+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(t,1),this.audio.thud(),xe("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(e){if(this.guideAcc+=e,this.guideAcc<.4)return;this.guideAcc=0;const t=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){qc(n.name,n.x,n.z,t.x,t.z,this.player.yaw);const r=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;r!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=r,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else qc(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const i=new Map;if(this.equip.head?.itemId==="visor"){for(const r of this.caches)r.items.length&&i.set(`c${r.id}`,[r.x+.5,r.y,r.z+.5,r.kind==="reward"?14197322:13386803]);for(const r of this.chests.keys()){const[o,a,l]=r.split(";")[0].split(",").map(Number);i.set(`x${r}`,[o+.5,a,l+.5,15124842])}}for(const[r,o]of this.visorBeams)i.has(r)||(this.renderer.removeEntityMesh(o),this.visorBeams.delete(r));for(const[r,[o,a,l,c]]of i)this.visorBeams.has(r)||this.visorBeams.set(r,this.renderer.addBeam(o,a,l,c,10))}waypointTarget(){const e=Os(this.quests);if(!e)return null;const t=this.player.pos,n=(r,o)=>Math.round(kt(this.seed,r,o))+1,i=r=>{let o=r[0],a=1/0;for(const l of r){const c=(l.x-t.x)**2+(l.z-t.z)**2;c<a&&(a=c,o=l)}return o};switch(e.kind){case"oasis":{const r=i(this.world.gen.oases);return r?{name:"Oasis",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}:null}case"water_home":case"finish":{const r=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(o=>this.world.get(o.x,o.y,o.z)===on);return r?{name:"Save Beacon",x:r.x+.5,y:r.y,z:r.z+.5}:null}case"wreck":{const r=this.world.gen.secondShip;return{name:"Second Wreck",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"core":{const r=this.world.gen.secondShip;return{name:"Engine Core",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"tool":{const r=[];this.world.get(0,31,-3)===an&&r.push({x:0,y:31,z:-3});for(const[a,l]of this.world.deltas){const[c,d]=a.split(",").map(Number);for(const[u,f]of l){if(f!==an)continue;const h=u%wt,p=Math.floor(u/wt)%pe,x=Math.floor(u/(wt*pe));r.push({x:c*pe+x,y:h,z:d*pe+p})}}if(!r.length)return null;const o=i(r);return{name:"Crafting Bench",x:o.x+.5,y:o.y,z:o.z+.5}}case"supplies":{const r=this.world.gen.nearestTown(t.x,t.z);return r?{name:"Town",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}:null}case"farm":{if(!this.crops.size)return null;let r=null,o=1/0;for(const d of this.crops.keys()){const[u,,f]=d.split(",").map(Number),h=(u+.5-t.x)**2+(f+.5-t.z)**2;h<o&&(o=h,r=d)}const[a,l,c]=r.split(",").map(Number);return{name:"Your Farm",x:a+.5,y:l+1,z:c+.5}}default:return null}}questFrame(){const e=Os(this.quests);if(!e)return;const t=this.player.pos;if(e.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(e.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(t.x),Math.floor(t.z)))this.questBump("oasis");else if(e.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===on&&(n.x+.5-t.x)**2+(n.y+1-t.y)**2+(n.z+.5-t.z)**2<25))this.questBump("water_home");else if(e.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-t.x)**2+(n.z+.5-t.z)**2<169&&this.questBump("wreck")}}renderQuest(){const e=document.getElementById("quest");if(!e)return;const t=Os(this.quests);if(!t){this.questShown!=="done"&&(this.questShown="done",e.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],i=t.id+":"+n;i!==this.questShown&&(this.questShown=i,e.innerHTML=`<div class="q-title">Quest · ${t.title}${t.goal>1?` (${n}/${t.goal})`:""}</div><div class="q-desc">${t.desc}</div>`+(t.goal>1?`<div class="q-bar"><i style="width:${n/t.goal*100}%"></i></div>`:""))}attach(){const e=(n,i,r=window)=>{r.addEventListener(n,i),this.bound.set(n+(r===window?"":":el"),i)};e("keydown",n=>{const i=n;if(!i.repeat){if(this.keys.add(i.code),i.code==="KeyE"&&this.act(),i.code==="KeyQ"&&this.useItem(),i.code==="KeyX"&&this.surge(),i.code==="KeyI"&&this.toggleInv(),i.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot();o&&!r.rotate(o)&&(xe("No room to rotate."),this.audio.error())}this.renderInv()}if(i.code==="Escape"){if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(i.code==="KeyP"&&this.escape(!0),i.code.startsWith("Digit")){const r=Number(i.code.slice(5)),o=this.hotbarItems();if(r>=1&&r<=o.length){const a=o[r-1];this.inv.selectedSlot()?.itemId===a?this.inv.selected=-1:this.selectItem(a),this.renderHeld()}}}}),e("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const i=n.target.closest("[data-hb]");if(!i)return;const r=this.hotbarItems()[Number(i.dataset.hb)];r&&(this.inv.selectedSlot()?.itemId===r?this.inv.selected=-1:this.selectItem(r),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const t=this.renderer.canvasEl();if(!this.mobile)e("click",()=>{!this.paused&&!this.ui&&this.requestLock()},t),e("mousedown",n=>{const i=n;i.button===0?(this.mouseDown=!0,this.breakMsg=!1):i.button===2&&!this.cine&&this.place()}),e("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),e("mousemove",n=>{if(document.pointerLockElement!==t||this.ui)return;const i=n;this.player.yaw-=i.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*i.movementY*.0022*this.settings.sens,this.player.pitch=_i.clamp(this.player.pitch,-1.55,1.55)}),e("wheel",n=>this.cycleItem(n.deltaY>0?1:-1)),e("contextmenu",n=>n.preventDefault());else{let n=-1,i=0,r=0;t.addEventListener("touchstart",h=>{if(n<0){const p=h.changedTouches[0];n=p.identifier,i=p.clientX,r=p.clientY}h.preventDefault()}),t.addEventListener("touchmove",h=>{for(const p of h.changedTouches)p.identifier===n&&(this.player.yaw-=(p.clientX-i)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(p.clientY-r)*.005*this.settings.sens,this.player.pitch=_i.clamp(this.player.pitch,-1.55,1.55),i=p.clientX,r=p.clientY);h.preventDefault()});const o=h=>{for(const p of h.changedTouches)p.identifier===n&&(n=-1)};t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),document.addEventListener("contextmenu",h=>h.preventDefault());const a=document.getElementById("stick"),l=document.getElementById("knob");let c=-1;const d=h=>{const p=a.getBoundingClientRect();for(const x of h.changedTouches)if(x.identifier===c){const _=x.clientX-(p.left+p.width/2),m=x.clientY-(p.top+p.height/2),E=Math.max(1,Math.hypot(_,m)),g=Math.min(E,p.width/2)/(p.width/2);this.stick.x=_/E*g,this.stick.y=m/E*g,l.style.left=38+_/E*g*38+"px",l.style.top=38+m/E*g*38+"px"}};a.addEventListener("touchstart",h=>{c=h.changedTouches[0].identifier,d(h),h.preventDefault()}),a.addEventListener("touchmove",h=>{d(h),h.preventDefault()});const u=()=>{this.stick.x=0,this.stick.y=0,c=-1,l.style.left="38px",l.style.top="38px"};a.addEventListener("touchend",u),a.addEventListener("touchcancel",u);const f=(h,p,x)=>{const _=document.getElementById(h);_.addEventListener("touchstart",m=>{m.preventDefault(),p()}),_.addEventListener("touchend",m=>{m.preventDefault(),x&&x()}),_.addEventListener("touchcancel",()=>{x&&x()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-next",()=>this.cycleItem(1)),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}e("beforeunload",()=>this.saveNow()),e("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),e("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=i=>!document.getElementById(i).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document)}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const e=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(e).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(e=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const t=n=>document.getElementById(n).classList.contains("hidden");if(!(!t("screen-settings")||!t("screen-death")||!t("screen-win")||!t("screen-instructions"))){if(!e&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():e&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const e=this.renderer.canvasEl().requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(e,t){if(this.paused){this.renderer.render();return}this.timeSec+=e,this.playSec+=e;const n=Math.floor(this.player.pos.x/16),i=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,i),this.renderer.rebuildDirty(this.world);const r=this.renderer.updateSky(this.timeSec,this.player.pos),o=Gr(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),a=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let u=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(u-=1),this.keys.has("KeyD")&&(u+=1);const h=this.keys.has("Space")||this.mobileJump;this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),this.player.update(e,u,f,h,this.speedMul,a),this.survival.update(e,this.world,this.player.pos,{sprinting:this.player.sprinting&&(u!==0||f!==0),overencumbered:a,biome:o,tSec:this.timeSec,sunElev:r.sunElev,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos)}),this.updateBreaking(e),this.updatePickups()}if(this.audio.heartbeat(e,this.survival.health),this.cine)this.cineFrame(e);else{const u=this.renderer.camera;u.position.copy(this.player.eye()),u.rotation.order="YXZ",u.rotation.set(this.player.pitch,this.player.yaw,0)}const l=this.raycastTarget();this.renderer.setHighlight(this.ui||this.cine?null:l?.hit??null),S_(this.ui||this.cine?null:this.promptFor(l)),E_(this.ui||this.cine||!l?.hit?null:si[this.world.get(l.hit.x,l.hit.y,l.hit.z)].name),b_(this.player.headUnder);for(const u of this.entities){if(u.fall!==void 0){const h=Math.min(u.fall,14*e);u.y-=h,u.fall-=h,u.fall<=.001&&(u.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(u.id,[u.x,u.y,u.z])}const f=this.renderer.entityMesh(u.id);u.buried&&u.buriedAt&&this.world.get(u.buriedAt[0],u.buriedAt[1],u.buriedAt[2])!==qe?f&&this.renderer.removeEntityMesh(u.id):f||this.renderer.addEntityMesh(u.id,[u.x,u.y,u.z],parseInt(Oe[u.itemId].color.slice(1),16))}for(const u of this.caches){const f=this.renderer.entityMesh(u.id);!f&&u.items.length?(this.renderer.addEntityMesh(u.id,this.cacheMeshPos(u),this.cacheColor(u),.7),u.markerEid=this.renderer.addGroundRing(u.x+.5,u.y,u.z+.5,u.kind==="reward"?14197322:13382434,1.4)):f&&!u.items.length&&(this.renderer.removeEntityMesh(u.id),u.markerEid!==void 0&&(this.renderer.removeEntityMesh(u.markerEid),u.markerEid=void 0))}this.regulatorGlow(),this.updateCrops(e);const c=this.survival.surgeCooldown>0;for(const u of["surge-btn","m-surge"]){const f=document.getElementById(u);f&&f.disabled!==c&&(f.disabled=c)}Yc(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,t,{regulated:this.roomRegulated(),napReady:this.timeSec-this.lastSleep>=Lt}),this.podFrame(e),this.questFrame(),this.guideFrame(e),this.tut?.tick(e),this.mobFrame(e),this.world.processWater(),this.audio.setDay(r.sunElev>0),this.autosaveAcc+=e,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const d=this.prevHp-this.survival.health;if(d>0){const u=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(d>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,w_(),(d>=2||u)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const e=this.player.eye(),t=new D;this.renderer.camera.getWorldDirection(t);let n=Math.floor(e.x),i=Math.floor(e.y),r=Math.floor(e.z);const o=new D(Math.sign(t.x),Math.sign(t.y),Math.sign(t.z)),a=new D(t.x!==0?Math.abs(1/t.x):1/0,t.y!==0?Math.abs(1/t.y):1/0,t.z!==0?Math.abs(1/t.z):1/0),l=(f,h)=>h>0?Math.ceil(f)-f||1:h<0?f-Math.floor(f)||1:1/0,c=new D(l(e.x,o.x)*a.x,l(e.y,o.y)*a.y,l(e.z,o.z)*a.z);let d=new D(n,i,r),u=null;for(let f=0;f<80;f++){const h=this.world.get(n,i,r);if(pi(h)){if(u||(u={x:n,y:i,z:r}),h===vn)return{hit:{x:n,y:i,z:r},water:u,face:new D(d.x-n,d.y-i,d.z-r)}}else if(h!==qe&&h!==vn)return{hit:{x:n,y:i,z:r},water:u,face:new D(d.x-n,d.y-i,d.z-r)};if(d.set(n,i,r),c.x<c.y&&c.x<c.z?(n+=o.x,c.x+=a.x):c.y<c.z?(i+=o.y,c.y+=a.y):(r+=o.z,c.z+=a.z),new D(n-e.x,i-e.y,r-e.z).length()>5.5)break}return{hit:null,water:u,face:new D(0,0,0)}}promptFor(e){if(!e)return null;if(e.hit&&this.world.get(e.hit.x,e.hit.y,e.hit.z)===Ft)return"E: Open Supply Chest";const t=this.nearestCache();if(t)return t.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(e.hit){const n=this.world.get(e.hit.x,e.hit.y,e.hit.z);if(n===Kt||n===Gt)return"E: Open door";if(n===Pt)return"E: Close door";if(n===on)return"E: Save game (respawn point)";if(n===an||n===On)return"E: Craft";if(n===mn)return"E: Smelt";if(n===ri)return"E: Draw neutral air (37 °C)"}return e.water?"E: Refill canister":null}nearestCache(){for(const e of this.caches)if(e.items.length&&this.player.pos.distanceTo(new D(e.x+.5,e.y+.5,e.z+.5))<2.4)return e;return null}canBreakWith(e){const t=si[e];if(t.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const n=this.inv.selectedSlot(),i=n?Oe[n.itemId].tool:void 0;return t.tool!==null?!i||i.type!==t.tool?{ok:!1,time:0,why:`need a ${t.tool}`}:i.tier<t.minTier?{ok:!1,time:0,why:`need a tier ${t.minTier} ${t.tool}`}:{ok:!0,time:t.breakTime*Math.pow(.55,i.tier-1)}:{ok:!0,time:t.breakTime*(t.fastTool&&i&&i.type===t.fastTool?Math.pow(.55,i.tier):1)}}showBreakBar(e){const t=document.getElementById("breakbar");if(e===null){t.classList.add("hidden");return}t.classList.remove("hidden"),document.getElementById("breakfill").style.width=e*100+"%"}updateBreaking(e){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const t=this.meleeMob();if(t){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const l=this.inv.selectedSlot(),c=l?Oe[l.itemId]:null,d=c?.weapon;t.hp-=d?d.dmg:3+(c?.tool?.tier??0),this.audio.thud();const u=t.x-this.player.pos.x,f=t.z-this.player.pos.z,h=Math.max(.2,Math.hypot(u,f)),p=d?1.1:.6;this.mobCanStand(t,t.x+u/h*p,t.z+f/h*p)&&(t.x+=u/h*p,t.z+=f/h*p,t.y=this.mobSurface(t.x,t.z)),t.hp<=0&&this.killMob(t)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:i,y:r,z:o}=n.hit,a=this.world.get(i,r,o);if(!this.breaking||this.breaking.x!==i||this.breaking.y!==r||this.breaking.z!==o){const l=this.canBreakWith(a);if(!l.ok){l.why&&!this.breakMsg&&(this.breakMsg=!0,xe(l.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${l.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:i,y:r,z:o,need:l.time,elapsed:0}}this.breaking.elapsed+=e,this.audioTickAcc+=e,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(i,r,o),this.breaking=null,this.showBreakBar(null))}breakBlock(e,t,n){this.tut?.notify("mine");const i=this.world.get(e,t,n);if(this.questBump("mine"),Nr(i)||i===Pt||i===$t){const o=i===zt||i===Ht||i===$t;this.world.set(e,t,n,qe);for(const a of[-1,1]){const l=this.world.get(e,t+a,n);(Nr(l)||l===Pt||l===$t)&&this.world.set(e,t+a,n,qe)}this.giveOrDrop(o?"door_inner":"door",1),this.audio.blockBreak();return}if(i===on){this.world.set(e,t,n,qe),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===e&&o.y===t&&o.z===n)),xe("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(i===Hn){this.world.set(e,t,n,qe),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(i===Wi){this.world.set(e,t,n,qe),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(i===Ln||i===Gn){this.world.set(e,t,n,qe);const o=e+(i===Ln?1:-1),a=this.world.get(o,t,n);(a===Ln||a===Gn)&&this.world.set(o,t,n,qe),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(i===mn&&this.campCharges.delete(`${e},${t},${n}`),i===Ft){const o=this.chestCluster(e,t,n),a=this.chests.get(ut.chestKey(o))??[];this.chests.delete(ut.chestKey(o)),this.world.set(e,t,n,qe);const l=o.filter(([u,f,h])=>u!==e||f!==t||h!==n),c=[];for(const u of l){const f=this.chestCluster(u[0],u[1],u[2]),h=ut.chestKey(f);c.some(([p])=>p===h)||c.push([h,this.emptyChestGrid(f.length)])}let d=!1;for(const u of a)c.some(([,f])=>ut.placeSlotFree(f,u))||(this.dropEntity(u.itemId,u.count,2),d=!0);for(const[u,f]of c)f.slots.length&&this.chests.set(u,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),d&&xe("The remaining chests were full — some contents fell to the sand.");return}if(i===Vi){this.world.set(e,t,n,qe),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(i===an||i===On){const o=this.benchPeer(e,t,n);this.world.set(e,t,n,qe),o&&this.world.set(o[0],o[1],o[2],qe),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(i===Tn||i===mn)&&this.renderer.removePointLight(e,t,n),this.world.set(e,t,n,qe);const r=this.blockItemId(i);r&&this.giveOrDrop(r,1),this.audio.blockBreak()}mobSurface(e,t){const n=Math.floor(e),i=Math.floor(t),r=Math.max(30,Math.round(kt(this.seed,n,i))+8);for(let o=r;o>=0;o--){const a=this.world.get(n,o,i);if(a!==qe&&si[a].solid)return o+1}return-1}mobCanStand(e,t,n){const i=this.mobSurface(t,n);return i<0||i>e.y+1.01?!1:this.world.get(Math.floor(t),i,Math.floor(n))===qe}spawnMob(e,t,n,i){const r=h_(e);r.group.position.set(t,n,i),r.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(r.group),this.mobs.push({kind:e,hp:Ps[e].hp,x:t,y:n,z:i,yaw:r.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:r})}killMob(e){this.renderer.removeSceneObject(e.vis.group),this.mobs=this.mobs.filter(t=>t!==e);for(const t of Ps[e.kind].drops)this.giveOrDrop(t.itemId,t.count);xe(`${Ps[e.kind].name} killed.`)}topUpMobs(){const e={snake:4,rat:8},t={snake:0,rat:0};for(const i of this.mobs)t[i.kind]++;const n=this.player.pos;for(const i of["snake","rat"])for(;t[i]<e[i];){t[i]++;const r=Math.random()*Math.PI*2,o=30+Math.random()*30,a=Math.floor(n.x+Math.cos(r)*o)+.5,l=Math.floor(n.z+Math.sin(r)*o)+.5;if(Math.hypot(a,l)<24||this.beaconMarks.some(d=>Math.hypot(d.x+.5-a,d.z+.5-l)<16))continue;const c=this.mobSurface(a,l);c<=1||this.world.get(Math.floor(a),c,Math.floor(l))!==qe||this.world.get(Math.floor(a),c+1,Math.floor(l))!==qe||this.spawnMob(i,a,c,l)}}meleeMob(){const e=this.player.eye(),t=new D;this.renderer.camera.getWorldDirection(t);const n=this.inv.selectedSlot(),i=n?Oe[n.itemId].weapon?.reach??3.2:3.2,r=this.raycastTarget(),o=r?.hit?Math.hypot(r.hit.x+.5-e.x,r.hit.y+.5-e.y,r.hit.z+.5-e.z):1/0;let a=null,l=1/0;for(const c of this.mobs){const d=Ps[c.kind],u=c.x-e.x,f=c.y+d.height/2-e.y,h=c.z-e.z,p=u*t.x+f*t.y+h*t.z;if(p<.2||p>i||p>o)continue;const x=e.x+t.x*p-c.x,_=e.y+t.y*p-(c.y+d.height/2),m=e.z+t.z*p-c.z;x*x+_*_+m*m>(d.hitR+.3)*(d.hitR+.3)||p<l&&(l=p,a=c)}return a}columnClear(e,t,n,i){const r=Math.floor(e),o=Math.floor(t);for(let a=Math.floor(n);a<=Math.floor(i);a++){const l=this.world.get(r,a,o);if(l!==qe&&l!==vn)return!1}return!0}mobFrame(e){this.attackCd-=e,this.mobSpawnAcc+=e,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const t=this.player.pos,n=this.timeSec;for(const i of this.mobs.slice()){const r=Ps[i.kind],o=t.x-i.x,a=t.z-i.z,l=Math.hypot(o,a);if(l>110){this.renderer.removeSceneObject(i.vis.group),this.mobs=this.mobs.filter(h=>h!==i);continue}let c=0,d=0;const u=this.columnClear(i.x,i.z,i.y+.2,t.y+1.4);if(r.aggroR>0&&l<r.aggroR&&l>.01&&u){if(c=o/l*r.speed,d=a/l*r.speed,i.yaw=Math.atan2(c,d),l<1.2+r.hitR&&i.biteCd<=0){i.biteCd=r.biteCd;const h=this.equip.body?.6:1;this.survival.hurt(r.biteDmg*h,`${r.name.toLowerCase()} bite`),xe(h<1?`A ${r.name.toLowerCase()} bites you — the Reptile Armour soaks some of it.`:`A ${r.name.toLowerCase()} bites you!`)}}else r.fleeR>0&&l<r.fleeR&&l>.01?(c=-o/l*r.speed,d=-a/l*r.speed,i.yaw=Math.atan2(c,d)):(i.wanderT-=e,i.wanderT<=0&&(i.wanderT=2+Math.random()*4,i.wanderYaw=Math.random()*Math.PI*2,i.wanderOn=Math.random()<.55),i.wanderOn&&(c=Math.sin(i.wanderYaw)*r.speed*.35,d=Math.cos(i.wanderYaw)*r.speed*.35,i.yaw=i.wanderYaw));i.biteCd-=e;let f=0;if(c!==0||d!==0){const h=i.x+c*e,p=i.z+d*e;this.mobCanStand(i,h,p)?(i.x=h,i.z=p,f=1):i.wanderYaw=i.yaw=Math.random()*Math.PI*2}i.y=this.mobSurface(i.x,i.z),i.vis.group.position.set(i.x,i.y,i.z),i.vis.group.rotation.y=i.yaw,i.vis.animate(n,f)}}gridFits(e,t){const n=new qo;n.slots=[],n.w=e,n.h=t;for(const i of this.inv.slots)if(!ut.placeSlotFree(n,{...i,x:0,y:0}))return!1;return!0}applyEquip(){const e=this.equip.backpack?4:3,t=this.equip.backpack?5:4;(this.inv.w!==e||this.inv.h!==t)&&this.inv.setBackpack(e,t,this.equip.backpack?20:0),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const e=this.inv.selectedSlot();if(!e)return;const t=Oe[e.itemId];if(!t.equip)return;const n=t.equip,i=this.equip[n];if(i&&this.inv.addItem(i.itemId,i.count)>0){this.inv.removeItem(i.itemId,1),xe("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(e),1),this.equip[n]=e,this.applyEquip(),this.audio.pickup(),xe(`${t.name} equipped in the ${n} slot.`)}unequipSlot(e){const t=this.equip[e];if(t){if(!this.gridFits(this.equip.backpack&&e==="backpack"?3:this.inv.w,this.equip.backpack&&e==="backpack"?5:this.inv.h)){xe("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[e]=null,this.applyEquip(),this.inv.addItem(t.itemId,t.count),this.audio.place(),xe(`${Oe[t.itemId].name} taken off.`)}}benchPeer(e,t,n){for(const[i,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.world.get(e+i,t,n+r);if(o===an||o===On)return[e+i,t,n+r]}return null}blockItemId(e){return{1:"sand",2:"sandstone",3:"rock",4:"gravel",5:"dirt",6:"salt",7:"deadwood",8:"glass",9:"insglass",10:"hull",11:"door",13:"lamp",14:"metal",16:"bench",17:"campfire",19:"adobe",21:"engine_core",22:"regulator",23:"chest",24:"bench"}[e]??null}giveOrDrop(e,t){const n=this.inv.addItem(e,t);n>0&&(this.dropEntity(e,n),xe(`No room: dropped ${Oe[e].name}`))}dropEntity(e,t,n=0){const i=this.player.pos,r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=(u,f)=>{const h=Math.floor(i.x+u),p=Math.floor(i.z+f);return!qt(this.world.get(h,Math.floor(i.y),p))&&!qt(this.world.get(h,Math.floor(i.y+1),p))},l=[[r*1.8,o*1.8],[-r*1.8,-o*1.8],[o*1.8,-r*1.8],[-o*1.8,r*1.8],[0,0]],[c,d]=l.find(([u,f])=>a(u,f))??[0,0];this.entities.push({id:this.entitySeq++,x:i.x+c,y:i.y+.35,z:i.z+d,itemId:e,count:t,repickAt:c===0&&d===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}place(){if(this.ui||this.paused)return;const e=this.inv.selectedSlot();if(!e)return;const t=Oe[e.itemId];if(t.block===void 0){xe("Not a placeable block"),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const i=n.hit.x+n.face.x,r=n.hit.y+n.face.y,o=n.hit.z+n.face.z;if(this.world.get(i,r,o)!==qe)return;if(qt(t.block)){const c=this.player.pos;if(i+1>c.x-.3&&i<c.x+.3&&o+1>c.z-.3&&o<c.z+.3&&r+1>c.y&&r<c.y+1.8)return}let a=[];if(t.block===Ft){const c=new Set;for(const[d,u,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(i+d,r+u,o+f)!==Ft)continue;const h=ut.chestKey(this.chestCluster(i+d,r+u,o+f));c.has(h)||(c.add(h),a.push(...this.chests.get(h)??[]),this.chests.delete(h))}}let l=null;if(t.block===an){const c=this.player.pos;for(const[d,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=i+d,h=o+u;if(this.world.get(f,r,h)===qe&&!(f+1>c.x-.3&&f<c.x+.3&&h+1>c.z-.3&&h<c.z+.3&&r+1>c.y&&r<c.y+1.8)){l=[f,r,h];break}}if(!l){xe("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(t.block===Rn||t.block===ii||t.block===Hn){const c=this.world.get(i,r-1,o);if(!(c===vi||t.block===Hn&&(c===Un||c===Si||c===xs))){xe("Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(i,r,o,t.block),l&&this.world.set(l[0],l[1],l[2],On),t.block===Kt&&this.world.get(i,r+1,o)===qe&&this.world.set(i,r+1,o,Gt),t.block===zt&&this.world.get(i,r+1,o)===qe&&this.world.set(i,r+1,o,Ht),t.block===Ln&&this.world.get(i+1,r,o)===qe&&this.world.set(i+1,r,o,Gn),(t.block===Rn||t.block===ii)&&(this.crops.set(`${i},${r},${o}`,0),this.tut?.notify("plant")),t.block===Vi){const c=Os(this.quests);c&&c.kind==="finish"&&([...this.beaconMarks,{x:-4,y:31,z:-1}].some(u=>this.world.get(u.x,u.y,u.z)===on&&(u.x+.5-i)**2+(u.z+.5-o)**2<100)?this.questBump("finish"):xe("Too far from a Save Beacon — the relay needs the Core within 10 m."))}t.block===Tn?this.renderer.addPointLight(i,r,o,"lamp"):t.block===mn&&this.renderer.addPointLight(i,r,o,"fire"),t.block===Ft&&this.linkChests(i,r,o,a),e.count-=1,e.count<=0&&this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}act(){if(this.ui||this.paused||this.cine)return;const e=this.raycastTarget();if(e?.hit&&this.world.get(e.hit.x,e.hit.y,e.hit.z)===Ft){this.openChest(e.hit.x,e.hit.y,e.hit.z);return}const t=this.nearestCache();if(t){this.openCacheId=t.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(e){if(e.hit){const{x:n,y:i,z:r}=e.hit,o=this.world.get(n,i,r);if(o===Cn||o===In||o===Wi){this.harvest(n,i,r,o);return}if(o===Ln||o===Gn){this.sleep();return}if(Nr(o)||o===Pt||o===$t){const a=o===zt||o===Ht||o===$t,l=a?$t:Pt,c=f=>a?f===zt||f===Ht:f===Kt||f===Gt,d=a?zt:Kt,u=a?Ht:Gt;if(o===l){const f=this.player.pos;if(f.x>n-.2&&f.x<n+1.2&&f.z>r-.2&&f.z<r+1.2){xe("Step out of the doorway first."),this.audio.error();return}this.world.get(n,i-1,r)===l?(this.world.set(n,i,r,u),this.world.set(n,i-1,r,d)):this.world.get(n,i+1,r)===l?(this.world.set(n,i,r,d),this.world.set(n,i+1,r,u)):this.world.set(n,i,r,c(this.world.get(n,i+1,r))?u:d)}else{const f=qt(this.world.get(n-1,i,r))||qt(this.world.get(n+1,i,r)),h=this.player.pos,p=f?h.z-(r+.5):h.x-(n+.5),x=n+","+r;Math.abs(p)>.35?this.world.doorSwing.set(x,p>0?-1:1):this.world.doorSwing.delete(x),this.world.set(n,i,r,l);for(const _ of[-1,1])c(this.world.get(n,i+_,r))&&this.world.set(n,i+_,r,l);this.tut?.notify("door")}this.audio.door();return}if(o===on){this.tut?.notify("save"),this.beaconMarks.some(a=>a.x===n&&a.y===i&&a.z===r)||this.beaconMarks.push({x:n,y:i,z:r}),this.audio.savePing(),this.saveNow()?xe("Saved. Death will respawn you at this beacon."):xe("This world is not saved — the beacon only marks it.");return}if(o===an||o===On){this.openStation=[n,i,r],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(o===mn){this.openStation=[n,i,r],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(o===ri){let a=null;for(const[l,c,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=this.world.roomInfo(n+l,i+c,r+d);if(u.size>0){a=u;break}}a&&a.sealed&&a.regulators*jr>=a.size?(this.survival.body=37,this.audio.drink(),xe("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),xe("That Regulator is idle — its space is unsealed or too big for it."));return}}e.water&&(this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),xe(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):xe("You need an empty Water Canister."))}}harvest(e,t,n,i){i===Cn?(this.world.set(e,t,n,Rn),this.crops.set(`${e},${t},${n}`,30),this.giveOrDrop("dune_melon",1+(_t(e,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),xe("Dune Melon picked — the plant keeps growing.")):i===In?(this.world.set(e,t,n,vi),this.crops.delete(`${e},${t},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),xe("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(e,t,n,Hn),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),xe("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const e=this.timeSec-this.lastSleep;if(e<Lt){const n=Math.ceil((Lt-e)/60);xe(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=Lt/3;const t=document.getElementById("sleepfade");t.classList.add("on"),this.audio.door(),setTimeout(()=>t.classList.remove("on"),1200),xe("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(e){const t=Math.floor(e.x),n=Math.floor(e.y),i=Math.floor(e.z);let r=0;for(let o=-6;o<=6;o++)for(let a=-6;a<=6;a++)for(let l=-2;l<=2;l++){if(this.world.get(t+o,n+l,i+a)!==mn)continue;const c=Math.max(Math.abs(o),Math.abs(a));r=Math.max(r,c<=4?18:9)}return r}updateCrops(e){if(this.cropAcc+=e,this.cropAcc<2)return;const t=this.cropAcc;this.cropAcc=0;for(const[n,i]of this.crops){const[r,o,a]=n.split(",").map(Number),l=this.world.get(r,o,a);if(l!==Rn&&l!==Cn&&l!==ii&&l!==In){this.crops.delete(n);continue}if(l===Cn||l===In)continue;const c=l===Rn;let d=!1;e:for(let h=-4;h<=4;h++)for(let p=-4;p<=4;p++)for(let x=-2;x<=1;x++)if(pi(this.world.get(r+h,o+x,a+p))){d=!0;break e}const u=this.survival.airTempAt(this.world,r,o,a,this.timeSec),f=c?u>=22&&u<=45:u>=2&&u<=42;if(d&&f){const h=i+t;this.crops.set(n,h),h>=(c?60:90)&&this.world.set(r,o,a,c?Cn:In)}}}useItem(){if(this.ui||this.paused)return;const e=this.inv.selectedSlot();if(!e){xe("Select an item first."),this.audio.error();return}const t=Oe[e.itemId];if(e.itemId==="canister_full"){this.drink();return}if(t.eat){this.eat(e,t);return}if(t.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:i,y:r,z:o}=n.hit,a=this.world.get(i,r,o);if(n.face.y===1&&(a===Un||a===Si||a===xs||a===bs)){this.world.set(i,r,o,vi),this.audio.place(),xe("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}}}xe(`You can't use ${t.name}.`),this.audio.error()}eat(e,t){this.inv.removeItem(e.itemId,1);const n=[];t.eat.water&&(this.survival.water=Math.min(100,this.survival.water+t.eat.water),n.push(`+${t.eat.water} Water`)),t.eat.health&&(this.survival.health=Math.min(100,this.survival.health+t.eat.health),n.push(`+${t.eat.health} Health`)),this.audio.drink(),xe(`Ate ${t.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){xe("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const e=this.survival.body;this.survival.drink(),this.survival.body<e-.4&&xe("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}surge(){if(this.ui||this.paused)return;const e=this.survival.surge();if(e==="thirsty"){xe("You need at least 20 water to sweat-surge."),this.audio.error();return}if(e==="cooling"){xe("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),xe("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}regulatorGlow(){const e=Math.floor(this.timeSec*2);if(e===this.regTick)return;this.regTick=e;const t=this.player.pos,n=Math.floor(t.x),i=Math.floor(t.y),r=Math.floor(t.z);let o=this.world.roomInfo(n,i,r);if(o.size===0)e:for(let c=-1;c<=1;c++)for(let d=-1;d<=1;d++)for(let u=-1;u<=1;u++){const f=this.world.roomInfo(n+c,i+d,r+u);if(f.size>0){o=f;break e}}const a=o.sealed&&o.regulators>0&&o.regulators*jr>=o.size;this.regActive=a;const l=new Set(a?o.regCells:[]);for(const[c,d]of this.regGlow){if(l.has(c))continue;this.renderer.removeEntityMesh(d);const[u,f,h]=c.split(",").map(Number);this.renderer.removePointLight(u,f,h),this.regGlow.delete(c)}for(const c of l){if(this.regGlow.has(c))continue;const[d,u,f]=c.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new Dn({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const h=this.entitySeq++,p=this.renderer.addEntityMesh(h,[d+.5,u+.5,f+.5],9427199,1.03);p.material=this.regGlowMat,this.renderer.addPointLight(d,u,f,"cool"),this.regGlow.set(c,h)}}updatePickups(){const e=this.player.pos;for(let t=this.entities.length-1;t>=0;t--){const n=this.entities[t];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==qe)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}if(e.distanceTo(new D(n.x,n.y,n.z))<1.3){const i=this.inv.addItem(n.itemId,n.count);i===0?(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(t,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup()):n.count=i}}}}win(){this.won||(this.won=!0,Vc(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`Main Quest complete. Survived ${this.scoreDays().toFixed(1)} days. Best: ${Ys().toFixed(1)} days. The beacon relay is live — rescuers are on their way.`)}die(){this.caches.some(e=>Math.abs(e.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:this.inv.slots.map(e=>({itemId:e.itemId,count:e.count}))}),this.inv.slots=[],this.inv.selected=0,Vc(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${Ys().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/Lt}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const e=[...this.beaconMarks].reverse().find(t=>this.world.get(t.x,t.y,t.z)===on);e?this.player.pos.set(e.x+.5,e.y+1.01,e.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){xe("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const e of["ui-inventory","ui-craft","ui-cache"])document.getElementById(e).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){Yc(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,napReady:this.timeSec-this.lastSleep>=Lt})}hotbarItems(){const e=[];for(const t of this.inv.slots)e.includes(t.itemId)||e.push(t.itemId);return e}selectItem(e){this.inv.selected=this.inv.slots.findIndex(t=>t.itemId===e)}selectHeld(e){const t=this.inv.slots.findIndex(n=>n.itemId===e);t>=0&&(this.inv.selected=t,this.renderHeld())}cycleItem(e){const t=this.hotbarItems();if(!t.length){this.inv.selected=0,this.renderHeld();return}const n=t.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(t[((n+e)%t.length+t.length)%t.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(e)&&e>0?e:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const e=document.getElementById("chest-section");this.chestInv?(e.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):e.classList.add("hidden");const t=document.getElementById("inv-temp");t.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const u=Oe[this.temp.itemId];t.classList.add("filled"),t.style.background=u.color,t.style.backgroundImage=`url(${Vr(this.temp.itemId)[0]??""})`,t.textContent=this.temp.count>1?`${this.temp.count}`:"",t.onmousedown=f=>this.startTempDrag(f),n.textContent=`Drop ${this.temp.count>1?this.temp.count+"× ":""}${u.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,this.temp.count,1),this.temp=null,this.audio.place(),this.renderInv())}}else t.classList.remove("filled"),t.style.background="",t.style.backgroundImage="",t.textContent="",t.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const u of["backpack","head","body"]){const f=document.getElementById("eq-"+u),h=this.equip[u];if(h){const p=Oe[h.itemId];f.classList.add("filled"),f.style.background=p.color,f.style.backgroundImage=`url(${Vr(h.itemId)[0]??""})`,f.title=`Click to take off the ${p.name}`,f.onclick=()=>this.unequipSlot(u)}else f.classList.remove("filled"),f.style.background="#23262e",f.style.backgroundImage="",f.title="",f.onclick=()=>{const p=this.inv.selectedSlot();p&&Oe[p.itemId].equip===u?this.equipItem():p&&(xe(`The ${Oe[p.itemId].name} does not fit the ${u} slot.`),this.audio.error())}}const i=document.getElementById("inv-side"),r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot(),a=this.temp??o,l=this.inv.weight()+(this.temp?Oe[this.temp.itemId].mass*this.temp.count:0),c=this.inv.weightLimit(),d=a?pn(a):null;if(i.textContent=a?`${Oe[a.itemId].name} — ${Oe[a.itemId].desc}`:"Click an item to inspect it; drag to move it.",i.textContent+=` Weight ${l.toFixed(1)} / ${c} kg`,a&&d&&d.w!==d.h){const u=document.createElement("button");u.textContent="Rotate",u.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:r.rotate(o)||(xe("No room to rotate."),this.audio.error()),this.renderInv()},i.appendChild(u)}if(o){const u=Oe[o.itemId];if(u.equip){const f=document.createElement("button");f.textContent=`Equip (${u.equip} slot)`,f.onclick=()=>this.equipItem(),i.appendChild(f)}}if(o)if(r===this.chestInv){const u=document.createElement("button");u.textContent="Move to pack",u.onclick=()=>{const f=r.slots.indexOf(o);r.slots.splice(f,1),ut.placeSlotFree(this.inv,o)||(r.slots.splice(f,0,o),xe("No room in your pack."),this.audio.error()),this.renderInv()},i.appendChild(u)}else{const u=document.createElement("button");u.textContent="Drop 1",u.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},i.appendChild(u)}}renderGrid(e,t){const n=ut.CELL;t.innerHTML="",t.style.gridTemplateColumns=`repeat(${e.w}, ${n}px)`;const i=(r,o)=>e.slots.find(a=>{const l=pn(a);return r>=a.x&&r<a.x+l.w&&o>=a.y&&o<a.y+l.h});for(let r=0;r<e.h;r++)for(let o=0;o<e.w;o++){const a=document.createElement("div");a.className="invcell";const l=i(o,r);if(l){const c=Oe[l.itemId],d=o-l.x,u=r-l.y,f=Vr(l.itemId),h=l.rot?(c.h-1-d)*c.w+u:u*c.w+d;if(a.style.background=c.color,a.style.backgroundImage=`url(${f[Math.min(h,f.length-1)]??""})`,l.count>1&&d===0&&u===0){const x=document.createElement("div");x.className="icon",x.textContent=`${l.count}`,a.appendChild(x)}e.slots.indexOf(l)===e.selected&&a.classList.add("active"),a.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${c.name} — ${c.desc}`},a.onmousedown=x=>{Date.now()-this.lastTouchTs<700?this.tapCell(e,o,r):this.startInvDrag(x,l,e)}}else a.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(e,o,r)};t.appendChild(a)}}tapCell(e,t,n){const i=e.slots.find(o=>{const a=pn(o);return t>=o.x&&t<o.x+a.w&&n>=o.y&&n<o.y+a.h}),r=e.selectedSlot();if(r&&r!==i){const o=pn(r),a=Math.min(t,e.w-o.w),l=Math.min(n,e.h-o.h);if(a>=0&&l>=0&&this.tapMove(e,r,i,a,l)){this.audio.place(),e.selected=e.slots.indexOf(r),this.renderInv();return}}i?(e.selected=e.slots.indexOf(i),this.renderInv()):e.selected!==-1&&(e.selected=-1,this.renderInv())}tapMove(e,t,n,i,r){const o=pn(t);if(e.fits(i,r,o.w,o.h,t))return e.move(t,i,r);if(!n)return!1;const a=pn(n),l=e.slots.indexOf(t);e.slots.splice(l,1);const c=e.fits(t.x,t.y,a.w,a.h,n)&&e.fits(i,r,o.w,o.h,n)&&!(i<t.x+a.w&&t.x<i+o.w&&r<t.y+a.h&&t.y<r+o.h)&&e.move(n,t.x,t.y)&&e.move(t,i,r);return e.slots.splice(l,0,t),c}startInvDrag(e,t,n){if(e.button!==0)return;if(e.preventDefault(),e.shiftKey){this.shiftMove(t,n);return}const i=n.slots.indexOf(t);n.selected=i,n.slots.splice(i,1);const r=this.temp;this.temp=t,r&&(n.slots.push(r),n.move(r,t.x,t.y)||this.giveOrDrop(r.itemId,r.count));const o=(ut.CELL+ut.GAP)*this.uiZoom(),a=ut.GAP*this.uiZoom(),l=pn(t),c=document.createElement("div");c.className="inv-ghost",c.style.width=l.w*o-a+"px",c.style.height=l.h*o-a+"px",c.style.background=Oe[t.itemId].color,c.style.backgroundImage=`url(${ei(t.itemId,t.rot?1:0)})`,document.body.appendChild(c);const d=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:e.clientX-(d.left+t.x*o),gy:e.clientY-(d.top+t.y*o)},f=p=>{c.style.left=p.clientX-u.gx+"px",c.style.top=p.clientY-u.gy+"px"},h=p=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",h),c.remove();const x=pn(t);let _=null,m=0,E=0;for(const[g,v]of this.gridsEls()){const T=g.getBoundingClientRect();if(m=Math.round((p.clientX-T.left-u.gx)/o),E=Math.round((p.clientY-T.top-u.gy)/o),m>=0&&E>=0&&m<=v.w-x.w&&E<=v.h-x.h){_=v;break}}_&&(_.slots.push(t),_.move(t,m,E)||_===n&&_.move(t,t.x,t.y)?(this.temp=null,this.audio.place(),_.selected=_.slots.indexOf(t)):_.slots.splice(_.slots.indexOf(t),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",h),f(e)}shiftMove(e,t){const n=this.chestInv?t===this.inv?this.chestInv:t===this.chestInv?this.inv:null:null;if(n){const o=t.slots.indexOf(e);if(t.slots.splice(o,1),!ut.placeSlotFree(n,e)){t.slots.splice(o,0,e),xe(t===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const i=t.slots.indexOf(e);t.selected=i,t.slots.splice(i,1);const r=this.temp;this.temp=e,r&&(t.slots.push(r),t.move(r,e.x,e.y)||this.giveOrDrop(r.itemId,r.count)),this.renderInv(),this.renderHeld()}gridsEls(){const e=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&e.push([document.getElementById("chest-grid"),this.chestInv]),e}startTempDrag(e){if(e.button!==0||!this.temp)return;e.preventDefault();const t=this.temp,n=(ut.CELL+ut.GAP)*this.uiZoom(),i=ut.GAP*this.uiZoom(),r=pn(t),o=document.createElement("div");o.className="inv-ghost",o.style.width=r.w*n-i+"px",o.style.height=r.h*n-i+"px",o.style.background=Oe[t.itemId].color,o.style.backgroundImage=`url(${ei(t.itemId,t.rot?1:0)})`,document.body.appendChild(o);const a=c=>{o.style.left=c.clientX-r.w*n/2+"px",o.style.top=c.clientY-r.h*n/2+"px"},l=c=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l),o.remove();const d=(r.w*n-i)/2,u=(r.h*n-i)/2;let f=null,h=0,p=0;for(const[x,_]of this.gridsEls()){const m=x.getBoundingClientRect();if(h=Math.round((c.clientX-m.left-d)/n),p=Math.round((c.clientY-m.top-u)/n),h>=0&&p>=0&&h<=_.w-r.w&&p<=_.h-r.h){f=_;break}}f&&(f.slots.push(t),f.move(t,h,p)?(this.temp=null,this.audio.place(),f.selected=f.slots.indexOf(t),f===this.inv&&(this.inv.selected=f.selected)):(f.slots.splice(f.slots.indexOf(t),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",a),window.addEventListener("mouseup",l),a(e)}renderCraft(e){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=e==="bench"?"Crafting Bench":"Campfire Smelting";const t=document.getElementById("craft-list");if(t.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",e!=="smelt"),e==="bench")for(const i of Nh){const r=document.createElement("div");r.className="craft-row";const o=`${Oe[i.out].name}${i.count>1?" ×"+i.count:""}`,a=Object.entries(i.needs).map(([d,u])=>`${u}× ${Oe[d].name}`).join(", "),l=kh(this.inv,i);r.innerHTML=`<span class="what"><img class="craft-art" src="${ei(i.out)}" alt="">${o} <span class="needs">(${a})</span></span>`;const c=document.createElement("button");c.textContent="Craft",c.disabled=!l,c.onclick=()=>{const d=u_(this.inv,i);if(d===null){this.audio.error();return}d>0&&this.giveOrDrop(i.out,d),this.tut?.notify("craft"),Oe[i.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},r.appendChild(c),t.appendChild(r)}else{const i=this.openStation,r=`${i[0]},${i[1]},${i[2]}`,o=this.campCharges.get(r)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){xe("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(r,o+3),this.renderCraft("smelt")};for(const a of Fh){const l=document.createElement("div");l.className="craft-row",l.innerHTML=`<span class="what"><img class="craft-art" src="${ei(a.out)}" alt="">${Oe[a.in].name} → ${Oe[a.out].name} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(a.in,1)||o<1,c.onclick=()=>{this.inv.removeItem(a.in,1),this.campCharges.set(r,o-1);const d=this.inv.addItem(a.out,1);d>0&&this.giveOrDrop(a.out,d),this.audio.place(),this.renderCraft("smelt")},l.appendChild(c),t.appendChild(l)}}}renderCache(){const e=this.caches.find(i=>i.id===this.openCacheId);document.getElementById("cache-title").textContent=e?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const t=document.getElementById("cache-list");if(t.innerHTML="",!e||!e.items.length){this.closeUI();return}for(const i of e.items){const r=document.createElement("div");r.className="cache-item",r.textContent=`${i.count}× ${Oe[i.itemId].name}`,t.appendChild(r)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let i=!0;for(;i;){i=!1;for(const r of e.items){const o=this.inv.addItem(r.itemId,r.count);o<r.count&&(i=!0,r.count=o),o===0&&e.items.splice(e.items.indexOf(r),1)}}e.items.length||this.renderer.removeEntityMesh(e.id),this.renderCache(),e.items.length||this.closeUI()},t.appendChild(n)}}const R_=["drone","wanderer","wanderer","caravan","caravan","nightwind"],C_=["drone","nightwind","nightwind","caravan","wanderer"],$c={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},Kc=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],I_=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],jc=[0,2,4,2,3,5,4,1],L_=[0,0,3,2,4,3,2,0];class P_{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;root=98;deg=Kc[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const e=this.ctx.sampleRate,t=this.ctx.createBuffer(1,e*4,e),n=t.getChannelData(0);let i=0,r=0;for(let d=0;d<n.length;d++){const u=Math.random()*2-1;i=.99*i+.01*u,r=.96*r+.04*u,n[d]=(i+r)*2}const o=this.ctx.createBufferSource();o.buffer=t,o.loop=!0,this.noiseBuf=t;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const l=this.ctx.createOscillator();l.frequency.value=.13;const c=this.ctx.createGain();c.gain.value=100,l.connect(c).connect(a.frequency),l.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,o.connect(a).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(e){this.volume=e,this.windGain&&(this.windGain.gain.value=.06*e),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*e,this.ctx.currentTime,.4)}setMusic(e){this.musicOn=e,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((e?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(e){this.isDay!==e&&(this.isDay=e,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const e=this.ctx;this.musicGain=e.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(e.destination);const t=e.createDelay(1);t.delayTime.value=.38;const n=e.createGain();n.gain.value=.35;const i=e.createGain();i.gain.value=.35,this.musicGain.connect(t),t.connect(n),n.connect(t),t.connect(i),i.connect(e.destination),[1,1.5,2].forEach((r,o)=>{const a=e.createOscillator();a.type=o===2?"sine":"triangle",a.frequency.value=this.root*r,a.detune.value=o*3-3;const l=e.createGain();l.gain.value=.03/(o+1);const c=e.createOscillator();c.frequency.value=.05+o*.017;const d=e.createGain();d.gain.value=.018,c.connect(d).connect(l.gain),c.start(),a.connect(l).connect(this.musicGain),a.start(),this.droneOscs.push(a)}),this.genreEnd=e.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(e){const t=this.isDay?R_:C_;let n=t[Math.floor(Math.random()*t.length)];n===this.genre&&(n=t[Math.floor(Math.random()*t.length)]),this.genre=n,this.root=55*2**((4+Math.floor(Math.random()*12))/12);const i=this.isDay?Kc:I_;if(this.deg=i[Math.floor(Math.random()*i.length)],this.genreEnd=e+90+Math.random()*150,this.ctx){const r=this.ctx.currentTime;this.droneOscs.forEach((o,a)=>o.frequency.setTargetAtTime(this.root*[1,1.5,2][a],r,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd&&this.rollGenre(this.nextBar),this.scheduleBar(this.nextBar),this.nextBar+=$c[this.genre],this.barCount++}scheduleBar(e){const t=this.root,n=this.deg,i=(o,a)=>t*o*2**(n[(a%n.length+n.length)%n.length]/12),r=$c[this.genre];switch(this.genre){case"drone":{this.note(i(1,0),e,r*.95,"sine",.18,.15),[0,2,4].forEach(o=>this.note(i(2,o),e+.05,r*.9,"triangle",.03,.4));for(let o=0;o<8;o++)Math.random()<.15||this.note(i(4,jc[o]),e+o*r/8,.9,"triangle",.12,.015);if(Math.random()<.6){const o=1+Math.floor(Math.random()*6);this.note(i(4,o),e+Math.floor(Math.random()*5)*(r/8),1.4,"sine",.13,.03)}break}case"wanderer":{this.note(i(1,0),e,r*.55,"sine",.16,.02);for(let o=0;o<8;o++)Math.random()<.1||this.note(i(Math.random()<.3?3:4,jc[o]),e+o*r/8,.55,"triangle",.12,.01);if(Math.random()<.7){const o=1+Math.floor(Math.random()*5);this.note(i(5,o),e+Math.floor(Math.random()*6)*(r/8),.8,"sine",.11,.02)}break}case"nightwind":{this.note(i(1,0),e,r*.95,"sine",.15,.3),Math.random()<.4&&[0,2,4].forEach(a=>this.note(i(2,a),e+.1,r*.85,"triangle",.025,.6));const o=1+Math.floor(Math.random()*3);for(let a=0;a<o;a++){const l=Math.floor(Math.random()*n.length),c=1.6+Math.random()*(r-1.2);this.note(i(4,l),e+Math.random()*(r-1),c,"sine",.12,.35)}break}case"caravan":{for(let o=0;o<8;o++)(o===0||o===3||o===4)&&this.drum(e+o*r/8),o%2===1&&this.brush(e+o*r/8);this.note(i(1,0),e,r*.45,"sine",.17,.01),this.note(i(1,3),e+r/2,r*.4,"sine",.14,.01);for(let o=0;o<8;o++)Math.random()<.25||this.note(i(3,L_[o]),e+o*r/8,.4,"triangle",.1,.01);if(Math.random()<.4){const o=1+Math.floor(Math.random()*4);this.note(i(4,o),e+Math.floor(Math.random()*4)*(r/4),.7,"square",.05,.02)}break}}}drum(e){if(!this.ctx||!this.musicGain)return;const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(40,e+.22),n.gain.setValueAtTime(.22,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(n).connect(this.musicGain),t.start(e),t.stop(e+.3)}brush(e){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const i=this.ctx.createGain();i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(n).connect(i).connect(this.musicGain),t.start(e,Math.random()*3.9),t.stop(e+.1)}note(e,t,n,i,r,o){if(!this.ctx||!this.musicGain)return;const a=this.ctx.createOscillator();a.type=i,a.frequency.value=e;const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(r,t+o),l.gain.exponentialRampToValueAtTime(.001,t+n),a.connect(l).connect(this.musicGain),a.start(t),a.stop(t+n+.05)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(e,t,n,i=.2,r=0){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(e,o),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,e+r),o+t),l.gain.setValueAtTime(i*this.volume,o),l.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(l).connect(this.ctx.destination),a.start(o),a.stop(o+t)}noiseHit(e,t,n=.25){if(!this.ctx)return;const i=this.ctx.currentTime,r=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(r*e)),r),a=o.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=(Math.random()*2-1)*(1-u/a.length);const l=this.ctx.createBufferSource();l.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=t;const d=this.ctx.createGain();d.gain.value=n*this.volume,l.connect(c).connect(d).connect(this.ctx.destination),l.start(i)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((e,t)=>setTimeout(()=>this.blip(e,.28,"sine",.2,30),t*170))}heartbeat(e,t){t<=0||t>30||(this.heartTimer-=e,this.heartTimer<=0&&(this.heartTimer=.9+t/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const Xe=s=>document.getElementById(s),Zc=s=>Xe(s).value,Yt=(s,e=!0)=>Xe(s).classList.toggle("hidden",!e),D_=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],yl=()=>D_.forEach(s=>Yt(s,!1)),Zr=new P_;let lt=__(),Ce=null;document.addEventListener("click",()=>Zr.resume(),{once:!0});document.addEventListener("touchstart",()=>Zr.resume(),{once:!0});function oo(){yl(),Yt("screen-title"),Xe("best-score").textContent=Ys()>0?`Best run: ${Ys().toFixed(1)} days`:"";const s=Xe("worldlist");s.innerHTML="";const e=ro();e.length||(s.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const t of e){const n=document.createElement("div");n.className="world-row";const i=Vh(t.id),r=document.createElement("span");r.textContent=`${t.name} — seed “${t.seedStr}” — ${i?`day ${i.days}, survived ${(i.playSec/Lt).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>ao(t,i);const a=document.createElement("button");a.textContent="Export",a.onclick=()=>{i?Wh(t,i):xe("Nothing saved for this world yet.")};const l=document.createElement("button");l.textContent="Delete",l.onclick=()=>{l.textContent==="Sure?"?(x_(t.id),oo()):(l.textContent="Sure?",setTimeout(()=>l.textContent="Delete",2500))},n.append(r,o,a,l),s.appendChild(n)}}function ao(s,e){yl(),Yt("cheats",!1),Xe("hud").classList.remove("hidden"),lt.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),Xe("btn-save").classList.toggle("hidden",s.id.startsWith("guest")),Xe("btn-exportworld").classList.toggle("hidden",s.id.startsWith("guest")),Zr.resume(),Ce=new ut(s,e,Xe("game-wrap"),lt,Zr),globalThis.game=Ce,Ce.start(),e===null&&Ce.startTutorial()}function Sl(){Ce&&(Ce.saveNow(),Ce.stop()),Ce=null,delete globalThis.game,Xe("hud").classList.add("hidden"),oo()}function bl(s){yl(),Yt(s)}function U_(){Ce&&(Ce.pauseSubmenu=null),Yt("screen-settings",!1),Yt("screen-instructions",!1),Yt("screen-catalog",!1),Ce?(Yt("ui-inventory",!1),Yt("ui-craft",!1),Yt("ui-cache",!1),Yt("screen-pause",!1),Ce.paused=!1,Ce.relock()):oo()}function El(){Ce&&(Ce.pauseSubmenu=Ce.paused?"settings":null),bl("screen-settings");const s=Xe("settings-body");s.innerHTML="";const e=(t,n,i,r)=>{const o=document.createElement("div");o.className="setting";const a=document.createElement("span");a.textContent=t;const l=document.createElement("div");l.className="seg";const c=[];for(const[d,u]of n){const f=document.createElement("button");f.type="button",f.textContent=d,String(u)===String(i)&&f.classList.add("on"),f.onclick=()=>{for(const h of c)h.classList.remove("on");f.classList.add("on"),r(u)},c.push(f),l.appendChild(f)}o.append(a,l),s.appendChild(o)};if(e("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],lt.sens,t=>{lt.sens=t,bn()}),e("Invert Y",[["Off",!1],["On",!0]],lt.invertY,t=>{lt.invertY=t,bn()}),e("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],lt.volume,t=>{lt.volume=t,bn()}),e("Music",[["Off",!1],["On",!0]],lt.music,t=>{lt.music=t,bn()}),e("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],lt.fov,t=>{lt.fov=t,bn()}),e("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],lt.renderDist,t=>{lt.renderDist=t,bn()}),e("Quality",[["Low","low"],["Medium","med"],["High","high"]],lt.quality,t=>{lt.quality=t,bn()}),e("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],lt.units,t=>{lt.units=t,bn()}),e("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],lt.uiScale,t=>{lt.uiScale=t,bn()}),document.fullscreenEnabled)e("Fullscreen",[["Off",!1],["On",!0]],lt.fullscreen,t=>{lt.fullscreen=t,bn(),t?document.documentElement.requestFullscreen().catch(()=>{lt.fullscreen=!1,bn(),El()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const t=document.createElement("div");t.className="setting",t.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),s.appendChild(t)}}function qh(s){document.documentElement.style.setProperty("--ui-scale",String(s))}function bn(){v_(lt),qh(lt.uiScale),Ce&&Ce.applySettings(lt)}let qa="items";function wl(){Ce&&(Ce.pauseSubmenu=Ce.paused?"catalog":null),bl("screen-catalog");for(const e of Array.from(Xe("catalog-tabs").querySelectorAll(".tab")))e.classList.toggle("active",e.dataset.tab===qa);const s=Xe("catalog-body");if(s.innerHTML="",qa==="items"){const e=document.createElement("div");e.className="cat-grid";const t=(n,i,r,o)=>{const a=document.createElement("div");a.className="cat-card";const l=document.createElement("img");l.src=n,l.alt="";const c=document.createElement("div");c.innerHTML=`<b>${i}</b><div class="cat-meta">${r}</div><div class="cat-desc">${o}</div>`,a.append(l,c),e.append(a)};for(const n of Object.values(Oe).sort((i,r)=>i.name.localeCompare(r.name)))t(ei(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of si){if(n.id===0||n.name==="Air")continue;const i=Object.values(Oe).find(o=>o.block===n.id),r=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;t(i?ei(i.id):y_(n.id),n.name,r,i?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}s.append(e)}else{const e=(t,n,i,r)=>{const o=document.createElement("div");o.className="cat-recipe";const a=document.createElement("img");a.src=t,a.alt="",a.style.width="36px",a.style.height="36px",a.style.imageRendering="pixelated",o.append(a,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${i}</b> <span class="needs">(${r})</span>`})),s.append(o)};for(const t of Nh){const n=Object.entries(t.needs).map(([i,r])=>`${r}× ${Oe[i].name}`).join(" + ");e(ei(t.out),n,`${Oe[t.out].name}${t.count>1?" ×"+t.count:""}`,t.bench?"Crafting Bench":"hands")}for(const t of Fh)e(ei(t.out),`1× ${Oe[t.in].name}`,Oe[t.out].name,"Campfire, 1 fuel charge")}}for(const s of Array.from(Xe("catalog-tabs").querySelectorAll(".tab")))s.onclick=()=>{qa=s.dataset.tab,wl()};const N_=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Metal Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 10 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],F_=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function Yh(){Ce&&(Ce.pauseSubmenu=Ce.paused?"instructions":null),bl("screen-instructions");const s=Xe("instr-body");s.innerHTML="";const e=matchMedia("(pointer: coarse)").matches?F_:N_;for(const[n,i]of e){const r=document.createElement("div");r.innerHTML=`<b>${n}</b> — ${i}`,s.appendChild(r)}const t=document.createElement("div");t.className="needs",t.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. The Ship Interior is always sealed: your body heat drifts back to 36.6 °C there. Outside, midday cooks you and night freezes you — shade, walls and doors change what you are exposed to. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, and Kangaroo Rats bolt — hunt one, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor and Armour go in the three Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it.",s.appendChild(t)}Xe("btn-create").onclick=()=>{const s=Zc("seed-input").trim()||Math.random().toString(36).slice(2,10),e=Zc("world-name").trim()||s,t=Hh(e,s);ao(t,null)};Xe("btn-guest").onclick=()=>{const s=Math.random().toString(36).slice(2,10);ao({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:s,updated:Date.now()},null)};Xe("btn-import").onclick=()=>Xe("import-file").click();Xe("import-file").onchange=async()=>{const s=Xe("import-file").files?.[0];if(s)try{const e=await M_(s);xe("World imported."),ao(e,Vh(e.id))}catch(e){xe(`Import failed: ${e.message}`)}};Xe("btn-settings").onclick=El;Xe("btn-pause-settings").onclick=El;Xe("btn-instructions").onclick=Yh;Xe("btn-pause-instructions").onclick=Yh;Xe("btn-catalog").onclick=wl;Xe("btn-catalog-title").onclick=wl;for(const s of document.querySelectorAll(".close-btn"))s.onclick=()=>{if(Ce&&Ce.pauseSubmenu){Ce.closePauseSubmenu();return}Ce&&Ce.closeUI(),(!Ce||!(Ce.ui==="inv"&&Ce.temp))&&U_()};Xe("btn-resume").onclick=()=>{Ce&&(Ce.paused=!1,Yt("screen-pause",!1),Yt("cheats",!1),Ce.relock())};Xe("btn-save").onclick=()=>xe("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");Xe("btn-exportworld").onclick=()=>{Ce&&Ce.exportWorld()};Xe("btn-quit").onclick=()=>Sl();Xe("btn-cheats").onclick=()=>Yt("cheats",Xe("cheats").classList.contains("hidden"));const $h=Xe("cheat-item");for(const[s,e]of Object.entries(Oe).sort((t,n)=>t[1].name.localeCompare(n[1].name))){const t=document.createElement("option");t.value=s,t.textContent=e.name,$h.appendChild(t)}Xe("btn-cheat-add").onclick=()=>{if(!Ce)return;const s=$h.value;Ce.inv.addItem(s,1)?xe("No room in your pack."):xe(`Added ${Oe[s].name}.`)};for(const s of Array.from(Xe("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))s.onclick=()=>{if(!Ce)return;if(s.dataset.speed!==void 0){Ce.speedMul=Number(s.dataset.speed),xe(`Player speed ×${s.dataset.speed}.`);return}if(s.dataset.immortal!==void 0){Ce.survival.invincible=s.dataset.immortal==="1",xe(`Immortality ${Ce.survival.invincible?"on":"off"}.`);return}const e=Number(s.dataset.frac);Ce.setClock(e),xe(`Clock set to ${s.textContent}.`)};Xe("btn-respawn").onclick=()=>{Ce&&Ce.respawn()};Xe("btn-death-title").onclick=()=>Sl();Xe("btn-win-continue").onclick=()=>{Ce&&(Ce.paused=!1,Yt("screen-win",!1),Ce.relock())};Xe("btn-win-title").onclick=()=>Sl();document.addEventListener("keydown",s=>{if(s.code==="Escape"&&!Xe("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});qh(lt.uiScale);oo();
