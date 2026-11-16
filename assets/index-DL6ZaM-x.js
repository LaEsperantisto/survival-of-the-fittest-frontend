(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="180",yd=0,Lc=1,Md=2,du=1,bd=2,Ii=3,ts=0,An=1,sn=2,Zi=0,Ys=1,Dc=2,kc=3,Uc=4,Sd=5,ps=100,wd=101,Ed=102,Td=103,Ad=104,Rd=200,Cd=201,Id=202,Pd=203,Ja=204,Qa=205,Ld=206,Dd=207,kd=208,Ud=209,Nd=210,Fd=211,Od=212,Bd=213,zd=214,tl=0,el=1,nl=2,Js=3,il=4,sl=5,rl=6,ol=7,Jl=0,Hd=1,Gd=2,Ji=0,Vd=1,Wd=2,qd=3,Xd=4,$d=5,Yd=6,Kd=7,fu=300,Qs=301,tr=302,al=303,ll=304,qo=306,cl=1e3,vs=1001,hl=1002,qn=1003,jd=1004,$r=1005,di=1006,ra=1007,xs=1008,xi=1009,pu=1010,mu=1011,Ar=1012,Ql=1013,bs=1014,Ni=1015,Ur=1016,tc=1017,ec=1018,Rr=1020,gu=35902,_u=35899,vu=1021,xu=1022,ai=1023,Cr=1026,Ir=1027,yu=1028,nc=1029,Mu=1030,ic=1031,sc=1033,Ro=33776,Co=33777,Io=33778,Po=33779,ul=35840,dl=35841,fl=35842,pl=35843,ml=36196,gl=37492,_l=37496,vl=37808,xl=37809,yl=37810,Ml=37811,bl=37812,Sl=37813,wl=37814,El=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Il=37820,Pl=37821,Ll=36492,Dl=36494,kl=36495,Ul=36283,Nl=36284,Fl=36285,Ol=36286,Zd=3200,Jd=3201,bu=0,Qd=1,Ki="",kn="srgb",er="srgb-linear",No="linear",xe="srgb",Ls=7680,Nc=519,tf=512,ef=513,nf=514,Su=515,sf=516,rf=517,of=518,af=519,Fc=35044,Oc="300 es",fi=2e3,Fo=2001;class sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let i=0,o=r.length;i<o;i++)r[i].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const Ks=Math.PI/180,Pr=180/Math.PI;function rr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function rc(s,t){return(s%t+t)%t}function lf(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function cf(s,t,e){return s!==t?(e-s)/(t-s):0}function Sr(s,t,e){return(1-e)*s+e*t}function hf(s,t,e,n){return Sr(s,t,1-Math.exp(-e*n))}function uf(s,t=1){return t-Math.abs(rc(s,t*2)-t)}function df(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ff(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function pf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function mf(s,t){return s+Math.random()*(t-s)}function gf(s){return s*(.5-Math.random())}function _f(s){s!==void 0&&(Bc=s);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vf(s){return s*Ks}function xf(s){return s*Pr}function yf(s){return(s&s-1)===0&&s!==0}function Mf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sf(s,t,e,n,r){const i=Math.cos,o=Math.sin,l=i(e/2),h=o(e/2),a=i((t+n)/2),c=o((t+n)/2),u=i((t-n)/2),p=o((t-n)/2),m=i((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":s.set(l*c,h*u,h*p,l*a);break;case"YZY":s.set(h*p,l*c,h*u,l*a);break;case"ZXZ":s.set(h*u,h*p,l*c,l*a);break;case"XZX":s.set(l*c,h*v,h*m,l*a);break;case"YXY":s.set(h*m,l*c,h*v,l*a);break;case"ZYZ":s.set(h*v,h*m,l*c,l*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pi={DEG2RAD:Ks,RAD2DEG:Pr,generateUUID:rr,clamp:re,euclideanModulo:rc,mapLinear:lf,inverseLerp:cf,lerp:Sr,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:_f,degToRad:vf,radToDeg:xf,isPowerOfTwo:yf,ceilPowerOfTwo:Mf,floorPowerOfTwo:bf,setQuaternionFromProperEuler:Sf,normalize:Mn,denormalize:Xs};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),i=this.x-t.x,o=this.y-t.y;return this.x=i*n-o*r+t.x,this.y=i*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,i,o,l){let h=n[r+0],a=n[r+1],c=n[r+2],u=n[r+3];const p=i[o+0],m=i[o+1],v=i[o+2],y=i[o+3];if(l===0){t[e+0]=h,t[e+1]=a,t[e+2]=c,t[e+3]=u;return}if(l===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=y;return}if(u!==y||h!==p||a!==m||c!==v){let x=1-l;const _=h*p+a*m+c*v+u*y,R=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const b=Math.sqrt(E),I=Math.atan2(b,_*R);x=Math.sin(x*I)/b,l=Math.sin(l*I)/b}const S=l*R;if(h=h*x+p*S,a=a*x+m*S,c=c*x+v*S,u=u*x+y*S,x===1-l){const b=1/Math.sqrt(h*h+a*a+c*c+u*u);h*=b,a*=b,c*=b,u*=b}}t[e]=h,t[e+1]=a,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,i,o){const l=n[r],h=n[r+1],a=n[r+2],c=n[r+3],u=i[o],p=i[o+1],m=i[o+2],v=i[o+3];return t[e]=l*v+c*u+h*m-a*p,t[e+1]=h*v+c*p+a*u-l*m,t[e+2]=a*v+c*m+l*p-h*u,t[e+3]=c*v-l*u-h*p-a*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,i=t._z,o=t._order,l=Math.cos,h=Math.sin,a=l(n/2),c=l(r/2),u=l(i/2),p=h(n/2),m=h(r/2),v=h(i/2);switch(o){case"XYZ":this._x=p*c*u+a*m*v,this._y=a*m*u-p*c*v,this._z=a*c*v+p*m*u,this._w=a*c*u-p*m*v;break;case"YXZ":this._x=p*c*u+a*m*v,this._y=a*m*u-p*c*v,this._z=a*c*v-p*m*u,this._w=a*c*u+p*m*v;break;case"ZXY":this._x=p*c*u-a*m*v,this._y=a*m*u+p*c*v,this._z=a*c*v+p*m*u,this._w=a*c*u-p*m*v;break;case"ZYX":this._x=p*c*u-a*m*v,this._y=a*m*u+p*c*v,this._z=a*c*v-p*m*u,this._w=a*c*u+p*m*v;break;case"YZX":this._x=p*c*u+a*m*v,this._y=a*m*u+p*c*v,this._z=a*c*v-p*m*u,this._w=a*c*u-p*m*v;break;case"XZY":this._x=p*c*u-a*m*v,this._y=a*m*u-p*c*v,this._z=a*c*v+p*m*u,this._w=a*c*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],i=e[8],o=e[1],l=e[5],h=e[9],a=e[2],c=e[6],u=e[10],p=n+l+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(c-h)*m,this._y=(i-a)*m,this._z=(o-r)*m}else if(n>l&&n>u){const m=2*Math.sqrt(1+n-l-u);this._w=(c-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(i+a)/m}else if(l>u){const m=2*Math.sqrt(1+l-n-u);this._w=(i-a)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+u-n-l);this._w=(o-r)/m,this._x=(i+a)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,i=t._z,o=t._w,l=e._x,h=e._y,a=e._z,c=e._w;return this._x=n*c+o*l+r*a-i*h,this._y=r*c+o*h+i*l-n*a,this._z=i*c+o*a+n*h-r*l,this._w=o*c-n*l-r*h-i*a,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,i=this._z,o=this._w;let l=o*t._w+n*t._x+r*t._y+i*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=r,this._z=i,this;const h=1-l*l;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*i+e*this._z,this.normalize(),this}const a=Math.sqrt(h),c=Math.atan2(a,l),u=Math.sin((1-e)*c)/a,p=Math.sin(e*c)/a;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=i*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*r,this.y=i[1]*e+i[4]*n+i[7]*r,this.z=i[2]*e+i[5]*n+i[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=t.elements,o=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*o,this.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*o,this.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,i=t.x,o=t.y,l=t.z,h=t.w,a=2*(o*r-l*n),c=2*(l*e-i*r),u=2*(i*n-o*e);return this.x=e+h*a+o*u-l*c,this.y=n+h*c+l*a-i*u,this.z=r+h*u+i*c-o*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*r,this.y=i[1]*e+i[5]*n+i[9]*r,this.z=i[2]*e+i[6]*n+i[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,i=t.z,o=e.x,l=e.y,h=e.z;return this.x=r*h-i*l,this.y=i*o-n*h,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new F,zc=new Nr;class jt{constructor(t,e,n,r,i,o,l,h,a){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,o,l,h,a)}set(t,e,n,r,i,o,l,h,a){const c=this.elements;return c[0]=t,c[1]=r,c[2]=l,c[3]=e,c[4]=i,c[5]=h,c[6]=n,c[7]=o,c[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,o=n[0],l=n[3],h=n[6],a=n[1],c=n[4],u=n[7],p=n[2],m=n[5],v=n[8],y=r[0],x=r[3],_=r[6],R=r[1],E=r[4],S=r[7],b=r[2],I=r[5],A=r[8];return i[0]=o*y+l*R+h*b,i[3]=o*x+l*E+h*I,i[6]=o*_+l*S+h*A,i[1]=a*y+c*R+u*b,i[4]=a*x+c*E+u*I,i[7]=a*_+c*S+u*A,i[2]=p*y+m*R+v*b,i[5]=p*x+m*E+v*I,i[8]=p*_+m*S+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8];return e*o*c-e*l*a-n*i*c+n*l*h+r*i*a-r*o*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8],u=c*o-l*a,p=l*h-c*i,m=a*i-o*h,v=e*u+n*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=u*y,t[1]=(r*a-c*n)*y,t[2]=(l*n-r*o)*y,t[3]=p*y,t[4]=(c*e-r*h)*y,t[5]=(r*i-l*e)*y,t[6]=m*y,t[7]=(n*h-a*e)*y,t[8]=(o*e-n*i)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,i,o,l){const h=Math.cos(i),a=Math.sin(i);return this.set(n*h,n*a,-n*(h*o+a*l)+o+t,-r*a,r*h,-r*(-a*o+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new jt;function wu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Oo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wf(){const s=Oo("canvas");return s.style.display="block",s}const Hc={};function Lr(s){s in Hc||(Hc[s]=!0,console.warn(s))}function Ef(s,t,e){return new Promise(function(n,r){function i(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}const Gc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tf(){const s={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,i,o){return this.enabled===!1||i===o||!i||!o||(this.spaces[i].transfer===xe&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[i].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[i].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(r.r=js(r.r),r.g=js(r.g),r.b=js(r.b))),r},workingToColorSpace:function(r,i){return this.convert(r,this.workingColorSpace,i)},colorSpaceToWorking:function(r,i){return this.convert(r,i,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?No:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,i=this.workingColorSpace){return r.fromArray(this.spaces[i].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,i,o){return r.copy(this.spaces[i].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,i){return Lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,i)},toWorkingColorSpace:function(r,i){return Lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,i)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[er]:{primaries:t,whitePoint:n,transfer:No,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),s}const fe=Tf();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class Af{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Oo("canvas")),Ds.width=t.width,Ds.height=t.height;const r=Ds.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),i=r.data;for(let o=0;o<i.length;o++)i[o]=Bi(i[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rf=0;class oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?i.push(la(r[o].image)):i.push(la(r[o]))}else i=la(r);n.url=i}return e||(t.images[this.uuid]=n),n}}function la(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Af.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;const ca=new F;class Rn extends sr{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,n=vs,r=vs,i=di,o=xs,l=ai,h=xi,a=Rn.DEFAULT_ANISOTROPY,c=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=rr(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cl:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cl:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=fu;Rn.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*i,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*i,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*i,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,i;const h=t.elements,a=h[0],c=h[4],u=h[8],p=h[1],m=h[5],v=h[9],y=h[2],x=h[6],_=h[10];if(Math.abs(c-p)<.01&&Math.abs(u-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(c+p)<.1&&Math.abs(u+y)<.1&&Math.abs(v+x)<.1&&Math.abs(a+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(a+1)/2,S=(m+1)/2,b=(_+1)/2,I=(c+p)/4,A=(u+y)/4,f=(v+x)/4;return E>S&&E>b?E<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(E),r=I/n,i=A/n):S>b?S<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(S),n=I/r,i=f/r):b<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(b),n=A/i,r=f/i),this.set(n,r,i,e),this}let R=Math.sqrt((x-v)*(x-v)+(u-y)*(u-y)+(p-c)*(p-c));return Math.abs(R)<.001&&(R=1),this.x=(x-v)/R,this.y=(u-y)/R,this.z=(p-c)/R,this.w=Math.acos((a+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends sr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const r={width:t,height:e,depth:n.depth},i=new Rn(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new oc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends If{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eu extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=i.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(i,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const r=t.children;for(let i=0,o=r.length;i<o;i++)this.expandByObject(r[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Kr.subVectors(this.max,ur),ks.subVectors(t.a,ur),Us.subVectors(t.b,ur),Ns.subVectors(t.c,ur),Gi.subVectors(Us,ks),Vi.subVectors(Ns,Us),rs.subVectors(ks,Ns);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-rs.z,rs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,rs.z,0,-rs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-rs.y,rs.x,0];return!ha(e,ks,Us,Ns,Kr)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,ks,Us,Ns,Kr))?!1:(jr.crossVectors(Gi,Vi),e=[jr.x,jr.y,jr.z],ha(e,ks,Us,Ns,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ei=[new F,new F,new F,new F,new F,new F,new F,new F],ni=new F,Yr=new Fr,ks=new F,Us=new F,Ns=new F,Gi=new F,Vi=new F,rs=new F,ur=new F,Kr=new F,jr=new F,os=new F;function ha(s,t,e,n,r){for(let i=0,o=s.length-3;i<=o;i+=3){os.fromArray(s,i);const l=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),h=t.dot(os),a=e.dot(os),c=n.dot(os);if(Math.max(-Math.max(h,a,c),Math.min(h,a,c))>l)return!1}return!0}const Lf=new Fr,dr=new F,ua=new F;class Or{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let r=0;for(let i=0,o=t.length;i<o;i++)r=Math.max(r,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(dr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(ua)),this.expandByPoint(dr.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ti=new F,da=new F,Zr=new F,Wi=new F,fa=new F,Jr=new F,pa=new F;class ac{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){da.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(da);const i=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),l=Wi.dot(this.direction),h=-Wi.dot(Zr),a=Wi.lengthSq(),c=Math.abs(1-o*o);let u,p,m,v;if(c>0)if(u=o*h-l,p=o*l-h,v=i*c,u>=0)if(p>=-v)if(p<=v){const y=1/c;u*=y,p*=y,m=u*(u+o*p+2*l)+p*(o*u+p+2*h)+a}else p=i,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*h)+a;else p=-i,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*h)+a;else p<=-v?(u=Math.max(0,-(-o*i+l)),p=u>0?-i:Math.min(Math.max(-i,-h),i),m=-u*u+p*(p+2*h)+a):p<=v?(u=0,p=Math.min(Math.max(-i,-h),i),m=p*(p+2*h)+a):(u=Math.max(0,-(o*i+l)),p=u>0?i:Math.min(Math.max(-i,-h),i),m=-u*u+p*(p+2*h)+a);else p=o>0?-i:i,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*h)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(da).addScaledVector(Zr,p),m}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,i=t.radius*t.radius;if(r>i)return null;const o=Math.sqrt(i-r),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,i,o,l,h;const a=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,p=this.origin;return a>=0?(n=(t.min.x-p.x)*a,r=(t.max.x-p.x)*a):(n=(t.max.x-p.x)*a,r=(t.min.x-p.x)*a),c>=0?(i=(t.min.y-p.y)*c,o=(t.max.y-p.y)*c):(i=(t.max.y-p.y)*c,o=(t.min.y-p.y)*c),n>o||i>r||((i>n||isNaN(n))&&(n=i),(o<r||isNaN(r))&&(r=o),u>=0?(l=(t.min.z-p.z)*u,h=(t.max.z-p.z)*u):(l=(t.max.z-p.z)*u,h=(t.min.z-p.z)*u),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,r,i){fa.subVectors(e,t),Jr.subVectors(n,t),pa.crossVectors(fa,Jr);let o=this.direction.dot(pa),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Wi.subVectors(this.origin,t);const h=l*this.direction.dot(Jr.crossVectors(Wi,Jr));if(h<0)return null;const a=l*this.direction.dot(fa.cross(Wi));if(a<0||h+a>o)return null;const c=-l*Wi.dot(pa);return c<0?null:this.at(c/o,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,r,i,o,l,h,a,c,u,p,m,v,y,x){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,o,l,h,a,c,u,p,m,v,y,x)}set(t,e,n,r,i,o,l,h,a,c,u,p,m,v,y,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=i,_[5]=o,_[9]=l,_[13]=h,_[2]=a,_[6]=c,_[10]=u,_[14]=p,_[3]=m,_[7]=v,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Fs.setFromMatrixColumn(t,0).length(),i=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,i=t.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(r),a=Math.sin(r),c=Math.cos(i),u=Math.sin(i);if(t.order==="XYZ"){const p=o*c,m=o*u,v=l*c,y=l*u;e[0]=h*c,e[4]=-h*u,e[8]=a,e[1]=m+v*a,e[5]=p-y*a,e[9]=-l*h,e[2]=y-p*a,e[6]=v+m*a,e[10]=o*h}else if(t.order==="YXZ"){const p=h*c,m=h*u,v=a*c,y=a*u;e[0]=p+y*l,e[4]=v*l-m,e[8]=o*a,e[1]=o*u,e[5]=o*c,e[9]=-l,e[2]=m*l-v,e[6]=y+p*l,e[10]=o*h}else if(t.order==="ZXY"){const p=h*c,m=h*u,v=a*c,y=a*u;e[0]=p-y*l,e[4]=-o*u,e[8]=v+m*l,e[1]=m+v*l,e[5]=o*c,e[9]=y-p*l,e[2]=-o*a,e[6]=l,e[10]=o*h}else if(t.order==="ZYX"){const p=o*c,m=o*u,v=l*c,y=l*u;e[0]=h*c,e[4]=v*a-m,e[8]=p*a+y,e[1]=h*u,e[5]=y*a+p,e[9]=m*a-v,e[2]=-a,e[6]=l*h,e[10]=o*h}else if(t.order==="YZX"){const p=o*h,m=o*a,v=l*h,y=l*a;e[0]=h*c,e[4]=y-p*u,e[8]=v*u+m,e[1]=u,e[5]=o*c,e[9]=-l*c,e[2]=-a*c,e[6]=m*u+v,e[10]=p-y*u}else if(t.order==="XZY"){const p=o*h,m=o*a,v=l*h,y=l*a;e[0]=h*c,e[4]=-u,e[8]=a*c,e[1]=p*u+y,e[5]=o*c,e[9]=m*u-v,e[2]=v*u-m,e[6]=l*c,e[10]=y*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,kf)}lookAt(t,e,n){const r=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),qi.crossVectors(n,Bn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),qi.crossVectors(n,Bn)),qi.normalize(),Qr.crossVectors(Bn,qi),r[0]=qi.x,r[4]=Qr.x,r[8]=Bn.x,r[1]=qi.y,r[5]=Qr.y,r[9]=Bn.y,r[2]=qi.z,r[6]=Qr.z,r[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,o=n[0],l=n[4],h=n[8],a=n[12],c=n[1],u=n[5],p=n[9],m=n[13],v=n[2],y=n[6],x=n[10],_=n[14],R=n[3],E=n[7],S=n[11],b=n[15],I=r[0],A=r[4],f=r[8],d=r[12],g=r[1],M=r[5],C=r[9],L=r[13],k=r[2],N=r[6],H=r[10],Y=r[14],V=r[3],J=r[7],tt=r[11],vt=r[15];return i[0]=o*I+l*g+h*k+a*V,i[4]=o*A+l*M+h*N+a*J,i[8]=o*f+l*C+h*H+a*tt,i[12]=o*d+l*L+h*Y+a*vt,i[1]=c*I+u*g+p*k+m*V,i[5]=c*A+u*M+p*N+m*J,i[9]=c*f+u*C+p*H+m*tt,i[13]=c*d+u*L+p*Y+m*vt,i[2]=v*I+y*g+x*k+_*V,i[6]=v*A+y*M+x*N+_*J,i[10]=v*f+y*C+x*H+_*tt,i[14]=v*d+y*L+x*Y+_*vt,i[3]=R*I+E*g+S*k+b*V,i[7]=R*A+E*M+S*N+b*J,i[11]=R*f+E*C+S*H+b*tt,i[15]=R*d+E*L+S*Y+b*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],i=t[12],o=t[1],l=t[5],h=t[9],a=t[13],c=t[2],u=t[6],p=t[10],m=t[14],v=t[3],y=t[7],x=t[11],_=t[15];return v*(+i*h*u-r*a*u-i*l*p+n*a*p+r*l*m-n*h*m)+y*(+e*h*m-e*a*p+i*o*p-r*o*m+r*a*c-i*h*c)+x*(+e*a*u-e*l*m-i*o*u+n*o*m+i*l*c-n*a*c)+_*(-r*l*c-e*h*u+e*l*p+r*o*u-n*o*p+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8],u=t[9],p=t[10],m=t[11],v=t[12],y=t[13],x=t[14],_=t[15],R=u*x*a-y*p*a+y*h*m-l*x*m-u*h*_+l*p*_,E=v*p*a-c*x*a-v*h*m+o*x*m+c*h*_-o*p*_,S=c*y*a-v*u*a+v*l*m-o*y*m-c*l*_+o*u*_,b=v*u*h-c*y*h-v*l*p+o*y*p+c*l*x-o*u*x,I=e*R+n*E+r*S+i*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/I;return t[0]=R*A,t[1]=(y*p*i-u*x*i-y*r*m+n*x*m+u*r*_-n*p*_)*A,t[2]=(l*x*i-y*h*i+y*r*a-n*x*a-l*r*_+n*h*_)*A,t[3]=(u*h*i-l*p*i-u*r*a+n*p*a+l*r*m-n*h*m)*A,t[4]=E*A,t[5]=(c*x*i-v*p*i+v*r*m-e*x*m-c*r*_+e*p*_)*A,t[6]=(v*h*i-o*x*i-v*r*a+e*x*a+o*r*_-e*h*_)*A,t[7]=(o*p*i-c*h*i+c*r*a-e*p*a-o*r*m+e*h*m)*A,t[8]=S*A,t[9]=(v*u*i-c*y*i-v*n*m+e*y*m+c*n*_-e*u*_)*A,t[10]=(o*y*i-v*l*i+v*n*a-e*y*a-o*n*_+e*l*_)*A,t[11]=(c*l*i-o*u*i-c*n*a+e*u*a+o*n*m-e*l*m)*A,t[12]=b*A,t[13]=(c*y*r-v*u*r+v*n*p-e*y*p-c*n*x+e*u*x)*A,t[14]=(v*l*r-o*y*r-v*n*h+e*y*h+o*n*x-e*l*x)*A,t[15]=(o*u*r-c*l*r+c*n*h-e*u*h-o*n*p+e*l*p)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,i=t.z;return e[0]*=n,e[4]*=r,e[8]*=i,e[1]*=n,e[5]*=r,e[9]*=i,e[2]*=n,e[6]*=r,e[10]*=i,e[3]*=n,e[7]*=r,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),i=1-n,o=t.x,l=t.y,h=t.z,a=i*o,c=i*l;return this.set(a*o+n,a*l-r*h,a*h+r*l,0,a*l+r*h,c*l+n,c*h-r*o,0,a*h-r*l,c*h+r*o,i*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,i,o){return this.set(1,n,i,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,i=e._x,o=e._y,l=e._z,h=e._w,a=i+i,c=o+o,u=l+l,p=i*a,m=i*c,v=i*u,y=o*c,x=o*u,_=l*u,R=h*a,E=h*c,S=h*u,b=n.x,I=n.y,A=n.z;return r[0]=(1-(y+_))*b,r[1]=(m+S)*b,r[2]=(v-E)*b,r[3]=0,r[4]=(m-S)*I,r[5]=(1-(p+_))*I,r[6]=(x+R)*I,r[7]=0,r[8]=(v+E)*A,r[9]=(x-R)*A,r[10]=(1-(p+y))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let i=Fs.set(r[0],r[1],r[2]).length();const o=Fs.set(r[4],r[5],r[6]).length(),l=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),t.x=r[12],t.y=r[13],t.z=r[14],ii.copy(this);const a=1/i,c=1/o,u=1/l;return ii.elements[0]*=a,ii.elements[1]*=a,ii.elements[2]*=a,ii.elements[4]*=c,ii.elements[5]*=c,ii.elements[6]*=c,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),n.x=i,n.y=o,n.z=l,this}makePerspective(t,e,n,r,i,o,l=fi,h=!1){const a=this.elements,c=2*i/(e-t),u=2*i/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let v,y;if(h)v=i/(o-i),y=o*i/(o-i);else if(l===fi)v=-(o+i)/(o-i),y=-2*o*i/(o-i);else if(l===Fo)v=-o/(o-i),y=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=p,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,r,i,o,l=fi,h=!1){const a=this.elements,c=2/(e-t),u=2/(n-r),p=-(e+t)/(e-t),m=-(n+r)/(n-r);let v,y;if(h)v=1/(o-i),y=o/(o-i);else if(l===fi)v=-2/(o-i),y=-(o+i)/(o-i);else if(l===Fo)v=-1/(o-i),y=-i/(o-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=0,a[12]=p,a[1]=0,a[5]=u,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fs=new F,ii=new Ce,Df=new F(0,0,0),kf=new F(1,1,1),qi=new F,Qr=new F,Bn=new F,Wc=new Ce,qc=new Nr;class yi{constructor(t=0,e=0,n=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,i=r[0],o=r[4],l=r[8],h=r[1],a=r[5],c=r[9],u=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(p,a),this._z=0);break;case"YXZ":this._x=Math.asin(-re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(h,a)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(h,i));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,i)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,a),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,a),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uf=0;const Xc=new F,Os=new Nr,Ai=new Ce,to=new F,fr=new F,Nf=new F,Ff=new Nr,$c=new F(1,0,0),Yc=new F(0,1,0),Kc=new F(0,0,1),jc={type:"added"},Of={type:"removed"},Bs={type:"childadded",child:null},ma={type:"childremoved",child:null};class Je extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new F,e=new yi,n=new Nr,r=new F(1,1,1);function i(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new jt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(fr,to,this.up):Ai.lookAt(to,fr,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(Ai),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let a=0,c=h.length;a<c;a++){const u=h[a];i(t.shapes,u)}else i(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,a=this.material.length;h<a;h++)l.push(i(t.materials,this.material[h]));r.material=l}else r.material=i(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(i(t.animations,h))}}if(e){const l=o(t.geometries),h=o(t.materials),a=o(t.textures),c=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),v=o(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),a.length>0&&(n.textures=a),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(l){const h=[];for(const a in l){const c=l[a];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Je.DEFAULT_UP=new F(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new F,Ri=new F,ga=new F,Ci=new F,zs=new F,Hs=new F,Zc=new F,_a=new F,va=new F,xa=new F,ya=new ye,Ma=new ye,ba=new ye;class Qn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),si.subVectors(t,e),r.cross(si);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(t,e,n,r,i){si.subVectors(r,e),Ri.subVectors(n,e),ga.subVectors(t,e);const o=si.dot(si),l=si.dot(Ri),h=si.dot(ga),a=Ri.dot(Ri),c=Ri.dot(ga),u=o*a-l*l;if(u===0)return i.set(0,0,0),null;const p=1/u,m=(a*h-l*c)*p,v=(o*c-l*h)*p;return i.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,r,i,o,l,h){return this.getBarycoord(t,e,n,r,Ci)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(i,Ci.x),h.addScaledVector(o,Ci.y),h.addScaledVector(l,Ci.z),h)}static getInterpolatedAttribute(t,e,n,r,i,o){return ya.setScalar(0),Ma.setScalar(0),ba.setScalar(0),ya.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ya,i.x),o.addScaledVector(Ma,i.y),o.addScaledVector(ba,i.z),o}static isFrontFacing(t,e,n,r){return si.subVectors(n,e),Ri.subVectors(t,e),si.cross(Ri).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),si.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,i){return Qn.getInterpolation(t,this.a,this.b,this.c,e,n,r,i)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,i=this.c;let o,l;zs.subVectors(r,n),Hs.subVectors(i,n),_a.subVectors(t,n);const h=zs.dot(_a),a=Hs.dot(_a);if(h<=0&&a<=0)return e.copy(n);va.subVectors(t,r);const c=zs.dot(va),u=Hs.dot(va);if(c>=0&&u<=c)return e.copy(r);const p=h*u-c*a;if(p<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(n).addScaledVector(zs,o);xa.subVectors(t,i);const m=zs.dot(xa),v=Hs.dot(xa);if(v>=0&&m<=v)return e.copy(i);const y=m*a-h*v;if(y<=0&&a>=0&&v<=0)return l=a/(a-v),e.copy(n).addScaledVector(Hs,l);const x=c*v-m*u;if(x<=0&&u-c>=0&&m-v>=0)return Zc.subVectors(i,r),l=(u-c)/(u-c+(m-v)),e.copy(r).addScaledVector(Zc,l);const _=1/(x+y+p);return o=y*_,l=p*_,e.copy(n).addScaledVector(zs,o).addScaledVector(Hs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Sa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=rc(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,o=2*n-i;this.r=Sa(o,i,t+1/3),this.g=Sa(o,i,t),this.b=Sa(o,i,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=kn){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=r[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){const n=Au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return fe.workingToColorSpace(pn.copy(this),t),Math.round(re(pn.r*255,0,255))*65536+Math.round(re(pn.g*255,0,255))*256+Math.round(re(pn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,i=pn.b,o=Math.max(n,r,i),l=Math.min(n,r,i);let h,a;const c=(l+o)/2;if(l===o)h=0,a=0;else{const u=o-l;switch(a=c<=.5?u/(o+l):u/(2-o-l),o){case n:h=(r-i)/u+(r<i?6:0);break;case r:h=(i-n)/u+2;break;case i:h=(n-r)/u+4;break}h/=6}return t.h=h,t.s=a,t.l=c,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=kn){fe.workingToColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,r=pn.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(eo);const n=Sr(Xi.h,eo.h,e),r=Sr(Xi.s,eo.s,e),i=Sr(Xi.l,eo.l,e);return this.setHSL(n,r,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*r,this.g=i[1]*e+i[4]*n+i[7]*r,this.b=i[2]*e+i[5]*n+i[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Gt;Gt.NAMES=Au;let Bf=0;class Es extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ys,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const o=[];for(const l in i){const h=i[l];delete h.metadata,o.push(h)}return o}if(e){const i=r(t.textures),o=r(t.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Li extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new F,no=new ce;let zf=0;class _i{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),r=Mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,i){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),r=Mn(r,this.array),i=Mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class Ru extends _i{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cu extends _i{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends _i{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const jn=new Ce,wa=new Je,Gs=new F,zn=new Fr,pr=new Fr,nn=new F;class hn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?Cu:Ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new jt().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,i=t.length;r<i;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const i=t[r];e.setXYZ(r,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const i=e[n];zn.setFromBufferAttribute(i),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const l=e[i];pr.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(zn.min,pr.min),zn.expandByPoint(nn),nn.addVectors(zn.max,pr.max),zn.expandByPoint(nn)):(zn.expandByPoint(pr.min),zn.expandByPoint(pr.max))}zn.getCenter(n);let r=0;for(let i=0,o=t.count;i<o;i++)nn.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(nn));if(e)for(let i=0,o=e.length;i<o;i++){const l=e[i],h=this.morphTargetsRelative;for(let a=0,c=l.count;a<c;a++)nn.fromBufferAttribute(l,a),h&&(Gs.fromBufferAttribute(t,a),nn.add(Gs)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],h=[];for(let f=0;f<n.count;f++)l[f]=new F,h[f]=new F;const a=new F,c=new F,u=new F,p=new ce,m=new ce,v=new ce,y=new F,x=new F;function _(f,d,g){a.fromBufferAttribute(n,f),c.fromBufferAttribute(n,d),u.fromBufferAttribute(n,g),p.fromBufferAttribute(i,f),m.fromBufferAttribute(i,d),v.fromBufferAttribute(i,g),c.sub(a),u.sub(a),m.sub(p),v.sub(p);const M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(M),x.copy(u).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(M),l[f].add(y),l[d].add(y),l[g].add(y),h[f].add(x),h[d].add(x),h[g].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let f=0,d=R.length;f<d;++f){const g=R[f],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const E=new F,S=new F,b=new F,I=new F;function A(f){b.fromBufferAttribute(r,f),I.copy(b);const d=l[f];E.copy(d),E.sub(b.multiplyScalar(b.dot(d))).normalize(),S.crossVectors(I,d);const M=S.dot(h[f])<0?-1:1;o.setXYZW(f,E.x,E.y,E.z,M)}for(let f=0,d=R.length;f<d;++f){const g=R[f],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new F,i=new F,o=new F,l=new F,h=new F,a=new F,c=new F,u=new F;if(t)for(let p=0,m=t.count;p<m;p+=3){const v=t.getX(p+0),y=t.getX(p+1),x=t.getX(p+2);r.fromBufferAttribute(e,v),i.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),c.subVectors(o,i),u.subVectors(r,i),c.cross(u),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),l.add(c),h.add(c),a.add(c),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(x,a.x,a.y,a.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),i.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),c.subVectors(o,i),u.subVectors(r,i),c.cross(u),n.setXYZ(p+0,c.x,c.y,c.z),n.setXYZ(p+1,c.x,c.y,c.z),n.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(l,h){const a=l.array,c=l.itemSize,u=l.normalized,p=new a.constructor(h.length*c);let m=0,v=0;for(let y=0,x=h.length;y<x;y++){l.isInterleavedBufferAttribute?m=h[y]*l.data.stride+l.offset:m=h[y]*c;for(let _=0;_<c;_++)p[v++]=a[m++]}return new _i(p,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],a=t(h,n);e.setAttribute(l,a)}const i=this.morphAttributes;for(const l in i){const h=[],a=i[l];for(let c=0,u=a.length;c<u;c++){const p=a[c],m=t(p,n);h.push(m)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const a=o[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const a in h)h[a]!==void 0&&(t[a]=h[a]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const a=n[h];t.data.attributes[h]=a.toJSON(t.data)}const r={};let i=!1;for(const h in this.morphAttributes){const a=this.morphAttributes[h],c=[];for(let u=0,p=a.length;u<p;u++){const m=a[u];c.push(m.toJSON(t.data))}c.length>0&&(r[h]=c,i=!0)}i&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const a in r){const c=r[a];this.setAttribute(a,c.clone(e))}const i=t.morphAttributes;for(const a in i){const c=[],u=i[a];for(let p=0,m=u.length;p<m;p++)c.push(u[p].clone(e));this.morphAttributes[a]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new Ce,as=new ac,io=new Or,Qc=new F,so=new F,ro=new F,oo=new F,Ea=new F,ao=new F,th=new F,lo=new F;class $e extends Je{constructor(t=new hn,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(i&&l){ao.set(0,0,0);for(let h=0,a=i.length;h<a;h++){const c=l[h],u=i[h];c!==0&&(Ea.fromBufferAttribute(u,t),o?ao.addScaledVector(Ea,c):ao.addScaledVector(Ea.sub(e),c))}e.add(ao)}return e}raycast(t,e){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),as.copy(t.ray).recast(t.near),!(io.containsPoint(as.origin)===!1&&(as.intersectSphere(io,Qc)===null||as.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(Jc.copy(i).invert(),as.copy(t.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let r;const i=this.geometry,o=this.material,l=i.index,h=i.attributes.position,a=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,p=i.groups,m=i.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,y=p.length;v<y;v++){const x=p[v],_=o[x.materialIndex],R=Math.max(x.start,m.start),E=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=R,b=E;S<b;S+=3){const I=l.getX(S),A=l.getX(S+1),f=l.getX(S+2);r=co(this,_,t,n,a,c,u,I,A,f),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const R=l.getX(x),E=l.getX(x+1),S=l.getX(x+2);r=co(this,o,t,n,a,c,u,R,E,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let v=0,y=p.length;v<y;v++){const x=p[v],_=o[x.materialIndex],R=Math.max(x.start,m.start),E=Math.min(h.count,Math.min(x.start+x.count,m.start+m.count));for(let S=R,b=E;S<b;S+=3){const I=S,A=S+1,f=S+2;r=co(this,_,t,n,a,c,u,I,A,f),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const R=x,E=x+1,S=x+2;r=co(this,o,t,n,a,c,u,R,E,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function Gf(s,t,e,n,r,i,o,l){let h;if(t.side===An?h=n.intersectTriangle(o,i,r,!0,l):h=n.intersectTriangle(r,i,o,t.side===ts,l),h===null)return null;lo.copy(l),lo.applyMatrix4(s.matrixWorld);const a=e.ray.origin.distanceTo(lo);return a<e.near||a>e.far?null:{distance:a,point:lo.clone(),object:s}}function co(s,t,e,n,r,i,o,l,h,a){s.getVertexPosition(l,so),s.getVertexPosition(h,ro),s.getVertexPosition(a,oo);const c=Gf(s,t,e,n,so,ro,oo,th);if(c){const u=new F;Qn.getBarycoord(th,so,ro,oo,u),r&&(c.uv=Qn.getInterpolatedAttribute(r,l,h,a,u,new ce)),i&&(c.uv1=Qn.getInterpolatedAttribute(i,l,h,a,u,new ce)),o&&(c.normal=Qn.getInterpolatedAttribute(o,l,h,a,u,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const p={a:l,b:h,c:a,normal:new F,materialIndex:0};Qn.getNormal(so,ro,oo,p.normal),c.face=p,c.barycoord=u}return c}class mi extends hn{constructor(t=1,e=1,n=1,r=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:i,depthSegments:o};const l=this;r=Math.floor(r),i=Math.floor(i),o=Math.floor(o);const h=[],a=[],c=[],u=[];let p=0,m=0;v("z","y","x",-1,-1,n,e,t,o,i,0),v("z","y","x",1,-1,n,e,-t,o,i,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,i,4),v("x","y","z",-1,-1,t,e,-n,r,i,5),this.setIndex(h),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2));function v(y,x,_,R,E,S,b,I,A,f,d){const g=S/A,M=b/f,C=S/2,L=b/2,k=I/2,N=A+1,H=f+1;let Y=0,V=0;const J=new F;for(let tt=0;tt<H;tt++){const vt=tt*M-L;for(let Vt=0;Vt<N;Vt++){const ae=Vt*g-C;J[y]=ae*R,J[x]=vt*E,J[_]=k,a.push(J.x,J.y,J.z),J[y]=0,J[x]=0,J[_]=I>0?1:-1,c.push(J.x,J.y,J.z),u.push(Vt/A),u.push(1-tt/f),Y+=1}}for(let tt=0;tt<f;tt++)for(let vt=0;vt<A;vt++){const Vt=p+vt+N*tt,ae=p+vt+N*(tt+1),le=p+(vt+1)+N*(tt+1),Zt=p+(vt+1)+N*tt;h.push(Vt,ae,Zt),h.push(ae,le,Zt),V+=6}l.addGroup(m,V,d),m+=V,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function bn(s){const t={};for(let e=0;e<s.length;e++){const n=nr(s[e]);for(const r in n)t[r]=n[r]}return t}function Vf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Iu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Wf={clone:nr,merge:bn};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pu extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new F,eh=new ce,nh=new ce;class Wn extends Pu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,r,i,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,i=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,a=o.fullHeight;i+=o.offsetX*r/h,e-=o.offsetY*n/a,r*=o.width/h,n*=o.height/a}const l=this.filmOffset;l!==0&&(i+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vs=-90,Ws=1;class $f extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Vs,Ws,t,e);r.layers=this.layers,this.add(r);const i=new Wn(Vs,Ws,t,e);i.layers=this.layers,this.add(i);const o=new Wn(Vs,Ws,t,e);o.layers=this.layers,this.add(o);const l=new Wn(Vs,Ws,t,e);l.layers=this.layers,this.add(l);const h=new Wn(Vs,Ws,t,e);h.layers=this.layers,this.add(h);const a=new Wn(Vs,Ws,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,i,o,l,h]=e;for(const a of e)this.remove(a);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,o,l,h,a,c]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,i),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,a),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,c),t.setRenderTarget(u,p,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Lu extends Rn{constructor(t=[],e=Qs,n,r,i,o,l,h,a,c){super(t,e,n,r,i,o,l,h,a,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yf extends Ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Lu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mi(5,5,5),i=new Mi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Zi});i.uniforms.tEquirect.value=e;const o=new $e(r,i),l=e.minFilter;return e.minFilter===xs&&(e.minFilter=di),new $f(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const i=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(i)}}class oe extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kf={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,i=null,o=null;const l=this._targetRay,h=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){o=!0;for(const y of t.hand.values()){const x=e.getJointPose(y,n),_=this._getHandJoint(a,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const c=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],p=c.position.distanceTo(u.position),m=.02,v=.005;a.inputState.pinching&&p>m+v?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&p<=m-v&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(h.matrix.fromArray(i.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,i.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(i.linearVelocity)):h.hasLinearVelocity=!1,i.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(i.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=i!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class lc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jf extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Aa=new F,Zf=new F,Jf=new jt;class us{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Aa.subVectors(n,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jf.getNormalMatrix(t),r=this.coplanarPoint(Aa).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Or,Qf=new ce(.5,.5),ho=new F;class cc{constructor(t=new us,e=new us,n=new us,r=new us,i=new us,o=new us){this.planes=[t,e,n,r,i,o]}set(t,e,n,r,i,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(i),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi,n=!1){const r=this.planes,i=t.elements,o=i[0],l=i[1],h=i[2],a=i[3],c=i[4],u=i[5],p=i[6],m=i[7],v=i[8],y=i[9],x=i[10],_=i[11],R=i[12],E=i[13],S=i[14],b=i[15];if(r[0].setComponents(a-o,m-c,_-v,b-R).normalize(),r[1].setComponents(a+o,m+c,_+v,b+R).normalize(),r[2].setComponents(a+l,m+u,_+y,b+E).normalize(),r[3].setComponents(a-l,m-u,_-y,b-E).normalize(),n)r[4].setComponents(h,p,x,S).normalize(),r[5].setComponents(a-h,m-p,_-x,b-S).normalize();else if(r[4].setComponents(a-h,m-p,_-x,b-S).normalize(),e===fi)r[5].setComponents(a+h,m+p,_+x,b+S).normalize();else if(e===Fo)r[5].setComponents(h,p,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);const e=Qf.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ho.x=r.normal.x>0?t.max.x:t.min.x,ho.y=r.normal.y>0?t.max.y:t.min.y,ho.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bl extends Es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bo=new F,zo=new F,ih=new Ce,mr=new ac,uo=new Or,Ra=new F,sh=new F;class tp extends Je{constructor(t=new hn,e=new Bl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,i=e.count;r<i;r++)Bo.fromBufferAttribute(e,r-1),zo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Bo.distanceTo(zo);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,i=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),uo.radius+=i,t.ray.intersectsSphere(uo)===!1)return;ih.copy(r).invert(),mr.copy(t.ray).applyMatrix4(ih);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=this.isLineSegments?2:1,c=n.index,p=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let y=m,x=v-1;y<x;y+=a){const _=c.getX(y),R=c.getX(y+1),E=fo(this,t,mr,h,_,R,y);E&&e.push(E)}if(this.isLineLoop){const y=c.getX(v-1),x=c.getX(m),_=fo(this,t,mr,h,y,x,v-1);_&&e.push(_)}}else{const m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let y=m,x=v-1;y<x;y+=a){const _=fo(this,t,mr,h,y,y+1,y);_&&e.push(_)}if(this.isLineLoop){const y=fo(this,t,mr,h,v-1,m,v-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function fo(s,t,e,n,r,i,o){const l=s.geometry.attributes.position;if(Bo.fromBufferAttribute(l,r),zo.fromBufferAttribute(l,i),e.distanceSqToSegment(Bo,zo,Ra,sh)>n)return;Ra.applyMatrix4(s.matrixWorld);const a=t.ray.origin.distanceTo(Ra);if(!(a<t.near||a>t.far))return{distance:a,point:sh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const rh=new F,oh=new F;class ah extends tp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,i=e.count;r<i;r+=2)rh.fromBufferAttribute(e,r),oh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+rh.distanceTo(oh);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zl extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lh=new Ce,Hl=new ac,po=new Or,mo=new F;class ch extends Je{constructor(t=new hn,e=new zl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,i=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=i,t.ray.intersectsSphere(po)===!1)return;lh.copy(r).invert(),Hl.copy(t.ray).applyMatrix4(lh);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=n.index,u=n.attributes.position;if(a!==null){const p=Math.max(0,o.start),m=Math.min(a.count,o.start+o.count);for(let v=p,y=m;v<y;v++){const x=a.getX(v);mo.fromBufferAttribute(u,x),hh(mo,x,h,r,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,y=m;v<y;v++)mo.fromBufferAttribute(u,v),hh(mo,v,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function hh(s,t,e,n,r,i,o){const l=Hl.distanceSqToPoint(s);if(l<e){const h=new F;Hl.closestPointToPoint(s,h),h.applyMatrix4(n);const a=r.ray.origin.distanceTo(h);if(a<r.near||a>r.far)return;i.push({distance:a,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Du extends Rn{constructor(t,e,n,r,i,o,l,h,a){super(t,e,n,r,i,o,l,h,a),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ku extends Rn{constructor(t,e,n=bs,r,i,o,l=qn,h=qn,a,c=Cr,u=1){if(c!==Cr&&c!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,r,i,o,l,h,c,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Uu extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ho extends hn{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const i=[],o=[],l=[],h=[],a=new F,c=new ce;o.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const m=n+u/e*r;a.x=t*Math.cos(m),a.y=t*Math.sin(m),o.push(a.x,a.y,a.z),l.push(0,0,1),c.x=(o[p]/t+1)/2,c.y=(o[p+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)i.push(u,u+1,0);this.setIndex(i),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hc extends hn{constructor(t=1,e=1,n=1,r=32,i=1,o=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:l,thetaLength:h};const a=this;r=Math.floor(r),i=Math.floor(i);const c=[],u=[],p=[],m=[];let v=0;const y=[],x=n/2;let _=0;R(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(m,2));function R(){const S=new F,b=new F;let I=0;const A=(e-t)/n;for(let f=0;f<=i;f++){const d=[],g=f/i,M=g*(e-t)+t;for(let C=0;C<=r;C++){const L=C/r,k=L*h+l,N=Math.sin(k),H=Math.cos(k);b.x=M*N,b.y=-g*n+x,b.z=M*H,u.push(b.x,b.y,b.z),S.set(N,A,H).normalize(),p.push(S.x,S.y,S.z),m.push(L,1-g),d.push(v++)}y.push(d)}for(let f=0;f<r;f++)for(let d=0;d<i;d++){const g=y[d][f],M=y[d+1][f],C=y[d+1][f+1],L=y[d][f+1];(t>0||d!==0)&&(c.push(g,M,L),I+=3),(e>0||d!==i-1)&&(c.push(M,C,L),I+=3)}a.addGroup(_,I,0),_+=I}function E(S){const b=v,I=new ce,A=new F;let f=0;const d=S===!0?t:e,g=S===!0?1:-1;for(let C=1;C<=r;C++)u.push(0,x*g,0),p.push(0,g,0),m.push(.5,.5),v++;const M=v;for(let C=0;C<=r;C++){const k=C/r*h+l,N=Math.cos(k),H=Math.sin(k);A.x=d*H,A.y=x*g,A.z=d*N,u.push(A.x,A.y,A.z),p.push(0,g,0),I.x=N*.5+.5,I.y=H*.5*g+.5,m.push(I.x,I.y),v++}for(let C=0;C<r;C++){const L=b+C,k=M+C;S===!0?c.push(k,k+1,L):c.push(k+1,k,L),f+=3}a.addGroup(_,f,S===!0?1:2),_+=f}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const go=new F,_o=new F,Ca=new F,vo=new Qn;class uh extends hn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),i=Math.cos(Ks*e),o=t.getIndex(),l=t.getAttribute("position"),h=o?o.count:l.count,a=[0,0,0],c=["a","b","c"],u=new Array(3),p={},m=[];for(let v=0;v<h;v+=3){o?(a[0]=o.getX(v),a[1]=o.getX(v+1),a[2]=o.getX(v+2)):(a[0]=v,a[1]=v+1,a[2]=v+2);const{a:y,b:x,c:_}=vo;if(y.fromBufferAttribute(l,a[0]),x.fromBufferAttribute(l,a[1]),_.fromBufferAttribute(l,a[2]),vo.getNormal(Ca),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let R=0;R<3;R++){const E=(R+1)%3,S=u[R],b=u[E],I=vo[c[R]],A=vo[c[E]],f=`${S}_${b}`,d=`${b}_${S}`;d in p&&p[d]?(Ca.dot(p[d].normal)<=i&&(m.push(I.x,I.y,I.z),m.push(A.x,A.y,A.z)),p[d]=null):f in p||(p[f]={index0:a[R],index1:a[E],normal:Ca.clone()})}}for(const v in p)if(p[v]){const{index0:y,index1:x}=p[v];go.fromBufferAttribute(l,y),_o.fromBufferAttribute(l,x),m.push(go.x,go.y,go.z),m.push(_o.x,_o.y,_o.z)}this.setAttribute("position",new Me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Xo extends hn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const i=t/2,o=e/2,l=Math.floor(n),h=Math.floor(r),a=l+1,c=h+1,u=t/l,p=e/h,m=[],v=[],y=[],x=[];for(let _=0;_<c;_++){const R=_*p-o;for(let E=0;E<a;E++){const S=E*u-i;v.push(S,-R,0),y.push(0,0,1),x.push(E/l),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let R=0;R<l;R++){const E=R+a*_,S=R+a*(_+1),b=R+1+a*(_+1),I=R+1+a*_;m.push(E,S,I),m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.widthSegments,t.heightSegments)}}class uc extends hn{constructor(t=.5,e=1,n=32,r=1,i=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const l=[],h=[],a=[],c=[];let u=t;const p=(e-t)/r,m=new F,v=new ce;for(let y=0;y<=r;y++){for(let x=0;x<=n;x++){const _=i+x/n*o;m.x=u*Math.cos(_),m.y=u*Math.sin(_),h.push(m.x,m.y,m.z),a.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,c.push(v.x,v.y)}u+=p}for(let y=0;y<r;y++){const x=y*(n+1);for(let _=0;_<n;_++){const R=_+x,E=R,S=R+n+1,b=R+n+2,I=R+1;l.push(E,S,I),l.push(S,b,I)}}this.setIndex(l),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $o extends hn{constructor(t=1,e=32,n=16,r=0,i=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:i,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(o+l,Math.PI);let a=0;const c=[],u=new F,p=new F,m=[],v=[],y=[],x=[];for(let _=0;_<=n;_++){const R=[],E=_/n;let S=0;_===0&&o===0?S=.5/e:_===n&&h===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const I=b/e;u.x=-t*Math.cos(r+I*i)*Math.sin(o+E*l),u.y=t*Math.cos(o+E*l),u.z=t*Math.sin(r+I*i)*Math.sin(o+E*l),v.push(u.x,u.y,u.z),p.copy(u).normalize(),y.push(p.x,p.y,p.z),x.push(I+S,1-E),R.push(a++)}c.push(R)}for(let _=0;_<n;_++)for(let R=0;R<e;R++){const E=c[_][R+1],S=c[_][R],b=c[_+1][R],I=c[_+1][R+1];(_!==0||o>0)&&m.push(E,S,I),(_!==n-1||h<Math.PI)&&m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ne extends Es{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ep extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class np extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dc extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ip extends dc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ia=new Ce,dh=new F,fh=new F;class Nu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ph=new Ce,gr=new F,Pa=new F;class sp extends Nu{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,i=t.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),Pa.copy(n.position),Pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pa),n.updateMatrixWorld(),r.makeTranslation(-gr.x,-gr.y,-gr.z),ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph,n.coordinateSystem,n.reversedDepth)}}class La extends dc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fu extends Pu{constructor(t=-1,e=1,n=1,r=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-t,o=n+t,l=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=a*this.view.offsetX,o=i+a*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(i,o,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rp extends Nu{constructor(){super(new Fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends dc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ap extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function mh(s,t,e,n){const r=lp(n);switch(e){case vu:return s*t;case yu:return s*t/r.components*r.byteLength;case nc:return s*t/r.components*r.byteLength;case Mu:return s*t*2/r.components*r.byteLength;case ic:return s*t*2/r.components*r.byteLength;case xu:return s*t*3/r.components*r.byteLength;case ai:return s*t*4/r.components*r.byteLength;case sc:return s*t*4/r.components*r.byteLength;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Io:case Po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dl:case pl:return Math.max(s,16)*Math.max(t,8)/4;case ul:case fl:return Math.max(s,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Dl:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ul:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fl:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lp(s){switch(s){case xi:case pu:return{byteLength:1,components:1};case Ar:case mu:case Ur:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case bs:case Ql:case Ni:return{byteLength:4,components:1};case gu:case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ou(){let s=null,t=!1,e=null,n=null;function r(i,o){e(i,o),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){s=i}}}function cp(s){const t=new WeakMap;function e(l,h){const a=l.array,c=l.usage,u=a.byteLength,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,a,c),l.onUploadCallback();let m;if(a instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=s.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=s.SHORT;else if(a instanceof Uint32Array)m=s.UNSIGNED_INT;else if(a instanceof Int32Array)m=s.INT;else if(a instanceof Int8Array)m=s.BYTE;else if(a instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:p,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,h,a){const c=h.array,u=h.updateRanges;if(s.bindBuffer(a,l),u.length===0)s.bufferSubData(a,0,c);else{u.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<u.length;m++){const v=u[p],y=u[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,u[p]=y)}u.length=p+1;for(let m=0,v=u.length;m<v;m++){const y=u[m];s.bufferSubData(a,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(s.deleteBuffer(h.buffer),t.delete(l))}function o(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const a=t.get(l);if(a===void 0)t.set(l,e(l,h));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,h),a.version=l.version}}return{get:r,remove:i,update:o}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,_p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
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
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
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
#endif`,lm=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,b0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,w0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,I0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,L0=`#define PHONG
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
}`,D0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,U0=`#define TOON
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
}`,N0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,H0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:dp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:_p,batching_pars_vertex:vp,batching_vertex:xp,begin_vertex:yp,beginnormal_vertex:Mp,bsdfs:bp,iridescence_fragment:Sp,bumpmap_pars_fragment:wp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Ip,color_pars_vertex:Pp,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:Hp,envmap_fragment:Gp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Wp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:nm,envmap_vertex:Xp,fog_vertex:$p,fog_pars_vertex:Yp,fog_fragment:Kp,fog_pars_fragment:jp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:tm,lights_pars_begin:em,lights_toon_fragment:im,lights_toon_pars_fragment:sm,lights_phong_fragment:rm,lights_phong_pars_fragment:om,lights_physical_fragment:am,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:hm,lights_fragment_end:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:vm,map_particle_pars_fragment:xm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:Mm,morphinstance_vertex:bm,morphcolor_vertex:Sm,morphnormal_vertex:wm,morphtarget_pars_vertex:Em,morphtarget_vertex:Tm,normal_fragment_begin:Am,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Im,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:Hm,dithering_pars_fragment:Gm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:Xm,shadowmap_vertex:$m,shadowmask_pars_fragment:Ym,skinbase_vertex:Km,skinning_pars_vertex:jm,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Qm,specularmap_pars_fragment:t0,tonemapping_fragment:e0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:s0,uv_pars_fragment:r0,uv_pars_vertex:o0,uv_vertex:a0,worldpos_vertex:l0,background_vert:c0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:d0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:_0,distanceRGBA_frag:v0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:M0,linedashed_frag:b0,meshbasic_vert:S0,meshbasic_frag:w0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:A0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:I0,meshphong_vert:P0,meshphong_frag:L0,meshphysical_vert:D0,meshphysical_frag:k0,meshtoon_vert:U0,meshtoon_frag:N0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:z0,sprite_vert:H0,sprite_frag:G0},dt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ui={basic:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:bn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:bn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:bn([dt.points,dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:bn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:bn([dt.common,dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:bn([dt.sprite,dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:bn([dt.common,dt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:bn([dt.lights,dt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ui.physical={uniforms:bn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const xo={r:0,b:0,g:0},cs=new yi,V0=new Ce;function W0(s,t,e,n,r,i,o){const l=new Gt(0);let h=i===!0?0:1,a,c,u=null,p=0,m=null;function v(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function y(E){let S=!1;const b=v(E);b===null?_(l,h):b&&b.isColor&&(_(b,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(E,S){const b=v(S);b&&(b.isCubeTexture||b.mapping===qo)?(c===void 0&&(c=new $e(new mi(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:nr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),cs.copy(S.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(cs)),c.material.toneMapped=fe.getTransfer(b.colorSpace)!==xe,(u!==b||p!==b.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,m=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(a===void 0&&(a=new $e(new Xo(2,2),new Mi({name:"BackgroundMaterial",uniforms:nr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=b,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.toneMapped=fe.getTransfer(b.colorSpace)!==xe,b.matrixAutoUpdate===!0&&b.updateMatrix(),a.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||m!==s.toneMapping)&&(a.material.needsUpdate=!0,u=b,p=b.version,m=s.toneMapping),a.layers.enableAll(),E.unshift(a,a.geometry,a.material,0,0,null))}function _(E,S){E.getRGB(xo,Iu(s)),n.buffers.color.setClear(xo.r,xo.g,xo.b,S,o)}function R(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(E,S=1){l.set(E),h=S,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(E){h=E,_(l,h)},render:y,addToRenderList:x,dispose:R}}function q0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=p(null);let i=r,o=!1;function l(g,M,C,L,k){let N=!1;const H=u(L,C,M);i!==H&&(i=H,a(i.object)),N=m(g,L,C,k),N&&v(g,L,C,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,S(g,M,C,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return s.createVertexArray()}function a(g){return s.bindVertexArray(g)}function c(g){return s.deleteVertexArray(g)}function u(g,M,C){const L=C.wireframe===!0;let k=n[g.id];k===void 0&&(k={},n[g.id]=k);let N=k[M.id];N===void 0&&(N={},k[M.id]=N);let H=N[L];return H===void 0&&(H=p(h()),N[L]=H),H}function p(g){const M=[],C=[],L=[];for(let k=0;k<e;k++)M[k]=0,C[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:L,object:g,attributes:{},index:null}}function m(g,M,C,L){const k=i.attributes,N=M.attributes;let H=0;const Y=C.getAttributes();for(const V in Y)if(Y[V].location>=0){const tt=k[V];let vt=N[V];if(vt===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(vt=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(vt=g.instanceColor)),tt===void 0||tt.attribute!==vt||vt&&tt.data!==vt.data)return!0;H++}return i.attributesNum!==H||i.index!==L}function v(g,M,C,L){const k={},N=M.attributes;let H=0;const Y=C.getAttributes();for(const V in Y)if(Y[V].location>=0){let tt=N[V];tt===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(tt=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(tt=g.instanceColor));const vt={};vt.attribute=tt,tt&&tt.data&&(vt.data=tt.data),k[V]=vt,H++}i.attributes=k,i.attributesNum=H,i.index=L}function y(){const g=i.newAttributes;for(let M=0,C=g.length;M<C;M++)g[M]=0}function x(g){_(g,0)}function _(g,M){const C=i.newAttributes,L=i.enabledAttributes,k=i.attributeDivisors;C[g]=1,L[g]===0&&(s.enableVertexAttribArray(g),L[g]=1),k[g]!==M&&(s.vertexAttribDivisor(g,M),k[g]=M)}function R(){const g=i.newAttributes,M=i.enabledAttributes;for(let C=0,L=M.length;C<L;C++)M[C]!==g[C]&&(s.disableVertexAttribArray(C),M[C]=0)}function E(g,M,C,L,k,N,H){H===!0?s.vertexAttribIPointer(g,M,C,k,N):s.vertexAttribPointer(g,M,C,L,k,N)}function S(g,M,C,L){y();const k=L.attributes,N=C.getAttributes(),H=M.defaultAttributeValues;for(const Y in N){const V=N[Y];if(V.location>=0){let J=k[Y];if(J===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),J!==void 0){const tt=J.normalized,vt=J.itemSize,Vt=t.get(J);if(Vt===void 0)continue;const ae=Vt.buffer,le=Vt.type,Zt=Vt.bytesPerElement,X=le===s.INT||le===s.UNSIGNED_INT||J.gpuType===Ql;if(J.isInterleavedBufferAttribute){const K=J.data,it=K.stride,Et=J.offset;if(K.isInstancedInterleavedBuffer){for(let gt=0;gt<V.locationSize;gt++)_(V.location+gt,K.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let gt=0;gt<V.locationSize;gt++)x(V.location+gt);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let gt=0;gt<V.locationSize;gt++)E(V.location+gt,vt/V.locationSize,le,tt,it*Zt,(Et+vt/V.locationSize*gt)*Zt,X)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)_(V.location+K,J.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<V.locationSize;K++)x(V.location+K);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let K=0;K<V.locationSize;K++)E(V.location+K,vt/V.locationSize,le,tt,vt*Zt,vt/V.locationSize*K*Zt,X)}}else if(H!==void 0){const tt=H[Y];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(V.location,tt);break;case 3:s.vertexAttrib3fv(V.location,tt);break;case 4:s.vertexAttrib4fv(V.location,tt);break;default:s.vertexAttrib1fv(V.location,tt)}}}}R()}function b(){f();for(const g in n){const M=n[g];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g.id]}function A(g){for(const M in n){const C=n[M];if(C[g.id]===void 0)continue;const L=C[g.id];for(const k in L)c(L[k].object),delete L[k];delete C[g.id]}}function f(){d(),o=!0,i!==r&&(i=r,a(i.object))}function d(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:f,resetDefaultState:d,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:x,disableUnusedAttributes:R}}function X0(s,t,e){let n;function r(a){n=a}function i(a,c){s.drawArrays(n,a,c),e.update(c,n,1)}function o(a,c,u){u!==0&&(s.drawArraysInstanced(n,a,c,u),e.update(c,n,u))}function l(a,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,u);let m=0;for(let v=0;v<u;v++)m+=c[v];e.update(m,n,1)}function h(a,c,u,p){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<a.length;v++)o(a[v],c[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,a,0,c,0,p,0,u);let v=0;for(let y=0;y<u;y++)v+=c[y]*p[y];e.update(v,n,1)}}this.setMode=r,this.render=i,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function $0(s,t,e,n){let r;function i(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ai&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const f=A===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==xi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ni&&!f)}function h(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const c=h(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:b,maxSamples:I}}function Y0(s){const t=this;let e=null,n=0,r=!1,i=!1;const o=new us,l=new jt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||r;return r=p,n=u.length,m},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,p){e=c(u,p,0)},this.setState=function(u,p,m){const v=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,_=s.get(u);if(!r||v===null||v.length===0||i&&!x)i?c(null):a();else{const R=i?0:n,E=R*4;let S=_.clippingState||null;h.value=S,S=c(v,p,E,m);for(let b=0;b!==E;++b)S[b]=e[b];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function a(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,p,m,v){const y=u!==null?u.length:0;let x=null;if(y!==0){if(x=h.value,v!==!0||x===null){const _=m+y*4,R=p.matrixWorldInverse;l.getNormalMatrix(R),(x===null||x.length<_)&&(x=new Float32Array(_));for(let E=0,S=m;E!==y;++E,S+=4)o.copy(u[E]).applyMatrix4(R,l),o.normal.toArray(x,S),x[S+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function K0(s){let t=new WeakMap;function e(o,l){return l===al?o.mapping=Qs:l===ll&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===al||l===ll)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const a=new Yf(h.height);return a.fromEquirectangularTexture(s,o),t.set(o,a),o.addEventListener("dispose",r),e(a.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}const $s=4,gh=[.125,.215,.35,.446,.526,.582],ms=20,Da=new Fu,_h=new Gt;let ka=null,Ua=0,Na=0,Fa=!1;const ds=(1+Math.sqrt(5))/2,qs=1/ds,vh=[new F(-ds,qs,0),new F(ds,qs,0),new F(-qs,0,ds),new F(qs,0,ds),new F(0,ds,-qs),new F(0,ds,qs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],j0=new F;class xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,i={}){const{size:o=256,position:l=j0}=i;ka=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Ua,Na),this._renderer.xr.enabled=Fa,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ur,format:ai,colorSpace:er,depthBuffer:!1},r=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z0(i)),this._blurMaterial=J0(i,t,e)}return r}_compileMaterial(t){const e=new $e(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,r,i){const h=new Wn(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(_h),u.toneMapping=Ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const y=new Li({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),x=new $e(new mi,y);let _=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,_=!0):(y.color.copy(_h),_=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(h.up.set(0,a[E],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x+c[E],i.y,i.z)):S===1?(h.up.set(0,0,a[E]),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y+c[E],i.z)):(h.up.set(0,a[E],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y,i.z+c[E]));const b=this._cubeSize;yo(r,S*b,E>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(x,h),u.render(t,h)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=m,u.autoClear=p,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Qs||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const i=r?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=t;const h=this._cubeSize;yo(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let i=1;i<r;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=vh[(r-i-1)%vh.length];this._blur(t,i-1,i,o,l)}e.autoClear=n}_blur(t,e,n,r,i){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",i),this._halfBlur(o,t,n,n,r,"longitudinal",i)}_halfBlur(t,e,n,r,i,o,l){const h=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new $e(this._lodPlanes[r],a),p=a.uniforms,m=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*ms-1),y=i/v,x=isFinite(i)?1+Math.floor(c*y):ms;x>ms&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ms}`);const _=[];let R=0;for(let A=0;A<ms;++A){const f=A/y,d=Math.exp(-f*f/2);_.push(d),A===0?R+=d:A<x&&(R+=2*d)}for(let A=0;A<_.length;A++)_[A]=_[A]/R;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=_,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:E}=this;p.dTheta.value=v,p.mipInt.value=E-n;const S=this._sizeLods[r],b=3*S*(r>E-$s?r-E+$s:0),I=4*(this._cubeSize-S);yo(e,b,I,3*S,2*S),h.setRenderTarget(e),h.render(u,Da)}}function Z0(s){const t=[],e=[],n=[];let r=s;const i=s-$s+1+gh.length;for(let o=0;o<i;o++){const l=Math.pow(2,r);e.push(l);let h=1/l;o>s-$s?h=gh[o-s+$s-1]:o===0&&(h=0),n.push(h);const a=1/(l-2),c=-a,u=1+a,p=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,v=6,y=3,x=2,_=1,R=new Float32Array(y*v*m),E=new Float32Array(x*v*m),S=new Float32Array(_*v*m);for(let I=0;I<m;I++){const A=I%3*2/3-1,f=I>2?0:-1,d=[A,f,0,A+2/3,f,0,A+2/3,f+1,0,A,f,0,A+2/3,f+1,0,A,f+1,0];R.set(d,y*v*I),E.set(p,x*v*I);const g=[I,I,I,I,I,I];S.set(g,_*v*I)}const b=new hn;b.setAttribute("position",new _i(R,y)),b.setAttribute("uv",new _i(E,x)),b.setAttribute("faceIndex",new _i(S,_)),t.push(b),r>$s&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(s,t,e){const n=new Ss(s,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function J0(s,t,e){const n=new Float32Array(ms),r=new F(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Mh(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function bh(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function Q0(s){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,a=h===al||h===ll,c=h===Qs||h===tr;if(a||c){let u=t.get(l);const p=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return e===null&&(e=new xh(s)),u=a?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const m=l.image;return a&&m&&m.height>0||c&&m&&r(m)?(e===null&&(e=new xh(s)),u=a?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",i),u.texture):null}}}return l}function r(l){let h=0;const a=6;for(let c=0;c<a;c++)l[c]!==void 0&&h++;return h===a}function i(l){const h=l.target;h.removeEventListener("dispose",i);const a=t.get(h);a!==void 0&&(t.delete(h),a.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function eg(s,t,e,n){const r={},i=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete r[p.id];const m=i.get(p);m&&(t.remove(m),i.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function h(u){const p=u.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER)}function a(u){const p=[],m=u.index,v=u.attributes.position;let y=0;if(m!==null){const R=m.array;y=m.version;for(let E=0,S=R.length;E<S;E+=3){const b=R[E+0],I=R[E+1],A=R[E+2];p.push(b,I,I,A,A,b)}}else if(v!==void 0){const R=v.array;y=v.version;for(let E=0,S=R.length/3-1;E<S;E+=3){const b=E+0,I=E+1,A=E+2;p.push(b,I,I,A,A,b)}}else return;const x=new(wu(p)?Cu:Ru)(p,1);x.version=y;const _=i.get(u);_&&t.remove(_),i.set(u,x)}function c(u){const p=i.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&a(u)}else a(u);return i.get(u)}return{get:l,update:h,getWireframeAttribute:c}}function ng(s,t,e){let n;function r(p){n=p}let i,o;function l(p){i=p.type,o=p.bytesPerElement}function h(p,m){s.drawElements(n,m,i,p*o),e.update(m,n,1)}function a(p,m,v){v!==0&&(s.drawElementsInstanced(n,m,i,p*o,v),e.update(m,n,v))}function c(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,i,p,0,v);let x=0;for(let _=0;_<v;_++)x+=m[_];e.update(x,n,1)}function u(p,m,v,y){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<p.length;_++)a(p[_]/o,m[_],y[_]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,i,p,0,y,0,v);let _=0;for(let R=0;R<v;R++)_+=m[R]*y[R];e.update(_,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function ig(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,l){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=l*(i/3);break;case s.LINES:e.lines+=l*(i/2);break;case s.LINE_STRIP:e.lines+=l*(i-1);break;case s.LINE_LOOP:e.lines+=l*i;break;case s.POINTS:e.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function sg(s,t,e){const n=new WeakMap,r=new ye;function i(o,l,h){const a=o.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=c!==void 0?c.length:0;let p=n.get(l);if(p===void 0||p.count!==u){let g=function(){f.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var m=g;p!==void 0&&p.texture.dispose();const v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],R=l.morphAttributes.normal||[],E=l.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),x===!0&&(S=3);let b=l.attributes.position.count*S,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*I*4*u),f=new Eu(A,b,I,u);f.type=Ni,f.needsUpdate=!0;const d=S*4;for(let M=0;M<u;M++){const C=_[M],L=R[M],k=E[M],N=b*I*4*M;for(let H=0;H<C.count;H++){const Y=H*d;v===!0&&(r.fromBufferAttribute(C,H),A[N+Y+0]=r.x,A[N+Y+1]=r.y,A[N+Y+2]=r.z,A[N+Y+3]=0),y===!0&&(r.fromBufferAttribute(L,H),A[N+Y+4]=r.x,A[N+Y+5]=r.y,A[N+Y+6]=r.z,A[N+Y+7]=0),x===!0&&(r.fromBufferAttribute(k,H),A[N+Y+8]=r.x,A[N+Y+9]=r.y,A[N+Y+10]=r.z,A[N+Y+11]=k.itemSize===4?r.w:1)}}p={count:u,texture:f,size:new ce(b,I)},n.set(l,p),l.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let v=0;for(let x=0;x<a.length;x++)v+=a[x];const y=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",a)}h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:i}}function rg(s,t,e,n){let r=new WeakMap;function i(h){const a=n.render.frame,c=h.geometry,u=t.get(h,c);if(r.get(u)!==a&&(t.update(u),r.set(u,a)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==a&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,a))),h.isSkinnedMesh){const p=h.skeleton;r.get(p)!==a&&(p.update(),r.set(p,a))}return u}function o(){r=new WeakMap}function l(h){const a=h.target;a.removeEventListener("dispose",l),e.remove(a.instanceMatrix),a.instanceColor!==null&&e.remove(a.instanceColor)}return{update:i,dispose:o}}const Bu=new Rn,Sh=new ku(1,1),zu=new Eu,Hu=new Pf,Gu=new Lu,wh=[],Eh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function or(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let i=wh[r];if(i===void 0&&(i=new Float32Array(r),wh[r]=i),t!==0){n.toArray(i,0);for(let o=1,l=0;o!==t;++o)l+=e,s[o].toArray(i,l)}return i}function Qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function tn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Yo(s,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function og(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2fv(this.addr,t),tn(e,t)}}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;s.uniform3fv(this.addr,t),tn(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4fv(this.addr,t),tn(e,t)}}function hg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Rh.set(n),s.uniformMatrix2fv(this.addr,!1,Rh),tn(e,n)}}function ug(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Ah.set(n),s.uniformMatrix3fv(this.addr,!1,Ah),tn(e,n)}}function dg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Th.set(n),s.uniformMatrix4fv(this.addr,!1,Th),tn(e,n)}}function fg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2iv(this.addr,t),tn(e,t)}}function mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3iv(this.addr,t),tn(e,t)}}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4iv(this.addr,t),tn(e,t)}}function _g(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2uiv(this.addr,t),tn(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3uiv(this.addr,t),tn(e,t)}}function yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4uiv(this.addr,t),tn(e,t)}}function Mg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let i;this.type===s.SAMPLER_2D_SHADOW?(Sh.compareFunction=Su,i=Sh):i=Bu,e.setTexture2D(t||i,r)}function bg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Hu,r)}function Sg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Gu,r)}function wg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||zu,r)}function Eg(s){switch(s){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return wg}}function Tg(s,t){s.uniform1fv(this.addr,t)}function Ag(s,t){const e=or(t,this.size,2);s.uniform2fv(this.addr,e)}function Rg(s,t){const e=or(t,this.size,3);s.uniform3fv(this.addr,e)}function Cg(s,t){const e=or(t,this.size,4);s.uniform4fv(this.addr,e)}function Ig(s,t){const e=or(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pg(s,t){const e=or(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Lg(s,t){const e=or(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Dg(s,t){s.uniform1iv(this.addr,t)}function kg(s,t){s.uniform2iv(this.addr,t)}function Ug(s,t){s.uniform3iv(this.addr,t)}function Ng(s,t){s.uniform4iv(this.addr,t)}function Fg(s,t){s.uniform1uiv(this.addr,t)}function Og(s,t){s.uniform2uiv(this.addr,t)}function Bg(s,t){s.uniform3uiv(this.addr,t)}function zg(s,t){s.uniform4uiv(this.addr,t)}function Hg(s,t,e){const n=this.cache,r=t.length,i=Yo(e,r);Qe(n,i)||(s.uniform1iv(this.addr,i),tn(n,i));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Bu,i[o])}function Gg(s,t,e){const n=this.cache,r=t.length,i=Yo(e,r);Qe(n,i)||(s.uniform1iv(this.addr,i),tn(n,i));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Hu,i[o])}function Vg(s,t,e){const n=this.cache,r=t.length,i=Yo(e,r);Qe(n,i)||(s.uniform1iv(this.addr,i),tn(n,i));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Gu,i[o])}function Wg(s,t,e){const n=this.cache,r=t.length,i=Yo(e,r);Qe(n,i)||(s.uniform1iv(this.addr,i),tn(n,i));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||zu,i[o])}function qg(s){switch(s){case 5126:return Tg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Ig;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return kg;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class $g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}}class Yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let i=0,o=r.length;i!==o;++i){const l=r[i];l.setValue(t,e[l.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Ch(s,t){s.seq.push(t),s.map[t.id]=t}function Kg(s,t,e){const n=s.name,r=n.length;for(Oa.lastIndex=0;;){const i=Oa.exec(n),o=Oa.lastIndex;let l=i[1];const h=i[2]==="]",a=i[3];if(h&&(l=l|0),a===void 0||a==="["&&o+2===r){Ch(e,a===void 0?new Xg(l,s,t):new $g(l,s,t));break}else{let u=e.map[l];u===void 0&&(u=new Yg(l),Ch(e,u)),e=u}}}class Lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=t.getActiveUniform(e,r),o=t.getUniformLocation(e,i.name);Kg(i,o,this)}}setValue(t,e,n,r){const i=this.map[e];i!==void 0&&i.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let i=0,o=e.length;i!==o;++i){const l=e[i],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,i=t.length;r!==i;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ih(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const jg=37297;let Zg=0;function Jg(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let o=r;o<i;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const Ph=new jt;function Qg(s){fe._getMatrix(Ph,fe.workingColorSpace,s);const t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(s)){case No:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=(s.getShaderInfoLog(t)||"").trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Jg(s.getShaderSource(t),l)}else return i}function t1(s,t){const e=Qg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function e1(s,t){let e;switch(t){case Vd:e="Linear";break;case Wd:e="Reinhard";break;case qd:e="Cineon";break;case Xd:e="ACESFilmic";break;case Yd:e="AgX";break;case Kd:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mo=new F;function n1(){fe.getLuminanceCoefficients(Mo);const s=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function s1(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r1(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=s.getActiveAttrib(t,r),o=i.name;let l=1;i.type===s.FLOAT_MAT2&&(l=2),i.type===s.FLOAT_MAT3&&(l=3),i.type===s.FLOAT_MAT4&&(l=4),e[o]={type:i.type,location:s.getAttribLocation(t,o),locationSize:l}}return e}function xr(s){return s!==""}function Dh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(s){return s.replace(o1,l1)}const a1=new Map;function l1(s,t){let e=Jt[t];if(e===void 0){const n=a1.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gl(e)}const c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(s){return s.replace(c1,h1)}function h1(s,t,e,n){let r="";for(let i=parseInt(t);i<parseInt(e);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Nh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function u1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===du?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function d1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case tr:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function p1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case Hd:t="ENVMAP_BLENDING_MIX";break;case Gd:t="ENVMAP_BLENDING_ADD";break}return t}function m1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function g1(s,t,e,n){const r=s.getContext(),i=e.defines;let o=e.vertexShader,l=e.fragmentShader;const h=u1(e),a=d1(e),c=f1(e),u=p1(e),p=m1(e),m=i1(e),v=s1(i),y=r.createProgram();let x,_,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xr).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xr).join(`
`),_.length>0&&(_+=`
`)):(x=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),_=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?e1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,t1("linearToOutputTexel",e.outputColorSpace),n1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=Gl(o),o=Dh(o,e),o=kh(o,e),l=Gl(l),l=Dh(l,e),l=kh(l,e),o=Uh(o),l=Uh(l),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=R+x+o,S=R+_+l,b=Ih(r,r.VERTEX_SHADER,E),I=Ih(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,I),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(M){if(s.debug.checkShaderErrors){const C=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(b)||"",k=r.getShaderInfoLog(I)||"",N=C.trim(),H=L.trim(),Y=k.trim();let V=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,y,b,I);else{const tt=Lh(r,b,"vertex"),vt=Lh(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+N+`
`+tt+`
`+vt)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||Y==="")&&(J=!1);J&&(M.diagnostics={runnable:V,programLog:N,vertexShader:{log:H,prefix:x},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(b),r.deleteShader(I),f=new Lo(r,y),d=r1(r,y)}let f;this.getUniforms=function(){return f===void 0&&A(this),f};let d;this.getAttributes=function(){return d===void 0&&A(this),d};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(y,jg)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=I,this}let _1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new x1(t),e.set(t,n)),n}}class x1{constructor(t){this.id=_1++,this.code=t,this.usedTimes=0}}function y1(s,t,e,n,r,i,o){const l=new Tu,h=new v1,a=new Set,c=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(d){return a.add(d),d===0?"uv":`uv${d}`}function x(d,g,M,C,L){const k=C.fog,N=L.geometry,H=d.isMeshStandardMaterial?C.environment:null,Y=(d.isMeshStandardMaterial?e:t).get(d.envMap||H),V=Y&&Y.mapping===qo?Y.image.height:null,J=v[d.type];d.precision!==null&&(m=r.getMaxPrecision(d.precision),m!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",m,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,vt=tt!==void 0?tt.length:0;let Vt=0;N.morphAttributes.position!==void 0&&(Vt=1),N.morphAttributes.normal!==void 0&&(Vt=2),N.morphAttributes.color!==void 0&&(Vt=3);let ae,le,Zt,X;if(J){const me=ui[J];ae=me.vertexShader,le=me.fragmentShader}else ae=d.vertexShader,le=d.fragmentShader,h.update(d),Zt=h.getVertexShaderID(d),X=h.getFragmentShaderID(d);const K=s.getRenderTarget(),it=s.state.buffers.depth.getReversed(),Et=L.isInstancedMesh===!0,gt=L.isBatchedMesh===!0,Wt=!!d.map,we=!!d.matcap,D=!!Y,ue=!!d.aoMap,Rt=!!d.lightMap,Lt=!!d.bumpMap,xt=!!d.normalMap,he=!!d.displacementMap,yt=!!d.emissiveMap,$t=!!d.metalnessMap,en=!!d.roughnessMap,Ne=d.anisotropy>0,P=d.clearcoat>0,w=d.dispersion>0,G=d.iridescence>0,Z=d.sheen>0,et=d.transmission>0,j=Ne&&!!d.anisotropyMap,Dt=P&&!!d.clearcoatMap,lt=P&&!!d.clearcoatNormalMap,Ct=P&&!!d.clearcoatRoughnessMap,It=G&&!!d.iridescenceMap,ot=G&&!!d.iridescenceThicknessMap,_t=Z&&!!d.sheenColorMap,Bt=Z&&!!d.sheenRoughnessMap,Pt=!!d.specularMap,ft=!!d.specularColorMap,Kt=!!d.specularIntensityMap,O=et&&!!d.transmissionMap,at=et&&!!d.thicknessMap,ht=!!d.gradientMap,St=!!d.alphaMap,st=d.alphaTest>0,Q=!!d.alphaHash,Tt=!!d.extensions;let Xt=Ji;d.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const Ee={shaderID:J,shaderType:d.type,shaderName:d.name,vertexShader:ae,fragmentShader:le,defines:d.defines,customVertexShaderID:Zt,customFragmentShaderID:X,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:m,batching:gt,batchingColor:gt&&L._colorsTexture!==null,instancing:Et,instancingColor:Et&&L.instanceColor!==null,instancingMorph:Et&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:er,alphaToCoverage:!!d.alphaToCoverage,map:Wt,matcap:we,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:V,aoMap:ue,lightMap:Rt,bumpMap:Lt,normalMap:xt,displacementMap:p&&he,emissiveMap:yt,normalMapObjectSpace:xt&&d.normalMapType===Qd,normalMapTangentSpace:xt&&d.normalMapType===bu,metalnessMap:$t,roughnessMap:en,anisotropy:Ne,anisotropyMap:j,clearcoat:P,clearcoatMap:Dt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Ct,dispersion:w,iridescence:G,iridescenceMap:It,iridescenceThicknessMap:ot,sheen:Z,sheenColorMap:_t,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:ft,specularIntensityMap:Kt,transmission:et,transmissionMap:O,thicknessMap:at,gradientMap:ht,opaque:d.transparent===!1&&d.blending===Ys&&d.alphaToCoverage===!1,alphaMap:St,alphaTest:st,alphaHash:Q,combine:d.combine,mapUv:Wt&&y(d.map.channel),aoMapUv:ue&&y(d.aoMap.channel),lightMapUv:Rt&&y(d.lightMap.channel),bumpMapUv:Lt&&y(d.bumpMap.channel),normalMapUv:xt&&y(d.normalMap.channel),displacementMapUv:he&&y(d.displacementMap.channel),emissiveMapUv:yt&&y(d.emissiveMap.channel),metalnessMapUv:$t&&y(d.metalnessMap.channel),roughnessMapUv:en&&y(d.roughnessMap.channel),anisotropyMapUv:j&&y(d.anisotropyMap.channel),clearcoatMapUv:Dt&&y(d.clearcoatMap.channel),clearcoatNormalMapUv:lt&&y(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&y(d.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&y(d.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(d.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&y(d.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&y(d.sheenRoughnessMap.channel),specularMapUv:Pt&&y(d.specularMap.channel),specularColorMapUv:ft&&y(d.specularColorMap.channel),specularIntensityMapUv:Kt&&y(d.specularIntensityMap.channel),transmissionMapUv:O&&y(d.transmissionMap.channel),thicknessMapUv:at&&y(d.thicknessMap.channel),alphaMapUv:St&&y(d.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||Ne),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Wt||St),fog:!!k,useFog:d.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:d.flatShading===!0&&d.wireframe===!1,sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Vt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:d.dithering,shadowMapEnabled:s.shadowMap.enabled&&M.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Wt&&d.map.isVideoTexture===!0&&fe.getTransfer(d.map.colorSpace)===xe,decodeVideoTextureEmissive:yt&&d.emissiveMap.isVideoTexture===!0&&fe.getTransfer(d.emissiveMap.colorSpace)===xe,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===sn,flipSided:d.side===An,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Tt&&d.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&d.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Ee.vertexUv1s=a.has(1),Ee.vertexUv2s=a.has(2),Ee.vertexUv3s=a.has(3),a.clear(),Ee}function _(d){const g=[];if(d.shaderID?g.push(d.shaderID):(g.push(d.customVertexShaderID),g.push(d.customFragmentShaderID)),d.defines!==void 0)for(const M in d.defines)g.push(M),g.push(d.defines[M]);return d.isRawShaderMaterial===!1&&(R(g,d),E(g,d),g.push(s.outputColorSpace)),g.push(d.customProgramCacheKey),g.join()}function R(d,g){d.push(g.precision),d.push(g.outputColorSpace),d.push(g.envMapMode),d.push(g.envMapCubeUVHeight),d.push(g.mapUv),d.push(g.alphaMapUv),d.push(g.lightMapUv),d.push(g.aoMapUv),d.push(g.bumpMapUv),d.push(g.normalMapUv),d.push(g.displacementMapUv),d.push(g.emissiveMapUv),d.push(g.metalnessMapUv),d.push(g.roughnessMapUv),d.push(g.anisotropyMapUv),d.push(g.clearcoatMapUv),d.push(g.clearcoatNormalMapUv),d.push(g.clearcoatRoughnessMapUv),d.push(g.iridescenceMapUv),d.push(g.iridescenceThicknessMapUv),d.push(g.sheenColorMapUv),d.push(g.sheenRoughnessMapUv),d.push(g.specularMapUv),d.push(g.specularColorMapUv),d.push(g.specularIntensityMapUv),d.push(g.transmissionMapUv),d.push(g.thicknessMapUv),d.push(g.combine),d.push(g.fogExp2),d.push(g.sizeAttenuation),d.push(g.morphTargetsCount),d.push(g.morphAttributeCount),d.push(g.numDirLights),d.push(g.numPointLights),d.push(g.numSpotLights),d.push(g.numSpotLightMaps),d.push(g.numHemiLights),d.push(g.numRectAreaLights),d.push(g.numDirLightShadows),d.push(g.numPointLightShadows),d.push(g.numSpotLightShadows),d.push(g.numSpotLightShadowsWithMaps),d.push(g.numLightProbes),d.push(g.shadowMapType),d.push(g.toneMapping),d.push(g.numClippingPlanes),d.push(g.numClipIntersection),d.push(g.depthPacking)}function E(d,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),g.gradientMap&&l.enable(22),d.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.reversedDepthBuffer&&l.enable(4),g.skinning&&l.enable(5),g.morphTargets&&l.enable(6),g.morphNormals&&l.enable(7),g.morphColors&&l.enable(8),g.premultipliedAlpha&&l.enable(9),g.shadowMapEnabled&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),g.decodeVideoTextureEmissive&&l.enable(20),g.alphaToCoverage&&l.enable(21),d.push(l.mask)}function S(d){const g=v[d.type];let M;if(g){const C=ui[g];M=Wf.clone(C.uniforms)}else M=d.uniforms;return M}function b(d,g){let M;for(let C=0,L=c.length;C<L;C++){const k=c[C];if(k.cacheKey===g){M=k,++M.usedTimes;break}}return M===void 0&&(M=new g1(s,g,d,i),c.push(M)),M}function I(d){if(--d.usedTimes===0){const g=c.indexOf(d);c[g]=c[c.length-1],c.pop(),d.destroy()}}function A(d){h.remove(d)}function f(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:S,acquireProgram:b,releaseProgram:I,releaseShaderCache:A,programs:c,dispose:f}}function M1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function r(o,l,h){s.get(o)[l]=h}function i(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:i}}function b1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Fh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Oh(){const s=[];let t=0;const e=[],n=[],r=[];function i(){t=0,e.length=0,n.length=0,r.length=0}function o(u,p,m,v,y,x){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:y,group:x},s[t]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=m,_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=y,_.group=x),t++,_}function l(u,p,m,v,y,x){const _=o(u,p,m,v,y,x);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function h(u,p,m,v,y,x){const _=o(u,p,m,v,y,x);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function a(u,p){e.length>1&&e.sort(u||b1),n.length>1&&n.sort(p||Fh),r.length>1&&r.sort(p||Fh)}function c(){for(let u=t,p=s.length;u<p;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:i,push:l,unshift:h,finish:c,sort:a}}function S1(){let s=new WeakMap;function t(n,r){const i=s.get(n);let o;return i===void 0?(o=new Oh,s.set(n,[o])):r>=i.length?(o=new Oh,i.push(o)):o=i[r],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function w1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Gt};break;case"SpotLight":e={position:new F,direction:new F,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function E1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let T1=0;function A1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function R1(s){const t=new w1,e=E1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new F);const r=new F,i=new Ce,o=new Ce;function l(a){let c=0,u=0,p=0;for(let d=0;d<9;d++)n.probe[d].set(0,0,0);let m=0,v=0,y=0,x=0,_=0,R=0,E=0,S=0,b=0,I=0,A=0;a.sort(A1);for(let d=0,g=a.length;d<g;d++){const M=a[d],C=M.color,L=M.intensity,k=M.distance,N=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=C.r*L,u+=C.g*L,p+=C.b*L;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],L);A++}else if(M.isDirectionalLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=M.shadow.matrix,R++}n.directional[m]=H,m++}else if(M.isSpotLight){const H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(C).multiplyScalar(L),H.distance=k,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[y]=H;const Y=M.shadow;if(M.map&&(n.spotLightMap[b]=M.map,b++,Y.updateMatrices(M),M.castShadow&&I++),n.spotLightMatrix[y]=Y.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=N,S++}y++}else if(M.isRectAreaLight){const H=t.get(M);H.color.copy(C).multiplyScalar(L),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[x]=H,x++}else if(M.isPointLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=N,n.pointShadowMatrix[v]=M.shadow.matrix,E++}n.point[v]=H,v++}else if(M.isHemisphereLight){const H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(L),H.groundColor.copy(M.groundColor).multiplyScalar(L),n.hemi[_]=H,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=p;const f=n.hash;(f.directionalLength!==m||f.pointLength!==v||f.spotLength!==y||f.rectAreaLength!==x||f.hemiLength!==_||f.numDirectionalShadows!==R||f.numPointShadows!==E||f.numSpotShadows!==S||f.numSpotMaps!==b||f.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=x,n.point.length=v,n.hemi.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,f.directionalLength=m,f.pointLength=v,f.spotLength=y,f.rectAreaLength=x,f.hemiLength=_,f.numDirectionalShadows=R,f.numPointShadows=E,f.numSpotShadows=S,f.numSpotMaps=b,f.numLightProbes=A,n.version=T1++)}function h(a,c){let u=0,p=0,m=0,v=0,y=0;const x=c.matrixWorldInverse;for(let _=0,R=a.length;_<R;_++){const E=a[_];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),u++}else if(E.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(E.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),o.identity(),i.copy(E.matrixWorld),i.premultiply(x),o.extractRotation(i),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(x),y++}}}return{setup:l,setupView:h,state:n}}function Bh(s){const t=new R1(s),e=[],n=[];function r(c){a.camera=c,e.length=0,n.length=0}function i(c){e.push(c)}function o(c){n.push(c)}function l(){t.setup(e)}function h(c){t.setupView(e,c)}const a={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:a,setupLights:l,setupLightsView:h,pushLight:i,pushShadow:o}}function C1(s){let t=new WeakMap;function e(r,i=0){const o=t.get(r);let l;return o===void 0?(l=new Bh(s),t.set(r,[l])):i>=o.length?(l=new Bh(s),o.push(l)):l=o[i],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P1=`uniform sampler2D shadow_pass;
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
}`;function L1(s,t,e){let n=new cc;const r=new ce,i=new ce,o=new ye,l=new ep({depthPacking:Jd}),h=new np,a={},c=e.maxTextureSize,u={[ts]:An,[An]:ts,[sn]:sn},p=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:I1,fragmentShader:P1}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new hn;v.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $e(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let _=this.type;this.render=function(I,A,f){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const d=s.getRenderTarget(),g=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Zi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=_!==Ii&&this.type===Ii,k=_===Ii&&this.type!==Ii;for(let N=0,H=I.length;N<H;N++){const Y=I[N],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();if(r.multiply(J),i.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(i.x=Math.floor(c/J.x),r.x=i.x*J.x,V.mapSize.x=i.x),r.y>c&&(i.y=Math.floor(c/J.y),r.y=i.y*J.y,V.mapSize.y=i.y)),V.map===null||L===!0||k===!0){const vt=this.type!==Ii?{minFilter:qn,magFilter:qn}:{};V.map!==null&&V.map.dispose(),V.map=new Ss(r.x,r.y,vt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const tt=V.getViewportCount();for(let vt=0;vt<tt;vt++){const Vt=V.getViewport(vt);o.set(i.x*Vt.x,i.y*Vt.y,i.x*Vt.z,i.y*Vt.w),C.viewport(o),V.updateMatrices(Y,vt),n=V.getFrustum(),S(A,f,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Ii&&R(V,f),V.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(d,g,M)};function R(I,A){const f=t.update(y);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ss(r.x,r.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(A,null,f,p,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(A,null,f,m,y,null)}function E(I,A,f,d){let g=null;const M=f.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(M!==void 0)g=M;else if(g=f.isPointLight===!0?h:l,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const C=g.uuid,L=A.uuid;let k=a[C];k===void 0&&(k={},a[C]=k);let N=k[L];N===void 0&&(N=g.clone(),k[L]=N,A.addEventListener("dispose",b)),g=N}if(g.visible=A.visible,g.wireframe=A.wireframe,d===Ii?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:u[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,f.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const C=s.properties.get(g);C.light=f}return g}function S(I,A,f,d,g){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===Ii)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,I.matrixWorld);const L=t.update(I),k=I.material;if(Array.isArray(k)){const N=L.groups;for(let H=0,Y=N.length;H<Y;H++){const V=N[H],J=k[V.materialIndex];if(J&&J.visible){const tt=E(I,J,d,g);I.onBeforeShadow(s,I,A,f,L,tt,V),s.renderBufferDirect(f,null,L,tt,I,V),I.onAfterShadow(s,I,A,f,L,tt,V)}}}else if(k.visible){const N=E(I,k,d,g);I.onBeforeShadow(s,I,A,f,L,N,null),s.renderBufferDirect(f,null,L,N,I,null),I.onAfterShadow(s,I,A,f,L,N,null)}}const C=I.children;for(let L=0,k=C.length;L<k;L++)S(C[L],A,f,d,g)}function b(I){I.target.removeEventListener("dispose",b);for(const f in a){const d=a[f],g=I.target.uuid;g in d&&(d[g].dispose(),delete d[g])}}}const D1={[tl]:el,[nl]:rl,[il]:ol,[Js]:sl,[el]:tl,[rl]:nl,[ol]:il,[sl]:Js};function k1(s,t){function e(){let O=!1;const at=new ye;let ht=null;const St=new ye(0,0,0,0);return{setMask:function(st){ht!==st&&!O&&(s.colorMask(st,st,st,st),ht=st)},setLocked:function(st){O=st},setClear:function(st,Q,Tt,Xt,Ee){Ee===!0&&(st*=Xt,Q*=Xt,Tt*=Xt),at.set(st,Q,Tt,Xt),St.equals(at)===!1&&(s.clearColor(st,Q,Tt,Xt),St.copy(at))},reset:function(){O=!1,ht=null,St.set(-1,0,0,0)}}}function n(){let O=!1,at=!1,ht=null,St=null,st=null;return{setReversed:function(Q){if(at!==Q){const Tt=t.get("EXT_clip_control");Q?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),at=Q;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return at},setTest:function(Q){Q?K(s.DEPTH_TEST):it(s.DEPTH_TEST)},setMask:function(Q){ht!==Q&&!O&&(s.depthMask(Q),ht=Q)},setFunc:function(Q){if(at&&(Q=D1[Q]),St!==Q){switch(Q){case tl:s.depthFunc(s.NEVER);break;case el:s.depthFunc(s.ALWAYS);break;case nl:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case il:s.depthFunc(s.EQUAL);break;case sl:s.depthFunc(s.GEQUAL);break;case rl:s.depthFunc(s.GREATER);break;case ol:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=Q}},setLocked:function(Q){O=Q},setClear:function(Q){st!==Q&&(at&&(Q=1-Q),s.clearDepth(Q),st=Q)},reset:function(){O=!1,ht=null,St=null,st=null,at=!1}}}function r(){let O=!1,at=null,ht=null,St=null,st=null,Q=null,Tt=null,Xt=null,Ee=null;return{setTest:function(me){O||(me?K(s.STENCIL_TEST):it(s.STENCIL_TEST))},setMask:function(me){at!==me&&!O&&(s.stencilMask(me),at=me)},setFunc:function(me,wi,hi){(ht!==me||St!==wi||st!==hi)&&(s.stencilFunc(me,wi,hi),ht=me,St=wi,st=hi)},setOp:function(me,wi,hi){(Q!==me||Tt!==wi||Xt!==hi)&&(s.stencilOp(me,wi,hi),Q=me,Tt=wi,Xt=hi)},setLocked:function(me){O=me},setClear:function(me){Ee!==me&&(s.clearStencil(me),Ee=me)},reset:function(){O=!1,at=null,ht=null,St=null,st=null,Q=null,Tt=null,Xt=null,Ee=null}}}const i=new e,o=new n,l=new r,h=new WeakMap,a=new WeakMap;let c={},u={},p=new WeakMap,m=[],v=null,y=!1,x=null,_=null,R=null,E=null,S=null,b=null,I=null,A=new Gt(0,0,0),f=0,d=!1,g=null,M=null,C=null,L=null,k=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Y>=2);let J=null,tt={};const vt=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),ae=new ye().fromArray(vt),le=new ye().fromArray(Vt);function Zt(O,at,ht,St){const st=new Uint8Array(4),Q=s.createTexture();s.bindTexture(O,Q),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Tt=0;Tt<ht;Tt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(at+Tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return Q}const X={};X[s.TEXTURE_2D]=Zt(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=Zt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=Zt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=Zt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),l.setClear(0),K(s.DEPTH_TEST),o.setFunc(Js),Lt(!1),xt(Lc),K(s.CULL_FACE),ue(Zi);function K(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function it(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Et(O,at){return u[O]!==at?(s.bindFramebuffer(O,at),u[O]=at,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function gt(O,at){let ht=m,St=!1;if(O){ht=p.get(at),ht===void 0&&(ht=[],p.set(at,ht));const st=O.textures;if(ht.length!==st.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Tt=st.length;Q<Tt;Q++)ht[Q]=s.COLOR_ATTACHMENT0+Q;ht.length=st.length,St=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,St=!0);St&&s.drawBuffers(ht)}function Wt(O){return v!==O?(s.useProgram(O),v=O,!0):!1}const we={[ps]:s.FUNC_ADD,[wd]:s.FUNC_SUBTRACT,[Ed]:s.FUNC_REVERSE_SUBTRACT};we[Td]=s.MIN,we[Ad]=s.MAX;const D={[Rd]:s.ZERO,[Cd]:s.ONE,[Id]:s.SRC_COLOR,[Ja]:s.SRC_ALPHA,[Nd]:s.SRC_ALPHA_SATURATE,[kd]:s.DST_COLOR,[Ld]:s.DST_ALPHA,[Pd]:s.ONE_MINUS_SRC_COLOR,[Qa]:s.ONE_MINUS_SRC_ALPHA,[Ud]:s.ONE_MINUS_DST_COLOR,[Dd]:s.ONE_MINUS_DST_ALPHA,[Fd]:s.CONSTANT_COLOR,[Od]:s.ONE_MINUS_CONSTANT_COLOR,[Bd]:s.CONSTANT_ALPHA,[zd]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(O,at,ht,St,st,Q,Tt,Xt,Ee,me){if(O===Zi){y===!0&&(it(s.BLEND),y=!1);return}if(y===!1&&(K(s.BLEND),y=!0),O!==Sd){if(O!==x||me!==d){if((_!==ps||S!==ps)&&(s.blendEquation(s.FUNC_ADD),_=ps,S=ps),me)switch(O){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dc:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,E=null,b=null,I=null,A.set(0,0,0),f=0,x=O,d=me}return}st=st||at,Q=Q||ht,Tt=Tt||St,(at!==_||st!==S)&&(s.blendEquationSeparate(we[at],we[st]),_=at,S=st),(ht!==R||St!==E||Q!==b||Tt!==I)&&(s.blendFuncSeparate(D[ht],D[St],D[Q],D[Tt]),R=ht,E=St,b=Q,I=Tt),(Xt.equals(A)===!1||Ee!==f)&&(s.blendColor(Xt.r,Xt.g,Xt.b,Ee),A.copy(Xt),f=Ee),x=O,d=!1}function Rt(O,at){O.side===sn?it(s.CULL_FACE):K(s.CULL_FACE);let ht=O.side===An;at&&(ht=!ht),Lt(ht),O.blending===Ys&&O.transparent===!1?ue(Zi):ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),i.setMask(O.colorWrite);const St=O.stencilWrite;l.setTest(St),St&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):it(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(O){g!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),g=O)}function xt(O){O!==yd?(K(s.CULL_FACE),O!==M&&(O===Lc?s.cullFace(s.BACK):O===Md?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):it(s.CULL_FACE),M=O}function he(O){O!==C&&(H&&s.lineWidth(O),C=O)}function yt(O,at,ht){O?(K(s.POLYGON_OFFSET_FILL),(L!==at||k!==ht)&&(s.polygonOffset(at,ht),L=at,k=ht)):it(s.POLYGON_OFFSET_FILL)}function $t(O){O?K(s.SCISSOR_TEST):it(s.SCISSOR_TEST)}function en(O){O===void 0&&(O=s.TEXTURE0+N-1),J!==O&&(s.activeTexture(O),J=O)}function Ne(O,at,ht){ht===void 0&&(J===null?ht=s.TEXTURE0+N-1:ht=J);let St=tt[ht];St===void 0&&(St={type:void 0,texture:void 0},tt[ht]=St),(St.type!==O||St.texture!==at)&&(J!==ht&&(s.activeTexture(ht),J=ht),s.bindTexture(O,at||X[O]),St.type=O,St.texture=at)}function P(){const O=tt[J];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(O){ae.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function Bt(O){le.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),le.copy(O))}function Pt(O,at){let ht=a.get(at);ht===void 0&&(ht=new WeakMap,a.set(at,ht));let St=ht.get(O);St===void 0&&(St=s.getUniformBlockIndex(at,O.name),ht.set(O,St))}function ft(O,at){const St=a.get(at).get(O);h.get(at)!==St&&(s.uniformBlockBinding(at,St,O.__bindingPointIndex),h.set(at,St))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},J=null,tt={},u={},p=new WeakMap,m=[],v=null,y=!1,x=null,_=null,R=null,E=null,S=null,b=null,I=null,A=new Gt(0,0,0),f=0,d=!1,g=null,M=null,C=null,L=null,k=null,ae.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),i.reset(),o.reset(),l.reset()}return{buffers:{color:i,depth:o,stencil:l},enable:K,disable:it,bindFramebuffer:Et,drawBuffers:gt,useProgram:Wt,setBlending:ue,setMaterial:Rt,setFlipSided:Lt,setCullFace:xt,setLineWidth:he,setPolygonOffset:yt,setScissorTest:$t,activeTexture:en,bindTexture:Ne,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:It,texImage3D:ot,updateUBOMapping:Pt,uniformBlockBinding:ft,texStorage2D:lt,texStorage3D:Ct,texSubImage2D:Z,texSubImage3D:et,compressedTexSubImage2D:j,compressedTexSubImage3D:Dt,scissor:_t,viewport:Bt,reset:Kt}}function U1(s,t,e,n,r,i,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new ce,c=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return m?new OffscreenCanvas(P,w):Oo("canvas")}function y(P,w,G){let Z=1;const et=Ne(P);if((et.width>G||et.height>G)&&(Z=G/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(Z*et.width),Dt=Math.floor(Z*et.height);u===void 0&&(u=v(j,Dt));const lt=w?v(j,Dt):u;return lt.width=j,lt.height=Dt,lt.getContext("2d").drawImage(P,0,0,j,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Dt+")."),lt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(P,w,G,Z,et=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===s.RED&&(G===s.FLOAT&&(j=s.R32F),G===s.HALF_FLOAT&&(j=s.R16F),G===s.UNSIGNED_BYTE&&(j=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.R8UI),G===s.UNSIGNED_SHORT&&(j=s.R16UI),G===s.UNSIGNED_INT&&(j=s.R32UI),G===s.BYTE&&(j=s.R8I),G===s.SHORT&&(j=s.R16I),G===s.INT&&(j=s.R32I)),w===s.RG&&(G===s.FLOAT&&(j=s.RG32F),G===s.HALF_FLOAT&&(j=s.RG16F),G===s.UNSIGNED_BYTE&&(j=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RG8UI),G===s.UNSIGNED_SHORT&&(j=s.RG16UI),G===s.UNSIGNED_INT&&(j=s.RG32UI),G===s.BYTE&&(j=s.RG8I),G===s.SHORT&&(j=s.RG16I),G===s.INT&&(j=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGB8UI),G===s.UNSIGNED_SHORT&&(j=s.RGB16UI),G===s.UNSIGNED_INT&&(j=s.RGB32UI),G===s.BYTE&&(j=s.RGB8I),G===s.SHORT&&(j=s.RGB16I),G===s.INT&&(j=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),G===s.UNSIGNED_INT&&(j=s.RGBA32UI),G===s.BYTE&&(j=s.RGBA8I),G===s.SHORT&&(j=s.RGBA16I),G===s.INT&&(j=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),w===s.RGBA){const Dt=et?No:fe.getTransfer(Z);G===s.FLOAT&&(j=s.RGBA32F),G===s.HALF_FLOAT&&(j=s.RGBA16F),G===s.UNSIGNED_BYTE&&(j=Dt===xe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(P,w){let G;return P?w===null||w===bs||w===Rr?G=s.DEPTH24_STENCIL8:w===Ni?G=s.DEPTH32F_STENCIL8:w===Ar&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===bs||w===Rr?G=s.DEPTH_COMPONENT24:w===Ni?G=s.DEPTH_COMPONENT32F:w===Ar&&(G=s.DEPTH_COMPONENT16),G}function b(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==qn&&P.minFilter!==di?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){const w=P.target;w.removeEventListener("dispose",I),f(w),w.isVideoTexture&&c.delete(w)}function A(P){const w=P.target;w.removeEventListener("dispose",A),g(w)}function f(P){const w=n.get(P);if(w.__webglInit===void 0)return;const G=P.source,Z=p.get(G);if(Z){const et=Z[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&d(P),Object.keys(Z).length===0&&p.delete(G)}n.remove(P)}function d(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const G=P.source,Z=p.get(G);delete Z[w.__cacheKey],o.memory.textures--}function g(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let et=0;et<w.__webglFramebuffer[Z].length;et++)s.deleteFramebuffer(w.__webglFramebuffer[Z][et]);else s.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[Z]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=P.textures;for(let Z=0,et=G.length;Z<et;Z++){const j=n.get(G[Z]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(P)}let M=0;function C(){M=0}function L(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function k(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function N(P,w){const G=n.get(P);if(P.isVideoTexture&&$t(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,P,w);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function H(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){X(G,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function Y(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){X(G,P,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function V(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const J={[cl]:s.REPEAT,[vs]:s.CLAMP_TO_EDGE,[hl]:s.MIRRORED_REPEAT},tt={[qn]:s.NEAREST,[jd]:s.NEAREST_MIPMAP_NEAREST,[$r]:s.NEAREST_MIPMAP_LINEAR,[di]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},vt={[tf]:s.NEVER,[af]:s.ALWAYS,[ef]:s.LESS,[Su]:s.LEQUAL,[nf]:s.EQUAL,[of]:s.GEQUAL,[sf]:s.GREATER,[rf]:s.NOTEQUAL};function Vt(P,w){if(w.type===Ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===di||w.magFilter===ra||w.magFilter===$r||w.magFilter===xs||w.minFilter===di||w.minFilter===ra||w.minFilter===$r||w.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,J[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,J[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,J[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,tt[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,tt[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,vt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qn||w.minFilter!==$r&&w.minFilter!==xs||w.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ae(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));const Z=w.source;let et=p.get(Z);et===void 0&&(et={},p.set(Z,et));const j=k(w);if(j!==P.__cacheKey){et[j]===void 0&&(et[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[j].usedTimes++;const Dt=et[P.__cacheKey];Dt!==void 0&&(et[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&d(w)),P.__cacheKey=j,P.__webglTexture=et[j].texture}return G}function le(P,w,G){return Math.floor(Math.floor(P/G)/w)}function Zt(P,w,G,Z){const j=P.updateRanges;if(j.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,Z,w.data);else{j.sort((ot,_t)=>ot.start-_t.start);let Dt=0;for(let ot=1;ot<j.length;ot++){const _t=j[Dt],Bt=j[ot],Pt=_t.start+_t.count,ft=le(Bt.start,w.width,4),Kt=le(_t.start,w.width,4);Bt.start<=Pt+1&&ft===Kt&&le(Bt.start+Bt.count-1,w.width,4)===ft?_t.count=Math.max(_t.count,Bt.start+Bt.count-_t.start):(++Dt,j[Dt]=Bt)}j.length=Dt+1;const lt=s.getParameter(s.UNPACK_ROW_LENGTH),Ct=s.getParameter(s.UNPACK_SKIP_PIXELS),It=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ot=0,_t=j.length;ot<_t;ot++){const Bt=j[ot],Pt=Math.floor(Bt.start/4),ft=Math.ceil(Bt.count/4),Kt=Pt%w.width,O=Math.floor(Pt/w.width),at=ft,ht=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Kt,O,at,ht,G,Z,w.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,It)}}function X(P,w,G){let Z=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=s.TEXTURE_3D);const et=ae(P,w),j=w.source;e.bindTexture(Z,P.__webglTexture,s.TEXTURE0+G);const Dt=n.get(j);if(j.version!==Dt.__version||et===!0){e.activeTexture(s.TEXTURE0+G);const lt=fe.getPrimaries(fe.workingColorSpace),Ct=w.colorSpace===Ki?null:fe.getPrimaries(w.colorSpace),It=w.colorSpace===Ki||lt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ot=y(w.image,!1,r.maxTextureSize);ot=en(w,ot);const _t=i.convert(w.format,w.colorSpace),Bt=i.convert(w.type);let Pt=E(w.internalFormat,_t,Bt,w.colorSpace,w.isVideoTexture);Vt(Z,w);let ft;const Kt=w.mipmaps,O=w.isVideoTexture!==!0,at=Dt.__version===void 0||et===!0,ht=j.dataReady,St=b(w,ot);if(w.isDepthTexture)Pt=S(w.format===Ir,w.type),at&&(O?e.texStorage2D(s.TEXTURE_2D,1,Pt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Pt,ot.width,ot.height,0,_t,Bt,null));else if(w.isDataTexture)if(Kt.length>0){O&&at&&e.texStorage2D(s.TEXTURE_2D,St,Pt,Kt[0].width,Kt[0].height);for(let st=0,Q=Kt.length;st<Q;st++)ft=Kt[st],O?ht&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ft.width,ft.height,_t,Bt,ft.data):e.texImage2D(s.TEXTURE_2D,st,Pt,ft.width,ft.height,0,_t,Bt,ft.data);w.generateMipmaps=!1}else O?(at&&e.texStorage2D(s.TEXTURE_2D,St,Pt,ot.width,ot.height),ht&&Zt(w,ot,_t,Bt)):e.texImage2D(s.TEXTURE_2D,0,Pt,ot.width,ot.height,0,_t,Bt,ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Pt,Kt[0].width,Kt[0].height,ot.depth);for(let st=0,Q=Kt.length;st<Q;st++)if(ft=Kt[st],w.format!==ai)if(_t!==null)if(O){if(ht)if(w.layerUpdates.size>0){const Tt=mh(ft.width,ft.height,w.format,w.type);for(const Xt of w.layerUpdates){const Ee=ft.data.subarray(Xt*Tt/ft.data.BYTES_PER_ELEMENT,(Xt+1)*Tt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Xt,ft.width,ft.height,1,_t,Ee)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,ot.depth,_t,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Pt,ft.width,ft.height,ot.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ht&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,ot.depth,_t,Bt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Pt,ft.width,ft.height,ot.depth,0,_t,Bt,ft.data)}else{O&&at&&e.texStorage2D(s.TEXTURE_2D,St,Pt,Kt[0].width,Kt[0].height);for(let st=0,Q=Kt.length;st<Q;st++)ft=Kt[st],w.format!==ai?_t!==null?O?ht&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,ft.width,ft.height,_t,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ht&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ft.width,ft.height,_t,Bt,ft.data):e.texImage2D(s.TEXTURE_2D,st,Pt,ft.width,ft.height,0,_t,Bt,ft.data)}else if(w.isDataArrayTexture)if(O){if(at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Pt,ot.width,ot.height,ot.depth),ht)if(w.layerUpdates.size>0){const st=mh(ot.width,ot.height,w.format,w.type);for(const Q of w.layerUpdates){const Tt=ot.data.subarray(Q*st/ot.data.BYTES_PER_ELEMENT,(Q+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,_t,Bt,Tt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,_t,Bt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,ot.width,ot.height,ot.depth,0,_t,Bt,ot.data);else if(w.isData3DTexture)O?(at&&e.texStorage3D(s.TEXTURE_3D,St,Pt,ot.width,ot.height,ot.depth),ht&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,_t,Bt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,ot.width,ot.height,ot.depth,0,_t,Bt,ot.data);else if(w.isFramebufferTexture){if(at)if(O)e.texStorage2D(s.TEXTURE_2D,St,Pt,ot.width,ot.height);else{let st=ot.width,Q=ot.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,Pt,st,Q,0,_t,Bt,null),st>>=1,Q>>=1}}else if(Kt.length>0){if(O&&at){const st=Ne(Kt[0]);e.texStorage2D(s.TEXTURE_2D,St,Pt,st.width,st.height)}for(let st=0,Q=Kt.length;st<Q;st++)ft=Kt[st],O?ht&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,_t,Bt,ft):e.texImage2D(s.TEXTURE_2D,st,Pt,_t,Bt,ft);w.generateMipmaps=!1}else if(O){if(at){const st=Ne(ot);e.texStorage2D(s.TEXTURE_2D,St,Pt,st.width,st.height)}ht&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Bt,ot)}else e.texImage2D(s.TEXTURE_2D,0,Pt,_t,Bt,ot);x(w)&&_(Z),Dt.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function K(P,w,G){if(w.image.length!==6)return;const Z=ae(P,w),et=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const j=n.get(et);if(et.version!==j.__version||Z===!0){e.activeTexture(s.TEXTURE0+G);const Dt=fe.getPrimaries(fe.workingColorSpace),lt=w.colorSpace===Ki?null:fe.getPrimaries(w.colorSpace),Ct=w.colorSpace===Ki||Dt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const It=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!It&&!ot?_t[Q]=y(w.image[Q],!0,r.maxCubemapSize):_t[Q]=ot?w.image[Q].image:w.image[Q],_t[Q]=en(w,_t[Q]);const Bt=_t[0],Pt=i.convert(w.format,w.colorSpace),ft=i.convert(w.type),Kt=E(w.internalFormat,Pt,ft,w.colorSpace),O=w.isVideoTexture!==!0,at=j.__version===void 0||Z===!0,ht=et.dataReady;let St=b(w,Bt);Vt(s.TEXTURE_CUBE_MAP,w);let st;if(It){O&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Kt,Bt.width,Bt.height);for(let Q=0;Q<6;Q++){st=_t[Q].mipmaps;for(let Tt=0;Tt<st.length;Tt++){const Xt=st[Tt];w.format!==ai?Pt!==null?O?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Xt.width,Xt.height,Pt,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Kt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Xt.width,Xt.height,Pt,ft,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Kt,Xt.width,Xt.height,0,Pt,ft,Xt.data)}}}else{if(st=w.mipmaps,O&&at){st.length>0&&St++;const Q=Ne(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){O?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Pt,ft,_t[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,_t[Q].width,_t[Q].height,0,Pt,ft,_t[Q].data);for(let Tt=0;Tt<st.length;Tt++){const Ee=st[Tt].image[Q].image;O?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,Ee.width,Ee.height,Pt,ft,Ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Kt,Ee.width,Ee.height,0,Pt,ft,Ee.data)}}else{O?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,ft,_t[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Pt,ft,_t[Q]);for(let Tt=0;Tt<st.length;Tt++){const Xt=st[Tt];O?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,Pt,ft,Xt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Kt,Pt,ft,Xt.image[Q])}}}x(w)&&_(s.TEXTURE_CUBE_MAP),j.__version=et.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function it(P,w,G,Z,et,j){const Dt=i.convert(G.format,G.colorSpace),lt=i.convert(G.type),Ct=E(G.internalFormat,Dt,lt,G.colorSpace),It=n.get(w),ot=n.get(G);if(ot.__renderTarget=w,!It.__hasExternalTextures){const _t=Math.max(1,w.width>>j),Bt=Math.max(1,w.height>>j);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,j,Ct,_t,Bt,w.depth,0,Dt,lt,null):e.texImage2D(et,j,Ct,_t,Bt,0,Dt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),yt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,et,ot.__webglTexture,0,he(w)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,et,ot.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(P,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const Z=w.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,j=S(w.stencilBuffer,et),Dt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=he(w);yt(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,j,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,j,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,j,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,P)}else{const Z=w.textures;for(let et=0;et<Z.length;et++){const j=Z[et],Dt=i.convert(j.format,j.colorSpace),lt=i.convert(j.type),Ct=E(j.internalFormat,Dt,lt,j.colorSpace),It=he(w);G&&yt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,Ct,w.width,w.height):yt(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,Ct,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ct,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const et=Z.__webglTexture,j=he(w);if(w.depthTexture.format===Cr)yt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(w.depthTexture.format===Ir)yt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(P){const w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=Z}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?gt(w.__webglFramebuffer[0],P):gt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=s.createRenderbuffer(),Et(w.__webglDepthbuffer[Z],P,!1);else{const et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,j)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Et(w.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,j)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function we(P,w,G){const Z=n.get(P);w!==void 0&&it(Z.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Wt(P)}function D(P){const w=P.texture,G=n.get(P),Z=n.get(w);P.addEventListener("dispose",A);const et=P.textures,j=P.isWebGLCubeRenderTarget===!0,Dt=et.length>1;if(Dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=w.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let Ct=0;Ct<w.mipmaps.length;Ct++)G.__webglFramebuffer[lt][Ct]=s.createFramebuffer()}else G.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)G.__webglFramebuffer[lt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let lt=0,Ct=et.length;lt<Ct;lt++){const It=n.get(et[lt]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&yt(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const Ct=et[lt];G.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const It=i.convert(Ct.format,Ct.colorSpace),ot=i.convert(Ct.type),_t=E(Ct.internalFormat,It,ot,Ct.colorSpace,P.isXRRenderTarget===!0),Bt=he(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,_t,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)it(G.__webglFramebuffer[lt][Ct],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct);else it(G.__webglFramebuffer[lt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);x(w)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let lt=0,Ct=et.length;lt<Ct;lt++){const It=et[lt],ot=n.get(It);let _t=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,ot.__webglTexture),Vt(_t,It),it(G.__webglFramebuffer,P,It,s.COLOR_ATTACHMENT0+lt,_t,0),x(It)&&_(_t)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),Vt(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)it(G.__webglFramebuffer[Ct],P,w,s.COLOR_ATTACHMENT0,lt,Ct);else it(G.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,lt,0);x(w)&&_(lt),e.unbindTexture()}P.depthBuffer&&Wt(P)}function ue(P){const w=P.textures;for(let G=0,Z=w.length;G<Z;G++){const et=w[G];if(x(et)){const j=R(P),Dt=n.get(et).__webglTexture;e.bindTexture(j,Dt),_(j),e.unbindTexture()}}}const Rt=[],Lt=[];function xt(P){if(P.samples>0){if(yt(P)===!1){const w=P.textures,G=P.width,Z=P.height;let et=s.COLOR_BUFFER_BIT;const j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=n.get(P),lt=w.length>1;if(lt)for(let It=0;It<w.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Ct=P.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let It=0;It<w.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[It]);const ot=n.get(w[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,G,Z,0,0,G,Z,et,s.NEAREST),h===!0&&(Rt.length=0,Lt.length=0,Rt.push(s.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(j),Lt.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let It=0;It<w.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[It]);const ot=n.get(w[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function he(P){return Math.min(r.maxSamples,P.samples)}function yt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $t(P){const w=o.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function en(P,w){const G=P.colorSpace,Z=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==er&&G!==Ki&&(fe.getTransfer(G)===xe?(Z!==ai||et!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(a.width=P.naturalWidth||P.width,a.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(a.width=P.displayWidth,a.height=P.displayHeight):(a.width=P.width,a.height=P.height),a}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=we,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=yt}function N1(s,t){function e(n,r=Ki){let i;const o=fe.getTransfer(r);if(n===xi)return s.UNSIGNED_BYTE;if(n===tc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return s.BYTE;if(n===mu)return s.SHORT;if(n===Ar)return s.UNSIGNED_SHORT;if(n===Ql)return s.INT;if(n===bs)return s.UNSIGNED_INT;if(n===Ni)return s.FLOAT;if(n===Ur)return s.HALF_FLOAT;if(n===vu)return s.ALPHA;if(n===xu)return s.RGB;if(n===ai)return s.RGBA;if(n===Cr)return s.DEPTH_COMPONENT;if(n===Ir)return s.DEPTH_STENCIL;if(n===yu)return s.RED;if(n===nc)return s.RED_INTEGER;if(n===Mu)return s.RG;if(n===ic)return s.RG_INTEGER;if(n===sc)return s.RGBA_INTEGER;if(n===Ro||n===Co||n===Io||n===Po)if(o===xe)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Ro)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Ro)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===dl||n===fl||n===pl)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===ul)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===_l)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===ml||n===gl)return o===xe?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===_l)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===xl||n===yl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===vl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ml)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return o===xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Dl||n===kl)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===Ll)return o===xe?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===Nl||n===Fl||n===Ol)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===Ul)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const F1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O1=`
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

}`;class B1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Uu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mi({vertexShader:F1,fragmentShader:O1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $e(new Xo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z1 extends sr{constructor(t,e){super();const n=this;let r=null,i=1,o=null,l="local-floor",h=1,a=null,c=null,u=null,p=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",x=new B1,_={},R=e.getContextAttributes();let E=null,S=null;const b=[],I=[],A=new ce;let f=null;const d=new Wn;d.viewport=new ye;const g=new Wn;g.viewport=new ye;const M=[d,g],C=new ap;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=b[X];return K===void 0&&(K=new Ta,b[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=b[X];return K===void 0&&(K=new Ta,b[X]=K),K.getGripSpace()},this.getHand=function(X){let K=b[X];return K===void 0&&(K=new Ta,b[X]=K),K.getHandSpace()};function N(X){const K=I.indexOf(X.inputSource);if(K===-1)return;const it=b[K];it!==void 0&&(it.update(X.inputSource,X.frame,a||o),it.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let X=0;X<b.length;X++){const K=I[X];K!==null&&(I[X]=null,b[X].disconnect(K))}L=null,k=null,x.reset();for(const X in _)delete _[X];t.setRenderTarget(E),m=null,p=null,u=null,r=null,S=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(f),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){i=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(X){a=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),R.xrCompatible!==!0&&await e.makeXRCompatible(),f=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Et=null,gt=null;R.depth&&(gt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=R.stencil?Ir:Cr,Et=R.stencil?Rr:bs);const Wt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:i};u=this.getBinding(),p=u.createProjectionLayer(Wt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new Ss(p.textureWidth,p.textureHeight,{format:ai,type:xi,depthTexture:new ku(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const it={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ss(m.framebufferWidth,m.framebufferHeight,{format:ai,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),a=null,o=await r.requestReferenceSpace(l),Zt.setContext(r),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(X){for(let K=0;K<X.removed.length;K++){const it=X.removed[K],Et=I.indexOf(it);Et>=0&&(I[Et]=null,b[Et].disconnect(it))}for(let K=0;K<X.added.length;K++){const it=X.added[K];let Et=I.indexOf(it);if(Et===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=I.length){I.push(it),Et=Wt;break}else if(I[Wt]===null){I[Wt]=it,Et=Wt;break}if(Et===-1)break}const gt=b[Et];gt&&gt.connect(it)}}const V=new F,J=new F;function tt(X,K,it){V.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(it.matrixWorld);const Et=V.distanceTo(J),gt=K.projectionMatrix.elements,Wt=it.projectionMatrix.elements,we=gt[14]/(gt[10]-1),D=gt[14]/(gt[10]+1),ue=(gt[9]+1)/gt[5],Rt=(gt[9]-1)/gt[5],Lt=(gt[8]-1)/gt[0],xt=(Wt[8]+1)/Wt[0],he=we*Lt,yt=we*xt,$t=Et/(-Lt+xt),en=$t*-Lt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(en),X.translateZ($t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),gt[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ne=we+$t,P=D+$t,w=he-en,G=yt+(Et-en),Z=ue*D/P*Ne,et=Rt*D/P*Ne;X.projectionMatrix.makePerspective(w,G,Z,et,Ne,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function vt(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let K=X.near,it=X.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(it=x.depthFar)),C.near=g.near=d.near=K,C.far=g.far=d.far=it,(L!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,k=C.far),C.layers.mask=X.layers.mask|6,d.layers.mask=C.layers.mask&3,g.layers.mask=C.layers.mask&5;const Et=X.parent,gt=C.cameras;vt(C,Et);for(let Wt=0;Wt<gt.length;Wt++)vt(gt[Wt],Et);gt.length===2?tt(C,d,g):C.projectionMatrix.copy(d.projectionMatrix),Vt(X,C,Et)};function Vt(X,K,it){it===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(it.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Pr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function(X){h=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(X){return _[X]};let ae=null;function le(X,K){if(c=K.getViewerPose(a||o),v=K,c!==null){const it=c.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Et=!1;it.length!==C.cameras.length&&(C.cameras.length=0,Et=!0);for(let D=0;D<it.length;D++){const ue=it[D];let Rt=null;if(m!==null)Rt=m.getViewport(ue);else{const xt=u.getViewSubImage(p,ue);Rt=xt.viewport,D===0&&(t.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(S))}let Lt=M[D];Lt===void 0&&(Lt=new Wn,Lt.layers.enable(D),Lt.viewport=new ye,M[D]=Lt),Lt.matrix.fromArray(ue.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ue.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),D===0&&(C.matrix.copy(Lt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Et===!0&&C.cameras.push(Lt)}const gt=r.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const D=u.getDepthInformation(it[0]);D&&D.isValid&&D.texture&&x.init(D,r.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<it.length;D++){const ue=it[D].camera;if(ue){let Rt=_[ue];Rt||(Rt=new Uu,_[ue]=Rt);const Lt=u.getCameraImage(ue);Rt.sourceTexture=Lt}}}}for(let it=0;it<b.length;it++){const Et=I[it],gt=b[it];Et!==null&&gt!==void 0&&gt.update(Et,K,a||o)}ae&&ae(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}const Zt=new Ou;Zt.setAnimationLoop(le),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const hs=new yi,H1=new Ce;function G1(s,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Iu(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,R,E,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(x,_):_.isMeshToonMaterial?(i(x,_),u(x,_)):_.isMeshPhongMaterial?(i(x,_),c(x,_)):_.isMeshStandardMaterial?(i(x,_),p(x,_),_.isMeshPhysicalMaterial&&m(x,_,S)):_.isMeshMatcapMaterial?(i(x,_),v(x,_)):_.isMeshDepthMaterial?i(x,_):_.isMeshDistanceMaterial?(i(x,_),y(x,_)):_.isMeshNormalMaterial?i(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?h(x,_,R,E):_.isSpriteMaterial?a(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===An&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===An&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const R=t.get(_),E=R.envMap,S=R.envMapRotation;E&&(x.envMap.value=E,hs.copy(S),hs.x*=-1,hs.y*=-1,hs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),x.envMapRotation.value.setFromMatrix4(H1.makeRotationFromEuler(hs)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,R,E){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*R,x.scale.value=E*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function c(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function u(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,R){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){const R=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function V1(s,t,e,n){let r={},i={},o=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,E){const S=E.program;n.uniformBlockBinding(R,S)}function a(R,E){let S=r[R.id];S===void 0&&(v(R),S=c(R),r[R.id]=S,R.addEventListener("dispose",x));const b=E.program;n.updateUBOMapping(R,b);const I=t.render.frame;i[R.id]!==I&&(p(R),i[R.id]=I)}function c(R){const E=u();R.__bindingPointIndex=E;const S=s.createBuffer(),b=R.__size,I=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,b,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,S),S}function u(){for(let R=0;R<l;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const E=r[R.id],S=R.uniforms,b=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let I=0,A=S.length;I<A;I++){const f=Array.isArray(S[I])?S[I]:[S[I]];for(let d=0,g=f.length;d<g;d++){const M=f[d];if(m(M,I,d,b)===!0){const C=M.__offset,L=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let N=0;N<L.length;N++){const H=L[N],Y=y(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,C+k,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(R,E,S,b){const I=R.value,A=E+"_"+S;if(b[A]===void 0)return typeof I=="number"||typeof I=="boolean"?b[A]=I:b[A]=I.clone(),!0;{const f=b[A];if(typeof I=="number"||typeof I=="boolean"){if(f!==I)return b[A]=I,!0}else if(f.equals(I)===!1)return f.copy(I),!0}return!1}function v(R){const E=R.uniforms;let S=0;const b=16;for(let A=0,f=E.length;A<f;A++){const d=Array.isArray(E[A])?E[A]:[E[A]];for(let g=0,M=d.length;g<M;g++){const C=d[g],L=Array.isArray(C.value)?C.value:[C.value];for(let k=0,N=L.length;k<N;k++){const H=L[k],Y=y(H),V=S%b,J=V%Y.boundary,tt=V+J;S+=J,tt!==0&&b-tt<Y.storage&&(S+=b-tt),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=Y.storage}}}const I=S%b;return I>0&&(S+=b-I),R.__size=S,R.__cache={},this}function y(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function x(R){const E=R.target;E.removeEventListener("dispose",x);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(r[E.id]),delete r[E.id],delete i[E.id]}function _(){for(const R in r)s.deleteBuffer(r[R]);o=[],r={},i={}}return{bind:h,update:a,dispose:_}}class W1{constructor(t={}){const{canvas:e=wf(),context:n=null,depth:r=!0,stencil:i=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:a=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const R=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=kn;let I=0,A=0,f=null,d=-1,g=null;const M=new ye,C=new ye;let L=null;const k=new Gt(0);let N=0,H=e.width,Y=e.height,V=1,J=null,tt=null;const vt=new ye(0,0,H,Y),Vt=new ye(0,0,H,Y);let ae=!1;const le=new cc;let Zt=!1,X=!1;const K=new Ce,it=new F,Et=new ye,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function we(){return f===null?V:1}let D=n;function ue(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:i,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zl}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",st,!1),D===null){const B="webgl2";if(D=ue(B,T),D===null)throw ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Rt,Lt,xt,he,yt,$t,en,Ne,P,w,G,Z,et,j,Dt,lt,Ct,It,ot,_t,Bt,Pt,ft,Kt;function O(){Rt=new tg(D),Rt.init(),Pt=new N1(D,Rt),Lt=new $0(D,Rt,t,Pt),xt=new k1(D,Rt),Lt.reversedDepthBuffer&&p&&xt.buffers.depth.setReversed(!0),he=new ig(D),yt=new M1,$t=new U1(D,Rt,xt,yt,Lt,Pt,he),en=new K0(S),Ne=new Q0(S),P=new cp(D),ft=new q0(D,P),w=new eg(D,P,he,ft),G=new rg(D,w,P,he),ot=new sg(D,Lt,$t),lt=new Y0(yt),Z=new y1(S,en,Ne,Rt,Lt,ft,lt),et=new G1(S,yt),j=new S1,Dt=new C1(Rt),It=new W0(S,en,Ne,xt,G,m,h),Ct=new L1(S,G,Lt),Kt=new V1(D,he,Lt,xt),_t=new X0(D,Rt,he),Bt=new ng(D,Rt,he),he.programs=Z.programs,S.capabilities=Lt,S.extensions=Rt,S.properties=yt,S.renderLists=j,S.shadowMap=Ct,S.state=xt,S.info=he}O();const at=new z1(S,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,Y,!1))},this.getSize=function(T){return T.set(H,Y)},this.setSize=function(T,B,q=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Y=B,e.width=Math.floor(T*V),e.height=Math.floor(B*V),q===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*V,Y*V).floor()},this.setDrawingBufferSize=function(T,B,q){H=T,Y=B,V=q,e.width=Math.floor(T*q),e.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,B,q,$){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,B,q,$),xt.viewport(M.copy(vt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Vt)},this.setScissor=function(T,B,q,$){T.isVector4?Vt.set(T.x,T.y,T.z,T.w):Vt.set(T,B,q,$),xt.scissor(C.copy(Vt).multiplyScalar(V).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){xt.setScissorTest(ae=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,q=!0){let $=0;if(T){let z=!1;if(f!==null){const rt=f.texture.format;z=rt===sc||rt===ic||rt===nc}if(z){const rt=f.texture.type,pt=rt===xi||rt===bs||rt===Ar||rt===Rr||rt===tc||rt===ec,wt=It.getClearColor(),Mt=It.getClearAlpha(),Ot=wt.r,zt=wt.g,Ut=wt.b;pt?(v[0]=Ot,v[1]=zt,v[2]=Ut,v[3]=Mt,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=Ot,y[1]=zt,y[2]=Ut,y[3]=Mt,D.clearBufferiv(D.COLOR,0,y))}else $|=D.COLOR_BUFFER_BIT}B&&($|=D.DEPTH_BUFFER_BIT),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",st,!1),It.dispose(),j.dispose(),Dt.dispose(),yt.dispose(),en.dispose(),Ne.dispose(),G.dispose(),ft.dispose(),Kt.dispose(),Z.dispose(),at.dispose(),at.removeEventListener("sessionstart",hi),at.removeEventListener("sessionend",Tc),is.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=he.autoReset,B=Ct.enabled,q=Ct.autoUpdate,$=Ct.needsUpdate,z=Ct.type;O(),he.autoReset=T,Ct.enabled=B,Ct.autoUpdate=q,Ct.needsUpdate=$,Ct.type=z}function st(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){const B=T.target;B.removeEventListener("dispose",Q),Tt(B)}function Tt(T){Xt(T),yt.remove(T)}function Xt(T){const B=yt.get(T).programs;B!==void 0&&(B.forEach(function(q){Z.releaseProgram(q)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,$,z,rt){B===null&&(B=gt);const pt=z.isMesh&&z.matrixWorld.determinant()<0,wt=pd(T,B,q,$,z);xt.setMaterial($,pt);let Mt=q.index,Ot=1;if($.wireframe===!0){if(Mt=w.getWireframeAttribute(q),Mt===void 0)return;Ot=2}const zt=q.drawRange,Ut=q.attributes.position;let se=zt.start*Ot,_e=(zt.start+zt.count)*Ot;rt!==null&&(se=Math.max(se,rt.start*Ot),_e=Math.min(_e,(rt.start+rt.count)*Ot)),Mt!==null?(se=Math.max(se,0),_e=Math.min(_e,Mt.count)):Ut!=null&&(se=Math.max(se,0),_e=Math.min(_e,Ut.count));const ke=_e-se;if(ke<0||ke===1/0)return;ft.setup(z,$,wt,q,Mt);let Te,be=_t;if(Mt!==null&&(Te=P.get(Mt),be=Bt,be.setIndex(Te)),z.isMesh)$.wireframe===!0?(xt.setLineWidth($.wireframeLinewidth*we()),be.setMode(D.LINES)):be.setMode(D.TRIANGLES);else if(z.isLine){let Nt=$.linewidth;Nt===void 0&&(Nt=1),xt.setLineWidth(Nt*we()),z.isLineSegments?be.setMode(D.LINES):z.isLineLoop?be.setMode(D.LINE_LOOP):be.setMode(D.LINE_STRIP)}else z.isPoints?be.setMode(D.POINTS):z.isSprite&&be.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))be.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Nt=z._multiDrawStarts,Ie=z._multiDrawCounts,de=z._multiDrawCount,Fn=Mt?P.get(Mt).bytesPerElement:1,Ps=yt.get($).currentProgram.getUniforms();for(let On=0;On<de;On++)Ps.setValue(D,"_gl_DrawID",On),be.render(Nt[On]/Fn,Ie[On])}else if(z.isInstancedMesh)be.renderInstances(se,ke,z.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,Nt);be.renderInstances(se,ke,Ie)}else be.render(se,ke)};function Ee(T,B,q){T.transparent===!0&&T.side===sn&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,Xr(T,B,q),T.side=ts,T.needsUpdate=!0,Xr(T,B,q),T.side=sn):Xr(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),_=Dt.get(q),_.init(B),E.push(_),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),T!==q&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights();const $=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const wt=rt[pt];Ee(wt,q,z),$.add(wt)}else Ee(rt,q,z),$.add(rt)}),_=E.pop(),$},this.compileAsync=function(T,B,q=null){const $=this.compile(T,B,q);return new Promise(z=>{function rt(){if($.forEach(function(pt){yt.get(pt).currentProgram.isReady()&&$.delete(pt)}),$.size===0){z(T);return}setTimeout(rt,10)}Rt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let me=null;function wi(T){me&&me(T)}function hi(){is.stop()}function Tc(){is.start()}const is=new Ou;is.setAnimationLoop(wi),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(T){me=T,at.setAnimationLoop(T),T===null?is.stop():is.start()},at.addEventListener("sessionstart",hi),at.addEventListener("sessionend",Tc),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(B),B=at.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,f),_=Dt.get(T,E.length),_.init(B),E.push(_),K.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(K,fi,B.reversedDepth),X=this.localClippingEnabled,Zt=lt.init(this.clippingPlanes,X),x=j.get(T,R.length),x.init(),R.push(x),at.enabled===!0&&at.isPresenting===!0){const rt=S.xr.getDepthSensingMesh();rt!==null&&ia(rt,B,-1/0,S.sortObjects)}ia(T,B,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(J,tt),Wt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Wt&&It.addToRenderList(x,T),this.info.render.frame++,Zt===!0&&lt.beginShadows();const q=_.state.shadowsArray;Ct.render(q,T,B),Zt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,z=x.transmissive;if(_.setupLights(),B.isArrayCamera){const rt=B.cameras;if(z.length>0)for(let pt=0,wt=rt.length;pt<wt;pt++){const Mt=rt[pt];Rc($,z,T,Mt)}Wt&&It.render(T);for(let pt=0,wt=rt.length;pt<wt;pt++){const Mt=rt[pt];Ac(x,T,Mt,Mt.viewport)}}else z.length>0&&Rc($,z,T,B),Wt&&It.render(T),Ac(x,T,B);f!==null&&A===0&&($t.updateMultisampleRenderTarget(f),$t.updateRenderTargetMipmap(f)),T.isScene===!0&&T.onAfterRender(S,T,B),ft.resetDefaultState(),d=-1,g=null,E.pop(),E.length>0?(_=E[E.length-1],Zt===!0&&lt.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function ia(T,B,q,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||le.intersectsSprite(T)){$&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);const pt=G.update(T),wt=T.material;wt.visible&&x.push(T,pt,wt,q,Et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||le.intersectsObject(T))){const pt=G.update(T),wt=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Et.copy(pt.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(wt)){const Mt=pt.groups;for(let Ot=0,zt=Mt.length;Ot<zt;Ot++){const Ut=Mt[Ot],se=wt[Ut.materialIndex];se&&se.visible&&x.push(T,pt,se,q,Et.z,Ut)}}else wt.visible&&x.push(T,pt,wt,q,Et.z,null)}}const rt=T.children;for(let pt=0,wt=rt.length;pt<wt;pt++)ia(rt[pt],B,q,$)}function Ac(T,B,q,$){const z=T.opaque,rt=T.transmissive,pt=T.transparent;_.setupLightsView(q),Zt===!0&&lt.setGlobalState(S.clippingPlanes,q),$&&xt.viewport(M.copy($)),z.length>0&&qr(z,B,q),rt.length>0&&qr(rt,B,q),pt.length>0&&qr(pt,B,q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Rc(T,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new Ss(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Ur:xi,minFilter:xs,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const rt=_.state.transmissionRenderTarget[$.id],pt=$.viewport||M;rt.setSize(pt.z*S.transmissionResolutionScale,pt.w*S.transmissionResolutionScale);const wt=S.getRenderTarget(),Mt=S.getActiveCubeFace(),Ot=S.getActiveMipmapLevel();S.setRenderTarget(rt),S.getClearColor(k),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&It.render(q);const zt=S.toneMapping;S.toneMapping=Ji;const Ut=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),Zt===!0&&lt.setGlobalState(S.clippingPlanes,$),qr(T,q,$),$t.updateMultisampleRenderTarget(rt),$t.updateRenderTargetMipmap(rt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let _e=0,ke=B.length;_e<ke;_e++){const Te=B[_e],be=Te.object,Nt=Te.geometry,Ie=Te.material,de=Te.group;if(Ie.side===sn&&be.layers.test($.layers)){const Fn=Ie.side;Ie.side=An,Ie.needsUpdate=!0,Cc(be,q,$,Nt,Ie,de),Ie.side=Fn,Ie.needsUpdate=!0,se=!0}}se===!0&&($t.updateMultisampleRenderTarget(rt),$t.updateRenderTargetMipmap(rt))}S.setRenderTarget(wt,Mt,Ot),S.setClearColor(k,N),Ut!==void 0&&($.viewport=Ut),S.toneMapping=zt}function qr(T,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,rt=T.length;z<rt;z++){const pt=T[z],wt=pt.object,Mt=pt.geometry,Ot=pt.group;let zt=pt.material;zt.allowOverride===!0&&$!==null&&(zt=$),wt.layers.test(q.layers)&&Cc(wt,B,q,Mt,zt,Ot)}}function Cc(T,B,q,$,z,rt){T.onBeforeRender(S,B,q,$,z,rt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(S,B,q,$,T,rt),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=An,z.needsUpdate=!0,S.renderBufferDirect(q,B,$,z,T,rt),z.side=ts,z.needsUpdate=!0,S.renderBufferDirect(q,B,$,z,T,rt),z.side=sn):S.renderBufferDirect(q,B,$,z,T,rt),T.onAfterRender(S,B,q,$,z,rt)}function Xr(T,B,q){B.isScene!==!0&&(B=gt);const $=yt.get(T),z=_.state.lights,rt=_.state.shadowsArray,pt=z.state.version,wt=Z.getParameters(T,z.state,rt,B,q),Mt=Z.getProgramCacheKey(wt);let Ot=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?Ne:en).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Q),Ot=new Map,$.programs=Ot);let zt=Ot.get(Mt);if(zt!==void 0){if($.currentProgram===zt&&$.lightsStateVersion===pt)return Pc(T,wt),zt}else wt.uniforms=Z.getUniforms(T),T.onBeforeCompile(wt,S),zt=Z.acquireProgram(wt,Mt),Ot.set(Mt,zt),$.uniforms=wt.uniforms;const Ut=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=lt.uniform),Pc(T,wt),$.needsLights=gd(T),$.lightsStateVersion=pt,$.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=zt,$.uniformsList=null,zt}function Ic(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Lo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Pc(T,B){const q=yt.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function pd(T,B,q,$,z){B.isScene!==!0&&(B=gt),$t.resetTextureUnits();const rt=B.fog,pt=$.isMeshStandardMaterial?B.environment:null,wt=f===null?S.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:er,Mt=($.isMeshStandardMaterial?Ne:en).get($.envMap||pt),Ot=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,_e=!!q.morphAttributes.color;let ke=Ji;$.toneMapped&&(f===null||f.isXRRenderTarget===!0)&&(ke=S.toneMapping);const Te=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,be=Te!==void 0?Te.length:0,Nt=yt.get($),Ie=_.state.lights;if(Zt===!0&&(X===!0||T!==g)){const yn=T===g&&$.id===d;lt.setState($,T,yn)}let de=!1;$.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ie.state.version||Nt.outputColorSpace!==wt||z.isBatchedMesh&&Nt.batching===!1||!z.isBatchedMesh&&Nt.batching===!0||z.isBatchedMesh&&Nt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Nt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Nt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Nt.instancingMorph===!1&&z.morphTexture!==null||Nt.envMap!==Mt||$.fog===!0&&Nt.fog!==rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==Ot||Nt.vertexTangents!==zt||Nt.morphTargets!==Ut||Nt.morphNormals!==se||Nt.morphColors!==_e||Nt.toneMapping!==ke||Nt.morphTargetsCount!==be)&&(de=!0):(de=!0,Nt.__version=$.version);let Fn=Nt.currentProgram;de===!0&&(Fn=Xr($,B,z));let Ps=!1,On=!1,hr=!1;const Pe=Fn.getUniforms(),Yn=Nt.uniforms;if(xt.useProgram(Fn.program)&&(Ps=!0,On=!0,hr=!0),$.id!==d&&(d=$.id,On=!0),Ps||g!==T){xt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pe.setValue(D,"projectionMatrix",T.projectionMatrix),Pe.setValue(D,"viewMatrix",T.matrixWorldInverse);const Cn=Pe.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,it.setFromMatrixPosition(T.matrixWorld)),Lt.logarithmicDepthBuffer&&Pe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),g!==T&&(g=T,On=!0,hr=!0)}if(z.isSkinnedMesh){Pe.setOptional(D,z,"bindMatrix"),Pe.setOptional(D,z,"bindMatrixInverse");const yn=z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Pe.setValue(D,"boneTexture",yn.boneTexture,$t))}z.isBatchedMesh&&(Pe.setOptional(D,z,"batchingTexture"),Pe.setValue(D,"batchingTexture",z._matricesTexture,$t),Pe.setOptional(D,z,"batchingIdTexture"),Pe.setValue(D,"batchingIdTexture",z._indirectTexture,$t),Pe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Pe.setValue(D,"batchingColorTexture",z._colorsTexture,$t));const Kn=q.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&ot.update(z,q,Fn),(On||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,Pe.setValue(D,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Yn.envMap.value=Mt,Yn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Yn.envMapIntensity.value=B.environmentIntensity),On&&(Pe.setValue(D,"toneMappingExposure",S.toneMappingExposure),Nt.needsLights&&md(Yn,hr),rt&&$.fog===!0&&et.refreshFogUniforms(Yn,rt),et.refreshMaterialUniforms(Yn,$,V,Y,_.state.transmissionRenderTarget[T.id]),Lo.upload(D,Ic(Nt),Yn,$t)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Lo.upload(D,Ic(Nt),Yn,$t),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pe.setValue(D,"center",z.center),Pe.setValue(D,"modelViewMatrix",z.modelViewMatrix),Pe.setValue(D,"normalMatrix",z.normalMatrix),Pe.setValue(D,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const yn=$.uniformsGroups;for(let Cn=0,sa=yn.length;Cn<sa;Cn++){const ss=yn[Cn];Kt.update(ss,Fn),Kt.bind(ss,Fn)}}return Fn}function md(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function gd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(T,B,q){const $=yt.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),yt.get(T.texture).__webglTexture=B,yt.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const q=yt.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const _d=D.createFramebuffer();this.setRenderTarget=function(T,B=0,q=0){f=T,I=B,A=q;let $=!0,z=null,rt=!1,pt=!1;if(T){const Mt=yt.get(T);if(Mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Mt.__webglFramebuffer===void 0)$t.setupRenderTarget(T);else if(Mt.__hasExternalTextures)$t.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ut=T.depthTexture;if(Mt.__boundDepthTexture!==Ut){if(Ut!==null&&yt.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(T)}}const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(pt=!0);const zt=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?z=zt[B][q]:z=zt[B],rt=!0):T.samples>0&&$t.useMultisampledRTT(T)===!1?z=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[q]:z=zt,M.copy(T.viewport),C.copy(T.scissor),L=T.scissorTest}else M.copy(vt).multiplyScalar(V).floor(),C.copy(Vt).multiplyScalar(V).floor(),L=ae;if(q!==0&&(z=_d),xt.bindFramebuffer(D.FRAMEBUFFER,z)&&$&&xt.drawBuffers(T,z),xt.viewport(M),xt.scissor(C),xt.setScissorTest(L),rt){const Mt=yt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,q)}else if(pt){const Mt=B;for(let Ot=0;Ot<T.textures.length;Ot++){const zt=yt.get(T.textures[Ot]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ot,zt.__webglTexture,q,Mt)}}else if(T!==null&&q!==0){const Mt=yt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,q)}d=-1},this.readRenderTargetPixels=function(T,B,q,$,z,rt,pt,wt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){xt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const Ot=T.textures[wt],zt=Ot.format,Ut=Ot.type;if(!Lt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&q>=0&&q<=T.height-z&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(B,q,$,z,Pt.convert(zt),Pt.convert(Ut),rt))}finally{const Ot=f!==null?yt.get(f).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,$,z,rt,pt,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt)if(B>=0&&B<=T.width-$&&q>=0&&q<=T.height-z){xt.bindFramebuffer(D.FRAMEBUFFER,Mt);const Ot=T.textures[wt],zt=Ot.format,Ut=Ot.type;if(!Lt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(B,q,$,z,Pt.convert(zt),Pt.convert(Ut),0);const _e=f!==null?yt.get(f).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,_e);const ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ef(D,ke,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(se),D.deleteSync(ke),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,q=0){const $=Math.pow(2,-q),z=Math.floor(T.image.width*$),rt=Math.floor(T.image.height*$),pt=B!==null?B.x:0,wt=B!==null?B.y:0;$t.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,pt,wt,z,rt),xt.unbindTexture()};const vd=D.createFramebuffer(),xd=D.createFramebuffer();this.copyTextureToTexture=function(T,B,q=null,$=null,z=0,rt=null){rt===null&&(z!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=z,z=0):rt=0);let pt,wt,Mt,Ot,zt,Ut,se,_e,ke;const Te=T.isCompressedTexture?T.mipmaps[rt]:T.image;if(q!==null)pt=q.max.x-q.min.x,wt=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,zt=q.min.y,Ut=q.isBox3?q.min.z:0;else{const Kn=Math.pow(2,-z);pt=Math.floor(Te.width*Kn),wt=Math.floor(Te.height*Kn),T.isDataArrayTexture?Mt=Te.depth:T.isData3DTexture?Mt=Math.floor(Te.depth*Kn):Mt=1,Ot=0,zt=0,Ut=0}$!==null?(se=$.x,_e=$.y,ke=$.z):(se=0,_e=0,ke=0);const be=Pt.convert(B.format),Nt=Pt.convert(B.type);let Ie;B.isData3DTexture?($t.setTexture3D(B,0),Ie=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($t.setTexture2DArray(B,0),Ie=D.TEXTURE_2D_ARRAY):($t.setTexture2D(B,0),Ie=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const de=D.getParameter(D.UNPACK_ROW_LENGTH),Fn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ps=D.getParameter(D.UNPACK_SKIP_PIXELS),On=D.getParameter(D.UNPACK_SKIP_ROWS),hr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const Pe=T.isDataArrayTexture||T.isData3DTexture,Yn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Kn=yt.get(T),yn=yt.get(B),Cn=yt.get(Kn.__renderTarget),sa=yt.get(yn.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Cn.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,sa.__webglFramebuffer);for(let ss=0;ss<Mt;ss++)Pe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(T).__webglTexture,z,Ut+ss),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(B).__webglTexture,rt,ke+ss)),D.blitFramebuffer(Ot,zt,pt,wt,se,_e,pt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||yt.has(T)){const Kn=yt.get(T),yn=yt.get(B);xt.bindFramebuffer(D.READ_FRAMEBUFFER,vd),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,xd);for(let Cn=0;Cn<Mt;Cn++)Pe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kn.__webglTexture,z,Ut+Cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kn.__webglTexture,z),Yn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,rt,ke+Cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,rt),z!==0?D.blitFramebuffer(Ot,zt,pt,wt,se,_e,pt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):Yn?D.copyTexSubImage3D(Ie,rt,se,_e,ke+Cn,Ot,zt,pt,wt):D.copyTexSubImage2D(Ie,rt,se,_e,Ot,zt,pt,wt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Yn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ie,rt,se,_e,ke,pt,wt,Mt,be,Nt,Te.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,rt,se,_e,ke,pt,wt,Mt,be,Te.data):D.texSubImage3D(Ie,rt,se,_e,ke,pt,wt,Mt,be,Nt,Te):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,se,_e,pt,wt,be,Nt,Te.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,se,_e,Te.width,Te.height,be,Te.data):D.texSubImage2D(D.TEXTURE_2D,rt,se,_e,pt,wt,be,Nt,Te);D.pixelStorei(D.UNPACK_ROW_LENGTH,de),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ps),D.pixelStorei(D.UNPACK_SKIP_ROWS,On),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hr),rt===0&&B.generateMipmaps&&D.generateMipmap(Ie),xt.unbindTexture()},this.initRenderTarget=function(T){yt.get(T).__webglFramebuffer===void 0&&$t.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$t.setTextureCube(T,0):T.isData3DTexture?$t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$t.setTexture2DArray(T,0):$t.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){I=0,A=0,f=null,xt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}const bt=0,Xn=1,un=2,De=3,Ts=4,$n=5,es=6,Jn=7,Ko=8,As=9,ze=10,on=11,Xe=12,Un=13,jo=14,Pn=15,Le=16,Ke=17,Oe=18,gi=19,Ze=20,Qi=21,zi=22,Ue=23,qe=24,cn=25,Rs=26,Br=27,zr=28,Hr=29,Gr=30,Vr=31,Cs=32,wn=33,Gn=34,Sn=35,Nn=36,an=37,li=38,Wr=39,rn=40,je=41,Be=42,Ye=43,ln=44,xn=45,ti=46,Tn=47,ci=48,Vn=49,bi=50,Si=51,ar=52,lr=53,Is=54,cr=55,Hi=56,ji=57,Fi=58,ir=59,At=s=>s,q1={[qe]:"Crafting Bench",[Be]:"Inside Door",[Ye]:"Inside Door",[xn]:"Bed",[Si]:"Curved Hull Plating"};function X1(s){return q1[s]??vn[s].name}const $1=new Set([Xn,un,De,Ts,$n,es,ti,Jn,Tn,ci,Vn,cn,li,Gn,Sn,Nn,an,wn,ar,lr,cr,Is]),Y1=new Set([on,Ze,Xe,je,Be,Ye,Oe,Rs,Br,zr,Hr,Gr,Vr,Cs]);function zh(s){return vn[s].placeable&&!$1.has(s)&&!Y1.has(s)}const vn=[At({id:bt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),At({id:Xn,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),At({id:un,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),At({id:De,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),At({id:Ts,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),At({id:$n,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),At({id:es,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),At({id:Jn,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),At({id:Ko,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),At({id:As,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),At({id:ze,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),At({id:on,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),At({id:Xe,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),At({id:Un,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),At({id:jo,name:"Iron Rod",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),At({id:Pn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),At({id:Le,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),At({id:Ke,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),At({id:Oe,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),At({id:gi,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),At({id:Ze,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),At({id:Qi,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),At({id:zi,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),At({id:Ue,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),At({id:qe,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),At({id:cn,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),At({id:Rs,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),At({id:Br,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),At({id:zr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),At({id:Hr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),At({id:Gr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),At({id:Vr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),At({id:Cs,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),At({id:wn,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),At({id:Gn,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.28,.52,.28]}),At({id:Sn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),At({id:Nn,name:"Wheat Sprout",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.66,.66,.34]}),At({id:an,name:"Desert Wheat",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),At({id:li,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),At({id:Wr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),At({id:rn,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),At({id:je,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),At({id:Be,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),At({id:Ye,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),At({id:ln,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),At({id:xn,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),At({id:ti,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),At({id:Tn,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),At({id:ci,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),At({id:Vn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.3,.55,.3]}),At({id:bi,name:"Curved Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),At({id:Si,name:"Hull Slope",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.53,.58]}),At({id:ar,name:"Iron Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.62,.52,.42]}),At({id:lr,name:"Copper Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.72,.42,.26]}),At({id:Is,name:"Alabaster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.4,breakTime:1.8,tool:"pickaxe",minTier:0,placeable:!1,color:[.86,.83,.74]}),At({id:cr,name:"Cobalt Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:4.2,tool:"pickaxe",minTier:3,placeable:!1,color:[.36,.46,.68]}),At({id:Hi,name:"Broken Thruster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.42,.44,.5]}),At({id:ji,name:"Thruster (lit)",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.9,.6,.3]}),At({id:ir,name:"Armoury",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:null,minTier:0,placeable:!0,color:[.45,.4,.36]}),At({id:Fi,name:"Sandstorm Breaker",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.3,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.72,.28,.24]})],Vu=8,Qt=96,W=16,Ve=1440;function gn(s){return vn[s].solid}function Zo(s){return vn[s].opaque}function En(s){return s===Oe||s>=Rs&&s<=Cs}function Di(s){return s===Oe?8:En(s)?33-s:0}function Ba(s){return 33-s}function K1(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Jo{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function mt(s,t,e){let n=s*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function Vl(s){return s*s*(3-2*s)}function pc(s,t,e){const n=Math.floor(s),r=Math.floor(t),i=Vl(s-n),o=Vl(t-r),l=mt(n,r,e),h=mt(n+1,r,e),a=mt(n,r+1,e),c=mt(n+1,r+1,e);return l+(h-l)*i+(a-l)*o+(l-h-a+c)*i*o}function fs(s,t,e,n=4,r=2,i=.5){let o=0,l=1,h=1,a=0;for(let c=0;c<n;c++)o+=pc(s*h,t*h,e+c*101)*l,a+=l,l*=i,h*=r;return o/a}function j1(s,t,e,n=3){let r=0,i=1,o=1,l=0;for(let h=0;h<n;h++){const a=Math.abs(pc(s*o,t*o,e+h*101)*2-1);r+=(1-a)*i,l+=i,i*=.5,o*=2}return r/l}function Wl(s,t){const e=Math.floor(s),n=Vl(s-e),r=mt(e,0,t),i=mt(e+1,0,t);return r+(i-r)*n}const Z1=0,ql=1,Wu=2,Go=3,wr=4,J1=1e6,We=320,Re=380,Ln=150;class qu{constructor(t){this.seed=t;const e=new Jo(t^24378);for(let n=0;n<6;n++){const r=e.range(0,Math.PI*2),i=e.range(160,900);this.oases.push({x:Math.round(Math.cos(r)*i),z:Math.round(Math.sin(r)*i),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),r=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,r=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}for(let n=0;n<13;n++){const r=e.range(0,Math.PI*2),i=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(r)*i),z:Math.round(Math.sin(r)*i),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(mt(t,e,this.seed+53)-.5)*110,r=(mt(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*We+n),z:Math.round(e*We+r)}}get gtx(){return Math.round(this.homeTown.x/We)}get gtz(){return Math.round(this.homeTown.z/We)}townAt(t,e){if(t===this.gtx&&e===this.gtz)return!0;if(Math.abs(t)<2&&Math.abs(e)<2||mt(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const r of this.oases)if(Math.hypot(r.x-n.x,r.z-n.z)<r.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/We),l=Math.floor((t+n)/We),h=Math.floor((e-n)/We),a=Math.floor((e+n)/We);for(let c=o;c<=l;c++)for(let u=h;u<=a;u++){if(!this.townAt(c,u))continue;const p=this.townCenter(c,u),m=Math.hypot(p.x-t,p.z-e);m<=i&&(i=m,r=p)}return r}nearestTown(t,e){let n=null,r=1/0;const i=Math.floor(t/We),o=Math.floor(e/We);for(let l=i-4;l<=i+4;l++)for(let h=o-4;h<=o+4;h++){if(!this.townAt(l,h))continue;const a=this.townCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n=a)}return n??this.homeTown}mouthAt(t,e){if(!a_(this.seed,t,e))return!1;const n=this.mouthCenter(t,e);return!(this.nearOasis(n.x,n.z)||this.townNear(n.x,n.z,20))}mouthCenter(t,e){return l_(this.seed,t,e)}mouthNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/Ln),l=Math.floor((t+n)/Ln),h=Math.floor((e-n)/Ln),a=Math.floor((e+n)/Ln);for(let c=o;c<=l;c++)for(let u=h;u<=a;u++){if(!this.mouthAt(c,u))continue;const p=this.mouthCenter(c,u),m=Math.hypot(p.x-t,p.z-e);m<=i&&(i=m,r=p)}return r}campAt(t,e){return Yu(this.seed,t,e)}campCenter(t,e){return _c(this.seed,t,e)}campType(t,e){return u_(this.seed,t,e)}campNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/Re),l=Math.floor((t+n)/Re),h=Math.floor((e-n)/Re),a=Math.floor((e+n)/Re);for(let c=o;c<=l;c++)for(let u=h;u<=a;u++){if(!this.campAt(c,u))continue;const p=this.campCenter(c,u),m=Math.hypot(p.x-t,p.z-e);m<=i&&(i=m,r={x:p.x,z:p.z,type:this.campType(c,u)})}return r}nearestCamp(t,e){let n=null,r=1/0;const i=Math.floor(t/Re),o=Math.floor(e/Re);for(let l=i-3;l<=i+3;l++)for(let h=o-3;h<=o+3;h++){if(!this.campAt(l,h))continue;const a=this.campCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n={x:a.x,z:a.z,type:this.campType(l,h)})}return n}}function mc(s,t,e){const n=Math.min(.999,Math.max(.001,fs(s/900+.5,t/900+.5,e,3))),i=[.17,.42,.57,.72,.9].map(h=>Math.exp(-Math.abs(n-h)/.05)),o=Math.max(Math.abs(s),Math.abs(t));o<80&&(i[0]+=Math.pow(1-o/80,2)*6);const l=i.reduce((h,a)=>h+a,0);return i.map(h=>h/l)}function Do(s,t,e){const n=mc(s,t,e);let r=0;for(let i=1;i<5;i++)n[i]>n[r]&&(r=i);return r}function Hh(s,t,e){const n=mc(t,e,s),r=[30+fs(t/140,e/140,s+7)*12+fs(t/45,e/45,s+8)*3+Math.sin(t/9+e/13)*.9,29+fs(t/160,e/160,s+9)*12+Math.max(0,pc(t/55,e/55,s+11)-.5)*18,28+fs(t/220,e/220,s+5)*3,33+Math.floor(fs(t/170,e/170,s+13)*7.99)*6,27-j1(t/210,e/210,s+17)*13-Math.max(0,fs(t/500,e/500,s+19)-.55)*10];let i=0;for(let o=0;o<5;o++)i+=n[o]*r[o];return i}function ie(s,t,e){const n=Math.max(Math.abs(t),Math.abs(e));if(n<=14)return 30;let r=Hh(s,t,e);if(n<30){const o=(n-14)/16,l=o*o*(3-2*o);return 30+(r-30)*l}const i=Q1(s,t,e);if(i){const o=Math.round(Hh(s,i.cx,i.cz)),l=Math.min(1,(12-i.d)/3),h=l*l*(3-2*l);r+=(o-r)*h}return r}function Q1(s,t,e){const n=Math.floor(t/Re),r=Math.floor(e/Re);let i=null;for(let o=n-1;o<=n+1;o++)for(let l=r-1;l<=r+1;l++){if(Math.abs(t-o*Re)>42||Math.abs(e-l*Re)>42||!Yu(s,o,l))continue;const h=_c(s,o,l),a=Math.max(Math.abs(h.x-t),Math.abs(h.z-e));a<=12&&(i===null||a<i.d)&&(i={cx:h.x,cz:h.z,d:a})}return i}function t_(s,t,e,n,r){const i=mc(t,e,s);let o=0,l=1;i[1]>i[0]&&(o=1,l=0);for(let h=2;h<5;h++)i[h]>i[o]?(l=o,o=h):i[h]>i[l]&&(l=h);return i[l]/i[o]>.35&&mt(t,e,s+45)<i[l]/(i[o]+i[l])&&(o=l),n===r?o===Wu?es:o===wr?De:o===Go?un:o===ql&&mt(t,e,s+41)>.78?Ts:Xn:n>=r-3?o===wr?De:Xn:o===Go||o===wr?De:un}function gs(s,t,e,n){const r=_=>_*_*(3-2*_),i=Math.floor(s),o=Math.floor(t),l=Math.floor(e),h=(_,R,E)=>mt(_+E*911,R+E*577,n),a=r(s-i),c=r(t-o),u=r(e-l),p=(_,R,E)=>_+(R-_)*E,m=p(h(i,o,l),h(i+1,o,l),a),v=p(h(i,o+1,l),h(i+1,o+1,l),a),y=p(h(i,o,l+1),h(i+1,o,l+1),a),x=p(h(i,o+1,l+1),h(i+1,o+1,l+1),a);return p(p(m,v,c),p(y,x,c),u)}const gc=s=>Math.min(s-4,30),Gh=new Map,Er=s=>{let t=Gh.get(s);return t||(t=new qu(s),Gh.set(s,t)),t};function Vh(s,t,e,n,r){if(e<3||t*t+n*n<240)return!1;const i=r??Math.round(ie(s,t,n));let o=gc(i);for(const a of Er(s).oases)Math.abs(t-a.x)<=a.r+1&&Math.abs(n-a.z)<=a.r+1&&(o=Math.min(o,Math.round(ie(s,a.x,a.z))-5));if(e>o)return!1;const l=gs(t/9,e/5.5,n/9,s+301),h=gs(t/23,e/15,n/23,s+307);return l*.55+h*.45>.575+Math.max(0,o-e-4)*.005}const Pi=(s,t,e)=>s+","+t+","+e;function e_(s,t,e){if(mt(s,t,e+121)>=.6)return null;const n=Math.round(ie(e,s,t)),r=n-4,i=n-16;if(i<4)return null;const o=2+(mt(s,t,e+123)*3|0),l=[];for(let L=0;L<o;L++){const k=-1+(mt(s+L*3,t,e+125)*4|0),N=-1+(mt(s,t+L*3,e+127)*4|0);l.push({x:s+k*6,z:t+N*6,hx:1+(mt(s-L,t+L,e+129)*3|0),hz:1+(mt(s+L,t-L,e+131)*3|0)})}const h=new Set;let a=1/0,c=-1/0,u=1/0,p=-1/0,m=1/0,v=-1/0;const y=(L,k,N)=>{h.add(Pi(L,k,N)),L<a&&(a=L),L>c&&(c=L),N<u&&(u=N),N>p&&(p=N),k<m&&(m=k),k>v&&(v=k)},x=(L,k,N,H,Y,V)=>{for(let J=Math.min(L,k);J<=Math.max(L,k);J++)for(let tt=Math.min(N,H);tt<=Math.max(N,H);tt++)for(let vt=Y;vt<=V;vt++)y(J,vt,tt)};for(const L of l)x(L.x-L.hx,L.x+L.hx,L.z-L.hz,L.z+L.hz,i,r);for(let L=1;L<l.length;L++)x(l[L-1].x,l[L].x,l[L-1].z,l[L-1].z,i,r),x(l[L].x,l[L].x,l[L-1].z,l[L].z,i,r);const _=l[0],R=mt(s,t+1,e+133)>.5?1:-1,E=mt(s+1,t,e+135)>.5?1:-1,S=_.x+R*(_.hx+1),b=_.z+E*(_.hz+1);x(S,S+1,b,b+1,i,r-3);const A=[[9,-6],[9,7],[-11,-5]][mt(s,t,e+137)*3|0],f={x:s+A[0],z:t+A[1]},d=Math.round(ie(e,f.x,f.z)),g=d,M=Math.min(r-8,d-3);if(g-M<4)return null;const C=[[0,0],[1,0],[1,1],[0,1]];for(let L=0;L<=g-M;L++){const k=C[L&3],N=g-L;y(f.x+k[0],N,f.z+k[1]),y(f.x+k[0],N+1,f.z+k[1])}return x(f.x,_.x,f.z,f.z,M,M+1),x(_.x,_.x,f.z,_.z,M,M+1),{x0:a,x1:c,z0:u,z1:p,y0:m,y1:v,air:h,sh:{...f,y0:g}}}function n_(s,t,e){const n=e_(t.x,t.z,e);if(n){for(let r=n.x0;r<=n.x1;r++)for(let i=n.z0;i<=n.z1;i++)for(let o=n.y0;o<=n.y1;o++)n.air.has(Pi(r,o,i))&&s(r,o,i,bt);for(let r=n.x0-1;r<=n.x1+1;r++)for(let i=n.z0-1;i<=n.z1+1;i++)for(let o=n.y0-1;o<=n.y1+1;o++){if(n.air.has(Pi(r,o,i)))continue;(n.air.has(Pi(r+1,o,i))||n.air.has(Pi(r-1,o,i))||n.air.has(Pi(r,o+1,i))||n.air.has(Pi(r,o-1,i))||n.air.has(Pi(r,o,i+1))||n.air.has(Pi(r,o,i-1)))&&s(r,o,i,mt(r*3+i*7,o*5+i,e+139)<.16?Is:gi)}}}function i_(s){const n=(a,c)=>a===4||a===-6?Math.abs(c)<=4:c===5||c===-5?a>=-5&&a<=3:a>=-5&&a<=3&&c>=-4&&c<=4,r=(a,c,u)=>(a===4||a===-6)&&Math.abs(u)>=3&&(c===30||c===34),i=(a,c)=>Math.abs(c)===5&&(a===3||a===-5),o=(a,c,u)=>Math.abs(c)===5&&a>=-3&&a<=2&&u>=31&&u<=33;for(let a=-6;a<=4;a++)for(let c=-5;c<=5;c++)for(let u=30;u<=34;u++){if(!n(a,c)||r(a,u,c))continue;const p=a>=2&&Math.abs(c)>2,m=a>=-5&&a<=3&&c>=-4&&c<=4&&u>=31&&u<=33&&!p;s(a,u,c,m?bt:i(a,c)||o(a,c,u)?bi:u===30?rn:ze)}for(let a=-3;a<=1;a++)for(let c=-2;c<=2;c++)s(a,35,c,Si);for(let a=-2;a<=0;a++)for(let c=-1;c<=1;c++)s(a,36,c,Si);for(let a=-2;a<=1;a++)for(const c of[6,7,8,9,-6,-7,-8,-9])s(a,32,c,rn);for(const a of[-3,2])for(const c of[6,7,8,-6,-7,-8])s(a,32,c,rn);for(const a of[-1,0])s(a,31,10,rn),s(a,31,-10,rn);for(const a of[-1,0])s(a,31,11,rn),s(a,31,-11,rn);for(const a of[-1,0])s(a,32,11,Hi),s(a,32,-11,Hi);const l=(a,c,u)=>{s(a,c,u,on),s(a,c+1,u,Ze)},h=(a,c,u)=>{s(a,c,u,je),s(a,c+1,u,Be)};for(let a=-4;a<=4;a++)for(let c=31;c<=33;c++)s(1,c,a,ze),s(-2,c,a,ze);for(let a=-5;a<=-3;a++)for(const c of[-2,2])for(let u=31;u<=33;u++)s(a,u,c,ze);h(1,31,0),h(-2,31,0),h(-2,31,3),h(-2,31,-3),l(-6,31,0);for(let a=-2;a<=2;a++)for(let c=32;c<=33;c++)s(4,c,a,As);s(-4,30,4,Oe),s(-4,29,4,Oe),s(-3,30,4,Oe),s(-4,31,-4,zi),s(-4,31,-1,Pn),s(0,31,-3,Le),s(0,31,-2,qe),s(-1,31,1,Fi);for(const[a,c]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])s(a,34,c,Un);for(const[a,c]of[[0,3],[0,4],[-1,4],[2,2]])s(a,31,c,rn)}function s_(s,t,e){const n=new Jo(J1+77),r=Math.round(ie(e,t.x,t.z));for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++){if(Math.abs(i)!==2&&Math.abs(o)!==2)continue;const l=Math.abs(i)===2&&Math.abs(o)===2;for(let h=r+1;h<=r+3;h++)s(t.x+i,h,t.z+o,l?bi:ze)}for(let i=r+1;i<=r+2;i++)s(t.x,i,t.z-2,bt);for(let i=0;i<40;i++){const o=t.x+n.int(-5,5),l=t.z+n.int(-5,5),h=Math.round(ie(e,o,l)),a=n.next();s(o,h+n.int(0,1),l,a<.45?ze:a<.55?bi:rn)}s(t.x,Math.round(ie(e,t.x,t.z))+1,t.z,Qi)}function Xu(s,t,e,n){const r=5+Math.floor(n()*3),i=[],o=(u,p,m,v,y)=>i.push({x:u,y:p,z:m,b:v,stage:y});o(s,t,e,Tn,1),o(s,t+1,e,Tn,1);for(let u=2;u<r;u++)o(s,t+u,e,Tn,2);const l=[[1,0],[-1,0],[0,1],[0,-1]],h=2+(n()<.5?1:0);for(let u=0;u<h;u++){const p=l[Math.floor(n()*4)];o(s+p[0],t+r-2+u%2,e+p[1],Tn,2)}const a=new Set(i.map(u=>u.x+","+u.y+","+u.z)),c=t+r-1;for(let u=-1;u<=2;u++){const p=u===-1||u===2?1.7:2.4;for(let m=-3;m<=3;m++)for(let v=-3;v<=3;v++){const y=m*m+v*v+u*u*2.2;if(y>p*p||y>(p-.9)*(p-.9)&&n()<.3||m===0&&v===0)continue;const x=s+m,_=c+u,R=e+v;a.has(x+","+_+","+R)||o(x,_,R,ci,3)}}return i}function $u(s,t,e,n,r,i){const o=new Jo(mt(t,n,r+i)*4294967296>>>0||1);for(const l of Xu(t,e+1,n,()=>o.next()))s(l.x,l.y,l.z,l.b)}function r_(s,t,e){const n=Math.round(ie(e,t.x,t.z));for(let o=-t.r-1;o<=t.r+1;o++)for(let l=-t.r-1;l<=t.r+1;l++){const h=t.x+o,a=t.z+l,c=Math.sqrt(o*o+l*l),u=Math.round(ie(e,h,a));if(c<=t.r){const p=Math.max(1,Math.round(2.7-1.7*(c/t.r)));for(let m=u;m>n-p;m--)s(h,m,a,bt);s(h,n-p,a,Xn);for(let m=n-p+1;m<=n;m++)s(h,m,a,Oe);for(let m=n+1;m<=n+12;m++)s(h,m,a,bt)}else if(c<=t.r+1)for(let p=u;p<n+1;p++)s(h,p,a,Xn)}const r=3+(mt(t.x,t.z,e+73)<.5?1:0);for(let o=-t.r-r;o<=t.r+r;o++)for(let l=-t.r-r;l<=t.r+r;l++){const h=Math.sqrt(o*o+l*l);if(h<=t.r||h>t.r+r)continue;const a=t.x+o,c=t.z+l,u=Math.max(Math.round(ie(e,a,c)),n);for(let p=u-2;p<=u;p++)s(a,p,c,p===u?ti:$n)}const i=4+Math.floor(mt(t.x,t.z,e+75)*4);for(let o=0;o<i;o++){const l=o*(Math.PI*2/i)+mt(t.x+o,t.z-o,e+77)*1.1,h=t.r+1.5+mt(t.x-o,t.z+o,e+79)*(r+2),a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h),u=Math.max(Math.round(ie(e,a,c)),n);$u((p,m,v,y)=>{m>n&&Math.hypot(p-t.x,v-t.z)<=t.r||s(p,m,v,y)},a,u,c,e,81)}for(let o=0;o<5;o++){if(mt(t.x,t.z,e+61+o)<.35)continue;const l=o*1.27+mt(t.z,t.x,e+67+o)*.8,h=t.r+.5,a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h);Math.hypot(a-t.x,c-t.z)<t.r+1||s(a,Math.max(Math.round(ie(e,a,c)),n)+1,c,Sn)}}function o_(s,t,e){for(const[a,c]of[[-4,-3],[3,2],[-3,5]]){const u=Math.round(ie(e,t.x+a,t.z+c));for(let p=0;p<5;p++)for(let m=0;m<5;m++)for(let v=u-1;v<=u+3;v++){const y=v===u-1,x=(p===0||p===4||m===0||m===4)&&v>=u&&v<=u+2,_=v===u+3,R=p===0&&(m===2||m===3)&&v>=u&&v<=u+2;if(!(y||x||_)||R){s(t.x+a+p,v,t.z+c+m,bt);continue}s(t.x+a+p,v,t.z+c+m,gi)}s(t.x+a+1,u,t.z+c+1,Ue),s(t.x+a+2,u,t.z+c+1,ln),s(t.x+a+3,u,t.z+c+1,xn)}const n=t.x+3+Math.round((mt(t.x,t.z,e+83)-.5)*8),r=t.z-3+Math.round((mt(t.z,t.x,e+85)-.5)*8),i=2.5+mt(t.x,t.z,e+87)*2,o=(a,c)=>[[-4,-3],[3,2],[-3,5]].some(([u,p])=>a>=u-1+t.x&&a<=u+5+t.x&&c>=p-1+t.z&&c<=p+5+t.z);for(let a=-5;a<=5;a++)for(let c=-5;c<=5;c++){if(Math.sqrt(a*a+c*c)>i)continue;const u=n+a,p=r+c;if(o(u,p))continue;const m=Math.round(ie(e,u,p));for(let v=m-2;v<=m;v++)s(u,v,p,v===m?ti:$n)}const l=3+Math.floor(mt(t.x,t.z,e+89)*4);for(let a=0;a<l;a++){const c=a*(Math.PI*2/l)+mt(t.x+a,t.z-a,e+91)*1.3,u=1+mt(t.x-a,t.z+a,e+93)*i,p=n+Math.round(Math.cos(c)*u),m=r+Math.round(Math.sin(c)*u);o(p,m)||$u(s,p,Math.round(ie(e,p,m)),m,e,95)}const h=Math.round(ie(e,t.x,t.z+11));for(let a=0;a<5;a++)for(let c=0;c<3;c++)s(t.x-8+a,h,t.z+10+c,wn);s(t.x-7,h+1,t.z+11,an),s(t.x-5,h+1,t.z+10,an),s(t.x-4,h+1,t.z+12,Sn)}function a_(s,t,e){return Math.abs(t)<=1&&Math.abs(e)<=1?!1:mt(t,e,s+311)<.55}function l_(s,t,e){const n=(mt(t,e,s+313)-.5)*60,r=(mt(t,e,s+315)-.5)*60;return{x:Math.round(t*Ln+n),z:Math.round(e*Ln+r)}}const c_=[[1,0],[-1,0],[0,1],[0,-1]];function h_(s,t,e){if(t.x*t.x+t.z*t.z<1600)return;const[n,r]=c_[mt(t.x,t.z,e+317)*4|0],[i,o]=[-r,n],l=Math.round(ie(e,t.x,t.z));let h=-1;for(let b=1;b<=3;b++)if(Math.round(ie(e,t.x+n*b,t.z+r*b))<=l-2){h=b;break}if(h<0)return;const a=t.x+n*(h-1),c=t.z+r*(h-1),u=Math.round(ie(e,t.x+n*h,t.z+r*h)),p=Math.round(ie(e,a,c)),m=Math.max(Math.min(u+1,p),8);if(p<m+2)return;const v=12+(mt(t.x,t.z,e+319)*5|0),y=a+n*v,x=c+r*v,_=gc(Math.round(ie(e,y,x)))-1;if(_<6||_>m-4)return;for(let b=2;b<v;b++){const I=a+n*b,A=c+r*b,f=m-Math.round(b*(m-_)/v);if(Math.round(ie(e,I,A))<f+2||Math.round(ie(e,I+i,A+o))<f+2)return}const R=new Set,E=(b,I,A)=>{I<6||(R.add(b+","+I+","+A),s(b,I,A,bt))};for(let b=0;b<=v;b++){const I=a+n*b,A=c+r*b,f=b===v?_:m-Math.round(b*(m-_)/v);for(const d of[0,1])E(I+i*d,f,A+o*d),E(I+i*d,f+1,A+o*d),b<=1&&E(I+i*d,f+2,A+o*d)}for(let b=y-2;b<=y+2;b++)for(let I=x-2;I<=x+2;I++){for(let A=_;A<=_+2;A++)E(b,A,I);s(b,_-1,I,De),s(b,_+3,I,De)}for(const b of R){const I=b.split(","),A=+I[0],f=+I[1],d=+I[2];for(const[g,M,C]of[[A+1,f,d],[A-1,f,d],[A,f+1,d],[A,f-1,d],[A,f,d+1],[A,f,d-1]])M<5||R.has(g+","+M+","+C)||M<=Math.round(ie(e,g,C))&&s(g,M,C,De)}for(const[b,I]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){if(b===n&&I===r)continue;const A=a+b,f=c+I;s(A,Math.round(ie(e,A,f)),f,De)}for(const b of[0,1])s(a+i*b,m-1,c+o*b,De);s(a+n,m+3,c+r,De);const S=2+(mt(t.x+7,t.z-3,e+321)*3|0);for(let b=0;b<S;b++){const I=1+(mt(t.x+b,t.z,e+323)*3|0),A=(mt(t.x-b,t.z,e+325)*3|0)-1,f=t.x+n*(h+I)+i*A,d=t.z+r*(h+I)+o*A;s(f,Math.round(ie(e,f,d))+1,d,mt(f,d,e+327)>.5?Ts:De)}}function Yu(s,t,e){if(Math.abs(t)<=1&&Math.abs(e)<=1||mt(t,e,s+401)>=.8)return!1;const n=_c(s,t,e),r=Er(s);for(const i of r.oases)if(Math.hypot(i.x-n.x,i.z-n.z)<i.r+20)return!1;return!(Math.hypot(r.secondShip.x-n.x,r.secondShip.z-n.z)<40||r.townNear(n.x,n.z,25)!==null)}function _c(s,t,e){const n=(mt(t,e,s+403)-.5)*60,r=(mt(t,e,s+405)-.5)*60;return{x:Math.round(t*Re+n),z:Math.round(e*Re+r)}}function u_(s,t,e){return mt(t,e,s+407)*3|0}function d_(s){return{x:s.x+1.5,z:s.z-1.5}}function f_(s,t,e){const n=Math.round(ie(e,t.x,t.z));s(t.x+2,n+1,t.z+1,gi);for(const[i,o]of[[3,1],[2,2],[3,2]])for(let l=n+1;l<=n+2;l++)s(t.x+i,l,t.z+o,Tn);s(t.x+3,n+3,t.z+1,rn),s(t.x+2,n+3,t.z+2,rn),s(t.x+3,n+3,t.z+2,rn),s(t.x+2,n+3,t.z+1,Un),s(t.x-2,n+1,t.type===1?t.z+3:t.z,Ke);const r=(i,o,l,h)=>{const a=i-(l>>1),c=i+(l>>1),u=o-(h>>1),p=o+(h>>1);for(let m=a;m<=c;m++)for(let v=u;v<=p;v++)for(let y=n;y<=n+4;y++){const x=m===a||m===c||v===u||v===p,_=y===n||y===n+4||x&&y<=n+3;s(m,y,v,_?gi:bt)}s(c,n+1,o,on),s(c,n+2,o,Ze),s(c,n+1,o+1,bt),s(c,n+2,o+1,bt),s(a+1,n+1,o+1,Ue),s(c-2,n+1,o-1,ln),s(c-2,n+1,o,xn),s(c-1,n+3,u+1,Un)};if(t.type===0){for(let l=-2;l<=2;l++)for(let h=-2;h<=2;h++){if(l*l+h*h>4.5||l===2&&h===0)continue;const a=t.x-4+l,c=t.z+h,u=mt(a*3+1,c*5-2,e+411)>.62?gi:un;for(let p=n;p<=n+9;p++)s(a,p,c,u)}for(let l=2;l<=3;l++)s(t.x-4-l,n+7,t.z,Tn);s(t.x-7,n+7,t.z,rn);for(let l=1;l<=3;l++)s(t.x-7,n+7+l,t.z,Jn),s(t.x-7,n+7-l,t.z,Jn),s(t.x-7,n+7,t.z+l,Jn),s(t.x-7,n+7,t.z-l,Jn);const i=t.x-7,o=t.z+2;for(let l=i-1;l<=i+1;l++)for(let h=o-1;h<=o+1;h++)for(let a=n;a<=n+3;a++){const c=l===i+1&&h===o&&(a===n+1||a===n+2);!(a===n||a===n+3||(Math.abs(l-i)===1||Math.abs(h-o)===1)&&a<=n+2)||c?s(l,a,h,bt):s(l,a,h,gi)}s(i,n+1,o,Ue)}else if(t.type===1)r(t.x-4,t.z,5,5);else{r(t.x-5,t.z-3,7,5);for(let o=t.x+4;o<=t.x+9;o++)for(let l=t.z-4;l<=t.z-1;l++)s(o,n,l,wn),o===t.x+4&&l===t.z-4||o===t.x+9&&l===t.z-1?s(o,n+1,l,Sn):s(o,n+1,l,(o+l)%2?Nn:an);const i=(o,l)=>{s(o,n+1,l,Jn),s(o,n+2,l,Jn)};for(let o=t.x+3;o<=t.x+10;o+=2)i(o,t.z-5),i(o,t.z);for(let o=t.z-3;o<=t.z-1;o+=2)i(t.x+3,o),i(t.x+10,o);for(let o=t.x;o<=t.x+3;o++)for(let l=t.z+3;l<=t.z+5;l++){const h=o>=t.x+1&&o<=t.x+2&&l===t.z+4;s(o,n+1,l,h?Oe:De)}}}function p_(s,t,e,n){const r=new Uint8Array(W*W*Qt),i=(A,f,d,g)=>{const M=A-e*W,C=d-n*W;M>=0&&M<W&&C>=0&&C<W&&f>=0&&f<Qt&&(r[(M*W+C)*Qt+f]=g)},o=W+2,l=new Uint8Array(o*o*Qt),h=new Int16Array(o*o).fill(-1),a=(A,f)=>{const d=(A-e*W+1)*o+(f-n*W+1);return h[d]<0&&(h[d]=Math.round(ie(s,A,f))),h[d]},c=(A,f,d)=>{const g=A-e*W+1,M=d-n*W+1;if(g<0||g>=o||M<0||M>=o)return Vh(s,A,f,d);const C=(g*o+M)*Qt+f;return l[C]||(l[C]=Vh(s,A,f,d,a(A,d))?2:1),l[C]===2};for(let A=0;A<W;A++)for(let f=0;f<W;f++){const d=e*W+A,g=n*W+f,M=Math.round(ie(s,d,g));for(let k=0;k<=M;k++)r[(A*W+f)*Qt+k]=t_(s,d,g,k,M);const C=d*d+g*g<240,L=gc(M);if(!C)for(let k=3;k<=L;k++){const N=(A*W+f)*Qt+k;if(c(d,k,g)){r[N]=k>=8&&k<=18&&gs(d/26,k/19,g/26,s+401)>.785?Oe:bt;continue}const H=r[N];H!==De&&H!==un||(c(d+1,k,g)||c(d-1,k,g)||c(d,k+1,g)||c(d,k-1,g)||c(d,k,g+1)||c(d,k,g-1))&&(k<=15&&mt(d*5+k,g*7-k,s+333)<.4&&gs(d/5+40,k/5,g/5,s+331)>.72?r[N]=cr:k>=12&&gs(d/5,k/5,g/5,s+313)>.665?r[N]=ar:k>=12&&gs(d/5,k/5+60,g/5,s+317)>.7?r[N]=lr:k>=8&&k<=24&&gs(d/5,k/5,g/5+70,s+321)>.715&&(r[N]=Is))}if(!C&&M>=12&&mt(d,g,s+201)>.984&&t.townNear(d,g,14)===null&&t.nearOasis(d,g)===null){const k=L-4;if(k>=7){for(let N=M-1;N>=k;N--)r[(A*W+f)*Qt+N]=bt;r[(A*W+f)*Qt+(k-1)]=De}}if(!C&&mt(d,g,s+21)>.988){const k=Do(d,g,s),N=(H,Y)=>H>=0&&H<W&&Y>=0&&Y<W;if(k===Go||k===wr){const H=3+(mt(d,g,s+22)*3|0);for(let Y=1;Y<=H;Y++)i(d,M+Y,g,De);A>0&&mt(d,g,s+27)>.5&&i(d-1,M+1,g,De)}else if(k===ql){const H=2+(mt(d,g,s+24)*2|0),Y=[[1,0],[-1,0],[0,1],[0,-1]][mt(d,g,s+25)*4|0];for(let V=0;V<H;V++)i(d,M+1+V,g,De);N(A+Y[0],f+Y[1])&&i(d+Y[0],M+H,g+Y[1],De)}else if(k===Wu)for(const[H,Y]of[[0,0],[1,0],[0,1],[1,1]])N(A+H,f+Y)&&i(d+H,M+1,g+Y,es);else{const H=2+(mt(d,g,s+26)*3|0);for(let Y=0;Y<H;Y++){const V=(mt(d+Y,g,s+33)*3|0)-1,J=(mt(d,g+Y,s+35)*3|0)-1;N(A+V,f+J)&&i(d+V,M+1,g+J,mt(d+Y,g-Y,s+43)>.5?De:un)}}}if(!C&&mt(d,g,s+23)>.9935){const k=Do(d,g,s);if(k!==Go&&k!==wr){const N=3+(mt(d,g,s+29)*3|0);for(let H=M+1;H<=M+N;H++)i(d,H,g,Jn)}}if(!C&&r[(A*W+f)*Qt+M+1]===0&&mt(d,g,s+31)>.9915){const k=Do(d,g,s);if(k===Z1||k===ql){const N=2+(mt(d,g,s+37)*3|0);for(let H=M+1;H<=M+N;H++)i(d,H,g,cn);N>=3&&mt(d,g,s+41)>.55&&i(d+(mt(d,g,s+43)>.5?1:-1),M+2,g,cn),N>=3&&mt(d,g,s+47)>.7&&i(d,M+N,g,li)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&i_(i);for(const A of t.oases)Math.abs(e*W+8-A.x)<A.r+24&&Math.abs(n*W+8-A.z)<A.r+24&&r_(i,A,s);const u=Math.floor((e*W-14-We)/We),p=Math.floor((e*W+W+14+We)/We),m=Math.floor((n*W-14-We)/We),v=Math.floor((n*W+W+14+We)/We);for(let A=u;A<=p;A++)for(let f=m;f<=v;f++){if(!t.townAt(A,f))continue;const d=t.townCenter(A,f);e*W<=d.x+16&&e*W+W-1>=d.x-12&&n*W<=d.z+12&&n*W+W-1>=d.z-16&&o_(i,d,s),e*W<=d.x+30&&e*W+W-1>=d.x-30&&n*W<=d.z+30&&n*W+W-1>=d.z-30&&n_(i,d,s)}const y=Math.floor((e*W-48-Re)/Re),x=Math.floor((e*W+W-1+48+Re)/Re),_=Math.floor((n*W-48-Re)/Re),R=Math.floor((n*W+W-1+48+Re)/Re);for(let A=y;A<=x;A++)for(let f=_;f<=R;f++){if(!t.campAt(A,f))continue;const d=t.campCenter(A,f);e*W<=d.x+12&&e*W+W-1>=d.x-12&&n*W<=d.z+6&&n*W+W-1>=d.z-10&&f_(i,{x:d.x,z:d.z,type:t.campType(A,f)},s)}const E=Math.floor((e*W-54-Ln)/Ln),S=Math.floor((e*W+W-1+54+Ln)/Ln),b=Math.floor((n*W-54-Ln)/Ln),I=Math.floor((n*W+W-1+54+Ln)/Ln);for(let A=E;A<=S;A++)for(let f=b;f<=I;f++){if(!t.mouthAt(A,f))continue;const d=t.mouthCenter(A,f);e*W<=d.x+24&&e*W+W-1>=d.x-24&&n*W<=d.z+24&&n*W+W-1>=d.z-24&&h_(i,d,s)}return Math.abs(e*W+8-t.secondShip.x)<12&&Math.abs(n*W+8-t.secondShip.z)<12&&s_(i,t.secondShip,s),r}const oi=(s,t)=>s+","+t,Wh=(s,t,e)=>(s*W+t)*Qt+e,za=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],qh=new Set([bt,Xe,je,Be,Ye,ci]);class m_{constructor(t){this.seed=t,this.gen=new qu(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;rots=new Map;waterQ=new Set;gen;chunk(t,e){const n=oi(t,e);let r=this.chunks.get(n);if(!r){r=p_(this.seed,this.gen,t,e);const i=this.deltas.get(n);if(i)for(const[o,l]of i)r[o]=l;this.chunks.set(n,r)}return r}get(t,e,n){if(e<0||e>=Qt)return bt;const r=Math.floor(t/W),i=Math.floor(n/W);return this.chunk(r,i)[Wh(t-r*W,n-i*W,e)]}skyResistance(t,e,n,r=40){let i=0,o=0;for(let l=1;l<=r;l++){const h=this.get(t,e+l,n);if(h===bt)continue;const a=g_[h];if(a&&(i+=a,h!==ci&&(o+=a,o>=6)))return{R:i,openSky:!1}}return{R:i,openSky:o===0}}sunVisible(t,e,n,r,i,o,l=64){if(i<=0)return!1;let h=t,a=e,c=n;const u=Math.sign(r),p=1,m=Math.sign(o),v=u?Math.abs(1/r):1/0,y=1/i,x=m?Math.abs(1/o):1/0;let _=u?(u>0?h+1-(t+.5):t+.5-h)*v:1/0,R=(e+1-(e+.5))*y,E=m?(m>0?c+1-(n+.5):n+.5-c)*x:1/0;for(let S=0;S<192;S++){let b;if(_<=R&&_<=E?(h+=u,b=_,_+=v):R<=E?(a+=p,b=R,R+=y):(c+=m,b=E,E+=x),b>l)return!0;const I=this.get(h,a,c);if(I===As||Zo(I))return!1}return!0}roomInfo(t,e,n,r=400){if(!qh.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const i=new Set([`${t},${e},${n}`]),o=[[t,e,n]],l=new Set;let h=0,a=!0;for(;o.length;){const[c,u,p]=o.pop();if(++h>r){a=!1;break}for(const[m,v,y]of za){const x=c+m,_=u+v,R=p+y;if(_>=Qt){a=!1;continue}const E=this.get(x,_,R);if(qh.has(E)){const S=x+","+_+","+R;i.has(S)||(i.add(S),o.push([x,_,R]))}else E===zi&&l.add(x+","+_+","+R)}}return{size:h,sealed:a,regulators:l.size,regCells:[...l]}}set(t,e,n,r){if(e<0||e>=Qt)return;const i=Math.floor(t/W),o=Math.floor(n/W),l=this.chunk(i,o),h=Wh(t-i*W,n-o*W,e);if(l[h]===r)return;const a=l[h];if(l[h]=r,En(r)||En(a)||r===bt){this.queueWater(t,e,n);for(const[m,v,y]of za)this.queueWater(t+m,e+v,n+y)}let c=this.deltas.get(oi(i,o));c||this.deltas.set(oi(i,o),c=new Map),c.set(h,r),this.rots.delete(t+","+e+","+n),this.markDirty(i,o);const u=t-i*W,p=n-o*W;u===0&&this.markDirty(i-1,o),p===0&&this.markDirty(i,o-1),u===W-1&&this.markDirty(i+1,o),p===W-1&&this.markDirty(i,o+1)}markDirty(t,e){this.dirty.add(oi(t,e))}getRot(t,e,n){return this.rots.get(t+","+e+","+n)??0}setRot(t,e,n,r){const i=t+","+e+","+n;r&3?this.rots.set(i,r&3):this.rots.delete(i)}queueWater(t,e,n){e>=0&&e<Qt&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;const n=[...this.waterQ];this.waterQ.clear();for(const r of n){if(e>=t)break;const[i,o,l]=r.split(",").map(Number);e+=this.drainFlow(i,o,l,t-e),e+=this.floodFrom(i,o,l,t-e)}return e}drainFlow(t,e,n,r){let i=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],l=new Set;for(;o.length&&i++<r;){const[h,a,c]=o.pop(),u=Di(this.get(h,a,c));if(!u||u===8)continue;const p=h+","+a+","+c;if(!l.has(p)&&(l.add(p),!this.waterSupported(h,a,c,u))){this.set(h,a,c,bt);for(const[m,v,y]of za)o.push([h+m,a+v,c+y])}}return i}waterSupported(t,e,n,r){for(const[i,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(Di(this.get(t+i,e,n+o))>r)return!0;return Di(this.get(t,e+1,n))>0}floodFrom(t,e,n,r){let i=0;const o=[[t,e,n]];for(;o.length&&i++<r;){const[l,h,a]=o.shift(),c=this.get(l,h-1,a);let u=Di(this.get(l,h,a));if(u&&u!==8&&u<7&&Di(this.get(l,h+1,a))>0&&(this.set(l,h,a,Ba(7)),u=7),!u||(h>0&&(c===bt||En(c))&&Di(c)<u&&this.set(l,h-1,a,Ba(u===8?7:u)),c===bt||En(c)))continue;const p=u===8?7:u-1;if(!(p<1))for(const[m,v]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=this.get(l+m,h,a+v);(y===bt||En(y))&&Di(y)<p&&this.set(l+m,h,a+v,Ba(p))}}return i}surface(t,e){for(let n=Qt-1;n>=0;n--)if(this.get(t,n,e)!==bt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const r=[];for(const[i,o]of n)r.push(i,o);t[e]=r}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const r=new Map;for(let i=0;i<n.length;i+=2)r.set(n[i],n[i+1]);this.deltas.set(e,r)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}serializeRots(){return Object.fromEntries(this.rots)}loadRots(t){this.rots=new Map(Object.entries(t??{}).map(([e,n])=>[e,n]))}}const g_=vn.map(s=>s.R);function bo(s,t,e,n,r){const i=s.get(t,e,n);return i===on||i===Ze||i===je||i===Be?!0:!(Zo(i)||i===r)}const So=.6,__=1.8,Xh=1.62;class v_{constructor(t){this.world=t}pos=new F(.5,31.01,2.5);vel=new F;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;fallPeakY=this.pos.y;lastFallDist=0;waterAt(t){const e=this.pos.y+t,n=Math.floor(e),r=this.world.get(Math.floor(this.pos.x),n,Math.floor(this.pos.z));return En(r)?e-n<Di(r)/8:!1}collides(t,e,n){const r=Math.floor(t-So/2),i=Math.floor(t+So/2),o=Math.floor(n-So/2),l=Math.floor(n+So/2),h=Math.floor(e),a=Math.floor(e+__-.001);for(let c=r;c<=i;c++)for(let u=o;u<=l;u++)for(let p=h;p<=a;p++)if(gn(this.world.get(c,p,u)))return!0;return!1}update(t,e,n,r,i,o){this.onGround?this.fallPeakY=this.pos.y:this.pos.y>this.fallPeakY&&(this.fallPeakY=this.pos.y),this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Xh);const l=this.inWater,h=(this.sprinting?7.2:4.5)*i*(o?.25:1)*(l?.55:1),a=new F(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new F(-a.z,0,a.x),u=a.multiplyScalar(n).add(c.multiplyScalar(e));u.lengthSq()>1&&u.normalize();const p=this.onGround?40:l?12:8;this.vel.x+=(u.x*h-this.vel.x)*Math.min(1,p*t),this.vel.z+=(u.z*h-this.vel.z)*Math.min(1,p*t),l?(this.vel.y-=7*t,r&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=pi.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,r&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0),this.fallPeakY=40,this.lastFallDist=0),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,r=Math.max(1,Math.ceil(Math.abs(t)/.3)),i=t/r;for(let o=0;o<r;o++){const l=n.x+(e===0?i:0),h=n.y+(e===1?i:0),a=n.z+(e===2?i:0);if(!this.collides(l,h,a)){n.set(l,h,a);continue}e===1?(i<0&&(this.lastFallDist=Math.max(0,this.fallPeakY-n.y),this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new F(this.pos.x,this.pos.y+Xh,this.pos.z)}}const _s=20,yr=45,vc=36,Qo=37.5,Xl=39.5,$l=31.5,Yl=5,$h=22,x_=27,y_=25,Tr=150;class M_{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;storm=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};regulatedAir=!1;embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%Ve/Ve}ambient(t,e,n){const r=(e-.28+1)%1;let i=x_-y_*(r<=.3?Math.cos(r/.3*Math.PI):Math.cos((1+(r-.3)/.7)*Math.PI));t===2&&(i-=2),(t===3||t===4)&&(i+=3);const o=Wl(Math.floor(n/10)/60,this.weatherSeed)*2-1;return i+o*8}stormAt(t){const e=Wl(Math.floor(t/300)/15,this.weatherSeed+911);return e>.7?Math.min(1,(e-.7)/.15):0}update(t,e,n,r){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const i=this.worldTimeToDayFrac(r.tSec),o=this.ambient(r.biome,i,r.tSec),l=Math.floor(n.x),h=Math.floor(n.y),a=Math.floor(n.z),c=(S,b,I)=>{const A=b<=r.terrainH(S,I)-2,f=A?$h:o,{R:d,openSky:g}=e.skyResistance(S,b,I);let M=1-Math.exp(-d),C=f;!A&&r.sunElev>0&&r.sunDir&&e.sunVisible(S,b,I,r.sunDir.x,r.sunDir.y,r.sunDir.z)&&(C+=8+10*r.sunElev);const L=e.roomInfo(S,b,I);return L.sealed&&(L.regulators*Tr>=L.size?(C=36.6,M=1):(C=f,A||(M=0))),{R:d,openSky:g,shelter:M,ambEff:C,room:L,deep:A}};let u=c(l,h,a);if(u.room.size===0){const S=`${l},${h},${a}|${Math.floor(r.tSec*2)}`;if(this.embedKey!==S){let b=u;for(let I=-1;I<=1;I++)for(let A=-1;A<=1;A++)for(let f=-1;f<=1;f++){if(!I&&!A&&!f)continue;const d=c(l+I,h+A,a+f);d.room.size!==0&&Math.abs(d.ambEff-37)<Math.abs(b.ambEff-37)&&(b=d)}this.embedKey=S,this.embedAir=b}this.embedAir&&(u=this.embedAir)}this.lastOpenSky=u.openSky;let p=u.shelter,m=u.ambEff;const v=u.room,y=this.stormAt(r.tSec);this.storm+=(y-this.storm)*Math.min(1,t*.08);const x=r.stormShield?0:this.storm*r.stormMul;if(x>.02&&!u.deep&&u.shelter<.6&&(m=36.6+(m-36.6)*(1+.35*x)),this.lastRoom=v,this.regulatedAir=v.sealed&&v.regulators*Tr>=v.size,r.inWater){const S=pi.clamp(o,12,24)-3;m=(m+S)/2}r.warmth&&(m+=r.warmth);const _=r.regulator?36.6:36.6+(m-36.6)*(1-p);this.lastAmbient=u.deep?$h:o,this.lastAmbientEff=m,this.lastShelterR=u.R,this.lastTarget=_;const R=v.sealed?.022:.0075;this.body+=(_-this.body)*R*t,this.body=pi.clamp(this.body,12,44.5);let E=100/(Ve*1.5);this.body>37&&(E+=(this.body-37)*.02),r.sprinting&&(E*=1.7),r.overencumbered&&(E+=.05),x>.05&&u.shelter<.8&&(E*=1+.7*x),this.water=Math.max(0,this.water-E*t),this.regulatedAir||(this.body>Xl&&this.hurt((this.body-Xl)*.15,"heat stroke"),this.body<$l&&this.hurt(($l-this.body)*.175,"hypothermia")),this.water<=0?this.hurt(.3,"dehydration"):this.water<Yl&&this.hurt((Yl-this.water)*.0375,"dehydration"),x>.35&&u.openSky&&this.hurt((x-.35)*.55*t,"sand blast"),this.water>25&&this.body>=vc&&this.body<=Qo&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=pi.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,r,i){const o=this.worldTimeToDayFrac(i),l=this.ambient(0,o,i);let h=l;const a=(o-.25)*Math.PI*2,c=Math.sin(a);if(c>0){const p=1/Math.hypot(Math.cos(a),c,.4);t.sunVisible(e,n,r,Math.cos(a)*p,c*p,.4*p)&&(h+=8+10*c)}const u=t.roomInfo(e,n,r);return u.sealed&&(h=u.regulators*Tr>=u.size?36.6:l),h}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=5,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const ko=15,Mr=W+2,ys=(s,t,e)=>((s+1)*Mr+(t+1))*Qt+e,b_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Yh(s){return s===ci?2:s===bt?1:Zo(s)?-1:1}function S_(s){return s===ci?2:En(s)?1:s===bt?0:Zo(s)?-1:0}class w_{maps=new Map;invalidate(t,e){this.maps.delete(oi(t,e))}lightAt(t,e,n){if(e<0||e>=Qt)return 0;const r=Math.floor(t/W),i=Math.floor(n/W),o=this.maps.get(oi(r,i));return o?o[ys(t-r*W,n-i*W,e)]:0}bake(t,e,n,r){const i=t.chunk(e,n),o=new Uint8Array(Mr*Mr*Qt),l=[],h=(c,u,p,m)=>{if(m<=0)return;const v=ys(c,u,p);m>o[v]&&(o[v]=m,l.push(v))},a=(c,u,p)=>c>=0&&c<W&&u>=0&&u<W?i[(c*W+u)*Qt+p]:t.get(e*W+c,p,n*W+u);for(let c=-1;c<=W;c++)for(let u=-1;u<=W;u++){let p=ko;for(let m=Qt-1;m>=0;m--){const v=S_(a(c,u,m));if(v<0||(h(c,u,m,p),v>0&&(p-=v,p<=0)))break}}for(const[c,u]of[[-1,0],[1,0],[0,-1],[0,1]]){const p=this.maps.get(oi(e+c,n+u));if(p)for(let m=0;m<W;m++)for(let v=0;v<Qt;v++){const y=c<0?-1:c>0?W:m,x=u<0?-1:u>0?W:m,_=c<0?W-1:c>0?0:m,R=u<0?W-1:u>0?0:m,E=p[ys(_,R,v)];E>0&&h(y,x,v,E)}}for(let c=0;c<l.length;c++){const u=l[c],p=o[u];if(p<=1)continue;const m=(u/(Mr*Qt)|0)-1,v=u%(Mr*Qt),y=(v/Qt|0)-1,x=v%Qt;for(const[_,R,E]of b_){const S=m+_,b=y+E,I=x+R;if(!(I<0||I>=Qt))if(S>=-1&&S<=W&&b>=-1&&b<=W){const A=Yh(a(S,b,I));A>=0&&h(S,b,I,p-A)}else{const A=e*W+S,f=n*W+b,d=Yh(t.get(A,I,f));if(d<0)continue;const g=Math.floor(A/W),M=Math.floor(f/W),C=this.maps.get(oi(g,M));C&&C[ys(A-g*W,f-M*W,I)]+1<p-d&&r(g,M)}}}return this.maps.set(oi(e,n),o),o}}const E_=new Set([on,Ze,Xe,je,Be,Ye]),T_=new Set([Nn,an,Vn]),wo=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],A_=.28;function Se(s,t,e,n,r){const i=n[1].map((c,u)=>c-n[0][u]),o=n[2].map((c,u)=>c-n[0][u]),l=i[1]*o[2]-i[2]*o[1],h=i[2]*o[0]-i[0]*o[2],a=i[0]*o[1]-i[1]*o[0];return l*s[0]+h*s[1]+a*s[2]<0&&n.reverse(),{dir:s,kind:t,pts:n,sh:e,uv:r}}function Yi(s,t,e,n){return{...Se(s,2,t,e,n),fill:s}}const R_=(()=>{const s=A_,t=1-s,e=c=>[c[0],c[2]],n=c=>[c[0],c[1]],r=c=>[c[2],c[1]],i=c=>[(c[2]-c[0])/2+.5,c[1]],o=c=>[(c[0]+c[2])/2,c[1]],l=[[s,0],[t,0],[1,s],[1,t],[t,1],[s,1],[0,t],[0,s]],h=[Se([0,1,0],0,1,l.map(([c,u])=>[c,1,u]),e),Se([0,-1,0],1,.45,l.map(([c,u])=>[c,0,u]),e),Se([1,0,0],2,.8,[[1,0,s],[1,0,t],[1,1,t],[1,1,s]],r),Se([-1,0,0],2,.7,[[0,0,t],[0,1,t],[0,1,s],[0,0,s]],r),Se([0,0,1],2,.85,[[s,0,1],[t,0,1],[t,1,1],[s,1,1]],n),Se([0,0,-1],2,.65,[[s,0,0],[s,1,0],[t,1,0],[t,0,0]],n),Se([-1,0,-1],2,.675,[[s,0,0],[s,1,0],[0,1,s],[0,0,s]],i),Se([1,0,-1],2,.725,[[t,0,0],[t,1,0],[1,1,s],[1,0,s]],o),Se([1,0,1],2,.825,[[1,0,t],[1,1,t],[t,1,1],[t,0,1]],i),Se([-1,0,1],2,.775,[[0,0,t],[0,1,t],[s,1,1],[s,0,1]],o),Yi([1,0,0],.8,[[1,0,0],[1,1,0],[1,1,s],[1,0,s]],r),Yi([1,0,0],.8,[[1,0,t],[1,1,t],[1,1,1],[1,0,1]],r),Yi([-1,0,0],.7,[[0,0,0],[0,0,s],[0,1,s],[0,1,0]],r),Yi([-1,0,0],.7,[[0,0,t],[0,0,1],[0,1,1],[0,1,t]],r),Yi([0,0,1],.85,[[0,0,1],[0,1,1],[s,1,1],[s,0,1]],n),Yi([0,0,1],.85,[[t,0,1],[t,1,1],[1,1,1],[1,0,1]],n),Yi([0,0,-1],.65,[[0,0,0],[s,0,0],[s,1,0],[0,1,0]],n),Yi([0,0,-1],.65,[[t,0,0],[1,0,0],[1,1,0],[t,1,0]],n)],a=[Se([0,1,0],0,1,[[s,1,s],[s,1,t],[t,1,t],[t,1,s]],e),Se([0,-1,0],1,.45,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],e),Se([1,0,0],2,.8,[[1,0,0],[1,0,1],[1,t,1],[1,t,0]],r),Se([-1,0,0],2,.7,[[0,0,0],[0,t,0],[0,t,1],[0,0,1]],r),Se([0,0,1],2,.85,[[0,0,1],[1,0,1],[1,t,1],[0,t,1]],n),Se([0,0,-1],2,.65,[[0,0,0],[0,t,0],[1,t,0],[1,0,0]],n),Se([0,1,-1],2,.825,[[0,t,0],[1,t,0],[1,1,s],[0,1,s]],n),Se([0,1,1],2,.925,[[1,t,1],[0,t,1],[0,1,s],[1,1,s]],n),Se([-1,1,0],2,.85,[[0,t,1],[0,t,0],[0,1,s],[0,1,t]],r),Se([1,1,0],2,.9,[[1,t,0],[1,t,1],[1,1,t],[1,1,s]],r)];return{[bi]:h,[Si]:a}})(),Ku=(s,t,e)=>e===0?[s,t]:e===1?[1-t,s]:e===2?[1-s,1-t]:[t,1-s],Kl=(s,t)=>t===0?s:t===1?[-s[2],s[1],s[0]]:t===2?[-s[0],s[1],-s[2]]:[s[2],s[1],-s[0]],Kh=(s,t)=>t===0?s:s.map(e=>({...e,dir:Kl(e.dir,t),fill:e.fill?Kl(e.fill,t):e.fill,pts:e.pts.map(([n,r,i])=>{const[o,l]=Ku(n,i,t);return[o,r,l]})})),ki=(s,t,e,n,r,i)=>[Se([0,1,0],0,1,[[s,r,e],[s,r,i],[n,r,i],[n,r,e]],o=>[o[0],o[2]]),Se([0,-1,0],1,.45,[[s,t,e],[n,t,e],[n,t,i],[s,t,i]],o=>[o[0],o[2]]),Se([1,0,0],2,.8,[[n,t,e],[n,t,i],[n,r,i],[n,r,e]],o=>[o[2],o[1]]),Se([-1,0,0],2,.7,[[s,t,e],[s,r,e],[s,r,i],[s,t,i]],o=>[o[2],o[1]]),Se([0,0,1],2,.85,[[s,t,i],[n,t,i],[n,r,i],[s,r,i]],o=>[o[0],o[1]]),Se([0,0,-1],2,.65,[[s,t,e],[s,r,e],[n,r,e],[n,t,e]],o=>[o[0],o[1]])],ju=s=>{for(const t of s)t.always=!0;return s},Vo=(s,t)=>s.filter((e,n)=>n!==t),C_=(()=>{const s=Vo(ki(0,.72,0,1,.88,1),2),t=Vo(ki(0,.18,.18,1,.26,.82),2),e=[...ki(.05,0,.05,.2,.72,.2),...ki(.05,0,.8,.2,.72,.95)],n=ki(.28,.3,0,.72,.64,.05);return ju([...s,...t,...e,...n])})(),I_=(()=>{const s=Vo(ki(0,.72,0,1,.88,1),3),t=Vo(ki(0,.18,.18,1,.26,.82),3),e=[...ki(.8,0,.05,.95,.72,.2),...ki(.8,0,.8,.95,.72,.95)];return ju([...s,...t,...e])})(),Ae=16,Dn=16,Dr=[Xn,un,De,Ts,$n,es,Jn,Ko,As,ze,on,Ze,Un,jo,Pn,Le,Ke,Oe,gi,Xe,Qi,zi,Ue,qe,cn,Rs,Br,zr,Hr,Gr,Vr,Cs,wn,Gn,Sn,Nn,an,li,Wr,rn,je,Be,Ye,ln,xn,ti,Tn,ci,Vn,ar,lr,cr,Is,Hi,ji,Fi,ir],Zu=[["grass_top",ti],["grass_side",ti],["wood_top",Tn],["farmland_side",wn],["sandstone_top",un],["hull_top",ze],["water_side",Oe],["bed_side",ln],["chest_top",Ue],["bench_top",Le],["bench_ext_top",qe],["campfire_top",Ke],["campfire_cold",Ke],["cactus_top",cn]],He={};Zu.forEach(([s],t)=>He[s]=Dr.length+t);let Ha=null;function Ju(){if(Ha)return Ha;const s=document.createElement("canvas");s.width=s.height=Dn*Ae;const t=s.getContext("2d"),e=new Jo(48879);Dr.forEach((f,d)=>d);let n=0,r=0,i=0,o=0,l=0;const h=f=>Math.max(0,Math.min(1,f)),a=(f,d=1,g=0,M=0,C=0)=>`rgba(${Math.round(h(i+f+g)*255)},${Math.round(h(o+f+M)*255)},${Math.round(h(l+f+C)*255)},${d})`,c=(f,d,g)=>{t.fillStyle=g,t.fillRect(n+f,r+d,1,1)},u=f=>{t.fillStyle=f,t.fillRect(n,r,Ae,Ae)},p=f=>(e.next()-.5)*f,m=(f,d)=>{for(let g=0;g<f;g++)c(e.int(0,15),e.int(0,15),a(p(d)))},v=(f,d,g=-.15)=>{let M=e.int(1,13),C=e.int(1,13);for(let L=0;L<f;L++)c(M,C,a(g+p(d))),M+=e.int(-1,1),C+=e.int(0,1),M=Math.max(0,Math.min(15,M)),C=Math.max(0,Math.min(15,C))},y=()=>{const f=M=>{const C=[];for(let N=0;N<M*M;N++)C.push(e.next());const L=(N,H)=>C[H%M*M+N%M],k=[];for(let N=0;N<16;N++)for(let H=0;H<16;H++){const Y=H*M/16,V=N*M/16,J=Math.floor(Y),tt=Math.floor(V),vt=Y-J,Vt=V-tt,ae=L(J,tt)+(L(J+1,tt)-L(J,tt))*vt,le=L(J,tt+1)+(L(J+1,tt+1)-L(J,tt+1))*vt;k.push(ae+(le-ae)*Vt)}return k},d=f(4),g=f(8);return d.map((M,C)=>(M*.65+g[C]*.35-.5)*2)},x=f=>{const d=y();for(let g=0;g<16;g++)for(let M=0;M<16;M++)c(M,g,a(f(M,g,d[g*16+M])));return d},_=(f,d,g,M)=>{for(let C=-g;C<=g;C++)for(let L=-g;L<=g;L++){const k=Math.hypot(L,C);k>g+.3||c(f+L,d+C,a(M+(k>g-.6?-.2:L+C<-g*.5?.14:-.02)))}},R=(f,d,g=.25)=>{for(const M of f)for(let C=0;C<16;C++){const L=C-M;L>=0&&L<16&&c(C,L,a(g,d))}},E=(f,d,g,M,C,L)=>{for(let k=-g;k<=g;k++)for(let N=-g;N<=g;N++){const H=Math.hypot(N,k);H>g+.3||c(f+N,d+k,a(H>g-.5?-.22:N+k<0?.24:.04,1,M,C,L))}},S={},b=(f,d)=>S[f]=d;b(String(Xn),()=>{x((f,d,g)=>g*.07+Math.sin((f+d)*.55+g*5)*.03),m(24,.18);for(let f=0;f<5;f++)c(e.int(0,15),e.int(0,15),a(-.14))}),b(String(un),()=>{const f=y();for(let d=0;d<16;d++){const g=Math.floor((d+f[d*16+8]*1.2+16)%16/4),M=[-.05,.03,-.01,.05][g%4];for(let C=0;C<16;C++)c(C,d,a(M+f[d*16+C]*.05+(d%4===0?-.12:0)))}m(26,.08)}),b("sandstone_top",()=>{x((f,d,g)=>g*.06);for(let f=0;f<7;f++){const d=e.int(1,14),g=e.int(1,14);c(d,g,a(-.13)),c(d+1,g,a(-.06))}m(30,.1)}),b(String(De),()=>{x((f,d,g)=>g*.1),v(11,.06,-.14),v(8,.06,-.2);for(let f=0;f<4;f++)c(e.int(0,15),e.int(0,15),a(.2));m(16,.1)}),b(String(Ts),()=>{x((f,d,g)=>g*.08-.06);for(let f=0;f<9;f++)_(e.int(2,13),e.int(2,13),e.int(1,3),p(.18))}),b(String($n),()=>{x((f,d,g)=>g*.13+(Math.sin(f*1.4)+Math.cos(d*1.1))*.03),m(44,.2);for(let f=0;f<3;f++){const d=e.int(2,13),g=e.int(2,13);c(d,g,a(.16)),c(d+1,g,a(.08))}}),b(String(es),()=>{x((f,d,g)=>g*.05+.04),v(10,.03,.06),v(8,.03,.09);for(let f=0;f<30;f++)c(e.int(0,15),e.int(0,15),a(.13))}),b(String(Jn),()=>{const f=x((d,g,M)=>M*.04-.05);for(let d=0;d<16;d++){for(let g=1;g<15;g++)Math.sin(g*.5+d*2.6+f[d*16+g]*4)>.7&&c(g,d,a(-.18));d%5===2&&e.next()>.4&&c(e.int(2,13),d,a(.12))}}),b(String(Ko),()=>{u("rgba(170,215,232,0.22)"),R([5,8,14],.5,.3),R([11],.32,.22)}),b(String(As),()=>{x((f,d,g)=>g*.05),v(7,.02,-.1),R([9],.18,.12)}),b(String(ze),()=>{const f=x((d,g,M)=>M*.03);for(let d=0;d<16;d++)c(d,10,a(-.24)),d%2===0&&c(d,9,a(-.08));for(let d=0;d<16;d++)if(d%4===1)for(const g of[1,6,11])c(g,d,a(.22)),c(g+1,d,a(.05)),c(g,d+1,a(-.16)),c(g+1,d+1,a(-.12));for(let d=0;d<10;d++)c(e.int(0,15),e.int(0,15),a(-.02,1,.06,-.01,-.08));f[60]>.3&&c(12,3,a(.35,1,.1,0,0))}),b("hull_top",()=>{x((f,d,g)=>g*.03);for(const f of[4,12])for(let d=0;d<16;d++)c(d,f,a(-.22));for(const f of[2,7,12])for(let d=0;d<16;d++)d%4===2&&c(f,d,a(.2));for(let f=0;f<8;f++)c(e.int(0,15),e.int(0,15),a(.28,1,.05,-.02,-.06))}),b(String(on),()=>{x((f,d,g)=>g*.03-.03);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26)),c(0,f,a(-.26)),c(15,f,a(-.26));for(let f=2;f<=12;f++)for(let d=3;d<=12;d++)d===3||d===12||f===2||f===12?c(d,f,a(-.2)):d===4&&f>3&&f<11&&c(d,f,a(.08));for(let f=7;f<=9;f++)c(13,f,a(.35)),c(12,f,a(-.28));for(let f=5;f<11;f++)c(f,14,a(-.15,1,.1,0,-.02))}),b(String(Ze),()=>{x((f,d,g)=>g*.03-.03);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26)),c(0,f,a(-.26)),c(15,f,a(-.26));for(let f=4;f<=11;f++)for(let d=5;d<=10;d++)c(d,f,a(-.32,1,-.1,-.02,.06));for(const f of[5,8])for(let d=5;d<=10;d++){const g=d-f+4;g>=4&&g<=11&&c(d,g,a(.35,.5))}for(const[f,d]of[[2,2],[13,2],[2,13],[13,13]])c(f,d,a(.2))}),b(String(Xe),()=>{for(let f=0;f<16;f++)c(0,f,a(-.1,.9)),c(1,f,a(.05,.85)),c(2,f,a(-.15,.7));c(1,7,a(.3,.9)),c(1,8,a(.3,.9))}),b(String(Un),()=>{u(a(-.28));for(let f=4;f<=11;f++)for(let d=4;d<=11;d++){const g=Math.max(Math.abs(d-7.5),Math.abs(f-7.5));c(d,f,g>3?a(.12):a(.42-g*.06,1,.3,.18,-.02))}for(const[f,d]of[[4,4],[11,4],[4,11],[11,11]])c(f,d,a(.25))}),b(String(jo),()=>{x((f,d,g)=>g*.03+(d%2===0?.02:-.02));for(const[f,d]of[[2,2],[13,2],[2,13],[13,13]])c(f,d,a(.22));for(let f=0;f<5;f++){const d=e.int(2,13),g=e.int(2,13);c(d,g,a(-.12,1,.24,.02,-.14)),c(d+1,g,a(-.2,1,.16,0,-.1))}}),b(String(Pn),()=>{x((f,d,g)=>g*.03-.25);for(let f=-3;f<=3;f++){const d=3-Math.abs(f);for(let g=-d;g<=d;g++)Math.hypot(g,f)>d+.3||c(8+g,8+f,a(f===0?.05:0,1,.95-Math.abs(f)*.08,.15,.1))}for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++)Math.hypot(d,f)<1.6&&c(8+d,8+f,a(.4-Math.hypot(d,f)*.15,1,1,.3,.1));for(let f=0;f<16;f+=3){const d=3-Math.abs(f%6-3);for(let g=-d;g<=d;g++)c(8+g,f,a(.08))}}),b(String(Le),()=>{const f=x((d,g,M)=>M*.05+(g<5?.02:-.14));for(let d=0;d<16;d++)c(d,0,a(.14)),c(d,1,a(.06)),c(d,4,a(-.26));for(let d=5;d<16;d++)for(const g of[1,2,13,14])c(g,d,a(.06+f[d*16+g]*.02));for(let d=6;d<=10;d++)for(let g=4;g<=11;g++)c(g,d,a(-.04+f[d*16+g]*.04));for(let d=4;d<=11;d++)c(d,6,a(-.28)),c(d,10,a(-.28));c(7,8,"rgba(190,190,190,1)"),c(8,8,"rgba(190,190,190,1)");for(let d=3;d<=12;d++)c(d,13,a(.1)),c(d,14,a(-.3))}),b("bench_top",()=>{x((f,d,g)=>g*.04+Math.sin(d*1.7+g*3)*.03);for(let f=0;f<16;f++)c(f,0,a(-.2)),c(f,15,a(-.2));for(let f=0;f<16;f++)if(f%5===4)for(let d=0;d<16;d++)c(d,f,a(-.14));for(let f=2;f<=11;f++)c(f,4,"rgba(160,166,178,1)");for(let f=2;f<=11;f+=2)c(f,5,"rgba(120,126,140,1)");c(12,4,"rgba(96,66,40,1)"),c(13,4,"rgba(96,66,40,1)"),c(12,5,"rgba(80,54,32,1)");for(let f=4;f<=6;f++)c(f,9,"rgba(120,88,54,1)");for(let f=4;f<=6;f++)c(f,10,"rgba(100,72,44,1)");c(5,11,"rgba(150,156,168,1)"),c(5,12,"rgba(150,156,168,1)"),c(5,13,"rgba(140,146,158,1)");for(let f=0;f<6;f++)c(e.int(0,15),e.int(0,15),a(-.06,1,.02,-.01,-.04))}),b(String(qe),()=>{x((f,d,g)=>g*.04-.14);for(let f=0;f<16;f++)c(f,0,a(.05)),c(f,2,a(-.24));for(let f=3;f<16;f++)for(const d of[1,2,13,14])c(d,f,a(.04));for(let f=3;f<=12;f++)c(f,11,a(.08)),c(f,12,a(-.26))}),b("bench_ext_top",()=>{x((f,d,g)=>g*.04+Math.sin(f*1.6+g*2)*.03);for(let f=0;f<16;f++)c(0,f,a(-.18)),c(15,f,a(-.18));for(let f=0;f<16;f++)for(let d=0;d<16;d++)d%6===3&&e.next()>.5&&c(d,f,a(-.1))}),b(String(Ke),()=>{x((f,d,g)=>g*.05-.1);for(let f=0;f<5;f++)_(2+f*3,13,1,-.05);t.strokeStyle="rgba(70,50,32,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,r+13),t.lineTo(n+12,r+9),t.stroke(),t.beginPath(),t.moveTo(n+12,r+13),t.lineTo(n+4,r+9),t.stroke(),t.lineWidth=1;for(let f=2;f<10;f++){const d=Math.max(0,5-Math.abs(f-7)-(f<5?5-f:0));for(let g=-d;g<=d;g++){const M=Math.abs(g)/(d+1);c(8+g,f,a(M*.1,1,.85-M*.4,.35-M*.25,-.45))}}c(8,1,a(.2,1,.7,.15,-.4)),c(7,3,a(.3,1,.9,.4,-.4))}),b("campfire_cold",()=>{x((f,d,g)=>g*.04-.22);for(let f=0;f<5;f++)_(2+f*3,13,1,-.05);t.strokeStyle="rgba(40,34,28,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,r+13),t.lineTo(n+12,r+9),t.stroke(),t.beginPath(),t.moveTo(n+12,r+13),t.lineTo(n+4,r+9),t.stroke(),t.lineWidth=1;for(let f=0;f<6;f++)_(5+f%3*3,9+(f/3|0)*2,1,.08+.04*(f%2))}),b("campfire_top",()=>{x((f,d,g)=>-.12+g*.05);for(let f=0;f<16;f++){const d=f/16*Math.PI*2;c(8+Math.round(Math.cos(d)*5.5),8+Math.round(Math.sin(d)*5.5),a(.12)),c(8+Math.round(Math.cos(d)*4),8+Math.round(Math.sin(d)*4),a(-.3,1,.1,-.02,-.06))}for(let f=0;f<5;f++){const d=f/5*Math.PI*2+.5;_(8+Math.round(Math.cos(d)*6),8+Math.round(Math.sin(d)*6),1,0)}for(let f=0;f<3;f++)for(let d=0;d<8;d++){const g=d/8*Math.PI*2+f*.4;c(8+Math.round(Math.cos(g)*f*1.5),8+Math.round(Math.sin(g)*f*1.5),a(.2+(3-f)*.12,1,.5,-.05,-.35))}});for(const f of[Rs,Br,zr,Hr,Gr,Vr,Cs,Oe])b(String(f),()=>{const d=x((g,M,C)=>C*.04+Math.sin((g+M*.5)*.8+C*4)*.04);for(const g of[2,6,10,14])for(let M=0;M<16;M++)d[g*16+M]>-.2&&c(M,g+(M%4<2?0:1),a(.16,.75));for(let g=0;g<5;g++)c(e.int(0,15),e.int(0,15),a(.3,.5))});b("water_side",()=>{x((f,d,g)=>g*.04+d*.004);for(let f=0;f<16;f++)e.next()>.3&&c(f,0,a(.22,.8)),f%3===0&&c(f,1+f%2,a(.1,.5));for(let f=2;f<16;f++)e.next()>.75&&c(e.int(0,15),f,a(.12,.4))}),b(String(gi),()=>{x((f,d,g)=>g*.08-.02);for(let f=0;f<16;f++)for(let d=0;d<16;d++)(f%5===4||(d+Math.floor(f/5)%2*4)%8===3)&&c(d,f,a(-.14+p(.03)));for(let f=0;f<3;f++)v(e.int(8,12),.05,-.1);for(let f=0;f<10;f++)c(e.int(0,15),e.int(0,15),a(.12))}),b(String(Qi),()=>{const f=x((d,g,M)=>M*.06-.35);for(let d=0;d<16;d++)f[d*16+1]>.2&&c(1,d,a(-.1,1,.04,0,.08));for(let d=0;d<=15;d+=5)c(d,0,a(.1,1,.1,0,.15)),c(d,15,a(.1,1,.1,0,.15));for(let d=3;d<=12;d++)for(let g=3;g<=12;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-7.5)),C=Math.max(Math.abs(d-7.5),Math.abs(g-7.5),Math.abs(d+g-15)/2);M>=4.2||(C>=3.4?c(d,g,a(.15,1,.55,.15,.85)):c(d,g,a(.32+(3-M)*.12,1,.75,.3,1)))}for(const[d,g]of[[5,5],[10,10],[10,5]])(d+g)%2===0&&c(d,g,a(.45,1,.8,.35,1))}),b(String(zi),()=>{const f=x((d,g,M)=>M*.03+(g%2===0?.015:-.015)-.08);for(const d of[1,3,5]){for(let g=2;g<=13;g++)c(g,d,a(-.28));for(let g=2;g<=13;g+=3)c(g,d-1,a(.12))}for(let d=4;d<=11;d++)for(let g=7;g<=14;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-10.5));M>=3.2?c(d,g,a(.1+f[g*16+d]*.05)):c(d,g,a(.24+(3-M)*.1,1,-.05,.2,.22))}c(5,12,a(.15,1,-.1,.12,.12)),c(10,9,a(.15,1,-.1,.12,.12));for(let d=7;d<=14;d++)d%2===1&&c(14,d,a(-.2))}),b(String(cn),()=>{const f=x((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,a(-.16+f[g*16+d]*.03));for(let d=0;d<16;d++)if(d%5!==2&&d%5!==3)for(let g=0;g<16;g+=3)e.next()>.4&&c(d,g,a(.5,1,.05,.02,-.05));for(const[d,g]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])c(d,g,a(.2)),c(d+1,g,a(-.2)),c(d,g+1,a(-.2));c(13,1,"rgba(214,74,130,1)"),c(1,6,"rgba(198,58,114,1)"),c(5,11,"rgba(214,74,130,1)")}),b("cactus_top",()=>{const f=x((d,g,M)=>M*.06);for(let d=2;d<=6;d+=2)for(let g=0;g<20;g++){const M=g/20*Math.PI*2;c(8+Math.round(Math.cos(M)*d),8+Math.round(Math.sin(M)*d),a(d===6?-.14:-.06+f[g]*.05))}for(let d=0;d<8;d++){const g=d/8*Math.PI*2;c(8+Math.round(Math.cos(g)*1.5),8+Math.round(Math.sin(g)*1.5),a(.45,1,.05,.03,-.04))}c(8,8,a(.15))}),b(String(li),()=>{const f=x((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,a(-.16+f[g*16+d]*.03));for(const[d,g]of[[4,4],[9,6],[6,10],[11,12],[3,14]])c(d,g,a(.2)),c(d+1,g,a(-.2)),c(d,g+1,a(-.2));for(let d=0;d<=3;d++)for(let g=5;g<=10;g++)(d===3||g===5||g===10||e.next()>.3)&&c(g,d,"rgba(214,74,130,1)");for(let d=0;d<9;d++)c(5+d%4*2,Math.floor(d/4),"rgba(238,150,190,1)");c(6,0,"rgba(238,150,190,1)"),c(9,1,"rgba(248,190,214,1)")}),b(String(Ue),()=>{x((f,d,g)=>g*.05-.02+Math.sin(f*1.3+g*3)*.02);for(let f=0;f<16;f++)c(f,0,a(-.3)),c(f,7,a(-.24)),c(f,15,a(-.3));for(let f=0;f<16;f++)for(let d=0;d<16;d++)d%5===2&&f>7&&e.next()>.4&&c(d,f,a(-.12));for(let f=0;f<16;f++)c(f,4,"rgba(148,154,166,1)"),c(f,5,"rgba(120,126,138,1)");for(let f=2;f<5;f++)for(const d of[7,8])c(d,f,"rgba(200,205,215,1)");c(7,6,"rgba(40,42,48,1)"),c(8,6,"rgba(40,42,48,1)");for(let f=0;f<4;f++){const[d,g]=[[0,0],[15,0],[0,15],[15,15]][f];c(d,g,a(.2)),c(d+(d?-1:1),g,a(.1)),c(d,g+(g?-1:1),a(.1))}}),b("chest_top",()=>{x((f,d,g)=>g*.05+Math.sin(d*1.4+g*2)*.02);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26));for(let f=0;f<16;f++)f!==7&&f!==8&&(c(f,7,"rgba(148,154,166,1)"),c(f,8,"rgba(120,126,138,1)"));for(const[f,d]of[[2,2],[13,2],[2,13],[13,13]])c(f,d,"rgba(200,205,215,1)")}),b(String(wn),()=>{const f=x((d,g,M)=>M*.1-.06);for(const d of[2,6,10,14])for(let g=0;g<16;g++)c(g,d,a(-.16+p(.03)));for(const d of[1,5,9,13])for(let g=0;g<16;g++)f[d*16+g]>-.1&&e.next()>.55&&c(g,d,a(.1));for(let d=0;d<8;d++)c(e.int(0,15),e.int(0,15),a(.05,1,0,-.02,.04))}),b("farmland_side",()=>{x((f,d,g)=>g*.09-.04);for(let f=0;f<16;f++)c(f,0,a(.14));for(let f=0;f<16;f++)for(let d=1;d<16;d++)e.next()>.88&&c(f,d,a(.14))}),b(String(Gn),()=>{u("rgba(0,0,0,0)");for(const[f,d]of[[7,13],[8,13],[7,12],[8,12],[9,13],[6,12]])c(f,d,a(.1));c(6,11,a(.16)),c(9,10,a(.12)),c(7,11,a(.02));for(let f=0;f<4;f++)c(e.int(5,10),e.int(12,15),a(-.05))}),b(String(Sn),()=>{x((f,d,g)=>g*.04-.02);for(let f=4;f<=13;f++)for(let d=2;d<=13;d++){const g=Math.hypot((d-7.5)*1.1,(f-8.5)*1.25);if(g>5.8)continue;const M=(d+(f/2|0))%4===0;c(d,f,a(M?-.18:.04)),g>5.2&&c(d,f,a(-.24)),d<5&&f<7&&!M&&c(d,f,a(.2))}c(8,3,a(-.1)),c(7,3,a(-.16)),c(8,4,a(-.08)),c(2,13,a(.1)),c(13,12,a(.06)),c(4,14,a(.08))}),b(String(Nn),()=>{u("rgba(0,0,0,0)");for(const f of[4,8,12]){for(let d=11;d<=15;d++)c(f,d,a(.08)),d<14&&c(f,d,a(.14));c(f-1,12,a(.06))}}),b(String(an),()=>{u("rgba(0,0,0,0)");for(const f of[3,7,11,14]){const d=f%2?1:-1;for(let g=2;g<=15;g++)c(f+(g<6?d:0),g,a(g<7?.22:-.02));c(f-d,4,a(.18)),c(f-d,9,a(.06)),c(f+d,2,a(.3))}}),b(String(Wr),()=>{x((f,d,g)=>g*.03-.12);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26)),c(f,7,"rgba(150,156,168,1)"),c(f,8,"rgba(110,116,128,1)");for(const[f,d]of[[2,3],[13,3],[2,12],[13,12]])c(f,d,"rgba(200,205,215,1)"),c(f+1,d,"rgba(150,156,168,1)");for(let f=2;f<=5;f++)c(0,f,a(.14)),c(15,f,a(.14))}),b(String(rn),()=>{const f=x((d,g,M)=>M*.03+(d%4===0?-.04:.015));for(let d=0;d<16;d++)c(d,0,a(-.22)),c(d,15,a(-.22)),c(0,d,a(-.16)),c(15,d,a(-.16));for(const[d,g]of[[3,3],[12,3],[3,12],[12,12]])c(d,g,a(.24)),c(d+1,g,a(.08)),c(d,g+1,a(-.14));for(let d=0;d<6;d++)c(e.int(1,14),e.int(1,14),a(-.02,1,.05,-.01,-.06));if(f[8]>.4)for(let d=1;d<4;d++)c(12,d,a(.06,1,.2,.02,-.1))}),b(String(je),()=>{x((f,d,g)=>g*.03-.05);for(let f=0;f<16;f++)c(f,0,a(-.24)),c(f,15,a(-.24)),c(0,f,a(-.24)),c(15,f,a(-.24));for(let f=3;f<=12;f++)for(let d=4;d<=11;d++)(d===4||d===11||f===3||f===12)&&c(d,f,a(.1));for(let f=7;f<=9;f++)c(12,f,a(.26)),c(11,f,a(-.22))}),b(String(Be),()=>{x((f,d,g)=>g*.03-.05);for(let f=0;f<16;f++)c(f,0,a(-.24)),c(f,15,a(-.24)),c(0,f,a(-.24)),c(15,f,a(-.24));for(let f=5;f<=10;f++)for(let d=6;d<=9;d++)c(d,f,a(.1,1,-.05,.1,.15));for(let f=6;f<=9;f++){const d=f-1;d>=5&&d<=10&&c(f,d,a(.3,.6))}for(let f=5;f<=10;f++)for(let d=6;d<=9;d++)(d===6||d===9||f===5||f===10)&&c(d,f,a(.1,1,-.05,.1,.15))}),b(String(Ye),()=>{for(let f=0;f<16;f++)c(0,f,a(-.12,.9)),c(1,f,a(.03,.85)),c(2,f,a(-.17,.7));c(1,7,a(.26,.9)),c(1,8,a(.26,.9))}),b(String(ln),()=>{x((f,d,g)=>g*.04+.02);for(let f=0;f<16;f++)for(let d=0;d<16;d++)(d+f)%5===0&&c(d,f,a(-.1));for(let f=0;f<16;f++)c(f,0,"rgba(60,26,24,1)"),c(f,15,"rgba(60,26,24,1)"),c(0,f,"rgba(60,26,24,1)"),c(15,f,"rgba(60,26,24,1)");for(let f=0;f<16;f++)c(f,11,"rgba(90,40,36,1)"),c(f,12,"rgba(150,80,70,1)"),c(f,13,"rgba(120,60,52,1)");for(let f=1;f<11;f++)c(1,f,a(.12)),c(14,f,a(-.08))}),b("bed_side",()=>{x((f,d,g)=>g*.04-(d>11?-.1:.04));for(let f=0;f<16;f++)c(f,0,a(.14)),c(f,10,a(-.22));for(let f=1;f<10;f++)for(let d=0;d<16;d++)(d+f)%6===1&&c(d,f,a(-.06));for(let f=11;f<16;f++)for(let d=0;d<16;d++)c(d,f,"rgba(70,44,26,1)");for(let f=2;f<16;f+=5)c(f,12,"rgba(96,62,38,1)"),c(f,13,"rgba(52,32,18,1)")}),b(String(xn),()=>{x((f,d,g)=>g*.04+.02);for(let f=0;f<16;f++)c(f,0,"rgba(60,26,24,1)"),c(f,15,"rgba(60,26,24,1)"),c(0,f,"rgba(60,26,24,1)"),c(15,f,"rgba(60,26,24,1)");for(let f=3;f<=11;f++)for(let d=2;d<=13;d++)c(d,f,d===2||d===13||f===3||f===11?"rgba(200,192,176,1)":"rgba(226,220,206,1)"),f===4&&d>3&&d<11&&c(d,f,"rgba(240,236,226,1)");c(4,6,"rgba(208,200,184,1)"),c(10,9,"rgba(208,200,184,1)");for(let f=0;f<16;f++)c(f,12,"rgba(90,40,36,1)")}),b(String(ti),()=>{const f=x((d,g,M)=>M*.12-(g>4?.16:.02));for(let d=0;d<16;d++){const g=2+Math.round((f[d]+1)*1.5);for(let M=0;M<g;M++)c(d,M,a(p(.1)+(M===0?.1:0)));e.next()>.6&&c(d,g+1,a(-.2))}for(let d=0;d<16;d+=3){const g=7+d%5;c(d,g,a(.2))}}),b("grass_top",()=>{x((f,d,g)=>g*.08-.02);for(let f=0;f<40;f++){const d=e.int(0,15),g=e.int(0,14),M=e.int(1,3);for(let C=0;C<M;C++)c(d,g+C,a(C===0?.14:-.02+p(.08)))}for(let f=0;f<5;f++)c(e.int(0,15),e.int(0,15),a(-.3))}),b("grass_side",()=>{const f=x((d,g,M)=>M*.12+(g<3?.06:-.1));for(let d=0;d<16;d++){const g=1+Math.round((f[d+16]+1)*1.5);for(let M=0;M<g;M++)c(d,M,a(.08+p(.08)))}for(let d=0;d<16;d++)for(let g=3;g<16;g++)e.next()>.9&&c(d,g,a(.16,1,-.04,-.02,-.04))}),b(String(Tn),()=>{const f=x((d,g,M)=>M*.05);for(let d=0;d<16;d++){const g=f[d]*2;for(let M=0;M<16;M++){const C=Math.sin(d*1.9+g+Math.sin(M*.35)*1.5);c(d,M,a(C>.75?-.26:C>.2?-.1:.06+p(.04)))}}for(let d=1;d<=2;d++)for(let g=0;g<10;g++){const M=g/10*Math.PI*2;c(9+Math.round(Math.cos(M)*d*1.4),7+Math.round(Math.sin(M)*d),a(d===2?-.3:-.2))}c(9,7,a(-.34)),c(10,7,a(-.28))}),b("wood_top",()=>{x((f,d,g)=>g*.04);for(let f=0;f<44;f++){const d=f/44*Math.PI*2;for(let g=1;g<7;g+=2){const M=g+(g%4===1?.6:0);c(8+Math.round(Math.cos(d)*M),8+Math.round(Math.sin(d)*M),a(g>4?-.12:.05))}}c(8,8,a(-.3)),c(8,7,a(-.2));for(let f=0;f<16;f++)c(f,0,a(-.3)),c(f,15,a(-.3)),c(0,f,a(-.3)),c(15,f,a(-.3))}),b(String(ci),()=>{x((f,d,g)=>g*.14);for(let f=0;f<26;f++){const d=e.int(0,14),g=e.int(0,14);c(d,g,a(.16)),c(d+1,g,a(.06)),c(d,g+1,a(-.1)),c(d+1,g+1,a(-.2))}for(let f=0;f<10;f++){const d=e.int(1,14),g=e.int(1,14);c(d,g,a(-.4)),c(d+1,g,a(-.25))}}),b(String(Vn),()=>{u("rgba(0,0,0,0)");for(let f=6;f<16;f++)c(8,f,a(-.28));c(7,15,a(-.2)),c(9,15,a(-.2)),c(7,5,a(.1)),c(8,5,a(.15)),c(9,5,a(.1)),c(6,4,a(.05)),c(7,4,a(.12)),c(8,4,a(.18)),c(9,4,a(.12)),c(10,4,a(.05)),c(7,3,a(.08)),c(8,3,a(.14)),c(9,3,a(.08)),c(8,2,a(.1)),c(6,5,a(.02)),c(10,5,a(.02))}),b(String(ar),()=>{x((f,d,g)=>g*.1-.02),v(11,.06,-.14),v(7,.06,-.18);for(let f=0;f<5;f++)E(e.int(3,12),e.int(3,12),e.int(1,2),-.06,-.05,.04);m(12,.1)}),b(String(lr),()=>{x((f,d,g)=>g*.1-.04),v(9,.06,-.14);for(let f=0;f<3;f++)E(e.int(3,12),e.int(3,12),e.int(1,2),.26,.04,-.18);for(let f=0;f<2;f++)E(e.int(4,11),e.int(4,11),1,-.12,.16,0);m(10,.08)}),b(String(cr),()=>{x((f,d,g)=>g*.07-.24),v(10,.04,-.08);for(let f=0;f<4;f++){const d=e.int(4,11),g=e.int(4,11),M=e.int(2,3);for(let C=-M;C<=M;C++){const L=M-Math.abs(C);for(let k=-L;k<=L;k++){const N=Math.abs(k)+Math.abs(C);c(d+k,g+C,a(N===M?-.16:N===0?.4:.16,1,-.16,-.06,.3))}}}}),b(String(Is),()=>{const f=y();for(let d=0;d<16;d++){const g=Math.floor((d+f[d*16+8]*2+16)%16/4),M=[-.02,.05,-.06,.02][g%4];for(let C=0;C<16;C++)c(C,d,a(M+f[d*16+C]*.03+(d%4===0?-.06:0)))}for(let d=0;d<3;d++)v(e.int(6,10),.02,.06);m(10,.05)});const I=f=>{for(let d=0;d<16;d++)c(d,0,a(-.22)),c(d,15,a(-.22));for(const d of[0,8])for(let g=1;g<15;g++)f[g*16+d]>-.2&&c(d,g,a(-.16)),d&&(g===3||g===7||g===11)&&c(d,g,a(.2));for(let d=0;d<4;d++){const g=e.int(1,14),M=e.int(1,5),C=e.int(4,8);for(let L=M;L<Math.min(15,M+C);L++)e.next()>.25&&c(g,L,a(-.06+p(.04),1,.3,.05,-.22))}for(let d=0;d<8;d++)c(e.int(1,14),e.int(1,14),a(-.05))};b(String(Hi),()=>{const f=x((d,g,M)=>M*.04-.1+(d%8===0?-.05:0));I(f);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.16)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.26))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++)Math.hypot(g,d)>4.2||c(8+g,8+d,a(-.34+f[(8+d)*16+8+g]*.06))}),b(String(ji),()=>{const f=x((d,g,M)=>M*.04-.08+(d%8===0?-.05:0));I(f);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.2)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.1,1,.35,.05,-.3))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++){const M=Math.hypot(g,d);M>4.2||c(8+g,8+d,a(.35-M*.08+f[(8+d)*16+8+g]*.08,1,.55-M*.05,.12-M*.04,-.45))}for(const[d,g]of[[3,2],[12,4],[5,13],[11,12]])c(d,g,a(.4,1,.5,.1,-.35))}),b(String(Fi),()=>{x((f,d,g)=>g*.03-.22+(f%4===0?-.04:0));for(let f=0;f<16;f++)c(2,f,a(-.16)),c(13,f,a(-.16));for(const f of[2,13])for(let d=3;d<13;d++)c(d,f,a(.12));for(let f=4;f<=11;f++){const d=f===4||f===11?1:2;for(let g=-d;g<=d;g++){const M=d-Math.abs(g);c(8+g,f,a(.2+M*.15+f%2*.05,1,.45+M*.1,.18,-.5))}}for(let f=0;f<6;f++)c(e.int(3,12),e.int(3,12),a(-.05))}),b(String(ir),()=>{x((f,d,g)=>g*.04-.18);for(let f=0;f<3;f++)for(let d=0;d<16;d++)c(d,f,a(.1));for(const f of[3,12])for(let d=3;d<=5;d++)c(f,d,a(-.28));c(3,6,a(-.1)),c(12,6,a(-.1));for(let f=5;f<=10;f++)c(f,7,a(.14));for(let f=6;f<=8;f++)c(f,8,a(-.06)),c(f,9,a(-.22));for(let f=11;f<=14;f++)for(let d=4;d<=11;d++){const g=Math.abs(d-7.5)+Math.abs(f-12.5);c(d,f,a(.25-g*.04+e.next()*.08,1,.55-g*.03,.18-g*.03,-.5))}for(let f=3;f<=12;f++)c(f,10,a(.08));c(3,15,a(.06)),c(12,15,a(.06));for(const[f,d]of[[6,3],[9,4],[7,2]])c(f,d,a(.45,1,.5,.12,-.35))});const A=(f,d,g)=>{S[f]&&(n=d%Dn*Ae,r=(d/Dn|0)*Ae,[i,o,l]=g,S[f]())};for(const[f,d]of Dr.entries())A(String(d),f,vn[d].color);for(const[f,d]of Zu)A(f,He[f],vn[d].color);return Ha=s,s}function P_(){const s=new Du(Ju());return s.flipY=!1,s.magFilter=s.minFilter=qn,s.generateMipmaps=!1,s.colorSpace=kn,s}const te=[];Dr.forEach((s,t)=>te[s]=t);te[bi]=te[ze];te[Si]=te[ze];const mn=Dn*Ae,Qu=s=>{const t=te[s]??0;return[t%Dn*Ae,(t/Dn|0)*Ae]},Zs=[],dn=(s,t,e,n)=>{Zs[s*6]=t,Zs[s*6+1]=e;for(let r=2;r<6;r++)Zs[s*6+r]=n};for(const s of Dr)dn(s,te[s],te[s],te[s]);dn(ti,He.grass_top,te[$n],He.grass_side);dn(Tn,He.wood_top,He.wood_top,te[Tn]);dn(wn,te[wn],te[$n],He.farmland_side);dn(un,He.sandstone_top,te[un],te[un]);dn(ze,He.hull_top,te[ze],te[ze]);dn(bi,He.hull_top,te[ze],te[ze]);dn(Si,He.hull_top,te[ze],te[ze]);dn(ln,te[ln],te[ln],He.bed_side);dn(xn,te[xn],te[xn],He.bed_side);dn(Ue,He.chest_top,te[Ue],te[Ue]);dn(Le,He.bench_top,te[Le],te[Le]);dn(qe,He.bench_ext_top,te[qe],te[qe]);dn(Ke,He.campfire_top,te[Ke],te[Ke]);dn(cn,He.cactus_top,te[cn],te[cn]);dn(li,He.cactus_top,te[cn],te[li]);for(const s of[Oe,Rs,Br,zr,Hr,Gr,Vr,Cs])dn(s,te[s],te[s],He.water_side);const Ui=16,jh=`
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
`,Zh=`
uniform sampler2D map;
uniform vec3 uAmbient;      // day/moon ambient, lerped by the caller
uniform float uFloor;       // ambient floor for baked-light 0 (interiors)
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uNumLights;
uniform vec3 uLightPos[${Ui}];
uniform vec3 uLightCol[${Ui}];
uniform float uLightRange[${Ui}];
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
  for (int i = 0; i < ${Ui}; i++) {
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
`,_r=new F,Jh=new F,L_=new Gt(1,.97,.9),D_=new Gt(.2,.27,.45),k_=new Gt(.72,.55,.35);class U_{scene=new jf;camera;three;chunkMeshes=new Map;group=new oe;entityGroup=new oe;sun;hemi;stars;sunDisc;dust;stormI=0;stormOpen=!0;moonDisc;highlight;renderDistance=7;atlas=P_();matOpaque=new ne({map:this.atlas,vertexColors:!0,side:sn});matEmissive=new Li({map:this.atlas,vertexColors:!0,side:sn});matTrans=new ne({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:sn});lightingMode="sky";skyLight=new w_;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new Gt(1,1,1)},uFloor:{value:.16},uFogColor:{value:new Gt(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:Ui},()=>new F)},uLightCol:{value:Array.from({length:Ui},()=>new F)},uLightRange:{value:new Float32Array(Ui)}};matSky=new Mi({uniforms:this.skyU,vertexShader:jh,fragmentShader:Zh,side:sn,defines:{OPAQUE_PASS:"1"}});matSkyT=new Mi({uniforms:this.skyU,vertexShader:jh,fragmentShader:Zh,side:sn,transparent:!0,depthWrite:!1});torch;playerLight;dynLights=[];fires=new Map;ghost=null;constructor(t){this.three=new W1({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new Wn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new La(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.playerLight=new La(16766826,2.4,20,1.4),this.playerLight.visible=!1,this.scene.add(this.playerLight),this.sun=new op(16777215,1),this.hemi=new ip(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new lc(14207392,40,this.renderDistance*W);const n=new hn,r=[];for(let h=0;h<500;h++){const a=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);r.push(Math.sin(c)*Math.cos(a)*400,Math.abs(Math.cos(c))*400,Math.sin(c)*Math.sin(a)*400)}n.setAttribute("position",new Me(r,3)),this.stars=new ch(n,new zl({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new $e(new Ho(24,24),new Li({color:16771504,fog:!1,side:sn,toneMapped:!1})),this.moonDisc=new $e(new Ho(15,24),new Li({color:14213877,fog:!1,side:sn,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const i=new hn,o=[];for(let h=0;h<700;h++){const a=Math.random()*Math.PI*2,c=3+Math.random()*16;o.push(Math.cos(a)*c,(Math.random()-.35)*14,Math.sin(a)*c)}i.setAttribute("position",new Me(o,3)),this.dust=new ch(i,new zl({color:14072204,size:.3,transparent:!0,opacity:0,depthWrite:!1})),this.dust.frustumCulled=!1,this.scene.add(this.dust);const l=new mi(1.002,1.002,1.002);this.highlight=new ah(new uh(l),new Bl({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,r){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===t&&o.y===e&&o.z===n))return;const i=new La(r==="lamp"?16773296:r==="fire"?16745280:9427199,r==="lamp"?.9:r==="fire"?1.1:.8,r==="lamp"?12:r==="fire"?9:10,1.3);i.position.set(t+.5,e+.6,n+.5),this.scene.add(i),this.dynLights.push({x:t,y:e,z:n,light:i,flame:r==="fire"})}hasPointLight(t,e,n){return this.dynLights.some(r=>r.x===t&&r.y===e&&r.z===n)}removePointLight(t,e,n){const r=this.dynLights.findIndex(i=>i.x===t&&i.y===e&&i.z===n);r<0||(this.scene.remove(this.dynLights[r].light),this.dynLights.splice(r,1))}setGhost(t,e,n,r){if(!this.ghost){const o=new Li({transparent:!0,opacity:.35,depthWrite:!1});this.ghost=new $e(new mi(1.001,1.001,1.001),o);const l=new ah(new uh(new mi(1.02,1.02,1.02)),new Bl({color:14202703,transparent:!0,opacity:.7}));this.ghost.add(l),this.ghost.renderOrder=5,this.scene.add(this.ghost)}const i=vn[r].color;this.ghost.material.color.setRGB(i[0],i[1],i[2]),this.ghost.position.set(t+.5,e+.5,n+.5),this.ghost.visible=!0}clearGhost(){this.ghost&&(this.ghost.visible=!1)}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),r=pi.clamp(n*2.2,0,1),i=pi.clamp(1-Math.abs(n)*5,0,1),o=new Gt(660006),l=new Gt(13201213),h=new Gt(12570592),a=o.clone().lerp(h,r);i>0&&a.lerp(l,i*.7);const c=new Gt(16767392).lerp(new Gt(16743231),i);return{sky:a,sunColor:c,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:r}}updateSky(t,e){const n=t%Ve/Ve,r=this.keyframe(n);if(this.scene.background=r.sky,this.scene.fog.color.copy(r.sky),this.scene.fog.far=this.renderDistance*W*.98,this.stormI>.01){const a=this.scene.fog;a.color.lerp(k_,Math.min(1,this.stormI*.85)),a.near=pi.lerp(40,4,this.stormI),a.far=Math.min(a.far,pi.lerp(this.renderDistance*W,24,this.stormI)),this.scene.background=a.color}const i=(n-.25)*Math.PI*2;_r.set(Math.cos(i),r.sunElev,.4).normalize(),r.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,_r.negate()):(this.sun.color.copy(r.sunColor),this.sun.intensity=r.sunI),this.sun.position.set(e.x+_r.x*120,e.y+_r.y*120,e.z+_r.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+r.sunI*.35,this.stars.material.opacity=Math.max(0,1-r.sunI*3),this.stars.position.set(e.x,e.y,e.z);const o=430;this.sunDisc.position.set(e.x+Math.cos(i)*o,e.y+Math.sin(i)*o,e.z+o*.4),this.moonDisc.position.set(e.x-Math.cos(i)*o,e.y-Math.sin(i)*o,e.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(i)>-.12,this.moonDisc.visible=Math.sin(i)<.12,this.stormI>.01?(this.sun.intensity*=1-this.stormI*.75,this.hemi.intensity*=1-this.stormI*.55,this.sunDisc.visible&&=this.stormI<.5,this.moonDisc.visible&&=this.stormI<.5,this.stars.material.opacity*=1-this.stormI,this.dust.material.opacity=this.stormOpen?this.stormI*.75:0,this.dust.position.set(this.camera.position.x,this.camera.position.y+2,this.camera.position.z),this.dust.rotation.y=t*.7):this.dust.material.opacity>0&&(this.dust.material.opacity=0),this.torch.intensity=.12+(1-Math.min(1,r.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+Wl(t*5.3+a.x*3.1+a.z,7)*.45);const l=this.skyU;l.uAmbient.value.copy(D_).lerp(L_,r.dayT);const h=this.scene.fog;return l.uFogColor.value.copy(h.color),l.uFogNear.value=h.near,l.uFogFar.value=h.far,this.syncSkyLights(),r}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(Jh),t.uLightPos.value[e].copy(Jh);const n=this.torch.color;if(t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++,this.playerLight.visible&&e<Ui){t.uLightPos.value[e].copy(this.playerLight.position);const r=this.playerLight.color;t.uLightCol.value[e].set(r.r,r.g,r.b).multiplyScalar(this.playerLight.intensity),t.uLightRange.value[e]=this.playerLight.distance,e++}for(const r of this.dynLights){if(e>=Ui)break;t.uLightPos.value[e].copy(r.light.position);const i=r.light.color;t.uLightCol.value[e].set(i.r,i.g,i.b).multiplyScalar(r.light.intensity),t.uLightRange.value[e]=r.light.distance,e++}t.uNumLights.value=e}setStorm(t,e){this.stormI=t,this.stormOpen=e}stormDome=null;setStormDome(t){if(!t){this.stormDome&&(this.entityGroup.remove(this.stormDome),this.stormDome.geometry.dispose(),this.stormDome.material.dispose(),this.stormDome=null);return}if(!this.stormDome){const e=new $e(new $o(Vu,28,18),new Li({color:14178376,transparent:!0,opacity:.05,side:An,depthWrite:!1}));e.renderOrder=2,this.stormDome=e,this.entityGroup.add(e)}this.stormDome.position.set(t[0],t[1],t[2])}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}setPlayerLight(t){if(!t){this.playerLight.visible=!1;return}this.playerLight.visible=!0,this.playerLight.position.set(t.x,t.y,t.z)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let r=-this.renderDistance;r<=this.renderDistance;r++)for(let i=-this.renderDistance;i<=this.renderDistance;i++){const o=oi(e+r,n+i);this.chunkMeshes.has(o)||t.markDirty(e+r,n+i)}}buildChunk(t,e){const[n,r]=e.split(",").map(Number),i=t.chunk(n,r),o=[],l=[],h=[],a=[],c=[],u=[],p=[],m=[],v=[],y=[],x=[],_=[],R=[],E=[],S=this.lightingMode==="sky"?this.skyLight.bake(t,n,r,(g,M)=>{const C=oi(g,M);!t.dirty.has(C)&&!this.lightRecheck.has(C)&&this.lightRecheck.add(C)}):null,b=(g,M,C)=>S&&M>=0&&M<Qt?S[ys(g,C,M)]/ko:0;for(let g=0;g<W;g++)for(let M=0;M<W;M++)for(let C=0;C<Qt;C++){const L=i[(g*W+M)*Qt+C];if(L===bt)continue;const k=n*W+g,N=r*W+M,H=t.rots.size?t.getRot(k,C,N):0;if(E_.has(L)){let X=0;if(S)for(const[K,it]of[[1,0],[-1,0],[0,1],[0,-1]])X=Math.max(X,S[ys(g+K,M+it,C)]);this.emitDoor(o,l,h,a,c,X/ko,t,g,C,M,n*W,r*W,L);continue}if(T_.has(L)){const X=te[L],K=X%Dn*Ae,it=(X/Dn|0)*Ae,Et=S?S[ys(g,M,C)]/ko:0,gt=(Wt,we,D,ue)=>{const Rt=y.length/3;y.push(Wt,C,we,D,C,ue,D,C+1,ue,Wt,C+1,we);for(let Lt=0;Lt<4;Lt++)x.push(.92,.92,.92),E.push(Et);R.push((K+.5)/mn,(it+15.5)/mn,(K+15.5)/mn,(it+15.5)/mn,(K+15.5)/mn,(it+.5)/mn,(K+.5)/mn,(it+.5)/mn),_.push(Rt,Rt+1,Rt+2,Rt,Rt+2,Rt+3)};gt(g,M,g+1,M+1),gt(g+1,M,g,M+1);continue}if(L===bi||L===Si){this.emitShape(Kh(R_[L],H),o,l,h,a,c,L,t,g,C,M,n*W,r*W,b);continue}if(L===Le||L===qe){const X=n*W+g,K=r*W+M;let it,Et,gt;L===Le?(it=t.get(X+1,C,K)===qe?0:t.get(X,C,K+1)===qe?1:t.get(X-1,C,K)===qe?2:3,Et=C_,gt=H):(it=t.get(X-1,C,K)===Le?0:t.get(X,C,K-1)===Le?1:t.get(X+1,C,K)===Le?2:3,Et=I_,gt=t.getRot(X+(it===0?-1:it===2?1:0),C,K+(it===1?-1:it===3?1:0))),this.emitShape(Kh(Et,it+gt&3),o,l,h,a,c,L,t,g,C,M,n*W,r*W,b);continue}if(L>=Rs&&L<=Cs){const X=(33-L)/8;for(let K=0;K<wo.length;K++){const it=wo[K],Et=g+it.dir[0],gt=C+it.dir[1],Wt=M+it.dir[2],we=t.get(n*W+Et,gt,r*W+Wt);let D=0;if(it.dir[1]===0&&En(we)){if(D=Di(we)/8,D>=X)continue}else{if(En(we))continue;if(!bo(t,n*W+Et,gt,r*W+Wt,L))continue}const ue=Zs[L*6+K],Rt=ue%Dn*Ae,Lt=(ue/Dn|0)*Ae,xt=y.length/3,he=b(Et,gt,Wt);for(const yt of it.corners)y.push(g+yt[0],yt[1]?C+X:C+D,M+yt[2]),x.push(it.shade,it.shade,it.shade),E.push(he),R.push((Rt+.5+yt[it.uv[0]]*(Ae-1))/mn,(Lt+.5+yt[it.uv[1]]*(Ae-1))/mn);_.push(xt,xt+1,xt+2,xt,xt+2,xt+3)}continue}const Y=vn[L],V=L===Ke&&(this.fires.get(k+","+C+","+N)??0)<=0,J=Y.emissive&&!V,tt=Y.transparent,vt=tt?y:J?u:o,Vt=tt?x:J?p:l,ae=tt?_:J?m:h,le=tt?R:J?v:a,Zt=tt?E:J?null:c;for(let X=0;X<wo.length;X++){const K=wo[X],it=H?Kl(K.dir,H):K.dir,Et=g+it[0],gt=C+it[1],Wt=M+it[2];if(!bo(t,n*W+Et,gt,r*W+Wt,L))continue;const we=V?He.campfire_cold:Zs[L*6+X],D=we%Dn*Ae,ue=(we/Dn|0)*Ae,Rt=vt.length/3,Lt=J?1:K.shade,xt=Zt?b(Et,gt,Wt):0;for(const he of K.corners){const[yt,$t]=H?Ku(he[0],he[2],H):[he[0],he[2]];vt.push(g+yt,C+he[1],M+$t),Vt.push(Lt,Lt,Lt),Zt&&Zt.push(xt),le.push((D+.5+he[K.uv[0]]*(Ae-1))/mn,(ue+.5+he[K.uv[1]]*(Ae-1))/mn)}ae.push(Rt,Rt+1,Rt+2,Rt,Rt+2,Rt+3)}}const I=this.chunkMeshes.get(e);if(I)for(const g of I)this.group.remove(g),g.geometry.dispose();const A=[],f=this.lightingMode==="sky",d=(g,M,C,L,k,N)=>{if(g.length===0)return;const H=new hn;H.setAttribute("position",new Me(g,3)),H.setAttribute("color",new Me(M,3)),H.setAttribute("uv",new Me(L,2)),k&&k.length*3===g.length&&H.setAttribute("light",new Me(k,1)),H.setIndex(C),H.computeVertexNormals();const Y=new $e(H,N);Y.position.set(n*W,0,r*W),!f&&N!==this.matEmissive&&(Y.castShadow=N!==this.matTrans,Y.receiveShadow=!0),this.group.add(Y),A.push(Y)};d(o,l,h,a,S?c:null,f?this.matSky:this.matOpaque),d(u,p,m,v,null,this.matEmissive),d(y,x,_,R,S?E:null,f?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,A)}emitDoor(t,e,n,r,i,o,l,h,a,c,u,p,m){const v=u+h,y=p+c,x=m===je||m===Be||m===Ye,_=m===Ze||m===Be||m===Xe&&l.get(v,a-1,y)===Xe||m===Ye&&l.get(v,a-1,y)===Ye,R=Qu(_?x?Be:Ze:x?je:on),E=m===Xe||m===Ye,b=!(gn(l.get(v-1,a,y))||gn(l.get(v+1,a,y)))&&(gn(l.get(v,a,y-1))||gn(l.get(v,a,y+1))),I=b?!gn(l.get(v-1,a,y)):!gn(l.get(v,a,y-1)),A=b?!gn(l.get(v+1,a,y)):!gn(l.get(v,a,y+1)),f=v+y&1;let d,g;f&&A?(d=1,g=1):!f&&I?(d=0,g=-1):A?(d=1,g=1):(d=0,g=-1);const M=l.doorSwing.get(v+","+y);M&&(g=M);const C=.04,L=.96,k=d?.84:.02,N=d?.98:.16,H=C,Y=d?.98:.02,V=(vt,Vt,ae)=>{const le=t.length/3;for(let Zt=0;Zt<4;Zt++){let[X,K,it]=vt[Zt];if(E){const Et=X-H,gt=it-Y;X=H-g*gt,it=Y+g*Et}t.push(b?h+it:h+X,a+K,b?c+X:c+it),e.push(ae,ae,ae),i.push(o),r.push((R[0]+.5+Vt[Zt][0]*(Ae-1))/mn,(R[1]+.5+Vt[Zt][1]*(Ae-1))/mn)}n.push(le,le+1,le+2,le,le+2,le+3)},J=vt=>(vt-C)/(L-C),tt=vt=>(vt-k)/(N-k);V([[C,0,N],[L,0,N],[L,1,N],[C,1,N]],[[J(C),0],[J(L),0],[J(L),1],[J(C),1]],.85),V([[C,0,k],[L,0,k],[L,1,k],[C,1,k]],[[J(L),0],[J(C),0],[J(C),1],[J(L),1]],.7),V([[L,0,k],[L,0,N],[L,1,N],[L,1,k]],[[tt(k),0],[tt(N),0],[tt(N),1],[tt(k),1]],.6),V([[C,0,k],[C,0,N],[C,1,N],[C,1,k]],[[tt(N),0],[tt(k),0],[tt(k),1],[tt(N),1]],.6),V([[C,1,k],[L,1,k],[L,1,N],[C,1,N]],[[J(C),tt(k)],[J(L),tt(k)],[J(L),tt(N)],[J(C),tt(N)]],1),V([[C,0,k],[L,0,k],[L,0,N],[C,0,N]],[[J(C),tt(N)],[J(L),tt(N)],[J(L),tt(k)],[J(C),tt(k)]],.45)}emitShape(t,e,n,r,i,o,l,h,a,c,u,p,m,v){for(const y of t){const x=(y.dir[0]?1:0)+(y.dir[1]?1:0)+(y.dir[2]?1:0);if(y.fill){if(bo(h,p+a+y.fill[0],c+y.fill[1],m+u+y.fill[2],l))continue}else if(x===1&&!y.always&&!bo(h,p+a+y.dir[0],c+y.dir[1],m+u+y.dir[2],l))continue;const _=Zs[l*6+y.kind],R=_%Dn*Ae,E=(_/Dn|0)*Ae;let S=0;y.fill&&(S=v(a,c,u)),y.dir[0]&&(S=Math.max(S,v(a+y.dir[0],c,u))),y.dir[1]&&(S=Math.max(S,v(a,c+y.dir[1],u))),y.dir[2]&&(S=Math.max(S,v(a,c,u+y.dir[2])));const b=e.length/3;for(const I of y.pts){e.push(a+I[0],c+I[1],u+I[2]),n.push(y.sh,y.sh,y.sh),o.push(S);const[A,f]=y.uv(I);i.push((R+.5+A*(Ae-1))/mn,(E+.5+f*(Ae-1))/mn)}for(let I=1;I+1<y.pts.length;I++)r.push(b,b+I,b+I+1)}}addEntityMesh(t,e,n,r=.35){const i=new $e(new mi(r,r,r),new ne({color:n}));return i.position.set(...e),i.userData.eid=t,this.entityGroup.add(i),i}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(r=>r.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,r,i=14){const o=this.nextEid++,l=new $e(new hc(.14,.28,i,6,1,!0),new Li({color:r,transparent:!0,opacity:.4,depthWrite:!1,side:sn,fog:!1}));return l.position.set(t,e+i/2,n),l.userData.eid=o,this.entityGroup.add(l),o}addGroundRing(t,e,n,r,i=1.1){const o=this.nextEid++,l=new $e(new uc(i*.55,i,24),new Li({color:r,transparent:!0,opacity:.7,side:sn,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,e+.06,n),l.userData.eid=o,this.entityGroup.add(l),o}render(){this.three.render(this.scene,this.camera)}}const ut=s=>s,N_=(s,t)=>`${s.charAt(0).toUpperCase()+s.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,In=(s,t,e,n)=>ut({id:`${e}_${s}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${s}`,desc:N_(s,t),w:1,h:2,mass:1.2+t*.8,tool:{type:s,tier:t},color:n}),F_=[ut({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Xn,color:"#d4b880"}),ut({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:un,color:"#c2a670"}),ut({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:De,color:"#736d69"}),ut({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Ts,color:"#8d8680"}),ut({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:$n,color:"#6b5238"}),ut({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:es,color:"#d9dbd6"}),ut({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:Jn,color:"#61492f"}),ut({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:Ko,color:"#a6cfe6"}),ut({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:As,color:"#8cc0a0"}),ut({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:ze,color:"#858a99"}),ut({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:on,color:"#999fa8"}),ut({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:Un,color:"#fff0a0"}),ut({id:"metal",name:"Iron Rod",desc:"Forged iron — salvaged from the wreck, or baked from Rock and Iron Ore at a Campfire. The backbone of every tool.",w:1,h:1,mass:1,block:jo,color:"#9aa0aa"}),ut({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:Pn,color:"#66e5f0"}),ut({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:Le,color:"#806647"}),ut({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:Ke,color:"#e67333"}),ut({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:zi,color:"#59bfcc"}),ut({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:gi,color:"#b3956b"}),ut({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Ue,color:"#8a6d3b"}),ut({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),ut({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),ut({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),ut({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:Qi,color:"#c468e8"}),ut({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),In("pickaxe",1,"wood","#a8834f"),In("pickaxe",2,"stone","#8d8680"),In("pickaxe",3,"metal","#9aa0aa"),In("shovel",1,"wood","#a8834f"),In("shovel",2,"stone","#8d8680"),In("shovel",3,"metal","#9aa0aa"),In("axe",1,"wood","#a8834f"),In("axe",2,"stone","#8d8680"),In("axe",3,"metal","#9aa0aa"),In("pickaxe",4,"alloy","#c07848"),In("shovel",4,"alloy","#c07848"),In("axe",4,"alloy","#c07848"),In("disassembler",1,"metal","#c0c8d8"),In("disassembler",2,"alloy","#c07848"),ut({id:"voidbreaker",name:"Voidbreaker",desc:"Cheat gear: every block — even Ship Hull and bedrock-hard stuff — shatters the instant you swing. There is no recipe: it only comes out of the cheat menu.",w:1,h:2,mass:2,instaBreak:!0,color:"#8a5ad6"}),ut({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),ut({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",bag:{w:4,h:5,kg:20},color:"#7a5a3a"}),ut({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:cn,color:"#3d8042"}),ut({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),ut({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),ut({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",armor:.4,color:"#8a6f4d"}),ut({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),ut({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),ut({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:wn,color:"#573d23"}),ut({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:Gn,color:"#c8b060"}),ut({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:Nn,color:"#d8c878"}),ut({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),ut({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),ut({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),ut({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:Tn,color:"#7a5c3a"}),ut({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),ut({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Vn,color:"#7fae54"}),ut({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),ut({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),ut({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:Wr,color:"#8a744a"}),ut({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:rn,color:"#9aa0ac"}),ut({id:"storm_breaker",name:"Sandstorm Breaker",desc:"A humming red pylon. Stand within 8 blocks of one and the Sandstorm loses all teeth — no scorching, no wind-thirst, no sand blast.",w:1,h:1,mass:4,block:Fi,color:"#c04838"}),ut({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:je,color:"#82868e"}),ut({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:ln,color:"#a84a42"}),ut({id:"iron_ore",name:"Iron Ore",desc:"Dense ore from Cave walls. Smelt it at a Campfire: one ore bakes two Iron Rods.",w:1,h:1,mass:1.6,block:ar,color:"#9e8468"}),ut({id:"copper_ore",name:"Copper Ore",desc:"Reddened Cave stone. Smelts into Copper Rods - the heart of tier-4 Alloy gear.",w:1,h:1,mass:1.6,block:lr,color:"#b86b42"}),ut({id:"alabaster",name:"Alabaster",desc:"Pale Cave stone. Cuts soft, decorates well, and takes a Lamp's light like nothing else.",w:1,h:1,mass:1.2,block:Is,color:"#dcd5bd"}),ut({id:"cobalt_ore",name:"Cobalt Ore",desc:"Bluish ore of the deepest stone (Metal Pickaxe or better). The Ship's repair hangs on it.",w:1,h:1,mass:2.2,block:cr,color:"#5c74a8"}),ut({id:"copperrod",name:"Copper Rod",desc:"Smelted from Copper Ore. Never a tool by itself - always a component of better things.",w:1,h:1,mass:1,color:"#c07848"}),ut({id:"cobaltrod",name:"Cobalt Rod",desc:"Smelted from Cobalt Ore, found only in the deep underground. One Thruster Nozzle needs one.",w:1,h:1,mass:1.4,color:"#6a84bc"}),ut({id:"backpack2",name:"Backpack II",desc:"The big pack: inventory grid grows to 5x6, weight limit +40 kg. Reptile-hide stitching.",w:2,h:2,mass:3.5,equip:"backpack",bag:{w:5,h:6,kg:40},color:"#6a4c30"}),ut({id:"body_regulator",name:"Body Heat Regulator",desc:"Worn in the Regulator slot: pins your Heat toward neutral while a Coolant Cell lasts. It regulates you - never a room.",w:2,h:2,mass:3,equip:"regulator",color:"#4fa8c8"}),ut({id:"coolant_cell",name:"Coolant Cell",desc:"Consumable fuel for the Body Heat Regulator: one cell carries about 2 game days of regulation. Spent cells are gone.",w:1,h:1,mass:.8,color:"#7fd4e8"}),ut({id:"head_lantern",name:"Head Lantern",desc:"The Portable Light: worn in the Light slot, toggled with T. Burns fuel charges (5 max) - refill at a Campfire or load Kindling.",w:1,h:1,mass:1,equip:"light",fuel:5,color:"#ffd76a"}),ut({id:"chitin",name:"Chitin",desc:"Dust Scorpion armor plate. Tough, thin, and very hard to burn.",w:1,h:1,mass:.3,color:"#6a4a3a"}),ut({id:"stinger",name:"Stinger",desc:"A Dust Scorpion's barb. Tipped onto a blade, it makes the deadliest weapon in the desert.",w:1,h:1,mass:.2,color:"#a84a3a"}),ut({id:"wurm_hide",name:"Wurm Hide",desc:"Sand Wurm skin - heat-tempered plating for the toughest Body gear.",w:1,h:2,mass:1.2,color:"#8a6a48"}),ut({id:"vulture_raw",name:"Vulture Fillet (raw)",desc:"Raw meat off a Sand Vulture. Cook it at a Campfire before eating.",w:1,h:1,mass:.7,color:"#7a5a4a"}),ut({id:"vulture_cooked",name:"Roasted Fillet",desc:"Cooked Vulture meat. Eat it: +25 Health.",w:1,h:1,mass:.6,eat:{health:25},color:"#b0764a"}),ut({id:"tortoise_shell",name:"Thornback Shell",desc:"The spiked dome of a Thornback Tortoise. Three plate a Cuirass; Traders always want them.",w:2,h:2,mass:6,color:"#5f5a4e"}),ut({id:"fennec_pelt",name:"Fennec Pelt",desc:"Soft pale fur off a Fennec Fox. Worth a real price at any Trader.",w:1,h:2,mass:.5,color:"#c99a62"}),ut({id:"tortoise_cuirass",name:"Thornback Cuirass",desc:"Body-slot breastplate of layered Shell and Metal: shrugs off 48% of every blow. Heavy going.",w:2,h:2,mass:9,equip:"body",armor:.48,color:"#6a6255"}),ut({id:"wurmsuit",name:"Wurmsuit",desc:"Body-slot armour of Wurm Hide and Chitin: shrugs off 45% of every blow, and the Chitin turns the Sandstorm aside — blast and wind-thirst bite at a quarter. Warmer against the cold night too.",w:2,h:2,mass:5,equip:"body",armor:.45,stormResist:!0,color:"#7a5c40"}),ut({id:"stinger_blade",name:"Stinger Blade",desc:"A Metal Sword tipped with a Scorpion Stinger: hits harder and farther than anything above ground.",w:1,h:2,mass:2.4,weapon:{reach:5.2,dmg:12},color:"#c9b048"}),ut({id:"curved_hull",name:"Curved Hull Plating",desc:"Hull Plating shaped as an elbow - insulates exactly like flat plating, and rounds any corner you build.",w:1,h:1,mass:2,block:bi,color:"#7d8390"}),ut({id:"hull_slope",name:"Hull Slope",desc:"A beveled hull block for spines, roofs and shoulders. Same insulation, rounder silhouette.",w:1,h:1,mass:2,block:Si,color:"#767d88"}),ut({id:"thruster_nozzle",name:"Thruster Nozzle",desc:"Cobalt-and-Copper replacement engine part. Press E at a Broken Thruster to wake it. All four wake the Ship.",w:1,h:2,mass:3,color:"#c88a50"}),ut({id:"thruster_broken",name:"Broken Thruster",desc:"A dead wingtip engine torn off its pylon. Heavy, inert — set it down anywhere and it waits for a Thruster Nozzle.",w:2,h:2,mass:22,block:Hi,color:"#6b707c"}),ut({id:"thruster_lit",name:"Thruster (lit)",desc:"A running engine lifted off its pylon. It keeps burning while you carry it, and burns where you set it down.",w:2,h:2,mass:22,block:ji,color:"#c88a50"}),ut({id:"armory",name:"Armoury",desc:"A forge bench for gear that guards the body: armour, backpacks, visors and the Body Heat Regulator. Built at the Crafting Bench.",w:2,h:2,mass:14,block:ir,color:"#6a6258"}),ut({id:"hot_water_pouch",name:"Hot Water Pouch",desc:"A full canister heated at a lit Campfire. Use it (Q): a +10 °C heat pulse toward body-warm, and the empty canister comes back.",w:1,h:2,mass:1.2,color:"#e08a4f"})],kt=Object.fromEntries(F_.map(s=>[s.id,s])),ei={};for(const s of Object.values(kt))s.block!==void 0&&(ei[s.block]=s.id);ei[Ze]="door";ei[Be]="door_inner";ei[xn]="bed";ei[ti]="dirt";ei[ci]="kindling";ei[Gn]="seed_melon";ei[Sn]="dune_melon";ei[Nn]="seed_wheat";ei[an]="wheat";ei[li]="cactus";function Hn(s){const t=kt[s.itemId];return s.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class Ga{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const r=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const i of r)this.addItem(i.itemId,1)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=kt[e.itemId].mass;return t}occupied(t,e,n){for(const r of this.slots){if(r===n)continue;const i=Hn(r);if(t>=r.x&&t<r.x+i.w&&e>=r.y&&e<r.y+i.h)return r}return null}fits(t,e,n,r,i){if(t<0||e<0||t+n>this.w||e+r>this.h)return!1;for(let o=0;o<r;o++)for(let l=0;l<n;l++)if(this.occupied(t+l,e+o,i))return!1;return!0}move(t,e,n){const r=Hn(t);return e===t.x&&n===t.y?!0:this.fits(e,n,r.w,r.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=Hn(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addItem(t,e=1){const n=kt[t],r=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let i=0;i<e;i++){let o=!1;for(const[l,h,a]of r){for(let c=0;c<=this.h-h&&!o;c++)for(let u=0;u<=this.w-l&&!o;u++){let p=!0;for(let m=0;m<h&&p;m++)for(let v=0;v<l&&p;v++)this.occupied(u+v,c+m)&&(p=!1);p&&(this.slots.push(a?{itemId:t,x:u,y:c,rot:!0}:{itemId:t,x:u,y:c}),o=!0)}if(o)break}if(!o)return e-i}return 0}removeItem(t,e=1){let n=0;for(let r=this.slots.length-1;r>=0&&n<e;r--)this.slots[r].itemId===t&&(this.slots.splice(r,1),n++);return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&e++;return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const Eo={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]},scorpion:{kind:"scorpion",name:"Dust Scorpion",hp:20,speed:1.9,aggroR:3.5,fleeR:0,biteDmg:7,biteCd:2.2,hitR:.6,height:.5,drops:[{itemId:"chitin",count:1},{itemId:"stinger",count:1}],dropChance:[1,.3]},wurm:{kind:"wurm",name:"Sand Wurm",hp:45,speed:1,aggroR:7,fleeR:0,biteDmg:12,biteCd:2.5,hitR:.8,height:.9,drops:[{itemId:"wurm_hide",count:2},{itemId:"chitin",count:1}],dropChance:[1,.5]},trader:{kind:"trader",name:"Trader",hp:9999,speed:0,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.5,height:1.8,drops:[]},vulture:{kind:"vulture",name:"Sand Vulture",hp:14,speed:2.6,aggroR:5,fleeR:8,biteDmg:5,biteCd:2.2,hitR:.55,height:.9,drops:[{itemId:"vulture_raw",count:1},{itemId:"vulture_raw",count:1}],dropChance:[1,.5]},tortoise:{kind:"tortoise",name:"Thornback Tortoise",hp:40,speed:.7,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.9,height:.8,drops:[{itemId:"tortoise_shell",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.4]},fennec:{kind:"fennec",name:"Fennec Fox",hp:6,speed:4.2,aggroR:0,fleeR:9,biteDmg:0,biteCd:0,hitR:.4,height:.45,drops:[{itemId:"fennec_pelt",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.3]}},O_=new mi(1,1,1);function B_(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function ns(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");s(e,B_(5370855));const n=new Du(t);return n.magFilter=n.minFilter=qn,n.generateMipmaps=!1,n.colorSpace=kn,n}function z_(){return ns((s,t)=>{s.fillStyle="#c8a76d",s.fillRect(0,0,64,64);for(let n=0;n<420;n++){const r=.5+(t()-.5)*.22;s.fillStyle=r>.5?"#d4b781":"#b89359",s.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let r=0;r<9;r++){const i=5-Math.abs(r-4);s.fillStyle="#6f5230",s.fillRect(32-i,n+r,i*2,1),s.fillStyle="#8a6a3f",s.fillRect(32-i+1,n+r,Math.max(1,i*2-2),1)}s.fillStyle="#a9884f",s.fillRect(10+(t()*4|0),n+3,3,2),s.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)s.fillStyle=n>=56?"#e9dab1":"#d8c494",s.fillRect(0,n,64,1);for(let n=0;n<40;n++)s.fillStyle="#ddcba0",s.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function H_(){return ns((s,t)=>{s.fillStyle="#c9a878",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#ddc295":"#a9854f",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)s.fillStyle="#8a6a3c",s.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)s.fillStyle=e>=54?"#f2ead9":"#e2d4ba",s.fillRect(0,e,64,1);s.fillStyle="#efe6d2",s.beginPath(),s.arc(10,12,8,0,Math.PI*2),s.fill(),s.fillStyle="#6b4e2c",s.fillRect(8,10,4,4)})}function G_(){return ns((s,t)=>{s.fillStyle="#a4552e",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#b56a3c":"#8f4526",s.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[6,18,30,42])s.fillStyle="#6e3018",s.fillRect(0,e,64,2),s.fillStyle="#c47a4a",s.fillRect(0,e+2,64,1);s.fillStyle="#8a3f20",s.fillRect(30,0,4,50);for(let e=0;e<40;e++)s.fillStyle="#b56a3c",s.fillRect(30+(t()*4|0),t()*50|0,1,1);for(let e=52;e<64;e++)s.fillStyle=e>=56?"#e3cfa8":"#c9ae83",s.fillRect(0,e,64,1)})}function V_(){return ns((s,t)=>{s.fillStyle="#c2a266",s.fillRect(0,0,64,64);for(let e=0;e<620;e++)s.fillStyle=t()>.5?"#d3b77e":"#ab8a52",s.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[5,17,29,41]){s.fillStyle="#7d5f36",s.fillRect(0,e,64,3),s.fillStyle="#96744499";for(let n=0;n<64;n+=4)s.fillRect(n,e+3,2,1)}for(let e=54;e<64;e++)s.fillStyle=e>=58?"#e6d6ac":"#d2bf94",s.fillRect(0,e,64,1)})}function W_(){return ns((s,t)=>{s.fillStyle="#a8906a",s.fillRect(0,0,64,64);for(let e=0;e<640;e++)s.fillStyle=t()>.5?"#b9a179":"#8f7854",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<70;e++)s.fillStyle="#75603f",s.fillRect(t()*64|0,t()*50|0,2,4);for(let e=0;e<6;e++)s.fillStyle=e>=3?"#c9b68e":"#b8a37b",s.fillRect(0,e,64,1)})}function q_(){return ns((s,t)=>{s.fillStyle="#77744f",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#86825c":"#65613f",s.fillRect(t()*64|0,t()*64|0,1,1);s.fillStyle="#4c4930";for(const e of[10,31,52])s.fillRect(e,0,2,64);for(const e of[12,33,54])s.fillRect(0,e,64,2);for(const e of[16,37])for(const n of[3,22,43])s.fillStyle="#8f8b63",s.fillRect(e,n,11,7)})}function X_(){return ns((s,t)=>{s.fillStyle="#d8bd8e",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#e6cfa6":"#c2a271",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<8;e++)s.fillStyle=e>=4?"#b18f5c":"#a68351",s.fillRect(0,e,64,1);for(let e=54;e<64;e++)s.fillStyle=e>=58?"#f0e4c8":"#e3d3ac",s.fillRect(0,e,64,1)})}function $_(){return ns((s,t)=>{s.fillStyle="#27474a",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#2e5254":"#1f3b3e",s.fillRect(t()*64|0,t()*64|0,1,2);s.fillStyle="#5c2e46",s.fillRect(0,0,64,8),s.fillRect(0,46,64,8),s.fillStyle="#b99a5e",s.fillRect(0,8,64,1),s.fillRect(0,45,64,1);for(let e=0;e<34;e++)s.fillStyle="#6f4a5c",s.fillRect(t()*64|0,16+(t()*26|0),2,2)})}let Va=null,Wa=null,qa=null,Xa=null,$a=null,Ya=null,Ka=null,ja=null;function Y_(){return Va||(Va={body:new ne({map:z_()}),ridge:new ne({color:7295536}),eye:new ne({color:1445898})}),Va}function K_(){return Wa||(Wa={fur:new ne({map:H_()}),pale:new ne({color:15260868}),dark:new ne({color:6045731}),pink:new ne({color:14196896})}),Wa}function j_(){return qa||(qa={shell:new ne({map:G_()}),claw:new ne({color:8272414}),stinger:new ne({color:5579793}),eye:new ne({color:1445898})}),qa}function Z_(){return Xa||(Xa={hide:new ne({map:V_()}),ridge:new ne({color:8216374}),eye:new ne({color:1445898})}),Xa}function J_(){return $a||($a={plumage:new ne({map:W_()}),skin:new ne({color:13077884}),feather:new ne({color:6245427}),beak:new ne({color:3486778}),eye:new ne({color:1445898})}),$a}function Q_(){return Ya||(Ya={shell:new ne({map:q_()}),skin:new ne({color:9669214}),thorn:new ne({color:5722426}),beak:new ne({color:11575918}),eye:new ne({color:1445898})}),Ya}function tv(){return Ka||(Ka={fur:new ne({map:X_()}),pale:new ne({color:15721158}),dark:new ne({color:7032364}),pink:new ne({color:14196896})}),Ka}function ev(){return ja||(ja={robe:new ne({map:$_()}),sash:new ne({color:10246707}),skin:new ne({color:13079398}),scarf:new ne({color:14207920}),pouch:new ne({color:7228204}),coin:new ne({color:13216079}),eye:new ne({color:1445898})}),ja}function ct(s,t,e,n,r,i,o){const l=new $e(O_,n);return l.scale.set(s,t,e),l.position.set(r,i,o),l}function nv(){const s=Y_(),t=new oe,e=[],n=[],r=[.36,.13,-.1,-.33,-.54,-.72],i=[.26,.27,.26,.23,.18,.12],o=[.22,.23,.22,.2,.16,.11],l=.24;for(let u=0;u<r.length;u++){const p=Math.sin(u*.8)*.05,m=ct(i[u],o[u],l,s.body,p,o[u]/2+.005,r[u]);e.push({mesh:m,bx:p,w:i[u],h:o[u],d:l}),n.push({mesh:ct(i[u]*.3,.02,l*.92,s.ridge,p,o[u]+.008,r[u]),w:i[u]}),t.add(m,n[u].mesh)}const h=new oe;h.position.set(Math.sin(0)*.05,.095+.005,.6);const a=ct(.27,.19,.27,s.body,0,.095,0);return h.add(a),h.add(ct(.035,.035,.03,s.eye,-.115,.14,.11)),h.add(ct(.035,.035,.03,s.eye,.115,.14,.11)),t.add(h),{group:t,animate:(u,p)=>{const m=Math.max(0,Math.min(1,p)),v=.015+.075*m,y=u*(3.2+2.6*m);for(let x=0;x<e.length;x++){const _=e[x],R=Math.sin(y-x*.85)*v;_.mesh.position.x=_.bx+R,_.mesh.rotation.y=-R*1.4;const E=1+Math.sin(u*1.9)*.03*(1-m*.6);_.mesh.scale.set(_.w*E,_.h,_.d);const S=n[x];S.mesh.position.x=_.mesh.position.x,S.mesh.rotation.y=_.mesh.rotation.y,S.mesh.scale.x=S.w*.3*E}h.position.x=Math.sin(y+.85)*v*.5,h.rotation.y=Math.sin(u*(2.2+2.4*m))*(.06+.14*m)}}}function iv(){const s=K_(),t=new oe,e=new oe;t.add(e);const n=ct(.22,.26,.34,s.fur,0,.26,-.02);e.add(n);const r=new oe;r.position.set(0,.31,.19),r.add(ct(.15,.14,.15,s.fur,0,0,.05)),r.add(ct(.045,.035,.04,s.pink,0,-.02,.13)),r.add(ct(.028,.028,.02,s.dark,-.062,.03,.1)),r.add(ct(.028,.028,.02,s.dark,.062,.03,.1)),e.add(r);const i=ct(.05,.12,.025,s.fur,-.075,.41,.16),o=ct(.05,.12,.025,s.fur,.075,.41,.16);i.rotation.z=.15,o.rotation.z=-.15,e.add(i,o);const l=ct(.09,.14,.11,s.fur,-.12,.14,-.06),h=ct(.09,.14,.11,s.fur,.12,.14,-.06),a=ct(.07,.05,.22,s.pale,-.13,.028,.02),c=ct(.07,.05,.22,s.pale,.13,.028,.02);e.add(l,h,a,c),e.add(ct(.035,.035,.07,s.pale,-.08,.11,.15)),e.add(ct(.035,.035,.07,s.pale,.08,.11,.15));const u=new oe;return u.position.set(0,.16,-.19),u.add(ct(.04,.04,.24,s.fur,0,0,-.12)),u.add(ct(.032,.032,.22,s.fur,0,-.045,-.34)),u.add(ct(.07,.055,.11,s.dark,0,-.075,-.5)),e.add(u),{group:t,animate:(m,v)=>{const y=Math.max(0,Math.min(1,v)),x=Math.abs(Math.sin(m*(2.6+2.4*y)));e.position.y=x*.13*y+Math.sin(m*1.7)*.004,n.scale.y=.26*(1+Math.sin(m*1.9)*.03*(1-y)),a.rotation.x=c.rotation.x=-.55*x*y,l.rotation.x=h.rotation.x=-.35*x*y,u.rotation.y=Math.sin(m*(1.8+3.4*y))*(.1+.3*y),u.rotation.x=-.12-.18*y+Math.sin(m*(2.6+2.4*y))*.06*y;const _=Math.max(0,Math.sin(m*6.3))**8*(1-y);i.rotation.z=.15+_*.25,o.rotation.z=-.15-Math.max(0,Math.sin(m*6.3+2.1))**8*(1-y)*.25,r.rotation.x=-.1*x*y+Math.sin(m*1.3)*.03*(1-y)}}}const sv=new $o(1,14,10);function ws(s,t,e,n,r,i,o){const l=new $e(sv,n);return l.scale.set(s,t,e),l.position.set(r,i,o),l}function rv(){const s=j_(),t=new oe,e=new oe;t.add(e);const n=.09,r=ct(.46,.14,.34,s.shell,0,n+.07,.02);e.add(r);const i=[],o=[-.26,-.45,-.62],l=[.4,.34,.26],h=[.13,.12,.1];for(let E=0;E<o.length;E++){const S=ct(l[E],h[E],.2,s.shell,0,n+h[E]/2,o[E]);i.push({mesh:S,bx:0,w:l[E],h:h[E],d:.2}),e.add(S)}const a=new oe;a.position.set(0,n+.045,.25),a.add(ct(.26,.09,.13,s.shell,0,0,0)),a.add(ct(.03,.03,.02,s.eye,-.08,.05,.05)),a.add(ct(.03,.03,.02,s.eye,.08,.05,.05)),e.add(a);const c=[],u=[];for(const E of[-1,1]){const S=new oe;S.position.set(E*.24,n+.04,.14),S.rotation.y=E*.5,S.add(ct(.075,.055,.2,s.shell,0,0,.1)),S.add(ct(.07,.05,.1,s.claw,0,0,.24));const b=ct(.025,.022,.13,s.claw,0,.026,.33),I=ct(.025,.022,.13,s.claw,0,-.026,.33);S.add(b,I),c.push({up:b,dn:I}),u.push(S),e.add(S)}const p=[];for(const E of[-1,1])for(let S=0;S<4;S++){const b=ct(.03,.11,.03,s.shell,E*.3,n*.5,.12-S*.14);b.rotation.z=-E*.55,p.push(b),e.add(b)}const m=new oe;m.position.set(0,n+.1,-.7),m.rotation.x=.5,m.add(ct(.16,.16,.22,s.shell,0,0,-.11));const v=new oe;v.position.set(0,.04,-.22),v.rotation.x=.7,v.add(ct(.13,.13,.18,s.shell,0,0,-.09));const y=new oe;y.position.set(0,.03,-.18),y.rotation.x=.8,y.add(ct(.1,.1,.15,s.shell,0,0,-.075));const x=ws(.22,.2,.24,s.stinger,0,.06,-.22),_=ct(.035,.035,.13,s.stinger,0,.16,-.3);return _.rotation.x=.5,y.add(x,_),v.add(y),m.add(v),e.add(m),{group:t,animate:(E,S)=>{const b=Math.max(0,Math.min(1,S));e.position.y=Math.abs(Math.sin(E*(5.5+5*b)))*.012*b;const I=E*(6+6*b);for(let d=0;d<p.length;d++){const g=d%4,M=d<4?0:Math.PI;p[d].rotation.x=Math.sin(I+g*1.7+M)*.5*b}const A=1+Math.sin(E*1.6)*.03*(1-b*.5);for(const d of i)d.mesh.scale.set(d.w*A,d.h,d.d);for(let d=0;d<2;d++){const g=u[d],M=c[d];g.rotation.z=Math.sin(I+d*Math.PI)*.25*b;const C=.06+Math.abs(Math.sin(E*(1.4+1.6*b)+d*1.3))*(.08+.14*b);M.up.rotation.x=-C,M.dn.rotation.x=C}const f=.06+.14*b;m.rotation.y=Math.sin(E*(1.1+1.4*b))*f,y.rotation.x=.8+Math.sin(E*1.7)*.08,a.rotation.y=Math.sin(E*1.5)*.05*(1-b*.5)}}}function ov(){const s=Z_(),t=new oe,e=[],n=[],r=[-.95,-.45,.1,.62],i=[.34,.4,.44,.42],o=[.3,.37,.42,.4],l=[.4,.45,.48,.45];for(let c=0;c<r.length;c++){const u=o[c]+.01,p=ws(i[c]*2,o[c]*2,l[c]*2,s.hide,0,u,r[c]);e.push({mesh:p,bx:0,w:i[c]*2,h:o[c]*2,d:l[c]*2}),n.push({mesh:ct(i[c],.06,l[c]*.8,s.ridge,0,u+o[c]-.04,r[c]),w:i[c]}),t.add(p,n[c].mesh)}const h=new oe;return h.position.set(0,.36,1.15),h.add(ws(.72,.68,.76,s.hide,0,0,0)),h.add(ct(.05,.05,.04,s.eye,-.19,.12,.26)),h.add(ct(.05,.05,.04,s.eye,.19,.12,.26)),t.add(h),{group:t,animate:(c,u)=>{const p=Math.max(0,Math.min(1,u)),m=.02+.11*p,v=c*(1.5+1.5*p);for(let y=0;y<e.length;y++){const x=e[y],_=Math.sin(v-y*.8)*m;x.mesh.position.x=x.bx+_,x.mesh.rotation.y=-_*1.1;const R=1+Math.sin(c*1.1-y*.6)*.03;x.mesh.scale.set(x.w*R,x.h,x.d*R);const E=n[y];E.mesh.position.x=x.mesh.position.x,E.mesh.rotation.y=x.mesh.rotation.y,E.mesh.scale.x=E.w*R}h.position.x=Math.sin(v+.8)*m*.7,h.rotation.y=Math.sin(c*(1.2+1.4*p))*(.07+.13*p)}}}function av(){const s=J_(),t=new oe,e=new oe;t.add(e);const n=ws(.52,.5,.68,s.plumage,0,.44,-.06);n.rotation.x=-.12,e.add(n);const r=new oe;r.position.set(0,.6,.2),r.rotation.x=.25,r.add(ct(.13,.22,.13,s.skin,0,.09,0)),r.add(ct(.26,.09,.26,s.plumage,0,-.02,-.01));const i=new oe;i.position.set(0,.22,.02),i.add(ws(.19,.17,.2,s.skin,0,0,.03)),i.add(ct(.09,.09,.13,s.beak,0,-.01,.14));const o=ct(.05,.07,.06,s.beak,0,-.06,.2);o.rotation.x=.5,i.add(o),i.add(ct(.03,.03,.02,s.eye,-.08,.04,.1)),i.add(ct(.03,.03,.02,s.eye,.08,.04,.1)),r.add(i),e.add(r);const l=[];for(const c of[-1,1]){const u=new oe;u.position.set(c*.26,.52,-.04),u.rotation.z=c*.35,u.add(ct(.08,.34,.5,s.plumage,0,-.08,0)),u.add(ct(.05,.28,.42,s.feather,c*.04,-.2,-.06)),l.push(u),e.add(u)}const h=[];for(const c of[-1,1]){const u=ct(.09,.2,.09,s.feather,c*.13,.1,.02);h.push(u),e.add(u,ct(.1,.04,.16,s.beak,c*.13,.02,.08))}return{group:t,animate:(c,u)=>{const p=Math.max(0,Math.min(1,u));e.position.y=Math.sin(c*1.6)*.008+Math.abs(Math.sin(c*(3+2.6*p)))*.02*p,e.rotation.x=.12*p+Math.sin(c*1.3)*.012*(1-p);for(let v=0;v<2;v++){const y=v===0?-1:1,x=Math.sin(c*(4.5+3*p)+v*.9)*(.05+.22*p);l[v].rotation.z=y*(.35+x)}i.rotation.x=-.18+.28*p+Math.sin(c*1.1)*.04*(1-p);const m=c*(3.4+3*p);for(let v=0;v<h.length;v++)h[v].rotation.x=Math.sin(m+v*Math.PI)*.4*p}}}function lv(){const s=Q_(),t=new oe,e=new oe;t.add(e);const n=.14;e.add(ws(1.05,.75,1.15,s.shell,0,n+.31,-.02));for(const l of[.9,1.4,1.9,2.4,2.9,Math.PI,3.3,3.8,4.3,4.8,5.3]){const h=ct(.09,.16,.09,s.thorn,Math.sin(l)*.52,n+.44,Math.cos(l)*.57-.02);h.rotation.z=-Math.sin(l)*.45,h.rotation.x=Math.cos(l)*.45,e.add(h)}const r=[];for(const l of[-1,1])for(const h of[.33,-.35]){const a=ct(.16,n+.06,.18,s.skin,l*.32,(n+.06)/2,h);r.push(a),e.add(a)}const i=new oe;return i.position.set(0,n+.17,.66),i.add(ct(.2,.17,.18,s.skin,0,0,0)),i.add(ct(.12,.09,.1,s.beak,0,-.03,.13)),i.add(ct(.035,.035,.02,s.eye,-.08,.04,.09)),i.add(ct(.035,.035,.02,s.eye,.08,.04,.09)),e.add(i),e.add(ct(.09,.09,.16,s.skin,0,n+.12,-.66)),{group:t,animate:(l,h)=>{const a=Math.max(0,Math.min(1,h));e.position.y=Math.abs(Math.sin(l*(1.4+1.2*a)))*.008*a;const c=l*(1.6+1.4*a);for(let p=0;p<r.length;p++)r[p].rotation.x=Math.sin(c+p%2*Math.PI+(p<2?0:.6))*.3*a;const u=Math.sin(l*.9);i.position.z=.66+u*.05*(1-a)+.05*a,i.rotation.x=.05*a+u*.03*(1-a)}}}function cv(){const s=tv(),t=new oe,e=new oe;t.add(e),e.add(ct(.2,.2,.36,s.fur,0,.24,-.02));const n=new oe;n.position.set(0,.3,.24),n.add(ct(.16,.15,.14,s.fur,0,0,0)),n.add(ct(.07,.06,.13,s.pale,0,-.04,.12)),n.add(ct(.03,.025,.02,s.dark,-.06,.03,.075)),n.add(ct(.03,.025,.02,s.dark,.06,.03,.075)),n.add(ct(.028,.022,.02,s.pink,0,-.03,.185)),e.add(n);const r=ct(.09,.2,.025,s.fur,-.09,.48,.18),i=ct(.09,.2,.025,s.fur,.09,.48,.18),o=ct(.055,.13,.02,s.pink,-.09,.47,.196),l=ct(.055,.13,.02,s.pink,.09,.47,.196);r.rotation.z=.28,i.rotation.z=-.28,e.add(r,i,o,l);const h=[];for(const u of[-1,1])for(const p of[.13,-.15]){const m=ct(.05,.16,.05,s.fur,u*.08,.08,p);h.push(m),e.add(m)}const a=new oe;return a.position.set(0,.25,-.2),a.add(ct(.06,.06,.24,s.fur,0,-.02,-.12)),a.add(ct(.09,.09,.12,s.pale,0,-.03,-.3)),e.add(a),{group:t,animate:(u,p)=>{const m=Math.max(0,Math.min(1,p));e.position.y=Math.abs(Math.sin(u*(4+3*m)))*.02*m+Math.sin(u*2.2)*.003;const v=u*(6+4*m);for(let _=0;_<h.length;_++)h[_].rotation.x=Math.sin(v+_%2*Math.PI+(_<2?0:.7))*.55*m;a.rotation.y=Math.sin(u*(2.2+3.2*m))*(.14+.22*m),a.rotation.x=-.1+.25*m+Math.sin(u*(2.6+2.4*m))*.05*m;const y=Math.max(0,Math.sin(u*5.7))**8*(1-m),x=Math.max(0,Math.sin(u*5.7+2.3))**8*(1-m);r.rotation.z=.28+y*.3,i.rotation.z=-.28-x*.3,n.rotation.x=Math.sin(u*1.6)*.04*(1-m)-.06*m}}}function hv(){const s=ev(),t=new oe,e=new oe;t.add(e),e.add(ct(.62,1.42,.42,s.robe,0,.71,0)),e.add(ct(.72,.18,.5,s.robe,0,.09,0)),e.add(ct(.66,.14,.46,s.sash,0,.86,0));for(const i of[-1,1])e.add(ct(.14,.8,.16,s.robe,i*.38,.8,.02)),e.add(ct(.1,.1,.1,s.skin,i*.16,.7,.18));e.add(ws(.2,.22,.16,s.pouch,.28,.82,.24)),e.add(ct(.06,.05,.05,s.coin,.28,.94,.24));const n=new oe;return n.position.set(0,1.56,0),n.add(ct(.26,.26,.24,s.skin,0,0,0)),n.add(ct(.3,.1,.28,s.scarf,0,.15,0)),n.add(ct(.3,.09,.3,s.scarf,0,.21,-.05)),n.add(ct(.3,.1,.3,s.scarf,0,-.16,-.02)),n.add(ct(.04,.04,.03,s.eye,-.07,.02,.12)),n.add(ct(.04,.04,.03,s.eye,.07,.02,.12)),e.add(n),{group:t,animate:(i,o)=>{e.rotation.z=Math.sin(i*.6)*.01,n.position.y=1.56+Math.sin(i*.9)*.012,n.rotation.y=Math.sin(i*.35)*.08}}}function uv(s){switch(s){case"snake":return nv();case"rat":return iv();case"scorpion":return rv();case"wurm":return ov();case"trader":return hv();case"vulture":return av();case"tortoise":return lv();case"fennec":return cv()}}const Za=[{want:[{itemId:"rock",count:6}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"sand",count:8}],give:[{itemId:"glass",count:2}]},{want:[{itemId:"cactus",count:3}],give:[{itemId:"canister_empty",count:1}]},{want:[{itemId:"prickly_pear",count:5}],give:[{itemId:"canister_full",count:1}]},{want:[{itemId:"snake_skin",count:2}],give:[{itemId:"coolant_cell",count:1}]},{want:[{itemId:"wurm_hide",count:1}],give:[{itemId:"cobaltrod",count:2}]},{want:[{itemId:"chitin",count:4}],give:[{itemId:"catalyst",count:1}]},{want:[{itemId:"metal",count:4}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"fennec_pelt",count:2}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"tortoise_shell",count:1}],give:[{itemId:"canister_full",count:2}]},{want:[{itemId:"deadwood",count:5}],give:[{itemId:"adobe",count:3}]},{want:[{itemId:"rat_raw",count:4}],give:[{itemId:"prickly_pear",count:3}]},{want:[{itemId:"stinger",count:1}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"alabaster",count:4}],give:[{itemId:"glass",count:2}]}];function dv(s,t,e,n){const r=[],i=new Set;for(let o=0;o<5;o++){let l=Math.floor(mt(t+o*7,e-o*13,s+n*101+317)*Za.length);for(;i.has(l);)l=(l+1)%Za.length;i.add(l),r.push(Za[l])}return r}const td=[{out:"bench",count:1,needs:{deadwood:4},station:null},{out:"armory",count:1,needs:{deadwood:4,metal:2},station:"bench"},{out:"campfire",count:1,needs:{rock:6,deadwood:2},station:null},{out:"wood_pickaxe",count:1,needs:{deadwood:3},station:null},{out:"wood_shovel",count:1,needs:{deadwood:3},station:null},{out:"wood_axe",count:1,needs:{deadwood:3},station:null},{out:"alloy_pickaxe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_shovel",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_axe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_disassembler",count:1,needs:{metal:3,copperrod:2,rock:2},station:"bench"},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},station:"bench"},{out:"backpack2",count:1,needs:{deadwood:10,metal:4,snake_skin:2},station:"armory"},{out:"wurmsuit",count:1,needs:{wurm_hide:3,chitin:1},station:"armory"},{out:"tortoise_cuirass",count:1,needs:{tortoise_shell:3,metal:1},station:"armory"},{out:"stinger_blade",count:1,needs:{metal:2,stinger:1,deadwood:1},station:"bench"},{out:"body_regulator",count:1,needs:{metal:4,copperrod:2,cobaltrod:1,catalyst:1},station:"armory"},{out:"coolant_cell",count:1,needs:{salt:2,canister_empty:1,copperrod:1},station:"bench"},{out:"head_lantern",count:1,needs:{metal:1,glass:1,copperrod:1,deadwood:1},station:"bench"},{out:"curved_hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"hull_slope",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"thruster_nozzle",count:1,needs:{cobaltrod:1,copperrod:2,metal:1},station:"bench"},{out:"sword",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"door",count:1,needs:{metal:2,deadwood:2},station:"bench"},{out:"hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},station:"bench"},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},station:"bench"},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},station:"armory"},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},station:"bench"},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},station:"bench"},{out:"chest",count:1,needs:{deadwood:6,metal:1},station:"bench"},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},station:"armory"},{out:"reptile_armor",count:1,needs:{snake_skin:3},station:"armory"},{out:"farmland",count:1,needs:{dirt:1},station:null},{out:"deadwood",count:2,needs:{wood_log:1},station:null},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},station:null},{out:"metal_plating",count:1,needs:{metal:1},station:null},{out:"door_inner",count:1,needs:{metal:1},station:"bench"},{out:"storm_breaker",count:1,needs:{metal:2,glass:1},station:"bench"},{out:"bucket",count:1,needs:{metal:2},station:"bench"},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},station:"bench"}],ed=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"metal"},{in:"rat_raw",out:"rat_cooked"},{in:"vulture_raw",out:"vulture_cooked"},{in:"wheat",out:"cooked_wheat"},{in:"iron_ore",out:"metal",n:2},{in:"copper_ore",out:"copperrod",n:2},{in:"cobalt_ore",out:"cobaltrod",n:2}];function nd(s,t){return Object.entries(t.needs).every(([e,n])=>s.has(e,n))}function fv(s,t){if(!nd(s,t))return null;for(const[e,n]of Object.entries(t.needs))s.removeItem(e,n);return s.addItem(t.out,t.count)}const vi=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it right next to a Save Beacon — that wakes the wreck's power.",goal:1},{id:"wings",kind:"thruster",title:"Wings of the Wreck",desc:"The Ship's four wingtip engines are dead. Mine Cobalt Ore in the deep Caves, smelt it at a Campfire, craft a Thruster Nozzle (Cobalt + Copper + Metal), and press E at each Broken Thruster. All four lit lifts the Ship.",goal:4}];function pv(){return{i:0,p:vi.map(()=>0)}}function mv(s){const t=pv();if(!s)return t;t.i=Math.max(0,Math.min(vi.length,s.i|0));for(let e=0;e<t.p.length;e++){const n=vi[e].goal;t.p[e]=Math.max(0,Math.min(n,(s.p&&s.p[e])|0))}return t}function br(s){return s.i<vi.length?vi[s.i]:null}function gv(s,t,e=1){const n=br(s);if(!n||n.kind!==t||s.p[s.i]>=n.goal||(s.p[s.i]=Math.min(n.goal,s.p[s.i]+e),s.p[s.i]<n.goal))return null;const r=n;return s.i++,r}const _v=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],vr=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside. Mind the drop: the first 4 blocks of a fall are free, every one after bites.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:s=>s.setClock(.56),poll:s=>s.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:s=>{s.inv.has("canister_empty")||s.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:s=>s.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:s=>s.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. Plant seeds in the tilled soil. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",goal:"plant",hold:40,enter:s=>{s.giveOrDrop("seed_wheat",2),s.selectHeld("shovel");const t=s.player.pos,e=Math.floor(t.x),n=Math.floor(t.z);for(let r=Math.floor(t.y)-1;r>20;r--){const i=s.world.get(e,r,n);if(i===Xn||i===un){s.world.set(e,r,n,$n),s.tutGuide={name:"Dirt",x:e,y:r,z:n};break}}}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class vv{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&vr[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=vr[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===Xe&&(t.set(-6,31,0,on),t.set(-6,32,0,Ze),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=vr.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=vr[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=vr.map((n,r)=>r===this.step?"●":r<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const id="sotf:index",sd="sotf:settings",rd="sotf:best",Qh={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function xv(){try{return{...Qh,...JSON.parse(localStorage.getItem(sd)||"{}")}}catch{return{...Qh}}}function yv(s){localStorage.setItem(sd,JSON.stringify(s))}function kr(){return Number(localStorage.getItem(rd)||0)}function tu(s){s>kr()&&localStorage.setItem(rd,String(s))}function ta(){try{return JSON.parse(localStorage.getItem(id)||"[]")}catch{return[]}}function xc(s){localStorage.setItem(id,JSON.stringify(s))}function od(s,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:s||t||"world",seedStr:t,updated:Date.now()},r=ta();return r.unshift(n),xc(r),n}function Mv(s){xc(ta().filter(t=>t.id!==s)),localStorage.removeItem("sotf:w:"+s)}function ad(s,t){try{localStorage.setItem("sotf:w:"+s.id,JSON.stringify(t));const e=ta(),n=e.find(r=>r.id===s.id);return n&&(n.updated=Date.now(),xc(e)),!0}catch{return!1}}function ld(s){try{const t=localStorage.getItem("sotf:w:"+s);return t?JSON.parse(t):null}catch{return null}}function cd(s,t){const e=new Blob([JSON.stringify({meta:s,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${s.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function bv(s){const t=JSON.parse(await s.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=od(t.meta?.name??"imported",t.run.seedStr);return ad(e,t.run),e}const ee=Ae;function Ms(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}const ri=(s,t,e,n)=>{const[r,i]=Qu(n);s.drawImage(Ju(),r,i,ee,ee,t,e,ee,ee)},U=(s,t,e,n,r,i)=>{s.fillStyle=i,s.fillRect(t,e,n,r)},pe=(s,t,e,n,r,i)=>{s.strokeStyle=i,s.lineWidth=1,s.strokeRect(t+.5,e+.5,n-1,r-1)},qt=(s,t,e,n,r,i,o=2)=>{s.strokeStyle=i,s.lineWidth=o,s.beginPath(),s.moveTo(t,e),s.lineTo(n,r),s.stroke()},Ht=(s,t,e)=>{s.fillStyle=e,s.beginPath(),s.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)s.lineTo(t[n][0],t[n][1]);s.closePath(),s.fill()};function hd(s,t,e,n){const[r,i]=Ms(t*ee,e*ee),o=(a,c,u)=>{Ht(i,[[3,12],[2,7],[5,3],[10,2],[14,6],[13,12],[8,14]],a),Ht(i,[[5,3],[10,2],[11,6],[6,7]],c),Ht(i,[[3,12],[13,12],[8,14]],u)},l=(a,c,u)=>{i.fillStyle=a;for(const[p,m]of u)i.fillRect(p,m,2,2);i.fillStyle=c;for(const[p,m]of u)i.fillRect(p,m,1,1)};if(s.includes("_")&&(s.endsWith("pickaxe")||s.endsWith("shovel")||s.endsWith("axe")||s.endsWith("disassembler"))){const a=s.replace(/^(wood|stone|metal|alloy)_/,""),c=s.startsWith("alloy_"),u=c?"#7a4a26":"#00000044";return U(i,7,16,2,14,"#6b5238"),U(i,6,14,4,3,"#4a4a52"),a==="pickaxe"?(qt(i,3,12,13,12,n,2),qt(i,3,12,3,15,n),qt(i,13,12,13,15,n),qt(i,4,9,12,9,"#00000022",1),c&&qt(i,4,11,12,11,"#e89a62",1)):a==="shovel"?(U(i,5,6,6,7,n),pe(i,5,6,6,7,u),qt(i,6,13,6,13,n),qt(i,9,13,9,13,n),qt(i,6,13,7,14,n,1),qt(i,9,13,8,14,n,1),c&&U(i,6,7,2,4,"#e89a62")):a==="axe"?(U(i,9,7,5,6,n),pe(i,9,7,5,6,u),U(i,8,8,1,4,n),c&&U(i,10,8,2,3,"#e89a62")):(U(i,4,7,8,2,n),U(i,4,7,2,5,n),U(i,10,7,2,5,n),U(i,7,11,2,2,"#66e5f0"),U(i,6,12,4,1,"#2f97a6"),c&&(U(i,4,8,1,3,"#e89a62"),U(i,11,8,1,3,"#8a4a26"))),c&&(U(i,6,14,4,1,"#8a5a34"),U(i,6,15,4,1,"#c98a56"),U(i,6,16,4,1,"#5c3d22"),i.fillStyle="#f0c89a",i.fillRect(6,15,1,1),i.fillRect(9,15,1,1)),r}switch(s){case"canister_full":case"canister_empty":{const a=s==="canister_full",c=e*ee;return U(i,6,0,4,3,"#8a98a8"),U(i,7,3,2,2,"#8a98a8"),U(i,4,5,8,c-7,a?"#2f7fd6":"#3a4750"),pe(i,4,5,8,c-7,"#dfe6ee"),a?(U(i,5,10,1,c-13,"#5fa3ea"),U(i,4,9,8,1,"#7f2b2b")):(U(i,4,14,8,4,"#c8d2da"),U(i,6,15,4,2,"#3a4750")),r}case"hot_water_pouch":return U(i,6,0,4,3,"#8a98a8"),U(i,7,3,2,2,"#8a98a8"),U(i,4,5,8,25,"#c26a38"),pe(i,4,5,8,25,"#ffd9a8"),U(i,5,10,1,17,"#ff9a4f"),U(i,4,12,8,3,"#ff7a30"),U(i,4,16,8,2,"#e05a20"),i.fillStyle="#c8d2da",i.fillRect(4,1,2,1),i.fillRect(7,0,2,1),i.fillRect(11,1,2,1),r;case"sword":return U(i,8,0,1,1,"#eef3f8"),U(i,7,1,3,17,"#c9d2dc"),U(i,8,1,1,17,"#eef3f8"),U(i,4,18,8,2,"#4a4a52"),U(i,7,20,3,9,"#6b5238"),U(i,7,22,3,1,"#4a3926"),U(i,7,25,3,1,"#4a3926"),U(i,6,29,5,2,"#4a4a52"),r;case"voidbreaker":return U(i,7,16,2,14,"#2a1d3a"),U(i,6,14,4,3,"#180f24"),qt(i,3,12,13,12,"#8a5ad6",2),qt(i,3,12,3,15,"#8a5ad6"),qt(i,13,12,13,15,"#8a5ad6"),i.fillStyle="#e8d6ff",i.fillRect(5,9,1,2),i.fillRect(10,10,1,1),i.fillRect(8,11,1,2),i.fillStyle="#00000088",i.fillRect(7,10,2,1),i.fillRect(6,11,1,2),r;case"visor":return U(i,1,6,14,3,"#2e3a45"),U(i,3,4,10,6,"#123c44"),U(i,4,5,8,4,"#66e5f0"),U(i,5,5,2,1,"#d2f8ff"),pe(i,3,4,10,6,"#c8d2da"),U(i,1,5,2,1,"#5a6875"),U(i,13,5,2,1,"#5a6875"),r;case"catalyst":return U(i,7,3,2,2,"#8898a8"),i.fillStyle="#c07fe0",i.beginPath(),i.arc(8,10,4,0,Math.PI*2),i.fill(),i.strokeStyle="#7a4a9a",i.lineWidth=1,i.beginPath(),i.arc(8,10,4.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,8,2,1),i.fillRect(7,7,1,1),r;case"iron_ore":return o("#5a5450","#78716c","#423d39"),l("#9e8468","#c4a878",[[5,6],[9,4],[10,9],[6,10]]),r;case"copper_ore":return o("#6a5a52","#8a7466","#4c403a"),l("#b86b42","#e8935e",[[5,6],[9,4],[10,9],[6,10]]),r;case"cobalt_ore":return o("#4e5666","#6a7488","#3a4050"),Ht(i,[[7,4],[9,6],[7,8],[5,6]],"#5c74a8"),Ht(i,[[10,8],[12,10],[10,12],[8,10]],"#5c74a8"),Ht(i,[[7,4],[9,6],[7,6]],"#9ab8e8"),Ht(i,[[10,8],[12,10],[10,10]],"#9ab8e8"),i.fillStyle="#c4dcf4",i.fillRect(7,4,1,1),i.fillRect(10,8,1,1),r;case"alabaster":return o("#cfc8b0","#eae3cd","#a89f88"),U(i,4,7,8,1,"#b4ab92"),U(i,6,10,7,1,"#b4ab92"),U(i,3,12,5,1,"#b4ab92"),i.fillStyle="#f7f2e2",i.fillRect(6,3,2,1),r;case"copperrod":U(i,6,1,3,14,"#a05a2e"),U(i,7,2,1,12,"#e89a62"),i.fillStyle="#6e3a1c";for(const[a,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(a,c,1,1);return U(i,5,1,5,1,"#6e3a1c"),U(i,5,14,5,1,"#6e3a1c"),r;case"cobaltrod":U(i,6,1,3,14,"#4a5a86"),U(i,7,2,1,12,"#8aa8dc"),i.fillStyle="#2e3a5c";for(const[a,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(a,c,1,1);return U(i,5,1,5,1,"#2e3a5c"),U(i,5,14,5,1,"#2e3a5c"),r;case"backpack2":{U(i,8,1,3,6,"#5a4229"),U(i,21,1,3,6,"#5a4229"),U(i,3,7,26,22,"#6a4c30"),pe(i,3,7,26,22,"#42301e"),U(i,3,7,26,8,"#7d5c3c"),pe(i,3,7,26,8,"#42301e"),U(i,9,7,4,22,"#6a4a3a"),U(i,19,7,4,22,"#6a4a3a"),i.fillStyle="#c8a878";for(let a=10;a<=27;a+=3)i.fillRect(9,a,1,1),i.fillRect(12,a,1,1),i.fillRect(19,a,1,1),i.fillRect(22,a,1,1);return U(i,13,17,6,4,"#8a6a4a"),pe(i,13,17,6,4,"#2e2018"),U(i,15,18,2,2,"#c8a878"),U(i,5,25,22,4,"#7a5a3a"),pe(i,5,25,22,4,"#42301e"),r}case"body_regulator":return U(i,4,2,3,28,"#4c3822"),U(i,25,2,3,28,"#4c3822"),i.strokeStyle="#3a4750",i.lineWidth=2,i.beginPath(),i.moveTo(10,12),i.quadraticCurveTo(4,10,5,3),i.stroke(),i.beginPath(),i.moveTo(22,12),i.quadraticCurveTo(28,10,27,3),i.stroke(),U(i,8,8,16,17,"#8a98a8"),pe(i,8,8,16,17,"#3c4650"),U(i,8,8,16,3,"#aab4c0"),U(i,8,22,16,3,"#6a7680"),U(i,10,13,12,2,"#2e6a78"),U(i,10,16,12,2,"#2e6a78"),U(i,10,19,12,2,"#2e6a78"),i.fillStyle="#5fb8cc",i.fillRect(11,13,2,2),i.fillRect(15,16,2,2),i.fillRect(19,19,2,2),i.fillStyle="#d2f8ff",i.fillRect(9,12,1,1),i.fillRect(22,15,1,1),i.fillRect(9,21,1,1),i.fillRect(21,12,1,1),r;case"coolant_cell":return i.fillStyle="#7fd4e8",i.globalAlpha=.22,i.beginPath(),i.arc(8,9,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,U(i,6,1,4,2,"#8a98a8"),U(i,7,3,2,1,"#8a98a8"),U(i,5,4,6,10,"#3a8ea8"),pe(i,5,4,6,10,"#bfeef8"),U(i,6,5,1,8,"#7fd4e8"),U(i,5,7,6,1,"#5fc0d8"),U(i,5,11,6,1,"#2e6e84"),i.fillStyle="#e8fbff",i.fillRect(9,6,1,1),i.fillRect(7,9,1,1),i.fillRect(10,12,1,1),i.fillRect(6,13,1,1),r;case"head_lantern":return i.fillStyle="#ffd76a",i.globalAlpha=.25,i.beginPath(),i.arc(8,9,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,U(i,1,7,14,3,"#4a4a52"),U(i,1,7,14,1,"#5f6670"),U(i,1,9,14,1,"#33373d"),U(i,7,4,2,2,"#5a6875"),U(i,5,6,6,8,"#2e3a45"),pe(i,5,6,6,8,"#8a98a8"),U(i,6,7,4,5,"#ffd76a"),U(i,7,8,2,2,"#fff3c0"),U(i,6,11,4,1,"#e8a83c"),U(i,5,13,6,1,"#232830"),r;case"chitin":return Ht(i,[[8,3],[13,6],[14,11],[11,14],[5,14],[2,11],[3,6]],"#6a4a3a"),Ht(i,[[8,3],[13,6],[8,7],[3,6]],"#8f6a50"),qt(i,8,7,5,13,"#4c352a",1),qt(i,8,7,8,14,"#4c352a",1),qt(i,8,7,11,13,"#4c352a",1),U(i,4,13,8,1,"#3c2a20"),i.fillStyle="#b08860",i.fillRect(7,4,2,1),r;case"stinger":return i.strokeStyle="#8a7a5c",i.lineWidth=5,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#d8cbb0",i.lineWidth=3,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#b0a284",i.lineWidth=1,i.beginPath(),i.moveTo(5,13),i.quadraticCurveTo(5.5,7,8,4),i.stroke(),Ht(i,[[9,0],[14,1],[11,6]],"#a84a3a"),Ht(i,[[9,0],[11,.5],[10,3]],"#e0705a"),qt(i,14,1,11,6,"#6e2f24",1),r;case"wurm_hide":{U(i,2,2,12,15,"#7a5c40"),pe(i,2,2,12,15,"#4c3822");for(let a=3;a<14;a+=3)U(i,3,a,10,2,"#8f6e4c"),U(i,3,a+2,10,1,"#5a4228");return U(i,2,17,12,2,"#6a4c30"),i.fillStyle="#8a6a48",i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.fill(),i.strokeStyle="#4c3822",i.lineWidth=1,i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.stroke(),i.strokeStyle="#5a4228",i.beginPath(),i.arc(8,24,3,0,Math.PI*2),i.stroke(),i.fillStyle="#6a4c30",i.fillRect(7,23,2,2),r}case"wurmsuit":{U(i,9,8,14,18,"#7a5c40"),pe(i,9,8,14,18,"#42301e");for(let a=10;a<=18;a+=4)U(i,10,a,12,3,"#8a6a48"),U(i,10,a+3,12,1,"#4c3822");U(i,11,5,10,3,"#5f4830"),pe(i,11,5,10,3,"#42301e"),Ht(i,[[3,9],[10,6],[12,13],[5,15]],"#6a4a3a"),Ht(i,[[29,9],[22,6],[20,13],[27,15]],"#6a4a3a"),Ht(i,[[4,9],[10,6],[11,9],[5,11]],"#8f6a50"),Ht(i,[[28,9],[22,6],[21,9],[27,11]],"#8f6a50"),qt(i,6,8,7,14,"#4c352a",1),qt(i,26,8,25,14,"#4c352a",1),i.fillStyle="#c8a878";for(let a=9;a<=14;a+=3)i.fillRect(4,a,1,1),i.fillRect(9,a,1,1),i.fillRect(22,a,1,1),i.fillRect(27,a,1,1);return U(i,9,24,14,3,"#4c3822"),U(i,13,24,6,3,"#6a4a3a"),pe(i,13,24,6,3,"#2e2018"),i.fillStyle="#c8a878",i.fillRect(15,25,2,1),r}case"vulture_raw":return Ht(i,[[3,9],[4,5],[8,3],[12,4],[13,8],[11,12],[6,12]],"#8a332c"),Ht(i,[[4,5],[8,3],[12,4],[10,7],[5,7]],"#a8453a"),Ht(i,[[6,12],[11,12],[9,13],[6,13]],"#571f1b"),U(i,12,6,3,3,"#d8cbb0"),U(i,14,5,1,1,"#d8cbb0"),U(i,14,9,1,1,"#d8cbb0"),U(i,13,6,1,3,"#8a7a5c"),U(i,12,6,2,1,"#f0e6d0"),i.fillStyle="#c8705e",i.fillRect(5,7,3,1),i.fillRect(9,6,2,1),i.fillRect(6,10,4,1),i.fillStyle="#e8a08a",i.fillRect(6,7,1,1),i.fillRect(8,10,1,1),r;case"vulture_cooked":return i.fillStyle="#c8d2da",i.fillRect(5,2,1,2),i.fillRect(8,1,1,2),i.fillRect(11,2,1,2),i.fillStyle="#eef3f8",i.fillRect(5,1,1,1),i.fillRect(8,0,1,1),i.fillRect(11,1,1,1),Ht(i,[[3,10],[4,6],[8,4],[12,5],[13,9],[11,13],[6,13]],"#9a6132"),Ht(i,[[4,6],[8,4],[12,5],[10,8],[5,8]],"#c08348"),Ht(i,[[6,13],[11,13],[9,14],[6,14]],"#5c3a1c"),qt(i,6,6,8,12,"#4a2c14",1),qt(i,9,5,11,11,"#4a2c14",1),i.fillStyle="#d8a05e",i.fillRect(6,5,3,1),i.fillRect(10,6,2,1),i.fillStyle="#f0c89a",i.fillRect(7,5,1,1),r;case"tortoise_shell":{Ht(i,[[3,22],[5,12],[11,6],[17,4],[24,7],[29,14],[30,22]],"#5f5a4e"),Ht(i,[[11,6],[17,4],[24,7],[20,13],[12,12]],"#7d7768"),Ht(i,[[3,22],[30,22],[29,25],[4,25]],"#46423a"),i.strokeStyle="#46423a",i.lineWidth=1,i.beginPath(),i.moveTo(17,5),i.lineTo(9,22),i.moveTo(17,5),i.lineTo(17,23),i.moveTo(17,5),i.lineTo(25,22),i.stroke(),i.beginPath(),i.moveTo(6,15),i.lineTo(28,15),i.stroke(),i.fillStyle="#6e6858",i.fillRect(14,8,5,1),i.fillRect(8,17,6,1),i.fillRect(20,18,5,1),i.fillStyle="#8a8474",i.fillRect(15,6,2,1),i.fillStyle="#cfc7b2";for(const[a,c,u,p]of[[3,24,4,5],[9,25,4,6],[15,25,4,5],[21,24,4,6],[26,22,4,5]])Ht(i,[[a,c],[a+u,c],[a+u/2,c+p]],"#cfc7b2");Ht(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),Ht(i,[[26,15],[29,15],[31,18]],"#cfc7b2"),i.fillStyle="#8f8874";for(const[a,c,u]of[[3,24,4],[9,25,4],[15,25,4],[21,24,4]])i.fillRect(a,c,u,1);return r}case"fennec_pelt":{Ht(i,[[6,11],[2,1],[9,7]],"#c99a62"),Ht(i,[[6,10],[3,3],[8,7]],"#8f6a44"),Ht(i,[[10,11],[14,1],[7,7]],"#c99a62"),Ht(i,[[10,10],[13,3],[8,7]],"#8f6a44"),i.fillStyle="#ead4b0",i.fillRect(2,3,1,3),i.fillRect(13,3,1,3),i.fillStyle="#d8b488",i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8a6540",i.lineWidth=1,i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.stroke(),i.fillStyle="#ead4b0",i.beginPath(),i.ellipse(8,14,2.5,2,0,0,Math.PI*2),i.fill(),i.fillStyle="#3a2a1c",i.fillRect(6,11,1,1),i.fillRect(9,11,1,1),i.fillStyle="#6a4a30",i.fillRect(7,14,2,1),U(i,4,15,8,12,"#d8b488"),pe(i,4,15,8,12,"#8a6540"),U(i,5,16,6,9,"#e8d0a8"),U(i,2,16,2,3,"#c99a62"),U(i,12,16,2,3,"#c99a62"),U(i,2,21,2,3,"#c99a62"),U(i,12,21,2,3,"#c99a62"),i.fillStyle="#8f6a44";for(let a=17;a<=25;a+=2)i.fillRect(4,a,1,1),i.fillRect(11,a,1,1);return U(i,6,27,4,3,"#c99a62"),U(i,6,30,4,2,"#ead4b0"),pe(i,6,27,4,5,"#8a6540"),r}case"tortoise_cuirass":{U(i,6,6,20,23,"#3b372f"),pe(i,6,6,20,23,"#2a2722");const a=(c,u,p)=>{U(i,c,u,p,6,"#5f5a4e"),U(i,c,u,p,2,"#7d7768"),U(i,c,u+5,p,1,"#3b372f"),i.fillStyle="#48443a",i.fillRect(c+Math.round(p/3),u+1,1,4),i.fillRect(c+Math.round(2*p/3),u+1,1,4)};a(8,8,16),a(6,14,20),a(7,20,18),U(i,10,4,12,4,"#8a98a8"),U(i,10,4,12,1,"#aab4c0"),pe(i,10,4,12,4,"#3c4650"),U(i,5,13,1,14,"#8a98a8"),U(i,26,13,1,14,"#8a98a8"),U(i,6,26,20,4,"#8a98a8"),U(i,6,26,20,1,"#aab4c0"),U(i,6,29,20,1,"#5c6670"),pe(i,6,26,20,4,"#3c4650"),U(i,14,26,4,4,"#c98a56"),U(i,14,26,4,1,"#f0c89a"),pe(i,14,26,4,4,"#5c3d22"),i.fillStyle="#cfc7b2",Ht(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),Ht(i,[[26,16],[29,16],[31,19]],"#cfc7b2"),Ht(i,[[9,29],[12,29],[10,31]],"#cfc7b2"),Ht(i,[[19,29],[22,29],[21,31]],"#cfc7b2");for(const[c,u]of[[7,15],[23,15],[7,21],[23,21],[9,27],[21,27],[11,5],[18,5]])U(i,c,u,2,2,"#5c3d22"),U(i,c,u,2,1,"#c98a56"),i.fillStyle="#f0c89a",i.fillRect(c,u,1,1);return r}case"stinger_blade":return Ht(i,[[8,0],[10,3],[6,3]],"#a84a3a"),Ht(i,[[8,0],[9,2],[7,2]],"#e0705a"),Ht(i,[[6,3],[10,3],[11,6],[5,6]],"#d8cbb0"),qt(i,5,6,11,6,"#8a7a5c",1),U(i,6,6,4,15,"#c9d2dc"),U(i,7,7,1,14,"#eef3f8"),U(i,9,7,1,14,"#8a949e"),U(i,3,21,10,2,"#4a4a52"),U(i,3,21,10,1,"#6a7280"),U(i,6,23,4,6,"#6b5238"),U(i,6,24,4,1,"#4a3926"),U(i,6,27,4,1,"#4a3926"),U(i,5,29,6,2,"#6a4a3a"),pe(i,5,29,6,2,"#3c2a20"),r;case"curved_hull":{const a="#7d8390",c="#4e545e",u="#aab2bc";return U(i,6,2,8,2,a),U(i,3,4,12,2,a),U(i,2,6,13,8,a),i.clearRect(13,13,2,1),i.clearRect(14,12,1,1),U(i,6,2,8,1,u),U(i,3,4,1,2,u),U(i,2,6,1,8,u),U(i,2,13,11,1,c),U(i,14,6,1,6,c),U(i,12,13,1,1,c),U(i,3,9,12,1,"#6b7280"),i.fillStyle=c,i.fillRect(11,3,1,1),i.fillRect(12,7,1,1),i.fillRect(5,11,1,1),i.fillStyle=u,i.fillRect(11,4,1,1),i.fillRect(12,8,1,1),i.fillRect(5,12,1,1),r}case"hull_slope":return Ht(i,[[2,14],[2,4],[11,2],[14,8],[14,14]],"#767d88"),Ht(i,[[2,4],[11,2],[12,6],[2,8]],"#949ca8"),qt(i,11,2,14,8,"#aab2bc",1),U(i,2,13,12,1,"#4e545e"),U(i,2,10,12,1,"#6b7280"),i.fillStyle="#5c636d",i.fillRect(4,6,1,1),i.fillRect(9,11,1,1),i.fillRect(12,9,1,1),r;case"thruster_nozzle":return U(i,8,2,16,5,"#8a98a8"),pe(i,8,2,16,5,"#3c4650"),U(i,8,2,16,1,"#aab4c0"),i.fillStyle="#c8d2da",i.fillRect(9,4,1,1),i.fillRect(22,4,1,1),qt(i,12,3,14,5,"#5c6670",1),qt(i,18,5,20,3,"#5c6670",1),Ht(i,[[10,7],[22,7],[27,21],[5,21]],"#c88a50"),Ht(i,[[10,7],[15,7],[13,21],[5,21]],"#e0a86a"),Ht(i,[[20,7],[22,7],[27,21],[23,21]],"#96603a"),qt(i,9,12,23,12,"#7a4a26",1),qt(i,7,17,25,17,"#7a4a26",1),U(i,5,21,22,4,"#8a98a8"),pe(i,5,21,22,4,"#3c4650"),U(i,5,21,22,1,"#aab4c0"),i.fillStyle="#5c6670",i.fillRect(8,22,1,2),i.fillRect(16,22,1,2),i.fillRect(23,22,1,2),i.fillStyle="#c8d2da",i.fillRect(9,23,1,1),i.fillRect(17,23,1,1),i.fillRect(24,23,1,1),U(i,7,25,18,3,"#4a5560"),U(i,9,26,14,1,"#c85a2e"),U(i,11,27,10,1,"#8a3a1e"),r;case"backpack1":return U(i,8,1,3,6,"#5a4229"),U(i,21,1,3,6,"#5a4229"),U(i,5,7,22,21,"#7a5a3a"),pe(i,5,7,22,21,"#4c3822"),U(i,5,7,22,8,"#8a6a48"),pe(i,5,7,22,8,"#4c3822"),U(i,13,13,6,3,"#d8b74f"),U(i,9,20,14,6,"#6b4d30"),pe(i,9,20,14,6,"#4c3822"),r;case"beacon":return i.fillStyle="#66e5f0",i.globalAlpha=.35,i.beginPath(),i.arc(8,5,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.fillStyle="#66e5f0",i.beginPath(),i.arc(8,5,3,0,Math.PI*2),i.fill(),U(i,6,5,1,1,"#d2f8ff"),U(i,7,8,2,8,"#8a98a8"),ri(i,0,ee,Pn),r;case"campfire":return qt(i,3,10,12,4,"#61492f",2),qt(i,4,4,13,10,"#61492f",2),qt(i,3,10,12,4,"#7d5f3d",1),ri(i,0,ee,Ke),r;case"door":return ri(i,0,0,Ze),ri(i,0,ee,on),r;case"bed":return ri(i,0,0,ln),ri(i,ee,0,xn),r;case"dune_melon":i.fillStyle="#5f7f2c",i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#3c541c",i.lineWidth=2,i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.stroke(),i.strokeStyle="#88a84c",i.lineWidth=1;for(const a of[-7,0,7])i.beginPath(),i.moveTo(16+a,3),i.lineTo(16+a,19),i.stroke();return U(i,15,1,2,3,"#6b5238"),r;case"wheat":{i.strokeStyle="#c8a844",i.lineWidth=2;for(const a of[4,8,12])i.beginPath(),i.moveTo(a,15),i.lineTo(a,3),i.stroke();i.fillStyle="#e0c860";for(const a of[4,8,12])for(let c=2;c<9;c+=2)i.fillRect(a-2,c,4,2);return i.strokeStyle="#7a5a30",i.lineWidth=1,i.beginPath(),i.moveTo(2,12),i.lineTo(14,12),i.stroke(),r}case"cooked_wheat":return i.fillStyle="#a8712e",i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.fill(),i.strokeStyle="#74501f",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.stroke(),i.fillStyle="#d8a860",i.fillRect(5,8,6,1),i.fillRect(6,7,4,1),r;case"bucket":case"bucket_full":{const a=s==="bucket_full";return U(i,4,6,8,9,a?"#2f7fd6":n),pe(i,4,6,8,9,"#dfe6ee"),U(i,3,5,10,2,"#c8d2da"),U(i,5,2,1,3,"#8a98a8"),U(i,10,2,1,3,"#8a98a8"),qt(i,5,3,11,3,"#8a98a8",1),a&&U(i,5,7,6,1,"#5fa3ea"),r}case"kindling":return qt(i,3,21,12,4,"#6b5238",2),qt(i,6,22,14,8,"#5a4630",2),U(i,11,3,3,3,"#9a8a5a"),U(i,4,8,3,3,"#9a8a5a"),U(i,13,9,3,2,"#8a9a4a"),r;case"seed_tree":return U(i,7,14,6,6,"#8a6a3a"),U(i,7,13,6,2,"#5a4630"),U(i,9,9,2,4,"#5a8a3a"),U(i,6,7,3,2,"#7fae54"),U(i,11,8,3,2,"#7fae54"),r;case"rock":return o("#6a655f","#877f77","#4a4642"),qt(i,5,9,11,10,"#55504b",1),i.fillStyle="#98907f",i.fillRect(7,4,2,1),r;case"gravel":{const a=(c,u,p,m)=>{i.fillStyle=m,i.beginPath(),i.arc(c,u,p,0,Math.PI*2),i.fill()};return a(5,11,3.2,"#7d766f"),a(11,12,3.6,"#6a645e"),a(8,7,3.6,"#8d8680"),i.fillStyle="#a49c94",i.fillRect(6,5,2,1),i.fillRect(3,9,2,1),i.fillStyle="#544e48",i.fillRect(10,14,3,1),i.fillRect(3,13,3,1),r}case"salt":return Ht(i,[[3,12],[3,7],[6,3],[11,2],[13,6],[13,12]],"#d9dbd6"),Ht(i,[[6,3],[11,2],[12,5],[7,6]],"#f2f4ef"),Ht(i,[[3,12],[13,12],[8,14]],"#b4b8b2"),qt(i,6,7,11,8,"#c2c5bf",1),i.fillStyle="#ffffff",i.fillRect(5,6,1,1),i.fillRect(9,8,1,1),i.fillRect(11,5,1,1),r;case"deadwood":return qt(i,2,10,13,8,"#61492f",4),qt(i,2,9,13,7,"#7d5f3d",1),qt(i,4,11,11,9,"#4a3926",1),qt(i,7,9,9,3,"#61492f",2),i.fillStyle="#8a6a44",i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.fill(),i.strokeStyle="#5c4630",i.lineWidth=1,i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.stroke(),r;case"metal":return qt(i,3,13,12,3,"#9aa0aa",3),qt(i,3,12,12,2,"#c8d2da",1),qt(i,4,14,12,5,"#6a707a",1),i.fillStyle="#6a707a",i.fillRect(9,7,1,2),i.fillStyle="#e2e8f0",i.fillRect(6,9,1,1),r;case"lamp":return i.fillStyle="#fff0a0",i.globalAlpha=.28,i.beginPath(),i.arc(8,8,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,U(i,5,2,6,2,"#4a4a52"),U(i,5,2,6,1,"#6a7280"),U(i,4,4,1,9,"#3a3f46"),U(i,11,4,1,9,"#3a3f46"),U(i,5,4,6,9,"#fff0a0"),U(i,6,5,2,7,"#fff8d0"),U(i,6,10,4,2,"#e8a83c"),U(i,4,13,8,2,"#4a4a52"),r;case"regulator":{U(i,5,1,6,2,"#6a7680"),U(i,3,3,10,11,"#8a98a8"),pe(i,3,3,10,11,"#3c4650"),U(i,3,3,10,2,"#aab4c0");for(let a=4;a<=11;a+=2)U(i,a,6,1,6,"#5f6c78");return U(i,7,7,3,4,"#59bfcc"),U(i,8,8,1,1,"#d2f8ff"),U(i,3,12,10,2,"#3c4650"),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),r}case"engine_core":return i.fillStyle="#c468e8",i.globalAlpha=.25,i.beginPath(),i.arc(8,8,7.5,0,Math.PI*2),i.fill(),i.globalAlpha=1,U(i,4,3,8,11,"#6a6e78"),pe(i,4,3,8,11,"#3a3e46"),U(i,4,3,8,1,"#8d929c"),U(i,4,13,8,1,"#4a4e56"),i.fillStyle="#c468e8",i.beginPath(),i.arc(8,8,3.2,0,Math.PI*2),i.fill(),i.strokeStyle="#7a3a9a",i.lineWidth=1,i.beginPath(),i.arc(8,8,3.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,6,2,1),i.fillRect(7,5,1,1),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),i.fillRect(4,12,1,1),i.fillRect(11,12,1,1),r;case"seed_melon":return i.fillStyle="#c8b060",i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8f7a40",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.stroke(),i.fillStyle="#e0cc8c",i.beginPath(),i.ellipse(7,9,1.8,2.6,0,0,Math.PI*2),i.fill(),U(i,7,2,2,3,"#5a8a3a"),U(i,5,1,2,2,"#7fae54"),U(i,9,0,2,2,"#7fae54"),r;case"seed_wheat":return i.fillStyle="#d8c878",i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.fill(),i.strokeStyle="#9a8a48",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.stroke(),qt(i,8,6,8,14,"#b09a58",1),i.fillStyle="#f0e2a8",i.fillRect(6,8,1,4),qt(i,8,5,7,2,"#9a8a48",1),qt(i,8,5,9,2,"#9a8a48",1),r;case"bench":return ri(i,0,0,Le),ri(i,0,ee,qe),r}return null}const To=new Map;function Uo(s){const t=To.get(s);if(t)return t;const e=kt[s];if(!e)return To.set(s,[]),To.get(s);let r=hd(s,e.w,e.h,e.color);if(!r&&e.block!==void 0){const[o,l]=Ms(e.w*ee,e.h*ee);for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)ri(l,a*ee,h*ee,e.block);r=o}const i=[];if(r){const[o,l]=Ms(ee,ee);for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)l.clearRect(0,0,ee,ee),l.drawImage(r,a*ee,h*ee,ee,ee,0,0,ee,ee),i.push(o.toDataURL())}else{const[o,l]=Ms(ee,ee);U(l,2,2,ee-4,ee-4,e.color),i.push(o.toDataURL())}return To.set(s,i),i}function Oi(s,t=0){const e=kt[s];if(!e)return"";if(e.w===1&&e.h===1)return Uo(s)[0]??"";const[n,r]=Ms(e.w*ee,e.h*ee);r.imageSmoothingEnabled=!1;const i=hd(s,e.w,e.h,e.color);if(i)r.drawImage(i,0,0);else if(e.block!==void 0)for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)ri(r,a*ee,h*ee,e.block);if(!t)return n.toDataURL();const[o,l]=Ms(e.h*ee,e.w*ee);return l.imageSmoothingEnabled=!1,l.translate(e.h*ee,0),l.rotate(Math.PI/2),l.drawImage(n,0,0),o.toDataURL()}function Sv(s){const[t,e]=Ms(ee,ee);return ri(e,0,0,s),t.toDataURL()}const Fe=s=>document.getElementById(s);let eu=0;function nt(s){const t=Fe("toast");t.textContent=s,t.style.opacity="1",clearTimeout(eu),eu=setTimeout(()=>t.style.opacity="0",2600)}function wv(s){const t=Fe("prompt");if(!s){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=s}function Ev(s){Fe("vision-water").style.opacity=s?"1":"0"}function Tv(s){const t=Fe("blockname");if(!s){t.classList.add("hidden");return}t.textContent=s,t.classList.remove("hidden")}function nu(){const s=Fe("vision-hit");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash")}let iu="";function Av(s){const t=s.selectedSlot()?.itemId??"",e=s.slots.map(i=>i.itemId).join(",")+"|"+t;if(e===iu)return;iu=e;const n=[];for(const i of s.slots){const o=n.find(l=>l.itemId===i.itemId);o?o.count+=1:n.push({itemId:i.itemId,count:1})}const r=Fe("hotbar");r.innerHTML="",n.slice(0,9).forEach((i,o)=>{const l=document.createElement("div");l.className="hb-slot"+(i.itemId===t?" sel":""),l.dataset.hb=String(o);const h=document.createElement("img");h.src=Oi(i.itemId),h.alt=kt[i.itemId].name,l.appendChild(h);const a=document.createElement("span");if(a.className="hb-key",a.textContent=String(o+1),l.appendChild(a),i.count>1){const c=document.createElement("span");c.className="hb-count",c.textContent=String(i.count),l.appendChild(c)}r.appendChild(l)})}function Rv(){const s=document.querySelector("#bar-water .safe");s.style.left="25%",s.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((vc-_s)/(yr-_s)*100).toFixed(1)+"%",t.style.right=((yr-Qo)/(yr-_s)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(r,i,o)=>{const l=document.createElement("span");l.className="dmg",l.style.left=i.toFixed(1)+"%",l.title=o,document.getElementById(r).appendChild(l)};e("bar-water",Yl,"below this, dehydration drains Health");const n=r=>(r-_s)/(yr-_s)*100;e("bar-heat",n($l),"below this, hypothermia drains Health"),e("bar-heat",n(Xl),"above this, heat stroke drains Health")}function su(s,t=0,e=0,n=0,r=0,i=0){const o=document.getElementById("waypoint");if(!s){o.classList.add("hidden");return}const l=t-n,h=e-r,a=Math.atan2(l,-h)+i;Fe("wp-arrow").style.transform=`rotate(${a*180/Math.PI}deg)`,Fe("wp-name").textContent=s,Fe("wp-dist").textContent=`${Math.round(Math.hypot(l,h))} m`,o.classList.remove("hidden")}function ru(s,t,e,n,r,i,o){const l=R=>document.querySelector(`#${R} .fill`);l("bar-health").style.width=s.health+"%",l("bar-water").style.width=s.water+"%";const h=(s.body-_s)/(yr-_s)*100;l("bar-heat").style.width=h+"%";const a=e%Ve/Ve,c=String(Math.floor(a*24)).padStart(2,"0"),u=String(Math.floor(a*24%1*60)).padStart(2,"0");Fe("clock-day").textContent="Day "+n,Fe("clock-time").textContent=c+":"+u;const p=R=>r==="C"?Math.round(R)+"°C":Math.round(R*9/5+32)+"°F";Fe("clock-temp").textContent=`air ${p(s.lastAmbientEff)}  body ${p(s.body)}`;const m=t.selectedSlot();Fe("held").textContent=m?kt[m.itemId].name:"—",Av(t),Fe("warn-hot").classList.toggle("hidden",s.body<=Qo),Fe("warn-cold").classList.toggle("hidden",s.body>=vc),Fe("chip-reg").classList.toggle("hidden",!o?.regulated),Fe("chip-storm").classList.toggle("hidden",!o?.stormBroken),Fe("chip-nap").classList.toggle("hidden",!o?.napReady);const v=t.weight(),y=t.weightLimit(),x=Fe("weight");x.textContent=`${v.toFixed(1)} / ${y} kg`,x.classList.toggle("encumbered",v>y),Fe("vision-vignette").style.opacity=String(s.vision*.85);const _=s.water<5||s.health<30;Fe("vision-red").style.opacity=_?String(.35+.25*Math.sin(i/220)):"0"}const Ao=s=>s===on||s===Ze||s===je||s===Be,ou=4,Cv=8.5;class ve{constructor(t,e,n,r,i){this.meta=t,this.settings=r,this.audio=i,this.seed=K1(t.seedStr||t.id),this.world=new m_(this.seed),this.survival=new M_(this.seed^7),this.quests=mv(e?.quest),this.renderer=new U_(n),this.renderer.fires=this.campCharges,this.player=new v_(this.world),this.timeSec=e?.time??Ve*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===Un&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===Un&&this.renderer.addPointLight(6,35,0,"lamp");for(let o=-10;o<=8;o++)for(let l=-14;l<=14;l++)for(let h=28;h<=36;h++)this.world.get(o,h,l)===Fi&&this.breakers.add(`${o},${h},${l}`);for(const[o,l]of this.world.deltas){const[h,a]=o.split(",").map(Number);for(const[c,u]of l){if(u!==Fi)continue;const p=c%Qt,m=(c-p)/Qt,v=m%W;this.breakers.add(`${h*W+v},${p},${a*W+(m-v)/W}`)}}Rv(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(r)}seed;world;survival;player;inv=new Ga;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];traderAt=new Map;tradeOffers=[];tradeCamp=null;stormToast=!1;mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null,regulator:null,light:null};lanternOn=!1;lanternAcc=0;regulatorAcc=0;collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;breakers=new Set;breakerTick=-1;stormShieldOn=!1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;waterAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(ie(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===bt&&(this.world.set(t,e,n,Ue),this.chests.set(ve.chestKey([[t,e,n]]),[{itemId:"canister_full",x:0,y:0},{itemId:"canister_full",x:1,y:0},{itemId:"canister_full",x:2,y:0}]))}chestCluster(t,e,n){const r=new Set([`${t},${e},${n}`]),i=[[t,e,n]],o=[];for(;i.length;){const l=i.pop();this.world.get(l[0],l[1],l[2])===Ue&&o.push(l);for(const[h,a,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=l[0]+h,p=l[1]+a,m=l[2]+c,v=`${u},${p},${m}`,y=this.world.get(u,p,m);r.has(v)||y!==Ue&&y!==Wr||(r.add(v),i.push([u,p,m]))}}return o}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=kt[e.itemId],r=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const i of r){const o=i?n.h:n.w,l=i?n.w:n.h;for(let h=0;h+l<=t.h;h++)for(let a=0;a+o<=t.w;a++)if(t.fits(a,h,o,l))return e.x=a,e.y=h,e.rot=i||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new Ga;e.slots=[];const[n,r]=ve.chestDims(t);return e.w=n,e.h=r,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,r=Math.floor(t/We),i=Math.floor(e/We);for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){if(!n.townAt(r+o,i+l))continue;const h=n.townCenter(r+o,i+l);if(Math.abs(h.x-t)<=10&&Math.abs(h.z-e)<=10)return!0}return!1}townLoot(t,e){const n=i=>mt(t,e,this.seed+i),r=[{itemId:"canister_empty",count:2}];return n(11)<.7&&r.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&r.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&r.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&r.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&r.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&r.push({itemId:"door_inner",count:1}),n(22)<.25&&r.push({itemId:"bed",count:1}),n(23)<.5&&r.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),r}openChest(t,e,n){const r=this.chestCluster(t,e,n),i=ve.chestKey(r),o=this.chests.has(i);this.chests.has(i)||this.chests.set(i,[]);const l=this.emptyChestGrid(r.length);if(l.slots=this.chests.get(i),!o&&r.some(([h,,a])=>this.inTown(h,a))){for(const h of this.townLoot(r[0][0],r[0][2]))for(let a=0;a<h.count;a++){const c={itemId:h.itemId,x:0,y:0};ve.placeSlotFree(l,c)||this.dropEntity(h.itemId,1,2)}nt("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=l,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,r){const i=this.chestCluster(t,e,n),o=this.emptyChestGrid(i.length);for(const l of r)ve.placeSlotFree(o,l)||this.dropEntity(l.itemId,1,2);o.slots.length&&this.chests.set(ve.chestKey(i),o.slots),i.length>1&&nt(`Chests linked — one ${o.w}×${o.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==Ue){if(gn(this.world.get(t.x,t.y,t.z))){for(const i of t.items)for(let o=0;o<i.count;o++)this.dropEntity(i.itemId,1,2);return}this.world.set(t.x,t.y,t.z,Ue)}const e=this.chestCluster(t.x,t.y,t.z),n=ve.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const r=this.emptyChestGrid(e.length);r.slots=this.chests.get(n);for(const i of t.items)for(let o=0;o<i.count;o++){const l={itemId:i.itemId,x:0,y:0};ve.placeSlotFree(r,l)||this.dropEntity(i.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body;const e=[];this.inv.slots=t.inventory.slots.map(l=>{const h=l.count??1;for(let a=1;a<h;a++)e.push({itemId:l.itemId});return{itemId:l.itemId,x:l.x,y:l.y,rot:l.rot}});for(const l of e)this.giveOrDrop(l.itemId,1);this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const l of["backpack","head","body","regulator","light"]){const h=t.equip?.[l];h&&(this.equip[l]={itemId:h,x:0,y:0,charges:t.equip?.charges?.[l]})}this.beaconMarks=t.beaconMarks??[],this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let r=0;const i=[];this.world.gen.canisters.forEach(l=>{if(l.buried&&!n.has(r)){const h=Math.round(ie(this.seed,l.x,l.z));i.push({id:this.entitySeq++,x:l.x+.5,y:h,z:l.z+.5,itemId:"canister_full",buried:l.buried,buriedAt:l.buried?[l.x,h,l.z]:void 0,srcIndex:r})}r++});for(const l of t.entities){const h=l.count??1;for(let a=0;a<h;a++)i.push({id:this.entitySeq++,x:l.x,y:l.y,z:l.z,itemId:l.itemId,age:l.age})}this.entities=i,this.chests=new Map((t.chests??[]).map(l=>{const h=this.emptyChestGrid(l.cells.split("|").length);for(const a of l.slots){h.slots.push({itemId:a.itemId,x:a.x,y:a.y,rot:a.rot});for(let c=1;c<(a.count??1);c++){const u={itemId:a.itemId,x:0,y:0};ve.placeSlotFree(h,u)||this.giveOrDrop(a.itemId,1)}}return[l.cells,h.slots]}));const o=[];for(const l of t.caches){const h=l.kind??"death";if(h==="chest"){o.push(l);continue}const a={id:this.entitySeq++,x:l.x,y:l.y,z:l.z,kind:h,items:l.items.map(c=>({...c}))};this.caches.push(a)}this.campCharges.clear();for(const[l,h]of Object.entries(t.campfires??{}))this.campCharges.set(l,h);this.renderer.fires=this.campCharges,this.world.loadRots(t.rots??{}),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep);for(const l of o)this.adoptLegacyChest(l);this.pods=(t.pods??[]).map(l=>({...l,ringEid:this.renderer.addGroundRing(l.x+.5,Math.round(ie(this.seed,l.x,l.z)),l.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(l.x+.5,Math.round(ie(this.seed,l.x,l.z)),l.z+.5,13382434)})),this.won=!!t.won;for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[u,p]of h){if(p!==Un&&p!==Ke)continue;const m=Math.floor(u/(W*Qt)),v=u%(W*Qt),y=a*W+m,x=v%Qt,_=c*W+Math.floor(v/Qt);p===Ke&&(this.campCharges.get(`${y},${x},${_}`)??0)<=0||this.renderer.addPointLight(y,x,_,p===Un?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId,regulator:this.equip.regulator?.itemId,light:this.equip.light?.itemId,charges:{regulator:this.equip.regulator?.charges,light:this.equip.light?.charges}},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,age:Math.floor(t.age??0)})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas(),rots:this.world.serializeRots()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/Ve);this.timeSec=(e+t)*Ve}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new vv(this),this.startCine(_v,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),nt("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,r=n.find(h=>e.t<h.t1)??n[n.length-1];if(r.openDoor&&e.t>=r.openDoor.t){const{x:h,y:a,z:c}=r.openDoor;if(this.world.get(h,a,c)!==Xe){this.world.set(h,a,c,Xe);for(const u of[-1,1])Ao(this.world.get(h,a+u,c))&&this.world.set(h,a+u,c,Xe);this.audio.door()}}const i=Math.min(1,Math.max(0,(e.t-r.t0)/(r.t1-r.t0))),o=i*i*(3-2*i),l=this.renderer.camera;if(l.position.set(r.from[0]+(r.to[0]-r.from[0])*o,r.from[1]+(r.to[1]-r.from[1])*o,r.from[2]+(r.to[2]-r.from[2])*o),l.lookAt(r.look[0],r.look[1],r.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const h=n[n.length-1];this.player.yaw=Math.atan2(-(h.look[0]-h.to[0]),-(h.look[2]-h.to[2])),this.player.pitch=0;const a=this.renderer.camera;a.position.copy(this.player.eye()),a.rotation.order="YXZ",a.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&nt("Guest worlds are never saved."),!1;const e=ad(this.meta,this.snapshot());return t&&nt(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){cd(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/Ve)}questBump(t,e=1){if(this.tut)return;const n=gv(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}nt(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&nt("Power runs through the wreck. Four dead engines left — find them a way to burn."),this.renderQuest(),this.saveNow(!0)}columnTop(t,e){for(let n=Qt-1;n>=0;n--)if(this.world.get(t,n,e))return n;return Math.round(ie(this.seed,t,e))}crashPod(t,e){const n=this.player.pos,r=Math.round(n.x)+2,i=Math.round(n.z)+1,o=this.columnTop(r,i),l=this.renderer.addGroundRing(r+.5,o,i+.5,13382434,1.1),h=this.renderer.addBeam(r+.5,o,i+.5,13382434);this.pods.push({x:r,z:i,t:3,itemId:t,n:e,ringEid:l,beamEid:h}),this.audio.warn(),setTimeout(()=>{this.running&&nt("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const r=this.columnTop(n.x,n.z);this.caches.push({id:this.entitySeq++,x:n.x,y:r,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,r+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),nt("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){su(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const i=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;i!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=i,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else su(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const r=new Map;if(this.equip.head?.itemId==="visor"){for(const i of this.caches)i.items.length&&r.set(`c${i.id}`,[i.x+.5,i.y,i.z+.5,i.kind==="reward"?14197322:13386803]);for(const i of this.chests.keys()){const[o,l,h]=i.split(";")[0].split(",").map(Number);r.set(`x${i}`,[o+.5,l,h+.5,15124842])}}for(const[i,o]of this.visorBeams)r.has(i)||(this.renderer.removeEntityMesh(o),this.visorBeams.delete(i));for(const[i,[o,l,h,a]]of r)this.visorBeams.has(i)||this.visorBeams.set(i,this.renderer.addBeam(o,l,h,a,10))}waypointTarget(){const t=br(this.quests);if(!t)return null;const e=this.player.pos,n=(i,o)=>Math.round(ie(this.seed,i,o))+1,r=i=>{let o=i[0],l=1/0;for(const h of i){const a=(h.x-e.x)**2+(h.z-e.z)**2;a<l&&(l=a,o=h)}return o};switch(t.kind){case"oasis":{const i=r(this.world.gen.oases);return i?{name:"Oasis",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"water_home":case"finish":{const i=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(o=>this.world.get(o.x,o.y,o.z)===Pn);return i?{name:"Save Beacon",x:i.x+.5,y:i.y,z:i.z+.5}:null}case"wreck":{const i=this.world.gen.secondShip;return{name:"Second Wreck",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"core":{const i=this.world.gen.secondShip;return{name:"Engine Core",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"tool":{const i=[];this.world.get(0,31,-3)===Le&&i.push({x:0,y:31,z:-3});for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[u,p]of h){if(p!==Le)continue;const m=u%Qt,v=Math.floor(u/Qt)%W,y=Math.floor(u/(Qt*W));i.push({x:a*W+y,y:m,z:c*W+v})}}if(!i.length)return null;const o=r(i);return{name:"Crafting Bench",x:o.x+.5,y:o.y,z:o.z+.5}}case"supplies":{const i=this.world.gen.nearestTown(e.x,e.z);return i?{name:"Town",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"farm":{if(!this.crops.size)return null;let i=null,o=1/0;for(const c of this.crops.keys()){const[u,,p]=c.split(",").map(Number),m=(u+.5-e.x)**2+(p+.5-e.z)**2;m<o&&(o=m,i=c)}const[l,h,a]=i.split(",").map(Number);return{name:"Your Farm",x:l+.5,y:h+1,z:a+.5}}default:return null}}questFrame(){const t=br(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===Pn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}questJump(t){this.tut&&this.tut.finish();const e=Math.max(0,Math.min(vi.length,t|0));this.quests.i=e,this.questShown="",this.renderQuest(),nt(e>=vi.length?"Quest chain skipped — every quest is done.":`Skipped to “${vi[e].title}”.`)}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=br(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],r=e.id+":"+n;r!==this.questShown&&(this.questShown=r,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,r,i=window)=>{i.addEventListener(n,r),this.bound.set(n+(i===window?"":":el"),r)};t("keydown",n=>{const r=n;if(!r.repeat){if(this.keys.add(r.code),r.code==="KeyE"&&this.act(),r.code==="KeyQ"&&this.useItem(),r.code==="KeyX"&&this.surge(),r.code==="KeyT"&&this.toggleLantern(),r.code==="KeyI"&&this.toggleInv(),r.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=i.selectedSlot();o&&!i.rotate(o)&&(nt("No room to rotate."),this.audio.error())}this.renderInv()}if(r.code==="KeyR"&&!this.ui&&!this.paused&&!this.cine&&!this.liftoff){const i=this.inv.selectedSlot();if(i){const o=kt[i.itemId].block;o!==void 0&&vn[o].placeable&&zh(o)?(i.blockRot=(i.blockRot??0)+1&3,this.renderHeld(),this.audio.place()):(this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.dropEntity(i.itemId,1,1),this.renderHeld(),this.audio.place())}}if(r.code==="Escape"){if(this.liftoff)return;if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(r.code==="KeyP"&&!this.liftoff&&this.escape(!0),r.code.startsWith("Digit")){const i=Number(r.code.slice(5)),o=this.hotbarItems();if(i>=1&&i<=o.length){const l=o[i-1];this.inv.selectedSlot()?.itemId===l?this.inv.selected=-1:this.selectItem(l),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const r=n.target.closest("[data-hb]");if(!r)return;const i=this.hotbarItems()[Number(r.dataset.hb)];i&&(this.inv.selectedSlot()?.itemId===i?this.inv.selected=-1:this.selectItem(i),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const r=n;r.button===0?(this.mouseDown=!0,this.breakMsg=!1):r.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const r=n;this.player.yaw-=r.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*r.movementY*.0022*this.settings.sens,this.player.pitch=pi.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>{this.ui||this.cycleItem(n.deltaY>0?1:-1)}),t("contextmenu",n=>n.preventDefault());else{let n=-1,r=0,i=0;e.addEventListener("touchstart",m=>{if(n<0){const v=m.changedTouches[0];n=v.identifier,r=v.clientX,i=v.clientY}m.preventDefault()}),e.addEventListener("touchmove",m=>{for(const v of m.changedTouches)v.identifier===n&&(this.player.yaw-=(v.clientX-r)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(v.clientY-i)*.005*this.settings.sens,this.player.pitch=pi.clamp(this.player.pitch,-1.55,1.55),r=v.clientX,i=v.clientY);m.preventDefault()});const o=m=>{for(const v of m.changedTouches)v.identifier===n&&(n=-1)};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),document.addEventListener("contextmenu",m=>m.preventDefault());const l=document.getElementById("stick"),h=document.getElementById("knob");let a=-1;const c=m=>{const v=l.getBoundingClientRect();for(const y of m.changedTouches)if(y.identifier===a){const x=y.clientX-(v.left+v.width/2),_=y.clientY-(v.top+v.height/2),R=Math.max(1,Math.hypot(x,_)),E=Math.min(R,v.width/2)/(v.width/2);this.stick.x=x/R*E,this.stick.y=_/R*E,h.style.left=38+x/R*E*38+"px",h.style.top=38+_/R*E*38+"px"}};l.addEventListener("touchstart",m=>{a=m.changedTouches[0].identifier,c(m),m.preventDefault()}),l.addEventListener("touchmove",m=>{c(m),m.preventDefault()});const u=()=>{this.stick.x=0,this.stick.y=0,a=-1,h.style.left="38px",h.style.top="38px"};l.addEventListener("touchend",u),l.addEventListener("touchcancel",u);const p=(m,v,y)=>{const x=document.getElementById(m);x.addEventListener("touchstart",_=>{_.preventDefault(),v()}),x.addEventListener("touchend",_=>{_.preventDefault(),y&&y()}),x.addEventListener("touchcancel",()=>{y&&y()})};p("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),p("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),p("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),p("m-place",()=>this.place()),p("m-act",()=>this.act()),p("m-use",()=>this.useItem()),p("m-surge",()=>this.surge()),p("m-lamp",()=>this.toggleLantern()),p("m-next",()=>this.cycleItem(1)),p("m-inv",()=>this.toggleInv()),p("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=r=>!document.getElementById(r).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),document.getElementById("inv-bin").onclick=()=>this.binDiscard()}binDiscard(){if(this.temp){const n=kt[this.temp.itemId].name;this.temp=null,this.tempOrigin=null,nt(`${n} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld();return}const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,e=t.selectedSlot();if(!e){nt("Select an item, then send it to the Bin."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),nt(`${kt[e.itemId].name} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld()}overBin(t,e){const n=document.getElementById("inv-bin").getBoundingClientRect();return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),r=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,r),this.renderer.rebuildDirty(this.world);const i=this.renderer.updateSky(this.timeSec,this.player.pos),o=Do(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),l=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let u=this.stick.x,p=-this.stick.y;this.keys.has("KeyW")&&(p+=1),this.keys.has("KeyS")&&(p-=1),this.keys.has("KeyA")&&(u-=1),this.keys.has("KeyD")&&(u+=1);const m=this.keys.has("Space")||this.mobileJump;if(this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,u,p,m,this.speedMul,l),this.player.lastFallDist>0){const E=this.player.lastFallDist;if(this.player.lastFallDist=0,!this.player.inWater&&E>ou){const S=1-(this.equip.body?kt[this.equip.body.itemId].armor??0:0),b=(E-ou)*Cv*S;this.survival.hurt(b,"fall"),nu(),this.audio.hurt(),this.survival.health>0&&b>=10&&nt("You hit the ground hard.")}}const y=(this.timeSec%Ve/Ve-.25)*Math.PI*2,x=i.sunElev>0?(()=>{const E=1/Math.hypot(Math.cos(y),i.sunElev,.4);return{x:Math.cos(y)*E,y:i.sunElev*E,z:.4*E}})():null;this.stormShieldTick(),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(u!==0||p!==0),overencumbered:l,biome:o,tSec:this.timeSec,sunElev:i.sunElev,sunDir:x,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos),regulator:(this.equip.regulator?.charges??0)>0,terrainH:(E,S)=>ie(this.seed,E,S),stormShield:this.stormShieldOn,stormMul:this.equip.body&&kt[this.equip.body.itemId].stormResist?.25:1}),this.renderer.setStorm(this.survival.storm,this.survival.lastOpenSky),this.audio.setStorm(this.survival.storm),this.survival.storm>.5&&!this.stormToast?(this.stormToast=!0,nt("A Sandstorm rolls in — get out of the open."),this.audio.error()):this.survival.storm<.3&&this.stormToast&&(this.stormToast=!1,nt("The Sandstorm passes."));const _=this.equip.regulator;_&&(_.charges??0)>0&&(this.regulatorAcc+=t,this.regulatorAcc>=2880&&(this.regulatorAcc=0,_.charges=(_.charges??0)-1,_.charges<=0?(_.charges=0,nt("The Coolant Cell in your Regulator is spent."),this.audio.error()):nt("A Coolant Cell has been used up.")));const R=this.equip.light;this.lanternOn&&R&&((R.charges??0)<=0?this.toggleLantern():(this.lanternAcc+=t,this.lanternAcc>=240&&(this.lanternAcc=0,R.charges=(R.charges??0)-1,(R.charges??0)<=0&&(this.toggleLantern(),nt("The Head Lantern gutters out — refuel it at a Campfire."))))),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const u=this.renderer.camera;u.position.copy(this.player.eye()),u.rotation.order="YXZ",u.rotation.set(this.player.pitch,this.player.yaw,0),this.liftoff&&(u.position.x+=(Math.random()-.5)*.14,u.position.y+=(Math.random()-.5)*.1,u.position.z+=(Math.random()-.5)*.14)}this.liftoffFrame(t);const h=this.raycastTarget();this.renderer.setPlayerLight(this.lanternOn?this.player.eye():null),this.renderer.setHighlight(this.ui||this.cine?null:h?.hit??null);{const u=this.inv.selectedSlot(),p=u?kt[u.itemId].block:void 0,m=h?.hit,v=h?.face;let y=!1;if(!this.ui&&!this.cine&&p!==void 0&&vn[p].placeable&&m&&v){const x=m.x+v.x,_=m.y+v.y,R=m.z+v.z,E=this.world.get(x,_,R);(E===bt||En(E)&&E!==Oe)&&(this.renderer.setGhost(x,_,R,p),y=!0)}y||this.renderer.clearGhost()}wv(this.ui||this.cine?null:this.promptFor(h)),Tv(this.ui||this.cine||!h?.hit?null:X1(this.world.get(h.hit.x,h.hit.y,h.hit.z))),Ev(this.player.headUnder);for(let u=this.entities.length-1;u>=0;u--){const p=this.entities[u];if(!p.buried&&(p.age=(p.age??0)+t,p.age>=300)){this.renderer.removeEntityMesh(p.id),this.entities.splice(u,1);continue}if(p.fall!==void 0){const v=Math.min(p.fall,14*t);p.y-=v,p.fall-=v,p.fall<=.001&&(p.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(p.id,[p.x,p.y,p.z])}const m=this.renderer.entityMesh(p.id);p.buried&&p.buriedAt&&this.world.get(p.buriedAt[0],p.buriedAt[1],p.buriedAt[2])!==bt?m&&this.renderer.removeEntityMesh(p.id):m||this.renderer.addEntityMesh(p.id,[p.x,p.y,p.z],parseInt(kt[p.itemId].color.slice(1),16))}for(const u of this.caches){const p=this.renderer.entityMesh(u.id);!p&&u.items.length?(this.renderer.addEntityMesh(u.id,this.cacheMeshPos(u),this.cacheColor(u),.7),u.markerEid=this.renderer.addGroundRing(u.x+.5,u.y,u.z+.5,u.kind==="reward"?14197322:13382434,1.4),u.kind==="death"&&(u.beamEid=this.renderer.addBeam(u.x+.5,u.y,u.z+.5,13382434))):p&&!u.items.length&&(this.renderer.removeEntityMesh(u.id),u.markerEid!==void 0&&(this.renderer.removeEntityMesh(u.markerEid),u.markerEid=void 0),u.beamEid!==void 0&&(this.renderer.removeEntityMesh(u.beamEid),u.beamEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const a=this.survival.surgeCooldown>0;for(const u of["surge-btn","m-surge"]){const p=document.getElementById(u);p&&p.disabled!==a&&(p.disabled=a)}ru(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=Ve}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.waterAcc+=t,this.waterAcc>.4&&(this.waterAcc=0,this.world.processWater()),this.audio.setDay(i.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const c=this.prevHp-this.survival.health;if(c>0){const u=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(c>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,nu(),(c>=2||u)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),r=Math.floor(t.y),i=Math.floor(t.z);const o=new F(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),l=new F(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),h=(p,m)=>m>0?Math.ceil(p)-p||1:m<0?p-Math.floor(p)||1:1/0,a=new F(h(t.x,o.x)*l.x,h(t.y,o.y)*l.y,h(t.z,o.z)*l.z);let c=new F(n,r,i),u=null;for(let p=0;p<80;p++){const m=this.world.get(n,r,i);if(En(m)){if(u||(u={x:n,y:r,z:i}),m===Oe)return{hit:{x:n,y:r,z:i},water:u,face:new F(c.x-n,c.y-r,c.z-i)}}else if(m!==bt&&m!==Oe)return{hit:{x:n,y:r,z:i},water:u,face:new F(c.x-n,c.y-r,c.z-i)};if(c.set(n,r,i),a.x<a.y&&a.x<a.z?(n+=o.x,a.x+=l.x):a.y<a.z?(r+=o.y,a.y+=l.y):(i+=o.z,a.z+=l.z),new F(n-t.x,r-t.y,i-t.z).length()>5.5)break}return{hit:null,water:u,face:new F(0,0,0)}}promptFor(t){if(this.nearestTrader())return"E: Trade with the Trader";if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Ue)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===on||n===Ze||n===je||n===Be)return"E: Open door";if(n===Xe||n===Ye)return"E: Close door";if(n===Pn)return"E: Save game (respawn point)";if(n===Le||n===qe)return"E: Craft";if(n===ir)return"E: Forge armour and gear";if(n===Ke)return this.canHeatWater(t.hit.x,t.hit.y,t.hit.z)?"E: Heat the water":this.canFeed(t.hit.x,t.hit.y,t.hit.z)?"E: Feed the fire":"E: Smelt";if(n===zi)return"E: Draw neutral air (37 °C)";if(n===Hi)return this.inv.has("thruster_nozzle",1)?"E: Install Thruster Nozzle":null}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new F(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=this.inv.selectedSlot();if(e&&kt[e.itemId].instaBreak)return{ok:!0,time:.01};const n=vn[t];if(n.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const r=e?kt[e.itemId].tool:void 0;return n.tool!==null?!r||r.type!==n.tool?{ok:!1,time:0,why:`need a ${n.tool}`}:r.tier<n.minTier?{ok:!1,time:0,why:`need a tier ${n.minTier} ${n.tool}`}:{ok:!0,time:n.breakTime*Math.pow(.55,r.tier-1)}:{ok:!0,time:n.breakTime*(n.fastTool&&r&&r.type===n.fastTool?Math.pow(.55,r.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const h=this.inv.selectedSlot(),a=h?kt[h.itemId]:null,c=a?.weapon;e.hp-=c?c.dmg:3+(a?.tool?.tier??0),this.audio.thud();const u=e.x-this.player.pos.x,p=e.z-this.player.pos.z,m=Math.max(.2,Math.hypot(u,p)),v=c?1.1:.6;this.mobCanStand(e,e.x+u/m*v,e.z+p/m*v)&&(e.x+=u/m*v,e.z+=p/m*v,e.y=this.mobGround(e,e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:r,y:i,z:o}=n.hit,l=this.world.get(r,i,o);if(!this.breaking||this.breaking.x!==r||this.breaking.y!==i||this.breaking.z!==o){const h=this.canBreakWith(l);if(!h.ok){h.why&&!this.breakMsg&&(this.breakMsg=!0,nt(h.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${h.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:r,y:i,z:o,need:h.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(r,i,o),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const r=this.world.get(t,e,n);if(this.questBump("mine"),Ao(r)||r===Xe||r===Ye){const o=r===je||r===Be||r===Ye;this.world.set(t,e,n,bt);for(const l of[-1,1]){const h=this.world.get(t,e+l,n);(Ao(h)||h===Xe||h===Ye)&&this.world.set(t,e+l,n,bt)}this.giveOrDrop(o?"door_inner":"door",1),this.audio.blockBreak();return}if(r===Pn){this.world.set(t,e,n,bt),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===t&&o.y===e&&o.z===n)),nt("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(r===cn){this.world.set(t,e,n,bt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===li){this.world.set(t,e,n,bt),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===Vn){this.world.set(t,e,n,bt),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===Sn||r===Gn||r===an||r===Nn){this.world.set(t,e,n,r===an||r===Nn?wn:bt),this.crops.delete(`${t},${e},${n}`),r===Sn&&this.giveOrDrop("dune_melon",1),r===an&&(this.giveOrDrop("wheat",1),this.giveOrDrop("seed_wheat",1)),r===Gn&&this.giveOrDrop("seed_melon",1),r===Nn&&this.giveOrDrop("seed_wheat",1),this.audio.blockBreak();return}if(r===ci){this.world.set(t,e,n,bt),this.giveOrDrop("kindling",1),mt(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===ln||r===xn){this.world.set(t,e,n,bt);const o=t+(r===ln?1:-1),l=this.world.get(o,e,n);(l===ln||l===xn)&&this.world.set(o,e,n,bt),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(r===Ke&&this.campCharges.delete(`${t},${e},${n}`),r===Ue){const o=this.chestCluster(t,e,n),l=this.chests.get(ve.chestKey(o))??[];this.chests.delete(ve.chestKey(o)),this.world.set(t,e,n,bt);const h=o.filter(([u,p,m])=>u!==t||p!==e||m!==n),a=[];for(const u of h){const p=this.chestCluster(u[0],u[1],u[2]),m=ve.chestKey(p);a.some(([v])=>v===m)||a.push([m,this.emptyChestGrid(p.length)])}let c=!1;for(const u of l)a.some(([,p])=>ve.placeSlotFree(p,u))||(this.dropEntity(u.itemId,1,2),c=!0);for(const[u,p]of a)p.slots.length&&this.chests.set(u,p.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),c&&nt("The remaining chests were full — some contents fell to the sand.");return}if(r===Qi){this.world.set(t,e,n,bt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(r===Le||r===qe){const o=this.benchPeer(t,e,n);this.world.set(t,e,n,bt),o&&this.world.set(o[0],o[1],o[2],bt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(r===Un||r===Ke||r===ji)&&this.renderer.removePointLight(t,e,n),r===Fi&&this.breakers.delete(`${t},${e},${n}`),this.world.set(t,e,n,bt);const i=this.blockItemId(r);i&&this.giveOrDrop(i,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),r=Math.floor(e),i=Math.max(30,Math.round(ie(this.seed,n,r))+8);for(let o=i;o>=0;o--){const l=this.world.get(n,o,r);if(l!==bt&&vn[l].solid)return o+1}return-1}mobGround(t,e,n){if(t.kind!=="scorpion"&&t.kind!=="wurm")return this.mobSurface(e,n);const r=Math.floor(e),i=Math.floor(n);for(let o=Math.floor(t.y);o>=0;o--){const l=this.world.get(r,o,i);if(l!==bt&&vn[l].solid)return o+1}return-1}mobCanStand(t,e,n){const r=this.mobGround(t,e,n);return r<0||r>t.y+1.01?!1:this.world.get(Math.floor(e),r,Math.floor(n))===bt}spawnMob(t,e,n,r){const i=uv(t);i.group.position.set(e,n,r),i.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(i.group),this.mobs.push({kind:t,hp:Eo[t].hp,x:e,y:n,z:r,yaw:i.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:i})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(n=>n!==t);const e=Eo[t.kind];e.drops.forEach((n,r)=>{const i=e.dropChance?.[r]??1;(i>=1||Math.random()<i)&&this.giveOrDrop(n.itemId,n.count)}),nt(`${e.name} killed.`)}topUpMobs(){const t={snake:4,rat:8,scorpion:4,wurm:1,trader:0,vulture:3,tortoise:2,fennec:2},e={snake:0,rat:0,scorpion:0,wurm:0,trader:0,vulture:0,tortoise:0,fennec:0},n=this.player.pos;this.mobs=this.mobs.filter(i=>i.kind!=="trader"&&Math.abs(i.x-n.x)+Math.abs(i.z-n.z)>190?(this.renderer.removeSceneObject(i.vis.group),!1):!0);for(const i of this.mobs)e[i.kind]++;const r=this.player.pos;for(const i of["snake","rat","scorpion","wurm","vulture","tortoise","fennec"]){const o=i==="scorpion"||i==="wurm";if(!(o&&r.y>27))for(;e[i]<t[i];){e[i]++;const l=Math.random()*Math.PI*2,h=30+Math.random()*30,a=Math.floor(r.x+Math.cos(l)*h)+.5,c=Math.floor(r.z+Math.sin(l)*h)+.5;if(o){const u=i==="wurm"?5:8,p=i==="wurm"?16:24,m=this.caveSpot(a,c,u,p);if(m<0)continue;this.spawnMob(i,a,m,c)}else{if(Math.hypot(a,c)<24||this.beaconMarks.some(m=>Math.hypot(m.x+.5-a,m.z+.5-c)<16))continue;const u=Er(this.seed).nearestCamp(a,c);if(u&&Math.hypot(u.x-a,u.z-c)<34)continue;const p=this.mobSurface(a,c);if(p<=1||this.world.get(Math.floor(a),p,Math.floor(c))!==bt||this.world.get(Math.floor(a),p+1,Math.floor(c))!==bt)continue;this.spawnMob(i,a,p,c)}}}this.ensureTraders()}ensureTraders(){const t=Er(this.seed),e=this.player.pos,n=110,r=Math.floor((e.x-n)/Re),i=Math.floor((e.x+n)/Re),o=Math.floor((e.z-n)/Re),l=Math.floor((e.z+n)/Re);for(let h=r;h<=i;h++)for(let a=o;a<=l;a++){if(!t.campAt(h,a))continue;const c=t.campCenter(h,a);if(Math.hypot(c.x-e.x,c.z-e.z)>n)continue;const u=h+","+a,p=this.traderAt.get(u);if(p&&this.mobs.includes(p))continue;const m=d_(c),v=this.mobSurface(m.x,m.z);v<=1||(this.spawnMob("trader",m.x,v,m.z),this.traderAt.set(u,this.mobs[this.mobs.length-1]))}if(this.traderAt.size)for(const[h,a]of this.traderAt)this.mobs.includes(a)||this.traderAt.delete(h)}nearestTrader(){const t=this.player.pos;let e=null,n=3.6;for(const r of this.mobs){if(r.kind!=="trader")continue;const i=Math.hypot(r.x-t.x,r.z-t.z);i<n&&(n=i,e=r)}return e}openTrade(t){const e=Er(this.seed).nearestCamp(t.x,t.z);this.tradeCamp=e?{x:e.x,z:e.z}:{x:t.x,z:t.z},this.tradeOffers=dv(this.seed,this.tradeCamp.x,this.tradeCamp.z,this.dayNumber()),this.ui="trade",this.unlockPointer(),this.renderTrade(),document.getElementById("ui-trade").classList.remove("hidden"),this.audio.pickup()}renderTrade(){const t=document.getElementById("trade-offers");t.innerHTML="";for(let e=0;e<this.tradeOffers.length;e++){const n=this.tradeOffers[e],r=document.createElement("div");r.className="trade-row";const i=l=>l.map(h=>`<span class="trade-item">${kt[h.itemId].name}${h.count>1?" ×"+h.count:""}</span>`).join(" + ");r.innerHTML=`<span class="trade-side want">${i(n.want)}</span><span class="trade-arrow">→</span><span class="trade-side give">${i(n.give)}</span>`;const o=document.createElement("button");o.textContent="Trade",o.onclick=()=>this.trade(e),r.appendChild(o),t.appendChild(r)}document.getElementById("trade-note").textContent=`Day ${this.dayNumber()} — the Trader restocks the table at every dawn.`}trade(t){if(this.ui!=="trade")return;const e=this.tradeOffers[t];for(const n of e.want)if(!this.inv.has(n.itemId,n.count)){nt(`You don't have ${n.count} × ${kt[n.itemId].name}.`),this.audio.error();return}for(const n of e.want)this.inv.removeItem(n.itemId,n.count);for(const n of e.give)this.giveOrDrop(n.itemId,n.count);nt("Traded."),this.audio.drink(),this.renderTrade()}caveSpot(t,e,n,r){const i=Math.floor(t),o=Math.floor(e);for(let l=r;l>=n;l--){if(this.world.get(i,l,o)!==bt||this.world.get(i,l-1,o)===bt||this.world.get(i,l+1,o)!==bt)continue;let h=-1;for(let a=1;a<=3;a++)if(gn(this.world.get(i,l+a,o))){h=a;break}if(!(h<0))return l}return-1}meleeMob(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),r=n?kt[n.itemId].weapon?.reach??3.2:3.2,i=this.raycastTarget(),o=i?.hit?Math.hypot(i.hit.x+.5-t.x,i.hit.y+.5-t.y,i.hit.z+.5-t.z):1/0;let l=null,h=1/0;for(const a of this.mobs){if(a.kind==="trader")continue;const c=Eo[a.kind],u=a.x-t.x,p=a.y+c.height/2-t.y,m=a.z-t.z,v=u*e.x+p*e.y+m*e.z;if(v<.2||v>r||v>o)continue;const y=t.x+e.x*v-a.x,x=t.y+e.y*v-(a.y+c.height/2),_=t.z+e.z*v-a.z;y*y+x*x+_*_>(c.hitR+.3)*(c.hitR+.3)||v<h&&(h=v,l=a)}return l}columnClear(t,e,n,r){const i=Math.floor(t),o=Math.floor(e);for(let l=Math.floor(n);l<=Math.floor(r);l++){const h=this.world.get(i,l,o);if(h!==bt&&h!==Oe)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const r of this.mobs.slice()){const i=Eo[r.kind];if(r.kind==="trader"){r.vis.animate(n,0);continue}const o=e.x-r.x,l=e.z-r.z,h=Math.hypot(o,l);if(h>110){this.renderer.removeSceneObject(r.vis.group),this.mobs=this.mobs.filter(x=>x!==r);continue}let a=0,c=0;const u=this.columnClear(r.x,r.z,r.y+.2,e.y+1.4),p=r.kind==="vulture"&&this.survival.health<60,m=r.kind==="vulture"?p?i.aggroR:0:i.aggroR,v=r.kind==="vulture"&&!p?i.fleeR:r.kind==="vulture"?0:i.fleeR;if(m>0&&h<m&&h>.01&&u){if(a=o/h*i.speed,c=l/h*i.speed,r.yaw=Math.atan2(a,c),h<1.2+i.hitR&&r.biteCd<=0){r.biteCd=i.biteCd;const x=1-(this.equip.body?kt[this.equip.body.itemId].armor??0:0);this.survival.hurt(i.biteDmg*x,`${i.name.toLowerCase()} bite`),nt(x<1?`A ${i.name.toLowerCase()} bites you — the armour soaks some of it.`:`A ${i.name.toLowerCase()} bites you!`)}}else v>0&&h<v&&h>.01?(a=-o/h*i.speed,c=-l/h*i.speed,r.yaw=Math.atan2(a,c)):(r.wanderT-=t,r.wanderT<=0&&(r.wanderT=2+Math.random()*4,r.wanderYaw=Math.random()*Math.PI*2,r.wanderOn=Math.random()<.55),r.wanderOn&&(a=Math.sin(r.wanderYaw)*i.speed*.35,c=Math.cos(r.wanderYaw)*i.speed*.35,r.yaw=r.wanderYaw));r.biteCd-=t;let y=0;if(a!==0||c!==0){const x=r.x+a*t,_=r.z+c*t;this.mobCanStand(r,x,_)?(r.x=x,r.z=_,y=1):r.wanderYaw=r.yaw=Math.random()*Math.PI*2}r.y=this.mobGround(r,r.x,r.z),r.vis.group.position.set(r.x,r.y,r.z),r.vis.group.rotation.y=r.yaw,r.vis.animate(n,y)}}gridFits(t,e){const n=new Ga;n.slots=[],n.w=t,n.h=e;for(const r of this.inv.slots)if(!ve.placeSlotFree(n,{...r,x:0,y:0}))return!1;return!0}bagSize(){return(this.equip.backpack?kt[this.equip.backpack.itemId].bag:null)??{w:3,h:4,kg:0}}applyEquip(){const t=this.bagSize();(this.inv.w!==t.w||this.inv.h!==t.h)&&this.inv.setBackpack(t.w,t.h,t.kg),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=kt[t.itemId];if(!e.equip)return;const n=e.equip,r=this.equip[n];if(r&&this.inv.addItem(r.itemId,1)>0){nt("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),n==="light"&&(this.lanternOn=!1),(n==="light"||n==="regulator")&&t.charges===void 0&&(t.charges=0),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),nt(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(!e)return;const n=t==="backpack"?{w:3,h:4}:this.bagSize();if(!this.gridFits(n.w,n.h)){nt("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,t==="light"&&(this.lanternOn=!1),this.applyEquip(),this.inv.addItem(e.itemId,1),this.audio.place(),nt(`${kt[e.itemId].name} taken off.`),this.renderInv()}benchPeer(t,e,n){for(const[r,i]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.world.get(t+r,e,n+i);if(o===Le||o===qe)return[t+r,e,n+i]}return null}blockItemId(t){return ei[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),nt(`No room: dropped ${kt[t].name}`))}dropEntity(t,e,n=0){const r=this.player.pos,i=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),l=(u,p)=>{const m=Math.floor(r.x+u),v=Math.floor(r.z+p);return!gn(this.world.get(m,Math.floor(r.y),v))&&!gn(this.world.get(m,Math.floor(r.y+1),v))},h=[[i*1.8,o*1.8],[-i*1.8,-o*1.8],[o*1.8,-i*1.8],[-o*1.8,i*1.8],[0,0]],[a,c]=h.find(([u,p])=>l(u,p))??[0,0];for(let u=0;u<e;u++){const p=u===0?0:.3*Math.sin(u*2.4),m=u===0?0:.3*Math.cos(u*2.4);this.entities.push({id:this.entitySeq++,x:r.x+a+p,y:r.y+.35,z:r.z+c+m,itemId:t,repickAt:a===0&&c===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=kt[t.itemId];if(e.block===void 0){nt("Not a placeable block"),this.audio.error();return}if(!vn[e.block].placeable){nt(`${e.name} is raw material, not a block to place.`),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const r=n.hit.x+n.face.x,i=n.hit.y+n.face.y,o=n.hit.z+n.face.z,l=this.world.get(r,i,o);if(l!==bt&&!(En(l)&&l!==Oe))return;if(gn(e.block)){const c=this.player.pos;if(r+1>c.x-.3&&r<c.x+.3&&o+1>c.z-.3&&o<c.z+.3&&i+1>c.y&&i<c.y+1.8)return}let h=[];if(e.block===Ue){const c=new Set;for(const[u,p,m]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(r+u,i+p,o+m)!==Ue)continue;const v=ve.chestKey(this.chestCluster(r+u,i+p,o+m));c.has(v)||(c.add(v),h.push(...this.chests.get(v)??[]),this.chests.delete(v))}}let a=null;if(e.block===Le){const c=this.player.pos;for(const[u,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const m=r+u,v=o+p;if(this.world.get(m,i,v)===bt&&!(m+1>c.x-.3&&m<c.x+.3&&v+1>c.z-.3&&v<c.z+.3&&i+1>c.y&&i<c.y+1.8)){a=[m,i,v];break}}if(!a){nt("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(e.block===Gn||e.block===Nn||e.block===cn||e.block===Vn){const c=this.world.get(r,i-1,o);if(!(e.block===Vn?c===$n||c===wn||c===ti:c===wn||e.block===cn&&(c===Xn||c===un||c===$n))){nt(e.block===Vn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(r,i,o,e.block),a&&this.world.set(a[0],a[1],a[2],qe),t.blockRot&&zh(e.block)&&this.world.setRot(r,i,o,t.blockRot),e.block===on&&this.world.get(r,i+1,o)===bt&&this.world.set(r,i+1,o,Ze),e.block===je&&this.world.get(r,i+1,o)===bt&&this.world.set(r,i+1,o,Be),e.block===ln&&this.world.get(r+1,i,o)===bt&&this.world.set(r+1,i,o,xn),(e.block===Gn||e.block===Nn)&&(this.crops.set(`${r},${i},${o}`,0),this.tut?.notify("plant")),e.block===Vn&&(this.trees.set(`${r},${i},${o}`,0),this.tut?.notify("plant"),nt("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===Qi)if(this.beaconAdjacent(r,i,o)){const c=br(this.quests);c&&c.kind==="finish"&&!this.tut?this.questBump("finish"):nt("The Core hums next to the beacon. Power runs — now wake the wingtip engines.")}else nt("The relay needs the Core right next to a Save Beacon.");e.block===Un?this.renderer.addPointLight(r,i,o,"lamp"):e.block===ji&&this.renderer.addPointLight(r,i,o,"fire"),e.block===Fi&&this.breakers.add(`${r},${i},${o}`),e.block===Ue&&this.linkChests(r,i,o,h),this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}beaconAdjacent(t,e,n){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([r,i,o])=>this.world.get(t+r,e+i,n+o)===Pn)}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget(),e=this.nearestTrader();if(e){this.openTrade(e);return}if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Ue){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const n=this.nearestCache();if(n){this.openCacheId=n.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:r,y:i,z:o}=t.hit,l=this.world.get(r,i,o);if(l===Sn||l===an||l===li){this.harvest(r,i,o,l);return}if(l===ln||l===xn){this.sleep();return}if(Ao(l)||l===Xe||l===Ye){const h=l===je||l===Be||l===Ye,a=h?Ye:Xe,c=m=>h?m===je||m===Be:m===on||m===Ze,u=h?je:on,p=h?Be:Ze;if(l===a){const m=this.player.pos;if(m.x>r-.2&&m.x<r+1.2&&m.z>o-.2&&m.z<o+1.2){nt("Step out of the doorway first."),this.audio.error();return}this.world.get(r,i-1,o)===a?(this.world.set(r,i,o,p),this.world.set(r,i-1,o,u)):this.world.get(r,i+1,o)===a?(this.world.set(r,i,o,u),this.world.set(r,i+1,o,p)):this.world.set(r,i,o,c(this.world.get(r,i+1,o))?p:u)}else{const m=gn(this.world.get(r-1,i,o))||gn(this.world.get(r+1,i,o)),v=this.player.pos,y=m?v.z-(o+.5):v.x-(r+.5),x=r+","+o;Math.abs(y)>.35?this.world.doorSwing.set(x,y>0?-1:1):this.world.doorSwing.delete(x),this.world.set(r,i,o,a);for(const _ of[-1,1])c(this.world.get(r,i+_,o))&&this.world.set(r,i+_,o,a);this.tut?.notify("door")}this.audio.door();return}if(l===Pn){this.tut?.notify("save"),this.beaconMarks.some(h=>h.x===r&&h.y===i&&h.z===o)||this.beaconMarks.push({x:r,y:i,z:o}),this.audio.savePing(),this.saveNow()?nt("Saved. Death will respawn you at this beacon."):nt("This world is not saved — the beacon only marks it.");return}if(l===Le||l===qe){this.openStation=[r,i,o],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(l===ir){this.openStation=[r,i,o],this.ui="bench",this.unlockPointer(),this.renderCraft("armory");return}if(l===Ke){if(this.canHeatWater(r,i,o)){this.heatWater(r,i,o);return}if(this.canFeed(r,i,o)){this.feed(r,i,o);return}this.openStation=[r,i,o],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(l===Hi){if(!this.inv.has("thruster_nozzle",1)){this.audio.error(),nt("A dead wingtip engine. It needs a Thruster Nozzle — Cobalt from the deep Caves.");return}this.inv.removeItem("thruster_nozzle",1),this.world.set(r,i,o,ji),this.renderer.addPointLight(r,i,o,"fire"),this.questBump("thruster"),this.audio.door(),this.audio.win(),nt("Nozzle seated. The engine coughs, catches, holds."),!this.liftoff&&this.thrustersAllLit()&&this.startLiftoff();return}if(l===zi){let h=null;for(const[a,c,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const p=this.world.roomInfo(r+a,i+c,o+u);if(p.size>0){h=p;break}}h&&h.sealed&&h.regulators*Tr>=h.size?(this.survival.body=37,this.audio.drink(),nt("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),nt("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.selectedSlot()?.itemId==="bucket"){nt("E won't fill it — press Q or right-click with the Bucket to scoop."),this.audio.error();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),nt(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):nt("You need an empty Water Canister.")}}}harvest(t,e,n,r){r===Sn?(this.world.set(t,e,n,Gn),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(mt(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),nt("Dune Melon picked — the plant keeps growing.")):r===an?(this.world.set(t,e,n,wn),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),nt("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,cn),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),nt("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<Ve){const n=Math.ceil((Ve-t)/60);nt(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=Ve/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),nt("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);let i=0;for(let o=-6;o<=6;o++)for(let l=-6;l<=6;l++)for(let h=-2;h<=2;h++){if(this.world.get(e+o,n+h,r+l)!==Ke||(this.campCharges.get(`${e+o},${n+h},${r+l}`)??0)<=0)continue;const a=Math.max(Math.abs(o),Math.abs(l));i=Math.max(i,a<=4?18:9)}return i}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,r]of this.crops){const[i,o,l]=n.split(",").map(Number),h=this.world.get(i,o,l);if(h!==Gn&&h!==Sn&&h!==Nn&&h!==an){this.crops.delete(n);continue}if(h===Sn||h===an)continue;const a=h===Gn;let c=!1;t:for(let m=-4;m<=4;m++)for(let v=-4;v<=4;v++)for(let y=-2;y<=1;y++)if(En(this.world.get(i+m,o+y,l+v))){c=!0;break t}const u=this.survival.airTempAt(this.world,i,o,l,this.timeSec),p=a?u>=22&&u<=45:u>=2&&u<=42;if(c&&p){const m=r+e;this.crops.set(n,m),m>=(a?60:90)&&this.world.set(i,o,l,a?Sn:an)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){nt("Aim at water."),this.audio.error();return}const{x:e,y:n,z:r}=t.water;if(this.world.get(e,n,r)!==Oe){nt("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){nt("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,r,bt),this.audio.drink(),nt("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,r=t.hit.z+t.face.z;if(this.world.get(e,n,r)!==bt){nt("Pour into open space."),this.audio.error();return}this.world.set(e,n,r,Oe),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),nt("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,r]of this.trees){const[i,o,l]=n.split(",").map(Number),h=this.world.get(i,o,l);if(h!==Vn&&h!==Tn){this.trees.delete(n);continue}let a=!1;t:for(let m=-6;m<=6;m++)for(let v=-6;v<=6;v++)for(let y=-3;y<=3;y++)if(En(this.world.get(i+m,o+y,l+v))){a=!0;break t}if(!a)continue;const c=Math.min(480,r+e);this.trees.set(n,c);const u=c>=480?3:c>=270?2:c>=120?1:0;if(u===0)continue;let p=this.treePlanCache.get(n);if(!p){let m=Math.floor(mt(i+7*l,o,this.seed+55)*1e9)+1;p=Xu(i,o,l,()=>(m=m*1103515245+12345&2147483647,m/2147483647)),this.treePlanCache.set(n,p)}for(const m of p){if(m.stage>u)continue;const v=this.world.get(m.x,m.y,m.z);(v===bt||v===Vn)&&this.world.set(m.x,m.y,m.z,m.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)for(let l=0;l<=2;l++){const h=this.world.get(e+i,n+l,r+o);if(!(h!==cn&&h!==li)&&!(Math.abs(t.x-(e+i+.5))>1.15||Math.abs(t.z-(r+o+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),nt("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){nt("Select an item first."),this.audio.error();return}const e=kt[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(t.itemId==="hot_water_pouch"){this.inv.removeItem(t.itemId,1),this.survival.body=Math.min(this.survival.body+10,Qo),this.giveOrDrop("canister_empty",1),this.audio.drink(),nt("Hot water, straight down: a +10 °C warmth rolls through you. The empty canister comes back."),this.renderHeld(),this.renderInv();return}if(t.itemId==="bucket"){this.bucketScoop();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:r,y:i,z:o}=n.hit,l=this.world.get(r,i,o);if(n.face.y===1&&(l===$n||l===ti)){this.world.set(r,i,o,wn),this.audio.place(),nt("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(l===Xn||l===un||l===es)){nt("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}nt(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),nt(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){nt("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&nt("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}canHeatWater(t,e,n){return this.inv.selectedSlot()?.itemId==="canister_full"&&(this.campCharges.get(`${t},${e},${n}`)??0)>0}canFeed(t,e,n){const r=this.inv.selectedSlot();return!!r&&(r.itemId==="wood_log"||r.itemId==="kindling")}feed(t,e,n){const r=this.inv.selectedSlot();if(!r||!this.canFeed(t,e,n))return;const i=`${r.itemId==="wood_log"?"log":"kindling"}`,o=r.itemId==="wood_log"?2:.5;this.inv.removeItem(r.itemId,1);const l=`${t},${e},${n}`,h=(this.campCharges.get(l)??0)+o;this.campCharges.set(l,h),this.syncFire(t,e,n),this.audio.place(),this.renderHeld(),nt(h>0?`The ${i} catches — the fire breathes again.`:`The ${i} smoulders; the fire needs more.`)}syncFire(t,e,n){const r=(this.campCharges.get(`${t},${e},${n}`)??0)>0;r&&!this.renderer.hasPointLight(t,e,n)?this.renderer.addPointLight(t,e,n,"fire"):!r&&this.renderer.hasPointLight(t,e,n)&&this.renderer.removePointLight(t,e,n),this.world.dirty.add(Math.floor(t/W)+","+Math.floor(n/W))}heatWater(t,e,n){const r=`${t},${e},${n}`,i=this.campCharges.get(r)??0;if(!this.canHeatWater(t,e,n)){this.audio.error();return}this.campCharges.set(r,i-1),this.syncFire(t,e,n),this.inv.removeItem("canister_full",1),this.giveOrDrop("hot_water_pouch",1),this.audio.drink(),nt("The canister hisses over the coals — sealed hot for the cold hours."),this.renderHeld()}toggleLantern(){const t=this.equip.light;if(!t){nt("Nothing in your Light slot. A Head Lantern lights the dark."),this.audio.error();return}if(this.lanternOn){this.lanternOn=!1;return}if((t.charges??0)<=0){nt("The lantern is dry — press E at a Campfire to refuel it."),this.audio.error();return}this.lanternOn=!0,this.lanternAcc=0,nt("Head Lantern on. T puts it out.")}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){nt("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){nt("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),nt("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}stormShieldTick(){const t=Math.floor(this.timeSec*2);if(t===this.breakerTick)return;this.breakerTick=t;const e=this.player.pos;let n=null,r=1/0;for(const i of this.breakers){const[o,l,h]=i.split(",").map(Number),a=Math.hypot(e.x-(o+.5),e.y+.9-(l+.5),e.z-(h+.5));a<=Vu&&a<r&&(r=a,n=[o,l,h])}this.stormShieldOn=n!==null,this.renderer.setStormDome(n?[n[0]+.5,n[1]+.5,n[2]+.5]:null)}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),r=Math.floor(e.y),i=Math.floor(e.z);let o=this.world.roomInfo(n,r,i);if(o.size===0)t:for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++){const p=this.world.roomInfo(n+a,r+c,i+u);if(p.size>0){o=p;break t}}const l=o.sealed&&o.regulators>0&&o.regulators*Tr>=o.size;this.regActive=l;const h=new Set(l?o.regCells:[]);for(const[a,c]of this.regGlow){if(h.has(a))continue;this.renderer.removeEntityMesh(c);const[u,p,m]=a.split(",").map(Number);this.renderer.removePointLight(u,p,m),this.regGlow.delete(a)}for(const a of h){if(this.regGlow.has(a))continue;const[c,u,p]=a.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new ne({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,v=this.renderer.addEntityMesh(m,[c+.5,u+.5,p+.5],9427199,1.03);v.material=this.regGlowMat,this.renderer.addPointLight(c,u,p,"cool"),this.regGlow.set(a,m)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==bt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}t.distanceTo(new F(n.x,n.y,n.z))<1.3&&this.inv.addItem(n.itemId,1)===0&&(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup())}}}static SHIP_IDS=new Set([ze,rn,bi,Si,As,on,Ze,Xe,je,Be,Ye,Un,Pn,Le,qe,zi,Qi,ln,xn]);liftoff=null;thrustersAllLit(){let t=0;for(let e=29;e<=37;e++)for(let n=-8;n<=6;n++)for(let r=-13;r<=13;r++){const i=this.world.get(n,e,r);if(i===Hi)return!1;i===ji&&t++}return t>=4}startLiftoff(){const t=[];for(let n=37;n>=29;n--){const r=[];for(let i=-8;i<=6;i++)for(let o=-13;o<=13;o++){const l=this.world.get(i,n,o);ve.SHIP_IDS.has(l)&&r.push([i,n,o,l])}r.length&&t.push(r)}this.liftoff={t:0,rows:t,step:0,restored:0},this.ui="liftoff",document.pointerLockElement&&document.exitPointerLock();const e=document.getElementById("lift-fx");e.classList.remove("hidden"),e.textContent="ENGINE IGNITION",nt("The whole Ship shudders. Every plate rattles at once."),this.audio.win()}liftoffFrame(t){const e=this.liftoff;if(!e)return;e.t+=t;const n=2.2/e.rows.length,r=2.4,i=4.6,o=i+2.2,l=document.getElementById("lift-fx");for(l.textContent=e.t<r?"LIFT-OFF":e.t<i?"RESCUE SIGNAL LIVE":"TOUCHDOWN";e.step<e.rows.length&&e.t>=e.step*n;){for(const[h,a,c]of e.rows[e.step])this.world.set(h,a,c,bt);this.audio.door(),e.step++}if(e.t>i)for(;e.restored<e.rows.length&&e.t-i>=e.restored*n;){for(const[h,a,c,u]of e.rows[e.rows.length-1-e.restored])this.world.set(h,a,c,u);this.audio.door(),e.restored++}e.t>=o+.4&&(this.liftoff=null,this.ui=null,l.classList.add("hidden"),this.saveNow(!0),this.win())}win(){this.won||(this.won=!0,tu(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`The Ship lifts off. All four engines burn. Survived ${this.scoreDays().toFixed(1)} days. Best: ${kr().toFixed(1)} days.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:1})),...["backpack","head","body","regulator","light"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null,regulator:null,light:null},this.lanternOn=!1,tu(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${kr().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/Ve}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===Pn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){nt("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache","ui-trade"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){ru(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=Ve})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const u=kt[this.temp.itemId];e.classList.add("filled"),e.style.background=u.color,e.style.backgroundImage=`url(${Uo(this.temp.itemId)[0]??""})`,e.onmousedown=p=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.startTempDrag(p)},n.textContent=`Drop ${u.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,1,1),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const u of["backpack","head","body","regulator","light"]){const p=document.getElementById("eq-"+u),m=this.equip[u];if(m){const v=kt[m.itemId];p.classList.add("filled"),p.style.background=v.color,p.style.backgroundImage=`url(${Uo(m.itemId)[0]??""})`;const y=m.charges;p.textContent=y!==void 0&&y>0?String(y):"",p.title=y!==void 0?`Click to take off the ${v.name} — ${y} charge${y===1?"":"s"} left`:`Click to take off the ${v.name}`,p.onclick=()=>this.unequipSlot(u)}else p.classList.remove("filled"),p.style.background="#23262e",p.style.backgroundImage="",p.textContent="",p.title="",p.onclick=()=>{const v=this.inv.selectedSlot();v&&kt[v.itemId].equip===u?this.equipItem():v&&(nt(`The ${kt[v.itemId].name} does not fit the ${u} slot.`),this.audio.error())}}const r=document.getElementById("inv-side"),i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=i.selectedSlot(),l=this.temp??o,h=this.inv.weight()+(this.temp?kt[this.temp.itemId].mass:0),a=this.inv.weightLimit(),c=l?Hn(l):null;if(r.textContent=l?`${kt[l.itemId].name} — ${kt[l.itemId].desc}`:"Click an item to inspect it; drag to move it.",r.textContent+=` Weight ${h.toFixed(1)} / ${a} kg`,l&&c&&c.w!==c.h){const u=document.createElement("button");u.textContent="Rotate",u.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:i.rotate(o)||(nt("No room to rotate."),this.audio.error()),this.renderInv()},r.appendChild(u)}if(o){const u=kt[o.itemId];if(u.equip){const p=document.createElement("button");p.textContent=`Equip (${u.equip} slot)`,p.onclick=()=>this.equipItem(),r.appendChild(p)}if(o.itemId==="coolant_cell"&&this.equip.regulator){const p=this.equip.regulator,m=(p.charges??0)>=3,v=document.createElement("button");v.textContent=m?"Regulator holds 3 cells already — that's six days of neutral air":"Load Coolant Cell into the Regulator (each lasts 2 game days)",v.disabled=m||!this.inv.has("coolant_cell",1),v.onclick=()=>{m||!this.inv.has("coolant_cell",1)||(this.inv.removeItem("coolant_cell",1),p.charges=(p.charges??0)+1,this.audio.pickup(),nt(`Coolant Cell loaded — ${p.charges} charge${p.charges===1?"":"s"} running.`),this.renderInv())},r.appendChild(v)}}if(o)if(i===this.chestInv){const u=document.createElement("button");u.textContent="Move to pack",u.onclick=()=>{const p=i.slots.indexOf(o);i.slots.splice(p,1),ve.placeSlotFree(this.inv,o)||(i.slots.splice(p,0,o),nt("No room in your pack."),this.audio.error()),this.renderInv()},r.appendChild(u)}else{const u=document.createElement("button");u.textContent="Drop 1",u.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},r.appendChild(u)}}renderGrid(t,e){const n=ve.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const r=(i,o)=>t.slots.find(l=>{const h=Hn(l);return i>=l.x&&i<l.x+h.w&&o>=l.y&&o<l.y+h.h});for(let i=0;i<t.h;i++)for(let o=0;o<t.w;o++){const l=document.createElement("div");l.className="invcell";const h=r(o,i);if(h){const a=kt[h.itemId],c=o-h.x,u=i-h.y,p=Uo(h.itemId),m=h.rot?(a.h-1-c)*a.w+u:u*a.w+c;l.style.background=a.color,l.style.backgroundImage=`url(${p[Math.min(m,p.length-1)]??""})`,t.slots.indexOf(h)===t.selected&&l.classList.add("active"),l.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${a.name} — ${a.desc}`},l.onmousedown=y=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,o,i):this.startInvDrag(y,h,t)}}else l.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,o,i)};e.appendChild(l)}}tapCell(t,e,n){const r=t.slots.find(l=>{const h=Hn(l);return e>=l.x&&e<l.x+h.w&&n>=l.y&&n<l.y+h.h}),i=t===this.inv?this.chestInv:this.inv;if(i){const l=i.selectedSlot();if(l&&l!==r){const h=Hn(l),a=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(a>=0&&c>=0&&t.fits(a,c,h.w,h.h,l)){i.slots.splice(i.slots.indexOf(l),1),i.selected=-1,l.x=a,l.y=c,t.slots.push(l),t.selected=t.slots.indexOf(l),this.audio.place(),this.renderInv(),this.renderHeld();return}nt("No room there."),this.audio.error();return}}const o=t.selectedSlot();if(o&&o!==r){const l=Hn(o),h=Math.min(e,t.w-l.w),a=Math.min(n,t.h-l.h);if(h>=0&&a>=0&&this.tapMove(t,o,r,h,a)){this.audio.place(),t.selected=t.slots.indexOf(o),this.renderInv();return}}r?(this.setSel(t,t.slots.indexOf(r)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,r,i){const o=Hn(e);if(t.fits(r,i,o.w,o.h,e))return t.move(e,r,i);if(!n)return!1;const l=Hn(n),h=t.slots.indexOf(e);t.slots.splice(h,1);const a=t.fits(e.x,e.y,l.w,l.h,n)&&t.fits(r,i,o.w,o.h,n)&&!(r<e.x+l.w&&e.x<r+o.w&&i<e.y+l.h&&e.y<i+o.h)&&t.move(n,e.x,e.y)&&t.move(e,r,i);return t.slots.splice(h,0,e),a}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const r=n.slots.indexOf(e);this.setSel(n,r),n.slots.splice(r,1);const i=this.temp;this.temp=e,this.tempOrigin=n,i&&(n.slots.push(i),n.move(i,e.x,e.y)||this.giveOrDrop(i.itemId,1));const o=(ve.CELL+ve.GAP)*this.uiZoom(),l=ve.GAP*this.uiZoom(),h=Hn(e),a=document.createElement("div");a.className="inv-ghost",a.style.width=h.w*o-l+"px",a.style.height=h.h*o-l+"px",a.style.background=kt[e.itemId].color,a.style.backgroundImage=`url(${Oi(e.itemId,e.rot?1:0)})`,document.body.appendChild(a);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:t.clientX-(c.left+e.x*o),gy:t.clientY-(c.top+e.y*o)},p=v=>{a.style.left=v.clientX-u.gx+"px",a.style.top=v.clientY-u.gy+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(v.clientX,v.clientY))},m=v=>{if(window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m),a.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(v.clientX,v.clientY)){this.binDiscard();return}const y=Hn(e);let x=null,_=0,R=0;for(const[E,S]of this.gridsEls()){const b=E.getBoundingClientRect();if(_=Math.round((v.clientX-b.left-u.gx)/o),R=Math.round((v.clientY-b.top-u.gy)/o),_>=0&&R>=0&&_<=S.w-y.w&&R<=S.h-y.h){x=S;break}}x&&(x.slots.push(e),x.move(e,_,R)||x===n&&x.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(x,x.slots.indexOf(e))):x.slots.splice(x.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",p),window.addEventListener("mouseup",m),p(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const o=e.slots.indexOf(t);if(e.slots.splice(o,1),!ve.placeSlotFree(n,t)){e.slots.splice(o,0,t),nt(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const r=e.slots.indexOf(t);this.setSel(e,r),e.slots.splice(r,1);const i=this.temp;this.temp=t,this.tempOrigin=e,i&&(e.slots.push(i),e.move(i,t.x,t.y)||this.giveOrDrop(i.itemId,1)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(ve.CELL+ve.GAP)*this.uiZoom(),r=ve.GAP*this.uiZoom(),i=Hn(e),o=document.createElement("div");o.className="inv-ghost",o.style.width=i.w*n-r+"px",o.style.height=i.h*n-r+"px",o.style.background=kt[e.itemId].color,o.style.backgroundImage=`url(${Oi(e.itemId,e.rot?1:0)})`,document.body.appendChild(o);const l=a=>{o.style.left=a.clientX-i.w*n/2+"px",o.style.top=a.clientY-i.h*n/2+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(a.clientX,a.clientY))},h=a=>{if(window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",h),o.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(a.clientX,a.clientY)){this.binDiscard();return}const c=(i.w*n-r)/2,u=(i.h*n-r)/2;let p=null,m=0,v=0;for(const[y,x]of this.gridsEls()){const _=y.getBoundingClientRect();if(m=Math.round((a.clientX-_.left-c)/n),v=Math.round((a.clientY-_.top-u)/n),m>=0&&v>=0&&m<=x.w-i.w&&v<=x.h-i.h){p=x;break}}p&&(p.slots.push(e),p.move(e,m,v)?(this.temp=null,this.audio.place(),this.setSel(p,p.slots.indexOf(e))):(p.slots.splice(p.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",l),window.addEventListener("mouseup",h),l(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};ve.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(nt("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){nt("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":t==="armory"?"Armoury — gear that guards the body":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t!=="smelt")for(const r of td){if(t==="armory"?r.station!=="armory":r.station==="armory")continue;const i=document.createElement("div");i.className="craft-row";const o=`${kt[r.out].name}${r.count>1?" ×"+r.count:""}`,l=Object.entries(r.needs).map(([c,u])=>`${u}× ${kt[c].name}`).join(", "),h=nd(this.inv,r);i.innerHTML=`<span class="what"><img class="craft-art" src="${Oi(r.out)}" alt="">${o} <span class="needs">(${l})</span></span>`;const a=document.createElement("button");a.textContent="Craft",a.disabled=!h,a.onclick=()=>{const c=fv(this.inv,r);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(r.out,c),this.tut?.notify("craft"),kt[r.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft(t)},i.appendChild(a),e.appendChild(i)}else{const r=this.openStation,i=`${r[0]},${r[1]},${r[2]}`,o=this.campCharges.get(i)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){nt("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(i,o+3),this.syncFire(r[0],r[1],r[2]),this.renderCraft("smelt")};const l=this.equip.light;if(l){const h=l.charges??0,a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what">Head Lantern <span class="needs">(${h}/5 charges)</span></span>`;const c=document.createElement("button");c.textContent="Refuel Lantern (+1, uses 1 fuel)",c.disabled=h>=5||o<1,c.onclick=()=>{h>=5||o<1||(this.campCharges.set(i,o-1),this.syncFire(r[0],r[1],r[2]),l.charges=h+1,this.audio.place(),this.renderCraft("smelt"))},a.appendChild(c),e.appendChild(a)}for(const h of ed){const a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what"><img class="craft-art" src="${Oi(h.out)}" alt="">${kt[h.in].name} → ${kt[h.out].name}${h.n&&h.n>1?" ×"+h.n:""} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(h.in,1)||o<1,c.onclick=()=>{this.inv.removeItem(h.in,1),this.campCharges.set(i,o-1),this.syncFire(r[0],r[1],r[2]);const u=this.inv.addItem(h.out,h.n??1);u>0&&this.giveOrDrop(h.out,u),this.audio.place(),this.renderCraft("smelt")},a.appendChild(c),e.appendChild(a)}}}renderCache(){const t=this.caches.find(r=>r.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const r of t.items){const i=document.createElement("div");i.className="cache-item",i.textContent=`${r.count}× ${kt[r.itemId].name}`,e.appendChild(i)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let r=!0;for(;r;){r=!1;for(const i of t.items){const o=this.inv.addItem(i.itemId,i.count);o<i.count&&(r=!0,i.count=o),o===0&&t.items.splice(t.items.indexOf(i),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const Iv=["drone","wanderer","wanderer","caravan","caravan","nightwind"],Pv=["drone","nightwind","nightwind","caravan","wanderer"],au={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},lu=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],Lv=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],cu=[0,2,4,2,3,5,4,1],Dv=[0,0,3,2,4,3,2,0],hu={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},kv=["pluck","saw","breath","bow"];class Uv{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=hu[this.genre];breathBuf=null;root=98;deg=lu[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let r=0,i=0;for(let c=0;c<n.length;c++){const u=Math.random()*2-1;r=.99*r+.01*u,i=.96*i+.04*u,n[c]=(r+i)*2}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.noiseBuf=e;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=380;const h=this.ctx.createOscillator();h.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=100,h.connect(a).connect(l.frequency),h.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,o.connect(l).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=(.06+this.stormI*.28)*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setStorm(t){t!==this.stormI&&(this.stormI=t,this.windGain&&(this.windGain.gain.value=(.06+t*.28)*this.volume))}stormI=0;setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const r=t.createGain();r.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(r),r.connect(t.destination),[1,1.5,2].forEach((i,o)=>{const l=t.createOscillator();l.type=o===2?"sine":"triangle",l.frequency.value=this.root*i,l.detune.value=o*3-3;const h=t.createGain();h.gain.value=.03/(o+1);const a=t.createOscillator();a.frequency.value=.05+o*.017;const c=t.createGain();c.gain.value=.018,a.connect(c).connect(h.gain),a.start(),l.connect(h).connect(this.musicGain),l.start(),this.droneOscs.push(l)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?Iv:Pv;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=hu[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const r=this.isDay?lu:Lv;if(this.deg=r[Math.floor(Math.random()*r.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const i=this.ctx.currentTime;this.droneOscs.forEach((o,l)=>o.frequency.setTargetAtTime(this.root*[1,1.5,2][l],i,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=au[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,r=(o,l)=>e*o*2**(n[(l%n.length+n.length)%n.length]/12),i=au[this.genre];switch(this.genre){case"drone":{this.note(r(1,0),t,i*.95,.18),[0,2,4].forEach(o=>this.note(r(2,o),t+.05,i*.9,.03));for(let o=0;o<8;o++)Math.random()<.15||this.note(r(4,cu[o]),t+o*i/8,.9,.12);if(Math.random()<.6){const o=1+Math.floor(Math.random()*6);this.note(r(4,o),t+Math.floor(Math.random()*5)*(i/8),1.4,.13)}break}case"wanderer":{this.note(r(1,0),t,i*.55,.16);for(let o=0;o<8;o++)Math.random()<.1||this.note(r(Math.random()<.3?3:4,cu[o]),t+o*i/8,.55,.12);if(Math.random()<.7){const o=1+Math.floor(Math.random()*5);this.note(r(5,o),t+Math.floor(Math.random()*6)*(i/8),.8,.11)}break}case"nightwind":{this.note(r(1,0),t,i*.95,.15),Math.random()<.4&&[0,2,4].forEach(l=>this.note(r(2,l),t+.1,i*.85,.025));const o=1+Math.floor(Math.random()*3);for(let l=0;l<o;l++){const h=Math.floor(Math.random()*n.length),a=1.6+Math.random()*(i-1.2);this.note(r(4,h),t+Math.random()*(i-1),a,.12)}break}case"caravan":{for(let o=0;o<8;o++)(o===0||o===3||o===4)&&this.drum(t+o*i/8),o%2===1&&this.brush(t+o*i/8);this.note(r(1,0),t,i*.45,.17),this.note(r(1,3),t+i/2,i*.4,.14);for(let o=0;o<8;o++)Math.random()<.25||this.note(r(3,Dv[o]),t+o*i/8,.4,.1);if(Math.random()<.4){const o=1+Math.floor(Math.random()*4);this.note(r(4,o),t+Math.floor(Math.random()*4)*(i/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const r=this.ctx.createGain();r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(r).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=kv.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,r){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,r);break;case"saw":this.sawNote(t,e,n,r);break;case"breath":this.breathNote(t,e,n,r);break;case"bow":this.bowNote(t,e,n,r);break}}pluckNote(t,e,n,r){const i=this.ctx,o=Math.min(n,1),l=i.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(r,e+.006),l.gain.exponentialRampToValueAtTime(.001,e+o),l.connect(this.musicGain);const h=i.createOscillator();h.type="triangle",h.frequency.value=t,h.connect(l),h.start(e),h.stop(e+o+.05);const a=i.createOscillator();a.type="square",a.frequency.value=t*2.01;const c=i.createGain();c.gain.setValueAtTime(r*.22,e),c.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,o*.35)),a.connect(c).connect(l),a.start(e),a.stop(e+o)}sawNote(t,e,n,r){const i=this.ctx,o=i.createOscillator();o.type="sawtooth",o.frequency.value=t;const l=i.createBiquadFilter();l.type="lowpass",l.Q.value=.8,l.frequency.value=Math.min(3200,Math.max(700,t*6));const h=i.createGain();this.sustainEnv(h.gain,e,n,r*.7,.09),o.connect(l).connect(h).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}breathNote(t,e,n,r){const i=this.ctx;if(!this.breathBuf){const u=i.sampleRate,p=i.createBuffer(1,u*2,u),m=p.getChannelData(0);for(let v=0;v<m.length;v++)m[v]=Math.random()*2-1;this.breathBuf=p}const o=i.createBufferSource();o.buffer=this.breathBuf,o.loop=!0;const l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=10;const h=i.createGain();this.sustainEnv(h.gain,e,n,r*1.6,.22),o.connect(l).connect(h).connect(this.musicGain),o.start(e,Math.random()*1.9),o.stop(e+n+.05);const a=i.createOscillator();a.type="sine",a.frequency.value=t;const c=i.createGain();this.sustainEnv(c.gain,e,n,r*.8,.3),a.connect(c).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}bowNote(t,e,n,r){const i=this.ctx,o=i.createOscillator();o.type="sawtooth",o.frequency.value=t;const l=i.createOscillator();l.frequency.value=5.2;const h=i.createGain();h.gain.value=5,l.connect(h).connect(o.detune),l.start(e),l.stop(e+n+.05);const a=i.createBiquadFilter();a.type="lowpass",a.Q.value=.7,a.frequency.value=Math.min(2600,Math.max(600,t*4));const c=i.createGain();this.sustainEnv(c.gain,e,n,r*.8,Math.min(.35,n*.3)),o.connect(a).connect(c).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}sustainEnv(t,e,n,r,i){const o=Math.min(i,n*.5),l=e+o+(n-o)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(r,e+o),t.setValueAtTime(r,l),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,r=.2,i=0){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,o),i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+i),o+e),h.gain.setValueAtTime(r*this.volume,o),h.gain.exponentialRampToValueAtTime(.001,o+e),l.connect(h).connect(this.ctx.destination),l.start(o),l.stop(o+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const r=this.ctx.currentTime,i=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(i*t)),i),l=o.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=(Math.random()*2-1)*(1-u/l.length);const h=this.ctx.createBufferSource();h.buffer=o;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=e;const c=this.ctx.createGain();c.gain.value=n*this.volume,h.connect(a).connect(c).connect(this.ctx.destination),h.start(r)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const Yt=s=>document.getElementById(s),uu=s=>Yt(s).value,_n=(s,t=!0)=>Yt(s).classList.toggle("hidden",!t),Nv=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],yc=()=>Nv.forEach(s=>_n(s,!1)),Wo=new Uv;let ge=xv(),Ft=null;document.addEventListener("click",()=>Wo.resume(),{once:!0});document.addEventListener("touchstart",()=>Wo.resume(),{once:!0});function ea(){yc(),_n("screen-title"),Yt("best-score").textContent=kr()>0?`Best run: ${kr().toFixed(1)} days`:"";const s=Yt("worldlist");s.innerHTML="";const t=ta();t.length||(s.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const r=ld(e.id),i=document.createElement("span");i.textContent=`${e.name} — seed “${e.seedStr}” — ${r?`day ${r.days}, survived ${(r.playSec/Ve).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>na(e,r);const l=document.createElement("button");l.textContent="Export",l.onclick=()=>{r?cd(e,r):nt("Nothing saved for this world yet.")};const h=document.createElement("button");h.textContent="Delete",h.onclick=()=>{h.textContent==="Sure?"?(Mv(e.id),ea()):(h.textContent="Sure?",setTimeout(()=>h.textContent="Delete",2500))},n.append(i,o,l,h),s.appendChild(n)}}function na(s,t){yc(),_n("cheats",!1),Yt("hud").classList.remove("hidden"),ge.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),Yt("btn-save").classList.toggle("hidden",s.id.startsWith("guest")),Yt("btn-exportworld").classList.toggle("hidden",s.id.startsWith("guest")),Wo.resume(),Ft=new ve(s,t,Yt("game-wrap"),ge,Wo),globalThis.game=Ft,Ft.start(),t===null&&Ft.startTutorial()}function Mc(){Ft&&(Ft.saveNow(),Ft.stop()),Ft=null,delete globalThis.game,Yt("hud").classList.add("hidden"),ea()}function bc(s){yc(),_n(s)}function Fv(){Ft&&(Ft.pauseSubmenu=null),_n("screen-settings",!1),_n("screen-instructions",!1),_n("screen-catalog",!1),Ft?(_n("ui-inventory",!1),_n("ui-craft",!1),_n("ui-cache",!1),_n("ui-trade",!1),_n("screen-pause",!1),Ft.paused=!1,Ft.relock()):ea()}function Sc(){Ft&&(Ft.pauseSubmenu=Ft.paused?"settings":null),bc("screen-settings");const s=Yt("settings-body");s.innerHTML="";const t=(e,n,r,i)=>{const o=document.createElement("div");o.className="setting";const l=document.createElement("span");l.textContent=e;const h=document.createElement("div");h.className="seg";const a=[];for(const[c,u]of n){const p=document.createElement("button");p.type="button",p.textContent=c,String(u)===String(r)&&p.classList.add("on"),p.onclick=()=>{for(const m of a)m.classList.remove("on");p.classList.add("on"),i(u)},a.push(p),h.appendChild(p)}o.append(l,h),s.appendChild(o)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],ge.sens,e=>{ge.sens=e,Zn()}),t("Invert Y",[["Off",!1],["On",!0]],ge.invertY,e=>{ge.invertY=e,Zn()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],ge.volume,e=>{ge.volume=e,Zn()}),t("Music",[["Off",!1],["On",!0]],ge.music,e=>{ge.music=e,Zn()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],ge.fov,e=>{ge.fov=e,Zn()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],ge.renderDist,e=>{ge.renderDist=e,Zn()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],ge.quality,e=>{ge.quality=e,Zn()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],ge.lighting,e=>{ge.lighting=e,Zn()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],ge.units,e=>{ge.units=e,Zn()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],ge.uiScale,e=>{ge.uiScale=e,Zn()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],ge.fullscreen,e=>{ge.fullscreen=e,Zn(),e?document.documentElement.requestFullscreen().catch(()=>{ge.fullscreen=!1,Zn(),Sc()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),s.appendChild(e)}}function ud(s){document.documentElement.style.setProperty("--ui-scale",String(s))}function Zn(){yv(ge),ud(ge.uiScale),Ft&&Ft.applySettings(ge)}let jl="items";function wc(){Ft&&(Ft.pauseSubmenu=Ft.paused?"catalog":null),bc("screen-catalog");for(const t of Array.from(Yt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===jl);const s=Yt("catalog-body");if(s.innerHTML="",jl==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,r,i,o)=>{const l=document.createElement("div");l.className="cat-card";const h=document.createElement("img");h.src=n,h.alt="";const a=document.createElement("div");a.innerHTML=`<b>${r}</b><div class="cat-meta">${i}</div><div class="cat-desc">${o}</div>`,l.append(h,a),t.append(l)};for(const n of Object.values(kt).sort((r,i)=>r.name.localeCompare(i.name)))e(Oi(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of vn){if(n.id===0||n.name==="Air")continue;const r=Object.values(kt).find(o=>o.block===n.id),i=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(r?Oi(r.id):Sv(n.id),n.name,i,r?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}s.append(t)}else{const t=(e,n,r,i)=>{const o=document.createElement("div");o.className="cat-recipe";const l=document.createElement("img");l.src=e,l.alt="",l.style.width="36px",l.style.height="36px",l.style.imageRendering="pixelated",o.append(l,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${r}</b> <span class="needs">(${i})</span>`})),s.append(o)};for(const e of td){const n=Object.entries(e.needs).map(([r,i])=>`${i}× ${kt[r].name}`).join(" + ");t(Oi(e.out),n,`${kt[e.out].name}${e.count>1?" ×"+e.count:""}`,e.station===null?"hands":e.station==="armory"?"Armoury":"Crafting Bench")}for(const e of ed)t(Oi(e.out),`1× ${kt[e.in].name}`,`${kt[e.out].name}${e.n&&e.n>1?" ×"+e.n:""}`,"Campfire, 1 fuel charge")}}for(const s of Array.from(Yt("catalog-tabs").querySelectorAll(".tab")))s.onclick=()=>{jl=s.dataset.tab,wc()};const Ov=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Falls","falling more than 4 blocks hurts — about 16 blocks without armour is fatal; land in water or climb down"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Iron Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire (hold Wood or Kindling and press E to feed the fire), Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches, trade with a camp Trader, Broken Thruster on a wingtip (needs a Thruster Nozzle)"],["R","turn a held built block a quarter turn (Crafting Bench, Bed, Thruster, walls …); R with anything else tosses it away"],["T","toggle the Head Lantern — it burns one fuel charge per 4 game-minutes; refuel it at a Campfire"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 5 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],Bv=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / LAMP / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function dd(){Ft&&(Ft.pauseSubmenu=Ft.paused?"instructions":null),bc("screen-instructions");const s=Yt("instr-body");s.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?Bv:Ov;for(const[n,r]of t){const i=document.createElement("div");i.innerHTML=`<b>${n}</b> — ${r}`,s.appendChild(i)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. Walls block the wind but not heat: a sealed room's air drifts toward the outside temperature. Only Heat Regulator blocks hold a sealed room at ~37 °C — each covers 150 cells, they stack in bigger rooms; the Ship Interior comes with one. Direct midday sun adds a punishing +8…18 °C — shade from rocks, dunes and walls cancels it; at night the desert freezes you. Dig into the Caves: two or more cells under the terrain the air sits at a constant mild ~22 °C, and shelter there lets your body claw back toward 36.6 °C. That is the refuge — but it is dark (wear a Head Lantern, toggle with T), Scorpions and Sand Wurms live only down there, and Cobalt Ore — the one thing that can fix the Ship's engines — hides there too. The goal: mine Cobalt, smelt and craft four Thruster Nozzles, press E at each Broken Thruster on the wingtips, and lift off. Or just keep surviving and beat your best day count. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, Kangaroo Rats bolt, Scorpions and Wurms ambush in the dark — hunt what you can, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor, Armour, Regulator and Light go in the five Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it. The desert is bigger than it looks: Trader Camps — a windmill, a hut, a farmstead — dot the wastes hundreds of steps out, and the robed Trader there barters goods for goods; no coin, and the offer table restocks every in-game day. Watch the sky: a Sandstorm rolls in without warning — when the wind roars, get behind walls or dig in, because the open air will bake you, drink you dry and scour your skin. Arched Cave Mouths gape in rocky slopes and lead straight down to the Caves. Vultures circle the healthy but dive at the wounded; hunt Thornback Tortoises for shell armour, Fennec Foxes for pelts, and bring the skins, shells and hides back to the Trader.",s.appendChild(e)}Yt("btn-create").onclick=()=>{const s=uu("seed-input").trim()||Math.random().toString(36).slice(2,10),t=uu("world-name").trim()||s,e=od(t,s);na(e,null)};Yt("btn-guest").onclick=()=>{const s=Math.random().toString(36).slice(2,10);na({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:s,updated:Date.now()},null)};Yt("btn-import").onclick=()=>Yt("import-file").click();Yt("import-file").onchange=async()=>{const s=Yt("import-file").files?.[0];if(s)try{const t=await bv(s);nt("World imported."),na(t,ld(t.id))}catch(t){nt(`Import failed: ${t.message}`)}};Yt("btn-settings").onclick=Sc;Yt("btn-pause-settings").onclick=Sc;Yt("btn-instructions").onclick=dd;Yt("btn-pause-instructions").onclick=dd;Yt("btn-catalog").onclick=wc;Yt("btn-catalog-title").onclick=wc;for(const s of document.querySelectorAll(".close-btn"))s.onclick=()=>{if(Ft&&Ft.pauseSubmenu){Ft.closePauseSubmenu();return}Ft&&Ft.closeUI(),(!Ft||!(Ft.ui==="inv"&&Ft.temp))&&Fv()};Yt("btn-resume").onclick=()=>{Ft&&(Ft.paused=!1,_n("screen-pause",!1),_n("cheats",!1),Ft.relock())};Yt("btn-save").onclick=()=>nt("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");Yt("btn-exportworld").onclick=()=>{Ft&&Ft.exportWorld()};Yt("btn-quit").onclick=()=>Mc();Yt("btn-cheats").onclick=()=>_n("cheats",Yt("cheats").classList.contains("hidden"));const fd=Yt("cheat-item");for(const[s,t]of Object.entries(kt).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=s,e.textContent=t.name,fd.appendChild(e)}Yt("btn-cheat-add").onclick=()=>{if(!Ft)return;const s=fd.value;Ft.inv.addItem(s,1)?nt("No room in your pack."):nt(`Added ${kt[s].name}.`)};const Ec=Yt("cheat-quest");vi.forEach((s,t)=>{const e=document.createElement("option");e.value=String(t),e.textContent=`${t+1}. ${s.title}`,Ec.appendChild(e)});{const s=document.createElement("option");s.value=String(vi.length),s.textContent="Finish the whole chain",Ec.appendChild(s)}Yt("btn-cheat-quest").onclick=()=>{Ft&&Ft.questJump(Number(Ec.value))};for(const s of Array.from(Yt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))s.onclick=()=>{if(!Ft)return;if(s.dataset.speed!==void 0){Ft.speedMul=Number(s.dataset.speed),nt(`Player speed ×${s.dataset.speed}.`);return}if(s.dataset.immortal!==void 0){Ft.survival.invincible=s.dataset.immortal==="1",nt(`Immortality ${Ft.survival.invincible?"on":"off"}.`);return}const t=Number(s.dataset.frac);Ft.setClock(t),nt(`Clock set to ${s.textContent}.`)};Yt("btn-respawn").onclick=()=>{Ft&&Ft.respawn()};Yt("btn-death-title").onclick=()=>Mc();Yt("btn-win-continue").onclick=()=>{Ft&&(Ft.paused=!1,_n("screen-win",!1),Ft.relock())};Yt("btn-win-title").onclick=()=>Mc();document.addEventListener("keydown",s=>{if(s.code==="Escape"&&!Yt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});ud(ge.uiScale);ea();
