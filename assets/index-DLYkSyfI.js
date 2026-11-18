(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="180",Ad=0,Nc=1,Rd=2,xu=1,Cd=2,Pi=3,es=0,Nn=1,qe=2,Ji=0,js=1,Fc=2,Oc=3,Bc=4,Id=5,_s=100,Pd=101,Ld=102,Dd=103,kd=104,Ud=200,Nd=201,Fd=202,Od=203,nl=204,il=205,Bd=206,zd=207,Hd=208,Gd=209,Vd=210,Wd=211,qd=212,Xd=213,$d=214,sl=0,rl=1,ol=2,Qs=3,al=4,ll=5,cl=6,hl=7,nc=0,Yd=1,Kd=2,Qi=0,jd=1,Zd=2,Jd=3,Qd=4,tf=5,ef=6,nf=7,yu=300,tr=301,er=302,ul=303,dl=304,$o=306,fl=1e3,Ms=1001,pl=1002,Xn=1003,sf=1004,Kr=1005,gi=1006,aa=1007,bs=1008,bi=1009,Mu=1010,bu=1011,Cr=1012,ic=1013,Ts=1014,Ui=1015,Fr=1016,sc=1017,rc=1018,Ir=1020,Su=35902,wu=35899,Eu=1021,Tu=1022,hi=1023,Pr=1026,Lr=1027,Au=1028,oc=1029,Ru=1030,ac=1031,lc=1033,Co=33776,Io=33777,Po=33778,Lo=33779,ml=35840,gl=35841,_l=35842,vl=35843,xl=36196,yl=37492,Ml=37496,bl=37808,Sl=37809,wl=37810,El=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Il=37816,Pl=37817,Ll=37818,Dl=37819,kl=37820,Ul=37821,Nl=36492,Fl=36494,Ol=36495,Bl=36283,zl=36284,Hl=36285,Gl=36286,rf=3200,of=3201,Cu=0,af=1,ji="",Dn="srgb",nr="srgb-linear",Fo="linear",be="srgb",ks=7680,zc=519,lf=512,cf=513,hf=514,Iu=515,uf=516,df=517,ff=518,pf=519,Hc=35044,Gc="300 es",_i=2e3,Oo=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const Zs=Math.PI/180,Dr=180/Math.PI;function or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function mf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function gf(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function _f(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function vf(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bf(i,t){return i+Math.random()*(t-i)}function Sf(i){return i*(.5-Math.random())}function wf(i){i!==void 0&&(Vc=i);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ef(i){return i*Zs}function Tf(i){return i*Dr}function Af(i){return(i&i-1)===0&&i!==0}function Rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function If(i,t,e,n,r){const o=Math.cos,s=Math.sin,l=o(e/2),h=s(e/2),a=o((t+n)/2),c=s((t+n)/2),u=o((t-n)/2),f=s((t-n)/2),m=o((n-t)/2),v=s((n-t)/2);switch(r){case"XYX":i.set(l*c,h*u,h*f,l*a);break;case"YZY":i.set(h*f,l*c,h*u,l*a);break;case"ZXZ":i.set(h*u,h*f,l*c,l*a);break;case"XZX":i.set(l*c,h*v,h*m,l*a);break;case"YXY":i.set(h*m,l*c,h*v,l*a);break;case"ZYZ":i.set(h*v,h*m,l*c,l*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vi={DEG2RAD:Zs,RAD2DEG:Dr,generateUUID:or,clamp:re,euclideanModulo:cc,mapLinear:mf,inverseLerp:gf,lerp:Er,damp:_f,pingpong:vf,smoothstep:xf,smootherstep:yf,randInt:Mf,randFloat:bf,randFloatSpread:Sf,seededRandom:wf,degToRad:Ef,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Rf,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:If,normalize:bn,denormalize:Ys};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Or{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,l){let h=n[r+0],a=n[r+1],c=n[r+2],u=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],y=o[s+3];if(l===0){t[e+0]=h,t[e+1]=a,t[e+2]=c,t[e+3]=u;return}if(l===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=y;return}if(u!==y||h!==f||a!==m||c!==v){let x=1-l;const _=h*f+a*m+c*v+u*y,A=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const b=Math.sqrt(E),I=Math.atan2(b,_*A);x=Math.sin(x*I)/b,l=Math.sin(l*I)/b}const S=l*A;if(h=h*x+f*S,a=a*x+m*S,c=c*x+v*S,u=u*x+y*S,x===1-l){const b=1/Math.sqrt(h*h+a*a+c*c+u*u);h*=b,a*=b,c*=b,u*=b}}t[e]=h,t[e+1]=a,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){const l=n[r],h=n[r+1],a=n[r+2],c=n[r+3],u=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return t[e]=l*v+c*u+h*m-a*f,t[e+1]=h*v+c*f+a*u-l*m,t[e+2]=a*v+c*m+l*f-h*u,t[e+3]=c*v-l*u-h*f-a*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,s=t._order,l=Math.cos,h=Math.sin,a=l(n/2),c=l(r/2),u=l(o/2),f=h(n/2),m=h(r/2),v=h(o/2);switch(s){case"XYZ":this._x=f*c*u+a*m*v,this._y=a*m*u-f*c*v,this._z=a*c*v+f*m*u,this._w=a*c*u-f*m*v;break;case"YXZ":this._x=f*c*u+a*m*v,this._y=a*m*u-f*c*v,this._z=a*c*v-f*m*u,this._w=a*c*u+f*m*v;break;case"ZXY":this._x=f*c*u-a*m*v,this._y=a*m*u+f*c*v,this._z=a*c*v+f*m*u,this._w=a*c*u-f*m*v;break;case"ZYX":this._x=f*c*u-a*m*v,this._y=a*m*u+f*c*v,this._z=a*c*v-f*m*u,this._w=a*c*u+f*m*v;break;case"YZX":this._x=f*c*u+a*m*v,this._y=a*m*u+f*c*v,this._z=a*c*v-f*m*u,this._w=a*c*u-f*m*v;break;case"XZY":this._x=f*c*u-a*m*v,this._y=a*m*u-f*c*v,this._z=a*c*v+f*m*u,this._w=a*c*u+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],l=e[5],h=e[9],a=e[2],c=e[6],u=e[10],f=n+l+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(o-a)*m,this._z=(s-r)*m}else if(n>l&&n>u){const m=2*Math.sqrt(1+n-l-u);this._w=(c-h)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+a)/m}else if(l>u){const m=2*Math.sqrt(1+l-n-u);this._w=(o-a)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+u-n-l);this._w=(s-r)/m,this._x=(o+a)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,s=t._w,l=e._x,h=e._y,a=e._z,c=e._w;return this._x=n*c+s*l+r*a-o*h,this._y=r*c+s*h+o*l-n*a,this._z=o*c+s*a+n*h-r*l,this._w=s*c-n*l-r*h-o*a,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,s=this._w;let l=s*t._w+n*t._x+r*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const h=1-l*l;if(h<=Number.EPSILON){const m=1-e;return this._w=m*s+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const a=Math.sqrt(h),c=Math.atan2(a,l),u=Math.sin((1-e)*c)/a,f=Math.sin(e*c)/a;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,l=t.z,h=t.w,a=2*(s*r-l*n),c=2*(l*e-o*r),u=2*(o*n-s*e);return this.x=e+h*a+s*u-l*c,this.y=n+h*c+l*a-o*u,this.z=r+h*u+o*c-s*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,s=e.x,l=e.y,h=e.z;return this.x=r*h-o*l,this.y=o*s-n*h,this.z=n*l-r*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new F,Wc=new Or;class jt{constructor(t,e,n,r,o,s,l,h,a){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,l,h,a)}set(t,e,n,r,o,s,l,h,a){const c=this.elements;return c[0]=t,c[1]=r,c[2]=l,c[3]=e,c[4]=o,c[5]=h,c[6]=n,c[7]=s,c[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,s=n[0],l=n[3],h=n[6],a=n[1],c=n[4],u=n[7],f=n[2],m=n[5],v=n[8],y=r[0],x=r[3],_=r[6],A=r[1],E=r[4],S=r[7],b=r[2],I=r[5],R=r[8];return o[0]=s*y+l*A+h*b,o[3]=s*x+l*E+h*I,o[6]=s*_+l*S+h*R,o[1]=a*y+c*A+u*b,o[4]=a*x+c*E+u*I,o[7]=a*_+c*S+u*R,o[2]=f*y+m*A+v*b,o[5]=f*x+m*E+v*I,o[8]=f*_+m*S+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],h=t[6],a=t[7],c=t[8];return e*s*c-e*l*a-n*o*c+n*l*h+r*o*a-r*s*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],h=t[6],a=t[7],c=t[8],u=c*s-l*a,f=l*h-c*o,m=a*o-s*h,v=e*u+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=u*y,t[1]=(r*a-c*n)*y,t[2]=(l*n-r*s)*y,t[3]=f*y,t[4]=(c*e-r*h)*y,t[5]=(r*o-l*e)*y,t[6]=m*y,t[7]=(n*h-a*e)*y,t[8]=(s*e-n*o)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,l){const h=Math.cos(o),a=Math.sin(o);return this.set(n*h,n*a,-n*(h*s+a*l)+s+t,-r*a,r*h,-r*(-a*s+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new jt;function Pu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pf(){const i=Bo("canvas");return i.style.display="block",i}const qc={};function kr(i){i in qc||(qc[i]=!0,console.warn(i))}function Lf(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Xc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){const i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===be&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===be&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ji?Fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:t,whitePoint:n,transfer:Fo,toXYZ:Xc,fromXYZ:$c,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Xc,fromXYZ:$c,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),i}const pe=Df();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class kf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=Bo("canvas")),Us.width=t.width,Us.height=t.height;const r=Us.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Oi(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uf=0;class hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,l=r.length;s<l;s++)r[s].isDataTexture?o.push(ha(r[s].image)):o.push(ha(r[s]))}else o=ha(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nf=0;const ua=new F;class Rn extends rr{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,n=Ms,r=Ms,o=gi,s=bs,l=hi,h=bi,a=Rn.DEFAULT_ANISOTROPY,c=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=or(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fl:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fl:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=yu;Rn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const h=t.elements,a=h[0],c=h[4],u=h[8],f=h[1],m=h[5],v=h[9],y=h[2],x=h[6],_=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+y)<.1&&Math.abs(v+x)<.1&&Math.abs(a+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(a+1)/2,S=(m+1)/2,b=(_+1)/2,I=(c+f)/4,R=(u+y)/4,p=(v+x)/4;return E>S&&E>b?E<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(E),r=I/n,o=R/n):S>b?S<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),n=I/r,o=p/r):b<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),n=R/o,r=p/o),this.set(n,r,o,e),this}let A=Math.sqrt((x-v)*(x-v)+(u-y)*(u-y)+(f-c)*(f-c));return Math.abs(A)<.001&&(A=1),this.x=(x-v)/A,this.y=(u-y)/A,this.z=(f-c)/A,this.w=Math.acos((a+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ff extends rr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:n.depth},o=new Rn(r);this.textures=[];const s=n.count;for(let l=0;l<s;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new hc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends Ff{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lu extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Of extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,l=o.count;s<l;s++)t.isMesh===!0?t.getVertexPosition(s,si):si.fromBufferAttribute(o,s),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}const r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),Zr.subVectors(this.max,dr),Ns.subVectors(t.a,dr),Fs.subVectors(t.b,dr),Os.subVectors(t.c,dr),Gi.subVectors(Fs,Ns),Vi.subVectors(Os,Fs),ls.subVectors(Ns,Os);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-ls.z,ls.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,ls.z,0,-ls.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-ls.y,ls.x,0];return!da(e,Ns,Fs,Os,Zr)||(e=[1,0,0,0,1,0,0,0,1],!da(e,Ns,Fs,Os,Zr))?!1:(Jr.crossVectors(Gi,Vi),e=[Jr.x,Jr.y,Jr.z],da(e,Ns,Fs,Os,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ti=[new F,new F,new F,new F,new F,new F,new F,new F],si=new F,jr=new Br,Ns=new F,Fs=new F,Os=new F,Gi=new F,Vi=new F,ls=new F,dr=new F,Zr=new F,Jr=new F,cs=new F;function da(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){cs.fromArray(i,o);const l=r.x*Math.abs(cs.x)+r.y*Math.abs(cs.y)+r.z*Math.abs(cs.z),h=t.dot(cs),a=e.dot(cs),c=n.dot(cs);if(Math.max(-Math.max(h,a,c),Math.min(h,a,c))>l)return!1}return!0}const Bf=new Br,fr=new F,fa=new F;class zr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bf.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(fr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(fa)),this.expandByPoint(fr.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ai=new F,pa=new F,Qr=new F,Wi=new F,ma=new F,to=new F,ga=new F;class uc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){pa.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(pa);const o=t.distanceTo(e)*.5,s=-this.direction.dot(Qr),l=Wi.dot(this.direction),h=-Wi.dot(Qr),a=Wi.lengthSq(),c=Math.abs(1-s*s);let u,f,m,v;if(c>0)if(u=s*h-l,f=s*l-h,v=o*c,u>=0)if(f>=-v)if(f<=v){const y=1/c;u*=y,f*=y,m=u*(u+s*f+2*l)+f*(s*u+f+2*h)+a}else f=o,u=Math.max(0,-(s*f+l)),m=-u*u+f*(f+2*h)+a;else f=-o,u=Math.max(0,-(s*f+l)),m=-u*u+f*(f+2*h)+a;else f<=-v?(u=Math.max(0,-(-s*o+l)),f=u>0?-o:Math.min(Math.max(-o,-h),o),m=-u*u+f*(f+2*h)+a):f<=v?(u=0,f=Math.min(Math.max(-o,-h),o),m=f*(f+2*h)+a):(u=Math.max(0,-(s*o+l)),f=u>0?o:Math.min(Math.max(-o,-h),o),m=-u*u+f*(f+2*h)+a);else f=s>0?-o:o,u=Math.max(0,-(s*f+l)),m=-u*u+f*(f+2*h)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pa).addScaledVector(Qr,f),m}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),r=Ai.dot(Ai)-n*n,o=t.radius*t.radius;if(r>o)return null;const s=Math.sqrt(o-r),l=n-s,h=n+s;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,l,h;const a=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return a>=0?(n=(t.min.x-f.x)*a,r=(t.max.x-f.x)*a):(n=(t.max.x-f.x)*a,r=(t.min.x-f.x)*a),c>=0?(o=(t.min.y-f.y)*c,s=(t.max.y-f.y)*c):(o=(t.max.y-f.y)*c,s=(t.min.y-f.y)*c),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(l=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,r,o){ma.subVectors(e,t),to.subVectors(n,t),ga.crossVectors(ma,to);let s=this.direction.dot(ga),l;if(s>0){if(r)return null;l=1}else if(s<0)l=-1,s=-s;else return null;Wi.subVectors(this.origin,t);const h=l*this.direction.dot(to.crossVectors(Wi,to));if(h<0)return null;const a=l*this.direction.dot(ma.cross(Wi));if(a<0||h+a>s)return null;const c=-l*Wi.dot(ga);return c<0?null:this.at(c/s,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,r,o,s,l,h,a,c,u,f,m,v,y,x){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,l,h,a,c,u,f,m,v,y,x)}set(t,e,n,r,o,s,l,h,a,c,u,f,m,v,y,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=o,_[5]=s,_[9]=l,_[13]=h,_[2]=a,_[6]=c,_[10]=u,_[14]=f,_[3]=m,_[7]=v,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Bs.setFromMatrixColumn(t,0).length(),o=1/Bs.setFromMatrixColumn(t,1).length(),s=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),l=Math.sin(n),h=Math.cos(r),a=Math.sin(r),c=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=s*c,m=s*u,v=l*c,y=l*u;e[0]=h*c,e[4]=-h*u,e[8]=a,e[1]=m+v*a,e[5]=f-y*a,e[9]=-l*h,e[2]=y-f*a,e[6]=v+m*a,e[10]=s*h}else if(t.order==="YXZ"){const f=h*c,m=h*u,v=a*c,y=a*u;e[0]=f+y*l,e[4]=v*l-m,e[8]=s*a,e[1]=s*u,e[5]=s*c,e[9]=-l,e[2]=m*l-v,e[6]=y+f*l,e[10]=s*h}else if(t.order==="ZXY"){const f=h*c,m=h*u,v=a*c,y=a*u;e[0]=f-y*l,e[4]=-s*u,e[8]=v+m*l,e[1]=m+v*l,e[5]=s*c,e[9]=y-f*l,e[2]=-s*a,e[6]=l,e[10]=s*h}else if(t.order==="ZYX"){const f=s*c,m=s*u,v=l*c,y=l*u;e[0]=h*c,e[4]=v*a-m,e[8]=f*a+y,e[1]=h*u,e[5]=y*a+f,e[9]=m*a-v,e[2]=-a,e[6]=l*h,e[10]=s*h}else if(t.order==="YZX"){const f=s*h,m=s*a,v=l*h,y=l*a;e[0]=h*c,e[4]=y-f*u,e[8]=v*u+m,e[1]=u,e[5]=s*c,e[9]=-l*c,e[2]=-a*c,e[6]=m*u+v,e[10]=f-y*u}else if(t.order==="XZY"){const f=s*h,m=s*a,v=l*h,y=l*a;e[0]=h*c,e[4]=-u,e[8]=a*c,e[1]=f*u+y,e[5]=s*c,e[9]=m*u-v,e[2]=v*u-m,e[6]=l*c,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zf,t,Hf)}lookAt(t,e,n){const r=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),qi.crossVectors(n,Bn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),qi.crossVectors(n,Bn)),qi.normalize(),eo.crossVectors(Bn,qi),r[0]=qi.x,r[4]=eo.x,r[8]=Bn.x,r[1]=qi.y,r[5]=eo.y,r[9]=Bn.y,r[2]=qi.z,r[6]=eo.z,r[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,s=n[0],l=n[4],h=n[8],a=n[12],c=n[1],u=n[5],f=n[9],m=n[13],v=n[2],y=n[6],x=n[10],_=n[14],A=n[3],E=n[7],S=n[11],b=n[15],I=r[0],R=r[4],p=r[8],d=r[12],g=r[1],M=r[5],C=r[9],L=r[13],k=r[2],N=r[6],H=r[10],Y=r[14],V=r[3],J=r[7],tt=r[11],vt=r[15];return o[0]=s*I+l*g+h*k+a*V,o[4]=s*R+l*M+h*N+a*J,o[8]=s*p+l*C+h*H+a*tt,o[12]=s*d+l*L+h*Y+a*vt,o[1]=c*I+u*g+f*k+m*V,o[5]=c*R+u*M+f*N+m*J,o[9]=c*p+u*C+f*H+m*tt,o[13]=c*d+u*L+f*Y+m*vt,o[2]=v*I+y*g+x*k+_*V,o[6]=v*R+y*M+x*N+_*J,o[10]=v*p+y*C+x*H+_*tt,o[14]=v*d+y*L+x*Y+_*vt,o[3]=A*I+E*g+S*k+b*V,o[7]=A*R+E*M+S*N+b*J,o[11]=A*p+E*C+S*H+b*tt,o[15]=A*d+E*L+S*Y+b*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],l=t[5],h=t[9],a=t[13],c=t[2],u=t[6],f=t[10],m=t[14],v=t[3],y=t[7],x=t[11],_=t[15];return v*(+o*h*u-r*a*u-o*l*f+n*a*f+r*l*m-n*h*m)+y*(+e*h*m-e*a*f+o*s*f-r*s*m+r*a*c-o*h*c)+x*(+e*a*u-e*l*m-o*s*u+n*s*m+o*l*c-n*a*c)+_*(-r*l*c-e*h*u+e*l*f+r*s*u-n*s*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],l=t[5],h=t[6],a=t[7],c=t[8],u=t[9],f=t[10],m=t[11],v=t[12],y=t[13],x=t[14],_=t[15],A=u*x*a-y*f*a+y*h*m-l*x*m-u*h*_+l*f*_,E=v*f*a-c*x*a-v*h*m+s*x*m+c*h*_-s*f*_,S=c*y*a-v*u*a+v*l*m-s*y*m-c*l*_+s*u*_,b=v*u*h-c*y*h-v*l*f+s*y*f+c*l*x-s*u*x,I=e*A+n*E+r*S+o*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=A*R,t[1]=(y*f*o-u*x*o-y*r*m+n*x*m+u*r*_-n*f*_)*R,t[2]=(l*x*o-y*h*o+y*r*a-n*x*a-l*r*_+n*h*_)*R,t[3]=(u*h*o-l*f*o-u*r*a+n*f*a+l*r*m-n*h*m)*R,t[4]=E*R,t[5]=(c*x*o-v*f*o+v*r*m-e*x*m-c*r*_+e*f*_)*R,t[6]=(v*h*o-s*x*o-v*r*a+e*x*a+s*r*_-e*h*_)*R,t[7]=(s*f*o-c*h*o+c*r*a-e*f*a-s*r*m+e*h*m)*R,t[8]=S*R,t[9]=(v*u*o-c*y*o-v*n*m+e*y*m+c*n*_-e*u*_)*R,t[10]=(s*y*o-v*l*o+v*n*a-e*y*a-s*n*_+e*l*_)*R,t[11]=(c*l*o-s*u*o-c*n*a+e*u*a+s*n*m-e*l*m)*R,t[12]=b*R,t[13]=(c*y*r-v*u*r+v*n*f-e*y*f-c*n*x+e*u*x)*R,t[14]=(v*l*r-s*y*r-v*n*h+e*y*h+s*n*x-e*l*x)*R,t[15]=(s*u*r-c*l*r+c*n*h-e*u*h-s*n*f+e*l*f)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,l=t.y,h=t.z,a=o*s,c=o*l;return this.set(a*s+n,a*l-r*h,a*h+r*l,0,a*l+r*h,c*l+n,c*h-r*s,0,a*h-r*l,c*h+r*s,o*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,s=e._y,l=e._z,h=e._w,a=o+o,c=s+s,u=l+l,f=o*a,m=o*c,v=o*u,y=s*c,x=s*u,_=l*u,A=h*a,E=h*c,S=h*u,b=n.x,I=n.y,R=n.z;return r[0]=(1-(y+_))*b,r[1]=(m+S)*b,r[2]=(v-E)*b,r[3]=0,r[4]=(m-S)*I,r[5]=(1-(f+_))*I,r[6]=(x+A)*I,r[7]=0,r[8]=(v+E)*R,r[9]=(x-A)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=Bs.set(r[0],r[1],r[2]).length();const s=Bs.set(r[4],r[5],r[6]).length(),l=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],ri.copy(this);const a=1/o,c=1/s,u=1/l;return ri.elements[0]*=a,ri.elements[1]*=a,ri.elements[2]*=a,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,e.setFromRotationMatrix(ri),n.x=o,n.y=s,n.z=l,this}makePerspective(t,e,n,r,o,s,l=_i,h=!1){const a=this.elements,c=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),m=(n+r)/(n-r);let v,y;if(h)v=o/(s-o),y=s*o/(s-o);else if(l===_i)v=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(l===Oo)v=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,r,o,s,l=_i,h=!1){const a=this.elements,c=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),m=-(n+r)/(n-r);let v,y;if(h)v=1/(s-o),y=s/(s-o);else if(l===_i)v=-2/(s-o),y=-(s+o)/(s-o);else if(l===Oo)v=-1/(s-o),y=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=u,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bs=new F,ri=new Ie,zf=new F(0,0,0),Hf=new F(1,1,1),qi=new F,eo=new F,Bn=new F,Yc=new Ie,Kc=new Or;class Si{constructor(t=0,e=0,n=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],s=r[4],l=r[8],h=r[1],a=r[5],c=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(h,a)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-s,a));break;case"YZX":this._z=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,a),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-re(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gf=0;const jc=new F,zs=new Or,Ri=new Ie,no=new F,pr=new F,Vf=new F,Wf=new Or,Zc=new F(1,0,0),Jc=new F(0,1,0),Qc=new F(0,0,1),th={type:"added"},qf={type:"removed"},Hs={type:"childadded",child:null},_a={type:"childremoved",child:null};class en extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new F,e=new Si,n=new Or,r=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new jt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(pr,no,this.up):Ri.lookAt(no,pr,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Ri),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(th),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(th),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let a=0,c=h.length;a<c;a++){const u=h[a];o(t.shapes,u)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,a=this.material.length;h<a;h++)l.push(o(t.materials,this.material[h]));r.material=l}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(o(t.animations,h))}}if(e){const l=s(t.geometries),h=s(t.materials),a=s(t.textures),c=s(t.images),u=s(t.shapes),f=s(t.skeletons),m=s(t.animations),v=s(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),a.length>0&&(n.textures=a),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(l){const h=[];for(const a in l){const c=l[a];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new F,Ci=new F,va=new F,Ii=new F,Gs=new F,Vs=new F,eh=new F,xa=new F,ya=new F,Ma=new F,ba=new Se,Sa=new Se,wa=new Se;class ti{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),oi.subVectors(t,e),r.cross(oi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){oi.subVectors(r,e),Ci.subVectors(n,e),va.subVectors(t,e);const s=oi.dot(oi),l=oi.dot(Ci),h=oi.dot(va),a=Ci.dot(Ci),c=Ci.dot(va),u=s*a-l*l;if(u===0)return o.set(0,0,0),null;const f=1/u,m=(a*h-l*c)*f,v=(s*c-l*h)*f;return o.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,r,o,s,l,h){return this.getBarycoord(t,e,n,r,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Ii.x),h.addScaledVector(s,Ii.y),h.addScaledVector(l,Ii.z),h)}static getInterpolatedAttribute(t,e,n,r,o,s){return ba.setScalar(0),Sa.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),wa.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(ba,o.x),s.addScaledVector(Sa,o.y),s.addScaledVector(wa,o.z),s}static isFrontFacing(t,e,n,r){return oi.subVectors(n,e),Ci.subVectors(t,e),oi.cross(Ci).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),oi.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return ti.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let s,l;Gs.subVectors(r,n),Vs.subVectors(o,n),xa.subVectors(t,n);const h=Gs.dot(xa),a=Vs.dot(xa);if(h<=0&&a<=0)return e.copy(n);ya.subVectors(t,r);const c=Gs.dot(ya),u=Vs.dot(ya);if(c>=0&&u<=c)return e.copy(r);const f=h*u-c*a;if(f<=0&&h>=0&&c<=0)return s=h/(h-c),e.copy(n).addScaledVector(Gs,s);Ma.subVectors(t,o);const m=Gs.dot(Ma),v=Vs.dot(Ma);if(v>=0&&m<=v)return e.copy(o);const y=m*a-h*v;if(y<=0&&a>=0&&v<=0)return l=a/(a-v),e.copy(n).addScaledVector(Vs,l);const x=c*v-m*u;if(x<=0&&u-c>=0&&m-v>=0)return eh.subVectors(o,r),l=(u-c)/(u-c+(m-v)),e.copy(r).addScaledVector(eh,l);const _=1/(x+y+f);return s=y*_,l=f*_,e.copy(n).addScaledVector(Gs,s).addScaledVector(Vs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=pe.workingColorSpace){if(t=cc(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Ea(s,o,t+1/3),this.g=Ea(s,o,t),this.b=Ea(s,o,t-1/3)}return pe.colorSpaceToWorking(this,r),this}setStyle(t,e=Dn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const s=r[1],l=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return pe.workingToColorSpace(pn.copy(this),t),Math.round(re(pn.r*255,0,255))*65536+Math.round(re(pn.g*255,0,255))*256+Math.round(re(pn.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,o=pn.b,s=Math.max(n,r,o),l=Math.min(n,r,o);let h,a;const c=(l+s)/2;if(l===s)h=0,a=0;else{const u=s-l;switch(a=c<=.5?u/(s+l):u/(2-s-l),s){case n:h=(r-o)/u+(r<o?6:0);break;case r:h=(o-n)/u+2;break;case o:h=(n-r)/u+4;break}h/=6}return t.h=h,t.s=a,t.l=c,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Dn){pe.workingToColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,r=pn.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(io);const n=Er(Xi.h,io.h,e),r=Er(Xi.s,io.s,e),o=Er(Xi.l,io.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Gt;Gt.NAMES=ku;let Xf=0;class Cs extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=or(),this.name="",this.type="Material",this.blending=js,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const l in o){const h=o[l];delete h.metadata,s.push(h)}return s}if(e){const o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pi extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new F,so=new ce;let $f=0;class yi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$f++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),r=bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),r=bn(r,this.array),o=bn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}}class Uu extends yi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nu extends yi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends yi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yf=0;const Zn=new Ie,Ta=new en,Ws=new F,zn=new Br,mr=new Br,on=new F;class tn extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pu(t)?Nu:Uu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,o=t.length;r<o;r++){const s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){const l=e[o];mr.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(zn.min,mr.min),zn.expandByPoint(on),on.addVectors(zn.max,mr.max),zn.expandByPoint(on)):(zn.expandByPoint(mr.min),zn.expandByPoint(mr.max))}zn.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)on.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(on));if(e)for(let o=0,s=e.length;o<s;o++){const l=e[o],h=this.morphTargetsRelative;for(let a=0,c=l.count;a<c;a++)on.fromBufferAttribute(l,a),h&&(Ws.fromBufferAttribute(t,a),on.add(Ws)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),l=[],h=[];for(let p=0;p<n.count;p++)l[p]=new F,h[p]=new F;const a=new F,c=new F,u=new F,f=new ce,m=new ce,v=new ce,y=new F,x=new F;function _(p,d,g){a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),u.fromBufferAttribute(n,g),f.fromBufferAttribute(o,p),m.fromBufferAttribute(o,d),v.fromBufferAttribute(o,g),c.sub(a),u.sub(a),m.sub(f),v.sub(f);const M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(M),x.copy(u).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(M),l[p].add(y),l[d].add(y),l[g].add(y),h[p].add(x),h[d].add(x),h[g].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let p=0,d=A.length;p<d;++p){const g=A[p],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const E=new F,S=new F,b=new F,I=new F;function R(p){b.fromBufferAttribute(r,p),I.copy(b);const d=l[p];E.copy(d),E.sub(b.multiplyScalar(b.dot(d))).normalize(),S.crossVectors(I,d);const M=S.dot(h[p])<0?-1:1;s.setXYZW(p,E.x,E.y,E.z,M)}for(let p=0,d=A.length;p<d;++p){const g=A[p],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,o=new F,s=new F,l=new F,h=new F,a=new F,c=new F,u=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),y=t.getX(f+1),x=t.getX(f+2);r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,y),s.fromBufferAttribute(e,x),c.subVectors(s,o),u.subVectors(r,o),c.cross(u),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),l.add(c),h.add(c),a.add(c),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(x,a.x,a.y,a.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),c.subVectors(s,o),u.subVectors(r,o),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(l,h){const a=l.array,c=l.itemSize,u=l.normalized,f=new a.constructor(h.length*c);let m=0,v=0;for(let y=0,x=h.length;y<x;y++){l.isInterleavedBufferAttribute?m=h[y]*l.data.stride+l.offset:m=h[y]*c;for(let _=0;_<c;_++)f[v++]=a[m++]}return new yi(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],a=t(h,n);e.setAttribute(l,a)}const o=this.morphAttributes;for(const l in o){const h=[],a=o[l];for(let c=0,u=a.length;c<u;c++){const f=a[c],m=t(f,n);h.push(m)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,h=s.length;l<h;l++){const a=s[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const a in h)h[a]!==void 0&&(t[a]=h[a]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const a=n[h];t.data.attributes[h]=a.toJSON(t.data)}const r={};let o=!1;for(const h in this.morphAttributes){const a=this.morphAttributes[h],c=[];for(let u=0,f=a.length;u<f;u++){const m=a[u];c.push(m.toJSON(t.data))}c.length>0&&(r[h]=c,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const a in r){const c=r[a];this.setAttribute(a,c.clone(e))}const o=t.morphAttributes;for(const a in o){const c=[],u=o[a];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(e));this.morphAttributes[a]=c}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let a=0,c=s.length;a<c;a++){const u=s[a];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new Ie,hs=new uc,ro=new zr,ih=new F,oo=new F,ao=new F,lo=new F,Aa=new F,co=new F,sh=new F,ho=new F;class Ke extends en{constructor(t=new tn,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(o&&l){co.set(0,0,0);for(let h=0,a=o.length;h<a;h++){const c=l[h],u=o[h];c!==0&&(Aa.fromBufferAttribute(u,t),s?co.addScaledVector(Aa,c):co.addScaledVector(Aa.sub(e),c))}e.add(co)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(o),hs.copy(t.ray).recast(t.near),!(ro.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ro,ih)===null||hs.origin.distanceToSquared(ih)>(t.far-t.near)**2))&&(nh.copy(o).invert(),hs.copy(t.ray).applyMatrix4(nh),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let r;const o=this.geometry,s=this.material,l=o.index,h=o.attributes.position,a=o.attributes.uv,c=o.attributes.uv1,u=o.attributes.normal,f=o.groups,m=o.drawRange;if(l!==null)if(Array.isArray(s))for(let v=0,y=f.length;v<y;v++){const x=f[v],_=s[x.materialIndex],A=Math.max(x.start,m.start),E=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=A,b=E;S<b;S+=3){const I=l.getX(S),R=l.getX(S+1),p=l.getX(S+2);r=uo(this,_,t,n,a,c,u,I,R,p),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const A=l.getX(x),E=l.getX(x+1),S=l.getX(x+2);r=uo(this,s,t,n,a,c,u,A,E,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(s))for(let v=0,y=f.length;v<y;v++){const x=f[v],_=s[x.materialIndex],A=Math.max(x.start,m.start),E=Math.min(h.count,Math.min(x.start+x.count,m.start+m.count));for(let S=A,b=E;S<b;S+=3){const I=S,R=S+1,p=S+2;r=uo(this,_,t,n,a,c,u,I,R,p),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const A=x,E=x+1,S=x+2;r=uo(this,s,t,n,a,c,u,A,E,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function Kf(i,t,e,n,r,o,s,l){let h;if(t.side===Nn?h=n.intersectTriangle(s,o,r,!0,l):h=n.intersectTriangle(r,o,s,t.side===es,l),h===null)return null;ho.copy(l),ho.applyMatrix4(i.matrixWorld);const a=e.ray.origin.distanceTo(ho);return a<e.near||a>e.far?null:{distance:a,point:ho.clone(),object:i}}function uo(i,t,e,n,r,o,s,l,h,a){i.getVertexPosition(l,oo),i.getVertexPosition(h,ao),i.getVertexPosition(a,lo);const c=Kf(i,t,e,n,oo,ao,lo,sh);if(c){const u=new F;ti.getBarycoord(sh,oo,ao,lo,u),r&&(c.uv=ti.getInterpolatedAttribute(r,l,h,a,u,new ce)),o&&(c.uv1=ti.getInterpolatedAttribute(o,l,h,a,u,new ce)),s&&(c.normal=ti.getInterpolatedAttribute(s,l,h,a,u,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a:l,b:h,c:a,normal:new F,materialIndex:0};ti.getNormal(oo,ao,lo,f.normal),c.face=f,c.barycoord=u}return c}class Bi extends tn{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const l=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const h=[],a=[],c=[],u=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,s,o,0),v("z","y","x",1,-1,n,e,-t,s,o,1),v("x","z","y",1,1,t,n,e,r,s,2),v("x","z","y",1,-1,t,n,-e,r,s,3),v("x","y","z",1,-1,t,e,n,r,o,4),v("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2));function v(y,x,_,A,E,S,b,I,R,p,d){const g=S/R,M=b/p,C=S/2,L=b/2,k=I/2,N=R+1,H=p+1;let Y=0,V=0;const J=new F;for(let tt=0;tt<H;tt++){const vt=tt*M-L;for(let Vt=0;Vt<N;Vt++){const ae=Vt*g-C;J[y]=ae*A,J[x]=vt*E,J[_]=k,a.push(J.x,J.y,J.z),J[y]=0,J[x]=0,J[_]=I>0?1:-1,c.push(J.x,J.y,J.z),u.push(Vt/R),u.push(1-tt/p),Y+=1}}for(let tt=0;tt<p;tt++)for(let vt=0;vt<R;vt++){const Vt=f+vt+N*tt,ae=f+vt+N*(tt+1),le=f+(vt+1)+N*(tt+1),Zt=f+(vt+1)+N*tt;h.push(Vt,ae,Zt),h.push(ae,le,Zt),V+=6}l.addGroup(m,V,d),m+=V,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=ir(i[e]);for(const r in n)t[r]=n[r]}return t}function jf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Zf={clone:ir,merge:Sn};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ou extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new F,rh=new ce,oh=new ce;class Wn extends Ou{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,rh,oh),e.subVectors(oh,rh)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const h=s.fullWidth,a=s.fullHeight;o+=s.offsetX*r/h,e-=s.offsetY*n/a,r*=s.width/h,n*=s.height/a}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qs=-90,Xs=1;class tp extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(qs,Xs,t,e);r.layers=this.layers,this.add(r);const o=new Wn(qs,Xs,t,e);o.layers=this.layers,this.add(o);const s=new Wn(qs,Xs,t,e);s.layers=this.layers,this.add(s);const l=new Wn(qs,Xs,t,e);l.layers=this.layers,this.add(l);const h=new Wn(qs,Xs,t,e);h.layers=this.layers,this.add(h);const a=new Wn(qs,Xs,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,l,h]=e;for(const a of e)this.remove(a);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,s,l,h,a,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,s),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,a),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,c),t.setRenderTarget(u,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Bu extends Rn{constructor(t=[],e=tr,n,r,o,s,l,h,a,c){super(t,e,n,r,o,s,l,h,a,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ep extends As{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Bu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bi(5,5,5),o=new wi({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Ji});o.uniforms.tEquirect.value=e;const s=new Ke(r,o),l=e.minFilter;return e.minFilter===bs&&(e.minFilter=gi),new tp(1,10,this).update(t,s),e.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}}class oe extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const np={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null;const l=this._targetRay,h=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){s=!0;for(const y of t.hand.values()){const x=e.getJointPose(y,n),_=this._getHandJoint(a,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const c=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,v=.005;a.inputState.pinching&&f>m+v?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&f<=m-v&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(np)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),a!==null&&(a.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ip extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ca=new F,sp=new F,rp=new jt;class ps{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ca.subVectors(n,e).cross(sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rp.getNormalMatrix(t),r=this.coplanarPoint(Ca).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new zr,op=new ce(.5,.5),fo=new F;class fc{constructor(t=new ps,e=new ps,n=new ps,r=new ps,o=new ps,s=new ps){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i,n=!1){const r=this.planes,o=t.elements,s=o[0],l=o[1],h=o[2],a=o[3],c=o[4],u=o[5],f=o[6],m=o[7],v=o[8],y=o[9],x=o[10],_=o[11],A=o[12],E=o[13],S=o[14],b=o[15];if(r[0].setComponents(a-s,m-c,_-v,b-A).normalize(),r[1].setComponents(a+s,m+c,_+v,b+A).normalize(),r[2].setComponents(a+l,m+u,_+y,b+E).normalize(),r[3].setComponents(a-l,m-u,_-y,b-E).normalize(),n)r[4].setComponents(h,f,x,S).normalize(),r[5].setComponents(a-h,m-f,_-x,b-S).normalize();else if(r[4].setComponents(a-h,m-f,_-x,b-S).normalize(),e===_i)r[5].setComponents(a+h,m+f,_+x,b+S).normalize();else if(e===Oo)r[5].setComponents(h,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const e=op.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(fo.x=r.normal.x>0?t.max.x:t.min.x,fo.y=r.normal.y>0?t.max.y:t.min.y,fo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vl extends Cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zo=new F,Ho=new F,ah=new Ie,gr=new uc,po=new zr,Ia=new F,lh=new F;class ap extends en{constructor(t=new tn,e=new Vl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)zo.fromBufferAttribute(e,r-1),Ho.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=zo.distanceTo(Ho);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=o,t.ray.intersectsSphere(po)===!1)return;ah.copy(r).invert(),gr.copy(t.ray).applyMatrix4(ah);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,s.start),v=Math.min(c.count,s.start+s.count);for(let y=m,x=v-1;y<x;y+=a){const _=c.getX(y),A=c.getX(y+1),E=mo(this,t,gr,h,_,A,y);E&&e.push(E)}if(this.isLineLoop){const y=c.getX(v-1),x=c.getX(m),_=mo(this,t,gr,h,y,x,v-1);_&&e.push(_)}}else{const m=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let y=m,x=v-1;y<x;y+=a){const _=mo(this,t,gr,h,y,y+1,y);_&&e.push(_)}if(this.isLineLoop){const y=mo(this,t,gr,h,v-1,m,v-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function mo(i,t,e,n,r,o,s){const l=i.geometry.attributes.position;if(zo.fromBufferAttribute(l,r),Ho.fromBufferAttribute(l,o),e.distanceSqToSegment(zo,Ho,Ia,lh)>n)return;Ia.applyMatrix4(i.matrixWorld);const a=t.ray.origin.distanceTo(Ia);if(!(a<t.near||a>t.far))return{distance:a,point:lh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ch=new F,hh=new F;class uh extends ap{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)ch.fromBufferAttribute(e,r),hh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ch.distanceTo(hh);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wl extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dh=new Ie,ql=new uc,go=new zr,_o=new F;class fh extends en{constructor(t=new tn,e=new Wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),go.radius+=o,t.ray.intersectsSphere(go)===!1)return;dh.copy(r).invert(),ql.copy(t.ray).applyMatrix4(dh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=n.index,u=n.attributes.position;if(a!==null){const f=Math.max(0,s.start),m=Math.min(a.count,s.start+s.count);for(let v=f,y=m;v<y;v++){const x=a.getX(v);_o.fromBufferAttribute(u,x),ph(_o,x,h,r,t,e,this)}}else{const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let v=f,y=m;v<y;v++)_o.fromBufferAttribute(u,v),ph(_o,v,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function ph(i,t,e,n,r,o,s){const l=ql.distanceSqToPoint(i);if(l<e){const h=new F;ql.closestPointToPoint(i,h),h.applyMatrix4(n);const a=r.ray.origin.distanceTo(h);if(a<r.near||a>r.far)return;o.push({distance:a,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class zu extends Rn{constructor(t,e,n,r,o,s,l,h,a){super(t,e,n,r,o,s,l,h,a),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hu extends Rn{constructor(t,e,n=Ts,r,o,s,l=Xn,h=Xn,a,c=Pr,u=1){if(c!==Pr&&c!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,o,s,l,h,c,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Gu extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Go extends tn{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const o=[],s=[],l=[],h=[],a=new F,c=new ce;s.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*r;a.x=t*Math.cos(m),a.y=t*Math.sin(m),s.push(a.x,a.y,a.z),l.push(0,0,1),c.x=(s[f]/t+1)/2,c.y=(s[f+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pc extends tn{constructor(t=1,e=1,n=1,r=32,o=1,s=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:l,thetaLength:h};const a=this;r=Math.floor(r),o=Math.floor(o);const c=[],u=[],f=[],m=[];let v=0;const y=[],x=n/2;let _=0;A(),s===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function A(){const S=new F,b=new F;let I=0;const R=(e-t)/n;for(let p=0;p<=o;p++){const d=[],g=p/o,M=g*(e-t)+t;for(let C=0;C<=r;C++){const L=C/r,k=L*h+l,N=Math.sin(k),H=Math.cos(k);b.x=M*N,b.y=-g*n+x,b.z=M*H,u.push(b.x,b.y,b.z),S.set(N,R,H).normalize(),f.push(S.x,S.y,S.z),m.push(L,1-g),d.push(v++)}y.push(d)}for(let p=0;p<r;p++)for(let d=0;d<o;d++){const g=y[d][p],M=y[d+1][p],C=y[d+1][p+1],L=y[d][p+1];(t>0||d!==0)&&(c.push(g,M,L),I+=3),(e>0||d!==o-1)&&(c.push(M,C,L),I+=3)}a.addGroup(_,I,0),_+=I}function E(S){const b=v,I=new ce,R=new F;let p=0;const d=S===!0?t:e,g=S===!0?1:-1;for(let C=1;C<=r;C++)u.push(0,x*g,0),f.push(0,g,0),m.push(.5,.5),v++;const M=v;for(let C=0;C<=r;C++){const k=C/r*h+l,N=Math.cos(k),H=Math.sin(k);R.x=d*H,R.y=x*g,R.z=d*N,u.push(R.x,R.y,R.z),f.push(0,g,0),I.x=N*.5+.5,I.y=H*.5*g+.5,m.push(I.x,I.y),v++}for(let C=0;C<r;C++){const L=b+C,k=M+C;S===!0?c.push(k,k+1,L):c.push(k+1,k,L),p+=3}a.addGroup(_,p,S===!0?1:2),_+=p}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const vo=new F,xo=new F,Pa=new F,yo=new ti;class mh extends tn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),o=Math.cos(Zs*e),s=t.getIndex(),l=t.getAttribute("position"),h=s?s.count:l.count,a=[0,0,0],c=["a","b","c"],u=new Array(3),f={},m=[];for(let v=0;v<h;v+=3){s?(a[0]=s.getX(v),a[1]=s.getX(v+1),a[2]=s.getX(v+2)):(a[0]=v,a[1]=v+1,a[2]=v+2);const{a:y,b:x,c:_}=yo;if(y.fromBufferAttribute(l,a[0]),x.fromBufferAttribute(l,a[1]),_.fromBufferAttribute(l,a[2]),yo.getNormal(Pa),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let A=0;A<3;A++){const E=(A+1)%3,S=u[A],b=u[E],I=yo[c[A]],R=yo[c[E]],p=`${S}_${b}`,d=`${b}_${S}`;d in f&&f[d]?(Pa.dot(f[d].normal)<=o&&(m.push(I.x,I.y,I.z),m.push(R.x,R.y,R.z)),f[d]=null):p in f||(f[p]={index0:a[A],index1:a[E],normal:Pa.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:x}=f[v];vo.fromBufferAttribute(l,y),xo.fromBufferAttribute(l,x),m.push(vo.x,vo.y,vo.z),m.push(xo.x,xo.y,xo.z)}this.setAttribute("position",new me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Yo extends tn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,s=e/2,l=Math.floor(n),h=Math.floor(r),a=l+1,c=h+1,u=t/l,f=e/h,m=[],v=[],y=[],x=[];for(let _=0;_<c;_++){const A=_*f-s;for(let E=0;E<a;E++){const S=E*u-o;v.push(S,-A,0),y.push(0,0,1),x.push(E/l),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let A=0;A<l;A++){const E=A+a*_,S=A+a*(_+1),b=A+1+a*(_+1),I=A+1+a*_;m.push(E,S,I),m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new me(v,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}class mc extends tn{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);const l=[],h=[],a=[],c=[];let u=t;const f=(e-t)/r,m=new F,v=new ce;for(let y=0;y<=r;y++){for(let x=0;x<=n;x++){const _=o+x/n*s;m.x=u*Math.cos(_),m.y=u*Math.sin(_),h.push(m.x,m.y,m.z),a.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,c.push(v.x,v.y)}u+=f}for(let y=0;y<r;y++){const x=y*(n+1);for(let _=0;_<n;_++){const A=_+x,E=A,S=A+n+1,b=A+n+2,I=A+1;l.push(E,S,I),l.push(S,b,I)}}this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ko extends tn{constructor(t=1,e=32,n=16,r=0,o=Math.PI*2,s=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(s+l,Math.PI);let a=0;const c=[],u=new F,f=new F,m=[],v=[],y=[],x=[];for(let _=0;_<=n;_++){const A=[],E=_/n;let S=0;_===0&&s===0?S=.5/e:_===n&&h===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const I=b/e;u.x=-t*Math.cos(r+I*o)*Math.sin(s+E*l),u.y=t*Math.cos(s+E*l),u.z=t*Math.sin(r+I*o)*Math.sin(s+E*l),v.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),x.push(I+S,1-E),A.push(a++)}c.push(A)}for(let _=0;_<n;_++)for(let A=0;A<e;A++){const E=c[_][A+1],S=c[_][A],b=c[_+1][A],I=c[_+1][A+1];(_!==0||s>0)&&m.push(E,S,I),(_!==n-1||h<Math.PI)&&m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new me(v,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ne extends Cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lp extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cp extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gc extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hp extends gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const La=new Ie,gh=new F,_h=new F;class Vu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(gh),_h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_h),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vh=new Ie,_r=new F,Da=new F;class up extends Vu{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),Da.copy(n.position),Da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Da),n.updateMatrixWorld(),r.makeTranslation(-_r.x,-_r.y,-_r.z),vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh,n.coordinateSystem,n.reversedDepth)}}class ka extends gc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new up}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wu extends Ou{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,s=n+t,l=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=a*this.view.offsetX,s=o+a*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dp extends Vu{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fp extends gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new dp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pp extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function xh(i,t,e,n){const r=mp(n);switch(e){case Eu:return i*t;case Au:return i*t/r.components*r.byteLength;case oc:return i*t/r.components*r.byteLength;case Ru:return i*t*2/r.components*r.byteLength;case ac:return i*t*2/r.components*r.byteLength;case Tu:return i*t*3/r.components*r.byteLength;case hi:return i*t*4/r.components*r.byteLength;case lc:return i*t*4/r.components*r.byteLength;case Co:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:case vl:return Math.max(i,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(i,8)*Math.max(t,8)/2;case xl:case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Fl:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mp(i){switch(i){case bi:case Mu:return{byteLength:1,components:1};case Cr:case bu:case Fr:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Ts:case ic:case Ui:return{byteLength:4,components:1};case Su:case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qu(){let i=null,t=!1,e=null,n=null;function r(o,s){e(o,s),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function gp(i){const t=new WeakMap;function e(l,h){const a=l.array,c=l.usage,u=a.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,a,c),l.onUploadCallback();let m;if(a instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=i.SHORT;else if(a instanceof Uint32Array)m=i.UNSIGNED_INT;else if(a instanceof Int32Array)m=i.INT;else if(a instanceof Int8Array)m=i.BYTE;else if(a instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,h,a){const c=h.array,u=h.updateRanges;if(i.bindBuffer(a,l),u.length===0)i.bufferSubData(a,0,c);else{u.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<u.length;m++){const v=u[f],y=u[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,u[f]=y)}u.length=f+1;for(let m=0,v=u.length;m<v;m++){const y=u[m];i.bufferSubData(a,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function s(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const a=t.get(l);if(a===void 0)t.set(l,e(l,h));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,h),a.version=l.version}}return{get:r,remove:o,update:s}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
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
#endif`,mm=`struct PhysicalMaterial {
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
}`,gm=`
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bm=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,F0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,B0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,V0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,$0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:_p,alphahash_pars_fragment:vp,alphamap_fragment:xp,alphamap_pars_fragment:yp,alphatest_fragment:Mp,alphatest_pars_fragment:bp,aomap_fragment:Sp,aomap_pars_fragment:wp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Ip,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:Bp,common:zp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Wp,emissivemap_fragment:qp,emissivemap_pars_fragment:Xp,colorspace_fragment:$p,colorspace_pars_fragment:Yp,envmap_fragment:Kp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:cm,envmap_vertex:Qp,fog_vertex:tm,fog_pars_vertex:em,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:om,lights_lambert_pars_fragment:am,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:_m,lights_fragment_end:vm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:bm,map_fragment:Sm,map_pars_fragment:wm,map_particle_fragment:Em,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Im,morphnormal_vertex:Pm,morphtarget_pars_vertex:Lm,morphtarget_vertex:Dm,normal_fragment_begin:km,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Fm,normal_vertex:Om,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Vm,opaque_fragment:Wm,packing:qm,premultiplied_alpha_fragment:Xm,project_vertex:$m,dithering_fragment:Ym,dithering_pars_fragment:Km,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Qm,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:y0,cube_frag:M0,depth_vert:b0,depth_frag:S0,distanceRGBA_vert:w0,distanceRGBA_frag:E0,equirect_vert:T0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:I0,meshbasic_frag:P0,meshlambert_vert:L0,meshlambert_frag:D0,meshmatcap_vert:k0,meshmatcap_frag:U0,meshnormal_vert:N0,meshnormal_frag:F0,meshphong_vert:O0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:H0,meshtoon_vert:G0,meshtoon_frag:V0,points_vert:W0,points_frag:q0,shadow_vert:X0,shadow_frag:$0,sprite_vert:Y0,sprite_frag:K0},dt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},mi={basic:{uniforms:Sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Sn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Sn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Sn([dt.points,dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Sn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Sn([dt.common,dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Sn([dt.sprite,dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Sn([dt.common,dt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Sn([dt.lights,dt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};mi.physical={uniforms:Sn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Mo={r:0,b:0,g:0},ds=new Si,j0=new Ie;function Z0(i,t,e,n,r,o,s){const l=new Gt(0);let h=o===!0?0:1,a,c,u=null,f=0,m=null;function v(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function y(E){let S=!1;const b=v(E);b===null?_(l,h):b&&b.isColor&&(_(b,1),S=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,S){const b=v(S);b&&(b.isCubeTexture||b.mapping===$o)?(c===void 0&&(c=new Ke(new Bi(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ir(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ds.copy(S.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(ds)),c.material.toneMapped=pe.getTransfer(b.colorSpace)!==be,(u!==b||f!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(a===void 0&&(a=new Ke(new Yo(2,2),new wi({name:"BackgroundMaterial",uniforms:ir(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=b,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.toneMapped=pe.getTransfer(b.colorSpace)!==be,b.matrixAutoUpdate===!0&&b.updateMatrix(),a.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),a.layers.enableAll(),E.unshift(a,a.geometry,a.material,0,0,null))}function _(E,S){E.getRGB(Mo,Fu(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,S,s)}function A(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(E,S=1){l.set(E),h=S,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(E){h=E,_(l,h)},render:y,addToRenderList:x,dispose:A}}function J0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function l(g,M,C,L,k){let N=!1;const H=u(L,C,M);o!==H&&(o=H,a(o.object)),N=m(g,L,C,k),N&&v(g,L,C,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(N||s)&&(s=!1,S(g,M,C,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return i.createVertexArray()}function a(g){return i.bindVertexArray(g)}function c(g){return i.deleteVertexArray(g)}function u(g,M,C){const L=C.wireframe===!0;let k=n[g.id];k===void 0&&(k={},n[g.id]=k);let N=k[M.id];N===void 0&&(N={},k[M.id]=N);let H=N[L];return H===void 0&&(H=f(h()),N[L]=H),H}function f(g){const M=[],C=[],L=[];for(let k=0;k<e;k++)M[k]=0,C[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:L,object:g,attributes:{},index:null}}function m(g,M,C,L){const k=o.attributes,N=M.attributes;let H=0;const Y=C.getAttributes();for(const V in Y)if(Y[V].location>=0){const tt=k[V];let vt=N[V];if(vt===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(vt=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(vt=g.instanceColor)),tt===void 0||tt.attribute!==vt||vt&&tt.data!==vt.data)return!0;H++}return o.attributesNum!==H||o.index!==L}function v(g,M,C,L){const k={},N=M.attributes;let H=0;const Y=C.getAttributes();for(const V in Y)if(Y[V].location>=0){let tt=N[V];tt===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(tt=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(tt=g.instanceColor));const vt={};vt.attribute=tt,tt&&tt.data&&(vt.data=tt.data),k[V]=vt,H++}o.attributes=k,o.attributesNum=H,o.index=L}function y(){const g=o.newAttributes;for(let M=0,C=g.length;M<C;M++)g[M]=0}function x(g){_(g,0)}function _(g,M){const C=o.newAttributes,L=o.enabledAttributes,k=o.attributeDivisors;C[g]=1,L[g]===0&&(i.enableVertexAttribArray(g),L[g]=1),k[g]!==M&&(i.vertexAttribDivisor(g,M),k[g]=M)}function A(){const g=o.newAttributes,M=o.enabledAttributes;for(let C=0,L=M.length;C<L;C++)M[C]!==g[C]&&(i.disableVertexAttribArray(C),M[C]=0)}function E(g,M,C,L,k,N,H){H===!0?i.vertexAttribIPointer(g,M,C,k,N):i.vertexAttribPointer(g,M,C,L,k,N)}function S(g,M,C,L){y();const k=L.attributes,N=C.getAttributes(),H=M.defaultAttributeValues;for(const Y in N){const V=N[Y];if(V.location>=0){let J=k[Y];if(J===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),J!==void 0){const tt=J.normalized,vt=J.itemSize,Vt=t.get(J);if(Vt===void 0)continue;const ae=Vt.buffer,le=Vt.type,Zt=Vt.bytesPerElement,X=le===i.INT||le===i.UNSIGNED_INT||J.gpuType===ic;if(J.isInterleavedBufferAttribute){const K=J.data,it=K.stride,Et=J.offset;if(K.isInstancedInterleavedBuffer){for(let gt=0;gt<V.locationSize;gt++)_(V.location+gt,K.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let gt=0;gt<V.locationSize;gt++)x(V.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let gt=0;gt<V.locationSize;gt++)E(V.location+gt,vt/V.locationSize,le,tt,it*Zt,(Et+vt/V.locationSize*gt)*Zt,X)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)_(V.location+K,J.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<V.locationSize;K++)x(V.location+K);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let K=0;K<V.locationSize;K++)E(V.location+K,vt/V.locationSize,le,tt,vt*Zt,vt/V.locationSize*K*Zt,X)}}else if(H!==void 0){const tt=H[Y];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(V.location,tt);break;case 3:i.vertexAttrib3fv(V.location,tt);break;case 4:i.vertexAttrib4fv(V.location,tt);break;default:i.vertexAttrib1fv(V.location,tt)}}}}A()}function b(){p();for(const g in n){const M=n[g];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g.id]}function R(g){for(const M in n){const C=n[M];if(C[g.id]===void 0)continue;const L=C[g.id];for(const k in L)c(L[k].object),delete L[k];delete C[g.id]}}function p(){d(),s=!0,o!==r&&(o=r,a(o.object))}function d(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:p,resetDefaultState:d,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:x,disableUnusedAttributes:A}}function Q0(i,t,e){let n;function r(a){n=a}function o(a,c){i.drawArrays(n,a,c),e.update(c,n,1)}function s(a,c,u){u!==0&&(i.drawArraysInstanced(n,a,c,u),e.update(c,n,u))}function l(a,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,u);let m=0;for(let v=0;v<u;v++)m+=c[v];e.update(m,n,1)}function h(a,c,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<a.length;v++)s(a[v],c[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,a,0,c,0,f,0,u);let v=0;for(let y=0;y<u;y++)v+=c[y]*f[y];e.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function tg(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==hi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const p=R===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==bi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ui&&!p)}function h(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const c=h(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:s,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:b,maxSamples:I}}function eg(i){const t=this;let e=null,n=0,r=!1,o=!1;const s=new ps,l=new jt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,m){const v=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,_=i.get(u);if(!r||v===null||v.length===0||o&&!x)o?c(null):a();else{const A=o?0:n,E=A*4;let S=_.clippingState||null;h.value=S,S=c(v,f,E,m);for(let b=0;b!==E;++b)S[b]=e[b];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function a(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,m,v){const y=u!==null?u.length:0;let x=null;if(y!==0){if(x=h.value,v!==!0||x===null){const _=m+y*4,A=f.matrixWorldInverse;l.getNormalMatrix(A),(x===null||x.length<_)&&(x=new Float32Array(_));for(let E=0,S=m;E!==y;++E,S+=4)s.copy(u[E]).applyMatrix4(A,l),s.normal.toArray(x,S),x[S+3]=s.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function ng(i){let t=new WeakMap;function e(s,l){return l===ul?s.mapping=tr:l===dl&&(s.mapping=er),s}function n(s){if(s&&s.isTexture){const l=s.mapping;if(l===ul||l===dl)if(t.has(s)){const h=t.get(s).texture;return e(h,s.mapping)}else{const h=s.image;if(h&&h.height>0){const a=new ep(h.height);return a.fromEquirectangularTexture(i,s),t.set(s,a),s.addEventListener("dispose",r),e(a.texture,s.mapping)}else return null}}return s}function r(s){const l=s.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Ks=4,yh=[.125,.215,.35,.446,.526,.582],vs=20,Ua=new Wu,Mh=new Gt;let Na=null,Fa=0,Oa=0,Ba=!1;const ms=(1+Math.sqrt(5))/2,$s=1/ms,bh=[new F(-ms,$s,0),new F(ms,$s,0),new F(-$s,0,ms),new F($s,0,ms),new F(0,ms,-$s),new F(0,ms,$s),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],ig=new F;class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,o={}){const{size:s=256,position:l=ig}=o;Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Fr,format:hi,colorSpace:nr,depthBuffer:!1},r=wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(o)),this._blurMaterial=rg(o,t,e)}return r}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,r,o){const h=new Wn(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Mh),u.toneMapping=Qi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const y=new pi({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),x=new Ke(new Bi,y);let _=!1;const A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,_=!0):(y.color.copy(Mh),_=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(h.up.set(0,a[E],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+c[E],o.y,o.z)):S===1?(h.up.set(0,0,a[E]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+c[E],o.z)):(h.up.set(0,a[E],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+c[E]));const b=this._cubeSize;bo(r,S*b,E>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(x,h),u.render(t,h)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===tr||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ke(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const h=this._cubeSize;bo(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(s,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=bh[(r-o-1)%bh.length];this._blur(t,o-1,o,s,l)}e.autoClear=n}_blur(t,e,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,r,"latitudinal",o),this._halfBlur(s,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,s,l){const h=this._renderer,a=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ke(this._lodPlanes[r],a),f=a.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*vs-1),y=o/v,x=isFinite(o)?1+Math.floor(c*y):vs;x>vs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vs}`);const _=[];let A=0;for(let R=0;R<vs;++R){const p=R/y,d=Math.exp(-p*p/2);_.push(d),R===0?A+=d:R<x&&(A+=2*d)}for(let R=0;R<_.length;R++)_[R]=_[R]/A;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=_,f.latitudinal.value=s==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-n;const S=this._sizeLods[r],b=3*S*(r>E-Ks?r-E+Ks:0),I=4*(this._cubeSize-S);bo(e,b,I,3*S,2*S),h.setRenderTarget(e),h.render(u,Ua)}}function sg(i){const t=[],e=[],n=[];let r=i;const o=i-Ks+1+yh.length;for(let s=0;s<o;s++){const l=Math.pow(2,r);e.push(l);let h=1/l;s>i-Ks?h=yh[s-i+Ks-1]:s===0&&(h=0),n.push(h);const a=1/(l-2),c=-a,u=1+a,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,v=6,y=3,x=2,_=1,A=new Float32Array(y*v*m),E=new Float32Array(x*v*m),S=new Float32Array(_*v*m);for(let I=0;I<m;I++){const R=I%3*2/3-1,p=I>2?0:-1,d=[R,p,0,R+2/3,p,0,R+2/3,p+1,0,R,p,0,R+2/3,p+1,0,R,p+1,0];A.set(d,y*v*I),E.set(f,x*v*I);const g=[I,I,I,I,I,I];S.set(g,_*v*I)}const b=new tn;b.setAttribute("position",new yi(A,y)),b.setAttribute("uv",new yi(E,x)),b.setAttribute("faceIndex",new yi(S,_)),t.push(b),r>Ks&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wh(i,t,e){const n=new As(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function rg(i,t,e){const n=new Float32Array(vs),r=new F(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Eh(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Th(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,a=h===ul||h===dl,c=h===tr||h===er;if(a||c){let u=t.get(l);const f=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new Sh(i)),u=a?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const m=l.image;return a&&m&&m.height>0||c&&m&&r(m)?(e===null&&(e=new Sh(i)),u=a?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",o),u.texture):null}}}return l}function r(l){let h=0;const a=6;for(let c=0;c<a;c++)l[c]!==void 0&&h++;return h===a}function o(l){const h=l.target;h.removeEventListener("dispose",o);const a=t.get(h);a!==void 0&&(t.delete(h),a.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lg(i,t,e,n){const r={},o=new WeakMap;function s(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(t.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function a(u){const f=[],m=u.index,v=u.attributes.position;let y=0;if(m!==null){const A=m.array;y=m.version;for(let E=0,S=A.length;E<S;E+=3){const b=A[E+0],I=A[E+1],R=A[E+2];f.push(b,I,I,R,R,b)}}else if(v!==void 0){const A=v.array;y=v.version;for(let E=0,S=A.length/3-1;E<S;E+=3){const b=E+0,I=E+1,R=E+2;f.push(b,I,I,R,R,b)}}else return;const x=new(Pu(f)?Nu:Uu)(f,1);x.version=y;const _=o.get(u);_&&t.remove(_),o.set(u,x)}function c(u){const f=o.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&a(u)}else a(u);return o.get(u)}return{get:l,update:h,getWireframeAttribute:c}}function cg(i,t,e){let n;function r(f){n=f}let o,s;function l(f){o=f.type,s=f.bytesPerElement}function h(f,m){i.drawElements(n,m,o,f*s),e.update(m,n,1)}function a(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),e.update(m,n,v))}function c(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let x=0;for(let _=0;_<v;_++)x+=m[_];e.update(x,n,1)}function u(f,m,v,y){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<f.length;_++)a(f[_]/s,m[_],y[_]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,y,0,v);let _=0;for(let A=0;A<v;A++)_+=m[A]*y[A];e.update(_,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,l){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=l*(o/3);break;case i.LINES:e.lines+=l*(o/2);break;case i.LINE_STRIP:e.lines+=l*(o-1);break;case i.LINE_LOOP:e.lines+=l*o;break;case i.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ug(i,t,e){const n=new WeakMap,r=new Se;function o(s,l,h){const a=s.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(l);if(f===void 0||f.count!==u){let g=function(){p.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var m=g;f!==void 0&&f.texture.dispose();const v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],A=l.morphAttributes.normal||[],E=l.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),x===!0&&(S=3);let b=l.attributes.position.count*S,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*I*4*u),p=new Lu(R,b,I,u);p.type=Ui,p.needsUpdate=!0;const d=S*4;for(let M=0;M<u;M++){const C=_[M],L=A[M],k=E[M],N=b*I*4*M;for(let H=0;H<C.count;H++){const Y=H*d;v===!0&&(r.fromBufferAttribute(C,H),R[N+Y+0]=r.x,R[N+Y+1]=r.y,R[N+Y+2]=r.z,R[N+Y+3]=0),y===!0&&(r.fromBufferAttribute(L,H),R[N+Y+4]=r.x,R[N+Y+5]=r.y,R[N+Y+6]=r.z,R[N+Y+7]=0),x===!0&&(r.fromBufferAttribute(k,H),R[N+Y+8]=r.x,R[N+Y+9]=r.y,R[N+Y+10]=r.z,R[N+Y+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:p,size:new ce(b,I)},n.set(l,f),l.addEventListener("dispose",g)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let v=0;for(let x=0;x<a.length;x++)v+=a[x];const y=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",a)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function dg(i,t,e,n){let r=new WeakMap;function o(h){const a=n.render.frame,c=h.geometry,u=t.get(h,c);if(r.get(u)!==a&&(t.update(u),r.set(u,a)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==a&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,a))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==a&&(f.update(),r.set(f,a))}return u}function s(){r=new WeakMap}function l(h){const a=h.target;a.removeEventListener("dispose",l),e.remove(a.instanceMatrix),a.instanceColor!==null&&e.remove(a.instanceColor)}return{update:o,dispose:s}}const Xu=new Rn,Ah=new Hu(1,1),$u=new Lu,Yu=new Of,Ku=new Bu,Rh=[],Ch=[],Ih=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=Rh[r];if(o===void 0&&(o=new Float32Array(r),Rh[r]=o),t!==0){n.toArray(o,0);for(let s=1,l=0;s!==t;++s)l+=e,i[s].toArray(o,l)}return o}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jo(i,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),sn(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),sn(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),sn(e,n)}}function yg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Rg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Ah.compareFunction=Iu,o=Ah):o=Xu,e.setTexture2D(t||o,r)}function Cg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Yu,r)}function Ig(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ku,r)}function Pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||$u,r)}function Lg(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return Mg;case 35668:case 35672:return bg;case 35669:case 35673:return Sg;case 5125:return wg;case 36294:return Eg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Pg}}function Dg(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function Ug(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Ng(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function Fg(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Og(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bg(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zg(i,t){i.uniform1iv(this.addr,t)}function Hg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function qg(i,t){i.uniform2uiv(this.addr,t)}function Xg(i,t){i.uniform3uiv(this.addr,t)}function $g(i,t){i.uniform4uiv(this.addr,t)}function Yg(i,t,e){const n=this.cache,r=t.length,o=jo(e,r);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)e.setTexture2D(t[s]||Xu,o[s])}function Kg(i,t,e){const n=this.cache,r=t.length,o=jo(e,r);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||Yu,o[s])}function jg(i,t,e){const n=this.cache,r=t.length,o=jo(e,r);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||Ku,o[s])}function Zg(i,t,e){const n=this.cache,r=t.length,o=jo(e,r);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||$u,o[s])}function Jg(i){switch(i){case 5126:return Dg;case 35664:return kg;case 35665:return Ug;case 35666:return Ng;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return qg;case 36295:return Xg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}}class t1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}}class e1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const l=r[o];l.setValue(t,e[l.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Dh(i,t){i.seq.push(t),i.map[t.id]=t}function n1(i,t,e){const n=i.name,r=n.length;for(za.lastIndex=0;;){const o=za.exec(n),s=za.lastIndex;let l=o[1];const h=o[2]==="]",a=o[3];if(h&&(l=l|0),a===void 0||a==="["&&s+2===r){Dh(e,a===void 0?new Qg(l,i,t):new t1(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new e1(l),Dh(e,u)),e=u}}}class Do{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),s=t.getUniformLocation(e,o.name);n1(o,s,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){const l=e[o],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const s=t[r];s.id in e&&n.push(s)}return n}}function kh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i1=37297;let s1=0;function r1(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){const l=s+1;n.push(`${l===t?">":" "} ${l}: ${e[s]}`)}return n.join(`
`)}const Uh=new jt;function o1(i){pe._getMatrix(Uh,pe.workingColorSpace,i);const t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const l=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+r1(i.getShaderSource(t),l)}else return o}function a1(i,t){const e=o1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l1(i,t){let e;switch(t){case jd:e="Linear";break;case Zd:e="Reinhard";break;case Jd:e="Cineon";break;case Qd:e="ACESFilmic";break;case ef:e="AgX";break;case nf:e="Neutral";break;case tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new F;function c1(){pe.getLuminanceCoefficients(So);const i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function u1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),s=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:l}}return e}function Mr(i){return i!==""}function Fh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(f1,m1)}const p1=new Map;function m1(i,t){let e=Jt[t];if(e===void 0){const n=p1.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(i){return i.replace(g1,_1)}function _1(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function zh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function x1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function M1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:t="ENVMAP_BLENDING_MULTIPLY";break;case Yd:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function b1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S1(i,t,e,n){const r=i.getContext(),o=e.defines;let s=e.vertexShader,l=e.fragmentShader;const h=v1(e),a=x1(e),c=y1(e),u=M1(e),f=b1(e),m=h1(e),v=u1(o),y=r.createProgram();let x,_,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Mr).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Mr).join(`
`),_.length>0&&(_+=`
`)):(x=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),_=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Qi?l1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,a1("linearToOutputTexel",e.outputColorSpace),c1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),s=Xl(s),s=Fh(s,e),s=Oh(s,e),l=Xl(l),l=Fh(l,e),l=Oh(l,e),s=Bh(s),l=Bh(l),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=A+x+s,S=A+_+l,b=kh(r,r.VERTEX_SHADER,E),I=kh(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,I),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(M){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(b)||"",k=r.getShaderInfoLog(I)||"",N=C.trim(),H=L.trim(),Y=k.trim();let V=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,b,I);else{const tt=Nh(r,b,"vertex"),vt=Nh(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+N+`
`+tt+`
`+vt)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||Y==="")&&(J=!1);J&&(M.diagnostics={runnable:V,programLog:N,vertexShader:{log:H,prefix:x},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(b),r.deleteShader(I),p=new Do(r,y),d=d1(r,y)}let p;this.getUniforms=function(){return p===void 0&&R(this),p};let d;this.getAttributes=function(){return d===void 0&&R(this),d};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(y,i1)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=I,this}let w1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new T1(t),e.set(t,n)),n}}class T1{constructor(t){this.id=w1++,this.code=t,this.usedTimes=0}}function A1(i,t,e,n,r,o,s){const l=new Du,h=new E1,a=new Set,c=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(d){return a.add(d),d===0?"uv":`uv${d}`}function x(d,g,M,C,L){const k=C.fog,N=L.geometry,H=d.isMeshStandardMaterial?C.environment:null,Y=(d.isMeshStandardMaterial?e:t).get(d.envMap||H),V=Y&&Y.mapping===$o?Y.image.height:null,J=v[d.type];d.precision!==null&&(m=r.getMaxPrecision(d.precision),m!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",m,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,vt=tt!==void 0?tt.length:0;let Vt=0;N.morphAttributes.position!==void 0&&(Vt=1),N.morphAttributes.normal!==void 0&&(Vt=2),N.morphAttributes.color!==void 0&&(Vt=3);let ae,le,Zt,X;if(J){const ge=mi[J];ae=ge.vertexShader,le=ge.fragmentShader}else ae=d.vertexShader,le=d.fragmentShader,h.update(d),Zt=h.getVertexShaderID(d),X=h.getFragmentShaderID(d);const K=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),Et=L.isInstancedMesh===!0,gt=L.isBatchedMesh===!0,Wt=!!d.map,Ee=!!d.matcap,D=!!Y,de=!!d.aoMap,Rt=!!d.lightMap,Lt=!!d.bumpMap,xt=!!d.normalMap,he=!!d.displacementMap,yt=!!d.emissiveMap,$t=!!d.metalnessMap,rn=!!d.roughnessMap,Fe=d.anisotropy>0,P=d.clearcoat>0,w=d.dispersion>0,G=d.iridescence>0,Z=d.sheen>0,et=d.transmission>0,j=Fe&&!!d.anisotropyMap,Dt=P&&!!d.clearcoatMap,lt=P&&!!d.clearcoatNormalMap,Ct=P&&!!d.clearcoatRoughnessMap,It=G&&!!d.iridescenceMap,ot=G&&!!d.iridescenceThicknessMap,_t=Z&&!!d.sheenColorMap,zt=Z&&!!d.sheenRoughnessMap,Pt=!!d.specularMap,ft=!!d.specularColorMap,Kt=!!d.specularIntensityMap,O=et&&!!d.transmissionMap,at=et&&!!d.thicknessMap,ht=!!d.gradientMap,St=!!d.alphaMap,st=d.alphaTest>0,Q=!!d.alphaHash,Tt=!!d.extensions;let Xt=Qi;d.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const Te={shaderID:J,shaderType:d.type,shaderName:d.name,vertexShader:ae,fragmentShader:le,defines:d.defines,customVertexShaderID:Zt,customFragmentShaderID:X,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:m,batching:gt,batchingColor:gt&&L._colorsTexture!==null,instancing:Et,instancingColor:Et&&L.instanceColor!==null,instancingMorph:Et&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:nr,alphaToCoverage:!!d.alphaToCoverage,map:Wt,matcap:Ee,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:V,aoMap:de,lightMap:Rt,bumpMap:Lt,normalMap:xt,displacementMap:f&&he,emissiveMap:yt,normalMapObjectSpace:xt&&d.normalMapType===af,normalMapTangentSpace:xt&&d.normalMapType===Cu,metalnessMap:$t,roughnessMap:rn,anisotropy:Fe,anisotropyMap:j,clearcoat:P,clearcoatMap:Dt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Ct,dispersion:w,iridescence:G,iridescenceMap:It,iridescenceThicknessMap:ot,sheen:Z,sheenColorMap:_t,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:ft,specularIntensityMap:Kt,transmission:et,transmissionMap:O,thicknessMap:at,gradientMap:ht,opaque:d.transparent===!1&&d.blending===js&&d.alphaToCoverage===!1,alphaMap:St,alphaTest:st,alphaHash:Q,combine:d.combine,mapUv:Wt&&y(d.map.channel),aoMapUv:de&&y(d.aoMap.channel),lightMapUv:Rt&&y(d.lightMap.channel),bumpMapUv:Lt&&y(d.bumpMap.channel),normalMapUv:xt&&y(d.normalMap.channel),displacementMapUv:he&&y(d.displacementMap.channel),emissiveMapUv:yt&&y(d.emissiveMap.channel),metalnessMapUv:$t&&y(d.metalnessMap.channel),roughnessMapUv:rn&&y(d.roughnessMap.channel),anisotropyMapUv:j&&y(d.anisotropyMap.channel),clearcoatMapUv:Dt&&y(d.clearcoatMap.channel),clearcoatNormalMapUv:lt&&y(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&y(d.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&y(d.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(d.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&y(d.sheenColorMap.channel),sheenRoughnessMapUv:zt&&y(d.sheenRoughnessMap.channel),specularMapUv:Pt&&y(d.specularMap.channel),specularColorMapUv:ft&&y(d.specularColorMap.channel),specularIntensityMapUv:Kt&&y(d.specularIntensityMap.channel),transmissionMapUv:O&&y(d.transmissionMap.channel),thicknessMapUv:at&&y(d.thicknessMap.channel),alphaMapUv:St&&y(d.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||Fe),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Wt||St),fog:!!k,useFog:d.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:d.flatShading===!0&&d.wireframe===!1,sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Vt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:d.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Wt&&d.map.isVideoTexture===!0&&pe.getTransfer(d.map.colorSpace)===be,decodeVideoTextureEmissive:yt&&d.emissiveMap.isVideoTexture===!0&&pe.getTransfer(d.emissiveMap.colorSpace)===be,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===qe,flipSided:d.side===Nn,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Tt&&d.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&d.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Te.vertexUv1s=a.has(1),Te.vertexUv2s=a.has(2),Te.vertexUv3s=a.has(3),a.clear(),Te}function _(d){const g=[];if(d.shaderID?g.push(d.shaderID):(g.push(d.customVertexShaderID),g.push(d.customFragmentShaderID)),d.defines!==void 0)for(const M in d.defines)g.push(M),g.push(d.defines[M]);return d.isRawShaderMaterial===!1&&(A(g,d),E(g,d),g.push(i.outputColorSpace)),g.push(d.customProgramCacheKey),g.join()}function A(d,g){d.push(g.precision),d.push(g.outputColorSpace),d.push(g.envMapMode),d.push(g.envMapCubeUVHeight),d.push(g.mapUv),d.push(g.alphaMapUv),d.push(g.lightMapUv),d.push(g.aoMapUv),d.push(g.bumpMapUv),d.push(g.normalMapUv),d.push(g.displacementMapUv),d.push(g.emissiveMapUv),d.push(g.metalnessMapUv),d.push(g.roughnessMapUv),d.push(g.anisotropyMapUv),d.push(g.clearcoatMapUv),d.push(g.clearcoatNormalMapUv),d.push(g.clearcoatRoughnessMapUv),d.push(g.iridescenceMapUv),d.push(g.iridescenceThicknessMapUv),d.push(g.sheenColorMapUv),d.push(g.sheenRoughnessMapUv),d.push(g.specularMapUv),d.push(g.specularColorMapUv),d.push(g.specularIntensityMapUv),d.push(g.transmissionMapUv),d.push(g.thicknessMapUv),d.push(g.combine),d.push(g.fogExp2),d.push(g.sizeAttenuation),d.push(g.morphTargetsCount),d.push(g.morphAttributeCount),d.push(g.numDirLights),d.push(g.numPointLights),d.push(g.numSpotLights),d.push(g.numSpotLightMaps),d.push(g.numHemiLights),d.push(g.numRectAreaLights),d.push(g.numDirLightShadows),d.push(g.numPointLightShadows),d.push(g.numSpotLightShadows),d.push(g.numSpotLightShadowsWithMaps),d.push(g.numLightProbes),d.push(g.shadowMapType),d.push(g.toneMapping),d.push(g.numClippingPlanes),d.push(g.numClipIntersection),d.push(g.depthPacking)}function E(d,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),g.gradientMap&&l.enable(22),d.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.reversedDepthBuffer&&l.enable(4),g.skinning&&l.enable(5),g.morphTargets&&l.enable(6),g.morphNormals&&l.enable(7),g.morphColors&&l.enable(8),g.premultipliedAlpha&&l.enable(9),g.shadowMapEnabled&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),g.decodeVideoTextureEmissive&&l.enable(20),g.alphaToCoverage&&l.enable(21),d.push(l.mask)}function S(d){const g=v[d.type];let M;if(g){const C=mi[g];M=Zf.clone(C.uniforms)}else M=d.uniforms;return M}function b(d,g){let M;for(let C=0,L=c.length;C<L;C++){const k=c[C];if(k.cacheKey===g){M=k,++M.usedTimes;break}}return M===void 0&&(M=new S1(i,g,d,o),c.push(M)),M}function I(d){if(--d.usedTimes===0){const g=c.indexOf(d);c[g]=c[c.length-1],c.pop(),d.destroy()}}function R(d){h.remove(d)}function p(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:S,acquireProgram:b,releaseProgram:I,releaseShaderCache:R,programs:c,dispose:p}}function R1(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let l=i.get(s);return l===void 0&&(l={},i.set(s,l)),l}function n(s){i.delete(s)}function r(s,l,h){i.get(s)[l]=h}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function C1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gh(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(u,f,m,v,y,x){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:y,group:x},i[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=y,_.group=x),t++,_}function l(u,f,m,v,y,x){const _=s(u,f,m,v,y,x);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function h(u,f,m,v,y,x){const _=s(u,f,m,v,y,x);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function a(u,f){e.length>1&&e.sort(u||C1),n.length>1&&n.sort(f||Hh),r.length>1&&r.sort(f||Hh)}function c(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:h,finish:c,sort:a}}function I1(){let i=new WeakMap;function t(n,r){const o=i.get(n);let s;return o===void 0?(s=new Gh,i.set(n,[s])):r>=o.length?(s=new Gh,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function P1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Gt};break;case"SpotLight":e={position:new F,direction:new F,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function L1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D1=0;function k1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function U1(i){const t=new P1,e=L1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new F);const r=new F,o=new Ie,s=new Ie;function l(a){let c=0,u=0,f=0;for(let d=0;d<9;d++)n.probe[d].set(0,0,0);let m=0,v=0,y=0,x=0,_=0,A=0,E=0,S=0,b=0,I=0,R=0;a.sort(k1);for(let d=0,g=a.length;d<g;d++){const M=a[d],C=M.color,L=M.intensity,k=M.distance,N=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=C.r*L,u+=C.g*L,f+=C.b*L;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],L);R++}else if(M.isDirectionalLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=M.shadow.matrix,A++}n.directional[m]=H,m++}else if(M.isSpotLight){const H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(C).multiplyScalar(L),H.distance=k,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[y]=H;const Y=M.shadow;if(M.map&&(n.spotLightMap[b]=M.map,b++,Y.updateMatrices(M),M.castShadow&&I++),n.spotLightMatrix[y]=Y.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=N,S++}y++}else if(M.isRectAreaLight){const H=t.get(M);H.color.copy(C).multiplyScalar(L),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[x]=H,x++}else if(M.isPointLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=N,n.pointShadowMatrix[v]=M.shadow.matrix,E++}n.point[v]=H,v++}else if(M.isHemisphereLight){const H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(L),H.groundColor.copy(M.groundColor).multiplyScalar(L),n.hemi[_]=H,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const p=n.hash;(p.directionalLength!==m||p.pointLength!==v||p.spotLength!==y||p.rectAreaLength!==x||p.hemiLength!==_||p.numDirectionalShadows!==A||p.numPointShadows!==E||p.numSpotShadows!==S||p.numSpotMaps!==b||p.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=x,n.point.length=v,n.hemi.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,p.directionalLength=m,p.pointLength=v,p.spotLength=y,p.rectAreaLength=x,p.hemiLength=_,p.numDirectionalShadows=A,p.numPointShadows=E,p.numSpotShadows=S,p.numSpotMaps=b,p.numLightProbes=R,n.version=D1++)}function h(a,c){let u=0,f=0,m=0,v=0,y=0;const x=c.matrixWorldInverse;for(let _=0,A=a.length;_<A;_++){const E=a[_];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),u++}else if(E.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(E.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),s.identity(),o.copy(E.matrixWorld),o.premultiply(x),s.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(x),y++}}}return{setup:l,setupView:h,state:n}}function Vh(i){const t=new U1(i),e=[],n=[];function r(c){a.camera=c,e.length=0,n.length=0}function o(c){e.push(c)}function s(c){n.push(c)}function l(){t.setup(e)}function h(c){t.setupView(e,c)}const a={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:a,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:s}}function N1(i){let t=new WeakMap;function e(r,o=0){const s=t.get(r);let l;return s===void 0?(l=new Vh(i),t.set(r,[l])):o>=s.length?(l=new Vh(i),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
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
}`;function B1(i,t,e){let n=new fc;const r=new ce,o=new ce,s=new Se,l=new lp({depthPacking:of}),h=new cp,a={},c=e.maxTextureSize,u={[es]:Nn,[Nn]:es,[qe]:qe},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:F1,fragmentShader:O1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new tn;v.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ke(v,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let _=this.type;this.render=function(I,R,p){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const d=i.getRenderTarget(),g=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ji),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=_!==Pi&&this.type===Pi,k=_===Pi&&this.type!==Pi;for(let N=0,H=I.length;N<H;N++){const Y=I[N],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();if(r.multiply(J),o.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/J.x),r.x=o.x*J.x,V.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/J.y),r.y=o.y*J.y,V.mapSize.y=o.y)),V.map===null||L===!0||k===!0){const vt=this.type!==Pi?{minFilter:Xn,magFilter:Xn}:{};V.map!==null&&V.map.dispose(),V.map=new As(r.x,r.y,vt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const tt=V.getViewportCount();for(let vt=0;vt<tt;vt++){const Vt=V.getViewport(vt);s.set(o.x*Vt.x,o.y*Vt.y,o.x*Vt.z,o.y*Vt.w),C.viewport(s),V.updateMatrices(Y,vt),n=V.getFrustum(),S(R,p,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&A(V,p),V.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(d,g,M)};function A(I,R){const p=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new As(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,p,f,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,p,m,y,null)}function E(I,R,p,d){let g=null;const M=p.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(M!==void 0)g=M;else if(g=p.isPointLight===!0?h:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const C=g.uuid,L=R.uuid;let k=a[C];k===void 0&&(k={},a[C]=k);let N=k[L];N===void 0&&(N=g.clone(),k[L]=N,R.addEventListener("dispose",b)),g=N}if(g.visible=R.visible,g.wireframe=R.wireframe,d===Pi?g.side=R.shadowSide!==null?R.shadowSide:R.side:g.side=R.shadowSide!==null?R.shadowSide:u[R.side],g.alphaMap=R.alphaMap,g.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,p.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const C=i.properties.get(g);C.light=p}return g}function S(I,R,p,d,g){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===Pi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,I.matrixWorld);const L=t.update(I),k=I.material;if(Array.isArray(k)){const N=L.groups;for(let H=0,Y=N.length;H<Y;H++){const V=N[H],J=k[V.materialIndex];if(J&&J.visible){const tt=E(I,J,d,g);I.onBeforeShadow(i,I,R,p,L,tt,V),i.renderBufferDirect(p,null,L,tt,I,V),I.onAfterShadow(i,I,R,p,L,tt,V)}}}else if(k.visible){const N=E(I,k,d,g);I.onBeforeShadow(i,I,R,p,L,N,null),i.renderBufferDirect(p,null,L,N,I,null),I.onAfterShadow(i,I,R,p,L,N,null)}}const C=I.children;for(let L=0,k=C.length;L<k;L++)S(C[L],R,p,d,g)}function b(I){I.target.removeEventListener("dispose",b);for(const p in a){const d=a[p],g=I.target.uuid;g in d&&(d[g].dispose(),delete d[g])}}}const z1={[sl]:rl,[ol]:cl,[al]:hl,[Qs]:ll,[rl]:sl,[cl]:ol,[hl]:al,[ll]:Qs};function H1(i,t){function e(){let O=!1;const at=new Se;let ht=null;const St=new Se(0,0,0,0);return{setMask:function(st){ht!==st&&!O&&(i.colorMask(st,st,st,st),ht=st)},setLocked:function(st){O=st},setClear:function(st,Q,Tt,Xt,Te){Te===!0&&(st*=Xt,Q*=Xt,Tt*=Xt),at.set(st,Q,Tt,Xt),St.equals(at)===!1&&(i.clearColor(st,Q,Tt,Xt),St.copy(at))},reset:function(){O=!1,ht=null,St.set(-1,0,0,0)}}}function n(){let O=!1,at=!1,ht=null,St=null,st=null;return{setReversed:function(Q){if(at!==Q){const Tt=t.get("EXT_clip_control");Q?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),at=Q;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return at},setTest:function(Q){Q?K(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(Q){ht!==Q&&!O&&(i.depthMask(Q),ht=Q)},setFunc:function(Q){if(at&&(Q=z1[Q]),St!==Q){switch(Q){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case ol:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=Q}},setLocked:function(Q){O=Q},setClear:function(Q){st!==Q&&(at&&(Q=1-Q),i.clearDepth(Q),st=Q)},reset:function(){O=!1,ht=null,St=null,st=null,at=!1}}}function r(){let O=!1,at=null,ht=null,St=null,st=null,Q=null,Tt=null,Xt=null,Te=null;return{setTest:function(ge){O||(ge?K(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(ge){at!==ge&&!O&&(i.stencilMask(ge),at=ge)},setFunc:function(ge,Ei,fi){(ht!==ge||St!==Ei||st!==fi)&&(i.stencilFunc(ge,Ei,fi),ht=ge,St=Ei,st=fi)},setOp:function(ge,Ei,fi){(Q!==ge||Tt!==Ei||Xt!==fi)&&(i.stencilOp(ge,Ei,fi),Q=ge,Tt=Ei,Xt=fi)},setLocked:function(ge){O=ge},setClear:function(ge){Te!==ge&&(i.clearStencil(ge),Te=ge)},reset:function(){O=!1,at=null,ht=null,St=null,st=null,Q=null,Tt=null,Xt=null,Te=null}}}const o=new e,s=new n,l=new r,h=new WeakMap,a=new WeakMap;let c={},u={},f=new WeakMap,m=[],v=null,y=!1,x=null,_=null,A=null,E=null,S=null,b=null,I=null,R=new Gt(0,0,0),p=0,d=!1,g=null,M=null,C=null,L=null,k=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Y>=2);let J=null,tt={};const vt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),ae=new Se().fromArray(vt),le=new Se().fromArray(Vt);function Zt(O,at,ht,St){const st=new Uint8Array(4),Q=i.createTexture();i.bindTexture(O,Q),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<ht;Tt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(at+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return Q}const X={};X[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),l.setClear(0),K(i.DEPTH_TEST),s.setFunc(Qs),Lt(!1),xt(Nc),K(i.CULL_FACE),de(Ji);function K(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function it(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Et(O,at){return u[O]!==at?(i.bindFramebuffer(O,at),u[O]=at,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function gt(O,at){let ht=m,St=!1;if(O){ht=f.get(at),ht===void 0&&(ht=[],f.set(at,ht));const st=O.textures;if(ht.length!==st.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Tt=st.length;Q<Tt;Q++)ht[Q]=i.COLOR_ATTACHMENT0+Q;ht.length=st.length,St=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,St=!0);St&&i.drawBuffers(ht)}function Wt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const Ee={[_s]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Ld]:i.FUNC_REVERSE_SUBTRACT};Ee[Dd]=i.MIN,Ee[kd]=i.MAX;const D={[Ud]:i.ZERO,[Nd]:i.ONE,[Fd]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[Bd]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[qd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function de(O,at,ht,St,st,Q,Tt,Xt,Te,ge){if(O===Ji){y===!0&&(it(i.BLEND),y=!1);return}if(y===!1&&(K(i.BLEND),y=!0),O!==Id){if(O!==x||ge!==d){if((_!==_s||S!==_s)&&(i.blendEquation(i.FUNC_ADD),_=_s,S=_s),ge)switch(O){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,E=null,b=null,I=null,R.set(0,0,0),p=0,x=O,d=ge}return}st=st||at,Q=Q||ht,Tt=Tt||St,(at!==_||st!==S)&&(i.blendEquationSeparate(Ee[at],Ee[st]),_=at,S=st),(ht!==A||St!==E||Q!==b||Tt!==I)&&(i.blendFuncSeparate(D[ht],D[St],D[Q],D[Tt]),A=ht,E=St,b=Q,I=Tt),(Xt.equals(R)===!1||Te!==p)&&(i.blendColor(Xt.r,Xt.g,Xt.b,Te),R.copy(Xt),p=Te),x=O,d=!1}function Rt(O,at){O.side===qe?it(i.CULL_FACE):K(i.CULL_FACE);let ht=O.side===Nn;at&&(ht=!ht),Lt(ht),O.blending===js&&O.transparent===!1?de(Ji):de(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),o.setMask(O.colorWrite);const St=O.stencilWrite;l.setTest(St),St&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(O){g!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),g=O)}function xt(O){O!==Ad?(K(i.CULL_FACE),O!==M&&(O===Nc?i.cullFace(i.BACK):O===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),M=O}function he(O){O!==C&&(H&&i.lineWidth(O),C=O)}function yt(O,at,ht){O?(K(i.POLYGON_OFFSET_FILL),(L!==at||k!==ht)&&(i.polygonOffset(at,ht),L=at,k=ht)):it(i.POLYGON_OFFSET_FILL)}function $t(O){O?K(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function rn(O){O===void 0&&(O=i.TEXTURE0+N-1),J!==O&&(i.activeTexture(O),J=O)}function Fe(O,at,ht){ht===void 0&&(J===null?ht=i.TEXTURE0+N-1:ht=J);let St=tt[ht];St===void 0&&(St={type:void 0,texture:void 0},tt[ht]=St),(St.type!==O||St.texture!==at)&&(J!==ht&&(i.activeTexture(ht),J=ht),i.bindTexture(O,at||X[O]),St.type=O,St.texture=at)}function P(){const O=tt[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(O){ae.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function zt(O){le.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),le.copy(O))}function Pt(O,at){let ht=a.get(at);ht===void 0&&(ht=new WeakMap,a.set(at,ht));let St=ht.get(O);St===void 0&&(St=i.getUniformBlockIndex(at,O.name),ht.set(O,St))}function ft(O,at){const St=a.get(at).get(O);h.get(at)!==St&&(i.uniformBlockBinding(at,St,O.__bindingPointIndex),h.set(at,St))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},J=null,tt={},u={},f=new WeakMap,m=[],v=null,y=!1,x=null,_=null,A=null,E=null,S=null,b=null,I=null,R=new Gt(0,0,0),p=0,d=!1,g=null,M=null,C=null,L=null,k=null,ae.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),l.reset()}return{buffers:{color:o,depth:s,stencil:l},enable:K,disable:it,bindFramebuffer:Et,drawBuffers:gt,useProgram:Wt,setBlending:de,setMaterial:Rt,setFlipSided:Lt,setCullFace:xt,setLineWidth:he,setPolygonOffset:yt,setScissorTest:$t,activeTexture:rn,bindTexture:Fe,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:It,texImage3D:ot,updateUBOMapping:Pt,uniformBlockBinding:ft,texStorage2D:lt,texStorage3D:Ct,texSubImage2D:Z,texSubImage3D:et,compressedTexSubImage2D:j,compressedTexSubImage3D:Dt,scissor:_t,viewport:zt,reset:Kt}}function G1(i,t,e,n,r,o,s){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new ce,c=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return m?new OffscreenCanvas(P,w):Bo("canvas")}function y(P,w,G){let Z=1;const et=Fe(P);if((et.width>G||et.height>G)&&(Z=G/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(Z*et.width),Dt=Math.floor(Z*et.height);u===void 0&&(u=v(j,Dt));const lt=w?v(j,Dt):u;return lt.width=j,lt.height=Dt,lt.getContext("2d").drawImage(P,0,0,j,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Dt+")."),lt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,w,G,Z,et=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),w===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),w===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),w===i.RGBA){const Dt=et?Fo:pe.getTransfer(Z);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=Dt===be?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(P,w){let G;return P?w===null||w===Ts||w===Ir?G=i.DEPTH24_STENCIL8:w===Ui?G=i.DEPTH32F_STENCIL8:w===Cr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ts||w===Ir?G=i.DEPTH_COMPONENT24:w===Ui?G=i.DEPTH_COMPONENT32F:w===Cr&&(G=i.DEPTH_COMPONENT16),G}function b(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xn&&P.minFilter!==gi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){const w=P.target;w.removeEventListener("dispose",I),p(w),w.isVideoTexture&&c.delete(w)}function R(P){const w=P.target;w.removeEventListener("dispose",R),g(w)}function p(P){const w=n.get(P);if(w.__webglInit===void 0)return;const G=P.source,Z=f.get(G);if(Z){const et=Z[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&d(P),Object.keys(Z).length===0&&f.delete(G)}n.remove(P)}function d(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const G=P.source,Z=f.get(G);delete Z[w.__cacheKey],s.memory.textures--}function g(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let et=0;et<w.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(w.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=P.textures;for(let Z=0,et=G.length;Z<et;Z++){const j=n.get(G[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),s.memory.textures--),n.remove(G[Z])}n.remove(P)}let M=0;function C(){M=0}function L(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function k(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function N(P,w){const G=n.get(P);if(P.isVideoTexture&&$t(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,P,w);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function H(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){X(G,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function Y(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){X(G,P,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function V(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const J={[fl]:i.REPEAT,[Ms]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},tt={[Xn]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},vt={[lf]:i.NEVER,[pf]:i.ALWAYS,[cf]:i.LESS,[Iu]:i.LEQUAL,[hf]:i.EQUAL,[ff]:i.GEQUAL,[uf]:i.GREATER,[df]:i.NOTEQUAL};function Vt(P,w){if(w.type===Ui&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===gi||w.magFilter===aa||w.magFilter===Kr||w.magFilter===bs||w.minFilter===gi||w.minFilter===aa||w.minFilter===Kr||w.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,J[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,tt[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,tt[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,vt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xn||w.minFilter!==Kr&&w.minFilter!==bs||w.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ae(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));const Z=w.source;let et=f.get(Z);et===void 0&&(et={},f.set(Z,et));const j=k(w);if(j!==P.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,G=!0),et[j].usedTimes++;const Dt=et[P.__cacheKey];Dt!==void 0&&(et[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&d(w)),P.__cacheKey=j,P.__webglTexture=et[j].texture}return G}function le(P,w,G){return Math.floor(Math.floor(P/G)/w)}function Zt(P,w,G,Z){const j=P.updateRanges;if(j.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,G,Z,w.data);else{j.sort((ot,_t)=>ot.start-_t.start);let Dt=0;for(let ot=1;ot<j.length;ot++){const _t=j[Dt],zt=j[ot],Pt=_t.start+_t.count,ft=le(zt.start,w.width,4),Kt=le(_t.start,w.width,4);zt.start<=Pt+1&&ft===Kt&&le(zt.start+zt.count-1,w.width,4)===ft?_t.count=Math.max(_t.count,zt.start+zt.count-_t.start):(++Dt,j[Dt]=zt)}j.length=Dt+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ot=0,_t=j.length;ot<_t;ot++){const zt=j[ot],Pt=Math.floor(zt.start/4),ft=Math.ceil(zt.count/4),Kt=Pt%w.width,O=Math.floor(Pt/w.width),at=ft,ht=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Kt,O,at,ht,G,Z,w.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function X(P,w,G){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);const et=ae(P,w),j=w.source;e.bindTexture(Z,P.__webglTexture,i.TEXTURE0+G);const Dt=n.get(j);if(j.version!==Dt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const lt=pe.getPrimaries(pe.workingColorSpace),Ct=w.colorSpace===ji?null:pe.getPrimaries(w.colorSpace),It=w.colorSpace===ji||lt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ot=y(w.image,!1,r.maxTextureSize);ot=rn(w,ot);const _t=o.convert(w.format,w.colorSpace),zt=o.convert(w.type);let Pt=E(w.internalFormat,_t,zt,w.colorSpace,w.isVideoTexture);Vt(Z,w);let ft;const Kt=w.mipmaps,O=w.isVideoTexture!==!0,at=Dt.__version===void 0||et===!0,ht=j.dataReady,St=b(w,ot);if(w.isDepthTexture)Pt=S(w.format===Lr,w.type),at&&(O?e.texStorage2D(i.TEXTURE_2D,1,Pt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ot.width,ot.height,0,_t,zt,null));else if(w.isDataTexture)if(Kt.length>0){O&&at&&e.texStorage2D(i.TEXTURE_2D,St,Pt,Kt[0].width,Kt[0].height);for(let st=0,Q=Kt.length;st<Q;st++)ft=Kt[st],O?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,_t,zt,ft.data):e.texImage2D(i.TEXTURE_2D,st,Pt,ft.width,ft.height,0,_t,zt,ft.data);w.generateMipmaps=!1}else O?(at&&e.texStorage2D(i.TEXTURE_2D,St,Pt,ot.width,ot.height),ht&&Zt(w,ot,_t,zt)):e.texImage2D(i.TEXTURE_2D,0,Pt,ot.width,ot.height,0,_t,zt,ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Pt,Kt[0].width,Kt[0].height,ot.depth);for(let st=0,Q=Kt.length;st<Q;st++)if(ft=Kt[st],w.format!==hi)if(_t!==null)if(O){if(ht)if(w.layerUpdates.size>0){const Tt=xh(ft.width,ft.height,w.format,w.type);for(const Xt of w.layerUpdates){const Te=ft.data.subarray(Xt*Tt/ft.data.BYTES_PER_ELEMENT,(Xt+1)*Tt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Xt,ft.width,ft.height,1,_t,Te)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,ot.depth,_t,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Pt,ft.width,ft.height,ot.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,ot.depth,_t,zt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Pt,ft.width,ft.height,ot.depth,0,_t,zt,ft.data)}else{O&&at&&e.texStorage2D(i.TEXTURE_2D,St,Pt,Kt[0].width,Kt[0].height);for(let st=0,Q=Kt.length;st<Q;st++)ft=Kt[st],w.format!==hi?_t!==null?O?ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,_t,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,_t,zt,ft.data):e.texImage2D(i.TEXTURE_2D,st,Pt,ft.width,ft.height,0,_t,zt,ft.data)}else if(w.isDataArrayTexture)if(O){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Pt,ot.width,ot.height,ot.depth),ht)if(w.layerUpdates.size>0){const st=xh(ot.width,ot.height,w.format,w.type);for(const Q of w.layerUpdates){const Tt=ot.data.subarray(Q*st/ot.data.BYTES_PER_ELEMENT,(Q+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,_t,zt,Tt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,_t,zt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ot.width,ot.height,ot.depth,0,_t,zt,ot.data);else if(w.isData3DTexture)O?(at&&e.texStorage3D(i.TEXTURE_3D,St,Pt,ot.width,ot.height,ot.depth),ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,_t,zt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ot.width,ot.height,ot.depth,0,_t,zt,ot.data);else if(w.isFramebufferTexture){if(at)if(O)e.texStorage2D(i.TEXTURE_2D,St,Pt,ot.width,ot.height);else{let st=ot.width,Q=ot.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Pt,st,Q,0,_t,zt,null),st>>=1,Q>>=1}}else if(Kt.length>0){if(O&&at){const st=Fe(Kt[0]);e.texStorage2D(i.TEXTURE_2D,St,Pt,st.width,st.height)}for(let st=0,Q=Kt.length;st<Q;st++)ft=Kt[st],O?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t,zt,ft):e.texImage2D(i.TEXTURE_2D,st,Pt,_t,zt,ft);w.generateMipmaps=!1}else if(O){if(at){const st=Fe(ot);e.texStorage2D(i.TEXTURE_2D,St,Pt,st.width,st.height)}ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,zt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Pt,_t,zt,ot);x(w)&&_(Z),Dt.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function K(P,w,G){if(w.image.length!==6)return;const Z=ae(P,w),et=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const j=n.get(et);if(et.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);const Dt=pe.getPrimaries(pe.workingColorSpace),lt=w.colorSpace===ji?null:pe.getPrimaries(w.colorSpace),Ct=w.colorSpace===ji||Dt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const It=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!It&&!ot?_t[Q]=y(w.image[Q],!0,r.maxCubemapSize):_t[Q]=ot?w.image[Q].image:w.image[Q],_t[Q]=rn(w,_t[Q]);const zt=_t[0],Pt=o.convert(w.format,w.colorSpace),ft=o.convert(w.type),Kt=E(w.internalFormat,Pt,ft,w.colorSpace),O=w.isVideoTexture!==!0,at=j.__version===void 0||Z===!0,ht=et.dataReady;let St=b(w,zt);Vt(i.TEXTURE_CUBE_MAP,w);let st;if(It){O&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Kt,zt.width,zt.height);for(let Q=0;Q<6;Q++){st=_t[Q].mipmaps;for(let Tt=0;Tt<st.length;Tt++){const Xt=st[Tt];w.format!==hi?Pt!==null?O?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Xt.width,Xt.height,Pt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Kt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Xt.width,Xt.height,Pt,ft,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Kt,Xt.width,Xt.height,0,Pt,ft,Xt.data)}}}else{if(st=w.mipmaps,O&&at){st.length>0&&St++;const Q=Fe(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Pt,ft,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,_t[Q].width,_t[Q].height,0,Pt,ft,_t[Q].data);for(let Tt=0;Tt<st.length;Tt++){const Te=st[Tt].image[Q].image;O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,Te.width,Te.height,Pt,ft,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Kt,Te.width,Te.height,0,Pt,ft,Te.data)}}else{O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,ft,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Pt,ft,_t[Q]);for(let Tt=0;Tt<st.length;Tt++){const Xt=st[Tt];O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,Pt,ft,Xt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Kt,Pt,ft,Xt.image[Q])}}}x(w)&&_(i.TEXTURE_CUBE_MAP),j.__version=et.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function it(P,w,G,Z,et,j){const Dt=o.convert(G.format,G.colorSpace),lt=o.convert(G.type),Ct=E(G.internalFormat,Dt,lt,G.colorSpace),It=n.get(w),ot=n.get(G);if(ot.__renderTarget=w,!It.__hasExternalTextures){const _t=Math.max(1,w.width>>j),zt=Math.max(1,w.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,Ct,_t,zt,w.depth,0,Dt,lt,null):e.texImage2D(et,j,Ct,_t,zt,0,Dt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),yt(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,ot.__webglTexture,0,he(w)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,ot.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(P,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const Z=w.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,j=S(w.stencilBuffer,et),Dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=he(w);yt(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,j,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,P)}else{const Z=w.textures;for(let et=0;et<Z.length;et++){const j=Z[et],Dt=o.convert(j.format,j.colorSpace),lt=o.convert(j.type),Ct=E(j.internalFormat,Dt,lt,j.colorSpace),It=he(w);G&&yt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Ct,w.width,w.height):yt(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const et=Z.__webglTexture,j=he(w);if(w.depthTexture.format===Pr)yt(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(w.depthTexture.format===Lr)yt(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(P){const w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=Z}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?gt(w.__webglFramebuffer[0],P):gt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),Et(w.__webglDepthbuffer[Z],P,!1);else{const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Et(w.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(P,w,G){const Z=n.get(P);w!==void 0&&it(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Wt(P)}function D(P){const w=P.texture,G=n.get(P),Z=n.get(w);P.addEventListener("dispose",R);const et=P.textures,j=P.isWebGLCubeRenderTarget===!0,Dt=et.length>1;if(Dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,s.memory.textures++),j){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let Ct=0;Ct<w.mipmaps.length;Ct++)G.__webglFramebuffer[lt][Ct]=i.createFramebuffer()}else G.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)G.__webglFramebuffer[lt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let lt=0,Ct=et.length;lt<Ct;lt++){const It=n.get(et[lt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),s.memory.textures++)}if(P.samples>0&&yt(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const Ct=et[lt];G.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const It=o.convert(Ct.format,Ct.colorSpace),ot=o.convert(Ct.type),_t=E(Ct.internalFormat,It,ot,Ct.colorSpace,P.isXRRenderTarget===!0),zt=he(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,_t,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)it(G.__webglFramebuffer[lt][Ct],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct);else it(G.__webglFramebuffer[lt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);x(w)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let lt=0,Ct=et.length;lt<Ct;lt++){const It=et[lt],ot=n.get(It);let _t=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,ot.__webglTexture),Vt(_t,It),it(G.__webglFramebuffer,P,It,i.COLOR_ATTACHMENT0+lt,_t,0),x(It)&&_(_t)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),Vt(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)it(G.__webglFramebuffer[Ct],P,w,i.COLOR_ATTACHMENT0,lt,Ct);else it(G.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,lt,0);x(w)&&_(lt),e.unbindTexture()}P.depthBuffer&&Wt(P)}function de(P){const w=P.textures;for(let G=0,Z=w.length;G<Z;G++){const et=w[G];if(x(et)){const j=A(P),Dt=n.get(et).__webglTexture;e.bindTexture(j,Dt),_(j),e.unbindTexture()}}}const Rt=[],Lt=[];function xt(P){if(P.samples>0){if(yt(P)===!1){const w=P.textures,G=P.width,Z=P.height;let et=i.COLOR_BUFFER_BIT;const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(P),lt=w.length>1;if(lt)for(let It=0;It<w.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Ct=P.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let It=0;It<w.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[It]);const ot=n.get(w[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,et,i.NEAREST),h===!0&&(Rt.length=0,Lt.length=0,Rt.push(i.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(j),Lt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let It=0;It<w.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[It]);const ot=n.get(w[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function he(P){return Math.min(r.maxSamples,P.samples)}function yt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $t(P){const w=s.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function rn(P,w){const G=P.colorSpace,Z=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==nr&&G!==ji&&(pe.getTransfer(G)===be?(Z!==hi||et!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(a.width=P.naturalWidth||P.width,a.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(a.width=P.displayWidth,a.height=P.displayHeight):(a.width=P.width,a.height=P.height),a}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=yt}function V1(i,t){function e(n,r=ji){let o;const s=pe.getTransfer(r);if(n===bi)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mu)return i.BYTE;if(n===bu)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===hi)return i.RGBA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===Au)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===Ru)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===Co||n===Io||n===Po||n===Lo)if(s===be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===_l||n===vl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===yl||n===Ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===xl||n===yl)return s===be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ml)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===kl||n===Ul)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===bl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return s===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Fl||n===Ol)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Nl)return s===be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===zl||n===Hl||n===Gl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Bl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const W1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
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

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Gu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wi({vertexShader:W1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new Yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $1 extends rr{constructor(t,e){super();const n=this;let r=null,o=1,s=null,l="local-floor",h=1,a=null,c=null,u=null,f=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",x=new X1,_={},A=e.getContextAttributes();let E=null,S=null;const b=[],I=[],R=new ce;let p=null;const d=new Wn;d.viewport=new Se;const g=new Wn;g.viewport=new Se;const M=[d,g],C=new pp;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=b[X];return K===void 0&&(K=new Ra,b[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=b[X];return K===void 0&&(K=new Ra,b[X]=K),K.getGripSpace()},this.getHand=function(X){let K=b[X];return K===void 0&&(K=new Ra,b[X]=K),K.getHandSpace()};function N(X){const K=I.indexOf(X.inputSource);if(K===-1)return;const it=b[K];it!==void 0&&(it.update(X.inputSource,X.frame,a||s),it.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let X=0;X<b.length;X++){const K=I[X];K!==null&&(I[X]=null,b[X].disconnect(K))}L=null,k=null,x.reset();for(const X in _)delete _[X];t.setRenderTarget(E),m=null,f=null,u=null,r=null,S=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(p),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||s},this.setReferenceSpace=function(X){a=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),A.xrCompatible!==!0&&await e.makeXRCompatible(),p=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Et=null,gt=null;A.depth&&(gt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=A.stencil?Lr:Pr,Et=A.stencil?Ir:Ts);const Wt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(Wt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new As(f.textureWidth,f.textureHeight,{format:hi,type:bi,depthTexture:new Hu(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const it={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new As(m.framebufferWidth,m.framebufferHeight,{format:hi,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),a=null,s=await r.requestReferenceSpace(l),Zt.setContext(r),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(X){for(let K=0;K<X.removed.length;K++){const it=X.removed[K],Et=I.indexOf(it);Et>=0&&(I[Et]=null,b[Et].disconnect(it))}for(let K=0;K<X.added.length;K++){const it=X.added[K];let Et=I.indexOf(it);if(Et===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=I.length){I.push(it),Et=Wt;break}else if(I[Wt]===null){I[Wt]=it,Et=Wt;break}if(Et===-1)break}const gt=b[Et];gt&&gt.connect(it)}}const V=new F,J=new F;function tt(X,K,it){V.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(it.matrixWorld);const Et=V.distanceTo(J),gt=K.projectionMatrix.elements,Wt=it.projectionMatrix.elements,Ee=gt[14]/(gt[10]-1),D=gt[14]/(gt[10]+1),de=(gt[9]+1)/gt[5],Rt=(gt[9]-1)/gt[5],Lt=(gt[8]-1)/gt[0],xt=(Wt[8]+1)/Wt[0],he=Ee*Lt,yt=Ee*xt,$t=Et/(-Lt+xt),rn=$t*-Lt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(rn),X.translateZ($t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),gt[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Fe=Ee+$t,P=D+$t,w=he-rn,G=yt+(Et-rn),Z=de*D/P*Fe,et=Rt*D/P*Fe;X.projectionMatrix.makePerspective(w,G,Z,et,Fe,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function vt(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let K=X.near,it=X.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(it=x.depthFar)),C.near=g.near=d.near=K,C.far=g.far=d.far=it,(L!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,k=C.far),C.layers.mask=X.layers.mask|6,d.layers.mask=C.layers.mask&3,g.layers.mask=C.layers.mask&5;const Et=X.parent,gt=C.cameras;vt(C,Et);for(let Wt=0;Wt<gt.length;Wt++)vt(gt[Wt],Et);gt.length===2?tt(C,d,g):C.projectionMatrix.copy(d.projectionMatrix),Vt(X,C,Et)};function Vt(X,K,it){it===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(it.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Dr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(X){h=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(X){return _[X]};let ae=null;function le(X,K){if(c=K.getViewerPose(a||s),v=K,c!==null){const it=c.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Et=!1;it.length!==C.cameras.length&&(C.cameras.length=0,Et=!0);for(let D=0;D<it.length;D++){const de=it[D];let Rt=null;if(m!==null)Rt=m.getViewport(de);else{const xt=u.getViewSubImage(f,de);Rt=xt.viewport,D===0&&(t.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(S))}let Lt=M[D];Lt===void 0&&(Lt=new Wn,Lt.layers.enable(D),Lt.viewport=new Se,M[D]=Lt),Lt.matrix.fromArray(de.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(de.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),D===0&&(C.matrix.copy(Lt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Et===!0&&C.cameras.push(Lt)}const gt=r.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const D=u.getDepthInformation(it[0]);D&&D.isValid&&D.texture&&x.init(D,r.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<it.length;D++){const de=it[D].camera;if(de){let Rt=_[de];Rt||(Rt=new Gu,_[de]=Rt);const Lt=u.getCameraImage(de);Rt.sourceTexture=Lt}}}}for(let it=0;it<b.length;it++){const Et=I[it],gt=b[it];Et!==null&&gt!==void 0&&gt.update(Et,K,a||s)}ae&&ae(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}const Zt=new qu;Zt.setAnimationLoop(le),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const fs=new Si,Y1=new Ie;function K1(i,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Fu(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,A,E,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(x,_):_.isMeshToonMaterial?(o(x,_),u(x,_)):_.isMeshPhongMaterial?(o(x,_),c(x,_)):_.isMeshStandardMaterial?(o(x,_),f(x,_),_.isMeshPhysicalMaterial&&m(x,_,S)):_.isMeshMatcapMaterial?(o(x,_),v(x,_)):_.isMeshDepthMaterial?o(x,_):_.isMeshDistanceMaterial?(o(x,_),y(x,_)):_.isMeshNormalMaterial?o(x,_):_.isLineBasicMaterial?(s(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?h(x,_,A,E):_.isSpriteMaterial?a(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Nn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Nn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const A=t.get(_),E=A.envMap,S=A.envMapRotation;E&&(x.envMap.value=E,fs.copy(S),fs.x*=-1,fs.y*=-1,fs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),x.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(fs)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function s(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,A,E){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*A,x.scale.value=E*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function c(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function u(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function f(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,A){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Nn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){const A=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function j1(i,t,e,n){let r={},o={},s=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,E){const S=E.program;n.uniformBlockBinding(A,S)}function a(A,E){let S=r[A.id];S===void 0&&(v(A),S=c(A),r[A.id]=S,A.addEventListener("dispose",x));const b=E.program;n.updateUBOMapping(A,b);const I=t.render.frame;o[A.id]!==I&&(f(A),o[A.id]=I)}function c(A){const E=u();A.__bindingPointIndex=E;const S=i.createBuffer(),b=A.__size,I=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,b,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let A=0;A<l;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=r[A.id],S=A.uniforms,b=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let I=0,R=S.length;I<R;I++){const p=Array.isArray(S[I])?S[I]:[S[I]];for(let d=0,g=p.length;d<g;d++){const M=p[d];if(m(M,I,d,b)===!0){const C=M.__offset,L=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let N=0;N<L.length;N++){const H=L[N],Y=y(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,C+k,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,S,b){const I=A.value,R=E+"_"+S;if(b[R]===void 0)return typeof I=="number"||typeof I=="boolean"?b[R]=I:b[R]=I.clone(),!0;{const p=b[R];if(typeof I=="number"||typeof I=="boolean"){if(p!==I)return b[R]=I,!0}else if(p.equals(I)===!1)return p.copy(I),!0}return!1}function v(A){const E=A.uniforms;let S=0;const b=16;for(let R=0,p=E.length;R<p;R++){const d=Array.isArray(E[R])?E[R]:[E[R]];for(let g=0,M=d.length;g<M;g++){const C=d[g],L=Array.isArray(C.value)?C.value:[C.value];for(let k=0,N=L.length;k<N;k++){const H=L[k],Y=y(H),V=S%b,J=V%Y.boundary,tt=V+J;S+=J,tt!==0&&b-tt<Y.storage&&(S+=b-tt),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=Y.storage}}}const I=S%b;return I>0&&(S+=b-I),A.__size=S,A.__cache={},this}function y(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function x(A){const E=A.target;E.removeEventListener("dispose",x);const S=s.indexOf(E.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function _(){for(const A in r)i.deleteBuffer(r[A]);s=[],r={},o={}}return{bind:h,update:a,dispose:_}}class Z1{constructor(t={}){const{canvas:e=Pf(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:a=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const A=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=Dn;let I=0,R=0,p=null,d=-1,g=null;const M=new Se,C=new Se;let L=null;const k=new Gt(0);let N=0,H=e.width,Y=e.height,V=1,J=null,tt=null;const vt=new Se(0,0,H,Y),Vt=new Se(0,0,H,Y);let ae=!1;const le=new fc;let Zt=!1,X=!1;const K=new Ie,it=new F,Et=new Se,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Ee(){return p===null?V:1}let D=n;function de(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",st,!1),D===null){const B="webgl2";if(D=de(B,T),D===null)throw de(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Rt,Lt,xt,he,yt,$t,rn,Fe,P,w,G,Z,et,j,Dt,lt,Ct,It,ot,_t,zt,Pt,ft,Kt;function O(){Rt=new ag(D),Rt.init(),Pt=new V1(D,Rt),Lt=new tg(D,Rt,t,Pt),xt=new H1(D,Rt),Lt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),he=new hg(D),yt=new R1,$t=new G1(D,Rt,xt,yt,Lt,Pt,he),rn=new ng(S),Fe=new og(S),P=new gp(D),ft=new J0(D,P),w=new lg(D,P,he,ft),G=new dg(D,w,P,he),ot=new ug(D,Lt,$t),lt=new eg(yt),Z=new A1(S,rn,Fe,Rt,Lt,ft,lt),et=new K1(S,yt),j=new I1,Dt=new N1(Rt),It=new Z0(S,rn,Fe,xt,G,m,h),Ct=new B1(S,G,Lt),Kt=new j1(D,he,Lt,xt),_t=new Q0(D,Rt,he),zt=new cg(D,Rt,he),he.programs=Z.programs,S.capabilities=Lt,S.extensions=Rt,S.properties=yt,S.renderLists=j,S.shadowMap=Ct,S.state=xt,S.info=he}O();const at=new $1(S,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,Y,!1))},this.getSize=function(T){return T.set(H,Y)},this.setSize=function(T,B,q=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Y=B,e.width=Math.floor(T*V),e.height=Math.floor(B*V),q===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*V,Y*V).floor()},this.setDrawingBufferSize=function(T,B,q){H=T,Y=B,V=q,e.width=Math.floor(T*q),e.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,B,q,$){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,B,q,$),xt.viewport(M.copy(vt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Vt)},this.setScissor=function(T,B,q,$){T.isVector4?Vt.set(T.x,T.y,T.z,T.w):Vt.set(T,B,q,$),xt.scissor(C.copy(Vt).multiplyScalar(V).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){xt.setScissorTest(ae=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,q=!0){let $=0;if(T){let z=!1;if(p!==null){const rt=p.texture.format;z=rt===lc||rt===ac||rt===oc}if(z){const rt=p.texture.type,pt=rt===bi||rt===Ts||rt===Cr||rt===Ir||rt===sc||rt===rc,wt=It.getClearColor(),Mt=It.getClearAlpha(),Ot=wt.r,Ht=wt.g,Ut=wt.b;pt?(v[0]=Ot,v[1]=Ht,v[2]=Ut,v[3]=Mt,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=Ot,y[1]=Ht,y[2]=Ut,y[3]=Mt,D.clearBufferiv(D.COLOR,0,y))}else $|=D.COLOR_BUFFER_BIT}B&&($|=D.DEPTH_BUFFER_BIT),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",st,!1),It.dispose(),j.dispose(),Dt.dispose(),yt.dispose(),rn.dispose(),Fe.dispose(),G.dispose(),ft.dispose(),Kt.dispose(),Z.dispose(),at.dispose(),at.removeEventListener("sessionstart",fi),at.removeEventListener("sessionend",Ic),os.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=he.autoReset,B=Ct.enabled,q=Ct.autoUpdate,$=Ct.needsUpdate,z=Ct.type;O(),he.autoReset=T,Ct.enabled=B,Ct.autoUpdate=q,Ct.needsUpdate=$,Ct.type=z}function st(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){const B=T.target;B.removeEventListener("dispose",Q),Tt(B)}function Tt(T){Xt(T),yt.remove(T)}function Xt(T){const B=yt.get(T).programs;B!==void 0&&(B.forEach(function(q){Z.releaseProgram(q)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,$,z,rt){B===null&&(B=gt);const pt=z.isMesh&&z.matrixWorld.determinant()<0,wt=Md(T,B,q,$,z);xt.setMaterial($,pt);let Mt=q.index,Ot=1;if($.wireframe===!0){if(Mt=w.getWireframeAttribute(q),Mt===void 0)return;Ot=2}const Ht=q.drawRange,Ut=q.attributes.position;let se=Ht.start*Ot,ye=(Ht.start+Ht.count)*Ot;rt!==null&&(se=Math.max(se,rt.start*Ot),ye=Math.min(ye,(rt.start+rt.count)*Ot)),Mt!==null?(se=Math.max(se,0),ye=Math.min(ye,Mt.count)):Ut!=null&&(se=Math.max(se,0),ye=Math.min(ye,Ut.count));const Ue=ye-se;if(Ue<0||Ue===1/0)return;ft.setup(z,$,wt,q,Mt);let Re,we=_t;if(Mt!==null&&(Re=P.get(Mt),we=zt,we.setIndex(Re)),z.isMesh)$.wireframe===!0?(xt.setLineWidth($.wireframeLinewidth*Ee()),we.setMode(D.LINES)):we.setMode(D.TRIANGLES);else if(z.isLine){let Nt=$.linewidth;Nt===void 0&&(Nt=1),xt.setLineWidth(Nt*Ee()),z.isLineSegments?we.setMode(D.LINES):z.isLineLoop?we.setMode(D.LINE_LOOP):we.setMode(D.LINE_STRIP)}else z.isPoints?we.setMode(D.POINTS):z.isSprite&&we.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))we.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Nt=z._multiDrawStarts,Pe=z._multiDrawCounts,fe=z._multiDrawCount,Fn=Mt?P.get(Mt).bytesPerElement:1,Ds=yt.get($).currentProgram.getUniforms();for(let On=0;On<fe;On++)Ds.setValue(D,"_gl_DrawID",On),we.render(Nt[On]/Fn,Pe[On])}else if(z.isInstancedMesh)we.renderInstances(se,Ue,z.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,Nt);we.renderInstances(se,Ue,Pe)}else we.render(se,Ue)};function Te(T,B,q){T.transparent===!0&&T.side===qe&&T.forceSinglePass===!1?(T.side=Nn,T.needsUpdate=!0,Yr(T,B,q),T.side=es,T.needsUpdate=!0,Yr(T,B,q),T.side=qe):Yr(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),_=Dt.get(q),_.init(B),E.push(_),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),T!==q&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights();const $=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const wt=rt[pt];Te(wt,q,z),$.add(wt)}else Te(rt,q,z),$.add(rt)}),_=E.pop(),$},this.compileAsync=function(T,B,q=null){const $=this.compile(T,B,q);return new Promise(z=>{function rt(){if($.forEach(function(pt){yt.get(pt).currentProgram.isReady()&&$.delete(pt)}),$.size===0){z(T);return}setTimeout(rt,10)}Rt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ge=null;function Ei(T){ge&&ge(T)}function fi(){os.stop()}function Ic(){os.start()}const os=new qu;os.setAnimationLoop(Ei),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(T){ge=T,at.setAnimationLoop(T),T===null?os.stop():os.start()},at.addEventListener("sessionstart",fi),at.addEventListener("sessionend",Ic),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(B),B=at.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,p),_=Dt.get(T,E.length),_.init(B),E.push(_),K.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(K,_i,B.reversedDepth),X=this.localClippingEnabled,Zt=lt.init(this.clippingPlanes,X),x=j.get(T,A.length),x.init(),A.push(x),at.enabled===!0&&at.isPresenting===!0){const rt=S.xr.getDepthSensingMesh();rt!==null&&ra(rt,B,-1/0,S.sortObjects)}ra(T,B,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(J,tt),Wt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Wt&&It.addToRenderList(x,T),this.info.render.frame++,Zt===!0&&lt.beginShadows();const q=_.state.shadowsArray;Ct.render(q,T,B),Zt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,z=x.transmissive;if(_.setupLights(),B.isArrayCamera){const rt=B.cameras;if(z.length>0)for(let pt=0,wt=rt.length;pt<wt;pt++){const Mt=rt[pt];Lc($,z,T,Mt)}Wt&&It.render(T);for(let pt=0,wt=rt.length;pt<wt;pt++){const Mt=rt[pt];Pc(x,T,Mt,Mt.viewport)}}else z.length>0&&Lc($,z,T,B),Wt&&It.render(T),Pc(x,T,B);p!==null&&R===0&&($t.updateMultisampleRenderTarget(p),$t.updateRenderTargetMipmap(p)),T.isScene===!0&&T.onAfterRender(S,T,B),ft.resetDefaultState(),d=-1,g=null,E.pop(),E.length>0?(_=E[E.length-1],Zt===!0&&lt.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function ra(T,B,q,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||le.intersectsSprite(T)){$&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);const pt=G.update(T),wt=T.material;wt.visible&&x.push(T,pt,wt,q,Et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||le.intersectsObject(T))){const pt=G.update(T),wt=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Et.copy(pt.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(wt)){const Mt=pt.groups;for(let Ot=0,Ht=Mt.length;Ot<Ht;Ot++){const Ut=Mt[Ot],se=wt[Ut.materialIndex];se&&se.visible&&x.push(T,pt,se,q,Et.z,Ut)}}else wt.visible&&x.push(T,pt,wt,q,Et.z,null)}}const rt=T.children;for(let pt=0,wt=rt.length;pt<wt;pt++)ra(rt[pt],B,q,$)}function Pc(T,B,q,$){const z=T.opaque,rt=T.transmissive,pt=T.transparent;_.setupLightsView(q),Zt===!0&&lt.setGlobalState(S.clippingPlanes,q),$&&xt.viewport(M.copy($)),z.length>0&&$r(z,B,q),rt.length>0&&$r(rt,B,q),pt.length>0&&$r(pt,B,q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Lc(T,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new As(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Fr:bi,minFilter:bs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const rt=_.state.transmissionRenderTarget[$.id],pt=$.viewport||M;rt.setSize(pt.z*S.transmissionResolutionScale,pt.w*S.transmissionResolutionScale);const wt=S.getRenderTarget(),Mt=S.getActiveCubeFace(),Ot=S.getActiveMipmapLevel();S.setRenderTarget(rt),S.getClearColor(k),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&It.render(q);const Ht=S.toneMapping;S.toneMapping=Qi;const Ut=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),Zt===!0&&lt.setGlobalState(S.clippingPlanes,$),$r(T,q,$),$t.updateMultisampleRenderTarget(rt),$t.updateRenderTargetMipmap(rt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ye=0,Ue=B.length;ye<Ue;ye++){const Re=B[ye],we=Re.object,Nt=Re.geometry,Pe=Re.material,fe=Re.group;if(Pe.side===qe&&we.layers.test($.layers)){const Fn=Pe.side;Pe.side=Nn,Pe.needsUpdate=!0,Dc(we,q,$,Nt,Pe,fe),Pe.side=Fn,Pe.needsUpdate=!0,se=!0}}se===!0&&($t.updateMultisampleRenderTarget(rt),$t.updateRenderTargetMipmap(rt))}S.setRenderTarget(wt,Mt,Ot),S.setClearColor(k,N),Ut!==void 0&&($.viewport=Ut),S.toneMapping=Ht}function $r(T,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,rt=T.length;z<rt;z++){const pt=T[z],wt=pt.object,Mt=pt.geometry,Ot=pt.group;let Ht=pt.material;Ht.allowOverride===!0&&$!==null&&(Ht=$),wt.layers.test(q.layers)&&Dc(wt,B,q,Mt,Ht,Ot)}}function Dc(T,B,q,$,z,rt){T.onBeforeRender(S,B,q,$,z,rt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(S,B,q,$,T,rt),z.transparent===!0&&z.side===qe&&z.forceSinglePass===!1?(z.side=Nn,z.needsUpdate=!0,S.renderBufferDirect(q,B,$,z,T,rt),z.side=es,z.needsUpdate=!0,S.renderBufferDirect(q,B,$,z,T,rt),z.side=qe):S.renderBufferDirect(q,B,$,z,T,rt),T.onAfterRender(S,B,q,$,z,rt)}function Yr(T,B,q){B.isScene!==!0&&(B=gt);const $=yt.get(T),z=_.state.lights,rt=_.state.shadowsArray,pt=z.state.version,wt=Z.getParameters(T,z.state,rt,B,q),Mt=Z.getProgramCacheKey(wt);let Ot=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?Fe:rn).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Q),Ot=new Map,$.programs=Ot);let Ht=Ot.get(Mt);if(Ht!==void 0){if($.currentProgram===Ht&&$.lightsStateVersion===pt)return Uc(T,wt),Ht}else wt.uniforms=Z.getUniforms(T),T.onBeforeCompile(wt,S),Ht=Z.acquireProgram(wt,Mt),Ot.set(Mt,Ht),$.uniforms=wt.uniforms;const Ut=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=lt.uniform),Uc(T,wt),$.needsLights=Sd(T),$.lightsStateVersion=pt,$.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ht,$.uniformsList=null,Ht}function kc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Do.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Uc(T,B){const q=yt.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Md(T,B,q,$,z){B.isScene!==!0&&(B=gt),$t.resetTextureUnits();const rt=B.fog,pt=$.isMeshStandardMaterial?B.environment:null,wt=p===null?S.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:nr,Mt=($.isMeshStandardMaterial?Fe:rn).get($.envMap||pt),Ot=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ht=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,ye=!!q.morphAttributes.color;let Ue=Qi;$.toneMapped&&(p===null||p.isXRRenderTarget===!0)&&(Ue=S.toneMapping);const Re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,we=Re!==void 0?Re.length:0,Nt=yt.get($),Pe=_.state.lights;if(Zt===!0&&(X===!0||T!==g)){const Mn=T===g&&$.id===d;lt.setState($,T,Mn)}let fe=!1;$.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Pe.state.version||Nt.outputColorSpace!==wt||z.isBatchedMesh&&Nt.batching===!1||!z.isBatchedMesh&&Nt.batching===!0||z.isBatchedMesh&&Nt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Nt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Nt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Nt.instancingMorph===!1&&z.morphTexture!==null||Nt.envMap!==Mt||$.fog===!0&&Nt.fog!==rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==Ot||Nt.vertexTangents!==Ht||Nt.morphTargets!==Ut||Nt.morphNormals!==se||Nt.morphColors!==ye||Nt.toneMapping!==Ue||Nt.morphTargetsCount!==we)&&(fe=!0):(fe=!0,Nt.__version=$.version);let Fn=Nt.currentProgram;fe===!0&&(Fn=Yr($,B,z));let Ds=!1,On=!1,ur=!1;const Le=Fn.getUniforms(),Kn=Nt.uniforms;if(xt.useProgram(Fn.program)&&(Ds=!0,On=!0,ur=!0),$.id!==d&&(d=$.id,On=!0),Ds||g!==T){xt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Le.setValue(D,"projectionMatrix",T.projectionMatrix),Le.setValue(D,"viewMatrix",T.matrixWorldInverse);const Cn=Le.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,it.setFromMatrixPosition(T.matrixWorld)),Lt.logarithmicDepthBuffer&&Le.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Le.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),g!==T&&(g=T,On=!0,ur=!0)}if(z.isSkinnedMesh){Le.setOptional(D,z,"bindMatrix"),Le.setOptional(D,z,"bindMatrixInverse");const Mn=z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Le.setValue(D,"boneTexture",Mn.boneTexture,$t))}z.isBatchedMesh&&(Le.setOptional(D,z,"batchingTexture"),Le.setValue(D,"batchingTexture",z._matricesTexture,$t),Le.setOptional(D,z,"batchingIdTexture"),Le.setValue(D,"batchingIdTexture",z._indirectTexture,$t),Le.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Le.setValue(D,"batchingColorTexture",z._colorsTexture,$t));const jn=q.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&ot.update(z,q,Fn),(On||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,Le.setValue(D,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Kn.envMap.value=Mt,Kn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Kn.envMapIntensity.value=B.environmentIntensity),On&&(Le.setValue(D,"toneMappingExposure",S.toneMappingExposure),Nt.needsLights&&bd(Kn,ur),rt&&$.fog===!0&&et.refreshFogUniforms(Kn,rt),et.refreshMaterialUniforms(Kn,$,V,Y,_.state.transmissionRenderTarget[T.id]),Do.upload(D,kc(Nt),Kn,$t)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Do.upload(D,kc(Nt),Kn,$t),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Le.setValue(D,"center",z.center),Le.setValue(D,"modelViewMatrix",z.modelViewMatrix),Le.setValue(D,"normalMatrix",z.normalMatrix),Le.setValue(D,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Mn=$.uniformsGroups;for(let Cn=0,oa=Mn.length;Cn<oa;Cn++){const as=Mn[Cn];Kt.update(as,Fn),Kt.bind(as,Fn)}}return Fn}function bd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Sd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(T,B,q){const $=yt.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),yt.get(T.texture).__webglTexture=B,yt.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const q=yt.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const wd=D.createFramebuffer();this.setRenderTarget=function(T,B=0,q=0){p=T,I=B,R=q;let $=!0,z=null,rt=!1,pt=!1;if(T){const Mt=yt.get(T);if(Mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Mt.__webglFramebuffer===void 0)$t.setupRenderTarget(T);else if(Mt.__hasExternalTextures)$t.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ut=T.depthTexture;if(Mt.__boundDepthTexture!==Ut){if(Ut!==null&&yt.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(T)}}const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(pt=!0);const Ht=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?z=Ht[B][q]:z=Ht[B],rt=!0):T.samples>0&&$t.useMultisampledRTT(T)===!1?z=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[q]:z=Ht,M.copy(T.viewport),C.copy(T.scissor),L=T.scissorTest}else M.copy(vt).multiplyScalar(V).floor(),C.copy(Vt).multiplyScalar(V).floor(),L=ae;if(q!==0&&(z=wd),xt.bindFramebuffer(D.FRAMEBUFFER,z)&&$&&xt.drawBuffers(T,z),xt.viewport(M),xt.scissor(C),xt.setScissorTest(L),rt){const Mt=yt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,q)}else if(pt){const Mt=B;for(let Ot=0;Ot<T.textures.length;Ot++){const Ht=yt.get(T.textures[Ot]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ot,Ht.__webglTexture,q,Mt)}}else if(T!==null&&q!==0){const Mt=yt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,q)}d=-1},this.readRenderTargetPixels=function(T,B,q,$,z,rt,pt,wt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){xt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const Ot=T.textures[wt],Ht=Ot.format,Ut=Ot.type;if(!Lt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&q>=0&&q<=T.height-z&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(B,q,$,z,Pt.convert(Ht),Pt.convert(Ut),rt))}finally{const Ot=p!==null?yt.get(p).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,$,z,rt,pt,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt)if(B>=0&&B<=T.width-$&&q>=0&&q<=T.height-z){xt.bindFramebuffer(D.FRAMEBUFFER,Mt);const Ot=T.textures[wt],Ht=Ot.format,Ut=Ot.type;if(!Lt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(B,q,$,z,Pt.convert(Ht),Pt.convert(Ut),0);const ye=p!==null?yt.get(p).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,ye);const Ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Lf(D,Ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(se),D.deleteSync(Ue),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,q=0){const $=Math.pow(2,-q),z=Math.floor(T.image.width*$),rt=Math.floor(T.image.height*$),pt=B!==null?B.x:0,wt=B!==null?B.y:0;$t.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,pt,wt,z,rt),xt.unbindTexture()};const Ed=D.createFramebuffer(),Td=D.createFramebuffer();this.copyTextureToTexture=function(T,B,q=null,$=null,z=0,rt=null){rt===null&&(z!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=z,z=0):rt=0);let pt,wt,Mt,Ot,Ht,Ut,se,ye,Ue;const Re=T.isCompressedTexture?T.mipmaps[rt]:T.image;if(q!==null)pt=q.max.x-q.min.x,wt=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,Ht=q.min.y,Ut=q.isBox3?q.min.z:0;else{const jn=Math.pow(2,-z);pt=Math.floor(Re.width*jn),wt=Math.floor(Re.height*jn),T.isDataArrayTexture?Mt=Re.depth:T.isData3DTexture?Mt=Math.floor(Re.depth*jn):Mt=1,Ot=0,Ht=0,Ut=0}$!==null?(se=$.x,ye=$.y,Ue=$.z):(se=0,ye=0,Ue=0);const we=Pt.convert(B.format),Nt=Pt.convert(B.type);let Pe;B.isData3DTexture?($t.setTexture3D(B,0),Pe=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($t.setTexture2DArray(B,0),Pe=D.TEXTURE_2D_ARRAY):($t.setTexture2D(B,0),Pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const fe=D.getParameter(D.UNPACK_ROW_LENGTH),Fn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ds=D.getParameter(D.UNPACK_SKIP_PIXELS),On=D.getParameter(D.UNPACK_SKIP_ROWS),ur=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const Le=T.isDataArrayTexture||T.isData3DTexture,Kn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const jn=yt.get(T),Mn=yt.get(B),Cn=yt.get(jn.__renderTarget),oa=yt.get(Mn.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Cn.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let as=0;as<Mt;as++)Le&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(T).__webglTexture,z,Ut+as),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(B).__webglTexture,rt,Ue+as)),D.blitFramebuffer(Ot,Ht,pt,wt,se,ye,pt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||yt.has(T)){const jn=yt.get(T),Mn=yt.get(B);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Ed),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Td);for(let Cn=0;Cn<Mt;Cn++)Le?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jn.__webglTexture,z,Ut+Cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jn.__webglTexture,z),Kn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mn.__webglTexture,rt,Ue+Cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mn.__webglTexture,rt),z!==0?D.blitFramebuffer(Ot,Ht,pt,wt,se,ye,pt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):Kn?D.copyTexSubImage3D(Pe,rt,se,ye,Ue+Cn,Ot,Ht,pt,wt):D.copyTexSubImage2D(Pe,rt,se,ye,Ot,Ht,pt,wt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Kn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Pe,rt,se,ye,Ue,pt,wt,Mt,we,Nt,Re.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,rt,se,ye,Ue,pt,wt,Mt,we,Re.data):D.texSubImage3D(Pe,rt,se,ye,Ue,pt,wt,Mt,we,Nt,Re):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,se,ye,pt,wt,we,Nt,Re.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,se,ye,Re.width,Re.height,we,Re.data):D.texSubImage2D(D.TEXTURE_2D,rt,se,ye,pt,wt,we,Nt,Re);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ds),D.pixelStorei(D.UNPACK_SKIP_ROWS,On),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ur),rt===0&&B.generateMipmaps&&D.generateMipmap(Pe),xt.unbindTexture()},this.initRenderTarget=function(T){yt.get(T).__webglFramebuffer===void 0&&$t.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$t.setTextureCube(T,0):T.isData3DTexture?$t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$t.setTexture2DArray(T,0):$t.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){I=0,R=0,p=null,xt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const bt=0,ei=1,yn=2,De=3,Is=4,xn=5,ss=6,Qn=7,Zo=8,Ps=9,He=10,Qe=11,Xe=12,kn=13,Jo=14,Pn=15,Ae=16,Ze=17,Be=18,xi=19,Ye=20,ts=21,zi=22,Ne=23,ke=24,hn=25,ns=26,Hr=27,Gr=28,Vr=29,Wr=30,qr=31,is=32,Un=33,Gn=34,wn=35,qn=36,vn=37,ui=38,Xr=39,ln=40,Je=41,ze=42,je=43,cn=44,un=45,ni=46,An=47,di=48,Vn=49,$n=50,Yn=51,lr=52,cr=53,Ls=54,hr=55,Hi=56,Zi=57,Ni=58,sr=59,At=i=>i,J1={[ke]:"Crafting Bench",[ze]:"Inside Door",[je]:"Inside Door",[un]:"Bed",[Yn]:"Curved Hull Plating"};function Q1(i){return J1[i]??En[i].name}const t_=new Set([ei,yn,De,Is,xn,ss,ni,Qn,An,di,Vn,hn,ui,Gn,wn,qn,vn,Un,lr,cr,hr,Ls]),e_=new Set([Qe,Ye,Xe,Je,ze,je,Be,ns,Hr,Gr,Vr,Wr,qr,is]);function Wh(i){return En[i].placeable&&!t_.has(i)&&!e_.has(i)}const En=[At({id:bt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),At({id:ei,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),At({id:yn,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),At({id:De,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),At({id:Is,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),At({id:xn,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),At({id:ss,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),At({id:Qn,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),At({id:Zo,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),At({id:Ps,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),At({id:He,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),At({id:Qe,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),At({id:Xe,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),At({id:kn,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),At({id:Jo,name:"Iron Rod",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),At({id:Pn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),At({id:Ae,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),At({id:Ze,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),At({id:Be,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),At({id:xi,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),At({id:Ye,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),At({id:ts,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),At({id:zi,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),At({id:Ne,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),At({id:ke,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),At({id:hn,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),At({id:ns,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),At({id:Hr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),At({id:Gr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),At({id:Vr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),At({id:Wr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),At({id:qr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),At({id:is,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),At({id:Un,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),At({id:Gn,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!0,color:[.28,.52,.28]}),At({id:wn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),At({id:qn,name:"Wheat Sprout",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!0,color:[.66,.66,.34]}),At({id:vn,name:"Desert Wheat",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),At({id:ui,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),At({id:Xr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),At({id:ln,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),At({id:Je,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),At({id:ze,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),At({id:je,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),At({id:cn,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),At({id:un,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),At({id:ni,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),At({id:An,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),At({id:di,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),At({id:Vn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!0,color:[.3,.55,.3]}),At({id:$n,name:"Curved Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),At({id:Yn,name:"Hull Slope",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.53,.58]}),At({id:lr,name:"Iron Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.62,.52,.42]}),At({id:cr,name:"Copper Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.72,.42,.26]}),At({id:Ls,name:"Alabaster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.4,breakTime:1.8,tool:"pickaxe",minTier:0,placeable:!1,color:[.86,.83,.74]}),At({id:hr,name:"Cobalt Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:4.2,tool:"pickaxe",minTier:3,placeable:!1,color:[.36,.46,.68]}),At({id:Hi,name:"Broken Thruster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.42,.44,.5]}),At({id:Zi,name:"Thruster (lit)",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.9,.6,.3]}),At({id:Ni,name:"Sandstorm Breaker",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.3,breakTime:5,tool:"disassembler",minTier:2,placeable:!0,color:[.72,.28,.24]}),At({id:sr,name:"Armoury",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:null,minTier:0,placeable:!0,color:[.45,.4,.36]})],ju=8,Qt=96,W=16,We=1440;function gn(i){return En[i].solid}function Qo(i){return En[i].opaque}function Tn(i){return i===Be||i>=ns&&i<=is}function Di(i){return i===Be?8:Tn(i)?33-i:0}function Ha(i){return 33-i}function n_(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class ta{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function mt(i,t,e){let n=i*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function $l(i){return i*i*(3-2*i)}function vc(i,t,e){const n=Math.floor(i),r=Math.floor(t),o=$l(i-n),s=$l(t-r),l=mt(n,r,e),h=mt(n+1,r,e),a=mt(n,r+1,e),c=mt(n+1,r+1,e);return l+(h-l)*o+(a-l)*s+(l-h-a+c)*o*s}function gs(i,t,e,n=4,r=2,o=.5){let s=0,l=1,h=1,a=0;for(let c=0;c<n;c++)s+=vc(i*h,t*h,e+c*101)*l,a+=l,l*=o,h*=r;return s/a}function i_(i,t,e,n=3){let r=0,o=1,s=1,l=0;for(let h=0;h<n;h++){const a=Math.abs(vc(i*s,t*s,e+h*101)*2-1);r+=(1-a)*o,l+=o,o*=.5,s*=2}return r/l}function Yl(i,t){const e=Math.floor(i),n=$l(i-e),r=mt(e,0,t),o=mt(e+1,0,t);return r+(o-r)*n}const s_=0,Kl=1,Zu=2,Vo=3,Tr=4,r_=1e6,$e=320,Ce=380,Ln=150;class Ju{constructor(t){this.seed=t;const e=new ta(t^24378);for(let n=0;n<6;n++){const r=e.range(0,Math.PI*2),o=e.range(160,900);this.oases.push({x:Math.round(Math.cos(r)*o),z:Math.round(Math.sin(r)*o),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),r=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,r=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}for(let n=0;n<13;n++){const r=e.range(0,Math.PI*2),o=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(r)*o),z:Math.round(Math.sin(r)*o),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(mt(t,e,this.seed+53)-.5)*110,r=(mt(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*$e+n),z:Math.round(e*$e+r)}}get gtx(){return Math.round(this.homeTown.x/$e)}get gtz(){return Math.round(this.homeTown.z/$e)}townAt(t,e){if(t===this.gtx&&e===this.gtz)return!0;if(Math.abs(t)<2&&Math.abs(e)<2||mt(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const r of this.oases)if(Math.hypot(r.x-n.x,r.z-n.z)<r.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let r=null,o=n;const s=Math.floor((t-n)/$e),l=Math.floor((t+n)/$e),h=Math.floor((e-n)/$e),a=Math.floor((e+n)/$e);for(let c=s;c<=l;c++)for(let u=h;u<=a;u++){if(!this.townAt(c,u))continue;const f=this.townCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=o&&(o=m,r=f)}return r}nearestTown(t,e){let n=null,r=1/0;const o=Math.floor(t/$e),s=Math.floor(e/$e);for(let l=o-4;l<=o+4;l++)for(let h=s-4;h<=s+4;h++){if(!this.townAt(l,h))continue;const a=this.townCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n=a)}return n??this.homeTown}mouthAt(t,e){if(!p_(this.seed,t,e))return!1;const n=this.mouthCenter(t,e);return!(this.nearOasis(n.x,n.z)||this.townNear(n.x,n.z,20))}mouthCenter(t,e){return m_(this.seed,t,e)}mouthNear(t,e,n){let r=null,o=n;const s=Math.floor((t-n)/Ln),l=Math.floor((t+n)/Ln),h=Math.floor((e-n)/Ln),a=Math.floor((e+n)/Ln);for(let c=s;c<=l;c++)for(let u=h;u<=a;u++){if(!this.mouthAt(c,u))continue;const f=this.mouthCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=o&&(o=m,r=f)}return r}campAt(t,e){return ed(this.seed,t,e)}campCenter(t,e){return Mc(this.seed,t,e)}campType(t,e){return v_(this.seed,t,e)}campNear(t,e,n){let r=null,o=n;const s=Math.floor((t-n)/Ce),l=Math.floor((t+n)/Ce),h=Math.floor((e-n)/Ce),a=Math.floor((e+n)/Ce);for(let c=s;c<=l;c++)for(let u=h;u<=a;u++){if(!this.campAt(c,u))continue;const f=this.campCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=o&&(o=m,r={x:f.x,z:f.z,type:this.campType(c,u)})}return r}nearestCamp(t,e){let n=null,r=1/0;const o=Math.floor(t/Ce),s=Math.floor(e/Ce);for(let l=o-3;l<=o+3;l++)for(let h=s-3;h<=s+3;h++){if(!this.campAt(l,h))continue;const a=this.campCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n={x:a.x,z:a.z,type:this.campType(l,h)})}return n}}function xc(i,t,e){const n=Math.min(.999,Math.max(.001,gs(i/900+.5,t/900+.5,e,3))),o=[.17,.42,.57,.72,.9].map(h=>Math.exp(-Math.abs(n-h)/.05)),s=Math.max(Math.abs(i),Math.abs(t));s<80&&(o[0]+=Math.pow(1-s/80,2)*6);const l=o.reduce((h,a)=>h+a,0);return o.map(h=>h/l)}function ko(i,t,e){const n=xc(i,t,e);let r=0;for(let o=1;o<5;o++)n[o]>n[r]&&(r=o);return r}function qh(i,t,e){const n=xc(t,e,i),r=[30+gs(t/140,e/140,i+7)*12+gs(t/45,e/45,i+8)*3+Math.sin(t/9+e/13)*.9,29+gs(t/160,e/160,i+9)*12+Math.max(0,vc(t/55,e/55,i+11)-.5)*18,28+gs(t/220,e/220,i+5)*3,33+Math.floor(gs(t/170,e/170,i+13)*7.99)*6,27-i_(t/210,e/210,i+17)*13-Math.max(0,gs(t/500,e/500,i+19)-.55)*10];let o=0;for(let s=0;s<5;s++)o+=n[s]*r[s];return o}function ie(i,t,e){const n=Math.max(Math.abs(t),Math.abs(e));if(n<=14)return 30;let r=qh(i,t,e);if(n<30){const s=(n-14)/16,l=s*s*(3-2*s);return 30+(r-30)*l}const o=o_(i,t,e);if(o){const s=Math.round(qh(i,o.cx,o.cz)),l=Math.min(1,(12-o.d)/3),h=l*l*(3-2*l);r+=(s-r)*h}return r}function o_(i,t,e){const n=Math.floor(t/Ce),r=Math.floor(e/Ce);let o=null;for(let s=n-1;s<=n+1;s++)for(let l=r-1;l<=r+1;l++){if(Math.abs(t-s*Ce)>42||Math.abs(e-l*Ce)>42||!ed(i,s,l))continue;const h=Mc(i,s,l),a=Math.max(Math.abs(h.x-t),Math.abs(h.z-e));a<=12&&(o===null||a<o.d)&&(o={cx:h.x,cz:h.z,d:a})}return o}function a_(i,t,e,n,r){const o=xc(t,e,i);let s=0,l=1;o[1]>o[0]&&(s=1,l=0);for(let h=2;h<5;h++)o[h]>o[s]?(l=s,s=h):o[h]>o[l]&&(l=h);return o[l]/o[s]>.35&&mt(t,e,i+45)<o[l]/(o[s]+o[l])&&(s=l),n===r?s===Zu?ss:s===Tr?De:s===Vo?yn:s===Kl&&mt(t,e,i+41)>.78?Is:ei:n>=r-3?s===Tr?De:ei:s===Vo||s===Tr?De:yn}function xs(i,t,e,n){const r=_=>_*_*(3-2*_),o=Math.floor(i),s=Math.floor(t),l=Math.floor(e),h=(_,A,E)=>mt(_+E*911,A+E*577,n),a=r(i-o),c=r(t-s),u=r(e-l),f=(_,A,E)=>_+(A-_)*E,m=f(h(o,s,l),h(o+1,s,l),a),v=f(h(o,s+1,l),h(o+1,s+1,l),a),y=f(h(o,s,l+1),h(o+1,s,l+1),a),x=f(h(o,s+1,l+1),h(o+1,s+1,l+1),a);return f(f(m,v,c),f(y,x,c),u)}const yc=i=>Math.min(i-4,30),Xh=new Map,Ar=i=>{let t=Xh.get(i);return t||(t=new Ju(i),Xh.set(i,t)),t};function $h(i,t,e,n,r){if(e<3||t*t+n*n<240)return!1;const o=r??Math.round(ie(i,t,n));let s=yc(o);for(const a of Ar(i).oases)Math.abs(t-a.x)<=a.r+1&&Math.abs(n-a.z)<=a.r+1&&(s=Math.min(s,Math.round(ie(i,a.x,a.z))-5));if(e>s)return!1;const l=xs(t/9,e/5.5,n/9,i+301),h=xs(t/23,e/15,n/23,i+307);return l*.55+h*.45>.575+Math.max(0,s-e-4)*.005}const Li=(i,t,e)=>i+","+t+","+e;function l_(i,t,e){if(mt(i,t,e+121)>=.6)return null;const n=Math.round(ie(e,i,t)),r=n-4,o=n-16;if(o<4)return null;const s=2+(mt(i,t,e+123)*3|0),l=[];for(let L=0;L<s;L++){const k=-1+(mt(i+L*3,t,e+125)*4|0),N=-1+(mt(i,t+L*3,e+127)*4|0);l.push({x:i+k*6,z:t+N*6,hx:1+(mt(i-L,t+L,e+129)*3|0),hz:1+(mt(i+L,t-L,e+131)*3|0)})}const h=new Set;let a=1/0,c=-1/0,u=1/0,f=-1/0,m=1/0,v=-1/0;const y=(L,k,N)=>{h.add(Li(L,k,N)),L<a&&(a=L),L>c&&(c=L),N<u&&(u=N),N>f&&(f=N),k<m&&(m=k),k>v&&(v=k)},x=(L,k,N,H,Y,V)=>{for(let J=Math.min(L,k);J<=Math.max(L,k);J++)for(let tt=Math.min(N,H);tt<=Math.max(N,H);tt++)for(let vt=Y;vt<=V;vt++)y(J,vt,tt)};for(const L of l)x(L.x-L.hx,L.x+L.hx,L.z-L.hz,L.z+L.hz,o,r);for(let L=1;L<l.length;L++)x(l[L-1].x,l[L].x,l[L-1].z,l[L-1].z,o,r),x(l[L].x,l[L].x,l[L-1].z,l[L].z,o,r);const _=l[0],A=mt(i,t+1,e+133)>.5?1:-1,E=mt(i+1,t,e+135)>.5?1:-1,S=_.x+A*(_.hx+1),b=_.z+E*(_.hz+1);x(S,S+1,b,b+1,o,r-3);const R=[[9,-6],[9,7],[-11,-5]][mt(i,t,e+137)*3|0],p={x:i+R[0],z:t+R[1]},d=Math.round(ie(e,p.x,p.z)),g=d,M=Math.min(r-8,d-3);if(g-M<4)return null;const C=[[0,0],[1,0],[1,1],[0,1]];for(let L=0;L<=g-M;L++){const k=C[L&3],N=g-L;y(p.x+k[0],N,p.z+k[1]),y(p.x+k[0],N+1,p.z+k[1])}return x(p.x,_.x,p.z,p.z,M,M+1),x(_.x,_.x,p.z,_.z,M,M+1),{x0:a,x1:c,z0:u,z1:f,y0:m,y1:v,air:h,sh:{...p,y0:g}}}function c_(i,t,e){const n=l_(t.x,t.z,e);if(n){for(let r=n.x0;r<=n.x1;r++)for(let o=n.z0;o<=n.z1;o++)for(let s=n.y0;s<=n.y1;s++)n.air.has(Li(r,s,o))&&i(r,s,o,bt);for(let r=n.x0-1;r<=n.x1+1;r++)for(let o=n.z0-1;o<=n.z1+1;o++)for(let s=n.y0-1;s<=n.y1+1;s++){if(n.air.has(Li(r,s,o)))continue;(n.air.has(Li(r+1,s,o))||n.air.has(Li(r-1,s,o))||n.air.has(Li(r,s+1,o))||n.air.has(Li(r,s-1,o))||n.air.has(Li(r,s,o+1))||n.air.has(Li(r,s,o-1)))&&i(r,s,o,mt(r*3+o*7,s*5+o,e+139)<.16?Ls:xi)}}}function h_(i){const n=(a,c)=>a===4||a===-6?Math.abs(c)<=4:c===5||c===-5?a>=-5&&a<=3:a>=-5&&a<=3&&c>=-4&&c<=4,r=(a,c,u)=>(a===4||a===-6)&&Math.abs(u)>=3&&(c===30||c===34),o=(a,c)=>Math.abs(c)===5&&(a===3||a===-5),s=(a,c,u)=>Math.abs(c)===5&&a>=-3&&a<=2&&u>=31&&u<=33;for(let a=-6;a<=4;a++)for(let c=-5;c<=5;c++)for(let u=30;u<=34;u++){if(!n(a,c)||r(a,u,c))continue;const f=a>=2&&Math.abs(c)>2,m=a>=-5&&a<=3&&c>=-4&&c<=4&&u>=31&&u<=33&&!f;i(a,u,c,m?bt:o(a,c)||s(a,c,u)?$n:u===30?ln:He)}for(let a=-3;a<=1;a++)for(let c=-2;c<=2;c++)i(a,35,c,Yn);for(let a=-2;a<=0;a++)for(let c=-1;c<=1;c++)i(a,36,c,Yn);for(let a=-2;a<=1;a++)for(const c of[6,7,8,9,-6,-7,-8,-9])i(a,32,c,ln);for(const a of[-3,2])for(const c of[6,7,8,-6,-7,-8])i(a,32,c,ln);for(const a of[-1,0])i(a,31,10,ln),i(a,31,-10,ln);for(const a of[-1,0])i(a,31,11,ln),i(a,31,-11,ln);for(const a of[-1,0])i(a,32,11,Hi),i(a,32,-11,Hi);const l=(a,c,u)=>{i(a,c,u,Qe),i(a,c+1,u,Ye)},h=(a,c,u)=>{i(a,c,u,Je),i(a,c+1,u,ze)};for(let a=-4;a<=4;a++)for(let c=31;c<=33;c++)i(1,c,a,He),i(-2,c,a,He);for(let a=-5;a<=-3;a++)for(const c of[-2,2])for(let u=31;u<=33;u++)i(a,u,c,He);h(1,31,0),h(-2,31,0),h(-2,31,3),h(-2,31,-3),l(-6,31,0);for(let a=-2;a<=2;a++)for(let c=32;c<=33;c++)i(4,c,a,Ps);i(2,31,-2,cn),i(3,31,-2,un),i(-4,30,4,Be),i(-4,29,4,Be),i(-3,30,4,Be);for(const[a,c]of[[0,-1],[1,0],[-1,0],[0,1],[0,-2]])i(-4+a,29,4+c,xn);i(-4,28,4,xn),i(-3,30,3,xn),i(-5,30,4,xn),i(-4,31,-4,zi),i(-4,31,-1,Pn),i(0,31,-3,Ae),i(0,31,-2,ke),i(-1,31,1,Ni);for(const[a,c]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])i(a,34,c,kn);for(const[a,c]of[[0,3],[0,4],[-1,4],[2,2]])i(a,31,c,ln)}function u_(i,t,e){const n=new ta(r_+77),r=Math.round(ie(e,t.x,t.z));for(let o=-2;o<=2;o++)for(let s=-2;s<=2;s++){if(Math.abs(o)!==2&&Math.abs(s)!==2)continue;const l=Math.abs(o)===2&&Math.abs(s)===2;for(let h=r+1;h<=r+3;h++)i(t.x+o,h,t.z+s,l?$n:He)}for(let o=r+1;o<=r+2;o++)i(t.x,o,t.z-2,bt);for(let o=0;o<40;o++){const s=t.x+n.int(-5,5),l=t.z+n.int(-5,5),h=Math.round(ie(e,s,l)),a=n.next();i(s,h+n.int(0,1),l,a<.45?He:a<.55?$n:ln)}i(t.x,Math.round(ie(e,t.x,t.z))+1,t.z,ts)}function Qu(i,t,e,n){const r=5+Math.floor(n()*3),o=[],s=(u,f,m,v,y)=>o.push({x:u,y:f,z:m,b:v,stage:y});s(i,t,e,An,1),s(i,t+1,e,An,1);for(let u=2;u<r;u++)s(i,t+u,e,An,2);const l=[[1,0],[-1,0],[0,1],[0,-1]],h=2+(n()<.5?1:0);for(let u=0;u<h;u++){const f=l[Math.floor(n()*4)];s(i+f[0],t+r-2+u%2,e+f[1],An,2)}const a=new Set(o.map(u=>u.x+","+u.y+","+u.z)),c=t+r-1;for(let u=-1;u<=2;u++){const f=u===-1||u===2?1.7:2.4;for(let m=-3;m<=3;m++)for(let v=-3;v<=3;v++){const y=m*m+v*v+u*u*2.2;if(y>f*f||y>(f-.9)*(f-.9)&&n()<.3||m===0&&v===0)continue;const x=i+m,_=c+u,A=e+v;a.has(x+","+_+","+A)||s(x,_,A,di,3)}}return o}function td(i,t,e,n,r,o){const s=new ta(mt(t,n,r+o)*4294967296>>>0||1);for(const l of Qu(t,e+1,n,()=>s.next()))i(l.x,l.y,l.z,l.b)}function d_(i,t,e){const n=Math.round(ie(e,t.x,t.z));for(let s=-t.r-1;s<=t.r+1;s++)for(let l=-t.r-1;l<=t.r+1;l++){const h=t.x+s,a=t.z+l,c=Math.sqrt(s*s+l*l),u=Math.round(ie(e,h,a));if(c<=t.r){const f=Math.max(1,Math.round(2.7-1.7*(c/t.r)));for(let m=u;m>n-f;m--)i(h,m,a,bt);i(h,n-f,a,ei);for(let m=n-f+1;m<=n;m++)i(h,m,a,Be);for(let m=n+1;m<=n+12;m++)i(h,m,a,bt)}else if(c<=t.r+1)for(let f=u;f<n+1;f++)i(h,f,a,ei)}const r=3+(mt(t.x,t.z,e+73)<.5?1:0);for(let s=-t.r-r;s<=t.r+r;s++)for(let l=-t.r-r;l<=t.r+r;l++){const h=Math.sqrt(s*s+l*l);if(h<=t.r||h>t.r+r)continue;const a=t.x+s,c=t.z+l,u=Math.max(Math.round(ie(e,a,c)),n);for(let f=u-2;f<=u;f++)i(a,f,c,f===u?ni:xn)}const o=4+Math.floor(mt(t.x,t.z,e+75)*4);for(let s=0;s<o;s++){const l=s*(Math.PI*2/o)+mt(t.x+s,t.z-s,e+77)*1.1,h=t.r+1.5+mt(t.x-s,t.z+s,e+79)*(r+2),a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h),u=Math.max(Math.round(ie(e,a,c)),n);td((f,m,v,y)=>{m>n&&Math.hypot(f-t.x,v-t.z)<=t.r||i(f,m,v,y)},a,u,c,e,81)}for(let s=0;s<5;s++){if(mt(t.x,t.z,e+61+s)<.35)continue;const l=s*1.27+mt(t.z,t.x,e+67+s)*.8,h=t.r+.5,a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h);Math.hypot(a-t.x,c-t.z)<t.r+1||i(a,Math.max(Math.round(ie(e,a,c)),n)+1,c,wn)}}function f_(i,t,e){for(const[a,c]of[[-4,-3],[3,2],[-3,5]]){const u=Math.round(ie(e,t.x+a,t.z+c));for(let f=0;f<5;f++)for(let m=0;m<5;m++)for(let v=u-1;v<=u+3;v++){const y=v===u-1,x=(f===0||f===4||m===0||m===4)&&v>=u&&v<=u+2,_=v===u+3,A=f===0&&(m===2||m===3)&&v>=u&&v<=u+2;if(!(y||x||_)||A){i(t.x+a+f,v,t.z+c+m,bt);continue}i(t.x+a+f,v,t.z+c+m,xi)}i(t.x+a+1,u,t.z+c+1,Ne),i(t.x+a+2,u,t.z+c+1,cn),i(t.x+a+3,u,t.z+c+1,un)}const n=t.x+3+Math.round((mt(t.x,t.z,e+83)-.5)*8),r=t.z-3+Math.round((mt(t.z,t.x,e+85)-.5)*8),o=2.5+mt(t.x,t.z,e+87)*2,s=(a,c)=>[[-4,-3],[3,2],[-3,5]].some(([u,f])=>a>=u-1+t.x&&a<=u+5+t.x&&c>=f-1+t.z&&c<=f+5+t.z);for(let a=-5;a<=5;a++)for(let c=-5;c<=5;c++){if(Math.sqrt(a*a+c*c)>o)continue;const u=n+a,f=r+c;if(s(u,f))continue;const m=Math.round(ie(e,u,f));for(let v=m-2;v<=m;v++)i(u,v,f,v===m?ni:xn)}const l=3+Math.floor(mt(t.x,t.z,e+89)*4);for(let a=0;a<l;a++){const c=a*(Math.PI*2/l)+mt(t.x+a,t.z-a,e+91)*1.3,u=1+mt(t.x-a,t.z+a,e+93)*o,f=n+Math.round(Math.cos(c)*u),m=r+Math.round(Math.sin(c)*u);s(f,m)||td(i,f,Math.round(ie(e,f,m)),m,e,95)}const h=Math.round(ie(e,t.x,t.z+11));for(let a=0;a<5;a++)for(let c=0;c<3;c++)i(t.x-8+a,h,t.z+10+c,Un);i(t.x-7,h+1,t.z+11,vn),i(t.x-5,h+1,t.z+10,vn),i(t.x-4,h+1,t.z+12,wn)}function p_(i,t,e){return Math.abs(t)<=1&&Math.abs(e)<=1?!1:mt(t,e,i+311)<.55}function m_(i,t,e){const n=(mt(t,e,i+313)-.5)*60,r=(mt(t,e,i+315)-.5)*60;return{x:Math.round(t*Ln+n),z:Math.round(e*Ln+r)}}const g_=[[1,0],[-1,0],[0,1],[0,-1]];function __(i,t,e){if(t.x*t.x+t.z*t.z<1600)return;const[n,r]=g_[mt(t.x,t.z,e+317)*4|0],[o,s]=[-r,n],l=Math.round(ie(e,t.x,t.z));let h=-1;for(let b=1;b<=3;b++)if(Math.round(ie(e,t.x+n*b,t.z+r*b))<=l-2){h=b;break}if(h<0)return;const a=t.x+n*(h-1),c=t.z+r*(h-1),u=Math.round(ie(e,t.x+n*h,t.z+r*h)),f=Math.round(ie(e,a,c)),m=Math.max(Math.min(u+1,f),8);if(f<m+2)return;const v=12+(mt(t.x,t.z,e+319)*5|0),y=a+n*v,x=c+r*v,_=yc(Math.round(ie(e,y,x)))-1;if(_<6||_>m-4)return;for(let b=2;b<v;b++){const I=a+n*b,R=c+r*b,p=m-Math.round(b*(m-_)/v);if(Math.round(ie(e,I,R))<p+2||Math.round(ie(e,I+o,R+s))<p+2)return}const A=new Set,E=(b,I,R)=>{I<6||(A.add(b+","+I+","+R),i(b,I,R,bt))};for(let b=0;b<=v;b++){const I=a+n*b,R=c+r*b,p=b===v?_:m-Math.round(b*(m-_)/v);for(const d of[0,1])E(I+o*d,p,R+s*d),E(I+o*d,p+1,R+s*d),b<=1&&E(I+o*d,p+2,R+s*d)}for(let b=y-2;b<=y+2;b++)for(let I=x-2;I<=x+2;I++){for(let R=_;R<=_+2;R++)E(b,R,I);i(b,_-1,I,De),i(b,_+3,I,De)}for(const b of A){const I=b.split(","),R=+I[0],p=+I[1],d=+I[2];for(const[g,M,C]of[[R+1,p,d],[R-1,p,d],[R,p+1,d],[R,p-1,d],[R,p,d+1],[R,p,d-1]])M<5||A.has(g+","+M+","+C)||M<=Math.round(ie(e,g,C))&&i(g,M,C,De)}for(const[b,I]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){if(b===n&&I===r)continue;const R=a+b,p=c+I;i(R,Math.round(ie(e,R,p)),p,De)}for(const b of[0,1])i(a+o*b,m-1,c+s*b,De);i(a+n,m+3,c+r,De);const S=2+(mt(t.x+7,t.z-3,e+321)*3|0);for(let b=0;b<S;b++){const I=1+(mt(t.x+b,t.z,e+323)*3|0),R=(mt(t.x-b,t.z,e+325)*3|0)-1,p=t.x+n*(h+I)+o*R,d=t.z+r*(h+I)+s*R;i(p,Math.round(ie(e,p,d))+1,d,mt(p,d,e+327)>.5?Is:De)}}function ed(i,t,e){if(Math.abs(t)<=1&&Math.abs(e)<=1||mt(t,e,i+401)>=.8)return!1;const n=Mc(i,t,e),r=Ar(i);for(const o of r.oases)if(Math.hypot(o.x-n.x,o.z-n.z)<o.r+20)return!1;return!(Math.hypot(r.secondShip.x-n.x,r.secondShip.z-n.z)<40||r.townNear(n.x,n.z,25)!==null)}function Mc(i,t,e){const n=(mt(t,e,i+403)-.5)*60,r=(mt(t,e,i+405)-.5)*60;return{x:Math.round(t*Ce+n),z:Math.round(e*Ce+r)}}function v_(i,t,e){return mt(t,e,i+407)*3|0}function x_(i){return{x:i.x+1.5,z:i.z-1.5}}function y_(i,t,e){const n=Math.round(ie(e,t.x,t.z));i(t.x+2,n+1,t.z+1,xi);for(const[o,s]of[[3,1],[2,2],[3,2]])for(let l=n+1;l<=n+2;l++)i(t.x+o,l,t.z+s,An);i(t.x+3,n+3,t.z+1,ln),i(t.x+2,n+3,t.z+2,ln),i(t.x+3,n+3,t.z+2,ln),i(t.x+2,n+3,t.z+1,kn),i(t.x-2,n+1,t.type===1?t.z+3:t.z,Ze);const r=(o,s,l,h)=>{const a=o-(l>>1),c=o+(l>>1),u=s-(h>>1),f=s+(h>>1);for(let m=a;m<=c;m++)for(let v=u;v<=f;v++)for(let y=n;y<=n+4;y++){const x=m===a||m===c||v===u||v===f,_=y===n||y===n+4||x&&y<=n+3;i(m,y,v,_?xi:bt)}i(c,n+1,s,Qe),i(c,n+2,s,Ye),i(c,n+1,s+1,bt),i(c,n+2,s+1,bt),i(a+1,n+1,s+1,Ne),i(c-2,n+1,s-1,cn),i(c-2,n+1,s,un),i(c-1,n+3,u+1,kn)};if(t.type===0){for(let l=-2;l<=2;l++)for(let h=-2;h<=2;h++){if(l*l+h*h>4.5||l===2&&h===0)continue;const a=t.x-4+l,c=t.z+h,u=mt(a*3+1,c*5-2,e+411)>.62?xi:yn;for(let f=n;f<=n+9;f++)i(a,f,c,u)}for(let l=2;l<=3;l++)i(t.x-4-l,n+7,t.z,An);i(t.x-7,n+7,t.z,ln);for(let l=1;l<=3;l++)i(t.x-7,n+7+l,t.z,Qn),i(t.x-7,n+7-l,t.z,Qn),i(t.x-7,n+7,t.z+l,Qn),i(t.x-7,n+7,t.z-l,Qn);const o=t.x-7,s=t.z+2;for(let l=o-1;l<=o+1;l++)for(let h=s-1;h<=s+1;h++)for(let a=n;a<=n+3;a++){const c=l===o+1&&h===s&&(a===n+1||a===n+2);!(a===n||a===n+3||(Math.abs(l-o)===1||Math.abs(h-s)===1)&&a<=n+2)||c?i(l,a,h,bt):i(l,a,h,xi)}i(o,n+1,s,Ne)}else if(t.type===1)r(t.x-4,t.z,5,5);else{r(t.x-5,t.z-3,7,5);for(let s=t.x+4;s<=t.x+9;s++)for(let l=t.z-4;l<=t.z-1;l++)i(s,n,l,Un),s===t.x+4&&l===t.z-4||s===t.x+9&&l===t.z-1?i(s,n+1,l,wn):i(s,n+1,l,(s+l)%2?qn:vn);const o=(s,l)=>{i(s,n+1,l,Qn),i(s,n+2,l,Qn)};for(let s=t.x+3;s<=t.x+10;s+=2)o(s,t.z-5),o(s,t.z);for(let s=t.z-3;s<=t.z-1;s+=2)o(t.x+3,s),o(t.x+10,s);for(let s=t.x;s<=t.x+3;s++)for(let l=t.z+3;l<=t.z+5;l++){const h=s>=t.x+1&&s<=t.x+2&&l===t.z+4;i(s,n+1,l,h?Be:De)}}}function M_(i,t,e,n){const r=new Uint8Array(W*W*Qt),o=(R,p,d,g)=>{const M=R-e*W,C=d-n*W;M>=0&&M<W&&C>=0&&C<W&&p>=0&&p<Qt&&(r[(M*W+C)*Qt+p]=g)},s=W+2,l=new Uint8Array(s*s*Qt),h=new Int16Array(s*s).fill(-1),a=(R,p)=>{const d=(R-e*W+1)*s+(p-n*W+1);return h[d]<0&&(h[d]=Math.round(ie(i,R,p))),h[d]},c=(R,p,d)=>{const g=R-e*W+1,M=d-n*W+1;if(g<0||g>=s||M<0||M>=s)return $h(i,R,p,d);const C=(g*s+M)*Qt+p;return l[C]||(l[C]=$h(i,R,p,d,a(R,d))?2:1),l[C]===2};for(let R=0;R<W;R++)for(let p=0;p<W;p++){const d=e*W+R,g=n*W+p,M=Math.round(ie(i,d,g));for(let k=0;k<=M;k++)r[(R*W+p)*Qt+k]=a_(i,d,g,k,M);const C=d*d+g*g<240,L=yc(M);if(!C)for(let k=3;k<=L;k++){const N=(R*W+p)*Qt+k;if(c(d,k,g)){r[N]=k>=8&&k<=18&&xs(d/26,k/19,g/26,i+401)>.785?Be:bt;continue}const H=r[N];H!==De&&H!==yn||(c(d+1,k,g)||c(d-1,k,g)||c(d,k+1,g)||c(d,k-1,g)||c(d,k,g+1)||c(d,k,g-1))&&(k<=15&&mt(d*5+k,g*7-k,i+333)<.4&&xs(d/5+40,k/5,g/5,i+331)>.72?r[N]=hr:k>=12&&xs(d/5,k/5,g/5,i+313)>.665?r[N]=lr:k>=12&&xs(d/5,k/5+60,g/5,i+317)>.7?r[N]=cr:k>=8&&k<=24&&xs(d/5,k/5,g/5+70,i+321)>.715&&(r[N]=Ls))}if(!C&&M>=12&&mt(d,g,i+201)>.984&&t.townNear(d,g,14)===null&&t.nearOasis(d,g)===null){const k=L-4;if(k>=7){for(let N=M-1;N>=k;N--)r[(R*W+p)*Qt+N]=bt;r[(R*W+p)*Qt+(k-1)]=De}}if(!C&&mt(d,g,i+21)>.988){const k=ko(d,g,i),N=(H,Y)=>H>=0&&H<W&&Y>=0&&Y<W;if(k===Vo||k===Tr){const H=3+(mt(d,g,i+22)*3|0);for(let Y=1;Y<=H;Y++)o(d,M+Y,g,De);R>0&&mt(d,g,i+27)>.5&&o(d-1,M+1,g,De)}else if(k===Kl){const H=2+(mt(d,g,i+24)*2|0),Y=[[1,0],[-1,0],[0,1],[0,-1]][mt(d,g,i+25)*4|0];for(let V=0;V<H;V++)o(d,M+1+V,g,De);N(R+Y[0],p+Y[1])&&o(d+Y[0],M+H,g+Y[1],De)}else if(k===Zu)for(const[H,Y]of[[0,0],[1,0],[0,1],[1,1]])N(R+H,p+Y)&&o(d+H,M+1,g+Y,ss);else{const H=2+(mt(d,g,i+26)*3|0);for(let Y=0;Y<H;Y++){const V=(mt(d+Y,g,i+33)*3|0)-1,J=(mt(d,g+Y,i+35)*3|0)-1;N(R+V,p+J)&&o(d+V,M+1,g+J,mt(d+Y,g-Y,i+43)>.5?De:yn)}}}if(!C&&mt(d,g,i+23)>.9935){const k=ko(d,g,i);if(k!==Vo&&k!==Tr){const N=3+(mt(d,g,i+29)*3|0);for(let H=M+1;H<=M+N;H++)o(d,H,g,Qn)}}if(!C&&r[(R*W+p)*Qt+M+1]===0&&mt(d,g,i+31)>.9915){const k=ko(d,g,i);if(k===s_||k===Kl){const N=2+(mt(d,g,i+37)*3|0);for(let H=M+1;H<=M+N;H++)o(d,H,g,hn);N>=3&&mt(d,g,i+41)>.55&&o(d+(mt(d,g,i+43)>.5?1:-1),M+2,g,hn),N>=3&&mt(d,g,i+47)>.7&&o(d,M+N,g,ui)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&h_(o);for(const R of t.oases)Math.abs(e*W+8-R.x)<R.r+24&&Math.abs(n*W+8-R.z)<R.r+24&&d_(o,R,i);const u=Math.floor((e*W-14-$e)/$e),f=Math.floor((e*W+W+14+$e)/$e),m=Math.floor((n*W-14-$e)/$e),v=Math.floor((n*W+W+14+$e)/$e);for(let R=u;R<=f;R++)for(let p=m;p<=v;p++){if(!t.townAt(R,p))continue;const d=t.townCenter(R,p);e*W<=d.x+16&&e*W+W-1>=d.x-12&&n*W<=d.z+12&&n*W+W-1>=d.z-16&&f_(o,d,i),e*W<=d.x+30&&e*W+W-1>=d.x-30&&n*W<=d.z+30&&n*W+W-1>=d.z-30&&c_(o,d,i)}const y=Math.floor((e*W-48-Ce)/Ce),x=Math.floor((e*W+W-1+48+Ce)/Ce),_=Math.floor((n*W-48-Ce)/Ce),A=Math.floor((n*W+W-1+48+Ce)/Ce);for(let R=y;R<=x;R++)for(let p=_;p<=A;p++){if(!t.campAt(R,p))continue;const d=t.campCenter(R,p);e*W<=d.x+12&&e*W+W-1>=d.x-12&&n*W<=d.z+6&&n*W+W-1>=d.z-10&&y_(o,{x:d.x,z:d.z,type:t.campType(R,p)},i)}const E=Math.floor((e*W-54-Ln)/Ln),S=Math.floor((e*W+W-1+54+Ln)/Ln),b=Math.floor((n*W-54-Ln)/Ln),I=Math.floor((n*W+W-1+54+Ln)/Ln);for(let R=E;R<=S;R++)for(let p=b;p<=I;p++){if(!t.mouthAt(R,p))continue;const d=t.mouthCenter(R,p);e*W<=d.x+24&&e*W+W-1>=d.x-24&&n*W<=d.z+24&&n*W+W-1>=d.z-24&&__(o,d,i)}return Math.abs(e*W+8-t.secondShip.x)<12&&Math.abs(n*W+8-t.secondShip.z)<12&&u_(o,t.secondShip,i),r}const li=(i,t)=>i+","+t,Yh=(i,t,e)=>(i*W+t)*Qt+e,Ga=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Kh=new Set([bt,Xe,Je,ze,je,di]);class b_{constructor(t){this.seed=t,this.gen=new Ju(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;rots=new Map;waterQ=new Set;gen;chunk(t,e){const n=li(t,e);let r=this.chunks.get(n);if(!r){r=M_(this.seed,this.gen,t,e);const o=this.deltas.get(n);if(o)for(const[s,l]of o)r[s]=l;this.chunks.set(n,r)}return r}get(t,e,n){if(e<0||e>=Qt)return bt;const r=Math.floor(t/W),o=Math.floor(n/W);return this.chunk(r,o)[Yh(t-r*W,n-o*W,e)]}skyResistance(t,e,n,r=40){let o=0,s=0;for(let l=1;l<=r;l++){const h=this.get(t,e+l,n);if(h===bt)continue;const a=S_[h];if(a&&(o+=a,h!==di&&(s+=a,s>=6)))return{R:o,openSky:!1}}return{R:o,openSky:s===0}}sunVisible(t,e,n,r,o,s,l=64){if(o<=0)return!1;let h=t,a=e,c=n;const u=Math.sign(r),f=1,m=Math.sign(s),v=u?Math.abs(1/r):1/0,y=1/o,x=m?Math.abs(1/s):1/0;let _=u?(u>0?h+1-(t+.5):t+.5-h)*v:1/0,A=(e+1-(e+.5))*y,E=m?(m>0?c+1-(n+.5):n+.5-c)*x:1/0;for(let S=0;S<192;S++){let b;if(_<=A&&_<=E?(h+=u,b=_,_+=v):A<=E?(a+=f,b=A,A+=y):(c+=m,b=E,E+=x),b>l)return!0;const I=this.get(h,a,c);if(I===Ps||Qo(I))return!1}return!0}roomInfo(t,e,n,r=400){if(!Kh.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const o=new Set([`${t},${e},${n}`]),s=[[t,e,n]],l=new Set;let h=0,a=!0;for(;s.length;){const[c,u,f]=s.pop();if(++h>r){a=!1;break}for(const[m,v,y]of Ga){const x=c+m,_=u+v,A=f+y;if(_>=Qt){a=!1;continue}const E=this.get(x,_,A);if(Kh.has(E)){const S=x+","+_+","+A;o.has(S)||(o.add(S),s.push([x,_,A]))}else E===zi&&l.add(x+","+_+","+A)}}return{size:h,sealed:a,regulators:l.size,regCells:[...l]}}set(t,e,n,r){if(e<0||e>=Qt)return;const o=Math.floor(t/W),s=Math.floor(n/W),l=this.chunk(o,s),h=Yh(t-o*W,n-s*W,e);if(l[h]===r)return;const a=l[h];if(l[h]=r,Tn(r)||Tn(a)||r===bt){this.queueWater(t,e,n);for(const[m,v,y]of Ga)this.queueWater(t+m,e+v,n+y)}let c=this.deltas.get(li(o,s));c||this.deltas.set(li(o,s),c=new Map),c.set(h,r),this.rots.delete(t+","+e+","+n),this.markDirty(o,s);const u=t-o*W,f=n-s*W;u===0&&this.markDirty(o-1,s),f===0&&this.markDirty(o,s-1),u===W-1&&this.markDirty(o+1,s),f===W-1&&this.markDirty(o,s+1)}markDirty(t,e){this.dirty.add(li(t,e))}getRot(t,e,n){return this.rots.get(t+","+e+","+n)??0}setRot(t,e,n,r){const o=t+","+e+","+n;r&3?this.rots.set(o,r&3):this.rots.delete(o)}queueWater(t,e,n){e>=0&&e<Qt&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;const n=[...this.waterQ];this.waterQ.clear();for(const r of n){if(e>=t)break;const[o,s,l]=r.split(",").map(Number);e+=this.drainFlow(o,s,l,t-e),e+=this.floodFrom(o,s,l,t-e)}return e}drainFlow(t,e,n,r){let o=0;const s=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],l=new Set;for(;s.length&&o++<r;){const[h,a,c]=s.pop(),u=Di(this.get(h,a,c));if(!u||u===8)continue;const f=h+","+a+","+c;if(!l.has(f)&&(l.add(f),!this.waterSupported(h,a,c,u))){this.set(h,a,c,bt);for(const[m,v,y]of Ga)s.push([h+m,a+v,c+y])}}return o}waterSupported(t,e,n,r){for(const[o,s]of[[1,0],[-1,0],[0,1],[0,-1]])if(Di(this.get(t+o,e,n+s))>r)return!0;return Di(this.get(t,e+1,n))>0}floodFrom(t,e,n,r){let o=0;const s=[[t,e,n]];for(;s.length&&o++<r;){const[l,h,a]=s.shift(),c=this.get(l,h-1,a);let u=Di(this.get(l,h,a));if(u&&u!==8&&u<7&&Di(this.get(l,h+1,a))>0&&(this.set(l,h,a,Ha(7)),u=7),!u||(h>0&&(c===bt||Tn(c))&&Di(c)<u&&this.set(l,h-1,a,Ha(u===8?7:u)),c===bt||Tn(c)))continue;const f=u===8?7:u-1;if(!(f<1))for(const[m,v]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=this.get(l+m,h,a+v);(y===bt||Tn(y))&&Di(y)<f&&this.set(l+m,h,a+v,Ha(f))}}return o}surface(t,e){for(let n=Qt-1;n>=0;n--)if(this.get(t,n,e)!==bt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const r=[];for(const[o,s]of n)r.push(o,s);t[e]=r}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const r=new Map;for(let o=0;o<n.length;o+=2)r.set(n[o],n[o+1]);this.deltas.set(e,r)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}serializeRots(){return Object.fromEntries(this.rots)}loadRots(t){this.rots=new Map(Object.entries(t??{}).map(([e,n])=>[e,n]))}}const S_=En.map(i=>i.R);function wo(i,t,e,n,r){const o=i.get(t,e,n);return o===Qe||o===Ye||o===Je||o===ze||o===Ae||o===ke||o===$n||o===Yn?!0:!(Qo(o)||o===r)}const Eo=.6,w_=1.8,jh=1.62;class E_{constructor(t){this.world=t}pos=new F(.5,31.01,2.5);vel=new F;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;fallPeakY=this.pos.y;lastFallDist=0;waterAt(t){const e=this.pos.y+t,n=Math.floor(e),r=this.world.get(Math.floor(this.pos.x),n,Math.floor(this.pos.z));return Tn(r)?e-n<Di(r)/8:!1}collides(t,e,n){const r=Math.floor(t-Eo/2),o=Math.floor(t+Eo/2),s=Math.floor(n-Eo/2),l=Math.floor(n+Eo/2),h=Math.floor(e),a=Math.floor(e+w_-.001);for(let c=r;c<=o;c++)for(let u=s;u<=l;u++)for(let f=h;f<=a;f++)if(gn(this.world.get(c,f,u)))return!0;return!1}update(t,e,n,r,o,s){this.onGround?this.fallPeakY=this.pos.y:this.pos.y>this.fallPeakY&&(this.fallPeakY=this.pos.y),this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(jh);const l=this.inWater,h=(this.sprinting?7.2:4.5)*o*(s?.25:1)*(l?.55:1),a=new F(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new F(-a.z,0,a.x),u=a.multiplyScalar(n).add(c.multiplyScalar(e));u.lengthSq()>1&&u.normalize();const f=this.onGround?40:l?12:8;this.vel.x+=(u.x*h-this.vel.x)*Math.min(1,f*t),this.vel.z+=(u.z*h-this.vel.z)*Math.min(1,f*t),l?(this.vel.y-=7*t,r&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=vi.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,r&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0),this.fallPeakY=40,this.lastFallDist=0),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,r=Math.max(1,Math.ceil(Math.abs(t)/.3)),o=t/r;for(let s=0;s<r;s++){const l=n.x+(e===0?o:0),h=n.y+(e===1?o:0),a=n.z+(e===2?o:0);if(!this.collides(l,h,a)){n.set(l,h,a);continue}e===1?(o<0&&(this.lastFallDist=Math.max(0,this.fallPeakY-n.y),this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new F(this.pos.x,this.pos.y+jh,this.pos.z)}}const ys=20,br=45,bc=36,ea=37.5,jl=39.5,Zl=31.5,Jl=5,Zh=22,T_=27,A_=25,Rr=150;class R_{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;storm=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};regulatedAir=!1;embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%We/We}ambient(t,e,n){const r=(e-.28+1)%1;let o=T_-A_*(r<=.3?Math.cos(r/.3*Math.PI):Math.cos((1+(r-.3)/.7)*Math.PI));t===2&&(o-=2),(t===3||t===4)&&(o+=3);const s=Yl(Math.floor(n/10)/60,this.weatherSeed)*2-1;return o+s*8}stormAt(t){const e=Yl(Math.floor(t/300)/15,this.weatherSeed+911);return e>.7?Math.min(1,(e-.7)/.15):0}update(t,e,n,r){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const o=this.worldTimeToDayFrac(r.tSec),s=this.ambient(r.biome,o,r.tSec),l=Math.floor(n.x),h=Math.floor(n.y),a=Math.floor(n.z),c=(S,b,I)=>{const R=b<=r.terrainH(S,I)-2,p=R?Zh:s,{R:d,openSky:g}=e.skyResistance(S,b,I);let M=1-Math.exp(-d),C=p;!R&&r.sunElev>0&&r.sunDir&&e.sunVisible(S,b,I,r.sunDir.x,r.sunDir.y,r.sunDir.z)&&(C+=8+10*r.sunElev);const L=e.roomInfo(S,b,I);return L.sealed&&(L.regulators*Rr>=L.size?(C=36.6,M=1):(C=p,R||(M=0))),{R:d,openSky:g,shelter:M,ambEff:C,room:L,deep:R}};let u=c(l,h,a);if(u.room.size===0){const S=`${l},${h},${a}|${Math.floor(r.tSec*2)}`;if(this.embedKey!==S){let b=u;for(let I=-1;I<=1;I++)for(let R=-1;R<=1;R++)for(let p=-1;p<=1;p++){if(!I&&!R&&!p)continue;const d=c(l+I,h+R,a+p);d.room.size!==0&&Math.abs(d.ambEff-37)<Math.abs(b.ambEff-37)&&(b=d)}this.embedKey=S,this.embedAir=b}this.embedAir&&(u=this.embedAir)}this.lastOpenSky=u.openSky;let f=u.shelter,m=u.ambEff;const v=u.room,y=this.stormAt(r.tSec);this.storm+=(y-this.storm)*Math.min(1,t*.08);const x=r.stormShield?0:this.storm*r.stormMul;if(x>.02&&!u.deep&&u.shelter<.6&&(m=36.6+(m-36.6)*(1+.35*x)),this.lastRoom=v,this.regulatedAir=v.sealed&&v.regulators*Rr>=v.size,r.inWater){const S=vi.clamp(s,12,24)-3;m=(m+S)/2}r.warmth&&(m+=r.warmth);const _=r.regulator?36.6:36.6+(m-36.6)*(1-f);this.lastAmbient=u.deep?Zh:s,this.lastAmbientEff=m,this.lastShelterR=u.R,this.lastTarget=_;const A=v.sealed?.022:.0075;this.body+=(_-this.body)*A*t,this.body=vi.clamp(this.body,12,44.5);let E=100/(We*1.5);this.body>37&&(E+=(this.body-37)*.02),r.sprinting&&(E*=1.7),r.overencumbered&&(E+=.05),x>.05&&u.shelter<.8&&(E*=1+.7*x),this.water=Math.max(0,this.water-E*t),this.regulatedAir||(this.body>jl&&this.hurt((this.body-jl)*.15,"heat stroke"),this.body<Zl&&this.hurt((Zl-this.body)*.175,"hypothermia")),this.water<=0?this.hurt(.3,"dehydration"):this.water<Jl&&this.hurt((Jl-this.water)*.0375,"dehydration"),x>.35&&u.openSky&&this.hurt((x-.35)*.55*t,"sand blast"),this.water>25&&this.body>=bc&&this.body<=ea&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=vi.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,r,o){const s=this.worldTimeToDayFrac(o),l=this.ambient(0,s,o);let h=l;const a=(s-.25)*Math.PI*2,c=Math.sin(a);if(c>0){const f=1/Math.hypot(Math.cos(a),c,.4);t.sunVisible(e,n,r,Math.cos(a)*f,c*f,.4*f)&&(h+=8+10*c)}const u=t.roomInfo(e,n,r);return u.sealed&&(h=u.regulators*Rr>=u.size?36.6:l),h}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=5,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const Uo=15,Sr=W+2,Ss=(i,t,e)=>((i+1)*Sr+(t+1))*Qt+e,C_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Jh(i){return i===di?2:i===bt?1:Qo(i)?-1:1}function I_(i){return i===di?2:Tn(i)?1:i===bt?0:Qo(i)?-1:0}class P_{maps=new Map;invalidate(t,e){this.maps.delete(li(t,e))}lightAt(t,e,n){if(e<0||e>=Qt)return 0;const r=Math.floor(t/W),o=Math.floor(n/W),s=this.maps.get(li(r,o));return s?s[Ss(t-r*W,n-o*W,e)]:0}bake(t,e,n,r){const o=t.chunk(e,n),s=new Uint8Array(Sr*Sr*Qt),l=[],h=(c,u,f,m)=>{if(m<=0)return;const v=Ss(c,u,f);m>s[v]&&(s[v]=m,l.push(v))},a=(c,u,f)=>c>=0&&c<W&&u>=0&&u<W?o[(c*W+u)*Qt+f]:t.get(e*W+c,f,n*W+u);for(let c=-1;c<=W;c++)for(let u=-1;u<=W;u++){let f=Uo;for(let m=Qt-1;m>=0;m--){const v=I_(a(c,u,m));if(v<0||(h(c,u,m,f),v>0&&(f-=v,f<=0)))break}}for(const[c,u]of[[-1,0],[1,0],[0,-1],[0,1]]){const f=this.maps.get(li(e+c,n+u));if(f)for(let m=0;m<W;m++)for(let v=0;v<Qt;v++){const y=c<0?-1:c>0?W:m,x=u<0?-1:u>0?W:m,_=c<0?W-1:c>0?0:m,A=u<0?W-1:u>0?0:m,E=f[Ss(_,A,v)];E>0&&h(y,x,v,E)}}for(let c=0;c<l.length;c++){const u=l[c],f=s[u];if(f<=1)continue;const m=(u/(Sr*Qt)|0)-1,v=u%(Sr*Qt),y=(v/Qt|0)-1,x=v%Qt;for(const[_,A,E]of C_){const S=m+_,b=y+E,I=x+A;if(!(I<0||I>=Qt))if(S>=-1&&S<=W&&b>=-1&&b<=W){const R=Jh(a(S,b,I));R>=0&&h(S,b,I,f-R)}else{const R=e*W+S,p=n*W+b,d=Jh(t.get(R,I,p));if(d<0)continue;const g=Math.floor(R/W),M=Math.floor(p/W),C=this.maps.get(li(g,M));C&&C[Ss(R-g*W,p-M*W,I)]+1<f-d&&r(g,M)}}}return this.maps.set(li(e,n),s),s}}const Va=new Set([Qe,Ye,Xe,Je,ze,je]),Qh=new Set([qn,vn,Vn]),vr=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],L_=.28;function ve(i,t,e,n,r){const o=n[1].map((c,u)=>c-n[0][u]),s=n[2].map((c,u)=>c-n[0][u]),l=o[1]*s[2]-o[2]*s[1],h=o[2]*s[0]-o[0]*s[2],a=o[0]*s[1]-o[1]*s[0];return l*i[0]+h*i[1]+a*i[2]<0&&n.reverse(),{dir:i,kind:t,pts:n,sh:e,uv:r}}function Yi(i,t,e,n){return{...ve(i,2,t,e,n),fill:i}}const tu=(()=>{const i=L_,t=1-i,e=c=>[c[0],c[2]],n=c=>[c[0],c[1]],r=c=>[c[2],c[1]],o=c=>[(c[2]-c[0])/2+.5,c[1]],s=c=>[(c[0]+c[2])/2,c[1]],l=[[i,0],[t,0],[1,i],[1,t],[t,1],[i,1],[0,t],[0,i]],h=[ve([0,1,0],0,1,l.map(([c,u])=>[c,1,u]),e),ve([0,-1,0],1,.45,l.map(([c,u])=>[c,0,u]),e),ve([1,0,0],2,.8,[[1,0,i],[1,0,t],[1,1,t],[1,1,i]],r),ve([-1,0,0],2,.7,[[0,0,t],[0,1,t],[0,1,i],[0,0,i]],r),ve([0,0,1],2,.85,[[i,0,1],[t,0,1],[t,1,1],[i,1,1]],n),ve([0,0,-1],2,.65,[[i,0,0],[i,1,0],[t,1,0],[t,0,0]],n),ve([-1,0,-1],2,.675,[[i,0,0],[i,1,0],[0,1,i],[0,0,i]],o),ve([1,0,-1],2,.725,[[t,0,0],[t,1,0],[1,1,i],[1,0,i]],s),ve([1,0,1],2,.825,[[1,0,t],[1,1,t],[t,1,1],[t,0,1]],o),ve([-1,0,1],2,.775,[[0,0,t],[0,1,t],[i,1,1],[i,0,1]],s),Yi([1,0,0],.8,[[1,0,0],[1,1,0],[1,1,i],[1,0,i]],r),Yi([1,0,0],.8,[[1,0,t],[1,1,t],[1,1,1],[1,0,1]],r),Yi([-1,0,0],.7,[[0,0,0],[0,0,i],[0,1,i],[0,1,0]],r),Yi([-1,0,0],.7,[[0,0,t],[0,0,1],[0,1,1],[0,1,t]],r),Yi([0,0,1],.85,[[0,0,1],[0,1,1],[i,1,1],[i,0,1]],n),Yi([0,0,1],.85,[[t,0,1],[t,1,1],[1,1,1],[1,0,1]],n),Yi([0,0,-1],.65,[[0,0,0],[i,0,0],[i,1,0],[0,1,0]],n),Yi([0,0,-1],.65,[[t,0,0],[1,0,0],[1,1,0],[t,1,0]],n)],a=[ve([0,1,0],0,1,[[i,1,i],[i,1,t],[t,1,t],[t,1,i]],e),ve([0,-1,0],1,.45,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],e),ve([1,0,0],2,.8,[[1,0,0],[1,0,1],[1,t,1],[1,t,0]],r),ve([-1,0,0],2,.7,[[0,0,0],[0,t,0],[0,t,1],[0,0,1]],r),ve([0,0,1],2,.85,[[0,0,1],[1,0,1],[1,t,1],[0,t,1]],n),ve([0,0,-1],2,.65,[[0,0,0],[0,t,0],[1,t,0],[1,0,0]],n),ve([0,1,-1],2,.825,[[0,t,0],[1,t,0],[1,1,i],[0,1,i]],n),ve([0,1,1],2,.925,[[1,t,1],[0,t,1],[0,1,i],[1,1,i]],n),ve([-1,1,0],2,.85,[[0,t,1],[0,t,0],[0,1,i],[0,1,t]],r),ve([1,1,0],2,.9,[[1,t,0],[1,t,1],[1,1,t],[1,1,i]],r)];return{[$n]:h,[Yn]:a}})(),nd=(i,t,e)=>e===0?[i,t]:e===1?[1-t,i]:e===2?[1-i,1-t]:[t,1-i],Ql=(i,t)=>t===0?i:t===1?[-i[2],i[1],i[0]]:t===2?[-i[0],i[1],-i[2]]:[i[2],i[1],-i[0]],Wa=(i,t)=>t===0?i:i.map(e=>({...e,dir:Ql(e.dir,t),fill:e.fill?Ql(e.fill,t):e.fill,pts:e.pts.map(([n,r,o])=>{const[s,l]=nd(n,o,t);return[s,r,l]})})),ci=(i,t,e,n,r,o)=>[ve([0,1,0],0,1,[[i,r,e],[i,r,o],[n,r,o],[n,r,e]],s=>[s[0],s[2]]),ve([0,-1,0],1,.45,[[i,t,e],[n,t,e],[n,t,o],[i,t,o]],s=>[s[0],s[2]]),ve([1,0,0],2,.8,[[n,t,e],[n,t,o],[n,r,o],[n,r,e]],s=>[s[2],s[1]]),ve([-1,0,0],2,.7,[[i,t,e],[i,r,e],[i,r,o],[i,t,o]],s=>[s[2],s[1]]),ve([0,0,1],2,.85,[[i,t,o],[n,t,o],[n,r,o],[i,r,o]],s=>[s[0],s[1]]),ve([0,0,-1],2,.65,[[i,t,e],[i,r,e],[n,r,e],[n,t,e]],s=>[s[0],s[1]])],Wo=i=>{for(const t of i)t.always=!0;return i},qo=(i,t)=>i.filter((e,n)=>n!==t),eu=(()=>{const i=qo(ci(0,.72,0,1,.88,1),2),t=qo(ci(0,.18,.18,1,.26,.82),2),e=[...ci(.05,0,.05,.2,.72,.2),...ci(.05,0,.8,.2,.72,.95)],n=ci(.28,.3,0,.72,.64,.05);return Wo([...i,...t,...e,...n])})(),nu=(()=>{const i=qo(ci(0,.72,0,1,.88,1),3),t=qo(ci(0,.18,.18,1,.26,.82),3),e=[...ci(.8,0,.05,.95,.72,.2),...ci(.8,0,.8,.95,.72,.95)];return Wo([...i,...t,...e])})(),xe=16,mn=16,Ur=[ei,yn,De,Is,xn,ss,Qn,Zo,Ps,He,Qe,Ye,kn,Jo,Pn,Ae,Ze,Be,xi,Xe,ts,zi,Ne,ke,hn,ns,Hr,Gr,Vr,Wr,qr,is,Un,Gn,wn,qn,vn,ui,Xr,ln,Je,ze,je,cn,un,ni,An,di,Vn,lr,cr,hr,Ls,Hi,Zi,Ni,sr],id=[["grass_top",ni],["grass_side",ni],["wood_top",An],["farmland_side",Un],["sandstone_top",yn],["hull_top",He],["water_side",Be],["bed_side",cn],["chest_top",Ne],["bench_top",Ae],["bench_ext_top",ke],["campfire_top",Ze],["campfire_cold",Ze],["cactus_top",hn]],Ge={};id.forEach(([i],t)=>Ge[i]=Ur.length+t);let qa=null;function sd(){if(qa)return qa;const i=document.createElement("canvas");i.width=i.height=mn*xe;const t=i.getContext("2d"),e=new ta(48879);Ur.forEach((p,d)=>d);let n=0,r=0,o=0,s=0,l=0;const h=p=>Math.max(0,Math.min(1,p)),a=(p,d=1,g=0,M=0,C=0)=>`rgba(${Math.round(h(o+p+g)*255)},${Math.round(h(s+p+M)*255)},${Math.round(h(l+p+C)*255)},${d})`,c=(p,d,g)=>{t.fillStyle=g,t.fillRect(n+p,r+d,1,1)},u=p=>{t.fillStyle=p,t.fillRect(n,r,xe,xe)},f=p=>(e.next()-.5)*p,m=(p,d)=>{for(let g=0;g<p;g++)c(e.int(0,15),e.int(0,15),a(f(d)))},v=(p,d,g=-.15)=>{let M=e.int(1,13),C=e.int(1,13);for(let L=0;L<p;L++)c(M,C,a(g+f(d))),M+=e.int(-1,1),C+=e.int(0,1),M=Math.max(0,Math.min(15,M)),C=Math.max(0,Math.min(15,C))},y=()=>{const p=M=>{const C=[];for(let N=0;N<M*M;N++)C.push(e.next());const L=(N,H)=>C[H%M*M+N%M],k=[];for(let N=0;N<16;N++)for(let H=0;H<16;H++){const Y=H*M/16,V=N*M/16,J=Math.floor(Y),tt=Math.floor(V),vt=Y-J,Vt=V-tt,ae=L(J,tt)+(L(J+1,tt)-L(J,tt))*vt,le=L(J,tt+1)+(L(J+1,tt+1)-L(J,tt+1))*vt;k.push(ae+(le-ae)*Vt)}return k},d=p(4),g=p(8);return d.map((M,C)=>(M*.65+g[C]*.35-.5)*2)},x=p=>{const d=y();for(let g=0;g<16;g++)for(let M=0;M<16;M++)c(M,g,a(p(M,g,d[g*16+M])));return d},_=(p,d,g,M)=>{for(let C=-g;C<=g;C++)for(let L=-g;L<=g;L++){const k=Math.hypot(L,C);k>g+.3||c(p+L,d+C,a(M+(k>g-.6?-.2:L+C<-g*.5?.14:-.02)))}},A=(p,d,g=.25)=>{for(const M of p)for(let C=0;C<16;C++){const L=C-M;L>=0&&L<16&&c(C,L,a(g,d))}},E=(p,d,g,M,C,L)=>{for(let k=-g;k<=g;k++)for(let N=-g;N<=g;N++){const H=Math.hypot(N,k);H>g+.3||c(p+N,d+k,a(H>g-.5?-.22:N+k<0?.24:.04,1,M,C,L))}},S={},b=(p,d)=>S[p]=d;b(String(ei),()=>{x((p,d,g)=>g*.07+Math.sin((p+d)*.55+g*5)*.03),m(24,.18);for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),a(-.14))}),b(String(yn),()=>{const p=y();for(let d=0;d<16;d++){const g=Math.floor((d+p[d*16+8]*1.2+16)%16/4),M=[-.05,.03,-.01,.05][g%4];for(let C=0;C<16;C++)c(C,d,a(M+p[d*16+C]*.05+(d%4===0?-.12:0)))}m(26,.08)}),b("sandstone_top",()=>{x((p,d,g)=>g*.06);for(let p=0;p<7;p++){const d=e.int(1,14),g=e.int(1,14);c(d,g,a(-.13)),c(d+1,g,a(-.06))}m(30,.1)}),b(String(De),()=>{x((p,d,g)=>g*.1),v(11,.06,-.14),v(8,.06,-.2);for(let p=0;p<4;p++)c(e.int(0,15),e.int(0,15),a(.2));m(16,.1)}),b(String(Is),()=>{x((p,d,g)=>g*.08-.06);for(let p=0;p<9;p++)_(e.int(2,13),e.int(2,13),e.int(1,3),f(.18))}),b(String(xn),()=>{x((p,d,g)=>g*.13+(Math.sin(p*1.4)+Math.cos(d*1.1))*.03),m(44,.2);for(let p=0;p<3;p++){const d=e.int(2,13),g=e.int(2,13);c(d,g,a(.16)),c(d+1,g,a(.08))}}),b(String(ss),()=>{x((p,d,g)=>g*.05+.04),v(10,.03,.06),v(8,.03,.09);for(let p=0;p<30;p++)c(e.int(0,15),e.int(0,15),a(.13))}),b(String(Qn),()=>{const p=x((d,g,M)=>M*.04-.05);for(let d=0;d<16;d++){for(let g=1;g<15;g++)Math.sin(g*.5+d*2.6+p[d*16+g]*4)>.7&&c(g,d,a(-.18));d%5===2&&e.next()>.4&&c(e.int(2,13),d,a(.12))}}),b(String(Zo),()=>{u("rgba(170,215,232,0.22)"),A([5,8,14],.5,.3),A([11],.32,.22)}),b(String(Ps),()=>{x((p,d,g)=>g*.05),v(7,.02,-.1),A([9],.18,.12)}),b(String(He),()=>{const p=x((d,g,M)=>M*.03);for(let d=0;d<16;d++)c(d,10,a(-.24)),d%2===0&&c(d,9,a(-.08));for(let d=0;d<16;d++)if(d%4===1)for(const g of[1,6,11])c(g,d,a(.22)),c(g+1,d,a(.05)),c(g,d+1,a(-.16)),c(g+1,d+1,a(-.12));for(let d=0;d<10;d++)c(e.int(0,15),e.int(0,15),a(-.02,1,.06,-.01,-.08));p[60]>.3&&c(12,3,a(.35,1,.1,0,0))}),b("hull_top",()=>{x((p,d,g)=>g*.03);for(const p of[4,12])for(let d=0;d<16;d++)c(d,p,a(-.22));for(const p of[2,7,12])for(let d=0;d<16;d++)d%4===2&&c(p,d,a(.2));for(let p=0;p<8;p++)c(e.int(0,15),e.int(0,15),a(.28,1,.05,-.02,-.06))}),b(String(Qe),()=>{x((p,d,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(0,p,a(-.26)),c(15,p,a(-.26));for(let p=2;p<=12;p++)for(let d=3;d<=12;d++)d===3||d===12||p===2||p===12?c(d,p,a(-.2)):d===4&&p>3&&p<11&&c(d,p,a(.08));for(let p=7;p<=9;p++)c(13,p,a(.35)),c(12,p,a(-.28));for(let p=5;p<11;p++)c(p,14,a(-.15,1,.1,0,-.02))}),b(String(Ye),()=>{x((p,d,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(0,p,a(-.26)),c(15,p,a(-.26));for(let p=4;p<=11;p++)for(let d=5;d<=10;d++)c(d,p,a(-.32,1,-.1,-.02,.06));for(const p of[5,8])for(let d=5;d<=10;d++){const g=d-p+4;g>=4&&g<=11&&c(d,g,a(.35,.5))}for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,a(.2))}),b(String(Xe),()=>{for(let p=0;p<16;p++)c(0,p,a(-.1,.9)),c(1,p,a(.05,.85)),c(2,p,a(-.15,.7));c(1,7,a(.3,.9)),c(1,8,a(.3,.9))}),b(String(kn),()=>{u(a(-.28));for(let p=4;p<=11;p++)for(let d=4;d<=11;d++){const g=Math.max(Math.abs(d-7.5),Math.abs(p-7.5));c(d,p,g>3?a(.12):a(.42-g*.06,1,.3,.18,-.02))}for(const[p,d]of[[4,4],[11,4],[4,11],[11,11]])c(p,d,a(.25))}),b(String(Jo),()=>{x((p,d,g)=>g*.03+(d%2===0?.02:-.02));for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,a(.22));for(let p=0;p<5;p++){const d=e.int(2,13),g=e.int(2,13);c(d,g,a(-.12,1,.24,.02,-.14)),c(d+1,g,a(-.2,1,.16,0,-.1))}}),b(String(Pn),()=>{x((p,d,g)=>g*.03-.25);for(let p=-3;p<=3;p++){const d=3-Math.abs(p);for(let g=-d;g<=d;g++)Math.hypot(g,p)>d+.3||c(8+g,8+p,a(p===0?.05:0,1,.95-Math.abs(p)*.08,.15,.1))}for(let p=-1;p<=1;p++)for(let d=-1;d<=1;d++)Math.hypot(d,p)<1.6&&c(8+d,8+p,a(.4-Math.hypot(d,p)*.15,1,1,.3,.1));for(let p=0;p<16;p+=3){const d=3-Math.abs(p%6-3);for(let g=-d;g<=d;g++)c(8+g,p,a(.08))}}),b(String(Ae),()=>{const p=x((d,g,M)=>M*.05+(g<5?.02:-.14));for(let d=0;d<16;d++)c(d,0,a(.14)),c(d,1,a(.06)),c(d,4,a(-.26));for(let d=5;d<16;d++)for(const g of[1,2,13,14])c(g,d,a(.06+p[d*16+g]*.02));for(let d=6;d<=10;d++)for(let g=4;g<=11;g++)c(g,d,a(-.04+p[d*16+g]*.04));for(let d=4;d<=11;d++)c(d,6,a(-.28)),c(d,10,a(-.28));c(7,8,"rgba(190,190,190,1)"),c(8,8,"rgba(190,190,190,1)");for(let d=3;d<=12;d++)c(d,13,a(.1)),c(d,14,a(-.3))}),b("bench_top",()=>{x((p,d,g)=>g*.04+Math.sin(d*1.7+g*3)*.03);for(let p=0;p<16;p++)c(p,0,a(-.2)),c(p,15,a(-.2));for(let p=0;p<16;p++)if(p%5===4)for(let d=0;d<16;d++)c(d,p,a(-.14));for(let p=2;p<=11;p++)c(p,4,"rgba(160,166,178,1)");for(let p=2;p<=11;p+=2)c(p,5,"rgba(120,126,140,1)");c(12,4,"rgba(96,66,40,1)"),c(13,4,"rgba(96,66,40,1)"),c(12,5,"rgba(80,54,32,1)");for(let p=4;p<=6;p++)c(p,9,"rgba(120,88,54,1)");for(let p=4;p<=6;p++)c(p,10,"rgba(100,72,44,1)");c(5,11,"rgba(150,156,168,1)"),c(5,12,"rgba(150,156,168,1)"),c(5,13,"rgba(140,146,158,1)");for(let p=0;p<6;p++)c(e.int(0,15),e.int(0,15),a(-.06,1,.02,-.01,-.04))}),b(String(ke),()=>{x((p,d,g)=>g*.04-.14);for(let p=0;p<16;p++)c(p,0,a(.05)),c(p,2,a(-.24));for(let p=3;p<16;p++)for(const d of[1,2,13,14])c(d,p,a(.04));for(let p=3;p<=12;p++)c(p,11,a(.08)),c(p,12,a(-.26))}),b("bench_ext_top",()=>{x((p,d,g)=>g*.04+Math.sin(p*1.6+g*2)*.03);for(let p=0;p<16;p++)c(0,p,a(-.18)),c(15,p,a(-.18));for(let p=0;p<16;p++)for(let d=0;d<16;d++)d%6===3&&e.next()>.5&&c(d,p,a(-.1))}),b(String(Ze),()=>{x((p,d,g)=>g*.05-.1);for(let p=0;p<5;p++)_(2+p*3,13,1,-.05);t.strokeStyle="rgba(70,50,32,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,r+13),t.lineTo(n+12,r+9),t.stroke(),t.beginPath(),t.moveTo(n+12,r+13),t.lineTo(n+4,r+9),t.stroke(),t.lineWidth=1;for(let p=2;p<10;p++){const d=Math.max(0,5-Math.abs(p-7)-(p<5?5-p:0));for(let g=-d;g<=d;g++){const M=Math.abs(g)/(d+1);c(8+g,p,a(M*.1,1,.85-M*.4,.35-M*.25,-.45))}}c(8,1,a(.2,1,.7,.15,-.4)),c(7,3,a(.3,1,.9,.4,-.4))}),b("campfire_cold",()=>{x((p,d,g)=>g*.04-.22);for(let p=0;p<5;p++)_(2+p*3,13,1,-.05);t.strokeStyle="rgba(40,34,28,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,r+13),t.lineTo(n+12,r+9),t.stroke(),t.beginPath(),t.moveTo(n+12,r+13),t.lineTo(n+4,r+9),t.stroke(),t.lineWidth=1;for(let p=0;p<6;p++)_(5+p%3*3,9+(p/3|0)*2,1,.08+.04*(p%2))}),b("campfire_top",()=>{x((p,d,g)=>-.12+g*.05);for(let p=0;p<16;p++){const d=p/16*Math.PI*2;c(8+Math.round(Math.cos(d)*5.5),8+Math.round(Math.sin(d)*5.5),a(.12)),c(8+Math.round(Math.cos(d)*4),8+Math.round(Math.sin(d)*4),a(-.3,1,.1,-.02,-.06))}for(let p=0;p<5;p++){const d=p/5*Math.PI*2+.5;_(8+Math.round(Math.cos(d)*6),8+Math.round(Math.sin(d)*6),1,0)}for(let p=0;p<3;p++)for(let d=0;d<8;d++){const g=d/8*Math.PI*2+p*.4;c(8+Math.round(Math.cos(g)*p*1.5),8+Math.round(Math.sin(g)*p*1.5),a(.2+(3-p)*.12,1,.5,-.05,-.35))}});for(const p of[ns,Hr,Gr,Vr,Wr,qr,is,Be])b(String(p),()=>{const d=x((g,M,C)=>C*.04+Math.sin((g+M*.5)*.8+C*4)*.04);for(const g of[2,6,10,14])for(let M=0;M<16;M++)d[g*16+M]>-.2&&c(M,g+(M%4<2?0:1),a(.16,.75));for(let g=0;g<5;g++)c(e.int(0,15),e.int(0,15),a(.3,.5))});b("water_side",()=>{x((p,d,g)=>g*.04+d*.004);for(let p=0;p<16;p++)e.next()>.3&&c(p,0,a(.22,.8)),p%3===0&&c(p,1+p%2,a(.1,.5));for(let p=2;p<16;p++)e.next()>.75&&c(e.int(0,15),p,a(.12,.4))}),b(String(xi),()=>{x((p,d,g)=>g*.08-.02);for(let p=0;p<16;p++)for(let d=0;d<16;d++)(p%5===4||(d+Math.floor(p/5)%2*4)%8===3)&&c(d,p,a(-.14+f(.03)));for(let p=0;p<3;p++)v(e.int(8,12),.05,-.1);for(let p=0;p<10;p++)c(e.int(0,15),e.int(0,15),a(.12))}),b(String(ts),()=>{const p=x((d,g,M)=>M*.06-.35);for(let d=0;d<16;d++)p[d*16+1]>.2&&c(1,d,a(-.1,1,.04,0,.08));for(let d=0;d<=15;d+=5)c(d,0,a(.1,1,.1,0,.15)),c(d,15,a(.1,1,.1,0,.15));for(let d=3;d<=12;d++)for(let g=3;g<=12;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-7.5)),C=Math.max(Math.abs(d-7.5),Math.abs(g-7.5),Math.abs(d+g-15)/2);M>=4.2||(C>=3.4?c(d,g,a(.15,1,.55,.15,.85)):c(d,g,a(.32+(3-M)*.12,1,.75,.3,1)))}for(const[d,g]of[[5,5],[10,10],[10,5]])(d+g)%2===0&&c(d,g,a(.45,1,.8,.35,1))}),b(String(zi),()=>{const p=x((d,g,M)=>M*.03+(g%2===0?.015:-.015)-.08);for(const d of[1,3,5]){for(let g=2;g<=13;g++)c(g,d,a(-.28));for(let g=2;g<=13;g+=3)c(g,d-1,a(.12))}for(let d=4;d<=11;d++)for(let g=7;g<=14;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-10.5));M>=3.2?c(d,g,a(.1+p[g*16+d]*.05)):c(d,g,a(.24+(3-M)*.1,1,-.05,.2,.22))}c(5,12,a(.15,1,-.1,.12,.12)),c(10,9,a(.15,1,-.1,.12,.12));for(let d=7;d<=14;d++)d%2===1&&c(14,d,a(-.2))}),b(String(hn),()=>{const p=x((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,a(-.16+p[g*16+d]*.03));for(let d=0;d<16;d++)if(d%5!==2&&d%5!==3)for(let g=0;g<16;g+=3)e.next()>.4&&c(d,g,a(.5,1,.05,.02,-.05));for(const[d,g]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])c(d,g,a(.2)),c(d+1,g,a(-.2)),c(d,g+1,a(-.2));c(13,1,"rgba(214,74,130,1)"),c(1,6,"rgba(198,58,114,1)"),c(5,11,"rgba(214,74,130,1)")}),b("cactus_top",()=>{const p=x((d,g,M)=>M*.06);for(let d=2;d<=6;d+=2)for(let g=0;g<20;g++){const M=g/20*Math.PI*2;c(8+Math.round(Math.cos(M)*d),8+Math.round(Math.sin(M)*d),a(d===6?-.14:-.06+p[g]*.05))}for(let d=0;d<8;d++){const g=d/8*Math.PI*2;c(8+Math.round(Math.cos(g)*1.5),8+Math.round(Math.sin(g)*1.5),a(.45,1,.05,.03,-.04))}c(8,8,a(.15))}),b(String(ui),()=>{const p=x((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,a(-.16+p[g*16+d]*.03));for(const[d,g]of[[4,4],[9,6],[6,10],[11,12],[3,14]])c(d,g,a(.2)),c(d+1,g,a(-.2)),c(d,g+1,a(-.2));for(let d=0;d<=3;d++)for(let g=5;g<=10;g++)(d===3||g===5||g===10||e.next()>.3)&&c(g,d,"rgba(214,74,130,1)");for(let d=0;d<9;d++)c(5+d%4*2,Math.floor(d/4),"rgba(238,150,190,1)");c(6,0,"rgba(238,150,190,1)"),c(9,1,"rgba(248,190,214,1)")}),b(String(Ne),()=>{x((p,d,g)=>g*.05-.02+Math.sin(p*1.3+g*3)*.02);for(let p=0;p<16;p++)c(p,0,a(-.3)),c(p,7,a(-.24)),c(p,15,a(-.3));for(let p=0;p<16;p++)for(let d=0;d<16;d++)d%5===2&&p>7&&e.next()>.4&&c(d,p,a(-.12));for(let p=0;p<16;p++)c(p,4,"rgba(148,154,166,1)"),c(p,5,"rgba(120,126,138,1)");for(let p=2;p<5;p++)for(const d of[7,8])c(d,p,"rgba(200,205,215,1)");c(7,6,"rgba(40,42,48,1)"),c(8,6,"rgba(40,42,48,1)");for(let p=0;p<4;p++){const[d,g]=[[0,0],[15,0],[0,15],[15,15]][p];c(d,g,a(.2)),c(d+(d?-1:1),g,a(.1)),c(d,g+(g?-1:1),a(.1))}}),b("chest_top",()=>{x((p,d,g)=>g*.05+Math.sin(d*1.4+g*2)*.02);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26));for(let p=0;p<16;p++)p!==7&&p!==8&&(c(p,7,"rgba(148,154,166,1)"),c(p,8,"rgba(120,126,138,1)"));for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,"rgba(200,205,215,1)")}),b(String(Un),()=>{const p=x((d,g,M)=>M*.1-.06);for(const d of[2,6,10,14])for(let g=0;g<16;g++)c(g,d,a(-.16+f(.03)));for(const d of[1,5,9,13])for(let g=0;g<16;g++)p[d*16+g]>-.1&&e.next()>.55&&c(g,d,a(.1));for(let d=0;d<8;d++)c(e.int(0,15),e.int(0,15),a(.05,1,0,-.02,.04))}),b("farmland_side",()=>{x((p,d,g)=>g*.09-.04);for(let p=0;p<16;p++)c(p,0,a(.14));for(let p=0;p<16;p++)for(let d=1;d<16;d++)e.next()>.88&&c(p,d,a(.14))}),b(String(Gn),()=>{u("rgba(0,0,0,0)");for(const[p,d]of[[7,13],[8,13],[7,12],[8,12],[9,13],[6,12]])c(p,d,a(.1));c(6,11,a(.16)),c(9,10,a(.12)),c(7,11,a(.02));for(let p=0;p<4;p++)c(e.int(5,10),e.int(12,15),a(-.05))}),b(String(wn),()=>{x((p,d,g)=>g*.04-.02);for(let p=4;p<=13;p++)for(let d=2;d<=13;d++){const g=Math.hypot((d-7.5)*1.1,(p-8.5)*1.25);if(g>5.8)continue;const M=(d+(p/2|0))%4===0;c(d,p,a(M?-.18:.04)),g>5.2&&c(d,p,a(-.24)),d<5&&p<7&&!M&&c(d,p,a(.2))}c(8,3,a(-.1)),c(7,3,a(-.16)),c(8,4,a(-.08)),c(2,13,a(.1)),c(13,12,a(.06)),c(4,14,a(.08))}),b(String(qn),()=>{u("rgba(0,0,0,0)");for(const p of[4,8,12]){for(let d=11;d<=15;d++)c(p,d,a(.08)),d<14&&c(p,d,a(.14));c(p-1,12,a(.06))}}),b(String(vn),()=>{u("rgba(0,0,0,0)");for(const p of[3,7,11,14]){const d=p%2?1:-1;for(let g=2;g<=15;g++)c(p+(g<6?d:0),g,a(g<7?.22:-.02));c(p-d,4,a(.18)),c(p-d,9,a(.06)),c(p+d,2,a(.3))}}),b(String(Xr),()=>{x((p,d,g)=>g*.03-.12);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(p,7,"rgba(150,156,168,1)"),c(p,8,"rgba(110,116,128,1)");for(const[p,d]of[[2,3],[13,3],[2,12],[13,12]])c(p,d,"rgba(200,205,215,1)"),c(p+1,d,"rgba(150,156,168,1)");for(let p=2;p<=5;p++)c(0,p,a(.14)),c(15,p,a(.14))}),b(String(ln),()=>{const p=x((d,g,M)=>M*.03+(d%4===0?-.04:.015));for(let d=0;d<16;d++)c(d,0,a(-.22)),c(d,15,a(-.22)),c(0,d,a(-.16)),c(15,d,a(-.16));for(const[d,g]of[[3,3],[12,3],[3,12],[12,12]])c(d,g,a(.24)),c(d+1,g,a(.08)),c(d,g+1,a(-.14));for(let d=0;d<6;d++)c(e.int(1,14),e.int(1,14),a(-.02,1,.05,-.01,-.06));if(p[8]>.4)for(let d=1;d<4;d++)c(12,d,a(.06,1,.2,.02,-.1))}),b(String(Je),()=>{x((p,d,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,a(-.24)),c(p,15,a(-.24)),c(0,p,a(-.24)),c(15,p,a(-.24));for(let p=3;p<=12;p++)for(let d=4;d<=11;d++)(d===4||d===11||p===3||p===12)&&c(d,p,a(.1));for(let p=7;p<=9;p++)c(12,p,a(.26)),c(11,p,a(-.22))}),b(String(ze),()=>{x((p,d,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,a(-.24)),c(p,15,a(-.24)),c(0,p,a(-.24)),c(15,p,a(-.24));for(let p=5;p<=10;p++)for(let d=6;d<=9;d++)c(d,p,a(.1,1,-.05,.1,.15));for(let p=6;p<=9;p++){const d=p-1;d>=5&&d<=10&&c(p,d,a(.3,.6))}for(let p=5;p<=10;p++)for(let d=6;d<=9;d++)(d===6||d===9||p===5||p===10)&&c(d,p,a(.1,1,-.05,.1,.15))}),b(String(je),()=>{for(let p=0;p<16;p++)c(0,p,a(-.12,.9)),c(1,p,a(.03,.85)),c(2,p,a(-.17,.7));c(1,7,a(.26,.9)),c(1,8,a(.26,.9))}),b(String(cn),()=>{x((p,d,g)=>g*.04+.02);for(let p=0;p<16;p++)for(let d=0;d<16;d++)(d+p)%5===0&&c(d,p,a(-.1));for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=0;p<16;p++)c(p,11,"rgba(90,40,36,1)"),c(p,12,"rgba(150,80,70,1)"),c(p,13,"rgba(120,60,52,1)");for(let p=1;p<11;p++)c(1,p,a(.12)),c(14,p,a(-.08))}),b("bed_side",()=>{x((p,d,g)=>g*.04-(d>11?-.1:.04));for(let p=0;p<16;p++)c(p,0,a(.14)),c(p,10,a(-.22));for(let p=1;p<10;p++)for(let d=0;d<16;d++)(d+p)%6===1&&c(d,p,a(-.06));for(let p=11;p<16;p++)for(let d=0;d<16;d++)c(d,p,"rgba(70,44,26,1)");for(let p=2;p<16;p+=5)c(p,12,"rgba(96,62,38,1)"),c(p,13,"rgba(52,32,18,1)")}),b(String(un),()=>{x((p,d,g)=>g*.04+.02);for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=3;p<=11;p++)for(let d=2;d<=13;d++)c(d,p,d===2||d===13||p===3||p===11?"rgba(200,192,176,1)":"rgba(226,220,206,1)"),p===4&&d>3&&d<11&&c(d,p,"rgba(240,236,226,1)");c(4,6,"rgba(208,200,184,1)"),c(10,9,"rgba(208,200,184,1)");for(let p=0;p<16;p++)c(p,12,"rgba(90,40,36,1)")}),b(String(ni),()=>{const p=x((d,g,M)=>M*.12-(g>4?.16:.02));for(let d=0;d<16;d++){const g=2+Math.round((p[d]+1)*1.5);for(let M=0;M<g;M++)c(d,M,a(f(.1)+(M===0?.1:0)));e.next()>.6&&c(d,g+1,a(-.2))}for(let d=0;d<16;d+=3){const g=7+d%5;c(d,g,a(.2))}}),b("grass_top",()=>{x((p,d,g)=>g*.08-.02);for(let p=0;p<40;p++){const d=e.int(0,15),g=e.int(0,14),M=e.int(1,3);for(let C=0;C<M;C++)c(d,g+C,a(C===0?.14:-.02+f(.08)))}for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),a(-.3))}),b("grass_side",()=>{const p=x((d,g,M)=>M*.12+(g<3?.06:-.1));for(let d=0;d<16;d++){const g=1+Math.round((p[d+16]+1)*1.5);for(let M=0;M<g;M++)c(d,M,a(.08+f(.08)))}for(let d=0;d<16;d++)for(let g=3;g<16;g++)e.next()>.9&&c(d,g,a(.16,1,-.04,-.02,-.04))}),b(String(An),()=>{const p=x((d,g,M)=>M*.05);for(let d=0;d<16;d++){const g=p[d]*2;for(let M=0;M<16;M++){const C=Math.sin(d*1.9+g+Math.sin(M*.35)*1.5);c(d,M,a(C>.75?-.26:C>.2?-.1:.06+f(.04)))}}for(let d=1;d<=2;d++)for(let g=0;g<10;g++){const M=g/10*Math.PI*2;c(9+Math.round(Math.cos(M)*d*1.4),7+Math.round(Math.sin(M)*d),a(d===2?-.3:-.2))}c(9,7,a(-.34)),c(10,7,a(-.28))}),b("wood_top",()=>{x((p,d,g)=>g*.04);for(let p=0;p<44;p++){const d=p/44*Math.PI*2;for(let g=1;g<7;g+=2){const M=g+(g%4===1?.6:0);c(8+Math.round(Math.cos(d)*M),8+Math.round(Math.sin(d)*M),a(g>4?-.12:.05))}}c(8,8,a(-.3)),c(8,7,a(-.2));for(let p=0;p<16;p++)c(p,0,a(-.3)),c(p,15,a(-.3)),c(0,p,a(-.3)),c(15,p,a(-.3))}),b(String(di),()=>{x((p,d,g)=>g*.14);for(let p=0;p<26;p++){const d=e.int(0,14),g=e.int(0,14);c(d,g,a(.16)),c(d+1,g,a(.06)),c(d,g+1,a(-.1)),c(d+1,g+1,a(-.2))}for(let p=0;p<10;p++){const d=e.int(1,14),g=e.int(1,14);c(d,g,a(-.4)),c(d+1,g,a(-.25))}}),b(String(Vn),()=>{u("rgba(0,0,0,0)");for(let p=6;p<16;p++)c(8,p,a(-.28));c(7,15,a(-.2)),c(9,15,a(-.2)),c(7,5,a(.1)),c(8,5,a(.15)),c(9,5,a(.1)),c(6,4,a(.05)),c(7,4,a(.12)),c(8,4,a(.18)),c(9,4,a(.12)),c(10,4,a(.05)),c(7,3,a(.08)),c(8,3,a(.14)),c(9,3,a(.08)),c(8,2,a(.1)),c(6,5,a(.02)),c(10,5,a(.02))}),b(String(lr),()=>{x((p,d,g)=>g*.1-.02),v(11,.06,-.14),v(7,.06,-.18);for(let p=0;p<5;p++)E(e.int(3,12),e.int(3,12),e.int(1,2),-.06,-.05,.04);m(12,.1)}),b(String(cr),()=>{x((p,d,g)=>g*.1-.04),v(9,.06,-.14);for(let p=0;p<3;p++)E(e.int(3,12),e.int(3,12),e.int(1,2),.26,.04,-.18);for(let p=0;p<2;p++)E(e.int(4,11),e.int(4,11),1,-.12,.16,0);m(10,.08)}),b(String(hr),()=>{x((p,d,g)=>g*.07-.24),v(10,.04,-.08);for(let p=0;p<4;p++){const d=e.int(4,11),g=e.int(4,11),M=e.int(2,3);for(let C=-M;C<=M;C++){const L=M-Math.abs(C);for(let k=-L;k<=L;k++){const N=Math.abs(k)+Math.abs(C);c(d+k,g+C,a(N===M?-.16:N===0?.4:.16,1,-.16,-.06,.3))}}}}),b(String(Ls),()=>{const p=y();for(let d=0;d<16;d++){const g=Math.floor((d+p[d*16+8]*2+16)%16/4),M=[-.02,.05,-.06,.02][g%4];for(let C=0;C<16;C++)c(C,d,a(M+p[d*16+C]*.03+(d%4===0?-.06:0)))}for(let d=0;d<3;d++)v(e.int(6,10),.02,.06);m(10,.05)});const I=p=>{for(let d=0;d<16;d++)c(d,0,a(-.22)),c(d,15,a(-.22));for(const d of[0,8])for(let g=1;g<15;g++)p[g*16+d]>-.2&&c(d,g,a(-.16)),d&&(g===3||g===7||g===11)&&c(d,g,a(.2));for(let d=0;d<4;d++){const g=e.int(1,14),M=e.int(1,5),C=e.int(4,8);for(let L=M;L<Math.min(15,M+C);L++)e.next()>.25&&c(g,L,a(-.06+f(.04),1,.3,.05,-.22))}for(let d=0;d<8;d++)c(e.int(1,14),e.int(1,14),a(-.05))};b(String(Hi),()=>{const p=x((d,g,M)=>M*.04-.1+(d%8===0?-.05:0));I(p);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.16)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.26))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++)Math.hypot(g,d)>4.2||c(8+g,8+d,a(-.34+p[(8+d)*16+8+g]*.06))}),b(String(Zi),()=>{const p=x((d,g,M)=>M*.04-.08+(d%8===0?-.05:0));I(p);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.2)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.1,1,.35,.05,-.3))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++){const M=Math.hypot(g,d);M>4.2||c(8+g,8+d,a(.35-M*.08+p[(8+d)*16+8+g]*.08,1,.55-M*.05,.12-M*.04,-.45))}for(const[d,g]of[[3,2],[12,4],[5,13],[11,12]])c(d,g,a(.4,1,.5,.1,-.35))}),b(String(Ni),()=>{x((p,d,g)=>g*.03-.22+(p%4===0?-.04:0));for(let p=0;p<16;p++)c(2,p,a(-.16)),c(13,p,a(-.16));for(const p of[2,13])for(let d=3;d<13;d++)c(d,p,a(.12));for(let p=4;p<=11;p++){const d=p===4||p===11?1:2;for(let g=-d;g<=d;g++){const M=d-Math.abs(g);c(8+g,p,a(.2+M*.15+p%2*.05,1,.45+M*.1,.18,-.5))}}for(let p=0;p<6;p++)c(e.int(3,12),e.int(3,12),a(-.05))}),b(String(sr),()=>{x((p,d,g)=>g*.04-.18);for(let p=0;p<3;p++)for(let d=0;d<16;d++)c(d,p,a(.1));for(const p of[3,12])for(let d=3;d<=5;d++)c(p,d,a(-.28));c(3,6,a(-.1)),c(12,6,a(-.1));for(let p=5;p<=10;p++)c(p,7,a(.14));for(let p=6;p<=8;p++)c(p,8,a(-.06)),c(p,9,a(-.22));for(let p=11;p<=14;p++)for(let d=4;d<=11;d++){const g=Math.abs(d-7.5)+Math.abs(p-12.5);c(d,p,a(.25-g*.04+e.next()*.08,1,.55-g*.03,.18-g*.03,-.5))}for(let p=3;p<=12;p++)c(p,10,a(.08));c(3,15,a(.06)),c(12,15,a(.06));for(const[p,d]of[[6,3],[9,4],[7,2]])c(p,d,a(.45,1,.5,.12,-.35))});const R=(p,d,g)=>{S[p]&&(n=d%mn*xe,r=(d/mn|0)*xe,[o,s,l]=g,S[p]())};for(const[p,d]of Ur.entries())R(String(d),p,En[d].color);for(const[p,d]of id)R(p,Ge[p],En[d].color);return qa=i,i}function D_(){const i=new zu(sd());return i.flipY=!1,i.magFilter=i.minFilter=Xn,i.generateMipmaps=!1,i.colorSpace=Dn,i}const te=[];Ur.forEach((i,t)=>te[i]=t);te[$n]=te[He];te[Yn]=te[He];const an=mn*xe,rd=i=>{const t=te[i]??0;return[t%mn*xe,(t/mn|0)*xe]},ws=[],dn=(i,t,e,n)=>{ws[i*6]=t,ws[i*6+1]=e;for(let r=2;r<6;r++)ws[i*6+r]=n};for(const i of Ur)dn(i,te[i],te[i],te[i]);dn(ni,Ge.grass_top,te[xn],Ge.grass_side);dn(An,Ge.wood_top,Ge.wood_top,te[An]);dn(Un,te[Un],te[xn],Ge.farmland_side);dn(yn,Ge.sandstone_top,te[yn],te[yn]);dn(He,Ge.hull_top,te[He],te[He]);dn($n,Ge.hull_top,te[He],te[He]);dn(Yn,Ge.hull_top,te[He],te[He]);dn(cn,te[cn],te[cn],Ge.bed_side);dn(un,te[un],te[un],Ge.bed_side);dn(Ne,Ge.chest_top,te[Ne],te[Ne]);dn(Ae,Ge.bench_top,te[Ae],te[Ae]);dn(ke,Ge.bench_ext_top,te[ke],te[ke]);dn(Ze,Ge.campfire_top,te[Ze],te[Ze]);dn(hn,Ge.cactus_top,te[hn],te[hn]);dn(ui,Ge.cactus_top,te[hn],te[ui]);for(const i of[Be,ns,Hr,Gr,Vr,Wr,qr,is])dn(i,te[i],te[i],Ge.water_side);const ki=16,iu=`
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
`,su=`
uniform sampler2D map;
uniform vec3 uAmbient;      // day/moon ambient, lerped by the caller
uniform float uFloor;       // ambient floor for baked-light 0 (interiors)
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uNumLights;
uniform vec3 uLightPos[${ki}];
uniform vec3 uLightCol[${ki}];
uniform float uLightRange[${ki}];
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
  for (int i = 0; i < ${ki}; i++) {
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
`,xr=new F,ru=new F,k_=new Gt(1,.97,.9),U_=new Gt(.2,.27,.45),N_=new Gt(.72,.55,.35);class F_{scene=new ip;camera;three;chunkMeshes=new Map;group=new oe;entityGroup=new oe;sun;hemi;stars;sunDisc;dust;stormI=0;stormOpen=!0;moonDisc;highlight;renderDistance=7;atlas=D_();matOpaque=new ne({map:this.atlas,vertexColors:!0,side:qe});matEmissive=new pi({map:this.atlas,vertexColors:!0,side:qe});matTrans=new ne({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:qe});lightingMode="sky";skyLight=new P_;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new Gt(1,1,1)},uFloor:{value:.16},uFogColor:{value:new Gt(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:ki},()=>new F)},uLightCol:{value:Array.from({length:ki},()=>new F)},uLightRange:{value:new Float32Array(ki)}};matSky=new wi({uniforms:this.skyU,vertexShader:iu,fragmentShader:su,side:qe,defines:{OPAQUE_PASS:"1"}});matSkyT=new wi({uniforms:this.skyU,vertexShader:iu,fragmentShader:su,side:qe,transparent:!0,depthWrite:!1});torch;playerLight;dynLights=[];fires=new Map;ghost=null;ghostGeos=new Map;matGhost=new pi({map:this.atlas,vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1,side:qe});constructor(t){this.three=new Z1({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new Wn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new ka(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.playerLight=new ka(16766826,2.4,20,1.4),this.playerLight.visible=!1,this.scene.add(this.playerLight),this.sun=new fp(16777215,1),this.hemi=new hp(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new dc(14207392,40,this.renderDistance*W);const n=new tn,r=[];for(let h=0;h<500;h++){const a=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);r.push(Math.sin(c)*Math.cos(a)*400,Math.abs(Math.cos(c))*400,Math.sin(c)*Math.sin(a)*400)}n.setAttribute("position",new me(r,3)),this.stars=new fh(n,new Wl({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new Ke(new Go(24,24),new pi({color:16771504,fog:!1,side:qe,toneMapped:!1})),this.moonDisc=new Ke(new Go(15,24),new pi({color:14213877,fog:!1,side:qe,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const o=new tn,s=[];for(let h=0;h<700;h++){const a=Math.random()*Math.PI*2,c=3+Math.random()*16;s.push(Math.cos(a)*c,(Math.random()-.35)*14,Math.sin(a)*c)}o.setAttribute("position",new me(s,3)),this.dust=new fh(o,new Wl({color:14072204,size:.3,transparent:!0,opacity:0,depthWrite:!1})),this.dust.frustumCulled=!1,this.scene.add(this.dust);const l=new Bi(1.002,1.002,1.002);this.highlight=new uh(new mh(l),new Vl({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,r){if(this.dynLights.length>=12||this.dynLights.some(s=>s.x===t&&s.y===e&&s.z===n))return;const o=new ka(r==="lamp"?16773296:r==="fire"?16745280:9427199,r==="lamp"?.9:r==="fire"?1.1:.8,r==="lamp"?12:r==="fire"?9:10,1.3);o.position.set(t+.5,e+.6,n+.5),this.scene.add(o),this.dynLights.push({x:t,y:e,z:n,light:o,flame:r==="fire"})}hasPointLight(t,e,n){return this.dynLights.some(r=>r.x===t&&r.y===e&&r.z===n)}removePointLight(t,e,n){const r=this.dynLights.findIndex(o=>o.x===t&&o.y===e&&o.z===n);r<0||(this.scene.remove(this.dynLights[r].light),this.dynLights.splice(r,1))}setGhost(t,e,n,r,o=0){if(!this.ghost){this.ghost=new Ke(new tn,this.matGhost);const h=new uh(new mh(new Bi(1.02,1.02,1.02)),new Vl({color:14202703,transparent:!0,opacity:.7}));h.position.set(.5,.5,.5),this.ghost.add(h),this.ghost.renderOrder=5,this.scene.add(this.ghost)}const s=`${r}:${o}`;let l=this.ghostGeos.get(s);l||(l=this.buildGhostGeo(r,o),this.ghostGeos.set(s,l)),this.ghost.geometry=l,this.ghost.position.set(t,e,n),this.ghost.visible=!0}buildGhostGeo(t,e){let n;Va.has(t)?n=Wo(ci(.04,0,.02,.96,1,.16)):Qh.has(t)?n=Wo([ve([1,0,1],2,.92,[[0,0,0],[1,0,1],[1,1,1],[0,1,0]],a=>[a[0],a[1]]),ve([1,0,-1],2,.92,[[0,0,1],[1,0,0],[1,1,0],[0,1,1]],a=>[a[0],a[1]])]):t===$n||t===Yn?n=tu[t].filter(a=>!a.fill):t===Ae?n=eu:t===ke?n=nu:t>=ns&&t<=is?n=ci(0,0,0,1,(33-t)/8,1):n=vr.map((a,c)=>({dir:a.dir,kind:c===0?0:c===1?1:2,pts:a.corners,sh:a.shade,uv:u=>[u[a.uv[0]],u[a.uv[1]]]})),e&&(Va.has(t)||t===$n||t===Yn||t===Ae||t===ke)&&(n=Wa(n,e));const r=[],o=[],s=[],l=[];for(const a of n){const c=ws[t*6+a.kind],u=c%mn*xe,f=(c/mn|0)*xe,m=r.length/3;for(const v of a.pts){r.push(v[0],v[1],v[2]),o.push(a.sh,a.sh,a.sh);const[y,x]=a.uv(v);s.push((u+.5+y*(xe-1))/an,(f+.5+x*(xe-1))/an)}for(let v=1;v+1<a.pts.length;v++)l.push(m,m+v,m+v+1)}const h=new tn;return h.setAttribute("position",new me(r,3)),h.setAttribute("color",new me(o,3)),h.setAttribute("uv",new me(s,2)),h.setIndex(l),h.computeVertexNormals(),h}clearGhost(){this.ghost&&(this.ghost.visible=!1)}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),r=vi.clamp(n*2.2,0,1),o=vi.clamp(1-Math.abs(n)*5,0,1),s=new Gt(660006),l=new Gt(13201213),h=new Gt(12570592),a=s.clone().lerp(h,r);o>0&&a.lerp(l,o*.7);const c=new Gt(16767392).lerp(new Gt(16743231),o);return{sky:a,sunColor:c,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:r}}updateSky(t,e){const n=t%We/We,r=this.keyframe(n);if(this.scene.background=r.sky,this.scene.fog.color.copy(r.sky),this.scene.fog.far=this.renderDistance*W*.98,this.stormI>.01){const a=this.scene.fog;a.color.lerp(N_,Math.min(1,this.stormI*.85)),a.near=vi.lerp(40,4,this.stormI),a.far=Math.min(a.far,vi.lerp(this.renderDistance*W,24,this.stormI)),this.scene.background=a.color}const o=(n-.25)*Math.PI*2;xr.set(Math.cos(o),r.sunElev,.4).normalize(),r.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,xr.negate()):(this.sun.color.copy(r.sunColor),this.sun.intensity=r.sunI),this.sun.position.set(e.x+xr.x*120,e.y+xr.y*120,e.z+xr.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+r.sunI*.35,this.stars.material.opacity=Math.max(0,1-r.sunI*3),this.stars.position.set(e.x,e.y,e.z);const s=430;this.sunDisc.position.set(e.x+Math.cos(o)*s,e.y+Math.sin(o)*s,e.z+s*.4),this.moonDisc.position.set(e.x-Math.cos(o)*s,e.y-Math.sin(o)*s,e.z-s*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(o)>-.12,this.moonDisc.visible=Math.sin(o)<.12,this.stormI>.01?(this.sun.intensity*=1-this.stormI*.75,this.hemi.intensity*=1-this.stormI*.55,this.sunDisc.visible&&=this.stormI<.5,this.moonDisc.visible&&=this.stormI<.5,this.stars.material.opacity*=1-this.stormI,this.dust.material.opacity=this.stormOpen?this.stormI*.75:0,this.dust.position.set(this.camera.position.x,this.camera.position.y+2,this.camera.position.z),this.dust.rotation.y=t*.7):this.dust.material.opacity>0&&(this.dust.material.opacity=0),this.torch.intensity=.12+(1-Math.min(1,r.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+Yl(t*5.3+a.x*3.1+a.z,7)*.45);const l=this.skyU;l.uAmbient.value.copy(U_).lerp(k_,r.dayT);const h=this.scene.fog;return l.uFogColor.value.copy(h.color),l.uFogNear.value=h.near,l.uFogFar.value=h.far,this.syncSkyLights(),r}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(ru),t.uLightPos.value[e].copy(ru);const n=this.torch.color;if(t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++,this.playerLight.visible&&e<ki){t.uLightPos.value[e].copy(this.playerLight.position);const r=this.playerLight.color;t.uLightCol.value[e].set(r.r,r.g,r.b).multiplyScalar(this.playerLight.intensity),t.uLightRange.value[e]=this.playerLight.distance,e++}for(const r of this.dynLights){if(e>=ki)break;t.uLightPos.value[e].copy(r.light.position);const o=r.light.color;t.uLightCol.value[e].set(o.r,o.g,o.b).multiplyScalar(r.light.intensity),t.uLightRange.value[e]=r.light.distance,e++}t.uNumLights.value=e}setStorm(t,e){this.stormI=t,this.stormOpen=e}stormDome=null;setStormDome(t){if(!t){this.stormDome&&(this.entityGroup.remove(this.stormDome),this.stormDome.geometry.dispose(),this.stormDome.material.dispose(),this.stormDome=null);return}if(!this.stormDome){const e=new Ke(new Ko(ju,28,18),new pi({color:14178376,transparent:!0,opacity:.12,side:qe,depthWrite:!1}));e.renderOrder=2,this.stormDome=e,this.entityGroup.add(e)}this.stormDome.position.set(t[0],t[1],t[2])}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}setPlayerLight(t){if(!t){this.playerLight.visible=!1;return}this.playerLight.visible=!0,this.playerLight.position.set(t.x,t.y,t.z)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let r=-this.renderDistance;r<=this.renderDistance;r++)for(let o=-this.renderDistance;o<=this.renderDistance;o++){const s=li(e+r,n+o);this.chunkMeshes.has(s)||t.markDirty(e+r,n+o)}}buildChunk(t,e){const[n,r]=e.split(",").map(Number),o=t.chunk(n,r),s=[],l=[],h=[],a=[],c=[],u=[],f=[],m=[],v=[],y=[],x=[],_=[],A=[],E=[],S=this.lightingMode==="sky"?this.skyLight.bake(t,n,r,(g,M)=>{const C=li(g,M);!t.dirty.has(C)&&!this.lightRecheck.has(C)&&this.lightRecheck.add(C)}):null,b=(g,M,C)=>S&&M>=0&&M<Qt?S[Ss(g,C,M)]/Uo:0;for(let g=0;g<W;g++)for(let M=0;M<W;M++)for(let C=0;C<Qt;C++){const L=o[(g*W+M)*Qt+C];if(L===bt)continue;const k=n*W+g,N=r*W+M,H=t.rots.size?t.getRot(k,C,N):0;if(Va.has(L)){let X=0;if(S)for(const[K,it]of[[1,0],[-1,0],[0,1],[0,-1]])X=Math.max(X,S[Ss(g+K,M+it,C)]);this.emitDoor(s,l,h,a,c,X/Uo,t,g,C,M,n*W,r*W,L);continue}if(Qh.has(L)){const X=te[L],K=X%mn*xe,it=(X/mn|0)*xe,Et=S?S[Ss(g,M,C)]/Uo:0,gt=(Wt,Ee,D,de)=>{const Rt=y.length/3;y.push(Wt,C,Ee,D,C,de,D,C+1,de,Wt,C+1,Ee);for(let Lt=0;Lt<4;Lt++)x.push(.92,.92,.92),E.push(Et);A.push((K+.5)/an,(it+15.5)/an,(K+15.5)/an,(it+15.5)/an,(K+15.5)/an,(it+.5)/an,(K+.5)/an,(it+.5)/an),_.push(Rt,Rt+1,Rt+2,Rt,Rt+2,Rt+3)};gt(g,M,g+1,M+1),gt(g+1,M,g,M+1);continue}if(L===$n||L===Yn){this.emitShape(Wa(tu[L],H),s,l,h,a,c,L,t,g,C,M,n*W,r*W,b);continue}if(L===Ae||L===ke){const X=n*W+g,K=r*W+M;let it,Et,gt;L===Ae?(it=t.get(X+1,C,K)===ke?0:t.get(X,C,K+1)===ke?1:t.get(X-1,C,K)===ke?2:3,Et=eu,gt=H):(it=t.get(X-1,C,K)===Ae?0:t.get(X,C,K-1)===Ae?1:t.get(X+1,C,K)===Ae?2:3,Et=nu,gt=t.getRot(X+(it===0?-1:it===2?1:0),C,K+(it===1?-1:it===3?1:0))),this.emitShape(Wa(Et,it+gt&3),s,l,h,a,c,L,t,g,C,M,n*W,r*W,b);continue}if(L>=ns&&L<=is){const X=(33-L)/8;for(let K=0;K<vr.length;K++){const it=vr[K],Et=g+it.dir[0],gt=C+it.dir[1],Wt=M+it.dir[2],Ee=t.get(n*W+Et,gt,r*W+Wt);let D=0;if(it.dir[1]===0&&Tn(Ee)){if(D=Di(Ee)/8,D>=X)continue}else{if(Tn(Ee))continue;if(!wo(t,n*W+Et,gt,r*W+Wt,L))continue}const de=ws[L*6+K],Rt=de%mn*xe,Lt=(de/mn|0)*xe,xt=y.length/3,he=b(Et,gt,Wt);for(const yt of it.corners)y.push(g+yt[0],yt[1]?C+X:C+D,M+yt[2]),x.push(it.shade,it.shade,it.shade),E.push(he),A.push((Rt+.5+yt[it.uv[0]]*(xe-1))/an,(Lt+.5+yt[it.uv[1]]*(xe-1))/an);_.push(xt,xt+1,xt+2,xt,xt+2,xt+3)}continue}const Y=En[L],V=L===Ze&&(this.fires.get(k+","+C+","+N)??0)<=0,J=Y.emissive&&!V,tt=Y.transparent,vt=tt?y:J?u:s,Vt=tt?x:J?f:l,ae=tt?_:J?m:h,le=tt?A:J?v:a,Zt=tt?E:J?null:c;for(let X=0;X<vr.length;X++){const K=vr[X],it=H?Ql(K.dir,H):K.dir,Et=g+it[0],gt=C+it[1],Wt=M+it[2];if(!wo(t,n*W+Et,gt,r*W+Wt,L))continue;const Ee=V?Ge.campfire_cold:ws[L*6+X],D=Ee%mn*xe,de=(Ee/mn|0)*xe,Rt=vt.length/3,Lt=J?1:K.shade,xt=Zt?b(Et,gt,Wt):0;for(const he of K.corners){const[yt,$t]=H?nd(he[0],he[2],H):[he[0],he[2]];vt.push(g+yt,C+he[1],M+$t),Vt.push(Lt,Lt,Lt),Zt&&Zt.push(xt),le.push((D+.5+he[K.uv[0]]*(xe-1))/an,(de+.5+he[K.uv[1]]*(xe-1))/an)}ae.push(Rt,Rt+1,Rt+2,Rt,Rt+2,Rt+3)}}const I=this.chunkMeshes.get(e);if(I)for(const g of I)this.group.remove(g),g.geometry.dispose();const R=[],p=this.lightingMode==="sky",d=(g,M,C,L,k,N)=>{if(g.length===0)return;const H=new tn;H.setAttribute("position",new me(g,3)),H.setAttribute("color",new me(M,3)),H.setAttribute("uv",new me(L,2)),k&&k.length*3===g.length&&H.setAttribute("light",new me(k,1)),H.setIndex(C),H.computeVertexNormals();const Y=new Ke(H,N);Y.position.set(n*W,0,r*W),!p&&N!==this.matEmissive&&(Y.castShadow=N!==this.matTrans,Y.receiveShadow=!0),this.group.add(Y),R.push(Y)};d(s,l,h,a,S?c:null,p?this.matSky:this.matOpaque),d(u,f,m,v,null,this.matEmissive),d(y,x,_,A,S?E:null,p?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,R)}emitDoor(t,e,n,r,o,s,l,h,a,c,u,f,m){const v=u+h,y=f+c,x=m===Je||m===ze||m===je,_=m===Ye||m===ze||m===Xe&&l.get(v,a-1,y)===Xe||m===je&&l.get(v,a-1,y)===je,A=rd(_?x?ze:Ye:x?Je:Qe),E=m===Xe||m===je,b=!(gn(l.get(v-1,a,y))||gn(l.get(v+1,a,y)))&&(gn(l.get(v,a,y-1))||gn(l.get(v,a,y+1))),I=b?!gn(l.get(v-1,a,y)):!gn(l.get(v,a,y-1)),R=b?!gn(l.get(v+1,a,y)):!gn(l.get(v,a,y+1)),p=v+y&1;let d,g;p&&R?(d=1,g=1):!p&&I?(d=0,g=-1):R?(d=1,g=1):(d=0,g=-1);const M=l.doorSwing.get(v+","+y);M&&(g=M);const C=.04,L=.96,k=d?.84:.02,N=d?.98:.16,H=C,Y=d?.98:.02,V=(vt,Vt,ae)=>{const le=t.length/3;for(let Zt=0;Zt<4;Zt++){let[X,K,it]=vt[Zt];if(E){const Et=X-H,gt=it-Y;X=H-g*gt,it=Y+g*Et}t.push(b?h+it:h+X,a+K,b?c+X:c+it),e.push(ae,ae,ae),o.push(s),r.push((A[0]+.5+Vt[Zt][0]*(xe-1))/an,(A[1]+.5+Vt[Zt][1]*(xe-1))/an)}n.push(le,le+1,le+2,le,le+2,le+3)},J=vt=>(vt-C)/(L-C),tt=vt=>(vt-k)/(N-k);V([[C,0,N],[L,0,N],[L,1,N],[C,1,N]],[[J(C),0],[J(L),0],[J(L),1],[J(C),1]],.85),V([[C,0,k],[L,0,k],[L,1,k],[C,1,k]],[[J(L),0],[J(C),0],[J(C),1],[J(L),1]],.7),V([[L,0,k],[L,0,N],[L,1,N],[L,1,k]],[[tt(k),0],[tt(N),0],[tt(N),1],[tt(k),1]],.6),V([[C,0,k],[C,0,N],[C,1,N],[C,1,k]],[[tt(N),0],[tt(k),0],[tt(k),1],[tt(N),1]],.6),V([[C,1,k],[L,1,k],[L,1,N],[C,1,N]],[[J(C),tt(k)],[J(L),tt(k)],[J(L),tt(N)],[J(C),tt(N)]],1),V([[C,0,k],[L,0,k],[L,0,N],[C,0,N]],[[J(C),tt(N)],[J(L),tt(N)],[J(L),tt(k)],[J(C),tt(k)]],.45)}emitShape(t,e,n,r,o,s,l,h,a,c,u,f,m,v){for(const y of t){const x=(y.dir[0]?1:0)+(y.dir[1]?1:0)+(y.dir[2]?1:0);if(y.fill){if(wo(h,f+a+y.fill[0],c+y.fill[1],m+u+y.fill[2],l))continue}else if(x===1&&!y.always&&!wo(h,f+a+y.dir[0],c+y.dir[1],m+u+y.dir[2],l))continue;const _=ws[l*6+y.kind],A=_%mn*xe,E=(_/mn|0)*xe;let S=0;y.fill&&(S=v(a,c,u)),y.dir[0]&&(S=Math.max(S,v(a+y.dir[0],c,u))),y.dir[1]&&(S=Math.max(S,v(a,c+y.dir[1],u))),y.dir[2]&&(S=Math.max(S,v(a,c,u+y.dir[2])));const b=e.length/3;for(const I of y.pts){e.push(a+I[0],c+I[1],u+I[2]),n.push(y.sh,y.sh,y.sh),s.push(S);const[R,p]=y.uv(I);o.push((A+.5+R*(xe-1))/an,(E+.5+p*(xe-1))/an)}for(let I=1;I+1<y.pts.length;I++)r.push(b,b+I,b+I+1)}}addEntityMesh(t,e,n,r=.35){const o=new Ke(new Bi(r,r,r),new ne({color:n}));return o.position.set(...e),o.userData.eid=t,this.entityGroup.add(o),o}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(r=>r.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,r,o=14){const s=this.nextEid++,l=new Ke(new pc(.14,.28,o,6,1,!0),new pi({color:r,transparent:!0,opacity:.4,depthWrite:!1,side:qe,fog:!1}));return l.position.set(t,e+o/2,n),l.userData.eid=s,this.entityGroup.add(l),s}addGroundRing(t,e,n,r,o=1.1){const s=this.nextEid++,l=new Ke(new mc(o*.55,o,24),new pi({color:r,transparent:!0,opacity:.7,side:qe,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,e+.06,n),l.userData.eid=s,this.entityGroup.add(l),s}render(){this.three.render(this.scene,this.camera)}}const ut=i=>i,O_=(i,t)=>`${i.charAt(0).toUpperCase()+i.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,In=(i,t,e,n)=>ut({id:`${e}_${i}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${i}`,desc:O_(i,t),w:1,h:2,mass:1.2+t*.8,tool:{type:i,tier:t},color:n}),B_=[ut({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:ei,color:"#d4b880"}),ut({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:yn,color:"#c2a670"}),ut({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:De,color:"#736d69"}),ut({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Is,color:"#8d8680"}),ut({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:xn,color:"#6b5238"}),ut({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:ss,color:"#d9dbd6"}),ut({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:Qn,color:"#61492f"}),ut({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:Zo,color:"#a6cfe6"}),ut({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:Ps,color:"#8cc0a0"}),ut({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:He,color:"#858a99"}),ut({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:Qe,color:"#999fa8"}),ut({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:kn,color:"#fff0a0"}),ut({id:"metal",name:"Iron Rod",desc:"Forged iron — salvaged from the wreck, or baked from Rock and Iron Ore at a Campfire. The backbone of every tool.",w:1,h:1,mass:1,block:Jo,color:"#9aa0aa"}),ut({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:Pn,color:"#66e5f0"}),ut({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:Ae,color:"#806647"}),ut({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:Ze,color:"#e67333"}),ut({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:zi,color:"#59bfcc"}),ut({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:xi,color:"#b3956b"}),ut({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Ne,color:"#8a6d3b"}),ut({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),ut({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),ut({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),ut({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:ts,color:"#c468e8"}),ut({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),In("pickaxe",1,"wood","#a8834f"),In("pickaxe",2,"stone","#8d8680"),In("pickaxe",3,"metal","#9aa0aa"),In("shovel",1,"wood","#a8834f"),In("shovel",2,"stone","#8d8680"),In("shovel",3,"metal","#9aa0aa"),In("axe",1,"wood","#a8834f"),In("axe",2,"stone","#8d8680"),In("axe",3,"metal","#9aa0aa"),In("pickaxe",4,"alloy","#c07848"),In("shovel",4,"alloy","#c07848"),In("axe",4,"alloy","#c07848"),In("disassembler",1,"metal","#c0c8d8"),In("disassembler",2,"alloy","#c07848"),ut({id:"voidbreaker",name:"Voidbreaker",desc:"Cheat gear: every block — even Ship Hull and bedrock-hard stuff — shatters the instant you swing. There is no recipe: it only comes out of the cheat menu.",w:1,h:2,mass:2,instaBreak:!0,color:"#8a5ad6"}),ut({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),ut({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 6×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",bag:{w:6,h:5,kg:20},color:"#7a5a3a"}),ut({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:hn,color:"#3d8042"}),ut({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),ut({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),ut({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",armor:.4,color:"#8a6f4d"}),ut({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),ut({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),ut({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:Un,color:"#573d23"}),ut({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:Gn,color:"#c8b060"}),ut({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:qn,color:"#d8c878"}),ut({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),ut({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),ut({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),ut({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:An,color:"#7a5c3a"}),ut({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),ut({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Vn,color:"#7fae54"}),ut({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),ut({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),ut({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:Xr,color:"#8a744a"}),ut({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:ln,color:"#9aa0ac"}),ut({id:"storm_breaker",name:"Sandstorm Breaker",desc:"A humming red pylon. Stand within 8 blocks of one and the Sandstorm loses all teeth — no scorching, no wind-thirst, no sand blast.",w:1,h:1,mass:4,block:Ni,color:"#c04838"}),ut({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:Je,color:"#82868e"}),ut({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:cn,color:"#a84a42"}),ut({id:"iron_ore",name:"Iron Ore",desc:"Dense ore from Cave walls. Smelt it at a Campfire: one ore bakes two Iron Rods.",w:1,h:1,mass:1.6,block:lr,color:"#9e8468"}),ut({id:"copper_ore",name:"Copper Ore",desc:"Reddened Cave stone. Smelts into Copper Rods - the heart of tier-4 Alloy gear.",w:1,h:1,mass:1.6,block:cr,color:"#b86b42"}),ut({id:"alabaster",name:"Alabaster",desc:"Pale Cave stone. Cuts soft, decorates well, and takes a Lamp's light like nothing else.",w:1,h:1,mass:1.2,block:Ls,color:"#dcd5bd"}),ut({id:"cobalt_ore",name:"Cobalt Ore",desc:"Bluish ore of the deepest stone (Metal Pickaxe or better). The Ship's repair hangs on it.",w:1,h:1,mass:2.2,block:hr,color:"#5c74a8"}),ut({id:"copperrod",name:"Copper Rod",desc:"Smelted from Copper Ore. Never a tool by itself - always a component of better things.",w:1,h:1,mass:1,color:"#c07848"}),ut({id:"cobaltrod",name:"Cobalt Rod",desc:"Smelted from Cobalt Ore, found only in the deep underground. One Thruster Nozzle needs one.",w:1,h:1,mass:1.4,color:"#6a84bc"}),ut({id:"backpack2",name:"Backpack II",desc:"The big pack: inventory grid grows to 7×6, weight limit +40 kg. Reptile-hide stitching.",w:3,h:2,mass:3.5,equip:"backpack",bag:{w:7,h:6,kg:40},color:"#6a4c30"}),ut({id:"body_regulator",name:"Body Heat Regulator",desc:"Worn in the Regulator slot: pins your Heat toward neutral while a Coolant Cell lasts. It regulates you - never a room.",w:2,h:2,mass:3,equip:"regulator",color:"#4fa8c8"}),ut({id:"coolant_cell",name:"Coolant Cell",desc:"Consumable fuel for the Body Heat Regulator: one cell carries about 2 game days of regulation. Spent cells are gone.",w:1,h:1,mass:.8,color:"#7fd4e8"}),ut({id:"head_lantern",name:"Head Lantern",desc:"The Portable Light: worn in the Light slot, toggled with T. Burns fuel charges (5 max) - refill at a Campfire or load Kindling.",w:1,h:1,mass:1,equip:"light",fuel:5,color:"#ffd76a"}),ut({id:"chitin",name:"Chitin",desc:"Dust Scorpion armor plate. Tough, thin, and very hard to burn.",w:1,h:1,mass:.3,color:"#6a4a3a"}),ut({id:"stinger",name:"Stinger",desc:"A Dust Scorpion's barb. Tipped onto a blade, it makes the deadliest weapon in the desert.",w:1,h:1,mass:.2,color:"#a84a3a"}),ut({id:"wurm_hide",name:"Wurm Hide",desc:"Sand Wurm skin - heat-tempered plating for the toughest Body gear.",w:1,h:2,mass:1.2,color:"#8a6a48"}),ut({id:"vulture_raw",name:"Vulture Fillet (raw)",desc:"Raw meat off a Sand Vulture. Cook it at a Campfire before eating.",w:1,h:1,mass:.7,color:"#7a5a4a"}),ut({id:"vulture_cooked",name:"Roasted Fillet",desc:"Cooked Vulture meat. Eat it: +25 Health.",w:1,h:1,mass:.6,eat:{health:25},color:"#b0764a"}),ut({id:"tortoise_shell",name:"Thornback Shell",desc:"The spiked dome of a Thornback Tortoise. Three plate a Cuirass; Traders always want them.",w:2,h:2,mass:6,color:"#5f5a4e"}),ut({id:"fennec_pelt",name:"Fennec Pelt",desc:"Soft pale fur off a Fennec Fox. Worth a real price at any Trader.",w:1,h:2,mass:.5,color:"#c99a62"}),ut({id:"tortoise_cuirass",name:"Thornback Cuirass",desc:"Body-slot breastplate of layered Shell and Metal: shrugs off 48% of every blow. Heavy going.",w:2,h:2,mass:9,equip:"body",armor:.48,color:"#6a6255"}),ut({id:"wurmsuit",name:"Wurmsuit",desc:"Body-slot armour of Wurm Hide and Chitin: shrugs off 45% of every blow, and the Chitin turns the Sandstorm aside — blast and wind-thirst bite at a quarter. Warmer against the cold night too.",w:2,h:2,mass:5,equip:"body",armor:.45,stormResist:!0,color:"#7a5c40"}),ut({id:"stinger_blade",name:"Stinger Blade",desc:"A Metal Sword tipped with a Scorpion Stinger: hits harder and farther than anything above ground.",w:1,h:2,mass:2.4,weapon:{reach:5.2,dmg:12},color:"#c9b048"}),ut({id:"curved_hull",name:"Curved Hull Plating",desc:"Hull Plating shaped as an elbow - insulates exactly like flat plating, and rounds any corner you build.",w:1,h:1,mass:2,block:$n,color:"#7d8390"}),ut({id:"hull_slope",name:"Hull Slope",desc:"A beveled hull block for spines, roofs and shoulders. Same insulation, rounder silhouette.",w:1,h:1,mass:2,block:Yn,color:"#767d88"}),ut({id:"thruster_nozzle",name:"Thruster Nozzle",desc:"Cobalt-and-Copper replacement engine part. Press E at a Broken Thruster to wake it. All four wake the Ship.",w:1,h:2,mass:3,color:"#c88a50"}),ut({id:"thruster_broken",name:"Broken Thruster",desc:"A dead wingtip engine torn off its pylon. Heavy, inert — set it down anywhere and it waits for a Thruster Nozzle.",w:2,h:2,mass:22,block:Hi,color:"#6b707c"}),ut({id:"thruster_lit",name:"Thruster (lit)",desc:"A running engine lifted off its pylon. It keeps burning while you carry it, and burns where you set it down.",w:2,h:2,mass:22,block:Zi,color:"#c88a50"}),ut({id:"armory",name:"Armoury",desc:"A forge bench for gear that guards the body: armour, backpacks, visors and the Body Heat Regulator. Built at the Crafting Bench.",w:2,h:2,mass:14,block:sr,color:"#6a6258"}),ut({id:"hot_water_pouch",name:"Hot Water Pouch",desc:"A full canister heated at a lit Campfire. Use it (Q): a +10 °C heat pulse toward body-warm, and the empty canister comes back.",w:1,h:2,mass:1.2,color:"#e08a4f"})],kt=Object.fromEntries(B_.map(i=>[i.id,i])),ii={};for(const i of Object.values(kt))i.block!==void 0&&(ii[i.block]=i.id);ii[Ye]="door";ii[ze]="door_inner";ii[un]="bed";ii[ni]="dirt";ii[di]="kindling";ii[Gn]="seed_melon";ii[wn]="dune_melon";ii[qn]="seed_wheat";ii[vn]="wheat";ii[ui]="cactus";function Hn(i){const t=kt[i.itemId];return i.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class Xa{slots=[];w=5;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const r=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const o of r)this.addSlot(o)||this.droppedOnResize.push(o)}droppedOnResize=[];weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=kt[e.itemId].mass;return t}occupied(t,e,n){for(const r of this.slots){if(r===n)continue;const o=Hn(r);if(t>=r.x&&t<r.x+o.w&&e>=r.y&&e<r.y+o.h)return r}return null}fits(t,e,n,r,o){if(t<0||e<0||t+n>this.w||e+r>this.h)return!1;for(let s=0;s<r;s++)for(let l=0;l<n;l++)if(this.occupied(t+l,e+s,o))return!1;return!0}move(t,e,n){const r=Hn(t);return e===t.x&&n===t.y?!0:this.fits(e,n,r.w,r.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=Hn(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addSlot(t){const e=kt[t.itemId],n=e.w===e.h?[[e.w,e.h,t.rot??!1]]:[[e.w,e.h,t.rot??!1],[e.h,e.w,!t.rot]];for(const[r,o,s]of n)for(let l=0;l<=this.h-o;l++)for(let h=0;h<=this.w-r;h++){let a=!0;for(let c=0;c<o&&a;c++)for(let u=0;u<r&&a;u++)this.occupied(h+u,l+c)&&(a=!1);if(a)return t.x=h,t.y=l,t.rot=s||void 0,this.slots.push(t),!0}return!1}addItem(t,e=1){const n=kt[t],r=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let o=0;o<e;o++){let s=!1;for(const[l,h,a]of r){for(let c=0;c<=this.h-h&&!s;c++)for(let u=0;u<=this.w-l&&!s;u++){let f=!0;for(let m=0;m<h&&f;m++)for(let v=0;v<l&&f;v++)this.occupied(u+v,c+m)&&(f=!1);f&&(this.slots.push(a?{itemId:t,x:u,y:c,rot:!0}:{itemId:t,x:u,y:c}),s=!0)}if(s)break}if(!s)return e-o}return 0}removeItem(t,e=1){let n=0;for(let r=this.slots.length-1;r>=0&&n<e;r--)this.slots[r].itemId===t&&(this.slots.splice(r,1),n++);return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&e++;return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const To={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]},scorpion:{kind:"scorpion",name:"Dust Scorpion",hp:20,speed:1.9,aggroR:3.5,fleeR:0,biteDmg:7,biteCd:2.2,hitR:.6,height:.5,drops:[{itemId:"chitin",count:1},{itemId:"stinger",count:1}],dropChance:[1,.3]},wurm:{kind:"wurm",name:"Sand Wurm",hp:45,speed:1,aggroR:7,fleeR:0,biteDmg:12,biteCd:2.5,hitR:.8,height:.9,drops:[{itemId:"wurm_hide",count:2},{itemId:"chitin",count:1}],dropChance:[1,.5]},trader:{kind:"trader",name:"Trader",hp:9999,speed:1.1,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.5,height:1.8,drops:[]},vulture:{kind:"vulture",name:"Sand Vulture",hp:14,speed:2.6,aggroR:5,fleeR:8,biteDmg:5,biteCd:2.2,hitR:.55,height:.9,drops:[{itemId:"vulture_raw",count:1},{itemId:"vulture_raw",count:1}],dropChance:[1,.5]},tortoise:{kind:"tortoise",name:"Thornback Tortoise",hp:40,speed:.7,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.9,height:.8,drops:[{itemId:"tortoise_shell",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.4]},fennec:{kind:"fennec",name:"Fennec Fox",hp:6,speed:4.2,aggroR:0,fleeR:9,biteDmg:0,biteCd:0,hitR:.4,height:.45,drops:[{itemId:"fennec_pelt",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.3]}},z_=new Bi(1,1,1);function H_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function rs(i){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");i(e,H_(5370855));const n=new zu(t);return n.magFilter=n.minFilter=Xn,n.generateMipmaps=!1,n.colorSpace=Dn,n}function G_(){return rs((i,t)=>{i.fillStyle="#c8a76d",i.fillRect(0,0,64,64);for(let n=0;n<420;n++){const r=.5+(t()-.5)*.22;i.fillStyle=r>.5?"#d4b781":"#b89359",i.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let r=0;r<9;r++){const o=5-Math.abs(r-4);i.fillStyle="#6f5230",i.fillRect(32-o,n+r,o*2,1),i.fillStyle="#8a6a3f",i.fillRect(32-o+1,n+r,Math.max(1,o*2-2),1)}i.fillStyle="#a9884f",i.fillRect(10+(t()*4|0),n+3,3,2),i.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)i.fillStyle=n>=56?"#e9dab1":"#d8c494",i.fillRect(0,n,64,1);for(let n=0;n<40;n++)i.fillStyle="#ddcba0",i.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function V_(){return rs((i,t)=>{i.fillStyle="#c9a878",i.fillRect(0,0,64,64);for(let e=0;e<700;e++)i.fillStyle=t()>.5?"#ddc295":"#a9854f",i.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)i.fillStyle="#8a6a3c",i.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)i.fillStyle=e>=54?"#f2ead9":"#e2d4ba",i.fillRect(0,e,64,1);i.fillStyle="#efe6d2",i.beginPath(),i.arc(10,12,8,0,Math.PI*2),i.fill(),i.fillStyle="#6b4e2c",i.fillRect(8,10,4,4)})}function W_(){return rs((i,t)=>{i.fillStyle="#a4552e",i.fillRect(0,0,64,64);for(let e=0;e<520;e++)i.fillStyle=t()>.5?"#b56a3c":"#8f4526",i.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[6,18,30,42])i.fillStyle="#6e3018",i.fillRect(0,e,64,2),i.fillStyle="#c47a4a",i.fillRect(0,e+2,64,1);i.fillStyle="#8a3f20",i.fillRect(30,0,4,50);for(let e=0;e<40;e++)i.fillStyle="#b56a3c",i.fillRect(30+(t()*4|0),t()*50|0,1,1);for(let e=52;e<64;e++)i.fillStyle=e>=56?"#e3cfa8":"#c9ae83",i.fillRect(0,e,64,1)})}function q_(){return rs((i,t)=>{i.fillStyle="#c2a266",i.fillRect(0,0,64,64);for(let e=0;e<620;e++)i.fillStyle=t()>.5?"#d3b77e":"#ab8a52",i.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[5,17,29,41]){i.fillStyle="#7d5f36",i.fillRect(0,e,64,3),i.fillStyle="#96744499";for(let n=0;n<64;n+=4)i.fillRect(n,e+3,2,1)}for(let e=54;e<64;e++)i.fillStyle=e>=58?"#e6d6ac":"#d2bf94",i.fillRect(0,e,64,1)})}function X_(){return rs((i,t)=>{i.fillStyle="#a8906a",i.fillRect(0,0,64,64);for(let e=0;e<640;e++)i.fillStyle=t()>.5?"#b9a179":"#8f7854",i.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<70;e++)i.fillStyle="#75603f",i.fillRect(t()*64|0,t()*50|0,2,4);for(let e=0;e<6;e++)i.fillStyle=e>=3?"#c9b68e":"#b8a37b",i.fillRect(0,e,64,1)})}function $_(){return rs((i,t)=>{i.fillStyle="#77744f",i.fillRect(0,0,64,64);for(let e=0;e<520;e++)i.fillStyle=t()>.5?"#86825c":"#65613f",i.fillRect(t()*64|0,t()*64|0,1,1);i.fillStyle="#4c4930";for(const e of[10,31,52])i.fillRect(e,0,2,64);for(const e of[12,33,54])i.fillRect(0,e,64,2);for(const e of[16,37])for(const n of[3,22,43])i.fillStyle="#8f8b63",i.fillRect(e,n,11,7)})}function Y_(){return rs((i,t)=>{i.fillStyle="#d8bd8e",i.fillRect(0,0,64,64);for(let e=0;e<700;e++)i.fillStyle=t()>.5?"#e6cfa6":"#c2a271",i.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<8;e++)i.fillStyle=e>=4?"#b18f5c":"#a68351",i.fillRect(0,e,64,1);for(let e=54;e<64;e++)i.fillStyle=e>=58?"#f0e4c8":"#e3d3ac",i.fillRect(0,e,64,1)})}function K_(){return rs((i,t)=>{i.fillStyle="#27474a",i.fillRect(0,0,64,64);for(let e=0;e<520;e++)i.fillStyle=t()>.5?"#2e5254":"#1f3b3e",i.fillRect(t()*64|0,t()*64|0,1,2);i.fillStyle="#5c2e46",i.fillRect(0,0,64,8),i.fillRect(0,46,64,8),i.fillStyle="#b99a5e",i.fillRect(0,8,64,1),i.fillRect(0,45,64,1);for(let e=0;e<34;e++)i.fillStyle="#6f4a5c",i.fillRect(t()*64|0,16+(t()*26|0),2,2)})}let $a=null,Ya=null,Ka=null,ja=null,Za=null,Ja=null,Qa=null,tl=null;function j_(){return $a||($a={body:new ne({map:G_()}),ridge:new ne({color:7295536}),eye:new ne({color:1445898})}),$a}function Z_(){return Ya||(Ya={fur:new ne({map:V_()}),pale:new ne({color:15260868}),dark:new ne({color:6045731}),pink:new ne({color:14196896})}),Ya}function J_(){return Ka||(Ka={shell:new ne({map:W_()}),claw:new ne({color:8272414}),stinger:new ne({color:5579793}),eye:new ne({color:1445898})}),Ka}function Q_(){return ja||(ja={hide:new ne({map:q_()}),ridge:new ne({color:8216374}),eye:new ne({color:1445898})}),ja}function tv(){return Za||(Za={plumage:new ne({map:X_()}),skin:new ne({color:13077884}),feather:new ne({color:6245427}),beak:new ne({color:3486778}),eye:new ne({color:1445898})}),Za}function ev(){return Ja||(Ja={shell:new ne({map:$_()}),skin:new ne({color:9669214}),thorn:new ne({color:5722426}),beak:new ne({color:11575918}),eye:new ne({color:1445898})}),Ja}function nv(){return Qa||(Qa={fur:new ne({map:Y_()}),pale:new ne({color:15721158}),dark:new ne({color:7032364}),pink:new ne({color:14196896})}),Qa}function iv(){return tl||(tl={robe:new ne({map:K_()}),sash:new ne({color:10246707}),skin:new ne({color:13079398}),scarf:new ne({color:14207920}),pouch:new ne({color:7228204}),coin:new ne({color:13216079}),eye:new ne({color:1445898})}),tl}function ct(i,t,e,n,r,o,s){const l=new Ke(z_,n);return l.scale.set(i,t,e),l.position.set(r,o,s),l}function sv(){const i=j_(),t=new oe,e=[],n=[],r=[.36,.13,-.1,-.33,-.54,-.72],o=[.26,.27,.26,.23,.18,.12],s=[.22,.23,.22,.2,.16,.11],l=.24;for(let u=0;u<r.length;u++){const f=Math.sin(u*.8)*.05,m=ct(o[u],s[u],l,i.body,f,s[u]/2+.005,r[u]);e.push({mesh:m,bx:f,w:o[u],h:s[u],d:l}),n.push({mesh:ct(o[u]*.3,.02,l*.92,i.ridge,f,s[u]+.008,r[u]),w:o[u]}),t.add(m,n[u].mesh)}const h=new oe;h.position.set(Math.sin(0)*.05,.095+.005,.6);const a=ct(.27,.19,.27,i.body,0,.095,0);return h.add(a),h.add(ct(.035,.035,.03,i.eye,-.115,.14,.11)),h.add(ct(.035,.035,.03,i.eye,.115,.14,.11)),t.add(h),{group:t,animate:(u,f)=>{const m=Math.max(0,Math.min(1,f)),v=.015+.075*m,y=u*(3.2+2.6*m);for(let x=0;x<e.length;x++){const _=e[x],A=Math.sin(y-x*.85)*v;_.mesh.position.x=_.bx+A,_.mesh.rotation.y=-A*1.4;const E=1+Math.sin(u*1.9)*.03*(1-m*.6);_.mesh.scale.set(_.w*E,_.h,_.d);const S=n[x];S.mesh.position.x=_.mesh.position.x,S.mesh.rotation.y=_.mesh.rotation.y,S.mesh.scale.x=S.w*.3*E}h.position.x=Math.sin(y+.85)*v*.5,h.rotation.y=Math.sin(u*(2.2+2.4*m))*(.06+.14*m)}}}function rv(){const i=Z_(),t=new oe,e=new oe;t.add(e);const n=ct(.22,.26,.34,i.fur,0,.26,-.02);e.add(n);const r=new oe;r.position.set(0,.31,.19),r.add(ct(.15,.14,.15,i.fur,0,0,.05)),r.add(ct(.045,.035,.04,i.pink,0,-.02,.13)),r.add(ct(.028,.028,.02,i.dark,-.062,.03,.1)),r.add(ct(.028,.028,.02,i.dark,.062,.03,.1)),e.add(r);const o=ct(.05,.12,.025,i.fur,-.075,.41,.16),s=ct(.05,.12,.025,i.fur,.075,.41,.16);o.rotation.z=.15,s.rotation.z=-.15,e.add(o,s);const l=ct(.09,.14,.11,i.fur,-.12,.14,-.06),h=ct(.09,.14,.11,i.fur,.12,.14,-.06),a=ct(.07,.05,.22,i.pale,-.13,.028,.02),c=ct(.07,.05,.22,i.pale,.13,.028,.02);e.add(l,h,a,c),e.add(ct(.035,.035,.07,i.pale,-.08,.11,.15)),e.add(ct(.035,.035,.07,i.pale,.08,.11,.15));const u=new oe;return u.position.set(0,.16,-.19),u.add(ct(.04,.04,.24,i.fur,0,0,-.12)),u.add(ct(.032,.032,.22,i.fur,0,-.045,-.34)),u.add(ct(.07,.055,.11,i.dark,0,-.075,-.5)),e.add(u),{group:t,animate:(m,v)=>{const y=Math.max(0,Math.min(1,v)),x=Math.abs(Math.sin(m*(2.6+2.4*y)));e.position.y=x*.13*y+Math.sin(m*1.7)*.004,n.scale.y=.26*(1+Math.sin(m*1.9)*.03*(1-y)),a.rotation.x=c.rotation.x=-.55*x*y,l.rotation.x=h.rotation.x=-.35*x*y,u.rotation.y=Math.sin(m*(1.8+3.4*y))*(.1+.3*y),u.rotation.x=-.12-.18*y+Math.sin(m*(2.6+2.4*y))*.06*y;const _=Math.max(0,Math.sin(m*6.3))**8*(1-y);o.rotation.z=.15+_*.25,s.rotation.z=-.15-Math.max(0,Math.sin(m*6.3+2.1))**8*(1-y)*.25,r.rotation.x=-.1*x*y+Math.sin(m*1.3)*.03*(1-y)}}}const ov=new Ko(1,14,10);function Rs(i,t,e,n,r,o,s){const l=new Ke(ov,n);return l.scale.set(i,t,e),l.position.set(r,o,s),l}function av(){const i=J_(),t=new oe,e=new oe;t.add(e);const n=.09,r=ct(.46,.14,.34,i.shell,0,n+.07,.02);e.add(r);const o=[],s=[-.26,-.45,-.62],l=[.4,.34,.26],h=[.13,.12,.1];for(let E=0;E<s.length;E++){const S=ct(l[E],h[E],.2,i.shell,0,n+h[E]/2,s[E]);o.push({mesh:S,bx:0,w:l[E],h:h[E],d:.2}),e.add(S)}const a=new oe;a.position.set(0,n+.045,.25),a.add(ct(.26,.09,.13,i.shell,0,0,0)),a.add(ct(.03,.03,.02,i.eye,-.08,.05,.05)),a.add(ct(.03,.03,.02,i.eye,.08,.05,.05)),e.add(a);const c=[],u=[];for(const E of[-1,1]){const S=new oe;S.position.set(E*.24,n+.04,.14),S.rotation.y=E*.5,S.add(ct(.075,.055,.2,i.shell,0,0,.1)),S.add(ct(.07,.05,.1,i.claw,0,0,.24));const b=ct(.025,.022,.13,i.claw,0,.026,.33),I=ct(.025,.022,.13,i.claw,0,-.026,.33);S.add(b,I),c.push({up:b,dn:I}),u.push(S),e.add(S)}const f=[];for(const E of[-1,1])for(let S=0;S<4;S++){const b=ct(.03,.11,.03,i.shell,E*.3,n*.5,.12-S*.14);b.rotation.z=-E*.55,f.push(b),e.add(b)}const m=new oe;m.position.set(0,n+.1,-.7),m.rotation.x=.5,m.add(ct(.16,.16,.22,i.shell,0,0,-.11));const v=new oe;v.position.set(0,.04,-.22),v.rotation.x=.7,v.add(ct(.13,.13,.18,i.shell,0,0,-.09));const y=new oe;y.position.set(0,.03,-.18),y.rotation.x=.8,y.add(ct(.1,.1,.15,i.shell,0,0,-.075));const x=Rs(.22,.2,.24,i.stinger,0,.06,-.22),_=ct(.035,.035,.13,i.stinger,0,.16,-.3);return _.rotation.x=.5,y.add(x,_),v.add(y),m.add(v),e.add(m),{group:t,animate:(E,S)=>{const b=Math.max(0,Math.min(1,S));e.position.y=Math.abs(Math.sin(E*(5.5+5*b)))*.012*b;const I=E*(6+6*b);for(let d=0;d<f.length;d++){const g=d%4,M=d<4?0:Math.PI;f[d].rotation.x=Math.sin(I+g*1.7+M)*.5*b}const R=1+Math.sin(E*1.6)*.03*(1-b*.5);for(const d of o)d.mesh.scale.set(d.w*R,d.h,d.d);for(let d=0;d<2;d++){const g=u[d],M=c[d];g.rotation.z=Math.sin(I+d*Math.PI)*.25*b;const C=.06+Math.abs(Math.sin(E*(1.4+1.6*b)+d*1.3))*(.08+.14*b);M.up.rotation.x=-C,M.dn.rotation.x=C}const p=.06+.14*b;m.rotation.y=Math.sin(E*(1.1+1.4*b))*p,y.rotation.x=.8+Math.sin(E*1.7)*.08,a.rotation.y=Math.sin(E*1.5)*.05*(1-b*.5)}}}function lv(){const i=Q_(),t=new oe,e=[],n=[],r=[-.95,-.45,.1,.62],o=[.34,.4,.44,.42],s=[.3,.37,.42,.4],l=[.4,.45,.48,.45];for(let c=0;c<r.length;c++){const u=s[c]+.01,f=Rs(o[c]*2,s[c]*2,l[c]*2,i.hide,0,u,r[c]);e.push({mesh:f,bx:0,w:o[c]*2,h:s[c]*2,d:l[c]*2}),n.push({mesh:ct(o[c],.06,l[c]*.8,i.ridge,0,u+s[c]-.04,r[c]),w:o[c]}),t.add(f,n[c].mesh)}const h=new oe;return h.position.set(0,.36,1.15),h.add(Rs(.72,.68,.76,i.hide,0,0,0)),h.add(ct(.05,.05,.04,i.eye,-.19,.12,.26)),h.add(ct(.05,.05,.04,i.eye,.19,.12,.26)),t.add(h),{group:t,animate:(c,u)=>{const f=Math.max(0,Math.min(1,u)),m=.02+.11*f,v=c*(1.5+1.5*f);for(let y=0;y<e.length;y++){const x=e[y],_=Math.sin(v-y*.8)*m;x.mesh.position.x=x.bx+_,x.mesh.rotation.y=-_*1.1;const A=1+Math.sin(c*1.1-y*.6)*.03;x.mesh.scale.set(x.w*A,x.h,x.d*A);const E=n[y];E.mesh.position.x=x.mesh.position.x,E.mesh.rotation.y=x.mesh.rotation.y,E.mesh.scale.x=E.w*A}h.position.x=Math.sin(v+.8)*m*.7,h.rotation.y=Math.sin(c*(1.2+1.4*f))*(.07+.13*f)}}}function cv(){const i=tv(),t=new oe,e=new oe;t.add(e);const n=Rs(.52,.5,.68,i.plumage,0,.44,-.06);n.rotation.x=-.12,e.add(n);const r=new oe;r.position.set(0,.6,.2),r.rotation.x=.25,r.add(ct(.13,.22,.13,i.skin,0,.09,0)),r.add(ct(.26,.09,.26,i.plumage,0,-.02,-.01));const o=new oe;o.position.set(0,.22,.02),o.add(Rs(.19,.17,.2,i.skin,0,0,.03)),o.add(ct(.09,.09,.13,i.beak,0,-.01,.14));const s=ct(.05,.07,.06,i.beak,0,-.06,.2);s.rotation.x=.5,o.add(s),o.add(ct(.03,.03,.02,i.eye,-.08,.04,.1)),o.add(ct(.03,.03,.02,i.eye,.08,.04,.1)),r.add(o),e.add(r);const l=[];for(const c of[-1,1]){const u=new oe;u.position.set(c*.26,.52,-.04),u.rotation.z=c*.35,u.add(ct(.08,.34,.5,i.plumage,0,-.08,0)),u.add(ct(.05,.28,.42,i.feather,c*.04,-.2,-.06)),l.push(u),e.add(u)}const h=[];for(const c of[-1,1]){const u=ct(.09,.2,.09,i.feather,c*.13,.1,.02);h.push(u),e.add(u,ct(.1,.04,.16,i.beak,c*.13,.02,.08))}return{group:t,animate:(c,u)=>{const f=Math.max(0,Math.min(1,u));e.position.y=Math.sin(c*1.6)*.008+Math.abs(Math.sin(c*(3+2.6*f)))*.02*f,e.rotation.x=.12*f+Math.sin(c*1.3)*.012*(1-f);for(let v=0;v<2;v++){const y=v===0?-1:1,x=Math.sin(c*(4.5+3*f)+v*.9)*(.05+.22*f);l[v].rotation.z=y*(.35+x)}o.rotation.x=-.18+.28*f+Math.sin(c*1.1)*.04*(1-f);const m=c*(3.4+3*f);for(let v=0;v<h.length;v++)h[v].rotation.x=Math.sin(m+v*Math.PI)*.4*f}}}function hv(){const i=ev(),t=new oe,e=new oe;t.add(e);const n=.14;e.add(Rs(1.05,.75,1.15,i.shell,0,n+.31,-.02));for(const l of[.9,1.4,1.9,2.4,2.9,Math.PI,3.3,3.8,4.3,4.8,5.3]){const h=ct(.09,.16,.09,i.thorn,Math.sin(l)*.52,n+.44,Math.cos(l)*.57-.02);h.rotation.z=-Math.sin(l)*.45,h.rotation.x=Math.cos(l)*.45,e.add(h)}const r=[];for(const l of[-1,1])for(const h of[.33,-.35]){const a=ct(.16,n+.06,.18,i.skin,l*.32,(n+.06)/2,h);r.push(a),e.add(a)}const o=new oe;return o.position.set(0,n+.17,.66),o.add(ct(.2,.17,.18,i.skin,0,0,0)),o.add(ct(.12,.09,.1,i.beak,0,-.03,.13)),o.add(ct(.035,.035,.02,i.eye,-.08,.04,.09)),o.add(ct(.035,.035,.02,i.eye,.08,.04,.09)),e.add(o),e.add(ct(.09,.09,.16,i.skin,0,n+.12,-.66)),{group:t,animate:(l,h)=>{const a=Math.max(0,Math.min(1,h));e.position.y=Math.abs(Math.sin(l*(1.4+1.2*a)))*.008*a;const c=l*(1.6+1.4*a);for(let f=0;f<r.length;f++)r[f].rotation.x=Math.sin(c+f%2*Math.PI+(f<2?0:.6))*.3*a;const u=Math.sin(l*.9);o.position.z=.66+u*.05*(1-a)+.05*a,o.rotation.x=.05*a+u*.03*(1-a)}}}function uv(){const i=nv(),t=new oe,e=new oe;t.add(e),e.add(ct(.2,.2,.36,i.fur,0,.24,-.02));const n=new oe;n.position.set(0,.3,.24),n.add(ct(.16,.15,.14,i.fur,0,0,0)),n.add(ct(.07,.06,.13,i.pale,0,-.04,.12)),n.add(ct(.03,.025,.02,i.dark,-.06,.03,.075)),n.add(ct(.03,.025,.02,i.dark,.06,.03,.075)),n.add(ct(.028,.022,.02,i.pink,0,-.03,.185)),e.add(n);const r=ct(.09,.2,.025,i.fur,-.09,.48,.18),o=ct(.09,.2,.025,i.fur,.09,.48,.18),s=ct(.055,.13,.02,i.pink,-.09,.47,.196),l=ct(.055,.13,.02,i.pink,.09,.47,.196);r.rotation.z=.28,o.rotation.z=-.28,e.add(r,o,s,l);const h=[];for(const u of[-1,1])for(const f of[.13,-.15]){const m=ct(.05,.16,.05,i.fur,u*.08,.08,f);h.push(m),e.add(m)}const a=new oe;return a.position.set(0,.25,-.2),a.add(ct(.06,.06,.24,i.fur,0,-.02,-.12)),a.add(ct(.09,.09,.12,i.pale,0,-.03,-.3)),e.add(a),{group:t,animate:(u,f)=>{const m=Math.max(0,Math.min(1,f));e.position.y=Math.abs(Math.sin(u*(4+3*m)))*.02*m+Math.sin(u*2.2)*.003;const v=u*(6+4*m);for(let _=0;_<h.length;_++)h[_].rotation.x=Math.sin(v+_%2*Math.PI+(_<2?0:.7))*.55*m;a.rotation.y=Math.sin(u*(2.2+3.2*m))*(.14+.22*m),a.rotation.x=-.1+.25*m+Math.sin(u*(2.6+2.4*m))*.05*m;const y=Math.max(0,Math.sin(u*5.7))**8*(1-m),x=Math.max(0,Math.sin(u*5.7+2.3))**8*(1-m);r.rotation.z=.28+y*.3,o.rotation.z=-.28-x*.3,n.rotation.x=Math.sin(u*1.6)*.04*(1-m)-.06*m}}}function dv(){const i=iv(),t=new oe,e=new oe;t.add(e),e.add(ct(.62,1.42,.42,i.robe,0,.71,0)),e.add(ct(.72,.18,.5,i.robe,0,.09,0)),e.add(ct(.66,.14,.46,i.sash,0,.86,0));for(const o of[-1,1])e.add(ct(.14,.8,.16,i.robe,o*.38,.8,.02)),e.add(ct(.1,.1,.1,i.skin,o*.16,.7,.18));e.add(Rs(.2,.22,.16,i.pouch,.28,.82,.24)),e.add(ct(.06,.05,.05,i.coin,.28,.94,.24));const n=new oe;return n.position.set(0,1.56,0),n.add(ct(.26,.26,.24,i.skin,0,0,0)),n.add(ct(.3,.1,.28,i.scarf,0,.15,0)),n.add(ct(.3,.09,.3,i.scarf,0,.21,-.05)),n.add(ct(.3,.1,.3,i.scarf,0,-.16,-.02)),n.add(ct(.04,.04,.03,i.eye,-.07,.02,.12)),n.add(ct(.04,.04,.03,i.eye,.07,.02,.12)),e.add(n),{group:t,animate:(o,s)=>{const l=s?Math.sin(o*5):0;e.rotation.z=Math.sin(o*.6)*.01+l*.02,e.position.y=Math.abs(l)*.015,n.position.y=1.56+Math.sin(o*.9)*.012+Math.abs(l)*.008,n.rotation.y=Math.sin(o*.35)*.08+(s?l*.05:0)}}}const fv=new pi({color:13121584});function Ki(i){const t=[];i.group.traverse(n=>{n.isMesh&&t.push(n)});const e=t.map(n=>n.material);return i.setFlash=n=>t.forEach((r,o)=>{r.material=n?fv:e[o]}),i}function pv(i){switch(i){case"snake":return Ki(sv());case"rat":return Ki(rv());case"scorpion":return Ki(av());case"wurm":return Ki(lv());case"trader":return Ki(dv());case"vulture":return Ki(cv());case"tortoise":return Ki(hv());case"fennec":return Ki(uv())}}const el=[{want:[{itemId:"rock",count:6}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"sand",count:8}],give:[{itemId:"glass",count:2}]},{want:[{itemId:"cactus",count:3}],give:[{itemId:"canister_empty",count:1}]},{want:[{itemId:"prickly_pear",count:5}],give:[{itemId:"canister_full",count:1}]},{want:[{itemId:"snake_skin",count:2}],give:[{itemId:"coolant_cell",count:1}]},{want:[{itemId:"wurm_hide",count:1}],give:[{itemId:"cobaltrod",count:2}]},{want:[{itemId:"chitin",count:4}],give:[{itemId:"catalyst",count:1}]},{want:[{itemId:"metal",count:4}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"fennec_pelt",count:2}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"tortoise_shell",count:1}],give:[{itemId:"canister_full",count:2}]},{want:[{itemId:"deadwood",count:5}],give:[{itemId:"adobe",count:3}]},{want:[{itemId:"rat_raw",count:4}],give:[{itemId:"prickly_pear",count:3}]},{want:[{itemId:"stinger",count:1}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"alabaster",count:4}],give:[{itemId:"glass",count:2}]}];function mv(i,t,e,n){const r=[],o=new Set;for(let s=0;s<5;s++){let l=Math.floor(mt(t+s*7,e-s*13,i+n*101+317)*el.length);for(;o.has(l);)l=(l+1)%el.length;o.add(l),r.push(el[l])}return r}const od=[{out:"bench",count:1,needs:{deadwood:4},station:null},{out:"armory",count:1,needs:{deadwood:4,metal:2},station:"bench"},{out:"campfire",count:1,needs:{rock:6,deadwood:2},station:null},{out:"wood_pickaxe",count:1,needs:{deadwood:3},station:null},{out:"wood_shovel",count:1,needs:{deadwood:3},station:null},{out:"wood_axe",count:1,needs:{deadwood:3},station:null},{out:"alloy_pickaxe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_shovel",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_axe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_disassembler",count:1,needs:{metal:3,copperrod:2,rock:2},station:"bench"},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},station:"bench"},{out:"backpack2",count:1,needs:{deadwood:10,metal:4,snake_skin:2},station:"armory"},{out:"wurmsuit",count:1,needs:{wurm_hide:3,chitin:1},station:"armory"},{out:"tortoise_cuirass",count:1,needs:{tortoise_shell:3,metal:1},station:"armory"},{out:"stinger_blade",count:1,needs:{metal:2,stinger:1,deadwood:1},station:"bench"},{out:"body_regulator",count:1,needs:{metal:4,copperrod:2,cobaltrod:1,catalyst:1},station:"armory"},{out:"coolant_cell",count:1,needs:{salt:2,canister_empty:1,copperrod:1},station:"bench"},{out:"head_lantern",count:1,needs:{metal:1,glass:1,copperrod:1,deadwood:1},station:"bench"},{out:"curved_hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"hull_slope",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"thruster_nozzle",count:1,needs:{cobaltrod:1,copperrod:2,metal:1},station:"bench"},{out:"sword",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"door",count:1,needs:{metal:2,deadwood:2},station:"bench"},{out:"hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},station:"bench"},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},station:"bench"},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},station:"armory"},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},station:"bench"},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},station:"bench"},{out:"chest",count:1,needs:{deadwood:6,metal:1},station:"bench"},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},station:"armory"},{out:"reptile_armor",count:1,needs:{snake_skin:3},station:"armory"},{out:"farmland",count:1,needs:{dirt:1},station:null},{out:"deadwood",count:2,needs:{wood_log:1},station:null},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},station:null},{out:"metal_plating",count:1,needs:{metal:1},station:null},{out:"door_inner",count:1,needs:{metal:1},station:"bench"},{out:"storm_breaker",count:1,needs:{metal:2,glass:1},station:"bench"},{out:"bucket",count:1,needs:{metal:2},station:"bench"},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},station:"bench"}],ad=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"metal"},{in:"rat_raw",out:"rat_cooked"},{in:"vulture_raw",out:"vulture_cooked"},{in:"wheat",out:"cooked_wheat"},{in:"iron_ore",out:"metal",n:2},{in:"copper_ore",out:"copperrod",n:2},{in:"cobalt_ore",out:"cobaltrod",n:2}];function ld(i,t){return Object.entries(t.needs).every(([e,n])=>i.has(e,n))}function gv(i,t){if(!ld(i,t))return null;for(const[e,n]of Object.entries(t.needs))i.removeItem(e,n);return i.addItem(t.out,t.count)}const Mi=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it right next to a Save Beacon — that wakes the wreck's power.",goal:1},{id:"wings",kind:"thruster",title:"Wings of the Wreck",desc:"The Ship's four wingtip engines are dead. Mine Cobalt Ore in the deep Caves, smelt it at a Campfire, craft a Thruster Nozzle (Cobalt + Copper + Metal), and press E at each Broken Thruster. All four lit lifts the Ship.",goal:4}];function _v(){return{i:0,p:Mi.map(()=>0)}}function vv(i){const t=_v();if(!i)return t;t.i=Math.max(0,Math.min(Mi.length,i.i|0));for(let e=0;e<t.p.length;e++){const n=Mi[e].goal;t.p[e]=Math.max(0,Math.min(n,(i.p&&i.p[e])|0))}return t}function wr(i){return i.i<Mi.length?Mi[i.i]:null}function xv(i,t,e=1){const n=wr(i);if(!n||n.kind!==t||i.p[i.i]>=n.goal||(i.p[i.i]=Math.min(n.goal,i.p[i.i]+e),i.p[i.i]<n.goal))return null;const r=n;return i.i++,r}const yv=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],yr=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside. Mind the drop: the first 4 blocks of a fall are free, every one after bites.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:i=>i.setClock(.56),poll:i=>i.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:i=>{i.inv.has("canister_empty")||i.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:i=>i.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:i=>i.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. The wreck keeps its soil where the tank sinks: <b>Dirt</b> lines the water compartment. Dig it out, till it, plant seeds in the furrow. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",guide:{name:"Dirt",x:-3,y:30,z:3},goal:"plant",hold:60,enter:i=>{i.giveOrDrop("seed_wheat",2),i.selectHeld("shovel")}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class Mv{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(!0),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&yr[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=yr[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===Xe&&(t.set(-6,31,0,Qe),t.set(-6,32,0,Ye),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=yr.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=yr[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=yr.map((n,r)=>r===this.step?"●":r<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(t=!1){if(!this.ended){if(this.ended=!0,t){this.g.skipCine();const e=this.g;e.inv.has("canister_empty")||e.giveOrDrop("canister_empty",1),e.giveOrDrop("deadwood",4),e.giveOrDrop("seed_wheat",2)}this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial()}}}const cd="sotf:index",hd="sotf:settings",ud="sotf:best",ou={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function bv(){try{return{...ou,...JSON.parse(localStorage.getItem(hd)||"{}")}}catch{return{...ou}}}function Sv(i){localStorage.setItem(hd,JSON.stringify(i))}function Nr(){return Number(localStorage.getItem(ud)||0)}function au(i){i>Nr()&&localStorage.setItem(ud,String(i))}function na(){try{return JSON.parse(localStorage.getItem(cd)||"[]")}catch{return[]}}function Sc(i){localStorage.setItem(cd,JSON.stringify(i))}function dd(i,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:i||t||"world",seedStr:t,updated:Date.now()},r=na();return r.unshift(n),Sc(r),n}function wv(i){Sc(na().filter(t=>t.id!==i)),localStorage.removeItem("sotf:w:"+i)}function fd(i,t){try{localStorage.setItem("sotf:w:"+i.id,JSON.stringify(t));const e=na(),n=e.find(r=>r.id===i.id);return n&&(n.updated=Date.now(),Sc(e)),!0}catch{return!1}}function pd(i){try{const t=localStorage.getItem("sotf:w:"+i);return t?JSON.parse(t):null}catch{return null}}function md(i,t){const e=new Blob([JSON.stringify({meta:i,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${i.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function Ev(i){const t=JSON.parse(await i.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=dd(t.meta?.name??"imported",t.run.seedStr);return fd(e,t.run),e}const ee=xe;function Es(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}const ai=(i,t,e,n)=>{const[r,o]=rd(n);i.drawImage(sd(),r,o,ee,ee,t,e,ee,ee)},U=(i,t,e,n,r,o)=>{i.fillStyle=o,i.fillRect(t,e,n,r)},ue=(i,t,e,n,r,o)=>{i.strokeStyle=o,i.lineWidth=1,i.strokeRect(t+.5,e+.5,n-1,r-1)},qt=(i,t,e,n,r,o,s=2)=>{i.strokeStyle=o,i.lineWidth=s,i.beginPath(),i.moveTo(t,e),i.lineTo(n,r),i.stroke()},Bt=(i,t,e)=>{i.fillStyle=e,i.beginPath(),i.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)i.lineTo(t[n][0],t[n][1]);i.closePath(),i.fill()};function gd(i,t){return i==="head_lantern"?t?t<=2?"1":"2":"0":i==="body_regulator"?t?t<=1?"1":"2":"0":""}function _d(i,t,e,n,r=""){const[o,s]=Es(t*ee,e*ee),l=(c,u,f)=>{Bt(s,[[3,12],[2,7],[5,3],[10,2],[14,6],[13,12],[8,14]],c),Bt(s,[[5,3],[10,2],[11,6],[6,7]],u),Bt(s,[[3,12],[13,12],[8,14]],f)},h=(c,u,f)=>{s.fillStyle=c;for(const[m,v]of f)s.fillRect(m,v,2,2);s.fillStyle=u;for(const[m,v]of f)s.fillRect(m,v,1,1)};if(i.includes("_")&&(i.endsWith("pickaxe")||i.endsWith("shovel")||i.endsWith("axe")||i.endsWith("disassembler"))){const c=i.replace(/^(wood|stone|metal|alloy)_/,""),u=i.startsWith("alloy_"),f=u?"#7a4a26":"#00000044";return U(s,7,16,2,14,"#6b5238"),U(s,6,14,4,3,"#4a4a52"),c==="pickaxe"?(qt(s,3,12,13,12,n,2),qt(s,3,12,3,15,n),qt(s,13,12,13,15,n),qt(s,4,9,12,9,"#00000022",1),u&&qt(s,4,11,12,11,"#e89a62",1)):c==="shovel"?(U(s,5,6,6,7,n),ue(s,5,6,6,7,f),qt(s,6,13,6,13,n),qt(s,9,13,9,13,n),qt(s,6,13,7,14,n,1),qt(s,9,13,8,14,n,1),u&&U(s,6,7,2,4,"#e89a62")):c==="axe"?(U(s,9,7,5,6,n),ue(s,9,7,5,6,f),U(s,8,8,1,4,n),u&&U(s,10,8,2,3,"#e89a62")):(U(s,4,7,8,2,n),U(s,4,7,2,5,n),U(s,10,7,2,5,n),U(s,7,11,2,2,"#66e5f0"),U(s,6,12,4,1,"#2f97a6"),u&&(U(s,4,8,1,3,"#e89a62"),U(s,11,8,1,3,"#8a4a26"))),u&&(U(s,6,14,4,1,"#8a5a34"),U(s,6,15,4,1,"#c98a56"),U(s,6,16,4,1,"#5c3d22"),s.fillStyle="#f0c89a",s.fillRect(6,15,1,1),s.fillRect(9,15,1,1)),o}switch(i){case"canister_full":case"canister_empty":{const c=i==="canister_full",u=e*ee;return U(s,6,0,4,3,"#8a98a8"),U(s,7,3,2,2,"#8a98a8"),U(s,4,5,8,u-7,c?"#2f7fd6":"#3a4750"),ue(s,4,5,8,u-7,"#dfe6ee"),c?(U(s,5,10,1,u-13,"#5fa3ea"),U(s,4,9,8,1,"#7f2b2b")):(U(s,4,14,8,4,"#c8d2da"),U(s,6,15,4,2,"#3a4750")),o}case"hot_water_pouch":return U(s,6,0,4,3,"#8a98a8"),U(s,7,3,2,2,"#8a98a8"),U(s,4,5,8,25,"#c26a38"),ue(s,4,5,8,25,"#ffd9a8"),U(s,5,10,1,17,"#ff9a4f"),U(s,4,12,8,3,"#ff7a30"),U(s,4,16,8,2,"#e05a20"),s.fillStyle="#c8d2da",s.fillRect(4,1,2,1),s.fillRect(7,0,2,1),s.fillRect(11,1,2,1),o;case"snake_skin":{const c=[[5,1],[11,1],[13,6],[12,20],[10,26],[9,31],[8,28],[7,31],[6,26],[4,20],[3,6]];Bt(s,c,"#b3946a"),s.strokeStyle="#7a5f3e",s.lineWidth=1,s.beginPath(),s.moveTo(c[0][0],c[0][1]);for(const[u,f]of c)s.lineTo(u,f);s.closePath(),s.stroke(),U(s,4,3,8,1,"#8a6f4c"),U(s,7,4,2,22,"#cfae84"),s.fillStyle="#8a6f4c";for(let u=6;u<=22;u+=4)for(let f=5+u/4%2;f<=11;f+=3)s.fillRect(f,u,2,1);return s.fillStyle="#6e5636",s.fillRect(8,26,1,5),o}case"sword":return U(s,8,0,1,1,"#eef3f8"),U(s,7,1,3,17,"#c9d2dc"),U(s,8,1,1,17,"#eef3f8"),U(s,4,18,8,2,"#4a4a52"),U(s,7,20,3,9,"#6b5238"),U(s,7,22,3,1,"#4a3926"),U(s,7,25,3,1,"#4a3926"),U(s,6,29,5,2,"#4a4a52"),o;case"voidbreaker":return U(s,7,16,2,14,"#2a1d3a"),U(s,6,14,4,3,"#180f24"),qt(s,3,12,13,12,"#8a5ad6",2),qt(s,3,12,3,15,"#8a5ad6"),qt(s,13,12,13,15,"#8a5ad6"),s.fillStyle="#e8d6ff",s.fillRect(5,9,1,2),s.fillRect(10,10,1,1),s.fillRect(8,11,1,2),s.fillStyle="#00000088",s.fillRect(7,10,2,1),s.fillRect(6,11,1,2),o;case"visor":return U(s,1,6,14,3,"#2e3a45"),U(s,3,4,10,6,"#123c44"),U(s,4,5,8,4,"#66e5f0"),U(s,5,5,2,1,"#d2f8ff"),ue(s,3,4,10,6,"#c8d2da"),U(s,1,5,2,1,"#5a6875"),U(s,13,5,2,1,"#5a6875"),o;case"catalyst":return U(s,7,3,2,2,"#8898a8"),s.fillStyle="#c07fe0",s.beginPath(),s.arc(8,10,4,0,Math.PI*2),s.fill(),s.strokeStyle="#7a4a9a",s.lineWidth=1,s.beginPath(),s.arc(8,10,4.5,0,Math.PI*2),s.stroke(),s.fillStyle="#e8b8ff",s.fillRect(6,8,2,1),s.fillRect(7,7,1,1),o;case"iron_ore":return l("#5a5450","#78716c","#423d39"),h("#9e8468","#c4a878",[[5,6],[9,4],[10,9],[6,10]]),o;case"copper_ore":return l("#6a5a52","#8a7466","#4c403a"),h("#b86b42","#e8935e",[[5,6],[9,4],[10,9],[6,10]]),o;case"cobalt_ore":return l("#4e5666","#6a7488","#3a4050"),Bt(s,[[7,4],[9,6],[7,8],[5,6]],"#5c74a8"),Bt(s,[[10,8],[12,10],[10,12],[8,10]],"#5c74a8"),Bt(s,[[7,4],[9,6],[7,6]],"#9ab8e8"),Bt(s,[[10,8],[12,10],[10,10]],"#9ab8e8"),s.fillStyle="#c4dcf4",s.fillRect(7,4,1,1),s.fillRect(10,8,1,1),o;case"alabaster":return l("#cfc8b0","#eae3cd","#a89f88"),U(s,4,7,8,1,"#b4ab92"),U(s,6,10,7,1,"#b4ab92"),U(s,3,12,5,1,"#b4ab92"),s.fillStyle="#f7f2e2",s.fillRect(6,3,2,1),o;case"metal":U(s,6,1,3,14,"#6e747e"),U(s,7,2,1,12,"#b8bec8"),s.fillStyle="#4a4f57";for(const[c,u]of[[6,3],[8,7],[6,11],[8,13]])s.fillRect(c,u,1,1);return U(s,5,1,5,1,"#4a4f57"),U(s,5,14,5,1,"#4a4f57"),o;case"copperrod":U(s,6,1,3,14,"#a05a2e"),U(s,7,2,1,12,"#e89a62"),s.fillStyle="#6e3a1c";for(const[c,u]of[[6,3],[8,7],[6,11],[8,13]])s.fillRect(c,u,1,1);return U(s,5,1,5,1,"#6e3a1c"),U(s,5,14,5,1,"#6e3a1c"),o;case"cobaltrod":U(s,6,1,3,14,"#4a5a86"),U(s,7,2,1,12,"#8aa8dc"),s.fillStyle="#2e3a5c";for(const[c,u]of[[6,3],[8,7],[6,11],[8,13]])s.fillRect(c,u,1,1);return U(s,5,1,5,1,"#2e3a5c"),U(s,5,14,5,1,"#2e3a5c"),o;case"backpack2":{U(s,8,1,3,6,"#5a4229"),U(s,21,1,3,6,"#5a4229"),U(s,3,7,26,22,"#6a4c30"),ue(s,3,7,26,22,"#42301e"),U(s,3,7,26,8,"#7d5c3c"),ue(s,3,7,26,8,"#42301e"),U(s,9,7,4,22,"#6a4a3a"),U(s,19,7,4,22,"#6a4a3a"),s.fillStyle="#c8a878";for(let c=10;c<=27;c+=3)s.fillRect(9,c,1,1),s.fillRect(12,c,1,1),s.fillRect(19,c,1,1),s.fillRect(22,c,1,1);return U(s,13,17,6,4,"#8a6a4a"),ue(s,13,17,6,4,"#2e2018"),U(s,15,18,2,2,"#c8a878"),U(s,5,25,22,4,"#7a5a3a"),ue(s,5,25,22,4,"#42301e"),o}case"body_regulator":{const c=r==="0"?0:r==="1"?1:3;U(s,4,2,3,28,"#4c3822"),U(s,25,2,3,28,"#4c3822"),s.strokeStyle="#3a4750",s.lineWidth=2,s.beginPath(),s.moveTo(10,12),s.quadraticCurveTo(4,10,5,3),s.stroke(),s.beginPath(),s.moveTo(22,12),s.quadraticCurveTo(28,10,27,3),s.stroke(),U(s,8,8,16,17,"#8a98a8"),ue(s,8,8,16,17,"#3c4650"),U(s,8,8,16,3,"#aab4c0"),U(s,8,22,16,3,"#6a7680");for(let u=0;u<3;u++)U(s,10,13+u*3,12,2,u<c?"#2e6a78":"#313d46");s.fillStyle="#5fb8cc";for(const[u,f]of[[11,13],[15,16],[19,19]])f<=13+(c-1)*3+1&&s.fillRect(u,f,2,2);return c&&(s.fillStyle="#d2f8ff",s.fillRect(9,12,1,1),s.fillRect(22,15,1,1),c>1&&(s.fillRect(9,21,1,1),s.fillRect(21,12,1,1))),o}case"coolant_cell":return s.fillStyle="#7fd4e8",s.globalAlpha=.22,s.beginPath(),s.arc(8,9,7,0,Math.PI*2),s.fill(),s.globalAlpha=1,U(s,6,1,4,2,"#8a98a8"),U(s,7,3,2,1,"#8a98a8"),U(s,5,4,6,10,"#3a8ea8"),ue(s,5,4,6,10,"#bfeef8"),U(s,6,5,1,8,"#7fd4e8"),U(s,5,7,6,1,"#5fc0d8"),U(s,5,11,6,1,"#2e6e84"),s.fillStyle="#e8fbff",s.fillRect(9,6,1,1),s.fillRect(7,9,1,1),s.fillRect(10,12,1,1),s.fillRect(6,13,1,1),o;case"head_lantern":return r!=="0"&&(s.fillStyle="#ffd76a",s.globalAlpha=r==="1"?.1:.25,s.beginPath(),s.arc(8,9,6,0,Math.PI*2),s.fill(),s.globalAlpha=1),U(s,1,7,14,3,"#4a4a52"),U(s,1,7,14,1,"#5f6670"),U(s,1,9,14,1,"#33373d"),U(s,7,4,2,2,"#5a6875"),U(s,5,6,6,8,"#2e3a45"),ue(s,5,6,6,8,"#8a98a8"),U(s,6,7,4,5,r==="0"?"#464e57":r==="1"?"#b98a3a":"#ffd76a"),(r==="2"||r==="")&&U(s,7,8,2,2,"#fff3c0"),U(s,6,11,4,1,"#e8a83c"),U(s,5,13,6,1,"#232830"),o;case"reptile_armor":{U(s,6,4,20,24,"#6f573c"),ue(s,6,4,20,24,"#3f3222"),U(s,2,6,5,10,"#8a6f4d"),U(s,25,6,5,10,"#8a6f4d");for(let c=0;c<5;c++){const u=7+c*4;for(let f=7;f<=21;f+=5)Bt(s,[[f,u],[f+5,u],[f+5,u+4],[f+2,u+6],[f,u+4]],"#8a6f4d"),Bt(s,[[f,u],[f+5,u],[f+5,u+2],[f,u+2]],"#a08560"),ue(s,f,u,5,4,"#3f3222")}return U(s,13,2,6,4,"#8a6f4d"),ue(s,13,2,6,4,"#3f3222"),s.fillStyle="#d8cfc0",s.fillRect(15,12,2,2),s.fillRect(11,18,1,1),s.fillRect(19,20,1,1),o}case"chitin":return Bt(s,[[8,3],[13,6],[14,11],[11,14],[5,14],[2,11],[3,6]],"#6a4a3a"),Bt(s,[[8,3],[13,6],[8,7],[3,6]],"#8f6a50"),qt(s,8,7,5,13,"#4c352a",1),qt(s,8,7,8,14,"#4c352a",1),qt(s,8,7,11,13,"#4c352a",1),U(s,4,13,8,1,"#3c2a20"),s.fillStyle="#b08860",s.fillRect(7,4,2,1),o;case"stinger":return s.strokeStyle="#8a7a5c",s.lineWidth=5,s.beginPath(),s.moveTo(3,14),s.quadraticCurveTo(4,6,9,3),s.stroke(),s.strokeStyle="#d8cbb0",s.lineWidth=3,s.beginPath(),s.moveTo(3,14),s.quadraticCurveTo(4,6,9,3),s.stroke(),s.strokeStyle="#b0a284",s.lineWidth=1,s.beginPath(),s.moveTo(5,13),s.quadraticCurveTo(5.5,7,8,4),s.stroke(),Bt(s,[[9,0],[14,1],[11,6]],"#a84a3a"),Bt(s,[[9,0],[11,.5],[10,3]],"#e0705a"),qt(s,14,1,11,6,"#6e2f24",1),o;case"wurm_hide":{U(s,2,2,12,15,"#7a5c40"),ue(s,2,2,12,15,"#4c3822");for(let c=3;c<14;c+=3)U(s,3,c,10,2,"#8f6e4c"),U(s,3,c+2,10,1,"#5a4228");return U(s,2,17,12,2,"#6a4c30"),s.fillStyle="#8a6a48",s.beginPath(),s.arc(8,24,6,0,Math.PI*2),s.fill(),s.strokeStyle="#4c3822",s.lineWidth=1,s.beginPath(),s.arc(8,24,6,0,Math.PI*2),s.stroke(),s.strokeStyle="#5a4228",s.beginPath(),s.arc(8,24,3,0,Math.PI*2),s.stroke(),s.fillStyle="#6a4c30",s.fillRect(7,23,2,2),o}case"wurmsuit":{U(s,9,8,14,18,"#7a5c40"),ue(s,9,8,14,18,"#42301e");for(let c=10;c<=18;c+=4)U(s,10,c,12,3,"#8a6a48"),U(s,10,c+3,12,1,"#4c3822");U(s,11,5,10,3,"#5f4830"),ue(s,11,5,10,3,"#42301e"),Bt(s,[[3,9],[10,6],[12,13],[5,15]],"#6a4a3a"),Bt(s,[[29,9],[22,6],[20,13],[27,15]],"#6a4a3a"),Bt(s,[[4,9],[10,6],[11,9],[5,11]],"#8f6a50"),Bt(s,[[28,9],[22,6],[21,9],[27,11]],"#8f6a50"),qt(s,6,8,7,14,"#4c352a",1),qt(s,26,8,25,14,"#4c352a",1),s.fillStyle="#c8a878";for(let c=9;c<=14;c+=3)s.fillRect(4,c,1,1),s.fillRect(9,c,1,1),s.fillRect(22,c,1,1),s.fillRect(27,c,1,1);return U(s,9,24,14,3,"#4c3822"),U(s,13,24,6,3,"#6a4a3a"),ue(s,13,24,6,3,"#2e2018"),s.fillStyle="#c8a878",s.fillRect(15,25,2,1),o}case"vulture_raw":return Bt(s,[[3,9],[4,5],[8,3],[12,4],[13,8],[11,12],[6,12]],"#8a332c"),Bt(s,[[4,5],[8,3],[12,4],[10,7],[5,7]],"#a8453a"),Bt(s,[[6,12],[11,12],[9,13],[6,13]],"#571f1b"),U(s,12,6,3,3,"#d8cbb0"),U(s,14,5,1,1,"#d8cbb0"),U(s,14,9,1,1,"#d8cbb0"),U(s,13,6,1,3,"#8a7a5c"),U(s,12,6,2,1,"#f0e6d0"),s.fillStyle="#c8705e",s.fillRect(5,7,3,1),s.fillRect(9,6,2,1),s.fillRect(6,10,4,1),s.fillStyle="#e8a08a",s.fillRect(6,7,1,1),s.fillRect(8,10,1,1),o;case"vulture_cooked":return s.fillStyle="#c8d2da",s.fillRect(5,2,1,2),s.fillRect(8,1,1,2),s.fillRect(11,2,1,2),s.fillStyle="#eef3f8",s.fillRect(5,1,1,1),s.fillRect(8,0,1,1),s.fillRect(11,1,1,1),Bt(s,[[3,10],[4,6],[8,4],[12,5],[13,9],[11,13],[6,13]],"#9a6132"),Bt(s,[[4,6],[8,4],[12,5],[10,8],[5,8]],"#c08348"),Bt(s,[[6,13],[11,13],[9,14],[6,14]],"#5c3a1c"),qt(s,6,6,8,12,"#4a2c14",1),qt(s,9,5,11,11,"#4a2c14",1),s.fillStyle="#d8a05e",s.fillRect(6,5,3,1),s.fillRect(10,6,2,1),s.fillStyle="#f0c89a",s.fillRect(7,5,1,1),o;case"tortoise_shell":{Bt(s,[[3,22],[5,12],[11,6],[17,4],[24,7],[29,14],[30,22]],"#5f5a4e"),Bt(s,[[11,6],[17,4],[24,7],[20,13],[12,12]],"#7d7768"),Bt(s,[[3,22],[30,22],[29,25],[4,25]],"#46423a"),s.strokeStyle="#46423a",s.lineWidth=1,s.beginPath(),s.moveTo(17,5),s.lineTo(9,22),s.moveTo(17,5),s.lineTo(17,23),s.moveTo(17,5),s.lineTo(25,22),s.stroke(),s.beginPath(),s.moveTo(6,15),s.lineTo(28,15),s.stroke(),s.fillStyle="#6e6858",s.fillRect(14,8,5,1),s.fillRect(8,17,6,1),s.fillRect(20,18,5,1),s.fillStyle="#8a8474",s.fillRect(15,6,2,1),s.fillStyle="#cfc7b2";for(const[c,u,f,m]of[[3,24,4,5],[9,25,4,6],[15,25,4,5],[21,24,4,6],[26,22,4,5]])Bt(s,[[c,u],[c+f,u],[c+f/2,u+m]],"#cfc7b2");Bt(s,[[3,16],[6,16],[1,19]],"#cfc7b2"),Bt(s,[[26,15],[29,15],[31,18]],"#cfc7b2"),s.fillStyle="#8f8874";for(const[c,u,f]of[[3,24,4],[9,25,4],[15,25,4],[21,24,4]])s.fillRect(c,u,f,1);return o}case"fennec_pelt":{Bt(s,[[6,11],[2,1],[9,7]],"#c99a62"),Bt(s,[[6,10],[3,3],[8,7]],"#8f6a44"),Bt(s,[[10,11],[14,1],[7,7]],"#c99a62"),Bt(s,[[10,10],[13,3],[8,7]],"#8f6a44"),s.fillStyle="#ead4b0",s.fillRect(2,3,1,3),s.fillRect(13,3,1,3),s.fillStyle="#d8b488",s.beginPath(),s.ellipse(8,12,5,4,0,0,Math.PI*2),s.fill(),s.strokeStyle="#8a6540",s.lineWidth=1,s.beginPath(),s.ellipse(8,12,5,4,0,0,Math.PI*2),s.stroke(),s.fillStyle="#ead4b0",s.beginPath(),s.ellipse(8,14,2.5,2,0,0,Math.PI*2),s.fill(),s.fillStyle="#3a2a1c",s.fillRect(6,11,1,1),s.fillRect(9,11,1,1),s.fillStyle="#6a4a30",s.fillRect(7,14,2,1),U(s,4,15,8,12,"#d8b488"),ue(s,4,15,8,12,"#8a6540"),U(s,5,16,6,9,"#e8d0a8"),U(s,2,16,2,3,"#c99a62"),U(s,12,16,2,3,"#c99a62"),U(s,2,21,2,3,"#c99a62"),U(s,12,21,2,3,"#c99a62"),s.fillStyle="#8f6a44";for(let c=17;c<=25;c+=2)s.fillRect(4,c,1,1),s.fillRect(11,c,1,1);return U(s,6,27,4,3,"#c99a62"),U(s,6,30,4,2,"#ead4b0"),ue(s,6,27,4,5,"#8a6540"),o}case"tortoise_cuirass":{U(s,6,6,20,23,"#3b372f"),ue(s,6,6,20,23,"#2a2722");const c=(u,f,m)=>{U(s,u,f,m,6,"#5f5a4e"),U(s,u,f,m,2,"#7d7768"),U(s,u,f+5,m,1,"#3b372f"),s.fillStyle="#48443a",s.fillRect(u+Math.round(m/3),f+1,1,4),s.fillRect(u+Math.round(2*m/3),f+1,1,4)};c(8,8,16),c(6,14,20),c(7,20,18),U(s,10,4,12,4,"#8a98a8"),U(s,10,4,12,1,"#aab4c0"),ue(s,10,4,12,4,"#3c4650"),U(s,5,13,1,14,"#8a98a8"),U(s,26,13,1,14,"#8a98a8"),U(s,6,26,20,4,"#8a98a8"),U(s,6,26,20,1,"#aab4c0"),U(s,6,29,20,1,"#5c6670"),ue(s,6,26,20,4,"#3c4650"),U(s,14,26,4,4,"#c98a56"),U(s,14,26,4,1,"#f0c89a"),ue(s,14,26,4,4,"#5c3d22"),s.fillStyle="#cfc7b2",Bt(s,[[3,16],[6,16],[1,19]],"#cfc7b2"),Bt(s,[[26,16],[29,16],[31,19]],"#cfc7b2"),Bt(s,[[9,29],[12,29],[10,31]],"#cfc7b2"),Bt(s,[[19,29],[22,29],[21,31]],"#cfc7b2");for(const[u,f]of[[7,15],[23,15],[7,21],[23,21],[9,27],[21,27],[11,5],[18,5]])U(s,u,f,2,2,"#5c3d22"),U(s,u,f,2,1,"#c98a56"),s.fillStyle="#f0c89a",s.fillRect(u,f,1,1);return o}case"stinger_blade":return Bt(s,[[8,0],[10,3],[6,3]],"#a84a3a"),Bt(s,[[8,0],[9,2],[7,2]],"#e0705a"),Bt(s,[[6,3],[10,3],[11,6],[5,6]],"#d8cbb0"),qt(s,5,6,11,6,"#8a7a5c",1),U(s,6,6,4,15,"#c9d2dc"),U(s,7,7,1,14,"#eef3f8"),U(s,9,7,1,14,"#8a949e"),U(s,3,21,10,2,"#4a4a52"),U(s,3,21,10,1,"#6a7280"),U(s,6,23,4,6,"#6b5238"),U(s,6,24,4,1,"#4a3926"),U(s,6,27,4,1,"#4a3926"),U(s,5,29,6,2,"#6a4a3a"),ue(s,5,29,6,2,"#3c2a20"),o;case"curved_hull":{const c="#7d8390",u="#4e545e",f="#aab2bc";return U(s,6,2,8,2,c),U(s,3,4,12,2,c),U(s,2,6,13,8,c),s.clearRect(13,13,2,1),s.clearRect(14,12,1,1),U(s,6,2,8,1,f),U(s,3,4,1,2,f),U(s,2,6,1,8,f),U(s,2,13,11,1,u),U(s,14,6,1,6,u),U(s,12,13,1,1,u),U(s,3,9,12,1,"#6b7280"),s.fillStyle=u,s.fillRect(11,3,1,1),s.fillRect(12,7,1,1),s.fillRect(5,11,1,1),s.fillStyle=f,s.fillRect(11,4,1,1),s.fillRect(12,8,1,1),s.fillRect(5,12,1,1),o}case"hull_slope":return Bt(s,[[2,14],[2,4],[11,2],[14,8],[14,14]],"#767d88"),Bt(s,[[2,4],[11,2],[12,6],[2,8]],"#949ca8"),qt(s,11,2,14,8,"#aab2bc",1),U(s,2,13,12,1,"#4e545e"),U(s,2,10,12,1,"#6b7280"),s.fillStyle="#5c636d",s.fillRect(4,6,1,1),s.fillRect(9,11,1,1),s.fillRect(12,9,1,1),o;case"thruster_nozzle":return U(s,8,2,16,5,"#8a98a8"),ue(s,8,2,16,5,"#3c4650"),U(s,8,2,16,1,"#aab4c0"),s.fillStyle="#c8d2da",s.fillRect(9,4,1,1),s.fillRect(22,4,1,1),qt(s,12,3,14,5,"#5c6670",1),qt(s,18,5,20,3,"#5c6670",1),Bt(s,[[10,7],[22,7],[27,21],[5,21]],"#c88a50"),Bt(s,[[10,7],[15,7],[13,21],[5,21]],"#e0a86a"),Bt(s,[[20,7],[22,7],[27,21],[23,21]],"#96603a"),qt(s,9,12,23,12,"#7a4a26",1),qt(s,7,17,25,17,"#7a4a26",1),U(s,5,21,22,4,"#8a98a8"),ue(s,5,21,22,4,"#3c4650"),U(s,5,21,22,1,"#aab4c0"),s.fillStyle="#5c6670",s.fillRect(8,22,1,2),s.fillRect(16,22,1,2),s.fillRect(23,22,1,2),s.fillStyle="#c8d2da",s.fillRect(9,23,1,1),s.fillRect(17,23,1,1),s.fillRect(24,23,1,1),U(s,7,25,18,3,"#4a5560"),U(s,9,26,14,1,"#c85a2e"),U(s,11,27,10,1,"#8a3a1e"),o;case"backpack1":return U(s,8,1,3,6,"#5a4229"),U(s,21,1,3,6,"#5a4229"),U(s,5,7,22,21,"#7a5a3a"),ue(s,5,7,22,21,"#4c3822"),U(s,5,7,22,8,"#8a6a48"),ue(s,5,7,22,8,"#4c3822"),U(s,13,13,6,3,"#d8b74f"),U(s,9,20,14,6,"#6b4d30"),ue(s,9,20,14,6,"#4c3822"),o;case"beacon":return s.fillStyle="#66e5f0",s.globalAlpha=.35,s.beginPath(),s.arc(8,5,6,0,Math.PI*2),s.fill(),s.globalAlpha=1,s.fillStyle="#66e5f0",s.beginPath(),s.arc(8,5,3,0,Math.PI*2),s.fill(),U(s,6,5,1,1,"#d2f8ff"),U(s,7,8,2,8,"#8a98a8"),ai(s,0,ee,Pn),o;case"campfire":return qt(s,3,10,12,4,"#61492f",2),qt(s,4,4,13,10,"#61492f",2),qt(s,3,10,12,4,"#7d5f3d",1),ai(s,0,ee,Ze),o;case"door":return ai(s,0,0,Ye),ai(s,0,ee,Qe),o;case"bed":return ai(s,0,0,cn),ai(s,ee,0,un),o;case"dune_melon":s.fillStyle="#5f7f2c",s.beginPath(),s.ellipse(16,11,12,8,0,0,Math.PI*2),s.fill(),s.strokeStyle="#3c541c",s.lineWidth=2,s.beginPath(),s.ellipse(16,11,12,8,0,0,Math.PI*2),s.stroke(),s.strokeStyle="#88a84c",s.lineWidth=1;for(const c of[-7,0,7])s.beginPath(),s.moveTo(16+c,3),s.lineTo(16+c,19),s.stroke();return U(s,15,1,2,3,"#6b5238"),o;case"wheat":{s.strokeStyle="#c8a844",s.lineWidth=2;for(const c of[4,8,12])s.beginPath(),s.moveTo(c,15),s.lineTo(c,3),s.stroke();s.fillStyle="#e0c860";for(const c of[4,8,12])for(let u=2;u<9;u+=2)s.fillRect(c-2,u,4,2);return s.strokeStyle="#7a5a30",s.lineWidth=1,s.beginPath(),s.moveTo(2,12),s.lineTo(14,12),s.stroke(),o}case"cooked_wheat":return s.fillStyle="#a8712e",s.beginPath(),s.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),s.fill(),s.strokeStyle="#74501f",s.lineWidth=1,s.beginPath(),s.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),s.stroke(),s.fillStyle="#d8a860",s.fillRect(5,8,6,1),s.fillRect(6,7,4,1),o;case"bucket":case"bucket_full":{const c=i==="bucket_full";return U(s,4,6,8,9,c?"#2f7fd6":n),ue(s,4,6,8,9,"#dfe6ee"),U(s,3,5,10,2,"#c8d2da"),U(s,5,2,1,3,"#8a98a8"),U(s,10,2,1,3,"#8a98a8"),qt(s,5,3,11,3,"#8a98a8",1),c&&U(s,5,7,6,1,"#5fa3ea"),o}case"kindling":return qt(s,3,21,12,4,"#6b5238",2),qt(s,6,22,14,8,"#5a4630",2),U(s,11,3,3,3,"#9a8a5a"),U(s,4,8,3,3,"#9a8a5a"),U(s,13,9,3,2,"#8a9a4a"),o;case"seed_tree":return U(s,7,14,6,6,"#8a6a3a"),U(s,7,13,6,2,"#5a4630"),U(s,9,9,2,4,"#5a8a3a"),U(s,6,7,3,2,"#7fae54"),U(s,11,8,3,2,"#7fae54"),o;case"rock":return l("#6a655f","#877f77","#4a4642"),qt(s,5,9,11,10,"#55504b",1),s.fillStyle="#98907f",s.fillRect(7,4,2,1),o;case"gravel":{const c=(u,f,m,v)=>{s.fillStyle=v,s.beginPath(),s.arc(u,f,m,0,Math.PI*2),s.fill()};return c(5,11,3.2,"#7d766f"),c(11,12,3.6,"#6a645e"),c(8,7,3.6,"#8d8680"),s.fillStyle="#a49c94",s.fillRect(6,5,2,1),s.fillRect(3,9,2,1),s.fillStyle="#544e48",s.fillRect(10,14,3,1),s.fillRect(3,13,3,1),o}case"salt":return Bt(s,[[3,12],[3,7],[6,3],[11,2],[13,6],[13,12]],"#d9dbd6"),Bt(s,[[6,3],[11,2],[12,5],[7,6]],"#f2f4ef"),Bt(s,[[3,12],[13,12],[8,14]],"#b4b8b2"),qt(s,6,7,11,8,"#c2c5bf",1),s.fillStyle="#ffffff",s.fillRect(5,6,1,1),s.fillRect(9,8,1,1),s.fillRect(11,5,1,1),o;case"deadwood":return qt(s,2,10,13,8,"#61492f",4),qt(s,2,9,13,7,"#7d5f3d",1),qt(s,4,11,11,9,"#4a3926",1),qt(s,7,9,9,3,"#61492f",2),s.fillStyle="#8a6a44",s.beginPath(),s.arc(13.5,8,2,0,Math.PI*2),s.fill(),s.strokeStyle="#5c4630",s.lineWidth=1,s.beginPath(),s.arc(13.5,8,2,0,Math.PI*2),s.stroke(),o;case"metal":return qt(s,3,13,12,3,"#9aa0aa",3),qt(s,3,12,12,2,"#c8d2da",1),qt(s,4,14,12,5,"#6a707a",1),s.fillStyle="#6a707a",s.fillRect(9,7,1,2),s.fillStyle="#e2e8f0",s.fillRect(6,9,1,1),o;case"lamp":return s.fillStyle="#fff0a0",s.globalAlpha=.28,s.beginPath(),s.arc(8,8,7,0,Math.PI*2),s.fill(),s.globalAlpha=1,U(s,5,2,6,2,"#4a4a52"),U(s,5,2,6,1,"#6a7280"),U(s,4,4,1,9,"#3a3f46"),U(s,11,4,1,9,"#3a3f46"),U(s,5,4,6,9,"#fff0a0"),U(s,6,5,2,7,"#fff8d0"),U(s,6,10,4,2,"#e8a83c"),U(s,4,13,8,2,"#4a4a52"),o;case"regulator":{U(s,5,1,6,2,"#6a7680"),U(s,3,3,10,11,"#8a98a8"),ue(s,3,3,10,11,"#3c4650"),U(s,3,3,10,2,"#aab4c0");for(let c=4;c<=11;c+=2)U(s,c,6,1,6,"#5f6c78");return U(s,7,7,3,4,"#59bfcc"),U(s,8,8,1,1,"#d2f8ff"),U(s,3,12,10,2,"#3c4650"),s.fillStyle="#c8d2da",s.fillRect(4,4,1,1),s.fillRect(11,4,1,1),o}case"engine_core":return s.fillStyle="#c468e8",s.globalAlpha=.25,s.beginPath(),s.arc(8,8,7.5,0,Math.PI*2),s.fill(),s.globalAlpha=1,U(s,4,3,8,11,"#6a6e78"),ue(s,4,3,8,11,"#3a3e46"),U(s,4,3,8,1,"#8d929c"),U(s,4,13,8,1,"#4a4e56"),s.fillStyle="#c468e8",s.beginPath(),s.arc(8,8,3.2,0,Math.PI*2),s.fill(),s.strokeStyle="#7a3a9a",s.lineWidth=1,s.beginPath(),s.arc(8,8,3.5,0,Math.PI*2),s.stroke(),s.fillStyle="#e8b8ff",s.fillRect(6,6,2,1),s.fillRect(7,5,1,1),s.fillStyle="#c8d2da",s.fillRect(4,4,1,1),s.fillRect(11,4,1,1),s.fillRect(4,12,1,1),s.fillRect(11,12,1,1),o;case"seed_melon":return s.fillStyle="#c8b060",s.beginPath(),s.ellipse(8,10,4,4.8,0,0,Math.PI*2),s.fill(),s.strokeStyle="#8f7a40",s.lineWidth=1,s.beginPath(),s.ellipse(8,10,4,4.8,0,0,Math.PI*2),s.stroke(),s.fillStyle="#e0cc8c",s.beginPath(),s.ellipse(7,9,1.8,2.6,0,0,Math.PI*2),s.fill(),U(s,7,2,2,3,"#5a8a3a"),U(s,5,1,2,2,"#7fae54"),U(s,9,0,2,2,"#7fae54"),o;case"seed_wheat":return s.fillStyle="#d8c878",s.beginPath(),s.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),s.fill(),s.strokeStyle="#9a8a48",s.lineWidth=1,s.beginPath(),s.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),s.stroke(),qt(s,8,6,8,14,"#b09a58",1),s.fillStyle="#f0e2a8",s.fillRect(6,8,1,4),qt(s,8,5,7,2,"#9a8a48",1),qt(s,8,5,9,2,"#9a8a48",1),o;case"bench":return ai(s,0,0,Ae),ai(s,0,ee,ke),o}return null}const Ao=new Map;function No(i,t){const e=gd(i,t),n=e?i+"|"+e:i,r=Ao.get(n);if(r)return r;const o=kt[i];if(!o)return Ao.set(n,[]),Ao.get(n);let l=_d(i,o.w,o.h,o.color,e);if(!l&&o.block!==void 0){const[a,c]=Es(o.w*ee,o.h*ee);for(let u=0;u<o.h;u++)for(let f=0;f<o.w;f++)ai(c,f*ee,u*ee,o.block);l=a}const h=[];if(l){const[a,c]=Es(ee,ee);for(let u=0;u<o.h;u++)for(let f=0;f<o.w;f++)c.clearRect(0,0,ee,ee),c.drawImage(l,f*ee,u*ee,ee,ee,0,0,ee,ee),h.push(a.toDataURL())}else{const[a,c]=Es(ee,ee);U(c,2,2,ee-4,ee-4,o.color),h.push(a.toDataURL())}return Ao.set(n,h),h}function Fi(i,t=0,e){const n=kt[i];if(!n)return"";if(n.w===1&&n.h===1)return No(i,e)[0]??"";const[r,o]=Es(n.w*ee,n.h*ee);o.imageSmoothingEnabled=!1;const s=_d(i,n.w,n.h,n.color,gd(i,e));if(s)o.drawImage(s,0,0);else if(n.block!==void 0)for(let a=0;a<n.h;a++)for(let c=0;c<n.w;c++)ai(o,c*ee,a*ee,n.block);if(!t)return r.toDataURL();const[l,h]=Es(n.h*ee,n.w*ee);return h.imageSmoothingEnabled=!1,h.translate(n.h*ee,0),h.rotate(Math.PI/2),h.drawImage(r,0,0),l.toDataURL()}function Tv(i){const[t,e]=Es(ee,ee);return ai(e,0,0,i),t.toDataURL()}const Oe=i=>document.getElementById(i);let lu=0;function nt(i){const t=Oe("toast");t.textContent=i,t.style.opacity="1",clearTimeout(lu),lu=setTimeout(()=>t.style.opacity="0",2600)}function Av(i){const t=Oe("prompt");if(!i){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=i}function Rv(i){Oe("vision-water").style.opacity=i?"1":"0"}function Cv(i){const t=Oe("blockname");if(!i){t.classList.add("hidden");return}t.textContent=i,t.classList.remove("hidden")}function cu(){const i=Oe("vision-hit");i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash")}let hu="";function Iv(i){const t=i.selectedSlot()?.itemId??"",e=i.slots.map(o=>o.itemId+":"+(o.charges??"")).join(",")+"|"+t;if(e===hu)return;hu=e;const n=[];for(const o of i.slots){const s=n.find(l=>l.itemId===o.itemId);s?s.count+=1:n.push({itemId:o.itemId,count:1,charges:o.charges})}const r=Oe("hotbar");r.innerHTML="",n.slice(0,9).forEach((o,s)=>{const l=document.createElement("div");l.className="hb-slot"+(o.itemId===t?" sel":""),l.dataset.hb=String(s);const h=document.createElement("img");h.src=Fi(o.itemId,0,o.charges),h.alt=kt[o.itemId].name,l.appendChild(h);const a=document.createElement("span");if(a.className="hb-key",a.textContent=String(s+1),l.appendChild(a),o.count>1){const c=document.createElement("span");c.className="hb-count",c.textContent=String(o.count),l.appendChild(c)}r.appendChild(l)})}function Pv(){const i=document.querySelector("#bar-water .safe");i.style.left="25%",i.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((bc-ys)/(br-ys)*100).toFixed(1)+"%",t.style.right=((br-ea)/(br-ys)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(r,o,s)=>{const l=document.createElement("span");l.className="dmg",l.style.left=o.toFixed(1)+"%",l.title=s,document.getElementById(r).appendChild(l)};e("bar-water",Jl,"below this, dehydration drains Health");const n=r=>(r-ys)/(br-ys)*100;e("bar-heat",n(Zl),"below this, hypothermia drains Health"),e("bar-heat",n(jl),"above this, heat stroke drains Health")}function uu(i,t=0,e=0,n=0,r=0,o=0){const s=document.getElementById("waypoint");if(!i){s.classList.add("hidden");return}const l=t-n,h=e-r,a=Math.atan2(l,-h)+o;Oe("wp-arrow").style.transform=`rotate(${a*180/Math.PI}deg)`,Oe("wp-name").textContent=i,Oe("wp-dist").textContent=`${Math.round(Math.hypot(l,h))} m`,s.classList.remove("hidden")}function du(i,t,e,n,r,o,s){const l=A=>document.querySelector(`#${A} .fill`);l("bar-health").style.width=i.health+"%",l("bar-water").style.width=i.water+"%";const h=(i.body-ys)/(br-ys)*100;l("bar-heat").style.width=h+"%";const a=e%We/We,c=String(Math.floor(a*24)).padStart(2,"0"),u=String(Math.floor(a*24%1*60)).padStart(2,"0");Oe("clock-day").textContent="Day "+n,Oe("clock-time").textContent=c+":"+u;const f=A=>r==="C"?Math.round(A)+"°C":Math.round(A*9/5+32)+"°F";Oe("clock-temp").textContent=`air ${f(i.lastAmbientEff)}  body ${f(i.body)}`;const m=t.selectedSlot();Oe("held").textContent=m?kt[m.itemId].name:"—",Iv(t),Oe("warn-hot").classList.toggle("hidden",i.body<=ea),Oe("warn-cold").classList.toggle("hidden",i.body>=bc),Oe("chip-reg").classList.toggle("hidden",!s?.regulated),Oe("chip-storm").classList.toggle("hidden",!s?.stormBroken),Oe("chip-nap").classList.toggle("hidden",!s?.napReady);const v=t.weight(),y=t.weightLimit(),x=Oe("weight");x.textContent=`${v.toFixed(1)} / ${y} kg`,x.classList.toggle("encumbered",v>y),Oe("vision-vignette").style.opacity=String(i.vision*.85);const _=i.water<5||i.health<30;Oe("vision-red").style.opacity=_?String(.35+.25*Math.sin(o/220)):"0"}const Ro=i=>i===Qe||i===Ye||i===Je||i===ze,fu=4,Lv=8.5;class Me{constructor(t,e,n,r,o){this.meta=t,this.settings=r,this.audio=o,this.seed=n_(t.seedStr||t.id),this.world=new b_(this.seed),this.survival=new R_(this.seed^7),this.quests=vv(e?.quest),this.renderer=new F_(n),this.renderer.fires=this.campCharges,this.player=new E_(this.world),this.timeSec=e?.time??We*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===kn&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===kn&&this.renderer.addPointLight(6,35,0,"lamp");for(let s=-10;s<=8;s++)for(let l=-14;l<=14;l++)for(let h=28;h<=36;h++)this.world.get(s,h,l)===Ni&&this.breakers.add(`${s},${h},${l}`);for(const[s,l]of this.world.deltas){const[h,a]=s.split(",").map(Number);for(const[c,u]of l){if(u!==Ni)continue;const f=c%Qt,m=(c-f)/Qt,v=m%W;this.breakers.add(`${h*W+v},${f},${a*W+(m-v)/W}`)}}Pv(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(r)}seed;world;survival;player;inv=new Xa;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];traderAt=new Map;tradeOffers=[];tradeCamp=null;stormToast=!1;mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null,regulator:null,light:null};lanternOn=!1;lanternAcc=0;regulatorAcc=0;collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;breakers=new Set;breakerTick=-1;stormShieldOn=!1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;waterAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(ie(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===bt&&(this.world.set(t,e,n,Ne),this.chests.set(Me.chestKey([[t,e,n]]),[{itemId:"canister_full",x:0,y:0},{itemId:"canister_full",x:1,y:0},{itemId:"canister_full",x:2,y:0}]))}chestCluster(t,e,n){const r=new Set([`${t},${e},${n}`]),o=[[t,e,n]],s=[];for(;o.length;){const l=o.pop();this.world.get(l[0],l[1],l[2])===Ne&&s.push(l);for(const[h,a,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=l[0]+h,f=l[1]+a,m=l[2]+c,v=`${u},${f},${m}`,y=this.world.get(u,f,m);r.has(v)||y!==Ne&&y!==Xr||(r.add(v),o.push([u,f,m]))}}return s}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=kt[e.itemId],r=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const o of r){const s=o?n.h:n.w,l=o?n.w:n.h;for(let h=0;h+l<=t.h;h++)for(let a=0;a+s<=t.w;a++)if(t.fits(a,h,s,l))return e.x=a,e.y=h,e.rot=o||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new Xa;e.slots=[];const[n,r]=Me.chestDims(t);return e.w=n,e.h=r,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,r=Math.floor(t/$e),o=Math.floor(e/$e);for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++){if(!n.townAt(r+s,o+l))continue;const h=n.townCenter(r+s,o+l);if(Math.abs(h.x-t)<=10&&Math.abs(h.z-e)<=10)return!0}return!1}townLoot(t,e){const n=o=>mt(t,e,this.seed+o),r=[{itemId:"canister_empty",count:2}];return n(11)<.7&&r.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&r.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&r.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&r.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&r.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&r.push({itemId:"door_inner",count:1}),n(22)<.25&&r.push({itemId:"bed",count:1}),n(23)<.5&&r.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),r}openChest(t,e,n){const r=this.chestCluster(t,e,n),o=Me.chestKey(r),s=this.chests.has(o);this.chests.has(o)||this.chests.set(o,[]);const l=this.emptyChestGrid(r.length);if(l.slots=this.chests.get(o),!s&&r.some(([h,,a])=>this.inTown(h,a))){for(const h of this.townLoot(r[0][0],r[0][2]))for(let a=0;a<h.count;a++){const c={itemId:h.itemId,x:0,y:0};Me.placeSlotFree(l,c)||this.dropEntity(h.itemId,1,2)}nt("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=l,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,r){const o=this.chestCluster(t,e,n),s=this.emptyChestGrid(o.length);for(const l of r)Me.placeSlotFree(s,l)||this.dropEntity(l.itemId,1,2,l.charges);s.slots.length&&this.chests.set(Me.chestKey(o),s.slots),o.length>1&&nt(`Chests linked — one ${s.w}×${s.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==Ne){if(gn(this.world.get(t.x,t.y,t.z))){for(const o of t.items)for(let s=0;s<o.count;s++)this.dropEntity(o.itemId,1,2);return}this.world.set(t.x,t.y,t.z,Ne)}const e=this.chestCluster(t.x,t.y,t.z),n=Me.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const r=this.emptyChestGrid(e.length);r.slots=this.chests.get(n);for(const o of t.items)for(let s=0;s<o.count;s++){const l={itemId:o.itemId,x:0,y:0};Me.placeSlotFree(r,l)||this.dropEntity(o.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body;const e=[];this.inv.slots=t.inventory.slots.map(l=>{const h=l.count??1;for(let a=1;a<h;a++)e.push({itemId:l.itemId});return{itemId:l.itemId,x:l.x,y:l.y,rot:l.rot,charges:l.charges,blockRot:l.blockRot}});for(const l of e)this.giveOrDrop(l.itemId,1);this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const l of["backpack","head","body","regulator","light"]){const h=t.equip?.[l];h&&(this.equip[l]={itemId:h,x:0,y:0,charges:t.equip?.charges?.[l]})}this.beaconMarks=t.beaconMarks??[],this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let r=0;const o=[];this.world.gen.canisters.forEach(l=>{if(l.buried&&!n.has(r)){const h=Math.round(ie(this.seed,l.x,l.z));o.push({id:this.entitySeq++,x:l.x+.5,y:h,z:l.z+.5,itemId:"canister_full",buried:l.buried,buriedAt:l.buried?[l.x,h,l.z]:void 0,srcIndex:r})}r++});for(const l of t.entities){const h=l.count??1;for(let a=0;a<h;a++)o.push({id:this.entitySeq++,x:l.x,y:l.y,z:l.z,itemId:l.itemId,age:l.age})}this.entities=o,this.chests=new Map((t.chests??[]).map(l=>{const h=this.emptyChestGrid(l.cells.split("|").length);for(const a of l.slots){h.slots.push({itemId:a.itemId,x:a.x,y:a.y,rot:a.rot,blockRot:a.blockRot,charges:a.charges});for(let c=1;c<(a.count??1);c++){const u={itemId:a.itemId,x:0,y:0};Me.placeSlotFree(h,u)||this.giveOrDrop(a.itemId,1)}}return[l.cells,h.slots]}));const s=[];for(const l of t.caches){const h=l.kind??"death";if(h==="chest"){s.push(l);continue}const a={id:this.entitySeq++,x:l.x,y:l.y,z:l.z,kind:h,items:l.items.map(c=>({...c}))};this.caches.push(a)}this.campCharges.clear();for(const[l,h]of Object.entries(t.campfires??{}))this.campCharges.set(l,h);this.renderer.fires=this.campCharges,this.world.loadRots(t.rots??{}),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep);for(const l of s)this.adoptLegacyChest(l);this.pods=(t.pods??[]).map(l=>({...l,ringEid:this.renderer.addGroundRing(l.x+.5,Math.round(ie(this.seed,l.x,l.z)),l.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(l.x+.5,Math.round(ie(this.seed,l.x,l.z)),l.z+.5,13382434)})),this.won=!!t.won;for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[u,f]of h){if(f!==kn&&f!==Ze)continue;const m=Math.floor(u/(W*Qt)),v=u%(W*Qt),y=a*W+m,x=v%Qt,_=c*W+Math.floor(v/Qt);f===Ze&&(this.campCharges.get(`${y},${x},${_}`)??0)<=0||this.renderer.addPointLight(y,x,_,f===kn?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId,regulator:this.equip.regulator?.itemId,light:this.equip.light?.itemId,charges:{regulator:this.equip.regulator?.charges,light:this.equip.light?.charges}},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,charges:t.charges,age:Math.floor(t.age??0)})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas(),rots:this.world.serializeRots()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/We);this.timeSec=(e+t)*We}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new Mv(this),this.startCine(yv,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),nt("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}skipCine(){if(!this.cine)return;this.cine=null,this.cineOnEnd=null;const t=this.world;t.get(-6,31,0)===Xe&&(t.set(-6,31,0,Qe),t.set(-6,32,0,Ye),t.doorSwing.delete("-6,0")),this.player.pitch=0}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,r=n.find(h=>e.t<h.t1)??n[n.length-1];if(r.openDoor&&e.t>=r.openDoor.t){const{x:h,y:a,z:c}=r.openDoor;if(this.world.get(h,a,c)!==Xe){this.world.set(h,a,c,Xe);for(const u of[-1,1])Ro(this.world.get(h,a+u,c))&&this.world.set(h,a+u,c,Xe);this.audio.door()}}const o=Math.min(1,Math.max(0,(e.t-r.t0)/(r.t1-r.t0))),s=o*o*(3-2*o),l=this.renderer.camera;if(l.position.set(r.from[0]+(r.to[0]-r.from[0])*s,r.from[1]+(r.to[1]-r.from[1])*s,r.from[2]+(r.to[2]-r.from[2])*s),l.lookAt(r.look[0],r.look[1],r.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const h=n[n.length-1];this.player.yaw=Math.atan2(-(h.look[0]-h.to[0]),-(h.look[2]-h.to[2])),this.player.pitch=0;const a=this.renderer.camera;a.position.copy(this.player.eye()),a.rotation.order="YXZ",a.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&nt("Guest worlds are never saved."),!1;const e=fd(this.meta,this.snapshot());return t&&nt(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){md(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/We)}questBump(t,e=1){if(this.tut)return;const n=xv(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}nt(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&nt("Power runs through the wreck. Four dead engines left — find them a way to burn."),this.renderQuest(),this.saveNow(!0)}columnTop(t,e){for(let n=Qt-1;n>=0;n--)if(this.world.get(t,n,e))return n;return Math.round(ie(this.seed,t,e))}crashPod(t,e){const n=this.player.pos,r=Math.round(n.x)+2,o=Math.round(n.z)+1,s=this.columnTop(r,o),l=this.renderer.addGroundRing(r+.5,s,o+.5,13382434,1.1),h=this.renderer.addBeam(r+.5,s,o+.5,13382434);this.pods.push({x:r,z:o,t:3,itemId:t,n:e,ringEid:l,beamEid:h}),this.audio.warn(),setTimeout(()=>{this.running&&nt("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const r=this.columnTop(n.x,n.z);this.caches.push({id:this.entitySeq++,x:n.x,y:r,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,r+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),nt("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){uu(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const o=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;o!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=o,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else uu(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const r=new Map;if(this.equip.head?.itemId==="visor"){for(const o of this.caches)o.items.length&&r.set(`c${o.id}`,[o.x+.5,o.y,o.z+.5,o.kind==="reward"?14197322:13386803]);for(const o of this.chests.keys()){const[s,l,h]=o.split(";")[0].split(",").map(Number);r.set(`x${o}`,[s+.5,l,h+.5,15124842])}}for(const[o,s]of this.visorBeams)r.has(o)||(this.renderer.removeEntityMesh(s),this.visorBeams.delete(o));for(const[o,[s,l,h,a]]of r)this.visorBeams.has(o)||this.visorBeams.set(o,this.renderer.addBeam(s,l,h,a,10))}waypointTarget(){const t=wr(this.quests);if(!t)return null;const e=this.player.pos,n=(o,s)=>Math.round(ie(this.seed,o,s))+1,r=o=>{let s=o[0],l=1/0;for(const h of o){const a=(h.x-e.x)**2+(h.z-e.z)**2;a<l&&(l=a,s=h)}return s};switch(t.kind){case"oasis":{const o=r(this.world.gen.oases);return o?{name:"Oasis",x:o.x+.5,y:n(o.x,o.z),z:o.z+.5}:null}case"water_home":case"finish":{const o=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(s=>this.world.get(s.x,s.y,s.z)===Pn);return o?{name:"Save Beacon",x:o.x+.5,y:o.y,z:o.z+.5}:null}case"wreck":{const o=this.world.gen.secondShip;return{name:"Second Wreck",x:o.x+.5,y:n(o.x,o.z),z:o.z+.5}}case"core":{const o=this.world.gen.secondShip;return{name:"Engine Core",x:o.x+.5,y:n(o.x,o.z),z:o.z+.5}}case"tool":{const o=[];this.world.get(0,31,-3)===Ae&&o.push({x:0,y:31,z:-3});for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[u,f]of h){if(f!==Ae)continue;const m=u%Qt,v=Math.floor(u/Qt)%W,y=Math.floor(u/(Qt*W));o.push({x:a*W+y,y:m,z:c*W+v})}}if(!o.length)return null;const s=r(o);return{name:"Crafting Bench",x:s.x+.5,y:s.y,z:s.z+.5}}case"supplies":{const o=this.world.gen.nearestTown(e.x,e.z);return o?{name:"Town",x:o.x+.5,y:n(o.x,o.z),z:o.z+.5}:null}case"farm":{if(!this.crops.size)return null;let o=null,s=1/0;for(const c of this.crops.keys()){const[u,,f]=c.split(",").map(Number),m=(u+.5-e.x)**2+(f+.5-e.z)**2;m<s&&(s=m,o=c)}const[l,h,a]=o.split(",").map(Number);return{name:"Your Farm",x:l+.5,y:h+1,z:a+.5}}default:return null}}questFrame(){const t=wr(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===Pn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}questJump(t){this.tut&&this.tut.finish();const e=Math.max(0,Math.min(Mi.length,t|0));this.quests.i=e,this.questShown="",this.renderQuest(),nt(e>=Mi.length?"Quest chain skipped — every quest is done.":`Skipped to “${Mi[e].title}”.`)}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=wr(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],r=e.id+":"+n;r!==this.questShown&&(this.questShown=r,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,r,o=window)=>{o.addEventListener(n,r),this.bound.set(n+(o===window?"":":el"),r)};t("keydown",n=>{const r=n;if(!r.repeat){if(this.keys.add(r.code),r.code==="KeyE"&&this.act(),r.code==="KeyQ"&&this.useItem(),r.code==="KeyX"&&this.surge(),r.code==="KeyT"&&this.toggleLantern(),r.code==="KeyI"&&this.toggleInv(),r.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const o=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,s=o.selectedSlot();s&&!o.rotate(s)&&(nt("No room to rotate."),this.audio.error())}this.renderInv()}if(r.code==="KeyR"&&!this.ui&&!this.paused&&!this.cine&&!this.liftoff){const o=this.inv.selectedSlot();if(o){const s=kt[o.itemId].block;s!==void 0&&En[s].placeable&&Wh(s)?(o.blockRot=(o.blockRot??0)+1&3,this.renderHeld(),this.audio.place()):(this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.dropEntity(o.itemId,1,1,o.charges),this.renderHeld(),this.audio.place())}}if(r.code==="Escape"){if(this.liftoff)return;if(this.tut&&!this.ui){this.tut.finish(!0);return}this.escape()}if(r.code==="KeyP"&&!this.liftoff&&this.escape(!0),r.code.startsWith("Digit")){const o=Number(r.code.slice(5)),s=this.hotbarItems();if(o>=1&&o<=s.length){const l=s[o-1];this.inv.selectedSlot()?.itemId===l?this.inv.selected=-1:this.selectItem(l),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const r=n.target.closest("[data-hb]");if(!r)return;const o=this.hotbarItems()[Number(r.dataset.hb)];o&&(this.inv.selectedSlot()?.itemId===o?this.inv.selected=-1:this.selectItem(o),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const r=n;r.button===0?(this.mouseDown=!0,this.breakMsg=!1):r.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const r=n;this.player.yaw-=r.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*r.movementY*.0022*this.settings.sens,this.player.pitch=vi.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>{this.ui||this.cycleItem(n.deltaY>0?1:-1)}),t("contextmenu",n=>n.preventDefault());else{let n=-1,r=0,o=0;e.addEventListener("touchstart",m=>{if(n<0){const v=m.changedTouches[0];n=v.identifier,r=v.clientX,o=v.clientY}m.preventDefault()}),e.addEventListener("touchmove",m=>{for(const v of m.changedTouches)v.identifier===n&&(this.player.yaw-=(v.clientX-r)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(v.clientY-o)*.005*this.settings.sens,this.player.pitch=vi.clamp(this.player.pitch,-1.55,1.55),r=v.clientX,o=v.clientY);m.preventDefault()});const s=m=>{for(const v of m.changedTouches)v.identifier===n&&(n=-1)};e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),document.addEventListener("contextmenu",m=>m.preventDefault());const l=document.getElementById("stick"),h=document.getElementById("knob");let a=-1;const c=m=>{const v=l.getBoundingClientRect();for(const y of m.changedTouches)if(y.identifier===a){const x=y.clientX-(v.left+v.width/2),_=y.clientY-(v.top+v.height/2),A=Math.max(1,Math.hypot(x,_)),E=Math.min(A,v.width/2)/(v.width/2);this.stick.x=x/A*E,this.stick.y=_/A*E,h.style.left=38+x/A*E*38+"px",h.style.top=38+_/A*E*38+"px"}};l.addEventListener("touchstart",m=>{a=m.changedTouches[0].identifier,c(m),m.preventDefault()}),l.addEventListener("touchmove",m=>{c(m),m.preventDefault()});const u=()=>{this.stick.x=0,this.stick.y=0,a=-1,h.style.left="38px",h.style.top="38px"};l.addEventListener("touchend",u),l.addEventListener("touchcancel",u);const f=(m,v,y)=>{const x=document.getElementById(m);x.addEventListener("touchstart",_=>{_.preventDefault(),v()}),x.addEventListener("touchend",_=>{_.preventDefault(),y&&y()}),x.addEventListener("touchcancel",()=>{y&&y()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-lamp",()=>this.toggleLantern()),f("m-next",()=>this.cycleItem(1)),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=r=>!document.getElementById(r).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),document.getElementById("inv-bin").onclick=()=>this.binDiscard()}binDiscard(){if(this.temp){const n=kt[this.temp.itemId].name;this.temp=null,this.tempOrigin=null,nt(`${n} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld();return}const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,e=t.selectedSlot();if(!e){nt("Select an item, then send it to the Bin."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),nt(`${kt[e.itemId].name} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld()}overBin(t,e){const n=document.getElementById("inv-bin").getBoundingClientRect();return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),r=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,r),this.renderer.rebuildDirty(this.world);const o=this.renderer.updateSky(this.timeSec,this.player.pos),s=ko(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),l=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let u=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(u-=1),this.keys.has("KeyD")&&(u+=1);const m=this.keys.has("Space")||this.mobileJump;if(this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,u,f,m,this.speedMul,l),this.player.lastFallDist>0){const E=this.player.lastFallDist;if(this.player.lastFallDist=0,!this.player.inWater&&E>fu){const S=1-(this.equip.body?kt[this.equip.body.itemId].armor??0:0),b=(E-fu)*Lv*S;this.survival.hurt(b,"fall"),cu(),this.audio.hurt(),this.survival.health>0&&b>=10&&nt("You hit the ground hard.")}}const y=(this.timeSec%We/We-.25)*Math.PI*2,x=o.sunElev>0?(()=>{const E=1/Math.hypot(Math.cos(y),o.sunElev,.4);return{x:Math.cos(y)*E,y:o.sunElev*E,z:.4*E}})():null;this.stormShieldTick(),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(u!==0||f!==0),overencumbered:l,biome:s,tSec:this.timeSec,sunElev:o.sunElev,sunDir:x,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos),regulator:(this.equip.regulator?.charges??0)>0,terrainH:(E,S)=>ie(this.seed,E,S),stormShield:this.stormShieldOn,stormMul:this.equip.body&&kt[this.equip.body.itemId].stormResist?.25:1}),this.renderer.setStorm(this.survival.storm,this.survival.lastOpenSky),this.audio.setStorm(this.survival.storm),this.survival.storm>.5&&!this.stormToast?(this.stormToast=!0,nt("A Sandstorm rolls in — get out of the open."),this.audio.error()):this.survival.storm<.3&&this.stormToast&&(this.stormToast=!1,nt("The Sandstorm passes."));const _=this.equip.regulator;_&&(_.charges??0)>0&&(this.regulatorAcc+=t,this.regulatorAcc>=2880&&(this.regulatorAcc=0,_.charges=(_.charges??0)-1,_.charges<=0?(_.charges=0,nt("The Coolant Cell in your Regulator is spent."),this.audio.error()):nt("A Coolant Cell has been used up.")));const A=this.equip.light;this.lanternOn&&A&&((A.charges??0)<=0?this.toggleLantern():(this.lanternAcc+=t,this.lanternAcc>=240&&(this.lanternAcc=0,A.charges=(A.charges??0)-1,(A.charges??0)<=0&&(this.toggleLantern(),nt("The Head Lantern gutters out — refuel it at a Campfire."))))),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const u=this.renderer.camera;u.position.copy(this.player.eye()),u.rotation.order="YXZ",u.rotation.set(this.player.pitch,this.player.yaw,0),this.liftoff&&(u.position.x+=(Math.random()-.5)*.14,u.position.y+=(Math.random()-.5)*.1,u.position.z+=(Math.random()-.5)*.14)}this.liftoffFrame(t);const h=this.raycastTarget();this.renderer.setPlayerLight(this.lanternOn?this.player.eye():null),this.renderer.setHighlight(this.ui||this.cine?null:h?.hit??null);{const u=this.inv.selectedSlot(),f=u?kt[u.itemId].block:void 0,m=h?.hit,v=h?.face;let y=!1;if(!this.ui&&!this.cine&&f!==void 0&&En[f].placeable&&m&&v){const x=m.x+v.x,_=m.y+v.y,A=m.z+v.z,E=this.world.get(x,_,A);(E===bt||Tn(E)&&E!==Be)&&(this.renderer.setGhost(x,_,A,f),y=!0)}y||this.renderer.clearGhost()}Av(this.ui||this.cine?null:this.promptFor(h)),Cv(this.ui||this.cine||!h?.hit?null:Q1(this.world.get(h.hit.x,h.hit.y,h.hit.z))),Rv(this.player.headUnder);for(let u=this.entities.length-1;u>=0;u--){const f=this.entities[u];if(!f.buried&&(f.age=(f.age??0)+t,f.age>=300)){this.renderer.removeEntityMesh(f.id),this.entities.splice(u,1);continue}if(f.fall!==void 0){const v=Math.min(f.fall,14*t);f.y-=v,f.fall-=v,f.fall<=.001&&(f.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(f.id,[f.x,f.y,f.z])}const m=this.renderer.entityMesh(f.id);f.buried&&f.buriedAt&&this.world.get(f.buriedAt[0],f.buriedAt[1],f.buriedAt[2])!==bt?m&&this.renderer.removeEntityMesh(f.id):m||this.renderer.addEntityMesh(f.id,[f.x,f.y,f.z],parseInt(kt[f.itemId].color.slice(1),16))}for(const u of this.caches){const f=this.renderer.entityMesh(u.id);!f&&u.items.length?(this.renderer.addEntityMesh(u.id,this.cacheMeshPos(u),this.cacheColor(u),.7),u.markerEid=this.renderer.addGroundRing(u.x+.5,u.y,u.z+.5,u.kind==="reward"?14197322:13382434,1.4),u.kind==="death"&&(u.beamEid=this.renderer.addBeam(u.x+.5,u.y,u.z+.5,13382434))):f&&!u.items.length&&(this.renderer.removeEntityMesh(u.id),u.markerEid!==void 0&&(this.renderer.removeEntityMesh(u.markerEid),u.markerEid=void 0),u.beamEid!==void 0&&(this.renderer.removeEntityMesh(u.beamEid),u.beamEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const a=this.survival.surgeCooldown>0;for(const u of["surge-btn","m-surge"]){const f=document.getElementById(u);f&&f.disabled!==a&&(f.disabled=a)}du(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=We}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.waterAcc+=t,this.waterAcc>.4&&(this.waterAcc=0,this.world.processWater()),this.audio.setDay(o.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const c=this.prevHp-this.survival.health;if(c>0){const u=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(c>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,cu(),(c>=2||u)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const s=new F(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),l=new F(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),h=(f,m)=>m>0?Math.ceil(f)-f||1:m<0?f-Math.floor(f)||1:1/0,a=new F(h(t.x,s.x)*l.x,h(t.y,s.y)*l.y,h(t.z,s.z)*l.z);let c=new F(n,r,o),u=null;for(let f=0;f<80;f++){const m=this.world.get(n,r,o);if(Tn(m)){if(u||(u={x:n,y:r,z:o}),m===Be)return{hit:{x:n,y:r,z:o},water:u,face:new F(c.x-n,c.y-r,c.z-o)}}else if(m!==bt&&m!==Be)return{hit:{x:n,y:r,z:o},water:u,face:new F(c.x-n,c.y-r,c.z-o)};if(c.set(n,r,o),a.x<a.y&&a.x<a.z?(n+=s.x,a.x+=l.x):a.y<a.z?(r+=s.y,a.y+=l.y):(o+=s.z,a.z+=l.z),new F(n-t.x,r-t.y,o-t.z).length()>5.5)break}return{hit:null,water:u,face:new F(0,0,0)}}promptFor(t){if(this.nearestTrader())return"E: Trade with the Trader";if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Ne)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===Qe||n===Ye||n===Je||n===ze)return"E: Open door";if(n===Xe||n===je)return"E: Close door";if(n===Pn)return"E: Save game (respawn point)";if(n===Ae||n===ke)return"E: Craft";if(n===sr)return"E: Forge armour and gear";if(n===Ze)return this.canHeatWater(t.hit.x,t.hit.y,t.hit.z)?"E: Heat the water":this.canFeed(t.hit.x,t.hit.y,t.hit.z)?"E: Feed the fire":"E: Smelt";if(n===zi)return"E: Draw neutral air (37 °C)";if(n===Hi)return this.inv.has("thruster_nozzle",1)?"E: Install Thruster Nozzle":null}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new F(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=this.inv.selectedSlot();if(e&&kt[e.itemId].instaBreak)return{ok:!0,time:.01};const n=En[t];if(n.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const r=e?kt[e.itemId].tool:void 0;return n.tool!==null?!r||r.type!==n.tool?{ok:!1,time:0,why:`need a ${n.tool}`}:r.tier<n.minTier?{ok:!1,time:0,why:`need a tier ${n.minTier} ${n.tool}`}:{ok:!0,time:n.breakTime*Math.pow(.55,r.tier-1)}:{ok:!0,time:n.breakTime*(n.fastTool&&r&&r.type===n.fastTool?Math.pow(.55,r.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const h=this.inv.selectedSlot(),a=h?kt[h.itemId]:null,c=a?.weapon;e.hp-=c?c.dmg:3+(a?.tool?.tier??0),e.hitFlash=.18,this.audio.thud();const u=e.x-this.player.pos.x,f=e.z-this.player.pos.z,m=Math.max(.2,Math.hypot(u,f)),v=c?1.1:.6;this.mobCanStand(e,e.x+u/m*v,e.z+f/m*v)&&(e.x+=u/m*v,e.z+=f/m*v,e.y=this.mobGround(e,e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:r,y:o,z:s}=n.hit,l=this.world.get(r,o,s);if(!this.breaking||this.breaking.x!==r||this.breaking.y!==o||this.breaking.z!==s){const h=this.canBreakWith(l);if(!h.ok){h.why&&!this.breakMsg&&(this.breakMsg=!0,nt(h.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${h.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:r,y:o,z:s,need:h.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(r,o,s),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const r=this.world.get(t,e,n);if(this.questBump("mine"),Ro(r)||r===Xe||r===je){const s=r===Je||r===ze||r===je;this.world.set(t,e,n,bt);for(const l of[-1,1]){const h=this.world.get(t,e+l,n);(Ro(h)||h===Xe||h===je)&&this.world.set(t,e+l,n,bt)}this.giveOrDrop(s?"door_inner":"door",1),this.audio.blockBreak();return}if(r===Pn){this.world.set(t,e,n,bt),this.beaconMarks=this.beaconMarks.filter(s=>!(s.x===t&&s.y===e&&s.z===n)),nt("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(r===hn){this.world.set(t,e,n,bt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===ui){this.world.set(t,e,n,bt),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===Vn){this.world.set(t,e,n,bt),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===wn||r===Gn||r===vn||r===qn){this.world.set(t,e,n,bt),this.crops.delete(`${t},${e},${n}`),r===wn&&this.giveOrDrop("dune_melon",1),r===vn&&(this.giveOrDrop("wheat",1),this.giveOrDrop("seed_wheat",1)),r===Gn&&this.giveOrDrop("seed_melon",1),r===qn&&this.giveOrDrop("seed_wheat",1),this.audio.blockBreak();return}if(r===di){this.world.set(t,e,n,bt),this.giveOrDrop("kindling",1),mt(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===cn||r===un){this.world.set(t,e,n,bt);const s=t+(r===cn?1:-1),l=this.world.get(s,e,n);(l===cn||l===un)&&this.world.set(s,e,n,bt),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(r===Ze&&this.campCharges.delete(`${t},${e},${n}`),r===Ne){const s=this.chestCluster(t,e,n),l=this.chests.get(Me.chestKey(s))??[];this.chests.delete(Me.chestKey(s)),this.world.set(t,e,n,bt);const h=s.filter(([u,f,m])=>u!==t||f!==e||m!==n),a=[];for(const u of h){const f=this.chestCluster(u[0],u[1],u[2]),m=Me.chestKey(f);a.some(([v])=>v===m)||a.push([m,this.emptyChestGrid(f.length)])}let c=!1;for(const u of l)a.some(([,f])=>Me.placeSlotFree(f,u))||(this.dropEntity(u.itemId,1,2,u.charges),c=!0);for(const[u,f]of a)f.slots.length&&this.chests.set(u,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),c&&nt("The remaining chests were full — some contents fell to the sand.");return}if(r===ts){this.world.set(t,e,n,bt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(r===Ae||r===ke){const s=this.benchPeer(t,e,n);this.world.set(t,e,n,bt),s&&this.world.set(s[0],s[1],s[2],bt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(r===kn||r===Ze||r===Zi)&&this.renderer.removePointLight(t,e,n),r===Ni&&this.breakers.delete(`${t},${e},${n}`),this.world.set(t,e,n,bt);const o=this.blockItemId(r);o&&this.giveOrDrop(o,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),r=Math.floor(e),o=Math.max(30,Math.round(ie(this.seed,n,r))+8);for(let s=o;s>=0;s--){const l=this.world.get(n,s,r);if(l!==bt&&En[l].solid)return s+1}return-1}mobGround(t,e,n){if(t.kind!=="scorpion"&&t.kind!=="wurm")return this.mobSurface(e,n);const r=Math.floor(e),o=Math.floor(n);for(let s=Math.floor(t.y);s>=0;s--){const l=this.world.get(r,s,o);if(l!==bt&&En[l].solid)return s+1}return-1}mobCanStand(t,e,n){const r=this.mobGround(t,e,n);return r<0||r>t.y+1.01?!1:this.world.get(Math.floor(e),r,Math.floor(n))===bt}spawnMob(t,e,n,r){const o=pv(t);o.group.position.set(e,n,r),o.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(o.group),this.mobs.push({kind:t,hp:To[t].hp,x:e,y:n,z:r,homeX:e,homeZ:r,yaw:o.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:o})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(n=>n!==t);const e=To[t.kind];e.drops.forEach((n,r)=>{const o=e.dropChance?.[r]??1;(o>=1||Math.random()<o)&&this.giveOrDrop(n.itemId,n.count)}),nt(`${e.name} killed.`)}topUpMobs(){const t={snake:4,rat:8,scorpion:4,wurm:1,trader:0,vulture:3,tortoise:2,fennec:2},e={snake:0,rat:0,scorpion:0,wurm:0,trader:0,vulture:0,tortoise:0,fennec:0},n=this.player.pos;this.mobs=this.mobs.filter(o=>o.kind!=="trader"&&Math.abs(o.x-n.x)+Math.abs(o.z-n.z)>190?(this.renderer.removeSceneObject(o.vis.group),!1):!0);for(const o of this.mobs)e[o.kind]++;const r=this.player.pos;for(const o of["snake","rat","scorpion","wurm","vulture","tortoise","fennec"]){const s=o==="scorpion"||o==="wurm";if(!(s&&r.y>27))for(;e[o]<t[o];){e[o]++;const l=Math.random()*Math.PI*2,h=30+Math.random()*30,a=Math.floor(r.x+Math.cos(l)*h)+.5,c=Math.floor(r.z+Math.sin(l)*h)+.5;if(s){const u=o==="wurm"?5:8,f=o==="wurm"?16:24,m=this.caveSpot(a,c,u,f);if(m<0)continue;this.spawnMob(o,a,m,c)}else{if(Math.hypot(a,c)<24||this.beaconMarks.some(m=>Math.hypot(m.x+.5-a,m.z+.5-c)<16))continue;const u=Ar(this.seed).nearestCamp(a,c);if(u&&Math.hypot(u.x-a,u.z-c)<34)continue;const f=this.mobSurface(a,c);if(f<=1||this.world.get(Math.floor(a),f,Math.floor(c))!==bt||this.world.get(Math.floor(a),f+1,Math.floor(c))!==bt)continue;this.spawnMob(o,a,f,c)}}}this.ensureTraders()}ensureTraders(){const t=Ar(this.seed),e=this.player.pos,n=110,r=Math.floor((e.x-n)/Ce),o=Math.floor((e.x+n)/Ce),s=Math.floor((e.z-n)/Ce),l=Math.floor((e.z+n)/Ce);for(let h=r;h<=o;h++)for(let a=s;a<=l;a++){if(!t.campAt(h,a))continue;const c=t.campCenter(h,a);if(Math.hypot(c.x-e.x,c.z-e.z)>n)continue;const u=h+","+a,f=this.traderAt.get(u);if(f&&this.mobs.includes(f))continue;const m=x_(c),v=this.mobSurface(m.x,m.z);v<=1||(this.spawnMob("trader",m.x,v,m.z),this.traderAt.set(u,this.mobs[this.mobs.length-1]))}if(this.traderAt.size)for(const[h,a]of this.traderAt)this.mobs.includes(a)||this.traderAt.delete(h)}nearestTrader(){const t=this.player.pos;let e=null,n=3.6;for(const r of this.mobs){if(r.kind!=="trader")continue;const o=Math.hypot(r.x-t.x,r.z-t.z);o<n&&(n=o,e=r)}return e}openTrade(t){const e=Ar(this.seed).nearestCamp(t.x,t.z);this.tradeCamp=e?{x:e.x,z:e.z}:{x:t.x,z:t.z},this.tradeOffers=mv(this.seed,this.tradeCamp.x,this.tradeCamp.z,this.dayNumber()),this.ui="trade",this.unlockPointer(),this.renderTrade(),document.getElementById("ui-trade").classList.remove("hidden"),this.audio.pickup()}renderTrade(){const t=document.getElementById("trade-offers");t.innerHTML="";for(let e=0;e<this.tradeOffers.length;e++){const n=this.tradeOffers[e],r=document.createElement("div");r.className="trade-row";const o=l=>l.map(h=>`<span class="trade-item">${kt[h.itemId].name}${h.count>1?" ×"+h.count:""}</span>`).join(" + ");r.innerHTML=`<span class="trade-side want">${o(n.want)}</span><span class="trade-arrow">→</span><span class="trade-side give">${o(n.give)}</span>`;const s=document.createElement("button");s.textContent="Trade",s.onclick=()=>this.trade(e),r.appendChild(s),t.appendChild(r)}document.getElementById("trade-note").textContent=`Day ${this.dayNumber()} — the Trader restocks the table at every dawn.`}trade(t){if(this.ui!=="trade")return;const e=this.tradeOffers[t];for(const n of e.want)if(!this.inv.has(n.itemId,n.count)){nt(`You don't have ${n.count} × ${kt[n.itemId].name}.`),this.audio.error();return}for(const n of e.want)this.inv.removeItem(n.itemId,n.count);for(const n of e.give)this.giveOrDrop(n.itemId,n.count);nt("Traded."),this.audio.drink(),this.renderTrade()}caveSpot(t,e,n,r){const o=Math.floor(t),s=Math.floor(e);for(let l=r;l>=n;l--){if(this.world.get(o,l,s)!==bt||this.world.get(o,l-1,s)===bt||this.world.get(o,l+1,s)!==bt)continue;let h=-1;for(let a=1;a<=3;a++)if(gn(this.world.get(o,l+a,s))){h=a;break}if(!(h<0))return l}return-1}meleeMob(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),r=n?kt[n.itemId].weapon?.reach??3.2:3.2,o=this.raycastTarget(),s=o?.hit?Math.hypot(o.hit.x+.5-t.x,o.hit.y+.5-t.y,o.hit.z+.5-t.z):1/0;let l=null,h=1/0;for(const a of this.mobs){if(a.kind==="trader")continue;const c=To[a.kind],u=a.x-t.x,f=a.y+c.height/2-t.y,m=a.z-t.z,v=u*e.x+f*e.y+m*e.z;if(v<.2||v>r||v>s)continue;const y=t.x+e.x*v-a.x,x=t.y+e.y*v-(a.y+c.height/2),_=t.z+e.z*v-a.z;y*y+x*x+_*_>(c.hitR+.3)*(c.hitR+.3)||v<h&&(h=v,l=a)}return l}columnClear(t,e,n,r){const o=Math.floor(t),s=Math.floor(e);for(let l=Math.floor(n);l<=Math.floor(r);l++){const h=this.world.get(o,l,s);if(h!==bt&&h!==Be)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const r of this.mobs.slice()){const o=To[r.kind];r.hitFlash&&(r.hitFlash=Math.max(0,r.hitFlash-t));const s=(r.hitFlash??0)>0;if(s!==(r.flashOn??!1)&&(r.vis.setFlash(s),r.flashOn=s),r.kind==="trader"){let _=0;if(this.ui==="trade"&&this.tradeCamp&&Math.hypot(r.x-this.tradeCamp.x,r.z-this.tradeCamp.z)<10)r.yaw=Math.atan2(e.x-r.x,e.z-r.z);else{const A=r.x-r.homeX,E=r.z-r.homeZ,S=Math.hypot(A,E);if(r.wanderT-=t,r.wanderT<=0&&(r.wanderT=3+Math.random()*5,r.wanderYaw=Math.random()*Math.PI*2,r.wanderOn=Math.random()<.5),r.wanderOn||S>4.5){const b=S>4.5?Math.atan2(-A,-E):r.wanderYaw,I=Math.sin(b)*o.speed*.45,R=Math.cos(b)*o.speed*.45;r.yaw=b;const p=r.x+I*t,d=r.z+R*t;this.mobCanStand(r,p,d)&&Math.hypot(p-r.homeX,d-r.homeZ)<=5?(r.x=p,r.z=d,_=1):r.wanderYaw=r.yaw=Math.atan2(r.homeX-r.x,r.homeZ-r.z)}}r.y=this.mobGround(r,r.x,r.z),r.vis.group.position.set(r.x,r.y,r.z),r.vis.group.rotation.y=r.yaw,r.vis.animate(n,_);continue}const l=e.x-r.x,h=e.z-r.z,a=Math.hypot(l,h);if(a>110){this.renderer.removeSceneObject(r.vis.group),this.mobs=this.mobs.filter(_=>_!==r);continue}let c=0,u=0;const f=this.columnClear(r.x,r.z,r.y+.2,e.y+1.4),m=r.kind==="vulture"&&this.survival.health<60,v=r.kind==="vulture"?m?o.aggroR:0:o.aggroR,y=r.kind==="vulture"&&!m?o.fleeR:r.kind==="vulture"?0:o.fleeR;if(v>0&&a<v&&a>.01&&f){if(c=l/a*o.speed,u=h/a*o.speed,r.yaw=Math.atan2(c,u),a<1.2+o.hitR&&r.biteCd<=0){r.biteCd=o.biteCd;const _=1-(this.equip.body?kt[this.equip.body.itemId].armor??0:0);this.survival.hurt(o.biteDmg*_,`${o.name.toLowerCase()} bite`),nt(_<1?`A ${o.name.toLowerCase()} bites you — the armour soaks some of it.`:`A ${o.name.toLowerCase()} bites you!`)}}else y>0&&a<y&&a>.01?(c=-l/a*o.speed,u=-h/a*o.speed,r.yaw=Math.atan2(c,u)):(r.wanderT-=t,r.wanderT<=0&&(r.wanderT=2+Math.random()*4,r.wanderYaw=Math.random()*Math.PI*2,r.wanderOn=Math.random()<.55),r.wanderOn&&(c=Math.sin(r.wanderYaw)*o.speed*.35,u=Math.cos(r.wanderYaw)*o.speed*.35,r.yaw=r.wanderYaw));r.biteCd-=t;let x=0;if(c!==0||u!==0){const _=r.x+c*t,A=r.z+u*t;this.mobCanStand(r,_,A)?(r.x=_,r.z=A,x=1):r.wanderYaw=r.yaw=Math.random()*Math.PI*2}r.y=this.mobGround(r,r.x,r.z),r.vis.group.position.set(r.x,r.y,r.z),r.vis.group.rotation.y=r.yaw,r.vis.animate(n,x)}}gridFits(t,e){const n=new Xa;n.slots=[],n.w=t,n.h=e;for(const r of this.inv.slots)if(!Me.placeSlotFree(n,{...r,x:0,y:0}))return!1;return!0}bagSize(){return(this.equip.backpack?kt[this.equip.backpack.itemId].bag:null)??{w:5,h:4,kg:0}}applyEquip(){const t=this.bagSize();for((this.inv.w!==t.w||this.inv.h!==t.h)&&this.inv.setBackpack(t.w,t.h,t.kg),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0);this.inv.droppedOnResize.length;){const e=this.inv.droppedOnResize.shift();this.dropEntity(e.itemId,1,2,e.charges)}this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=kt[t.itemId];if(!e.equip)return;const n=e.equip,r=this.equip[n];if(r&&!this.inv.addSlot(r)){nt("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),n==="light"&&(this.lanternOn=!1),(n==="light"||n==="regulator")&&t.charges===void 0&&(t.charges=0),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),nt(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(!e)return;const n=t==="backpack"?{w:5,h:4}:this.bagSize();if(!this.gridFits(n.w,n.h)){nt("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,t==="light"&&(this.lanternOn=!1),this.applyEquip(),this.inv.addSlot(e),this.audio.place(),nt(`${kt[e.itemId].name} taken off.`),this.renderInv()}benchPeer(t,e,n){for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]]){const s=this.world.get(t+r,e,n+o);if(s===Ae||s===ke)return[t+r,e,n+o]}return null}blockItemId(t){return ii[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),nt(`No room: dropped ${kt[t].name}`))}dropEntity(t,e,n=0,r){const o=this.player.pos,s=-Math.sin(this.player.yaw),l=-Math.cos(this.player.yaw),h=(f,m)=>{const v=Math.floor(o.x+f),y=Math.floor(o.z+m);return!gn(this.world.get(v,Math.floor(o.y),y))&&!gn(this.world.get(v,Math.floor(o.y+1),y))},a=[[s*1.8,l*1.8],[-s*1.8,-l*1.8],[l*1.8,-s*1.8],[-l*1.8,s*1.8],[0,0]],[c,u]=a.find(([f,m])=>h(f,m))??[0,0];for(let f=0;f<e;f++){const m=f===0?0:.3*Math.sin(f*2.4),v=f===0?0:.3*Math.cos(f*2.4);this.entities.push({id:this.entitySeq++,x:o.x+c+m,y:o.y+.35,z:o.z+u+v,itemId:t,charges:r,repickAt:c===0&&u===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=kt[t.itemId];if(e.block===void 0){nt("Not a placeable block"),this.audio.error();return}if(!En[e.block].placeable){nt(`${e.name} is raw material, not a block to place.`),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const r=n.hit.x+n.face.x,o=n.hit.y+n.face.y,s=n.hit.z+n.face.z,l=this.world.get(r,o,s);if(l!==bt&&!(Tn(l)&&l!==Be))return;if(gn(e.block)){const c=this.player.pos;if(r+1>c.x-.3&&r<c.x+.3&&s+1>c.z-.3&&s<c.z+.3&&o+1>c.y&&o<c.y+1.8)return}let h=[];if(e.block===Ne){const c=new Set;for(const[u,f,m]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(r+u,o+f,s+m)!==Ne)continue;const v=Me.chestKey(this.chestCluster(r+u,o+f,s+m));c.has(v)||(c.add(v),h.push(...this.chests.get(v)??[]),this.chests.delete(v))}}let a=null;if(e.block===Ae){const c=this.player.pos;for(const[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){const m=r+u,v=s+f;if(this.world.get(m,o,v)===bt&&!(m+1>c.x-.3&&m<c.x+.3&&v+1>c.z-.3&&v<c.z+.3&&o+1>c.y&&o<c.y+1.8)){a=[m,o,v];break}}if(!a){nt("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(e.block===Gn||e.block===qn||e.block===hn||e.block===Vn){const c=this.world.get(r,o-1,s);if(!(e.block===Vn?c===xn||c===Un||c===ni:c===Un||e.block===hn&&(c===ei||c===yn||c===xn))){nt(e.block===Vn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(r,o,s,e.block),a&&this.world.set(a[0],a[1],a[2],ke),t.blockRot&&Wh(e.block)&&this.world.setRot(r,o,s,t.blockRot),e.block===Qe&&this.world.get(r,o+1,s)===bt&&this.world.set(r,o+1,s,Ye),e.block===Je&&this.world.get(r,o+1,s)===bt&&this.world.set(r,o+1,s,ze),e.block===cn&&this.world.get(r+1,o,s)===bt&&this.world.set(r+1,o,s,un),(e.block===Gn||e.block===qn)&&(this.crops.set(`${r},${o},${s}`,0),this.tut?.notify("plant")),e.block===Vn&&(this.trees.set(`${r},${o},${s}`,0),this.tut?.notify("plant"),nt("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===ts)if(this.beaconAdjacent(r,o,s)){const c=wr(this.quests);c&&c.kind==="finish"&&!this.tut?this.questBump("finish"):nt("The Core hums next to the beacon. Power runs — now wake the wingtip engines.")}else nt("The relay needs the Core right next to a Save Beacon.");e.block===kn?this.renderer.addPointLight(r,o,s,"lamp"):e.block===Zi&&this.renderer.addPointLight(r,o,s,"fire"),e.block===Ni&&this.breakers.add(`${r},${o},${s}`),e.block===Ne&&this.linkChests(r,o,s,h),this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}beaconAdjacent(t,e,n){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([r,o,s])=>this.world.get(t+r,e+o,n+s)===Pn)}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget(),e=this.nearestTrader();if(e){this.openTrade(e);return}if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Ne){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const n=this.nearestCache();if(n){this.openCacheId=n.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:r,y:o,z:s}=t.hit,l=this.world.get(r,o,s);if(l===wn||l===vn||l===ui){this.harvest(r,o,s,l);return}if(l===cn||l===un){this.sleep();return}if(Ro(l)||l===Xe||l===je){const h=l===Je||l===ze||l===je,a=h?je:Xe,c=m=>h?m===Je||m===ze:m===Qe||m===Ye,u=h?Je:Qe,f=h?ze:Ye;if(l===a){const m=this.player.pos;if(m.x>r-.2&&m.x<r+1.2&&m.z>s-.2&&m.z<s+1.2){nt("Step out of the doorway first."),this.audio.error();return}this.world.get(r,o-1,s)===a?(this.world.set(r,o,s,f),this.world.set(r,o-1,s,u)):this.world.get(r,o+1,s)===a?(this.world.set(r,o,s,u),this.world.set(r,o+1,s,f)):this.world.set(r,o,s,c(this.world.get(r,o+1,s))?f:u)}else{const m=gn(this.world.get(r-1,o,s))||gn(this.world.get(r+1,o,s)),v=this.player.pos,y=m?v.z-(s+.5):v.x-(r+.5),x=r+","+s;Math.abs(y)>.35?this.world.doorSwing.set(x,y>0?-1:1):this.world.doorSwing.delete(x),this.world.set(r,o,s,a);for(const _ of[-1,1])c(this.world.get(r,o+_,s))&&this.world.set(r,o+_,s,a);this.tut?.notify("door")}this.audio.door();return}if(l===Pn){this.tut?.notify("save"),this.beaconMarks.some(h=>h.x===r&&h.y===o&&h.z===s)||this.beaconMarks.push({x:r,y:o,z:s}),this.audio.savePing(),this.saveNow()?nt("Saved. Death will respawn you at this beacon."):nt("This world is not saved — the beacon only marks it.");return}if(l===Ae||l===ke){this.openStation=[r,o,s],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(l===sr){this.openStation=[r,o,s],this.ui="bench",this.unlockPointer(),this.renderCraft("armory");return}if(l===Ze){if(this.canHeatWater(r,o,s)){this.heatWater(r,o,s);return}if(this.canFeed(r,o,s)){this.feed(r,o,s);return}this.openStation=[r,o,s],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(l===Hi){if(!this.inv.has("thruster_nozzle",1)){this.audio.error(),nt("A dead wingtip engine. It needs a Thruster Nozzle — Cobalt from the deep Caves.");return}this.inv.removeItem("thruster_nozzle",1),this.world.set(r,o,s,Zi),this.renderer.addPointLight(r,o,s,"fire"),this.questBump("thruster"),this.audio.door(),this.audio.win(),nt("Nozzle seated. The engine coughs, catches, holds."),!this.liftoff&&this.thrustersAllLit()&&this.startLiftoff();return}if(l===zi){let h=null;for(const[a,c,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const f=this.world.roomInfo(r+a,o+c,s+u);if(f.size>0){h=f;break}}h&&h.sealed&&h.regulators*Rr>=h.size?(this.survival.body=37,this.audio.drink(),nt("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),nt("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.selectedSlot()?.itemId==="bucket"){nt("E won't fill it — press Q or right-click with the Bucket to scoop."),this.audio.error();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),nt(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):nt("You need an empty Water Canister.")}}}harvest(t,e,n,r){r===wn?(this.world.set(t,e,n,Gn),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(mt(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),nt("Dune Melon picked — the plant keeps growing.")):r===vn?(this.world.set(t,e,n,Un),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),nt("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,hn),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),nt("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<We){const n=Math.ceil((We-t)/60);nt(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=We/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),nt("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);let o=0;for(let s=-6;s<=6;s++)for(let l=-6;l<=6;l++)for(let h=-2;h<=2;h++){if(this.world.get(e+s,n+h,r+l)!==Ze||(this.campCharges.get(`${e+s},${n+h},${r+l}`)??0)<=0)continue;const a=Math.max(Math.abs(s),Math.abs(l));o=Math.max(o,a<=4?18:9)}return o}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,r]of this.crops){const[o,s,l]=n.split(",").map(Number),h=this.world.get(o,s,l);if(h!==Gn&&h!==wn&&h!==qn&&h!==vn){this.crops.delete(n);continue}if(h===wn||h===vn)continue;const a=h===Gn;let c=!1;t:for(let m=-4;m<=4;m++)for(let v=-4;v<=4;v++)for(let y=-2;y<=1;y++)if(Tn(this.world.get(o+m,s+y,l+v))){c=!0;break t}const u=this.survival.airTempAt(this.world,o,s,l,this.timeSec),f=a?u>=22&&u<=45:u>=2&&u<=42;if(c&&f){const m=r+e;this.crops.set(n,m),m>=(a?60:90)&&this.world.set(o,s,l,a?wn:vn)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){nt("Aim at water."),this.audio.error();return}const{x:e,y:n,z:r}=t.water;if(this.world.get(e,n,r)!==Be){nt("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){nt("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,r,bt),this.audio.drink(),nt("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,r=t.hit.z+t.face.z;if(this.world.get(e,n,r)!==bt){nt("Pour into open space."),this.audio.error();return}this.world.set(e,n,r,Be),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),nt("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,r]of this.trees){const[o,s,l]=n.split(",").map(Number),h=this.world.get(o,s,l);if(h!==Vn&&h!==An){this.trees.delete(n);continue}let a=!1;t:for(let m=-6;m<=6;m++)for(let v=-6;v<=6;v++)for(let y=-3;y<=3;y++)if(Tn(this.world.get(o+m,s+y,l+v))){a=!0;break t}if(!a)continue;const c=Math.min(480,r+e);this.trees.set(n,c);const u=c>=480?3:c>=270?2:c>=120?1:0;if(u===0)continue;let f=this.treePlanCache.get(n);if(!f){let m=Math.floor(mt(o+7*l,s,this.seed+55)*1e9)+1;f=Qu(o,s,l,()=>(m=m*1103515245+12345&2147483647,m/2147483647)),this.treePlanCache.set(n,f)}for(const m of f){if(m.stage>u)continue;const v=this.world.get(m.x,m.y,m.z);(v===bt||v===Vn)&&this.world.set(m.x,m.y,m.z,m.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++)for(let l=0;l<=2;l++){const h=this.world.get(e+o,n+l,r+s);if(!(h!==hn&&h!==ui)&&!(Math.abs(t.x-(e+o+.5))>1.15||Math.abs(t.z-(r+s+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),nt("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){nt("Select an item first."),this.audio.error();return}const e=kt[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(t.itemId==="hot_water_pouch"){this.inv.removeItem(t.itemId,1),this.survival.body=Math.min(this.survival.body+10,ea),this.giveOrDrop("canister_empty",1),this.audio.drink(),nt("Hot water, straight down: a +10 °C warmth rolls through you. The empty canister comes back."),this.renderHeld(),this.renderInv();return}if(t.itemId==="bucket"){this.bucketScoop();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:r,y:o,z:s}=n.hit,l=this.world.get(r,o,s);if(n.face.y===1&&(l===xn||l===ni)){this.world.set(r,o,s,Un),this.audio.place(),nt("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(l===ei||l===yn||l===ss)){nt("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}nt(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),nt(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){nt("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&nt("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}canHeatWater(t,e,n){return this.inv.selectedSlot()?.itemId==="canister_full"&&(this.campCharges.get(`${t},${e},${n}`)??0)>0}canFeed(t,e,n){const r=this.inv.selectedSlot();return!!r&&(r.itemId==="wood_log"||r.itemId==="kindling")}feed(t,e,n){const r=this.inv.selectedSlot();if(!r||!this.canFeed(t,e,n))return;const o=`${r.itemId==="wood_log"?"log":"kindling"}`,s=r.itemId==="wood_log"?2:.5;this.inv.removeItem(r.itemId,1);const l=`${t},${e},${n}`,h=(this.campCharges.get(l)??0)+s;this.campCharges.set(l,h),this.syncFire(t,e,n),this.audio.place(),this.renderHeld(),nt(h>0?`The ${o} catches — the fire breathes again.`:`The ${o} smoulders; the fire needs more.`)}syncFire(t,e,n){const r=(this.campCharges.get(`${t},${e},${n}`)??0)>0;r&&!this.renderer.hasPointLight(t,e,n)?this.renderer.addPointLight(t,e,n,"fire"):!r&&this.renderer.hasPointLight(t,e,n)&&this.renderer.removePointLight(t,e,n),this.world.dirty.add(Math.floor(t/W)+","+Math.floor(n/W))}heatWater(t,e,n){const r=`${t},${e},${n}`,o=this.campCharges.get(r)??0;if(!this.canHeatWater(t,e,n)){this.audio.error();return}this.campCharges.set(r,o-1),this.syncFire(t,e,n),this.inv.removeItem("canister_full",1),this.giveOrDrop("hot_water_pouch",1),this.audio.drink(),nt("The canister hisses over the coals — sealed hot for the cold hours."),this.renderHeld()}toggleLantern(){const t=this.equip.light;if(!t){nt("Nothing in your Light slot. A Head Lantern lights the dark."),this.audio.error();return}if(this.lanternOn){this.lanternOn=!1;return}if((t.charges??0)<=0){nt("The lantern is dry — press E at a Campfire to refuel it."),this.audio.error();return}this.lanternOn=!0,this.lanternAcc=0,nt("Head Lantern on. T puts it out.")}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){nt("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){nt("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),nt("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}stormShieldTick(){const t=Math.floor(this.timeSec*2);if(t===this.breakerTick)return;this.breakerTick=t;const e=this.player.pos;let n=null,r=1/0;for(const o of this.breakers){const[s,l,h]=o.split(",").map(Number),a=Math.hypot(e.x-(s+.5),e.y+.9-(l+.5),e.z-(h+.5));a<=ju&&a<r&&(r=a,n=[s,l,h])}this.stormShieldOn=n!==null,this.renderer.setStormDome(n?[n[0]+.5,n[1]+.5,n[2]+.5]:null)}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),r=Math.floor(e.y),o=Math.floor(e.z);let s=this.world.roomInfo(n,r,o);if(s.size===0)t:for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++){const f=this.world.roomInfo(n+a,r+c,o+u);if(f.size>0){s=f;break t}}const l=s.sealed&&s.regulators>0&&s.regulators*Rr>=s.size;this.regActive=l;const h=new Set(l?s.regCells:[]);for(const[a,c]of this.regGlow){if(h.has(a))continue;this.renderer.removeEntityMesh(c);const[u,f,m]=a.split(",").map(Number);this.renderer.removePointLight(u,f,m),this.regGlow.delete(a)}for(const a of h){if(this.regGlow.has(a))continue;const[c,u,f]=a.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new ne({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,v=this.renderer.addEntityMesh(m,[c+.5,u+.5,f+.5],9427199,1.03);v.material=this.regGlowMat,this.renderer.addPointLight(c,u,f,"cool"),this.regGlow.set(a,m)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==bt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}t.distanceTo(new F(n.x,n.y,n.z))<1.3&&this.inv.addSlot({itemId:n.itemId,x:0,y:0,charges:n.charges})&&(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup())}}}static SHIP_IDS=new Set([He,ln,$n,Yn,Ps,Qe,Ye,Xe,Je,ze,je,kn,Pn,Ae,ke,zi,ts,cn,un]);liftoff=null;thrustersAllLit(){let t=0;for(let e=29;e<=37;e++)for(let n=-8;n<=6;n++)for(let r=-13;r<=13;r++){const o=this.world.get(n,e,r);if(o===Hi)return!1;o===Zi&&t++}return t>=4}startLiftoff(){const t=[];for(let n=37;n>=29;n--){const r=[];for(let o=-8;o<=6;o++)for(let s=-13;s<=13;s++){const l=this.world.get(o,n,s);Me.SHIP_IDS.has(l)&&r.push([o,n,s,l])}r.length&&t.push(r)}this.liftoff={t:0,rows:t,step:0,restored:0},this.ui="liftoff",document.pointerLockElement&&document.exitPointerLock();const e=document.getElementById("lift-fx");e.classList.remove("hidden"),e.textContent="ENGINE IGNITION",nt("The whole Ship shudders. Every plate rattles at once."),this.audio.win()}liftoffFrame(t){const e=this.liftoff;if(!e)return;e.t+=t;const n=2.2/e.rows.length,r=2.4,o=4.6,s=o+2.2,l=document.getElementById("lift-fx");for(l.textContent=e.t<r?"LIFT-OFF":e.t<o?"RESCUE SIGNAL LIVE":"TOUCHDOWN";e.step<e.rows.length&&e.t>=e.step*n;){for(const[h,a,c]of e.rows[e.step])this.world.set(h,a,c,bt);this.audio.door(),e.step++}if(e.t>o)for(;e.restored<e.rows.length&&e.t-o>=e.restored*n;){for(const[h,a,c,u]of e.rows[e.rows.length-1-e.restored])this.world.set(h,a,c,u);this.audio.door(),e.restored++}e.t>=s+.4&&(this.liftoff=null,this.ui=null,l.classList.add("hidden"),this.saveNow(!0),this.win())}win(){this.won||(this.won=!0,au(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`The Ship lifts off. All four engines burn. Survived ${this.scoreDays().toFixed(1)} days. Best: ${Nr().toFixed(1)} days.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:1,charges:t.charges})),...["backpack","head","body","regulator","light"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1,charges:t.charges}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null,regulator:null,light:null},this.lanternOn=!1,au(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${Nr().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/We}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===Pn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){nt("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache","ui-trade"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){du(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=We})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const u=kt[this.temp.itemId];e.classList.add("filled"),e.style.background=u.color,e.style.backgroundImage=`url(${No(this.temp.itemId,this.temp.charges)[0]??""})`,e.onmousedown=f=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.startTempDrag(f)},n.textContent=`Drop ${u.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,1,1,this.temp.charges),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const u of["backpack","head","body","regulator","light"]){const f=document.getElementById("eq-"+u),m=this.equip[u];if(m){const v=kt[m.itemId];f.classList.add("filled"),f.style.background=v.color,f.style.backgroundImage=`url(${No(m.itemId,m.charges)[0]??""})`;const y=m.charges;f.textContent=y!==void 0&&y>0?String(y):"",f.title=y!==void 0?`Click to take off the ${v.name} — ${y} charge${y===1?"":"s"} left`:`Click to take off the ${v.name}`,f.onclick=()=>this.unequipSlot(u)}else f.classList.remove("filled"),f.style.background="#23262e",f.style.backgroundImage="",f.textContent="",f.title="",f.onclick=()=>{const v=this.inv.selectedSlot();v&&kt[v.itemId].equip===u?this.equipItem():v&&(nt(`The ${kt[v.itemId].name} does not fit the ${u} slot.`),this.audio.error())}}const r=document.getElementById("inv-side"),o=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,s=o.selectedSlot(),l=this.temp??s,h=this.inv.weight()+(this.temp?kt[this.temp.itemId].mass:0),a=this.inv.weightLimit(),c=l?Hn(l):null;if(r.textContent=l?`${kt[l.itemId].name} — ${kt[l.itemId].desc}`:"Click an item to inspect it; drag to move it.",r.textContent+=` Weight ${h.toFixed(1)} / ${a} kg`,l&&c&&c.w!==c.h){const u=document.createElement("button");u.textContent="Rotate",u.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:o.rotate(s)||(nt("No room to rotate."),this.audio.error()),this.renderInv()},r.appendChild(u)}if(s){const u=kt[s.itemId];if(u.equip){const f=document.createElement("button");f.textContent=`Equip (${u.equip} slot)`,f.onclick=()=>this.equipItem(),r.appendChild(f)}if(s.itemId==="coolant_cell"&&this.equip.regulator){const f=this.equip.regulator,m=(f.charges??0)>=3,v=document.createElement("button");v.textContent=m?"Regulator holds 3 cells already — that's six days of neutral air":"Load Coolant Cell into the Regulator (each lasts 2 game days)",v.disabled=m||!this.inv.has("coolant_cell",1),v.onclick=()=>{m||!this.inv.has("coolant_cell",1)||(this.inv.removeItem("coolant_cell",1),f.charges=(f.charges??0)+1,this.audio.pickup(),nt(`Coolant Cell loaded — ${f.charges} charge${f.charges===1?"":"s"} running.`),this.renderInv())},r.appendChild(v)}}if(s)if(o===this.chestInv){const u=document.createElement("button");u.textContent="Move to pack",u.onclick=()=>{const f=o.slots.indexOf(s);o.slots.splice(f,1),Me.placeSlotFree(this.inv,s)||(o.slots.splice(f,0,s),nt("No room in your pack."),this.audio.error()),this.renderInv()},r.appendChild(u)}else{const u=document.createElement("button");u.textContent="Drop 1",u.onclick=()=>{this.inv.slots.splice(this.inv.slots.indexOf(s),1),this.dropEntity(s.itemId,1,1,s.charges),this.renderInv()},r.appendChild(u)}}renderGrid(t,e){const n=Me.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const r=(o,s)=>t.slots.find(l=>{const h=Hn(l);return o>=l.x&&o<l.x+h.w&&s>=l.y&&s<l.y+h.h});for(let o=0;o<t.h;o++)for(let s=0;s<t.w;s++){const l=document.createElement("div");l.className="invcell";const h=r(s,o);if(h){const a=kt[h.itemId],c=s-h.x,u=o-h.y,f=No(h.itemId,h.charges),m=h.rot?(a.h-1-c)*a.w+u:u*a.w+c;l.style.background=a.color,l.style.backgroundImage=`url(${f[Math.min(m,f.length-1)]??""})`,t.slots.indexOf(h)===t.selected&&l.classList.add("active"),l.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${a.name} — ${a.desc}`},l.onmousedown=y=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,s,o):this.startInvDrag(y,h,t)}}else l.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,s,o)};e.appendChild(l)}}tapCell(t,e,n){const r=t.slots.find(l=>{const h=Hn(l);return e>=l.x&&e<l.x+h.w&&n>=l.y&&n<l.y+h.h}),o=t===this.inv?this.chestInv:this.inv;if(o){const l=o.selectedSlot();if(l&&l!==r){const h=Hn(l),a=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(a>=0&&c>=0&&t.fits(a,c,h.w,h.h,l)){o.slots.splice(o.slots.indexOf(l),1),o.selected=-1,l.x=a,l.y=c,t.slots.push(l),t.selected=t.slots.indexOf(l),this.audio.place(),this.renderInv(),this.renderHeld();return}nt("No room there."),this.audio.error();return}}const s=t.selectedSlot();if(s&&s!==r){const l=Hn(s),h=Math.min(e,t.w-l.w),a=Math.min(n,t.h-l.h);if(h>=0&&a>=0&&this.tapMove(t,s,r,h,a)){this.audio.place(),t.selected=t.slots.indexOf(s),this.renderInv();return}}r?(this.setSel(t,t.slots.indexOf(r)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,r,o){const s=Hn(e);if(t.fits(r,o,s.w,s.h,e))return t.move(e,r,o);if(!n)return!1;const l=Hn(n),h=t.slots.indexOf(e);t.slots.splice(h,1);const a=t.fits(e.x,e.y,l.w,l.h,n)&&t.fits(r,o,s.w,s.h,n)&&!(r<e.x+l.w&&e.x<r+s.w&&o<e.y+l.h&&e.y<o+s.h)&&t.move(n,e.x,e.y)&&t.move(e,r,o);return t.slots.splice(h,0,e),a}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const r=n.slots.indexOf(e);this.setSel(n,r),n.slots.splice(r,1);const o=this.temp;this.temp=e,this.tempOrigin=n,o&&(n.slots.push(o),n.move(o,e.x,e.y)||this.giveOrDrop(o.itemId,1));const s=(Me.CELL+Me.GAP)*this.uiZoom(),l=Me.GAP*this.uiZoom(),h=Hn(e),a=document.createElement("div");a.className="inv-ghost",a.style.width=h.w*s-l+"px",a.style.height=h.h*s-l+"px",a.style.background=kt[e.itemId].color,a.style.backgroundImage=`url(${Fi(e.itemId,e.rot?1:0,e.charges)})`,document.body.appendChild(a);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:t.clientX-(c.left+e.x*s),gy:t.clientY-(c.top+e.y*s)},f=v=>{a.style.left=v.clientX-u.gx+"px",a.style.top=v.clientY-u.gy+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(v.clientX,v.clientY))},m=v=>{if(window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),a.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(v.clientX,v.clientY)){this.binDiscard();return}const y=Hn(e);let x=null,_=0,A=0;for(const[E,S]of this.gridsEls()){const b=E.getBoundingClientRect();if(_=Math.round((v.clientX-b.left-u.gx)/s),A=Math.round((v.clientY-b.top-u.gy)/s),_>=0&&A>=0&&_<=S.w-y.w&&A<=S.h-y.h){x=S;break}}x&&(x.slots.push(e),x.move(e,_,A)||x===n&&x.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(x,x.slots.indexOf(e))):x.slots.splice(x.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",m),f(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const s=e.slots.indexOf(t);if(e.slots.splice(s,1),!Me.placeSlotFree(n,t)){e.slots.splice(s,0,t),nt(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const r=e.slots.indexOf(t);this.setSel(e,r),e.slots.splice(r,1);const o=this.temp;this.temp=t,this.tempOrigin=e,o&&(e.slots.push(o),e.move(o,t.x,t.y)||this.giveOrDrop(o.itemId,1)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(Me.CELL+Me.GAP)*this.uiZoom(),r=Me.GAP*this.uiZoom(),o=Hn(e),s=document.createElement("div");s.className="inv-ghost",s.style.width=o.w*n-r+"px",s.style.height=o.h*n-r+"px",s.style.background=kt[e.itemId].color,s.style.backgroundImage=`url(${Fi(e.itemId,e.rot?1:0,e.charges)})`,document.body.appendChild(s);const l=a=>{s.style.left=a.clientX-o.w*n/2+"px",s.style.top=a.clientY-o.h*n/2+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(a.clientX,a.clientY))},h=a=>{if(window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",h),s.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(a.clientX,a.clientY)){this.binDiscard();return}const c=(o.w*n-r)/2,u=(o.h*n-r)/2;let f=null,m=0,v=0;for(const[y,x]of this.gridsEls()){const _=y.getBoundingClientRect();if(m=Math.round((a.clientX-_.left-c)/n),v=Math.round((a.clientY-_.top-u)/n),m>=0&&v>=0&&m<=x.w-o.w&&v<=x.h-o.h){f=x;break}}f&&(f.slots.push(e),f.move(e,m,v)?(this.temp=null,this.audio.place(),this.setSel(f,f.slots.indexOf(e))):(f.slots.splice(f.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",l),window.addEventListener("mouseup",h),l(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};Me.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(nt("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){nt("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":t==="armory"?"Armoury — gear that guards the body":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t!=="smelt")for(const r of od){if(t==="armory"?r.station!=="armory":r.station==="armory")continue;const o=document.createElement("div");o.className="craft-row";const s=`${kt[r.out].name}${r.count>1?" ×"+r.count:""}`,l=Object.entries(r.needs).map(([c,u])=>`${u}× ${kt[c].name}`).join(", "),h=ld(this.inv,r);o.innerHTML=`<span class="what"><img class="craft-art" src="${Fi(r.out)}" alt="">${s} <span class="needs">(${l})</span></span>`;const a=document.createElement("button");a.textContent="Craft",a.disabled=!h,a.onclick=()=>{const c=gv(this.inv,r);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(r.out,c),this.tut?.notify("craft"),kt[r.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft(t)},o.appendChild(a),e.appendChild(o)}else{const r=this.openStation,o=`${r[0]},${r[1]},${r[2]}`,s=this.campCharges.get(o)??0;document.getElementById("smelt-fuel").textContent=`${s} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){nt("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(o,s+3),this.syncFire(r[0],r[1],r[2]),this.renderCraft("smelt")};const l=this.equip.light;if(l){const h=l.charges??0,a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what">Head Lantern <span class="needs">(${h}/5 charges)</span></span>`;const c=document.createElement("button");c.textContent="Refuel Lantern (+1, uses 1 fuel)",c.disabled=h>=5||s<1,c.onclick=()=>{h>=5||s<1||(this.campCharges.set(o,s-1),this.syncFire(r[0],r[1],r[2]),l.charges=h+1,this.audio.place(),this.renderCraft("smelt"))},a.appendChild(c),e.appendChild(a)}for(const h of ad){const a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what"><img class="craft-art" src="${Fi(h.out)}" alt="">${kt[h.in].name} → ${kt[h.out].name}${h.n&&h.n>1?" ×"+h.n:""} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(h.in,1)||s<1,c.onclick=()=>{this.inv.removeItem(h.in,1),this.campCharges.set(o,s-1),this.syncFire(r[0],r[1],r[2]);const u=this.inv.addItem(h.out,h.n??1);u>0&&this.giveOrDrop(h.out,u),this.audio.place(),this.renderCraft("smelt")},a.appendChild(c),e.appendChild(a)}}}renderCache(){const t=this.caches.find(r=>r.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const r of t.items){const o=document.createElement("div");o.className="cache-item",o.textContent=`${r.count}× ${kt[r.itemId].name}`,e.appendChild(o)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let r=!0;for(;r;){r=!1;for(const o of t.items)if(o.charges!==void 0&&o.count===1)this.inv.addSlot({itemId:o.itemId,x:0,y:0,charges:o.charges})&&(r=!0,t.items.splice(t.items.indexOf(o),1));else{const s=this.inv.addItem(o.itemId,o.count);s<o.count&&(r=!0,o.count=s),s===0&&t.items.splice(t.items.indexOf(o),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const Dv=["drone","wanderer","wanderer","caravan","caravan","nightwind"],kv=["drone","nightwind","nightwind","caravan","wanderer"],pu={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},mu=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],Uv=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],gu=[0,2,4,2,3,5,4,1],Nv=[0,0,3,2,4,3,2,0],_u={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},Fv=["pluck","saw","breath","bow"];class Ov{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=_u[this.genre];breathBuf=null;root=98;deg=mu[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let r=0,o=0;for(let c=0;c<n.length;c++){const u=Math.random()*2-1;r=.99*r+.01*u,o=.96*o+.04*u,n[c]=(r+o)*2}const s=this.ctx.createBufferSource();s.buffer=e,s.loop=!0,this.noiseBuf=e;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=380;const h=this.ctx.createOscillator();h.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=100,h.connect(a).connect(l.frequency),h.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,s.connect(l).connect(this.windGain).connect(this.ctx.destination),s.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=(.06+this.stormI*.28)*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setStorm(t){t!==this.stormI&&(this.stormI=t,this.windGain&&(this.windGain.gain.value=(.06+t*.28)*this.volume))}stormI=0;setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const r=t.createGain();r.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(r),r.connect(t.destination),[1,1.5,2].forEach((o,s)=>{const l=t.createOscillator();l.type=s===2?"sine":"triangle",l.frequency.value=this.root*o,l.detune.value=s*3-3;const h=t.createGain();h.gain.value=.03/(s+1);const a=t.createOscillator();a.frequency.value=.05+s*.017;const c=t.createGain();c.gain.value=.018,a.connect(c).connect(h.gain),a.start(),l.connect(h).connect(this.musicGain),l.start(),this.droneOscs.push(l)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?Dv:kv;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=_u[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const r=this.isDay?mu:Uv;if(this.deg=r[Math.floor(Math.random()*r.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const o=this.ctx.currentTime;this.droneOscs.forEach((s,l)=>s.frequency.setTargetAtTime(this.root*[1,1.5,2][l],o,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=pu[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,r=(s,l)=>e*s*2**(n[(l%n.length+n.length)%n.length]/12),o=pu[this.genre];switch(this.genre){case"drone":{this.note(r(1,0),t,o*.95,.18),[0,2,4].forEach(s=>this.note(r(2,s),t+.05,o*.9,.03));for(let s=0;s<8;s++)Math.random()<.15||this.note(r(4,gu[s]),t+s*o/8,.9,.12);if(Math.random()<.6){const s=1+Math.floor(Math.random()*6);this.note(r(4,s),t+Math.floor(Math.random()*5)*(o/8),1.4,.13)}break}case"wanderer":{this.note(r(1,0),t,o*.55,.16);for(let s=0;s<8;s++)Math.random()<.1||this.note(r(Math.random()<.3?3:4,gu[s]),t+s*o/8,.55,.12);if(Math.random()<.7){const s=1+Math.floor(Math.random()*5);this.note(r(5,s),t+Math.floor(Math.random()*6)*(o/8),.8,.11)}break}case"nightwind":{this.note(r(1,0),t,o*.95,.15),Math.random()<.4&&[0,2,4].forEach(l=>this.note(r(2,l),t+.1,o*.85,.025));const s=1+Math.floor(Math.random()*3);for(let l=0;l<s;l++){const h=Math.floor(Math.random()*n.length),a=1.6+Math.random()*(o-1.2);this.note(r(4,h),t+Math.random()*(o-1),a,.12)}break}case"caravan":{for(let s=0;s<8;s++)(s===0||s===3||s===4)&&this.drum(t+s*o/8),s%2===1&&this.brush(t+s*o/8);this.note(r(1,0),t,o*.45,.17),this.note(r(1,3),t+o/2,o*.4,.14);for(let s=0;s<8;s++)Math.random()<.25||this.note(r(3,Nv[s]),t+s*o/8,.4,.1);if(Math.random()<.4){const s=1+Math.floor(Math.random()*4);this.note(r(4,s),t+Math.floor(Math.random()*4)*(o/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const r=this.ctx.createGain();r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(r).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=Fv.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,r){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,r);break;case"saw":this.sawNote(t,e,n,r);break;case"breath":this.breathNote(t,e,n,r);break;case"bow":this.bowNote(t,e,n,r);break}}pluckNote(t,e,n,r){const o=this.ctx,s=Math.min(n,1),l=o.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(r,e+.006),l.gain.exponentialRampToValueAtTime(.001,e+s),l.connect(this.musicGain);const h=o.createOscillator();h.type="triangle",h.frequency.value=t,h.connect(l),h.start(e),h.stop(e+s+.05);const a=o.createOscillator();a.type="square",a.frequency.value=t*2.01;const c=o.createGain();c.gain.setValueAtTime(r*.22,e),c.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,s*.35)),a.connect(c).connect(l),a.start(e),a.stop(e+s)}sawNote(t,e,n,r){const o=this.ctx,s=o.createOscillator();s.type="sawtooth",s.frequency.value=t;const l=o.createBiquadFilter();l.type="lowpass",l.Q.value=.8,l.frequency.value=Math.min(3200,Math.max(700,t*6));const h=o.createGain();this.sustainEnv(h.gain,e,n,r*.7,.09),s.connect(l).connect(h).connect(this.musicGain),s.start(e),s.stop(e+n+.05)}breathNote(t,e,n,r){const o=this.ctx;if(!this.breathBuf){const u=o.sampleRate,f=o.createBuffer(1,u*2,u),m=f.getChannelData(0);for(let v=0;v<m.length;v++)m[v]=Math.random()*2-1;this.breathBuf=f}const s=o.createBufferSource();s.buffer=this.breathBuf,s.loop=!0;const l=o.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=10;const h=o.createGain();this.sustainEnv(h.gain,e,n,r*1.6,.22),s.connect(l).connect(h).connect(this.musicGain),s.start(e,Math.random()*1.9),s.stop(e+n+.05);const a=o.createOscillator();a.type="sine",a.frequency.value=t;const c=o.createGain();this.sustainEnv(c.gain,e,n,r*.8,.3),a.connect(c).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}bowNote(t,e,n,r){const o=this.ctx,s=o.createOscillator();s.type="sawtooth",s.frequency.value=t;const l=o.createOscillator();l.frequency.value=5.2;const h=o.createGain();h.gain.value=5,l.connect(h).connect(s.detune),l.start(e),l.stop(e+n+.05);const a=o.createBiquadFilter();a.type="lowpass",a.Q.value=.7,a.frequency.value=Math.min(2600,Math.max(600,t*4));const c=o.createGain();this.sustainEnv(c.gain,e,n,r*.8,Math.min(.35,n*.3)),s.connect(a).connect(c).connect(this.musicGain),s.start(e),s.stop(e+n+.05)}sustainEnv(t,e,n,r,o){const s=Math.min(o,n*.5),l=e+s+(n-s)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(r,e+s),t.setValueAtTime(r,l),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,r=.2,o=0){if(!this.ctx)return;const s=this.ctx.currentTime,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,s),o&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+o),s+e),h.gain.setValueAtTime(r*this.volume,s),h.gain.exponentialRampToValueAtTime(.001,s+e),l.connect(h).connect(this.ctx.destination),l.start(s),l.stop(s+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const r=this.ctx.currentTime,o=this.ctx.sampleRate,s=this.ctx.createBuffer(1,Math.max(1,Math.floor(o*t)),o),l=s.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=(Math.random()*2-1)*(1-u/l.length);const h=this.ctx.createBufferSource();h.buffer=s;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=e;const c=this.ctx.createGain();c.gain.value=n*this.volume,h.connect(a).connect(c).connect(this.ctx.destination),h.start(r)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const Yt=i=>document.getElementById(i),vu=i=>Yt(i).value,_n=(i,t=!0)=>Yt(i).classList.toggle("hidden",!t),Bv=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],wc=()=>Bv.forEach(i=>_n(i,!1)),Xo=new Ov;let _e=bv(),Ft=null;document.addEventListener("click",()=>Xo.resume(),{once:!0});document.addEventListener("touchstart",()=>Xo.resume(),{once:!0});function ia(){wc(),_n("screen-title"),Yt("best-score").textContent=Nr()>0?`Best run: ${Nr().toFixed(1)} days`:"";const i=Yt("worldlist");i.innerHTML="";const t=na();t.length||(i.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const r=pd(e.id),o=document.createElement("span");o.textContent=`${e.name} — seed “${e.seedStr}” — ${r?`day ${r.days}, survived ${(r.playSec/We).toFixed(1)} days`:"never played"}`;const s=document.createElement("button");s.textContent="Load",s.onclick=()=>sa(e,r);const l=document.createElement("button");l.textContent="Export",l.onclick=()=>{r?md(e,r):nt("Nothing saved for this world yet.")};const h=document.createElement("button");h.textContent="Delete",h.onclick=()=>{h.textContent==="Sure?"?(wv(e.id),ia()):(h.textContent="Sure?",setTimeout(()=>h.textContent="Delete",2500))},n.append(o,s,l,h),i.appendChild(n)}}function sa(i,t){wc(),_n("cheats",!1),Yt("hud").classList.remove("hidden"),_e.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),Yt("btn-save").classList.toggle("hidden",i.id.startsWith("guest")),Yt("btn-exportworld").classList.toggle("hidden",i.id.startsWith("guest")),Xo.resume(),Ft=new Me(i,t,Yt("game-wrap"),_e,Xo),globalThis.game=Ft,Ft.start(),t===null&&Ft.startTutorial()}function Ec(){Ft&&(Ft.saveNow(),Ft.stop()),Ft=null,delete globalThis.game,Yt("hud").classList.add("hidden"),ia()}function Tc(i){wc(),_n(i)}function zv(){Ft&&(Ft.pauseSubmenu=null),_n("screen-settings",!1),_n("screen-instructions",!1),_n("screen-catalog",!1),Ft?(_n("ui-inventory",!1),_n("ui-craft",!1),_n("ui-cache",!1),_n("ui-trade",!1),_n("screen-pause",!1),Ft.paused=!1,Ft.relock()):ia()}function Ac(){Ft&&(Ft.pauseSubmenu=Ft.paused?"settings":null),Tc("screen-settings");const i=Yt("settings-body");i.innerHTML="";const t=(e,n,r,o)=>{const s=document.createElement("div");s.className="setting";const l=document.createElement("span");l.textContent=e;const h=document.createElement("div");h.className="seg";const a=[];for(const[c,u]of n){const f=document.createElement("button");f.type="button",f.textContent=c,String(u)===String(r)&&f.classList.add("on"),f.onclick=()=>{for(const m of a)m.classList.remove("on");f.classList.add("on"),o(u)},a.push(f),h.appendChild(f)}s.append(l,h),i.appendChild(s)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],_e.sens,e=>{_e.sens=e,Jn()}),t("Invert Y",[["Off",!1],["On",!0]],_e.invertY,e=>{_e.invertY=e,Jn()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],_e.volume,e=>{_e.volume=e,Jn()}),t("Music",[["Off",!1],["On",!0]],_e.music,e=>{_e.music=e,Jn()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],_e.fov,e=>{_e.fov=e,Jn()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],_e.renderDist,e=>{_e.renderDist=e,Jn()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],_e.quality,e=>{_e.quality=e,Jn()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],_e.lighting,e=>{_e.lighting=e,Jn()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],_e.units,e=>{_e.units=e,Jn()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],_e.uiScale,e=>{_e.uiScale=e,Jn()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],_e.fullscreen,e=>{_e.fullscreen=e,Jn(),e?document.documentElement.requestFullscreen().catch(()=>{_e.fullscreen=!1,Jn(),Ac()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),i.appendChild(e)}}function vd(i){document.documentElement.style.setProperty("--ui-scale",String(i))}function Jn(){Sv(_e),vd(_e.uiScale),Ft&&Ft.applySettings(_e)}let tc="items";function Rc(){Ft&&(Ft.pauseSubmenu=Ft.paused?"catalog":null),Tc("screen-catalog");for(const t of Array.from(Yt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===tc);const i=Yt("catalog-body");if(i.innerHTML="",tc==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,r,o,s)=>{const l=document.createElement("div");l.className="cat-card";const h=document.createElement("img");h.src=n,h.alt="";const a=document.createElement("div");a.innerHTML=`<b>${r}</b><div class="cat-meta">${o}</div><div class="cat-desc">${s}</div>`,l.append(h,a),t.append(l)};for(const n of Object.values(kt).sort((r,o)=>r.name.localeCompare(o.name)))e(Fi(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of En){if(n.id===0||n.name==="Air")continue;const r=Object.values(kt).find(s=>s.block===n.id),o=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(r?Fi(r.id):Tv(n.id),n.name,o,r?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}i.append(t)}else{const t=(e,n,r,o)=>{const s=document.createElement("div");s.className="cat-recipe";const l=document.createElement("img");l.src=e,l.alt="",l.style.width="36px",l.style.height="36px",l.style.imageRendering="pixelated",s.append(l,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${r}</b> <span class="needs">(${o})</span>`})),i.append(s)};for(const e of od){const n=Object.entries(e.needs).map(([r,o])=>`${o}× ${kt[r].name}`).join(" + ");t(Fi(e.out),n,`${kt[e.out].name}${e.count>1?" ×"+e.count:""}`,e.station===null?"hands":e.station==="armory"?"Armoury":"Crafting Bench")}for(const e of ad)t(Fi(e.out),`1× ${kt[e.in].name}`,`${kt[e.out].name}${e.n&&e.n>1?" ×"+e.n:""}`,"Campfire, 1 fuel charge")}}for(const i of Array.from(Yt("catalog-tabs").querySelectorAll(".tab")))i.onclick=()=>{tc=i.dataset.tab,Rc()};const Hv=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Falls","falling more than 4 blocks hurts — about 16 blocks without armour is fatal; land in water or climb down"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Iron Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire (hold Wood or Kindling and press E to feed the fire), Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches, trade with a camp Trader, Broken Thruster on a wingtip (needs a Thruster Nozzle)"],["R","turn a held built block a quarter turn (Crafting Bench, Bed, Thruster, walls …); R with anything else tosses it away"],["T","toggle the Head Lantern — it burns one fuel charge per 4 game-minutes; refuel it at a Campfire"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 5 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],Gv=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / LAMP / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function xd(){Ft&&(Ft.pauseSubmenu=Ft.paused?"instructions":null),Tc("screen-instructions");const i=Yt("instr-body");i.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?Gv:Hv;for(const[n,r]of t){const o=document.createElement("div");o.innerHTML=`<b>${n}</b> — ${r}`,i.appendChild(o)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. Walls block the wind but not heat: a sealed room's air drifts toward the outside temperature. Only Heat Regulator blocks hold a sealed room at ~37 °C — each covers 150 cells, they stack in bigger rooms; the Ship Interior comes with one. Direct midday sun adds a punishing +8…18 °C — shade from rocks, dunes and walls cancels it; at night the desert freezes you. Dig into the Caves: two or more cells under the terrain the air sits at a constant mild ~22 °C, and shelter there lets your body claw back toward 36.6 °C. That is the refuge — but it is dark (wear a Head Lantern, toggle with T), Scorpions and Sand Wurms live only down there, and Cobalt Ore — the one thing that can fix the Ship's engines — hides there too. The goal: mine Cobalt, smelt and craft four Thruster Nozzles, press E at each Broken Thruster on the wingtips, and lift off. Or just keep surviving and beat your best day count. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, Kangaroo Rats bolt, Scorpions and Wurms ambush in the dark — hunt what you can, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor, Armour, Regulator and Light go in the five Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it. The desert is bigger than it looks: Trader Camps — a windmill, a hut, a farmstead — dot the wastes hundreds of steps out, and the robed Trader there barters goods for goods; no coin, and the offer table restocks every in-game day. Watch the sky: a Sandstorm rolls in without warning — when the wind roars, get behind walls or dig in, because the open air will bake you, drink you dry and scour your skin. Arched Cave Mouths gape in rocky slopes and lead straight down to the Caves. Vultures circle the healthy but dive at the wounded; hunt Thornback Tortoises for shell armour, Fennec Foxes for pelts, and bring the skins, shells and hides back to the Trader.",i.appendChild(e)}Yt("btn-create").onclick=()=>{const i=vu("seed-input").trim()||Math.random().toString(36).slice(2,10),t=vu("world-name").trim()||i,e=dd(t,i);sa(e,null)};Yt("btn-guest").onclick=()=>{const i=Math.random().toString(36).slice(2,10);sa({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:i,updated:Date.now()},null)};Yt("btn-import").onclick=()=>Yt("import-file").click();Yt("import-file").onchange=async()=>{const i=Yt("import-file").files?.[0];if(i)try{const t=await Ev(i);nt("World imported."),sa(t,pd(t.id))}catch(t){nt(`Import failed: ${t.message}`)}};Yt("btn-settings").onclick=Ac;Yt("btn-pause-settings").onclick=Ac;Yt("btn-instructions").onclick=xd;Yt("btn-pause-instructions").onclick=xd;Yt("btn-catalog").onclick=Rc;Yt("btn-catalog-title").onclick=Rc;for(const i of document.querySelectorAll(".close-btn"))i.onclick=()=>{if(Ft&&Ft.pauseSubmenu){Ft.closePauseSubmenu();return}Ft&&Ft.closeUI(),(!Ft||!(Ft.ui==="inv"&&Ft.temp))&&zv()};Yt("btn-resume").onclick=()=>{Ft&&(Ft.paused=!1,_n("screen-pause",!1),_n("cheats",!1),Ft.relock())};Yt("btn-save").onclick=()=>nt("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");Yt("btn-exportworld").onclick=()=>{Ft&&Ft.exportWorld()};Yt("btn-quit").onclick=()=>Ec();Yt("btn-cheats").onclick=()=>_n("cheats",Yt("cheats").classList.contains("hidden"));const yd=Yt("cheat-item");for(const[i,t]of Object.entries(kt).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=i,e.textContent=t.name,yd.appendChild(e)}Yt("btn-cheat-add").onclick=()=>{if(!Ft)return;const i=yd.value;Ft.inv.addItem(i,1)?nt("No room in your pack."):nt(`Added ${kt[i].name}.`)};const Cc=Yt("cheat-quest");Mi.forEach((i,t)=>{const e=document.createElement("option");e.value=String(t),e.textContent=`${t+1}. ${i.title}`,Cc.appendChild(e)});{const i=document.createElement("option");i.value=String(Mi.length),i.textContent="Finish the whole chain",Cc.appendChild(i)}Yt("btn-cheat-quest").onclick=()=>{Ft&&Ft.questJump(Number(Cc.value))};for(const i of Array.from(Yt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))i.onclick=()=>{if(!Ft)return;if(i.dataset.speed!==void 0){Ft.speedMul=Number(i.dataset.speed),nt(`Player speed ×${i.dataset.speed}.`);return}if(i.dataset.immortal!==void 0){Ft.survival.invincible=i.dataset.immortal==="1",nt(`Immortality ${Ft.survival.invincible?"on":"off"}.`);return}const t=Number(i.dataset.frac);Ft.setClock(t),nt(`Clock set to ${i.textContent}.`)};Yt("btn-respawn").onclick=()=>{Ft&&Ft.respawn()};Yt("btn-death-title").onclick=()=>Ec();Yt("btn-win-continue").onclick=()=>{Ft&&(Ft.paused=!1,_n("screen-win",!1),Ft.relock())};Yt("btn-win-title").onclick=()=>Ec();document.addEventListener("keydown",i=>{if(i.code==="Escape"&&!Yt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});vd(_e.uiScale);ia();
