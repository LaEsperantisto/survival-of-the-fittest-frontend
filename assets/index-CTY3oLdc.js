(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="180",Eu=0,Xl=1,wu=2,vh=1,Tu=2,_i=3,Ui=0,pn=1,ke=2,Li=0,bs=1,ql=2,$l=3,Yl=4,Au=5,$i=100,Ru=101,Cu=102,Iu=103,Lu=104,Pu=200,Du=201,Uu=202,Nu=203,ma=204,ga=205,ku=206,Fu=207,Ou=208,Bu=209,zu=210,Hu=211,Gu=212,Vu=213,Wu=214,_a=0,va=1,xa=2,Ts=3,Ma=4,ya=5,Sa=6,ba=7,dl=0,Xu=1,qu=2,Pi=0,$u=1,Yu=2,Ku=3,ju=4,Zu=5,Ju=6,Qu=7,xh=300,As=301,Rs=302,Ea=303,wa=304,mo=306,Ta=1e3,Zi=1001,Aa=1002,wn=1003,td=1004,xr=1005,ti=1006,Lo=1007,Ji=1008,ai=1009,Mh=1010,yh=1011,Zs=1012,fl=1013,es=1014,vi=1015,or=1016,pl=1017,ml=1018,Js=1020,Sh=35902,bh=35899,Eh=1021,wh=1022,$n=1023,Qs=1026,tr=1027,Th=1028,gl=1029,Ah=1030,_l=1031,vl=1033,jr=33776,Zr=33777,Jr=33778,Qr=33779,Ra=35840,Ca=35841,Ia=35842,La=35843,Pa=36196,Da=37492,Ua=37496,Na=37808,ka=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,Ha=37814,Ga=37815,Va=37816,Wa=37817,Xa=37818,qa=37819,$a=37820,Ya=37821,Ka=36492,ja=36494,Za=36495,Ja=36283,Qa=36284,tl=36285,el=36286,ed=3200,nd=3201,Rh=0,id=1,Ci="",dn="srgb",Cs="srgb-linear",oo="linear",ce="srgb",os=7680,Kl=519,sd=512,rd=513,od=514,Ch=515,ad=516,ld=517,cd=518,hd=519,jl=35044,Zl="300 es",ei=2e3,ao=2001;class Ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const Es=Math.PI/180,er=180/Math.PI;function Ps(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function xl(s,t){return(s%t+t)%t}function ud(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function dd(s,t,e){return s!==t?(e-s)/(t-s):0}function js(s,t,e){return(1-e)*s+e*t}function fd(s,t,e,n){return js(s,t,1-Math.exp(-e*n))}function pd(s,t=1){return t-Math.abs(xl(s,t*2)-t)}function md(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function gd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function _d(s,t){return s+Math.floor(Math.random()*(t-s+1))}function vd(s,t){return s+Math.random()*(t-s)}function xd(s){return s*(.5-Math.random())}function Md(s){s!==void 0&&(Jl=s);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yd(s){return s*Es}function Sd(s){return s*er}function bd(s){return(s&s-1)===0&&s!==0}function Ed(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Td(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),l=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),v=o((n-t)/2);switch(i){case"XYX":s.set(a*c,h*u,h*f,a*l);break;case"YZY":s.set(h*f,a*c,h*u,a*l);break;case"ZXZ":s.set(h*u,h*f,a*c,a*l);break;case"XZX":s.set(a*c,h*v,h*m,a*l);break;case"YXY":s.set(h*m,a*c,h*v,a*l);break;case"ZYZ":s.set(h*v,h*m,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ys(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Di={DEG2RAD:Es,RAD2DEG:er,generateUUID:Ps,clamp:Qt,euclideanModulo:xl,mapLinear:ud,inverseLerp:dd,lerp:js,damp:fd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:_d,randFloat:vd,randFloatSpread:xd,seededRandom:Md,degToRad:yd,radToDeg:Sd,isPowerOfTwo:bd,ceilPowerOfTwo:Ed,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Td,normalize:Ze,denormalize:ys};class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let h=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],v=r[o+2],M=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(u!==M||h!==f||l!==m||c!==v){let _=1-a;const g=h*f+l*m+c*v+u*M,T=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const L=Math.sqrt(R),d=Math.atan2(L,g*T);_=Math.sin(_*d)/L,a=Math.sin(a*d)/L}const b=a*T;if(h=h*_+f*b,l=l*_+m*b,c=c*_+v*b,u=u*_+M*b,_===1-a){const L=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=L,l*=L,c*=L,u*=L}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],h=n[i+1],l=n[i+2],c=n[i+3],u=r[o],f=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+c*u+h*m-l*f,t[e+1]=h*v+c*f+l*u-a*m,t[e+2]=l*v+c*m+a*f-h*u,t[e+3]=c*v-a*u-h*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),f=h(n/2),m=h(i/2),v=h(r/2);switch(o){case"XYZ":this._x=f*c*u+l*m*v,this._y=l*m*u-f*c*v,this._z=l*c*v+f*m*u,this._w=l*c*u-f*m*v;break;case"YXZ":this._x=f*c*u+l*m*v,this._y=l*m*u-f*c*v,this._z=l*c*v-f*m*u,this._w=l*c*u+f*m*v;break;case"ZXY":this._x=f*c*u-l*m*v,this._y=l*m*u+f*c*v,this._z=l*c*v+f*m*u,this._w=l*c*u-f*m*v;break;case"ZYX":this._x=f*c*u-l*m*v,this._y=l*m*u+f*c*v,this._z=l*c*v-f*m*u,this._w=l*c*u+f*m*v;break;case"YZX":this._x=f*c*u+l*m*v,this._y=l*m*u+f*c*v,this._z=l*c*v-f*m*u,this._w=l*c*u-f*m*v;break;case"XZY":this._x=f*c*u-l*m*v,this._y=l*m*u-f*c*v,this._z=l*c*v+f*m*u,this._w=l*c*u+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(c-h)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,c=e._w;return this._x=n*c+o*a+i*l-r*h,this._y=i*c+o*h+r*a-n*l,this._z=r*c+o*l+n*h-i*a,this._w=o*c-n*a-i*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*i-a*n),c=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+h*l+o*u-a*c,this.y=n+h*c+a*l-r*u,this.z=i+h*u+r*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=i*h-r*a,this.y=r*o-n*h,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new D,Ql=new ar;class $t{constructor(t,e,n,i,r,o,a,h,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,l)}set(t,e,n,i,r,o,a,h,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],c=n[4],u=n[7],f=n[2],m=n[5],v=n[8],M=i[0],_=i[3],g=i[6],T=i[1],R=i[4],b=i[7],L=i[2],d=i[5],p=i[8];return r[0]=o*M+a*T+h*L,r[3]=o*_+a*R+h*d,r[6]=o*g+a*b+h*p,r[1]=l*M+c*T+u*L,r[4]=l*_+c*R+u*d,r[7]=l*g+c*b+u*p,r[2]=f*M+m*T+v*L,r[5]=f*_+m*R+v*d,r[8]=f*g+m*b+v*p,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-n*r*c+n*a*h+i*r*l-i*o*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=c*o-a*l,f=a*h-c*r,m=l*r-o*h,v=e*u+n*f+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=u*M,t[1]=(i*l-c*n)*M,t[2]=(a*n-i*o)*M,t[3]=f*M,t[4]=(c*e-i*h)*M,t[5]=(i*r-a*e)*M,t[6]=m*M,t[7]=(n*h-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-i*l,i*h,-i*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new $t;function Ih(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ad(){const s=lo("canvas");return s.style.display="block",s}const tc={};function nr(s){s in tc||(tc[s]=!0,console.warn(s))}function Rd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ec=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cd(){const s={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?oo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cs]:{primaries:t,whitePoint:n,transfer:oo,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}const se=Cd();function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let as;class Id{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=lo("canvas")),as.width=t.width,as.height=t.height;const i=as.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ld=0;class Ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uo(i[o].image)):r.push(Uo(i[o]))}else r=Uo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Id.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pd=0;const No=new D;class an extends Ls{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Zi,i=Zi,r=ti,o=Ji,a=$n,h=ai,l=an.DEFAULT_ANISOTROPY,c=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Ps(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=xh;an.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const h=t.elements,l=h[0],c=h[4],u=h[8],f=h[1],m=h[5],v=h[9],M=h[2],_=h[6],g=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-M)<.01&&Math.abs(v-_)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+M)<.1&&Math.abs(v+_)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(l+1)/2,b=(m+1)/2,L=(g+1)/2,d=(c+f)/4,p=(u+M)/4,x=(v+_)/4;return R>b&&R>L?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=d/n,r=p/n):b>L?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=d/i,r=x/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=p/r,i=x/r),this.set(n,i,r,e),this}let T=Math.sqrt((_-v)*(_-v)+(u-M)*(u-M)+(f-c)*(f-c));return Math.abs(T)<.001&&(T=1),this.x=(_-v)/T,this.y=(u-M)/T,this.z=(f-c)/T,this.w=Math.acos((l+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends Ls{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new an(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ml(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends Dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lh extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),yr.subVectors(this.max,ks),ls.subVectors(t.a,ks),cs.subVectors(t.b,ks),hs.subVectors(t.c,ks),Si.subVectors(cs,ls),bi.subVectors(hs,cs),Bi.subVectors(ls,hs);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Bi.z,Bi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Bi.z,0,-Bi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Bi.y,Bi.x,0];return!ko(e,ls,cs,hs,yr)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,ls,cs,hs,yr))?!1:(Sr.crossVectors(Si,bi),e=[Sr.x,Sr.y,Sr.z],ko(e,ls,cs,hs,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,Mr=new lr,ls=new D,cs=new D,hs=new D,Si=new D,bi=new D,Bi=new D,ks=new D,yr=new D,Sr=new D,zi=new D;function ko(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zi.fromArray(s,r);const a=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),h=t.dot(zi),l=e.dot(zi),c=n.dot(zi);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}const Nd=new lr,Fs=new D,Fo=new D;class cr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(Fo)),this.expandByPoint(Fs.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fi=new D,Oo=new D,br=new D,Ei=new D,Bo=new D,Er=new D,zo=new D;class yl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oo.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Oo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(br),a=Ei.dot(this.direction),h=-Ei.dot(br),l=Ei.lengthSq(),c=Math.abs(1-o*o);let u,f,m,v;if(c>0)if(u=o*h-a,f=o*a-h,v=r*c,u>=0)if(f>=-v)if(f<=v){const M=1/c;u*=M,f*=M,m=u*(u+o*f+2*a)+f*(o*u+f+2*h)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;else f<=-v?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-h),r),m=-u*u+f*(f+2*h)+l):f<=v?(u=0,f=Math.min(Math.max(-r,-h),r),m=f*(f+2*h)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-h),r),m=-u*u+f*(f+2*h)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oo).addScaledVector(br,f),m}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||a>i)||((a>n||n!==n)&&(n=a),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,i,r){Bo.subVectors(e,t),Er.subVectors(n,t),zo.crossVectors(Bo,Er);let o=this.direction.dot(zo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const h=a*this.direction.dot(Er.crossVectors(Ei,Er));if(h<0)return null;const l=a*this.direction.dot(Bo.cross(Ei));if(l<0||h+l>o)return null;const c=-a*Ei.dot(zo);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,r,o,a,h,l,c,u,f,m,v,M,_){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,h,l,c,u,f,m,v,M,_)}set(t,e,n,i,r,o,a,h,l,c,u,f,m,v,M,_){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=h,g[2]=l,g[6]=c,g[10]=u,g[14]=f,g[3]=m,g[7]=v,g[11]=M,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*c,m=o*u,v=a*c,M=a*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=m+v*l,e[5]=f-M*l,e[9]=-a*h,e[2]=M-f*l,e[6]=v+m*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*c,m=h*u,v=l*c,M=l*u;e[0]=f+M*a,e[4]=v*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=m*a-v,e[6]=M+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*c,m=h*u,v=l*c,M=l*u;e[0]=f-M*a,e[4]=-o*u,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*c,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*c,m=o*u,v=a*c,M=a*u;e[0]=h*c,e[4]=v*l-m,e[8]=f*l+M,e[1]=h*u,e[5]=M*l+f,e[9]=m*l-v,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,m=o*l,v=a*h,M=a*l;e[0]=h*c,e[4]=M-f*u,e[8]=v*u+m,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=m*u+v,e[10]=f-M*u}else if(t.order==="XZY"){const f=o*h,m=o*l,v=a*h,M=a*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+M,e[5]=o*c,e[9]=m*u-v,e[2]=v*u-m,e[6]=a*c,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Fd)}lookAt(t,e,n){const i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),wi.crossVectors(n,_n),wi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),wi.crossVectors(n,_n)),wi.normalize(),wr.crossVectors(_n,wi),i[0]=wi.x,i[4]=wr.x,i[8]=_n.x,i[1]=wi.y,i[5]=wr.y,i[9]=_n.y,i[2]=wi.z,i[6]=wr.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],c=n[1],u=n[5],f=n[9],m=n[13],v=n[2],M=n[6],_=n[10],g=n[14],T=n[3],R=n[7],b=n[11],L=n[15],d=i[0],p=i[4],x=i[8],y=i[12],S=i[1],C=i[5],P=i[9],k=i[13],z=i[2],B=i[6],W=i[10],Y=i[14],H=i[3],J=i[7],it=i[11],ft=i[15];return r[0]=o*d+a*S+h*z+l*H,r[4]=o*p+a*C+h*B+l*J,r[8]=o*x+a*P+h*W+l*it,r[12]=o*y+a*k+h*Y+l*ft,r[1]=c*d+u*S+f*z+m*H,r[5]=c*p+u*C+f*B+m*J,r[9]=c*x+u*P+f*W+m*it,r[13]=c*y+u*k+f*Y+m*ft,r[2]=v*d+M*S+_*z+g*H,r[6]=v*p+M*C+_*B+g*J,r[10]=v*x+M*P+_*W+g*it,r[14]=v*y+M*k+_*Y+g*ft,r[3]=T*d+R*S+b*z+L*H,r[7]=T*p+R*C+b*B+L*J,r[11]=T*x+R*P+b*W+L*it,r[15]=T*y+R*k+b*Y+L*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],m=t[14],v=t[3],M=t[7],_=t[11],g=t[15];return v*(+r*h*u-i*l*u-r*a*f+n*l*f+i*a*m-n*h*m)+M*(+e*h*m-e*l*f+r*o*f-i*o*m+i*l*c-r*h*c)+_*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*c-n*l*c)+g*(-i*a*c-e*h*u+e*a*f+i*o*u-n*o*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],m=t[11],v=t[12],M=t[13],_=t[14],g=t[15],T=u*_*l-M*f*l+M*h*m-a*_*m-u*h*g+a*f*g,R=v*f*l-c*_*l-v*h*m+o*_*m+c*h*g-o*f*g,b=c*M*l-v*u*l+v*a*m-o*M*m-c*a*g+o*u*g,L=v*u*h-c*M*h-v*a*f+o*M*f+c*a*_-o*u*_,d=e*T+n*R+i*b+r*L;if(d===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const p=1/d;return t[0]=T*p,t[1]=(M*f*r-u*_*r-M*i*m+n*_*m+u*i*g-n*f*g)*p,t[2]=(a*_*r-M*h*r+M*i*l-n*_*l-a*i*g+n*h*g)*p,t[3]=(u*h*r-a*f*r-u*i*l+n*f*l+a*i*m-n*h*m)*p,t[4]=R*p,t[5]=(c*_*r-v*f*r+v*i*m-e*_*m-c*i*g+e*f*g)*p,t[6]=(v*h*r-o*_*r-v*i*l+e*_*l+o*i*g-e*h*g)*p,t[7]=(o*f*r-c*h*r+c*i*l-e*f*l-o*i*m+e*h*m)*p,t[8]=b*p,t[9]=(v*u*r-c*M*r-v*n*m+e*M*m+c*n*g-e*u*g)*p,t[10]=(o*M*r-v*a*r+v*n*l-e*M*l-o*n*g+e*a*g)*p,t[11]=(c*a*r-o*u*r-c*n*l+e*u*l+o*n*m-e*a*m)*p,t[12]=L*p,t[13]=(c*M*i-v*u*i+v*n*f-e*M*f-c*n*_+e*u*_)*p,t[14]=(v*a*i-o*M*i-v*n*h+e*M*h+o*n*_-e*a*_)*p,t[15]=(o*u*i-c*a*i+c*n*h-e*u*h-o*n*f+e*a*f)*p,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,l=r*o,c=r*a;return this.set(l*o+n,l*a-i*h,l*h+i*a,0,l*a+i*h,c*a+n,c*h-i*o,0,l*h-i*a,c*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,c=o+o,u=a+a,f=r*l,m=r*c,v=r*u,M=o*c,_=o*u,g=a*u,T=h*l,R=h*c,b=h*u,L=n.x,d=n.y,p=n.z;return i[0]=(1-(M+g))*L,i[1]=(m+b)*L,i[2]=(v-R)*L,i[3]=0,i[4]=(m-b)*d,i[5]=(1-(f+g))*d,i[6]=(_+T)*d,i[7]=0,i[8]=(v+R)*p,i[9]=(_-T)*p,i[10]=(1-(f+M))*p,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Hn.copy(this);const l=1/r,c=1/o,u=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=c,Hn.elements[5]*=c,Hn.elements[6]*=c,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ei,h=!1){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),m=(n+i)/(n-i);let v,M;if(h)v=r/(o-r),M=o*r/(o-r);else if(a===ei)v=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ao)v=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ei,h=!1){const l=this.elements,c=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),m=-(n+i)/(n-i);let v,M;if(h)v=1/(o-r),M=o/(o-r);else if(a===ei)v=-2/(o-r),M=-(o+r)/(o-r);else if(a===ao)v=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new D,Hn=new ve,kd=new D(0,0,0),Fd=new D(1,1,1),wi=new D,wr=new D,_n=new D,ic=new ve,sc=new ar;class li{constructor(t=0,e=0,n=0,i=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],h=i[1],l=i[5],c=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Od=0;const rc=new D,ds=new ar,pi=new ve,Tr=new D,Os=new D,Bd=new D,zd=new ar,oc=new D(1,0,0),ac=new D(0,1,0),lc=new D(0,0,1),cc={type:"added"},Hd={type:"removed"},fs={type:"childadded",child:null},Ho={type:"childremoved",child:null};class Ie extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new D,e=new li,n=new ar,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new $t}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Os,Tr,this.up):pi.lookAt(Tr,Os,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(pi),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const h=[];for(const l in a){const c=a[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new D,mi=new D,Go=new D,gi=new D,ps=new D,ms=new D,hc=new D,Vo=new D,Wo=new D,Xo=new D,qo=new he,$o=new he,Yo=new he;class Nn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),mi.subVectors(n,e),Go.subVectors(t,e);const o=Gn.dot(Gn),a=Gn.dot(mi),h=Gn.dot(Go),l=mi.dot(mi),c=mi.dot(Go),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(l*h-a*c)*f,v=(o*c-a*h)*f;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,i,r,o,a,h){return this.getBarycoord(t,e,n,i,gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,gi.x),h.addScaledVector(o,gi.y),h.addScaledVector(a,gi.z),h)}static getInterpolatedAttribute(t,e,n,i,r,o){return qo.setScalar(0),$o.setScalar(0),Yo.setScalar(0),qo.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector($o,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),mi.subVectors(t,e),Gn.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Gn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ps.subVectors(i,n),ms.subVectors(r,n),Vo.subVectors(t,n);const h=ps.dot(Vo),l=ms.dot(Vo);if(h<=0&&l<=0)return e.copy(n);Wo.subVectors(t,i);const c=ps.dot(Wo),u=ms.dot(Wo);if(c>=0&&u<=c)return e.copy(i);const f=h*u-c*l;if(f<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(n).addScaledVector(ps,o);Xo.subVectors(t,r);const m=ps.dot(Xo),v=ms.dot(Xo);if(v>=0&&m<=v)return e.copy(r);const M=m*l-h*v;if(M<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(ms,a);const _=c*v-m*u;if(_<=0&&u-c>=0&&m-v>=0)return hc.subVectors(r,i),a=(u-c)/(u-c+(m-v)),e.copy(i).addScaledVector(hc,a);const g=1/(_+M+f);return o=M*g,a=f*g,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Ko(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=xl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ko(o,r,t+1/3),this.g=Ko(o,r,t),this.b=Ko(o,r,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return se.workingToColorSpace(Ve.copy(this),t),Math.round(Qt(Ve.r*255,0,255))*65536+Math.round(Qt(Ve.g*255,0,255))*256+Math.round(Qt(Ve.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let h,l;const c=(a+o)/2;if(a===o)h=0,l=0;else{const u=o-a;switch(l=c<=.5?u/(o+a):u/(2-o-a),o){case n:h=(i-r)/u+(i<r?6:0);break;case i:h=(r-n)/u+2;break;case r:h=(n-i)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=dn){se.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Ar);const n=js(Ti.h,Ar.h,e),i=js(Ti.s,Ar.s,e),r=js(Ti.l,Ar.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new zt;zt.NAMES=Dh;let Gd=0;class ss extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=bs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yi extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new D,Rr=new ee;let Vd=0;class si{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}}class Uh extends si{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nh extends si{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends si{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wd=0;const Cn=new ve,jo=new Ie,gs=new D,vn=new lr,Bs=new lr,Ue=new D;class ln extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Nh:Uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(vn.min,Bs.min),vn.expandByPoint(Ue),Ue.addVectors(vn.max,Bs.max),vn.expandByPoint(Ue)):(vn.expandByPoint(Bs.min),vn.expandByPoint(Bs.max))}vn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Ue.fromBufferAttribute(a,l),h&&(gs.fromBufferAttribute(t,l),Ue.add(gs)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let x=0;x<n.count;x++)a[x]=new D,h[x]=new D;const l=new D,c=new D,u=new D,f=new ee,m=new ee,v=new ee,M=new D,_=new D;function g(x,y,S){l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,x),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,S),c.sub(l),u.sub(l),m.sub(f),v.sub(f);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(M.copy(c).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(C),_.copy(u).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(C),a[x].add(M),a[y].add(M),a[S].add(M),h[x].add(_),h[y].add(_),h[S].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,y=T.length;x<y;++x){const S=T[x],C=S.start,P=S.count;for(let k=C,z=C+P;k<z;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const R=new D,b=new D,L=new D,d=new D;function p(x){L.fromBufferAttribute(i,x),d.copy(L);const y=a[x];R.copy(y),R.sub(L.multiplyScalar(L.dot(y))).normalize(),b.crossVectors(d,y);const C=b.dot(h[x])<0?-1:1;o.setXYZW(x,R.x,R.y,R.z,C)}for(let x=0,y=T.length;x<y;++x){const S=T[x],C=S.start,P=S.count;for(let k=C,z=C+P;k<z;k+=3)p(t.getX(k+0)),p(t.getX(k+1)),p(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,h=new D,l=new D,c=new D,u=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),_=t.getX(f+2);i.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,_),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),l.fromBufferAttribute(n,_),a.add(c),h.add(c),l.add(c),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,h){const l=a.array,c=a.itemSize,u=a.normalized,f=new l.constructor(h.length*c);let m=0,v=0;for(let M=0,_=h.length;M<_;M++){a.isInterleavedBufferAttribute?m=h[M]*a.data.stride+a.offset:m=h[M]*c;for(let g=0;g<c;g++)f[v++]=l[m++]}return new si(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],l=t(h,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const f=l[c],m=t(f,n);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const i={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];c.push(m.toJSON(t.data))}c.length>0&&(i[h]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new ve,Hi=new yl,Cr=new cr,dc=new D,Ir=new D,Lr=new D,Pr=new D,Zo=new D,Dr=new D,fc=new D,Ur=new D;class Xe extends Ie{constructor(t=new ln,e=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const c=a[h],u=r[h];c!==0&&(Zo.fromBufferAttribute(u,t),o?Dr.addScaledVector(Zo,c):Dr.addScaledVector(Zo.sub(e),c))}e.add(Dr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Cr.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Cr,dc)===null||Hi.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const _=f[v],g=o[_.materialIndex],T=Math.max(_.start,m.start),R=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let b=T,L=R;b<L;b+=3){const d=a.getX(b),p=a.getX(b+1),x=a.getX(b+2);i=Nr(this,g,t,n,l,c,u,d,p,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let _=v,g=M;_<g;_+=3){const T=a.getX(_),R=a.getX(_+1),b=a.getX(_+2);i=Nr(this,o,t,n,l,c,u,T,R,b),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const _=f[v],g=o[_.materialIndex],T=Math.max(_.start,m.start),R=Math.min(h.count,Math.min(_.start+_.count,m.start+m.count));for(let b=T,L=R;b<L;b+=3){const d=b,p=b+1,x=b+2;i=Nr(this,g,t,n,l,c,u,d,p,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const v=Math.max(0,m.start),M=Math.min(h.count,m.start+m.count);for(let _=v,g=M;_<g;_+=3){const T=_,R=_+1,b=_+2;i=Nr(this,o,t,n,l,c,u,T,R,b),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function Xd(s,t,e,n,i,r,o,a){let h;if(t.side===pn?h=n.intersectTriangle(o,r,i,!0,a):h=n.intersectTriangle(i,r,o,t.side===Ui,a),h===null)return null;Ur.copy(a),Ur.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ur);return l<e.near||l>e.far?null:{distance:l,point:Ur.clone(),object:s}}function Nr(s,t,e,n,i,r,o,a,h,l){s.getVertexPosition(a,Ir),s.getVertexPosition(h,Lr),s.getVertexPosition(l,Pr);const c=Xd(s,t,e,n,Ir,Lr,Pr,fc);if(c){const u=new D;Nn.getBarycoord(fc,Ir,Lr,Pr,u),i&&(c.uv=Nn.getInterpolatedAttribute(i,a,h,l,u,new ee)),r&&(c.uv1=Nn.getInterpolatedAttribute(r,a,h,l,u,new ee)),o&&(c.normal=Nn.getInterpolatedAttribute(o,a,h,l,u,new D),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:h,c:l,normal:new D,materialIndex:0};Nn.getNormal(Ir,Lr,Pr,f.normal),c.face=f,c.barycoord=u}return c}class Ni extends ln{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const h=[],l=[],c=[],u=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,i,o,2),v("x","z","y",1,-1,t,n,-e,i,o,3),v("x","y","z",1,-1,t,e,n,i,r,4),v("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2));function v(M,_,g,T,R,b,L,d,p,x,y){const S=b/p,C=L/x,P=b/2,k=L/2,z=d/2,B=p+1,W=x+1;let Y=0,H=0;const J=new D;for(let it=0;it<W;it++){const ft=it*C-k;for(let Tt=0;Tt<B;Tt++){const Ot=Tt*S-P;J[M]=Ot*T,J[_]=ft*R,J[g]=z,l.push(J.x,J.y,J.z),J[M]=0,J[_]=0,J[g]=d>0?1:-1,c.push(J.x,J.y,J.z),u.push(Tt/p),u.push(1-it/x),Y+=1}}for(let it=0;it<x;it++)for(let ft=0;ft<p;ft++){const Tt=f+ft+B*it,Ot=f+ft+B*(it+1),Wt=f+(ft+1)+B*(it+1),Xt=f+(ft+1)+B*it;h.push(Tt,Ot,Xt),h.push(Ot,Wt,Xt),H+=6}a.addGroup(m,H,y),m+=H,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const n=Is(s[e]);for(const i in n)t[i]=n[i]}return t}function qd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const $d={clone:Is,merge:Je};var Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fh extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new D,pc=new ee,mc=new ee;class Sn extends Fh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/h,e-=o.offsetY*n/l,i*=o.width/h,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _s=-90,vs=1;class jd extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sn(_s,vs,t,e);i.layers=this.layers,this.add(i);const r=new Sn(_s,vs,t,e);r.layers=this.layers,this.add(r);const o=new Sn(_s,vs,t,e);o.layers=this.layers,this.add(o);const a=new Sn(_s,vs,t,e);a.layers=this.layers,this.add(a);const h=new Sn(_s,vs,t,e);h.layers=this.layers,this.add(h);const l=new Sn(_s,vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,h]=e;for(const l of e)this.remove(l);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,h,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,h),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Oh extends an{constructor(t=[],e=As,n,i,r,o,a,h,l,c){super(t,e,n,i,r,o,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zd extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Oh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ni(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Li});r.uniforms.tEquirect.value=e;const o=new Xe(i,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=ti),new jd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class kn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const _=e.getJointPose(M,n),g=this._getHandJoint(l,M);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return a!==null&&(a.visible=i!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new Sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qd extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Qo=new D,tf=new D,ef=new $t;class Xi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qo.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ef.getNormalMatrix(t),i=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new cr,nf=new ee(.5,.5),kr=new D;class bl{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],c=r[4],u=r[5],f=r[6],m=r[7],v=r[8],M=r[9],_=r[10],g=r[11],T=r[12],R=r[13],b=r[14],L=r[15];if(i[0].setComponents(l-o,m-c,g-v,L-T).normalize(),i[1].setComponents(l+o,m+c,g+v,L+T).normalize(),i[2].setComponents(l+a,m+u,g+M,L+R).normalize(),i[3].setComponents(l-a,m-u,g-M,L-R).normalize(),n)i[4].setComponents(h,f,_,b).normalize(),i[5].setComponents(l-h,m-f,g-_,L-b).normalize();else if(i[4].setComponents(l-h,m-f,g-_,L-b).normalize(),e===ei)i[5].setComponents(l+h,m+f,g+_,L+b).normalize();else if(e===ao)i[5].setComponents(h,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);const e=nf.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(kr.x=i.normal.x>0?t.max.x:t.min.x,kr.y=i.normal.y>0?t.max.y:t.min.y,kr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const co=new D,ho=new D,gc=new ve,zs=new yl,Fr=new cr,ta=new D,_c=new D;class sf extends Ie{constructor(t=new ln,e=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)co.fromBufferAttribute(e,i-1),ho.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=co.distanceTo(ho);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;gc.copy(i).invert(),zs.copy(t.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let M=m,_=v-1;M<_;M+=l){const g=c.getX(M),T=c.getX(M+1),R=Or(this,t,zs,h,g,T,M);R&&e.push(R)}if(this.isLineLoop){const M=c.getX(v-1),_=c.getX(m),g=Or(this,t,zs,h,M,_,v-1);g&&e.push(g)}}else{const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let M=m,_=v-1;M<_;M+=l){const g=Or(this,t,zs,h,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){const M=Or(this,t,zs,h,v-1,m,v-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Or(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(co.fromBufferAttribute(a,i),ho.fromBufferAttribute(a,r),e.distanceSqToSegment(co,ho,ta,_c)>n)return;ta.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:_c.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const vc=new D,xc=new D;class rf extends sf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)vc.fromBufferAttribute(e,i),xc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vc.distanceTo(xc);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zh extends ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mc=new ve,nl=new yl,Br=new cr,zr=new D;class of extends Ie{constructor(t=new ln,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;Mc.copy(i).invert(),nl.copy(t.ray).applyMatrix4(Mc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let v=f,M=m;v<M;v++){const _=l.getX(v);zr.fromBufferAttribute(u,_),yc(zr,_,h,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,M=m;v<M;v++)zr.fromBufferAttribute(u,v),yc(zr,v,h,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yc(s,t,e,n,i,r,o){const a=nl.distanceSqToPoint(s);if(a<e){const h=new D;nl.closestPointToPoint(s,h),h.applyMatrix4(n);const l=i.ray.origin.distanceTo(h);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Hh extends an{constructor(t,e,n,i,r,o,a,h,l){super(t,e,n,i,r,o,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gh extends an{constructor(t,e,n=es,i,r,o,a=wn,h=wn,l,c=Qs,u=1){if(c!==Qs&&c!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,h,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vh extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class uo extends ln{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],h=[],l=new D,c=new ee;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(o[f]/t+1)/2,c.y=(o[f+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class El extends ln{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};const l=this;i=Math.floor(i),r=Math.floor(r);const c=[],u=[],f=[],m=[];let v=0;const M=[],_=n/2;let g=0;T(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(c),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(m,2));function T(){const b=new D,L=new D;let d=0;const p=(e-t)/n;for(let x=0;x<=r;x++){const y=[],S=x/r,C=S*(e-t)+t;for(let P=0;P<=i;P++){const k=P/i,z=k*h+a,B=Math.sin(z),W=Math.cos(z);L.x=C*B,L.y=-S*n+_,L.z=C*W,u.push(L.x,L.y,L.z),b.set(B,p,W).normalize(),f.push(b.x,b.y,b.z),m.push(k,1-S),y.push(v++)}M.push(y)}for(let x=0;x<i;x++)for(let y=0;y<r;y++){const S=M[y][x],C=M[y+1][x],P=M[y+1][x+1],k=M[y][x+1];(t>0||y!==0)&&(c.push(S,C,k),d+=3),(e>0||y!==r-1)&&(c.push(C,P,k),d+=3)}l.addGroup(g,d,0),g+=d}function R(b){const L=v,d=new ee,p=new D;let x=0;const y=b===!0?t:e,S=b===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,_*S,0),f.push(0,S,0),m.push(.5,.5),v++;const C=v;for(let P=0;P<=i;P++){const z=P/i*h+a,B=Math.cos(z),W=Math.sin(z);p.x=y*W,p.y=_*S,p.z=y*B,u.push(p.x,p.y,p.z),f.push(0,S,0),d.x=B*.5+.5,d.y=W*.5*S+.5,m.push(d.x,d.y),v++}for(let P=0;P<i;P++){const k=L+P,z=C+P;b===!0?c.push(z,z+1,k):c.push(z+1,z,k),x+=3}l.addGroup(g,x,b===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Hr=new D,Gr=new D,ea=new D,Vr=new Nn;class af extends ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Es*e),o=t.getIndex(),a=t.getAttribute("position"),h=o?o.count:a.count,l=[0,0,0],c=["a","b","c"],u=new Array(3),f={},m=[];for(let v=0;v<h;v+=3){o?(l[0]=o.getX(v),l[1]=o.getX(v+1),l[2]=o.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:M,b:_,c:g}=Vr;if(M.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Vr.getNormal(ea),u[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,u[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const R=(T+1)%3,b=u[T],L=u[R],d=Vr[c[T]],p=Vr[c[R]],x=`${b}_${L}`,y=`${L}_${b}`;y in f&&f[y]?(ea.dot(f[y].normal)<=r&&(m.push(d.x,d.y,d.z),m.push(p.x,p.y,p.z)),f[y]=null):x in f||(f[x]={index0:l[T],index1:l[R],normal:ea.clone()})}}for(const v in f)if(f[v]){const{index0:M,index1:_}=f[v];Hr.fromBufferAttribute(a,M),Gr.fromBufferAttribute(a,_),m.push(Hr.x,Hr.y,Hr.z),m.push(Gr.x,Gr.y,Gr.z)}this.setAttribute("position",new _e(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class go extends ln{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(i),l=a+1,c=h+1,u=t/a,f=e/h,m=[],v=[],M=[],_=[];for(let g=0;g<c;g++){const T=g*f-o;for(let R=0;R<l;R++){const b=R*u-r;v.push(b,-T,0),M.push(0,0,1),_.push(R/a),_.push(1-g/h)}}for(let g=0;g<h;g++)for(let T=0;T<a;T++){const R=T+l*g,b=T+l*(g+1),L=T+1+l*(g+1),d=T+1+l*g;m.push(R,b,d),m.push(b,L,d)}this.setIndex(m),this.setAttribute("position",new _e(v,3)),this.setAttribute("normal",new _e(M,3)),this.setAttribute("uv",new _e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.width,t.height,t.widthSegments,t.heightSegments)}}class wl extends ln{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],h=[],l=[],c=[];let u=t;const f=(e-t)/i,m=new D,v=new ee;for(let M=0;M<=i;M++){for(let _=0;_<=n;_++){const g=r+_/n*o;m.x=u*Math.cos(g),m.y=u*Math.sin(g),h.push(m.x,m.y,m.z),l.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,c.push(v.x,v.y)}u+=f}for(let M=0;M<i;M++){const _=M*(n+1);for(let g=0;g<n;g++){const T=g+_,R=T,b=T+n+1,L=T+n+2,d=T+1;a.push(R,b,d),a.push(b,L,d)}}this.setIndex(a),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yn extends ss{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lf extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cf extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Tl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hf extends Tl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new ve,Sc=new D,bc=new D;class Wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ec=new ve,Hs=new D,ia=new D;class uf extends Wh{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hs),ia.copy(n.position),ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ia),n.updateMatrixWorld(),i.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec,n.coordinateSystem,n.reversedDepth)}}class wc extends Tl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xh extends Fh{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,h=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class df extends Wh{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ff extends Tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new df}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pf extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Tc(s,t,e,n){const i=mf(n);switch(e){case Eh:return s*t;case Th:return s*t/i.components*i.byteLength;case gl:return s*t/i.components*i.byteLength;case Ah:return s*t*2/i.components*i.byteLength;case _l:return s*t*2/i.components*i.byteLength;case wh:return s*t*3/i.components*i.byteLength;case $n:return s*t*4/i.components*i.byteLength;case vl:return s*t*4/i.components*i.byteLength;case jr:case Zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ca:case La:return Math.max(s,16)*Math.max(t,8)/4;case Ra:case Ia:return Math.max(s,8)*Math.max(t,8)/2;case Pa:case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ka:case ja:case Za:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ja:case Qa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case tl:case el:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mf(s){switch(s){case ai:case Mh:return{byteLength:1,components:1};case Zs:case yh:case or:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case es:case fl:case vi:return{byteLength:4,components:1};case Sh:case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gf(s){const t=new WeakMap;function e(a,h){const l=a.array,c=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,l,c),a.onUploadCallback();let m;if(l instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=s.SHORT;else if(l instanceof Uint32Array)m=s.UNSIGNED_INT;else if(l instanceof Int32Array)m=s.INT;else if(l instanceof Int8Array)m=s.BYTE;else if(l instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,h,l){const c=h.array,u=h.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,c);else{u.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<u.length;m++){const v=u[f],M=u[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,u[f]=M)}u.length=f+1;for(let m=0,v=u.length;m<v;m++){const M=u[m];s.bufferSubData(l,M.start*c.BYTES_PER_ELEMENT,c,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(s.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:i,remove:r,update:o}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Lf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,zm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:_f,alphahash_pars_fragment:vf,alphamap_fragment:xf,alphamap_pars_fragment:Mf,alphatest_fragment:yf,alphatest_pars_fragment:Sf,aomap_fragment:bf,aomap_pars_fragment:Ef,batching_pars_vertex:wf,batching_vertex:Tf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:If,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Nf,color_fragment:kf,color_pars_fragment:Ff,color_pars_vertex:Of,color_vertex:Bf,common:zf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:$f,colorspace_pars_fragment:Yf,envmap_fragment:Kf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:cp,envmap_vertex:Qf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:vp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Sp,map_fragment:bp,map_pars_fragment:Ep,map_particle_fragment:wp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Cp,morphcolor_vertex:Ip,morphnormal_vertex:Lp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Dp,normal_fragment_begin:Up,normal_fragment_maps:Np,normal_pars_fragment:kp,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Vp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:$p,dithering_fragment:Yp,dithering_pars_fragment:Kp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:vm,backgroundCube_frag:xm,cube_vert:Mm,cube_frag:ym,depth_vert:Sm,depth_frag:bm,distanceRGBA_vert:Em,distanceRGBA_frag:wm,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Im,meshbasic_frag:Lm,meshlambert_vert:Pm,meshlambert_frag:Dm,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:km,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:Hm,meshtoon_vert:Gm,meshtoon_frag:Vm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:$m,sprite_vert:Ym,sprite_frag:Km},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Qn={basic:{uniforms:Je([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Je([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Je([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Je([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Je([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Je([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Je([at.points,at.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Je([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Je([at.common,at.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Je([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Je([at.sprite,at.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Je([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Je([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Qn.physical={uniforms:Je([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Wr={r:0,b:0,g:0},Vi=new li,jm=new ve;function Zm(s,t,e,n,i,r,o){const a=new zt(0);let h=r===!0?0:1,l,c,u=null,f=0,m=null;function v(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?e:t).get(b)),b}function M(R){let b=!1;const L=v(R);L===null?g(a,h):L&&L.isColor&&(g(L,1),b=!0);const d=s.xr.getEnvironmentBlendMode();d==="additive"?n.buffers.color.setClear(0,0,0,1,o):d==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(R,b){const L=v(b);L&&(L.isCubeTexture||L.mapping===mo)?(c===void 0&&(c=new Xe(new Ni(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Is(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(d,p,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Vi.copy(b.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),c.material.uniforms.envMap.value=L,c.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(Vi)),c.material.toneMapped=se.getTransfer(L.colorSpace)!==ce,(u!==L||f!==L.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=L,f=L.version,m=s.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Xe(new go(2,2),new ci({name:"BackgroundMaterial",uniforms:Is(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=se.getTransfer(L.colorSpace)!==ce,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=L,f=L.version,m=s.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function g(R,b){R.getRGB(Wr,kh(s)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,b,o)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,b=1){a.set(R),h=b,g(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,g(a,h)},render:M,addToRenderList:_,dispose:T}}function Jm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,C,P,k,z){let B=!1;const W=u(k,P,C);r!==W&&(r=W,l(r.object)),B=m(S,k,P,z),B&&v(S,k,P,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(S,C,P,k),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function c(S){return s.deleteVertexArray(S)}function u(S,C,P){const k=P.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let B=z[C.id];B===void 0&&(B={},z[C.id]=B);let W=B[k];return W===void 0&&(W=f(h()),B[k]=W),W}function f(S){const C=[],P=[],k=[];for(let z=0;z<e;z++)C[z]=0,P[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:k,object:S,attributes:{},index:null}}function m(S,C,P,k){const z=r.attributes,B=C.attributes;let W=0;const Y=P.getAttributes();for(const H in Y)if(Y[H].location>=0){const it=z[H];let ft=B[H];if(ft===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),it===void 0||it.attribute!==ft||ft&&it.data!==ft.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function v(S,C,P,k){const z={},B=C.attributes;let W=0;const Y=P.getAttributes();for(const H in Y)if(Y[H].location>=0){let it=B[H];it===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(it=S.instanceColor));const ft={};ft.attribute=it,it&&it.data&&(ft.data=it.data),z[H]=ft,W++}r.attributes=z,r.attributesNum=W,r.index=k}function M(){const S=r.newAttributes;for(let C=0,P=S.length;C<P;C++)S[C]=0}function _(S){g(S,0)}function g(S,C){const P=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;P[S]=1,k[S]===0&&(s.enableVertexAttribArray(S),k[S]=1),z[S]!==C&&(s.vertexAttribDivisor(S,C),z[S]=C)}function T(){const S=r.newAttributes,C=r.enabledAttributes;for(let P=0,k=C.length;P<k;P++)C[P]!==S[P]&&(s.disableVertexAttribArray(P),C[P]=0)}function R(S,C,P,k,z,B,W){W===!0?s.vertexAttribIPointer(S,C,P,z,B):s.vertexAttribPointer(S,C,P,k,z,B)}function b(S,C,P,k){M();const z=k.attributes,B=P.getAttributes(),W=C.defaultAttributeValues;for(const Y in B){const H=B[Y];if(H.location>=0){let J=z[Y];if(J===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const it=J.normalized,ft=J.itemSize,Tt=t.get(J);if(Tt===void 0)continue;const Ot=Tt.buffer,Wt=Tt.type,Xt=Tt.bytesPerElement,q=Wt===s.INT||Wt===s.UNSIGNED_INT||J.gpuType===fl;if(J.isInterleavedBufferAttribute){const j=J.data,ut=j.stride,Rt=J.offset;if(j.isInstancedInterleavedBuffer){for(let pt=0;pt<H.locationSize;pt++)g(H.location+pt,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pt=0;pt<H.locationSize;pt++)_(H.location+pt);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let pt=0;pt<H.locationSize;pt++)R(H.location+pt,ft/H.locationSize,Wt,it,ut*Xt,(Rt+ft/H.locationSize*pt)*Xt,q)}else{if(J.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)g(H.location+j,J.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<H.locationSize;j++)_(H.location+j);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let j=0;j<H.locationSize;j++)R(H.location+j,ft/H.locationSize,Wt,it,ft*Xt,ft/H.locationSize*j*Xt,q)}}else if(W!==void 0){const it=W[Y];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(H.location,it);break;case 3:s.vertexAttrib3fv(H.location,it);break;case 4:s.vertexAttrib4fv(H.location,it);break;default:s.vertexAttrib1fv(H.location,it)}}}}T()}function L(){x();for(const S in n){const C=n[S];for(const P in C){const k=C[P];for(const z in k)c(k[z].object),delete k[z];delete C[P]}delete n[S]}}function d(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const P in C){const k=C[P];for(const z in k)c(k[z].object),delete k[z];delete C[P]}delete n[S.id]}function p(S){for(const C in n){const P=n[C];if(P[S.id]===void 0)continue;const k=P[S.id];for(const z in k)c(k[z].object),delete k[z];delete P[S.id]}}function x(){y(),o=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:x,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:d,releaseStatesOfProgram:p,initAttributes:M,enableAttribute:_,disableUnusedAttributes:T}}function Qm(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let m=0;for(let v=0;v<u;v++)m+=c[v];e.update(m,n,1)}function h(l,c,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)o(l[v],c[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,u);let v=0;for(let M=0;M<u;M++)v+=c[M]*f[M];e.update(v,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function t0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const p=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(p){return!(p!==$n&&n.convert(p)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(p){const x=p===or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(p!==ai&&n.convert(p)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&p!==vi&&!x)}function h(p){if(p==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=h(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,d=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:L,maxSamples:d}}function e0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Xi,a=new $t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,m){const v=u.clippingPlanes,M=u.clipIntersection,_=u.clipShadows,g=s.get(u);if(!i||v===null||v.length===0||r&&!_)r?c(null):l();else{const T=r?0:n,R=T*4;let b=g.clippingState||null;h.value=b,b=c(v,f,R,m);for(let L=0;L!==R;++L)b[L]=e[L];g.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,m,v){const M=u!==null?u.length:0;let _=null;if(M!==0){if(_=h.value,v!==!0||_===null){const g=m+M*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(_===null||_.length<g)&&(_=new Float32Array(g));for(let R=0,b=m;R!==M;++R,b+=4)o.copy(u[R]).applyMatrix4(T,a),o.normal.toArray(_,b),_[b+3]=o.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}function n0(s){let t=new WeakMap;function e(o,a){return a===Ea?o.mapping=As:a===wa&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===wa)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new Zd(h.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ss=4,Ac=[.125,.215,.35,.446,.526,.582],Ki=20,sa=new Xh,Rc=new zt;let ra=null,oa=0,aa=0,la=!1;const qi=(1+Math.sqrt(5))/2,xs=1/qi,Cc=[new D(-qi,xs,0),new D(qi,xs,0),new D(-xs,0,qi),new D(xs,0,qi),new D(0,qi,-xs),new D(0,qi,xs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],i0=new D;class Ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=i0}=r;ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,i,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=la,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:or,format:$n,colorSpace:Cs,depthBuffer:!1},i=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,t,e)}return i}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,n,i,r){const h=new Sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Rc),u.toneMapping=Pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const M=new Yi({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new Xe(new Ni,M);let g=!1;const T=t.background;T?T.isColor&&(M.color.copy(T),t.background=null,g=!0):(M.color.copy(Rc),g=!0);for(let R=0;R<6;R++){const b=R%3;b===0?(h.up.set(0,l[R],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+c[R],r.y,r.z)):b===1?(h.up.set(0,0,l[R]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+c[R],r.z)):(h.up.set(0,l[R],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+c[R]));const L=this._cubeSize;Xr(i,b*L,R>2?L:0,L,L),u.setRenderTarget(i),g&&u.render(_,h),u.render(t,h)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===As||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const h=this._cubeSize;Xr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cc[(i-r-1)%Cc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Xe(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),M=r/v,_=isFinite(r)?1+Math.floor(c*M):Ki;_>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ki}`);const g=[];let T=0;for(let p=0;p<Ki;++p){const x=p/M,y=Math.exp(-x*x/2);g.push(y),p===0?T+=y:p<_&&(T+=2*y)}for(let p=0;p<g.length;p++)g[p]=g[p]/T;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:R}=this;f.dTheta.value=v,f.mipInt.value=R-n;const b=this._sizeLods[i],L=3*b*(i>R-Ss?i-R+Ss:0),d=4*(this._cubeSize-b);Xr(e,L,d,3*b,2*b),h.setRenderTarget(e),h.render(u,sa)}}function s0(s){const t=[],e=[],n=[];let i=s;const r=s-Ss+1+Ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let h=1/a;o>s-Ss?h=Ac[o-s+Ss-1]:o===0&&(h=0),n.push(h);const l=1/(a-2),c=-l,u=1+l,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,v=6,M=3,_=2,g=1,T=new Float32Array(M*v*m),R=new Float32Array(_*v*m),b=new Float32Array(g*v*m);for(let d=0;d<m;d++){const p=d%3*2/3-1,x=d>2?0:-1,y=[p,x,0,p+2/3,x,0,p+2/3,x+1,0,p,x,0,p+2/3,x+1,0,p,x+1,0];T.set(y,M*v*d),R.set(f,_*v*d);const S=[d,d,d,d,d,d];b.set(S,g*v*d)}const L=new ln;L.setAttribute("position",new si(T,M)),L.setAttribute("uv",new si(R,_)),L.setAttribute("faceIndex",new si(b,g)),t.push(L),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(s,t,e){const n=new ns(s,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function r0(s,t,e){const n=new Float32Array(Ki),i=new D(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Dc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function o0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,l=h===Ea||h===wa,c=h===As||h===Rs;if(l||c){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ic(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||c&&m&&i(m)?(e===null&&(e=new Ic(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let h=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&h++;return h===l}function r(a){const h=a.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function a0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function l0(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const m in f)t.update(f[m],s.ARRAY_BUFFER)}function l(u){const f=[],m=u.index,v=u.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let R=0,b=T.length;R<b;R+=3){const L=T[R+0],d=T[R+1],p=T[R+2];f.push(L,d,d,p,p,L)}}else if(v!==void 0){const T=v.array;M=v.version;for(let R=0,b=T.length/3-1;R<b;R+=3){const L=R+0,d=R+1,p=R+2;f.push(L,d,d,p,p,L)}}else return;const _=new(Ih(f)?Nh:Uh)(f,1);_.version=M;const g=r.get(u);g&&t.remove(g),r.set(u,_)}function c(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:c}}function c0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function h(f,m){s.drawElements(n,m,r,f*o),e.update(m,n,1)}function l(f,m,v){v!==0&&(s.drawElementsInstanced(n,m,r,f*o,v),e.update(m,n,v))}function c(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,v);let _=0;for(let g=0;g<v;g++)_+=m[g];e.update(_,n,1)}function u(f,m,v,M){if(v===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)l(f[g]/o,m[g],M[g]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,M,0,v);let g=0;for(let T=0;T<v;T++)g+=m[T]*M[T];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function h0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function u0(s,t,e){const n=new WeakMap,i=new he;function r(o,a,h){const l=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),M===!0&&(b=2),_===!0&&(b=3);let L=a.attributes.position.count*b,d=1;L>t.maxTextureSize&&(d=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const p=new Float32Array(L*d*4*u),x=new Lh(p,L,d,u);x.type=vi,x.needsUpdate=!0;const y=b*4;for(let C=0;C<u;C++){const P=g[C],k=T[C],z=R[C],B=L*d*4*C;for(let W=0;W<P.count;W++){const Y=W*y;v===!0&&(i.fromBufferAttribute(P,W),p[B+Y+0]=i.x,p[B+Y+1]=i.y,p[B+Y+2]=i.z,p[B+Y+3]=0),M===!0&&(i.fromBufferAttribute(k,W),p[B+Y+4]=i.x,p[B+Y+5]=i.y,p[B+Y+6]=i.z,p[B+Y+7]=0),_===!0&&(i.fromBufferAttribute(z,W),p[B+Y+8]=i.x,p[B+Y+9]=i.y,p[B+Y+10]=i.z,p[B+Y+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new ee(L,d)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let v=0;for(let _=0;_<l.length;_++)v+=l[_];const M=a.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",l)}h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function d0(s,t,e,n){let i=new WeakMap;function r(h){const l=n.render.frame,c=h.geometry,u=t.get(h,c);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),i.get(h)!==l&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),i.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const $h=new an,Uc=new Gh(1,1),Yh=new Lh,Kh=new Ud,jh=new Oh,Nc=[],kc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Bc=new Float32Array(4);function Ds(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Nc[i];if(r===void 0&&(r=new Float32Array(i),Nc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _o(s,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function f0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function p0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function m0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function g0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function _0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Le(e,n))return;Bc.set(n),s.uniformMatrix2fv(this.addr,!1,Bc),Pe(e,n)}}function v0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Le(e,n))return;Oc.set(n),s.uniformMatrix3fv(this.addr,!1,Oc),Pe(e,n)}}function x0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Le(e,n))return;Fc.set(n),s.uniformMatrix4fv(this.addr,!1,Fc),Pe(e,n)}}function M0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function S0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function b0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function E0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function w0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function T0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function A0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function R0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uc.compareFunction=Ch,r=Uc):r=$h,e.setTexture2D(t||r,i)}function C0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kh,i)}function I0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jh,i)}function L0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Yh,i)}function P0(s){switch(s){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return M0;case 35667:case 35671:return y0;case 35668:case 35672:return S0;case 35669:case 35673:return b0;case 5125:return E0;case 36294:return w0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return L0}}function D0(s,t){s.uniform1fv(this.addr,t)}function U0(s,t){const e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function N0(s,t){const e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function k0(s,t){const e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function F0(s,t){const e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function O0(s,t){const e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function B0(s,t){const e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function z0(s,t){s.uniform1iv(this.addr,t)}function H0(s,t){s.uniform2iv(this.addr,t)}function G0(s,t){s.uniform3iv(this.addr,t)}function V0(s,t){s.uniform4iv(this.addr,t)}function W0(s,t){s.uniform1uiv(this.addr,t)}function X0(s,t){s.uniform2uiv(this.addr,t)}function q0(s,t){s.uniform3uiv(this.addr,t)}function $0(s,t){s.uniform4uiv(this.addr,t)}function Y0(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||$h,r[o])}function K0(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Kh,r[o])}function j0(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||jh,r[o])}function Z0(s,t,e){const n=this.cache,i=t.length,r=_o(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Yh,r[o])}function J0(s){switch(s){case 5126:return D0;case 35664:return U0;case 35665:return N0;case 35666:return k0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return Z0}}class Q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}}class tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}}class eg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function zc(s,t){s.seq.push(t),s.map[t.id]=t}function ng(s,t,e){const n=s.name,i=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),o=ca.lastIndex;let a=r[1];const h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===i){zc(e,l===void 0?new Q0(a,s,t):new tg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new eg(a),zc(e,u)),e=u}}}class to{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ng(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Hc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ig=37297;let sg=0;function rg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gc=new $t;function og(s){se._getMatrix(Gc,se.workingColorSpace,s);const t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case oo:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+rg(s.getShaderSource(t),a)}else return r}function ag(s,t){const e=og(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lg(s,t){let e;switch(t){case $u:e="Linear";break;case Yu:e="Reinhard";break;case Ku:e="Cineon";break;case ju:e="ACESFilmic";break;case Ju:e="AgX";break;case Qu:e="Neutral";break;case Zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new D;function cg(){se.getLuminanceCoefficients(qr);const s=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function ug(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Xs(s){return s!==""}function Wc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(s){return s.replace(fg,mg)}const pg=new Map;function mg(s,t){let e=Kt[t];if(e===void 0){const n=pg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}const gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(s){return s.replace(gg,_g)}function _g(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $c(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function xg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function yg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dl:t="ENVMAP_BLENDING_MULTIPLY";break;case Xu:t="ENVMAP_BLENDING_MIX";break;case qu:t="ENVMAP_BLENDING_ADD";break}return t}function Sg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bg(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=vg(e),l=xg(e),c=Mg(e),u=yg(e),f=Sg(e),m=hg(e),v=ug(r),M=i.createProgram();let _,g,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xs).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xs).join(`
`),g.length>0&&(g+=`
`)):(_=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),g=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,ag("linearToOutputTexel",e.outputColorSpace),cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=il(o),o=Wc(o,e),o=Xc(o,e),a=il(a),a=Wc(a,e),a=Xc(a,e),o=qc(o),a=qc(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const R=T+_+o,b=T+g+a,L=Hc(i,i.VERTEX_SHADER,R),d=Hc(i,i.FRAGMENT_SHADER,b);i.attachShader(M,L),i.attachShader(M,d),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function p(C){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(M)||"",k=i.getShaderInfoLog(L)||"",z=i.getShaderInfoLog(d)||"",B=P.trim(),W=k.trim(),Y=z.trim();let H=!0,J=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,L,d);else{const it=Vc(i,L,"vertex"),ft=Vc(i,d,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+it+`
`+ft)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||Y==="")&&(J=!1);J&&(C.diagnostics={runnable:H,programLog:B,vertexShader:{log:W,prefix:_},fragmentShader:{log:Y,prefix:g}})}i.deleteShader(L),i.deleteShader(d),x=new to(i,M),y=dg(i,M)}let x;this.getUniforms=function(){return x===void 0&&p(this),x};let y;this.getAttributes=function(){return y===void 0&&p(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(M,ig)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=d,this}let Eg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tg(t),e.set(t,n)),n}}class Tg{constructor(t){this.id=Eg++,this.code=t,this.usedTimes=0}}function Ag(s,t,e,n,i,r,o){const a=new Ph,h=new wg,l=new Set,c=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,S,C,P,k){const z=P.fog,B=k.geometry,W=y.isMeshStandardMaterial?P.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=Y&&Y.mapping===mo?Y.image.height:null,J=v[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ft=it!==void 0?it.length:0;let Tt=0;B.morphAttributes.position!==void 0&&(Tt=1),B.morphAttributes.normal!==void 0&&(Tt=2),B.morphAttributes.color!==void 0&&(Tt=3);let Ot,Wt,Xt,q;if(J){const oe=Qn[J];Ot=oe.vertexShader,Wt=oe.fragmentShader}else Ot=y.vertexShader,Wt=y.fragmentShader,h.update(y),Xt=h.getVertexShaderID(y),q=h.getFragmentShaderID(y);const j=s.getRenderTarget(),ut=s.state.buffers.depth.getReversed(),Rt=k.isInstancedMesh===!0,pt=k.isBatchedMesh===!0,Bt=!!y.map,Se=!!y.matcap,I=!!Y,me=!!y.aoMap,Vt=!!y.lightMap,Nt=!!y.bumpMap,xt=!!y.normalMap,ge=!!y.displacementMap,Mt=!!y.emissiveMap,Yt=!!y.metalnessMap,De=!!y.roughnessMap,be=y.anisotropy>0,A=y.clearcoat>0,E=y.dispersion>0,O=y.iridescence>0,$=y.sheen>0,Z=y.transmission>0,X=be&&!!y.anisotropyMap,wt=A&&!!y.clearcoatMap,rt=A&&!!y.clearcoatNormalMap,St=A&&!!y.clearcoatRoughnessMap,bt=O&&!!y.iridescenceMap,et=O&&!!y.iridescenceThicknessMap,dt=$&&!!y.sheenColorMap,Ut=$&&!!y.sheenRoughnessMap,Et=!!y.specularMap,lt=!!y.specularColorMap,qt=!!y.specularIntensityMap,U=Z&&!!y.transmissionMap,nt=Z&&!!y.thicknessMap,ot=!!y.gradientMap,gt=!!y.alphaMap,Q=y.alphaTest>0,K=!!y.alphaHash,vt=!!y.extensions;let Ht=Pi;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const de={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ot,fragmentShader:Wt,defines:y.defines,customVertexShaderID:Xt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:pt,batchingColor:pt&&k._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&k.instanceColor!==null,instancingMorph:Rt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Cs,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:Se,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:H,aoMap:me,lightMap:Vt,bumpMap:Nt,normalMap:xt,displacementMap:f&&ge,emissiveMap:Mt,normalMapObjectSpace:xt&&y.normalMapType===id,normalMapTangentSpace:xt&&y.normalMapType===Rh,metalnessMap:Yt,roughnessMap:De,anisotropy:be,anisotropyMap:X,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:E,iridescence:O,iridescenceMap:bt,iridescenceThicknessMap:et,sheen:$,sheenColorMap:dt,sheenRoughnessMap:Ut,specularMap:Et,specularColorMap:lt,specularIntensityMap:qt,transmission:Z,transmissionMap:U,thicknessMap:nt,gradientMap:ot,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:Q,alphaHash:K,combine:y.combine,mapUv:Bt&&M(y.map.channel),aoMapUv:me&&M(y.aoMap.channel),lightMapUv:Vt&&M(y.lightMap.channel),bumpMapUv:Nt&&M(y.bumpMap.channel),normalMapUv:xt&&M(y.normalMap.channel),displacementMapUv:ge&&M(y.displacementMap.channel),emissiveMapUv:Mt&&M(y.emissiveMap.channel),metalnessMapUv:Yt&&M(y.metalnessMap.channel),roughnessMapUv:De&&M(y.roughnessMap.channel),anisotropyMapUv:X&&M(y.anisotropyMap.channel),clearcoatMapUv:wt&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:rt&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&M(y.sheenRoughnessMap.channel),specularMapUv:Et&&M(y.specularMap.channel),specularColorMapUv:lt&&M(y.specularColorMap.channel),specularIntensityMapUv:qt&&M(y.specularIntensityMap.channel),transmissionMapUv:U&&M(y.transmissionMap.channel),thicknessMapUv:nt&&M(y.thicknessMap.channel),alphaMapUv:gt&&M(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||be),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Bt||gt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ut,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Tt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===ce,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&se.getTransfer(y.emissiveMap.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ke,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function g(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(T(S,y),R(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function R(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){const S=v[y.type];let C;if(S){const P=Qn[S];C=$d.clone(P.uniforms)}else C=y.uniforms;return C}function L(y,S){let C;for(let P=0,k=c.length;P<k;P++){const z=c[P];if(z.cacheKey===S){C=z,++C.usedTimes;break}}return C===void 0&&(C=new bg(s,S,y,r),c.push(C)),C}function d(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function p(y){h.remove(y)}function x(){h.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:L,releaseProgram:d,releaseShaderCache:p,programs:c,dispose:x}}function Rg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,h){s.get(o)[a]=h}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Cg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,m,v,M,_){let g=s[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:M,group:_},s[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=m,g.groupOrder=v,g.renderOrder=u.renderOrder,g.z=M,g.group=_),t++,g}function a(u,f,m,v,M,_){const g=o(u,f,m,v,M,_);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function h(u,f,m,v,M,_){const g=o(u,f,m,v,M,_);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,f){e.length>1&&e.sort(u||Cg),n.length>1&&n.sort(f||Yc),i.length>1&&i.sort(f||Yc)}function c(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:h,finish:c,sort:l}}function Ig(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Kc,s.set(n,[o])):i>=r.length?(o=new Kc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Pg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dg=0;function Ug(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ng(s){const t=new Lg,e=Pg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new ve,o=new ve;function a(l){let c=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,M=0,_=0,g=0,T=0,R=0,b=0,L=0,d=0,p=0;l.sort(Ug);for(let y=0,S=l.length;y<S;y++){const C=l[y],P=C.color,k=C.intensity,z=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=P.r*k,u+=P.g*k,f+=P.b*k;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],k);p++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,H=e.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=C.shadow.matrix,T++}n.directional[m]=W,m++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(P).multiplyScalar(k),W.distance=z,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[M]=W;const Y=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,Y.updateMatrices(C),C.castShadow&&d++),n.spotLightMatrix[M]=Y.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=B,b++}M++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(P).multiplyScalar(k),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=W,_++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const Y=C.shadow,H=e.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=C.shadow.matrix,R++}n.point[v]=W,v++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(k),W.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[g]=W,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==M||x.rectAreaLength!==_||x.hemiLength!==g||x.numDirectionalShadows!==T||x.numPointShadows!==R||x.numSpotShadows!==b||x.numSpotMaps!==L||x.numLightProbes!==p)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=_,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+L-d,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=d,n.numLightProbes=p,x.directionalLength=m,x.pointLength=v,x.spotLength=M,x.rectAreaLength=_,x.hemiLength=g,x.numDirectionalShadows=T,x.numPointShadows=R,x.numSpotShadows=b,x.numSpotMaps=L,x.numLightProbes=p,n.version=Dg++)}function h(l,c){let u=0,f=0,m=0,v=0,M=0;const _=c.matrixWorldInverse;for(let g=0,T=l.length;g<T;g++){const R=l[g];if(R.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),u++}else if(R.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),m++}else if(R.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),o.identity(),r.copy(R.matrixWorld),r.premultiply(_),o.extractRotation(r),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),f++}else if(R.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(_),M++}}}return{setup:a,setupView:h,state:n}}function jc(s){const t=new Ng(s),e=[],n=[];function i(c){l.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function h(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function kg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new jc(s),t.set(i,[a])):r>=o.length?(a=new jc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`;function Bg(s,t,e){let n=new bl;const i=new ee,r=new ee,o=new he,a=new lf({depthPacking:nd}),h=new cf,l={},c=e.maxTextureSize,u={[Ui]:pn,[pn]:Ui,[ke]:ke},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new ln;v.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Xe(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let g=this.type;this.render=function(d,p,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||d.length===0)return;const y=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Li),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const k=g!==_i&&this.type===_i,z=g===_i&&this.type!==_i;for(let B=0,W=d.length;B<W;B++){const Y=d[B],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const J=H.getFrameExtents();if(i.multiply(J),r.copy(H.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/J.x),i.x=r.x*J.x,H.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/J.y),i.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||k===!0||z===!0){const ft=this.type!==_i?{minFilter:wn,magFilter:wn}:{};H.map!==null&&H.map.dispose(),H.map=new ns(i.x,i.y,ft),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const it=H.getViewportCount();for(let ft=0;ft<it;ft++){const Tt=H.getViewport(ft);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),P.viewport(o),H.updateMatrices(Y,ft),n=H.getFrustum(),b(p,x,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===_i&&T(H,x),H.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(y,S,C)};function T(d,p){const x=t.update(M);f.defines.VSM_SAMPLES!==d.blurSamples&&(f.defines.VSM_SAMPLES=d.blurSamples,m.defines.VSM_SAMPLES=d.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),d.mapPass===null&&(d.mapPass=new ns(i.x,i.y)),f.uniforms.shadow_pass.value=d.map.texture,f.uniforms.resolution.value=d.mapSize,f.uniforms.radius.value=d.radius,s.setRenderTarget(d.mapPass),s.clear(),s.renderBufferDirect(p,null,x,f,M,null),m.uniforms.shadow_pass.value=d.mapPass.texture,m.uniforms.resolution.value=d.mapSize,m.uniforms.radius.value=d.radius,s.setRenderTarget(d.map),s.clear(),s.renderBufferDirect(p,null,x,m,M,null)}function R(d,p,x,y){let S=null;const C=x.isPointLight===!0?d.customDistanceMaterial:d.customDepthMaterial;if(C!==void 0)S=C;else if(S=x.isPointLight===!0?h:a,s.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){const P=S.uuid,k=p.uuid;let z=l[P];z===void 0&&(z={},l[P]=z);let B=z[k];B===void 0&&(B=S.clone(),z[k]=B,p.addEventListener("dispose",L)),S=B}if(S.visible=p.visible,S.wireframe=p.wireframe,y===_i?S.side=p.shadowSide!==null?p.shadowSide:p.side:S.side=p.shadowSide!==null?p.shadowSide:u[p.side],S.alphaMap=p.alphaMap,S.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,S.map=p.map,S.clipShadows=p.clipShadows,S.clippingPlanes=p.clippingPlanes,S.clipIntersection=p.clipIntersection,S.displacementMap=p.displacementMap,S.displacementScale=p.displacementScale,S.displacementBias=p.displacementBias,S.wireframeLinewidth=p.wireframeLinewidth,S.linewidth=p.linewidth,x.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=s.properties.get(S);P.light=x}return S}function b(d,p,x,y,S){if(d.visible===!1)return;if(d.layers.test(p.layers)&&(d.isMesh||d.isLine||d.isPoints)&&(d.castShadow||d.receiveShadow&&S===_i)&&(!d.frustumCulled||n.intersectsObject(d))){d.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,d.matrixWorld);const k=t.update(d),z=d.material;if(Array.isArray(z)){const B=k.groups;for(let W=0,Y=B.length;W<Y;W++){const H=B[W],J=z[H.materialIndex];if(J&&J.visible){const it=R(d,J,y,S);d.onBeforeShadow(s,d,p,x,k,it,H),s.renderBufferDirect(x,null,k,it,d,H),d.onAfterShadow(s,d,p,x,k,it,H)}}}else if(z.visible){const B=R(d,z,y,S);d.onBeforeShadow(s,d,p,x,k,B,null),s.renderBufferDirect(x,null,k,B,d,null),d.onAfterShadow(s,d,p,x,k,B,null)}}const P=d.children;for(let k=0,z=P.length;k<z;k++)b(P[k],p,x,y,S)}function L(d){d.target.removeEventListener("dispose",L);for(const x in l){const y=l[x],S=d.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const zg={[_a]:va,[xa]:Sa,[Ma]:ba,[Ts]:ya,[va]:_a,[Sa]:xa,[ba]:Ma,[ya]:Ts};function Hg(s,t){function e(){let U=!1;const nt=new he;let ot=null;const gt=new he(0,0,0,0);return{setMask:function(Q){ot!==Q&&!U&&(s.colorMask(Q,Q,Q,Q),ot=Q)},setLocked:function(Q){U=Q},setClear:function(Q,K,vt,Ht,de){de===!0&&(Q*=Ht,K*=Ht,vt*=Ht),nt.set(Q,K,vt,Ht),gt.equals(nt)===!1&&(s.clearColor(Q,K,vt,Ht),gt.copy(nt))},reset:function(){U=!1,ot=null,gt.set(-1,0,0,0)}}}function n(){let U=!1,nt=!1,ot=null,gt=null,Q=null;return{setReversed:function(K){if(nt!==K){const vt=t.get("EXT_clip_control");K?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),nt=K;const Ht=Q;Q=null,this.setClear(Ht)}},getReversed:function(){return nt},setTest:function(K){K?j(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(K){ot!==K&&!U&&(s.depthMask(K),ot=K)},setFunc:function(K){if(nt&&(K=zg[K]),gt!==K){switch(K){case _a:s.depthFunc(s.NEVER);break;case va:s.depthFunc(s.ALWAYS);break;case xa:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case ya:s.depthFunc(s.GEQUAL);break;case Sa:s.depthFunc(s.GREATER);break;case ba:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=K}},setLocked:function(K){U=K},setClear:function(K){Q!==K&&(nt&&(K=1-K),s.clearDepth(K),Q=K)},reset:function(){U=!1,ot=null,gt=null,Q=null,nt=!1}}}function i(){let U=!1,nt=null,ot=null,gt=null,Q=null,K=null,vt=null,Ht=null,de=null;return{setTest:function(oe){U||(oe?j(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(oe){nt!==oe&&!U&&(s.stencilMask(oe),nt=oe)},setFunc:function(oe,ui,Zn){(ot!==oe||gt!==ui||Q!==Zn)&&(s.stencilFunc(oe,ui,Zn),ot=oe,gt=ui,Q=Zn)},setOp:function(oe,ui,Zn){(K!==oe||vt!==ui||Ht!==Zn)&&(s.stencilOp(oe,ui,Zn),K=oe,vt=ui,Ht=Zn)},setLocked:function(oe){U=oe},setClear:function(oe){de!==oe&&(s.clearStencil(oe),de=oe)},reset:function(){U=!1,nt=null,ot=null,gt=null,Q=null,K=null,vt=null,Ht=null,de=null}}}const r=new e,o=new n,a=new i,h=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,m=[],v=null,M=!1,_=null,g=null,T=null,R=null,b=null,L=null,d=null,p=new zt(0,0,0),x=0,y=!1,S=null,C=null,P=null,k=null,z=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Y>=2);let J=null,it={};const ft=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),Ot=new he().fromArray(ft),Wt=new he().fromArray(Tt);function Xt(U,nt,ot,gt){const Q=new Uint8Array(4),K=s.createTexture();s.bindTexture(U,K),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let vt=0;vt<ot;vt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(nt+vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return K}const q={};q[s.TEXTURE_2D]=Xt(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(Ts),Nt(!1),xt(Xl),j(s.CULL_FACE),me(Li);function j(U){c[U]!==!0&&(s.enable(U),c[U]=!0)}function ut(U){c[U]!==!1&&(s.disable(U),c[U]=!1)}function Rt(U,nt){return u[U]!==nt?(s.bindFramebuffer(U,nt),u[U]=nt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function pt(U,nt){let ot=m,gt=!1;if(U){ot=f.get(nt),ot===void 0&&(ot=[],f.set(nt,ot));const Q=U.textures;if(ot.length!==Q.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let K=0,vt=Q.length;K<vt;K++)ot[K]=s.COLOR_ATTACHMENT0+K;ot.length=Q.length,gt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ot)}function Bt(U){return v!==U?(s.useProgram(U),v=U,!0):!1}const Se={[$i]:s.FUNC_ADD,[Ru]:s.FUNC_SUBTRACT,[Cu]:s.FUNC_REVERSE_SUBTRACT};Se[Iu]=s.MIN,Se[Lu]=s.MAX;const I={[Pu]:s.ZERO,[Du]:s.ONE,[Uu]:s.SRC_COLOR,[ma]:s.SRC_ALPHA,[zu]:s.SRC_ALPHA_SATURATE,[Ou]:s.DST_COLOR,[ku]:s.DST_ALPHA,[Nu]:s.ONE_MINUS_SRC_COLOR,[ga]:s.ONE_MINUS_SRC_ALPHA,[Bu]:s.ONE_MINUS_DST_COLOR,[Fu]:s.ONE_MINUS_DST_ALPHA,[Hu]:s.CONSTANT_COLOR,[Gu]:s.ONE_MINUS_CONSTANT_COLOR,[Vu]:s.CONSTANT_ALPHA,[Wu]:s.ONE_MINUS_CONSTANT_ALPHA};function me(U,nt,ot,gt,Q,K,vt,Ht,de,oe){if(U===Li){M===!0&&(ut(s.BLEND),M=!1);return}if(M===!1&&(j(s.BLEND),M=!0),U!==Au){if(U!==_||oe!==y){if((g!==$i||b!==$i)&&(s.blendEquation(s.FUNC_ADD),g=$i,b=$i),oe)switch(U){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ql:s.blendFunc(s.ONE,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ql:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $l:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,R=null,L=null,d=null,p.set(0,0,0),x=0,_=U,y=oe}return}Q=Q||nt,K=K||ot,vt=vt||gt,(nt!==g||Q!==b)&&(s.blendEquationSeparate(Se[nt],Se[Q]),g=nt,b=Q),(ot!==T||gt!==R||K!==L||vt!==d)&&(s.blendFuncSeparate(I[ot],I[gt],I[K],I[vt]),T=ot,R=gt,L=K,d=vt),(Ht.equals(p)===!1||de!==x)&&(s.blendColor(Ht.r,Ht.g,Ht.b,de),p.copy(Ht),x=de),_=U,y=!1}function Vt(U,nt){U.side===ke?ut(s.CULL_FACE):j(s.CULL_FACE);let ot=U.side===pn;nt&&(ot=!ot),Nt(ot),U.blending===bs&&U.transparent===!1?me(Li):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const gt=U.stencilWrite;a.setTest(gt),gt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){S!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),S=U)}function xt(U){U!==Eu?(j(s.CULL_FACE),U!==C&&(U===Xl?s.cullFace(s.BACK):U===wu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),C=U}function ge(U){U!==P&&(W&&s.lineWidth(U),P=U)}function Mt(U,nt,ot){U?(j(s.POLYGON_OFFSET_FILL),(k!==nt||z!==ot)&&(s.polygonOffset(nt,ot),k=nt,z=ot)):ut(s.POLYGON_OFFSET_FILL)}function Yt(U){U?j(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function De(U){U===void 0&&(U=s.TEXTURE0+B-1),J!==U&&(s.activeTexture(U),J=U)}function be(U,nt,ot){ot===void 0&&(J===null?ot=s.TEXTURE0+B-1:ot=J);let gt=it[ot];gt===void 0&&(gt={type:void 0,texture:void 0},it[ot]=gt),(gt.type!==U||gt.texture!==nt)&&(J!==ot&&(s.activeTexture(ot),J=ot),s.bindTexture(U,nt||q[U]),gt.type=U,gt.texture=nt)}function A(){const U=it[J];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(U){Ot.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ot.copy(U))}function Ut(U){Wt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Wt.copy(U))}function Et(U,nt){let ot=l.get(nt);ot===void 0&&(ot=new WeakMap,l.set(nt,ot));let gt=ot.get(U);gt===void 0&&(gt=s.getUniformBlockIndex(nt,U.name),ot.set(U,gt))}function lt(U,nt){const gt=l.get(nt).get(U);h.get(nt)!==gt&&(s.uniformBlockBinding(nt,gt,U.__bindingPointIndex),h.set(nt,gt))}function qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},J=null,it={},u={},f=new WeakMap,m=[],v=null,M=!1,_=null,g=null,T=null,R=null,b=null,L=null,d=null,p=new zt(0,0,0),x=0,y=!1,S=null,C=null,P=null,k=null,z=null,Ot.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ut,bindFramebuffer:Rt,drawBuffers:pt,useProgram:Bt,setBlending:me,setMaterial:Vt,setFlipSided:Nt,setCullFace:xt,setLineWidth:ge,setPolygonOffset:Mt,setScissorTest:Yt,activeTexture:De,bindTexture:be,unbindTexture:A,compressedTexImage2D:E,compressedTexImage3D:O,texImage2D:bt,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:lt,texStorage2D:rt,texStorage3D:St,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:wt,scissor:dt,viewport:Ut,reset:qt}}function Gg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,c=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,E){return m?new OffscreenCanvas(A,E):lo("canvas")}function M(A,E,O){let $=1;const Z=be(A);if((Z.width>O||Z.height>O)&&($=O/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor($*Z.width),wt=Math.floor($*Z.height);u===void 0&&(u=v(X,wt));const rt=E?v(X,wt):u;return rt.width=X,rt.height=wt,rt.getContext("2d").drawImage(A,0,0,X,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+wt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function _(A){return A.generateMipmaps}function g(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(A,E,O,$,Z=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=E;if(E===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),E===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),E===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),E===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),E===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),E===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),E===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),E===s.RGBA){const wt=Z?oo:se.getTransfer($);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=wt===ce?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function b(A,E){let O;return A?E===null||E===es||E===Js?O=s.DEPTH24_STENCIL8:E===vi?O=s.DEPTH32F_STENCIL8:E===Zs&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===es||E===Js?O=s.DEPTH_COMPONENT24:E===vi?O=s.DEPTH_COMPONENT32F:E===Zs&&(O=s.DEPTH_COMPONENT16),O}function L(A,E){return _(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function d(A){const E=A.target;E.removeEventListener("dispose",d),x(E),E.isVideoTexture&&c.delete(E)}function p(A){const E=A.target;E.removeEventListener("dispose",p),S(E)}function x(A){const E=n.get(A);if(E.__webglInit===void 0)return;const O=A.source,$=f.get(O);if($){const Z=$[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(A),Object.keys($).length===0&&f.delete(O)}n.remove(A)}function y(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const O=A.source,$=f.get(O);delete $[E.__cacheKey],o.memory.textures--}function S(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let Z=0;Z<E.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)s.deleteFramebuffer(E.__webglFramebuffer[$]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=A.textures;for(let $=0,Z=O.length;$<Z;$++){const X=n.get(O[$]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(A)}let C=0;function P(){C=0}function k(){const A=C;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A}function z(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function B(A,E){const O=n.get(A);if(A.isVideoTexture&&Yt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,A,E);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+E)}function W(A,E){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){q(O,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+E)}function Y(A,E){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){q(O,A,E);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+E)}function H(A,E){const O=n.get(A);if(A.version>0&&O.__version!==A.version){j(O,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+E)}const J={[Ta]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},it={[wn]:s.NEAREST,[td]:s.NEAREST_MIPMAP_NEAREST,[xr]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[Lo]:s.LINEAR_MIPMAP_NEAREST,[Ji]:s.LINEAR_MIPMAP_LINEAR},ft={[sd]:s.NEVER,[hd]:s.ALWAYS,[rd]:s.LESS,[Ch]:s.LEQUAL,[od]:s.EQUAL,[cd]:s.GEQUAL,[ad]:s.GREATER,[ld]:s.NOTEQUAL};function Tt(A,E){if(E.type===vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ti||E.magFilter===Lo||E.magFilter===xr||E.magFilter===Ji||E.minFilter===ti||E.minFilter===Lo||E.minFilter===xr||E.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,J[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,it[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,it[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ft[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==xr&&E.minFilter!==Ji||E.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ot(A,E){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",d));const $=E.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const X=z(E);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[X].usedTimes++;const wt=Z[A.__cacheKey];wt!==void 0&&(Z[A.__cacheKey].usedTimes--,wt.usedTimes===0&&y(E)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return O}function Wt(A,E,O){return Math.floor(Math.floor(A/O)/E)}function Xt(A,E,O,$){const X=A.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,O,$,E.data);else{X.sort((et,dt)=>et.start-dt.start);let wt=0;for(let et=1;et<X.length;et++){const dt=X[wt],Ut=X[et],Et=dt.start+dt.count,lt=Wt(Ut.start,E.width,4),qt=Wt(dt.start,E.width,4);Ut.start<=Et+1&&lt===qt&&Wt(Ut.start+Ut.count-1,E.width,4)===lt?dt.count=Math.max(dt.count,Ut.start+Ut.count-dt.start):(++wt,X[wt]=Ut)}X.length=wt+1;const rt=s.getParameter(s.UNPACK_ROW_LENGTH),St=s.getParameter(s.UNPACK_SKIP_PIXELS),bt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let et=0,dt=X.length;et<dt;et++){const Ut=X[et],Et=Math.floor(Ut.start/4),lt=Math.ceil(Ut.count/4),qt=Et%E.width,U=Math.floor(Et/E.width),nt=lt,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,qt,U,nt,ot,O,$,E.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,St),s.pixelStorei(s.UNPACK_SKIP_ROWS,bt)}}function q(A,E,O){let $=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=s.TEXTURE_3D);const Z=Ot(A,E),X=E.source;e.bindTexture($,A.__webglTexture,s.TEXTURE0+O);const wt=n.get(X);if(X.version!==wt.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const rt=se.getPrimaries(se.workingColorSpace),St=E.colorSpace===Ci?null:se.getPrimaries(E.colorSpace),bt=E.colorSpace===Ci||rt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let et=M(E.image,!1,i.maxTextureSize);et=De(E,et);const dt=r.convert(E.format,E.colorSpace),Ut=r.convert(E.type);let Et=R(E.internalFormat,dt,Ut,E.colorSpace,E.isVideoTexture);Tt($,E);let lt;const qt=E.mipmaps,U=E.isVideoTexture!==!0,nt=wt.__version===void 0||Z===!0,ot=X.dataReady,gt=L(E,et);if(E.isDepthTexture)Et=b(E.format===tr,E.type),nt&&(U?e.texStorage2D(s.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,dt,Ut,null));else if(E.isDataTexture)if(qt.length>0){U&&nt&&e.texStorage2D(s.TEXTURE_2D,gt,Et,qt[0].width,qt[0].height);for(let Q=0,K=qt.length;Q<K;Q++)lt=qt[Q],U?ot&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,lt.width,lt.height,dt,Ut,lt.data):e.texImage2D(s.TEXTURE_2D,Q,Et,lt.width,lt.height,0,dt,Ut,lt.data);E.generateMipmaps=!1}else U?(nt&&e.texStorage2D(s.TEXTURE_2D,gt,Et,et.width,et.height),ot&&Xt(E,et,dt,Ut)):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,dt,Ut,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Et,qt[0].width,qt[0].height,et.depth);for(let Q=0,K=qt.length;Q<K;Q++)if(lt=qt[Q],E.format!==$n)if(dt!==null)if(U){if(ot)if(E.layerUpdates.size>0){const vt=Tc(lt.width,lt.height,E.format,E.type);for(const Ht of E.layerUpdates){const de=lt.data.subarray(Ht*vt/lt.data.BYTES_PER_ELEMENT,(Ht+1)*vt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Ht,lt.width,lt.height,1,dt,de)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,dt,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Et,lt.width,lt.height,et.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,dt,Ut,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Et,lt.width,lt.height,et.depth,0,dt,Ut,lt.data)}else{U&&nt&&e.texStorage2D(s.TEXTURE_2D,gt,Et,qt[0].width,qt[0].height);for(let Q=0,K=qt.length;Q<K;Q++)lt=qt[Q],E.format!==$n?dt!==null?U?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,lt.width,lt.height,dt,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Et,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ot&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,lt.width,lt.height,dt,Ut,lt.data):e.texImage2D(s.TEXTURE_2D,Q,Et,lt.width,lt.height,0,dt,Ut,lt.data)}else if(E.isDataArrayTexture)if(U){if(nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Et,et.width,et.height,et.depth),ot)if(E.layerUpdates.size>0){const Q=Tc(et.width,et.height,E.format,E.type);for(const K of E.layerUpdates){const vt=et.data.subarray(K*Q/et.data.BYTES_PER_ELEMENT,(K+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,dt,Ut,vt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,dt,Ut,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,dt,Ut,et.data);else if(E.isData3DTexture)U?(nt&&e.texStorage3D(s.TEXTURE_3D,gt,Et,et.width,et.height,et.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,dt,Ut,et.data)):e.texImage3D(s.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,dt,Ut,et.data);else if(E.isFramebufferTexture){if(nt)if(U)e.texStorage2D(s.TEXTURE_2D,gt,Et,et.width,et.height);else{let Q=et.width,K=et.height;for(let vt=0;vt<gt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Et,Q,K,0,dt,Ut,null),Q>>=1,K>>=1}}else if(qt.length>0){if(U&&nt){const Q=be(qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Et,Q.width,Q.height)}for(let Q=0,K=qt.length;Q<K;Q++)lt=qt[Q],U?ot&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,dt,Ut,lt):e.texImage2D(s.TEXTURE_2D,Q,Et,dt,Ut,lt);E.generateMipmaps=!1}else if(U){if(nt){const Q=be(et);e.texStorage2D(s.TEXTURE_2D,gt,Et,Q.width,Q.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Ut,et)}else e.texImage2D(s.TEXTURE_2D,0,Et,dt,Ut,et);_(E)&&g($),wt.__version=X.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function j(A,E,O){if(E.image.length!==6)return;const $=Ot(A,E),Z=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const X=n.get(Z);if(Z.version!==X.__version||$===!0){e.activeTexture(s.TEXTURE0+O);const wt=se.getPrimaries(se.workingColorSpace),rt=E.colorSpace===Ci?null:se.getPrimaries(E.colorSpace),St=E.colorSpace===Ci||wt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const bt=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!bt&&!et?dt[K]=M(E.image[K],!0,i.maxCubemapSize):dt[K]=et?E.image[K].image:E.image[K],dt[K]=De(E,dt[K]);const Ut=dt[0],Et=r.convert(E.format,E.colorSpace),lt=r.convert(E.type),qt=R(E.internalFormat,Et,lt,E.colorSpace),U=E.isVideoTexture!==!0,nt=X.__version===void 0||$===!0,ot=Z.dataReady;let gt=L(E,Ut);Tt(s.TEXTURE_CUBE_MAP,E);let Q;if(bt){U&&nt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,qt,Ut.width,Ut.height);for(let K=0;K<6;K++){Q=dt[K].mipmaps;for(let vt=0;vt<Q.length;vt++){const Ht=Q[vt];E.format!==$n?Et!==null?U?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,Ht.width,Ht.height,Et,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,qt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,Ht.width,Ht.height,Et,lt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,qt,Ht.width,Ht.height,0,Et,lt,Ht.data)}}}else{if(Q=E.mipmaps,U&&nt){Q.length>0&&gt++;const K=be(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,qt,K.width,K.height)}for(let K=0;K<6;K++)if(et){U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Et,lt,dt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,dt[K].width,dt[K].height,0,Et,lt,dt[K].data);for(let vt=0;vt<Q.length;vt++){const de=Q[vt].image[K].image;U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,de.width,de.height,Et,lt,de.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,qt,de.width,de.height,0,Et,lt,de.data)}}else{U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,lt,dt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Et,lt,dt[K]);for(let vt=0;vt<Q.length;vt++){const Ht=Q[vt];U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,Et,lt,Ht.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,qt,Et,lt,Ht.image[K])}}}_(E)&&g(s.TEXTURE_CUBE_MAP),X.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ut(A,E,O,$,Z,X){const wt=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),St=R(O.internalFormat,wt,rt,O.colorSpace),bt=n.get(E),et=n.get(O);if(et.__renderTarget=E,!bt.__hasExternalTextures){const dt=Math.max(1,E.width>>X),Ut=Math.max(1,E.height>>X);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,St,dt,Ut,E.depth,0,wt,rt,null):e.texImage2D(Z,X,St,dt,Ut,0,wt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Mt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,et.__webglTexture,0,ge(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,et.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(A,E,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){const $=E.depthTexture,Z=$&&$.isDepthTexture?$.type:null,X=b(E.stencilBuffer,Z),wt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=ge(E);Mt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,X,E.width,E.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,X,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,X,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,A)}else{const $=E.textures;for(let Z=0;Z<$.length;Z++){const X=$[Z],wt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),St=R(X.internalFormat,wt,rt,X.colorSpace),bt=ge(E);O&&Mt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,St,E.width,E.height):Mt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,St,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,St,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const Z=$.__webglTexture,X=ge(E);if(E.depthTexture.format===Qs)Mt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(E.depthTexture.format===tr)Mt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Bt(A){const E=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=$}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=A.texture.mipmaps;$&&$.length>0?pt(E.__webglFramebuffer[0],A):pt(E.__webglFramebuffer,A)}else if(O){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=s.createRenderbuffer(),Rt(E.__webglDepthbuffer[$],A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}else{const $=A.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Rt(E.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(A,E,O){const $=n.get(A);E!==void 0&&ut($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Bt(A)}function I(A){const E=A.texture,O=n.get(A),$=n.get(E);A.addEventListener("dispose",p);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,wt=Z.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let St=0;St<E.mipmaps.length;St++)O.__webglFramebuffer[rt][St]=s.createFramebuffer()}else O.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<E.mipmaps.length;rt++)O.__webglFramebuffer[rt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(wt)for(let rt=0,St=Z.length;rt<St;rt++){const bt=n.get(Z[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Mt(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const St=Z[rt];O.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);const bt=r.convert(St.format,St.colorSpace),et=r.convert(St.type),dt=R(St.internalFormat,bt,et,St.colorSpace,A.isXRRenderTarget===!0),Ut=ge(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,dt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E);for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)ut(O.__webglFramebuffer[rt][St],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St);else ut(O.__webglFramebuffer[rt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);_(E)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let rt=0,St=Z.length;rt<St;rt++){const bt=Z[rt],et=n.get(bt);let dt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,et.__webglTexture),Tt(dt,bt),ut(O.__webglFramebuffer,A,bt,s.COLOR_ATTACHMENT0+rt,dt,0),_(bt)&&g(dt)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),Tt(rt,E),E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)ut(O.__webglFramebuffer[St],A,E,s.COLOR_ATTACHMENT0,rt,St);else ut(O.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,rt,0);_(E)&&g(rt),e.unbindTexture()}A.depthBuffer&&Bt(A)}function me(A){const E=A.textures;for(let O=0,$=E.length;O<$;O++){const Z=E[O];if(_(Z)){const X=T(A),wt=n.get(Z).__webglTexture;e.bindTexture(X,wt),g(X),e.unbindTexture()}}}const Vt=[],Nt=[];function xt(A){if(A.samples>0){if(Mt(A)===!1){const E=A.textures,O=A.width,$=A.height;let Z=s.COLOR_BUFFER_BIT;const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(A),rt=E.length>1;if(rt)for(let bt=0;bt<E.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const St=A.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let bt=0;bt<E.length;bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const et=n.get(E[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,Z,s.NEAREST),h===!0&&(Vt.length=0,Nt.length=0,Vt.push(s.COLOR_ATTACHMENT0+bt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Vt.push(X),Nt.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<E.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const et=n.get(E[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&h){const E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ge(A){return Math.min(i.maxSamples,A.samples)}function Mt(A){const E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(A){const E=o.render.frame;c.get(A)!==E&&(c.set(A,E),A.update())}function De(A,E){const O=A.colorSpace,$=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Cs&&O!==Ci&&(se.getTransfer(O)===ce?($!==$n||Z!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Se,this.setupRenderTarget=I,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Mt}function Vg(s,t){function e(n,i=Ci){let r;const o=se.getTransfer(i);if(n===ai)return s.UNSIGNED_BYTE;if(n===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mh)return s.BYTE;if(n===yh)return s.SHORT;if(n===Zs)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===es)return s.UNSIGNED_INT;if(n===vi)return s.FLOAT;if(n===or)return s.HALF_FLOAT;if(n===Eh)return s.ALPHA;if(n===wh)return s.RGB;if(n===$n)return s.RGBA;if(n===Qs)return s.DEPTH_COMPONENT;if(n===tr)return s.DEPTH_STENCIL;if(n===Th)return s.RED;if(n===gl)return s.RED_INTEGER;if(n===Ah)return s.RG;if(n===_l)return s.RG_INTEGER;if(n===vl)return s.RGBA_INTEGER;if(n===jr||n===Zr||n===Jr||n===Qr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Ia||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===Da)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===ka||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===$a||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===ja||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===Qa||n===tl||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
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

}`;class qg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Vh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:Wg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends Ls{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",h=1,l=null,c=null,u=null,f=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",_=new qg,g={},T=e.getContextAttributes();let R=null,b=null;const L=[],d=[],p=new ee;let x=null;const y=new Sn;y.viewport=new he;const S=new Sn;S.viewport=new he;const C=[y,S],P=new pf;let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=L[q];return j===void 0&&(j=new Jo,L[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=L[q];return j===void 0&&(j=new Jo,L[q]=j),j.getGripSpace()},this.getHand=function(q){let j=L[q];return j===void 0&&(j=new Jo,L[q]=j),j.getHandSpace()};function B(q){const j=d.indexOf(q.inputSource);if(j===-1)return;const ut=L[j];ut!==void 0&&(ut.update(q.inputSource,q.frame,l||o),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<L.length;q++){const j=d[q];j!==null&&(d[q]=null,L[q].disconnect(j))}k=null,z=null,_.reset();for(const q in g)delete g[q];t.setRenderTarget(R),m=null,f=null,u=null,i=null,b=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(p.width,p.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(p),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Rt=null,pt=null;T.depth&&(pt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=T.stencil?tr:Qs,Rt=T.stencil?Js:es);const Bt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Bt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ns(f.textureWidth,f.textureHeight,{format:$n,type:ai,depthTexture:new Gh(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ut={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ns(m.framebufferWidth,m.framebufferHeight,{format:$n,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let j=0;j<q.removed.length;j++){const ut=q.removed[j],Rt=d.indexOf(ut);Rt>=0&&(d[Rt]=null,L[Rt].disconnect(ut))}for(let j=0;j<q.added.length;j++){const ut=q.added[j];let Rt=d.indexOf(ut);if(Rt===-1){for(let Bt=0;Bt<L.length;Bt++)if(Bt>=d.length){d.push(ut),Rt=Bt;break}else if(d[Bt]===null){d[Bt]=ut,Rt=Bt;break}if(Rt===-1)break}const pt=L[Rt];pt&&pt.connect(ut)}}const H=new D,J=new D;function it(q,j,ut){H.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(ut.matrixWorld);const Rt=H.distanceTo(J),pt=j.projectionMatrix.elements,Bt=ut.projectionMatrix.elements,Se=pt[14]/(pt[10]-1),I=pt[14]/(pt[10]+1),me=(pt[9]+1)/pt[5],Vt=(pt[9]-1)/pt[5],Nt=(pt[8]-1)/pt[0],xt=(Bt[8]+1)/Bt[0],ge=Se*Nt,Mt=Se*xt,Yt=Rt/(-Nt+xt),De=Yt*-Nt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const be=Se+Yt,A=I+Yt,E=ge-De,O=Mt+(Rt-De),$=me*I/A*be,Z=Vt*I/A*be;q.projectionMatrix.makePerspective(E,O,$,Z,be,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ft(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,ut=q.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(ut=_.depthFar)),P.near=S.near=y.near=j,P.far=S.far=y.far=ut,(k!==P.near||z!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,z=P.far),P.layers.mask=q.layers.mask|6,y.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;const Rt=q.parent,pt=P.cameras;ft(P,Rt);for(let Bt=0;Bt<pt.length;Bt++)ft(pt[Bt],Rt);pt.length===2?it(P,y,S):P.projectionMatrix.copy(y.projectionMatrix),Tt(q,P,Rt)};function Tt(q,j,ut){ut===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=er*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(q){h=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(q){return g[q]};let Ot=null;function Wt(q,j){if(c=j.getViewerPose(l||o),v=j,c!==null){const ut=c.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Rt=!1;ut.length!==P.cameras.length&&(P.cameras.length=0,Rt=!0);for(let I=0;I<ut.length;I++){const me=ut[I];let Vt=null;if(m!==null)Vt=m.getViewport(me);else{const xt=u.getViewSubImage(f,me);Vt=xt.viewport,I===0&&(t.setRenderTargetTextures(b,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(b))}let Nt=C[I];Nt===void 0&&(Nt=new Sn,Nt.layers.enable(I),Nt.viewport=new he,C[I]=Nt),Nt.matrix.fromArray(me.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(me.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),I===0&&(P.matrix.copy(Nt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Rt===!0&&P.cameras.push(Nt)}const pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const I=u.getDepthInformation(ut[0]);I&&I.isValid&&I.texture&&_.init(I,i.renderState)}if(pt&&pt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<ut.length;I++){const me=ut[I].camera;if(me){let Vt=g[me];Vt||(Vt=new Vh,g[me]=Vt);const Nt=u.getCameraImage(me);Vt.sourceTexture=Nt}}}}for(let ut=0;ut<L.length;ut++){const Rt=d[ut],pt=L[ut];Rt!==null&&pt!==void 0&&pt.update(Rt,j,l||o)}Ot&&Ot(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const Xt=new qh;Xt.setAnimationLoop(Wt),this.setAnimationLoop=function(q){Ot=q},this.dispose=function(){}}}const Wi=new li,Yg=new ve;function Kg(s,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,kh(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function i(_,g,T,R,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(_,g):g.isMeshToonMaterial?(r(_,g),u(_,g)):g.isMeshPhongMaterial?(r(_,g),c(_,g)):g.isMeshStandardMaterial?(r(_,g),f(_,g),g.isMeshPhysicalMaterial&&m(_,g,b)):g.isMeshMatcapMaterial?(r(_,g),v(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),M(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?h(_,g,T,R):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===pn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===pn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const T=t.get(g),R=T.envMap,b=T.envMapRotation;R&&(_.envMap.value=R,Wi.copy(b),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),_.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(Wi)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function h(_,g,T,R){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*T,_.scale.value=R*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function u(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,T){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,g){g.matcap&&(_.matcap.value=g.matcap)}function M(_,g){const T=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jg(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,R){const b=R.program;n.uniformBlockBinding(T,b)}function l(T,R){let b=i[T.id];b===void 0&&(v(T),b=c(T),i[T.id]=b,T.addEventListener("dispose",_));const L=R.program;n.updateUBOMapping(T,L);const d=t.render.frame;r[T.id]!==d&&(f(T),r[T.id]=d)}function c(T){const R=u();T.__bindingPointIndex=R;const b=s.createBuffer(),L=T.__size,d=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,L,d),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,b),b}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const R=i[T.id],b=T.uniforms,L=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let d=0,p=b.length;d<p;d++){const x=Array.isArray(b[d])?b[d]:[b[d]];for(let y=0,S=x.length;y<S;y++){const C=x[y];if(m(C,d,y,L)===!0){const P=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let B=0;B<k.length;B++){const W=k[B],Y=M(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,P+z,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(T,R,b,L){const d=T.value,p=R+"_"+b;if(L[p]===void 0)return typeof d=="number"||typeof d=="boolean"?L[p]=d:L[p]=d.clone(),!0;{const x=L[p];if(typeof d=="number"||typeof d=="boolean"){if(x!==d)return L[p]=d,!0}else if(x.equals(d)===!1)return x.copy(d),!0}return!1}function v(T){const R=T.uniforms;let b=0;const L=16;for(let p=0,x=R.length;p<x;p++){const y=Array.isArray(R[p])?R[p]:[R[p]];for(let S=0,C=y.length;S<C;S++){const P=y[S],k=Array.isArray(P.value)?P.value:[P.value];for(let z=0,B=k.length;z<B;z++){const W=k[z],Y=M(W),H=b%L,J=H%Y.boundary,it=H+J;b+=J,it!==0&&L-it<Y.storage&&(b+=L-it),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=Y.storage}}}const d=b%L;return d>0&&(b+=L-d),T.__size=b,T.__cache={},this}function M(T){const R={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(R.boundary=4,R.storage=4):T.isVector2?(R.boundary=8,R.storage=8):T.isVector3||T.isColor?(R.boundary=16,R.storage=12):T.isVector4?(R.boundary=16,R.storage=16):T.isMatrix3?(R.boundary=48,R.storage=48):T.isMatrix4?(R.boundary=64,R.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),R}function _(T){const R=T.target;R.removeEventListener("dispose",_);const b=o.indexOf(R.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[R.id]),delete i[R.id],delete r[R.id]}function g(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:h,update:l,dispose:g}}class Zg{constructor(t={}){const{canvas:e=Ad(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),M=new Int32Array(4);let _=null,g=null;const T=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1;this._outputColorSpace=dn;let d=0,p=0,x=null,y=-1,S=null;const C=new he,P=new he;let k=null;const z=new zt(0);let B=0,W=e.width,Y=e.height,H=1,J=null,it=null;const ft=new he(0,0,W,Y),Tt=new he(0,0,W,Y);let Ot=!1;const Wt=new bl;let Xt=!1,q=!1;const j=new ve,ut=new D,Rt=new he,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Se(){return x===null?H:1}let I=n;function me(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",Q,!1),I===null){const N="webgl2";if(I=me(N,w),I===null)throw me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,Nt,xt,ge,Mt,Yt,De,be,A,E,O,$,Z,X,wt,rt,St,bt,et,dt,Ut,Et,lt,qt;function U(){Vt=new a0(I),Vt.init(),Et=new Vg(I,Vt),Nt=new t0(I,Vt,t,Et),xt=new Hg(I,Vt),Nt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),ge=new h0(I),Mt=new Rg,Yt=new Gg(I,Vt,xt,Mt,Nt,Et,ge),De=new n0(b),be=new o0(b),A=new gf(I),lt=new Jm(I,A),E=new l0(I,A,ge,lt),O=new d0(I,E,A,ge),et=new u0(I,Nt,Yt),rt=new e0(Mt),$=new Ag(b,De,be,Vt,Nt,lt,rt),Z=new Kg(b,Mt),X=new Ig,wt=new kg(Vt),bt=new Zm(b,De,be,xt,O,m,h),St=new Bg(b,O,Nt),qt=new jg(I,ge,Nt,xt),dt=new Qm(I,Vt,ge),Ut=new c0(I,Vt,ge),ge.programs=$.programs,b.capabilities=Nt,b.extensions=Vt,b.properties=Mt,b.renderLists=X,b.shadowMap=St,b.state=xt,b.info=ge}U();const nt=new $g(b,I);this.xr=nt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,Y,!1))},this.getSize=function(w){return w.set(W,Y)},this.setSize=function(w,N,G=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Y=N,e.width=Math.floor(w*H),e.height=Math.floor(N*H),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*H,Y*H).floor()},this.setDrawingBufferSize=function(w,N,G){W=w,Y=N,H=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,N,G,V){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,N,G,V),xt.viewport(C.copy(ft).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Tt)},this.setScissor=function(w,N,G,V){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,N,G,V),xt.scissor(P.copy(Tt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(w){xt.setScissorTest(Ot=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let F=!1;if(x!==null){const tt=x.texture.format;F=tt===vl||tt===_l||tt===gl}if(F){const tt=x.texture.type,ct=tt===ai||tt===es||tt===Zs||tt===Js||tt===pl||tt===ml,_t=bt.getClearColor(),mt=bt.getClearAlpha(),Lt=_t.r,kt=_t.g,At=_t.b;ct?(v[0]=Lt,v[1]=kt,v[2]=At,v[3]=mt,I.clearBufferuiv(I.COLOR,0,v)):(M[0]=Lt,M[1]=kt,M[2]=At,M[3]=mt,I.clearBufferiv(I.COLOR,0,M))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),bt.dispose(),X.dispose(),wt.dispose(),Mt.dispose(),De.dispose(),be.dispose(),O.dispose(),lt.dispose(),qt.dispose(),$.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Zn),nt.removeEventListener("sessionend",Bl),Fi.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=ge.autoReset,N=St.enabled,G=St.autoUpdate,V=St.needsUpdate,F=St.type;U(),ge.autoReset=w,St.enabled=N,St.autoUpdate=G,St.needsUpdate=V,St.type=F}function Q(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function K(w){const N=w.target;N.removeEventListener("dispose",K),vt(N)}function vt(w){Ht(w),Mt.remove(w)}function Ht(w){const N=Mt.get(w).programs;N!==void 0&&(N.forEach(function(G){$.releaseProgram(G)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,F,tt){N===null&&(N=pt);const ct=F.isMesh&&F.matrixWorld.determinant()<0,_t=vu(w,N,G,V,F);xt.setMaterial(V,ct);let mt=G.index,Lt=1;if(V.wireframe===!0){if(mt=E.getWireframeAttribute(G),mt===void 0)return;Lt=2}const kt=G.drawRange,At=G.attributes.position;let Jt=kt.start*Lt,le=(kt.start+kt.count)*Lt;tt!==null&&(Jt=Math.max(Jt,tt.start*Lt),le=Math.min(le,(tt.start+tt.count)*Lt)),mt!==null?(Jt=Math.max(Jt,0),le=Math.min(le,mt.count)):At!=null&&(Jt=Math.max(Jt,0),le=Math.min(le,At.count));const ye=le-Jt;if(ye<0||ye===1/0)return;lt.setup(F,V,_t,G,mt);let pe,ue=dt;if(mt!==null&&(pe=A.get(mt),ue=Ut,ue.setIndex(pe)),F.isMesh)V.wireframe===!0?(xt.setLineWidth(V.wireframeLinewidth*Se()),ue.setMode(I.LINES)):ue.setMode(I.TRIANGLES);else if(F.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),xt.setLineWidth(Ct*Se()),F.isLineSegments?ue.setMode(I.LINES):F.isLineLoop?ue.setMode(I.LINE_LOOP):ue.setMode(I.LINE_STRIP)}else F.isPoints?ue.setMode(I.POINTS):F.isSprite&&ue.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,xe=F._multiDrawCounts,ie=F._multiDrawCount,mn=mt?A.get(mt).bytesPerElement:1,rs=Mt.get(V).currentProgram.getUniforms();for(let gn=0;gn<ie;gn++)rs.setValue(I,"_gl_DrawID",gn),ue.render(Ct[gn]/mn,xe[gn])}else if(F.isInstancedMesh)ue.renderInstances(Jt,ye,F.count);else if(G.isInstancedBufferGeometry){const Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,Ct);ue.renderInstances(Jt,ye,xe)}else ue.render(Jt,ye)};function de(w,N,G){w.transparent===!0&&w.side===ke&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,vr(w,N,G),w.side=Ui,w.needsUpdate=!0,vr(w,N,G),w.side=ke):vr(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),g=wt.get(G),g.init(N),R.push(g),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const tt=F.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const _t=tt[ct];de(_t,G,F),V.add(_t)}else de(tt,G,F),V.add(tt)}),g=R.pop(),V},this.compileAsync=function(w,N,G=null){const V=this.compile(w,N,G);return new Promise(F=>{function tt(){if(V.forEach(function(ct){Mt.get(ct).currentProgram.isReady()&&V.delete(ct)}),V.size===0){F(w);return}setTimeout(tt,10)}Vt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let oe=null;function ui(w){oe&&oe(w)}function Zn(){Fi.stop()}function Bl(){Fi.start()}const Fi=new qh;Fi.setAnimationLoop(ui),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(w){oe=w,nt.setAnimationLoop(w),w===null?Fi.stop():Fi.start()},nt.addEventListener("sessionstart",Zn),nt.addEventListener("sessionend",Bl),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,N,x),g=wt.get(w,R.length),g.init(N),R.push(g),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Wt.setFromProjectionMatrix(j,ei,N.reversedDepth),q=this.localClippingEnabled,Xt=rt.init(this.clippingPlanes,q),_=X.get(w,T.length),_.init(),T.push(_),nt.enabled===!0&&nt.isPresenting===!0){const tt=b.xr.getDepthSensingMesh();tt!==null&&Co(tt,N,-1/0,b.sortObjects)}Co(w,N,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(J,it),Bt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Bt&&bt.addToRenderList(_,w),this.info.render.frame++,Xt===!0&&rt.beginShadows();const G=g.state.shadowsArray;St.render(G,w,N),Xt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,F=_.transmissive;if(g.setupLights(),N.isArrayCamera){const tt=N.cameras;if(F.length>0)for(let ct=0,_t=tt.length;ct<_t;ct++){const mt=tt[ct];Hl(V,F,w,mt)}Bt&&bt.render(w);for(let ct=0,_t=tt.length;ct<_t;ct++){const mt=tt[ct];zl(_,w,mt,mt.viewport)}}else F.length>0&&Hl(V,F,w,N),Bt&&bt.render(w),zl(_,w,N);x!==null&&p===0&&(Yt.updateMultisampleRenderTarget(x),Yt.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(b,w,N),lt.resetDefaultState(),y=-1,S=null,R.pop(),R.length>0?(g=R[R.length-1],Xt===!0&&rt.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,T.pop(),T.length>0?_=T[T.length-1]:_=null};function Co(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Wt.intersectsSprite(w)){V&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);const ct=O.update(w),_t=w.material;_t.visible&&_.push(w,ct,_t,G,Rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Wt.intersectsObject(w))){const ct=O.update(w),_t=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Rt.copy(ct.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(j)),Array.isArray(_t)){const mt=ct.groups;for(let Lt=0,kt=mt.length;Lt<kt;Lt++){const At=mt[Lt],Jt=_t[At.materialIndex];Jt&&Jt.visible&&_.push(w,ct,Jt,G,Rt.z,At)}}else _t.visible&&_.push(w,ct,_t,G,Rt.z,null)}}const tt=w.children;for(let ct=0,_t=tt.length;ct<_t;ct++)Co(tt[ct],N,G,V)}function zl(w,N,G,V){const F=w.opaque,tt=w.transmissive,ct=w.transparent;g.setupLightsView(G),Xt===!0&&rt.setGlobalState(b.clippingPlanes,G),V&&xt.viewport(C.copy(V)),F.length>0&&_r(F,N,G),tt.length>0&&_r(tt,N,G),ct.length>0&&_r(ct,N,G),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Hl(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new ns(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?or:ai,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const tt=g.state.transmissionRenderTarget[V.id],ct=V.viewport||C;tt.setSize(ct.z*b.transmissionResolutionScale,ct.w*b.transmissionResolutionScale);const _t=b.getRenderTarget(),mt=b.getActiveCubeFace(),Lt=b.getActiveMipmapLevel();b.setRenderTarget(tt),b.getClearColor(z),B=b.getClearAlpha(),B<1&&b.setClearColor(16777215,.5),b.clear(),Bt&&bt.render(G);const kt=b.toneMapping;b.toneMapping=Pi;const At=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),Xt===!0&&rt.setGlobalState(b.clippingPlanes,V),_r(w,G,V),Yt.updateMultisampleRenderTarget(tt),Yt.updateRenderTargetMipmap(tt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let le=0,ye=N.length;le<ye;le++){const pe=N[le],ue=pe.object,Ct=pe.geometry,xe=pe.material,ie=pe.group;if(xe.side===ke&&ue.layers.test(V.layers)){const mn=xe.side;xe.side=pn,xe.needsUpdate=!0,Gl(ue,G,V,Ct,xe,ie),xe.side=mn,xe.needsUpdate=!0,Jt=!0}}Jt===!0&&(Yt.updateMultisampleRenderTarget(tt),Yt.updateRenderTargetMipmap(tt))}b.setRenderTarget(_t,mt,Lt),b.setClearColor(z,B),At!==void 0&&(V.viewport=At),b.toneMapping=kt}function _r(w,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,tt=w.length;F<tt;F++){const ct=w[F],_t=ct.object,mt=ct.geometry,Lt=ct.group;let kt=ct.material;kt.allowOverride===!0&&V!==null&&(kt=V),_t.layers.test(G.layers)&&Gl(_t,N,G,mt,kt,Lt)}}function Gl(w,N,G,V,F,tt){w.onBeforeRender(b,N,G,V,F,tt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(b,N,G,V,w,tt),F.transparent===!0&&F.side===ke&&F.forceSinglePass===!1?(F.side=pn,F.needsUpdate=!0,b.renderBufferDirect(G,N,V,F,w,tt),F.side=Ui,F.needsUpdate=!0,b.renderBufferDirect(G,N,V,F,w,tt),F.side=ke):b.renderBufferDirect(G,N,V,F,w,tt),w.onAfterRender(b,N,G,V,F,tt)}function vr(w,N,G){N.isScene!==!0&&(N=pt);const V=Mt.get(w),F=g.state.lights,tt=g.state.shadowsArray,ct=F.state.version,_t=$.getParameters(w,F.state,tt,N,G),mt=$.getProgramCacheKey(_t);let Lt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?be:De).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",K),Lt=new Map,V.programs=Lt);let kt=Lt.get(mt);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===ct)return Wl(w,_t),kt}else _t.uniforms=$.getUniforms(w),w.onBeforeCompile(_t,b),kt=$.acquireProgram(_t,mt),Lt.set(mt,kt),V.uniforms=_t.uniforms;const At=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=rt.uniform),Wl(w,_t),V.needsLights=Mu(w),V.lightsStateVersion=ct,V.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function Vl(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=to.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Wl(w,N){const G=Mt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function vu(w,N,G,V,F){N.isScene!==!0&&(N=pt),Yt.resetTextureUnits();const tt=N.fog,ct=V.isMeshStandardMaterial?N.environment:null,_t=x===null?b.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Cs,mt=(V.isMeshStandardMaterial?be:De).get(V.envMap||ct),Lt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,kt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!G.morphAttributes.position,Jt=!!G.morphAttributes.normal,le=!!G.morphAttributes.color;let ye=Pi;V.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ye=b.toneMapping);const pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=pe!==void 0?pe.length:0,Ct=Mt.get(V),xe=g.state.lights;if(Xt===!0&&(q===!0||w!==S)){const je=w===S&&V.id===y;rt.setState(V,w,je)}let ie=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==xe.state.version||Ct.outputColorSpace!==_t||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==mt||V.fog===!0&&Ct.fog!==tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==rt.numPlanes||Ct.numIntersection!==rt.numIntersection)||Ct.vertexAlphas!==Lt||Ct.vertexTangents!==kt||Ct.morphTargets!==At||Ct.morphNormals!==Jt||Ct.morphColors!==le||Ct.toneMapping!==ye||Ct.morphTargetsCount!==ue)&&(ie=!0):(ie=!0,Ct.__version=V.version);let mn=Ct.currentProgram;ie===!0&&(mn=vr(V,N,F));let rs=!1,gn=!1,Ns=!1;const Me=mn.getUniforms(),An=Ct.uniforms;if(xt.useProgram(mn.program)&&(rs=!0,gn=!0,Ns=!0),V.id!==y&&(y=V.id,gn=!0),rs||S!==w){xt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Me.setValue(I,"projectionMatrix",w.projectionMatrix),Me.setValue(I,"viewMatrix",w.matrixWorldInverse);const hn=Me.map.cameraPosition;hn!==void 0&&hn.setValue(I,ut.setFromMatrixPosition(w.matrixWorld)),Nt.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,gn=!0,Ns=!0)}if(F.isSkinnedMesh){Me.setOptional(I,F,"bindMatrix"),Me.setOptional(I,F,"bindMatrixInverse");const je=F.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Me.setValue(I,"boneTexture",je.boneTexture,Yt))}F.isBatchedMesh&&(Me.setOptional(I,F,"batchingTexture"),Me.setValue(I,"batchingTexture",F._matricesTexture,Yt),Me.setOptional(I,F,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",F._indirectTexture,Yt),Me.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",F._colorsTexture,Yt));const Rn=G.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&et.update(F,G,mn),(gn||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,Me.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(An.envMap.value=mt,An.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(An.envMapIntensity.value=N.environmentIntensity),gn&&(Me.setValue(I,"toneMappingExposure",b.toneMappingExposure),Ct.needsLights&&xu(An,Ns),tt&&V.fog===!0&&Z.refreshFogUniforms(An,tt),Z.refreshMaterialUniforms(An,V,H,Y,g.state.transmissionRenderTarget[w.id]),to.upload(I,Vl(Ct),An,Yt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(to.upload(I,Vl(Ct),An,Yt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(I,"center",F.center),Me.setValue(I,"modelViewMatrix",F.modelViewMatrix),Me.setValue(I,"normalMatrix",F.normalMatrix),Me.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const je=V.uniformsGroups;for(let hn=0,Io=je.length;hn<Io;hn++){const Oi=je[hn];qt.update(Oi,mn),qt.bind(Oi,mn)}}return mn}function xu(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Mu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return d},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,N,G){const V=Mt.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Mt.get(w.texture).__webglTexture=N,Mt.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const G=Mt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const yu=I.createFramebuffer();this.setRenderTarget=function(w,N=0,G=0){x=w,d=N,p=G;let V=!0,F=null,tt=!1,ct=!1;if(w){const mt=Mt.get(w);if(mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)Yt.setupRenderTarget(w);else if(mt.__hasExternalTextures)Yt.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const At=w.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&Mt.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ct=!0);const kt=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[N])?F=kt[N][G]:F=kt[N],tt=!0):w.samples>0&&Yt.useMultisampledRTT(w)===!1?F=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?F=kt[G]:F=kt,C.copy(w.viewport),P.copy(w.scissor),k=w.scissorTest}else C.copy(ft).multiplyScalar(H).floor(),P.copy(Tt).multiplyScalar(H).floor(),k=Ot;if(G!==0&&(F=yu),xt.bindFramebuffer(I.FRAMEBUFFER,F)&&V&&xt.drawBuffers(w,F),xt.viewport(C),xt.scissor(P),xt.setScissorTest(k),tt){const mt=Mt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,G)}else if(ct){const mt=N;for(let Lt=0;Lt<w.textures.length;Lt++){const kt=Mt.get(w.textures[Lt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Lt,kt.__webglTexture,G,mt)}}else if(w!==null&&G!==0){const mt=Mt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,G)}y=-1},this.readRenderTargetPixels=function(w,N,G,V,F,tt,ct,_t=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){xt.bindFramebuffer(I.FRAMEBUFFER,mt);try{const Lt=w.textures[_t],kt=Lt.format,At=Lt.type;if(!Nt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),I.readPixels(N,G,V,F,Et.convert(kt),Et.convert(At),tt))}finally{const Lt=x!==null?Mt.get(x).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,F,tt,ct,_t=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt)if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F){xt.bindFramebuffer(I.FRAMEBUFFER,mt);const Lt=w.textures[_t],kt=Lt.format,At=Lt.type;if(!Nt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Jt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),I.readPixels(N,G,V,F,Et.convert(kt),Et.convert(At),0);const le=x!==null?Mt.get(x).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,le);const ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rd(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(Jt),I.deleteSync(ye),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,G=0){const V=Math.pow(2,-G),F=Math.floor(w.image.width*V),tt=Math.floor(w.image.height*V),ct=N!==null?N.x:0,_t=N!==null?N.y:0;Yt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ct,_t,F,tt),xt.unbindTexture()};const Su=I.createFramebuffer(),bu=I.createFramebuffer();this.copyTextureToTexture=function(w,N,G=null,V=null,F=0,tt=null){tt===null&&(F!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=F,F=0):tt=0);let ct,_t,mt,Lt,kt,At,Jt,le,ye;const pe=w.isCompressedTexture?w.mipmaps[tt]:w.image;if(G!==null)ct=G.max.x-G.min.x,_t=G.max.y-G.min.y,mt=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,kt=G.min.y,At=G.isBox3?G.min.z:0;else{const Rn=Math.pow(2,-F);ct=Math.floor(pe.width*Rn),_t=Math.floor(pe.height*Rn),w.isDataArrayTexture?mt=pe.depth:w.isData3DTexture?mt=Math.floor(pe.depth*Rn):mt=1,Lt=0,kt=0,At=0}V!==null?(Jt=V.x,le=V.y,ye=V.z):(Jt=0,le=0,ye=0);const ue=Et.convert(N.format),Ct=Et.convert(N.type);let xe;N.isData3DTexture?(Yt.setTexture3D(N,0),xe=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Yt.setTexture2DArray(N,0),xe=I.TEXTURE_2D_ARRAY):(Yt.setTexture2D(N,0),xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const ie=I.getParameter(I.UNPACK_ROW_LENGTH),mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rs=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),Ns=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At);const Me=w.isDataArrayTexture||w.isData3DTexture,An=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Rn=Mt.get(w),je=Mt.get(N),hn=Mt.get(Rn.__renderTarget),Io=Mt.get(je.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Io.__webglFramebuffer);for(let Oi=0;Oi<mt;Oi++)Me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(w).__webglTexture,F,At+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(N).__webglTexture,tt,ye+Oi)),I.blitFramebuffer(Lt,kt,ct,_t,Jt,le,ct,_t,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||Mt.has(w)){const Rn=Mt.get(w),je=Mt.get(N);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Su),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,bu);for(let hn=0;hn<mt;hn++)Me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,F,At+hn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,F),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,tt,ye+hn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,tt),F!==0?I.blitFramebuffer(Lt,kt,ct,_t,Jt,le,ct,_t,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(xe,tt,Jt,le,ye+hn,Lt,kt,ct,_t):I.copyTexSubImage2D(xe,tt,Jt,le,Lt,kt,ct,_t);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(xe,tt,Jt,le,ye,ct,_t,mt,ue,Ct,pe.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,tt,Jt,le,ye,ct,_t,mt,ue,pe.data):I.texSubImage3D(xe,tt,Jt,le,ye,ct,_t,mt,ue,Ct,pe):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,Jt,le,ct,_t,ue,Ct,pe.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,Jt,le,pe.width,pe.height,ue,pe.data):I.texSubImage2D(I.TEXTURE_2D,tt,Jt,le,ct,_t,ue,Ct,pe);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rs),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ns),tt===0&&N.generateMipmaps&&I.generateMipmap(xe),xt.unbindTexture()},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&Yt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Yt.setTextureCube(w,0):w.isData3DTexture?Yt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Yt.setTexture2DArray(w,0):Yt.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){d=0,p=0,x=null,xt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const Ft=0,On=1,Tn=2,yi=3,hr=4,Bn=5,Us=6,ur=7,vo=8,dr=9,nn=10,on=11,Oe=12,Wn=13,xo=14,Mn=15,ze=16,We=17,qe=18,fr=19,Ke=20,is=21,ki=22,Te=23,fn=24,$e=25,pr=26,Mo=27,yo=28,So=29,bo=30,Eo=31,mr=32,bn=33,Pn=34,yn=35,Un=36,Qe=37,ri=38,gr=39,Xn=40,Ye=41,He=42,sn=43,rn=44,En=45,Kn=46,Fn=47,hi=48,Dn=49,It=s=>s,oi=[It({id:Ft,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),It({id:On,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),It({id:Tn,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),It({id:yi,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),It({id:hr,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),It({id:Bn,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),It({id:Us,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),It({id:ur,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),It({id:vo,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),It({id:dr,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),It({id:nn,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),It({id:on,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),It({id:Oe,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),It({id:Wn,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),It({id:xo,name:"Metal Block",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),It({id:Mn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),It({id:ze,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),It({id:We,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),It({id:qe,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),It({id:fr,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),It({id:Ke,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),It({id:is,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),It({id:ki,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),It({id:Te,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),It({id:fn,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),It({id:$e,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),It({id:pr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),It({id:Mo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),It({id:yo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),It({id:So,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),It({id:bo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),It({id:Eo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),It({id:mr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),It({id:bn,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),It({id:Pn,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.28,.52,.28]}),It({id:yn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),It({id:Un,name:"Wheat Sprout",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.66,.66,.34]}),It({id:Qe,name:"Desert Wheat",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),It({id:ri,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),It({id:gr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),It({id:Xn,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),It({id:Ye,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),It({id:He,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),It({id:sn,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),It({id:rn,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),It({id:En,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),It({id:Kn,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),It({id:Fn,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),It({id:hi,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),It({id:Dn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.3,.55,.3]})],ne=96,st=16,Ne=1440;function tn(s){return oi[s].solid}function Rl(s){return oi[s].opaque}function ni(s){return s===qe||s>=pr&&s<=mr}function Ms(s){return s===qe?8:ni(s)?33-s:0}function Zc(s){return 33-s}function Jg(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class wo{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function te(s,t,e){let n=s*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function sl(s){return s*s*(3-2*s)}function Cl(s,t,e){const n=Math.floor(s),i=Math.floor(t),r=sl(s-n),o=sl(t-i),a=te(n,i,e),h=te(n+1,i,e),l=te(n,i+1,e),c=te(n+1,i+1,e);return a+(h-a)*r+(l-a)*o+(a-h-l+c)*r*o}function qs(s,t,e,n=4,i=2,r=.5){let o=0,a=1,h=1,l=0;for(let c=0;c<n;c++)o+=Cl(s*h,t*h,e+c*101)*a,l+=a,a*=r,h*=i;return o/l}function Qg(s,t,e,n=3){let i=0,r=1,o=1,a=0;for(let h=0;h<n;h++){const l=Math.abs(Cl(s*o,t*o,e+h*101)*2-1);i+=(1-l)*r,a+=r,r*=.5,o*=2}return i/a}function Zh(s,t){const e=Math.floor(s),n=sl(s-e),i=te(e,0,t),r=te(e+1,0,t);return i+(r-i)*n}const Jc=0,rl=1,t_=2,ol=3,eo=4,e_=1e6,Re=320;class n_{constructor(t){this.seed=t;const e=new wo(t^24378);for(let n=0;n<6;n++){const i=e.range(0,Math.PI*2),r=e.range(160,900);this.oases.push({x:Math.round(Math.cos(i)*r),z:Math.round(Math.sin(i)*r),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),i=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*i),z:Math.round(Math.sin(n)*i)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,i=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*i),z:Math.round(Math.sin(n)*i)}}for(let n=0;n<13;n++){const i=e.range(0,Math.PI*2),r=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(i)*r),z:Math.round(Math.sin(i)*r),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(te(t,e,this.seed+53)-.5)*110,i=(te(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*Re+n),z:Math.round(e*Re+i)}}get gtx(){return Math.round(this.homeTown.x/Re)}get gtz(){return Math.round(this.homeTown.z/Re)}townAt(t,e){if(t===this.gtx&&e===this.gtz)return!0;if(Math.abs(t)<2&&Math.abs(e)<2||te(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const i of this.oases)if(Math.hypot(i.x-n.x,i.z-n.z)<i.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let i=null,r=n;const o=Math.floor((t-n)/Re),a=Math.floor((t+n)/Re),h=Math.floor((e-n)/Re),l=Math.floor((e+n)/Re);for(let c=o;c<=a;c++)for(let u=h;u<=l;u++){if(!this.townAt(c,u))continue;const f=this.townCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=r&&(r=m,i=f)}return i}nearestTown(t,e){let n=null,i=1/0;const r=Math.floor(t/Re),o=Math.floor(e/Re);for(let a=r-4;a<=r+4;a++)for(let h=o-4;h<=o+4;h++){if(!this.townAt(a,h))continue;const l=this.townCenter(a,h),c=Math.hypot(l.x-t,l.z-e);c<i&&(i=c,n=l)}return n??this.homeTown}}function Il(s,t,e){const n=Math.min(.999,Math.max(.001,qs(s/900+.5,t/900+.5,e,3))),r=[.17,.42,.57,.72,.9].map(h=>Math.exp(-Math.abs(n-h)/.05)),o=Math.max(Math.abs(s),Math.abs(t));o<80&&(r[0]+=Math.pow(1-o/80,2)*6);const a=r.reduce((h,l)=>h+l,0);return r.map(h=>h/a)}function no(s,t,e){const n=Il(s,t,e);let i=0;for(let r=1;r<5;r++)n[r]>n[i]&&(i=r);return i}function i_(s,t,e){const n=Il(t,e,s),i=[30+qs(t/140,e/140,s+7)*8+Math.sin(t/9+e/13)*.9,29+qs(t/160,e/160,s+9)*6+Math.max(0,Cl(t/26,e/26,s+11)-.72)*10,28+qs(t/220,e/220,s+5)*3,33+Math.floor(qs(t/170,e/170,s+13)*4.99)*5,29-Qg(t/210,e/210,s+17)*9];let r=0;for(let o=0;o<5;o++)r+=n[o]*i[o];return r}function Ce(s,t,e){const n=Math.max(Math.abs(t),Math.abs(e)),i=i_(s,t,e);if(n>=30)return i;if(n<=14)return 30;const r=(n-14)/16,o=r*r*(3-2*r);return 30+(i-30)*o}function s_(s,t,e,n,i){const r=Il(t,e,s);let o=0,a=1;r[1]>r[0]&&(o=1,a=0);for(let h=2;h<5;h++)r[h]>r[o]?(a=o,o=h):r[h]>r[a]&&(a=h);return r[a]/r[o]>.35&&te(t,e,s+45)<r[a]/(r[o]+r[a])&&(o=a),n===i?o===t_?Us:o===eo?yi:o===ol?Tn:o===rl&&te(t,e,s+41)>.78?hr:On:n>=i-3?o===eo?yi:On:o===ol||o===eo?yi:Tn}function r_(s){const n=(a,h)=>a===4||a===-6?Math.abs(h)<=4:h===5||h===-5?a>=-5&&a<=3:a>=-5&&a<=3&&h>=-4&&h<=4,i=(a,h,l)=>(a===4||a===-6)&&Math.abs(l)>=3&&(h===30||h===34);for(let a=-6;a<=4;a++)for(let h=-5;h<=5;h++)for(let l=30;l<=34;l++){if(!n(a,h)||i(a,l,h))continue;const c=a>=2&&Math.abs(h)>2,u=a>=-5&&a<=3&&h>=-4&&h<=4&&l>=31&&l<=33&&!c;s(a,l,h,u?Ft:l===30?Xn:nn)}for(let a=-3;a<=1;a++)for(let h=-2;h<=2;h++)s(a,35,h,nn);for(let a=-2;a<=0;a++)for(let h=-1;h<=1;h++)s(a,36,h,nn);for(let a=-2;a<=1;a++)for(const h of[6,7,8,9,-6,-7,-8,-9])s(a,32,h,Xn);for(const a of[-3,2])for(const h of[6,7,8,-6,-7,-8])s(a,32,h,Xn);for(const a of[-1,0])s(a,31,10,Xn),s(a,31,-10,Xn);const r=(a,h,l)=>{s(a,h,l,on),s(a,h+1,l,Ke)},o=(a,h,l)=>{s(a,h,l,Ye),s(a,h+1,l,He)};for(let a=-4;a<=4;a++)for(let h=31;h<=33;h++)s(1,h,a,nn),s(-2,h,a,nn);for(let a=-5;a<=-3;a++)for(const h of[-2,2])for(let l=31;l<=33;l++)s(a,l,h,nn);o(1,31,0),o(-2,31,0),o(-2,31,3),o(-2,31,-3),r(-6,31,0);for(let a=-2;a<=2;a++)for(let h=32;h<=33;h++)s(4,h,a,dr);s(-4,30,4,qe),s(-4,29,4,qe),s(-3,30,4,qe),s(-4,31,-4,ki),s(-4,31,-1,Mn),s(0,31,-3,ze),s(0,31,-2,fn);for(const[a,h]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])s(a,34,h,Wn);for(const[a,h]of[[0,3],[0,4],[-1,4],[2,2]])s(a,31,h,Xn)}function o_(s,t,e){const n=new wo(e_+77);for(let i=0;i<40;i++){const r=t.x+n.int(-5,5),o=t.z+n.int(-5,5),a=Math.round(Ce(e,r,o));s(r,a+n.int(0,1),o,n.next()<.5?nn:Xn)}s(t.x,Math.round(Ce(e,t.x,t.z))+1,t.z,is)}function Jh(s,t,e,n){const i=5+Math.floor(n()*3),r=[],o=(u,f,m,v,M)=>r.push({x:u,y:f,z:m,b:v,stage:M});o(s,t,e,Fn,1),o(s,t+1,e,Fn,1);for(let u=2;u<i;u++)o(s,t+u,e,Fn,2);const a=[[1,0],[-1,0],[0,1],[0,-1]],h=2+(n()<.5?1:0);for(let u=0;u<h;u++){const f=a[Math.floor(n()*4)];o(s+f[0],t+i-2+u%2,e+f[1],Fn,2)}const l=new Set(r.map(u=>u.x+","+u.y+","+u.z)),c=t+i-1;for(let u=-1;u<=2;u++){const f=u===-1||u===2?1.7:2.4;for(let m=-3;m<=3;m++)for(let v=-3;v<=3;v++){const M=m*m+v*v+u*u*2.2;if(M>f*f||M>(f-.9)*(f-.9)&&n()<.3||m===0&&v===0)continue;const _=s+m,g=c+u,T=e+v;l.has(_+","+g+","+T)||o(_,g,T,hi,3)}}return r}function Qh(s,t,e,n,i,r){const o=new wo(te(t,n,i+r)*4294967296>>>0||1);for(const a of Jh(t,e+1,n,()=>o.next()))s(a.x,a.y,a.z,a.b)}function a_(s,t,e){const n=Math.round(Ce(e,t.x,t.z));for(let o=-t.r-1;o<=t.r+1;o++)for(let a=-t.r-1;a<=t.r+1;a++){const h=t.x+o,l=t.z+a,c=Math.sqrt(o*o+a*a),u=Math.round(Ce(e,h,l));if(c<=t.r){const f=Math.max(1,Math.round(2.7-1.7*(c/t.r)));for(let m=u;m>n-f;m--)s(h,m,l,Ft);s(h,n-f,l,On);for(let m=n-f+1;m<=n;m++)s(h,m,l,qe)}else if(c<=t.r+1)for(let f=u;f<n+1;f++)s(h,f,l,On)}const i=3+(te(t.x,t.z,e+73)<.5?1:0);for(let o=-t.r-i;o<=t.r+i;o++)for(let a=-t.r-i;a<=t.r+i;a++){const h=Math.sqrt(o*o+a*a);if(h<=t.r||h>t.r+i)continue;const l=t.x+o,c=t.z+a,u=Math.max(Math.round(Ce(e,l,c)),n);for(let f=u-2;f<=u;f++)s(l,f,c,f===u?Kn:Bn)}const r=4+Math.floor(te(t.x,t.z,e+75)*4);for(let o=0;o<r;o++){const a=o*(Math.PI*2/r)+te(t.x+o,t.z-o,e+77)*1.1,h=t.r+1.5+te(t.x-o,t.z+o,e+79)*(i+2),l=t.x+Math.round(Math.cos(a)*h),c=t.z+Math.round(Math.sin(a)*h),u=Math.max(Math.round(Ce(e,l,c)),n);Qh(s,l,u,c,e,81)}for(let o=0;o<5;o++){if(te(t.x,t.z,e+61+o)<.35)continue;const a=o*1.27+te(t.z,t.x,e+67+o)*.8,h=t.r+.5,l=t.x+Math.round(Math.cos(a)*h),c=t.z+Math.round(Math.sin(a)*h);Math.hypot(l-t.x,c-t.z)<t.r||s(l,Math.max(Math.round(Ce(e,l,c)),n)+1,c,yn)}}function l_(s,t,e){for(const[l,c]of[[-4,-3],[3,2],[-3,5]]){const u=Math.round(Ce(e,t.x+l,t.z+c));for(let f=0;f<5;f++)for(let m=0;m<5;m++)for(let v=u-1;v<=u+3;v++){const M=v===u-1,_=(f===0||f===4||m===0||m===4)&&v>=u&&v<=u+2,g=v===u+3,T=f===0&&(m===2||m===3)&&v>=u&&v<=u+2;if(!(M||_||g)||T){s(t.x+l+f,v,t.z+c+m,Ft);continue}s(t.x+l+f,v,t.z+c+m,fr)}s(t.x+l+1,u,t.z+c+1,Te),s(t.x+l+3,u,t.z+c+1,rn),s(t.x+l+4,u,t.z+c+1,En)}const n=t.x+3+Math.round((te(t.x,t.z,e+83)-.5)*8),i=t.z-3+Math.round((te(t.z,t.x,e+85)-.5)*8),r=2.5+te(t.x,t.z,e+87)*2,o=(l,c)=>[[-4,-3],[3,2],[-3,5]].some(([u,f])=>l>=u-1+t.x&&l<=u+5+t.x&&c>=f-1+t.z&&c<=f+5+t.z);for(let l=-5;l<=5;l++)for(let c=-5;c<=5;c++){if(Math.sqrt(l*l+c*c)>r)continue;const u=n+l,f=i+c;if(o(u,f))continue;const m=Math.round(Ce(e,u,f));for(let v=m-2;v<=m;v++)s(u,v,f,v===m?Kn:Bn)}const a=3+Math.floor(te(t.x,t.z,e+89)*4);for(let l=0;l<a;l++){const c=l*(Math.PI*2/a)+te(t.x+l,t.z-l,e+91)*1.3,u=1+te(t.x-l,t.z+l,e+93)*r,f=n+Math.round(Math.cos(c)*u),m=i+Math.round(Math.sin(c)*u);o(f,m)||Qh(s,f,Math.round(Ce(e,f,m)),m,e,95)}const h=Math.round(Ce(e,t.x,t.z+11));for(let l=0;l<5;l++)for(let c=0;c<3;c++)s(t.x-8+l,h,t.z+10+c,bn);s(t.x-7,h+1,t.z+11,Qe),s(t.x-5,h+1,t.z+10,Qe),s(t.x-4,h+1,t.z+12,yn)}function c_(s,t,e,n){const i=new Uint8Array(st*st*ne),r=(c,u,f,m)=>{const v=c-e*st,M=f-n*st;v>=0&&v<st&&M>=0&&M<st&&u>=0&&u<ne&&(i[(v*st+M)*ne+u]=m)};for(let c=0;c<st;c++)for(let u=0;u<st;u++){const f=e*st+c,m=n*st+u,v=Math.round(Ce(s,f,m));for(let _=0;_<=v;_++)i[(c*st+u)*ne+_]=s_(s,f,m,_,v);const M=f*f+m*m<240;if(!M&&te(f,m,s+21)>.988){const _=no(f,m,s);if(_===Jc||_===rl){for(let g=1;g<=2;g++)r(f,v+g,m,yi);c>0&&r(f-1,v+1,m,yi)}}if(!M&&te(f,m,s+23)>.9935){const _=no(f,m,s);if(_!==ol&&_!==eo){const g=3+(te(f,m,s+29)*3|0);for(let T=v+1;T<=v+g;T++)r(f,T,m,ur)}}if(!M&&i[(c*st+u)*ne+v+1]===0&&te(f,m,s+31)>.9915){const _=no(f,m,s);if(_===Jc||_===rl){const g=2+(te(f,m,s+37)*3|0);for(let T=v+1;T<=v+g;T++)r(f,T,m,$e);g>=3&&te(f,m,s+41)>.55&&r(f+(te(f,m,s+43)>.5?1:-1),v+2,m,$e),g>=3&&te(f,m,s+47)>.7&&r(f,v+g,m,ri)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&r_(r);for(const c of t.oases)Math.abs(e*st+8-c.x)<c.r+24&&Math.abs(n*st+8-c.z)<c.r+24&&a_(r,c,s);const o=Math.floor((e*st-14-Re)/Re),a=Math.floor((e*st+st+14+Re)/Re),h=Math.floor((n*st-14-Re)/Re),l=Math.floor((n*st+st+14+Re)/Re);for(let c=o;c<=a;c++)for(let u=h;u<=l;u++){if(!t.townAt(c,u))continue;const f=t.townCenter(c,u);e*st<=f.x+16&&e*st+st-1>=f.x-12&&n*st<=f.z+12&&n*st+st-1>=f.z-16&&l_(r,f,s)}return Math.abs(e*st+8-t.secondShip.x)<12&&Math.abs(n*st+8-t.secondShip.z)<12&&o_(r,t.secondShip,s),i}const qn=(s,t)=>s+","+t,Qc=(s,t,e)=>(s*st+t)*ne+e,ha=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],th=new Set([Ft,Oe,Ye,He,sn,hi]);class h_{constructor(t){this.seed=t,this.gen=new n_(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;waterQ=new Set;gen;chunk(t,e){const n=qn(t,e);let i=this.chunks.get(n);if(!i){i=c_(this.seed,this.gen,t,e);const r=this.deltas.get(n);if(r)for(const[o,a]of r)i[o]=a;this.chunks.set(n,i)}return i}get(t,e,n){if(e<0||e>=ne)return Ft;const i=Math.floor(t/st),r=Math.floor(n/st);return this.chunk(i,r)[Qc(t-i*st,n-r*st,e)]}skyResistance(t,e,n,i=40){let r=0,o=0;for(let a=1;a<=i;a++){const h=this.get(t,e+a,n);if(h===Ft)continue;const l=u_[h];if(l&&(r+=l,h!==hi&&(o+=l,o>=6)))return{R:r,openSky:!1}}return{R:r,openSky:o===0}}roomInfo(t,e,n,i=400){if(!th.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const r=new Set([`${t},${e},${n}`]),o=[[t,e,n]],a=new Set;let h=0,l=!0;for(;o.length;){const[c,u,f]=o.pop();if(++h>i){l=!1;break}for(const[m,v,M]of ha){const _=c+m,g=u+v,T=f+M;if(g>=ne){l=!1;continue}const R=this.get(_,g,T);if(th.has(R)){const b=_+","+g+","+T;r.has(b)||(r.add(b),o.push([_,g,T]))}else R===ki&&a.add(_+","+g+","+T)}}return{size:h,sealed:l,regulators:a.size,regCells:[...a]}}set(t,e,n,i){if(e<0||e>=ne)return;const r=Math.floor(t/st),o=Math.floor(n/st),a=this.chunk(r,o),h=Qc(t-r*st,n-o*st,e);if(a[h]===i)return;const l=a[h];if(a[h]=i,ni(i)||ni(l)||i===Ft){this.queueWater(t,e,n);for(const[m,v,M]of ha)this.queueWater(t+m,e+v,n+M)}let c=this.deltas.get(qn(r,o));c||this.deltas.set(qn(r,o),c=new Map),c.set(h,i),this.markDirty(r,o);const u=t-r*st,f=n-o*st;u===0&&this.markDirty(r-1,o),f===0&&this.markDirty(r,o-1),u===st-1&&this.markDirty(r+1,o),f===st-1&&this.markDirty(r,o+1)}markDirty(t,e){this.dirty.add(qn(t,e))}queueWater(t,e,n){e>=0&&e<ne&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;const n=[...this.waterQ];this.waterQ.clear();for(const i of n){if(e>=t)break;const[r,o,a]=i.split(",").map(Number);e+=this.drainFlow(r,o,a,t-e),e+=this.floodFrom(r,o,a,t-e)}return e}drainFlow(t,e,n,i){let r=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],a=new Set;for(;o.length&&r++<i;){const[h,l,c]=o.pop(),u=Ms(this.get(h,l,c));if(!u||u===8)continue;const f=h+","+l+","+c;if(!a.has(f)&&(a.add(f),!this.waterSupported(h,l,c,u))){this.set(h,l,c,Ft);for(const[m,v,M]of ha)o.push([h+m,l+v,c+M])}}return r}waterSupported(t,e,n,i){for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(Ms(this.get(t+r,e,n+o))>i)return!0;return Ms(this.get(t,e+1,n))>=i}floodFrom(t,e,n,i){let r=0;const o=[[t,e,n]];for(;o.length&&r++<i;){const[a,h,l]=o.shift(),c=Ms(this.get(a,h,l));if(!c)continue;if(h>0){const f=this.get(a,h-1,l);(f===Ft||ni(f))&&Ms(f)<c&&this.set(a,h-1,l,Zc(c===8?7:c))}const u=c===8?7:c-1;if(!(u<1))for(const[f,m]of[[1,0],[-1,0],[0,1],[0,-1]]){const v=this.get(a+f,h,l+m);(v===Ft||ni(v))&&Ms(v)<u&&this.set(a+f,h,l+m,Zc(u))}}return r}surface(t,e){for(let n=ne-1;n>=0;n--)if(this.get(t,n,e)!==Ft)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const i=[];for(const[r,o]of n)i.push(r,o);t[e]=i}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const i=new Map;for(let r=0;r<n.length;r+=2)i.set(n[r],n[r+1]);this.deltas.set(e,i)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}}const u_=oi.map(s=>s.R);function d_(s,t,e,n,i){const r=s.get(t,e,n);return r===on||r===Ke||r===Ye||r===He?!0:!(Rl(r)||r===i)}const $r=.6,f_=1.8,eh=1.62;class p_{constructor(t){this.world=t}pos=new D(.5,31.01,2.5);vel=new D;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;waterAt(t){return ni(this.world.get(Math.floor(this.pos.x),Math.floor(this.pos.y+t),Math.floor(this.pos.z)))}collides(t,e,n){const i=Math.floor(t-$r/2),r=Math.floor(t+$r/2),o=Math.floor(n-$r/2),a=Math.floor(n+$r/2),h=Math.floor(e),l=Math.floor(e+f_-.001);for(let c=i;c<=r;c++)for(let u=o;u<=a;u++)for(let f=h;f<=l;f++)if(tn(this.world.get(c,f,u)))return!0;return!1}update(t,e,n,i,r,o){this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(eh);const a=this.inWater,h=(this.sprinting?7.2:4.5)*r*(o?.25:1)*(a?.55:1),l=new D(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new D(-l.z,0,l.x),u=l.multiplyScalar(n).add(c.multiplyScalar(e));u.lengthSq()>1&&u.normalize();const f=this.onGround?40:a?12:8;this.vel.x+=(u.x*h-this.vel.x)*Math.min(1,f*t),this.vel.z+=(u.z*h-this.vel.z)*Math.min(1,f*t),a?(this.vel.y-=7*t,i&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=Di.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,i&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0)),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,i=Math.max(1,Math.ceil(Math.abs(t)/.3)),r=t/i;for(let o=0;o<i;o++){const a=n.x+(e===0?r:0),h=n.y+(e===1?r:0),l=n.z+(e===2?r:0);if(!this.collides(a,h,l)){n.set(a,h,l);continue}e===1?(r<0&&(this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new D(this.pos.x,this.pos.y+eh,this.pos.z)}}const ji=20,$s=45,Ll=36,Pl=37.5,al=39.5,ll=31.5,cl=5,m_=27,g_=25,fo=100;class __{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%Ne/Ne}ambient(t,e,n){const i=(e-.28+1)%1;let r=m_-g_*(i<=.3?Math.cos(i/.3*Math.PI):Math.cos((1+(i-.3)/.7)*Math.PI));t===2&&(r-=2),(t===3||t===4)&&(r+=3);const o=Zh(Math.floor(n/10)/60,this.weatherSeed)*2-1;return r+o*8}update(t,e,n,i){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const r=this.worldTimeToDayFrac(i.tSec),o=this.ambient(i.biome,r,i.tSec),a=Math.floor(n.x),h=Math.floor(n.y),l=Math.floor(n.z),c=(T,R,b)=>{const{R:L,openSky:d}=e.skyResistance(T,R,b);let p=1-Math.exp(-L),x=o;d&&i.sunElev>0&&(x+=8+10*i.sunElev);const y=e.roomInfo(T,R,b);return y.sealed&&(y.regulators*fo>=y.size?(x=36.6,p=1):(x=o,p=0)),{R:L,openSky:d,shelter:p,ambEff:x,room:y}};let u=c(a,h,l);if(u.room.size===0){const T=`${a},${h},${l}|${Math.floor(i.tSec*2)}`;if(this.embedKey!==T){let R=u;for(let b=-1;b<=1;b++)for(let L=-1;L<=1;L++)for(let d=-1;d<=1;d++){if(!b&&!L&&!d)continue;const p=c(a+b,h+L,l+d);p.room.size!==0&&Math.abs(p.ambEff-37)<Math.abs(R.ambEff-37)&&(R=p)}this.embedKey=T,this.embedAir=R}this.embedAir&&(u=this.embedAir)}this.lastOpenSky=u.openSky;let f=u.shelter,m=u.ambEff;const v=u.room;if(this.lastRoom=v,i.inWater){const T=Di.clamp(o,12,24)-3;m=(m+T)/2}i.warmth&&(m+=i.warmth);const M=36.6+(m-36.6)*(1-f);this.lastAmbient=o,this.lastAmbientEff=m,this.lastShelterR=u.R,this.lastTarget=M;const _=v.sealed?.022:.0075;this.body+=(M-this.body)*_*t,this.body=Di.clamp(this.body,12,44.5);let g=100/(Ne*1.5);this.body>37&&(g+=(this.body-37)*.02),i.sprinting&&(g*=1.7),i.overencumbered&&(g+=.05),this.water=Math.max(0,this.water-g*t),this.body>al&&this.hurt((this.body-al)*.15,"heat stroke"),this.body<ll&&this.hurt((ll-this.body)*.175,"hypothermia"),this.water<=0?this.hurt(.3,"dehydration"):this.water<cl&&this.hurt((cl-this.water)*.0375,"dehydration"),this.water>25&&this.body>=Ll&&this.body<=Pl&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=Di.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,i,r){const o=this.worldTimeToDayFrac(r),a=this.ambient(0,o,r),{openSky:h}=t.skyResistance(e,n,i);let l=a;const c=Math.max(0,Math.sin((o-.28)*Math.PI*2));h&&c>0&&(l+=8+10*c);const u=t.roomInfo(e,n,i);return u.sealed&&(l=u.regulators*fo>=u.size?36.6:a),l}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=10,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const io=15,Ys=st+2,Qi=(s,t,e)=>((s+1)*Ys+(t+1))*ne+e,v_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function nh(s){return s===hi?2:s===Ft?1:Rl(s)?-1:1}function x_(s){return s===hi?2:ni(s)?1:s===Ft?0:Rl(s)?-1:0}class M_{maps=new Map;invalidate(t,e){this.maps.delete(qn(t,e))}lightAt(t,e,n){if(e<0||e>=ne)return 0;const i=Math.floor(t/st),r=Math.floor(n/st),o=this.maps.get(qn(i,r));return o?o[Qi(t-i*st,n-r*st,e)]:0}bake(t,e,n,i){const r=t.chunk(e,n),o=new Uint8Array(Ys*Ys*ne),a=[],h=(c,u,f,m)=>{if(m<=0)return;const v=Qi(c,u,f);m>o[v]&&(o[v]=m,a.push(v))},l=(c,u,f)=>c>=0&&c<st&&u>=0&&u<st?r[(c*st+u)*ne+f]:t.get(e*st+c,f,n*st+u);for(let c=-1;c<=st;c++)for(let u=-1;u<=st;u++){let f=io;for(let m=ne-1;m>=0;m--){const v=x_(l(c,u,m));if(v<0||(h(c,u,m,f),v>0&&(f-=v,f<=0)))break}}for(const[c,u]of[[-1,0],[1,0],[0,-1],[0,1]]){const f=this.maps.get(qn(e+c,n+u));if(f)for(let m=0;m<st;m++)for(let v=0;v<ne;v++){const M=c<0?-1:c>0?st:m,_=u<0?-1:u>0?st:m,g=c<0?st-1:c>0?0:m,T=u<0?st-1:u>0?0:m,R=f[Qi(g,T,v)];R>0&&h(M,_,v,R)}}for(let c=0;c<a.length;c++){const u=a[c],f=o[u];if(f<=1)continue;const m=(u/(Ys*ne)|0)-1,v=u%(Ys*ne),M=(v/ne|0)-1,_=v%ne;for(const[g,T,R]of v_){const b=m+g,L=M+R,d=_+T;if(!(d<0||d>=ne))if(b>=-1&&b<=st&&L>=-1&&L<=st){const p=nh(l(b,L,d));p>=0&&h(b,L,d,f-p)}else{const p=e*st+b,x=n*st+L,y=nh(t.get(p,d,x));if(y<0)continue;const S=Math.floor(p/st),C=Math.floor(x/st),P=this.maps.get(qn(S,C));P&&P[Qi(p-S*st,x-C*st,d)]+1<f-y&&i(S,C)}}}return this.maps.set(qn(e,n),o),o}}const y_=new Set([on,Ke,Oe,Ye,He,sn]),S_=new Set([Un,Qe,Dn]),ih=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],Be=16,ii=16,ir=[On,Tn,yi,hr,Bn,Us,ur,vo,dr,nn,on,Ke,Wn,xo,Mn,ze,We,qe,fr,Oe,is,ki,Te,fn,$e,pr,Mo,yo,So,bo,Eo,mr,bn,Pn,yn,Un,Qe,ri,gr,Xn,Ye,He,sn,rn,En,Kn,Fn,hi,Dn],tu=[["grass_top",Kn],["grass_side",Kn],["wood_top",Fn],["farmland_side",bn],["sandstone_top",Tn],["hull_top",nn],["water_side",qe],["bed_side",rn],["chest_top",Te],["bench_top",ze],["bench_ext_top",fn],["campfire_top",We],["cactus_top",$e]],Fe={};tu.forEach(([s],t)=>Fe[s]=ir.length+t);let ua=null;function eu(){if(ua)return ua;const s=document.createElement("canvas");s.width=s.height=ii*Be;const t=s.getContext("2d"),e=new wo(48879);ir.forEach((d,p)=>p);let n=0,i=0,r=0,o=0,a=0;const h=d=>Math.max(0,Math.min(1,d)),l=(d,p=1,x=0,y=0,S=0)=>`rgba(${Math.round(h(r+d+x)*255)},${Math.round(h(o+d+y)*255)},${Math.round(h(a+d+S)*255)},${p})`,c=(d,p,x)=>{t.fillStyle=x,t.fillRect(n+d,i+p,1,1)},u=d=>{t.fillStyle=d,t.fillRect(n,i,Be,Be)},f=d=>(e.next()-.5)*d,m=(d,p)=>{for(let x=0;x<d;x++)c(e.int(0,15),e.int(0,15),l(f(p)))},v=(d,p,x=-.15)=>{let y=e.int(1,13),S=e.int(1,13);for(let C=0;C<d;C++)c(y,S,l(x+f(p))),y+=e.int(-1,1),S+=e.int(0,1),y=Math.max(0,Math.min(15,y)),S=Math.max(0,Math.min(15,S))},M=()=>{const d=y=>{const S=[];for(let k=0;k<y*y;k++)S.push(e.next());const C=(k,z)=>S[z%y*y+k%y],P=[];for(let k=0;k<16;k++)for(let z=0;z<16;z++){const B=z*y/16,W=k*y/16,Y=Math.floor(B),H=Math.floor(W),J=B-Y,it=W-H,ft=C(Y,H)+(C(Y+1,H)-C(Y,H))*J,Tt=C(Y,H+1)+(C(Y+1,H+1)-C(Y,H+1))*J;P.push(ft+(Tt-ft)*it)}return P},p=d(4),x=d(8);return p.map((y,S)=>(y*.65+x[S]*.35-.5)*2)},_=d=>{const p=M();for(let x=0;x<16;x++)for(let y=0;y<16;y++)c(y,x,l(d(y,x,p[x*16+y])));return p},g=(d,p,x,y)=>{for(let S=-x;S<=x;S++)for(let C=-x;C<=x;C++){const P=Math.hypot(C,S);P>x+.3||c(d+C,p+S,l(y+(P>x-.6?-.2:C+S<-x*.5?.14:-.02)))}},T=(d,p,x=.25)=>{for(const y of d)for(let S=0;S<16;S++){const C=S-y;C>=0&&C<16&&c(S,C,l(x,p))}},R={},b=(d,p)=>R[d]=p;b(String(On),()=>{_((d,p,x)=>x*.07+Math.sin((d+p)*.55+x*5)*.03),m(24,.18);for(let d=0;d<5;d++)c(e.int(0,15),e.int(0,15),l(-.14))}),b(String(Tn),()=>{const d=M();for(let p=0;p<16;p++){const x=Math.floor((p+d[p*16+8]*1.2+16)%16/4),y=[-.05,.03,-.01,.05][x%4];for(let S=0;S<16;S++)c(S,p,l(y+d[p*16+S]*.05+(p%4===0?-.12:0)))}m(26,.08)}),b("sandstone_top",()=>{_((d,p,x)=>x*.06);for(let d=0;d<7;d++){const p=e.int(1,14),x=e.int(1,14);c(p,x,l(-.13)),c(p+1,x,l(-.06))}m(30,.1)}),b(String(yi),()=>{_((d,p,x)=>x*.1),v(11,.06,-.14),v(8,.06,-.2);for(let d=0;d<4;d++)c(e.int(0,15),e.int(0,15),l(.2));m(16,.1)}),b(String(hr),()=>{_((d,p,x)=>x*.08-.06);for(let d=0;d<9;d++)g(e.int(2,13),e.int(2,13),e.int(1,3),f(.18))}),b(String(Bn),()=>{_((d,p,x)=>x*.13+(Math.sin(d*1.4)+Math.cos(p*1.1))*.03),m(44,.2);for(let d=0;d<3;d++){const p=e.int(2,13),x=e.int(2,13);c(p,x,l(.16)),c(p+1,x,l(.08))}}),b(String(Us),()=>{_((d,p,x)=>x*.05+.04),v(10,.03,.06),v(8,.03,.09);for(let d=0;d<30;d++)c(e.int(0,15),e.int(0,15),l(.13))}),b(String(ur),()=>{const d=_((p,x,y)=>y*.04-.05);for(let p=0;p<16;p++){for(let x=1;x<15;x++)Math.sin(x*.5+p*2.6+d[p*16+x]*4)>.7&&c(x,p,l(-.18));p%5===2&&e.next()>.4&&c(e.int(2,13),p,l(.12))}}),b(String(vo),()=>{u("rgba(170,215,232,0.22)"),T([5,8,14],.5,.3),T([11],.32,.22)}),b(String(dr),()=>{_((d,p,x)=>x*.05),v(7,.02,-.1),T([9],.18,.12)}),b(String(nn),()=>{const d=_((p,x,y)=>y*.03);for(let p=0;p<16;p++)c(p,10,l(-.24)),p%2===0&&c(p,9,l(-.08));for(let p=0;p<16;p++)if(p%4===1)for(const x of[1,6,11])c(x,p,l(.22)),c(x+1,p,l(.05)),c(x,p+1,l(-.16)),c(x+1,p+1,l(-.12));for(let p=0;p<10;p++)c(e.int(0,15),e.int(0,15),l(-.02,1,.06,-.01,-.08));d[60]>.3&&c(12,3,l(.35,1,.1,0,0))}),b("hull_top",()=>{_((d,p,x)=>x*.03);for(const d of[4,12])for(let p=0;p<16;p++)c(p,d,l(-.22));for(const d of[2,7,12])for(let p=0;p<16;p++)p%4===2&&c(d,p,l(.2));for(let d=0;d<8;d++)c(e.int(0,15),e.int(0,15),l(.28,1,.05,-.02,-.06))}),b(String(on),()=>{_((d,p,x)=>x*.03-.03);for(let d=0;d<16;d++)c(d,0,l(-.26)),c(d,15,l(-.26)),c(0,d,l(-.26)),c(15,d,l(-.26));for(let d=2;d<=12;d++)for(let p=3;p<=12;p++)p===3||p===12||d===2||d===12?c(p,d,l(-.2)):p===4&&d>3&&d<11&&c(p,d,l(.08));for(let d=7;d<=9;d++)c(13,d,l(.35)),c(12,d,l(-.28));for(let d=5;d<11;d++)c(d,14,l(-.15,1,.1,0,-.02))}),b(String(Ke),()=>{_((d,p,x)=>x*.03-.03);for(let d=0;d<16;d++)c(d,0,l(-.26)),c(d,15,l(-.26)),c(0,d,l(-.26)),c(15,d,l(-.26));for(let d=4;d<=11;d++)for(let p=5;p<=10;p++)c(p,d,l(-.32,1,-.1,-.02,.06));for(const d of[5,8])for(let p=5;p<=10;p++){const x=p-d+4;x>=4&&x<=11&&c(p,x,l(.35,.5))}for(const[d,p]of[[2,2],[13,2],[2,13],[13,13]])c(d,p,l(.2))}),b(String(Oe),()=>{for(let d=0;d<16;d++)c(0,d,l(-.1,.9)),c(1,d,l(.05,.85)),c(2,d,l(-.15,.7));c(1,7,l(.3,.9)),c(1,8,l(.3,.9))}),b(String(Wn),()=>{u(l(-.28));for(let d=4;d<=11;d++)for(let p=4;p<=11;p++){const x=Math.max(Math.abs(p-7.5),Math.abs(d-7.5));c(p,d,x>3?l(.12):l(.42-x*.06,1,.3,.18,-.02))}for(const[d,p]of[[4,4],[11,4],[4,11],[11,11]])c(d,p,l(.25))}),b(String(xo),()=>{_((d,p,x)=>x*.03+(p%2===0?.02:-.02));for(const[d,p]of[[2,2],[13,2],[2,13],[13,13]])c(d,p,l(.22));for(let d=0;d<5;d++){const p=e.int(2,13),x=e.int(2,13);c(p,x,l(-.12,1,.24,.02,-.14)),c(p+1,x,l(-.2,1,.16,0,-.1))}}),b(String(Mn),()=>{_((d,p,x)=>x*.03-.25);for(let d=-3;d<=3;d++){const p=3-Math.abs(d);for(let x=-p;x<=p;x++)Math.hypot(x,d)>p+.3||c(8+x,8+d,l(d===0?.05:0,1,.95-Math.abs(d)*.08,.15,.1))}for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++)Math.hypot(p,d)<1.6&&c(8+p,8+d,l(.4-Math.hypot(p,d)*.15,1,1,.3,.1));for(let d=0;d<16;d+=3){const p=3-Math.abs(d%6-3);for(let x=-p;x<=p;x++)c(8+x,d,l(.08))}}),b(String(ze),()=>{const d=_((p,x,y)=>y*.05+(x<5?.02:-.14));for(let p=0;p<16;p++)c(p,0,l(.14)),c(p,1,l(.06)),c(p,4,l(-.26));for(let p=5;p<16;p++)for(const x of[1,2,13,14])c(x,p,l(.06+d[p*16+x]*.02));for(let p=6;p<=10;p++)for(let x=4;x<=11;x++)c(x,p,l(-.04+d[p*16+x]*.04));for(let p=4;p<=11;p++)c(p,6,l(-.28)),c(p,10,l(-.28));c(7,8,"rgba(190,190,190,1)"),c(8,8,"rgba(190,190,190,1)");for(let p=3;p<=12;p++)c(p,13,l(.1)),c(p,14,l(-.3))}),b("bench_top",()=>{_((d,p,x)=>x*.04+Math.sin(p*1.7+x*3)*.03);for(let d=0;d<16;d++)c(d,0,l(-.2)),c(d,15,l(-.2));for(let d=0;d<16;d++)if(d%5===4)for(let p=0;p<16;p++)c(p,d,l(-.14));for(let d=2;d<=11;d++)c(d,4,"rgba(160,166,178,1)");for(let d=2;d<=11;d+=2)c(d,5,"rgba(120,126,140,1)");c(12,4,"rgba(96,66,40,1)"),c(13,4,"rgba(96,66,40,1)"),c(12,5,"rgba(80,54,32,1)");for(let d=4;d<=6;d++)c(d,9,"rgba(120,88,54,1)");for(let d=4;d<=6;d++)c(d,10,"rgba(100,72,44,1)");c(5,11,"rgba(150,156,168,1)"),c(5,12,"rgba(150,156,168,1)"),c(5,13,"rgba(140,146,158,1)");for(let d=0;d<6;d++)c(e.int(0,15),e.int(0,15),l(-.06,1,.02,-.01,-.04))}),b(String(fn),()=>{_((d,p,x)=>x*.04-.14);for(let d=0;d<16;d++)c(d,0,l(.05)),c(d,2,l(-.24));for(let d=3;d<16;d++)for(const p of[1,2,13,14])c(p,d,l(.04));for(let d=3;d<=12;d++)c(d,11,l(.08)),c(d,12,l(-.26))}),b("bench_ext_top",()=>{_((d,p,x)=>x*.04+Math.sin(d*1.6+x*2)*.03);for(let d=0;d<16;d++)c(0,d,l(-.18)),c(15,d,l(-.18));for(let d=0;d<16;d++)for(let p=0;p<16;p++)p%6===3&&e.next()>.5&&c(p,d,l(-.1))}),b(String(We),()=>{_((d,p,x)=>x*.05-.1);for(let d=0;d<5;d++)g(2+d*3,13,1,-.05);t.strokeStyle="rgba(70,50,32,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,i+13),t.lineTo(n+12,i+9),t.stroke(),t.beginPath(),t.moveTo(n+12,i+13),t.lineTo(n+4,i+9),t.stroke(),t.lineWidth=1;for(let d=2;d<10;d++){const p=Math.max(0,5-Math.abs(d-7)-(d<5?5-d:0));for(let x=-p;x<=p;x++){const y=Math.abs(x)/(p+1);c(8+x,d,l(y*.1,1,.85-y*.4,.35-y*.25,-.45))}}c(8,1,l(.2,1,.7,.15,-.4)),c(7,3,l(.3,1,.9,.4,-.4))}),b("campfire_top",()=>{_((d,p,x)=>-.12+x*.05);for(let d=0;d<16;d++){const p=d/16*Math.PI*2;c(8+Math.round(Math.cos(p)*5.5),8+Math.round(Math.sin(p)*5.5),l(.12)),c(8+Math.round(Math.cos(p)*4),8+Math.round(Math.sin(p)*4),l(-.3,1,.1,-.02,-.06))}for(let d=0;d<5;d++){const p=d/5*Math.PI*2+.5;g(8+Math.round(Math.cos(p)*6),8+Math.round(Math.sin(p)*6),1,0)}for(let d=0;d<3;d++)for(let p=0;p<8;p++){const x=p/8*Math.PI*2+d*.4;c(8+Math.round(Math.cos(x)*d*1.5),8+Math.round(Math.sin(x)*d*1.5),l(.2+(3-d)*.12,1,.5,-.05,-.35))}});for(const d of[pr,Mo,yo,So,bo,Eo,mr,qe])b(String(d),()=>{const p=_((x,y,S)=>S*.04+Math.sin((x+y*.5)*.8+S*4)*.04);for(const x of[2,6,10,14])for(let y=0;y<16;y++)p[x*16+y]>-.2&&c(y,x+(y%4<2?0:1),l(.16,.75));for(let x=0;x<5;x++)c(e.int(0,15),e.int(0,15),l(.3,.5))});b("water_side",()=>{_((d,p,x)=>x*.04+p*.004);for(let d=0;d<16;d++)e.next()>.3&&c(d,0,l(.22,.8)),d%3===0&&c(d,1+d%2,l(.1,.5));for(let d=2;d<16;d++)e.next()>.75&&c(e.int(0,15),d,l(.12,.4))}),b(String(fr),()=>{_((d,p,x)=>x*.08-.02);for(let d=0;d<16;d++)for(let p=0;p<16;p++)(d%5===4||(p+Math.floor(d/5)%2*4)%8===3)&&c(p,d,l(-.14+f(.03)));for(let d=0;d<3;d++)v(e.int(8,12),.05,-.1);for(let d=0;d<10;d++)c(e.int(0,15),e.int(0,15),l(.12))}),b(String(is),()=>{const d=_((p,x,y)=>y*.06-.35);for(let p=0;p<16;p++)d[p*16+1]>.2&&c(1,p,l(-.1,1,.04,0,.08));for(let p=0;p<=15;p+=5)c(p,0,l(.1,1,.1,0,.15)),c(p,15,l(.1,1,.1,0,.15));for(let p=3;p<=12;p++)for(let x=3;x<=12;x++){const y=Math.max(Math.abs(p-7.5),Math.abs(x-7.5)),S=Math.max(Math.abs(p-7.5),Math.abs(x-7.5),Math.abs(p+x-15)/2);y>=4.2||(S>=3.4?c(p,x,l(.15,1,.55,.15,.85)):c(p,x,l(.32+(3-y)*.12,1,.75,.3,1)))}for(const[p,x]of[[5,5],[10,10],[10,5]])(p+x)%2===0&&c(p,x,l(.45,1,.8,.35,1))}),b(String(ki),()=>{const d=_((p,x,y)=>y*.03+(x%2===0?.015:-.015)-.08);for(const p of[1,3,5]){for(let x=2;x<=13;x++)c(x,p,l(-.28));for(let x=2;x<=13;x+=3)c(x,p-1,l(.12))}for(let p=4;p<=11;p++)for(let x=7;x<=14;x++){const y=Math.max(Math.abs(p-7.5),Math.abs(x-10.5));y>=3.2?c(p,x,l(.1+d[x*16+p]*.05)):c(p,x,l(.24+(3-y)*.1,1,-.05,.2,.22))}c(5,12,l(.15,1,-.1,.12,.12)),c(10,9,l(.15,1,-.1,.12,.12));for(let p=7;p<=14;p++)p%2===1&&c(14,p,l(-.2))}),b(String($e),()=>{const d=_((p,x,y)=>y*.06);for(const p of[2,7,12])for(let x=0;x<16;x++)c(p,x,l(-.16+d[x*16+p]*.03));for(let p=0;p<16;p++)if(p%5!==2&&p%5!==3)for(let x=0;x<16;x+=3)e.next()>.4&&c(p,x,l(.5,1,.05,.02,-.05));for(const[p,x]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])c(p,x,l(.2)),c(p+1,x,l(-.2)),c(p,x+1,l(-.2));c(13,1,"rgba(214,74,130,1)"),c(1,6,"rgba(198,58,114,1)"),c(5,11,"rgba(214,74,130,1)")}),b("cactus_top",()=>{const d=_((p,x,y)=>y*.06);for(let p=2;p<=6;p+=2)for(let x=0;x<20;x++){const y=x/20*Math.PI*2;c(8+Math.round(Math.cos(y)*p),8+Math.round(Math.sin(y)*p),l(p===6?-.14:-.06+d[x]*.05))}for(let p=0;p<8;p++){const x=p/8*Math.PI*2;c(8+Math.round(Math.cos(x)*1.5),8+Math.round(Math.sin(x)*1.5),l(.45,1,.05,.03,-.04))}c(8,8,l(.15))}),b(String(ri),()=>{const d=_((p,x,y)=>y*.06);for(const p of[2,7,12])for(let x=0;x<16;x++)c(p,x,l(-.16+d[x*16+p]*.03));for(const[p,x]of[[4,4],[9,6],[6,10],[11,12],[3,14]])c(p,x,l(.2)),c(p+1,x,l(-.2)),c(p,x+1,l(-.2));for(let p=0;p<=3;p++)for(let x=5;x<=10;x++)(p===3||x===5||x===10||e.next()>.3)&&c(x,p,"rgba(214,74,130,1)");for(let p=0;p<9;p++)c(5+p%4*2,Math.floor(p/4),"rgba(238,150,190,1)");c(6,0,"rgba(238,150,190,1)"),c(9,1,"rgba(248,190,214,1)")}),b(String(Te),()=>{_((d,p,x)=>x*.05-.02+Math.sin(d*1.3+x*3)*.02);for(let d=0;d<16;d++)c(d,0,l(-.3)),c(d,7,l(-.24)),c(d,15,l(-.3));for(let d=0;d<16;d++)for(let p=0;p<16;p++)p%5===2&&d>7&&e.next()>.4&&c(p,d,l(-.12));for(let d=0;d<16;d++)c(d,4,"rgba(148,154,166,1)"),c(d,5,"rgba(120,126,138,1)");for(let d=2;d<5;d++)for(const p of[7,8])c(p,d,"rgba(200,205,215,1)");c(7,6,"rgba(40,42,48,1)"),c(8,6,"rgba(40,42,48,1)");for(let d=0;d<4;d++){const[p,x]=[[0,0],[15,0],[0,15],[15,15]][d];c(p,x,l(.2)),c(p+(p?-1:1),x,l(.1)),c(p,x+(x?-1:1),l(.1))}}),b("chest_top",()=>{_((d,p,x)=>x*.05+Math.sin(p*1.4+x*2)*.02);for(let d=0;d<16;d++)c(d,0,l(-.26)),c(d,15,l(-.26));for(let d=0;d<16;d++)d!==7&&d!==8&&(c(d,7,"rgba(148,154,166,1)"),c(d,8,"rgba(120,126,138,1)"));for(const[d,p]of[[2,2],[13,2],[2,13],[13,13]])c(d,p,"rgba(200,205,215,1)")}),b(String(bn),()=>{const d=_((p,x,y)=>y*.1-.06);for(const p of[2,6,10,14])for(let x=0;x<16;x++)c(x,p,l(-.16+f(.03)));for(const p of[1,5,9,13])for(let x=0;x<16;x++)d[p*16+x]>-.1&&e.next()>.55&&c(x,p,l(.1));for(let p=0;p<8;p++)c(e.int(0,15),e.int(0,15),l(.05,1,0,-.02,.04))}),b("farmland_side",()=>{_((d,p,x)=>x*.09-.04);for(let d=0;d<16;d++)c(d,0,l(.14));for(let d=0;d<16;d++)for(let p=1;p<16;p++)e.next()>.88&&c(d,p,l(.14))}),b(String(Pn),()=>{u("rgba(0,0,0,0)");for(const[d,p]of[[7,13],[8,13],[7,12],[8,12],[9,13],[6,12]])c(d,p,l(.1));c(6,11,l(.16)),c(9,10,l(.12)),c(7,11,l(.02));for(let d=0;d<4;d++)c(e.int(5,10),e.int(12,15),l(-.05))}),b(String(yn),()=>{_((d,p,x)=>x*.04-.02);for(let d=4;d<=13;d++)for(let p=2;p<=13;p++){const x=Math.hypot((p-7.5)*1.1,(d-8.5)*1.25);if(x>5.8)continue;const y=(p+(d/2|0))%4===0;c(p,d,l(y?-.18:.04)),x>5.2&&c(p,d,l(-.24)),p<5&&d<7&&!y&&c(p,d,l(.2))}c(8,3,l(-.1)),c(7,3,l(-.16)),c(8,4,l(-.08)),c(2,13,l(.1)),c(13,12,l(.06)),c(4,14,l(.08))}),b(String(Un),()=>{u("rgba(0,0,0,0)");for(const d of[4,8,12]){for(let p=11;p<=15;p++)c(d,p,l(.08)),p<14&&c(d,p,l(.14));c(d-1,12,l(.06))}}),b(String(Qe),()=>{u("rgba(0,0,0,0)");for(const d of[3,7,11,14]){const p=d%2?1:-1;for(let x=2;x<=15;x++)c(d+(x<6?p:0),x,l(x<7?.22:-.02));c(d-p,4,l(.18)),c(d-p,9,l(.06)),c(d+p,2,l(.3))}}),b(String(gr),()=>{_((d,p,x)=>x*.03-.12);for(let d=0;d<16;d++)c(d,0,l(-.26)),c(d,15,l(-.26)),c(d,7,"rgba(150,156,168,1)"),c(d,8,"rgba(110,116,128,1)");for(const[d,p]of[[2,3],[13,3],[2,12],[13,12]])c(d,p,"rgba(200,205,215,1)"),c(d+1,p,"rgba(150,156,168,1)");for(let d=2;d<=5;d++)c(0,d,l(.14)),c(15,d,l(.14))}),b(String(Xn),()=>{const d=_((p,x,y)=>y*.03+(p%4===0?-.04:.015));for(let p=0;p<16;p++)c(p,0,l(-.22)),c(p,15,l(-.22)),c(0,p,l(-.16)),c(15,p,l(-.16));for(const[p,x]of[[3,3],[12,3],[3,12],[12,12]])c(p,x,l(.24)),c(p+1,x,l(.08)),c(p,x+1,l(-.14));for(let p=0;p<6;p++)c(e.int(1,14),e.int(1,14),l(-.02,1,.05,-.01,-.06));if(d[8]>.4)for(let p=1;p<4;p++)c(12,p,l(.06,1,.2,.02,-.1))}),b(String(Ye),()=>{_((d,p,x)=>x*.03-.05);for(let d=0;d<16;d++)c(d,0,l(-.24)),c(d,15,l(-.24)),c(0,d,l(-.24)),c(15,d,l(-.24));for(let d=3;d<=12;d++)for(let p=4;p<=11;p++)(p===4||p===11||d===3||d===12)&&c(p,d,l(.1));for(let d=7;d<=9;d++)c(12,d,l(.26)),c(11,d,l(-.22))}),b(String(He),()=>{_((d,p,x)=>x*.03-.05);for(let d=0;d<16;d++)c(d,0,l(-.24)),c(d,15,l(-.24)),c(0,d,l(-.24)),c(15,d,l(-.24));for(let d=5;d<=10;d++)for(let p=6;p<=9;p++)c(p,d,l(.1,1,-.05,.1,.15));for(let d=6;d<=9;d++){const p=d-1;p>=5&&p<=10&&c(d,p,l(.3,.6))}for(let d=5;d<=10;d++)for(let p=6;p<=9;p++)(p===6||p===9||d===5||d===10)&&c(p,d,l(.1,1,-.05,.1,.15))}),b(String(sn),()=>{for(let d=0;d<16;d++)c(0,d,l(-.12,.9)),c(1,d,l(.03,.85)),c(2,d,l(-.17,.7));c(1,7,l(.26,.9)),c(1,8,l(.26,.9))}),b(String(rn),()=>{_((d,p,x)=>x*.04+.02);for(let d=0;d<16;d++)for(let p=0;p<16;p++)(p+d)%5===0&&c(p,d,l(-.1));for(let d=0;d<16;d++)c(d,0,"rgba(60,26,24,1)"),c(d,15,"rgba(60,26,24,1)"),c(0,d,"rgba(60,26,24,1)"),c(15,d,"rgba(60,26,24,1)");for(let d=0;d<16;d++)c(d,11,"rgba(90,40,36,1)"),c(d,12,"rgba(150,80,70,1)"),c(d,13,"rgba(120,60,52,1)");for(let d=1;d<11;d++)c(1,d,l(.12)),c(14,d,l(-.08))}),b("bed_side",()=>{_((d,p,x)=>x*.04-(p>11?-.1:.04));for(let d=0;d<16;d++)c(d,0,l(.14)),c(d,10,l(-.22));for(let d=1;d<10;d++)for(let p=0;p<16;p++)(p+d)%6===1&&c(p,d,l(-.06));for(let d=11;d<16;d++)for(let p=0;p<16;p++)c(p,d,"rgba(70,44,26,1)");for(let d=2;d<16;d+=5)c(d,12,"rgba(96,62,38,1)"),c(d,13,"rgba(52,32,18,1)")}),b(String(En),()=>{_((d,p,x)=>x*.04+.02);for(let d=0;d<16;d++)c(d,0,"rgba(60,26,24,1)"),c(d,15,"rgba(60,26,24,1)"),c(0,d,"rgba(60,26,24,1)"),c(15,d,"rgba(60,26,24,1)");for(let d=3;d<=11;d++)for(let p=2;p<=13;p++)c(p,d,p===2||p===13||d===3||d===11?"rgba(200,192,176,1)":"rgba(226,220,206,1)"),d===4&&p>3&&p<11&&c(p,d,"rgba(240,236,226,1)");c(4,6,"rgba(208,200,184,1)"),c(10,9,"rgba(208,200,184,1)");for(let d=0;d<16;d++)c(d,12,"rgba(90,40,36,1)")}),b(String(Kn),()=>{const d=_((p,x,y)=>y*.12-(x>4?.16:.02));for(let p=0;p<16;p++){const x=2+Math.round((d[p]+1)*1.5);for(let y=0;y<x;y++)c(p,y,l(f(.1)+(y===0?.1:0)));e.next()>.6&&c(p,x+1,l(-.2))}for(let p=0;p<16;p+=3){const x=7+p%5;c(p,x,l(.2))}}),b("grass_top",()=>{_((d,p,x)=>x*.08-.02);for(let d=0;d<40;d++){const p=e.int(0,15),x=e.int(0,14),y=e.int(1,3);for(let S=0;S<y;S++)c(p,x+S,l(S===0?.14:-.02+f(.08)))}for(let d=0;d<5;d++)c(e.int(0,15),e.int(0,15),l(-.3))}),b("grass_side",()=>{const d=_((p,x,y)=>y*.12+(x<3?.06:-.1));for(let p=0;p<16;p++){const x=1+Math.round((d[p+16]+1)*1.5);for(let y=0;y<x;y++)c(p,y,l(.08+f(.08)))}for(let p=0;p<16;p++)for(let x=3;x<16;x++)e.next()>.9&&c(p,x,l(.16,1,-.04,-.02,-.04))}),b(String(Fn),()=>{const d=_((p,x,y)=>y*.05);for(let p=0;p<16;p++){const x=d[p]*2;for(let y=0;y<16;y++){const S=Math.sin(p*1.9+x+Math.sin(y*.35)*1.5);c(p,y,l(S>.75?-.26:S>.2?-.1:.06+f(.04)))}}for(let p=1;p<=2;p++)for(let x=0;x<10;x++){const y=x/10*Math.PI*2;c(9+Math.round(Math.cos(y)*p*1.4),7+Math.round(Math.sin(y)*p),l(p===2?-.3:-.2))}c(9,7,l(-.34)),c(10,7,l(-.28))}),b("wood_top",()=>{_((d,p,x)=>x*.04);for(let d=0;d<44;d++){const p=d/44*Math.PI*2;for(let x=1;x<7;x+=2){const y=x+(x%4===1?.6:0);c(8+Math.round(Math.cos(p)*y),8+Math.round(Math.sin(p)*y),l(x>4?-.12:.05))}}c(8,8,l(-.3)),c(8,7,l(-.2));for(let d=0;d<16;d++)c(d,0,l(-.3)),c(d,15,l(-.3)),c(0,d,l(-.3)),c(15,d,l(-.3))}),b(String(hi),()=>{_((d,p,x)=>x*.14);for(let d=0;d<26;d++){const p=e.int(0,14),x=e.int(0,14);c(p,x,l(.16)),c(p+1,x,l(.06)),c(p,x+1,l(-.1)),c(p+1,x+1,l(-.2))}for(let d=0;d<10;d++){const p=e.int(1,14),x=e.int(1,14);c(p,x,l(-.4)),c(p+1,x,l(-.25))}}),b(String(Dn),()=>{u("rgba(0,0,0,0)");for(let d=6;d<16;d++)c(8,d,l(-.28));c(7,15,l(-.2)),c(9,15,l(-.2)),c(7,5,l(.1)),c(8,5,l(.15)),c(9,5,l(.1)),c(6,4,l(.05)),c(7,4,l(.12)),c(8,4,l(.18)),c(9,4,l(.12)),c(10,4,l(.05)),c(7,3,l(.08)),c(8,3,l(.14)),c(9,3,l(.08)),c(8,2,l(.1)),c(6,5,l(.02)),c(10,5,l(.02))});const L=(d,p,x)=>{R[d]&&(n=p%ii*Be,i=(p/ii|0)*Be,[r,o,a]=x,R[d]())};for(const[d,p]of ir.entries())L(String(p),d,oi[p].color);for(const[d,p]of tu)L(d,Fe[d],oi[p].color);return ua=s,s}function b_(){const s=new Hh(eu());return s.flipY=!1,s.magFilter=s.minFilter=wn,s.generateMipmaps=!1,s.colorSpace=dn,s}const re=[];ir.forEach((s,t)=>re[s]=t);const In=ii*Be,nu=s=>{const t=re[s]??0;return[t%ii*Be,(t/ii|0)*Be]},so=[],cn=(s,t,e,n)=>{so[s*6]=t,so[s*6+1]=e;for(let i=2;i<6;i++)so[s*6+i]=n};for(const s of ir)cn(s,re[s],re[s],re[s]);cn(Kn,Fe.grass_top,re[Bn],Fe.grass_side);cn(Fn,Fe.wood_top,Fe.wood_top,re[Fn]);cn(bn,re[bn],re[Bn],Fe.farmland_side);cn(Tn,Fe.sandstone_top,re[Tn],re[Tn]);cn(nn,Fe.hull_top,re[nn],re[nn]);cn(rn,re[rn],re[rn],Fe.bed_side);cn(En,re[En],re[En],Fe.bed_side);cn(Te,Fe.chest_top,re[Te],re[Te]);cn(ze,Fe.bench_top,re[ze],re[ze]);cn(fn,Fe.bench_ext_top,re[fn],re[fn]);cn(We,Fe.campfire_top,re[We],re[We]);cn($e,Fe.cactus_top,re[$e],re[$e]);cn(ri,Fe.cactus_top,re[$e],re[ri]);for(const s of[qe,pr,Mo,yo,So,bo,Eo,mr])cn(s,re[s],re[s],Fe.water_side);const Ii=16,sh=`
attribute vec3 color;
attribute float light;
varying vec2 vUv;
varying vec3 vSh;        // x = face shading, y = baked skylight 0..1
varying vec3 vPos;
varying vec3 vNrm;
varying float vFogDepth;
void main() {
  vUv = uv;
  vSh = vec3(color.r, light, 0.0);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPos = wp.xyz;
  vNrm = normalize(mat3(modelMatrix) * normal);
  vec4 mv = viewMatrix * wp;
  vFogDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,rh=`
uniform sampler2D map;
uniform vec3 uAmbient;      // day/moon ambient, lerped by the caller
uniform float uFloor;       // ambient floor for baked-light 0 (interiors)
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uNumLights;
uniform vec3 uLightPos[${Ii}];
uniform vec3 uLightCol[${Ii}];
uniform float uLightRange[${Ii}];
varying vec2 vUv;
varying vec3 vSh;
varying vec3 vPos;
varying vec3 vNrm;
varying float vFogDepth;
void main() {
  vec4 tex = texture2D(map, vUv);
  #ifdef OPAQUE_PASS
  if (tex.a < 0.02) discard;
  #endif
  vec3 n = normalize(vNrm);
  if (!gl_FrontFacing) n = -n;
  float baked = vSh.y;
  vec3 col = tex.rgb * vSh.x * uAmbient * (uFloor + (1.0 - uFloor) * baked);
  for (int i = 0; i < ${Ii}; i++) {
    if (float(i) >= uNumLights) break;
    float range = uLightRange[i];
    vec3 d = uLightPos[i] - vPos;
    float dist = length(d);
    float att = 1.0 - dist / range;
    if (att <= 0.0) continue;
    att *= att;
    col += tex.rgb * vSh.x * uLightCol[i] * att *
      (0.35 + 0.65 * max(dot(n, d / max(dist, 0.001)), 0.0));
  }
  col = mix(col, uFogColor, smoothstep(uFogNear, uFogFar, vFogDepth));
  gl_FragColor = vec4(col, tex.a);
  #include <colorspace_fragment>
}
`,Gs=new D,oh=new D,E_=new zt(1,.97,.9),w_=new zt(.2,.27,.45);class T_{scene=new Qd;camera;three;chunkMeshes=new Map;group=new kn;entityGroup=new kn;sun;hemi;stars;sunDisc;moonDisc;highlight;renderDistance=7;atlas=b_();matOpaque=new Yn({map:this.atlas,vertexColors:!0,side:ke});matEmissive=new Yi({map:this.atlas,vertexColors:!0,side:ke});matTrans=new Yn({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:ke});lightingMode="sky";skyLight=new M_;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new zt(1,1,1)},uFloor:{value:.16},uFogColor:{value:new zt(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:Ii},()=>new D)},uLightCol:{value:Array.from({length:Ii},()=>new D)},uLightRange:{value:new Float32Array(Ii)}};matSky=new ci({uniforms:this.skyU,vertexShader:sh,fragmentShader:rh,side:ke,defines:{OPAQUE_PASS:"1"}});matSkyT=new ci({uniforms:this.skyU,vertexShader:sh,fragmentShader:rh,side:ke,transparent:!0,depthWrite:!1});torch;dynLights=[];constructor(t){this.three=new Zg({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new Sn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new wc(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.sun=new ff(16777215,1),this.hemi=new hf(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new Sl(14207392,40,this.renderDistance*st);const n=new ln,i=[];for(let o=0;o<500;o++){const a=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1);i.push(Math.sin(h)*Math.cos(a)*400,Math.abs(Math.cos(h))*400,Math.sin(h)*Math.sin(a)*400)}n.setAttribute("position",new _e(i,3)),this.stars=new of(n,new zh({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new Xe(new uo(24,24),new Yi({color:16771504,fog:!1,side:ke,toneMapped:!1})),this.moonDisc=new Xe(new uo(15,24),new Yi({color:14213877,fog:!1,side:ke,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const r=new Ni(1.002,1.002,1.002);this.highlight=new rf(new af(r),new Bh({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,i){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===t&&o.y===e&&o.z===n))return;const r=new wc(i==="lamp"?16773296:i==="fire"?16745280:9427199,i==="lamp"?.9:i==="fire"?1.1:.8,i==="lamp"?12:i==="fire"?9:10,1.3);r.position.set(t+.5,e+.6,n+.5),this.scene.add(r),this.dynLights.push({x:t,y:e,z:n,light:r,flame:i==="fire"})}removePointLight(t,e,n){const i=this.dynLights.findIndex(r=>r.x===t&&r.y===e&&r.z===n);i<0||(this.scene.remove(this.dynLights[i].light),this.dynLights.splice(i,1))}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),i=Di.clamp(n*2.2,0,1),r=Di.clamp(1-Math.abs(n)*5,0,1),o=new zt(660006),a=new zt(13201213),h=new zt(12570592),l=o.clone().lerp(h,i);r>0&&l.lerp(a,r*.7);const c=new zt(16767392).lerp(new zt(16743231),r);return{sky:l,sunColor:c,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:i}}updateSky(t,e){const n=t%Ne/Ne,i=this.keyframe(n);this.scene.background=i.sky,this.scene.fog.color.copy(i.sky),this.scene.fog.far=this.renderDistance*st*.98;const r=(n-.25)*Math.PI*2;Gs.set(Math.cos(r),i.sunElev,.4).normalize(),i.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,Gs.negate()):(this.sun.color.copy(i.sunColor),this.sun.intensity=i.sunI),this.sun.position.set(e.x+Gs.x*120,e.y+Gs.y*120,e.z+Gs.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+i.sunI*.35,this.stars.material.opacity=Math.max(0,1-i.sunI*3),this.stars.position.set(e.x,e.y,e.z);const o=430;this.sunDisc.position.set(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,e.z+o*.4),this.moonDisc.position.set(e.x-Math.cos(r)*o,e.y-Math.sin(r)*o,e.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(r)>-.12,this.moonDisc.visible=Math.sin(r)<.12,this.torch.intensity=.12+(1-Math.min(1,i.sunI))*.85;for(const l of this.dynLights)l.flame&&(l.light.intensity=.9+Zh(t*5.3+l.x*3.1+l.z,7)*.45);const a=this.skyU;a.uAmbient.value.copy(w_).lerp(E_,i.dayT);const h=this.scene.fog;return a.uFogColor.value.copy(h.color),a.uFogNear.value=h.near,a.uFogFar.value=h.far,this.syncSkyLights(),i}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(oh),t.uLightPos.value[e].copy(oh);const n=this.torch.color;t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++;for(const i of this.dynLights){if(e>=Ii)break;t.uLightPos.value[e].copy(i.light.position);const r=i.light.color;t.uLightCol.value[e].set(r.r,r.g,r.b).multiplyScalar(i.light.intensity),t.uLightRange.value[e]=i.light.distance,e++}t.uNumLights.value=e}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let i=-this.renderDistance;i<=this.renderDistance;i++)for(let r=-this.renderDistance;r<=this.renderDistance;r++){const o=qn(e+i,n+r);this.chunkMeshes.has(o)||t.markDirty(e+i,n+r)}}buildChunk(t,e){const[n,i]=e.split(",").map(Number),r=t.chunk(n,i),o=[],a=[],h=[],l=[],c=[],u=[],f=[],m=[],v=[],M=[],_=[],g=[],T=[],R=[],b=this.lightingMode==="sky"?this.skyLight.bake(t,n,i,(S,C)=>{const P=qn(S,C);!t.dirty.has(P)&&!this.lightRecheck.has(P)&&this.lightRecheck.add(P)}):null,L=(S,C,P)=>b&&C>=0&&C<ne?b[Qi(S,P,C)]/io:0;for(let S=0;S<st;S++)for(let C=0;C<st;C++)for(let P=0;P<ne;P++){const k=r[(S*st+C)*ne+P];if(k===Ft)continue;if(y_.has(k)){let Tt=0;if(b)for(const[Ot,Wt]of[[1,0],[-1,0],[0,1],[0,-1]])Tt=Math.max(Tt,b[Qi(S+Ot,C+Wt,P)]);this.emitDoor(o,a,h,l,c,Tt/io,t,S,P,C,n*st,i*st,k);continue}if(S_.has(k)){const Tt=re[k],Ot=Tt%ii*Be,Wt=(Tt/ii|0)*Be,Xt=b?b[Qi(S,C,P)]/io:0,q=(j,ut,Rt,pt)=>{const Bt=M.length/3;M.push(j,P,ut,Rt,P,pt,Rt,P+1,pt,j,P+1,ut);for(let Se=0;Se<4;Se++)_.push(.92,.92,.92),R.push(Xt);T.push((Ot+.5)/In,(Wt+15.5)/In,(Ot+15.5)/In,(Wt+15.5)/In,(Ot+15.5)/In,(Wt+.5)/In,(Ot+.5)/In,(Wt+.5)/In),g.push(Bt,Bt+1,Bt+2,Bt,Bt+2,Bt+3)};q(S,C,S+1,C+1),q(S+1,C,S,C+1);continue}const z=oi[k],B=z.emissive,W=z.transparent,Y=W?M:B?u:o,H=W?_:B?f:a,J=W?g:B?m:h,it=W?T:B?v:l,ft=W?R:B?null:c;for(let Tt=0;Tt<ih.length;Tt++){const Ot=ih[Tt],Wt=S+Ot.dir[0],Xt=P+Ot.dir[1],q=C+Ot.dir[2];if(!d_(t,n*st+Wt,Xt,i*st+q,k))continue;const j=so[k*6+Tt],ut=j%ii*Be,Rt=(j/ii|0)*Be,pt=Y.length/3,Bt=B?1:Ot.shade,Se=ft?L(Wt,Xt,q):0;for(const I of Ot.corners)Y.push(S+I[0],P+I[1],C+I[2]),H.push(Bt,Bt,Bt),ft&&ft.push(Se),it.push((ut+.5+I[Ot.uv[0]]*(Be-1))/In,(Rt+.5+I[Ot.uv[1]]*(Be-1))/In);J.push(pt,pt+1,pt+2,pt,pt+2,pt+3)}}const d=this.chunkMeshes.get(e);if(d)for(const S of d)this.group.remove(S),S.geometry.dispose();const p=[],x=this.lightingMode==="sky",y=(S,C,P,k,z,B)=>{if(S.length===0)return;const W=new ln;W.setAttribute("position",new _e(S,3)),W.setAttribute("color",new _e(C,3)),W.setAttribute("uv",new _e(k,2)),z&&z.length*3===S.length&&W.setAttribute("light",new _e(z,1)),W.setIndex(P),W.computeVertexNormals();const Y=new Xe(W,B);Y.position.set(n*st,0,i*st),!x&&B!==this.matEmissive&&(Y.castShadow=B!==this.matTrans,Y.receiveShadow=!0),this.group.add(Y),p.push(Y)};y(o,a,h,l,b?c:null,x?this.matSky:this.matOpaque),y(u,f,m,v,null,this.matEmissive),y(M,_,g,T,b?R:null,x?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,p)}emitDoor(t,e,n,i,r,o,a,h,l,c,u,f,m){const v=u+h,M=f+c,_=m===Ye||m===He||m===sn,g=m===Ke||m===He||m===Oe&&a.get(v,l-1,M)===Oe||m===sn&&a.get(v,l-1,M)===sn,T=nu(g?_?He:Ke:_?Ye:on),R=m===Oe||m===sn,L=!(tn(a.get(v-1,l,M))||tn(a.get(v+1,l,M)))&&(tn(a.get(v,l,M-1))||tn(a.get(v,l,M+1))),d=L?!tn(a.get(v-1,l,M)):!tn(a.get(v,l,M-1)),p=L?!tn(a.get(v+1,l,M)):!tn(a.get(v,l,M+1)),x=v+M&1;let y,S;x&&p?(y=1,S=1):!x&&d?(y=0,S=-1):p?(y=1,S=1):(y=0,S=-1);const C=a.doorSwing.get(v+","+M);C&&(S=C);const P=.04,k=.96,z=y?.84:.02,B=y?.98:.16,W=P,Y=y?.98:.02,H=(ft,Tt,Ot)=>{const Wt=t.length/3;for(let Xt=0;Xt<4;Xt++){let[q,j,ut]=ft[Xt];if(R){const Rt=q-W,pt=ut-Y;q=W-S*pt,ut=Y+S*Rt}t.push(L?h+ut:h+q,l+j,L?c+q:c+ut),e.push(Ot,Ot,Ot),r.push(o),i.push((T[0]+.5+Tt[Xt][0]*(Be-1))/In,(T[1]+.5+Tt[Xt][1]*(Be-1))/In)}n.push(Wt,Wt+1,Wt+2,Wt,Wt+2,Wt+3)},J=ft=>(ft-P)/(k-P),it=ft=>(ft-z)/(B-z);H([[P,0,B],[k,0,B],[k,1,B],[P,1,B]],[[J(P),0],[J(k),0],[J(k),1],[J(P),1]],.85),H([[P,0,z],[k,0,z],[k,1,z],[P,1,z]],[[J(k),0],[J(P),0],[J(P),1],[J(k),1]],.7),H([[k,0,z],[k,0,B],[k,1,B],[k,1,z]],[[it(z),0],[it(B),0],[it(B),1],[it(z),1]],.6),H([[P,0,z],[P,0,B],[P,1,B],[P,1,z]],[[it(B),0],[it(z),0],[it(z),1],[it(B),1]],.6),H([[P,1,z],[k,1,z],[k,1,B],[P,1,B]],[[J(P),it(z)],[J(k),it(z)],[J(k),it(B)],[J(P),it(B)]],1),H([[P,0,z],[k,0,z],[k,0,B],[P,0,B]],[[J(P),it(B)],[J(k),it(B)],[J(k),it(z)],[J(P),it(z)]],.45)}addEntityMesh(t,e,n,i=.35){const r=new Xe(new Ni(i,i,i),new Yn({color:n}));return r.position.set(...e),r.userData.eid=t,this.entityGroup.add(r),r}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(i=>i.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,i,r=14){const o=this.nextEid++,a=new Xe(new El(.14,.28,r,6,1,!0),new Yi({color:i,transparent:!0,opacity:.4,depthWrite:!1,side:ke,fog:!1}));return a.position.set(t,e+r/2,n),a.userData.eid=o,this.entityGroup.add(a),o}addGroundRing(t,e,n,i,r=1.1){const o=this.nextEid++,a=new Xe(new wl(r*.55,r,24),new Yi({color:i,transparent:!0,opacity:.7,side:ke,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(t,e+.06,n),a.userData.eid=o,this.entityGroup.add(a),o}render(){this.three.render(this.scene,this.camera)}}const Pt=s=>s,A_=(s,t)=>`${s.charAt(0).toUpperCase()+s.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,Jn=(s,t,e,n)=>Pt({id:`${e}_${s}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${s}`,desc:A_(s,t),w:1,h:2,mass:1.2+t*.8,tool:{type:s,tier:t},color:n}),R_=[Pt({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:On,color:"#d4b880"}),Pt({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:Tn,color:"#c2a670"}),Pt({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:yi,color:"#736d69"}),Pt({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:hr,color:"#8d8680"}),Pt({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:Bn,color:"#6b5238"}),Pt({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:Us,color:"#d9dbd6"}),Pt({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:ur,color:"#61492f"}),Pt({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:vo,color:"#a6cfe6"}),Pt({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:dr,color:"#8cc0a0"}),Pt({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:nn,color:"#858a99"}),Pt({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:on,color:"#999fa8"}),Pt({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:Wn,color:"#fff0a0"}),Pt({id:"metal",name:"Metal Rod",desc:"Salvaged from the wreck. The backbone of every tool.",w:1,h:1,mass:1,block:xo,color:"#9aa0aa"}),Pt({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:Mn,color:"#66e5f0"}),Pt({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:ze,color:"#806647"}),Pt({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:We,color:"#e67333"}),Pt({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:ki,color:"#59bfcc"}),Pt({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:fr,color:"#b3956b"}),Pt({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Te,color:"#8a6d3b"}),Pt({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),Pt({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),Pt({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),Pt({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:is,color:"#c468e8"}),Pt({id:"ironrod",name:"Iron Rod",desc:"Iron baked out of desert Rock at a Campfire. Two rods forge one Metal Rod at a Crafting Bench — tools without touching the wreck.",w:1,h:1,mass:1,color:"#b0683f"}),Pt({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),Jn("pickaxe",1,"wood","#a8834f"),Jn("pickaxe",2,"stone","#8d8680"),Jn("pickaxe",3,"metal","#9aa0aa"),Jn("shovel",1,"wood","#a8834f"),Jn("shovel",2,"stone","#8d8680"),Jn("shovel",3,"metal","#9aa0aa"),Jn("axe",1,"wood","#a8834f"),Jn("axe",2,"stone","#8d8680"),Jn("axe",3,"metal","#9aa0aa"),Jn("disassembler",1,"metal","#c0c8d8"),Pt({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),Pt({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",color:"#7a5a3a"}),Pt({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:$e,color:"#3d8042"}),Pt({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),Pt({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),Pt({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",color:"#8a6f4d"}),Pt({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),Pt({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),Pt({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:bn,color:"#573d23"}),Pt({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:Pn,color:"#c8b060"}),Pt({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:Un,color:"#d8c878"}),Pt({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),Pt({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),Pt({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),Pt({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:Fn,color:"#7a5c3a"}),Pt({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),Pt({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Dn,color:"#7fae54"}),Pt({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),Pt({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),Pt({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:gr,color:"#8a744a"}),Pt({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:Xn,color:"#9aa0ac"}),Pt({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:Ye,color:"#82868e"}),Pt({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:rn,color:"#a84a42"})],Gt=Object.fromEntries(R_.map(s=>[s.id,s])),jn={};for(const s of Object.values(Gt))s.block!==void 0&&(jn[s.block]=s.id);jn[Ke]="door";jn[He]="door_inner";jn[En]="bed";jn[Kn]="dirt";jn[hi]="kindling";jn[Pn]="seed_melon";jn[yn]="dune_melon";jn[Un]="seed_wheat";jn[Qe]="wheat";jn[ri]="cactus";function xn(s){const t=Gt[s.itemId];return s.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class da{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const i=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const r of i)this.addItem(r.itemId,r.count)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=Gt[e.itemId].mass*e.count;return t}occupied(t,e,n){for(const i of this.slots){if(i===n)continue;const r=xn(i);if(t>=i.x&&t<i.x+r.w&&e>=i.y&&e<i.y+r.h)return i}return null}fits(t,e,n,i,r){if(t<0||e<0||t+n>this.w||e+i>this.h)return!1;for(let o=0;o<i;o++)for(let a=0;a<n;a++)if(this.occupied(t+a,e+o,r))return!1;return!0}move(t,e,n){const i=xn(t);return e===t.x&&n===t.y?!0:this.fits(e,n,i.w,i.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=xn(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addItem(t,e=1){const n=Gt[t],i=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let r=0;r<e;r++){let o=!1;for(const[a,h,l]of i){for(let c=0;c<=this.h-h&&!o;c++)for(let u=0;u<=this.w-a&&!o;u++){let f=!0;for(let m=0;m<h&&f;m++)for(let v=0;v<a&&f;v++)this.occupied(u+v,c+m)&&(f=!1);f&&(this.slots.push(l?{itemId:t,count:1,x:u,y:c,rot:!0}:{itemId:t,count:1,x:u,y:c}),o=!0)}if(o)break}if(!o)return e-r}return 0}removeItem(t,e=1){let n=0;for(let i=this.slots.length-1;i>=0&&n<e;i--){const r=this.slots[i];if(r.itemId!==t)continue;const o=Math.min(r.count,e-n);r.count-=o,n+=o,r.count===0&&this.slots.splice(i,1)}return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&(e+=n.count);return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const Vs={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]}},C_=new Ni(1,1,1);function I_(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function iu(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");s(e,I_(5370855));const n=new Hh(t);return n.magFilter=n.minFilter=wn,n.generateMipmaps=!1,n.colorSpace=dn,n}function L_(){return iu((s,t)=>{s.fillStyle="#c8a76d",s.fillRect(0,0,64,64);for(let n=0;n<420;n++){const i=.5+(t()-.5)*.22;s.fillStyle=i>.5?"#d4b781":"#b89359",s.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let i=0;i<9;i++){const r=5-Math.abs(i-4);s.fillStyle="#6f5230",s.fillRect(32-r,n+i,r*2,1),s.fillStyle="#8a6a3f",s.fillRect(32-r+1,n+i,Math.max(1,r*2-2),1)}s.fillStyle="#a9884f",s.fillRect(10+(t()*4|0),n+3,3,2),s.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)s.fillStyle=n>=56?"#e9dab1":"#d8c494",s.fillRect(0,n,64,1);for(let n=0;n<40;n++)s.fillStyle="#ddcba0",s.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function P_(){return iu((s,t)=>{s.fillStyle="#c9a878",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#ddc295":"#a9854f",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)s.fillStyle="#8a6a3c",s.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)s.fillStyle=e>=54?"#f2ead9":"#e2d4ba",s.fillRect(0,e,64,1);s.fillStyle="#efe6d2",s.beginPath(),s.arc(10,12,8,0,Math.PI*2),s.fill(),s.fillStyle="#6b4e2c",s.fillRect(8,10,4,4)})}let fa=null,pa=null;function D_(){return fa||(fa={body:new Yn({map:L_()}),ridge:new Yn({color:7295536}),eye:new Yn({color:1445898})}),fa}function U_(){return pa||(pa={fur:new Yn({map:P_()}),pale:new Yn({color:15260868}),dark:new Yn({color:6045731}),pink:new Yn({color:14196896})}),pa}function Ee(s,t,e,n,i,r,o){const a=new Xe(C_,n);return a.scale.set(s,t,e),a.position.set(i,r,o),a}function N_(){const s=D_(),t=new kn,e=[],n=[],i=[.36,.13,-.1,-.33,-.54,-.72],r=[.26,.27,.26,.23,.18,.12],o=[.22,.23,.22,.2,.16,.11],a=.24;for(let u=0;u<i.length;u++){const f=Math.sin(u*.8)*.05,m=Ee(r[u],o[u],a,s.body,f,o[u]/2+.005,i[u]);e.push({mesh:m,bx:f,w:r[u],h:o[u],d:a}),n.push({mesh:Ee(r[u]*.3,.02,a*.92,s.ridge,f,o[u]+.008,i[u]),w:r[u]}),t.add(m,n[u].mesh)}const h=new kn;h.position.set(Math.sin(0)*.05,.095+.005,.6);const l=Ee(.27,.19,.27,s.body,0,.095,0);return h.add(l),h.add(Ee(.035,.035,.03,s.eye,-.115,.14,.11)),h.add(Ee(.035,.035,.03,s.eye,.115,.14,.11)),t.add(h),{group:t,animate:(u,f)=>{const m=Math.max(0,Math.min(1,f)),v=.015+.075*m,M=u*(3.2+2.6*m);for(let _=0;_<e.length;_++){const g=e[_],T=Math.sin(M-_*.85)*v;g.mesh.position.x=g.bx+T,g.mesh.rotation.y=-T*1.4;const R=1+Math.sin(u*1.9)*.03*(1-m*.6);g.mesh.scale.set(g.w*R,g.h,g.d);const b=n[_];b.mesh.position.x=g.mesh.position.x,b.mesh.rotation.y=g.mesh.rotation.y,b.mesh.scale.x=b.w*.3*R}h.position.x=Math.sin(M+.85)*v*.5,h.rotation.y=Math.sin(u*(2.2+2.4*m))*(.06+.14*m)}}}function k_(){const s=U_(),t=new kn,e=new kn;t.add(e);const n=Ee(.22,.26,.34,s.fur,0,.26,-.02);e.add(n);const i=new kn;i.position.set(0,.31,.19),i.add(Ee(.15,.14,.15,s.fur,0,0,.05)),i.add(Ee(.045,.035,.04,s.pink,0,-.02,.13)),i.add(Ee(.028,.028,.02,s.dark,-.062,.03,.1)),i.add(Ee(.028,.028,.02,s.dark,.062,.03,.1)),e.add(i);const r=Ee(.05,.12,.025,s.fur,-.075,.41,.16),o=Ee(.05,.12,.025,s.fur,.075,.41,.16);r.rotation.z=.15,o.rotation.z=-.15,e.add(r,o);const a=Ee(.09,.14,.11,s.fur,-.12,.14,-.06),h=Ee(.09,.14,.11,s.fur,.12,.14,-.06),l=Ee(.07,.05,.22,s.pale,-.13,.028,.02),c=Ee(.07,.05,.22,s.pale,.13,.028,.02);e.add(a,h,l,c),e.add(Ee(.035,.035,.07,s.pale,-.08,.11,.15)),e.add(Ee(.035,.035,.07,s.pale,.08,.11,.15));const u=new kn;return u.position.set(0,.16,-.19),u.add(Ee(.04,.04,.24,s.fur,0,0,-.12)),u.add(Ee(.032,.032,.22,s.fur,0,-.045,-.34)),u.add(Ee(.07,.055,.11,s.dark,0,-.075,-.5)),e.add(u),{group:t,animate:(m,v)=>{const M=Math.max(0,Math.min(1,v)),_=Math.abs(Math.sin(m*(2.6+2.4*M)));e.position.y=_*.13*M+Math.sin(m*1.7)*.004,n.scale.y=.26*(1+Math.sin(m*1.9)*.03*(1-M)),l.rotation.x=c.rotation.x=-.55*_*M,a.rotation.x=h.rotation.x=-.35*_*M,u.rotation.y=Math.sin(m*(1.8+3.4*M))*(.1+.3*M),u.rotation.x=-.12-.18*M+Math.sin(m*(2.6+2.4*M))*.06*M;const g=Math.max(0,Math.sin(m*6.3))**8*(1-M);r.rotation.z=.15+g*.25,o.rotation.z=-.15-Math.max(0,Math.sin(m*6.3+2.1))**8*(1-M)*.25,i.rotation.x=-.1*_*M+Math.sin(m*1.3)*.03*(1-M)}}}function F_(s){return s==="snake"?N_():k_()}const su=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"sword",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0},{out:"metal",count:1,needs:{ironrod:2},bench:!0},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},bench:!0},{out:"reptile_armor",count:1,needs:{snake_skin:3},bench:!0},{out:"farmland",count:1,needs:{dirt:1},bench:!1},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},bench:!1},{out:"metal_plating",count:1,needs:{metal:1},bench:!1},{out:"door_inner",count:1,needs:{metal:1,deadwood:1},bench:!0},{out:"bucket",count:1,needs:{metal:2},bench:!0},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},bench:!0}],ru=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"ironrod"},{in:"rat_raw",out:"rat_cooked"},{in:"wheat",out:"cooked_wheat"}];function ou(s,t){return Object.entries(t.needs).every(([e,n])=>s.has(e,n))}function O_(s,t){if(!ou(s,t))return null;for(const[e,n]of Object.entries(t.needs))s.removeItem(e,n);return s.addItem(t.out,t.count)}const sr=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it within reach of a Save Beacon.",goal:1}];function B_(){return{i:0,p:sr.map(()=>0)}}function z_(s){const t=B_();if(!s)return t;t.i=Math.max(0,Math.min(sr.length,s.i|0));for(let e=0;e<t.p.length;e++){const n=sr[e].goal;t.p[e]=Math.max(0,Math.min(n,(s.p&&s.p[e])|0))}return t}function Ks(s){return s.i<sr.length?sr[s.i]:null}function H_(s,t,e=1){const n=Ks(s);if(!n||n.kind!==t||s.p[s.i]>=n.goal||(s.p[s.i]=Math.min(n.goal,s.p[s.i]+e),s.p[s.i]<n.goal))return null;const i=n;return s.i++,i}const G_=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],Ws=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:s=>s.setClock(.56),poll:s=>s.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:s=>{s.inv.has("canister_empty")||s.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:s=>s.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:s=>s.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. Plant seeds in the tilled soil. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",goal:"plant",hold:40,enter:s=>{s.giveOrDrop("seed_wheat",2),s.selectHeld("shovel");const t=s.player.pos,e=Math.floor(t.x),n=Math.floor(t.z);for(let i=Math.floor(t.y)-1;i>20;i--){const r=s.world.get(e,i,n);if(r===On||r===Tn){s.world.set(e,i,n,Bn),s.tutGuide={name:"Dirt",x:e,y:i,z:n};break}}}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class V_{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&Ws[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=Ws[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===Oe&&(t.set(-6,31,0,on),t.set(-6,32,0,Ke),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=Ws.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=Ws[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=Ws.map((n,i)=>i===this.step?"●":i<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const au="sotf:index",lu="sotf:settings",cu="sotf:best",ah={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function W_(){try{return{...ah,...JSON.parse(localStorage.getItem(lu)||"{}")}}catch{return{...ah}}}function X_(s){localStorage.setItem(lu,JSON.stringify(s))}function rr(){return Number(localStorage.getItem(cu)||0)}function lh(s){s>rr()&&localStorage.setItem(cu,String(s))}function To(){try{return JSON.parse(localStorage.getItem(au)||"[]")}catch{return[]}}function Dl(s){localStorage.setItem(au,JSON.stringify(s))}function hu(s,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:s||t||"world",seedStr:t,updated:Date.now()},i=To();return i.unshift(n),Dl(i),n}function q_(s){Dl(To().filter(t=>t.id!==s)),localStorage.removeItem("sotf:w:"+s)}function uu(s,t){try{localStorage.setItem("sotf:w:"+s.id,JSON.stringify(t));const e=To(),n=e.find(i=>i.id===s.id);return n&&(n.updated=Date.now(),Dl(e)),!0}catch{return!1}}function du(s){try{const t=localStorage.getItem("sotf:w:"+s);return t?JSON.parse(t):null}catch{return null}}function fu(s,t){const e=new Blob([JSON.stringify({meta:s,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${s.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function $_(s){const t=JSON.parse(await s.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=hu(t.meta?.name??"imported",t.run.seedStr);return uu(e,t.run),e}const Zt=Be;function ts(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}const Vn=(s,t,e,n)=>{const[i,r]=nu(n);s.drawImage(eu(),i,r,Zt,Zt,t,e,Zt,Zt)},yt=(s,t,e,n,i,r)=>{s.fillStyle=r,s.fillRect(t,e,n,i)},Ri=(s,t,e,n,i,r)=>{s.strokeStyle=r,s.lineWidth=1,s.strokeRect(t+.5,e+.5,n-1,i-1)},un=(s,t,e,n,i,r,o=2)=>{s.strokeStyle=r,s.lineWidth=o,s.beginPath(),s.moveTo(t,e),s.lineTo(n,i),s.stroke()};function pu(s,t,e,n){const[i,r]=ts(t*Zt,e*Zt);if(s.includes("_")&&(s.endsWith("pickaxe")||s.endsWith("shovel")||s.endsWith("axe")||s.endsWith("disassembler"))){const a=s.replace(/^(wood|stone|metal)_/,"");return yt(r,7,16,2,14,"#6b5238"),yt(r,6,14,4,3,"#4a4a52"),a==="pickaxe"?(un(r,3,12,13,12,n,2),un(r,3,12,3,15,n),un(r,13,12,13,15,n),un(r,4,9,12,9,"#00000022",1)):a==="shovel"?(yt(r,5,6,6,7,n),Ri(r,5,6,6,7,"#00000044"),un(r,6,13,6,13,n),un(r,9,13,9,13,n),un(r,6,13,7,14,n,1),un(r,9,13,8,14,n,1)):a==="axe"?(yt(r,9,7,5,6,n),Ri(r,9,7,5,6,"#00000044"),yt(r,8,8,1,4,n)):(yt(r,4,7,8,2,n),yt(r,4,7,2,5,n),yt(r,10,7,2,5,n),yt(r,7,11,2,2,"#66e5f0"),yt(r,6,12,4,1,"#2f97a6")),i}switch(s){case"canister_full":case"canister_empty":{const a=s==="canister_full",h=e*Zt;return yt(r,6,0,4,3,"#8a98a8"),yt(r,7,3,2,2,"#8a98a8"),yt(r,4,5,8,h-7,a?"#2f7fd6":"#3a4750"),Ri(r,4,5,8,h-7,"#dfe6ee"),a?(yt(r,5,10,1,h-13,"#5fa3ea"),yt(r,4,9,8,1,"#7f2b2b")):(yt(r,4,14,8,4,"#c8d2da"),yt(r,6,15,4,2,"#3a4750")),i}case"sword":return yt(r,8,0,1,1,"#eef3f8"),yt(r,7,1,3,17,"#c9d2dc"),yt(r,8,1,1,17,"#eef3f8"),yt(r,4,18,8,2,"#4a4a52"),yt(r,7,20,3,9,"#6b5238"),yt(r,7,22,3,1,"#4a3926"),yt(r,7,25,3,1,"#4a3926"),yt(r,6,29,5,2,"#4a4a52"),i;case"ironrod":yt(r,6,1,3,14,"#8a4f2e"),yt(r,7,2,1,12,"#d08a52"),r.fillStyle="#5c3319";for(const[a,h]of[[6,3],[8,7],[6,11],[8,13]])r.fillRect(a,h,1,1);return yt(r,5,1,5,1,"#5c3319"),yt(r,5,14,5,1,"#5c3319"),i;case"visor":return yt(r,1,6,14,3,"#2e3a45"),yt(r,3,4,10,6,"#123c44"),yt(r,4,5,8,4,"#66e5f0"),yt(r,5,5,2,1,"#d2f8ff"),Ri(r,3,4,10,6,"#c8d2da"),yt(r,1,5,2,1,"#5a6875"),yt(r,13,5,2,1,"#5a6875"),i;case"catalyst":return yt(r,7,3,2,2,"#8898a8"),r.fillStyle="#c07fe0",r.beginPath(),r.arc(8,10,4,0,Math.PI*2),r.fill(),r.strokeStyle="#7a4a9a",r.lineWidth=1,r.beginPath(),r.arc(8,10,4.5,0,Math.PI*2),r.stroke(),r.fillStyle="#e8b8ff",r.fillRect(6,8,2,1),r.fillRect(7,7,1,1),i;case"backpack1":return yt(r,8,1,3,6,"#5a4229"),yt(r,21,1,3,6,"#5a4229"),yt(r,5,7,22,21,"#7a5a3a"),Ri(r,5,7,22,21,"#4c3822"),yt(r,5,7,22,8,"#8a6a48"),Ri(r,5,7,22,8,"#4c3822"),yt(r,13,13,6,3,"#d8b74f"),yt(r,9,20,14,6,"#6b4d30"),Ri(r,9,20,14,6,"#4c3822"),i;case"beacon":return r.fillStyle="#66e5f0",r.globalAlpha=.35,r.beginPath(),r.arc(8,5,6,0,Math.PI*2),r.fill(),r.globalAlpha=1,r.fillStyle="#66e5f0",r.beginPath(),r.arc(8,5,3,0,Math.PI*2),r.fill(),yt(r,6,5,1,1,"#d2f8ff"),yt(r,7,8,2,8,"#8a98a8"),Vn(r,0,Zt,Mn),i;case"campfire":return un(r,3,10,12,4,"#61492f",2),un(r,4,4,13,10,"#61492f",2),un(r,3,10,12,4,"#7d5f3d",1),Vn(r,0,Zt,We),i;case"door":return Vn(r,0,0,Ke),Vn(r,0,Zt,on),i;case"bed":return Vn(r,0,0,rn),Vn(r,Zt,0,En),i;case"dune_melon":r.fillStyle="#5f7f2c",r.beginPath(),r.ellipse(16,11,12,8,0,0,Math.PI*2),r.fill(),r.strokeStyle="#3c541c",r.lineWidth=2,r.beginPath(),r.ellipse(16,11,12,8,0,0,Math.PI*2),r.stroke(),r.strokeStyle="#88a84c",r.lineWidth=1;for(const a of[-7,0,7])r.beginPath(),r.moveTo(16+a,3),r.lineTo(16+a,19),r.stroke();return yt(r,15,1,2,3,"#6b5238"),i;case"wheat":{r.strokeStyle="#c8a844",r.lineWidth=2;for(const a of[4,8,12])r.beginPath(),r.moveTo(a,15),r.lineTo(a,3),r.stroke();r.fillStyle="#e0c860";for(const a of[4,8,12])for(let h=2;h<9;h+=2)r.fillRect(a-2,h,4,2);return r.strokeStyle="#7a5a30",r.lineWidth=1,r.beginPath(),r.moveTo(2,12),r.lineTo(14,12),r.stroke(),i}case"cooked_wheat":return r.fillStyle="#a8712e",r.beginPath(),r.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),r.fill(),r.strokeStyle="#74501f",r.lineWidth=1,r.beginPath(),r.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),r.stroke(),r.fillStyle="#d8a860",r.fillRect(5,8,6,1),r.fillRect(6,7,4,1),i;case"bucket":case"bucket_full":{const a=s==="bucket_full";return yt(r,4,6,8,9,a?"#2f7fd6":n),Ri(r,4,6,8,9,"#dfe6ee"),yt(r,3,5,10,2,"#c8d2da"),yt(r,5,2,1,3,"#8a98a8"),yt(r,10,2,1,3,"#8a98a8"),un(r,5,3,11,3,"#8a98a8",1),a&&yt(r,5,7,6,1,"#5fa3ea"),i}case"kindling":return un(r,3,21,12,4,"#6b5238",2),un(r,6,22,14,8,"#5a4630",2),yt(r,11,3,3,3,"#9a8a5a"),yt(r,4,8,3,3,"#9a8a5a"),yt(r,13,9,3,2,"#8a9a4a"),i;case"seed_tree":return yt(r,7,14,6,6,"#8a6a3a"),yt(r,7,13,6,2,"#5a4630"),yt(r,9,9,2,4,"#5a8a3a"),yt(r,6,7,3,2,"#7fae54"),yt(r,11,8,3,2,"#7fae54"),i;case"bench":return Vn(r,0,0,ze),Vn(r,0,Zt,fn),i}return null}const Yr=new Map;function ro(s){const t=Yr.get(s);if(t)return t;const e=Gt[s];if(!e)return Yr.set(s,[]),Yr.get(s);let i=pu(s,e.w,e.h,e.color);if(!i&&e.block!==void 0){const[o,a]=ts(e.w*Zt,e.h*Zt);for(let h=0;h<e.h;h++)for(let l=0;l<e.w;l++)Vn(a,l*Zt,h*Zt,e.block);i=o}const r=[];if(i){const[o,a]=ts(Zt,Zt);for(let h=0;h<e.h;h++)for(let l=0;l<e.w;l++)a.clearRect(0,0,Zt,Zt),a.drawImage(i,l*Zt,h*Zt,Zt,Zt,0,0,Zt,Zt),r.push(o.toDataURL())}else{const[o,a]=ts(Zt,Zt);yt(a,2,2,Zt-4,Zt-4,e.color),r.push(o.toDataURL())}return Yr.set(s,r),r}function xi(s,t=0){const e=Gt[s];if(!e)return"";if(e.w===1&&e.h===1)return ro(s)[0]??"";const[n,i]=ts(e.w*Zt,e.h*Zt);i.imageSmoothingEnabled=!1;const r=pu(s,e.w,e.h,e.color);if(r)i.drawImage(r,0,0);else if(e.block!==void 0)for(let h=0;h<e.h;h++)for(let l=0;l<e.w;l++)Vn(i,l*Zt,h*Zt,e.block);if(!t)return n.toDataURL();const[o,a]=ts(e.h*Zt,e.w*Zt);return a.imageSmoothingEnabled=!1,a.translate(e.h*Zt,0),a.rotate(Math.PI/2),a.drawImage(n,0,0),o.toDataURL()}function Y_(s){const[t,e]=ts(Zt,Zt);return Vn(e,0,0,s),t.toDataURL()}const Ae=s=>document.getElementById(s);let ch=0;function ht(s){const t=Ae("toast");t.textContent=s,t.style.opacity="1",clearTimeout(ch),ch=setTimeout(()=>t.style.opacity="0",2600)}function K_(s){const t=Ae("prompt");if(!s){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=s}function j_(s){Ae("vision-water").style.opacity=s?"1":"0"}function Z_(s){const t=Ae("blockname");if(!s){t.classList.add("hidden");return}t.textContent=s,t.classList.remove("hidden")}function J_(){const s=Ae("vision-hit");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash")}let hh="";function Q_(s){const t=s.selectedSlot()?.itemId??"",e=s.slots.map(r=>r.itemId+":"+r.count).join(",")+"|"+t;if(e===hh)return;hh=e;const n=[];for(const r of s.slots){const o=n.find(a=>a.itemId===r.itemId);o?o.count+=r.count:n.push({itemId:r.itemId,count:r.count})}const i=Ae("hotbar");i.innerHTML="",n.slice(0,9).forEach((r,o)=>{const a=document.createElement("div");a.className="hb-slot"+(r.itemId===t?" sel":""),a.dataset.hb=String(o);const h=document.createElement("img");h.src=xi(r.itemId),h.alt=Gt[r.itemId].name,a.appendChild(h);const l=document.createElement("span");if(l.className="hb-key",l.textContent=String(o+1),a.appendChild(l),r.count>1){const c=document.createElement("span");c.className="hb-count",c.textContent=String(r.count),a.appendChild(c)}i.appendChild(a)})}function tv(){const s=document.querySelector("#bar-water .safe");s.style.left="25%",s.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((Ll-ji)/($s-ji)*100).toFixed(1)+"%",t.style.right=(($s-Pl)/($s-ji)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(i,r,o)=>{const a=document.createElement("span");a.className="dmg",a.style.left=r.toFixed(1)+"%",a.title=o,document.getElementById(i).appendChild(a)};e("bar-water",cl,"below this, dehydration drains Health");const n=i=>(i-ji)/($s-ji)*100;e("bar-heat",n(ll),"below this, hypothermia drains Health"),e("bar-heat",n(al),"above this, heat stroke drains Health")}function uh(s,t=0,e=0,n=0,i=0,r=0){const o=document.getElementById("waypoint");if(!s){o.classList.add("hidden");return}const a=t-n,h=e-i,l=Math.atan2(a,-h)+r;Ae("wp-arrow").style.transform=`rotate(${l*180/Math.PI}deg)`,Ae("wp-name").textContent=s,Ae("wp-dist").textContent=`${Math.round(Math.hypot(a,h))} m`,o.classList.remove("hidden")}function dh(s,t,e,n,i,r,o){const a=T=>document.querySelector(`#${T} .fill`);a("bar-health").style.width=s.health+"%",a("bar-water").style.width=s.water+"%";const h=(s.body-ji)/($s-ji)*100;a("bar-heat").style.width=h+"%";const l=e%Ne/Ne,c=String(Math.floor(l*24)).padStart(2,"0"),u=String(Math.floor(l*24%1*60)).padStart(2,"0");Ae("clock-day").textContent="Day "+n,Ae("clock-time").textContent=c+":"+u;const f=T=>i==="C"?Math.round(T)+"°C":Math.round(T*9/5+32)+"°F";Ae("clock-temp").textContent=`air ${f(s.lastAmbientEff)}  body ${f(s.body)}`;const m=t.selectedSlot();Ae("held").textContent=m?Gt[m.itemId].name:"—",Q_(t),Ae("warn-hot").classList.toggle("hidden",s.body<=Pl),Ae("warn-cold").classList.toggle("hidden",s.body>=Ll),Ae("chip-reg").classList.toggle("hidden",!o?.regulated),Ae("chip-nap").classList.toggle("hidden",!o?.napReady);const v=t.weight(),M=t.weightLimit(),_=Ae("weight");_.textContent=`${v.toFixed(1)} / ${M} kg`,_.classList.toggle("encumbered",v>M),Ae("vision-vignette").style.opacity=String(s.vision*.85);const g=s.water<5||s.health<30;Ae("vision-red").style.opacity=g?String(.35+.25*Math.sin(r/220)):"0"}const Kr=s=>s===on||s===Ke||s===Ye||s===He;class fe{constructor(t,e,n,i,r){this.meta=t,this.settings=i,this.audio=r,this.seed=Jg(t.seedStr||t.id),this.world=new h_(this.seed),this.survival=new __(this.seed^7),this.quests=z_(e?.quest),this.renderer=new T_(n),this.player=new p_(this.world),this.timeSec=e?.time??Ne*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===Wn&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===Wn&&this.renderer.addPointLight(6,35,0,"lamp"),tv(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(i)}seed;world;survival;player;inv=new da;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null};collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;waterAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(Ce(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",count:1,buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===Ft&&(this.world.set(t,e,n,Te),this.chests.set(fe.chestKey([[t,e,n]]),[{itemId:"canister_full",count:1,x:0,y:0},{itemId:"canister_full",count:1,x:1,y:0},{itemId:"canister_full",count:1,x:2,y:0}]))}chestCluster(t,e,n){const i=new Set([`${t},${e},${n}`]),r=[[t,e,n]],o=[];for(;r.length;){const a=r.pop();this.world.get(a[0],a[1],a[2])===Te&&o.push(a);for(const[h,l,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=a[0]+h,f=a[1]+l,m=a[2]+c,v=`${u},${f},${m}`,M=this.world.get(u,f,m);i.has(v)||M!==Te&&M!==gr||(i.add(v),r.push([u,f,m]))}}return o}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=Gt[e.itemId],i=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const r of i){const o=r?n.h:n.w,a=r?n.w:n.h;for(let h=0;h+a<=t.h;h++)for(let l=0;l+o<=t.w;l++)if(t.fits(l,h,o,a))return e.x=l,e.y=h,e.rot=r||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new da;e.slots=[];const[n,i]=fe.chestDims(t);return e.w=n,e.h=i,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,i=Math.floor(t/Re),r=Math.floor(e/Re);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){if(!n.townAt(i+o,r+a))continue;const h=n.townCenter(i+o,r+a);if(Math.abs(h.x-t)<=10&&Math.abs(h.z-e)<=10)return!0}return!1}townLoot(t,e){const n=r=>te(t,e,this.seed+r),i=[{itemId:"canister_empty",count:2}];return n(11)<.7&&i.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&i.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&i.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&i.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&i.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&i.push({itemId:"door_inner",count:1}),n(22)<.25&&i.push({itemId:"bed",count:1}),n(23)<.5&&i.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),i}openChest(t,e,n){const i=this.chestCluster(t,e,n),r=fe.chestKey(i),o=this.chests.has(r);this.chests.has(r)||this.chests.set(r,[]);const a=this.emptyChestGrid(i.length);if(a.slots=this.chests.get(r),!o&&i.some(([h,,l])=>this.inTown(h,l))){for(const h of this.townLoot(i[0][0],i[0][2])){const l={itemId:h.itemId,count:h.count,x:0,y:0};fe.placeSlotFree(a,l)||this.dropEntity(h.itemId,h.count,2)}ht("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=a,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,i){const r=this.chestCluster(t,e,n),o=this.emptyChestGrid(r.length);for(const a of i)fe.placeSlotFree(o,a)||this.dropEntity(a.itemId,a.count,2);o.slots.length&&this.chests.set(fe.chestKey(r),o.slots),r.length>1&&ht(`Chests linked — one ${o.w}×${o.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==Te){if(tn(this.world.get(t.x,t.y,t.z))){for(const r of t.items)this.dropEntity(r.itemId,r.count,2);return}this.world.set(t.x,t.y,t.z,Te)}const e=this.chestCluster(t.x,t.y,t.z),n=fe.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const i=this.emptyChestGrid(e.length);i.slots=this.chests.get(n);for(const r of t.items)for(let o=0;o<r.count;o++){const a={itemId:r.itemId,count:1,x:0,y:0};fe.placeSlotFree(i,a)||this.dropEntity(r.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body,this.inv.slots=t.inventory.slots.map(a=>({...a}));const e=this.inv.slots.filter(a=>a.count>1);if(e.length){this.inv.slots=this.inv.slots.filter(a=>a.count===1);for(const a of e)this.giveOrDrop(a.itemId,a.count)}this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const a of["backpack","head","body"]){const h=t.equip?.[a];h&&(this.equip[a]={itemId:h,count:1,x:0,y:0})}this.beaconMarks=t.beaconMarks??[],this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let i=0;const r=[];this.world.gen.canisters.forEach(a=>{if(a.buried&&!n.has(i)){const h=Math.round(Ce(this.seed,a.x,a.z));r.push({id:this.entitySeq++,x:a.x+.5,y:h,z:a.z+.5,itemId:"canister_full",count:1,buried:a.buried,buriedAt:a.buried?[a.x,h,a.z]:void 0,srcIndex:i})}i++});for(const a of t.entities)r.push({id:this.entitySeq++,...a});this.entities=r;const o=[];for(const a of t.caches){const h=a.kind??"death";if(h==="chest"){o.push(a);continue}const l={id:this.entitySeq++,x:a.x,y:a.y,z:a.z,kind:h,items:a.items.map(c=>({...c}))};this.caches.push(l),l.items.length&&this.renderer.addEntityMesh(l.id,this.cacheMeshPos(l),this.cacheColor(l),.7)}this.campCharges=new Map(Object.entries(t.campfires??{}).map(([a,h])=>[a,h])),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep),this.chests=new Map((t.chests??[]).map(a=>[a.cells,a.slots.map(h=>({...h}))]));for(const a of o)this.adoptLegacyChest(a);this.pods=(t.pods??[]).map(a=>({...a,ringEid:this.renderer.addGroundRing(a.x+.5,Math.round(Ce(this.seed,a.x,a.z)),a.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(a.x+.5,Math.round(Ce(this.seed,a.x,a.z)),a.z+.5,13382434)})),this.won=!!t.won;for(const[a,h]of this.world.deltas){const[l,c]=a.split(",").map(Number);for(const[u,f]of h){if(f!==Wn&&f!==We)continue;const m=Math.floor(u/(st*ne)),v=u%(st*ne);this.renderer.addPointLight(l*st+m,v%ne,c*st+Math.floor(v/ne),f===Wn?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,count:t.count})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/Ne);this.timeSec=(e+t)*Ne}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new V_(this),this.startCine(G_,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),ht("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,i=n.find(h=>e.t<h.t1)??n[n.length-1];if(i.openDoor&&e.t>=i.openDoor.t){const{x:h,y:l,z:c}=i.openDoor;if(this.world.get(h,l,c)!==Oe){this.world.set(h,l,c,Oe);for(const u of[-1,1])Kr(this.world.get(h,l+u,c))&&this.world.set(h,l+u,c,Oe);this.audio.door()}}const r=Math.min(1,Math.max(0,(e.t-i.t0)/(i.t1-i.t0))),o=r*r*(3-2*r),a=this.renderer.camera;if(a.position.set(i.from[0]+(i.to[0]-i.from[0])*o,i.from[1]+(i.to[1]-i.from[1])*o,i.from[2]+(i.to[2]-i.from[2])*o),a.lookAt(i.look[0],i.look[1],i.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const h=n[n.length-1];this.player.yaw=Math.atan2(-(h.look[0]-h.to[0]),-(h.look[2]-h.to[2])),this.player.pitch=0;const l=this.renderer.camera;l.position.copy(this.player.eye()),l.rotation.order="YXZ",l.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&ht("Guest worlds are never saved."),!1;const e=uu(this.meta,this.snapshot());return t&&ht(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){fu(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/Ne)}questBump(t,e=1){if(this.tut)return;const n=H_(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}ht(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&this.win(),this.renderQuest(),this.saveNow(!0)}columnTop(t,e){for(let n=ne-1;n>=0;n--)if(this.world.get(t,n,e))return n;return Math.round(Ce(this.seed,t,e))}crashPod(t,e){const n=this.player.pos,i=Math.round(n.x)+2,r=Math.round(n.z)+1,o=this.columnTop(i,r),a=this.renderer.addGroundRing(i+.5,o,r+.5,13382434,1.1),h=this.renderer.addBeam(i+.5,o,r+.5,13382434);this.pods.push({x:i,z:r,t:3,itemId:t,n:e,ringEid:a,beamEid:h}),this.audio.warn(),setTimeout(()=>{this.running&&ht("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const i=this.columnTop(n.x,n.z);this.caches.push({id:this.entitySeq++,x:n.x,y:i,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,i+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),ht("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){uh(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const r=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;r!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=r,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else uh(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const i=new Map;if(this.equip.head?.itemId==="visor"){for(const r of this.caches)r.items.length&&i.set(`c${r.id}`,[r.x+.5,r.y,r.z+.5,r.kind==="reward"?14197322:13386803]);for(const r of this.chests.keys()){const[o,a,h]=r.split(";")[0].split(",").map(Number);i.set(`x${r}`,[o+.5,a,h+.5,15124842])}}for(const[r,o]of this.visorBeams)i.has(r)||(this.renderer.removeEntityMesh(o),this.visorBeams.delete(r));for(const[r,[o,a,h,l]]of i)this.visorBeams.has(r)||this.visorBeams.set(r,this.renderer.addBeam(o,a,h,l,10))}waypointTarget(){const t=Ks(this.quests);if(!t)return null;const e=this.player.pos,n=(r,o)=>Math.round(Ce(this.seed,r,o))+1,i=r=>{let o=r[0],a=1/0;for(const h of r){const l=(h.x-e.x)**2+(h.z-e.z)**2;l<a&&(a=l,o=h)}return o};switch(t.kind){case"oasis":{const r=i(this.world.gen.oases);return r?{name:"Oasis",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}:null}case"water_home":case"finish":{const r=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(o=>this.world.get(o.x,o.y,o.z)===Mn);return r?{name:"Save Beacon",x:r.x+.5,y:r.y,z:r.z+.5}:null}case"wreck":{const r=this.world.gen.secondShip;return{name:"Second Wreck",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"core":{const r=this.world.gen.secondShip;return{name:"Engine Core",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"tool":{const r=[];this.world.get(0,31,-3)===ze&&r.push({x:0,y:31,z:-3});for(const[a,h]of this.world.deltas){const[l,c]=a.split(",").map(Number);for(const[u,f]of h){if(f!==ze)continue;const m=u%ne,v=Math.floor(u/ne)%st,M=Math.floor(u/(ne*st));r.push({x:l*st+M,y:m,z:c*st+v})}}if(!r.length)return null;const o=i(r);return{name:"Crafting Bench",x:o.x+.5,y:o.y,z:o.z+.5}}case"supplies":{const r=this.world.gen.nearestTown(e.x,e.z);return r?{name:"Town",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}:null}case"farm":{if(!this.crops.size)return null;let r=null,o=1/0;for(const c of this.crops.keys()){const[u,,f]=c.split(",").map(Number),m=(u+.5-e.x)**2+(f+.5-e.z)**2;m<o&&(o=m,r=c)}const[a,h,l]=r.split(",").map(Number);return{name:"Your Farm",x:a+.5,y:h+1,z:l+.5}}default:return null}}questFrame(){const t=Ks(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===Mn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=Ks(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],i=e.id+":"+n;i!==this.questShown&&(this.questShown=i,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,i,r=window)=>{r.addEventListener(n,i),this.bound.set(n+(r===window?"":":el"),i)};t("keydown",n=>{const i=n;if(!i.repeat){if(this.keys.add(i.code),i.code==="KeyE"&&this.act(),i.code==="KeyQ"&&this.useItem(),i.code==="KeyX"&&this.surge(),i.code==="KeyI"&&this.toggleInv(),i.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot();o&&!r.rotate(o)&&(ht("No room to rotate."),this.audio.error())}this.renderInv()}if(i.code==="Escape"){if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(i.code==="KeyP"&&this.escape(!0),i.code.startsWith("Digit")){const r=Number(i.code.slice(5)),o=this.hotbarItems();if(r>=1&&r<=o.length){const a=o[r-1];this.inv.selectedSlot()?.itemId===a?this.inv.selected=-1:this.selectItem(a),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const i=n.target.closest("[data-hb]");if(!i)return;const r=this.hotbarItems()[Number(i.dataset.hb)];r&&(this.inv.selectedSlot()?.itemId===r?this.inv.selected=-1:this.selectItem(r),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const i=n;i.button===0?(this.mouseDown=!0,this.breakMsg=!1):i.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const i=n;this.player.yaw-=i.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*i.movementY*.0022*this.settings.sens,this.player.pitch=Di.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>{this.ui||this.cycleItem(n.deltaY>0?1:-1)}),t("contextmenu",n=>n.preventDefault());else{let n=-1,i=0,r=0;e.addEventListener("touchstart",m=>{if(n<0){const v=m.changedTouches[0];n=v.identifier,i=v.clientX,r=v.clientY}m.preventDefault()}),e.addEventListener("touchmove",m=>{for(const v of m.changedTouches)v.identifier===n&&(this.player.yaw-=(v.clientX-i)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(v.clientY-r)*.005*this.settings.sens,this.player.pitch=Di.clamp(this.player.pitch,-1.55,1.55),i=v.clientX,r=v.clientY);m.preventDefault()});const o=m=>{for(const v of m.changedTouches)v.identifier===n&&(n=-1)};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),document.addEventListener("contextmenu",m=>m.preventDefault());const a=document.getElementById("stick"),h=document.getElementById("knob");let l=-1;const c=m=>{const v=a.getBoundingClientRect();for(const M of m.changedTouches)if(M.identifier===l){const _=M.clientX-(v.left+v.width/2),g=M.clientY-(v.top+v.height/2),T=Math.max(1,Math.hypot(_,g)),R=Math.min(T,v.width/2)/(v.width/2);this.stick.x=_/T*R,this.stick.y=g/T*R,h.style.left=38+_/T*R*38+"px",h.style.top=38+g/T*R*38+"px"}};a.addEventListener("touchstart",m=>{l=m.changedTouches[0].identifier,c(m),m.preventDefault()}),a.addEventListener("touchmove",m=>{c(m),m.preventDefault()});const u=()=>{this.stick.x=0,this.stick.y=0,l=-1,h.style.left="38px",h.style.top="38px"};a.addEventListener("touchend",u),a.addEventListener("touchcancel",u);const f=(m,v,M)=>{const _=document.getElementById(m);_.addEventListener("touchstart",g=>{g.preventDefault(),v()}),_.addEventListener("touchend",g=>{g.preventDefault(),M&&M()}),_.addEventListener("touchcancel",()=>{M&&M()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-next",()=>this.cycleItem(1)),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=i=>!document.getElementById(i).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document)}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),i=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,i),this.renderer.rebuildDirty(this.world);const r=this.renderer.updateSky(this.timeSec,this.player.pos),o=no(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),a=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let u=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(u-=1),this.keys.has("KeyD")&&(u+=1);const m=this.keys.has("Space")||this.mobileJump;this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,u,f,m,this.speedMul,a),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(u!==0||f!==0),overencumbered:a,biome:o,tSec:this.timeSec,sunElev:r.sunElev,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos)}),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const u=this.renderer.camera;u.position.copy(this.player.eye()),u.rotation.order="YXZ",u.rotation.set(this.player.pitch,this.player.yaw,0)}const h=this.raycastTarget();this.renderer.setHighlight(this.ui||this.cine?null:h?.hit??null),K_(this.ui||this.cine?null:this.promptFor(h)),Z_(this.ui||this.cine||!h?.hit?null:oi[this.world.get(h.hit.x,h.hit.y,h.hit.z)].name),j_(this.player.headUnder);for(const u of this.entities){if(u.fall!==void 0){const m=Math.min(u.fall,14*t);u.y-=m,u.fall-=m,u.fall<=.001&&(u.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(u.id,[u.x,u.y,u.z])}const f=this.renderer.entityMesh(u.id);u.buried&&u.buriedAt&&this.world.get(u.buriedAt[0],u.buriedAt[1],u.buriedAt[2])!==Ft?f&&this.renderer.removeEntityMesh(u.id):f||this.renderer.addEntityMesh(u.id,[u.x,u.y,u.z],parseInt(Gt[u.itemId].color.slice(1),16))}for(const u of this.caches){const f=this.renderer.entityMesh(u.id);!f&&u.items.length?(this.renderer.addEntityMesh(u.id,this.cacheMeshPos(u),this.cacheColor(u),.7),u.markerEid=this.renderer.addGroundRing(u.x+.5,u.y,u.z+.5,u.kind==="reward"?14197322:13382434,1.4)):f&&!u.items.length&&(this.renderer.removeEntityMesh(u.id),u.markerEid!==void 0&&(this.renderer.removeEntityMesh(u.markerEid),u.markerEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const l=this.survival.surgeCooldown>0;for(const u of["surge-btn","m-surge"]){const f=document.getElementById(u);f&&f.disabled!==l&&(f.disabled=l)}dh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),napReady:this.timeSec-this.lastSleep>=Ne}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.waterAcc+=t,this.waterAcc>.4&&(this.waterAcc=0,this.world.processWater()),this.audio.setDay(r.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const c=this.prevHp-this.survival.health;if(c>0){const u=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(c>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,J_(),(c>=2||u)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new D;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),i=Math.floor(t.y),r=Math.floor(t.z);const o=new D(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),a=new D(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),h=(f,m)=>m>0?Math.ceil(f)-f||1:m<0?f-Math.floor(f)||1:1/0,l=new D(h(t.x,o.x)*a.x,h(t.y,o.y)*a.y,h(t.z,o.z)*a.z);let c=new D(n,i,r),u=null;for(let f=0;f<80;f++){const m=this.world.get(n,i,r);if(ni(m)){if(u||(u={x:n,y:i,z:r}),m===qe)return{hit:{x:n,y:i,z:r},water:u,face:new D(c.x-n,c.y-i,c.z-r)}}else if(m!==Ft&&m!==qe)return{hit:{x:n,y:i,z:r},water:u,face:new D(c.x-n,c.y-i,c.z-r)};if(c.set(n,i,r),l.x<l.y&&l.x<l.z?(n+=o.x,l.x+=a.x):l.y<l.z?(i+=o.y,l.y+=a.y):(r+=o.z,l.z+=a.z),new D(n-t.x,i-t.y,r-t.z).length()>5.5)break}return{hit:null,water:u,face:new D(0,0,0)}}promptFor(t){if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Te)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===on||n===Ke)return"E: Open door";if(n===Oe)return"E: Close door";if(n===Mn)return"E: Save game (respawn point)";if(n===ze||n===fn)return"E: Craft";if(n===We)return"E: Smelt";if(n===ki)return"E: Draw neutral air (37 °C)"}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new D(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=oi[t];if(e.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const n=this.inv.selectedSlot(),i=n?Gt[n.itemId].tool:void 0;return e.tool!==null?!i||i.type!==e.tool?{ok:!1,time:0,why:`need a ${e.tool}`}:i.tier<e.minTier?{ok:!1,time:0,why:`need a tier ${e.minTier} ${e.tool}`}:{ok:!0,time:e.breakTime*Math.pow(.55,i.tier-1)}:{ok:!0,time:e.breakTime*(e.fastTool&&i&&i.type===e.fastTool?Math.pow(.55,i.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const h=this.inv.selectedSlot(),l=h?Gt[h.itemId]:null,c=l?.weapon;e.hp-=c?c.dmg:3+(l?.tool?.tier??0),this.audio.thud();const u=e.x-this.player.pos.x,f=e.z-this.player.pos.z,m=Math.max(.2,Math.hypot(u,f)),v=c?1.1:.6;this.mobCanStand(e,e.x+u/m*v,e.z+f/m*v)&&(e.x+=u/m*v,e.z+=f/m*v,e.y=this.mobSurface(e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:i,y:r,z:o}=n.hit,a=this.world.get(i,r,o);if(!this.breaking||this.breaking.x!==i||this.breaking.y!==r||this.breaking.z!==o){const h=this.canBreakWith(a);if(!h.ok){h.why&&!this.breakMsg&&(this.breakMsg=!0,ht(h.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${h.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:i,y:r,z:o,need:h.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(i,r,o),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const i=this.world.get(t,e,n);if(this.questBump("mine"),Kr(i)||i===Oe||i===sn){const o=i===Ye||i===He||i===sn;this.world.set(t,e,n,Ft);for(const a of[-1,1]){const h=this.world.get(t,e+a,n);(Kr(h)||h===Oe||h===sn)&&this.world.set(t,e+a,n,Ft)}this.giveOrDrop(o?"door_inner":"door",1),this.audio.blockBreak();return}if(i===Mn){this.world.set(t,e,n,Ft),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===t&&o.y===e&&o.z===n)),ht("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(i===$e){this.world.set(t,e,n,Ft),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(i===ri){this.world.set(t,e,n,Ft),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(i===Dn){this.world.set(t,e,n,Ft),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(i===yn||i===Pn||i===Qe||i===Un){this.world.set(t,e,n,i===Qe||i===Un?bn:Ft),this.crops.delete(`${t},${e},${n}`),i===yn&&this.giveOrDrop("dune_melon",1),i===Qe&&(this.giveOrDrop("wheat",1),this.giveOrDrop("seed_wheat",1)),i===Pn&&this.giveOrDrop("seed_melon",1),i===Un&&this.giveOrDrop("seed_wheat",1),this.audio.blockBreak();return}if(i===hi){this.world.set(t,e,n,Ft),this.giveOrDrop("kindling",1),te(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(i===rn||i===En){this.world.set(t,e,n,Ft);const o=t+(i===rn?1:-1),a=this.world.get(o,e,n);(a===rn||a===En)&&this.world.set(o,e,n,Ft),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(i===We&&this.campCharges.delete(`${t},${e},${n}`),i===Te){const o=this.chestCluster(t,e,n),a=this.chests.get(fe.chestKey(o))??[];this.chests.delete(fe.chestKey(o)),this.world.set(t,e,n,Ft);const h=o.filter(([u,f,m])=>u!==t||f!==e||m!==n),l=[];for(const u of h){const f=this.chestCluster(u[0],u[1],u[2]),m=fe.chestKey(f);l.some(([v])=>v===m)||l.push([m,this.emptyChestGrid(f.length)])}let c=!1;for(const u of a)l.some(([,f])=>fe.placeSlotFree(f,u))||(this.dropEntity(u.itemId,u.count,2),c=!0);for(const[u,f]of l)f.slots.length&&this.chests.set(u,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),c&&ht("The remaining chests were full — some contents fell to the sand.");return}if(i===is){this.world.set(t,e,n,Ft),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(i===ze||i===fn){const o=this.benchPeer(t,e,n);this.world.set(t,e,n,Ft),o&&this.world.set(o[0],o[1],o[2],Ft),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(i===Wn||i===We)&&this.renderer.removePointLight(t,e,n),this.world.set(t,e,n,Ft);const r=this.blockItemId(i);r&&this.giveOrDrop(r,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),i=Math.floor(e),r=Math.max(30,Math.round(Ce(this.seed,n,i))+8);for(let o=r;o>=0;o--){const a=this.world.get(n,o,i);if(a!==Ft&&oi[a].solid)return o+1}return-1}mobCanStand(t,e,n){const i=this.mobSurface(e,n);return i<0||i>t.y+1.01?!1:this.world.get(Math.floor(e),i,Math.floor(n))===Ft}spawnMob(t,e,n,i){const r=F_(t);r.group.position.set(e,n,i),r.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(r.group),this.mobs.push({kind:t,hp:Vs[t].hp,x:e,y:n,z:i,yaw:r.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:r})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(e=>e!==t);for(const e of Vs[t.kind].drops)this.giveOrDrop(e.itemId,e.count);ht(`${Vs[t.kind].name} killed.`)}topUpMobs(){const t={snake:4,rat:8},e={snake:0,rat:0};for(const i of this.mobs)e[i.kind]++;const n=this.player.pos;for(const i of["snake","rat"])for(;e[i]<t[i];){e[i]++;const r=Math.random()*Math.PI*2,o=30+Math.random()*30,a=Math.floor(n.x+Math.cos(r)*o)+.5,h=Math.floor(n.z+Math.sin(r)*o)+.5;if(Math.hypot(a,h)<24||this.beaconMarks.some(c=>Math.hypot(c.x+.5-a,c.z+.5-h)<16))continue;const l=this.mobSurface(a,h);l<=1||this.world.get(Math.floor(a),l,Math.floor(h))!==Ft||this.world.get(Math.floor(a),l+1,Math.floor(h))!==Ft||this.spawnMob(i,a,l,h)}}meleeMob(){const t=this.player.eye(),e=new D;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),i=n?Gt[n.itemId].weapon?.reach??3.2:3.2,r=this.raycastTarget(),o=r?.hit?Math.hypot(r.hit.x+.5-t.x,r.hit.y+.5-t.y,r.hit.z+.5-t.z):1/0;let a=null,h=1/0;for(const l of this.mobs){const c=Vs[l.kind],u=l.x-t.x,f=l.y+c.height/2-t.y,m=l.z-t.z,v=u*e.x+f*e.y+m*e.z;if(v<.2||v>i||v>o)continue;const M=t.x+e.x*v-l.x,_=t.y+e.y*v-(l.y+c.height/2),g=t.z+e.z*v-l.z;M*M+_*_+g*g>(c.hitR+.3)*(c.hitR+.3)||v<h&&(h=v,a=l)}return a}columnClear(t,e,n,i){const r=Math.floor(t),o=Math.floor(e);for(let a=Math.floor(n);a<=Math.floor(i);a++){const h=this.world.get(r,a,o);if(h!==Ft&&h!==qe)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const i of this.mobs.slice()){const r=Vs[i.kind],o=e.x-i.x,a=e.z-i.z,h=Math.hypot(o,a);if(h>110){this.renderer.removeSceneObject(i.vis.group),this.mobs=this.mobs.filter(m=>m!==i);continue}let l=0,c=0;const u=this.columnClear(i.x,i.z,i.y+.2,e.y+1.4);if(r.aggroR>0&&h<r.aggroR&&h>.01&&u){if(l=o/h*r.speed,c=a/h*r.speed,i.yaw=Math.atan2(l,c),h<1.2+r.hitR&&i.biteCd<=0){i.biteCd=r.biteCd;const m=this.equip.body?.6:1;this.survival.hurt(r.biteDmg*m,`${r.name.toLowerCase()} bite`),ht(m<1?`A ${r.name.toLowerCase()} bites you — the Reptile Armour soaks some of it.`:`A ${r.name.toLowerCase()} bites you!`)}}else r.fleeR>0&&h<r.fleeR&&h>.01?(l=-o/h*r.speed,c=-a/h*r.speed,i.yaw=Math.atan2(l,c)):(i.wanderT-=t,i.wanderT<=0&&(i.wanderT=2+Math.random()*4,i.wanderYaw=Math.random()*Math.PI*2,i.wanderOn=Math.random()<.55),i.wanderOn&&(l=Math.sin(i.wanderYaw)*r.speed*.35,c=Math.cos(i.wanderYaw)*r.speed*.35,i.yaw=i.wanderYaw));i.biteCd-=t;let f=0;if(l!==0||c!==0){const m=i.x+l*t,v=i.z+c*t;this.mobCanStand(i,m,v)?(i.x=m,i.z=v,f=1):i.wanderYaw=i.yaw=Math.random()*Math.PI*2}i.y=this.mobSurface(i.x,i.z),i.vis.group.position.set(i.x,i.y,i.z),i.vis.group.rotation.y=i.yaw,i.vis.animate(n,f)}}gridFits(t,e){const n=new da;n.slots=[],n.w=t,n.h=e;for(const i of this.inv.slots)if(!fe.placeSlotFree(n,{...i,x:0,y:0}))return!1;return!0}applyEquip(){const t=this.equip.backpack?4:3,e=this.equip.backpack?5:4;(this.inv.w!==t||this.inv.h!==e)&&this.inv.setBackpack(t,e,this.equip.backpack?20:0),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=Gt[t.itemId];if(!e.equip)return;const n=e.equip,i=this.equip[n];if(i&&this.inv.addItem(i.itemId,i.count)>0){this.inv.removeItem(i.itemId,1),ht("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),ht(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(e){if(!this.gridFits(this.equip.backpack&&t==="backpack"?3:this.inv.w,this.equip.backpack&&t==="backpack"?5:this.inv.h)){ht("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,this.applyEquip(),this.inv.addItem(e.itemId,e.count),this.audio.place(),ht(`${Gt[e.itemId].name} taken off.`)}}benchPeer(t,e,n){for(const[i,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.world.get(t+i,e,n+r);if(o===ze||o===fn)return[t+i,e,n+r]}return null}blockItemId(t){return{1:"sand",2:"sandstone",3:"rock",4:"gravel",5:"dirt",6:"salt",7:"deadwood",8:"glass",9:"insglass",10:"hull",11:"door",13:"lamp",14:"metal",16:"bench",17:"campfire",19:"adobe",21:"engine_core",22:"regulator",23:"chest",24:"bench"}[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),ht(`No room: dropped ${Gt[t].name}`))}dropEntity(t,e,n=0){const i=this.player.pos,r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=(u,f)=>{const m=Math.floor(i.x+u),v=Math.floor(i.z+f);return!tn(this.world.get(m,Math.floor(i.y),v))&&!tn(this.world.get(m,Math.floor(i.y+1),v))},h=[[r*1.8,o*1.8],[-r*1.8,-o*1.8],[o*1.8,-r*1.8],[-o*1.8,r*1.8],[0,0]],[l,c]=h.find(([u,f])=>a(u,f))??[0,0];this.entities.push({id:this.entitySeq++,x:i.x+l,y:i.y+.35,z:i.z+c,itemId:t,count:e,repickAt:l===0&&c===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=Gt[t.itemId];if(e.block===void 0){ht("Not a placeable block"),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const i=n.hit.x+n.face.x,r=n.hit.y+n.face.y,o=n.hit.z+n.face.z;if(this.world.get(i,r,o)!==Ft)return;if(tn(e.block)){const l=this.player.pos;if(i+1>l.x-.3&&i<l.x+.3&&o+1>l.z-.3&&o<l.z+.3&&r+1>l.y&&r<l.y+1.8)return}let a=[];if(e.block===Te){const l=new Set;for(const[c,u,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(i+c,r+u,o+f)!==Te)continue;const m=fe.chestKey(this.chestCluster(i+c,r+u,o+f));l.has(m)||(l.add(m),a.push(...this.chests.get(m)??[]),this.chests.delete(m))}}let h=null;if(e.block===ze){const l=this.player.pos;for(const[c,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=i+c,m=o+u;if(this.world.get(f,r,m)===Ft&&!(f+1>l.x-.3&&f<l.x+.3&&m+1>l.z-.3&&m<l.z+.3&&r+1>l.y&&r<l.y+1.8)){h=[f,r,m];break}}if(!h){ht("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(e.block===Pn||e.block===Un||e.block===$e||e.block===Dn){const l=this.world.get(i,r-1,o);if(!(e.block===Dn?l===Bn||l===bn||l===Kn:l===bn||e.block===$e&&(l===On||l===Tn||l===Bn))){ht(e.block===Dn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(i,r,o,e.block),h&&this.world.set(h[0],h[1],h[2],fn),e.block===on&&this.world.get(i,r+1,o)===Ft&&this.world.set(i,r+1,o,Ke),e.block===Ye&&this.world.get(i,r+1,o)===Ft&&this.world.set(i,r+1,o,He),e.block===rn&&this.world.get(i+1,r,o)===Ft&&this.world.set(i+1,r,o,En),(e.block===Pn||e.block===Un)&&(this.crops.set(`${i},${r},${o}`,0),this.tut?.notify("plant")),e.block===Dn&&(this.trees.set(`${i},${r},${o}`,0),this.tut?.notify("plant"),ht("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===is){const l=Ks(this.quests);l&&l.kind==="finish"&&([...this.beaconMarks,{x:-4,y:31,z:-1}].some(u=>this.world.get(u.x,u.y,u.z)===Mn&&(u.x+.5-i)**2+(u.z+.5-o)**2<100)?this.questBump("finish"):ht("Too far from a Save Beacon — the relay needs the Core within 10 m."))}e.block===Wn?this.renderer.addPointLight(i,r,o,"lamp"):e.block===We&&this.renderer.addPointLight(i,r,o,"fire"),e.block===Te&&this.linkChests(i,r,o,a),t.count-=1,t.count<=0&&this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget();if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Te){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const e=this.nearestCache();if(e){this.openCacheId=e.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:n,y:i,z:r}=t.hit,o=this.world.get(n,i,r);if(o===yn||o===Qe||o===ri){this.harvest(n,i,r,o);return}if(o===rn||o===En){this.sleep();return}if(Kr(o)||o===Oe||o===sn){const a=o===Ye||o===He||o===sn,h=a?sn:Oe,l=f=>a?f===Ye||f===He:f===on||f===Ke,c=a?Ye:on,u=a?He:Ke;if(o===h){const f=this.player.pos;if(f.x>n-.2&&f.x<n+1.2&&f.z>r-.2&&f.z<r+1.2){ht("Step out of the doorway first."),this.audio.error();return}this.world.get(n,i-1,r)===h?(this.world.set(n,i,r,u),this.world.set(n,i-1,r,c)):this.world.get(n,i+1,r)===h?(this.world.set(n,i,r,c),this.world.set(n,i+1,r,u)):this.world.set(n,i,r,l(this.world.get(n,i+1,r))?u:c)}else{const f=tn(this.world.get(n-1,i,r))||tn(this.world.get(n+1,i,r)),m=this.player.pos,v=f?m.z-(r+.5):m.x-(n+.5),M=n+","+r;Math.abs(v)>.35?this.world.doorSwing.set(M,v>0?-1:1):this.world.doorSwing.delete(M),this.world.set(n,i,r,h);for(const _ of[-1,1])l(this.world.get(n,i+_,r))&&this.world.set(n,i+_,r,h);this.tut?.notify("door")}this.audio.door();return}if(o===Mn){this.tut?.notify("save"),this.beaconMarks.some(a=>a.x===n&&a.y===i&&a.z===r)||this.beaconMarks.push({x:n,y:i,z:r}),this.audio.savePing(),this.saveNow()?ht("Saved. Death will respawn you at this beacon."):ht("This world is not saved — the beacon only marks it.");return}if(o===ze||o===fn){this.openStation=[n,i,r],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(o===We){this.openStation=[n,i,r],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(o===ki){let a=null;for(const[h,l,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=this.world.roomInfo(n+h,i+l,r+c);if(u.size>0){a=u;break}}a&&a.sealed&&a.regulators*fo>=a.size?(this.survival.body=37,this.audio.drink(),ht("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),ht("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.selectedSlot()?.itemId==="bucket"){ht("E won't fill it — press Q or right-click with the Bucket to scoop."),this.audio.error();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),ht(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):ht("You need an empty Water Canister.")}}}harvest(t,e,n,i){i===yn?(this.world.set(t,e,n,Pn),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(te(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),ht("Dune Melon picked — the plant keeps growing.")):i===Qe?(this.world.set(t,e,n,bn),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),ht("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,$e),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),ht("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<Ne){const n=Math.ceil((Ne-t)/60);ht(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=Ne/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),ht("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),i=Math.floor(t.z);let r=0;for(let o=-6;o<=6;o++)for(let a=-6;a<=6;a++)for(let h=-2;h<=2;h++){if(this.world.get(e+o,n+h,i+a)!==We)continue;const l=Math.max(Math.abs(o),Math.abs(a));r=Math.max(r,l<=4?18:9)}return r}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,i]of this.crops){const[r,o,a]=n.split(",").map(Number),h=this.world.get(r,o,a);if(h!==Pn&&h!==yn&&h!==Un&&h!==Qe){this.crops.delete(n);continue}if(h===yn||h===Qe)continue;const l=h===Pn;let c=!1;t:for(let m=-4;m<=4;m++)for(let v=-4;v<=4;v++)for(let M=-2;M<=1;M++)if(ni(this.world.get(r+m,o+M,a+v))){c=!0;break t}const u=this.survival.airTempAt(this.world,r,o,a,this.timeSec),f=l?u>=22&&u<=45:u>=2&&u<=42;if(c&&f){const m=i+e;this.crops.set(n,m),m>=(l?60:90)&&this.world.set(r,o,a,l?yn:Qe)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){ht("Aim at water."),this.audio.error();return}const{x:e,y:n,z:i}=t.water;if(this.world.get(e,n,i)!==qe){ht("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){ht("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,i,Ft),this.audio.drink(),ht("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,i=t.hit.z+t.face.z;if(this.world.get(e,n,i)!==Ft){ht("Pour into open space."),this.audio.error();return}this.world.set(e,n,i,qe),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),ht("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,i]of this.trees){const[r,o,a]=n.split(",").map(Number),h=this.world.get(r,o,a);if(h!==Dn&&h!==Fn){this.trees.delete(n);continue}let l=!1;t:for(let m=-6;m<=6;m++)for(let v=-6;v<=6;v++)for(let M=-3;M<=3;M++)if(ni(this.world.get(r+m,o+M,a+v))){l=!0;break t}if(!l)continue;const c=Math.min(480,i+e);this.trees.set(n,c);const u=c>=480?3:c>=270?2:c>=120?1:0;if(u===0)continue;let f=this.treePlanCache.get(n);if(!f){let m=Math.floor(te(r+7*a,o,this.seed+55)*1e9)+1;f=Jh(r,o,a,()=>(m=m*1103515245+12345&2147483647,m/2147483647)),this.treePlanCache.set(n,f)}for(const m of f){if(m.stage>u)continue;const v=this.world.get(m.x,m.y,m.z);(v===Ft||v===Dn)&&this.world.set(m.x,m.y,m.z,m.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),i=Math.floor(t.z);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)for(let a=0;a<=2;a++){const h=this.world.get(e+r,n+a,i+o);if(!(h!==$e&&h!==ri)&&!(Math.abs(t.x-(e+r+.5))>1.15||Math.abs(t.z-(i+o+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),ht("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){ht("Select an item first."),this.audio.error();return}const e=Gt[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(t.itemId==="bucket"){this.bucketScoop();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:i,y:r,z:o}=n.hit,a=this.world.get(i,r,o);if(n.face.y===1&&(a===Bn||a===Kn)){this.world.set(i,r,o,bn),this.audio.place(),ht("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(a===On||a===Tn||a===Us)){ht("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}ht(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),ht(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){ht("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&ht("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){ht("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){ht("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),ht("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),i=Math.floor(e.y),r=Math.floor(e.z);let o=this.world.roomInfo(n,i,r);if(o.size===0)t:for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++){const f=this.world.roomInfo(n+l,i+c,r+u);if(f.size>0){o=f;break t}}const a=o.sealed&&o.regulators>0&&o.regulators*fo>=o.size;this.regActive=a;const h=new Set(a?o.regCells:[]);for(const[l,c]of this.regGlow){if(h.has(l))continue;this.renderer.removeEntityMesh(c);const[u,f,m]=l.split(",").map(Number);this.renderer.removePointLight(u,f,m),this.regGlow.delete(l)}for(const l of h){if(this.regGlow.has(l))continue;const[c,u,f]=l.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new Yn({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,v=this.renderer.addEntityMesh(m,[c+.5,u+.5,f+.5],9427199,1.03);v.material=this.regGlowMat,this.renderer.addPointLight(c,u,f,"cool"),this.regGlow.set(l,m)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==Ft)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}if(t.distanceTo(new D(n.x,n.y,n.z))<1.3){const i=this.inv.addItem(n.itemId,n.count);i===0?(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup()):n.count=i}}}}win(){this.won||(this.won=!0,lh(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`Main Quest complete. Survived ${this.scoreDays().toFixed(1)} days. Best: ${rr().toFixed(1)} days. The beacon relay is live — rescuers are on their way.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:t.count})),...["backpack","head","body"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null},lh(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${rr().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/Ne}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===Mn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){ht("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){dh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,napReady:this.timeSec-this.lastSleep>=Ne})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const u=Gt[this.temp.itemId];e.classList.add("filled"),e.style.background=u.color,e.style.backgroundImage=`url(${ro(this.temp.itemId)[0]??""})`,e.textContent=this.temp.count>1?`${this.temp.count}`:"",e.onmousedown=f=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.startTempDrag(f)},n.textContent=`Drop ${this.temp.count>1?this.temp.count+"× ":""}${u.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,this.temp.count,1),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.textContent="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const u of["backpack","head","body"]){const f=document.getElementById("eq-"+u),m=this.equip[u];if(m){const v=Gt[m.itemId];f.classList.add("filled"),f.style.background=v.color,f.style.backgroundImage=`url(${ro(m.itemId)[0]??""})`,f.title=`Click to take off the ${v.name}`,f.onclick=()=>this.unequipSlot(u)}else f.classList.remove("filled"),f.style.background="#23262e",f.style.backgroundImage="",f.title="",f.onclick=()=>{const v=this.inv.selectedSlot();v&&Gt[v.itemId].equip===u?this.equipItem():v&&(ht(`The ${Gt[v.itemId].name} does not fit the ${u} slot.`),this.audio.error())}}const i=document.getElementById("inv-side"),r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot(),a=this.temp??o,h=this.inv.weight()+(this.temp?Gt[this.temp.itemId].mass*this.temp.count:0),l=this.inv.weightLimit(),c=a?xn(a):null;if(i.textContent=a?`${Gt[a.itemId].name} — ${Gt[a.itemId].desc}`:"Click an item to inspect it; drag to move it.",i.textContent+=` Weight ${h.toFixed(1)} / ${l} kg`,a&&c&&c.w!==c.h){const u=document.createElement("button");u.textContent="Rotate",u.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:r.rotate(o)||(ht("No room to rotate."),this.audio.error()),this.renderInv()},i.appendChild(u)}if(o){const u=Gt[o.itemId];if(u.equip){const f=document.createElement("button");f.textContent=`Equip (${u.equip} slot)`,f.onclick=()=>this.equipItem(),i.appendChild(f)}}if(o)if(r===this.chestInv){const u=document.createElement("button");u.textContent="Move to pack",u.onclick=()=>{const f=r.slots.indexOf(o);r.slots.splice(f,1),fe.placeSlotFree(this.inv,o)||(r.slots.splice(f,0,o),ht("No room in your pack."),this.audio.error()),this.renderInv()},i.appendChild(u)}else{const u=document.createElement("button");u.textContent="Drop 1",u.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},i.appendChild(u)}}renderGrid(t,e){const n=fe.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const i=(r,o)=>t.slots.find(a=>{const h=xn(a);return r>=a.x&&r<a.x+h.w&&o>=a.y&&o<a.y+h.h});for(let r=0;r<t.h;r++)for(let o=0;o<t.w;o++){const a=document.createElement("div");a.className="invcell";const h=i(o,r);if(h){const l=Gt[h.itemId],c=o-h.x,u=r-h.y,f=ro(h.itemId),m=h.rot?(l.h-1-c)*l.w+u:u*l.w+c;if(a.style.background=l.color,a.style.backgroundImage=`url(${f[Math.min(m,f.length-1)]??""})`,h.count>1&&c===0&&u===0){const M=document.createElement("div");M.className="icon",M.textContent=`${h.count}`,a.appendChild(M)}t.slots.indexOf(h)===t.selected&&a.classList.add("active"),a.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${l.name} — ${l.desc}`},a.onmousedown=M=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,o,r):this.startInvDrag(M,h,t)}}else a.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,o,r)};e.appendChild(a)}}tapCell(t,e,n){const i=t.slots.find(a=>{const h=xn(a);return e>=a.x&&e<a.x+h.w&&n>=a.y&&n<a.y+h.h}),r=t===this.inv?this.chestInv:this.inv;if(r){const a=r.selectedSlot();if(a&&a!==i){const h=xn(a),l=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(l>=0&&c>=0&&t.fits(l,c,h.w,h.h,a)){r.slots.splice(r.slots.indexOf(a),1),r.selected=-1,a.x=l,a.y=c,t.slots.push(a),t.selected=t.slots.indexOf(a),this.audio.place(),this.renderInv(),this.renderHeld();return}ht("No room there."),this.audio.error();return}}const o=t.selectedSlot();if(o&&o!==i){const a=xn(o),h=Math.min(e,t.w-a.w),l=Math.min(n,t.h-a.h);if(h>=0&&l>=0&&this.tapMove(t,o,i,h,l)){this.audio.place(),t.selected=t.slots.indexOf(o),this.renderInv();return}}i?(this.setSel(t,t.slots.indexOf(i)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,i,r){const o=xn(e);if(t.fits(i,r,o.w,o.h,e))return t.move(e,i,r);if(!n)return!1;const a=xn(n),h=t.slots.indexOf(e);t.slots.splice(h,1);const l=t.fits(e.x,e.y,a.w,a.h,n)&&t.fits(i,r,o.w,o.h,n)&&!(i<e.x+a.w&&e.x<i+o.w&&r<e.y+a.h&&e.y<r+o.h)&&t.move(n,e.x,e.y)&&t.move(e,i,r);return t.slots.splice(h,0,e),l}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const i=n.slots.indexOf(e);this.setSel(n,i),n.slots.splice(i,1);const r=this.temp;this.temp=e,this.tempOrigin=n,r&&(n.slots.push(r),n.move(r,e.x,e.y)||this.giveOrDrop(r.itemId,r.count));const o=(fe.CELL+fe.GAP)*this.uiZoom(),a=fe.GAP*this.uiZoom(),h=xn(e),l=document.createElement("div");l.className="inv-ghost",l.style.width=h.w*o-a+"px",l.style.height=h.h*o-a+"px",l.style.background=Gt[e.itemId].color,l.style.backgroundImage=`url(${xi(e.itemId,e.rot?1:0)})`,document.body.appendChild(l);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:t.clientX-(c.left+e.x*o),gy:t.clientY-(c.top+e.y*o)},f=v=>{l.style.left=v.clientX-u.gx+"px",l.style.top=v.clientY-u.gy+"px"},m=v=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),l.remove();const M=xn(e);let _=null,g=0,T=0;for(const[R,b]of this.gridsEls()){const L=R.getBoundingClientRect();if(g=Math.round((v.clientX-L.left-u.gx)/o),T=Math.round((v.clientY-L.top-u.gy)/o),g>=0&&T>=0&&g<=b.w-M.w&&T<=b.h-M.h){_=b;break}}_&&(_.slots.push(e),_.move(e,g,T)||_===n&&_.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(_,_.slots.indexOf(e))):_.slots.splice(_.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",m),f(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const o=e.slots.indexOf(t);if(e.slots.splice(o,1),!fe.placeSlotFree(n,t)){e.slots.splice(o,0,t),ht(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const i=e.slots.indexOf(t);this.setSel(e,i),e.slots.splice(i,1);const r=this.temp;this.temp=t,this.tempOrigin=e,r&&(e.slots.push(r),e.move(r,t.x,t.y)||this.giveOrDrop(r.itemId,r.count)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(fe.CELL+fe.GAP)*this.uiZoom(),i=fe.GAP*this.uiZoom(),r=xn(e),o=document.createElement("div");o.className="inv-ghost",o.style.width=r.w*n-i+"px",o.style.height=r.h*n-i+"px",o.style.background=Gt[e.itemId].color,o.style.backgroundImage=`url(${xi(e.itemId,e.rot?1:0)})`,document.body.appendChild(o);const a=l=>{o.style.left=l.clientX-r.w*n/2+"px",o.style.top=l.clientY-r.h*n/2+"px"},h=l=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",h),o.remove();const c=(r.w*n-i)/2,u=(r.h*n-i)/2;let f=null,m=0,v=0;for(const[M,_]of this.gridsEls()){const g=M.getBoundingClientRect();if(m=Math.round((l.clientX-g.left-c)/n),v=Math.round((l.clientY-g.top-u)/n),m>=0&&v>=0&&m<=_.w-r.w&&v<=_.h-r.h){f=_;break}}f&&(f.slots.push(e),f.move(e,m,v)?(this.temp=null,this.audio.place(),this.setSel(f,f.slots.indexOf(e))):(f.slots.splice(f.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",a),window.addEventListener("mouseup",h),a(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};fe.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(ht("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){ht("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t==="bench")for(const i of su){const r=document.createElement("div");r.className="craft-row";const o=`${Gt[i.out].name}${i.count>1?" ×"+i.count:""}`,a=Object.entries(i.needs).map(([c,u])=>`${u}× ${Gt[c].name}`).join(", "),h=ou(this.inv,i);r.innerHTML=`<span class="what"><img class="craft-art" src="${xi(i.out)}" alt="">${o} <span class="needs">(${a})</span></span>`;const l=document.createElement("button");l.textContent="Craft",l.disabled=!h,l.onclick=()=>{const c=O_(this.inv,i);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(i.out,c),this.tut?.notify("craft"),Gt[i.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},r.appendChild(l),e.appendChild(r)}else{const i=this.openStation,r=`${i[0]},${i[1]},${i[2]}`,o=this.campCharges.get(r)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){ht("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(r,o+3),this.renderCraft("smelt")};for(const a of ru){const h=document.createElement("div");h.className="craft-row",h.innerHTML=`<span class="what"><img class="craft-art" src="${xi(a.out)}" alt="">${Gt[a.in].name} → ${Gt[a.out].name} <span class="needs">(1 fuel charge)</span></span>`;const l=document.createElement("button");l.textContent="Smelt",l.disabled=!this.inv.has(a.in,1)||o<1,l.onclick=()=>{this.inv.removeItem(a.in,1),this.campCharges.set(r,o-1);const c=this.inv.addItem(a.out,1);c>0&&this.giveOrDrop(a.out,c),this.audio.place(),this.renderCraft("smelt")},h.appendChild(l),e.appendChild(h)}}}renderCache(){const t=this.caches.find(i=>i.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const i of t.items){const r=document.createElement("div");r.className="cache-item",r.textContent=`${i.count}× ${Gt[i.itemId].name}`,e.appendChild(r)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let i=!0;for(;i;){i=!1;for(const r of t.items){const o=this.inv.addItem(r.itemId,r.count);o<r.count&&(i=!0,r.count=o),o===0&&t.items.splice(t.items.indexOf(r),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const ev=["drone","wanderer","wanderer","caravan","caravan","nightwind"],nv=["drone","nightwind","nightwind","caravan","wanderer"],fh={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},ph=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],iv=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],mh=[0,2,4,2,3,5,4,1],sv=[0,0,3,2,4,3,2,0],gh={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},rv=["pluck","saw","breath","bow"];class ov{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=gh[this.genre];breathBuf=null;root=98;deg=ph[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let i=0,r=0;for(let c=0;c<n.length;c++){const u=Math.random()*2-1;i=.99*i+.01*u,r=.96*r+.04*u,n[c]=(i+r)*2}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.noiseBuf=e;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const h=this.ctx.createOscillator();h.frequency.value=.13;const l=this.ctx.createGain();l.gain.value=100,h.connect(l).connect(a.frequency),h.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,o.connect(a).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=.06*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const i=t.createGain();i.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(i),i.connect(t.destination),[1,1.5,2].forEach((r,o)=>{const a=t.createOscillator();a.type=o===2?"sine":"triangle",a.frequency.value=this.root*r,a.detune.value=o*3-3;const h=t.createGain();h.gain.value=.03/(o+1);const l=t.createOscillator();l.frequency.value=.05+o*.017;const c=t.createGain();c.gain.value=.018,l.connect(c).connect(h.gain),l.start(),a.connect(h).connect(this.musicGain),a.start(),this.droneOscs.push(a)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?ev:nv;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=gh[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const i=this.isDay?ph:iv;if(this.deg=i[Math.floor(Math.random()*i.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const r=this.ctx.currentTime;this.droneOscs.forEach((o,a)=>o.frequency.setTargetAtTime(this.root*[1,1.5,2][a],r,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=fh[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,i=(o,a)=>e*o*2**(n[(a%n.length+n.length)%n.length]/12),r=fh[this.genre];switch(this.genre){case"drone":{this.note(i(1,0),t,r*.95,.18),[0,2,4].forEach(o=>this.note(i(2,o),t+.05,r*.9,.03));for(let o=0;o<8;o++)Math.random()<.15||this.note(i(4,mh[o]),t+o*r/8,.9,.12);if(Math.random()<.6){const o=1+Math.floor(Math.random()*6);this.note(i(4,o),t+Math.floor(Math.random()*5)*(r/8),1.4,.13)}break}case"wanderer":{this.note(i(1,0),t,r*.55,.16);for(let o=0;o<8;o++)Math.random()<.1||this.note(i(Math.random()<.3?3:4,mh[o]),t+o*r/8,.55,.12);if(Math.random()<.7){const o=1+Math.floor(Math.random()*5);this.note(i(5,o),t+Math.floor(Math.random()*6)*(r/8),.8,.11)}break}case"nightwind":{this.note(i(1,0),t,r*.95,.15),Math.random()<.4&&[0,2,4].forEach(a=>this.note(i(2,a),t+.1,r*.85,.025));const o=1+Math.floor(Math.random()*3);for(let a=0;a<o;a++){const h=Math.floor(Math.random()*n.length),l=1.6+Math.random()*(r-1.2);this.note(i(4,h),t+Math.random()*(r-1),l,.12)}break}case"caravan":{for(let o=0;o<8;o++)(o===0||o===3||o===4)&&this.drum(t+o*r/8),o%2===1&&this.brush(t+o*r/8);this.note(i(1,0),t,r*.45,.17),this.note(i(1,3),t+r/2,r*.4,.14);for(let o=0;o<8;o++)Math.random()<.25||this.note(i(3,sv[o]),t+o*r/8,.4,.1);if(Math.random()<.4){const o=1+Math.floor(Math.random()*4);this.note(i(4,o),t+Math.floor(Math.random()*4)*(r/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const i=this.ctx.createGain();i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(i).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=rv.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,i){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,i);break;case"saw":this.sawNote(t,e,n,i);break;case"breath":this.breathNote(t,e,n,i);break;case"bow":this.bowNote(t,e,n,i);break}}pluckNote(t,e,n,i){const r=this.ctx,o=Math.min(n,1),a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(i,e+.006),a.gain.exponentialRampToValueAtTime(.001,e+o),a.connect(this.musicGain);const h=r.createOscillator();h.type="triangle",h.frequency.value=t,h.connect(a),h.start(e),h.stop(e+o+.05);const l=r.createOscillator();l.type="square",l.frequency.value=t*2.01;const c=r.createGain();c.gain.setValueAtTime(i*.22,e),c.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,o*.35)),l.connect(c).connect(a),l.start(e),l.stop(e+o)}sawNote(t,e,n,i){const r=this.ctx,o=r.createOscillator();o.type="sawtooth",o.frequency.value=t;const a=r.createBiquadFilter();a.type="lowpass",a.Q.value=.8,a.frequency.value=Math.min(3200,Math.max(700,t*6));const h=r.createGain();this.sustainEnv(h.gain,e,n,i*.7,.09),o.connect(a).connect(h).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}breathNote(t,e,n,i){const r=this.ctx;if(!this.breathBuf){const u=r.sampleRate,f=r.createBuffer(1,u*2,u),m=f.getChannelData(0);for(let v=0;v<m.length;v++)m[v]=Math.random()*2-1;this.breathBuf=f}const o=r.createBufferSource();o.buffer=this.breathBuf,o.loop=!0;const a=r.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=10;const h=r.createGain();this.sustainEnv(h.gain,e,n,i*1.6,.22),o.connect(a).connect(h).connect(this.musicGain),o.start(e,Math.random()*1.9),o.stop(e+n+.05);const l=r.createOscillator();l.type="sine",l.frequency.value=t;const c=r.createGain();this.sustainEnv(c.gain,e,n,i*.8,.3),l.connect(c).connect(this.musicGain),l.start(e),l.stop(e+n+.05)}bowNote(t,e,n,i){const r=this.ctx,o=r.createOscillator();o.type="sawtooth",o.frequency.value=t;const a=r.createOscillator();a.frequency.value=5.2;const h=r.createGain();h.gain.value=5,a.connect(h).connect(o.detune),a.start(e),a.stop(e+n+.05);const l=r.createBiquadFilter();l.type="lowpass",l.Q.value=.7,l.frequency.value=Math.min(2600,Math.max(600,t*4));const c=r.createGain();this.sustainEnv(c.gain,e,n,i*.8,Math.min(.35,n*.3)),o.connect(l).connect(c).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}sustainEnv(t,e,n,i,r){const o=Math.min(r,n*.5),a=e+o+(n-o)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(i,e+o),t.setValueAtTime(i,a),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,i=.2,r=0){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),h=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(t,o),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),h.gain.setValueAtTime(i*this.volume,o),h.gain.exponentialRampToValueAtTime(.001,o+e),a.connect(h).connect(this.ctx.destination),a.start(o),a.stop(o+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const i=this.ctx.currentTime,r=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(r*t)),r),a=o.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=(Math.random()*2-1)*(1-u/a.length);const h=this.ctx.createBufferSource();h.buffer=o;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=e;const c=this.ctx.createGain();c.gain.value=n*this.volume,h.connect(l).connect(c).connect(this.ctx.destination),h.start(i)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const jt=s=>document.getElementById(s),_h=s=>jt(s).value,en=(s,t=!0)=>jt(s).classList.toggle("hidden",!t),av=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],Ul=()=>av.forEach(s=>en(s,!1)),po=new ov;let ae=W_(),Dt=null;document.addEventListener("click",()=>po.resume(),{once:!0});document.addEventListener("touchstart",()=>po.resume(),{once:!0});function Ao(){Ul(),en("screen-title"),jt("best-score").textContent=rr()>0?`Best run: ${rr().toFixed(1)} days`:"";const s=jt("worldlist");s.innerHTML="";const t=To();t.length||(s.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const i=du(e.id),r=document.createElement("span");r.textContent=`${e.name} — seed “${e.seedStr}” — ${i?`day ${i.days}, survived ${(i.playSec/Ne).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>Ro(e,i);const a=document.createElement("button");a.textContent="Export",a.onclick=()=>{i?fu(e,i):ht("Nothing saved for this world yet.")};const h=document.createElement("button");h.textContent="Delete",h.onclick=()=>{h.textContent==="Sure?"?(q_(e.id),Ao()):(h.textContent="Sure?",setTimeout(()=>h.textContent="Delete",2500))},n.append(r,o,a,h),s.appendChild(n)}}function Ro(s,t){Ul(),en("cheats",!1),jt("hud").classList.remove("hidden"),ae.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),jt("btn-save").classList.toggle("hidden",s.id.startsWith("guest")),jt("btn-exportworld").classList.toggle("hidden",s.id.startsWith("guest")),po.resume(),Dt=new fe(s,t,jt("game-wrap"),ae,po),globalThis.game=Dt,Dt.start(),t===null&&Dt.startTutorial()}function Nl(){Dt&&(Dt.saveNow(),Dt.stop()),Dt=null,delete globalThis.game,jt("hud").classList.add("hidden"),Ao()}function kl(s){Ul(),en(s)}function lv(){Dt&&(Dt.pauseSubmenu=null),en("screen-settings",!1),en("screen-instructions",!1),en("screen-catalog",!1),Dt?(en("ui-inventory",!1),en("ui-craft",!1),en("ui-cache",!1),en("screen-pause",!1),Dt.paused=!1,Dt.relock()):Ao()}function Fl(){Dt&&(Dt.pauseSubmenu=Dt.paused?"settings":null),kl("screen-settings");const s=jt("settings-body");s.innerHTML="";const t=(e,n,i,r)=>{const o=document.createElement("div");o.className="setting";const a=document.createElement("span");a.textContent=e;const h=document.createElement("div");h.className="seg";const l=[];for(const[c,u]of n){const f=document.createElement("button");f.type="button",f.textContent=c,String(u)===String(i)&&f.classList.add("on"),f.onclick=()=>{for(const m of l)m.classList.remove("on");f.classList.add("on"),r(u)},l.push(f),h.appendChild(f)}o.append(a,h),s.appendChild(o)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],ae.sens,e=>{ae.sens=e,Ln()}),t("Invert Y",[["Off",!1],["On",!0]],ae.invertY,e=>{ae.invertY=e,Ln()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],ae.volume,e=>{ae.volume=e,Ln()}),t("Music",[["Off",!1],["On",!0]],ae.music,e=>{ae.music=e,Ln()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],ae.fov,e=>{ae.fov=e,Ln()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],ae.renderDist,e=>{ae.renderDist=e,Ln()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],ae.quality,e=>{ae.quality=e,Ln()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],ae.lighting,e=>{ae.lighting=e,Ln()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],ae.units,e=>{ae.units=e,Ln()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],ae.uiScale,e=>{ae.uiScale=e,Ln()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],ae.fullscreen,e=>{ae.fullscreen=e,Ln(),e?document.documentElement.requestFullscreen().catch(()=>{ae.fullscreen=!1,Ln(),Fl()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),s.appendChild(e)}}function mu(s){document.documentElement.style.setProperty("--ui-scale",String(s))}function Ln(){X_(ae),mu(ae.uiScale),Dt&&Dt.applySettings(ae)}let hl="items";function Ol(){Dt&&(Dt.pauseSubmenu=Dt.paused?"catalog":null),kl("screen-catalog");for(const t of Array.from(jt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===hl);const s=jt("catalog-body");if(s.innerHTML="",hl==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,i,r,o)=>{const a=document.createElement("div");a.className="cat-card";const h=document.createElement("img");h.src=n,h.alt="";const l=document.createElement("div");l.innerHTML=`<b>${i}</b><div class="cat-meta">${r}</div><div class="cat-desc">${o}</div>`,a.append(h,l),t.append(a)};for(const n of Object.values(Gt).sort((i,r)=>i.name.localeCompare(r.name)))e(xi(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of oi){if(n.id===0||n.name==="Air")continue;const i=Object.values(Gt).find(o=>o.block===n.id),r=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(i?xi(i.id):Y_(n.id),n.name,r,i?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}s.append(t)}else{const t=(e,n,i,r)=>{const o=document.createElement("div");o.className="cat-recipe";const a=document.createElement("img");a.src=e,a.alt="",a.style.width="36px",a.style.height="36px",a.style.imageRendering="pixelated",o.append(a,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${i}</b> <span class="needs">(${r})</span>`})),s.append(o)};for(const e of su){const n=Object.entries(e.needs).map(([i,r])=>`${r}× ${Gt[i].name}`).join(" + ");t(xi(e.out),n,`${Gt[e.out].name}${e.count>1?" ×"+e.count:""}`,e.bench?"Crafting Bench":"hands")}for(const e of ru)t(xi(e.out),`1× ${Gt[e.in].name}`,Gt[e.out].name,"Campfire, 1 fuel charge")}}for(const s of Array.from(jt("catalog-tabs").querySelectorAll(".tab")))s.onclick=()=>{hl=s.dataset.tab,Ol()};const cv=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Metal Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 10 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],hv=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function gu(){Dt&&(Dt.pauseSubmenu=Dt.paused?"instructions":null),kl("screen-instructions");const s=jt("instr-body");s.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?hv:cv;for(const[n,i]of t){const r=document.createElement("div");r.innerHTML=`<b>${n}</b> — ${i}`,s.appendChild(r)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. The Ship Interior is always sealed: your body heat drifts back to 36.6 °C there. Outside, midday cooks you and night freezes you — shade, walls and doors change what you are exposed to. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, and Kangaroo Rats bolt — hunt one, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor and Armour go in the three Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it.",s.appendChild(e)}jt("btn-create").onclick=()=>{const s=_h("seed-input").trim()||Math.random().toString(36).slice(2,10),t=_h("world-name").trim()||s,e=hu(t,s);Ro(e,null)};jt("btn-guest").onclick=()=>{const s=Math.random().toString(36).slice(2,10);Ro({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:s,updated:Date.now()},null)};jt("btn-import").onclick=()=>jt("import-file").click();jt("import-file").onchange=async()=>{const s=jt("import-file").files?.[0];if(s)try{const t=await $_(s);ht("World imported."),Ro(t,du(t.id))}catch(t){ht(`Import failed: ${t.message}`)}};jt("btn-settings").onclick=Fl;jt("btn-pause-settings").onclick=Fl;jt("btn-instructions").onclick=gu;jt("btn-pause-instructions").onclick=gu;jt("btn-catalog").onclick=Ol;jt("btn-catalog-title").onclick=Ol;for(const s of document.querySelectorAll(".close-btn"))s.onclick=()=>{if(Dt&&Dt.pauseSubmenu){Dt.closePauseSubmenu();return}Dt&&Dt.closeUI(),(!Dt||!(Dt.ui==="inv"&&Dt.temp))&&lv()};jt("btn-resume").onclick=()=>{Dt&&(Dt.paused=!1,en("screen-pause",!1),en("cheats",!1),Dt.relock())};jt("btn-save").onclick=()=>ht("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");jt("btn-exportworld").onclick=()=>{Dt&&Dt.exportWorld()};jt("btn-quit").onclick=()=>Nl();jt("btn-cheats").onclick=()=>en("cheats",jt("cheats").classList.contains("hidden"));const _u=jt("cheat-item");for(const[s,t]of Object.entries(Gt).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=s,e.textContent=t.name,_u.appendChild(e)}jt("btn-cheat-add").onclick=()=>{if(!Dt)return;const s=_u.value;Dt.inv.addItem(s,1)?ht("No room in your pack."):ht(`Added ${Gt[s].name}.`)};for(const s of Array.from(jt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))s.onclick=()=>{if(!Dt)return;if(s.dataset.speed!==void 0){Dt.speedMul=Number(s.dataset.speed),ht(`Player speed ×${s.dataset.speed}.`);return}if(s.dataset.immortal!==void 0){Dt.survival.invincible=s.dataset.immortal==="1",ht(`Immortality ${Dt.survival.invincible?"on":"off"}.`);return}const t=Number(s.dataset.frac);Dt.setClock(t),ht(`Clock set to ${s.textContent}.`)};jt("btn-respawn").onclick=()=>{Dt&&Dt.respawn()};jt("btn-death-title").onclick=()=>Nl();jt("btn-win-continue").onclick=()=>{Dt&&(Dt.paused=!1,en("screen-win",!1),Dt.relock())};jt("btn-win-title").onclick=()=>Nl();document.addEventListener("keydown",s=>{if(s.code==="Escape"&&!jt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});mu(ae.uiScale);Ao();
