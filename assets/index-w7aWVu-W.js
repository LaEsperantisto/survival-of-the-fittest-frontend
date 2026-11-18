(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="180",ku=0,zc=1,Uu=2,Td=1,Nu=2,Li=3,ns=0,Fn=1,Xe=2,Qi=0,js=1,Hc=2,Gc=3,Vc=4,Fu=5,_s=100,Ou=101,Bu=102,zu=103,Hu=104,Gu=200,Vu=201,Wu=202,qu=203,rl=204,ol=205,Xu=206,$u=207,Yu=208,Ku=209,ju=210,Zu=211,Ju=212,Qu=213,tf=214,al=0,ll=1,cl=2,Qs=3,hl=4,dl=5,ul=6,fl=7,ac=0,ef=1,nf=2,ts=0,sf=1,rf=2,of=3,af=4,lf=5,cf=6,hf=7,Ad=300,tr=301,er=302,pl=303,ml=304,Yo=306,gl=1e3,Ms=1001,vl=1002,$n=1003,df=1004,Zr=1005,vi=1006,ca=1007,bs=1008,Si=1009,Rd=1010,Cd=1011,Pr=1012,lc=1013,Ts=1014,Ni=1015,Br=1016,cc=1017,hc=1018,Lr=1020,Id=35902,Pd=35899,Ld=1021,Dd=1022,hi=1023,Dr=1026,kr=1027,kd=1028,dc=1029,Ud=1030,uc=1031,fc=1033,Io=33776,Po=33777,Lo=33778,Do=33779,_l=35840,xl=35841,yl=35842,Ml=35843,bl=36196,Sl=37492,wl=37496,El=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Il=37813,Pl=37814,Ll=37815,Dl=37816,kl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,Bl=36492,zl=36494,Hl=36495,Gl=36283,Vl=36284,Wl=36285,ql=36286,uf=3200,ff=3201,Nd=0,pf=1,ji="",kn="srgb",nr="srgb-linear",Oo="linear",Se="srgb",ks=7680,Wc=519,mf=512,gf=513,vf=514,Fd=515,_f=516,xf=517,yf=518,Mf=519,qc=35044,Xc="300 es",_i=2e3,Bo=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,i=s.length;o<i;o++)s[o].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const Zs=Math.PI/180,Ur=180/Math.PI;function or(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function pc(r,t){return(r%t+t)%t}function bf(r,t,e,n,s){return n+(r-t)*(s-n)/(e-t)}function Sf(r,t,e){return r!==t?(e-r)/(t-r):0}function Tr(r,t,e){return(1-e)*r+e*t}function wf(r,t,e,n){return Tr(r,t,1-Math.exp(-e*n))}function Ef(r,t=1){return t-Math.abs(pc(r,t*2)-t)}function Tf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Af(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Rf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Cf(r,t){return r+Math.random()*(t-r)}function If(r){return r*(.5-Math.random())}function Pf(r){r!==void 0&&($c=r);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lf(r){return r*Zs}function Df(r){return r*Ur}function kf(r){return(r&r-1)===0&&r!==0}function Uf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Nf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ff(r,t,e,n,s){const o=Math.cos,i=Math.sin,l=o(e/2),h=i(e/2),a=o((t+n)/2),c=i((t+n)/2),d=o((t-n)/2),f=i((t-n)/2),m=o((n-t)/2),x=i((n-t)/2);switch(s){case"XYX":r.set(l*c,h*d,h*f,l*a);break;case"YZY":r.set(h*f,l*c,h*d,l*a);break;case"ZXZ":r.set(h*d,h*f,l*c,l*a);break;case"XZX":r.set(l*c,h*x,h*m,l*a);break;case"YXY":r.set(h*m,l*c,h*x,l*a);break;case"ZYZ":r.set(h*x,h*m,l*c,l*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ys(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:Zs,RAD2DEG:Ur,generateUUID:or,clamp:oe,euclideanModulo:pc,mapLinear:bf,inverseLerp:Sf,lerp:Tr,damp:wf,pingpong:Ef,smoothstep:Tf,smootherstep:Af,randInt:Rf,randFloat:Cf,randFloatSpread:If,seededRandom:Pf,degToRad:Lf,radToDeg:Df,isPowerOfTwo:kf,ceilPowerOfTwo:Uf,floorPowerOfTwo:Nf,setQuaternionFromProperEuler:Ff,normalize:En,denormalize:Ys};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,i=this.y-t.y;return this.x=o*n-i*s+t.x,this.y=o*s+i*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,i,l){let h=n[s+0],a=n[s+1],c=n[s+2],d=n[s+3];const f=o[i+0],m=o[i+1],x=o[i+2],y=o[i+3];if(l===0){t[e+0]=h,t[e+1]=a,t[e+2]=c,t[e+3]=d;return}if(l===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=y;return}if(d!==y||h!==f||a!==m||c!==x){let v=1-l;const _=h*f+a*m+c*x+d*y,T=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const b=Math.sqrt(w),I=Math.atan2(b,_*T);v=Math.sin(v*I)/b,l=Math.sin(l*I)/b}const S=l*T;if(h=h*v+f*S,a=a*v+m*S,c=c*v+x*S,d=d*v+y*S,v===1-l){const b=1/Math.sqrt(h*h+a*a+c*c+d*d);h*=b,a*=b,c*=b,d*=b}}t[e]=h,t[e+1]=a,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,i){const l=n[s],h=n[s+1],a=n[s+2],c=n[s+3],d=o[i],f=o[i+1],m=o[i+2],x=o[i+3];return t[e]=l*x+c*d+h*m-a*f,t[e+1]=h*x+c*f+a*d-l*m,t[e+2]=a*x+c*m+l*f-h*d,t[e+3]=c*x-l*d-h*f-a*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,i=t._order,l=Math.cos,h=Math.sin,a=l(n/2),c=l(s/2),d=l(o/2),f=h(n/2),m=h(s/2),x=h(o/2);switch(i){case"XYZ":this._x=f*c*d+a*m*x,this._y=a*m*d-f*c*x,this._z=a*c*x+f*m*d,this._w=a*c*d-f*m*x;break;case"YXZ":this._x=f*c*d+a*m*x,this._y=a*m*d-f*c*x,this._z=a*c*x-f*m*d,this._w=a*c*d+f*m*x;break;case"ZXY":this._x=f*c*d-a*m*x,this._y=a*m*d+f*c*x,this._z=a*c*x+f*m*d,this._w=a*c*d-f*m*x;break;case"ZYX":this._x=f*c*d-a*m*x,this._y=a*m*d+f*c*x,this._z=a*c*x-f*m*d,this._w=a*c*d+f*m*x;break;case"YZX":this._x=f*c*d+a*m*x,this._y=a*m*d+f*c*x,this._z=a*c*x-f*m*d,this._w=a*c*d-f*m*x;break;case"XZY":this._x=f*c*d-a*m*x,this._y=a*m*d-f*c*x,this._z=a*c*x+f*m*d,this._w=a*c*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],i=e[1],l=e[5],h=e[9],a=e[2],c=e[6],d=e[10],f=n+l+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(o-a)*m,this._z=(i-s)*m}else if(n>l&&n>d){const m=2*Math.sqrt(1+n-l-d);this._w=(c-h)/m,this._x=.25*m,this._y=(s+i)/m,this._z=(o+a)/m}else if(l>d){const m=2*Math.sqrt(1+l-n-d);this._w=(o-a)/m,this._x=(s+i)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+d-n-l);this._w=(i-s)/m,this._x=(o+a)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,i=t._w,l=e._x,h=e._y,a=e._z,c=e._w;return this._x=n*c+i*l+s*a-o*h,this._y=s*c+i*h+o*l-n*a,this._z=o*c+i*a+n*h-s*l,this._w=i*c-n*l-s*h-o*a,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,i=this._w;let l=i*t._w+n*t._x+s*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=i,this._x=n,this._y=s,this._z=o,this;const h=1-l*l;if(h<=Number.EPSILON){const m=1-e;return this._w=m*i+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const a=Math.sqrt(h),c=Math.atan2(a,l),d=Math.sin((1-e)*c)/a,f=Math.sin(e*c)/a;return this._w=i*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,i=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*i,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*i,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*i,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,i=t.y,l=t.z,h=t.w,a=2*(i*s-l*n),c=2*(l*e-o*s),d=2*(o*n-i*e);return this.x=e+h*a+i*d-l*c,this.y=n+h*c+l*a-o*d,this.z=s+h*d+o*c-i*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,i=e.x,l=e.y,h=e.z;return this.x=s*h-o*l,this.y=o*i-n*h,this.z=n*l-s*i,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new F,Yc=new zr;class Zt{constructor(t,e,n,s,o,i,l,h,a){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,i,l,h,a)}set(t,e,n,s,o,i,l,h,a){const c=this.elements;return c[0]=t,c[1]=s,c[2]=l,c[3]=e,c[4]=o,c[5]=h,c[6]=n,c[7]=i,c[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,i=n[0],l=n[3],h=n[6],a=n[1],c=n[4],d=n[7],f=n[2],m=n[5],x=n[8],y=s[0],v=s[3],_=s[6],T=s[1],w=s[4],S=s[7],b=s[2],I=s[5],R=s[8];return o[0]=i*y+l*T+h*b,o[3]=i*v+l*w+h*I,o[6]=i*_+l*S+h*R,o[1]=a*y+c*T+d*b,o[4]=a*v+c*w+d*I,o[7]=a*_+c*S+d*R,o[2]=f*y+m*T+x*b,o[5]=f*v+m*w+x*I,o[8]=f*_+m*S+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],i=t[4],l=t[5],h=t[6],a=t[7],c=t[8];return e*i*c-e*l*a-n*o*c+n*l*h+s*o*a-s*i*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],i=t[4],l=t[5],h=t[6],a=t[7],c=t[8],d=c*i-l*a,f=l*h-c*o,m=a*o-i*h,x=e*d+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=d*y,t[1]=(s*a-c*n)*y,t[2]=(l*n-s*i)*y,t[3]=f*y,t[4]=(c*e-s*h)*y,t[5]=(s*o-l*e)*y,t[6]=m*y,t[7]=(n*h-a*e)*y,t[8]=(i*e-n*o)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,i,l){const h=Math.cos(o),a=Math.sin(o);return this.set(n*h,n*a,-n*(h*i+a*l)+i+t,-s*a,s*h,-s*(-a*i+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Zt;function Od(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Of(){const r=zo("canvas");return r.style.display="block",r}const Kc={};function Nr(r){r in Kc||(Kc[r]=!0,console.warn(r))}function Bf(r,t,e){return new Promise(function(n,s){function o(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const jc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){const r={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,o,i){return this.enabled===!1||o===i||!o||!i||(this.spaces[o].transfer===Se&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[o].primaries!==this.spaces[i].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Se&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?Oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,i){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[nr]:{primaries:t,whitePoint:n,transfer:Oo,toXYZ:jc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:jc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),r}const pe=zf();function Oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class Hf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=zo("canvas")),Us.width=t.width,Us.height=t.height;const s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let i=0;i<o.length;i++)o[i]=Oi(o[i]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gf=0;class mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let i=0,l=s.length;i<l;i++)s[i].isDataTexture?o.push(ua(s[i].image)):o.push(ua(s[i]))}else o=ua(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ua(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;const fa=new F;class Cn extends rr{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=Ms,s=Ms,o=vi,i=bs,l=hi,h=Si,a=Cn.DEFAULT_ANISOTROPY,c=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=or(),this.name="",this.source=new mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=i,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gl:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gl:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Ad;Cn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*s+i[12]*o,this.y=i[1]*e+i[5]*n+i[9]*s+i[13]*o,this.z=i[2]*e+i[6]*n+i[10]*s+i[14]*o,this.w=i[3]*e+i[7]*n+i[11]*s+i[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const h=t.elements,a=h[0],c=h[4],d=h[8],f=h[1],m=h[5],x=h[9],y=h[2],v=h[6],_=h[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-v)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+v)<.1&&Math.abs(a+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(a+1)/2,S=(m+1)/2,b=(_+1)/2,I=(c+f)/4,R=(d+y)/4,p=(x+v)/4;return w>S&&w>b?w<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(w),s=I/n,o=R/n):S>b?S<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),n=I/s,o=p/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=R/o,s=p/o),this.set(n,s,o,e),this}let T=Math.sqrt((v-x)*(v-x)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(T)<.001&&(T=1),this.x=(v-x)/T,this.y=(d-y)/T,this.z=(f-c)/T,this.w=Math.acos((a+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wf extends rr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:n.depth},o=new Cn(s);this.textures=[];const i=n.count;for(let l=0;l<i;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new mc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends Wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bd extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let i=0,l=o.count;i<l;i++)t.isMesh===!0?t.getVertexPosition(i,ri):ri.fromBufferAttribute(o,i),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const s=t.children;for(let o=0,i=s.length;o<i;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Qr.subVectors(this.max,ur),Ns.subVectors(t.a,ur),Fs.subVectors(t.b,ur),Os.subVectors(t.c,ur),Gi.subVectors(Fs,Ns),Vi.subVectors(Os,Fs),cs.subVectors(Ns,Os);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-cs.z,cs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,cs.z,0,-cs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-cs.y,cs.x,0];return!pa(e,Ns,Fs,Os,Qr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ns,Fs,Os,Qr))?!1:(to.crossVectors(Gi,Vi),e=[to.x,to.y,to.z],pa(e,Ns,Fs,Os,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ai=[new F,new F,new F,new F,new F,new F,new F,new F],ri=new F,Jr=new Hr,Ns=new F,Fs=new F,Os=new F,Gi=new F,Vi=new F,cs=new F,ur=new F,Qr=new F,to=new F,hs=new F;function pa(r,t,e,n,s){for(let o=0,i=r.length-3;o<=i;o+=3){hs.fromArray(r,o);const l=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),h=t.dot(hs),a=e.dot(hs),c=n.dot(hs);if(Math.max(-Math.max(h,a,c),Math.min(h,a,c))>l)return!1}return!0}const Xf=new Hr,fr=new F,ma=new F;class Gr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let s=0;for(let o=0,i=t.length;o<i;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(ma)),this.expandByPoint(fr.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ri=new F,ga=new F,eo=new F,Wi=new F,va=new F,no=new F,_a=new F;class gc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(ga);const o=t.distanceTo(e)*.5,i=-this.direction.dot(eo),l=Wi.dot(this.direction),h=-Wi.dot(eo),a=Wi.lengthSq(),c=Math.abs(1-i*i);let d,f,m,x;if(c>0)if(d=i*h-l,f=i*l-h,x=o*c,d>=0)if(f>=-x)if(f<=x){const y=1/c;d*=y,f*=y,m=d*(d+i*f+2*l)+f*(i*d+f+2*h)+a}else f=o,d=Math.max(0,-(i*f+l)),m=-d*d+f*(f+2*h)+a;else f=-o,d=Math.max(0,-(i*f+l)),m=-d*d+f*(f+2*h)+a;else f<=-x?(d=Math.max(0,-(-i*o+l)),f=d>0?-o:Math.min(Math.max(-o,-h),o),m=-d*d+f*(f+2*h)+a):f<=x?(d=0,f=Math.min(Math.max(-o,-h),o),m=f*(f+2*h)+a):(d=Math.max(0,-(i*o+l)),f=d>0?o:Math.min(Math.max(-o,-h),o),m=-d*d+f*(f+2*h)+a);else f=i>0?-o:o,d=Math.max(0,-(i*f+l)),m=-d*d+f*(f+2*h)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ga).addScaledVector(eo,f),m}intersectSphere(t,e){Ri.subVectors(t.center,this.origin);const n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,o=t.radius*t.radius;if(s>o)return null;const i=Math.sqrt(o-s),l=n-i,h=n+i;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,i,l,h;const a=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return a>=0?(n=(t.min.x-f.x)*a,s=(t.max.x-f.x)*a):(n=(t.max.x-f.x)*a,s=(t.min.x-f.x)*a),c>=0?(o=(t.min.y-f.y)*c,i=(t.max.y-f.y)*c):(o=(t.max.y-f.y)*c,i=(t.min.y-f.y)*c),n>i||o>s||((o>n||isNaN(n))&&(n=o),(i<s||isNaN(s))&&(s=i),d>=0?(l=(t.min.z-f.z)*d,h=(t.max.z-f.z)*d):(l=(t.max.z-f.z)*d,h=(t.min.z-f.z)*d),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,o){va.subVectors(e,t),no.subVectors(n,t),_a.crossVectors(va,no);let i=this.direction.dot(_a),l;if(i>0){if(s)return null;l=1}else if(i<0)l=-1,i=-i;else return null;Wi.subVectors(this.origin,t);const h=l*this.direction.dot(no.crossVectors(Wi,no));if(h<0)return null;const a=l*this.direction.dot(va.cross(Wi));if(a<0||h+a>i)return null;const c=-l*Wi.dot(_a);return c<0?null:this.at(c/i,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,n,s,o,i,l,h,a,c,d,f,m,x,y,v){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,i,l,h,a,c,d,f,m,x,y,v)}set(t,e,n,s,o,i,l,h,a,c,d,f,m,x,y,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=o,_[5]=i,_[9]=l,_[13]=h,_[2]=a,_[6]=c,_[10]=d,_[14]=f,_[3]=m,_[7]=x,_[11]=y,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),o=1/Bs.setFromMatrixColumn(t,1).length(),i=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*i,e[9]=n[9]*i,e[10]=n[10]*i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,i=Math.cos(n),l=Math.sin(n),h=Math.cos(s),a=Math.sin(s),c=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const f=i*c,m=i*d,x=l*c,y=l*d;e[0]=h*c,e[4]=-h*d,e[8]=a,e[1]=m+x*a,e[5]=f-y*a,e[9]=-l*h,e[2]=y-f*a,e[6]=x+m*a,e[10]=i*h}else if(t.order==="YXZ"){const f=h*c,m=h*d,x=a*c,y=a*d;e[0]=f+y*l,e[4]=x*l-m,e[8]=i*a,e[1]=i*d,e[5]=i*c,e[9]=-l,e[2]=m*l-x,e[6]=y+f*l,e[10]=i*h}else if(t.order==="ZXY"){const f=h*c,m=h*d,x=a*c,y=a*d;e[0]=f-y*l,e[4]=-i*d,e[8]=x+m*l,e[1]=m+x*l,e[5]=i*c,e[9]=y-f*l,e[2]=-i*a,e[6]=l,e[10]=i*h}else if(t.order==="ZYX"){const f=i*c,m=i*d,x=l*c,y=l*d;e[0]=h*c,e[4]=x*a-m,e[8]=f*a+y,e[1]=h*d,e[5]=y*a+f,e[9]=m*a-x,e[2]=-a,e[6]=l*h,e[10]=i*h}else if(t.order==="YZX"){const f=i*h,m=i*a,x=l*h,y=l*a;e[0]=h*c,e[4]=y-f*d,e[8]=x*d+m,e[1]=d,e[5]=i*c,e[9]=-l*c,e[2]=-a*c,e[6]=m*d+x,e[10]=f-y*d}else if(t.order==="XZY"){const f=i*h,m=i*a,x=l*h,y=l*a;e[0]=h*c,e[4]=-d,e[8]=a*c,e[1]=f*d+y,e[5]=i*c,e[9]=m*d-x,e[2]=x*d-m,e[6]=l*c,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Yf)}lookAt(t,e,n){const s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),qi.crossVectors(n,zn),qi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),qi.crossVectors(n,zn)),qi.normalize(),io.crossVectors(zn,qi),s[0]=qi.x,s[4]=io.x,s[8]=zn.x,s[1]=qi.y,s[5]=io.y,s[9]=zn.y,s[2]=qi.z,s[6]=io.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,i=n[0],l=n[4],h=n[8],a=n[12],c=n[1],d=n[5],f=n[9],m=n[13],x=n[2],y=n[6],v=n[10],_=n[14],T=n[3],w=n[7],S=n[11],b=n[15],I=s[0],R=s[4],p=s[8],u=s[12],g=s[1],M=s[5],C=s[9],L=s[13],k=s[2],N=s[6],z=s[10],Y=s[14],W=s[3],J=s[7],et=s[11],_t=s[15];return o[0]=i*I+l*g+h*k+a*W,o[4]=i*R+l*M+h*N+a*J,o[8]=i*p+l*C+h*z+a*et,o[12]=i*u+l*L+h*Y+a*_t,o[1]=c*I+d*g+f*k+m*W,o[5]=c*R+d*M+f*N+m*J,o[9]=c*p+d*C+f*z+m*et,o[13]=c*u+d*L+f*Y+m*_t,o[2]=x*I+y*g+v*k+_*W,o[6]=x*R+y*M+v*N+_*J,o[10]=x*p+y*C+v*z+_*et,o[14]=x*u+y*L+v*Y+_*_t,o[3]=T*I+w*g+S*k+b*W,o[7]=T*R+w*M+S*N+b*J,o[11]=T*p+w*C+S*z+b*et,o[15]=T*u+w*L+S*Y+b*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],i=t[1],l=t[5],h=t[9],a=t[13],c=t[2],d=t[6],f=t[10],m=t[14],x=t[3],y=t[7],v=t[11],_=t[15];return x*(+o*h*d-s*a*d-o*l*f+n*a*f+s*l*m-n*h*m)+y*(+e*h*m-e*a*f+o*i*f-s*i*m+s*a*c-o*h*c)+v*(+e*a*d-e*l*m-o*i*d+n*i*m+o*l*c-n*a*c)+_*(-s*l*c-e*h*d+e*l*f+s*i*d-n*i*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],i=t[4],l=t[5],h=t[6],a=t[7],c=t[8],d=t[9],f=t[10],m=t[11],x=t[12],y=t[13],v=t[14],_=t[15],T=d*v*a-y*f*a+y*h*m-l*v*m-d*h*_+l*f*_,w=x*f*a-c*v*a-x*h*m+i*v*m+c*h*_-i*f*_,S=c*y*a-x*d*a+x*l*m-i*y*m-c*l*_+i*d*_,b=x*d*h-c*y*h-x*l*f+i*y*f+c*l*v-i*d*v,I=e*T+n*w+s*S+o*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=T*R,t[1]=(y*f*o-d*v*o-y*s*m+n*v*m+d*s*_-n*f*_)*R,t[2]=(l*v*o-y*h*o+y*s*a-n*v*a-l*s*_+n*h*_)*R,t[3]=(d*h*o-l*f*o-d*s*a+n*f*a+l*s*m-n*h*m)*R,t[4]=w*R,t[5]=(c*v*o-x*f*o+x*s*m-e*v*m-c*s*_+e*f*_)*R,t[6]=(x*h*o-i*v*o-x*s*a+e*v*a+i*s*_-e*h*_)*R,t[7]=(i*f*o-c*h*o+c*s*a-e*f*a-i*s*m+e*h*m)*R,t[8]=S*R,t[9]=(x*d*o-c*y*o-x*n*m+e*y*m+c*n*_-e*d*_)*R,t[10]=(i*y*o-x*l*o+x*n*a-e*y*a-i*n*_+e*l*_)*R,t[11]=(c*l*o-i*d*o-c*n*a+e*d*a+i*n*m-e*l*m)*R,t[12]=b*R,t[13]=(c*y*s-x*d*s+x*n*f-e*y*f-c*n*v+e*d*v)*R,t[14]=(x*l*s-i*y*s-x*n*h+e*y*h+i*n*v-e*l*v)*R,t[15]=(i*d*s-c*l*s+c*n*h-e*d*h-i*n*f+e*l*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,i=t.x,l=t.y,h=t.z,a=o*i,c=o*l;return this.set(a*i+n,a*l-s*h,a*h+s*l,0,a*l+s*h,c*l+n,c*h-s*i,0,a*h-s*l,c*h+s*i,o*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,i){return this.set(1,n,o,0,t,1,i,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,i=e._y,l=e._z,h=e._w,a=o+o,c=i+i,d=l+l,f=o*a,m=o*c,x=o*d,y=i*c,v=i*d,_=l*d,T=h*a,w=h*c,S=h*d,b=n.x,I=n.y,R=n.z;return s[0]=(1-(y+_))*b,s[1]=(m+S)*b,s[2]=(x-w)*b,s[3]=0,s[4]=(m-S)*I,s[5]=(1-(f+_))*I,s[6]=(v+T)*I,s[7]=0,s[8]=(x+w)*R,s[9]=(v-T)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Bs.set(s[0],s[1],s[2]).length();const i=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);const a=1/o,c=1/i,d=1/l;return oi.elements[0]*=a,oi.elements[1]*=a,oi.elements[2]*=a,oi.elements[4]*=c,oi.elements[5]*=c,oi.elements[6]*=c,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,e.setFromRotationMatrix(oi),n.x=o,n.y=i,n.z=l,this}makePerspective(t,e,n,s,o,i,l=_i,h=!1){const a=this.elements,c=2*o/(e-t),d=2*o/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s);let x,y;if(h)x=o/(i-o),y=i*o/(i-o);else if(l===_i)x=-(i+o)/(i-o),y=-2*i*o/(i-o);else if(l===Bo)x=-i/(i-o),y=-i*o/(i-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=d,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=x,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,s,o,i,l=_i,h=!1){const a=this.elements,c=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s);let x,y;if(h)x=1/(i-o),y=i/(i-o);else if(l===_i)x=-2/(i-o),y=-(i+o)/(i-o);else if(l===Bo)x=-1/(i-o),y=-o/(i-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=d,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=x,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bs=new F,oi=new Pe,$f=new F(0,0,0),Yf=new F(1,1,1),qi=new F,io=new F,zn=new F,Jc=new Pe,Qc=new zr;class wi{constructor(t=0,e=0,n=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],i=s[4],l=s[8],h=s[1],a=s[5],c=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-i,o)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(h,a)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-i,a)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-i,a));break;case"YZX":this._z=Math.asin(oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,a),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-oe(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kf=0;const th=new F,zs=new zr,Ci=new Pe,so=new F,pr=new F,jf=new F,Zf=new zr,eh=new F(1,0,0),nh=new F(0,1,0),ih=new F(0,0,1),sh={type:"added"},Jf={type:"removed"},Hs={type:"childadded",child:null},xa={type:"childremoved",child:null};class en extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new F,e=new wi,n=new zr,s=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function i(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Zt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(pr,so,this.up):Ci.lookAt(so,pr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(Ci),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jf),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const i=this.children[n].getObjectByProperty(t,e);if(i!==void 0)return i}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,i=s.length;o<i;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,i=s.length;o<i;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let a=0,c=h.length;a<c;a++){const d=h[a];o(t.shapes,d)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,a=this.material.length;h<a;h++)l.push(o(t.materials,this.material[h]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];s.animations.push(o(t.animations,h))}}if(e){const l=i(t.geometries),h=i(t.materials),a=i(t.textures),c=i(t.images),d=i(t.shapes),f=i(t.skeletons),m=i(t.animations),x=i(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),a.length>0&&(n.textures=a),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function i(l){const h=[];for(const a in l){const c=l[a];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new F,Ii=new F,ya=new F,Pi=new F,Gs=new F,Vs=new F,rh=new F,Ma=new F,ba=new F,Sa=new F,wa=new we,Ea=new we,Ta=new we;class ei{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){ai.subVectors(s,e),Ii.subVectors(n,e),ya.subVectors(t,e);const i=ai.dot(ai),l=ai.dot(Ii),h=ai.dot(ya),a=Ii.dot(Ii),c=Ii.dot(ya),d=i*a-l*l;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(a*h-l*c)*f,x=(i*c-l*h)*f;return o.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,o,i,l,h){return this.getBarycoord(t,e,n,s,Pi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Pi.x),h.addScaledVector(i,Pi.y),h.addScaledVector(l,Pi.z),h)}static getInterpolatedAttribute(t,e,n,s,o,i){return wa.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),wa.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,s),i.setScalar(0),i.addScaledVector(wa,o.x),i.addScaledVector(Ea,o.y),i.addScaledVector(Ta,o.z),i}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Ii.subVectors(t,e),ai.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ai.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ei.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let i,l;Gs.subVectors(s,n),Vs.subVectors(o,n),Ma.subVectors(t,n);const h=Gs.dot(Ma),a=Vs.dot(Ma);if(h<=0&&a<=0)return e.copy(n);ba.subVectors(t,s);const c=Gs.dot(ba),d=Vs.dot(ba);if(c>=0&&d<=c)return e.copy(s);const f=h*d-c*a;if(f<=0&&h>=0&&c<=0)return i=h/(h-c),e.copy(n).addScaledVector(Gs,i);Sa.subVectors(t,o);const m=Gs.dot(Sa),x=Vs.dot(Sa);if(x>=0&&m<=x)return e.copy(o);const y=m*a-h*x;if(y<=0&&a>=0&&x<=0)return l=a/(a-x),e.copy(n).addScaledVector(Vs,l);const v=c*x-m*d;if(v<=0&&d-c>=0&&m-x>=0)return rh.subVectors(o,s),l=(d-c)/(d-c+(m-x)),e.copy(s).addScaledVector(rh,l);const _=1/(v+y+f);return i=y*_,l=f*_,e.copy(n).addScaledVector(Gs,i).addScaledVector(Vs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Aa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=pc(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,i=2*n-o;this.r=Aa(i,o,t+1/3),this.g=Aa(i,o,t),this.b=Aa(i,o,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=kn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const i=s[1],l=s[2];switch(i){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],i=o.length;if(i===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(i===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){const n=Hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return pe.workingToColorSpace(vn.copy(this),t),Math.round(oe(vn.r*255,0,255))*65536+Math.round(oe(vn.g*255,0,255))*256+Math.round(oe(vn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(vn.copy(this),e);const n=vn.r,s=vn.g,o=vn.b,i=Math.max(n,s,o),l=Math.min(n,s,o);let h,a;const c=(l+i)/2;if(l===i)h=0,a=0;else{const d=i-l;switch(a=c<=.5?d/(i+l):d/(2-i-l),i){case n:h=(s-o)/d+(s<o?6:0);break;case s:h=(o-n)/d+2;break;case o:h=(n-s)/d+4;break}h/=6}return t.h=h,t.s=a,t.l=c,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=kn){pe.workingToColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,s=vn.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(ro);const n=Tr(Xi.h,ro.h,e),s=Tr(Xi.s,ro.s,e),o=Tr(Xi.l,ro.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Gt;Gt.NAMES=Hd;let Qf=0;class Cs extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=or(),this.name="",this.type="Material",this.blending=js,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const i=[];for(const l in o){const h=o[l];delete h.metadata,i.push(h)}return i}if(e){const o=s(t.textures),i=s(t.images);o.length>0&&(n.textures=o),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pi extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new F,oo=new ce;let tp=0;class Mi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),o=En(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}}class Gd extends Mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vd extends Mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Mi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ep=0;const Jn=new Pe,Ra=new en,Ws=new F,Hn=new Hr,mr=new Hr,on=new F;class tn extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Od(t)?Vd:Gd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Zt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const i=t[s];n.push(i.x,i.y,i.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let o=0,i=e.length;o<i;o++){const l=e[o];mr.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(Hn.min,mr.min),Hn.expandByPoint(on),on.addVectors(Hn.max,mr.max),Hn.expandByPoint(on)):(Hn.expandByPoint(mr.min),Hn.expandByPoint(mr.max))}Hn.getCenter(n);let s=0;for(let o=0,i=t.count;o<i;o++)on.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(on));if(e)for(let o=0,i=e.length;o<i;o++){const l=e[o],h=this.morphTargetsRelative;for(let a=0,c=l.count;a<c;a++)on.fromBufferAttribute(l,a),h&&(Ws.fromBufferAttribute(t,a),on.add(Ws)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*n.count),4));const i=this.getAttribute("tangent"),l=[],h=[];for(let p=0;p<n.count;p++)l[p]=new F,h[p]=new F;const a=new F,c=new F,d=new F,f=new ce,m=new ce,x=new ce,y=new F,v=new F;function _(p,u,g){a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,u),d.fromBufferAttribute(n,g),f.fromBufferAttribute(o,p),m.fromBufferAttribute(o,u),x.fromBufferAttribute(o,g),c.sub(a),d.sub(a),m.sub(f),x.sub(f);const M=1/(m.x*x.y-x.x*m.y);isFinite(M)&&(y.copy(c).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(M),v.copy(d).multiplyScalar(m.x).addScaledVector(c,-x.x).multiplyScalar(M),l[p].add(y),l[u].add(y),l[g].add(y),h[p].add(v),h[u].add(v),h[g].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let p=0,u=T.length;p<u;++p){const g=T[p],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new F,S=new F,b=new F,I=new F;function R(p){b.fromBufferAttribute(s,p),I.copy(b);const u=l[p];w.copy(u),w.sub(b.multiplyScalar(b.dot(u))).normalize(),S.crossVectors(I,u);const M=S.dot(h[p])<0?-1:1;i.setXYZW(p,w.x,w.y,w.z,M)}for(let p=0,u=T.length;p<u;++p){const g=T[p],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new F,o=new F,i=new F,l=new F,h=new F,a=new F,c=new F,d=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const x=t.getX(f+0),y=t.getX(f+1),v=t.getX(f+2);s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,y),i.fromBufferAttribute(e,v),c.subVectors(i,o),d.subVectors(s,o),c.cross(d),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),a.fromBufferAttribute(n,v),l.add(c),h.add(c),a.add(c),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(v,a.x,a.y,a.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),i.fromBufferAttribute(e,f+2),c.subVectors(i,o),d.subVectors(s,o),c.cross(d),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(l,h){const a=l.array,c=l.itemSize,d=l.normalized,f=new a.constructor(h.length*c);let m=0,x=0;for(let y=0,v=h.length;y<v;y++){l.isInterleavedBufferAttribute?m=h[y]*l.data.stride+l.offset:m=h[y]*c;for(let _=0;_<c;_++)f[x++]=a[m++]}return new Mi(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,s=this.attributes;for(const l in s){const h=s[l],a=t(h,n);e.setAttribute(l,a)}const o=this.morphAttributes;for(const l in o){const h=[],a=o[l];for(let c=0,d=a.length;c<d;c++){const f=a[c],m=t(f,n);h.push(m)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let l=0,h=i.length;l<h;l++){const a=i[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const a in h)h[a]!==void 0&&(t[a]=h[a]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const a=n[h];t.data.attributes[h]=a.toJSON(t.data)}const s={};let o=!1;for(const h in this.morphAttributes){const a=this.morphAttributes[h],c=[];for(let d=0,f=a.length;d<f;d++){const m=a[d];c.push(m.toJSON(t.data))}c.length>0&&(s[h]=c,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(t.data.groups=JSON.parse(JSON.stringify(i)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const a in s){const c=s[a];this.setAttribute(a,c.clone(e))}const o=t.morphAttributes;for(const a in o){const c=[],d=o[a];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(e));this.morphAttributes[a]=c}this.morphTargetsRelative=t.morphTargetsRelative;const i=t.groups;for(let a=0,c=i.length;a<c;a++){const d=i[a];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new Pe,ds=new gc,ao=new Gr,ah=new F,lo=new F,co=new F,ho=new F,Ca=new F,uo=new F,lh=new F,fo=new F;class Ze extends en{constructor(t=new tn,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,i=s.length;o<i;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,i=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(o&&l){uo.set(0,0,0);for(let h=0,a=o.length;h<a;h++){const c=l[h],d=o[h];c!==0&&(Ca.fromBufferAttribute(d,t),i?uo.addScaledVector(Ca,c):uo.addScaledVector(Ca.sub(e),c))}e.add(uo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(o),ds.copy(t.ray).recast(t.near),!(ao.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ao,ah)===null||ds.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(oh.copy(o).invert(),ds.copy(t.ray).applyMatrix4(oh),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let s;const o=this.geometry,i=this.material,l=o.index,h=o.attributes.position,a=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(l!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const v=f[x],_=i[v.materialIndex],T=Math.max(v.start,m.start),w=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=T,b=w;S<b;S+=3){const I=l.getX(S),R=l.getX(S+1),p=l.getX(S+2);s=po(this,_,t,n,a,c,d,I,R,p),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let v=x,_=y;v<_;v+=3){const T=l.getX(v),w=l.getX(v+1),S=l.getX(v+2);s=po(this,i,t,n,a,c,d,T,w,S),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const v=f[x],_=i[v.materialIndex],T=Math.max(v.start,m.start),w=Math.min(h.count,Math.min(v.start+v.count,m.start+m.count));for(let S=T,b=w;S<b;S+=3){const I=S,R=S+1,p=S+2;s=po(this,_,t,n,a,c,d,I,R,p),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let v=x,_=y;v<_;v+=3){const T=v,w=v+1,S=v+2;s=po(this,i,t,n,a,c,d,T,w,S),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}}function np(r,t,e,n,s,o,i,l){let h;if(t.side===Fn?h=n.intersectTriangle(i,o,s,!0,l):h=n.intersectTriangle(s,o,i,t.side===ns,l),h===null)return null;fo.copy(l),fo.applyMatrix4(r.matrixWorld);const a=e.ray.origin.distanceTo(fo);return a<e.near||a>e.far?null:{distance:a,point:fo.clone(),object:r}}function po(r,t,e,n,s,o,i,l,h,a){r.getVertexPosition(l,lo),r.getVertexPosition(h,co),r.getVertexPosition(a,ho);const c=np(r,t,e,n,lo,co,ho,lh);if(c){const d=new F;ei.getBarycoord(lh,lo,co,ho,d),s&&(c.uv=ei.getInterpolatedAttribute(s,l,h,a,d,new ce)),o&&(c.uv1=ei.getInterpolatedAttribute(o,l,h,a,d,new ce)),i&&(c.normal=ei.getInterpolatedAttribute(i,l,h,a,d,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a:l,b:h,c:a,normal:new F,materialIndex:0};ei.getNormal(lo,co,ho,f.normal),c.face=f,c.barycoord=d}return c}class Bi extends tn{constructor(t=1,e=1,n=1,s=1,o=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:i};const l=this;s=Math.floor(s),o=Math.floor(o),i=Math.floor(i);const h=[],a=[],c=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,n,e,t,i,o,0),x("z","y","x",1,-1,n,e,-t,i,o,1),x("x","z","y",1,1,t,n,e,s,i,2),x("x","z","y",1,-1,t,n,-e,s,i,3),x("x","y","z",1,-1,t,e,n,s,o,4),x("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(h),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(d,2));function x(y,v,_,T,w,S,b,I,R,p,u){const g=S/R,M=b/p,C=S/2,L=b/2,k=I/2,N=R+1,z=p+1;let Y=0,W=0;const J=new F;for(let et=0;et<z;et++){const _t=et*M-L;for(let Vt=0;Vt<N;Vt++){const ae=Vt*g-C;J[y]=ae*T,J[v]=_t*w,J[_]=k,a.push(J.x,J.y,J.z),J[y]=0,J[v]=0,J[_]=I>0?1:-1,c.push(J.x,J.y,J.z),d.push(Vt/R),d.push(1-et/p),Y+=1}}for(let et=0;et<p;et++)for(let _t=0;_t<R;_t++){const Vt=f+_t+N*et,ae=f+_t+N*(et+1),le=f+(_t+1)+N*(et+1),Jt=f+(_t+1)+N*et;h.push(Vt,ae,Jt),h.push(ae,le,Jt),W+=6}l.addGroup(m,W,u),m+=W,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const s=r[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Tn(r){const t={};for(let e=0;e<r.length;e++){const n=ir(r[e]);for(const s in n)t[s]=n[s]}return t}function ip(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Wd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const sp={clone:ir,merge:Tn};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const i=this.uniforms[s].value;i&&i.isTexture?e.uniforms[s]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[s]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[s]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[s]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[s]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[s]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[s]={type:"m4",value:i.toArray()}:e.uniforms[s]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qd extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new F,ch=new ce,hh=new ce;class Wn extends qd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,s,o,i){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const i=this.view;if(this.view!==null&&this.view.enabled){const h=i.fullWidth,a=i.fullHeight;o+=i.offsetX*s/h,e-=i.offsetY*n/a,s*=i.width/h,n*=i.height/a}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qs=-90,Xs=1;class ap extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wn(qs,Xs,t,e);s.layers=this.layers,this.add(s);const o=new Wn(qs,Xs,t,e);o.layers=this.layers,this.add(o);const i=new Wn(qs,Xs,t,e);i.layers=this.layers,this.add(i);const l=new Wn(qs,Xs,t,e);l.layers=this.layers,this.add(l);const h=new Wn(qs,Xs,t,e);h.layers=this.layers,this.add(h);const a=new Wn(qs,Xs,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,i,l,h]=e;for(const a of e)this.remove(a);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,i,l,h,a,c]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,i),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,a),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(d,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Xd extends Cn{constructor(t=[],e=tr,n,s,o,i,l,h,a,c){super(t,e,n,s,o,i,l,h,a,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lp extends As{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),o=new Ei({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Qi});o.uniforms.tEquirect.value=e;const i=new Ze(s,o),l=e.minFilter;return e.minFilter===bs&&(e.minFilter=vi),new ap(1,10,this).update(t,i),e.minFilter=l,i.geometry.dispose(),i.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let i=0;i<6;i++)t.setRenderTarget(this,i),t.clear(e,n,s);t.setRenderTarget(o)}}class se extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,i=null;const l=this._targetRay,h=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){i=!0;for(const y of t.hand.values()){const v=e.getJointPose(y,n),_=this._getHandJoint(a,y);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const c=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,x=.005;a.inputState.pinching&&f>m+x?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&f<=m-x&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),a!==null&&(a.visible=i!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hp extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Pa=new F,dp=new F,up=new Zt;class ms{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Pa.subVectors(n,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||up.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Gr,fp=new ce(.5,.5),mo=new F;class _c{constructor(t=new ms,e=new ms,n=new ms,s=new ms,o=new ms,i=new ms){this.planes=[t,e,n,s,o,i]}set(t,e,n,s,o,i){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(o),l[5].copy(i),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i,n=!1){const s=this.planes,o=t.elements,i=o[0],l=o[1],h=o[2],a=o[3],c=o[4],d=o[5],f=o[6],m=o[7],x=o[8],y=o[9],v=o[10],_=o[11],T=o[12],w=o[13],S=o[14],b=o[15];if(s[0].setComponents(a-i,m-c,_-x,b-T).normalize(),s[1].setComponents(a+i,m+c,_+x,b+T).normalize(),s[2].setComponents(a+l,m+d,_+y,b+w).normalize(),s[3].setComponents(a-l,m-d,_-y,b-w).normalize(),n)s[4].setComponents(h,f,v,S).normalize(),s[5].setComponents(a-h,m-f,_-v,b-S).normalize();else if(s[4].setComponents(a-h,m-f,_-v,b-S).normalize(),e===_i)s[5].setComponents(a+h,m+f,_+v,b+S).normalize();else if(e===Bo)s[5].setComponents(h,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const e=fp.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xl extends Cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ho=new F,Go=new F,dh=new Pe,gr=new gc,go=new Gr,La=new F,uh=new F;class pp extends en{constructor(t=new tn,e=new Xl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Ho.fromBufferAttribute(e,s-1),Go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ho.distanceTo(Go);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,i=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=o,t.ray.intersectsSphere(go)===!1)return;dh.copy(s).invert(),gr.copy(t.ray).applyMatrix4(dh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,i.start),x=Math.min(c.count,i.start+i.count);for(let y=m,v=x-1;y<v;y+=a){const _=c.getX(y),T=c.getX(y+1),w=vo(this,t,gr,h,_,T,y);w&&e.push(w)}if(this.isLineLoop){const y=c.getX(x-1),v=c.getX(m),_=vo(this,t,gr,h,y,v,x-1);_&&e.push(_)}}else{const m=Math.max(0,i.start),x=Math.min(f.count,i.start+i.count);for(let y=m,v=x-1;y<v;y+=a){const _=vo(this,t,gr,h,y,y+1,y);_&&e.push(_)}if(this.isLineLoop){const y=vo(this,t,gr,h,x-1,m,x-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,i=s.length;o<i;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function vo(r,t,e,n,s,o,i){const l=r.geometry.attributes.position;if(Ho.fromBufferAttribute(l,s),Go.fromBufferAttribute(l,o),e.distanceSqToSegment(Ho,Go,La,uh)>n)return;La.applyMatrix4(r.matrixWorld);const a=t.ray.origin.distanceTo(La);if(!(a<t.near||a>t.far))return{distance:a,point:uh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const fh=new F,ph=new F;class mh extends pp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)fh.fromBufferAttribute(e,s),ph.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fh.distanceTo(ph);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $l extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gh=new Pe,Yl=new gc,_o=new Gr,xo=new F;class vh extends en{constructor(t=new tn,e=new $l){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,i=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=o,t.ray.intersectsSphere(_o)===!1)return;gh.copy(s).invert(),Yl.copy(t.ray).applyMatrix4(gh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=n.index,d=n.attributes.position;if(a!==null){const f=Math.max(0,i.start),m=Math.min(a.count,i.start+i.count);for(let x=f,y=m;x<y;x++){const v=a.getX(x);xo.fromBufferAttribute(d,v),_h(xo,v,h,s,t,e,this)}}else{const f=Math.max(0,i.start),m=Math.min(d.count,i.start+i.count);for(let x=f,y=m;x<y;x++)xo.fromBufferAttribute(d,x),_h(xo,x,h,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,i=s.length;o<i;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function _h(r,t,e,n,s,o,i){const l=Yl.distanceSqToPoint(r);if(l<e){const h=new F;Yl.closestPointToPoint(r,h),h.applyMatrix4(n);const a=s.ray.origin.distanceTo(h);if(a<s.near||a>s.far)return;o.push({distance:a,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:i})}}class $d extends Cn{constructor(t,e,n,s,o,i,l,h,a){super(t,e,n,s,o,i,l,h,a),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yd extends Cn{constructor(t,e,n=Ts,s,o,i,l=$n,h=$n,a,c=Dr,d=1){if(c!==Dr&&c!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,o,i,l,h,c,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Kd extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vo extends tn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],i=[],l=[],h=[],a=new F,c=new ce;i.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*s;a.x=t*Math.cos(m),a.y=t*Math.sin(m),i.push(a.x,a.y,a.z),l.push(0,0,1),c.x=(i[f]/t+1)/2,c.y=(i[f+1]/t+1)/2,h.push(c.x,c.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new me(i,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xc extends tn{constructor(t=1,e=1,n=1,s=32,o=1,i=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:i,thetaStart:l,thetaLength:h};const a=this;s=Math.floor(s),o=Math.floor(o);const c=[],d=[],f=[],m=[];let x=0;const y=[],v=n/2;let _=0;T(),i===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function T(){const S=new F,b=new F;let I=0;const R=(e-t)/n;for(let p=0;p<=o;p++){const u=[],g=p/o,M=g*(e-t)+t;for(let C=0;C<=s;C++){const L=C/s,k=L*h+l,N=Math.sin(k),z=Math.cos(k);b.x=M*N,b.y=-g*n+v,b.z=M*z,d.push(b.x,b.y,b.z),S.set(N,R,z).normalize(),f.push(S.x,S.y,S.z),m.push(L,1-g),u.push(x++)}y.push(u)}for(let p=0;p<s;p++)for(let u=0;u<o;u++){const g=y[u][p],M=y[u+1][p],C=y[u+1][p+1],L=y[u][p+1];(t>0||u!==0)&&(c.push(g,M,L),I+=3),(e>0||u!==o-1)&&(c.push(M,C,L),I+=3)}a.addGroup(_,I,0),_+=I}function w(S){const b=x,I=new ce,R=new F;let p=0;const u=S===!0?t:e,g=S===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,v*g,0),f.push(0,g,0),m.push(.5,.5),x++;const M=x;for(let C=0;C<=s;C++){const k=C/s*h+l,N=Math.cos(k),z=Math.sin(k);R.x=u*z,R.y=v*g,R.z=u*N,d.push(R.x,R.y,R.z),f.push(0,g,0),I.x=N*.5+.5,I.y=z*.5*g+.5,m.push(I.x,I.y),x++}for(let C=0;C<s;C++){const L=b+C,k=M+C;S===!0?c.push(k,k+1,L):c.push(k+1,k,L),p+=3}a.addGroup(_,p,S===!0?1:2),_+=p}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const yo=new F,Mo=new F,Da=new F,bo=new ei;class xh extends tn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(Zs*e),i=t.getIndex(),l=t.getAttribute("position"),h=i?i.count:l.count,a=[0,0,0],c=["a","b","c"],d=new Array(3),f={},m=[];for(let x=0;x<h;x+=3){i?(a[0]=i.getX(x),a[1]=i.getX(x+1),a[2]=i.getX(x+2)):(a[0]=x,a[1]=x+1,a[2]=x+2);const{a:y,b:v,c:_}=bo;if(y.fromBufferAttribute(l,a[0]),v.fromBufferAttribute(l,a[1]),_.fromBufferAttribute(l,a[2]),bo.getNormal(Da),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){const w=(T+1)%3,S=d[T],b=d[w],I=bo[c[T]],R=bo[c[w]],p=`${S}_${b}`,u=`${b}_${S}`;u in f&&f[u]?(Da.dot(f[u].normal)<=o&&(m.push(I.x,I.y,I.z),m.push(R.x,R.y,R.z)),f[u]=null):p in f||(f[p]={index0:a[T],index1:a[w],normal:Da.clone()})}}for(const x in f)if(f[x]){const{index0:y,index1:v}=f[x];yo.fromBufferAttribute(l,y),Mo.fromBufferAttribute(l,v),m.push(yo.x,yo.y,yo.z),m.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ko extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,i=e/2,l=Math.floor(n),h=Math.floor(s),a=l+1,c=h+1,d=t/l,f=e/h,m=[],x=[],y=[],v=[];for(let _=0;_<c;_++){const T=_*f-i;for(let w=0;w<a;w++){const S=w*d-o;x.push(S,-T,0),y.push(0,0,1),v.push(w/l),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let T=0;T<l;T++){const w=T+a*_,S=T+a*(_+1),b=T+1+a*(_+1),I=T+1+a*_;m.push(w,S,I),m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.widthSegments,t.heightSegments)}}class yc extends tn{constructor(t=.5,e=1,n=32,s=1,o=0,i=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:i},n=Math.max(3,n),s=Math.max(1,s);const l=[],h=[],a=[],c=[];let d=t;const f=(e-t)/s,m=new F,x=new ce;for(let y=0;y<=s;y++){for(let v=0;v<=n;v++){const _=o+v/n*i;m.x=d*Math.cos(_),m.y=d*Math.sin(_),h.push(m.x,m.y,m.z),a.push(0,0,1),x.x=(m.x/e+1)/2,x.y=(m.y/e+1)/2,c.push(x.x,x.y)}d+=f}for(let y=0;y<s;y++){const v=y*(n+1);for(let _=0;_<n;_++){const T=_+v,w=T,S=T+n+1,b=T+n+2,I=T+1;l.push(w,S,I),l.push(S,b,I)}}this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jo extends tn{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,i=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:i,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(i+l,Math.PI);let a=0;const c=[],d=new F,f=new F,m=[],x=[],y=[],v=[];for(let _=0;_<=n;_++){const T=[],w=_/n;let S=0;_===0&&i===0?S=.5/e:_===n&&h===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const I=b/e;d.x=-t*Math.cos(s+I*o)*Math.sin(i+w*l),d.y=t*Math.cos(i+w*l),d.z=t*Math.sin(s+I*o)*Math.sin(i+w*l),x.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),v.push(I+S,1-w),T.push(a++)}c.push(T)}for(let _=0;_<n;_++)for(let T=0;T<e;T++){const w=c[_][T+1],S=c[_][T],b=c[_+1][T],I=c[_+1][T+1];(_!==0||i>0)&&m.push(w,S,I),(_!==n-1||h<Math.PI)&&m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ie extends Cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mp extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gp extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mc extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vp extends Mc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ka=new Pe,yh=new F,Mh=new F;class jd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bh=new Pe,vr=new F,Ua=new F;class _p extends jd{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(vr),Ua.copy(n.position),Ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ua),n.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,n.coordinateSystem,n.reversedDepth)}}class Na extends Mc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _p}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zd extends qd{constructor(t=-1,e=1,n=1,s=-1,o=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=i,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,i=n+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=a*this.view.offsetX,i=o+a*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(o,i,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xp extends jd{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yp extends Mc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new xp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mp extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Sh(r,t,e,n){const s=bp(n);switch(e){case Ld:return r*t;case kd:return r*t/s.components*s.byteLength;case dc:return r*t/s.components*s.byteLength;case Ud:return r*t*2/s.components*s.byteLength;case uc:return r*t*2/s.components*s.byteLength;case Dd:return r*t*3/s.components*s.byteLength;case hi:return r*t*4/s.components*s.byteLength;case fc:return r*t*4/s.components*s.byteLength;case Io:case Po:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Do:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xl:case Ml:return Math.max(r,16)*Math.max(t,8)/4;case _l:case yl:return Math.max(r,8)*Math.max(t,8)/2;case bl:case Sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bl:case zl:case Hl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Gl:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wl:case ql:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bp(r){switch(r){case Si:case Rd:return{byteLength:1,components:1};case Pr:case Cd:case Br:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case Ts:case lc:case Ni:return{byteLength:4,components:1};case Id:case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jd(){let r=null,t=!1,e=null,n=null;function s(o,i){e(o,i),n=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){r=o}}}function Sp(r){const t=new WeakMap;function e(l,h){const a=l.array,c=l.usage,d=a.byteLength,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,a,c),l.onUploadCallback();let m;if(a instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=r.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=r.SHORT;else if(a instanceof Uint32Array)m=r.UNSIGNED_INT;else if(a instanceof Int32Array)m=r.INT;else if(a instanceof Int8Array)m=r.BYTE;else if(a instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,h,a){const c=h.array,d=h.updateRanges;if(r.bindBuffer(a,l),d.length===0)r.bufferSubData(a,0,c);else{d.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<d.length;m++){const x=d[f],y=d[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,d[f]=y)}d.length=f+1;for(let m=0,x=d.length;m<x;m++){const y=d[m];r.bufferSubData(a,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(r.deleteBuffer(h.buffer),t.delete(l))}function i(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const a=t.get(l);if(a===void 0)t.set(l,e(l,h));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,h),a.version=l.version}}return{get:s,remove:o,update:i}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,bm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,L0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define LAMBERT
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
}`,H0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,W0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,X0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,j0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:wp,alphahash_pars_fragment:Ep,alphamap_fragment:Tp,alphamap_pars_fragment:Ap,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Ip,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Dp,begin_vertex:kp,beginnormal_vertex:Up,bsdfs:Np,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Gp,color_fragment:Vp,color_pars_fragment:Wp,color_pars_vertex:qp,color_vertex:Xp,common:$p,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:jp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Qp,colorspace_fragment:tm,colorspace_pars_fragment:em,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:dm,lightmap_pars_fragment:um,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:vm,lights_toon_pars_fragment:_m,lights_phong_fragment:xm,lights_phong_pars_fragment:ym,lights_physical_fragment:Mm,lights_physical_pars_fragment:bm,lights_fragment_begin:Sm,lights_fragment_maps:wm,lights_fragment_end:Em,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Im,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Dm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Um,morphinstance_vertex:Nm,morphcolor_vertex:Fm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:zm,normal_fragment_begin:Hm,normal_fragment_maps:Gm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:qm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:Km,iridescence_pars_fragment:jm,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Qm,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:o0,shadowmap_vertex:a0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:h0,skinning_vertex:d0,skinnormal_vertex:u0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:v0,transmission_pars_fragment:_0,uv_pars_fragment:x0,uv_pars_vertex:y0,uv_vertex:M0,worldpos_vertex:b0,background_vert:S0,background_frag:w0,backgroundCube_vert:E0,backgroundCube_frag:T0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:I0,distanceRGBA_vert:P0,distanceRGBA_frag:L0,equirect_vert:D0,equirect_frag:k0,linedashed_vert:U0,linedashed_frag:N0,meshbasic_vert:F0,meshbasic_frag:O0,meshlambert_vert:B0,meshlambert_frag:z0,meshmatcap_vert:H0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:q0,meshphong_frag:X0,meshphysical_vert:$0,meshphysical_frag:Y0,meshtoon_vert:K0,meshtoon_frag:j0,points_vert:Z0,points_frag:J0,shadow_vert:Q0,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},ut={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},mi={basic:{uniforms:Tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Tn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Tn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Tn([ut.points,ut.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Tn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Tn([ut.common,ut.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Tn([ut.sprite,ut.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Tn([ut.common,ut.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Tn([ut.lights,ut.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};mi.physical={uniforms:Tn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const So={r:0,b:0,g:0},fs=new wi,ig=new Pe;function sg(r,t,e,n,s,o,i){const l=new Gt(0);let h=o===!0?0:1,a,c,d=null,f=0,m=null;function x(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function y(w){let S=!1;const b=x(w);b===null?_(l,h):b&&b.isColor&&(_(b,1),S=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,i):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,i),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(w,S){const b=x(S);b&&(b.isCubeTexture||b.mapping===Yo)?(c===void 0&&(c=new Ze(new Bi(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:ir(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),fs.copy(S.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(fs)),c.material.toneMapped=pe.getTransfer(b.colorSpace)!==Se,(d!==b||f!==b.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,m=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(a===void 0&&(a=new Ze(new Ko(2,2),new Ei({name:"BackgroundMaterial",uniforms:ir(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(a)),a.material.uniforms.t2D.value=b,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.toneMapped=pe.getTransfer(b.colorSpace)!==Se,b.matrixAutoUpdate===!0&&b.updateMatrix(),a.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==r.toneMapping)&&(a.material.needsUpdate=!0,d=b,f=b.version,m=r.toneMapping),a.layers.enableAll(),w.unshift(a,a.geometry,a.material,0,0,null))}function _(w,S){w.getRGB(So,Wd(r)),n.buffers.color.setClear(So.r,So.g,So.b,S,i)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,S=1){l.set(w),h=S,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,_(l,h)},render:y,addToRenderList:v,dispose:T}}function rg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,i=!1;function l(g,M,C,L,k){let N=!1;const z=d(L,C,M);o!==z&&(o=z,a(o.object)),N=m(g,L,C,k),N&&x(g,L,C,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(N||i)&&(i=!1,S(g,M,C,L),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return r.createVertexArray()}function a(g){return r.bindVertexArray(g)}function c(g){return r.deleteVertexArray(g)}function d(g,M,C){const L=C.wireframe===!0;let k=n[g.id];k===void 0&&(k={},n[g.id]=k);let N=k[M.id];N===void 0&&(N={},k[M.id]=N);let z=N[L];return z===void 0&&(z=f(h()),N[L]=z),z}function f(g){const M=[],C=[],L=[];for(let k=0;k<e;k++)M[k]=0,C[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:L,object:g,attributes:{},index:null}}function m(g,M,C,L){const k=o.attributes,N=M.attributes;let z=0;const Y=C.getAttributes();for(const W in Y)if(Y[W].location>=0){const et=k[W];let _t=N[W];if(_t===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(_t=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(_t=g.instanceColor)),et===void 0||et.attribute!==_t||_t&&et.data!==_t.data)return!0;z++}return o.attributesNum!==z||o.index!==L}function x(g,M,C,L){const k={},N=M.attributes;let z=0;const Y=C.getAttributes();for(const W in Y)if(Y[W].location>=0){let et=N[W];et===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(et=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(et=g.instanceColor));const _t={};_t.attribute=et,et&&et.data&&(_t.data=et.data),k[W]=_t,z++}o.attributes=k,o.attributesNum=z,o.index=L}function y(){const g=o.newAttributes;for(let M=0,C=g.length;M<C;M++)g[M]=0}function v(g){_(g,0)}function _(g,M){const C=o.newAttributes,L=o.enabledAttributes,k=o.attributeDivisors;C[g]=1,L[g]===0&&(r.enableVertexAttribArray(g),L[g]=1),k[g]!==M&&(r.vertexAttribDivisor(g,M),k[g]=M)}function T(){const g=o.newAttributes,M=o.enabledAttributes;for(let C=0,L=M.length;C<L;C++)M[C]!==g[C]&&(r.disableVertexAttribArray(C),M[C]=0)}function w(g,M,C,L,k,N,z){z===!0?r.vertexAttribIPointer(g,M,C,k,N):r.vertexAttribPointer(g,M,C,L,k,N)}function S(g,M,C,L){y();const k=L.attributes,N=C.getAttributes(),z=M.defaultAttributeValues;for(const Y in N){const W=N[Y];if(W.location>=0){let J=k[Y];if(J===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),J!==void 0){const et=J.normalized,_t=J.itemSize,Vt=t.get(J);if(Vt===void 0)continue;const ae=Vt.buffer,le=Vt.type,Jt=Vt.bytesPerElement,X=le===r.INT||le===r.UNSIGNED_INT||J.gpuType===lc;if(J.isInterleavedBufferAttribute){const K=J.data,nt=K.stride,Tt=J.offset;if(K.isInstancedInterleavedBuffer){for(let ft=0;ft<W.locationSize;ft++)_(W.location+ft,K.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ft=0;ft<W.locationSize;ft++)v(W.location+ft);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let ft=0;ft<W.locationSize;ft++)w(W.location+ft,_t/W.locationSize,le,et,nt*Jt,(Tt+_t/W.locationSize*ft)*Jt,X)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)_(W.location+K,J.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<W.locationSize;K++)v(W.location+K);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let K=0;K<W.locationSize;K++)w(W.location+K,_t/W.locationSize,le,et,_t*Jt,_t/W.locationSize*K*Jt,X)}}else if(z!==void 0){const et=z[Y];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(W.location,et);break;case 3:r.vertexAttrib3fv(W.location,et);break;case 4:r.vertexAttrib4fv(W.location,et);break;default:r.vertexAttrib1fv(W.location,et)}}}}T()}function b(){p();for(const g in n){const M=n[g];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g.id]}function R(g){for(const M in n){const C=n[M];if(C[g.id]===void 0)continue;const L=C[g.id];for(const k in L)c(L[k].object),delete L[k];delete C[g.id]}}function p(){u(),i=!0,o!==s&&(o=s,a(o.object))}function u(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:p,resetDefaultState:u,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:v,disableUnusedAttributes:T}}function og(r,t,e){let n;function s(a){n=a}function o(a,c){r.drawArrays(n,a,c),e.update(c,n,1)}function i(a,c,d){d!==0&&(r.drawArraysInstanced(n,a,c,d),e.update(c,n,d))}function l(a,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,d);let m=0;for(let x=0;x<d;x++)m+=c[x];e.update(m,n,1)}function h(a,c,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<a.length;x++)i(a[x],c[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,a,0,c,0,f,0,d);let x=0;for(let y=0;y<d;y++)x+=c[y]*f[y];e.update(x,n,1)}}this.setMode=s,this.render=o,this.renderInstances=i,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function ag(r,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function i(R){return!(R!==hi&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const p=R===Br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Si&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ni&&!p)}function h(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const c=h(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:i,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:b,maxSamples:I}}function lg(r){const t=this;let e=null,n=0,s=!1,o=!1;const i=new ms,l=new Zt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){e=c(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,_=r.get(d);if(!s||x===null||x.length===0||o&&!v)o?c(null):a();else{const T=o?0:n,w=T*4;let S=_.clippingState||null;h.value=S,S=c(x,f,w,m);for(let b=0;b!==w;++b)S[b]=e[b];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function a(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,f,m,x){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=h.value,x!==!0||v===null){const _=m+y*4,T=f.matrixWorldInverse;l.getNormalMatrix(T),(v===null||v.length<_)&&(v=new Float32Array(_));for(let w=0,S=m;w!==y;++w,S+=4)i.copy(d[w]).applyMatrix4(T,l),i.normal.toArray(v,S),v[S+3]=i.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,v}}function cg(r){let t=new WeakMap;function e(i,l){return l===pl?i.mapping=tr:l===ml&&(i.mapping=er),i}function n(i){if(i&&i.isTexture){const l=i.mapping;if(l===pl||l===ml)if(t.has(i)){const h=t.get(i).texture;return e(h,i.mapping)}else{const h=i.image;if(h&&h.height>0){const a=new lp(h.height);return a.fromEquirectangularTexture(r,i),t.set(i,a),i.addEventListener("dispose",s),e(a.texture,i.mapping)}else return null}}return i}function s(i){const l=i.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Ks=4,wh=[.125,.215,.35,.446,.526,.582],xs=20,Fa=new Zd,Eh=new Gt;let Oa=null,Ba=0,za=0,Ha=!1;const gs=(1+Math.sqrt(5))/2,$s=1/gs,Th=[new F(-gs,$s,0),new F(gs,$s,0),new F(-$s,0,gs),new F($s,0,gs),new F(0,gs,-$s),new F(0,gs,$s),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],hg=new F;class Ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:i=256,position:l=hg}=o;Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(i);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,Ba,za),this._renderer.xr.enabled=Ha,t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Br,format:hi,colorSpace:nr,depthBuffer:!1},s=Rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(o)),this._blurMaterial=ug(o,t,e)}return s}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s,o){const h=new Wn(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Eh),d.toneMapping=ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const y=new pi({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),v=new Ze(new Bi,y);let _=!1;const T=t.background;T?T.isColor&&(y.color.copy(T),t.background=null,_=!0):(y.color.copy(Eh),_=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(h.up.set(0,a[w],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+c[w],o.y,o.z)):S===1?(h.up.set(0,0,a[w]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+c[w],o.z)):(h.up.set(0,a[w],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+c[w]));const b=this._cubeSize;wo(s,S*b,w>2?b:0,b,b),d.setRenderTarget(s),_&&d.render(v,h),d.render(t,h)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===tr||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const o=s?this._cubemapMaterial:this._equirectMaterial,i=new Ze(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const h=this._cubeSize;wo(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(i,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const i=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Th[(s-o-1)%Th.length];this._blur(t,o-1,o,i,l)}e.autoClear=n}_blur(t,e,n,s,o){const i=this._pingPongRenderTarget;this._halfBlur(t,i,e,n,s,"latitudinal",o),this._halfBlur(i,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,i,l){const h=this._renderer,a=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ze(this._lodPlanes[s],a),f=a.uniforms,m=this._sizeLods[n]-1,x=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*xs-1),y=o/x,v=isFinite(o)?1+Math.floor(c*y):xs;v>xs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${xs}`);const _=[];let T=0;for(let R=0;R<xs;++R){const p=R/y,u=Math.exp(-p*p/2);_.push(u),R===0?T+=u:R<v&&(T+=2*u)}for(let R=0;R<_.length;R++)_[R]=_[R]/T;f.envMap.value=t.texture,f.samples.value=v,f.weights.value=_,f.latitudinal.value=i==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-n;const S=this._sizeLods[s],b=3*S*(s>w-Ks?s-w+Ks:0),I=4*(this._cubeSize-S);wo(e,b,I,3*S,2*S),h.setRenderTarget(e),h.render(d,Fa)}}function dg(r){const t=[],e=[],n=[];let s=r;const o=r-Ks+1+wh.length;for(let i=0;i<o;i++){const l=Math.pow(2,s);e.push(l);let h=1/l;i>r-Ks?h=wh[i-r+Ks-1]:i===0&&(h=0),n.push(h);const a=1/(l-2),c=-a,d=1+a,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,x=6,y=3,v=2,_=1,T=new Float32Array(y*x*m),w=new Float32Array(v*x*m),S=new Float32Array(_*x*m);for(let I=0;I<m;I++){const R=I%3*2/3-1,p=I>2?0:-1,u=[R,p,0,R+2/3,p,0,R+2/3,p+1,0,R,p,0,R+2/3,p+1,0,R,p+1,0];T.set(u,y*x*I),w.set(f,v*x*I);const g=[I,I,I,I,I,I];S.set(g,_*x*I)}const b=new tn;b.setAttribute("position",new Mi(T,y)),b.setAttribute("uv",new Mi(w,v)),b.setAttribute("faceIndex",new Mi(S,_)),t.push(b),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rh(r,t,e){const n=new As(r,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(r,t,e,n,s){r.viewport.set(t,e,n,s),r.scissor.set(t,e,n,s)}function ug(r,t,e){const n=new Float32Array(xs),s=new F(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ch(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ih(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function fg(r){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,a=h===pl||h===ml,c=h===tr||h===er;if(a||c){let d=t.get(l);const f=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new Ah(r)),d=a?e.fromEquirectangular(l,d):e.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const m=l.image;return a&&m&&m.height>0||c&&m&&s(m)?(e===null&&(e=new Ah(r)),d=a?e.fromEquirectangular(l):e.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",o),d.texture):null}}}return l}function s(l){let h=0;const a=6;for(let c=0;c<a;c++)l[c]!==void 0&&h++;return h===a}function o(l){const h=l.target;h.removeEventListener("dispose",o);const a=t.get(h);a!==void 0&&(t.delete(h),a.dispose())}function i(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:i}}function pg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mg(r,t,e,n){const s={},o=new WeakMap;function i(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",i),delete s[f.id];const m=o.get(f);m&&(t.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(d,f){return s[f.id]===!0||(f.addEventListener("dispose",i),s[f.id]=!0,e.memory.geometries++),f}function h(d){const f=d.attributes;for(const m in f)t.update(f[m],r.ARRAY_BUFFER)}function a(d){const f=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const T=m.array;y=m.version;for(let w=0,S=T.length;w<S;w+=3){const b=T[w+0],I=T[w+1],R=T[w+2];f.push(b,I,I,R,R,b)}}else if(x!==void 0){const T=x.array;y=x.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const b=w+0,I=w+1,R=w+2;f.push(b,I,I,R,R,b)}}else return;const v=new(Od(f)?Vd:Gd)(f,1);v.version=y;const _=o.get(d);_&&t.remove(_),o.set(d,v)}function c(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&a(d)}else a(d);return o.get(d)}return{get:l,update:h,getWireframeAttribute:c}}function gg(r,t,e){let n;function s(f){n=f}let o,i;function l(f){o=f.type,i=f.bytesPerElement}function h(f,m){r.drawElements(n,m,o,f*i),e.update(m,n,1)}function a(f,m,x){x!==0&&(r.drawElementsInstanced(n,m,o,f*i,x),e.update(m,n,x))}function c(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,x);let v=0;for(let _=0;_<x;_++)v+=m[_];e.update(v,n,1)}function d(f,m,x,y){if(x===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<f.length;_++)a(f[_]/i,m[_],y[_]);else{v.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,y,0,x);let _=0;for(let T=0;T<x;T++)_+=m[T]*y[T];e.update(_,n,1)}}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function vg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,i,l){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=l*(o/3);break;case r.LINES:e.lines+=l*(o/2);break;case r.LINE_STRIP:e.lines+=l*(o-1);break;case r.LINE_LOOP:e.lines+=l*o;break;case r.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(r,t,e){const n=new WeakMap,s=new we;function o(i,l,h){const a=i.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=c!==void 0?c.length:0;let f=n.get(l);if(f===void 0||f.count!==d){let g=function(){p.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var m=g;f!==void 0&&f.texture.dispose();const x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],T=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),v===!0&&(S=3);let b=l.attributes.position.count*S,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*I*4*d),p=new Bd(R,b,I,d);p.type=Ni,p.needsUpdate=!0;const u=S*4;for(let M=0;M<d;M++){const C=_[M],L=T[M],k=w[M],N=b*I*4*M;for(let z=0;z<C.count;z++){const Y=z*u;x===!0&&(s.fromBufferAttribute(C,z),R[N+Y+0]=s.x,R[N+Y+1]=s.y,R[N+Y+2]=s.z,R[N+Y+3]=0),y===!0&&(s.fromBufferAttribute(L,z),R[N+Y+4]=s.x,R[N+Y+5]=s.y,R[N+Y+6]=s.z,R[N+Y+7]=0),v===!0&&(s.fromBufferAttribute(k,z),R[N+Y+8]=s.x,R[N+Y+9]=s.y,R[N+Y+10]=s.z,R[N+Y+11]=k.itemSize===4?s.w:1)}}f={count:d,texture:p,size:new ce(b,I)},n.set(l,f),l.addEventListener("dispose",g)}if(i.isInstancedMesh===!0&&i.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",i.morphTexture,e);else{let x=0;for(let v=0;v<a.length;v++)x+=a[v];const y=l.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",a)}h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:o}}function xg(r,t,e,n){let s=new WeakMap;function o(h){const a=n.render.frame,c=h.geometry,d=t.get(h,c);if(s.get(d)!==a&&(t.update(d),s.set(d,a)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==a&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,a))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==a&&(f.update(),s.set(f,a))}return d}function i(){s=new WeakMap}function l(h){const a=h.target;a.removeEventListener("dispose",l),e.remove(a.instanceMatrix),a.instanceColor!==null&&e.remove(a.instanceColor)}return{update:o,dispose:i}}const Qd=new Cn,Ph=new Yd(1,1),tu=new Bd,eu=new qf,nu=new Xd,Lh=[],Dh=[],kh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function ar(r,t,e){const n=r[0];if(n<=0||n>0)return r;const s=t*e;let o=Lh[s];if(o===void 0&&(o=new Float32Array(s),Lh[s]=o),t!==0){n.toArray(o,0);for(let i=1,l=0;i!==t;++i)l+=e,r[i].toArray(o,l)}return o}function nn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Zo(r,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function yg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function Sg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function wg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Nh.set(n),r.uniformMatrix2fv(this.addr,!1,Nh),sn(e,n)}}function Eg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Uh.set(n),r.uniformMatrix3fv(this.addr,!1,Uh),sn(e,n)}}function Tg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;kh.set(n),r.uniformMatrix4fv(this.addr,!1,kh),sn(e,n)}}function Ag(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function Cg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function Ig(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function Pg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function Dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function kg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function Ug(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let o;this.type===r.SAMPLER_2D_SHADOW?(Ph.compareFunction=Fd,o=Ph):o=Qd,e.setTexture2D(t||o,s)}function Ng(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eu,s)}function Fg(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nu,s)}function Og(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tu,s)}function Bg(r){switch(r){case 5126:return yg;case 35664:return Mg;case 35665:return bg;case 35666:return Sg;case 35674:return wg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Ig;case 5125:return Pg;case 36294:return Lg;case 36295:return Dg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function zg(r,t){r.uniform1fv(this.addr,t)}function Hg(r,t){const e=ar(t,this.size,2);r.uniform2fv(this.addr,e)}function Gg(r,t){const e=ar(t,this.size,3);r.uniform3fv(this.addr,e)}function Vg(r,t){const e=ar(t,this.size,4);r.uniform4fv(this.addr,e)}function Wg(r,t){const e=ar(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function qg(r,t){const e=ar(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Xg(r,t){const e=ar(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function $g(r,t){r.uniform1iv(this.addr,t)}function Yg(r,t){r.uniform2iv(this.addr,t)}function Kg(r,t){r.uniform3iv(this.addr,t)}function jg(r,t){r.uniform4iv(this.addr,t)}function Zg(r,t){r.uniform1uiv(this.addr,t)}function Jg(r,t){r.uniform2uiv(this.addr,t)}function Qg(r,t){r.uniform3uiv(this.addr,t)}function t1(r,t){r.uniform4uiv(this.addr,t)}function e1(r,t,e){const n=this.cache,s=t.length,o=Zo(e,s);nn(n,o)||(r.uniform1iv(this.addr,o),sn(n,o));for(let i=0;i!==s;++i)e.setTexture2D(t[i]||Qd,o[i])}function n1(r,t,e){const n=this.cache,s=t.length,o=Zo(e,s);nn(n,o)||(r.uniform1iv(this.addr,o),sn(n,o));for(let i=0;i!==s;++i)e.setTexture3D(t[i]||eu,o[i])}function i1(r,t,e){const n=this.cache,s=t.length,o=Zo(e,s);nn(n,o)||(r.uniform1iv(this.addr,o),sn(n,o));for(let i=0;i!==s;++i)e.setTextureCube(t[i]||nu,o[i])}function s1(r,t,e){const n=this.cache,s=t.length,o=Zo(e,s);nn(n,o)||(r.uniform1iv(this.addr,o),sn(n,o));for(let i=0;i!==s;++i)e.setTexture2DArray(t[i]||tu,o[i])}function r1(r){switch(r){case 5126:return zg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return qg;case 35676:return Xg;case 5124:case 35670:return $g;case 35667:case 35671:return Yg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Zg;case 36294:return Jg;case 36295:return Qg;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return s1}}class o1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}}class a1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r1(e.type)}}class l1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,i=s.length;o!==i;++o){const l=s[o];l.setValue(t,e[l.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Fh(r,t){r.seq.push(t),r.map[t.id]=t}function c1(r,t,e){const n=r.name,s=n.length;for(Ga.lastIndex=0;;){const o=Ga.exec(n),i=Ga.lastIndex;let l=o[1];const h=o[2]==="]",a=o[3];if(h&&(l=l|0),a===void 0||a==="["&&i+2===s){Fh(e,a===void 0?new o1(l,r,t):new a1(l,r,t));break}else{let d=e.map[l];d===void 0&&(d=new l1(l),Fh(e,d)),e=d}}}class ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),i=t.getUniformLocation(e,o.name);c1(o,i,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,i=e.length;o!==i;++o){const l=e[o],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const i=t[s];i.id in e&&n.push(i)}return n}}function Oh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const h1=37297;let d1=0;function u1(r,t){const e=r.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let i=s;i<o;i++){const l=i+1;n.push(`${l===t?">":" "} ${l}: ${e[i]}`)}return n.join(`
`)}const Bh=new Zt;function f1(r){pe._getMatrix(Bh,pe.workingColorSpace,r);const t=`mat3( ${Bh.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(r)){case Oo:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function zh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),o=(r.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const i=/ERROR: 0:(\d+)/.exec(o);if(i){const l=parseInt(i[1]);return e.toUpperCase()+`

`+o+`

`+u1(r.getShaderSource(t),l)}else return o}function p1(r,t){const e=f1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function m1(r,t){let e;switch(t){case sf:e="Linear";break;case rf:e="Reinhard";break;case of:e="Cineon";break;case af:e="ACESFilmic";break;case cf:e="AgX";break;case hf:e="Neutral";break;case lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Eo=new F;function g1(){pe.getLuminanceCoefficients(Eo);const r=Eo.x.toFixed(4),t=Eo.y.toFixed(4),e=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function _1(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x1(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=r.getActiveAttrib(t,s),i=o.name;let l=1;o.type===r.FLOAT_MAT2&&(l=2),o.type===r.FLOAT_MAT3&&(l=3),o.type===r.FLOAT_MAT4&&(l=4),e[i]={type:o.type,location:r.getAttribLocation(t,i),locationSize:l}}return e}function br(r){return r!==""}function Hh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(r){return r.replace(y1,b1)}const M1=new Map;function b1(r,t){let e=Qt[t];if(e===void 0){const n=M1.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(r){return r.replace(S1,w1)}function w1(r,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Wh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function E1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Nu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function T1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function A1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function R1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ac:t="ENVMAP_BLENDING_MULTIPLY";break;case ef:t="ENVMAP_BLENDING_MIX";break;case nf:t="ENVMAP_BLENDING_ADD";break}return t}function C1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I1(r,t,e,n){const s=r.getContext(),o=e.defines;let i=e.vertexShader,l=e.fragmentShader;const h=E1(e),a=T1(e),c=A1(e),d=R1(e),f=C1(e),m=v1(e),x=_1(o),y=s.createProgram();let v,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(br).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(br).join(`
`),_.length>0&&(_+=`
`)):(v=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),_=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ts?"#define TONE_MAPPING":"",e.toneMapping!==ts?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ts?m1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,p1("linearToOutputTexel",e.outputColorSpace),g1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),i=Kl(i),i=Hh(i,e),i=Gh(i,e),l=Kl(l),l=Hh(l,e),l=Gh(l,e),i=Vh(i),l=Vh(l),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=T+v+i,S=T+_+l,b=Oh(s,s.VERTEX_SHADER,w),I=Oh(s,s.FRAGMENT_SHADER,S);s.attachShader(y,b),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(M){if(r.debug.checkShaderErrors){const C=s.getProgramInfoLog(y)||"",L=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(I)||"",N=C.trim(),z=L.trim(),Y=k.trim();let W=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,y,b,I);else{const et=zh(s,b,"vertex"),_t=zh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+N+`
`+et+`
`+_t)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||Y==="")&&(J=!1);J&&(M.diagnostics={runnable:W,programLog:N,vertexShader:{log:z,prefix:v},fragmentShader:{log:Y,prefix:_}})}s.deleteShader(b),s.deleteShader(I),p=new ko(s,y),u=x1(s,y)}let p;this.getUniforms=function(){return p===void 0&&R(this),p};let u;this.getAttributes=function(){return u===void 0&&R(this),u};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(y,h1)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=I,this}let P1=0;class L1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),i=this._getShaderCacheForMaterial(t);return i.has(s)===!1&&(i.add(s),s.usedTimes++),i.has(o)===!1&&(i.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new D1(t),e.set(t,n)),n}}class D1{constructor(t){this.id=P1++,this.code=t,this.usedTimes=0}}function k1(r,t,e,n,s,o,i){const l=new zd,h=new L1,a=new Set,c=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(u){return a.add(u),u===0?"uv":`uv${u}`}function v(u,g,M,C,L){const k=C.fog,N=L.geometry,z=u.isMeshStandardMaterial?C.environment:null,Y=(u.isMeshStandardMaterial?e:t).get(u.envMap||z),W=Y&&Y.mapping===Yo?Y.image.height:null,J=x[u.type];u.precision!==null&&(m=s.getMaxPrecision(u.precision),m!==u.precision&&console.warn("THREE.WebGLProgram.getParameters:",u.precision,"not supported, using",m,"instead."));const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,_t=et!==void 0?et.length:0;let Vt=0;N.morphAttributes.position!==void 0&&(Vt=1),N.morphAttributes.normal!==void 0&&(Vt=2),N.morphAttributes.color!==void 0&&(Vt=3);let ae,le,Jt,X;if(J){const ge=mi[J];ae=ge.vertexShader,le=ge.fragmentShader}else ae=u.vertexShader,le=u.fragmentShader,h.update(u),Jt=h.getVertexShaderID(u),X=h.getFragmentShaderID(u);const K=r.getRenderTarget(),nt=r.state.buffers.depth.getReversed(),Tt=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,Wt=!!u.map,Te=!!u.matcap,D=!!Y,ue=!!u.aoMap,It=!!u.lightMap,kt=!!u.bumpMap,xt=!!u.normalMap,he=!!u.displacementMap,yt=!!u.emissiveMap,$t=!!u.metalnessMap,rn=!!u.roughnessMap,Oe=u.anisotropy>0,P=u.clearcoat>0,E=u.dispersion>0,V=u.iridescence>0,Z=u.sheen>0,it=u.transmission>0,j=Oe&&!!u.anisotropyMap,Ut=P&&!!u.clearcoatMap,lt=P&&!!u.clearcoatNormalMap,Pt=P&&!!u.clearcoatRoughnessMap,Lt=V&&!!u.iridescenceMap,ot=V&&!!u.iridescenceThicknessMap,vt=Z&&!!u.sheenColorMap,zt=Z&&!!u.sheenRoughnessMap,Dt=!!u.specularMap,pt=!!u.specularColorMap,jt=!!u.specularIntensityMap,O=it&&!!u.transmissionMap,at=it&&!!u.thicknessMap,ht=!!u.gradientMap,wt=!!u.alphaMap,st=u.alphaTest>0,tt=!!u.alphaHash,At=!!u.extensions;let Xt=ts;u.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=r.toneMapping);const Ae={shaderID:J,shaderType:u.type,shaderName:u.name,vertexShader:ae,fragmentShader:le,defines:u.defines,customVertexShaderID:Jt,customFragmentShaderID:X,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:m,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&L.instanceColor!==null,instancingMorph:Tt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:nr,alphaToCoverage:!!u.alphaToCoverage,map:Wt,matcap:Te,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:W,aoMap:ue,lightMap:It,bumpMap:kt,normalMap:xt,displacementMap:f&&he,emissiveMap:yt,normalMapObjectSpace:xt&&u.normalMapType===pf,normalMapTangentSpace:xt&&u.normalMapType===Nd,metalnessMap:$t,roughnessMap:rn,anisotropy:Oe,anisotropyMap:j,clearcoat:P,clearcoatMap:Ut,clearcoatNormalMap:lt,clearcoatRoughnessMap:Pt,dispersion:E,iridescence:V,iridescenceMap:Lt,iridescenceThicknessMap:ot,sheen:Z,sheenColorMap:vt,sheenRoughnessMap:zt,specularMap:Dt,specularColorMap:pt,specularIntensityMap:jt,transmission:it,transmissionMap:O,thicknessMap:at,gradientMap:ht,opaque:u.transparent===!1&&u.blending===js&&u.alphaToCoverage===!1,alphaMap:wt,alphaTest:st,alphaHash:tt,combine:u.combine,mapUv:Wt&&y(u.map.channel),aoMapUv:ue&&y(u.aoMap.channel),lightMapUv:It&&y(u.lightMap.channel),bumpMapUv:kt&&y(u.bumpMap.channel),normalMapUv:xt&&y(u.normalMap.channel),displacementMapUv:he&&y(u.displacementMap.channel),emissiveMapUv:yt&&y(u.emissiveMap.channel),metalnessMapUv:$t&&y(u.metalnessMap.channel),roughnessMapUv:rn&&y(u.roughnessMap.channel),anisotropyMapUv:j&&y(u.anisotropyMap.channel),clearcoatMapUv:Ut&&y(u.clearcoatMap.channel),clearcoatNormalMapUv:lt&&y(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&y(u.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&y(u.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(u.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&y(u.sheenColorMap.channel),sheenRoughnessMapUv:zt&&y(u.sheenRoughnessMap.channel),specularMapUv:Dt&&y(u.specularMap.channel),specularColorMapUv:pt&&y(u.specularColorMap.channel),specularIntensityMapUv:jt&&y(u.specularIntensityMap.channel),transmissionMapUv:O&&y(u.transmissionMap.channel),thicknessMapUv:at&&y(u.thicknessMap.channel),alphaMapUv:wt&&y(u.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||Oe),vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Wt||wt),fog:!!k,useFog:u.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:u.flatShading===!0&&u.wireframe===!1,sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:nt,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Vt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:u.dithering,shadowMapEnabled:r.shadowMap.enabled&&M.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Wt&&u.map.isVideoTexture===!0&&pe.getTransfer(u.map.colorSpace)===Se,decodeVideoTextureEmissive:yt&&u.emissiveMap.isVideoTexture===!0&&pe.getTransfer(u.emissiveMap.colorSpace)===Se,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===Xe,flipSided:u.side===Fn,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:At&&u.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&u.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};return Ae.vertexUv1s=a.has(1),Ae.vertexUv2s=a.has(2),Ae.vertexUv3s=a.has(3),a.clear(),Ae}function _(u){const g=[];if(u.shaderID?g.push(u.shaderID):(g.push(u.customVertexShaderID),g.push(u.customFragmentShaderID)),u.defines!==void 0)for(const M in u.defines)g.push(M),g.push(u.defines[M]);return u.isRawShaderMaterial===!1&&(T(g,u),w(g,u),g.push(r.outputColorSpace)),g.push(u.customProgramCacheKey),g.join()}function T(u,g){u.push(g.precision),u.push(g.outputColorSpace),u.push(g.envMapMode),u.push(g.envMapCubeUVHeight),u.push(g.mapUv),u.push(g.alphaMapUv),u.push(g.lightMapUv),u.push(g.aoMapUv),u.push(g.bumpMapUv),u.push(g.normalMapUv),u.push(g.displacementMapUv),u.push(g.emissiveMapUv),u.push(g.metalnessMapUv),u.push(g.roughnessMapUv),u.push(g.anisotropyMapUv),u.push(g.clearcoatMapUv),u.push(g.clearcoatNormalMapUv),u.push(g.clearcoatRoughnessMapUv),u.push(g.iridescenceMapUv),u.push(g.iridescenceThicknessMapUv),u.push(g.sheenColorMapUv),u.push(g.sheenRoughnessMapUv),u.push(g.specularMapUv),u.push(g.specularColorMapUv),u.push(g.specularIntensityMapUv),u.push(g.transmissionMapUv),u.push(g.thicknessMapUv),u.push(g.combine),u.push(g.fogExp2),u.push(g.sizeAttenuation),u.push(g.morphTargetsCount),u.push(g.morphAttributeCount),u.push(g.numDirLights),u.push(g.numPointLights),u.push(g.numSpotLights),u.push(g.numSpotLightMaps),u.push(g.numHemiLights),u.push(g.numRectAreaLights),u.push(g.numDirLightShadows),u.push(g.numPointLightShadows),u.push(g.numSpotLightShadows),u.push(g.numSpotLightShadowsWithMaps),u.push(g.numLightProbes),u.push(g.shadowMapType),u.push(g.toneMapping),u.push(g.numClippingPlanes),u.push(g.numClipIntersection),u.push(g.depthPacking)}function w(u,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),g.gradientMap&&l.enable(22),u.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.reversedDepthBuffer&&l.enable(4),g.skinning&&l.enable(5),g.morphTargets&&l.enable(6),g.morphNormals&&l.enable(7),g.morphColors&&l.enable(8),g.premultipliedAlpha&&l.enable(9),g.shadowMapEnabled&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),g.decodeVideoTextureEmissive&&l.enable(20),g.alphaToCoverage&&l.enable(21),u.push(l.mask)}function S(u){const g=x[u.type];let M;if(g){const C=mi[g];M=sp.clone(C.uniforms)}else M=u.uniforms;return M}function b(u,g){let M;for(let C=0,L=c.length;C<L;C++){const k=c[C];if(k.cacheKey===g){M=k,++M.usedTimes;break}}return M===void 0&&(M=new I1(r,g,u,o),c.push(M)),M}function I(u){if(--u.usedTimes===0){const g=c.indexOf(u);c[g]=c[c.length-1],c.pop(),u.destroy()}}function R(u){h.remove(u)}function p(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:S,acquireProgram:b,releaseProgram:I,releaseShaderCache:R,programs:c,dispose:p}}function U1(){let r=new WeakMap;function t(i){return r.has(i)}function e(i){let l=r.get(i);return l===void 0&&(l={},r.set(i,l)),l}function n(i){r.delete(i)}function s(i,l,h){r.get(i)[l]=h}function o(){r=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function N1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function qh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Xh(){const r=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function i(d,f,m,x,y,v){let _=r[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:v},r[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=y,_.group=v),t++,_}function l(d,f,m,x,y,v){const _=i(d,f,m,x,y,v);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):e.push(_)}function h(d,f,m,x,y,v){const _=i(d,f,m,x,y,v);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function a(d,f){e.length>1&&e.sort(d||N1),n.length>1&&n.sort(f||qh),s.length>1&&s.sort(f||qh)}function c(){for(let d=t,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:h,finish:c,sort:a}}function F1(){let r=new WeakMap;function t(n,s){const o=r.get(n);let i;return o===void 0?(i=new Xh,r.set(n,[i])):s>=o.length?(i=new Xh,o.push(i)):i=o[s],i}function e(){r=new WeakMap}return{get:t,dispose:e}}function O1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Gt};break;case"SpotLight":e={position:new F,direction:new F,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function B1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let z1=0;function H1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function G1(r){const t=new O1,e=B1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new F);const s=new F,o=new Pe,i=new Pe;function l(a){let c=0,d=0,f=0;for(let u=0;u<9;u++)n.probe[u].set(0,0,0);let m=0,x=0,y=0,v=0,_=0,T=0,w=0,S=0,b=0,I=0,R=0;a.sort(H1);for(let u=0,g=a.length;u<g;u++){const M=a[u],C=M.color,L=M.intensity,k=M.distance,N=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=C.r*L,d+=C.g*L,f+=C.b*L;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],L);R++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,W=e.get(M);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=M.shadow.matrix,T++}n.directional[m]=z,m++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(C).multiplyScalar(L),z.distance=k,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[y]=z;const Y=M.shadow;if(M.map&&(n.spotLightMap[b]=M.map,b++,Y.updateMatrices(M),M.castShadow&&I++),n.spotLightMatrix[y]=Y.matrix,M.castShadow){const W=e.get(M);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=N,S++}y++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(C).multiplyScalar(L),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[v]=z,v++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const Y=M.shadow,W=e.get(M);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=N,n.pointShadowMatrix[x]=M.shadow.matrix,w++}n.point[x]=z,x++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(L),z.groundColor.copy(M.groundColor).multiplyScalar(L),n.hemi[_]=z,_++}}v>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;const p=n.hash;(p.directionalLength!==m||p.pointLength!==x||p.spotLength!==y||p.rectAreaLength!==v||p.hemiLength!==_||p.numDirectionalShadows!==T||p.numPointShadows!==w||p.numSpotShadows!==S||p.numSpotMaps!==b||p.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=v,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,p.directionalLength=m,p.pointLength=x,p.spotLength=y,p.rectAreaLength=v,p.hemiLength=_,p.numDirectionalShadows=T,p.numPointShadows=w,p.numSpotShadows=S,p.numSpotMaps=b,p.numLightProbes=R,n.version=z1++)}function h(a,c){let d=0,f=0,m=0,x=0,y=0;const v=c.matrixWorldInverse;for(let _=0,T=a.length;_<T;_++){const w=a[_];if(w.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),d++}else if(w.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),m++}else if(w.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),i.identity(),o.copy(w.matrixWorld),o.premultiply(v),i.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(i),S.halfHeight.applyMatrix4(i),x++}else if(w.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),f++}else if(w.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(v),y++}}}return{setup:l,setupView:h,state:n}}function $h(r){const t=new G1(r),e=[],n=[];function s(c){a.camera=c,e.length=0,n.length=0}function o(c){e.push(c)}function i(c){n.push(c)}function l(){t.setup(e)}function h(c){t.setupView(e,c)}const a={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:a,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:i}}function V1(r){let t=new WeakMap;function e(s,o=0){const i=t.get(s);let l;return i===void 0?(l=new $h(r),t.set(s,[l])):o>=i.length?(l=new $h(r),i.push(l)):l=i[o],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q1=`uniform sampler2D shadow_pass;
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
}`;function X1(r,t,e){let n=new _c;const s=new ce,o=new ce,i=new we,l=new mp({depthPacking:ff}),h=new gp,a={},c=e.maxTextureSize,d={[ns]:Fn,[Fn]:ns,[Xe]:Xe},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:W1,fragmentShader:q1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new tn;x.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ze(x,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let _=this.type;this.render=function(I,R,p){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const u=r.getRenderTarget(),g=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),C=r.state;C.setBlending(Qi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=_!==Li&&this.type===Li,k=_===Li&&this.type!==Li;for(let N=0,z=I.length;N<z;N++){const Y=I[N],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const J=W.getFrameExtents();if(s.multiply(J),o.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/J.x),s.x=o.x*J.x,W.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/J.y),s.y=o.y*J.y,W.mapSize.y=o.y)),W.map===null||L===!0||k===!0){const _t=this.type!==Li?{minFilter:$n,magFilter:$n}:{};W.map!==null&&W.map.dispose(),W.map=new As(s.x,s.y,_t),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const et=W.getViewportCount();for(let _t=0;_t<et;_t++){const Vt=W.getViewport(_t);i.set(o.x*Vt.x,o.y*Vt.y,o.x*Vt.z,o.y*Vt.w),C.viewport(i),W.updateMatrices(Y,_t),n=W.getFrustum(),S(R,p,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Li&&T(W,p),W.needsUpdate=!1}_=this.type,v.needsUpdate=!1,r.setRenderTarget(u,g,M)};function T(I,R){const p=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new As(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(R,null,p,f,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(R,null,p,m,y,null)}function w(I,R,p,u){let g=null;const M=p.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(M!==void 0)g=M;else if(g=p.isPointLight===!0?h:l,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const C=g.uuid,L=R.uuid;let k=a[C];k===void 0&&(k={},a[C]=k);let N=k[L];N===void 0&&(N=g.clone(),k[L]=N,R.addEventListener("dispose",b)),g=N}if(g.visible=R.visible,g.wireframe=R.wireframe,u===Li?g.side=R.shadowSide!==null?R.shadowSide:R.side:g.side=R.shadowSide!==null?R.shadowSide:d[R.side],g.alphaMap=R.alphaMap,g.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,p.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const C=r.properties.get(g);C.light=p}return g}function S(I,R,p,u,g){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===Li)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,I.matrixWorld);const L=t.update(I),k=I.material;if(Array.isArray(k)){const N=L.groups;for(let z=0,Y=N.length;z<Y;z++){const W=N[z],J=k[W.materialIndex];if(J&&J.visible){const et=w(I,J,u,g);I.onBeforeShadow(r,I,R,p,L,et,W),r.renderBufferDirect(p,null,L,et,I,W),I.onAfterShadow(r,I,R,p,L,et,W)}}}else if(k.visible){const N=w(I,k,u,g);I.onBeforeShadow(r,I,R,p,L,N,null),r.renderBufferDirect(p,null,L,N,I,null),I.onAfterShadow(r,I,R,p,L,N,null)}}const C=I.children;for(let L=0,k=C.length;L<k;L++)S(C[L],R,p,u,g)}function b(I){I.target.removeEventListener("dispose",b);for(const p in a){const u=a[p],g=I.target.uuid;g in u&&(u[g].dispose(),delete u[g])}}}const $1={[al]:ll,[cl]:ul,[hl]:fl,[Qs]:dl,[ll]:al,[ul]:cl,[fl]:hl,[dl]:Qs};function Y1(r,t){function e(){let O=!1;const at=new we;let ht=null;const wt=new we(0,0,0,0);return{setMask:function(st){ht!==st&&!O&&(r.colorMask(st,st,st,st),ht=st)},setLocked:function(st){O=st},setClear:function(st,tt,At,Xt,Ae){Ae===!0&&(st*=Xt,tt*=Xt,At*=Xt),at.set(st,tt,At,Xt),wt.equals(at)===!1&&(r.clearColor(st,tt,At,Xt),wt.copy(at))},reset:function(){O=!1,ht=null,wt.set(-1,0,0,0)}}}function n(){let O=!1,at=!1,ht=null,wt=null,st=null;return{setReversed:function(tt){if(at!==tt){const At=t.get("EXT_clip_control");tt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),at=tt;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return at},setTest:function(tt){tt?K(r.DEPTH_TEST):nt(r.DEPTH_TEST)},setMask:function(tt){ht!==tt&&!O&&(r.depthMask(tt),ht=tt)},setFunc:function(tt){if(at&&(tt=$1[tt]),wt!==tt){switch(tt){case al:r.depthFunc(r.NEVER);break;case ll:r.depthFunc(r.ALWAYS);break;case cl:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case hl:r.depthFunc(r.EQUAL);break;case dl:r.depthFunc(r.GEQUAL);break;case ul:r.depthFunc(r.GREATER);break;case fl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=tt}},setLocked:function(tt){O=tt},setClear:function(tt){st!==tt&&(at&&(tt=1-tt),r.clearDepth(tt),st=tt)},reset:function(){O=!1,ht=null,wt=null,st=null,at=!1}}}function s(){let O=!1,at=null,ht=null,wt=null,st=null,tt=null,At=null,Xt=null,Ae=null;return{setTest:function(ge){O||(ge?K(r.STENCIL_TEST):nt(r.STENCIL_TEST))},setMask:function(ge){at!==ge&&!O&&(r.stencilMask(ge),at=ge)},setFunc:function(ge,Ti,fi){(ht!==ge||wt!==Ti||st!==fi)&&(r.stencilFunc(ge,Ti,fi),ht=ge,wt=Ti,st=fi)},setOp:function(ge,Ti,fi){(tt!==ge||At!==Ti||Xt!==fi)&&(r.stencilOp(ge,Ti,fi),tt=ge,At=Ti,Xt=fi)},setLocked:function(ge){O=ge},setClear:function(ge){Ae!==ge&&(r.clearStencil(ge),Ae=ge)},reset:function(){O=!1,at=null,ht=null,wt=null,st=null,tt=null,At=null,Xt=null,Ae=null}}}const o=new e,i=new n,l=new s,h=new WeakMap,a=new WeakMap;let c={},d={},f=new WeakMap,m=[],x=null,y=!1,v=null,_=null,T=null,w=null,S=null,b=null,I=null,R=new Gt(0,0,0),p=0,u=!1,g=null,M=null,C=null,L=null,k=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Y>=2);let J=null,et={};const _t=r.getParameter(r.SCISSOR_BOX),Vt=r.getParameter(r.VIEWPORT),ae=new we().fromArray(_t),le=new we().fromArray(Vt);function Jt(O,at,ht,wt){const st=new Uint8Array(4),tt=r.createTexture();r.bindTexture(O,tt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<ht;At++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(at,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(at+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return tt}const X={};X[r.TEXTURE_2D]=Jt(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Jt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Jt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Jt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),i.setClear(1),l.setClear(0),K(r.DEPTH_TEST),i.setFunc(Qs),kt(!1),xt(zc),K(r.CULL_FACE),ue(Qi);function K(O){c[O]!==!0&&(r.enable(O),c[O]=!0)}function nt(O){c[O]!==!1&&(r.disable(O),c[O]=!1)}function Tt(O,at){return d[O]!==at?(r.bindFramebuffer(O,at),d[O]=at,O===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=at),O===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=at),!0):!1}function ft(O,at){let ht=m,wt=!1;if(O){ht=f.get(at),ht===void 0&&(ht=[],f.set(at,ht));const st=O.textures;if(ht.length!==st.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,At=st.length;tt<At;tt++)ht[tt]=r.COLOR_ATTACHMENT0+tt;ht.length=st.length,wt=!0}}else ht[0]!==r.BACK&&(ht[0]=r.BACK,wt=!0);wt&&r.drawBuffers(ht)}function Wt(O){return x!==O?(r.useProgram(O),x=O,!0):!1}const Te={[_s]:r.FUNC_ADD,[Ou]:r.FUNC_SUBTRACT,[Bu]:r.FUNC_REVERSE_SUBTRACT};Te[zu]=r.MIN,Te[Hu]=r.MAX;const D={[Gu]:r.ZERO,[Vu]:r.ONE,[Wu]:r.SRC_COLOR,[rl]:r.SRC_ALPHA,[ju]:r.SRC_ALPHA_SATURATE,[Yu]:r.DST_COLOR,[Xu]:r.DST_ALPHA,[qu]:r.ONE_MINUS_SRC_COLOR,[ol]:r.ONE_MINUS_SRC_ALPHA,[Ku]:r.ONE_MINUS_DST_COLOR,[$u]:r.ONE_MINUS_DST_ALPHA,[Zu]:r.CONSTANT_COLOR,[Ju]:r.ONE_MINUS_CONSTANT_COLOR,[Qu]:r.CONSTANT_ALPHA,[tf]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(O,at,ht,wt,st,tt,At,Xt,Ae,ge){if(O===Qi){y===!0&&(nt(r.BLEND),y=!1);return}if(y===!1&&(K(r.BLEND),y=!0),O!==Fu){if(O!==v||ge!==u){if((_!==_s||S!==_s)&&(r.blendEquation(r.FUNC_ADD),_=_s,S=_s),ge)switch(O){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hc:r.blendFunc(r.ONE,r.ONE);break;case Gc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,w=null,b=null,I=null,R.set(0,0,0),p=0,v=O,u=ge}return}st=st||at,tt=tt||ht,At=At||wt,(at!==_||st!==S)&&(r.blendEquationSeparate(Te[at],Te[st]),_=at,S=st),(ht!==T||wt!==w||tt!==b||At!==I)&&(r.blendFuncSeparate(D[ht],D[wt],D[tt],D[At]),T=ht,w=wt,b=tt,I=At),(Xt.equals(R)===!1||Ae!==p)&&(r.blendColor(Xt.r,Xt.g,Xt.b,Ae),R.copy(Xt),p=Ae),v=O,u=!1}function It(O,at){O.side===Xe?nt(r.CULL_FACE):K(r.CULL_FACE);let ht=O.side===Fn;at&&(ht=!ht),kt(ht),O.blending===js&&O.transparent===!1?ue(Qi):ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),i.setFunc(O.depthFunc),i.setTest(O.depthTest),i.setMask(O.depthWrite),o.setMask(O.colorWrite);const wt=O.stencilWrite;l.setTest(wt),wt&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(O){g!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),g=O)}function xt(O){O!==ku?(K(r.CULL_FACE),O!==M&&(O===zc?r.cullFace(r.BACK):O===Uu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):nt(r.CULL_FACE),M=O}function he(O){O!==C&&(z&&r.lineWidth(O),C=O)}function yt(O,at,ht){O?(K(r.POLYGON_OFFSET_FILL),(L!==at||k!==ht)&&(r.polygonOffset(at,ht),L=at,k=ht)):nt(r.POLYGON_OFFSET_FILL)}function $t(O){O?K(r.SCISSOR_TEST):nt(r.SCISSOR_TEST)}function rn(O){O===void 0&&(O=r.TEXTURE0+N-1),J!==O&&(r.activeTexture(O),J=O)}function Oe(O,at,ht){ht===void 0&&(J===null?ht=r.TEXTURE0+N-1:ht=J);let wt=et[ht];wt===void 0&&(wt={type:void 0,texture:void 0},et[ht]=wt),(wt.type!==O||wt.texture!==at)&&(J!==ht&&(r.activeTexture(ht),J=ht),r.bindTexture(O,at||X[O]),wt.type=O,wt.texture=at)}function P(){const O=et[J];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(O){ae.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function zt(O){le.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),le.copy(O))}function Dt(O,at){let ht=a.get(at);ht===void 0&&(ht=new WeakMap,a.set(at,ht));let wt=ht.get(O);wt===void 0&&(wt=r.getUniformBlockIndex(at,O.name),ht.set(O,wt))}function pt(O,at){const wt=a.get(at).get(O);h.get(at)!==wt&&(r.uniformBlockBinding(at,wt,O.__bindingPointIndex),h.set(at,wt))}function jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},J=null,et={},d={},f=new WeakMap,m=[],x=null,y=!1,v=null,_=null,T=null,w=null,S=null,b=null,I=null,R=new Gt(0,0,0),p=0,u=!1,g=null,M=null,C=null,L=null,k=null,ae.set(0,0,r.canvas.width,r.canvas.height),le.set(0,0,r.canvas.width,r.canvas.height),o.reset(),i.reset(),l.reset()}return{buffers:{color:o,depth:i,stencil:l},enable:K,disable:nt,bindFramebuffer:Tt,drawBuffers:ft,useProgram:Wt,setBlending:ue,setMaterial:It,setFlipSided:kt,setCullFace:xt,setLineWidth:he,setPolygonOffset:yt,setScissorTest:$t,activeTexture:rn,bindTexture:Oe,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:V,texImage2D:Lt,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:pt,texStorage2D:lt,texStorage3D:Pt,texSubImage2D:Z,texSubImage3D:it,compressedTexSubImage2D:j,compressedTexSubImage3D:Ut,scissor:vt,viewport:zt,reset:jt}}function K1(r,t,e,n,s,o,i){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new ce,c=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return m?new OffscreenCanvas(P,E):zo("canvas")}function y(P,E,V){let Z=1;const it=Oe(P);if((it.width>V||it.height>V)&&(Z=V/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(Z*it.width),Ut=Math.floor(Z*it.height);d===void 0&&(d=x(j,Ut));const lt=E?x(j,Ut):d;return lt.width=j,lt.height=Ut,lt.getContext("2d").drawImage(P,0,0,j,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Ut+")."),lt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function v(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(P,E,V,Z,it=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=E;if(E===r.RED&&(V===r.FLOAT&&(j=r.R32F),V===r.HALF_FLOAT&&(j=r.R16F),V===r.UNSIGNED_BYTE&&(j=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.R8UI),V===r.UNSIGNED_SHORT&&(j=r.R16UI),V===r.UNSIGNED_INT&&(j=r.R32UI),V===r.BYTE&&(j=r.R8I),V===r.SHORT&&(j=r.R16I),V===r.INT&&(j=r.R32I)),E===r.RG&&(V===r.FLOAT&&(j=r.RG32F),V===r.HALF_FLOAT&&(j=r.RG16F),V===r.UNSIGNED_BYTE&&(j=r.RG8)),E===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RG8UI),V===r.UNSIGNED_SHORT&&(j=r.RG16UI),V===r.UNSIGNED_INT&&(j=r.RG32UI),V===r.BYTE&&(j=r.RG8I),V===r.SHORT&&(j=r.RG16I),V===r.INT&&(j=r.RG32I)),E===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGB8UI),V===r.UNSIGNED_SHORT&&(j=r.RGB16UI),V===r.UNSIGNED_INT&&(j=r.RGB32UI),V===r.BYTE&&(j=r.RGB8I),V===r.SHORT&&(j=r.RGB16I),V===r.INT&&(j=r.RGB32I)),E===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),V===r.UNSIGNED_INT&&(j=r.RGBA32UI),V===r.BYTE&&(j=r.RGBA8I),V===r.SHORT&&(j=r.RGBA16I),V===r.INT&&(j=r.RGBA32I)),E===r.RGB&&(V===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),E===r.RGBA){const Ut=it?Oo:pe.getTransfer(Z);V===r.FLOAT&&(j=r.RGBA32F),V===r.HALF_FLOAT&&(j=r.RGBA16F),V===r.UNSIGNED_BYTE&&(j=Ut===Se?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(P,E){let V;return P?E===null||E===Ts||E===Lr?V=r.DEPTH24_STENCIL8:E===Ni?V=r.DEPTH32F_STENCIL8:E===Pr&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===Lr?V=r.DEPTH_COMPONENT24:E===Ni?V=r.DEPTH_COMPONENT32F:E===Pr&&(V=r.DEPTH_COMPONENT16),V}function b(P,E){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==$n&&P.minFilter!==vi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){const E=P.target;E.removeEventListener("dispose",I),p(E),E.isVideoTexture&&c.delete(E)}function R(P){const E=P.target;E.removeEventListener("dispose",R),g(E)}function p(P){const E=n.get(P);if(E.__webglInit===void 0)return;const V=P.source,Z=f.get(V);if(Z){const it=Z[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&u(P),Object.keys(Z).length===0&&f.delete(V)}n.remove(P)}function u(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const V=P.source,Z=f.get(V);delete Z[E.__cacheKey],i.memory.textures--}function g(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let it=0;it<E.__webglFramebuffer[Z].length;it++)r.deleteFramebuffer(E.__webglFramebuffer[Z][it]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=P.textures;for(let Z=0,it=V.length;Z<it;Z++){const j=n.get(V[Z]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),i.memory.textures--),n.remove(V[Z])}n.remove(P)}let M=0;function C(){M=0}function L(){const P=M;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),M+=1,P}function k(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function N(P,E){const V=n.get(P);if(P.isVideoTexture&&$t(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,P,E);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function z(P,E){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){X(V,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function Y(P,E){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){X(V,P,E);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function W(P,E){const V=n.get(P);if(P.version>0&&V.__version!==P.version){K(V,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const J={[gl]:r.REPEAT,[Ms]:r.CLAMP_TO_EDGE,[vl]:r.MIRRORED_REPEAT},et={[$n]:r.NEAREST,[df]:r.NEAREST_MIPMAP_NEAREST,[Zr]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[ca]:r.LINEAR_MIPMAP_NEAREST,[bs]:r.LINEAR_MIPMAP_LINEAR},_t={[mf]:r.NEVER,[Mf]:r.ALWAYS,[gf]:r.LESS,[Fd]:r.LEQUAL,[vf]:r.EQUAL,[yf]:r.GEQUAL,[_f]:r.GREATER,[xf]:r.NOTEQUAL};function Vt(P,E){if(E.type===Ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===vi||E.magFilter===ca||E.magFilter===Zr||E.magFilter===bs||E.minFilter===vi||E.minFilter===ca||E.minFilter===Zr||E.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,J[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,et[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,et[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,_t[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$n||E.minFilter!==Zr&&E.minFilter!==bs||E.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ae(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I));const Z=E.source;let it=f.get(Z);it===void 0&&(it={},f.set(Z,it));const j=k(E);if(j!==P.__cacheKey){it[j]===void 0&&(it[j]={texture:r.createTexture(),usedTimes:0},i.memory.textures++,V=!0),it[j].usedTimes++;const Ut=it[P.__cacheKey];Ut!==void 0&&(it[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&u(E)),P.__cacheKey=j,P.__webglTexture=it[j].texture}return V}function le(P,E,V){return Math.floor(Math.floor(P/V)/E)}function Jt(P,E,V,Z){const j=P.updateRanges;if(j.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,V,Z,E.data);else{j.sort((ot,vt)=>ot.start-vt.start);let Ut=0;for(let ot=1;ot<j.length;ot++){const vt=j[Ut],zt=j[ot],Dt=vt.start+vt.count,pt=le(zt.start,E.width,4),jt=le(vt.start,E.width,4);zt.start<=Dt+1&&pt===jt&&le(zt.start+zt.count-1,E.width,4)===pt?vt.count=Math.max(vt.count,zt.start+zt.count-vt.start):(++Ut,j[Ut]=zt)}j.length=Ut+1;const lt=r.getParameter(r.UNPACK_ROW_LENGTH),Pt=r.getParameter(r.UNPACK_SKIP_PIXELS),Lt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ot=0,vt=j.length;ot<vt;ot++){const zt=j[ot],Dt=Math.floor(zt.start/4),pt=Math.ceil(zt.count/4),jt=Dt%E.width,O=Math.floor(Dt/E.width),at=pt,ht=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),e.texSubImage2D(r.TEXTURE_2D,0,jt,O,at,ht,V,Z,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Lt)}}function X(P,E,V){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);const it=ae(P,E),j=E.source;e.bindTexture(Z,P.__webglTexture,r.TEXTURE0+V);const Ut=n.get(j);if(j.version!==Ut.__version||it===!0){e.activeTexture(r.TEXTURE0+V);const lt=pe.getPrimaries(pe.workingColorSpace),Pt=E.colorSpace===ji?null:pe.getPrimaries(E.colorSpace),Lt=E.colorSpace===ji||lt===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ot=y(E.image,!1,s.maxTextureSize);ot=rn(E,ot);const vt=o.convert(E.format,E.colorSpace),zt=o.convert(E.type);let Dt=w(E.internalFormat,vt,zt,E.colorSpace,E.isVideoTexture);Vt(Z,E);let pt;const jt=E.mipmaps,O=E.isVideoTexture!==!0,at=Ut.__version===void 0||it===!0,ht=j.dataReady,wt=b(E,ot);if(E.isDepthTexture)Dt=S(E.format===kr,E.type),at&&(O?e.texStorage2D(r.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,zt,null));else if(E.isDataTexture)if(jt.length>0){O&&at&&e.texStorage2D(r.TEXTURE_2D,wt,Dt,jt[0].width,jt[0].height);for(let st=0,tt=jt.length;st<tt;st++)pt=jt[st],O?ht&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,pt.width,pt.height,vt,zt,pt.data):e.texImage2D(r.TEXTURE_2D,st,Dt,pt.width,pt.height,0,vt,zt,pt.data);E.generateMipmaps=!1}else O?(at&&e.texStorage2D(r.TEXTURE_2D,wt,Dt,ot.width,ot.height),ht&&Jt(E,ot,vt,zt)):e.texImage2D(r.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,zt,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Dt,jt[0].width,jt[0].height,ot.depth);for(let st=0,tt=jt.length;st<tt;st++)if(pt=jt[st],E.format!==hi)if(vt!==null)if(O){if(ht)if(E.layerUpdates.size>0){const At=Sh(pt.width,pt.height,E.format,E.type);for(const Xt of E.layerUpdates){const Ae=pt.data.subarray(Xt*At/pt.data.BYTES_PER_ELEMENT,(Xt+1)*At/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,Xt,pt.width,pt.height,1,vt,Ae)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,ot.depth,vt,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,Dt,pt.width,pt.height,ot.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ht&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,ot.depth,vt,zt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,Dt,pt.width,pt.height,ot.depth,0,vt,zt,pt.data)}else{O&&at&&e.texStorage2D(r.TEXTURE_2D,wt,Dt,jt[0].width,jt[0].height);for(let st=0,tt=jt.length;st<tt;st++)pt=jt[st],E.format!==hi?vt!==null?O?ht&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,pt.width,pt.height,vt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,st,Dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ht&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,pt.width,pt.height,vt,zt,pt.data):e.texImage2D(r.TEXTURE_2D,st,Dt,pt.width,pt.height,0,vt,zt,pt.data)}else if(E.isDataArrayTexture)if(O){if(at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Dt,ot.width,ot.height,ot.depth),ht)if(E.layerUpdates.size>0){const st=Sh(ot.width,ot.height,E.format,E.type);for(const tt of E.layerUpdates){const At=ot.data.subarray(tt*st/ot.data.BYTES_PER_ELEMENT,(tt+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,vt,zt,At)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,zt,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,vt,zt,ot.data);else if(E.isData3DTexture)O?(at&&e.texStorage3D(r.TEXTURE_3D,wt,Dt,ot.width,ot.height,ot.depth),ht&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,zt,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,vt,zt,ot.data);else if(E.isFramebufferTexture){if(at)if(O)e.texStorage2D(r.TEXTURE_2D,wt,Dt,ot.width,ot.height);else{let st=ot.width,tt=ot.height;for(let At=0;At<wt;At++)e.texImage2D(r.TEXTURE_2D,At,Dt,st,tt,0,vt,zt,null),st>>=1,tt>>=1}}else if(jt.length>0){if(O&&at){const st=Oe(jt[0]);e.texStorage2D(r.TEXTURE_2D,wt,Dt,st.width,st.height)}for(let st=0,tt=jt.length;st<tt;st++)pt=jt[st],O?ht&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,vt,zt,pt):e.texImage2D(r.TEXTURE_2D,st,Dt,vt,zt,pt);E.generateMipmaps=!1}else if(O){if(at){const st=Oe(ot);e.texStorage2D(r.TEXTURE_2D,wt,Dt,st.width,st.height)}ht&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,zt,ot)}else e.texImage2D(r.TEXTURE_2D,0,Dt,vt,zt,ot);v(E)&&_(Z),Ut.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function K(P,E,V){if(E.image.length!==6)return;const Z=ae(P,E),it=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const j=n.get(it);if(it.version!==j.__version||Z===!0){e.activeTexture(r.TEXTURE0+V);const Ut=pe.getPrimaries(pe.workingColorSpace),lt=E.colorSpace===ji?null:pe.getPrimaries(E.colorSpace),Pt=E.colorSpace===ji||Ut===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!Lt&&!ot?vt[tt]=y(E.image[tt],!0,s.maxCubemapSize):vt[tt]=ot?E.image[tt].image:E.image[tt],vt[tt]=rn(E,vt[tt]);const zt=vt[0],Dt=o.convert(E.format,E.colorSpace),pt=o.convert(E.type),jt=w(E.internalFormat,Dt,pt,E.colorSpace),O=E.isVideoTexture!==!0,at=j.__version===void 0||Z===!0,ht=it.dataReady;let wt=b(E,zt);Vt(r.TEXTURE_CUBE_MAP,E);let st;if(Lt){O&&at&&e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,jt,zt.width,zt.height);for(let tt=0;tt<6;tt++){st=vt[tt].mipmaps;for(let At=0;At<st.length;At++){const Xt=st[At];E.format!==hi?Dt!==null?O?ht&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,Xt.width,Xt.height,Dt,Xt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,jt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,Xt.width,Xt.height,Dt,pt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,jt,Xt.width,Xt.height,0,Dt,pt,Xt.data)}}}else{if(st=E.mipmaps,O&&at){st.length>0&&wt++;const tt=Oe(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){O?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,Dt,pt,vt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,vt[tt].width,vt[tt].height,0,Dt,pt,vt[tt].data);for(let At=0;At<st.length;At++){const Ae=st[At].image[tt].image;O?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,Ae.width,Ae.height,Dt,pt,Ae.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,jt,Ae.width,Ae.height,0,Dt,pt,Ae.data)}}else{O?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,pt,vt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,Dt,pt,vt[tt]);for(let At=0;At<st.length;At++){const Xt=st[At];O?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,Dt,pt,Xt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,jt,Dt,pt,Xt.image[tt])}}}v(E)&&_(r.TEXTURE_CUBE_MAP),j.__version=it.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function nt(P,E,V,Z,it,j){const Ut=o.convert(V.format,V.colorSpace),lt=o.convert(V.type),Pt=w(V.internalFormat,Ut,lt,V.colorSpace),Lt=n.get(E),ot=n.get(V);if(ot.__renderTarget=E,!Lt.__hasExternalTextures){const vt=Math.max(1,E.width>>j),zt=Math.max(1,E.height>>j);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,j,Pt,vt,zt,E.depth,0,Ut,lt,null):e.texImage2D(it,j,Pt,vt,zt,0,Ut,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),yt(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,it,ot.__webglTexture,0,he(E)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,it,ot.__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(P,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const Z=E.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,j=S(E.stencilBuffer,it),Ut=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=he(E);yt(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,j,E.width,E.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,j,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,j,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,P)}else{const Z=E.textures;for(let it=0;it<Z.length;it++){const j=Z[it],Ut=o.convert(j.format,j.colorSpace),lt=o.convert(j.type),Pt=w(j.internalFormat,Ut,lt,j.colorSpace),Lt=he(E);V&&yt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,Pt,E.width,E.height):yt(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,Pt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ft(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const it=Z.__webglTexture,j=he(E);if(E.depthTexture.format===Dr)yt(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(E.depthTexture.format===kr)yt(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Wt(P){const E=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?ft(E.__webglFramebuffer[0],P):ft(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=r.createRenderbuffer(),Tt(E.__webglDepthbuffer[Z],P,!1);else{const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,j)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Tt(E.__webglDepthbuffer,P,!1);else{const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,j)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(P,E,V){const Z=n.get(P);E!==void 0&&nt(Z.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Wt(P)}function D(P){const E=P.texture,V=n.get(P),Z=n.get(E);P.addEventListener("dispose",R);const it=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ut=it.length>1;if(Ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,i.memory.textures++),j){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let Pt=0;Pt<E.mipmaps.length;Pt++)V.__webglFramebuffer[lt][Pt]=r.createFramebuffer()}else V.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)V.__webglFramebuffer[lt]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let lt=0,Pt=it.length;lt<Pt;lt++){const Lt=n.get(it[lt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=r.createTexture(),i.memory.textures++)}if(P.samples>0&&yt(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<it.length;lt++){const Pt=it[lt];V.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const Lt=o.convert(Pt.format,Pt.colorSpace),ot=o.convert(Pt.type),vt=w(Pt.internalFormat,Lt,ot,Pt.colorSpace,P.isXRRenderTarget===!0),zt=he(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,vt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Tt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,E);for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)nt(V.__webglFramebuffer[lt][Pt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt);else nt(V.__webglFramebuffer[lt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);v(E)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let lt=0,Pt=it.length;lt<Pt;lt++){const Lt=it[lt],ot=n.get(Lt);let vt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,ot.__webglTexture),Vt(vt,Lt),nt(V.__webglFramebuffer,P,Lt,r.COLOR_ATTACHMENT0+lt,vt,0),v(Lt)&&_(vt)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),Vt(lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)nt(V.__webglFramebuffer[Pt],P,E,r.COLOR_ATTACHMENT0,lt,Pt);else nt(V.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,lt,0);v(E)&&_(lt),e.unbindTexture()}P.depthBuffer&&Wt(P)}function ue(P){const E=P.textures;for(let V=0,Z=E.length;V<Z;V++){const it=E[V];if(v(it)){const j=T(P),Ut=n.get(it).__webglTexture;e.bindTexture(j,Ut),_(j),e.unbindTexture()}}}const It=[],kt=[];function xt(P){if(P.samples>0){if(yt(P)===!1){const E=P.textures,V=P.width,Z=P.height;let it=r.COLOR_BUFFER_BIT;const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=n.get(P),lt=E.length>1;if(lt)for(let Lt=0;Lt<E.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Pt=P.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Lt]);const ot=n.get(E[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ot,0)}r.blitFramebuffer(0,0,V,Z,0,0,V,Z,it,r.NEAREST),h===!0&&(It.length=0,kt.length=0,It.push(r.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(It.push(j),kt.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let Lt=0;Lt<E.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Lt]);const ot=n.get(E[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function he(P){return Math.min(s.maxSamples,P.samples)}function yt(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $t(P){const E=i.render.frame;c.get(P)!==E&&(c.set(P,E),P.update())}function rn(P,E){const V=P.colorSpace,Z=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==nr&&V!==ji&&(pe.getTransfer(V)===Se?(Z!==hi||it!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(a.width=P.naturalWidth||P.width,a.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(a.width=P.displayWidth,a.height=P.displayHeight):(a.width=P.width,a.height=P.height),a}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Te,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=yt}function j1(r,t){function e(n,s=ji){let o;const i=pe.getTransfer(s);if(n===Si)return r.UNSIGNED_BYTE;if(n===cc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rd)return r.BYTE;if(n===Cd)return r.SHORT;if(n===Pr)return r.UNSIGNED_SHORT;if(n===lc)return r.INT;if(n===Ts)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===Br)return r.HALF_FLOAT;if(n===Ld)return r.ALPHA;if(n===Dd)return r.RGB;if(n===hi)return r.RGBA;if(n===Dr)return r.DEPTH_COMPONENT;if(n===kr)return r.DEPTH_STENCIL;if(n===kd)return r.RED;if(n===dc)return r.RED_INTEGER;if(n===Ud)return r.RG;if(n===uc)return r.RG_INTEGER;if(n===fc)return r.RGBA_INTEGER;if(n===Io||n===Po||n===Lo||n===Do)if(i===Se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===xl||n===yl||n===Ml)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===_l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===Sl||n===wl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===bl||n===Sl)return i===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===wl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===kl||n===Ul||n===Nl||n===Fl||n===Ol)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===El)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return i===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===zl||n===Hl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Bl)return i===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Vl||n===Wl||n===ql)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Gl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`;class Q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Kd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ei({vertexShader:Z1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tv extends rr{constructor(t,e){super();const n=this;let s=null,o=1,i=null,l="local-floor",h=1,a=null,c=null,d=null,f=null,m=null,x=null;const y=typeof XRWebGLBinding<"u",v=new Q1,_={},T=e.getContextAttributes();let w=null,S=null;const b=[],I=[],R=new ce;let p=null;const u=new Wn;u.viewport=new we;const g=new Wn;g.viewport=new we;const M=[u,g],C=new Mp;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=b[X];return K===void 0&&(K=new Ia,b[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=b[X];return K===void 0&&(K=new Ia,b[X]=K),K.getGripSpace()},this.getHand=function(X){let K=b[X];return K===void 0&&(K=new Ia,b[X]=K),K.getHandSpace()};function N(X){const K=I.indexOf(X.inputSource);if(K===-1)return;const nt=b[K];nt!==void 0&&(nt.update(X.inputSource,X.frame,a||i),nt.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let X=0;X<b.length;X++){const K=I[X];K!==null&&(I[X]=null,b[X].disconnect(K))}L=null,k=null,v.reset();for(const X in _)delete _[X];t.setRenderTarget(w),m=null,f=null,d=null,s=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(p),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||i},this.setReferenceSpace=function(X){a=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await e.makeXRCompatible(),p=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Tt=null,ft=null;T.depth&&(ft=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=T.stencil?kr:Dr,Tt=T.stencil?Lr:Ts);const Wt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new As(f.textureWidth,f.textureHeight,{format:hi,type:Si,depthTexture:new Yd(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const nt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new As(m.framebufferWidth,m.framebufferHeight,{format:hi,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),a=null,i=await s.requestReferenceSpace(l),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(X){for(let K=0;K<X.removed.length;K++){const nt=X.removed[K],Tt=I.indexOf(nt);Tt>=0&&(I[Tt]=null,b[Tt].disconnect(nt))}for(let K=0;K<X.added.length;K++){const nt=X.added[K];let Tt=I.indexOf(nt);if(Tt===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=I.length){I.push(nt),Tt=Wt;break}else if(I[Wt]===null){I[Wt]=nt,Tt=Wt;break}if(Tt===-1)break}const ft=b[Tt];ft&&ft.connect(nt)}}const W=new F,J=new F;function et(X,K,nt){W.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(nt.matrixWorld);const Tt=W.distanceTo(J),ft=K.projectionMatrix.elements,Wt=nt.projectionMatrix.elements,Te=ft[14]/(ft[10]-1),D=ft[14]/(ft[10]+1),ue=(ft[9]+1)/ft[5],It=(ft[9]-1)/ft[5],kt=(ft[8]-1)/ft[0],xt=(Wt[8]+1)/Wt[0],he=Te*kt,yt=Te*xt,$t=Tt/(-kt+xt),rn=$t*-kt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(rn),X.translateZ($t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ft[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Oe=Te+$t,P=D+$t,E=he-rn,V=yt+(Tt-rn),Z=ue*D/P*Oe,it=It*D/P*Oe;X.projectionMatrix.makePerspective(E,V,Z,it,Oe,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function _t(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,nt=X.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(nt=v.depthFar)),C.near=g.near=u.near=K,C.far=g.far=u.far=nt,(L!==C.near||k!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,k=C.far),C.layers.mask=X.layers.mask|6,u.layers.mask=C.layers.mask&3,g.layers.mask=C.layers.mask&5;const Tt=X.parent,ft=C.cameras;_t(C,Tt);for(let Wt=0;Wt<ft.length;Wt++)_t(ft[Wt],Tt);ft.length===2?et(C,u,g):C.projectionMatrix.copy(u.projectionMatrix),Vt(X,C,Tt)};function Vt(X,K,nt){nt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(nt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ur*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(X){h=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)},this.getCameraTexture=function(X){return _[X]};let ae=null;function le(X,K){if(c=K.getViewerPose(a||i),x=K,c!==null){const nt=c.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Tt=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,Tt=!0);for(let D=0;D<nt.length;D++){const ue=nt[D];let It=null;if(m!==null)It=m.getViewport(ue);else{const xt=d.getViewSubImage(f,ue);It=xt.viewport,D===0&&(t.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(S))}let kt=M[D];kt===void 0&&(kt=new Wn,kt.layers.enable(D),kt.viewport=new we,M[D]=kt),kt.matrix.fromArray(ue.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ue.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(It.x,It.y,It.width,It.height),D===0&&(C.matrix.copy(kt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Tt===!0&&C.cameras.push(kt)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const D=d.getDepthInformation(nt[0]);D&&D.isValid&&D.texture&&v.init(D,s.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let D=0;D<nt.length;D++){const ue=nt[D].camera;if(ue){let It=_[ue];It||(It=new Kd,_[ue]=It);const kt=d.getCameraImage(ue);It.sourceTexture=kt}}}}for(let nt=0;nt<b.length;nt++){const Tt=I[nt],ft=b[nt];Tt!==null&&ft!==void 0&&ft.update(Tt,K,a||i)}ae&&ae(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const Jt=new Jd;Jt.setAnimationLoop(le),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const ps=new wi,ev=new Pe;function nv(r,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,Wd(r)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function s(v,_,T,w,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(v,_):_.isMeshToonMaterial?(o(v,_),d(v,_)):_.isMeshPhongMaterial?(o(v,_),c(v,_)):_.isMeshStandardMaterial?(o(v,_),f(v,_),_.isMeshPhysicalMaterial&&m(v,_,S)):_.isMeshMatcapMaterial?(o(v,_),x(v,_)):_.isMeshDepthMaterial?o(v,_):_.isMeshDistanceMaterial?(o(v,_),y(v,_)):_.isMeshNormalMaterial?o(v,_):_.isLineBasicMaterial?(i(v,_),_.isLineDashedMaterial&&l(v,_)):_.isPointsMaterial?h(v,_,T,w):_.isSpriteMaterial?a(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Fn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Fn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const T=t.get(_),w=T.envMap,S=T.envMapRotation;w&&(v.envMap.value=w,ps.copy(S),ps.x*=-1,ps.y*=-1,ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),v.envMapRotation.value.setFromMatrix4(ev.makeRotationFromEuler(ps)),v.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function i(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function l(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,T,w){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*T,v.scale.value=w*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function c(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function d(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function f(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,T){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,_){_.matcap&&(v.matcap.value=_.matcap)}function y(v,_){const T=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(T.matrixWorld),v.nearDistance.value=T.shadow.camera.near,v.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iv(r,t,e,n){let s={},o={},i=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,w){const S=w.program;n.uniformBlockBinding(T,S)}function a(T,w){let S=s[T.id];S===void 0&&(x(T),S=c(T),s[T.id]=S,T.addEventListener("dispose",v));const b=w.program;n.updateUBOMapping(T,b);const I=t.render.frame;o[T.id]!==I&&(f(T),o[T.id]=I)}function c(T){const w=d();T.__bindingPointIndex=w;const S=r.createBuffer(),b=T.__size,I=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,S),S}function d(){for(let T=0;T<l;T++)if(i.indexOf(T)===-1)return i.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const w=s[T.id],S=T.uniforms,b=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let I=0,R=S.length;I<R;I++){const p=Array.isArray(S[I])?S[I]:[S[I]];for(let u=0,g=p.length;u<g;u++){const M=p[u];if(m(M,I,u,b)===!0){const C=M.__offset,L=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let N=0;N<L.length;N++){const z=L[N],Y=y(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,C+k,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,C,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(T,w,S,b){const I=T.value,R=w+"_"+S;if(b[R]===void 0)return typeof I=="number"||typeof I=="boolean"?b[R]=I:b[R]=I.clone(),!0;{const p=b[R];if(typeof I=="number"||typeof I=="boolean"){if(p!==I)return b[R]=I,!0}else if(p.equals(I)===!1)return p.copy(I),!0}return!1}function x(T){const w=T.uniforms;let S=0;const b=16;for(let R=0,p=w.length;R<p;R++){const u=Array.isArray(w[R])?w[R]:[w[R]];for(let g=0,M=u.length;g<M;g++){const C=u[g],L=Array.isArray(C.value)?C.value:[C.value];for(let k=0,N=L.length;k<N;k++){const z=L[k],Y=y(z),W=S%b,J=W%Y.boundary,et=W+J;S+=J,et!==0&&b-et<Y.storage&&(S+=b-et),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=Y.storage}}}const I=S%b;return I>0&&(S+=b-I),T.__size=S,T.__cache={},this}function y(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function v(T){const w=T.target;w.removeEventListener("dispose",v);const S=i.indexOf(w.__bindingPointIndex);i.splice(S,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function _(){for(const T in s)r.deleteBuffer(s[T]);i=[],s={},o={}}return{bind:h,update:a,dispose:_}}class sv{constructor(t={}){const{canvas:e=Of(),context:n=null,depth:s=!0,stencil:o=!1,alpha:i=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:a=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=i;const x=new Uint32Array(4),y=new Int32Array(4);let v=null,_=null;const T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=kn;let I=0,R=0,p=null,u=-1,g=null;const M=new we,C=new we;let L=null;const k=new Gt(0);let N=0,z=e.width,Y=e.height,W=1,J=null,et=null;const _t=new we(0,0,z,Y),Vt=new we(0,0,z,Y);let ae=!1;const le=new _c;let Jt=!1,X=!1;const K=new Pe,nt=new F,Tt=new we,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Te(){return p===null?W:1}let D=n;function ue(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",st,!1),D===null){const B="webgl2";if(D=ue(B,A),D===null)throw ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let It,kt,xt,he,yt,$t,rn,Oe,P,E,V,Z,it,j,Ut,lt,Pt,Lt,ot,vt,zt,Dt,pt,jt;function O(){It=new pg(D),It.init(),Dt=new j1(D,It),kt=new ag(D,It,t,Dt),xt=new Y1(D,It),kt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),he=new vg(D),yt=new U1,$t=new K1(D,It,xt,yt,kt,Dt,he),rn=new cg(S),Oe=new fg(S),P=new Sp(D),pt=new rg(D,P),E=new mg(D,P,he,pt),V=new xg(D,E,P,he),ot=new _g(D,kt,$t),lt=new lg(yt),Z=new k1(S,rn,Oe,It,kt,pt,lt),it=new nv(S,yt),j=new F1,Ut=new V1(It),Lt=new sg(S,rn,Oe,xt,V,m,h),Pt=new X1(S,V,kt),jt=new iv(D,he,kt,xt),vt=new og(D,It,he),zt=new gg(D,It,he),he.programs=Z.programs,S.capabilities=kt,S.extensions=It,S.properties=yt,S.renderLists=j,S.shadowMap=Pt,S.state=xt,S.info=he}O();const at=new tv(S,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=It.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=It.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(z,Y,!1))},this.getSize=function(A){return A.set(z,Y)},this.setSize=function(A,B,q=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Y=B,e.width=Math.floor(A*W),e.height=Math.floor(B*W),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(z*W,Y*W).floor()},this.setDrawingBufferSize=function(A,B,q){z=A,Y=B,W=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,B,q,$){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,B,q,$),xt.viewport(M.copy(_t).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Vt)},this.setScissor=function(A,B,q,$){A.isVector4?Vt.set(A.x,A.y,A.z,A.w):Vt.set(A,B,q,$),xt.scissor(C.copy(Vt).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){xt.setScissorTest(ae=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,q=!0){let $=0;if(A){let H=!1;if(p!==null){const rt=p.texture.format;H=rt===fc||rt===uc||rt===dc}if(H){const rt=p.texture.type,mt=rt===Si||rt===Ts||rt===Pr||rt===Lr||rt===cc||rt===hc,Et=Lt.getClearColor(),bt=Lt.getClearAlpha(),Bt=Et.r,Ht=Et.g,Ft=Et.b;mt?(x[0]=Bt,x[1]=Ht,x[2]=Ft,x[3]=bt,D.clearBufferuiv(D.COLOR,0,x)):(y[0]=Bt,y[1]=Ht,y[2]=Ft,y[3]=bt,D.clearBufferiv(D.COLOR,0,y))}else $|=D.COLOR_BUFFER_BIT}B&&($|=D.DEPTH_BUFFER_BIT),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Lt.dispose(),j.dispose(),Ut.dispose(),yt.dispose(),rn.dispose(),Oe.dispose(),V.dispose(),pt.dispose(),jt.dispose(),Z.dispose(),at.dispose(),at.removeEventListener("sessionstart",fi),at.removeEventListener("sessionend",kc),as.stop()};function ht(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=he.autoReset,B=Pt.enabled,q=Pt.autoUpdate,$=Pt.needsUpdate,H=Pt.type;O(),he.autoReset=A,Pt.enabled=B,Pt.autoUpdate=q,Pt.needsUpdate=$,Pt.type=H}function st(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const B=A.target;B.removeEventListener("dispose",tt),At(B)}function At(A){Xt(A),yt.remove(A)}function Xt(A){const B=yt.get(A).programs;B!==void 0&&(B.forEach(function(q){Z.releaseProgram(q)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,$,H,rt){B===null&&(B=ft);const mt=H.isMesh&&H.matrixWorld.determinant()<0,Et=Ru(A,B,q,$,H);xt.setMaterial($,mt);let bt=q.index,Bt=1;if($.wireframe===!0){if(bt=E.getWireframeAttribute(q),bt===void 0)return;Bt=2}const Ht=q.drawRange,Ft=q.attributes.position;let re=Ht.start*Bt,be=(Ht.start+Ht.count)*Bt;rt!==null&&(re=Math.max(re,rt.start*Bt),be=Math.min(be,(rt.start+rt.count)*Bt)),bt!==null?(re=Math.max(re,0),be=Math.min(be,bt.count)):Ft!=null&&(re=Math.max(re,0),be=Math.min(be,Ft.count));const Ne=be-re;if(Ne<0||Ne===1/0)return;pt.setup(H,$,Et,q,bt);let Ce,Ee=vt;if(bt!==null&&(Ce=P.get(bt),Ee=zt,Ee.setIndex(Ce)),H.isMesh)$.wireframe===!0?(xt.setLineWidth($.wireframeLinewidth*Te()),Ee.setMode(D.LINES)):Ee.setMode(D.TRIANGLES);else if(H.isLine){let Ot=$.linewidth;Ot===void 0&&(Ot=1),xt.setLineWidth(Ot*Te()),H.isLineSegments?Ee.setMode(D.LINES):H.isLineLoop?Ee.setMode(D.LINE_LOOP):Ee.setMode(D.LINE_STRIP)}else H.isPoints?Ee.setMode(D.POINTS):H.isSprite&&Ee.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Ee.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,Le=H._multiDrawCounts,fe=H._multiDrawCount,On=bt?P.get(bt).bytesPerElement:1,Ds=yt.get($).currentProgram.getUniforms();for(let Bn=0;Bn<fe;Bn++)Ds.setValue(D,"_gl_DrawID",Bn),Ee.render(Ot[Bn]/On,Le[Bn])}else if(H.isInstancedMesh)Ee.renderInstances(re,Ne,H.count);else if(q.isInstancedBufferGeometry){const Ot=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Le=Math.min(q.instanceCount,Ot);Ee.renderInstances(re,Ne,Le)}else Ee.render(re,Ne)};function Ae(A,B,q){A.transparent===!0&&A.side===Xe&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,jr(A,B,q),A.side=ns,A.needsUpdate=!0,jr(A,B,q),A.side=Xe):jr(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),_=Ut.get(q),_.init(B),w.push(_),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),A!==q&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),_.setupLights();const $=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const rt=H.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){const Et=rt[mt];Ae(Et,q,H),$.add(Et)}else Ae(rt,q,H),$.add(rt)}),_=w.pop(),$},this.compileAsync=function(A,B,q=null){const $=this.compile(A,B,q);return new Promise(H=>{function rt(){if($.forEach(function(mt){yt.get(mt).currentProgram.isReady()&&$.delete(mt)}),$.size===0){H(A);return}setTimeout(rt,10)}It.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ge=null;function Ti(A){ge&&ge(A)}function fi(){as.stop()}function kc(){as.start()}const as=new Jd;as.setAnimationLoop(Ti),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(A){ge=A,at.setAnimationLoop(A),A===null?as.stop():as.start()},at.addEventListener("sessionstart",fi),at.addEventListener("sessionend",kc),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(B),B=at.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,B,p),_=Ut.get(A,w.length),_.init(B),w.push(_),K.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(K,_i,B.reversedDepth),X=this.localClippingEnabled,Jt=lt.init(this.clippingPlanes,X),v=j.get(A,T.length),v.init(),T.push(v),at.enabled===!0&&at.isPresenting===!0){const rt=S.xr.getDepthSensingMesh();rt!==null&&aa(rt,B,-1/0,S.sortObjects)}aa(A,B,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(J,et),Wt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Wt&&Lt.addToRenderList(v,A),this.info.render.frame++,Jt===!0&&lt.beginShadows();const q=_.state.shadowsArray;Pt.render(q,A,B),Jt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,H=v.transmissive;if(_.setupLights(),B.isArrayCamera){const rt=B.cameras;if(H.length>0)for(let mt=0,Et=rt.length;mt<Et;mt++){const bt=rt[mt];Nc($,H,A,bt)}Wt&&Lt.render(A);for(let mt=0,Et=rt.length;mt<Et;mt++){const bt=rt[mt];Uc(v,A,bt,bt.viewport)}}else H.length>0&&Nc($,H,A,B),Wt&&Lt.render(A),Uc(v,A,B);p!==null&&R===0&&($t.updateMultisampleRenderTarget(p),$t.updateRenderTargetMipmap(p)),A.isScene===!0&&A.onAfterRender(S,A,B),pt.resetDefaultState(),u=-1,g=null,w.pop(),w.length>0?(_=w[w.length-1],Jt===!0&&lt.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function aa(A,B,q,$){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){$&&Tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);const mt=V.update(A),Et=A.material;Et.visible&&v.push(A,mt,Et,q,Tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){const mt=V.update(A),Et=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Tt.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Tt.copy(mt.boundingSphere.center)),Tt.applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(Et)){const bt=mt.groups;for(let Bt=0,Ht=bt.length;Bt<Ht;Bt++){const Ft=bt[Bt],re=Et[Ft.materialIndex];re&&re.visible&&v.push(A,mt,re,q,Tt.z,Ft)}}else Et.visible&&v.push(A,mt,Et,q,Tt.z,null)}}const rt=A.children;for(let mt=0,Et=rt.length;mt<Et;mt++)aa(rt[mt],B,q,$)}function Uc(A,B,q,$){const H=A.opaque,rt=A.transmissive,mt=A.transparent;_.setupLightsView(q),Jt===!0&&lt.setGlobalState(S.clippingPlanes,q),$&&xt.viewport(M.copy($)),H.length>0&&Kr(H,B,q),rt.length>0&&Kr(rt,B,q),mt.length>0&&Kr(mt,B,q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Nc(A,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new As(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Br:Si,minFilter:bs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const rt=_.state.transmissionRenderTarget[$.id],mt=$.viewport||M;rt.setSize(mt.z*S.transmissionResolutionScale,mt.w*S.transmissionResolutionScale);const Et=S.getRenderTarget(),bt=S.getActiveCubeFace(),Bt=S.getActiveMipmapLevel();S.setRenderTarget(rt),S.getClearColor(k),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&Lt.render(q);const Ht=S.toneMapping;S.toneMapping=ts;const Ft=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),Jt===!0&&lt.setGlobalState(S.clippingPlanes,$),Kr(A,q,$),$t.updateMultisampleRenderTarget(rt),$t.updateRenderTargetMipmap(rt),It.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let be=0,Ne=B.length;be<Ne;be++){const Ce=B[be],Ee=Ce.object,Ot=Ce.geometry,Le=Ce.material,fe=Ce.group;if(Le.side===Xe&&Ee.layers.test($.layers)){const On=Le.side;Le.side=Fn,Le.needsUpdate=!0,Fc(Ee,q,$,Ot,Le,fe),Le.side=On,Le.needsUpdate=!0,re=!0}}re===!0&&($t.updateMultisampleRenderTarget(rt),$t.updateRenderTargetMipmap(rt))}S.setRenderTarget(Et,bt,Bt),S.setClearColor(k,N),Ft!==void 0&&($.viewport=Ft),S.toneMapping=Ht}function Kr(A,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let H=0,rt=A.length;H<rt;H++){const mt=A[H],Et=mt.object,bt=mt.geometry,Bt=mt.group;let Ht=mt.material;Ht.allowOverride===!0&&$!==null&&(Ht=$),Et.layers.test(q.layers)&&Fc(Et,B,q,bt,Ht,Bt)}}function Fc(A,B,q,$,H,rt){A.onBeforeRender(S,B,q,$,H,rt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(S,B,q,$,A,rt),H.transparent===!0&&H.side===Xe&&H.forceSinglePass===!1?(H.side=Fn,H.needsUpdate=!0,S.renderBufferDirect(q,B,$,H,A,rt),H.side=ns,H.needsUpdate=!0,S.renderBufferDirect(q,B,$,H,A,rt),H.side=Xe):S.renderBufferDirect(q,B,$,H,A,rt),A.onAfterRender(S,B,q,$,H,rt)}function jr(A,B,q){B.isScene!==!0&&(B=ft);const $=yt.get(A),H=_.state.lights,rt=_.state.shadowsArray,mt=H.state.version,Et=Z.getParameters(A,H.state,rt,B,q),bt=Z.getProgramCacheKey(Et);let Bt=$.programs;$.environment=A.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(A.isMeshStandardMaterial?Oe:rn).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",tt),Bt=new Map,$.programs=Bt);let Ht=Bt.get(bt);if(Ht!==void 0){if($.currentProgram===Ht&&$.lightsStateVersion===mt)return Bc(A,Et),Ht}else Et.uniforms=Z.getUniforms(A),A.onBeforeCompile(Et,S),Ht=Z.acquireProgram(Et,bt),Bt.set(bt,Ht),$.uniforms=Et.uniforms;const Ft=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=lt.uniform),Bc(A,Et),$.needsLights=Iu(A),$.lightsStateVersion=mt,$.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMap.value=H.state.directionalShadowMap,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotShadowMap.value=H.state.spotShadowMap,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMap.value=H.state.pointShadowMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ht,$.uniformsList=null,Ht}function Oc(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=ko.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Bc(A,B){const q=yt.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Ru(A,B,q,$,H){B.isScene!==!0&&(B=ft),$t.resetTextureUnits();const rt=B.fog,mt=$.isMeshStandardMaterial?B.environment:null,Et=p===null?S.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:nr,bt=($.isMeshStandardMaterial?Oe:rn).get($.envMap||mt),Bt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ht=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,be=!!q.morphAttributes.color;let Ne=ts;$.toneMapped&&(p===null||p.isXRRenderTarget===!0)&&(Ne=S.toneMapping);const Ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=Ce!==void 0?Ce.length:0,Ot=yt.get($),Le=_.state.lights;if(Jt===!0&&(X===!0||A!==g)){const wn=A===g&&$.id===u;lt.setState($,A,wn)}let fe=!1;$.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Le.state.version||Ot.outputColorSpace!==Et||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==bt||$.fog===!0&&Ot.fog!==rt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==lt.numPlanes||Ot.numIntersection!==lt.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ft||Ot.morphNormals!==re||Ot.morphColors!==be||Ot.toneMapping!==Ne||Ot.morphTargetsCount!==Ee)&&(fe=!0):(fe=!0,Ot.__version=$.version);let On=Ot.currentProgram;fe===!0&&(On=jr($,B,H));let Ds=!1,Bn=!1,dr=!1;const De=On.getUniforms(),jn=Ot.uniforms;if(xt.useProgram(On.program)&&(Ds=!0,Bn=!0,dr=!0),$.id!==u&&(u=$.id,Bn=!0),Ds||g!==A){xt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),De.setValue(D,"projectionMatrix",A.projectionMatrix),De.setValue(D,"viewMatrix",A.matrixWorldInverse);const In=De.map.cameraPosition;In!==void 0&&In.setValue(D,nt.setFromMatrixPosition(A.matrixWorld)),kt.logarithmicDepthBuffer&&De.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&De.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),g!==A&&(g=A,Bn=!0,dr=!0)}if(H.isSkinnedMesh){De.setOptional(D,H,"bindMatrix"),De.setOptional(D,H,"bindMatrixInverse");const wn=H.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),De.setValue(D,"boneTexture",wn.boneTexture,$t))}H.isBatchedMesh&&(De.setOptional(D,H,"batchingTexture"),De.setValue(D,"batchingTexture",H._matricesTexture,$t),De.setOptional(D,H,"batchingIdTexture"),De.setValue(D,"batchingIdTexture",H._indirectTexture,$t),De.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&De.setValue(D,"batchingColorTexture",H._colorsTexture,$t));const Zn=q.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ot.update(H,q,On),(Bn||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,De.setValue(D,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(jn.envMap.value=bt,jn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(jn.envMapIntensity.value=B.environmentIntensity),Bn&&(De.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ot.needsLights&&Cu(jn,dr),rt&&$.fog===!0&&it.refreshFogUniforms(jn,rt),it.refreshMaterialUniforms(jn,$,W,Y,_.state.transmissionRenderTarget[A.id]),ko.upload(D,Oc(Ot),jn,$t)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ko.upload(D,Oc(Ot),jn,$t),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&De.setValue(D,"center",H.center),De.setValue(D,"modelViewMatrix",H.modelViewMatrix),De.setValue(D,"normalMatrix",H.normalMatrix),De.setValue(D,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const wn=$.uniformsGroups;for(let In=0,la=wn.length;In<la;In++){const ls=wn[In];jt.update(ls,On),jt.bind(ls,On)}}return On}function Cu(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Iu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(A,B,q){const $=yt.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),yt.get(A.texture).__webglTexture=B,yt.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const q=yt.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Pu=D.createFramebuffer();this.setRenderTarget=function(A,B=0,q=0){p=A,I=B,R=q;let $=!0,H=null,rt=!1,mt=!1;if(A){const bt=yt.get(A);if(bt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(bt.__webglFramebuffer===void 0)$t.setupRenderTarget(A);else if(bt.__hasExternalTextures)$t.rebindTextures(A,yt.get(A.texture).__webglTexture,yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ft=A.depthTexture;if(bt.__boundDepthTexture!==Ft){if(Ft!==null&&yt.has(Ft)&&(A.width!==Ft.image.width||A.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(A)}}const Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);const Ht=yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?H=Ht[B][q]:H=Ht[B],rt=!0):A.samples>0&&$t.useMultisampledRTT(A)===!1?H=yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[q]:H=Ht,M.copy(A.viewport),C.copy(A.scissor),L=A.scissorTest}else M.copy(_t).multiplyScalar(W).floor(),C.copy(Vt).multiplyScalar(W).floor(),L=ae;if(q!==0&&(H=Pu),xt.bindFramebuffer(D.FRAMEBUFFER,H)&&$&&xt.drawBuffers(A,H),xt.viewport(M),xt.scissor(C),xt.setScissorTest(L),rt){const bt=yt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,q)}else if(mt){const bt=B;for(let Bt=0;Bt<A.textures.length;Bt++){const Ht=yt.get(A.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Ht.__webglTexture,q,bt)}}else if(A!==null&&q!==0){const bt=yt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,q)}u=-1},this.readRenderTargetPixels=function(A,B,q,$,H,rt,mt,Et=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){xt.bindFramebuffer(D.FRAMEBUFFER,bt);try{const Bt=A.textures[Et],Ht=Bt.format,Ft=Bt.type;if(!kt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-$&&q>=0&&q<=A.height-H&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),D.readPixels(B,q,$,H,Dt.convert(Ht),Dt.convert(Ft),rt))}finally{const Bt=p!==null?yt.get(p).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,$,H,rt,mt,Et=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt)if(B>=0&&B<=A.width-$&&q>=0&&q<=A.height-H){xt.bindFramebuffer(D.FRAMEBUFFER,bt);const Bt=A.textures[Et],Ht=Bt.format,Ft=Bt.type;if(!kt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,re),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),D.readPixels(B,q,$,H,Dt.convert(Ht),Dt.convert(Ft),0);const be=p!==null?yt.get(p).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,be);const Ne=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bf(D,Ne,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(re),D.deleteSync(Ne),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,q=0){const $=Math.pow(2,-q),H=Math.floor(A.image.width*$),rt=Math.floor(A.image.height*$),mt=B!==null?B.x:0,Et=B!==null?B.y:0;$t.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,mt,Et,H,rt),xt.unbindTexture()};const Lu=D.createFramebuffer(),Du=D.createFramebuffer();this.copyTextureToTexture=function(A,B,q=null,$=null,H=0,rt=null){rt===null&&(H!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=H,H=0):rt=0);let mt,Et,bt,Bt,Ht,Ft,re,be,Ne;const Ce=A.isCompressedTexture?A.mipmaps[rt]:A.image;if(q!==null)mt=q.max.x-q.min.x,Et=q.max.y-q.min.y,bt=q.isBox3?q.max.z-q.min.z:1,Bt=q.min.x,Ht=q.min.y,Ft=q.isBox3?q.min.z:0;else{const Zn=Math.pow(2,-H);mt=Math.floor(Ce.width*Zn),Et=Math.floor(Ce.height*Zn),A.isDataArrayTexture?bt=Ce.depth:A.isData3DTexture?bt=Math.floor(Ce.depth*Zn):bt=1,Bt=0,Ht=0,Ft=0}$!==null?(re=$.x,be=$.y,Ne=$.z):(re=0,be=0,Ne=0);const Ee=Dt.convert(B.format),Ot=Dt.convert(B.type);let Le;B.isData3DTexture?($t.setTexture3D(B,0),Le=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($t.setTexture2DArray(B,0),Le=D.TEXTURE_2D_ARRAY):($t.setTexture2D(B,0),Le=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const fe=D.getParameter(D.UNPACK_ROW_LENGTH),On=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ds=D.getParameter(D.UNPACK_SKIP_PIXELS),Bn=D.getParameter(D.UNPACK_SKIP_ROWS),dr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft);const De=A.isDataArrayTexture||A.isData3DTexture,jn=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Zn=yt.get(A),wn=yt.get(B),In=yt.get(Zn.__renderTarget),la=yt.get(wn.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,In.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let ls=0;ls<bt;ls++)De&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(A).__webglTexture,H,Ft+ls),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(B).__webglTexture,rt,Ne+ls)),D.blitFramebuffer(Bt,Ht,mt,Et,re,be,mt,Et,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||yt.has(A)){const Zn=yt.get(A),wn=yt.get(B);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Lu),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Du);for(let In=0;In<bt;In++)De?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zn.__webglTexture,H,Ft+In):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zn.__webglTexture,H),jn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wn.__webglTexture,rt,Ne+In):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wn.__webglTexture,rt),H!==0?D.blitFramebuffer(Bt,Ht,mt,Et,re,be,mt,Et,D.COLOR_BUFFER_BIT,D.NEAREST):jn?D.copyTexSubImage3D(Le,rt,re,be,Ne+In,Bt,Ht,mt,Et):D.copyTexSubImage2D(Le,rt,re,be,Bt,Ht,mt,Et);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else jn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Le,rt,re,be,Ne,mt,Et,bt,Ee,Ot,Ce.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,rt,re,be,Ne,mt,Et,bt,Ee,Ce.data):D.texSubImage3D(Le,rt,re,be,Ne,mt,Et,bt,Ee,Ot,Ce):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,re,be,mt,Et,Ee,Ot,Ce.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,re,be,Ce.width,Ce.height,Ee,Ce.data):D.texSubImage2D(D.TEXTURE_2D,rt,re,be,mt,Et,Ee,Ot,Ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,On),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ds),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,dr),rt===0&&B.generateMipmaps&&D.generateMipmap(Le),xt.unbindTexture()},this.initRenderTarget=function(A){yt.get(A).__webglFramebuffer===void 0&&$t.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$t.setTextureCube(A,0):A.isData3DTexture?$t.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$t.setTexture2DArray(A,0):$t.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){I=0,R=0,p=null,xt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const Mt=0,ni=1,Sn=2,ke=3,Is=4,bn=5,rs=6,ti=7,Jo=8,Ps=9,Ge=10,Ke=11,$e=12,Un=13,Qo=14,Dn=15,Re=16,Qe=17,ze=18,yi=19,je=20,es=21,zi=22,Fe=23,Ue=24,un=25,is=26,Vr=27,Wr=28,qr=29,Xr=30,$r=31,ss=32,Nn=33,Gn=34,An=35,qn=36,yn=37,di=38,Yr=39,ln=40,Ye=41,He=42,Je=43,fn=44,pn=45,ii=46,Rn=47,ui=48,Vn=49,Yn=50,Kn=51,lr=52,cr=53,Ls=54,hr=55,Hi=56,Ji=57,Fi=58,sr=59,Rt=r=>r,rv={[Ue]:"Crafting Bench",[He]:"Inside Door",[Je]:"Inside Door",[pn]:"Bed",[Kn]:"Curved Hull Plating"};function ov(r){return rv[r]??hn[r].name}const av=new Set([ni,Sn,ke,Is,bn,rs,ii,ti,Rn,ui,Vn,un,di,Gn,An,qn,yn,Nn,lr,cr,hr,Ls]),lv=new Set([Ke,je,$e,Ye,He,Je,ze,is,Vr,Wr,qr,Xr,$r,ss]);function Yh(r){return hn[r].placeable&&!av.has(r)&&!lv.has(r)}const hn=[Rt({id:Mt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),Rt({id:ni,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),Rt({id:Sn,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),Rt({id:ke,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),Rt({id:Is,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),Rt({id:bn,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),Rt({id:rs,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),Rt({id:ti,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),Rt({id:Jo,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),Rt({id:Ps,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),Rt({id:Ge,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Rt({id:Ke,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Rt({id:$e,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),Rt({id:Un,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),Rt({id:Qo,name:"Iron Rod",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),Rt({id:Dn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),Rt({id:Re,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),Rt({id:Qe,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),Rt({id:ze,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),Rt({id:yi,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),Rt({id:je,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Rt({id:es,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),Rt({id:zi,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),Rt({id:Fe,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),Rt({id:Ue,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),Rt({id:un,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),Rt({id:is,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),Rt({id:Vr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),Rt({id:Wr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),Rt({id:qr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),Rt({id:Xr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),Rt({id:$r,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),Rt({id:ss,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),Rt({id:Nn,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),Rt({id:Gn,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!0,color:[.28,.52,.28]}),Rt({id:An,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),Rt({id:qn,name:"Wheat Sprout",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!0,color:[.66,.66,.34]}),Rt({id:yn,name:"Desert Wheat",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),Rt({id:di,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),Rt({id:Yr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),Rt({id:ln,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),Rt({id:Ye,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Rt({id:He,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Rt({id:Je,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),Rt({id:fn,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),Rt({id:pn,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),Rt({id:ii,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),Rt({id:Rn,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),Rt({id:ui,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),Rt({id:Vn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!0,color:[.3,.55,.3]}),Rt({id:Yn,name:"Curved Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Rt({id:Kn,name:"Hull Slope",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.53,.58]}),Rt({id:lr,name:"Iron Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.62,.52,.42]}),Rt({id:cr,name:"Copper Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.72,.42,.26]}),Rt({id:Ls,name:"Alabaster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.4,breakTime:1.8,tool:"pickaxe",minTier:0,placeable:!1,color:[.86,.83,.74]}),Rt({id:hr,name:"Cobalt Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:4.2,tool:"pickaxe",minTier:3,placeable:!1,color:[.36,.46,.68]}),Rt({id:Hi,name:"Broken Thruster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.42,.44,.5]}),Rt({id:Ji,name:"Thruster (lit)",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.9,.6,.3]}),Rt({id:Fi,name:"Sandstorm Breaker",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.3,breakTime:5,tool:"disassembler",minTier:2,placeable:!0,color:[.72,.28,.24]}),Rt({id:sr,name:"Armoury",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:null,minTier:0,placeable:!0,color:[.45,.4,.36]})],iu=8,Kt=96,G=16,qe=1440;function dn(r){return hn[r].solid}function ta(r){return hn[r].opaque}function Mn(r){return r===ze||r>=is&&r<=ss}function ki(r){return r===ze?8:Mn(r)?33-r:0}function Va(r){return 33-r}function cv(r){let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class ea{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function gt(r,t,e){let n=r*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function jl(r){return r*r*(3-2*r)}function Sc(r,t,e){const n=Math.floor(r),s=Math.floor(t),o=jl(r-n),i=jl(t-s),l=gt(n,s,e),h=gt(n+1,s,e),a=gt(n,s+1,e),c=gt(n+1,s+1,e);return l+(h-l)*o+(a-l)*i+(l-h-a+c)*o*i}function vs(r,t,e,n=4,s=2,o=.5){let i=0,l=1,h=1,a=0;for(let c=0;c<n;c++)i+=Sc(r*h,t*h,e+c*101)*l,a+=l,l*=o,h*=s;return i/a}function hv(r,t,e,n=3){let s=0,o=1,i=1,l=0;for(let h=0;h<n;h++){const a=Math.abs(Sc(r*i,t*i,e+h*101)*2-1);s+=(1-a)*o,l+=o,o*=.5,i*=2}return s/l}function Zl(r,t){const e=Math.floor(r),n=jl(r-e),s=gt(e,0,t),o=gt(e+1,0,t);return s+(o-s)*n}const dv=0,Jl=1,su=2,Wo=3,Ar=4,uv=1e6,Ie=320,ve=380,xn=150;class ru{constructor(t){this.seed=t;const e=new ea(t^24378);for(let n=0;n<6;n++){const s=e.range(0,Math.PI*2),o=e.range(160,900);this.oases.push({x:Math.round(Math.cos(s)*o),z:Math.round(Math.sin(s)*o),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),s=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,s=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s)}}for(let n=0;n<13;n++){const s=e.range(0,Math.PI*2),o=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(s)*o),z:Math.round(Math.sin(s)*o),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(gt(t,e,this.seed+53)-.5)*110,s=(gt(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*Ie+n),z:Math.round(e*Ie+s)}}get gtx(){return Math.round(this.homeTown.x/Ie)}get gtz(){return Math.round(this.homeTown.z/Ie)}townAt(t,e){if(t===this.gtx&&e===this.gtz)return!0;if(Math.abs(t)<2&&Math.abs(e)<2||gt(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const s of this.oases)if(Math.hypot(s.x-n.x,s.z-n.z)<s.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let s=null,o=n;const i=Math.floor((t-n)/Ie),l=Math.floor((t+n)/Ie),h=Math.floor((e-n)/Ie),a=Math.floor((e+n)/Ie);for(let c=i;c<=l;c++)for(let d=h;d<=a;d++){if(!this.townAt(c,d))continue;const f=this.townCenter(c,d),m=Math.hypot(f.x-t,f.z-e);m<=o&&(o=m,s=f)}return s}nearestTown(t,e){let n=null,s=1/0;const o=Math.floor(t/Ie),i=Math.floor(e/Ie);for(let l=o-4;l<=o+4;l++)for(let h=i-4;h<=i+4;h++){if(!this.townAt(l,h))continue;const a=this.townCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<s&&(s=c,n=a)}return n??this.homeTown}mouthAt(t,e){if(!Mv(this.seed,t,e))return!1;const n=this.mouthCenter(t,e);return!(this.nearOasis(n.x,n.z)||this.townNear(n.x,n.z,20))}mouthCenter(t,e){return bv(this.seed,t,e)}mouthNear(t,e,n){let s=null,o=n;const i=Math.floor((t-n)/xn),l=Math.floor((t+n)/xn),h=Math.floor((e-n)/xn),a=Math.floor((e+n)/xn);for(let c=i;c<=l;c++)for(let d=h;d<=a;d++){if(!this.mouthAt(c,d))continue;const f=this.mouthCenter(c,d),m=Math.hypot(f.x-t,f.z-e);m<=o&&(o=m,s=f)}return s}campAt(t,e){return hu(this.seed,t,e)}campCenter(t,e){return Ec(this.seed,t,e)}campType(t,e){return Ev(this.seed,t,e)}campNear(t,e,n){let s=null,o=n;const i=Math.floor((t-n)/ve),l=Math.floor((t+n)/ve),h=Math.floor((e-n)/ve),a=Math.floor((e+n)/ve);for(let c=i;c<=l;c++)for(let d=h;d<=a;d++){if(!this.campAt(c,d))continue;const f=this.campCenter(c,d),m=Math.hypot(f.x-t,f.z-e);m<=o&&(o=m,s={x:f.x,z:f.z,type:this.campType(c,d)})}return s}nearestCamp(t,e){let n=null,s=1/0;const o=Math.floor(t/ve),i=Math.floor(e/ve);for(let l=o-3;l<=o+3;l++)for(let h=i-3;h<=i+3;h++){if(!this.campAt(l,h))continue;const a=this.campCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<s&&(s=c,n={x:a.x,z:a.z,type:this.campType(l,h)})}return n}}function wc(r,t,e){const n=Math.min(.999,Math.max(.001,vs(r/900+.5,t/900+.5,e,3))),o=[.17,.42,.57,.72,.9].map(h=>Math.exp(-Math.abs(n-h)/.05)),i=Math.max(Math.abs(r),Math.abs(t));i<80&&(o[0]+=Math.pow(1-i/80,2)*6);const l=o.reduce((h,a)=>h+a,0);return o.map(h=>h/l)}function Rr(r,t,e){const n=wc(r,t,e);let s=0;for(let o=1;o<5;o++)n[o]>n[s]&&(s=o);return s}function Kh(r,t,e){const n=wc(t,e,r),s=[30+vs(t/140,e/140,r+7)*12+vs(t/45,e/45,r+8)*3+Math.sin(t/9+e/13)*.9,29+vs(t/160,e/160,r+9)*12+Math.max(0,Sc(t/55,e/55,r+11)-.5)*18,28+vs(t/220,e/220,r+5)*3,33+Math.floor(vs(t/170,e/170,r+13)*7.99)*6,27-hv(t/210,e/210,r+17)*13-Math.max(0,vs(t/500,e/500,r+19)-.55)*10];let o=0;for(let i=0;i<5;i++)o+=n[i]*s[i];return o}function te(r,t,e){const n=Math.max(Math.abs(t),Math.abs(e));if(n<=14)return 30;let s=Kh(r,t,e);if(n<30){const i=(n-14)/16,l=i*i*(3-2*i);return 30+(s-30)*l}const o=fv(r,t,e);if(o){const i=Math.round(Kh(r,o.cx,o.cz)),l=Math.min(1,(12-o.d)/3),h=l*l*(3-2*l);s+=(i-s)*h}return s}function fv(r,t,e){const n=Math.floor(t/ve),s=Math.floor(e/ve);let o=null;for(let i=n-1;i<=n+1;i++)for(let l=s-1;l<=s+1;l++){if(Math.abs(t-i*ve)>42||Math.abs(e-l*ve)>42||!hu(r,i,l))continue;const h=Ec(r,i,l),a=Math.max(Math.abs(h.x-t),Math.abs(h.z-e));a<=12&&(o===null||a<o.d)&&(o={cx:h.x,cz:h.z,d:a})}return o}function pv(r,t,e,n,s){const o=wc(t,e,r);let i=0,l=1;o[1]>o[0]&&(i=1,l=0);for(let h=2;h<5;h++)o[h]>o[i]?(l=i,i=h):o[h]>o[l]&&(l=h);return o[l]/o[i]>.35&&gt(t,e,r+45)<o[l]/(o[i]+o[l])&&(i=l),n===s?i===su?rs:i===Ar?ke:i===Wo?Sn:i===Jl&&gt(t,e,r+41)>.78?Is:ni:n>=s-3?i===Ar?ke:ni:i===Wo||i===Ar?ke:Sn}function Zi(r,t,e,n){const s=_=>_*_*(3-2*_),o=Math.floor(r),i=Math.floor(t),l=Math.floor(e),h=(_,T,w)=>gt(_+w*911,T+w*577,n),a=s(r-o),c=s(t-i),d=s(e-l),f=(_,T,w)=>_+(T-_)*w,m=f(h(o,i,l),h(o+1,i,l),a),x=f(h(o,i+1,l),h(o+1,i+1,l),a),y=f(h(o,i,l+1),h(o+1,i,l+1),a),v=f(h(o,i+1,l+1),h(o+1,i+1,l+1),a);return f(f(m,x,c),f(y,v,c),d)}const Uo=r=>Math.min(r-4,30),jh=new Map,Cr=r=>{let t=jh.get(r);return t||(t=new ru(r),jh.set(r,t)),t},ou=(r,t,e)=>Zi(t/9,.37,e/9,r+309)>.75;function au(r,t,e,n){if(t*t+e*e<240)return Uo(n);for(const s of Cr(r).oases)if(Math.abs(t-s.x)<=s.r+1&&Math.abs(e-s.z)<=s.r+1)return Math.min(Uo(n),Math.round(te(r,s.x,s.z))-5);return ou(r,t,e)?n:Uo(n)}function Zh(r,t,e,n,s){if(e<3||t*t+n*n<240)return!1;const o=s??Math.round(te(r,t,n)),i=au(r,t,n,o);if(e>i)return!1;const l=Zi(t/9,e/5.5,n/9,r+301),h=Zi(t/23,e/15,n/23,r+307);return l*.55+h*.45>.575+Math.max(0,i-e-4)*.005}const Di=(r,t,e)=>r+","+t+","+e;function mv(r,t,e){if(gt(r,t,e+121)>=.6)return null;const n=Math.round(te(e,r,t)),s=n-4,o=n-16;if(o<4)return null;const i=2+(gt(r,t,e+123)*3|0),l=[];for(let L=0;L<i;L++){const k=-1+(gt(r+L*3,t,e+125)*4|0),N=-1+(gt(r,t+L*3,e+127)*4|0);l.push({x:r+k*6,z:t+N*6,hx:1+(gt(r-L,t+L,e+129)*3|0),hz:1+(gt(r+L,t-L,e+131)*3|0)})}const h=new Set;let a=1/0,c=-1/0,d=1/0,f=-1/0,m=1/0,x=-1/0;const y=(L,k,N)=>{h.add(Di(L,k,N)),L<a&&(a=L),L>c&&(c=L),N<d&&(d=N),N>f&&(f=N),k<m&&(m=k),k>x&&(x=k)},v=(L,k,N,z,Y,W)=>{for(let J=Math.min(L,k);J<=Math.max(L,k);J++)for(let et=Math.min(N,z);et<=Math.max(N,z);et++)for(let _t=Y;_t<=W;_t++)y(J,_t,et)};for(const L of l)v(L.x-L.hx,L.x+L.hx,L.z-L.hz,L.z+L.hz,o,s);for(let L=1;L<l.length;L++)v(l[L-1].x,l[L].x,l[L-1].z,l[L-1].z,o,s),v(l[L].x,l[L].x,l[L-1].z,l[L].z,o,s);const _=l[0],T=gt(r,t+1,e+133)>.5?1:-1,w=gt(r+1,t,e+135)>.5?1:-1,S=_.x+T*(_.hx+1),b=_.z+w*(_.hz+1);v(S,S+1,b,b+1,o,s-3);const R=[[9,-6],[9,7],[-11,-5]][gt(r,t,e+137)*3|0],p={x:r+R[0],z:t+R[1]},u=Math.round(te(e,p.x,p.z)),g=u,M=Math.min(s-8,u-3);if(g-M<4)return null;const C=[[0,0],[1,0],[1,1],[0,1]];for(let L=0;L<=g-M;L++){const k=C[L&3],N=g-L;y(p.x+k[0],N,p.z+k[1]),y(p.x+k[0],N+1,p.z+k[1])}return v(p.x,_.x,p.z,p.z,M,M+1),v(_.x,_.x,p.z,_.z,M,M+1),{x0:a,x1:c,z0:d,z1:f,y0:m,y1:x,air:h,sh:{...p,y0:g}}}function gv(r,t,e){const n=mv(t.x,t.z,e);if(n){for(let s=n.x0;s<=n.x1;s++)for(let o=n.z0;o<=n.z1;o++)for(let i=n.y0;i<=n.y1;i++)n.air.has(Di(s,i,o))&&r(s,i,o,Mt);for(let s=n.x0-1;s<=n.x1+1;s++)for(let o=n.z0-1;o<=n.z1+1;o++)for(let i=n.y0-1;i<=n.y1+1;i++){if(n.air.has(Di(s,i,o)))continue;(n.air.has(Di(s+1,i,o))||n.air.has(Di(s-1,i,o))||n.air.has(Di(s,i+1,o))||n.air.has(Di(s,i-1,o))||n.air.has(Di(s,i,o+1))||n.air.has(Di(s,i,o-1)))&&r(s,i,o,gt(s*3+o*7,i*5+o,e+139)<.16?Ls:yi)}}}function vv(r){const n=(a,c)=>a===4||a===-6?Math.abs(c)<=4:c===5||c===-5?a>=-5&&a<=3:a>=-5&&a<=3&&c>=-4&&c<=4,s=(a,c,d)=>(a===4||a===-6)&&Math.abs(d)>=3&&(c===30||c===34),o=(a,c)=>Math.abs(c)===5&&(a===3||a===-5),i=(a,c,d)=>Math.abs(c)===5&&a>=-3&&a<=2&&d>=31&&d<=33;for(let a=-6;a<=4;a++)for(let c=-5;c<=5;c++)for(let d=30;d<=34;d++){if(!n(a,c)||s(a,d,c))continue;const f=a>=2&&Math.abs(c)>2,m=a>=-5&&a<=3&&c>=-4&&c<=4&&d>=31&&d<=33&&!f;r(a,d,c,m?Mt:o(a,c)||i(a,c,d)?Yn:d===30?ln:Ge)}for(let a=-3;a<=1;a++)for(let c=-2;c<=2;c++)r(a,35,c,Kn);for(let a=-2;a<=0;a++)for(let c=-1;c<=1;c++)r(a,36,c,Kn);for(let a=-2;a<=1;a++)for(const c of[6,7,8,9,-6,-7,-8,-9])r(a,32,c,ln);for(const a of[-3,2])for(const c of[6,7,8,-6,-7,-8])r(a,32,c,ln);for(const a of[-1,0])r(a,31,10,ln),r(a,31,-10,ln);for(const a of[-1,0])r(a,31,11,ln),r(a,31,-11,ln);for(const a of[-1,0])r(a,32,11,Hi),r(a,32,-11,Hi);const l=(a,c,d)=>{r(a,c,d,Ke),r(a,c+1,d,je)},h=(a,c,d)=>{r(a,c,d,Ye),r(a,c+1,d,He)};for(let a=-4;a<=4;a++)for(let c=31;c<=33;c++)r(1,c,a,Ge),r(-2,c,a,Ge);for(let a=-5;a<=-3;a++)for(const c of[-2,2])for(let d=31;d<=33;d++)r(a,d,c,Ge);h(1,31,0),h(-2,31,0),h(-2,31,3),h(-2,31,-3),l(-6,31,0);for(let a=-2;a<=2;a++)for(let c=32;c<=33;c++)r(4,c,a,Ps);r(2,31,-2,fn),r(3,31,-2,pn),r(-4,30,4,ze),r(-4,29,4,ze),r(-3,30,4,ze);for(const[a,c]of[[0,-1],[1,0],[-1,0],[0,1],[0,-2]])r(-4+a,29,4+c,bn);r(-4,28,4,bn),r(-3,30,3,bn),r(-5,30,4,bn),r(-4,31,-4,zi),r(-4,31,-1,Dn),r(0,31,-3,Re),r(0,31,-2,Ue),r(-1,31,1,Fi);for(const[a,c]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])r(a,34,c,Un);for(const[a,c]of[[0,3],[0,4],[-1,4],[2,2]])r(a,31,c,ln)}function _v(r,t,e){const n=new ea(uv+77),s=Math.round(te(e,t.x,t.z));for(let o=-2;o<=2;o++)for(let i=-2;i<=2;i++){if(Math.abs(o)!==2&&Math.abs(i)!==2)continue;const l=Math.abs(o)===2&&Math.abs(i)===2;for(let h=s+1;h<=s+3;h++)r(t.x+o,h,t.z+i,l?Yn:Ge)}for(let o=s+1;o<=s+2;o++)r(t.x,o,t.z-2,Mt);for(let o=0;o<40;o++){const i=t.x+n.int(-5,5),l=t.z+n.int(-5,5),h=Math.round(te(e,i,l)),a=n.next();r(i,h+n.int(0,1),l,a<.45?Ge:a<.55?Yn:ln)}r(t.x,Math.round(te(e,t.x,t.z))+1,t.z,es)}function lu(r,t,e,n){const s=5+Math.floor(n()*3),o=[],i=(d,f,m,x,y)=>o.push({x:d,y:f,z:m,b:x,stage:y});i(r,t,e,Rn,1),i(r,t+1,e,Rn,1);for(let d=2;d<s;d++)i(r,t+d,e,Rn,2);const l=[[1,0],[-1,0],[0,1],[0,-1]],h=2+(n()<.5?1:0);for(let d=0;d<h;d++){const f=l[Math.floor(n()*4)];i(r+f[0],t+s-2+d%2,e+f[1],Rn,2)}const a=new Set(o.map(d=>d.x+","+d.y+","+d.z)),c=t+s-1;for(let d=-1;d<=2;d++){const f=d===-1||d===2?1.7:2.4;for(let m=-3;m<=3;m++)for(let x=-3;x<=3;x++){const y=m*m+x*x+d*d*2.2;if(y>f*f||y>(f-.9)*(f-.9)&&n()<.3||m===0&&x===0)continue;const v=r+m,_=c+d,T=e+x;a.has(v+","+_+","+T)||i(v,_,T,ui,3)}}return o}function cu(r,t,e,n,s,o){const i=new ea(gt(t,n,s+o)*4294967296>>>0||1);for(const l of lu(t,e+1,n,()=>i.next()))r(l.x,l.y,l.z,l.b)}function xv(r,t,e){const n=Math.round(te(e,t.x,t.z));for(let i=-t.r-1;i<=t.r+1;i++)for(let l=-t.r-1;l<=t.r+1;l++){const h=t.x+i,a=t.z+l,c=Math.sqrt(i*i+l*l),d=Math.round(te(e,h,a));if(c<=t.r){const f=Math.max(1,Math.round(2.7-1.7*(c/t.r)));for(let m=d;m>n-f;m--)r(h,m,a,Mt);r(h,n-f,a,ni);for(let m=n-f+1;m<=n;m++)r(h,m,a,ze);for(let m=n+1;m<=n+12;m++)r(h,m,a,Mt)}else if(c<=t.r+1)for(let f=d;f<n+1;f++)r(h,f,a,ni)}const s=3+(gt(t.x,t.z,e+73)<.5?1:0);for(let i=-t.r-s;i<=t.r+s;i++)for(let l=-t.r-s;l<=t.r+s;l++){const h=Math.sqrt(i*i+l*l);if(h<=t.r||h>t.r+s)continue;const a=t.x+i,c=t.z+l,d=Math.max(Math.round(te(e,a,c)),n);for(let f=d-2;f<=d;f++)r(a,f,c,f===d?ii:bn)}const o=4+Math.floor(gt(t.x,t.z,e+75)*4);for(let i=0;i<o;i++){const l=i*(Math.PI*2/o)+gt(t.x+i,t.z-i,e+77)*1.1,h=t.r+1.5+gt(t.x-i,t.z+i,e+79)*(s+2),a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h),d=Math.max(Math.round(te(e,a,c)),n);cu((f,m,x,y)=>{m>n&&Math.hypot(f-t.x,x-t.z)<=t.r||r(f,m,x,y)},a,d,c,e,81)}for(let i=0;i<5;i++){if(gt(t.x,t.z,e+61+i)<.35)continue;const l=i*1.27+gt(t.z,t.x,e+67+i)*.8,h=t.r+.5,a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h);Math.hypot(a-t.x,c-t.z)<t.r+1||r(a,Math.max(Math.round(te(e,a,c)),n)+1,c,An)}}function yv(r,t,e){for(const[a,c]of[[-4,-3],[3,2],[-3,5]]){const d=Math.round(te(e,t.x+a,t.z+c));for(let f=0;f<5;f++)for(let m=0;m<5;m++)for(let x=d-1;x<=d+3;x++){const y=x===d-1,v=(f===0||f===4||m===0||m===4)&&x>=d&&x<=d+2,_=x===d+3,T=f===0&&(m===2||m===3)&&x>=d&&x<=d+2;if(!(y||v||_)||T){r(t.x+a+f,x,t.z+c+m,Mt);continue}r(t.x+a+f,x,t.z+c+m,yi)}r(t.x+a+1,d,t.z+c+1,Fe),r(t.x+a+2,d,t.z+c+1,fn),r(t.x+a+3,d,t.z+c+1,pn)}const n=t.x+3+Math.round((gt(t.x,t.z,e+83)-.5)*8),s=t.z-3+Math.round((gt(t.z,t.x,e+85)-.5)*8),o=2.5+gt(t.x,t.z,e+87)*2,i=(a,c)=>[[-4,-3],[3,2],[-3,5]].some(([d,f])=>a>=d-1+t.x&&a<=d+5+t.x&&c>=f-1+t.z&&c<=f+5+t.z);for(let a=-5;a<=5;a++)for(let c=-5;c<=5;c++){if(Math.sqrt(a*a+c*c)>o)continue;const d=n+a,f=s+c;if(i(d,f))continue;const m=Math.round(te(e,d,f));for(let x=m-2;x<=m;x++)r(d,x,f,x===m?ii:bn)}const l=3+Math.floor(gt(t.x,t.z,e+89)*4);for(let a=0;a<l;a++){const c=a*(Math.PI*2/l)+gt(t.x+a,t.z-a,e+91)*1.3,d=1+gt(t.x-a,t.z+a,e+93)*o,f=n+Math.round(Math.cos(c)*d),m=s+Math.round(Math.sin(c)*d);i(f,m)||cu(r,f,Math.round(te(e,f,m)),m,e,95)}const h=Math.round(te(e,t.x,t.z+11));for(let a=0;a<5;a++)for(let c=0;c<3;c++)r(t.x-8+a,h,t.z+10+c,Nn);r(t.x-7,h+1,t.z+11,yn),r(t.x-5,h+1,t.z+10,yn),r(t.x-4,h+1,t.z+12,An)}function Mv(r,t,e){return Math.abs(t)<=1&&Math.abs(e)<=1?!1:gt(t,e,r+311)<.55}function bv(r,t,e){const n=(gt(t,e,r+313)-.5)*60,s=(gt(t,e,r+315)-.5)*60;return{x:Math.round(t*xn+n),z:Math.round(e*xn+s)}}const Sv=[[1,0],[-1,0],[0,1],[0,-1]];function wv(r,t,e){if(t.x*t.x+t.z*t.z<1600)return;const[n,s]=Sv[gt(t.x,t.z,e+317)*4|0],[o,i]=[-s,n],l=Math.round(te(e,t.x,t.z));let h=-1;for(let b=1;b<=3;b++)if(Math.round(te(e,t.x+n*b,t.z+s*b))<=l-2){h=b;break}if(h<0)return;const a=t.x+n*(h-1),c=t.z+s*(h-1),d=Math.round(te(e,t.x+n*h,t.z+s*h)),f=Math.round(te(e,a,c)),m=Math.max(Math.min(d+1,f),8);if(f<m+2)return;const x=12+(gt(t.x,t.z,e+319)*5|0),y=a+n*x,v=c+s*x,_=Uo(Math.round(te(e,y,v)))-1;if(_<6||_>m-4)return;for(let b=2;b<x;b++){const I=a+n*b,R=c+s*b,p=m-Math.round(b*(m-_)/x);if(Math.round(te(e,I,R))<p+2||Math.round(te(e,I+o,R+i))<p+2)return}const T=new Set,w=(b,I,R)=>{I<6||(T.add(b+","+I+","+R),r(b,I,R,Mt))};for(let b=0;b<=x;b++){const I=a+n*b,R=c+s*b,p=b===x?_:m-Math.round(b*(m-_)/x);for(const u of[0,1])w(I+o*u,p,R+i*u),w(I+o*u,p+1,R+i*u),b<=1&&w(I+o*u,p+2,R+i*u)}for(let b=y-2;b<=y+2;b++)for(let I=v-2;I<=v+2;I++){for(let R=_;R<=_+2;R++)w(b,R,I);r(b,_-1,I,ke),r(b,_+3,I,ke)}for(const b of T){const I=b.split(","),R=+I[0],p=+I[1],u=+I[2];for(const[g,M,C]of[[R+1,p,u],[R-1,p,u],[R,p+1,u],[R,p-1,u],[R,p,u+1],[R,p,u-1]])M<5||T.has(g+","+M+","+C)||M<=Math.round(te(e,g,C))&&r(g,M,C,ke)}for(const[b,I]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){if(b===n&&I===s)continue;const R=a+b,p=c+I;r(R,Math.round(te(e,R,p)),p,ke)}for(const b of[0,1])r(a+o*b,m-1,c+i*b,ke);r(a+n,m+3,c+s,ke);const S=2+(gt(t.x+7,t.z-3,e+321)*3|0);for(let b=0;b<S;b++){const I=1+(gt(t.x+b,t.z,e+323)*3|0),R=(gt(t.x-b,t.z,e+325)*3|0)-1,p=t.x+n*(h+I)+o*R,u=t.z+s*(h+I)+i*R;r(p,Math.round(te(e,p,u))+1,u,gt(p,u,e+327)>.5?Is:ke)}}function hu(r,t,e){if(Math.abs(t)<=1&&Math.abs(e)<=1||gt(t,e,r+401)>=.8)return!1;const n=Ec(r,t,e),s=Cr(r);for(const o of s.oases)if(Math.hypot(o.x-n.x,o.z-n.z)<o.r+20)return!1;return!(Math.hypot(s.secondShip.x-n.x,s.secondShip.z-n.z)<40||s.townNear(n.x,n.z,25)!==null)}function Ec(r,t,e){const n=(gt(t,e,r+403)-.5)*60,s=(gt(t,e,r+405)-.5)*60;return{x:Math.round(t*ve+n),z:Math.round(e*ve+s)}}function Ev(r,t,e){return gt(t,e,r+407)*3|0}function Tv(r){return{x:r.x+1.5,z:r.z-1.5}}function Av(r,t,e){const n=Math.round(te(e,t.x,t.z));r(t.x+2,n+1,t.z+1,yi);for(const[o,i]of[[3,1],[2,2],[3,2]])for(let l=n+1;l<=n+2;l++)r(t.x+o,l,t.z+i,Rn);r(t.x+3,n+3,t.z+1,ln),r(t.x+2,n+3,t.z+2,ln),r(t.x+3,n+3,t.z+2,ln),r(t.x+2,n+3,t.z+1,Un),r(t.x-2,n+1,t.type===1?t.z+3:t.z,Qe);const s=(o,i,l,h)=>{const a=o-(l>>1),c=o+(l>>1),d=i-(h>>1),f=i+(h>>1);for(let m=a;m<=c;m++)for(let x=d;x<=f;x++)for(let y=n;y<=n+4;y++){const v=m===a||m===c||x===d||x===f,_=y===n||y===n+4||v&&y<=n+3;r(m,y,x,_?yi:Mt)}r(c,n+1,i,Ke),r(c,n+2,i,je),r(c,n+1,i+1,Mt),r(c,n+2,i+1,Mt),r(a+1,n+1,i+1,Fe),r(c-2,n+1,i-1,fn),r(c-2,n+1,i,pn),r(c-1,n+3,d+1,Un)};if(t.type===0){for(let l=-2;l<=2;l++)for(let h=-2;h<=2;h++){if(l*l+h*h>4.5||l===2&&h===0)continue;const a=t.x-4+l,c=t.z+h,d=gt(a*3+1,c*5-2,e+411)>.62?yi:Sn;for(let f=n;f<=n+9;f++)r(a,f,c,d)}for(let l=2;l<=3;l++)r(t.x-4-l,n+7,t.z,Rn);r(t.x-7,n+7,t.z,ln);for(let l=1;l<=3;l++)r(t.x-7,n+7+l,t.z,ti),r(t.x-7,n+7-l,t.z,ti),r(t.x-7,n+7,t.z+l,ti),r(t.x-7,n+7,t.z-l,ti);const o=t.x-7,i=t.z+2;for(let l=o-1;l<=o+1;l++)for(let h=i-1;h<=i+1;h++)for(let a=n;a<=n+3;a++){const c=l===o+1&&h===i&&(a===n+1||a===n+2);!(a===n||a===n+3||(Math.abs(l-o)===1||Math.abs(h-i)===1)&&a<=n+2)||c?r(l,a,h,Mt):r(l,a,h,yi)}r(o,n+1,i,Fe)}else if(t.type===1)s(t.x-4,t.z,5,5);else{s(t.x-5,t.z-3,7,5);for(let i=t.x+4;i<=t.x+9;i++)for(let l=t.z-4;l<=t.z-1;l++)r(i,n,l,Nn),i===t.x+4&&l===t.z-4||i===t.x+9&&l===t.z-1?r(i,n+1,l,An):r(i,n+1,l,(i+l)%2?qn:yn);const o=(i,l)=>{r(i,n+1,l,ti),r(i,n+2,l,ti)};for(let i=t.x+3;i<=t.x+10;i+=2)o(i,t.z-5),o(i,t.z);for(let i=t.z-3;i<=t.z-1;i+=2)o(t.x+3,i),o(t.x+10,i);for(let i=t.x;i<=t.x+3;i++)for(let l=t.z+3;l<=t.z+5;l++){const h=i>=t.x+1&&i<=t.x+2&&l===t.z+4;r(i,n+1,l,h?ze:ke)}}}function Rv(r,t,e,n){const s=new Uint8Array(G*G*Kt),o=(R,p,u,g)=>{const M=R-e*G,C=u-n*G;M>=0&&M<G&&C>=0&&C<G&&p>=0&&p<Kt&&(s[(M*G+C)*Kt+p]=g)},i=G+2,l=new Uint8Array(i*i*Kt),h=new Int16Array(i*i).fill(-1),a=(R,p)=>{const u=(R-e*G+1)*i+(p-n*G+1);return h[u]<0&&(h[u]=Math.round(te(r,R,p))),h[u]},c=(R,p,u)=>{const g=R-e*G+1,M=u-n*G+1;if(g<0||g>=i||M<0||M>=i)return Zh(r,R,p,u);const C=(g*i+M)*Kt+p;return l[C]||(l[C]=Zh(r,R,p,u,a(R,u))?2:1),l[C]===2};for(let R=0;R<G;R++)for(let p=0;p<G;p++){const u=e*G+R,g=n*G+p,M=Math.round(te(r,u,g));for(let k=0;k<=M;k++)s[(R*G+p)*Kt+k]=pv(r,u,g,k,M);const C=u*u+g*g<240,L=au(r,u,g,M);if(!C)for(let k=3;k<=L;k++){const N=(R*G+p)*Kt+k;if(c(u,k,g)){s[N]=k>=8&&k<=18&&Zi(u/26,k/19,g/26,r+401)>.785?ze:Mt;continue}const z=s[N];z!==ke&&z!==Sn||(c(u+1,k,g)||c(u-1,k,g)||c(u,k+1,g)||c(u,k-1,g)||c(u,k,g+1)||c(u,k,g-1))&&(k<=15&&gt(u*5+k,g*7-k,r+333)<.4&&Zi(u/5+40,k/5,g/5,r+331)>.886?s[N]=hr:k>=12&&Zi(u/5,k/5,g/5,r+313)>.864?s[N]=lr:k>=12&&Zi(u/5,k/5+60,g/5,r+317)>.878?s[N]=cr:k>=8&&k<=24&&Zi(u/5,k/5,g/5+70,r+321)>.883&&(s[N]=Ls))}if(!C&&M>=12&&gt(u,g,r+201)>.984&&!ou(r,u,g)&&t.townNear(u,g,14)===null&&t.nearOasis(u,g)===null){const k=L-4;if(k>=7){for(let N=M-1;N>=k;N--)s[(R*G+p)*Kt+N]=Mt;s[(R*G+p)*Kt+(k-1)]=ke}}if(!C&&gt(u,g,r+21)>.988){const k=Rr(u,g,r),N=(z,Y)=>z>=0&&z<G&&Y>=0&&Y<G;if(k===Wo||k===Ar){const z=3+(gt(u,g,r+22)*3|0);for(let Y=1;Y<=z;Y++)o(u,M+Y,g,ke);R>0&&gt(u,g,r+27)>.5&&o(u-1,M+1,g,ke)}else if(k===Jl){const z=2+(gt(u,g,r+24)*2|0),Y=[[1,0],[-1,0],[0,1],[0,-1]][gt(u,g,r+25)*4|0];for(let W=0;W<z;W++)o(u,M+1+W,g,ke);N(R+Y[0],p+Y[1])&&o(u+Y[0],M+z,g+Y[1],ke)}else if(k===su)for(const[z,Y]of[[0,0],[1,0],[0,1],[1,1]])N(R+z,p+Y)&&o(u+z,M+1,g+Y,rs);else{const z=2+(gt(u,g,r+26)*3|0);for(let Y=0;Y<z;Y++){const W=(gt(u+Y,g,r+33)*3|0)-1,J=(gt(u,g+Y,r+35)*3|0)-1;N(R+W,p+J)&&o(u+W,M+1,g+J,gt(u+Y,g-Y,r+43)>.5?ke:Sn)}}}if(!C&&gt(u,g,r+23)>.9935){const k=Rr(u,g,r);if(k!==Wo&&k!==Ar){const N=3+(gt(u,g,r+29)*3|0);for(let z=M+1;z<=M+N;z++)o(u,z,g,ti)}}if(!C&&s[(R*G+p)*Kt+M+1]===0&&gt(u,g,r+31)>.9915){const k=Rr(u,g,r);if(k===dv||k===Jl){const N=2+(gt(u,g,r+37)*3|0);for(let z=M+1;z<=M+N;z++)o(u,z,g,un);N>=3&&gt(u,g,r+41)>.55&&o(u+(gt(u,g,r+43)>.5?1:-1),M+2,g,un),N>=3&&gt(u,g,r+47)>.7&&o(u,M+N,g,di)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&vv(o);for(const R of t.oases)Math.abs(e*G+8-R.x)<R.r+24&&Math.abs(n*G+8-R.z)<R.r+24&&xv(o,R,r);const d=Math.floor((e*G-14-Ie)/Ie),f=Math.floor((e*G+G+14+Ie)/Ie),m=Math.floor((n*G-14-Ie)/Ie),x=Math.floor((n*G+G+14+Ie)/Ie);for(let R=d;R<=f;R++)for(let p=m;p<=x;p++){if(!t.townAt(R,p))continue;const u=t.townCenter(R,p);e*G<=u.x+16&&e*G+G-1>=u.x-12&&n*G<=u.z+12&&n*G+G-1>=u.z-16&&yv(o,u,r),e*G<=u.x+30&&e*G+G-1>=u.x-30&&n*G<=u.z+30&&n*G+G-1>=u.z-30&&gv(o,u,r)}const y=Math.floor((e*G-48-ve)/ve),v=Math.floor((e*G+G-1+48+ve)/ve),_=Math.floor((n*G-48-ve)/ve),T=Math.floor((n*G+G-1+48+ve)/ve);for(let R=y;R<=v;R++)for(let p=_;p<=T;p++){if(!t.campAt(R,p))continue;const u=t.campCenter(R,p);e*G<=u.x+12&&e*G+G-1>=u.x-12&&n*G<=u.z+6&&n*G+G-1>=u.z-10&&Av(o,{x:u.x,z:u.z,type:t.campType(R,p)},r)}const w=Math.floor((e*G-54-xn)/xn),S=Math.floor((e*G+G-1+54+xn)/xn),b=Math.floor((n*G-54-xn)/xn),I=Math.floor((n*G+G-1+54+xn)/xn);for(let R=w;R<=S;R++)for(let p=b;p<=I;p++){if(!t.mouthAt(R,p))continue;const u=t.mouthCenter(R,p);e*G<=u.x+24&&e*G+G-1>=u.x-24&&n*G<=u.z+24&&n*G+G-1>=u.z-24&&wv(o,u,r)}return Math.abs(e*G+8-t.secondShip.x)<12&&Math.abs(n*G+8-t.secondShip.z)<12&&_v(o,t.secondShip,r),s}const Xn=(r,t)=>r+","+t,Jh=(r,t,e)=>(r*G+t)*Kt+e,Wa=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Qh=new Set([Mt,$e,Ye,He,Je,ui]);class Cv{constructor(t){this.seed=t,this.gen=new ru(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;rots=new Map;waterQ=new Set;gen;chunk(t,e){const n=Xn(t,e);let s=this.chunks.get(n);if(!s){s=Rv(this.seed,this.gen,t,e);const o=this.deltas.get(n);if(o)for(const[i,l]of o)s[i]=l;this.chunks.set(n,s)}return s}get(t,e,n){if(e<0||e>=Kt)return Mt;const s=Math.floor(t/G),o=Math.floor(n/G);return this.chunk(s,o)[Jh(t-s*G,n-o*G,e)]}skyResistance(t,e,n,s=40){let o=0,i=0;for(let l=1;l<=s;l++){const h=this.get(t,e+l,n);if(h===Mt)continue;const a=Iv[h];if(a&&(o+=a,h!==ui&&(i+=a,i>=6)))return{R:o,openSky:!1}}return{R:o,openSky:i===0}}sunVisible(t,e,n,s,o,i,l=64){if(o<=0)return!1;let h=t,a=e,c=n;const d=Math.sign(s),f=1,m=Math.sign(i),x=d?Math.abs(1/s):1/0,y=1/o,v=m?Math.abs(1/i):1/0;let _=d?(d>0?h+1-(t+.5):t+.5-h)*x:1/0,T=(e+1-(e+.5))*y,w=m?(m>0?c+1-(n+.5):n+.5-c)*v:1/0;for(let S=0;S<192;S++){let b;if(_<=T&&_<=w?(h+=d,b=_,_+=x):T<=w?(a+=f,b=T,T+=y):(c+=m,b=w,w+=v),b>l)return!0;const I=this.get(h,a,c);if(I===Ps||ta(I))return!1}return!0}roomInfo(t,e,n,s=400){if(!Qh.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const o=new Set([`${t},${e},${n}`]),i=[[t,e,n]],l=new Set;let h=0,a=!0;for(;i.length;){const[c,d,f]=i.pop();if(++h>s){a=!1;break}for(const[m,x,y]of Wa){const v=c+m,_=d+x,T=f+y;if(_>=Kt){a=!1;continue}const w=this.get(v,_,T);if(Qh.has(w)){const S=v+","+_+","+T;o.has(S)||(o.add(S),i.push([v,_,T]))}else w===zi&&l.add(v+","+_+","+T)}}return{size:h,sealed:a,regulators:l.size,regCells:[...l]}}set(t,e,n,s){if(e<0||e>=Kt)return;const o=Math.floor(t/G),i=Math.floor(n/G),l=this.chunk(o,i),h=Jh(t-o*G,n-i*G,e);if(l[h]===s)return;const a=l[h];if(l[h]=s,Mn(s)||Mn(a)||s===Mt){this.queueWater(t,e,n);for(const[m,x,y]of Wa)this.queueWater(t+m,e+x,n+y)}let c=this.deltas.get(Xn(o,i));c||this.deltas.set(Xn(o,i),c=new Map),c.set(h,s),this.rots.delete(t+","+e+","+n),this.markDirty(o,i);const d=t-o*G,f=n-i*G;d===0&&this.markDirty(o-1,i),f===0&&this.markDirty(o,i-1),d===G-1&&this.markDirty(o+1,i),f===G-1&&this.markDirty(o,i+1)}markDirty(t,e){this.dirty.add(Xn(t,e));const n=Xn(t,e);this.revs.set(n,(this.revs.get(n)??0)+1)}revs=new Map;getRot(t,e,n){return this.rots.get(t+","+e+","+n)??0}setRot(t,e,n,s){const o=t+","+e+","+n;s&3?this.rots.set(o,s&3):this.rots.delete(o)}queueWater(t,e,n){e>=0&&e<Kt&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;const n=[...this.waterQ];this.waterQ.clear();for(const s of n){if(e>=t)break;const[o,i,l]=s.split(",").map(Number);e+=this.drainFlow(o,i,l,t-e),e+=this.floodFrom(o,i,l,t-e)}return e}drainFlow(t,e,n,s){let o=0;const i=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],l=new Set;for(;i.length&&o++<s;){const[h,a,c]=i.pop(),d=ki(this.get(h,a,c));if(!d||d===8)continue;const f=h+","+a+","+c;if(!l.has(f)&&(l.add(f),!this.waterSupported(h,a,c,d))){this.set(h,a,c,Mt);for(const[m,x,y]of Wa)i.push([h+m,a+x,c+y])}}return o}waterSupported(t,e,n,s){for(const[o,i]of[[1,0],[-1,0],[0,1],[0,-1]])if(ki(this.get(t+o,e,n+i))>s)return!0;return ki(this.get(t,e+1,n))>0}floodFrom(t,e,n,s){let o=0;const i=[[t,e,n]];for(;i.length&&o++<s;){const[l,h,a]=i.shift(),c=this.get(l,h-1,a);let d=ki(this.get(l,h,a));if(d&&d!==8&&d<7&&ki(this.get(l,h+1,a))>0&&(this.set(l,h,a,Va(7)),d=7),!d||(h>0&&(c===Mt||Mn(c))&&ki(c)<d&&this.set(l,h-1,a,Va(d===8?7:d)),c===Mt||Mn(c)))continue;const f=d===8?7:d-1;if(!(f<1))for(const[m,x]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=this.get(l+m,h,a+x);(y===Mt||Mn(y))&&ki(y)<f&&this.set(l+m,h,a+x,Va(f))}}return o}surface(t,e){for(let n=Kt-1;n>=0;n--)if(this.get(t,n,e)!==Mt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const s=[];for(const[o,i]of n)s.push(o,i);t[e]=s}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const s=new Map;for(let o=0;o<n.length;o+=2)s.set(n[o],n[o+1]);this.deltas.set(e,s)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}serializeRots(){return Object.fromEntries(this.rots)}loadRots(t){this.rots=new Map(Object.entries(t??{}).map(([e,n])=>[e,n]))}}const Iv=hn.map(r=>r.R);function To(r,t,e,n,s){const o=r.get(t,e,n);return o===Ke||o===je||o===Ye||o===He||o===Re||o===Ue||o===Yn||o===Kn?!0:!(ta(o)||o===s)}const Ao=.6,Pv=1.8,td=1.62;class Lv{constructor(t){this.world=t}pos=new F(.5,31.01,2.5);vel=new F;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;fallPeakY=this.pos.y;lastFallDist=0;waterAt(t){const e=this.pos.y+t,n=Math.floor(e),s=this.world.get(Math.floor(this.pos.x),n,Math.floor(this.pos.z));return Mn(s)?e-n<ki(s)/8:!1}collides(t,e,n){const s=Math.floor(t-Ao/2),o=Math.floor(t+Ao/2),i=Math.floor(n-Ao/2),l=Math.floor(n+Ao/2),h=Math.floor(e),a=Math.floor(e+Pv-.001);for(let c=s;c<=o;c++)for(let d=i;d<=l;d++)for(let f=h;f<=a;f++)if(dn(this.world.get(c,f,d)))return!0;return!1}update(t,e,n,s,o,i){this.onGround?this.fallPeakY=this.pos.y:this.pos.y>this.fallPeakY&&(this.fallPeakY=this.pos.y),this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(td);const l=this.inWater,h=(this.sprinting?7.2:4.5)*o*(i?.25:1)*(l?.55:1),a=new F(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new F(-a.z,0,a.x),d=a.multiplyScalar(n).add(c.multiplyScalar(e));d.lengthSq()>1&&d.normalize();const f=this.onGround?40:l?12:8;this.vel.x+=(d.x*h-this.vel.x)*Math.min(1,f*t),this.vel.z+=(d.z*h-this.vel.z)*Math.min(1,f*t),l?(this.vel.y-=7*t,s&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=xi.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,s&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0),this.fallPeakY=40,this.lastFallDist=0),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,s=Math.max(1,Math.ceil(Math.abs(t)/.3)),o=t/s;for(let i=0;i<s;i++){const l=n.x+(e===0?o:0),h=n.y+(e===1?o:0),a=n.z+(e===2?o:0);if(!this.collides(l,h,a)){n.set(l,h,a);continue}e===1?(o<0&&(this.lastFallDist=Math.max(0,this.fallPeakY-n.y),this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new F(this.pos.x,this.pos.y+td,this.pos.z)}}const ys=20,Sr=45,Tc=36,na=37.5,Ql=39.5,tc=31.5,ec=5,ed=22,Dv=27,kv=25,Ir=150;class Uv{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;storm=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};regulatedAir=!1;embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%qe/qe}ambient(t,e,n){const s=(e-.28+1)%1;let o=Dv-kv*(s<=.3?Math.cos(s/.3*Math.PI):Math.cos((1+(s-.3)/.7)*Math.PI));t===2&&(o-=2),(t===3||t===4)&&(o+=3);const i=Zl(Math.floor(n/10)/60,this.weatherSeed)*2-1;return o+i*8}stormAt(t){const e=Zl(Math.floor(t/300)/15,this.weatherSeed+911);return e>.7?Math.min(1,(e-.7)/.15):0}update(t,e,n,s){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const o=this.worldTimeToDayFrac(s.tSec),i=this.ambient(s.biome,o,s.tSec),l=Math.floor(n.x),h=Math.floor(n.y),a=Math.floor(n.z),c=(S,b,I)=>{const R=b<=s.terrainH(S,I)-2,p=R?ed:i,{R:u,openSky:g}=e.skyResistance(S,b,I);let M=1-Math.exp(-u),C=p;!R&&s.sunElev>0&&s.sunDir&&e.sunVisible(S,b,I,s.sunDir.x,s.sunDir.y,s.sunDir.z)&&(C+=8+10*s.sunElev);const L=e.roomInfo(S,b,I);return L.sealed&&(L.regulators*Ir>=L.size?(C=36.6,M=1):(C=p,R||(M=0))),{R:u,openSky:g,shelter:M,ambEff:C,room:L,deep:R}};let d=c(l,h,a);if(d.room.size===0){const S=`${l},${h},${a}|${Math.floor(s.tSec*2)}`;if(this.embedKey!==S){let b=d;for(let I=-1;I<=1;I++)for(let R=-1;R<=1;R++)for(let p=-1;p<=1;p++){if(!I&&!R&&!p)continue;const u=c(l+I,h+R,a+p);u.room.size!==0&&Math.abs(u.ambEff-37)<Math.abs(b.ambEff-37)&&(b=u)}this.embedKey=S,this.embedAir=b}this.embedAir&&(d=this.embedAir)}this.lastOpenSky=d.openSky;let f=d.shelter,m=d.ambEff;const x=d.room,y=this.stormAt(s.tSec);this.storm+=(y-this.storm)*Math.min(1,t*.08);const v=s.stormShield?0:this.storm*s.stormMul;if(v>.02&&!d.deep&&d.shelter<.6&&(m=36.6+(m-36.6)*(1+.35*v)),this.lastRoom=x,this.regulatedAir=x.sealed&&x.regulators*Ir>=x.size,s.inWater){const S=xi.clamp(i,12,24)-3;m=(m+S)/2}s.warmth&&(m+=s.warmth);const _=s.regulator?36.6:36.6+(m-36.6)*(1-f);this.lastAmbient=d.deep?ed:i,this.lastAmbientEff=m,this.lastShelterR=d.R,this.lastTarget=_;const T=x.sealed?.022:.0075;this.body+=(_-this.body)*T*t,this.body=xi.clamp(this.body,12,44.5);let w=100/(qe*1.5);this.body>37&&(w+=(this.body-37)*.02),s.sprinting&&(w*=1.7),s.overencumbered&&(w+=.05),v>.05&&d.shelter<.8&&(w*=1+.7*v),this.water=Math.max(0,this.water-w*t),this.regulatedAir||(this.body>Ql&&this.hurt((this.body-Ql)*.15,"heat stroke"),this.body<tc&&this.hurt((tc-this.body)*.175,"hypothermia")),this.water<=0?this.hurt(.3,"dehydration"):this.water<ec&&this.hurt((ec-this.water)*.0375,"dehydration"),v>.35&&d.openSky&&this.hurt((v-.35)*.55*t,"sand blast"),this.water>25&&this.body>=Tc&&this.body<=na&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=xi.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,s,o){const i=this.worldTimeToDayFrac(o),l=this.ambient(0,i,o);let h=l;const a=(i-.25)*Math.PI*2,c=Math.sin(a);if(c>0){const f=1/Math.hypot(Math.cos(a),c,.4);t.sunVisible(e,n,s,Math.cos(a)*f,c*f,.4*f)&&(h+=8+10*c)}const d=t.roomInfo(e,n,s);return d.sealed&&(h=d.regulators*Ir>=d.size?36.6:l),h}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=5,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const No=15,wr=G+2,Ss=(r,t,e)=>((r+1)*wr+(t+1))*Kt+e,Nv=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function nd(r){return r===ui?2:r===Mt?1:ta(r)?-1:1}function Fv(r){return r===ui?2:Mn(r)?1:r===Mt?0:ta(r)?-1:0}class Ov{maps=new Map;invalidate(t,e){this.maps.delete(Xn(t,e))}lightAt(t,e,n){if(e<0||e>=Kt)return 0;const s=Math.floor(t/G),o=Math.floor(n/G),i=this.maps.get(Xn(s,o));return i?i[Ss(t-s*G,n-o*G,e)]:0}bake(t,e,n,s){const o=t.chunk(e,n),i=new Uint8Array(wr*wr*Kt),l=[],h=(c,d,f,m)=>{if(m<=0)return;const x=Ss(c,d,f);m>i[x]&&(i[x]=m,l.push(x))},a=(c,d,f)=>c>=0&&c<G&&d>=0&&d<G?o[(c*G+d)*Kt+f]:t.get(e*G+c,f,n*G+d);for(let c=-1;c<=G;c++)for(let d=-1;d<=G;d++){let f=No;for(let m=Kt-1;m>=0;m--){const x=Fv(a(c,d,m));if(x<0||(h(c,d,m,f),x>0&&(f-=x,f<=0)))break}}for(const[c,d]of[[-1,0],[1,0],[0,-1],[0,1]]){const f=this.maps.get(Xn(e+c,n+d));if(f)for(let m=0;m<G;m++)for(let x=0;x<Kt;x++){const y=c<0?-1:c>0?G:m,v=d<0?-1:d>0?G:m,_=c<0?G-1:c>0?0:m,T=d<0?G-1:d>0?0:m,w=f[Ss(_,T,x)];w>0&&h(y,v,x,w)}}for(let c=0;c<l.length;c++){const d=l[c],f=i[d];if(f<=1)continue;const m=(d/(wr*Kt)|0)-1,x=d%(wr*Kt),y=(x/Kt|0)-1,v=x%Kt;for(const[_,T,w]of Nv){const S=m+_,b=y+w,I=v+T;if(!(I<0||I>=Kt))if(S>=-1&&S<=G&&b>=-1&&b<=G){const R=nd(a(S,b,I));R>=0&&h(S,b,I,f-R)}else{const R=e*G+S,p=n*G+b,u=nd(t.get(R,I,p));if(u<0)continue;const g=Math.floor(R/G),M=Math.floor(p/G),C=this.maps.get(Xn(g,M));C&&C[Ss(R-g*G,p-M*G,I)]+1<f-u&&s(g,M)}}}return this.maps.set(Xn(e,n),i),i}}const qa=new Set([Ke,je,$e,Ye,He,Je]),id=new Set([qn,yn,Vn]),_r=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],Bv=.28;function ye(r,t,e,n,s){const o=n[1].map((c,d)=>c-n[0][d]),i=n[2].map((c,d)=>c-n[0][d]),l=o[1]*i[2]-o[2]*i[1],h=o[2]*i[0]-o[0]*i[2],a=o[0]*i[1]-o[1]*i[0];return l*r[0]+h*r[1]+a*r[2]<0&&n.reverse(),{dir:r,kind:t,pts:n,sh:e,uv:s}}function Yi(r,t,e,n){return{...ye(r,2,t,e,n),fill:r}}const sd=(()=>{const r=Bv,t=1-r,e=c=>[c[0],c[2]],n=c=>[c[0],c[1]],s=c=>[c[2],c[1]],o=c=>[(c[2]-c[0])/2+.5,c[1]],i=c=>[(c[0]+c[2])/2,c[1]],l=[[r,0],[t,0],[1,r],[1,t],[t,1],[r,1],[0,t],[0,r]],h=[ye([0,1,0],0,1,l.map(([c,d])=>[c,1,d]),e),ye([0,-1,0],1,.45,l.map(([c,d])=>[c,0,d]),e),ye([1,0,0],2,.8,[[1,0,r],[1,0,t],[1,1,t],[1,1,r]],s),ye([-1,0,0],2,.7,[[0,0,t],[0,1,t],[0,1,r],[0,0,r]],s),ye([0,0,1],2,.85,[[r,0,1],[t,0,1],[t,1,1],[r,1,1]],n),ye([0,0,-1],2,.65,[[r,0,0],[r,1,0],[t,1,0],[t,0,0]],n),ye([-1,0,-1],2,.675,[[r,0,0],[r,1,0],[0,1,r],[0,0,r]],o),ye([1,0,-1],2,.725,[[t,0,0],[t,1,0],[1,1,r],[1,0,r]],i),ye([1,0,1],2,.825,[[1,0,t],[1,1,t],[t,1,1],[t,0,1]],o),ye([-1,0,1],2,.775,[[0,0,t],[0,1,t],[r,1,1],[r,0,1]],i),Yi([1,0,0],.8,[[1,0,0],[1,1,0],[1,1,r],[1,0,r]],s),Yi([1,0,0],.8,[[1,0,t],[1,1,t],[1,1,1],[1,0,1]],s),Yi([-1,0,0],.7,[[0,0,0],[0,0,r],[0,1,r],[0,1,0]],s),Yi([-1,0,0],.7,[[0,0,t],[0,0,1],[0,1,1],[0,1,t]],s),Yi([0,0,1],.85,[[0,0,1],[0,1,1],[r,1,1],[r,0,1]],n),Yi([0,0,1],.85,[[t,0,1],[t,1,1],[1,1,1],[1,0,1]],n),Yi([0,0,-1],.65,[[0,0,0],[r,0,0],[r,1,0],[0,1,0]],n),Yi([0,0,-1],.65,[[t,0,0],[1,0,0],[1,1,0],[t,1,0]],n)],a=[ye([0,1,0],0,1,[[r,1,r],[r,1,t],[t,1,t],[t,1,r]],e),ye([0,-1,0],1,.45,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],e),ye([1,0,0],2,.8,[[1,0,0],[1,0,1],[1,t,1],[1,t,0]],s),ye([-1,0,0],2,.7,[[0,0,0],[0,t,0],[0,t,1],[0,0,1]],s),ye([0,0,1],2,.85,[[0,0,1],[1,0,1],[1,t,1],[0,t,1]],n),ye([0,0,-1],2,.65,[[0,0,0],[0,t,0],[1,t,0],[1,0,0]],n),ye([0,1,-1],2,.825,[[0,t,0],[1,t,0],[1,1,r],[0,1,r]],n),ye([0,1,1],2,.925,[[1,t,1],[0,t,1],[0,1,r],[1,1,r]],n),ye([-1,1,0],2,.85,[[0,t,1],[0,t,0],[0,1,r],[0,1,t]],s),ye([1,1,0],2,.9,[[1,t,0],[1,t,1],[1,1,t],[1,1,r]],s)];return{[Yn]:h,[Kn]:a}})(),du=(r,t,e)=>e===0?[r,t]:e===1?[1-t,r]:e===2?[1-r,1-t]:[t,1-r],nc=(r,t)=>t===0?r:t===1?[-r[2],r[1],r[0]]:t===2?[-r[0],r[1],-r[2]]:[r[2],r[1],-r[0]],Xa=(r,t)=>t===0?r:r.map(e=>({...e,dir:nc(e.dir,t),fill:e.fill?nc(e.fill,t):e.fill,pts:e.pts.map(([n,s,o])=>{const[i,l]=du(n,o,t);return[i,s,l]})})),ci=(r,t,e,n,s,o)=>[ye([0,1,0],0,1,[[r,s,e],[r,s,o],[n,s,o],[n,s,e]],i=>[i[0],i[2]]),ye([0,-1,0],1,.45,[[r,t,e],[n,t,e],[n,t,o],[r,t,o]],i=>[i[0],i[2]]),ye([1,0,0],2,.8,[[n,t,e],[n,t,o],[n,s,o],[n,s,e]],i=>[i[2],i[1]]),ye([-1,0,0],2,.7,[[r,t,e],[r,s,e],[r,s,o],[r,t,o]],i=>[i[2],i[1]]),ye([0,0,1],2,.85,[[r,t,o],[n,t,o],[n,s,o],[r,s,o]],i=>[i[0],i[1]]),ye([0,0,-1],2,.65,[[r,t,e],[r,s,e],[n,s,e],[n,t,e]],i=>[i[0],i[1]])],qo=r=>{for(const t of r)t.always=!0;return r},Xo=(r,t)=>r.filter((e,n)=>n!==t),rd=(()=>{const r=Xo(ci(0,.72,0,1,.88,1),2),t=Xo(ci(0,.18,.18,1,.26,.82),2),e=[...ci(.05,0,.05,.2,.72,.2),...ci(.05,0,.8,.2,.72,.95)],n=ci(.28,.3,0,.72,.64,.05);return qo([...r,...t,...e,...n])})(),od=(()=>{const r=Xo(ci(0,.72,0,1,.88,1),3),t=Xo(ci(0,.18,.18,1,.26,.82),3),e=[...ci(.8,0,.05,.95,.72,.2),...ci(.8,0,.8,.95,.72,.95)];return qo([...r,...t,...e])})(),Me=16,_n=16,Fr=[ni,Sn,ke,Is,bn,rs,ti,Jo,Ps,Ge,Ke,je,Un,Qo,Dn,Re,Qe,ze,yi,$e,es,zi,Fe,Ue,un,is,Vr,Wr,qr,Xr,$r,ss,Nn,Gn,An,qn,yn,di,Yr,ln,Ye,He,Je,fn,pn,ii,Rn,ui,Vn,lr,cr,hr,Ls,Hi,Ji,Fi,sr],uu=[["grass_top",ii],["grass_side",ii],["wood_top",Rn],["farmland_side",Nn],["sandstone_top",Sn],["hull_top",Ge],["water_side",ze],["bed_side",fn],["chest_top",Fe],["bench_top",Re],["bench_ext_top",Ue],["campfire_top",Qe],["campfire_cold",Qe],["cactus_top",un]],Ve={};uu.forEach(([r],t)=>Ve[r]=Fr.length+t);let $a=null;function fu(){if($a)return $a;const r=document.createElement("canvas");r.width=r.height=_n*Me;const t=r.getContext("2d"),e=new ea(48879);Fr.forEach((p,u)=>u);let n=0,s=0,o=0,i=0,l=0;const h=p=>Math.max(0,Math.min(1,p)),a=(p,u=1,g=0,M=0,C=0)=>`rgba(${Math.round(h(o+p+g)*255)},${Math.round(h(i+p+M)*255)},${Math.round(h(l+p+C)*255)},${u})`,c=(p,u,g)=>{t.fillStyle=g,t.fillRect(n+p,s+u,1,1)},d=p=>{t.fillStyle=p,t.fillRect(n,s,Me,Me)},f=p=>(e.next()-.5)*p,m=(p,u)=>{for(let g=0;g<p;g++)c(e.int(0,15),e.int(0,15),a(f(u)))},x=(p,u,g=-.15)=>{let M=e.int(1,13),C=e.int(1,13);for(let L=0;L<p;L++)c(M,C,a(g+f(u))),M+=e.int(-1,1),C+=e.int(0,1),M=Math.max(0,Math.min(15,M)),C=Math.max(0,Math.min(15,C))},y=()=>{const p=M=>{const C=[];for(let N=0;N<M*M;N++)C.push(e.next());const L=(N,z)=>C[z%M*M+N%M],k=[];for(let N=0;N<16;N++)for(let z=0;z<16;z++){const Y=z*M/16,W=N*M/16,J=Math.floor(Y),et=Math.floor(W),_t=Y-J,Vt=W-et,ae=L(J,et)+(L(J+1,et)-L(J,et))*_t,le=L(J,et+1)+(L(J+1,et+1)-L(J,et+1))*_t;k.push(ae+(le-ae)*Vt)}return k},u=p(4),g=p(8);return u.map((M,C)=>(M*.65+g[C]*.35-.5)*2)},v=p=>{const u=y();for(let g=0;g<16;g++)for(let M=0;M<16;M++)c(M,g,a(p(M,g,u[g*16+M])));return u},_=(p,u,g,M)=>{for(let C=-g;C<=g;C++)for(let L=-g;L<=g;L++){const k=Math.hypot(L,C);k>g+.3||c(p+L,u+C,a(M+(k>g-.6?-.2:L+C<-g*.5?.14:-.02)))}},T=(p,u,g=.25)=>{for(const M of p)for(let C=0;C<16;C++){const L=C-M;L>=0&&L<16&&c(C,L,a(g,u))}},w=(p,u,g,M,C,L)=>{for(let k=-g;k<=g;k++)for(let N=-g;N<=g;N++){const z=Math.hypot(N,k);z>g+.3||c(p+N,u+k,a(z>g-.5?-.22:N+k<0?.24:.04,1,M,C,L))}},S={},b=(p,u)=>S[p]=u;b(String(ni),()=>{v((p,u,g)=>g*.07+Math.sin((p+u)*.55+g*5)*.03),m(24,.18);for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),a(-.14))}),b(String(Sn),()=>{const p=y();for(let u=0;u<16;u++){const g=Math.floor((u+p[u*16+8]*1.2+16)%16/4),M=[-.05,.03,-.01,.05][g%4];for(let C=0;C<16;C++)c(C,u,a(M+p[u*16+C]*.05+(u%4===0?-.12:0)))}m(26,.08)}),b("sandstone_top",()=>{v((p,u,g)=>g*.06);for(let p=0;p<7;p++){const u=e.int(1,14),g=e.int(1,14);c(u,g,a(-.13)),c(u+1,g,a(-.06))}m(30,.1)}),b(String(ke),()=>{v((p,u,g)=>g*.1),x(11,.06,-.14),x(8,.06,-.2);for(let p=0;p<4;p++)c(e.int(0,15),e.int(0,15),a(.2));m(16,.1)}),b(String(Is),()=>{v((p,u,g)=>g*.08-.06);for(let p=0;p<9;p++)_(e.int(2,13),e.int(2,13),e.int(1,3),f(.18))}),b(String(bn),()=>{v((p,u,g)=>g*.13+(Math.sin(p*1.4)+Math.cos(u*1.1))*.03),m(44,.2);for(let p=0;p<3;p++){const u=e.int(2,13),g=e.int(2,13);c(u,g,a(.16)),c(u+1,g,a(.08))}}),b(String(rs),()=>{v((p,u,g)=>g*.05+.04),x(10,.03,.06),x(8,.03,.09);for(let p=0;p<30;p++)c(e.int(0,15),e.int(0,15),a(.13))}),b(String(ti),()=>{const p=v((u,g,M)=>M*.04-.05);for(let u=0;u<16;u++){for(let g=1;g<15;g++)Math.sin(g*.5+u*2.6+p[u*16+g]*4)>.7&&c(g,u,a(-.18));u%5===2&&e.next()>.4&&c(e.int(2,13),u,a(.12))}}),b(String(Jo),()=>{d("rgba(170,215,232,0.22)"),T([5,8,14],.5,.3),T([11],.32,.22)}),b(String(Ps),()=>{v((p,u,g)=>g*.05),x(7,.02,-.1),T([9],.18,.12)}),b(String(Ge),()=>{const p=v((u,g,M)=>M*.03);for(let u=0;u<16;u++)c(u,10,a(-.24)),u%2===0&&c(u,9,a(-.08));for(let u=0;u<16;u++)if(u%4===1)for(const g of[1,6,11])c(g,u,a(.22)),c(g+1,u,a(.05)),c(g,u+1,a(-.16)),c(g+1,u+1,a(-.12));for(let u=0;u<10;u++)c(e.int(0,15),e.int(0,15),a(-.02,1,.06,-.01,-.08));p[60]>.3&&c(12,3,a(.35,1,.1,0,0))}),b("hull_top",()=>{v((p,u,g)=>g*.03);for(const p of[4,12])for(let u=0;u<16;u++)c(u,p,a(-.22));for(const p of[2,7,12])for(let u=0;u<16;u++)u%4===2&&c(p,u,a(.2));for(let p=0;p<8;p++)c(e.int(0,15),e.int(0,15),a(.28,1,.05,-.02,-.06))}),b(String(Ke),()=>{v((p,u,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(0,p,a(-.26)),c(15,p,a(-.26));for(let p=2;p<=12;p++)for(let u=3;u<=12;u++)u===3||u===12||p===2||p===12?c(u,p,a(-.2)):u===4&&p>3&&p<11&&c(u,p,a(.08));for(let p=7;p<=9;p++)c(13,p,a(.35)),c(12,p,a(-.28));for(let p=5;p<11;p++)c(p,14,a(-.15,1,.1,0,-.02))}),b(String(je),()=>{v((p,u,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(0,p,a(-.26)),c(15,p,a(-.26));for(let p=4;p<=11;p++)for(let u=5;u<=10;u++)c(u,p,a(-.32,1,-.1,-.02,.06));for(const p of[5,8])for(let u=5;u<=10;u++){const g=u-p+4;g>=4&&g<=11&&c(u,g,a(.35,.5))}for(const[p,u]of[[2,2],[13,2],[2,13],[13,13]])c(p,u,a(.2))}),b(String($e),()=>{for(let p=0;p<16;p++)c(0,p,a(-.1,.9)),c(1,p,a(.05,.85)),c(2,p,a(-.15,.7));c(1,7,a(.3,.9)),c(1,8,a(.3,.9))}),b(String(Un),()=>{d(a(-.28));for(let p=4;p<=11;p++)for(let u=4;u<=11;u++){const g=Math.max(Math.abs(u-7.5),Math.abs(p-7.5));c(u,p,g>3?a(.12):a(.42-g*.06,1,.3,.18,-.02))}for(const[p,u]of[[4,4],[11,4],[4,11],[11,11]])c(p,u,a(.25))}),b(String(Qo),()=>{v((p,u,g)=>g*.03+(u%2===0?.02:-.02));for(const[p,u]of[[2,2],[13,2],[2,13],[13,13]])c(p,u,a(.22));for(let p=0;p<5;p++){const u=e.int(2,13),g=e.int(2,13);c(u,g,a(-.12,1,.24,.02,-.14)),c(u+1,g,a(-.2,1,.16,0,-.1))}}),b(String(Dn),()=>{v((p,u,g)=>g*.03-.25);for(let p=-3;p<=3;p++){const u=3-Math.abs(p);for(let g=-u;g<=u;g++)Math.hypot(g,p)>u+.3||c(8+g,8+p,a(p===0?.05:0,1,.95-Math.abs(p)*.08,.15,.1))}for(let p=-1;p<=1;p++)for(let u=-1;u<=1;u++)Math.hypot(u,p)<1.6&&c(8+u,8+p,a(.4-Math.hypot(u,p)*.15,1,1,.3,.1));for(let p=0;p<16;p+=3){const u=3-Math.abs(p%6-3);for(let g=-u;g<=u;g++)c(8+g,p,a(.08))}}),b(String(Re),()=>{const p=v((u,g,M)=>M*.05+(g<5?.02:-.14));for(let u=0;u<16;u++)c(u,0,a(.14)),c(u,1,a(.06)),c(u,4,a(-.26));for(let u=5;u<16;u++)for(const g of[1,2,13,14])c(g,u,a(.06+p[u*16+g]*.02));for(let u=6;u<=10;u++)for(let g=4;g<=11;g++)c(g,u,a(-.04+p[u*16+g]*.04));for(let u=4;u<=11;u++)c(u,6,a(-.28)),c(u,10,a(-.28));c(7,8,"rgba(190,190,190,1)"),c(8,8,"rgba(190,190,190,1)");for(let u=3;u<=12;u++)c(u,13,a(.1)),c(u,14,a(-.3))}),b("bench_top",()=>{v((p,u,g)=>g*.04+Math.sin(u*1.7+g*3)*.03);for(let p=0;p<16;p++)c(p,0,a(-.2)),c(p,15,a(-.2));for(let p=0;p<16;p++)if(p%5===4)for(let u=0;u<16;u++)c(u,p,a(-.14));for(let p=2;p<=11;p++)c(p,4,"rgba(160,166,178,1)");for(let p=2;p<=11;p+=2)c(p,5,"rgba(120,126,140,1)");c(12,4,"rgba(96,66,40,1)"),c(13,4,"rgba(96,66,40,1)"),c(12,5,"rgba(80,54,32,1)");for(let p=4;p<=6;p++)c(p,9,"rgba(120,88,54,1)");for(let p=4;p<=6;p++)c(p,10,"rgba(100,72,44,1)");c(5,11,"rgba(150,156,168,1)"),c(5,12,"rgba(150,156,168,1)"),c(5,13,"rgba(140,146,158,1)");for(let p=0;p<6;p++)c(e.int(0,15),e.int(0,15),a(-.06,1,.02,-.01,-.04))}),b(String(Ue),()=>{v((p,u,g)=>g*.04-.14);for(let p=0;p<16;p++)c(p,0,a(.05)),c(p,2,a(-.24));for(let p=3;p<16;p++)for(const u of[1,2,13,14])c(u,p,a(.04));for(let p=3;p<=12;p++)c(p,11,a(.08)),c(p,12,a(-.26))}),b("bench_ext_top",()=>{v((p,u,g)=>g*.04+Math.sin(p*1.6+g*2)*.03);for(let p=0;p<16;p++)c(0,p,a(-.18)),c(15,p,a(-.18));for(let p=0;p<16;p++)for(let u=0;u<16;u++)u%6===3&&e.next()>.5&&c(u,p,a(-.1))}),b(String(Qe),()=>{v((p,u,g)=>g*.05-.1);for(let p=0;p<5;p++)_(2+p*3,13,1,-.05);t.strokeStyle="rgba(70,50,32,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,s+13),t.lineTo(n+12,s+9),t.stroke(),t.beginPath(),t.moveTo(n+12,s+13),t.lineTo(n+4,s+9),t.stroke(),t.lineWidth=1;for(let p=2;p<10;p++){const u=Math.max(0,5-Math.abs(p-7)-(p<5?5-p:0));for(let g=-u;g<=u;g++){const M=Math.abs(g)/(u+1);c(8+g,p,a(M*.1,1,.85-M*.4,.35-M*.25,-.45))}}c(8,1,a(.2,1,.7,.15,-.4)),c(7,3,a(.3,1,.9,.4,-.4))}),b("campfire_cold",()=>{v((p,u,g)=>g*.04-.22);for(let p=0;p<5;p++)_(2+p*3,13,1,-.05);t.strokeStyle="rgba(40,34,28,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,s+13),t.lineTo(n+12,s+9),t.stroke(),t.beginPath(),t.moveTo(n+12,s+13),t.lineTo(n+4,s+9),t.stroke(),t.lineWidth=1;for(let p=0;p<6;p++)_(5+p%3*3,9+(p/3|0)*2,1,.08+.04*(p%2))}),b("campfire_top",()=>{v((p,u,g)=>-.12+g*.05);for(let p=0;p<16;p++){const u=p/16*Math.PI*2;c(8+Math.round(Math.cos(u)*5.5),8+Math.round(Math.sin(u)*5.5),a(.12)),c(8+Math.round(Math.cos(u)*4),8+Math.round(Math.sin(u)*4),a(-.3,1,.1,-.02,-.06))}for(let p=0;p<5;p++){const u=p/5*Math.PI*2+.5;_(8+Math.round(Math.cos(u)*6),8+Math.round(Math.sin(u)*6),1,0)}for(let p=0;p<3;p++)for(let u=0;u<8;u++){const g=u/8*Math.PI*2+p*.4;c(8+Math.round(Math.cos(g)*p*1.5),8+Math.round(Math.sin(g)*p*1.5),a(.2+(3-p)*.12,1,.5,-.05,-.35))}});for(const p of[is,Vr,Wr,qr,Xr,$r,ss,ze])b(String(p),()=>{const u=v((g,M,C)=>C*.04+Math.sin((g+M*.5)*.8+C*4)*.04);for(const g of[2,6,10,14])for(let M=0;M<16;M++)u[g*16+M]>-.2&&c(M,g+(M%4<2?0:1),a(.16,.75));for(let g=0;g<5;g++)c(e.int(0,15),e.int(0,15),a(.3,.5))});b("water_side",()=>{v((p,u,g)=>g*.04+u*.004);for(let p=0;p<16;p++)e.next()>.3&&c(p,0,a(.22,.8)),p%3===0&&c(p,1+p%2,a(.1,.5));for(let p=2;p<16;p++)e.next()>.75&&c(e.int(0,15),p,a(.12,.4))}),b(String(yi),()=>{v((p,u,g)=>g*.08-.02);for(let p=0;p<16;p++)for(let u=0;u<16;u++)(p%5===4||(u+Math.floor(p/5)%2*4)%8===3)&&c(u,p,a(-.14+f(.03)));for(let p=0;p<3;p++)x(e.int(8,12),.05,-.1);for(let p=0;p<10;p++)c(e.int(0,15),e.int(0,15),a(.12))}),b(String(es),()=>{const p=v((u,g,M)=>M*.06-.35);for(let u=0;u<16;u++)p[u*16+1]>.2&&c(1,u,a(-.1,1,.04,0,.08));for(let u=0;u<=15;u+=5)c(u,0,a(.1,1,.1,0,.15)),c(u,15,a(.1,1,.1,0,.15));for(let u=3;u<=12;u++)for(let g=3;g<=12;g++){const M=Math.max(Math.abs(u-7.5),Math.abs(g-7.5)),C=Math.max(Math.abs(u-7.5),Math.abs(g-7.5),Math.abs(u+g-15)/2);M>=4.2||(C>=3.4?c(u,g,a(.15,1,.55,.15,.85)):c(u,g,a(.32+(3-M)*.12,1,.75,.3,1)))}for(const[u,g]of[[5,5],[10,10],[10,5]])(u+g)%2===0&&c(u,g,a(.45,1,.8,.35,1))}),b(String(zi),()=>{const p=v((u,g,M)=>M*.03+(g%2===0?.015:-.015)-.08);for(const u of[1,3,5]){for(let g=2;g<=13;g++)c(g,u,a(-.28));for(let g=2;g<=13;g+=3)c(g,u-1,a(.12))}for(let u=4;u<=11;u++)for(let g=7;g<=14;g++){const M=Math.max(Math.abs(u-7.5),Math.abs(g-10.5));M>=3.2?c(u,g,a(.1+p[g*16+u]*.05)):c(u,g,a(.24+(3-M)*.1,1,-.05,.2,.22))}c(5,12,a(.15,1,-.1,.12,.12)),c(10,9,a(.15,1,-.1,.12,.12));for(let u=7;u<=14;u++)u%2===1&&c(14,u,a(-.2))}),b(String(un),()=>{const p=v((u,g,M)=>M*.06);for(const u of[2,7,12])for(let g=0;g<16;g++)c(u,g,a(-.16+p[g*16+u]*.03));for(let u=0;u<16;u++)if(u%5!==2&&u%5!==3)for(let g=0;g<16;g+=3)e.next()>.4&&c(u,g,a(.5,1,.05,.02,-.05));for(const[u,g]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])c(u,g,a(.2)),c(u+1,g,a(-.2)),c(u,g+1,a(-.2));c(13,1,"rgba(214,74,130,1)"),c(1,6,"rgba(198,58,114,1)"),c(5,11,"rgba(214,74,130,1)")}),b("cactus_top",()=>{const p=v((u,g,M)=>M*.06);for(let u=2;u<=6;u+=2)for(let g=0;g<20;g++){const M=g/20*Math.PI*2;c(8+Math.round(Math.cos(M)*u),8+Math.round(Math.sin(M)*u),a(u===6?-.14:-.06+p[g]*.05))}for(let u=0;u<8;u++){const g=u/8*Math.PI*2;c(8+Math.round(Math.cos(g)*1.5),8+Math.round(Math.sin(g)*1.5),a(.45,1,.05,.03,-.04))}c(8,8,a(.15))}),b(String(di),()=>{const p=v((u,g,M)=>M*.06);for(const u of[2,7,12])for(let g=0;g<16;g++)c(u,g,a(-.16+p[g*16+u]*.03));for(const[u,g]of[[4,4],[9,6],[6,10],[11,12],[3,14]])c(u,g,a(.2)),c(u+1,g,a(-.2)),c(u,g+1,a(-.2));for(let u=0;u<=3;u++)for(let g=5;g<=10;g++)(u===3||g===5||g===10||e.next()>.3)&&c(g,u,"rgba(214,74,130,1)");for(let u=0;u<9;u++)c(5+u%4*2,Math.floor(u/4),"rgba(238,150,190,1)");c(6,0,"rgba(238,150,190,1)"),c(9,1,"rgba(248,190,214,1)")}),b(String(Fe),()=>{v((p,u,g)=>g*.05-.02+Math.sin(p*1.3+g*3)*.02);for(let p=0;p<16;p++)c(p,0,a(-.3)),c(p,7,a(-.24)),c(p,15,a(-.3));for(let p=0;p<16;p++)for(let u=0;u<16;u++)u%5===2&&p>7&&e.next()>.4&&c(u,p,a(-.12));for(let p=0;p<16;p++)c(p,4,"rgba(148,154,166,1)"),c(p,5,"rgba(120,126,138,1)");for(let p=2;p<5;p++)for(const u of[7,8])c(u,p,"rgba(200,205,215,1)");c(7,6,"rgba(40,42,48,1)"),c(8,6,"rgba(40,42,48,1)");for(let p=0;p<4;p++){const[u,g]=[[0,0],[15,0],[0,15],[15,15]][p];c(u,g,a(.2)),c(u+(u?-1:1),g,a(.1)),c(u,g+(g?-1:1),a(.1))}}),b("chest_top",()=>{v((p,u,g)=>g*.05+Math.sin(u*1.4+g*2)*.02);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26));for(let p=0;p<16;p++)p!==7&&p!==8&&(c(p,7,"rgba(148,154,166,1)"),c(p,8,"rgba(120,126,138,1)"));for(const[p,u]of[[2,2],[13,2],[2,13],[13,13]])c(p,u,"rgba(200,205,215,1)")}),b(String(Nn),()=>{const p=v((u,g,M)=>M*.1-.06);for(const u of[2,6,10,14])for(let g=0;g<16;g++)c(g,u,a(-.16+f(.03)));for(const u of[1,5,9,13])for(let g=0;g<16;g++)p[u*16+g]>-.1&&e.next()>.55&&c(g,u,a(.1));for(let u=0;u<8;u++)c(e.int(0,15),e.int(0,15),a(.05,1,0,-.02,.04))}),b("farmland_side",()=>{v((p,u,g)=>g*.09-.04);for(let p=0;p<16;p++)c(p,0,a(.14));for(let p=0;p<16;p++)for(let u=1;u<16;u++)e.next()>.88&&c(p,u,a(.14))}),b(String(Gn),()=>{d("rgba(0,0,0,0)");for(const[p,u]of[[7,13],[8,13],[7,12],[8,12],[9,13],[6,12]])c(p,u,a(.1));c(6,11,a(.16)),c(9,10,a(.12)),c(7,11,a(.02));for(let p=0;p<4;p++)c(e.int(5,10),e.int(12,15),a(-.05))}),b(String(An),()=>{v((p,u,g)=>g*.04-.02);for(let p=4;p<=13;p++)for(let u=2;u<=13;u++){const g=Math.hypot((u-7.5)*1.1,(p-8.5)*1.25);if(g>5.8)continue;const M=(u+(p/2|0))%4===0;c(u,p,a(M?-.18:.04)),g>5.2&&c(u,p,a(-.24)),u<5&&p<7&&!M&&c(u,p,a(.2))}c(8,3,a(-.1)),c(7,3,a(-.16)),c(8,4,a(-.08)),c(2,13,a(.1)),c(13,12,a(.06)),c(4,14,a(.08))}),b(String(qn),()=>{d("rgba(0,0,0,0)");for(const p of[4,8,12]){for(let u=11;u<=15;u++)c(p,u,a(.08)),u<14&&c(p,u,a(.14));c(p-1,12,a(.06))}}),b(String(yn),()=>{d("rgba(0,0,0,0)");for(const p of[3,7,11,14]){const u=p%2?1:-1;for(let g=2;g<=15;g++)c(p+(g<6?u:0),g,a(g<7?.22:-.02));c(p-u,4,a(.18)),c(p-u,9,a(.06)),c(p+u,2,a(.3))}}),b(String(Yr),()=>{v((p,u,g)=>g*.03-.12);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(p,7,"rgba(150,156,168,1)"),c(p,8,"rgba(110,116,128,1)");for(const[p,u]of[[2,3],[13,3],[2,12],[13,12]])c(p,u,"rgba(200,205,215,1)"),c(p+1,u,"rgba(150,156,168,1)");for(let p=2;p<=5;p++)c(0,p,a(.14)),c(15,p,a(.14))}),b(String(ln),()=>{const p=v((u,g,M)=>M*.03+(u%4===0?-.04:.015));for(let u=0;u<16;u++)c(u,0,a(-.22)),c(u,15,a(-.22)),c(0,u,a(-.16)),c(15,u,a(-.16));for(const[u,g]of[[3,3],[12,3],[3,12],[12,12]])c(u,g,a(.24)),c(u+1,g,a(.08)),c(u,g+1,a(-.14));for(let u=0;u<6;u++)c(e.int(1,14),e.int(1,14),a(-.02,1,.05,-.01,-.06));if(p[8]>.4)for(let u=1;u<4;u++)c(12,u,a(.06,1,.2,.02,-.1))}),b(String(Ye),()=>{v((p,u,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,a(-.24)),c(p,15,a(-.24)),c(0,p,a(-.24)),c(15,p,a(-.24));for(let p=3;p<=12;p++)for(let u=4;u<=11;u++)(u===4||u===11||p===3||p===12)&&c(u,p,a(.1));for(let p=7;p<=9;p++)c(12,p,a(.26)),c(11,p,a(-.22))}),b(String(He),()=>{v((p,u,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,a(-.24)),c(p,15,a(-.24)),c(0,p,a(-.24)),c(15,p,a(-.24));for(let p=5;p<=10;p++)for(let u=6;u<=9;u++)c(u,p,a(.1,1,-.05,.1,.15));for(let p=6;p<=9;p++){const u=p-1;u>=5&&u<=10&&c(p,u,a(.3,.6))}for(let p=5;p<=10;p++)for(let u=6;u<=9;u++)(u===6||u===9||p===5||p===10)&&c(u,p,a(.1,1,-.05,.1,.15))}),b(String(Je),()=>{for(let p=0;p<16;p++)c(0,p,a(-.12,.9)),c(1,p,a(.03,.85)),c(2,p,a(-.17,.7));c(1,7,a(.26,.9)),c(1,8,a(.26,.9))}),b(String(fn),()=>{v((p,u,g)=>g*.04+.02);for(let p=0;p<16;p++)for(let u=0;u<16;u++)(u+p)%5===0&&c(u,p,a(-.1));for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=0;p<16;p++)c(p,11,"rgba(90,40,36,1)"),c(p,12,"rgba(150,80,70,1)"),c(p,13,"rgba(120,60,52,1)");for(let p=1;p<11;p++)c(1,p,a(.12)),c(14,p,a(-.08))}),b("bed_side",()=>{v((p,u,g)=>g*.04-(u>11?-.1:.04));for(let p=0;p<16;p++)c(p,0,a(.14)),c(p,10,a(-.22));for(let p=1;p<10;p++)for(let u=0;u<16;u++)(u+p)%6===1&&c(u,p,a(-.06));for(let p=11;p<16;p++)for(let u=0;u<16;u++)c(u,p,"rgba(70,44,26,1)");for(let p=2;p<16;p+=5)c(p,12,"rgba(96,62,38,1)"),c(p,13,"rgba(52,32,18,1)")}),b(String(pn),()=>{v((p,u,g)=>g*.04+.02);for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=3;p<=11;p++)for(let u=2;u<=13;u++)c(u,p,u===2||u===13||p===3||p===11?"rgba(200,192,176,1)":"rgba(226,220,206,1)"),p===4&&u>3&&u<11&&c(u,p,"rgba(240,236,226,1)");c(4,6,"rgba(208,200,184,1)"),c(10,9,"rgba(208,200,184,1)");for(let p=0;p<16;p++)c(p,12,"rgba(90,40,36,1)")}),b(String(ii),()=>{const p=v((u,g,M)=>M*.12-(g>4?.16:.02));for(let u=0;u<16;u++){const g=2+Math.round((p[u]+1)*1.5);for(let M=0;M<g;M++)c(u,M,a(f(.1)+(M===0?.1:0)));e.next()>.6&&c(u,g+1,a(-.2))}for(let u=0;u<16;u+=3){const g=7+u%5;c(u,g,a(.2))}}),b("grass_top",()=>{v((p,u,g)=>g*.08-.02);for(let p=0;p<40;p++){const u=e.int(0,15),g=e.int(0,14),M=e.int(1,3);for(let C=0;C<M;C++)c(u,g+C,a(C===0?.14:-.02+f(.08)))}for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),a(-.3))}),b("grass_side",()=>{const p=v((u,g,M)=>M*.12+(g<3?.06:-.1));for(let u=0;u<16;u++){const g=1+Math.round((p[u+16]+1)*1.5);for(let M=0;M<g;M++)c(u,M,a(.08+f(.08)))}for(let u=0;u<16;u++)for(let g=3;g<16;g++)e.next()>.9&&c(u,g,a(.16,1,-.04,-.02,-.04))}),b(String(Rn),()=>{const p=v((u,g,M)=>M*.05);for(let u=0;u<16;u++){const g=p[u]*2;for(let M=0;M<16;M++){const C=Math.sin(u*1.9+g+Math.sin(M*.35)*1.5);c(u,M,a(C>.75?-.26:C>.2?-.1:.06+f(.04)))}}for(let u=1;u<=2;u++)for(let g=0;g<10;g++){const M=g/10*Math.PI*2;c(9+Math.round(Math.cos(M)*u*1.4),7+Math.round(Math.sin(M)*u),a(u===2?-.3:-.2))}c(9,7,a(-.34)),c(10,7,a(-.28))}),b("wood_top",()=>{v((p,u,g)=>g*.04);for(let p=0;p<44;p++){const u=p/44*Math.PI*2;for(let g=1;g<7;g+=2){const M=g+(g%4===1?.6:0);c(8+Math.round(Math.cos(u)*M),8+Math.round(Math.sin(u)*M),a(g>4?-.12:.05))}}c(8,8,a(-.3)),c(8,7,a(-.2));for(let p=0;p<16;p++)c(p,0,a(-.3)),c(p,15,a(-.3)),c(0,p,a(-.3)),c(15,p,a(-.3))}),b(String(ui),()=>{v((p,u,g)=>g*.14);for(let p=0;p<26;p++){const u=e.int(0,14),g=e.int(0,14);c(u,g,a(.16)),c(u+1,g,a(.06)),c(u,g+1,a(-.1)),c(u+1,g+1,a(-.2))}for(let p=0;p<10;p++){const u=e.int(1,14),g=e.int(1,14);c(u,g,a(-.4)),c(u+1,g,a(-.25))}}),b(String(Vn),()=>{d("rgba(0,0,0,0)");for(let p=6;p<16;p++)c(8,p,a(-.28));c(7,15,a(-.2)),c(9,15,a(-.2)),c(7,5,a(.1)),c(8,5,a(.15)),c(9,5,a(.1)),c(6,4,a(.05)),c(7,4,a(.12)),c(8,4,a(.18)),c(9,4,a(.12)),c(10,4,a(.05)),c(7,3,a(.08)),c(8,3,a(.14)),c(9,3,a(.08)),c(8,2,a(.1)),c(6,5,a(.02)),c(10,5,a(.02))}),b(String(lr),()=>{v((p,u,g)=>g*.1-.02),x(11,.06,-.14),x(7,.06,-.18);for(let p=0;p<5;p++)w(e.int(3,12),e.int(3,12),e.int(1,2),-.06,-.05,.04);m(12,.1)}),b(String(cr),()=>{v((p,u,g)=>g*.1-.04),x(9,.06,-.14);for(let p=0;p<3;p++)w(e.int(3,12),e.int(3,12),e.int(1,2),.26,.04,-.18);for(let p=0;p<2;p++)w(e.int(4,11),e.int(4,11),1,-.12,.16,0);m(10,.08)}),b(String(hr),()=>{v((p,u,g)=>g*.07-.24),x(10,.04,-.08);for(let p=0;p<4;p++){const u=e.int(4,11),g=e.int(4,11),M=e.int(2,3);for(let C=-M;C<=M;C++){const L=M-Math.abs(C);for(let k=-L;k<=L;k++){const N=Math.abs(k)+Math.abs(C);c(u+k,g+C,a(N===M?-.16:N===0?.4:.16,1,-.16,-.06,.3))}}}}),b(String(Ls),()=>{const p=y();for(let u=0;u<16;u++){const g=Math.floor((u+p[u*16+8]*2+16)%16/4),M=[-.02,.05,-.06,.02][g%4];for(let C=0;C<16;C++)c(C,u,a(M+p[u*16+C]*.03+(u%4===0?-.06:0)))}for(let u=0;u<3;u++)x(e.int(6,10),.02,.06);m(10,.05)});const I=p=>{for(let u=0;u<16;u++)c(u,0,a(-.22)),c(u,15,a(-.22));for(const u of[0,8])for(let g=1;g<15;g++)p[g*16+u]>-.2&&c(u,g,a(-.16)),u&&(g===3||g===7||g===11)&&c(u,g,a(.2));for(let u=0;u<4;u++){const g=e.int(1,14),M=e.int(1,5),C=e.int(4,8);for(let L=M;L<Math.min(15,M+C);L++)e.next()>.25&&c(g,L,a(-.06+f(.04),1,.3,.05,-.22))}for(let u=0;u<8;u++)c(e.int(1,14),e.int(1,14),a(-.05))};b(String(Hi),()=>{const p=v((u,g,M)=>M*.04-.1+(u%8===0?-.05:0));I(p);for(let u=0;u<30;u++){const g=u/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.16)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.26))}for(let u=-4;u<=4;u++)for(let g=-4;g<=4;g++)Math.hypot(g,u)>4.2||c(8+g,8+u,a(-.34+p[(8+u)*16+8+g]*.06))}),b(String(Ji),()=>{const p=v((u,g,M)=>M*.04-.08+(u%8===0?-.05:0));I(p);for(let u=0;u<30;u++){const g=u/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.2)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.1,1,.35,.05,-.3))}for(let u=-4;u<=4;u++)for(let g=-4;g<=4;g++){const M=Math.hypot(g,u);M>4.2||c(8+g,8+u,a(.35-M*.08+p[(8+u)*16+8+g]*.08,1,.55-M*.05,.12-M*.04,-.45))}for(const[u,g]of[[3,2],[12,4],[5,13],[11,12]])c(u,g,a(.4,1,.5,.1,-.35))}),b(String(Fi),()=>{v((p,u,g)=>g*.03-.22+(p%4===0?-.04:0));for(let p=0;p<16;p++)c(2,p,a(-.16)),c(13,p,a(-.16));for(const p of[2,13])for(let u=3;u<13;u++)c(u,p,a(.12));for(let p=4;p<=11;p++){const u=p===4||p===11?1:2;for(let g=-u;g<=u;g++){const M=u-Math.abs(g);c(8+g,p,a(.2+M*.15+p%2*.05,1,.45+M*.1,.18,-.5))}}for(let p=0;p<6;p++)c(e.int(3,12),e.int(3,12),a(-.05))}),b(String(sr),()=>{v((p,u,g)=>g*.04-.18);for(let p=0;p<3;p++)for(let u=0;u<16;u++)c(u,p,a(.1));for(const p of[3,12])for(let u=3;u<=5;u++)c(p,u,a(-.28));c(3,6,a(-.1)),c(12,6,a(-.1));for(let p=5;p<=10;p++)c(p,7,a(.14));for(let p=6;p<=8;p++)c(p,8,a(-.06)),c(p,9,a(-.22));for(let p=11;p<=14;p++)for(let u=4;u<=11;u++){const g=Math.abs(u-7.5)+Math.abs(p-12.5);c(u,p,a(.25-g*.04+e.next()*.08,1,.55-g*.03,.18-g*.03,-.5))}for(let p=3;p<=12;p++)c(p,10,a(.08));c(3,15,a(.06)),c(12,15,a(.06));for(const[p,u]of[[6,3],[9,4],[7,2]])c(p,u,a(.45,1,.5,.12,-.35))});const R=(p,u,g)=>{S[p]&&(n=u%_n*Me,s=(u/_n|0)*Me,[o,i,l]=g,S[p]())};for(const[p,u]of Fr.entries())R(String(u),p,hn[u].color);for(const[p,u]of uu)R(p,Ve[p],hn[u].color);return $a=r,r}function zv(){const r=new $d(fu());return r.flipY=!1,r.magFilter=r.minFilter=$n,r.generateMipmaps=!1,r.colorSpace=kn,r}const ee=[];Fr.forEach((r,t)=>ee[r]=t);ee[Yn]=ee[Ge];ee[Kn]=ee[Ge];const an=_n*Me,pu=r=>{const t=ee[r]??0;return[t%_n*Me,(t/_n|0)*Me]},ws=[],mn=(r,t,e,n)=>{ws[r*6]=t,ws[r*6+1]=e;for(let s=2;s<6;s++)ws[r*6+s]=n};for(const r of Fr)mn(r,ee[r],ee[r],ee[r]);mn(ii,Ve.grass_top,ee[bn],Ve.grass_side);mn(Rn,Ve.wood_top,Ve.wood_top,ee[Rn]);mn(Nn,ee[Nn],ee[bn],Ve.farmland_side);mn(Sn,Ve.sandstone_top,ee[Sn],ee[Sn]);mn(Ge,Ve.hull_top,ee[Ge],ee[Ge]);mn(Yn,Ve.hull_top,ee[Ge],ee[Ge]);mn(Kn,Ve.hull_top,ee[Ge],ee[Ge]);mn(fn,ee[fn],ee[fn],Ve.bed_side);mn(pn,ee[pn],ee[pn],Ve.bed_side);mn(Fe,Ve.chest_top,ee[Fe],ee[Fe]);mn(Re,Ve.bench_top,ee[Re],ee[Re]);mn(Ue,Ve.bench_ext_top,ee[Ue],ee[Ue]);mn(Qe,Ve.campfire_top,ee[Qe],ee[Qe]);mn(un,Ve.cactus_top,ee[un],ee[un]);mn(di,Ve.cactus_top,ee[un],ee[di]);for(const r of[ze,is,Vr,Wr,qr,Xr,$r,ss])mn(r,ee[r],ee[r],Ve.water_side);const Ui=16,ad=`
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
`,ld=`
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
`,xr=new F,cd=new F,Hv=new Gt(1,.97,.9),Gv=new Gt(.2,.27,.45),Vv=new Gt(.72,.55,.35);class Wv{scene=new hp;camera;three;chunkMeshes=new Map;group=new se;entityGroup=new se;sun;hemi;stars;sunDisc;dust;stormI=0;stormOpen=!0;moonDisc;highlight;renderDistance=7;atlas=zv();matOpaque=new ie({map:this.atlas,vertexColors:!0,side:Xe});matEmissive=new pi({map:this.atlas,vertexColors:!0,side:Xe});matTrans=new ie({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:Xe});lightingMode="sky";skyLight=new Ov;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new Gt(1,1,1)},uFloor:{value:.16},uFogColor:{value:new Gt(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:Ui},()=>new F)},uLightCol:{value:Array.from({length:Ui},()=>new F)},uLightRange:{value:new Float32Array(Ui)}};matSky=new Ei({uniforms:this.skyU,vertexShader:ad,fragmentShader:ld,side:Xe,defines:{OPAQUE_PASS:"1"}});matSkyT=new Ei({uniforms:this.skyU,vertexShader:ad,fragmentShader:ld,side:Xe,transparent:!0,depthWrite:!1});torch;playerLight;dynLights=[];fires=new Map;ghost=null;ghostGeos=new Map;matGhost=new pi({map:this.atlas,vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1,side:Xe});constructor(t){this.three=new sv({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new Wn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new Na(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.playerLight=new Na(16766826,2.4,20,1.4),this.playerLight.visible=!1,this.scene.add(this.playerLight),this.sun=new yp(16777215,1),this.hemi=new vp(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new vc(14207392,40,this.renderDistance*G);const n=new tn,s=[];for(let h=0;h<500;h++){const a=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);s.push(Math.sin(c)*Math.cos(a)*400,Math.abs(Math.cos(c))*400,Math.sin(c)*Math.sin(a)*400)}n.setAttribute("position",new me(s,3)),this.stars=new vh(n,new $l({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new Ze(new Vo(24,24),new pi({color:16771504,fog:!1,side:Xe,toneMapped:!1})),this.moonDisc=new Ze(new Vo(15,24),new pi({color:14213877,fog:!1,side:Xe,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const o=new tn,i=[];for(let h=0;h<700;h++){const a=Math.random()*Math.PI*2,c=3+Math.random()*16;i.push(Math.cos(a)*c,(Math.random()-.35)*14,Math.sin(a)*c)}o.setAttribute("position",new me(i,3)),this.dust=new vh(o,new $l({color:14072204,size:.3,transparent:!0,opacity:0,depthWrite:!1})),this.dust.frustumCulled=!1,this.scene.add(this.dust);const l=new Bi(1.002,1.002,1.002);this.highlight=new mh(new xh(l),new Xl({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,s){if(this.dynLights.length>=12||this.dynLights.some(i=>i.x===t&&i.y===e&&i.z===n))return;const o=new Na(s==="lamp"?16773296:s==="fire"?16745280:9427199,s==="lamp"?.9:s==="fire"?1.1:.8,s==="lamp"?12:s==="fire"?9:10,1.3);o.position.set(t+.5,e+.6,n+.5),this.scene.add(o),this.dynLights.push({x:t,y:e,z:n,light:o,flame:s==="fire"})}hasPointLight(t,e,n){return this.dynLights.some(s=>s.x===t&&s.y===e&&s.z===n)}removePointLight(t,e,n){const s=this.dynLights.findIndex(o=>o.x===t&&o.y===e&&o.z===n);s<0||(this.scene.remove(this.dynLights[s].light),this.dynLights.splice(s,1))}setGhost(t,e,n,s,o=0){if(!this.ghost){this.ghost=new Ze(new tn,this.matGhost);const h=new mh(new xh(new Bi(1.02,1.02,1.02)),new Xl({color:14202703,transparent:!0,opacity:.7}));h.position.set(.5,.5,.5),this.ghost.add(h),this.ghost.renderOrder=5,this.scene.add(this.ghost)}const i=`${s}:${o}`;let l=this.ghostGeos.get(i);l||(l=this.buildGhostGeo(s,o),this.ghostGeos.set(i,l)),this.ghost.geometry=l,this.ghost.position.set(t,e,n),this.ghost.visible=!0}buildGhostGeo(t,e){let n;qa.has(t)?n=qo(ci(.04,0,.02,.96,1,.16)):id.has(t)?n=qo([ye([1,0,1],2,.92,[[0,0,0],[1,0,1],[1,1,1],[0,1,0]],a=>[a[0],a[1]]),ye([1,0,-1],2,.92,[[0,0,1],[1,0,0],[1,1,0],[0,1,1]],a=>[a[0],a[1]])]):t===Yn||t===Kn?n=sd[t].filter(a=>!a.fill):t===Re?n=rd:t===Ue?n=od:t>=is&&t<=ss?n=ci(0,0,0,1,(33-t)/8,1):n=_r.map((a,c)=>({dir:a.dir,kind:c===0?0:c===1?1:2,pts:a.corners,sh:a.shade,uv:d=>[d[a.uv[0]],d[a.uv[1]]]})),e&&(qa.has(t)||t===Yn||t===Kn||t===Re||t===Ue)&&(n=Xa(n,e));const s=[],o=[],i=[],l=[];for(const a of n){const c=ws[t*6+a.kind],d=c%_n*Me,f=(c/_n|0)*Me,m=s.length/3;for(const x of a.pts){s.push(x[0],x[1],x[2]),o.push(a.sh,a.sh,a.sh);const[y,v]=a.uv(x);i.push((d+.5+y*(Me-1))/an,(f+.5+v*(Me-1))/an)}for(let x=1;x+1<a.pts.length;x++)l.push(m,m+x,m+x+1)}const h=new tn;return h.setAttribute("position",new me(s,3)),h.setAttribute("color",new me(o,3)),h.setAttribute("uv",new me(i,2)),h.setIndex(l),h.computeVertexNormals(),h}clearGhost(){this.ghost&&(this.ghost.visible=!1)}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),s=xi.clamp(n*2.2,0,1),o=xi.clamp(1-Math.abs(n)*5,0,1),i=new Gt(660006),l=new Gt(13201213),h=new Gt(12570592),a=i.clone().lerp(h,s);o>0&&a.lerp(l,o*.7);const c=new Gt(16767392).lerp(new Gt(16743231),o);return{sky:a,sunColor:c,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:s}}updateSky(t,e){const n=t%qe/qe,s=this.keyframe(n);if(this.scene.background=s.sky,this.scene.fog.color.copy(s.sky),this.scene.fog.far=this.renderDistance*G*.98,this.stormI>.01){const a=this.scene.fog;a.color.lerp(Vv,Math.min(1,this.stormI*.85)),a.near=xi.lerp(40,4,this.stormI),a.far=Math.min(a.far,xi.lerp(this.renderDistance*G,24,this.stormI)),this.scene.background=a.color}const o=(n-.25)*Math.PI*2;xr.set(Math.cos(o),s.sunElev,.4).normalize(),s.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,xr.negate()):(this.sun.color.copy(s.sunColor),this.sun.intensity=s.sunI),this.sun.position.set(e.x+xr.x*120,e.y+xr.y*120,e.z+xr.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+s.sunI*.35,this.stars.material.opacity=Math.max(0,1-s.sunI*3),this.stars.position.set(e.x,e.y,e.z);const i=430;this.sunDisc.position.set(e.x+Math.cos(o)*i,e.y+Math.sin(o)*i,e.z+i*.4),this.moonDisc.position.set(e.x-Math.cos(o)*i,e.y-Math.sin(o)*i,e.z-i*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(o)>-.12,this.moonDisc.visible=Math.sin(o)<.12,this.stormI>.01?(this.sun.intensity*=1-this.stormI*.75,this.hemi.intensity*=1-this.stormI*.55,this.sunDisc.visible&&=this.stormI<.5,this.moonDisc.visible&&=this.stormI<.5,this.stars.material.opacity*=1-this.stormI,this.dust.material.opacity=this.stormOpen?this.stormI*.75:0,this.dust.position.set(this.camera.position.x,this.camera.position.y+2,this.camera.position.z),this.dust.rotation.y=t*.7):this.dust.material.opacity>0&&(this.dust.material.opacity=0),this.torch.intensity=.12+(1-Math.min(1,s.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+Zl(t*5.3+a.x*3.1+a.z,7)*.45);const l=this.skyU;l.uAmbient.value.copy(Gv).lerp(Hv,s.dayT);const h=this.scene.fog;return l.uFogColor.value.copy(h.color),l.uFogNear.value=h.near,l.uFogFar.value=h.far,this.syncSkyLights(),s}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(cd),t.uLightPos.value[e].copy(cd);const n=this.torch.color;if(t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++,this.playerLight.visible&&e<Ui){t.uLightPos.value[e].copy(this.playerLight.position);const s=this.playerLight.color;t.uLightCol.value[e].set(s.r,s.g,s.b).multiplyScalar(this.playerLight.intensity),t.uLightRange.value[e]=this.playerLight.distance,e++}for(const s of this.dynLights){if(e>=Ui)break;t.uLightPos.value[e].copy(s.light.position);const o=s.light.color;t.uLightCol.value[e].set(o.r,o.g,o.b).multiplyScalar(s.light.intensity),t.uLightRange.value[e]=s.light.distance,e++}t.uNumLights.value=e}setStorm(t,e){this.stormI=t,this.stormOpen=e}stormDome=null;setStormDome(t){if(!t){this.stormDome&&(this.entityGroup.remove(this.stormDome),this.stormDome.geometry.dispose(),this.stormDome.material.dispose(),this.stormDome=null);return}if(!this.stormDome){const e=new Ze(new jo(iu,28,18),new pi({color:14178376,transparent:!0,opacity:.12,side:Xe,depthWrite:!1}));e.renderOrder=2,this.stormDome=e,this.entityGroup.add(e)}this.stormDome.position.set(t[0],t[1],t[2])}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}setPlayerLight(t){if(!t){this.playerLight.visible=!1;return}this.playerLight.visible=!0,this.playerLight.position.set(t.x,t.y,t.z)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let s=-this.renderDistance;s<=this.renderDistance;s++)for(let o=-this.renderDistance;o<=this.renderDistance;o++){const i=Xn(e+s,n+o);this.chunkMeshes.has(i)||t.markDirty(e+s,n+o)}}buildChunk(t,e){const[n,s]=e.split(",").map(Number),o=t.chunk(n,s),i=[],l=[],h=[],a=[],c=[],d=[],f=[],m=[],x=[],y=[],v=[],_=[],T=[],w=[],S=this.lightingMode==="sky"?this.skyLight.bake(t,n,s,(g,M)=>{const C=Xn(g,M);!t.dirty.has(C)&&!this.lightRecheck.has(C)&&this.lightRecheck.add(C)}):null,b=(g,M,C)=>S&&M>=0&&M<Kt?S[Ss(g,C,M)]/No:0;for(let g=0;g<G;g++)for(let M=0;M<G;M++)for(let C=0;C<Kt;C++){const L=o[(g*G+M)*Kt+C];if(L===Mt)continue;const k=n*G+g,N=s*G+M,z=t.rots.size?t.getRot(k,C,N):0;if(qa.has(L)){let X=0;if(S)for(const[K,nt]of[[1,0],[-1,0],[0,1],[0,-1]])X=Math.max(X,S[Ss(g+K,M+nt,C)]);this.emitDoor(i,l,h,a,c,X/No,t,g,C,M,n*G,s*G,L);continue}if(id.has(L)){const X=ee[L],K=X%_n*Me,nt=(X/_n|0)*Me,Tt=S?S[Ss(g,M,C)]/No:0,ft=(Wt,Te,D,ue)=>{const It=y.length/3;y.push(Wt,C,Te,D,C,ue,D,C+1,ue,Wt,C+1,Te);for(let kt=0;kt<4;kt++)v.push(.92,.92,.92),w.push(Tt);T.push((K+.5)/an,(nt+15.5)/an,(K+15.5)/an,(nt+15.5)/an,(K+15.5)/an,(nt+.5)/an,(K+.5)/an,(nt+.5)/an),_.push(It,It+1,It+2,It,It+2,It+3)};ft(g,M,g+1,M+1),ft(g+1,M,g,M+1);continue}if(L===Yn||L===Kn){this.emitShape(Xa(sd[L],z),i,l,h,a,c,L,t,g,C,M,n*G,s*G,b);continue}if(L===Re||L===Ue){const X=n*G+g,K=s*G+M;let nt,Tt,ft;L===Re?(nt=t.get(X+1,C,K)===Ue?0:t.get(X,C,K+1)===Ue?1:t.get(X-1,C,K)===Ue?2:3,Tt=rd,z!==0?(nt=0,ft=z):ft=0):(nt=t.get(X-1,C,K)===Re?0:t.get(X,C,K-1)===Re?1:t.get(X+1,C,K)===Re?2:3,Tt=od,ft=t.getRot(X+(nt===0?-1:nt===2?1:0),C,K+(nt===1?-1:nt===3?1:0)),ft!==0&&(nt=0)),this.emitShape(Xa(Tt,nt+ft&3),i,l,h,a,c,L,t,g,C,M,n*G,s*G,b);continue}if(L>=is&&L<=ss){const X=(33-L)/8;for(let K=0;K<_r.length;K++){const nt=_r[K],Tt=g+nt.dir[0],ft=C+nt.dir[1],Wt=M+nt.dir[2],Te=t.get(n*G+Tt,ft,s*G+Wt);let D=0;if(nt.dir[1]===0&&Mn(Te)){if(D=ki(Te)/8,D>=X)continue}else{if(Mn(Te))continue;if(!To(t,n*G+Tt,ft,s*G+Wt,L))continue}const ue=ws[L*6+K],It=ue%_n*Me,kt=(ue/_n|0)*Me,xt=y.length/3,he=b(Tt,ft,Wt);for(const yt of nt.corners)y.push(g+yt[0],yt[1]?C+X:C+D,M+yt[2]),v.push(nt.shade,nt.shade,nt.shade),w.push(he),T.push((It+.5+yt[nt.uv[0]]*(Me-1))/an,(kt+.5+yt[nt.uv[1]]*(Me-1))/an);_.push(xt,xt+1,xt+2,xt,xt+2,xt+3)}continue}const Y=hn[L],W=L===Qe&&(this.fires.get(k+","+C+","+N)??0)<=0,J=Y.emissive&&!W,et=Y.transparent,_t=et?y:J?d:i,Vt=et?v:J?f:l,ae=et?_:J?m:h,le=et?T:J?x:a,Jt=et?w:J?null:c;for(let X=0;X<_r.length;X++){const K=_r[X],nt=z?nc(K.dir,z):K.dir,Tt=g+nt[0],ft=C+nt[1],Wt=M+nt[2];if(!To(t,n*G+Tt,ft,s*G+Wt,L))continue;const Te=W?Ve.campfire_cold:ws[L*6+X],D=Te%_n*Me,ue=(Te/_n|0)*Me,It=_t.length/3,kt=J?1:K.shade,xt=Jt?b(Tt,ft,Wt):0;for(const he of K.corners){const[yt,$t]=z?du(he[0],he[2],z):[he[0],he[2]];_t.push(g+yt,C+he[1],M+$t),Vt.push(kt,kt,kt),Jt&&Jt.push(xt),le.push((D+.5+he[K.uv[0]]*(Me-1))/an,(ue+.5+he[K.uv[1]]*(Me-1))/an)}ae.push(It,It+1,It+2,It,It+2,It+3)}}const I=this.chunkMeshes.get(e);if(I)for(const g of I)this.group.remove(g),g.geometry.dispose();const R=[],p=this.lightingMode==="sky",u=(g,M,C,L,k,N)=>{if(g.length===0)return;const z=new tn;z.setAttribute("position",new me(g,3)),z.setAttribute("color",new me(M,3)),z.setAttribute("uv",new me(L,2)),k&&k.length*3===g.length&&z.setAttribute("light",new me(k,1)),z.setIndex(C),z.computeVertexNormals();const Y=new Ze(z,N);Y.position.set(n*G,0,s*G),!p&&N!==this.matEmissive&&(Y.castShadow=N!==this.matTrans,Y.receiveShadow=!0),this.group.add(Y),R.push(Y)};u(i,l,h,a,S?c:null,p?this.matSky:this.matOpaque),u(d,f,m,x,null,this.matEmissive),u(y,v,_,T,S?w:null,p?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,R)}emitDoor(t,e,n,s,o,i,l,h,a,c,d,f,m){const x=d+h,y=f+c,v=m===Ye||m===He||m===Je,_=m===je||m===He||m===$e&&l.get(x,a-1,y)===$e||m===Je&&l.get(x,a-1,y)===Je,T=pu(_?v?He:je:v?Ye:Ke),w=m===$e||m===Je,b=!(dn(l.get(x-1,a,y))||dn(l.get(x+1,a,y)))&&(dn(l.get(x,a,y-1))||dn(l.get(x,a,y+1))),I=b?!dn(l.get(x-1,a,y)):!dn(l.get(x,a,y-1)),R=b?!dn(l.get(x+1,a,y)):!dn(l.get(x,a,y+1)),p=x+y&1;let u,g;p&&R?(u=1,g=1):!p&&I?(u=0,g=-1):R?(u=1,g=1):(u=0,g=-1);const M=l.doorSwing.get(x+","+y);M&&(g=M);const C=.04,L=.96,k=u?.84:.02,N=u?.98:.16,z=C,Y=u?.98:.02,W=(_t,Vt,ae)=>{const le=t.length/3;for(let Jt=0;Jt<4;Jt++){let[X,K,nt]=_t[Jt];if(w){const Tt=X-z,ft=nt-Y;X=z-g*ft,nt=Y+g*Tt}t.push(b?h+nt:h+X,a+K,b?c+X:c+nt),e.push(ae,ae,ae),o.push(i),s.push((T[0]+.5+Vt[Jt][0]*(Me-1))/an,(T[1]+.5+Vt[Jt][1]*(Me-1))/an)}n.push(le,le+1,le+2,le,le+2,le+3)},J=_t=>(_t-C)/(L-C),et=_t=>(_t-k)/(N-k);W([[C,0,N],[L,0,N],[L,1,N],[C,1,N]],[[J(C),0],[J(L),0],[J(L),1],[J(C),1]],.85),W([[C,0,k],[L,0,k],[L,1,k],[C,1,k]],[[J(L),0],[J(C),0],[J(C),1],[J(L),1]],.7),W([[L,0,k],[L,0,N],[L,1,N],[L,1,k]],[[et(k),0],[et(N),0],[et(N),1],[et(k),1]],.6),W([[C,0,k],[C,0,N],[C,1,N],[C,1,k]],[[et(N),0],[et(k),0],[et(k),1],[et(N),1]],.6),W([[C,1,k],[L,1,k],[L,1,N],[C,1,N]],[[J(C),et(k)],[J(L),et(k)],[J(L),et(N)],[J(C),et(N)]],1),W([[C,0,k],[L,0,k],[L,0,N],[C,0,N]],[[J(C),et(N)],[J(L),et(N)],[J(L),et(k)],[J(C),et(k)]],.45)}emitShape(t,e,n,s,o,i,l,h,a,c,d,f,m,x){for(const y of t){const v=(y.dir[0]?1:0)+(y.dir[1]?1:0)+(y.dir[2]?1:0);if(y.fill){if(To(h,f+a+y.fill[0],c+y.fill[1],m+d+y.fill[2],l))continue}else if(v===1&&!y.always&&!To(h,f+a+y.dir[0],c+y.dir[1],m+d+y.dir[2],l))continue;const _=ws[l*6+y.kind],T=_%_n*Me,w=(_/_n|0)*Me;let S=0;y.fill&&(S=x(a,c,d)),y.dir[0]&&(S=Math.max(S,x(a+y.dir[0],c,d))),y.dir[1]&&(S=Math.max(S,x(a,c+y.dir[1],d))),y.dir[2]&&(S=Math.max(S,x(a,c,d+y.dir[2])));const b=e.length/3;for(const I of y.pts){e.push(a+I[0],c+I[1],d+I[2]),n.push(y.sh,y.sh,y.sh),i.push(S);const[R,p]=y.uv(I);o.push((T+.5+R*(Me-1))/an,(w+.5+p*(Me-1))/an)}for(let I=1;I+1<y.pts.length;I++)s.push(b,b+I,b+I+1)}}addEntityMesh(t,e,n,s=.35){const o=new Ze(new Bi(s,s,s),new ie({color:n}));return o.position.set(...e),o.userData.eid=t,this.entityGroup.add(o),o}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(s=>s.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,s,o=14){const i=this.nextEid++,l=new Ze(new xc(.14,.28,o,6,1,!0),new pi({color:s,transparent:!0,opacity:.4,depthWrite:!1,side:Xe,fog:!1}));return l.position.set(t,e+o/2,n),l.userData.eid=i,this.entityGroup.add(l),i}addGroundRing(t,e,n,s,o=1.1){const i=this.nextEid++,l=new Ze(new yc(o*.55,o,24),new pi({color:s,transparent:!0,opacity:.7,side:Xe,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,e+.06,n),l.userData.eid=i,this.entityGroup.add(l),i}render(){this.three.render(this.scene,this.camera)}}const dt=r=>r,qv=(r,t)=>`${r.charAt(0).toUpperCase()+r.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,Pn=(r,t,e,n)=>dt({id:`${e}_${r}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${r}`,desc:qv(r,t),w:1,h:2,mass:1.2+t*.8,tool:{type:r,tier:t},color:n}),Xv=[dt({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:ni,color:"#d4b880"}),dt({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:Sn,color:"#c2a670"}),dt({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:ke,color:"#736d69"}),dt({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Is,color:"#8d8680"}),dt({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:bn,color:"#6b5238"}),dt({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:rs,color:"#d9dbd6"}),dt({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:ti,color:"#61492f"}),dt({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:Jo,color:"#a6cfe6"}),dt({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:Ps,color:"#8cc0a0"}),dt({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:Ge,color:"#858a99"}),dt({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:Ke,color:"#999fa8"}),dt({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:Un,color:"#fff0a0"}),dt({id:"metal",name:"Iron Rod",desc:"Forged iron — salvaged from the wreck, or baked from Rock and Iron Ore at a Campfire. The backbone of every tool.",w:1,h:1,mass:1,block:Qo,color:"#9aa0aa"}),dt({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:Dn,color:"#66e5f0"}),dt({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:Re,color:"#806647"}),dt({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:Qe,color:"#e67333"}),dt({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:zi,color:"#59bfcc"}),dt({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:yi,color:"#b3956b"}),dt({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Fe,color:"#8a6d3b"}),dt({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),dt({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),dt({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),dt({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:es,color:"#c468e8"}),dt({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),Pn("pickaxe",1,"wood","#a8834f"),Pn("pickaxe",2,"stone","#8d8680"),Pn("pickaxe",3,"metal","#9aa0aa"),Pn("shovel",1,"wood","#a8834f"),Pn("shovel",2,"stone","#8d8680"),Pn("shovel",3,"metal","#9aa0aa"),Pn("axe",1,"wood","#a8834f"),Pn("axe",2,"stone","#8d8680"),Pn("axe",3,"metal","#9aa0aa"),Pn("pickaxe",4,"alloy","#c07848"),Pn("shovel",4,"alloy","#c07848"),Pn("axe",4,"alloy","#c07848"),Pn("disassembler",1,"metal","#c0c8d8"),Pn("disassembler",2,"alloy","#c07848"),dt({id:"voidbreaker",name:"Voidbreaker",desc:"Cheat gear: every block — even Ship Hull and bedrock-hard stuff — shatters the instant you swing. There is no recipe: it only comes out of the cheat menu.",w:1,h:2,mass:2,instaBreak:!0,color:"#8a5ad6"}),dt({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),dt({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 6×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",bag:{w:6,h:5,kg:20},color:"#7a5a3a"}),dt({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:un,color:"#3d8042"}),dt({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),dt({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),dt({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",armor:.4,color:"#8a6f4d"}),dt({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),dt({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),dt({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:Nn,color:"#573d23"}),dt({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:Gn,color:"#c8b060"}),dt({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:qn,color:"#d8c878"}),dt({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),dt({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),dt({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),dt({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:Rn,color:"#7a5c3a"}),dt({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),dt({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Vn,color:"#7fae54"}),dt({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),dt({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),dt({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:Yr,color:"#8a744a"}),dt({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:ln,color:"#9aa0ac"}),dt({id:"storm_breaker",name:"Sandstorm Breaker",desc:"A humming red pylon. Stand within 8 blocks of one and the Sandstorm loses all teeth — no scorching, no wind-thirst, no sand blast.",w:1,h:1,mass:4,block:Fi,color:"#c04838"}),dt({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:Ye,color:"#82868e"}),dt({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:fn,color:"#a84a42"}),dt({id:"iron_ore",name:"Iron Ore",desc:"Dense ore from Cave walls. Smelt it at a Campfire: one ore bakes two Iron Rods.",w:1,h:1,mass:1.6,block:lr,color:"#9e8468"}),dt({id:"copper_ore",name:"Copper Ore",desc:"Reddened Cave stone. Smelts into Copper Rods - the heart of tier-4 Alloy gear.",w:1,h:1,mass:1.6,block:cr,color:"#b86b42"}),dt({id:"alabaster",name:"Alabaster",desc:"Pale Cave stone. Cuts soft, decorates well, and takes a Lamp's light like nothing else.",w:1,h:1,mass:1.2,block:Ls,color:"#dcd5bd"}),dt({id:"cobalt_ore",name:"Cobalt Ore",desc:"Bluish ore of the deepest stone (Metal Pickaxe or better). The Ship's repair hangs on it.",w:1,h:1,mass:2.2,block:hr,color:"#5c74a8"}),dt({id:"copperrod",name:"Copper Rod",desc:"Smelted from Copper Ore. Never a tool by itself - always a component of better things.",w:1,h:1,mass:1,color:"#c07848"}),dt({id:"cobaltrod",name:"Cobalt Rod",desc:"Smelted from Cobalt Ore, found only in the deep underground. One Thruster Nozzle needs one.",w:1,h:1,mass:1.4,color:"#6a84bc"}),dt({id:"backpack2",name:"Backpack II",desc:"The big pack: inventory grid grows to 7×6, weight limit +40 kg. Reptile-hide stitching.",w:3,h:2,mass:3.5,equip:"backpack",bag:{w:7,h:6,kg:40},color:"#6a4c30"}),dt({id:"body_regulator",name:"Body Heat Regulator",desc:"Worn in the Regulator slot: pins your Heat toward neutral while a Coolant Cell lasts. It regulates you - never a room.",w:2,h:2,mass:3,equip:"regulator",color:"#4fa8c8"}),dt({id:"coolant_cell",name:"Coolant Cell",desc:"Consumable fuel for the Body Heat Regulator: one cell carries about 2 game days of regulation. Spent cells are gone.",w:1,h:1,mass:.8,color:"#7fd4e8"}),dt({id:"head_lantern",name:"Head Lantern",desc:"The Portable Light: worn in the Light slot, toggled with T. Burns fuel charges (5 max) - refill at a Campfire or load Kindling.",w:1,h:1,mass:1,equip:"light",fuel:5,color:"#ffd76a"}),dt({id:"chitin",name:"Chitin",desc:"Dust Scorpion armor plate. Tough, thin, and very hard to burn.",w:1,h:1,mass:.3,color:"#6a4a3a"}),dt({id:"stinger",name:"Stinger",desc:"A Dust Scorpion's barb. Tipped onto a blade, it makes the deadliest weapon in the desert.",w:1,h:1,mass:.2,color:"#a84a3a"}),dt({id:"wurm_hide",name:"Wurm Hide",desc:"Sand Wurm skin - heat-tempered plating for the toughest Body gear.",w:1,h:2,mass:1.2,color:"#8a6a48"}),dt({id:"vulture_raw",name:"Vulture Fillet (raw)",desc:"Raw meat off a Sand Vulture. Cook it at a Campfire before eating.",w:1,h:1,mass:.7,color:"#7a5a4a"}),dt({id:"vulture_cooked",name:"Roasted Fillet",desc:"Cooked Vulture meat. Eat it: +25 Health.",w:1,h:1,mass:.6,eat:{health:25},color:"#b0764a"}),dt({id:"tortoise_shell",name:"Thornback Shell",desc:"The spiked dome of a Thornback Tortoise. Three plate a Cuirass; Traders always want them.",w:2,h:2,mass:6,color:"#5f5a4e"}),dt({id:"fennec_pelt",name:"Fennec Pelt",desc:"Soft pale fur off a Fennec Fox. Worth a real price at any Trader.",w:1,h:2,mass:.5,color:"#c99a62"}),dt({id:"tortoise_cuirass",name:"Thornback Cuirass",desc:"Body-slot breastplate of layered Shell and Metal: shrugs off 48% of every blow. Heavy going.",w:2,h:2,mass:9,equip:"body",armor:.48,color:"#6a6255"}),dt({id:"wurmsuit",name:"Wurmsuit",desc:"Body-slot armour of Wurm Hide and Chitin: shrugs off 45% of every blow, and the Chitin turns the Sandstorm aside — blast and wind-thirst bite at a quarter. Warmer against the cold night too.",w:2,h:2,mass:5,equip:"body",armor:.45,stormResist:!0,color:"#7a5c40"}),dt({id:"stinger_blade",name:"Stinger Blade",desc:"A Metal Sword tipped with a Scorpion Stinger: hits harder and farther than anything above ground.",w:1,h:2,mass:2.4,weapon:{reach:5.2,dmg:12},color:"#c9b048"}),dt({id:"curved_hull",name:"Curved Hull Plating",desc:"Hull Plating shaped as an elbow - insulates exactly like flat plating, and rounds any corner you build.",w:1,h:1,mass:2,block:Yn,color:"#7d8390"}),dt({id:"hull_slope",name:"Hull Slope",desc:"A beveled hull block for spines, roofs and shoulders. Same insulation, rounder silhouette.",w:1,h:1,mass:2,block:Kn,color:"#767d88"}),dt({id:"thruster_nozzle",name:"Thruster Nozzle",desc:"Cobalt-and-Copper replacement engine part. Press E at a Broken Thruster to wake it. All four wake the Ship.",w:1,h:2,mass:3,color:"#c88a50"}),dt({id:"thruster_broken",name:"Broken Thruster",desc:"A dead wingtip engine torn off its pylon. Heavy, inert — set it down anywhere and it waits for a Thruster Nozzle.",w:2,h:2,mass:22,block:Hi,color:"#6b707c"}),dt({id:"thruster_lit",name:"Thruster (lit)",desc:"A running engine lifted off its pylon. It keeps burning while you carry it, and burns where you set it down.",w:2,h:2,mass:22,block:Ji,color:"#c88a50"}),dt({id:"armory",name:"Armoury",desc:"A forge bench for gear that guards the body: armour, backpacks, visors and the Body Heat Regulator. Built at the Crafting Bench.",w:2,h:2,mass:14,block:sr,color:"#6a6258"}),dt({id:"hot_water_pouch",name:"Hot Water Pouch",desc:"A full canister heated at a lit Campfire. Use it (Q): a +10 °C heat pulse toward body-warm, and the empty canister comes back.",w:1,h:2,mass:1.2,color:"#e08a4f"}),dt({id:"surveyor_pin",name:"Surveyor's Pin",desc:`Press E to plant one where you stand: a named mark on the Map, forever. Rename it from the maximised Map. A Pin named "Base" is the point your Surveyor's Visor beams you back to.`,w:1,h:1,mass:.2,color:"#66e5f0"}),dt({id:"tracker",name:"Hidden Landmark Tracker",desc:"Use it (Q): wakes the nearest Landmark you have never found — a Town, Trader camp, cave mouth, oasis or buried canister site — and marks it on the Map. One use, then it is gone; it can never find the one-of-a-kind second wreck.",w:1,h:1,mass:.4,color:"#c08a3c"})],Ct=Object.fromEntries(Xv.map(r=>[r.id,r])),si={};for(const r of Object.values(Ct))r.block!==void 0&&(si[r.block]=r.id);si[je]="door";si[He]="door_inner";si[pn]="bed";si[ii]="dirt";si[ui]="kindling";si[Gn]="seed_melon";si[An]="dune_melon";si[qn]="seed_wheat";si[yn]="wheat";si[di]="cactus";function Ln(r){const t=Ct[r.itemId];return r.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class Ya{slots=[];w=5;h=4;baseLimit=30;bonusLimit=0;learn=()=>{};constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const s=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const o of s)this.addSlot(o)||this.droppedOnResize.push(o)}droppedOnResize=[];weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=Ct[e.itemId].mass;return t}occupied(t,e,n){for(const s of this.slots){if(s===n)continue;const o=Ln(s);if(t>=s.x&&t<s.x+o.w&&e>=s.y&&e<s.y+o.h)return s}return null}fits(t,e,n,s,o){if(t<0||e<0||t+n>this.w||e+s>this.h)return!1;for(let i=0;i<s;i++)for(let l=0;l<n;l++)if(this.occupied(t+l,e+i,o))return!1;return!0}move(t,e,n){const s=Ln(t);return e===t.x&&n===t.y?!0:this.fits(e,n,s.w,s.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=Ln(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addSlot(t){const e=Ct[t.itemId],n=e.w===e.h?[[e.w,e.h,t.rot??!1]]:[[e.w,e.h,t.rot??!1],[e.h,e.w,!t.rot]];for(const[s,o,i]of n)for(let l=0;l<=this.h-o;l++)for(let h=0;h<=this.w-s;h++){let a=!0;for(let c=0;c<o&&a;c++)for(let d=0;d<s&&a;d++)this.occupied(h+d,l+c)&&(a=!1);if(a)return t.x=h,t.y=l,t.rot=i||void 0,this.slots.push(t),this.learn(t.itemId),!0}return!1}addItem(t,e=1){const n=Ct[t],s=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let o=0;o<e;o++){let i=!1;for(const[l,h,a]of s){for(let c=0;c<=this.h-h&&!i;c++)for(let d=0;d<=this.w-l&&!i;d++){let f=!0;for(let m=0;m<h&&f;m++)for(let x=0;x<l&&f;x++)this.occupied(d+x,c+m)&&(f=!1);f&&(this.slots.push(a?{itemId:t,x:d,y:c,rot:!0}:{itemId:t,x:d,y:c}),this.learn(t),i=!0)}if(i)break}if(!i)return e-o}return 0}removeItem(t,e=1){let n=0;for(let s=this.slots.length-1;s>=0&&n<e;s--)this.slots[s].itemId===t&&(this.slots.splice(s,1),n++);return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&e++;return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const yr={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]},scorpion:{kind:"scorpion",name:"Dust Scorpion",hp:20,speed:1.9,aggroR:3.5,fleeR:0,biteDmg:7,biteCd:2.2,hitR:.6,height:.5,drops:[{itemId:"chitin",count:1},{itemId:"stinger",count:1}],dropChance:[1,.3]},wurm:{kind:"wurm",name:"Sand Wurm",hp:45,speed:1,aggroR:7,fleeR:0,biteDmg:12,biteCd:2.5,hitR:.8,height:.9,drops:[{itemId:"wurm_hide",count:2},{itemId:"chitin",count:1}],dropChance:[1,.5]},trader:{kind:"trader",name:"Trader",hp:9999,speed:1.1,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.5,height:1.8,drops:[]},vulture:{kind:"vulture",name:"Sand Vulture",hp:14,speed:2.6,aggroR:5,fleeR:8,biteDmg:5,biteCd:2.2,hitR:.55,height:.9,drops:[{itemId:"vulture_raw",count:1},{itemId:"vulture_raw",count:1}],dropChance:[1,.5]},tortoise:{kind:"tortoise",name:"Thornback Tortoise",hp:40,speed:.7,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.9,height:.8,drops:[{itemId:"tortoise_shell",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.4]},fennec:{kind:"fennec",name:"Fennec Fox",hp:6,speed:4.2,aggroR:0,fleeR:9,biteDmg:0,biteCd:0,hitR:.4,height:.45,drops:[{itemId:"fennec_pelt",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.3]}},$v=new Bi(1,1,1);function Yv(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function os(r){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");r(e,Yv(5370855));const n=new $d(t);return n.magFilter=n.minFilter=$n,n.generateMipmaps=!1,n.colorSpace=kn,n}function Kv(){return os((r,t)=>{r.fillStyle="#c8a76d",r.fillRect(0,0,64,64);for(let n=0;n<420;n++){const s=.5+(t()-.5)*.22;r.fillStyle=s>.5?"#d4b781":"#b89359",r.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let s=0;s<9;s++){const o=5-Math.abs(s-4);r.fillStyle="#6f5230",r.fillRect(32-o,n+s,o*2,1),r.fillStyle="#8a6a3f",r.fillRect(32-o+1,n+s,Math.max(1,o*2-2),1)}r.fillStyle="#a9884f",r.fillRect(10+(t()*4|0),n+3,3,2),r.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)r.fillStyle=n>=56?"#e9dab1":"#d8c494",r.fillRect(0,n,64,1);for(let n=0;n<40;n++)r.fillStyle="#ddcba0",r.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function jv(){return os((r,t)=>{r.fillStyle="#c9a878",r.fillRect(0,0,64,64);for(let e=0;e<700;e++)r.fillStyle=t()>.5?"#ddc295":"#a9854f",r.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)r.fillStyle="#8a6a3c",r.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)r.fillStyle=e>=54?"#f2ead9":"#e2d4ba",r.fillRect(0,e,64,1);r.fillStyle="#efe6d2",r.beginPath(),r.arc(10,12,8,0,Math.PI*2),r.fill(),r.fillStyle="#6b4e2c",r.fillRect(8,10,4,4)})}function Zv(){return os((r,t)=>{r.fillStyle="#a4552e",r.fillRect(0,0,64,64);for(let e=0;e<520;e++)r.fillStyle=t()>.5?"#b56a3c":"#8f4526",r.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[6,18,30,42])r.fillStyle="#6e3018",r.fillRect(0,e,64,2),r.fillStyle="#c47a4a",r.fillRect(0,e+2,64,1);r.fillStyle="#8a3f20",r.fillRect(30,0,4,50);for(let e=0;e<40;e++)r.fillStyle="#b56a3c",r.fillRect(30+(t()*4|0),t()*50|0,1,1);for(let e=52;e<64;e++)r.fillStyle=e>=56?"#e3cfa8":"#c9ae83",r.fillRect(0,e,64,1)})}function Jv(){return os((r,t)=>{r.fillStyle="#c2a266",r.fillRect(0,0,64,64);for(let e=0;e<620;e++)r.fillStyle=t()>.5?"#d3b77e":"#ab8a52",r.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[5,17,29,41]){r.fillStyle="#7d5f36",r.fillRect(0,e,64,3),r.fillStyle="#96744499";for(let n=0;n<64;n+=4)r.fillRect(n,e+3,2,1)}for(let e=54;e<64;e++)r.fillStyle=e>=58?"#e6d6ac":"#d2bf94",r.fillRect(0,e,64,1)})}function Qv(){return os((r,t)=>{r.fillStyle="#574a41",r.fillRect(0,0,64,64);for(let e=0;e<640;e++)r.fillStyle=t()>.5?"#6b5c50":"#463b34",r.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<70;e++)r.fillStyle="#382f28",r.fillRect(t()*64|0,t()*50|0,2,4);for(let e=0;e<6;e++)r.fillStyle=e>=3?"#cfc4ae":"#bcae92",r.fillRect(0,e,64,1)})}function t_(){return os((r,t)=>{r.fillStyle="#77744f",r.fillRect(0,0,64,64);for(let e=0;e<520;e++)r.fillStyle=t()>.5?"#86825c":"#65613f",r.fillRect(t()*64|0,t()*64|0,1,1);r.fillStyle="#4c4930";for(const e of[10,31,52])r.fillRect(e,0,2,64);for(const e of[12,33,54])r.fillRect(0,e,64,2);for(const e of[16,37])for(const n of[3,22,43])r.fillStyle="#8f8b63",r.fillRect(e,n,11,7)})}function e_(){return os((r,t)=>{r.fillStyle="#d8bd8e",r.fillRect(0,0,64,64);for(let e=0;e<700;e++)r.fillStyle=t()>.5?"#e6cfa6":"#c2a271",r.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<8;e++)r.fillStyle=e>=4?"#b18f5c":"#a68351",r.fillRect(0,e,64,1);for(let e=54;e<64;e++)r.fillStyle=e>=58?"#f0e4c8":"#e3d3ac",r.fillRect(0,e,64,1)})}function n_(){return os((r,t)=>{r.fillStyle="#27474a",r.fillRect(0,0,64,64);for(let e=0;e<520;e++)r.fillStyle=t()>.5?"#2e5254":"#1f3b3e",r.fillRect(t()*64|0,t()*64|0,1,2);r.fillStyle="#5c2e46",r.fillRect(0,0,64,8),r.fillRect(0,46,64,8),r.fillStyle="#b99a5e",r.fillRect(0,8,64,1),r.fillRect(0,45,64,1);for(let e=0;e<34;e++)r.fillStyle="#6f4a5c",r.fillRect(t()*64|0,16+(t()*26|0),2,2)})}let Ka=null,ja=null,Za=null,Ja=null,Qa=null,tl=null,el=null,nl=null;function i_(){return Ka||(Ka={body:new ie({map:Kv()}),ridge:new ie({color:7295536}),eye:new ie({color:1445898})}),Ka}function s_(){return ja||(ja={fur:new ie({map:jv()}),pale:new ie({color:15260868}),dark:new ie({color:6045731}),pink:new ie({color:14196896})}),ja}function r_(){return Za||(Za={shell:new ie({map:Zv()}),claw:new ie({color:8272414}),stinger:new ie({color:5579793}),eye:new ie({color:1445898})}),Za}function o_(){return Ja||(Ja={hide:new ie({map:Jv()}),ridge:new ie({color:8216374}),eye:new ie({color:1445898})}),Ja}function a_(){return Qa||(Qa={plumage:new ie({map:Qv()}),skin:new ie({color:13077884}),feather:new ie({color:6245427}),beak:new ie({color:3486778}),eye:new ie({color:1445898})}),Qa}function l_(){return tl||(tl={shell:new ie({map:t_()}),skin:new ie({color:9669214}),thorn:new ie({color:5722426}),beak:new ie({color:11575918}),eye:new ie({color:1445898})}),tl}function c_(){return el||(el={fur:new ie({map:e_()}),pale:new ie({color:15721158}),dark:new ie({color:7032364}),pink:new ie({color:14196896})}),el}function h_(){return nl||(nl={robe:new ie({map:n_()}),sash:new ie({color:10246707}),skin:new ie({color:13079398}),scarf:new ie({color:14207920}),pouch:new ie({color:7228204}),coin:new ie({color:13216079}),eye:new ie({color:1445898})}),nl}function ct(r,t,e,n,s,o,i){const l=new Ze($v,n);return l.scale.set(r,t,e),l.position.set(s,o,i),l}function d_(){const r=i_(),t=new se,e=[],n=[],s=[.36,.13,-.1,-.33,-.54,-.72],o=[.26,.27,.26,.23,.18,.12],i=[.22,.23,.22,.2,.16,.11],l=.24;for(let d=0;d<s.length;d++){const f=Math.sin(d*.8)*.05,m=ct(o[d],i[d],l,r.body,f,i[d]/2+.005,s[d]);e.push({mesh:m,bx:f,w:o[d],h:i[d],d:l}),n.push({mesh:ct(o[d]*.3,.02,l*.92,r.ridge,f,i[d]+.008,s[d]),w:o[d]}),t.add(m,n[d].mesh)}const h=new se;h.position.set(Math.sin(0)*.05,.095+.005,.6);const a=ct(.27,.19,.27,r.body,0,.095,0);return h.add(a),h.add(ct(.035,.035,.03,r.eye,-.115,.14,.11)),h.add(ct(.035,.035,.03,r.eye,.115,.14,.11)),t.add(h),{group:t,animate:(d,f)=>{const m=Math.max(0,Math.min(1,f)),x=.015+.075*m,y=d*(3.2+2.6*m);for(let v=0;v<e.length;v++){const _=e[v],T=Math.sin(y-v*.85)*x;_.mesh.position.x=_.bx+T,_.mesh.rotation.y=-T*1.4;const w=1+Math.sin(d*1.9)*.03*(1-m*.6);_.mesh.scale.set(_.w*w,_.h,_.d);const S=n[v];S.mesh.position.x=_.mesh.position.x,S.mesh.rotation.y=_.mesh.rotation.y,S.mesh.scale.x=S.w*.3*w}h.position.x=Math.sin(y+.85)*x*.5,h.rotation.y=Math.sin(d*(2.2+2.4*m))*(.06+.14*m)}}}function u_(){const r=s_(),t=new se,e=new se;t.add(e);const n=ct(.22,.26,.34,r.fur,0,.26,-.02);e.add(n);const s=new se;s.position.set(0,.31,.19),s.add(ct(.15,.14,.15,r.fur,0,0,.05)),s.add(ct(.045,.035,.04,r.pink,0,-.02,.13)),s.add(ct(.028,.028,.02,r.dark,-.062,.03,.1)),s.add(ct(.028,.028,.02,r.dark,.062,.03,.1)),e.add(s);const o=ct(.05,.12,.025,r.fur,-.075,.41,.16),i=ct(.05,.12,.025,r.fur,.075,.41,.16);o.rotation.z=.15,i.rotation.z=-.15,e.add(o,i);const l=ct(.09,.14,.11,r.fur,-.12,.14,-.06),h=ct(.09,.14,.11,r.fur,.12,.14,-.06),a=ct(.07,.05,.22,r.pale,-.13,.028,.02),c=ct(.07,.05,.22,r.pale,.13,.028,.02);e.add(l,h,a,c),e.add(ct(.035,.035,.07,r.pale,-.08,.11,.15)),e.add(ct(.035,.035,.07,r.pale,.08,.11,.15));const d=new se;return d.position.set(0,.16,-.19),d.add(ct(.04,.04,.24,r.fur,0,0,-.12)),d.add(ct(.032,.032,.22,r.fur,0,-.045,-.34)),d.add(ct(.07,.055,.11,r.dark,0,-.075,-.5)),e.add(d),{group:t,animate:(m,x)=>{const y=Math.max(0,Math.min(1,x)),v=Math.abs(Math.sin(m*(2.6+2.4*y)));e.position.y=v*.13*y+Math.sin(m*1.7)*.004,n.scale.y=.26*(1+Math.sin(m*1.9)*.03*(1-y)),a.rotation.x=c.rotation.x=-.55*v*y,l.rotation.x=h.rotation.x=-.35*v*y,d.rotation.y=Math.sin(m*(1.8+3.4*y))*(.1+.3*y),d.rotation.x=-.12-.18*y+Math.sin(m*(2.6+2.4*y))*.06*y;const _=Math.max(0,Math.sin(m*6.3))**8*(1-y);o.rotation.z=.15+_*.25,i.rotation.z=-.15-Math.max(0,Math.sin(m*6.3+2.1))**8*(1-y)*.25,s.rotation.x=-.1*v*y+Math.sin(m*1.3)*.03*(1-y)}}}const f_=new jo(1,14,10);function Rs(r,t,e,n,s,o,i){const l=new Ze(f_,n);return l.scale.set(r,t,e),l.position.set(s,o,i),l}function p_(){const r=r_(),t=new se,e=new se;t.add(e);const n=.09,s=ct(.46,.14,.34,r.shell,0,n+.07,.02);e.add(s);const o=[],i=[-.26,-.45,-.62],l=[.4,.34,.26],h=[.13,.12,.1];for(let w=0;w<i.length;w++){const S=ct(l[w],h[w],.2,r.shell,0,n+h[w]/2,i[w]);o.push({mesh:S,bx:0,w:l[w],h:h[w],d:.2}),e.add(S)}const a=new se;a.position.set(0,n+.045,.25),a.add(ct(.26,.09,.13,r.shell,0,0,0)),a.add(ct(.03,.03,.02,r.eye,-.08,.05,.05)),a.add(ct(.03,.03,.02,r.eye,.08,.05,.05)),e.add(a);const c=[],d=[];for(const w of[-1,1]){const S=new se;S.position.set(w*.24,n+.04,.14),S.rotation.y=w*.5,S.add(ct(.075,.055,.2,r.shell,0,0,.1)),S.add(ct(.07,.05,.1,r.claw,0,0,.24));const b=ct(.025,.022,.13,r.claw,0,.026,.33),I=ct(.025,.022,.13,r.claw,0,-.026,.33);S.add(b,I),c.push({up:b,dn:I}),d.push(S),e.add(S)}const f=[];for(const w of[-1,1])for(let S=0;S<4;S++){const b=ct(.03,.11,.03,r.shell,w*.3,n*.5,.12-S*.14);b.rotation.z=-w*.55,f.push(b),e.add(b)}const m=new se;m.position.set(0,n+.1,-.7),m.rotation.x=.5,m.add(ct(.16,.16,.22,r.shell,0,0,-.11));const x=new se;x.position.set(0,.04,-.22),x.rotation.x=.7,x.add(ct(.13,.13,.18,r.shell,0,0,-.09));const y=new se;y.position.set(0,.03,-.18),y.rotation.x=.8,y.add(ct(.1,.1,.15,r.shell,0,0,-.075));const v=Rs(.22,.2,.24,r.stinger,0,.06,-.22),_=ct(.035,.035,.13,r.stinger,0,.16,-.3);return _.rotation.x=.5,y.add(v,_),x.add(y),m.add(x),e.add(m),{group:t,animate:(w,S)=>{const b=Math.max(0,Math.min(1,S));e.position.y=Math.abs(Math.sin(w*(5.5+5*b)))*.012*b;const I=w*(6+6*b);for(let u=0;u<f.length;u++){const g=u%4,M=u<4?0:Math.PI;f[u].rotation.x=Math.sin(I+g*1.7+M)*.5*b}const R=1+Math.sin(w*1.6)*.03*(1-b*.5);for(const u of o)u.mesh.scale.set(u.w*R,u.h,u.d);for(let u=0;u<2;u++){const g=d[u],M=c[u];g.rotation.z=Math.sin(I+u*Math.PI)*.25*b;const C=.06+Math.abs(Math.sin(w*(1.4+1.6*b)+u*1.3))*(.08+.14*b);M.up.rotation.x=-C,M.dn.rotation.x=C}const p=.06+.14*b;m.rotation.y=Math.sin(w*(1.1+1.4*b))*p,y.rotation.x=.8+Math.sin(w*1.7)*.08,a.rotation.y=Math.sin(w*1.5)*.05*(1-b*.5)}}}function m_(){const r=o_(),t=new se,e=[],n=[],s=[-.95,-.45,.1,.62],o=[.34,.4,.44,.42],i=[.3,.37,.42,.4],l=[.4,.45,.48,.45];for(let c=0;c<s.length;c++){const d=i[c]+.01,f=Rs(o[c]*2,i[c]*2,l[c]*2,r.hide,0,d,s[c]);e.push({mesh:f,bx:0,w:o[c]*2,h:i[c]*2,d:l[c]*2}),n.push({mesh:ct(o[c],.06,l[c]*.8,r.ridge,0,d+i[c]-.04,s[c]),w:o[c]}),t.add(f,n[c].mesh)}const h=new se;return h.position.set(0,.36,1.15),h.add(Rs(.72,.68,.76,r.hide,0,0,0)),h.add(ct(.05,.05,.04,r.eye,-.19,.12,.26)),h.add(ct(.05,.05,.04,r.eye,.19,.12,.26)),t.add(h),{group:t,animate:(c,d)=>{const f=Math.max(0,Math.min(1,d)),m=.02+.11*f,x=c*(1.5+1.5*f);for(let y=0;y<e.length;y++){const v=e[y],_=Math.sin(x-y*.8)*m;v.mesh.position.x=v.bx+_,v.mesh.rotation.y=-_*1.1;const T=1+Math.sin(c*1.1-y*.6)*.03;v.mesh.scale.set(v.w*T,v.h,v.d*T);const w=n[y];w.mesh.position.x=v.mesh.position.x,w.mesh.rotation.y=v.mesh.rotation.y,w.mesh.scale.x=w.w*T}h.position.x=Math.sin(x+.8)*m*.7,h.rotation.y=Math.sin(c*(1.2+1.4*f))*(.07+.13*f)}}}function g_(){const r=a_(),t=new se,e=new se;t.add(e);const n=Rs(.32,.34,.6,r.plumage,0,.66,-.08);n.rotation.x=.06,e.add(n);for(const c of[-1,0,1]){const d=ct(.1,.03,.36,r.feather,c*.08,.62,-.62);d.rotation.y=c*.32,e.add(d)}const s=new se;s.position.set(0,.78,.34),s.rotation.x=.18,s.add(ct(.11,.3,.11,r.skin,0,.15,0)),s.add(ct(.22,.07,.22,r.plumage,0,0,-.01));const o=new se;o.position.set(0,.32,.01),o.add(Rs(.13,.12,.15,r.skin,0,0,.02)),o.add(ct(.08,.07,.12,r.beak,0,-.01,.12));const i=ct(.05,.06,.05,r.beak,0,-.055,.175);i.rotation.x=.6,o.add(i),o.add(ct(.025,.025,.02,r.eye,-.06,.03,.08)),o.add(ct(.025,.025,.02,r.eye,.06,.03,.08)),s.add(o),e.add(s);const l=[];for(const c of[-1,1]){const d=new se;d.position.set(c*.16,.72,-.02),d.add(ct(.55,.05,.46,r.plumage,c*.28,0,.01));const f=ct(.5,.04,.36,r.feather,c*.75,0,-.03);f.rotation.z=c*.1,d.add(f),l.push(d),e.add(d)}const h=[];for(const c of[-1,1]){const d=new se;d.position.set(c*.1,.5,.02),d.add(ct(.05,.34,.05,r.skin,0,-.17,0)),d.add(ct(.07,.03,.14,r.beak,0,-.35,.05)),h.push(d),e.add(d)}return{group:t,animate:(c,d)=>{const f=Math.max(0,Math.min(1,d));for(let m=0;m<2;m++){const x=m===0?-1:1,y=Math.sin(c*(2.2+2.6*f)+m*.5),v=.14-.5*f;l[m].rotation.z=x*(v+y*(.06+.42*f))}e.position.y=Math.sin(c*2.2)*.015*f,e.rotation.x=.04*Math.sin(c*2.2+1.2)*f,o.rotation.x=-.1+.12*Math.sin(c*.9);for(const m of h)m.rotation.x=-.5*f+Math.sin(c*3.4+.7)*.08*f}}}function v_(){const r=l_(),t=new se,e=new se;t.add(e);const n=.14;e.add(Rs(1.05,.75,1.15,r.shell,0,n+.31,-.02));for(const l of[.9,1.4,1.9,2.4,2.9,Math.PI,3.3,3.8,4.3,4.8,5.3]){const h=ct(.09,.16,.09,r.thorn,Math.sin(l)*.52,n+.44,Math.cos(l)*.57-.02);h.rotation.z=-Math.sin(l)*.45,h.rotation.x=Math.cos(l)*.45,e.add(h)}const s=[];for(const l of[-1,1])for(const h of[.33,-.35]){const a=ct(.16,n+.06,.18,r.skin,l*.32,(n+.06)/2,h);s.push(a),e.add(a)}const o=new se;return o.position.set(0,n+.17,.66),o.add(ct(.2,.17,.18,r.skin,0,0,0)),o.add(ct(.12,.09,.1,r.beak,0,-.03,.13)),o.add(ct(.035,.035,.02,r.eye,-.08,.04,.09)),o.add(ct(.035,.035,.02,r.eye,.08,.04,.09)),e.add(o),e.add(ct(.09,.09,.16,r.skin,0,n+.12,-.66)),{group:t,animate:(l,h)=>{const a=Math.max(0,Math.min(1,h));e.position.y=Math.abs(Math.sin(l*(1.4+1.2*a)))*.008*a;const c=l*(1.6+1.4*a);for(let f=0;f<s.length;f++)s[f].rotation.x=Math.sin(c+f%2*Math.PI+(f<2?0:.6))*.3*a;const d=Math.sin(l*.9);o.position.z=.66+d*.05*(1-a)+.05*a,o.rotation.x=.05*a+d*.03*(1-a)}}}function __(){const r=c_(),t=new se,e=new se;t.add(e),e.add(ct(.2,.2,.36,r.fur,0,.24,-.02));const n=new se;n.position.set(0,.3,.24),n.add(ct(.16,.15,.14,r.fur,0,0,0)),n.add(ct(.07,.06,.13,r.pale,0,-.04,.12)),n.add(ct(.03,.025,.02,r.dark,-.06,.03,.075)),n.add(ct(.03,.025,.02,r.dark,.06,.03,.075)),n.add(ct(.028,.022,.02,r.pink,0,-.03,.185)),e.add(n);const s=ct(.09,.2,.025,r.fur,-.09,.48,.18),o=ct(.09,.2,.025,r.fur,.09,.48,.18),i=ct(.055,.13,.02,r.pink,-.09,.47,.196),l=ct(.055,.13,.02,r.pink,.09,.47,.196);s.rotation.z=.28,o.rotation.z=-.28,e.add(s,o,i,l);const h=[];for(const d of[-1,1])for(const f of[.13,-.15]){const m=ct(.05,.16,.05,r.fur,d*.08,.08,f);h.push(m),e.add(m)}const a=new se;return a.position.set(0,.25,-.2),a.add(ct(.06,.06,.24,r.fur,0,-.02,-.12)),a.add(ct(.09,.09,.12,r.pale,0,-.03,-.3)),e.add(a),{group:t,animate:(d,f)=>{const m=Math.max(0,Math.min(1,f));e.position.y=Math.abs(Math.sin(d*(4+3*m)))*.02*m+Math.sin(d*2.2)*.003;const x=d*(6+4*m);for(let _=0;_<h.length;_++)h[_].rotation.x=Math.sin(x+_%2*Math.PI+(_<2?0:.7))*.55*m;a.rotation.y=Math.sin(d*(2.2+3.2*m))*(.14+.22*m),a.rotation.x=-.1+.25*m+Math.sin(d*(2.6+2.4*m))*.05*m;const y=Math.max(0,Math.sin(d*5.7))**8*(1-m),v=Math.max(0,Math.sin(d*5.7+2.3))**8*(1-m);s.rotation.z=.28+y*.3,o.rotation.z=-.28-v*.3,n.rotation.x=Math.sin(d*1.6)*.04*(1-m)-.06*m}}}function x_(){const r=h_(),t=new se,e=new se;t.add(e),e.add(ct(.62,1.42,.42,r.robe,0,.71,0)),e.add(ct(.72,.18,.5,r.robe,0,.09,0)),e.add(ct(.66,.14,.46,r.sash,0,.86,0));for(const o of[-1,1])e.add(ct(.14,.8,.16,r.robe,o*.38,.8,.02)),e.add(ct(.1,.1,.1,r.skin,o*.16,.7,.18));e.add(Rs(.2,.22,.16,r.pouch,.28,.82,.24)),e.add(ct(.06,.05,.05,r.coin,.28,.94,.24));const n=new se;return n.position.set(0,1.56,0),n.add(ct(.26,.26,.24,r.skin,0,0,0)),n.add(ct(.3,.1,.28,r.scarf,0,.15,0)),n.add(ct(.3,.09,.3,r.scarf,0,.21,-.05)),n.add(ct(.3,.1,.3,r.scarf,0,-.16,-.02)),n.add(ct(.04,.04,.03,r.eye,-.07,.02,.12)),n.add(ct(.04,.04,.03,r.eye,.07,.02,.12)),e.add(n),{group:t,animate:(o,i)=>{const l=i?Math.sin(o*5):0;e.rotation.z=Math.sin(o*.6)*.01+l*.02,e.position.y=Math.abs(l)*.015,n.position.y=1.56+Math.sin(o*.9)*.012+Math.abs(l)*.008,n.rotation.y=Math.sin(o*.35)*.08+(i?l*.05:0)}}}const y_=new pi({color:13121584});function Ki(r){const t=[];r.group.traverse(n=>{n.isMesh&&t.push(n)});const e=t.map(n=>n.material);return r.setFlash=n=>t.forEach((s,o)=>{s.material=n?y_:e[o]}),r}function M_(r){switch(r){case"snake":return Ki(d_());case"rat":return Ki(u_());case"scorpion":return Ki(p_());case"wurm":return Ki(m_());case"trader":return Ki(x_());case"vulture":return Ki(g_());case"tortoise":return Ki(v_());case"fennec":return Ki(__())}}const il=[{want:[{itemId:"rock",count:6}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"sand",count:8}],give:[{itemId:"glass",count:2}]},{want:[{itemId:"cactus",count:3}],give:[{itemId:"canister_empty",count:1}]},{want:[{itemId:"prickly_pear",count:5}],give:[{itemId:"canister_full",count:1}]},{want:[{itemId:"snake_skin",count:2}],give:[{itemId:"coolant_cell",count:1}]},{want:[{itemId:"wurm_hide",count:1}],give:[{itemId:"cobaltrod",count:2}]},{want:[{itemId:"chitin",count:4}],give:[{itemId:"catalyst",count:1}]},{want:[{itemId:"metal",count:4}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"fennec_pelt",count:2}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"tortoise_shell",count:1}],give:[{itemId:"canister_full",count:2}]},{want:[{itemId:"deadwood",count:5}],give:[{itemId:"adobe",count:3}]},{want:[{itemId:"rat_raw",count:4}],give:[{itemId:"prickly_pear",count:3}]},{want:[{itemId:"stinger",count:1}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"alabaster",count:4}],give:[{itemId:"glass",count:2}]}];function b_(r,t,e,n){const s=[],o=new Set;for(let i=0;i<5;i++){let l=Math.floor(gt(t+i*7,e-i*13,r+n*101+317)*il.length);for(;o.has(l);)l=(l+1)%il.length;o.add(l),s.push(il[l])}return s}const ic=[{out:"bench",count:1,needs:{deadwood:4},station:null},{out:"armory",count:1,needs:{deadwood:4,metal:2},station:"bench"},{out:"campfire",count:1,needs:{rock:6,deadwood:2},station:null},{out:"wood_pickaxe",count:1,needs:{deadwood:3},station:null},{out:"wood_shovel",count:1,needs:{deadwood:3},station:null},{out:"wood_axe",count:1,needs:{deadwood:3},station:null},{out:"alloy_pickaxe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_shovel",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_axe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_disassembler",count:1,needs:{metal:3,copperrod:2,rock:2},station:"bench"},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},station:"bench"},{out:"backpack2",count:1,needs:{deadwood:10,metal:4,snake_skin:2},station:"armory"},{out:"wurmsuit",count:1,needs:{wurm_hide:3,chitin:1},station:"armory"},{out:"tortoise_cuirass",count:1,needs:{tortoise_shell:3,metal:1},station:"armory"},{out:"stinger_blade",count:1,needs:{metal:2,stinger:1,deadwood:1},station:"bench"},{out:"body_regulator",count:1,needs:{metal:4,copperrod:2,cobaltrod:1,catalyst:1},station:"armory"},{out:"coolant_cell",count:1,needs:{salt:2,canister_empty:1,copperrod:1},station:"bench"},{out:"head_lantern",count:1,needs:{metal:1,glass:1,copperrod:1,deadwood:1},station:"bench"},{out:"curved_hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"hull_slope",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"thruster_nozzle",count:1,needs:{cobaltrod:1,copperrod:2,metal:1},station:"bench"},{out:"sword",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"door",count:1,needs:{metal:2,deadwood:2},station:"bench"},{out:"hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},station:"bench"},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},station:"bench"},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},station:"armory"},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},station:"bench"},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},station:"bench"},{out:"chest",count:1,needs:{deadwood:6,metal:1},station:"bench"},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},station:"armory"},{out:"reptile_armor",count:1,needs:{snake_skin:3},station:"armory"},{out:"farmland",count:1,needs:{dirt:1},station:null},{out:"deadwood",count:2,needs:{wood_log:1},station:null},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},station:null},{out:"metal_plating",count:1,needs:{metal:1},station:null},{out:"door_inner",count:1,needs:{metal:1},station:"bench"},{out:"storm_breaker",count:1,needs:{metal:2,glass:1},station:"bench"},{out:"bucket",count:1,needs:{metal:2},station:"bench"},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},station:"bench"},{out:"surveyor_pin",count:4,needs:{metal:1,glass:1},station:"bench"},{out:"tracker",count:1,needs:{metal:2,copperrod:1,glass:1},station:"bench"}],mu=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"metal"},{in:"rat_raw",out:"rat_cooked"},{in:"vulture_raw",out:"vulture_cooked"},{in:"wheat",out:"cooked_wheat"},{in:"iron_ore",out:"metal",n:2},{in:"copper_ore",out:"copperrod",n:2},{in:"cobalt_ore",out:"cobaltrod",n:2}];function sc(r,t){return Object.entries(t.needs).every(([e,n])=>r.has(e,n))}function hd(r,t){if(!sc(r,t))return null;for(const[e,n]of Object.entries(t.needs))r.removeItem(e,n);return r.addItem(t.out,t.count)}const bi=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it right next to a Save Beacon — that wakes the wreck's power.",goal:1},{id:"wings",kind:"thruster",title:"Wings of the Wreck",desc:"The Ship's four wingtip engines are dead. Mine Cobalt Ore in the deep Caves, smelt it at a Campfire, craft a Thruster Nozzle (Cobalt + Copper + Metal), and press E at each Broken Thruster. All four lit lifts the Ship.",goal:4}];function S_(){return{i:0,p:bi.map(()=>0)}}function w_(r){const t=S_();if(!r)return t;t.i=Math.max(0,Math.min(bi.length,r.i|0));for(let e=0;e<t.p.length;e++){const n=bi[e].goal;t.p[e]=Math.max(0,Math.min(n,(r.p&&r.p[e])|0))}return t}function Er(r){return r.i<bi.length?bi[r.i]:null}function E_(r,t,e=1){const n=Er(r);if(!n||n.kind!==t||r.p[r.i]>=n.goal||(r.p[r.i]=Math.min(n.goal,r.p[r.i]+e),r.p[r.i]<n.goal))return null;const s=n;return r.i++,s}const Ac=[{id:"storm",title:"The Sandstorm Rises",hint:"shelter now; a Sandstorm Breaker calms the air",text:"The sky went to work against you: a Sandstorm amplifies the air, drinks your Water, and scours bare skin. It is a regime, not an event — it eases on its own. Answer it at a Crafting Bench: a Sandstorm Breaker (Iron Rods + Glass) calms the air around it and turns the storm aside. Until then, shelter beats stubbornness."},{id:"oasis",title:"First Oasis",hint:"open water — refill your canisters here",text:"Open water on the horizon: an Oasis. Refill your canisters here — the water itself is finite, the walk to it is the price. Oases never run out across the world; they are just far apart."},{id:"town",title:"First Town",hint:"Supply Chests in the shells hold loot",text:"The desert was lived in before you. Towns are adobe shells with Supply Chests — the first chest of a cluster holds the loot. Take what you need; the dwellers are not coming back."},{id:"camp",title:"First Trader Camp",hint:"no coin — barter goods with the Trader",text:"A windmill, a hut, a market stall — and a Trader who never moves. There is no coin here: every deal swaps goods, five per camp per day. Bring shells, pelts and worked metal."},{id:"mouth",title:"First Cave Mouth",hint:"the way down — take a Head Lantern",text:"An arch dug into a hillside: the way down into the Caves. Two or more cells under the terrain the air sits at a constant mild ~22 °C — the refuge, but it is dark. Take a Head Lantern before you commit."},{id:"cave",title:"Deep in the Caves",hint:"mild dark air; ore waits in the walls",text:"Underground the desert's heat and cold cannot reach you — and the walls hold Iron, Copper, Alabaster and, deepest of all, Cobalt. Ore doubled at a Campfire: the dig is the expensive part, not the fire."},{id:"canister",title:"A Buried Canister",hint:"buried sites mark the Map once dug",text:"You dug a Water Canister out of the open desert. Buried sites dot the dunes on recurring spacing — containers, not water. A site marks the Map only once one of its canisters is in your hands."},{id:"wreck2",title:"The Second Wreck",hint:"its Engine Core is your way off-world",text:"Another ship came down out here — and at its heart glows an Engine Core. That is your way off this planet: carry the Core home beside a Save Beacon."},{id:"pin",title:"Surveyor's Pins",hint:'maximise the Map (M) to name a Pin "Base"',text:`A Surveyor's Pin planted with E marks the Map forever — name it from the maximised Map. A Pin named "Base" is the point your Surveyor's Visor beams you back to, through walls.`},{id:"tracker",title:"Hidden Landmark Tracker",hint:"use it (Q) to wake the next unknown place",text:"One use, then it's gone: the Tracker wakes the nearest place you have never found — a Town, camp, cave mouth, oasis or buried canister site — and marks it on your Map. The second wreck repeats nowhere; no Tracker will ever point at it."}],sl=new Map(Ac.map(r=>[r.id,r]));function dd(r,t){const e=new Set;if(!r)return e;for(const n of r)t.has(n)&&e.add(n);return e}const T_=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],Mr=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside. Mind the drop: the first 4 blocks of a fall are free, every one after bites.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:r=>r.setClock(.56),poll:r=>r.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:r=>{r.inv.has("canister_empty")||r.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:r=>r.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:r=>r.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. The wreck keeps its soil where the tank sinks: <b>Dirt</b> lines the water compartment. Dig it out, till it, plant seeds in the furrow. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",guide:{name:"Dirt",x:-3,y:30,z:3},goal:"plant",hold:60,enter:r=>{r.giveOrDrop("seed_wheat",2),r.selectHeld("shovel")}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class A_{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(!0),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&Mr[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=Mr[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===$e&&(t.set(-6,31,0,Ke),t.set(-6,32,0,je),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=Mr.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=Mr[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=Mr.map((n,s)=>s===this.step?"●":s<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(t=!1){if(!this.ended){if(this.ended=!0,t){this.g.skipCine();const e=this.g;e.inv.has("canister_empty")||e.giveOrDrop("canister_empty",1),e.giveOrDrop("deadwood",4),e.giveOrDrop("seed_wheat",2)}this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial()}}}const gu="sotf:index",vu="sotf:settings",_u="sotf:best",ud={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function R_(){try{return{...ud,...JSON.parse(localStorage.getItem(vu)||"{}")}}catch{return{...ud}}}function C_(r){localStorage.setItem(vu,JSON.stringify(r))}function Or(){return Number(localStorage.getItem(_u)||0)}function fd(r){r>Or()&&localStorage.setItem(_u,String(r))}function ia(){try{return JSON.parse(localStorage.getItem(gu)||"[]")}catch{return[]}}function Rc(r){localStorage.setItem(gu,JSON.stringify(r))}function xu(r,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:r||t||"world",seedStr:t,updated:Date.now()},s=ia();return s.unshift(n),Rc(s),n}function I_(r){Rc(ia().filter(t=>t.id!==r)),localStorage.removeItem("sotf:w:"+r)}function yu(r,t){try{localStorage.setItem("sotf:w:"+r.id,JSON.stringify(t));const e=ia(),n=e.find(s=>s.id===r.id);return n&&(n.updated=Date.now(),Rc(e)),!0}catch{return!1}}function Mu(r){try{const t=localStorage.getItem("sotf:w:"+r);return t?JSON.parse(t):null}catch{return null}}function bu(r,t){const e=new Blob([JSON.stringify({meta:r,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${r.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function P_(r){const t=JSON.parse(await r.text());if(!t||t.run?.v!==1&&t.run?.v!==2)throw new Error("Not a Survival of the Fittest world file.");const e=xu(t.meta?.name??"imported",t.run.seedStr);return yu(e,t.run),e}const ne=Me;function Es(r,t){const e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}const li=(r,t,e,n)=>{const[s,o]=pu(n);r.drawImage(fu(),s,o,ne,ne,t,e,ne,ne)},U=(r,t,e,n,s,o)=>{r.fillStyle=o,r.fillRect(t,e,n,s)},de=(r,t,e,n,s,o)=>{r.strokeStyle=o,r.lineWidth=1,r.strokeRect(t+.5,e+.5,n-1,s-1)},Yt=(r,t,e,n,s,o,i=2)=>{r.strokeStyle=o,r.lineWidth=i,r.beginPath(),r.moveTo(t,e),r.lineTo(n,s),r.stroke()},Nt=(r,t,e)=>{r.fillStyle=e,r.beginPath(),r.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)r.lineTo(t[n][0],t[n][1]);r.closePath(),r.fill()};function Su(r,t){return r==="head_lantern"?t?t<=2?"1":"2":"0":r==="body_regulator"?t?t<=1?"1":"2":"0":""}function wu(r,t,e,n,s=""){const[o,i]=Es(t*ne,e*ne),l=(c,d,f)=>{Nt(i,[[3,12],[2,7],[5,3],[10,2],[14,6],[13,12],[8,14]],c),Nt(i,[[5,3],[10,2],[11,6],[6,7]],d),Nt(i,[[3,12],[13,12],[8,14]],f)},h=(c,d,f)=>{i.fillStyle=c;for(const[m,x]of f)i.fillRect(m,x,2,2);i.fillStyle=d;for(const[m,x]of f)i.fillRect(m,x,1,1)};if(r.includes("_")&&(r.endsWith("pickaxe")||r.endsWith("shovel")||r.endsWith("axe")||r.endsWith("disassembler"))){const c=r.replace(/^(wood|stone|metal|alloy)_/,""),d=r.startsWith("alloy_"),f=d?"#7a4a26":"#00000044";return U(i,7,16,2,14,"#6b5238"),U(i,6,14,4,3,"#4a4a52"),c==="pickaxe"?(Yt(i,3,12,13,12,n,2),Yt(i,3,12,3,15,n),Yt(i,13,12,13,15,n),Yt(i,4,9,12,9,"#00000022",1),d&&Yt(i,4,11,12,11,"#e89a62",1)):c==="shovel"?(U(i,5,6,6,7,n),de(i,5,6,6,7,f),Yt(i,6,13,6,13,n),Yt(i,9,13,9,13,n),Yt(i,6,13,7,14,n,1),Yt(i,9,13,8,14,n,1),d&&U(i,6,7,2,4,"#e89a62")):c==="axe"?(U(i,9,7,5,6,n),de(i,9,7,5,6,f),U(i,8,8,1,4,n),d&&U(i,10,8,2,3,"#e89a62")):(U(i,4,7,8,2,n),U(i,4,7,2,5,n),U(i,10,7,2,5,n),U(i,7,11,2,2,"#66e5f0"),U(i,6,12,4,1,"#2f97a6"),d&&(U(i,4,8,1,3,"#e89a62"),U(i,11,8,1,3,"#8a4a26"))),d&&(U(i,6,14,4,1,"#8a5a34"),U(i,6,15,4,1,"#c98a56"),U(i,6,16,4,1,"#5c3d22"),i.fillStyle="#f0c89a",i.fillRect(6,15,1,1),i.fillRect(9,15,1,1)),o}switch(r){case"canister_full":case"canister_empty":{const c=r==="canister_full",d=e*ne;return U(i,6,0,4,3,"#8a98a8"),U(i,7,3,2,2,"#8a98a8"),U(i,4,5,8,d-7,c?"#2f7fd6":"#3a4750"),de(i,4,5,8,d-7,"#dfe6ee"),c?(U(i,5,10,1,d-13,"#5fa3ea"),U(i,4,9,8,1,"#7f2b2b")):(U(i,4,14,8,4,"#c8d2da"),U(i,6,15,4,2,"#3a4750")),o}case"hot_water_pouch":return U(i,6,0,4,3,"#8a98a8"),U(i,7,3,2,2,"#8a98a8"),U(i,4,5,8,25,"#c26a38"),de(i,4,5,8,25,"#ffd9a8"),U(i,5,10,1,17,"#ff9a4f"),U(i,4,12,8,3,"#ff7a30"),U(i,4,16,8,2,"#e05a20"),i.fillStyle="#c8d2da",i.fillRect(4,1,2,1),i.fillRect(7,0,2,1),i.fillRect(11,1,2,1),o;case"snake_skin":{const c=[[5,1],[11,1],[13,6],[12,20],[10,26],[9,31],[8,28],[7,31],[6,26],[4,20],[3,6]];Nt(i,c,"#b3946a"),i.strokeStyle="#7a5f3e",i.lineWidth=1,i.beginPath(),i.moveTo(c[0][0],c[0][1]);for(const[d,f]of c)i.lineTo(d,f);i.closePath(),i.stroke(),U(i,4,3,8,1,"#8a6f4c"),U(i,7,4,2,22,"#cfae84"),i.fillStyle="#8a6f4c";for(let d=6;d<=22;d+=4)for(let f=5+d/4%2;f<=11;f+=3)i.fillRect(f,d,2,1);return i.fillStyle="#6e5636",i.fillRect(8,26,1,5),o}case"sword":return U(i,8,0,1,1,"#eef3f8"),U(i,7,1,3,17,"#c9d2dc"),U(i,8,1,1,17,"#eef3f8"),U(i,4,18,8,2,"#4a4a52"),U(i,7,20,3,9,"#6b5238"),U(i,7,22,3,1,"#4a3926"),U(i,7,25,3,1,"#4a3926"),U(i,6,29,5,2,"#4a4a52"),o;case"voidbreaker":return U(i,7,16,2,14,"#2a1d3a"),U(i,6,14,4,3,"#180f24"),Yt(i,3,12,13,12,"#8a5ad6",2),Yt(i,3,12,3,15,"#8a5ad6"),Yt(i,13,12,13,15,"#8a5ad6"),i.fillStyle="#e8d6ff",i.fillRect(5,9,1,2),i.fillRect(10,10,1,1),i.fillRect(8,11,1,2),i.fillStyle="#00000088",i.fillRect(7,10,2,1),i.fillRect(6,11,1,2),o;case"visor":return U(i,1,6,14,3,"#2e3a45"),U(i,3,4,10,6,"#123c44"),U(i,4,5,8,4,"#66e5f0"),U(i,5,5,2,1,"#d2f8ff"),de(i,3,4,10,6,"#c8d2da"),U(i,1,5,2,1,"#5a6875"),U(i,13,5,2,1,"#5a6875"),o;case"catalyst":return U(i,7,3,2,2,"#8898a8"),i.fillStyle="#c07fe0",i.beginPath(),i.arc(8,10,4,0,Math.PI*2),i.fill(),i.strokeStyle="#7a4a9a",i.lineWidth=1,i.beginPath(),i.arc(8,10,4.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,8,2,1),i.fillRect(7,7,1,1),o;case"iron_ore":return l("#5a5450","#78716c","#423d39"),h("#9e8468","#c4a878",[[5,6],[9,4],[10,9],[6,10]]),o;case"copper_ore":return l("#6a5a52","#8a7466","#4c403a"),h("#b86b42","#e8935e",[[5,6],[9,4],[10,9],[6,10]]),o;case"cobalt_ore":return l("#4e5666","#6a7488","#3a4050"),Nt(i,[[7,4],[9,6],[7,8],[5,6]],"#5c74a8"),Nt(i,[[10,8],[12,10],[10,12],[8,10]],"#5c74a8"),Nt(i,[[7,4],[9,6],[7,6]],"#9ab8e8"),Nt(i,[[10,8],[12,10],[10,10]],"#9ab8e8"),i.fillStyle="#c4dcf4",i.fillRect(7,4,1,1),i.fillRect(10,8,1,1),o;case"alabaster":return l("#cfc8b0","#eae3cd","#a89f88"),U(i,4,7,8,1,"#b4ab92"),U(i,6,10,7,1,"#b4ab92"),U(i,3,12,5,1,"#b4ab92"),i.fillStyle="#f7f2e2",i.fillRect(6,3,2,1),o;case"metal":U(i,6,1,3,14,"#6e747e"),U(i,7,2,1,12,"#b8bec8"),i.fillStyle="#4a4f57";for(const[c,d]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(c,d,1,1);return U(i,5,1,5,1,"#4a4f57"),U(i,5,14,5,1,"#4a4f57"),o;case"copperrod":U(i,6,1,3,14,"#a05a2e"),U(i,7,2,1,12,"#e89a62"),i.fillStyle="#6e3a1c";for(const[c,d]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(c,d,1,1);return U(i,5,1,5,1,"#6e3a1c"),U(i,5,14,5,1,"#6e3a1c"),o;case"cobaltrod":U(i,6,1,3,14,"#4a5a86"),U(i,7,2,1,12,"#8aa8dc"),i.fillStyle="#2e3a5c";for(const[c,d]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(c,d,1,1);return U(i,5,1,5,1,"#2e3a5c"),U(i,5,14,5,1,"#2e3a5c"),o;case"backpack2":{U(i,8,1,3,6,"#5a4229"),U(i,21,1,3,6,"#5a4229"),U(i,3,7,26,22,"#6a4c30"),de(i,3,7,26,22,"#42301e"),U(i,3,7,26,8,"#7d5c3c"),de(i,3,7,26,8,"#42301e"),U(i,9,7,4,22,"#6a4a3a"),U(i,19,7,4,22,"#6a4a3a"),i.fillStyle="#c8a878";for(let c=10;c<=27;c+=3)i.fillRect(9,c,1,1),i.fillRect(12,c,1,1),i.fillRect(19,c,1,1),i.fillRect(22,c,1,1);return U(i,13,17,6,4,"#8a6a4a"),de(i,13,17,6,4,"#2e2018"),U(i,15,18,2,2,"#c8a878"),U(i,5,25,22,4,"#7a5a3a"),de(i,5,25,22,4,"#42301e"),o}case"body_regulator":{const c=s==="0"?0:s==="1"?1:3;U(i,4,2,3,28,"#4c3822"),U(i,25,2,3,28,"#4c3822"),i.strokeStyle="#3a4750",i.lineWidth=2,i.beginPath(),i.moveTo(10,12),i.quadraticCurveTo(4,10,5,3),i.stroke(),i.beginPath(),i.moveTo(22,12),i.quadraticCurveTo(28,10,27,3),i.stroke(),U(i,8,8,16,17,"#8a98a8"),de(i,8,8,16,17,"#3c4650"),U(i,8,8,16,3,"#aab4c0"),U(i,8,22,16,3,"#6a7680");for(let d=0;d<3;d++)U(i,10,13+d*3,12,2,d<c?"#2e6a78":"#313d46");i.fillStyle="#5fb8cc";for(const[d,f]of[[11,13],[15,16],[19,19]])f<=13+(c-1)*3+1&&i.fillRect(d,f,2,2);return c&&(i.fillStyle="#d2f8ff",i.fillRect(9,12,1,1),i.fillRect(22,15,1,1),c>1&&(i.fillRect(9,21,1,1),i.fillRect(21,12,1,1))),o}case"coolant_cell":return i.fillStyle="#7fd4e8",i.globalAlpha=.22,i.beginPath(),i.arc(8,9,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,U(i,6,1,4,2,"#8a98a8"),U(i,7,3,2,1,"#8a98a8"),U(i,5,4,6,10,"#3a8ea8"),de(i,5,4,6,10,"#bfeef8"),U(i,6,5,1,8,"#7fd4e8"),U(i,5,7,6,1,"#5fc0d8"),U(i,5,11,6,1,"#2e6e84"),i.fillStyle="#e8fbff",i.fillRect(9,6,1,1),i.fillRect(7,9,1,1),i.fillRect(10,12,1,1),i.fillRect(6,13,1,1),o;case"head_lantern":return s!=="0"&&(i.fillStyle="#ffd76a",i.globalAlpha=s==="1"?.1:.25,i.beginPath(),i.arc(8,9,6,0,Math.PI*2),i.fill(),i.globalAlpha=1),U(i,1,7,14,3,"#4a4a52"),U(i,1,7,14,1,"#5f6670"),U(i,1,9,14,1,"#33373d"),U(i,7,4,2,2,"#5a6875"),U(i,5,6,6,8,"#2e3a45"),de(i,5,6,6,8,"#8a98a8"),U(i,6,7,4,5,s==="0"?"#464e57":s==="1"?"#b98a3a":"#ffd76a"),(s==="2"||s==="")&&U(i,7,8,2,2,"#fff3c0"),U(i,6,11,4,1,"#e8a83c"),U(i,5,13,6,1,"#232830"),o;case"reptile_armor":{U(i,6,4,20,24,"#6f573c"),de(i,6,4,20,24,"#3f3222"),U(i,2,6,5,10,"#8a6f4d"),U(i,25,6,5,10,"#8a6f4d");for(let c=0;c<5;c++){const d=7+c*4;for(let f=7;f<=21;f+=5)Nt(i,[[f,d],[f+5,d],[f+5,d+4],[f+2,d+6],[f,d+4]],"#8a6f4d"),Nt(i,[[f,d],[f+5,d],[f+5,d+2],[f,d+2]],"#a08560"),de(i,f,d,5,4,"#3f3222")}return U(i,13,2,6,4,"#8a6f4d"),de(i,13,2,6,4,"#3f3222"),i.fillStyle="#d8cfc0",i.fillRect(15,12,2,2),i.fillRect(11,18,1,1),i.fillRect(19,20,1,1),o}case"chitin":return Nt(i,[[8,3],[13,6],[14,11],[11,14],[5,14],[2,11],[3,6]],"#6a4a3a"),Nt(i,[[8,3],[13,6],[8,7],[3,6]],"#8f6a50"),Yt(i,8,7,5,13,"#4c352a",1),Yt(i,8,7,8,14,"#4c352a",1),Yt(i,8,7,11,13,"#4c352a",1),U(i,4,13,8,1,"#3c2a20"),i.fillStyle="#b08860",i.fillRect(7,4,2,1),o;case"stinger":return i.strokeStyle="#8a7a5c",i.lineWidth=5,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#d8cbb0",i.lineWidth=3,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#b0a284",i.lineWidth=1,i.beginPath(),i.moveTo(5,13),i.quadraticCurveTo(5.5,7,8,4),i.stroke(),Nt(i,[[9,0],[14,1],[11,6]],"#a84a3a"),Nt(i,[[9,0],[11,.5],[10,3]],"#e0705a"),Yt(i,14,1,11,6,"#6e2f24",1),o;case"wurm_hide":{U(i,2,2,12,15,"#7a5c40"),de(i,2,2,12,15,"#4c3822");for(let c=3;c<14;c+=3)U(i,3,c,10,2,"#8f6e4c"),U(i,3,c+2,10,1,"#5a4228");return U(i,2,17,12,2,"#6a4c30"),i.fillStyle="#8a6a48",i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.fill(),i.strokeStyle="#4c3822",i.lineWidth=1,i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.stroke(),i.strokeStyle="#5a4228",i.beginPath(),i.arc(8,24,3,0,Math.PI*2),i.stroke(),i.fillStyle="#6a4c30",i.fillRect(7,23,2,2),o}case"wurmsuit":{U(i,9,8,14,18,"#7a5c40"),de(i,9,8,14,18,"#42301e");for(let c=10;c<=18;c+=4)U(i,10,c,12,3,"#8a6a48"),U(i,10,c+3,12,1,"#4c3822");U(i,11,5,10,3,"#5f4830"),de(i,11,5,10,3,"#42301e"),Nt(i,[[3,9],[10,6],[12,13],[5,15]],"#6a4a3a"),Nt(i,[[29,9],[22,6],[20,13],[27,15]],"#6a4a3a"),Nt(i,[[4,9],[10,6],[11,9],[5,11]],"#8f6a50"),Nt(i,[[28,9],[22,6],[21,9],[27,11]],"#8f6a50"),Yt(i,6,8,7,14,"#4c352a",1),Yt(i,26,8,25,14,"#4c352a",1),i.fillStyle="#c8a878";for(let c=9;c<=14;c+=3)i.fillRect(4,c,1,1),i.fillRect(9,c,1,1),i.fillRect(22,c,1,1),i.fillRect(27,c,1,1);return U(i,9,24,14,3,"#4c3822"),U(i,13,24,6,3,"#6a4a3a"),de(i,13,24,6,3,"#2e2018"),i.fillStyle="#c8a878",i.fillRect(15,25,2,1),o}case"vulture_raw":return Nt(i,[[3,9],[4,5],[8,3],[12,4],[13,8],[11,12],[6,12]],"#8a332c"),Nt(i,[[4,5],[8,3],[12,4],[10,7],[5,7]],"#a8453a"),Nt(i,[[6,12],[11,12],[9,13],[6,13]],"#571f1b"),U(i,12,6,3,3,"#d8cbb0"),U(i,14,5,1,1,"#d8cbb0"),U(i,14,9,1,1,"#d8cbb0"),U(i,13,6,1,3,"#8a7a5c"),U(i,12,6,2,1,"#f0e6d0"),i.fillStyle="#c8705e",i.fillRect(5,7,3,1),i.fillRect(9,6,2,1),i.fillRect(6,10,4,1),i.fillStyle="#e8a08a",i.fillRect(6,7,1,1),i.fillRect(8,10,1,1),o;case"vulture_cooked":return i.fillStyle="#c8d2da",i.fillRect(5,2,1,2),i.fillRect(8,1,1,2),i.fillRect(11,2,1,2),i.fillStyle="#eef3f8",i.fillRect(5,1,1,1),i.fillRect(8,0,1,1),i.fillRect(11,1,1,1),Nt(i,[[3,10],[4,6],[8,4],[12,5],[13,9],[11,13],[6,13]],"#9a6132"),Nt(i,[[4,6],[8,4],[12,5],[10,8],[5,8]],"#c08348"),Nt(i,[[6,13],[11,13],[9,14],[6,14]],"#5c3a1c"),Yt(i,6,6,8,12,"#4a2c14",1),Yt(i,9,5,11,11,"#4a2c14",1),i.fillStyle="#d8a05e",i.fillRect(6,5,3,1),i.fillRect(10,6,2,1),i.fillStyle="#f0c89a",i.fillRect(7,5,1,1),o;case"tortoise_shell":{Nt(i,[[3,22],[5,12],[11,6],[17,4],[24,7],[29,14],[30,22]],"#5f5a4e"),Nt(i,[[11,6],[17,4],[24,7],[20,13],[12,12]],"#7d7768"),Nt(i,[[3,22],[30,22],[29,25],[4,25]],"#46423a"),i.strokeStyle="#46423a",i.lineWidth=1,i.beginPath(),i.moveTo(17,5),i.lineTo(9,22),i.moveTo(17,5),i.lineTo(17,23),i.moveTo(17,5),i.lineTo(25,22),i.stroke(),i.beginPath(),i.moveTo(6,15),i.lineTo(28,15),i.stroke(),i.fillStyle="#6e6858",i.fillRect(14,8,5,1),i.fillRect(8,17,6,1),i.fillRect(20,18,5,1),i.fillStyle="#8a8474",i.fillRect(15,6,2,1),i.fillStyle="#cfc7b2";for(const[c,d,f,m]of[[3,24,4,5],[9,25,4,6],[15,25,4,5],[21,24,4,6],[26,22,4,5]])Nt(i,[[c,d],[c+f,d],[c+f/2,d+m]],"#cfc7b2");Nt(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),Nt(i,[[26,15],[29,15],[31,18]],"#cfc7b2"),i.fillStyle="#8f8874";for(const[c,d,f]of[[3,24,4],[9,25,4],[15,25,4],[21,24,4]])i.fillRect(c,d,f,1);return o}case"fennec_pelt":{Nt(i,[[6,11],[2,1],[9,7]],"#c99a62"),Nt(i,[[6,10],[3,3],[8,7]],"#8f6a44"),Nt(i,[[10,11],[14,1],[7,7]],"#c99a62"),Nt(i,[[10,10],[13,3],[8,7]],"#8f6a44"),i.fillStyle="#ead4b0",i.fillRect(2,3,1,3),i.fillRect(13,3,1,3),i.fillStyle="#d8b488",i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8a6540",i.lineWidth=1,i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.stroke(),i.fillStyle="#ead4b0",i.beginPath(),i.ellipse(8,14,2.5,2,0,0,Math.PI*2),i.fill(),i.fillStyle="#3a2a1c",i.fillRect(6,11,1,1),i.fillRect(9,11,1,1),i.fillStyle="#6a4a30",i.fillRect(7,14,2,1),U(i,4,15,8,12,"#d8b488"),de(i,4,15,8,12,"#8a6540"),U(i,5,16,6,9,"#e8d0a8"),U(i,2,16,2,3,"#c99a62"),U(i,12,16,2,3,"#c99a62"),U(i,2,21,2,3,"#c99a62"),U(i,12,21,2,3,"#c99a62"),i.fillStyle="#8f6a44";for(let c=17;c<=25;c+=2)i.fillRect(4,c,1,1),i.fillRect(11,c,1,1);return U(i,6,27,4,3,"#c99a62"),U(i,6,30,4,2,"#ead4b0"),de(i,6,27,4,5,"#8a6540"),o}case"tortoise_cuirass":{U(i,6,6,20,23,"#3b372f"),de(i,6,6,20,23,"#2a2722");const c=(d,f,m)=>{U(i,d,f,m,6,"#5f5a4e"),U(i,d,f,m,2,"#7d7768"),U(i,d,f+5,m,1,"#3b372f"),i.fillStyle="#48443a",i.fillRect(d+Math.round(m/3),f+1,1,4),i.fillRect(d+Math.round(2*m/3),f+1,1,4)};c(8,8,16),c(6,14,20),c(7,20,18),U(i,10,4,12,4,"#8a98a8"),U(i,10,4,12,1,"#aab4c0"),de(i,10,4,12,4,"#3c4650"),U(i,5,13,1,14,"#8a98a8"),U(i,26,13,1,14,"#8a98a8"),U(i,6,26,20,4,"#8a98a8"),U(i,6,26,20,1,"#aab4c0"),U(i,6,29,20,1,"#5c6670"),de(i,6,26,20,4,"#3c4650"),U(i,14,26,4,4,"#c98a56"),U(i,14,26,4,1,"#f0c89a"),de(i,14,26,4,4,"#5c3d22"),i.fillStyle="#cfc7b2",Nt(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),Nt(i,[[26,16],[29,16],[31,19]],"#cfc7b2"),Nt(i,[[9,29],[12,29],[10,31]],"#cfc7b2"),Nt(i,[[19,29],[22,29],[21,31]],"#cfc7b2");for(const[d,f]of[[7,15],[23,15],[7,21],[23,21],[9,27],[21,27],[11,5],[18,5]])U(i,d,f,2,2,"#5c3d22"),U(i,d,f,2,1,"#c98a56"),i.fillStyle="#f0c89a",i.fillRect(d,f,1,1);return o}case"stinger_blade":return Nt(i,[[8,0],[10,3],[6,3]],"#a84a3a"),Nt(i,[[8,0],[9,2],[7,2]],"#e0705a"),Nt(i,[[6,3],[10,3],[11,6],[5,6]],"#d8cbb0"),Yt(i,5,6,11,6,"#8a7a5c",1),U(i,6,6,4,15,"#c9d2dc"),U(i,7,7,1,14,"#eef3f8"),U(i,9,7,1,14,"#8a949e"),U(i,3,21,10,2,"#4a4a52"),U(i,3,21,10,1,"#6a7280"),U(i,6,23,4,6,"#6b5238"),U(i,6,24,4,1,"#4a3926"),U(i,6,27,4,1,"#4a3926"),U(i,5,29,6,2,"#6a4a3a"),de(i,5,29,6,2,"#3c2a20"),o;case"curved_hull":{const c="#7d8390",d="#4e545e",f="#aab2bc";return U(i,6,2,8,2,c),U(i,3,4,12,2,c),U(i,2,6,13,8,c),i.clearRect(13,13,2,1),i.clearRect(14,12,1,1),U(i,6,2,8,1,f),U(i,3,4,1,2,f),U(i,2,6,1,8,f),U(i,2,13,11,1,d),U(i,14,6,1,6,d),U(i,12,13,1,1,d),U(i,3,9,12,1,"#6b7280"),i.fillStyle=d,i.fillRect(11,3,1,1),i.fillRect(12,7,1,1),i.fillRect(5,11,1,1),i.fillStyle=f,i.fillRect(11,4,1,1),i.fillRect(12,8,1,1),i.fillRect(5,12,1,1),o}case"hull_slope":return Nt(i,[[2,14],[2,4],[11,2],[14,8],[14,14]],"#767d88"),Nt(i,[[2,4],[11,2],[12,6],[2,8]],"#949ca8"),Yt(i,11,2,14,8,"#aab2bc",1),U(i,2,13,12,1,"#4e545e"),U(i,2,10,12,1,"#6b7280"),i.fillStyle="#5c636d",i.fillRect(4,6,1,1),i.fillRect(9,11,1,1),i.fillRect(12,9,1,1),o;case"thruster_nozzle":return U(i,8,2,16,5,"#8a98a8"),de(i,8,2,16,5,"#3c4650"),U(i,8,2,16,1,"#aab4c0"),i.fillStyle="#c8d2da",i.fillRect(9,4,1,1),i.fillRect(22,4,1,1),Yt(i,12,3,14,5,"#5c6670",1),Yt(i,18,5,20,3,"#5c6670",1),Nt(i,[[10,7],[22,7],[27,21],[5,21]],"#c88a50"),Nt(i,[[10,7],[15,7],[13,21],[5,21]],"#e0a86a"),Nt(i,[[20,7],[22,7],[27,21],[23,21]],"#96603a"),Yt(i,9,12,23,12,"#7a4a26",1),Yt(i,7,17,25,17,"#7a4a26",1),U(i,5,21,22,4,"#8a98a8"),de(i,5,21,22,4,"#3c4650"),U(i,5,21,22,1,"#aab4c0"),i.fillStyle="#5c6670",i.fillRect(8,22,1,2),i.fillRect(16,22,1,2),i.fillRect(23,22,1,2),i.fillStyle="#c8d2da",i.fillRect(9,23,1,1),i.fillRect(17,23,1,1),i.fillRect(24,23,1,1),U(i,7,25,18,3,"#4a5560"),U(i,9,26,14,1,"#c85a2e"),U(i,11,27,10,1,"#8a3a1e"),o;case"backpack1":return U(i,8,1,3,6,"#5a4229"),U(i,21,1,3,6,"#5a4229"),U(i,5,7,22,21,"#7a5a3a"),de(i,5,7,22,21,"#4c3822"),U(i,5,7,22,8,"#8a6a48"),de(i,5,7,22,8,"#4c3822"),U(i,13,13,6,3,"#d8b74f"),U(i,9,20,14,6,"#6b4d30"),de(i,9,20,14,6,"#4c3822"),o;case"beacon":return i.fillStyle="#66e5f0",i.globalAlpha=.35,i.beginPath(),i.arc(8,5,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.fillStyle="#66e5f0",i.beginPath(),i.arc(8,5,3,0,Math.PI*2),i.fill(),U(i,6,5,1,1,"#d2f8ff"),U(i,7,8,2,8,"#8a98a8"),li(i,0,ne,Dn),o;case"campfire":return Yt(i,3,10,12,4,"#61492f",2),Yt(i,4,4,13,10,"#61492f",2),Yt(i,3,10,12,4,"#7d5f3d",1),li(i,0,ne,Qe),o;case"door":return li(i,0,0,je),li(i,0,ne,Ke),o;case"bed":return li(i,0,0,fn),li(i,ne,0,pn),o;case"dune_melon":i.fillStyle="#5f7f2c",i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#3c541c",i.lineWidth=2,i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.stroke(),i.strokeStyle="#88a84c",i.lineWidth=1;for(const c of[-7,0,7])i.beginPath(),i.moveTo(16+c,3),i.lineTo(16+c,19),i.stroke();return U(i,15,1,2,3,"#6b5238"),o;case"wheat":{i.strokeStyle="#c8a844",i.lineWidth=2;for(const c of[4,8,12])i.beginPath(),i.moveTo(c,15),i.lineTo(c,3),i.stroke();i.fillStyle="#e0c860";for(const c of[4,8,12])for(let d=2;d<9;d+=2)i.fillRect(c-2,d,4,2);return i.strokeStyle="#7a5a30",i.lineWidth=1,i.beginPath(),i.moveTo(2,12),i.lineTo(14,12),i.stroke(),o}case"cooked_wheat":return i.fillStyle="#a8712e",i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.fill(),i.strokeStyle="#74501f",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.stroke(),i.fillStyle="#d8a860",i.fillRect(5,8,6,1),i.fillRect(6,7,4,1),o;case"bucket":case"bucket_full":{const c=r==="bucket_full";return U(i,4,6,8,9,c?"#2f7fd6":n),de(i,4,6,8,9,"#dfe6ee"),U(i,3,5,10,2,"#c8d2da"),U(i,5,2,1,3,"#8a98a8"),U(i,10,2,1,3,"#8a98a8"),Yt(i,5,3,11,3,"#8a98a8",1),c&&U(i,5,7,6,1,"#5fa3ea"),o}case"kindling":return Yt(i,3,21,12,4,"#6b5238",2),Yt(i,6,22,14,8,"#5a4630",2),U(i,11,3,3,3,"#9a8a5a"),U(i,4,8,3,3,"#9a8a5a"),U(i,13,9,3,2,"#8a9a4a"),o;case"seed_tree":return U(i,7,14,6,6,"#8a6a3a"),U(i,7,13,6,2,"#5a4630"),U(i,9,9,2,4,"#5a8a3a"),U(i,6,7,3,2,"#7fae54"),U(i,11,8,3,2,"#7fae54"),o;case"rock":return l("#6a655f","#877f77","#4a4642"),Yt(i,5,9,11,10,"#55504b",1),i.fillStyle="#98907f",i.fillRect(7,4,2,1),o;case"gravel":{const c=(d,f,m,x)=>{i.fillStyle=x,i.beginPath(),i.arc(d,f,m,0,Math.PI*2),i.fill()};return c(5,11,3.2,"#7d766f"),c(11,12,3.6,"#6a645e"),c(8,7,3.6,"#8d8680"),i.fillStyle="#a49c94",i.fillRect(6,5,2,1),i.fillRect(3,9,2,1),i.fillStyle="#544e48",i.fillRect(10,14,3,1),i.fillRect(3,13,3,1),o}case"salt":return Nt(i,[[3,12],[3,7],[6,3],[11,2],[13,6],[13,12]],"#d9dbd6"),Nt(i,[[6,3],[11,2],[12,5],[7,6]],"#f2f4ef"),Nt(i,[[3,12],[13,12],[8,14]],"#b4b8b2"),Yt(i,6,7,11,8,"#c2c5bf",1),i.fillStyle="#ffffff",i.fillRect(5,6,1,1),i.fillRect(9,8,1,1),i.fillRect(11,5,1,1),o;case"deadwood":return Yt(i,2,10,13,8,"#61492f",4),Yt(i,2,9,13,7,"#7d5f3d",1),Yt(i,4,11,11,9,"#4a3926",1),Yt(i,7,9,9,3,"#61492f",2),i.fillStyle="#8a6a44",i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.fill(),i.strokeStyle="#5c4630",i.lineWidth=1,i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.stroke(),o;case"lamp":return i.fillStyle="#fff0a0",i.globalAlpha=.28,i.beginPath(),i.arc(8,8,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,U(i,5,2,6,2,"#4a4a52"),U(i,5,2,6,1,"#6a7280"),U(i,4,4,1,9,"#3a3f46"),U(i,11,4,1,9,"#3a3f46"),U(i,5,4,6,9,"#fff0a0"),U(i,6,5,2,7,"#fff8d0"),U(i,6,10,4,2,"#e8a83c"),U(i,4,13,8,2,"#4a4a52"),o;case"regulator":{U(i,5,1,6,2,"#6a7680"),U(i,3,3,10,11,"#8a98a8"),de(i,3,3,10,11,"#3c4650"),U(i,3,3,10,2,"#aab4c0");for(let c=4;c<=11;c+=2)U(i,c,6,1,6,"#5f6c78");return U(i,7,7,3,4,"#59bfcc"),U(i,8,8,1,1,"#d2f8ff"),U(i,3,12,10,2,"#3c4650"),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),o}case"engine_core":return i.fillStyle="#c468e8",i.globalAlpha=.25,i.beginPath(),i.arc(8,8,7.5,0,Math.PI*2),i.fill(),i.globalAlpha=1,U(i,4,3,8,11,"#6a6e78"),de(i,4,3,8,11,"#3a3e46"),U(i,4,3,8,1,"#8d929c"),U(i,4,13,8,1,"#4a4e56"),i.fillStyle="#c468e8",i.beginPath(),i.arc(8,8,3.2,0,Math.PI*2),i.fill(),i.strokeStyle="#7a3a9a",i.lineWidth=1,i.beginPath(),i.arc(8,8,3.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,6,2,1),i.fillRect(7,5,1,1),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),i.fillRect(4,12,1,1),i.fillRect(11,12,1,1),o;case"surveyor_pin":return i.fillStyle="#0e1a1f",i.beginPath(),i.arc(8,6,5,0,Math.PI*2),i.fill(),Nt(i,[[8,15],[4,8],[12,8]],"#0e1a1f"),i.fillStyle="#d8a845",i.beginPath(),i.arc(8,6,4,0,Math.PI*2),i.fill(),Nt(i,[[8,14],[5,8],[11,8]],"#d8a845"),Nt(i,[[8,14],[5,8],[8,8]],"#f2cf7c"),Nt(i,[[11,8],[8,14],[8,8]],"#96682a"),i.fillStyle="#66e5f0",i.beginPath(),i.arc(8,6,2,0,Math.PI*2),i.fill(),i.fillStyle="#2f97a6",i.fillRect(9,7,1,1),i.fillStyle="#d2f8ff",i.fillRect(6,4,1,1),i.fillRect(7,3,2,1),i.fillStyle="#8a5f1e",i.fillRect(7,13,2,2),o;case"tracker":return Yt(i,12,1,11,4,"#5c6670",1),i.fillStyle="#66e5f0",i.fillRect(12,1,1,1),i.fillStyle="#2a2018",i.beginPath(),i.arc(8,8,6.5,0,Math.PI*2),i.fill(),i.fillStyle="#c08a3c",i.beginPath(),i.arc(8,8,5.5,0,Math.PI*2),i.fill(),i.fillStyle="#8a5f22",i.beginPath(),i.arc(8,8,5.5,-.3,2),i.fill(),i.fillStyle="#12181d",i.beginPath(),i.arc(8,8,4,0,Math.PI*2),i.fill(),i.strokeStyle="#5c6670",i.lineWidth=1,i.beginPath(),i.arc(8,8,4,0,Math.PI*2),i.stroke(),i.fillStyle="#5c6670",i.fillRect(8,5,1,1),i.fillRect(5,8,1,1),i.fillRect(8,11,1,1),i.fillRect(11,8,1,1),U(i,6,11,3,2,"#16222a"),i.fillStyle="#66e5f0",i.fillRect(7,12,1,1),Nt(i,[[11,5],[7,7],[9,9]],"#66e5f0"),Nt(i,[[5,11],[9,9],[7,7]],"#8a949e"),i.fillStyle="#d2f8ff",i.fillRect(7,7,2,2),o;case"seed_melon":return i.fillStyle="#c8b060",i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8f7a40",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.stroke(),i.fillStyle="#e0cc8c",i.beginPath(),i.ellipse(7,9,1.8,2.6,0,0,Math.PI*2),i.fill(),U(i,7,2,2,3,"#5a8a3a"),U(i,5,1,2,2,"#7fae54"),U(i,9,0,2,2,"#7fae54"),o;case"seed_wheat":return i.fillStyle="#d8c878",i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.fill(),i.strokeStyle="#9a8a48",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.stroke(),Yt(i,8,6,8,14,"#b09a58",1),i.fillStyle="#f0e2a8",i.fillRect(6,8,1,4),Yt(i,8,5,7,2,"#9a8a48",1),Yt(i,8,5,9,2,"#9a8a48",1),o;case"bench":return li(i,0,0,Re),li(i,0,ne,Ue),o}return null}const Ro=new Map;function Fo(r,t){const e=Su(r,t),n=e?r+"|"+e:r,s=Ro.get(n);if(s)return s;const o=Ct[r];if(!o)return Ro.set(n,[]),Ro.get(n);let l=wu(r,o.w,o.h,o.color,e);if(!l&&o.block!==void 0){const[a,c]=Es(o.w*ne,o.h*ne);for(let d=0;d<o.h;d++)for(let f=0;f<o.w;f++)li(c,f*ne,d*ne,o.block);l=a}const h=[];if(l){const[a,c]=Es(ne,ne);for(let d=0;d<o.h;d++)for(let f=0;f<o.w;f++)c.clearRect(0,0,ne,ne),c.drawImage(l,f*ne,d*ne,ne,ne,0,0,ne,ne),h.push(a.toDataURL())}else{const[a,c]=Es(ne,ne);U(c,2,2,ne-4,ne-4,o.color),h.push(a.toDataURL())}return Ro.set(n,h),h}function gi(r,t=0,e){const n=Ct[r];if(!n)return"";if(n.w===1&&n.h===1)return Fo(r,e)[0]??"";const[s,o]=Es(n.w*ne,n.h*ne);o.imageSmoothingEnabled=!1;const i=wu(r,n.w,n.h,n.color,Su(r,e));if(i)o.drawImage(i,0,0);else if(n.block!==void 0)for(let a=0;a<n.h;a++)for(let c=0;c<n.w;c++)li(o,c*ne,a*ne,n.block);if(!t)return s.toDataURL();const[l,h]=Es(n.h*ne,n.w*ne);return h.imageSmoothingEnabled=!1,h.translate(n.h*ne,0),h.rotate(Math.PI/2),h.drawImage(s,0,0),l.toDataURL()}function L_(r){const[t,e]=Es(ne,ne);return li(e,0,0,r),t.toDataURL()}const Be=r=>document.getElementById(r);let pd=0;function Q(r){const t=Be("toast");t.textContent=r,t.style.opacity="1",clearTimeout(pd),pd=setTimeout(()=>t.style.opacity="0",2600)}function D_(r){const t=Be("prompt");if(!r){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=r}function k_(r){Be("vision-water").style.opacity=r?"1":"0"}function U_(r){const t=Be("blockname");if(!r){t.classList.add("hidden");return}t.textContent=r,t.classList.remove("hidden")}function md(){const r=Be("vision-hit");r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash")}let gd="";function N_(r){const t=r.selectedSlot()?.itemId??"",e=r.slots.map(o=>o.itemId+":"+(o.charges??"")).join(",")+"|"+t;if(e===gd)return;gd=e;const n=[];for(const o of r.slots){const i=n.find(l=>l.itemId===o.itemId);i?i.count+=1:n.push({itemId:o.itemId,count:1,charges:o.charges})}const s=Be("hotbar");s.innerHTML="",n.slice(0,9).forEach((o,i)=>{const l=document.createElement("div");l.className="hb-slot"+(o.itemId===t?" sel":""),l.dataset.hb=String(i);const h=document.createElement("img");h.src=gi(o.itemId,0,o.charges),h.alt=Ct[o.itemId].name,l.appendChild(h);const a=document.createElement("span");if(a.className="hb-key",a.textContent=String(i+1),l.appendChild(a),o.count>1){const c=document.createElement("span");c.className="hb-count",c.textContent=String(o.count),l.appendChild(c)}s.appendChild(l)})}function F_(){const r=document.querySelector("#bar-water .safe");r.style.left="25%",r.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((Tc-ys)/(Sr-ys)*100).toFixed(1)+"%",t.style.right=((Sr-na)/(Sr-ys)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(s,o,i)=>{const l=document.createElement("span");l.className="dmg",l.style.left=o.toFixed(1)+"%",l.title=i,document.getElementById(s).appendChild(l)};e("bar-water",ec,"below this, dehydration drains Health");const n=s=>(s-ys)/(Sr-ys)*100;e("bar-heat",n(tc),"below this, hypothermia drains Health"),e("bar-heat",n(Ql),"above this, heat stroke drains Health")}function vd(r,t=0,e=0,n=0,s=0,o=0){const i=document.getElementById("waypoint");if(!r){i.classList.add("hidden");return}const l=t-n,h=e-s,a=Math.atan2(l,-h)+o;Be("wp-arrow").style.transform=`rotate(${a*180/Math.PI}deg)`,Be("wp-name").textContent=r,Be("wp-dist").textContent=`${Math.round(Math.hypot(l,h))} m`,i.classList.remove("hidden")}function _d(r,t,e,n,s,o,i){const l=T=>document.querySelector(`#${T} .fill`);l("bar-health").style.width=r.health+"%",l("bar-water").style.width=r.water+"%";const h=(r.body-ys)/(Sr-ys)*100;l("bar-heat").style.width=h+"%";const a=e%qe/qe,c=String(Math.floor(a*24)).padStart(2,"0"),d=String(Math.floor(a*24%1*60)).padStart(2,"0");Be("clock-day").textContent="Day "+n,Be("clock-time").textContent=c+":"+d;const f=T=>s==="C"?Math.round(T)+"°C":Math.round(T*9/5+32)+"°F";Be("clock-temp").textContent=`air ${f(r.lastAmbientEff)}  body ${f(r.body)}`;const m=t.selectedSlot();Be("held").textContent=m?Ct[m.itemId].name:"—",N_(t),Be("warn-hot").classList.toggle("hidden",r.body<=na),Be("warn-cold").classList.toggle("hidden",r.body>=Tc),Be("chip-reg").classList.toggle("hidden",!i?.regulated),Be("chip-storm").classList.toggle("hidden",!i?.stormBroken),Be("chip-nap").classList.toggle("hidden",!i?.napReady);const x=t.weight(),y=t.weightLimit(),v=Be("weight");v.textContent=`${x.toFixed(1)} / ${y} kg`,v.classList.toggle("encumbered",x>y),Be("vision-vignette").style.opacity=String(r.vision*.85);const _=r.water<5||r.health<30;Be("vision-red").style.opacity=_?String(.35+.25*Math.sin(o/220)):"0"}const Co=r=>r===Ke||r===je||r===Ye||r===He,xd=[[1,0],[0,1],[-1,0],[0,-1]],yd=4,O_=8.5;class _e{constructor(t,e,n,s,o){this.meta=t,this.settings=s,this.audio=o,this.seed=cv(t.seedStr||t.id),this.world=new Cv(this.seed),this.survival=new Uv(this.seed^7),this.quests=w_(e?.quest),this.renderer=new Wv(n),this.renderer.fires=this.campCharges,this.player=new Lv(this.world),this.inv.learn=i=>this.codex.add(i),this.timeSec=e?.time??qe*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===Un&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===Un&&this.renderer.addPointLight(6,35,0,"lamp");for(let i=-10;i<=8;i++)for(let l=-14;l<=14;l++)for(let h=28;h<=36;h++)this.world.get(i,h,l)===Fi&&this.breakers.add(`${i},${h},${l}`);for(const[i,l]of this.world.deltas){const[h,a]=i.split(",").map(Number);for(const[c,d]of l){if(d!==Fi)continue;const f=c%Kt,m=(c-f)/Kt,x=m%G;this.breakers.add(`${h*G+x},${f},${a*G+(m-x)/G}`)}}F_(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(s)}seed;world;survival;player;inv=new Ya;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];worldMode="easy";pins=[];pinSeq=0;revealed=new Set;visited=new Set;chronicle=new Set;chronLast=null;codex=new Set;mapMax=!1;tileCache=new Map;mobs=[];traderAt=new Map;tradeOffers=[];tradeCamp=null;stormToast=!1;mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null,regulator:null,light:null};lanternOn=!1;lanternAcc=0;regulatorAcc=0;collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;breakers=new Set;breakerTick=-1;stormShieldOn=!1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;waterAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(te(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===Mt&&(this.world.set(t,e,n,Fe),this.chests.set(_e.chestKey([[t,e,n]]),[{itemId:"canister_full",x:0,y:0},{itemId:"canister_full",x:1,y:0},{itemId:"canister_full",x:2,y:0}]))}chestCluster(t,e,n){const s=new Set([`${t},${e},${n}`]),o=[[t,e,n]],i=[];for(;o.length;){const l=o.pop();this.world.get(l[0],l[1],l[2])===Fe&&i.push(l);for(const[h,a,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const d=l[0]+h,f=l[1]+a,m=l[2]+c,x=`${d},${f},${m}`,y=this.world.get(d,f,m);s.has(x)||y!==Fe&&y!==Yr||(s.add(x),o.push([d,f,m]))}}return i}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=Ct[e.itemId],s=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const o of s){const i=o?n.h:n.w,l=o?n.w:n.h;for(let h=0;h+l<=t.h;h++)for(let a=0;a+i<=t.w;a++)if(t.fits(a,h,i,l))return e.x=a,e.y=h,e.rot=o||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new Ya;e.slots=[];const[n,s]=_e.chestDims(t);return e.w=n,e.h=s,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,s=Math.floor(t/Ie),o=Math.floor(e/Ie);for(let i=-1;i<=1;i++)for(let l=-1;l<=1;l++){if(!n.townAt(s+i,o+l))continue;const h=n.townCenter(s+i,o+l);if(Math.abs(h.x-t)<=10&&Math.abs(h.z-e)<=10)return!0}return!1}townLoot(t,e){const n=o=>gt(t,e,this.seed+o),s=[{itemId:"canister_empty",count:2}];return n(11)<.7&&s.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&s.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&s.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&s.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&s.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&s.push({itemId:"door_inner",count:1}),n(22)<.25&&s.push({itemId:"bed",count:1}),n(23)<.5&&s.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),s}openChest(t,e,n){const s=this.chestCluster(t,e,n),o=_e.chestKey(s),i=this.chests.has(o);this.chests.has(o)||this.chests.set(o,[]);const l=this.emptyChestGrid(s.length);if(l.slots=this.chests.get(o),!i&&s.some(([h,,a])=>this.inTown(h,a))){for(const h of this.townLoot(s[0][0],s[0][2]))for(let a=0;a<h.count;a++){const c={itemId:h.itemId,x:0,y:0};_e.placeSlotFree(l,c)||this.dropEntity(h.itemId,1,2)}Q("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=l,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,s){const o=this.chestCluster(t,e,n),i=this.emptyChestGrid(o.length);for(const l of s)_e.placeSlotFree(i,l)||this.dropEntity(l.itemId,1,2,l.charges);i.slots.length&&this.chests.set(_e.chestKey(o),i.slots),o.length>1&&Q(`Chests linked — one ${i.w}×${i.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==Fe){if(dn(this.world.get(t.x,t.y,t.z))){for(const o of t.items)for(let i=0;i<o.count;i++)this.dropEntity(o.itemId,1,2);return}this.world.set(t.x,t.y,t.z,Fe)}const e=this.chestCluster(t.x,t.y,t.z),n=_e.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const s=this.emptyChestGrid(e.length);s.slots=this.chests.get(n);for(const o of t.items)for(let i=0;i<o.count;i++){const l={itemId:o.itemId,x:0,y:0};_e.placeSlotFree(s,l)||this.dropEntity(o.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body;const e=[];this.inv.slots=t.inventory.slots.map(l=>{const h=l.count??1;for(let a=1;a<h;a++)e.push({itemId:l.itemId});return{itemId:l.itemId,x:l.x,y:l.y,rot:l.rot,charges:l.charges,blockRot:l.blockRot}});for(const l of e)this.giveOrDrop(l.itemId,1);this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const l of["backpack","head","body","regulator","light"]){const h=t.equip?.[l];h&&(this.equip[l]={itemId:h,x:0,y:0,charges:t.equip?.charges?.[l]})}this.beaconMarks=t.beaconMarks??[],this.worldMode=t.worldMode??"easy",this.pins=t.pins??[],this.pinSeq=this.pins.reduce((l,h)=>Math.max(l,h.id),0),this.revealed=new Set(t.revealed??[]),this.visited=new Set(t.visited??[]),this.chronicle=dd(t.chronicle,new Set(Ac.map(l=>l.id))),this.chronLast=this.chronicle.size?[...this.chronicle].pop():null,this.codex=dd(t.codex,new Set([...Object.keys(Ct),...hn.map((l,h)=>"b:"+h)])),this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let s=0;const o=[];this.world.gen.canisters.forEach(l=>{if(l.buried&&!n.has(s)){const h=Math.round(te(this.seed,l.x,l.z));o.push({id:this.entitySeq++,x:l.x+.5,y:h,z:l.z+.5,itemId:"canister_full",buried:l.buried,buriedAt:l.buried?[l.x,h,l.z]:void 0,srcIndex:s})}s++});for(const l of t.entities){const h=l.count??1;for(let a=0;a<h;a++)o.push({id:this.entitySeq++,x:l.x,y:l.y,z:l.z,itemId:l.itemId,age:l.age})}this.entities=o,this.chests=new Map((t.chests??[]).map(l=>{const h=this.emptyChestGrid(l.cells.split("|").length);for(const a of l.slots){h.slots.push({itemId:a.itemId,x:a.x,y:a.y,rot:a.rot,blockRot:a.blockRot,charges:a.charges});for(let c=1;c<(a.count??1);c++){const d={itemId:a.itemId,x:0,y:0};_e.placeSlotFree(h,d)||this.giveOrDrop(a.itemId,1)}}return[l.cells,h.slots]}));const i=[];for(const l of t.caches){const h=l.kind??"death";if(h==="chest"){i.push(l);continue}const a={id:this.entitySeq++,x:l.x,y:l.y,z:l.z,kind:h,items:l.items.map(c=>({...c}))};this.caches.push(a)}this.campCharges.clear();for(const[l,h]of Object.entries(t.campfires??{}))this.campCharges.set(l,h);this.renderer.fires=this.campCharges,this.world.loadRots(t.rots??{}),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep);for(const l of i)this.adoptLegacyChest(l);this.pods=(t.pods??[]).map(l=>({...l,ringEid:this.renderer.addGroundRing(l.x+.5,Math.round(te(this.seed,l.x,l.z)),l.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(l.x+.5,Math.round(te(this.seed,l.x,l.z)),l.z+.5,13382434)})),this.won=!!t.won;for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[d,f]of h){if(f!==Un&&f!==Qe)continue;const m=Math.floor(d/(G*Kt)),x=d%(G*Kt),y=a*G+m,v=x%Kt,_=c*G+Math.floor(x/Kt);f===Qe&&(this.campCharges.get(`${y},${v},${_}`)??0)<=0||this.renderer.addPointLight(y,v,_,f===Un?"lamp":"fire")}}}snapshot(){for(const t of this.inv.slots)this.codex.add(t.itemId);for(const t of["backpack","head","body","regulator","light"]){const e=this.equip[t];e&&this.codex.add(e.itemId)}return{v:2,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId,regulator:this.equip.regulator?.itemId,light:this.equip.light?.itemId,charges:{regulator:this.equip.regulator?.charges,light:this.equip.light?.charges}},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,charges:t.charges,age:Math.floor(t.age??0)})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas(),rots:this.world.serializeRots(),worldMode:this.worldMode,pins:this.pins,visited:[...this.visited],revealed:[...this.revealed],chronicle:[...this.chronicle],codex:[...this.codex]}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/qe);this.timeSec=(e+t)*qe}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new A_(this),this.startCine(T_,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),Q("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}skipCine(){if(!this.cine)return;this.cine=null,this.cineOnEnd=null;const t=this.world;t.get(-6,31,0)===$e&&(t.set(-6,31,0,Ke),t.set(-6,32,0,je),t.doorSwing.delete("-6,0")),this.player.pitch=0}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,s=n.find(h=>e.t<h.t1)??n[n.length-1];if(s.openDoor&&e.t>=s.openDoor.t){const{x:h,y:a,z:c}=s.openDoor;if(this.world.get(h,a,c)!==$e){this.world.set(h,a,c,$e);for(const d of[-1,1])Co(this.world.get(h,a+d,c))&&this.world.set(h,a+d,c,$e);this.audio.door()}}const o=Math.min(1,Math.max(0,(e.t-s.t0)/(s.t1-s.t0))),i=o*o*(3-2*o),l=this.renderer.camera;if(l.position.set(s.from[0]+(s.to[0]-s.from[0])*i,s.from[1]+(s.to[1]-s.from[1])*i,s.from[2]+(s.to[2]-s.from[2])*i),l.lookAt(s.look[0],s.look[1],s.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const h=n[n.length-1];this.player.yaw=Math.atan2(-(h.look[0]-h.to[0]),-(h.look[2]-h.to[2])),this.player.pitch=0;const a=this.renderer.camera;a.position.copy(this.player.eye()),a.rotation.order="YXZ",a.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&Q("Guest worlds are never saved."),!1;const e=yu(this.meta,this.snapshot());return t&&Q(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){bu(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/qe)}questBump(t,e=1){if(this.tut)return;const n=E_(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}Q(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&Q("Power runs through the wreck. Four dead engines left — find them a way to burn."),this.renderQuest(),this.saveNow(!0)}columnTop(t,e){for(let n=Kt-1;n>=0;n--)if(this.world.get(t,n,e))return n;return Math.round(te(this.seed,t,e))}crashPod(t,e){const n=this.player.pos,s=Math.round(n.x)+2,o=Math.round(n.z)+1,i=this.columnTop(s,o),l=this.renderer.addGroundRing(s+.5,i,o+.5,13382434,1.1),h=this.renderer.addBeam(s+.5,i,o+.5,13382434);this.pods.push({x:s,z:o,t:3,itemId:t,n:e,ringEid:l,beamEid:h}),this.audio.warn(),setTimeout(()=>{this.running&&Q("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const s=this.columnTop(n.x,n.z);this.caches.push({id:this.entitySeq++,x:n.x,y:s,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,s+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),Q("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos;for(const o of this.world.chunks.keys())this.visited.add(o);this.chronTick();const n=this.tut?this.tutGuide:this.waypointTarget();if(n){vd(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const o=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;if(o!==this.waypointKey){this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=o,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12);const i=n.lmKey;i&&this.revealed.add(i)}}else vd(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const s=new Map;if(this.equip.head?.itemId==="visor"){for(const o of this.caches)o.items.length&&s.set(`c${o.id}`,[o.x+.5,o.y,o.z+.5,o.kind==="reward"?14197322:13386803]);for(const o of this.chests.keys()){const[i,l,h]=o.split(";")[0].split(",").map(Number);s.set(`x${o}`,[i+.5,l,h+.5,15124842])}for(const o of this.pins)o.name.trim().toLowerCase()==="base"&&s.set(`p${o.id}`,[o.x+.5,Math.round(te(this.seed,o.x,o.z))+1,o.z+.5,14202703])}for(const[o,i]of this.visorBeams)s.has(o)||(this.renderer.removeEntityMesh(i),this.visorBeams.delete(o));for(const[o,[i,l,h,a]]of s)this.visorBeams.has(o)||this.visorBeams.set(o,this.renderer.addBeam(i,l,h,a,10));this.drawMap()}waypointTarget(){const t=Er(this.quests);if(!t)return null;const e=this.player.pos,n=(o,i)=>Math.round(te(this.seed,o,i))+1,s=o=>{let i=o[0],l=1/0;for(const h of o){const a=(h.x-e.x)**2+(h.z-e.z)**2;a<l&&(l=a,i=h)}return i};switch(t.kind){case"oasis":{let o=-1,i=1/0;this.world.gen.oases.forEach((h,a)=>{const c=(h.x-e.x)**2+(h.z-e.z)**2;c<i&&(i=c,o=a)});const l=o>=0?this.world.gen.oases[o]:null;return l?{name:"Oasis",x:l.x+.5,y:n(l.x,l.z),z:l.z+.5,lmKey:`oasis:${o}`}:null}case"water_home":case"finish":{const o=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(i=>this.world.get(i.x,i.y,i.z)===Dn);return o?{name:"Save Beacon",x:o.x+.5,y:o.y,z:o.z+.5}:null}case"wreck":{const o=this.world.gen.secondShip;return{name:"Second Wreck",x:o.x+.5,y:n(o.x,o.z),z:o.z+.5,lmKey:"wreck2"}}case"core":{const o=this.world.gen.secondShip;return{name:"Engine Core",x:o.x+.5,y:n(o.x,o.z),z:o.z+.5,lmKey:"wreck2"}}case"tool":{const o=[];this.world.get(0,31,-3)===Re&&o.push({x:0,y:31,z:-3});for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[d,f]of h){if(f!==Re)continue;const m=d%Kt,x=Math.floor(d/Kt)%G,y=Math.floor(d/(Kt*G));o.push({x:a*G+y,y:m,z:c*G+x})}}if(!o.length)return null;const i=s(o);return{name:"Crafting Bench",x:i.x+.5,y:i.y,z:i.z+.5}}case"supplies":{const o=this.world.gen.nearestTown(e.x,e.z);return o?{name:"Town",x:o.x+.5,y:n(o.x,o.z),z:o.z+.5,lmKey:`town:${Math.round(o.x/Ie)},${Math.round(o.z/Ie)}`}:null}case"farm":{if(!this.crops.size)return null;let o=null,i=1/0;for(const c of this.crops.keys()){const[d,,f]=c.split(",").map(Number),m=(d+.5-e.x)**2+(f+.5-e.z)**2;m<i&&(i=m,o=c)}const[l,h,a]=o.split(",").map(Number);return{name:"Your Farm",x:l+.5,y:h+1,z:a+.5}}default:return null}}questFrame(){const t=Er(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===Dn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}questJump(t){this.tut&&this.tut.finish();const e=Math.max(0,Math.min(bi.length,t|0));this.quests.i=e,this.questShown="",this.renderQuest(),Q(e>=bi.length?"Quest chain skipped — every quest is done.":`Skipped to “${bi[e].title}”.`)}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=Er(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],s=e.id+":"+n+":"+(this.chronLast??"");if(s===this.questShown)return;this.questShown=s;const o=this.chronLast?sl.get(this.chronLast):null;t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:"")+(o?`<div class="q-chron">Chronicle · ${o.title} — ${o.hint}</div>`:"")}lesson(t){this.chronicle.has(t)||!sl.has(t)||(this.chronicle.add(t),this.chronLast=t,Q(`Chronicle — ${sl.get(t).title}`),this.audio.savePing(),this.renderQuest())}chronTick(){const t=this.player.pos,e=this.world.gen;e.nearOasis(Math.floor(t.x),Math.floor(t.z))&&this.lesson("oasis"),e.townNear(t.x,t.z,96)&&this.lesson("town"),e.mouthNear(t.x,t.z,14)&&this.lesson("mouth");{const s=Math.floor((t.x-24)/ve),o=Math.floor((t.x+24)/ve),i=Math.floor((t.z-24)/ve),l=Math.floor((t.z+24)/ve);for(let h=s;h<=o&&!this.chronicle.has("camp");h++)for(let a=i;a<=l;a++){if(!e.campAt(h,a))continue;const c=e.campCenter(h,a);if(Math.hypot(c.x-t.x,c.z-t.z)<=24){this.lesson("camp");break}}}const n=e.secondShip;(n.x-t.x)**2+(n.z-t.z)**2<=120**2&&this.lesson("wreck2"),t.y<te(this.seed,Math.floor(t.x),Math.floor(t.z))-3&&this.lesson("cave")}landmarkKnown(t,e,n){return this.revealed.has(t)||this.visited.has(Math.floor(e/G)+","+Math.floor(n/G))}landmarkList(t,e,n){const s=this.world.gen,o=[];o.push({key:"ship",x:0,z:0,kind:"ship",label:"The Crash"});const i=s.secondShip;this.landmarkKnown("wreck2",i.x,i.z)&&o.push({key:"wreck2",x:i.x,z:i.z,kind:"wreck",label:"Second Wreck"});for(let h=0;h<s.oases.length;h++){const a=s.oases[h],c=`oasis:${h}`;Math.abs(a.x-t)<=n&&Math.abs(a.z-e)<=n&&this.landmarkKnown(c,a.x,a.z)&&o.push({key:c,x:a.x,z:a.z,kind:"oasis",label:"Oasis"})}s.canisters.forEach((h,a)=>{this.collected.has(a)&&Math.abs(h.x-t)<=n&&Math.abs(h.z-e)<=n&&o.push({key:`can:${a}`,x:h.x,z:h.z,kind:"canister",label:"Canister Site"})});const l=(h,a,c,d)=>{const f=Math.floor((t-n)/h),m=Math.floor((t+n)/h),x=Math.floor((e-n)/h),y=Math.floor((e+n)/h);for(let v=f;v<=m;v++)for(let _=x;_<=y;_++){if(c==="town"?!s.townAt(v,_):c==="camp"?!s.campAt(v,_):!s.mouthAt(v,_))continue;const T=`${c}:${v},${_}`,w=a(v,_);this.landmarkKnown(T,w.x,w.z)&&o.push({key:T,x:w.x,z:w.z,kind:c,label:d})}};return l(Ie,(h,a)=>s.townCenter(h,a),"town","Town"),l(ve,(h,a)=>s.campCenter(h,a),"camp","Trader Camp"),l(xn,(h,a)=>s.mouthCenter(h,a),"mouth","Cave Mouth"),o}plantPin(){if(this.inv.removeItem("surveyor_pin",1)!==1)return;const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.z);this.pins.push({id:++this.pinSeq,x:t,z:e,name:`Pin ${this.pinSeq}`}),this.audio.place(),Q(`Surveyor's Pin planted — rename it from the maximised Map. A Pin named "Base" beams you home while the Visor is worn.`),this.lesson("pin"),this.renderPinPanel(),this.drawMap()}useTracker(){const t=this.player.pos.x,e=this.player.pos.z,n=this.world.gen,s=[];n.oases.forEach((h,a)=>{this.landmarkKnown(`oasis:${a}`,h.x,h.z)||s.push({key:`oasis:${a}`,x:h.x,z:h.z,kind:"oasis",label:"an Oasis"})}),n.canisters.forEach((h,a)=>{!this.collected.has(a)&&!this.revealed.has(`can:${a}`)&&s.push({key:`can:${a}`,x:h.x,z:h.z,kind:"canister",label:"a Buried Canister site"})});const o=(h,a,c,d,f,m)=>{const x=Math.floor(t/h),y=Math.floor(e/h);for(let v=x-m;v<=x+m;v++)for(let _=y-m;_<=y+m;_++){if(!a(v,_))continue;const T=`${d}:${v},${_}`,w=c(v,_);this.landmarkKnown(T,w.x,w.z)||s.push({key:T,x:w.x,z:w.z,kind:d,label:f})}};if(o(Ie,(h,a)=>n.townAt(h,a),(h,a)=>n.townCenter(h,a),"town","a Town",5),o(ve,(h,a)=>n.campAt(h,a),(h,a)=>n.campCenter(h,a),"camp","a Trader Camp",4),o(xn,(h,a)=>n.mouthAt(h,a),(h,a)=>n.mouthCenter(h,a),"mouth","a Cave Mouth",6),!s.length){Q("The Tracker spins uselessly — every Landmark around you is already on your Map."),this.audio.error();return}let i=s[0],l=1/0;for(const h of s){const a=(h.x-t)**2+(h.z-e)**2;a<l&&(l=a,i=h)}this.inv.removeItem("tracker",1)===1&&(this.revealed.add(i.key),this.audio.savePing(),Q(`The Tracker wakes ${i.label} at ${i.x}, ${i.z} — marked on the Map.`),this.lesson("tracker"),this.renderHeld(),this.drawMap())}renderPinPanel(){const t=document.getElementById("map-pins");if(t){if(!this.mapMax||this.pins.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),t.innerHTML="<h4>Pins</h4>"+this.pins.map(e=>`<div class="pin-row"><input class="pin-name" data-id="${e.id}" maxlength="16" value="${e.name.replace(/"/g,"&quot;")}"><button data-del="${e.id}" title="pull this Pin">✕</button></div>`).join("")}}mapTile(t,e){const n=Xn(t,e),s=this.world.chunks.has(n);if(!s&&!this.visited.has(n))return null;const o=this.world.revs.get(n)??0;let i=this.tileCache.get(n);if(i&&i.remembered===!s&&(i.remembered||i.rev===o))return i;const l=document.createElement("canvas");l.width=G,l.height=G;const h=l.getContext("2d");if(s){const a=this.world.chunks.get(n);for(let c=0;c<G;c++)for(let d=0;d<G;d++){let f=Mt,m=-1;for(let v=Kt-1;v>=0;v--)if(f=a[(c*G+d)*Kt+v],f!==Mt){m=v;break}if(m<0){h.fillStyle="#0a0c10",h.fillRect(c,d,1,1);continue}const x=hn[f].color,y=.5+.5*Math.min(1,m/34);h.fillStyle=Mn(f)?"#2f6fb8":`rgb(${Math.round(x[0]*y)},${Math.round(x[1]*y)},${Math.round(x[2]*y)})`,h.fillRect(c,d,1,1)}}else{const a=[[150,128,86],[104,92,74],[150,158,156],[120,84,58],[88,66,52]];for(let c=0;c<G;c++)for(let d=0;d<G;d++){const f=t*G+c,m=e*G+d,x=te(this.seed,f,m),y=a[Rr(f,m,this.seed)]??a[0],v=.45+.55*Math.min(1,Math.max(0,x/40));h.fillStyle=`rgb(${Math.round(y[0]*v)},${Math.round(y[1]*v)},${Math.round(y[2]*v)})`,h.fillRect(c,d,1,1)}}return i={remembered:!s,rev:o,cv:l},this.tileCache.set(n,i),i}drawMap(){const t=document.getElementById("map"),e=document.getElementById("map-canvas");if(!t||!(e instanceof HTMLCanvasElement))return;const n=this.equip.head?.itemId==="visor",s=!document.getElementById("hud").classList.contains("hidden");if(!n||this.ui||this.paused||this.cine||this.liftoff||!s){t.classList.contains("hidden")||t.classList.add("hidden");return}t.classList.remove("hidden");const o=this.mapMax?120:40,i=this.mapMax?Math.max(1,Math.min(4,Math.floor(Math.min(innerWidth,innerHeight)*.7/(2*o+1)))):2,l=(2*o+1)*i;e.width!==l&&(e.width=l,e.height=l);const h=e.getContext("2d");h.fillStyle="#0a0c10",h.fillRect(0,0,l,l);const a=Math.floor(this.player.pos.x),c=Math.floor(this.player.pos.z),d=a-o,f=c-o;for(let T=Math.floor(d/G);T<=Math.floor((d+2*o)/G);T++)for(let w=Math.floor(f/G);w<=Math.floor((f+2*o)/G);w++){const S=this.mapTile(T,w);if(!S)continue;const b=(T*G-d)*i,I=(w*G-f)*i;h.drawImage(S.cv,b,I,G*i,G*i),S.remembered&&(h.fillStyle="rgba(8,10,14,0.55)",h.fillRect(b,I,G*i,G*i))}const m={ship:"#66e5f0",wreck:"#cc4433",town:"#d8b74f",camp:"#b48ad8",mouth:"#8a8f9a",oasis:"#41d878",canister:"#e08a4f"};for(const T of this.landmarkList(a,c,o+8)){const w=(T.x-d)*i,S=(T.z-f)*i;w<-4||S<-4||w>l+4||S>l+4||(h.fillStyle="#0a0c10",h.beginPath(),h.arc(w,S,4.5,0,7),h.fill(),h.fillStyle=m[T.kind]??"#ffffff",h.beginPath(),h.arc(w,S,3,0,7),h.fill(),this.mapMax&&(h.fillStyle="#e8e0d0",h.font="10px system-ui",h.fillText(T.label,w+6,S+3)))}h.font="10px system-ui";for(const T of this.pins){const w=(T.x-d)*i,S=(T.z-f)*i;w<-4||S<-4||w>l+4||S>l+4||(h.fillStyle="#0a0c10",h.fillRect(w-4,S-4,8,8),h.fillStyle="#d8b74f",h.fillRect(w-2.5,S-2.5,5,5),this.mapMax&&(h.fillStyle="#f2e9c9",h.fillText(T.name,w+6,S+3)))}const x=this.player.yaw,y=Math.sin(x),v=Math.cos(x),_=Math.atan2(v,y);h.save(),h.translate(l/2,l/2),h.rotate(_),h.fillStyle="#35e0ff",h.beginPath(),h.moveTo(6,0),h.lineTo(-4,-4),h.lineTo(-4,4),h.closePath(),h.fill(),h.restore()}attach(){const t=(n,s,o=window)=>{o.addEventListener(n,s),this.bound.set(n+(o===window?"":":el"),s)};t("keydown",n=>{const s=n;if(!s.repeat){if(this.keys.add(s.code),s.code==="KeyE"&&this.act(),s.code==="KeyQ"&&this.useItem(),s.code==="KeyX"&&this.surge(),s.code==="KeyT"&&this.toggleLantern(),s.code==="KeyM"&&this.equip.head?.itemId==="visor"&&!this.ui&&!this.paused&&!this.cine&&!this.liftoff&&!(document.activeElement instanceof HTMLInputElement)&&(this.mapMax=!this.mapMax,this.renderPinPanel(),this.drawMap(),this.audio.place()),s.code==="KeyI"&&this.toggleInv(),s.code==="KeyC"&&this.ui==="inv"&&(this.invCraft=!this.invCraft,this.renderCraftTab()),s.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const o=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,i=o.selectedSlot();i&&!o.rotate(i)&&(Q("No room to rotate."),this.audio.error())}this.renderInv()}if(s.code==="KeyR"&&!this.ui&&!this.paused&&!this.cine&&!this.liftoff){const o=this.inv.selectedSlot();if(o){const i=Ct[o.itemId].block;i!==void 0&&hn[i].placeable&&Yh(i)&&(o.blockRot=(o.blockRot??0)+1&3,this.renderHeld(),this.audio.place())}}if(s.code==="KeyG"&&!this.ui&&!this.paused&&!this.cine&&!this.liftoff&&this.dropHeld(),s.code==="Escape"){if(this.liftoff)return;if(this.tut&&!this.ui){this.tut.finish(!0);return}this.escape()}if(s.code==="KeyP"&&!this.liftoff&&this.escape(!0),s.code.startsWith("Digit")){const o=Number(s.code.slice(5)),i=this.hotbarItems();if(o>=1&&o<=i.length){const l=i[o-1];this.inv.selectedSlot()?.itemId===l?this.inv.selected=-1:this.selectItem(l),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("btn-inv-craft").onclick=()=>{this.invCraft=!this.invCraft,this.renderCraftTab()},document.getElementById("hotbar").addEventListener("pointerdown",n=>{const s=n.target.closest("[data-hb]");if(!s)return;const o=this.hotbarItems()[Number(s.dataset.hb)];o&&(this.inv.selectedSlot()?.itemId===o?this.inv.selected=-1:this.selectItem(o),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, #inv-bin, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const s=n;s.button===0?(this.mouseDown=!0,this.breakMsg=!1):s.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const s=n;this.player.yaw-=s.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*s.movementY*.0022*this.settings.sens,this.player.pitch=xi.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>{this.ui||this.cycleItem(n.deltaY>0?1:-1)}),t("contextmenu",n=>n.preventDefault());else{let n=-1,s=0,o=0;e.addEventListener("touchstart",m=>{if(n<0){const x=m.changedTouches[0];n=x.identifier,s=x.clientX,o=x.clientY}m.preventDefault()}),e.addEventListener("touchmove",m=>{for(const x of m.changedTouches)x.identifier===n&&(this.player.yaw-=(x.clientX-s)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(x.clientY-o)*.005*this.settings.sens,this.player.pitch=xi.clamp(this.player.pitch,-1.55,1.55),s=x.clientX,o=x.clientY);m.preventDefault()});const i=m=>{for(const x of m.changedTouches)x.identifier===n&&(n=-1)};e.addEventListener("touchend",i),e.addEventListener("touchcancel",i),document.addEventListener("contextmenu",m=>m.preventDefault());const l=document.getElementById("stick"),h=document.getElementById("knob");let a=-1;const c=m=>{const x=l.getBoundingClientRect();for(const y of m.changedTouches)if(y.identifier===a){const v=y.clientX-(x.left+x.width/2),_=y.clientY-(x.top+x.height/2),T=Math.max(1,Math.hypot(v,_)),w=Math.min(T,x.width/2)/(x.width/2);this.stick.x=v/T*w,this.stick.y=_/T*w,h.style.left=38+v/T*w*38+"px",h.style.top=38+_/T*w*38+"px"}};l.addEventListener("touchstart",m=>{a=m.changedTouches[0].identifier,c(m),m.preventDefault()}),l.addEventListener("touchmove",m=>{c(m),m.preventDefault()});const d=()=>{this.stick.x=0,this.stick.y=0,a=-1,h.style.left="38px",h.style.top="38px"};l.addEventListener("touchend",d),l.addEventListener("touchcancel",d);const f=(m,x,y)=>{const v=document.getElementById(m);v.addEventListener("touchstart",_=>{_.preventDefault(),x()}),v.addEventListener("touchend",_=>{_.preventDefault(),y&&y()}),v.addEventListener("touchcancel",()=>{y&&y()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-lamp",()=>this.toggleLantern()),f("m-next",()=>this.cycleItem(1)),f("m-drop",()=>this.dropHeld()),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}t("click",()=>{this.equip.head?.itemId==="visor"&&(this.mapMax=!this.mapMax,this.renderPinPanel(),this.drawMap(),this.audio.place())},document.getElementById("map"));{const n=document.getElementById("map-pins");t("pointerdown",s=>s.stopPropagation(),n),t("keydown",s=>s.stopPropagation(),n),t("click",s=>{s.stopPropagation();const o=s.target.closest?.("button[data-del]");o&&(this.pins=this.pins.filter(i=>i.id!==Number(o.dataset.del)),this.renderPinPanel(),this.drawMap(),this.audio.place())},n),t("change",s=>{const o=s.target;if(!o.classList?.contains("pin-name"))return;const i=this.pins.find(l=>l.id===Number(o.dataset.id));i&&(i.name=o.value.trim()||`Pin ${i.id}`,o.blur(),i.name.toLowerCase()==="base"&&Q('A Pin named "Base": the Visor beams you back to it, from anywhere.'),this.drawMap())},n)}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=s=>!document.getElementById(s).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),document.getElementById("inv-bin").onclick=()=>this.binDiscard()}binDiscard(){if(this.temp){const n=Ct[this.temp.itemId].name;this.temp=null,this.tempOrigin=null,Q(`${n} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld();return}const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,e=t.selectedSlot();if(!e){Q("Select an item, then send it to the Bin."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),Q(`${Ct[e.itemId].name} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld()}overBin(t,e){const n=document.getElementById("inv-bin").getBoundingClientRect();return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":this.pauseSubmenu==="chronicle"?"screen-chronicle":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),s=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,s),this.renderer.rebuildDirty(this.world);const o=this.renderer.updateSky(this.timeSec,this.player.pos),i=Rr(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),l=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let d=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(d-=1),this.keys.has("KeyD")&&(d+=1);const m=this.keys.has("Space")||this.mobileJump;if(this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,d,f,m,this.speedMul,l),this.player.lastFallDist>0){const w=this.player.lastFallDist;if(this.player.lastFallDist=0,!this.player.inWater&&w>yd){const S=1-(this.equip.body?Ct[this.equip.body.itemId].armor??0:0),b=(w-yd)*O_*S;this.survival.hurt(b,"fall"),md(),this.audio.hurt(),this.survival.health>0&&b>=10&&Q("You hit the ground hard.")}}const y=(this.timeSec%qe/qe-.25)*Math.PI*2,v=o.sunElev>0?(()=>{const w=1/Math.hypot(Math.cos(y),o.sunElev,.4);return{x:Math.cos(y)*w,y:o.sunElev*w,z:.4*w}})():null;this.stormShieldTick(),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(d!==0||f!==0),overencumbered:l,biome:i,tSec:this.timeSec,sunElev:o.sunElev,sunDir:v,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos),regulator:(this.equip.regulator?.charges??0)>0,terrainH:(w,S)=>te(this.seed,w,S),stormShield:this.stormShieldOn,stormMul:this.equip.body&&Ct[this.equip.body.itemId].stormResist?.25:1}),this.renderer.setStorm(this.survival.storm,this.survival.lastOpenSky),this.audio.setStorm(this.survival.storm),this.survival.storm>.5&&!this.stormToast?(this.stormToast=!0,this.lesson("storm"),Q("A Sandstorm rolls in — get out of the open."),this.audio.error()):this.survival.storm<.3&&this.stormToast&&(this.stormToast=!1,Q("The Sandstorm passes."));const _=this.equip.regulator;_&&(_.charges??0)>0&&(this.regulatorAcc+=t,this.regulatorAcc>=2880&&(this.regulatorAcc=0,_.charges=(_.charges??0)-1,_.charges<=0?(_.charges=0,Q("The Coolant Cell in your Regulator is spent."),this.audio.error()):Q("A Coolant Cell has been used up.")));const T=this.equip.light;this.lanternOn&&T&&((T.charges??0)<=0?this.toggleLantern():(this.lanternAcc+=t,this.lanternAcc>=240&&(this.lanternAcc=0,T.charges=(T.charges??0)-1,(T.charges??0)<=0&&(this.toggleLantern(),Q("The Head Lantern gutters out — refuel it at a Campfire."))))),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const d=this.renderer.camera;d.position.copy(this.player.eye()),d.rotation.order="YXZ",d.rotation.set(this.player.pitch,this.player.yaw,0),this.liftoff&&(d.position.x+=(Math.random()-.5)*.14,d.position.y+=(Math.random()-.5)*.1,d.position.z+=(Math.random()-.5)*.14)}this.liftoffFrame(t);const h=this.raycastTarget();this.renderer.setPlayerLight(this.lanternOn?this.player.eye():null),this.renderer.setHighlight(this.ui||this.cine?null:h?.hit??null);{const d=this.inv.selectedSlot(),f=d?Ct[d.itemId].block:void 0,m=h?.hit,x=h?.face;let y=!1;if(!this.ui&&!this.cine&&f!==void 0&&hn[f].placeable&&m&&x){const v=m.x+x.x,_=m.y+x.y,T=m.z+x.z,w=this.world.get(v,_,T);(w===Mt||Mn(w)&&w!==ze)&&(this.renderer.setGhost(v,_,T,f),y=!0)}y||this.renderer.clearGhost()}D_(this.ui||this.cine?null:this.promptFor(h)),U_(this.ui||this.cine||!h?.hit?null:ov(this.world.get(h.hit.x,h.hit.y,h.hit.z))),k_(this.player.headUnder);for(let d=this.entities.length-1;d>=0;d--){const f=this.entities[d];if(!f.buried&&(f.age=(f.age??0)+t,f.age>=300)){this.renderer.removeEntityMesh(f.id),this.entities.splice(d,1);continue}if(f.fall!==void 0){const x=Math.min(f.fall,14*t);f.y-=x,f.fall-=x,f.fall<=.001&&(f.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(f.id,[f.x,f.y,f.z])}const m=this.renderer.entityMesh(f.id);f.buried&&f.buriedAt&&this.world.get(f.buriedAt[0],f.buriedAt[1],f.buriedAt[2])!==Mt?m&&this.renderer.removeEntityMesh(f.id):m||(f.buried&&f.srcIndex!==void 0&&(this.lesson("canister"),this.revealed.add(`can:${f.srcIndex}`)),this.renderer.addEntityMesh(f.id,[f.x,f.y,f.z],parseInt(Ct[f.itemId].color.slice(1),16)))}for(const d of this.caches){const f=this.renderer.entityMesh(d.id);!f&&d.items.length?(this.renderer.addEntityMesh(d.id,this.cacheMeshPos(d),this.cacheColor(d),.7),d.markerEid=this.renderer.addGroundRing(d.x+.5,d.y,d.z+.5,d.kind==="reward"?14197322:13382434,1.4),d.kind==="death"&&(d.beamEid=this.renderer.addBeam(d.x+.5,d.y,d.z+.5,13382434))):f&&!d.items.length&&(this.renderer.removeEntityMesh(d.id),d.markerEid!==void 0&&(this.renderer.removeEntityMesh(d.markerEid),d.markerEid=void 0),d.beamEid!==void 0&&(this.renderer.removeEntityMesh(d.beamEid),d.beamEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const a=this.survival.surgeCooldown>0;for(const d of["surge-btn","m-surge"]){const f=document.getElementById(d);f&&f.disabled!==a&&(f.disabled=a)}_d(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=qe}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.waterAcc+=t,this.waterAcc>.4&&(this.waterAcc=0,this.world.processWater()),this.audio.setDay(o.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const c=this.prevHp-this.survival.health;if(c>0){const d=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(c>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,md(),(c>=2||d)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),s=Math.floor(t.y),o=Math.floor(t.z);const i=new F(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),l=new F(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),h=(f,m)=>m>0?Math.ceil(f)-f||1:m<0?f-Math.floor(f)||1:1/0,a=new F(h(t.x,i.x)*l.x,h(t.y,i.y)*l.y,h(t.z,i.z)*l.z);let c=new F(n,s,o),d=null;for(let f=0;f<80;f++){const m=this.world.get(n,s,o);if(Mn(m)){if(d||(d={x:n,y:s,z:o}),m===ze)return{hit:{x:n,y:s,z:o},water:d,face:new F(c.x-n,c.y-s,c.z-o)}}else if(m!==Mt&&m!==ze)return{hit:{x:n,y:s,z:o},water:d,face:new F(c.x-n,c.y-s,c.z-o)};if(c.set(n,s,o),a.x<a.y&&a.x<a.z?(n+=i.x,a.x+=l.x):a.y<a.z?(s+=i.y,a.y+=l.y):(o+=i.z,a.z+=l.z),new F(n-t.x,s-t.y,o-t.z).length()>5.5)break}return{hit:null,water:d,face:new F(0,0,0)}}promptFor(t){if(this.nearestTrader())return"E: Trade with the Trader";if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Fe)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===Ke||n===je||n===Ye||n===He)return"E: Open door";if(n===$e||n===Je)return"E: Close door";if(n===Dn)return"E: Save game (respawn point)";if(n===Re||n===Ue)return"E: Craft";if(n===sr)return"E: Forge armour and gear";if(n===Qe)return this.canHeatWater(t.hit.x,t.hit.y,t.hit.z)?"E: Heat the water":this.canFeed(t.hit.x,t.hit.y,t.hit.z)?"E: Feed the fire":"E: Smelt";if(n===zi)return"E: Draw neutral air (37 °C)";if(n===Hi)return this.inv.has("thruster_nozzle",1)?"E: Install Thruster Nozzle":null}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new F(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=this.inv.selectedSlot();if(e&&Ct[e.itemId].instaBreak)return{ok:!0,time:.01};const n=hn[t];if(n.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const s=e?Ct[e.itemId].tool:void 0;return n.tool!==null?!s||s.type!==n.tool?{ok:!1,time:0,why:`need a ${n.tool}`}:s.tier<n.minTier?{ok:!1,time:0,why:`need a tier ${n.minTier} ${n.tool}`}:{ok:!0,time:n.breakTime*Math.pow(.55,s.tier-1)}:{ok:!0,time:n.breakTime*(n.fastTool&&s&&s.type===n.fastTool?Math.pow(.55,s.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const h=this.inv.selectedSlot(),a=h?Ct[h.itemId]:null,c=a?.weapon;e.hp-=c?c.dmg:3+(a?.tool?.tier??0),e.hitFlash=.18,this.audio.thud();const d=e.x-this.player.pos.x,f=e.z-this.player.pos.z,m=Math.max(.2,Math.hypot(d,f)),x=c?1.1:.6;this.mobCanStand(e,e.x+d/m*x,e.z+f/m*x)&&(e.x+=d/m*x,e.z+=f/m*x,e.y=this.mobGround(e,e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:s,y:o,z:i}=n.hit,l=this.world.get(s,o,i);if(!this.breaking||this.breaking.x!==s||this.breaking.y!==o||this.breaking.z!==i){const h=this.canBreakWith(l);if(!h.ok){h.why&&!this.breakMsg&&(this.breakMsg=!0,Q(h.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${h.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:s,y:o,z:i,need:h.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(s,o,i),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const s=this.world.get(t,e,n);if(this.codex.add("b:"+s),this.questBump("mine"),Co(s)||s===$e||s===Je){const i=s===Ye||s===He||s===Je;this.world.set(t,e,n,Mt);for(const l of[-1,1]){const h=this.world.get(t,e+l,n);(Co(h)||h===$e||h===Je)&&this.world.set(t,e+l,n,Mt)}this.giveOrDrop(i?"door_inner":"door",1),this.audio.blockBreak();return}if(s===Dn){this.world.set(t,e,n,Mt),this.beaconMarks=this.beaconMarks.filter(i=>!(i.x===t&&i.y===e&&i.z===n)),Q("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(s===un){this.world.set(t,e,n,Mt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(s===di){this.world.set(t,e,n,Mt),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(s===Vn){this.world.set(t,e,n,Mt),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(s===An||s===Gn||s===yn||s===qn){this.world.set(t,e,n,Mt),this.crops.delete(`${t},${e},${n}`),s===An&&this.giveOrDrop("dune_melon",1),s===yn&&(this.giveOrDrop("wheat",1),this.giveOrDrop("seed_wheat",1)),s===Gn&&this.giveOrDrop("seed_melon",1),s===qn&&this.giveOrDrop("seed_wheat",1),this.audio.blockBreak();return}if(s===ui){this.world.set(t,e,n,Mt),this.giveOrDrop("kindling",1),gt(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(s===fn||s===pn){this.world.set(t,e,n,Mt);const i=this.bedPeer(t,e,n);i&&this.world.set(i[0],i[1],i[2],Mt),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(s===Qe&&this.campCharges.delete(`${t},${e},${n}`),s===Fe){const i=this.chestCluster(t,e,n),l=this.chests.get(_e.chestKey(i))??[];this.chests.delete(_e.chestKey(i)),this.world.set(t,e,n,Mt);const h=i.filter(([d,f,m])=>d!==t||f!==e||m!==n),a=[];for(const d of h){const f=this.chestCluster(d[0],d[1],d[2]),m=_e.chestKey(f);a.some(([x])=>x===m)||a.push([m,this.emptyChestGrid(f.length)])}let c=!1;for(const d of l)a.some(([,f])=>_e.placeSlotFree(f,d))||(this.dropEntity(d.itemId,1,2,d.charges),c=!0);for(const[d,f]of a)f.slots.length&&this.chests.set(d,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),c&&Q("The remaining chests were full — some contents fell to the sand.");return}if(s===es){this.world.set(t,e,n,Mt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(s===Re||s===Ue){const i=this.benchPeer(t,e,n);this.world.set(t,e,n,Mt),i&&this.world.set(i[0],i[1],i[2],Mt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(s===Un||s===Qe||s===Ji)&&this.renderer.removePointLight(t,e,n),s===Fi&&this.breakers.delete(`${t},${e},${n}`),this.world.set(t,e,n,Mt);const o=this.blockItemId(s);o&&this.giveOrDrop(o,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),s=Math.floor(e),o=Math.max(30,Math.round(te(this.seed,n,s))+8);for(let i=o;i>=0;i--){const l=this.world.get(n,i,s);if(l!==Mt&&hn[l].solid)return i+1}return-1}mobGround(t,e,n){if(t.kind!=="scorpion"&&t.kind!=="wurm")return this.mobSurface(e,n);const s=Math.floor(e),o=Math.floor(n);for(let i=Math.floor(t.y);i>=0;i--){const l=this.world.get(s,i,o);if(l!==Mt&&hn[l].solid)return i+1}return-1}mobCanStand(t,e,n){const s=this.mobGround(t,e,n);return s<0||s>t.y+1.01?!1:this.world.get(Math.floor(e),s,Math.floor(n))===Mt}spawnMob(t,e,n,s){const o=M_(t);o.group.position.set(e,n,s),o.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(o.group);const i={kind:t,hp:yr[t].hp,x:e,y:n,z:s,homeX:e,homeZ:s,yaw:o.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,flyBase:5+Math.random()*4,bank:Math.random()<.5?-1:1,vis:o};t==="vulture"&&(i.y+=i.flyBase,o.group.position.y=i.y),this.mobs.push(i)}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(n=>n!==t);const e=yr[t.kind];e.drops.forEach((n,s)=>{const o=e.dropChance?.[s]??1;(o>=1||Math.random()<o)&&this.giveOrDrop(n.itemId,n.count)}),Q(`${e.name} killed.`)}topUpMobs(){const t={snake:4,rat:8,scorpion:4,wurm:1,trader:0,vulture:3,tortoise:2,fennec:2},e={snake:0,rat:0,scorpion:0,wurm:0,trader:0,vulture:0,tortoise:0,fennec:0},n=this.player.pos;this.mobs=this.mobs.filter(o=>o.kind!=="trader"&&Math.abs(o.x-n.x)+Math.abs(o.z-n.z)>190?(this.renderer.removeSceneObject(o.vis.group),!1):!0);for(const o of this.mobs)e[o.kind]++;const s=this.player.pos;for(const o of["snake","rat","scorpion","wurm","vulture","tortoise","fennec"]){const i=o==="scorpion"||o==="wurm";if(!(i&&s.y>27))for(;e[o]<t[o];){e[o]++;const l=Math.random()*Math.PI*2,h=30+Math.random()*30,a=Math.floor(s.x+Math.cos(l)*h)+.5,c=Math.floor(s.z+Math.sin(l)*h)+.5;if(i){const d=o==="wurm"?5:8,f=o==="wurm"?16:24,m=this.caveSpot(a,c,d,f);if(m<0)continue;this.spawnMob(o,a,m,c)}else{if(Math.hypot(a,c)<24||this.beaconMarks.some(m=>Math.hypot(m.x+.5-a,m.z+.5-c)<16))continue;const d=Cr(this.seed).nearestCamp(a,c);if(d&&Math.hypot(d.x-a,d.z-c)<34)continue;const f=this.mobSurface(a,c);if(f<=1||this.world.get(Math.floor(a),f,Math.floor(c))!==Mt||this.world.get(Math.floor(a),f+1,Math.floor(c))!==Mt)continue;this.spawnMob(o,a,f,c)}}}this.ensureTraders()}ensureTraders(){const t=Cr(this.seed),e=this.player.pos,n=110,s=Math.floor((e.x-n)/ve),o=Math.floor((e.x+n)/ve),i=Math.floor((e.z-n)/ve),l=Math.floor((e.z+n)/ve);for(let h=s;h<=o;h++)for(let a=i;a<=l;a++){if(!t.campAt(h,a))continue;const c=t.campCenter(h,a);if(Math.hypot(c.x-e.x,c.z-e.z)>n)continue;const d=h+","+a,f=this.traderAt.get(d);if(f&&this.mobs.includes(f))continue;const m=Tv(c),x=this.mobSurface(m.x,m.z);x<=1||(this.spawnMob("trader",m.x,x,m.z),this.traderAt.set(d,this.mobs[this.mobs.length-1]))}if(this.traderAt.size)for(const[h,a]of this.traderAt)this.mobs.includes(a)||this.traderAt.delete(h)}nearestTrader(){const t=this.player.pos;let e=null,n=3.6;for(const s of this.mobs){if(s.kind!=="trader")continue;const o=Math.hypot(s.x-t.x,s.z-t.z);o<n&&(n=o,e=s)}return e}openTrade(t){const e=Cr(this.seed).nearestCamp(t.x,t.z);this.tradeCamp=e?{x:e.x,z:e.z}:{x:t.x,z:t.z},this.tradeOffers=b_(this.seed,this.tradeCamp.x,this.tradeCamp.z,this.dayNumber()),this.ui="trade",this.unlockPointer(),this.renderTrade(),document.getElementById("ui-trade").classList.remove("hidden"),this.audio.pickup()}renderTrade(){const t=document.getElementById("trade-offers");t.innerHTML="";for(let e=0;e<this.tradeOffers.length;e++){const n=this.tradeOffers[e],s=document.createElement("div");s.className="trade-row";const o=l=>l.map(h=>`<span class="trade-item">${Ct[h.itemId].name}${h.count>1?" ×"+h.count:""}</span>`).join(" + ");s.innerHTML=`<span class="trade-side want">${o(n.want)}</span><span class="trade-arrow">→</span><span class="trade-side give">${o(n.give)}</span>`;const i=document.createElement("button");i.textContent="Trade",i.onclick=()=>this.trade(e),s.appendChild(i),t.appendChild(s)}document.getElementById("trade-note").textContent=`Day ${this.dayNumber()} — the Trader restocks the table at every dawn.`}trade(t){if(this.ui!=="trade")return;const e=this.tradeOffers[t];for(const n of e.want)if(!this.inv.has(n.itemId,n.count)){Q(`You don't have ${n.count} × ${Ct[n.itemId].name}.`),this.audio.error();return}for(const n of e.want)this.inv.removeItem(n.itemId,n.count);for(const n of e.give)this.giveOrDrop(n.itemId,n.count);Q("Traded."),this.audio.drink(),this.renderTrade()}caveSpot(t,e,n,s){const o=Math.floor(t),i=Math.floor(e);for(let l=s;l>=n;l--){if(this.world.get(o,l,i)!==Mt||this.world.get(o,l-1,i)===Mt||this.world.get(o,l+1,i)!==Mt)continue;let h=-1;for(let a=1;a<=3;a++)if(dn(this.world.get(o,l+a,i))){h=a;break}if(!(h<0))return l}return-1}meleeMob(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),s=n?Ct[n.itemId].weapon?.reach??3.2:3.2,o=this.raycastTarget(),i=o?.hit?Math.hypot(o.hit.x+.5-t.x,o.hit.y+.5-t.y,o.hit.z+.5-t.z):1/0;let l=null,h=1/0;for(const a of this.mobs){if(a.kind==="trader")continue;const c=yr[a.kind],d=a.x-t.x,f=a.y+c.height/2-t.y,m=a.z-t.z,x=d*e.x+f*e.y+m*e.z;if(x<.2||x>s||x>i)continue;const y=t.x+e.x*x-a.x,v=t.y+e.y*x-(a.y+c.height/2),_=t.z+e.z*x-a.z;y*y+v*v+_*_>(c.hitR+.3)*(c.hitR+.3)||x<h&&(h=x,l=a)}return l}columnClear(t,e,n,s){const o=Math.floor(t),i=Math.floor(e);for(let l=Math.floor(n);l<=Math.floor(s);l++){const h=this.world.get(o,l,i);if(h!==Mt&&h!==ze)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const s of this.mobs.slice()){const o=yr[s.kind];s.hitFlash&&(s.hitFlash=Math.max(0,s.hitFlash-t));const i=(s.hitFlash??0)>0;if(i!==(s.flashOn??!1)&&(s.vis.setFlash(i),s.flashOn=i),s.kind==="trader"){let v=0;if(this.ui==="trade"&&this.tradeCamp&&Math.hypot(s.x-this.tradeCamp.x,s.z-this.tradeCamp.z)<10)s.yaw=Math.atan2(e.x-s.x,e.z-s.z);else{const _=s.x-s.homeX,T=s.z-s.homeZ,w=Math.hypot(_,T);if(s.wanderT-=t,s.wanderT<=0&&(s.wanderT=3+Math.random()*5,s.wanderYaw=Math.random()*Math.PI*2,s.wanderOn=Math.random()<.5),s.wanderOn||w>4.5){const S=w>4.5?Math.atan2(-_,-T):s.wanderYaw,b=Math.sin(S)*o.speed*.45,I=Math.cos(S)*o.speed*.45;s.yaw=S;const R=s.x+b*t,p=s.z+I*t;this.mobCanStand(s,R,p)&&Math.hypot(R-s.homeX,p-s.homeZ)<=5?(s.x=R,s.z=p,v=1):s.wanderYaw=s.yaw=Math.atan2(s.homeX-s.x,s.homeZ-s.z)}}s.y=this.mobGround(s,s.x,s.z),s.vis.group.position.set(s.x,s.y,s.z),s.vis.group.rotation.y=s.yaw,s.vis.animate(n,v);continue}if(s.kind==="vulture"){this.vultureFrame(s,e,n,t);continue}const l=e.x-s.x,h=e.z-s.z,a=Math.hypot(l,h);if(a>110){this.renderer.removeSceneObject(s.vis.group),this.mobs=this.mobs.filter(v=>v!==s);continue}let c=0,d=0;const f=this.columnClear(s.x,s.z,s.y+.2,e.y+1.4),m=o.aggroR,x=o.fleeR;if(m>0&&a<m&&a>.01&&f){if(c=l/a*o.speed,d=h/a*o.speed,s.yaw=Math.atan2(c,d),a<1.2+o.hitR&&s.biteCd<=0){s.biteCd=o.biteCd;const v=1-(this.equip.body?Ct[this.equip.body.itemId].armor??0:0);this.survival.hurt(o.biteDmg*v,`${o.name.toLowerCase()} bite`),Q(v<1?`A ${o.name.toLowerCase()} bites you — the armour soaks some of it.`:`A ${o.name.toLowerCase()} bites you!`)}}else x>0&&a<x&&a>.01?(c=-l/a*o.speed,d=-h/a*o.speed,s.yaw=Math.atan2(c,d)):(s.wanderT-=t,s.wanderT<=0&&(s.wanderT=2+Math.random()*4,s.wanderYaw=Math.random()*Math.PI*2,s.wanderOn=Math.random()<.55),s.wanderOn&&(c=Math.sin(s.wanderYaw)*o.speed*.35,d=Math.cos(s.wanderYaw)*o.speed*.35,s.yaw=s.wanderYaw));s.biteCd-=t;let y=0;if(c!==0||d!==0){const v=s.x+c*t,_=s.z+d*t;this.mobCanStand(s,v,_)?(s.x=v,s.z=_,y=1):s.wanderYaw=s.yaw=Math.random()*Math.PI*2}s.y=this.mobGround(s,s.x,s.z),s.vis.group.position.set(s.x,s.y,s.z),s.vis.group.rotation.y=s.yaw,s.vis.animate(n,y)}}vultureFrame(t,e,n,s){const o=yr[t.kind],i=e.x-t.x,l=e.z-t.z,h=Math.hypot(i,l);if(h>110){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(v=>v!==t);return}let a=0,c=0,d=0,f;const m=this.mobSurface(t.x,t.z);if(this.survival.health<60&&h<14&&h>.01){if(f=this.mobGround(t,t.x,t.z),a=i/h*o.speed,c=l/h*o.speed,t.yaw=Math.atan2(a,c),h<1.2+o.hitR&&t.biteCd<=0&&t.y<=f+.6){t.biteCd=o.biteCd;const v=1-(this.equip.body?Ct[this.equip.body.itemId].armor??0:0);this.survival.hurt(o.biteDmg*v,"sand vulture strike"),Q(v<1?"A sand vulture strikes you — the armour soaks some of it.":"A sand vulture strikes!")}}else h<o.fleeR&&h>.01?(f=m+t.flyBase+2,a=-i/h*o.speed,c=-l/h*o.speed,t.yaw=Math.atan2(a,c)):(t.wanderT-=s,t.wanderT<=0&&(t.wanderT=6+Math.random()*6,t.bank=Math.random()<.5?-1:1),t.wanderYaw+=t.bank*.45*s,a=Math.sin(t.wanderYaw)*o.speed*.6,c=Math.cos(t.wanderYaw)*o.speed*.6,t.yaw=t.wanderYaw,f=m+t.flyBase+Math.sin(n*.13+t.homeX*.7)*1.2,d=t.bank);if(t.biteCd-=s,a!==0||c!==0){const v=t.x+a*s,_=t.z+c*s;this.mobSurface(v,_)+1.8<t.y?(t.x=v,t.z=_):(t.bank=-t.bank,t.wanderYaw=t.yaw=t.yaw+d*.4)}const x=f-t.y;t.y+=Math.max(-2.5*s,Math.min(2.2*s,x)),t.vis.group.position.set(t.x,t.y,t.z),t.vis.group.rotation.y=t.yaw;const y=d*.3;t.vis.group.rotation.z+=(y-t.vis.group.rotation.z)*Math.min(1,s*3),t.vis.animate(n,a!==0||c!==0?1:0)}gridFits(t,e){const n=new Ya;n.slots=[],n.w=t,n.h=e;for(const s of this.inv.slots)if(!_e.placeSlotFree(n,{...s,x:0,y:0}))return!1;return!0}bagSize(){return(this.equip.backpack?Ct[this.equip.backpack.itemId].bag:null)??{w:5,h:4,kg:0}}applyEquip(){const t=this.bagSize();for((this.inv.w!==t.w||this.inv.h!==t.h)&&this.inv.setBackpack(t.w,t.h,t.kg),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0);this.inv.droppedOnResize.length;){const e=this.inv.droppedOnResize.shift();this.dropEntity(e.itemId,1,2,e.charges)}this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=Ct[t.itemId];if(!e.equip)return;const n=e.equip,s=this.equip[n];if(s&&!this.inv.addSlot(s)){Q("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),n==="light"&&(this.lanternOn=!1),(n==="light"||n==="regulator")&&t.charges===void 0&&(t.charges=0),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),Q(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(!e)return;const n=t==="backpack"?{w:5,h:4}:this.bagSize();if(!this.gridFits(n.w,n.h)){Q("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,t==="light"&&(this.lanternOn=!1),this.applyEquip(),this.inv.addSlot(e),this.audio.place(),Q(`${Ct[e.itemId].name} taken off.`),this.renderInv()}benchPeer(t,e,n){for(const[s,o]of[[1,0],[-1,0],[0,1],[0,-1]]){const i=this.world.get(t+s,e,n+o);if(i===Re||i===Ue)return[t+s,e,n+o]}return null}bedPeer(t,e,n){for(const[s,o]of[[1,0],[-1,0],[0,1],[0,-1]]){const i=this.world.get(t+s,e,n+o);if(i===fn||i===pn)return[t+s,e,n+o]}return null}blockItemId(t){return si[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),Q(`No room: dropped ${Ct[t].name}`))}dropHeld(){const t=this.inv.selectedSlot();t&&(this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.dropEntity(t.itemId,1,1,t.charges),this.renderHeld(),this.audio.place())}dropEntity(t,e,n=0,s){const o=this.player.pos,i=-Math.sin(this.player.yaw),l=-Math.cos(this.player.yaw),h=(f,m)=>{const x=Math.floor(o.x+f),y=Math.floor(o.z+m);return!dn(this.world.get(x,Math.floor(o.y),y))&&!dn(this.world.get(x,Math.floor(o.y+1),y))},a=[[i*1.8,l*1.8],[-i*1.8,-l*1.8],[l*1.8,-i*1.8],[-l*1.8,i*1.8],[0,0]],[c,d]=a.find(([f,m])=>h(f,m))??[0,0];for(let f=0;f<e;f++){const m=f===0?0:.3*Math.sin(f*2.4),x=f===0?0:.3*Math.cos(f*2.4);this.entities.push({id:this.entitySeq++,x:o.x+c+m,y:o.y+.35,z:o.z+d+x,itemId:t,charges:s,repickAt:c===0&&d===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=Ct[t.itemId];if(e.block===void 0){Q("Not a placeable block"),this.audio.error();return}if(!hn[e.block].placeable){Q(`${e.name} is raw material, not a block to place.`),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const s=n.hit.x+n.face.x,o=n.hit.y+n.face.y,i=n.hit.z+n.face.z,l=this.world.get(s,o,i);if(l!==Mt&&!(Mn(l)&&l!==ze))return;if(dn(e.block)){const m=this.player.pos;if(s+1>m.x-.3&&s<m.x+.3&&i+1>m.z-.3&&i<m.z+.3&&o+1>m.y&&o<m.y+1.8)return}let h=[];if(e.block===Fe){const m=new Set;for(const[x,y,v]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(s+x,o+y,i+v)!==Fe)continue;const _=_e.chestKey(this.chestCluster(s+x,o+y,i+v));m.has(_)||(m.add(_),h.push(...this.chests.get(_)??[]),this.chests.delete(_))}}let a=null;const c=(m,x,y)=>dn(this.world.get(m,x-1,y)),d=(m,x,y)=>{const v=this.player.pos;return m+1>v.x-.3&&m<v.x+.3&&y+1>v.z-.3&&y<v.z+.3&&x+1>v.y&&x<v.y+1.8};if(e.block===Re){const[m,x]=xd[(t.blockRot??0)&3],y=s+m,v=i+x;if(this.world.get(y,o,v)!==Mt){Q("The Bench's far half has no room there — press R to turn it."),this.audio.error();return}if(!c(y,o,v)){Q("The Bench's far half needs solid ground under it."),this.audio.error();return}if(d(y,o,v)){Q("Step out of the Bench's footprint first."),this.audio.error();return}a=[y,o,v]}let f=null;if(e.block===fn){const[m,x]=xd[(t.blockRot??0)&3],y=s+m,v=i+x;if(this.world.get(y,o,v)!==Mt){Q("The Bed needs an empty block for its pillow half — press R to turn it."),this.audio.error();return}if(!c(s,o,i)||!c(y,o,v)){Q("The Bed needs solid ground under both halves."),this.audio.error();return}if(d(y,o,v)){Q("Step off the Bed's footprint first."),this.audio.error();return}f=[y,o,v]}if((e.block===Ke||e.block===Ye)&&!c(s,o,i)){Q("A Door needs solid ground under it."),this.audio.error();return}if(e.block===Gn||e.block===qn||e.block===un||e.block===Vn){const m=this.world.get(s,o-1,i);if(!(e.block===Vn?m===bn||m===Nn||m===ii:m===Nn||e.block===un&&(m===ni||m===Sn||m===bn))){Q(e.block===Vn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(s,o,i,e.block),t.blockRot&&Yh(e.block)&&this.world.setRot(s,o,i,t.blockRot),a&&(this.world.set(a[0],a[1],a[2],Ue),t.blockRot&&this.world.setRot(a[0],a[1],a[2],t.blockRot)),e.block===Ke&&this.world.get(s,o+1,i)===Mt&&this.world.set(s,o+1,i,je),e.block===Ye&&this.world.get(s,o+1,i)===Mt&&this.world.set(s,o+1,i,He),f&&(this.world.set(f[0],f[1],f[2],pn),t.blockRot&&this.world.setRot(f[0],f[1],f[2],t.blockRot)),(e.block===Gn||e.block===qn)&&(this.crops.set(`${s},${o},${i}`,0),this.tut?.notify("plant")),e.block===Vn&&(this.trees.set(`${s},${o},${i}`,0),this.tut?.notify("plant"),Q("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===es)if(this.beaconAdjacent(s,o,i)){const m=Er(this.quests);m&&m.kind==="finish"&&!this.tut?this.questBump("finish"):Q("The Core hums next to the beacon. Power runs — now wake the wingtip engines.")}else Q("The relay needs the Core right next to a Save Beacon.");e.block===Un?this.renderer.addPointLight(s,o,i,"lamp"):e.block===Ji&&this.renderer.addPointLight(s,o,i,"fire"),e.block===Fi&&this.breakers.add(`${s},${o},${i}`),e.block===Fe&&this.linkChests(s,o,i,h),this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}beaconAdjacent(t,e,n){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([s,o,i])=>this.world.get(t+s,e+o,n+i)===Dn)}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget(),e=this.nearestTrader();if(e){this.openTrade(e);return}if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Fe){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const n=this.nearestCache();if(n){this.openCacheId=n.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(this.inv.selectedSlot()?.itemId==="surveyor_pin"){this.plantPin();return}if(t){if(t.hit){const{x:s,y:o,z:i}=t.hit,l=this.world.get(s,o,i);if(l===An||l===yn||l===di){this.harvest(s,o,i,l);return}if(l===fn||l===pn){this.sleep();return}if(Co(l)||l===$e||l===Je){const h=l===Ye||l===He||l===Je,a=h?Je:$e,c=m=>h?m===Ye||m===He:m===Ke||m===je,d=h?Ye:Ke,f=h?He:je;if(l===a){const m=this.player.pos;if(m.x>s-.2&&m.x<s+1.2&&m.z>i-.2&&m.z<i+1.2){Q("Step out of the doorway first."),this.audio.error();return}this.world.get(s,o-1,i)===a?(this.world.set(s,o,i,f),this.world.set(s,o-1,i,d)):this.world.get(s,o+1,i)===a?(this.world.set(s,o,i,d),this.world.set(s,o+1,i,f)):this.world.set(s,o,i,c(this.world.get(s,o+1,i))?f:d)}else{const m=dn(this.world.get(s-1,o,i))||dn(this.world.get(s+1,o,i)),x=this.player.pos,y=m?x.z-(i+.5):x.x-(s+.5),v=s+","+i;Math.abs(y)>.35?this.world.doorSwing.set(v,y>0?-1:1):this.world.doorSwing.delete(v),this.world.set(s,o,i,a);for(const _ of[-1,1])c(this.world.get(s,o+_,i))&&this.world.set(s,o+_,i,a);this.tut?.notify("door")}this.audio.door();return}if(l===Dn){this.tut?.notify("save"),this.beaconMarks.some(h=>h.x===s&&h.y===o&&h.z===i)||this.beaconMarks.push({x:s,y:o,z:i}),this.audio.savePing(),this.saveNow()?Q("Saved. Death will respawn you at this beacon."):Q("This world is not saved — the beacon only marks it.");return}if(l===Re||l===Ue){this.openStation=[s,o,i],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(l===sr){this.openStation=[s,o,i],this.ui="bench",this.unlockPointer(),this.renderCraft("armory");return}if(l===Qe){if(this.canHeatWater(s,o,i)){this.heatWater(s,o,i);return}if(this.canFeed(s,o,i)){this.feed(s,o,i);return}this.openStation=[s,o,i],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(l===Hi){if(!this.inv.has("thruster_nozzle",1)){this.audio.error(),Q("A dead wingtip engine. It needs a Thruster Nozzle — Cobalt from the deep Caves.");return}this.inv.removeItem("thruster_nozzle",1),this.world.set(s,o,i,Ji),this.renderer.addPointLight(s,o,i,"fire"),this.questBump("thruster"),this.audio.door(),this.audio.win(),Q("Nozzle seated. The engine coughs, catches, holds."),!this.liftoff&&this.thrustersAllLit()&&this.startLiftoff();return}if(l===zi){let h=null;for(const[a,c,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const f=this.world.roomInfo(s+a,o+c,i+d);if(f.size>0){h=f;break}}h&&h.sealed&&h.regulators*Ir>=h.size?(this.survival.body=37,this.audio.drink(),Q("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),Q("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.selectedSlot()?.itemId==="bucket"){Q("E won't fill it — press Q or right-click with the Bucket to scoop."),this.audio.error();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),Q(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):Q("You need an empty Water Canister.")}}}harvest(t,e,n,s){s===An?(this.world.set(t,e,n,Gn),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(gt(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),Q("Dune Melon picked — the plant keeps growing.")):s===yn?(this.world.set(t,e,n,Nn),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),Q("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,un),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),Q("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<qe){const n=Math.ceil((qe-t)/60);Q(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=qe/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),Q("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z);let o=0;for(let i=-6;i<=6;i++)for(let l=-6;l<=6;l++)for(let h=-2;h<=2;h++){if(this.world.get(e+i,n+h,s+l)!==Qe||(this.campCharges.get(`${e+i},${n+h},${s+l}`)??0)<=0)continue;const a=Math.max(Math.abs(i),Math.abs(l));o=Math.max(o,a<=4?18:9)}return o}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,s]of this.crops){const[o,i,l]=n.split(",").map(Number),h=this.world.get(o,i,l);if(h!==Gn&&h!==An&&h!==qn&&h!==yn){this.crops.delete(n);continue}if(h===An||h===yn)continue;const a=h===Gn;let c=!1;t:for(let m=-4;m<=4;m++)for(let x=-4;x<=4;x++)for(let y=-2;y<=1;y++)if(Mn(this.world.get(o+m,i+y,l+x))){c=!0;break t}const d=this.survival.airTempAt(this.world,o,i,l,this.timeSec),f=a?d>=22&&d<=45:d>=2&&d<=42;if(c&&f){const m=s+e;this.crops.set(n,m),m>=(a?60:90)&&this.world.set(o,i,l,a?An:yn)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){Q("Aim at water."),this.audio.error();return}const{x:e,y:n,z:s}=t.water;if(this.world.get(e,n,s)!==ze){Q("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){Q("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,s,Mt),this.audio.drink(),Q("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,s=t.hit.z+t.face.z;if(this.world.get(e,n,s)!==Mt){Q("Pour into open space."),this.audio.error();return}this.world.set(e,n,s,ze),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),Q("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,s]of this.trees){const[o,i,l]=n.split(",").map(Number),h=this.world.get(o,i,l);if(h!==Vn&&h!==Rn){this.trees.delete(n);continue}let a=!1;t:for(let m=-6;m<=6;m++)for(let x=-6;x<=6;x++)for(let y=-3;y<=3;y++)if(Mn(this.world.get(o+m,i+y,l+x))){a=!0;break t}if(!a)continue;const c=Math.min(480,s+e);this.trees.set(n,c);const d=c>=480?3:c>=270?2:c>=120?1:0;if(d===0)continue;let f=this.treePlanCache.get(n);if(!f){let m=Math.floor(gt(o+7*l,i,this.seed+55)*1e9)+1;f=lu(o,i,l,()=>(m=m*1103515245+12345&2147483647,m/2147483647)),this.treePlanCache.set(n,f)}for(const m of f){if(m.stage>d)continue;const x=this.world.get(m.x,m.y,m.z);(x===Mt||x===Vn)&&this.world.set(m.x,m.y,m.z,m.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z);for(let o=-1;o<=1;o++)for(let i=-1;i<=1;i++)for(let l=0;l<=2;l++){const h=this.world.get(e+o,n+l,s+i);if(!(h!==un&&h!==di)&&!(Math.abs(t.x-(e+o+.5))>1.15||Math.abs(t.z-(s+i+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),Q("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){Q("Select an item first."),this.audio.error();return}const e=Ct[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(t.itemId==="hot_water_pouch"){this.inv.removeItem(t.itemId,1),this.survival.body=Math.min(this.survival.body+10,na),this.giveOrDrop("canister_empty",1),this.audio.drink(),Q("Hot water, straight down: a +10 °C warmth rolls through you. The empty canister comes back."),this.renderHeld(),this.renderInv();return}if(t.itemId==="tracker"){this.useTracker();return}if(t.itemId==="bucket"){this.bucketScoop();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:s,y:o,z:i}=n.hit,l=this.world.get(s,o,i);if(n.face.y===1&&(l===bn||l===ii)){this.world.set(s,o,i,Nn),this.audio.place(),Q("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(l===ni||l===Sn||l===rs)){Q("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}Q(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),Q(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){Q("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&Q("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}canHeatWater(t,e,n){return this.inv.selectedSlot()?.itemId==="canister_full"&&(this.campCharges.get(`${t},${e},${n}`)??0)>0}canFeed(t,e,n){const s=this.inv.selectedSlot();return!!s&&(s.itemId==="wood_log"||s.itemId==="kindling")}feed(t,e,n){const s=this.inv.selectedSlot();if(!s||!this.canFeed(t,e,n))return;const o=`${s.itemId==="wood_log"?"log":"kindling"}`,i=s.itemId==="wood_log"?2:.5;this.inv.removeItem(s.itemId,1);const l=`${t},${e},${n}`,h=(this.campCharges.get(l)??0)+i;this.campCharges.set(l,h),this.syncFire(t,e,n),this.audio.place(),this.renderHeld(),Q(h>0?`The ${o} catches — the fire breathes again.`:`The ${o} smoulders; the fire needs more.`)}syncFire(t,e,n){const s=(this.campCharges.get(`${t},${e},${n}`)??0)>0;s&&!this.renderer.hasPointLight(t,e,n)?this.renderer.addPointLight(t,e,n,"fire"):!s&&this.renderer.hasPointLight(t,e,n)&&this.renderer.removePointLight(t,e,n),this.world.dirty.add(Math.floor(t/G)+","+Math.floor(n/G))}heatWater(t,e,n){const s=`${t},${e},${n}`,o=this.campCharges.get(s)??0;if(!this.canHeatWater(t,e,n)){this.audio.error();return}this.campCharges.set(s,o-1),this.syncFire(t,e,n),this.inv.removeItem("canister_full",1),this.giveOrDrop("hot_water_pouch",1),this.audio.drink(),Q("The canister hisses over the coals — sealed hot for the cold hours."),this.renderHeld()}toggleLantern(){const t=this.equip.light;if(!t){Q("Nothing in your Light slot. A Head Lantern lights the dark."),this.audio.error();return}if(this.lanternOn){this.lanternOn=!1;return}if((t.charges??0)<=0){Q("The lantern is dry — press E at a Campfire to refuel it."),this.audio.error();return}this.lanternOn=!0,this.lanternAcc=0,Q("Head Lantern on. T puts it out.")}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){Q("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){Q("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),Q("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}stormShieldTick(){const t=Math.floor(this.timeSec*2);if(t===this.breakerTick)return;this.breakerTick=t;const e=this.player.pos;let n=null,s=1/0;for(const o of this.breakers){const[i,l,h]=o.split(",").map(Number),a=Math.hypot(e.x-(i+.5),e.y+.9-(l+.5),e.z-(h+.5));a<=iu&&a<s&&(s=a,n=[i,l,h])}this.stormShieldOn=n!==null,this.renderer.setStormDome(n?[n[0]+.5,n[1]+.5,n[2]+.5]:null)}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z);let i=this.world.roomInfo(n,s,o);if(i.size===0)t:for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)for(let d=-1;d<=1;d++){const f=this.world.roomInfo(n+a,s+c,o+d);if(f.size>0){i=f;break t}}const l=i.sealed&&i.regulators>0&&i.regulators*Ir>=i.size;this.regActive=l;const h=new Set(l?i.regCells:[]);for(const[a,c]of this.regGlow){if(h.has(a))continue;this.renderer.removeEntityMesh(c);const[d,f,m]=a.split(",").map(Number);this.renderer.removePointLight(d,f,m),this.regGlow.delete(a)}for(const a of h){if(this.regGlow.has(a))continue;const[c,d,f]=a.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new ie({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,x=this.renderer.addEntityMesh(m,[c+.5,d+.5,f+.5],9427199,1.03);x.material=this.regGlowMat,this.renderer.addPointLight(c,d,f,"cool"),this.regGlow.set(a,m)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==Mt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}t.distanceTo(new F(n.x,n.y,n.z))<1.3&&this.inv.addSlot({itemId:n.itemId,x:0,y:0,charges:n.charges})&&(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup())}}}static SHIP_IDS=new Set([Ge,ln,Yn,Kn,Ps,Ke,je,$e,Ye,He,Je,Un,Dn,Re,Ue,zi,es,fn,pn]);liftoff=null;thrustersAllLit(){let t=0;for(let e=29;e<=37;e++)for(let n=-8;n<=6;n++)for(let s=-13;s<=13;s++){const o=this.world.get(n,e,s);if(o===Hi)return!1;o===Ji&&t++}return t>=4}startLiftoff(){const t=[];for(let n=37;n>=29;n--){const s=[];for(let o=-8;o<=6;o++)for(let i=-13;i<=13;i++){const l=this.world.get(o,n,i);_e.SHIP_IDS.has(l)&&s.push([o,n,i,l])}s.length&&t.push(s)}this.liftoff={t:0,rows:t,step:0,restored:0},this.ui="liftoff",document.pointerLockElement&&document.exitPointerLock();const e=document.getElementById("lift-fx");e.classList.remove("hidden"),e.textContent="ENGINE IGNITION",Q("The whole Ship shudders. Every plate rattles at once."),this.audio.win()}liftoffFrame(t){const e=this.liftoff;if(!e)return;e.t+=t;const n=2.2/e.rows.length,s=2.4,o=4.6,i=o+2.2,l=document.getElementById("lift-fx");for(l.textContent=e.t<s?"LIFT-OFF":e.t<o?"RESCUE SIGNAL LIVE":"TOUCHDOWN";e.step<e.rows.length&&e.t>=e.step*n;){for(const[h,a,c]of e.rows[e.step])this.world.set(h,a,c,Mt);this.audio.door(),e.step++}if(e.t>o)for(;e.restored<e.rows.length&&e.t-o>=e.restored*n;){for(const[h,a,c,d]of e.rows[e.rows.length-1-e.restored])this.world.set(h,a,c,d);this.audio.door(),e.restored++}e.t>=i+.4&&(this.liftoff=null,this.ui=null,l.classList.add("hidden"),this.saveNow(!0),this.win())}win(){this.won||(this.won=!0,fd(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`The Ship lifts off. All four engines burn. Survived ${this.scoreDays().toFixed(1)} days. Best: ${Or().toFixed(1)} days.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:1,charges:t.charges})),...["backpack","head","body","regulator","light"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1,charges:t.charges}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null,regulator:null,light:null},this.lanternOn=!1,fd(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${Or().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/qe}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===Dn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){Q("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache","ui-trade"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){_d(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=qe})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;invCraft=!1;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const f=Ct[this.temp.itemId];e.classList.add("filled"),e.style.background=f.color,e.style.backgroundImage=`url(${Fo(this.temp.itemId,this.temp.charges)[0]??""})`,e.onmousedown=m=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.temp&&this.startTempDrag(m)},n.textContent=`Drop ${f.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,1,1,this.temp.charges),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.onmousedown=f=>{Date.now()-this.lastTouchTs<700&&this.tapTemp()},n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const f of["backpack","head","body","regulator","light"]){const m=document.getElementById("eq-"+f),x=this.equip[f];if(x){const y=Ct[x.itemId];m.classList.add("filled"),m.style.background=y.color,m.style.backgroundImage=`url(${Fo(x.itemId,x.charges)[0]??""})`;const v=x.charges;m.textContent=v!==void 0&&v>0?String(v):"",m.title=v!==void 0?`Click to take off the ${y.name} — ${v} charge${v===1?"":"s"} left`:`Click to take off the ${y.name}`,m.onclick=()=>this.unequipSlot(f)}else m.classList.remove("filled"),m.style.background="#23262e",m.style.backgroundImage="",m.textContent="",m.title="",m.onclick=()=>{const y=this.inv.selectedSlot();y&&Ct[y.itemId].equip===f?this.equipItem():y&&(Q(`The ${Ct[y.itemId].name} does not fit the ${f} slot.`),this.audio.error())}}const s=document.getElementById("inv-side");this.renderCraftTab();const o=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,i=o.selectedSlot(),l=this.temp??i,h=this.inv.weight()+(this.temp?Ct[this.temp.itemId].mass:0),a=this.inv.weightLimit(),c=l?Ln(l):null;s.innerHTML="";const d=document.createElement("div");if(d.id="side-text",d.textContent=(l?`${Ct[l.itemId].name} — ${Ct[l.itemId].desc}`:"Click an item to inspect it; drag to move it.")+` Weight ${h.toFixed(1)} / ${a} kg`,s.appendChild(d),l&&c&&c.w!==c.h){const f=document.createElement("button");f.textContent="Rotate",f.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:o.rotate(i)||(Q("No room to rotate."),this.audio.error()),this.renderInv()},s.appendChild(f)}if(i){const f=Ct[i.itemId];if(f.equip){const m=document.createElement("button");m.textContent=`Equip (${f.equip} slot)`,m.onclick=()=>this.equipItem(),s.appendChild(m)}if(i.itemId==="coolant_cell"&&this.equip.regulator){const m=this.equip.regulator,x=(m.charges??0)>=3,y=document.createElement("button");y.textContent=x?"Regulator holds 3 cells already — that's six days of neutral air":"Load Coolant Cell into the Regulator (each lasts 2 game days)",y.disabled=x||!this.inv.has("coolant_cell",1),y.onclick=()=>{x||!this.inv.has("coolant_cell",1)||(this.inv.removeItem("coolant_cell",1),m.charges=(m.charges??0)+1,this.audio.pickup(),Q(`Coolant Cell loaded — ${m.charges} charge${m.charges===1?"":"s"} running.`),this.renderInv())},s.appendChild(y)}}if(i)if(o===this.chestInv){const f=document.createElement("button");f.textContent="Move to pack",f.onclick=()=>{const m=o.slots.indexOf(i);o.slots.splice(m,1),_e.placeSlotFree(this.inv,i)||(o.slots.splice(m,0,i),Q("No room in your pack."),this.audio.error()),this.renderInv()},s.appendChild(f)}else{const f=document.createElement("button");f.textContent="Drop 1",f.onclick=()=>{this.inv.slots.splice(this.inv.slots.indexOf(i),1),this.dropEntity(i.itemId,1,1,i.charges),this.renderInv()},s.appendChild(f)}}renderGrid(t,e){const n=_e.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const s=(o,i)=>t.slots.find(l=>{const h=Ln(l);return o>=l.x&&o<l.x+h.w&&i>=l.y&&i<l.y+h.h});for(let o=0;o<t.h;o++)for(let i=0;i<t.w;i++){const l=document.createElement("div");l.className="invcell";const h=s(i,o);if(h){const a=Ct[h.itemId],c=i-h.x,d=o-h.y,f=Fo(h.itemId,h.charges),m=h.rot?(a.h-1-c)*a.w+d:d*a.w+c;l.style.background=a.color,l.style.backgroundImage=`url(${f[Math.min(m,f.length-1)]??""})`,t.slots.indexOf(h)===t.selected&&l.classList.add("active"),l.onmouseenter=()=>{if(Date.now()-this.lastTouchTs<700)return;const y=document.getElementById("side-text");y&&(y.textContent=`${a.name} — ${a.desc}`)},l.onmousedown=y=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,i,o):this.startInvDrag(y,h,t)}}else l.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,i,o)};e.appendChild(l)}}tapCell(t,e,n){const s=t.slots.find(l=>{const h=Ln(l);return e>=l.x&&e<l.x+h.w&&n>=l.y&&n<l.y+h.h});if(this.temp){const l=this.temp,h=Ln(l),a=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(a>=0&&c>=0){const d={...l,x:a,y:c},f=s?t.slots.indexOf(s):-1;if(f>=0&&t.slots.splice(f,1),t.fits(a,c,h.w,h.h,d)){if(t.slots.push(d),s&&!_e.placeSlotFree(t,s)){t.slots.splice(t.slots.indexOf(d),1),t.slots.splice(f,0,s),Q("No room to swap."),this.audio.error();return}this.temp=null,this.tempOrigin=null,this.setSel(t,t.slots.indexOf(d)),this.audio.place(),this.renderInv(),this.renderHeld();return}s&&t.slots.splice(f,0,s)}Q("No room there."),this.audio.error();return}const o=t===this.inv?this.chestInv:this.inv;if(o){const l=o.selectedSlot();if(l&&l!==s){const h=Ln(l),a=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(a>=0&&c>=0&&t.fits(a,c,h.w,h.h,l)){o.slots.splice(o.slots.indexOf(l),1),o.selected=-1,l.x=a,l.y=c,t.slots.push(l),t.selected=t.slots.indexOf(l),this.audio.place(),this.renderInv(),this.renderHeld();return}Q("No room there."),this.audio.error();return}}const i=t.selectedSlot();if(i&&i!==s){const l=Ln(i),h=Math.min(e,t.w-l.w),a=Math.min(n,t.h-l.h);if(h>=0&&a>=0&&this.tapMove(t,i,s,h,a)){this.audio.place(),t.selected=t.slots.indexOf(i),this.renderInv();return}}s?(this.setSel(t,t.slots.indexOf(s)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,s,o){const i=Ln(e);if(t.fits(s,o,i.w,i.h,e))return t.move(e,s,o);if(!n)return!1;const l=Ln(n),h=t.slots.indexOf(e);t.slots.splice(h,1);const a=t.fits(e.x,e.y,l.w,l.h,n)&&t.fits(s,o,i.w,i.h,n)&&!(s<e.x+l.w&&e.x<s+i.w&&o<e.y+l.h&&e.y<o+i.h)&&t.move(n,e.x,e.y)&&t.move(e,s,o);return t.slots.splice(h,0,e),a}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const s=n.slots.indexOf(e);this.setSel(n,s),n.slots.splice(s,1);const o=this.temp;this.temp=e,this.tempOrigin=n,o&&(n.slots.push(o),n.move(o,e.x,e.y)||this.giveOrDrop(o.itemId,1));const i=(_e.CELL+_e.GAP)*this.uiZoom(),l=_e.GAP*this.uiZoom(),h=Ln(e),a=document.createElement("div");a.className="inv-ghost",a.style.width=h.w*i-l+"px",a.style.height=h.h*i-l+"px",a.style.background=Ct[e.itemId].color,a.style.backgroundImage=`url(${gi(e.itemId,e.rot?1:0,e.charges)})`,document.body.appendChild(a);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),d={gx:t.clientX-(c.left+e.x*i),gy:t.clientY-(c.top+e.y*i)},f=x=>{a.style.left=x.clientX-d.gx+"px",a.style.top=x.clientY-d.gy+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(x.clientX,x.clientY))},m=x=>{if(window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),a.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(x.clientX,x.clientY)){this.binDiscard();return}const y=Ln(e);let v=null,_=0,T=0;for(const[w,S]of this.gridsEls()){const b=w.getBoundingClientRect();if(_=Math.round((x.clientX-b.left-d.gx)/i),T=Math.round((x.clientY-b.top-d.gy)/i),_>=0&&T>=0&&_<=S.w-y.w&&T<=S.h-y.h){v=S;break}}v&&(v.slots.push(e),v.move(e,_,T)||v===n&&v.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(v,v.slots.indexOf(e))):v.slots.splice(v.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",m),f(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const i=e.slots.indexOf(t);if(e.slots.splice(i,1),!_e.placeSlotFree(n,t)){e.slots.splice(i,0,t),Q(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const s=e.slots.indexOf(t);this.setSel(e,s),e.slots.splice(s,1);const o=this.temp;this.temp=t,this.tempOrigin=e,o&&(e.slots.push(o),e.move(o,t.x,t.y)||this.giveOrDrop(o.itemId,1)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(_e.CELL+_e.GAP)*this.uiZoom(),s=_e.GAP*this.uiZoom(),o=Ln(e),i=document.createElement("div");i.className="inv-ghost",i.style.width=o.w*n-s+"px",i.style.height=o.h*n-s+"px",i.style.background=Ct[e.itemId].color,i.style.backgroundImage=`url(${gi(e.itemId,e.rot?1:0,e.charges)})`,document.body.appendChild(i);const l=a=>{i.style.left=a.clientX-o.w*n/2+"px",i.style.top=a.clientY-o.h*n/2+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(a.clientX,a.clientY))},h=a=>{if(window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",h),i.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(a.clientX,a.clientY)){this.binDiscard();return}const c=(o.w*n-s)/2,d=(o.h*n-s)/2;let f=null,m=0,x=0;for(const[y,v]of this.gridsEls()){const _=y.getBoundingClientRect();if(m=Math.round((a.clientX-_.left-c)/n),x=Math.round((a.clientY-_.top-d)/n),m>=0&&x>=0&&m<=v.w-o.w&&x<=v.h-o.h){f=v;break}}f&&(f.slots.push(e),f.move(e,m,x)?(this.temp=null,this.audio.place(),this.setSel(f,f.slots.indexOf(e))):(f.slots.splice(f.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",l),window.addEventListener("mouseup",h),l(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};_e.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(Q("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){Q("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraftTab(){const t=document.getElementById("btn-inv-craft"),e=document.getElementById("inv-craft");if(t.textContent=this.invCraft?"Close Craft":"Craft by hand",t.classList.toggle("on",this.invCraft),e.classList.toggle("hidden",!this.invCraft),!!this.invCraft){e.innerHTML="";for(const n of ic){if(n.station!==null)continue;const s=document.createElement("div");s.className="craft-row";const o=`${Ct[n.out].name}${n.count>1?" ×"+n.count:""}`,i=Object.entries(n.needs).map(([h,a])=>`${a}× ${Ct[h].name}`).join(", ");s.innerHTML=`<span class="what"><img class="craft-art" src="${gi(n.out)}" alt="">${o} <span class="needs">(${i})</span></span>`;const l=document.createElement("button");l.textContent="Craft",l.disabled=!sc(this.inv,n),l.onclick=()=>{const h=hd(this.inv,n);if(h===null){this.audio.error();return}h>0&&this.giveOrDrop(n.out,h),this.tut?.notify("craft"),Ct[n.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderInv()},s.appendChild(l),e.appendChild(s)}}}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":t==="armory"?"Armoury — gear that guards the body":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t!=="smelt")for(const s of ic){if(t==="armory"?s.station!=="armory":s.station==="armory")continue;const o=document.createElement("div");o.className="craft-row";const i=`${Ct[s.out].name}${s.count>1?" ×"+s.count:""}`,l=Object.entries(s.needs).map(([c,d])=>`${d}× ${Ct[c].name}`).join(", "),h=sc(this.inv,s);o.innerHTML=`<span class="what"><img class="craft-art" src="${gi(s.out)}" alt="">${i} <span class="needs">(${l})</span></span>`;const a=document.createElement("button");a.textContent="Craft",a.disabled=!h,a.onclick=()=>{const c=hd(this.inv,s);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(s.out,c),this.tut?.notify("craft"),Ct[s.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft(t)},o.appendChild(a),e.appendChild(o)}else{const s=this.openStation,o=`${s[0]},${s[1]},${s[2]}`,i=this.campCharges.get(o)??0;document.getElementById("smelt-fuel").textContent=`${i} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){Q("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(o,i+3),this.syncFire(s[0],s[1],s[2]),this.renderCraft("smelt")};const l=this.equip.light;if(l){const h=l.charges??0,a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what">Head Lantern <span class="needs">(${h}/5 charges)</span></span>`;const c=document.createElement("button");c.textContent="Refuel Lantern (+1, uses 1 fuel)",c.disabled=h>=5||i<1,c.onclick=()=>{h>=5||i<1||(this.campCharges.set(o,i-1),this.syncFire(s[0],s[1],s[2]),l.charges=h+1,this.audio.place(),this.renderCraft("smelt"))},a.appendChild(c),e.appendChild(a)}for(const h of mu){const a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what"><img class="craft-art" src="${gi(h.out)}" alt="">${Ct[h.in].name} → ${Ct[h.out].name}${h.n&&h.n>1?" ×"+h.n:""} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(h.in,1)||i<1,c.onclick=()=>{this.inv.removeItem(h.in,1),this.campCharges.set(o,i-1),this.syncFire(s[0],s[1],s[2]);const d=this.inv.addItem(h.out,h.n??1);d>0&&this.giveOrDrop(h.out,d),this.audio.place(),this.renderCraft("smelt")},a.appendChild(c),e.appendChild(a)}}}renderCache(){const t=this.caches.find(s=>s.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const s of t.items){const o=document.createElement("div");o.className="cache-item",o.textContent=`${s.count}× ${Ct[s.itemId].name}`,e.appendChild(o)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let s=!0;for(;s;){s=!1;for(const o of t.items)if(o.charges!==void 0&&o.count===1)this.inv.addSlot({itemId:o.itemId,x:0,y:0,charges:o.charges})&&(s=!0,t.items.splice(t.items.indexOf(o),1));else{const i=this.inv.addItem(o.itemId,o.count);i<o.count&&(s=!0,o.count=i),i===0&&t.items.splice(t.items.indexOf(o),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const B_=["drone","wanderer","wanderer","caravan","caravan","nightwind"],z_=["drone","nightwind","nightwind","caravan","wanderer"],Md={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},bd=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],H_=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],Sd=[0,2,4,2,3,5,4,1],G_=[0,0,3,2,4,3,2,0],wd={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},V_=["pluck","saw","breath","bow"];class W_{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=wd[this.genre];breathBuf=null;root=98;deg=bd[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let s=0,o=0;for(let c=0;c<n.length;c++){const d=Math.random()*2-1;s=.99*s+.01*d,o=.96*o+.04*d,n[c]=(s+o)*2}const i=this.ctx.createBufferSource();i.buffer=e,i.loop=!0,this.noiseBuf=e;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=380;const h=this.ctx.createOscillator();h.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=100,h.connect(a).connect(l.frequency),h.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,i.connect(l).connect(this.windGain).connect(this.ctx.destination),i.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=(.06+this.stormI*.28)*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setStorm(t){t!==this.stormI&&(this.stormI=t,this.windGain&&(this.windGain.gain.value=(.06+t*.28)*this.volume))}stormI=0;setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const s=t.createGain();s.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(s),s.connect(t.destination),[1,1.5,2].forEach((o,i)=>{const l=t.createOscillator();l.type=i===2?"sine":"triangle",l.frequency.value=this.root*o,l.detune.value=i*3-3;const h=t.createGain();h.gain.value=.03/(i+1);const a=t.createOscillator();a.frequency.value=.05+i*.017;const c=t.createGain();c.gain.value=.018,a.connect(c).connect(h.gain),a.start(),l.connect(h).connect(this.musicGain),l.start(),this.droneOscs.push(l)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?B_:z_;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=wd[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const s=this.isDay?bd:H_;if(this.deg=s[Math.floor(Math.random()*s.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const o=this.ctx.currentTime;this.droneOscs.forEach((i,l)=>i.frequency.setTargetAtTime(this.root*[1,1.5,2][l],o,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=Md[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,s=(i,l)=>e*i*2**(n[(l%n.length+n.length)%n.length]/12),o=Md[this.genre];switch(this.genre){case"drone":{this.note(s(1,0),t,o*.95,.18),[0,2,4].forEach(i=>this.note(s(2,i),t+.05,o*.9,.03));for(let i=0;i<8;i++)Math.random()<.15||this.note(s(4,Sd[i]),t+i*o/8,.9,.12);if(Math.random()<.6){const i=1+Math.floor(Math.random()*6);this.note(s(4,i),t+Math.floor(Math.random()*5)*(o/8),1.4,.13)}break}case"wanderer":{this.note(s(1,0),t,o*.55,.16);for(let i=0;i<8;i++)Math.random()<.1||this.note(s(Math.random()<.3?3:4,Sd[i]),t+i*o/8,.55,.12);if(Math.random()<.7){const i=1+Math.floor(Math.random()*5);this.note(s(5,i),t+Math.floor(Math.random()*6)*(o/8),.8,.11)}break}case"nightwind":{this.note(s(1,0),t,o*.95,.15),Math.random()<.4&&[0,2,4].forEach(l=>this.note(s(2,l),t+.1,o*.85,.025));const i=1+Math.floor(Math.random()*3);for(let l=0;l<i;l++){const h=Math.floor(Math.random()*n.length),a=1.6+Math.random()*(o-1.2);this.note(s(4,h),t+Math.random()*(o-1),a,.12)}break}case"caravan":{for(let i=0;i<8;i++)(i===0||i===3||i===4)&&this.drum(t+i*o/8),i%2===1&&this.brush(t+i*o/8);this.note(s(1,0),t,o*.45,.17),this.note(s(1,3),t+o/2,o*.4,.14);for(let i=0;i<8;i++)Math.random()<.25||this.note(s(3,G_[i]),t+i*o/8,.4,.1);if(Math.random()<.4){const i=1+Math.floor(Math.random()*4);this.note(s(4,i),t+Math.floor(Math.random()*4)*(o/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const s=this.ctx.createGain();s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(s).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=V_.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,s){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,s);break;case"saw":this.sawNote(t,e,n,s);break;case"breath":this.breathNote(t,e,n,s);break;case"bow":this.bowNote(t,e,n,s);break}}pluckNote(t,e,n,s){const o=this.ctx,i=Math.min(n,1),l=o.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(s,e+.006),l.gain.exponentialRampToValueAtTime(.001,e+i),l.connect(this.musicGain);const h=o.createOscillator();h.type="triangle",h.frequency.value=t,h.connect(l),h.start(e),h.stop(e+i+.05);const a=o.createOscillator();a.type="square",a.frequency.value=t*2.01;const c=o.createGain();c.gain.setValueAtTime(s*.22,e),c.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,i*.35)),a.connect(c).connect(l),a.start(e),a.stop(e+i)}sawNote(t,e,n,s){const o=this.ctx,i=o.createOscillator();i.type="sawtooth",i.frequency.value=t;const l=o.createBiquadFilter();l.type="lowpass",l.Q.value=.8,l.frequency.value=Math.min(3200,Math.max(700,t*6));const h=o.createGain();this.sustainEnv(h.gain,e,n,s*.7,.09),i.connect(l).connect(h).connect(this.musicGain),i.start(e),i.stop(e+n+.05)}breathNote(t,e,n,s){const o=this.ctx;if(!this.breathBuf){const d=o.sampleRate,f=o.createBuffer(1,d*2,d),m=f.getChannelData(0);for(let x=0;x<m.length;x++)m[x]=Math.random()*2-1;this.breathBuf=f}const i=o.createBufferSource();i.buffer=this.breathBuf,i.loop=!0;const l=o.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=10;const h=o.createGain();this.sustainEnv(h.gain,e,n,s*1.6,.22),i.connect(l).connect(h).connect(this.musicGain),i.start(e,Math.random()*1.9),i.stop(e+n+.05);const a=o.createOscillator();a.type="sine",a.frequency.value=t;const c=o.createGain();this.sustainEnv(c.gain,e,n,s*.8,.3),a.connect(c).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}bowNote(t,e,n,s){const o=this.ctx,i=o.createOscillator();i.type="sawtooth",i.frequency.value=t;const l=o.createOscillator();l.frequency.value=5.2;const h=o.createGain();h.gain.value=5,l.connect(h).connect(i.detune),l.start(e),l.stop(e+n+.05);const a=o.createBiquadFilter();a.type="lowpass",a.Q.value=.7,a.frequency.value=Math.min(2600,Math.max(600,t*4));const c=o.createGain();this.sustainEnv(c.gain,e,n,s*.8,Math.min(.35,n*.3)),i.connect(a).connect(c).connect(this.musicGain),i.start(e),i.stop(e+n+.05)}sustainEnv(t,e,n,s,o){const i=Math.min(o,n*.5),l=e+i+(n-i)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(s,e+i),t.setValueAtTime(s,l),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,s=.2,o=0){if(!this.ctx)return;const i=this.ctx.currentTime,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,i),o&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+o),i+e),h.gain.setValueAtTime(s*this.volume,i),h.gain.exponentialRampToValueAtTime(.001,i+e),l.connect(h).connect(this.ctx.destination),l.start(i),l.stop(i+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const s=this.ctx.currentTime,o=this.ctx.sampleRate,i=this.ctx.createBuffer(1,Math.max(1,Math.floor(o*t)),o),l=i.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=(Math.random()*2-1)*(1-d/l.length);const h=this.ctx.createBufferSource();h.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=e;const c=this.ctx.createGain();c.gain.value=n*this.volume,h.connect(a).connect(c).connect(this.ctx.destination),h.start(s)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const qt=r=>document.getElementById(r),Ed=r=>qt(r).value,cn=(r,t=!0)=>qt(r).classList.toggle("hidden",!t),q_=["screen-title","screen-settings","screen-instructions","screen-chronicle","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],Cc=()=>q_.forEach(r=>cn(r,!1)),$o=new W_;let xe=R_(),St=null;document.addEventListener("click",()=>$o.resume(),{once:!0});document.addEventListener("touchstart",()=>$o.resume(),{once:!0});function sa(){Cc(),cn("screen-title"),qt("best-score").textContent=Or()>0?`Best run: ${Or().toFixed(1)} days`:"";const r=qt("worldlist");r.innerHTML="";const t=ia();t.length||(r.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const s=Mu(e.id),o=document.createElement("span");o.textContent=`${e.name} — seed “${e.seedStr}” — ${s?`day ${s.days}, survived ${(s.playSec/qe).toFixed(1)} days`:"never played"}`;const i=document.createElement("button");i.textContent="Load",i.onclick=()=>ra(e,s);const l=document.createElement("button");l.textContent="Export",l.onclick=()=>{s?bu(e,s):Q("Nothing saved for this world yet.")};const h=document.createElement("button");h.textContent="Delete",h.onclick=()=>{h.textContent==="Sure?"?(I_(e.id),sa()):(h.textContent="Sure?",setTimeout(()=>h.textContent="Delete",2500))},n.append(o,i,l,h),r.appendChild(n)}}function ra(r,t){Cc(),cn("cheats",!1),qt("hud").classList.remove("hidden"),xe.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),qt("btn-save").classList.toggle("hidden",r.id.startsWith("guest")),qt("btn-exportworld").classList.toggle("hidden",r.id.startsWith("guest")),$o.resume(),St=new _e(r,t,qt("game-wrap"),xe,$o),globalThis.game=St,St.start(),t===null&&St.startTutorial()}function Ic(){St&&(St.saveNow(),St.stop()),St=null,delete globalThis.game,qt("hud").classList.add("hidden"),sa()}function oa(r){Cc(),cn(r)}function X_(){St&&(St.pauseSubmenu=null),cn("screen-settings",!1),cn("screen-instructions",!1),cn("screen-chronicle",!1),cn("screen-catalog",!1),St?(cn("ui-inventory",!1),cn("ui-craft",!1),cn("ui-cache",!1),cn("ui-trade",!1),cn("screen-pause",!1),St.paused=!1,St.relock()):sa()}function Pc(){St&&(St.pauseSubmenu=St.paused?"settings":null),oa("screen-settings");const r=qt("settings-body");r.innerHTML="";const t=(e,n,s,o)=>{const i=document.createElement("div");i.className="setting";const l=document.createElement("span");l.textContent=e;const h=document.createElement("div");h.className="seg";const a=[];for(const[c,d]of n){const f=document.createElement("button");f.type="button",f.textContent=c,String(d)===String(s)&&f.classList.add("on"),f.onclick=()=>{for(const m of a)m.classList.remove("on");f.classList.add("on"),o(d)},a.push(f),h.appendChild(f)}i.append(l,h),r.appendChild(i)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],xe.sens,e=>{xe.sens=e,Qn()}),t("Invert Y",[["Off",!1],["On",!0]],xe.invertY,e=>{xe.invertY=e,Qn()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],xe.volume,e=>{xe.volume=e,Qn()}),t("Music",[["Off",!1],["On",!0]],xe.music,e=>{xe.music=e,Qn()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],xe.fov,e=>{xe.fov=e,Qn()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],xe.renderDist,e=>{xe.renderDist=e,Qn()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],xe.quality,e=>{xe.quality=e,Qn()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],xe.lighting,e=>{xe.lighting=e,Qn()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],xe.units,e=>{xe.units=e,Qn()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],xe.uiScale,e=>{xe.uiScale=e,Qn()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],xe.fullscreen,e=>{xe.fullscreen=e,Qn(),e?document.documentElement.requestFullscreen().catch(()=>{xe.fullscreen=!1,Qn(),Pc()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),r.appendChild(e)}}function Eu(r){document.documentElement.style.setProperty("--ui-scale",String(r))}function Qn(){C_(xe),Eu(xe.uiScale),St&&St.applySettings(xe)}let rc="items";function Lc(){if(St&&(St.pauseSubmenu=St.paused?"catalog":null),St){for(const e of St.inv.slots)St.codex.add(e.itemId);for(const e of[St.equip.backpack,St.equip.head,St.equip.body,St.equip.regulator,St.equip.light])e&&St.codex.add(e.itemId)}const r=St?.codex??null;oa("screen-catalog");for(const e of Array.from(qt("catalog-tabs").querySelectorAll(".tab")))e.classList.toggle("active",e.dataset.tab===rc);const t=qt("catalog-body");if(t.innerHTML="",rc==="items"){const e=document.createElement("div");e.className="cat-grid";const n=(s,o,i,l,h)=>{const a=document.createElement("div");a.className="cat-card"+(h?"":" locked");const c=document.createElement("img");c.src=s,c.alt="";const d=document.createElement("div");d.innerHTML=`<b>${o}</b><div class="cat-meta">${i}</div>`+(h?`<div class="cat-desc">${l}</div>`:'<div class="cat-locked">Locked — carry it, craft it, or mine it once: the Codex remembers.</div>'),a.append(c,d),e.append(a)};for(const s of Object.values(Ct).sort((o,i)=>o.name.localeCompare(i.name)))n(gi(s.id),s.name,`${s.w}×${s.h} cell · ${s.mass} kg${s.block!==void 0?" · placeable":""}`,s.desc,!r||r.has(s.id));for(const s of hn){if(s.id===0||s.name==="Air")continue;const o=Object.values(Ct).find(l=>l.block===s.id),i=`${s.placeable?"placeable":"world only"} · ${s.R>0?`R ${s.R}`:"no insulation"}${s.emissive?" · light source":""}`;n(o?gi(o.id):L_(s.id),s.name,i,o?.desc??"Found in the world; mine it to collect it."+(s.minTier>0?` Needs a tier-${s.minTier} ${s.tool??"tool"}.`:""),!r||r.has("b:"+s.id)||!!o&&r.has(o.id))}t.append(e)}else{const e=(n,s,o,i)=>{const l=document.createElement("div");l.className="cat-recipe";const h=document.createElement("img");h.src=n,h.alt="",h.style.width="36px",h.style.height="36px",h.style.imageRendering="pixelated",l.append(h,Object.assign(document.createElement("span"),{innerHTML:`${s} <span class="arrow">→</span> <b>${o}</b> <span class="needs">(${i})</span>`})),t.append(l)};for(const n of ic){const s=Object.entries(n.needs).map(([o,i])=>`${i}× ${Ct[o].name}`).join(" + ");e(gi(n.out),s,`${Ct[n.out].name}${n.count>1?" ×"+n.count:""}`,n.station===null?"hands":n.station==="armory"?"Armoury":"Crafting Bench")}for(const n of mu)e(gi(n.out),`1× ${Ct[n.in].name}`,`${Ct[n.out].name}${n.n&&n.n>1?" ×"+n.n:""}`,"Campfire, 1 fuel charge")}}for(const r of Array.from(qt("catalog-tabs").querySelectorAll(".tab")))r.onclick=()=>{rc=r.dataset.tab,Lc()};function $_(){St&&(St.pauseSubmenu=St.paused?"chronicle":null),oa("screen-chronicle");const r=qt("chronicle-body");r.innerHTML="";const t=St?.chronicle??new Set;for(const e of Ac){const n=document.createElement("div");t.has(e.id)?(n.className="chron-entry",n.innerHTML=`<h3>${e.title}</h3><p>${e.text}</p>`):(n.className="chron-entry locked",n.innerHTML="<h3>— not yet learned —</h3><p>The Chronicle writes itself when the desert teaches you something new.</p>"),r.append(n)}}const Y_=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Falls","falling more than 4 blocks hurts — about 16 blocks without armour is fatal; land in water or climb down"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Iron Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire (hold Wood or Kindling and press E to feed the fire), Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches, trade with a camp Trader, Broken Thruster on a wingtip (needs a Thruster Nozzle)"],["R","turn a held built block a quarter turn (Crafting Bench, Bed, Thruster, walls …) — it places facing that way"],["G","toss the held item away"],["T","toggle the Head Lantern — it burns one fuel charge per 4 game-minutes; refuel it at a Campfire"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 5 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["M","maximise the Map — the corner Map shows only while the Surveyor's Visor is worn"],["Surveyor's Pin",'hold it and press E to plant a named mark at your feet; rename it in the maximised Map — a Pin named "Base" beams you home through walls while the Visor is worn'],["Hidden Landmark Tracker","press Q holding it: reveals the nearest Landmark you have never found (one use, then it is gone)"],["Chronicle","pause menu — the log of what the desert has taught you; the latest lesson rides under the Quest panel"],["Esc","close open menu, or pause"],["P","pause / resume"]],K_=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / LAMP / ITEM / DROP / BAG / PAUSE","buttons on the right"],["Tap the Map (top-left, needs the Visor worn)","maximise it — rename or pull Pins there"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function Tu(){St&&(St.pauseSubmenu=St.paused?"instructions":null),oa("screen-instructions");const r=qt("instr-body");r.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?K_:Y_;for(const[n,s]of t){const o=document.createElement("div");o.innerHTML=`<b>${n}</b> — ${s}`,r.appendChild(o)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. Walls block the wind but not heat: a sealed room's air drifts toward the outside temperature. Only Heat Regulator blocks hold a sealed room at ~37 °C — each covers 150 cells, they stack in bigger rooms; the Ship Interior comes with one. Direct midday sun adds a punishing +8…18 °C — shade from rocks, dunes and walls cancels it; at night the desert freezes you. Dig into the Caves: two or more cells under the terrain the air sits at a constant mild ~22 °C, and shelter there lets your body claw back toward 36.6 °C. That is the refuge — but it is dark (wear a Head Lantern, toggle with T), Scorpions and Sand Wurms live only down there, and Cobalt Ore — the one thing that can fix the Ship's engines — hides there too. The goal: mine Cobalt, smelt and craft four Thruster Nozzles, press E at each Broken Thruster on the wingtips, and lift off. Or just keep surviving and beat your best day count. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, Kangaroo Rats bolt, Scorpions and Wurms ambush in the dark — hunt what you can, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor, Armour, Regulator and Light go in the five Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it. The desert is bigger than it looks: Trader Camps — a windmill, a hut, a farmstead — dot the wastes hundreds of steps out, and the robed Trader there barters goods for goods; no coin, and the offer table restocks every in-game day. Watch the sky: a Sandstorm rolls in without warning — when the wind roars, get behind walls or dig in, because the open air will bake you, drink you dry and scour your skin. Arched Cave Mouths gape in rocky slopes and lead straight down to the Caves. Vultures circle the healthy but dive at the wounded; hunt Thornback Tortoises for shell armour, Fennec Foxes for pelts, and bring the skins, shells and hides back to the Trader.",r.appendChild(e)}qt("btn-create").onclick=()=>{const r=Ed("seed-input").trim()||Math.random().toString(36).slice(2,10),t=Ed("world-name").trim()||r,e=xu(t,r);ra(e,null)};qt("btn-guest").onclick=()=>{const r=Math.random().toString(36).slice(2,10);ra({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:r,updated:Date.now()},null)};qt("btn-import").onclick=()=>qt("import-file").click();qt("import-file").onchange=async()=>{const r=qt("import-file").files?.[0];if(r)try{const t=await P_(r);Q("World imported."),ra(t,Mu(t.id))}catch(t){Q(`Import failed: ${t.message}`)}};qt("btn-settings").onclick=Pc;qt("btn-pause-settings").onclick=Pc;qt("btn-instructions").onclick=Tu;qt("btn-pause-instructions").onclick=Tu;qt("btn-catalog").onclick=Lc;qt("btn-catalog-title").onclick=Lc;qt("btn-chronicle").onclick=$_;for(const r of document.querySelectorAll(".close-btn"))r.onclick=()=>{if(St&&St.pauseSubmenu){St.closePauseSubmenu();return}St&&St.closeUI(),(!St||!(St.ui==="inv"&&St.temp))&&X_()};qt("btn-resume").onclick=()=>{St&&(St.paused=!1,cn("screen-pause",!1),cn("cheats",!1),St.relock())};qt("btn-save").onclick=()=>Q("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");qt("btn-exportworld").onclick=()=>{St&&St.exportWorld()};qt("btn-quit").onclick=()=>Ic();qt("btn-cheats").onclick=()=>cn("cheats",qt("cheats").classList.contains("hidden"));const Au=qt("cheat-item");for(const[r,t]of Object.entries(Ct).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=r,e.textContent=t.name,Au.appendChild(e)}qt("btn-cheat-add").onclick=()=>{if(!St)return;const r=Au.value;St.inv.addItem(r,1)?Q("No room in your pack."):Q(`Added ${Ct[r].name}.`)};const Dc=qt("cheat-quest");bi.forEach((r,t)=>{const e=document.createElement("option");e.value=String(t),e.textContent=`${t+1}. ${r.title}`,Dc.appendChild(e)});{const r=document.createElement("option");r.value=String(bi.length),r.textContent="Finish the whole chain",Dc.appendChild(r)}qt("btn-cheat-quest").onclick=()=>{St&&St.questJump(Number(Dc.value))};for(const r of Array.from(qt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))r.onclick=()=>{if(!St)return;if(r.dataset.speed!==void 0){St.speedMul=Number(r.dataset.speed),Q(`Player speed ×${r.dataset.speed}.`);return}if(r.dataset.immortal!==void 0){St.survival.invincible=r.dataset.immortal==="1",Q(`Immortality ${St.survival.invincible?"on":"off"}.`);return}const t=Number(r.dataset.frac);St.setClock(t),Q(`Clock set to ${r.textContent}.`)};qt("btn-respawn").onclick=()=>{St&&St.respawn()};qt("btn-death-title").onclick=()=>Ic();qt("btn-win-continue").onclick=()=>{St&&(St.paused=!1,cn("screen-win",!1),St.relock())};qt("btn-win-title").onclick=()=>Ic();document.addEventListener("keydown",r=>{if(r.code==="Escape"&&!qt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});Eu(xe.uiScale);sa();
