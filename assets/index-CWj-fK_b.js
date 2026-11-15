(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="180",Xu=0,uc=1,$u=2,Oh=1,Yu=2,Si=3,Vi=0,Tn=1,We=2,Oi=0,Ps=1,dc=2,fc=3,pc=4,Ku=5,es=100,ju=101,Zu=102,Ju=103,Qu=104,td=200,ed=201,nd=202,id=203,ka=204,Na=205,sd=206,rd=207,od=208,ad=209,ld=210,cd=211,hd=212,ud=213,dd=214,Fa=0,Oa=1,Ba=2,Ns=3,za=4,Ha=5,Ga=6,Va=7,Pl=0,fd=1,pd=2,Bi=0,md=1,gd=2,_d=3,vd=4,xd=5,yd=6,Md=7,Bh=300,Fs=301,Os=302,Wa=303,qa=304,Co=306,Xa=1e3,os=1001,$a=1002,Nn=1003,Sd=1004,Pr=1005,ai=1006,$o=1007,as=1008,ui=1009,zh=1010,Hh=1011,hr=1012,Dl=1013,hs=1014,wi=1015,yr=1016,Ul=1017,kl=1018,ur=1020,Gh=35902,Vh=35899,Wh=1021,qh=1022,ni=1023,dr=1026,fr=1027,Xh=1028,Nl=1029,$h=1030,Fl=1031,Ol=1033,uo=33776,fo=33777,po=33778,mo=33779,Ya=35840,Ka=35841,ja=35842,Za=35843,Ja=36196,Qa=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,vl=36283,xl=36284,yl=36285,Ml=36286,bd=3200,Ed=3201,Yh=0,wd=1,Fi="",En="srgb",Bs="srgb-linear",yo="linear",de="srgb",gs=7680,mc=519,Td=512,Ad=513,Rd=514,Kh=515,Cd=516,Id=517,Ld=518,Pd=519,gc=35044,_c="300 es",li=2e3,Mo=2001;class Hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const i=s.indexOf(e);i!==-1&&s.splice(i,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const Ds=Math.PI/180,pr=180/Math.PI;function Gs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function se(r,t,e){return Math.max(t,Math.min(e,r))}function Bl(r,t){return(r%t+t)%t}function Dd(r,t,e,n,s){return n+(r-t)*(s-n)/(e-t)}function Ud(r,t,e){return r!==t?(e-r)/(t-r):0}function lr(r,t,e){return(1-e)*r+e*t}function kd(r,t,e,n){return lr(r,t,1-Math.exp(-e*n))}function Nd(r,t=1){return t-Math.abs(Bl(r,t*2)-t)}function Fd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Od(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Bd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function zd(r,t){return r+Math.random()*(t-r)}function Hd(r){return r*(.5-Math.random())}function Gd(r){r!==void 0&&(vc=r);let t=vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(r){return r*Ds}function Wd(r){return r*pr}function qd(r){return(r&r-1)===0&&r!==0}function Xd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $d(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yd(r,t,e,n,s){const i=Math.cos,a=Math.sin,l=i(e/2),h=a(e/2),o=i((t+n)/2),c=a((t+n)/2),u=i((t-n)/2),f=a((t-n)/2),m=i((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":r.set(l*c,h*u,h*f,l*o);break;case"YZY":r.set(h*f,l*c,h*u,l*o);break;case"ZXZ":r.set(h*u,h*f,l*c,l*o);break;case"XZX":r.set(l*c,h*x,h*m,l*o);break;case"YXY":r.set(h*m,l*c,h*x,l*o);break;case"ZYZ":r.set(h*x,h*m,l*c,l*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:Ds,RAD2DEG:pr,generateUUID:Gs,clamp:se,euclideanModulo:Bl,mapLinear:Dd,inverseLerp:Ud,lerp:lr,damp:kd,pingpong:Nd,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:zd,randFloatSpread:Hd,seededRandom:Gd,degToRad:Vd,radToDeg:Wd,isPowerOfTwo:qd,ceilPowerOfTwo:Xd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Yd,normalize:dn,denormalize:Is};class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*n-a*s+t.x,this.y=i*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,i,a,l){let h=n[s+0],o=n[s+1],c=n[s+2],u=n[s+3];const f=i[a+0],m=i[a+1],x=i[a+2],y=i[a+3];if(l===0){t[e+0]=h,t[e+1]=o,t[e+2]=c,t[e+3]=u;return}if(l===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=y;return}if(u!==y||h!==f||o!==m||c!==x){let v=1-l;const _=h*f+o*m+c*x+u*y,b=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const T=Math.sqrt(w),R=Math.atan2(T,_*b);v=Math.sin(v*R)/T,l=Math.sin(l*R)/T}const S=l*b;if(h=h*v+f*S,o=o*v+m*S,c=c*v+x*S,u=u*v+y*S,v===1-l){const T=1/Math.sqrt(h*h+o*o+c*c+u*u);h*=T,o*=T,c*=T,u*=T}}t[e]=h,t[e+1]=o,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,i,a){const l=n[s],h=n[s+1],o=n[s+2],c=n[s+3],u=i[a],f=i[a+1],m=i[a+2],x=i[a+3];return t[e]=l*x+c*u+h*m-o*f,t[e+1]=h*x+c*f+o*u-l*m,t[e+2]=o*x+c*m+l*f-h*u,t[e+3]=c*x-l*u-h*f-o*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,i=t._z,a=t._order,l=Math.cos,h=Math.sin,o=l(n/2),c=l(s/2),u=l(i/2),f=h(n/2),m=h(s/2),x=h(i/2);switch(a){case"XYZ":this._x=f*c*u+o*m*x,this._y=o*m*u-f*c*x,this._z=o*c*x+f*m*u,this._w=o*c*u-f*m*x;break;case"YXZ":this._x=f*c*u+o*m*x,this._y=o*m*u-f*c*x,this._z=o*c*x-f*m*u,this._w=o*c*u+f*m*x;break;case"ZXY":this._x=f*c*u-o*m*x,this._y=o*m*u+f*c*x,this._z=o*c*x+f*m*u,this._w=o*c*u-f*m*x;break;case"ZYX":this._x=f*c*u-o*m*x,this._y=o*m*u+f*c*x,this._z=o*c*x-f*m*u,this._w=o*c*u+f*m*x;break;case"YZX":this._x=f*c*u+o*m*x,this._y=o*m*u+f*c*x,this._z=o*c*x-f*m*u,this._w=o*c*u-f*m*x;break;case"XZY":this._x=f*c*u-o*m*x,this._y=o*m*u-f*c*x,this._z=o*c*x+f*m*u,this._w=o*c*u+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],i=e[8],a=e[1],l=e[5],h=e[9],o=e[2],c=e[6],u=e[10],f=n+l+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(i-o)*m,this._z=(a-s)*m}else if(n>l&&n>u){const m=2*Math.sqrt(1+n-l-u);this._w=(c-h)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(i+o)/m}else if(l>u){const m=2*Math.sqrt(1+l-n-u);this._w=(i-o)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+u-n-l);this._w=(a-s)/m,this._x=(i+o)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,i=t._z,a=t._w,l=e._x,h=e._y,o=e._z,c=e._w;return this._x=n*c+a*l+s*o-i*h,this._y=s*c+a*h+i*l-n*o,this._z=i*c+a*o+n*h-s*l,this._w=a*c-n*l-s*h-i*o,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,i=this._z,a=this._w;let l=a*t._w+n*t._x+s*t._y+i*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const h=1-l*l;if(h<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*i+e*this._z,this.normalize(),this}const o=Math.sqrt(h),c=Math.atan2(o,l),u=Math.sin((1-e)*c)/o,f=Math.sin(e*c)/o;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*s,this.y=i[1]*e+i[4]*n+i[7]*s,this.z=i[2]*e+i[5]*n+i[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*e+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*e+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,i=t.x,a=t.y,l=t.z,h=t.w,o=2*(a*s-l*n),c=2*(l*e-i*s),u=2*(i*n-a*e);return this.x=e+h*o+a*u-l*c,this.y=n+h*c+l*o-i*u,this.z=s+h*u+i*c-a*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*s,this.y=i[1]*e+i[5]*n+i[9]*s,this.z=i[2]*e+i[6]*n+i[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,i=t.z,a=e.x,l=e.y,h=e.z;return this.x=s*h-i*l,this.y=i*a-n*h,this.z=n*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new U,xc=new Mr;class Kt{constructor(t,e,n,s,i,a,l,h,o){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,l,h,o)}set(t,e,n,s,i,a,l,h,o){const c=this.elements;return c[0]=t,c[1]=s,c[2]=l,c[3]=e,c[4]=i,c[5]=h,c[6]=n,c[7]=a,c[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],l=n[3],h=n[6],o=n[1],c=n[4],u=n[7],f=n[2],m=n[5],x=n[8],y=s[0],v=s[3],_=s[6],b=s[1],w=s[4],S=s[7],T=s[2],R=s[5],L=s[8];return i[0]=a*y+l*b+h*T,i[3]=a*v+l*w+h*R,i[6]=a*_+l*S+h*L,i[1]=o*y+c*b+u*T,i[4]=o*v+c*w+u*R,i[7]=o*_+c*S+u*L,i[2]=f*y+m*b+x*T,i[5]=f*v+m*w+x*R,i[8]=f*_+m*S+x*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],l=t[5],h=t[6],o=t[7],c=t[8];return e*a*c-e*l*o-n*i*c+n*l*h+s*i*o-s*a*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],l=t[5],h=t[6],o=t[7],c=t[8],u=c*a-l*o,f=l*h-c*i,m=o*i-a*h,x=e*u+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=u*y,t[1]=(s*o-c*n)*y,t[2]=(l*n-s*a)*y,t[3]=f*y,t[4]=(c*e-s*h)*y,t[5]=(s*i-l*e)*y,t[6]=m*y,t[7]=(n*h-o*e)*y,t[8]=(a*e-n*i)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,i,a,l){const h=Math.cos(i),o=Math.sin(i);return this.set(n*h,n*o,-n*(h*a+o*l)+a+t,-s*o,s*h,-s*(-o*a+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new Kt;function jh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function So(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kd(){const r=So("canvas");return r.style.display="block",r}const yc={};function mr(r){r in yc||(yc[r]=!0,console.warn(r))}function jd(r,t,e){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}const Mc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){const r={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===de&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},colorSpaceToWorking:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,a){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,i){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,i)},toWorkingColorSpace:function(s,i){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,i)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Bs]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}const ae=Zd();function Ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _s;class Jd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_s===void 0&&(_s=So("canvas")),_s.width=t.width,_s.height=t.height;const s=_s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=So("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=Ai(i[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qd=0;class zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?i.push(jo(s[a].image)):i.push(jo(s[a]))}else i=jo(s);n.url=i}return e||(t.images[this.uuid]=n),n}}function jo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;const Zo=new U;class _n extends Hs{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,n=os,s=os,i=ai,a=as,l=ni,h=ui,o=_n.DEFAULT_ANISOTROPY,c=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Gs(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=h,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xa:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xa:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Bh;_n.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,i;const h=t.elements,o=h[0],c=h[4],u=h[8],f=h[1],m=h[5],x=h[9],y=h[2],v=h[6],_=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-v)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+v)<.1&&Math.abs(o+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(o+1)/2,S=(m+1)/2,T=(_+1)/2,R=(c+f)/4,L=(u+y)/4,p=(x+v)/4;return w>S&&w>T?w<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(w),s=R/n,i=L/n):S>T?S<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(S),n=R/s,i=p/s):T<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(T),n=L/i,s=p/i),this.set(n,s,i,e),this}let b=Math.sqrt((v-x)*(v-x)+(u-y)*(u-y)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(v-x)/b,this.y=(u-y)/b,this.z=(f-c)/b,this.w=Math.acos((o+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ef extends Hs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:n.depth},i=new _n(s);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new zl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends ef{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zh extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nf extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=i.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Zn):Zn.fromBufferAttribute(i,a),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const s=t.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Ur.subVectors(this.max,Ks),vs.subVectors(t.a,Ks),xs.subVectors(t.b,Ks),ys.subVectors(t.c,Ks),Ii.subVectors(xs,vs),Li.subVectors(ys,xs),$i.subVectors(vs,ys);let e=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-$i.z,$i.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,$i.z,0,-$i.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-$i.y,$i.x,0];return!Jo(e,vs,xs,ys,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,vs,xs,ys,Ur))?!1:(kr.crossVectors(Ii,Li),e=[kr.x,kr.y,kr.z],Jo(e,vs,xs,ys,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Dr=new Sr,vs=new U,xs=new U,ys=new U,Ii=new U,Li=new U,$i=new U,Ks=new U,Ur=new U,kr=new U,Yi=new U;function Jo(r,t,e,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){Yi.fromArray(r,i);const l=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),h=t.dot(Yi),o=e.dot(Yi),c=n.dot(Yi);if(Math.max(-Math.max(h,o,c),Math.min(h,o,c))>l)return!1}return!0}const sf=new Sr,js=new U,Qo=new U;class br{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sf.setFromPoints(t).getCenter(n);let s=0;for(let i=0,a=t.length;i<a;i++)s=Math.max(s,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Qo)),this.expandByPoint(js.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vi=new U,ta=new U,Nr=new U,Pi=new U,ea=new U,Fr=new U,na=new U;class Hl{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ta.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(ta);const i=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),l=Pi.dot(this.direction),h=-Pi.dot(Nr),o=Pi.lengthSq(),c=Math.abs(1-a*a);let u,f,m,x;if(c>0)if(u=a*h-l,f=a*l-h,x=i*c,u>=0)if(f>=-x)if(f<=x){const y=1/c;u*=y,f*=y,m=u*(u+a*f+2*l)+f*(a*u+f+2*h)+o}else f=i,u=Math.max(0,-(a*f+l)),m=-u*u+f*(f+2*h)+o;else f=-i,u=Math.max(0,-(a*f+l)),m=-u*u+f*(f+2*h)+o;else f<=-x?(u=Math.max(0,-(-a*i+l)),f=u>0?-i:Math.min(Math.max(-i,-h),i),m=-u*u+f*(f+2*h)+o):f<=x?(u=0,f=Math.min(Math.max(-i,-h),i),m=f*(f+2*h)+o):(u=Math.max(0,-(a*i+l)),f=u>0?i:Math.min(Math.max(-i,-h),i),m=-u*u+f*(f+2*h)+o);else f=a>0?-i:i,u=Math.max(0,-(a*f+l)),m=-u*u+f*(f+2*h)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ta).addScaledVector(Nr,f),m}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,i=t.radius*t.radius;if(s>i)return null;const a=Math.sqrt(i-s),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,i,a,l,h;const o=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return o>=0?(n=(t.min.x-f.x)*o,s=(t.max.x-f.x)*o):(n=(t.max.x-f.x)*o,s=(t.min.x-f.x)*o),c>=0?(i=(t.min.y-f.y)*c,a=(t.max.y-f.y)*c):(i=(t.max.y-f.y)*c,a=(t.min.y-f.y)*c),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),u>=0?(l=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,i){ea.subVectors(e,t),Fr.subVectors(n,t),na.crossVectors(ea,Fr);let a=this.direction.dot(na),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Pi.subVectors(this.origin,t);const h=l*this.direction.dot(Fr.crossVectors(Pi,Fr));if(h<0)return null;const o=l*this.direction.dot(ea.cross(Pi));if(o<0||h+o>a)return null;const c=-l*Pi.dot(na);return c<0?null:this.at(c/a,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,s,i,a,l,h,o,c,u,f,m,x,y,v){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,l,h,o,c,u,f,m,x,y,v)}set(t,e,n,s,i,a,l,h,o,c,u,f,m,x,y,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=i,_[5]=a,_[9]=l,_[13]=h,_[2]=o,_[6]=c,_[10]=u,_[14]=f,_[3]=m,_[7]=x,_[11]=y,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),i=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,i=t.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(s),o=Math.sin(s),c=Math.cos(i),u=Math.sin(i);if(t.order==="XYZ"){const f=a*c,m=a*u,x=l*c,y=l*u;e[0]=h*c,e[4]=-h*u,e[8]=o,e[1]=m+x*o,e[5]=f-y*o,e[9]=-l*h,e[2]=y-f*o,e[6]=x+m*o,e[10]=a*h}else if(t.order==="YXZ"){const f=h*c,m=h*u,x=o*c,y=o*u;e[0]=f+y*l,e[4]=x*l-m,e[8]=a*o,e[1]=a*u,e[5]=a*c,e[9]=-l,e[2]=m*l-x,e[6]=y+f*l,e[10]=a*h}else if(t.order==="ZXY"){const f=h*c,m=h*u,x=o*c,y=o*u;e[0]=f-y*l,e[4]=-a*u,e[8]=x+m*l,e[1]=m+x*l,e[5]=a*c,e[9]=y-f*l,e[2]=-a*o,e[6]=l,e[10]=a*h}else if(t.order==="ZYX"){const f=a*c,m=a*u,x=l*c,y=l*u;e[0]=h*c,e[4]=x*o-m,e[8]=f*o+y,e[1]=h*u,e[5]=y*o+f,e[9]=m*o-x,e[2]=-o,e[6]=l*h,e[10]=a*h}else if(t.order==="YZX"){const f=a*h,m=a*o,x=l*h,y=l*o;e[0]=h*c,e[4]=y-f*u,e[8]=x*u+m,e[1]=u,e[5]=a*c,e[9]=-l*c,e[2]=-o*c,e[6]=m*u+x,e[10]=f-y*u}else if(t.order==="XZY"){const f=a*h,m=a*o,x=l*h,y=l*o;e[0]=h*c,e[4]=-u,e[8]=o*c,e[1]=f*u+y,e[5]=a*c,e[9]=m*u-x,e[2]=x*u-m,e[6]=l*c,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rf,t,of)}lookAt(t,e,n){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Di.crossVectors(n,Cn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Di.crossVectors(n,Cn)),Di.normalize(),Or.crossVectors(Cn,Di),s[0]=Di.x,s[4]=Or.x,s[8]=Cn.x,s[1]=Di.y,s[5]=Or.y,s[9]=Cn.y,s[2]=Di.z,s[6]=Or.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],l=n[4],h=n[8],o=n[12],c=n[1],u=n[5],f=n[9],m=n[13],x=n[2],y=n[6],v=n[10],_=n[14],b=n[3],w=n[7],S=n[11],T=n[15],R=s[0],L=s[4],p=s[8],d=s[12],g=s[1],M=s[5],C=s[9],P=s[13],F=s[2],N=s[6],G=s[10],K=s[14],V=s[3],Q=s[7],et=s[11],ft=s[15];return i[0]=a*R+l*g+h*F+o*V,i[4]=a*L+l*M+h*N+o*Q,i[8]=a*p+l*C+h*G+o*et,i[12]=a*d+l*P+h*K+o*ft,i[1]=c*R+u*g+f*F+m*V,i[5]=c*L+u*M+f*N+m*Q,i[9]=c*p+u*C+f*G+m*et,i[13]=c*d+u*P+f*K+m*ft,i[2]=x*R+y*g+v*F+_*V,i[6]=x*L+y*M+v*N+_*Q,i[10]=x*p+y*C+v*G+_*et,i[14]=x*d+y*P+v*K+_*ft,i[3]=b*R+w*g+S*F+T*V,i[7]=b*L+w*M+S*N+T*Q,i[11]=b*p+w*C+S*G+T*et,i[15]=b*d+w*P+S*K+T*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],i=t[12],a=t[1],l=t[5],h=t[9],o=t[13],c=t[2],u=t[6],f=t[10],m=t[14],x=t[3],y=t[7],v=t[11],_=t[15];return x*(+i*h*u-s*o*u-i*l*f+n*o*f+s*l*m-n*h*m)+y*(+e*h*m-e*o*f+i*a*f-s*a*m+s*o*c-i*h*c)+v*(+e*o*u-e*l*m-i*a*u+n*a*m+i*l*c-n*o*c)+_*(-s*l*c-e*h*u+e*l*f+s*a*u-n*a*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],l=t[5],h=t[6],o=t[7],c=t[8],u=t[9],f=t[10],m=t[11],x=t[12],y=t[13],v=t[14],_=t[15],b=u*v*o-y*f*o+y*h*m-l*v*m-u*h*_+l*f*_,w=x*f*o-c*v*o-x*h*m+a*v*m+c*h*_-a*f*_,S=c*y*o-x*u*o+x*l*m-a*y*m-c*l*_+a*u*_,T=x*u*h-c*y*h-x*l*f+a*y*f+c*l*v-a*u*v,R=e*b+n*w+s*S+i*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=b*L,t[1]=(y*f*i-u*v*i-y*s*m+n*v*m+u*s*_-n*f*_)*L,t[2]=(l*v*i-y*h*i+y*s*o-n*v*o-l*s*_+n*h*_)*L,t[3]=(u*h*i-l*f*i-u*s*o+n*f*o+l*s*m-n*h*m)*L,t[4]=w*L,t[5]=(c*v*i-x*f*i+x*s*m-e*v*m-c*s*_+e*f*_)*L,t[6]=(x*h*i-a*v*i-x*s*o+e*v*o+a*s*_-e*h*_)*L,t[7]=(a*f*i-c*h*i+c*s*o-e*f*o-a*s*m+e*h*m)*L,t[8]=S*L,t[9]=(x*u*i-c*y*i-x*n*m+e*y*m+c*n*_-e*u*_)*L,t[10]=(a*y*i-x*l*i+x*n*o-e*y*o-a*n*_+e*l*_)*L,t[11]=(c*l*i-a*u*i-c*n*o+e*u*o+a*n*m-e*l*m)*L,t[12]=T*L,t[13]=(c*y*s-x*u*s+x*n*f-e*y*f-c*n*v+e*u*v)*L,t[14]=(x*l*s-a*y*s-x*n*h+e*y*h+a*n*v-e*l*v)*L,t[15]=(a*u*s-c*l*s+c*n*h-e*u*h-a*n*f+e*l*f)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,i=t.z;return e[0]*=n,e[4]*=s,e[8]*=i,e[1]*=n,e[5]*=s,e[9]*=i,e[2]*=n,e[6]*=s,e[10]*=i,e[3]*=n,e[7]*=s,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),i=1-n,a=t.x,l=t.y,h=t.z,o=i*a,c=i*l;return this.set(o*a+n,o*l-s*h,o*h+s*l,0,o*l+s*h,c*l+n,c*h-s*a,0,o*h-s*l,c*h+s*a,i*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,i,a){return this.set(1,n,i,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,i=e._x,a=e._y,l=e._z,h=e._w,o=i+i,c=a+a,u=l+l,f=i*o,m=i*c,x=i*u,y=a*c,v=a*u,_=l*u,b=h*o,w=h*c,S=h*u,T=n.x,R=n.y,L=n.z;return s[0]=(1-(y+_))*T,s[1]=(m+S)*T,s[2]=(x-w)*T,s[3]=0,s[4]=(m-S)*R,s[5]=(1-(f+_))*R,s[6]=(v+b)*R,s[7]=0,s[8]=(x+w)*L,s[9]=(v-b)*L,s[10]=(1-(f+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let i=Ms.set(s[0],s[1],s[2]).length();const a=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);const o=1/i,c=1/a,u=1/l;return Jn.elements[0]*=o,Jn.elements[1]*=o,Jn.elements[2]*=o,Jn.elements[4]*=c,Jn.elements[5]*=c,Jn.elements[6]*=c,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=i,n.y=a,n.z=l,this}makePerspective(t,e,n,s,i,a,l=li,h=!1){const o=this.elements,c=2*i/(e-t),u=2*i/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s);let x,y;if(h)x=i/(a-i),y=a*i/(a-i);else if(l===li)x=-(a+i)/(a-i),y=-2*a*i/(a-i);else if(l===Mo)x=-a/(a-i),y=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=c,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=u,o[9]=m,o[13]=0,o[2]=0,o[6]=0,o[10]=x,o[14]=y,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,s,i,a,l=li,h=!1){const o=this.elements,c=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s);let x,y;if(h)x=1/(a-i),y=a/(a-i);else if(l===li)x=-2/(a-i),y=-(a+i)/(a-i);else if(l===Mo)x=-1/(a-i),y=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=c,o[4]=0,o[8]=0,o[12]=f,o[1]=0,o[5]=u,o[9]=0,o[13]=m,o[2]=0,o[6]=0,o[10]=x,o[14]=y,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new U,Jn=new Ee,rf=new U(0,0,0),of=new U(1,1,1),Di=new U,Or=new U,Cn=new U,bc=new Ee,Ec=new Mr;class di{constructor(t=0,e=0,n=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,i=s[0],a=s[4],l=s[8],h=s[1],o=s[5],c=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,o),this._z=0);break;case"YXZ":this._x=Math.asin(-se(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(h,o)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(h,i));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,i)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,o),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,o),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let af=0;const wc=new U,Ss=new Mr,xi=new Ee,Br=new U,Zs=new U,lf=new U,cf=new Mr,Tc=new U(1,0,0),Ac=new U(0,1,0),Rc=new U(0,0,1),Cc={type:"added"},hf={type:"removed"},bs={type:"childadded",child:null},ia={type:"childremoved",child:null};class Be extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new U,e=new di,n=new Mr,s=new U(1,1,1);function i(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Kt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Zs,Br,this.up):xi.lookAt(Br,Zs,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(xi),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function i(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let o=0,c=h.length;o<c;o++){const u=h[o];i(t.shapes,u)}else i(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,o=this.material.length;h<o;h++)l.push(i(t.materials,this.material[h]));s.material=l}else s.material=i(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];s.animations.push(i(t.animations,h))}}if(e){const l=a(t.geometries),h=a(t.materials),o=a(t.textures),c=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),x=a(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),o.length>0&&(n.textures=o),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(l){const h=[];for(const o in l){const c=l[o];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new U(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new U,yi=new U,sa=new U,Mi=new U,Es=new U,ws=new U,Ic=new U,ra=new U,oa=new U,aa=new U,la=new fe,ca=new fe,ha=new fe;class qn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(t,e,n,s,i){Qn.subVectors(s,e),yi.subVectors(n,e),sa.subVectors(t,e);const a=Qn.dot(Qn),l=Qn.dot(yi),h=Qn.dot(sa),o=yi.dot(yi),c=yi.dot(sa),u=a*o-l*l;if(u===0)return i.set(0,0,0),null;const f=1/u,m=(o*h-l*c)*f,x=(a*c-l*h)*f;return i.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,i,a,l,h){return this.getBarycoord(t,e,n,s,Mi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(i,Mi.x),h.addScaledVector(a,Mi.y),h.addScaledVector(l,Mi.z),h)}static getInterpolatedAttribute(t,e,n,s,i,a){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(la,i.x),a.addScaledVector(ca,i.y),a.addScaledVector(ha,i.z),a}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),yi.subVectors(t,e),Qn.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Qn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,i){return qn.getInterpolation(t,this.a,this.b,this.c,e,n,s,i)}containsPoint(t){return qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,i=this.c;let a,l;Es.subVectors(s,n),ws.subVectors(i,n),ra.subVectors(t,n);const h=Es.dot(ra),o=ws.dot(ra);if(h<=0&&o<=0)return e.copy(n);oa.subVectors(t,s);const c=Es.dot(oa),u=ws.dot(oa);if(c>=0&&u<=c)return e.copy(s);const f=h*u-c*o;if(f<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(n).addScaledVector(Es,a);aa.subVectors(t,i);const m=Es.dot(aa),x=ws.dot(aa);if(x>=0&&m<=x)return e.copy(i);const y=m*o-h*x;if(y<=0&&o>=0&&x<=0)return l=o/(o-x),e.copy(n).addScaledVector(ws,l);const v=c*x-m*u;if(v<=0&&u-c>=0&&m-x>=0)return Ic.subVectors(i,s),l=(u-c)/(u-c+(m-x)),e.copy(s).addScaledVector(Ic,l);const _=1/(v+y+f);return a=y*_,l=f*_,e.copy(n).addScaledVector(Es,a).addScaledVector(ws,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Bl(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,a=2*n-i;this.r=ua(a,i,t+1/3),this.g=ua(a,i,t),this.b=ua(a,i,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=En){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return ae.workingToColorSpace(en.copy(this),t),Math.round(se(en.r*255,0,255))*65536+Math.round(se(en.g*255,0,255))*256+Math.round(se(en.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(en.copy(this),e);const n=en.r,s=en.g,i=en.b,a=Math.max(n,s,i),l=Math.min(n,s,i);let h,o;const c=(l+a)/2;if(l===a)h=0,o=0;else{const u=a-l;switch(o=c<=.5?u/(a+l):u/(2-a-l),a){case n:h=(s-i)/u+(s<i?6:0);break;case s:h=(i-n)/u+2;break;case i:h=(n-s)/u+4;break}h/=6}return t.h=h,t.s=o,t.l=c,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=En){ae.workingToColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(zr);const n=lr(Ui.h,zr.h,e),s=lr(Ui.s,zr.s,e),i=lr(Ui.l,zr.l,e);return this.setHSL(n,s,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*s,this.g=i[1]*e+i[4]*n+i[7]*s,this.b=i[2]*e+i[5]*n+i[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new qt;qt.NAMES=Qh;let uf=0;class ds extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Ps,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Na,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const l in i){const h=i[l];delete h.metadata,a.push(h)}return a}if(e){const i=s(t.textures),a=s(t.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ns extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new U,Hr=new re;let df=0;class ci{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}}class tu extends ci{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends ci{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends ci{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ff=0;const Bn=new Ee,da=new Be,Ts=new U,In=new Sr,Js=new Sr,Ve=new U;class hn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jh(t)?eu:tu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Kt().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,i=t.length;s<i;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const i=t[s];e.setXYZ(s,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const i=e[n];In.setFromBufferAttribute(i),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];Js.setFromBufferAttribute(l),this.morphTargetsRelative?(Ve.addVectors(In.min,Js.min),In.expandByPoint(Ve),Ve.addVectors(In.max,Js.max),In.expandByPoint(Ve)):(In.expandByPoint(Js.min),In.expandByPoint(Js.max))}In.getCenter(n);let s=0;for(let i=0,a=t.count;i<a;i++)Ve.fromBufferAttribute(t,i),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let i=0,a=e.length;i<a;i++){const l=e[i],h=this.morphTargetsRelative;for(let o=0,c=l.count;o<c;o++)Ve.fromBufferAttribute(l,o),h&&(Ts.fromBufferAttribute(t,o),Ve.add(Ts)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],h=[];for(let p=0;p<n.count;p++)l[p]=new U,h[p]=new U;const o=new U,c=new U,u=new U,f=new re,m=new re,x=new re,y=new U,v=new U;function _(p,d,g){o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),u.fromBufferAttribute(n,g),f.fromBufferAttribute(i,p),m.fromBufferAttribute(i,d),x.fromBufferAttribute(i,g),c.sub(o),u.sub(o),m.sub(f),x.sub(f);const M=1/(m.x*x.y-x.x*m.y);isFinite(M)&&(y.copy(c).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(M),v.copy(u).multiplyScalar(m.x).addScaledVector(c,-x.x).multiplyScalar(M),l[p].add(y),l[d].add(y),l[g].add(y),h[p].add(v),h[d].add(v),h[g].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let p=0,d=b.length;p<d;++p){const g=b[p],M=g.start,C=g.count;for(let P=M,F=M+C;P<F;P+=3)_(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const w=new U,S=new U,T=new U,R=new U;function L(p){T.fromBufferAttribute(s,p),R.copy(T);const d=l[p];w.copy(d),w.sub(T.multiplyScalar(T.dot(d))).normalize(),S.crossVectors(R,d);const M=S.dot(h[p])<0?-1:1;a.setXYZW(p,w.x,w.y,w.z,M)}for(let p=0,d=b.length;p<d;++p){const g=b[p],M=g.start,C=g.count;for(let P=M,F=M+C;P<F;P+=3)L(t.getX(P+0)),L(t.getX(P+1)),L(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new U,i=new U,a=new U,l=new U,h=new U,o=new U,c=new U,u=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const x=t.getX(f+0),y=t.getX(f+1),v=t.getX(f+2);s.fromBufferAttribute(e,x),i.fromBufferAttribute(e,y),a.fromBufferAttribute(e,v),c.subVectors(a,i),u.subVectors(s,i),c.cross(u),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),l.add(c),h.add(c),o.add(c),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(v,o.x,o.y,o.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),i.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),c.subVectors(a,i),u.subVectors(s,i),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(l,h){const o=l.array,c=l.itemSize,u=l.normalized,f=new o.constructor(h.length*c);let m=0,x=0;for(let y=0,v=h.length;y<v;y++){l.isInterleavedBufferAttribute?m=h[y]*l.data.stride+l.offset:m=h[y]*c;for(let _=0;_<c;_++)f[x++]=o[m++]}return new ci(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,n=this.index.array,s=this.attributes;for(const l in s){const h=s[l],o=t(h,n);e.setAttribute(l,o)}const i=this.morphAttributes;for(const l in i){const h=[],o=i[l];for(let c=0,u=o.length;c<u;c++){const f=o[c],m=t(f,n);h.push(m)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,h=a.length;l<h;l++){const o=a[l];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const o in h)h[o]!==void 0&&(t[o]=h[o]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const o=n[h];t.data.attributes[h]=o.toJSON(t.data)}const s={};let i=!1;for(const h in this.morphAttributes){const o=this.morphAttributes[h],c=[];for(let u=0,f=o.length;u<f;u++){const m=o[u];c.push(m.toJSON(t.data))}c.length>0&&(s[h]=c,i=!0)}i&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const o in s){const c=s[o];this.setAttribute(o,c.clone(e))}const i=t.morphAttributes;for(const o in i){const c=[],u=i[o];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(e));this.morphAttributes[o]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new Ee,Ki=new Hl,Gr=new br,Pc=new U,Vr=new U,Wr=new U,qr=new U,fa=new U,Xr=new U,Dc=new U,$r=new U;class Ke extends Be{constructor(t=new hn,e=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(i&&l){Xr.set(0,0,0);for(let h=0,o=i.length;h<o;h++){const c=l[h],u=i[h];c!==0&&(fa.fromBufferAttribute(u,t),a?Xr.addScaledVector(fa,c):Xr.addScaledVector(fa.sub(e),c))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Ki.copy(t.ray).recast(t.near),!(Gr.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Gr,Pc)===null||Ki.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Lc.copy(i).invert(),Ki.copy(t.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s;const i=this.geometry,a=this.material,l=i.index,h=i.attributes.position,o=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,f=i.groups,m=i.drawRange;if(l!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const v=f[x],_=a[v.materialIndex],b=Math.max(v.start,m.start),w=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=b,T=w;S<T;S+=3){const R=l.getX(S),L=l.getX(S+1),p=l.getX(S+2);s=Yr(this,_,t,n,o,c,u,R,L,p),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let v=x,_=y;v<_;v+=3){const b=l.getX(v),w=l.getX(v+1),S=l.getX(v+2);s=Yr(this,a,t,n,o,c,u,b,w,S),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const v=f[x],_=a[v.materialIndex],b=Math.max(v.start,m.start),w=Math.min(h.count,Math.min(v.start+v.count,m.start+m.count));for(let S=b,T=w;S<T;S+=3){const R=S,L=S+1,p=S+2;s=Yr(this,_,t,n,o,c,u,R,L,p),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let v=x,_=y;v<_;v+=3){const b=v,w=v+1,S=v+2;s=Yr(this,a,t,n,o,c,u,b,w,S),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}}function pf(r,t,e,n,s,i,a,l){let h;if(t.side===Tn?h=n.intersectTriangle(a,i,s,!0,l):h=n.intersectTriangle(s,i,a,t.side===Vi,l),h===null)return null;$r.copy(l),$r.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo($r);return o<e.near||o>e.far?null:{distance:o,point:$r.clone(),object:r}}function Yr(r,t,e,n,s,i,a,l,h,o){r.getVertexPosition(l,Vr),r.getVertexPosition(h,Wr),r.getVertexPosition(o,qr);const c=pf(r,t,e,n,Vr,Wr,qr,Dc);if(c){const u=new U;qn.getBarycoord(Dc,Vr,Wr,qr,u),s&&(c.uv=qn.getInterpolatedAttribute(s,l,h,o,u,new re)),i&&(c.uv1=qn.getInterpolatedAttribute(i,l,h,o,u,new re)),a&&(c.normal=qn.getInterpolatedAttribute(a,l,h,o,u,new U),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a:l,b:h,c:o,normal:new U,materialIndex:0};qn.getNormal(Vr,Wr,qr,f.normal),c.face=f,c.barycoord=u}return c}class Wi extends hn{constructor(t=1,e=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const l=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const h=[],o=[],c=[],u=[];let f=0,m=0;x("z","y","x",-1,-1,n,e,t,a,i,0),x("z","y","x",1,-1,n,e,-t,a,i,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,i,4),x("x","y","z",-1,-1,t,e,-n,s,i,5),this.setIndex(h),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2));function x(y,v,_,b,w,S,T,R,L,p,d){const g=S/L,M=T/p,C=S/2,P=T/2,F=R/2,N=L+1,G=p+1;let K=0,V=0;const Q=new U;for(let et=0;et<G;et++){const ft=et*M-P;for(let wt=0;wt<N;wt++){const Dt=wt*g-C;Q[y]=Dt*b,Q[v]=ft*w,Q[_]=F,o.push(Q.x,Q.y,Q.z),Q[y]=0,Q[v]=0,Q[_]=R>0?1:-1,c.push(Q.x,Q.y,Q.z),u.push(wt/L),u.push(1-et/p),K+=1}}for(let et=0;et<p;et++)for(let ft=0;ft<L;ft++){const wt=f+ft+N*et,Dt=f+ft+N*(et+1),Pt=f+(ft+1)+N*(et+1),Wt=f+(ft+1)+N*et;h.push(wt,Dt,Wt),h.push(Dt,Pt,Wt),V+=6}l.addGroup(m,V,d),m+=V,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const s=r[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(r){const t={};for(let e=0;e<r.length;e++){const n=zs(r[e]);for(const s in n)t[s]=n[s]}return t}function mf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function nu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const gf={clone:zs,merge:fn};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class iu extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new U,Uc=new re,kc=new re;class Dn extends iu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Uc,kc),e.subVectors(kc,Uc)}setViewOffset(t,e,n,s,i,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,o=a.fullHeight;i+=a.offsetX*s/h,e-=a.offsetY*n/o,s*=a.width/h,n*=a.height/o}const l=this.filmOffset;l!==0&&(i+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Rs=1;class xf extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(As,Rs,t,e);s.layers=this.layers,this.add(s);const i=new Dn(As,Rs,t,e);i.layers=this.layers,this.add(i);const a=new Dn(As,Rs,t,e);a.layers=this.layers,this.add(a);const l=new Dn(As,Rs,t,e);l.layers=this.layers,this.add(l);const h=new Dn(As,Rs,t,e);h.layers=this.layers,this.add(h);const o=new Dn(As,Rs,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,i,a,l,h]=e;for(const o of e)this.remove(o);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,a,l,h,o,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,i),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,o),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class su extends _n{constructor(t=[],e=Fs,n,s,i,a,l,h,o,c){super(t,e,n,s,i,a,l,h,o,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yf extends us{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wi(5,5,5),i=new fi({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Oi});i.uniforms.tEquirect.value=e;const a=new Ke(s,i),l=e.minFilter;return e.minFilter===as&&(e.minFilter=ai),new xf(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const i=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(i)}}class Ie extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mf={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,i=null,a=null;const l=this._targetRay,h=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){a=!0;for(const y of t.hand.values()){const v=e.getJointPose(y,n),_=this._getHandJoint(o,y);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const c=o.joints["index-finger-tip"],u=o.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,x=.005;o.inputState.pinching&&f>m+x?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&f<=m-x&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(h.matrix.fromArray(i.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,i.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(i.linearVelocity)):h.hasLinearVelocity=!1,i.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(i.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=i!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new Gl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sf extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ma=new U,bf=new U,Ef=new Kt;class Qi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ma.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ef.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new br,wf=new re(.5,.5),Kr=new U;class Vl{constructor(t=new Qi,e=new Qi,n=new Qi,s=new Qi,i=new Qi,a=new Qi){this.planes=[t,e,n,s,i,a]}set(t,e,n,s,i,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(i),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li,n=!1){const s=this.planes,i=t.elements,a=i[0],l=i[1],h=i[2],o=i[3],c=i[4],u=i[5],f=i[6],m=i[7],x=i[8],y=i[9],v=i[10],_=i[11],b=i[12],w=i[13],S=i[14],T=i[15];if(s[0].setComponents(o-a,m-c,_-x,T-b).normalize(),s[1].setComponents(o+a,m+c,_+x,T+b).normalize(),s[2].setComponents(o+l,m+u,_+y,T+w).normalize(),s[3].setComponents(o-l,m-u,_-y,T-w).normalize(),n)s[4].setComponents(h,f,v,S).normalize(),s[5].setComponents(o-h,m-f,_-v,T-S).normalize();else if(s[4].setComponents(o-h,m-f,_-v,T-S).normalize(),e===li)s[5].setComponents(o+h,m+f,_+v,T+S).normalize();else if(e===Mo)s[5].setComponents(h,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);const e=wf.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bo=new U,Eo=new U,Nc=new Ee,Qs=new Hl,jr=new br,ga=new U,Fc=new U;class Tf extends Be{constructor(t=new hn,e=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,i=e.count;s<i;s++)bo.fromBufferAttribute(e,s-1),Eo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bo.distanceTo(Eo);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,i=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=i,t.ray.intersectsSphere(jr)===!1)return;Nc.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(Nc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,o=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,a.start),x=Math.min(c.count,a.start+a.count);for(let y=m,v=x-1;y<v;y+=o){const _=c.getX(y),b=c.getX(y+1),w=Zr(this,t,Qs,h,_,b,y);w&&e.push(w)}if(this.isLineLoop){const y=c.getX(x-1),v=c.getX(m),_=Zr(this,t,Qs,h,y,v,x-1);_&&e.push(_)}}else{const m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let y=m,v=x-1;y<v;y+=o){const _=Zr(this,t,Qs,h,y,y+1,y);_&&e.push(_)}if(this.isLineLoop){const y=Zr(this,t,Qs,h,x-1,m,x-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function Zr(r,t,e,n,s,i,a){const l=r.geometry.attributes.position;if(bo.fromBufferAttribute(l,s),Eo.fromBufferAttribute(l,i),e.distanceSqToSegment(bo,Eo,ga,Fc)>n)return;ga.applyMatrix4(r.matrixWorld);const o=t.ray.origin.distanceTo(ga);if(!(o<t.near||o>t.far))return{distance:o,point:Fc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Oc=new U,Bc=new U;class Af extends Tf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,i=e.count;s<i;s+=2)Oc.fromBufferAttribute(e,s),Bc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oc.distanceTo(Bc);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ou extends ds{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zc=new Ee,Sl=new Hl,Jr=new br,Qr=new U;class Rf extends Be{constructor(t=new hn,e=new ou){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,i=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=i,t.ray.intersectsSphere(Jr)===!1)return;zc.copy(s).invert(),Sl.copy(t.ray).applyMatrix4(zc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,o=n.index,u=n.attributes.position;if(o!==null){const f=Math.max(0,a.start),m=Math.min(o.count,a.start+a.count);for(let x=f,y=m;x<y;x++){const v=o.getX(x);Qr.fromBufferAttribute(u,v),Hc(Qr,v,h,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,y=m;x<y;x++)Qr.fromBufferAttribute(u,x),Hc(Qr,x,h,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function Hc(r,t,e,n,s,i,a){const l=Sl.distanceSqToPoint(r);if(l<e){const h=new U;Sl.closestPointToPoint(r,h),h.applyMatrix4(n);const o=s.ray.origin.distanceTo(h);if(o<s.near||o>s.far)return;i.push({distance:o,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class au extends _n{constructor(t,e,n,s,i,a,l,h,o){super(t,e,n,s,i,a,l,h,o),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lu extends _n{constructor(t,e,n=hs,s,i,a,l=Nn,h=Nn,o,c=dr,u=1){if(c!==dr&&c!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,i,a,l,h,c,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cu extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wo extends hn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const i=[],a=[],l=[],h=[],o=new U,c=new re;a.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*s;o.x=t*Math.cos(m),o.y=t*Math.sin(m),a.push(o.x,o.y,o.z),l.push(0,0,1),c.x=(a[f]/t+1)/2,c.y=(a[f+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)i.push(u,u+1,0);this.setIndex(i),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wl extends hn{constructor(t=1,e=1,n=1,s=32,i=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:i,openEnded:a,thetaStart:l,thetaLength:h};const o=this;s=Math.floor(s),i=Math.floor(i);const c=[],u=[],f=[],m=[];let x=0;const y=[],v=n/2;let _=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function b(){const S=new U,T=new U;let R=0;const L=(e-t)/n;for(let p=0;p<=i;p++){const d=[],g=p/i,M=g*(e-t)+t;for(let C=0;C<=s;C++){const P=C/s,F=P*h+l,N=Math.sin(F),G=Math.cos(F);T.x=M*N,T.y=-g*n+v,T.z=M*G,u.push(T.x,T.y,T.z),S.set(N,L,G).normalize(),f.push(S.x,S.y,S.z),m.push(P,1-g),d.push(x++)}y.push(d)}for(let p=0;p<s;p++)for(let d=0;d<i;d++){const g=y[d][p],M=y[d+1][p],C=y[d+1][p+1],P=y[d][p+1];(t>0||d!==0)&&(c.push(g,M,P),R+=3),(e>0||d!==i-1)&&(c.push(M,C,P),R+=3)}o.addGroup(_,R,0),_+=R}function w(S){const T=x,R=new re,L=new U;let p=0;const d=S===!0?t:e,g=S===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,v*g,0),f.push(0,g,0),m.push(.5,.5),x++;const M=x;for(let C=0;C<=s;C++){const F=C/s*h+l,N=Math.cos(F),G=Math.sin(F);L.x=d*G,L.y=v*g,L.z=d*N,u.push(L.x,L.y,L.z),f.push(0,g,0),R.x=N*.5+.5,R.y=G*.5*g+.5,m.push(R.x,R.y),x++}for(let C=0;C<s;C++){const P=T+C,F=M+C;S===!0?c.push(F,F+1,P):c.push(F+1,F,P),p+=3}o.addGroup(_,p,S===!0?1:2),_+=p}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const to=new U,eo=new U,_a=new U,no=new qn;class Cf extends hn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),i=Math.cos(Ds*e),a=t.getIndex(),l=t.getAttribute("position"),h=a?a.count:l.count,o=[0,0,0],c=["a","b","c"],u=new Array(3),f={},m=[];for(let x=0;x<h;x+=3){a?(o[0]=a.getX(x),o[1]=a.getX(x+1),o[2]=a.getX(x+2)):(o[0]=x,o[1]=x+1,o[2]=x+2);const{a:y,b:v,c:_}=no;if(y.fromBufferAttribute(l,o[0]),v.fromBufferAttribute(l,o[1]),_.fromBufferAttribute(l,o[2]),no.getNormal(_a),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const w=(b+1)%3,S=u[b],T=u[w],R=no[c[b]],L=no[c[w]],p=`${S}_${T}`,d=`${T}_${S}`;d in f&&f[d]?(_a.dot(f[d].normal)<=i&&(m.push(R.x,R.y,R.z),m.push(L.x,L.y,L.z)),f[d]=null):p in f||(f[p]={index0:o[b],index1:o[w],normal:_a.clone()})}}for(const x in f)if(f[x]){const{index0:y,index1:v}=f[x];to.fromBufferAttribute(l,y),eo.fromBufferAttribute(l,v),m.push(to.x,to.y,to.z),m.push(eo.x,eo.y,eo.z)}this.setAttribute("position",new me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Io extends hn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const i=t/2,a=e/2,l=Math.floor(n),h=Math.floor(s),o=l+1,c=h+1,u=t/l,f=e/h,m=[],x=[],y=[],v=[];for(let _=0;_<c;_++){const b=_*f-a;for(let w=0;w<o;w++){const S=w*u-i;x.push(S,-b,0),y.push(0,0,1),v.push(w/l),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<l;b++){const w=b+o*_,S=b+o*(_+1),T=b+1+o*(_+1),R=b+1+o*_;m.push(w,S,R),m.push(S,T,R)}this.setIndex(m),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.widthSegments,t.heightSegments)}}class ql extends hn{constructor(t=.5,e=1,n=32,s=1,i=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:i,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const l=[],h=[],o=[],c=[];let u=t;const f=(e-t)/s,m=new U,x=new re;for(let y=0;y<=s;y++){for(let v=0;v<=n;v++){const _=i+v/n*a;m.x=u*Math.cos(_),m.y=u*Math.sin(_),h.push(m.x,m.y,m.z),o.push(0,0,1),x.x=(m.x/e+1)/2,x.y=(m.y/e+1)/2,c.push(x.x,x.y)}u+=f}for(let y=0;y<s;y++){const v=y*(n+1);for(let _=0;_<n;_++){const b=_+v,w=b,S=b+n+1,T=b+n+2,R=b+1;l.push(w,S,R),l.push(S,T,R)}}this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xl extends hn{constructor(t=1,e=32,n=16,s=0,i=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:i,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(a+l,Math.PI);let o=0;const c=[],u=new U,f=new U,m=[],x=[],y=[],v=[];for(let _=0;_<=n;_++){const b=[],w=_/n;let S=0;_===0&&a===0?S=.5/e:_===n&&h===Math.PI&&(S=-.5/e);for(let T=0;T<=e;T++){const R=T/e;u.x=-t*Math.cos(s+R*i)*Math.sin(a+w*l),u.y=t*Math.cos(a+w*l),u.z=t*Math.sin(s+R*i)*Math.sin(a+w*l),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),v.push(R+S,1-w),b.push(o++)}c.push(b)}for(let _=0;_<n;_++)for(let b=0;b<e;b++){const w=c[_][b+1],S=c[_][b],T=c[_+1][b],R=c[_+1][b+1];(_!==0||a>0)&&m.push(w,S,R),(_!==n-1||h<Math.PI)&&m.push(S,T,R)}this.setIndex(m),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ye extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class If extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lf extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $l extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pf extends $l{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const va=new Ee,Gc=new U,Vc=new U;class hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wc=new Ee,tr=new U,xa=new U;class Df extends hu{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,i=t.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),xa.copy(n.position),xa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xa),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc,n.coordinateSystem,n.reversedDepth)}}class ya extends $l{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Df}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class uu extends iu{constructor(t=-1,e=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-t,a=n+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=o*this.view.offsetX,a=i+o*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(i,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Uf extends hu{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kf extends $l{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Uf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nf extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function qc(r,t,e,n){const s=Ff(n);switch(e){case Wh:return r*t;case Xh:return r*t/s.components*s.byteLength;case Nl:return r*t/s.components*s.byteLength;case $h:return r*t*2/s.components*s.byteLength;case Fl:return r*t*2/s.components*s.byteLength;case qh:return r*t*3/s.components*s.byteLength;case ni:return r*t*4/s.components*s.byteLength;case Ol:return r*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ka:case Za:return Math.max(r,16)*Math.max(t,8)/4;case Ya:case ja:return Math.max(r,8)*Math.max(t,8)/2;case Ja:case Qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case _l:return Math.ceil(r/4)*Math.ceil(t/4)*16;case vl:case xl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case yl:case Ml:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ff(r){switch(r){case ui:case zh:return{byteLength:1,components:1};case hr:case Hh:case yr:return{byteLength:2,components:1};case Ul:case kl:return{byteLength:2,components:4};case hs:case Dl:case wi:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function du(){let r=null,t=!1,e=null,n=null;function s(i,a){e(i,a),n=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){r=i}}}function Of(r){const t=new WeakMap;function e(l,h){const o=l.array,c=l.usage,u=o.byteLength,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,o,c),l.onUploadCallback();let m;if(o instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)m=r.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(o instanceof Int16Array)m=r.SHORT;else if(o instanceof Uint32Array)m=r.UNSIGNED_INT;else if(o instanceof Int32Array)m=r.INT;else if(o instanceof Int8Array)m=r.BYTE;else if(o instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:f,type:m,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,h,o){const c=h.array,u=h.updateRanges;if(r.bindBuffer(o,l),u.length===0)r.bufferSubData(o,0,c);else{u.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<u.length;m++){const x=u[f],y=u[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,u[f]=y)}u.length=f+1;for(let m=0,x=u.length;m<x;m++){const y=u[m];r.bufferSubData(o,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(r.deleteBuffer(h.buffer),t.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const o=t.get(l);if(o===void 0)t.set(l,e(l,h));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,h),o.version=l.version}}return{get:s,remove:i,update:a}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
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
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,Op=`
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,qm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,$m=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,o0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,u0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:Hf,alphamap_pars_fragment:Gf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:qf,aomap_pars_fragment:Xf,batching_pars_vertex:$f,batching_vertex:Yf,begin_vertex:Kf,beginnormal_vertex:jf,bsdfs:Zf,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:_p,envmap_common_pars_fragment:vp,envmap_pars_fragment:xp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Lp,envmap_vertex:Mp,fog_vertex:Sp,fog_pars_vertex:bp,fog_fragment:Ep,fog_pars_fragment:wp,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Ip,lights_toon_fragment:Pp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Up,lights_phong_pars_fragment:kp,lights_physical_fragment:Np,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:Bp,lights_fragment_end:zp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:qp,map_pars_fragment:Xp,map_particle_fragment:$p,map_particle_pars_fragment:Yp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:jp,morphinstance_vertex:Zp,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:_m,roughnessmap_fragment:vm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:bm,skinbase_vertex:Em,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Im,tonemapping_pars_fragment:Lm,transmission_fragment:Pm,transmission_pars_fragment:Dm,uv_pars_fragment:Um,uv_pars_vertex:km,uv_vertex:Nm,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:zm,backgroundCube_frag:Hm,cube_vert:Gm,cube_frag:Vm,depth_vert:Wm,depth_frag:qm,distanceRGBA_vert:Xm,distanceRGBA_frag:$m,equirect_vert:Ym,equirect_frag:Km,linedashed_vert:jm,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:_0},ht={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},oi={basic:{uniforms:fn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:fn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:fn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:fn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:fn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:fn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:fn([ht.points,ht.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:fn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:fn([ht.common,ht.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:fn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:fn([ht.sprite,ht.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:fn([ht.common,ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:fn([ht.lights,ht.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};oi.physical={uniforms:fn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const io={r:0,b:0,g:0},Zi=new di,v0=new Ee;function x0(r,t,e,n,s,i,a){const l=new qt(0);let h=i===!0?0:1,o,c,u=null,f=0,m=null;function x(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function y(w){let S=!1;const T=x(w);T===null?_(l,h):T&&T.isColor&&(_(T,1),S=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(w,S){const T=x(S);T&&(T.isCubeTexture||T.mapping===Co)?(c===void 0&&(c=new Ke(new Wi(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:zs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,L,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Zi.copy(S.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(Zi)),c.material.toneMapped=ae.getTransfer(T.colorSpace)!==de,(u!==T||f!==T.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,m=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(o===void 0&&(o=new Ke(new Io(2,2),new fi({name:"BackgroundMaterial",uniforms:zs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(o)),o.material.uniforms.t2D.value=T,o.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,o.material.toneMapped=ae.getTransfer(T.colorSpace)!==de,T.matrixAutoUpdate===!0&&T.updateMatrix(),o.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||m!==r.toneMapping)&&(o.material.needsUpdate=!0,u=T,f=T.version,m=r.toneMapping),o.layers.enableAll(),w.unshift(o,o.geometry,o.material,0,0,null))}function _(w,S){w.getRGB(io,nu(r)),n.buffers.color.setClear(io.r,io.g,io.b,S,a)}function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,S=1){l.set(w),h=S,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,_(l,h)},render:y,addToRenderList:v,dispose:b}}function y0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=f(null);let i=s,a=!1;function l(g,M,C,P,F){let N=!1;const G=u(P,C,M);i!==G&&(i=G,o(i.object)),N=m(g,P,C,F),N&&x(g,P,C,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,S(g,M,C,P),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function h(){return r.createVertexArray()}function o(g){return r.bindVertexArray(g)}function c(g){return r.deleteVertexArray(g)}function u(g,M,C){const P=C.wireframe===!0;let F=n[g.id];F===void 0&&(F={},n[g.id]=F);let N=F[M.id];N===void 0&&(N={},F[M.id]=N);let G=N[P];return G===void 0&&(G=f(h()),N[P]=G),G}function f(g){const M=[],C=[],P=[];for(let F=0;F<e;F++)M[F]=0,C[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:P,object:g,attributes:{},index:null}}function m(g,M,C,P){const F=i.attributes,N=M.attributes;let G=0;const K=C.getAttributes();for(const V in K)if(K[V].location>=0){const et=F[V];let ft=N[V];if(ft===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(ft=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(ft=g.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;G++}return i.attributesNum!==G||i.index!==P}function x(g,M,C,P){const F={},N=M.attributes;let G=0;const K=C.getAttributes();for(const V in K)if(K[V].location>=0){let et=N[V];et===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(et=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(et=g.instanceColor));const ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),F[V]=ft,G++}i.attributes=F,i.attributesNum=G,i.index=P}function y(){const g=i.newAttributes;for(let M=0,C=g.length;M<C;M++)g[M]=0}function v(g){_(g,0)}function _(g,M){const C=i.newAttributes,P=i.enabledAttributes,F=i.attributeDivisors;C[g]=1,P[g]===0&&(r.enableVertexAttribArray(g),P[g]=1),F[g]!==M&&(r.vertexAttribDivisor(g,M),F[g]=M)}function b(){const g=i.newAttributes,M=i.enabledAttributes;for(let C=0,P=M.length;C<P;C++)M[C]!==g[C]&&(r.disableVertexAttribArray(C),M[C]=0)}function w(g,M,C,P,F,N,G){G===!0?r.vertexAttribIPointer(g,M,C,F,N):r.vertexAttribPointer(g,M,C,P,F,N)}function S(g,M,C,P){y();const F=P.attributes,N=C.getAttributes(),G=M.defaultAttributeValues;for(const K in N){const V=N[K];if(V.location>=0){let Q=F[K];if(Q===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(Q=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(Q=g.instanceColor)),Q!==void 0){const et=Q.normalized,ft=Q.itemSize,wt=t.get(Q);if(wt===void 0)continue;const Dt=wt.buffer,Pt=wt.type,Wt=wt.bytesPerElement,X=Pt===r.INT||Pt===r.UNSIGNED_INT||Q.gpuType===Dl;if(Q.isInterleavedBufferAttribute){const j=Q.data,ct=j.stride,Ct=Q.offset;if(j.isInstancedInterleavedBuffer){for(let mt=0;mt<V.locationSize;mt++)_(V.location+mt,j.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let mt=0;mt<V.locationSize;mt++)v(V.location+mt);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let mt=0;mt<V.locationSize;mt++)w(V.location+mt,ft/V.locationSize,Pt,et,ct*Wt,(Ct+ft/V.locationSize*mt)*Wt,X)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)_(V.location+j,Q.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<V.locationSize;j++)v(V.location+j);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let j=0;j<V.locationSize;j++)w(V.location+j,ft/V.locationSize,Pt,et,ft*Wt,ft/V.locationSize*j*Wt,X)}}else if(G!==void 0){const et=G[K];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(V.location,et);break;case 3:r.vertexAttrib3fv(V.location,et);break;case 4:r.vertexAttrib4fv(V.location,et);break;default:r.vertexAttrib1fv(V.location,et)}}}}b()}function T(){p();for(const g in n){const M=n[g];for(const C in M){const P=M[C];for(const F in P)c(P[F].object),delete P[F];delete M[C]}delete n[g]}}function R(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const C in M){const P=M[C];for(const F in P)c(P[F].object),delete P[F];delete M[C]}delete n[g.id]}function L(g){for(const M in n){const C=n[M];if(C[g.id]===void 0)continue;const P=C[g.id];for(const F in P)c(P[F].object),delete P[F];delete C[g.id]}}function p(){d(),a=!0,i!==s&&(i=s,o(i.object))}function d(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:p,resetDefaultState:d,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:v,disableUnusedAttributes:b}}function M0(r,t,e){let n;function s(o){n=o}function i(o,c){r.drawArrays(n,o,c),e.update(c,n,1)}function a(o,c,u){u!==0&&(r.drawArraysInstanced(n,o,c,u),e.update(c,n,u))}function l(o,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,c,0,u);let m=0;for(let x=0;x<u;x++)m+=c[x];e.update(m,n,1)}function h(o,c,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<o.length;x++)a(o[x],c[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,o,0,c,0,f,0,u);let x=0;for(let y=0;y<u;y++)x+=c[y]*f[y];e.update(x,n,1)}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function S0(r,t,e,n){let s;function i(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==ni&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){const p=L===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==ui&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==wi&&!p)}function h(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const c=h(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:T,maxSamples:R}}function b0(r){const t=this;let e=null,n=0,s=!1,i=!1;const a=new Qi,l=new Kt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,m){const x=u.clippingPlanes,y=u.clipIntersection,v=u.clipShadows,_=r.get(u);if(!s||x===null||x.length===0||i&&!v)i?c(null):o();else{const b=i?0:n,w=b*4;let S=_.clippingState||null;h.value=S,S=c(x,f,w,m);for(let T=0;T!==w;++T)S[T]=e[T];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function o(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,m,x){const y=u!==null?u.length:0;let v=null;if(y!==0){if(v=h.value,x!==!0||v===null){const _=m+y*4,b=f.matrixWorldInverse;l.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let w=0,S=m;w!==y;++w,S+=4)a.copy(u[w]).applyMatrix4(b,l),a.normal.toArray(v,S),v[S+3]=a.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,v}}function E0(r){let t=new WeakMap;function e(a,l){return l===Wa?a.mapping=Fs:l===qa&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Wa||l===qa)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const o=new yf(h.height);return o.fromEquirectangularTexture(r,a),t.set(a,o),a.addEventListener("dispose",s),e(o.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}const Ls=4,Xc=[.125,.215,.35,.446,.526,.582],is=20,Ma=new uu,$c=new qt;let Sa=null,ba=0,Ea=0,wa=!1;const ts=(1+Math.sqrt(5))/2,Cs=1/ts,Yc=[new U(-ts,Cs,0),new U(ts,Cs,0),new U(-Cs,0,ts),new U(Cs,0,ts),new U(0,ts,-Cs),new U(0,ts,Cs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],w0=new U;class Kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,i={}){const{size:a=256,position:l=w0}=i;Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ba,Ea),this._renderer.xr.enabled=wa,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:yr,format:ni,colorSpace:Bs,depthBuffer:!1},s=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(i)),this._blurMaterial=A0(i,t,e)}return s}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,n,s,i){const h=new Dn(90,1,e,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor($c),u.toneMapping=Bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const y=new ns({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),v=new Ke(new Wi,y);let _=!1;const b=t.background;b?b.isColor&&(y.color.copy(b),t.background=null,_=!0):(y.color.copy($c),_=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(h.up.set(0,o[w],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x+c[w],i.y,i.z)):S===1?(h.up.set(0,0,o[w]),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y+c[w],i.z)):(h.up.set(0,o[w],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y,i.z+c[w]));const T=this._cubeSize;so(s,S*T,w>2?T:0,T,T),u.setRenderTarget(s),_&&u.render(v,h),u.render(t,h)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Fs||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=t;const h=this._cubeSize;so(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=Yc[(s-i-1)%Yc.length];this._blur(t,i-1,i,a,l)}e.autoClear=n}_blur(t,e,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",i),this._halfBlur(a,t,n,n,s,"longitudinal",i)}_halfBlur(t,e,n,s,i,a,l){const h=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ke(this._lodPlanes[s],o),f=o.uniforms,m=this._sizeLods[n]-1,x=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*is-1),y=i/x,v=isFinite(i)?1+Math.floor(c*y):is;v>is&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${is}`);const _=[];let b=0;for(let L=0;L<is;++L){const p=L/y,d=Math.exp(-p*p/2);_.push(d),L===0?b+=d:L<v&&(b+=2*d)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;f.envMap.value=t.texture,f.samples.value=v,f.weights.value=_,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-n;const S=this._sizeLods[s],T=3*S*(s>w-Ls?s-w+Ls:0),R=4*(this._cubeSize-S);so(e,T,R,3*S,2*S),h.setRenderTarget(e),h.render(u,Ma)}}function T0(r){const t=[],e=[],n=[];let s=r;const i=r-Ls+1+Xc.length;for(let a=0;a<i;a++){const l=Math.pow(2,s);e.push(l);let h=1/l;a>r-Ls?h=Xc[a-r+Ls-1]:a===0&&(h=0),n.push(h);const o=1/(l-2),c=-o,u=1+o,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,x=6,y=3,v=2,_=1,b=new Float32Array(y*x*m),w=new Float32Array(v*x*m),S=new Float32Array(_*x*m);for(let R=0;R<m;R++){const L=R%3*2/3-1,p=R>2?0:-1,d=[L,p,0,L+2/3,p,0,L+2/3,p+1,0,L,p,0,L+2/3,p+1,0,L,p+1,0];b.set(d,y*x*R),w.set(f,v*x*R);const g=[R,R,R,R,R,R];S.set(g,_*x*R)}const T=new hn;T.setAttribute("position",new ci(b,y)),T.setAttribute("uv",new ci(w,v)),T.setAttribute("faceIndex",new ci(S,_)),t.push(T),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(r,t,e){const n=new us(r,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(r,t,e,n,s){r.viewport.set(t,e,n,s),r.scissor.set(t,e,n,s)}function A0(r,t,e){const n=new Float32Array(is),s=new U(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Zc(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Jc(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function R0(r){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,o=h===Wa||h===qa,c=h===Fs||h===Os;if(o||c){let u=t.get(l);const f=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new Kc(r)),u=o?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const m=l.image;return o&&m&&m.height>0||c&&m&&s(m)?(e===null&&(e=new Kc(r)),u=o?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",i),u.texture):null}}}return l}function s(l){let h=0;const o=6;for(let c=0;c<o;c++)l[c]!==void 0&&h++;return h===o}function i(l){const h=l.target;h.removeEventListener("dispose",i);const o=t.get(h);o!==void 0&&(t.delete(h),o.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function C0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function I0(r,t,e,n){const s={},i=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const m=i.get(f);m&&(t.remove(m),i.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const m in f)t.update(f[m],r.ARRAY_BUFFER)}function o(u){const f=[],m=u.index,x=u.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let w=0,S=b.length;w<S;w+=3){const T=b[w+0],R=b[w+1],L=b[w+2];f.push(T,R,R,L,L,T)}}else if(x!==void 0){const b=x.array;y=x.version;for(let w=0,S=b.length/3-1;w<S;w+=3){const T=w+0,R=w+1,L=w+2;f.push(T,R,R,L,L,T)}}else return;const v=new(jh(f)?eu:tu)(f,1);v.version=y;const _=i.get(u);_&&t.remove(_),i.set(u,v)}function c(u){const f=i.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&o(u)}else o(u);return i.get(u)}return{get:l,update:h,getWireframeAttribute:c}}function L0(r,t,e){let n;function s(f){n=f}let i,a;function l(f){i=f.type,a=f.bytesPerElement}function h(f,m){r.drawElements(n,m,i,f*a),e.update(m,n,1)}function o(f,m,x){x!==0&&(r.drawElementsInstanced(n,m,i,f*a,x),e.update(m,n,x))}function c(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,i,f,0,x);let v=0;for(let _=0;_<x;_++)v+=m[_];e.update(v,n,1)}function u(f,m,x,y){if(x===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<f.length;_++)o(f[_]/a,m[_],y[_]);else{v.multiDrawElementsInstancedWEBGL(n,m,0,i,f,0,y,0,x);let _=0;for(let b=0;b<x;b++)_+=m[b]*y[b];e.update(_,n,1)}}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function P0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,l){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=l*(i/3);break;case r.LINES:e.lines+=l*(i/2);break;case r.LINE_STRIP:e.lines+=l*(i-1);break;case r.LINE_LOOP:e.lines+=l*i;break;case r.POINTS:e.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function D0(r,t,e){const n=new WeakMap,s=new fe;function i(a,l,h){const o=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(l);if(f===void 0||f.count!==u){let g=function(){p.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var m=g;f!==void 0&&f.texture.dispose();const x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],b=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),v===!0&&(S=3);let T=l.attributes.position.count*S,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const L=new Float32Array(T*R*4*u),p=new Zh(L,T,R,u);p.type=wi,p.needsUpdate=!0;const d=S*4;for(let M=0;M<u;M++){const C=_[M],P=b[M],F=w[M],N=T*R*4*M;for(let G=0;G<C.count;G++){const K=G*d;x===!0&&(s.fromBufferAttribute(C,G),L[N+K+0]=s.x,L[N+K+1]=s.y,L[N+K+2]=s.z,L[N+K+3]=0),y===!0&&(s.fromBufferAttribute(P,G),L[N+K+4]=s.x,L[N+K+5]=s.y,L[N+K+6]=s.z,L[N+K+7]=0),v===!0&&(s.fromBufferAttribute(F,G),L[N+K+8]=s.x,L[N+K+9]=s.y,L[N+K+10]=s.z,L[N+K+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:p,size:new re(T,R)},n.set(l,f),l.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let x=0;for(let v=0;v<o.length;v++)x+=o[v];const y=l.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",o)}h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:i}}function U0(r,t,e,n){let s=new WeakMap;function i(h){const o=n.render.frame,c=h.geometry,u=t.get(h,c);if(s.get(u)!==o&&(t.update(u),s.set(u,o)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==o&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,o))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==o&&(f.update(),s.set(f,o))}return u}function a(){s=new WeakMap}function l(h){const o=h.target;o.removeEventListener("dispose",l),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:i,dispose:a}}const fu=new _n,Qc=new lu(1,1),pu=new Zh,mu=new nf,gu=new su,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function Vs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const s=t*e;let i=th[s];if(i===void 0&&(i=new Float32Array(s),th[s]=i),t!==0){n.toArray(i,0);for(let a=1,l=0;a!==t;++a)l+=e,r[a].toArray(i,l)}return i}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function He(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Lo(r,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function k0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function N0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),He(e,t)}}function F0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),He(e,t)}}function O0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),He(e,t)}}function B0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;sh.set(n),r.uniformMatrix2fv(this.addr,!1,sh),He(e,n)}}function z0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;ih.set(n),r.uniformMatrix3fv(this.addr,!1,ih),He(e,n)}}function H0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;nh.set(n),r.uniformMatrix4fv(this.addr,!1,nh),He(e,n)}}function G0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function V0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),He(e,t)}}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),He(e,t)}}function q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),He(e,t)}}function X0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),He(e,t)}}function Y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),He(e,t)}}function K0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),He(e,t)}}function j0(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(Qc.compareFunction=Kh,i=Qc):i=fu,e.setTexture2D(t||i,s)}function Z0(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mu,s)}function J0(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gu,s)}function Q0(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pu,s)}function tg(r){switch(r){case 5126:return k0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return q0;case 5125:return X0;case 36294:return $0;case 36295:return Y0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function eg(r,t){r.uniform1fv(this.addr,t)}function ng(r,t){const e=Vs(t,this.size,2);r.uniform2fv(this.addr,e)}function ig(r,t){const e=Vs(t,this.size,3);r.uniform3fv(this.addr,e)}function sg(r,t){const e=Vs(t,this.size,4);r.uniform4fv(this.addr,e)}function rg(r,t){const e=Vs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function og(r,t){const e=Vs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ag(r,t){const e=Vs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lg(r,t){r.uniform1iv(this.addr,t)}function cg(r,t){r.uniform2iv(this.addr,t)}function hg(r,t){r.uniform3iv(this.addr,t)}function ug(r,t){r.uniform4iv(this.addr,t)}function dg(r,t){r.uniform1uiv(this.addr,t)}function fg(r,t){r.uniform2uiv(this.addr,t)}function pg(r,t){r.uniform3uiv(this.addr,t)}function mg(r,t){r.uniform4uiv(this.addr,t)}function gg(r,t,e){const n=this.cache,s=t.length,i=Lo(e,s);ze(n,i)||(r.uniform1iv(this.addr,i),He(n,i));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fu,i[a])}function _g(r,t,e){const n=this.cache,s=t.length,i=Lo(e,s);ze(n,i)||(r.uniform1iv(this.addr,i),He(n,i));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mu,i[a])}function vg(r,t,e){const n=this.cache,s=t.length,i=Lo(e,s);ze(n,i)||(r.uniform1iv(this.addr,i),He(n,i));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gu,i[a])}function xg(r,t,e){const n=this.cache,s=t.length,i=Lo(e,s);ze(n,i)||(r.uniform1iv(this.addr,i),He(n,i));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pu,i[a])}function yg(r){switch(r){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}class Mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tg(e.type)}}class Sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yg(e.type)}}class bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const l=s[i];l.setValue(t,e[l.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function rh(r,t){r.seq.push(t),r.map[t.id]=t}function Eg(r,t,e){const n=r.name,s=n.length;for(Ta.lastIndex=0;;){const i=Ta.exec(n),a=Ta.lastIndex;let l=i[1];const h=i[2]==="]",o=i[3];if(h&&(l=l|0),o===void 0||o==="["&&a+2===s){rh(e,o===void 0?new Mg(l,r,t):new Sg(l,r,t));break}else{let u=e.map[l];u===void 0&&(u=new bg(l),rh(e,u)),e=u}}}class go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=t.getActiveUniform(e,s),a=t.getUniformLocation(e,i.name);Eg(i,a,this)}}setValue(t,e,n,s){const i=this.map[e];i!==void 0&&i.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let i=0,a=e.length;i!==a;++i){const l=e[i],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,i=t.length;s!==i;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function oh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const wg=37297;let Tg=0;function Ag(r,t){const e=r.split(`
`),n=[],s=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let a=s;a<i;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const ah=new Kt;function Rg(r){ae._getMatrix(ah,ae.workingColorSpace,r);const t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case yo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function lh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=(r.getShaderInfoLog(t)||"").trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+Ag(r.getShaderSource(t),l)}else return i}function Cg(r,t){const e=Rg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ig(r,t){let e;switch(t){case md:e="Linear";break;case gd:e="Reinhard";break;case _d:e="Cineon";break;case vd:e="ACESFilmic";break;case yd:e="AgX";break;case Md:e="Neutral";break;case xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ro=new U;function Lg(){ae.getLuminanceCoefficients(ro);const r=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Dg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(t,s),a=i.name;let l=1;i.type===r.FLOAT_MAT2&&(l=2),i.type===r.FLOAT_MAT3&&(l=3),i.type===r.FLOAT_MAT4&&(l=4),e[a]={type:i.type,location:r.getAttribLocation(t,a),locationSize:l}}return e}function ir(r){return r!==""}function ch(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(r){return r.replace(kg,Fg)}const Ng=new Map;function Fg(r,t){let e=Zt[t];if(e===void 0){const n=Ng.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bl(e)}const Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(Og,Bg)}function Bg(r,t,e,n){let s="";for(let i=parseInt(t);i<parseInt(e);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function dh(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function Hg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fs:case Os:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function Vg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pl:t="ENVMAP_BLENDING_MULTIPLY";break;case fd:t="ENVMAP_BLENDING_MIX";break;case pd:t="ENVMAP_BLENDING_ADD";break}return t}function Wg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qg(r,t,e,n){const s=r.getContext(),i=e.defines;let a=e.vertexShader,l=e.fragmentShader;const h=zg(e),o=Hg(e),c=Gg(e),u=Vg(e),f=Wg(e),m=Pg(e),x=Dg(i),y=s.createProgram();let v,_,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ir).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ir).join(`
`),_.length>0&&(_+=`
`)):(v=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),_=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=bl(a),a=ch(a,e),a=hh(a,e),l=bl(l),l=ch(l,e),l=hh(l,e),a=uh(a),l=uh(l),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=b+v+a,S=b+_+l,T=oh(s,s.VERTEX_SHADER,w),R=oh(s,s.FRAGMENT_SHADER,S);s.attachShader(y,T),s.attachShader(y,R),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(M){if(r.debug.checkShaderErrors){const C=s.getProgramInfoLog(y)||"",P=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(R)||"",N=C.trim(),G=P.trim(),K=F.trim();let V=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,y,T,R);else{const et=lh(s,T,"vertex"),ft=lh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+N+`
`+et+`
`+ft)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||K==="")&&(Q=!1);Q&&(M.diagnostics={runnable:V,programLog:N,vertexShader:{log:G,prefix:v},fragmentShader:{log:K,prefix:_}})}s.deleteShader(T),s.deleteShader(R),p=new go(s,y),d=Ug(s,y)}let p;this.getUniforms=function(){return p===void 0&&L(this),p};let d;this.getAttributes=function(){return d===void 0&&L(this),d};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(y,wg)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=R,this}let Xg=0;class $g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Yg(t),e.set(t,n)),n}}class Yg{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}}function Kg(r,t,e,n,s,i,a){const l=new Jh,h=new $g,o=new Set,c=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(d){return o.add(d),d===0?"uv":`uv${d}`}function v(d,g,M,C,P){const F=C.fog,N=P.geometry,G=d.isMeshStandardMaterial?C.environment:null,K=(d.isMeshStandardMaterial?e:t).get(d.envMap||G),V=K&&K.mapping===Co?K.image.height:null,Q=x[d.type];d.precision!==null&&(m=s.getMaxPrecision(d.precision),m!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",m,"instead."));const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ft=et!==void 0?et.length:0;let wt=0;N.morphAttributes.position!==void 0&&(wt=1),N.morphAttributes.normal!==void 0&&(wt=2),N.morphAttributes.color!==void 0&&(wt=3);let Dt,Pt,Wt,X;if(Q){const le=oi[Q];Dt=le.vertexShader,Pt=le.fragmentShader}else Dt=d.vertexShader,Pt=d.fragmentShader,h.update(d),Wt=h.getVertexShaderID(d),X=h.getFragmentShaderID(d);const j=r.getRenderTarget(),ct=r.state.buffers.depth.getReversed(),Ct=P.isInstancedMesh===!0,mt=P.isBatchedMesh===!0,zt=!!d.map,we=!!d.matcap,D=!!K,ge=!!d.aoMap,Ot=!!d.lightMap,Ht=!!d.bumpMap,Mt=!!d.normalMap,Se=!!d.displacementMap,St=!!d.emissiveMap,jt=!!d.metalnessMap,Ge=!!d.roughnessMap,Ce=d.anisotropy>0,I=d.clearcoat>0,E=d.dispersion>0,H=d.iridescence>0,Y=d.sheen>0,tt=d.transmission>0,$=Ce&&!!d.anisotropyMap,It=I&&!!d.clearcoatMap,at=I&&!!d.clearcoatNormalMap,bt=I&&!!d.clearcoatRoughnessMap,Tt=H&&!!d.iridescenceMap,st=H&&!!d.iridescenceThicknessMap,pt=Y&&!!d.sheenColorMap,Bt=Y&&!!d.sheenRoughnessMap,At=!!d.specularMap,ut=!!d.specularColorMap,Yt=!!d.specularIntensityMap,k=tt&&!!d.transmissionMap,rt=tt&&!!d.thicknessMap,lt=!!d.gradientMap,vt=!!d.alphaMap,nt=d.alphaTest>0,Z=!!d.alphaHash,yt=!!d.extensions;let Xt=Bi;d.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xt=r.toneMapping);const _e={shaderID:Q,shaderType:d.type,shaderName:d.name,vertexShader:Dt,fragmentShader:Pt,defines:d.defines,customVertexShaderID:Wt,customFragmentShaderID:X,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:m,batching:mt,batchingColor:mt&&P._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&P.instanceColor!==null,instancingMorph:Ct&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bs,alphaToCoverage:!!d.alphaToCoverage,map:zt,matcap:we,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:V,aoMap:ge,lightMap:Ot,bumpMap:Ht,normalMap:Mt,displacementMap:f&&Se,emissiveMap:St,normalMapObjectSpace:Mt&&d.normalMapType===wd,normalMapTangentSpace:Mt&&d.normalMapType===Yh,metalnessMap:jt,roughnessMap:Ge,anisotropy:Ce,anisotropyMap:$,clearcoat:I,clearcoatMap:It,clearcoatNormalMap:at,clearcoatRoughnessMap:bt,dispersion:E,iridescence:H,iridescenceMap:Tt,iridescenceThicknessMap:st,sheen:Y,sheenColorMap:pt,sheenRoughnessMap:Bt,specularMap:At,specularColorMap:ut,specularIntensityMap:Yt,transmission:tt,transmissionMap:k,thicknessMap:rt,gradientMap:lt,opaque:d.transparent===!1&&d.blending===Ps&&d.alphaToCoverage===!1,alphaMap:vt,alphaTest:nt,alphaHash:Z,combine:d.combine,mapUv:zt&&y(d.map.channel),aoMapUv:ge&&y(d.aoMap.channel),lightMapUv:Ot&&y(d.lightMap.channel),bumpMapUv:Ht&&y(d.bumpMap.channel),normalMapUv:Mt&&y(d.normalMap.channel),displacementMapUv:Se&&y(d.displacementMap.channel),emissiveMapUv:St&&y(d.emissiveMap.channel),metalnessMapUv:jt&&y(d.metalnessMap.channel),roughnessMapUv:Ge&&y(d.roughnessMap.channel),anisotropyMapUv:$&&y(d.anisotropyMap.channel),clearcoatMapUv:It&&y(d.clearcoatMap.channel),clearcoatNormalMapUv:at&&y(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&y(d.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&y(d.iridescenceMap.channel),iridescenceThicknessMapUv:st&&y(d.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&y(d.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&y(d.sheenRoughnessMap.channel),specularMapUv:At&&y(d.specularMap.channel),specularColorMapUv:ut&&y(d.specularColorMap.channel),specularIntensityMapUv:Yt&&y(d.specularIntensityMap.channel),transmissionMapUv:k&&y(d.transmissionMap.channel),thicknessMapUv:rt&&y(d.thicknessMap.channel),alphaMapUv:vt&&y(d.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Mt||Ce),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(zt||vt),fog:!!F,useFog:d.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:d.flatShading===!0&&d.wireframe===!1,sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ct,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:wt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:d.dithering,shadowMapEnabled:r.shadowMap.enabled&&M.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xt,decodeVideoTexture:zt&&d.map.isVideoTexture===!0&&ae.getTransfer(d.map.colorSpace)===de,decodeVideoTextureEmissive:St&&d.emissiveMap.isVideoTexture===!0&&ae.getTransfer(d.emissiveMap.colorSpace)===de,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===We,flipSided:d.side===Tn,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:yt&&d.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&d.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return _e.vertexUv1s=o.has(1),_e.vertexUv2s=o.has(2),_e.vertexUv3s=o.has(3),o.clear(),_e}function _(d){const g=[];if(d.shaderID?g.push(d.shaderID):(g.push(d.customVertexShaderID),g.push(d.customFragmentShaderID)),d.defines!==void 0)for(const M in d.defines)g.push(M),g.push(d.defines[M]);return d.isRawShaderMaterial===!1&&(b(g,d),w(g,d),g.push(r.outputColorSpace)),g.push(d.customProgramCacheKey),g.join()}function b(d,g){d.push(g.precision),d.push(g.outputColorSpace),d.push(g.envMapMode),d.push(g.envMapCubeUVHeight),d.push(g.mapUv),d.push(g.alphaMapUv),d.push(g.lightMapUv),d.push(g.aoMapUv),d.push(g.bumpMapUv),d.push(g.normalMapUv),d.push(g.displacementMapUv),d.push(g.emissiveMapUv),d.push(g.metalnessMapUv),d.push(g.roughnessMapUv),d.push(g.anisotropyMapUv),d.push(g.clearcoatMapUv),d.push(g.clearcoatNormalMapUv),d.push(g.clearcoatRoughnessMapUv),d.push(g.iridescenceMapUv),d.push(g.iridescenceThicknessMapUv),d.push(g.sheenColorMapUv),d.push(g.sheenRoughnessMapUv),d.push(g.specularMapUv),d.push(g.specularColorMapUv),d.push(g.specularIntensityMapUv),d.push(g.transmissionMapUv),d.push(g.thicknessMapUv),d.push(g.combine),d.push(g.fogExp2),d.push(g.sizeAttenuation),d.push(g.morphTargetsCount),d.push(g.morphAttributeCount),d.push(g.numDirLights),d.push(g.numPointLights),d.push(g.numSpotLights),d.push(g.numSpotLightMaps),d.push(g.numHemiLights),d.push(g.numRectAreaLights),d.push(g.numDirLightShadows),d.push(g.numPointLightShadows),d.push(g.numSpotLightShadows),d.push(g.numSpotLightShadowsWithMaps),d.push(g.numLightProbes),d.push(g.shadowMapType),d.push(g.toneMapping),d.push(g.numClippingPlanes),d.push(g.numClipIntersection),d.push(g.depthPacking)}function w(d,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),g.gradientMap&&l.enable(22),d.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.reversedDepthBuffer&&l.enable(4),g.skinning&&l.enable(5),g.morphTargets&&l.enable(6),g.morphNormals&&l.enable(7),g.morphColors&&l.enable(8),g.premultipliedAlpha&&l.enable(9),g.shadowMapEnabled&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),g.decodeVideoTextureEmissive&&l.enable(20),g.alphaToCoverage&&l.enable(21),d.push(l.mask)}function S(d){const g=x[d.type];let M;if(g){const C=oi[g];M=gf.clone(C.uniforms)}else M=d.uniforms;return M}function T(d,g){let M;for(let C=0,P=c.length;C<P;C++){const F=c[C];if(F.cacheKey===g){M=F,++M.usedTimes;break}}return M===void 0&&(M=new qg(r,g,d,i),c.push(M)),M}function R(d){if(--d.usedTimes===0){const g=c.indexOf(d);c[g]=c[c.length-1],c.pop(),d.destroy()}}function L(d){h.remove(d)}function p(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:S,acquireProgram:T,releaseProgram:R,releaseShaderCache:L,programs:c,dispose:p}}function jg(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function n(a){r.delete(a)}function s(a,l,h){r.get(a)[l]=h}function i(){r=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:i}}function Zg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ph(){const r=[];let t=0;const e=[],n=[],s=[];function i(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,m,x,y,v){let _=r[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:x,renderOrder:u.renderOrder,z:y,group:v},r[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=y,_.group=v),t++,_}function l(u,f,m,x,y,v){const _=a(u,f,m,x,y,v);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):e.push(_)}function h(u,f,m,x,y,v){const _=a(u,f,m,x,y,v);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function o(u,f){e.length>1&&e.sort(u||Zg),n.length>1&&n.sort(f||fh),s.length>1&&s.sort(f||fh)}function c(){for(let u=t,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:i,push:l,unshift:h,finish:c,sort:o}}function Jg(){let r=new WeakMap;function t(n,s){const i=r.get(n);let a;return i===void 0?(a=new ph,r.set(n,[a])):s>=i.length?(a=new ph,i.push(a)):a=i[s],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new qt};break;case"SpotLight":e={position:new U,direction:new U,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function t1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let e1=0;function n1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function i1(r){const t=new Qg,e=t1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new U);const s=new U,i=new Ee,a=new Ee;function l(o){let c=0,u=0,f=0;for(let d=0;d<9;d++)n.probe[d].set(0,0,0);let m=0,x=0,y=0,v=0,_=0,b=0,w=0,S=0,T=0,R=0,L=0;o.sort(n1);for(let d=0,g=o.length;d<g;d++){const M=o[d],C=M.color,P=M.intensity,F=M.distance,N=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=C.r*P,u+=C.g*P,f+=C.b*P;else if(M.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(M.sh.coefficients[G],P);L++}else if(M.isDirectionalLight){const G=t.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const K=M.shadow,V=e.get(M);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=M.shadow.matrix,b++}n.directional[m]=G,m++}else if(M.isSpotLight){const G=t.get(M);G.position.setFromMatrixPosition(M.matrixWorld),G.color.copy(C).multiplyScalar(P),G.distance=F,G.coneCos=Math.cos(M.angle),G.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),G.decay=M.decay,n.spot[y]=G;const K=M.shadow;if(M.map&&(n.spotLightMap[T]=M.map,T++,K.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[y]=K.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=N,S++}y++}else if(M.isRectAreaLight){const G=t.get(M);G.color.copy(C).multiplyScalar(P),G.halfWidth.set(M.width*.5,0,0),G.halfHeight.set(0,M.height*.5,0),n.rectArea[v]=G,v++}else if(M.isPointLight){const G=t.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),G.distance=M.distance,G.decay=M.decay,M.castShadow){const K=M.shadow,V=e.get(M);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=N,n.pointShadowMatrix[x]=M.shadow.matrix,w++}n.point[x]=G,x++}else if(M.isHemisphereLight){const G=t.get(M);G.skyColor.copy(M.color).multiplyScalar(P),G.groundColor.copy(M.groundColor).multiplyScalar(P),n.hemi[_]=G,_++}}v>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const p=n.hash;(p.directionalLength!==m||p.pointLength!==x||p.spotLength!==y||p.rectAreaLength!==v||p.hemiLength!==_||p.numDirectionalShadows!==b||p.numPointShadows!==w||p.numSpotShadows!==S||p.numSpotMaps!==T||p.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=v,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,p.directionalLength=m,p.pointLength=x,p.spotLength=y,p.rectAreaLength=v,p.hemiLength=_,p.numDirectionalShadows=b,p.numPointShadows=w,p.numSpotShadows=S,p.numSpotMaps=T,p.numLightProbes=L,n.version=e1++)}function h(o,c){let u=0,f=0,m=0,x=0,y=0;const v=c.matrixWorldInverse;for(let _=0,b=o.length;_<b;_++){const w=o[_];if(w.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),u++}else if(w.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),m++}else if(w.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),a.identity(),i.copy(w.matrixWorld),i.premultiply(v),a.extractRotation(i),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),f++}else if(w.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(v),y++}}}return{setup:l,setupView:h,state:n}}function mh(r){const t=new i1(r),e=[],n=[];function s(c){o.camera=c,e.length=0,n.length=0}function i(c){e.push(c)}function a(c){n.push(c)}function l(){t.setup(e)}function h(c){t.setupView(e,c)}const o={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:o,setupLights:l,setupLightsView:h,pushLight:i,pushShadow:a}}function s1(r){let t=new WeakMap;function e(s,i=0){const a=t.get(s);let l;return a===void 0?(l=new mh(r),t.set(s,[l])):i>=a.length?(l=new mh(r),a.push(l)):l=a[i],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function a1(r,t,e){let n=new Vl;const s=new re,i=new re,a=new fe,l=new If({depthPacking:Ed}),h=new Lf,o={},c=e.maxTextureSize,u={[Vi]:Tn,[Tn]:Vi,[We]:We},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:r1,fragmentShader:o1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new hn;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ke(x,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let _=this.type;this.render=function(R,L,p){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||R.length===0)return;const d=r.getRenderTarget(),g=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),C=r.state;C.setBlending(Oi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=_!==Si&&this.type===Si,F=_===Si&&this.type!==Si;for(let N=0,G=R.length;N<G;N++){const K=R[N],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();if(s.multiply(Q),i.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(i.x=Math.floor(c/Q.x),s.x=i.x*Q.x,V.mapSize.x=i.x),s.y>c&&(i.y=Math.floor(c/Q.y),s.y=i.y*Q.y,V.mapSize.y=i.y)),V.map===null||P===!0||F===!0){const ft=this.type!==Si?{minFilter:Nn,magFilter:Nn}:{};V.map!==null&&V.map.dispose(),V.map=new us(s.x,s.y,ft),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const et=V.getViewportCount();for(let ft=0;ft<et;ft++){const wt=V.getViewport(ft);a.set(i.x*wt.x,i.y*wt.y,i.x*wt.z,i.y*wt.w),C.viewport(a),V.updateMatrices(K,ft),n=V.getFrustum(),S(L,p,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Si&&b(V,p),V.needsUpdate=!1}_=this.type,v.needsUpdate=!1,r.setRenderTarget(d,g,M)};function b(R,L){const p=t.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new us(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(L,null,p,f,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(L,null,p,m,y,null)}function w(R,L,p,d){let g=null;const M=p.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)g=M;else if(g=p.isPointLight===!0?h:l,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const C=g.uuid,P=L.uuid;let F=o[C];F===void 0&&(F={},o[C]=F);let N=F[P];N===void 0&&(N=g.clone(),F[P]=N,L.addEventListener("dispose",T)),g=N}if(g.visible=L.visible,g.wireframe=L.wireframe,d===Si?g.side=L.shadowSide!==null?L.shadowSide:L.side:g.side=L.shadowSide!==null?L.shadowSide:u[L.side],g.alphaMap=L.alphaMap,g.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,g.map=L.map,g.clipShadows=L.clipShadows,g.clippingPlanes=L.clippingPlanes,g.clipIntersection=L.clipIntersection,g.displacementMap=L.displacementMap,g.displacementScale=L.displacementScale,g.displacementBias=L.displacementBias,g.wireframeLinewidth=L.wireframeLinewidth,g.linewidth=L.linewidth,p.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const C=r.properties.get(g);C.light=p}return g}function S(R,L,p,d,g){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===Si)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,R.matrixWorld);const P=t.update(R),F=R.material;if(Array.isArray(F)){const N=P.groups;for(let G=0,K=N.length;G<K;G++){const V=N[G],Q=F[V.materialIndex];if(Q&&Q.visible){const et=w(R,Q,d,g);R.onBeforeShadow(r,R,L,p,P,et,V),r.renderBufferDirect(p,null,P,et,R,V),R.onAfterShadow(r,R,L,p,P,et,V)}}}else if(F.visible){const N=w(R,F,d,g);R.onBeforeShadow(r,R,L,p,P,N,null),r.renderBufferDirect(p,null,P,N,R,null),R.onAfterShadow(r,R,L,p,P,N,null)}}const C=R.children;for(let P=0,F=C.length;P<F;P++)S(C[P],L,p,d,g)}function T(R){R.target.removeEventListener("dispose",T);for(const p in o){const d=o[p],g=R.target.uuid;g in d&&(d[g].dispose(),delete d[g])}}}const l1={[Fa]:Oa,[Ba]:Ga,[za]:Va,[Ns]:Ha,[Oa]:Fa,[Ga]:Ba,[Va]:za,[Ha]:Ns};function c1(r,t){function e(){let k=!1;const rt=new fe;let lt=null;const vt=new fe(0,0,0,0);return{setMask:function(nt){lt!==nt&&!k&&(r.colorMask(nt,nt,nt,nt),lt=nt)},setLocked:function(nt){k=nt},setClear:function(nt,Z,yt,Xt,_e){_e===!0&&(nt*=Xt,Z*=Xt,yt*=Xt),rt.set(nt,Z,yt,Xt),vt.equals(rt)===!1&&(r.clearColor(nt,Z,yt,Xt),vt.copy(rt))},reset:function(){k=!1,lt=null,vt.set(-1,0,0,0)}}}function n(){let k=!1,rt=!1,lt=null,vt=null,nt=null;return{setReversed:function(Z){if(rt!==Z){const yt=t.get("EXT_clip_control");Z?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),rt=Z;const Xt=nt;nt=null,this.setClear(Xt)}},getReversed:function(){return rt},setTest:function(Z){Z?j(r.DEPTH_TEST):ct(r.DEPTH_TEST)},setMask:function(Z){lt!==Z&&!k&&(r.depthMask(Z),lt=Z)},setFunc:function(Z){if(rt&&(Z=l1[Z]),vt!==Z){switch(Z){case Fa:r.depthFunc(r.NEVER);break;case Oa:r.depthFunc(r.ALWAYS);break;case Ba:r.depthFunc(r.LESS);break;case Ns:r.depthFunc(r.LEQUAL);break;case za:r.depthFunc(r.EQUAL);break;case Ha:r.depthFunc(r.GEQUAL);break;case Ga:r.depthFunc(r.GREATER);break;case Va:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=Z}},setLocked:function(Z){k=Z},setClear:function(Z){nt!==Z&&(rt&&(Z=1-Z),r.clearDepth(Z),nt=Z)},reset:function(){k=!1,lt=null,vt=null,nt=null,rt=!1}}}function s(){let k=!1,rt=null,lt=null,vt=null,nt=null,Z=null,yt=null,Xt=null,_e=null;return{setTest:function(le){k||(le?j(r.STENCIL_TEST):ct(r.STENCIL_TEST))},setMask:function(le){rt!==le&&!k&&(r.stencilMask(le),rt=le)},setFunc:function(le,gi,ri){(lt!==le||vt!==gi||nt!==ri)&&(r.stencilFunc(le,gi,ri),lt=le,vt=gi,nt=ri)},setOp:function(le,gi,ri){(Z!==le||yt!==gi||Xt!==ri)&&(r.stencilOp(le,gi,ri),Z=le,yt=gi,Xt=ri)},setLocked:function(le){k=le},setClear:function(le){_e!==le&&(r.clearStencil(le),_e=le)},reset:function(){k=!1,rt=null,lt=null,vt=null,nt=null,Z=null,yt=null,Xt=null,_e=null}}}const i=new e,a=new n,l=new s,h=new WeakMap,o=new WeakMap;let c={},u={},f=new WeakMap,m=[],x=null,y=!1,v=null,_=null,b=null,w=null,S=null,T=null,R=null,L=new qt(0,0,0),p=0,d=!1,g=null,M=null,C=null,P=null,F=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let Q=null,et={};const ft=r.getParameter(r.SCISSOR_BOX),wt=r.getParameter(r.VIEWPORT),Dt=new fe().fromArray(ft),Pt=new fe().fromArray(wt);function Wt(k,rt,lt,vt){const nt=new Uint8Array(4),Z=r.createTexture();r.bindTexture(k,Z),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<lt;yt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(rt+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return Z}const X={};X[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),l.setClear(0),j(r.DEPTH_TEST),a.setFunc(Ns),Ht(!1),Mt(uc),j(r.CULL_FACE),ge(Oi);function j(k){c[k]!==!0&&(r.enable(k),c[k]=!0)}function ct(k){c[k]!==!1&&(r.disable(k),c[k]=!1)}function Ct(k,rt){return u[k]!==rt?(r.bindFramebuffer(k,rt),u[k]=rt,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function mt(k,rt){let lt=m,vt=!1;if(k){lt=f.get(rt),lt===void 0&&(lt=[],f.set(rt,lt));const nt=k.textures;if(lt.length!==nt.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,yt=nt.length;Z<yt;Z++)lt[Z]=r.COLOR_ATTACHMENT0+Z;lt.length=nt.length,vt=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,vt=!0);vt&&r.drawBuffers(lt)}function zt(k){return x!==k?(r.useProgram(k),x=k,!0):!1}const we={[es]:r.FUNC_ADD,[ju]:r.FUNC_SUBTRACT,[Zu]:r.FUNC_REVERSE_SUBTRACT};we[Ju]=r.MIN,we[Qu]=r.MAX;const D={[td]:r.ZERO,[ed]:r.ONE,[nd]:r.SRC_COLOR,[ka]:r.SRC_ALPHA,[ld]:r.SRC_ALPHA_SATURATE,[od]:r.DST_COLOR,[sd]:r.DST_ALPHA,[id]:r.ONE_MINUS_SRC_COLOR,[Na]:r.ONE_MINUS_SRC_ALPHA,[ad]:r.ONE_MINUS_DST_COLOR,[rd]:r.ONE_MINUS_DST_ALPHA,[cd]:r.CONSTANT_COLOR,[hd]:r.ONE_MINUS_CONSTANT_COLOR,[ud]:r.CONSTANT_ALPHA,[dd]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(k,rt,lt,vt,nt,Z,yt,Xt,_e,le){if(k===Oi){y===!0&&(ct(r.BLEND),y=!1);return}if(y===!1&&(j(r.BLEND),y=!0),k!==Ku){if(k!==v||le!==d){if((_!==es||S!==es)&&(r.blendEquation(r.FUNC_ADD),_=es,S=es),le)switch(k){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dc:r.blendFunc(r.ONE,r.ONE);break;case fc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,w=null,T=null,R=null,L.set(0,0,0),p=0,v=k,d=le}return}nt=nt||rt,Z=Z||lt,yt=yt||vt,(rt!==_||nt!==S)&&(r.blendEquationSeparate(we[rt],we[nt]),_=rt,S=nt),(lt!==b||vt!==w||Z!==T||yt!==R)&&(r.blendFuncSeparate(D[lt],D[vt],D[Z],D[yt]),b=lt,w=vt,T=Z,R=yt),(Xt.equals(L)===!1||_e!==p)&&(r.blendColor(Xt.r,Xt.g,Xt.b,_e),L.copy(Xt),p=_e),v=k,d=!1}function Ot(k,rt){k.side===We?ct(r.CULL_FACE):j(r.CULL_FACE);let lt=k.side===Tn;rt&&(lt=!lt),Ht(lt),k.blending===Ps&&k.transparent===!1?ge(Oi):ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),i.setMask(k.colorWrite);const vt=k.stencilWrite;l.setTest(vt),vt&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),St(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(k){g!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),g=k)}function Mt(k){k!==Xu?(j(r.CULL_FACE),k!==M&&(k===uc?r.cullFace(r.BACK):k===$u?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ct(r.CULL_FACE),M=k}function Se(k){k!==C&&(G&&r.lineWidth(k),C=k)}function St(k,rt,lt){k?(j(r.POLYGON_OFFSET_FILL),(P!==rt||F!==lt)&&(r.polygonOffset(rt,lt),P=rt,F=lt)):ct(r.POLYGON_OFFSET_FILL)}function jt(k){k?j(r.SCISSOR_TEST):ct(r.SCISSOR_TEST)}function Ge(k){k===void 0&&(k=r.TEXTURE0+N-1),Q!==k&&(r.activeTexture(k),Q=k)}function Ce(k,rt,lt){lt===void 0&&(Q===null?lt=r.TEXTURE0+N-1:lt=Q);let vt=et[lt];vt===void 0&&(vt={type:void 0,texture:void 0},et[lt]=vt),(vt.type!==k||vt.texture!==rt)&&(Q!==lt&&(r.activeTexture(lt),Q=lt),r.bindTexture(k,rt||X[k]),vt.type=k,vt.texture=rt)}function I(){const k=et[Q];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(k){Dt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Dt.copy(k))}function Bt(k){Pt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Pt.copy(k))}function At(k,rt){let lt=o.get(rt);lt===void 0&&(lt=new WeakMap,o.set(rt,lt));let vt=lt.get(k);vt===void 0&&(vt=r.getUniformBlockIndex(rt,k.name),lt.set(k,vt))}function ut(k,rt){const vt=o.get(rt).get(k);h.get(rt)!==vt&&(r.uniformBlockBinding(rt,vt,k.__bindingPointIndex),h.set(rt,vt))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Q=null,et={},u={},f=new WeakMap,m=[],x=null,y=!1,v=null,_=null,b=null,w=null,S=null,T=null,R=null,L=new qt(0,0,0),p=0,d=!1,g=null,M=null,C=null,P=null,F=null,Dt.set(0,0,r.canvas.width,r.canvas.height),Pt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),l.reset()}return{buffers:{color:i,depth:a,stencil:l},enable:j,disable:ct,bindFramebuffer:Ct,drawBuffers:mt,useProgram:zt,setBlending:ge,setMaterial:Ot,setFlipSided:Ht,setCullFace:Mt,setLineWidth:Se,setPolygonOffset:St,setScissorTest:jt,activeTexture:Ge,bindTexture:Ce,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:Tt,texImage3D:st,updateUBOMapping:At,uniformBlockBinding:ut,texStorage2D:at,texStorage3D:bt,texSubImage2D:Y,texSubImage3D:tt,compressedTexSubImage2D:$,compressedTexSubImage3D:It,scissor:pt,viewport:Bt,reset:Yt}}function h1(r,t,e,n,s,i,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new re,c=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,E){return m?new OffscreenCanvas(I,E):So("canvas")}function y(I,E,H){let Y=1;const tt=Ce(I);if((tt.width>H||tt.height>H)&&(Y=H/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(Y*tt.width),It=Math.floor(Y*tt.height);u===void 0&&(u=x($,It));const at=E?x($,It):u;return at.width=$,at.height=It,at.getContext("2d").drawImage(I,0,0,$,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+It+")."),at}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function v(I){return I.generateMipmaps}function _(I){r.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(I,E,H,Y,tt=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=E;if(E===r.RED&&(H===r.FLOAT&&($=r.R32F),H===r.HALF_FLOAT&&($=r.R16F),H===r.UNSIGNED_BYTE&&($=r.R8)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.R8UI),H===r.UNSIGNED_SHORT&&($=r.R16UI),H===r.UNSIGNED_INT&&($=r.R32UI),H===r.BYTE&&($=r.R8I),H===r.SHORT&&($=r.R16I),H===r.INT&&($=r.R32I)),E===r.RG&&(H===r.FLOAT&&($=r.RG32F),H===r.HALF_FLOAT&&($=r.RG16F),H===r.UNSIGNED_BYTE&&($=r.RG8)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RG8UI),H===r.UNSIGNED_SHORT&&($=r.RG16UI),H===r.UNSIGNED_INT&&($=r.RG32UI),H===r.BYTE&&($=r.RG8I),H===r.SHORT&&($=r.RG16I),H===r.INT&&($=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGB8UI),H===r.UNSIGNED_SHORT&&($=r.RGB16UI),H===r.UNSIGNED_INT&&($=r.RGB32UI),H===r.BYTE&&($=r.RGB8I),H===r.SHORT&&($=r.RGB16I),H===r.INT&&($=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGBA8UI),H===r.UNSIGNED_SHORT&&($=r.RGBA16UI),H===r.UNSIGNED_INT&&($=r.RGBA32UI),H===r.BYTE&&($=r.RGBA8I),H===r.SHORT&&($=r.RGBA16I),H===r.INT&&($=r.RGBA32I)),E===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),E===r.RGBA){const It=tt?yo:ae.getTransfer(Y);H===r.FLOAT&&($=r.RGBA32F),H===r.HALF_FLOAT&&($=r.RGBA16F),H===r.UNSIGNED_BYTE&&($=It===de?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(I,E){let H;return I?E===null||E===hs||E===ur?H=r.DEPTH24_STENCIL8:E===wi?H=r.DEPTH32F_STENCIL8:E===hr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hs||E===ur?H=r.DEPTH_COMPONENT24:E===wi?H=r.DEPTH_COMPONENT32F:E===hr&&(H=r.DEPTH_COMPONENT16),H}function T(I,E){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function R(I){const E=I.target;E.removeEventListener("dispose",R),p(E),E.isVideoTexture&&c.delete(E)}function L(I){const E=I.target;E.removeEventListener("dispose",L),g(E)}function p(I){const E=n.get(I);if(E.__webglInit===void 0)return;const H=I.source,Y=f.get(H);if(Y){const tt=Y[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&d(I),Object.keys(Y).length===0&&f.delete(H)}n.remove(I)}function d(I){const E=n.get(I);r.deleteTexture(E.__webglTexture);const H=I.source,Y=f.get(H);delete Y[E.__cacheKey],a.memory.textures--}function g(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let tt=0;tt<E.__webglFramebuffer[Y].length;tt++)r.deleteFramebuffer(E.__webglFramebuffer[Y][tt]);else r.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)r.deleteFramebuffer(E.__webglFramebuffer[Y]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=I.textures;for(let Y=0,tt=H.length;Y<tt;Y++){const $=n.get(H[Y]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(H[Y])}n.remove(I)}let M=0;function C(){M=0}function P(){const I=M;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),M+=1,I}function F(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function N(I,E){const H=n.get(I);if(I.isVideoTexture&&jt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,I,E);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function G(I,E){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){X(H,I,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function K(I,E){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){X(H,I,E);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function V(I,E){const H=n.get(I);if(I.version>0&&H.__version!==I.version){j(H,I,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}const Q={[Xa]:r.REPEAT,[os]:r.CLAMP_TO_EDGE,[$a]:r.MIRRORED_REPEAT},et={[Nn]:r.NEAREST,[Sd]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[ai]:r.LINEAR,[$o]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},ft={[Td]:r.NEVER,[Pd]:r.ALWAYS,[Ad]:r.LESS,[Kh]:r.LEQUAL,[Rd]:r.EQUAL,[Ld]:r.GEQUAL,[Cd]:r.GREATER,[Id]:r.NOTEQUAL};function wt(I,E){if(E.type===wi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===$o||E.magFilter===Pr||E.magFilter===as||E.minFilter===ai||E.minFilter===$o||E.minFilter===Pr||E.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Q[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,et[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,et[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ft[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Pr&&E.minFilter!==as||E.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Dt(I,E){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",R));const Y=E.source;let tt=f.get(Y);tt===void 0&&(tt={},f.set(Y,tt));const $=F(E);if($!==I.__cacheKey){tt[$]===void 0&&(tt[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[$].usedTimes++;const It=tt[I.__cacheKey];It!==void 0&&(tt[I.__cacheKey].usedTimes--,It.usedTimes===0&&d(E)),I.__cacheKey=$,I.__webglTexture=tt[$].texture}return H}function Pt(I,E,H){return Math.floor(Math.floor(I/H)/E)}function Wt(I,E,H,Y){const $=I.updateRanges;if($.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,H,Y,E.data);else{$.sort((st,pt)=>st.start-pt.start);let It=0;for(let st=1;st<$.length;st++){const pt=$[It],Bt=$[st],At=pt.start+pt.count,ut=Pt(Bt.start,E.width,4),Yt=Pt(pt.start,E.width,4);Bt.start<=At+1&&ut===Yt&&Pt(Bt.start+Bt.count-1,E.width,4)===ut?pt.count=Math.max(pt.count,Bt.start+Bt.count-pt.start):(++It,$[It]=Bt)}$.length=It+1;const at=r.getParameter(r.UNPACK_ROW_LENGTH),bt=r.getParameter(r.UNPACK_SKIP_PIXELS),Tt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let st=0,pt=$.length;st<pt;st++){const Bt=$[st],At=Math.floor(Bt.start/4),ut=Math.ceil(Bt.count/4),Yt=At%E.width,k=Math.floor(At/E.width),rt=ut,lt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),e.texSubImage2D(r.TEXTURE_2D,0,Yt,k,rt,lt,H,Y,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,at),r.pixelStorei(r.UNPACK_SKIP_PIXELS,bt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Tt)}}function X(I,E,H){let Y=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=r.TEXTURE_3D);const tt=Dt(I,E),$=E.source;e.bindTexture(Y,I.__webglTexture,r.TEXTURE0+H);const It=n.get($);if($.version!==It.__version||tt===!0){e.activeTexture(r.TEXTURE0+H);const at=ae.getPrimaries(ae.workingColorSpace),bt=E.colorSpace===Fi?null:ae.getPrimaries(E.colorSpace),Tt=E.colorSpace===Fi||at===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let st=y(E.image,!1,s.maxTextureSize);st=Ge(E,st);const pt=i.convert(E.format,E.colorSpace),Bt=i.convert(E.type);let At=w(E.internalFormat,pt,Bt,E.colorSpace,E.isVideoTexture);wt(Y,E);let ut;const Yt=E.mipmaps,k=E.isVideoTexture!==!0,rt=It.__version===void 0||tt===!0,lt=$.dataReady,vt=T(E,st);if(E.isDepthTexture)At=S(E.format===fr,E.type),rt&&(k?e.texStorage2D(r.TEXTURE_2D,1,At,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,At,st.width,st.height,0,pt,Bt,null));else if(E.isDataTexture)if(Yt.length>0){k&&rt&&e.texStorage2D(r.TEXTURE_2D,vt,At,Yt[0].width,Yt[0].height);for(let nt=0,Z=Yt.length;nt<Z;nt++)ut=Yt[nt],k?lt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ut.width,ut.height,pt,Bt,ut.data):e.texImage2D(r.TEXTURE_2D,nt,At,ut.width,ut.height,0,pt,Bt,ut.data);E.generateMipmaps=!1}else k?(rt&&e.texStorage2D(r.TEXTURE_2D,vt,At,st.width,st.height),lt&&Wt(E,st,pt,Bt)):e.texImage2D(r.TEXTURE_2D,0,At,st.width,st.height,0,pt,Bt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,At,Yt[0].width,Yt[0].height,st.depth);for(let nt=0,Z=Yt.length;nt<Z;nt++)if(ut=Yt[nt],E.format!==ni)if(pt!==null)if(k){if(lt)if(E.layerUpdates.size>0){const yt=qc(ut.width,ut.height,E.format,E.type);for(const Xt of E.layerUpdates){const _e=ut.data.subarray(Xt*yt/ut.data.BYTES_PER_ELEMENT,(Xt+1)*yt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Xt,ut.width,ut.height,1,pt,_e)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,st.depth,pt,ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,At,ut.width,ut.height,st.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?lt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,st.depth,pt,Bt,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,At,ut.width,ut.height,st.depth,0,pt,Bt,ut.data)}else{k&&rt&&e.texStorage2D(r.TEXTURE_2D,vt,At,Yt[0].width,Yt[0].height);for(let nt=0,Z=Yt.length;nt<Z;nt++)ut=Yt[nt],E.format!==ni?pt!==null?k?lt&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,ut.width,ut.height,pt,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,At,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?lt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ut.width,ut.height,pt,Bt,ut.data):e.texImage2D(r.TEXTURE_2D,nt,At,ut.width,ut.height,0,pt,Bt,ut.data)}else if(E.isDataArrayTexture)if(k){if(rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,At,st.width,st.height,st.depth),lt)if(E.layerUpdates.size>0){const nt=qc(st.width,st.height,E.format,E.type);for(const Z of E.layerUpdates){const yt=st.data.subarray(Z*nt/st.data.BYTES_PER_ELEMENT,(Z+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,st.width,st.height,1,pt,Bt,yt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,Bt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,st.width,st.height,st.depth,0,pt,Bt,st.data);else if(E.isData3DTexture)k?(rt&&e.texStorage3D(r.TEXTURE_3D,vt,At,st.width,st.height,st.depth),lt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,Bt,st.data)):e.texImage3D(r.TEXTURE_3D,0,At,st.width,st.height,st.depth,0,pt,Bt,st.data);else if(E.isFramebufferTexture){if(rt)if(k)e.texStorage2D(r.TEXTURE_2D,vt,At,st.width,st.height);else{let nt=st.width,Z=st.height;for(let yt=0;yt<vt;yt++)e.texImage2D(r.TEXTURE_2D,yt,At,nt,Z,0,pt,Bt,null),nt>>=1,Z>>=1}}else if(Yt.length>0){if(k&&rt){const nt=Ce(Yt[0]);e.texStorage2D(r.TEXTURE_2D,vt,At,nt.width,nt.height)}for(let nt=0,Z=Yt.length;nt<Z;nt++)ut=Yt[nt],k?lt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,pt,Bt,ut):e.texImage2D(r.TEXTURE_2D,nt,At,pt,Bt,ut);E.generateMipmaps=!1}else if(k){if(rt){const nt=Ce(st);e.texStorage2D(r.TEXTURE_2D,vt,At,nt.width,nt.height)}lt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Bt,st)}else e.texImage2D(r.TEXTURE_2D,0,At,pt,Bt,st);v(E)&&_(Y),It.__version=$.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function j(I,E,H){if(E.image.length!==6)return;const Y=Dt(I,E),tt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+H);const $=n.get(tt);if(tt.version!==$.__version||Y===!0){e.activeTexture(r.TEXTURE0+H);const It=ae.getPrimaries(ae.workingColorSpace),at=E.colorSpace===Fi?null:ae.getPrimaries(E.colorSpace),bt=E.colorSpace===Fi||It===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Tt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Tt&&!st?pt[Z]=y(E.image[Z],!0,s.maxCubemapSize):pt[Z]=st?E.image[Z].image:E.image[Z],pt[Z]=Ge(E,pt[Z]);const Bt=pt[0],At=i.convert(E.format,E.colorSpace),ut=i.convert(E.type),Yt=w(E.internalFormat,At,ut,E.colorSpace),k=E.isVideoTexture!==!0,rt=$.__version===void 0||Y===!0,lt=tt.dataReady;let vt=T(E,Bt);wt(r.TEXTURE_CUBE_MAP,E);let nt;if(Tt){k&&rt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,Yt,Bt.width,Bt.height);for(let Z=0;Z<6;Z++){nt=pt[Z].mipmaps;for(let yt=0;yt<nt.length;yt++){const Xt=nt[yt];E.format!==ni?At!==null?k?lt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Xt.width,Xt.height,At,Xt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,Yt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Xt.width,Xt.height,At,ut,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,Yt,Xt.width,Xt.height,0,At,ut,Xt.data)}}}else{if(nt=E.mipmaps,k&&rt){nt.length>0&&vt++;const Z=Ce(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,Yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(st){k?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,At,ut,pt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,pt[Z].width,pt[Z].height,0,At,ut,pt[Z].data);for(let yt=0;yt<nt.length;yt++){const _e=nt[yt].image[Z].image;k?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,_e.width,_e.height,At,ut,_e.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,Yt,_e.width,_e.height,0,At,ut,_e.data)}}else{k?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,ut,pt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,At,ut,pt[Z]);for(let yt=0;yt<nt.length;yt++){const Xt=nt[yt];k?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,At,ut,Xt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,Yt,At,ut,Xt.image[Z])}}}v(E)&&_(r.TEXTURE_CUBE_MAP),$.__version=tt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ct(I,E,H,Y,tt,$){const It=i.convert(H.format,H.colorSpace),at=i.convert(H.type),bt=w(H.internalFormat,It,at,H.colorSpace),Tt=n.get(E),st=n.get(H);if(st.__renderTarget=E,!Tt.__hasExternalTextures){const pt=Math.max(1,E.width>>$),Bt=Math.max(1,E.height>>$);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,bt,pt,Bt,E.depth,0,It,at,null):e.texImage2D(tt,$,bt,pt,Bt,0,It,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),St(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,tt,st.__webglTexture,0,Se(E)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,tt,st.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(I,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const Y=E.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,$=S(E.stencilBuffer,tt),It=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Se(E);St(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,$,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,$,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,It,r.RENDERBUFFER,I)}else{const Y=E.textures;for(let tt=0;tt<Y.length;tt++){const $=Y[tt],It=i.convert($.format,$.colorSpace),at=i.convert($.type),bt=w($.internalFormat,It,at,$.colorSpace),Tt=Se(E);H&&St(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,bt,E.width,E.height):St(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt,bt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,bt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const tt=Y.__webglTexture,$=Se(E);if(E.depthTexture.format===dr)St(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(E.depthTexture.format===fr)St(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function zt(I){const E=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),E.__depthDisposeCallback=tt}E.__boundDepthTexture=Y}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Y=I.texture.mipmaps;Y&&Y.length>0?mt(E.__webglFramebuffer[0],I):mt(E.__webglFramebuffer,I)}else if(H){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ct(E.__webglDepthbuffer[Y],I,!1);else{const tt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,$)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ct(E.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,$)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function we(I,E,H){const Y=n.get(I);E!==void 0&&ct(Y.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&zt(I)}function D(I){const E=I.texture,H=n.get(I),Y=n.get(E);I.addEventListener("dispose",L);const tt=I.textures,$=I.isWebGLCubeRenderTarget===!0,It=tt.length>1;if(It||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=E.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let bt=0;bt<E.mipmaps.length;bt++)H.__webglFramebuffer[at][bt]=r.createFramebuffer()}else H.__webglFramebuffer[at]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)H.__webglFramebuffer[at]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(It)for(let at=0,bt=tt.length;at<bt;at++){const Tt=n.get(tt[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&St(I)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const bt=tt[at];H.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Tt=i.convert(bt.format,bt.colorSpace),st=i.convert(bt.type),pt=w(bt.internalFormat,Tt,st,bt.colorSpace,I.isXRRenderTarget===!0),Bt=Se(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,pt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,H.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),wt(r.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)ct(H.__webglFramebuffer[at][bt],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt);else ct(H.__webglFramebuffer[at],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);v(E)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let at=0,bt=tt.length;at<bt;at++){const Tt=tt[at],st=n.get(Tt);let pt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,st.__webglTexture),wt(pt,Tt),ct(H.__webglFramebuffer,I,Tt,r.COLOR_ATTACHMENT0+at,pt,0),v(Tt)&&_(pt)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),wt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)ct(H.__webglFramebuffer[bt],I,E,r.COLOR_ATTACHMENT0,at,bt);else ct(H.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,at,0);v(E)&&_(at),e.unbindTexture()}I.depthBuffer&&zt(I)}function ge(I){const E=I.textures;for(let H=0,Y=E.length;H<Y;H++){const tt=E[H];if(v(tt)){const $=b(I),It=n.get(tt).__webglTexture;e.bindTexture($,It),_($),e.unbindTexture()}}}const Ot=[],Ht=[];function Mt(I){if(I.samples>0){if(St(I)===!1){const E=I.textures,H=I.width,Y=I.height;let tt=r.COLOR_BUFFER_BIT;const $=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=n.get(I),at=E.length>1;if(at)for(let Tt=0;Tt<E.length;Tt++)e.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const bt=I.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<E.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);const st=n.get(E[Tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,H,Y,0,0,H,Y,tt,r.NEAREST),h===!0&&(Ot.length=0,Ht.length=0,Ot.push(r.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ot.push($),Ht.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ht)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let Tt=0;Tt<E.length;Tt++){e.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);const st=n.get(E[Tt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,st,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Se(I){return Math.min(s.maxSamples,I.samples)}function St(I){const E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(I){const E=a.render.frame;c.get(I)!==E&&(c.set(I,E),I.update())}function Ge(I,E){const H=I.colorSpace,Y=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Bs&&H!==Fi&&(ae.getTransfer(H)===de?(Y!==ni||tt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(o.width=I.naturalWidth||I.width,o.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(o.width=I.displayWidth,o.height=I.displayHeight):(o.width=I.width,o.height=I.height),o}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=we,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=St}function u1(r,t){function e(n,s=Fi){let i;const a=ae.getTransfer(s);if(n===ui)return r.UNSIGNED_BYTE;if(n===Ul)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return r.BYTE;if(n===Hh)return r.SHORT;if(n===hr)return r.UNSIGNED_SHORT;if(n===Dl)return r.INT;if(n===hs)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===yr)return r.HALF_FLOAT;if(n===Wh)return r.ALPHA;if(n===qh)return r.RGB;if(n===ni)return r.RGBA;if(n===dr)return r.DEPTH_COMPONENT;if(n===fr)return r.DEPTH_STENCIL;if(n===Xh)return r.RED;if(n===Nl)return r.RED_INTEGER;if(n===$h)return r.RG;if(n===Fl)return r.RG_INTEGER;if(n===Ol)return r.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(a===de)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===uo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===uo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Ka||n===ja||n===Za)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Ya)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===tl)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Ja||n===Qa)return a===de?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===tl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===el)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===de?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===ml)return a===de?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===xl||n===yl||n===Ml)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===vl)return i.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const d1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f1=`
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

}`;class p1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new cu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fi({vertexShader:d1,fragmentShader:f1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new Io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m1 extends Hs{constructor(t,e){super();const n=this;let s=null,i=1,a=null,l="local-floor",h=1,o=null,c=null,u=null,f=null,m=null,x=null;const y=typeof XRWebGLBinding<"u",v=new p1,_={},b=e.getContextAttributes();let w=null,S=null;const T=[],R=[],L=new re;let p=null;const d=new Dn;d.viewport=new fe;const g=new Dn;g.viewport=new fe;const M=[d,g],C=new Nf;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=T[X];return j===void 0&&(j=new pa,T[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=T[X];return j===void 0&&(j=new pa,T[X]=j),j.getGripSpace()},this.getHand=function(X){let j=T[X];return j===void 0&&(j=new pa,T[X]=j),j.getHandSpace()};function N(X){const j=R.indexOf(X.inputSource);if(j===-1)return;const ct=T[j];ct!==void 0&&(ct.update(X.inputSource,X.frame,o||a),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let X=0;X<T.length;X++){const j=R[X];j!==null&&(R[X]=null,T[X].disconnect(j))}P=null,F=null,v.reset();for(const X in _)delete _[X];t.setRenderTarget(w),m=null,f=null,u=null,s=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(p),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){i=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(X){o=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await e.makeXRCompatible(),p=t.getPixelRatio(),t.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Ct=null,mt=null;b.depth&&(mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=b.stencil?fr:dr,Ct=b.stencil?ur:hs);const zt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new us(f.textureWidth,f.textureHeight,{format:ni,type:ui,depthTexture:new lu(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new us(m.framebufferWidth,m.framebufferHeight,{format:ni,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),o=null,a=await s.requestReferenceSpace(l),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(X){for(let j=0;j<X.removed.length;j++){const ct=X.removed[j],Ct=R.indexOf(ct);Ct>=0&&(R[Ct]=null,T[Ct].disconnect(ct))}for(let j=0;j<X.added.length;j++){const ct=X.added[j];let Ct=R.indexOf(ct);if(Ct===-1){for(let zt=0;zt<T.length;zt++)if(zt>=R.length){R.push(ct),Ct=zt;break}else if(R[zt]===null){R[zt]=ct,Ct=zt;break}if(Ct===-1)break}const mt=T[Ct];mt&&mt.connect(ct)}}const V=new U,Q=new U;function et(X,j,ct){V.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(ct.matrixWorld);const Ct=V.distanceTo(Q),mt=j.projectionMatrix.elements,zt=ct.projectionMatrix.elements,we=mt[14]/(mt[10]-1),D=mt[14]/(mt[10]+1),ge=(mt[9]+1)/mt[5],Ot=(mt[9]-1)/mt[5],Ht=(mt[8]-1)/mt[0],Mt=(zt[8]+1)/zt[0],Se=we*Ht,St=we*Mt,jt=Ct/(-Ht+Mt),Ge=jt*-Ht;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ge),X.translateZ(jt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),mt[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ce=we+jt,I=D+jt,E=Se-Ge,H=St+(Ct-Ge),Y=ge*D/I*Ce,tt=Ot*D/I*Ce;X.projectionMatrix.makePerspective(E,H,Y,tt,Ce,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ft(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let j=X.near,ct=X.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(ct=v.depthFar)),C.near=g.near=d.near=j,C.far=g.far=d.far=ct,(P!==C.near||F!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,F=C.far),C.layers.mask=X.layers.mask|6,d.layers.mask=C.layers.mask&3,g.layers.mask=C.layers.mask&5;const Ct=X.parent,mt=C.cameras;ft(C,Ct);for(let zt=0;zt<mt.length;zt++)ft(mt[zt],Ct);mt.length===2?et(C,d,g):C.projectionMatrix.copy(d.projectionMatrix),wt(X,C,Ct)};function wt(X,j,ct){ct===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(X){h=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)},this.getCameraTexture=function(X){return _[X]};let Dt=null;function Pt(X,j){if(c=j.getViewerPose(o||a),x=j,c!==null){const ct=c.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Ct=!1;ct.length!==C.cameras.length&&(C.cameras.length=0,Ct=!0);for(let D=0;D<ct.length;D++){const ge=ct[D];let Ot=null;if(m!==null)Ot=m.getViewport(ge);else{const Mt=u.getViewSubImage(f,ge);Ot=Mt.viewport,D===0&&(t.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(S))}let Ht=M[D];Ht===void 0&&(Ht=new Dn,Ht.layers.enable(D),Ht.viewport=new fe,M[D]=Ht),Ht.matrix.fromArray(ge.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ge.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),D===0&&(C.matrix.copy(Ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ct===!0&&C.cameras.push(Ht)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const D=u.getDepthInformation(ct[0]);D&&D.isValid&&D.texture&&v.init(D,s.renderState)}if(mt&&mt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<ct.length;D++){const ge=ct[D].camera;if(ge){let Ot=_[ge];Ot||(Ot=new cu,_[ge]=Ot);const Ht=u.getCameraImage(ge);Ot.sourceTexture=Ht}}}}for(let ct=0;ct<T.length;ct++){const Ct=R[ct],mt=T[ct];Ct!==null&&mt!==void 0&&mt.update(Ct,j,o||a)}Dt&&Dt(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}const Wt=new du;Wt.setAnimationLoop(Pt),this.setAnimationLoop=function(X){Dt=X},this.dispose=function(){}}}const Ji=new di,g1=new Ee;function _1(r,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,nu(r)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function s(v,_,b,w,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(v,_):_.isMeshToonMaterial?(i(v,_),u(v,_)):_.isMeshPhongMaterial?(i(v,_),c(v,_)):_.isMeshStandardMaterial?(i(v,_),f(v,_),_.isMeshPhysicalMaterial&&m(v,_,S)):_.isMeshMatcapMaterial?(i(v,_),x(v,_)):_.isMeshDepthMaterial?i(v,_):_.isMeshDistanceMaterial?(i(v,_),y(v,_)):_.isMeshNormalMaterial?i(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&l(v,_)):_.isPointsMaterial?h(v,_,b,w):_.isSpriteMaterial?o(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Tn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Tn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=t.get(_),w=b.envMap,S=b.envMapRotation;w&&(v.envMap.value=w,Ji.copy(S),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),v.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(Ji)),v.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function l(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,b,w){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=w*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function c(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function u(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function f(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,b){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,_){_.matcap&&(v.matcap.value=_.matcap)}function y(v,_){const b=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v1(r,t,e,n){let s={},i={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,w){const S=w.program;n.uniformBlockBinding(b,S)}function o(b,w){let S=s[b.id];S===void 0&&(x(b),S=c(b),s[b.id]=S,b.addEventListener("dispose",v));const T=w.program;n.updateUBOMapping(b,T);const R=t.render.frame;i[b.id]!==R&&(f(b),i[b.id]=R)}function c(b){const w=u();b.__bindingPointIndex=w;const S=r.createBuffer(),T=b.__size,R=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,S),S}function u(){for(let b=0;b<l;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const w=s[b.id],S=b.uniforms,T=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let R=0,L=S.length;R<L;R++){const p=Array.isArray(S[R])?S[R]:[S[R]];for(let d=0,g=p.length;d<g;d++){const M=p[d];if(m(M,R,d,T)===!0){const C=M.__offset,P=Array.isArray(M.value)?M.value:[M.value];let F=0;for(let N=0;N<P.length;N++){const G=P[N],K=y(G);typeof G=="number"||typeof G=="boolean"?(M.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,C+F,M.__data)):G.isMatrix3?(M.__data[0]=G.elements[0],M.__data[1]=G.elements[1],M.__data[2]=G.elements[2],M.__data[3]=0,M.__data[4]=G.elements[3],M.__data[5]=G.elements[4],M.__data[6]=G.elements[5],M.__data[7]=0,M.__data[8]=G.elements[6],M.__data[9]=G.elements[7],M.__data[10]=G.elements[8],M.__data[11]=0):(G.toArray(M.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,C,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(b,w,S,T){const R=b.value,L=w+"_"+S;if(T[L]===void 0)return typeof R=="number"||typeof R=="boolean"?T[L]=R:T[L]=R.clone(),!0;{const p=T[L];if(typeof R=="number"||typeof R=="boolean"){if(p!==R)return T[L]=R,!0}else if(p.equals(R)===!1)return p.copy(R),!0}return!1}function x(b){const w=b.uniforms;let S=0;const T=16;for(let L=0,p=w.length;L<p;L++){const d=Array.isArray(w[L])?w[L]:[w[L]];for(let g=0,M=d.length;g<M;g++){const C=d[g],P=Array.isArray(C.value)?C.value:[C.value];for(let F=0,N=P.length;F<N;F++){const G=P[F],K=y(G),V=S%T,Q=V%K.boundary,et=V+Q;S+=Q,et!==0&&T-et<K.storage&&(S+=T-et),C.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=K.storage}}}const R=S%T;return R>0&&(S+=T-R),b.__size=S,b.__cache={},this}function y(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function v(b){const w=b.target;w.removeEventListener("dispose",v);const S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete i[w.id]}function _(){for(const b in s)r.deleteBuffer(s[b]);a=[],s={},i={}}return{bind:h,update:o,dispose:_}}class x1{constructor(t={}){const{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:o=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=new Uint32Array(4),y=new Int32Array(4);let v=null,_=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=En;let R=0,L=0,p=null,d=-1,g=null;const M=new fe,C=new fe;let P=null;const F=new qt(0);let N=0,G=e.width,K=e.height,V=1,Q=null,et=null;const ft=new fe(0,0,G,K),wt=new fe(0,0,G,K);let Dt=!1;const Pt=new Vl;let Wt=!1,X=!1;const j=new Ee,ct=new U,Ct=new fe,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function we(){return p===null?V:1}let D=n;function ge(A,O){return e.getContext(A,O)}try{const A={alpha:!0,depth:s,stencil:i,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ll}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),D===null){const O="webgl2";if(D=ge(O,A),D===null)throw ge(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ot,Ht,Mt,Se,St,jt,Ge,Ce,I,E,H,Y,tt,$,It,at,bt,Tt,st,pt,Bt,At,ut,Yt;function k(){Ot=new C0(D),Ot.init(),At=new u1(D,Ot),Ht=new S0(D,Ot,t,At),Mt=new c1(D,Ot),Ht.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),Se=new P0(D),St=new jg,jt=new h1(D,Ot,Mt,St,Ht,At,Se),Ge=new E0(S),Ce=new R0(S),I=new Of(D),ut=new y0(D,I),E=new I0(D,I,Se,ut),H=new U0(D,E,I,Se),st=new D0(D,Ht,jt),at=new b0(St),Y=new Kg(S,Ge,Ce,Ot,Ht,ut,at),tt=new _1(S,St),$=new Jg,It=new s1(Ot),Tt=new x0(S,Ge,Ce,Mt,H,m,h),bt=new a1(S,H,Ht),Yt=new v1(D,Se,Ht,Mt),pt=new M0(D,Ot,Se),Bt=new L0(D,Ot,Se),Se.programs=Y.programs,S.capabilities=Ht,S.extensions=Ot,S.properties=St,S.renderLists=$,S.shadowMap=bt,S.state=Mt,S.info=Se}k();const rt=new m1(S,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(G,K,!1))},this.getSize=function(A){return A.set(G,K)},this.setSize=function(A,O,W=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,K=O,e.width=Math.floor(A*V),e.height=Math.floor(O*V),W===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(G*V,K*V).floor()},this.setDrawingBufferSize=function(A,O,W){G=A,K=O,V=W,e.width=Math.floor(A*W),e.height=Math.floor(O*W),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,O,W,q){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,O,W,q),Mt.viewport(M.copy(ft).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,O,W,q){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,O,W,q),Mt.scissor(C.copy(wt).multiplyScalar(V).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(A){Mt.setScissorTest(Dt=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,W=!0){let q=0;if(A){let z=!1;if(p!==null){const it=p.texture.format;z=it===Ol||it===Fl||it===Nl}if(z){const it=p.texture.type,dt=it===ui||it===hs||it===hr||it===ur||it===Ul||it===kl,xt=Tt.getClearColor(),_t=Tt.getClearAlpha(),Nt=xt.r,Gt=xt.g,Ut=xt.b;dt?(x[0]=Nt,x[1]=Gt,x[2]=Ut,x[3]=_t,D.clearBufferuiv(D.COLOR,0,x)):(y[0]=Nt,y[1]=Gt,y[2]=Ut,y[3]=_t,D.clearBufferiv(D.COLOR,0,y))}else q|=D.COLOR_BUFFER_BIT}O&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Tt.dispose(),$.dispose(),It.dispose(),St.dispose(),Ge.dispose(),Ce.dispose(),H.dispose(),ut.dispose(),Yt.dispose(),Y.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ri),rt.removeEventListener("sessionend",rc),qi.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Se.autoReset,O=bt.enabled,W=bt.autoUpdate,q=bt.needsUpdate,z=bt.type;k(),Se.autoReset=A,bt.enabled=O,bt.autoUpdate=W,bt.needsUpdate=q,bt.type=z}function nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){const O=A.target;O.removeEventListener("dispose",Z),yt(O)}function yt(A){Xt(A),St.remove(A)}function Xt(A){const O=St.get(A).programs;O!==void 0&&(O.forEach(function(W){Y.releaseProgram(W)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,W,q,z,it){O===null&&(O=mt);const dt=z.isMesh&&z.matrixWorld.determinant()<0,xt=zu(A,O,W,q,z);Mt.setMaterial(q,dt);let _t=W.index,Nt=1;if(q.wireframe===!0){if(_t=E.getWireframeAttribute(W),_t===void 0)return;Nt=2}const Gt=W.drawRange,Ut=W.attributes.position;let ie=Gt.start*Nt,he=(Gt.start+Gt.count)*Nt;it!==null&&(ie=Math.max(ie,it.start*Nt),he=Math.min(he,(it.start+it.count)*Nt)),_t!==null?(ie=Math.max(ie,0),he=Math.min(he,_t.count)):Ut!=null&&(ie=Math.max(ie,0),he=Math.min(he,Ut.count));const Re=he-ie;if(Re<0||Re===1/0)return;ut.setup(z,q,xt,W,_t);let ye,pe=pt;if(_t!==null&&(ye=I.get(_t),pe=Bt,pe.setIndex(ye)),z.isMesh)q.wireframe===!0?(Mt.setLineWidth(q.wireframeLinewidth*we()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(z.isLine){let kt=q.linewidth;kt===void 0&&(kt=1),Mt.setLineWidth(kt*we()),z.isLineSegments?pe.setMode(D.LINES):z.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else z.isPoints?pe.setMode(D.POINTS):z.isSprite&&pe.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))pe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const kt=z._multiDrawStarts,Te=z._multiDrawCounts,oe=z._multiDrawCount,An=_t?I.get(_t).bytesPerElement:1,ms=St.get(q).currentProgram.getUniforms();for(let Rn=0;Rn<oe;Rn++)ms.setValue(D,"_gl_DrawID",Rn),pe.render(kt[Rn]/An,Te[Rn])}else if(z.isInstancedMesh)pe.renderInstances(ie,Re,z.count);else if(W.isInstancedBufferGeometry){const kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,kt);pe.renderInstances(ie,Re,Te)}else pe.render(ie,Re)};function _e(A,O,W){A.transparent===!0&&A.side===We&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,Lr(A,O,W),A.side=Vi,A.needsUpdate=!0,Lr(A,O,W),A.side=We):Lr(A,O,W)}this.compile=function(A,O,W=null){W===null&&(W=A),_=It.get(W),_.init(O),w.push(_),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights();const q=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const it=z.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){const xt=it[dt];_e(xt,W,z),q.add(xt)}else _e(it,W,z),q.add(it)}),_=w.pop(),q},this.compileAsync=function(A,O,W=null){const q=this.compile(A,O,W);return new Promise(z=>{function it(){if(q.forEach(function(dt){St.get(dt).currentProgram.isReady()&&q.delete(dt)}),q.size===0){z(A);return}setTimeout(it,10)}Ot.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let le=null;function gi(A){le&&le(A)}function ri(){qi.stop()}function rc(){qi.start()}const qi=new du;qi.setAnimationLoop(gi),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(A){le=A,rt.setAnimationLoop(A),A===null?qi.stop():qi.start()},rt.addEventListener("sessionstart",ri),rt.addEventListener("sessionend",rc),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,O,p),_=It.get(A,w.length),_.init(O),w.push(_),j.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Pt.setFromProjectionMatrix(j,li,O.reversedDepth),X=this.localClippingEnabled,Wt=at.init(this.clippingPlanes,X),v=$.get(A,b.length),v.init(),b.push(v),rt.enabled===!0&&rt.isPresenting===!0){const it=S.xr.getDepthSensingMesh();it!==null&&qo(it,O,-1/0,S.sortObjects)}qo(A,O,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(Q,et),zt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,zt&&Tt.addToRenderList(v,A),this.info.render.frame++,Wt===!0&&at.beginShadows();const W=_.state.shadowsArray;bt.render(W,A,O),Wt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,z=v.transmissive;if(_.setupLights(),O.isArrayCamera){const it=O.cameras;if(z.length>0)for(let dt=0,xt=it.length;dt<xt;dt++){const _t=it[dt];ac(q,z,A,_t)}zt&&Tt.render(A);for(let dt=0,xt=it.length;dt<xt;dt++){const _t=it[dt];oc(v,A,_t,_t.viewport)}}else z.length>0&&ac(q,z,A,O),zt&&Tt.render(A),oc(v,A,O);p!==null&&L===0&&(jt.updateMultisampleRenderTarget(p),jt.updateRenderTargetMipmap(p)),A.isScene===!0&&A.onAfterRender(S,A,O),ut.resetDefaultState(),d=-1,g=null,w.pop(),w.length>0?(_=w[w.length-1],Wt===!0&&at.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function qo(A,O,W,q){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pt.intersectsSprite(A)){q&&Ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const dt=H.update(A),xt=A.material;xt.visible&&v.push(A,dt,xt,W,Ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pt.intersectsObject(A))){const dt=H.update(A),xt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ct.copy(A.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ct.copy(dt.boundingSphere.center)),Ct.applyMatrix4(A.matrixWorld).applyMatrix4(j)),Array.isArray(xt)){const _t=dt.groups;for(let Nt=0,Gt=_t.length;Nt<Gt;Nt++){const Ut=_t[Nt],ie=xt[Ut.materialIndex];ie&&ie.visible&&v.push(A,dt,ie,W,Ct.z,Ut)}}else xt.visible&&v.push(A,dt,xt,W,Ct.z,null)}}const it=A.children;for(let dt=0,xt=it.length;dt<xt;dt++)qo(it[dt],O,W,q)}function oc(A,O,W,q){const z=A.opaque,it=A.transmissive,dt=A.transparent;_.setupLightsView(W),Wt===!0&&at.setGlobalState(S.clippingPlanes,W),q&&Mt.viewport(M.copy(q)),z.length>0&&Ir(z,O,W),it.length>0&&Ir(it,O,W),dt.length>0&&Ir(dt,O,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ac(A,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new us(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?yr:ui,minFilter:as,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const it=_.state.transmissionRenderTarget[q.id],dt=q.viewport||M;it.setSize(dt.z*S.transmissionResolutionScale,dt.w*S.transmissionResolutionScale);const xt=S.getRenderTarget(),_t=S.getActiveCubeFace(),Nt=S.getActiveMipmapLevel();S.setRenderTarget(it),S.getClearColor(F),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),zt&&Tt.render(W);const Gt=S.toneMapping;S.toneMapping=Bi;const Ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),Wt===!0&&at.setGlobalState(S.clippingPlanes,q),Ir(A,W,q),jt.updateMultisampleRenderTarget(it),jt.updateRenderTargetMipmap(it),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let he=0,Re=O.length;he<Re;he++){const ye=O[he],pe=ye.object,kt=ye.geometry,Te=ye.material,oe=ye.group;if(Te.side===We&&pe.layers.test(q.layers)){const An=Te.side;Te.side=Tn,Te.needsUpdate=!0,lc(pe,W,q,kt,Te,oe),Te.side=An,Te.needsUpdate=!0,ie=!0}}ie===!0&&(jt.updateMultisampleRenderTarget(it),jt.updateRenderTargetMipmap(it))}S.setRenderTarget(xt,_t,Nt),S.setClearColor(F,N),Ut!==void 0&&(q.viewport=Ut),S.toneMapping=Gt}function Ir(A,O,W){const q=O.isScene===!0?O.overrideMaterial:null;for(let z=0,it=A.length;z<it;z++){const dt=A[z],xt=dt.object,_t=dt.geometry,Nt=dt.group;let Gt=dt.material;Gt.allowOverride===!0&&q!==null&&(Gt=q),xt.layers.test(W.layers)&&lc(xt,O,W,_t,Gt,Nt)}}function lc(A,O,W,q,z,it){A.onBeforeRender(S,O,W,q,z,it),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(S,O,W,q,A,it),z.transparent===!0&&z.side===We&&z.forceSinglePass===!1?(z.side=Tn,z.needsUpdate=!0,S.renderBufferDirect(W,O,q,z,A,it),z.side=Vi,z.needsUpdate=!0,S.renderBufferDirect(W,O,q,z,A,it),z.side=We):S.renderBufferDirect(W,O,q,z,A,it),A.onAfterRender(S,O,W,q,z,it)}function Lr(A,O,W){O.isScene!==!0&&(O=mt);const q=St.get(A),z=_.state.lights,it=_.state.shadowsArray,dt=z.state.version,xt=Y.getParameters(A,z.state,it,O,W),_t=Y.getProgramCacheKey(xt);let Nt=q.programs;q.environment=A.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(A.isMeshStandardMaterial?Ce:Ge).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",Z),Nt=new Map,q.programs=Nt);let Gt=Nt.get(_t);if(Gt!==void 0){if(q.currentProgram===Gt&&q.lightsStateVersion===dt)return hc(A,xt),Gt}else xt.uniforms=Y.getUniforms(A),A.onBeforeCompile(xt,S),Gt=Y.acquireProgram(xt,_t),Nt.set(_t,Gt),q.uniforms=xt.uniforms;const Ut=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=at.uniform),hc(A,xt),q.needsLights=Gu(A),q.lightsStateVersion=dt,q.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Gt,q.uniformsList=null,Gt}function cc(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=go.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function hc(A,O){const W=St.get(A);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function zu(A,O,W,q,z){O.isScene!==!0&&(O=mt),jt.resetTextureUnits();const it=O.fog,dt=q.isMeshStandardMaterial?O.environment:null,xt=p===null?S.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:Bs,_t=(q.isMeshStandardMaterial?Ce:Ge).get(q.envMap||dt),Nt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ut=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,he=!!W.morphAttributes.color;let Re=Bi;q.toneMapped&&(p===null||p.isXRRenderTarget===!0)&&(Re=S.toneMapping);const ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ye!==void 0?ye.length:0,kt=St.get(q),Te=_.state.lights;if(Wt===!0&&(X===!0||A!==g)){const un=A===g&&q.id===d;at.setState(q,A,un)}let oe=!1;q.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Te.state.version||kt.outputColorSpace!==xt||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isBatchedMesh&&kt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&kt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&kt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&kt.instancingMorph===!1&&z.morphTexture!==null||kt.envMap!==_t||q.fog===!0&&kt.fog!==it||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==at.numPlanes||kt.numIntersection!==at.numIntersection)||kt.vertexAlphas!==Nt||kt.vertexTangents!==Gt||kt.morphTargets!==Ut||kt.morphNormals!==ie||kt.morphColors!==he||kt.toneMapping!==Re||kt.morphTargetsCount!==pe)&&(oe=!0):(oe=!0,kt.__version=q.version);let An=kt.currentProgram;oe===!0&&(An=Lr(q,O,z));let ms=!1,Rn=!1,Ys=!1;const Ae=An.getUniforms(),Fn=kt.uniforms;if(Mt.useProgram(An.program)&&(ms=!0,Rn=!0,Ys=!0),q.id!==d&&(d=q.id,Rn=!0),ms||g!==A){Mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ae.setValue(D,"projectionMatrix",A.projectionMatrix),Ae.setValue(D,"viewMatrix",A.matrixWorldInverse);const xn=Ae.map.cameraPosition;xn!==void 0&&xn.setValue(D,ct.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&Ae.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ae.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),g!==A&&(g=A,Rn=!0,Ys=!0)}if(z.isSkinnedMesh){Ae.setOptional(D,z,"bindMatrix"),Ae.setOptional(D,z,"bindMatrixInverse");const un=z.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ae.setValue(D,"boneTexture",un.boneTexture,jt))}z.isBatchedMesh&&(Ae.setOptional(D,z,"batchingTexture"),Ae.setValue(D,"batchingTexture",z._matricesTexture,jt),Ae.setOptional(D,z,"batchingIdTexture"),Ae.setValue(D,"batchingIdTexture",z._indirectTexture,jt),Ae.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Ae.setValue(D,"batchingColorTexture",z._colorsTexture,jt));const On=W.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&st.update(z,W,An),(Rn||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,Ae.setValue(D,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Fn.envMap.value=_t,Fn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Fn.envMapIntensity.value=O.environmentIntensity),Rn&&(Ae.setValue(D,"toneMappingExposure",S.toneMappingExposure),kt.needsLights&&Hu(Fn,Ys),it&&q.fog===!0&&tt.refreshFogUniforms(Fn,it),tt.refreshMaterialUniforms(Fn,q,V,K,_.state.transmissionRenderTarget[A.id]),go.upload(D,cc(kt),Fn,jt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(go.upload(D,cc(kt),Fn,jt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ae.setValue(D,"center",z.center),Ae.setValue(D,"modelViewMatrix",z.modelViewMatrix),Ae.setValue(D,"normalMatrix",z.normalMatrix),Ae.setValue(D,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let xn=0,Xo=un.length;xn<Xo;xn++){const Xi=un[xn];Yt.update(Xi,An),Yt.bind(Xi,An)}}return An}function Hu(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Gu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(A,O,W){const q=St.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),St.get(A.texture).__webglTexture=O,St.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const W=St.get(A);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Vu=D.createFramebuffer();this.setRenderTarget=function(A,O=0,W=0){p=A,R=O,L=W;let q=!0,z=null,it=!1,dt=!1;if(A){const _t=St.get(A);if(_t.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(_t.__webglFramebuffer===void 0)jt.setupRenderTarget(A);else if(_t.__hasExternalTextures)jt.rebindTextures(A,St.get(A.texture).__webglTexture,St.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ut=A.depthTexture;if(_t.__boundDepthTexture!==Ut){if(Ut!==null&&St.has(Ut)&&(A.width!==Ut.image.width||A.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(A)}}const Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(dt=!0);const Gt=St.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?z=Gt[O][W]:z=Gt[O],it=!0):A.samples>0&&jt.useMultisampledRTT(A)===!1?z=St.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[W]:z=Gt,M.copy(A.viewport),C.copy(A.scissor),P=A.scissorTest}else M.copy(ft).multiplyScalar(V).floor(),C.copy(wt).multiplyScalar(V).floor(),P=Dt;if(W!==0&&(z=Vu),Mt.bindFramebuffer(D.FRAMEBUFFER,z)&&q&&Mt.drawBuffers(A,z),Mt.viewport(M),Mt.scissor(C),Mt.setScissorTest(P),it){const _t=St.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,W)}else if(dt){const _t=O;for(let Nt=0;Nt<A.textures.length;Nt++){const Gt=St.get(A.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,Gt.__webglTexture,W,_t)}}else if(A!==null&&W!==0){const _t=St.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,W)}d=-1},this.readRenderTargetPixels=function(A,O,W,q,z,it,dt,xt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const Nt=A.textures[xt],Gt=Nt.format,Ut=Nt.type;if(!Ht.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-q&&W>=0&&W<=A.height-z&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xt),D.readPixels(O,W,q,z,At.convert(Gt),At.convert(Ut),it))}finally{const Nt=p!==null?St.get(p).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,O,W,q,z,it,dt,xt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t)if(O>=0&&O<=A.width-q&&W>=0&&W<=A.height-z){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);const Nt=A.textures[xt],Gt=Nt.format,Ut=Nt.type;if(!Ht.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xt),D.readPixels(O,W,q,z,At.convert(Gt),At.convert(Ut),0);const he=p!==null?St.get(p).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,he);const Re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jd(D,Re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(ie),D.deleteSync(Re),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,W=0){const q=Math.pow(2,-W),z=Math.floor(A.image.width*q),it=Math.floor(A.image.height*q),dt=O!==null?O.x:0,xt=O!==null?O.y:0;jt.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,dt,xt,z,it),Mt.unbindTexture()};const Wu=D.createFramebuffer(),qu=D.createFramebuffer();this.copyTextureToTexture=function(A,O,W=null,q=null,z=0,it=null){it===null&&(z!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=z,z=0):it=0);let dt,xt,_t,Nt,Gt,Ut,ie,he,Re;const ye=A.isCompressedTexture?A.mipmaps[it]:A.image;if(W!==null)dt=W.max.x-W.min.x,xt=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,Nt=W.min.x,Gt=W.min.y,Ut=W.isBox3?W.min.z:0;else{const On=Math.pow(2,-z);dt=Math.floor(ye.width*On),xt=Math.floor(ye.height*On),A.isDataArrayTexture?_t=ye.depth:A.isData3DTexture?_t=Math.floor(ye.depth*On):_t=1,Nt=0,Gt=0,Ut=0}q!==null?(ie=q.x,he=q.y,Re=q.z):(ie=0,he=0,Re=0);const pe=At.convert(O.format),kt=At.convert(O.type);let Te;O.isData3DTexture?(jt.setTexture3D(O,0),Te=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(jt.setTexture2DArray(O,0),Te=D.TEXTURE_2D_ARRAY):(jt.setTexture2D(O,0),Te=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const oe=D.getParameter(D.UNPACK_ROW_LENGTH),An=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ms=D.getParameter(D.UNPACK_SKIP_PIXELS),Rn=D.getParameter(D.UNPACK_SKIP_ROWS),Ys=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const Ae=A.isDataArrayTexture||A.isData3DTexture,Fn=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const On=St.get(A),un=St.get(O),xn=St.get(On.__renderTarget),Xo=St.get(un.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,xn.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xo.__webglFramebuffer);for(let Xi=0;Xi<_t;Xi++)Ae&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(A).__webglTexture,z,Ut+Xi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(O).__webglTexture,it,Re+Xi)),D.blitFramebuffer(Nt,Gt,dt,xt,ie,he,dt,xt,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||St.has(A)){const On=St.get(A),un=St.get(O);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Wu),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,qu);for(let xn=0;xn<_t;xn++)Ae?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,On.__webglTexture,z,Ut+xn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,On.__webglTexture,z),Fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,un.__webglTexture,it,Re+xn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,un.__webglTexture,it),z!==0?D.blitFramebuffer(Nt,Gt,dt,xt,ie,he,dt,xt,D.COLOR_BUFFER_BIT,D.NEAREST):Fn?D.copyTexSubImage3D(Te,it,ie,he,Re+xn,Nt,Gt,dt,xt):D.copyTexSubImage2D(Te,it,ie,he,Nt,Gt,dt,xt);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Fn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Te,it,ie,he,Re,dt,xt,_t,pe,kt,ye.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,it,ie,he,Re,dt,xt,_t,pe,ye.data):D.texSubImage3D(Te,it,ie,he,Re,dt,xt,_t,pe,kt,ye):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,ie,he,dt,xt,pe,kt,ye.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,ie,he,ye.width,ye.height,pe,ye.data):D.texSubImage2D(D.TEXTURE_2D,it,ie,he,dt,xt,pe,kt,ye);D.pixelStorei(D.UNPACK_ROW_LENGTH,oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,An),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ms),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ys),it===0&&O.generateMipmaps&&D.generateMipmap(Te),Mt.unbindTexture()},this.initRenderTarget=function(A){St.get(A).__webglFramebuffer===void 0&&jt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?jt.setTextureCube(A,0):A.isData3DTexture?jt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?jt.setTexture2DArray(A,0):jt.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){R=0,L=0,p=null,Mt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Lt=0,Yn=1,vn=2,Un=3,Er=4,Kn=5,fs=6,wr=7,Po=8,ps=9,Le=10,ln=11,qe=12,Hn=13,Do=14,Mn=15,Xe=16,rn=17,Ze=18,Ws=19,Je=20,Hi=21,Ri=22,ke=23,gn=24,cn=25,qs=26,Uo=27,ko=28,No=29,Fo=30,Oo=31,Xs=32,kn=33,Gn=34,Pn=35,Wn=36,pn=37,hi=38,Tr=39,Sn=40,je=41,$e=42,on=43,an=44,wn=45,si=46,Xn=47,mi=48,Vn=49,pi=50,Ci=51,Ar=52,Rr=53,$s=54,Cr=55,Gi=56,gr=57,Et=r=>r,ii=[Et({id:Lt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),Et({id:Yn,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),Et({id:vn,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),Et({id:Un,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),Et({id:Er,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),Et({id:Kn,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),Et({id:fs,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),Et({id:wr,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),Et({id:Po,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),Et({id:ps,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),Et({id:Le,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Et({id:ln,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Et({id:qe,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),Et({id:Hn,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),Et({id:Do,name:"Metal Block",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),Et({id:Mn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),Et({id:Xe,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),Et({id:rn,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),Et({id:Ze,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),Et({id:Ws,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),Et({id:Je,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Et({id:Hi,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),Et({id:Ri,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),Et({id:ke,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),Et({id:gn,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),Et({id:cn,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),Et({id:qs,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),Et({id:Uo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),Et({id:ko,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),Et({id:No,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),Et({id:Fo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),Et({id:Oo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),Et({id:Xs,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),Et({id:kn,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),Et({id:Gn,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.28,.52,.28]}),Et({id:Pn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),Et({id:Wn,name:"Wheat Sprout",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.66,.66,.34]}),Et({id:pn,name:"Desert Wheat",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),Et({id:hi,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),Et({id:Tr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),Et({id:Sn,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),Et({id:je,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Et({id:$e,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Et({id:on,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),Et({id:an,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),Et({id:wn,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),Et({id:si,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),Et({id:Xn,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),Et({id:mi,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),Et({id:Vn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.3,.55,.3]}),Et({id:pi,name:"Curved Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Et({id:Ci,name:"Hull Slope",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.53,.58]}),Et({id:Ar,name:"Iron Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!0,color:[.62,.52,.42]}),Et({id:Rr,name:"Copper Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!0,color:[.72,.42,.26]}),Et({id:$s,name:"Alabaster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.4,breakTime:1.8,tool:"pickaxe",minTier:0,placeable:!0,color:[.86,.83,.74]}),Et({id:Cr,name:"Cobalt Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:4.2,tool:"pickaxe",minTier:3,placeable:!0,color:[.36,.46,.68]}),Et({id:Gi,name:"Broken Thruster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1,breakTime:-1,tool:null,minTier:0,placeable:!1,color:[.42,.44,.5]}),Et({id:gr,name:"Thruster (lit)",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:-1,tool:null,minTier:0,placeable:!1,color:[.9,.6,.3]})],ne=96,J=16,Ue=1440;function sn(r){return ii[r].solid}function Bo(r){return ii[r].opaque}function $n(r){return r===Ze||r>=qs&&r<=Xs}function Ni(r){return r===Ze?8:$n(r)?33-r:0}function gh(r){return 33-r}function y1(r){let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class zo{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function Rt(r,t,e){let n=r*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function El(r){return r*r*(3-2*r)}function Kl(r,t,e){const n=Math.floor(r),s=Math.floor(t),i=El(r-n),a=El(t-s),l=Rt(n,s,e),h=Rt(n+1,s,e),o=Rt(n,s+1,e),c=Rt(n+1,s+1,e);return l+(h-l)*i+(o-l)*a+(l-h-o+c)*i*a}function sr(r,t,e,n=4,s=2,i=.5){let a=0,l=1,h=1,o=0;for(let c=0;c<n;c++)a+=Kl(r*h,t*h,e+c*101)*l,o+=l,l*=i,h*=s;return a/o}function M1(r,t,e,n=3){let s=0,i=1,a=1,l=0;for(let h=0;h<n;h++){const o=Math.abs(Kl(r*a,t*a,e+h*101)*2-1);s+=(1-o)*i,l+=i,i*=.5,a*=2}return s/l}function _u(r,t){const e=Math.floor(r),n=El(r-e),s=Rt(e,0,t),i=Rt(e+1,0,t);return s+(i-s)*n}const S1=0,wl=1,vu=2,To=3,cr=4,b1=1e6,Fe=320;class xu{constructor(t){this.seed=t;const e=new zo(t^24378);for(let n=0;n<6;n++){const s=e.range(0,Math.PI*2),i=e.range(160,900);this.oases.push({x:Math.round(Math.cos(s)*i),z:Math.round(Math.sin(s)*i),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),s=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,s=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s)}}for(let n=0;n<13;n++){const s=e.range(0,Math.PI*2),i=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(s)*i),z:Math.round(Math.sin(s)*i),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(Rt(t,e,this.seed+53)-.5)*110,s=(Rt(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*Fe+n),z:Math.round(e*Fe+s)}}get gtx(){return Math.round(this.homeTown.x/Fe)}get gtz(){return Math.round(this.homeTown.z/Fe)}townAt(t,e){if(t===this.gtx&&e===this.gtz)return!0;if(Math.abs(t)<2&&Math.abs(e)<2||Rt(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const s of this.oases)if(Math.hypot(s.x-n.x,s.z-n.z)<s.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let s=null,i=n;const a=Math.floor((t-n)/Fe),l=Math.floor((t+n)/Fe),h=Math.floor((e-n)/Fe),o=Math.floor((e+n)/Fe);for(let c=a;c<=l;c++)for(let u=h;u<=o;u++){if(!this.townAt(c,u))continue;const f=this.townCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=i&&(i=m,s=f)}return s}nearestTown(t,e){let n=null,s=1/0;const i=Math.floor(t/Fe),a=Math.floor(e/Fe);for(let l=i-4;l<=i+4;l++)for(let h=a-4;h<=a+4;h++){if(!this.townAt(l,h))continue;const o=this.townCenter(l,h),c=Math.hypot(o.x-t,o.z-e);c<s&&(s=c,n=o)}return n??this.homeTown}}function jl(r,t,e){const n=Math.min(.999,Math.max(.001,sr(r/900+.5,t/900+.5,e,3))),i=[.17,.42,.57,.72,.9].map(h=>Math.exp(-Math.abs(n-h)/.05)),a=Math.max(Math.abs(r),Math.abs(t));a<80&&(i[0]+=Math.pow(1-a/80,2)*6);const l=i.reduce((h,o)=>h+o,0);return i.map(h=>h/l)}function _o(r,t,e){const n=jl(r,t,e);let s=0;for(let i=1;i<5;i++)n[i]>n[s]&&(s=i);return s}function E1(r,t,e){const n=jl(t,e,r),s=[30+sr(t/140,e/140,r+7)*8+Math.sin(t/9+e/13)*.9,29+sr(t/160,e/160,r+9)*6+Math.max(0,Kl(t/26,e/26,r+11)-.72)*10,28+sr(t/220,e/220,r+5)*3,33+Math.floor(sr(t/170,e/170,r+13)*4.99)*5,29-M1(t/210,e/210,r+17)*9];let i=0;for(let a=0;a<5;a++)i+=n[a]*s[a];return i}function xe(r,t,e){const n=Math.max(Math.abs(t),Math.abs(e)),s=E1(r,t,e);if(n>=30)return s;if(n<=14)return 30;const i=(n-14)/16,a=i*i*(3-2*i);return 30+(s-30)*a}function w1(r,t,e,n,s){const i=jl(t,e,r);let a=0,l=1;i[1]>i[0]&&(a=1,l=0);for(let h=2;h<5;h++)i[h]>i[a]?(l=a,a=h):i[h]>i[l]&&(l=h);return i[l]/i[a]>.35&&Rt(t,e,r+45)<i[l]/(i[a]+i[l])&&(a=l),n===s?a===vu?fs:a===cr?Un:a===To?vn:a===wl&&Rt(t,e,r+41)>.78?Er:Yn:n>=s-3?a===cr?Un:Yn:a===To||a===cr?Un:vn}function ss(r,t,e,n){const s=_=>_*_*(3-2*_),i=Math.floor(r),a=Math.floor(t),l=Math.floor(e),h=(_,b,w)=>Rt(_+w*911,b+w*577,n),o=s(r-i),c=s(t-a),u=s(e-l),f=(_,b,w)=>_+(b-_)*w,m=f(h(i,a,l),h(i+1,a,l),o),x=f(h(i,a+1,l),h(i+1,a+1,l),o),y=f(h(i,a,l+1),h(i+1,a,l+1),o),v=f(h(i,a+1,l+1),h(i+1,a+1,l+1),o);return f(f(m,x,c),f(y,v,c),u)}const yu=r=>Math.min(r-4,30),_h=new Map,T1=r=>{let t=_h.get(r);return t||(t=new xu(r).oases,_h.set(r,t)),t};function vh(r,t,e,n,s){if(e<3||t*t+n*n<240)return!1;const i=s??Math.round(xe(r,t,n));let a=yu(i);for(const o of T1(r))Math.abs(t-o.x)<=o.r+1&&Math.abs(n-o.z)<=o.r+1&&(a=Math.min(a,Math.round(xe(r,o.x,o.z))-5));if(e>a)return!1;const l=ss(t/9,e/5.5,n/9,r+301),h=ss(t/23,e/15,n/23,r+307);return l*.55+h*.45>.575+Math.max(0,a-e-4)*.005}const bi=(r,t,e)=>r+","+t+","+e;function A1(r,t,e){if(Rt(r,t,e+121)>=.6)return null;const n=Math.round(xe(e,r,t)),s=n-4,i=n-16;if(i<4)return null;const a=2+(Rt(r,t,e+123)*3|0),l=[];for(let P=0;P<a;P++){const F=-1+(Rt(r+P*3,t,e+125)*4|0),N=-1+(Rt(r,t+P*3,e+127)*4|0);l.push({x:r+F*6,z:t+N*6,hx:1+(Rt(r-P,t+P,e+129)*3|0),hz:1+(Rt(r+P,t-P,e+131)*3|0)})}const h=new Set;let o=1/0,c=-1/0,u=1/0,f=-1/0,m=1/0,x=-1/0;const y=(P,F,N)=>{h.add(bi(P,F,N)),P<o&&(o=P),P>c&&(c=P),N<u&&(u=N),N>f&&(f=N),F<m&&(m=F),F>x&&(x=F)},v=(P,F,N,G,K,V)=>{for(let Q=Math.min(P,F);Q<=Math.max(P,F);Q++)for(let et=Math.min(N,G);et<=Math.max(N,G);et++)for(let ft=K;ft<=V;ft++)y(Q,ft,et)};for(const P of l)v(P.x-P.hx,P.x+P.hx,P.z-P.hz,P.z+P.hz,i,s);for(let P=1;P<l.length;P++)v(l[P-1].x,l[P].x,l[P-1].z,l[P-1].z,i,s),v(l[P].x,l[P].x,l[P-1].z,l[P].z,i,s);const _=l[0],b=Rt(r,t+1,e+133)>.5?1:-1,w=Rt(r+1,t,e+135)>.5?1:-1,S=_.x+b*(_.hx+1),T=_.z+w*(_.hz+1);v(S,S+1,T,T+1,i,s-3);const L=[[9,-6],[9,7],[-11,-5]][Rt(r,t,e+137)*3|0],p={x:r+L[0],z:t+L[1]},d=Math.round(xe(e,p.x,p.z)),g=d,M=Math.min(s-8,d-3);if(g-M<4)return null;const C=[[0,0],[1,0],[1,1],[0,1]];for(let P=0;P<=g-M;P++){const F=C[P&3],N=g-P;y(p.x+F[0],N,p.z+F[1]),y(p.x+F[0],N+1,p.z+F[1])}return v(p.x,_.x,p.z,p.z,M,M+1),v(_.x,_.x,p.z,_.z,M,M+1),{x0:o,x1:c,z0:u,z1:f,y0:m,y1:x,air:h,sh:{...p,y0:g}}}function R1(r,t,e){const n=A1(t.x,t.z,e);if(n){for(let s=n.x0;s<=n.x1;s++)for(let i=n.z0;i<=n.z1;i++)for(let a=n.y0;a<=n.y1;a++)n.air.has(bi(s,a,i))&&r(s,a,i,Lt);for(let s=n.x0-1;s<=n.x1+1;s++)for(let i=n.z0-1;i<=n.z1+1;i++)for(let a=n.y0-1;a<=n.y1+1;a++){if(n.air.has(bi(s,a,i)))continue;(n.air.has(bi(s+1,a,i))||n.air.has(bi(s-1,a,i))||n.air.has(bi(s,a+1,i))||n.air.has(bi(s,a-1,i))||n.air.has(bi(s,a,i+1))||n.air.has(bi(s,a,i-1)))&&r(s,a,i,Rt(s*3+i*7,a*5+i,e+139)<.16?$s:Ws)}}}function C1(r){const n=(o,c)=>o===4||o===-6?Math.abs(c)<=4:c===5||c===-5?o>=-5&&o<=3:o>=-5&&o<=3&&c>=-4&&c<=4,s=(o,c,u)=>(o===4||o===-6)&&Math.abs(u)>=3&&(c===30||c===34),i=(o,c)=>Math.abs(c)===5&&(o===3||o===-5),a=(o,c,u)=>Math.abs(c)===5&&o>=-3&&o<=2&&u>=31&&u<=33;for(let o=-6;o<=4;o++)for(let c=-5;c<=5;c++)for(let u=30;u<=34;u++){if(!n(o,c)||s(o,u,c))continue;const f=o>=2&&Math.abs(c)>2,m=o>=-5&&o<=3&&c>=-4&&c<=4&&u>=31&&u<=33&&!f;r(o,u,c,m?Lt:i(o,c)||a(o,c,u)?pi:u===30?Sn:Le)}for(let o=-3;o<=1;o++)for(let c=-2;c<=2;c++)r(o,35,c,Ci);for(let o=-2;o<=0;o++)for(let c=-1;c<=1;c++)r(o,36,c,Ci);for(let o=-2;o<=1;o++)for(const c of[6,7,8,9,-6,-7,-8,-9])r(o,32,c,Sn);for(const o of[-3,2])for(const c of[6,7,8,-6,-7,-8])r(o,32,c,Sn);for(const o of[-1,0])r(o,31,10,Sn),r(o,31,-10,Sn);for(const o of[-1,0])r(o,31,11,Sn),r(o,31,-11,Sn);for(const o of[-1,0])r(o,32,11,Gi),r(o,32,-11,Gi);const l=(o,c,u)=>{r(o,c,u,ln),r(o,c+1,u,Je)},h=(o,c,u)=>{r(o,c,u,je),r(o,c+1,u,$e)};for(let o=-4;o<=4;o++)for(let c=31;c<=33;c++)r(1,c,o,Le),r(-2,c,o,Le);for(let o=-5;o<=-3;o++)for(const c of[-2,2])for(let u=31;u<=33;u++)r(o,u,c,Le);h(1,31,0),h(-2,31,0),h(-2,31,3),h(-2,31,-3),l(-6,31,0);for(let o=-2;o<=2;o++)for(let c=32;c<=33;c++)r(4,c,o,ps);r(-4,30,4,Ze),r(-4,29,4,Ze),r(-3,30,4,Ze),r(-4,31,-4,Ri),r(-4,31,-1,Mn),r(0,31,-3,Xe),r(0,31,-2,gn);for(const[o,c]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])r(o,34,c,Hn);for(const[o,c]of[[0,3],[0,4],[-1,4],[2,2]])r(o,31,c,Sn)}function I1(r,t,e){const n=new zo(b1+77),s=Math.round(xe(e,t.x,t.z));for(let i=-2;i<=2;i++)for(let a=-2;a<=2;a++){if(Math.abs(i)!==2&&Math.abs(a)!==2)continue;const l=Math.abs(i)===2&&Math.abs(a)===2;for(let h=s+1;h<=s+3;h++)r(t.x+i,h,t.z+a,l?pi:Le)}for(let i=s+1;i<=s+2;i++)r(t.x,i,t.z-2,Lt);for(let i=0;i<40;i++){const a=t.x+n.int(-5,5),l=t.z+n.int(-5,5),h=Math.round(xe(e,a,l)),o=n.next();r(a,h+n.int(0,1),l,o<.45?Le:o<.55?pi:Sn)}r(t.x,Math.round(xe(e,t.x,t.z))+1,t.z,Hi)}function Mu(r,t,e,n){const s=5+Math.floor(n()*3),i=[],a=(u,f,m,x,y)=>i.push({x:u,y:f,z:m,b:x,stage:y});a(r,t,e,Xn,1),a(r,t+1,e,Xn,1);for(let u=2;u<s;u++)a(r,t+u,e,Xn,2);const l=[[1,0],[-1,0],[0,1],[0,-1]],h=2+(n()<.5?1:0);for(let u=0;u<h;u++){const f=l[Math.floor(n()*4)];a(r+f[0],t+s-2+u%2,e+f[1],Xn,2)}const o=new Set(i.map(u=>u.x+","+u.y+","+u.z)),c=t+s-1;for(let u=-1;u<=2;u++){const f=u===-1||u===2?1.7:2.4;for(let m=-3;m<=3;m++)for(let x=-3;x<=3;x++){const y=m*m+x*x+u*u*2.2;if(y>f*f||y>(f-.9)*(f-.9)&&n()<.3||m===0&&x===0)continue;const v=r+m,_=c+u,b=e+x;o.has(v+","+_+","+b)||a(v,_,b,mi,3)}}return i}function Su(r,t,e,n,s,i){const a=new zo(Rt(t,n,s+i)*4294967296>>>0||1);for(const l of Mu(t,e+1,n,()=>a.next()))r(l.x,l.y,l.z,l.b)}function L1(r,t,e){const n=Math.round(xe(e,t.x,t.z));for(let a=-t.r-1;a<=t.r+1;a++)for(let l=-t.r-1;l<=t.r+1;l++){const h=t.x+a,o=t.z+l,c=Math.sqrt(a*a+l*l),u=Math.round(xe(e,h,o));if(c<=t.r){const f=Math.max(1,Math.round(2.7-1.7*(c/t.r)));for(let m=u;m>n-f;m--)r(h,m,o,Lt);r(h,n-f,o,Yn);for(let m=n-f+1;m<=n;m++)r(h,m,o,Ze)}else if(c<=t.r+1)for(let f=u;f<n+1;f++)r(h,f,o,Yn)}const s=3+(Rt(t.x,t.z,e+73)<.5?1:0);for(let a=-t.r-s;a<=t.r+s;a++)for(let l=-t.r-s;l<=t.r+s;l++){const h=Math.sqrt(a*a+l*l);if(h<=t.r||h>t.r+s)continue;const o=t.x+a,c=t.z+l,u=Math.max(Math.round(xe(e,o,c)),n);for(let f=u-2;f<=u;f++)r(o,f,c,f===u?si:Kn)}const i=4+Math.floor(Rt(t.x,t.z,e+75)*4);for(let a=0;a<i;a++){const l=a*(Math.PI*2/i)+Rt(t.x+a,t.z-a,e+77)*1.1,h=t.r+1.5+Rt(t.x-a,t.z+a,e+79)*(s+2),o=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h),u=Math.max(Math.round(xe(e,o,c)),n);Su(r,o,u,c,e,81)}for(let a=0;a<5;a++){if(Rt(t.x,t.z,e+61+a)<.35)continue;const l=a*1.27+Rt(t.z,t.x,e+67+a)*.8,h=t.r+.5,o=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h);Math.hypot(o-t.x,c-t.z)<t.r||r(o,Math.max(Math.round(xe(e,o,c)),n)+1,c,Pn)}}function P1(r,t,e){for(const[o,c]of[[-4,-3],[3,2],[-3,5]]){const u=Math.round(xe(e,t.x+o,t.z+c));for(let f=0;f<5;f++)for(let m=0;m<5;m++)for(let x=u-1;x<=u+3;x++){const y=x===u-1,v=(f===0||f===4||m===0||m===4)&&x>=u&&x<=u+2,_=x===u+3,b=f===0&&(m===2||m===3)&&x>=u&&x<=u+2;if(!(y||v||_)||b){r(t.x+o+f,x,t.z+c+m,Lt);continue}r(t.x+o+f,x,t.z+c+m,Ws)}r(t.x+o+1,u,t.z+c+1,ke),r(t.x+o+2,u,t.z+c+1,an),r(t.x+o+3,u,t.z+c+1,wn)}const n=t.x+3+Math.round((Rt(t.x,t.z,e+83)-.5)*8),s=t.z-3+Math.round((Rt(t.z,t.x,e+85)-.5)*8),i=2.5+Rt(t.x,t.z,e+87)*2,a=(o,c)=>[[-4,-3],[3,2],[-3,5]].some(([u,f])=>o>=u-1+t.x&&o<=u+5+t.x&&c>=f-1+t.z&&c<=f+5+t.z);for(let o=-5;o<=5;o++)for(let c=-5;c<=5;c++){if(Math.sqrt(o*o+c*c)>i)continue;const u=n+o,f=s+c;if(a(u,f))continue;const m=Math.round(xe(e,u,f));for(let x=m-2;x<=m;x++)r(u,x,f,x===m?si:Kn)}const l=3+Math.floor(Rt(t.x,t.z,e+89)*4);for(let o=0;o<l;o++){const c=o*(Math.PI*2/l)+Rt(t.x+o,t.z-o,e+91)*1.3,u=1+Rt(t.x-o,t.z+o,e+93)*i,f=n+Math.round(Math.cos(c)*u),m=s+Math.round(Math.sin(c)*u);a(f,m)||Su(r,f,Math.round(xe(e,f,m)),m,e,95)}const h=Math.round(xe(e,t.x,t.z+11));for(let o=0;o<5;o++)for(let c=0;c<3;c++)r(t.x-8+o,h,t.z+10+c,kn);r(t.x-7,h+1,t.z+11,pn),r(t.x-5,h+1,t.z+10,pn),r(t.x-4,h+1,t.z+12,Pn)}function D1(r,t,e,n){const s=new Uint8Array(J*J*ne),i=(y,v,_,b)=>{const w=y-e*J,S=_-n*J;w>=0&&w<J&&S>=0&&S<J&&v>=0&&v<ne&&(s[(w*J+S)*ne+v]=b)},a=J+2,l=new Uint8Array(a*a*ne),h=new Int16Array(a*a).fill(-1),o=(y,v)=>{const _=(y-e*J+1)*a+(v-n*J+1);return h[_]<0&&(h[_]=Math.round(xe(r,y,v))),h[_]},c=(y,v,_)=>{const b=y-e*J+1,w=_-n*J+1;if(b<0||b>=a||w<0||w>=a)return vh(r,y,v,_);const S=(b*a+w)*ne+v;return l[S]||(l[S]=vh(r,y,v,_,o(y,_))?2:1),l[S]===2};for(let y=0;y<J;y++)for(let v=0;v<J;v++){const _=e*J+y,b=n*J+v,w=Math.round(xe(r,_,b));for(let R=0;R<=w;R++)s[(y*J+v)*ne+R]=w1(r,_,b,R,w);const S=_*_+b*b<240,T=yu(w);if(!S)for(let R=3;R<=T;R++){const L=(y*J+v)*ne+R;if(c(_,R,b)){s[L]=R>=8&&R<=18&&ss(_/26,R/19,b/26,r+401)>.785?Ze:Lt;continue}const p=s[L];p!==Un&&p!==vn||(c(_+1,R,b)||c(_-1,R,b)||c(_,R+1,b)||c(_,R-1,b)||c(_,R,b+1)||c(_,R,b-1))&&(R<=15&&Rt(_*5+R,b*7-R,r+333)<.4&&ss(_/5+40,R/5,b/5,r+331)>.72?s[L]=Cr:R>=12&&ss(_/5,R/5,b/5,r+313)>.665?s[L]=Ar:R>=12&&ss(_/5,R/5+60,b/5,r+317)>.7?s[L]=Rr:R>=8&&R<=24&&ss(_/5,R/5,b/5+70,r+321)>.715&&(s[L]=$s))}if(!S&&w>=12&&Rt(_,b,r+201)>.984&&t.townNear(_,b,14)===null&&t.nearOasis(_,b)===null){const R=T-4;if(R>=7){for(let L=w-1;L>=R;L--)s[(y*J+v)*ne+L]=Lt;s[(y*J+v)*ne+(R-1)]=Un}}if(!S&&Rt(_,b,r+21)>.988){const R=_o(_,b,r),L=(p,d)=>p>=0&&p<J&&d>=0&&d<J;if(R===To||R===cr){const p=3+(Rt(_,b,r+22)*3|0);for(let d=1;d<=p;d++)i(_,w+d,b,Un);y>0&&Rt(_,b,r+27)>.5&&i(_-1,w+1,b,Un)}else if(R===wl){const p=2+(Rt(_,b,r+24)*2|0),d=[[1,0],[-1,0],[0,1],[0,-1]][Rt(_,b,r+25)*4|0];for(let g=0;g<p;g++){const M=g===p-1?1:0;L(y+d[0]*M,v+d[1]*M)&&i(_+d[0]*M,w+1+g,b+d[1]*M,Un)}}else if(R===vu)for(const[p,d]of[[0,0],[1,0],[0,1],[1,1]])L(y+p,v+d)&&i(_+p,w+1,b+d,fs);else{const p=2+(Rt(_,b,r+26)*3|0);for(let d=0;d<p;d++){const g=(Rt(_+d,b,r+33)*3|0)-1,M=(Rt(_,b+d,r+35)*3|0)-1;L(y+g,v+M)&&i(_+g,w+1,b+M,Rt(_+d,b-d,r+43)>.5?Un:vn)}}}if(!S&&Rt(_,b,r+23)>.9935){const R=_o(_,b,r);if(R!==To&&R!==cr){const L=3+(Rt(_,b,r+29)*3|0);for(let p=w+1;p<=w+L;p++)i(_,p,b,wr)}}if(!S&&s[(y*J+v)*ne+w+1]===0&&Rt(_,b,r+31)>.9915){const R=_o(_,b,r);if(R===S1||R===wl){const L=2+(Rt(_,b,r+37)*3|0);for(let p=w+1;p<=w+L;p++)i(_,p,b,cn);L>=3&&Rt(_,b,r+41)>.55&&i(_+(Rt(_,b,r+43)>.5?1:-1),w+2,b,cn),L>=3&&Rt(_,b,r+47)>.7&&i(_,w+L,b,hi)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&C1(i);for(const y of t.oases)Math.abs(e*J+8-y.x)<y.r+24&&Math.abs(n*J+8-y.z)<y.r+24&&L1(i,y,r);const u=Math.floor((e*J-14-Fe)/Fe),f=Math.floor((e*J+J+14+Fe)/Fe),m=Math.floor((n*J-14-Fe)/Fe),x=Math.floor((n*J+J+14+Fe)/Fe);for(let y=u;y<=f;y++)for(let v=m;v<=x;v++){if(!t.townAt(y,v))continue;const _=t.townCenter(y,v);e*J<=_.x+16&&e*J+J-1>=_.x-12&&n*J<=_.z+12&&n*J+J-1>=_.z-16&&P1(i,_,r),e*J<=_.x+30&&e*J+J-1>=_.x-30&&n*J<=_.z+30&&n*J+J-1>=_.z-30&&R1(i,_,r)}return Math.abs(e*J+8-t.secondShip.x)<12&&Math.abs(n*J+8-t.secondShip.z)<12&&I1(i,t.secondShip,r),s}const ei=(r,t)=>r+","+t,xh=(r,t,e)=>(r*J+t)*ne+e,Aa=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],yh=new Set([Lt,qe,je,$e,on,mi]);class U1{constructor(t){this.seed=t,this.gen=new xu(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;waterQ=new Set;gen;chunk(t,e){const n=ei(t,e);let s=this.chunks.get(n);if(!s){s=D1(this.seed,this.gen,t,e);const i=this.deltas.get(n);if(i)for(const[a,l]of i)s[a]=l;this.chunks.set(n,s)}return s}get(t,e,n){if(e<0||e>=ne)return Lt;const s=Math.floor(t/J),i=Math.floor(n/J);return this.chunk(s,i)[xh(t-s*J,n-i*J,e)]}skyResistance(t,e,n,s=40){let i=0,a=0;for(let l=1;l<=s;l++){const h=this.get(t,e+l,n);if(h===Lt)continue;const o=k1[h];if(o&&(i+=o,h!==mi&&(a+=o,a>=6)))return{R:i,openSky:!1}}return{R:i,openSky:a===0}}sunVisible(t,e,n,s,i,a,l=64){if(i<=0)return!1;let h=t,o=e,c=n;const u=Math.sign(s),f=1,m=Math.sign(a),x=u?Math.abs(1/s):1/0,y=1/i,v=m?Math.abs(1/a):1/0;let _=u?(u>0?h+1-(t+.5):t+.5-h)*x:1/0,b=(e+1-(e+.5))*y,w=m?(m>0?c+1-(n+.5):n+.5-c)*v:1/0;for(let S=0;S<192;S++){let T;if(_<=b&&_<=w?(h+=u,T=_,_+=x):b<=w?(o+=f,T=b,b+=y):(c+=m,T=w,w+=v),T>l)return!0;const R=this.get(h,o,c);if(R===ps||Bo(R))return!1}return!0}roomInfo(t,e,n,s=400){if(!yh.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const i=new Set([`${t},${e},${n}`]),a=[[t,e,n]],l=new Set;let h=0,o=!0;for(;a.length;){const[c,u,f]=a.pop();if(++h>s){o=!1;break}for(const[m,x,y]of Aa){const v=c+m,_=u+x,b=f+y;if(_>=ne){o=!1;continue}const w=this.get(v,_,b);if(yh.has(w)){const S=v+","+_+","+b;i.has(S)||(i.add(S),a.push([v,_,b]))}else w===Ri&&l.add(v+","+_+","+b)}}return{size:h,sealed:o,regulators:l.size,regCells:[...l]}}set(t,e,n,s){if(e<0||e>=ne)return;const i=Math.floor(t/J),a=Math.floor(n/J),l=this.chunk(i,a),h=xh(t-i*J,n-a*J,e);if(l[h]===s)return;const o=l[h];if(l[h]=s,$n(s)||$n(o)||s===Lt){this.queueWater(t,e,n);for(const[m,x,y]of Aa)this.queueWater(t+m,e+x,n+y)}let c=this.deltas.get(ei(i,a));c||this.deltas.set(ei(i,a),c=new Map),c.set(h,s),this.markDirty(i,a);const u=t-i*J,f=n-a*J;u===0&&this.markDirty(i-1,a),f===0&&this.markDirty(i,a-1),u===J-1&&this.markDirty(i+1,a),f===J-1&&this.markDirty(i,a+1)}markDirty(t,e){this.dirty.add(ei(t,e))}queueWater(t,e,n){e>=0&&e<ne&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;const n=[...this.waterQ];this.waterQ.clear();for(const s of n){if(e>=t)break;const[i,a,l]=s.split(",").map(Number);e+=this.drainFlow(i,a,l,t-e),e+=this.floodFrom(i,a,l,t-e)}return e}drainFlow(t,e,n,s){let i=0;const a=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],l=new Set;for(;a.length&&i++<s;){const[h,o,c]=a.pop(),u=Ni(this.get(h,o,c));if(!u||u===8)continue;const f=h+","+o+","+c;if(!l.has(f)&&(l.add(f),!this.waterSupported(h,o,c,u))){this.set(h,o,c,Lt);for(const[m,x,y]of Aa)a.push([h+m,o+x,c+y])}}return i}waterSupported(t,e,n,s){for(const[i,a]of[[1,0],[-1,0],[0,1],[0,-1]])if(Ni(this.get(t+i,e,n+a))>s)return!0;return Ni(this.get(t,e+1,n))>=s}floodFrom(t,e,n,s){let i=0;const a=[[t,e,n]];for(;a.length&&i++<s;){const[l,h,o]=a.shift(),c=Ni(this.get(l,h,o));if(!c)continue;if(h>0){const f=this.get(l,h-1,o);(f===Lt||$n(f))&&Ni(f)<c&&this.set(l,h-1,o,gh(c===8?7:c))}const u=c===8?7:c-1;if(!(u<1))for(const[f,m]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=this.get(l+f,h,o+m);(x===Lt||$n(x))&&Ni(x)<u&&this.set(l+f,h,o+m,gh(u))}}return i}surface(t,e){for(let n=ne-1;n>=0;n--)if(this.get(t,n,e)!==Lt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const s=[];for(const[i,a]of n)s.push(i,a);t[e]=s}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const s=new Map;for(let i=0;i<n.length;i+=2)s.set(n[i],n[i+1]);this.deltas.set(e,s)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}}const k1=ii.map(r=>r.R);function Ra(r,t,e,n,s){const i=r.get(t,e,n);return i===ln||i===Je||i===je||i===$e?!0:!(Bo(i)||i===s)}const oo=.6,N1=1.8,Mh=1.62;class F1{constructor(t){this.world=t}pos=new U(.5,31.01,2.5);vel=new U;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;waterAt(t){const e=this.pos.y+t,n=Math.floor(e),s=this.world.get(Math.floor(this.pos.x),n,Math.floor(this.pos.z));return $n(s)?e-n<Ni(s)/8:!1}collides(t,e,n){const s=Math.floor(t-oo/2),i=Math.floor(t+oo/2),a=Math.floor(n-oo/2),l=Math.floor(n+oo/2),h=Math.floor(e),o=Math.floor(e+N1-.001);for(let c=s;c<=i;c++)for(let u=a;u<=l;u++)for(let f=h;f<=o;f++)if(sn(this.world.get(c,f,u)))return!0;return!1}update(t,e,n,s,i,a){this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Mh);const l=this.inWater,h=(this.sprinting?7.2:4.5)*i*(a?.25:1)*(l?.55:1),o=new U(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new U(-o.z,0,o.x),u=o.multiplyScalar(n).add(c.multiplyScalar(e));u.lengthSq()>1&&u.normalize();const f=this.onGround?40:l?12:8;this.vel.x+=(u.x*h-this.vel.x)*Math.min(1,f*t),this.vel.z+=(u.z*h-this.vel.z)*Math.min(1,f*t),l?(this.vel.y-=7*t,s&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=zi.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,s&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0)),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,s=Math.max(1,Math.ceil(Math.abs(t)/.3)),i=t/s;for(let a=0;a<s;a++){const l=n.x+(e===0?i:0),h=n.y+(e===1?i:0),o=n.z+(e===2?i:0);if(!this.collides(l,h,o)){n.set(l,h,o);continue}e===1?(i<0&&(this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new U(this.pos.x,this.pos.y+Mh,this.pos.z)}}const rs=20,rr=45,Zl=36,Jl=37.5,Tl=39.5,Al=31.5,Rl=5,Sh=22,O1=27,B1=25,Ao=150;class z1{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%Ue/Ue}ambient(t,e,n){const s=(e-.28+1)%1;let i=O1-B1*(s<=.3?Math.cos(s/.3*Math.PI):Math.cos((1+(s-.3)/.7)*Math.PI));t===2&&(i-=2),(t===3||t===4)&&(i+=3);const a=_u(Math.floor(n/10)/60,this.weatherSeed)*2-1;return i+a*8}update(t,e,n,s){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const i=this.worldTimeToDayFrac(s.tSec),a=this.ambient(s.biome,i,s.tSec),l=Math.floor(n.x),h=Math.floor(n.y),o=Math.floor(n.z),c=(b,w,S)=>{const T=w<=s.terrainH(b,S)-2,R=T?Sh:a,{R:L,openSky:p}=e.skyResistance(b,w,S);let d=1-Math.exp(-L),g=R;!T&&s.sunElev>0&&s.sunDir&&e.sunVisible(b,w,S,s.sunDir.x,s.sunDir.y,s.sunDir.z)&&(g+=8+10*s.sunElev);const M=e.roomInfo(b,w,S);return M.sealed&&(M.regulators*Ao>=M.size?(g=36.6,d=1):(g=R,T||(d=0))),{R:L,openSky:p,shelter:d,ambEff:g,room:M,deep:T}};let u=c(l,h,o);if(u.room.size===0){const b=`${l},${h},${o}|${Math.floor(s.tSec*2)}`;if(this.embedKey!==b){let w=u;for(let S=-1;S<=1;S++)for(let T=-1;T<=1;T++)for(let R=-1;R<=1;R++){if(!S&&!T&&!R)continue;const L=c(l+S,h+T,o+R);L.room.size!==0&&Math.abs(L.ambEff-37)<Math.abs(w.ambEff-37)&&(w=L)}this.embedKey=b,this.embedAir=w}this.embedAir&&(u=this.embedAir)}this.lastOpenSky=u.openSky;let f=u.shelter,m=u.ambEff;const x=u.room;if(this.lastRoom=x,s.inWater){const b=zi.clamp(a,12,24)-3;m=(m+b)/2}s.warmth&&(m+=s.warmth);const y=s.regulator?36.6:36.6+(m-36.6)*(1-f);this.lastAmbient=u.deep?Sh:a,this.lastAmbientEff=m,this.lastShelterR=u.R,this.lastTarget=y;const v=x.sealed?.022:.0075;this.body+=(y-this.body)*v*t,this.body=zi.clamp(this.body,12,44.5);let _=100/(Ue*1.5);this.body>37&&(_+=(this.body-37)*.02),s.sprinting&&(_*=1.7),s.overencumbered&&(_+=.05),this.water=Math.max(0,this.water-_*t),this.body>Tl&&this.hurt((this.body-Tl)*.15,"heat stroke"),this.body<Al&&this.hurt((Al-this.body)*.175,"hypothermia"),this.water<=0?this.hurt(.3,"dehydration"):this.water<Rl&&this.hurt((Rl-this.water)*.0375,"dehydration"),this.water>25&&this.body>=Zl&&this.body<=Jl&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=zi.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,s,i){const a=this.worldTimeToDayFrac(i),l=this.ambient(0,a,i);let h=l;const o=(a-.25)*Math.PI*2,c=Math.sin(o);if(c>0){const f=1/Math.hypot(Math.cos(o),c,.4);t.sunVisible(e,n,s,Math.cos(o)*f,c*f,.4*f)&&(h+=8+10*c)}const u=t.roomInfo(e,n,s);return u.sealed&&(h=u.regulators*Ao>=u.size?36.6:l),h}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=10,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const vo=15,or=J+2,ls=(r,t,e)=>((r+1)*or+(t+1))*ne+e,H1=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function bh(r){return r===mi?2:r===Lt?1:Bo(r)?-1:1}function G1(r){return r===mi?2:$n(r)?1:r===Lt?0:Bo(r)?-1:0}class V1{maps=new Map;invalidate(t,e){this.maps.delete(ei(t,e))}lightAt(t,e,n){if(e<0||e>=ne)return 0;const s=Math.floor(t/J),i=Math.floor(n/J),a=this.maps.get(ei(s,i));return a?a[ls(t-s*J,n-i*J,e)]:0}bake(t,e,n,s){const i=t.chunk(e,n),a=new Uint8Array(or*or*ne),l=[],h=(c,u,f,m)=>{if(m<=0)return;const x=ls(c,u,f);m>a[x]&&(a[x]=m,l.push(x))},o=(c,u,f)=>c>=0&&c<J&&u>=0&&u<J?i[(c*J+u)*ne+f]:t.get(e*J+c,f,n*J+u);for(let c=-1;c<=J;c++)for(let u=-1;u<=J;u++){let f=vo;for(let m=ne-1;m>=0;m--){const x=G1(o(c,u,m));if(x<0||(h(c,u,m,f),x>0&&(f-=x,f<=0)))break}}for(const[c,u]of[[-1,0],[1,0],[0,-1],[0,1]]){const f=this.maps.get(ei(e+c,n+u));if(f)for(let m=0;m<J;m++)for(let x=0;x<ne;x++){const y=c<0?-1:c>0?J:m,v=u<0?-1:u>0?J:m,_=c<0?J-1:c>0?0:m,b=u<0?J-1:u>0?0:m,w=f[ls(_,b,x)];w>0&&h(y,v,x,w)}}for(let c=0;c<l.length;c++){const u=l[c],f=a[u];if(f<=1)continue;const m=(u/(or*ne)|0)-1,x=u%(or*ne),y=(x/ne|0)-1,v=x%ne;for(const[_,b,w]of H1){const S=m+_,T=y+w,R=v+b;if(!(R<0||R>=ne))if(S>=-1&&S<=J&&T>=-1&&T<=J){const L=bh(o(S,T,R));L>=0&&h(S,T,R,f-L)}else{const L=e*J+S,p=n*J+T,d=bh(t.get(L,R,p));if(d<0)continue;const g=Math.floor(L/J),M=Math.floor(p/J),C=this.maps.get(ei(g,M));C&&C[ls(L-g*J,p-M*J,R)]+1<f-d&&s(g,M)}}}return this.maps.set(ei(e,n),a),a}}const W1=new Set([ln,Je,qe,je,$e,on]),q1=new Set([Wn,pn,Vn]),ao=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],X1=.28;function De(r,t,e,n,s){const i=n[1].map((c,u)=>c-n[0][u]),a=n[2].map((c,u)=>c-n[0][u]),l=i[1]*a[2]-i[2]*a[1],h=i[2]*a[0]-i[0]*a[2],o=i[0]*a[1]-i[1]*a[0];return l*r[0]+h*r[1]+o*r[2]<0&&n.reverse(),{dir:r,kind:t,pts:n,sh:e,uv:s}}const $1=(()=>{const r=X1,t=1-r,e=c=>[c[0],c[2]],n=c=>[c[0],c[1]],s=c=>[c[2],c[1]],i=c=>[(c[2]-c[0])/2+.5,c[1]],a=c=>[(c[0]+c[2])/2,c[1]],l=[[r,0],[t,0],[1,r],[1,t],[t,1],[r,1],[0,t],[0,r]],h=[De([0,1,0],0,1,l.map(([c,u])=>[c,1,u]),e),De([0,-1,0],1,.45,l.map(([c,u])=>[c,0,u]),e),De([1,0,0],2,.8,[[1,0,r],[1,0,t],[1,1,t],[1,1,r]],s),De([-1,0,0],2,.7,[[0,0,t],[0,1,t],[0,1,r],[0,0,r]],s),De([0,0,1],2,.85,[[r,0,1],[t,0,1],[t,1,1],[r,1,1]],n),De([0,0,-1],2,.65,[[r,0,0],[r,1,0],[t,1,0],[t,0,0]],n),De([-1,0,-1],2,.675,[[r,0,0],[r,1,0],[0,1,r],[0,0,r]],i),De([1,0,-1],2,.725,[[t,0,0],[t,1,0],[1,1,r],[1,0,r]],a),De([1,0,1],2,.825,[[1,0,t],[1,1,t],[t,1,1],[t,0,1]],i),De([-1,0,1],2,.775,[[0,0,t],[0,1,t],[r,1,1],[r,0,1]],a)],o=[De([0,1,0],0,1,[[r,1,r],[r,1,t],[t,1,t],[t,1,r]],e),De([0,-1,0],1,.45,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],e),De([1,0,0],2,.8,[[1,0,0],[1,0,1],[1,t,1],[1,t,0]],s),De([-1,0,0],2,.7,[[0,0,0],[0,t,0],[0,t,1],[0,0,1]],s),De([0,0,1],2,.85,[[0,0,1],[1,0,1],[1,t,1],[0,t,1]],n),De([0,0,-1],2,.65,[[0,0,0],[0,t,0],[1,t,0],[1,0,0]],n),De([0,1,-1],2,.825,[[0,t,0],[1,t,0],[1,1,r],[0,1,r]],n),De([0,1,1],2,.925,[[1,t,1],[0,t,1],[0,1,r],[1,1,r]],n),De([-1,1,0],2,.85,[[0,t,1],[0,t,0],[0,1,r],[0,1,t]],s),De([1,1,0],2,.9,[[1,t,0],[1,t,1],[1,1,t],[1,1,r]],s)];return{[pi]:h,[Ci]:o}})(),Me=16,bn=16,_r=[Yn,vn,Un,Er,Kn,fs,wr,Po,ps,Le,ln,Je,Hn,Do,Mn,Xe,rn,Ze,Ws,qe,Hi,Ri,ke,gn,cn,qs,Uo,ko,No,Fo,Oo,Xs,kn,Gn,Pn,Wn,pn,hi,Tr,Sn,je,$e,on,an,wn,si,Xn,mi,Vn,Ar,Rr,Cr,$s,Gi,gr],bu=[["grass_top",si],["grass_side",si],["wood_top",Xn],["farmland_side",kn],["sandstone_top",vn],["hull_top",Le],["water_side",Ze],["bed_side",an],["chest_top",ke],["bench_top",Xe],["bench_ext_top",gn],["campfire_top",rn],["cactus_top",cn]],Oe={};bu.forEach(([r],t)=>Oe[r]=_r.length+t);let Ca=null;function Eu(){if(Ca)return Ca;const r=document.createElement("canvas");r.width=r.height=bn*Me;const t=r.getContext("2d"),e=new zo(48879);_r.forEach((p,d)=>d);let n=0,s=0,i=0,a=0,l=0;const h=p=>Math.max(0,Math.min(1,p)),o=(p,d=1,g=0,M=0,C=0)=>`rgba(${Math.round(h(i+p+g)*255)},${Math.round(h(a+p+M)*255)},${Math.round(h(l+p+C)*255)},${d})`,c=(p,d,g)=>{t.fillStyle=g,t.fillRect(n+p,s+d,1,1)},u=p=>{t.fillStyle=p,t.fillRect(n,s,Me,Me)},f=p=>(e.next()-.5)*p,m=(p,d)=>{for(let g=0;g<p;g++)c(e.int(0,15),e.int(0,15),o(f(d)))},x=(p,d,g=-.15)=>{let M=e.int(1,13),C=e.int(1,13);for(let P=0;P<p;P++)c(M,C,o(g+f(d))),M+=e.int(-1,1),C+=e.int(0,1),M=Math.max(0,Math.min(15,M)),C=Math.max(0,Math.min(15,C))},y=()=>{const p=M=>{const C=[];for(let N=0;N<M*M;N++)C.push(e.next());const P=(N,G)=>C[G%M*M+N%M],F=[];for(let N=0;N<16;N++)for(let G=0;G<16;G++){const K=G*M/16,V=N*M/16,Q=Math.floor(K),et=Math.floor(V),ft=K-Q,wt=V-et,Dt=P(Q,et)+(P(Q+1,et)-P(Q,et))*ft,Pt=P(Q,et+1)+(P(Q+1,et+1)-P(Q,et+1))*ft;F.push(Dt+(Pt-Dt)*wt)}return F},d=p(4),g=p(8);return d.map((M,C)=>(M*.65+g[C]*.35-.5)*2)},v=p=>{const d=y();for(let g=0;g<16;g++)for(let M=0;M<16;M++)c(M,g,o(p(M,g,d[g*16+M])));return d},_=(p,d,g,M)=>{for(let C=-g;C<=g;C++)for(let P=-g;P<=g;P++){const F=Math.hypot(P,C);F>g+.3||c(p+P,d+C,o(M+(F>g-.6?-.2:P+C<-g*.5?.14:-.02)))}},b=(p,d,g=.25)=>{for(const M of p)for(let C=0;C<16;C++){const P=C-M;P>=0&&P<16&&c(C,P,o(g,d))}},w=(p,d,g,M,C,P)=>{for(let F=-g;F<=g;F++)for(let N=-g;N<=g;N++){const G=Math.hypot(N,F);G>g+.3||c(p+N,d+F,o(G>g-.5?-.22:N+F<0?.24:.04,1,M,C,P))}},S={},T=(p,d)=>S[p]=d;T(String(Yn),()=>{v((p,d,g)=>g*.07+Math.sin((p+d)*.55+g*5)*.03),m(24,.18);for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),o(-.14))}),T(String(vn),()=>{const p=y();for(let d=0;d<16;d++){const g=Math.floor((d+p[d*16+8]*1.2+16)%16/4),M=[-.05,.03,-.01,.05][g%4];for(let C=0;C<16;C++)c(C,d,o(M+p[d*16+C]*.05+(d%4===0?-.12:0)))}m(26,.08)}),T("sandstone_top",()=>{v((p,d,g)=>g*.06);for(let p=0;p<7;p++){const d=e.int(1,14),g=e.int(1,14);c(d,g,o(-.13)),c(d+1,g,o(-.06))}m(30,.1)}),T(String(Un),()=>{v((p,d,g)=>g*.1),x(11,.06,-.14),x(8,.06,-.2);for(let p=0;p<4;p++)c(e.int(0,15),e.int(0,15),o(.2));m(16,.1)}),T(String(Er),()=>{v((p,d,g)=>g*.08-.06);for(let p=0;p<9;p++)_(e.int(2,13),e.int(2,13),e.int(1,3),f(.18))}),T(String(Kn),()=>{v((p,d,g)=>g*.13+(Math.sin(p*1.4)+Math.cos(d*1.1))*.03),m(44,.2);for(let p=0;p<3;p++){const d=e.int(2,13),g=e.int(2,13);c(d,g,o(.16)),c(d+1,g,o(.08))}}),T(String(fs),()=>{v((p,d,g)=>g*.05+.04),x(10,.03,.06),x(8,.03,.09);for(let p=0;p<30;p++)c(e.int(0,15),e.int(0,15),o(.13))}),T(String(wr),()=>{const p=v((d,g,M)=>M*.04-.05);for(let d=0;d<16;d++){for(let g=1;g<15;g++)Math.sin(g*.5+d*2.6+p[d*16+g]*4)>.7&&c(g,d,o(-.18));d%5===2&&e.next()>.4&&c(e.int(2,13),d,o(.12))}}),T(String(Po),()=>{u("rgba(170,215,232,0.22)"),b([5,8,14],.5,.3),b([11],.32,.22)}),T(String(ps),()=>{v((p,d,g)=>g*.05),x(7,.02,-.1),b([9],.18,.12)}),T(String(Le),()=>{const p=v((d,g,M)=>M*.03);for(let d=0;d<16;d++)c(d,10,o(-.24)),d%2===0&&c(d,9,o(-.08));for(let d=0;d<16;d++)if(d%4===1)for(const g of[1,6,11])c(g,d,o(.22)),c(g+1,d,o(.05)),c(g,d+1,o(-.16)),c(g+1,d+1,o(-.12));for(let d=0;d<10;d++)c(e.int(0,15),e.int(0,15),o(-.02,1,.06,-.01,-.08));p[60]>.3&&c(12,3,o(.35,1,.1,0,0))}),T("hull_top",()=>{v((p,d,g)=>g*.03);for(const p of[4,12])for(let d=0;d<16;d++)c(d,p,o(-.22));for(const p of[2,7,12])for(let d=0;d<16;d++)d%4===2&&c(p,d,o(.2));for(let p=0;p<8;p++)c(e.int(0,15),e.int(0,15),o(.28,1,.05,-.02,-.06))}),T(String(ln),()=>{v((p,d,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,o(-.26)),c(p,15,o(-.26)),c(0,p,o(-.26)),c(15,p,o(-.26));for(let p=2;p<=12;p++)for(let d=3;d<=12;d++)d===3||d===12||p===2||p===12?c(d,p,o(-.2)):d===4&&p>3&&p<11&&c(d,p,o(.08));for(let p=7;p<=9;p++)c(13,p,o(.35)),c(12,p,o(-.28));for(let p=5;p<11;p++)c(p,14,o(-.15,1,.1,0,-.02))}),T(String(Je),()=>{v((p,d,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,o(-.26)),c(p,15,o(-.26)),c(0,p,o(-.26)),c(15,p,o(-.26));for(let p=4;p<=11;p++)for(let d=5;d<=10;d++)c(d,p,o(-.32,1,-.1,-.02,.06));for(const p of[5,8])for(let d=5;d<=10;d++){const g=d-p+4;g>=4&&g<=11&&c(d,g,o(.35,.5))}for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,o(.2))}),T(String(qe),()=>{for(let p=0;p<16;p++)c(0,p,o(-.1,.9)),c(1,p,o(.05,.85)),c(2,p,o(-.15,.7));c(1,7,o(.3,.9)),c(1,8,o(.3,.9))}),T(String(Hn),()=>{u(o(-.28));for(let p=4;p<=11;p++)for(let d=4;d<=11;d++){const g=Math.max(Math.abs(d-7.5),Math.abs(p-7.5));c(d,p,g>3?o(.12):o(.42-g*.06,1,.3,.18,-.02))}for(const[p,d]of[[4,4],[11,4],[4,11],[11,11]])c(p,d,o(.25))}),T(String(Do),()=>{v((p,d,g)=>g*.03+(d%2===0?.02:-.02));for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,o(.22));for(let p=0;p<5;p++){const d=e.int(2,13),g=e.int(2,13);c(d,g,o(-.12,1,.24,.02,-.14)),c(d+1,g,o(-.2,1,.16,0,-.1))}}),T(String(Mn),()=>{v((p,d,g)=>g*.03-.25);for(let p=-3;p<=3;p++){const d=3-Math.abs(p);for(let g=-d;g<=d;g++)Math.hypot(g,p)>d+.3||c(8+g,8+p,o(p===0?.05:0,1,.95-Math.abs(p)*.08,.15,.1))}for(let p=-1;p<=1;p++)for(let d=-1;d<=1;d++)Math.hypot(d,p)<1.6&&c(8+d,8+p,o(.4-Math.hypot(d,p)*.15,1,1,.3,.1));for(let p=0;p<16;p+=3){const d=3-Math.abs(p%6-3);for(let g=-d;g<=d;g++)c(8+g,p,o(.08))}}),T(String(Xe),()=>{const p=v((d,g,M)=>M*.05+(g<5?.02:-.14));for(let d=0;d<16;d++)c(d,0,o(.14)),c(d,1,o(.06)),c(d,4,o(-.26));for(let d=5;d<16;d++)for(const g of[1,2,13,14])c(g,d,o(.06+p[d*16+g]*.02));for(let d=6;d<=10;d++)for(let g=4;g<=11;g++)c(g,d,o(-.04+p[d*16+g]*.04));for(let d=4;d<=11;d++)c(d,6,o(-.28)),c(d,10,o(-.28));c(7,8,"rgba(190,190,190,1)"),c(8,8,"rgba(190,190,190,1)");for(let d=3;d<=12;d++)c(d,13,o(.1)),c(d,14,o(-.3))}),T("bench_top",()=>{v((p,d,g)=>g*.04+Math.sin(d*1.7+g*3)*.03);for(let p=0;p<16;p++)c(p,0,o(-.2)),c(p,15,o(-.2));for(let p=0;p<16;p++)if(p%5===4)for(let d=0;d<16;d++)c(d,p,o(-.14));for(let p=2;p<=11;p++)c(p,4,"rgba(160,166,178,1)");for(let p=2;p<=11;p+=2)c(p,5,"rgba(120,126,140,1)");c(12,4,"rgba(96,66,40,1)"),c(13,4,"rgba(96,66,40,1)"),c(12,5,"rgba(80,54,32,1)");for(let p=4;p<=6;p++)c(p,9,"rgba(120,88,54,1)");for(let p=4;p<=6;p++)c(p,10,"rgba(100,72,44,1)");c(5,11,"rgba(150,156,168,1)"),c(5,12,"rgba(150,156,168,1)"),c(5,13,"rgba(140,146,158,1)");for(let p=0;p<6;p++)c(e.int(0,15),e.int(0,15),o(-.06,1,.02,-.01,-.04))}),T(String(gn),()=>{v((p,d,g)=>g*.04-.14);for(let p=0;p<16;p++)c(p,0,o(.05)),c(p,2,o(-.24));for(let p=3;p<16;p++)for(const d of[1,2,13,14])c(d,p,o(.04));for(let p=3;p<=12;p++)c(p,11,o(.08)),c(p,12,o(-.26))}),T("bench_ext_top",()=>{v((p,d,g)=>g*.04+Math.sin(p*1.6+g*2)*.03);for(let p=0;p<16;p++)c(0,p,o(-.18)),c(15,p,o(-.18));for(let p=0;p<16;p++)for(let d=0;d<16;d++)d%6===3&&e.next()>.5&&c(d,p,o(-.1))}),T(String(rn),()=>{v((p,d,g)=>g*.05-.1);for(let p=0;p<5;p++)_(2+p*3,13,1,-.05);t.strokeStyle="rgba(70,50,32,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,s+13),t.lineTo(n+12,s+9),t.stroke(),t.beginPath(),t.moveTo(n+12,s+13),t.lineTo(n+4,s+9),t.stroke(),t.lineWidth=1;for(let p=2;p<10;p++){const d=Math.max(0,5-Math.abs(p-7)-(p<5?5-p:0));for(let g=-d;g<=d;g++){const M=Math.abs(g)/(d+1);c(8+g,p,o(M*.1,1,.85-M*.4,.35-M*.25,-.45))}}c(8,1,o(.2,1,.7,.15,-.4)),c(7,3,o(.3,1,.9,.4,-.4))}),T("campfire_top",()=>{v((p,d,g)=>-.12+g*.05);for(let p=0;p<16;p++){const d=p/16*Math.PI*2;c(8+Math.round(Math.cos(d)*5.5),8+Math.round(Math.sin(d)*5.5),o(.12)),c(8+Math.round(Math.cos(d)*4),8+Math.round(Math.sin(d)*4),o(-.3,1,.1,-.02,-.06))}for(let p=0;p<5;p++){const d=p/5*Math.PI*2+.5;_(8+Math.round(Math.cos(d)*6),8+Math.round(Math.sin(d)*6),1,0)}for(let p=0;p<3;p++)for(let d=0;d<8;d++){const g=d/8*Math.PI*2+p*.4;c(8+Math.round(Math.cos(g)*p*1.5),8+Math.round(Math.sin(g)*p*1.5),o(.2+(3-p)*.12,1,.5,-.05,-.35))}});for(const p of[qs,Uo,ko,No,Fo,Oo,Xs,Ze])T(String(p),()=>{const d=v((g,M,C)=>C*.04+Math.sin((g+M*.5)*.8+C*4)*.04);for(const g of[2,6,10,14])for(let M=0;M<16;M++)d[g*16+M]>-.2&&c(M,g+(M%4<2?0:1),o(.16,.75));for(let g=0;g<5;g++)c(e.int(0,15),e.int(0,15),o(.3,.5))});T("water_side",()=>{v((p,d,g)=>g*.04+d*.004);for(let p=0;p<16;p++)e.next()>.3&&c(p,0,o(.22,.8)),p%3===0&&c(p,1+p%2,o(.1,.5));for(let p=2;p<16;p++)e.next()>.75&&c(e.int(0,15),p,o(.12,.4))}),T(String(Ws),()=>{v((p,d,g)=>g*.08-.02);for(let p=0;p<16;p++)for(let d=0;d<16;d++)(p%5===4||(d+Math.floor(p/5)%2*4)%8===3)&&c(d,p,o(-.14+f(.03)));for(let p=0;p<3;p++)x(e.int(8,12),.05,-.1);for(let p=0;p<10;p++)c(e.int(0,15),e.int(0,15),o(.12))}),T(String(Hi),()=>{const p=v((d,g,M)=>M*.06-.35);for(let d=0;d<16;d++)p[d*16+1]>.2&&c(1,d,o(-.1,1,.04,0,.08));for(let d=0;d<=15;d+=5)c(d,0,o(.1,1,.1,0,.15)),c(d,15,o(.1,1,.1,0,.15));for(let d=3;d<=12;d++)for(let g=3;g<=12;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-7.5)),C=Math.max(Math.abs(d-7.5),Math.abs(g-7.5),Math.abs(d+g-15)/2);M>=4.2||(C>=3.4?c(d,g,o(.15,1,.55,.15,.85)):c(d,g,o(.32+(3-M)*.12,1,.75,.3,1)))}for(const[d,g]of[[5,5],[10,10],[10,5]])(d+g)%2===0&&c(d,g,o(.45,1,.8,.35,1))}),T(String(Ri),()=>{const p=v((d,g,M)=>M*.03+(g%2===0?.015:-.015)-.08);for(const d of[1,3,5]){for(let g=2;g<=13;g++)c(g,d,o(-.28));for(let g=2;g<=13;g+=3)c(g,d-1,o(.12))}for(let d=4;d<=11;d++)for(let g=7;g<=14;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-10.5));M>=3.2?c(d,g,o(.1+p[g*16+d]*.05)):c(d,g,o(.24+(3-M)*.1,1,-.05,.2,.22))}c(5,12,o(.15,1,-.1,.12,.12)),c(10,9,o(.15,1,-.1,.12,.12));for(let d=7;d<=14;d++)d%2===1&&c(14,d,o(-.2))}),T(String(cn),()=>{const p=v((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,o(-.16+p[g*16+d]*.03));for(let d=0;d<16;d++)if(d%5!==2&&d%5!==3)for(let g=0;g<16;g+=3)e.next()>.4&&c(d,g,o(.5,1,.05,.02,-.05));for(const[d,g]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])c(d,g,o(.2)),c(d+1,g,o(-.2)),c(d,g+1,o(-.2));c(13,1,"rgba(214,74,130,1)"),c(1,6,"rgba(198,58,114,1)"),c(5,11,"rgba(214,74,130,1)")}),T("cactus_top",()=>{const p=v((d,g,M)=>M*.06);for(let d=2;d<=6;d+=2)for(let g=0;g<20;g++){const M=g/20*Math.PI*2;c(8+Math.round(Math.cos(M)*d),8+Math.round(Math.sin(M)*d),o(d===6?-.14:-.06+p[g]*.05))}for(let d=0;d<8;d++){const g=d/8*Math.PI*2;c(8+Math.round(Math.cos(g)*1.5),8+Math.round(Math.sin(g)*1.5),o(.45,1,.05,.03,-.04))}c(8,8,o(.15))}),T(String(hi),()=>{const p=v((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,o(-.16+p[g*16+d]*.03));for(const[d,g]of[[4,4],[9,6],[6,10],[11,12],[3,14]])c(d,g,o(.2)),c(d+1,g,o(-.2)),c(d,g+1,o(-.2));for(let d=0;d<=3;d++)for(let g=5;g<=10;g++)(d===3||g===5||g===10||e.next()>.3)&&c(g,d,"rgba(214,74,130,1)");for(let d=0;d<9;d++)c(5+d%4*2,Math.floor(d/4),"rgba(238,150,190,1)");c(6,0,"rgba(238,150,190,1)"),c(9,1,"rgba(248,190,214,1)")}),T(String(ke),()=>{v((p,d,g)=>g*.05-.02+Math.sin(p*1.3+g*3)*.02);for(let p=0;p<16;p++)c(p,0,o(-.3)),c(p,7,o(-.24)),c(p,15,o(-.3));for(let p=0;p<16;p++)for(let d=0;d<16;d++)d%5===2&&p>7&&e.next()>.4&&c(d,p,o(-.12));for(let p=0;p<16;p++)c(p,4,"rgba(148,154,166,1)"),c(p,5,"rgba(120,126,138,1)");for(let p=2;p<5;p++)for(const d of[7,8])c(d,p,"rgba(200,205,215,1)");c(7,6,"rgba(40,42,48,1)"),c(8,6,"rgba(40,42,48,1)");for(let p=0;p<4;p++){const[d,g]=[[0,0],[15,0],[0,15],[15,15]][p];c(d,g,o(.2)),c(d+(d?-1:1),g,o(.1)),c(d,g+(g?-1:1),o(.1))}}),T("chest_top",()=>{v((p,d,g)=>g*.05+Math.sin(d*1.4+g*2)*.02);for(let p=0;p<16;p++)c(p,0,o(-.26)),c(p,15,o(-.26));for(let p=0;p<16;p++)p!==7&&p!==8&&(c(p,7,"rgba(148,154,166,1)"),c(p,8,"rgba(120,126,138,1)"));for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,"rgba(200,205,215,1)")}),T(String(kn),()=>{const p=v((d,g,M)=>M*.1-.06);for(const d of[2,6,10,14])for(let g=0;g<16;g++)c(g,d,o(-.16+f(.03)));for(const d of[1,5,9,13])for(let g=0;g<16;g++)p[d*16+g]>-.1&&e.next()>.55&&c(g,d,o(.1));for(let d=0;d<8;d++)c(e.int(0,15),e.int(0,15),o(.05,1,0,-.02,.04))}),T("farmland_side",()=>{v((p,d,g)=>g*.09-.04);for(let p=0;p<16;p++)c(p,0,o(.14));for(let p=0;p<16;p++)for(let d=1;d<16;d++)e.next()>.88&&c(p,d,o(.14))}),T(String(Gn),()=>{u("rgba(0,0,0,0)");for(const[p,d]of[[7,13],[8,13],[7,12],[8,12],[9,13],[6,12]])c(p,d,o(.1));c(6,11,o(.16)),c(9,10,o(.12)),c(7,11,o(.02));for(let p=0;p<4;p++)c(e.int(5,10),e.int(12,15),o(-.05))}),T(String(Pn),()=>{v((p,d,g)=>g*.04-.02);for(let p=4;p<=13;p++)for(let d=2;d<=13;d++){const g=Math.hypot((d-7.5)*1.1,(p-8.5)*1.25);if(g>5.8)continue;const M=(d+(p/2|0))%4===0;c(d,p,o(M?-.18:.04)),g>5.2&&c(d,p,o(-.24)),d<5&&p<7&&!M&&c(d,p,o(.2))}c(8,3,o(-.1)),c(7,3,o(-.16)),c(8,4,o(-.08)),c(2,13,o(.1)),c(13,12,o(.06)),c(4,14,o(.08))}),T(String(Wn),()=>{u("rgba(0,0,0,0)");for(const p of[4,8,12]){for(let d=11;d<=15;d++)c(p,d,o(.08)),d<14&&c(p,d,o(.14));c(p-1,12,o(.06))}}),T(String(pn),()=>{u("rgba(0,0,0,0)");for(const p of[3,7,11,14]){const d=p%2?1:-1;for(let g=2;g<=15;g++)c(p+(g<6?d:0),g,o(g<7?.22:-.02));c(p-d,4,o(.18)),c(p-d,9,o(.06)),c(p+d,2,o(.3))}}),T(String(Tr),()=>{v((p,d,g)=>g*.03-.12);for(let p=0;p<16;p++)c(p,0,o(-.26)),c(p,15,o(-.26)),c(p,7,"rgba(150,156,168,1)"),c(p,8,"rgba(110,116,128,1)");for(const[p,d]of[[2,3],[13,3],[2,12],[13,12]])c(p,d,"rgba(200,205,215,1)"),c(p+1,d,"rgba(150,156,168,1)");for(let p=2;p<=5;p++)c(0,p,o(.14)),c(15,p,o(.14))}),T(String(Sn),()=>{const p=v((d,g,M)=>M*.03+(d%4===0?-.04:.015));for(let d=0;d<16;d++)c(d,0,o(-.22)),c(d,15,o(-.22)),c(0,d,o(-.16)),c(15,d,o(-.16));for(const[d,g]of[[3,3],[12,3],[3,12],[12,12]])c(d,g,o(.24)),c(d+1,g,o(.08)),c(d,g+1,o(-.14));for(let d=0;d<6;d++)c(e.int(1,14),e.int(1,14),o(-.02,1,.05,-.01,-.06));if(p[8]>.4)for(let d=1;d<4;d++)c(12,d,o(.06,1,.2,.02,-.1))}),T(String(je),()=>{v((p,d,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,o(-.24)),c(p,15,o(-.24)),c(0,p,o(-.24)),c(15,p,o(-.24));for(let p=3;p<=12;p++)for(let d=4;d<=11;d++)(d===4||d===11||p===3||p===12)&&c(d,p,o(.1));for(let p=7;p<=9;p++)c(12,p,o(.26)),c(11,p,o(-.22))}),T(String($e),()=>{v((p,d,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,o(-.24)),c(p,15,o(-.24)),c(0,p,o(-.24)),c(15,p,o(-.24));for(let p=5;p<=10;p++)for(let d=6;d<=9;d++)c(d,p,o(.1,1,-.05,.1,.15));for(let p=6;p<=9;p++){const d=p-1;d>=5&&d<=10&&c(p,d,o(.3,.6))}for(let p=5;p<=10;p++)for(let d=6;d<=9;d++)(d===6||d===9||p===5||p===10)&&c(d,p,o(.1,1,-.05,.1,.15))}),T(String(on),()=>{for(let p=0;p<16;p++)c(0,p,o(-.12,.9)),c(1,p,o(.03,.85)),c(2,p,o(-.17,.7));c(1,7,o(.26,.9)),c(1,8,o(.26,.9))}),T(String(an),()=>{v((p,d,g)=>g*.04+.02);for(let p=0;p<16;p++)for(let d=0;d<16;d++)(d+p)%5===0&&c(d,p,o(-.1));for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=0;p<16;p++)c(p,11,"rgba(90,40,36,1)"),c(p,12,"rgba(150,80,70,1)"),c(p,13,"rgba(120,60,52,1)");for(let p=1;p<11;p++)c(1,p,o(.12)),c(14,p,o(-.08))}),T("bed_side",()=>{v((p,d,g)=>g*.04-(d>11?-.1:.04));for(let p=0;p<16;p++)c(p,0,o(.14)),c(p,10,o(-.22));for(let p=1;p<10;p++)for(let d=0;d<16;d++)(d+p)%6===1&&c(d,p,o(-.06));for(let p=11;p<16;p++)for(let d=0;d<16;d++)c(d,p,"rgba(70,44,26,1)");for(let p=2;p<16;p+=5)c(p,12,"rgba(96,62,38,1)"),c(p,13,"rgba(52,32,18,1)")}),T(String(wn),()=>{v((p,d,g)=>g*.04+.02);for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=3;p<=11;p++)for(let d=2;d<=13;d++)c(d,p,d===2||d===13||p===3||p===11?"rgba(200,192,176,1)":"rgba(226,220,206,1)"),p===4&&d>3&&d<11&&c(d,p,"rgba(240,236,226,1)");c(4,6,"rgba(208,200,184,1)"),c(10,9,"rgba(208,200,184,1)");for(let p=0;p<16;p++)c(p,12,"rgba(90,40,36,1)")}),T(String(si),()=>{const p=v((d,g,M)=>M*.12-(g>4?.16:.02));for(let d=0;d<16;d++){const g=2+Math.round((p[d]+1)*1.5);for(let M=0;M<g;M++)c(d,M,o(f(.1)+(M===0?.1:0)));e.next()>.6&&c(d,g+1,o(-.2))}for(let d=0;d<16;d+=3){const g=7+d%5;c(d,g,o(.2))}}),T("grass_top",()=>{v((p,d,g)=>g*.08-.02);for(let p=0;p<40;p++){const d=e.int(0,15),g=e.int(0,14),M=e.int(1,3);for(let C=0;C<M;C++)c(d,g+C,o(C===0?.14:-.02+f(.08)))}for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),o(-.3))}),T("grass_side",()=>{const p=v((d,g,M)=>M*.12+(g<3?.06:-.1));for(let d=0;d<16;d++){const g=1+Math.round((p[d+16]+1)*1.5);for(let M=0;M<g;M++)c(d,M,o(.08+f(.08)))}for(let d=0;d<16;d++)for(let g=3;g<16;g++)e.next()>.9&&c(d,g,o(.16,1,-.04,-.02,-.04))}),T(String(Xn),()=>{const p=v((d,g,M)=>M*.05);for(let d=0;d<16;d++){const g=p[d]*2;for(let M=0;M<16;M++){const C=Math.sin(d*1.9+g+Math.sin(M*.35)*1.5);c(d,M,o(C>.75?-.26:C>.2?-.1:.06+f(.04)))}}for(let d=1;d<=2;d++)for(let g=0;g<10;g++){const M=g/10*Math.PI*2;c(9+Math.round(Math.cos(M)*d*1.4),7+Math.round(Math.sin(M)*d),o(d===2?-.3:-.2))}c(9,7,o(-.34)),c(10,7,o(-.28))}),T("wood_top",()=>{v((p,d,g)=>g*.04);for(let p=0;p<44;p++){const d=p/44*Math.PI*2;for(let g=1;g<7;g+=2){const M=g+(g%4===1?.6:0);c(8+Math.round(Math.cos(d)*M),8+Math.round(Math.sin(d)*M),o(g>4?-.12:.05))}}c(8,8,o(-.3)),c(8,7,o(-.2));for(let p=0;p<16;p++)c(p,0,o(-.3)),c(p,15,o(-.3)),c(0,p,o(-.3)),c(15,p,o(-.3))}),T(String(mi),()=>{v((p,d,g)=>g*.14);for(let p=0;p<26;p++){const d=e.int(0,14),g=e.int(0,14);c(d,g,o(.16)),c(d+1,g,o(.06)),c(d,g+1,o(-.1)),c(d+1,g+1,o(-.2))}for(let p=0;p<10;p++){const d=e.int(1,14),g=e.int(1,14);c(d,g,o(-.4)),c(d+1,g,o(-.25))}}),T(String(Vn),()=>{u("rgba(0,0,0,0)");for(let p=6;p<16;p++)c(8,p,o(-.28));c(7,15,o(-.2)),c(9,15,o(-.2)),c(7,5,o(.1)),c(8,5,o(.15)),c(9,5,o(.1)),c(6,4,o(.05)),c(7,4,o(.12)),c(8,4,o(.18)),c(9,4,o(.12)),c(10,4,o(.05)),c(7,3,o(.08)),c(8,3,o(.14)),c(9,3,o(.08)),c(8,2,o(.1)),c(6,5,o(.02)),c(10,5,o(.02))}),T(String(Ar),()=>{v((p,d,g)=>g*.1-.02),x(11,.06,-.14),x(7,.06,-.18);for(let p=0;p<5;p++)w(e.int(3,12),e.int(3,12),e.int(1,2),-.06,-.05,.04);m(12,.1)}),T(String(Rr),()=>{v((p,d,g)=>g*.1-.04),x(9,.06,-.14);for(let p=0;p<3;p++)w(e.int(3,12),e.int(3,12),e.int(1,2),.26,.04,-.18);for(let p=0;p<2;p++)w(e.int(4,11),e.int(4,11),1,-.12,.16,0);m(10,.08)}),T(String(Cr),()=>{v((p,d,g)=>g*.07-.24),x(10,.04,-.08);for(let p=0;p<4;p++){const d=e.int(4,11),g=e.int(4,11),M=e.int(2,3);for(let C=-M;C<=M;C++){const P=M-Math.abs(C);for(let F=-P;F<=P;F++){const N=Math.abs(F)+Math.abs(C);c(d+F,g+C,o(N===M?-.16:N===0?.4:.16,1,-.16,-.06,.3))}}}}),T(String($s),()=>{const p=y();for(let d=0;d<16;d++){const g=Math.floor((d+p[d*16+8]*2+16)%16/4),M=[-.02,.05,-.06,.02][g%4];for(let C=0;C<16;C++)c(C,d,o(M+p[d*16+C]*.03+(d%4===0?-.06:0)))}for(let d=0;d<3;d++)x(e.int(6,10),.02,.06);m(10,.05)});const R=p=>{for(let d=0;d<16;d++)c(d,0,o(-.22)),c(d,15,o(-.22));for(const d of[0,8])for(let g=1;g<15;g++)p[g*16+d]>-.2&&c(d,g,o(-.16)),d&&(g===3||g===7||g===11)&&c(d,g,o(.2));for(let d=0;d<4;d++){const g=e.int(1,14),M=e.int(1,5),C=e.int(4,8);for(let P=M;P<Math.min(15,M+C);P++)e.next()>.25&&c(g,P,o(-.06+f(.04),1,.3,.05,-.22))}for(let d=0;d<8;d++)c(e.int(1,14),e.int(1,14),o(-.05))};T(String(Gi),()=>{const p=v((d,g,M)=>M*.04-.1+(d%8===0?-.05:0));R(p);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),o(.16)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),o(-.26))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++)Math.hypot(g,d)>4.2||c(8+g,8+d,o(-.34+p[(8+d)*16+8+g]*.06))}),T(String(gr),()=>{const p=v((d,g,M)=>M*.04-.08+(d%8===0?-.05:0));R(p);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),o(.2)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),o(-.1,1,.35,.05,-.3))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++){const M=Math.hypot(g,d);M>4.2||c(8+g,8+d,o(.35-M*.08+p[(8+d)*16+8+g]*.08,1,.55-M*.05,.12-M*.04,-.45))}for(const[d,g]of[[3,2],[12,4],[5,13],[11,12]])c(d,g,o(.4,1,.5,.1,-.35))});const L=(p,d,g)=>{S[p]&&(n=d%bn*Me,s=(d/bn|0)*Me,[i,a,l]=g,S[p]())};for(const[p,d]of _r.entries())L(String(d),p,ii[d].color);for(const[p,d]of bu)L(p,Oe[p],ii[d].color);return Ca=r,r}function Y1(){const r=new au(Eu());return r.flipY=!1,r.magFilter=r.minFilter=Nn,r.generateMipmaps=!1,r.colorSpace=En,r}const Qt=[];_r.forEach((r,t)=>Qt[r]=t);Qt[pi]=Qt[Le];Qt[Ci]=Qt[Le];const nn=bn*Me,wu=r=>{const t=Qt[r]??0;return[t%bn*Me,(t/bn|0)*Me]},ks=[],Qe=(r,t,e,n)=>{ks[r*6]=t,ks[r*6+1]=e;for(let s=2;s<6;s++)ks[r*6+s]=n};for(const r of _r)Qe(r,Qt[r],Qt[r],Qt[r]);Qe(si,Oe.grass_top,Qt[Kn],Oe.grass_side);Qe(Xn,Oe.wood_top,Oe.wood_top,Qt[Xn]);Qe(kn,Qt[kn],Qt[Kn],Oe.farmland_side);Qe(vn,Oe.sandstone_top,Qt[vn],Qt[vn]);Qe(Le,Oe.hull_top,Qt[Le],Qt[Le]);Qe(pi,Oe.hull_top,Qt[Le],Qt[Le]);Qe(Ci,Oe.hull_top,Qt[Le],Qt[Le]);Qe(an,Qt[an],Qt[an],Oe.bed_side);Qe(wn,Qt[wn],Qt[wn],Oe.bed_side);Qe(ke,Oe.chest_top,Qt[ke],Qt[ke]);Qe(Xe,Oe.bench_top,Qt[Xe],Qt[Xe]);Qe(gn,Oe.bench_ext_top,Qt[gn],Qt[gn]);Qe(rn,Oe.campfire_top,Qt[rn],Qt[rn]);Qe(cn,Oe.cactus_top,Qt[cn],Qt[cn]);Qe(hi,Oe.cactus_top,Qt[cn],Qt[hi]);for(const r of[Ze,qs,Uo,ko,No,Fo,Oo,Xs])Qe(r,Qt[r],Qt[r],Oe.water_side);const Ei=16,Eh=`
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
`,wh=`
uniform sampler2D map;
uniform vec3 uAmbient;      // day/moon ambient, lerped by the caller
uniform float uFloor;       // ambient floor for baked-light 0 (interiors)
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uNumLights;
uniform vec3 uLightPos[${Ei}];
uniform vec3 uLightCol[${Ei}];
uniform float uLightRange[${Ei}];
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
  for (int i = 0; i < ${Ei}; i++) {
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
`,er=new U,Th=new U,K1=new qt(1,.97,.9),j1=new qt(.2,.27,.45);class Z1{scene=new Sf;camera;three;chunkMeshes=new Map;group=new Ie;entityGroup=new Ie;sun;hemi;stars;sunDisc;moonDisc;highlight;renderDistance=7;atlas=Y1();matOpaque=new Ye({map:this.atlas,vertexColors:!0,side:We});matEmissive=new ns({map:this.atlas,vertexColors:!0,side:We});matTrans=new Ye({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:We});lightingMode="sky";skyLight=new V1;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new qt(1,1,1)},uFloor:{value:.16},uFogColor:{value:new qt(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:Ei},()=>new U)},uLightCol:{value:Array.from({length:Ei},()=>new U)},uLightRange:{value:new Float32Array(Ei)}};matSky=new fi({uniforms:this.skyU,vertexShader:Eh,fragmentShader:wh,side:We,defines:{OPAQUE_PASS:"1"}});matSkyT=new fi({uniforms:this.skyU,vertexShader:Eh,fragmentShader:wh,side:We,transparent:!0,depthWrite:!1});torch;playerLight;dynLights=[];constructor(t){this.three=new x1({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new Dn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new ya(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.playerLight=new ya(16766826,1.4,14,1.4),this.playerLight.visible=!1,this.scene.add(this.playerLight),this.sun=new kf(16777215,1),this.hemi=new Pf(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new Gl(14207392,40,this.renderDistance*J);const n=new hn,s=[];for(let a=0;a<500;a++){const l=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1);s.push(Math.sin(h)*Math.cos(l)*400,Math.abs(Math.cos(h))*400,Math.sin(h)*Math.sin(l)*400)}n.setAttribute("position",new me(s,3)),this.stars=new Rf(n,new ou({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new Ke(new wo(24,24),new ns({color:16771504,fog:!1,side:We,toneMapped:!1})),this.moonDisc=new Ke(new wo(15,24),new ns({color:14213877,fog:!1,side:We,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const i=new Wi(1.002,1.002,1.002);this.highlight=new Af(new Cf(i),new ru({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,s){if(this.dynLights.length>=12||this.dynLights.some(a=>a.x===t&&a.y===e&&a.z===n))return;const i=new ya(s==="lamp"?16773296:s==="fire"?16745280:9427199,s==="lamp"?.9:s==="fire"?1.1:.8,s==="lamp"?12:s==="fire"?9:10,1.3);i.position.set(t+.5,e+.6,n+.5),this.scene.add(i),this.dynLights.push({x:t,y:e,z:n,light:i,flame:s==="fire"})}removePointLight(t,e,n){const s=this.dynLights.findIndex(i=>i.x===t&&i.y===e&&i.z===n);s<0||(this.scene.remove(this.dynLights[s].light),this.dynLights.splice(s,1))}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),s=zi.clamp(n*2.2,0,1),i=zi.clamp(1-Math.abs(n)*5,0,1),a=new qt(660006),l=new qt(13201213),h=new qt(12570592),o=a.clone().lerp(h,s);i>0&&o.lerp(l,i*.7);const c=new qt(16767392).lerp(new qt(16743231),i);return{sky:o,sunColor:c,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:s}}updateSky(t,e){const n=t%Ue/Ue,s=this.keyframe(n);this.scene.background=s.sky,this.scene.fog.color.copy(s.sky),this.scene.fog.far=this.renderDistance*J*.98;const i=(n-.25)*Math.PI*2;er.set(Math.cos(i),s.sunElev,.4).normalize(),s.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,er.negate()):(this.sun.color.copy(s.sunColor),this.sun.intensity=s.sunI),this.sun.position.set(e.x+er.x*120,e.y+er.y*120,e.z+er.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+s.sunI*.35,this.stars.material.opacity=Math.max(0,1-s.sunI*3),this.stars.position.set(e.x,e.y,e.z);const a=430;this.sunDisc.position.set(e.x+Math.cos(i)*a,e.y+Math.sin(i)*a,e.z+a*.4),this.moonDisc.position.set(e.x-Math.cos(i)*a,e.y-Math.sin(i)*a,e.z-a*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(i)>-.12,this.moonDisc.visible=Math.sin(i)<.12,this.torch.intensity=.12+(1-Math.min(1,s.sunI))*.85;for(const o of this.dynLights)o.flame&&(o.light.intensity=.9+_u(t*5.3+o.x*3.1+o.z,7)*.45);const l=this.skyU;l.uAmbient.value.copy(j1).lerp(K1,s.dayT);const h=this.scene.fog;return l.uFogColor.value.copy(h.color),l.uFogNear.value=h.near,l.uFogFar.value=h.far,this.syncSkyLights(),s}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(Th),t.uLightPos.value[e].copy(Th);const n=this.torch.color;if(t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++,this.playerLight.visible&&e<Ei){t.uLightPos.value[e].copy(this.playerLight.position);const s=this.playerLight.color;t.uLightCol.value[e].set(s.r,s.g,s.b).multiplyScalar(this.playerLight.intensity),t.uLightRange.value[e]=this.playerLight.distance,e++}for(const s of this.dynLights){if(e>=Ei)break;t.uLightPos.value[e].copy(s.light.position);const i=s.light.color;t.uLightCol.value[e].set(i.r,i.g,i.b).multiplyScalar(s.light.intensity),t.uLightRange.value[e]=s.light.distance,e++}t.uNumLights.value=e}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}setPlayerLight(t){if(!t){this.playerLight.visible=!1;return}this.playerLight.visible=!0,this.playerLight.position.set(t.x,t.y,t.z)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let s=-this.renderDistance;s<=this.renderDistance;s++)for(let i=-this.renderDistance;i<=this.renderDistance;i++){const a=ei(e+s,n+i);this.chunkMeshes.has(a)||t.markDirty(e+s,n+i)}}buildChunk(t,e){const[n,s]=e.split(",").map(Number),i=t.chunk(n,s),a=[],l=[],h=[],o=[],c=[],u=[],f=[],m=[],x=[],y=[],v=[],_=[],b=[],w=[],S=this.lightingMode==="sky"?this.skyLight.bake(t,n,s,(g,M)=>{const C=ei(g,M);!t.dirty.has(C)&&!this.lightRecheck.has(C)&&this.lightRecheck.add(C)}):null,T=(g,M,C)=>S&&M>=0&&M<ne?S[ls(g,C,M)]/vo:0;for(let g=0;g<J;g++)for(let M=0;M<J;M++)for(let C=0;C<ne;C++){const P=i[(g*J+M)*ne+C];if(P===Lt)continue;if(W1.has(P)){let wt=0;if(S)for(const[Dt,Pt]of[[1,0],[-1,0],[0,1],[0,-1]])wt=Math.max(wt,S[ls(g+Dt,M+Pt,C)]);this.emitDoor(a,l,h,o,c,wt/vo,t,g,C,M,n*J,s*J,P);continue}if(q1.has(P)){const wt=Qt[P],Dt=wt%bn*Me,Pt=(wt/bn|0)*Me,Wt=S?S[ls(g,M,C)]/vo:0,X=(j,ct,Ct,mt)=>{const zt=y.length/3;y.push(j,C,ct,Ct,C,mt,Ct,C+1,mt,j,C+1,ct);for(let we=0;we<4;we++)v.push(.92,.92,.92),w.push(Wt);b.push((Dt+.5)/nn,(Pt+15.5)/nn,(Dt+15.5)/nn,(Pt+15.5)/nn,(Dt+15.5)/nn,(Pt+.5)/nn,(Dt+.5)/nn,(Pt+.5)/nn),_.push(zt,zt+1,zt+2,zt,zt+2,zt+3)};X(g,M,g+1,M+1),X(g+1,M,g,M+1);continue}if(P===pi||P===Ci){this.emitShape($1[P],a,l,h,o,c,P,t,g,C,M,n*J,s*J,T);continue}if(P>=qs&&P<=Xs){const wt=(33-P)/8;for(let Dt=0;Dt<ao.length;Dt++){const Pt=ao[Dt],Wt=g+Pt.dir[0],X=C+Pt.dir[1],j=M+Pt.dir[2],ct=t.get(n*J+Wt,X,s*J+j);let Ct=0;if(Pt.dir[1]===0&&$n(ct)){if(Ct=Ni(ct)/8,Ct>=wt)continue}else{if($n(ct))continue;if(!Ra(t,n*J+Wt,X,s*J+j,P))continue}const mt=ks[P*6+Dt],zt=mt%bn*Me,we=(mt/bn|0)*Me,D=y.length/3,ge=T(Wt,X,j);for(const Ot of Pt.corners)y.push(g+Ot[0],Ot[1]?C+wt:C+Ct,M+Ot[2]),v.push(Pt.shade,Pt.shade,Pt.shade),w.push(ge),b.push((zt+.5+Ot[Pt.uv[0]]*(Me-1))/nn,(we+.5+Ot[Pt.uv[1]]*(Me-1))/nn);_.push(D,D+1,D+2,D,D+2,D+3)}continue}const F=ii[P],N=F.emissive,G=F.transparent,K=G?y:N?u:a,V=G?v:N?f:l,Q=G?_:N?m:h,et=G?b:N?x:o,ft=G?w:N?null:c;for(let wt=0;wt<ao.length;wt++){const Dt=ao[wt],Pt=g+Dt.dir[0],Wt=C+Dt.dir[1],X=M+Dt.dir[2];if(!Ra(t,n*J+Pt,Wt,s*J+X,P))continue;const j=ks[P*6+wt],ct=j%bn*Me,Ct=(j/bn|0)*Me,mt=K.length/3,zt=N?1:Dt.shade,we=ft?T(Pt,Wt,X):0;for(const D of Dt.corners)K.push(g+D[0],C+D[1],M+D[2]),V.push(zt,zt,zt),ft&&ft.push(we),et.push((ct+.5+D[Dt.uv[0]]*(Me-1))/nn,(Ct+.5+D[Dt.uv[1]]*(Me-1))/nn);Q.push(mt,mt+1,mt+2,mt,mt+2,mt+3)}}const R=this.chunkMeshes.get(e);if(R)for(const g of R)this.group.remove(g),g.geometry.dispose();const L=[],p=this.lightingMode==="sky",d=(g,M,C,P,F,N)=>{if(g.length===0)return;const G=new hn;G.setAttribute("position",new me(g,3)),G.setAttribute("color",new me(M,3)),G.setAttribute("uv",new me(P,2)),F&&F.length*3===g.length&&G.setAttribute("light",new me(F,1)),G.setIndex(C),G.computeVertexNormals();const K=new Ke(G,N);K.position.set(n*J,0,s*J),!p&&N!==this.matEmissive&&(K.castShadow=N!==this.matTrans,K.receiveShadow=!0),this.group.add(K),L.push(K)};d(a,l,h,o,S?c:null,p?this.matSky:this.matOpaque),d(u,f,m,x,null,this.matEmissive),d(y,v,_,b,S?w:null,p?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,L)}emitDoor(t,e,n,s,i,a,l,h,o,c,u,f,m){const x=u+h,y=f+c,v=m===je||m===$e||m===on,_=m===Je||m===$e||m===qe&&l.get(x,o-1,y)===qe||m===on&&l.get(x,o-1,y)===on,b=wu(_?v?$e:Je:v?je:ln),w=m===qe||m===on,T=!(sn(l.get(x-1,o,y))||sn(l.get(x+1,o,y)))&&(sn(l.get(x,o,y-1))||sn(l.get(x,o,y+1))),R=T?!sn(l.get(x-1,o,y)):!sn(l.get(x,o,y-1)),L=T?!sn(l.get(x+1,o,y)):!sn(l.get(x,o,y+1)),p=x+y&1;let d,g;p&&L?(d=1,g=1):!p&&R?(d=0,g=-1):L?(d=1,g=1):(d=0,g=-1);const M=l.doorSwing.get(x+","+y);M&&(g=M);const C=.04,P=.96,F=d?.84:.02,N=d?.98:.16,G=C,K=d?.98:.02,V=(ft,wt,Dt)=>{const Pt=t.length/3;for(let Wt=0;Wt<4;Wt++){let[X,j,ct]=ft[Wt];if(w){const Ct=X-G,mt=ct-K;X=G-g*mt,ct=K+g*Ct}t.push(T?h+ct:h+X,o+j,T?c+X:c+ct),e.push(Dt,Dt,Dt),i.push(a),s.push((b[0]+.5+wt[Wt][0]*(Me-1))/nn,(b[1]+.5+wt[Wt][1]*(Me-1))/nn)}n.push(Pt,Pt+1,Pt+2,Pt,Pt+2,Pt+3)},Q=ft=>(ft-C)/(P-C),et=ft=>(ft-F)/(N-F);V([[C,0,N],[P,0,N],[P,1,N],[C,1,N]],[[Q(C),0],[Q(P),0],[Q(P),1],[Q(C),1]],.85),V([[C,0,F],[P,0,F],[P,1,F],[C,1,F]],[[Q(P),0],[Q(C),0],[Q(C),1],[Q(P),1]],.7),V([[P,0,F],[P,0,N],[P,1,N],[P,1,F]],[[et(F),0],[et(N),0],[et(N),1],[et(F),1]],.6),V([[C,0,F],[C,0,N],[C,1,N],[C,1,F]],[[et(N),0],[et(F),0],[et(F),1],[et(N),1]],.6),V([[C,1,F],[P,1,F],[P,1,N],[C,1,N]],[[Q(C),et(F)],[Q(P),et(F)],[Q(P),et(N)],[Q(C),et(N)]],1),V([[C,0,F],[P,0,F],[P,0,N],[C,0,N]],[[Q(C),et(N)],[Q(P),et(N)],[Q(P),et(F)],[Q(C),et(F)]],.45)}emitShape(t,e,n,s,i,a,l,h,o,c,u,f,m,x){for(const y of t){if((y.dir[0]?1:0)+(y.dir[1]?1:0)+(y.dir[2]?1:0)===1&&!Ra(h,f+o+y.dir[0],c+y.dir[1],m+u+y.dir[2],l))continue;const _=ks[l*6+y.kind],b=_%bn*Me,w=(_/bn|0)*Me;let S=0;y.dir[0]&&(S=Math.max(S,x(o+y.dir[0],c,u))),y.dir[1]&&(S=Math.max(S,x(o,c+y.dir[1],u))),y.dir[2]&&(S=Math.max(S,x(o,c,u+y.dir[2])));const T=e.length/3;for(const R of y.pts){e.push(o+R[0],c+R[1],u+R[2]),n.push(y.sh,y.sh,y.sh),a.push(S);const[L,p]=y.uv(R);i.push((b+.5+L*(Me-1))/nn,(w+.5+p*(Me-1))/nn)}for(let R=1;R+1<y.pts.length;R++)s.push(T,T+R,T+R+1)}}addEntityMesh(t,e,n,s=.35){const i=new Ke(new Wi(s,s,s),new Ye({color:n}));return i.position.set(...e),i.userData.eid=t,this.entityGroup.add(i),i}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(s=>s.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,s,i=14){const a=this.nextEid++,l=new Ke(new Wl(.14,.28,i,6,1,!0),new ns({color:s,transparent:!0,opacity:.4,depthWrite:!1,side:We,fog:!1}));return l.position.set(t,e+i/2,n),l.userData.eid=a,this.entityGroup.add(l),a}addGroundRing(t,e,n,s,i=1.1){const a=this.nextEid++,l=new Ke(new ql(i*.55,i,24),new ns({color:s,transparent:!0,opacity:.7,side:We,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,e+.06,n),l.userData.eid=a,this.entityGroup.add(l),a}render(){this.three.render(this.scene,this.camera)}}const gt=r=>r,J1=(r,t)=>`${r.charAt(0).toUpperCase()+r.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,yn=(r,t,e,n)=>gt({id:`${e}_${r}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${r}`,desc:J1(r,t),w:1,h:2,mass:1.2+t*.8,tool:{type:r,tier:t},color:n}),Q1=[gt({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Yn,color:"#d4b880"}),gt({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:vn,color:"#c2a670"}),gt({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:Un,color:"#736d69"}),gt({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Er,color:"#8d8680"}),gt({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:Kn,color:"#6b5238"}),gt({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:fs,color:"#d9dbd6"}),gt({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:wr,color:"#61492f"}),gt({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:Po,color:"#a6cfe6"}),gt({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:ps,color:"#8cc0a0"}),gt({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:Le,color:"#858a99"}),gt({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:ln,color:"#999fa8"}),gt({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:Hn,color:"#fff0a0"}),gt({id:"metal",name:"Metal Rod",desc:"Salvaged from the wreck. The backbone of every tool.",w:1,h:1,mass:1,block:Do,color:"#9aa0aa"}),gt({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:Mn,color:"#66e5f0"}),gt({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:Xe,color:"#806647"}),gt({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:rn,color:"#e67333"}),gt({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:Ri,color:"#59bfcc"}),gt({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:Ws,color:"#b3956b"}),gt({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:ke,color:"#8a6d3b"}),gt({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),gt({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),gt({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),gt({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:Hi,color:"#c468e8"}),gt({id:"ironrod",name:"Iron Rod",desc:"Iron baked out of desert Rock at a Campfire. Two rods forge one Metal Rod at a Crafting Bench — tools without touching the wreck.",w:1,h:1,mass:1,color:"#b0683f"}),gt({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),yn("pickaxe",1,"wood","#a8834f"),yn("pickaxe",2,"stone","#8d8680"),yn("pickaxe",3,"metal","#9aa0aa"),yn("shovel",1,"wood","#a8834f"),yn("shovel",2,"stone","#8d8680"),yn("shovel",3,"metal","#9aa0aa"),yn("axe",1,"wood","#a8834f"),yn("axe",2,"stone","#8d8680"),yn("axe",3,"metal","#9aa0aa"),yn("pickaxe",4,"alloy","#c07848"),yn("shovel",4,"alloy","#c07848"),yn("axe",4,"alloy","#c07848"),yn("disassembler",1,"metal","#c0c8d8"),yn("disassembler",2,"alloy","#c07848"),gt({id:"voidbreaker",name:"Voidbreaker",desc:"Cheat gear: every block — even Ship Hull and bedrock-hard stuff — shatters the instant you swing. There is no recipe: it only comes out of the cheat menu.",w:1,h:2,mass:2,instaBreak:!0,color:"#8a5ad6"}),gt({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),gt({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",bag:{w:4,h:5,kg:20},color:"#7a5a3a"}),gt({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:cn,color:"#3d8042"}),gt({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),gt({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),gt({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",color:"#8a6f4d"}),gt({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),gt({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),gt({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:kn,color:"#573d23"}),gt({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:Gn,color:"#c8b060"}),gt({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:Wn,color:"#d8c878"}),gt({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),gt({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),gt({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),gt({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:Xn,color:"#7a5c3a"}),gt({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),gt({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Vn,color:"#7fae54"}),gt({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),gt({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),gt({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:Tr,color:"#8a744a"}),gt({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:Sn,color:"#9aa0ac"}),gt({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:je,color:"#82868e"}),gt({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:an,color:"#a84a42"}),gt({id:"iron_ore",name:"Iron Ore",desc:"Dense ore from Cave walls. Smelt it at a Campfire: one ore bakes two Iron Rods.",w:1,h:1,mass:1.6,block:Ar,color:"#9e8468"}),gt({id:"copper_ore",name:"Copper Ore",desc:"Reddened Cave stone. Smelts into Copper Rods - the heart of tier-4 Alloy gear.",w:1,h:1,mass:1.6,block:Rr,color:"#b86b42"}),gt({id:"alabaster",name:"Alabaster",desc:"Pale Cave stone. Cuts soft, decorates well, and takes a Lamp's light like nothing else.",w:1,h:1,mass:1.2,block:$s,color:"#dcd5bd"}),gt({id:"cobalt_ore",name:"Cobalt Ore",desc:"Bluish ore of the deepest stone (Metal Pickaxe or better). The Ship's repair hangs on it.",w:1,h:1,mass:2.2,block:Cr,color:"#5c74a8"}),gt({id:"copperrod",name:"Copper Rod",desc:"Smelted from Copper Ore. Never a tool by itself - always a component of better things.",w:1,h:1,mass:1,color:"#c07848"}),gt({id:"cobaltrod",name:"Cobalt Rod",desc:"Smelted from Cobalt Ore, found only in the deep underground. One Thruster Nozzle needs one.",w:1,h:1,mass:1.4,color:"#6a84bc"}),gt({id:"backpack2",name:"Backpack II",desc:"The big pack: inventory grid grows to 5x6, weight limit +40 kg. Reptile-hide stitching.",w:2,h:2,mass:3.5,equip:"backpack",bag:{w:5,h:6,kg:40},color:"#6a4c30"}),gt({id:"body_regulator",name:"Body Heat Regulator",desc:"Worn in the Regulator slot: pins your Heat toward neutral while a Coolant Cell lasts. It regulates you - never a room.",w:2,h:2,mass:3,equip:"regulator",color:"#4fa8c8"}),gt({id:"coolant_cell",name:"Coolant Cell",desc:"Consumable fuel for the Body Heat Regulator: one cell carries about 2 game days of regulation. Spent cells are gone.",w:1,h:1,mass:.8,color:"#7fd4e8"}),gt({id:"head_lantern",name:"Head Lantern",desc:"The Portable Light: worn in the Light slot, toggled with T. Burns fuel charges (5 max) - refill at a Campfire or load Kindling.",w:1,h:1,mass:1,equip:"light",fuel:5,color:"#ffd76a"}),gt({id:"chitin",name:"Chitin",desc:"Dust Scorpion armor plate. Tough, thin, and very hard to burn.",w:1,h:1,mass:.3,color:"#6a4a3a"}),gt({id:"stinger",name:"Stinger",desc:"A Dust Scorpion's barb. Tipped onto a blade, it makes the deadliest weapon in the desert.",w:1,h:1,mass:.2,color:"#a84a3a"}),gt({id:"wurm_hide",name:"Wurm Hide",desc:"Sand Wurm skin - heat-tempered plating for the toughest Body gear.",w:1,h:2,mass:1.2,color:"#8a6a48"}),gt({id:"wurmsuit",name:"Wurmsuit",desc:"Body-slot armour of Wurm Hide and Chitin: shrugs off 55% of every blow. Warmer against the cold night too.",w:2,h:2,mass:5,equip:"body",armor:.55,color:"#7a5c40"}),gt({id:"stinger_blade",name:"Stinger Blade",desc:"A Metal Sword tipped with a Scorpion Stinger: hits harder and farther than anything above ground.",w:1,h:2,mass:2.4,weapon:{reach:5.2,dmg:12},color:"#c9b048"}),gt({id:"curved_hull",name:"Curved Hull Plating",desc:"Hull Plating shaped as an elbow - insulates exactly like flat plating, and rounds any corner you build.",w:1,h:1,mass:2,block:pi,color:"#7d8390"}),gt({id:"hull_slope",name:"Hull Slope",desc:"A beveled hull block for spines, roofs and shoulders. Same insulation, rounder silhouette.",w:1,h:1,mass:2,block:Ci,color:"#767d88"}),gt({id:"thruster_nozzle",name:"Thruster Nozzle",desc:"Cobalt-and-Copper replacement engine part. Press E at a Broken Thruster to wake it. All four wake the Ship.",w:1,h:2,mass:3,color:"#c88a50"})],Vt=Object.fromEntries(Q1.map(r=>[r.id,r])),jn={};for(const r of Object.values(Vt))r.block!==void 0&&(jn[r.block]=r.id);jn[Je]="door";jn[$e]="door_inner";jn[wn]="bed";jn[si]="dirt";jn[mi]="kindling";jn[Gn]="seed_melon";jn[Pn]="dune_melon";jn[Wn]="seed_wheat";jn[pn]="wheat";jn[hi]="cactus";function Ln(r){const t=Vt[r.itemId];return r.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class Ia{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const s=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const i of s)this.addItem(i.itemId,1)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=Vt[e.itemId].mass;return t}occupied(t,e,n){for(const s of this.slots){if(s===n)continue;const i=Ln(s);if(t>=s.x&&t<s.x+i.w&&e>=s.y&&e<s.y+i.h)return s}return null}fits(t,e,n,s,i){if(t<0||e<0||t+n>this.w||e+s>this.h)return!1;for(let a=0;a<s;a++)for(let l=0;l<n;l++)if(this.occupied(t+l,e+a,i))return!1;return!0}move(t,e,n){const s=Ln(t);return e===t.x&&n===t.y?!0:this.fits(e,n,s.w,s.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=Ln(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addItem(t,e=1){const n=Vt[t],s=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let i=0;i<e;i++){let a=!1;for(const[l,h,o]of s){for(let c=0;c<=this.h-h&&!a;c++)for(let u=0;u<=this.w-l&&!a;u++){let f=!0;for(let m=0;m<h&&f;m++)for(let x=0;x<l&&f;x++)this.occupied(u+x,c+m)&&(f=!1);f&&(this.slots.push(o?{itemId:t,x:u,y:c,rot:!0}:{itemId:t,x:u,y:c}),a=!0)}if(a)break}if(!a)return e-i}return 0}removeItem(t,e=1){let n=0;for(let s=this.slots.length-1;s>=0&&n<e;s--)this.slots[s].itemId===t&&(this.slots.splice(s,1),n++);return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&e++;return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const lo={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]},scorpion:{kind:"scorpion",name:"Dust Scorpion",hp:20,speed:1.9,aggroR:3.5,fleeR:0,biteDmg:7,biteCd:2.2,hitR:.6,height:.5,drops:[{itemId:"chitin",count:1},{itemId:"stinger",count:1}],dropChance:[1,.3]},wurm:{kind:"wurm",name:"Sand Wurm",hp:45,speed:1,aggroR:7,fleeR:0,biteDmg:12,biteCd:2.5,hitR:.8,height:.9,drops:[{itemId:"wurm_hide",count:2},{itemId:"chitin",count:1}],dropChance:[1,.5]}},t_=new Wi(1,1,1);function e_(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ho(r){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");r(e,e_(5370855));const n=new au(t);return n.magFilter=n.minFilter=Nn,n.generateMipmaps=!1,n.colorSpace=En,n}function n_(){return Ho((r,t)=>{r.fillStyle="#c8a76d",r.fillRect(0,0,64,64);for(let n=0;n<420;n++){const s=.5+(t()-.5)*.22;r.fillStyle=s>.5?"#d4b781":"#b89359",r.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let s=0;s<9;s++){const i=5-Math.abs(s-4);r.fillStyle="#6f5230",r.fillRect(32-i,n+s,i*2,1),r.fillStyle="#8a6a3f",r.fillRect(32-i+1,n+s,Math.max(1,i*2-2),1)}r.fillStyle="#a9884f",r.fillRect(10+(t()*4|0),n+3,3,2),r.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)r.fillStyle=n>=56?"#e9dab1":"#d8c494",r.fillRect(0,n,64,1);for(let n=0;n<40;n++)r.fillStyle="#ddcba0",r.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function i_(){return Ho((r,t)=>{r.fillStyle="#c9a878",r.fillRect(0,0,64,64);for(let e=0;e<700;e++)r.fillStyle=t()>.5?"#ddc295":"#a9854f",r.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)r.fillStyle="#8a6a3c",r.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)r.fillStyle=e>=54?"#f2ead9":"#e2d4ba",r.fillRect(0,e,64,1);r.fillStyle="#efe6d2",r.beginPath(),r.arc(10,12,8,0,Math.PI*2),r.fill(),r.fillStyle="#6b4e2c",r.fillRect(8,10,4,4)})}function s_(){return Ho((r,t)=>{r.fillStyle="#a4552e",r.fillRect(0,0,64,64);for(let e=0;e<520;e++)r.fillStyle=t()>.5?"#b56a3c":"#8f4526",r.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[6,18,30,42])r.fillStyle="#6e3018",r.fillRect(0,e,64,2),r.fillStyle="#c47a4a",r.fillRect(0,e+2,64,1);r.fillStyle="#8a3f20",r.fillRect(30,0,4,50);for(let e=0;e<40;e++)r.fillStyle="#b56a3c",r.fillRect(30+(t()*4|0),t()*50|0,1,1);for(let e=52;e<64;e++)r.fillStyle=e>=56?"#e3cfa8":"#c9ae83",r.fillRect(0,e,64,1)})}function r_(){return Ho((r,t)=>{r.fillStyle="#c2a266",r.fillRect(0,0,64,64);for(let e=0;e<620;e++)r.fillStyle=t()>.5?"#d3b77e":"#ab8a52",r.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[5,17,29,41]){r.fillStyle="#7d5f36",r.fillRect(0,e,64,3),r.fillStyle="#96744499";for(let n=0;n<64;n+=4)r.fillRect(n,e+3,2,1)}for(let e=54;e<64;e++)r.fillStyle=e>=58?"#e6d6ac":"#d2bf94",r.fillRect(0,e,64,1)})}let La=null,Pa=null,Da=null,Ua=null;function o_(){return La||(La={body:new Ye({map:n_()}),ridge:new Ye({color:7295536}),eye:new Ye({color:1445898})}),La}function a_(){return Pa||(Pa={fur:new Ye({map:i_()}),pale:new Ye({color:15260868}),dark:new Ye({color:6045731}),pink:new Ye({color:14196896})}),Pa}function l_(){return Da||(Da={shell:new Ye({map:s_()}),claw:new Ye({color:8272414}),stinger:new Ye({color:5579793}),eye:new Ye({color:1445898})}),Da}function c_(){return Ua||(Ua={hide:new Ye({map:r_()}),ridge:new Ye({color:8216374}),eye:new Ye({color:1445898})}),Ua}function ee(r,t,e,n,s,i,a){const l=new Ke(t_,n);return l.scale.set(r,t,e),l.position.set(s,i,a),l}function h_(){const r=o_(),t=new Ie,e=[],n=[],s=[.36,.13,-.1,-.33,-.54,-.72],i=[.26,.27,.26,.23,.18,.12],a=[.22,.23,.22,.2,.16,.11],l=.24;for(let u=0;u<s.length;u++){const f=Math.sin(u*.8)*.05,m=ee(i[u],a[u],l,r.body,f,a[u]/2+.005,s[u]);e.push({mesh:m,bx:f,w:i[u],h:a[u],d:l}),n.push({mesh:ee(i[u]*.3,.02,l*.92,r.ridge,f,a[u]+.008,s[u]),w:i[u]}),t.add(m,n[u].mesh)}const h=new Ie;h.position.set(Math.sin(0)*.05,.095+.005,.6);const o=ee(.27,.19,.27,r.body,0,.095,0);return h.add(o),h.add(ee(.035,.035,.03,r.eye,-.115,.14,.11)),h.add(ee(.035,.035,.03,r.eye,.115,.14,.11)),t.add(h),{group:t,animate:(u,f)=>{const m=Math.max(0,Math.min(1,f)),x=.015+.075*m,y=u*(3.2+2.6*m);for(let v=0;v<e.length;v++){const _=e[v],b=Math.sin(y-v*.85)*x;_.mesh.position.x=_.bx+b,_.mesh.rotation.y=-b*1.4;const w=1+Math.sin(u*1.9)*.03*(1-m*.6);_.mesh.scale.set(_.w*w,_.h,_.d);const S=n[v];S.mesh.position.x=_.mesh.position.x,S.mesh.rotation.y=_.mesh.rotation.y,S.mesh.scale.x=S.w*.3*w}h.position.x=Math.sin(y+.85)*x*.5,h.rotation.y=Math.sin(u*(2.2+2.4*m))*(.06+.14*m)}}}function u_(){const r=a_(),t=new Ie,e=new Ie;t.add(e);const n=ee(.22,.26,.34,r.fur,0,.26,-.02);e.add(n);const s=new Ie;s.position.set(0,.31,.19),s.add(ee(.15,.14,.15,r.fur,0,0,.05)),s.add(ee(.045,.035,.04,r.pink,0,-.02,.13)),s.add(ee(.028,.028,.02,r.dark,-.062,.03,.1)),s.add(ee(.028,.028,.02,r.dark,.062,.03,.1)),e.add(s);const i=ee(.05,.12,.025,r.fur,-.075,.41,.16),a=ee(.05,.12,.025,r.fur,.075,.41,.16);i.rotation.z=.15,a.rotation.z=-.15,e.add(i,a);const l=ee(.09,.14,.11,r.fur,-.12,.14,-.06),h=ee(.09,.14,.11,r.fur,.12,.14,-.06),o=ee(.07,.05,.22,r.pale,-.13,.028,.02),c=ee(.07,.05,.22,r.pale,.13,.028,.02);e.add(l,h,o,c),e.add(ee(.035,.035,.07,r.pale,-.08,.11,.15)),e.add(ee(.035,.035,.07,r.pale,.08,.11,.15));const u=new Ie;return u.position.set(0,.16,-.19),u.add(ee(.04,.04,.24,r.fur,0,0,-.12)),u.add(ee(.032,.032,.22,r.fur,0,-.045,-.34)),u.add(ee(.07,.055,.11,r.dark,0,-.075,-.5)),e.add(u),{group:t,animate:(m,x)=>{const y=Math.max(0,Math.min(1,x)),v=Math.abs(Math.sin(m*(2.6+2.4*y)));e.position.y=v*.13*y+Math.sin(m*1.7)*.004,n.scale.y=.26*(1+Math.sin(m*1.9)*.03*(1-y)),o.rotation.x=c.rotation.x=-.55*v*y,l.rotation.x=h.rotation.x=-.35*v*y,u.rotation.y=Math.sin(m*(1.8+3.4*y))*(.1+.3*y),u.rotation.x=-.12-.18*y+Math.sin(m*(2.6+2.4*y))*.06*y;const _=Math.max(0,Math.sin(m*6.3))**8*(1-y);i.rotation.z=.15+_*.25,a.rotation.z=-.15-Math.max(0,Math.sin(m*6.3+2.1))**8*(1-y)*.25,s.rotation.x=-.1*v*y+Math.sin(m*1.3)*.03*(1-y)}}}const d_=new Xl(1,14,10);function Cl(r,t,e,n,s,i,a){const l=new Ke(d_,n);return l.scale.set(r,t,e),l.position.set(s,i,a),l}function f_(){const r=l_(),t=new Ie,e=new Ie;t.add(e);const n=.09,s=ee(.46,.14,.34,r.shell,0,n+.07,.02);e.add(s);const i=[],a=[-.26,-.45,-.62],l=[.4,.34,.26],h=[.13,.12,.1];for(let w=0;w<a.length;w++){const S=ee(l[w],h[w],.2,r.shell,0,n+h[w]/2,a[w]);i.push({mesh:S,bx:0,w:l[w],h:h[w],d:.2}),e.add(S)}const o=new Ie;o.position.set(0,n+.045,.25),o.add(ee(.26,.09,.13,r.shell,0,0,0)),o.add(ee(.03,.03,.02,r.eye,-.08,.05,.05)),o.add(ee(.03,.03,.02,r.eye,.08,.05,.05)),e.add(o);const c=[],u=[];for(const w of[-1,1]){const S=new Ie;S.position.set(w*.24,n+.04,.14),S.rotation.y=w*.5,S.add(ee(.075,.055,.2,r.shell,0,0,.1)),S.add(ee(.07,.05,.1,r.claw,0,0,.24));const T=ee(.025,.022,.13,r.claw,0,.026,.33),R=ee(.025,.022,.13,r.claw,0,-.026,.33);S.add(T,R),c.push({up:T,dn:R}),u.push(S),e.add(S)}const f=[];for(const w of[-1,1])for(let S=0;S<4;S++){const T=ee(.03,.11,.03,r.shell,w*.3,n*.5,.12-S*.14);T.rotation.z=-w*.55,f.push(T),e.add(T)}const m=new Ie;m.position.set(0,n+.1,-.7),m.rotation.x=.5,m.add(ee(.16,.16,.22,r.shell,0,0,-.11));const x=new Ie;x.position.set(0,.04,-.22),x.rotation.x=.7,x.add(ee(.13,.13,.18,r.shell,0,0,-.09));const y=new Ie;y.position.set(0,.03,-.18),y.rotation.x=.8,y.add(ee(.1,.1,.15,r.shell,0,0,-.075));const v=Cl(.22,.2,.24,r.stinger,0,.06,-.22),_=ee(.035,.035,.13,r.stinger,0,.16,-.3);return _.rotation.x=.5,y.add(v,_),x.add(y),m.add(x),e.add(m),{group:t,animate:(w,S)=>{const T=Math.max(0,Math.min(1,S));e.position.y=Math.abs(Math.sin(w*(5.5+5*T)))*.012*T;const R=w*(6+6*T);for(let d=0;d<f.length;d++){const g=d%4,M=d<4?0:Math.PI;f[d].rotation.x=Math.sin(R+g*1.7+M)*.5*T}const L=1+Math.sin(w*1.6)*.03*(1-T*.5);for(const d of i)d.mesh.scale.set(d.w*L,d.h,d.d);for(let d=0;d<2;d++){const g=u[d],M=c[d];g.rotation.z=Math.sin(R+d*Math.PI)*.25*T;const C=.06+Math.abs(Math.sin(w*(1.4+1.6*T)+d*1.3))*(.08+.14*T);M.up.rotation.x=-C,M.dn.rotation.x=C}const p=.06+.14*T;m.rotation.y=Math.sin(w*(1.1+1.4*T))*p,y.rotation.x=.8+Math.sin(w*1.7)*.08,o.rotation.y=Math.sin(w*1.5)*.05*(1-T*.5)}}}function p_(){const r=c_(),t=new Ie,e=[],n=[],s=[-.95,-.45,.1,.62],i=[.34,.4,.44,.42],a=[.3,.37,.42,.4],l=[.4,.45,.48,.45];for(let c=0;c<s.length;c++){const u=a[c]+.01,f=Cl(i[c]*2,a[c]*2,l[c]*2,r.hide,0,u,s[c]);e.push({mesh:f,bx:0,w:i[c]*2,h:a[c]*2,d:l[c]*2}),n.push({mesh:ee(i[c],.06,l[c]*.8,r.ridge,0,u+a[c]-.04,s[c]),w:i[c]}),t.add(f,n[c].mesh)}const h=new Ie;return h.position.set(0,.36,1.15),h.add(Cl(.72,.68,.76,r.hide,0,0,0)),h.add(ee(.05,.05,.04,r.eye,-.19,.12,.26)),h.add(ee(.05,.05,.04,r.eye,.19,.12,.26)),t.add(h),{group:t,animate:(c,u)=>{const f=Math.max(0,Math.min(1,u)),m=.02+.11*f,x=c*(1.5+1.5*f);for(let y=0;y<e.length;y++){const v=e[y],_=Math.sin(x-y*.8)*m;v.mesh.position.x=v.bx+_,v.mesh.rotation.y=-_*1.1;const b=1+Math.sin(c*1.1-y*.6)*.03;v.mesh.scale.set(v.w*b,v.h,v.d*b);const w=n[y];w.mesh.position.x=v.mesh.position.x,w.mesh.rotation.y=v.mesh.rotation.y,w.mesh.scale.x=w.w*b}h.position.x=Math.sin(x+.8)*m*.7,h.rotation.y=Math.sin(c*(1.2+1.4*f))*(.07+.13*f)}}}function m_(r){switch(r){case"snake":return h_();case"rat":return u_();case"scorpion":return f_();case"wurm":return p_()}}const Tu=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"alloy_pickaxe",count:1,needs:{metal:2,copperrod:2,deadwood:1},bench:!0},{out:"alloy_shovel",count:1,needs:{metal:2,copperrod:2,deadwood:1},bench:!0},{out:"alloy_axe",count:1,needs:{metal:2,copperrod:2,deadwood:1},bench:!0},{out:"alloy_disassembler",count:1,needs:{metal:3,copperrod:2,rock:2},bench:!0},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"backpack2",count:1,needs:{deadwood:10,metal:4,snake_skin:2},bench:!0},{out:"wurmsuit",count:1,needs:{wurm_hide:3,chitin:1},bench:!0},{out:"stinger_blade",count:1,needs:{metal:2,stinger:1,deadwood:1},bench:!0},{out:"body_regulator",count:1,needs:{metal:4,copperrod:2,cobaltrod:1,catalyst:1},bench:!0},{out:"coolant_cell",count:1,needs:{salt:2,canister_empty:1,copperrod:1},bench:!0},{out:"head_lantern",count:1,needs:{metal:1,glass:1,copperrod:1,deadwood:1},bench:!0},{out:"curved_hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"hull_slope",count:2,needs:{metal:2,sand:2},bench:!0},{out:"thruster_nozzle",count:1,needs:{cobaltrod:1,copperrod:2,metal:1},bench:!0},{out:"sword",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0},{out:"metal",count:1,needs:{ironrod:2},bench:!0},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},bench:!0},{out:"reptile_armor",count:1,needs:{snake_skin:3},bench:!0},{out:"farmland",count:1,needs:{dirt:1},bench:!1},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},bench:!1},{out:"metal_plating",count:1,needs:{metal:1},bench:!1},{out:"door_inner",count:1,needs:{metal:1,deadwood:1},bench:!0},{out:"bucket",count:1,needs:{metal:2},bench:!0},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},bench:!0}],Au=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"ironrod"},{in:"rat_raw",out:"rat_cooked"},{in:"wheat",out:"cooked_wheat"},{in:"iron_ore",out:"ironrod",n:2},{in:"copper_ore",out:"copperrod",n:2},{in:"cobalt_ore",out:"cobaltrod",n:2}];function Ru(r,t){return Object.entries(t.needs).every(([e,n])=>r.has(e,n))}function g_(r,t){if(!Ru(r,t))return null;for(const[e,n]of Object.entries(t.needs))r.removeItem(e,n);return r.addItem(t.out,t.count)}const vr=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it right next to a Save Beacon — that wakes the wreck's power.",goal:1},{id:"wings",kind:"thruster",title:"Wings of the Wreck",desc:"The Ship's four wingtip engines are dead. Mine Cobalt Ore in the deep Caves, smelt it at a Campfire, craft a Thruster Nozzle (Cobalt + Copper + Metal), and press E at each Broken Thruster. All four lit lifts the Ship.",goal:4}];function __(){return{i:0,p:vr.map(()=>0)}}function v_(r){const t=__();if(!r)return t;t.i=Math.max(0,Math.min(vr.length,r.i|0));for(let e=0;e<t.p.length;e++){const n=vr[e].goal;t.p[e]=Math.max(0,Math.min(n,(r.p&&r.p[e])|0))}return t}function ar(r){return r.i<vr.length?vr[r.i]:null}function x_(r,t,e=1){const n=ar(r);if(!n||n.kind!==t||r.p[r.i]>=n.goal||(r.p[r.i]=Math.min(n.goal,r.p[r.i]+e),r.p[r.i]<n.goal))return null;const s=n;return r.i++,s}const y_=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],nr=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:r=>r.setClock(.56),poll:r=>r.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:r=>{r.inv.has("canister_empty")||r.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:r=>r.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:r=>r.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. Plant seeds in the tilled soil. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",goal:"plant",hold:40,enter:r=>{r.giveOrDrop("seed_wheat",2),r.selectHeld("shovel");const t=r.player.pos,e=Math.floor(t.x),n=Math.floor(t.z);for(let s=Math.floor(t.y)-1;s>20;s--){const i=r.world.get(e,s,n);if(i===Yn||i===vn){r.world.set(e,s,n,Kn),r.tutGuide={name:"Dirt",x:e,y:s,z:n};break}}}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class M_{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&nr[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=nr[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===qe&&(t.set(-6,31,0,ln),t.set(-6,32,0,Je),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=nr.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=nr[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=nr.map((n,s)=>s===this.step?"●":s<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const Cu="sotf:index",Iu="sotf:settings",Lu="sotf:best",Ah={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function S_(){try{return{...Ah,...JSON.parse(localStorage.getItem(Iu)||"{}")}}catch{return{...Ah}}}function b_(r){localStorage.setItem(Iu,JSON.stringify(r))}function xr(){return Number(localStorage.getItem(Lu)||0)}function Rh(r){r>xr()&&localStorage.setItem(Lu,String(r))}function Go(){try{return JSON.parse(localStorage.getItem(Cu)||"[]")}catch{return[]}}function Ql(r){localStorage.setItem(Cu,JSON.stringify(r))}function Pu(r,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:r||t||"world",seedStr:t,updated:Date.now()},s=Go();return s.unshift(n),Ql(s),n}function E_(r){Ql(Go().filter(t=>t.id!==r)),localStorage.removeItem("sotf:w:"+r)}function Du(r,t){try{localStorage.setItem("sotf:w:"+r.id,JSON.stringify(t));const e=Go(),n=e.find(s=>s.id===r.id);return n&&(n.updated=Date.now(),Ql(e)),!0}catch{return!1}}function Uu(r){try{const t=localStorage.getItem("sotf:w:"+r);return t?JSON.parse(t):null}catch{return null}}function ku(r,t){const e=new Blob([JSON.stringify({meta:r,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${r.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function w_(r){const t=JSON.parse(await r.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=Pu(t.meta?.name??"imported",t.run.seedStr);return Du(e,t.run),e}const te=Me;function cs(r,t){const e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}const ti=(r,t,e,n)=>{const[s,i]=wu(n);r.drawImage(Eu(),s,i,te,te,t,e,te,te)},B=(r,t,e,n,s,i)=>{r.fillStyle=i,r.fillRect(t,e,n,s)},be=(r,t,e,n,s,i)=>{r.strokeStyle=i,r.lineWidth=1,r.strokeRect(t+.5,e+.5,n-1,s-1)},$t=(r,t,e,n,s,i,a=2)=>{r.strokeStyle=i,r.lineWidth=a,r.beginPath(),r.moveTo(t,e),r.lineTo(n,s),r.stroke()},ve=(r,t,e)=>{r.fillStyle=e,r.beginPath(),r.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)r.lineTo(t[n][0],t[n][1]);r.closePath(),r.fill()};function Nu(r,t,e,n){const[s,i]=cs(t*te,e*te),a=(o,c,u)=>{ve(i,[[3,12],[2,7],[5,3],[10,2],[14,6],[13,12],[8,14]],o),ve(i,[[5,3],[10,2],[11,6],[6,7]],c),ve(i,[[3,12],[13,12],[8,14]],u)},l=(o,c,u)=>{i.fillStyle=o;for(const[f,m]of u)i.fillRect(f,m,2,2);i.fillStyle=c;for(const[f,m]of u)i.fillRect(f,m,1,1)};if(r.includes("_")&&(r.endsWith("pickaxe")||r.endsWith("shovel")||r.endsWith("axe")||r.endsWith("disassembler"))){const o=r.replace(/^(wood|stone|metal|alloy)_/,""),c=r.startsWith("alloy_"),u=c?"#7a4a26":"#00000044";return B(i,7,16,2,14,"#6b5238"),B(i,6,14,4,3,"#4a4a52"),o==="pickaxe"?($t(i,3,12,13,12,n,2),$t(i,3,12,3,15,n),$t(i,13,12,13,15,n),$t(i,4,9,12,9,"#00000022",1),c&&$t(i,4,11,12,11,"#e89a62",1)):o==="shovel"?(B(i,5,6,6,7,n),be(i,5,6,6,7,u),$t(i,6,13,6,13,n),$t(i,9,13,9,13,n),$t(i,6,13,7,14,n,1),$t(i,9,13,8,14,n,1),c&&B(i,6,7,2,4,"#e89a62")):o==="axe"?(B(i,9,7,5,6,n),be(i,9,7,5,6,u),B(i,8,8,1,4,n),c&&B(i,10,8,2,3,"#e89a62")):(B(i,4,7,8,2,n),B(i,4,7,2,5,n),B(i,10,7,2,5,n),B(i,7,11,2,2,"#66e5f0"),B(i,6,12,4,1,"#2f97a6"),c&&(B(i,4,8,1,3,"#e89a62"),B(i,11,8,1,3,"#8a4a26"))),c&&(B(i,6,14,4,1,"#8a5a34"),B(i,6,15,4,1,"#c98a56"),B(i,6,16,4,1,"#5c3d22"),i.fillStyle="#f0c89a",i.fillRect(6,15,1,1),i.fillRect(9,15,1,1)),s}switch(r){case"canister_full":case"canister_empty":{const o=r==="canister_full",c=e*te;return B(i,6,0,4,3,"#8a98a8"),B(i,7,3,2,2,"#8a98a8"),B(i,4,5,8,c-7,o?"#2f7fd6":"#3a4750"),be(i,4,5,8,c-7,"#dfe6ee"),o?(B(i,5,10,1,c-13,"#5fa3ea"),B(i,4,9,8,1,"#7f2b2b")):(B(i,4,14,8,4,"#c8d2da"),B(i,6,15,4,2,"#3a4750")),s}case"sword":return B(i,8,0,1,1,"#eef3f8"),B(i,7,1,3,17,"#c9d2dc"),B(i,8,1,1,17,"#eef3f8"),B(i,4,18,8,2,"#4a4a52"),B(i,7,20,3,9,"#6b5238"),B(i,7,22,3,1,"#4a3926"),B(i,7,25,3,1,"#4a3926"),B(i,6,29,5,2,"#4a4a52"),s;case"voidbreaker":return B(i,7,16,2,14,"#2a1d3a"),B(i,6,14,4,3,"#180f24"),$t(i,3,12,13,12,"#8a5ad6",2),$t(i,3,12,3,15,"#8a5ad6"),$t(i,13,12,13,15,"#8a5ad6"),i.fillStyle="#e8d6ff",i.fillRect(5,9,1,2),i.fillRect(10,10,1,1),i.fillRect(8,11,1,2),i.fillStyle="#00000088",i.fillRect(7,10,2,1),i.fillRect(6,11,1,2),s;case"ironrod":B(i,6,1,3,14,"#8a4f2e"),B(i,7,2,1,12,"#d08a52"),i.fillStyle="#5c3319";for(const[o,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(o,c,1,1);return B(i,5,1,5,1,"#5c3319"),B(i,5,14,5,1,"#5c3319"),s;case"visor":return B(i,1,6,14,3,"#2e3a45"),B(i,3,4,10,6,"#123c44"),B(i,4,5,8,4,"#66e5f0"),B(i,5,5,2,1,"#d2f8ff"),be(i,3,4,10,6,"#c8d2da"),B(i,1,5,2,1,"#5a6875"),B(i,13,5,2,1,"#5a6875"),s;case"catalyst":return B(i,7,3,2,2,"#8898a8"),i.fillStyle="#c07fe0",i.beginPath(),i.arc(8,10,4,0,Math.PI*2),i.fill(),i.strokeStyle="#7a4a9a",i.lineWidth=1,i.beginPath(),i.arc(8,10,4.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,8,2,1),i.fillRect(7,7,1,1),s;case"iron_ore":return a("#5a5450","#78716c","#423d39"),l("#9e8468","#c4a878",[[5,6],[9,4],[10,9],[6,10]]),s;case"copper_ore":return a("#6a5a52","#8a7466","#4c403a"),l("#b86b42","#e8935e",[[5,6],[9,4],[10,9],[6,10]]),s;case"cobalt_ore":return a("#4e5666","#6a7488","#3a4050"),ve(i,[[7,4],[9,6],[7,8],[5,6]],"#5c74a8"),ve(i,[[10,8],[12,10],[10,12],[8,10]],"#5c74a8"),ve(i,[[7,4],[9,6],[7,6]],"#9ab8e8"),ve(i,[[10,8],[12,10],[10,10]],"#9ab8e8"),i.fillStyle="#c4dcf4",i.fillRect(7,4,1,1),i.fillRect(10,8,1,1),s;case"alabaster":return a("#cfc8b0","#eae3cd","#a89f88"),B(i,4,7,8,1,"#b4ab92"),B(i,6,10,7,1,"#b4ab92"),B(i,3,12,5,1,"#b4ab92"),i.fillStyle="#f7f2e2",i.fillRect(6,3,2,1),s;case"copperrod":B(i,6,1,3,14,"#a05a2e"),B(i,7,2,1,12,"#e89a62"),i.fillStyle="#6e3a1c";for(const[o,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(o,c,1,1);return B(i,5,1,5,1,"#6e3a1c"),B(i,5,14,5,1,"#6e3a1c"),s;case"cobaltrod":B(i,6,1,3,14,"#4a5a86"),B(i,7,2,1,12,"#8aa8dc"),i.fillStyle="#2e3a5c";for(const[o,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(o,c,1,1);return B(i,5,1,5,1,"#2e3a5c"),B(i,5,14,5,1,"#2e3a5c"),s;case"backpack2":{B(i,8,1,3,6,"#5a4229"),B(i,21,1,3,6,"#5a4229"),B(i,3,7,26,22,"#6a4c30"),be(i,3,7,26,22,"#42301e"),B(i,3,7,26,8,"#7d5c3c"),be(i,3,7,26,8,"#42301e"),B(i,9,7,4,22,"#6a4a3a"),B(i,19,7,4,22,"#6a4a3a"),i.fillStyle="#c8a878";for(let o=10;o<=27;o+=3)i.fillRect(9,o,1,1),i.fillRect(12,o,1,1),i.fillRect(19,o,1,1),i.fillRect(22,o,1,1);return B(i,13,17,6,4,"#8a6a4a"),be(i,13,17,6,4,"#2e2018"),B(i,15,18,2,2,"#c8a878"),B(i,5,25,22,4,"#7a5a3a"),be(i,5,25,22,4,"#42301e"),s}case"body_regulator":return B(i,4,2,3,28,"#4c3822"),B(i,25,2,3,28,"#4c3822"),i.strokeStyle="#3a4750",i.lineWidth=2,i.beginPath(),i.moveTo(10,12),i.quadraticCurveTo(4,10,5,3),i.stroke(),i.beginPath(),i.moveTo(22,12),i.quadraticCurveTo(28,10,27,3),i.stroke(),B(i,8,8,16,17,"#8a98a8"),be(i,8,8,16,17,"#3c4650"),B(i,8,8,16,3,"#aab4c0"),B(i,8,22,16,3,"#6a7680"),B(i,10,13,12,2,"#2e6a78"),B(i,10,16,12,2,"#2e6a78"),B(i,10,19,12,2,"#2e6a78"),i.fillStyle="#5fb8cc",i.fillRect(11,13,2,2),i.fillRect(15,16,2,2),i.fillRect(19,19,2,2),i.fillStyle="#d2f8ff",i.fillRect(9,12,1,1),i.fillRect(22,15,1,1),i.fillRect(9,21,1,1),i.fillRect(21,12,1,1),s;case"coolant_cell":return i.fillStyle="#7fd4e8",i.globalAlpha=.22,i.beginPath(),i.arc(8,9,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,B(i,6,1,4,2,"#8a98a8"),B(i,7,3,2,1,"#8a98a8"),B(i,5,4,6,10,"#3a8ea8"),be(i,5,4,6,10,"#bfeef8"),B(i,6,5,1,8,"#7fd4e8"),B(i,5,7,6,1,"#5fc0d8"),B(i,5,11,6,1,"#2e6e84"),i.fillStyle="#e8fbff",i.fillRect(9,6,1,1),i.fillRect(7,9,1,1),i.fillRect(10,12,1,1),i.fillRect(6,13,1,1),s;case"head_lantern":return i.fillStyle="#ffd76a",i.globalAlpha=.25,i.beginPath(),i.arc(8,9,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,B(i,1,7,14,3,"#4a4a52"),B(i,1,7,14,1,"#5f6670"),B(i,1,9,14,1,"#33373d"),B(i,7,4,2,2,"#5a6875"),B(i,5,6,6,8,"#2e3a45"),be(i,5,6,6,8,"#8a98a8"),B(i,6,7,4,5,"#ffd76a"),B(i,7,8,2,2,"#fff3c0"),B(i,6,11,4,1,"#e8a83c"),B(i,5,13,6,1,"#232830"),s;case"chitin":return ve(i,[[8,3],[13,6],[14,11],[11,14],[5,14],[2,11],[3,6]],"#6a4a3a"),ve(i,[[8,3],[13,6],[8,7],[3,6]],"#8f6a50"),$t(i,8,7,5,13,"#4c352a",1),$t(i,8,7,8,14,"#4c352a",1),$t(i,8,7,11,13,"#4c352a",1),B(i,4,13,8,1,"#3c2a20"),i.fillStyle="#b08860",i.fillRect(7,4,2,1),s;case"stinger":return i.strokeStyle="#8a7a5c",i.lineWidth=5,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#d8cbb0",i.lineWidth=3,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#b0a284",i.lineWidth=1,i.beginPath(),i.moveTo(5,13),i.quadraticCurveTo(5.5,7,8,4),i.stroke(),ve(i,[[9,0],[14,1],[11,6]],"#a84a3a"),ve(i,[[9,0],[11,.5],[10,3]],"#e0705a"),$t(i,14,1,11,6,"#6e2f24",1),s;case"wurm_hide":{B(i,2,2,12,15,"#7a5c40"),be(i,2,2,12,15,"#4c3822");for(let o=3;o<14;o+=3)B(i,3,o,10,2,"#8f6e4c"),B(i,3,o+2,10,1,"#5a4228");return B(i,2,17,12,2,"#6a4c30"),i.fillStyle="#8a6a48",i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.fill(),i.strokeStyle="#4c3822",i.lineWidth=1,i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.stroke(),i.strokeStyle="#5a4228",i.beginPath(),i.arc(8,24,3,0,Math.PI*2),i.stroke(),i.fillStyle="#6a4c30",i.fillRect(7,23,2,2),s}case"wurmsuit":{B(i,9,8,14,18,"#7a5c40"),be(i,9,8,14,18,"#42301e");for(let o=10;o<=18;o+=4)B(i,10,o,12,3,"#8a6a48"),B(i,10,o+3,12,1,"#4c3822");B(i,11,5,10,3,"#5f4830"),be(i,11,5,10,3,"#42301e"),ve(i,[[3,9],[10,6],[12,13],[5,15]],"#6a4a3a"),ve(i,[[29,9],[22,6],[20,13],[27,15]],"#6a4a3a"),ve(i,[[4,9],[10,6],[11,9],[5,11]],"#8f6a50"),ve(i,[[28,9],[22,6],[21,9],[27,11]],"#8f6a50"),$t(i,6,8,7,14,"#4c352a",1),$t(i,26,8,25,14,"#4c352a",1),i.fillStyle="#c8a878";for(let o=9;o<=14;o+=3)i.fillRect(4,o,1,1),i.fillRect(9,o,1,1),i.fillRect(22,o,1,1),i.fillRect(27,o,1,1);return B(i,9,24,14,3,"#4c3822"),B(i,13,24,6,3,"#6a4a3a"),be(i,13,24,6,3,"#2e2018"),i.fillStyle="#c8a878",i.fillRect(15,25,2,1),s}case"stinger_blade":return ve(i,[[8,0],[10,3],[6,3]],"#a84a3a"),ve(i,[[8,0],[9,2],[7,2]],"#e0705a"),ve(i,[[6,3],[10,3],[11,6],[5,6]],"#d8cbb0"),$t(i,5,6,11,6,"#8a7a5c",1),B(i,6,6,4,15,"#c9d2dc"),B(i,7,7,1,14,"#eef3f8"),B(i,9,7,1,14,"#8a949e"),B(i,3,21,10,2,"#4a4a52"),B(i,3,21,10,1,"#6a7280"),B(i,6,23,4,6,"#6b5238"),B(i,6,24,4,1,"#4a3926"),B(i,6,27,4,1,"#4a3926"),B(i,5,29,6,2,"#6a4a3a"),be(i,5,29,6,2,"#3c2a20"),s;case"curved_hull":{const o="#7d8390",c="#4e545e",u="#aab2bc";return B(i,6,2,8,2,o),B(i,3,4,12,2,o),B(i,2,6,13,8,o),i.clearRect(13,13,2,1),i.clearRect(14,12,1,1),B(i,6,2,8,1,u),B(i,3,4,1,2,u),B(i,2,6,1,8,u),B(i,2,13,11,1,c),B(i,14,6,1,6,c),B(i,12,13,1,1,c),B(i,3,9,12,1,"#6b7280"),i.fillStyle=c,i.fillRect(11,3,1,1),i.fillRect(12,7,1,1),i.fillRect(5,11,1,1),i.fillStyle=u,i.fillRect(11,4,1,1),i.fillRect(12,8,1,1),i.fillRect(5,12,1,1),s}case"hull_slope":return ve(i,[[2,14],[2,4],[11,2],[14,8],[14,14]],"#767d88"),ve(i,[[2,4],[11,2],[12,6],[2,8]],"#949ca8"),$t(i,11,2,14,8,"#aab2bc",1),B(i,2,13,12,1,"#4e545e"),B(i,2,10,12,1,"#6b7280"),i.fillStyle="#5c636d",i.fillRect(4,6,1,1),i.fillRect(9,11,1,1),i.fillRect(12,9,1,1),s;case"thruster_nozzle":return B(i,8,2,16,5,"#8a98a8"),be(i,8,2,16,5,"#3c4650"),B(i,8,2,16,1,"#aab4c0"),i.fillStyle="#c8d2da",i.fillRect(9,4,1,1),i.fillRect(22,4,1,1),$t(i,12,3,14,5,"#5c6670",1),$t(i,18,5,20,3,"#5c6670",1),ve(i,[[10,7],[22,7],[27,21],[5,21]],"#c88a50"),ve(i,[[10,7],[15,7],[13,21],[5,21]],"#e0a86a"),ve(i,[[20,7],[22,7],[27,21],[23,21]],"#96603a"),$t(i,9,12,23,12,"#7a4a26",1),$t(i,7,17,25,17,"#7a4a26",1),B(i,5,21,22,4,"#8a98a8"),be(i,5,21,22,4,"#3c4650"),B(i,5,21,22,1,"#aab4c0"),i.fillStyle="#5c6670",i.fillRect(8,22,1,2),i.fillRect(16,22,1,2),i.fillRect(23,22,1,2),i.fillStyle="#c8d2da",i.fillRect(9,23,1,1),i.fillRect(17,23,1,1),i.fillRect(24,23,1,1),B(i,7,25,18,3,"#4a5560"),B(i,9,26,14,1,"#c85a2e"),B(i,11,27,10,1,"#8a3a1e"),s;case"backpack1":return B(i,8,1,3,6,"#5a4229"),B(i,21,1,3,6,"#5a4229"),B(i,5,7,22,21,"#7a5a3a"),be(i,5,7,22,21,"#4c3822"),B(i,5,7,22,8,"#8a6a48"),be(i,5,7,22,8,"#4c3822"),B(i,13,13,6,3,"#d8b74f"),B(i,9,20,14,6,"#6b4d30"),be(i,9,20,14,6,"#4c3822"),s;case"beacon":return i.fillStyle="#66e5f0",i.globalAlpha=.35,i.beginPath(),i.arc(8,5,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.fillStyle="#66e5f0",i.beginPath(),i.arc(8,5,3,0,Math.PI*2),i.fill(),B(i,6,5,1,1,"#d2f8ff"),B(i,7,8,2,8,"#8a98a8"),ti(i,0,te,Mn),s;case"campfire":return $t(i,3,10,12,4,"#61492f",2),$t(i,4,4,13,10,"#61492f",2),$t(i,3,10,12,4,"#7d5f3d",1),ti(i,0,te,rn),s;case"door":return ti(i,0,0,Je),ti(i,0,te,ln),s;case"bed":return ti(i,0,0,an),ti(i,te,0,wn),s;case"dune_melon":i.fillStyle="#5f7f2c",i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#3c541c",i.lineWidth=2,i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.stroke(),i.strokeStyle="#88a84c",i.lineWidth=1;for(const o of[-7,0,7])i.beginPath(),i.moveTo(16+o,3),i.lineTo(16+o,19),i.stroke();return B(i,15,1,2,3,"#6b5238"),s;case"wheat":{i.strokeStyle="#c8a844",i.lineWidth=2;for(const o of[4,8,12])i.beginPath(),i.moveTo(o,15),i.lineTo(o,3),i.stroke();i.fillStyle="#e0c860";for(const o of[4,8,12])for(let c=2;c<9;c+=2)i.fillRect(o-2,c,4,2);return i.strokeStyle="#7a5a30",i.lineWidth=1,i.beginPath(),i.moveTo(2,12),i.lineTo(14,12),i.stroke(),s}case"cooked_wheat":return i.fillStyle="#a8712e",i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.fill(),i.strokeStyle="#74501f",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.stroke(),i.fillStyle="#d8a860",i.fillRect(5,8,6,1),i.fillRect(6,7,4,1),s;case"bucket":case"bucket_full":{const o=r==="bucket_full";return B(i,4,6,8,9,o?"#2f7fd6":n),be(i,4,6,8,9,"#dfe6ee"),B(i,3,5,10,2,"#c8d2da"),B(i,5,2,1,3,"#8a98a8"),B(i,10,2,1,3,"#8a98a8"),$t(i,5,3,11,3,"#8a98a8",1),o&&B(i,5,7,6,1,"#5fa3ea"),s}case"kindling":return $t(i,3,21,12,4,"#6b5238",2),$t(i,6,22,14,8,"#5a4630",2),B(i,11,3,3,3,"#9a8a5a"),B(i,4,8,3,3,"#9a8a5a"),B(i,13,9,3,2,"#8a9a4a"),s;case"seed_tree":return B(i,7,14,6,6,"#8a6a3a"),B(i,7,13,6,2,"#5a4630"),B(i,9,9,2,4,"#5a8a3a"),B(i,6,7,3,2,"#7fae54"),B(i,11,8,3,2,"#7fae54"),s;case"rock":return a("#6a655f","#877f77","#4a4642"),$t(i,5,9,11,10,"#55504b",1),i.fillStyle="#98907f",i.fillRect(7,4,2,1),s;case"gravel":{const o=(c,u,f,m)=>{i.fillStyle=m,i.beginPath(),i.arc(c,u,f,0,Math.PI*2),i.fill()};return o(5,11,3.2,"#7d766f"),o(11,12,3.6,"#6a645e"),o(8,7,3.6,"#8d8680"),i.fillStyle="#a49c94",i.fillRect(6,5,2,1),i.fillRect(3,9,2,1),i.fillStyle="#544e48",i.fillRect(10,14,3,1),i.fillRect(3,13,3,1),s}case"salt":return ve(i,[[3,12],[3,7],[6,3],[11,2],[13,6],[13,12]],"#d9dbd6"),ve(i,[[6,3],[11,2],[12,5],[7,6]],"#f2f4ef"),ve(i,[[3,12],[13,12],[8,14]],"#b4b8b2"),$t(i,6,7,11,8,"#c2c5bf",1),i.fillStyle="#ffffff",i.fillRect(5,6,1,1),i.fillRect(9,8,1,1),i.fillRect(11,5,1,1),s;case"deadwood":return $t(i,2,10,13,8,"#61492f",4),$t(i,2,9,13,7,"#7d5f3d",1),$t(i,4,11,11,9,"#4a3926",1),$t(i,7,9,9,3,"#61492f",2),i.fillStyle="#8a6a44",i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.fill(),i.strokeStyle="#5c4630",i.lineWidth=1,i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.stroke(),s;case"metal":return $t(i,3,13,12,3,"#9aa0aa",3),$t(i,3,12,12,2,"#c8d2da",1),$t(i,4,14,12,5,"#6a707a",1),i.fillStyle="#6a707a",i.fillRect(9,7,1,2),i.fillStyle="#e2e8f0",i.fillRect(6,9,1,1),s;case"lamp":return i.fillStyle="#fff0a0",i.globalAlpha=.28,i.beginPath(),i.arc(8,8,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,B(i,5,2,6,2,"#4a4a52"),B(i,5,2,6,1,"#6a7280"),B(i,4,4,1,9,"#3a3f46"),B(i,11,4,1,9,"#3a3f46"),B(i,5,4,6,9,"#fff0a0"),B(i,6,5,2,7,"#fff8d0"),B(i,6,10,4,2,"#e8a83c"),B(i,4,13,8,2,"#4a4a52"),s;case"regulator":{B(i,5,1,6,2,"#6a7680"),B(i,3,3,10,11,"#8a98a8"),be(i,3,3,10,11,"#3c4650"),B(i,3,3,10,2,"#aab4c0");for(let o=4;o<=11;o+=2)B(i,o,6,1,6,"#5f6c78");return B(i,7,7,3,4,"#59bfcc"),B(i,8,8,1,1,"#d2f8ff"),B(i,3,12,10,2,"#3c4650"),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),s}case"engine_core":return i.fillStyle="#c468e8",i.globalAlpha=.25,i.beginPath(),i.arc(8,8,7.5,0,Math.PI*2),i.fill(),i.globalAlpha=1,B(i,4,3,8,11,"#6a6e78"),be(i,4,3,8,11,"#3a3e46"),B(i,4,3,8,1,"#8d929c"),B(i,4,13,8,1,"#4a4e56"),i.fillStyle="#c468e8",i.beginPath(),i.arc(8,8,3.2,0,Math.PI*2),i.fill(),i.strokeStyle="#7a3a9a",i.lineWidth=1,i.beginPath(),i.arc(8,8,3.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,6,2,1),i.fillRect(7,5,1,1),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),i.fillRect(4,12,1,1),i.fillRect(11,12,1,1),s;case"seed_melon":return i.fillStyle="#c8b060",i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8f7a40",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.stroke(),i.fillStyle="#e0cc8c",i.beginPath(),i.ellipse(7,9,1.8,2.6,0,0,Math.PI*2),i.fill(),B(i,7,2,2,3,"#5a8a3a"),B(i,5,1,2,2,"#7fae54"),B(i,9,0,2,2,"#7fae54"),s;case"seed_wheat":return i.fillStyle="#d8c878",i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.fill(),i.strokeStyle="#9a8a48",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.stroke(),$t(i,8,6,8,14,"#b09a58",1),i.fillStyle="#f0e2a8",i.fillRect(6,8,1,4),$t(i,8,5,7,2,"#9a8a48",1),$t(i,8,5,9,2,"#9a8a48",1),s;case"bench":return ti(i,0,0,Xe),ti(i,0,te,gn),s}return null}const co=new Map;function xo(r){const t=co.get(r);if(t)return t;const e=Vt[r];if(!e)return co.set(r,[]),co.get(r);let s=Nu(r,e.w,e.h,e.color);if(!s&&e.block!==void 0){const[a,l]=cs(e.w*te,e.h*te);for(let h=0;h<e.h;h++)for(let o=0;o<e.w;o++)ti(l,o*te,h*te,e.block);s=a}const i=[];if(s){const[a,l]=cs(te,te);for(let h=0;h<e.h;h++)for(let o=0;o<e.w;o++)l.clearRect(0,0,te,te),l.drawImage(s,o*te,h*te,te,te,0,0,te,te),i.push(a.toDataURL())}else{const[a,l]=cs(te,te);B(l,2,2,te-4,te-4,e.color),i.push(a.toDataURL())}return co.set(r,i),i}function Ti(r,t=0){const e=Vt[r];if(!e)return"";if(e.w===1&&e.h===1)return xo(r)[0]??"";const[n,s]=cs(e.w*te,e.h*te);s.imageSmoothingEnabled=!1;const i=Nu(r,e.w,e.h,e.color);if(i)s.drawImage(i,0,0);else if(e.block!==void 0)for(let h=0;h<e.h;h++)for(let o=0;o<e.w;o++)ti(s,o*te,h*te,e.block);if(!t)return n.toDataURL();const[a,l]=cs(e.h*te,e.w*te);return l.imageSmoothingEnabled=!1,l.translate(e.h*te,0),l.rotate(Math.PI/2),l.drawImage(n,0,0),a.toDataURL()}function T_(r){const[t,e]=cs(te,te);return ti(e,0,0,r),t.toDataURL()}const Ne=r=>document.getElementById(r);let Ch=0;function ot(r){const t=Ne("toast");t.textContent=r,t.style.opacity="1",clearTimeout(Ch),Ch=setTimeout(()=>t.style.opacity="0",2600)}function A_(r){const t=Ne("prompt");if(!r){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=r}function R_(r){Ne("vision-water").style.opacity=r?"1":"0"}function C_(r){const t=Ne("blockname");if(!r){t.classList.add("hidden");return}t.textContent=r,t.classList.remove("hidden")}function I_(){const r=Ne("vision-hit");r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}let Ih="";function L_(r){const t=r.selectedSlot()?.itemId??"",e=r.slots.map(i=>i.itemId).join(",")+"|"+t;if(e===Ih)return;Ih=e;const n=[];for(const i of r.slots){const a=n.find(l=>l.itemId===i.itemId);a?a.count+=1:n.push({itemId:i.itemId,count:1})}const s=Ne("hotbar");s.innerHTML="",n.slice(0,9).forEach((i,a)=>{const l=document.createElement("div");l.className="hb-slot"+(i.itemId===t?" sel":""),l.dataset.hb=String(a);const h=document.createElement("img");h.src=Ti(i.itemId),h.alt=Vt[i.itemId].name,l.appendChild(h);const o=document.createElement("span");if(o.className="hb-key",o.textContent=String(a+1),l.appendChild(o),i.count>1){const c=document.createElement("span");c.className="hb-count",c.textContent=String(i.count),l.appendChild(c)}s.appendChild(l)})}function P_(){const r=document.querySelector("#bar-water .safe");r.style.left="25%",r.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((Zl-rs)/(rr-rs)*100).toFixed(1)+"%",t.style.right=((rr-Jl)/(rr-rs)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(s,i,a)=>{const l=document.createElement("span");l.className="dmg",l.style.left=i.toFixed(1)+"%",l.title=a,document.getElementById(s).appendChild(l)};e("bar-water",Rl,"below this, dehydration drains Health");const n=s=>(s-rs)/(rr-rs)*100;e("bar-heat",n(Al),"below this, hypothermia drains Health"),e("bar-heat",n(Tl),"above this, heat stroke drains Health")}function Lh(r,t=0,e=0,n=0,s=0,i=0){const a=document.getElementById("waypoint");if(!r){a.classList.add("hidden");return}const l=t-n,h=e-s,o=Math.atan2(l,-h)+i;Ne("wp-arrow").style.transform=`rotate(${o*180/Math.PI}deg)`,Ne("wp-name").textContent=r,Ne("wp-dist").textContent=`${Math.round(Math.hypot(l,h))} m`,a.classList.remove("hidden")}function Ph(r,t,e,n,s,i,a){const l=b=>document.querySelector(`#${b} .fill`);l("bar-health").style.width=r.health+"%",l("bar-water").style.width=r.water+"%";const h=(r.body-rs)/(rr-rs)*100;l("bar-heat").style.width=h+"%";const o=e%Ue/Ue,c=String(Math.floor(o*24)).padStart(2,"0"),u=String(Math.floor(o*24%1*60)).padStart(2,"0");Ne("clock-day").textContent="Day "+n,Ne("clock-time").textContent=c+":"+u;const f=b=>s==="C"?Math.round(b)+"°C":Math.round(b*9/5+32)+"°F";Ne("clock-temp").textContent=`air ${f(r.lastAmbientEff)}  body ${f(r.body)}`;const m=t.selectedSlot();Ne("held").textContent=m?Vt[m.itemId].name:"—",L_(t),Ne("warn-hot").classList.toggle("hidden",r.body<=Jl),Ne("warn-cold").classList.toggle("hidden",r.body>=Zl),Ne("chip-reg").classList.toggle("hidden",!a?.regulated),Ne("chip-nap").classList.toggle("hidden",!a?.napReady);const x=t.weight(),y=t.weightLimit(),v=Ne("weight");v.textContent=`${x.toFixed(1)} / ${y} kg`,v.classList.toggle("encumbered",x>y),Ne("vision-vignette").style.opacity=String(r.vision*.85);const _=r.water<5||r.health<30;Ne("vision-red").style.opacity=_?String(.35+.25*Math.sin(i/220)):"0"}const ho=r=>r===ln||r===Je||r===je||r===$e;class ue{constructor(t,e,n,s,i){this.meta=t,this.settings=s,this.audio=i,this.seed=y1(t.seedStr||t.id),this.world=new U1(this.seed),this.survival=new z1(this.seed^7),this.quests=v_(e?.quest),this.renderer=new Z1(n),this.player=new F1(this.world),this.timeSec=e?.time??Ue*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===Hn&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===Hn&&this.renderer.addPointLight(6,35,0,"lamp"),P_(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(s)}seed;world;survival;player;inv=new Ia;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null,regulator:null,light:null};lanternOn=!1;lanternAcc=0;regulatorAcc=0;collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;waterAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(xe(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===Lt&&(this.world.set(t,e,n,ke),this.chests.set(ue.chestKey([[t,e,n]]),[{itemId:"canister_full",x:0,y:0},{itemId:"canister_full",x:1,y:0},{itemId:"canister_full",x:2,y:0}]))}chestCluster(t,e,n){const s=new Set([`${t},${e},${n}`]),i=[[t,e,n]],a=[];for(;i.length;){const l=i.pop();this.world.get(l[0],l[1],l[2])===ke&&a.push(l);for(const[h,o,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=l[0]+h,f=l[1]+o,m=l[2]+c,x=`${u},${f},${m}`,y=this.world.get(u,f,m);s.has(x)||y!==ke&&y!==Tr||(s.add(x),i.push([u,f,m]))}}return a}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=Vt[e.itemId],s=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const i of s){const a=i?n.h:n.w,l=i?n.w:n.h;for(let h=0;h+l<=t.h;h++)for(let o=0;o+a<=t.w;o++)if(t.fits(o,h,a,l))return e.x=o,e.y=h,e.rot=i||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new Ia;e.slots=[];const[n,s]=ue.chestDims(t);return e.w=n,e.h=s,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,s=Math.floor(t/Fe),i=Math.floor(e/Fe);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){if(!n.townAt(s+a,i+l))continue;const h=n.townCenter(s+a,i+l);if(Math.abs(h.x-t)<=10&&Math.abs(h.z-e)<=10)return!0}return!1}townLoot(t,e){const n=i=>Rt(t,e,this.seed+i),s=[{itemId:"canister_empty",count:2}];return n(11)<.7&&s.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&s.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&s.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&s.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&s.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&s.push({itemId:"door_inner",count:1}),n(22)<.25&&s.push({itemId:"bed",count:1}),n(23)<.5&&s.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),s}openChest(t,e,n){const s=this.chestCluster(t,e,n),i=ue.chestKey(s),a=this.chests.has(i);this.chests.has(i)||this.chests.set(i,[]);const l=this.emptyChestGrid(s.length);if(l.slots=this.chests.get(i),!a&&s.some(([h,,o])=>this.inTown(h,o))){for(const h of this.townLoot(s[0][0],s[0][2]))for(let o=0;o<h.count;o++){const c={itemId:h.itemId,x:0,y:0};ue.placeSlotFree(l,c)||this.dropEntity(h.itemId,1,2)}ot("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=l,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,s){const i=this.chestCluster(t,e,n),a=this.emptyChestGrid(i.length);for(const l of s)ue.placeSlotFree(a,l)||this.dropEntity(l.itemId,1,2);a.slots.length&&this.chests.set(ue.chestKey(i),a.slots),i.length>1&&ot(`Chests linked — one ${a.w}×${a.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==ke){if(sn(this.world.get(t.x,t.y,t.z))){for(const i of t.items)for(let a=0;a<i.count;a++)this.dropEntity(i.itemId,1,2);return}this.world.set(t.x,t.y,t.z,ke)}const e=this.chestCluster(t.x,t.y,t.z),n=ue.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const s=this.emptyChestGrid(e.length);s.slots=this.chests.get(n);for(const i of t.items)for(let a=0;a<i.count;a++){const l={itemId:i.itemId,x:0,y:0};ue.placeSlotFree(s,l)||this.dropEntity(i.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body;const e=[];this.inv.slots=t.inventory.slots.map(l=>{const h=l.count??1;for(let o=1;o<h;o++)e.push({itemId:l.itemId});return{itemId:l.itemId,x:l.x,y:l.y,rot:l.rot}});for(const l of e)this.giveOrDrop(l.itemId,1);this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const l of["backpack","head","body","regulator","light"]){const h=t.equip?.[l];h&&(this.equip[l]={itemId:h,x:0,y:0,charges:t.equip?.charges?.[l]})}this.beaconMarks=t.beaconMarks??[],this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let s=0;const i=[];this.world.gen.canisters.forEach(l=>{if(l.buried&&!n.has(s)){const h=Math.round(xe(this.seed,l.x,l.z));i.push({id:this.entitySeq++,x:l.x+.5,y:h,z:l.z+.5,itemId:"canister_full",buried:l.buried,buriedAt:l.buried?[l.x,h,l.z]:void 0,srcIndex:s})}s++});for(const l of t.entities){const h=l.count??1;for(let o=0;o<h;o++)i.push({id:this.entitySeq++,x:l.x,y:l.y,z:l.z,itemId:l.itemId})}this.entities=i,this.chests=new Map((t.chests??[]).map(l=>{const h=this.emptyChestGrid(l.cells.split("|").length);for(const o of l.slots){h.slots.push({itemId:o.itemId,x:o.x,y:o.y,rot:o.rot});for(let c=1;c<(o.count??1);c++){const u={itemId:o.itemId,x:0,y:0};ue.placeSlotFree(h,u)||this.giveOrDrop(o.itemId,1)}}return[l.cells,h.slots]}));const a=[];for(const l of t.caches){const h=l.kind??"death";if(h==="chest"){a.push(l);continue}const o={id:this.entitySeq++,x:l.x,y:l.y,z:l.z,kind:h,items:l.items.map(c=>({...c}))};this.caches.push(o),o.items.length&&this.renderer.addEntityMesh(o.id,this.cacheMeshPos(o),this.cacheColor(o),.7)}this.campCharges=new Map(Object.entries(t.campfires??{}).map(([l,h])=>[l,h])),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep);for(const l of a)this.adoptLegacyChest(l);this.pods=(t.pods??[]).map(l=>({...l,ringEid:this.renderer.addGroundRing(l.x+.5,Math.round(xe(this.seed,l.x,l.z)),l.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(l.x+.5,Math.round(xe(this.seed,l.x,l.z)),l.z+.5,13382434)})),this.won=!!t.won;for(const[l,h]of this.world.deltas){const[o,c]=l.split(",").map(Number);for(const[u,f]of h){if(f!==Hn&&f!==rn)continue;const m=Math.floor(u/(J*ne)),x=u%(J*ne);this.renderer.addPointLight(o*J+m,x%ne,c*J+Math.floor(x/ne),f===Hn?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId,regulator:this.equip.regulator?.itemId,light:this.equip.light?.itemId,charges:{regulator:this.equip.regulator?.charges,light:this.equip.light?.charges}},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/Ue);this.timeSec=(e+t)*Ue}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new M_(this),this.startCine(y_,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),ot("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,s=n.find(h=>e.t<h.t1)??n[n.length-1];if(s.openDoor&&e.t>=s.openDoor.t){const{x:h,y:o,z:c}=s.openDoor;if(this.world.get(h,o,c)!==qe){this.world.set(h,o,c,qe);for(const u of[-1,1])ho(this.world.get(h,o+u,c))&&this.world.set(h,o+u,c,qe);this.audio.door()}}const i=Math.min(1,Math.max(0,(e.t-s.t0)/(s.t1-s.t0))),a=i*i*(3-2*i),l=this.renderer.camera;if(l.position.set(s.from[0]+(s.to[0]-s.from[0])*a,s.from[1]+(s.to[1]-s.from[1])*a,s.from[2]+(s.to[2]-s.from[2])*a),l.lookAt(s.look[0],s.look[1],s.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const h=n[n.length-1];this.player.yaw=Math.atan2(-(h.look[0]-h.to[0]),-(h.look[2]-h.to[2])),this.player.pitch=0;const o=this.renderer.camera;o.position.copy(this.player.eye()),o.rotation.order="YXZ",o.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&ot("Guest worlds are never saved."),!1;const e=Du(this.meta,this.snapshot());return t&&ot(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){ku(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/Ue)}questBump(t,e=1){if(this.tut)return;const n=x_(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}ot(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&ot("Power runs through the wreck. Four dead engines left — find them a way to burn."),this.renderQuest(),this.saveNow(!0)}columnTop(t,e){for(let n=ne-1;n>=0;n--)if(this.world.get(t,n,e))return n;return Math.round(xe(this.seed,t,e))}crashPod(t,e){const n=this.player.pos,s=Math.round(n.x)+2,i=Math.round(n.z)+1,a=this.columnTop(s,i),l=this.renderer.addGroundRing(s+.5,a,i+.5,13382434,1.1),h=this.renderer.addBeam(s+.5,a,i+.5,13382434);this.pods.push({x:s,z:i,t:3,itemId:t,n:e,ringEid:l,beamEid:h}),this.audio.warn(),setTimeout(()=>{this.running&&ot("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const s=this.columnTop(n.x,n.z);this.caches.push({id:this.entitySeq++,x:n.x,y:s,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,s+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),ot("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){Lh(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const i=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;i!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=i,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else Lh(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const s=new Map;if(this.equip.head?.itemId==="visor"){for(const i of this.caches)i.items.length&&s.set(`c${i.id}`,[i.x+.5,i.y,i.z+.5,i.kind==="reward"?14197322:13386803]);for(const i of this.chests.keys()){const[a,l,h]=i.split(";")[0].split(",").map(Number);s.set(`x${i}`,[a+.5,l,h+.5,15124842])}}for(const[i,a]of this.visorBeams)s.has(i)||(this.renderer.removeEntityMesh(a),this.visorBeams.delete(i));for(const[i,[a,l,h,o]]of s)this.visorBeams.has(i)||this.visorBeams.set(i,this.renderer.addBeam(a,l,h,o,10))}waypointTarget(){const t=ar(this.quests);if(!t)return null;const e=this.player.pos,n=(i,a)=>Math.round(xe(this.seed,i,a))+1,s=i=>{let a=i[0],l=1/0;for(const h of i){const o=(h.x-e.x)**2+(h.z-e.z)**2;o<l&&(l=o,a=h)}return a};switch(t.kind){case"oasis":{const i=s(this.world.gen.oases);return i?{name:"Oasis",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"water_home":case"finish":{const i=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(a=>this.world.get(a.x,a.y,a.z)===Mn);return i?{name:"Save Beacon",x:i.x+.5,y:i.y,z:i.z+.5}:null}case"wreck":{const i=this.world.gen.secondShip;return{name:"Second Wreck",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"core":{const i=this.world.gen.secondShip;return{name:"Engine Core",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"tool":{const i=[];this.world.get(0,31,-3)===Xe&&i.push({x:0,y:31,z:-3});for(const[l,h]of this.world.deltas){const[o,c]=l.split(",").map(Number);for(const[u,f]of h){if(f!==Xe)continue;const m=u%ne,x=Math.floor(u/ne)%J,y=Math.floor(u/(ne*J));i.push({x:o*J+y,y:m,z:c*J+x})}}if(!i.length)return null;const a=s(i);return{name:"Crafting Bench",x:a.x+.5,y:a.y,z:a.z+.5}}case"supplies":{const i=this.world.gen.nearestTown(e.x,e.z);return i?{name:"Town",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"farm":{if(!this.crops.size)return null;let i=null,a=1/0;for(const c of this.crops.keys()){const[u,,f]=c.split(",").map(Number),m=(u+.5-e.x)**2+(f+.5-e.z)**2;m<a&&(a=m,i=c)}const[l,h,o]=i.split(",").map(Number);return{name:"Your Farm",x:l+.5,y:h+1,z:o+.5}}default:return null}}questFrame(){const t=ar(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===Mn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=ar(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],s=e.id+":"+n;s!==this.questShown&&(this.questShown=s,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,s,i=window)=>{i.addEventListener(n,s),this.bound.set(n+(i===window?"":":el"),s)};t("keydown",n=>{const s=n;if(!s.repeat){if(this.keys.add(s.code),s.code==="KeyE"&&this.act(),s.code==="KeyQ"&&this.useItem(),s.code==="KeyX"&&this.surge(),s.code==="KeyT"&&this.toggleLantern(),s.code==="KeyI"&&this.toggleInv(),s.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,a=i.selectedSlot();a&&!i.rotate(a)&&(ot("No room to rotate."),this.audio.error())}this.renderInv()}if(s.code==="Escape"){if(this.liftoff)return;if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(s.code==="KeyP"&&!this.liftoff&&this.escape(!0),s.code.startsWith("Digit")){const i=Number(s.code.slice(5)),a=this.hotbarItems();if(i>=1&&i<=a.length){const l=a[i-1];this.inv.selectedSlot()?.itemId===l?this.inv.selected=-1:this.selectItem(l),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const s=n.target.closest("[data-hb]");if(!s)return;const i=this.hotbarItems()[Number(s.dataset.hb)];i&&(this.inv.selectedSlot()?.itemId===i?this.inv.selected=-1:this.selectItem(i),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const s=n;s.button===0?(this.mouseDown=!0,this.breakMsg=!1):s.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const s=n;this.player.yaw-=s.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*s.movementY*.0022*this.settings.sens,this.player.pitch=zi.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>{this.ui||this.cycleItem(n.deltaY>0?1:-1)}),t("contextmenu",n=>n.preventDefault());else{let n=-1,s=0,i=0;e.addEventListener("touchstart",m=>{if(n<0){const x=m.changedTouches[0];n=x.identifier,s=x.clientX,i=x.clientY}m.preventDefault()}),e.addEventListener("touchmove",m=>{for(const x of m.changedTouches)x.identifier===n&&(this.player.yaw-=(x.clientX-s)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(x.clientY-i)*.005*this.settings.sens,this.player.pitch=zi.clamp(this.player.pitch,-1.55,1.55),s=x.clientX,i=x.clientY);m.preventDefault()});const a=m=>{for(const x of m.changedTouches)x.identifier===n&&(n=-1)};e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),document.addEventListener("contextmenu",m=>m.preventDefault());const l=document.getElementById("stick"),h=document.getElementById("knob");let o=-1;const c=m=>{const x=l.getBoundingClientRect();for(const y of m.changedTouches)if(y.identifier===o){const v=y.clientX-(x.left+x.width/2),_=y.clientY-(x.top+x.height/2),b=Math.max(1,Math.hypot(v,_)),w=Math.min(b,x.width/2)/(x.width/2);this.stick.x=v/b*w,this.stick.y=_/b*w,h.style.left=38+v/b*w*38+"px",h.style.top=38+_/b*w*38+"px"}};l.addEventListener("touchstart",m=>{o=m.changedTouches[0].identifier,c(m),m.preventDefault()}),l.addEventListener("touchmove",m=>{c(m),m.preventDefault()});const u=()=>{this.stick.x=0,this.stick.y=0,o=-1,h.style.left="38px",h.style.top="38px"};l.addEventListener("touchend",u),l.addEventListener("touchcancel",u);const f=(m,x,y)=>{const v=document.getElementById(m);v.addEventListener("touchstart",_=>{_.preventDefault(),x()}),v.addEventListener("touchend",_=>{_.preventDefault(),y&&y()}),v.addEventListener("touchcancel",()=>{y&&y()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-lamp",()=>this.toggleLantern()),f("m-next",()=>this.cycleItem(1)),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=s=>!document.getElementById(s).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document)}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),s=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,s),this.renderer.rebuildDirty(this.world);const i=this.renderer.updateSky(this.timeSec,this.player.pos),a=_o(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),l=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let u=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(u-=1),this.keys.has("KeyD")&&(u+=1);const m=this.keys.has("Space")||this.mobileJump;this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,u,f,m,this.speedMul,l);const y=(this.timeSec%Ue/Ue-.25)*Math.PI*2,v=i.sunElev>0?(()=>{const w=1/Math.hypot(Math.cos(y),i.sunElev,.4);return{x:Math.cos(y)*w,y:i.sunElev*w,z:.4*w}})():null;this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(u!==0||f!==0),overencumbered:l,biome:a,tSec:this.timeSec,sunElev:i.sunElev,sunDir:v,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos),regulator:(this.equip.regulator?.charges??0)>0,terrainH:(w,S)=>xe(this.seed,w,S)});const _=this.equip.regulator;_&&(_.charges??0)>0&&(this.regulatorAcc+=t,this.regulatorAcc>=2880&&(this.regulatorAcc=0,_.charges=(_.charges??0)-1,_.charges<=0?(_.charges=0,ot("The Coolant Cell in your Regulator is spent."),this.audio.error()):ot("A Coolant Cell has been used up.")));const b=this.equip.light;this.lanternOn&&b&&((b.charges??0)<=0?this.toggleLantern():(this.lanternAcc+=t,this.lanternAcc>=240&&(this.lanternAcc=0,b.charges=(b.charges??0)-1,(b.charges??0)<=0&&(this.toggleLantern(),ot("The Head Lantern gutters out — refuel it at a Campfire."))))),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const u=this.renderer.camera;u.position.copy(this.player.eye()),u.rotation.order="YXZ",u.rotation.set(this.player.pitch,this.player.yaw,0),this.liftoff&&(u.position.x+=(Math.random()-.5)*.14,u.position.y+=(Math.random()-.5)*.1,u.position.z+=(Math.random()-.5)*.14)}this.liftoffFrame(t);const h=this.raycastTarget();this.renderer.setPlayerLight(this.lanternOn?this.player.eye():null),this.renderer.setHighlight(this.ui||this.cine?null:h?.hit??null),A_(this.ui||this.cine?null:this.promptFor(h)),C_(this.ui||this.cine||!h?.hit?null:ii[this.world.get(h.hit.x,h.hit.y,h.hit.z)].name),R_(this.player.headUnder);for(const u of this.entities){if(u.fall!==void 0){const m=Math.min(u.fall,14*t);u.y-=m,u.fall-=m,u.fall<=.001&&(u.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(u.id,[u.x,u.y,u.z])}const f=this.renderer.entityMesh(u.id);u.buried&&u.buriedAt&&this.world.get(u.buriedAt[0],u.buriedAt[1],u.buriedAt[2])!==Lt?f&&this.renderer.removeEntityMesh(u.id):f||this.renderer.addEntityMesh(u.id,[u.x,u.y,u.z],parseInt(Vt[u.itemId].color.slice(1),16))}for(const u of this.caches){const f=this.renderer.entityMesh(u.id);!f&&u.items.length?(this.renderer.addEntityMesh(u.id,this.cacheMeshPos(u),this.cacheColor(u),.7),u.markerEid=this.renderer.addGroundRing(u.x+.5,u.y,u.z+.5,u.kind==="reward"?14197322:13382434,1.4)):f&&!u.items.length&&(this.renderer.removeEntityMesh(u.id),u.markerEid!==void 0&&(this.renderer.removeEntityMesh(u.markerEid),u.markerEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const o=this.survival.surgeCooldown>0;for(const u of["surge-btn","m-surge"]){const f=document.getElementById(u);f&&f.disabled!==o&&(f.disabled=o)}Ph(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),napReady:this.timeSec-this.lastSleep>=Ue}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.waterAcc+=t,this.waterAcc>.4&&(this.waterAcc=0,this.world.processWater()),this.audio.setDay(i.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const c=this.prevHp-this.survival.health;if(c>0){const u=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(c>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,I_(),(c>=2||u)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new U;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),s=Math.floor(t.y),i=Math.floor(t.z);const a=new U(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),l=new U(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),h=(f,m)=>m>0?Math.ceil(f)-f||1:m<0?f-Math.floor(f)||1:1/0,o=new U(h(t.x,a.x)*l.x,h(t.y,a.y)*l.y,h(t.z,a.z)*l.z);let c=new U(n,s,i),u=null;for(let f=0;f<80;f++){const m=this.world.get(n,s,i);if($n(m)){if(u||(u={x:n,y:s,z:i}),m===Ze)return{hit:{x:n,y:s,z:i},water:u,face:new U(c.x-n,c.y-s,c.z-i)}}else if(m!==Lt&&m!==Ze)return{hit:{x:n,y:s,z:i},water:u,face:new U(c.x-n,c.y-s,c.z-i)};if(c.set(n,s,i),o.x<o.y&&o.x<o.z?(n+=a.x,o.x+=l.x):o.y<o.z?(s+=a.y,o.y+=l.y):(i+=a.z,o.z+=l.z),new U(n-t.x,s-t.y,i-t.z).length()>5.5)break}return{hit:null,water:u,face:new U(0,0,0)}}promptFor(t){if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===ke)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===ln||n===Je)return"E: Open door";if(n===qe)return"E: Close door";if(n===Mn)return"E: Save game (respawn point)";if(n===Xe||n===gn)return"E: Craft";if(n===rn)return"E: Smelt";if(n===Ri)return"E: Draw neutral air (37 °C)";if(n===Gi)return this.inv.has("thruster_nozzle",1)?"E: Install Thruster Nozzle":null}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new U(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=this.inv.selectedSlot();if(e&&Vt[e.itemId].instaBreak)return{ok:!0,time:.01};const n=ii[t];if(n.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const s=e?Vt[e.itemId].tool:void 0;return n.tool!==null?!s||s.type!==n.tool?{ok:!1,time:0,why:`need a ${n.tool}`}:s.tier<n.minTier?{ok:!1,time:0,why:`need a tier ${n.minTier} ${n.tool}`}:{ok:!0,time:n.breakTime*Math.pow(.55,s.tier-1)}:{ok:!0,time:n.breakTime*(n.fastTool&&s&&s.type===n.fastTool?Math.pow(.55,s.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const h=this.inv.selectedSlot(),o=h?Vt[h.itemId]:null,c=o?.weapon;e.hp-=c?c.dmg:3+(o?.tool?.tier??0),this.audio.thud();const u=e.x-this.player.pos.x,f=e.z-this.player.pos.z,m=Math.max(.2,Math.hypot(u,f)),x=c?1.1:.6;this.mobCanStand(e,e.x+u/m*x,e.z+f/m*x)&&(e.x+=u/m*x,e.z+=f/m*x,e.y=this.mobGround(e,e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:s,y:i,z:a}=n.hit,l=this.world.get(s,i,a);if(!this.breaking||this.breaking.x!==s||this.breaking.y!==i||this.breaking.z!==a){const h=this.canBreakWith(l);if(!h.ok){h.why&&!this.breakMsg&&(this.breakMsg=!0,ot(h.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${h.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:s,y:i,z:a,need:h.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(s,i,a),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const s=this.world.get(t,e,n);if(this.questBump("mine"),ho(s)||s===qe||s===on){const a=s===je||s===$e||s===on;this.world.set(t,e,n,Lt);for(const l of[-1,1]){const h=this.world.get(t,e+l,n);(ho(h)||h===qe||h===on)&&this.world.set(t,e+l,n,Lt)}this.giveOrDrop(a?"door_inner":"door",1),this.audio.blockBreak();return}if(s===Mn){this.world.set(t,e,n,Lt),this.beaconMarks=this.beaconMarks.filter(a=>!(a.x===t&&a.y===e&&a.z===n)),ot("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(s===cn){this.world.set(t,e,n,Lt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(s===hi){this.world.set(t,e,n,Lt),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(s===Vn){this.world.set(t,e,n,Lt),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(s===Pn||s===Gn||s===pn||s===Wn){this.world.set(t,e,n,s===pn||s===Wn?kn:Lt),this.crops.delete(`${t},${e},${n}`),s===Pn&&this.giveOrDrop("dune_melon",1),s===pn&&(this.giveOrDrop("wheat",1),this.giveOrDrop("seed_wheat",1)),s===Gn&&this.giveOrDrop("seed_melon",1),s===Wn&&this.giveOrDrop("seed_wheat",1),this.audio.blockBreak();return}if(s===mi){this.world.set(t,e,n,Lt),this.giveOrDrop("kindling",1),Rt(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(s===an||s===wn){this.world.set(t,e,n,Lt);const a=t+(s===an?1:-1),l=this.world.get(a,e,n);(l===an||l===wn)&&this.world.set(a,e,n,Lt),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(s===rn&&this.campCharges.delete(`${t},${e},${n}`),s===ke){const a=this.chestCluster(t,e,n),l=this.chests.get(ue.chestKey(a))??[];this.chests.delete(ue.chestKey(a)),this.world.set(t,e,n,Lt);const h=a.filter(([u,f,m])=>u!==t||f!==e||m!==n),o=[];for(const u of h){const f=this.chestCluster(u[0],u[1],u[2]),m=ue.chestKey(f);o.some(([x])=>x===m)||o.push([m,this.emptyChestGrid(f.length)])}let c=!1;for(const u of l)o.some(([,f])=>ue.placeSlotFree(f,u))||(this.dropEntity(u.itemId,1,2),c=!0);for(const[u,f]of o)f.slots.length&&this.chests.set(u,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),c&&ot("The remaining chests were full — some contents fell to the sand.");return}if(s===Hi){this.world.set(t,e,n,Lt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(s===Xe||s===gn){const a=this.benchPeer(t,e,n);this.world.set(t,e,n,Lt),a&&this.world.set(a[0],a[1],a[2],Lt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(s===Hn||s===rn)&&this.renderer.removePointLight(t,e,n),this.world.set(t,e,n,Lt);const i=this.blockItemId(s);i&&this.giveOrDrop(i,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),s=Math.floor(e),i=Math.max(30,Math.round(xe(this.seed,n,s))+8);for(let a=i;a>=0;a--){const l=this.world.get(n,a,s);if(l!==Lt&&ii[l].solid)return a+1}return-1}mobGround(t,e,n){if(t.kind!=="scorpion"&&t.kind!=="wurm")return this.mobSurface(e,n);const s=Math.floor(e),i=Math.floor(n);for(let a=Math.floor(t.y);a>=0;a--){const l=this.world.get(s,a,i);if(l!==Lt&&ii[l].solid)return a+1}return-1}mobCanStand(t,e,n){const s=this.mobGround(t,e,n);return s<0||s>t.y+1.01?!1:this.world.get(Math.floor(e),s,Math.floor(n))===Lt}spawnMob(t,e,n,s){const i=m_(t);i.group.position.set(e,n,s),i.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(i.group),this.mobs.push({kind:t,hp:lo[t].hp,x:e,y:n,z:s,yaw:i.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:i})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(n=>n!==t);const e=lo[t.kind];e.drops.forEach((n,s)=>{const i=e.dropChance?.[s]??1;(i>=1||Math.random()<i)&&this.giveOrDrop(n.itemId,n.count)}),ot(`${e.name} killed.`)}topUpMobs(){const t={snake:4,rat:8,scorpion:4,wurm:1},e={snake:0,rat:0,scorpion:0,wurm:0},n=this.player.pos;this.mobs=this.mobs.filter(i=>Math.abs(i.x-n.x)+Math.abs(i.z-n.z)>190?(this.renderer.removeSceneObject(i.vis.group),!1):!0);for(const i of this.mobs)e[i.kind]++;const s=this.player.pos;for(const i of["snake","rat","scorpion","wurm"]){const a=i==="scorpion"||i==="wurm";if(!(a&&s.y>27))for(;e[i]<t[i];){e[i]++;const l=Math.random()*Math.PI*2,h=30+Math.random()*30,o=Math.floor(s.x+Math.cos(l)*h)+.5,c=Math.floor(s.z+Math.sin(l)*h)+.5;if(a){const u=i==="wurm"?5:8,f=i==="wurm"?16:24,m=this.caveSpot(o,c,u,f);if(m<0)continue;this.spawnMob(i,o,m,c)}else{if(Math.hypot(o,c)<24||this.beaconMarks.some(f=>Math.hypot(f.x+.5-o,f.z+.5-c)<16))continue;const u=this.mobSurface(o,c);if(u<=1||this.world.get(Math.floor(o),u,Math.floor(c))!==Lt||this.world.get(Math.floor(o),u+1,Math.floor(c))!==Lt)continue;this.spawnMob(i,o,u,c)}}}}caveSpot(t,e,n,s){const i=Math.floor(t),a=Math.floor(e);for(let l=s;l>=n;l--){if(this.world.get(i,l,a)!==Lt||this.world.get(i,l-1,a)===Lt||this.world.get(i,l+1,a)!==Lt)continue;let h=-1;for(let o=1;o<=3;o++)if(sn(this.world.get(i,l+o,a))){h=o;break}if(!(h<0))return l}return-1}meleeMob(){const t=this.player.eye(),e=new U;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),s=n?Vt[n.itemId].weapon?.reach??3.2:3.2,i=this.raycastTarget(),a=i?.hit?Math.hypot(i.hit.x+.5-t.x,i.hit.y+.5-t.y,i.hit.z+.5-t.z):1/0;let l=null,h=1/0;for(const o of this.mobs){const c=lo[o.kind],u=o.x-t.x,f=o.y+c.height/2-t.y,m=o.z-t.z,x=u*e.x+f*e.y+m*e.z;if(x<.2||x>s||x>a)continue;const y=t.x+e.x*x-o.x,v=t.y+e.y*x-(o.y+c.height/2),_=t.z+e.z*x-o.z;y*y+v*v+_*_>(c.hitR+.3)*(c.hitR+.3)||x<h&&(h=x,l=o)}return l}columnClear(t,e,n,s){const i=Math.floor(t),a=Math.floor(e);for(let l=Math.floor(n);l<=Math.floor(s);l++){const h=this.world.get(i,l,a);if(h!==Lt&&h!==Ze)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const s of this.mobs.slice()){const i=lo[s.kind],a=e.x-s.x,l=e.z-s.z,h=Math.hypot(a,l);if(h>110){this.renderer.removeSceneObject(s.vis.group),this.mobs=this.mobs.filter(m=>m!==s);continue}let o=0,c=0;const u=this.columnClear(s.x,s.z,s.y+.2,e.y+1.4);if(i.aggroR>0&&h<i.aggroR&&h>.01&&u){if(o=a/h*i.speed,c=l/h*i.speed,s.yaw=Math.atan2(o,c),h<1.2+i.hitR&&s.biteCd<=0){s.biteCd=i.biteCd;const m=1-(this.equip.body?Vt[this.equip.body.itemId].armor??0:0);this.survival.hurt(i.biteDmg*m,`${i.name.toLowerCase()} bite`),ot(m<1?`A ${i.name.toLowerCase()} bites you — the armour soaks some of it.`:`A ${i.name.toLowerCase()} bites you!`)}}else i.fleeR>0&&h<i.fleeR&&h>.01?(o=-a/h*i.speed,c=-l/h*i.speed,s.yaw=Math.atan2(o,c)):(s.wanderT-=t,s.wanderT<=0&&(s.wanderT=2+Math.random()*4,s.wanderYaw=Math.random()*Math.PI*2,s.wanderOn=Math.random()<.55),s.wanderOn&&(o=Math.sin(s.wanderYaw)*i.speed*.35,c=Math.cos(s.wanderYaw)*i.speed*.35,s.yaw=s.wanderYaw));s.biteCd-=t;let f=0;if(o!==0||c!==0){const m=s.x+o*t,x=s.z+c*t;this.mobCanStand(s,m,x)?(s.x=m,s.z=x,f=1):s.wanderYaw=s.yaw=Math.random()*Math.PI*2}s.y=this.mobGround(s,s.x,s.z),s.vis.group.position.set(s.x,s.y,s.z),s.vis.group.rotation.y=s.yaw,s.vis.animate(n,f)}}gridFits(t,e){const n=new Ia;n.slots=[],n.w=t,n.h=e;for(const s of this.inv.slots)if(!ue.placeSlotFree(n,{...s,x:0,y:0}))return!1;return!0}bagSize(){return(this.equip.backpack?Vt[this.equip.backpack.itemId].bag:null)??{w:3,h:4,kg:0}}applyEquip(){const t=this.bagSize();(this.inv.w!==t.w||this.inv.h!==t.h)&&this.inv.setBackpack(t.w,t.h,t.kg),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=Vt[t.itemId];if(!e.equip)return;const n=e.equip,s=this.equip[n];if(s&&this.inv.addItem(s.itemId,1)>0){ot("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),n==="light"&&(this.lanternOn=!1),(n==="light"||n==="regulator")&&t.charges===void 0&&(t.charges=0),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),ot(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(!e)return;const n=t==="backpack"?{w:3,h:4}:this.bagSize();if(!this.gridFits(n.w,n.h)){ot("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,t==="light"&&(this.lanternOn=!1),this.applyEquip(),this.inv.addItem(e.itemId,1),this.audio.place(),ot(`${Vt[e.itemId].name} taken off.`),this.renderInv()}benchPeer(t,e,n){for(const[s,i]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=this.world.get(t+s,e,n+i);if(a===Xe||a===gn)return[t+s,e,n+i]}return null}blockItemId(t){return jn[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),ot(`No room: dropped ${Vt[t].name}`))}dropEntity(t,e,n=0){const s=this.player.pos,i=-Math.sin(this.player.yaw),a=-Math.cos(this.player.yaw),l=(u,f)=>{const m=Math.floor(s.x+u),x=Math.floor(s.z+f);return!sn(this.world.get(m,Math.floor(s.y),x))&&!sn(this.world.get(m,Math.floor(s.y+1),x))},h=[[i*1.8,a*1.8],[-i*1.8,-a*1.8],[a*1.8,-i*1.8],[-a*1.8,i*1.8],[0,0]],[o,c]=h.find(([u,f])=>l(u,f))??[0,0];for(let u=0;u<e;u++){const f=u===0?0:.3*Math.sin(u*2.4),m=u===0?0:.3*Math.cos(u*2.4);this.entities.push({id:this.entitySeq++,x:s.x+o+f,y:s.y+.35,z:s.z+c+m,itemId:t,repickAt:o===0&&c===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=Vt[t.itemId];if(e.block===void 0){ot("Not a placeable block"),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const s=n.hit.x+n.face.x,i=n.hit.y+n.face.y,a=n.hit.z+n.face.z;if(this.world.get(s,i,a)!==Lt)return;if(sn(e.block)){const o=this.player.pos;if(s+1>o.x-.3&&s<o.x+.3&&a+1>o.z-.3&&a<o.z+.3&&i+1>o.y&&i<o.y+1.8)return}let l=[];if(e.block===ke){const o=new Set;for(const[c,u,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(s+c,i+u,a+f)!==ke)continue;const m=ue.chestKey(this.chestCluster(s+c,i+u,a+f));o.has(m)||(o.add(m),l.push(...this.chests.get(m)??[]),this.chests.delete(m))}}let h=null;if(e.block===Xe){const o=this.player.pos;for(const[c,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=s+c,m=a+u;if(this.world.get(f,i,m)===Lt&&!(f+1>o.x-.3&&f<o.x+.3&&m+1>o.z-.3&&m<o.z+.3&&i+1>o.y&&i<o.y+1.8)){h=[f,i,m];break}}if(!h){ot("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(e.block===Gn||e.block===Wn||e.block===cn||e.block===Vn){const o=this.world.get(s,i-1,a);if(!(e.block===Vn?o===Kn||o===kn||o===si:o===kn||e.block===cn&&(o===Yn||o===vn||o===Kn))){ot(e.block===Vn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(s,i,a,e.block),h&&this.world.set(h[0],h[1],h[2],gn),e.block===ln&&this.world.get(s,i+1,a)===Lt&&this.world.set(s,i+1,a,Je),e.block===je&&this.world.get(s,i+1,a)===Lt&&this.world.set(s,i+1,a,$e),e.block===an&&this.world.get(s+1,i,a)===Lt&&this.world.set(s+1,i,a,wn),(e.block===Gn||e.block===Wn)&&(this.crops.set(`${s},${i},${a}`,0),this.tut?.notify("plant")),e.block===Vn&&(this.trees.set(`${s},${i},${a}`,0),this.tut?.notify("plant"),ot("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===Hi)if(this.beaconAdjacent(s,i,a)){const o=ar(this.quests);o&&o.kind==="finish"&&!this.tut?this.questBump("finish"):ot("The Core hums next to the beacon. Power runs — now wake the wingtip engines.")}else ot("The relay needs the Core right next to a Save Beacon.");e.block===Hn?this.renderer.addPointLight(s,i,a,"lamp"):e.block===rn&&this.renderer.addPointLight(s,i,a,"fire"),e.block===ke&&this.linkChests(s,i,a,l),this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}beaconAdjacent(t,e,n){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([s,i,a])=>this.world.get(t+s,e+i,n+a)===Mn)}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget();if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===ke){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const e=this.nearestCache();if(e){this.openCacheId=e.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:n,y:s,z:i}=t.hit,a=this.world.get(n,s,i);if(a===Pn||a===pn||a===hi){this.harvest(n,s,i,a);return}if(a===an||a===wn){this.sleep();return}if(ho(a)||a===qe||a===on){const l=a===je||a===$e||a===on,h=l?on:qe,o=f=>l?f===je||f===$e:f===ln||f===Je,c=l?je:ln,u=l?$e:Je;if(a===h){const f=this.player.pos;if(f.x>n-.2&&f.x<n+1.2&&f.z>i-.2&&f.z<i+1.2){ot("Step out of the doorway first."),this.audio.error();return}this.world.get(n,s-1,i)===h?(this.world.set(n,s,i,u),this.world.set(n,s-1,i,c)):this.world.get(n,s+1,i)===h?(this.world.set(n,s,i,c),this.world.set(n,s+1,i,u)):this.world.set(n,s,i,o(this.world.get(n,s+1,i))?u:c)}else{const f=sn(this.world.get(n-1,s,i))||sn(this.world.get(n+1,s,i)),m=this.player.pos,x=f?m.z-(i+.5):m.x-(n+.5),y=n+","+i;Math.abs(x)>.35?this.world.doorSwing.set(y,x>0?-1:1):this.world.doorSwing.delete(y),this.world.set(n,s,i,h);for(const v of[-1,1])o(this.world.get(n,s+v,i))&&this.world.set(n,s+v,i,h);this.tut?.notify("door")}this.audio.door();return}if(a===Mn){this.tut?.notify("save"),this.beaconMarks.some(l=>l.x===n&&l.y===s&&l.z===i)||this.beaconMarks.push({x:n,y:s,z:i}),this.audio.savePing(),this.saveNow()?ot("Saved. Death will respawn you at this beacon."):ot("This world is not saved — the beacon only marks it.");return}if(a===Xe||a===gn){this.openStation=[n,s,i],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(a===rn){this.openStation=[n,s,i],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(a===Gi){if(!this.inv.has("thruster_nozzle",1)){this.audio.error(),ot("A dead wingtip engine. It needs a Thruster Nozzle — Cobalt from the deep Caves.");return}this.inv.removeItem("thruster_nozzle",1),this.world.set(n,s,i,gr),this.renderer.addPointLight(n,s,i,"fire"),this.questBump("thruster"),this.audio.door(),this.audio.win(),ot("Nozzle seated. The engine coughs, catches, holds."),!this.liftoff&&this.thrustersAllLit()&&this.startLiftoff();return}if(a===Ri){let l=null;for(const[h,o,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=this.world.roomInfo(n+h,s+o,i+c);if(u.size>0){l=u;break}}l&&l.sealed&&l.regulators*Ao>=l.size?(this.survival.body=37,this.audio.drink(),ot("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),ot("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.selectedSlot()?.itemId==="bucket"){ot("E won't fill it — press Q or right-click with the Bucket to scoop."),this.audio.error();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),ot(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):ot("You need an empty Water Canister.")}}}harvest(t,e,n,s){s===Pn?(this.world.set(t,e,n,Gn),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(Rt(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),ot("Dune Melon picked — the plant keeps growing.")):s===pn?(this.world.set(t,e,n,kn),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),ot("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,cn),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),ot("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<Ue){const n=Math.ceil((Ue-t)/60);ot(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=Ue/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),ot("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z);let i=0;for(let a=-6;a<=6;a++)for(let l=-6;l<=6;l++)for(let h=-2;h<=2;h++){if(this.world.get(e+a,n+h,s+l)!==rn)continue;const o=Math.max(Math.abs(a),Math.abs(l));i=Math.max(i,o<=4?18:9)}return i}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,s]of this.crops){const[i,a,l]=n.split(",").map(Number),h=this.world.get(i,a,l);if(h!==Gn&&h!==Pn&&h!==Wn&&h!==pn){this.crops.delete(n);continue}if(h===Pn||h===pn)continue;const o=h===Gn;let c=!1;t:for(let m=-4;m<=4;m++)for(let x=-4;x<=4;x++)for(let y=-2;y<=1;y++)if($n(this.world.get(i+m,a+y,l+x))){c=!0;break t}const u=this.survival.airTempAt(this.world,i,a,l,this.timeSec),f=o?u>=22&&u<=45:u>=2&&u<=42;if(c&&f){const m=s+e;this.crops.set(n,m),m>=(o?60:90)&&this.world.set(i,a,l,o?Pn:pn)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){ot("Aim at water."),this.audio.error();return}const{x:e,y:n,z:s}=t.water;if(this.world.get(e,n,s)!==Ze){ot("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){ot("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,s,Lt),this.audio.drink(),ot("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,s=t.hit.z+t.face.z;if(this.world.get(e,n,s)!==Lt){ot("Pour into open space."),this.audio.error();return}this.world.set(e,n,s,Ze),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),ot("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,s]of this.trees){const[i,a,l]=n.split(",").map(Number),h=this.world.get(i,a,l);if(h!==Vn&&h!==Xn){this.trees.delete(n);continue}let o=!1;t:for(let m=-6;m<=6;m++)for(let x=-6;x<=6;x++)for(let y=-3;y<=3;y++)if($n(this.world.get(i+m,a+y,l+x))){o=!0;break t}if(!o)continue;const c=Math.min(480,s+e);this.trees.set(n,c);const u=c>=480?3:c>=270?2:c>=120?1:0;if(u===0)continue;let f=this.treePlanCache.get(n);if(!f){let m=Math.floor(Rt(i+7*l,a,this.seed+55)*1e9)+1;f=Mu(i,a,l,()=>(m=m*1103515245+12345&2147483647,m/2147483647)),this.treePlanCache.set(n,f)}for(const m of f){if(m.stage>u)continue;const x=this.world.get(m.x,m.y,m.z);(x===Lt||x===Vn)&&this.world.set(m.x,m.y,m.z,m.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z);for(let i=-1;i<=1;i++)for(let a=-1;a<=1;a++)for(let l=0;l<=2;l++){const h=this.world.get(e+i,n+l,s+a);if(!(h!==cn&&h!==hi)&&!(Math.abs(t.x-(e+i+.5))>1.15||Math.abs(t.z-(s+a+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),ot("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){ot("Select an item first."),this.audio.error();return}const e=Vt[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(t.itemId==="bucket"){this.bucketScoop();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:s,y:i,z:a}=n.hit,l=this.world.get(s,i,a);if(n.face.y===1&&(l===Kn||l===si)){this.world.set(s,i,a,kn),this.audio.place(),ot("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(l===Yn||l===vn||l===fs)){ot("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}ot(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),ot(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){ot("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&ot("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}toggleLantern(){const t=this.equip.light;if(!t){ot("Nothing in your Light slot. A Head Lantern lights the dark."),this.audio.error();return}if(this.lanternOn){this.lanternOn=!1;return}if((t.charges??0)<=0){ot("The lantern is dry — press E at a Campfire to refuel it."),this.audio.error();return}this.lanternOn=!0,this.lanternAcc=0,ot("Head Lantern on. T puts it out.")}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){ot("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){ot("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),ot("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),s=Math.floor(e.y),i=Math.floor(e.z);let a=this.world.roomInfo(n,s,i);if(a.size===0)t:for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++){const f=this.world.roomInfo(n+o,s+c,i+u);if(f.size>0){a=f;break t}}const l=a.sealed&&a.regulators>0&&a.regulators*Ao>=a.size;this.regActive=l;const h=new Set(l?a.regCells:[]);for(const[o,c]of this.regGlow){if(h.has(o))continue;this.renderer.removeEntityMesh(c);const[u,f,m]=o.split(",").map(Number);this.renderer.removePointLight(u,f,m),this.regGlow.delete(o)}for(const o of h){if(this.regGlow.has(o))continue;const[c,u,f]=o.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new Ye({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,x=this.renderer.addEntityMesh(m,[c+.5,u+.5,f+.5],9427199,1.03);x.material=this.regGlowMat,this.renderer.addPointLight(c,u,f,"cool"),this.regGlow.set(o,m)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==Lt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}t.distanceTo(new U(n.x,n.y,n.z))<1.3&&this.inv.addItem(n.itemId,1)===0&&(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup())}}}static SHIP_IDS=new Set([Le,Sn,pi,Ci,ps,ln,Je,qe,je,$e,on,Hn,Mn,Xe,gn,Ri,Hi,an,wn]);liftoff=null;thrustersAllLit(){let t=0;for(let e=29;e<=37;e++)for(let n=-8;n<=6;n++)for(let s=-13;s<=13;s++){const i=this.world.get(n,e,s);if(i===Gi)return!1;i===gr&&t++}return t>=4}startLiftoff(){const t=[];for(let n=37;n>=29;n--){const s=[];for(let i=-8;i<=6;i++)for(let a=-13;a<=13;a++){const l=this.world.get(i,n,a);ue.SHIP_IDS.has(l)&&s.push([i,n,a,l])}s.length&&t.push(s)}this.liftoff={t:0,rows:t,step:0,restored:0},this.ui="liftoff",document.pointerLockElement&&document.exitPointerLock();const e=document.getElementById("lift-fx");e.classList.remove("hidden"),e.textContent="ENGINE IGNITION",ot("The whole Ship shudders. Every plate rattles at once."),this.audio.win()}liftoffFrame(t){const e=this.liftoff;if(!e)return;e.t+=t;const n=2.2/e.rows.length,s=2.4,i=4.6,a=i+2.2,l=document.getElementById("lift-fx");for(l.textContent=e.t<s?"LIFT-OFF":e.t<i?"RESCUE SIGNAL LIVE":"TOUCHDOWN";e.step<e.rows.length&&e.t>=e.step*n;){for(const[h,o,c]of e.rows[e.step])this.world.set(h,o,c,Lt);this.audio.door(),e.step++}if(e.t>i)for(;e.restored<e.rows.length&&e.t-i>=e.restored*n;){for(const[h,o,c,u]of e.rows[e.rows.length-1-e.restored])this.world.set(h,o,c,u);this.audio.door(),e.restored++}e.t>=a+.4&&(this.liftoff=null,this.ui=null,l.classList.add("hidden"),this.saveNow(!0),this.win())}win(){this.won||(this.won=!0,Rh(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`The Ship lifts off. All four engines burn. Survived ${this.scoreDays().toFixed(1)} days. Best: ${xr().toFixed(1)} days.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:1})),...["backpack","head","body","regulator","light"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null,regulator:null,light:null},this.lanternOn=!1,Rh(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${xr().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/Ue}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===Mn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){ot("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){Ph(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,napReady:this.timeSec-this.lastSleep>=Ue})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const u=Vt[this.temp.itemId];e.classList.add("filled"),e.style.background=u.color,e.style.backgroundImage=`url(${xo(this.temp.itemId)[0]??""})`,e.onmousedown=f=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.startTempDrag(f)},n.textContent=`Drop ${u.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,1,1),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const u of["backpack","head","body","regulator","light"]){const f=document.getElementById("eq-"+u),m=this.equip[u];if(m){const x=Vt[m.itemId];f.classList.add("filled"),f.style.background=x.color,f.style.backgroundImage=`url(${xo(m.itemId)[0]??""})`;const y=m.charges;f.textContent=y!==void 0&&y>0?String(y):"",f.title=y!==void 0?`Click to take off the ${x.name} — ${y} charge${y===1?"":"s"} left`:`Click to take off the ${x.name}`,f.onclick=()=>this.unequipSlot(u)}else f.classList.remove("filled"),f.style.background="#23262e",f.style.backgroundImage="",f.textContent="",f.title="",f.onclick=()=>{const x=this.inv.selectedSlot();x&&Vt[x.itemId].equip===u?this.equipItem():x&&(ot(`The ${Vt[x.itemId].name} does not fit the ${u} slot.`),this.audio.error())}}const s=document.getElementById("inv-side"),i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,a=i.selectedSlot(),l=this.temp??a,h=this.inv.weight()+(this.temp?Vt[this.temp.itemId].mass:0),o=this.inv.weightLimit(),c=l?Ln(l):null;if(s.textContent=l?`${Vt[l.itemId].name} — ${Vt[l.itemId].desc}`:"Click an item to inspect it; drag to move it.",s.textContent+=` Weight ${h.toFixed(1)} / ${o} kg`,l&&c&&c.w!==c.h){const u=document.createElement("button");u.textContent="Rotate",u.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:i.rotate(a)||(ot("No room to rotate."),this.audio.error()),this.renderInv()},s.appendChild(u)}if(a){const u=Vt[a.itemId];if(u.equip){const f=document.createElement("button");f.textContent=`Equip (${u.equip} slot)`,f.onclick=()=>this.equipItem(),s.appendChild(f)}if(a.itemId==="coolant_cell"&&this.equip.regulator){const f=this.equip.regulator,m=(f.charges??0)>=3,x=document.createElement("button");x.textContent=m?"Regulator holds 3 cells already — that's six days of neutral air":"Load Coolant Cell into the Regulator (each lasts 2 game days)",x.disabled=m||!this.inv.has("coolant_cell",1),x.onclick=()=>{m||!this.inv.has("coolant_cell",1)||(this.inv.removeItem("coolant_cell",1),f.charges=(f.charges??0)+1,this.audio.pickup(),ot(`Coolant Cell loaded — ${f.charges} charge${f.charges===1?"":"s"} running.`),this.renderInv())},s.appendChild(x)}}if(a)if(i===this.chestInv){const u=document.createElement("button");u.textContent="Move to pack",u.onclick=()=>{const f=i.slots.indexOf(a);i.slots.splice(f,1),ue.placeSlotFree(this.inv,a)||(i.slots.splice(f,0,a),ot("No room in your pack."),this.audio.error()),this.renderInv()},s.appendChild(u)}else{const u=document.createElement("button");u.textContent="Drop 1",u.onclick=()=>{this.inv.removeItem(a.itemId,1),this.dropEntity(a.itemId,1,1),this.renderInv()},s.appendChild(u)}}renderGrid(t,e){const n=ue.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const s=(i,a)=>t.slots.find(l=>{const h=Ln(l);return i>=l.x&&i<l.x+h.w&&a>=l.y&&a<l.y+h.h});for(let i=0;i<t.h;i++)for(let a=0;a<t.w;a++){const l=document.createElement("div");l.className="invcell";const h=s(a,i);if(h){const o=Vt[h.itemId],c=a-h.x,u=i-h.y,f=xo(h.itemId),m=h.rot?(o.h-1-c)*o.w+u:u*o.w+c;l.style.background=o.color,l.style.backgroundImage=`url(${f[Math.min(m,f.length-1)]??""})`,t.slots.indexOf(h)===t.selected&&l.classList.add("active"),l.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${o.name} — ${o.desc}`},l.onmousedown=y=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,a,i):this.startInvDrag(y,h,t)}}else l.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,a,i)};e.appendChild(l)}}tapCell(t,e,n){const s=t.slots.find(l=>{const h=Ln(l);return e>=l.x&&e<l.x+h.w&&n>=l.y&&n<l.y+h.h}),i=t===this.inv?this.chestInv:this.inv;if(i){const l=i.selectedSlot();if(l&&l!==s){const h=Ln(l),o=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(o>=0&&c>=0&&t.fits(o,c,h.w,h.h,l)){i.slots.splice(i.slots.indexOf(l),1),i.selected=-1,l.x=o,l.y=c,t.slots.push(l),t.selected=t.slots.indexOf(l),this.audio.place(),this.renderInv(),this.renderHeld();return}ot("No room there."),this.audio.error();return}}const a=t.selectedSlot();if(a&&a!==s){const l=Ln(a),h=Math.min(e,t.w-l.w),o=Math.min(n,t.h-l.h);if(h>=0&&o>=0&&this.tapMove(t,a,s,h,o)){this.audio.place(),t.selected=t.slots.indexOf(a),this.renderInv();return}}s?(this.setSel(t,t.slots.indexOf(s)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,s,i){const a=Ln(e);if(t.fits(s,i,a.w,a.h,e))return t.move(e,s,i);if(!n)return!1;const l=Ln(n),h=t.slots.indexOf(e);t.slots.splice(h,1);const o=t.fits(e.x,e.y,l.w,l.h,n)&&t.fits(s,i,a.w,a.h,n)&&!(s<e.x+l.w&&e.x<s+a.w&&i<e.y+l.h&&e.y<i+a.h)&&t.move(n,e.x,e.y)&&t.move(e,s,i);return t.slots.splice(h,0,e),o}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const s=n.slots.indexOf(e);this.setSel(n,s),n.slots.splice(s,1);const i=this.temp;this.temp=e,this.tempOrigin=n,i&&(n.slots.push(i),n.move(i,e.x,e.y)||this.giveOrDrop(i.itemId,1));const a=(ue.CELL+ue.GAP)*this.uiZoom(),l=ue.GAP*this.uiZoom(),h=Ln(e),o=document.createElement("div");o.className="inv-ghost",o.style.width=h.w*a-l+"px",o.style.height=h.h*a-l+"px",o.style.background=Vt[e.itemId].color,o.style.backgroundImage=`url(${Ti(e.itemId,e.rot?1:0)})`,document.body.appendChild(o);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:t.clientX-(c.left+e.x*a),gy:t.clientY-(c.top+e.y*a)},f=x=>{o.style.left=x.clientX-u.gx+"px",o.style.top=x.clientY-u.gy+"px"},m=x=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),o.remove();const y=Ln(e);let v=null,_=0,b=0;for(const[w,S]of this.gridsEls()){const T=w.getBoundingClientRect();if(_=Math.round((x.clientX-T.left-u.gx)/a),b=Math.round((x.clientY-T.top-u.gy)/a),_>=0&&b>=0&&_<=S.w-y.w&&b<=S.h-y.h){v=S;break}}v&&(v.slots.push(e),v.move(e,_,b)||v===n&&v.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(v,v.slots.indexOf(e))):v.slots.splice(v.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",m),f(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const a=e.slots.indexOf(t);if(e.slots.splice(a,1),!ue.placeSlotFree(n,t)){e.slots.splice(a,0,t),ot(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const s=e.slots.indexOf(t);this.setSel(e,s),e.slots.splice(s,1);const i=this.temp;this.temp=t,this.tempOrigin=e,i&&(e.slots.push(i),e.move(i,t.x,t.y)||this.giveOrDrop(i.itemId,1)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(ue.CELL+ue.GAP)*this.uiZoom(),s=ue.GAP*this.uiZoom(),i=Ln(e),a=document.createElement("div");a.className="inv-ghost",a.style.width=i.w*n-s+"px",a.style.height=i.h*n-s+"px",a.style.background=Vt[e.itemId].color,a.style.backgroundImage=`url(${Ti(e.itemId,e.rot?1:0)})`,document.body.appendChild(a);const l=o=>{a.style.left=o.clientX-i.w*n/2+"px",a.style.top=o.clientY-i.h*n/2+"px"},h=o=>{window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",h),a.remove();const c=(i.w*n-s)/2,u=(i.h*n-s)/2;let f=null,m=0,x=0;for(const[y,v]of this.gridsEls()){const _=y.getBoundingClientRect();if(m=Math.round((o.clientX-_.left-c)/n),x=Math.round((o.clientY-_.top-u)/n),m>=0&&x>=0&&m<=v.w-i.w&&x<=v.h-i.h){f=v;break}}f&&(f.slots.push(e),f.move(e,m,x)?(this.temp=null,this.audio.place(),this.setSel(f,f.slots.indexOf(e))):(f.slots.splice(f.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",l),window.addEventListener("mouseup",h),l(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};ue.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(ot("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){ot("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t==="bench")for(const s of Tu){const i=document.createElement("div");i.className="craft-row";const a=`${Vt[s.out].name}${s.count>1?" ×"+s.count:""}`,l=Object.entries(s.needs).map(([c,u])=>`${u}× ${Vt[c].name}`).join(", "),h=Ru(this.inv,s);i.innerHTML=`<span class="what"><img class="craft-art" src="${Ti(s.out)}" alt="">${a} <span class="needs">(${l})</span></span>`;const o=document.createElement("button");o.textContent="Craft",o.disabled=!h,o.onclick=()=>{const c=g_(this.inv,s);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(s.out,c),this.tut?.notify("craft"),Vt[s.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},i.appendChild(o),e.appendChild(i)}else{const s=this.openStation,i=`${s[0]},${s[1]},${s[2]}`,a=this.campCharges.get(i)??0;document.getElementById("smelt-fuel").textContent=`${a} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){ot("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(i,a+3),this.renderCraft("smelt")};const l=this.equip.light;if(l){const h=l.charges??0,o=document.createElement("div");o.className="craft-row",o.innerHTML=`<span class="what">Head Lantern <span class="needs">(${h}/5 charges)</span></span>`;const c=document.createElement("button");c.textContent="Refuel Lantern (+1, uses 1 fuel)",c.disabled=h>=5||a<1,c.onclick=()=>{h>=5||a<1||(this.campCharges.set(i,a-1),l.charges=h+1,this.audio.place(),this.renderCraft("smelt"))},o.appendChild(c),e.appendChild(o)}for(const h of Au){const o=document.createElement("div");o.className="craft-row",o.innerHTML=`<span class="what"><img class="craft-art" src="${Ti(h.out)}" alt="">${Vt[h.in].name} → ${Vt[h.out].name}${h.n&&h.n>1?" ×"+h.n:""} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(h.in,1)||a<1,c.onclick=()=>{this.inv.removeItem(h.in,1),this.campCharges.set(i,a-1);const u=this.inv.addItem(h.out,h.n??1);u>0&&this.giveOrDrop(h.out,u),this.audio.place(),this.renderCraft("smelt")},o.appendChild(c),e.appendChild(o)}}}renderCache(){const t=this.caches.find(s=>s.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const s of t.items){const i=document.createElement("div");i.className="cache-item",i.textContent=`${s.count}× ${Vt[s.itemId].name}`,e.appendChild(i)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let s=!0;for(;s;){s=!1;for(const i of t.items){const a=this.inv.addItem(i.itemId,i.count);a<i.count&&(s=!0,i.count=a),a===0&&t.items.splice(t.items.indexOf(i),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const D_=["drone","wanderer","wanderer","caravan","caravan","nightwind"],U_=["drone","nightwind","nightwind","caravan","wanderer"],Dh={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},Uh=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],k_=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],kh=[0,2,4,2,3,5,4,1],N_=[0,0,3,2,4,3,2,0],Nh={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},F_=["pluck","saw","breath","bow"];class O_{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=Nh[this.genre];breathBuf=null;root=98;deg=Uh[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let s=0,i=0;for(let c=0;c<n.length;c++){const u=Math.random()*2-1;s=.99*s+.01*u,i=.96*i+.04*u,n[c]=(s+i)*2}const a=this.ctx.createBufferSource();a.buffer=e,a.loop=!0,this.noiseBuf=e;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=380;const h=this.ctx.createOscillator();h.frequency.value=.13;const o=this.ctx.createGain();o.gain.value=100,h.connect(o).connect(l.frequency),h.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,a.connect(l).connect(this.windGain).connect(this.ctx.destination),a.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=.06*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const s=t.createGain();s.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(s),s.connect(t.destination),[1,1.5,2].forEach((i,a)=>{const l=t.createOscillator();l.type=a===2?"sine":"triangle",l.frequency.value=this.root*i,l.detune.value=a*3-3;const h=t.createGain();h.gain.value=.03/(a+1);const o=t.createOscillator();o.frequency.value=.05+a*.017;const c=t.createGain();c.gain.value=.018,o.connect(c).connect(h.gain),o.start(),l.connect(h).connect(this.musicGain),l.start(),this.droneOscs.push(l)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?D_:U_;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=Nh[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const s=this.isDay?Uh:k_;if(this.deg=s[Math.floor(Math.random()*s.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const i=this.ctx.currentTime;this.droneOscs.forEach((a,l)=>a.frequency.setTargetAtTime(this.root*[1,1.5,2][l],i,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=Dh[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,s=(a,l)=>e*a*2**(n[(l%n.length+n.length)%n.length]/12),i=Dh[this.genre];switch(this.genre){case"drone":{this.note(s(1,0),t,i*.95,.18),[0,2,4].forEach(a=>this.note(s(2,a),t+.05,i*.9,.03));for(let a=0;a<8;a++)Math.random()<.15||this.note(s(4,kh[a]),t+a*i/8,.9,.12);if(Math.random()<.6){const a=1+Math.floor(Math.random()*6);this.note(s(4,a),t+Math.floor(Math.random()*5)*(i/8),1.4,.13)}break}case"wanderer":{this.note(s(1,0),t,i*.55,.16);for(let a=0;a<8;a++)Math.random()<.1||this.note(s(Math.random()<.3?3:4,kh[a]),t+a*i/8,.55,.12);if(Math.random()<.7){const a=1+Math.floor(Math.random()*5);this.note(s(5,a),t+Math.floor(Math.random()*6)*(i/8),.8,.11)}break}case"nightwind":{this.note(s(1,0),t,i*.95,.15),Math.random()<.4&&[0,2,4].forEach(l=>this.note(s(2,l),t+.1,i*.85,.025));const a=1+Math.floor(Math.random()*3);for(let l=0;l<a;l++){const h=Math.floor(Math.random()*n.length),o=1.6+Math.random()*(i-1.2);this.note(s(4,h),t+Math.random()*(i-1),o,.12)}break}case"caravan":{for(let a=0;a<8;a++)(a===0||a===3||a===4)&&this.drum(t+a*i/8),a%2===1&&this.brush(t+a*i/8);this.note(s(1,0),t,i*.45,.17),this.note(s(1,3),t+i/2,i*.4,.14);for(let a=0;a<8;a++)Math.random()<.25||this.note(s(3,N_[a]),t+a*i/8,.4,.1);if(Math.random()<.4){const a=1+Math.floor(Math.random()*4);this.note(s(4,a),t+Math.floor(Math.random()*4)*(i/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const s=this.ctx.createGain();s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(s).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=F_.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,s){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,s);break;case"saw":this.sawNote(t,e,n,s);break;case"breath":this.breathNote(t,e,n,s);break;case"bow":this.bowNote(t,e,n,s);break}}pluckNote(t,e,n,s){const i=this.ctx,a=Math.min(n,1),l=i.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(s,e+.006),l.gain.exponentialRampToValueAtTime(.001,e+a),l.connect(this.musicGain);const h=i.createOscillator();h.type="triangle",h.frequency.value=t,h.connect(l),h.start(e),h.stop(e+a+.05);const o=i.createOscillator();o.type="square",o.frequency.value=t*2.01;const c=i.createGain();c.gain.setValueAtTime(s*.22,e),c.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,a*.35)),o.connect(c).connect(l),o.start(e),o.stop(e+a)}sawNote(t,e,n,s){const i=this.ctx,a=i.createOscillator();a.type="sawtooth",a.frequency.value=t;const l=i.createBiquadFilter();l.type="lowpass",l.Q.value=.8,l.frequency.value=Math.min(3200,Math.max(700,t*6));const h=i.createGain();this.sustainEnv(h.gain,e,n,s*.7,.09),a.connect(l).connect(h).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}breathNote(t,e,n,s){const i=this.ctx;if(!this.breathBuf){const u=i.sampleRate,f=i.createBuffer(1,u*2,u),m=f.getChannelData(0);for(let x=0;x<m.length;x++)m[x]=Math.random()*2-1;this.breathBuf=f}const a=i.createBufferSource();a.buffer=this.breathBuf,a.loop=!0;const l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=10;const h=i.createGain();this.sustainEnv(h.gain,e,n,s*1.6,.22),a.connect(l).connect(h).connect(this.musicGain),a.start(e,Math.random()*1.9),a.stop(e+n+.05);const o=i.createOscillator();o.type="sine",o.frequency.value=t;const c=i.createGain();this.sustainEnv(c.gain,e,n,s*.8,.3),o.connect(c).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}bowNote(t,e,n,s){const i=this.ctx,a=i.createOscillator();a.type="sawtooth",a.frequency.value=t;const l=i.createOscillator();l.frequency.value=5.2;const h=i.createGain();h.gain.value=5,l.connect(h).connect(a.detune),l.start(e),l.stop(e+n+.05);const o=i.createBiquadFilter();o.type="lowpass",o.Q.value=.7,o.frequency.value=Math.min(2600,Math.max(600,t*4));const c=i.createGain();this.sustainEnv(c.gain,e,n,s*.8,Math.min(.35,n*.3)),a.connect(o).connect(c).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}sustainEnv(t,e,n,s,i){const a=Math.min(i,n*.5),l=e+a+(n-a)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(s,e+a),t.setValueAtTime(s,l),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,s=.2,i=0){if(!this.ctx)return;const a=this.ctx.currentTime,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,a),i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+i),a+e),h.gain.setValueAtTime(s*this.volume,a),h.gain.exponentialRampToValueAtTime(.001,a+e),l.connect(h).connect(this.ctx.destination),l.start(a),l.stop(a+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const s=this.ctx.currentTime,i=this.ctx.sampleRate,a=this.ctx.createBuffer(1,Math.max(1,Math.floor(i*t)),i),l=a.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=(Math.random()*2-1)*(1-u/l.length);const h=this.ctx.createBufferSource();h.buffer=a;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=e;const c=this.ctx.createGain();c.gain.value=n*this.volume,h.connect(o).connect(c).connect(this.ctx.destination),h.start(s)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const Jt=r=>document.getElementById(r),Fh=r=>Jt(r).value,mn=(r,t=!0)=>Jt(r).classList.toggle("hidden",!t),B_=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],tc=()=>B_.forEach(r=>mn(r,!1)),Ro=new O_;let ce=S_(),Ft=null;document.addEventListener("click",()=>Ro.resume(),{once:!0});document.addEventListener("touchstart",()=>Ro.resume(),{once:!0});function Vo(){tc(),mn("screen-title"),Jt("best-score").textContent=xr()>0?`Best run: ${xr().toFixed(1)} days`:"";const r=Jt("worldlist");r.innerHTML="";const t=Go();t.length||(r.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const s=Uu(e.id),i=document.createElement("span");i.textContent=`${e.name} — seed “${e.seedStr}” — ${s?`day ${s.days}, survived ${(s.playSec/Ue).toFixed(1)} days`:"never played"}`;const a=document.createElement("button");a.textContent="Load",a.onclick=()=>Wo(e,s);const l=document.createElement("button");l.textContent="Export",l.onclick=()=>{s?ku(e,s):ot("Nothing saved for this world yet.")};const h=document.createElement("button");h.textContent="Delete",h.onclick=()=>{h.textContent==="Sure?"?(E_(e.id),Vo()):(h.textContent="Sure?",setTimeout(()=>h.textContent="Delete",2500))},n.append(i,a,l,h),r.appendChild(n)}}function Wo(r,t){tc(),mn("cheats",!1),Jt("hud").classList.remove("hidden"),ce.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),Jt("btn-save").classList.toggle("hidden",r.id.startsWith("guest")),Jt("btn-exportworld").classList.toggle("hidden",r.id.startsWith("guest")),Ro.resume(),Ft=new ue(r,t,Jt("game-wrap"),ce,Ro),globalThis.game=Ft,Ft.start(),t===null&&Ft.startTutorial()}function ec(){Ft&&(Ft.saveNow(),Ft.stop()),Ft=null,delete globalThis.game,Jt("hud").classList.add("hidden"),Vo()}function nc(r){tc(),mn(r)}function z_(){Ft&&(Ft.pauseSubmenu=null),mn("screen-settings",!1),mn("screen-instructions",!1),mn("screen-catalog",!1),Ft?(mn("ui-inventory",!1),mn("ui-craft",!1),mn("ui-cache",!1),mn("screen-pause",!1),Ft.paused=!1,Ft.relock()):Vo()}function ic(){Ft&&(Ft.pauseSubmenu=Ft.paused?"settings":null),nc("screen-settings");const r=Jt("settings-body");r.innerHTML="";const t=(e,n,s,i)=>{const a=document.createElement("div");a.className="setting";const l=document.createElement("span");l.textContent=e;const h=document.createElement("div");h.className="seg";const o=[];for(const[c,u]of n){const f=document.createElement("button");f.type="button",f.textContent=c,String(u)===String(s)&&f.classList.add("on"),f.onclick=()=>{for(const m of o)m.classList.remove("on");f.classList.add("on"),i(u)},o.push(f),h.appendChild(f)}a.append(l,h),r.appendChild(a)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],ce.sens,e=>{ce.sens=e,zn()}),t("Invert Y",[["Off",!1],["On",!0]],ce.invertY,e=>{ce.invertY=e,zn()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],ce.volume,e=>{ce.volume=e,zn()}),t("Music",[["Off",!1],["On",!0]],ce.music,e=>{ce.music=e,zn()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],ce.fov,e=>{ce.fov=e,zn()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],ce.renderDist,e=>{ce.renderDist=e,zn()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],ce.quality,e=>{ce.quality=e,zn()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],ce.lighting,e=>{ce.lighting=e,zn()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],ce.units,e=>{ce.units=e,zn()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],ce.uiScale,e=>{ce.uiScale=e,zn()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],ce.fullscreen,e=>{ce.fullscreen=e,zn(),e?document.documentElement.requestFullscreen().catch(()=>{ce.fullscreen=!1,zn(),ic()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),r.appendChild(e)}}function Fu(r){document.documentElement.style.setProperty("--ui-scale",String(r))}function zn(){b_(ce),Fu(ce.uiScale),Ft&&Ft.applySettings(ce)}let Il="items";function sc(){Ft&&(Ft.pauseSubmenu=Ft.paused?"catalog":null),nc("screen-catalog");for(const t of Array.from(Jt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===Il);const r=Jt("catalog-body");if(r.innerHTML="",Il==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,s,i,a)=>{const l=document.createElement("div");l.className="cat-card";const h=document.createElement("img");h.src=n,h.alt="";const o=document.createElement("div");o.innerHTML=`<b>${s}</b><div class="cat-meta">${i}</div><div class="cat-desc">${a}</div>`,l.append(h,o),t.append(l)};for(const n of Object.values(Vt).sort((s,i)=>s.name.localeCompare(i.name)))e(Ti(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of ii){if(n.id===0||n.name==="Air")continue;const s=Object.values(Vt).find(a=>a.block===n.id),i=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(s?Ti(s.id):T_(n.id),n.name,i,s?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}r.append(t)}else{const t=(e,n,s,i)=>{const a=document.createElement("div");a.className="cat-recipe";const l=document.createElement("img");l.src=e,l.alt="",l.style.width="36px",l.style.height="36px",l.style.imageRendering="pixelated",a.append(l,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${s}</b> <span class="needs">(${i})</span>`})),r.append(a)};for(const e of Tu){const n=Object.entries(e.needs).map(([s,i])=>`${i}× ${Vt[s].name}`).join(" + ");t(Ti(e.out),n,`${Vt[e.out].name}${e.count>1?" ×"+e.count:""}`,e.bench?"Crafting Bench":"hands")}for(const e of Au)t(Ti(e.out),`1× ${Vt[e.in].name}`,`${Vt[e.out].name}${e.n&&e.n>1?" ×"+e.n:""}`,"Campfire, 1 fuel charge")}}for(const r of Array.from(Jt("catalog-tabs").querySelectorAll(".tab")))r.onclick=()=>{Il=r.dataset.tab,sc()};const H_=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Metal Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches, Broken Thruster on a wingtip (needs a Thruster Nozzle)"],["T","toggle the Head Lantern — it burns one fuel charge per 4 game-minutes; refuel it at a Campfire"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 10 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],G_=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / LAMP / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function Ou(){Ft&&(Ft.pauseSubmenu=Ft.paused?"instructions":null),nc("screen-instructions");const r=Jt("instr-body");r.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?G_:H_;for(const[n,s]of t){const i=document.createElement("div");i.innerHTML=`<b>${n}</b> — ${s}`,r.appendChild(i)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. Walls block the wind but not heat: a sealed room's air drifts toward the outside temperature. Only Heat Regulator blocks hold a sealed room at ~37 °C — each covers 150 cells, they stack in bigger rooms; the Ship Interior comes with one. Direct midday sun adds a punishing +8…18 °C — shade from rocks, dunes and walls cancels it; at night the desert freezes you. Dig into the Caves: two or more cells under the terrain the air sits at a constant mild ~22 °C, and shelter there lets your body claw back toward 36.6 °C. That is the refuge — but it is dark (wear a Head Lantern, toggle with T), Scorpions and Sand Wurms live only down there, and Cobalt Ore — the one thing that can fix the Ship's engines — hides there too. The goal: mine Cobalt, smelt and craft four Thruster Nozzles, press E at each Broken Thruster on the wingtips, and lift off. Or just keep surviving and beat your best day count. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, Kangaroo Rats bolt, Scorpions and Wurms ambush in the dark — hunt what you can, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor, Armour, Regulator and Light go in the five Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it.",r.appendChild(e)}Jt("btn-create").onclick=()=>{const r=Fh("seed-input").trim()||Math.random().toString(36).slice(2,10),t=Fh("world-name").trim()||r,e=Pu(t,r);Wo(e,null)};Jt("btn-guest").onclick=()=>{const r=Math.random().toString(36).slice(2,10);Wo({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:r,updated:Date.now()},null)};Jt("btn-import").onclick=()=>Jt("import-file").click();Jt("import-file").onchange=async()=>{const r=Jt("import-file").files?.[0];if(r)try{const t=await w_(r);ot("World imported."),Wo(t,Uu(t.id))}catch(t){ot(`Import failed: ${t.message}`)}};Jt("btn-settings").onclick=ic;Jt("btn-pause-settings").onclick=ic;Jt("btn-instructions").onclick=Ou;Jt("btn-pause-instructions").onclick=Ou;Jt("btn-catalog").onclick=sc;Jt("btn-catalog-title").onclick=sc;for(const r of document.querySelectorAll(".close-btn"))r.onclick=()=>{if(Ft&&Ft.pauseSubmenu){Ft.closePauseSubmenu();return}Ft&&Ft.closeUI(),(!Ft||!(Ft.ui==="inv"&&Ft.temp))&&z_()};Jt("btn-resume").onclick=()=>{Ft&&(Ft.paused=!1,mn("screen-pause",!1),mn("cheats",!1),Ft.relock())};Jt("btn-save").onclick=()=>ot("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");Jt("btn-exportworld").onclick=()=>{Ft&&Ft.exportWorld()};Jt("btn-quit").onclick=()=>ec();Jt("btn-cheats").onclick=()=>mn("cheats",Jt("cheats").classList.contains("hidden"));const Bu=Jt("cheat-item");for(const[r,t]of Object.entries(Vt).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=r,e.textContent=t.name,Bu.appendChild(e)}Jt("btn-cheat-add").onclick=()=>{if(!Ft)return;const r=Bu.value;Ft.inv.addItem(r,1)?ot("No room in your pack."):ot(`Added ${Vt[r].name}.`)};for(const r of Array.from(Jt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))r.onclick=()=>{if(!Ft)return;if(r.dataset.speed!==void 0){Ft.speedMul=Number(r.dataset.speed),ot(`Player speed ×${r.dataset.speed}.`);return}if(r.dataset.immortal!==void 0){Ft.survival.invincible=r.dataset.immortal==="1",ot(`Immortality ${Ft.survival.invincible?"on":"off"}.`);return}const t=Number(r.dataset.frac);Ft.setClock(t),ot(`Clock set to ${r.textContent}.`)};Jt("btn-respawn").onclick=()=>{Ft&&Ft.respawn()};Jt("btn-death-title").onclick=()=>ec();Jt("btn-win-continue").onclick=()=>{Ft&&(Ft.paused=!1,mn("screen-win",!1),Ft.relock())};Jt("btn-win-title").onclick=()=>ec();document.addEventListener("keydown",r=>{if(r.code==="Escape"&&!Jt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});Fu(ce.uiScale);Vo();
