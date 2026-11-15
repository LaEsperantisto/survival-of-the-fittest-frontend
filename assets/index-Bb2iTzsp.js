(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="180",xu=0,Gl=1,Mu=2,ph=1,yu=2,ri=3,Ci=0,nn=1,De=2,wi=0,vs=1,Vl=2,Wl=3,Xl=4,Su=5,Gi=100,bu=101,Eu=102,wu=103,Tu=104,Au=200,Ru=201,Cu=202,Iu=203,sa=204,ra=205,Lu=206,Pu=207,Du=208,Uu=209,Nu=210,ku=211,Fu=212,Ou=213,Bu=214,oa=0,aa=1,la=2,Ss=3,ca=4,ha=5,ua=6,da=7,sl=0,zu=1,Hu=2,Ti=0,Gu=1,Vu=2,Wu=3,Xu=4,qu=5,Yu=6,$u=7,mh=300,bs=301,Es=302,fa=303,pa=304,oo=306,ma=1e3,qi=1001,ga=1002,fn=1003,Ku=1004,dr=1005,Vn=1006,Mo=1007,Yi=1008,Kn=1009,gh=1010,_h=1011,Ys=1012,rl=1013,Ki=1014,oi=1015,er=1016,ol=1017,al=1018,$s=1020,vh=35902,xh=35899,Mh=1021,yh=1022,kn=1023,Ks=1026,js=1027,Sh=1028,ll=1029,bh=1030,cl=1031,hl=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,_a=35840,va=35841,xa=35842,Ma=35843,ya=36196,Sa=37492,ba=37496,Ea=37808,wa=37809,Ta=37810,Aa=37811,Ra=37812,Ca=37813,Ia=37814,La=37815,Pa=37816,Da=37817,Ua=37818,Na=37819,ka=37820,Fa=37821,Oa=36492,Ba=36494,za=36495,Ha=36283,Ga=36284,Va=36285,Wa=36286,ju=3200,Zu=3201,Eh=0,Ju=1,bi="",tn="srgb",ws="srgb-linear",Jr="linear",le="srgb",ts=7680,ql=519,Qu=512,td=513,ed=514,wh=515,nd=516,id=517,sd=518,rd=519,Yl=35044,$l="300 es",Wn=2e3,Qr=2001;class As{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const xs=Math.PI/180,Zs=180/Math.PI;function Rs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function ul(s,t){return(s%t+t)%t}function od(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ad(s,t,e){return s!==t?(e-s)/(t-s):0}function qs(s,t,e){return(1-e)*s+e*t}function ld(s,t,e,n){return qs(s,t,1-Math.exp(-e*n))}function cd(s,t=1){return t-Math.abs(ul(s,t*2)-t)}function hd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ud(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function dd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function fd(s,t){return s+Math.random()*(t-s)}function pd(s){return s*(.5-Math.random())}function md(s){s!==void 0&&(Kl=s);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gd(s){return s*xs}function _d(s){return s*Zs}function vd(s){return(s&s-1)===0&&s!==0}function xd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Md(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),d=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),h=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*d,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*d,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*d,a*c);break;case"XZX":s.set(a*d,l*p,l*h,a*c);break;case"YXY":s.set(l*h,a*d,l*p,a*c);break;case"ZYZ":s.set(l*p,l*h,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ms(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ai={DEG2RAD:xs,RAD2DEG:Zs,generateUUID:Rs,clamp:Jt,euclideanModulo:ul,mapLinear:od,inverseLerp:ad,lerp:qs,damp:ld,pingpong:cd,smoothstep:hd,smootherstep:ud,randInt:dd,randFloat:fd,randFloatSpread:pd,seededRandom:md,degToRad:gd,radToDeg:_d,isPowerOfTwo:vd,ceilPowerOfTwo:xd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:yd,normalize:We,denormalize:ms};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const f=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==f||c!==h||d!==p){let _=1-a;const m=l*f+c*h+d*p+u*x,E=m>=0?1:-1,g=1-m*m;if(g>Number.EPSILON){const w=Math.sqrt(g),A=Math.atan2(w,m*E);_=Math.sin(_*A)/w,a=Math.sin(a*A)/w}const v=a*E;if(l=l*_+f*v,c=c*_+h*v,d=d*_+p*v,u=u*_+x*v,_===1-a){const w=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=w,c*=w,d*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return t[e]=a*p+d*u+l*h-c*f,t[e+1]=l*p+d*f+c*u-a*h,t[e+2]=c*p+d*h+a*f-l*u,t[e+3]=d*p-a*u-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(r/2),f=l(n/2),h=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u-f*h*p;break;case"YXZ":this._x=f*d*u+c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u+f*h*p;break;case"ZXY":this._x=f*d*u-c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u-f*h*p;break;case"ZYX":this._x=f*d*u-c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u+f*h*p;break;case"YZX":this._x=f*d*u+c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u-f*h*p;break;case"XZY":this._x=f*d*u-c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],f=n+a+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(o-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(d-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(r+c)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(o-i)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*i+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),d=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=i+l*u+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yo.copy(this).projectOnVector(t),this.sub(yo)}reflect(t){return this.sub(yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new P,jl=new nr;class Xt{constructor(t,e,n,i,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],h=n[5],p=n[8],x=i[0],_=i[3],m=i[6],E=i[1],g=i[4],v=i[7],w=i[2],A=i[5],R=i[8];return r[0]=o*x+a*E+l*w,r[3]=o*_+a*g+l*A,r[6]=o*m+a*v+l*R,r[1]=c*x+d*E+u*w,r[4]=c*_+d*g+u*A,r[7]=c*m+d*v+u*R,r[2]=f*x+h*E+p*w,r[5]=f*_+h*g+p*A,r[8]=f*m+h*v+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*o-a*c,f=a*l-d*r,h=c*r-o*l,p=e*u+n*f+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(i*c-d*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(d*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=h*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Xt;function Th(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function to(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sd(){const s=to("canvas");return s.style.display="block",s}const Zl={};function Js(s){s in Zl||(Zl[s]=!0,console.warn(s))}function bd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Jl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ed(){const s={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?Jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ws]:{primaries:t,whitePoint:n,transfer:Jr,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}const ie=Ed();function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=to("canvas")),es.width=t.width,es.height=t.height;const i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=to("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Td=0;class dl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(bo(i[o].image)):r.push(bo(i[o]))}else r=bo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function bo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ad=0;const Eo=new P;class je extends As{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=qi,i=qi,r=Vn,o=Yi,a=kn,l=Kn,c=je.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Rs(),this.name="",this.source=new dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ma:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ma:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=mh;je.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],d=l[4],u=l[8],f=l[1],h=l[5],p=l[9],x=l[2],_=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+_)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(c+1)/2,v=(h+1)/2,w=(m+1)/2,A=(d+f)/4,R=(u+x)/4,U=(p+_)/4;return g>v&&g>w?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=A/n,r=R/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=U/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=U/r),this.set(n,i,r,e),this}let E=Math.sqrt((_-p)*(_-p)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(_-p)/E,this.y=(u-x)/E,this.z=(f-d)/E,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends As{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new je(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new dl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ah extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cd extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),pr.subVectors(this.max,Ps),ns.subVectors(t.a,Ps),is.subVectors(t.b,Ps),ss.subVectors(t.c,Ps),gi.subVectors(is,ns),_i.subVectors(ss,is),Ui.subVectors(ns,ss);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Ui.z,Ui.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Ui.z,0,-Ui.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Ui.y,Ui.x,0];return!wo(e,ns,is,ss,pr)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,ns,is,ss,pr))?!1:(mr.crossVectors(gi,_i),e=[mr.x,mr.y,mr.z],wo(e,ns,is,ss,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ti=[new P,new P,new P,new P,new P,new P,new P,new P],Sn=new P,fr=new ir,ns=new P,is=new P,ss=new P,gi=new P,_i=new P,Ui=new P,Ps=new P,pr=new P,mr=new P,Ni=new P;function wo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ni.fromArray(s,r);const a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),d=n.dot(Ni);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Id=new ir,Ds=new P,To=new P;class sr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(To)),this.expandByPoint(Ds.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ei=new P,Ao=new P,gr=new P,vi=new P,Ro=new P,_r=new P,Co=new P;class fl{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ao.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=vi.dot(this.direction),l=-vi.dot(gr),c=vi.lengthSq(),d=Math.abs(1-o*o);let u,f,h,p;if(d>0)if(u=o*l-a,f=o*a-l,p=r*d,u>=0)if(f>=-p)if(f<=p){const x=1/d;u*=x,f*=x,h=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),h=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),h=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),h=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ao).addScaledVector(gr,f),h}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,i,r){Ro.subVectors(e,t),_r.subVectors(n,t),Co.crossVectors(Ro,_r);let o=this.direction.dot(Co),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);const l=a*this.direction.dot(_r.crossVectors(vi,_r));if(l<0)return null;const c=a*this.direction.dot(Ro.cross(vi));if(c<0||l+c>o)return null;const d=-a*vi.dot(Co);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,r,o,a,l,c,d,u,f,h,p,x,_){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,d,u,f,h,p,x,_)}set(t,e,n,i,r,o,a,l,c,d,u,f,h,p,x,_){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*d,h=o*u,p=a*d,x=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=h+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+h*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*d,h=l*u,p=c*d,x=c*u;e[0]=f+x*a,e[4]=p*a-h,e[8]=o*c,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=h*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*d,h=l*u,p=c*d,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+h*a,e[1]=h+p*a,e[5]=o*d,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*d,h=o*u,p=a*d,x=a*u;e[0]=l*d,e[4]=p*c-h,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=h*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,h=o*c,p=a*l,x=a*c;e[0]=l*d,e[4]=x-f*u,e[8]=p*u+h,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=h*u+p,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,h=o*c,p=a*l,x=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=f*u+x,e[5]=o*d,e[9]=h*u-p,e[2]=p*u-h,e[6]=a*d,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Pd)}lookAt(t,e,n){const i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),xi.crossVectors(n,on),xi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),xi.crossVectors(n,on)),xi.normalize(),vr.crossVectors(on,xi),i[0]=xi.x,i[4]=vr.x,i[8]=on.x,i[1]=xi.y,i[5]=vr.y,i[9]=on.y,i[2]=xi.z,i[6]=vr.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],h=n[13],p=n[2],x=n[6],_=n[10],m=n[14],E=n[3],g=n[7],v=n[11],w=n[15],A=i[0],R=i[4],U=i[8],b=i[12],S=i[1],I=i[5],L=i[9],F=i[13],z=i[2],B=i[6],W=i[10],$=i[14],V=i[3],J=i[7],st=i[11],pt=i[15];return r[0]=o*A+a*S+l*z+c*V,r[4]=o*R+a*I+l*B+c*J,r[8]=o*U+a*L+l*W+c*st,r[12]=o*b+a*F+l*$+c*pt,r[1]=d*A+u*S+f*z+h*V,r[5]=d*R+u*I+f*B+h*J,r[9]=d*U+u*L+f*W+h*st,r[13]=d*b+u*F+f*$+h*pt,r[2]=p*A+x*S+_*z+m*V,r[6]=p*R+x*I+_*B+m*J,r[10]=p*U+x*L+_*W+m*st,r[14]=p*b+x*F+_*$+m*pt,r[3]=E*A+g*S+v*z+w*V,r[7]=E*R+g*I+v*B+w*J,r[11]=E*U+g*L+v*W+w*st,r[15]=E*b+g*F+v*$+w*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],f=t[10],h=t[14],p=t[3],x=t[7],_=t[11],m=t[15];return p*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*h-n*l*h)+x*(+e*l*h-e*c*f+r*o*f-i*o*h+i*c*d-r*l*d)+_*(+e*c*u-e*a*h-r*o*u+n*o*h+r*a*d-n*c*d)+m*(-i*a*d-e*l*u+e*a*f+i*o*u-n*o*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],h=t[11],p=t[12],x=t[13],_=t[14],m=t[15],E=u*_*c-x*f*c+x*l*h-a*_*h-u*l*m+a*f*m,g=p*f*c-d*_*c-p*l*h+o*_*h+d*l*m-o*f*m,v=d*x*c-p*u*c+p*a*h-o*x*h-d*a*m+o*u*m,w=p*u*l-d*x*l-p*a*f+o*x*f+d*a*_-o*u*_,A=e*E+n*g+i*v+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=E*R,t[1]=(x*f*r-u*_*r-x*i*h+n*_*h+u*i*m-n*f*m)*R,t[2]=(a*_*r-x*l*r+x*i*c-n*_*c-a*i*m+n*l*m)*R,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*h-n*l*h)*R,t[4]=g*R,t[5]=(d*_*r-p*f*r+p*i*h-e*_*h-d*i*m+e*f*m)*R,t[6]=(p*l*r-o*_*r-p*i*c+e*_*c+o*i*m-e*l*m)*R,t[7]=(o*f*r-d*l*r+d*i*c-e*f*c-o*i*h+e*l*h)*R,t[8]=v*R,t[9]=(p*u*r-d*x*r-p*n*h+e*x*h+d*n*m-e*u*m)*R,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*m+e*a*m)*R,t[11]=(d*a*r-o*u*r-d*n*c+e*u*c+o*n*h-e*a*h)*R,t[12]=w*R,t[13]=(d*x*i-p*u*i+p*n*f-e*x*f-d*n*_+e*u*_)*R,t[14]=(p*a*i-o*x*i-p*n*l+e*x*l+o*n*_-e*a*_)*R,t[15]=(o*u*i-d*a*i+d*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,u=a+a,f=r*c,h=r*d,p=r*u,x=o*d,_=o*u,m=a*u,E=l*c,g=l*d,v=l*u,w=n.x,A=n.y,R=n.z;return i[0]=(1-(x+m))*w,i[1]=(h+v)*w,i[2]=(p-g)*w,i[3]=0,i[4]=(h-v)*A,i[5]=(1-(f+m))*A,i[6]=(_+E)*A,i[7]=0,i[8]=(p+g)*R,i[9]=(_-E)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=rs.set(i[0],i[1],i[2]).length();const o=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const c=1/r,d=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Wn,l=!1){const c=this.elements,d=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Wn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Qr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wn,l=!1){const c=this.elements,d=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),h=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Wn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Qr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new P,bn=new _e,Ld=new P(0,0,0),Pd=new P(1,1,1),xi=new P,vr=new P,on=new P,tc=new _e,ec=new nr;class jn{constructor(t=0,e=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],f=i[6],h=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dd=0;const nc=new P,os=new nr,ni=new _e,xr=new P,Us=new P,Ud=new P,Nd=new nr,ic=new P(1,0,0),sc=new P(0,1,0),rc=new P(0,0,1),oc={type:"added"},kd={type:"removed"},as={type:"childadded",child:null},Io={type:"childremoved",child:null};class Ae extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new P,e=new jn,n=new nr,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Xt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Us,xr,this.up):ni.lookAt(xr,Us,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),os.setFromRotationMatrix(ni),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),u=o(t.shapes),f=o(t.skeletons),h=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new P(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new P,ii=new P,Lo=new P,si=new P,ls=new P,cs=new P,ac=new P,Po=new P,Do=new P,Uo=new P,No=new ce,ko=new ce,Fo=new ce;class xn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){En.subVectors(i,e),ii.subVectors(n,e),Lo.subVectors(t,e);const o=En.dot(En),a=En.dot(ii),l=En.dot(Lo),c=ii.dot(ii),d=ii.dot(Lo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,h=(c*l-a*d)*f,p=(o*d-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return No.setScalar(0),ko.setScalar(0),Fo.setScalar(0),No.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,n),Fo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(No,r.x),o.addScaledVector(ko,r.y),o.addScaledVector(Fo,r.z),o}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),ii.subVectors(t,e),En.cross(ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),En.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ls.subVectors(i,n),cs.subVectors(r,n),Po.subVectors(t,n);const l=ls.dot(Po),c=cs.dot(Po);if(l<=0&&c<=0)return e.copy(n);Do.subVectors(t,i);const d=ls.dot(Do),u=cs.dot(Do);if(d>=0&&u<=d)return e.copy(i);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(ls,o);Uo.subVectors(t,r);const h=ls.dot(Uo),p=cs.dot(Uo);if(p>=0&&h<=p)return e.copy(r);const x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(cs,a);const _=d*p-h*u;if(_<=0&&u-d>=0&&h-p>=0)return ac.subVectors(r,i),a=(u-d)/(u-d+(h-p)),e.copy(i).addScaledVector(ac,a);const m=1/(_+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Oo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=ul(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oo(o,r,t+1/3),this.g=Oo(o,r,t),this.b=Oo(o,r,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ie.workingToColorSpace(Be.copy(this),t),Math.round(Jt(Be.r*255,0,255))*65536+Math.round(Jt(Be.g*255,0,255))*256+Math.round(Jt(Be.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,r=Be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=tn){ie.workingToColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Mr);const n=qs(Mi.h,Mr.h,e),i=qs(Mi.s,Mr.s,e),r=qs(Mi.l,Mr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Ft;Ft.NAMES=Ch;let Fd=0;class Ji extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=vs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vi extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new P,yr=new te;let Od=0;class Yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}}class Ih extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const gn=new _e,Bo=new Ae,hs=new P,an=new ir,Ns=new ir,Le=new P;class Ze extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Th(t)?Lh:Ih)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(an.min,Ns.min),an.expandByPoint(Le),Le.addVectors(an.max,Ns.max),an.expandByPoint(Le)):(an.expandByPoint(Ns.min),an.expandByPoint(Ns.max))}an.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Le.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),Le.add(hs)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new P,l[U]=new P;const c=new P,d=new P,u=new P,f=new te,h=new te,p=new te,x=new P,_=new P;function m(U,b,S){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,U),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),d.sub(c),u.sub(c),h.sub(f),p.sub(f);const I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(u,-h.y).multiplyScalar(I),_.copy(u).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(I),a[U].add(x),a[b].add(x),a[S].add(x),l[U].add(_),l[b].add(_),l[S].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,b=E.length;U<b;++U){const S=E[U],I=S.start,L=S.count;for(let F=I,z=I+L;F<z;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const g=new P,v=new P,w=new P,A=new P;function R(U){w.fromBufferAttribute(i,U),A.copy(w);const b=a[U];g.copy(b),g.sub(w.multiplyScalar(w.dot(b))).normalize(),v.crossVectors(A,b);const I=v.dot(l[U])<0?-1:1;o.setXYZW(U,g.x,g.y,g.z,I)}for(let U=0,b=E.length;U<b;++U){const S=E[U],I=S.start,L=S.count;for(let F=I,z=I+L;F<z;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,d=new P,u=new P;if(t)for(let f=0,h=t.count;f<h;f+=3){const p=t.getX(f+0),x=t.getX(f+1),_=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,_),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let h=0,p=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*d;for(let m=0;m<d;m++)f[p++]=c[h++]}return new Yn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],h=t(f,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const h=c[u];d.push(h.toJSON(t.data))}d.length>0&&(i[l]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new _e,ki=new fl,Sr=new sr,cc=new P,br=new P,Er=new P,wr=new P,zo=new P,Tr=new P,hc=new P,Ar=new P;class He extends Ae{constructor(t=new Ze,e=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(zo.fromBufferAttribute(u,t),o?Tr.addScaledVector(zo,d):Tr.addScaledVector(zo.sub(e),d))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Sr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Sr,cc)===null||ki.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(r).invert(),ki.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const _=f[p],m=o[_.materialIndex],E=Math.max(_.start,h.start),g=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let v=E,w=g;v<w;v+=3){const A=a.getX(v),R=a.getX(v+1),U=a.getX(v+2);i=Rr(this,m,t,n,c,d,u,A,R,U),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let _=p,m=x;_<m;_+=3){const E=a.getX(_),g=a.getX(_+1),v=a.getX(_+2);i=Rr(this,o,t,n,c,d,u,E,g,v),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const _=f[p],m=o[_.materialIndex],E=Math.max(_.start,h.start),g=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let v=E,w=g;v<w;v+=3){const A=v,R=v+1,U=v+2;i=Rr(this,m,t,n,c,d,u,A,R,U),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let _=p,m=x;_<m;_+=3){const E=_,g=_+1,v=_+2;i=Rr(this,o,t,n,c,d,u,E,g,v),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function zd(s,t,e,n,i,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ci,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:s}}function Rr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,br),s.getVertexPosition(l,Er),s.getVertexPosition(c,wr);const d=zd(s,t,e,n,br,Er,wr,hc);if(d){const u=new P;xn.getBarycoord(hc,br,Er,wr,u),i&&(d.uv=xn.getInterpolatedAttribute(i,a,l,c,u,new te)),r&&(d.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new te)),o&&(d.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};xn.getNormal(br,Er,wr,f.normal),d.face=f,d.barycoord=u}return d}class Ii extends Ze{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,h=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(u,2));function p(x,_,m,E,g,v,w,A,R,U,b){const S=v/R,I=w/U,L=v/2,F=w/2,z=A/2,B=R+1,W=U+1;let $=0,V=0;const J=new P;for(let st=0;st<W;st++){const pt=st*I-F;for(let Ht=0;Ht<B;Ht++){const ee=Ht*S-L;J[x]=ee*E,J[_]=pt*g,J[m]=z,c.push(J.x,J.y,J.z),J[x]=0,J[_]=0,J[m]=A>0?1:-1,d.push(J.x,J.y,J.z),u.push(Ht/R),u.push(1-st/U),$+=1}}for(let st=0;st<U;st++)for(let pt=0;pt<R;pt++){const Ht=f+pt+B*st,ee=f+pt+B*(st+1),Ot=f+(pt+1)+B*(st+1),Vt=f+(pt+1)+B*st;l.push(Ht,ee,Vt),l.push(ee,Ot,Vt),V+=6}a.addGroup(h,V,b),h+=V,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(s){const t={};for(let e=0;e<s.length;e++){const n=Ts(s[e]);for(const i in n)t[i]=n[i]}return t}function Hd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ph(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Gd={clone:Ts,merge:Xe};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new P,uc=new te,dc=new te;class un extends Dh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,uc,dc),e.subVectors(dc,uc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,ds=1;class Xd extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(us,ds,t,e);i.layers=this.layers,this.add(i);const r=new un(us,ds,t,e);r.layers=this.layers,this.add(r);const o=new un(us,ds,t,e);o.layers=this.layers,this.add(o);const a=new un(us,ds,t,e);a.layers=this.layers,this.add(a);const l=new un(us,ds,t,e);l.layers=this.layers,this.add(l);const c=new un(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,f,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Uh extends je{constructor(t=[],e=bs,n,i,r,o,a,l,c,d){super(t,e,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qd extends ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Uh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ii(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:wi});r.uniforms.tEquirect.value=e;const o=new He(i,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=Vn),new Xd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class Mn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const _=e.getJointPose(x,n),m=this._getHandJoint(c,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class pl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new pl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $d extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Go=new P,Kd=new P,jd=new Xt;class zi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Go.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jd.getNormalMatrix(t),i=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new sr,Zd=new te(.5,.5),Cr=new P;class ml{constructor(t=new zi,e=new zi,n=new zi,i=new zi,r=new zi,o=new zi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],h=r[7],p=r[8],x=r[9],_=r[10],m=r[11],E=r[12],g=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-o,h-d,m-p,w-E).normalize(),i[1].setComponents(c+o,h+d,m+p,w+E).normalize(),i[2].setComponents(c+a,h+u,m+x,w+g).normalize(),i[3].setComponents(c-a,h-u,m-x,w-g).normalize(),n)i[4].setComponents(l,f,_,v).normalize(),i[5].setComponents(c-l,h-f,m-_,w-v).normalize();else if(i[4].setComponents(c-l,h-f,m-_,w-v).normalize(),e===Wn)i[5].setComponents(c+l,h+f,m+_,w+v).normalize();else if(e===Qr)i[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);const e=Zd.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nh extends Ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eo=new P,no=new P,fc=new _e,ks=new fl,Ir=new sr,Vo=new P,pc=new P;class Jd extends Ae{constructor(t=new Ze,e=new Nh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)eo.fromBufferAttribute(e,i-1),no.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=eo.distanceTo(no);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;fc.copy(i).invert(),ks.copy(t.ray).applyMatrix4(fc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,_=p-1;x<_;x+=c){const m=d.getX(x),E=d.getX(x+1),g=Lr(this,t,ks,l,m,E,x);g&&e.push(g)}if(this.isLineLoop){const x=d.getX(p-1),_=d.getX(h),m=Lr(this,t,ks,l,x,_,p-1);m&&e.push(m)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,_=p-1;x<_;x+=c){const m=Lr(this,t,ks,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Lr(this,t,ks,l,p-1,h,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(eo.fromBufferAttribute(a,i),no.fromBufferAttribute(a,r),e.distanceSqToSegment(eo,no,Vo,pc)>n)return;Vo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Vo);if(!(c<t.near||c>t.far))return{distance:c,point:pc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const mc=new P,gc=new P;class Qd extends Jd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)mc.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mc.distanceTo(gc);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kh extends Ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _c=new _e,Xa=new fl,Pr=new sr,Dr=new P;class tf extends Ae{constructor(t=new Ze,e=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;_c.copy(i).invert(),Xa.copy(t.ray).applyMatrix4(_c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){const _=c.getX(p);Dr.fromBufferAttribute(u,_),vc(Dr,_,l,i,t,e,this)}}else{const f=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Dr.fromBufferAttribute(u,p),vc(Dr,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vc(s,t,e,n,i,r,o){const a=Xa.distanceSqToPoint(s);if(a<e){const l=new P;Xa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Fh extends je{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oh extends je{constructor(t,e,n=Ki,i,r,o,a=fn,l=fn,c,d=Ks,u=1){if(d!==Ks&&d!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bh extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class io extends Ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,d=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const h=n+u/e*i;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,l.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gl extends Ze{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],u=[],f=[],h=[];let p=0;const x=[],_=n/2;let m=0;E(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(h,2));function E(){const v=new P,w=new P;let A=0;const R=(e-t)/n;for(let U=0;U<=r;U++){const b=[],S=U/r,I=S*(e-t)+t;for(let L=0;L<=i;L++){const F=L/i,z=F*l+a,B=Math.sin(z),W=Math.cos(z);w.x=I*B,w.y=-S*n+_,w.z=I*W,u.push(w.x,w.y,w.z),v.set(B,R,W).normalize(),f.push(v.x,v.y,v.z),h.push(F,1-S),b.push(p++)}x.push(b)}for(let U=0;U<i;U++)for(let b=0;b<r;b++){const S=x[b][U],I=x[b+1][U],L=x[b+1][U+1],F=x[b][U+1];(t>0||b!==0)&&(d.push(S,I,F),A+=3),(e>0||b!==r-1)&&(d.push(I,L,F),A+=3)}c.addGroup(m,A,0),m+=A}function g(v){const w=p,A=new te,R=new P;let U=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,_*S,0),f.push(0,S,0),h.push(.5,.5),p++;const I=p;for(let L=0;L<=i;L++){const z=L/i*l+a,B=Math.cos(z),W=Math.sin(z);R.x=b*W,R.y=_*S,R.z=b*B,u.push(R.x,R.y,R.z),f.push(0,S,0),A.x=B*.5+.5,A.y=W*.5*S+.5,h.push(A.x,A.y),p++}for(let L=0;L<i;L++){const F=w+L,z=I+L;v===!0?d.push(z,z+1,F):d.push(z+1,z,F),U+=3}c.addGroup(m,U,v===!0?1:2),m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Ur=new P,Nr=new P,Wo=new P,kr=new xn;class ef extends Ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(xs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),f={},h=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:_,c:m}=kr;if(x.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),kr.getNormal(Wo),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const g=(E+1)%3,v=u[E],w=u[g],A=kr[d[E]],R=kr[d[g]],U=`${v}_${w}`,b=`${w}_${v}`;b in f&&f[b]?(Wo.dot(f[b].normal)<=r&&(h.push(A.x,A.y,A.z),h.push(R.x,R.y,R.z)),f[b]=null):U in f||(f[U]={index0:c[E],index1:c[g],normal:Wo.clone()})}}for(const p in f)if(f[p]){const{index0:x,index1:_}=f[p];Ur.fromBufferAttribute(a,x),Nr.fromBufferAttribute(a,_),h.push(Ur.x,Ur.y,Ur.z),h.push(Nr.x,Nr.y,Nr.z)}this.setAttribute("position",new ge(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ao extends Ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=t/a,f=e/l,h=[],p=[],x=[],_=[];for(let m=0;m<d;m++){const E=m*f-o;for(let g=0;g<c;g++){const v=g*u-r;p.push(v,-E,0),x.push(0,0,1),_.push(g/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const g=E+c*m,v=E+c*(m+1),w=E+1+c*(m+1),A=E+1+c*m;h.push(g,v,A),h.push(v,w,A)}this.setIndex(h),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.width,t.height,t.widthSegments,t.heightSegments)}}class _l extends Ze{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let u=t;const f=(e-t)/i,h=new P,p=new te;for(let x=0;x<=i;x++){for(let _=0;_<=n;_++){const m=r+_/n*o;h.x=u*Math.cos(m),h.y=u*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/e+1)/2,p.y=(h.y/e+1)/2,d.push(p.x,p.y)}u+=f}for(let x=0;x<i;x++){const _=x*(n+1);for(let m=0;m<n;m++){const E=m+_,g=E,v=E+n+1,w=E+n+2,A=E+1;a.push(g,v,A),a.push(v,w,A)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fn extends Ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nf extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sf extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vl extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rf extends vl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xo=new _e,xc=new P,Mc=new P;class zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(xc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yc=new _e,Fs=new P,qo=new P;class of extends zh{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),qo.copy(n.position),qo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qo),n.updateMatrixWorld(),i.makeTranslation(-Fs.x,-Fs.y,-Fs.z),yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc,n.coordinateSystem,n.reversedDepth)}}class Sc extends vl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new of}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hh extends Dh{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class af extends zh{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lf extends vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new af}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cf extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function bc(s,t,e,n){const i=hf(n);switch(e){case Mh:return s*t;case Sh:return s*t/i.components*i.byteLength;case ll:return s*t/i.components*i.byteLength;case bh:return s*t*2/i.components*i.byteLength;case cl:return s*t*2/i.components*i.byteLength;case yh:return s*t*3/i.components*i.byteLength;case kn:return s*t*4/i.components*i.byteLength;case hl:return s*t*4/i.components*i.byteLength;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case va:case Ma:return Math.max(s,16)*Math.max(t,8)/4;case _a:case xa:return Math.max(s,8)*Math.max(t,8)/2;case ya:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Ba:case za:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ha:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Va:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hf(s){switch(s){case Kn:case gh:return{byteLength:1,components:1};case Ys:case _h:case er:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Ki:case rl:case oi:return{byteLength:4,components:1};case vh:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uf(s){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,d),a.onUploadCallback();let h;if(c instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=s.SHORT;else if(c instanceof Uint32Array)h=s.UNSIGNED_INT;else if(c instanceof Int32Array)h=s.INT;else if(c instanceof Int8Array)h=s.BYTE;else if(c instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,d);else{u.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<u.length;h++){const p=u[f],x=u[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let h=0,p=u.length;h<p;h++){const x=u[h];s.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Om=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:xf,batching_pars_vertex:Mf,batching_vertex:yf,begin_vertex:Sf,beginnormal_vertex:bf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:If,color_fragment:Lf,color_pars_fragment:Pf,color_pars_vertex:Df,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:zf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:$f,fog_vertex:Kf,fog_pars_vertex:jf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:vp,map_pars_fragment:xp,map_particle_fragment:Mp,map_particle_pars_fragment:yp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Ep,morphcolor_vertex:wp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Ip,normal_pars_fragment:Lp,normal_pars_vertex:Pp,normal_vertex:Dp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:$p,shadowmap_vertex:Kp,shadowmask_pars_fragment:jp,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:vm,distanceRGBA_vert:xm,distanceRGBA_frag:Mm,equirect_vert:ym,equirect_frag:Sm,linedashed_vert:bm,linedashed_frag:Em,meshbasic_vert:wm,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Im,meshnormal_vert:Lm,meshnormal_frag:Pm,meshphong_vert:Dm,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:km,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Bm,points_frag:zm,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},at={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Hn={basic:{uniforms:Xe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Xe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Xe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Xe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Xe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Xe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Xe([at.points,at.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Xe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Xe([at.common,at.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Xe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Xe([at.sprite,at.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Xe([at.common,at.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Xe([at.lights,at.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Hn.physical={uniforms:Xe([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Fr={r:0,b:0,g:0},Oi=new jn,Xm=new _e;function qm(s,t,e,n,i,r,o){const a=new Ft(0);let l=r===!0?0:1,c,d,u=null,f=0,h=null;function p(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?e:t).get(v)),v}function x(g){let v=!1;const w=p(g);w===null?m(a,l):w&&w.isColor&&(m(w,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(g,v){const w=p(v);w&&(w.isCubeTexture||w.mapping===oo)?(d===void 0&&(d=new He(new Ii(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Ts(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Oi.copy(v.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Oi)),d.material.toneMapped=ie.getTransfer(w.colorSpace)!==le,(u!==w||f!==w.version||h!==s.toneMapping)&&(d.material.needsUpdate=!0,u=w,f=w.version,h=s.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new He(new ao(2,2),new Zn({name:"BackgroundMaterial",uniforms:Ts(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(w.colorSpace)!==le,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,h=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,v){g.getRGB(Fr,Ph(s)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,v,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:x,addToRenderList:_,dispose:E}}function Ym(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,I,L,F,z){let B=!1;const W=u(F,L,I);r!==W&&(r=W,c(r.object)),B=h(S,F,L,z),B&&p(S,F,L,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(S,I,L,F),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function d(S){return s.deleteVertexArray(S)}function u(S,I,L){const F=L.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let B=z[I.id];B===void 0&&(B={},z[I.id]=B);let W=B[F];return W===void 0&&(W=f(l()),B[F]=W),W}function f(S){const I=[],L=[],F=[];for(let z=0;z<e;z++)I[z]=0,L[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:F,object:S,attributes:{},index:null}}function h(S,I,L,F){const z=r.attributes,B=I.attributes;let W=0;const $=L.getAttributes();for(const V in $)if($[V].location>=0){const st=z[V];let pt=B[V];if(pt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),st===void 0||st.attribute!==pt||pt&&st.data!==pt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function p(S,I,L,F){const z={},B=I.attributes;let W=0;const $=L.getAttributes();for(const V in $)if($[V].location>=0){let st=B[V];st===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));const pt={};pt.attribute=st,st&&st.data&&(pt.data=st.data),z[V]=pt,W++}r.attributes=z,r.attributesNum=W,r.index=F}function x(){const S=r.newAttributes;for(let I=0,L=S.length;I<L;I++)S[I]=0}function _(S){m(S,0)}function m(S,I){const L=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;L[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),z[S]!==I&&(s.vertexAttribDivisor(S,I),z[S]=I)}function E(){const S=r.newAttributes,I=r.enabledAttributes;for(let L=0,F=I.length;L<F;L++)I[L]!==S[L]&&(s.disableVertexAttribArray(L),I[L]=0)}function g(S,I,L,F,z,B,W){W===!0?s.vertexAttribIPointer(S,I,L,z,B):s.vertexAttribPointer(S,I,L,F,z,B)}function v(S,I,L,F){x();const z=F.attributes,B=L.getAttributes(),W=I.defaultAttributeValues;for(const $ in B){const V=B[$];if(V.location>=0){let J=z[$];if(J===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const st=J.normalized,pt=J.itemSize,Ht=t.get(J);if(Ht===void 0)continue;const ee=Ht.buffer,Ot=Ht.type,Vt=Ht.bytesPerElement,q=Ot===s.INT||Ot===s.UNSIGNED_INT||J.gpuType===rl;if(J.isInterleavedBufferAttribute){const j=J.data,lt=j.stride,At=J.offset;if(j.isInstancedInterleavedBuffer){for(let vt=0;vt<V.locationSize;vt++)m(V.location+vt,j.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let vt=0;vt<V.locationSize;vt++)_(V.location+vt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let vt=0;vt<V.locationSize;vt++)g(V.location+vt,pt/V.locationSize,Ot,st,lt*Vt,(At+pt/V.locationSize*vt)*Vt,q)}else{if(J.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)m(V.location+j,J.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<V.locationSize;j++)_(V.location+j);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let j=0;j<V.locationSize;j++)g(V.location+j,pt/V.locationSize,Ot,st,pt*Vt,pt/V.locationSize*j*Vt,q)}}else if(W!==void 0){const st=W[$];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(V.location,st);break;case 3:s.vertexAttrib3fv(V.location,st);break;case 4:s.vertexAttrib4fv(V.location,st);break;default:s.vertexAttrib1fv(V.location,st)}}}}E()}function w(){U();for(const S in n){const I=n[S];for(const L in I){const F=I[L];for(const z in F)d(F[z].object),delete F[z];delete I[L]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const L in I){const F=I[L];for(const z in F)d(F[z].object),delete F[z];delete I[L]}delete n[S.id]}function R(S){for(const I in n){const L=n[I];if(L[S.id]===void 0)continue;const F=L[S.id];for(const z in F)d(F[z].object),delete F[z];delete L[S.id]}}function U(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:_,disableUnusedAttributes:E}}function $m(s,t,e){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,u){u!==0&&(s.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function a(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let h=0;for(let p=0;p<u;p++)h+=d[p];e.update(h,n,1)}function l(c,d,u,f){if(u===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],d[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=d[x]*f[x];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Km(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==kn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Kn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!U)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:E,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function jm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new zi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||i;return i=f,n=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,h){const p=u.clippingPlanes,x=u.clipIntersection,_=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!_)r?d(null):c();else{const E=r?0:n,g=E*4;let v=m.clippingState||null;l.value=v,v=d(p,f,g,h);for(let w=0;w!==g;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,f,h,p){const x=u!==null?u.length:0;let _=null;if(x!==0){if(_=l.value,p!==!0||_===null){const m=h+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<m)&&(_=new Float32Array(m));for(let g=0,v=h;g!==x;++g,v+=4)o.copy(u[g]).applyMatrix4(E,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}function Zm(s){let t=new WeakMap;function e(o,a){return a===fa?o.mapping=bs:a===pa&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===pa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qd(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const gs=4,Ec=[.125,.215,.35,.446,.526,.582],Wi=20,Yo=new Hh,wc=new Ft;let $o=null,Ko=0,jo=0,Zo=!1;const Hi=(1+Math.sqrt(5))/2,fs=1/Hi,Tc=[new P(-Hi,fs,0),new P(Hi,fs,0),new P(-fs,0,Hi),new P(fs,0,Hi),new P(0,Hi,-fs),new P(0,Hi,fs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Jm=new P;class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Jm}=r;$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Ko,jo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:er,format:kn,colorSpace:ws,depthBuffer:!1},i=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=t0(r,t,e)}return i}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,i,r){const l=new un(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(wc),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new Vi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new He(new Ii,x);let m=!1;const E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,m=!0):(x.color.copy(wc),m=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[g],r.y,r.z)):v===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[g]));const w=this._cubeSize;Or(i,v*w,g>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bs||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tc[(i-r-1)%Tc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new He(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Wi-1),x=r/p,_=isFinite(r)?1+Math.floor(d*x):Wi;_>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Wi}`);const m=[];let E=0;for(let R=0;R<Wi;++R){const U=R/x,b=Math.exp(-U*U/2);m.push(b),R===0?E+=b:R<_&&(E+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=p,f.mipInt.value=g-n;const v=this._sizeLods[i],w=3*v*(i>g-gs?i-g+gs:0),A=4*(this._cubeSize-v);Or(e,w,A,3*v,2*v),l.setRenderTarget(e),l.render(u,Yo)}}function Qm(s){const t=[],e=[],n=[];let i=s;const r=s-gs+1+Ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-gs?l=Ec[o-s+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,p=6,x=3,_=2,m=1,E=new Float32Array(x*p*h),g=new Float32Array(_*p*h),v=new Float32Array(m*p*h);for(let A=0;A<h;A++){const R=A%3*2/3-1,U=A>2?0:-1,b=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(b,x*p*A),g.set(f,_*p*A);const S=[A,A,A,A,A,A];v.set(S,m*p*A)}const w=new Ze;w.setAttribute("position",new Yn(E,x)),w.setAttribute("uv",new Yn(g,_)),w.setAttribute("faceIndex",new Yn(v,m)),t.push(w),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(s,t,e){const n=new ji(s,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function t0(s,t,e){const n=new Float32Array(Wi),i=new P(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Cc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ic(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}function e0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===pa,d=l===bs||l===Es;if(c||d){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ac(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const h=a.image;return c&&h&&h.height>0||d&&h&&i(h)?(e===null&&(e=new Ac(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function n0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function i0(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const h in f)t.update(f[h],s.ARRAY_BUFFER)}function c(u){const f=[],h=u.index,p=u.attributes.position;let x=0;if(h!==null){const E=h.array;x=h.version;for(let g=0,v=E.length;g<v;g+=3){const w=E[g+0],A=E[g+1],R=E[g+2];f.push(w,A,A,R,R,w)}}else if(p!==void 0){const E=p.array;x=p.version;for(let g=0,v=E.length/3-1;g<v;g+=3){const w=g+0,A=g+1,R=g+2;f.push(w,A,A,R,R,w)}}else return;const _=new(Th(f)?Lh:Ih)(f,1);_.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,_)}function d(u){const f=r.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function s0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){s.drawElements(n,h,r,f*o),e.update(h,n,1)}function c(f,h,p){p!==0&&(s.drawElementsInstanced(n,h,r,f*o,p),e.update(h,n,p))}function d(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];e.update(_,n,1)}function u(f,h,p,x){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{_.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,x,0,p);let m=0;for(let E=0;E<p;E++)m+=h[E]*x[E];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function r0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o0(s,t,e){const n=new WeakMap,i=new ce;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var h=S;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let w=a.attributes.position.count*v,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*A*4*u),U=new Ah(R,w,A,u);U.type=oi,U.needsUpdate=!0;const b=v*4;for(let I=0;I<u;I++){const L=m[I],F=E[I],z=g[I],B=w*A*4*I;for(let W=0;W<L.count;W++){const $=W*b;p===!0&&(i.fromBufferAttribute(L,W),R[B+$+0]=i.x,R[B+$+1]=i.y,R[B+$+2]=i.z,R[B+$+3]=0),x===!0&&(i.fromBufferAttribute(F,W),R[B+$+4]=i.x,R[B+$+5]=i.y,R[B+$+6]=i.z,R[B+$+7]=0),_===!0&&(i.fromBufferAttribute(z,W),R[B+$+8]=i.x,R[B+$+9]=i.y,R[B+$+10]=i.z,R[B+$+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:U,size:new te(w,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function a0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=t.get(l,d);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Vh=new je,Lc=new Oh(1,1),Wh=new Ah,Xh=new Cd,qh=new Uh,Pc=[],Dc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),kc=new Float32Array(4);function Cs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Pc[i];if(r===void 0&&(r=new Float32Array(i),Pc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lo(s,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function l0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function c0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function h0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function u0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function d0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),Ce(e,n)}}function f0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Nc.set(n),s.uniformMatrix3fv(this.addr,!1,Nc),Ce(e,n)}}function p0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Uc.set(n),s.uniformMatrix4fv(this.addr,!1,Uc),Ce(e,n)}}function m0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function g0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function _0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function v0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function x0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function M0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function S0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function b0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Lc.compareFunction=wh,r=Lc):r=Vh,e.setTexture2D(t||r,i)}function E0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xh,i)}function w0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qh,i)}function T0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wh,i)}function A0(s){switch(s){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return x0;case 36294:return M0;case 36295:return y0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return T0}}function R0(s,t){s.uniform1fv(this.addr,t)}function C0(s,t){const e=Cs(t,this.size,2);s.uniform2fv(this.addr,e)}function I0(s,t){const e=Cs(t,this.size,3);s.uniform3fv(this.addr,e)}function L0(s,t){const e=Cs(t,this.size,4);s.uniform4fv(this.addr,e)}function P0(s,t){const e=Cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function D0(s,t){const e=Cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function U0(s,t){const e=Cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function N0(s,t){s.uniform1iv(this.addr,t)}function k0(s,t){s.uniform2iv(this.addr,t)}function F0(s,t){s.uniform3iv(this.addr,t)}function O0(s,t){s.uniform4iv(this.addr,t)}function B0(s,t){s.uniform1uiv(this.addr,t)}function z0(s,t){s.uniform2uiv(this.addr,t)}function H0(s,t){s.uniform3uiv(this.addr,t)}function G0(s,t){s.uniform4uiv(this.addr,t)}function V0(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Vh,r[o])}function W0(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xh,r[o])}function X0(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||qh,r[o])}function q0(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wh,r[o])}function Y0(s){switch(s){case 5126:return R0;case 35664:return C0;case 35665:return I0;case 35666:return L0;case 35674:return P0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return k0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}}class K0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y0(e.type)}}class j0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Fc(s,t){s.seq.push(t),s.map[t.id]=t}function Z0(s,t,e){const n=s.name,i=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),o=Jo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fc(e,c===void 0?new $0(a,s,t):new K0(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new j0(a),Fc(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Z0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Oc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const J0=37297;let Q0=0;function tg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Bc=new Xt;function eg(s){ie._getMatrix(Bc,ie.workingColorSpace,s);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Jr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function zc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tg(s.getShaderSource(t),a)}else return r}function ng(s,t){const e=eg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ig(s,t){let e;switch(t){case Gu:e="Linear";break;case Vu:e="Reinhard";break;case Wu:e="Cineon";break;case Xu:e="ACESFilmic";break;case Yu:e="AgX";break;case $u:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Br=new P;function sg(){ie.getLuminanceCoefficients(Br);const s=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function og(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Hs(s){return s!==""}function Hc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(s){return s.replace(lg,hg)}const cg=new Map;function hg(s,t){let e=$t[t];if(e===void 0){const n=cg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qa(e)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(s){return s.replace(ug,dg)}function dg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function fg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case Es:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sl:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function _g(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vg(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=fg(e),c=pg(e),d=mg(e),u=gg(e),f=_g(e),h=rg(e),p=og(r),x=i.createProgram();let _,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(_=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ti?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=qa(o),o=Hc(o,e),o=Gc(o,e),a=qa(a),a=Hc(a,e),a=Gc(a,e),o=Vc(o),a=Vc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=E+_+o,v=E+m+a,w=Oc(i,i.VERTEX_SHADER,g),A=Oc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,w),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(w)||"",z=i.getShaderInfoLog(A)||"",B=L.trim(),W=F.trim(),$=z.trim();let V=!0,J=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,A);else{const st=zc(i,w,"vertex"),pt=zc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+st+`
`+pt)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||$==="")&&(J=!1);J&&(I.diagnostics={runnable:V,programLog:B,vertexShader:{log:W,prefix:_},fragmentShader:{log:$,prefix:m}})}i.deleteShader(w),i.deleteShader(A),U=new $r(i,x),b=ag(i,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,J0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let xg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yg(t),e.set(t,n)),n}}class yg{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}}function Sg(s,t,e,n,i,r,o){const a=new Rh,l=new Mg,c=new Set,d=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,S,I,L,F){const z=L.fog,B=F.geometry,W=b.isMeshStandardMaterial?L.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),V=$&&$.mapping===oo?$.image.height:null,J=p[b.type];b.precision!==null&&(h=i.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,pt=st!==void 0?st.length:0;let Ht=0;B.morphAttributes.position!==void 0&&(Ht=1),B.morphAttributes.normal!==void 0&&(Ht=2),B.morphAttributes.color!==void 0&&(Ht=3);let ee,Ot,Vt,q;if(J){const re=Hn[J];ee=re.vertexShader,Ot=re.fragmentShader}else ee=b.vertexShader,Ot=b.fragmentShader,l.update(b),Vt=l.getVertexShaderID(b),q=l.getFragmentShaderID(b);const j=s.getRenderTarget(),lt=s.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,qt=!!b.map,Fe=!!b.matcap,C=!!$,pe=!!b.aoMap,Gt=!!b.lightMap,Ut=!!b.bumpMap,xt=!!b.normalMap,me=!!b.displacementMap,Mt=!!b.emissiveMap,Yt=!!b.metalnessMap,Ie=!!b.roughnessMap,ye=b.anisotropy>0,T=b.clearcoat>0,M=b.dispersion>0,O=b.iridescence>0,Y=b.sheen>0,Z=b.transmission>0,X=ye&&!!b.anisotropyMap,wt=T&&!!b.clearcoatMap,rt=T&&!!b.clearcoatNormalMap,St=T&&!!b.clearcoatRoughnessMap,bt=O&&!!b.iridescenceMap,et=O&&!!b.iridescenceThicknessMap,ut=Y&&!!b.sheenColorMap,Dt=Y&&!!b.sheenRoughnessMap,Et=!!b.specularMap,ct=!!b.specularColorMap,Wt=!!b.specularIntensityMap,D=Z&&!!b.transmissionMap,nt=Z&&!!b.thicknessMap,ot=!!b.gradientMap,mt=!!b.alphaMap,Q=b.alphaTest>0,K=!!b.alphaHash,_t=!!b.extensions;let Bt=Ti;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Bt=s.toneMapping);const ue={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:ee,fragmentShader:Ot,defines:b.defines,customVertexShaderID:Vt,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ws,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:Fe,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:V,aoMap:pe,lightMap:Gt,bumpMap:Ut,normalMap:xt,displacementMap:f&&me,emissiveMap:Mt,normalMapObjectSpace:xt&&b.normalMapType===Ju,normalMapTangentSpace:xt&&b.normalMapType===Eh,metalnessMap:Yt,roughnessMap:Ie,anisotropy:ye,anisotropyMap:X,clearcoat:T,clearcoatMap:wt,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:M,iridescence:O,iridescenceMap:bt,iridescenceThicknessMap:et,sheen:Y,sheenColorMap:ut,sheenRoughnessMap:Dt,specularMap:Et,specularColorMap:ct,specularIntensityMap:Wt,transmission:Z,transmissionMap:D,thicknessMap:nt,gradientMap:ot,opaque:b.transparent===!1&&b.blending===vs&&b.alphaToCoverage===!1,alphaMap:mt,alphaTest:Q,alphaHash:K,combine:b.combine,mapUv:qt&&x(b.map.channel),aoMapUv:pe&&x(b.aoMap.channel),lightMapUv:Gt&&x(b.lightMap.channel),bumpMapUv:Ut&&x(b.bumpMap.channel),normalMapUv:xt&&x(b.normalMap.channel),displacementMapUv:me&&x(b.displacementMap.channel),emissiveMapUv:Mt&&x(b.emissiveMap.channel),metalnessMapUv:Yt&&x(b.metalnessMap.channel),roughnessMapUv:Ie&&x(b.roughnessMap.channel),anisotropyMapUv:X&&x(b.anisotropyMap.channel),clearcoatMapUv:wt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(b.sheenRoughnessMap.channel),specularMapUv:Et&&x(b.specularMap.channel),specularColorMapUv:ct&&x(b.specularColorMap.channel),specularIntensityMapUv:Wt&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:nt&&x(b.thicknessMap.channel),alphaMapUv:mt&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||ye),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(qt||mt),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ht,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===le,decodeVideoTextureEmissive:Mt&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===De,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:_t&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&b.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)S.push(I),S.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(E(S,b),g(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function E(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function g(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=p[b.type];let I;if(S){const L=Hn[S];I=Gd.clone(L.uniforms)}else I=b.uniforms;return I}function w(b,S){let I;for(let L=0,F=d.length;L<F;L++){const z=d[L];if(z.cacheKey===S){I=z,++I.usedTimes;break}}return I===void 0&&(I=new vg(s,S,b,r),d.push(I)),I}function A(b){if(--b.usedTimes===0){const S=d.indexOf(b);d[S]=d[d.length-1],d.pop(),b.destroy()}}function R(b){l.remove(b)}function U(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:U}}function bg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Eg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function qc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,h,p,x,_){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:h,groupOrder:p,renderOrder:u.renderOrder,z:x,group:_},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=_),t++,m}function a(u,f,h,p,x,_){const m=o(u,f,h,p,x,_);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):e.push(m)}function l(u,f,h,p,x,_){const m=o(u,f,h,p,x,_);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||Eg),n.length>1&&n.sort(f||Xc),i.length>1&&i.sort(f||Xc)}function d(){for(let u=t,f=s.length;u<f;u++){const h=s[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function wg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new qc,s.set(n,[o])):i>=r.length?(o=new qc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Tg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ft};break;case"SpotLight":e={position:new P,direction:new P,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Ag(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Rg=0;function Cg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ig(s){const t=new Tg,e=Ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new _e,o=new _e;function a(c){let d=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let h=0,p=0,x=0,_=0,m=0,E=0,g=0,v=0,w=0,A=0,R=0;c.sort(Cg);for(let b=0,S=c.length;b<S;b++){const I=c[b],L=I.color,F=I.intensity,z=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=L.r*F,u+=L.g*F,f+=L.b*F;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],F);R++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,V=e.get(I);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[h]=V,n.directionalShadowMap[h]=B,n.directionalShadowMatrix[h]=I.shadow.matrix,E++}n.directional[h]=W,h++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(L).multiplyScalar(F),W.distance=z,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;const $=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,$.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=$.matrix,I.castShadow){const V=e.get(I);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=B,v++}x++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(L).multiplyScalar(F),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[_]=W,_++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const $=I.shadow,V=e.get(I);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=I.shadow.matrix,g++}n.point[p]=W,p++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(F),W.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[m]=W,m++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==h||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==_||U.hemiLength!==m||U.numDirectionalShadows!==E||U.numPointShadows!==g||U.numSpotShadows!==v||U.numSpotMaps!==w||U.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,U.directionalLength=h,U.pointLength=p,U.spotLength=x,U.rectAreaLength=_,U.hemiLength=m,U.numDirectionalShadows=E,U.numPointShadows=g,U.numSpotShadows=v,U.numSpotMaps=w,U.numLightProbes=R,n.version=Rg++)}function l(c,d){let u=0,f=0,h=0,p=0,x=0;const _=d.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const g=c[m];if(g.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),u++}else if(g.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),h++}else if(g.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(g.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(g.width*.5,0,0),v.halfHeight.set(0,g.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),f++}else if(g.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:n}}function Yc(s){const t=new Ig(s),e=[],n=[];function i(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Lg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Yc(s),t.set(i,[a])):r>=o.length?(a=new Yc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`;function Ug(s,t,e){let n=new ml;const i=new te,r=new te,o=new ce,a=new nf({depthPacking:Zu}),l=new sf,c={},d=e.maxTextureSize,u={[Ci]:nn,[nn]:Ci,[De]:De},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Pg,fragmentShader:Dg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new Ze;p.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new He(p,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ph;let m=this.type;this.render=function(A,R,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(wi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=m!==ri&&this.type===ri,z=m===ri&&this.type!==ri;for(let B=0,W=A.length;B<W;B++){const $=A[B],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const J=V.getFrameExtents();if(i.multiply(J),r.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/J.x),i.x=r.x*J.x,V.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/J.y),i.y=r.y*J.y,V.mapSize.y=r.y)),V.map===null||F===!0||z===!0){const pt=this.type!==ri?{minFilter:fn,magFilter:fn}:{};V.map!==null&&V.map.dispose(),V.map=new ji(i.x,i.y,pt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const st=V.getViewportCount();for(let pt=0;pt<st;pt++){const Ht=V.getViewport(pt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),L.viewport(o),V.updateMatrices($,pt),n=V.getFrustum(),v(R,U,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&E(V,U),V.needsUpdate=!1}m=this.type,_.needsUpdate=!1,s.setRenderTarget(b,S,I)};function E(A,R){const U=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ji(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,U,f,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,U,h,x,null)}function g(A,R,U,b){let S=null;const I=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=U.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=S.uuid,F=R.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let B=z[F];B===void 0&&(B=S.clone(),z[F]=B,R.addEventListener("dispose",w)),S=B}if(S.visible=R.visible,S.wireframe=R.wireframe,b===ri?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=s.properties.get(S);L.light=U}return S}function v(A,R,U,b,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const F=t.update(A),z=A.material;if(Array.isArray(z)){const B=F.groups;for(let W=0,$=B.length;W<$;W++){const V=B[W],J=z[V.materialIndex];if(J&&J.visible){const st=g(A,J,b,S);A.onBeforeShadow(s,A,R,U,F,st,V),s.renderBufferDirect(U,null,F,st,A,V),A.onAfterShadow(s,A,R,U,F,st,V)}}}else if(z.visible){const B=g(A,z,b,S);A.onBeforeShadow(s,A,R,U,F,B,null),s.renderBufferDirect(U,null,F,B,A,null),A.onAfterShadow(s,A,R,U,F,B,null)}}const L=A.children;for(let F=0,z=L.length;F<z;F++)v(L[F],R,U,b,S)}function w(A){A.target.removeEventListener("dispose",w);for(const U in c){const b=c[U],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Ng={[oa]:aa,[la]:ua,[ca]:da,[Ss]:ha,[aa]:oa,[ua]:la,[da]:ca,[ha]:Ss};function kg(s,t){function e(){let D=!1;const nt=new ce;let ot=null;const mt=new ce(0,0,0,0);return{setMask:function(Q){ot!==Q&&!D&&(s.colorMask(Q,Q,Q,Q),ot=Q)},setLocked:function(Q){D=Q},setClear:function(Q,K,_t,Bt,ue){ue===!0&&(Q*=Bt,K*=Bt,_t*=Bt),nt.set(Q,K,_t,Bt),mt.equals(nt)===!1&&(s.clearColor(Q,K,_t,Bt),mt.copy(nt))},reset:function(){D=!1,ot=null,mt.set(-1,0,0,0)}}}function n(){let D=!1,nt=!1,ot=null,mt=null,Q=null;return{setReversed:function(K){if(nt!==K){const _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),nt=K;const Bt=Q;Q=null,this.setClear(Bt)}},getReversed:function(){return nt},setTest:function(K){K?j(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(K){ot!==K&&!D&&(s.depthMask(K),ot=K)},setFunc:function(K){if(nt&&(K=Ng[K]),mt!==K){switch(K){case oa:s.depthFunc(s.NEVER);break;case aa:s.depthFunc(s.ALWAYS);break;case la:s.depthFunc(s.LESS);break;case Ss:s.depthFunc(s.LEQUAL);break;case ca:s.depthFunc(s.EQUAL);break;case ha:s.depthFunc(s.GEQUAL);break;case ua:s.depthFunc(s.GREATER);break;case da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=K}},setLocked:function(K){D=K},setClear:function(K){Q!==K&&(nt&&(K=1-K),s.clearDepth(K),Q=K)},reset:function(){D=!1,ot=null,mt=null,Q=null,nt=!1}}}function i(){let D=!1,nt=null,ot=null,mt=null,Q=null,K=null,_t=null,Bt=null,ue=null;return{setTest:function(re){D||(re?j(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(re){nt!==re&&!D&&(s.stencilMask(re),nt=re)},setFunc:function(re,Qn,Bn){(ot!==re||mt!==Qn||Q!==Bn)&&(s.stencilFunc(re,Qn,Bn),ot=re,mt=Qn,Q=Bn)},setOp:function(re,Qn,Bn){(K!==re||_t!==Qn||Bt!==Bn)&&(s.stencilOp(re,Qn,Bn),K=re,_t=Qn,Bt=Bn)},setLocked:function(re){D=re},setClear:function(re){ue!==re&&(s.clearStencil(re),ue=re)},reset:function(){D=!1,nt=null,ot=null,mt=null,Q=null,K=null,_t=null,Bt=null,ue=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,h=[],p=null,x=!1,_=null,m=null,E=null,g=null,v=null,w=null,A=null,R=new Ft(0,0,0),U=0,b=!1,S=null,I=null,L=null,F=null,z=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=$>=2);let J=null,st={};const pt=s.getParameter(s.SCISSOR_BOX),Ht=s.getParameter(s.VIEWPORT),ee=new ce().fromArray(pt),Ot=new ce().fromArray(Ht);function Vt(D,nt,ot,mt){const Q=new Uint8Array(4),K=s.createTexture();s.bindTexture(D,K),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _t=0;_t<ot;_t++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(nt+_t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return K}const q={};q[s.TEXTURE_2D]=Vt(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(Ss),Ut(!1),xt(Gl),j(s.CULL_FACE),pe(wi);function j(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function lt(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function At(D,nt){return u[D]!==nt?(s.bindFramebuffer(D,nt),u[D]=nt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function vt(D,nt){let ot=h,mt=!1;if(D){ot=f.get(nt),ot===void 0&&(ot=[],f.set(nt,ot));const Q=D.textures;if(ot.length!==Q.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let K=0,_t=Q.length;K<_t;K++)ot[K]=s.COLOR_ATTACHMENT0+K;ot.length=Q.length,mt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,mt=!0);mt&&s.drawBuffers(ot)}function qt(D){return p!==D?(s.useProgram(D),p=D,!0):!1}const Fe={[Gi]:s.FUNC_ADD,[bu]:s.FUNC_SUBTRACT,[Eu]:s.FUNC_REVERSE_SUBTRACT};Fe[wu]=s.MIN,Fe[Tu]=s.MAX;const C={[Au]:s.ZERO,[Ru]:s.ONE,[Cu]:s.SRC_COLOR,[sa]:s.SRC_ALPHA,[Nu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Lu]:s.DST_ALPHA,[Iu]:s.ONE_MINUS_SRC_COLOR,[ra]:s.ONE_MINUS_SRC_ALPHA,[Uu]:s.ONE_MINUS_DST_COLOR,[Pu]:s.ONE_MINUS_DST_ALPHA,[ku]:s.CONSTANT_COLOR,[Fu]:s.ONE_MINUS_CONSTANT_COLOR,[Ou]:s.CONSTANT_ALPHA,[Bu]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(D,nt,ot,mt,Q,K,_t,Bt,ue,re){if(D===wi){x===!0&&(lt(s.BLEND),x=!1);return}if(x===!1&&(j(s.BLEND),x=!0),D!==Su){if(D!==_||re!==b){if((m!==Gi||v!==Gi)&&(s.blendEquation(s.FUNC_ADD),m=Gi,v=Gi),re)switch(D){case vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vl:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,g=null,w=null,A=null,R.set(0,0,0),U=0,_=D,b=re}return}Q=Q||nt,K=K||ot,_t=_t||mt,(nt!==m||Q!==v)&&(s.blendEquationSeparate(Fe[nt],Fe[Q]),m=nt,v=Q),(ot!==E||mt!==g||K!==w||_t!==A)&&(s.blendFuncSeparate(C[ot],C[mt],C[K],C[_t]),E=ot,g=mt,w=K,A=_t),(Bt.equals(R)===!1||ue!==U)&&(s.blendColor(Bt.r,Bt.g,Bt.b,ue),R.copy(Bt),U=ue),_=D,b=!1}function Gt(D,nt){D.side===De?lt(s.CULL_FACE):j(s.CULL_FACE);let ot=D.side===nn;nt&&(ot=!ot),Ut(ot),D.blending===vs&&D.transparent===!1?pe(wi):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const mt=D.stencilWrite;a.setTest(mt),mt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function xt(D){D!==xu?(j(s.CULL_FACE),D!==I&&(D===Gl?s.cullFace(s.BACK):D===Mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),I=D}function me(D){D!==L&&(W&&s.lineWidth(D),L=D)}function Mt(D,nt,ot){D?(j(s.POLYGON_OFFSET_FILL),(F!==nt||z!==ot)&&(s.polygonOffset(nt,ot),F=nt,z=ot)):lt(s.POLYGON_OFFSET_FILL)}function Yt(D){D?j(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function Ie(D){D===void 0&&(D=s.TEXTURE0+B-1),J!==D&&(s.activeTexture(D),J=D)}function ye(D,nt,ot){ot===void 0&&(J===null?ot=s.TEXTURE0+B-1:ot=J);let mt=st[ot];mt===void 0&&(mt={type:void 0,texture:void 0},st[ot]=mt),(mt.type!==D||mt.texture!==nt)&&(J!==ot&&(s.activeTexture(ot),J=ot),s.bindTexture(D,nt||q[D]),mt.type=D,mt.texture=nt)}function T(){const D=st[J];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(D){ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function Dt(D){Ot.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Ot.copy(D))}function Et(D,nt){let ot=c.get(nt);ot===void 0&&(ot=new WeakMap,c.set(nt,ot));let mt=ot.get(D);mt===void 0&&(mt=s.getUniformBlockIndex(nt,D.name),ot.set(D,mt))}function ct(D,nt){const mt=c.get(nt).get(D);l.get(nt)!==mt&&(s.uniformBlockBinding(nt,mt,D.__bindingPointIndex),l.set(nt,mt))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,st={},u={},f=new WeakMap,h=[],p=null,x=!1,_=null,m=null,E=null,g=null,v=null,w=null,A=null,R=new Ft(0,0,0),U=0,b=!1,S=null,I=null,L=null,F=null,z=null,ee.set(0,0,s.canvas.width,s.canvas.height),Ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:lt,bindFramebuffer:At,drawBuffers:vt,useProgram:qt,setBlending:pe,setMaterial:Gt,setFlipSided:Ut,setCullFace:xt,setLineWidth:me,setPolygonOffset:Mt,setScissorTest:Yt,activeTexture:Ie,bindTexture:ye,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:bt,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:ct,texStorage2D:rt,texStorage3D:St,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:wt,scissor:ut,viewport:Dt,reset:Wt}}function Fg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,M){return h?new OffscreenCanvas(T,M):to("canvas")}function x(T,M,O){let Y=1;const Z=ye(T);if((Z.width>O||Z.height>O)&&(Y=O/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Y*Z.width),wt=Math.floor(Y*Z.height);u===void 0&&(u=p(X,wt));const rt=M?p(X,wt):u;return rt.width=X,rt.height=wt,rt.getContext("2d").drawImage(T,0,0,X,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+wt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function _(T){return T.generateMipmaps}function m(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function g(T,M,O,Y,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=M;if(M===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),M===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),M===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),M===s.RGBA){const wt=Z?Jr:ie.getTransfer(Y);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=wt===le?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(T,M){let O;return T?M===null||M===Ki||M===$s?O=s.DEPTH24_STENCIL8:M===oi?O=s.DEPTH32F_STENCIL8:M===Ys&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===$s?O=s.DEPTH_COMPONENT24:M===oi?O=s.DEPTH_COMPONENT32F:M===Ys&&(O=s.DEPTH_COMPONENT16),O}function w(T,M){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==fn&&T.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),U(M),M.isVideoTexture&&d.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),S(M)}function U(T){const M=n.get(T);if(M.__webglInit===void 0)return;const O=T.source,Y=f.get(O);if(Y){const Z=Y[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(T),Object.keys(Y).length===0&&f.delete(O)}n.remove(T)}function b(T){const M=n.get(T);s.deleteTexture(M.__webglTexture);const O=T.source,Y=f.get(O);delete Y[M.__cacheKey],o.memory.textures--}function S(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Z=0;Z<M.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[Y]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let Y=0,Z=O.length;Y<Z;Y++){const X=n.get(O[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(T)}let I=0;function L(){I=0}function F(){const T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function z(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function B(T,M){const O=n.get(T);if(T.isVideoTexture&&Yt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,M);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function W(T,M){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){q(O,T,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function $(T,M){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){q(O,T,M);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function V(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const J={[ma]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[ga]:s.MIRRORED_REPEAT},st={[fn]:s.NEAREST,[Ku]:s.NEAREST_MIPMAP_NEAREST,[dr]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[Mo]:s.LINEAR_MIPMAP_NEAREST,[Yi]:s.LINEAR_MIPMAP_LINEAR},pt={[Qu]:s.NEVER,[rd]:s.ALWAYS,[td]:s.LESS,[wh]:s.LEQUAL,[ed]:s.EQUAL,[sd]:s.GEQUAL,[nd]:s.GREATER,[id]:s.NOTEQUAL};function Ht(T,M){if(M.type===oi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Mo||M.magFilter===dr||M.magFilter===Yi||M.minFilter===Vn||M.minFilter===Mo||M.minFilter===dr||M.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,st[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,st[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==dr&&M.minFilter!==Yi||M.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ee(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const X=z(M);if(X!==T.__cacheKey){Z[X]===void 0&&(Z[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[X].usedTimes++;const wt=Z[T.__cacheKey];wt!==void 0&&(Z[T.__cacheKey].usedTimes--,wt.usedTimes===0&&b(M)),T.__cacheKey=X,T.__webglTexture=Z[X].texture}return O}function Ot(T,M,O){return Math.floor(Math.floor(T/O)/M)}function Vt(T,M,O,Y){const X=T.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,O,Y,M.data);else{X.sort((et,ut)=>et.start-ut.start);let wt=0;for(let et=1;et<X.length;et++){const ut=X[wt],Dt=X[et],Et=ut.start+ut.count,ct=Ot(Dt.start,M.width,4),Wt=Ot(ut.start,M.width,4);Dt.start<=Et+1&&ct===Wt&&Ot(Dt.start+Dt.count-1,M.width,4)===ct?ut.count=Math.max(ut.count,Dt.start+Dt.count-ut.start):(++wt,X[wt]=Dt)}X.length=wt+1;const rt=s.getParameter(s.UNPACK_ROW_LENGTH),St=s.getParameter(s.UNPACK_SKIP_PIXELS),bt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let et=0,ut=X.length;et<ut;et++){const Dt=X[et],Et=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),Wt=Et%M.width,D=Math.floor(Et/M.width),nt=ct,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Wt,D,nt,ot,O,Y,M.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,St),s.pixelStorei(s.UNPACK_SKIP_ROWS,bt)}}function q(T,M,O){let Y=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=ee(T,M),X=M.source;e.bindTexture(Y,T.__webglTexture,s.TEXTURE0+O);const wt=n.get(X);if(X.version!==wt.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const rt=ie.getPrimaries(ie.workingColorSpace),St=M.colorSpace===bi?null:ie.getPrimaries(M.colorSpace),bt=M.colorSpace===bi||rt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let et=x(M.image,!1,i.maxTextureSize);et=Ie(M,et);const ut=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type);let Et=g(M.internalFormat,ut,Dt,M.colorSpace,M.isVideoTexture);Ht(Y,M);let ct;const Wt=M.mipmaps,D=M.isVideoTexture!==!0,nt=wt.__version===void 0||Z===!0,ot=X.dataReady,mt=w(M,et);if(M.isDepthTexture)Et=v(M.format===js,M.type),nt&&(D?e.texStorage2D(s.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,ut,Dt,null));else if(M.isDataTexture)if(Wt.length>0){D&&nt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,Wt[0].width,Wt[0].height);for(let Q=0,K=Wt.length;Q<K;Q++)ct=Wt[Q],D?ot&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ct.width,ct.height,ut,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,Q,Et,ct.width,ct.height,0,ut,Dt,ct.data);M.generateMipmaps=!1}else D?(nt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,et.width,et.height),ot&&Vt(M,et,ut,Dt)):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,ut,Dt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Et,Wt[0].width,Wt[0].height,et.depth);for(let Q=0,K=Wt.length;Q<K;Q++)if(ct=Wt[Q],M.format!==kn)if(ut!==null)if(D){if(ot)if(M.layerUpdates.size>0){const _t=bc(ct.width,ct.height,M.format,M.type);for(const Bt of M.layerUpdates){const ue=ct.data.subarray(Bt*_t/ct.data.BYTES_PER_ELEMENT,(Bt+1)*_t/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Bt,ct.width,ct.height,1,ut,ue)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,et.depth,ut,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Et,ct.width,ct.height,et.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,et.depth,ut,Dt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Et,ct.width,ct.height,et.depth,0,ut,Dt,ct.data)}else{D&&nt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,Wt[0].width,Wt[0].height);for(let Q=0,K=Wt.length;Q<K;Q++)ct=Wt[Q],M.format!==kn?ut!==null?D?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ct.width,ct.height,ut,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Et,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ot&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ct.width,ct.height,ut,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,Q,Et,ct.width,ct.height,0,ut,Dt,ct.data)}else if(M.isDataArrayTexture)if(D){if(nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Et,et.width,et.height,et.depth),ot)if(M.layerUpdates.size>0){const Q=bc(et.width,et.height,M.format,M.type);for(const K of M.layerUpdates){const _t=et.data.subarray(K*Q/et.data.BYTES_PER_ELEMENT,(K+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ut,Dt,_t)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Dt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,ut,Dt,et.data);else if(M.isData3DTexture)D?(nt&&e.texStorage3D(s.TEXTURE_3D,mt,Et,et.width,et.height,et.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,ut,Dt,et.data);else if(M.isFramebufferTexture){if(nt)if(D)e.texStorage2D(s.TEXTURE_2D,mt,Et,et.width,et.height);else{let Q=et.width,K=et.height;for(let _t=0;_t<mt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Et,Q,K,0,ut,Dt,null),Q>>=1,K>>=1}}else if(Wt.length>0){if(D&&nt){const Q=ye(Wt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Et,Q.width,Q.height)}for(let Q=0,K=Wt.length;Q<K;Q++)ct=Wt[Q],D?ot&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ut,Dt,ct):e.texImage2D(s.TEXTURE_2D,Q,Et,ut,Dt,ct);M.generateMipmaps=!1}else if(D){if(nt){const Q=ye(et);e.texStorage2D(s.TEXTURE_2D,mt,Et,Q.width,Q.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Dt,et)}else e.texImage2D(s.TEXTURE_2D,0,Et,ut,Dt,et);_(M)&&m(Y),wt.__version=X.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function j(T,M,O){if(M.image.length!==6)return;const Y=ee(T,M),Z=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){e.activeTexture(s.TEXTURE0+O);const wt=ie.getPrimaries(ie.workingColorSpace),rt=M.colorSpace===bi?null:ie.getPrimaries(M.colorSpace),St=M.colorSpace===bi||wt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const bt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!bt&&!et?ut[K]=x(M.image[K],!0,i.maxCubemapSize):ut[K]=et?M.image[K].image:M.image[K],ut[K]=Ie(M,ut[K]);const Dt=ut[0],Et=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),Wt=g(M.internalFormat,Et,ct,M.colorSpace),D=M.isVideoTexture!==!0,nt=X.__version===void 0||Y===!0,ot=Z.dataReady;let mt=w(M,Dt);Ht(s.TEXTURE_CUBE_MAP,M);let Q;if(bt){D&&nt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Wt,Dt.width,Dt.height);for(let K=0;K<6;K++){Q=ut[K].mipmaps;for(let _t=0;_t<Q.length;_t++){const Bt=Q[_t];M.format!==kn?Et!==null?D?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Bt.width,Bt.height,Et,Bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Wt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Bt.width,Bt.height,Et,ct,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Wt,Bt.width,Bt.height,0,Et,ct,Bt.data)}}}else{if(Q=M.mipmaps,D&&nt){Q.length>0&&mt++;const K=ye(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(et){D?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,Et,ct,ut[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,ut[K].width,ut[K].height,0,Et,ct,ut[K].data);for(let _t=0;_t<Q.length;_t++){const ue=Q[_t].image[K].image;D?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,ue.width,ue.height,Et,ct,ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Wt,ue.width,ue.height,0,Et,ct,ue.data)}}else{D?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,ct,ut[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,Et,ct,ut[K]);for(let _t=0;_t<Q.length;_t++){const Bt=Q[_t];D?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Et,ct,Bt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Wt,Et,ct,Bt.image[K])}}}_(M)&&m(s.TEXTURE_CUBE_MAP),X.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function lt(T,M,O,Y,Z,X){const wt=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),St=g(O.internalFormat,wt,rt,O.colorSpace),bt=n.get(M),et=n.get(O);if(et.__renderTarget=M,!bt.__hasExternalTextures){const ut=Math.max(1,M.width>>X),Dt=Math.max(1,M.height>>X);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,St,ut,Dt,M.depth,0,wt,rt,null):e.texImage2D(Z,X,St,ut,Dt,0,wt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Mt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,et.__webglTexture,0,me(M)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,et.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(T,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=v(M.stencilBuffer,Z),wt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=me(M);Mt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,X,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,X,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,X,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,T)}else{const Y=M.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],wt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),St=g(X.internalFormat,wt,rt,X.colorSpace),bt=me(M);O&&Mt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,St,M.width,M.height):Mt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,St,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,St,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const Z=Y.__webglTexture,X=me(M);if(M.depthTexture.format===Ks)Mt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(M.depthTexture.format===js)Mt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function qt(T){const M=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?vt(M.__webglFramebuffer[0],T):vt(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=s.createRenderbuffer(),At(M.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),At(M.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(T,M,O){const Y=n.get(T);M!==void 0&&lt(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&qt(T)}function C(T){const M=T.texture,O=n.get(T),Y=n.get(M);T.addEventListener("dispose",R);const Z=T.textures,X=T.isWebGLCubeRenderTarget===!0,wt=Z.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=M.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let St=0;St<M.mipmaps.length;St++)O.__webglFramebuffer[rt][St]=s.createFramebuffer()}else O.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)O.__webglFramebuffer[rt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(wt)for(let rt=0,St=Z.length;rt<St;rt++){const bt=n.get(Z[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Mt(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const St=Z[rt];O.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);const bt=r.convert(St.format,St.colorSpace),et=r.convert(St.type),ut=g(St.internalFormat,bt,et,St.colorSpace,T.isXRRenderTarget===!0),Dt=me(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),At(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)lt(O.__webglFramebuffer[rt][St],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St);else lt(O.__webglFramebuffer[rt],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);_(M)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let rt=0,St=Z.length;rt<St;rt++){const bt=Z[rt],et=n.get(bt);let ut=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,et.__webglTexture),Ht(ut,bt),lt(O.__webglFramebuffer,T,bt,s.COLOR_ATTACHMENT0+rt,ut,0),_(bt)&&m(ut)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Ht(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)lt(O.__webglFramebuffer[St],T,M,s.COLOR_ATTACHMENT0,rt,St);else lt(O.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,rt,0);_(M)&&m(rt),e.unbindTexture()}T.depthBuffer&&qt(T)}function pe(T){const M=T.textures;for(let O=0,Y=M.length;O<Y;O++){const Z=M[O];if(_(Z)){const X=E(T),wt=n.get(Z).__webglTexture;e.bindTexture(X,wt),m(X),e.unbindTexture()}}}const Gt=[],Ut=[];function xt(T){if(T.samples>0){if(Mt(T)===!1){const M=T.textures,O=T.width,Y=T.height;let Z=s.COLOR_BUFFER_BIT;const X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(T),rt=M.length>1;if(rt)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const St=T.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const et=n.get(M[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,Z,s.NEAREST),l===!0&&(Gt.length=0,Ut.length=0,Gt.push(s.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Gt.push(X),Ut.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const et=n.get(M[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function me(T){return Math.min(i.maxSamples,T.samples)}function Mt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Yt(T){const M=o.render.frame;d.get(T)!==M&&(d.set(T,M),T.update())}function Ie(T,M){const O=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==ws&&O!==bi&&(ie.getTransfer(O)===le?(Y!==kn||Z!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Fe,this.setupRenderTarget=C,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Mt}function Og(s,t){function e(n,i=bi){let r;const o=ie.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===al)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return s.BYTE;if(n===_h)return s.SHORT;if(n===Ys)return s.UNSIGNED_SHORT;if(n===rl)return s.INT;if(n===Ki)return s.UNSIGNED_INT;if(n===oi)return s.FLOAT;if(n===er)return s.HALF_FLOAT;if(n===Mh)return s.ALPHA;if(n===yh)return s.RGB;if(n===kn)return s.RGBA;if(n===Ks)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===Sh)return s.RED;if(n===ll)return s.RED_INTEGER;if(n===bh)return s.RG;if(n===cl)return s.RG_INTEGER;if(n===hl)return s.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===va||n===xa||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Sa||n===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Sa)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===La||n===Pa||n===Da||n===Ua||n===Na||n===ka||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ea)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Ga||n===Va||n===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends As{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,h=null,p=null;const x=typeof XRWebGLBinding<"u",_=new Hg,m={},E=e.getContextAttributes();let g=null,v=null;const w=[],A=[],R=new te;let U=null;const b=new un;b.viewport=new ce;const S=new un;S.viewport=new ce;const I=[b,S],L=new cf;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new Ho,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new Ho,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new Ho,w[q]=j),j.getHandSpace()};function B(q){const j=A.indexOf(q.inputSource);if(j===-1)return;const lt=w[j];lt!==void 0&&(lt.update(q.inputSource,q.frame,c||o),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let q=0;q<w.length;q++){const j=A[q];j!==null&&(A[q]=null,w[q].disconnect(j))}F=null,z=null,_.reset();for(const q in m)delete m[q];t.setRenderTarget(g),h=null,f=null,u=null,i=null,v=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,At=null,vt=null;E.depth&&(vt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=E.stencil?js:Ks,At=E.stencil?$s:Ki);const qt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(qt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ji(f.textureWidth,f.textureHeight,{format:kn,type:Kn,depthTexture:new Oh(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const lt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new ji(h.framebufferWidth,h.framebufferHeight,{format:kn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Vt.setContext(i),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let j=0;j<q.removed.length;j++){const lt=q.removed[j],At=A.indexOf(lt);At>=0&&(A[At]=null,w[At].disconnect(lt))}for(let j=0;j<q.added.length;j++){const lt=q.added[j];let At=A.indexOf(lt);if(At===-1){for(let qt=0;qt<w.length;qt++)if(qt>=A.length){A.push(lt),At=qt;break}else if(A[qt]===null){A[qt]=lt,At=qt;break}if(At===-1)break}const vt=w[At];vt&&vt.connect(lt)}}const V=new P,J=new P;function st(q,j,lt){V.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(lt.matrixWorld);const At=V.distanceTo(J),vt=j.projectionMatrix.elements,qt=lt.projectionMatrix.elements,Fe=vt[14]/(vt[10]-1),C=vt[14]/(vt[10]+1),pe=(vt[9]+1)/vt[5],Gt=(vt[9]-1)/vt[5],Ut=(vt[8]-1)/vt[0],xt=(qt[8]+1)/qt[0],me=Fe*Ut,Mt=Fe*xt,Yt=At/(-Ut+xt),Ie=Yt*-Ut;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ye=Fe+Yt,T=C+Yt,M=me-Ie,O=Mt+(At-Ie),Y=pe*C/T*ye,Z=Gt*C/T*ye;q.projectionMatrix.makePerspective(M,O,Y,Z,ye,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,lt=q.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),L.near=S.near=b.near=j,L.far=S.far=b.far=lt,(F!==L.near||z!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,z=L.far),L.layers.mask=q.layers.mask|6,b.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const At=q.parent,vt=L.cameras;pt(L,At);for(let qt=0;qt<vt.length;qt++)pt(vt[qt],At);vt.length===2?st(L,b,S):L.projectionMatrix.copy(b.projectionMatrix),Ht(q,L,At)};function Ht(q,j,lt){lt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function(q){return m[q]};let ee=null;function Ot(q,j){if(d=j.getViewerPose(c||o),p=j,d!==null){const lt=d.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let At=!1;lt.length!==L.cameras.length&&(L.cameras.length=0,At=!0);for(let C=0;C<lt.length;C++){const pe=lt[C];let Gt=null;if(h!==null)Gt=h.getViewport(pe);else{const xt=u.getViewSubImage(f,pe);Gt=xt.viewport,C===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let Ut=I[C];Ut===void 0&&(Ut=new un,Ut.layers.enable(C),Ut.viewport=new ce,I[C]=Ut),Ut.matrix.fromArray(pe.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(pe.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),C===0&&(L.matrix.copy(Ut.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),At===!0&&L.cameras.push(Ut)}const vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const C=u.getDepthInformation(lt[0]);C&&C.isValid&&C.texture&&_.init(C,i.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<lt.length;C++){const pe=lt[C].camera;if(pe){let Gt=m[pe];Gt||(Gt=new Bh,m[pe]=Gt);const Ut=u.getCameraImage(pe);Gt.sourceTexture=Ut}}}}for(let lt=0;lt<w.length;lt++){const At=A[lt],vt=w[lt];At!==null&&vt!==void 0&&vt.update(At,j,c||o)}ee&&ee(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}const Vt=new Gh;Vt.setAnimationLoop(Ot),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const Bi=new jn,Vg=new _e;function Wg(s,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Ph(s)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,E,g,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),d(_,m)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&h(_,m,v)):m.isMeshMatcapMaterial?(r(_,m),p(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),x(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,E,g):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===nn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===nn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const E=t.get(m),g=E.envMap,v=E.envMapRotation;g&&(_.envMap.value=g,Bi.copy(v),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),_.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(Bi)),_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,E,g){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*E,_.scale.value=g*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function d(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function h(_,m,E){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){const E=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xg(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,g){const v=g.program;n.uniformBlockBinding(E,v)}function c(E,g){let v=i[E.id];v===void 0&&(p(E),v=d(E),i[E.id]=v,E.addEventListener("dispose",_));const w=g.program;n.updateUBOMapping(E,w);const A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function d(E){const g=u();E.__bindingPointIndex=g;const v=s.createBuffer(),w=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const g=i[E.id],v=E.uniforms,w=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let A=0,R=v.length;A<R;A++){const U=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,S=U.length;b<S;b++){const I=U[b];if(h(I,A,b,w)===!0){const L=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let B=0;B<F.length;B++){const W=F[B],$=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,L+z,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(E,g,v,w){const A=E.value,R=g+"_"+v;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const U=w[R];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return w[R]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function p(E){const g=E.uniforms;let v=0;const w=16;for(let R=0,U=g.length;R<U;R++){const b=Array.isArray(g[R])?g[R]:[g[R]];for(let S=0,I=b.length;S<I;S++){const L=b[S],F=Array.isArray(L.value)?L.value:[L.value];for(let z=0,B=F.length;z<B;z++){const W=F[z],$=x(W),V=v%w,J=V%$.boundary,st=V+J;v+=J,st!==0&&w-st<$.storage&&(v+=w-st),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=$.storage}}}const A=v%w;return A>0&&(v+=w-A),E.__size=v,E.__cache={},this}function x(E){const g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function _(E){const g=E.target;g.removeEventListener("dispose",_);const v=o.indexOf(g.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function m(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class qg{constructor(t={}){const{canvas:e=Sd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const E=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=tn;let A=0,R=0,U=null,b=-1,S=null;const I=new ce,L=new ce;let F=null;const z=new Ft(0);let B=0,W=e.width,$=e.height,V=1,J=null,st=null;const pt=new ce(0,0,W,$),Ht=new ce(0,0,W,$);let ee=!1;const Ot=new ml;let Vt=!1,q=!1;const j=new _e,lt=new P,At=new ce,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Fe(){return U===null?V:1}let C=n;function pe(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",Q,!1),C===null){const N="webgl2";if(C=pe(N,y),C===null)throw pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Gt,Ut,xt,me,Mt,Yt,Ie,ye,T,M,O,Y,Z,X,wt,rt,St,bt,et,ut,Dt,Et,ct,Wt;function D(){Gt=new n0(C),Gt.init(),Et=new Og(C,Gt),Ut=new Km(C,Gt,t,Et),xt=new kg(C,Gt),Ut.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),me=new r0(C),Mt=new bg,Yt=new Fg(C,Gt,xt,Mt,Ut,Et,me),Ie=new Zm(v),ye=new e0(v),T=new uf(C),ct=new Ym(C,T),M=new i0(C,T,me,ct),O=new a0(C,M,T,me),et=new o0(C,Ut,Yt),rt=new jm(Mt),Y=new Sg(v,Ie,ye,Gt,Ut,ct,rt),Z=new Wg(v,Mt),X=new wg,wt=new Lg(Gt),bt=new qm(v,Ie,ye,xt,O,h,l),St=new Ug(v,O,Ut),Wt=new Xg(C,me,Ut,xt),ut=new $m(C,Gt,me),Dt=new s0(C,Gt,me),me.programs=Y.programs,v.capabilities=Ut,v.extensions=Gt,v.properties=Mt,v.renderLists=X,v.shadowMap=St,v.state=xt,v.info=me}D();const nt=new Gg(v,C);this.xr=nt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=Gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,$,!1))},this.getSize=function(y){return y.set(W,$)},this.setSize=function(y,N,H=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,$=N,e.width=Math.floor(y*V),e.height=Math.floor(N*V),H===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(W*V,$*V).floor()},this.setDrawingBufferSize=function(y,N,H){W=y,$=N,V=H,e.width=Math.floor(y*H),e.height=Math.floor(N*H),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,N,H,G){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,N,H,G),xt.viewport(I.copy(pt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ht)},this.setScissor=function(y,N,H,G){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,N,H,G),xt.scissor(L.copy(Ht).multiplyScalar(V).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(y){xt.setScissorTest(ee=y)},this.setOpaqueSort=function(y){J=y},this.setTransparentSort=function(y){st=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,H=!0){let G=0;if(y){let k=!1;if(U!==null){const tt=U.texture.format;k=tt===hl||tt===cl||tt===ll}if(k){const tt=U.texture.type,ht=tt===Kn||tt===Ki||tt===Ys||tt===$s||tt===ol||tt===al,gt=bt.getClearColor(),ft=bt.getClearAlpha(),It=gt.r,Nt=gt.g,Tt=gt.b;ht?(p[0]=It,p[1]=Nt,p[2]=Tt,p[3]=ft,C.clearBufferuiv(C.COLOR,0,p)):(x[0]=It,x[1]=Nt,x[2]=Tt,x[3]=ft,C.clearBufferiv(C.COLOR,0,x))}else G|=C.COLOR_BUFFER_BIT}N&&(G|=C.DEPTH_BUFFER_BIT),H&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),bt.dispose(),X.dispose(),wt.dispose(),Mt.dispose(),Ie.dispose(),ye.dispose(),O.dispose(),ct.dispose(),Wt.dispose(),Y.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Bn),nt.removeEventListener("sessionend",kl),Pi.stop()};function ot(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=me.autoReset,N=St.enabled,H=St.autoUpdate,G=St.needsUpdate,k=St.type;D(),me.autoReset=y,St.enabled=N,St.autoUpdate=H,St.needsUpdate=G,St.type=k}function Q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const N=y.target;N.removeEventListener("dispose",K),_t(N)}function _t(y){Bt(y),Mt.remove(y)}function Bt(y){const N=Mt.get(y).programs;N!==void 0&&(N.forEach(function(H){Y.releaseProgram(H)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,H,G,k,tt){N===null&&(N=vt);const ht=k.isMesh&&k.matrixWorld.determinant()<0,gt=fu(y,N,H,G,k);xt.setMaterial(G,ht);let ft=H.index,It=1;if(G.wireframe===!0){if(ft=M.getWireframeAttribute(H),ft===void 0)return;It=2}const Nt=H.drawRange,Tt=H.attributes.position;let Zt=Nt.start*It,ae=(Nt.start+Nt.count)*It;tt!==null&&(Zt=Math.max(Zt,tt.start*It),ae=Math.min(ae,(tt.start+tt.count)*It)),ft!==null?(Zt=Math.max(Zt,0),ae=Math.min(ae,ft.count)):Tt!=null&&(Zt=Math.max(Zt,0),ae=Math.min(ae,Tt.count));const Me=ae-Zt;if(Me<0||Me===1/0)return;ct.setup(k,G,gt,H,ft);let fe,he=ut;if(ft!==null&&(fe=T.get(ft),he=Dt,he.setIndex(fe)),k.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*Fe()),he.setMode(C.LINES)):he.setMode(C.TRIANGLES);else if(k.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*Fe()),k.isLineSegments?he.setMode(C.LINES):k.isLineLoop?he.setMode(C.LINE_LOOP):he.setMode(C.LINE_STRIP)}else k.isPoints?he.setMode(C.POINTS):k.isSprite&&he.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Rt=k._multiDrawStarts,ve=k._multiDrawCounts,ne=k._multiDrawCount,sn=ft?T.get(ft).bytesPerElement:1,Qi=Mt.get(G).currentProgram.getUniforms();for(let rn=0;rn<ne;rn++)Qi.setValue(C,"_gl_DrawID",rn),he.render(Rt[rn]/sn,ve[rn])}else if(k.isInstancedMesh)he.renderInstances(Zt,Me,k.count);else if(H.isInstancedBufferGeometry){const Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ve=Math.min(H.instanceCount,Rt);he.renderInstances(Zt,Me,ve)}else he.render(Zt,Me)};function ue(y,N,H){y.transparent===!0&&y.side===De&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,ur(y,N,H),y.side=Ci,y.needsUpdate=!0,ur(y,N,H),y.side=De):ur(y,N,H)}this.compile=function(y,N,H=null){H===null&&(H=y),m=wt.get(H),m.init(N),g.push(m),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),y!==H&&y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const G=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const tt=k.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){const gt=tt[ht];ue(gt,H,k),G.add(gt)}else ue(tt,H,k),G.add(tt)}),m=g.pop(),G},this.compileAsync=function(y,N,H=null){const G=this.compile(y,N,H);return new Promise(k=>{function tt(){if(G.forEach(function(ht){Mt.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){k(y);return}setTimeout(tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let re=null;function Qn(y){re&&re(y)}function Bn(){Pi.stop()}function kl(){Pi.start()}const Pi=new Gh;Pi.setAnimationLoop(Qn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(y){re=y,nt.setAnimationLoop(y),y===null?Pi.stop():Pi.start()},nt.addEventListener("sessionstart",Bn),nt.addEventListener("sessionend",kl),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,U),m=wt.get(y,g.length),m.init(N),g.push(m),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ot.setFromProjectionMatrix(j,Wn,N.reversedDepth),q=this.localClippingEnabled,Vt=rt.init(this.clippingPlanes,q),_=X.get(y,E.length),_.init(),E.push(_),nt.enabled===!0&&nt.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&vo(tt,N,-1/0,v.sortObjects)}vo(y,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(J,st),qt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,qt&&bt.addToRenderList(_,y),this.info.render.frame++,Vt===!0&&rt.beginShadows();const H=m.state.shadowsArray;St.render(H,y,N),Vt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,k=_.transmissive;if(m.setupLights(),N.isArrayCamera){const tt=N.cameras;if(k.length>0)for(let ht=0,gt=tt.length;ht<gt;ht++){const ft=tt[ht];Ol(G,k,y,ft)}qt&&bt.render(y);for(let ht=0,gt=tt.length;ht<gt;ht++){const ft=tt[ht];Fl(_,y,ft,ft.viewport)}}else k.length>0&&Ol(G,k,y,N),qt&&bt.render(y),Fl(_,y,N);U!==null&&R===0&&(Yt.updateMultisampleRenderTarget(U),Yt.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(v,y,N),ct.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?(m=g[g.length-1],Vt===!0&&rt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function vo(y,N,H,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ot.intersectsSprite(y)){G&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(j);const ht=O.update(y),gt=y.material;gt.visible&&_.push(y,ht,gt,H,At.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ot.intersectsObject(y))){const ht=O.update(y),gt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),At.copy(ht.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(j)),Array.isArray(gt)){const ft=ht.groups;for(let It=0,Nt=ft.length;It<Nt;It++){const Tt=ft[It],Zt=gt[Tt.materialIndex];Zt&&Zt.visible&&_.push(y,ht,Zt,H,At.z,Tt)}}else gt.visible&&_.push(y,ht,gt,H,At.z,null)}}const tt=y.children;for(let ht=0,gt=tt.length;ht<gt;ht++)vo(tt[ht],N,H,G)}function Fl(y,N,H,G){const k=y.opaque,tt=y.transmissive,ht=y.transparent;m.setupLightsView(H),Vt===!0&&rt.setGlobalState(v.clippingPlanes,H),G&&xt.viewport(I.copy(G)),k.length>0&&hr(k,N,H),tt.length>0&&hr(tt,N,H),ht.length>0&&hr(ht,N,H),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ol(y,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new ji(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?er:Kn,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const tt=m.state.transmissionRenderTarget[G.id],ht=G.viewport||I;tt.setSize(ht.z*v.transmissionResolutionScale,ht.w*v.transmissionResolutionScale);const gt=v.getRenderTarget(),ft=v.getActiveCubeFace(),It=v.getActiveMipmapLevel();v.setRenderTarget(tt),v.getClearColor(z),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),qt&&bt.render(H);const Nt=v.toneMapping;v.toneMapping=Ti;const Tt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Vt===!0&&rt.setGlobalState(v.clippingPlanes,G),hr(y,H,G),Yt.updateMultisampleRenderTarget(tt),Yt.updateRenderTargetMipmap(tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ae=0,Me=N.length;ae<Me;ae++){const fe=N[ae],he=fe.object,Rt=fe.geometry,ve=fe.material,ne=fe.group;if(ve.side===De&&he.layers.test(G.layers)){const sn=ve.side;ve.side=nn,ve.needsUpdate=!0,Bl(he,H,G,Rt,ve,ne),ve.side=sn,ve.needsUpdate=!0,Zt=!0}}Zt===!0&&(Yt.updateMultisampleRenderTarget(tt),Yt.updateRenderTargetMipmap(tt))}v.setRenderTarget(gt,ft,It),v.setClearColor(z,B),Tt!==void 0&&(G.viewport=Tt),v.toneMapping=Nt}function hr(y,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,tt=y.length;k<tt;k++){const ht=y[k],gt=ht.object,ft=ht.geometry,It=ht.group;let Nt=ht.material;Nt.allowOverride===!0&&G!==null&&(Nt=G),gt.layers.test(H.layers)&&Bl(gt,N,H,ft,Nt,It)}}function Bl(y,N,H,G,k,tt){y.onBeforeRender(v,N,H,G,k,tt),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(v,N,H,G,y,tt),k.transparent===!0&&k.side===De&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,v.renderBufferDirect(H,N,G,k,y,tt),k.side=Ci,k.needsUpdate=!0,v.renderBufferDirect(H,N,G,k,y,tt),k.side=De):v.renderBufferDirect(H,N,G,k,y,tt),y.onAfterRender(v,N,H,G,k,tt)}function ur(y,N,H){N.isScene!==!0&&(N=vt);const G=Mt.get(y),k=m.state.lights,tt=m.state.shadowsArray,ht=k.state.version,gt=Y.getParameters(y,k.state,tt,N,H),ft=Y.getProgramCacheKey(gt);let It=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?ye:Ie).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",K),It=new Map,G.programs=It);let Nt=It.get(ft);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===ht)return Hl(y,gt),Nt}else gt.uniforms=Y.getUniforms(y),y.onBeforeCompile(gt,v),Nt=Y.acquireProgram(gt,ft),It.set(ft,Nt),G.uniforms=gt.uniforms;const Tt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),Hl(y,gt),G.needsLights=mu(y),G.lightsStateVersion=ht,G.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function zl(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=$r.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Hl(y,N){const H=Mt.get(y);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function fu(y,N,H,G,k){N.isScene!==!0&&(N=vt),Yt.resetTextureUnits();const tt=N.fog,ht=G.isMeshStandardMaterial?N.environment:null,gt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ws,ft=(G.isMeshStandardMaterial?ye:Ie).get(G.envMap||ht),It=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let Me=Ti;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Me=v.toneMapping);const fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=fe!==void 0?fe.length:0,Rt=Mt.get(G),ve=m.state.lights;if(Vt===!0&&(q===!0||y!==S)){const Ve=y===S&&G.id===b;rt.setState(G,y,Ve)}let ne=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ve.state.version||Rt.outputColorSpace!==gt||k.isBatchedMesh&&Rt.batching===!1||!k.isBatchedMesh&&Rt.batching===!0||k.isBatchedMesh&&Rt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Rt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Rt.instancing===!1||!k.isInstancedMesh&&Rt.instancing===!0||k.isSkinnedMesh&&Rt.skinning===!1||!k.isSkinnedMesh&&Rt.skinning===!0||k.isInstancedMesh&&Rt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Rt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Rt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Rt.instancingMorph===!1&&k.morphTexture!==null||Rt.envMap!==ft||G.fog===!0&&Rt.fog!==tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==rt.numPlanes||Rt.numIntersection!==rt.numIntersection)||Rt.vertexAlphas!==It||Rt.vertexTangents!==Nt||Rt.morphTargets!==Tt||Rt.morphNormals!==Zt||Rt.morphColors!==ae||Rt.toneMapping!==Me||Rt.morphTargetsCount!==he)&&(ne=!0):(ne=!0,Rt.__version=G.version);let sn=Rt.currentProgram;ne===!0&&(sn=ur(G,N,k));let Qi=!1,rn=!1,Ls=!1;const xe=sn.getUniforms(),pn=Rt.uniforms;if(xt.useProgram(sn.program)&&(Qi=!0,rn=!0,Ls=!0),G.id!==b&&(b=G.id,rn=!0),Qi||S!==y){xt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xe.setValue(C,"projectionMatrix",y.projectionMatrix),xe.setValue(C,"viewMatrix",y.matrixWorldInverse);const Je=xe.map.cameraPosition;Je!==void 0&&Je.setValue(C,lt.setFromMatrixPosition(y.matrixWorld)),Ut.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,rn=!0,Ls=!0)}if(k.isSkinnedMesh){xe.setOptional(C,k,"bindMatrix"),xe.setOptional(C,k,"bindMatrixInverse");const Ve=k.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),xe.setValue(C,"boneTexture",Ve.boneTexture,Yt))}k.isBatchedMesh&&(xe.setOptional(C,k,"batchingTexture"),xe.setValue(C,"batchingTexture",k._matricesTexture,Yt),xe.setOptional(C,k,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",k._indirectTexture,Yt),xe.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",k._colorsTexture,Yt));const mn=H.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&et.update(k,H,sn),(rn||Rt.receiveShadow!==k.receiveShadow)&&(Rt.receiveShadow=k.receiveShadow,xe.setValue(C,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pn.envMap.value=ft,pn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),rn&&(xe.setValue(C,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&pu(pn,Ls),tt&&G.fog===!0&&Z.refreshFogUniforms(pn,tt),Z.refreshMaterialUniforms(pn,G,V,$,m.state.transmissionRenderTarget[y.id]),$r.upload(C,zl(Rt),pn,Yt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($r.upload(C,zl(Rt),pn,Yt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(C,"center",k.center),xe.setValue(C,"modelViewMatrix",k.modelViewMatrix),xe.setValue(C,"normalMatrix",k.normalMatrix),xe.setValue(C,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ve=G.uniformsGroups;for(let Je=0,xo=Ve.length;Je<xo;Je++){const Di=Ve[Je];Wt.update(Di,sn),Wt.bind(Di,sn)}}return sn}function pu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function mu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,N,H){const G=Mt.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Mt.get(y.texture).__webglTexture=N,Mt.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const H=Mt.get(y);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const gu=C.createFramebuffer();this.setRenderTarget=function(y,N=0,H=0){U=y,A=N,R=H;let G=!0,k=null,tt=!1,ht=!1;if(y){const ft=Mt.get(y);if(ft.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(ft.__webglFramebuffer===void 0)Yt.setupRenderTarget(y);else if(ft.__hasExternalTextures)Yt.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Tt=y.depthTexture;if(ft.__boundDepthTexture!==Tt){if(Tt!==null&&Mt.has(Tt)&&(y.width!==Tt.image.width||y.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(y)}}const It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);const Nt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?k=Nt[N][H]:k=Nt[N],tt=!0):y.samples>0&&Yt.useMultisampledRTT(y)===!1?k=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[H]:k=Nt,I.copy(y.viewport),L.copy(y.scissor),F=y.scissorTest}else I.copy(pt).multiplyScalar(V).floor(),L.copy(Ht).multiplyScalar(V).floor(),F=ee;if(H!==0&&(k=gu),xt.bindFramebuffer(C.FRAMEBUFFER,k)&&G&&xt.drawBuffers(y,k),xt.viewport(I),xt.scissor(L),xt.setScissorTest(F),tt){const ft=Mt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,H)}else if(ht){const ft=N;for(let It=0;It<y.textures.length;It++){const Nt=Mt.get(y.textures[It]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+It,Nt.__webglTexture,H,ft)}}else if(y!==null&&H!==0){const ft=Mt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ft.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(y,N,H,G,k,tt,ht,gt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft){xt.bindFramebuffer(C.FRAMEBUFFER,ft);try{const It=y.textures[gt],Nt=It.format,Tt=It.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&H>=0&&H<=y.height-k&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),C.readPixels(N,H,G,k,Et.convert(Nt),Et.convert(Tt),tt))}finally{const It=U!==null?Mt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(y,N,H,G,k,tt,ht,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft)if(N>=0&&N<=y.width-G&&H>=0&&H<=y.height-k){xt.bindFramebuffer(C.FRAMEBUFFER,ft);const It=y.textures[gt],Nt=It.format,Tt=It.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Zt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),C.readPixels(N,H,G,k,Et.convert(Nt),Et.convert(Tt),0);const ae=U!==null?Mt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,ae);const Me=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await bd(C,Me,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Zt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(Zt),C.deleteSync(Me),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,H=0){const G=Math.pow(2,-H),k=Math.floor(y.image.width*G),tt=Math.floor(y.image.height*G),ht=N!==null?N.x:0,gt=N!==null?N.y:0;Yt.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,ht,gt,k,tt),xt.unbindTexture()};const _u=C.createFramebuffer(),vu=C.createFramebuffer();this.copyTextureToTexture=function(y,N,H=null,G=null,k=0,tt=null){tt===null&&(k!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=k,k=0):tt=0);let ht,gt,ft,It,Nt,Tt,Zt,ae,Me;const fe=y.isCompressedTexture?y.mipmaps[tt]:y.image;if(H!==null)ht=H.max.x-H.min.x,gt=H.max.y-H.min.y,ft=H.isBox3?H.max.z-H.min.z:1,It=H.min.x,Nt=H.min.y,Tt=H.isBox3?H.min.z:0;else{const mn=Math.pow(2,-k);ht=Math.floor(fe.width*mn),gt=Math.floor(fe.height*mn),y.isDataArrayTexture?ft=fe.depth:y.isData3DTexture?ft=Math.floor(fe.depth*mn):ft=1,It=0,Nt=0,Tt=0}G!==null?(Zt=G.x,ae=G.y,Me=G.z):(Zt=0,ae=0,Me=0);const he=Et.convert(N.format),Rt=Et.convert(N.type);let ve;N.isData3DTexture?(Yt.setTexture3D(N,0),ve=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Yt.setTexture2DArray(N,0),ve=C.TEXTURE_2D_ARRAY):(Yt.setTexture2D(N,0),ve=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const ne=C.getParameter(C.UNPACK_ROW_LENGTH),sn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qi=C.getParameter(C.UNPACK_SKIP_PIXELS),rn=C.getParameter(C.UNPACK_SKIP_ROWS),Ls=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,fe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt);const xe=y.isDataArrayTexture||y.isData3DTexture,pn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const mn=Mt.get(y),Ve=Mt.get(N),Je=Mt.get(mn.__renderTarget),xo=Mt.get(Ve.__renderTarget);xt.bindFramebuffer(C.READ_FRAMEBUFFER,Je.__webglFramebuffer),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,xo.__webglFramebuffer);for(let Di=0;Di<ft;Di++)xe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,k,Tt+Di),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(N).__webglTexture,tt,Me+Di)),C.blitFramebuffer(It,Nt,ht,gt,Zt,ae,ht,gt,C.DEPTH_BUFFER_BIT,C.NEAREST);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Mt.has(y)){const mn=Mt.get(y),Ve=Mt.get(N);xt.bindFramebuffer(C.READ_FRAMEBUFFER,_u),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,vu);for(let Je=0;Je<ft;Je++)xe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mn.__webglTexture,k,Tt+Je):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,mn.__webglTexture,k),pn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ve.__webglTexture,tt,Me+Je):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ve.__webglTexture,tt),k!==0?C.blitFramebuffer(It,Nt,ht,gt,Zt,ae,ht,gt,C.COLOR_BUFFER_BIT,C.NEAREST):pn?C.copyTexSubImage3D(ve,tt,Zt,ae,Me+Je,It,Nt,ht,gt):C.copyTexSubImage2D(ve,tt,Zt,ae,It,Nt,ht,gt);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pn?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(ve,tt,Zt,ae,Me,ht,gt,ft,he,Rt,fe.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(ve,tt,Zt,ae,Me,ht,gt,ft,he,fe.data):C.texSubImage3D(ve,tt,Zt,ae,Me,ht,gt,ft,he,Rt,fe):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,tt,Zt,ae,ht,gt,he,Rt,fe.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,tt,Zt,ae,fe.width,fe.height,he,fe.data):C.texSubImage2D(C.TEXTURE_2D,tt,Zt,ae,ht,gt,he,Rt,fe);C.pixelStorei(C.UNPACK_ROW_LENGTH,ne),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,sn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qi),C.pixelStorei(C.UNPACK_SKIP_ROWS,rn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ls),tt===0&&N.generateMipmaps&&C.generateMipmap(ve),xt.unbindTexture()},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&Yt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Yt.setTextureCube(y,0):y.isData3DTexture?Yt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Yt.setTexture2DArray(y,0):Yt.setTexture2D(y,0),xt.unbindTexture()},this.resetState=function(){A=0,R=0,U=null,xt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const kt=0,yn=1,pi=2,ui=3,rr=4,$n=5,Is=6,or=7,co=8,ar=9,An=10,Ke=11,Ue=12,Rn=13,ho=14,cn=15,hn=16,vn=17,en=18,lr=19,Ge=20,Zi=21,mi=22,ze=23,Gn=24,In=25,uo=26,Ml=27,yl=28,Sl=29,bl=30,El=31,fo=32,ai=33,Ln=34,Pn=35,di=36,Dn=37,Ri=38,cr=39,Cn=40,Ne=41,ke=42,$e=43,Un=44,Xn=45,Li=46,li=47,Jn=48,Tn=49,Ct=s=>s,fi=[Ct({id:kt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),Ct({id:yn,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),Ct({id:pi,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),Ct({id:ui,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),Ct({id:rr,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),Ct({id:$n,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),Ct({id:Is,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),Ct({id:or,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),Ct({id:co,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),Ct({id:ar,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),Ct({id:An,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Ct({id:Ke,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Ct({id:Ue,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),Ct({id:Rn,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),Ct({id:ho,name:"Metal Block",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),Ct({id:cn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),Ct({id:hn,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),Ct({id:vn,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),Ct({id:en,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),Ct({id:lr,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),Ct({id:Ge,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Ct({id:Zi,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),Ct({id:mi,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),Ct({id:ze,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),Ct({id:Gn,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),Ct({id:In,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),Ct({id:uo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),Ct({id:Ml,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),Ct({id:yl,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),Ct({id:Sl,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),Ct({id:bl,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),Ct({id:El,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),Ct({id:fo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),Ct({id:ai,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),Ct({id:Ln,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.28,.52,.28]}),Ct({id:Pn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),Ct({id:di,name:"Wheat Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.66,.66,.34]}),Ct({id:Dn,name:"Desert Wheat",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),Ct({id:Ri,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),Ct({id:cr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),Ct({id:Cn,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),Ct({id:Ne,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Ct({id:ke,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Ct({id:$e,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),Ct({id:Un,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),Ct({id:Xn,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),Ct({id:Li,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),Ct({id:li,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),Ct({id:Jn,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),Ct({id:Tn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.3,.55,.3]})],se=96,it=16,Pe=1440;function qe(s){return fi[s].solid}function wl(s){return fi[s].opaque}function qn(s){return s===en||s>=uo&&s<=fo}function ps(s){return s===en?8:qn(s)?33-s:0}function $c(s){return 33-s}function Yg(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class po{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function Qt(s,t,e){let n=s*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function Ya(s){return s*s*(3-2*s)}function Tl(s,t,e){const n=Math.floor(s),i=Math.floor(t),r=Ya(s-n),o=Ya(t-i),a=Qt(n,i,e),l=Qt(n+1,i,e),c=Qt(n,i+1,e),d=Qt(n+1,i+1,e);return a+(l-a)*r+(c-a)*o+(a-l-c+d)*r*o}function Gs(s,t,e,n=4,i=2,r=.5){let o=0,a=1,l=1,c=0;for(let d=0;d<n;d++)o+=Tl(s*l,t*l,e+d*101)*a,c+=a,a*=r,l*=i;return o/c}function $g(s,t,e,n=3){let i=0,r=1,o=1,a=0;for(let l=0;l<n;l++){const c=Math.abs(Tl(s*o,t*o,e+l*101)*2-1);i+=(1-c)*r,a+=r,r*=.5,o*=2}return i/a}function Yh(s,t){const e=Math.floor(s),n=Ya(s-e),i=Qt(e,0,t),r=Qt(e+1,0,t);return i+(r-i)*n}const Kc=0,$a=1,Kg=2,Ka=3,Kr=4,jg=1e6,we=320;class Zg{constructor(t){this.seed=t;const e=new po(t^24378);for(let n=0;n<6;n++){const i=e.range(0,Math.PI*2),r=e.range(160,900);this.oases.push({x:Math.round(Math.cos(i)*r),z:Math.round(Math.sin(i)*r),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),i=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*i),z:Math.round(Math.sin(n)*i)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,i=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*i),z:Math.round(Math.sin(n)*i)}}for(let n=0;n<13;n++){const i=e.range(0,Math.PI*2),r=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(i)*r),z:Math.round(Math.sin(i)*r),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(Qt(t,e,this.seed+53)-.5)*110,i=(Qt(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*we+n),z:Math.round(e*we+i)}}get gtx(){return Math.round(this.homeTown.x/we)}get gtz(){return Math.round(this.homeTown.z/we)}townAt(t,e){if(Math.abs(t)<2&&Math.abs(e)<2)return!1;if(t===this.gtx&&e===this.gtz)return!0;if(Qt(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const i of this.oases)if(Math.hypot(i.x-n.x,i.z-n.z)<i.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let i=null,r=n;const o=Math.floor((t-n)/we),a=Math.floor((t+n)/we),l=Math.floor((e-n)/we),c=Math.floor((e+n)/we);for(let d=o;d<=a;d++)for(let u=l;u<=c;u++){if(!this.townAt(d,u))continue;const f=this.townCenter(d,u),h=Math.hypot(f.x-t,f.z-e);h<=r&&(r=h,i=f)}return i}nearestTown(t,e){let n=null,i=1/0;const r=Math.floor(t/we),o=Math.floor(e/we);for(let a=r-4;a<=r+4;a++)for(let l=o-4;l<=o+4;l++){if(!this.townAt(a,l))continue;const c=this.townCenter(a,l),d=Math.hypot(c.x-t,c.z-e);d<i&&(i=d,n=c)}return n??this.homeTown}}function Al(s,t,e){const n=Math.min(.999,Math.max(.001,Gs(s/900+.5,t/900+.5,e,3))),r=[.17,.42,.57,.72,.9].map(l=>Math.exp(-Math.abs(n-l)/.05)),o=Math.max(Math.abs(s),Math.abs(t));o<80&&(r[0]+=Math.pow(1-o/80,2)*6);const a=r.reduce((l,c)=>l+c,0);return r.map(l=>l/a)}function jr(s,t,e){const n=Al(s,t,e);let i=0;for(let r=1;r<5;r++)n[r]>n[i]&&(i=r);return i}function Jg(s,t,e){const n=Al(t,e,s),i=[30+Gs(t/140,e/140,s+7)*8+Math.sin(t/9+e/13)*.9,29+Gs(t/160,e/160,s+9)*6+Math.max(0,Tl(t/26,e/26,s+11)-.72)*10,28+Gs(t/220,e/220,s+5)*3,33+Math.floor(Gs(t/170,e/170,s+13)*4.99)*5,29-$g(t/210,e/210,s+17)*9];let r=0;for(let o=0;o<5;o++)r+=n[o]*i[o];return r}function Te(s,t,e){const n=Math.max(Math.abs(t),Math.abs(e)),i=Jg(s,t,e);if(n>=30)return i;if(n<=14)return 30;const r=(n-14)/16,o=r*r*(3-2*r);return 30+(i-30)*o}function Qg(s,t,e,n,i){const r=Al(t,e,s);let o=0,a=1;r[1]>r[0]&&(o=1,a=0);for(let l=2;l<5;l++)r[l]>r[o]?(a=o,o=l):r[l]>r[a]&&(a=l);return r[a]/r[o]>.35&&Qt(t,e,s+45)<r[a]/(r[o]+r[a])&&(o=a),n===i?o===Kg?Is:o===Kr?ui:o===Ka?pi:o===$a&&Qt(t,e,s+41)>.78?rr:yn:n>=i-3?o===Kr?ui:yn:o===Ka||o===Kr?ui:pi}function t_(s){const n=(a,l)=>a===4||a===-6?Math.abs(l)<=4:l===5||l===-5?a>=-5&&a<=3:a>=-5&&a<=3&&l>=-4&&l<=4,i=(a,l,c)=>(a===4||a===-6)&&Math.abs(c)>=3&&(l===30||l===34);for(let a=-6;a<=4;a++)for(let l=-5;l<=5;l++)for(let c=30;c<=34;c++){if(!n(a,l)||i(a,c,l))continue;const d=a>=2&&Math.abs(l)>2,u=a>=-5&&a<=3&&l>=-4&&l<=4&&c>=31&&c<=33&&!d;s(a,c,l,u?kt:c===30?Cn:An)}for(let a=-3;a<=1;a++)for(let l=-2;l<=2;l++)s(a,35,l,An);for(let a=-2;a<=0;a++)for(let l=-1;l<=1;l++)s(a,36,l,An);for(let a=-2;a<=1;a++)for(const l of[6,7,8,9,-6,-7,-8,-9])s(a,32,l,Cn);for(const a of[-3,2])for(const l of[6,7,8,-6,-7,-8])s(a,32,l,Cn);for(const a of[-1,0])s(a,31,10,Cn),s(a,31,-10,Cn);const r=(a,l,c)=>{s(a,l,c,Ke),s(a,l+1,c,Ge)},o=(a,l,c)=>{s(a,l,c,Ne),s(a,l+1,c,ke)};for(let a=-4;a<=4;a++)for(let l=31;l<=33;l++)s(1,l,a,An),s(-2,l,a,An);for(let a=-5;a<=-3;a++)for(const l of[-2,2])for(let c=31;c<=33;c++)s(a,c,l,An);o(1,31,0),o(-2,31,0),o(-2,31,3),o(-2,31,-3),r(-6,31,0);for(let a=-2;a<=2;a++)for(let l=32;l<=33;l++)s(4,l,a,ar);s(-4,30,4,en),s(-4,29,4,en),s(-3,30,4,en),s(-4,31,-4,mi),s(-1,33,0,mi),s(-4,31,-1,cn),s(0,31,-3,hn),s(0,31,-2,Gn);for(const[a,l]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])s(a,34,l,Rn);for(const[a,l]of[[0,3],[0,4],[-1,4],[2,2]])s(a,31,l,Cn)}function e_(s,t,e){const n=new po(jg+77);for(let i=0;i<40;i++){const r=t.x+n.int(-5,5),o=t.z+n.int(-5,5),a=Math.round(Te(e,r,o));s(r,a+n.int(0,1),o,n.next()<.5?An:Cn)}s(t.x,Math.round(Te(e,t.x,t.z))+1,t.z,Zi)}function $h(s,t,e,n){const i=5+Math.floor(n()*3),r=[],o=(u,f,h,p,x)=>r.push({x:u,y:f,z:h,b:p,stage:x});o(s,t,e,li,1),o(s,t+1,e,li,1);for(let u=2;u<i;u++)o(s,t+u,e,li,2);const a=[[1,0],[-1,0],[0,1],[0,-1]],l=2+(n()<.5?1:0);for(let u=0;u<l;u++){const f=a[Math.floor(n()*4)];o(s+f[0],t+i-2+u%2,e+f[1],li,2)}const c=new Set(r.map(u=>u.x+","+u.y+","+u.z)),d=t+i-1;for(let u=-1;u<=2;u++){const f=u===-1||u===2?1.7:2.4;for(let h=-3;h<=3;h++)for(let p=-3;p<=3;p++){const x=h*h+p*p+u*u*2.2;if(x>f*f||x>(f-.9)*(f-.9)&&n()<.3||h===0&&p===0)continue;const _=s+h,m=d+u,E=e+p;c.has(_+","+m+","+E)||o(_,m,E,Jn,3)}}return r}function Kh(s,t,e,n,i,r){const o=new po(Qt(t,n,i+r)*4294967296>>>0||1);for(const a of $h(t,e+1,n,()=>o.next()))s(a.x,a.y,a.z,a.b)}function n_(s,t,e){const n=Math.round(Te(e,t.x,t.z));for(let o=-t.r-1;o<=t.r+1;o++)for(let a=-t.r-1;a<=t.r+1;a++){const l=t.x+o,c=t.z+a,d=Math.sqrt(o*o+a*a),u=Math.round(Te(e,l,c));if(d<=t.r){const f=Math.max(1,Math.round(2.7-1.7*(d/t.r)));for(let h=u;h>n-f;h--)s(l,h,c,kt);s(l,n-f,c,yn);for(let h=n-f+1;h<=n;h++)s(l,h,c,en)}else if(d<=t.r+1)for(let f=u;f<n+1;f++)s(l,f,c,yn)}const i=3+(Qt(t.x,t.z,e+73)<.5?1:0);for(let o=-t.r-i;o<=t.r+i;o++)for(let a=-t.r-i;a<=t.r+i;a++){const l=Math.sqrt(o*o+a*a);if(l<=t.r||l>t.r+i)continue;const c=t.x+o,d=t.z+a,u=Math.max(Math.round(Te(e,c,d)),n);for(let f=u-2;f<=u;f++)s(c,f,d,f===u?Li:$n)}const r=4+Math.floor(Qt(t.x,t.z,e+75)*4);for(let o=0;o<r;o++){const a=o*(Math.PI*2/r)+Qt(t.x+o,t.z-o,e+77)*1.1,l=t.r+1.5+Qt(t.x-o,t.z+o,e+79)*(i+2),c=t.x+Math.round(Math.cos(a)*l),d=t.z+Math.round(Math.sin(a)*l),u=Math.max(Math.round(Te(e,c,d)),n);Kh(s,c,u,d,e,81)}for(let o=0;o<5;o++){if(Qt(t.x,t.z,e+61+o)<.35)continue;const a=o*1.27+Qt(t.z,t.x,e+67+o)*.8,l=t.r+.5,c=t.x+Math.round(Math.cos(a)*l),d=t.z+Math.round(Math.sin(a)*l);Math.hypot(c-t.x,d-t.z)<t.r||s(c,Math.max(Math.round(Te(e,c,d)),n)+1,d,Pn)}}function i_(s,t,e){for(const[l,c]of[[-4,-3],[2,2],[-2,4]]){const d=Math.round(Te(e,t.x+l,t.z+c));for(let u=0;u<4;u++)for(let f=0;f<4;f++)for(let h=d+1;h<=d+3;h++){if(!(u===0||u===3||f===0||f===3||h===d+1||h===d+3)){s(t.x+l+u,h,t.z+c+f,kt);continue}u===0&&f===1&&h<=d+2||s(t.x+l+u,h,t.z+c+f,lr)}s(t.x+l+1,d+2,t.z+c+1,ze),s(t.x+l+1,d+2,t.z+c+2,Un),s(t.x+l+2,d+2,t.z+c+2,Xn)}const n=t.x+3+Math.round((Qt(t.x,t.z,e+83)-.5)*8),i=t.z-3+Math.round((Qt(t.z,t.x,e+85)-.5)*8),r=2.5+Qt(t.x,t.z,e+87)*2;for(let l=-5;l<=5;l++)for(let c=-5;c<=5;c++){if(Math.sqrt(l*l+c*c)>r)continue;const d=n+l,u=i+c,f=Math.round(Te(e,d,u));for(let h=f-2;h<=f;h++)s(d,h,u,h===f?Li:$n)}const o=3+Math.floor(Qt(t.x,t.z,e+89)*4);for(let l=0;l<o;l++){const c=l*(Math.PI*2/o)+Qt(t.x+l,t.z-l,e+91)*1.3,d=1+Qt(t.x-l,t.z+l,e+93)*r,u=n+Math.round(Math.cos(c)*d),f=i+Math.round(Math.sin(c)*d);Kh(s,u,Math.round(Te(e,u,f)),f,e,95)}const a=Math.round(Te(e,t.x,t.z+9));for(let l=0;l<5;l++)for(let c=0;c<3;c++)s(t.x-6+l,a,t.z+8+c,ai);s(t.x-5,a+1,t.z+9,Dn),s(t.x-3,a+1,t.z+8,Dn),s(t.x-2,a+1,t.z+10,Pn)}function s_(s,t,e,n){const i=new Uint8Array(it*it*se),r=(d,u,f,h)=>{const p=d-e*it,x=f-n*it;p>=0&&p<it&&x>=0&&x<it&&u>=0&&u<se&&(i[(p*it+x)*se+u]=h)};for(let d=0;d<it;d++)for(let u=0;u<it;u++){const f=e*it+d,h=n*it+u,p=Math.round(Te(s,f,h));for(let _=0;_<=p;_++)i[(d*it+u)*se+_]=Qg(s,f,h,_,p);const x=f*f+h*h<240;if(!x&&Qt(f,h,s+21)>.988){const _=jr(f,h,s);if(_===Kc||_===$a){for(let m=1;m<=2;m++)r(f,p+m,h,ui);d>0&&r(f-1,p+1,h,ui)}}if(!x&&Qt(f,h,s+23)>.9935){const _=jr(f,h,s);if(_!==Ka&&_!==Kr){const m=3+(Qt(f,h,s+29)*3|0);for(let E=p+1;E<=p+m;E++)r(f,E,h,or)}}if(!x&&i[(d*it+u)*se+p+1]===0&&Qt(f,h,s+31)>.9915){const _=jr(f,h,s);if(_===Kc||_===$a){const m=2+(Qt(f,h,s+37)*3|0);for(let E=p+1;E<=p+m;E++)r(f,E,h,In);m>=3&&Qt(f,h,s+41)>.55&&r(f+(Qt(f,h,s+43)>.5?1:-1),p+2,h,In),m>=3&&Qt(f,h,s+47)>.7&&r(f,p+m,h,Ri)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&t_(r);for(const d of t.oases)Math.abs(e*it+8-d.x)<d.r+24&&Math.abs(n*it+8-d.z)<d.r+24&&n_(r,d,s);const o=Math.floor((e*it-14-we)/we),a=Math.floor((e*it+it+14+we)/we),l=Math.floor((n*it-14-we)/we),c=Math.floor((n*it+it+14+we)/we);for(let d=o;d<=a;d++)for(let u=l;u<=c;u++){if(!t.townAt(d,u))continue;const f=t.townCenter(d,u);e*it<=f.x+16&&e*it+it-1>=f.x-12&&n*it<=f.z+12&&n*it+it-1>=f.z-16&&i_(r,f,s)}return Math.abs(e*it+8-t.secondShip.x)<12&&Math.abs(n*it+8-t.secondShip.z)<12&&e_(r,t.secondShip,s),i}const Nn=(s,t)=>s+","+t,jc=(s,t,e)=>(s*it+t)*se+e,Qo=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Zc=new Set([kt,Ue,Ne,ke,$e,Jn]);class r_{constructor(t){this.seed=t,this.gen=new Zg(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;waterQ=new Set;gen;chunk(t,e){const n=Nn(t,e);let i=this.chunks.get(n);if(!i){i=s_(this.seed,this.gen,t,e);const r=this.deltas.get(n);if(r)for(const[o,a]of r)i[o]=a;this.chunks.set(n,i)}return i}get(t,e,n){if(e<0||e>=se)return kt;const i=Math.floor(t/it),r=Math.floor(n/it);return this.chunk(i,r)[jc(t-i*it,n-r*it,e)]}skyResistance(t,e,n,i=40){let r=0,o=0;for(let a=1;a<=i;a++){const l=this.get(t,e+a,n);if(l===kt)continue;const c=o_[l];if(c&&(r+=c,l!==Jn&&(o+=c,o>=6)))return{R:r,openSky:!1}}return{R:r,openSky:o===0}}roomInfo(t,e,n,i=400){if(!Zc.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const r=new Set([`${t},${e},${n}`]),o=[[t,e,n]],a=new Set;let l=0,c=!0;for(;o.length;){const[d,u,f]=o.pop();if(++l>i){c=!1;break}for(const[h,p,x]of Qo){const _=d+h,m=u+p,E=f+x;if(m>=se){c=!1;continue}const g=this.get(_,m,E);if(Zc.has(g)){const v=_+","+m+","+E;r.has(v)||(r.add(v),o.push([_,m,E]))}else g===mi&&a.add(_+","+m+","+E)}}return{size:l,sealed:c,regulators:a.size,regCells:[...a]}}set(t,e,n,i){if(e<0||e>=se)return;const r=Math.floor(t/it),o=Math.floor(n/it),a=this.chunk(r,o),l=jc(t-r*it,n-o*it,e);if(a[l]===i)return;const c=a[l];if(a[l]=i,qn(i)||qn(c)||i===kt){this.queueWater(t,e,n);for(const[h,p,x]of Qo)this.queueWater(t+h,e+p,n+x)}let d=this.deltas.get(Nn(r,o));d||this.deltas.set(Nn(r,o),d=new Map),d.set(l,i),this.markDirty(r,o);const u=t-r*it,f=n-o*it;u===0&&this.markDirty(r-1,o),f===0&&this.markDirty(r,o-1),u===it-1&&this.markDirty(r+1,o),f===it-1&&this.markDirty(r,o+1)}markDirty(t,e){this.dirty.add(Nn(t,e))}queueWater(t,e,n){e>=0&&e<se&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;for(;this.waterQ.size&&e<t;){const n=this.waterQ.values().next().value;this.waterQ.delete(n);const[i,r,o]=n.split(",").map(Number);e+=this.drainFlow(i,r,o,t-e),e+=this.floodFrom(i,r,o,t-e)}return e}drainFlow(t,e,n,i){let r=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],a=new Set;for(;o.length&&r++<i;){const[l,c,d]=o.pop(),u=ps(this.get(l,c,d));if(!u||u===8)continue;const f=l+","+c+","+d;if(!a.has(f)&&(a.add(f),!this.waterSupported(l,c,d,u))){this.set(l,c,d,kt);for(const[h,p,x]of Qo)o.push([l+h,c+p,d+x])}}return r}waterSupported(t,e,n,i){for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(ps(this.get(t+r,e,n+o))>i)return!0;return ps(this.get(t,e+1,n))>=i}floodFrom(t,e,n,i){let r=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]];for(;o.length&&r++<i;){const[a,l,c]=o.shift(),d=ps(this.get(a,l,c));if(!d)continue;if(l>0){const f=this.get(a,l-1,c);(f===kt||qn(f))&&ps(f)<d&&(this.set(a,l-1,c,$c(d===8?7:d)),o.push([a,l-1,c]))}const u=d===8?7:d-1;if(!(u<1))for(const[f,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const p=this.get(a+f,l,c+h);(p===kt||qn(p))&&ps(p)<u&&(this.set(a+f,l,c+h,$c(u)),o.push([a+f,l,c+h]))}}return r}surface(t,e){for(let n=se-1;n>=0;n--)if(this.get(t,n,e)!==kt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const i=[];for(const[r,o]of n)i.push(r,o);t[e]=i}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const i=new Map;for(let r=0;r<n.length;r+=2)i.set(n[r],n[r+1]);this.deltas.set(e,i)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}}const o_=fi.map(s=>s.R);function a_(s,t,e,n,i){const r=s.get(t,e,n);return r===Ke||r===Ge||r===Ne||r===ke?!0:!(wl(r)||r===i)}const zr=.6,l_=1.8,Jc=1.62;class c_{constructor(t){this.world=t}pos=new P(.5,31.01,2.5);vel=new P;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;waterAt(t){return qn(this.world.get(Math.floor(this.pos.x),Math.floor(this.pos.y+t),Math.floor(this.pos.z)))}collides(t,e,n){const i=Math.floor(t-zr/2),r=Math.floor(t+zr/2),o=Math.floor(n-zr/2),a=Math.floor(n+zr/2),l=Math.floor(e),c=Math.floor(e+l_-.001);for(let d=i;d<=r;d++)for(let u=o;u<=a;u++)for(let f=l;f<=c;f++)if(qe(this.world.get(d,f,u)))return!0;return!1}update(t,e,n,i,r,o){this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Jc);const a=this.inWater,l=(this.sprinting?7.2:4.5)*r*(o?.25:1)*(a?.55:1),c=new P(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),d=new P(-c.z,0,c.x),u=c.multiplyScalar(n).add(d.multiplyScalar(e));u.lengthSq()>1&&u.normalize();const f=this.onGround?40:a?12:8;this.vel.x+=(u.x*l-this.vel.x)*Math.min(1,f*t),this.vel.z+=(u.z*l-this.vel.z)*Math.min(1,f*t),a?(this.vel.y-=7*t,i&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=Ai.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,i&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0)),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,i=Math.max(1,Math.ceil(Math.abs(t)/.3)),r=t/i;for(let o=0;o<i;o++){const a=n.x+(e===0?r:0),l=n.y+(e===1?r:0),c=n.z+(e===2?r:0);if(!this.collides(a,l,c)){n.set(a,l,c);continue}e===1?(r<0&&(this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new P(this.pos.x,this.pos.y+Jc,this.pos.z)}}const Xi=20,Vs=45,Rl=36,Cl=37.5,ja=39.5,Za=31.5,Ja=5,h_=27,u_=25,so=100;class d_{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%Pe/Pe}ambient(t,e,n){const i=(e-.28+1)%1;let r=h_-u_*(i<=.3?Math.cos(i/.3*Math.PI):Math.cos((1+(i-.3)/.7)*Math.PI));t===2&&(r-=2),(t===3||t===4)&&(r+=3);const o=Yh(Math.floor(n/10)/60,this.weatherSeed)*2-1;return r+o*8}update(t,e,n,i){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const r=this.worldTimeToDayFrac(i.tSec),o=this.ambient(i.biome,r,i.tSec),a=Math.floor(n.x),l=Math.floor(n.y),c=Math.floor(n.z),d=(E,g,v)=>{const{R:w,openSky:A}=e.skyResistance(E,g,v);let R=1-Math.exp(-w),U=o;A&&i.sunElev>0&&(U+=8+10*i.sunElev);const b=e.roomInfo(E,g,v);return b.sealed&&(b.regulators*so>=b.size?(U=36.6,R=1):(U=o,R=0)),{R:w,openSky:A,shelter:R,ambEff:U,room:b}};let u=d(a,l,c);if(u.room.size===0){const E=`${a},${l},${c}|${Math.floor(i.tSec*2)}`;if(this.embedKey!==E){let g=u;for(let v=-1;v<=1;v++)for(let w=-1;w<=1;w++)for(let A=-1;A<=1;A++){if(!v&&!w&&!A)continue;const R=d(a+v,l+w,c+A);R.room.size!==0&&Math.abs(R.ambEff-37)<Math.abs(g.ambEff-37)&&(g=R)}this.embedKey=E,this.embedAir=g}this.embedAir&&(u=this.embedAir)}this.lastOpenSky=u.openSky;let f=u.shelter,h=u.ambEff;const p=u.room;if(this.lastRoom=p,i.inWater){const E=Ai.clamp(o,12,24)-3;h=(h+E)/2}i.warmth&&(h+=i.warmth);const x=36.6+(h-36.6)*(1-f);this.lastAmbient=o,this.lastAmbientEff=h,this.lastShelterR=u.R,this.lastTarget=x;const _=p.sealed?.022:.0075;this.body+=(x-this.body)*_*t,this.body=Ai.clamp(this.body,12,44.5);let m=100/(Pe*1.5);this.body>37&&(m+=(this.body-37)*.02),i.sprinting&&(m*=1.7),i.overencumbered&&(m+=.05),this.water=Math.max(0,this.water-m*t),this.body>ja&&this.hurt((this.body-ja)*.6,"heat stroke"),this.body<Za&&this.hurt((Za-this.body)*.7,"hypothermia"),this.water<=0?this.hurt(1.2,"dehydration"):this.water<Ja&&this.hurt((Ja-this.water)*.15,"dehydration"),this.water>25&&this.body>=Rl&&this.body<=Cl&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=Ai.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,i,r){const o=this.worldTimeToDayFrac(r),a=this.ambient(0,o,r),{openSky:l}=t.skyResistance(e,n,i);let c=a;const d=Math.max(0,Math.sin((o-.28)*Math.PI*2));l&&d>0&&(c+=8+10*d);const u=t.roomInfo(e,n,i);return u.sealed&&(c=u.regulators*so>=u.size?36.6:a),c}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=10,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const Qa=15,Ws=it+2,_s=(s,t,e)=>((s+1)*Ws+(t+1))*se+e,f_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Qc(s){return s===Jn?2:s===kt?1:wl(s)?-1:1}function p_(s){return s===Jn?2:qn(s)?1:s===kt?0:wl(s)?-1:0}class m_{maps=new Map;invalidate(t,e){this.maps.delete(Nn(t,e))}lightAt(t,e,n){if(e<0||e>=se)return 0;const i=Math.floor(t/it),r=Math.floor(n/it),o=this.maps.get(Nn(i,r));return o?o[_s(t-i*it,n-r*it,e)]:0}bake(t,e,n,i){const r=t.chunk(e,n),o=new Uint8Array(Ws*Ws*se),a=[],l=(d,u,f,h)=>{if(h<=0)return;const p=_s(d,u,f);h>o[p]&&(o[p]=h,a.push(p))},c=(d,u,f)=>d>=0&&d<it&&u>=0&&u<it?r[(d*it+u)*se+f]:t.get(e*it+d,f,n*it+u);for(let d=-1;d<=it;d++)for(let u=-1;u<=it;u++){let f=Qa;for(let h=se-1;h>=0;h--){const p=p_(c(d,u,h));if(p<0||(l(d,u,h,f),p>0&&(f-=p,f<=0)))break}}for(const[d,u]of[[-1,0],[1,0],[0,-1],[0,1]]){const f=this.maps.get(Nn(e+d,n+u));if(f)for(let h=0;h<it;h++)for(let p=0;p<se;p++){const x=d<0?-1:d>0?it:h,_=u<0?-1:u>0?it:h,m=d<0?it-1:d>0?0:h,E=u<0?it-1:u>0?0:h,g=f[_s(m,E,p)];g>0&&l(x,_,p,g)}}for(let d=0;d<a.length;d++){const u=a[d],f=o[u];if(f<=1)continue;const h=(u/(Ws*se)|0)-1,p=u%(Ws*se),x=(p/se|0)-1,_=p%se;for(const[m,E,g]of f_){const v=h+m,w=x+g,A=_+E;if(!(A<0||A>=se))if(v>=-1&&v<=it&&w>=-1&&w<=it){const R=Qc(c(v,w,A));R>=0&&l(v,w,A,f-R)}else{const R=e*it+v,U=n*it+w,b=Qc(t.get(R,A,U));if(b<0)continue;const S=Math.floor(R/it),I=Math.floor(U/it),L=this.maps.get(Nn(S,I));L&&L[_s(R-S*it,U-I*it,A)]+1<f-b&&i(S,I)}}}return this.maps.set(Nn(e,n),o),o}}const g_=new Set([Ke,Ge,Ue,Ne,ke,$e]),__=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],dn=16,ys=16,tl=[yn,pi,ui,rr,$n,Is,or,co,ar,An,Ke,Ge,Rn,ho,cn,hn,vn,en,lr,Ue,Zi,mi,ze,Gn,In,uo,Ml,yl,Sl,bl,El,fo,ai,Ln,Pn,di,Dn,Ri,cr,Cn,Ne,ke,$e,Un,Xn,Li,li,Jn,Tn];let ta=null;function jh(){if(ta)return ta;const s=document.createElement("canvas");s.width=s.height=ys*dn;const t=s.getContext("2d"),e=new po(48879),n={};tl.forEach((o,a)=>n[o]=a);const i=o=>Math.max(0,Math.min(1,o)),r=o=>{const a=n[o],l=a%ys*dn,c=(a/ys|0)*dn,[d,u,f]=fi[o].color,h=(g,v=1,w=0,A=0,R=0)=>`rgba(${Math.round(i(d+g+w)*255)},${Math.round(i(u+g+A)*255)},${Math.round(i(f+g+R)*255)},${v})`,p=(g,v,w)=>{t.fillStyle=w,t.fillRect(l+g,c+v,1,1)},x=g=>{t.fillStyle=g,t.fillRect(l,c,dn,dn)},_=g=>(e.next()-.5)*g,m=(g,v)=>{for(let w=0;w<g;w++)p(e.int(0,15),e.int(0,15),h(_(v)))},E=(g,v)=>{let w=e.int(1,13),A=e.int(1,13);for(let R=0;R<g;R++)p(w,A,h(_(v)-.15)),w+=e.int(-1,1),A+=e.int(0,1),w=Math.max(0,Math.min(15,w)),A=Math.max(0,Math.min(15,A))};switch(o){case yn:x(h(0)),m(50,.14);break;case pi:x(h(0)),m(30,.1);for(const g of[3,8,12])for(let v=0;v<16;v++)e.next()>.25&&p(v,g+v%2,h(-.12));break;case ui:x(h(_(.08))),m(40,.12),E(9,.05),E(7,.05);break;case rr:x(h(-.04));for(let g=0;g<14;g++){const v=e.int(1,14),w=e.int(1,14);p(v,w,h(.12)),p(v+1,w,h(.05)),p(v,w+1,h(-.15)),p(v-1,w,h(-.1))}break;case $n:x(h(0)),m(70,.22);break;case Is:x(h(.04)),m(25,.08);for(let g=2;g<16;g+=5)for(let v=0;v<16;v++)e.next()>.4&&p(v,g+(v%3===2?1:0),h(-.12));break;case or:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(g,v,h(_(.16)+Math.sin(v*.9+g)*.03));p(5,6,h(-.2)),p(6,6,h(-.25)),p(5,7,h(-.15));break;case co:x(h(0,.16));for(let g=0;g<16;g++)p(g,0,h(.12,.4)),p(g,15,h(.12,.4)),p(0,g,h(.12,.4)),p(15,g,h(.12,.4));for(let g=2;g<8;g++)p(g,g+2,h(.3,.4));break;case ar:x(h(0,.26));for(let g=0;g<16;g++)p(g,0,h(.1,.55)),p(g,15,h(.1,.55)),p(0,g,h(.1,.55)),p(15,g,h(.1,.55)),p(8,g,h(.06,.5)),p(g,8,h(.06,.5));break;case An:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(v,g,h(-g*.006+_(.05)));for(let g=0;g<16;g++)p(g,10,h(-.22));for(const g of[1,5,9,13])p(g,9,h(.18)),p(g,11,h(.12));break;case Ke:x(h(-.03)),m(12,.06);for(let g=0;g<16;g++)p(g,0,h(-.22)),p(g,15,h(-.22)),p(0,g,h(-.22)),p(15,g,h(-.22));t.strokeStyle=h(.08),t.strokeRect(l+3.5,c+2.5,8,10);for(let g=7;g<=9;g++)p(12,g,h(.3));break;case Ge:x(h(-.03)),m(12,.06);for(let g=0;g<16;g++)p(g,0,h(-.22)),p(g,15,h(-.22)),p(0,g,h(-.22)),p(15,g,h(-.22));for(let g=4;g<=11;g++)for(let v=5;v<=10;v++)p(v,g,h(-.3,1,-.1,-.02,.06));t.strokeStyle=h(.14),t.strokeRect(l+4.5,c+3.5,7,9);break;case Ue:for(let g=0;g<16;g++)p(0,g,h(-.1,.9)),p(1,g,h(.05,.85)),p(2,g,h(-.15,.7));p(1,7,h(.3,.9)),p(1,8,h(.3,.9));break;case Rn:x(h(-.25));for(let g=5;g<=10;g++)for(let v=5;v<=10;v++)p(v,g,h(g>5&&g<10&&v>5&&v<10?.38:.2));for(let g=4;g<=11;g++)p(g,4,h(-.15)),p(g,11,h(-.15));break;case ho:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(v,g,h((g%3===0?-.06:.03)+_(.05)));for(const[g,v]of[[2,2],[13,2],[2,13],[13,13]])p(g,v,h(.2));break;case cn:x(h(-.25)),m(10,.08);for(let g=-3;g<=3;g++){const v=3-Math.abs(g);for(let w=-v;w<=v;w++)p(8+w,8+g,h(g===0?0:.05,1))}p(8,7,h(.3,1)),p(7,8,h(.2,1));break;case hn:x(h(0)),m(14,.08);for(let g=0;g<16;g++)p(g,0,h(-.28)),p(g,1,h(.12)),p(g,5,h(-.22));for(let g=0;g<16;g++)for(let v=6;v<16;v++)p(g,v,h(-.12+(v%4===0?-.08:0)+_(.05)));for(let g=3;g<=12;g++)p(g,3,"rgba(150,156,168,1)");p(2,3,"rgba(90,64,40,1)"),p(2,4,"rgba(90,64,40,1)");for(let g=8;g<=11;g++)p(g,2,"rgba(110,80,50,1)");p(11,2,"rgba(150,156,168,1)"),p(12,2,"rgba(150,156,168,1)"),p(11,3,"rgba(150,156,168,1)"),p(12,3,"rgba(150,156,168,1)");break;case Gn:x(h(-.18)),m(10,.06);for(const g of[1,2,13,14])for(let v=0;v<16;v++)p(g,v,h(.1));for(let g=3;g<=8;g++)for(let v=4;v<=11;v++)p(v,g,h(.06+_(.04)));for(let g=4;g<=11;g++)p(g,3,h(-.3)),p(g,8,h(-.3));p(7,5,"rgba(190,190,190,1)"),p(8,5,"rgba(190,190,190,1)");for(let g=3;g<=12;g++)p(g,12,h(.12));for(let g=3;g<=12;g++)p(g,13,h(-.25));break;case vn:x(h(-.1));for(let g=0;g<16;g+=2)p(g,13,h(.15,1,.02,-.02,0)),p(g+1,14,h(.08));for(let g=2;g<12;g++)p(g,14-g+2,h(.05,1,-.1,-.15,-.25)),p(g,g-1,h(0,1,-.12,-.18,-.3));for(let g=5;g<=10;g++)for(let v=6;v<=9;v++)p(v,g,h(g<8?.3:.18,1,.25,-.05,-.3));p(7,6,h(.45,1,.3,.1,-.25)),p(8,5,h(.4,1,.25,.05,-.25));break;case uo:case Ml:case yl:case Sl:case bl:case El:case fo:case en:x(h(0,.72));for(const g of[2,6,10,14])for(let v=0;v<16;v++)e.next()>.45&&p(v,g+(v%4<2?0:1),h(.15,.8));m(10,.08);break;case lr:x(h(_(.06)));for(const g of[3,7,11])for(let v=0;v<16;v++)p(v,g,h(-.18));for(let g=0,v=0;v<16;v+=4,g++)for(let w=g%2*4;w<16;w+=8)for(let A=v;A<v+3;A++)p(w,A,h(-.15));break;case Zi:x(h(-.35,1,.05,0,.1));for(let g=0;g<24;g++)p(e.int(0,15),e.int(0,15),h(-.25,1,.1,0,.18));for(let g=4;g<=11;g++)for(let v=4;v<=11;v++){const w=Math.max(Math.abs(g-7.5),Math.abs(v-7.5));w>=3.5?p(g,v,h(.12,1,.55,.15,.85)):p(g,v,h(.3+(3-w)*.15,1,.75,.3,1))}break;case mi:x(h(-.08)),m(10,.05);for(const g of[1,3,5])for(let v=2;v<=13;v++)p(v,g,h(-.25));for(let g=4;g<=11;g++)for(let v=7;v<=14;v++){const w=Math.max(Math.abs(g-7.5),Math.abs(v-10.5));w>=3.2?p(g,v,h(.12)):p(g,v,h(.22+(3-w)*.1,1,-.05,.15,.2))}break;case In:x(h(0)),m(36,.1);for(const g of[2,7,12])for(let v=0;v<16;v++)p(g,v,h(-.14));for(const[g,v]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])p(g,v,h(.22)),p(g+1,v,h(-.2)),p(g,v+1,h(-.2));p(13,1,"rgba(214,74,130,1)"),p(1,6,"rgba(198,58,114,1)"),p(5,11,"rgba(214,74,130,1)");break;case ze:x(h(-.02)),m(18,.07);for(let g=0;g<16;g++)p(g,0,h(-.28)),p(g,7,h(-.24)),p(g,15,h(-.3));for(let g=0;g<16;g++)p(g,4,"rgba(148,154,166,1)"),p(g,5,"rgba(120,126,138,1)");for(let g=2;g<5;g++)for(const v of[7,8])p(v,g,"rgba(200,205,215,1)");p(7,6,"rgba(40,42,48,1)"),p(8,6,"rgba(40,42,48,1)");break;case ai:x(h(_(.04)));for(const g of[2,6,10,14])for(let v=0;v<16;v++)p(v,g,h(-.14));for(const g of[3,7,11])for(let v=0;v<16;v++)e.next()>.6&&p(v,g,h(.1));break;case Ln:case Pn:{if(x(h(_(.03))),o===Ln){for(const[g,v]of[[7,13],[8,13],[7,12],[8,12],[9,13]])p(g,v,h(.08));p(6,11,h(.16)),p(9,10,h(.12)),p(7,11,h(.02))}else{for(let g=6;g<=13;g++)for(let v=3;v<=12;v++)Math.hypot(v-7.5,(g-9.5)*1.35)>5.2||p(v,g,(v+(g/2|0))%4===0?h(-.14):h(.05));p(8,5,h(-.1)),p(7,5,h(-.16)),p(2,13,h(.1)),p(13,12,h(.06)),p(4,14,h(.08))}break}case di:case Dn:{x(h(_(.03)));for(const g of[13,14])for(let v=0;v<16;v++)p(v,g,h(-.12));if(o===di)for(const g of[4,8,12])for(let v=11;v<=14;v++)p(g,v,h(.1));else for(const g of[3,8,13]){for(let v=3;v<=14;v++)p(g,v,h(-.05));for(let v=3;v<=8;v+=2)p(g-1,v,h(.2)),p(g+1,v,h(.15))}break}case Ri:x(h(0)),m(36,.1);for(const g of[2,7,12])for(let v=0;v<16;v++)p(g,v,h(-.14));for(const[g,v]of[[4,4],[9,6],[6,10],[11,12],[3,14]])p(g,v,h(.22)),p(g+1,v,h(-.2)),p(g,v+1,h(-.2));for(let g=0;g<=3;g++)for(let v=5;v<=10;v++)p(v,g,"rgba(214,74,130,1)");p(6,0,"rgba(238,150,190,1)"),p(9,1,"rgba(238,150,190,1)");break;case cr:x(h(-.12)),m(10,.05);for(let g=0;g<16;g++)p(g,0,h(-.26)),p(g,15,h(-.26)),p(g,7,"rgba(150,156,168,1)"),p(g,8,"rgba(110,116,128,1)");for(const[g,v]of[[2,3],[13,3],[2,12],[13,12]])p(g,v,"rgba(200,205,215,1)");for(let g=2;g<=5;g++)p(0,g,h(.14));for(let g=2;g<=5;g++)p(15,g,h(.14));break;case Cn:x(h(0));for(let g=0;g<16;g++)for(let v=0;v<16;v++)p(v,g,h((v%4===0?-.05:.02)+_(.04)));for(let g=0;g<16;g++)p(g,0,h(-.2)),p(g,15,h(-.2)),p(0,g,h(-.16)),p(15,g,h(-.16));for(const[g,v]of[[3,3],[12,3],[3,12],[12,12]])p(g,v,h(.22));break;case Ne:case ke:{x(h(-.05)),m(10,.05);for(let g=0;g<16;g++)p(g,0,h(-.2)),p(g,15,h(-.2)),p(0,g,h(-.2)),p(15,g,h(-.2));if(o===Ne){t.strokeStyle=h(.06),t.strokeRect(l+4.5,c+3.5,7,9);for(let g=7;g<=9;g++)p(12,g,h(.26))}else{for(let g=5;g<=10;g++)for(let v=6;v<=9;v++)p(v,g,h(.1,1,-.05,.1,.15));t.strokeStyle=h(.12),t.strokeRect(l+5.5,c+4.5,5,7)}break}case $e:for(let g=0;g<16;g++)p(0,g,h(-.12,.9)),p(1,g,h(.03,.85)),p(2,g,h(-.17,.7));p(1,7,h(.26,.9)),p(1,8,h(.26,.9));break;case Un:x(h(_(.03)));for(let g=0;g<16;g++)for(let v=0;v<16;v++)(v+g)%5===0&&p(v,g,h(-.08));t.strokeStyle="rgba(60,26,24,1)",t.lineWidth=1,t.strokeRect(l+.5,c+.5,15,15);for(let g=0;g<16;g++)p(g,11,"rgba(90,40,36,1)"),p(g,12,"rgba(150,80,70,1)");for(let g=0;g<11;g++)p(0,g,h(.12)),p(15,g,h(-.1));break;case Xn:x(h(_(.03))),t.strokeStyle="rgba(60,26,24,1)",t.lineWidth=1,t.strokeRect(l+.5,c+.5,15,15),t.fillStyle="rgba(226,220,206,1)",t.fillRect(l+3,c+4,10,8),t.strokeStyle="rgba(160,152,134,1)",t.strokeRect(l+3.5,c+4.5,9,7);for(let g=0;g<16;g++)p(g,11,"rgba(90,40,36,1)"),p(g,12,"rgba(150,80,70,1)");break;case Li:x(h(-.18,1,-.06,-.12,-.02)),m(40,.18);for(let g=0;g<16;g++){const v=3+Math.round(e.next()*3);for(let w=0;w<v;w++)p(g,w,h(_(.1)+(w===0?.08:0)))}break;case li:x(h(0));for(let g=0;g<16;g++){const v=-.1+(g%4===0?-.1:0)+Math.sin(g*1.7)*.05;for(let w=0;w<16;w++)p(g,w,h(v+_(.06)))}p(9,6,h(-.25)),p(10,6,h(-.2)),p(9,7,h(-.18)),p(10,7,h(-.28));break;case Jn:x(h(0)),m(90,.3);for(let g=0;g<8;g++){const v=e.int(1,14),w=e.int(1,14);p(v,w,h(-.28)),p(v+1,w+1,h(.18))}break;case Tn:for(let g=6;g<16;g++)p(8,g,h(-.25));p(7,5,h(.1)),p(8,5,h(.15)),p(9,5,h(.1)),p(6,4,h(.05)),p(7,4,h(.12)),p(8,4,h(.18)),p(9,4,h(.12)),p(10,4,h(.05)),p(7,3,h(.08)),p(8,3,h(.14)),p(9,3,h(.08)),p(8,2,h(.1));break}};for(const o of tl)r(o);return ta=s,s}function v_(){const s=new Fh(jh());return s.flipY=!1,s.magFilter=s.minFilter=fn,s.generateMipmaps=!1,s.colorSpace=tn,s}const Zh=[];tl.forEach((s,t)=>Zh[s]=t);const Hr=ys*dn,el=s=>{const t=Zh[s]??0;return[t%ys*dn,(t/ys|0)*dn]},Ei=16,th=`
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
`,eh=`
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
`,Os=new P,nh=new P,x_=new Ft(1,.97,.9),M_=new Ft(.2,.27,.45);class y_{scene=new $d;camera;three;chunkMeshes=new Map;group=new Mn;entityGroup=new Mn;sun;hemi;stars;sunDisc;moonDisc;highlight;renderDistance=7;atlas=v_();matOpaque=new Fn({map:this.atlas,vertexColors:!0,side:De});matEmissive=new Vi({map:this.atlas,vertexColors:!0,side:De});matTrans=new Fn({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:De});lightingMode="sky";skyLight=new m_;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new Ft(1,1,1)},uFloor:{value:.16},uFogColor:{value:new Ft(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:Ei},()=>new P)},uLightCol:{value:Array.from({length:Ei},()=>new P)},uLightRange:{value:new Float32Array(Ei)}};matSky=new Zn({uniforms:this.skyU,vertexShader:th,fragmentShader:eh,side:De,defines:{OPAQUE_PASS:"1"}});matSkyT=new Zn({uniforms:this.skyU,vertexShader:th,fragmentShader:eh,side:De,transparent:!0,depthWrite:!1});torch;dynLights=[];constructor(t){this.three=new qg({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new un(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new Sc(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.sun=new lf(16777215,1),this.hemi=new rf(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new pl(14207392,40,this.renderDistance*it);const n=new Ze,i=[];for(let o=0;o<500;o++){const a=Math.random()*Math.PI*2,l=Math.acos(Math.random()*2-1);i.push(Math.sin(l)*Math.cos(a)*400,Math.abs(Math.cos(l))*400,Math.sin(l)*Math.sin(a)*400)}n.setAttribute("position",new ge(i,3)),this.stars=new tf(n,new kh({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new He(new io(24,24),new Vi({color:16771504,fog:!1,side:De,toneMapped:!1})),this.moonDisc=new He(new io(15,24),new Vi({color:14213877,fog:!1,side:De,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const r=new Ii(1.002,1.002,1.002);this.highlight=new Qd(new ef(r),new Nh({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,i){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===t&&o.y===e&&o.z===n))return;const r=new Sc(i==="lamp"?16773296:i==="fire"?16745280:9427199,i==="lamp"?.9:i==="fire"?1.1:.8,i==="lamp"?12:i==="fire"?9:10,1.3);r.position.set(t+.5,e+.6,n+.5),this.scene.add(r),this.dynLights.push({x:t,y:e,z:n,light:r,flame:i==="fire"})}removePointLight(t,e,n){const i=this.dynLights.findIndex(r=>r.x===t&&r.y===e&&r.z===n);i<0||(this.scene.remove(this.dynLights[i].light),this.dynLights.splice(i,1))}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),i=Ai.clamp(n*2.2,0,1),r=Ai.clamp(1-Math.abs(n)*5,0,1),o=new Ft(660006),a=new Ft(13201213),l=new Ft(12570592),c=o.clone().lerp(l,i);r>0&&c.lerp(a,r*.7);const d=new Ft(16767392).lerp(new Ft(16743231),r);return{sky:c,sunColor:d,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:i}}updateSky(t,e){const n=t%Pe/Pe,i=this.keyframe(n);this.scene.background=i.sky,this.scene.fog.color.copy(i.sky),this.scene.fog.far=this.renderDistance*it*.98;const r=(n-.25)*Math.PI*2;Os.set(Math.cos(r),i.sunElev,.4).normalize(),i.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,Os.negate()):(this.sun.color.copy(i.sunColor),this.sun.intensity=i.sunI),this.sun.position.set(e.x+Os.x*120,e.y+Os.y*120,e.z+Os.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+i.sunI*.35,this.stars.material.opacity=Math.max(0,1-i.sunI*3),this.stars.position.set(e.x,e.y,e.z);const o=430;this.sunDisc.position.set(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,e.z+o*.4),this.moonDisc.position.set(e.x-Math.cos(r)*o,e.y-Math.sin(r)*o,e.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(r)>-.12,this.moonDisc.visible=Math.sin(r)<.12,this.torch.intensity=.12+(1-Math.min(1,i.sunI))*.85;for(const c of this.dynLights)c.flame&&(c.light.intensity=.9+Yh(t*5.3+c.x*3.1+c.z,7)*.45);const a=this.skyU;a.uAmbient.value.copy(M_).lerp(x_,i.dayT);const l=this.scene.fog;return a.uFogColor.value.copy(l.color),a.uFogNear.value=l.near,a.uFogFar.value=l.far,this.syncSkyLights(),i}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(nh),t.uLightPos.value[e].copy(nh);const n=this.torch.color;t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++;for(const i of this.dynLights){if(e>=Ei)break;t.uLightPos.value[e].copy(i.light.position);const r=i.light.color;t.uLightCol.value[e].set(r.r,r.g,r.b).multiplyScalar(i.light.intensity),t.uLightRange.value[e]=i.light.distance,e++}t.uNumLights.value=e}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let i=-this.renderDistance;i<=this.renderDistance;i++)for(let r=-this.renderDistance;r<=this.renderDistance;r++){const o=Nn(e+i,n+r);this.chunkMeshes.has(o)||t.markDirty(e+i,n+r)}}buildChunk(t,e){const[n,i]=e.split(",").map(Number),r=t.chunk(n,i),o=[],a=[],l=[],c=[],d=[],u=[],f=[],h=[],p=[],x=[],_=[],m=[],E=[],g=[],v=this.lightingMode==="sky"?this.skyLight.bake(t,n,i,(S,I)=>{const L=Nn(S,I);!t.dirty.has(L)&&!this.lightRecheck.has(L)&&this.lightRecheck.add(L)}):null,w=(S,I,L)=>v&&I>=0&&I<se?v[_s(S,L,I)]/Qa:0;for(let S=0;S<it;S++)for(let I=0;I<it;I++)for(let L=0;L<se;L++){const F=r[(S*it+I)*se+L];if(F===kt)continue;if(g_.has(F)){let Ot=0;if(v)for(const[Vt,q]of[[1,0],[-1,0],[0,1],[0,-1]])Ot=Math.max(Ot,v[_s(S+Vt,I+q,L)]);this.emitDoor(o,a,l,c,d,Ot/Qa,t,S,L,I,n*it,i*it,F);continue}const z=fi[F],B=z.emissive,W=z.transparent,$=W?x:B?u:o,V=W?_:B?f:a,J=W?m:B?h:l,st=W?E:B?p:c,pt=W?g:B?null:d,[Ht,ee]=el(F);for(const Ot of __){const Vt=S+Ot.dir[0],q=L+Ot.dir[1],j=I+Ot.dir[2];if(!a_(t,n*it+Vt,q,i*it+j,F))continue;const lt=$.length/3,At=B?1:Ot.shade,vt=pt?w(Vt,q,j):0;for(const qt of Ot.corners)$.push(S+qt[0],L+qt[1],I+qt[2]),V.push(At,At,At),pt&&pt.push(vt),st.push((Ht+.5+qt[Ot.uv[0]]*(dn-1))/Hr,(ee+.5+qt[Ot.uv[1]]*(dn-1))/Hr);J.push(lt,lt+1,lt+2,lt,lt+2,lt+3)}}const A=this.chunkMeshes.get(e);if(A)for(const S of A)this.group.remove(S),S.geometry.dispose();const R=[],U=this.lightingMode==="sky",b=(S,I,L,F,z,B)=>{if(S.length===0)return;const W=new Ze;W.setAttribute("position",new ge(S,3)),W.setAttribute("color",new ge(I,3)),W.setAttribute("uv",new ge(F,2)),z&&z.length*3===S.length&&W.setAttribute("light",new ge(z,1)),W.setIndex(L),W.computeVertexNormals();const $=new He(W,B);$.position.set(n*it,0,i*it),!U&&B!==this.matEmissive&&($.castShadow=B!==this.matTrans,$.receiveShadow=!0),this.group.add($),R.push($)};b(o,a,l,c,v?d:null,U?this.matSky:this.matOpaque),b(u,f,h,p,null,this.matEmissive),b(x,_,m,E,v?g:null,U?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,R)}emitDoor(t,e,n,i,r,o,a,l,c,d,u,f,h){const p=u+l,x=f+d,_=h===Ne||h===ke||h===$e,m=h===Ge||h===ke||h===Ue&&a.get(p,c-1,x)===Ue||h===$e&&a.get(p,c-1,x)===$e,E=el(m?_?ke:Ge:_?Ne:Ke),g=h===Ue||h===$e,w=!(qe(a.get(p-1,c,x))||qe(a.get(p+1,c,x)))&&(qe(a.get(p,c,x-1))||qe(a.get(p,c,x+1))),A=w?!qe(a.get(p-1,c,x)):!qe(a.get(p,c,x-1)),R=w?!qe(a.get(p+1,c,x)):!qe(a.get(p,c,x+1)),U=p+x&1;let b,S;U&&R?(b=1,S=1):!U&&A?(b=0,S=-1):R?(b=1,S=1):(b=0,S=-1);const I=a.doorSwing.get(p+","+x);I&&(S=I);const L=.04,F=.96,z=b?.84:.02,B=b?.98:.16,W=L,$=b?.98:.02,V=(pt,Ht,ee)=>{const Ot=t.length/3;for(let Vt=0;Vt<4;Vt++){let[q,j,lt]=pt[Vt];if(g){const At=q-W,vt=lt-$;q=W-S*vt,lt=$+S*At}t.push(w?l+lt:l+q,c+j,w?d+q:d+lt),e.push(ee,ee,ee),r.push(o),i.push((E[0]+.5+Ht[Vt][0]*(dn-1))/Hr,(E[1]+.5+Ht[Vt][1]*(dn-1))/Hr)}n.push(Ot,Ot+1,Ot+2,Ot,Ot+2,Ot+3)},J=pt=>(pt-L)/(F-L),st=pt=>(pt-z)/(B-z);V([[L,0,B],[F,0,B],[F,1,B],[L,1,B]],[[J(L),0],[J(F),0],[J(F),1],[J(L),1]],.85),V([[L,0,z],[F,0,z],[F,1,z],[L,1,z]],[[J(F),0],[J(L),0],[J(L),1],[J(F),1]],.7),V([[F,0,z],[F,0,B],[F,1,B],[F,1,z]],[[st(z),0],[st(B),0],[st(B),1],[st(z),1]],.6),V([[L,0,z],[L,0,B],[L,1,B],[L,1,z]],[[st(B),0],[st(z),0],[st(z),1],[st(B),1]],.6),V([[L,1,z],[F,1,z],[F,1,B],[L,1,B]],[[J(L),st(z)],[J(F),st(z)],[J(F),st(B)],[J(L),st(B)]],1),V([[L,0,z],[F,0,z],[F,0,B],[L,0,B]],[[J(L),st(B)],[J(F),st(B)],[J(F),st(z)],[J(L),st(z)]],.45)}addEntityMesh(t,e,n,i=.35){const r=new He(new Ii(i,i,i),new Fn({color:n}));return r.position.set(...e),r.userData.eid=t,this.entityGroup.add(r),r}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(i=>i.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,i,r=14){const o=this.nextEid++,a=new He(new gl(.14,.28,r,6,1,!0),new Vi({color:i,transparent:!0,opacity:.4,depthWrite:!1,side:De,fog:!1}));return a.position.set(t,e+r/2,n),a.userData.eid=o,this.entityGroup.add(a),o}addGroundRing(t,e,n,i,r=1.1){const o=this.nextEid++,a=new He(new _l(r*.55,r,24),new Vi({color:i,transparent:!0,opacity:.7,side:De,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(t,e+.06,n),a.userData.eid=o,this.entityGroup.add(a),o}render(){this.three.render(this.scene,this.camera)}}const Lt=s=>s,S_=(s,t)=>`${s.charAt(0).toUpperCase()+s.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,zn=(s,t,e,n)=>Lt({id:`${e}_${s}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${s}`,desc:S_(s,t),w:1,h:2,mass:1.2+t*.8,tool:{type:s,tier:t},color:n}),b_=[Lt({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:yn,color:"#d4b880"}),Lt({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:pi,color:"#c2a670"}),Lt({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:ui,color:"#736d69"}),Lt({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:rr,color:"#8d8680"}),Lt({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:$n,color:"#6b5238"}),Lt({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:Is,color:"#d9dbd6"}),Lt({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:or,color:"#61492f"}),Lt({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:co,color:"#a6cfe6"}),Lt({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:ar,color:"#8cc0a0"}),Lt({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:An,color:"#858a99"}),Lt({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:Ke,color:"#999fa8"}),Lt({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:Rn,color:"#fff0a0"}),Lt({id:"metal",name:"Metal Rod",desc:"Salvaged from the wreck. The backbone of every tool.",w:1,h:1,mass:1,block:ho,color:"#9aa0aa"}),Lt({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:cn,color:"#66e5f0"}),Lt({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:hn,color:"#806647"}),Lt({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:vn,color:"#e67333"}),Lt({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:mi,color:"#59bfcc"}),Lt({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:lr,color:"#b3956b"}),Lt({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:ze,color:"#8a6d3b"}),Lt({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),Lt({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),Lt({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),Lt({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:Zi,color:"#c468e8"}),Lt({id:"ironrod",name:"Iron Rod",desc:"Iron baked out of desert Rock at a Campfire. Two rods forge one Metal Rod at a Crafting Bench — tools without touching the wreck.",w:1,h:1,mass:1,color:"#b0683f"}),Lt({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),zn("pickaxe",1,"wood","#a8834f"),zn("pickaxe",2,"stone","#8d8680"),zn("pickaxe",3,"metal","#9aa0aa"),zn("shovel",1,"wood","#a8834f"),zn("shovel",2,"stone","#8d8680"),zn("shovel",3,"metal","#9aa0aa"),zn("axe",1,"wood","#a8834f"),zn("axe",2,"stone","#8d8680"),zn("axe",3,"metal","#9aa0aa"),zn("disassembler",1,"metal","#c0c8d8"),Lt({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),Lt({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",color:"#7a5a3a"}),Lt({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:In,color:"#3d8042"}),Lt({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),Lt({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),Lt({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",color:"#8a6f4d"}),Lt({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),Lt({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),Lt({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:ai,color:"#573d23"}),Lt({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:Ln,color:"#c8b060"}),Lt({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:di,color:"#d8c878"}),Lt({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),Lt({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),Lt({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),Lt({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:li,color:"#7a5c3a"}),Lt({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),Lt({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Tn,color:"#7fae54"}),Lt({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),Lt({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),Lt({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:cr,color:"#8a744a"}),Lt({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:Cn,color:"#9aa0ac"}),Lt({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:Ne,color:"#82868e"}),Lt({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:Un,color:"#a84a42"})],zt=Object.fromEntries(b_.map(s=>[s.id,s])),On={};for(const s of Object.values(zt))s.block!==void 0&&(On[s.block]=s.id);On[Ge]="door";On[ke]="door_inner";On[Xn]="bed";On[Li]="dirt";On[Jn]="kindling";On[Ln]="seed_melon";On[Pn]="dune_melon";On[di]="seed_wheat";On[Dn]="wheat";On[Ri]="cactus";function ln(s){const t=zt[s.itemId];return s.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class ea{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const i=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const r of i)this.addItem(r.itemId,r.count)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=zt[e.itemId].mass*e.count;return t}occupied(t,e,n){for(const i of this.slots){if(i===n)continue;const r=ln(i);if(t>=i.x&&t<i.x+r.w&&e>=i.y&&e<i.y+r.h)return i}return null}fits(t,e,n,i,r){if(t<0||e<0||t+n>this.w||e+i>this.h)return!1;for(let o=0;o<i;o++)for(let a=0;a<n;a++)if(this.occupied(t+a,e+o,r))return!1;return!0}move(t,e,n){const i=ln(t);return e===t.x&&n===t.y?!0:this.fits(e,n,i.w,i.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=ln(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addItem(t,e=1){const n=zt[t],i=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let r=0;r<e;r++){let o=!1;for(const[a,l,c]of i){for(let d=0;d<=this.h-l&&!o;d++)for(let u=0;u<=this.w-a&&!o;u++){let f=!0;for(let h=0;h<l&&f;h++)for(let p=0;p<a&&f;p++)this.occupied(u+p,d+h)&&(f=!1);f&&(this.slots.push(c?{itemId:t,count:1,x:u,y:d,rot:!0}:{itemId:t,count:1,x:u,y:d}),o=!0)}if(o)break}if(!o)return e-r}return 0}removeItem(t,e=1){let n=0;for(let i=this.slots.length-1;i>=0&&n<e;i--){const r=this.slots[i];if(r.itemId!==t)continue;const o=Math.min(r.count,e-n);r.count-=o,n+=o,r.count===0&&this.slots.splice(i,1)}return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&(e+=n.count);return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const Bs={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]}},E_=new Ii(1,1,1);function w_(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Jh(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");s(e,w_(5370855));const n=new Fh(t);return n.magFilter=n.minFilter=fn,n.generateMipmaps=!1,n.colorSpace=tn,n}function T_(){return Jh((s,t)=>{s.fillStyle="#c8a76d",s.fillRect(0,0,64,64);for(let n=0;n<420;n++){const i=.5+(t()-.5)*.22;s.fillStyle=i>.5?"#d4b781":"#b89359",s.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let i=0;i<9;i++){const r=5-Math.abs(i-4);s.fillStyle="#6f5230",s.fillRect(32-r,n+i,r*2,1),s.fillStyle="#8a6a3f",s.fillRect(32-r+1,n+i,Math.max(1,r*2-2),1)}s.fillStyle="#a9884f",s.fillRect(10+(t()*4|0),n+3,3,2),s.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)s.fillStyle=n>=56?"#e9dab1":"#d8c494",s.fillRect(0,n,64,1);for(let n=0;n<40;n++)s.fillStyle="#ddcba0",s.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function A_(){return Jh((s,t)=>{s.fillStyle="#c9a878",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#ddc295":"#a9854f",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)s.fillStyle="#8a6a3c",s.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)s.fillStyle=e>=54?"#f2ead9":"#e2d4ba",s.fillRect(0,e,64,1);s.fillStyle="#efe6d2",s.beginPath(),s.arc(10,12,8,0,Math.PI*2),s.fill(),s.fillStyle="#6b4e2c",s.fillRect(8,10,4,4)})}let na=null,ia=null;function R_(){return na||(na={body:new Fn({map:T_()}),ridge:new Fn({color:7295536}),eye:new Fn({color:1445898})}),na}function C_(){return ia||(ia={fur:new Fn({map:A_()}),pale:new Fn({color:15260868}),dark:new Fn({color:6045731}),pink:new Fn({color:14196896})}),ia}function Se(s,t,e,n,i,r,o){const a=new He(E_,n);return a.scale.set(s,t,e),a.position.set(i,r,o),a}function I_(){const s=R_(),t=new Mn,e=[],n=[],i=[.36,.13,-.1,-.33,-.54,-.72],r=[.26,.27,.26,.23,.18,.12],o=[.22,.23,.22,.2,.16,.11],a=.24;for(let u=0;u<i.length;u++){const f=Math.sin(u*.8)*.05,h=Se(r[u],o[u],a,s.body,f,o[u]/2+.005,i[u]);e.push({mesh:h,bx:f,w:r[u],h:o[u],d:a}),n.push({mesh:Se(r[u]*.3,.02,a*.92,s.ridge,f,o[u]+.008,i[u]),w:r[u]}),t.add(h,n[u].mesh)}const l=new Mn;l.position.set(Math.sin(0)*.05,.095+.005,.6);const c=Se(.27,.19,.27,s.body,0,.095,0);return l.add(c),l.add(Se(.035,.035,.03,s.eye,-.115,.14,.11)),l.add(Se(.035,.035,.03,s.eye,.115,.14,.11)),t.add(l),{group:t,animate:(u,f)=>{const h=Math.max(0,Math.min(1,f)),p=.015+.075*h,x=u*(3.2+2.6*h);for(let _=0;_<e.length;_++){const m=e[_],E=Math.sin(x-_*.85)*p;m.mesh.position.x=m.bx+E,m.mesh.rotation.y=-E*1.4;const g=1+Math.sin(u*1.9)*.03*(1-h*.6);m.mesh.scale.set(m.w*g,m.h,m.d);const v=n[_];v.mesh.position.x=m.mesh.position.x,v.mesh.rotation.y=m.mesh.rotation.y,v.mesh.scale.x=v.w*.3*g}l.position.x=Math.sin(x+.85)*p*.5,l.rotation.y=Math.sin(u*(2.2+2.4*h))*(.06+.14*h)}}}function L_(){const s=C_(),t=new Mn,e=new Mn;t.add(e);const n=Se(.22,.26,.34,s.fur,0,.26,-.02);e.add(n);const i=new Mn;i.position.set(0,.31,.19),i.add(Se(.15,.14,.15,s.fur,0,0,.05)),i.add(Se(.045,.035,.04,s.pink,0,-.02,.13)),i.add(Se(.028,.028,.02,s.dark,-.062,.03,.1)),i.add(Se(.028,.028,.02,s.dark,.062,.03,.1)),e.add(i);const r=Se(.05,.12,.025,s.fur,-.075,.41,.16),o=Se(.05,.12,.025,s.fur,.075,.41,.16);r.rotation.z=.15,o.rotation.z=-.15,e.add(r,o);const a=Se(.09,.14,.11,s.fur,-.12,.14,-.06),l=Se(.09,.14,.11,s.fur,.12,.14,-.06),c=Se(.07,.05,.22,s.pale,-.13,.028,.02),d=Se(.07,.05,.22,s.pale,.13,.028,.02);e.add(a,l,c,d),e.add(Se(.035,.035,.07,s.pale,-.08,.11,.15)),e.add(Se(.035,.035,.07,s.pale,.08,.11,.15));const u=new Mn;return u.position.set(0,.16,-.19),u.add(Se(.04,.04,.24,s.fur,0,0,-.12)),u.add(Se(.032,.032,.22,s.fur,0,-.045,-.34)),u.add(Se(.07,.055,.11,s.dark,0,-.075,-.5)),e.add(u),{group:t,animate:(h,p)=>{const x=Math.max(0,Math.min(1,p)),_=Math.abs(Math.sin(h*(2.6+2.4*x)));e.position.y=_*.13*x+Math.sin(h*1.7)*.004,n.scale.y=.26*(1+Math.sin(h*1.9)*.03*(1-x)),c.rotation.x=d.rotation.x=-.55*_*x,a.rotation.x=l.rotation.x=-.35*_*x,u.rotation.y=Math.sin(h*(1.8+3.4*x))*(.1+.3*x),u.rotation.x=-.12-.18*x+Math.sin(h*(2.6+2.4*x))*.06*x;const m=Math.max(0,Math.sin(h*6.3))**8*(1-x);r.rotation.z=.15+m*.25,o.rotation.z=-.15-Math.max(0,Math.sin(h*6.3+2.1))**8*(1-x)*.25,i.rotation.x=-.1*_*x+Math.sin(h*1.3)*.03*(1-x)}}}function P_(s){return s==="snake"?I_():L_()}const Qh=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"sword",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0},{out:"metal",count:1,needs:{ironrod:2},bench:!0},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},bench:!0},{out:"reptile_armor",count:1,needs:{snake_skin:3},bench:!0},{out:"farmland",count:1,needs:{dirt:1},bench:!1},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},bench:!1},{out:"metal_plating",count:1,needs:{metal:1},bench:!1},{out:"door_inner",count:1,needs:{metal:1,deadwood:1},bench:!0},{out:"bucket",count:1,needs:{metal:2},bench:!0},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},bench:!0}],tu=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"ironrod"},{in:"rat_raw",out:"rat_cooked"},{in:"wheat",out:"cooked_wheat"}];function eu(s,t){return Object.entries(t.needs).every(([e,n])=>s.has(e,n))}function D_(s,t){if(!eu(s,t))return null;for(const[e,n]of Object.entries(t.needs))s.removeItem(e,n);return s.addItem(t.out,t.count)}const Qs=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it within reach of a Save Beacon.",goal:1}];function U_(){return{i:0,p:Qs.map(()=>0)}}function N_(s){const t=U_();if(!s)return t;t.i=Math.max(0,Math.min(Qs.length,s.i|0));for(let e=0;e<t.p.length;e++){const n=Qs[e].goal;t.p[e]=Math.max(0,Math.min(n,(s.p&&s.p[e])|0))}return t}function Xs(s){return s.i<Qs.length?Qs[s.i]:null}function k_(s,t,e=1){const n=Xs(s);if(!n||n.kind!==t||s.p[s.i]>=n.goal||(s.p[s.i]=Math.min(n.goal,s.p[s.i]+e),s.p[s.i]<n.goal))return null;const i=n;return s.i++,i}const F_=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],zs=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:s=>s.setClock(.56),poll:s=>s.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:s=>{s.inv.has("canister_empty")||s.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:s=>s.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:s=>s.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. Plant seeds in the tilled soil. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",goal:"plant",hold:40,enter:s=>{s.giveOrDrop("seed_wheat",2),s.selectHeld("shovel");const t=s.player.pos,e=Math.floor(t.x),n=Math.floor(t.z);for(let i=Math.floor(t.y)-1;i>20;i--){const r=s.world.get(e,i,n);if(r===yn||r===pi){s.world.set(e,i,n,$n),s.tutGuide={name:"Dirt",x:e,y:i,z:n};break}}}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class O_{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&zs[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=zs[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===Ue&&(t.set(-6,31,0,Ke),t.set(-6,32,0,Ge),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=zs.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=zs[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=zs.map((n,i)=>i===this.step?"●":i<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const nu="sotf:index",iu="sotf:settings",su="sotf:best",ih={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function B_(){try{return{...ih,...JSON.parse(localStorage.getItem(iu)||"{}")}}catch{return{...ih}}}function z_(s){localStorage.setItem(iu,JSON.stringify(s))}function tr(){return Number(localStorage.getItem(su)||0)}function sh(s){s>tr()&&localStorage.setItem(su,String(s))}function mo(){try{return JSON.parse(localStorage.getItem(nu)||"[]")}catch{return[]}}function Il(s){localStorage.setItem(nu,JSON.stringify(s))}function ru(s,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:s||t||"world",seedStr:t,updated:Date.now()},i=mo();return i.unshift(n),Il(i),n}function H_(s){Il(mo().filter(t=>t.id!==s)),localStorage.removeItem("sotf:w:"+s)}function ou(s,t){try{localStorage.setItem("sotf:w:"+s.id,JSON.stringify(t));const e=mo(),n=e.find(i=>i.id===s.id);return n&&(n.updated=Date.now(),Il(e)),!0}catch{return!1}}function au(s){try{const t=localStorage.getItem("sotf:w:"+s);return t?JSON.parse(t):null}catch{return null}}function lu(s,t){const e=new Blob([JSON.stringify({meta:s,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${s.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function G_(s){const t=JSON.parse(await s.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=ru(t.meta?.name??"imported",t.run.seedStr);return ou(e,t.run),e}const jt=dn;function $i(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}const wn=(s,t,e,n)=>{const[i,r]=el(n);s.drawImage(jh(),i,r,jt,jt,t,e,jt,jt)},yt=(s,t,e,n,i,r)=>{s.fillStyle=r,s.fillRect(t,e,n,i)},Si=(s,t,e,n,i,r)=>{s.strokeStyle=r,s.lineWidth=1,s.strokeRect(t+.5,e+.5,n-1,i-1)},Qe=(s,t,e,n,i,r,o=2)=>{s.strokeStyle=r,s.lineWidth=o,s.beginPath(),s.moveTo(t,e),s.lineTo(n,i),s.stroke()};function cu(s,t,e,n){const[i,r]=$i(t*jt,e*jt);if(s.includes("_")&&(s.endsWith("pickaxe")||s.endsWith("shovel")||s.endsWith("axe")||s.endsWith("disassembler"))){const a=s.replace(/^(wood|stone|metal)_/,"");return yt(r,7,16,2,14,"#6b5238"),yt(r,6,14,4,3,"#4a4a52"),a==="pickaxe"?(Qe(r,3,12,13,12,n,2),Qe(r,3,12,3,15,n),Qe(r,13,12,13,15,n),Qe(r,4,9,12,9,"#00000022",1)):a==="shovel"?(yt(r,5,6,6,7,n),Si(r,5,6,6,7,"#00000044"),Qe(r,6,13,6,13,n),Qe(r,9,13,9,13,n),Qe(r,6,13,7,14,n,1),Qe(r,9,13,8,14,n,1)):a==="axe"?(yt(r,9,7,5,6,n),Si(r,9,7,5,6,"#00000044"),yt(r,8,8,1,4,n)):(yt(r,4,7,8,2,n),yt(r,4,7,2,5,n),yt(r,10,7,2,5,n),yt(r,7,11,2,2,"#66e5f0"),yt(r,6,12,4,1,"#2f97a6")),i}switch(s){case"canister_full":case"canister_empty":{const a=s==="canister_full",l=e*jt;return yt(r,6,0,4,3,"#8a98a8"),yt(r,7,3,2,2,"#8a98a8"),yt(r,4,5,8,l-7,a?"#2f7fd6":"#3a4750"),Si(r,4,5,8,l-7,"#dfe6ee"),a?(yt(r,5,10,1,l-13,"#5fa3ea"),yt(r,4,9,8,1,"#7f2b2b")):(yt(r,4,14,8,4,"#c8d2da"),yt(r,6,15,4,2,"#3a4750")),i}case"sword":return yt(r,8,0,1,1,"#eef3f8"),yt(r,7,1,3,17,"#c9d2dc"),yt(r,8,1,1,17,"#eef3f8"),yt(r,4,18,8,2,"#4a4a52"),yt(r,7,20,3,9,"#6b5238"),yt(r,7,22,3,1,"#4a3926"),yt(r,7,25,3,1,"#4a3926"),yt(r,6,29,5,2,"#4a4a52"),i;case"ironrod":yt(r,6,1,3,14,"#8a4f2e"),yt(r,7,2,1,12,"#d08a52"),r.fillStyle="#5c3319";for(const[a,l]of[[6,3],[8,7],[6,11],[8,13]])r.fillRect(a,l,1,1);return yt(r,5,1,5,1,"#5c3319"),yt(r,5,14,5,1,"#5c3319"),i;case"visor":return yt(r,1,6,14,3,"#2e3a45"),yt(r,3,4,10,6,"#123c44"),yt(r,4,5,8,4,"#66e5f0"),yt(r,5,5,2,1,"#d2f8ff"),Si(r,3,4,10,6,"#c8d2da"),yt(r,1,5,2,1,"#5a6875"),yt(r,13,5,2,1,"#5a6875"),i;case"catalyst":return yt(r,7,3,2,2,"#8898a8"),r.fillStyle="#c07fe0",r.beginPath(),r.arc(8,10,4,0,Math.PI*2),r.fill(),r.strokeStyle="#7a4a9a",r.lineWidth=1,r.beginPath(),r.arc(8,10,4.5,0,Math.PI*2),r.stroke(),r.fillStyle="#e8b8ff",r.fillRect(6,8,2,1),r.fillRect(7,7,1,1),i;case"backpack1":return yt(r,8,1,3,6,"#5a4229"),yt(r,21,1,3,6,"#5a4229"),yt(r,5,7,22,21,"#7a5a3a"),Si(r,5,7,22,21,"#4c3822"),yt(r,5,7,22,8,"#8a6a48"),Si(r,5,7,22,8,"#4c3822"),yt(r,13,13,6,3,"#d8b74f"),yt(r,9,20,14,6,"#6b4d30"),Si(r,9,20,14,6,"#4c3822"),i;case"beacon":return r.fillStyle="#66e5f0",r.globalAlpha=.35,r.beginPath(),r.arc(8,5,6,0,Math.PI*2),r.fill(),r.globalAlpha=1,r.fillStyle="#66e5f0",r.beginPath(),r.arc(8,5,3,0,Math.PI*2),r.fill(),yt(r,6,5,1,1,"#d2f8ff"),yt(r,7,8,2,8,"#8a98a8"),wn(r,0,jt,cn),i;case"campfire":return Qe(r,3,10,12,4,"#61492f",2),Qe(r,4,4,13,10,"#61492f",2),Qe(r,3,10,12,4,"#7d5f3d",1),wn(r,0,jt,vn),i;case"door":return wn(r,0,0,Ge),wn(r,0,jt,Ke),i;case"bed":return wn(r,0,0,Un),wn(r,jt,0,Xn),i;case"dune_melon":r.fillStyle="#5f7f2c",r.beginPath(),r.ellipse(16,11,12,8,0,0,Math.PI*2),r.fill(),r.strokeStyle="#3c541c",r.lineWidth=2,r.beginPath(),r.ellipse(16,11,12,8,0,0,Math.PI*2),r.stroke(),r.strokeStyle="#88a84c",r.lineWidth=1;for(const a of[-7,0,7])r.beginPath(),r.moveTo(16+a,3),r.lineTo(16+a,19),r.stroke();return yt(r,15,1,2,3,"#6b5238"),i;case"wheat":{r.strokeStyle="#c8a844",r.lineWidth=2;for(const a of[4,8,12])r.beginPath(),r.moveTo(a,15),r.lineTo(a,3),r.stroke();r.fillStyle="#e0c860";for(const a of[4,8,12])for(let l=2;l<9;l+=2)r.fillRect(a-2,l,4,2);return r.strokeStyle="#7a5a30",r.lineWidth=1,r.beginPath(),r.moveTo(2,12),r.lineTo(14,12),r.stroke(),i}case"cooked_wheat":return r.fillStyle="#a8712e",r.beginPath(),r.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),r.fill(),r.strokeStyle="#74501f",r.lineWidth=1,r.beginPath(),r.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),r.stroke(),r.fillStyle="#d8a860",r.fillRect(5,8,6,1),r.fillRect(6,7,4,1),i;case"bucket":case"bucket_full":{const a=s==="bucket_full";return yt(r,4,6,8,9,a?"#2f7fd6":n),Si(r,4,6,8,9,"#dfe6ee"),yt(r,3,5,10,2,"#c8d2da"),yt(r,5,2,1,3,"#8a98a8"),yt(r,10,2,1,3,"#8a98a8"),Qe(r,5,3,11,3,"#8a98a8",1),a&&yt(r,5,7,6,1,"#5fa3ea"),i}case"kindling":return Qe(r,3,21,12,4,"#6b5238",2),Qe(r,6,22,14,8,"#5a4630",2),yt(r,11,3,3,3,"#9a8a5a"),yt(r,4,8,3,3,"#9a8a5a"),yt(r,13,9,3,2,"#8a9a4a"),i;case"seed_tree":return yt(r,7,14,6,6,"#8a6a3a"),yt(r,7,13,6,2,"#5a4630"),yt(r,9,9,2,4,"#5a8a3a"),yt(r,6,7,3,2,"#7fae54"),yt(r,11,8,3,2,"#7fae54"),i;case"bench":return wn(r,0,0,hn),wn(r,0,jt,Gn),i}return null}const Gr=new Map;function Zr(s){const t=Gr.get(s);if(t)return t;const e=zt[s];if(!e)return Gr.set(s,[]),Gr.get(s);let i=cu(s,e.w,e.h,e.color);if(!i&&e.block!==void 0){const[o,a]=$i(e.w*jt,e.h*jt);for(let l=0;l<e.h;l++)for(let c=0;c<e.w;c++)wn(a,c*jt,l*jt,e.block);i=o}const r=[];if(i){const[o,a]=$i(jt,jt);for(let l=0;l<e.h;l++)for(let c=0;c<e.w;c++)a.clearRect(0,0,jt,jt),a.drawImage(i,c*jt,l*jt,jt,jt,0,0,jt,jt),r.push(o.toDataURL())}else{const[o,a]=$i(jt,jt);yt(a,2,2,jt-4,jt-4,e.color),r.push(o.toDataURL())}return Gr.set(s,r),r}function ci(s,t=0){const e=zt[s];if(!e)return"";if(e.w===1&&e.h===1)return Zr(s)[0]??"";const[n,i]=$i(e.w*jt,e.h*jt);i.imageSmoothingEnabled=!1;const r=cu(s,e.w,e.h,e.color);if(r)i.drawImage(r,0,0);else if(e.block!==void 0)for(let l=0;l<e.h;l++)for(let c=0;c<e.w;c++)wn(i,c*jt,l*jt,e.block);if(!t)return n.toDataURL();const[o,a]=$i(e.h*jt,e.w*jt);return a.imageSmoothingEnabled=!1,a.translate(e.h*jt,0),a.rotate(Math.PI/2),a.drawImage(n,0,0),o.toDataURL()}function V_(s){const[t,e]=$i(jt,jt);return wn(e,0,0,s),t.toDataURL()}const Ee=s=>document.getElementById(s);let rh=0;function dt(s){const t=Ee("toast");t.textContent=s,t.style.opacity="1",clearTimeout(rh),rh=setTimeout(()=>t.style.opacity="0",2600)}function W_(s){const t=Ee("prompt");if(!s){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=s}function X_(s){Ee("vision-water").style.opacity=s?"1":"0"}function q_(s){const t=Ee("blockname");if(!s){t.classList.add("hidden");return}t.textContent=s,t.classList.remove("hidden")}function Y_(){const s=Ee("vision-hit");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash")}let oh="";function $_(s){const t=s.selectedSlot()?.itemId??"",e=s.slots.map(r=>r.itemId+":"+r.count).join(",")+"|"+t;if(e===oh)return;oh=e;const n=[];for(const r of s.slots){const o=n.find(a=>a.itemId===r.itemId);o?o.count+=r.count:n.push({itemId:r.itemId,count:r.count})}const i=Ee("hotbar");i.innerHTML="",n.slice(0,9).forEach((r,o)=>{const a=document.createElement("div");a.className="hb-slot"+(r.itemId===t?" sel":""),a.dataset.hb=String(o);const l=document.createElement("img");l.src=ci(r.itemId),l.alt=zt[r.itemId].name,a.appendChild(l);const c=document.createElement("span");if(c.className="hb-key",c.textContent=String(o+1),a.appendChild(c),r.count>1){const d=document.createElement("span");d.className="hb-count",d.textContent=String(r.count),a.appendChild(d)}i.appendChild(a)})}function K_(){const s=document.querySelector("#bar-water .safe");s.style.left="25%",s.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((Rl-Xi)/(Vs-Xi)*100).toFixed(1)+"%",t.style.right=((Vs-Cl)/(Vs-Xi)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(i,r,o)=>{const a=document.createElement("span");a.className="dmg",a.style.left=r.toFixed(1)+"%",a.title=o,document.getElementById(i).appendChild(a)};e("bar-water",Ja,"below this, dehydration drains Health");const n=i=>(i-Xi)/(Vs-Xi)*100;e("bar-heat",n(Za),"below this, hypothermia drains Health"),e("bar-heat",n(ja),"above this, heat stroke drains Health")}function ah(s,t=0,e=0,n=0,i=0,r=0){const o=document.getElementById("waypoint");if(!s){o.classList.add("hidden");return}const a=t-n,l=e-i,c=Math.atan2(a,-l)+r;Ee("wp-arrow").style.transform=`rotate(${c*180/Math.PI}deg)`,Ee("wp-name").textContent=s,Ee("wp-dist").textContent=`${Math.round(Math.hypot(a,l))} m`,o.classList.remove("hidden")}function lh(s,t,e,n,i,r,o){const a=E=>document.querySelector(`#${E} .fill`);a("bar-health").style.width=s.health+"%",a("bar-water").style.width=s.water+"%";const l=(s.body-Xi)/(Vs-Xi)*100;a("bar-heat").style.width=l+"%";const c=e%Pe/Pe,d=String(Math.floor(c*24)).padStart(2,"0"),u=String(Math.floor(c*24%1*60)).padStart(2,"0");Ee("clock-day").textContent="Day "+n,Ee("clock-time").textContent=d+":"+u;const f=E=>i==="C"?Math.round(E)+"°C":Math.round(E*9/5+32)+"°F";Ee("clock-temp").textContent=`air ${f(s.lastAmbientEff)}  body ${f(s.body)}`;const h=t.selectedSlot();Ee("held").textContent=h?zt[h.itemId].name:"—",$_(t),Ee("warn-hot").classList.toggle("hidden",s.body<=Cl),Ee("warn-cold").classList.toggle("hidden",s.body>=Rl),Ee("chip-reg").classList.toggle("hidden",!o?.regulated),Ee("chip-nap").classList.toggle("hidden",!o?.napReady);const p=t.weight(),x=t.weightLimit(),_=Ee("weight");_.textContent=`${p.toFixed(1)} / ${x} kg`,_.classList.toggle("encumbered",p>x),Ee("vision-vignette").style.opacity=String(s.vision*.85);const m=s.water<5||s.health<30;Ee("vision-red").style.opacity=m?String(.35+.25*Math.sin(r/220)):"0"}const Vr=s=>s===Ke||s===Ge||s===Ne||s===ke;class de{constructor(t,e,n,i,r){this.meta=t,this.settings=i,this.audio=r,this.seed=Yg(t.seedStr||t.id),this.world=new r_(this.seed),this.survival=new d_(this.seed^7),this.quests=N_(e?.quest),this.renderer=new y_(n),this.player=new c_(this.world),this.timeSec=e?.time??Pe*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===Rn&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===Rn&&this.renderer.addPointLight(6,35,0,"lamp"),K_(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(i)}seed;world;survival;player;inv=new ea;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null};collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(Te(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",count:1,buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===kt&&(this.world.set(t,e,n,ze),this.chests.set(de.chestKey([[t,e,n]]),[{itemId:"canister_full",count:1,x:0,y:0},{itemId:"canister_full",count:1,x:1,y:0},{itemId:"canister_full",count:1,x:2,y:0}]))}chestCluster(t,e,n){const i=new Set([`${t},${e},${n}`]),r=[[t,e,n]],o=[];for(;r.length;){const a=r.pop();this.world.get(a[0],a[1],a[2])===ze&&o.push(a);for(const[l,c,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=a[0]+l,f=a[1]+c,h=a[2]+d,p=`${u},${f},${h}`,x=this.world.get(u,f,h);i.has(p)||x!==ze&&x!==cr||(i.add(p),r.push([u,f,h]))}}return o}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=zt[e.itemId],i=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const r of i){const o=r?n.h:n.w,a=r?n.w:n.h;for(let l=0;l+a<=t.h;l++)for(let c=0;c+o<=t.w;c++)if(t.fits(c,l,o,a))return e.x=c,e.y=l,e.rot=r||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new ea;e.slots=[];const[n,i]=de.chestDims(t);return e.w=n,e.h=i,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,i=Math.floor(t/we),r=Math.floor(e/we);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){if(!n.townAt(i+o,r+a))continue;const l=n.townCenter(i+o,r+a);if(Math.abs(l.x-t)<=10&&Math.abs(l.z-e)<=10)return!0}return!1}townLoot(t,e){const n=r=>Qt(t,e,this.seed+r),i=[{itemId:"canister_empty",count:2}];return n(11)<.7&&i.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&i.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&i.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&i.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&i.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&i.push({itemId:"door_inner",count:1}),n(22)<.25&&i.push({itemId:"bed",count:1}),n(23)<.5&&i.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),i}openChest(t,e,n){const i=this.chestCluster(t,e,n),r=de.chestKey(i),o=this.chests.has(r);this.chests.has(r)||this.chests.set(r,[]);const a=this.emptyChestGrid(i.length);if(a.slots=this.chests.get(r),!o&&i.some(([l,,c])=>this.inTown(l,c))){for(const l of this.townLoot(i[0][0],i[0][2])){const c={itemId:l.itemId,count:l.count,x:0,y:0};de.placeSlotFree(a,c)||this.dropEntity(l.itemId,l.count,2)}dt("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=a,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,i){const r=this.chestCluster(t,e,n),o=this.emptyChestGrid(r.length);for(const a of i)de.placeSlotFree(o,a)||this.dropEntity(a.itemId,a.count,2);o.slots.length&&this.chests.set(de.chestKey(r),o.slots),r.length>1&&dt(`Chests linked — one ${o.w}×${o.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==ze){if(qe(this.world.get(t.x,t.y,t.z))){for(const r of t.items)this.dropEntity(r.itemId,r.count,2);return}this.world.set(t.x,t.y,t.z,ze)}const e=this.chestCluster(t.x,t.y,t.z),n=de.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const i=this.emptyChestGrid(e.length);i.slots=this.chests.get(n);for(const r of t.items)for(let o=0;o<r.count;o++){const a={itemId:r.itemId,count:1,x:0,y:0};de.placeSlotFree(i,a)||this.dropEntity(r.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body,this.inv.slots=t.inventory.slots.map(a=>({...a}));const e=this.inv.slots.filter(a=>a.count>1);if(e.length){this.inv.slots=this.inv.slots.filter(a=>a.count===1);for(const a of e)this.giveOrDrop(a.itemId,a.count)}this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const a of["backpack","head","body"]){const l=t.equip?.[a];l&&(this.equip[a]={itemId:l,count:1,x:0,y:0})}this.beaconMarks=t.beaconMarks??[],this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let i=0;const r=[];this.world.gen.canisters.forEach(a=>{if(a.buried&&!n.has(i)){const l=Math.round(Te(this.seed,a.x,a.z));r.push({id:this.entitySeq++,x:a.x+.5,y:l,z:a.z+.5,itemId:"canister_full",count:1,buried:a.buried,buriedAt:a.buried?[a.x,l,a.z]:void 0,srcIndex:i})}i++});for(const a of t.entities)r.push({id:this.entitySeq++,...a});this.entities=r;const o=[];for(const a of t.caches){const l=a.kind??"death";if(l==="chest"){o.push(a);continue}const c={id:this.entitySeq++,x:a.x,y:a.y,z:a.z,kind:l,items:a.items.map(d=>({...d}))};this.caches.push(c),c.items.length&&this.renderer.addEntityMesh(c.id,this.cacheMeshPos(c),this.cacheColor(c),.7)}this.campCharges=new Map(Object.entries(t.campfires??{}).map(([a,l])=>[a,l])),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep),this.chests=new Map((t.chests??[]).map(a=>[a.cells,a.slots.map(l=>({...l}))]));for(const a of o)this.adoptLegacyChest(a);this.pods=(t.pods??[]).map(a=>({...a,ringEid:this.renderer.addGroundRing(a.x+.5,Math.round(Te(this.seed,a.x,a.z)),a.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(a.x+.5,Math.round(Te(this.seed,a.x,a.z)),a.z+.5,13382434)})),this.won=!!t.won;for(const[a,l]of this.world.deltas){const[c,d]=a.split(",").map(Number);for(const[u,f]of l){if(f!==Rn&&f!==vn)continue;const h=Math.floor(u/(it*se)),p=u%(it*se);this.renderer.addPointLight(c*it+h,p%se,d*it+Math.floor(p/se),f===Rn?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,count:t.count})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/Pe);this.timeSec=(e+t)*Pe}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new O_(this),this.startCine(F_,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),dt("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,i=n.find(l=>e.t<l.t1)??n[n.length-1];if(i.openDoor&&e.t>=i.openDoor.t){const{x:l,y:c,z:d}=i.openDoor;if(this.world.get(l,c,d)!==Ue){this.world.set(l,c,d,Ue);for(const u of[-1,1])Vr(this.world.get(l,c+u,d))&&this.world.set(l,c+u,d,Ue);this.audio.door()}}const r=Math.min(1,Math.max(0,(e.t-i.t0)/(i.t1-i.t0))),o=r*r*(3-2*r),a=this.renderer.camera;if(a.position.set(i.from[0]+(i.to[0]-i.from[0])*o,i.from[1]+(i.to[1]-i.from[1])*o,i.from[2]+(i.to[2]-i.from[2])*o),a.lookAt(i.look[0],i.look[1],i.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const l=n[n.length-1];this.player.yaw=Math.atan2(-(l.look[0]-l.to[0]),-(l.look[2]-l.to[2])),this.player.pitch=0;const c=this.renderer.camera;c.position.copy(this.player.eye()),c.rotation.order="YXZ",c.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&dt("Guest worlds are never saved."),!1;const e=ou(this.meta,this.snapshot());return t&&dt(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){lu(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/Pe)}questBump(t,e=1){if(this.tut)return;const n=k_(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}dt(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&this.win(),this.renderQuest(),this.saveNow(!0)}crashPod(t,e){const n=this.player.pos,i=Math.round(n.x)+2,r=Math.round(n.z)+1,o=Math.round(Te(this.seed,i,r)),a=this.renderer.addGroundRing(i+.5,o,r+.5,13382434,1.1),l=this.renderer.addBeam(i+.5,o,r+.5,13382434);this.pods.push({x:i,z:r,t:3,itemId:t,n:e,ringEid:a,beamEid:l}),this.audio.warn(),setTimeout(()=>{this.running&&dt("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const i=Math.round(Te(this.seed,n.x,n.z));this.caches.push({id:this.entitySeq++,x:n.x,y:i,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,i+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),dt("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){ah(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const r=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;r!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=r,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else ah(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const i=new Map;if(this.equip.head?.itemId==="visor"){for(const r of this.caches)r.items.length&&i.set(`c${r.id}`,[r.x+.5,r.y,r.z+.5,r.kind==="reward"?14197322:13386803]);for(const r of this.chests.keys()){const[o,a,l]=r.split(";")[0].split(",").map(Number);i.set(`x${r}`,[o+.5,a,l+.5,15124842])}}for(const[r,o]of this.visorBeams)i.has(r)||(this.renderer.removeEntityMesh(o),this.visorBeams.delete(r));for(const[r,[o,a,l,c]]of i)this.visorBeams.has(r)||this.visorBeams.set(r,this.renderer.addBeam(o,a,l,c,10))}waypointTarget(){const t=Xs(this.quests);if(!t)return null;const e=this.player.pos,n=(r,o)=>Math.round(Te(this.seed,r,o))+1,i=r=>{let o=r[0],a=1/0;for(const l of r){const c=(l.x-e.x)**2+(l.z-e.z)**2;c<a&&(a=c,o=l)}return o};switch(t.kind){case"oasis":{const r=i(this.world.gen.oases);return r?{name:"Oasis",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}:null}case"water_home":case"finish":{const r=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(o=>this.world.get(o.x,o.y,o.z)===cn);return r?{name:"Save Beacon",x:r.x+.5,y:r.y,z:r.z+.5}:null}case"wreck":{const r=this.world.gen.secondShip;return{name:"Second Wreck",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"core":{const r=this.world.gen.secondShip;return{name:"Engine Core",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"tool":{const r=[];this.world.get(0,31,-3)===hn&&r.push({x:0,y:31,z:-3});for(const[a,l]of this.world.deltas){const[c,d]=a.split(",").map(Number);for(const[u,f]of l){if(f!==hn)continue;const h=u%se,p=Math.floor(u/se)%it,x=Math.floor(u/(se*it));r.push({x:c*it+x,y:h,z:d*it+p})}}if(!r.length)return null;const o=i(r);return{name:"Crafting Bench",x:o.x+.5,y:o.y,z:o.z+.5}}case"supplies":{const r=this.world.gen.nearestTown(e.x,e.z);return r?{name:"Town",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}:null}case"farm":{if(!this.crops.size)return null;let r=null,o=1/0;for(const d of this.crops.keys()){const[u,,f]=d.split(",").map(Number),h=(u+.5-e.x)**2+(f+.5-e.z)**2;h<o&&(o=h,r=d)}const[a,l,c]=r.split(",").map(Number);return{name:"Your Farm",x:a+.5,y:l+1,z:c+.5}}default:return null}}questFrame(){const t=Xs(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===cn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=Xs(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],i=e.id+":"+n;i!==this.questShown&&(this.questShown=i,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,i,r=window)=>{r.addEventListener(n,i),this.bound.set(n+(r===window?"":":el"),i)};t("keydown",n=>{const i=n;if(!i.repeat){if(this.keys.add(i.code),i.code==="KeyE"&&this.act(),i.code==="KeyQ"&&this.useItem(),i.code==="KeyX"&&this.surge(),i.code==="KeyI"&&this.toggleInv(),i.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot();o&&!r.rotate(o)&&(dt("No room to rotate."),this.audio.error())}this.renderInv()}if(i.code==="Escape"){if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(i.code==="KeyP"&&this.escape(!0),i.code.startsWith("Digit")){const r=Number(i.code.slice(5)),o=this.hotbarItems();if(r>=1&&r<=o.length){const a=o[r-1];this.inv.selectedSlot()?.itemId===a?this.inv.selected=-1:this.selectItem(a),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const i=n.target.closest("[data-hb]");if(!i)return;const r=this.hotbarItems()[Number(i.dataset.hb)];r&&(this.inv.selectedSlot()?.itemId===r?this.inv.selected=-1:this.selectItem(r),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const i=n;i.button===0?(this.mouseDown=!0,this.breakMsg=!1):i.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const i=n;this.player.yaw-=i.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*i.movementY*.0022*this.settings.sens,this.player.pitch=Ai.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>this.cycleItem(n.deltaY>0?1:-1)),t("contextmenu",n=>n.preventDefault());else{let n=-1,i=0,r=0;e.addEventListener("touchstart",h=>{if(n<0){const p=h.changedTouches[0];n=p.identifier,i=p.clientX,r=p.clientY}h.preventDefault()}),e.addEventListener("touchmove",h=>{for(const p of h.changedTouches)p.identifier===n&&(this.player.yaw-=(p.clientX-i)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(p.clientY-r)*.005*this.settings.sens,this.player.pitch=Ai.clamp(this.player.pitch,-1.55,1.55),i=p.clientX,r=p.clientY);h.preventDefault()});const o=h=>{for(const p of h.changedTouches)p.identifier===n&&(n=-1)};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),document.addEventListener("contextmenu",h=>h.preventDefault());const a=document.getElementById("stick"),l=document.getElementById("knob");let c=-1;const d=h=>{const p=a.getBoundingClientRect();for(const x of h.changedTouches)if(x.identifier===c){const _=x.clientX-(p.left+p.width/2),m=x.clientY-(p.top+p.height/2),E=Math.max(1,Math.hypot(_,m)),g=Math.min(E,p.width/2)/(p.width/2);this.stick.x=_/E*g,this.stick.y=m/E*g,l.style.left=38+_/E*g*38+"px",l.style.top=38+m/E*g*38+"px"}};a.addEventListener("touchstart",h=>{c=h.changedTouches[0].identifier,d(h),h.preventDefault()}),a.addEventListener("touchmove",h=>{d(h),h.preventDefault()});const u=()=>{this.stick.x=0,this.stick.y=0,c=-1,l.style.left="38px",l.style.top="38px"};a.addEventListener("touchend",u),a.addEventListener("touchcancel",u);const f=(h,p,x)=>{const _=document.getElementById(h);_.addEventListener("touchstart",m=>{m.preventDefault(),p()}),_.addEventListener("touchend",m=>{m.preventDefault(),x&&x()}),_.addEventListener("touchcancel",()=>{x&&x()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-next",()=>this.cycleItem(1)),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=i=>!document.getElementById(i).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document)}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),i=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,i),this.renderer.rebuildDirty(this.world);const r=this.renderer.updateSky(this.timeSec,this.player.pos),o=jr(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),a=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let u=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(u-=1),this.keys.has("KeyD")&&(u+=1);const h=this.keys.has("Space")||this.mobileJump;this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,u,f,h,this.speedMul,a),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(u!==0||f!==0),overencumbered:a,biome:o,tSec:this.timeSec,sunElev:r.sunElev,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos)}),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const u=this.renderer.camera;u.position.copy(this.player.eye()),u.rotation.order="YXZ",u.rotation.set(this.player.pitch,this.player.yaw,0)}const l=this.raycastTarget();this.renderer.setHighlight(this.ui||this.cine?null:l?.hit??null),W_(this.ui||this.cine?null:this.promptFor(l)),q_(this.ui||this.cine||!l?.hit?null:fi[this.world.get(l.hit.x,l.hit.y,l.hit.z)].name),X_(this.player.headUnder);for(const u of this.entities){if(u.fall!==void 0){const h=Math.min(u.fall,14*t);u.y-=h,u.fall-=h,u.fall<=.001&&(u.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(u.id,[u.x,u.y,u.z])}const f=this.renderer.entityMesh(u.id);u.buried&&u.buriedAt&&this.world.get(u.buriedAt[0],u.buriedAt[1],u.buriedAt[2])!==kt?f&&this.renderer.removeEntityMesh(u.id):f||this.renderer.addEntityMesh(u.id,[u.x,u.y,u.z],parseInt(zt[u.itemId].color.slice(1),16))}for(const u of this.caches){const f=this.renderer.entityMesh(u.id);!f&&u.items.length?(this.renderer.addEntityMesh(u.id,this.cacheMeshPos(u),this.cacheColor(u),.7),u.markerEid=this.renderer.addGroundRing(u.x+.5,u.y,u.z+.5,u.kind==="reward"?14197322:13382434,1.4)):f&&!u.items.length&&(this.renderer.removeEntityMesh(u.id),u.markerEid!==void 0&&(this.renderer.removeEntityMesh(u.markerEid),u.markerEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const c=this.survival.surgeCooldown>0;for(const u of["surge-btn","m-surge"]){const f=document.getElementById(u);f&&f.disabled!==c&&(f.disabled=c)}lh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),napReady:this.timeSec-this.lastSleep>=Pe}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.world.processWater(),this.audio.setDay(r.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const d=this.prevHp-this.survival.health;if(d>0){const u=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(d>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,Y_(),(d>=2||u)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new P;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),i=Math.floor(t.y),r=Math.floor(t.z);const o=new P(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),a=new P(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),l=(f,h)=>h>0?Math.ceil(f)-f||1:h<0?f-Math.floor(f)||1:1/0,c=new P(l(t.x,o.x)*a.x,l(t.y,o.y)*a.y,l(t.z,o.z)*a.z);let d=new P(n,i,r),u=null;for(let f=0;f<80;f++){const h=this.world.get(n,i,r);if(qn(h)){if(u||(u={x:n,y:i,z:r}),h===en)return{hit:{x:n,y:i,z:r},water:u,face:new P(d.x-n,d.y-i,d.z-r)}}else if(h!==kt&&h!==en)return{hit:{x:n,y:i,z:r},water:u,face:new P(d.x-n,d.y-i,d.z-r)};if(d.set(n,i,r),c.x<c.y&&c.x<c.z?(n+=o.x,c.x+=a.x):c.y<c.z?(i+=o.y,c.y+=a.y):(r+=o.z,c.z+=a.z),new P(n-t.x,i-t.y,r-t.z).length()>5.5)break}return{hit:null,water:u,face:new P(0,0,0)}}promptFor(t){if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===ze)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===Ke||n===Ge)return"E: Open door";if(n===Ue)return"E: Close door";if(n===cn)return"E: Save game (respawn point)";if(n===hn||n===Gn)return"E: Craft";if(n===vn)return"E: Smelt";if(n===mi)return"E: Draw neutral air (37 °C)"}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new P(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=fi[t];if(e.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const n=this.inv.selectedSlot(),i=n?zt[n.itemId].tool:void 0;return e.tool!==null?!i||i.type!==e.tool?{ok:!1,time:0,why:`need a ${e.tool}`}:i.tier<e.minTier?{ok:!1,time:0,why:`need a tier ${e.minTier} ${e.tool}`}:{ok:!0,time:e.breakTime*Math.pow(.55,i.tier-1)}:{ok:!0,time:e.breakTime*(e.fastTool&&i&&i.type===e.fastTool?Math.pow(.55,i.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const l=this.inv.selectedSlot(),c=l?zt[l.itemId]:null,d=c?.weapon;e.hp-=d?d.dmg:3+(c?.tool?.tier??0),this.audio.thud();const u=e.x-this.player.pos.x,f=e.z-this.player.pos.z,h=Math.max(.2,Math.hypot(u,f)),p=d?1.1:.6;this.mobCanStand(e,e.x+u/h*p,e.z+f/h*p)&&(e.x+=u/h*p,e.z+=f/h*p,e.y=this.mobSurface(e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:i,y:r,z:o}=n.hit,a=this.world.get(i,r,o);if(!this.breaking||this.breaking.x!==i||this.breaking.y!==r||this.breaking.z!==o){const l=this.canBreakWith(a);if(!l.ok){l.why&&!this.breakMsg&&(this.breakMsg=!0,dt(l.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${l.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:i,y:r,z:o,need:l.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(i,r,o),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const i=this.world.get(t,e,n);if(this.questBump("mine"),Vr(i)||i===Ue||i===$e){const o=i===Ne||i===ke||i===$e;this.world.set(t,e,n,kt);for(const a of[-1,1]){const l=this.world.get(t,e+a,n);(Vr(l)||l===Ue||l===$e)&&this.world.set(t,e+a,n,kt)}this.giveOrDrop(o?"door_inner":"door",1),this.audio.blockBreak();return}if(i===cn){this.world.set(t,e,n,kt),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===t&&o.y===e&&o.z===n)),dt("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(i===In){this.world.set(t,e,n,kt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(i===Ri){this.world.set(t,e,n,kt),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(i===Tn){this.world.set(t,e,n,kt),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(i===Jn){this.world.set(t,e,n,kt),this.giveOrDrop("kindling",1),Qt(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(i===Un||i===Xn){this.world.set(t,e,n,kt);const o=t+(i===Un?1:-1),a=this.world.get(o,e,n);(a===Un||a===Xn)&&this.world.set(o,e,n,kt),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(i===vn&&this.campCharges.delete(`${t},${e},${n}`),i===ze){const o=this.chestCluster(t,e,n),a=this.chests.get(de.chestKey(o))??[];this.chests.delete(de.chestKey(o)),this.world.set(t,e,n,kt);const l=o.filter(([u,f,h])=>u!==t||f!==e||h!==n),c=[];for(const u of l){const f=this.chestCluster(u[0],u[1],u[2]),h=de.chestKey(f);c.some(([p])=>p===h)||c.push([h,this.emptyChestGrid(f.length)])}let d=!1;for(const u of a)c.some(([,f])=>de.placeSlotFree(f,u))||(this.dropEntity(u.itemId,u.count,2),d=!0);for(const[u,f]of c)f.slots.length&&this.chests.set(u,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),d&&dt("The remaining chests were full — some contents fell to the sand.");return}if(i===Zi){this.world.set(t,e,n,kt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(i===hn||i===Gn){const o=this.benchPeer(t,e,n);this.world.set(t,e,n,kt),o&&this.world.set(o[0],o[1],o[2],kt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(i===Rn||i===vn)&&this.renderer.removePointLight(t,e,n),this.world.set(t,e,n,kt);const r=this.blockItemId(i);r&&this.giveOrDrop(r,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),i=Math.floor(e),r=Math.max(30,Math.round(Te(this.seed,n,i))+8);for(let o=r;o>=0;o--){const a=this.world.get(n,o,i);if(a!==kt&&fi[a].solid)return o+1}return-1}mobCanStand(t,e,n){const i=this.mobSurface(e,n);return i<0||i>t.y+1.01?!1:this.world.get(Math.floor(e),i,Math.floor(n))===kt}spawnMob(t,e,n,i){const r=P_(t);r.group.position.set(e,n,i),r.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(r.group),this.mobs.push({kind:t,hp:Bs[t].hp,x:e,y:n,z:i,yaw:r.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:r})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(e=>e!==t);for(const e of Bs[t.kind].drops)this.giveOrDrop(e.itemId,e.count);dt(`${Bs[t.kind].name} killed.`)}topUpMobs(){const t={snake:4,rat:8},e={snake:0,rat:0};for(const i of this.mobs)e[i.kind]++;const n=this.player.pos;for(const i of["snake","rat"])for(;e[i]<t[i];){e[i]++;const r=Math.random()*Math.PI*2,o=30+Math.random()*30,a=Math.floor(n.x+Math.cos(r)*o)+.5,l=Math.floor(n.z+Math.sin(r)*o)+.5;if(Math.hypot(a,l)<24||this.beaconMarks.some(d=>Math.hypot(d.x+.5-a,d.z+.5-l)<16))continue;const c=this.mobSurface(a,l);c<=1||this.world.get(Math.floor(a),c,Math.floor(l))!==kt||this.world.get(Math.floor(a),c+1,Math.floor(l))!==kt||this.spawnMob(i,a,c,l)}}meleeMob(){const t=this.player.eye(),e=new P;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),i=n?zt[n.itemId].weapon?.reach??3.2:3.2,r=this.raycastTarget(),o=r?.hit?Math.hypot(r.hit.x+.5-t.x,r.hit.y+.5-t.y,r.hit.z+.5-t.z):1/0;let a=null,l=1/0;for(const c of this.mobs){const d=Bs[c.kind],u=c.x-t.x,f=c.y+d.height/2-t.y,h=c.z-t.z,p=u*e.x+f*e.y+h*e.z;if(p<.2||p>i||p>o)continue;const x=t.x+e.x*p-c.x,_=t.y+e.y*p-(c.y+d.height/2),m=t.z+e.z*p-c.z;x*x+_*_+m*m>(d.hitR+.3)*(d.hitR+.3)||p<l&&(l=p,a=c)}return a}columnClear(t,e,n,i){const r=Math.floor(t),o=Math.floor(e);for(let a=Math.floor(n);a<=Math.floor(i);a++){const l=this.world.get(r,a,o);if(l!==kt&&l!==en)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const i of this.mobs.slice()){const r=Bs[i.kind],o=e.x-i.x,a=e.z-i.z,l=Math.hypot(o,a);if(l>110){this.renderer.removeSceneObject(i.vis.group),this.mobs=this.mobs.filter(h=>h!==i);continue}let c=0,d=0;const u=this.columnClear(i.x,i.z,i.y+.2,e.y+1.4);if(r.aggroR>0&&l<r.aggroR&&l>.01&&u){if(c=o/l*r.speed,d=a/l*r.speed,i.yaw=Math.atan2(c,d),l<1.2+r.hitR&&i.biteCd<=0){i.biteCd=r.biteCd;const h=this.equip.body?.6:1;this.survival.hurt(r.biteDmg*h,`${r.name.toLowerCase()} bite`),dt(h<1?`A ${r.name.toLowerCase()} bites you — the Reptile Armour soaks some of it.`:`A ${r.name.toLowerCase()} bites you!`)}}else r.fleeR>0&&l<r.fleeR&&l>.01?(c=-o/l*r.speed,d=-a/l*r.speed,i.yaw=Math.atan2(c,d)):(i.wanderT-=t,i.wanderT<=0&&(i.wanderT=2+Math.random()*4,i.wanderYaw=Math.random()*Math.PI*2,i.wanderOn=Math.random()<.55),i.wanderOn&&(c=Math.sin(i.wanderYaw)*r.speed*.35,d=Math.cos(i.wanderYaw)*r.speed*.35,i.yaw=i.wanderYaw));i.biteCd-=t;let f=0;if(c!==0||d!==0){const h=i.x+c*t,p=i.z+d*t;this.mobCanStand(i,h,p)?(i.x=h,i.z=p,f=1):i.wanderYaw=i.yaw=Math.random()*Math.PI*2}i.y=this.mobSurface(i.x,i.z),i.vis.group.position.set(i.x,i.y,i.z),i.vis.group.rotation.y=i.yaw,i.vis.animate(n,f)}}gridFits(t,e){const n=new ea;n.slots=[],n.w=t,n.h=e;for(const i of this.inv.slots)if(!de.placeSlotFree(n,{...i,x:0,y:0}))return!1;return!0}applyEquip(){const t=this.equip.backpack?4:3,e=this.equip.backpack?5:4;(this.inv.w!==t||this.inv.h!==e)&&this.inv.setBackpack(t,e,this.equip.backpack?20:0),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=zt[t.itemId];if(!e.equip)return;const n=e.equip,i=this.equip[n];if(i&&this.inv.addItem(i.itemId,i.count)>0){this.inv.removeItem(i.itemId,1),dt("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),dt(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(e){if(!this.gridFits(this.equip.backpack&&t==="backpack"?3:this.inv.w,this.equip.backpack&&t==="backpack"?5:this.inv.h)){dt("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,this.applyEquip(),this.inv.addItem(e.itemId,e.count),this.audio.place(),dt(`${zt[e.itemId].name} taken off.`)}}benchPeer(t,e,n){for(const[i,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.world.get(t+i,e,n+r);if(o===hn||o===Gn)return[t+i,e,n+r]}return null}blockItemId(t){return{1:"sand",2:"sandstone",3:"rock",4:"gravel",5:"dirt",6:"salt",7:"deadwood",8:"glass",9:"insglass",10:"hull",11:"door",13:"lamp",14:"metal",16:"bench",17:"campfire",19:"adobe",21:"engine_core",22:"regulator",23:"chest",24:"bench"}[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),dt(`No room: dropped ${zt[t].name}`))}dropEntity(t,e,n=0){const i=this.player.pos,r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=(u,f)=>{const h=Math.floor(i.x+u),p=Math.floor(i.z+f);return!qe(this.world.get(h,Math.floor(i.y),p))&&!qe(this.world.get(h,Math.floor(i.y+1),p))},l=[[r*1.8,o*1.8],[-r*1.8,-o*1.8],[o*1.8,-r*1.8],[-o*1.8,r*1.8],[0,0]],[c,d]=l.find(([u,f])=>a(u,f))??[0,0];this.entities.push({id:this.entitySeq++,x:i.x+c,y:i.y+.35,z:i.z+d,itemId:t,count:e,repickAt:c===0&&d===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=zt[t.itemId];if(e.block===void 0){dt("Not a placeable block"),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const i=n.hit.x+n.face.x,r=n.hit.y+n.face.y,o=n.hit.z+n.face.z;if(this.world.get(i,r,o)!==kt)return;if(qe(e.block)){const c=this.player.pos;if(i+1>c.x-.3&&i<c.x+.3&&o+1>c.z-.3&&o<c.z+.3&&r+1>c.y&&r<c.y+1.8)return}let a=[];if(e.block===ze){const c=new Set;for(const[d,u,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(i+d,r+u,o+f)!==ze)continue;const h=de.chestKey(this.chestCluster(i+d,r+u,o+f));c.has(h)||(c.add(h),a.push(...this.chests.get(h)??[]),this.chests.delete(h))}}let l=null;if(e.block===hn){const c=this.player.pos;for(const[d,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=i+d,h=o+u;if(this.world.get(f,r,h)===kt&&!(f+1>c.x-.3&&f<c.x+.3&&h+1>c.z-.3&&h<c.z+.3&&r+1>c.y&&r<c.y+1.8)){l=[f,r,h];break}}if(!l){dt("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(e.block===Ln||e.block===di||e.block===In||e.block===Tn){const c=this.world.get(i,r-1,o);if(!(e.block===Tn?c===$n||c===ai||c===Li:c===ai||e.block===In&&(c===yn||c===pi||c===$n))){dt(e.block===Tn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(i,r,o,e.block),l&&this.world.set(l[0],l[1],l[2],Gn),e.block===Ke&&this.world.get(i,r+1,o)===kt&&this.world.set(i,r+1,o,Ge),e.block===Ne&&this.world.get(i,r+1,o)===kt&&this.world.set(i,r+1,o,ke),e.block===Un&&this.world.get(i+1,r,o)===kt&&this.world.set(i+1,r,o,Xn),(e.block===Ln||e.block===di)&&(this.crops.set(`${i},${r},${o}`,0),this.tut?.notify("plant")),e.block===Tn&&(this.trees.set(`${i},${r},${o}`,0),this.tut?.notify("plant"),dt("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===Zi){const c=Xs(this.quests);c&&c.kind==="finish"&&([...this.beaconMarks,{x:-4,y:31,z:-1}].some(u=>this.world.get(u.x,u.y,u.z)===cn&&(u.x+.5-i)**2+(u.z+.5-o)**2<100)?this.questBump("finish"):dt("Too far from a Save Beacon — the relay needs the Core within 10 m."))}e.block===Rn?this.renderer.addPointLight(i,r,o,"lamp"):e.block===vn&&this.renderer.addPointLight(i,r,o,"fire"),e.block===ze&&this.linkChests(i,r,o,a),t.count-=1,t.count<=0&&this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget();if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===ze){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const e=this.nearestCache();if(e){this.openCacheId=e.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:n,y:i,z:r}=t.hit,o=this.world.get(n,i,r);if(o===Pn||o===Dn||o===Ri){this.harvest(n,i,r,o);return}if(o===Un||o===Xn){this.sleep();return}if(Vr(o)||o===Ue||o===$e){const a=o===Ne||o===ke||o===$e,l=a?$e:Ue,c=f=>a?f===Ne||f===ke:f===Ke||f===Ge,d=a?Ne:Ke,u=a?ke:Ge;if(o===l){const f=this.player.pos;if(f.x>n-.2&&f.x<n+1.2&&f.z>r-.2&&f.z<r+1.2){dt("Step out of the doorway first."),this.audio.error();return}this.world.get(n,i-1,r)===l?(this.world.set(n,i,r,u),this.world.set(n,i-1,r,d)):this.world.get(n,i+1,r)===l?(this.world.set(n,i,r,d),this.world.set(n,i+1,r,u)):this.world.set(n,i,r,c(this.world.get(n,i+1,r))?u:d)}else{const f=qe(this.world.get(n-1,i,r))||qe(this.world.get(n+1,i,r)),h=this.player.pos,p=f?h.z-(r+.5):h.x-(n+.5),x=n+","+r;Math.abs(p)>.35?this.world.doorSwing.set(x,p>0?-1:1):this.world.doorSwing.delete(x),this.world.set(n,i,r,l);for(const _ of[-1,1])c(this.world.get(n,i+_,r))&&this.world.set(n,i+_,r,l);this.tut?.notify("door")}this.audio.door();return}if(o===cn){this.tut?.notify("save"),this.beaconMarks.some(a=>a.x===n&&a.y===i&&a.z===r)||this.beaconMarks.push({x:n,y:i,z:r}),this.audio.savePing(),this.saveNow()?dt("Saved. Death will respawn you at this beacon."):dt("This world is not saved — the beacon only marks it.");return}if(o===hn||o===Gn){this.openStation=[n,i,r],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(o===vn){this.openStation=[n,i,r],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(o===mi){let a=null;for(const[l,c,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=this.world.roomInfo(n+l,i+c,r+d);if(u.size>0){a=u;break}}a&&a.sealed&&a.regulators*so>=a.size?(this.survival.body=37,this.audio.drink(),dt("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),dt("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.has("bucket")){this.bucketScoop();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),dt(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):dt("You need an empty Water Canister.")}}}harvest(t,e,n,i){i===Pn?(this.world.set(t,e,n,Ln),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(Qt(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),dt("Dune Melon picked — the plant keeps growing.")):i===Dn?(this.world.set(t,e,n,ai),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),dt("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,In),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),dt("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<Pe){const n=Math.ceil((Pe-t)/60);dt(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=Pe/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),dt("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),i=Math.floor(t.z);let r=0;for(let o=-6;o<=6;o++)for(let a=-6;a<=6;a++)for(let l=-2;l<=2;l++){if(this.world.get(e+o,n+l,i+a)!==vn)continue;const c=Math.max(Math.abs(o),Math.abs(a));r=Math.max(r,c<=4?18:9)}return r}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,i]of this.crops){const[r,o,a]=n.split(",").map(Number),l=this.world.get(r,o,a);if(l!==Ln&&l!==Pn&&l!==di&&l!==Dn){this.crops.delete(n);continue}if(l===Pn||l===Dn)continue;const c=l===Ln;let d=!1;t:for(let h=-4;h<=4;h++)for(let p=-4;p<=4;p++)for(let x=-2;x<=1;x++)if(qn(this.world.get(r+h,o+x,a+p))){d=!0;break t}const u=this.survival.airTempAt(this.world,r,o,a,this.timeSec),f=c?u>=22&&u<=45:u>=2&&u<=42;if(d&&f){const h=i+e;this.crops.set(n,h),h>=(c?60:90)&&this.world.set(r,o,a,c?Pn:Dn)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){dt("Aim at water."),this.audio.error();return}const{x:e,y:n,z:i}=t.water;if(this.world.get(e,n,i)!==en){dt("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){dt("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,i,kt),this.audio.drink(),dt("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,i=t.hit.z+t.face.z;if(this.world.get(e,n,i)!==kt){dt("Pour into open space."),this.audio.error();return}this.world.set(e,n,i,en),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),dt("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,i]of this.trees){const[r,o,a]=n.split(",").map(Number),l=this.world.get(r,o,a);if(l!==Tn&&l!==li){this.trees.delete(n);continue}let c=!1;t:for(let h=-6;h<=6;h++)for(let p=-6;p<=6;p++)for(let x=-3;x<=3;x++)if(qn(this.world.get(r+h,o+x,a+p))){c=!0;break t}if(!c)continue;const d=Math.min(480,i+e);this.trees.set(n,d);const u=d>=480?3:d>=270?2:d>=120?1:0;if(u===0)continue;let f=this.treePlanCache.get(n);if(!f){let h=Math.floor(Qt(r+7*a,o,this.seed+55)*1e9)+1;f=$h(r,o,a,()=>(h=h*1103515245+12345&2147483647,h/2147483647)),this.treePlanCache.set(n,f)}for(const h of f){if(h.stage>u)continue;const p=this.world.get(h.x,h.y,h.z);(p===kt||p===Tn)&&this.world.set(h.x,h.y,h.z,h.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),i=Math.floor(t.z);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)for(let a=0;a<=2;a++){const l=this.world.get(e+r,n+a,i+o);if(!(l!==In&&l!==Ri)&&!(Math.abs(t.x-(e+r+.5))>1.15||Math.abs(t.z-(i+o+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),dt("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){dt("Select an item first."),this.audio.error();return}const e=zt[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:i,y:r,z:o}=n.hit,a=this.world.get(i,r,o);if(n.face.y===1&&(a===$n||a===Li)){this.world.set(i,r,o,ai),this.audio.place(),dt("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(a===yn||a===pi||a===Is)){dt("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}dt(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),dt(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){dt("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&dt("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){dt("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){dt("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),dt("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),i=Math.floor(e.y),r=Math.floor(e.z);let o=this.world.roomInfo(n,i,r);if(o.size===0)t:for(let c=-1;c<=1;c++)for(let d=-1;d<=1;d++)for(let u=-1;u<=1;u++){const f=this.world.roomInfo(n+c,i+d,r+u);if(f.size>0){o=f;break t}}const a=o.sealed&&o.regulators>0&&o.regulators*so>=o.size;this.regActive=a;const l=new Set(a?o.regCells:[]);for(const[c,d]of this.regGlow){if(l.has(c))continue;this.renderer.removeEntityMesh(d);const[u,f,h]=c.split(",").map(Number);this.renderer.removePointLight(u,f,h),this.regGlow.delete(c)}for(const c of l){if(this.regGlow.has(c))continue;const[d,u,f]=c.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new Fn({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const h=this.entitySeq++,p=this.renderer.addEntityMesh(h,[d+.5,u+.5,f+.5],9427199,1.03);p.material=this.regGlowMat,this.renderer.addPointLight(d,u,f,"cool"),this.regGlow.set(c,h)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==kt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}if(t.distanceTo(new P(n.x,n.y,n.z))<1.3){const i=this.inv.addItem(n.itemId,n.count);i===0?(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup()):n.count=i}}}}win(){this.won||(this.won=!0,sh(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`Main Quest complete. Survived ${this.scoreDays().toFixed(1)} days. Best: ${tr().toFixed(1)} days. The beacon relay is live — rescuers are on their way.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:t.count})),...["backpack","head","body"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null},sh(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${tr().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/Pe}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===cn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){dt("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){lh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,napReady:this.timeSec-this.lastSleep>=Pe})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const u=zt[this.temp.itemId];e.classList.add("filled"),e.style.background=u.color,e.style.backgroundImage=`url(${Zr(this.temp.itemId)[0]??""})`,e.textContent=this.temp.count>1?`${this.temp.count}`:"",e.onmousedown=f=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.startTempDrag(f)},n.textContent=`Drop ${this.temp.count>1?this.temp.count+"× ":""}${u.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,this.temp.count,1),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.textContent="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const u of["backpack","head","body"]){const f=document.getElementById("eq-"+u),h=this.equip[u];if(h){const p=zt[h.itemId];f.classList.add("filled"),f.style.background=p.color,f.style.backgroundImage=`url(${Zr(h.itemId)[0]??""})`,f.title=`Click to take off the ${p.name}`,f.onclick=()=>this.unequipSlot(u)}else f.classList.remove("filled"),f.style.background="#23262e",f.style.backgroundImage="",f.title="",f.onclick=()=>{const p=this.inv.selectedSlot();p&&zt[p.itemId].equip===u?this.equipItem():p&&(dt(`The ${zt[p.itemId].name} does not fit the ${u} slot.`),this.audio.error())}}const i=document.getElementById("inv-side"),r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot(),a=this.temp??o,l=this.inv.weight()+(this.temp?zt[this.temp.itemId].mass*this.temp.count:0),c=this.inv.weightLimit(),d=a?ln(a):null;if(i.textContent=a?`${zt[a.itemId].name} — ${zt[a.itemId].desc}`:"Click an item to inspect it; drag to move it.",i.textContent+=` Weight ${l.toFixed(1)} / ${c} kg`,a&&d&&d.w!==d.h){const u=document.createElement("button");u.textContent="Rotate",u.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:r.rotate(o)||(dt("No room to rotate."),this.audio.error()),this.renderInv()},i.appendChild(u)}if(o){const u=zt[o.itemId];if(u.equip){const f=document.createElement("button");f.textContent=`Equip (${u.equip} slot)`,f.onclick=()=>this.equipItem(),i.appendChild(f)}}if(o)if(r===this.chestInv){const u=document.createElement("button");u.textContent="Move to pack",u.onclick=()=>{const f=r.slots.indexOf(o);r.slots.splice(f,1),de.placeSlotFree(this.inv,o)||(r.slots.splice(f,0,o),dt("No room in your pack."),this.audio.error()),this.renderInv()},i.appendChild(u)}else{const u=document.createElement("button");u.textContent="Drop 1",u.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},i.appendChild(u)}}renderGrid(t,e){const n=de.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const i=(r,o)=>t.slots.find(a=>{const l=ln(a);return r>=a.x&&r<a.x+l.w&&o>=a.y&&o<a.y+l.h});for(let r=0;r<t.h;r++)for(let o=0;o<t.w;o++){const a=document.createElement("div");a.className="invcell";const l=i(o,r);if(l){const c=zt[l.itemId],d=o-l.x,u=r-l.y,f=Zr(l.itemId),h=l.rot?(c.h-1-d)*c.w+u:u*c.w+d;if(a.style.background=c.color,a.style.backgroundImage=`url(${f[Math.min(h,f.length-1)]??""})`,l.count>1&&d===0&&u===0){const x=document.createElement("div");x.className="icon",x.textContent=`${l.count}`,a.appendChild(x)}t.slots.indexOf(l)===t.selected&&a.classList.add("active"),a.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${c.name} — ${c.desc}`},a.onmousedown=x=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,o,r):this.startInvDrag(x,l,t)}}else a.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,o,r)};e.appendChild(a)}}tapCell(t,e,n){const i=t.slots.find(a=>{const l=ln(a);return e>=a.x&&e<a.x+l.w&&n>=a.y&&n<a.y+l.h}),r=t===this.inv?this.chestInv:this.inv;if(r){const a=r.selectedSlot();if(a&&a!==i){const l=ln(a),c=Math.min(e,t.w-l.w),d=Math.min(n,t.h-l.h);if(c>=0&&d>=0&&t.fits(c,d,l.w,l.h,a)){r.slots.splice(r.slots.indexOf(a),1),r.selected=-1,a.x=c,a.y=d,t.slots.push(a),t.selected=t.slots.indexOf(a),this.audio.place(),this.renderInv(),this.renderHeld();return}dt("No room there."),this.audio.error();return}}const o=t.selectedSlot();if(o&&o!==i){const a=ln(o),l=Math.min(e,t.w-a.w),c=Math.min(n,t.h-a.h);if(l>=0&&c>=0&&this.tapMove(t,o,i,l,c)){this.audio.place(),t.selected=t.slots.indexOf(o),this.renderInv();return}}i?(this.setSel(t,t.slots.indexOf(i)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,i,r){const o=ln(e);if(t.fits(i,r,o.w,o.h,e))return t.move(e,i,r);if(!n)return!1;const a=ln(n),l=t.slots.indexOf(e);t.slots.splice(l,1);const c=t.fits(e.x,e.y,a.w,a.h,n)&&t.fits(i,r,o.w,o.h,n)&&!(i<e.x+a.w&&e.x<i+o.w&&r<e.y+a.h&&e.y<r+o.h)&&t.move(n,e.x,e.y)&&t.move(e,i,r);return t.slots.splice(l,0,e),c}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const i=n.slots.indexOf(e);this.setSel(n,i),n.slots.splice(i,1);const r=this.temp;this.temp=e,this.tempOrigin=n,r&&(n.slots.push(r),n.move(r,e.x,e.y)||this.giveOrDrop(r.itemId,r.count));const o=(de.CELL+de.GAP)*this.uiZoom(),a=de.GAP*this.uiZoom(),l=ln(e),c=document.createElement("div");c.className="inv-ghost",c.style.width=l.w*o-a+"px",c.style.height=l.h*o-a+"px",c.style.background=zt[e.itemId].color,c.style.backgroundImage=`url(${ci(e.itemId,e.rot?1:0)})`,document.body.appendChild(c);const d=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:t.clientX-(d.left+e.x*o),gy:t.clientY-(d.top+e.y*o)},f=p=>{c.style.left=p.clientX-u.gx+"px",c.style.top=p.clientY-u.gy+"px"},h=p=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",h),c.remove();const x=ln(e);let _=null,m=0,E=0;for(const[g,v]of this.gridsEls()){const w=g.getBoundingClientRect();if(m=Math.round((p.clientX-w.left-u.gx)/o),E=Math.round((p.clientY-w.top-u.gy)/o),m>=0&&E>=0&&m<=v.w-x.w&&E<=v.h-x.h){_=v;break}}_&&(_.slots.push(e),_.move(e,m,E)||_===n&&_.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(_,_.slots.indexOf(e))):_.slots.splice(_.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",h),f(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const o=e.slots.indexOf(t);if(e.slots.splice(o,1),!de.placeSlotFree(n,t)){e.slots.splice(o,0,t),dt(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const i=e.slots.indexOf(t);this.setSel(e,i),e.slots.splice(i,1);const r=this.temp;this.temp=t,this.tempOrigin=e,r&&(e.slots.push(r),e.move(r,t.x,t.y)||this.giveOrDrop(r.itemId,r.count)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(de.CELL+de.GAP)*this.uiZoom(),i=de.GAP*this.uiZoom(),r=ln(e),o=document.createElement("div");o.className="inv-ghost",o.style.width=r.w*n-i+"px",o.style.height=r.h*n-i+"px",o.style.background=zt[e.itemId].color,o.style.backgroundImage=`url(${ci(e.itemId,e.rot?1:0)})`,document.body.appendChild(o);const a=c=>{o.style.left=c.clientX-r.w*n/2+"px",o.style.top=c.clientY-r.h*n/2+"px"},l=c=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l),o.remove();const d=(r.w*n-i)/2,u=(r.h*n-i)/2;let f=null,h=0,p=0;for(const[x,_]of this.gridsEls()){const m=x.getBoundingClientRect();if(h=Math.round((c.clientX-m.left-d)/n),p=Math.round((c.clientY-m.top-u)/n),h>=0&&p>=0&&h<=_.w-r.w&&p<=_.h-r.h){f=_;break}}f&&(f.slots.push(e),f.move(e,h,p)?(this.temp=null,this.audio.place(),this.setSel(f,f.slots.indexOf(e))):(f.slots.splice(f.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",a),window.addEventListener("mouseup",l),a(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};de.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(dt("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){dt("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t==="bench")for(const i of Qh){const r=document.createElement("div");r.className="craft-row";const o=`${zt[i.out].name}${i.count>1?" ×"+i.count:""}`,a=Object.entries(i.needs).map(([d,u])=>`${u}× ${zt[d].name}`).join(", "),l=eu(this.inv,i);r.innerHTML=`<span class="what"><img class="craft-art" src="${ci(i.out)}" alt="">${o} <span class="needs">(${a})</span></span>`;const c=document.createElement("button");c.textContent="Craft",c.disabled=!l,c.onclick=()=>{const d=D_(this.inv,i);if(d===null){this.audio.error();return}d>0&&this.giveOrDrop(i.out,d),this.tut?.notify("craft"),zt[i.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},r.appendChild(c),e.appendChild(r)}else{const i=this.openStation,r=`${i[0]},${i[1]},${i[2]}`,o=this.campCharges.get(r)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){dt("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(r,o+3),this.renderCraft("smelt")};for(const a of tu){const l=document.createElement("div");l.className="craft-row",l.innerHTML=`<span class="what"><img class="craft-art" src="${ci(a.out)}" alt="">${zt[a.in].name} → ${zt[a.out].name} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(a.in,1)||o<1,c.onclick=()=>{this.inv.removeItem(a.in,1),this.campCharges.set(r,o-1);const d=this.inv.addItem(a.out,1);d>0&&this.giveOrDrop(a.out,d),this.audio.place(),this.renderCraft("smelt")},l.appendChild(c),e.appendChild(l)}}}renderCache(){const t=this.caches.find(i=>i.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const i of t.items){const r=document.createElement("div");r.className="cache-item",r.textContent=`${i.count}× ${zt[i.itemId].name}`,e.appendChild(r)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let i=!0;for(;i;){i=!1;for(const r of t.items){const o=this.inv.addItem(r.itemId,r.count);o<r.count&&(i=!0,r.count=o),o===0&&t.items.splice(t.items.indexOf(r),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const j_=["drone","wanderer","wanderer","caravan","caravan","nightwind"],Z_=["drone","nightwind","nightwind","caravan","wanderer"],ch={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},hh=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],J_=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],uh=[0,2,4,2,3,5,4,1],Q_=[0,0,3,2,4,3,2,0],dh={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},tv=["pluck","saw","breath","bow"];class ev{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=dh[this.genre];breathBuf=null;root=98;deg=hh[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let i=0,r=0;for(let d=0;d<n.length;d++){const u=Math.random()*2-1;i=.99*i+.01*u,r=.96*r+.04*u,n[d]=(i+r)*2}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.noiseBuf=e;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const l=this.ctx.createOscillator();l.frequency.value=.13;const c=this.ctx.createGain();c.gain.value=100,l.connect(c).connect(a.frequency),l.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,o.connect(a).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=.06*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const i=t.createGain();i.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(i),i.connect(t.destination),[1,1.5,2].forEach((r,o)=>{const a=t.createOscillator();a.type=o===2?"sine":"triangle",a.frequency.value=this.root*r,a.detune.value=o*3-3;const l=t.createGain();l.gain.value=.03/(o+1);const c=t.createOscillator();c.frequency.value=.05+o*.017;const d=t.createGain();d.gain.value=.018,c.connect(d).connect(l.gain),c.start(),a.connect(l).connect(this.musicGain),a.start(),this.droneOscs.push(a)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?j_:Z_;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=dh[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const i=this.isDay?hh:J_;if(this.deg=i[Math.floor(Math.random()*i.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const r=this.ctx.currentTime;this.droneOscs.forEach((o,a)=>o.frequency.setTargetAtTime(this.root*[1,1.5,2][a],r,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=ch[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,i=(o,a)=>e*o*2**(n[(a%n.length+n.length)%n.length]/12),r=ch[this.genre];switch(this.genre){case"drone":{this.note(i(1,0),t,r*.95,.18),[0,2,4].forEach(o=>this.note(i(2,o),t+.05,r*.9,.03));for(let o=0;o<8;o++)Math.random()<.15||this.note(i(4,uh[o]),t+o*r/8,.9,.12);if(Math.random()<.6){const o=1+Math.floor(Math.random()*6);this.note(i(4,o),t+Math.floor(Math.random()*5)*(r/8),1.4,.13)}break}case"wanderer":{this.note(i(1,0),t,r*.55,.16);for(let o=0;o<8;o++)Math.random()<.1||this.note(i(Math.random()<.3?3:4,uh[o]),t+o*r/8,.55,.12);if(Math.random()<.7){const o=1+Math.floor(Math.random()*5);this.note(i(5,o),t+Math.floor(Math.random()*6)*(r/8),.8,.11)}break}case"nightwind":{this.note(i(1,0),t,r*.95,.15),Math.random()<.4&&[0,2,4].forEach(a=>this.note(i(2,a),t+.1,r*.85,.025));const o=1+Math.floor(Math.random()*3);for(let a=0;a<o;a++){const l=Math.floor(Math.random()*n.length),c=1.6+Math.random()*(r-1.2);this.note(i(4,l),t+Math.random()*(r-1),c,.12)}break}case"caravan":{for(let o=0;o<8;o++)(o===0||o===3||o===4)&&this.drum(t+o*r/8),o%2===1&&this.brush(t+o*r/8);this.note(i(1,0),t,r*.45,.17),this.note(i(1,3),t+r/2,r*.4,.14);for(let o=0;o<8;o++)Math.random()<.25||this.note(i(3,Q_[o]),t+o*r/8,.4,.1);if(Math.random()<.4){const o=1+Math.floor(Math.random()*4);this.note(i(4,o),t+Math.floor(Math.random()*4)*(r/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const i=this.ctx.createGain();i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(i).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=tv.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,i){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,i);break;case"saw":this.sawNote(t,e,n,i);break;case"breath":this.breathNote(t,e,n,i);break;case"bow":this.bowNote(t,e,n,i);break}}pluckNote(t,e,n,i){const r=this.ctx,o=Math.min(n,1),a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(i,e+.006),a.gain.exponentialRampToValueAtTime(.001,e+o),a.connect(this.musicGain);const l=r.createOscillator();l.type="triangle",l.frequency.value=t,l.connect(a),l.start(e),l.stop(e+o+.05);const c=r.createOscillator();c.type="square",c.frequency.value=t*2.01;const d=r.createGain();d.gain.setValueAtTime(i*.22,e),d.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,o*.35)),c.connect(d).connect(a),c.start(e),c.stop(e+o)}sawNote(t,e,n,i){const r=this.ctx,o=r.createOscillator();o.type="sawtooth",o.frequency.value=t;const a=r.createBiquadFilter();a.type="lowpass",a.Q.value=.8,a.frequency.value=Math.min(3200,Math.max(700,t*6));const l=r.createGain();this.sustainEnv(l.gain,e,n,i*.7,.09),o.connect(a).connect(l).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}breathNote(t,e,n,i){const r=this.ctx;if(!this.breathBuf){const u=r.sampleRate,f=r.createBuffer(1,u*2,u),h=f.getChannelData(0);for(let p=0;p<h.length;p++)h[p]=Math.random()*2-1;this.breathBuf=f}const o=r.createBufferSource();o.buffer=this.breathBuf,o.loop=!0;const a=r.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=10;const l=r.createGain();this.sustainEnv(l.gain,e,n,i*1.6,.22),o.connect(a).connect(l).connect(this.musicGain),o.start(e,Math.random()*1.9),o.stop(e+n+.05);const c=r.createOscillator();c.type="sine",c.frequency.value=t;const d=r.createGain();this.sustainEnv(d.gain,e,n,i*.8,.3),c.connect(d).connect(this.musicGain),c.start(e),c.stop(e+n+.05)}bowNote(t,e,n,i){const r=this.ctx,o=r.createOscillator();o.type="sawtooth",o.frequency.value=t;const a=r.createOscillator();a.frequency.value=5.2;const l=r.createGain();l.gain.value=5,a.connect(l).connect(o.detune),a.start(e),a.stop(e+n+.05);const c=r.createBiquadFilter();c.type="lowpass",c.Q.value=.7,c.frequency.value=Math.min(2600,Math.max(600,t*4));const d=r.createGain();this.sustainEnv(d.gain,e,n,i*.8,Math.min(.35,n*.3)),o.connect(c).connect(d).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}sustainEnv(t,e,n,i,r){const o=Math.min(r,n*.5),a=e+o+(n-o)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(i,e+o),t.setValueAtTime(i,a),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,i=.2,r=0){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(t,o),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),l.gain.setValueAtTime(i*this.volume,o),l.gain.exponentialRampToValueAtTime(.001,o+e),a.connect(l).connect(this.ctx.destination),a.start(o),a.stop(o+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const i=this.ctx.currentTime,r=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(r*t)),r),a=o.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=(Math.random()*2-1)*(1-u/a.length);const l=this.ctx.createBufferSource();l.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=e;const d=this.ctx.createGain();d.gain.value=n*this.volume,l.connect(c).connect(d).connect(this.ctx.destination),l.start(i)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const Kt=s=>document.getElementById(s),fh=s=>Kt(s).value,Ye=(s,t=!0)=>Kt(s).classList.toggle("hidden",!t),nv=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],Ll=()=>nv.forEach(s=>Ye(s,!1)),ro=new ev;let oe=B_(),Pt=null;document.addEventListener("click",()=>ro.resume(),{once:!0});document.addEventListener("touchstart",()=>ro.resume(),{once:!0});function go(){Ll(),Ye("screen-title"),Kt("best-score").textContent=tr()>0?`Best run: ${tr().toFixed(1)} days`:"";const s=Kt("worldlist");s.innerHTML="";const t=mo();t.length||(s.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const i=au(e.id),r=document.createElement("span");r.textContent=`${e.name} — seed “${e.seedStr}” — ${i?`day ${i.days}, survived ${(i.playSec/Pe).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>_o(e,i);const a=document.createElement("button");a.textContent="Export",a.onclick=()=>{i?lu(e,i):dt("Nothing saved for this world yet.")};const l=document.createElement("button");l.textContent="Delete",l.onclick=()=>{l.textContent==="Sure?"?(H_(e.id),go()):(l.textContent="Sure?",setTimeout(()=>l.textContent="Delete",2500))},n.append(r,o,a,l),s.appendChild(n)}}function _o(s,t){Ll(),Ye("cheats",!1),Kt("hud").classList.remove("hidden"),oe.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),Kt("btn-save").classList.toggle("hidden",s.id.startsWith("guest")),Kt("btn-exportworld").classList.toggle("hidden",s.id.startsWith("guest")),ro.resume(),Pt=new de(s,t,Kt("game-wrap"),oe,ro),globalThis.game=Pt,Pt.start(),t===null&&Pt.startTutorial()}function Pl(){Pt&&(Pt.saveNow(),Pt.stop()),Pt=null,delete globalThis.game,Kt("hud").classList.add("hidden"),go()}function Dl(s){Ll(),Ye(s)}function iv(){Pt&&(Pt.pauseSubmenu=null),Ye("screen-settings",!1),Ye("screen-instructions",!1),Ye("screen-catalog",!1),Pt?(Ye("ui-inventory",!1),Ye("ui-craft",!1),Ye("ui-cache",!1),Ye("screen-pause",!1),Pt.paused=!1,Pt.relock()):go()}function Ul(){Pt&&(Pt.pauseSubmenu=Pt.paused?"settings":null),Dl("screen-settings");const s=Kt("settings-body");s.innerHTML="";const t=(e,n,i,r)=>{const o=document.createElement("div");o.className="setting";const a=document.createElement("span");a.textContent=e;const l=document.createElement("div");l.className="seg";const c=[];for(const[d,u]of n){const f=document.createElement("button");f.type="button",f.textContent=d,String(u)===String(i)&&f.classList.add("on"),f.onclick=()=>{for(const h of c)h.classList.remove("on");f.classList.add("on"),r(u)},c.push(f),l.appendChild(f)}o.append(a,l),s.appendChild(o)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],oe.sens,e=>{oe.sens=e,_n()}),t("Invert Y",[["Off",!1],["On",!0]],oe.invertY,e=>{oe.invertY=e,_n()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],oe.volume,e=>{oe.volume=e,_n()}),t("Music",[["Off",!1],["On",!0]],oe.music,e=>{oe.music=e,_n()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],oe.fov,e=>{oe.fov=e,_n()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],oe.renderDist,e=>{oe.renderDist=e,_n()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],oe.quality,e=>{oe.quality=e,_n()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],oe.lighting,e=>{oe.lighting=e,_n()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],oe.units,e=>{oe.units=e,_n()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],oe.uiScale,e=>{oe.uiScale=e,_n()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],oe.fullscreen,e=>{oe.fullscreen=e,_n(),e?document.documentElement.requestFullscreen().catch(()=>{oe.fullscreen=!1,_n(),Ul()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),s.appendChild(e)}}function hu(s){document.documentElement.style.setProperty("--ui-scale",String(s))}function _n(){z_(oe),hu(oe.uiScale),Pt&&Pt.applySettings(oe)}let nl="items";function Nl(){Pt&&(Pt.pauseSubmenu=Pt.paused?"catalog":null),Dl("screen-catalog");for(const t of Array.from(Kt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===nl);const s=Kt("catalog-body");if(s.innerHTML="",nl==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,i,r,o)=>{const a=document.createElement("div");a.className="cat-card";const l=document.createElement("img");l.src=n,l.alt="";const c=document.createElement("div");c.innerHTML=`<b>${i}</b><div class="cat-meta">${r}</div><div class="cat-desc">${o}</div>`,a.append(l,c),t.append(a)};for(const n of Object.values(zt).sort((i,r)=>i.name.localeCompare(r.name)))e(ci(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of fi){if(n.id===0||n.name==="Air")continue;const i=Object.values(zt).find(o=>o.block===n.id),r=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(i?ci(i.id):V_(n.id),n.name,r,i?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}s.append(t)}else{const t=(e,n,i,r)=>{const o=document.createElement("div");o.className="cat-recipe";const a=document.createElement("img");a.src=e,a.alt="",a.style.width="36px",a.style.height="36px",a.style.imageRendering="pixelated",o.append(a,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${i}</b> <span class="needs">(${r})</span>`})),s.append(o)};for(const e of Qh){const n=Object.entries(e.needs).map(([i,r])=>`${r}× ${zt[i].name}`).join(" + ");t(ci(e.out),n,`${zt[e.out].name}${e.count>1?" ×"+e.count:""}`,e.bench?"Crafting Bench":"hands")}for(const e of tu)t(ci(e.out),`1× ${zt[e.in].name}`,zt[e.out].name,"Campfire, 1 fuel charge")}}for(const s of Array.from(Kt("catalog-tabs").querySelectorAll(".tab")))s.onclick=()=>{nl=s.dataset.tab,Nl()};const sv=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Metal Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 10 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],rv=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function uu(){Pt&&(Pt.pauseSubmenu=Pt.paused?"instructions":null),Dl("screen-instructions");const s=Kt("instr-body");s.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?rv:sv;for(const[n,i]of t){const r=document.createElement("div");r.innerHTML=`<b>${n}</b> — ${i}`,s.appendChild(r)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. The Ship Interior is always sealed: your body heat drifts back to 36.6 °C there. Outside, midday cooks you and night freezes you — shade, walls and doors change what you are exposed to. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, and Kangaroo Rats bolt — hunt one, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor and Armour go in the three Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it.",s.appendChild(e)}Kt("btn-create").onclick=()=>{const s=fh("seed-input").trim()||Math.random().toString(36).slice(2,10),t=fh("world-name").trim()||s,e=ru(t,s);_o(e,null)};Kt("btn-guest").onclick=()=>{const s=Math.random().toString(36).slice(2,10);_o({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:s,updated:Date.now()},null)};Kt("btn-import").onclick=()=>Kt("import-file").click();Kt("import-file").onchange=async()=>{const s=Kt("import-file").files?.[0];if(s)try{const t=await G_(s);dt("World imported."),_o(t,au(t.id))}catch(t){dt(`Import failed: ${t.message}`)}};Kt("btn-settings").onclick=Ul;Kt("btn-pause-settings").onclick=Ul;Kt("btn-instructions").onclick=uu;Kt("btn-pause-instructions").onclick=uu;Kt("btn-catalog").onclick=Nl;Kt("btn-catalog-title").onclick=Nl;for(const s of document.querySelectorAll(".close-btn"))s.onclick=()=>{if(Pt&&Pt.pauseSubmenu){Pt.closePauseSubmenu();return}Pt&&Pt.closeUI(),(!Pt||!(Pt.ui==="inv"&&Pt.temp))&&iv()};Kt("btn-resume").onclick=()=>{Pt&&(Pt.paused=!1,Ye("screen-pause",!1),Ye("cheats",!1),Pt.relock())};Kt("btn-save").onclick=()=>dt("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");Kt("btn-exportworld").onclick=()=>{Pt&&Pt.exportWorld()};Kt("btn-quit").onclick=()=>Pl();Kt("btn-cheats").onclick=()=>Ye("cheats",Kt("cheats").classList.contains("hidden"));const du=Kt("cheat-item");for(const[s,t]of Object.entries(zt).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=s,e.textContent=t.name,du.appendChild(e)}Kt("btn-cheat-add").onclick=()=>{if(!Pt)return;const s=du.value;Pt.inv.addItem(s,1)?dt("No room in your pack."):dt(`Added ${zt[s].name}.`)};for(const s of Array.from(Kt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))s.onclick=()=>{if(!Pt)return;if(s.dataset.speed!==void 0){Pt.speedMul=Number(s.dataset.speed),dt(`Player speed ×${s.dataset.speed}.`);return}if(s.dataset.immortal!==void 0){Pt.survival.invincible=s.dataset.immortal==="1",dt(`Immortality ${Pt.survival.invincible?"on":"off"}.`);return}const t=Number(s.dataset.frac);Pt.setClock(t),dt(`Clock set to ${s.textContent}.`)};Kt("btn-respawn").onclick=()=>{Pt&&Pt.respawn()};Kt("btn-death-title").onclick=()=>Pl();Kt("btn-win-continue").onclick=()=>{Pt&&(Pt.paused=!1,Ye("screen-win",!1),Pt.relock())};Kt("btn-win-title").onclick=()=>Pl();document.addEventListener("keydown",s=>{if(s.code==="Escape"&&!Kt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});hu(oe.uiScale);go();
