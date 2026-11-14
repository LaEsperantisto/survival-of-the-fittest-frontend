var Yc=Object.defineProperty;var Kc=(r,e,t)=>e in r?Yc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Y=(r,e,t)=>Kc(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/const io="180",$c=0,Lo=1,Zc=2,ql=1,Jc=2,Ii=3,ji=0,Bt=1,Ft=2,Wi=0,Or=1,Io=2,Do=3,Uo=4,Qc=5,or=100,eh=101,th=102,ih=103,rh=104,nh=200,sh=201,ah=202,oh=203,ca=204,ha=205,lh=206,ch=207,hh=208,uh=209,dh=210,ph=211,fh=212,mh=213,gh=214,ua=0,da=1,pa=2,zr=3,fa=4,ma=5,ga=6,_a=7,ro=0,_h=1,vh=2,Xi=0,xh=1,yh=2,Mh=3,Eh=4,Sh=5,bh=6,wh=7,jl=300,Hr=301,Gr=302,va=303,xa=304,Es=306,ya=1e3,cr=1001,Ma=1002,ri=1003,Th=1004,Pn=1005,_i=1006,Ps=1007,hr=1008,Ei=1009,Yl=1010,Kl=1011,fn=1012,no=1013,ur=1014,Di=1015,bn=1016,so=1017,ao=1018,mn=1020,$l=35902,Zl=35899,Jl=1021,Ql=1022,hi=1023,gn=1026,_n=1027,ec=1028,oo=1029,tc=1030,lo=1031,co=1033,as=33776,os=33777,ls=33778,cs=33779,Ea=35840,Sa=35841,ba=35842,wa=35843,Ta=36196,Aa=37492,Ra=37496,Ca=37808,Pa=37809,La=37810,Ia=37811,Da=37812,Ua=37813,Na=37814,Oa=37815,Fa=37816,Ba=37817,ka=37818,za=37819,Ha=37820,Ga=37821,Va=36492,Wa=36494,Xa=36495,qa=36283,ja=36284,Ya=36285,Ka=36286,Ah=3200,Rh=3201,ic=0,Ch=1,Gi="",Vt="srgb",Vr="srgb-linear",ms="linear",Qe="srgb",xr=7680,No=519,Ph=512,Lh=513,Ih=514,rc=515,Dh=516,Uh=517,Nh=518,Oh=519,Oo=35044,Fo="300 es",vi=2e3,gs=2001;class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bo=1234567;const Fr=Math.PI/180,vn=180/Math.PI;function $r(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function ho(r,e){return(r%e+e)%e}function Fh(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Bh(r,e,t){return r!==e?(t-r)/(e-r):0}function un(r,e,t){return(1-t)*r+t*e}function kh(r,e,t,i){return un(r,e,1-Math.exp(-t*i))}function zh(r,e=1){return e-Math.abs(ho(r,e*2)-e)}function Hh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Gh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Vh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Wh(r,e){return r+Math.random()*(e-r)}function Xh(r){return r*(.5-Math.random())}function qh(r){r!==void 0&&(Bo=r);let e=Bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jh(r){return r*Fr}function Yh(r){return r*vn}function Kh(r){return(r&r-1)===0&&r!==0}function $h(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Zh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jh(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),_=a((i-e)/2);switch(n){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Dr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const qi={DEG2RAD:Fr,RAD2DEG:vn,generateUUID:$r,clamp:ze,euclideanModulo:ho,mapLinear:Fh,inverseLerp:Bh,lerp:un,damp:kh,pingpong:zh,smoothstep:Hh,smootherstep:Gh,randInt:Vh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:jh,radToDeg:Yh,isPowerOfTwo:Kh,ceilPowerOfTwo:$h,floorPowerOfTwo:Zh,setQuaternionFromProperEuler:Jh,normalize:Pt,denormalize:Dr};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-o;const p=l*d+c*f+u*_+h*g,R=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const v=Math.sqrt(T),E=Math.atan2(v,p*R);m=Math.sin(m*E)/v,o=Math.sin(o*E)/v}const b=o*R;if(l=l*m+d*b,c=c*m+f*b,u=u*m+_*b,h=h*m+g*b,m===1-o){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(s/2),d=l(i/2),f=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-s*l,this._y=n*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-s*n),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=n+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ls.copy(this).projectOnVector(e),this.sub(Ls)}reflect(e){return this.sub(Ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ls=new D,ko=new wn;class Ue{constructor(e,t,i,n,s,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],R=n[1],T=n[4],b=n[7],v=n[2],E=n[5],A=n[8];return s[0]=a*g+o*R+l*v,s[3]=a*m+o*T+l*E,s[6]=a*p+o*b+l*A,s[1]=c*g+u*R+h*v,s[4]=c*m+u*T+h*E,s[7]=c*p+u*b+h*A,s[2]=d*g+f*R+_*v,s[5]=d*m+f*T+_*E,s[8]=d*p+f*b+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=t*h+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(n*c-u*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(u*t-n*l)*g,e[5]=(n*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Ue;function nc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qh(){const r=_s("canvas");return r.style.display="block",r}const zo={};function xn(r){r in zo||(zo[r]=!0,console.warn(r))}function eu(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ho=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tu(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(n.r=Ui(n.r),n.g=Ui(n.g),n.b=Ui(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(n.r=Br(n.r),n.g=Br(n.g),n.b=Br(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gi?ms:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return xn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return xn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Vr]:{primaries:e,whitePoint:i,transfer:ms,toXYZ:Ho,fromXYZ:Go,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Ho,fromXYZ:Go,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),r}const $e=tu();function Ui(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yr;class iu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=_s("canvas")),yr.width=e.width,yr.height=e.height;const n=yr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ru=0;class uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Ds(n[a].image)):s.push(Ds(n[a]))}else s=Ds(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ds(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?iu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nu=0;const Us=new D;class Ut extends Kr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=cr,n=cr,s=_i,a=hr,o=hi,l=Ei,c=Ut.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=$r(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Us).x}get height(){return this.source.getSize(Us).y}get depth(){return this.source.getSize(Us).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=jl;Ut.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,n=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const a=e.elements,o=a[0],l=a[4],c=a[8],u=a[1],h=a[5],d=a[9],f=a[2],_=a[6],g=a[10];if(Math.abs(l-u)<.01&&Math.abs(c-f)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(o+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,R=(h+1)/2,T=(g+1)/2,b=(l+u)/4,v=(c+f)/4,E=(d+_)/4;return p>R&&p>T?p<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(p),n=b/i,s=v/i):R>T?R<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(R),i=b/n,s=E/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=v/s,n=E/s),this.set(i,n,s,t),this}let m=Math.sqrt((_-d)*(_-d)+(c-f)*(c-f)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(_-d)/m,this.y=(c-f)/m,this.z=(u-l)/m,this.w=Math.acos((o+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class su extends Kr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const n={width:e,height:t,depth:i.depth},s=new Ut(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new uo(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends su{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sc extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class au extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(s,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ln.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ln.copy(i.boundingBox)),Ln.applyMatrix4(e.matrixWorld),this.union(Ln)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(en),In.subVectors(this.max,en),Mr.subVectors(e.a,en),Er.subVectors(e.b,en),Sr.subVectors(e.c,en),Oi.subVectors(Er,Mr),Fi.subVectors(Sr,Er),Qi.subVectors(Mr,Sr);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-Qi.z,Qi.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,Qi.z,0,-Qi.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-Qi.y,Qi.x,0];return!Ns(t,Mr,Er,Sr,In)||(t=[1,0,0,0,1,0,0,0,1],!Ns(t,Mr,Er,Sr,In))?!1:(Dn.crossVectors(Oi,Fi),t=[Dn.x,Dn.y,Dn.z],Ns(t,Mr,Er,Sr,In))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new D,new D,new D,new D,new D,new D,new D,new D],ai=new D,Ln=new Tn,Mr=new D,Er=new D,Sr=new D,Oi=new D,Fi=new D,Qi=new D,en=new D,In=new D,Dn=new D,er=new D;function Ns(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){er.fromArray(r,s);const o=n.x*Math.abs(er.x)+n.y*Math.abs(er.y)+n.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=i.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ou=new Tn,tn=new D,Os=new D;class An{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ou.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tn.subVectors(e,this.center);const t=tn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(tn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tn.copy(e.center).add(Os)),this.expandByPoint(tn.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ai=new D,Fs=new D,Un=new D,Bi=new D,Bs=new D,Nn=new D,ks=new D;class po{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Fs.copy(e).add(t).multiplyScalar(.5),Un.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Un),o=Bi.dot(this.direction),l=-Bi.dot(Un),c=Bi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Fs).addScaledVector(Un,d),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),n=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,n,s){Bs.subVectors(t,e),Nn.subVectors(i,e),ks.crossVectors(Bs,Nn);let a=this.direction.dot(ks),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const l=o*this.direction.dot(Nn.crossVectors(Bi,Nn));if(l<0)return null;const c=o*this.direction.dot(Bs.cross(Bi));if(c<0||l+c>a)return null;const u=-o*Bi.dot(ks);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,n,s,a,o,l,c,u,h,d,f,_,g,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,i,n,s,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lu,e,cu)}lookAt(e,t,i){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),ki.crossVectors(i,zt),ki.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),ki.crossVectors(i,zt)),ki.normalize(),On.crossVectors(zt,ki),n[0]=ki.x,n[4]=On.x,n[8]=zt.x,n[1]=ki.y,n[5]=On.y,n[9]=zt.y,n[2]=ki.z,n[6]=On.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],R=i[3],T=i[7],b=i[11],v=i[15],E=n[0],A=n[4],L=n[8],S=n[12],M=n[1],P=n[5],F=n[9],V=n[13],W=n[2],G=n[6],H=n[10],Q=n[14],z=n[3],te=n[7],ce=n[11],be=n[15];return s[0]=a*E+o*M+l*W+c*z,s[4]=a*A+o*P+l*G+c*te,s[8]=a*L+o*F+l*H+c*ce,s[12]=a*S+o*V+l*Q+c*be,s[1]=u*E+h*M+d*W+f*z,s[5]=u*A+h*P+d*G+f*te,s[9]=u*L+h*F+d*H+f*ce,s[13]=u*S+h*V+d*Q+f*be,s[2]=_*E+g*M+m*W+p*z,s[6]=_*A+g*P+m*G+p*te,s[10]=_*L+g*F+m*H+p*ce,s[14]=_*S+g*V+m*Q+p*be,s[3]=R*E+T*M+b*W+v*z,s[7]=R*A+T*P+b*G+v*te,s[11]=R*L+T*F+b*H+v*ce,s[15]=R*S+T*V+b*Q+v*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-n*c*h-s*o*d+i*c*d+n*o*f-i*l*f)+g*(+t*l*f-t*c*d+s*a*d-n*a*f+n*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+i*a*f+s*o*u-i*c*u)+p*(-n*o*u-t*l*h+t*o*d+n*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],R=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,T=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,b=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,v=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,E=t*R+i*T+n*b+s*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=R*A,e[1]=(g*d*s-h*m*s-g*n*f+i*m*f+h*n*p-i*d*p)*A,e[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*p+i*l*p)*A,e[3]=(h*l*s-o*d*s-h*n*c+i*d*c+o*n*f-i*l*f)*A,e[4]=T*A,e[5]=(u*m*s-_*d*s+_*n*f-t*m*f-u*n*p+t*d*p)*A,e[6]=(_*l*s-a*m*s-_*n*c+t*m*c+a*n*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*n*c-t*d*c-a*n*f+t*l*f)*A,e[8]=b*A,e[9]=(_*h*s-u*g*s-_*i*f+t*g*f+u*i*p-t*h*p)*A,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*f-t*o*f)*A,e[12]=v*A,e[13]=(u*g*n-_*h*n+_*i*d-t*g*d-u*i*m+t*h*m)*A,e[14]=(_*o*n-a*g*n-_*i*l+t*g*l+a*i*m-t*o*m)*A,e[15]=(a*h*n-u*o*n+u*i*l-t*h*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,R=l*c,T=l*u,b=l*h,v=i.x,E=i.y,A=i.z;return n[0]=(1-(g+p))*v,n[1]=(f+b)*v,n[2]=(_-T)*v,n[3]=0,n[4]=(f-b)*E,n[5]=(1-(d+p))*E,n[6]=(m+R)*E,n[7]=0,n[8]=(_+T)*A,n[9]=(m-R)*A,n[10]=(1-(d+g))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=br.set(n[0],n[1],n[2]).length();const a=br.set(n[4],n[5],n[6]).length(),o=br.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],oi.copy(this);const l=1/s,c=1/a,u=1/o;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=c,oi.elements[5]*=c,oi.elements[6]*=c,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=vi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===vi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===gs)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=vi,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===vi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===gs)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new D,oi=new ct,lu=new D(0,0,0),cu=new D(1,1,1),ki=new D,On=new D,zt=new D,Vo=new ct,Wo=new wn;class Si{constructor(e=0,t=0,i=0,n=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hu=0;const Xo=new D,wr=new wn,Ri=new ct,Fn=new D,rn=new D,uu=new D,du=new wn,qo=new D(1,0,0),jo=new D(0,1,0),Yo=new D(0,0,1),Ko={type:"added"},pu={type:"removed"},Tr={type:"childadded",child:null},zs={type:"childremoved",child:null};class vt extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new Si,i=new wn,n=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ue}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(Yo,e)}translateOnAxis(e,t){return Xo.copy(e).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(Yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fn.copy(e):Fn.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),rn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(rn,Fn,this.up):Ri.lookAt(Fn,rn,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),wr.setFromRotationMatrix(Ri),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ko),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pu),zs.child=e,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ko),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rn,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rn,du,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new D,Ci=new D,Hs=new D,Pi=new D,Ar=new D,Rr=new D,$o=new D,Gs=new D,Vs=new D,Ws=new D,Xs=new et,qs=new et,js=new et;class ti{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),li.subVectors(e,t),n.cross(li);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){li.subVectors(n,t),Ci.subVectors(i,t),Hs.subVectors(e,t);const a=li.dot(li),o=li.dot(Ci),l=li.dot(Hs),c=Ci.dot(Ci),u=Ci.dot(Hs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Xs.setScalar(0),qs.setScalar(0),js.setScalar(0),Xs.fromBufferAttribute(e,t),qs.fromBufferAttribute(e,i),js.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Xs,s.x),a.addScaledVector(qs,s.y),a.addScaledVector(js,s.z),a}static isFrontFacing(e,t,i,n){return li.subVectors(i,t),Ci.subVectors(e,t),li.cross(Ci).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),li.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Ar.subVectors(n,i),Rr.subVectors(s,i),Gs.subVectors(e,i);const l=Ar.dot(Gs),c=Rr.dot(Gs);if(l<=0&&c<=0)return t.copy(i);Vs.subVectors(e,n);const u=Ar.dot(Vs),h=Rr.dot(Vs);if(u>=0&&h<=u)return t.copy(n);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ar,a);Ws.subVectors(e,s);const f=Ar.dot(Ws),_=Rr.dot(Ws);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Rr,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return $o.subVectors(s,n),o=(h-u)/(h-u+(f-_)),t.copy(n).addScaledVector($o,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Ar,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function Ys(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=$e.workingColorSpace){if(e=ho(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ys(a,s,e+1/3),this.g=Ys(a,s,e),this.b=Ys(a,s,e-1/3)}return $e.colorSpaceToWorking(this,n),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=oc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return $e.workingToColorSpace(Rt.copy(this),e),Math.round(ze(Rt.r*255,0,255))*65536+Math.round(ze(Rt.g*255,0,255))*256+Math.round(ze(Rt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,n=Rt.g,s=Rt.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Vt){$e.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,n=Rt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Bn);const i=un(zi.h,Bn.h,t),n=un(zi.s,Bn.s,t),s=un(zi.l,Bn.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Fe;Fe.NAMES=oc;let fu=0;class _r extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Or,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ca&&(i.blendSrc=this.blendSrc),this.blendDst!==ha&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new D,kn=new je;let mu=0;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oo,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix3(e),this.setXY(t,kn.x,kn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class lc extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cc extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gu=0;const Zt=new ct,Ks=new vt,Cr=new D,Ht=new Tn,nn=new Tn,Et=new D;class Yt extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?cc:lc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,nn.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,nn.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(nn.min),Ht.expandByPoint(nn.max))}Ht.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),Et.add(Cr)),n=Math.max(n,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new D,l[L]=new D;const c=new D,u=new D,h=new D,d=new je,f=new je,_=new je,g=new D,m=new D;function p(L,S,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[L].add(g),o[S].add(g),o[M].add(g),l[L].add(m),l[S].add(m),l[M].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,S=R.length;L<S;++L){const M=R[L],P=M.start,F=M.count;for(let V=P,W=P+F;V<W;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new D,b=new D,v=new D,E=new D;function A(L){v.fromBufferAttribute(n,L),E.copy(v);const S=o[L];T.copy(S),T.sub(v.multiplyScalar(v.dot(S))).normalize(),b.crossVectors(E,S);const M=b.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,M)}for(let L=0,S=R.length;L<S;++L){const M=R[L],P=M.start,F=M.count;for(let V=P,W=P+F;V<W;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new xi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new ct,tr=new po,zn=new An,Jo=new D,Hn=new D,Gn=new D,Vn=new D,$s=new D,Wn=new D,Qo=new D,Xn=new D;class jt extends vt{constructor(e=new Yt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){Wn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&($s.fromBufferAttribute(h,e),a?Wn.addScaledVector($s,u):Wn.addScaledVector($s.sub(t),u))}t.add(Wn)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zn.copy(i.boundingSphere),zn.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(zn.containsPoint(tr.origin)===!1&&(tr.intersectSphere(zn,Jo)===null||tr.origin.distanceToSquared(Jo)>(e.far-e.near)**2))&&(Zo.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Zo),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],R=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=R,v=T;b<v;b+=3){const E=o.getX(b),A=o.getX(b+1),L=o.getX(b+2);n=qn(this,p,e,i,c,u,h,E,A,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const R=o.getX(m),T=o.getX(m+1),b=o.getX(m+2);n=qn(this,a,e,i,c,u,h,R,T,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],R=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=R,v=T;b<v;b+=3){const E=b,A=b+1,L=b+2;n=qn(this,p,e,i,c,u,h,E,A,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const R=m,T=m+1,b=m+2;n=qn(this,a,e,i,c,u,h,R,T,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function _u(r,e,t,i,n,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===ji,o),l===null)return null;Xn.copy(o),Xn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Xn);return c<t.near||c>t.far?null:{distance:c,point:Xn.clone(),object:r}}function qn(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Hn),r.getVertexPosition(l,Gn),r.getVertexPosition(c,Vn);const u=_u(r,e,t,i,Hn,Gn,Vn,Qo);if(u){const h=new D;ti.getBarycoord(Qo,Hn,Gn,Vn,h),n&&(u.uv=ti.getInterpolatedAttribute(n,o,l,c,h,new je)),s&&(u.uv1=ti.getInterpolatedAttribute(s,o,l,c,h,new je)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};ti.getNormal(Hn,Gn,Vn,d.normal),u.face=d,u.barycoord=h}return u}class pr extends Yt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function _(g,m,p,R,T,b,v,E,A,L,S){const M=b/A,P=v/L,F=b/2,V=v/2,W=E/2,G=A+1,H=L+1;let Q=0,z=0;const te=new D;for(let ce=0;ce<H;ce++){const be=ce*P-V;for(let we=0;we<G;we++){const Ye=we*M-F;te[g]=Ye*R,te[m]=be*T,te[p]=W,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=E>0?1:-1,u.push(te.x,te.y,te.z),h.push(we/A),h.push(1-ce/L),Q+=1}}for(let ce=0;ce<L;ce++)for(let be=0;be<A;be++){const we=d+be+G*ce,Ye=d+be+G*(ce+1),He=d+(be+1)+G*(ce+1),Ke=d+(be+1)+G*ce;l.push(we,Ye,Ke),l.push(Ye,He,Ke),z+=6}o.addGroup(f,z,S),f+=z,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Lt(r){const e={};for(let t=0;t<r.length;t++){const i=Wr(r[t]);for(const n in i)e[n]=i[n]}return e}function vu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const xu={clone:Wr,merge:Lt};var yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=Mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new D,el=new je,tl=new je;class Wt extends uc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vn*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,el,tl),t.subVectors(tl,el)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pr=-90,Lr=1;class Eu extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Wt(Pr,Lr,e,t);n.layers=this.layers,this.add(n);const s=new Wt(Pr,Lr,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Pr,Lr,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Pr,Lr,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Pr,Lr,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Pr,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class dc extends Ut{constructor(e=[],t=Hr,i,n,s,a,o,l,c,u){super(e,t,i,n,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Su extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new dc(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new pr(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Wi});s.uniforms.tEquirect.value=t;const a=new jt(n,s),o=t.minFilter;return t.minFilter===hr&&(t.minFilter=_i),new Eu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}class Ur extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bu={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wu extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Js=new D,Tu=new D,Au=new Ue;class sr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Js.subVectors(i,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Js),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Au.getNormalMatrix(e),n=this.coplanarPoint(Js).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new An,Ru=new je(.5,.5),jn=new D;class mo{constructor(e=new sr,t=new sr,i=new sr,n=new sr,s=new sr,a=new sr){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){const n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],R=s[12],T=s[13],b=s[14],v=s[15];if(n[0].setComponents(c-a,f-u,p-_,v-R).normalize(),n[1].setComponents(c+a,f+u,p+_,v+R).normalize(),n[2].setComponents(c+o,f+h,p+g,v+T).normalize(),n[3].setComponents(c-o,f-h,p-g,v-T).normalize(),i)n[4].setComponents(l,d,m,b).normalize(),n[5].setComponents(c-l,f-d,p-m,v-b).normalize();else if(n[4].setComponents(c-l,f-d,p-m,v-b).normalize(),t===vi)n[5].setComponents(c+l,f+d,p+m,v+b).normalize();else if(t===gs)n[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);const t=Ru.distanceTo(e.center);return ir.radius=.7071067811865476+t,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(jn.x=n.normal.x>0?e.max.x:e.min.x,jn.y=n.normal.y>0?e.max.y:e.min.y,jn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(jn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pc extends _r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vs=new D,xs=new D,il=new ct,sn=new po,Yn=new An,Qs=new D,rl=new D;class Cu extends vt{constructor(e=new Yt,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)vs.fromBufferAttribute(t,n-1),xs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=vs.distanceTo(xs);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yn.copy(i.boundingSphere),Yn.applyMatrix4(n),Yn.radius+=s,e.ray.intersectsSphere(Yn)===!1)return;il.copy(n).invert(),sn.copy(e.ray).applyMatrix4(il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f-1;_<g;_+=c){const m=u.getX(_),p=u.getX(_+1),R=Kn(this,e,sn,l,m,p,_);R&&t.push(R)}if(this.isLineLoop){const _=u.getX(f-1),g=u.getX(d),m=Kn(this,e,sn,l,_,g,f-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,g=f-1;_<g;_+=c){const m=Kn(this,e,sn,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Kn(this,e,sn,l,f-1,d,f-1);_&&t.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Kn(r,e,t,i,n,s,a){const o=r.geometry.attributes.position;if(vs.fromBufferAttribute(o,n),xs.fromBufferAttribute(o,s),t.distanceSqToSegment(vs,xs,Qs,rl)>i)return;Qs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Qs);if(!(l<e.near||l>e.far))return{distance:l,point:rl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const nl=new D,sl=new D;class Pu extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)nl.fromBufferAttribute(t,n),sl.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+nl.distanceTo(sl);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fc extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const al=new ct,$a=new po,$n=new An,Zn=new D;class Lu extends vt{constructor(e=new Yt,t=new fc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$n.copy(i.boundingSphere),$n.applyMatrix4(n),$n.radius+=s,e.ray.intersectsSphere($n)===!1)return;al.copy(n).invert(),$a.copy(e.ray).applyMatrix4(al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let f=h,_=d;f<_;f++){const g=c.getX(f);Zn.fromBufferAttribute(u,g),ol(Zn,g,l,n,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let f=h,_=d;f<_;f++)Zn.fromBufferAttribute(u,f),ol(Zn,f,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function ol(r,e,t,i,n,s,a){const o=$a.distanceSqToPoint(r);if(o<t){const l=new D;$a.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Iu extends Ut{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mc extends Ut{constructor(e,t,i=ur,n,s,a,o=ri,l=ri,c,u=gn,h=1){if(u!==gn&&u!==_n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,n,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gc extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ys extends Yt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new D,u=new je;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Jn=new D,Qn=new D,ea=new D,es=new ti;class Du extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(Fr*t),s=e.getIndex(),a=e.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],c=["a","b","c"],u=new Array(3),h={},d=[];for(let f=0;f<o;f+=3){s?(l[0]=s.getX(f),l[1]=s.getX(f+1),l[2]=s.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);const{a:_,b:g,c:m}=es;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),es.getNormal(ea),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let p=0;p<3;p++){const R=(p+1)%3,T=u[p],b=u[R],v=es[c[p]],E=es[c[R]],A=`${T}_${b}`,L=`${b}_${T}`;L in h&&h[L]?(ea.dot(h[L].normal)<=n&&(d.push(v.x,v.y,v.z),d.push(E.x,E.y,E.z)),h[L]=null):A in h||(h[A]={index0:l[p],index1:l[R],normal:ea.clone()})}}for(const f in h)if(h[f]){const{index0:_,index1:g}=h[f];Jn.fromBufferAttribute(a,_),Qn.fromBufferAttribute(a,g),d.push(Jn.x,Jn.y,Jn.z),d.push(Qn.x,Qn.y,Qn.z)}this.setAttribute("position",new Tt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ss extends Yt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const R=p*d-a;for(let T=0;T<c;T++){const b=T*h-s;_.push(b,-R,0),g.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<o;R++){const T=R+c*p,b=R+c*(p+1),v=R+1+c*(p+1),E=R+1+c*p;f.push(T,b,E),f.push(b,v,E)}this.setIndex(f),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class hs extends _r{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uu extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nu extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class go extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ou extends go{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ta=new ct,ll=new D,cl=new D;class _c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cl),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hl=new ct,an=new D,ia=new D;class Fu extends _c{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),an.setFromMatrixPosition(e.matrixWorld),i.position.copy(an),ia.copy(i.position),ia.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ia),i.updateMatrixWorld(),n.makeTranslation(-an.x,-an.y,-an.z),hl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,i.coordinateSystem,i.reversedDepth)}}class ul extends go{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vc extends uc{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bu extends _c{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ku extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Bu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zu extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function dl(r,e,t,i){const n=Hu(i);switch(t){case Jl:return r*e;case ec:return r*e/n.components*n.byteLength;case oo:return r*e/n.components*n.byteLength;case tc:return r*e*2/n.components*n.byteLength;case lo:return r*e*2/n.components*n.byteLength;case Ql:return r*e*3/n.components*n.byteLength;case hi:return r*e*4/n.components*n.byteLength;case co:return r*e*4/n.components*n.byteLength;case as:case os:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ls:case cs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sa:case wa:return Math.max(r,16)*Math.max(e,8)/4;case Ea:case ba:return Math.max(r,8)*Math.max(e,8)/2;case Ta:case Aa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Na:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qa:case ja:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ya:case Ka:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hu(r){switch(r){case Ei:case Yl:return{byteLength:1,components:1};case fn:case Kl:case bn:return{byteLength:2,components:1};case so:case ao:return{byteLength:2,components:4};case ur:case no:case Di:return{byteLength:4,components:1};case $l:case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function xc(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gu(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
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
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
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
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
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
#endif`,Ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,rd=`#ifdef USE_BUMPMAP
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
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dd=`#define PI 3.141592653589793
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fd=`vec3 transformedNormal = objectNormal;
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
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
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
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
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
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
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
#endif`,Hd=`struct PhysicalMaterial {
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
}`,Gd=`
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
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jd=`#if defined( USE_POINTS_UV )
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
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
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
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ap=`float getShadowMask() {
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,$p=`#define DISTANCE
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`uniform float scale;
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
}`,tf=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#define LAMBERT
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
}`,af=`#define LAMBERT
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
}`,of=`#define MATCAP
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
}`,lf=`#define MATCAP
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
}`,cf=`#define NORMAL
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
}`,hf=`#define NORMAL
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
}`,uf=`#define PHONG
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
}`,df=`#define PHONG
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
}`,pf=`#define STANDARD
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
}`,ff=`#define STANDARD
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
}`,mf=`#define TOON
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
}`,gf=`#define TOON
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
}`,_f=`uniform float size;
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
}`,vf=`uniform vec3 diffuse;
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
}`,xf=`#include <common>
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
}`,yf=`uniform vec3 color;
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
}`,Mf=`uniform float rotation;
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
}`,Ef=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Vu,alphahash_pars_fragment:Wu,alphamap_fragment:Xu,alphamap_pars_fragment:qu,alphatest_fragment:ju,alphatest_pars_fragment:Yu,aomap_fragment:Ku,aomap_pars_fragment:$u,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:Qu,beginnormal_vertex:ed,bsdfs:td,iridescence_fragment:id,bumpmap_pars_fragment:rd,clipping_planes_fragment:nd,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:od,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:hd,color_vertex:ud,common:dd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:fd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:yd,envmap_fragment:Md,envmap_common_pars_fragment:Ed,envmap_pars_fragment:Sd,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Nd,envmap_vertex:wd,fog_vertex:Td,fog_pars_vertex:Ad,fog_fragment:Rd,fog_pars_fragment:Cd,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Dd,lights_pars_begin:Ud,lights_toon_fragment:Od,lights_toon_pars_fragment:Fd,lights_phong_fragment:Bd,lights_phong_pars_fragment:kd,lights_physical_fragment:zd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Gd,lights_fragment_maps:Vd,lights_fragment_end:Wd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Yd,map_fragment:Kd,map_pars_fragment:$d,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:ip,morphnormal_vertex:rp,morphtarget_pars_vertex:np,morphtarget_vertex:sp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:hp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:Mp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:wp,shadowmap_vertex:Tp,shadowmask_pars_fragment:Ap,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Ip,specularmap_pars_fragment:Dp,tonemapping_fragment:Up,tonemapping_pars_fragment:Np,transmission_fragment:Op,transmission_pars_fragment:Fp,uv_pars_fragment:Bp,uv_pars_vertex:kp,uv_vertex:zp,worldpos_vertex:Hp,background_vert:Gp,background_frag:Vp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:qp,cube_frag:jp,depth_vert:Yp,depth_frag:Kp,distanceRGBA_vert:$p,distanceRGBA_frag:Zp,equirect_vert:Jp,equirect_frag:Qp,linedashed_vert:ef,linedashed_frag:tf,meshbasic_vert:rf,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:af,meshmatcap_vert:of,meshmatcap_frag:lf,meshnormal_vert:cf,meshnormal_frag:hf,meshphong_vert:uf,meshphong_frag:df,meshphysical_vert:pf,meshphysical_frag:ff,meshtoon_vert:mf,meshtoon_frag:gf,points_vert:_f,points_frag:vf,shadow_vert:xf,shadow_frag:yf,sprite_vert:Mf,sprite_frag:Ef},ae={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},gi={basic:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Lt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Lt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Lt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Lt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Lt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Lt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Lt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Lt([ae.lights,ae.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};gi.physical={uniforms:Lt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ts={r:0,b:0,g:0},rr=new Si,Sf=new ct;function bf(r,e,t,i,n,s,a){const o=new Fe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function g(T){let b=!1;const v=_(T);v===null?p(o,l):v&&v.isColor&&(p(v,1),b=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,b){const v=_(b);v&&(v.isCubeTexture||v.mapping===Es)?(u===void 0&&(u=new jt(new pr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Wr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),rr.copy(b.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(rr)),u.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new jt(new Ss(2,2),new Yi({name:"BackgroundMaterial",uniforms:Wr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,b){T.getRGB(ts,hc(r)),i.buffers.color.setClear(ts.r,ts.g,ts.b,b,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:g,addToRenderList:m,dispose:R}}function wf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function o(M,P,F,V,W){let G=!1;const H=h(V,F,P);s!==H&&(s=H,c(s.object)),G=f(M,V,F,W),G&&_(M,V,F,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(M,P,F,V),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,P,F){const V=F.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let G=W[P.id];G===void 0&&(G={},W[P.id]=G);let H=G[V];return H===void 0&&(H=d(l()),G[V]=H),H}function d(M){const P=[],F=[],V=[];for(let W=0;W<t;W++)P[W]=0,F[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,P,F,V){const W=s.attributes,G=P.attributes;let H=0;const Q=F.getAttributes();for(const z in Q)if(Q[z].location>=0){const te=W[z];let ce=G[z];if(ce===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;H++}return s.attributesNum!==H||s.index!==V}function _(M,P,F,V){const W={},G=P.attributes;let H=0;const Q=F.getAttributes();for(const z in Q)if(Q[z].location>=0){let te=G[z];te===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),W[z]=ce,H++}s.attributes=W,s.attributesNum=H,s.index=V}function g(){const M=s.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const F=s.newAttributes,V=s.enabledAttributes,W=s.attributeDivisors;F[M]=1,V[M]===0&&(r.enableVertexAttribArray(M),V[M]=1),W[M]!==P&&(r.vertexAttribDivisor(M,P),W[M]=P)}function R(){const M=s.newAttributes,P=s.enabledAttributes;for(let F=0,V=P.length;F<V;F++)P[F]!==M[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function T(M,P,F,V,W,G,H){H===!0?r.vertexAttribIPointer(M,P,F,W,G):r.vertexAttribPointer(M,P,F,V,W,G)}function b(M,P,F,V){g();const W=V.attributes,G=F.getAttributes(),H=P.defaultAttributeValues;for(const Q in G){const z=G[Q];if(z.location>=0){let te=W[Q];if(te===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const ce=te.normalized,be=te.itemSize,we=e.get(te);if(we===void 0)continue;const Ye=we.buffer,He=we.type,Ke=we.bytesPerElement,j=He===r.INT||He===r.UNSIGNED_INT||te.gpuType===no;if(te.isInterleavedBufferAttribute){const Z=te.data,me=Z.stride,Ie=te.offset;if(Z.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)p(z.location+Ee,Z.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)m(z.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Ee=0;Ee<z.locationSize;Ee++)T(z.location+Ee,be/z.locationSize,He,ce,me*Ke,(Ie+be/z.locationSize*Ee)*Ke,j)}else{if(te.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)p(z.location+Z,te.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Z=0;Z<z.locationSize;Z++)m(z.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Z=0;Z<z.locationSize;Z++)T(z.location+Z,be/z.locationSize,He,ce,be*Ke,be/z.locationSize*Z*Ke,j)}}else if(H!==void 0){const ce=H[Q];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(z.location,ce);break;case 3:r.vertexAttrib3fv(z.location,ce);break;case 4:r.vertexAttrib4fv(z.location,ce);break;default:r.vertexAttrib1fv(z.location,ce)}}}}R()}function v(){L();for(const M in i){const P=i[M];for(const F in P){const V=P[F];for(const W in V)u(V[W].object),delete V[W];delete P[F]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const F in P){const V=P[F];for(const W in V)u(V[W].object),delete V[W];delete P[F]}delete i[M.id]}function A(M){for(const P in i){const F=i[P];if(F[M.id]===void 0)continue;const V=F[M.id];for(const W in V)u(V[W].object),delete V[W];delete F[M.id]}}function L(){S(),a=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:R}}function Tf(r,e,t){let i;function n(c){i=c}function s(c,u){r.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let f=0;f<h;f++)d+=u[f];t.update(d,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Af(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==hi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!L)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=_>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:v,maxSamples:E}}function Rf(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new sr,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!n||_===null||_.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,T=R*4;let b=p.clippingState||null;l.value=b,b=u(_,d,T,f);for(let v=0;v!==T;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,b=f;T!==g;++T,b+=4)a.copy(h[T]).applyMatrix4(R,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Cf(r){let e=new WeakMap;function t(a,o){return o===va?a.mapping=Hr:o===xa&&(a.mapping=Gr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Su(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Nr=4,pl=[.125,.215,.35,.446,.526,.582],lr=20,ra=new vc,fl=new Fe;let na=null,sa=0,aa=0,oa=!1;const ar=(1+Math.sqrt(5))/2,Ir=1/ar,ml=[new D(-ar,Ir,0),new D(ar,Ir,0),new D(-Ir,0,ar),new D(Ir,0,ar),new D(0,ar,-Ir),new D(0,ar,Ir),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Pf=new D;class gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,s={}){const{size:a=256,position:o=Pf}=s;na=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(na,sa,aa),this._renderer.xr.enabled=oa,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:bn,format:hi,colorSpace:Vr,depthBuffer:!1},n=_l(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lf(s)),this._blurMaterial=If(s,e,t)}return n}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,i,n,s){const a=new Wt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,h=c.toneMapping;c.getClearColor(fl),c.toneMapping=Xi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(n),c.clearDepth(),c.setRenderTarget(null));const d=new dn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),f=new jt(new pr,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(fl),_=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[m],s.y,s.z)):p===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[m]));const R=this._cubeSize;is(n,p*R,m>2?R:0,R,R),c.setRenderTarget(n),_&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=h,c.autoClear=u,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Hr||e.mapping===Gr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ml[(n-s-1)%ml.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new jt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*lr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const p=[];let R=0;for(let A=0;A<lr;++A){const L=A/g,S=Math.exp(-L*L/2);p.push(S),A===0?R+=S:A<m&&(R+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const b=this._sizeLods[n],v=3*b*(n>T-Nr?n-T+Nr:0),E=4*(this._cubeSize-b);is(t,v,E,3*b,2*b),l.setRenderTarget(t),l.render(h,ra)}}function Lf(r){const e=[],t=[],i=[];let n=r;const s=r-Nr+1+pl.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-Nr?l=pl[a-r+Nr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,R=new Float32Array(g*_*f),T=new Float32Array(m*_*f),b=new Float32Array(p*_*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,L=E>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];R.set(S,g*_*E),T.set(d,m*_*E);const M=[E,E,E,E,E,E];b.set(M,p*_*E)}const v=new Yt;v.setAttribute("position",new xi(R,g)),v.setAttribute("uv",new xi(T,m)),v.setAttribute("faceIndex",new xi(b,p)),e.push(v),n>Nr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _l(r,e,t){const i=new dr(r,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function If(r,e,t){const i=new Float32Array(lr),n=new D(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function vl(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function xl(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function Df(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===xa,u=l===Hr||l===Gr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new gl(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&n(f)?(t===null&&(t=new gl(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Uf(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&xn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Nf(r,e,t,i){const n={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const R=f.array;g=f.version;for(let T=0,b=R.length;T<b;T+=3){const v=R[T+0],E=R[T+1],A=R[T+2];d.push(v,E,E,A,A,v)}}else if(_!==void 0){const R=_.array;g=_.version;for(let T=0,b=R.length/3-1;T<b;T+=3){const v=T+0,E=T+1,A=T+2;d.push(v,E,E,A,A,v)}}else return;const m=new(nc(d)?cc:lc)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Of(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(i,f,s,d*a,_),t.update(f,i,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let g=0;for(let m=0;m<_;m++)g+=f[m];t.update(g,i,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,_);let p=0;for(let R=0;R<_;R++)p+=f[R]*g[R];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ff(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Bf(r,e,t){const i=new WeakMap,n=new et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let f=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const A=new Float32Array(v*E*4*h),L=new sc(A,v,E,h);L.type=Di,L.needsUpdate=!0;const S=b*4;for(let M=0;M<h;M++){const P=p[M],F=R[M],V=T[M],W=v*E*4*M;for(let G=0;G<P.count;G++){const H=G*S;_===!0&&(n.fromBufferAttribute(P,G),A[W+H+0]=n.x,A[W+H+1]=n.y,A[W+H+2]=n.z,A[W+H+3]=0),g===!0&&(n.fromBufferAttribute(F,G),A[W+H+4]=n.x,A[W+H+5]=n.y,A[W+H+6]=n.z,A[W+H+7]=0),m===!0&&(n.fromBufferAttribute(V,G),A[W+H+8]=n.x,A[W+H+9]=n.y,A[W+H+10]=n.z,A[W+H+11]=V.itemSize===4?n.w:1)}}d={count:h,texture:L,size:new je(v,E)},i.set(o,d),o.addEventListener("dispose",f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function kf(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const yc=new Ut,yl=new mc(1,1),Mc=new sc,Ec=new au,Sc=new dc,Ml=[],El=[],Sl=new Float32Array(16),bl=new Float32Array(9),wl=new Float32Array(4);function Zr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Ml[n];if(s===void 0&&(s=new Float32Array(n),Ml[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function bs(r,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function zf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function Gf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function Vf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function Wf(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;wl.set(i),r.uniformMatrix2fv(this.addr,!1,wl),yt(t,i)}}function Xf(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;bl.set(i),r.uniformMatrix3fv(this.addr,!1,bl),yt(t,i)}}function qf(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Sl.set(i),r.uniformMatrix4fv(this.addr,!1,Sl),yt(t,i)}}function jf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function Kf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function $f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function Zf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function Qf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function tm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(yl.compareFunction=rc,s=yl):s=yc,t.setTexture2D(e||s,n)}function im(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ec,n)}function rm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Sc,n)}function nm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Mc,n)}function sm(r){switch(r){case 5126:return zf;case 35664:return Hf;case 35665:return Gf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return jf;case 35667:case 35671:return Yf;case 35668:case 35672:return Kf;case 35669:case 35673:return $f;case 5125:return Zf;case 36294:return Jf;case 36295:return Qf;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return nm}}function am(r,e){r.uniform1fv(this.addr,e)}function om(r,e){const t=Zr(e,this.size,2);r.uniform2fv(this.addr,t)}function lm(r,e){const t=Zr(e,this.size,3);r.uniform3fv(this.addr,t)}function cm(r,e){const t=Zr(e,this.size,4);r.uniform4fv(this.addr,t)}function hm(r,e){const t=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function um(r,e){const t=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function dm(r,e){const t=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pm(r,e){r.uniform1iv(this.addr,e)}function fm(r,e){r.uniform2iv(this.addr,e)}function mm(r,e){r.uniform3iv(this.addr,e)}function gm(r,e){r.uniform4iv(this.addr,e)}function _m(r,e){r.uniform1uiv(this.addr,e)}function vm(r,e){r.uniform2uiv(this.addr,e)}function xm(r,e){r.uniform3uiv(this.addr,e)}function ym(r,e){r.uniform4uiv(this.addr,e)}function Mm(r,e,t){const i=this.cache,n=e.length,s=bs(t,n);xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||yc,s[a])}function Em(r,e,t){const i=this.cache,n=e.length,s=bs(t,n);xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ec,s[a])}function Sm(r,e,t){const i=this.cache,n=e.length,s=bs(t,n);xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Sc,s[a])}function bm(r,e,t){const i=this.cache,n=e.length,s=bs(t,n);xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Mc,s[a])}function wm(r){switch(r){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return pm;case 35667:case 35671:return fm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return vm;case 36295:return xm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}class Tm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sm(t.type)}}class Am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wm(t.type)}}class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Tl(r,e){r.seq.push(e),r.map[e.id]=e}function Cm(r,e,t){const i=r.name,n=i.length;for(la.lastIndex=0;;){const s=la.exec(i),a=la.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Tl(t,c===void 0?new Tm(o,r,e):new Am(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Rm(o),Tl(t,u)),t=u}}}class us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);Cm(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Al(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Pm=37297;let Lm=0;function Im(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Rl=new Ue;function Dm(r){$e._getMatrix(Rl,$e.workingColorSpace,r);const e=`mat3( ${Rl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(r)){case ms:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Im(r.getShaderSource(e),a)}else return n}function Um(r,e){const t=Dm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nm(r,e){let t;switch(e){case xh:t="Linear";break;case yh:t="Reinhard";break;case Mh:t="Cineon";break;case Eh:t="ACESFilmic";break;case bh:t="AgX";break;case wh:t="Neutral";break;case Sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rs=new D;function Om(){$e.getLuminanceCoefficients(rs);const r=rs.x.toFixed(4),e=rs.y.toFixed(4),t=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ln).join(`
`)}function Bm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function km(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ln(r){return r!==""}function Pl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(r){return r.replace(zm,Gm)}const Hm=new Map;function Gm(r,e){let t=Oe[e];if(t===void 0){const i=Hm.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Za(t)}const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(r){return r.replace(Vm,Wm)}function Wm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Dl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function qm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Gr:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ym(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ro:e="ENVMAP_BLENDING_MULTIPLY";break;case _h:e="ENVMAP_BLENDING_MIX";break;case vh:e="ENVMAP_BLENDING_ADD";break}return e}function Km(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $m(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xm(t),c=qm(t),u=jm(t),h=Ym(t),d=Km(t),f=Fm(t),_=Bm(s),g=n.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ln).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ln).join(`
`),p.length>0&&(p+=`
`)):(m=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ln).join(`
`),p=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),Om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ln).join(`
`)),a=Za(a),a=Pl(a,t),a=Ll(a,t),o=Za(o),o=Pl(o,t),o=Ll(o,t),a=Il(a),o=Il(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=R+m+a,b=R+p+o,v=Al(n,n.VERTEX_SHADER,T),E=Al(n,n.FRAGMENT_SHADER,b);n.attachShader(g,v),n.attachShader(g,E),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function A(P){if(r.debug.checkShaderErrors){const F=n.getProgramInfoLog(g)||"",V=n.getShaderInfoLog(v)||"",W=n.getShaderInfoLog(E)||"",G=F.trim(),H=V.trim(),Q=W.trim();let z=!0,te=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,v,E);else{const ce=Cl(n,v,"vertex"),be=Cl(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ce+`
`+be)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||Q==="")&&(te=!1);te&&(P.diagnostics={runnable:z,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:p}})}n.deleteShader(v),n.deleteShader(E),L=new us(n,g),S=km(n,g)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(g,Pm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=E,this}let Zm=0;class Jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qm(e),t.set(e,i)),i}}class Qm{constructor(e){this.id=Zm++,this.code=e,this.usedTimes=0}}function eg(r,e,t,i,n,s,a){const o=new ac,l=new Jm,c=new Set,u=[],h=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,F,V){const W=F.fog,G=V.geometry,H=S.isMeshStandardMaterial?F.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),z=Q&&Q.mapping===Es?Q.image.height:null,te=_[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=ce!==void 0?ce.length:0;let we=0;G.morphAttributes.position!==void 0&&(we=1),G.morphAttributes.normal!==void 0&&(we=2),G.morphAttributes.color!==void 0&&(we=3);let Ye,He,Ke,j;if(te){const Ze=gi[te];Ye=Ze.vertexShader,He=Ze.fragmentShader}else Ye=S.vertexShader,He=S.fragmentShader,l.update(S),Ke=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const Z=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Ie=V.isInstancedMesh===!0,Ee=V.isBatchedMesh===!0,Te=!!S.map,nt=!!S.matcap,C=!!Q,We=!!S.aoMap,Ge=!!S.lightMap,Je=!!S.bumpMap,Me=!!S.normalMap,ot=!!S.displacementMap,ge=!!S.emissiveMap,Ne=!!S.metalnessMap,Mt=!!S.roughnessMap,ft=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,X=S.sheen>0,$=S.transmission>0,q=ft&&!!S.anisotropyMap,Se=w&&!!S.clearcoatMap,ne=w&&!!S.clearcoatNormalMap,ye=w&&!!S.clearcoatRoughnessMap,ue=O&&!!S.iridescenceMap,ie=O&&!!S.iridescenceThicknessMap,le=X&&!!S.sheenColorMap,De=X&&!!S.sheenRoughnessMap,ve=!!S.specularMap,oe=!!S.specularColorMap,Be=!!S.specularIntensityMap,I=$&&!!S.transmissionMap,re=$&&!!S.thicknessMap,se=!!S.gradientMap,_e=!!S.alphaMap,ee=S.alphaTest>0,K=!!S.alphaHash,fe=!!S.extensions;let Ae=Xi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const _t={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:He,defines:S.defines,customVertexShaderID:Ke,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vr,alphaToCoverage:!!S.alphaToCoverage,map:Te,matcap:nt,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:z,aoMap:We,lightMap:Ge,bumpMap:Je,normalMap:Me,displacementMap:d&&ot,emissiveMap:ge,normalMapObjectSpace:Me&&S.normalMapType===Ch,normalMapTangentSpace:Me&&S.normalMapType===ic,metalnessMap:Ne,roughnessMap:Mt,anisotropy:ft,anisotropyMap:q,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:ne,clearcoatRoughnessMap:ye,dispersion:x,iridescence:O,iridescenceMap:ue,iridescenceThicknessMap:ie,sheen:X,sheenColorMap:le,sheenRoughnessMap:De,specularMap:ve,specularColorMap:oe,specularIntensityMap:Be,transmission:$,transmissionMap:I,thicknessMap:re,gradientMap:se,opaque:S.transparent===!1&&S.blending===Or&&S.alphaToCoverage===!1,alphaMap:_e,alphaTest:ee,alphaHash:K,combine:S.combine,mapUv:Te&&g(S.map.channel),aoMapUv:We&&g(S.aoMap.channel),lightMapUv:Ge&&g(S.lightMap.channel),bumpMapUv:Je&&g(S.bumpMap.channel),normalMapUv:Me&&g(S.normalMap.channel),displacementMapUv:ot&&g(S.displacementMap.channel),emissiveMapUv:ge&&g(S.emissiveMap.channel),metalnessMapUv:Ne&&g(S.metalnessMap.channel),roughnessMapUv:Mt&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:Se&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(S.sheenRoughnessMap.channel),specularMapUv:ve&&g(S.specularMap.channel),specularColorMapUv:oe&&g(S.specularColorMap.channel),specularIntensityMapUv:Be&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:re&&g(S.thicknessMap.channel),alphaMapUv:_e&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||ft),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Te||_e),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===Qe,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&S.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(R(M,S),T(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function R(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=_[S.type];let P;if(M){const F=gi[M];P=xu.clone(F.uniforms)}else P=S.uniforms;return P}function v(S,M){let P;for(let F=0,V=u.length;F<V;F++){const W=u[F];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new $m(r,M,S,s),u.push(P)),P}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:L}}function tg(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ul(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nl(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||ig),i.length>1&&i.sort(d||Ul),n.length>1&&n.sort(d||Ul)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:u,sort:c}}function rg(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new Nl,r.set(i,[a])):n>=s.length?(a=new Nl,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ng(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function sg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ag=0;function og(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lg(r){const e=new ng,t=sg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,s=new ct,a=new ct;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,R=0,T=0,b=0,v=0,E=0,A=0;c.sort(og);for(let S=0,M=c.length;S<M;S++){const P=c[S],F=P.color,V=P.intensity,W=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*V,h+=F.g*V,d+=F.b*V;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],V);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,z=t.get(P);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=P.shadow.matrix,R++}i.directional[f]=H,f++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[g]=H;const Q=P.shadow;if(P.map&&(i.spotLightMap[v]=P.map,v++,Q.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[g]=Q.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[g]=z,i.spotShadowMap[g]=G,b++}g++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Q=P.shadow,z=t.get(P);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=P.shadow.matrix,T++}i.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(V),H.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==R||L.numPointShadows!==T||L.numSpotShadows!==b||L.numSpotMaps!==v||L.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+v-E,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,L.directionalLength=f,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=R,L.numPointShadows=T,L.numSpotShadows=b,L.numSpotMaps=v,L.numLightProbes=A,i.version=ag++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const T=c[p];if(T.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),h++}else if(T.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Ol(r){const e=new lg(r),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function cg(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new Ol(r),e.set(n,[o])):s>=a.length?(o=new Ol(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
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
}`;function dg(r,e,t){let i=new mo;const n=new je,s=new je,a=new et,o=new Uu({depthPacking:Rh}),l=new Nu,c={},u=t.maxTextureSize,h={[ji]:Bt,[Bt]:ji,[Ft]:Ft},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Yt;_.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let p=this.type;this.render=function(E,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Wi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==Ii&&this.type===Ii,W=p===Ii&&this.type!==Ii;for(let G=0,H=E.length;G<H;G++){const Q=E[G],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const te=z.getFrameExtents();if(n.multiply(te),s.copy(z.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/te.x),n.x=s.x*te.x,z.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/te.y),n.y=s.y*te.y,z.mapSize.y=s.y)),z.map===null||V===!0||W===!0){const be=this.type!==Ii?{minFilter:ri,magFilter:ri}:{};z.map!==null&&z.map.dispose(),z.map=new dr(n.x,n.y,be),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ce=z.getViewportCount();for(let be=0;be<ce;be++){const we=z.getViewport(be);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),F.viewport(a),z.updateMatrices(Q,be),i=z.getFrustum(),b(A,L,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Ii&&R(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,P)};function R(E,A){const L=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new dr(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,L,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,L,f,g,null)}function T(E,A,L,S){let M=null;const P=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=M.uuid,V=A.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let G=W[V];G===void 0&&(G=M.clone(),W[V]=G,A.addEventListener("dispose",v)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Ii?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=r.properties.get(M);F.light=L}return M}function b(E,A,L,S,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const F=e.update(E),V=E.material;if(Array.isArray(V)){const W=F.groups;for(let G=0,H=W.length;G<H;G++){const Q=W[G],z=V[Q.materialIndex];if(z&&z.visible){const te=T(E,z,S,M);E.onBeforeShadow(r,E,A,L,F,te,Q),r.renderBufferDirect(L,null,F,te,E,Q),E.onAfterShadow(r,E,A,L,F,te,Q)}}}else if(V.visible){const W=T(E,V,S,M);E.onBeforeShadow(r,E,A,L,F,W,null),r.renderBufferDirect(L,null,F,W,E,null),E.onAfterShadow(r,E,A,L,F,W,null)}}const P=E.children;for(let F=0,V=P.length;F<V;F++)b(P[F],A,L,S,M)}function v(E){E.target.removeEventListener("dispose",v);for(const A in c){const L=c[A],S=E.target.uuid;S in L&&(L[S].dispose(),delete L[S])}}}const pg={[ua]:da,[pa]:ga,[fa]:_a,[zr]:ma,[da]:ua,[ga]:pa,[_a]:fa,[ma]:zr};function fg(r,e){function t(){let I=!1;const re=new et;let se=null;const _e=new et(0,0,0,0);return{setMask:function(ee){se!==ee&&!I&&(r.colorMask(ee,ee,ee,ee),se=ee)},setLocked:function(ee){I=ee},setClear:function(ee,K,fe,Ae,_t){_t===!0&&(ee*=Ae,K*=Ae,fe*=Ae),re.set(ee,K,fe,Ae),_e.equals(re)===!1&&(r.clearColor(ee,K,fe,Ae),_e.copy(re))},reset:function(){I=!1,se=null,_e.set(-1,0,0,0)}}}function i(){let I=!1,re=!1,se=null,_e=null,ee=null;return{setReversed:function(K){if(re!==K){const fe=e.get("EXT_clip_control");K?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),re=K;const Ae=ee;ee=null,this.setClear(Ae)}},getReversed:function(){return re},setTest:function(K){K?Z(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(K){se!==K&&!I&&(r.depthMask(K),se=K)},setFunc:function(K){if(re&&(K=pg[K]),_e!==K){switch(K){case ua:r.depthFunc(r.NEVER);break;case da:r.depthFunc(r.ALWAYS);break;case pa:r.depthFunc(r.LESS);break;case zr:r.depthFunc(r.LEQUAL);break;case fa:r.depthFunc(r.EQUAL);break;case ma:r.depthFunc(r.GEQUAL);break;case ga:r.depthFunc(r.GREATER);break;case _a:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=K}},setLocked:function(K){I=K},setClear:function(K){ee!==K&&(re&&(K=1-K),r.clearDepth(K),ee=K)},reset:function(){I=!1,se=null,_e=null,ee=null,re=!1}}}function n(){let I=!1,re=null,se=null,_e=null,ee=null,K=null,fe=null,Ae=null,_t=null;return{setTest:function(Ze){I||(Ze?Z(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!I&&(r.stencilMask(Ze),re=Ze)},setFunc:function(Ze,bi,pi){(se!==Ze||_e!==bi||ee!==pi)&&(r.stencilFunc(Ze,bi,pi),se=Ze,_e=bi,ee=pi)},setOp:function(Ze,bi,pi){(K!==Ze||fe!==bi||Ae!==pi)&&(r.stencilOp(Ze,bi,pi),K=Ze,fe=bi,Ae=pi)},setLocked:function(Ze){I=Ze},setClear:function(Ze){_t!==Ze&&(r.clearStencil(Ze),_t=Ze)},reset:function(){I=!1,re=null,se=null,_e=null,ee=null,K=null,fe=null,Ae=null,_t=null}}}const s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,R=null,T=null,b=null,v=null,E=null,A=new Fe(0,0,0),L=0,S=!1,M=null,P=null,F=null,V=null,W=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=Q>=2);let te=null,ce={};const be=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),Ye=new et().fromArray(be),He=new et().fromArray(we);function Ke(I,re,se,_e){const ee=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let fe=0;fe<se;fe++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(re+fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return K}const j={};j[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(zr),Je(!1),Me(Lo),Z(r.CULL_FACE),We(Wi);function Z(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function me(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ie(I,re){return h[I]!==re?(r.bindFramebuffer(I,re),h[I]=re,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=re),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(I,re){let se=f,_e=!1;if(I){se=d.get(re),se===void 0&&(se=[],d.set(re,se));const ee=I.textures;if(se.length!==ee.length||se[0]!==r.COLOR_ATTACHMENT0){for(let K=0,fe=ee.length;K<fe;K++)se[K]=r.COLOR_ATTACHMENT0+K;se.length=ee.length,_e=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,_e=!0);_e&&r.drawBuffers(se)}function Te(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const nt={[or]:r.FUNC_ADD,[eh]:r.FUNC_SUBTRACT,[th]:r.FUNC_REVERSE_SUBTRACT};nt[ih]=r.MIN,nt[rh]=r.MAX;const C={[nh]:r.ZERO,[sh]:r.ONE,[ah]:r.SRC_COLOR,[ca]:r.SRC_ALPHA,[dh]:r.SRC_ALPHA_SATURATE,[hh]:r.DST_COLOR,[lh]:r.DST_ALPHA,[oh]:r.ONE_MINUS_SRC_COLOR,[ha]:r.ONE_MINUS_SRC_ALPHA,[uh]:r.ONE_MINUS_DST_COLOR,[ch]:r.ONE_MINUS_DST_ALPHA,[ph]:r.CONSTANT_COLOR,[fh]:r.ONE_MINUS_CONSTANT_COLOR,[mh]:r.CONSTANT_ALPHA,[gh]:r.ONE_MINUS_CONSTANT_ALPHA};function We(I,re,se,_e,ee,K,fe,Ae,_t,Ze){if(I===Wi){g===!0&&(me(r.BLEND),g=!1);return}if(g===!1&&(Z(r.BLEND),g=!0),I!==Qc){if(I!==m||Ze!==S){if((p!==or||b!==or)&&(r.blendEquation(r.FUNC_ADD),p=or,b=or),Ze)switch(I){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Io:r.blendFunc(r.ONE,r.ONE);break;case Do:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Do:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}R=null,T=null,v=null,E=null,A.set(0,0,0),L=0,m=I,S=Ze}return}ee=ee||re,K=K||se,fe=fe||_e,(re!==p||ee!==b)&&(r.blendEquationSeparate(nt[re],nt[ee]),p=re,b=ee),(se!==R||_e!==T||K!==v||fe!==E)&&(r.blendFuncSeparate(C[se],C[_e],C[K],C[fe]),R=se,T=_e,v=K,E=fe),(Ae.equals(A)===!1||_t!==L)&&(r.blendColor(Ae.r,Ae.g,Ae.b,_t),A.copy(Ae),L=_t),m=I,S=!1}function Ge(I,re){I.side===Ft?me(r.CULL_FACE):Z(r.CULL_FACE);let se=I.side===Bt;re&&(se=!se),Je(se),I.blending===Or&&I.transparent===!1?We(Wi):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const _e=I.stencilWrite;o.setTest(_e),_e&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){M!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),M=I)}function Me(I){I!==$c?(Z(r.CULL_FACE),I!==P&&(I===Lo?r.cullFace(r.BACK):I===Zc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),P=I}function ot(I){I!==F&&(H&&r.lineWidth(I),F=I)}function ge(I,re,se){I?(Z(r.POLYGON_OFFSET_FILL),(V!==re||W!==se)&&(r.polygonOffset(re,se),V=re,W=se)):me(r.POLYGON_OFFSET_FILL)}function Ne(I){I?Z(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function Mt(I){I===void 0&&(I=r.TEXTURE0+G-1),te!==I&&(r.activeTexture(I),te=I)}function ft(I,re,se){se===void 0&&(te===null?se=r.TEXTURE0+G-1:se=te);let _e=ce[se];_e===void 0&&(_e={type:void 0,texture:void 0},ce[se]=_e),(_e.type!==I||_e.texture!==re)&&(te!==se&&(r.activeTexture(se),te=se),r.bindTexture(I,re||j[I]),_e.type=I,_e.texture=re)}function w(){const I=ce[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(I){Ye.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function De(I){He.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),He.copy(I))}function ve(I,re){let se=c.get(re);se===void 0&&(se=new WeakMap,c.set(re,se));let _e=se.get(I);_e===void 0&&(_e=r.getUniformBlockIndex(re,I.name),se.set(I,_e))}function oe(I,re){const se=c.get(re).get(I);l.get(re)!==se&&(r.uniformBlockBinding(re,se,I.__bindingPointIndex),l.set(re,se))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,ce={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,R=null,T=null,b=null,v=null,E=null,A=new Fe(0,0,0),L=0,S=!1,M=null,P=null,F=null,V=null,W=null,Ye.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:me,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Te,setBlending:We,setMaterial:Ge,setFlipSided:Je,setCullFace:Me,setLineWidth:ot,setPolygonOffset:ge,setScissorTest:Ne,activeTexture:Mt,bindTexture:ft,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:ue,texImage3D:ie,updateUBOMapping:ve,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:ye,texSubImage2D:X,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:Se,scissor:le,viewport:De,reset:Be}}function mg(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return f?new OffscreenCanvas(w,x):_s("canvas")}function g(w,x,O){let X=1;const $=ft(w);if(($.width>O||$.height>O)&&(X=O/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(X*$.width),Se=Math.floor(X*$.height);h===void 0&&(h=_(q,Se));const ne=x?_(q,Se):h;return ne.width=q,ne.height=Se,ne.getContext("2d").drawImage(w,0,0,q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+Se+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(w,x,O,X,$=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===r.RED&&(O===r.FLOAT&&(q=r.R32F),O===r.HALF_FLOAT&&(q=r.R16F),O===r.UNSIGNED_BYTE&&(q=r.R8)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.R8UI),O===r.UNSIGNED_SHORT&&(q=r.R16UI),O===r.UNSIGNED_INT&&(q=r.R32UI),O===r.BYTE&&(q=r.R8I),O===r.SHORT&&(q=r.R16I),O===r.INT&&(q=r.R32I)),x===r.RG&&(O===r.FLOAT&&(q=r.RG32F),O===r.HALF_FLOAT&&(q=r.RG16F),O===r.UNSIGNED_BYTE&&(q=r.RG8)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RG8UI),O===r.UNSIGNED_SHORT&&(q=r.RG16UI),O===r.UNSIGNED_INT&&(q=r.RG32UI),O===r.BYTE&&(q=r.RG8I),O===r.SHORT&&(q=r.RG16I),O===r.INT&&(q=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGB8UI),O===r.UNSIGNED_SHORT&&(q=r.RGB16UI),O===r.UNSIGNED_INT&&(q=r.RGB32UI),O===r.BYTE&&(q=r.RGB8I),O===r.SHORT&&(q=r.RGB16I),O===r.INT&&(q=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),O===r.UNSIGNED_INT&&(q=r.RGBA32UI),O===r.BYTE&&(q=r.RGBA8I),O===r.SHORT&&(q=r.RGBA16I),O===r.INT&&(q=r.RGBA32I)),x===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),x===r.RGBA){const Se=$?ms:$e.getTransfer(X);O===r.FLOAT&&(q=r.RGBA32F),O===r.HALF_FLOAT&&(q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(q=Se===Qe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(w,x){let O;return w?x===null||x===ur||x===mn?O=r.DEPTH24_STENCIL8:x===Di?O=r.DEPTH32F_STENCIL8:x===fn&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ur||x===mn?O=r.DEPTH_COMPONENT24:x===Di?O=r.DEPTH_COMPONENT32F:x===fn&&(O=r.DEPTH_COMPONENT16),O}function v(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ri&&w.minFilter!==_i?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function E(w){const x=w.target;x.removeEventListener("dispose",E),L(x),x.isVideoTexture&&u.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),M(x)}function L(w){const x=i.get(w);if(x.__webglInit===void 0)return;const O=w.source,X=d.get(O);if(X){const $=X[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(w),Object.keys(X).length===0&&d.delete(O)}i.remove(w)}function S(w){const x=i.get(w);r.deleteTexture(x.__webglTexture);const O=w.source,X=d.get(O);delete X[x.__cacheKey],a.memory.textures--}function M(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let $=0;$<x.__webglFramebuffer[X].length;$++)r.deleteFramebuffer(x.__webglFramebuffer[X][$]);else r.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)r.deleteFramebuffer(x.__webglFramebuffer[X]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let X=0,$=O.length;X<$;X++){const q=i.get(O[X]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[X])}i.remove(w)}let P=0;function F(){P=0}function V(){const w=P;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),P+=1,w}function W(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function G(w,x){const O=i.get(w);if(w.isVideoTexture&&Ne(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function H(w,x){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function Q(w,x){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,x);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function z(w,x){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Z(O,w,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}const te={[ya]:r.REPEAT,[cr]:r.CLAMP_TO_EDGE,[Ma]:r.MIRRORED_REPEAT},ce={[ri]:r.NEAREST,[Th]:r.NEAREST_MIPMAP_NEAREST,[Pn]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[Ps]:r.LINEAR_MIPMAP_NEAREST,[hr]:r.LINEAR_MIPMAP_LINEAR},be={[Ph]:r.NEVER,[Oh]:r.ALWAYS,[Lh]:r.LESS,[rc]:r.LEQUAL,[Ih]:r.EQUAL,[Nh]:r.GEQUAL,[Dh]:r.GREATER,[Uh]:r.NOTEQUAL};function we(w,x){if(x.type===Di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_i||x.magFilter===Ps||x.magFilter===Pn||x.magFilter===hr||x.minFilter===_i||x.minFilter===Ps||x.minFilter===Pn||x.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,te[x.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,te[x.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,te[x.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ce[x.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ri||x.minFilter!==Pn&&x.minFilter!==hr||x.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",E));const X=x.source;let $=d.get(X);$===void 0&&($={},d.set(X,$));const q=W(x);if(q!==w.__cacheKey){$[q]===void 0&&($[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[q].usedTimes++;const Se=$[w.__cacheKey];Se!==void 0&&($[w.__cacheKey].usedTimes--,Se.usedTimes===0&&S(x)),w.__cacheKey=q,w.__webglTexture=$[q].texture}return O}function He(w,x,O){return Math.floor(Math.floor(w/O)/x)}function Ke(w,x,O,X){const $=w.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{$.sort((ue,ie)=>ue.start-ie.start);let q=0;for(let ue=1;ue<$.length;ue++){const ie=$[q],le=$[ue],De=ie.start+ie.count,ve=He(le.start,x.width,4),oe=He(ie.start,x.width,4);le.start<=De+1&&ve===oe&&He(le.start+le.count-1,x.width,4)===ve?ie.count=Math.max(ie.count,le.start+le.count-ie.start):(++q,$[q]=le)}$.length=q+1;const Se=r.getParameter(r.UNPACK_ROW_LENGTH),ne=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let ue=0,ie=$.length;ue<ie;ue++){const le=$[ue],De=Math.floor(le.start/4),ve=Math.ceil(le.count/4),oe=De%x.width,Be=Math.floor(De/x.width),I=ve;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(r.TEXTURE_2D,0,oe,Be,I,1,O,X,x.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function j(w,x,O){let X=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=r.TEXTURE_3D);const $=Ye(w,x),q=x.source;t.bindTexture(X,w.__webglTexture,r.TEXTURE0+O);const Se=i.get(q);if(q.version!==Se.__version||$===!0){t.activeTexture(r.TEXTURE0+O);const ne=$e.getPrimaries($e.workingColorSpace),ye=x.colorSpace===Gi?null:$e.getPrimaries(x.colorSpace),ue=x.colorSpace===Gi||ne===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ie=g(x.image,!1,n.maxTextureSize);ie=Mt(x,ie);const le=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let ve=T(x.internalFormat,le,De,x.colorSpace,x.isVideoTexture);we(X,x);let oe;const Be=x.mipmaps,I=x.isVideoTexture!==!0,re=Se.__version===void 0||$===!0,se=q.dataReady,_e=v(x,ie);if(x.isDepthTexture)ve=b(x.format===_n,x.type),re&&(I?t.texStorage2D(r.TEXTURE_2D,1,ve,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,ve,ie.width,ie.height,0,le,De,null));else if(x.isDataTexture)if(Be.length>0){I&&re&&t.texStorage2D(r.TEXTURE_2D,_e,ve,Be[0].width,Be[0].height);for(let ee=0,K=Be.length;ee<K;ee++)oe=Be[ee],I?se&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,oe.width,oe.height,le,De,oe.data):t.texImage2D(r.TEXTURE_2D,ee,ve,oe.width,oe.height,0,le,De,oe.data);x.generateMipmaps=!1}else I?(re&&t.texStorage2D(r.TEXTURE_2D,_e,ve,ie.width,ie.height),se&&Ke(x,ie,le,De)):t.texImage2D(r.TEXTURE_2D,0,ve,ie.width,ie.height,0,le,De,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ve,Be[0].width,Be[0].height,ie.depth);for(let ee=0,K=Be.length;ee<K;ee++)if(oe=Be[ee],x.format!==hi)if(le!==null)if(I){if(se)if(x.layerUpdates.size>0){const fe=dl(oe.width,oe.height,x.format,x.type);for(const Ae of x.layerUpdates){const _t=oe.data.subarray(Ae*fe/oe.data.BYTES_PER_ELEMENT,(Ae+1)*fe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Ae,oe.width,oe.height,1,le,_t)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,ie.depth,le,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,ve,oe.width,oe.height,ie.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,ie.depth,le,De,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,ve,oe.width,oe.height,ie.depth,0,le,De,oe.data)}else{I&&re&&t.texStorage2D(r.TEXTURE_2D,_e,ve,Be[0].width,Be[0].height);for(let ee=0,K=Be.length;ee<K;ee++)oe=Be[ee],x.format!==hi?le!==null?I?se&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,oe.width,oe.height,le,De,oe.data):t.texImage2D(r.TEXTURE_2D,ee,ve,oe.width,oe.height,0,le,De,oe.data)}else if(x.isDataArrayTexture)if(I){if(re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ve,ie.width,ie.height,ie.depth),se)if(x.layerUpdates.size>0){const ee=dl(ie.width,ie.height,x.format,x.type);for(const K of x.layerUpdates){const fe=ie.data.subarray(K*ee/ie.data.BYTES_PER_ELEMENT,(K+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,le,De,fe)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,le,De,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,ie.width,ie.height,ie.depth,0,le,De,ie.data);else if(x.isData3DTexture)I?(re&&t.texStorage3D(r.TEXTURE_3D,_e,ve,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,le,De,ie.data)):t.texImage3D(r.TEXTURE_3D,0,ve,ie.width,ie.height,ie.depth,0,le,De,ie.data);else if(x.isFramebufferTexture){if(re)if(I)t.texStorage2D(r.TEXTURE_2D,_e,ve,ie.width,ie.height);else{let ee=ie.width,K=ie.height;for(let fe=0;fe<_e;fe++)t.texImage2D(r.TEXTURE_2D,fe,ve,ee,K,0,le,De,null),ee>>=1,K>>=1}}else if(Be.length>0){if(I&&re){const ee=ft(Be[0]);t.texStorage2D(r.TEXTURE_2D,_e,ve,ee.width,ee.height)}for(let ee=0,K=Be.length;ee<K;ee++)oe=Be[ee],I?se&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,le,De,oe):t.texImage2D(r.TEXTURE_2D,ee,ve,le,De,oe);x.generateMipmaps=!1}else if(I){if(re){const ee=ft(ie);t.texStorage2D(r.TEXTURE_2D,_e,ve,ee.width,ee.height)}se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,De,ie)}else t.texImage2D(r.TEXTURE_2D,0,ve,le,De,ie);m(x)&&p(X),Se.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Z(w,x,O){if(x.image.length!==6)return;const X=Ye(w,x),$=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+O);const q=i.get($);if($.version!==q.__version||X===!0){t.activeTexture(r.TEXTURE0+O);const Se=$e.getPrimaries($e.workingColorSpace),ne=x.colorSpace===Gi?null:$e.getPrimaries(x.colorSpace),ye=x.colorSpace===Gi||Se===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ue=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,le=[];for(let K=0;K<6;K++)!ue&&!ie?le[K]=g(x.image[K],!0,n.maxCubemapSize):le[K]=ie?x.image[K].image:x.image[K],le[K]=Mt(x,le[K]);const De=le[0],ve=s.convert(x.format,x.colorSpace),oe=s.convert(x.type),Be=T(x.internalFormat,ve,oe,x.colorSpace),I=x.isVideoTexture!==!0,re=q.__version===void 0||X===!0,se=$.dataReady;let _e=v(x,De);we(r.TEXTURE_CUBE_MAP,x);let ee;if(ue){I&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,Be,De.width,De.height);for(let K=0;K<6;K++){ee=le[K].mipmaps;for(let fe=0;fe<ee.length;fe++){const Ae=ee[fe];x.format!==hi?ve!==null?I?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,Ae.width,Ae.height,ve,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,Ae.width,Ae.height,ve,oe,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,Be,Ae.width,Ae.height,0,ve,oe,Ae.data)}}}else{if(ee=x.mipmaps,I&&re){ee.length>0&&_e++;const K=ft(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,Be,K.width,K.height)}for(let K=0;K<6;K++)if(ie){I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,le[K].width,le[K].height,ve,oe,le[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,le[K].width,le[K].height,0,ve,oe,le[K].data);for(let fe=0;fe<ee.length;fe++){const Ae=ee[fe].image[K].image;I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,Ae.width,Ae.height,ve,oe,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,Be,Ae.width,Ae.height,0,ve,oe,Ae.data)}}else{I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ve,oe,le[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,ve,oe,le[K]);for(let fe=0;fe<ee.length;fe++){const Ae=ee[fe];I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,ve,oe,Ae.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,Be,ve,oe,Ae.image[K])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),q.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function me(w,x,O,X,$,q){const Se=s.convert(O.format,O.colorSpace),ne=s.convert(O.type),ye=T(O.internalFormat,Se,ne,O.colorSpace),ue=i.get(x),ie=i.get(O);if(ie.__renderTarget=x,!ue.__hasExternalTextures){const le=Math.max(1,x.width>>q),De=Math.max(1,x.height>>q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,q,ye,le,De,x.depth,0,Se,ne,null):t.texImage2D($,q,ye,le,De,0,Se,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ge(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,$,ie.__webglTexture,0,ot(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,$,ie.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(w,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),x.depthBuffer){const X=x.depthTexture,$=X&&X.isDepthTexture?X.type:null,q=b(x.stencilBuffer,$),Se=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=ot(x);ge(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,q,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,q,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,q,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,w)}else{const X=x.textures;for(let $=0;$<X.length;$++){const q=X[$],Se=s.convert(q.format,q.colorSpace),ne=s.convert(q.type),ye=T(q.internalFormat,Se,ne,q.colorSpace),ue=ot(x);O&&ge(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,ye,x.width,x.height):ge(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,ye,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ye,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(x.depthTexture);O.__renderTarget=x,(!O.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const X=O.__webglTexture,$=ot(x);if(x.depthTexture.format===gn)ge(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else if(x.depthTexture.format===_n)ge(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Te(w){const x=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=X}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=w.texture.mipmaps;X&&X.length>0?Ee(x.__webglFramebuffer[0],w):Ee(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=r.createRenderbuffer(),Ie(x.__webglDepthbuffer[X],w,!1);else{const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ie(x.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(w,x,O){const X=i.get(w);x!==void 0&&me(X.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Te(w)}function C(w){const x=w.texture,O=i.get(w),X=i.get(x);w.addEventListener("dispose",A);const $=w.textures,q=w.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=x.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let ye=0;ye<x.mipmaps.length;ye++)O.__webglFramebuffer[ne][ye]=r.createFramebuffer()}else O.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)O.__webglFramebuffer[ne]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Se)for(let ne=0,ye=$.length;ne<ye;ne++){const ue=i.get($[ne]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const ye=$[ne];O.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const ue=s.convert(ye.format,ye.colorSpace),ie=s.convert(ye.type),le=T(ye.internalFormat,ue,ie,ye.colorSpace,w.isXRRenderTarget===!0),De=ot(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,le,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),we(r.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)me(O.__webglFramebuffer[ne][ye],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye);else me(O.__webglFramebuffer[ne],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,ye=$.length;ne<ye;ne++){const ue=$[ne],ie=i.get(ue);let le=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,ie.__webglTexture),we(le,ue),me(O.__webglFramebuffer,w,ue,r.COLOR_ATTACHMENT0+ne,le,0),m(ue)&&p(le)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),we(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)me(O.__webglFramebuffer[ye],w,x,r.COLOR_ATTACHMENT0,ne,ye);else me(O.__webglFramebuffer,w,x,r.COLOR_ATTACHMENT0,ne,0);m(x)&&p(ne),t.unbindTexture()}w.depthBuffer&&Te(w)}function We(w){const x=w.textures;for(let O=0,X=x.length;O<X;O++){const $=x[O];if(m($)){const q=R(w),Se=i.get($).__webglTexture;t.bindTexture(q,Se),p(q),t.unbindTexture()}}}const Ge=[],Je=[];function Me(w){if(w.samples>0){if(ge(w)===!1){const x=w.textures,O=w.width,X=w.height;let $=r.COLOR_BUFFER_BIT;const q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=i.get(w),ne=x.length>1;if(ne)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ye=w.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const ie=i.get(x[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,O,X,0,0,O,X,$,r.NEAREST),l===!0&&(Ge.length=0,Je.length=0,Ge.push(r.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ge.push(q),Je.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const ie=i.get(x[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ot(w){return Math.min(n.maxSamples,w.samples)}function ge(w){const x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ne(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Mt(w,x){const O=w.colorSpace,X=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Vr&&O!==Gi&&($e.getTransfer(O)===Qe?(X!==hi||$!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ft(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=nt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function gg(r,e){function t(i,n=Gi){let s;const a=$e.getTransfer(n);if(i===Ei)return r.UNSIGNED_BYTE;if(i===so)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ao)return r.UNSIGNED_SHORT_5_5_5_1;if(i===$l)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yl)return r.BYTE;if(i===Kl)return r.SHORT;if(i===fn)return r.UNSIGNED_SHORT;if(i===no)return r.INT;if(i===ur)return r.UNSIGNED_INT;if(i===Di)return r.FLOAT;if(i===bn)return r.HALF_FLOAT;if(i===Jl)return r.ALPHA;if(i===Ql)return r.RGB;if(i===hi)return r.RGBA;if(i===gn)return r.DEPTH_COMPONENT;if(i===_n)return r.DEPTH_STENCIL;if(i===ec)return r.RED;if(i===oo)return r.RED_INTEGER;if(i===tc)return r.RG;if(i===lo)return r.RG_INTEGER;if(i===co)return r.RGBA_INTEGER;if(i===as||i===os||i===ls||i===cs)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===as)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===as)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ea||i===Sa||i===ba||i===wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ta||i===Aa||i===Ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ta||i===Aa)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ra)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ca||i===Pa||i===La||i===Ia||i===Da||i===Ua||i===Na||i===Oa||i===Fa||i===Ba||i===ka||i===za||i===Ha||i===Ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ca)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===La)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ia)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Da)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ua)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Na)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ka)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===za)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ha)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ga)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Wa||i===Xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Va)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qa||i===ja||i===Ya||i===Ka)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const _g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
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

}`;class xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:_g,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Kr{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new xg,p={},R=t.getContextAttributes();let T=null,b=null;const v=[],E=[],A=new je;let L=null;const S=new Wt;S.viewport=new et;const M=new Wt;M.viewport=new et;const P=[S,M],F=new zu;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=v[j];return Z===void 0&&(Z=new Zs,v[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=v[j];return Z===void 0&&(Z=new Zs,v[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=v[j];return Z===void 0&&(Z=new Zs,v[j]=Z),Z.getHandSpace()};function G(j){const Z=E.indexOf(j.inputSource);if(Z===-1)return;const me=v[Z];me!==void 0&&(me.update(j.inputSource,j.frame,c||a),me.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",Q);for(let j=0;j<v.length;j++){const Z=E[j];Z!==null&&(E[j]=null,v[j].disconnect(Z))}V=null,W=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(T),f=null,d=null,h=null,n=null,b=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",H),n.addEventListener("inputsourceschange",Q),R.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,me=null,Ie=null;R.depth&&(Ie=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=R.stencil?_n:gn,me=R.stencil?mn:ur);const Ee={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ee),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new dr(d.textureWidth,d.textureHeight,{format:hi,type:Ei,depthTexture:new mc(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new dr(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ke.setContext(n),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(j){for(let Z=0;Z<j.removed.length;Z++){const me=j.removed[Z],Ie=E.indexOf(me);Ie>=0&&(E[Ie]=null,v[Ie].disconnect(me))}for(let Z=0;Z<j.added.length;Z++){const me=j.added[Z];let Ie=E.indexOf(me);if(Ie===-1){for(let Te=0;Te<v.length;Te++)if(Te>=E.length){E.push(me),Ie=Te;break}else if(E[Te]===null){E[Te]=me,Ie=Te;break}if(Ie===-1)break}const Ee=v[Ie];Ee&&Ee.connect(me)}}const z=new D,te=new D;function ce(j,Z,me){z.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);const Ie=z.distanceTo(te),Ee=Z.projectionMatrix.elements,Te=me.projectionMatrix.elements,nt=Ee[14]/(Ee[10]-1),C=Ee[14]/(Ee[10]+1),We=(Ee[9]+1)/Ee[5],Ge=(Ee[9]-1)/Ee[5],Je=(Ee[8]-1)/Ee[0],Me=(Te[8]+1)/Te[0],ot=nt*Je,ge=nt*Me,Ne=Ie/(-Je+Me),Mt=Ne*-Je;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Mt),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ft=nt+Ne,w=C+Ne,x=ot-Mt,O=ge+(Ie-Mt),X=We*C/w*ft,$=Ge*C/w*ft;j.projectionMatrix.makePerspective(x,O,X,$,ft,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function be(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let Z=j.near,me=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(me=m.depthFar)),F.near=M.near=S.near=Z,F.far=M.far=S.far=me,(V!==F.near||W!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,W=F.far),F.layers.mask=j.layers.mask|6,S.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Ie=j.parent,Ee=F.cameras;be(F,Ie);for(let Te=0;Te<Ee.length;Te++)be(Ee[Te],Ie);Ee.length===2?ce(F,S,M):F.projectionMatrix.copy(S.projectionMatrix),we(j,F,Ie)};function we(j,Z,me){me===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vn*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return p[j]};let Ye=null;function He(j,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ie=!1;me.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let Te=0;Te<me.length;Te++){const nt=me[Te];let C=null;if(f!==null)C=f.getViewport(nt);else{const Ge=h.getViewSubImage(d,nt);C=Ge.viewport,Te===0&&(e.setRenderTargetTextures(b,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(b))}let We=P[Te];We===void 0&&(We=new Wt,We.layers.enable(Te),We.viewport=new et,P[Te]=We),We.matrix.fromArray(nt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(nt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(C.x,C.y,C.width,C.height),Te===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(We)}const Ee=n.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const Te=h.getDepthInformation(me[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,n.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Te=0;Te<me.length;Te++){const nt=me[Te].camera;if(nt){let C=p[nt];C||(C=new gc,p[nt]=C);const We=h.getCameraImage(nt);C.sourceTexture=We}}}}for(let me=0;me<v.length;me++){const Ie=E[me],Ee=v[me];Ie!==null&&Ee!==void 0&&Ee.update(Ie,Z,c||a)}Ye&&Ye(j,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ke=new xc;Ke.setAnimationLoop(He),this.setAnimationLoop=function(j){Ye=j},this.dispose=function(){}}}const nr=new Si,Mg=new ct;function Eg(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,R,T,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,R,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),T=R.envMap,b=R.envMapRotation;T&&(m.envMap.value=T,nr.copy(b),nr.x*=-1,nr.y*=-1,nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),m.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(nr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sg(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const b=T.program;i.uniformBlockBinding(R,b)}function c(R,T){let b=n[R.id];b===void 0&&(_(R),b=u(R),n[R.id]=b,R.addEventListener("dispose",m));const v=T.program;i.updateUBOMapping(R,v);const E=e.render.frame;s[R.id]!==E&&(d(R),s[R.id]=E)}function u(R){const T=h();R.__bindingPointIndex=T;const b=r.createBuffer(),v=R.__size,E=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,b),b}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const T=n[R.id],b=R.uniforms,v=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let E=0,A=b.length;E<A;E++){const L=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,M=L.length;S<M;S++){const P=L[S];if(f(P,E,S,v)===!0){const F=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let G=0;G<V.length;G++){const H=V[G],Q=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,F+W,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(R,T,b,v){const E=R.value,A=T+"_"+b;if(v[A]===void 0)return typeof E=="number"||typeof E=="boolean"?v[A]=E:v[A]=E.clone(),!0;{const L=v[A];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return v[A]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function _(R){const T=R.uniforms;let b=0;const v=16;for(let A=0,L=T.length;A<L;A++){const S=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,P=S.length;M<P;M++){const F=S[M],V=Array.isArray(F.value)?F.value:[F.value];for(let W=0,G=V.length;W<G;W++){const H=V[W],Q=g(H),z=b%v,te=z%Q.boundary,ce=z+te;b+=te,ce!==0&&v-ce<Q.storage&&(b+=v-ce),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=Q.storage}}}const E=b%v;return E>0&&(b+=v-E),R.__size=b,R.__cache={},this}function g(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function p(){for(const R in n)r.deleteBuffer(n[R]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class bg{constructor(e={}){const{canvas:t=Qh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let v=!1;this._outputColorSpace=Vt;let E=0,A=0,L=null,S=-1,M=null;const P=new et,F=new et;let V=null;const W=new Fe(0);let G=0,H=t.width,Q=t.height,z=1,te=null,ce=null;const be=new et(0,0,H,Q),we=new et(0,0,H,Q);let Ye=!1;const He=new mo;let Ke=!1,j=!1;const Z=new ct,me=new D,Ie=new et,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function nt(){return L===null?z:1}let C=i;function We(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${io}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ee,!1),C===null){const N="webgl2";if(C=We(N,y),C===null)throw We(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ge,Je,Me,ot,ge,Ne,Mt,ft,w,x,O,X,$,q,Se,ne,ye,ue,ie,le,De,ve,oe,Be;function I(){Ge=new Uf(C),Ge.init(),ve=new gg(C,Ge),Je=new Af(C,Ge,e,ve),Me=new fg(C,Ge),Je.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),ot=new Ff(C),ge=new tg,Ne=new mg(C,Ge,Me,ge,Je,ve,ot),Mt=new Cf(b),ft=new Df(b),w=new Gu(C),oe=new wf(C,w),x=new Nf(C,w,ot,oe),O=new kf(C,x,w,ot),ie=new Bf(C,Je,Ne),ne=new Rf(ge),X=new eg(b,Mt,ft,Ge,Je,oe,ne),$=new Eg(b,ge),q=new rg,Se=new cg(Ge),ue=new bf(b,Mt,ft,Me,O,f,l),ye=new dg(b,O,Je),Be=new Sg(C,ot,Je,Me),le=new Tf(C,Ge,ot),De=new Of(C,Ge,ot),ot.programs=X.programs,b.capabilities=Je,b.extensions=Ge,b.properties=ge,b.renderLists=q,b.shadowMap=ye,b.state=Me,b.info=ot}I();const re=new yg(b,C);this.xr=re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=Ge.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ge.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(H,Q,!1))},this.getSize=function(y){return y.set(H,Q)},this.setSize=function(y,N,B=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,Q=N,t.width=Math.floor(y*z),t.height=Math.floor(N*z),B===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(H*z,Q*z).floor()},this.setDrawingBufferSize=function(y,N,B){H=y,Q=N,z=B,t.width=Math.floor(y*B),t.height=Math.floor(N*B),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,N,B,k){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,N,B,k),Me.viewport(P.copy(be).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(we)},this.setScissor=function(y,N,B,k){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,N,B,k),Me.scissor(F.copy(we).multiplyScalar(z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(y){Me.setScissorTest(Ye=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,B=!0){let k=0;if(y){let U=!1;if(L!==null){const J=L.texture.format;U=J===co||J===lo||J===oo}if(U){const J=L.texture.type,he=J===Ei||J===ur||J===fn||J===mn||J===so||J===ao,de=ue.getClearColor(),pe=ue.getClearAlpha(),Re=de.r,Pe=de.g,Ce=de.b;he?(_[0]=Re,_[1]=Pe,_[2]=Ce,_[3]=pe,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=Re,g[1]=Pe,g[2]=Ce,g[3]=pe,C.clearBufferiv(C.COLOR,0,g))}else k|=C.COLOR_BUFFER_BIT}N&&(k|=C.DEPTH_BUFFER_BIT),B&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ue.dispose(),q.dispose(),Se.dispose(),ge.dispose(),Mt.dispose(),ft.dispose(),O.dispose(),oe.dispose(),Be.dispose(),X.dispose(),re.dispose(),re.removeEventListener("sessionstart",pi),re.removeEventListener("sessionend",wo),Zi.stop()};function se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const y=ot.autoReset,N=ye.enabled,B=ye.autoUpdate,k=ye.needsUpdate,U=ye.type;I(),ot.autoReset=y,ye.enabled=N,ye.autoUpdate=B,ye.needsUpdate=k,ye.type=U}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const N=y.target;N.removeEventListener("dispose",K),fe(N)}function fe(y){Ae(y),ge.remove(y)}function Ae(y){const N=ge.get(y).programs;N!==void 0&&(N.forEach(function(B){X.releaseProgram(B)}),y.isShaderMaterial&&X.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,B,k,U,J){N===null&&(N=Ee);const he=U.isMesh&&U.matrixWorld.determinant()<0,de=Gc(y,N,B,k,U);Me.setMaterial(k,he);let pe=B.index,Re=1;if(k.wireframe===!0){if(pe=x.getWireframeAttribute(B),pe===void 0)return;Re=2}const Pe=B.drawRange,Ce=B.attributes.position;let Xe=Pe.start*Re,tt=(Pe.start+Pe.count)*Re;J!==null&&(Xe=Math.max(Xe,J.start*Re),tt=Math.min(tt,(J.start+J.count)*Re)),pe!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,pe.count)):Ce!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,Ce.count));const st=tt-Xe;if(st<0||st===1/0)return;oe.setup(U,k,de,B,pe);let ht,it=le;if(pe!==null&&(ht=w.get(pe),it=De,it.setIndex(ht)),U.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*nt()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(U.isLine){let xe=k.linewidth;xe===void 0&&(xe=1),Me.setLineWidth(xe*nt()),U.isLineSegments?it.setMode(C.LINES):U.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else U.isPoints?it.setMode(C.POINTS):U.isSprite&&it.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)xn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xe=U._multiDrawStarts,bt=U._multiDrawCounts,wi=U._multiDrawCount,ni=pe?w.get(pe).bytesPerElement:1,vr=ge.get(k).currentProgram.getUniforms();for(let kt=0;kt<wi;kt++)vr.setValue(C,"_gl_DrawID",kt),it.render(xe[kt]/ni,bt[kt])}else if(U.isInstancedMesh)it.renderInstances(Xe,st,U.count);else if(B.isInstancedBufferGeometry){const xe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,bt=Math.min(B.instanceCount,xe);it.renderInstances(Xe,st,bt)}else it.render(Xe,st)};function _t(y,N,B){y.transparent===!0&&y.side===Ft&&y.forceSinglePass===!1?(y.side=Bt,y.needsUpdate=!0,Cn(y,N,B),y.side=ji,y.needsUpdate=!0,Cn(y,N,B),y.side=Ft):Cn(y,N,B)}this.compile=function(y,N,B=null){B===null&&(B=y),p=Se.get(B),p.init(N),T.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let he=0;he<J.length;he++){const de=J[he];_t(de,B,U),k.add(de)}else _t(J,B,U),k.add(J)}),p=T.pop(),k},this.compileAsync=function(y,N,B=null){const k=this.compile(y,N,B);return new Promise(U=>{function J(){if(k.forEach(function(he){ge.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){U(y);return}setTimeout(J,10)}Ge.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ze=null;function bi(y){Ze&&Ze(y)}function pi(){Zi.stop()}function wo(){Zi.start()}const Zi=new xc;Zi.setAnimationLoop(bi),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(y){Ze=y,re.setAnimationLoop(y),y===null?Zi.stop():Zi.start()},re.addEventListener("sessionstart",pi),re.addEventListener("sessionend",wo),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,N,L),p=Se.get(y,T.length),p.init(N),T.push(p),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),He.setFromProjectionMatrix(Z,vi,N.reversedDepth),j=this.localClippingEnabled,Ke=ne.init(this.clippingPlanes,j),m=q.get(y,R.length),m.init(),R.push(m),re.enabled===!0&&re.isPresenting===!0){const J=b.xr.getDepthSensingMesh();J!==null&&Rs(J,N,-1/0,b.sortObjects)}Rs(y,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(te,ce),Te=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Te&&ue.addToRenderList(m,y),this.info.render.frame++,Ke===!0&&ne.beginShadows();const B=p.state.shadowsArray;ye.render(B,y,N),Ke===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const J=N.cameras;if(U.length>0)for(let he=0,de=J.length;he<de;he++){const pe=J[he];Ao(k,U,y,pe)}Te&&ue.render(y);for(let he=0,de=J.length;he<de;he++){const pe=J[he];To(m,y,pe,pe.viewport)}}else U.length>0&&Ao(k,U,y,N),Te&&ue.render(y),To(m,y,N);L!==null&&A===0&&(Ne.updateMultisampleRenderTarget(L),Ne.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(b,y,N),oe.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],Ke===!0&&ne.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Rs(y,N,B,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||He.intersectsSprite(y)){k&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Z);const J=O.update(y),he=y.material;he.visible&&m.push(y,J,he,B,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||He.intersectsObject(y))){const J=O.update(y),he=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Ie.copy(J.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(Z)),Array.isArray(he)){const de=J.groups;for(let pe=0,Re=de.length;pe<Re;pe++){const Pe=de[pe],Ce=he[Pe.materialIndex];Ce&&Ce.visible&&m.push(y,J,Ce,B,Ie.z,Pe)}}else he.visible&&m.push(y,J,he,B,Ie.z,null)}}const U=y.children;for(let J=0,he=U.length;J<he;J++)Rs(U[J],N,B,k)}function To(y,N,B,k){const U=y.opaque,J=y.transmissive,he=y.transparent;p.setupLightsView(B),Ke===!0&&ne.setGlobalState(b.clippingPlanes,B),k&&Me.viewport(P.copy(k)),U.length>0&&Rn(U,N,B),J.length>0&&Rn(J,N,B),he.length>0&&Rn(he,N,B),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ao(y,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new dr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?bn:Ei,minFilter:hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const U=p.state.transmissionRenderTarget[k.id],J=k.viewport||P;U.setSize(J.z*b.transmissionResolutionScale,J.w*b.transmissionResolutionScale);const he=b.getRenderTarget(),de=b.getActiveCubeFace(),pe=b.getActiveMipmapLevel();b.setRenderTarget(U),b.getClearColor(W),G=b.getClearAlpha(),G<1&&b.setClearColor(16777215,.5),b.clear(),Te&&ue.render(B);const Re=b.toneMapping;b.toneMapping=Xi;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Ke===!0&&ne.setGlobalState(b.clippingPlanes,k),Rn(y,B,k),Ne.updateMultisampleRenderTarget(U),Ne.updateRenderTargetMipmap(U),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Xe=0,tt=N.length;Xe<tt;Xe++){const st=N[Xe],ht=st.object,it=st.geometry,xe=st.material,bt=st.group;if(xe.side===Ft&&ht.layers.test(k.layers)){const wi=xe.side;xe.side=Bt,xe.needsUpdate=!0,Ro(ht,B,k,it,xe,bt),xe.side=wi,xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ne.updateMultisampleRenderTarget(U),Ne.updateRenderTargetMipmap(U))}b.setRenderTarget(he,de,pe),b.setClearColor(W,G),Pe!==void 0&&(k.viewport=Pe),b.toneMapping=Re}function Rn(y,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,J=y.length;U<J;U++){const he=y[U],de=he.object,pe=he.geometry,Re=he.group;let Pe=he.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),de.layers.test(B.layers)&&Ro(de,N,B,pe,Pe,Re)}}function Ro(y,N,B,k,U,J){y.onBeforeRender(b,N,B,k,U,J),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(b,N,B,k,y,J),U.transparent===!0&&U.side===Ft&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,b.renderBufferDirect(B,N,k,U,y,J),U.side=ji,U.needsUpdate=!0,b.renderBufferDirect(B,N,k,U,y,J),U.side=Ft):b.renderBufferDirect(B,N,k,U,y,J),y.onAfterRender(b,N,B,k,U,J)}function Cn(y,N,B){N.isScene!==!0&&(N=Ee);const k=ge.get(y),U=p.state.lights,J=p.state.shadowsArray,he=U.state.version,de=X.getParameters(y,U.state,J,N,B),pe=X.getProgramCacheKey(de);let Re=k.programs;k.environment=y.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(y.isMeshStandardMaterial?ft:Mt).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",K),Re=new Map,k.programs=Re);let Pe=Re.get(pe);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===he)return Po(y,de),Pe}else de.uniforms=X.getUniforms(y),y.onBeforeCompile(de,b),Pe=X.acquireProgram(de,pe),Re.set(pe,Pe),k.uniforms=de.uniforms;const Ce=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=ne.uniform),Po(y,de),k.needsLights=Wc(y),k.lightsStateVersion=he,k.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function Co(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=us.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Po(y,N){const B=ge.get(y);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Gc(y,N,B,k,U){N.isScene!==!0&&(N=Ee),Ne.resetTextureUnits();const J=N.fog,he=k.isMeshStandardMaterial?N.environment:null,de=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vr,pe=(k.isMeshStandardMaterial?ft:Mt).get(k.envMap||he),Re=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,tt=!!B.morphAttributes.color;let st=Xi;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(st=b.toneMapping);const ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=ht!==void 0?ht.length:0,xe=ge.get(k),bt=p.state.lights;if(Ke===!0&&(j===!0||y!==M)){const wt=y===M&&k.id===S;ne.setState(k,y,wt)}let wi=!1;k.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==bt.state.version||xe.outputColorSpace!==de||U.isBatchedMesh&&xe.batching===!1||!U.isBatchedMesh&&xe.batching===!0||U.isBatchedMesh&&xe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xe.instancing===!1||!U.isInstancedMesh&&xe.instancing===!0||U.isSkinnedMesh&&xe.skinning===!1||!U.isSkinnedMesh&&xe.skinning===!0||U.isInstancedMesh&&xe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xe.instancingMorph===!1&&U.morphTexture!==null||xe.envMap!==pe||k.fog===!0&&xe.fog!==J||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ne.numPlanes||xe.numIntersection!==ne.numIntersection)||xe.vertexAlphas!==Re||xe.vertexTangents!==Pe||xe.morphTargets!==Ce||xe.morphNormals!==Xe||xe.morphColors!==tt||xe.toneMapping!==st||xe.morphTargetsCount!==it)&&(wi=!0):(wi=!0,xe.__version=k.version);let ni=xe.currentProgram;wi===!0&&(ni=Cn(k,N,U));let vr=!1,kt=!1,Qr=!1;const ut=ni.getUniforms(),Kt=xe.uniforms;if(Me.useProgram(ni.program)&&(vr=!0,kt=!0,Qr=!0),k.id!==S&&(S=k.id,kt=!0),vr||M!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",y.projectionMatrix),ut.setValue(C,"viewMatrix",y.matrixWorldInverse);const wt=ut.map.cameraPosition;wt!==void 0&&wt.setValue(C,me.setFromMatrixPosition(y.matrixWorld)),Je.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,kt=!0,Qr=!0)}if(U.isSkinnedMesh){ut.setOptional(C,U,"bindMatrix"),ut.setOptional(C,U,"bindMatrixInverse");const wt=U.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ut.setValue(C,"boneTexture",wt.boneTexture,Ne))}U.isBatchedMesh&&(ut.setOptional(C,U,"batchingTexture"),ut.setValue(C,"batchingTexture",U._matricesTexture,Ne),ut.setOptional(C,U,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",U._indirectTexture,Ne),ut.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",U._colorsTexture,Ne));const $t=B.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ie.update(U,B,ni),(kt||xe.receiveShadow!==U.receiveShadow)&&(xe.receiveShadow=U.receiveShadow,ut.setValue(C,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Kt.envMap.value=pe,Kt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Kt.envMapIntensity.value=N.environmentIntensity),kt&&(ut.setValue(C,"toneMappingExposure",b.toneMappingExposure),xe.needsLights&&Vc(Kt,Qr),J&&k.fog===!0&&$.refreshFogUniforms(Kt,J),$.refreshMaterialUniforms(Kt,k,z,Q,p.state.transmissionRenderTarget[y.id]),us.upload(C,Co(xe),Kt,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(us.upload(C,Co(xe),Kt,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(C,"center",U.center),ut.setValue(C,"modelViewMatrix",U.modelViewMatrix),ut.setValue(C,"normalMatrix",U.normalMatrix),ut.setValue(C,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const wt=k.uniformsGroups;for(let si=0,Cs=wt.length;si<Cs;si++){const Ji=wt[si];Be.update(Ji,ni),Be.bind(Ji,ni)}}return ni}function Vc(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Wc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,B){const k=ge.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ge.get(y.texture).__webglTexture=N,ge.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:B,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const B=ge.get(y);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const Xc=C.createFramebuffer();this.setRenderTarget=function(y,N=0,B=0){L=y,E=N,A=B;let k=!0,U=null,J=!1,he=!1;if(y){const de=ge.get(y);if(de.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(de.__webglFramebuffer===void 0)Ne.setupRenderTarget(y);else if(de.__hasExternalTextures)Ne.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pe=y.depthTexture;if(de.__boundDepthTexture!==Pe){if(Pe!==null&&ge.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(y)}}const pe=y.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(he=!0);const Re=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?U=Re[N][B]:U=Re[N],J=!0):y.samples>0&&Ne.useMultisampledRTT(y)===!1?U=ge.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[B]:U=Re,P.copy(y.viewport),F.copy(y.scissor),V=y.scissorTest}else P.copy(be).multiplyScalar(z).floor(),F.copy(we).multiplyScalar(z).floor(),V=Ye;if(B!==0&&(U=Xc),Me.bindFramebuffer(C.FRAMEBUFFER,U)&&k&&Me.drawBuffers(y,U),Me.viewport(P),Me.scissor(F),Me.setScissorTest(V),J){const de=ge.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,B)}else if(he){const de=N;for(let pe=0;pe<y.textures.length;pe++){const Re=ge.get(y.textures[pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+pe,Re.__webglTexture,B,de)}}else if(y!==null&&B!==0){const de=ge.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(y,N,B,k,U,J,he,de=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){Me.bindFramebuffer(C.FRAMEBUFFER,pe);try{const Re=y.textures[de],Pe=Re.format,Ce=Re.type;if(!Je.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-k&&B>=0&&B<=y.height-U&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(N,B,k,U,ve.convert(Pe),ve.convert(Ce),J))}finally{const Re=L!==null?ge.get(L).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,N,B,k,U,J,he,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(N>=0&&N<=y.width-k&&B>=0&&B<=y.height-U){Me.bindFramebuffer(C.FRAMEBUFFER,pe);const Re=y.textures[de],Pe=Re.format,Ce=Re.type;if(!Je.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,J.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(N,B,k,U,ve.convert(Pe),ve.convert(Ce),0);const tt=L!==null?ge.get(L).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,tt);const st=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await eu(C,st,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,J),C.deleteBuffer(Xe),C.deleteSync(st),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,B=0){const k=Math.pow(2,-B),U=Math.floor(y.image.width*k),J=Math.floor(y.image.height*k),he=N!==null?N.x:0,de=N!==null?N.y:0;Ne.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,he,de,U,J),Me.unbindTexture()};const qc=C.createFramebuffer(),jc=C.createFramebuffer();this.copyTextureToTexture=function(y,N,B=null,k=null,U=0,J=null){J===null&&(U!==0?(xn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let he,de,pe,Re,Pe,Ce,Xe,tt,st;const ht=y.isCompressedTexture?y.mipmaps[J]:y.image;if(B!==null)he=B.max.x-B.min.x,de=B.max.y-B.min.y,pe=B.isBox3?B.max.z-B.min.z:1,Re=B.min.x,Pe=B.min.y,Ce=B.isBox3?B.min.z:0;else{const $t=Math.pow(2,-U);he=Math.floor(ht.width*$t),de=Math.floor(ht.height*$t),y.isDataArrayTexture?pe=ht.depth:y.isData3DTexture?pe=Math.floor(ht.depth*$t):pe=1,Re=0,Pe=0,Ce=0}k!==null?(Xe=k.x,tt=k.y,st=k.z):(Xe=0,tt=0,st=0);const it=ve.convert(N.format),xe=ve.convert(N.type);let bt;N.isData3DTexture?(Ne.setTexture3D(N,0),bt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ne.setTexture2DArray(N,0),bt=C.TEXTURE_2D_ARRAY):(Ne.setTexture2D(N,0),bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const wi=C.getParameter(C.UNPACK_ROW_LENGTH),ni=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vr=C.getParameter(C.UNPACK_SKIP_PIXELS),kt=C.getParameter(C.UNPACK_SKIP_ROWS),Qr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);const ut=y.isDataArrayTexture||y.isData3DTexture,Kt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const $t=ge.get(y),wt=ge.get(N),si=ge.get($t.__renderTarget),Cs=ge.get(wt.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,si.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Ji=0;Ji<pe;Ji++)ut&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(y).__webglTexture,U,Ce+Ji),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(N).__webglTexture,J,st+Ji)),C.blitFramebuffer(Re,Pe,he,de,Xe,tt,he,de,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||ge.has(y)){const $t=ge.get(y),wt=ge.get(N);Me.bindFramebuffer(C.READ_FRAMEBUFFER,qc),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,jc);for(let si=0;si<pe;si++)ut?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$t.__webglTexture,U,Ce+si):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$t.__webglTexture,U),Kt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.__webglTexture,J,st+si):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,wt.__webglTexture,J),U!==0?C.blitFramebuffer(Re,Pe,he,de,Xe,tt,he,de,C.COLOR_BUFFER_BIT,C.NEAREST):Kt?C.copyTexSubImage3D(bt,J,Xe,tt,st+si,Re,Pe,he,de):C.copyTexSubImage2D(bt,J,Xe,tt,Re,Pe,he,de);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Kt?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(bt,J,Xe,tt,st,he,de,pe,it,xe,ht.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(bt,J,Xe,tt,st,he,de,pe,it,ht.data):C.texSubImage3D(bt,J,Xe,tt,st,he,de,pe,it,xe,ht):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,J,Xe,tt,he,de,it,xe,ht.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,J,Xe,tt,ht.width,ht.height,it,ht.data):C.texSubImage2D(C.TEXTURE_2D,J,Xe,tt,he,de,it,xe,ht);C.pixelStorei(C.UNPACK_ROW_LENGTH,wi),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ni),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vr),C.pixelStorei(C.UNPACK_SKIP_ROWS,kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qr),J===0&&N.generateMipmaps&&C.generateMipmap(bt),Me.unbindTexture()},this.initRenderTarget=function(y){ge.get(y).__webglFramebuffer===void 0&&Ne.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ne.setTextureCube(y,0):y.isData3DTexture?Ne.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ne.setTexture2DArray(y,0):Ne.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){E=0,A=0,L=null,Me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const pt=0,Ni=1,fr=2,yi=3,Xr=4,yn=5,qr=6,mr=7,Mn=8,jr=9,Jt=10,It=11,St=12,Qt=13,Xt=14,ei=15,Ki=16,ci=17,di=18,Yr=19,Ct=20,$i=21,gr=22,Gt=23,lt=r=>r,Jr=[lt({id:pt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),lt({id:Ni,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),lt({id:fr,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),lt({id:yi,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),lt({id:Xr,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),lt({id:yn,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),lt({id:qr,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),lt({id:mr,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),lt({id:Mn,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),lt({id:jr,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),lt({id:Jt,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),lt({id:It,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),lt({id:St,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),lt({id:Qt,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),lt({id:Xt,name:"Metal Block",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),lt({id:ei,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),lt({id:Ki,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),lt({id:ci,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),lt({id:di,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),lt({id:Yr,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),lt({id:Ct,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),lt({id:$i,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),lt({id:gr,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:null,minTier:0,placeable:!0,color:[.35,.75,.8]}),lt({id:Gt,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]})],Dt=96,Le=16,qt=1440;function Nt(r){return Jr[r].solid}function wg(r){return Jr[r].opaque}function Tg(r){let e=2166136261;for(let t=0;t<r.length;t++)e^=r.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}class vo{constructor(e){Y(this,"s");this.s=e>>>0||1}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}}function ui(r,e,t){let i=r*374761393+e*668265263+t*2246822519>>>0;return i=(i^i>>>13)>>>0,i=Math.imul(i,1274126177)>>>0,((i^i>>>16)>>>0)/4294967296}function Ja(r){return r*r*(3-2*r)}function xo(r,e,t){const i=Math.floor(r),n=Math.floor(e),s=Ja(r-i),a=Ja(e-n),o=ui(i,n,t),l=ui(i+1,n,t),c=ui(i,n+1,t),u=ui(i+1,n+1,t);return o+(l-o)*s+(c-o)*a+(o-l-c+u)*s*a}function cn(r,e,t,i=4,n=2,s=.5){let a=0,o=1,l=1,c=0;for(let u=0;u<i;u++)a+=xo(r*l,e*l,t+u*101)*o,c+=o,o*=s,l*=n;return a/c}function Ag(r,e,t,i=3){let n=0,s=1,a=1,o=0;for(let l=0;l<i;l++){const c=Math.abs(xo(r*a,e*a,t+l*101)*2-1);n+=(1-c)*s,o+=s,s*=.5,a*=2}return n/o}function bc(r,e){const t=Math.floor(r),i=Ja(r-t),n=ui(t,0,e),s=ui(t+1,0,e);return n+(s-n)*i}const Rg=0,wc=1,Cg=2,Qa=3,ds=4,Pg=1e6;class Lg{constructor(e){Y(this,"oases",[]);Y(this,"towns",[]);Y(this,"secondShip",{x:0,z:0});Y(this,"canisters",[]);this.seed=e;const t=new vo(e^24378);for(let i=0;i<6;i++){const n=t.range(0,Math.PI*2),s=t.range(160,900);this.oases.push({x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s),r:t.int(3,5)})}for(let i=0;i<4;i++){const n=t.range(0,Math.PI*2),s=t.range(300,1e3);this.towns.push({x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s)})}{const i=t.range(0,Math.PI*2),n=t.range(450,700);this.secondShip={x:Math.round(Math.cos(i)*n),z:Math.round(Math.sin(i)*n)}}for(let i=0;i<13;i++){const n=t.range(0,Math.PI*2),s=t.range(30,600);this.canisters.push({x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s),buried:t.next()<.4})}}nearOasis(e,t){for(const i of this.oases)if(Math.abs(i.x-e)<=i.r+1&&Math.abs(i.z-t)<=i.r+1)return i;return null}}function yo(r,e,t){const i=Math.min(.999,Math.max(.001,cn(r/900+.5,e/900+.5,t,3))),n=[.17,.42,.57,.72,.9].map(o=>Math.exp(-Math.abs(i-o)/.05)),s=Math.max(Math.abs(r),Math.abs(e));s<80&&(n[0]+=Math.pow(1-s/80,2)*6);const a=n.reduce((o,l)=>o+l,0);return n.map(o=>o/a)}function eo(r,e,t){const i=yo(r,e,t);let n=0;for(let s=1;s<5;s++)i[s]>i[n]&&(n=s);return n}function Ig(r,e,t){const i=yo(e,t,r),n=[30+cn(e/140,t/140,r+7)*8+Math.sin(e/9+t/13)*.9,29+cn(e/160,t/160,r+9)*6+Math.max(0,xo(e/26,t/26,r+11)-.72)*10,28+cn(e/220,t/220,r+5)*3,33+Math.floor(cn(e/170,t/170,r+13)*4.99)*5,29-Ag(e/210,t/210,r+17)*9];let s=0;for(let a=0;a<5;a++)s+=i[a]*n[a];return s}function Mi(r,e,t){const i=Math.max(Math.abs(e),Math.abs(t)),n=Ig(r,e,t);if(i>=30)return n;if(i<=14)return 30;const s=(i-14)/16,a=s*s*(3-2*s);return 30+(n-30)*a}function Dg(r,e,t,i,n){const s=yo(e,t,r);let a=0,o=1;s[1]>s[0]&&(a=1,o=0);for(let l=2;l<5;l++)s[l]>s[a]?(o=a,a=l):s[l]>s[o]&&(o=l);return s[o]/s[a]>.35&&ui(e,t,r+45)<s[o]/(s[a]+s[o])&&(a=o),i===n?a===Cg?qr:a===ds?yi:a===Qa?fr:a===wc&&ui(e,t,r+41)>.78?Xr:Ni:i>=n-3?a===ds?yi:Ni:a===Qa||a===ds?yi:fr}function Ug(r){const e=(n,s)=>n===4||n===-6?Math.abs(s)<=4:s===5||s===-5?n>=-5&&n<=3:n>=-5&&n<=3&&s>=-4&&s<=4,t=(n,s,a)=>(n===4||n===-6)&&Math.abs(a)>=3&&(s===30||s===34);for(let n=-6;n<=4;n++)for(let s=-5;s<=5;s++)for(let a=30;a<=34;a++){if(!e(n,s)||t(n,a,s))continue;const o=n>=2&&Math.abs(s)>2,l=n>=-5&&n<=3&&s>=-4&&s<=4&&a>=31&&a<=33&&!o;r(n,a,s,l?pt:a===30?Xt:Jt)}for(let n=-3;n<=1;n++)for(let s=-2;s<=2;s++)r(n,35,s,Jt);for(let n=-2;n<=0;n++)for(let s=-1;s<=1;s++)r(n,36,s,Jt);for(let n=-2;n<=1;n++)for(const s of[6,7,8,9,-6,-7,-8,-9])r(n,32,s,Xt);for(const n of[-3,2])for(const s of[6,7,8,-6,-7,-8])r(n,32,s,Xt);for(const n of[-1,0])r(n,31,10,Xt),r(n,31,-10,Xt);const i=(n,s,a)=>{r(n,s,a,It),r(n,s+1,a,Ct)};for(let n=-4;n<=4;n++)for(let s=31;s<=33;s++)r(1,s,n,Jt),r(-2,s,n,Jt);for(let n=-5;n<=-3;n++)for(const s of[-2,2])for(let a=31;a<=33;a++)r(n,a,s,Jt);i(1,31,0),i(-2,31,0),i(-2,31,3),i(-2,31,-3),i(-6,31,0);for(let n=-2;n<=2;n++)for(let s=32;s<=33;s++)r(4,s,n,jr);r(-4,30,4,di),r(-4,29,4,di),r(-3,30,4,di),r(-4,31,-4,gr),r(-4,31,-1,ei),r(0,31,-3,Ki);for(const[n,s]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])r(n,34,s,Qt);for(const[n,s]of[[0,3],[0,4],[-1,4],[2,2]])r(n,31,s,Xt)}function Ng(r,e,t){const i=new vo(Pg+77);for(let n=0;n<40;n++){const s=e.x+i.int(-5,5),a=e.z+i.int(-5,5),o=Math.round(Mi(t,s,a));r(s,o+i.int(0,1),a,i.next()<.5?Jt:Xt)}r(e.x,Math.round(Mi(t,e.x,e.z))+1,e.z,$i)}function Og(r,e,t){const i=Math.round(Mi(t,e.x,e.z));for(let n=-e.r-1;n<=e.r+1;n++)for(let s=-e.r-1;s<=e.r+1;s++){const a=e.x+n,o=e.z+s,l=Math.sqrt(n*n+s*s),c=Math.round(Mi(t,a,o));if(l<=e.r){for(let u=c;u>i-2;u--)r(a,u,o,pt);r(a,i-2,o,Ni);for(let u=i-1;u<=i;u++)r(a,u,o,di)}else if(l<=e.r+1)for(let u=c;u<i+1;u++)r(a,u,o,Ni)}for(let n=0;n<3;n++){const s=e.x+Math.round(Math.cos(n*2.1)*(e.r+2)),a=e.z+Math.round(Math.sin(n*2.1)*(e.r+2)),o=Math.round(Mi(t,s,a));for(let l=o+1;l<=o+4;l++)r(s,l,a,mr)}}function Fg(r,e,t){for(const[i,n]of[[-4,-3],[2,2],[-2,4]]){const s=Math.round(Mi(t,e.x+i,e.z+n));for(let a=0;a<4;a++)for(let o=0;o<4;o++)for(let l=s+1;l<=s+3;l++){if(!(a===0||a===3||o===0||o===3||l===s+1||l===s+3)){r(e.x+i+a,l,e.z+n+o,pt);continue}a===0&&o===1&&l<=s+2||r(e.x+i+a,l,e.z+n+o,Yr)}r(e.x+i+1,s+2,e.z+n+2,Xt)}}function Bg(r,e,t,i){const n=new Uint8Array(Le*Le*Dt),s=(a,o,l,c)=>{const u=a-t*Le,h=l-i*Le;u>=0&&u<Le&&h>=0&&h<Le&&o>=0&&o<Dt&&(n[(u*Le+h)*Dt+o]=c)};for(let a=0;a<Le;a++)for(let o=0;o<Le;o++){const l=t*Le+a,c=i*Le+o,u=Math.round(Mi(r,l,c));for(let d=0;d<=u;d++)n[(a*Le+o)*Dt+d]=Dg(r,l,c,d,u);const h=l*l+c*c<240;if(!h&&ui(l,c,r+21)>.988){const d=eo(l,c,r);if(d===Rg||d===wc){for(let f=1;f<=2;f++)s(l,u+f,c,yi);a>0&&s(l-1,u+1,c,yi)}}if(!h&&ui(l,c,r+23)>.9935){const d=eo(l,c,r);if(d!==Qa&&d!==ds){const f=3+(ui(l,c,r+29)*3|0);for(let _=u+1;_<=u+f;_++)s(l,_,c,mr)}}}t>=-1&&t<=0&&i>=-1&&i<=0&&Ug(s);for(const a of e.oases)Math.abs(t*Le+8-a.x)<a.r+8&&Math.abs(i*Le+8-a.z)<a.r+8&&Og(s,a,r);for(const a of e.towns)Math.abs(t*Le+8-a.x)<12&&Math.abs(i*Le+8-a.z)<12&&Fg(s,a,r);return Math.abs(t*Le+8-e.secondShip.x)<12&&Math.abs(i*Le+8-e.secondShip.z)<12&&Ng(s,e.secondShip,r),n}const hn=(r,e)=>r+","+e,Fl=(r,e,t)=>(r*Le+e)*Dt+t,kg=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];class zg{constructor(e){Y(this,"chunks",new Map);Y(this,"deltas",new Map);Y(this,"dirty",new Set);Y(this,"doorSwing",new Map);Y(this,"gen");this.seed=e,this.gen=new Lg(e)}chunk(e,t){const i=hn(e,t);let n=this.chunks.get(i);if(!n){n=Bg(this.seed,this.gen,e,t);const s=this.deltas.get(i);if(s)for(const[a,o]of s)n[a]=o;this.chunks.set(i,n)}return n}get(e,t,i){if(t<0||t>=Dt)return pt;const n=Math.floor(e/Le),s=Math.floor(i/Le);return this.chunk(n,s)[Fl(e-n*Le,i-s*Le,t)]}skyResistance(e,t,i,n=40){let s=0;for(let a=1;a<=n;a++){const o=this.get(e,t+a,i);if(o!==pt&&(s+=Hg[o],s>=6))return{R:s,openSky:!1}}return{R:s,openSky:s===0}}roomInfo(e,t,i,n=400){if(this.get(e,t,i)!==pt)return{size:0,sealed:!1,regulators:0,regCells:[]};const s=new Set([`${e},${t},${i}`]),a=[[e,t,i]],o=new Set;let l=0,c=!0;for(;a.length;){const[u,h,d]=a.pop();if(++l>n){c=!1;break}for(const[f,_,g]of kg){const m=u+f,p=h+_,R=d+g;if(p>=Dt){c=!1;continue}const T=this.get(m,p,R);if(T===pt||T===St){const b=m+","+p+","+R;s.has(b)||(s.add(b),a.push([m,p,R]))}else T===gr&&o.add(m+","+p+","+R)}}return{size:l,sealed:c,regulators:o.size,regCells:[...o]}}set(e,t,i,n){if(t<0||t>=Dt)return;const s=Math.floor(e/Le),a=Math.floor(i/Le),o=this.chunk(s,a),l=Fl(e-s*Le,i-a*Le,t);if(o[l]===n)return;o[l]=n;let c=this.deltas.get(hn(s,a));c||this.deltas.set(hn(s,a),c=new Map),c.set(l,n),this.markDirty(s,a);const u=e-s*Le,h=i-a*Le;u===0&&this.markDirty(s-1,a),h===0&&this.markDirty(s,a-1),u===Le-1&&this.markDirty(s+1,a),h===Le-1&&this.markDirty(s,a+1)}markDirty(e,t){this.dirty.add(hn(e,t))}surface(e,t){for(let i=Dt-1;i>=0;i--)if(this.get(e,i,t)!==pt)return i;return 0}serializeDeltas(){const e={};for(const[t,i]of this.deltas){const n=[];for(const[s,a]of i)n.push(s,a);e[t]=n}return e}loadDeltas(e){this.deltas.clear();for(const[t,i]of Object.entries(e)){const n=new Map;for(let s=0;s<i.length;s+=2)n.set(i[s],i[s+1]);this.deltas.set(t,n)}this.chunks.clear(),this.dirty.clear();for(const t of this.deltas.keys())this.dirty.add(t)}}const Hg=Jr.map(r=>r.R);function Gg(r,e,t,i,n){const s=r.get(e,t,i);return s===It||s===Ct?!0:!(wg(s)||s===n)}const ns=.6,Vg=1.8,Bl=1.62;class Wg{constructor(e){Y(this,"pos",new D(.5,31.01,2.5));Y(this,"vel",new D);Y(this,"yaw",0);Y(this,"pitch",0);Y(this,"onGround",!1);Y(this,"sprinting",!1);Y(this,"inWater",!1);Y(this,"headUnder",!1);this.world=e}waterAt(e){return this.world.get(Math.floor(this.pos.x),Math.floor(this.pos.y+e),Math.floor(this.pos.z))===di}collides(e,t,i){const n=Math.floor(e-ns/2),s=Math.floor(e+ns/2),a=Math.floor(i-ns/2),o=Math.floor(i+ns/2),l=Math.floor(t),c=Math.floor(t+Vg-.001);for(let u=n;u<=s;u++)for(let h=a;h<=o;h++)for(let d=l;d<=c;d++)if(Nt(this.world.get(u,d,h)))return!0;return!1}update(e,t,i,n,s,a){this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Bl);const o=this.inWater,l=(this.sprinting?7.2:4.5)*s*(a?.25:1)*(o?.55:1),c=new D(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),u=new D(-c.z,0,c.x),h=c.multiplyScalar(i).add(u.multiplyScalar(t));h.lengthSq()>1&&h.normalize();const d=this.onGround?40:o?12:8;this.vel.x+=(h.x*l-this.vel.x)*Math.min(1,d*e),this.vel.z+=(h.z*l-this.vel.z)*Math.min(1,d*e),o?(this.vel.y-=7*e,n&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*e),this.vel.y=qi.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*e)):(this.vel.y-=24*e,n&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*e,0),this.moveAxis(this.vel.z*e,2),this.moveAxis(this.vel.y*e,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0)),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(e,t){if(e===0)return;const i=this.pos,n=Math.max(1,Math.ceil(Math.abs(e)/.3)),s=e/n;for(let a=0;a<n;a++){const o=i.x+(t===0?s:0),l=i.y+(t===1?s:0),c=i.z+(t===2?s:0);if(!this.collides(o,l,c)){i.set(o,l,c);continue}t===1?(s<0&&(this.onGround=!0),this.vel.y=0):t===0?this.vel.x*=.25:this.vel.z*=.25;return}t===1&&e!==0&&(this.onGround=!1)}eye(){return new D(this.pos.x,this.pos.y+Bl,this.pos.z)}}const pn=20,ps=45,Tc=36,Ac=37.5,Xg=21,qg=26,Rc=100;class jg{constructor(e){Y(this,"health",100);Y(this,"water",100);Y(this,"body",36.6);Y(this,"invincible",!1);Y(this,"surgeCooldown",0);Y(this,"causeOfDeath",null);Y(this,"vision",0);Y(this,"lastAmbient",0);Y(this,"lastAmbientEff",0);Y(this,"lastShelterR",0);Y(this,"lastTarget",36.6);Y(this,"lastOpenSky",!1);Y(this,"lastRoom",{size:0,sealed:!1,regulators:0});Y(this,"embedKey","");Y(this,"embedAir",null);this.weatherSeed=e}worldTimeToDayFrac(e){return e%qt/qt}ambient(e,t,i){let n=Xg-qg*Math.cos((t-.28)*Math.PI*2);e===2&&(n-=2),(e===3||e===4)&&(n+=3);const s=bc(Math.floor(i/10)/60,this.weatherSeed)*2-1;return n+s*8}update(e,t,i,n){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=e);const s=this.worldTimeToDayFrac(n.tSec),a=this.ambient(n.biome,s,n.tSec),o=Math.floor(i.x),l=Math.floor(i.y),c=Math.floor(i.z),u=(R,T,b)=>{const{R:v,openSky:E}=t.skyResistance(R,T,b);let A=1-Math.exp(-v),L=a;E&&n.sunElev>0&&(L+=8+10*n.sunElev);const S=t.roomInfo(R,T,b);return S.sealed&&(S.regulators*Rc>=S.size?(L=36.6,A=1):(L=a,A=0)),{R:v,openSky:E,shelter:A,ambEff:L,room:S}};let h=u(o,l,c);if(h.room.size===0){const R=`${o},${l},${c}|${Math.floor(n.tSec*2)}`;if(this.embedKey!==R){let T=h;for(let b=-1;b<=1;b++)for(let v=-1;v<=1;v++)for(let E=-1;E<=1;E++){if(!b&&!v&&!E)continue;const A=u(o+b,l+v,c+E);A.room.size!==0&&Math.abs(A.ambEff-37)<Math.abs(T.ambEff-37)&&(T=A)}this.embedKey=R,this.embedAir=T}this.embedAir&&(h=this.embedAir)}this.lastOpenSky=h.openSky;let d=h.shelter,f=h.ambEff;const _=h.room;if(this.lastRoom=_,n.inWater){const R=qi.clamp(a,12,24)-3;f=(f+R)/2}const g=36.6+(f-36.6)*(1-d);this.lastAmbient=a,this.lastAmbientEff=f,this.lastShelterR=h.R,this.lastTarget=g;const m=_.sealed?.022:.0075;this.body+=(g-this.body)*m*e,this.body=qi.clamp(this.body,12,44.5);let p=100/(qt*1.5);this.body>37&&(p+=(this.body-37)*.02),n.sprinting&&(p*=1.7),n.overencumbered&&(p+=.05),this.water=Math.max(0,this.water-p*e),this.body>39.5&&this.hurt((this.body-39.5)*.6,"heat stroke"),this.body<31.5&&this.hurt((31.5-this.body)*.7,"hypothermia"),this.water<=0?this.hurt(1.2,"dehydration"):this.water<5&&this.hurt((5-this.water)*.15,"dehydration"),this.water>25&&this.body>=Tc&&this.body<=Ac&&this.health>0&&(this.health=Math.min(100,this.health+.25*e)),this.vision=qi.clamp((28-this.water)/28,0,1)}hurt(e,t){this.health<=0||this.invincible||(this.health-=e,this.health<=0&&(this.health=0,this.causeOfDeath=t))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=15,this.body=Math.max(30,this.body-2.5),this.surgeCooldown=10,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(3.5,this.body-33.5)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const Yg=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],ii=16,kr=16;function Kg(){const r=document.createElement("canvas");r.width=r.height=kr*ii;const e=r.getContext("2d"),t=new vo(48879),i=[Ni,fr,yi,Xr,yn,qr,mr,Mn,jr,Jt,It,Ct,Qt,Xt,ei,Ki,ci,di,Yr,St,$i,gr,Gt],n={};i.forEach((l,c)=>n[l]=c);const s=l=>Math.max(0,Math.min(1,l)),a=l=>{const c=n[l],u=c%kr*ii,h=(c/kr|0)*ii,[d,f,_]=Jr[l].color,g=(v,E=1,A=0,L=0,S=0)=>`rgba(${Math.round(s(d+v+A)*255)},${Math.round(s(f+v+L)*255)},${Math.round(s(_+v+S)*255)},${E})`,m=(v,E,A)=>{e.fillStyle=A,e.fillRect(u+v,h+E,1,1)},p=v=>{e.fillStyle=v,e.fillRect(u,h,ii,ii)},R=v=>(t.next()-.5)*v,T=(v,E)=>{for(let A=0;A<v;A++)m(t.int(0,15),t.int(0,15),g(R(E)))},b=(v,E)=>{let A=t.int(1,13),L=t.int(1,13);for(let S=0;S<v;S++)m(A,L,g(R(E)-.15)),A+=t.int(-1,1),L+=t.int(0,1),A=Math.max(0,Math.min(15,A)),L=Math.max(0,Math.min(15,L))};switch(l){case Ni:p(g(0)),T(50,.14);break;case fr:p(g(0)),T(30,.1);for(const v of[3,8,12])for(let E=0;E<16;E++)t.next()>.25&&m(E,v+E%2,g(-.12));break;case yi:p(g(R(.08))),T(40,.12),b(9,.05),b(7,.05);break;case Xr:p(g(-.04));for(let v=0;v<14;v++){const E=t.int(1,14),A=t.int(1,14);m(E,A,g(.12)),m(E+1,A,g(.05)),m(E,A+1,g(-.15)),m(E-1,A,g(-.1))}break;case yn:p(g(0)),T(70,.22);break;case qr:p(g(.04)),T(25,.08);for(let v=2;v<16;v+=5)for(let E=0;E<16;E++)t.next()>.4&&m(E,v+(E%3===2?1:0),g(-.12));break;case mr:p(g(0));for(let v=0;v<16;v++)for(let E=0;E<16;E++)m(v,E,g(R(.16)+Math.sin(E*.9+v)*.03));m(5,6,g(-.2)),m(6,6,g(-.25)),m(5,7,g(-.15));break;case Mn:p(g(0,.16));for(let v=0;v<16;v++)m(v,0,g(.12,.4)),m(v,15,g(.12,.4)),m(0,v,g(.12,.4)),m(15,v,g(.12,.4));for(let v=2;v<8;v++)m(v,v+2,g(.3,.4));break;case jr:p(g(0,.26));for(let v=0;v<16;v++)m(v,0,g(.1,.55)),m(v,15,g(.1,.55)),m(0,v,g(.1,.55)),m(15,v,g(.1,.55)),m(8,v,g(.06,.5)),m(v,8,g(.06,.5));break;case Jt:p(g(0));for(let v=0;v<16;v++)for(let E=0;E<16;E++)m(E,v,g(-v*.006+R(.05)));for(let v=0;v<16;v++)m(v,10,g(-.22));for(const v of[1,5,9,13])m(v,9,g(.18)),m(v,11,g(.12));break;case It:p(g(-.03)),T(12,.06);for(let v=0;v<16;v++)m(v,0,g(-.22)),m(v,15,g(-.22)),m(0,v,g(-.22)),m(15,v,g(-.22));e.strokeStyle=g(.08),e.strokeRect(u+3.5,h+2.5,8,10);for(let v=7;v<=9;v++)m(12,v,g(.3));break;case Ct:p(g(-.03)),T(12,.06);for(let v=0;v<16;v++)m(v,0,g(-.22)),m(v,15,g(-.22)),m(0,v,g(-.22)),m(15,v,g(-.22));for(let v=4;v<=11;v++)for(let E=5;E<=10;E++)m(E,v,g(-.3,1,-.1,-.02,.06));e.strokeStyle=g(.14),e.strokeRect(u+4.5,h+3.5,7,9);break;case St:for(let v=0;v<16;v++)m(0,v,g(-.1,.9)),m(1,v,g(.05,.85)),m(2,v,g(-.15,.7));m(1,7,g(.3,.9)),m(1,8,g(.3,.9));break;case Qt:p(g(-.25));for(let v=5;v<=10;v++)for(let E=5;E<=10;E++)m(E,v,g(v>5&&v<10&&E>5&&E<10?.38:.2));for(let v=4;v<=11;v++)m(v,4,g(-.15)),m(v,11,g(-.15));break;case Xt:p(g(0));for(let v=0;v<16;v++)for(let E=0;E<16;E++)m(E,v,g((v%3===0?-.06:.03)+R(.05)));for(const[v,E]of[[2,2],[13,2],[2,13],[13,13]])m(v,E,g(.2));break;case ei:p(g(-.25)),T(10,.08);for(let v=-3;v<=3;v++){const E=3-Math.abs(v);for(let A=-E;A<=E;A++)m(8+A,8+v,g(v===0?0:.05,1))}m(8,7,g(.3,1)),m(7,8,g(.2,1));break;case Ki:p(g(0));for(const v of[5,11])for(let E=0;E<16;E++)m(E,v,g(-.2));T(25,.14);for(let v=0;v<6;v++)m(t.int(3,12),t.int(0,4),g(.1));break;case ci:p(g(-.1));for(let v=0;v<16;v+=2)m(v,13,g(.15,1,.02,-.02,0)),m(v+1,14,g(.08));for(let v=2;v<12;v++)m(v,14-v+2,g(.05,1,-.1,-.15,-.25)),m(v,v-1,g(0,1,-.12,-.18,-.3));for(let v=5;v<=10;v++)for(let E=6;E<=9;E++)m(E,v,g(v<8?.3:.18,1,.25,-.05,-.3));m(7,6,g(.45,1,.3,.1,-.25)),m(8,5,g(.4,1,.25,.05,-.25));break;case di:p(g(0,.72));for(const v of[2,6,10,14])for(let E=0;E<16;E++)t.next()>.45&&m(E,v+(E%4<2?0:1),g(.15,.8));T(10,.08);break;case Yr:p(g(R(.06)));for(const v of[3,7,11])for(let E=0;E<16;E++)m(E,v,g(-.18));for(let v=0,E=0;E<16;E+=4,v++)for(let A=v%2*4;A<16;A+=8)for(let L=E;L<E+3;L++)m(A,L,g(-.15));break;case $i:p(g(-.35,1,.05,0,.1));for(let v=0;v<24;v++)m(t.int(0,15),t.int(0,15),g(-.25,1,.1,0,.18));for(let v=4;v<=11;v++)for(let E=4;E<=11;E++){const A=Math.max(Math.abs(v-7.5),Math.abs(E-7.5));A>=3.5?m(v,E,g(.12,1,.55,.15,.85)):m(v,E,g(.3+(3-A)*.15,1,.75,.3,1))}break;case gr:p(g(-.08)),T(10,.05);for(const v of[1,3,5])for(let E=2;E<=13;E++)m(E,v,g(-.25));for(let v=4;v<=11;v++)for(let E=7;E<=14;E++){const A=Math.max(Math.abs(v-7.5),Math.abs(E-10.5));A>=3.2?m(v,E,g(.12)):m(v,E,g(.22+(3-A)*.1,1,-.05,.15,.2))}break;case Gt:p(g(-.02)),T(18,.07);for(let v=0;v<16;v++)m(v,0,g(-.28)),m(v,7,g(-.24)),m(v,15,g(-.3));for(let v=0;v<16;v++)m(v,4,"rgba(148,154,166,1)"),m(v,5,"rgba(120,126,138,1)");for(let v=2;v<5;v++)for(const E of[7,8])m(E,v,"rgba(200,205,215,1)");m(7,6,"rgba(40,42,48,1)"),m(8,6,"rgba(40,42,48,1)");break}};for(const l of i)a(l);const o=new Iu(r);return o.flipY=!1,o.magFilter=o.minFilter=ri,o.generateMipmaps=!1,o.colorSpace=Vt,o}const Cc=[];[Ni,fr,yi,Xr,yn,qr,mr,Mn,jr,Jt,It,Ct,Qt,Xt,ei,Ki,ci,di,Yr,St,$i,gr,Gt].forEach((r,e)=>Cc[r]=e);const ss=kr*ii,kl=r=>{const e=Cc[r]??0;return[e%kr*ii,(e/kr|0)*ii]};class $g{constructor(e){Y(this,"scene",new wu);Y(this,"camera");Y(this,"three");Y(this,"chunkMeshes",new Map);Y(this,"group",new Ur);Y(this,"entityGroup",new Ur);Y(this,"sun");Y(this,"hemi");Y(this,"stars");Y(this,"sunDisc");Y(this,"moonDisc");Y(this,"highlight");Y(this,"renderDistance",7);Y(this,"atlas",Kg());Y(this,"matOpaque",new hs({map:this.atlas,vertexColors:!0,side:Ft}));Y(this,"matEmissive",new dn({map:this.atlas,vertexColors:!0,side:Ft}));Y(this,"matTrans",new hs({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ft}));Y(this,"torch");Y(this,"dynLights",[]);this.three=new bg({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),e.appendChild(this.three.domElement),this.camera=new Wt(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new ul(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.sun=new ku(16777215,1),this.hemi=new Ou(12571878,9073749,.55),this.scene.add(this.sun,this.hemi),this.scene.fog=new fo(14207392,40,this.renderDistance*Le);const t=new Yt,i=[];for(let s=0;s<500;s++){const a=Math.random()*Math.PI*2,o=Math.acos(Math.random()*2-1);i.push(Math.sin(o)*Math.cos(a)*400,Math.abs(Math.cos(o))*400,Math.sin(o)*Math.sin(a)*400)}t.setAttribute("position",new Tt(i,3)),this.stars=new Lu(t,new fc({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new jt(new ys(24,24),new dn({color:16771504,fog:!1,side:Ft,toneMapped:!1})),this.moonDisc=new jt(new ys(15,24),new dn({color:14213877,fog:!1,side:Ft,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const n=new pr(1.002,1.002,1.002);this.highlight=new Pu(new Du(n),new pc({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(e){this.three.setPixelRatio(e==="low"?.75:e==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const e of this.chunkMeshes.values())for(const t of e)this.group.remove(t),t.geometry.dispose();this.chunkMeshes.clear()}addPointLight(e,t,i,n){if(this.dynLights.length>=12||this.dynLights.some(a=>a.x===e&&a.y===t&&a.z===i))return;const s=new ul(n==="lamp"?16773296:n==="fire"?16745280:9427199,n==="lamp"?.9:n==="fire"?1.1:.8,n==="lamp"?12:n==="fire"?9:10,1.3);s.position.set(e+.5,t+.6,i+.5),this.scene.add(s),this.dynLights.push({x:e,y:t,z:i,light:s,flame:n==="fire"})}removePointLight(e,t,i){const n=this.dynLights.findIndex(s=>s.x===e&&s.y===t&&s.z===i);n<0||(this.scene.remove(this.dynLights[n].light),this.dynLights.splice(n,1))}dispose(){this.resetChunkMeshes();for(const e of this.dynLights)this.scene.remove(e.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(e){const t=(e-.25)*Math.PI*2,i=Math.sin(t),n=qi.clamp(i*2.2,0,1),s=qi.clamp(1-Math.abs(i)*5,0,1),a=new Fe(660006),o=new Fe(13201213),l=new Fe(12570592),c=a.clone().lerp(l,n);s>0&&c.lerp(o,s*.7);const u=new Fe(16767392).lerp(new Fe(16743231),s);return{sky:c,sunColor:u,sunElev:i,sunI:Math.max(.06,i*1.15)}}updateSky(e,t){const i=e%qt/qt,n=this.keyframe(i);this.scene.background=n.sky,this.scene.fog.color.copy(n.sky),this.scene.fog.far=this.renderDistance*Le*.98,this.sun.color.copy(n.sunColor),this.sun.intensity=n.sunI,n.sunElev<0&&(this.sun.color.setHex(10335464),this.sun.intensity=.28),this.sun.position.set(t.x+Math.cos((i-.25)*Math.PI*2)*100,t.y+n.sunElev*100,t.z+40),this.hemi.intensity=.22+n.sunI*.35,this.stars.material.opacity=Math.max(0,1-n.sunI*3),this.stars.position.set(t.x,t.y,t.z);const s=(i-.25)*Math.PI*2,a=430;this.sunDisc.position.set(t.x+Math.cos(s)*a,t.y+Math.sin(s)*a,t.z+a*.4),this.moonDisc.position.set(t.x-Math.cos(s)*a,t.y-Math.sin(s)*a,t.z-a*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(s)>-.12,this.moonDisc.visible=Math.sin(s)<.12,this.torch.intensity=.12+(1-Math.min(1,n.sunI))*.85;for(const o of this.dynLights)o.flame&&(o.light.intensity=.9+bc(e*5.3+o.x*3.1+o.z,7)*.45);return n}setHighlight(e){if(!e){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(e.x+.5,e.y+.5,e.z+.5)}rebuildDirty(e){let t=3;for(const i of e.dirty){if(t<=0)break;this.buildChunk(e,i),e.dirty.delete(i),t--}}ensureChunks(e,t,i){for(let n=-this.renderDistance;n<=this.renderDistance;n++)for(let s=-this.renderDistance;s<=this.renderDistance;s++){const a=hn(t+n,i+s);this.chunkMeshes.has(a)||e.markDirty(t+n,i+s)}}buildChunk(e,t){const[i,n]=t.split(",").map(Number),s=e.chunk(i,n),a=[],o=[],l=[],c=[],u=[],h=[],d=[],f=[],_=[],g=[],m=[],p=[];for(let v=0;v<Le;v++)for(let E=0;E<Le;E++)for(let A=0;A<Dt;A++){const L=s[(v*Le+E)*Dt+A];if(L===pt)continue;if(L===It||L===Ct||L===St){this.emitDoor(a,o,l,c,e,v,A,E,i*Le,n*Le,L);continue}const S=Jr[L],M=S.emissive,P=S.transparent,F=P?_:M?u:a,V=P?g:M?h:o,W=P?m:M?d:l,G=P?p:M?f:c,[H,Q]=kl(L);for(const z of Yg){const te=v+z.dir[0],ce=A+z.dir[1],be=E+z.dir[2];if(!Gg(e,i*Le+te,ce,n*Le+be,L))continue;const we=F.length/3,Ye=M?1:z.shade;for(const He of z.corners)F.push(v+He[0],A+He[1],E+He[2]),V.push(Ye,Ye,Ye),G.push((H+.5+He[z.uv[0]]*(ii-1))/ss,(Q+.5+He[z.uv[1]]*(ii-1))/ss);W.push(we,we+1,we+2,we,we+2,we+3)}}const R=this.chunkMeshes.get(t);if(R)for(const v of R)this.group.remove(v),v.geometry.dispose();const T=[],b=(v,E,A,L,S)=>{if(v.length===0)return;const M=new Yt;M.setAttribute("position",new Tt(v,3)),M.setAttribute("color",new Tt(E,3)),M.setAttribute("uv",new Tt(L,2)),M.setIndex(A),M.computeVertexNormals();const P=new jt(M,S);P.position.set(i*Le,0,n*Le),this.group.add(P),T.push(P)};b(a,o,l,c,this.matOpaque),b(u,h,d,f,this.matEmissive),b(_,g,m,p,this.matTrans),this.chunkMeshes.set(t,T)}emitDoor(e,t,i,n,s,a,o,l,c,u,h){const d=c+a,f=u+l,_=h===Ct||h===St&&s.get(d,o-1,f)===St,g=kl(_?Ct:It),m=h===St,p=!(Nt(s.get(d-1,o,f))||Nt(s.get(d+1,o,f)))&&(Nt(s.get(d,o,f-1))||Nt(s.get(d,o,f+1))),R=p?!Nt(s.get(d-1,o,f)):!Nt(s.get(d,o,f-1)),T=p?!Nt(s.get(d+1,o,f)):!Nt(s.get(d,o,f+1)),b=d+f&1;let v,E;b&&T?(v=1,E=1):!b&&R?(v=0,E=-1):T?(v=1,E=1):(v=0,E=-1);const A=s.doorSwing.get(d+","+f);A&&(E=A);const L=.04,S=.96,M=v?.84:.02,P=v?.98:.16,F=L,V=v?.98:.02,W=(Q,z,te)=>{const ce=e.length/3;for(let be=0;be<4;be++){let[we,Ye,He]=Q[be];if(m){const Ke=we-F,j=He-V;we=F-E*j,He=V+E*Ke}e.push(p?a+He:a+we,o+Ye,p?l+we:l+He),t.push(te,te,te),n.push((g[0]+.5+z[be][0]*(ii-1))/ss,(g[1]+.5+z[be][1]*(ii-1))/ss)}i.push(ce,ce+1,ce+2,ce,ce+2,ce+3)},G=Q=>(Q-L)/(S-L),H=Q=>(Q-M)/(P-M);W([[L,0,P],[S,0,P],[S,1,P],[L,1,P]],[[G(L),0],[G(S),0],[G(S),1],[G(L),1]],.85),W([[L,0,M],[S,0,M],[S,1,M],[L,1,M]],[[G(S),0],[G(L),0],[G(L),1],[G(S),1]],.7),W([[S,0,M],[S,0,P],[S,1,P],[S,1,M]],[[H(M),0],[H(P),0],[H(P),1],[H(M),1]],.6),W([[L,0,M],[L,0,P],[L,1,P],[L,1,M]],[[H(P),0],[H(M),0],[H(M),1],[H(P),1]],.6),W([[L,1,M],[S,1,M],[S,1,P],[L,1,P]],[[G(L),H(M)],[G(S),H(M)],[G(S),H(P)],[G(L),H(P)]],1),W([[L,0,M],[S,0,M],[S,0,P],[L,0,P]],[[G(L),H(P)],[G(S),H(P)],[G(S),H(M)],[G(L),H(M)]],.45)}addEntityMesh(e,t,i,n=.35){const s=new jt(new pr(n,n,n),new hs({color:i}));return s.position.set(...t),s.userData.eid=e,this.entityGroup.add(s),s}removeEntityMesh(e){const t=this.entityGroup.children.find(i=>i.userData.eid===e);t&&(this.entityGroup.remove(t),t.geometry.dispose())}moveEntityMesh(e,t){const i=this.entityGroup.children.find(n=>n.userData.eid===e);i&&i.position.set(...t)}entityMesh(e){return this.entityGroup.children.find(t=>t.userData.eid===e)}render(){this.three.render(this.scene,this.camera)}}const at=r=>r,Zg=(r,e)=>`${r.charAt(0).toUpperCase()+r.slice(1)} (tier ${e}). Higher tiers break faster and unlock harder blocks.`,fi=(r,e,t,i)=>at({id:`${t}_${r}`,name:`${t.charAt(0).toUpperCase()+t.slice(1)} ${r}`,desc:Zg(r,e),w:1,h:2,mass:1.2+e*.8,tool:{type:r,tier:e},color:i}),Jg=[at({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Ni,color:"#d4b880"}),at({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:fr,color:"#c2a670"}),at({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:yi,color:"#736d69"}),at({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Xr,color:"#8d8680"}),at({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:yn,color:"#6b5238"}),at({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:qr,color:"#d9dbd6"}),at({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:mr,color:"#61492f"}),at({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:Mn,color:"#a6cfe6"}),at({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:jr,color:"#8cc0a0"}),at({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:Jt,color:"#858a99"}),at({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:It,color:"#999fa8"}),at({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:Qt,color:"#fff0a0"}),at({id:"metal",name:"Metal Rod",desc:"Salvaged from the wreck. The backbone of every tool.",w:1,h:1,mass:1,block:Xt,color:"#9aa0aa"}),at({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:ei,color:"#66e5f0"}),at({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list.",w:1,h:2,mass:6,block:Ki,color:"#806647"}),at({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:ci,color:"#e67333"}),at({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:gr,color:"#59bfcc"}),at({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:Yr,color:"#b3956b"}),at({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Gt,color:"#8a6d3b"}),at({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),at({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),at({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),at({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:$i,color:"#c468e8"}),fi("pickaxe",1,"wood","#a8834f"),fi("pickaxe",2,"stone","#8d8680"),fi("pickaxe",3,"metal","#9aa0aa"),fi("shovel",1,"wood","#a8834f"),fi("shovel",2,"stone","#8d8680"),fi("shovel",3,"metal","#9aa0aa"),fi("axe",1,"wood","#a8834f"),fi("axe",2,"stone","#8d8680"),fi("axe",3,"metal","#9aa0aa"),fi("disassembler",1,"metal","#c0c8d8"),at({id:"backpack1",name:"Backpack I",desc:"Inventory grid grows to 4×5. Weight limit +20 kg.",w:2,h:2,mass:2,color:"#7a5a3a"})],dt=Object.fromEntries(Jg.map(r=>[r.id,r])),Pc={};for(const r of Object.values(dt))r.block!==void 0&&(Pc[r.block]=r.id);Pc[Ct]="door";function Vi(r){const e=dt[r.itemId];return r.rot?{w:e.h,h:e.w}:{w:e.w,h:e.h}}class zl{constructor(){Y(this,"slots",[]);Y(this,"w",3);Y(this,"h",4);Y(this,"baseLimit",30);Y(this,"bonusLimit",0);Y(this,"selected",0);this.addItem("canister_full",2)}capacity(){return{w:this.w,h:this.h}}setBackpack(e,t,i){const n=this.slots;this.w=e,this.h=t,this.bonusLimit=i,this.slots=[];for(const s of n)this.addItem(s.itemId,s.count)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let e=0;for(const t of this.slots)e+=dt[t.itemId].mass*t.count;return e}occupied(e,t,i){for(const n of this.slots){if(n===i)continue;const s=Vi(n);if(e>=n.x&&e<n.x+s.w&&t>=n.y&&t<n.y+s.h)return n}return null}fits(e,t,i,n,s){if(e<0||t<0||e+i>this.w||t+n>this.h)return!1;for(let a=0;a<n;a++)for(let o=0;o<i;o++)if(this.occupied(e+o,t+a,s))return!1;return!0}move(e,t,i){const n=Vi(e);return t===e.x&&i===e.y?!0:this.fits(t,i,n.w,n.h,e)?(e.x=t,e.y=i,!0):!1}rotate(e){const t=Vi(e);return t.w===t.h||!this.fits(e.x,e.y,t.h,t.w,e)?!1:(e.rot=!e.rot,!0)}addItem(e,t=1){const i=dt[e],n=i.w===i.h?[[i.w,i.h,!1]]:[[i.w,i.h,!1],[i.h,i.w,!0]];for(let s=0;s<t;s++){let a=!1;for(const[o,l,c]of n){for(let u=0;u<=this.h-l&&!a;u++)for(let h=0;h<=this.w-o&&!a;h++){let d=!0;for(let f=0;f<l&&d;f++)for(let _=0;_<o&&d;_++)this.occupied(h+_,u+f)&&(d=!1);d&&(this.slots.push(c?{itemId:e,count:1,x:h,y:u,rot:!0}:{itemId:e,count:1,x:h,y:u}),a=!0)}if(a)break}if(!a)return t-s}return 0}removeItem(e,t=1){let i=0;for(let n=this.slots.length-1;n>=0&&i<t;n--){const s=this.slots[n];if(s.itemId!==e)continue;const a=Math.min(s.count,t-i);s.count-=a,i+=a,s.count===0&&this.slots.splice(n,1)}return i}countOf(e){let t=0;for(const i of this.slots)i.itemId===e&&(t+=i.count);return t}has(e,t=1){return this.countOf(e)>=t}selectedSlot(){return this.slots[this.selected]??null}cycle(e){if(this.slots.length===0){this.selected=0;return}this.selected=((this.selected+e)%this.slots.length+this.slots.length)%this.slots.length}}const Qg=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0}],e_=[{in:"sand",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"}];function Lc(r,e){return Object.entries(e.needs).every(([t,i])=>r.has(t,i))}function t_(r,e){if(!Lc(r,e))return null;for(const[t,i]of Object.entries(e.needs))r.removeItem(t,i);return r.addItem(e.out,e.count)}const En=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"day4",kind:"day",title:"Day Walker",desc:"Survive until the dawn of day 4.",goal:1,reward:{item:"catalyst",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"canister_full",n:2}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it within reach of a Save Beacon.",goal:1}];function i_(){return{i:0,p:En.map(()=>0)}}function r_(r){const e=i_();if(!r)return e;e.i=Math.max(0,Math.min(En.length,r.i|0));for(let t=0;t<e.p.length;t++){const i=En[t].goal;e.p[t]=Math.max(0,Math.min(i,(r.p&&r.p[t])|0))}return e}function fs(r){return r.i<En.length?En[r.i]:null}function n_(r,e,t=1){const i=fs(r);if(!i||i.kind!==e||r.p[r.i]>=i.goal||(r.p[r.i]=Math.min(i.goal,r.p[r.i]+t),r.p[r.i]<i.goal))return null;const n=i;return r.i++,n}const Ic="sotf:index",Dc="sotf:settings",Uc="sotf:best",Hl={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1};function s_(){try{return{...Hl,...JSON.parse(localStorage.getItem(Dc)||"{}")}}catch{return{...Hl}}}function a_(r){localStorage.setItem(Dc,JSON.stringify(r))}function Sn(){return Number(localStorage.getItem(Uc)||0)}function Gl(r){r>Sn()&&localStorage.setItem(Uc,String(r))}function ws(){try{return JSON.parse(localStorage.getItem(Ic)||"[]")}catch{return[]}}function Mo(r){localStorage.setItem(Ic,JSON.stringify(r))}function Nc(r,e){const t={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:r||e||"world",seedStr:e,updated:Date.now()},i=ws();return i.unshift(t),Mo(i),t}function o_(r){Mo(ws().filter(e=>e.id!==r)),localStorage.removeItem("sotf:w:"+r)}function Oc(r,e){try{localStorage.setItem("sotf:w:"+r.id,JSON.stringify(e));const t=ws(),i=t.find(n=>n.id===r.id);return i&&(i.updated=Date.now(),Mo(t)),!0}catch{return!1}}function Fc(r){try{const e=localStorage.getItem("sotf:w:"+r);return e?JSON.parse(e):null}catch{return null}}function Bc(r,e){const t=new Blob([JSON.stringify({meta:r,run:e})],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(t),i.download=`${r.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,i.click(),URL.revokeObjectURL(i.href)}async function l_(r){var i,n;const e=JSON.parse(await r.text());if(!e||((i=e.run)==null?void 0:i.v)!==1)throw new Error("Not a Survival of the Fittest world file.");const t=Nc(((n=e.meta)==null?void 0:n.name)??"imported",e.run.seedStr);return Oc(t,e.run),t}const mi=r=>document.getElementById(r);let Vl=0;function Ve(r){const e=mi("toast");e.textContent=r,e.style.opacity="1",clearTimeout(Vl),Vl=setTimeout(()=>e.style.opacity="0",2600)}function c_(r){const e=mi("prompt");if(!r){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=r}function h_(r){mi("vision-water").style.opacity=r?"1":"0"}function u_(){const r=document.querySelector("#bar-water .safe");r.style.left="25%",r.style.right="0%";const e=document.querySelector("#bar-heat .safe");e.style.left=((Tc-pn)/(ps-pn)*100).toFixed(1)+"%",e.style.right=((ps-Ac)/(ps-pn)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none"}function Wl(r,e,t,i,n,s){const a=p=>document.querySelector(`#${p} .fill`);a("bar-health").style.width=r.health+"%",a("bar-water").style.width=r.water+"%";const o=(r.body-pn)/(ps-pn)*100;a("bar-heat").style.width=o+"%";const l=t%qt/qt,c=String(Math.floor(l*24)).padStart(2,"0"),u=String(Math.floor(l*24%1*60)).padStart(2,"0");mi("clock-day").textContent="Day "+i,mi("clock-time").textContent=c+":"+u;const h=p=>n==="C"?Math.round(p)+"°C":Math.round(p*9/5+32)+"°F";mi("clock-temp").textContent=`air ${h(r.lastAmbientEff)}  body ${h(r.body)}`;const d=e.selectedSlot();mi("held").textContent=d?dt[d.itemId].name:"—";const f=e.weight(),_=e.weightLimit(),g=mi("weight");g.textContent=`${f.toFixed(1)} / ${_} kg`,g.classList.toggle("encumbered",f>_),mi("vision-vignette").style.opacity=String(r.vision*.85);const m=r.water<5||r.health<30;mi("vision-red").style.opacity=m?String(.35+.25*Math.sin(s/220)):"0"}const on=r=>r===It||r===Ct,d_=.45,rt=class rt{constructor(e,t,i,n,s){Y(this,"seed");Y(this,"world");Y(this,"survival");Y(this,"player");Y(this,"inv",new zl);Y(this,"renderer");Y(this,"timeSec");Y(this,"playSec",0);Y(this,"entities",[]);Y(this,"caches",[]);Y(this,"chests",new Map);Y(this,"chestInv",null);Y(this,"gridFocus","inv");Y(this,"campCharges",new Map);Y(this,"beaconMarks",[]);Y(this,"collected",new Set);Y(this,"running",!1);Y(this,"paused",!1);Y(this,"f1Paused",!1);Y(this,"escAt",0);Y(this,"ui",null);Y(this,"openCacheId",null);Y(this,"openStation",null);Y(this,"breaking",null);Y(this,"mouseDown",!1);Y(this,"breakMsg",!1);Y(this,"keys",new Set);Y(this,"stick",{x:0,y:0});Y(this,"mobile",matchMedia("(pointer: coarse)").matches);Y(this,"speedMul",1);Y(this,"regGlow",new Map);Y(this,"regGlowMat",null);Y(this,"regTick",-1);Y(this,"mobileJump",!1);Y(this,"entitySeq",1);Y(this,"audioTickAcc",0);Y(this,"autosaveAcc",0);Y(this,"raf",0);Y(this,"last",0);Y(this,"bound",new Map);Y(this,"onDeathCb",null);Y(this,"deathCause","");Y(this,"quests");Y(this,"questShown","");Y(this,"pods",[]);Y(this,"won",!1);Y(this,"temp",null);this.meta=e,this.settings=n,this.audio=s,this.seed=Tg(e.seedStr||e.id),this.world=new zg(this.seed),this.survival=new jg(this.seed^7),this.quests=r_(t==null?void 0:t.quest),this.renderer=new $g(i),this.player=new Wg(this.world),this.timeSec=(t==null?void 0:t.time)??qt*.7,this.playSec=(t==null?void 0:t.playSec)??0,t?this.restore(t):this.spawnStarterEntities(),this.world.get(-6,35,0)===Qt&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===Qt&&this.renderer.addPointLight(6,35,0,"lamp"),u_(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(n)}spawnStarterEntities(){this.world.gen.canisters.forEach((e,t)=>{if(!e.buried)return;const i=Math.round(Mi(this.seed,e.x,e.z));this.entities.push({id:this.entitySeq++,x:e.x+.5,y:i,z:e.z+.5,itemId:"canister_full",count:1,buried:e.buried,buriedAt:e.buried?[e.x,i,e.z]:void 0,srcIndex:t})}),this.spawnStarterChest()}spawnStarterChest(){const[e,t,i]=[3,31,0];this.world.get(e,t,i)===pt&&(this.world.set(e,t,i,Gt),this.chests.set(rt.chestKey([[e,t,i]]),[{itemId:"canister_full",count:1,x:0,y:0},{itemId:"canister_full",count:1,x:1,y:0},{itemId:"canister_full",count:1,x:2,y:0}]))}chestCluster(e,t,i){const n=new Set([`${e},${t},${i}`]),s=[[e,t,i]],a=[];for(;s.length;){const o=s.pop();a.push(o);for(const[l,c,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const h=o[0]+l,d=o[1]+c,f=o[2]+u,_=`${h},${d},${f}`;n.has(_)||this.world.get(h,d,f)!==Gt||(n.add(_),s.push([h,d,f]))}}return a}static chestKey(e){return[...e].sort((t,i)=>t[0]-i[0]||t[1]-i[1]||t[2]-i[2]).map(t=>t.join(",")).join(";")}static chestDims(e){return e<=3?[3*e,3]:[9,3+(e-3)]}static placeSlotFree(e,t){const i=dt[t.itemId],n=i.w===i.h?[!!t.rot]:[!!t.rot,!t.rot];for(const s of n){const a=s?i.h:i.w,o=s?i.w:i.h;for(let l=0;l+o<=e.h;l++)for(let c=0;c+a<=e.w;c++)if(e.fits(c,l,a,o))return t.x=c,t.y=l,t.rot=s||void 0,e.slots.push(t),!0}return!1}emptyChestGrid(e){const t=new zl;t.slots=[];const[i,n]=rt.chestDims(e);return t.w=i,t.h=n,t.baseLimit=1e9,t}openChest(e,t,i){const n=this.chestCluster(e,t,i),s=rt.chestKey(n);this.chests.has(s)||this.chests.set(s,[]);const a=this.emptyChestGrid(n.length);a.slots=this.chests.get(s),this.chestInv=a,this.gridFocus="chest",this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(e,t,i,n){const s=this.chestCluster(e,t,i),a=this.emptyChestGrid(s.length);for(const o of n)rt.placeSlotFree(a,o)||this.dropEntity(o.itemId,o.count,2);a.slots.length&&this.chests.set(rt.chestKey(s),a.slots),s.length>1&&Ve(`Chests linked — one ${a.w}×${a.h} inventory.`)}cacheColor(e){return e.kind==="chest"?9071931:7035460}cacheMeshPos(e){return[e.x,e.y+(e.kind==="chest"?.36:.5),e.z]}restore(e){this.world.loadDeltas(e.deltas),this.player.pos.set(e.player.x,e.player.y,e.player.z),this.player.yaw=e.player.yaw,this.player.pitch=e.player.pitch,this.survival.health=e.survival.health,this.survival.water=e.survival.water,this.survival.body=e.survival.body,this.inv.slots=e.inventory.slots.map(a=>({...a}));const t=this.inv.slots.filter(a=>a.count>1);if(t.length){this.inv.slots=this.inv.slots.filter(a=>a.count===1);for(const a of t)this.giveOrDrop(a.itemId,a.count)}this.inv.selected=e.inventory.selected,e.inventory.w!==this.inv.w||e.inventory.h!==this.inv.h?(this.inv.w=e.inventory.w,this.inv.h=e.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=e.inventory.bonusLimit):this.inv.bonusLimit=e.inventory.bonusLimit,this.beaconMarks=e.beaconMarks??[],this.collected=new Set(e.collected??[]);const i=this.collected;let n=0;const s=[];this.world.gen.canisters.forEach(a=>{if(a.buried&&!i.has(n)){const o=Math.round(Mi(this.seed,a.x,a.z));s.push({id:this.entitySeq++,x:a.x+.5,y:o,z:a.z+.5,itemId:"canister_full",count:1,buried:a.buried,buriedAt:a.buried?[a.x,o,a.z]:void 0,srcIndex:n})}n++});for(const a of e.entities)s.push({id:this.entitySeq++,...a});this.entities=s;for(const a of e.caches){const o={id:this.entitySeq++,x:a.x,y:a.y,z:a.z,kind:a.kind??"death",items:a.items.map(l=>({...l}))};this.caches.push(o),o.items.length&&this.renderer.addEntityMesh(o.id,this.cacheMeshPos(o),this.cacheColor(o),.7)}this.campCharges=new Map(Object.entries(e.campfires??{}).map(([a,o])=>[a,o])),this.chests=new Map((e.chests??[]).map(a=>[a.cells,a.slots.map(o=>({...o}))])),this.pods=(e.pods??[]).map(a=>({...a})),this.won=!!e.won;for(const[a,o]of this.world.deltas){const[l,c]=a.split(",").map(Number);for(const[u,h]of o){if(h!==Qt&&h!==ci)continue;const d=Math.floor(u/(Le*Dt)),f=u%(Le*Dt);this.renderer.addPointLight(l*Le+d,f%Dt,c*Le+Math.floor(f/Dt),h===Qt?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(e=>({...e})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(e=>!e.buried).map(e=>({x:e.x,y:e.y,z:e.z,itemId:e.itemId,count:e.count})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(e=>({x:e.x,y:e.y,z:e.z,kind:e.kind,items:e.items.map(t=>({...t}))})),chests:[...this.chests].map(([e,t])=>({cells:e,slots:t.map(i=>({...i}))})),campfires:Object.fromEntries(this.campCharges),deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(e){const t=Math.floor(this.timeSec/qt);this.timeSec=(t+e)*qt}saveNow(e=!1){if(this.isGuest)return e&&Ve("Guest worlds are never saved."),!1;const t=Oc(this.meta,this.snapshot());return e&&Ve(t?"Game saved.":"Storage full — use Export World."),t}exportWorld(){Bc(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const e=t=>{if(!this.running)return;this.raf=requestAnimationFrame(e);const i=Math.min(.1,(t-this.last)/1e3);this.last=t,this.frame(i,t)};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[e,t]of this.bound)removeEventListener(e,t);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(e){this.settings=e,this.renderer.renderDistance=e.renderDist,this.renderer.camera.fov=e.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(e.quality),this.audio.setVolume(e.volume),this.renderer.resetChunkMeshes();const t=Math.floor(this.player.pos.x/16),i=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,t,i)}dayNumber(){return 1+Math.floor(this.timeSec/qt)}questBump(e,t=1){const i=n_(this.quests,e,t);if(!i){e==="mine"&&this.renderQuest();return}Ve(`Quest complete: ${i.title}`),i.reward&&this.crashPod(i.reward.item,i.reward.n),this.audio.savePing(),i.kind==="finish"&&this.win(),this.renderQuest(),this.saveNow(!0)}crashPod(e,t){const i=this.player.pos;this.pods.push({x:Math.round(i.x)+2,z:Math.round(i.z)+1,t:3,itemId:e,n:t}),this.audio.warn(),setTimeout(()=>{this.running&&Ve("⚠ Crash pod inbound — look up.")},1200)}podFrame(e){for(let t=this.pods.length-1;t>=0;t--){const i=this.pods[t];if(i.t-=e,i.t>0)continue;const n=Math.round(Mi(this.seed,i.x,i.z));this.entities.push({id:this.entitySeq++,x:i.x+.5,y:n+10,z:i.z+.5,itemId:i.itemId,count:i.n,fall:10-d_}),this.pods.splice(t,1)}}questFrame(){const e=fs(this.quests);if(!e)return;const t=this.player.pos;if(e.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(e.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(t.x),Math.floor(t.z)))this.questBump("oasis");else if(e.kind==="water_home"&&this.inv.slots.some(i=>i.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(i=>this.world.get(i.x,i.y,i.z)===ei&&(i.x+.5-t.x)**2+(i.y+1-t.y)**2+(i.z+.5-t.z)**2<25))this.questBump("water_home");else if(e.kind==="day"&&this.dayNumber()>=4)this.questBump("day");else if(e.kind==="wreck"){const i=this.world.gen.secondShip;(i.x+.5-t.x)**2+(i.z+.5-t.z)**2<169&&this.questBump("wreck")}}renderQuest(){const e=document.getElementById("quest");if(!e)return;const t=fs(this.quests);if(!t){this.questShown!=="done"&&(this.questShown="done",e.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const i=this.quests.p[this.quests.i],n=t.id+":"+i;n!==this.questShown&&(this.questShown=n,e.innerHTML=`<div class="q-title">Quest · ${t.title}${t.goal>1?` (${i}/${t.goal})`:""}</div><div class="q-desc">${t.desc}</div>`+(t.goal>1?`<div class="q-bar"><i style="width:${i/t.goal*100}%"></i></div>`:""))}attach(){const e=(i,n,s=window)=>{s.addEventListener(i,n),this.bound.set(i+(s===window?"":":el"),n)};e("keydown",i=>{const n=i;if(!n.repeat){if(this.keys.add(n.code),n.code==="KeyE"&&this.act(),n.code==="KeyQ"&&this.drink(),n.code==="KeyX"&&this.surge(),n.code==="KeyI"&&this.toggleInv(),n.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const s=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,a=s.selectedSlot();a&&!s.rotate(a)&&(Ve("No room to rotate."),this.audio.error())}this.renderInv()}if(n.code==="Escape"&&this.escape(),n.code.startsWith("Digit")){const s=Number(n.code.slice(5));s>=1&&s<=9&&this.inv.slots[s-1]&&(this.inv.selected=s-1,this.renderHeld())}}}),e("keyup",i=>this.keys.delete(i.code)),document.getElementById("surge-btn").onclick=()=>this.surge();const t=this.renderer.canvasEl();if(!this.mobile)e("click",()=>{!this.paused&&!this.ui&&t.requestPointerLock()},t),e("mousedown",i=>{const n=i;n.button===0?(this.mouseDown=!0,this.breakMsg=!1):n.button===2&&this.place()}),e("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),e("mousemove",i=>{if(document.pointerLockElement!==t||this.ui)return;const n=i;this.player.yaw-=n.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*n.movementY*.0022*this.settings.sens,this.player.pitch=qi.clamp(this.player.pitch,-1.55,1.55)}),e("wheel",i=>{this.inv.cycle(i.deltaY>0?1:-1),this.renderHeld()}),e("contextmenu",i=>i.preventDefault());else{let i=-1,n=0,s=0;t.addEventListener("touchstart",f=>{if(i<0){const _=f.changedTouches[0];i=_.identifier,n=_.clientX,s=_.clientY}f.preventDefault()}),t.addEventListener("touchmove",f=>{for(const _ of f.changedTouches)_.identifier===i&&(this.player.yaw-=(_.clientX-n)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(_.clientY-s)*.005*this.settings.sens,this.player.pitch=qi.clamp(this.player.pitch,-1.55,1.55),n=_.clientX,s=_.clientY);f.preventDefault()});const a=f=>{for(const _ of f.changedTouches)_.identifier===i&&(i=-1)};t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),document.addEventListener("contextmenu",f=>f.preventDefault());const o=document.getElementById("stick"),l=document.getElementById("knob");let c=-1;const u=f=>{const _=o.getBoundingClientRect();for(const g of f.changedTouches)if(g.identifier===c){const m=g.clientX-(_.left+_.width/2),p=g.clientY-(_.top+_.height/2),R=Math.max(1,Math.hypot(m,p)),T=Math.min(R,_.width/2)/(_.width/2);this.stick.x=m/R*T,this.stick.y=p/R*T,l.style.left=38+m/R*T*38+"px",l.style.top=38+p/R*T*38+"px"}};o.addEventListener("touchstart",f=>{c=f.changedTouches[0].identifier,u(f),f.preventDefault()}),o.addEventListener("touchmove",f=>{u(f),f.preventDefault()});const h=()=>{this.stick.x=0,this.stick.y=0,c=-1,l.style.left="38px",l.style.top="38px"};o.addEventListener("touchend",h),o.addEventListener("touchcancel",h);const d=(f,_,g)=>{const m=document.getElementById(f);m.addEventListener("touchstart",p=>{p.preventDefault(),_()}),m.addEventListener("touchend",p=>{p.preventDefault(),g&&g()}),m.addEventListener("touchcancel",()=>{g&&g()})};d("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),d("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),d("m-place",()=>this.place()),d("m-act",()=>this.act()),d("m-drink",()=>this.drink()),d("m-surge",()=>this.surge()),d("m-next",()=>{this.inv.cycle(1),this.renderHeld()}),d("m-inv",()=>this.toggleInv()),d("m-pause",()=>this.escape())}e("beforeunload",()=>this.saveNow()),e("pointerlockchange",()=>{!document.pointerLockElement&&this.running&&!this.paused&&!this.ui&&!this.f1Paused&&performance.now()-this.escAt>400&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),e("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui||this.f1Paused)return;const i=n=>!document.getElementById(n).classList.contains("hidden");i("screen-settings")||i("screen-instructions")||i("screen-death")||i("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document)}escape(){if(this.escAt=performance.now(),this.ui){this.closeUI();return}const e=t=>document.getElementById(t).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win"))){if(!e("screen-instructions")){document.getElementById("screen-instructions").classList.add("hidden"),this.f1Paused?(this.paused=!1,this.f1Paused=!1,this.relock()):this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden"),this.relock());return}if(this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused&&document.pointerLockElement&&document.exitPointerLock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const e=this.renderer.canvasEl().requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&this.requestLock()}frame(e,t){if(this.paused){this.renderer.render();return}this.timeSec+=e,this.playSec+=e;const i=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,i,n),this.renderer.rebuildDirty(this.world);const s=this.renderer.updateSky(this.timeSec,this.player.pos),a=eo(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),o=this.inv.weight()>this.inv.weightLimit();if(!this.ui){let h=this.stick.x,d=-this.stick.y;this.keys.has("KeyW")&&(d+=1),this.keys.has("KeyS")&&(d-=1),this.keys.has("KeyA")&&(h-=1),this.keys.has("KeyD")&&(h+=1);const f=this.keys.has("Space")||this.mobileJump;this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),this.player.update(e,h,d,f,this.speedMul,o),this.survival.update(e,this.world,this.player.pos,{sprinting:this.player.sprinting&&(h!==0||d!==0),overencumbered:o,biome:a,tSec:this.timeSec,sunElev:s.sunElev,inWater:this.player.inWater}),this.updateBreaking(e),this.updatePickups()}this.audio.heartbeat(e,this.survival.health);const l=this.renderer.camera;l.position.copy(this.player.eye()),l.rotation.order="YXZ",l.rotation.set(this.player.pitch,this.player.yaw,0);const c=this.raycastTarget();this.renderer.setHighlight(this.ui?null:(c==null?void 0:c.hit)??null),c_(this.ui?null:this.promptFor(c)),h_(this.player.headUnder);for(const h of this.entities){if(h.fall!==void 0){const f=Math.min(h.fall,14*e);h.y-=f,h.fall-=f,h.fall<=.001&&(h.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(h.id,[h.x,h.y,h.z])}const d=this.renderer.entityMesh(h.id);h.buried&&h.buriedAt&&this.world.get(h.buriedAt[0],h.buriedAt[1],h.buriedAt[2])!==pt?d&&this.renderer.removeEntityMesh(h.id):d||this.renderer.addEntityMesh(h.id,[h.x,h.y,h.z],parseInt(dt[h.itemId].color.slice(1),16))}for(const h of this.caches)!this.renderer.entityMesh(h.id)&&h.items.length&&this.renderer.addEntityMesh(h.id,this.cacheMeshPos(h),this.cacheColor(h),.7);this.regulatorGlow();const u=this.survival.surgeCooldown>0;for(const h of["surge-btn","m-surge"]){const d=document.getElementById(h);d&&d.disabled!==u&&(d.disabled=u)}Wl(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,t),this.podFrame(e),this.questFrame(),this.autosaveAcc+=e,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow()),this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const e=this.player.eye(),t=new D;this.renderer.camera.getWorldDirection(t);let i=Math.floor(e.x),n=Math.floor(e.y),s=Math.floor(e.z);const a=new D(Math.sign(t.x),Math.sign(t.y),Math.sign(t.z)),o=new D(t.x!==0?Math.abs(1/t.x):1/0,t.y!==0?Math.abs(1/t.y):1/0,t.z!==0?Math.abs(1/t.z):1/0),l=(d,f)=>f>0?Math.ceil(d)-d:f<0?d-Math.floor(d):1/0,c=new D(l(e.x,a.x)*o.x,l(e.y,a.y)*o.y,l(e.z,a.z)*o.z);let u=new D(i,n,s),h=null;for(let d=0;d<80;d++){const f=this.world.get(i,n,s);if(f===di&&!h)h={x:i,y:n,z:s};else if(f!==pt&&f!==di)return{hit:{x:i,y:n,z:s},water:h,face:new D(u.x-i,u.y-n,u.z-s)};if(u.set(i,n,s),c.x<c.y&&c.x<c.z?(i+=a.x,c.x+=o.x):c.y<c.z?(n+=a.y,c.y+=o.y):(s+=a.z,c.z+=o.z),new D(i-e.x,n-e.y,s-e.z).length()>5.5)break}return{hit:null,water:h,face:new D(0,0,0)}}promptFor(e){if(!e)return null;if(e.hit&&this.world.get(e.hit.x,e.hit.y,e.hit.z)===Gt)return"E: Open Supply Chest";const t=this.nearestCache();if(t)return t.kind==="chest"?"E: Open supply chest":"E: Open death cache";if(e.hit){const i=this.world.get(e.hit.x,e.hit.y,e.hit.z);if(i===It||i===Ct)return"E: Open door";if(i===St)return"E: Close door";if(i===ei)return"E: Save game (respawn point)";if(i===Ki)return"E: Craft";if(i===ci)return"E: Smelt"}return e.water?"E: Refill canister":null}nearestCache(){for(const e of this.caches)if(e.items.length&&this.player.pos.distanceTo(new D(e.x+.5,e.y+.5,e.z+.5))<2.4)return e;return null}canBreakWith(e){const t=Jr[e];if(t.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const i=this.inv.selectedSlot(),n=i?dt[i.itemId].tool:void 0;return t.tool!==null?!n||n.type!==t.tool?{ok:!1,time:0,why:`need a ${t.tool}`}:n.tier<t.minTier?{ok:!1,time:0,why:`need a tier ${t.minTier} ${t.tool}`}:{ok:!0,time:t.breakTime*Math.pow(.55,n.tier-1)}:{ok:!0,time:t.breakTime*(t.fastTool&&n&&n.type===t.fastTool?Math.pow(.55,n.tier):1)}}showBreakBar(e){const t=document.getElementById("breakbar");if(e===null){t.classList.add("hidden");return}t.classList.remove("hidden"),document.getElementById("breakfill").style.width=e*100+"%"}updateBreaking(e){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const t=this.raycastTarget();if(!(t!=null&&t.hit)){this.breaking=null,this.showBreakBar(null);return}const{x:i,y:n,z:s}=t.hit,a=this.world.get(i,n,s);if(!this.breaking||this.breaking.x!==i||this.breaking.y!==n||this.breaking.z!==s){const o=this.canBreakWith(a);if(!o.ok){o.why&&!this.breakMsg&&(this.breakMsg=!0,Ve(o.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${o.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:i,y:n,z:s,need:o.time,elapsed:0}}this.breaking.elapsed+=e,this.audioTickAcc+=e,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(i,n,s),this.breaking=null,this.showBreakBar(null))}breakBlock(e,t,i){const n=this.world.get(e,t,i);if(this.questBump("mine"),on(n)||n===St){this.world.set(e,t,i,pt);for(const a of[-1,1]){const o=this.world.get(e,t+a,i);(on(o)||o===St)&&this.world.set(e,t+a,i,pt)}this.giveOrDrop("door",1),this.audio.blockBreak();return}if(n===ei){this.world.set(e,t,i,pt),this.beaconMarks=this.beaconMarks.filter(a=>!(a.x===e&&a.y===t&&a.z===i)),Ve("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(n===ci&&this.campCharges.delete(`${e},${t},${i}`),n===Gt){const a=this.chestCluster(e,t,i),o=this.chests.get(rt.chestKey(a))??[];this.chests.delete(rt.chestKey(a)),this.world.set(e,t,i,pt);const l=a.filter(([h,d,f])=>h!==e||d!==t||f!==i),c=[];for(const h of l){const d=this.chestCluster(h[0],h[1],h[2]),f=rt.chestKey(d);c.some(([_])=>_===f)||c.push([f,this.emptyChestGrid(d.length)])}let u=!1;for(const h of o)c.some(([,d])=>rt.placeSlotFree(d,h))||(this.dropEntity(h.itemId,h.count,2),u=!0);for(const[h,d]of c)d.slots.length&&this.chests.set(h,d.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),u&&Ve("The remaining chests were full — some contents fell to the sand.");return}if(n===$i){this.world.set(e,t,i,pt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}(n===Qt||n===ci)&&this.renderer.removePointLight(e,t,i),this.world.set(e,t,i,pt);const s=this.blockItemId(n);s&&this.giveOrDrop(s,1),this.audio.blockBreak()}blockItemId(e){return{1:"sand",2:"sandstone",3:"rock",4:"gravel",5:"dirt",6:"salt",7:"deadwood",8:"glass",9:"insglass",10:"hull",11:"door",13:"lamp",14:"metal",16:"bench",17:"campfire",19:"adobe",21:"engine_core",22:"regulator"}[e]??null}giveOrDrop(e,t){const i=this.inv.addItem(e,t);i>0&&(this.dropEntity(e,i),Ve(`No room: dropped ${dt[e].name}`))}dropEntity(e,t,i=0){const n=this.player.pos,s=-Math.sin(this.player.yaw),a=-Math.cos(this.player.yaw),o=(h,d)=>{const f=Math.floor(n.x+h),_=Math.floor(n.z+d);return!Nt(this.world.get(f,Math.floor(n.y),_))&&!Nt(this.world.get(f,Math.floor(n.y+1),_))},l=[[s*1.8,a*1.8],[-s*1.8,-a*1.8],[a*1.8,-s*1.8],[-a*1.8,s*1.8],[0,0]],[c,u]=l.find(([h,d])=>o(h,d))??[0,0];this.entities.push({id:this.entitySeq++,x:n.x+c,y:n.y+.35,z:n.z+u,itemId:e,count:t,repickAt:c===0&&u===0?this.timeSec+Math.max(i,2.5):this.timeSec+i})}place(){if(this.ui||this.paused)return;const e=this.inv.selectedSlot();if(!e)return;const t=dt[e.itemId];if(t.block===void 0){Ve("Not a placeable block"),this.audio.error();return}const i=this.raycastTarget();if(!(i!=null&&i.hit))return;const n=i.hit.x+i.face.x,s=i.hit.y+i.face.y,a=i.hit.z+i.face.z;if(this.world.get(n,s,a)!==pt)return;if(Nt(t.block)){const l=this.player.pos;if(n+1>l.x-.3&&n<l.x+.3&&a+1>l.z-.3&&a<l.z+.3&&s+1>l.y&&s<l.y+1.8)return}let o=[];if(t.block===Gt){const l=new Set;for(const[c,u,h]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(n+c,s+u,a+h)!==Gt)continue;const d=rt.chestKey(this.chestCluster(n+c,s+u,a+h));l.has(d)||(l.add(d),o.push(...this.chests.get(d)??[]),this.chests.delete(d))}}if(this.world.set(n,s,a,t.block),t.block===It&&this.world.get(n,s+1,a)===pt&&this.world.set(n,s+1,a,Ct),t.block===$i){const l=fs(this.quests);l&&l.kind==="finish"&&([...this.beaconMarks,{x:-4,y:31,z:-1}].some(c=>this.world.get(c.x,c.y,c.z)===ei&&(c.x+.5-n)**2+(c.z+.5-a)**2<100)?this.questBump("finish"):Ve("Too far from a Save Beacon — the relay needs the Core within 10 m."))}t.block===Qt?this.renderer.addPointLight(n,s,a,"lamp"):t.block===ci&&this.renderer.addPointLight(n,s,a,"fire"),t.block===Gt&&this.linkChests(n,s,a,o),e.count-=1,e.count<=0&&this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}act(){if(this.ui||this.paused)return;const e=this.raycastTarget();if(e!=null&&e.hit&&this.world.get(e.hit.x,e.hit.y,e.hit.z)===Gt){this.openChest(e.hit.x,e.hit.y,e.hit.z);return}const t=this.nearestCache();if(t){this.openCacheId=t.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(e){if(e.hit){const{x:i,y:n,z:s}=e.hit,a=this.world.get(i,n,s);if(on(a)||a===St){if(a===St){const o=this.player.pos;if(o.x>i-.2&&o.x<i+1.2&&o.z>s-.2&&o.z<s+1.2){Ve("Step out of the doorway first."),this.audio.error();return}this.world.get(i,n-1,s)===St?(this.world.set(i,n,s,Ct),this.world.set(i,n-1,s,It)):this.world.get(i,n+1,s)===St?(this.world.set(i,n,s,It),this.world.set(i,n+1,s,Ct)):this.world.set(i,n,s,on(this.world.get(i,n+1,s))?Ct:It)}else{const o=Nt(this.world.get(i-1,n,s))||Nt(this.world.get(i+1,n,s)),l=this.player.pos,c=o?l.z-(s+.5):l.x-(i+.5),u=i+","+s;Math.abs(c)>.35?this.world.doorSwing.set(u,c>0?-1:1):this.world.doorSwing.delete(u),this.world.set(i,n,s,St);for(const h of[-1,1])on(this.world.get(i,n+h,s))&&this.world.set(i,n+h,s,St)}this.audio.door();return}if(a===ei){this.beaconMarks.some(o=>o.x===i&&o.y===n&&o.z===s)||this.beaconMarks.push({x:i,y:n,z:s}),this.audio.savePing(),this.saveNow()?Ve("Saved. Death will respawn you at this beacon."):Ve("This world is not saved — the beacon only marks it.");return}if(a===Ki){this.openStation=[i,n,s],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(a===ci){this.openStation=[i,n,s],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}}e.water&&(this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),Ve(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):Ve("You need an empty Water Canister."))}}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){Ve("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const e=this.survival.body;this.survival.drink(),this.survival.body<e-.4&&Ve("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.renderHeld()}surge(){if(this.ui||this.paused)return;const e=this.survival.surge();if(e==="thirsty"){Ve("You need at least 20 water to sweat-surge."),this.audio.error();return}if(e==="cooling"){Ve("Your body is still cooling — wait a moment."),this.audio.error();return}Ve("You force yourself to sweat — evaporation cools your skin. (-15 water)"),this.audio.drink()}regulatorGlow(){const e=Math.floor(this.timeSec*2);if(e===this.regTick)return;this.regTick=e;const t=this.player.pos,i=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z);let a=this.world.roomInfo(i,n,s);if(a.size===0)e:for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++)for(let h=-1;h<=1;h++){const d=this.world.roomInfo(i+c,n+u,s+h);if(d.size>0){a=d;break e}}const o=a.sealed&&a.regulators>0&&a.regulators*Rc>=a.size,l=new Set(o?a.regCells:[]);for(const[c,u]of this.regGlow){if(l.has(c))continue;this.renderer.removeEntityMesh(u);const[h,d,f]=c.split(",").map(Number);this.renderer.removePointLight(h,d,f),this.regGlow.delete(c)}for(const c of l){if(this.regGlow.has(c))continue;const[u,h,d]=c.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new hs({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const f=this.entitySeq++,_=this.renderer.addEntityMesh(f,[u+.5,h+.5,d+.5],9427199,1.03);_.material=this.regGlowMat,this.renderer.addPointLight(u,h,d,"cool"),this.regGlow.set(c,f)}}updatePickups(){const e=this.player.pos;for(let t=this.entities.length-1;t>=0;t--){const i=this.entities[t];if(!(i.buried&&i.buriedAt&&this.world.get(i.buriedAt[0],i.buriedAt[1],i.buriedAt[2])!==pt)){if(i.repickAt!==void 0){if(this.timeSec<i.repickAt)continue;i.repickAt=void 0}if(e.distanceTo(new D(i.x,i.y,i.z))<1.3){const n=this.inv.addItem(i.itemId,i.count);n===0?(i.srcIndex!==void 0&&this.collected.add(i.srcIndex),this.entities.splice(t,1),this.renderer.removeEntityMesh(i.id),this.audio.pickup()):i.count=n}}}}win(){this.won||(this.won=!0,Gl(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`Main Quest complete. Survived ${this.scoreDays().toFixed(1)} days. Best: ${Sn().toFixed(1)} days. The beacon relay is live — rescuers are on their way.`)}die(){this.caches.some(e=>Math.abs(e.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:this.inv.slots.map(e=>({itemId:e.itemId,count:e.count}))}),this.inv.slots=[],this.inv.selected=0,Gl(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${Sn().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/qt}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const e=[...this.beaconMarks].reverse().find(t=>this.world.get(t.x,t.y,t.z)===ei);e?this.player.pos.set(e.x+.5,e.y+1.01,e.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){Ve("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const e of["ui-inventory","ui-craft","ui-cache"])document.getElementById(e).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}renderHeld(){Wl(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now())}renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const e=document.getElementById("chest-section");this.chestInv?(e.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):e.classList.add("hidden");const t=document.getElementById("inv-temp");t.innerHTML="";const i=document.getElementById("btn-drop-temp");if(this.temp){const h=dt[this.temp.itemId];t.classList.add("filled"),t.style.background=h.color,t.textContent=h.name.split(" ")[0].slice(0,6),t.onmousedown=d=>this.startTempDrag(d),i.textContent=`Drop ${this.temp.count>1?this.temp.count+"× ":""}${h.name}`,i.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,this.temp.count,1),this.temp=null,this.audio.place(),this.renderInv())}}else t.classList.remove("filled"),t.style.background="",t.onmousedown=null,i.onclick=null;i.classList.toggle("hidden",!this.temp);const n=document.getElementById("inv-side"),s=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,a=s.selectedSlot(),o=this.temp??a,l=this.inv.weight()+(this.temp?dt[this.temp.itemId].mass*this.temp.count:0),c=this.inv.weightLimit(),u=o?Vi(o):null;if(n.textContent=o?`${dt[o.itemId].name} — ${dt[o.itemId].desc}`:"Click an item to inspect it; drag to move it.",n.textContent+=` Weight ${l.toFixed(1)} / ${c} kg`,o&&u&&u.w!==u.h){const h=document.createElement("button");h.textContent="Rotate",h.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:s.rotate(a)||(Ve("No room to rotate."),this.audio.error()),this.renderInv()},n.appendChild(h)}if(a&&a.itemId==="backpack1"){const h=document.createElement("button");h.textContent="Wear backpack",h.onclick=()=>{s.removeItem("backpack1",1),this.inv.setBackpack(4,5,20),Ve("Backpack I equipped: grid 4×5, +20 kg."),this.renderInv()},n.appendChild(h)}else if(a)if(s===this.chestInv){const h=document.createElement("button");h.textContent="Move to pack",h.onclick=()=>{const d=s.slots.indexOf(a);s.slots.splice(d,1),rt.placeSlotFree(this.inv,a)||(s.slots.splice(d,0,a),Ve("No room in your pack."),this.audio.error()),this.renderInv()},n.appendChild(h)}else{const h=document.createElement("button");h.textContent="Drop 1",h.onclick=()=>{this.inv.removeItem(a.itemId,1),this.dropEntity(a.itemId,1,1),this.renderInv()},n.appendChild(h)}}renderGrid(e,t){const i=rt.CELL;t.innerHTML="",t.style.gridTemplateColumns=`repeat(${e.w}, ${i}px)`;const n=(s,a)=>e.slots.find(o=>{const l=Vi(o);return s>=o.x&&s<o.x+l.w&&a>=o.y&&a<o.y+l.h});for(let s=0;s<e.h;s++)for(let a=0;a<e.w;a++){const o=document.createElement("div");o.className="invcell";const l=n(a,s);if(l){const c=dt[l.itemId];if(o.style.background=c.color,l.x===a&&l.y===s){const u=document.createElement("div");u.className="icon",u.textContent=c.name.split(" ")[0].slice(0,6),o.appendChild(u)}e.slots.indexOf(l)===e.selected&&o.classList.add("active"),o.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${c.name} — ${c.desc}`},o.onmousedown=u=>this.startInvDrag(u,l,e)}t.appendChild(o)}}startInvDrag(e,t,i){if(e.button!==0)return;e.preventDefault();const n=i.slots.indexOf(t);i.selected=n,i.slots.splice(n,1);const s=this.temp;this.temp=t,s&&(i.slots.push(s),i.move(s,t.x,t.y)||this.giveOrDrop(s.itemId,s.count));const a=rt.CELL+rt.GAP,o=Vi(t),l=document.createElement("div");l.className="inv-ghost",l.style.width=o.w*a-rt.GAP+"px",l.style.height=o.h*a-rt.GAP+"px",l.style.background=dt[t.itemId].color,document.body.appendChild(l);const c=(i===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:e.clientX-(c.left+t.x*a),gy:e.clientY-(c.top+t.y*a)},h=f=>{l.style.left=f.clientX-u.gx+"px",l.style.top=f.clientY-u.gy+"px"},d=f=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",d),l.remove();const _=Vi(t);let g=null,m=0,p=0;for(const[R,T]of this.gridsEls()){const b=R.getBoundingClientRect();if(m=Math.round((f.clientX-b.left-u.gx)/a),p=Math.round((f.clientY-b.top-u.gy)/a),m>=0&&p>=0&&m<=T.w-_.w&&p<=T.h-_.h){g=T;break}}g&&(g.slots.push(t),g.move(t,m,p)||g===i&&g.move(t,t.x,t.y)?(this.temp=null,this.audio.place()):g.slots.splice(g.slots.indexOf(t),1)),this.inv.selected=Math.min(this.inv.selected,this.inv.slots.length-1),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",h),window.addEventListener("mouseup",d),h(e)}gridsEls(){const e=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&e.push([document.getElementById("chest-grid"),this.chestInv]),e}startTempDrag(e){if(e.button!==0||!this.temp)return;e.preventDefault();const t=this.temp,i=rt.CELL+rt.GAP,n=Vi(t),s=document.createElement("div");s.className="inv-ghost",s.style.width=n.w*i-rt.GAP+"px",s.style.height=n.h*i-rt.GAP+"px",s.style.background=dt[t.itemId].color,document.body.appendChild(s);const a=l=>{s.style.left=l.clientX-n.w*i/2+"px",s.style.top=l.clientY-n.h*i/2+"px"},o=l=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",o),s.remove();const c=(n.w*i-rt.GAP)/2,u=(n.h*i-rt.GAP)/2;let h=null,d=0,f=0;for(const[_,g]of this.gridsEls()){const m=_.getBoundingClientRect();if(d=Math.round((l.clientX-m.left-c)/i),f=Math.round((l.clientY-m.top-u)/i),d>=0&&f>=0&&d<=g.w-n.w&&f<=g.h-n.h){h=g;break}}h&&(h.slots.push(t),h.move(t,d,f)?(this.temp=null,this.audio.place(),h.selected=h.slots.indexOf(t),h===this.inv&&(this.inv.selected=h.selected)):(h.slots.splice(h.slots.indexOf(t),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",a),window.addEventListener("mouseup",o),a(e)}renderCraft(e){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=e==="bench"?"Crafting Bench":"Campfire Smelting";const t=document.getElementById("craft-list");if(t.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",e!=="smelt"),e==="bench")for(const i of Qg){const n=document.createElement("div");n.className="craft-row";const s=`${dt[i.out].name}${i.count>1?" ×"+i.count:""}`,a=Object.entries(i.needs).map(([c,u])=>`${u}× ${dt[c].name}`).join(", "),o=Lc(this.inv,i);n.innerHTML=`<span>${s} <span class="needs">(${a})</span></span>`;const l=document.createElement("button");l.textContent="Craft",l.disabled=!o,l.onclick=()=>{var u;const c=t_(this.inv,i);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(i.out,c),(u=dt[i.out])!=null&&u.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},n.appendChild(l),t.appendChild(n)}else{const i=this.openStation,n=`${i[0]},${i[1]},${i[2]}`,s=this.campCharges.get(n)??0;document.getElementById("smelt-fuel").textContent=`${s} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){Ve("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(n,s+3),this.renderCraft("smelt")};for(const a of e_){const o=document.createElement("div");o.className="craft-row",o.innerHTML=`<span>${dt[a.in].name} → ${dt[a.out].name} <span class="needs">(1 fuel charge)</span></span>`;const l=document.createElement("button");l.textContent="Smelt",l.disabled=!this.inv.has(a.in,1)||s<1,l.onclick=()=>{this.inv.removeItem(a.in,1),this.campCharges.set(n,s-1);const c=this.inv.addItem(a.out,1);c>0&&this.giveOrDrop(a.out,c),this.audio.place(),this.renderCraft("smelt")},o.appendChild(l),t.appendChild(o)}}}renderCache(){const e=this.caches.find(n=>n.id===this.openCacheId);document.getElementById("cache-title").textContent=(e==null?void 0:e.kind)==="chest"?"Supply Chest — take what you need":"Death Cache — take your belongings";const t=document.getElementById("cache-list");if(t.innerHTML="",!e||!e.items.length){this.closeUI();return}for(const n of e.items){const s=document.createElement("div");s.className="cache-item",s.textContent=`${n.count}× ${dt[n.itemId].name}`,t.appendChild(s)}const i=document.createElement("button");i.textContent="Take everything",i.onclick=()=>{let n=!0;for(;n;){n=!1;for(const s of e.items){const a=this.inv.addItem(s.itemId,s.count);a<s.count&&(n=!0,s.count=a),a===0&&e.items.splice(e.items.indexOf(s),1)}}e.items.length||this.renderer.removeEntityMesh(e.id),this.renderCache(),e.items.length||this.closeUI()},t.appendChild(i)}};Y(rt,"CELL",64),Y(rt,"GAP",6);let to=rt;class p_{constructor(){Y(this,"ctx",null);Y(this,"windGain",null);Y(this,"volume",.7);Y(this,"heartTimer",0)}resume(){if(!this.ctx){this.ctx=new AudioContext;const e=this.ctx.sampleRate,t=this.ctx.createBuffer(1,e*4,e),i=t.getChannelData(0);let n=0,s=0;for(let u=0;u<i.length;u++){const h=Math.random()*2-1;n=.99*n+.01*h,s=.96*s+.04*h,i[u]=(n+s)*2}const a=this.ctx.createBufferSource();a.buffer=t,a.loop=!0;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=380;const l=this.ctx.createOscillator();l.frequency.value=.13;const c=this.ctx.createGain();c.gain.value=140,l.connect(c).connect(o.frequency),l.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.12*this.volume,a.connect(o).connect(this.windGain).connect(this.ctx.destination),a.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=e,this.windGain&&(this.windGain.gain.value=.12*e)}blip(e,t,i,n=.2,s=0){if(!this.ctx)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=i,o.frequency.setValueAtTime(e,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(20,e+s),a+t),l.gain.setValueAtTime(n*this.volume,a),l.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(l).connect(this.ctx.destination),o.start(a),o.stop(a+t)}noiseHit(e,t,i=.25){if(!this.ctx)return;const n=this.ctx.currentTime,s=this.ctx.sampleRate,a=this.ctx.createBuffer(1,Math.max(1,Math.floor(s*e)),s),o=a.getChannelData(0);for(let h=0;h<o.length;h++)o[h]=(Math.random()*2-1)*(1-h/o.length);const l=this.ctx.createBufferSource();l.buffer=a;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=t;const u=this.ctx.createGain();u.gain.value=i*this.volume,l.connect(c).connect(u).connect(this.ctx.destination),l.start(n)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.blip(110,.25,"triangle",.3,-30)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((e,t)=>setTimeout(()=>this.blip(e,.28,"sine",.2,30),t*170))}heartbeat(e,t){t<=0||t>30||(this.heartTimer-=e,this.heartTimer<=0&&(this.heartTimer=.9+t/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const qe=r=>document.getElementById(r),Xl=r=>qe(r).value,Ot=(r,e=!0)=>qe(r).classList.toggle("hidden",!e),f_=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","ui-inventory","ui-craft","ui-cache"],Eo=()=>f_.forEach(r=>Ot(r,!1)),Ms=new p_;let gt=s_(),ke=null;document.addEventListener("click",()=>Ms.resume(),{once:!0});document.addEventListener("touchstart",()=>Ms.resume(),{once:!0});function Ts(){Eo(),Ot("screen-title"),qe("best-score").textContent=Sn()>0?`Best run: ${Sn().toFixed(1)} days`:"";const r=qe("worldlist");r.innerHTML="";const e=ws();e.length||(r.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const t of e){const i=document.createElement("div");i.className="world-row";const n=Fc(t.id),s=document.createElement("span");s.textContent=`${t.name} — seed “${t.seedStr}” — ${n?`day ${n.days}, survived ${(n.playSec/qt).toFixed(1)} days`:"never played"}`;const a=document.createElement("button");a.textContent="Load",a.onclick=()=>As(t,n);const o=document.createElement("button");o.textContent="Export",o.onclick=()=>{n?Bc(t,n):Ve("Nothing saved for this world yet.")};const l=document.createElement("button");l.textContent="Delete",l.onclick=()=>{l.textContent==="Sure?"?(o_(t.id),Ts()):(l.textContent="Sure?",setTimeout(()=>l.textContent="Delete",2500))},i.append(s,a,o,l),r.appendChild(i)}}function As(r,e){Eo(),Ot("cheats",!1),qe("hud").classList.remove("hidden"),qe("btn-save").classList.toggle("hidden",r.id.startsWith("guest")),qe("btn-exportworld").classList.toggle("hidden",r.id.startsWith("guest")),Ms.resume(),ke=new to(r,e,qe("game-wrap"),gt,Ms),globalThis.game=ke,ke.start()}function So(){ke&&(ke.saveNow(),ke.stop()),ke=null,delete globalThis.game,qe("hud").classList.add("hidden"),Ts()}function kc(r){Eo(),Ot(r)}function zc(){Ot("screen-settings",!1),Ot("screen-instructions",!1),ke?(Ot("ui-inventory",!1),Ot("ui-craft",!1),Ot("ui-cache",!1),Ot("screen-pause",!1),ke.paused=!1,ke.f1Paused=!1,ke.relock()):Ts()}function bo(){kc("screen-settings");const r=qe("settings-body");r.innerHTML="";const e=(t,i,n,s)=>{const a=document.createElement("div");a.className="setting";const o=document.createElement("span");o.textContent=t;const l=document.createElement("div");l.className="seg";const c=[];for(const[u,h]of i){const d=document.createElement("button");d.type="button",d.textContent=u,String(h)===String(n)&&d.classList.add("on"),d.onclick=()=>{for(const f of c)f.classList.remove("on");d.classList.add("on"),s(h)},c.push(d),l.appendChild(d)}a.append(o,l),r.appendChild(a)};if(e("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],gt.sens,t=>{gt.sens=t,Li()}),e("Invert Y",[["Off",!1],["On",!0]],gt.invertY,t=>{gt.invertY=t,Li()}),e("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],gt.volume,t=>{gt.volume=t,Li()}),e("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],gt.fov,t=>{gt.fov=t,Li()}),e("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],gt.renderDist,t=>{gt.renderDist=t,Li()}),e("Quality",[["Low","low"],["Medium","med"],["High","high"]],gt.quality,t=>{gt.quality=t,Li()}),e("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],gt.units,t=>{gt.units=t,Li()}),document.fullscreenEnabled)e("Fullscreen",[["Off",!1],["On",!0]],gt.fullscreen,t=>{gt.fullscreen=t,Li(),t?document.documentElement.requestFullscreen().catch(()=>{gt.fullscreen=!1,Li(),bo()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const t=document.createElement("div");t.className="setting",t.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),r.appendChild(t)}}function Li(){a_(gt),ke&&ke.applySettings(gt)}const m_=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block (right tool tier matters)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, oasis / water-station refill, death caches"],["Q","drink a full canister (+25 water)"],["I","inventory"],["1-9 / mouse wheel","select item"],["Esc","close open menu, or pause"],["F1","this screen"]],g_=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / ITEM / BAG","buttons on the right"]];function Hc(){kc("screen-instructions");const r=qe("instr-body");r.innerHTML="";const e=matchMedia("(pointer: coarse)").matches?g_:m_;for(const[i,n]of e){const s=document.createElement("div");s.innerHTML=`<b>${i}</b> — ${n}`,r.appendChild(s)}const t=document.createElement("div");t.className="needs",t.textContent="Keep the three bars inside their white safe bands. The Ship Interior is always sealed: your body heat drifts back to 36.6 °C there. Outside, midday cooks you and night freezes you — shade, walls and doors change what you are exposed to. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points.",r.appendChild(t)}qe("btn-create").onclick=()=>{const r=Xl("seed-input").trim()||Math.random().toString(36).slice(2,10),e=Xl("world-name").trim()||r,t=Nc(e,r);As(t,null)};qe("btn-guest").onclick=()=>{const r=Math.random().toString(36).slice(2,10);As({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:r,updated:Date.now()},null)};qe("btn-import").onclick=()=>qe("import-file").click();qe("import-file").onchange=async()=>{var e;const r=(e=qe("import-file").files)==null?void 0:e[0];if(r)try{const t=await l_(r);Ve("World imported."),As(t,Fc(t.id))}catch(t){Ve(`Import failed: ${t.message}`)}};qe("btn-settings").onclick=bo;qe("btn-pause-settings").onclick=bo;qe("btn-instructions").onclick=Hc;for(const r of document.querySelectorAll(".close-btn"))r.onclick=()=>{ke&&ke.closeUI(),(!ke||!(ke.ui==="inv"&&ke.temp))&&zc()};qe("btn-resume").onclick=()=>{ke&&(ke.paused=!1,Ot("screen-pause",!1),Ot("cheats",!1),ke.relock())};qe("btn-save").onclick=()=>Ve("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");qe("btn-exportworld").onclick=()=>{ke&&ke.exportWorld()};qe("btn-quit").onclick=()=>So();qe("btn-cheats").onclick=()=>Ot("cheats",qe("cheats").classList.contains("hidden"));for(const r of Array.from(qe("cheats").querySelectorAll("button")))r.onclick=()=>{if(!ke)return;if(r.dataset.speed!==void 0){ke.speedMul=Number(r.dataset.speed),Ve(`Player speed ×${r.dataset.speed}.`);return}if(r.dataset.immortal!==void 0){ke.survival.invincible=r.dataset.immortal==="1",Ve(`Immortality ${ke.survival.invincible?"on":"off"}.`);return}const e=Number(r.dataset.frac);ke.setClock(e),Ve(`Clock set to ${r.textContent}.`)};qe("btn-respawn").onclick=()=>{ke&&ke.respawn()};qe("btn-death-title").onclick=()=>So();qe("btn-win-continue").onclick=()=>{ke&&(ke.paused=!1,Ot("screen-win",!1),ke.relock())};qe("btn-win-title").onclick=()=>So();document.addEventListener("keydown",r=>{if(r.code==="Escape"&&!qe("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}r.code==="F1"&&(r.preventDefault(),qe("screen-instructions").classList.contains("hidden")?(Hc(),ke&&!ke.paused&&(ke.paused=!0,ke.f1Paused=!0),document.pointerLockElement&&document.exitPointerLock()):zc())});Ts();
