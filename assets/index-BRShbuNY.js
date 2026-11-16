(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="180",hd=0,Ac=1,ud=2,iu=1,dd=2,Ci=3,Zi=0,bn=1,Ke=2,Yi=0,Gs=1,Rc=2,Cc=3,Ic=4,fd=5,us=100,pd=101,md=102,gd=103,_d=104,vd=200,xd=201,yd=202,Md=203,Ka=204,ja=205,bd=206,Sd=207,wd=208,Ed=209,Td=210,Ad=211,Rd=212,Cd=213,Id=214,Za=0,Ja=1,Qa=2,Xs=3,tl=4,el=5,nl=6,il=7,$l=0,Pd=1,Ld=2,Ki=0,Dd=1,kd=2,Ud=3,Nd=4,Fd=5,Od=6,Bd=7,su=300,$s=301,Ys=302,sl=303,rl=304,No=306,ol=1e3,ms=1001,al=1002,Gn=1003,zd=1004,zr=1005,hi=1006,ea=1007,gs=1008,_i=1009,ru=1010,ou=1011,br=1012,Yl=1013,xs=1014,Di=1015,Ir=1016,Kl=1017,jl=1018,Sr=1020,au=35902,lu=35899,cu=1021,hu=1022,oi=1023,wr=1026,Er=1027,uu=1028,Zl=1029,du=1030,Jl=1031,Ql=1033,yo=33776,Mo=33777,bo=33778,So=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,yl=37813,Ml=37814,bl=37815,Sl=37816,wl=37817,El=37818,Tl=37819,Al=37820,Rl=37821,Cl=36492,Il=36494,Pl=36495,Ll=36283,Dl=36284,kl=36285,Ul=36286,Hd=3200,Gd=3201,fu=0,Vd=1,Xi="",Cn="srgb",Ks="srgb-linear",Ro="linear",_e="srgb",Ts=7680,Pc=519,Wd=512,qd=513,Xd=514,pu=515,$d=516,Yd=517,Kd=518,jd=519,Lc=35044,Dc="300 es",ui=2e3,Co=2001;class Js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let i=0,o=r.length;i<o;i++)r[i].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const Vs=Math.PI/180,Tr=180/Math.PI;function Qs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function tc(s,t){return(s%t+t)%t}function Zd(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function Jd(s,t,e){return s!==t?(e-s)/(t-s):0}function vr(s,t,e){return(1-e)*s+e*t}function Qd(s,t,e,n){return vr(s,t,1-Math.exp(-e*n))}function tf(s,t=1){return t-Math.abs(tc(s,t*2)-t)}function ef(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function nf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function sf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function rf(s,t){return s+Math.random()*(t-s)}function of(s){return s*(.5-Math.random())}function af(s){s!==void 0&&(kc=s);let t=kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lf(s){return s*Vs}function cf(s){return s*Tr}function hf(s){return(s&s-1)===0&&s!==0}function uf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function df(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ff(s,t,e,n,r){const i=Math.cos,o=Math.sin,l=i(e/2),h=o(e/2),a=i((t+n)/2),c=o((t+n)/2),d=i((t-n)/2),p=o((t-n)/2),m=i((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":s.set(l*c,h*d,h*p,l*a);break;case"YZY":s.set(h*p,l*c,h*d,l*a);break;case"ZXZ":s.set(h*d,h*p,l*c,l*a);break;case"XZX":s.set(l*c,h*v,h*m,l*a);break;case"YXY":s.set(h*m,l*c,h*v,l*a);break;case"ZYZ":s.set(h*v,h*m,l*c,l*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const di={DEG2RAD:Vs,RAD2DEG:Tr,generateUUID:Qs,clamp:ae,euclideanModulo:tc,mapLinear:Zd,inverseLerp:Jd,lerp:vr,damp:Qd,pingpong:tf,smoothstep:ef,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:of,seededRandom:af,degToRad:lf,radToDeg:cf,isPowerOfTwo:hf,ceilPowerOfTwo:uf,floorPowerOfTwo:df,setQuaternionFromProperEuler:ff,normalize:yn,denormalize:zs};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),i=this.x-t.x,o=this.y-t.y;return this.x=i*n-o*r+t.x,this.y=i*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,i,o,l){let h=n[r+0],a=n[r+1],c=n[r+2],d=n[r+3];const p=i[o+0],m=i[o+1],v=i[o+2],y=i[o+3];if(l===0){t[e+0]=h,t[e+1]=a,t[e+2]=c,t[e+3]=d;return}if(l===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=y;return}if(d!==y||h!==p||a!==m||c!==v){let x=1-l;const _=h*p+a*m+c*v+d*y,R=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const b=Math.sqrt(T),I=Math.atan2(b,_*R);x=Math.sin(x*I)/b,l=Math.sin(l*I)/b}const S=l*R;if(h=h*x+p*S,a=a*x+m*S,c=c*x+v*S,d=d*x+y*S,x===1-l){const b=1/Math.sqrt(h*h+a*a+c*c+d*d);h*=b,a*=b,c*=b,d*=b}}t[e]=h,t[e+1]=a,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,i,o){const l=n[r],h=n[r+1],a=n[r+2],c=n[r+3],d=i[o],p=i[o+1],m=i[o+2],v=i[o+3];return t[e]=l*v+c*d+h*m-a*p,t[e+1]=h*v+c*p+a*d-l*m,t[e+2]=a*v+c*m+l*p-h*d,t[e+3]=c*v-l*d-h*p-a*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,i=t._z,o=t._order,l=Math.cos,h=Math.sin,a=l(n/2),c=l(r/2),d=l(i/2),p=h(n/2),m=h(r/2),v=h(i/2);switch(o){case"XYZ":this._x=p*c*d+a*m*v,this._y=a*m*d-p*c*v,this._z=a*c*v+p*m*d,this._w=a*c*d-p*m*v;break;case"YXZ":this._x=p*c*d+a*m*v,this._y=a*m*d-p*c*v,this._z=a*c*v-p*m*d,this._w=a*c*d+p*m*v;break;case"ZXY":this._x=p*c*d-a*m*v,this._y=a*m*d+p*c*v,this._z=a*c*v+p*m*d,this._w=a*c*d-p*m*v;break;case"ZYX":this._x=p*c*d-a*m*v,this._y=a*m*d+p*c*v,this._z=a*c*v-p*m*d,this._w=a*c*d+p*m*v;break;case"YZX":this._x=p*c*d+a*m*v,this._y=a*m*d+p*c*v,this._z=a*c*v-p*m*d,this._w=a*c*d-p*m*v;break;case"XZY":this._x=p*c*d-a*m*v,this._y=a*m*d-p*c*v,this._z=a*c*v+p*m*d,this._w=a*c*d+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],i=e[8],o=e[1],l=e[5],h=e[9],a=e[2],c=e[6],d=e[10],p=n+l+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(c-h)*m,this._y=(i-a)*m,this._z=(o-r)*m}else if(n>l&&n>d){const m=2*Math.sqrt(1+n-l-d);this._w=(c-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(i+a)/m}else if(l>d){const m=2*Math.sqrt(1+l-n-d);this._w=(i-a)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+d-n-l);this._w=(o-r)/m,this._x=(i+a)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,i=t._z,o=t._w,l=e._x,h=e._y,a=e._z,c=e._w;return this._x=n*c+o*l+r*a-i*h,this._y=r*c+o*h+i*l-n*a,this._z=i*c+o*a+n*h-r*l,this._w=o*c-n*l-r*h-i*a,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,i=this._z,o=this._w;let l=o*t._w+n*t._x+r*t._y+i*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=r,this._z=i,this;const h=1-l*l;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*i+e*this._z,this.normalize(),this}const a=Math.sqrt(h),c=Math.atan2(a,l),d=Math.sin((1-e)*c)/a,p=Math.sin(e*c)/a;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=i*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*r,this.y=i[1]*e+i[4]*n+i[7]*r,this.z=i[2]*e+i[5]*n+i[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=t.elements,o=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*o,this.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*o,this.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,i=t.x,o=t.y,l=t.z,h=t.w,a=2*(o*r-l*n),c=2*(l*e-i*r),d=2*(i*n-o*e);return this.x=e+h*a+o*d-l*c,this.y=n+h*c+l*a-i*d,this.z=r+h*d+i*c-o*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*r,this.y=i[1]*e+i[5]*n+i[9]*r,this.z=i[2]*e+i[6]*n+i[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,i=t.z,o=e.x,l=e.y,h=e.z;return this.x=r*h-i*l,this.y=i*o-n*h,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new F,Uc=new Pr;class Jt{constructor(t,e,n,r,i,o,l,h,a){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,o,l,h,a)}set(t,e,n,r,i,o,l,h,a){const c=this.elements;return c[0]=t,c[1]=r,c[2]=l,c[3]=e,c[4]=i,c[5]=h,c[6]=n,c[7]=o,c[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,o=n[0],l=n[3],h=n[6],a=n[1],c=n[4],d=n[7],p=n[2],m=n[5],v=n[8],y=r[0],x=r[3],_=r[6],R=r[1],T=r[4],S=r[7],b=r[2],I=r[5],A=r[8];return i[0]=o*y+l*R+h*b,i[3]=o*x+l*T+h*I,i[6]=o*_+l*S+h*A,i[1]=a*y+c*R+d*b,i[4]=a*x+c*T+d*I,i[7]=a*_+c*S+d*A,i[2]=p*y+m*R+v*b,i[5]=p*x+m*T+v*I,i[8]=p*_+m*S+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8];return e*o*c-e*l*a-n*i*c+n*l*h+r*i*a-r*o*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8],d=c*o-l*a,p=l*h-c*i,m=a*i-o*h,v=e*d+n*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=d*y,t[1]=(r*a-c*n)*y,t[2]=(l*n-r*o)*y,t[3]=p*y,t[4]=(c*e-r*h)*y,t[5]=(r*i-l*e)*y,t[6]=m*y,t[7]=(n*h-a*e)*y,t[8]=(o*e-n*i)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,i,o,l){const h=Math.cos(i),a=Math.sin(i);return this.set(n*h,n*a,-n*(h*o+a*l)+o+t,-r*a,r*h,-r*(-a*o+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new Jt;function mu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pf(){const s=Io("canvas");return s.style.display="block",s}const Nc={};function Ar(s){s in Nc||(Nc[s]=!0,console.warn(s))}function mf(s,t,e){return new Promise(function(n,r){function i(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}const Fc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gf(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,i,o){return this.enabled===!1||i===o||!i||!o||(this.spaces[i].transfer===_e&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[i].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[i].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,i){return this.convert(r,this.workingColorSpace,i)},colorSpaceToWorking:function(r,i){return this.convert(r,i,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?Ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,i=this.workingColorSpace){return r.fromArray(this.spaces[i].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,i,o){return r.copy(this.spaces[i].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,i){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,i)},toWorkingColorSpace:function(r,i){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,i)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ks]:{primaries:t,whitePoint:n,transfer:Ro,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),s}const ue=gf();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class _f{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Io("canvas")),As.width=t.width,As.height=t.height;const r=As.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Io("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),i=r.data;for(let o=0;o<i.length;o++)i[o]=Ni(i[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vf=0;class ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?i.push(sa(r[o].image)):i.push(sa(r[o]))}else i=sa(r);n.url=i}return e||(t.images[this.uuid]=n),n}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_f.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xf=0;const ra=new F;class Sn extends Js{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=ms,r=ms,i=hi,o=gs,l=oi,h=_i,a=Sn.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Qs(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ol:t.x=t.x-Math.floor(t.x);break;case ms:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ol:t.y=t.y-Math.floor(t.y);break;case ms:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=su;Sn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*i,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*i,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*i,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,i;const h=t.elements,a=h[0],c=h[4],d=h[8],p=h[1],m=h[5],v=h[9],y=h[2],x=h[6],_=h[10];if(Math.abs(c-p)<.01&&Math.abs(d-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(c+p)<.1&&Math.abs(d+y)<.1&&Math.abs(v+x)<.1&&Math.abs(a+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(a+1)/2,S=(m+1)/2,b=(_+1)/2,I=(c+p)/4,A=(d+y)/4,f=(v+x)/4;return T>S&&T>b?T<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(T),r=I/n,i=A/n):S>b?S<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(S),n=I/r,i=f/r):b<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(b),n=A/i,r=f/i),this.set(n,r,i,e),this}let R=Math.sqrt((x-v)*(x-v)+(d-y)*(d-y)+(p-c)*(p-c));return Math.abs(R)<.001&&(R=1),this.x=(x-v)/R,this.y=(d-y)/R,this.z=(p-c)/R,this.w=Math.acos((a+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends Js{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:n.depth},i=new Sn(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ec(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends yf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gu extends Sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends Sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=i.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(i,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const r=t.children;for(let i=0,o=r.length;i<o;i++)this.expandByObject(r[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Gr.subVectors(this.max,or),Rs.subVectors(t.a,or),Cs.subVectors(t.b,or),Is.subVectors(t.c,or),Bi.subVectors(Cs,Rs),zi.subVectors(Is,Cs),ns.subVectors(Rs,Is);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ns.z,ns.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ns.z,0,-ns.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ns.y,ns.x,0];return!oa(e,Rs,Cs,Is,Gr)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,Rs,Cs,Is,Gr))?!1:(Vr.crossVectors(Bi,zi),e=[Vr.x,Vr.y,Vr.z],oa(e,Rs,Cs,Is,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wi=[new F,new F,new F,new F,new F,new F,new F,new F],ti=new F,Hr=new Lr,Rs=new F,Cs=new F,Is=new F,Bi=new F,zi=new F,ns=new F,or=new F,Gr=new F,Vr=new F,is=new F;function oa(s,t,e,n,r){for(let i=0,o=s.length-3;i<=o;i+=3){is.fromArray(s,i);const l=r.x*Math.abs(is.x)+r.y*Math.abs(is.y)+r.z*Math.abs(is.z),h=t.dot(is),a=e.dot(is),c=n.dot(is);if(Math.max(-Math.max(h,a,c),Math.min(h,a,c))>l)return!1}return!0}const bf=new Lr,ar=new F,aa=new F;class Dr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bf.setFromPoints(t).getCenter(n);let r=0;for(let i=0,o=t.length;i<o;i++)r=Math.max(r,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ar,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(aa)),this.expandByPoint(ar.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ei=new F,la=new F,Wr=new F,Hi=new F,ca=new F,qr=new F,ha=new F;class nc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){la.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(la);const i=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),l=Hi.dot(this.direction),h=-Hi.dot(Wr),a=Hi.lengthSq(),c=Math.abs(1-o*o);let d,p,m,v;if(c>0)if(d=o*h-l,p=o*l-h,v=i*c,d>=0)if(p>=-v)if(p<=v){const y=1/c;d*=y,p*=y,m=d*(d+o*p+2*l)+p*(o*d+p+2*h)+a}else p=i,d=Math.max(0,-(o*p+l)),m=-d*d+p*(p+2*h)+a;else p=-i,d=Math.max(0,-(o*p+l)),m=-d*d+p*(p+2*h)+a;else p<=-v?(d=Math.max(0,-(-o*i+l)),p=d>0?-i:Math.min(Math.max(-i,-h),i),m=-d*d+p*(p+2*h)+a):p<=v?(d=0,p=Math.min(Math.max(-i,-h),i),m=p*(p+2*h)+a):(d=Math.max(0,-(o*i+l)),p=d>0?i:Math.min(Math.max(-i,-h),i),m=-d*d+p*(p+2*h)+a);else p=o>0?-i:i,d=Math.max(0,-(o*p+l)),m=-d*d+p*(p+2*h)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(la).addScaledVector(Wr,p),m}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),r=Ei.dot(Ei)-n*n,i=t.radius*t.radius;if(r>i)return null;const o=Math.sqrt(i-r),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,i,o,l,h;const a=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,p=this.origin;return a>=0?(n=(t.min.x-p.x)*a,r=(t.max.x-p.x)*a):(n=(t.max.x-p.x)*a,r=(t.min.x-p.x)*a),c>=0?(i=(t.min.y-p.y)*c,o=(t.max.y-p.y)*c):(i=(t.max.y-p.y)*c,o=(t.min.y-p.y)*c),n>o||i>r||((i>n||isNaN(n))&&(n=i),(o<r||isNaN(r))&&(r=o),d>=0?(l=(t.min.z-p.z)*d,h=(t.max.z-p.z)*d):(l=(t.max.z-p.z)*d,h=(t.min.z-p.z)*d),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,r,i){ca.subVectors(e,t),qr.subVectors(n,t),ha.crossVectors(ca,qr);let o=this.direction.dot(ha),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Hi.subVectors(this.origin,t);const h=l*this.direction.dot(qr.crossVectors(Hi,qr));if(h<0)return null;const a=l*this.direction.dot(ca.cross(Hi));if(a<0||h+a>o)return null;const c=-l*Hi.dot(ha);return c<0?null:this.at(c/o,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,r,i,o,l,h,a,c,d,p,m,v,y,x){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,o,l,h,a,c,d,p,m,v,y,x)}set(t,e,n,r,i,o,l,h,a,c,d,p,m,v,y,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=i,_[5]=o,_[9]=l,_[13]=h,_[2]=a,_[6]=c,_[10]=d,_[14]=p,_[3]=m,_[7]=v,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ps.setFromMatrixColumn(t,0).length(),i=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,i=t.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(r),a=Math.sin(r),c=Math.cos(i),d=Math.sin(i);if(t.order==="XYZ"){const p=o*c,m=o*d,v=l*c,y=l*d;e[0]=h*c,e[4]=-h*d,e[8]=a,e[1]=m+v*a,e[5]=p-y*a,e[9]=-l*h,e[2]=y-p*a,e[6]=v+m*a,e[10]=o*h}else if(t.order==="YXZ"){const p=h*c,m=h*d,v=a*c,y=a*d;e[0]=p+y*l,e[4]=v*l-m,e[8]=o*a,e[1]=o*d,e[5]=o*c,e[9]=-l,e[2]=m*l-v,e[6]=y+p*l,e[10]=o*h}else if(t.order==="ZXY"){const p=h*c,m=h*d,v=a*c,y=a*d;e[0]=p-y*l,e[4]=-o*d,e[8]=v+m*l,e[1]=m+v*l,e[5]=o*c,e[9]=y-p*l,e[2]=-o*a,e[6]=l,e[10]=o*h}else if(t.order==="ZYX"){const p=o*c,m=o*d,v=l*c,y=l*d;e[0]=h*c,e[4]=v*a-m,e[8]=p*a+y,e[1]=h*d,e[5]=y*a+p,e[9]=m*a-v,e[2]=-a,e[6]=l*h,e[10]=o*h}else if(t.order==="YZX"){const p=o*h,m=o*a,v=l*h,y=l*a;e[0]=h*c,e[4]=y-p*d,e[8]=v*d+m,e[1]=d,e[5]=o*c,e[9]=-l*c,e[2]=-a*c,e[6]=m*d+v,e[10]=p-y*d}else if(t.order==="XZY"){const p=o*h,m=o*a,v=l*h,y=l*a;e[0]=h*c,e[4]=-d,e[8]=a*c,e[1]=p*d+y,e[5]=o*c,e[9]=m*d-v,e[2]=v*d-m,e[6]=l*c,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sf,t,wf)}lookAt(t,e,n){const r=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Gi.crossVectors(n,Fn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Gi.crossVectors(n,Fn)),Gi.normalize(),Xr.crossVectors(Fn,Gi),r[0]=Gi.x,r[4]=Xr.x,r[8]=Fn.x,r[1]=Gi.y,r[5]=Xr.y,r[9]=Fn.y,r[2]=Gi.z,r[6]=Xr.z,r[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,o=n[0],l=n[4],h=n[8],a=n[12],c=n[1],d=n[5],p=n[9],m=n[13],v=n[2],y=n[6],x=n[10],_=n[14],R=n[3],T=n[7],S=n[11],b=n[15],I=r[0],A=r[4],f=r[8],u=r[12],g=r[1],M=r[5],C=r[9],L=r[13],k=r[2],U=r[6],H=r[10],$=r[14],V=r[3],J=r[7],et=r[11],gt=r[15];return i[0]=o*I+l*g+h*k+a*V,i[4]=o*A+l*M+h*U+a*J,i[8]=o*f+l*C+h*H+a*et,i[12]=o*u+l*L+h*$+a*gt,i[1]=c*I+d*g+p*k+m*V,i[5]=c*A+d*M+p*U+m*J,i[9]=c*f+d*C+p*H+m*et,i[13]=c*u+d*L+p*$+m*gt,i[2]=v*I+y*g+x*k+_*V,i[6]=v*A+y*M+x*U+_*J,i[10]=v*f+y*C+x*H+_*et,i[14]=v*u+y*L+x*$+_*gt,i[3]=R*I+T*g+S*k+b*V,i[7]=R*A+T*M+S*U+b*J,i[11]=R*f+T*C+S*H+b*et,i[15]=R*u+T*L+S*$+b*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],i=t[12],o=t[1],l=t[5],h=t[9],a=t[13],c=t[2],d=t[6],p=t[10],m=t[14],v=t[3],y=t[7],x=t[11],_=t[15];return v*(+i*h*d-r*a*d-i*l*p+n*a*p+r*l*m-n*h*m)+y*(+e*h*m-e*a*p+i*o*p-r*o*m+r*a*c-i*h*c)+x*(+e*a*d-e*l*m-i*o*d+n*o*m+i*l*c-n*a*c)+_*(-r*l*c-e*h*d+e*l*p+r*o*d-n*o*p+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8],d=t[9],p=t[10],m=t[11],v=t[12],y=t[13],x=t[14],_=t[15],R=d*x*a-y*p*a+y*h*m-l*x*m-d*h*_+l*p*_,T=v*p*a-c*x*a-v*h*m+o*x*m+c*h*_-o*p*_,S=c*y*a-v*d*a+v*l*m-o*y*m-c*l*_+o*d*_,b=v*d*h-c*y*h-v*l*p+o*y*p+c*l*x-o*d*x,I=e*R+n*T+r*S+i*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/I;return t[0]=R*A,t[1]=(y*p*i-d*x*i-y*r*m+n*x*m+d*r*_-n*p*_)*A,t[2]=(l*x*i-y*h*i+y*r*a-n*x*a-l*r*_+n*h*_)*A,t[3]=(d*h*i-l*p*i-d*r*a+n*p*a+l*r*m-n*h*m)*A,t[4]=T*A,t[5]=(c*x*i-v*p*i+v*r*m-e*x*m-c*r*_+e*p*_)*A,t[6]=(v*h*i-o*x*i-v*r*a+e*x*a+o*r*_-e*h*_)*A,t[7]=(o*p*i-c*h*i+c*r*a-e*p*a-o*r*m+e*h*m)*A,t[8]=S*A,t[9]=(v*d*i-c*y*i-v*n*m+e*y*m+c*n*_-e*d*_)*A,t[10]=(o*y*i-v*l*i+v*n*a-e*y*a-o*n*_+e*l*_)*A,t[11]=(c*l*i-o*d*i-c*n*a+e*d*a+o*n*m-e*l*m)*A,t[12]=b*A,t[13]=(c*y*r-v*d*r+v*n*p-e*y*p-c*n*x+e*d*x)*A,t[14]=(v*l*r-o*y*r-v*n*h+e*y*h+o*n*x-e*l*x)*A,t[15]=(o*d*r-c*l*r+c*n*h-e*d*h-o*n*p+e*l*p)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,i=t.z;return e[0]*=n,e[4]*=r,e[8]*=i,e[1]*=n,e[5]*=r,e[9]*=i,e[2]*=n,e[6]*=r,e[10]*=i,e[3]*=n,e[7]*=r,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),i=1-n,o=t.x,l=t.y,h=t.z,a=i*o,c=i*l;return this.set(a*o+n,a*l-r*h,a*h+r*l,0,a*l+r*h,c*l+n,c*h-r*o,0,a*h-r*l,c*h+r*o,i*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,i,o){return this.set(1,n,i,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,i=e._x,o=e._y,l=e._z,h=e._w,a=i+i,c=o+o,d=l+l,p=i*a,m=i*c,v=i*d,y=o*c,x=o*d,_=l*d,R=h*a,T=h*c,S=h*d,b=n.x,I=n.y,A=n.z;return r[0]=(1-(y+_))*b,r[1]=(m+S)*b,r[2]=(v-T)*b,r[3]=0,r[4]=(m-S)*I,r[5]=(1-(p+_))*I,r[6]=(x+R)*I,r[7]=0,r[8]=(v+T)*A,r[9]=(x-R)*A,r[10]=(1-(p+y))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let i=Ps.set(r[0],r[1],r[2]).length();const o=Ps.set(r[4],r[5],r[6]).length(),l=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),t.x=r[12],t.y=r[13],t.z=r[14],ei.copy(this);const a=1/i,c=1/o,d=1/l;return ei.elements[0]*=a,ei.elements[1]*=a,ei.elements[2]*=a,ei.elements[4]*=c,ei.elements[5]*=c,ei.elements[6]*=c,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,e.setFromRotationMatrix(ei),n.x=i,n.y=o,n.z=l,this}makePerspective(t,e,n,r,i,o,l=ui,h=!1){const a=this.elements,c=2*i/(e-t),d=2*i/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let v,y;if(h)v=i/(o-i),y=o*i/(o-i);else if(l===ui)v=-(o+i)/(o-i),y=-2*o*i/(o-i);else if(l===Co)v=-o/(o-i),y=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=p,a[12]=0,a[1]=0,a[5]=d,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,r,i,o,l=ui,h=!1){const a=this.elements,c=2/(e-t),d=2/(n-r),p=-(e+t)/(e-t),m=-(n+r)/(n-r);let v,y;if(h)v=1/(o-i),y=o/(o-i);else if(l===ui)v=-2/(o-i),y=-(o+i)/(o-i);else if(l===Co)v=-1/(o-i),y=-i/(o-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=0,a[12]=p,a[1]=0,a[5]=d,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ps=new F,ei=new Ae,Sf=new F(0,0,0),wf=new F(1,1,1),Gi=new F,Xr=new F,Fn=new F,Bc=new Ae,zc=new Pr;class vi{constructor(t=0,e=0,n=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,i=r[0],o=r[4],l=r[8],h=r[1],a=r[5],c=r[9],d=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(p,a),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(h,a)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(h,i));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,i)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,a),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,a),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ef=0;const Hc=new F,Ls=new Pr,Ti=new Ae,$r=new F,lr=new F,Tf=new F,Af=new Pr,Gc=new F(1,0,0),Vc=new F(0,1,0),Wc=new F(0,0,1),qc={type:"added"},Rf={type:"removed"},Ds={type:"childadded",child:null},ua={type:"childremoved",child:null};class We extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new F,e=new vi,n=new Pr,r=new F(1,1,1);function i(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Jt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(lr,$r,this.up):Ti.lookAt($r,lr,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qc),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qc),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let a=0,c=h.length;a<c;a++){const d=h[a];i(t.shapes,d)}else i(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,a=this.material.length;h<a;h++)l.push(i(t.materials,this.material[h]));r.material=l}else r.material=i(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(i(t.animations,h))}}if(e){const l=o(t.geometries),h=o(t.materials),a=o(t.textures),c=o(t.images),d=o(t.shapes),p=o(t.skeletons),m=o(t.animations),v=o(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),a.length>0&&(n.textures=a),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(l){const h=[];for(const a in l){const c=l[a];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}We.DEFAULT_UP=new F(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new F,Ai=new F,da=new F,Ri=new F,ks=new F,Us=new F,Xc=new F,fa=new F,pa=new F,ma=new F,ga=new ve,_a=new ve,va=new ve;class Kn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ni.subVectors(t,e),r.cross(ni);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(t,e,n,r,i){ni.subVectors(r,e),Ai.subVectors(n,e),da.subVectors(t,e);const o=ni.dot(ni),l=ni.dot(Ai),h=ni.dot(da),a=Ai.dot(Ai),c=Ai.dot(da),d=o*a-l*l;if(d===0)return i.set(0,0,0),null;const p=1/d,m=(a*h-l*c)*p,v=(o*c-l*h)*p;return i.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,r,i,o,l,h){return this.getBarycoord(t,e,n,r,Ri)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(i,Ri.x),h.addScaledVector(o,Ri.y),h.addScaledVector(l,Ri.z),h)}static getInterpolatedAttribute(t,e,n,r,i,o){return ga.setScalar(0),_a.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,n),va.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ga,i.x),o.addScaledVector(_a,i.y),o.addScaledVector(va,i.z),o}static isFrontFacing(t,e,n,r){return ni.subVectors(n,e),Ai.subVectors(t,e),ni.cross(Ai).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ni.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,i){return Kn.getInterpolation(t,this.a,this.b,this.c,e,n,r,i)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,i=this.c;let o,l;ks.subVectors(r,n),Us.subVectors(i,n),fa.subVectors(t,n);const h=ks.dot(fa),a=Us.dot(fa);if(h<=0&&a<=0)return e.copy(n);pa.subVectors(t,r);const c=ks.dot(pa),d=Us.dot(pa);if(c>=0&&d<=c)return e.copy(r);const p=h*d-c*a;if(p<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(n).addScaledVector(ks,o);ma.subVectors(t,i);const m=ks.dot(ma),v=Us.dot(ma);if(v>=0&&m<=v)return e.copy(i);const y=m*a-h*v;if(y<=0&&a>=0&&v<=0)return l=a/(a-v),e.copy(n).addScaledVector(Us,l);const x=c*v-m*d;if(x<=0&&d-c>=0&&m-v>=0)return Xc.subVectors(i,r),l=(d-c)/(d-c+(m-v)),e.copy(r).addScaledVector(Xc,l);const _=1/(x+y+p);return o=y*_,l=p*_,e.copy(n).addScaledVector(ks,o).addScaledVector(Us,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=tc(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,o=2*n-i;this.r=xa(o,i,t+1/3),this.g=xa(o,i,t),this.b=xa(o,i,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=Cn){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=r[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return ue.workingToColorSpace(hn.copy(this),t),Math.round(ae(hn.r*255,0,255))*65536+Math.round(ae(hn.g*255,0,255))*256+Math.round(ae(hn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,i=hn.b,o=Math.max(n,r,i),l=Math.min(n,r,i);let h,a;const c=(l+o)/2;if(l===o)h=0,a=0;else{const d=o-l;switch(a=c<=.5?d/(o+l):d/(2-o-l),o){case n:h=(r-i)/d+(r<i?6:0);break;case r:h=(i-n)/d+2;break;case i:h=(n-r)/d+4;break}h/=6}return t.h=h,t.s=a,t.l=c,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Cn){ue.workingToColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,r=hn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Yr);const n=vr(Vi.h,Yr.h,e),r=vr(Vi.s,Yr.s,e),i=vr(Vi.l,Yr.l,e);return this.setHSL(n,r,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*r,this.g=i[1]*e+i[4]*n+i[7]*r,this.b=i[2]*e+i[5]*n+i[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new $t;$t.NAMES=vu;let Cf=0;class bs extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Gs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const o=[];for(const l in i){const h=i[l];delete h.metadata,o.push(h)}return o}if(e){const i=r(t.textures),o=r(t.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qi extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new F,Kr=new ce;let If=0;class pi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,i){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),r=yn(r,this.array),i=yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class xu extends pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yu extends pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends pi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pf=0;const qn=new Ae,ya=new We,Ns=new F,On=new Lr,cr=new Lr,Ye=new F;class an extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?yu:xu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Jt().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,i=t.length;r<i;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const i=t[r];e.setXYZ(r,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const i=e[n];On.setFromBufferAttribute(i),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const l=e[i];cr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ye.addVectors(On.min,cr.min),On.expandByPoint(Ye),Ye.addVectors(On.max,cr.max),On.expandByPoint(Ye)):(On.expandByPoint(cr.min),On.expandByPoint(cr.max))}On.getCenter(n);let r=0;for(let i=0,o=t.count;i<o;i++)Ye.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Ye));if(e)for(let i=0,o=e.length;i<o;i++){const l=e[i],h=this.morphTargetsRelative;for(let a=0,c=l.count;a<c;a++)Ye.fromBufferAttribute(l,a),h&&(Ns.fromBufferAttribute(t,a),Ye.add(Ns)),r=Math.max(r,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],h=[];for(let f=0;f<n.count;f++)l[f]=new F,h[f]=new F;const a=new F,c=new F,d=new F,p=new ce,m=new ce,v=new ce,y=new F,x=new F;function _(f,u,g){a.fromBufferAttribute(n,f),c.fromBufferAttribute(n,u),d.fromBufferAttribute(n,g),p.fromBufferAttribute(i,f),m.fromBufferAttribute(i,u),v.fromBufferAttribute(i,g),c.sub(a),d.sub(a),m.sub(p),v.sub(p);const M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(M),x.copy(d).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(M),l[f].add(y),l[u].add(y),l[g].add(y),h[f].add(x),h[u].add(x),h[g].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let f=0,u=R.length;f<u;++f){const g=R[f],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const T=new F,S=new F,b=new F,I=new F;function A(f){b.fromBufferAttribute(r,f),I.copy(b);const u=l[f];T.copy(u),T.sub(b.multiplyScalar(b.dot(u))).normalize(),S.crossVectors(I,u);const M=S.dot(h[f])<0?-1:1;o.setXYZW(f,T.x,T.y,T.z,M)}for(let f=0,u=R.length;f<u;++f){const g=R[f],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new F,i=new F,o=new F,l=new F,h=new F,a=new F,c=new F,d=new F;if(t)for(let p=0,m=t.count;p<m;p+=3){const v=t.getX(p+0),y=t.getX(p+1),x=t.getX(p+2);r.fromBufferAttribute(e,v),i.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),c.subVectors(o,i),d.subVectors(r,i),c.cross(d),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),l.add(c),h.add(c),a.add(c),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(x,a.x,a.y,a.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),i.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),c.subVectors(o,i),d.subVectors(r,i),c.cross(d),n.setXYZ(p+0,c.x,c.y,c.z),n.setXYZ(p+1,c.x,c.y,c.z),n.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(l,h){const a=l.array,c=l.itemSize,d=l.normalized,p=new a.constructor(h.length*c);let m=0,v=0;for(let y=0,x=h.length;y<x;y++){l.isInterleavedBufferAttribute?m=h[y]*l.data.stride+l.offset:m=h[y]*c;for(let _=0;_<c;_++)p[v++]=a[m++]}return new pi(p,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],a=t(h,n);e.setAttribute(l,a)}const i=this.morphAttributes;for(const l in i){const h=[],a=i[l];for(let c=0,d=a.length;c<d;c++){const p=a[c],m=t(p,n);h.push(m)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const a=o[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const a in h)h[a]!==void 0&&(t[a]=h[a]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const a=n[h];t.data.attributes[h]=a.toJSON(t.data)}const r={};let i=!1;for(const h in this.morphAttributes){const a=this.morphAttributes[h],c=[];for(let d=0,p=a.length;d<p;d++){const m=a[d];c.push(m.toJSON(t.data))}c.length>0&&(r[h]=c,i=!0)}i&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const a in r){const c=r[a];this.setAttribute(a,c.clone(e))}const i=t.morphAttributes;for(const a in i){const c=[],d=i[a];for(let p=0,m=d.length;p<m;p++)c.push(d[p].clone(e));this.morphAttributes[a]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let a=0,c=o.length;a<c;a++){const d=o[a];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new Ae,ss=new nc,jr=new Dr,Yc=new F,Zr=new F,Jr=new F,Qr=new F,Ma=new F,to=new F,Kc=new F,eo=new F;class tn extends We{constructor(t=new an,e=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(i&&l){to.set(0,0,0);for(let h=0,a=i.length;h<a;h++){const c=l[h],d=i[h];c!==0&&(Ma.fromBufferAttribute(d,t),o?to.addScaledVector(Ma,c):to.addScaledVector(Ma.sub(e),c))}e.add(to)}return e}raycast(t,e){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),ss.copy(t.ray).recast(t.near),!(jr.containsPoint(ss.origin)===!1&&(ss.intersectSphere(jr,Yc)===null||ss.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&($c.copy(i).invert(),ss.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let r;const i=this.geometry,o=this.material,l=i.index,h=i.attributes.position,a=i.attributes.uv,c=i.attributes.uv1,d=i.attributes.normal,p=i.groups,m=i.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,y=p.length;v<y;v++){const x=p[v],_=o[x.materialIndex],R=Math.max(x.start,m.start),T=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=R,b=T;S<b;S+=3){const I=l.getX(S),A=l.getX(S+1),f=l.getX(S+2);r=no(this,_,t,n,a,c,d,I,A,f),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const R=l.getX(x),T=l.getX(x+1),S=l.getX(x+2);r=no(this,o,t,n,a,c,d,R,T,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let v=0,y=p.length;v<y;v++){const x=p[v],_=o[x.materialIndex],R=Math.max(x.start,m.start),T=Math.min(h.count,Math.min(x.start+x.count,m.start+m.count));for(let S=R,b=T;S<b;S+=3){const I=S,A=S+1,f=S+2;r=no(this,_,t,n,a,c,d,I,A,f),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const R=x,T=x+1,S=x+2;r=no(this,o,t,n,a,c,d,R,T,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function Lf(s,t,e,n,r,i,o,l){let h;if(t.side===bn?h=n.intersectTriangle(o,i,r,!0,l):h=n.intersectTriangle(r,i,o,t.side===Zi,l),h===null)return null;eo.copy(l),eo.applyMatrix4(s.matrixWorld);const a=e.ray.origin.distanceTo(eo);return a<e.near||a>e.far?null:{distance:a,point:eo.clone(),object:s}}function no(s,t,e,n,r,i,o,l,h,a){s.getVertexPosition(l,Zr),s.getVertexPosition(h,Jr),s.getVertexPosition(a,Qr);const c=Lf(s,t,e,n,Zr,Jr,Qr,Kc);if(c){const d=new F;Kn.getBarycoord(Kc,Zr,Jr,Qr,d),r&&(c.uv=Kn.getInterpolatedAttribute(r,l,h,a,d,new ce)),i&&(c.uv1=Kn.getInterpolatedAttribute(i,l,h,a,d,new ce)),o&&(c.normal=Kn.getInterpolatedAttribute(o,l,h,a,d,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const p={a:l,b:h,c:a,normal:new F,materialIndex:0};Kn.getNormal(Zr,Jr,Qr,p.normal),c.face=p,c.barycoord=d}return c}class Ji extends an{constructor(t=1,e=1,n=1,r=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:i,depthSegments:o};const l=this;r=Math.floor(r),i=Math.floor(i),o=Math.floor(o);const h=[],a=[],c=[],d=[];let p=0,m=0;v("z","y","x",-1,-1,n,e,t,o,i,0),v("z","y","x",1,-1,n,e,-t,o,i,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,i,4),v("x","y","z",-1,-1,t,e,-n,r,i,5),this.setIndex(h),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(d,2));function v(y,x,_,R,T,S,b,I,A,f,u){const g=S/A,M=b/f,C=S/2,L=b/2,k=I/2,U=A+1,H=f+1;let $=0,V=0;const J=new F;for(let et=0;et<H;et++){const gt=et*M-L;for(let Rt=0;Rt<U;Rt++){const kt=Rt*g-C;J[y]=kt*R,J[x]=gt*T,J[_]=k,a.push(J.x,J.y,J.z),J[y]=0,J[x]=0,J[_]=I>0?1:-1,c.push(J.x,J.y,J.z),d.push(Rt/A),d.push(1-et/f),$+=1}}for(let et=0;et<f;et++)for(let gt=0;gt<A;gt++){const Rt=p+gt+U*et,kt=p+gt+U*(et+1),Dt=p+(gt+1)+U*(et+1),Xt=p+(gt+1)+U*et;h.push(Rt,kt,Xt),h.push(kt,Dt,Xt),V+=6}l.addGroup(m,V,u),m+=V,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Mn(s){const t={};for(let e=0;e<s.length;e++){const n=js(s[e]);for(const r in n)t[r]=n[r]}return t}function Df(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const kf={clone:js,merge:Mn};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new F,jc=new ce,Zc=new ce;class zn extends bu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,jc,Zc),e.subVectors(Zc,jc)}setViewOffset(t,e,n,r,i,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,i=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,a=o.fullHeight;i+=o.offsetX*r/h,e-=o.offsetY*n/a,r*=o.width/h,n*=o.height/a}const l=this.filmOffset;l!==0&&(i+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fs=-90,Os=1;class Ff extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Fs,Os,t,e);r.layers=this.layers,this.add(r);const i=new zn(Fs,Os,t,e);i.layers=this.layers,this.add(i);const o=new zn(Fs,Os,t,e);o.layers=this.layers,this.add(o);const l=new zn(Fs,Os,t,e);l.layers=this.layers,this.add(l);const h=new zn(Fs,Os,t,e);h.layers=this.layers,this.add(h);const a=new zn(Fs,Os,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,i,o,l,h]=e;for(const a of e)this.remove(a);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,o,l,h,a,c]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,i),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,a),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,c),t.setRenderTarget(d,p,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Su extends Sn{constructor(t=[],e=$s,n,r,i,o,l,h,a,c){super(t,e,n,r,i,o,l,h,a,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Of extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Su(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),i=new xi({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Yi});i.uniforms.tEquirect.value=e;const o=new tn(r,i),l=e.minFilter;return e.minFilter===gs&&(e.minFilter=hi),new Ff(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const i=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(i)}}class le extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,i=null,o=null;const l=this._targetRay,h=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){o=!0;for(const y of t.hand.values()){const x=e.getJointPose(y,n),_=this._getHandJoint(a,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const c=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],p=c.position.distanceTo(d.position),m=.02,v=.005;a.inputState.pinching&&p>m+v?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&p<=m-v&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(h.matrix.fromArray(i.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,i.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(i.linearVelocity)):h.hasLinearVelocity=!1,i.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(i.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=i!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ic{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zf extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Sa=new F,Hf=new F,Gf=new Jt;class ls{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Sa.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gf.getNormalMatrix(t),r=this.coplanarPoint(Sa).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Dr,Vf=new ce(.5,.5),io=new F;class sc{constructor(t=new ls,e=new ls,n=new ls,r=new ls,i=new ls,o=new ls){this.planes=[t,e,n,r,i,o]}set(t,e,n,r,i,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(i),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){const r=this.planes,i=t.elements,o=i[0],l=i[1],h=i[2],a=i[3],c=i[4],d=i[5],p=i[6],m=i[7],v=i[8],y=i[9],x=i[10],_=i[11],R=i[12],T=i[13],S=i[14],b=i[15];if(r[0].setComponents(a-o,m-c,_-v,b-R).normalize(),r[1].setComponents(a+o,m+c,_+v,b+R).normalize(),r[2].setComponents(a+l,m+d,_+y,b+T).normalize(),r[3].setComponents(a-l,m-d,_-y,b-T).normalize(),n)r[4].setComponents(h,p,x,S).normalize(),r[5].setComponents(a-h,m-p,_-x,b-S).normalize();else if(r[4].setComponents(a-h,m-p,_-x,b-S).normalize(),e===ui)r[5].setComponents(a+h,m+p,_+x,b+S).normalize();else if(e===Co)r[5].setComponents(h,p,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);const e=Vf.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(io.x=r.normal.x>0?t.max.x:t.min.x,io.y=r.normal.y>0?t.max.y:t.min.y,io.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wu extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Po=new F,Lo=new F,Jc=new Ae,hr=new nc,so=new Dr,wa=new F,Qc=new F;class Wf extends We{constructor(t=new an,e=new wu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,i=e.count;r<i;r++)Po.fromBufferAttribute(e,r-1),Lo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Po.distanceTo(Lo);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,i=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=i,t.ray.intersectsSphere(so)===!1)return;Jc.copy(r).invert(),hr.copy(t.ray).applyMatrix4(Jc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=this.isLineSegments?2:1,c=n.index,p=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let y=m,x=v-1;y<x;y+=a){const _=c.getX(y),R=c.getX(y+1),T=ro(this,t,hr,h,_,R,y);T&&e.push(T)}if(this.isLineLoop){const y=c.getX(v-1),x=c.getX(m),_=ro(this,t,hr,h,y,x,v-1);_&&e.push(_)}}else{const m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let y=m,x=v-1;y<x;y+=a){const _=ro(this,t,hr,h,y,y+1,y);_&&e.push(_)}if(this.isLineLoop){const y=ro(this,t,hr,h,v-1,m,v-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function ro(s,t,e,n,r,i,o){const l=s.geometry.attributes.position;if(Po.fromBufferAttribute(l,r),Lo.fromBufferAttribute(l,i),e.distanceSqToSegment(Po,Lo,wa,Qc)>n)return;wa.applyMatrix4(s.matrixWorld);const a=t.ray.origin.distanceTo(wa);if(!(a<t.near||a>t.far))return{distance:a,point:Qc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const th=new F,eh=new F;class qf extends Wf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,i=e.count;r<i;r+=2)th.fromBufferAttribute(e,r),eh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+th.distanceTo(eh);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nl extends bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nh=new Ae,Fl=new nc,oo=new Dr,ao=new F;class ih extends We{constructor(t=new an,e=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,i=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),oo.radius+=i,t.ray.intersectsSphere(oo)===!1)return;nh.copy(r).invert(),Fl.copy(t.ray).applyMatrix4(nh);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=n.index,d=n.attributes.position;if(a!==null){const p=Math.max(0,o.start),m=Math.min(a.count,o.start+o.count);for(let v=p,y=m;v<y;v++){const x=a.getX(v);ao.fromBufferAttribute(d,x),sh(ao,x,h,r,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=p,y=m;v<y;v++)ao.fromBufferAttribute(d,v),sh(ao,v,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function sh(s,t,e,n,r,i,o){const l=Fl.distanceSqToPoint(s);if(l<e){const h=new F;Fl.closestPointToPoint(s,h),h.applyMatrix4(n);const a=r.ray.origin.distanceTo(h);if(a<r.near||a>r.far)return;i.push({distance:a,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Eu extends Sn{constructor(t,e,n,r,i,o,l,h,a){super(t,e,n,r,i,o,l,h,a),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tu extends Sn{constructor(t,e,n=xs,r,i,o,l=Gn,h=Gn,a,c=wr,d=1){if(c!==wr&&c!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,r,i,o,l,h,c,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ec(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Au extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Do extends an{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const i=[],o=[],l=[],h=[],a=new F,c=new ce;o.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const m=n+d/e*r;a.x=t*Math.cos(m),a.y=t*Math.sin(m),o.push(a.x,a.y,a.z),l.push(0,0,1),c.x=(o[p]/t+1)/2,c.y=(o[p+1]/t+1)/2,h.push(c.x,c.y)}for(let d=1;d<=e;d++)i.push(d,d+1,0);this.setIndex(i),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rc extends an{constructor(t=1,e=1,n=1,r=32,i=1,o=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:l,thetaLength:h};const a=this;r=Math.floor(r),i=Math.floor(i);const c=[],d=[],p=[],m=[];let v=0;const y=[],x=n/2;let _=0;R(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(p,3)),this.setAttribute("uv",new xe(m,2));function R(){const S=new F,b=new F;let I=0;const A=(e-t)/n;for(let f=0;f<=i;f++){const u=[],g=f/i,M=g*(e-t)+t;for(let C=0;C<=r;C++){const L=C/r,k=L*h+l,U=Math.sin(k),H=Math.cos(k);b.x=M*U,b.y=-g*n+x,b.z=M*H,d.push(b.x,b.y,b.z),S.set(U,A,H).normalize(),p.push(S.x,S.y,S.z),m.push(L,1-g),u.push(v++)}y.push(u)}for(let f=0;f<r;f++)for(let u=0;u<i;u++){const g=y[u][f],M=y[u+1][f],C=y[u+1][f+1],L=y[u][f+1];(t>0||u!==0)&&(c.push(g,M,L),I+=3),(e>0||u!==i-1)&&(c.push(M,C,L),I+=3)}a.addGroup(_,I,0),_+=I}function T(S){const b=v,I=new ce,A=new F;let f=0;const u=S===!0?t:e,g=S===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,x*g,0),p.push(0,g,0),m.push(.5,.5),v++;const M=v;for(let C=0;C<=r;C++){const k=C/r*h+l,U=Math.cos(k),H=Math.sin(k);A.x=u*H,A.y=x*g,A.z=u*U,d.push(A.x,A.y,A.z),p.push(0,g,0),I.x=U*.5+.5,I.y=H*.5*g+.5,m.push(I.x,I.y),v++}for(let C=0;C<r;C++){const L=b+C,k=M+C;S===!0?c.push(k,k+1,L):c.push(k+1,k,L),f+=3}a.addGroup(_,f,S===!0?1:2),_+=f}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const lo=new F,co=new F,Ea=new F,ho=new Kn;class Xf extends an{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),i=Math.cos(Vs*e),o=t.getIndex(),l=t.getAttribute("position"),h=o?o.count:l.count,a=[0,0,0],c=["a","b","c"],d=new Array(3),p={},m=[];for(let v=0;v<h;v+=3){o?(a[0]=o.getX(v),a[1]=o.getX(v+1),a[2]=o.getX(v+2)):(a[0]=v,a[1]=v+1,a[2]=v+2);const{a:y,b:x,c:_}=ho;if(y.fromBufferAttribute(l,a[0]),x.fromBufferAttribute(l,a[1]),_.fromBufferAttribute(l,a[2]),ho.getNormal(Ea),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let R=0;R<3;R++){const T=(R+1)%3,S=d[R],b=d[T],I=ho[c[R]],A=ho[c[T]],f=`${S}_${b}`,u=`${b}_${S}`;u in p&&p[u]?(Ea.dot(p[u].normal)<=i&&(m.push(I.x,I.y,I.z),m.push(A.x,A.y,A.z)),p[u]=null):f in p||(p[f]={index0:a[R],index1:a[T],normal:Ea.clone()})}}for(const v in p)if(p[v]){const{index0:y,index1:x}=p[v];lo.fromBufferAttribute(l,y),co.fromBufferAttribute(l,x),m.push(lo.x,lo.y,lo.z),m.push(co.x,co.y,co.z)}this.setAttribute("position",new xe(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Fo extends an{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const i=t/2,o=e/2,l=Math.floor(n),h=Math.floor(r),a=l+1,c=h+1,d=t/l,p=e/h,m=[],v=[],y=[],x=[];for(let _=0;_<c;_++){const R=_*p-o;for(let T=0;T<a;T++){const S=T*d-i;v.push(S,-R,0),y.push(0,0,1),x.push(T/l),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let R=0;R<l;R++){const T=R+a*_,S=R+a*(_+1),b=R+1+a*(_+1),I=R+1+a*_;m.push(T,S,I),m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.widthSegments,t.heightSegments)}}class oc extends an{constructor(t=.5,e=1,n=32,r=1,i=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const l=[],h=[],a=[],c=[];let d=t;const p=(e-t)/r,m=new F,v=new ce;for(let y=0;y<=r;y++){for(let x=0;x<=n;x++){const _=i+x/n*o;m.x=d*Math.cos(_),m.y=d*Math.sin(_),h.push(m.x,m.y,m.z),a.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,c.push(v.x,v.y)}d+=p}for(let y=0;y<r;y++){const x=y*(n+1);for(let _=0;_<n;_++){const R=_+x,T=R,S=R+n+1,b=R+n+2,I=R+1;l.push(T,S,I),l.push(S,b,I)}}this.setIndex(l),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Oo extends an{constructor(t=1,e=32,n=16,r=0,i=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:i,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(o+l,Math.PI);let a=0;const c=[],d=new F,p=new F,m=[],v=[],y=[],x=[];for(let _=0;_<=n;_++){const R=[],T=_/n;let S=0;_===0&&o===0?S=.5/e:_===n&&h===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const I=b/e;d.x=-t*Math.cos(r+I*i)*Math.sin(o+T*l),d.y=t*Math.cos(o+T*l),d.z=t*Math.sin(r+I*i)*Math.sin(o+T*l),v.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),x.push(I+S,1-T),R.push(a++)}c.push(R)}for(let _=0;_<n;_++)for(let R=0;R<e;R++){const T=c[_][R+1],S=c[_][R],b=c[_+1][R],I=c[_+1][R+1];(_!==0||o>0)&&m.push(T,S,I),(_!==n-1||h<Math.PI)&&m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class se extends bs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $f extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yf extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ac extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kf extends ac{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ta=new Ae,rh=new F,oh=new F;class Ru{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ah=new Ae,ur=new F,Aa=new F;class jf extends Ru{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,i=t.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),Aa.copy(n.position),Aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Aa),n.updateMatrixWorld(),r.makeTranslation(-ur.x,-ur.y,-ur.z),ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah,n.coordinateSystem,n.reversedDepth)}}class Ra extends ac{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new jf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cu extends bu{constructor(t=-1,e=1,n=1,r=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-t,o=n+t,l=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=a*this.view.offsetX,o=i+a*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(i,o,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zf extends Ru{constructor(){super(new Cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jf extends ac{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Zf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qf extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function lh(s,t,e,n){const r=tp(n);switch(e){case cu:return s*t;case uu:return s*t/r.components*r.byteLength;case Zl:return s*t/r.components*r.byteLength;case du:return s*t*2/r.components*r.byteLength;case Jl:return s*t*2/r.components*r.byteLength;case hu:return s*t*3/r.components*r.byteLength;case oi:return s*t*4/r.components*r.byteLength;case Ql:return s*t*4/r.components*r.byteLength;case yo:case Mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bo:case So:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(s,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(s,8)*Math.max(t,8)/2;case dl:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Cl:case Il:case Pl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ll:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kl:case Ul:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(s){switch(s){case _i:case ru:return{byteLength:1,components:1};case br:case ou:case Ir:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case xs:case Yl:case Di:return{byteLength:4,components:1};case au:case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iu(){let s=null,t=!1,e=null,n=null;function r(i,o){e(i,o),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){s=i}}}function ep(s){const t=new WeakMap;function e(l,h){const a=l.array,c=l.usage,d=a.byteLength,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,a,c),l.onUploadCallback();let m;if(a instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=s.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=s.SHORT;else if(a instanceof Uint32Array)m=s.UNSIGNED_INT;else if(a instanceof Int32Array)m=s.INT;else if(a instanceof Int8Array)m=s.BYTE;else if(a instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:p,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,h,a){const c=h.array,d=h.updateRanges;if(s.bindBuffer(a,l),d.length===0)s.bufferSubData(a,0,c);else{d.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<d.length;m++){const v=d[p],y=d[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,d[p]=y)}d.length=p+1;for(let m=0,v=d.length;m<v;m++){const y=d[m];s.bufferSubData(a,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(s.deleteBuffer(h.buffer),t.delete(l))}function o(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const a=t.get(l);if(a===void 0)t.set(l,e(l,h));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,h),a.version=l.version}}return{get:r,remove:i,update:o}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
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
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,tm=`struct PhysicalMaterial {
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
}`,em=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,c0=`#define DISTANCE
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
}`,h0=`#define DISTANCE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
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
}`,x0=`#define MATCAP
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
}`,y0=`#define MATCAP
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
}`,M0=`#define NORMAL
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
}`,b0=`#define NORMAL
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
}`,S0=`#define PHONG
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
}`,w0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,I0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,L0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:op,alphatest_pars_fragment:ap,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:Mp,color_pars_fragment:bp,color_pars_vertex:Sp,color_vertex:wp,common:Ep,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Dp,envmap_fragment:kp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:Hp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Xp,lights_pars_begin:$p,lights_toon_fragment:Kp,lights_toon_pars_fragment:jp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:vm,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:Mm,normal_pars_vertex:bm,normal_vertex:Sm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Im,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:km,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Om,shadowmap_vertex:Bm,shadowmask_pars_fragment:zm,skinbase_vertex:Hm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:qm,specularmap_pars_fragment:Xm,tonemapping_fragment:$m,tonemapping_pars_fragment:Ym,transmission_fragment:Km,transmission_pars_fragment:jm,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:Qm,worldpos_vertex:t0,background_vert:e0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:o0,depth_vert:a0,depth_frag:l0,distanceRGBA_vert:c0,distanceRGBA_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:x0,meshmatcap_frag:y0,meshnormal_vert:M0,meshnormal_frag:b0,meshphong_vert:S0,meshphong_frag:w0,meshphysical_vert:E0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:I0,shadow_vert:P0,shadow_frag:L0,sprite_vert:D0,sprite_frag:k0},dt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ci={basic:{uniforms:Mn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Mn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Mn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Mn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Mn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Mn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Mn([dt.points,dt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Mn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Mn([dt.common,dt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Mn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Mn([dt.sprite,dt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Mn([dt.common,dt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Mn([dt.lights,dt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ci.physical={uniforms:Mn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const uo={r:0,b:0,g:0},os=new vi,U0=new Ae;function N0(s,t,e,n,r,i,o){const l=new $t(0);let h=i===!0?0:1,a,c,d=null,p=0,m=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function y(T){let S=!1;const b=v(T);b===null?_(l,h):b&&b.isColor&&(_(b,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(T,S){const b=v(S);b&&(b.isCubeTexture||b.mapping===No)?(c===void 0&&(c=new tn(new Ji(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:js(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),os.copy(S.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(os)),c.material.toneMapped=ue.getTransfer(b.colorSpace)!==_e,(d!==b||p!==b.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,p=b.version,m=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(a===void 0&&(a=new tn(new Fo(2,2),new xi({name:"BackgroundMaterial",uniforms:js(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=b,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.toneMapped=ue.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),a.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||p!==b.version||m!==s.toneMapping)&&(a.material.needsUpdate=!0,d=b,p=b.version,m=s.toneMapping),a.layers.enableAll(),T.unshift(a,a.geometry,a.material,0,0,null))}function _(T,S){T.getRGB(uo,Mu(s)),n.buffers.color.setClear(uo.r,uo.g,uo.b,S,o)}function R(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(T,S=1){l.set(T),h=S,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,_(l,h)},render:y,addToRenderList:x,dispose:R}}function F0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=p(null);let i=r,o=!1;function l(g,M,C,L,k){let U=!1;const H=d(L,C,M);i!==H&&(i=H,a(i.object)),U=m(g,L,C,k),U&&v(g,L,C,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(g,M,C,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return s.createVertexArray()}function a(g){return s.bindVertexArray(g)}function c(g){return s.deleteVertexArray(g)}function d(g,M,C){const L=C.wireframe===!0;let k=n[g.id];k===void 0&&(k={},n[g.id]=k);let U=k[M.id];U===void 0&&(U={},k[M.id]=U);let H=U[L];return H===void 0&&(H=p(h()),U[L]=H),H}function p(g){const M=[],C=[],L=[];for(let k=0;k<e;k++)M[k]=0,C[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:L,object:g,attributes:{},index:null}}function m(g,M,C,L){const k=i.attributes,U=M.attributes;let H=0;const $=C.getAttributes();for(const V in $)if($[V].location>=0){const et=k[V];let gt=U[V];if(gt===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(gt=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(gt=g.instanceColor)),et===void 0||et.attribute!==gt||gt&&et.data!==gt.data)return!0;H++}return i.attributesNum!==H||i.index!==L}function v(g,M,C,L){const k={},U=M.attributes;let H=0;const $=C.getAttributes();for(const V in $)if($[V].location>=0){let et=U[V];et===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(et=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(et=g.instanceColor));const gt={};gt.attribute=et,et&&et.data&&(gt.data=et.data),k[V]=gt,H++}i.attributes=k,i.attributesNum=H,i.index=L}function y(){const g=i.newAttributes;for(let M=0,C=g.length;M<C;M++)g[M]=0}function x(g){_(g,0)}function _(g,M){const C=i.newAttributes,L=i.enabledAttributes,k=i.attributeDivisors;C[g]=1,L[g]===0&&(s.enableVertexAttribArray(g),L[g]=1),k[g]!==M&&(s.vertexAttribDivisor(g,M),k[g]=M)}function R(){const g=i.newAttributes,M=i.enabledAttributes;for(let C=0,L=M.length;C<L;C++)M[C]!==g[C]&&(s.disableVertexAttribArray(C),M[C]=0)}function T(g,M,C,L,k,U,H){H===!0?s.vertexAttribIPointer(g,M,C,k,U):s.vertexAttribPointer(g,M,C,L,k,U)}function S(g,M,C,L){y();const k=L.attributes,U=C.getAttributes(),H=M.defaultAttributeValues;for(const $ in U){const V=U[$];if(V.location>=0){let J=k[$];if(J===void 0&&($==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),$==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),J!==void 0){const et=J.normalized,gt=J.itemSize,Rt=t.get(J);if(Rt===void 0)continue;const kt=Rt.buffer,Dt=Rt.type,Xt=Rt.bytesPerElement,Y=Dt===s.INT||Dt===s.UNSIGNED_INT||J.gpuType===Yl;if(J.isInterleavedBufferAttribute){const Z=J.data,ut=Z.stride,Pt=J.offset;if(Z.isInstancedInterleavedBuffer){for(let vt=0;vt<V.locationSize;vt++)_(V.location+vt,Z.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let vt=0;vt<V.locationSize;vt++)x(V.location+vt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let vt=0;vt<V.locationSize;vt++)T(V.location+vt,gt/V.locationSize,Dt,et,ut*Xt,(Pt+gt/V.locationSize*vt)*Xt,Y)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)_(V.location+Z,J.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<V.locationSize;Z++)x(V.location+Z);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Z=0;Z<V.locationSize;Z++)T(V.location+Z,gt/V.locationSize,Dt,et,gt*Xt,gt/V.locationSize*Z*Xt,Y)}}else if(H!==void 0){const et=H[$];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(V.location,et);break;case 3:s.vertexAttrib3fv(V.location,et);break;case 4:s.vertexAttrib4fv(V.location,et);break;default:s.vertexAttrib1fv(V.location,et)}}}}R()}function b(){f();for(const g in n){const M=n[g];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g.id]}function A(g){for(const M in n){const C=n[M];if(C[g.id]===void 0)continue;const L=C[g.id];for(const k in L)c(L[k].object),delete L[k];delete C[g.id]}}function f(){u(),o=!0,i!==r&&(i=r,a(i.object))}function u(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:f,resetDefaultState:u,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:x,disableUnusedAttributes:R}}function O0(s,t,e){let n;function r(a){n=a}function i(a,c){s.drawArrays(n,a,c),e.update(c,n,1)}function o(a,c,d){d!==0&&(s.drawArraysInstanced(n,a,c,d),e.update(c,n,d))}function l(a,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v];e.update(m,n,1)}function h(a,c,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<a.length;v++)o(a[v],c[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,a,0,c,0,p,0,d);let v=0;for(let y=0;y<d;y++)v+=c[y]*p[y];e.update(v,n,1)}}this.setMode=r,this.render=i,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function B0(s,t,e,n){let r;function i(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==oi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const f=A===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_i&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!f)}function h(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const c=h(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:b,maxSamples:I}}function z0(s){const t=this;let e=null,n=0,r=!1,i=!1;const o=new ls,l=new Jt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||r;return r=p,n=d.length,m},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(d,p){e=c(d,p,0)},this.setState=function(d,p,m){const v=d.clippingPlanes,y=d.clipIntersection,x=d.clipShadows,_=s.get(d);if(!r||v===null||v.length===0||i&&!x)i?c(null):a();else{const R=i?0:n,T=R*4;let S=_.clippingState||null;h.value=S,S=c(v,p,T,m);for(let b=0;b!==T;++b)S[b]=e[b];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function a(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,p,m,v){const y=d!==null?d.length:0;let x=null;if(y!==0){if(x=h.value,v!==!0||x===null){const _=m+y*4,R=p.matrixWorldInverse;l.getNormalMatrix(R),(x===null||x.length<_)&&(x=new Float32Array(_));for(let T=0,S=m;T!==y;++T,S+=4)o.copy(d[T]).applyMatrix4(R,l),o.normal.toArray(x,S),x[S+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function H0(s){let t=new WeakMap;function e(o,l){return l===sl?o.mapping=$s:l===rl&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===sl||l===rl)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const a=new Of(h.height);return a.fromEquirectangularTexture(s,o),t.set(o,a),o.addEventListener("dispose",r),e(a.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}const Hs=4,ch=[.125,.215,.35,.446,.526,.582],ds=20,Ca=new Cu,hh=new $t;let Ia=null,Pa=0,La=0,Da=!1;const cs=(1+Math.sqrt(5))/2,Bs=1/cs,uh=[new F(-cs,Bs,0),new F(cs,Bs,0),new F(-Bs,0,cs),new F(Bs,0,cs),new F(0,cs,-Bs),new F(0,cs,Bs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],G0=new F;class dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,i={}){const{size:o=256,position:l=G0}=i;Ia=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Pa,La),this._renderer.xr.enabled=Da,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Ir,format:oi,colorSpace:Ks,depthBuffer:!1},r=fh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(i)),this._blurMaterial=W0(i,t,e)}return r}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,n,r,i){const h=new zn(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(hh),d.toneMapping=Ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const y=new qi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),x=new tn(new Ji,y);let _=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,_=!0):(y.color.copy(hh),_=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(h.up.set(0,a[T],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x+c[T],i.y,i.z)):S===1?(h.up.set(0,0,a[T]),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y+c[T],i.z)):(h.up.set(0,a[T],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y,i.z+c[T]));const b=this._cubeSize;fo(r,S*b,T>2?b:0,b,b),d.setRenderTarget(r),_&&d.render(x,h),d.render(t,h)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===$s||t.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const i=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=t;const h=this._cubeSize;fo(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Ca)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let i=1;i<r;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=uh[(r-i-1)%uh.length];this._blur(t,i-1,i,o,l)}e.autoClear=n}_blur(t,e,n,r,i){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",i),this._halfBlur(o,t,n,n,r,"longitudinal",i)}_halfBlur(t,e,n,r,i,o,l){const h=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new tn(this._lodPlanes[r],a),p=a.uniforms,m=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*ds-1),y=i/v,x=isFinite(i)?1+Math.floor(c*y):ds;x>ds&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ds}`);const _=[];let R=0;for(let A=0;A<ds;++A){const f=A/y,u=Math.exp(-f*f/2);_.push(u),A===0?R+=u:A<x&&(R+=2*u)}for(let A=0;A<_.length;A++)_[A]=_[A]/R;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=_,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:T}=this;p.dTheta.value=v,p.mipInt.value=T-n;const S=this._sizeLods[r],b=3*S*(r>T-Hs?r-T+Hs:0),I=4*(this._cubeSize-S);fo(e,b,I,3*S,2*S),h.setRenderTarget(e),h.render(d,Ca)}}function V0(s){const t=[],e=[],n=[];let r=s;const i=s-Hs+1+ch.length;for(let o=0;o<i;o++){const l=Math.pow(2,r);e.push(l);let h=1/l;o>s-Hs?h=ch[o-s+Hs-1]:o===0&&(h=0),n.push(h);const a=1/(l-2),c=-a,d=1+a,p=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,v=6,y=3,x=2,_=1,R=new Float32Array(y*v*m),T=new Float32Array(x*v*m),S=new Float32Array(_*v*m);for(let I=0;I<m;I++){const A=I%3*2/3-1,f=I>2?0:-1,u=[A,f,0,A+2/3,f,0,A+2/3,f+1,0,A,f,0,A+2/3,f+1,0,A,f+1,0];R.set(u,y*v*I),T.set(p,x*v*I);const g=[I,I,I,I,I,I];S.set(g,_*v*I)}const b=new an;b.setAttribute("position",new pi(R,y)),b.setAttribute("uv",new pi(T,x)),b.setAttribute("faceIndex",new pi(S,_)),t.push(b),r>Hs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fh(s,t,e){const n=new ys(s,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function W0(s,t,e){const n=new Float32Array(ds),r=new F(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ph(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function mh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function q0(s){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,a=h===sl||h===rl,c=h===$s||h===Ys;if(a||c){let d=t.get(l);const p=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return e===null&&(e=new dh(s)),d=a?e.fromEquirectangular(l,d):e.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const m=l.image;return a&&m&&m.height>0||c&&m&&r(m)?(e===null&&(e=new dh(s)),d=a?e.fromEquirectangular(l):e.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",i),d.texture):null}}}return l}function r(l){let h=0;const a=6;for(let c=0;c<a;c++)l[c]!==void 0&&h++;return h===a}function i(l){const h=l.target;h.removeEventListener("dispose",i);const a=t.get(h);a!==void 0&&(t.delete(h),a.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function X0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $0(s,t,e,n){const r={},i=new WeakMap;function o(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete r[p.id];const m=i.get(p);m&&(t.remove(m),i.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function h(d){const p=d.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER)}function a(d){const p=[],m=d.index,v=d.attributes.position;let y=0;if(m!==null){const R=m.array;y=m.version;for(let T=0,S=R.length;T<S;T+=3){const b=R[T+0],I=R[T+1],A=R[T+2];p.push(b,I,I,A,A,b)}}else if(v!==void 0){const R=v.array;y=v.version;for(let T=0,S=R.length/3-1;T<S;T+=3){const b=T+0,I=T+1,A=T+2;p.push(b,I,I,A,A,b)}}else return;const x=new(mu(p)?yu:xu)(p,1);x.version=y;const _=i.get(d);_&&t.remove(_),i.set(d,x)}function c(d){const p=i.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&a(d)}else a(d);return i.get(d)}return{get:l,update:h,getWireframeAttribute:c}}function Y0(s,t,e){let n;function r(p){n=p}let i,o;function l(p){i=p.type,o=p.bytesPerElement}function h(p,m){s.drawElements(n,m,i,p*o),e.update(m,n,1)}function a(p,m,v){v!==0&&(s.drawElementsInstanced(n,m,i,p*o,v),e.update(m,n,v))}function c(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,i,p,0,v);let x=0;for(let _=0;_<v;_++)x+=m[_];e.update(x,n,1)}function d(p,m,v,y){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<p.length;_++)a(p[_]/o,m[_],y[_]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,i,p,0,y,0,v);let _=0;for(let R=0;R<v;R++)_+=m[R]*y[R];e.update(_,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function K0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,l){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=l*(i/3);break;case s.LINES:e.lines+=l*(i/2);break;case s.LINE_STRIP:e.lines+=l*(i-1);break;case s.LINE_LOOP:e.lines+=l*i;break;case s.POINTS:e.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function j0(s,t,e){const n=new WeakMap,r=new ve;function i(o,l,h){const a=o.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=c!==void 0?c.length:0;let p=n.get(l);if(p===void 0||p.count!==d){let g=function(){f.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var m=g;p!==void 0&&p.texture.dispose();const v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],R=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),x===!0&&(S=3);let b=l.attributes.position.count*S,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*I*4*d),f=new gu(A,b,I,d);f.type=Di,f.needsUpdate=!0;const u=S*4;for(let M=0;M<d;M++){const C=_[M],L=R[M],k=T[M],U=b*I*4*M;for(let H=0;H<C.count;H++){const $=H*u;v===!0&&(r.fromBufferAttribute(C,H),A[U+$+0]=r.x,A[U+$+1]=r.y,A[U+$+2]=r.z,A[U+$+3]=0),y===!0&&(r.fromBufferAttribute(L,H),A[U+$+4]=r.x,A[U+$+5]=r.y,A[U+$+6]=r.z,A[U+$+7]=0),x===!0&&(r.fromBufferAttribute(k,H),A[U+$+8]=r.x,A[U+$+9]=r.y,A[U+$+10]=r.z,A[U+$+11]=k.itemSize===4?r.w:1)}}p={count:d,texture:f,size:new ce(b,I)},n.set(l,p),l.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let v=0;for(let x=0;x<a.length;x++)v+=a[x];const y=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",a)}h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:i}}function Z0(s,t,e,n){let r=new WeakMap;function i(h){const a=n.render.frame,c=h.geometry,d=t.get(h,c);if(r.get(d)!==a&&(t.update(d),r.set(d,a)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==a&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,a))),h.isSkinnedMesh){const p=h.skeleton;r.get(p)!==a&&(p.update(),r.set(p,a))}return d}function o(){r=new WeakMap}function l(h){const a=h.target;a.removeEventListener("dispose",l),e.remove(a.instanceMatrix),a.instanceColor!==null&&e.remove(a.instanceColor)}return{update:i,dispose:o}}const Pu=new Sn,gh=new Tu(1,1),Lu=new gu,Du=new Mf,ku=new Su,_h=[],vh=[],xh=new Float32Array(16),yh=new Float32Array(9),Mh=new Float32Array(4);function tr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let i=_h[r];if(i===void 0&&(i=new Float32Array(r),_h[r]=i),t!==0){n.toArray(i,0);for(let o=1,l=0;o!==t;++o)l+=e,s[o].toArray(i,l)}return i}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Bo(s,t){let e=vh[t];e===void 0&&(e=new Int32Array(t),vh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function J0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function ng(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;Mh.set(n),s.uniformMatrix2fv(this.addr,!1,Mh),Xe(e,n)}}function ig(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;yh.set(n),s.uniformMatrix3fv(this.addr,!1,yh),Xe(e,n)}}function sg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;xh.set(n),s.uniformMatrix4fv(this.addr,!1,xh),Xe(e,n)}}function rg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function cg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function fg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let i;this.type===s.SAMPLER_2D_SHADOW?(gh.compareFunction=pu,i=gh):i=Pu,e.setTexture2D(t||i,r)}function pg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Du,r)}function mg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ku,r)}function gg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Lu,r)}function _g(s){switch(s){case 5126:return J0;case 35664:return Q0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(s,t){s.uniform1fv(this.addr,t)}function xg(s,t){const e=tr(t,this.size,2);s.uniform2fv(this.addr,e)}function yg(s,t){const e=tr(t,this.size,3);s.uniform3fv(this.addr,e)}function Mg(s,t){const e=tr(t,this.size,4);s.uniform4fv(this.addr,e)}function bg(s,t){const e=tr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sg(s,t){const e=tr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wg(s,t){const e=tr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Eg(s,t){s.uniform1iv(this.addr,t)}function Tg(s,t){s.uniform2iv(this.addr,t)}function Ag(s,t){s.uniform3iv(this.addr,t)}function Rg(s,t){s.uniform4iv(this.addr,t)}function Cg(s,t){s.uniform1uiv(this.addr,t)}function Ig(s,t){s.uniform2uiv(this.addr,t)}function Pg(s,t){s.uniform3uiv(this.addr,t)}function Lg(s,t){s.uniform4uiv(this.addr,t)}function Dg(s,t,e){const n=this.cache,r=t.length,i=Bo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Pu,i[o])}function kg(s,t,e){const n=this.cache,r=t.length,i=Bo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Du,i[o])}function Ug(s,t,e){const n=this.cache,r=t.length,i=Bo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ku,i[o])}function Ng(s,t,e){const n=this.cache,r=t.length,i=Bo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Lu,i[o])}function Fg(s){switch(s){case 5126:return vg;case 35664:return xg;case 35665:return yg;case 35666:return Mg;case 35674:return bg;case 35675:return Sg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}}class zg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let i=0,o=r.length;i!==o;++i){const l=r[i];l.setValue(t,e[l.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function bh(s,t){s.seq.push(t),s.map[t.id]=t}function Hg(s,t,e){const n=s.name,r=n.length;for(ka.lastIndex=0;;){const i=ka.exec(n),o=ka.lastIndex;let l=i[1];const h=i[2]==="]",a=i[3];if(h&&(l=l|0),a===void 0||a==="["&&o+2===r){bh(e,a===void 0?new Og(l,s,t):new Bg(l,s,t));break}else{let d=e.map[l];d===void 0&&(d=new zg(l),bh(e,d)),e=d}}}class wo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=t.getActiveUniform(e,r),o=t.getUniformLocation(e,i.name);Hg(i,o,this)}}setValue(t,e,n,r){const i=this.map[e];i!==void 0&&i.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let i=0,o=e.length;i!==o;++i){const l=e[i],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,i=t.length;r!==i;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Sh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Gg=37297;let Vg=0;function Wg(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let o=r;o<i;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const wh=new Jt;function qg(s){ue._getMatrix(wh,ue.workingColorSpace,s);const t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case Ro:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Eh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=(s.getShaderInfoLog(t)||"").trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Wg(s.getShaderSource(t),l)}else return i}function Xg(s,t){const e=qg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $g(s,t){let e;switch(t){case Dd:e="Linear";break;case kd:e="Reinhard";break;case Ud:e="Cineon";break;case Nd:e="ACESFilmic";break;case Od:e="AgX";break;case Bd:e="Neutral";break;case Fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const po=new F;function Yg(){ue.getLuminanceCoefficients(po);const s=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function jg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=s.getActiveAttrib(t,r),o=i.name;let l=1;i.type===s.FLOAT_MAT2&&(l=2),i.type===s.FLOAT_MAT3&&(l=3),i.type===s.FLOAT_MAT4&&(l=4),e[o]={type:i.type,location:s.getAttribLocation(t,o),locationSize:l}}return e}function pr(s){return s!==""}function Th(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(Jg,t1)}const Qg=new Map;function t1(s,t){let e=te[t];if(e===void 0){const n=Qg.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}const e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(s){return s.replace(e1,n1)}function n1(s,t,e,n){let r="";for(let i=parseInt(t);i<parseInt(e);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Ch(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function i1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===dd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function s1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Ys:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function o1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $l:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function a1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function l1(s,t,e,n){const r=s.getContext(),i=e.defines;let o=e.vertexShader,l=e.fragmentShader;const h=i1(e),a=s1(e),c=r1(e),d=o1(e),p=a1(e),m=Kg(e),v=jg(i),y=r.createProgram();let x,_,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pr).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pr).join(`
`),_.length>0&&(_+=`
`)):(x=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),_=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?te.tonemapping_pars_fragment:"",e.toneMapping!==Ki?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=Ol(o),o=Th(o,e),o=Ah(o,e),l=Ol(l),l=Th(l,e),l=Ah(l,e),o=Rh(o),l=Rh(l),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=R+x+o,S=R+_+l,b=Sh(r,r.VERTEX_SHADER,T),I=Sh(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,I),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(M){if(s.debug.checkShaderErrors){const C=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(b)||"",k=r.getShaderInfoLog(I)||"",U=C.trim(),H=L.trim(),$=k.trim();let V=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,y,b,I);else{const et=Eh(r,b,"vertex"),gt=Eh(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+U+`
`+et+`
`+gt)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||$==="")&&(J=!1);J&&(M.diagnostics={runnable:V,programLog:U,vertexShader:{log:H,prefix:x},fragmentShader:{log:$,prefix:_}})}r.deleteShader(b),r.deleteShader(I),f=new wo(r,y),u=Zg(r,y)}let f;this.getUniforms=function(){return f===void 0&&A(this),f};let u;this.getAttributes=function(){return u===void 0&&A(this),u};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(y,Gg)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=I,this}let c1=0;class h1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new u1(t),e.set(t,n)),n}}class u1{constructor(t){this.id=c1++,this.code=t,this.usedTimes=0}}function d1(s,t,e,n,r,i,o){const l=new _u,h=new h1,a=new Set,c=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(u){return a.add(u),u===0?"uv":`uv${u}`}function x(u,g,M,C,L){const k=C.fog,U=L.geometry,H=u.isMeshStandardMaterial?C.environment:null,$=(u.isMeshStandardMaterial?e:t).get(u.envMap||H),V=$&&$.mapping===No?$.image.height:null,J=v[u.type];u.precision!==null&&(m=r.getMaxPrecision(u.precision),m!==u.precision&&console.warn("THREE.WebGLProgram.getParameters:",u.precision,"not supported, using",m,"instead."));const et=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,gt=et!==void 0?et.length:0;let Rt=0;U.morphAttributes.position!==void 0&&(Rt=1),U.morphAttributes.normal!==void 0&&(Rt=2),U.morphAttributes.color!==void 0&&(Rt=3);let kt,Dt,Xt,Y;if(J){const fe=ci[J];kt=fe.vertexShader,Dt=fe.fragmentShader}else kt=u.vertexShader,Dt=u.fragmentShader,h.update(u),Xt=h.getVertexShaderID(u),Y=h.getFragmentShaderID(u);const Z=s.getRenderTarget(),ut=s.state.buffers.depth.getReversed(),Pt=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Gt=!!u.map,Re=!!u.matcap,D=!!$,Me=!!u.aoMap,zt=!!u.lightMap,Vt=!!u.bumpMap,Et=!!u.normalMap,Ee=!!u.displacementMap,Tt=!!u.emissiveMap,Qt=!!u.metalnessMap,$e=!!u.roughnessMap,ke=u.anisotropy>0,P=u.clearcoat>0,w=u.dispersion>0,G=u.iridescence>0,j=u.sheen>0,tt=u.transmission>0,K=ke&&!!u.anisotropyMap,Lt=P&&!!u.clearcoatMap,at=P&&!!u.clearcoatNormalMap,At=P&&!!u.clearcoatRoughnessMap,Ct=G&&!!u.iridescenceMap,rt=G&&!!u.iridescenceThicknessMap,_t=j&&!!u.sheenColorMap,Ht=j&&!!u.sheenRoughnessMap,It=!!u.specularMap,ft=!!u.specularColorMap,Zt=!!u.specularIntensityMap,O=tt&&!!u.transmissionMap,ot=tt&&!!u.thicknessMap,ct=!!u.gradientMap,yt=!!u.alphaMap,it=u.alphaTest>0,Q=!!u.alphaHash,St=!!u.extensions;let Kt=Ki;u.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Kt=s.toneMapping);const be={shaderID:J,shaderType:u.type,shaderName:u.name,vertexShader:kt,fragmentShader:Dt,defines:u.defines,customVertexShaderID:Xt,customFragmentShaderID:Y,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:m,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&L.instanceColor!==null,instancingMorph:Pt&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ks,alphaToCoverage:!!u.alphaToCoverage,map:Gt,matcap:Re,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:V,aoMap:Me,lightMap:zt,bumpMap:Vt,normalMap:Et,displacementMap:p&&Ee,emissiveMap:Tt,normalMapObjectSpace:Et&&u.normalMapType===Vd,normalMapTangentSpace:Et&&u.normalMapType===fu,metalnessMap:Qt,roughnessMap:$e,anisotropy:ke,anisotropyMap:K,clearcoat:P,clearcoatMap:Lt,clearcoatNormalMap:at,clearcoatRoughnessMap:At,dispersion:w,iridescence:G,iridescenceMap:Ct,iridescenceThicknessMap:rt,sheen:j,sheenColorMap:_t,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:ft,specularIntensityMap:Zt,transmission:tt,transmissionMap:O,thicknessMap:ot,gradientMap:ct,opaque:u.transparent===!1&&u.blending===Gs&&u.alphaToCoverage===!1,alphaMap:yt,alphaTest:it,alphaHash:Q,combine:u.combine,mapUv:Gt&&y(u.map.channel),aoMapUv:Me&&y(u.aoMap.channel),lightMapUv:zt&&y(u.lightMap.channel),bumpMapUv:Vt&&y(u.bumpMap.channel),normalMapUv:Et&&y(u.normalMap.channel),displacementMapUv:Ee&&y(u.displacementMap.channel),emissiveMapUv:Tt&&y(u.emissiveMap.channel),metalnessMapUv:Qt&&y(u.metalnessMap.channel),roughnessMapUv:$e&&y(u.roughnessMap.channel),anisotropyMapUv:K&&y(u.anisotropyMap.channel),clearcoatMapUv:Lt&&y(u.clearcoatMap.channel),clearcoatNormalMapUv:at&&y(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&y(u.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&y(u.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&y(u.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&y(u.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&y(u.sheenRoughnessMap.channel),specularMapUv:It&&y(u.specularMap.channel),specularColorMapUv:ft&&y(u.specularColorMap.channel),specularIntensityMapUv:Zt&&y(u.specularIntensityMap.channel),transmissionMapUv:O&&y(u.transmissionMap.channel),thicknessMapUv:ot&&y(u.thicknessMap.channel),alphaMapUv:yt&&y(u.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Et||ke),vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Gt||yt),fog:!!k,useFog:u.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:u.flatShading===!0&&u.wireframe===!1,sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Rt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:u.dithering,shadowMapEnabled:s.shadowMap.enabled&&M.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Gt&&u.map.isVideoTexture===!0&&ue.getTransfer(u.map.colorSpace)===_e,decodeVideoTextureEmissive:Tt&&u.emissiveMap.isVideoTexture===!0&&ue.getTransfer(u.emissiveMap.colorSpace)===_e,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===Ke,flipSided:u.side===bn,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:St&&u.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&u.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};return be.vertexUv1s=a.has(1),be.vertexUv2s=a.has(2),be.vertexUv3s=a.has(3),a.clear(),be}function _(u){const g=[];if(u.shaderID?g.push(u.shaderID):(g.push(u.customVertexShaderID),g.push(u.customFragmentShaderID)),u.defines!==void 0)for(const M in u.defines)g.push(M),g.push(u.defines[M]);return u.isRawShaderMaterial===!1&&(R(g,u),T(g,u),g.push(s.outputColorSpace)),g.push(u.customProgramCacheKey),g.join()}function R(u,g){u.push(g.precision),u.push(g.outputColorSpace),u.push(g.envMapMode),u.push(g.envMapCubeUVHeight),u.push(g.mapUv),u.push(g.alphaMapUv),u.push(g.lightMapUv),u.push(g.aoMapUv),u.push(g.bumpMapUv),u.push(g.normalMapUv),u.push(g.displacementMapUv),u.push(g.emissiveMapUv),u.push(g.metalnessMapUv),u.push(g.roughnessMapUv),u.push(g.anisotropyMapUv),u.push(g.clearcoatMapUv),u.push(g.clearcoatNormalMapUv),u.push(g.clearcoatRoughnessMapUv),u.push(g.iridescenceMapUv),u.push(g.iridescenceThicknessMapUv),u.push(g.sheenColorMapUv),u.push(g.sheenRoughnessMapUv),u.push(g.specularMapUv),u.push(g.specularColorMapUv),u.push(g.specularIntensityMapUv),u.push(g.transmissionMapUv),u.push(g.thicknessMapUv),u.push(g.combine),u.push(g.fogExp2),u.push(g.sizeAttenuation),u.push(g.morphTargetsCount),u.push(g.morphAttributeCount),u.push(g.numDirLights),u.push(g.numPointLights),u.push(g.numSpotLights),u.push(g.numSpotLightMaps),u.push(g.numHemiLights),u.push(g.numRectAreaLights),u.push(g.numDirLightShadows),u.push(g.numPointLightShadows),u.push(g.numSpotLightShadows),u.push(g.numSpotLightShadowsWithMaps),u.push(g.numLightProbes),u.push(g.shadowMapType),u.push(g.toneMapping),u.push(g.numClippingPlanes),u.push(g.numClipIntersection),u.push(g.depthPacking)}function T(u,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),g.gradientMap&&l.enable(22),u.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.reversedDepthBuffer&&l.enable(4),g.skinning&&l.enable(5),g.morphTargets&&l.enable(6),g.morphNormals&&l.enable(7),g.morphColors&&l.enable(8),g.premultipliedAlpha&&l.enable(9),g.shadowMapEnabled&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),g.decodeVideoTextureEmissive&&l.enable(20),g.alphaToCoverage&&l.enable(21),u.push(l.mask)}function S(u){const g=v[u.type];let M;if(g){const C=ci[g];M=kf.clone(C.uniforms)}else M=u.uniforms;return M}function b(u,g){let M;for(let C=0,L=c.length;C<L;C++){const k=c[C];if(k.cacheKey===g){M=k,++M.usedTimes;break}}return M===void 0&&(M=new l1(s,g,u,i),c.push(M)),M}function I(u){if(--u.usedTimes===0){const g=c.indexOf(u);c[g]=c[c.length-1],c.pop(),u.destroy()}}function A(u){h.remove(u)}function f(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:S,acquireProgram:b,releaseProgram:I,releaseShaderCache:A,programs:c,dispose:f}}function f1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function r(o,l,h){s.get(o)[l]=h}function i(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:i}}function p1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ih(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ph(){const s=[];let t=0;const e=[],n=[],r=[];function i(){t=0,e.length=0,n.length=0,r.length=0}function o(d,p,m,v,y,x){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:p,material:m,groupOrder:v,renderOrder:d.renderOrder,z:y,group:x},s[t]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=m,_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=y,_.group=x),t++,_}function l(d,p,m,v,y,x){const _=o(d,p,m,v,y,x);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function h(d,p,m,v,y,x){const _=o(d,p,m,v,y,x);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function a(d,p){e.length>1&&e.sort(d||p1),n.length>1&&n.sort(p||Ih),r.length>1&&r.sort(p||Ih)}function c(){for(let d=t,p=s.length;d<p;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:i,push:l,unshift:h,finish:c,sort:a}}function m1(){let s=new WeakMap;function t(n,r){const i=s.get(n);let o;return i===void 0?(o=new Ph,s.set(n,[o])):r>=i.length?(o=new Ph,i.push(o)):o=i[r],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function g1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new $t};break;case"SpotLight":e={position:new F,direction:new F,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function _1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let v1=0;function x1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function y1(s){const t=new g1,e=_1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new F);const r=new F,i=new Ae,o=new Ae;function l(a){let c=0,d=0,p=0;for(let u=0;u<9;u++)n.probe[u].set(0,0,0);let m=0,v=0,y=0,x=0,_=0,R=0,T=0,S=0,b=0,I=0,A=0;a.sort(x1);for(let u=0,g=a.length;u<g;u++){const M=a[u],C=M.color,L=M.intensity,k=M.distance,U=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=C.r*L,d+=C.g*L,p+=C.b*L;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],L);A++}else if(M.isDirectionalLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const $=M.shadow,V=e.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=U,n.directionalShadowMatrix[m]=M.shadow.matrix,R++}n.directional[m]=H,m++}else if(M.isSpotLight){const H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(C).multiplyScalar(L),H.distance=k,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[y]=H;const $=M.shadow;if(M.map&&(n.spotLightMap[b]=M.map,b++,$.updateMatrices(M),M.castShadow&&I++),n.spotLightMatrix[y]=$.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=U,S++}y++}else if(M.isRectAreaLight){const H=t.get(M);H.color.copy(C).multiplyScalar(L),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[x]=H,x++}else if(M.isPointLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const $=M.shadow,V=e.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=U,n.pointShadowMatrix[v]=M.shadow.matrix,T++}n.point[v]=H,v++}else if(M.isHemisphereLight){const H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(L),H.groundColor.copy(M.groundColor).multiplyScalar(L),n.hemi[_]=H,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=p;const f=n.hash;(f.directionalLength!==m||f.pointLength!==v||f.spotLength!==y||f.rectAreaLength!==x||f.hemiLength!==_||f.numDirectionalShadows!==R||f.numPointShadows!==T||f.numSpotShadows!==S||f.numSpotMaps!==b||f.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=x,n.point.length=v,n.hemi.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,f.directionalLength=m,f.pointLength=v,f.spotLength=y,f.rectAreaLength=x,f.hemiLength=_,f.numDirectionalShadows=R,f.numPointShadows=T,f.numSpotShadows=S,f.numSpotMaps=b,f.numLightProbes=A,n.version=v1++)}function h(a,c){let d=0,p=0,m=0,v=0,y=0;const x=c.matrixWorldInverse;for(let _=0,R=a.length;_<R;_++){const T=a[_];if(T.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),d++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(T.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),o.identity(),i.copy(T.matrixWorld),i.premultiply(x),o.extractRotation(i),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),p++}else if(T.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),y++}}}return{setup:l,setupView:h,state:n}}function Lh(s){const t=new y1(s),e=[],n=[];function r(c){a.camera=c,e.length=0,n.length=0}function i(c){e.push(c)}function o(c){n.push(c)}function l(){t.setup(e)}function h(c){t.setupView(e,c)}const a={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:a,setupLights:l,setupLightsView:h,pushLight:i,pushShadow:o}}function M1(s){let t=new WeakMap;function e(r,i=0){const o=t.get(r);let l;return o===void 0?(l=new Lh(s),t.set(r,[l])):i>=o.length?(l=new Lh(s),o.push(l)):l=o[i],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`;function w1(s,t,e){let n=new sc;const r=new ce,i=new ce,o=new ve,l=new $f({depthPacking:Gd}),h=new Yf,a={},c=e.maxTextureSize,d={[Zi]:bn,[bn]:Zi,[Ke]:Ke},p=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:b1,fragmentShader:S1}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tn(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let _=this.type;this.render=function(I,A,f){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const u=s.getRenderTarget(),g=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Yi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=_!==Ci&&this.type===Ci,k=_===Ci&&this.type!==Ci;for(let U=0,H=I.length;U<H;U++){const $=I[U],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();if(r.multiply(J),i.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(i.x=Math.floor(c/J.x),r.x=i.x*J.x,V.mapSize.x=i.x),r.y>c&&(i.y=Math.floor(c/J.y),r.y=i.y*J.y,V.mapSize.y=i.y)),V.map===null||L===!0||k===!0){const gt=this.type!==Ci?{minFilter:Gn,magFilter:Gn}:{};V.map!==null&&V.map.dispose(),V.map=new ys(r.x,r.y,gt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const et=V.getViewportCount();for(let gt=0;gt<et;gt++){const Rt=V.getViewport(gt);o.set(i.x*Rt.x,i.y*Rt.y,i.x*Rt.z,i.y*Rt.w),C.viewport(o),V.updateMatrices($,gt),n=V.getFrustum(),S(A,f,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Ci&&R(V,f),V.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(u,g,M)};function R(I,A){const f=t.update(y);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ys(r.x,r.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(A,null,f,p,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(A,null,f,m,y,null)}function T(I,A,f,u){let g=null;const M=f.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(M!==void 0)g=M;else if(g=f.isPointLight===!0?h:l,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const C=g.uuid,L=A.uuid;let k=a[C];k===void 0&&(k={},a[C]=k);let U=k[L];U===void 0&&(U=g.clone(),k[L]=U,A.addEventListener("dispose",b)),g=U}if(g.visible=A.visible,g.wireframe=A.wireframe,u===Ci?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:d[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,f.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const C=s.properties.get(g);C.light=f}return g}function S(I,A,f,u,g){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===Ci)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,I.matrixWorld);const L=t.update(I),k=I.material;if(Array.isArray(k)){const U=L.groups;for(let H=0,$=U.length;H<$;H++){const V=U[H],J=k[V.materialIndex];if(J&&J.visible){const et=T(I,J,u,g);I.onBeforeShadow(s,I,A,f,L,et,V),s.renderBufferDirect(f,null,L,et,I,V),I.onAfterShadow(s,I,A,f,L,et,V)}}}else if(k.visible){const U=T(I,k,u,g);I.onBeforeShadow(s,I,A,f,L,U,null),s.renderBufferDirect(f,null,L,U,I,null),I.onAfterShadow(s,I,A,f,L,U,null)}}const C=I.children;for(let L=0,k=C.length;L<k;L++)S(C[L],A,f,u,g)}function b(I){I.target.removeEventListener("dispose",b);for(const f in a){const u=a[f],g=I.target.uuid;g in u&&(u[g].dispose(),delete u[g])}}}const E1={[Za]:Ja,[Qa]:nl,[tl]:il,[Xs]:el,[Ja]:Za,[nl]:Qa,[il]:tl,[el]:Xs};function T1(s,t){function e(){let O=!1;const ot=new ve;let ct=null;const yt=new ve(0,0,0,0);return{setMask:function(it){ct!==it&&!O&&(s.colorMask(it,it,it,it),ct=it)},setLocked:function(it){O=it},setClear:function(it,Q,St,Kt,be){be===!0&&(it*=Kt,Q*=Kt,St*=Kt),ot.set(it,Q,St,Kt),yt.equals(ot)===!1&&(s.clearColor(it,Q,St,Kt),yt.copy(ot))},reset:function(){O=!1,ct=null,yt.set(-1,0,0,0)}}}function n(){let O=!1,ot=!1,ct=null,yt=null,it=null;return{setReversed:function(Q){if(ot!==Q){const St=t.get("EXT_clip_control");Q?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ot=Q;const Kt=it;it=null,this.setClear(Kt)}},getReversed:function(){return ot},setTest:function(Q){Q?Z(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(Q){ct!==Q&&!O&&(s.depthMask(Q),ct=Q)},setFunc:function(Q){if(ot&&(Q=E1[Q]),yt!==Q){switch(Q){case Za:s.depthFunc(s.NEVER);break;case Ja:s.depthFunc(s.ALWAYS);break;case Qa:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case tl:s.depthFunc(s.EQUAL);break;case el:s.depthFunc(s.GEQUAL);break;case nl:s.depthFunc(s.GREATER);break;case il:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Q}},setLocked:function(Q){O=Q},setClear:function(Q){it!==Q&&(ot&&(Q=1-Q),s.clearDepth(Q),it=Q)},reset:function(){O=!1,ct=null,yt=null,it=null,ot=!1}}}function r(){let O=!1,ot=null,ct=null,yt=null,it=null,Q=null,St=null,Kt=null,be=null;return{setTest:function(fe){O||(fe?Z(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(fe){ot!==fe&&!O&&(s.stencilMask(fe),ot=fe)},setFunc:function(fe,Si,li){(ct!==fe||yt!==Si||it!==li)&&(s.stencilFunc(fe,Si,li),ct=fe,yt=Si,it=li)},setOp:function(fe,Si,li){(Q!==fe||St!==Si||Kt!==li)&&(s.stencilOp(fe,Si,li),Q=fe,St=Si,Kt=li)},setLocked:function(fe){O=fe},setClear:function(fe){be!==fe&&(s.clearStencil(fe),be=fe)},reset:function(){O=!1,ot=null,ct=null,yt=null,it=null,Q=null,St=null,Kt=null,be=null}}}const i=new e,o=new n,l=new r,h=new WeakMap,a=new WeakMap;let c={},d={},p=new WeakMap,m=[],v=null,y=!1,x=null,_=null,R=null,T=null,S=null,b=null,I=null,A=new $t(0,0,0),f=0,u=!1,g=null,M=null,C=null,L=null,k=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let J=null,et={};const gt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),kt=new ve().fromArray(gt),Dt=new ve().fromArray(Rt);function Xt(O,ot,ct,yt){const it=new Uint8Array(4),Q=s.createTexture();s.bindTexture(O,Q),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<ct;St++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(ot+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return Q}const Y={};Y[s.TEXTURE_2D]=Xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Z(s.DEPTH_TEST),o.setFunc(Xs),Vt(!1),Et(Ac),Z(s.CULL_FACE),Me(Yi);function Z(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function ut(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Pt(O,ot){return d[O]!==ot?(s.bindFramebuffer(O,ot),d[O]=ot,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ot),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function vt(O,ot){let ct=m,yt=!1;if(O){ct=p.get(ot),ct===void 0&&(ct=[],p.set(ot,ct));const it=O.textures;if(ct.length!==it.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,St=it.length;Q<St;Q++)ct[Q]=s.COLOR_ATTACHMENT0+Q;ct.length=it.length,yt=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ct)}function Gt(O){return v!==O?(s.useProgram(O),v=O,!0):!1}const Re={[us]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};Re[gd]=s.MIN,Re[_d]=s.MAX;const D={[vd]:s.ZERO,[xd]:s.ONE,[yd]:s.SRC_COLOR,[Ka]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[wd]:s.DST_COLOR,[bd]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[ja]:s.ONE_MINUS_SRC_ALPHA,[Ed]:s.ONE_MINUS_DST_COLOR,[Sd]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[Rd]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Id]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(O,ot,ct,yt,it,Q,St,Kt,be,fe){if(O===Yi){y===!0&&(ut(s.BLEND),y=!1);return}if(y===!1&&(Z(s.BLEND),y=!0),O!==fd){if(O!==x||fe!==u){if((_!==us||S!==us)&&(s.blendEquation(s.FUNC_ADD),_=us,S=us),fe)switch(O){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rc:s.blendFunc(s.ONE,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,T=null,b=null,I=null,A.set(0,0,0),f=0,x=O,u=fe}return}it=it||ot,Q=Q||ct,St=St||yt,(ot!==_||it!==S)&&(s.blendEquationSeparate(Re[ot],Re[it]),_=ot,S=it),(ct!==R||yt!==T||Q!==b||St!==I)&&(s.blendFuncSeparate(D[ct],D[yt],D[Q],D[St]),R=ct,T=yt,b=Q,I=St),(Kt.equals(A)===!1||be!==f)&&(s.blendColor(Kt.r,Kt.g,Kt.b,be),A.copy(Kt),f=be),x=O,u=!1}function zt(O,ot){O.side===Ke?ut(s.CULL_FACE):Z(s.CULL_FACE);let ct=O.side===bn;ot&&(ct=!ct),Vt(ct),O.blending===Gs&&O.transparent===!1?Me(Yi):Me(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),i.setMask(O.colorWrite);const yt=O.stencilWrite;l.setTest(yt),yt&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(O){g!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),g=O)}function Et(O){O!==hd?(Z(s.CULL_FACE),O!==M&&(O===Ac?s.cullFace(s.BACK):O===ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),M=O}function Ee(O){O!==C&&(H&&s.lineWidth(O),C=O)}function Tt(O,ot,ct){O?(Z(s.POLYGON_OFFSET_FILL),(L!==ot||k!==ct)&&(s.polygonOffset(ot,ct),L=ot,k=ct)):ut(s.POLYGON_OFFSET_FILL)}function Qt(O){O?Z(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function $e(O){O===void 0&&(O=s.TEXTURE0+U-1),J!==O&&(s.activeTexture(O),J=O)}function ke(O,ot,ct){ct===void 0&&(J===null?ct=s.TEXTURE0+U-1:ct=J);let yt=et[ct];yt===void 0&&(yt={type:void 0,texture:void 0},et[ct]=yt),(yt.type!==O||yt.texture!==ot)&&(J!==ct&&(s.activeTexture(ct),J=ct),s.bindTexture(O,ot||Y[O]),yt.type=O,yt.texture=ot)}function P(){const O=et[J];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(O){kt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),kt.copy(O))}function Ht(O){Dt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Dt.copy(O))}function It(O,ot){let ct=a.get(ot);ct===void 0&&(ct=new WeakMap,a.set(ot,ct));let yt=ct.get(O);yt===void 0&&(yt=s.getUniformBlockIndex(ot,O.name),ct.set(O,yt))}function ft(O,ot){const yt=a.get(ot).get(O);h.get(ot)!==yt&&(s.uniformBlockBinding(ot,yt,O.__bindingPointIndex),h.set(ot,yt))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},J=null,et={},d={},p=new WeakMap,m=[],v=null,y=!1,x=null,_=null,R=null,T=null,S=null,b=null,I=null,A=new $t(0,0,0),f=0,u=!1,g=null,M=null,C=null,L=null,k=null,kt.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),o.reset(),l.reset()}return{buffers:{color:i,depth:o,stencil:l},enable:Z,disable:ut,bindFramebuffer:Pt,drawBuffers:vt,useProgram:Gt,setBlending:Me,setMaterial:zt,setFlipSided:Vt,setCullFace:Et,setLineWidth:Ee,setPolygonOffset:Tt,setScissorTest:Qt,activeTexture:$e,bindTexture:ke,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Ct,texImage3D:rt,updateUBOMapping:It,uniformBlockBinding:ft,texStorage2D:at,texStorage3D:At,texSubImage2D:j,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:Lt,scissor:_t,viewport:Ht,reset:Zt}}function A1(s,t,e,n,r,i,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new ce,c=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return m?new OffscreenCanvas(P,w):Io("canvas")}function y(P,w,G){let j=1;const tt=ke(P);if((tt.width>G||tt.height>G)&&(j=G/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(j*tt.width),Lt=Math.floor(j*tt.height);d===void 0&&(d=v(K,Lt));const at=w?v(K,Lt):d;return at.width=K,at.height=Lt,at.getContext("2d").drawImage(P,0,0,K,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Lt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(P,w,G,j,tt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=w;if(w===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),w===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),w===s.RGBA){const Lt=tt?Ro:ue.getTransfer(j);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=Lt===_e?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(P,w){let G;return P?w===null||w===xs||w===Sr?G=s.DEPTH24_STENCIL8:w===Di?G=s.DEPTH32F_STENCIL8:w===br&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===xs||w===Sr?G=s.DEPTH_COMPONENT24:w===Di?G=s.DEPTH_COMPONENT32F:w===br&&(G=s.DEPTH_COMPONENT16),G}function b(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gn&&P.minFilter!==hi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){const w=P.target;w.removeEventListener("dispose",I),f(w),w.isVideoTexture&&c.delete(w)}function A(P){const w=P.target;w.removeEventListener("dispose",A),g(w)}function f(P){const w=n.get(P);if(w.__webglInit===void 0)return;const G=P.source,j=p.get(G);if(j){const tt=j[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&u(P),Object.keys(j).length===0&&p.delete(G)}n.remove(P)}function u(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const G=P.source,j=p.get(G);delete j[w.__cacheKey],o.memory.textures--}function g(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let tt=0;tt<w.__webglFramebuffer[j].length;tt++)s.deleteFramebuffer(w.__webglFramebuffer[j][tt]);else s.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)s.deleteFramebuffer(w.__webglFramebuffer[j]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=P.textures;for(let j=0,tt=G.length;j<tt;j++){const K=n.get(G[j]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(P)}let M=0;function C(){M=0}function L(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function k(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function U(P,w){const G=n.get(P);if(P.isVideoTexture&&Qt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,P,w);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function H(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Y(G,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function $(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Y(G,P,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function V(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Z(G,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const J={[ol]:s.REPEAT,[ms]:s.CLAMP_TO_EDGE,[al]:s.MIRRORED_REPEAT},et={[Gn]:s.NEAREST,[zd]:s.NEAREST_MIPMAP_NEAREST,[zr]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[ea]:s.LINEAR_MIPMAP_NEAREST,[gs]:s.LINEAR_MIPMAP_LINEAR},gt={[Wd]:s.NEVER,[jd]:s.ALWAYS,[qd]:s.LESS,[pu]:s.LEQUAL,[Xd]:s.EQUAL,[Kd]:s.GEQUAL,[$d]:s.GREATER,[Yd]:s.NOTEQUAL};function Rt(P,w){if(w.type===Di&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===hi||w.magFilter===ea||w.magFilter===zr||w.magFilter===gs||w.minFilter===hi||w.minFilter===ea||w.minFilter===zr||w.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,J[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,J[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,J[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,et[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,et[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,gt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Gn||w.minFilter!==zr&&w.minFilter!==gs||w.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));const j=w.source;let tt=p.get(j);tt===void 0&&(tt={},p.set(j,tt));const K=k(w);if(K!==P.__cacheKey){tt[K]===void 0&&(tt[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[K].usedTimes++;const Lt=tt[P.__cacheKey];Lt!==void 0&&(tt[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&u(w)),P.__cacheKey=K,P.__webglTexture=tt[K].texture}return G}function Dt(P,w,G){return Math.floor(Math.floor(P/G)/w)}function Xt(P,w,G,j){const K=P.updateRanges;if(K.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,j,w.data);else{K.sort((rt,_t)=>rt.start-_t.start);let Lt=0;for(let rt=1;rt<K.length;rt++){const _t=K[Lt],Ht=K[rt],It=_t.start+_t.count,ft=Dt(Ht.start,w.width,4),Zt=Dt(_t.start,w.width,4);Ht.start<=It+1&&ft===Zt&&Dt(Ht.start+Ht.count-1,w.width,4)===ft?_t.count=Math.max(_t.count,Ht.start+Ht.count-_t.start):(++Lt,K[Lt]=Ht)}K.length=Lt+1;const at=s.getParameter(s.UNPACK_ROW_LENGTH),At=s.getParameter(s.UNPACK_SKIP_PIXELS),Ct=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let rt=0,_t=K.length;rt<_t;rt++){const Ht=K[rt],It=Math.floor(Ht.start/4),ft=Math.ceil(Ht.count/4),Zt=It%w.width,O=Math.floor(It/w.width),ot=ft,ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Zt,O,ot,ct,G,j,w.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,at),s.pixelStorei(s.UNPACK_SKIP_PIXELS,At),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function Y(P,w,G){let j=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=s.TEXTURE_3D);const tt=kt(P,w),K=w.source;e.bindTexture(j,P.__webglTexture,s.TEXTURE0+G);const Lt=n.get(K);if(K.version!==Lt.__version||tt===!0){e.activeTexture(s.TEXTURE0+G);const at=ue.getPrimaries(ue.workingColorSpace),At=w.colorSpace===Xi?null:ue.getPrimaries(w.colorSpace),Ct=w.colorSpace===Xi||at===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let rt=y(w.image,!1,r.maxTextureSize);rt=$e(w,rt);const _t=i.convert(w.format,w.colorSpace),Ht=i.convert(w.type);let It=T(w.internalFormat,_t,Ht,w.colorSpace,w.isVideoTexture);Rt(j,w);let ft;const Zt=w.mipmaps,O=w.isVideoTexture!==!0,ot=Lt.__version===void 0||tt===!0,ct=K.dataReady,yt=b(w,rt);if(w.isDepthTexture)It=S(w.format===Er,w.type),ot&&(O?e.texStorage2D(s.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,_t,Ht,null));else if(w.isDataTexture)if(Zt.length>0){O&&ot&&e.texStorage2D(s.TEXTURE_2D,yt,It,Zt[0].width,Zt[0].height);for(let it=0,Q=Zt.length;it<Q;it++)ft=Zt[it],O?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,_t,Ht,ft.data):e.texImage2D(s.TEXTURE_2D,it,It,ft.width,ft.height,0,_t,Ht,ft.data);w.generateMipmaps=!1}else O?(ot&&e.texStorage2D(s.TEXTURE_2D,yt,It,rt.width,rt.height),ct&&Xt(w,rt,_t,Ht)):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,_t,Ht,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,It,Zt[0].width,Zt[0].height,rt.depth);for(let it=0,Q=Zt.length;it<Q;it++)if(ft=Zt[it],w.format!==oi)if(_t!==null)if(O){if(ct)if(w.layerUpdates.size>0){const St=lh(ft.width,ft.height,w.format,w.type);for(const Kt of w.layerUpdates){const be=ft.data.subarray(Kt*St/ft.data.BYTES_PER_ELEMENT,(Kt+1)*St/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,Kt,ft.width,ft.height,1,_t,be)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,rt.depth,_t,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,It,ft.width,ft.height,rt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,rt.depth,_t,Ht,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,It,ft.width,ft.height,rt.depth,0,_t,Ht,ft.data)}else{O&&ot&&e.texStorage2D(s.TEXTURE_2D,yt,It,Zt[0].width,Zt[0].height);for(let it=0,Q=Zt.length;it<Q;it++)ft=Zt[it],w.format!==oi?_t!==null?O?ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,_t,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,it,It,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,_t,Ht,ft.data):e.texImage2D(s.TEXTURE_2D,it,It,ft.width,ft.height,0,_t,Ht,ft.data)}else if(w.isDataArrayTexture)if(O){if(ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,It,rt.width,rt.height,rt.depth),ct)if(w.layerUpdates.size>0){const it=lh(rt.width,rt.height,w.format,w.type);for(const Q of w.layerUpdates){const St=rt.data.subarray(Q*it/rt.data.BYTES_PER_ELEMENT,(Q+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,_t,Ht,St)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ht,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,_t,Ht,rt.data);else if(w.isData3DTexture)O?(ot&&e.texStorage3D(s.TEXTURE_3D,yt,It,rt.width,rt.height,rt.depth),ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ht,rt.data)):e.texImage3D(s.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,_t,Ht,rt.data);else if(w.isFramebufferTexture){if(ot)if(O)e.texStorage2D(s.TEXTURE_2D,yt,It,rt.width,rt.height);else{let it=rt.width,Q=rt.height;for(let St=0;St<yt;St++)e.texImage2D(s.TEXTURE_2D,St,It,it,Q,0,_t,Ht,null),it>>=1,Q>>=1}}else if(Zt.length>0){if(O&&ot){const it=ke(Zt[0]);e.texStorage2D(s.TEXTURE_2D,yt,It,it.width,it.height)}for(let it=0,Q=Zt.length;it<Q;it++)ft=Zt[it],O?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,_t,Ht,ft):e.texImage2D(s.TEXTURE_2D,it,It,_t,Ht,ft);w.generateMipmaps=!1}else if(O){if(ot){const it=ke(rt);e.texStorage2D(s.TEXTURE_2D,yt,It,it.width,it.height)}ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ht,rt)}else e.texImage2D(s.TEXTURE_2D,0,It,_t,Ht,rt);x(w)&&_(j),Lt.__version=K.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Z(P,w,G){if(w.image.length!==6)return;const j=kt(P,w),tt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const K=n.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(s.TEXTURE0+G);const Lt=ue.getPrimaries(ue.workingColorSpace),at=w.colorSpace===Xi?null:ue.getPrimaries(w.colorSpace),At=w.colorSpace===Xi||Lt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ct=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!Ct&&!rt?_t[Q]=y(w.image[Q],!0,r.maxCubemapSize):_t[Q]=rt?w.image[Q].image:w.image[Q],_t[Q]=$e(w,_t[Q]);const Ht=_t[0],It=i.convert(w.format,w.colorSpace),ft=i.convert(w.type),Zt=T(w.internalFormat,It,ft,w.colorSpace),O=w.isVideoTexture!==!0,ot=K.__version===void 0||j===!0,ct=tt.dataReady;let yt=b(w,Ht);Rt(s.TEXTURE_CUBE_MAP,w);let it;if(Ct){O&&ot&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Zt,Ht.width,Ht.height);for(let Q=0;Q<6;Q++){it=_t[Q].mipmaps;for(let St=0;St<it.length;St++){const Kt=it[St];w.format!==oi?It!==null?O?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Kt.width,Kt.height,It,Kt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,Zt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Kt.width,Kt.height,It,ft,Kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,Zt,Kt.width,Kt.height,0,It,ft,Kt.data)}}}else{if(it=w.mipmaps,O&&ot){it.length>0&&yt++;const Q=ke(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,It,ft,_t[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,_t[Q].width,_t[Q].height,0,It,ft,_t[Q].data);for(let St=0;St<it.length;St++){const be=it[St].image[Q].image;O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,be.width,be.height,It,ft,be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,Zt,be.width,be.height,0,It,ft,be.data)}}else{O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,ft,_t[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,It,ft,_t[Q]);for(let St=0;St<it.length;St++){const Kt=it[St];O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,It,ft,Kt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,Zt,It,ft,Kt.image[Q])}}}x(w)&&_(s.TEXTURE_CUBE_MAP),K.__version=tt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ut(P,w,G,j,tt,K){const Lt=i.convert(G.format,G.colorSpace),at=i.convert(G.type),At=T(G.internalFormat,Lt,at,G.colorSpace),Ct=n.get(w),rt=n.get(G);if(rt.__renderTarget=w,!Ct.__hasExternalTextures){const _t=Math.max(1,w.width>>K),Ht=Math.max(1,w.height>>K);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,At,_t,Ht,w.depth,0,Lt,at,null):e.texImage2D(tt,K,At,_t,Ht,0,Lt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Tt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,tt,rt.__webglTexture,0,Ee(w)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,tt,rt.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const j=w.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=S(w.stencilBuffer,tt),Lt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Ee(w);Tt(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,K,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,K,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,P)}else{const j=w.textures;for(let tt=0;tt<j.length;tt++){const K=j[tt],Lt=i.convert(K.format,K.colorSpace),at=i.convert(K.type),At=T(K.internalFormat,Lt,at,K.colorSpace),Ct=Ee(w);G&&Tt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,At,w.width,w.height):Tt(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,At,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,At,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const tt=j.__webglTexture,K=Ee(w);if(w.depthTexture.format===wr)Tt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(w.depthTexture.format===Er)Tt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Gt(P){const w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=j}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?vt(w.__webglFramebuffer[0],P):vt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=s.createRenderbuffer(),Pt(w.__webglDepthbuffer[j],P,!1);else{const tt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Pt(w.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(P,w,G){const j=n.get(P);w!==void 0&&ut(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Gt(P)}function D(P){const w=P.texture,G=n.get(P),j=n.get(w);P.addEventListener("dispose",A);const tt=P.textures,K=P.isWebGLCubeRenderTarget===!0,Lt=tt.length>1;if(Lt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=w.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let At=0;At<w.mipmaps.length;At++)G.__webglFramebuffer[at][At]=s.createFramebuffer()}else G.__webglFramebuffer[at]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)G.__webglFramebuffer[at]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let at=0,At=tt.length;at<At;at++){const Ct=n.get(tt[at]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Tt(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const At=tt[at];G.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const Ct=i.convert(At.format,At.colorSpace),rt=i.convert(At.type),_t=T(At.internalFormat,Ct,rt,At.colorSpace,P.isXRRenderTarget===!0),Ht=Ee(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,_t,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,G.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)ut(G.__webglFramebuffer[at][At],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At);else ut(G.__webglFramebuffer[at],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);x(w)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let at=0,At=tt.length;at<At;at++){const Ct=tt[at],rt=n.get(Ct);let _t=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),Rt(_t,Ct),ut(G.__webglFramebuffer,P,Ct,s.COLOR_ATTACHMENT0+at,_t,0),x(Ct)&&_(_t)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Rt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)ut(G.__webglFramebuffer[At],P,w,s.COLOR_ATTACHMENT0,at,At);else ut(G.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,at,0);x(w)&&_(at),e.unbindTexture()}P.depthBuffer&&Gt(P)}function Me(P){const w=P.textures;for(let G=0,j=w.length;G<j;G++){const tt=w[G];if(x(tt)){const K=R(P),Lt=n.get(tt).__webglTexture;e.bindTexture(K,Lt),_(K),e.unbindTexture()}}}const zt=[],Vt=[];function Et(P){if(P.samples>0){if(Tt(P)===!1){const w=P.textures,G=P.width,j=P.height;let tt=s.COLOR_BUFFER_BIT;const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(P),at=w.length>1;if(at)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const At=P.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const rt=n.get(w[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,G,j,0,0,G,j,tt,s.NEAREST),h===!0&&(zt.length=0,Vt.length=0,zt.push(s.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(zt.push(K),Vt.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const rt=n.get(w[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ee(P){return Math.min(r.maxSamples,P.samples)}function Tt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qt(P){const w=o.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function $e(P,w){const G=P.colorSpace,j=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ks&&G!==Xi&&(ue.getTransfer(G)===_e?(j!==oi||tt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(a.width=P.naturalWidth||P.width,a.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(a.width=P.displayWidth,a.height=P.displayHeight):(a.width=P.width,a.height=P.height),a}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Tt}function R1(s,t){function e(n,r=Xi){let i;const o=ue.getTransfer(r);if(n===_i)return s.UNSIGNED_BYTE;if(n===Kl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===au)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return s.BYTE;if(n===ou)return s.SHORT;if(n===br)return s.UNSIGNED_SHORT;if(n===Yl)return s.INT;if(n===xs)return s.UNSIGNED_INT;if(n===Di)return s.FLOAT;if(n===Ir)return s.HALF_FLOAT;if(n===cu)return s.ALPHA;if(n===hu)return s.RGB;if(n===oi)return s.RGBA;if(n===wr)return s.DEPTH_COMPONENT;if(n===Er)return s.DEPTH_STENCIL;if(n===uu)return s.RED;if(n===Zl)return s.RED_INTEGER;if(n===du)return s.RG;if(n===Jl)return s.RG_INTEGER;if(n===Ql)return s.RGBA_INTEGER;if(n===yo||n===Mo||n===bo||n===So)if(o===_e)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===yo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===yo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===ll)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===dl||n===fl)return o===_e?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===pl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===ml)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Il||n===Pl)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===Cl)return o===_e?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Dl||n===kl||n===Ul)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===Ll)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
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

}`;class P1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Au(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:C1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new Fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends Js{constructor(t,e){super();const n=this;let r=null,i=1,o=null,l="local-floor",h=1,a=null,c=null,d=null,p=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",x=new P1,_={},R=e.getContextAttributes();let T=null,S=null;const b=[],I=[],A=new ce;let f=null;const u=new zn;u.viewport=new ve;const g=new zn;g.viewport=new ve;const M=[u,g],C=new Qf;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=b[Y];return Z===void 0&&(Z=new ba,b[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=b[Y];return Z===void 0&&(Z=new ba,b[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=b[Y];return Z===void 0&&(Z=new ba,b[Y]=Z),Z.getHandSpace()};function U(Y){const Z=I.indexOf(Y.inputSource);if(Z===-1)return;const ut=b[Z];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,a||o),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){const Z=I[Y];Z!==null&&(I[Y]=null,b[Y].disconnect(Z))}L=null,k=null,x.reset();for(const Y in _)delete _[Y];t.setRenderTarget(T),m=null,p=null,d=null,r=null,S=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(f),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){i=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(Y){a=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),R.xrCompatible!==!0&&await e.makeXRCompatible(),f=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Pt=null,vt=null;R.depth&&(vt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=R.stencil?Er:wr,Pt=R.stencil?Sr:xs);const Gt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:i};d=this.getBinding(),p=d.createProjectionLayer(Gt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new ys(p.textureWidth,p.textureHeight,{format:oi,type:_i,depthTexture:new Tu(p.textureWidth,p.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ut={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ys(m.framebufferWidth,m.framebufferHeight,{format:oi,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),a=null,o=await r.requestReferenceSpace(l),Xt.setContext(r),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(Y){for(let Z=0;Z<Y.removed.length;Z++){const ut=Y.removed[Z],Pt=I.indexOf(ut);Pt>=0&&(I[Pt]=null,b[Pt].disconnect(ut))}for(let Z=0;Z<Y.added.length;Z++){const ut=Y.added[Z];let Pt=I.indexOf(ut);if(Pt===-1){for(let Gt=0;Gt<b.length;Gt++)if(Gt>=I.length){I.push(ut),Pt=Gt;break}else if(I[Gt]===null){I[Gt]=ut,Pt=Gt;break}if(Pt===-1)break}const vt=b[Pt];vt&&vt.connect(ut)}}const V=new F,J=new F;function et(Y,Z,ut){V.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ut.matrixWorld);const Pt=V.distanceTo(J),vt=Z.projectionMatrix.elements,Gt=ut.projectionMatrix.elements,Re=vt[14]/(vt[10]-1),D=vt[14]/(vt[10]+1),Me=(vt[9]+1)/vt[5],zt=(vt[9]-1)/vt[5],Vt=(vt[8]-1)/vt[0],Et=(Gt[8]+1)/Gt[0],Ee=Re*Vt,Tt=Re*Et,Qt=Pt/(-Vt+Et),$e=Qt*-Vt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(Qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ke=Re+Qt,P=D+Qt,w=Ee-$e,G=Tt+(Pt-$e),j=Me*D/P*ke,tt=zt*D/P*ke;Y.projectionMatrix.makePerspective(w,G,j,tt,ke,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function gt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,ut=Y.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),C.near=g.near=u.near=Z,C.far=g.far=u.far=ut,(L!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,k=C.far),C.layers.mask=Y.layers.mask|6,u.layers.mask=C.layers.mask&3,g.layers.mask=C.layers.mask&5;const Pt=Y.parent,vt=C.cameras;gt(C,Pt);for(let Gt=0;Gt<vt.length;Gt++)gt(vt[Gt],Pt);vt.length===2?et(C,u,g):C.projectionMatrix.copy(u.projectionMatrix),Rt(Y,C,Pt)};function Rt(Y,Z,ut){ut===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Tr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function(Y){h=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(Y){return _[Y]};let kt=null;function Dt(Y,Z){if(c=Z.getViewerPose(a||o),v=Z,c!==null){const ut=c.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Pt=!1;ut.length!==C.cameras.length&&(C.cameras.length=0,Pt=!0);for(let D=0;D<ut.length;D++){const Me=ut[D];let zt=null;if(m!==null)zt=m.getViewport(Me);else{const Et=d.getViewSubImage(p,Me);zt=Et.viewport,D===0&&(t.setRenderTargetTextures(S,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(S))}let Vt=M[D];Vt===void 0&&(Vt=new zn,Vt.layers.enable(D),Vt.viewport=new ve,M[D]=Vt),Vt.matrix.fromArray(Me.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Me.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(zt.x,zt.y,zt.width,zt.height),D===0&&(C.matrix.copy(Vt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Pt===!0&&C.cameras.push(Vt)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const D=d.getDepthInformation(ut[0]);D&&D.isValid&&D.texture&&x.init(D,r.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let D=0;D<ut.length;D++){const Me=ut[D].camera;if(Me){let zt=_[Me];zt||(zt=new Au,_[Me]=zt);const Vt=d.getCameraImage(Me);zt.sourceTexture=Vt}}}}for(let ut=0;ut<b.length;ut++){const Pt=I[ut],vt=b[ut];Pt!==null&&vt!==void 0&&vt.update(Pt,Z,a||o)}kt&&kt(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),v=null}const Xt=new Iu;Xt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){kt=Y},this.dispose=function(){}}}const as=new vi,D1=new Ae;function k1(s,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Mu(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,R,T,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(x,_):_.isMeshToonMaterial?(i(x,_),d(x,_)):_.isMeshPhongMaterial?(i(x,_),c(x,_)):_.isMeshStandardMaterial?(i(x,_),p(x,_),_.isMeshPhysicalMaterial&&m(x,_,S)):_.isMeshMatcapMaterial?(i(x,_),v(x,_)):_.isMeshDepthMaterial?i(x,_):_.isMeshDistanceMaterial?(i(x,_),y(x,_)):_.isMeshNormalMaterial?i(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?h(x,_,R,T):_.isSpriteMaterial?a(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const R=t.get(_),T=R.envMap,S=R.envMapRotation;T&&(x.envMap.value=T,as.copy(S),as.x*=-1,as.y*=-1,as.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),x.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(as)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,R,T){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*R,x.scale.value=T*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function c(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function d(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,R){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){const R=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function U1(s,t,e,n){let r={},i={},o=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,T){const S=T.program;n.uniformBlockBinding(R,S)}function a(R,T){let S=r[R.id];S===void 0&&(v(R),S=c(R),r[R.id]=S,R.addEventListener("dispose",x));const b=T.program;n.updateUBOMapping(R,b);const I=t.render.frame;i[R.id]!==I&&(p(R),i[R.id]=I)}function c(R){const T=d();R.__bindingPointIndex=T;const S=s.createBuffer(),b=R.__size,I=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,b,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function d(){for(let R=0;R<l;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const T=r[R.id],S=R.uniforms,b=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let I=0,A=S.length;I<A;I++){const f=Array.isArray(S[I])?S[I]:[S[I]];for(let u=0,g=f.length;u<g;u++){const M=f[u];if(m(M,I,u,b)===!0){const C=M.__offset,L=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let U=0;U<L.length;U++){const H=L[U],$=y(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,C+k,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(R,T,S,b){const I=R.value,A=T+"_"+S;if(b[A]===void 0)return typeof I=="number"||typeof I=="boolean"?b[A]=I:b[A]=I.clone(),!0;{const f=b[A];if(typeof I=="number"||typeof I=="boolean"){if(f!==I)return b[A]=I,!0}else if(f.equals(I)===!1)return f.copy(I),!0}return!1}function v(R){const T=R.uniforms;let S=0;const b=16;for(let A=0,f=T.length;A<f;A++){const u=Array.isArray(T[A])?T[A]:[T[A]];for(let g=0,M=u.length;g<M;g++){const C=u[g],L=Array.isArray(C.value)?C.value:[C.value];for(let k=0,U=L.length;k<U;k++){const H=L[k],$=y(H),V=S%b,J=V%$.boundary,et=V+J;S+=J,et!==0&&b-et<$.storage&&(S+=b-et),C.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=$.storage}}}const I=S%b;return I>0&&(S+=b-I),R.__size=S,R.__cache={},this}function y(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function x(R){const T=R.target;T.removeEventListener("dispose",x);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(r[T.id]),delete r[T.id],delete i[T.id]}function _(){for(const R in r)s.deleteBuffer(r[R]);o=[],r={},i={}}return{bind:h,update:a,dispose:_}}class N1{constructor(t={}){const{canvas:e=pf(),context:n=null,depth:r=!0,stencil:i=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:a=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const R=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=Cn;let I=0,A=0,f=null,u=-1,g=null;const M=new ve,C=new ve;let L=null;const k=new $t(0);let U=0,H=e.width,$=e.height,V=1,J=null,et=null;const gt=new ve(0,0,H,$),Rt=new ve(0,0,H,$);let kt=!1;const Dt=new sc;let Xt=!1,Y=!1;const Z=new Ae,ut=new F,Pt=new ve,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Re(){return f===null?V:1}let D=n;function Me(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:i,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",it,!1),D===null){const B="webgl2";if(D=Me(B,E),D===null)throw Me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,Vt,Et,Ee,Tt,Qt,$e,ke,P,w,G,j,tt,K,Lt,at,At,Ct,rt,_t,Ht,It,ft,Zt;function O(){zt=new X0(D),zt.init(),It=new R1(D,zt),Vt=new B0(D,zt,t,It),Et=new T1(D,zt),Vt.reversedDepthBuffer&&p&&Et.buffers.depth.setReversed(!0),Ee=new K0(D),Tt=new f1,Qt=new A1(D,zt,Et,Tt,Vt,It,Ee),$e=new H0(S),ke=new q0(S),P=new ep(D),ft=new F0(D,P),w=new $0(D,P,Ee,ft),G=new Z0(D,w,P,Ee),rt=new j0(D,Vt,Qt),at=new z0(Tt),j=new d1(S,$e,ke,zt,Vt,ft,at),tt=new k1(S,Tt),K=new m1,Lt=new M1(zt),Ct=new N0(S,$e,ke,Et,G,m,h),At=new w1(S,G,Vt),Zt=new U1(D,Ee,Vt,Et),_t=new O0(D,zt,Ee),Ht=new Y0(D,zt,Ee),Ee.programs=j.programs,S.capabilities=Vt,S.extensions=zt,S.properties=Tt,S.renderLists=K,S.shadowMap=At,S.state=Et,S.info=Ee}O();const ot=new L1(S,D);this.xr=ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(H,$,!1))},this.getSize=function(E){return E.set(H,$)},this.setSize=function(E,B,W=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,$=B,e.width=Math.floor(E*V),e.height=Math.floor(B*V),W===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(E,B,W){H=E,$=B,V=W,e.width=Math.floor(E*W),e.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,B,W,q){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,B,W,q),Et.viewport(M.copy(gt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,B,W,q){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,B,W,q),Et.scissor(C.copy(Rt).multiplyScalar(V).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(E){Et.setScissorTest(kt=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,W=!0){let q=0;if(E){let z=!1;if(f!==null){const st=f.texture.format;z=st===Ql||st===Jl||st===Zl}if(z){const st=f.texture.type,pt=st===_i||st===xs||st===br||st===Sr||st===Kl||st===jl,bt=Ct.getClearColor(),xt=Ct.getClearAlpha(),Bt=bt.r,Wt=bt.g,Ut=bt.b;pt?(v[0]=Bt,v[1]=Wt,v[2]=Ut,v[3]=xt,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=Bt,y[1]=Wt,y[2]=Ut,y[3]=xt,D.clearBufferiv(D.COLOR,0,y))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Ct.dispose(),K.dispose(),Lt.dispose(),Tt.dispose(),$e.dispose(),ke.dispose(),G.dispose(),ft.dispose(),Zt.dispose(),j.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",li),ot.removeEventListener("sessionend",Mc),ts.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Ee.autoReset,B=At.enabled,W=At.autoUpdate,q=At.needsUpdate,z=At.type;O(),Ee.autoReset=E,At.enabled=B,At.autoUpdate=W,At.needsUpdate=q,At.type=z}function it(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const B=E.target;B.removeEventListener("dispose",Q),St(B)}function St(E){Kt(E),Tt.remove(E)}function Kt(E){const B=Tt.get(E).programs;B!==void 0&&(B.forEach(function(W){j.releaseProgram(W)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,q,z,st){B===null&&(B=vt);const pt=z.isMesh&&z.matrixWorld.determinant()<0,bt=sd(E,B,W,q,z);Et.setMaterial(q,pt);let xt=W.index,Bt=1;if(q.wireframe===!0){if(xt=w.getWireframeAttribute(W),xt===void 0)return;Bt=2}const Wt=W.drawRange,Ut=W.attributes.position;let oe=Wt.start*Bt,me=(Wt.start+Wt.count)*Bt;st!==null&&(oe=Math.max(oe,st.start*Bt),me=Math.min(me,(st.start+st.count)*Bt)),xt!==null?(oe=Math.max(oe,0),me=Math.min(me,xt.count)):Ut!=null&&(oe=Math.max(oe,0),me=Math.min(me,Ut.count));const Pe=me-oe;if(Pe<0||Pe===1/0)return;ft.setup(z,q,bt,W,xt);let Se,ye=_t;if(xt!==null&&(Se=P.get(xt),ye=Ht,ye.setIndex(Se)),z.isMesh)q.wireframe===!0?(Et.setLineWidth(q.wireframeLinewidth*Re()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(z.isLine){let Ft=q.linewidth;Ft===void 0&&(Ft=1),Et.setLineWidth(Ft*Re()),z.isLineSegments?ye.setMode(D.LINES):z.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else z.isPoints?ye.setMode(D.POINTS):z.isSprite&&ye.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ft=z._multiDrawStarts,Ce=z._multiDrawCounts,he=z._multiDrawCount,Un=xt?P.get(xt).bytesPerElement:1,Es=Tt.get(q).currentProgram.getUniforms();for(let Nn=0;Nn<he;Nn++)Es.setValue(D,"_gl_DrawID",Nn),ye.render(Ft[Nn]/Un,Ce[Nn])}else if(z.isInstancedMesh)ye.renderInstances(oe,Pe,z.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ce=Math.min(W.instanceCount,Ft);ye.renderInstances(oe,Pe,Ce)}else ye.render(oe,Pe)};function be(E,B,W){E.transparent===!0&&E.side===Ke&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,Br(E,B,W),E.side=Zi,E.needsUpdate=!0,Br(E,B,W),E.side=Ke):Br(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),_=Lt.get(W),_.init(B),T.push(_),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights();const q=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const st=z.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const bt=st[pt];be(bt,W,z),q.add(bt)}else be(st,W,z),q.add(st)}),_=T.pop(),q},this.compileAsync=function(E,B,W=null){const q=this.compile(E,B,W);return new Promise(z=>{function st(){if(q.forEach(function(pt){Tt.get(pt).currentProgram.isReady()&&q.delete(pt)}),q.size===0){z(E);return}setTimeout(st,10)}zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let fe=null;function Si(E){fe&&fe(E)}function li(){ts.stop()}function Mc(){ts.start()}const ts=new Iu;ts.setAnimationLoop(Si),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(E){fe=E,ot.setAnimationLoop(E),E===null?ts.stop():ts.start()},ot.addEventListener("sessionstart",li),ot.addEventListener("sessionend",Mc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(B),B=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,B,f),_=Lt.get(E,T.length),_.init(B),T.push(_),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Dt.setFromProjectionMatrix(Z,ui,B.reversedDepth),Y=this.localClippingEnabled,Xt=at.init(this.clippingPlanes,Y),x=K.get(E,R.length),x.init(),R.push(x),ot.enabled===!0&&ot.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Qo(st,B,-1/0,S.sortObjects)}Qo(E,B,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(J,et),Gt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Gt&&Ct.addToRenderList(x,E),this.info.render.frame++,Xt===!0&&at.beginShadows();const W=_.state.shadowsArray;At.render(W,E,B),Xt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,z=x.transmissive;if(_.setupLights(),B.isArrayCamera){const st=B.cameras;if(z.length>0)for(let pt=0,bt=st.length;pt<bt;pt++){const xt=st[pt];Sc(q,z,E,xt)}Gt&&Ct.render(E);for(let pt=0,bt=st.length;pt<bt;pt++){const xt=st[pt];bc(x,E,xt,xt.viewport)}}else z.length>0&&Sc(q,z,E,B),Gt&&Ct.render(E),bc(x,E,B);f!==null&&A===0&&(Qt.updateMultisampleRenderTarget(f),Qt.updateRenderTargetMipmap(f)),E.isScene===!0&&E.onAfterRender(S,E,B),ft.resetDefaultState(),u=-1,g=null,T.pop(),T.length>0?(_=T[T.length-1],Xt===!0&&at.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function Qo(E,B,W,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Dt.intersectsSprite(E)){q&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const pt=G.update(E),bt=E.material;bt.visible&&x.push(E,pt,bt,W,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Dt.intersectsObject(E))){const pt=G.update(E),bt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(bt)){const xt=pt.groups;for(let Bt=0,Wt=xt.length;Bt<Wt;Bt++){const Ut=xt[Bt],oe=bt[Ut.materialIndex];oe&&oe.visible&&x.push(E,pt,oe,W,Pt.z,Ut)}}else bt.visible&&x.push(E,pt,bt,W,Pt.z,null)}}const st=E.children;for(let pt=0,bt=st.length;pt<bt;pt++)Qo(st[pt],B,W,q)}function bc(E,B,W,q){const z=E.opaque,st=E.transmissive,pt=E.transparent;_.setupLightsView(W),Xt===!0&&at.setGlobalState(S.clippingPlanes,W),q&&Et.viewport(M.copy(q)),z.length>0&&Or(z,B,W),st.length>0&&Or(st,B,W),pt.length>0&&Or(pt,B,W),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Sc(E,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new ys(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ir:_i,minFilter:gs,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const st=_.state.transmissionRenderTarget[q.id],pt=q.viewport||M;st.setSize(pt.z*S.transmissionResolutionScale,pt.w*S.transmissionResolutionScale);const bt=S.getRenderTarget(),xt=S.getActiveCubeFace(),Bt=S.getActiveMipmapLevel();S.setRenderTarget(st),S.getClearColor(k),U=S.getClearAlpha(),U<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&Ct.render(W);const Wt=S.toneMapping;S.toneMapping=Ki;const Ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),Xt===!0&&at.setGlobalState(S.clippingPlanes,q),Or(E,W,q),Qt.updateMultisampleRenderTarget(st),Qt.updateRenderTargetMipmap(st),zt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let me=0,Pe=B.length;me<Pe;me++){const Se=B[me],ye=Se.object,Ft=Se.geometry,Ce=Se.material,he=Se.group;if(Ce.side===Ke&&ye.layers.test(q.layers)){const Un=Ce.side;Ce.side=bn,Ce.needsUpdate=!0,wc(ye,W,q,Ft,Ce,he),Ce.side=Un,Ce.needsUpdate=!0,oe=!0}}oe===!0&&(Qt.updateMultisampleRenderTarget(st),Qt.updateRenderTargetMipmap(st))}S.setRenderTarget(bt,xt,Bt),S.setClearColor(k,U),Ut!==void 0&&(q.viewport=Ut),S.toneMapping=Wt}function Or(E,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,st=E.length;z<st;z++){const pt=E[z],bt=pt.object,xt=pt.geometry,Bt=pt.group;let Wt=pt.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),bt.layers.test(W.layers)&&wc(bt,B,W,xt,Wt,Bt)}}function wc(E,B,W,q,z,st){E.onBeforeRender(S,B,W,q,z,st),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,B,W,q,E,st),z.transparent===!0&&z.side===Ke&&z.forceSinglePass===!1?(z.side=bn,z.needsUpdate=!0,S.renderBufferDirect(W,B,q,z,E,st),z.side=Zi,z.needsUpdate=!0,S.renderBufferDirect(W,B,q,z,E,st),z.side=Ke):S.renderBufferDirect(W,B,q,z,E,st),E.onAfterRender(S,B,W,q,z,st)}function Br(E,B,W){B.isScene!==!0&&(B=vt);const q=Tt.get(E),z=_.state.lights,st=_.state.shadowsArray,pt=z.state.version,bt=j.getParameters(E,z.state,st,B,W),xt=j.getProgramCacheKey(bt);let Bt=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?ke:$e).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Q),Bt=new Map,q.programs=Bt);let Wt=Bt.get(xt);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===pt)return Tc(E,bt),Wt}else bt.uniforms=j.getUniforms(E),E.onBeforeCompile(bt,S),Wt=j.acquireProgram(bt,xt),Bt.set(xt,Wt),q.uniforms=bt.uniforms;const Ut=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=at.uniform),Tc(E,bt),q.needsLights=od(E),q.lightsStateVersion=pt,q.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function Ec(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=wo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Tc(E,B){const W=Tt.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function sd(E,B,W,q,z){B.isScene!==!0&&(B=vt),Qt.resetTextureUnits();const st=B.fog,pt=q.isMeshStandardMaterial?B.environment:null,bt=f===null?S.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:Ks,xt=(q.isMeshStandardMaterial?ke:$e).get(q.envMap||pt),Bt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ut=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,me=!!W.morphAttributes.color;let Pe=Ki;q.toneMapped&&(f===null||f.isXRRenderTarget===!0)&&(Pe=S.toneMapping);const Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=Se!==void 0?Se.length:0,Ft=Tt.get(q),Ce=_.state.lights;if(Xt===!0&&(Y===!0||E!==g)){const xn=E===g&&q.id===u;at.setState(q,E,xn)}let he=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ce.state.version||Ft.outputColorSpace!==bt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==xt||q.fog===!0&&Ft.fog!==st||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==at.numPlanes||Ft.numIntersection!==at.numIntersection)||Ft.vertexAlphas!==Bt||Ft.vertexTangents!==Wt||Ft.morphTargets!==Ut||Ft.morphNormals!==oe||Ft.morphColors!==me||Ft.toneMapping!==Pe||Ft.morphTargetsCount!==ye)&&(he=!0):(he=!0,Ft.__version=q.version);let Un=Ft.currentProgram;he===!0&&(Un=Br(q,B,z));let Es=!1,Nn=!1,rr=!1;const Ie=Un.getUniforms(),Vn=Ft.uniforms;if(Et.useProgram(Un.program)&&(Es=!0,Nn=!0,rr=!0),q.id!==u&&(u=q.id,Nn=!0),Es||g!==E){Et.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ie.setValue(D,"projectionMatrix",E.projectionMatrix),Ie.setValue(D,"viewMatrix",E.matrixWorldInverse);const wn=Ie.map.cameraPosition;wn!==void 0&&wn.setValue(D,ut.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&Ie.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ie.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),g!==E&&(g=E,Nn=!0,rr=!0)}if(z.isSkinnedMesh){Ie.setOptional(D,z,"bindMatrix"),Ie.setOptional(D,z,"bindMatrixInverse");const xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ie.setValue(D,"boneTexture",xn.boneTexture,Qt))}z.isBatchedMesh&&(Ie.setOptional(D,z,"batchingTexture"),Ie.setValue(D,"batchingTexture",z._matricesTexture,Qt),Ie.setOptional(D,z,"batchingIdTexture"),Ie.setValue(D,"batchingIdTexture",z._indirectTexture,Qt),Ie.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Ie.setValue(D,"batchingColorTexture",z._colorsTexture,Qt));const Wn=W.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&rt.update(z,W,Un),(Nn||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,Ie.setValue(D,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Vn.envMap.value=xt,Vn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Vn.envMapIntensity.value=B.environmentIntensity),Nn&&(Ie.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ft.needsLights&&rd(Vn,rr),st&&q.fog===!0&&tt.refreshFogUniforms(Vn,st),tt.refreshMaterialUniforms(Vn,q,V,$,_.state.transmissionRenderTarget[E.id]),wo.upload(D,Ec(Ft),Vn,Qt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(wo.upload(D,Ec(Ft),Vn,Qt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ie.setValue(D,"center",z.center),Ie.setValue(D,"modelViewMatrix",z.modelViewMatrix),Ie.setValue(D,"normalMatrix",z.normalMatrix),Ie.setValue(D,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const xn=q.uniformsGroups;for(let wn=0,ta=xn.length;wn<ta;wn++){const es=xn[wn];Zt.update(es,Un),Zt.bind(es,Un)}}return Un}function rd(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function od(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(E,B,W){const q=Tt.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Tt.get(E.texture).__webglTexture=B,Tt.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const W=Tt.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const ad=D.createFramebuffer();this.setRenderTarget=function(E,B=0,W=0){f=E,I=B,A=W;let q=!0,z=null,st=!1,pt=!1;if(E){const xt=Tt.get(E);if(xt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(xt.__webglFramebuffer===void 0)Qt.setupRenderTarget(E);else if(xt.__hasExternalTextures)Qt.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(xt.__boundDepthTexture!==Ut){if(Ut!==null&&Tt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(pt=!0);const Wt=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?z=Wt[B][W]:z=Wt[B],st=!0):E.samples>0&&Qt.useMultisampledRTT(E)===!1?z=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?z=Wt[W]:z=Wt,M.copy(E.viewport),C.copy(E.scissor),L=E.scissorTest}else M.copy(gt).multiplyScalar(V).floor(),C.copy(Rt).multiplyScalar(V).floor(),L=kt;if(W!==0&&(z=ad),Et.bindFramebuffer(D.FRAMEBUFFER,z)&&q&&Et.drawBuffers(E,z),Et.viewport(M),Et.scissor(C),Et.setScissorTest(L),st){const xt=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,xt.__webglTexture,W)}else if(pt){const xt=B;for(let Bt=0;Bt<E.textures.length;Bt++){const Wt=Tt.get(E.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Wt.__webglTexture,W,xt)}}else if(E!==null&&W!==0){const xt=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,W)}u=-1},this.readRenderTargetPixels=function(E,B,W,q,z,st,pt,bt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){Et.bindFramebuffer(D.FRAMEBUFFER,xt);try{const Bt=E.textures[bt],Wt=Bt.format,Ut=Bt.type;if(!Vt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&W>=0&&W<=E.height-z&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(B,W,q,z,It.convert(Wt),It.convert(Ut),st))}finally{const Bt=f!==null?Tt.get(f).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,q,z,st,pt,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt)if(B>=0&&B<=E.width-q&&W>=0&&W<=E.height-z){Et.bindFramebuffer(D.FRAMEBUFFER,xt);const Bt=E.textures[bt],Wt=Bt.format,Ut=Bt.type;if(!Vt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(B,W,q,z,It.convert(Wt),It.convert(Ut),0);const me=f!==null?Tt.get(f).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,me);const Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mf(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(oe),D.deleteSync(Pe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,W=0){const q=Math.pow(2,-W),z=Math.floor(E.image.width*q),st=Math.floor(E.image.height*q),pt=B!==null?B.x:0,bt=B!==null?B.y:0;Qt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,pt,bt,z,st),Et.unbindTexture()};const ld=D.createFramebuffer(),cd=D.createFramebuffer();this.copyTextureToTexture=function(E,B,W=null,q=null,z=0,st=null){st===null&&(z!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=z,z=0):st=0);let pt,bt,xt,Bt,Wt,Ut,oe,me,Pe;const Se=E.isCompressedTexture?E.mipmaps[st]:E.image;if(W!==null)pt=W.max.x-W.min.x,bt=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,Bt=W.min.x,Wt=W.min.y,Ut=W.isBox3?W.min.z:0;else{const Wn=Math.pow(2,-z);pt=Math.floor(Se.width*Wn),bt=Math.floor(Se.height*Wn),E.isDataArrayTexture?xt=Se.depth:E.isData3DTexture?xt=Math.floor(Se.depth*Wn):xt=1,Bt=0,Wt=0,Ut=0}q!==null?(oe=q.x,me=q.y,Pe=q.z):(oe=0,me=0,Pe=0);const ye=It.convert(B.format),Ft=It.convert(B.type);let Ce;B.isData3DTexture?(Qt.setTexture3D(B,0),Ce=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Qt.setTexture2DArray(B,0),Ce=D.TEXTURE_2D_ARRAY):(Qt.setTexture2D(B,0),Ce=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const he=D.getParameter(D.UNPACK_ROW_LENGTH),Un=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Es=D.getParameter(D.UNPACK_SKIP_PIXELS),Nn=D.getParameter(D.UNPACK_SKIP_ROWS),rr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const Ie=E.isDataArrayTexture||E.isData3DTexture,Vn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Wn=Tt.get(E),xn=Tt.get(B),wn=Tt.get(Wn.__renderTarget),ta=Tt.get(xn.__renderTarget);Et.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let es=0;es<xt;es++)Ie&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,z,Ut+es),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(B).__webglTexture,st,Pe+es)),D.blitFramebuffer(Bt,Wt,pt,bt,oe,me,pt,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Tt.has(E)){const Wn=Tt.get(E),xn=Tt.get(B);Et.bindFramebuffer(D.READ_FRAMEBUFFER,ld),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,cd);for(let wn=0;wn<xt;wn++)Ie?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wn.__webglTexture,z,Ut+wn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wn.__webglTexture,z),Vn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,st,Pe+wn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,st),z!==0?D.blitFramebuffer(Bt,Wt,pt,bt,oe,me,pt,bt,D.COLOR_BUFFER_BIT,D.NEAREST):Vn?D.copyTexSubImage3D(Ce,st,oe,me,Pe+wn,Bt,Wt,pt,bt):D.copyTexSubImage2D(Ce,st,oe,me,Bt,Wt,pt,bt);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ce,st,oe,me,Pe,pt,bt,xt,ye,Ft,Se.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,st,oe,me,Pe,pt,bt,xt,ye,Se.data):D.texSubImage3D(Ce,st,oe,me,Pe,pt,bt,xt,ye,Ft,Se):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,oe,me,pt,bt,ye,Ft,Se.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,oe,me,Se.width,Se.height,ye,Se.data):D.texSubImage2D(D.TEXTURE_2D,st,oe,me,pt,bt,ye,Ft,Se);D.pixelStorei(D.UNPACK_ROW_LENGTH,he),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Un),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Es),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rr),st===0&&B.generateMipmaps&&D.generateMipmap(Ce),Et.unbindTexture()},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&Qt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Qt.setTextureCube(E,0):E.isData3DTexture?Qt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Qt.setTexture2DArray(E,0):Qt.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){I=0,A=0,f=null,Et.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const Mt=0,Zn=1,vn=2,De=3,er=4,Jn=5,Ss=6,si=7,zo=8,ws=9,Ne=10,on=11,je=12,In=13,Ho=14,Tn=15,Ze=16,sn=17,Ve=18,fi=19,nn=20,ji=21,Fi=22,Le=23,mn=24,gn=25,nr=26,Go=27,Vo=28,Wo=29,qo=30,Xo=31,ir=32,Ln=33,$n=34,Pn=35,Hn=36,dn=37,mi=38,kr=39,Je=40,en=41,He=42,Qe=43,rn=44,_n=45,ai=46,kn=47,bi=48,Yn=49,yi=50,Mi=51,Ur=52,Nr=53,sr=54,Fr=55,Oi=56,$i=57,ki=58,Zs=59,wt=s=>s,F1={[mn]:"Crafting Bench",[He]:"Inside Door",[Qe]:"Inside Door",[_n]:"Bed",[Mi]:"Curved Hull Plating"};function O1(s){return F1[s]??jn[s].name}const jn=[wt({id:Mt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),wt({id:Zn,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),wt({id:vn,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),wt({id:De,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),wt({id:er,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),wt({id:Jn,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),wt({id:Ss,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),wt({id:si,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),wt({id:zo,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),wt({id:ws,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),wt({id:Ne,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),wt({id:on,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),wt({id:je,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),wt({id:In,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),wt({id:Ho,name:"Iron Rod",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),wt({id:Tn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),wt({id:Ze,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),wt({id:sn,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),wt({id:Ve,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),wt({id:fi,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),wt({id:nn,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),wt({id:ji,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),wt({id:Fi,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),wt({id:Le,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),wt({id:mn,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),wt({id:gn,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),wt({id:nr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),wt({id:Go,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),wt({id:Vo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),wt({id:Wo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),wt({id:qo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),wt({id:Xo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),wt({id:ir,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),wt({id:Ln,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),wt({id:$n,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.28,.52,.28]}),wt({id:Pn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),wt({id:Hn,name:"Wheat Sprout",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.66,.66,.34]}),wt({id:dn,name:"Desert Wheat",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),wt({id:mi,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),wt({id:kr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),wt({id:Je,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),wt({id:en,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),wt({id:He,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),wt({id:Qe,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),wt({id:rn,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),wt({id:_n,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),wt({id:ai,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),wt({id:kn,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),wt({id:bi,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),wt({id:Yn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.3,.55,.3]}),wt({id:yi,name:"Curved Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),wt({id:Mi,name:"Hull Slope",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.53,.58]}),wt({id:Ur,name:"Iron Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.62,.52,.42]}),wt({id:Nr,name:"Copper Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.72,.42,.26]}),wt({id:sr,name:"Alabaster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.4,breakTime:1.8,tool:"pickaxe",minTier:0,placeable:!1,color:[.86,.83,.74]}),wt({id:Fr,name:"Cobalt Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:4.2,tool:"pickaxe",minTier:3,placeable:!1,color:[.36,.46,.68]}),wt({id:Oi,name:"Broken Thruster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.42,.44,.5]}),wt({id:$i,name:"Thruster (lit)",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.9,.6,.3]}),wt({id:Zs,name:"Armoury",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:null,minTier:0,placeable:!0,color:[.45,.4,.36]}),wt({id:ki,name:"Sandstorm Breaker",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.3,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.72,.28,.24]})],Uu=8,ee=96,X=16,Be=1440;function fn(s){return jn[s].solid}function $o(s){return jn[s].opaque}function Dn(s){return s===Ve||s>=nr&&s<=ir}function Pi(s){return s===Ve?8:Dn(s)?33-s:0}function Ua(s){return 33-s}function B1(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Yo{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function mt(s,t,e){let n=s*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function Bl(s){return s*s*(3-2*s)}function cc(s,t,e){const n=Math.floor(s),r=Math.floor(t),i=Bl(s-n),o=Bl(t-r),l=mt(n,r,e),h=mt(n+1,r,e),a=mt(n,r+1,e),c=mt(n+1,r+1,e);return l+(h-l)*i+(a-l)*o+(l-h-a+c)*i*o}function hs(s,t,e,n=4,r=2,i=.5){let o=0,l=1,h=1,a=0;for(let c=0;c<n;c++)o+=cc(s*h,t*h,e+c*101)*l,a+=l,l*=i,h*=r;return o/a}function z1(s,t,e,n=3){let r=0,i=1,o=1,l=0;for(let h=0;h<n;h++){const a=Math.abs(cc(s*o,t*o,e+h*101)*2-1);r+=(1-a)*i,l+=i,i*=.5,o*=2}return r/l}function zl(s,t){const e=Math.floor(s),n=Bl(s-e),r=mt(e,0,t),i=mt(e+1,0,t);return r+(i-r)*n}const H1=0,Hl=1,Nu=2,ko=3,xr=4,G1=1e6,ze=320,Te=380,An=150;class Fu{constructor(t){this.seed=t;const e=new Yo(t^24378);for(let n=0;n<6;n++){const r=e.range(0,Math.PI*2),i=e.range(160,900);this.oases.push({x:Math.round(Math.cos(r)*i),z:Math.round(Math.sin(r)*i),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),r=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,r=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}for(let n=0;n<13;n++){const r=e.range(0,Math.PI*2),i=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(r)*i),z:Math.round(Math.sin(r)*i),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(mt(t,e,this.seed+53)-.5)*110,r=(mt(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*ze+n),z:Math.round(e*ze+r)}}get gtx(){return Math.round(this.homeTown.x/ze)}get gtz(){return Math.round(this.homeTown.z/ze)}townAt(t,e){if(t===this.gtx&&e===this.gtz)return!0;if(Math.abs(t)<2&&Math.abs(e)<2||mt(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const r of this.oases)if(Math.hypot(r.x-n.x,r.z-n.z)<r.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/ze),l=Math.floor((t+n)/ze),h=Math.floor((e-n)/ze),a=Math.floor((e+n)/ze);for(let c=o;c<=l;c++)for(let d=h;d<=a;d++){if(!this.townAt(c,d))continue;const p=this.townCenter(c,d),m=Math.hypot(p.x-t,p.z-e);m<=i&&(i=m,r=p)}return r}nearestTown(t,e){let n=null,r=1/0;const i=Math.floor(t/ze),o=Math.floor(e/ze);for(let l=i-4;l<=i+4;l++)for(let h=o-4;h<=o+4;h++){if(!this.townAt(l,h))continue;const a=this.townCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n=a)}return n??this.homeTown}mouthAt(t,e){if(!Z1(this.seed,t,e))return!1;const n=this.mouthCenter(t,e);return!(this.nearOasis(n.x,n.z)||this.townNear(n.x,n.z,20))}mouthCenter(t,e){return J1(this.seed,t,e)}mouthNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/An),l=Math.floor((t+n)/An),h=Math.floor((e-n)/An),a=Math.floor((e+n)/An);for(let c=o;c<=l;c++)for(let d=h;d<=a;d++){if(!this.mouthAt(c,d))continue;const p=this.mouthCenter(c,d),m=Math.hypot(p.x-t,p.z-e);m<=i&&(i=m,r=p)}return r}campAt(t,e){return zu(this.seed,t,e)}campCenter(t,e){return dc(this.seed,t,e)}campType(t,e){return e_(this.seed,t,e)}campNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/Te),l=Math.floor((t+n)/Te),h=Math.floor((e-n)/Te),a=Math.floor((e+n)/Te);for(let c=o;c<=l;c++)for(let d=h;d<=a;d++){if(!this.campAt(c,d))continue;const p=this.campCenter(c,d),m=Math.hypot(p.x-t,p.z-e);m<=i&&(i=m,r={x:p.x,z:p.z,type:this.campType(c,d)})}return r}nearestCamp(t,e){let n=null,r=1/0;const i=Math.floor(t/Te),o=Math.floor(e/Te);for(let l=i-3;l<=i+3;l++)for(let h=o-3;h<=o+3;h++){if(!this.campAt(l,h))continue;const a=this.campCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n={x:a.x,z:a.z,type:this.campType(l,h)})}return n}}function hc(s,t,e){const n=Math.min(.999,Math.max(.001,hs(s/900+.5,t/900+.5,e,3))),i=[.17,.42,.57,.72,.9].map(h=>Math.exp(-Math.abs(n-h)/.05)),o=Math.max(Math.abs(s),Math.abs(t));o<80&&(i[0]+=Math.pow(1-o/80,2)*6);const l=i.reduce((h,a)=>h+a,0);return i.map(h=>h/l)}function Eo(s,t,e){const n=hc(s,t,e);let r=0;for(let i=1;i<5;i++)n[i]>n[r]&&(r=i);return r}function Dh(s,t,e){const n=hc(t,e,s),r=[30+hs(t/140,e/140,s+7)*12+hs(t/45,e/45,s+8)*3+Math.sin(t/9+e/13)*.9,29+hs(t/160,e/160,s+9)*12+Math.max(0,cc(t/55,e/55,s+11)-.5)*18,28+hs(t/220,e/220,s+5)*3,33+Math.floor(hs(t/170,e/170,s+13)*7.99)*6,27-z1(t/210,e/210,s+17)*13-Math.max(0,hs(t/500,e/500,s+19)-.55)*10];let i=0;for(let o=0;o<5;o++)i+=n[o]*r[o];return i}function re(s,t,e){const n=Math.max(Math.abs(t),Math.abs(e));if(n<=14)return 30;let r=Dh(s,t,e);if(n<30){const o=(n-14)/16,l=o*o*(3-2*o);return 30+(r-30)*l}const i=V1(s,t,e);if(i){const o=Math.round(Dh(s,i.cx,i.cz)),l=Math.min(1,(12-i.d)/3),h=l*l*(3-2*l);r+=(o-r)*h}return r}function V1(s,t,e){const n=Math.floor(t/Te),r=Math.floor(e/Te);let i=null;for(let o=n-1;o<=n+1;o++)for(let l=r-1;l<=r+1;l++){if(Math.abs(t-o*Te)>42||Math.abs(e-l*Te)>42||!zu(s,o,l))continue;const h=dc(s,o,l),a=Math.max(Math.abs(h.x-t),Math.abs(h.z-e));a<=12&&(i===null||a<i.d)&&(i={cx:h.x,cz:h.z,d:a})}return i}function W1(s,t,e,n,r){const i=hc(t,e,s);let o=0,l=1;i[1]>i[0]&&(o=1,l=0);for(let h=2;h<5;h++)i[h]>i[o]?(l=o,o=h):i[h]>i[l]&&(l=h);return i[l]/i[o]>.35&&mt(t,e,s+45)<i[l]/(i[o]+i[l])&&(o=l),n===r?o===Nu?Ss:o===xr?De:o===ko?vn:o===Hl&&mt(t,e,s+41)>.78?er:Zn:n>=r-3?o===xr?De:Zn:o===ko||o===xr?De:vn}function fs(s,t,e,n){const r=_=>_*_*(3-2*_),i=Math.floor(s),o=Math.floor(t),l=Math.floor(e),h=(_,R,T)=>mt(_+T*911,R+T*577,n),a=r(s-i),c=r(t-o),d=r(e-l),p=(_,R,T)=>_+(R-_)*T,m=p(h(i,o,l),h(i+1,o,l),a),v=p(h(i,o+1,l),h(i+1,o+1,l),a),y=p(h(i,o,l+1),h(i+1,o,l+1),a),x=p(h(i,o+1,l+1),h(i+1,o+1,l+1),a);return p(p(m,v,c),p(y,x,c),d)}const uc=s=>Math.min(s-4,30),kh=new Map,yr=s=>{let t=kh.get(s);return t||(t=new Fu(s),kh.set(s,t)),t};function Uh(s,t,e,n,r){if(e<3||t*t+n*n<240)return!1;const i=r??Math.round(re(s,t,n));let o=uc(i);for(const a of yr(s).oases)Math.abs(t-a.x)<=a.r+1&&Math.abs(n-a.z)<=a.r+1&&(o=Math.min(o,Math.round(re(s,a.x,a.z))-5));if(e>o)return!1;const l=fs(t/9,e/5.5,n/9,s+301),h=fs(t/23,e/15,n/23,s+307);return l*.55+h*.45>.575+Math.max(0,o-e-4)*.005}const Ii=(s,t,e)=>s+","+t+","+e;function q1(s,t,e){if(mt(s,t,e+121)>=.6)return null;const n=Math.round(re(e,s,t)),r=n-4,i=n-16;if(i<4)return null;const o=2+(mt(s,t,e+123)*3|0),l=[];for(let L=0;L<o;L++){const k=-1+(mt(s+L*3,t,e+125)*4|0),U=-1+(mt(s,t+L*3,e+127)*4|0);l.push({x:s+k*6,z:t+U*6,hx:1+(mt(s-L,t+L,e+129)*3|0),hz:1+(mt(s+L,t-L,e+131)*3|0)})}const h=new Set;let a=1/0,c=-1/0,d=1/0,p=-1/0,m=1/0,v=-1/0;const y=(L,k,U)=>{h.add(Ii(L,k,U)),L<a&&(a=L),L>c&&(c=L),U<d&&(d=U),U>p&&(p=U),k<m&&(m=k),k>v&&(v=k)},x=(L,k,U,H,$,V)=>{for(let J=Math.min(L,k);J<=Math.max(L,k);J++)for(let et=Math.min(U,H);et<=Math.max(U,H);et++)for(let gt=$;gt<=V;gt++)y(J,gt,et)};for(const L of l)x(L.x-L.hx,L.x+L.hx,L.z-L.hz,L.z+L.hz,i,r);for(let L=1;L<l.length;L++)x(l[L-1].x,l[L].x,l[L-1].z,l[L-1].z,i,r),x(l[L].x,l[L].x,l[L-1].z,l[L].z,i,r);const _=l[0],R=mt(s,t+1,e+133)>.5?1:-1,T=mt(s+1,t,e+135)>.5?1:-1,S=_.x+R*(_.hx+1),b=_.z+T*(_.hz+1);x(S,S+1,b,b+1,i,r-3);const A=[[9,-6],[9,7],[-11,-5]][mt(s,t,e+137)*3|0],f={x:s+A[0],z:t+A[1]},u=Math.round(re(e,f.x,f.z)),g=u,M=Math.min(r-8,u-3);if(g-M<4)return null;const C=[[0,0],[1,0],[1,1],[0,1]];for(let L=0;L<=g-M;L++){const k=C[L&3],U=g-L;y(f.x+k[0],U,f.z+k[1]),y(f.x+k[0],U+1,f.z+k[1])}return x(f.x,_.x,f.z,f.z,M,M+1),x(_.x,_.x,f.z,_.z,M,M+1),{x0:a,x1:c,z0:d,z1:p,y0:m,y1:v,air:h,sh:{...f,y0:g}}}function X1(s,t,e){const n=q1(t.x,t.z,e);if(n){for(let r=n.x0;r<=n.x1;r++)for(let i=n.z0;i<=n.z1;i++)for(let o=n.y0;o<=n.y1;o++)n.air.has(Ii(r,o,i))&&s(r,o,i,Mt);for(let r=n.x0-1;r<=n.x1+1;r++)for(let i=n.z0-1;i<=n.z1+1;i++)for(let o=n.y0-1;o<=n.y1+1;o++){if(n.air.has(Ii(r,o,i)))continue;(n.air.has(Ii(r+1,o,i))||n.air.has(Ii(r-1,o,i))||n.air.has(Ii(r,o+1,i))||n.air.has(Ii(r,o-1,i))||n.air.has(Ii(r,o,i+1))||n.air.has(Ii(r,o,i-1)))&&s(r,o,i,mt(r*3+i*7,o*5+i,e+139)<.16?sr:fi)}}}function $1(s){const n=(a,c)=>a===4||a===-6?Math.abs(c)<=4:c===5||c===-5?a>=-5&&a<=3:a>=-5&&a<=3&&c>=-4&&c<=4,r=(a,c,d)=>(a===4||a===-6)&&Math.abs(d)>=3&&(c===30||c===34),i=(a,c)=>Math.abs(c)===5&&(a===3||a===-5),o=(a,c,d)=>Math.abs(c)===5&&a>=-3&&a<=2&&d>=31&&d<=33;for(let a=-6;a<=4;a++)for(let c=-5;c<=5;c++)for(let d=30;d<=34;d++){if(!n(a,c)||r(a,d,c))continue;const p=a>=2&&Math.abs(c)>2,m=a>=-5&&a<=3&&c>=-4&&c<=4&&d>=31&&d<=33&&!p;s(a,d,c,m?Mt:i(a,c)||o(a,c,d)?yi:d===30?Je:Ne)}for(let a=-3;a<=1;a++)for(let c=-2;c<=2;c++)s(a,35,c,Mi);for(let a=-2;a<=0;a++)for(let c=-1;c<=1;c++)s(a,36,c,Mi);for(let a=-2;a<=1;a++)for(const c of[6,7,8,9,-6,-7,-8,-9])s(a,32,c,Je);for(const a of[-3,2])for(const c of[6,7,8,-6,-7,-8])s(a,32,c,Je);for(const a of[-1,0])s(a,31,10,Je),s(a,31,-10,Je);for(const a of[-1,0])s(a,31,11,Je),s(a,31,-11,Je);for(const a of[-1,0])s(a,32,11,Oi),s(a,32,-11,Oi);const l=(a,c,d)=>{s(a,c,d,on),s(a,c+1,d,nn)},h=(a,c,d)=>{s(a,c,d,en),s(a,c+1,d,He)};for(let a=-4;a<=4;a++)for(let c=31;c<=33;c++)s(1,c,a,Ne),s(-2,c,a,Ne);for(let a=-5;a<=-3;a++)for(const c of[-2,2])for(let d=31;d<=33;d++)s(a,d,c,Ne);h(1,31,0),h(-2,31,0),h(-2,31,3),h(-2,31,-3),l(-6,31,0);for(let a=-2;a<=2;a++)for(let c=32;c<=33;c++)s(4,c,a,ws);s(-4,30,4,Ve),s(-4,29,4,Ve),s(-3,30,4,Ve),s(-4,31,-4,Fi),s(-4,31,-1,Tn),s(0,31,-3,Ze),s(0,31,-2,mn),s(-1,31,1,ki);for(const[a,c]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])s(a,34,c,In);for(const[a,c]of[[0,3],[0,4],[-1,4],[2,2]])s(a,31,c,Je)}function Y1(s,t,e){const n=new Yo(G1+77),r=Math.round(re(e,t.x,t.z));for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++){if(Math.abs(i)!==2&&Math.abs(o)!==2)continue;const l=Math.abs(i)===2&&Math.abs(o)===2;for(let h=r+1;h<=r+3;h++)s(t.x+i,h,t.z+o,l?yi:Ne)}for(let i=r+1;i<=r+2;i++)s(t.x,i,t.z-2,Mt);for(let i=0;i<40;i++){const o=t.x+n.int(-5,5),l=t.z+n.int(-5,5),h=Math.round(re(e,o,l)),a=n.next();s(o,h+n.int(0,1),l,a<.45?Ne:a<.55?yi:Je)}s(t.x,Math.round(re(e,t.x,t.z))+1,t.z,ji)}function Ou(s,t,e,n){const r=5+Math.floor(n()*3),i=[],o=(d,p,m,v,y)=>i.push({x:d,y:p,z:m,b:v,stage:y});o(s,t,e,kn,1),o(s,t+1,e,kn,1);for(let d=2;d<r;d++)o(s,t+d,e,kn,2);const l=[[1,0],[-1,0],[0,1],[0,-1]],h=2+(n()<.5?1:0);for(let d=0;d<h;d++){const p=l[Math.floor(n()*4)];o(s+p[0],t+r-2+d%2,e+p[1],kn,2)}const a=new Set(i.map(d=>d.x+","+d.y+","+d.z)),c=t+r-1;for(let d=-1;d<=2;d++){const p=d===-1||d===2?1.7:2.4;for(let m=-3;m<=3;m++)for(let v=-3;v<=3;v++){const y=m*m+v*v+d*d*2.2;if(y>p*p||y>(p-.9)*(p-.9)&&n()<.3||m===0&&v===0)continue;const x=s+m,_=c+d,R=e+v;a.has(x+","+_+","+R)||o(x,_,R,bi,3)}}return i}function Bu(s,t,e,n,r,i){const o=new Yo(mt(t,n,r+i)*4294967296>>>0||1);for(const l of Ou(t,e+1,n,()=>o.next()))s(l.x,l.y,l.z,l.b)}function K1(s,t,e){const n=Math.round(re(e,t.x,t.z));for(let o=-t.r-1;o<=t.r+1;o++)for(let l=-t.r-1;l<=t.r+1;l++){const h=t.x+o,a=t.z+l,c=Math.sqrt(o*o+l*l),d=Math.round(re(e,h,a));if(c<=t.r){const p=Math.max(1,Math.round(2.7-1.7*(c/t.r)));for(let m=d;m>n-p;m--)s(h,m,a,Mt);s(h,n-p,a,Zn);for(let m=n-p+1;m<=n;m++)s(h,m,a,Ve);for(let m=n+1;m<=n+12;m++)s(h,m,a,Mt)}else if(c<=t.r+1)for(let p=d;p<n+1;p++)s(h,p,a,Zn)}const r=3+(mt(t.x,t.z,e+73)<.5?1:0);for(let o=-t.r-r;o<=t.r+r;o++)for(let l=-t.r-r;l<=t.r+r;l++){const h=Math.sqrt(o*o+l*l);if(h<=t.r||h>t.r+r)continue;const a=t.x+o,c=t.z+l,d=Math.max(Math.round(re(e,a,c)),n);for(let p=d-2;p<=d;p++)s(a,p,c,p===d?ai:Jn)}const i=4+Math.floor(mt(t.x,t.z,e+75)*4);for(let o=0;o<i;o++){const l=o*(Math.PI*2/i)+mt(t.x+o,t.z-o,e+77)*1.1,h=t.r+1.5+mt(t.x-o,t.z+o,e+79)*(r+2),a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h),d=Math.max(Math.round(re(e,a,c)),n);Bu((p,m,v,y)=>{m>n&&Math.hypot(p-t.x,v-t.z)<=t.r||s(p,m,v,y)},a,d,c,e,81)}for(let o=0;o<5;o++){if(mt(t.x,t.z,e+61+o)<.35)continue;const l=o*1.27+mt(t.z,t.x,e+67+o)*.8,h=t.r+.5,a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h);Math.hypot(a-t.x,c-t.z)<t.r+1||s(a,Math.max(Math.round(re(e,a,c)),n)+1,c,Pn)}}function j1(s,t,e){for(const[a,c]of[[-4,-3],[3,2],[-3,5]]){const d=Math.round(re(e,t.x+a,t.z+c));for(let p=0;p<5;p++)for(let m=0;m<5;m++)for(let v=d-1;v<=d+3;v++){const y=v===d-1,x=(p===0||p===4||m===0||m===4)&&v>=d&&v<=d+2,_=v===d+3,R=p===0&&(m===2||m===3)&&v>=d&&v<=d+2;if(!(y||x||_)||R){s(t.x+a+p,v,t.z+c+m,Mt);continue}s(t.x+a+p,v,t.z+c+m,fi)}s(t.x+a+1,d,t.z+c+1,Le),s(t.x+a+2,d,t.z+c+1,rn),s(t.x+a+3,d,t.z+c+1,_n)}const n=t.x+3+Math.round((mt(t.x,t.z,e+83)-.5)*8),r=t.z-3+Math.round((mt(t.z,t.x,e+85)-.5)*8),i=2.5+mt(t.x,t.z,e+87)*2,o=(a,c)=>[[-4,-3],[3,2],[-3,5]].some(([d,p])=>a>=d-1+t.x&&a<=d+5+t.x&&c>=p-1+t.z&&c<=p+5+t.z);for(let a=-5;a<=5;a++)for(let c=-5;c<=5;c++){if(Math.sqrt(a*a+c*c)>i)continue;const d=n+a,p=r+c;if(o(d,p))continue;const m=Math.round(re(e,d,p));for(let v=m-2;v<=m;v++)s(d,v,p,v===m?ai:Jn)}const l=3+Math.floor(mt(t.x,t.z,e+89)*4);for(let a=0;a<l;a++){const c=a*(Math.PI*2/l)+mt(t.x+a,t.z-a,e+91)*1.3,d=1+mt(t.x-a,t.z+a,e+93)*i,p=n+Math.round(Math.cos(c)*d),m=r+Math.round(Math.sin(c)*d);o(p,m)||Bu(s,p,Math.round(re(e,p,m)),m,e,95)}const h=Math.round(re(e,t.x,t.z+11));for(let a=0;a<5;a++)for(let c=0;c<3;c++)s(t.x-8+a,h,t.z+10+c,Ln);s(t.x-7,h+1,t.z+11,dn),s(t.x-5,h+1,t.z+10,dn),s(t.x-4,h+1,t.z+12,Pn)}function Z1(s,t,e){return Math.abs(t)<=1&&Math.abs(e)<=1?!1:mt(t,e,s+311)<.55}function J1(s,t,e){const n=(mt(t,e,s+313)-.5)*60,r=(mt(t,e,s+315)-.5)*60;return{x:Math.round(t*An+n),z:Math.round(e*An+r)}}const Q1=[[1,0],[-1,0],[0,1],[0,-1]];function t_(s,t,e){if(t.x*t.x+t.z*t.z<1600)return;const[n,r]=Q1[mt(t.x,t.z,e+317)*4|0],[i,o]=[-r,n],l=Math.round(re(e,t.x,t.z));let h=-1;for(let b=1;b<=3;b++)if(Math.round(re(e,t.x+n*b,t.z+r*b))<=l-2){h=b;break}if(h<0)return;const a=t.x+n*(h-1),c=t.z+r*(h-1),d=Math.round(re(e,t.x+n*h,t.z+r*h)),p=Math.round(re(e,a,c)),m=Math.max(Math.min(d+1,p),8);if(p<m+2)return;const v=12+(mt(t.x,t.z,e+319)*5|0),y=a+n*v,x=c+r*v,_=uc(Math.round(re(e,y,x)))-1;if(_<6||_>m-4)return;for(let b=2;b<v;b++){const I=a+n*b,A=c+r*b,f=m-Math.round(b*(m-_)/v);if(Math.round(re(e,I,A))<f+2||Math.round(re(e,I+i,A+o))<f+2)return}const R=new Set,T=(b,I,A)=>{I<6||(R.add(b+","+I+","+A),s(b,I,A,Mt))};for(let b=0;b<=v;b++){const I=a+n*b,A=c+r*b,f=b===v?_:m-Math.round(b*(m-_)/v);for(const u of[0,1])T(I+i*u,f,A+o*u),T(I+i*u,f+1,A+o*u),b<=1&&T(I+i*u,f+2,A+o*u)}for(let b=y-2;b<=y+2;b++)for(let I=x-2;I<=x+2;I++){for(let A=_;A<=_+2;A++)T(b,A,I);s(b,_-1,I,De),s(b,_+3,I,De)}for(const b of R){const I=b.split(","),A=+I[0],f=+I[1],u=+I[2];for(const[g,M,C]of[[A+1,f,u],[A-1,f,u],[A,f+1,u],[A,f-1,u],[A,f,u+1],[A,f,u-1]])M<5||R.has(g+","+M+","+C)||M<=Math.round(re(e,g,C))&&s(g,M,C,De)}for(const[b,I]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){if(b===n&&I===r)continue;const A=a+b,f=c+I;s(A,Math.round(re(e,A,f)),f,De)}for(const b of[0,1])s(a+i*b,m-1,c+o*b,De);s(a+n,m+3,c+r,De);const S=2+(mt(t.x+7,t.z-3,e+321)*3|0);for(let b=0;b<S;b++){const I=1+(mt(t.x+b,t.z,e+323)*3|0),A=(mt(t.x-b,t.z,e+325)*3|0)-1,f=t.x+n*(h+I)+i*A,u=t.z+r*(h+I)+o*A;s(f,Math.round(re(e,f,u))+1,u,mt(f,u,e+327)>.5?er:De)}}function zu(s,t,e){if(Math.abs(t)<=1&&Math.abs(e)<=1||mt(t,e,s+401)>=.8)return!1;const n=dc(s,t,e),r=yr(s);for(const i of r.oases)if(Math.hypot(i.x-n.x,i.z-n.z)<i.r+20)return!1;return!(Math.hypot(r.secondShip.x-n.x,r.secondShip.z-n.z)<40||r.townNear(n.x,n.z,25)!==null)}function dc(s,t,e){const n=(mt(t,e,s+403)-.5)*60,r=(mt(t,e,s+405)-.5)*60;return{x:Math.round(t*Te+n),z:Math.round(e*Te+r)}}function e_(s,t,e){return mt(t,e,s+407)*3|0}function n_(s){return{x:s.x+1.5,z:s.z-1.5}}function i_(s,t,e){const n=Math.round(re(e,t.x,t.z));s(t.x+2,n+1,t.z+1,fi);for(const[i,o]of[[3,1],[2,2],[3,2]])for(let l=n+1;l<=n+2;l++)s(t.x+i,l,t.z+o,kn);s(t.x+3,n+3,t.z+1,Je),s(t.x+2,n+3,t.z+2,Je),s(t.x+3,n+3,t.z+2,Je),s(t.x+2,n+3,t.z+1,In),s(t.x-2,n+1,t.type===1?t.z+3:t.z,sn);const r=(i,o,l,h)=>{const a=i-(l>>1),c=i+(l>>1),d=o-(h>>1),p=o+(h>>1);for(let m=a;m<=c;m++)for(let v=d;v<=p;v++)for(let y=n;y<=n+4;y++){const x=m===a||m===c||v===d||v===p,_=y===n||y===n+4||x&&y<=n+3;s(m,y,v,_?fi:Mt)}s(c,n+1,o,on),s(c,n+2,o,nn),s(c,n+1,o+1,Mt),s(c,n+2,o+1,Mt),s(a+1,n+1,o+1,Le),s(c-2,n+1,o-1,rn),s(c-2,n+1,o,_n),s(c-1,n+3,d+1,In)};if(t.type===0){for(let l=-2;l<=2;l++)for(let h=-2;h<=2;h++){if(l*l+h*h>4.5||l===2&&h===0)continue;const a=t.x-4+l,c=t.z+h,d=mt(a*3+1,c*5-2,e+411)>.62?fi:vn;for(let p=n;p<=n+9;p++)s(a,p,c,d)}for(let l=2;l<=3;l++)s(t.x-4-l,n+7,t.z,kn);s(t.x-7,n+7,t.z,Je);for(let l=1;l<=3;l++)s(t.x-7,n+7+l,t.z,si),s(t.x-7,n+7-l,t.z,si),s(t.x-7,n+7,t.z+l,si),s(t.x-7,n+7,t.z-l,si);const i=t.x-7,o=t.z+2;for(let l=i-1;l<=i+1;l++)for(let h=o-1;h<=o+1;h++)for(let a=n;a<=n+3;a++){const c=l===i+1&&h===o&&(a===n+1||a===n+2);!(a===n||a===n+3||(Math.abs(l-i)===1||Math.abs(h-o)===1)&&a<=n+2)||c?s(l,a,h,Mt):s(l,a,h,fi)}s(i,n+1,o,Le)}else if(t.type===1)r(t.x-4,t.z,5,5);else{r(t.x-5,t.z-3,7,5);for(let o=t.x+4;o<=t.x+9;o++)for(let l=t.z-4;l<=t.z-1;l++)s(o,n,l,Ln),o===t.x+4&&l===t.z-4||o===t.x+9&&l===t.z-1?s(o,n+1,l,Pn):s(o,n+1,l,(o+l)%2?Hn:dn);const i=(o,l)=>{s(o,n+1,l,si),s(o,n+2,l,si)};for(let o=t.x+3;o<=t.x+10;o+=2)i(o,t.z-5),i(o,t.z);for(let o=t.z-3;o<=t.z-1;o+=2)i(t.x+3,o),i(t.x+10,o);for(let o=t.x;o<=t.x+3;o++)for(let l=t.z+3;l<=t.z+5;l++){const h=o>=t.x+1&&o<=t.x+2&&l===t.z+4;s(o,n+1,l,h?Ve:De)}}}function s_(s,t,e,n){const r=new Uint8Array(X*X*ee),i=(A,f,u,g)=>{const M=A-e*X,C=u-n*X;M>=0&&M<X&&C>=0&&C<X&&f>=0&&f<ee&&(r[(M*X+C)*ee+f]=g)},o=X+2,l=new Uint8Array(o*o*ee),h=new Int16Array(o*o).fill(-1),a=(A,f)=>{const u=(A-e*X+1)*o+(f-n*X+1);return h[u]<0&&(h[u]=Math.round(re(s,A,f))),h[u]},c=(A,f,u)=>{const g=A-e*X+1,M=u-n*X+1;if(g<0||g>=o||M<0||M>=o)return Uh(s,A,f,u);const C=(g*o+M)*ee+f;return l[C]||(l[C]=Uh(s,A,f,u,a(A,u))?2:1),l[C]===2};for(let A=0;A<X;A++)for(let f=0;f<X;f++){const u=e*X+A,g=n*X+f,M=Math.round(re(s,u,g));for(let k=0;k<=M;k++)r[(A*X+f)*ee+k]=W1(s,u,g,k,M);const C=u*u+g*g<240,L=uc(M);if(!C)for(let k=3;k<=L;k++){const U=(A*X+f)*ee+k;if(c(u,k,g)){r[U]=k>=8&&k<=18&&fs(u/26,k/19,g/26,s+401)>.785?Ve:Mt;continue}const H=r[U];H!==De&&H!==vn||(c(u+1,k,g)||c(u-1,k,g)||c(u,k+1,g)||c(u,k-1,g)||c(u,k,g+1)||c(u,k,g-1))&&(k<=15&&mt(u*5+k,g*7-k,s+333)<.4&&fs(u/5+40,k/5,g/5,s+331)>.72?r[U]=Fr:k>=12&&fs(u/5,k/5,g/5,s+313)>.665?r[U]=Ur:k>=12&&fs(u/5,k/5+60,g/5,s+317)>.7?r[U]=Nr:k>=8&&k<=24&&fs(u/5,k/5,g/5+70,s+321)>.715&&(r[U]=sr))}if(!C&&M>=12&&mt(u,g,s+201)>.984&&t.townNear(u,g,14)===null&&t.nearOasis(u,g)===null){const k=L-4;if(k>=7){for(let U=M-1;U>=k;U--)r[(A*X+f)*ee+U]=Mt;r[(A*X+f)*ee+(k-1)]=De}}if(!C&&mt(u,g,s+21)>.988){const k=Eo(u,g,s),U=(H,$)=>H>=0&&H<X&&$>=0&&$<X;if(k===ko||k===xr){const H=3+(mt(u,g,s+22)*3|0);for(let $=1;$<=H;$++)i(u,M+$,g,De);A>0&&mt(u,g,s+27)>.5&&i(u-1,M+1,g,De)}else if(k===Hl){const H=2+(mt(u,g,s+24)*2|0),$=[[1,0],[-1,0],[0,1],[0,-1]][mt(u,g,s+25)*4|0];for(let V=0;V<H;V++)i(u,M+1+V,g,De);U(A+$[0],f+$[1])&&i(u+$[0],M+H,g+$[1],De)}else if(k===Nu)for(const[H,$]of[[0,0],[1,0],[0,1],[1,1]])U(A+H,f+$)&&i(u+H,M+1,g+$,Ss);else{const H=2+(mt(u,g,s+26)*3|0);for(let $=0;$<H;$++){const V=(mt(u+$,g,s+33)*3|0)-1,J=(mt(u,g+$,s+35)*3|0)-1;U(A+V,f+J)&&i(u+V,M+1,g+J,mt(u+$,g-$,s+43)>.5?De:vn)}}}if(!C&&mt(u,g,s+23)>.9935){const k=Eo(u,g,s);if(k!==ko&&k!==xr){const U=3+(mt(u,g,s+29)*3|0);for(let H=M+1;H<=M+U;H++)i(u,H,g,si)}}if(!C&&r[(A*X+f)*ee+M+1]===0&&mt(u,g,s+31)>.9915){const k=Eo(u,g,s);if(k===H1||k===Hl){const U=2+(mt(u,g,s+37)*3|0);for(let H=M+1;H<=M+U;H++)i(u,H,g,gn);U>=3&&mt(u,g,s+41)>.55&&i(u+(mt(u,g,s+43)>.5?1:-1),M+2,g,gn),U>=3&&mt(u,g,s+47)>.7&&i(u,M+U,g,mi)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&$1(i);for(const A of t.oases)Math.abs(e*X+8-A.x)<A.r+24&&Math.abs(n*X+8-A.z)<A.r+24&&K1(i,A,s);const d=Math.floor((e*X-14-ze)/ze),p=Math.floor((e*X+X+14+ze)/ze),m=Math.floor((n*X-14-ze)/ze),v=Math.floor((n*X+X+14+ze)/ze);for(let A=d;A<=p;A++)for(let f=m;f<=v;f++){if(!t.townAt(A,f))continue;const u=t.townCenter(A,f);e*X<=u.x+16&&e*X+X-1>=u.x-12&&n*X<=u.z+12&&n*X+X-1>=u.z-16&&j1(i,u,s),e*X<=u.x+30&&e*X+X-1>=u.x-30&&n*X<=u.z+30&&n*X+X-1>=u.z-30&&X1(i,u,s)}const y=Math.floor((e*X-48-Te)/Te),x=Math.floor((e*X+X-1+48+Te)/Te),_=Math.floor((n*X-48-Te)/Te),R=Math.floor((n*X+X-1+48+Te)/Te);for(let A=y;A<=x;A++)for(let f=_;f<=R;f++){if(!t.campAt(A,f))continue;const u=t.campCenter(A,f);e*X<=u.x+12&&e*X+X-1>=u.x-12&&n*X<=u.z+6&&n*X+X-1>=u.z-10&&i_(i,{x:u.x,z:u.z,type:t.campType(A,f)},s)}const T=Math.floor((e*X-54-An)/An),S=Math.floor((e*X+X-1+54+An)/An),b=Math.floor((n*X-54-An)/An),I=Math.floor((n*X+X-1+54+An)/An);for(let A=T;A<=S;A++)for(let f=b;f<=I;f++){if(!t.mouthAt(A,f))continue;const u=t.mouthCenter(A,f);e*X<=u.x+24&&e*X+X-1>=u.x-24&&n*X<=u.z+24&&n*X+X-1>=u.z-24&&t_(i,u,s)}return Math.abs(e*X+8-t.secondShip.x)<12&&Math.abs(n*X+8-t.secondShip.z)<12&&Y1(i,t.secondShip,s),r}const ri=(s,t)=>s+","+t,Nh=(s,t,e)=>(s*X+t)*ee+e,Na=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Fh=new Set([Mt,je,en,He,Qe,bi]);class r_{constructor(t){this.seed=t,this.gen=new Fu(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;waterQ=new Set;gen;chunk(t,e){const n=ri(t,e);let r=this.chunks.get(n);if(!r){r=s_(this.seed,this.gen,t,e);const i=this.deltas.get(n);if(i)for(const[o,l]of i)r[o]=l;this.chunks.set(n,r)}return r}get(t,e,n){if(e<0||e>=ee)return Mt;const r=Math.floor(t/X),i=Math.floor(n/X);return this.chunk(r,i)[Nh(t-r*X,n-i*X,e)]}skyResistance(t,e,n,r=40){let i=0,o=0;for(let l=1;l<=r;l++){const h=this.get(t,e+l,n);if(h===Mt)continue;const a=o_[h];if(a&&(i+=a,h!==bi&&(o+=a,o>=6)))return{R:i,openSky:!1}}return{R:i,openSky:o===0}}sunVisible(t,e,n,r,i,o,l=64){if(i<=0)return!1;let h=t,a=e,c=n;const d=Math.sign(r),p=1,m=Math.sign(o),v=d?Math.abs(1/r):1/0,y=1/i,x=m?Math.abs(1/o):1/0;let _=d?(d>0?h+1-(t+.5):t+.5-h)*v:1/0,R=(e+1-(e+.5))*y,T=m?(m>0?c+1-(n+.5):n+.5-c)*x:1/0;for(let S=0;S<192;S++){let b;if(_<=R&&_<=T?(h+=d,b=_,_+=v):R<=T?(a+=p,b=R,R+=y):(c+=m,b=T,T+=x),b>l)return!0;const I=this.get(h,a,c);if(I===ws||$o(I))return!1}return!0}roomInfo(t,e,n,r=400){if(!Fh.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const i=new Set([`${t},${e},${n}`]),o=[[t,e,n]],l=new Set;let h=0,a=!0;for(;o.length;){const[c,d,p]=o.pop();if(++h>r){a=!1;break}for(const[m,v,y]of Na){const x=c+m,_=d+v,R=p+y;if(_>=ee){a=!1;continue}const T=this.get(x,_,R);if(Fh.has(T)){const S=x+","+_+","+R;i.has(S)||(i.add(S),o.push([x,_,R]))}else T===Fi&&l.add(x+","+_+","+R)}}return{size:h,sealed:a,regulators:l.size,regCells:[...l]}}set(t,e,n,r){if(e<0||e>=ee)return;const i=Math.floor(t/X),o=Math.floor(n/X),l=this.chunk(i,o),h=Nh(t-i*X,n-o*X,e);if(l[h]===r)return;const a=l[h];if(l[h]=r,Dn(r)||Dn(a)||r===Mt){this.queueWater(t,e,n);for(const[m,v,y]of Na)this.queueWater(t+m,e+v,n+y)}let c=this.deltas.get(ri(i,o));c||this.deltas.set(ri(i,o),c=new Map),c.set(h,r),this.markDirty(i,o);const d=t-i*X,p=n-o*X;d===0&&this.markDirty(i-1,o),p===0&&this.markDirty(i,o-1),d===X-1&&this.markDirty(i+1,o),p===X-1&&this.markDirty(i,o+1)}markDirty(t,e){this.dirty.add(ri(t,e))}queueWater(t,e,n){e>=0&&e<ee&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;const n=[...this.waterQ];this.waterQ.clear();for(const r of n){if(e>=t)break;const[i,o,l]=r.split(",").map(Number);e+=this.drainFlow(i,o,l,t-e),e+=this.floodFrom(i,o,l,t-e)}return e}drainFlow(t,e,n,r){let i=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],l=new Set;for(;o.length&&i++<r;){const[h,a,c]=o.pop(),d=Pi(this.get(h,a,c));if(!d||d===8)continue;const p=h+","+a+","+c;if(!l.has(p)&&(l.add(p),!this.waterSupported(h,a,c,d))){this.set(h,a,c,Mt);for(const[m,v,y]of Na)o.push([h+m,a+v,c+y])}}return i}waterSupported(t,e,n,r){for(const[i,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(Pi(this.get(t+i,e,n+o))>r)return!0;return Pi(this.get(t,e+1,n))>0}floodFrom(t,e,n,r){let i=0;const o=[[t,e,n]];for(;o.length&&i++<r;){const[l,h,a]=o.shift(),c=this.get(l,h-1,a);let d=Pi(this.get(l,h,a));if(d&&d!==8&&d<7&&Pi(this.get(l,h+1,a))>0&&(this.set(l,h,a,Ua(7)),d=7),!d||(h>0&&(c===Mt||Dn(c))&&Pi(c)<d&&this.set(l,h-1,a,Ua(d===8?7:d)),c===Mt||Dn(c)))continue;const p=d===8?7:d-1;if(!(p<1))for(const[m,v]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=this.get(l+m,h,a+v);(y===Mt||Dn(y))&&Pi(y)<p&&this.set(l+m,h,a+v,Ua(p))}}return i}surface(t,e){for(let n=ee-1;n>=0;n--)if(this.get(t,n,e)!==Mt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const r=[];for(const[i,o]of n)r.push(i,o);t[e]=r}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const r=new Map;for(let i=0;i<n.length;i+=2)r.set(n[i],n[i+1]);this.deltas.set(e,r)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}}const o_=jn.map(s=>s.R);function Fa(s,t,e,n,r){const i=s.get(t,e,n);return i===on||i===nn||i===en||i===He?!0:!($o(i)||i===r)}const mo=.6,a_=1.8,Oh=1.62;class l_{constructor(t){this.world=t}pos=new F(.5,31.01,2.5);vel=new F;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;fallPeakY=this.pos.y;lastFallDist=0;waterAt(t){const e=this.pos.y+t,n=Math.floor(e),r=this.world.get(Math.floor(this.pos.x),n,Math.floor(this.pos.z));return Dn(r)?e-n<Pi(r)/8:!1}collides(t,e,n){const r=Math.floor(t-mo/2),i=Math.floor(t+mo/2),o=Math.floor(n-mo/2),l=Math.floor(n+mo/2),h=Math.floor(e),a=Math.floor(e+a_-.001);for(let c=r;c<=i;c++)for(let d=o;d<=l;d++)for(let p=h;p<=a;p++)if(fn(this.world.get(c,p,d)))return!0;return!1}update(t,e,n,r,i,o){this.onGround?this.fallPeakY=this.pos.y:this.pos.y>this.fallPeakY&&(this.fallPeakY=this.pos.y),this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Oh);const l=this.inWater,h=(this.sprinting?7.2:4.5)*i*(o?.25:1)*(l?.55:1),a=new F(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new F(-a.z,0,a.x),d=a.multiplyScalar(n).add(c.multiplyScalar(e));d.lengthSq()>1&&d.normalize();const p=this.onGround?40:l?12:8;this.vel.x+=(d.x*h-this.vel.x)*Math.min(1,p*t),this.vel.z+=(d.z*h-this.vel.z)*Math.min(1,p*t),l?(this.vel.y-=7*t,r&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=di.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,r&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0),this.fallPeakY=40,this.lastFallDist=0),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,r=Math.max(1,Math.ceil(Math.abs(t)/.3)),i=t/r;for(let o=0;o<r;o++){const l=n.x+(e===0?i:0),h=n.y+(e===1?i:0),a=n.z+(e===2?i:0);if(!this.collides(l,h,a)){n.set(l,h,a);continue}e===1?(i<0&&(this.lastFallDist=Math.max(0,this.fallPeakY-n.y),this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new F(this.pos.x,this.pos.y+Oh,this.pos.z)}}const ps=20,mr=45,fc=36,Ko=37.5,Gl=39.5,Vl=31.5,Wl=5,Bh=22,c_=27,h_=25,Mr=150;class u_{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;storm=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};regulatedAir=!1;embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%Be/Be}ambient(t,e,n){const r=(e-.28+1)%1;let i=c_-h_*(r<=.3?Math.cos(r/.3*Math.PI):Math.cos((1+(r-.3)/.7)*Math.PI));t===2&&(i-=2),(t===3||t===4)&&(i+=3);const o=zl(Math.floor(n/10)/60,this.weatherSeed)*2-1;return i+o*8}stormAt(t){const e=zl(Math.floor(t/300)/15,this.weatherSeed+911);return e>.7?Math.min(1,(e-.7)/.15):0}update(t,e,n,r){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const i=this.worldTimeToDayFrac(r.tSec),o=this.ambient(r.biome,i,r.tSec),l=Math.floor(n.x),h=Math.floor(n.y),a=Math.floor(n.z),c=(S,b,I)=>{const A=b<=r.terrainH(S,I)-2,f=A?Bh:o,{R:u,openSky:g}=e.skyResistance(S,b,I);let M=1-Math.exp(-u),C=f;!A&&r.sunElev>0&&r.sunDir&&e.sunVisible(S,b,I,r.sunDir.x,r.sunDir.y,r.sunDir.z)&&(C+=8+10*r.sunElev);const L=e.roomInfo(S,b,I);return L.sealed&&(L.regulators*Mr>=L.size?(C=36.6,M=1):(C=f,A||(M=0))),{R:u,openSky:g,shelter:M,ambEff:C,room:L,deep:A}};let d=c(l,h,a);if(d.room.size===0){const S=`${l},${h},${a}|${Math.floor(r.tSec*2)}`;if(this.embedKey!==S){let b=d;for(let I=-1;I<=1;I++)for(let A=-1;A<=1;A++)for(let f=-1;f<=1;f++){if(!I&&!A&&!f)continue;const u=c(l+I,h+A,a+f);u.room.size!==0&&Math.abs(u.ambEff-37)<Math.abs(b.ambEff-37)&&(b=u)}this.embedKey=S,this.embedAir=b}this.embedAir&&(d=this.embedAir)}this.lastOpenSky=d.openSky;let p=d.shelter,m=d.ambEff;const v=d.room,y=this.stormAt(r.tSec);this.storm+=(y-this.storm)*Math.min(1,t*.08);const x=r.stormShield?0:this.storm*r.stormMul;if(x>.02&&!d.deep&&d.shelter<.6&&(m=36.6+(m-36.6)*(1+.35*x)),this.lastRoom=v,this.regulatedAir=v.sealed&&v.regulators*Mr>=v.size,r.inWater){const S=di.clamp(o,12,24)-3;m=(m+S)/2}r.warmth&&(m+=r.warmth);const _=r.regulator?36.6:36.6+(m-36.6)*(1-p);this.lastAmbient=d.deep?Bh:o,this.lastAmbientEff=m,this.lastShelterR=d.R,this.lastTarget=_;const R=v.sealed?.022:.0075;this.body+=(_-this.body)*R*t,this.body=di.clamp(this.body,12,44.5);let T=100/(Be*1.5);this.body>37&&(T+=(this.body-37)*.02),r.sprinting&&(T*=1.7),r.overencumbered&&(T+=.05),x>.05&&d.shelter<.8&&(T*=1+.7*x),this.water=Math.max(0,this.water-T*t),this.regulatedAir||(this.body>Gl&&this.hurt((this.body-Gl)*.15,"heat stroke"),this.body<Vl&&this.hurt((Vl-this.body)*.175,"hypothermia")),this.water<=0?this.hurt(.3,"dehydration"):this.water<Wl&&this.hurt((Wl-this.water)*.0375,"dehydration"),x>.35&&d.openSky&&this.hurt((x-.35)*.55*t,"sand blast"),this.water>25&&this.body>=fc&&this.body<=Ko&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=di.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,r,i){const o=this.worldTimeToDayFrac(i),l=this.ambient(0,o,i);let h=l;const a=(o-.25)*Math.PI*2,c=Math.sin(a);if(c>0){const p=1/Math.hypot(Math.cos(a),c,.4);t.sunVisible(e,n,r,Math.cos(a)*p,c*p,.4*p)&&(h+=8+10*c)}const d=t.roomInfo(e,n,r);return d.sealed&&(h=d.regulators*Mr>=d.size?36.6:l),h}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=5,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const To=15,gr=X+2,_s=(s,t,e)=>((s+1)*gr+(t+1))*ee+e,d_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function zh(s){return s===bi?2:s===Mt?1:$o(s)?-1:1}function f_(s){return s===bi?2:Dn(s)?1:s===Mt?0:$o(s)?-1:0}class p_{maps=new Map;invalidate(t,e){this.maps.delete(ri(t,e))}lightAt(t,e,n){if(e<0||e>=ee)return 0;const r=Math.floor(t/X),i=Math.floor(n/X),o=this.maps.get(ri(r,i));return o?o[_s(t-r*X,n-i*X,e)]:0}bake(t,e,n,r){const i=t.chunk(e,n),o=new Uint8Array(gr*gr*ee),l=[],h=(c,d,p,m)=>{if(m<=0)return;const v=_s(c,d,p);m>o[v]&&(o[v]=m,l.push(v))},a=(c,d,p)=>c>=0&&c<X&&d>=0&&d<X?i[(c*X+d)*ee+p]:t.get(e*X+c,p,n*X+d);for(let c=-1;c<=X;c++)for(let d=-1;d<=X;d++){let p=To;for(let m=ee-1;m>=0;m--){const v=f_(a(c,d,m));if(v<0||(h(c,d,m,p),v>0&&(p-=v,p<=0)))break}}for(const[c,d]of[[-1,0],[1,0],[0,-1],[0,1]]){const p=this.maps.get(ri(e+c,n+d));if(p)for(let m=0;m<X;m++)for(let v=0;v<ee;v++){const y=c<0?-1:c>0?X:m,x=d<0?-1:d>0?X:m,_=c<0?X-1:c>0?0:m,R=d<0?X-1:d>0?0:m,T=p[_s(_,R,v)];T>0&&h(y,x,v,T)}}for(let c=0;c<l.length;c++){const d=l[c],p=o[d];if(p<=1)continue;const m=(d/(gr*ee)|0)-1,v=d%(gr*ee),y=(v/ee|0)-1,x=v%ee;for(const[_,R,T]of d_){const S=m+_,b=y+T,I=x+R;if(!(I<0||I>=ee))if(S>=-1&&S<=X&&b>=-1&&b<=X){const A=zh(a(S,b,I));A>=0&&h(S,b,I,p-A)}else{const A=e*X+S,f=n*X+b,u=zh(t.get(A,I,f));if(u<0)continue;const g=Math.floor(A/X),M=Math.floor(f/X),C=this.maps.get(ri(g,M));C&&C[_s(A-g*X,f-M*X,I)]+1<p-u&&r(g,M)}}}return this.maps.set(ri(e,n),o),o}}const m_=new Set([on,nn,je,en,He,Qe]),g_=new Set([Hn,dn,Yn]),go=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],__=.28;function Oe(s,t,e,n,r){const i=n[1].map((c,d)=>c-n[0][d]),o=n[2].map((c,d)=>c-n[0][d]),l=i[1]*o[2]-i[2]*o[1],h=i[2]*o[0]-i[0]*o[2],a=i[0]*o[1]-i[1]*o[0];return l*s[0]+h*s[1]+a*s[2]<0&&n.reverse(),{dir:s,kind:t,pts:n,sh:e,uv:r}}const v_=(()=>{const s=__,t=1-s,e=c=>[c[0],c[2]],n=c=>[c[0],c[1]],r=c=>[c[2],c[1]],i=c=>[(c[2]-c[0])/2+.5,c[1]],o=c=>[(c[0]+c[2])/2,c[1]],l=[[s,0],[t,0],[1,s],[1,t],[t,1],[s,1],[0,t],[0,s]],h=[Oe([0,1,0],0,1,l.map(([c,d])=>[c,1,d]),e),Oe([0,-1,0],1,.45,l.map(([c,d])=>[c,0,d]),e),Oe([1,0,0],2,.8,[[1,0,s],[1,0,t],[1,1,t],[1,1,s]],r),Oe([-1,0,0],2,.7,[[0,0,t],[0,1,t],[0,1,s],[0,0,s]],r),Oe([0,0,1],2,.85,[[s,0,1],[t,0,1],[t,1,1],[s,1,1]],n),Oe([0,0,-1],2,.65,[[s,0,0],[s,1,0],[t,1,0],[t,0,0]],n),Oe([-1,0,-1],2,.675,[[s,0,0],[s,1,0],[0,1,s],[0,0,s]],i),Oe([1,0,-1],2,.725,[[t,0,0],[t,1,0],[1,1,s],[1,0,s]],o),Oe([1,0,1],2,.825,[[1,0,t],[1,1,t],[t,1,1],[t,0,1]],i),Oe([-1,0,1],2,.775,[[0,0,t],[0,1,t],[s,1,1],[s,0,1]],o)],a=[Oe([0,1,0],0,1,[[s,1,s],[s,1,t],[t,1,t],[t,1,s]],e),Oe([0,-1,0],1,.45,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],e),Oe([1,0,0],2,.8,[[1,0,0],[1,0,1],[1,t,1],[1,t,0]],r),Oe([-1,0,0],2,.7,[[0,0,0],[0,t,0],[0,t,1],[0,0,1]],r),Oe([0,0,1],2,.85,[[0,0,1],[1,0,1],[1,t,1],[0,t,1]],n),Oe([0,0,-1],2,.65,[[0,0,0],[0,t,0],[1,t,0],[1,0,0]],n),Oe([0,1,-1],2,.825,[[0,t,0],[1,t,0],[1,1,s],[0,1,s]],n),Oe([0,1,1],2,.925,[[1,t,1],[0,t,1],[0,1,s],[1,1,s]],n),Oe([-1,1,0],2,.85,[[0,t,1],[0,t,0],[0,1,s],[0,1,t]],r),Oe([1,1,0],2,.9,[[1,t,0],[1,t,1],[1,1,t],[1,1,s]],r)];return{[yi]:h,[Mi]:a}})(),we=16,Rn=16,Rr=[Zn,vn,De,er,Jn,Ss,si,zo,ws,Ne,on,nn,In,Ho,Tn,Ze,sn,Ve,fi,je,ji,Fi,Le,mn,gn,nr,Go,Vo,Wo,qo,Xo,ir,Ln,$n,Pn,Hn,dn,mi,kr,Je,en,He,Qe,rn,_n,ai,kn,bi,Yn,Ur,Nr,Fr,sr,Oi,$i,ki,Zs],Hu=[["grass_top",ai],["grass_side",ai],["wood_top",kn],["farmland_side",Ln],["sandstone_top",vn],["hull_top",Ne],["water_side",Ve],["bed_side",rn],["chest_top",Le],["bench_top",Ze],["bench_ext_top",mn],["campfire_top",sn],["cactus_top",gn]],Ge={};Hu.forEach(([s],t)=>Ge[s]=Rr.length+t);let Oa=null;function Gu(){if(Oa)return Oa;const s=document.createElement("canvas");s.width=s.height=Rn*we;const t=s.getContext("2d"),e=new Yo(48879);Rr.forEach((f,u)=>u);let n=0,r=0,i=0,o=0,l=0;const h=f=>Math.max(0,Math.min(1,f)),a=(f,u=1,g=0,M=0,C=0)=>`rgba(${Math.round(h(i+f+g)*255)},${Math.round(h(o+f+M)*255)},${Math.round(h(l+f+C)*255)},${u})`,c=(f,u,g)=>{t.fillStyle=g,t.fillRect(n+f,r+u,1,1)},d=f=>{t.fillStyle=f,t.fillRect(n,r,we,we)},p=f=>(e.next()-.5)*f,m=(f,u)=>{for(let g=0;g<f;g++)c(e.int(0,15),e.int(0,15),a(p(u)))},v=(f,u,g=-.15)=>{let M=e.int(1,13),C=e.int(1,13);for(let L=0;L<f;L++)c(M,C,a(g+p(u))),M+=e.int(-1,1),C+=e.int(0,1),M=Math.max(0,Math.min(15,M)),C=Math.max(0,Math.min(15,C))},y=()=>{const f=M=>{const C=[];for(let U=0;U<M*M;U++)C.push(e.next());const L=(U,H)=>C[H%M*M+U%M],k=[];for(let U=0;U<16;U++)for(let H=0;H<16;H++){const $=H*M/16,V=U*M/16,J=Math.floor($),et=Math.floor(V),gt=$-J,Rt=V-et,kt=L(J,et)+(L(J+1,et)-L(J,et))*gt,Dt=L(J,et+1)+(L(J+1,et+1)-L(J,et+1))*gt;k.push(kt+(Dt-kt)*Rt)}return k},u=f(4),g=f(8);return u.map((M,C)=>(M*.65+g[C]*.35-.5)*2)},x=f=>{const u=y();for(let g=0;g<16;g++)for(let M=0;M<16;M++)c(M,g,a(f(M,g,u[g*16+M])));return u},_=(f,u,g,M)=>{for(let C=-g;C<=g;C++)for(let L=-g;L<=g;L++){const k=Math.hypot(L,C);k>g+.3||c(f+L,u+C,a(M+(k>g-.6?-.2:L+C<-g*.5?.14:-.02)))}},R=(f,u,g=.25)=>{for(const M of f)for(let C=0;C<16;C++){const L=C-M;L>=0&&L<16&&c(C,L,a(g,u))}},T=(f,u,g,M,C,L)=>{for(let k=-g;k<=g;k++)for(let U=-g;U<=g;U++){const H=Math.hypot(U,k);H>g+.3||c(f+U,u+k,a(H>g-.5?-.22:U+k<0?.24:.04,1,M,C,L))}},S={},b=(f,u)=>S[f]=u;b(String(Zn),()=>{x((f,u,g)=>g*.07+Math.sin((f+u)*.55+g*5)*.03),m(24,.18);for(let f=0;f<5;f++)c(e.int(0,15),e.int(0,15),a(-.14))}),b(String(vn),()=>{const f=y();for(let u=0;u<16;u++){const g=Math.floor((u+f[u*16+8]*1.2+16)%16/4),M=[-.05,.03,-.01,.05][g%4];for(let C=0;C<16;C++)c(C,u,a(M+f[u*16+C]*.05+(u%4===0?-.12:0)))}m(26,.08)}),b("sandstone_top",()=>{x((f,u,g)=>g*.06);for(let f=0;f<7;f++){const u=e.int(1,14),g=e.int(1,14);c(u,g,a(-.13)),c(u+1,g,a(-.06))}m(30,.1)}),b(String(De),()=>{x((f,u,g)=>g*.1),v(11,.06,-.14),v(8,.06,-.2);for(let f=0;f<4;f++)c(e.int(0,15),e.int(0,15),a(.2));m(16,.1)}),b(String(er),()=>{x((f,u,g)=>g*.08-.06);for(let f=0;f<9;f++)_(e.int(2,13),e.int(2,13),e.int(1,3),p(.18))}),b(String(Jn),()=>{x((f,u,g)=>g*.13+(Math.sin(f*1.4)+Math.cos(u*1.1))*.03),m(44,.2);for(let f=0;f<3;f++){const u=e.int(2,13),g=e.int(2,13);c(u,g,a(.16)),c(u+1,g,a(.08))}}),b(String(Ss),()=>{x((f,u,g)=>g*.05+.04),v(10,.03,.06),v(8,.03,.09);for(let f=0;f<30;f++)c(e.int(0,15),e.int(0,15),a(.13))}),b(String(si),()=>{const f=x((u,g,M)=>M*.04-.05);for(let u=0;u<16;u++){for(let g=1;g<15;g++)Math.sin(g*.5+u*2.6+f[u*16+g]*4)>.7&&c(g,u,a(-.18));u%5===2&&e.next()>.4&&c(e.int(2,13),u,a(.12))}}),b(String(zo),()=>{d("rgba(170,215,232,0.22)"),R([5,8,14],.5,.3),R([11],.32,.22)}),b(String(ws),()=>{x((f,u,g)=>g*.05),v(7,.02,-.1),R([9],.18,.12)}),b(String(Ne),()=>{const f=x((u,g,M)=>M*.03);for(let u=0;u<16;u++)c(u,10,a(-.24)),u%2===0&&c(u,9,a(-.08));for(let u=0;u<16;u++)if(u%4===1)for(const g of[1,6,11])c(g,u,a(.22)),c(g+1,u,a(.05)),c(g,u+1,a(-.16)),c(g+1,u+1,a(-.12));for(let u=0;u<10;u++)c(e.int(0,15),e.int(0,15),a(-.02,1,.06,-.01,-.08));f[60]>.3&&c(12,3,a(.35,1,.1,0,0))}),b("hull_top",()=>{x((f,u,g)=>g*.03);for(const f of[4,12])for(let u=0;u<16;u++)c(u,f,a(-.22));for(const f of[2,7,12])for(let u=0;u<16;u++)u%4===2&&c(f,u,a(.2));for(let f=0;f<8;f++)c(e.int(0,15),e.int(0,15),a(.28,1,.05,-.02,-.06))}),b(String(on),()=>{x((f,u,g)=>g*.03-.03);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26)),c(0,f,a(-.26)),c(15,f,a(-.26));for(let f=2;f<=12;f++)for(let u=3;u<=12;u++)u===3||u===12||f===2||f===12?c(u,f,a(-.2)):u===4&&f>3&&f<11&&c(u,f,a(.08));for(let f=7;f<=9;f++)c(13,f,a(.35)),c(12,f,a(-.28));for(let f=5;f<11;f++)c(f,14,a(-.15,1,.1,0,-.02))}),b(String(nn),()=>{x((f,u,g)=>g*.03-.03);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26)),c(0,f,a(-.26)),c(15,f,a(-.26));for(let f=4;f<=11;f++)for(let u=5;u<=10;u++)c(u,f,a(-.32,1,-.1,-.02,.06));for(const f of[5,8])for(let u=5;u<=10;u++){const g=u-f+4;g>=4&&g<=11&&c(u,g,a(.35,.5))}for(const[f,u]of[[2,2],[13,2],[2,13],[13,13]])c(f,u,a(.2))}),b(String(je),()=>{for(let f=0;f<16;f++)c(0,f,a(-.1,.9)),c(1,f,a(.05,.85)),c(2,f,a(-.15,.7));c(1,7,a(.3,.9)),c(1,8,a(.3,.9))}),b(String(In),()=>{d(a(-.28));for(let f=4;f<=11;f++)for(let u=4;u<=11;u++){const g=Math.max(Math.abs(u-7.5),Math.abs(f-7.5));c(u,f,g>3?a(.12):a(.42-g*.06,1,.3,.18,-.02))}for(const[f,u]of[[4,4],[11,4],[4,11],[11,11]])c(f,u,a(.25))}),b(String(Ho),()=>{x((f,u,g)=>g*.03+(u%2===0?.02:-.02));for(const[f,u]of[[2,2],[13,2],[2,13],[13,13]])c(f,u,a(.22));for(let f=0;f<5;f++){const u=e.int(2,13),g=e.int(2,13);c(u,g,a(-.12,1,.24,.02,-.14)),c(u+1,g,a(-.2,1,.16,0,-.1))}}),b(String(Tn),()=>{x((f,u,g)=>g*.03-.25);for(let f=-3;f<=3;f++){const u=3-Math.abs(f);for(let g=-u;g<=u;g++)Math.hypot(g,f)>u+.3||c(8+g,8+f,a(f===0?.05:0,1,.95-Math.abs(f)*.08,.15,.1))}for(let f=-1;f<=1;f++)for(let u=-1;u<=1;u++)Math.hypot(u,f)<1.6&&c(8+u,8+f,a(.4-Math.hypot(u,f)*.15,1,1,.3,.1));for(let f=0;f<16;f+=3){const u=3-Math.abs(f%6-3);for(let g=-u;g<=u;g++)c(8+g,f,a(.08))}}),b(String(Ze),()=>{const f=x((u,g,M)=>M*.05+(g<5?.02:-.14));for(let u=0;u<16;u++)c(u,0,a(.14)),c(u,1,a(.06)),c(u,4,a(-.26));for(let u=5;u<16;u++)for(const g of[1,2,13,14])c(g,u,a(.06+f[u*16+g]*.02));for(let u=6;u<=10;u++)for(let g=4;g<=11;g++)c(g,u,a(-.04+f[u*16+g]*.04));for(let u=4;u<=11;u++)c(u,6,a(-.28)),c(u,10,a(-.28));c(7,8,"rgba(190,190,190,1)"),c(8,8,"rgba(190,190,190,1)");for(let u=3;u<=12;u++)c(u,13,a(.1)),c(u,14,a(-.3))}),b("bench_top",()=>{x((f,u,g)=>g*.04+Math.sin(u*1.7+g*3)*.03);for(let f=0;f<16;f++)c(f,0,a(-.2)),c(f,15,a(-.2));for(let f=0;f<16;f++)if(f%5===4)for(let u=0;u<16;u++)c(u,f,a(-.14));for(let f=2;f<=11;f++)c(f,4,"rgba(160,166,178,1)");for(let f=2;f<=11;f+=2)c(f,5,"rgba(120,126,140,1)");c(12,4,"rgba(96,66,40,1)"),c(13,4,"rgba(96,66,40,1)"),c(12,5,"rgba(80,54,32,1)");for(let f=4;f<=6;f++)c(f,9,"rgba(120,88,54,1)");for(let f=4;f<=6;f++)c(f,10,"rgba(100,72,44,1)");c(5,11,"rgba(150,156,168,1)"),c(5,12,"rgba(150,156,168,1)"),c(5,13,"rgba(140,146,158,1)");for(let f=0;f<6;f++)c(e.int(0,15),e.int(0,15),a(-.06,1,.02,-.01,-.04))}),b(String(mn),()=>{x((f,u,g)=>g*.04-.14);for(let f=0;f<16;f++)c(f,0,a(.05)),c(f,2,a(-.24));for(let f=3;f<16;f++)for(const u of[1,2,13,14])c(u,f,a(.04));for(let f=3;f<=12;f++)c(f,11,a(.08)),c(f,12,a(-.26))}),b("bench_ext_top",()=>{x((f,u,g)=>g*.04+Math.sin(f*1.6+g*2)*.03);for(let f=0;f<16;f++)c(0,f,a(-.18)),c(15,f,a(-.18));for(let f=0;f<16;f++)for(let u=0;u<16;u++)u%6===3&&e.next()>.5&&c(u,f,a(-.1))}),b(String(sn),()=>{x((f,u,g)=>g*.05-.1);for(let f=0;f<5;f++)_(2+f*3,13,1,-.05);t.strokeStyle="rgba(70,50,32,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,r+13),t.lineTo(n+12,r+9),t.stroke(),t.beginPath(),t.moveTo(n+12,r+13),t.lineTo(n+4,r+9),t.stroke(),t.lineWidth=1;for(let f=2;f<10;f++){const u=Math.max(0,5-Math.abs(f-7)-(f<5?5-f:0));for(let g=-u;g<=u;g++){const M=Math.abs(g)/(u+1);c(8+g,f,a(M*.1,1,.85-M*.4,.35-M*.25,-.45))}}c(8,1,a(.2,1,.7,.15,-.4)),c(7,3,a(.3,1,.9,.4,-.4))}),b("campfire_top",()=>{x((f,u,g)=>-.12+g*.05);for(let f=0;f<16;f++){const u=f/16*Math.PI*2;c(8+Math.round(Math.cos(u)*5.5),8+Math.round(Math.sin(u)*5.5),a(.12)),c(8+Math.round(Math.cos(u)*4),8+Math.round(Math.sin(u)*4),a(-.3,1,.1,-.02,-.06))}for(let f=0;f<5;f++){const u=f/5*Math.PI*2+.5;_(8+Math.round(Math.cos(u)*6),8+Math.round(Math.sin(u)*6),1,0)}for(let f=0;f<3;f++)for(let u=0;u<8;u++){const g=u/8*Math.PI*2+f*.4;c(8+Math.round(Math.cos(g)*f*1.5),8+Math.round(Math.sin(g)*f*1.5),a(.2+(3-f)*.12,1,.5,-.05,-.35))}});for(const f of[nr,Go,Vo,Wo,qo,Xo,ir,Ve])b(String(f),()=>{const u=x((g,M,C)=>C*.04+Math.sin((g+M*.5)*.8+C*4)*.04);for(const g of[2,6,10,14])for(let M=0;M<16;M++)u[g*16+M]>-.2&&c(M,g+(M%4<2?0:1),a(.16,.75));for(let g=0;g<5;g++)c(e.int(0,15),e.int(0,15),a(.3,.5))});b("water_side",()=>{x((f,u,g)=>g*.04+u*.004);for(let f=0;f<16;f++)e.next()>.3&&c(f,0,a(.22,.8)),f%3===0&&c(f,1+f%2,a(.1,.5));for(let f=2;f<16;f++)e.next()>.75&&c(e.int(0,15),f,a(.12,.4))}),b(String(fi),()=>{x((f,u,g)=>g*.08-.02);for(let f=0;f<16;f++)for(let u=0;u<16;u++)(f%5===4||(u+Math.floor(f/5)%2*4)%8===3)&&c(u,f,a(-.14+p(.03)));for(let f=0;f<3;f++)v(e.int(8,12),.05,-.1);for(let f=0;f<10;f++)c(e.int(0,15),e.int(0,15),a(.12))}),b(String(ji),()=>{const f=x((u,g,M)=>M*.06-.35);for(let u=0;u<16;u++)f[u*16+1]>.2&&c(1,u,a(-.1,1,.04,0,.08));for(let u=0;u<=15;u+=5)c(u,0,a(.1,1,.1,0,.15)),c(u,15,a(.1,1,.1,0,.15));for(let u=3;u<=12;u++)for(let g=3;g<=12;g++){const M=Math.max(Math.abs(u-7.5),Math.abs(g-7.5)),C=Math.max(Math.abs(u-7.5),Math.abs(g-7.5),Math.abs(u+g-15)/2);M>=4.2||(C>=3.4?c(u,g,a(.15,1,.55,.15,.85)):c(u,g,a(.32+(3-M)*.12,1,.75,.3,1)))}for(const[u,g]of[[5,5],[10,10],[10,5]])(u+g)%2===0&&c(u,g,a(.45,1,.8,.35,1))}),b(String(Fi),()=>{const f=x((u,g,M)=>M*.03+(g%2===0?.015:-.015)-.08);for(const u of[1,3,5]){for(let g=2;g<=13;g++)c(g,u,a(-.28));for(let g=2;g<=13;g+=3)c(g,u-1,a(.12))}for(let u=4;u<=11;u++)for(let g=7;g<=14;g++){const M=Math.max(Math.abs(u-7.5),Math.abs(g-10.5));M>=3.2?c(u,g,a(.1+f[g*16+u]*.05)):c(u,g,a(.24+(3-M)*.1,1,-.05,.2,.22))}c(5,12,a(.15,1,-.1,.12,.12)),c(10,9,a(.15,1,-.1,.12,.12));for(let u=7;u<=14;u++)u%2===1&&c(14,u,a(-.2))}),b(String(gn),()=>{const f=x((u,g,M)=>M*.06);for(const u of[2,7,12])for(let g=0;g<16;g++)c(u,g,a(-.16+f[g*16+u]*.03));for(let u=0;u<16;u++)if(u%5!==2&&u%5!==3)for(let g=0;g<16;g+=3)e.next()>.4&&c(u,g,a(.5,1,.05,.02,-.05));for(const[u,g]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])c(u,g,a(.2)),c(u+1,g,a(-.2)),c(u,g+1,a(-.2));c(13,1,"rgba(214,74,130,1)"),c(1,6,"rgba(198,58,114,1)"),c(5,11,"rgba(214,74,130,1)")}),b("cactus_top",()=>{const f=x((u,g,M)=>M*.06);for(let u=2;u<=6;u+=2)for(let g=0;g<20;g++){const M=g/20*Math.PI*2;c(8+Math.round(Math.cos(M)*u),8+Math.round(Math.sin(M)*u),a(u===6?-.14:-.06+f[g]*.05))}for(let u=0;u<8;u++){const g=u/8*Math.PI*2;c(8+Math.round(Math.cos(g)*1.5),8+Math.round(Math.sin(g)*1.5),a(.45,1,.05,.03,-.04))}c(8,8,a(.15))}),b(String(mi),()=>{const f=x((u,g,M)=>M*.06);for(const u of[2,7,12])for(let g=0;g<16;g++)c(u,g,a(-.16+f[g*16+u]*.03));for(const[u,g]of[[4,4],[9,6],[6,10],[11,12],[3,14]])c(u,g,a(.2)),c(u+1,g,a(-.2)),c(u,g+1,a(-.2));for(let u=0;u<=3;u++)for(let g=5;g<=10;g++)(u===3||g===5||g===10||e.next()>.3)&&c(g,u,"rgba(214,74,130,1)");for(let u=0;u<9;u++)c(5+u%4*2,Math.floor(u/4),"rgba(238,150,190,1)");c(6,0,"rgba(238,150,190,1)"),c(9,1,"rgba(248,190,214,1)")}),b(String(Le),()=>{x((f,u,g)=>g*.05-.02+Math.sin(f*1.3+g*3)*.02);for(let f=0;f<16;f++)c(f,0,a(-.3)),c(f,7,a(-.24)),c(f,15,a(-.3));for(let f=0;f<16;f++)for(let u=0;u<16;u++)u%5===2&&f>7&&e.next()>.4&&c(u,f,a(-.12));for(let f=0;f<16;f++)c(f,4,"rgba(148,154,166,1)"),c(f,5,"rgba(120,126,138,1)");for(let f=2;f<5;f++)for(const u of[7,8])c(u,f,"rgba(200,205,215,1)");c(7,6,"rgba(40,42,48,1)"),c(8,6,"rgba(40,42,48,1)");for(let f=0;f<4;f++){const[u,g]=[[0,0],[15,0],[0,15],[15,15]][f];c(u,g,a(.2)),c(u+(u?-1:1),g,a(.1)),c(u,g+(g?-1:1),a(.1))}}),b("chest_top",()=>{x((f,u,g)=>g*.05+Math.sin(u*1.4+g*2)*.02);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26));for(let f=0;f<16;f++)f!==7&&f!==8&&(c(f,7,"rgba(148,154,166,1)"),c(f,8,"rgba(120,126,138,1)"));for(const[f,u]of[[2,2],[13,2],[2,13],[13,13]])c(f,u,"rgba(200,205,215,1)")}),b(String(Ln),()=>{const f=x((u,g,M)=>M*.1-.06);for(const u of[2,6,10,14])for(let g=0;g<16;g++)c(g,u,a(-.16+p(.03)));for(const u of[1,5,9,13])for(let g=0;g<16;g++)f[u*16+g]>-.1&&e.next()>.55&&c(g,u,a(.1));for(let u=0;u<8;u++)c(e.int(0,15),e.int(0,15),a(.05,1,0,-.02,.04))}),b("farmland_side",()=>{x((f,u,g)=>g*.09-.04);for(let f=0;f<16;f++)c(f,0,a(.14));for(let f=0;f<16;f++)for(let u=1;u<16;u++)e.next()>.88&&c(f,u,a(.14))}),b(String($n),()=>{d("rgba(0,0,0,0)");for(const[f,u]of[[7,13],[8,13],[7,12],[8,12],[9,13],[6,12]])c(f,u,a(.1));c(6,11,a(.16)),c(9,10,a(.12)),c(7,11,a(.02));for(let f=0;f<4;f++)c(e.int(5,10),e.int(12,15),a(-.05))}),b(String(Pn),()=>{x((f,u,g)=>g*.04-.02);for(let f=4;f<=13;f++)for(let u=2;u<=13;u++){const g=Math.hypot((u-7.5)*1.1,(f-8.5)*1.25);if(g>5.8)continue;const M=(u+(f/2|0))%4===0;c(u,f,a(M?-.18:.04)),g>5.2&&c(u,f,a(-.24)),u<5&&f<7&&!M&&c(u,f,a(.2))}c(8,3,a(-.1)),c(7,3,a(-.16)),c(8,4,a(-.08)),c(2,13,a(.1)),c(13,12,a(.06)),c(4,14,a(.08))}),b(String(Hn),()=>{d("rgba(0,0,0,0)");for(const f of[4,8,12]){for(let u=11;u<=15;u++)c(f,u,a(.08)),u<14&&c(f,u,a(.14));c(f-1,12,a(.06))}}),b(String(dn),()=>{d("rgba(0,0,0,0)");for(const f of[3,7,11,14]){const u=f%2?1:-1;for(let g=2;g<=15;g++)c(f+(g<6?u:0),g,a(g<7?.22:-.02));c(f-u,4,a(.18)),c(f-u,9,a(.06)),c(f+u,2,a(.3))}}),b(String(kr),()=>{x((f,u,g)=>g*.03-.12);for(let f=0;f<16;f++)c(f,0,a(-.26)),c(f,15,a(-.26)),c(f,7,"rgba(150,156,168,1)"),c(f,8,"rgba(110,116,128,1)");for(const[f,u]of[[2,3],[13,3],[2,12],[13,12]])c(f,u,"rgba(200,205,215,1)"),c(f+1,u,"rgba(150,156,168,1)");for(let f=2;f<=5;f++)c(0,f,a(.14)),c(15,f,a(.14))}),b(String(Je),()=>{const f=x((u,g,M)=>M*.03+(u%4===0?-.04:.015));for(let u=0;u<16;u++)c(u,0,a(-.22)),c(u,15,a(-.22)),c(0,u,a(-.16)),c(15,u,a(-.16));for(const[u,g]of[[3,3],[12,3],[3,12],[12,12]])c(u,g,a(.24)),c(u+1,g,a(.08)),c(u,g+1,a(-.14));for(let u=0;u<6;u++)c(e.int(1,14),e.int(1,14),a(-.02,1,.05,-.01,-.06));if(f[8]>.4)for(let u=1;u<4;u++)c(12,u,a(.06,1,.2,.02,-.1))}),b(String(en),()=>{x((f,u,g)=>g*.03-.05);for(let f=0;f<16;f++)c(f,0,a(-.24)),c(f,15,a(-.24)),c(0,f,a(-.24)),c(15,f,a(-.24));for(let f=3;f<=12;f++)for(let u=4;u<=11;u++)(u===4||u===11||f===3||f===12)&&c(u,f,a(.1));for(let f=7;f<=9;f++)c(12,f,a(.26)),c(11,f,a(-.22))}),b(String(He),()=>{x((f,u,g)=>g*.03-.05);for(let f=0;f<16;f++)c(f,0,a(-.24)),c(f,15,a(-.24)),c(0,f,a(-.24)),c(15,f,a(-.24));for(let f=5;f<=10;f++)for(let u=6;u<=9;u++)c(u,f,a(.1,1,-.05,.1,.15));for(let f=6;f<=9;f++){const u=f-1;u>=5&&u<=10&&c(f,u,a(.3,.6))}for(let f=5;f<=10;f++)for(let u=6;u<=9;u++)(u===6||u===9||f===5||f===10)&&c(u,f,a(.1,1,-.05,.1,.15))}),b(String(Qe),()=>{for(let f=0;f<16;f++)c(0,f,a(-.12,.9)),c(1,f,a(.03,.85)),c(2,f,a(-.17,.7));c(1,7,a(.26,.9)),c(1,8,a(.26,.9))}),b(String(rn),()=>{x((f,u,g)=>g*.04+.02);for(let f=0;f<16;f++)for(let u=0;u<16;u++)(u+f)%5===0&&c(u,f,a(-.1));for(let f=0;f<16;f++)c(f,0,"rgba(60,26,24,1)"),c(f,15,"rgba(60,26,24,1)"),c(0,f,"rgba(60,26,24,1)"),c(15,f,"rgba(60,26,24,1)");for(let f=0;f<16;f++)c(f,11,"rgba(90,40,36,1)"),c(f,12,"rgba(150,80,70,1)"),c(f,13,"rgba(120,60,52,1)");for(let f=1;f<11;f++)c(1,f,a(.12)),c(14,f,a(-.08))}),b("bed_side",()=>{x((f,u,g)=>g*.04-(u>11?-.1:.04));for(let f=0;f<16;f++)c(f,0,a(.14)),c(f,10,a(-.22));for(let f=1;f<10;f++)for(let u=0;u<16;u++)(u+f)%6===1&&c(u,f,a(-.06));for(let f=11;f<16;f++)for(let u=0;u<16;u++)c(u,f,"rgba(70,44,26,1)");for(let f=2;f<16;f+=5)c(f,12,"rgba(96,62,38,1)"),c(f,13,"rgba(52,32,18,1)")}),b(String(_n),()=>{x((f,u,g)=>g*.04+.02);for(let f=0;f<16;f++)c(f,0,"rgba(60,26,24,1)"),c(f,15,"rgba(60,26,24,1)"),c(0,f,"rgba(60,26,24,1)"),c(15,f,"rgba(60,26,24,1)");for(let f=3;f<=11;f++)for(let u=2;u<=13;u++)c(u,f,u===2||u===13||f===3||f===11?"rgba(200,192,176,1)":"rgba(226,220,206,1)"),f===4&&u>3&&u<11&&c(u,f,"rgba(240,236,226,1)");c(4,6,"rgba(208,200,184,1)"),c(10,9,"rgba(208,200,184,1)");for(let f=0;f<16;f++)c(f,12,"rgba(90,40,36,1)")}),b(String(ai),()=>{const f=x((u,g,M)=>M*.12-(g>4?.16:.02));for(let u=0;u<16;u++){const g=2+Math.round((f[u]+1)*1.5);for(let M=0;M<g;M++)c(u,M,a(p(.1)+(M===0?.1:0)));e.next()>.6&&c(u,g+1,a(-.2))}for(let u=0;u<16;u+=3){const g=7+u%5;c(u,g,a(.2))}}),b("grass_top",()=>{x((f,u,g)=>g*.08-.02);for(let f=0;f<40;f++){const u=e.int(0,15),g=e.int(0,14),M=e.int(1,3);for(let C=0;C<M;C++)c(u,g+C,a(C===0?.14:-.02+p(.08)))}for(let f=0;f<5;f++)c(e.int(0,15),e.int(0,15),a(-.3))}),b("grass_side",()=>{const f=x((u,g,M)=>M*.12+(g<3?.06:-.1));for(let u=0;u<16;u++){const g=1+Math.round((f[u+16]+1)*1.5);for(let M=0;M<g;M++)c(u,M,a(.08+p(.08)))}for(let u=0;u<16;u++)for(let g=3;g<16;g++)e.next()>.9&&c(u,g,a(.16,1,-.04,-.02,-.04))}),b(String(kn),()=>{const f=x((u,g,M)=>M*.05);for(let u=0;u<16;u++){const g=f[u]*2;for(let M=0;M<16;M++){const C=Math.sin(u*1.9+g+Math.sin(M*.35)*1.5);c(u,M,a(C>.75?-.26:C>.2?-.1:.06+p(.04)))}}for(let u=1;u<=2;u++)for(let g=0;g<10;g++){const M=g/10*Math.PI*2;c(9+Math.round(Math.cos(M)*u*1.4),7+Math.round(Math.sin(M)*u),a(u===2?-.3:-.2))}c(9,7,a(-.34)),c(10,7,a(-.28))}),b("wood_top",()=>{x((f,u,g)=>g*.04);for(let f=0;f<44;f++){const u=f/44*Math.PI*2;for(let g=1;g<7;g+=2){const M=g+(g%4===1?.6:0);c(8+Math.round(Math.cos(u)*M),8+Math.round(Math.sin(u)*M),a(g>4?-.12:.05))}}c(8,8,a(-.3)),c(8,7,a(-.2));for(let f=0;f<16;f++)c(f,0,a(-.3)),c(f,15,a(-.3)),c(0,f,a(-.3)),c(15,f,a(-.3))}),b(String(bi),()=>{x((f,u,g)=>g*.14);for(let f=0;f<26;f++){const u=e.int(0,14),g=e.int(0,14);c(u,g,a(.16)),c(u+1,g,a(.06)),c(u,g+1,a(-.1)),c(u+1,g+1,a(-.2))}for(let f=0;f<10;f++){const u=e.int(1,14),g=e.int(1,14);c(u,g,a(-.4)),c(u+1,g,a(-.25))}}),b(String(Yn),()=>{d("rgba(0,0,0,0)");for(let f=6;f<16;f++)c(8,f,a(-.28));c(7,15,a(-.2)),c(9,15,a(-.2)),c(7,5,a(.1)),c(8,5,a(.15)),c(9,5,a(.1)),c(6,4,a(.05)),c(7,4,a(.12)),c(8,4,a(.18)),c(9,4,a(.12)),c(10,4,a(.05)),c(7,3,a(.08)),c(8,3,a(.14)),c(9,3,a(.08)),c(8,2,a(.1)),c(6,5,a(.02)),c(10,5,a(.02))}),b(String(Ur),()=>{x((f,u,g)=>g*.1-.02),v(11,.06,-.14),v(7,.06,-.18);for(let f=0;f<5;f++)T(e.int(3,12),e.int(3,12),e.int(1,2),-.06,-.05,.04);m(12,.1)}),b(String(Nr),()=>{x((f,u,g)=>g*.1-.04),v(9,.06,-.14);for(let f=0;f<3;f++)T(e.int(3,12),e.int(3,12),e.int(1,2),.26,.04,-.18);for(let f=0;f<2;f++)T(e.int(4,11),e.int(4,11),1,-.12,.16,0);m(10,.08)}),b(String(Fr),()=>{x((f,u,g)=>g*.07-.24),v(10,.04,-.08);for(let f=0;f<4;f++){const u=e.int(4,11),g=e.int(4,11),M=e.int(2,3);for(let C=-M;C<=M;C++){const L=M-Math.abs(C);for(let k=-L;k<=L;k++){const U=Math.abs(k)+Math.abs(C);c(u+k,g+C,a(U===M?-.16:U===0?.4:.16,1,-.16,-.06,.3))}}}}),b(String(sr),()=>{const f=y();for(let u=0;u<16;u++){const g=Math.floor((u+f[u*16+8]*2+16)%16/4),M=[-.02,.05,-.06,.02][g%4];for(let C=0;C<16;C++)c(C,u,a(M+f[u*16+C]*.03+(u%4===0?-.06:0)))}for(let u=0;u<3;u++)v(e.int(6,10),.02,.06);m(10,.05)});const I=f=>{for(let u=0;u<16;u++)c(u,0,a(-.22)),c(u,15,a(-.22));for(const u of[0,8])for(let g=1;g<15;g++)f[g*16+u]>-.2&&c(u,g,a(-.16)),u&&(g===3||g===7||g===11)&&c(u,g,a(.2));for(let u=0;u<4;u++){const g=e.int(1,14),M=e.int(1,5),C=e.int(4,8);for(let L=M;L<Math.min(15,M+C);L++)e.next()>.25&&c(g,L,a(-.06+p(.04),1,.3,.05,-.22))}for(let u=0;u<8;u++)c(e.int(1,14),e.int(1,14),a(-.05))};b(String(Oi),()=>{const f=x((u,g,M)=>M*.04-.1+(u%8===0?-.05:0));I(f);for(let u=0;u<30;u++){const g=u/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.16)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.26))}for(let u=-4;u<=4;u++)for(let g=-4;g<=4;g++)Math.hypot(g,u)>4.2||c(8+g,8+u,a(-.34+f[(8+u)*16+8+g]*.06))}),b(String($i),()=>{const f=x((u,g,M)=>M*.04-.08+(u%8===0?-.05:0));I(f);for(let u=0;u<30;u++){const g=u/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.2)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.1,1,.35,.05,-.3))}for(let u=-4;u<=4;u++)for(let g=-4;g<=4;g++){const M=Math.hypot(g,u);M>4.2||c(8+g,8+u,a(.35-M*.08+f[(8+u)*16+8+g]*.08,1,.55-M*.05,.12-M*.04,-.45))}for(const[u,g]of[[3,2],[12,4],[5,13],[11,12]])c(u,g,a(.4,1,.5,.1,-.35))}),b(String(ki),()=>{x((f,u,g)=>g*.03-.22+(f%4===0?-.04:0));for(let f=0;f<16;f++)c(2,f,a(-.16)),c(13,f,a(-.16));for(const f of[2,13])for(let u=3;u<13;u++)c(u,f,a(.12));for(let f=4;f<=11;f++){const u=f===4||f===11?1:2;for(let g=-u;g<=u;g++){const M=u-Math.abs(g);c(8+g,f,a(.2+M*.15+f%2*.05,1,.45+M*.1,.18,-.5))}}for(let f=0;f<6;f++)c(e.int(3,12),e.int(3,12),a(-.05))}),b(String(Zs),()=>{x((f,u,g)=>g*.04-.18);for(let f=0;f<3;f++)for(let u=0;u<16;u++)c(u,f,a(.1));for(const f of[3,12])for(let u=3;u<=5;u++)c(f,u,a(-.28));c(3,6,a(-.1)),c(12,6,a(-.1));for(let f=5;f<=10;f++)c(f,7,a(.14));for(let f=6;f<=8;f++)c(f,8,a(-.06)),c(f,9,a(-.22));for(let f=11;f<=14;f++)for(let u=4;u<=11;u++){const g=Math.abs(u-7.5)+Math.abs(f-12.5);c(u,f,a(.25-g*.04+e.next()*.08,1,.55-g*.03,.18-g*.03,-.5))}for(let f=3;f<=12;f++)c(f,10,a(.08));c(3,15,a(.06)),c(12,15,a(.06));for(const[f,u]of[[6,3],[9,4],[7,2]])c(f,u,a(.45,1,.5,.12,-.35))});const A=(f,u,g)=>{S[f]&&(n=u%Rn*we,r=(u/Rn|0)*we,[i,o,l]=g,S[f]())};for(const[f,u]of Rr.entries())A(String(u),f,jn[u].color);for(const[f,u]of Hu)A(f,Ge[f],jn[u].color);return Oa=s,s}function x_(){const s=new Eu(Gu());return s.flipY=!1,s.magFilter=s.minFilter=Gn,s.generateMipmaps=!1,s.colorSpace=Cn,s}const ne=[];Rr.forEach((s,t)=>ne[s]=t);ne[yi]=ne[Ne];ne[Mi]=ne[Ne];const un=Rn*we,Vu=s=>{const t=ne[s]??0;return[t%Rn*we,(t/Rn|0)*we]},qs=[],ln=(s,t,e,n)=>{qs[s*6]=t,qs[s*6+1]=e;for(let r=2;r<6;r++)qs[s*6+r]=n};for(const s of Rr)ln(s,ne[s],ne[s],ne[s]);ln(ai,Ge.grass_top,ne[Jn],Ge.grass_side);ln(kn,Ge.wood_top,Ge.wood_top,ne[kn]);ln(Ln,ne[Ln],ne[Jn],Ge.farmland_side);ln(vn,Ge.sandstone_top,ne[vn],ne[vn]);ln(Ne,Ge.hull_top,ne[Ne],ne[Ne]);ln(yi,Ge.hull_top,ne[Ne],ne[Ne]);ln(Mi,Ge.hull_top,ne[Ne],ne[Ne]);ln(rn,ne[rn],ne[rn],Ge.bed_side);ln(_n,ne[_n],ne[_n],Ge.bed_side);ln(Le,Ge.chest_top,ne[Le],ne[Le]);ln(Ze,Ge.bench_top,ne[Ze],ne[Ze]);ln(mn,Ge.bench_ext_top,ne[mn],ne[mn]);ln(sn,Ge.campfire_top,ne[sn],ne[sn]);ln(gn,Ge.cactus_top,ne[gn],ne[gn]);ln(mi,Ge.cactus_top,ne[gn],ne[mi]);for(const s of[Ve,nr,Go,Vo,Wo,qo,Xo,ir])ln(s,ne[s],ne[s],Ge.water_side);const Li=16,Hh=`
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
`,Gh=`
uniform sampler2D map;
uniform vec3 uAmbient;      // day/moon ambient, lerped by the caller
uniform float uFloor;       // ambient floor for baked-light 0 (interiors)
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uNumLights;
uniform vec3 uLightPos[${Li}];
uniform vec3 uLightCol[${Li}];
uniform float uLightRange[${Li}];
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
  for (int i = 0; i < ${Li}; i++) {
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
`,dr=new F,Vh=new F,y_=new $t(1,.97,.9),M_=new $t(.2,.27,.45),b_=new $t(.72,.55,.35);class S_{scene=new zf;camera;three;chunkMeshes=new Map;group=new le;entityGroup=new le;sun;hemi;stars;sunDisc;dust;stormI=0;stormOpen=!0;moonDisc;highlight;renderDistance=7;atlas=x_();matOpaque=new se({map:this.atlas,vertexColors:!0,side:Ke});matEmissive=new qi({map:this.atlas,vertexColors:!0,side:Ke});matTrans=new se({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ke});lightingMode="sky";skyLight=new p_;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new $t(1,1,1)},uFloor:{value:.16},uFogColor:{value:new $t(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:Li},()=>new F)},uLightCol:{value:Array.from({length:Li},()=>new F)},uLightRange:{value:new Float32Array(Li)}};matSky=new xi({uniforms:this.skyU,vertexShader:Hh,fragmentShader:Gh,side:Ke,defines:{OPAQUE_PASS:"1"}});matSkyT=new xi({uniforms:this.skyU,vertexShader:Hh,fragmentShader:Gh,side:Ke,transparent:!0,depthWrite:!1});torch;playerLight;dynLights=[];constructor(t){this.three=new N1({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new zn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new Ra(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.playerLight=new Ra(16766826,1.4,14,1.4),this.playerLight.visible=!1,this.scene.add(this.playerLight),this.sun=new Jf(16777215,1),this.hemi=new Kf(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new ic(14207392,40,this.renderDistance*X);const n=new an,r=[];for(let h=0;h<500;h++){const a=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);r.push(Math.sin(c)*Math.cos(a)*400,Math.abs(Math.cos(c))*400,Math.sin(c)*Math.sin(a)*400)}n.setAttribute("position",new xe(r,3)),this.stars=new ih(n,new Nl({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new tn(new Do(24,24),new qi({color:16771504,fog:!1,side:Ke,toneMapped:!1})),this.moonDisc=new tn(new Do(15,24),new qi({color:14213877,fog:!1,side:Ke,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const i=new an,o=[];for(let h=0;h<700;h++){const a=Math.random()*Math.PI*2,c=3+Math.random()*16;o.push(Math.cos(a)*c,(Math.random()-.35)*14,Math.sin(a)*c)}i.setAttribute("position",new xe(o,3)),this.dust=new ih(i,new Nl({color:14072204,size:.3,transparent:!0,opacity:0,depthWrite:!1})),this.dust.frustumCulled=!1,this.scene.add(this.dust);const l=new Ji(1.002,1.002,1.002);this.highlight=new qf(new Xf(l),new wu({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,r){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===t&&o.y===e&&o.z===n))return;const i=new Ra(r==="lamp"?16773296:r==="fire"?16745280:9427199,r==="lamp"?.9:r==="fire"?1.1:.8,r==="lamp"?12:r==="fire"?9:10,1.3);i.position.set(t+.5,e+.6,n+.5),this.scene.add(i),this.dynLights.push({x:t,y:e,z:n,light:i,flame:r==="fire"})}removePointLight(t,e,n){const r=this.dynLights.findIndex(i=>i.x===t&&i.y===e&&i.z===n);r<0||(this.scene.remove(this.dynLights[r].light),this.dynLights.splice(r,1))}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),r=di.clamp(n*2.2,0,1),i=di.clamp(1-Math.abs(n)*5,0,1),o=new $t(660006),l=new $t(13201213),h=new $t(12570592),a=o.clone().lerp(h,r);i>0&&a.lerp(l,i*.7);const c=new $t(16767392).lerp(new $t(16743231),i);return{sky:a,sunColor:c,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:r}}updateSky(t,e){const n=t%Be/Be,r=this.keyframe(n);if(this.scene.background=r.sky,this.scene.fog.color.copy(r.sky),this.scene.fog.far=this.renderDistance*X*.98,this.stormI>.01){const a=this.scene.fog;a.color.lerp(b_,Math.min(1,this.stormI*.85)),a.near=di.lerp(40,4,this.stormI),a.far=Math.min(a.far,di.lerp(this.renderDistance*X,24,this.stormI)),this.scene.background=a.color}const i=(n-.25)*Math.PI*2;dr.set(Math.cos(i),r.sunElev,.4).normalize(),r.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,dr.negate()):(this.sun.color.copy(r.sunColor),this.sun.intensity=r.sunI),this.sun.position.set(e.x+dr.x*120,e.y+dr.y*120,e.z+dr.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+r.sunI*.35,this.stars.material.opacity=Math.max(0,1-r.sunI*3),this.stars.position.set(e.x,e.y,e.z);const o=430;this.sunDisc.position.set(e.x+Math.cos(i)*o,e.y+Math.sin(i)*o,e.z+o*.4),this.moonDisc.position.set(e.x-Math.cos(i)*o,e.y-Math.sin(i)*o,e.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(i)>-.12,this.moonDisc.visible=Math.sin(i)<.12,this.stormI>.01?(this.sun.intensity*=1-this.stormI*.75,this.hemi.intensity*=1-this.stormI*.55,this.sunDisc.visible&&=this.stormI<.5,this.moonDisc.visible&&=this.stormI<.5,this.stars.material.opacity*=1-this.stormI,this.dust.material.opacity=this.stormOpen?this.stormI*.75:0,this.dust.position.set(this.camera.position.x,this.camera.position.y+2,this.camera.position.z),this.dust.rotation.y=t*.7):this.dust.material.opacity>0&&(this.dust.material.opacity=0),this.torch.intensity=.12+(1-Math.min(1,r.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+zl(t*5.3+a.x*3.1+a.z,7)*.45);const l=this.skyU;l.uAmbient.value.copy(M_).lerp(y_,r.dayT);const h=this.scene.fog;return l.uFogColor.value.copy(h.color),l.uFogNear.value=h.near,l.uFogFar.value=h.far,this.syncSkyLights(),r}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(Vh),t.uLightPos.value[e].copy(Vh);const n=this.torch.color;if(t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++,this.playerLight.visible&&e<Li){t.uLightPos.value[e].copy(this.playerLight.position);const r=this.playerLight.color;t.uLightCol.value[e].set(r.r,r.g,r.b).multiplyScalar(this.playerLight.intensity),t.uLightRange.value[e]=this.playerLight.distance,e++}for(const r of this.dynLights){if(e>=Li)break;t.uLightPos.value[e].copy(r.light.position);const i=r.light.color;t.uLightCol.value[e].set(i.r,i.g,i.b).multiplyScalar(r.light.intensity),t.uLightRange.value[e]=r.light.distance,e++}t.uNumLights.value=e}setStorm(t,e){this.stormI=t,this.stormOpen=e}stormDome=null;setStormDome(t){if(!t){this.stormDome&&(this.entityGroup.remove(this.stormDome),this.stormDome.geometry.dispose(),this.stormDome.material.dispose(),this.stormDome=null);return}if(!this.stormDome){const e=new tn(new Oo(Uu,28,18),new qi({color:14178376,transparent:!0,opacity:.05,side:bn,depthWrite:!1}));e.renderOrder=2,this.stormDome=e,this.entityGroup.add(e)}this.stormDome.position.set(t[0],t[1],t[2])}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}setPlayerLight(t){if(!t){this.playerLight.visible=!1;return}this.playerLight.visible=!0,this.playerLight.position.set(t.x,t.y,t.z)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let r=-this.renderDistance;r<=this.renderDistance;r++)for(let i=-this.renderDistance;i<=this.renderDistance;i++){const o=ri(e+r,n+i);this.chunkMeshes.has(o)||t.markDirty(e+r,n+i)}}buildChunk(t,e){const[n,r]=e.split(",").map(Number),i=t.chunk(n,r),o=[],l=[],h=[],a=[],c=[],d=[],p=[],m=[],v=[],y=[],x=[],_=[],R=[],T=[],S=this.lightingMode==="sky"?this.skyLight.bake(t,n,r,(g,M)=>{const C=ri(g,M);!t.dirty.has(C)&&!this.lightRecheck.has(C)&&this.lightRecheck.add(C)}):null,b=(g,M,C)=>S&&M>=0&&M<ee?S[_s(g,C,M)]/To:0;for(let g=0;g<X;g++)for(let M=0;M<X;M++)for(let C=0;C<ee;C++){const L=i[(g*X+M)*ee+C];if(L===Mt)continue;if(m_.has(L)){let Rt=0;if(S)for(const[kt,Dt]of[[1,0],[-1,0],[0,1],[0,-1]])Rt=Math.max(Rt,S[_s(g+kt,M+Dt,C)]);this.emitDoor(o,l,h,a,c,Rt/To,t,g,C,M,n*X,r*X,L);continue}if(g_.has(L)){const Rt=ne[L],kt=Rt%Rn*we,Dt=(Rt/Rn|0)*we,Xt=S?S[_s(g,M,C)]/To:0,Y=(Z,ut,Pt,vt)=>{const Gt=y.length/3;y.push(Z,C,ut,Pt,C,vt,Pt,C+1,vt,Z,C+1,ut);for(let Re=0;Re<4;Re++)x.push(.92,.92,.92),T.push(Xt);R.push((kt+.5)/un,(Dt+15.5)/un,(kt+15.5)/un,(Dt+15.5)/un,(kt+15.5)/un,(Dt+.5)/un,(kt+.5)/un,(Dt+.5)/un),_.push(Gt,Gt+1,Gt+2,Gt,Gt+2,Gt+3)};Y(g,M,g+1,M+1),Y(g+1,M,g,M+1);continue}if(L===yi||L===Mi){this.emitShape(v_[L],o,l,h,a,c,L,t,g,C,M,n*X,r*X,b);continue}if(L>=nr&&L<=ir){const Rt=(33-L)/8;for(let kt=0;kt<go.length;kt++){const Dt=go[kt],Xt=g+Dt.dir[0],Y=C+Dt.dir[1],Z=M+Dt.dir[2],ut=t.get(n*X+Xt,Y,r*X+Z);let Pt=0;if(Dt.dir[1]===0&&Dn(ut)){if(Pt=Pi(ut)/8,Pt>=Rt)continue}else{if(Dn(ut))continue;if(!Fa(t,n*X+Xt,Y,r*X+Z,L))continue}const vt=qs[L*6+kt],Gt=vt%Rn*we,Re=(vt/Rn|0)*we,D=y.length/3,Me=b(Xt,Y,Z);for(const zt of Dt.corners)y.push(g+zt[0],zt[1]?C+Rt:C+Pt,M+zt[2]),x.push(Dt.shade,Dt.shade,Dt.shade),T.push(Me),R.push((Gt+.5+zt[Dt.uv[0]]*(we-1))/un,(Re+.5+zt[Dt.uv[1]]*(we-1))/un);_.push(D,D+1,D+2,D,D+2,D+3)}continue}const k=jn[L],U=k.emissive,H=k.transparent,$=H?y:U?d:o,V=H?x:U?p:l,J=H?_:U?m:h,et=H?R:U?v:a,gt=H?T:U?null:c;for(let Rt=0;Rt<go.length;Rt++){const kt=go[Rt],Dt=g+kt.dir[0],Xt=C+kt.dir[1],Y=M+kt.dir[2];if(!Fa(t,n*X+Dt,Xt,r*X+Y,L))continue;const Z=qs[L*6+Rt],ut=Z%Rn*we,Pt=(Z/Rn|0)*we,vt=$.length/3,Gt=U?1:kt.shade,Re=gt?b(Dt,Xt,Y):0;for(const D of kt.corners)$.push(g+D[0],C+D[1],M+D[2]),V.push(Gt,Gt,Gt),gt&&gt.push(Re),et.push((ut+.5+D[kt.uv[0]]*(we-1))/un,(Pt+.5+D[kt.uv[1]]*(we-1))/un);J.push(vt,vt+1,vt+2,vt,vt+2,vt+3)}}const I=this.chunkMeshes.get(e);if(I)for(const g of I)this.group.remove(g),g.geometry.dispose();const A=[],f=this.lightingMode==="sky",u=(g,M,C,L,k,U)=>{if(g.length===0)return;const H=new an;H.setAttribute("position",new xe(g,3)),H.setAttribute("color",new xe(M,3)),H.setAttribute("uv",new xe(L,2)),k&&k.length*3===g.length&&H.setAttribute("light",new xe(k,1)),H.setIndex(C),H.computeVertexNormals();const $=new tn(H,U);$.position.set(n*X,0,r*X),!f&&U!==this.matEmissive&&($.castShadow=U!==this.matTrans,$.receiveShadow=!0),this.group.add($),A.push($)};u(o,l,h,a,S?c:null,f?this.matSky:this.matOpaque),u(d,p,m,v,null,this.matEmissive),u(y,x,_,R,S?T:null,f?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,A)}emitDoor(t,e,n,r,i,o,l,h,a,c,d,p,m){const v=d+h,y=p+c,x=m===en||m===He||m===Qe,_=m===nn||m===He||m===je&&l.get(v,a-1,y)===je||m===Qe&&l.get(v,a-1,y)===Qe,R=Vu(_?x?He:nn:x?en:on),T=m===je||m===Qe,b=!(fn(l.get(v-1,a,y))||fn(l.get(v+1,a,y)))&&(fn(l.get(v,a,y-1))||fn(l.get(v,a,y+1))),I=b?!fn(l.get(v-1,a,y)):!fn(l.get(v,a,y-1)),A=b?!fn(l.get(v+1,a,y)):!fn(l.get(v,a,y+1)),f=v+y&1;let u,g;f&&A?(u=1,g=1):!f&&I?(u=0,g=-1):A?(u=1,g=1):(u=0,g=-1);const M=l.doorSwing.get(v+","+y);M&&(g=M);const C=.04,L=.96,k=u?.84:.02,U=u?.98:.16,H=C,$=u?.98:.02,V=(gt,Rt,kt)=>{const Dt=t.length/3;for(let Xt=0;Xt<4;Xt++){let[Y,Z,ut]=gt[Xt];if(T){const Pt=Y-H,vt=ut-$;Y=H-g*vt,ut=$+g*Pt}t.push(b?h+ut:h+Y,a+Z,b?c+Y:c+ut),e.push(kt,kt,kt),i.push(o),r.push((R[0]+.5+Rt[Xt][0]*(we-1))/un,(R[1]+.5+Rt[Xt][1]*(we-1))/un)}n.push(Dt,Dt+1,Dt+2,Dt,Dt+2,Dt+3)},J=gt=>(gt-C)/(L-C),et=gt=>(gt-k)/(U-k);V([[C,0,U],[L,0,U],[L,1,U],[C,1,U]],[[J(C),0],[J(L),0],[J(L),1],[J(C),1]],.85),V([[C,0,k],[L,0,k],[L,1,k],[C,1,k]],[[J(L),0],[J(C),0],[J(C),1],[J(L),1]],.7),V([[L,0,k],[L,0,U],[L,1,U],[L,1,k]],[[et(k),0],[et(U),0],[et(U),1],[et(k),1]],.6),V([[C,0,k],[C,0,U],[C,1,U],[C,1,k]],[[et(U),0],[et(k),0],[et(k),1],[et(U),1]],.6),V([[C,1,k],[L,1,k],[L,1,U],[C,1,U]],[[J(C),et(k)],[J(L),et(k)],[J(L),et(U)],[J(C),et(U)]],1),V([[C,0,k],[L,0,k],[L,0,U],[C,0,U]],[[J(C),et(U)],[J(L),et(U)],[J(L),et(k)],[J(C),et(k)]],.45)}emitShape(t,e,n,r,i,o,l,h,a,c,d,p,m,v){for(const y of t){if((y.dir[0]?1:0)+(y.dir[1]?1:0)+(y.dir[2]?1:0)===1&&!Fa(h,p+a+y.dir[0],c+y.dir[1],m+d+y.dir[2],l))continue;const _=qs[l*6+y.kind],R=_%Rn*we,T=(_/Rn|0)*we;let S=0;y.dir[0]&&(S=Math.max(S,v(a+y.dir[0],c,d))),y.dir[1]&&(S=Math.max(S,v(a,c+y.dir[1],d))),y.dir[2]&&(S=Math.max(S,v(a,c,d+y.dir[2])));const b=e.length/3;for(const I of y.pts){e.push(a+I[0],c+I[1],d+I[2]),n.push(y.sh,y.sh,y.sh),o.push(S);const[A,f]=y.uv(I);i.push((R+.5+A*(we-1))/un,(T+.5+f*(we-1))/un)}for(let I=1;I+1<y.pts.length;I++)r.push(b,b+I,b+I+1)}}addEntityMesh(t,e,n,r=.35){const i=new tn(new Ji(r,r,r),new se({color:n}));return i.position.set(...e),i.userData.eid=t,this.entityGroup.add(i),i}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(r=>r.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,r,i=14){const o=this.nextEid++,l=new tn(new rc(.14,.28,i,6,1,!0),new qi({color:r,transparent:!0,opacity:.4,depthWrite:!1,side:Ke,fog:!1}));return l.position.set(t,e+i/2,n),l.userData.eid=o,this.entityGroup.add(l),o}addGroundRing(t,e,n,r,i=1.1){const o=this.nextEid++,l=new tn(new oc(i*.55,i,24),new qi({color:r,transparent:!0,opacity:.7,side:Ke,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,e+.06,n),l.userData.eid=o,this.entityGroup.add(l),o}render(){this.three.render(this.scene,this.camera)}}const ht=s=>s,w_=(s,t)=>`${s.charAt(0).toUpperCase()+s.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,En=(s,t,e,n)=>ht({id:`${e}_${s}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${s}`,desc:w_(s,t),w:1,h:2,mass:1.2+t*.8,tool:{type:s,tier:t},color:n}),E_=[ht({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Zn,color:"#d4b880"}),ht({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:vn,color:"#c2a670"}),ht({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:De,color:"#736d69"}),ht({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:er,color:"#8d8680"}),ht({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:Jn,color:"#6b5238"}),ht({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:Ss,color:"#d9dbd6"}),ht({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:si,color:"#61492f"}),ht({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:zo,color:"#a6cfe6"}),ht({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:ws,color:"#8cc0a0"}),ht({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:Ne,color:"#858a99"}),ht({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:on,color:"#999fa8"}),ht({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:In,color:"#fff0a0"}),ht({id:"metal",name:"Iron Rod",desc:"Forged iron — salvaged from the wreck, or baked from Rock and Iron Ore at a Campfire. The backbone of every tool.",w:1,h:1,mass:1,block:Ho,color:"#9aa0aa"}),ht({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:Tn,color:"#66e5f0"}),ht({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:Ze,color:"#806647"}),ht({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:sn,color:"#e67333"}),ht({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:Fi,color:"#59bfcc"}),ht({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:fi,color:"#b3956b"}),ht({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Le,color:"#8a6d3b"}),ht({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),ht({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),ht({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),ht({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:ji,color:"#c468e8"}),ht({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),En("pickaxe",1,"wood","#a8834f"),En("pickaxe",2,"stone","#8d8680"),En("pickaxe",3,"metal","#9aa0aa"),En("shovel",1,"wood","#a8834f"),En("shovel",2,"stone","#8d8680"),En("shovel",3,"metal","#9aa0aa"),En("axe",1,"wood","#a8834f"),En("axe",2,"stone","#8d8680"),En("axe",3,"metal","#9aa0aa"),En("pickaxe",4,"alloy","#c07848"),En("shovel",4,"alloy","#c07848"),En("axe",4,"alloy","#c07848"),En("disassembler",1,"metal","#c0c8d8"),En("disassembler",2,"alloy","#c07848"),ht({id:"voidbreaker",name:"Voidbreaker",desc:"Cheat gear: every block — even Ship Hull and bedrock-hard stuff — shatters the instant you swing. There is no recipe: it only comes out of the cheat menu.",w:1,h:2,mass:2,instaBreak:!0,color:"#8a5ad6"}),ht({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),ht({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",bag:{w:4,h:5,kg:20},color:"#7a5a3a"}),ht({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:gn,color:"#3d8042"}),ht({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),ht({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),ht({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",armor:.4,color:"#8a6f4d"}),ht({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),ht({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),ht({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:Ln,color:"#573d23"}),ht({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:$n,color:"#c8b060"}),ht({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:Hn,color:"#d8c878"}),ht({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),ht({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),ht({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),ht({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:kn,color:"#7a5c3a"}),ht({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),ht({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Yn,color:"#7fae54"}),ht({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),ht({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),ht({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:kr,color:"#8a744a"}),ht({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:Je,color:"#9aa0ac"}),ht({id:"storm_breaker",name:"Sandstorm Breaker",desc:"A humming red pylon. Stand within 8 blocks of one and the Sandstorm loses all teeth — no scorching, no wind-thirst, no sand blast.",w:1,h:1,mass:4,block:ki,color:"#c04838"}),ht({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:en,color:"#82868e"}),ht({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:rn,color:"#a84a42"}),ht({id:"iron_ore",name:"Iron Ore",desc:"Dense ore from Cave walls. Smelt it at a Campfire: one ore bakes two Iron Rods.",w:1,h:1,mass:1.6,block:Ur,color:"#9e8468"}),ht({id:"copper_ore",name:"Copper Ore",desc:"Reddened Cave stone. Smelts into Copper Rods - the heart of tier-4 Alloy gear.",w:1,h:1,mass:1.6,block:Nr,color:"#b86b42"}),ht({id:"alabaster",name:"Alabaster",desc:"Pale Cave stone. Cuts soft, decorates well, and takes a Lamp's light like nothing else.",w:1,h:1,mass:1.2,block:sr,color:"#dcd5bd"}),ht({id:"cobalt_ore",name:"Cobalt Ore",desc:"Bluish ore of the deepest stone (Metal Pickaxe or better). The Ship's repair hangs on it.",w:1,h:1,mass:2.2,block:Fr,color:"#5c74a8"}),ht({id:"copperrod",name:"Copper Rod",desc:"Smelted from Copper Ore. Never a tool by itself - always a component of better things.",w:1,h:1,mass:1,color:"#c07848"}),ht({id:"cobaltrod",name:"Cobalt Rod",desc:"Smelted from Cobalt Ore, found only in the deep underground. One Thruster Nozzle needs one.",w:1,h:1,mass:1.4,color:"#6a84bc"}),ht({id:"backpack2",name:"Backpack II",desc:"The big pack: inventory grid grows to 5x6, weight limit +40 kg. Reptile-hide stitching.",w:2,h:2,mass:3.5,equip:"backpack",bag:{w:5,h:6,kg:40},color:"#6a4c30"}),ht({id:"body_regulator",name:"Body Heat Regulator",desc:"Worn in the Regulator slot: pins your Heat toward neutral while a Coolant Cell lasts. It regulates you - never a room.",w:2,h:2,mass:3,equip:"regulator",color:"#4fa8c8"}),ht({id:"coolant_cell",name:"Coolant Cell",desc:"Consumable fuel for the Body Heat Regulator: one cell carries about 2 game days of regulation. Spent cells are gone.",w:1,h:1,mass:.8,color:"#7fd4e8"}),ht({id:"head_lantern",name:"Head Lantern",desc:"The Portable Light: worn in the Light slot, toggled with T. Burns fuel charges (5 max) - refill at a Campfire or load Kindling.",w:1,h:1,mass:1,equip:"light",fuel:5,color:"#ffd76a"}),ht({id:"chitin",name:"Chitin",desc:"Dust Scorpion armor plate. Tough, thin, and very hard to burn.",w:1,h:1,mass:.3,color:"#6a4a3a"}),ht({id:"stinger",name:"Stinger",desc:"A Dust Scorpion's barb. Tipped onto a blade, it makes the deadliest weapon in the desert.",w:1,h:1,mass:.2,color:"#a84a3a"}),ht({id:"wurm_hide",name:"Wurm Hide",desc:"Sand Wurm skin - heat-tempered plating for the toughest Body gear.",w:1,h:2,mass:1.2,color:"#8a6a48"}),ht({id:"vulture_raw",name:"Vulture Fillet (raw)",desc:"Raw meat off a Sand Vulture. Cook it at a Campfire before eating.",w:1,h:1,mass:.7,color:"#7a5a4a"}),ht({id:"vulture_cooked",name:"Roasted Fillet",desc:"Cooked Vulture meat. Eat it: +25 Health.",w:1,h:1,mass:.6,eat:{health:25},color:"#b0764a"}),ht({id:"tortoise_shell",name:"Thornback Shell",desc:"The spiked dome of a Thornback Tortoise. Three plate a Cuirass; Traders always want them.",w:2,h:2,mass:6,color:"#5f5a4e"}),ht({id:"fennec_pelt",name:"Fennec Pelt",desc:"Soft pale fur off a Fennec Fox. Worth a real price at any Trader.",w:1,h:2,mass:.5,color:"#c99a62"}),ht({id:"tortoise_cuirass",name:"Thornback Cuirass",desc:"Body-slot breastplate of layered Shell and Metal: shrugs off 48% of every blow. Heavy going.",w:2,h:2,mass:9,equip:"body",armor:.48,color:"#6a6255"}),ht({id:"wurmsuit",name:"Wurmsuit",desc:"Body-slot armour of Wurm Hide and Chitin: shrugs off 45% of every blow, and the Chitin turns the Sandstorm aside — blast and wind-thirst bite at a quarter. Warmer against the cold night too.",w:2,h:2,mass:5,equip:"body",armor:.45,stormResist:!0,color:"#7a5c40"}),ht({id:"stinger_blade",name:"Stinger Blade",desc:"A Metal Sword tipped with a Scorpion Stinger: hits harder and farther than anything above ground.",w:1,h:2,mass:2.4,weapon:{reach:5.2,dmg:12},color:"#c9b048"}),ht({id:"curved_hull",name:"Curved Hull Plating",desc:"Hull Plating shaped as an elbow - insulates exactly like flat plating, and rounds any corner you build.",w:1,h:1,mass:2,block:yi,color:"#7d8390"}),ht({id:"hull_slope",name:"Hull Slope",desc:"A beveled hull block for spines, roofs and shoulders. Same insulation, rounder silhouette.",w:1,h:1,mass:2,block:Mi,color:"#767d88"}),ht({id:"thruster_nozzle",name:"Thruster Nozzle",desc:"Cobalt-and-Copper replacement engine part. Press E at a Broken Thruster to wake it. All four wake the Ship.",w:1,h:2,mass:3,color:"#c88a50"}),ht({id:"thruster_broken",name:"Broken Thruster",desc:"A dead wingtip engine torn off its pylon. Heavy, inert — set it down anywhere and it waits for a Thruster Nozzle.",w:2,h:2,mass:22,block:Oi,color:"#6b707c"}),ht({id:"thruster_lit",name:"Thruster (lit)",desc:"A running engine lifted off its pylon. It keeps burning while you carry it, and burns where you set it down.",w:2,h:2,mass:22,block:$i,color:"#c88a50"}),ht({id:"armory",name:"Armoury",desc:"A forge bench for gear that guards the body: armour, backpacks, visors and the Body Heat Regulator. Built at the Crafting Bench.",w:2,h:2,mass:14,block:Zs,color:"#6a6258"}),ht({id:"hot_water_pouch",name:"Hot Water Pouch",desc:"A full canister heated at a lit Campfire. Use it (Q): a +10 °C heat pulse toward body-warm, and the empty canister comes back.",w:1,h:2,mass:1.2,color:"#e08a4f"})],Nt=Object.fromEntries(E_.map(s=>[s.id,s])),Qn={};for(const s of Object.values(Nt))s.block!==void 0&&(Qn[s.block]=s.id);Qn[nn]="door";Qn[He]="door_inner";Qn[_n]="bed";Qn[ai]="dirt";Qn[bi]="kindling";Qn[$n]="seed_melon";Qn[Pn]="dune_melon";Qn[Hn]="seed_wheat";Qn[dn]="wheat";Qn[mi]="cactus";function Bn(s){const t=Nt[s.itemId];return s.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class Ba{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const r=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const i of r)this.addItem(i.itemId,1)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=Nt[e.itemId].mass;return t}occupied(t,e,n){for(const r of this.slots){if(r===n)continue;const i=Bn(r);if(t>=r.x&&t<r.x+i.w&&e>=r.y&&e<r.y+i.h)return r}return null}fits(t,e,n,r,i){if(t<0||e<0||t+n>this.w||e+r>this.h)return!1;for(let o=0;o<r;o++)for(let l=0;l<n;l++)if(this.occupied(t+l,e+o,i))return!1;return!0}move(t,e,n){const r=Bn(t);return e===t.x&&n===t.y?!0:this.fits(e,n,r.w,r.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=Bn(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addItem(t,e=1){const n=Nt[t],r=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let i=0;i<e;i++){let o=!1;for(const[l,h,a]of r){for(let c=0;c<=this.h-h&&!o;c++)for(let d=0;d<=this.w-l&&!o;d++){let p=!0;for(let m=0;m<h&&p;m++)for(let v=0;v<l&&p;v++)this.occupied(d+v,c+m)&&(p=!1);p&&(this.slots.push(a?{itemId:t,x:d,y:c,rot:!0}:{itemId:t,x:d,y:c}),o=!0)}if(o)break}if(!o)return e-i}return 0}removeItem(t,e=1){let n=0;for(let r=this.slots.length-1;r>=0&&n<e;r--)this.slots[r].itemId===t&&(this.slots.splice(r,1),n++);return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&e++;return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const _o={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]},scorpion:{kind:"scorpion",name:"Dust Scorpion",hp:20,speed:1.9,aggroR:3.5,fleeR:0,biteDmg:7,biteCd:2.2,hitR:.6,height:.5,drops:[{itemId:"chitin",count:1},{itemId:"stinger",count:1}],dropChance:[1,.3]},wurm:{kind:"wurm",name:"Sand Wurm",hp:45,speed:1,aggroR:7,fleeR:0,biteDmg:12,biteCd:2.5,hitR:.8,height:.9,drops:[{itemId:"wurm_hide",count:2},{itemId:"chitin",count:1}],dropChance:[1,.5]},trader:{kind:"trader",name:"Trader",hp:9999,speed:0,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.5,height:1.8,drops:[]},vulture:{kind:"vulture",name:"Sand Vulture",hp:14,speed:2.6,aggroR:5,fleeR:8,biteDmg:5,biteCd:2.2,hitR:.55,height:.9,drops:[{itemId:"vulture_raw",count:1},{itemId:"vulture_raw",count:1}],dropChance:[1,.5]},tortoise:{kind:"tortoise",name:"Thornback Tortoise",hp:40,speed:.7,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.9,height:.8,drops:[{itemId:"tortoise_shell",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.4]},fennec:{kind:"fennec",name:"Fennec Fox",hp:6,speed:4.2,aggroR:0,fleeR:9,biteDmg:0,biteCd:0,hitR:.4,height:.45,drops:[{itemId:"fennec_pelt",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.3]}},T_=new Ji(1,1,1);function A_(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Qi(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");s(e,A_(5370855));const n=new Eu(t);return n.magFilter=n.minFilter=Gn,n.generateMipmaps=!1,n.colorSpace=Cn,n}function R_(){return Qi((s,t)=>{s.fillStyle="#c8a76d",s.fillRect(0,0,64,64);for(let n=0;n<420;n++){const r=.5+(t()-.5)*.22;s.fillStyle=r>.5?"#d4b781":"#b89359",s.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let r=0;r<9;r++){const i=5-Math.abs(r-4);s.fillStyle="#6f5230",s.fillRect(32-i,n+r,i*2,1),s.fillStyle="#8a6a3f",s.fillRect(32-i+1,n+r,Math.max(1,i*2-2),1)}s.fillStyle="#a9884f",s.fillRect(10+(t()*4|0),n+3,3,2),s.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)s.fillStyle=n>=56?"#e9dab1":"#d8c494",s.fillRect(0,n,64,1);for(let n=0;n<40;n++)s.fillStyle="#ddcba0",s.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function C_(){return Qi((s,t)=>{s.fillStyle="#c9a878",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#ddc295":"#a9854f",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)s.fillStyle="#8a6a3c",s.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)s.fillStyle=e>=54?"#f2ead9":"#e2d4ba",s.fillRect(0,e,64,1);s.fillStyle="#efe6d2",s.beginPath(),s.arc(10,12,8,0,Math.PI*2),s.fill(),s.fillStyle="#6b4e2c",s.fillRect(8,10,4,4)})}function I_(){return Qi((s,t)=>{s.fillStyle="#a4552e",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#b56a3c":"#8f4526",s.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[6,18,30,42])s.fillStyle="#6e3018",s.fillRect(0,e,64,2),s.fillStyle="#c47a4a",s.fillRect(0,e+2,64,1);s.fillStyle="#8a3f20",s.fillRect(30,0,4,50);for(let e=0;e<40;e++)s.fillStyle="#b56a3c",s.fillRect(30+(t()*4|0),t()*50|0,1,1);for(let e=52;e<64;e++)s.fillStyle=e>=56?"#e3cfa8":"#c9ae83",s.fillRect(0,e,64,1)})}function P_(){return Qi((s,t)=>{s.fillStyle="#c2a266",s.fillRect(0,0,64,64);for(let e=0;e<620;e++)s.fillStyle=t()>.5?"#d3b77e":"#ab8a52",s.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[5,17,29,41]){s.fillStyle="#7d5f36",s.fillRect(0,e,64,3),s.fillStyle="#96744499";for(let n=0;n<64;n+=4)s.fillRect(n,e+3,2,1)}for(let e=54;e<64;e++)s.fillStyle=e>=58?"#e6d6ac":"#d2bf94",s.fillRect(0,e,64,1)})}function L_(){return Qi((s,t)=>{s.fillStyle="#a8906a",s.fillRect(0,0,64,64);for(let e=0;e<640;e++)s.fillStyle=t()>.5?"#b9a179":"#8f7854",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<70;e++)s.fillStyle="#75603f",s.fillRect(t()*64|0,t()*50|0,2,4);for(let e=0;e<6;e++)s.fillStyle=e>=3?"#c9b68e":"#b8a37b",s.fillRect(0,e,64,1)})}function D_(){return Qi((s,t)=>{s.fillStyle="#77744f",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#86825c":"#65613f",s.fillRect(t()*64|0,t()*64|0,1,1);s.fillStyle="#4c4930";for(const e of[10,31,52])s.fillRect(e,0,2,64);for(const e of[12,33,54])s.fillRect(0,e,64,2);for(const e of[16,37])for(const n of[3,22,43])s.fillStyle="#8f8b63",s.fillRect(e,n,11,7)})}function k_(){return Qi((s,t)=>{s.fillStyle="#d8bd8e",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#e6cfa6":"#c2a271",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<8;e++)s.fillStyle=e>=4?"#b18f5c":"#a68351",s.fillRect(0,e,64,1);for(let e=54;e<64;e++)s.fillStyle=e>=58?"#f0e4c8":"#e3d3ac",s.fillRect(0,e,64,1)})}function U_(){return Qi((s,t)=>{s.fillStyle="#27474a",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#2e5254":"#1f3b3e",s.fillRect(t()*64|0,t()*64|0,1,2);s.fillStyle="#5c2e46",s.fillRect(0,0,64,8),s.fillRect(0,46,64,8),s.fillStyle="#b99a5e",s.fillRect(0,8,64,1),s.fillRect(0,45,64,1);for(let e=0;e<34;e++)s.fillStyle="#6f4a5c",s.fillRect(t()*64|0,16+(t()*26|0),2,2)})}let za=null,Ha=null,Ga=null,Va=null,Wa=null,qa=null,Xa=null,$a=null;function N_(){return za||(za={body:new se({map:R_()}),ridge:new se({color:7295536}),eye:new se({color:1445898})}),za}function F_(){return Ha||(Ha={fur:new se({map:C_()}),pale:new se({color:15260868}),dark:new se({color:6045731}),pink:new se({color:14196896})}),Ha}function O_(){return Ga||(Ga={shell:new se({map:I_()}),claw:new se({color:8272414}),stinger:new se({color:5579793}),eye:new se({color:1445898})}),Ga}function B_(){return Va||(Va={hide:new se({map:P_()}),ridge:new se({color:8216374}),eye:new se({color:1445898})}),Va}function z_(){return Wa||(Wa={plumage:new se({map:L_()}),skin:new se({color:13077884}),feather:new se({color:6245427}),beak:new se({color:3486778}),eye:new se({color:1445898})}),Wa}function H_(){return qa||(qa={shell:new se({map:D_()}),skin:new se({color:9669214}),thorn:new se({color:5722426}),beak:new se({color:11575918}),eye:new se({color:1445898})}),qa}function G_(){return Xa||(Xa={fur:new se({map:k_()}),pale:new se({color:15721158}),dark:new se({color:7032364}),pink:new se({color:14196896})}),Xa}function V_(){return $a||($a={robe:new se({map:U_()}),sash:new se({color:10246707}),skin:new se({color:13079398}),scarf:new se({color:14207920}),pouch:new se({color:7228204}),coin:new se({color:13216079}),eye:new se({color:1445898})}),$a}function lt(s,t,e,n,r,i,o){const l=new tn(T_,n);return l.scale.set(s,t,e),l.position.set(r,i,o),l}function W_(){const s=N_(),t=new le,e=[],n=[],r=[.36,.13,-.1,-.33,-.54,-.72],i=[.26,.27,.26,.23,.18,.12],o=[.22,.23,.22,.2,.16,.11],l=.24;for(let d=0;d<r.length;d++){const p=Math.sin(d*.8)*.05,m=lt(i[d],o[d],l,s.body,p,o[d]/2+.005,r[d]);e.push({mesh:m,bx:p,w:i[d],h:o[d],d:l}),n.push({mesh:lt(i[d]*.3,.02,l*.92,s.ridge,p,o[d]+.008,r[d]),w:i[d]}),t.add(m,n[d].mesh)}const h=new le;h.position.set(Math.sin(0)*.05,.095+.005,.6);const a=lt(.27,.19,.27,s.body,0,.095,0);return h.add(a),h.add(lt(.035,.035,.03,s.eye,-.115,.14,.11)),h.add(lt(.035,.035,.03,s.eye,.115,.14,.11)),t.add(h),{group:t,animate:(d,p)=>{const m=Math.max(0,Math.min(1,p)),v=.015+.075*m,y=d*(3.2+2.6*m);for(let x=0;x<e.length;x++){const _=e[x],R=Math.sin(y-x*.85)*v;_.mesh.position.x=_.bx+R,_.mesh.rotation.y=-R*1.4;const T=1+Math.sin(d*1.9)*.03*(1-m*.6);_.mesh.scale.set(_.w*T,_.h,_.d);const S=n[x];S.mesh.position.x=_.mesh.position.x,S.mesh.rotation.y=_.mesh.rotation.y,S.mesh.scale.x=S.w*.3*T}h.position.x=Math.sin(y+.85)*v*.5,h.rotation.y=Math.sin(d*(2.2+2.4*m))*(.06+.14*m)}}}function q_(){const s=F_(),t=new le,e=new le;t.add(e);const n=lt(.22,.26,.34,s.fur,0,.26,-.02);e.add(n);const r=new le;r.position.set(0,.31,.19),r.add(lt(.15,.14,.15,s.fur,0,0,.05)),r.add(lt(.045,.035,.04,s.pink,0,-.02,.13)),r.add(lt(.028,.028,.02,s.dark,-.062,.03,.1)),r.add(lt(.028,.028,.02,s.dark,.062,.03,.1)),e.add(r);const i=lt(.05,.12,.025,s.fur,-.075,.41,.16),o=lt(.05,.12,.025,s.fur,.075,.41,.16);i.rotation.z=.15,o.rotation.z=-.15,e.add(i,o);const l=lt(.09,.14,.11,s.fur,-.12,.14,-.06),h=lt(.09,.14,.11,s.fur,.12,.14,-.06),a=lt(.07,.05,.22,s.pale,-.13,.028,.02),c=lt(.07,.05,.22,s.pale,.13,.028,.02);e.add(l,h,a,c),e.add(lt(.035,.035,.07,s.pale,-.08,.11,.15)),e.add(lt(.035,.035,.07,s.pale,.08,.11,.15));const d=new le;return d.position.set(0,.16,-.19),d.add(lt(.04,.04,.24,s.fur,0,0,-.12)),d.add(lt(.032,.032,.22,s.fur,0,-.045,-.34)),d.add(lt(.07,.055,.11,s.dark,0,-.075,-.5)),e.add(d),{group:t,animate:(m,v)=>{const y=Math.max(0,Math.min(1,v)),x=Math.abs(Math.sin(m*(2.6+2.4*y)));e.position.y=x*.13*y+Math.sin(m*1.7)*.004,n.scale.y=.26*(1+Math.sin(m*1.9)*.03*(1-y)),a.rotation.x=c.rotation.x=-.55*x*y,l.rotation.x=h.rotation.x=-.35*x*y,d.rotation.y=Math.sin(m*(1.8+3.4*y))*(.1+.3*y),d.rotation.x=-.12-.18*y+Math.sin(m*(2.6+2.4*y))*.06*y;const _=Math.max(0,Math.sin(m*6.3))**8*(1-y);i.rotation.z=.15+_*.25,o.rotation.z=-.15-Math.max(0,Math.sin(m*6.3+2.1))**8*(1-y)*.25,r.rotation.x=-.1*x*y+Math.sin(m*1.3)*.03*(1-y)}}}const X_=new Oo(1,14,10);function Ms(s,t,e,n,r,i,o){const l=new tn(X_,n);return l.scale.set(s,t,e),l.position.set(r,i,o),l}function $_(){const s=O_(),t=new le,e=new le;t.add(e);const n=.09,r=lt(.46,.14,.34,s.shell,0,n+.07,.02);e.add(r);const i=[],o=[-.26,-.45,-.62],l=[.4,.34,.26],h=[.13,.12,.1];for(let T=0;T<o.length;T++){const S=lt(l[T],h[T],.2,s.shell,0,n+h[T]/2,o[T]);i.push({mesh:S,bx:0,w:l[T],h:h[T],d:.2}),e.add(S)}const a=new le;a.position.set(0,n+.045,.25),a.add(lt(.26,.09,.13,s.shell,0,0,0)),a.add(lt(.03,.03,.02,s.eye,-.08,.05,.05)),a.add(lt(.03,.03,.02,s.eye,.08,.05,.05)),e.add(a);const c=[],d=[];for(const T of[-1,1]){const S=new le;S.position.set(T*.24,n+.04,.14),S.rotation.y=T*.5,S.add(lt(.075,.055,.2,s.shell,0,0,.1)),S.add(lt(.07,.05,.1,s.claw,0,0,.24));const b=lt(.025,.022,.13,s.claw,0,.026,.33),I=lt(.025,.022,.13,s.claw,0,-.026,.33);S.add(b,I),c.push({up:b,dn:I}),d.push(S),e.add(S)}const p=[];for(const T of[-1,1])for(let S=0;S<4;S++){const b=lt(.03,.11,.03,s.shell,T*.3,n*.5,.12-S*.14);b.rotation.z=-T*.55,p.push(b),e.add(b)}const m=new le;m.position.set(0,n+.1,-.7),m.rotation.x=.5,m.add(lt(.16,.16,.22,s.shell,0,0,-.11));const v=new le;v.position.set(0,.04,-.22),v.rotation.x=.7,v.add(lt(.13,.13,.18,s.shell,0,0,-.09));const y=new le;y.position.set(0,.03,-.18),y.rotation.x=.8,y.add(lt(.1,.1,.15,s.shell,0,0,-.075));const x=Ms(.22,.2,.24,s.stinger,0,.06,-.22),_=lt(.035,.035,.13,s.stinger,0,.16,-.3);return _.rotation.x=.5,y.add(x,_),v.add(y),m.add(v),e.add(m),{group:t,animate:(T,S)=>{const b=Math.max(0,Math.min(1,S));e.position.y=Math.abs(Math.sin(T*(5.5+5*b)))*.012*b;const I=T*(6+6*b);for(let u=0;u<p.length;u++){const g=u%4,M=u<4?0:Math.PI;p[u].rotation.x=Math.sin(I+g*1.7+M)*.5*b}const A=1+Math.sin(T*1.6)*.03*(1-b*.5);for(const u of i)u.mesh.scale.set(u.w*A,u.h,u.d);for(let u=0;u<2;u++){const g=d[u],M=c[u];g.rotation.z=Math.sin(I+u*Math.PI)*.25*b;const C=.06+Math.abs(Math.sin(T*(1.4+1.6*b)+u*1.3))*(.08+.14*b);M.up.rotation.x=-C,M.dn.rotation.x=C}const f=.06+.14*b;m.rotation.y=Math.sin(T*(1.1+1.4*b))*f,y.rotation.x=.8+Math.sin(T*1.7)*.08,a.rotation.y=Math.sin(T*1.5)*.05*(1-b*.5)}}}function Y_(){const s=B_(),t=new le,e=[],n=[],r=[-.95,-.45,.1,.62],i=[.34,.4,.44,.42],o=[.3,.37,.42,.4],l=[.4,.45,.48,.45];for(let c=0;c<r.length;c++){const d=o[c]+.01,p=Ms(i[c]*2,o[c]*2,l[c]*2,s.hide,0,d,r[c]);e.push({mesh:p,bx:0,w:i[c]*2,h:o[c]*2,d:l[c]*2}),n.push({mesh:lt(i[c],.06,l[c]*.8,s.ridge,0,d+o[c]-.04,r[c]),w:i[c]}),t.add(p,n[c].mesh)}const h=new le;return h.position.set(0,.36,1.15),h.add(Ms(.72,.68,.76,s.hide,0,0,0)),h.add(lt(.05,.05,.04,s.eye,-.19,.12,.26)),h.add(lt(.05,.05,.04,s.eye,.19,.12,.26)),t.add(h),{group:t,animate:(c,d)=>{const p=Math.max(0,Math.min(1,d)),m=.02+.11*p,v=c*(1.5+1.5*p);for(let y=0;y<e.length;y++){const x=e[y],_=Math.sin(v-y*.8)*m;x.mesh.position.x=x.bx+_,x.mesh.rotation.y=-_*1.1;const R=1+Math.sin(c*1.1-y*.6)*.03;x.mesh.scale.set(x.w*R,x.h,x.d*R);const T=n[y];T.mesh.position.x=x.mesh.position.x,T.mesh.rotation.y=x.mesh.rotation.y,T.mesh.scale.x=T.w*R}h.position.x=Math.sin(v+.8)*m*.7,h.rotation.y=Math.sin(c*(1.2+1.4*p))*(.07+.13*p)}}}function K_(){const s=z_(),t=new le,e=new le;t.add(e);const n=Ms(.52,.5,.68,s.plumage,0,.44,-.06);n.rotation.x=-.12,e.add(n);const r=new le;r.position.set(0,.6,.2),r.rotation.x=.25,r.add(lt(.13,.22,.13,s.skin,0,.09,0)),r.add(lt(.26,.09,.26,s.plumage,0,-.02,-.01));const i=new le;i.position.set(0,.22,.02),i.add(Ms(.19,.17,.2,s.skin,0,0,.03)),i.add(lt(.09,.09,.13,s.beak,0,-.01,.14));const o=lt(.05,.07,.06,s.beak,0,-.06,.2);o.rotation.x=.5,i.add(o),i.add(lt(.03,.03,.02,s.eye,-.08,.04,.1)),i.add(lt(.03,.03,.02,s.eye,.08,.04,.1)),r.add(i),e.add(r);const l=[];for(const c of[-1,1]){const d=new le;d.position.set(c*.26,.52,-.04),d.rotation.z=c*.35,d.add(lt(.08,.34,.5,s.plumage,0,-.08,0)),d.add(lt(.05,.28,.42,s.feather,c*.04,-.2,-.06)),l.push(d),e.add(d)}const h=[];for(const c of[-1,1]){const d=lt(.09,.2,.09,s.feather,c*.13,.1,.02);h.push(d),e.add(d,lt(.1,.04,.16,s.beak,c*.13,.02,.08))}return{group:t,animate:(c,d)=>{const p=Math.max(0,Math.min(1,d));e.position.y=Math.sin(c*1.6)*.008+Math.abs(Math.sin(c*(3+2.6*p)))*.02*p,e.rotation.x=.12*p+Math.sin(c*1.3)*.012*(1-p);for(let v=0;v<2;v++){const y=v===0?-1:1,x=Math.sin(c*(4.5+3*p)+v*.9)*(.05+.22*p);l[v].rotation.z=y*(.35+x)}i.rotation.x=-.18+.28*p+Math.sin(c*1.1)*.04*(1-p);const m=c*(3.4+3*p);for(let v=0;v<h.length;v++)h[v].rotation.x=Math.sin(m+v*Math.PI)*.4*p}}}function j_(){const s=H_(),t=new le,e=new le;t.add(e);const n=.14;e.add(Ms(1.05,.75,1.15,s.shell,0,n+.31,-.02));for(const l of[.9,1.4,1.9,2.4,2.9,Math.PI,3.3,3.8,4.3,4.8,5.3]){const h=lt(.09,.16,.09,s.thorn,Math.sin(l)*.52,n+.44,Math.cos(l)*.57-.02);h.rotation.z=-Math.sin(l)*.45,h.rotation.x=Math.cos(l)*.45,e.add(h)}const r=[];for(const l of[-1,1])for(const h of[.33,-.35]){const a=lt(.16,n+.06,.18,s.skin,l*.32,(n+.06)/2,h);r.push(a),e.add(a)}const i=new le;return i.position.set(0,n+.17,.66),i.add(lt(.2,.17,.18,s.skin,0,0,0)),i.add(lt(.12,.09,.1,s.beak,0,-.03,.13)),i.add(lt(.035,.035,.02,s.eye,-.08,.04,.09)),i.add(lt(.035,.035,.02,s.eye,.08,.04,.09)),e.add(i),e.add(lt(.09,.09,.16,s.skin,0,n+.12,-.66)),{group:t,animate:(l,h)=>{const a=Math.max(0,Math.min(1,h));e.position.y=Math.abs(Math.sin(l*(1.4+1.2*a)))*.008*a;const c=l*(1.6+1.4*a);for(let p=0;p<r.length;p++)r[p].rotation.x=Math.sin(c+p%2*Math.PI+(p<2?0:.6))*.3*a;const d=Math.sin(l*.9);i.position.z=.66+d*.05*(1-a)+.05*a,i.rotation.x=.05*a+d*.03*(1-a)}}}function Z_(){const s=G_(),t=new le,e=new le;t.add(e),e.add(lt(.2,.2,.36,s.fur,0,.24,-.02));const n=new le;n.position.set(0,.3,.24),n.add(lt(.16,.15,.14,s.fur,0,0,0)),n.add(lt(.07,.06,.13,s.pale,0,-.04,.12)),n.add(lt(.03,.025,.02,s.dark,-.06,.03,.075)),n.add(lt(.03,.025,.02,s.dark,.06,.03,.075)),n.add(lt(.028,.022,.02,s.pink,0,-.03,.185)),e.add(n);const r=lt(.09,.2,.025,s.fur,-.09,.48,.18),i=lt(.09,.2,.025,s.fur,.09,.48,.18),o=lt(.055,.13,.02,s.pink,-.09,.47,.196),l=lt(.055,.13,.02,s.pink,.09,.47,.196);r.rotation.z=.28,i.rotation.z=-.28,e.add(r,i,o,l);const h=[];for(const d of[-1,1])for(const p of[.13,-.15]){const m=lt(.05,.16,.05,s.fur,d*.08,.08,p);h.push(m),e.add(m)}const a=new le;return a.position.set(0,.25,-.2),a.add(lt(.06,.06,.24,s.fur,0,-.02,-.12)),a.add(lt(.09,.09,.12,s.pale,0,-.03,-.3)),e.add(a),{group:t,animate:(d,p)=>{const m=Math.max(0,Math.min(1,p));e.position.y=Math.abs(Math.sin(d*(4+3*m)))*.02*m+Math.sin(d*2.2)*.003;const v=d*(6+4*m);for(let _=0;_<h.length;_++)h[_].rotation.x=Math.sin(v+_%2*Math.PI+(_<2?0:.7))*.55*m;a.rotation.y=Math.sin(d*(2.2+3.2*m))*(.14+.22*m),a.rotation.x=-.1+.25*m+Math.sin(d*(2.6+2.4*m))*.05*m;const y=Math.max(0,Math.sin(d*5.7))**8*(1-m),x=Math.max(0,Math.sin(d*5.7+2.3))**8*(1-m);r.rotation.z=.28+y*.3,i.rotation.z=-.28-x*.3,n.rotation.x=Math.sin(d*1.6)*.04*(1-m)-.06*m}}}function J_(){const s=V_(),t=new le,e=new le;t.add(e),e.add(lt(.62,1.42,.42,s.robe,0,.71,0)),e.add(lt(.72,.18,.5,s.robe,0,.09,0)),e.add(lt(.66,.14,.46,s.sash,0,.86,0));for(const i of[-1,1])e.add(lt(.14,.8,.16,s.robe,i*.38,.8,.02)),e.add(lt(.1,.1,.1,s.skin,i*.16,.7,.18));e.add(Ms(.2,.22,.16,s.pouch,.28,.82,.24)),e.add(lt(.06,.05,.05,s.coin,.28,.94,.24));const n=new le;return n.position.set(0,1.56,0),n.add(lt(.26,.26,.24,s.skin,0,0,0)),n.add(lt(.3,.1,.28,s.scarf,0,.15,0)),n.add(lt(.3,.09,.3,s.scarf,0,.21,-.05)),n.add(lt(.3,.1,.3,s.scarf,0,-.16,-.02)),n.add(lt(.04,.04,.03,s.eye,-.07,.02,.12)),n.add(lt(.04,.04,.03,s.eye,.07,.02,.12)),e.add(n),{group:t,animate:(i,o)=>{e.rotation.z=Math.sin(i*.6)*.01,n.position.y=1.56+Math.sin(i*.9)*.012,n.rotation.y=Math.sin(i*.35)*.08}}}function Q_(s){switch(s){case"snake":return W_();case"rat":return q_();case"scorpion":return $_();case"wurm":return Y_();case"trader":return J_();case"vulture":return K_();case"tortoise":return j_();case"fennec":return Z_()}}const Ya=[{want:[{itemId:"rock",count:6}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"sand",count:8}],give:[{itemId:"glass",count:2}]},{want:[{itemId:"cactus",count:3}],give:[{itemId:"canister_empty",count:1}]},{want:[{itemId:"prickly_pear",count:5}],give:[{itemId:"canister_full",count:1}]},{want:[{itemId:"snake_skin",count:2}],give:[{itemId:"coolant_cell",count:1}]},{want:[{itemId:"wurm_hide",count:1}],give:[{itemId:"cobaltrod",count:2}]},{want:[{itemId:"chitin",count:4}],give:[{itemId:"catalyst",count:1}]},{want:[{itemId:"metal",count:4}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"fennec_pelt",count:2}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"tortoise_shell",count:1}],give:[{itemId:"canister_full",count:2}]},{want:[{itemId:"deadwood",count:5}],give:[{itemId:"adobe",count:3}]},{want:[{itemId:"rat_raw",count:4}],give:[{itemId:"prickly_pear",count:3}]},{want:[{itemId:"stinger",count:1}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"alabaster",count:4}],give:[{itemId:"glass",count:2}]}];function tv(s,t,e,n){const r=[],i=new Set;for(let o=0;o<5;o++){let l=Math.floor(mt(t+o*7,e-o*13,s+n*101+317)*Ya.length);for(;i.has(l);)l=(l+1)%Ya.length;i.add(l),r.push(Ya[l])}return r}const Wu=[{out:"bench",count:1,needs:{deadwood:4},station:null},{out:"armory",count:1,needs:{deadwood:4,metal:2},station:"bench"},{out:"campfire",count:1,needs:{rock:6,deadwood:2},station:null},{out:"wood_pickaxe",count:1,needs:{deadwood:3},station:null},{out:"wood_shovel",count:1,needs:{deadwood:3},station:null},{out:"wood_axe",count:1,needs:{deadwood:3},station:null},{out:"alloy_pickaxe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_shovel",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_axe",count:1,needs:{metal:2,copperrod:2,deadwood:1},station:"bench"},{out:"alloy_disassembler",count:1,needs:{metal:3,copperrod:2,rock:2},station:"bench"},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},station:"bench"},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},station:"bench"},{out:"backpack2",count:1,needs:{deadwood:10,metal:4,snake_skin:2},station:"armory"},{out:"wurmsuit",count:1,needs:{wurm_hide:3,chitin:1},station:"armory"},{out:"tortoise_cuirass",count:1,needs:{tortoise_shell:3,metal:1},station:"armory"},{out:"stinger_blade",count:1,needs:{metal:2,stinger:1,deadwood:1},station:"bench"},{out:"body_regulator",count:1,needs:{metal:4,copperrod:2,cobaltrod:1,catalyst:1},station:"armory"},{out:"coolant_cell",count:1,needs:{salt:2,canister_empty:1,copperrod:1},station:"bench"},{out:"head_lantern",count:1,needs:{metal:1,glass:1,copperrod:1,deadwood:1},station:"bench"},{out:"curved_hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"hull_slope",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"thruster_nozzle",count:1,needs:{cobaltrod:1,copperrod:2,metal:1},station:"bench"},{out:"sword",count:1,needs:{metal:2,deadwood:1},station:"bench"},{out:"door",count:1,needs:{metal:2,deadwood:2},station:"bench"},{out:"hull",count:2,needs:{metal:2,sand:2},station:"bench"},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},station:"bench"},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},station:"bench"},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},station:"armory"},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},station:"bench"},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},station:"bench"},{out:"chest",count:1,needs:{deadwood:6,metal:1},station:"bench"},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},station:"armory"},{out:"reptile_armor",count:1,needs:{snake_skin:3},station:"armory"},{out:"farmland",count:1,needs:{dirt:1},station:null},{out:"deadwood",count:2,needs:{wood_log:1},station:null},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},station:null},{out:"metal_plating",count:1,needs:{metal:1},station:null},{out:"door_inner",count:1,needs:{metal:1},station:"bench"},{out:"storm_breaker",count:1,needs:{metal:2,glass:1},station:"bench"},{out:"bucket",count:1,needs:{metal:2},station:"bench"},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},station:"bench"}],qu=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"metal"},{in:"rat_raw",out:"rat_cooked"},{in:"vulture_raw",out:"vulture_cooked"},{in:"wheat",out:"cooked_wheat"},{in:"iron_ore",out:"metal",n:2},{in:"copper_ore",out:"copperrod",n:2},{in:"cobalt_ore",out:"cobaltrod",n:2}];function Xu(s,t){return Object.entries(t.needs).every(([e,n])=>s.has(e,n))}function ev(s,t){if(!Xu(s,t))return null;for(const[e,n]of Object.entries(t.needs))s.removeItem(e,n);return s.addItem(t.out,t.count)}const gi=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it right next to a Save Beacon — that wakes the wreck's power.",goal:1},{id:"wings",kind:"thruster",title:"Wings of the Wreck",desc:"The Ship's four wingtip engines are dead. Mine Cobalt Ore in the deep Caves, smelt it at a Campfire, craft a Thruster Nozzle (Cobalt + Copper + Metal), and press E at each Broken Thruster. All four lit lifts the Ship.",goal:4}];function nv(){return{i:0,p:gi.map(()=>0)}}function iv(s){const t=nv();if(!s)return t;t.i=Math.max(0,Math.min(gi.length,s.i|0));for(let e=0;e<t.p.length;e++){const n=gi[e].goal;t.p[e]=Math.max(0,Math.min(n,(s.p&&s.p[e])|0))}return t}function _r(s){return s.i<gi.length?gi[s.i]:null}function sv(s,t,e=1){const n=_r(s);if(!n||n.kind!==t||s.p[s.i]>=n.goal||(s.p[s.i]=Math.min(n.goal,s.p[s.i]+e),s.p[s.i]<n.goal))return null;const r=n;return s.i++,r}const rv=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],fr=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside. Mind the drop: the first 4 blocks of a fall are free, every one after bites.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:s=>s.setClock(.56),poll:s=>s.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:s=>{s.inv.has("canister_empty")||s.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:s=>s.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:s=>s.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. Plant seeds in the tilled soil. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",goal:"plant",hold:40,enter:s=>{s.giveOrDrop("seed_wheat",2),s.selectHeld("shovel");const t=s.player.pos,e=Math.floor(t.x),n=Math.floor(t.z);for(let r=Math.floor(t.y)-1;r>20;r--){const i=s.world.get(e,r,n);if(i===Zn||i===vn){s.world.set(e,r,n,Jn),s.tutGuide={name:"Dirt",x:e,y:r,z:n};break}}}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class ov{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&fr[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=fr[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===je&&(t.set(-6,31,0,on),t.set(-6,32,0,nn),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=fr.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=fr[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=fr.map((n,r)=>r===this.step?"●":r<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const $u="sotf:index",Yu="sotf:settings",Ku="sotf:best",Wh={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function av(){try{return{...Wh,...JSON.parse(localStorage.getItem(Yu)||"{}")}}catch{return{...Wh}}}function lv(s){localStorage.setItem(Yu,JSON.stringify(s))}function Cr(){return Number(localStorage.getItem(Ku)||0)}function qh(s){s>Cr()&&localStorage.setItem(Ku,String(s))}function jo(){try{return JSON.parse(localStorage.getItem($u)||"[]")}catch{return[]}}function pc(s){localStorage.setItem($u,JSON.stringify(s))}function ju(s,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:s||t||"world",seedStr:t,updated:Date.now()},r=jo();return r.unshift(n),pc(r),n}function cv(s){pc(jo().filter(t=>t.id!==s)),localStorage.removeItem("sotf:w:"+s)}function Zu(s,t){try{localStorage.setItem("sotf:w:"+s.id,JSON.stringify(t));const e=jo(),n=e.find(r=>r.id===s.id);return n&&(n.updated=Date.now(),pc(e)),!0}catch{return!1}}function Ju(s){try{const t=localStorage.getItem("sotf:w:"+s);return t?JSON.parse(t):null}catch{return null}}function Qu(s,t){const e=new Blob([JSON.stringify({meta:s,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${s.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function hv(s){const t=JSON.parse(await s.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=ju(t.meta?.name??"imported",t.run.seedStr);return Zu(e,t.run),e}const ie=we;function vs(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}const ii=(s,t,e,n)=>{const[r,i]=Vu(n);s.drawImage(Gu(),r,i,ie,ie,t,e,ie,ie)},N=(s,t,e,n,r,i)=>{s.fillStyle=i,s.fillRect(t,e,n,r)},de=(s,t,e,n,r,i)=>{s.strokeStyle=i,s.lineWidth=1,s.strokeRect(t+.5,e+.5,n-1,r-1)},Yt=(s,t,e,n,r,i,o=2)=>{s.strokeStyle=i,s.lineWidth=o,s.beginPath(),s.moveTo(t,e),s.lineTo(n,r),s.stroke()},qt=(s,t,e)=>{s.fillStyle=e,s.beginPath(),s.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)s.lineTo(t[n][0],t[n][1]);s.closePath(),s.fill()};function td(s,t,e,n){const[r,i]=vs(t*ie,e*ie),o=(a,c,d)=>{qt(i,[[3,12],[2,7],[5,3],[10,2],[14,6],[13,12],[8,14]],a),qt(i,[[5,3],[10,2],[11,6],[6,7]],c),qt(i,[[3,12],[13,12],[8,14]],d)},l=(a,c,d)=>{i.fillStyle=a;for(const[p,m]of d)i.fillRect(p,m,2,2);i.fillStyle=c;for(const[p,m]of d)i.fillRect(p,m,1,1)};if(s.includes("_")&&(s.endsWith("pickaxe")||s.endsWith("shovel")||s.endsWith("axe")||s.endsWith("disassembler"))){const a=s.replace(/^(wood|stone|metal|alloy)_/,""),c=s.startsWith("alloy_"),d=c?"#7a4a26":"#00000044";return N(i,7,16,2,14,"#6b5238"),N(i,6,14,4,3,"#4a4a52"),a==="pickaxe"?(Yt(i,3,12,13,12,n,2),Yt(i,3,12,3,15,n),Yt(i,13,12,13,15,n),Yt(i,4,9,12,9,"#00000022",1),c&&Yt(i,4,11,12,11,"#e89a62",1)):a==="shovel"?(N(i,5,6,6,7,n),de(i,5,6,6,7,d),Yt(i,6,13,6,13,n),Yt(i,9,13,9,13,n),Yt(i,6,13,7,14,n,1),Yt(i,9,13,8,14,n,1),c&&N(i,6,7,2,4,"#e89a62")):a==="axe"?(N(i,9,7,5,6,n),de(i,9,7,5,6,d),N(i,8,8,1,4,n),c&&N(i,10,8,2,3,"#e89a62")):(N(i,4,7,8,2,n),N(i,4,7,2,5,n),N(i,10,7,2,5,n),N(i,7,11,2,2,"#66e5f0"),N(i,6,12,4,1,"#2f97a6"),c&&(N(i,4,8,1,3,"#e89a62"),N(i,11,8,1,3,"#8a4a26"))),c&&(N(i,6,14,4,1,"#8a5a34"),N(i,6,15,4,1,"#c98a56"),N(i,6,16,4,1,"#5c3d22"),i.fillStyle="#f0c89a",i.fillRect(6,15,1,1),i.fillRect(9,15,1,1)),r}switch(s){case"canister_full":case"canister_empty":{const a=s==="canister_full",c=e*ie;return N(i,6,0,4,3,"#8a98a8"),N(i,7,3,2,2,"#8a98a8"),N(i,4,5,8,c-7,a?"#2f7fd6":"#3a4750"),de(i,4,5,8,c-7,"#dfe6ee"),a?(N(i,5,10,1,c-13,"#5fa3ea"),N(i,4,9,8,1,"#7f2b2b")):(N(i,4,14,8,4,"#c8d2da"),N(i,6,15,4,2,"#3a4750")),r}case"hot_water_pouch":return N(i,6,0,4,3,"#8a98a8"),N(i,7,3,2,2,"#8a98a8"),N(i,4,5,8,25,"#c26a38"),de(i,4,5,8,25,"#ffd9a8"),N(i,5,10,1,17,"#ff9a4f"),N(i,4,12,8,3,"#ff7a30"),N(i,4,16,8,2,"#e05a20"),i.fillStyle="#c8d2da",i.fillRect(4,1,2,1),i.fillRect(7,0,2,1),i.fillRect(11,1,2,1),r;case"sword":return N(i,8,0,1,1,"#eef3f8"),N(i,7,1,3,17,"#c9d2dc"),N(i,8,1,1,17,"#eef3f8"),N(i,4,18,8,2,"#4a4a52"),N(i,7,20,3,9,"#6b5238"),N(i,7,22,3,1,"#4a3926"),N(i,7,25,3,1,"#4a3926"),N(i,6,29,5,2,"#4a4a52"),r;case"voidbreaker":return N(i,7,16,2,14,"#2a1d3a"),N(i,6,14,4,3,"#180f24"),Yt(i,3,12,13,12,"#8a5ad6",2),Yt(i,3,12,3,15,"#8a5ad6"),Yt(i,13,12,13,15,"#8a5ad6"),i.fillStyle="#e8d6ff",i.fillRect(5,9,1,2),i.fillRect(10,10,1,1),i.fillRect(8,11,1,2),i.fillStyle="#00000088",i.fillRect(7,10,2,1),i.fillRect(6,11,1,2),r;case"visor":return N(i,1,6,14,3,"#2e3a45"),N(i,3,4,10,6,"#123c44"),N(i,4,5,8,4,"#66e5f0"),N(i,5,5,2,1,"#d2f8ff"),de(i,3,4,10,6,"#c8d2da"),N(i,1,5,2,1,"#5a6875"),N(i,13,5,2,1,"#5a6875"),r;case"catalyst":return N(i,7,3,2,2,"#8898a8"),i.fillStyle="#c07fe0",i.beginPath(),i.arc(8,10,4,0,Math.PI*2),i.fill(),i.strokeStyle="#7a4a9a",i.lineWidth=1,i.beginPath(),i.arc(8,10,4.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,8,2,1),i.fillRect(7,7,1,1),r;case"iron_ore":return o("#5a5450","#78716c","#423d39"),l("#9e8468","#c4a878",[[5,6],[9,4],[10,9],[6,10]]),r;case"copper_ore":return o("#6a5a52","#8a7466","#4c403a"),l("#b86b42","#e8935e",[[5,6],[9,4],[10,9],[6,10]]),r;case"cobalt_ore":return o("#4e5666","#6a7488","#3a4050"),qt(i,[[7,4],[9,6],[7,8],[5,6]],"#5c74a8"),qt(i,[[10,8],[12,10],[10,12],[8,10]],"#5c74a8"),qt(i,[[7,4],[9,6],[7,6]],"#9ab8e8"),qt(i,[[10,8],[12,10],[10,10]],"#9ab8e8"),i.fillStyle="#c4dcf4",i.fillRect(7,4,1,1),i.fillRect(10,8,1,1),r;case"alabaster":return o("#cfc8b0","#eae3cd","#a89f88"),N(i,4,7,8,1,"#b4ab92"),N(i,6,10,7,1,"#b4ab92"),N(i,3,12,5,1,"#b4ab92"),i.fillStyle="#f7f2e2",i.fillRect(6,3,2,1),r;case"copperrod":N(i,6,1,3,14,"#a05a2e"),N(i,7,2,1,12,"#e89a62"),i.fillStyle="#6e3a1c";for(const[a,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(a,c,1,1);return N(i,5,1,5,1,"#6e3a1c"),N(i,5,14,5,1,"#6e3a1c"),r;case"cobaltrod":N(i,6,1,3,14,"#4a5a86"),N(i,7,2,1,12,"#8aa8dc"),i.fillStyle="#2e3a5c";for(const[a,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(a,c,1,1);return N(i,5,1,5,1,"#2e3a5c"),N(i,5,14,5,1,"#2e3a5c"),r;case"backpack2":{N(i,8,1,3,6,"#5a4229"),N(i,21,1,3,6,"#5a4229"),N(i,3,7,26,22,"#6a4c30"),de(i,3,7,26,22,"#42301e"),N(i,3,7,26,8,"#7d5c3c"),de(i,3,7,26,8,"#42301e"),N(i,9,7,4,22,"#6a4a3a"),N(i,19,7,4,22,"#6a4a3a"),i.fillStyle="#c8a878";for(let a=10;a<=27;a+=3)i.fillRect(9,a,1,1),i.fillRect(12,a,1,1),i.fillRect(19,a,1,1),i.fillRect(22,a,1,1);return N(i,13,17,6,4,"#8a6a4a"),de(i,13,17,6,4,"#2e2018"),N(i,15,18,2,2,"#c8a878"),N(i,5,25,22,4,"#7a5a3a"),de(i,5,25,22,4,"#42301e"),r}case"body_regulator":return N(i,4,2,3,28,"#4c3822"),N(i,25,2,3,28,"#4c3822"),i.strokeStyle="#3a4750",i.lineWidth=2,i.beginPath(),i.moveTo(10,12),i.quadraticCurveTo(4,10,5,3),i.stroke(),i.beginPath(),i.moveTo(22,12),i.quadraticCurveTo(28,10,27,3),i.stroke(),N(i,8,8,16,17,"#8a98a8"),de(i,8,8,16,17,"#3c4650"),N(i,8,8,16,3,"#aab4c0"),N(i,8,22,16,3,"#6a7680"),N(i,10,13,12,2,"#2e6a78"),N(i,10,16,12,2,"#2e6a78"),N(i,10,19,12,2,"#2e6a78"),i.fillStyle="#5fb8cc",i.fillRect(11,13,2,2),i.fillRect(15,16,2,2),i.fillRect(19,19,2,2),i.fillStyle="#d2f8ff",i.fillRect(9,12,1,1),i.fillRect(22,15,1,1),i.fillRect(9,21,1,1),i.fillRect(21,12,1,1),r;case"coolant_cell":return i.fillStyle="#7fd4e8",i.globalAlpha=.22,i.beginPath(),i.arc(8,9,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,6,1,4,2,"#8a98a8"),N(i,7,3,2,1,"#8a98a8"),N(i,5,4,6,10,"#3a8ea8"),de(i,5,4,6,10,"#bfeef8"),N(i,6,5,1,8,"#7fd4e8"),N(i,5,7,6,1,"#5fc0d8"),N(i,5,11,6,1,"#2e6e84"),i.fillStyle="#e8fbff",i.fillRect(9,6,1,1),i.fillRect(7,9,1,1),i.fillRect(10,12,1,1),i.fillRect(6,13,1,1),r;case"head_lantern":return i.fillStyle="#ffd76a",i.globalAlpha=.25,i.beginPath(),i.arc(8,9,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,1,7,14,3,"#4a4a52"),N(i,1,7,14,1,"#5f6670"),N(i,1,9,14,1,"#33373d"),N(i,7,4,2,2,"#5a6875"),N(i,5,6,6,8,"#2e3a45"),de(i,5,6,6,8,"#8a98a8"),N(i,6,7,4,5,"#ffd76a"),N(i,7,8,2,2,"#fff3c0"),N(i,6,11,4,1,"#e8a83c"),N(i,5,13,6,1,"#232830"),r;case"chitin":return qt(i,[[8,3],[13,6],[14,11],[11,14],[5,14],[2,11],[3,6]],"#6a4a3a"),qt(i,[[8,3],[13,6],[8,7],[3,6]],"#8f6a50"),Yt(i,8,7,5,13,"#4c352a",1),Yt(i,8,7,8,14,"#4c352a",1),Yt(i,8,7,11,13,"#4c352a",1),N(i,4,13,8,1,"#3c2a20"),i.fillStyle="#b08860",i.fillRect(7,4,2,1),r;case"stinger":return i.strokeStyle="#8a7a5c",i.lineWidth=5,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#d8cbb0",i.lineWidth=3,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#b0a284",i.lineWidth=1,i.beginPath(),i.moveTo(5,13),i.quadraticCurveTo(5.5,7,8,4),i.stroke(),qt(i,[[9,0],[14,1],[11,6]],"#a84a3a"),qt(i,[[9,0],[11,.5],[10,3]],"#e0705a"),Yt(i,14,1,11,6,"#6e2f24",1),r;case"wurm_hide":{N(i,2,2,12,15,"#7a5c40"),de(i,2,2,12,15,"#4c3822");for(let a=3;a<14;a+=3)N(i,3,a,10,2,"#8f6e4c"),N(i,3,a+2,10,1,"#5a4228");return N(i,2,17,12,2,"#6a4c30"),i.fillStyle="#8a6a48",i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.fill(),i.strokeStyle="#4c3822",i.lineWidth=1,i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.stroke(),i.strokeStyle="#5a4228",i.beginPath(),i.arc(8,24,3,0,Math.PI*2),i.stroke(),i.fillStyle="#6a4c30",i.fillRect(7,23,2,2),r}case"wurmsuit":{N(i,9,8,14,18,"#7a5c40"),de(i,9,8,14,18,"#42301e");for(let a=10;a<=18;a+=4)N(i,10,a,12,3,"#8a6a48"),N(i,10,a+3,12,1,"#4c3822");N(i,11,5,10,3,"#5f4830"),de(i,11,5,10,3,"#42301e"),qt(i,[[3,9],[10,6],[12,13],[5,15]],"#6a4a3a"),qt(i,[[29,9],[22,6],[20,13],[27,15]],"#6a4a3a"),qt(i,[[4,9],[10,6],[11,9],[5,11]],"#8f6a50"),qt(i,[[28,9],[22,6],[21,9],[27,11]],"#8f6a50"),Yt(i,6,8,7,14,"#4c352a",1),Yt(i,26,8,25,14,"#4c352a",1),i.fillStyle="#c8a878";for(let a=9;a<=14;a+=3)i.fillRect(4,a,1,1),i.fillRect(9,a,1,1),i.fillRect(22,a,1,1),i.fillRect(27,a,1,1);return N(i,9,24,14,3,"#4c3822"),N(i,13,24,6,3,"#6a4a3a"),de(i,13,24,6,3,"#2e2018"),i.fillStyle="#c8a878",i.fillRect(15,25,2,1),r}case"vulture_raw":return qt(i,[[3,9],[4,5],[8,3],[12,4],[13,8],[11,12],[6,12]],"#8a332c"),qt(i,[[4,5],[8,3],[12,4],[10,7],[5,7]],"#a8453a"),qt(i,[[6,12],[11,12],[9,13],[6,13]],"#571f1b"),N(i,12,6,3,3,"#d8cbb0"),N(i,14,5,1,1,"#d8cbb0"),N(i,14,9,1,1,"#d8cbb0"),N(i,13,6,1,3,"#8a7a5c"),N(i,12,6,2,1,"#f0e6d0"),i.fillStyle="#c8705e",i.fillRect(5,7,3,1),i.fillRect(9,6,2,1),i.fillRect(6,10,4,1),i.fillStyle="#e8a08a",i.fillRect(6,7,1,1),i.fillRect(8,10,1,1),r;case"vulture_cooked":return i.fillStyle="#c8d2da",i.fillRect(5,2,1,2),i.fillRect(8,1,1,2),i.fillRect(11,2,1,2),i.fillStyle="#eef3f8",i.fillRect(5,1,1,1),i.fillRect(8,0,1,1),i.fillRect(11,1,1,1),qt(i,[[3,10],[4,6],[8,4],[12,5],[13,9],[11,13],[6,13]],"#9a6132"),qt(i,[[4,6],[8,4],[12,5],[10,8],[5,8]],"#c08348"),qt(i,[[6,13],[11,13],[9,14],[6,14]],"#5c3a1c"),Yt(i,6,6,8,12,"#4a2c14",1),Yt(i,9,5,11,11,"#4a2c14",1),i.fillStyle="#d8a05e",i.fillRect(6,5,3,1),i.fillRect(10,6,2,1),i.fillStyle="#f0c89a",i.fillRect(7,5,1,1),r;case"tortoise_shell":{qt(i,[[3,22],[5,12],[11,6],[17,4],[24,7],[29,14],[30,22]],"#5f5a4e"),qt(i,[[11,6],[17,4],[24,7],[20,13],[12,12]],"#7d7768"),qt(i,[[3,22],[30,22],[29,25],[4,25]],"#46423a"),i.strokeStyle="#46423a",i.lineWidth=1,i.beginPath(),i.moveTo(17,5),i.lineTo(9,22),i.moveTo(17,5),i.lineTo(17,23),i.moveTo(17,5),i.lineTo(25,22),i.stroke(),i.beginPath(),i.moveTo(6,15),i.lineTo(28,15),i.stroke(),i.fillStyle="#6e6858",i.fillRect(14,8,5,1),i.fillRect(8,17,6,1),i.fillRect(20,18,5,1),i.fillStyle="#8a8474",i.fillRect(15,6,2,1),i.fillStyle="#cfc7b2";for(const[a,c,d,p]of[[3,24,4,5],[9,25,4,6],[15,25,4,5],[21,24,4,6],[26,22,4,5]])qt(i,[[a,c],[a+d,c],[a+d/2,c+p]],"#cfc7b2");qt(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),qt(i,[[26,15],[29,15],[31,18]],"#cfc7b2"),i.fillStyle="#8f8874";for(const[a,c,d]of[[3,24,4],[9,25,4],[15,25,4],[21,24,4]])i.fillRect(a,c,d,1);return r}case"fennec_pelt":{qt(i,[[6,11],[2,1],[9,7]],"#c99a62"),qt(i,[[6,10],[3,3],[8,7]],"#8f6a44"),qt(i,[[10,11],[14,1],[7,7]],"#c99a62"),qt(i,[[10,10],[13,3],[8,7]],"#8f6a44"),i.fillStyle="#ead4b0",i.fillRect(2,3,1,3),i.fillRect(13,3,1,3),i.fillStyle="#d8b488",i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8a6540",i.lineWidth=1,i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.stroke(),i.fillStyle="#ead4b0",i.beginPath(),i.ellipse(8,14,2.5,2,0,0,Math.PI*2),i.fill(),i.fillStyle="#3a2a1c",i.fillRect(6,11,1,1),i.fillRect(9,11,1,1),i.fillStyle="#6a4a30",i.fillRect(7,14,2,1),N(i,4,15,8,12,"#d8b488"),de(i,4,15,8,12,"#8a6540"),N(i,5,16,6,9,"#e8d0a8"),N(i,2,16,2,3,"#c99a62"),N(i,12,16,2,3,"#c99a62"),N(i,2,21,2,3,"#c99a62"),N(i,12,21,2,3,"#c99a62"),i.fillStyle="#8f6a44";for(let a=17;a<=25;a+=2)i.fillRect(4,a,1,1),i.fillRect(11,a,1,1);return N(i,6,27,4,3,"#c99a62"),N(i,6,30,4,2,"#ead4b0"),de(i,6,27,4,5,"#8a6540"),r}case"tortoise_cuirass":{N(i,6,6,20,23,"#3b372f"),de(i,6,6,20,23,"#2a2722");const a=(c,d,p)=>{N(i,c,d,p,6,"#5f5a4e"),N(i,c,d,p,2,"#7d7768"),N(i,c,d+5,p,1,"#3b372f"),i.fillStyle="#48443a",i.fillRect(c+Math.round(p/3),d+1,1,4),i.fillRect(c+Math.round(2*p/3),d+1,1,4)};a(8,8,16),a(6,14,20),a(7,20,18),N(i,10,4,12,4,"#8a98a8"),N(i,10,4,12,1,"#aab4c0"),de(i,10,4,12,4,"#3c4650"),N(i,5,13,1,14,"#8a98a8"),N(i,26,13,1,14,"#8a98a8"),N(i,6,26,20,4,"#8a98a8"),N(i,6,26,20,1,"#aab4c0"),N(i,6,29,20,1,"#5c6670"),de(i,6,26,20,4,"#3c4650"),N(i,14,26,4,4,"#c98a56"),N(i,14,26,4,1,"#f0c89a"),de(i,14,26,4,4,"#5c3d22"),i.fillStyle="#cfc7b2",qt(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),qt(i,[[26,16],[29,16],[31,19]],"#cfc7b2"),qt(i,[[9,29],[12,29],[10,31]],"#cfc7b2"),qt(i,[[19,29],[22,29],[21,31]],"#cfc7b2");for(const[c,d]of[[7,15],[23,15],[7,21],[23,21],[9,27],[21,27],[11,5],[18,5]])N(i,c,d,2,2,"#5c3d22"),N(i,c,d,2,1,"#c98a56"),i.fillStyle="#f0c89a",i.fillRect(c,d,1,1);return r}case"stinger_blade":return qt(i,[[8,0],[10,3],[6,3]],"#a84a3a"),qt(i,[[8,0],[9,2],[7,2]],"#e0705a"),qt(i,[[6,3],[10,3],[11,6],[5,6]],"#d8cbb0"),Yt(i,5,6,11,6,"#8a7a5c",1),N(i,6,6,4,15,"#c9d2dc"),N(i,7,7,1,14,"#eef3f8"),N(i,9,7,1,14,"#8a949e"),N(i,3,21,10,2,"#4a4a52"),N(i,3,21,10,1,"#6a7280"),N(i,6,23,4,6,"#6b5238"),N(i,6,24,4,1,"#4a3926"),N(i,6,27,4,1,"#4a3926"),N(i,5,29,6,2,"#6a4a3a"),de(i,5,29,6,2,"#3c2a20"),r;case"curved_hull":{const a="#7d8390",c="#4e545e",d="#aab2bc";return N(i,6,2,8,2,a),N(i,3,4,12,2,a),N(i,2,6,13,8,a),i.clearRect(13,13,2,1),i.clearRect(14,12,1,1),N(i,6,2,8,1,d),N(i,3,4,1,2,d),N(i,2,6,1,8,d),N(i,2,13,11,1,c),N(i,14,6,1,6,c),N(i,12,13,1,1,c),N(i,3,9,12,1,"#6b7280"),i.fillStyle=c,i.fillRect(11,3,1,1),i.fillRect(12,7,1,1),i.fillRect(5,11,1,1),i.fillStyle=d,i.fillRect(11,4,1,1),i.fillRect(12,8,1,1),i.fillRect(5,12,1,1),r}case"hull_slope":return qt(i,[[2,14],[2,4],[11,2],[14,8],[14,14]],"#767d88"),qt(i,[[2,4],[11,2],[12,6],[2,8]],"#949ca8"),Yt(i,11,2,14,8,"#aab2bc",1),N(i,2,13,12,1,"#4e545e"),N(i,2,10,12,1,"#6b7280"),i.fillStyle="#5c636d",i.fillRect(4,6,1,1),i.fillRect(9,11,1,1),i.fillRect(12,9,1,1),r;case"thruster_nozzle":return N(i,8,2,16,5,"#8a98a8"),de(i,8,2,16,5,"#3c4650"),N(i,8,2,16,1,"#aab4c0"),i.fillStyle="#c8d2da",i.fillRect(9,4,1,1),i.fillRect(22,4,1,1),Yt(i,12,3,14,5,"#5c6670",1),Yt(i,18,5,20,3,"#5c6670",1),qt(i,[[10,7],[22,7],[27,21],[5,21]],"#c88a50"),qt(i,[[10,7],[15,7],[13,21],[5,21]],"#e0a86a"),qt(i,[[20,7],[22,7],[27,21],[23,21]],"#96603a"),Yt(i,9,12,23,12,"#7a4a26",1),Yt(i,7,17,25,17,"#7a4a26",1),N(i,5,21,22,4,"#8a98a8"),de(i,5,21,22,4,"#3c4650"),N(i,5,21,22,1,"#aab4c0"),i.fillStyle="#5c6670",i.fillRect(8,22,1,2),i.fillRect(16,22,1,2),i.fillRect(23,22,1,2),i.fillStyle="#c8d2da",i.fillRect(9,23,1,1),i.fillRect(17,23,1,1),i.fillRect(24,23,1,1),N(i,7,25,18,3,"#4a5560"),N(i,9,26,14,1,"#c85a2e"),N(i,11,27,10,1,"#8a3a1e"),r;case"backpack1":return N(i,8,1,3,6,"#5a4229"),N(i,21,1,3,6,"#5a4229"),N(i,5,7,22,21,"#7a5a3a"),de(i,5,7,22,21,"#4c3822"),N(i,5,7,22,8,"#8a6a48"),de(i,5,7,22,8,"#4c3822"),N(i,13,13,6,3,"#d8b74f"),N(i,9,20,14,6,"#6b4d30"),de(i,9,20,14,6,"#4c3822"),r;case"beacon":return i.fillStyle="#66e5f0",i.globalAlpha=.35,i.beginPath(),i.arc(8,5,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.fillStyle="#66e5f0",i.beginPath(),i.arc(8,5,3,0,Math.PI*2),i.fill(),N(i,6,5,1,1,"#d2f8ff"),N(i,7,8,2,8,"#8a98a8"),ii(i,0,ie,Tn),r;case"campfire":return Yt(i,3,10,12,4,"#61492f",2),Yt(i,4,4,13,10,"#61492f",2),Yt(i,3,10,12,4,"#7d5f3d",1),ii(i,0,ie,sn),r;case"door":return ii(i,0,0,nn),ii(i,0,ie,on),r;case"bed":return ii(i,0,0,rn),ii(i,ie,0,_n),r;case"dune_melon":i.fillStyle="#5f7f2c",i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#3c541c",i.lineWidth=2,i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.stroke(),i.strokeStyle="#88a84c",i.lineWidth=1;for(const a of[-7,0,7])i.beginPath(),i.moveTo(16+a,3),i.lineTo(16+a,19),i.stroke();return N(i,15,1,2,3,"#6b5238"),r;case"wheat":{i.strokeStyle="#c8a844",i.lineWidth=2;for(const a of[4,8,12])i.beginPath(),i.moveTo(a,15),i.lineTo(a,3),i.stroke();i.fillStyle="#e0c860";for(const a of[4,8,12])for(let c=2;c<9;c+=2)i.fillRect(a-2,c,4,2);return i.strokeStyle="#7a5a30",i.lineWidth=1,i.beginPath(),i.moveTo(2,12),i.lineTo(14,12),i.stroke(),r}case"cooked_wheat":return i.fillStyle="#a8712e",i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.fill(),i.strokeStyle="#74501f",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.stroke(),i.fillStyle="#d8a860",i.fillRect(5,8,6,1),i.fillRect(6,7,4,1),r;case"bucket":case"bucket_full":{const a=s==="bucket_full";return N(i,4,6,8,9,a?"#2f7fd6":n),de(i,4,6,8,9,"#dfe6ee"),N(i,3,5,10,2,"#c8d2da"),N(i,5,2,1,3,"#8a98a8"),N(i,10,2,1,3,"#8a98a8"),Yt(i,5,3,11,3,"#8a98a8",1),a&&N(i,5,7,6,1,"#5fa3ea"),r}case"kindling":return Yt(i,3,21,12,4,"#6b5238",2),Yt(i,6,22,14,8,"#5a4630",2),N(i,11,3,3,3,"#9a8a5a"),N(i,4,8,3,3,"#9a8a5a"),N(i,13,9,3,2,"#8a9a4a"),r;case"seed_tree":return N(i,7,14,6,6,"#8a6a3a"),N(i,7,13,6,2,"#5a4630"),N(i,9,9,2,4,"#5a8a3a"),N(i,6,7,3,2,"#7fae54"),N(i,11,8,3,2,"#7fae54"),r;case"rock":return o("#6a655f","#877f77","#4a4642"),Yt(i,5,9,11,10,"#55504b",1),i.fillStyle="#98907f",i.fillRect(7,4,2,1),r;case"gravel":{const a=(c,d,p,m)=>{i.fillStyle=m,i.beginPath(),i.arc(c,d,p,0,Math.PI*2),i.fill()};return a(5,11,3.2,"#7d766f"),a(11,12,3.6,"#6a645e"),a(8,7,3.6,"#8d8680"),i.fillStyle="#a49c94",i.fillRect(6,5,2,1),i.fillRect(3,9,2,1),i.fillStyle="#544e48",i.fillRect(10,14,3,1),i.fillRect(3,13,3,1),r}case"salt":return qt(i,[[3,12],[3,7],[6,3],[11,2],[13,6],[13,12]],"#d9dbd6"),qt(i,[[6,3],[11,2],[12,5],[7,6]],"#f2f4ef"),qt(i,[[3,12],[13,12],[8,14]],"#b4b8b2"),Yt(i,6,7,11,8,"#c2c5bf",1),i.fillStyle="#ffffff",i.fillRect(5,6,1,1),i.fillRect(9,8,1,1),i.fillRect(11,5,1,1),r;case"deadwood":return Yt(i,2,10,13,8,"#61492f",4),Yt(i,2,9,13,7,"#7d5f3d",1),Yt(i,4,11,11,9,"#4a3926",1),Yt(i,7,9,9,3,"#61492f",2),i.fillStyle="#8a6a44",i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.fill(),i.strokeStyle="#5c4630",i.lineWidth=1,i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.stroke(),r;case"metal":return Yt(i,3,13,12,3,"#9aa0aa",3),Yt(i,3,12,12,2,"#c8d2da",1),Yt(i,4,14,12,5,"#6a707a",1),i.fillStyle="#6a707a",i.fillRect(9,7,1,2),i.fillStyle="#e2e8f0",i.fillRect(6,9,1,1),r;case"lamp":return i.fillStyle="#fff0a0",i.globalAlpha=.28,i.beginPath(),i.arc(8,8,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,5,2,6,2,"#4a4a52"),N(i,5,2,6,1,"#6a7280"),N(i,4,4,1,9,"#3a3f46"),N(i,11,4,1,9,"#3a3f46"),N(i,5,4,6,9,"#fff0a0"),N(i,6,5,2,7,"#fff8d0"),N(i,6,10,4,2,"#e8a83c"),N(i,4,13,8,2,"#4a4a52"),r;case"regulator":{N(i,5,1,6,2,"#6a7680"),N(i,3,3,10,11,"#8a98a8"),de(i,3,3,10,11,"#3c4650"),N(i,3,3,10,2,"#aab4c0");for(let a=4;a<=11;a+=2)N(i,a,6,1,6,"#5f6c78");return N(i,7,7,3,4,"#59bfcc"),N(i,8,8,1,1,"#d2f8ff"),N(i,3,12,10,2,"#3c4650"),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),r}case"engine_core":return i.fillStyle="#c468e8",i.globalAlpha=.25,i.beginPath(),i.arc(8,8,7.5,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,4,3,8,11,"#6a6e78"),de(i,4,3,8,11,"#3a3e46"),N(i,4,3,8,1,"#8d929c"),N(i,4,13,8,1,"#4a4e56"),i.fillStyle="#c468e8",i.beginPath(),i.arc(8,8,3.2,0,Math.PI*2),i.fill(),i.strokeStyle="#7a3a9a",i.lineWidth=1,i.beginPath(),i.arc(8,8,3.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,6,2,1),i.fillRect(7,5,1,1),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),i.fillRect(4,12,1,1),i.fillRect(11,12,1,1),r;case"seed_melon":return i.fillStyle="#c8b060",i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8f7a40",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.stroke(),i.fillStyle="#e0cc8c",i.beginPath(),i.ellipse(7,9,1.8,2.6,0,0,Math.PI*2),i.fill(),N(i,7,2,2,3,"#5a8a3a"),N(i,5,1,2,2,"#7fae54"),N(i,9,0,2,2,"#7fae54"),r;case"seed_wheat":return i.fillStyle="#d8c878",i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.fill(),i.strokeStyle="#9a8a48",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.stroke(),Yt(i,8,6,8,14,"#b09a58",1),i.fillStyle="#f0e2a8",i.fillRect(6,8,1,4),Yt(i,8,5,7,2,"#9a8a48",1),Yt(i,8,5,9,2,"#9a8a48",1),r;case"bench":return ii(i,0,0,Ze),ii(i,0,ie,mn),r}return null}const vo=new Map;function Ao(s){const t=vo.get(s);if(t)return t;const e=Nt[s];if(!e)return vo.set(s,[]),vo.get(s);let r=td(s,e.w,e.h,e.color);if(!r&&e.block!==void 0){const[o,l]=vs(e.w*ie,e.h*ie);for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)ii(l,a*ie,h*ie,e.block);r=o}const i=[];if(r){const[o,l]=vs(ie,ie);for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)l.clearRect(0,0,ie,ie),l.drawImage(r,a*ie,h*ie,ie,ie,0,0,ie,ie),i.push(o.toDataURL())}else{const[o,l]=vs(ie,ie);N(l,2,2,ie-4,ie-4,e.color),i.push(o.toDataURL())}return vo.set(s,i),i}function Ui(s,t=0){const e=Nt[s];if(!e)return"";if(e.w===1&&e.h===1)return Ao(s)[0]??"";const[n,r]=vs(e.w*ie,e.h*ie);r.imageSmoothingEnabled=!1;const i=td(s,e.w,e.h,e.color);if(i)r.drawImage(i,0,0);else if(e.block!==void 0)for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)ii(r,a*ie,h*ie,e.block);if(!t)return n.toDataURL();const[o,l]=vs(e.h*ie,e.w*ie);return l.imageSmoothingEnabled=!1,l.translate(e.h*ie,0),l.rotate(Math.PI/2),l.drawImage(n,0,0),o.toDataURL()}function uv(s){const[t,e]=vs(ie,ie);return ii(e,0,0,s),t.toDataURL()}const Ue=s=>document.getElementById(s);let Xh=0;function nt(s){const t=Ue("toast");t.textContent=s,t.style.opacity="1",clearTimeout(Xh),Xh=setTimeout(()=>t.style.opacity="0",2600)}function dv(s){const t=Ue("prompt");if(!s){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=s}function fv(s){Ue("vision-water").style.opacity=s?"1":"0"}function pv(s){const t=Ue("blockname");if(!s){t.classList.add("hidden");return}t.textContent=s,t.classList.remove("hidden")}function $h(){const s=Ue("vision-hit");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash")}let Yh="";function mv(s){const t=s.selectedSlot()?.itemId??"",e=s.slots.map(i=>i.itemId).join(",")+"|"+t;if(e===Yh)return;Yh=e;const n=[];for(const i of s.slots){const o=n.find(l=>l.itemId===i.itemId);o?o.count+=1:n.push({itemId:i.itemId,count:1})}const r=Ue("hotbar");r.innerHTML="",n.slice(0,9).forEach((i,o)=>{const l=document.createElement("div");l.className="hb-slot"+(i.itemId===t?" sel":""),l.dataset.hb=String(o);const h=document.createElement("img");h.src=Ui(i.itemId),h.alt=Nt[i.itemId].name,l.appendChild(h);const a=document.createElement("span");if(a.className="hb-key",a.textContent=String(o+1),l.appendChild(a),i.count>1){const c=document.createElement("span");c.className="hb-count",c.textContent=String(i.count),l.appendChild(c)}r.appendChild(l)})}function gv(){const s=document.querySelector("#bar-water .safe");s.style.left="25%",s.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((fc-ps)/(mr-ps)*100).toFixed(1)+"%",t.style.right=((mr-Ko)/(mr-ps)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(r,i,o)=>{const l=document.createElement("span");l.className="dmg",l.style.left=i.toFixed(1)+"%",l.title=o,document.getElementById(r).appendChild(l)};e("bar-water",Wl,"below this, dehydration drains Health");const n=r=>(r-ps)/(mr-ps)*100;e("bar-heat",n(Vl),"below this, hypothermia drains Health"),e("bar-heat",n(Gl),"above this, heat stroke drains Health")}function Kh(s,t=0,e=0,n=0,r=0,i=0){const o=document.getElementById("waypoint");if(!s){o.classList.add("hidden");return}const l=t-n,h=e-r,a=Math.atan2(l,-h)+i;Ue("wp-arrow").style.transform=`rotate(${a*180/Math.PI}deg)`,Ue("wp-name").textContent=s,Ue("wp-dist").textContent=`${Math.round(Math.hypot(l,h))} m`,o.classList.remove("hidden")}function jh(s,t,e,n,r,i,o){const l=R=>document.querySelector(`#${R} .fill`);l("bar-health").style.width=s.health+"%",l("bar-water").style.width=s.water+"%";const h=(s.body-ps)/(mr-ps)*100;l("bar-heat").style.width=h+"%";const a=e%Be/Be,c=String(Math.floor(a*24)).padStart(2,"0"),d=String(Math.floor(a*24%1*60)).padStart(2,"0");Ue("clock-day").textContent="Day "+n,Ue("clock-time").textContent=c+":"+d;const p=R=>r==="C"?Math.round(R)+"°C":Math.round(R*9/5+32)+"°F";Ue("clock-temp").textContent=`air ${p(s.lastAmbientEff)}  body ${p(s.body)}`;const m=t.selectedSlot();Ue("held").textContent=m?Nt[m.itemId].name:"—",mv(t),Ue("warn-hot").classList.toggle("hidden",s.body<=Ko),Ue("warn-cold").classList.toggle("hidden",s.body>=fc),Ue("chip-reg").classList.toggle("hidden",!o?.regulated),Ue("chip-storm").classList.toggle("hidden",!o?.stormBroken),Ue("chip-nap").classList.toggle("hidden",!o?.napReady);const v=t.weight(),y=t.weightLimit(),x=Ue("weight");x.textContent=`${v.toFixed(1)} / ${y} kg`,x.classList.toggle("encumbered",v>y),Ue("vision-vignette").style.opacity=String(s.vision*.85);const _=s.water<5||s.health<30;Ue("vision-red").style.opacity=_?String(.35+.25*Math.sin(i/220)):"0"}const xo=s=>s===on||s===nn||s===en||s===He,Zh=4,_v=8.5;class ge{constructor(t,e,n,r,i){this.meta=t,this.settings=r,this.audio=i,this.seed=B1(t.seedStr||t.id),this.world=new r_(this.seed),this.survival=new u_(this.seed^7),this.quests=iv(e?.quest),this.renderer=new S_(n),this.player=new l_(this.world),this.timeSec=e?.time??Be*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===In&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===In&&this.renderer.addPointLight(6,35,0,"lamp");for(let o=-10;o<=8;o++)for(let l=-14;l<=14;l++)for(let h=28;h<=36;h++)this.world.get(o,h,l)===ki&&this.breakers.add(`${o},${h},${l}`);for(const[o,l]of this.world.deltas){const[h,a]=o.split(",").map(Number);for(const[c,d]of l){if(d!==ki)continue;const p=c%ee,m=(c-p)/ee,v=m%X;this.breakers.add(`${h*X+v},${p},${a*X+(m-v)/X}`)}}gv(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(r)}seed;world;survival;player;inv=new Ba;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];traderAt=new Map;tradeOffers=[];tradeCamp=null;stormToast=!1;mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null,regulator:null,light:null};lanternOn=!1;lanternAcc=0;regulatorAcc=0;collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;breakers=new Set;breakerTick=-1;stormShieldOn=!1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;waterAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(re(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===Mt&&(this.world.set(t,e,n,Le),this.chests.set(ge.chestKey([[t,e,n]]),[{itemId:"canister_full",x:0,y:0},{itemId:"canister_full",x:1,y:0},{itemId:"canister_full",x:2,y:0}]))}chestCluster(t,e,n){const r=new Set([`${t},${e},${n}`]),i=[[t,e,n]],o=[];for(;i.length;){const l=i.pop();this.world.get(l[0],l[1],l[2])===Le&&o.push(l);for(const[h,a,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const d=l[0]+h,p=l[1]+a,m=l[2]+c,v=`${d},${p},${m}`,y=this.world.get(d,p,m);r.has(v)||y!==Le&&y!==kr||(r.add(v),i.push([d,p,m]))}}return o}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=Nt[e.itemId],r=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const i of r){const o=i?n.h:n.w,l=i?n.w:n.h;for(let h=0;h+l<=t.h;h++)for(let a=0;a+o<=t.w;a++)if(t.fits(a,h,o,l))return e.x=a,e.y=h,e.rot=i||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new Ba;e.slots=[];const[n,r]=ge.chestDims(t);return e.w=n,e.h=r,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,r=Math.floor(t/ze),i=Math.floor(e/ze);for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){if(!n.townAt(r+o,i+l))continue;const h=n.townCenter(r+o,i+l);if(Math.abs(h.x-t)<=10&&Math.abs(h.z-e)<=10)return!0}return!1}townLoot(t,e){const n=i=>mt(t,e,this.seed+i),r=[{itemId:"canister_empty",count:2}];return n(11)<.7&&r.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&r.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&r.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&r.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&r.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&r.push({itemId:"door_inner",count:1}),n(22)<.25&&r.push({itemId:"bed",count:1}),n(23)<.5&&r.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),r}openChest(t,e,n){const r=this.chestCluster(t,e,n),i=ge.chestKey(r),o=this.chests.has(i);this.chests.has(i)||this.chests.set(i,[]);const l=this.emptyChestGrid(r.length);if(l.slots=this.chests.get(i),!o&&r.some(([h,,a])=>this.inTown(h,a))){for(const h of this.townLoot(r[0][0],r[0][2]))for(let a=0;a<h.count;a++){const c={itemId:h.itemId,x:0,y:0};ge.placeSlotFree(l,c)||this.dropEntity(h.itemId,1,2)}nt("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=l,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,r){const i=this.chestCluster(t,e,n),o=this.emptyChestGrid(i.length);for(const l of r)ge.placeSlotFree(o,l)||this.dropEntity(l.itemId,1,2);o.slots.length&&this.chests.set(ge.chestKey(i),o.slots),i.length>1&&nt(`Chests linked — one ${o.w}×${o.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==Le){if(fn(this.world.get(t.x,t.y,t.z))){for(const i of t.items)for(let o=0;o<i.count;o++)this.dropEntity(i.itemId,1,2);return}this.world.set(t.x,t.y,t.z,Le)}const e=this.chestCluster(t.x,t.y,t.z),n=ge.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const r=this.emptyChestGrid(e.length);r.slots=this.chests.get(n);for(const i of t.items)for(let o=0;o<i.count;o++){const l={itemId:i.itemId,x:0,y:0};ge.placeSlotFree(r,l)||this.dropEntity(i.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body;const e=[];this.inv.slots=t.inventory.slots.map(l=>{const h=l.count??1;for(let a=1;a<h;a++)e.push({itemId:l.itemId});return{itemId:l.itemId,x:l.x,y:l.y,rot:l.rot}});for(const l of e)this.giveOrDrop(l.itemId,1);this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const l of["backpack","head","body","regulator","light"]){const h=t.equip?.[l];h&&(this.equip[l]={itemId:h,x:0,y:0,charges:t.equip?.charges?.[l]})}this.beaconMarks=t.beaconMarks??[],this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let r=0;const i=[];this.world.gen.canisters.forEach(l=>{if(l.buried&&!n.has(r)){const h=Math.round(re(this.seed,l.x,l.z));i.push({id:this.entitySeq++,x:l.x+.5,y:h,z:l.z+.5,itemId:"canister_full",buried:l.buried,buriedAt:l.buried?[l.x,h,l.z]:void 0,srcIndex:r})}r++});for(const l of t.entities){const h=l.count??1;for(let a=0;a<h;a++)i.push({id:this.entitySeq++,x:l.x,y:l.y,z:l.z,itemId:l.itemId,age:l.age})}this.entities=i,this.chests=new Map((t.chests??[]).map(l=>{const h=this.emptyChestGrid(l.cells.split("|").length);for(const a of l.slots){h.slots.push({itemId:a.itemId,x:a.x,y:a.y,rot:a.rot});for(let c=1;c<(a.count??1);c++){const d={itemId:a.itemId,x:0,y:0};ge.placeSlotFree(h,d)||this.giveOrDrop(a.itemId,1)}}return[l.cells,h.slots]}));const o=[];for(const l of t.caches){const h=l.kind??"death";if(h==="chest"){o.push(l);continue}const a={id:this.entitySeq++,x:l.x,y:l.y,z:l.z,kind:h,items:l.items.map(c=>({...c}))};this.caches.push(a)}this.campCharges=new Map(Object.entries(t.campfires??{}).map(([l,h])=>[l,h])),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep);for(const l of o)this.adoptLegacyChest(l);this.pods=(t.pods??[]).map(l=>({...l,ringEid:this.renderer.addGroundRing(l.x+.5,Math.round(re(this.seed,l.x,l.z)),l.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(l.x+.5,Math.round(re(this.seed,l.x,l.z)),l.z+.5,13382434)})),this.won=!!t.won;for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[d,p]of h){if(p!==In&&p!==sn)continue;const m=Math.floor(d/(X*ee)),v=d%(X*ee);this.renderer.addPointLight(a*X+m,v%ee,c*X+Math.floor(v/ee),p===In?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId,regulator:this.equip.regulator?.itemId,light:this.equip.light?.itemId,charges:{regulator:this.equip.regulator?.charges,light:this.equip.light?.charges}},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,age:Math.floor(t.age??0)})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/Be);this.timeSec=(e+t)*Be}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new ov(this),this.startCine(rv,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),nt("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,r=n.find(h=>e.t<h.t1)??n[n.length-1];if(r.openDoor&&e.t>=r.openDoor.t){const{x:h,y:a,z:c}=r.openDoor;if(this.world.get(h,a,c)!==je){this.world.set(h,a,c,je);for(const d of[-1,1])xo(this.world.get(h,a+d,c))&&this.world.set(h,a+d,c,je);this.audio.door()}}const i=Math.min(1,Math.max(0,(e.t-r.t0)/(r.t1-r.t0))),o=i*i*(3-2*i),l=this.renderer.camera;if(l.position.set(r.from[0]+(r.to[0]-r.from[0])*o,r.from[1]+(r.to[1]-r.from[1])*o,r.from[2]+(r.to[2]-r.from[2])*o),l.lookAt(r.look[0],r.look[1],r.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const h=n[n.length-1];this.player.yaw=Math.atan2(-(h.look[0]-h.to[0]),-(h.look[2]-h.to[2])),this.player.pitch=0;const a=this.renderer.camera;a.position.copy(this.player.eye()),a.rotation.order="YXZ",a.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&nt("Guest worlds are never saved."),!1;const e=Zu(this.meta,this.snapshot());return t&&nt(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){Qu(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/Be)}questBump(t,e=1){if(this.tut)return;const n=sv(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}nt(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&nt("Power runs through the wreck. Four dead engines left — find them a way to burn."),this.renderQuest(),this.saveNow(!0)}columnTop(t,e){for(let n=ee-1;n>=0;n--)if(this.world.get(t,n,e))return n;return Math.round(re(this.seed,t,e))}crashPod(t,e){const n=this.player.pos,r=Math.round(n.x)+2,i=Math.round(n.z)+1,o=this.columnTop(r,i),l=this.renderer.addGroundRing(r+.5,o,i+.5,13382434,1.1),h=this.renderer.addBeam(r+.5,o,i+.5,13382434);this.pods.push({x:r,z:i,t:3,itemId:t,n:e,ringEid:l,beamEid:h}),this.audio.warn(),setTimeout(()=>{this.running&&nt("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const r=this.columnTop(n.x,n.z);this.caches.push({id:this.entitySeq++,x:n.x,y:r,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,r+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),nt("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){Kh(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const i=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;i!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=i,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else Kh(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const r=new Map;if(this.equip.head?.itemId==="visor"){for(const i of this.caches)i.items.length&&r.set(`c${i.id}`,[i.x+.5,i.y,i.z+.5,i.kind==="reward"?14197322:13386803]);for(const i of this.chests.keys()){const[o,l,h]=i.split(";")[0].split(",").map(Number);r.set(`x${i}`,[o+.5,l,h+.5,15124842])}}for(const[i,o]of this.visorBeams)r.has(i)||(this.renderer.removeEntityMesh(o),this.visorBeams.delete(i));for(const[i,[o,l,h,a]]of r)this.visorBeams.has(i)||this.visorBeams.set(i,this.renderer.addBeam(o,l,h,a,10))}waypointTarget(){const t=_r(this.quests);if(!t)return null;const e=this.player.pos,n=(i,o)=>Math.round(re(this.seed,i,o))+1,r=i=>{let o=i[0],l=1/0;for(const h of i){const a=(h.x-e.x)**2+(h.z-e.z)**2;a<l&&(l=a,o=h)}return o};switch(t.kind){case"oasis":{const i=r(this.world.gen.oases);return i?{name:"Oasis",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"water_home":case"finish":{const i=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(o=>this.world.get(o.x,o.y,o.z)===Tn);return i?{name:"Save Beacon",x:i.x+.5,y:i.y,z:i.z+.5}:null}case"wreck":{const i=this.world.gen.secondShip;return{name:"Second Wreck",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"core":{const i=this.world.gen.secondShip;return{name:"Engine Core",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"tool":{const i=[];this.world.get(0,31,-3)===Ze&&i.push({x:0,y:31,z:-3});for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[d,p]of h){if(p!==Ze)continue;const m=d%ee,v=Math.floor(d/ee)%X,y=Math.floor(d/(ee*X));i.push({x:a*X+y,y:m,z:c*X+v})}}if(!i.length)return null;const o=r(i);return{name:"Crafting Bench",x:o.x+.5,y:o.y,z:o.z+.5}}case"supplies":{const i=this.world.gen.nearestTown(e.x,e.z);return i?{name:"Town",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"farm":{if(!this.crops.size)return null;let i=null,o=1/0;for(const c of this.crops.keys()){const[d,,p]=c.split(",").map(Number),m=(d+.5-e.x)**2+(p+.5-e.z)**2;m<o&&(o=m,i=c)}const[l,h,a]=i.split(",").map(Number);return{name:"Your Farm",x:l+.5,y:h+1,z:a+.5}}default:return null}}questFrame(){const t=_r(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===Tn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}questJump(t){this.tut&&this.tut.finish();const e=Math.max(0,Math.min(gi.length,t|0));this.quests.i=e,this.questShown="",this.renderQuest(),nt(e>=gi.length?"Quest chain skipped — every quest is done.":`Skipped to “${gi[e].title}”.`)}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=_r(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],r=e.id+":"+n;r!==this.questShown&&(this.questShown=r,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,r,i=window)=>{i.addEventListener(n,r),this.bound.set(n+(i===window?"":":el"),r)};t("keydown",n=>{const r=n;if(!r.repeat){if(this.keys.add(r.code),r.code==="KeyE"&&this.act(),r.code==="KeyQ"&&this.useItem(),r.code==="KeyX"&&this.surge(),r.code==="KeyT"&&this.toggleLantern(),r.code==="KeyI"&&this.toggleInv(),r.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=i.selectedSlot();o&&!i.rotate(o)&&(nt("No room to rotate."),this.audio.error())}this.renderInv()}if(r.code==="KeyR"&&!this.ui&&!this.paused&&!this.cine&&!this.liftoff){const i=this.inv.selectedSlot();i&&(this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.dropEntity(i.itemId,1,1),this.renderHeld(),this.audio.place())}if(r.code==="Escape"){if(this.liftoff)return;if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(r.code==="KeyP"&&!this.liftoff&&this.escape(!0),r.code.startsWith("Digit")){const i=Number(r.code.slice(5)),o=this.hotbarItems();if(i>=1&&i<=o.length){const l=o[i-1];this.inv.selectedSlot()?.itemId===l?this.inv.selected=-1:this.selectItem(l),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const r=n.target.closest("[data-hb]");if(!r)return;const i=this.hotbarItems()[Number(r.dataset.hb)];i&&(this.inv.selectedSlot()?.itemId===i?this.inv.selected=-1:this.selectItem(i),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const r=n;r.button===0?(this.mouseDown=!0,this.breakMsg=!1):r.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const r=n;this.player.yaw-=r.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*r.movementY*.0022*this.settings.sens,this.player.pitch=di.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>{this.ui||this.cycleItem(n.deltaY>0?1:-1)}),t("contextmenu",n=>n.preventDefault());else{let n=-1,r=0,i=0;e.addEventListener("touchstart",m=>{if(n<0){const v=m.changedTouches[0];n=v.identifier,r=v.clientX,i=v.clientY}m.preventDefault()}),e.addEventListener("touchmove",m=>{for(const v of m.changedTouches)v.identifier===n&&(this.player.yaw-=(v.clientX-r)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(v.clientY-i)*.005*this.settings.sens,this.player.pitch=di.clamp(this.player.pitch,-1.55,1.55),r=v.clientX,i=v.clientY);m.preventDefault()});const o=m=>{for(const v of m.changedTouches)v.identifier===n&&(n=-1)};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),document.addEventListener("contextmenu",m=>m.preventDefault());const l=document.getElementById("stick"),h=document.getElementById("knob");let a=-1;const c=m=>{const v=l.getBoundingClientRect();for(const y of m.changedTouches)if(y.identifier===a){const x=y.clientX-(v.left+v.width/2),_=y.clientY-(v.top+v.height/2),R=Math.max(1,Math.hypot(x,_)),T=Math.min(R,v.width/2)/(v.width/2);this.stick.x=x/R*T,this.stick.y=_/R*T,h.style.left=38+x/R*T*38+"px",h.style.top=38+_/R*T*38+"px"}};l.addEventListener("touchstart",m=>{a=m.changedTouches[0].identifier,c(m),m.preventDefault()}),l.addEventListener("touchmove",m=>{c(m),m.preventDefault()});const d=()=>{this.stick.x=0,this.stick.y=0,a=-1,h.style.left="38px",h.style.top="38px"};l.addEventListener("touchend",d),l.addEventListener("touchcancel",d);const p=(m,v,y)=>{const x=document.getElementById(m);x.addEventListener("touchstart",_=>{_.preventDefault(),v()}),x.addEventListener("touchend",_=>{_.preventDefault(),y&&y()}),x.addEventListener("touchcancel",()=>{y&&y()})};p("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),p("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),p("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),p("m-place",()=>this.place()),p("m-act",()=>this.act()),p("m-use",()=>this.useItem()),p("m-surge",()=>this.surge()),p("m-lamp",()=>this.toggleLantern()),p("m-next",()=>this.cycleItem(1)),p("m-inv",()=>this.toggleInv()),p("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=r=>!document.getElementById(r).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),document.getElementById("inv-bin").onclick=()=>this.binDiscard()}binDiscard(){if(this.temp){const n=Nt[this.temp.itemId].name;this.temp=null,this.tempOrigin=null,nt(`${n} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld();return}const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,e=t.selectedSlot();if(!e){nt("Select an item, then send it to the Bin."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),nt(`${Nt[e.itemId].name} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld()}overBin(t,e){const n=document.getElementById("inv-bin").getBoundingClientRect();return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),r=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,r),this.renderer.rebuildDirty(this.world);const i=this.renderer.updateSky(this.timeSec,this.player.pos),o=Eo(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),l=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let d=this.stick.x,p=-this.stick.y;this.keys.has("KeyW")&&(p+=1),this.keys.has("KeyS")&&(p-=1),this.keys.has("KeyA")&&(d-=1),this.keys.has("KeyD")&&(d+=1);const m=this.keys.has("Space")||this.mobileJump;if(this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,d,p,m,this.speedMul,l),this.player.lastFallDist>0){const T=this.player.lastFallDist;if(this.player.lastFallDist=0,!this.player.inWater&&T>Zh){const S=1-(this.equip.body?Nt[this.equip.body.itemId].armor??0:0),b=(T-Zh)*_v*S;this.survival.hurt(b,"fall"),$h(),this.audio.hurt(),this.survival.health>0&&b>=10&&nt("You hit the ground hard.")}}const y=(this.timeSec%Be/Be-.25)*Math.PI*2,x=i.sunElev>0?(()=>{const T=1/Math.hypot(Math.cos(y),i.sunElev,.4);return{x:Math.cos(y)*T,y:i.sunElev*T,z:.4*T}})():null;this.stormShieldTick(),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(d!==0||p!==0),overencumbered:l,biome:o,tSec:this.timeSec,sunElev:i.sunElev,sunDir:x,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos),regulator:(this.equip.regulator?.charges??0)>0,terrainH:(T,S)=>re(this.seed,T,S),stormShield:this.stormShieldOn,stormMul:this.equip.body&&Nt[this.equip.body.itemId].stormResist?.25:1}),this.renderer.setStorm(this.survival.storm,this.survival.lastOpenSky),this.audio.setStorm(this.survival.storm),this.survival.storm>.5&&!this.stormToast?(this.stormToast=!0,nt("A Sandstorm rolls in — get out of the open."),this.audio.error()):this.survival.storm<.3&&this.stormToast&&(this.stormToast=!1,nt("The Sandstorm passes."));const _=this.equip.regulator;_&&(_.charges??0)>0&&(this.regulatorAcc+=t,this.regulatorAcc>=2880&&(this.regulatorAcc=0,_.charges=(_.charges??0)-1,_.charges<=0?(_.charges=0,nt("The Coolant Cell in your Regulator is spent."),this.audio.error()):nt("A Coolant Cell has been used up.")));const R=this.equip.light;this.lanternOn&&R&&((R.charges??0)<=0?this.toggleLantern():(this.lanternAcc+=t,this.lanternAcc>=240&&(this.lanternAcc=0,R.charges=(R.charges??0)-1,(R.charges??0)<=0&&(this.toggleLantern(),nt("The Head Lantern gutters out — refuel it at a Campfire."))))),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const d=this.renderer.camera;d.position.copy(this.player.eye()),d.rotation.order="YXZ",d.rotation.set(this.player.pitch,this.player.yaw,0),this.liftoff&&(d.position.x+=(Math.random()-.5)*.14,d.position.y+=(Math.random()-.5)*.1,d.position.z+=(Math.random()-.5)*.14)}this.liftoffFrame(t);const h=this.raycastTarget();this.renderer.setPlayerLight(this.lanternOn?this.player.eye():null),this.renderer.setHighlight(this.ui||this.cine?null:h?.hit??null),dv(this.ui||this.cine?null:this.promptFor(h)),pv(this.ui||this.cine||!h?.hit?null:O1(this.world.get(h.hit.x,h.hit.y,h.hit.z))),fv(this.player.headUnder);for(let d=this.entities.length-1;d>=0;d--){const p=this.entities[d];if(!p.buried&&(p.age=(p.age??0)+t,p.age>=300)){this.renderer.removeEntityMesh(p.id),this.entities.splice(d,1);continue}if(p.fall!==void 0){const v=Math.min(p.fall,14*t);p.y-=v,p.fall-=v,p.fall<=.001&&(p.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(p.id,[p.x,p.y,p.z])}const m=this.renderer.entityMesh(p.id);p.buried&&p.buriedAt&&this.world.get(p.buriedAt[0],p.buriedAt[1],p.buriedAt[2])!==Mt?m&&this.renderer.removeEntityMesh(p.id):m||this.renderer.addEntityMesh(p.id,[p.x,p.y,p.z],parseInt(Nt[p.itemId].color.slice(1),16))}for(const d of this.caches){const p=this.renderer.entityMesh(d.id);!p&&d.items.length?(this.renderer.addEntityMesh(d.id,this.cacheMeshPos(d),this.cacheColor(d),.7),d.markerEid=this.renderer.addGroundRing(d.x+.5,d.y,d.z+.5,d.kind==="reward"?14197322:13382434,1.4),d.kind==="death"&&(d.beamEid=this.renderer.addBeam(d.x+.5,d.y,d.z+.5,13382434))):p&&!d.items.length&&(this.renderer.removeEntityMesh(d.id),d.markerEid!==void 0&&(this.renderer.removeEntityMesh(d.markerEid),d.markerEid=void 0),d.beamEid!==void 0&&(this.renderer.removeEntityMesh(d.beamEid),d.beamEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const a=this.survival.surgeCooldown>0;for(const d of["surge-btn","m-surge"]){const p=document.getElementById(d);p&&p.disabled!==a&&(p.disabled=a)}jh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=Be}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.waterAcc+=t,this.waterAcc>.4&&(this.waterAcc=0,this.world.processWater()),this.audio.setDay(i.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const c=this.prevHp-this.survival.health;if(c>0){const d=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(c>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,$h(),(c>=2||d)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),r=Math.floor(t.y),i=Math.floor(t.z);const o=new F(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),l=new F(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),h=(p,m)=>m>0?Math.ceil(p)-p||1:m<0?p-Math.floor(p)||1:1/0,a=new F(h(t.x,o.x)*l.x,h(t.y,o.y)*l.y,h(t.z,o.z)*l.z);let c=new F(n,r,i),d=null;for(let p=0;p<80;p++){const m=this.world.get(n,r,i);if(Dn(m)){if(d||(d={x:n,y:r,z:i}),m===Ve)return{hit:{x:n,y:r,z:i},water:d,face:new F(c.x-n,c.y-r,c.z-i)}}else if(m!==Mt&&m!==Ve)return{hit:{x:n,y:r,z:i},water:d,face:new F(c.x-n,c.y-r,c.z-i)};if(c.set(n,r,i),a.x<a.y&&a.x<a.z?(n+=o.x,a.x+=l.x):a.y<a.z?(r+=o.y,a.y+=l.y):(i+=o.z,a.z+=l.z),new F(n-t.x,r-t.y,i-t.z).length()>5.5)break}return{hit:null,water:d,face:new F(0,0,0)}}promptFor(t){if(this.nearestTrader())return"E: Trade with the Trader";if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Le)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===on||n===nn||n===en||n===He)return"E: Open door";if(n===je||n===Qe)return"E: Close door";if(n===Tn)return"E: Save game (respawn point)";if(n===Ze||n===mn)return"E: Craft";if(n===Zs)return"E: Forge armour and gear";if(n===sn)return this.canHeatWater(t.hit.x,t.hit.y,t.hit.z)?"E: Heat the water":"E: Smelt";if(n===Fi)return"E: Draw neutral air (37 °C)";if(n===Oi)return this.inv.has("thruster_nozzle",1)?"E: Install Thruster Nozzle":null}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new F(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=this.inv.selectedSlot();if(e&&Nt[e.itemId].instaBreak)return{ok:!0,time:.01};const n=jn[t];if(n.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const r=e?Nt[e.itemId].tool:void 0;return n.tool!==null?!r||r.type!==n.tool?{ok:!1,time:0,why:`need a ${n.tool}`}:r.tier<n.minTier?{ok:!1,time:0,why:`need a tier ${n.minTier} ${n.tool}`}:{ok:!0,time:n.breakTime*Math.pow(.55,r.tier-1)}:{ok:!0,time:n.breakTime*(n.fastTool&&r&&r.type===n.fastTool?Math.pow(.55,r.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const h=this.inv.selectedSlot(),a=h?Nt[h.itemId]:null,c=a?.weapon;e.hp-=c?c.dmg:3+(a?.tool?.tier??0),this.audio.thud();const d=e.x-this.player.pos.x,p=e.z-this.player.pos.z,m=Math.max(.2,Math.hypot(d,p)),v=c?1.1:.6;this.mobCanStand(e,e.x+d/m*v,e.z+p/m*v)&&(e.x+=d/m*v,e.z+=p/m*v,e.y=this.mobGround(e,e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:r,y:i,z:o}=n.hit,l=this.world.get(r,i,o);if(!this.breaking||this.breaking.x!==r||this.breaking.y!==i||this.breaking.z!==o){const h=this.canBreakWith(l);if(!h.ok){h.why&&!this.breakMsg&&(this.breakMsg=!0,nt(h.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${h.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:r,y:i,z:o,need:h.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(r,i,o),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const r=this.world.get(t,e,n);if(this.questBump("mine"),xo(r)||r===je||r===Qe){const o=r===en||r===He||r===Qe;this.world.set(t,e,n,Mt);for(const l of[-1,1]){const h=this.world.get(t,e+l,n);(xo(h)||h===je||h===Qe)&&this.world.set(t,e+l,n,Mt)}this.giveOrDrop(o?"door_inner":"door",1),this.audio.blockBreak();return}if(r===Tn){this.world.set(t,e,n,Mt),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===t&&o.y===e&&o.z===n)),nt("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(r===gn){this.world.set(t,e,n,Mt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===mi){this.world.set(t,e,n,Mt),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===Yn){this.world.set(t,e,n,Mt),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===Pn||r===$n||r===dn||r===Hn){this.world.set(t,e,n,r===dn||r===Hn?Ln:Mt),this.crops.delete(`${t},${e},${n}`),r===Pn&&this.giveOrDrop("dune_melon",1),r===dn&&(this.giveOrDrop("wheat",1),this.giveOrDrop("seed_wheat",1)),r===$n&&this.giveOrDrop("seed_melon",1),r===Hn&&this.giveOrDrop("seed_wheat",1),this.audio.blockBreak();return}if(r===bi){this.world.set(t,e,n,Mt),this.giveOrDrop("kindling",1),mt(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===rn||r===_n){this.world.set(t,e,n,Mt);const o=t+(r===rn?1:-1),l=this.world.get(o,e,n);(l===rn||l===_n)&&this.world.set(o,e,n,Mt),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(r===sn&&this.campCharges.delete(`${t},${e},${n}`),r===Le){const o=this.chestCluster(t,e,n),l=this.chests.get(ge.chestKey(o))??[];this.chests.delete(ge.chestKey(o)),this.world.set(t,e,n,Mt);const h=o.filter(([d,p,m])=>d!==t||p!==e||m!==n),a=[];for(const d of h){const p=this.chestCluster(d[0],d[1],d[2]),m=ge.chestKey(p);a.some(([v])=>v===m)||a.push([m,this.emptyChestGrid(p.length)])}let c=!1;for(const d of l)a.some(([,p])=>ge.placeSlotFree(p,d))||(this.dropEntity(d.itemId,1,2),c=!0);for(const[d,p]of a)p.slots.length&&this.chests.set(d,p.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),c&&nt("The remaining chests were full — some contents fell to the sand.");return}if(r===ji){this.world.set(t,e,n,Mt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(r===Ze||r===mn){const o=this.benchPeer(t,e,n);this.world.set(t,e,n,Mt),o&&this.world.set(o[0],o[1],o[2],Mt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(r===In||r===sn||r===$i)&&this.renderer.removePointLight(t,e,n),r===ki&&this.breakers.delete(`${t},${e},${n}`),this.world.set(t,e,n,Mt);const i=this.blockItemId(r);i&&this.giveOrDrop(i,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),r=Math.floor(e),i=Math.max(30,Math.round(re(this.seed,n,r))+8);for(let o=i;o>=0;o--){const l=this.world.get(n,o,r);if(l!==Mt&&jn[l].solid)return o+1}return-1}mobGround(t,e,n){if(t.kind!=="scorpion"&&t.kind!=="wurm")return this.mobSurface(e,n);const r=Math.floor(e),i=Math.floor(n);for(let o=Math.floor(t.y);o>=0;o--){const l=this.world.get(r,o,i);if(l!==Mt&&jn[l].solid)return o+1}return-1}mobCanStand(t,e,n){const r=this.mobGround(t,e,n);return r<0||r>t.y+1.01?!1:this.world.get(Math.floor(e),r,Math.floor(n))===Mt}spawnMob(t,e,n,r){const i=Q_(t);i.group.position.set(e,n,r),i.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(i.group),this.mobs.push({kind:t,hp:_o[t].hp,x:e,y:n,z:r,yaw:i.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:i})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(n=>n!==t);const e=_o[t.kind];e.drops.forEach((n,r)=>{const i=e.dropChance?.[r]??1;(i>=1||Math.random()<i)&&this.giveOrDrop(n.itemId,n.count)}),nt(`${e.name} killed.`)}topUpMobs(){const t={snake:4,rat:8,scorpion:4,wurm:1,trader:0,vulture:3,tortoise:2,fennec:2},e={snake:0,rat:0,scorpion:0,wurm:0,trader:0,vulture:0,tortoise:0,fennec:0},n=this.player.pos;this.mobs=this.mobs.filter(i=>i.kind!=="trader"&&Math.abs(i.x-n.x)+Math.abs(i.z-n.z)>190?(this.renderer.removeSceneObject(i.vis.group),!1):!0);for(const i of this.mobs)e[i.kind]++;const r=this.player.pos;for(const i of["snake","rat","scorpion","wurm","vulture","tortoise","fennec"]){const o=i==="scorpion"||i==="wurm";if(!(o&&r.y>27))for(;e[i]<t[i];){e[i]++;const l=Math.random()*Math.PI*2,h=30+Math.random()*30,a=Math.floor(r.x+Math.cos(l)*h)+.5,c=Math.floor(r.z+Math.sin(l)*h)+.5;if(o){const d=i==="wurm"?5:8,p=i==="wurm"?16:24,m=this.caveSpot(a,c,d,p);if(m<0)continue;this.spawnMob(i,a,m,c)}else{if(Math.hypot(a,c)<24||this.beaconMarks.some(m=>Math.hypot(m.x+.5-a,m.z+.5-c)<16))continue;const d=yr(this.seed).nearestCamp(a,c);if(d&&Math.hypot(d.x-a,d.z-c)<34)continue;const p=this.mobSurface(a,c);if(p<=1||this.world.get(Math.floor(a),p,Math.floor(c))!==Mt||this.world.get(Math.floor(a),p+1,Math.floor(c))!==Mt)continue;this.spawnMob(i,a,p,c)}}}this.ensureTraders()}ensureTraders(){const t=yr(this.seed),e=this.player.pos,n=110,r=Math.floor((e.x-n)/Te),i=Math.floor((e.x+n)/Te),o=Math.floor((e.z-n)/Te),l=Math.floor((e.z+n)/Te);for(let h=r;h<=i;h++)for(let a=o;a<=l;a++){if(!t.campAt(h,a))continue;const c=t.campCenter(h,a);if(Math.hypot(c.x-e.x,c.z-e.z)>n)continue;const d=h+","+a,p=this.traderAt.get(d);if(p&&this.mobs.includes(p))continue;const m=n_(c),v=this.mobSurface(m.x,m.z);v<=1||(this.spawnMob("trader",m.x,v,m.z),this.traderAt.set(d,this.mobs[this.mobs.length-1]))}if(this.traderAt.size)for(const[h,a]of this.traderAt)this.mobs.includes(a)||this.traderAt.delete(h)}nearestTrader(){const t=this.player.pos;let e=null,n=3.6;for(const r of this.mobs){if(r.kind!=="trader")continue;const i=Math.hypot(r.x-t.x,r.z-t.z);i<n&&(n=i,e=r)}return e}openTrade(t){const e=yr(this.seed).nearestCamp(t.x,t.z);this.tradeCamp=e?{x:e.x,z:e.z}:{x:t.x,z:t.z},this.tradeOffers=tv(this.seed,this.tradeCamp.x,this.tradeCamp.z,this.dayNumber()),this.ui="trade",this.unlockPointer(),this.renderTrade(),document.getElementById("ui-trade").classList.remove("hidden"),this.audio.pickup()}renderTrade(){const t=document.getElementById("trade-offers");t.innerHTML="";for(let e=0;e<this.tradeOffers.length;e++){const n=this.tradeOffers[e],r=document.createElement("div");r.className="trade-row";const i=l=>l.map(h=>`<span class="trade-item">${Nt[h.itemId].name}${h.count>1?" ×"+h.count:""}</span>`).join(" + ");r.innerHTML=`<span class="trade-side want">${i(n.want)}</span><span class="trade-arrow">→</span><span class="trade-side give">${i(n.give)}</span>`;const o=document.createElement("button");o.textContent="Trade",o.onclick=()=>this.trade(e),r.appendChild(o),t.appendChild(r)}document.getElementById("trade-note").textContent=`Day ${this.dayNumber()} — the Trader restocks the table at every dawn.`}trade(t){if(this.ui!=="trade")return;const e=this.tradeOffers[t];for(const n of e.want)if(!this.inv.has(n.itemId,n.count)){nt(`You don't have ${n.count} × ${Nt[n.itemId].name}.`),this.audio.error();return}for(const n of e.want)this.inv.removeItem(n.itemId,n.count);for(const n of e.give)this.giveOrDrop(n.itemId,n.count);nt("Traded."),this.audio.drink(),this.renderTrade()}caveSpot(t,e,n,r){const i=Math.floor(t),o=Math.floor(e);for(let l=r;l>=n;l--){if(this.world.get(i,l,o)!==Mt||this.world.get(i,l-1,o)===Mt||this.world.get(i,l+1,o)!==Mt)continue;let h=-1;for(let a=1;a<=3;a++)if(fn(this.world.get(i,l+a,o))){h=a;break}if(!(h<0))return l}return-1}meleeMob(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),r=n?Nt[n.itemId].weapon?.reach??3.2:3.2,i=this.raycastTarget(),o=i?.hit?Math.hypot(i.hit.x+.5-t.x,i.hit.y+.5-t.y,i.hit.z+.5-t.z):1/0;let l=null,h=1/0;for(const a of this.mobs){if(a.kind==="trader")continue;const c=_o[a.kind],d=a.x-t.x,p=a.y+c.height/2-t.y,m=a.z-t.z,v=d*e.x+p*e.y+m*e.z;if(v<.2||v>r||v>o)continue;const y=t.x+e.x*v-a.x,x=t.y+e.y*v-(a.y+c.height/2),_=t.z+e.z*v-a.z;y*y+x*x+_*_>(c.hitR+.3)*(c.hitR+.3)||v<h&&(h=v,l=a)}return l}columnClear(t,e,n,r){const i=Math.floor(t),o=Math.floor(e);for(let l=Math.floor(n);l<=Math.floor(r);l++){const h=this.world.get(i,l,o);if(h!==Mt&&h!==Ve)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const r of this.mobs.slice()){const i=_o[r.kind];if(r.kind==="trader"){r.vis.animate(n,0);continue}const o=e.x-r.x,l=e.z-r.z,h=Math.hypot(o,l);if(h>110){this.renderer.removeSceneObject(r.vis.group),this.mobs=this.mobs.filter(x=>x!==r);continue}let a=0,c=0;const d=this.columnClear(r.x,r.z,r.y+.2,e.y+1.4),p=r.kind==="vulture"&&this.survival.health<60,m=r.kind==="vulture"?p?i.aggroR:0:i.aggroR,v=r.kind==="vulture"&&!p?i.fleeR:r.kind==="vulture"?0:i.fleeR;if(m>0&&h<m&&h>.01&&d){if(a=o/h*i.speed,c=l/h*i.speed,r.yaw=Math.atan2(a,c),h<1.2+i.hitR&&r.biteCd<=0){r.biteCd=i.biteCd;const x=1-(this.equip.body?Nt[this.equip.body.itemId].armor??0:0);this.survival.hurt(i.biteDmg*x,`${i.name.toLowerCase()} bite`),nt(x<1?`A ${i.name.toLowerCase()} bites you — the armour soaks some of it.`:`A ${i.name.toLowerCase()} bites you!`)}}else v>0&&h<v&&h>.01?(a=-o/h*i.speed,c=-l/h*i.speed,r.yaw=Math.atan2(a,c)):(r.wanderT-=t,r.wanderT<=0&&(r.wanderT=2+Math.random()*4,r.wanderYaw=Math.random()*Math.PI*2,r.wanderOn=Math.random()<.55),r.wanderOn&&(a=Math.sin(r.wanderYaw)*i.speed*.35,c=Math.cos(r.wanderYaw)*i.speed*.35,r.yaw=r.wanderYaw));r.biteCd-=t;let y=0;if(a!==0||c!==0){const x=r.x+a*t,_=r.z+c*t;this.mobCanStand(r,x,_)?(r.x=x,r.z=_,y=1):r.wanderYaw=r.yaw=Math.random()*Math.PI*2}r.y=this.mobGround(r,r.x,r.z),r.vis.group.position.set(r.x,r.y,r.z),r.vis.group.rotation.y=r.yaw,r.vis.animate(n,y)}}gridFits(t,e){const n=new Ba;n.slots=[],n.w=t,n.h=e;for(const r of this.inv.slots)if(!ge.placeSlotFree(n,{...r,x:0,y:0}))return!1;return!0}bagSize(){return(this.equip.backpack?Nt[this.equip.backpack.itemId].bag:null)??{w:3,h:4,kg:0}}applyEquip(){const t=this.bagSize();(this.inv.w!==t.w||this.inv.h!==t.h)&&this.inv.setBackpack(t.w,t.h,t.kg),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=Nt[t.itemId];if(!e.equip)return;const n=e.equip,r=this.equip[n];if(r&&this.inv.addItem(r.itemId,1)>0){nt("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),n==="light"&&(this.lanternOn=!1),(n==="light"||n==="regulator")&&t.charges===void 0&&(t.charges=0),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),nt(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(!e)return;const n=t==="backpack"?{w:3,h:4}:this.bagSize();if(!this.gridFits(n.w,n.h)){nt("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,t==="light"&&(this.lanternOn=!1),this.applyEquip(),this.inv.addItem(e.itemId,1),this.audio.place(),nt(`${Nt[e.itemId].name} taken off.`),this.renderInv()}benchPeer(t,e,n){for(const[r,i]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.world.get(t+r,e,n+i);if(o===Ze||o===mn)return[t+r,e,n+i]}return null}blockItemId(t){return Qn[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),nt(`No room: dropped ${Nt[t].name}`))}dropEntity(t,e,n=0){const r=this.player.pos,i=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),l=(d,p)=>{const m=Math.floor(r.x+d),v=Math.floor(r.z+p);return!fn(this.world.get(m,Math.floor(r.y),v))&&!fn(this.world.get(m,Math.floor(r.y+1),v))},h=[[i*1.8,o*1.8],[-i*1.8,-o*1.8],[o*1.8,-i*1.8],[-o*1.8,i*1.8],[0,0]],[a,c]=h.find(([d,p])=>l(d,p))??[0,0];for(let d=0;d<e;d++){const p=d===0?0:.3*Math.sin(d*2.4),m=d===0?0:.3*Math.cos(d*2.4);this.entities.push({id:this.entitySeq++,x:r.x+a+p,y:r.y+.35,z:r.z+c+m,itemId:t,repickAt:a===0&&c===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=Nt[t.itemId];if(e.block===void 0){nt("Not a placeable block"),this.audio.error();return}if(!jn[e.block].placeable){nt(`${e.name} is raw material, not a block to place.`),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const r=n.hit.x+n.face.x,i=n.hit.y+n.face.y,o=n.hit.z+n.face.z,l=this.world.get(r,i,o);if(l!==Mt&&!(Dn(l)&&l!==Ve))return;if(fn(e.block)){const c=this.player.pos;if(r+1>c.x-.3&&r<c.x+.3&&o+1>c.z-.3&&o<c.z+.3&&i+1>c.y&&i<c.y+1.8)return}let h=[];if(e.block===Le){const c=new Set;for(const[d,p,m]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(r+d,i+p,o+m)!==Le)continue;const v=ge.chestKey(this.chestCluster(r+d,i+p,o+m));c.has(v)||(c.add(v),h.push(...this.chests.get(v)??[]),this.chests.delete(v))}}let a=null;if(e.block===Ze){const c=this.player.pos;for(const[d,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const m=r+d,v=o+p;if(this.world.get(m,i,v)===Mt&&!(m+1>c.x-.3&&m<c.x+.3&&v+1>c.z-.3&&v<c.z+.3&&i+1>c.y&&i<c.y+1.8)){a=[m,i,v];break}}if(!a){nt("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(e.block===$n||e.block===Hn||e.block===gn||e.block===Yn){const c=this.world.get(r,i-1,o);if(!(e.block===Yn?c===Jn||c===Ln||c===ai:c===Ln||e.block===gn&&(c===Zn||c===vn||c===Jn))){nt(e.block===Yn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(r,i,o,e.block),a&&this.world.set(a[0],a[1],a[2],mn),e.block===on&&this.world.get(r,i+1,o)===Mt&&this.world.set(r,i+1,o,nn),e.block===en&&this.world.get(r,i+1,o)===Mt&&this.world.set(r,i+1,o,He),e.block===rn&&this.world.get(r+1,i,o)===Mt&&this.world.set(r+1,i,o,_n),(e.block===$n||e.block===Hn)&&(this.crops.set(`${r},${i},${o}`,0),this.tut?.notify("plant")),e.block===Yn&&(this.trees.set(`${r},${i},${o}`,0),this.tut?.notify("plant"),nt("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===ji)if(this.beaconAdjacent(r,i,o)){const c=_r(this.quests);c&&c.kind==="finish"&&!this.tut?this.questBump("finish"):nt("The Core hums next to the beacon. Power runs — now wake the wingtip engines.")}else nt("The relay needs the Core right next to a Save Beacon.");e.block===In?this.renderer.addPointLight(r,i,o,"lamp"):e.block===sn?this.renderer.addPointLight(r,i,o,"fire"):e.block===$i&&this.renderer.addPointLight(r,i,o,"fire"),e.block===ki&&this.breakers.add(`${r},${i},${o}`),e.block===Le&&this.linkChests(r,i,o,h),this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}beaconAdjacent(t,e,n){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([r,i,o])=>this.world.get(t+r,e+i,n+o)===Tn)}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget(),e=this.nearestTrader();if(e){this.openTrade(e);return}if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Le){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const n=this.nearestCache();if(n){this.openCacheId=n.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:r,y:i,z:o}=t.hit,l=this.world.get(r,i,o);if(l===Pn||l===dn||l===mi){this.harvest(r,i,o,l);return}if(l===rn||l===_n){this.sleep();return}if(xo(l)||l===je||l===Qe){const h=l===en||l===He||l===Qe,a=h?Qe:je,c=m=>h?m===en||m===He:m===on||m===nn,d=h?en:on,p=h?He:nn;if(l===a){const m=this.player.pos;if(m.x>r-.2&&m.x<r+1.2&&m.z>o-.2&&m.z<o+1.2){nt("Step out of the doorway first."),this.audio.error();return}this.world.get(r,i-1,o)===a?(this.world.set(r,i,o,p),this.world.set(r,i-1,o,d)):this.world.get(r,i+1,o)===a?(this.world.set(r,i,o,d),this.world.set(r,i+1,o,p)):this.world.set(r,i,o,c(this.world.get(r,i+1,o))?p:d)}else{const m=fn(this.world.get(r-1,i,o))||fn(this.world.get(r+1,i,o)),v=this.player.pos,y=m?v.z-(o+.5):v.x-(r+.5),x=r+","+o;Math.abs(y)>.35?this.world.doorSwing.set(x,y>0?-1:1):this.world.doorSwing.delete(x),this.world.set(r,i,o,a);for(const _ of[-1,1])c(this.world.get(r,i+_,o))&&this.world.set(r,i+_,o,a);this.tut?.notify("door")}this.audio.door();return}if(l===Tn){this.tut?.notify("save"),this.beaconMarks.some(h=>h.x===r&&h.y===i&&h.z===o)||this.beaconMarks.push({x:r,y:i,z:o}),this.audio.savePing(),this.saveNow()?nt("Saved. Death will respawn you at this beacon."):nt("This world is not saved — the beacon only marks it.");return}if(l===Ze||l===mn){this.openStation=[r,i,o],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(l===Zs){this.openStation=[r,i,o],this.ui="bench",this.unlockPointer(),this.renderCraft("armory");return}if(l===sn){if(this.canHeatWater(r,i,o)){this.heatWater(r,i,o);return}this.openStation=[r,i,o],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(l===Oi){if(!this.inv.has("thruster_nozzle",1)){this.audio.error(),nt("A dead wingtip engine. It needs a Thruster Nozzle — Cobalt from the deep Caves.");return}this.inv.removeItem("thruster_nozzle",1),this.world.set(r,i,o,$i),this.renderer.addPointLight(r,i,o,"fire"),this.questBump("thruster"),this.audio.door(),this.audio.win(),nt("Nozzle seated. The engine coughs, catches, holds."),!this.liftoff&&this.thrustersAllLit()&&this.startLiftoff();return}if(l===Fi){let h=null;for(const[a,c,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const p=this.world.roomInfo(r+a,i+c,o+d);if(p.size>0){h=p;break}}h&&h.sealed&&h.regulators*Mr>=h.size?(this.survival.body=37,this.audio.drink(),nt("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),nt("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.selectedSlot()?.itemId==="bucket"){nt("E won't fill it — press Q or right-click with the Bucket to scoop."),this.audio.error();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),nt(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):nt("You need an empty Water Canister.")}}}harvest(t,e,n,r){r===Pn?(this.world.set(t,e,n,$n),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(mt(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),nt("Dune Melon picked — the plant keeps growing.")):r===dn?(this.world.set(t,e,n,Ln),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),nt("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,gn),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),nt("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<Be){const n=Math.ceil((Be-t)/60);nt(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=Be/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),nt("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);let i=0;for(let o=-6;o<=6;o++)for(let l=-6;l<=6;l++)for(let h=-2;h<=2;h++){if(this.world.get(e+o,n+h,r+l)!==sn)continue;const a=Math.max(Math.abs(o),Math.abs(l));i=Math.max(i,a<=4?18:9)}return i}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,r]of this.crops){const[i,o,l]=n.split(",").map(Number),h=this.world.get(i,o,l);if(h!==$n&&h!==Pn&&h!==Hn&&h!==dn){this.crops.delete(n);continue}if(h===Pn||h===dn)continue;const a=h===$n;let c=!1;t:for(let m=-4;m<=4;m++)for(let v=-4;v<=4;v++)for(let y=-2;y<=1;y++)if(Dn(this.world.get(i+m,o+y,l+v))){c=!0;break t}const d=this.survival.airTempAt(this.world,i,o,l,this.timeSec),p=a?d>=22&&d<=45:d>=2&&d<=42;if(c&&p){const m=r+e;this.crops.set(n,m),m>=(a?60:90)&&this.world.set(i,o,l,a?Pn:dn)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){nt("Aim at water."),this.audio.error();return}const{x:e,y:n,z:r}=t.water;if(this.world.get(e,n,r)!==Ve){nt("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){nt("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,r,Mt),this.audio.drink(),nt("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,r=t.hit.z+t.face.z;if(this.world.get(e,n,r)!==Mt){nt("Pour into open space."),this.audio.error();return}this.world.set(e,n,r,Ve),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),nt("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,r]of this.trees){const[i,o,l]=n.split(",").map(Number),h=this.world.get(i,o,l);if(h!==Yn&&h!==kn){this.trees.delete(n);continue}let a=!1;t:for(let m=-6;m<=6;m++)for(let v=-6;v<=6;v++)for(let y=-3;y<=3;y++)if(Dn(this.world.get(i+m,o+y,l+v))){a=!0;break t}if(!a)continue;const c=Math.min(480,r+e);this.trees.set(n,c);const d=c>=480?3:c>=270?2:c>=120?1:0;if(d===0)continue;let p=this.treePlanCache.get(n);if(!p){let m=Math.floor(mt(i+7*l,o,this.seed+55)*1e9)+1;p=Ou(i,o,l,()=>(m=m*1103515245+12345&2147483647,m/2147483647)),this.treePlanCache.set(n,p)}for(const m of p){if(m.stage>d)continue;const v=this.world.get(m.x,m.y,m.z);(v===Mt||v===Yn)&&this.world.set(m.x,m.y,m.z,m.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)for(let l=0;l<=2;l++){const h=this.world.get(e+i,n+l,r+o);if(!(h!==gn&&h!==mi)&&!(Math.abs(t.x-(e+i+.5))>1.15||Math.abs(t.z-(r+o+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),nt("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){nt("Select an item first."),this.audio.error();return}const e=Nt[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(t.itemId==="hot_water_pouch"){this.inv.removeItem(t.itemId,1),this.survival.body=Math.min(this.survival.body+10,Ko),this.giveOrDrop("canister_empty",1),this.audio.drink(),nt("Hot water, straight down: a +10 °C warmth rolls through you. The empty canister comes back."),this.renderHeld(),this.renderInv();return}if(t.itemId==="bucket"){this.bucketScoop();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:r,y:i,z:o}=n.hit,l=this.world.get(r,i,o);if(n.face.y===1&&(l===Jn||l===ai)){this.world.set(r,i,o,Ln),this.audio.place(),nt("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(l===Zn||l===vn||l===Ss)){nt("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}nt(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),nt(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){nt("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&nt("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}canHeatWater(t,e,n){return this.inv.selectedSlot()?.itemId==="canister_full"&&(this.campCharges.get(`${t},${e},${n}`)??0)>0}heatWater(t,e,n){const r=`${t},${e},${n}`,i=this.campCharges.get(r)??0;if(!this.canHeatWater(t,e,n)){this.audio.error();return}this.campCharges.set(r,i-1),this.inv.removeItem("canister_full",1),this.giveOrDrop("hot_water_pouch",1),this.audio.drink(),nt("The canister hisses over the coals — sealed hot for the cold hours."),this.renderHeld()}toggleLantern(){const t=this.equip.light;if(!t){nt("Nothing in your Light slot. A Head Lantern lights the dark."),this.audio.error();return}if(this.lanternOn){this.lanternOn=!1;return}if((t.charges??0)<=0){nt("The lantern is dry — press E at a Campfire to refuel it."),this.audio.error();return}this.lanternOn=!0,this.lanternAcc=0,nt("Head Lantern on. T puts it out.")}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){nt("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){nt("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),nt("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}stormShieldTick(){const t=Math.floor(this.timeSec*2);if(t===this.breakerTick)return;this.breakerTick=t;const e=this.player.pos;let n=null,r=1/0;for(const i of this.breakers){const[o,l,h]=i.split(",").map(Number),a=Math.hypot(e.x-(o+.5),e.y+.9-(l+.5),e.z-(h+.5));a<=Uu&&a<r&&(r=a,n=[o,l,h])}this.stormShieldOn=n!==null,this.renderer.setStormDome(n?[n[0]+.5,n[1]+.5,n[2]+.5]:null)}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),r=Math.floor(e.y),i=Math.floor(e.z);let o=this.world.roomInfo(n,r,i);if(o.size===0)t:for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)for(let d=-1;d<=1;d++){const p=this.world.roomInfo(n+a,r+c,i+d);if(p.size>0){o=p;break t}}const l=o.sealed&&o.regulators>0&&o.regulators*Mr>=o.size;this.regActive=l;const h=new Set(l?o.regCells:[]);for(const[a,c]of this.regGlow){if(h.has(a))continue;this.renderer.removeEntityMesh(c);const[d,p,m]=a.split(",").map(Number);this.renderer.removePointLight(d,p,m),this.regGlow.delete(a)}for(const a of h){if(this.regGlow.has(a))continue;const[c,d,p]=a.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new se({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,v=this.renderer.addEntityMesh(m,[c+.5,d+.5,p+.5],9427199,1.03);v.material=this.regGlowMat,this.renderer.addPointLight(c,d,p,"cool"),this.regGlow.set(a,m)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==Mt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}t.distanceTo(new F(n.x,n.y,n.z))<1.3&&this.inv.addItem(n.itemId,1)===0&&(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup())}}}static SHIP_IDS=new Set([Ne,Je,yi,Mi,ws,on,nn,je,en,He,Qe,In,Tn,Ze,mn,Fi,ji,rn,_n]);liftoff=null;thrustersAllLit(){let t=0;for(let e=29;e<=37;e++)for(let n=-8;n<=6;n++)for(let r=-13;r<=13;r++){const i=this.world.get(n,e,r);if(i===Oi)return!1;i===$i&&t++}return t>=4}startLiftoff(){const t=[];for(let n=37;n>=29;n--){const r=[];for(let i=-8;i<=6;i++)for(let o=-13;o<=13;o++){const l=this.world.get(i,n,o);ge.SHIP_IDS.has(l)&&r.push([i,n,o,l])}r.length&&t.push(r)}this.liftoff={t:0,rows:t,step:0,restored:0},this.ui="liftoff",document.pointerLockElement&&document.exitPointerLock();const e=document.getElementById("lift-fx");e.classList.remove("hidden"),e.textContent="ENGINE IGNITION",nt("The whole Ship shudders. Every plate rattles at once."),this.audio.win()}liftoffFrame(t){const e=this.liftoff;if(!e)return;e.t+=t;const n=2.2/e.rows.length,r=2.4,i=4.6,o=i+2.2,l=document.getElementById("lift-fx");for(l.textContent=e.t<r?"LIFT-OFF":e.t<i?"RESCUE SIGNAL LIVE":"TOUCHDOWN";e.step<e.rows.length&&e.t>=e.step*n;){for(const[h,a,c]of e.rows[e.step])this.world.set(h,a,c,Mt);this.audio.door(),e.step++}if(e.t>i)for(;e.restored<e.rows.length&&e.t-i>=e.restored*n;){for(const[h,a,c,d]of e.rows[e.rows.length-1-e.restored])this.world.set(h,a,c,d);this.audio.door(),e.restored++}e.t>=o+.4&&(this.liftoff=null,this.ui=null,l.classList.add("hidden"),this.saveNow(!0),this.win())}win(){this.won||(this.won=!0,qh(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`The Ship lifts off. All four engines burn. Survived ${this.scoreDays().toFixed(1)} days. Best: ${Cr().toFixed(1)} days.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:1})),...["backpack","head","body","regulator","light"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null,regulator:null,light:null},this.lanternOn=!1,qh(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${Cr().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/Be}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===Tn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){nt("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache","ui-trade"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){jh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=Be})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const d=Nt[this.temp.itemId];e.classList.add("filled"),e.style.background=d.color,e.style.backgroundImage=`url(${Ao(this.temp.itemId)[0]??""})`,e.onmousedown=p=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.startTempDrag(p)},n.textContent=`Drop ${d.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,1,1),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const d of["backpack","head","body","regulator","light"]){const p=document.getElementById("eq-"+d),m=this.equip[d];if(m){const v=Nt[m.itemId];p.classList.add("filled"),p.style.background=v.color,p.style.backgroundImage=`url(${Ao(m.itemId)[0]??""})`;const y=m.charges;p.textContent=y!==void 0&&y>0?String(y):"",p.title=y!==void 0?`Click to take off the ${v.name} — ${y} charge${y===1?"":"s"} left`:`Click to take off the ${v.name}`,p.onclick=()=>this.unequipSlot(d)}else p.classList.remove("filled"),p.style.background="#23262e",p.style.backgroundImage="",p.textContent="",p.title="",p.onclick=()=>{const v=this.inv.selectedSlot();v&&Nt[v.itemId].equip===d?this.equipItem():v&&(nt(`The ${Nt[v.itemId].name} does not fit the ${d} slot.`),this.audio.error())}}const r=document.getElementById("inv-side"),i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=i.selectedSlot(),l=this.temp??o,h=this.inv.weight()+(this.temp?Nt[this.temp.itemId].mass:0),a=this.inv.weightLimit(),c=l?Bn(l):null;if(r.textContent=l?`${Nt[l.itemId].name} — ${Nt[l.itemId].desc}`:"Click an item to inspect it; drag to move it.",r.textContent+=` Weight ${h.toFixed(1)} / ${a} kg`,l&&c&&c.w!==c.h){const d=document.createElement("button");d.textContent="Rotate",d.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:i.rotate(o)||(nt("No room to rotate."),this.audio.error()),this.renderInv()},r.appendChild(d)}if(o){const d=Nt[o.itemId];if(d.equip){const p=document.createElement("button");p.textContent=`Equip (${d.equip} slot)`,p.onclick=()=>this.equipItem(),r.appendChild(p)}if(o.itemId==="coolant_cell"&&this.equip.regulator){const p=this.equip.regulator,m=(p.charges??0)>=3,v=document.createElement("button");v.textContent=m?"Regulator holds 3 cells already — that's six days of neutral air":"Load Coolant Cell into the Regulator (each lasts 2 game days)",v.disabled=m||!this.inv.has("coolant_cell",1),v.onclick=()=>{m||!this.inv.has("coolant_cell",1)||(this.inv.removeItem("coolant_cell",1),p.charges=(p.charges??0)+1,this.audio.pickup(),nt(`Coolant Cell loaded — ${p.charges} charge${p.charges===1?"":"s"} running.`),this.renderInv())},r.appendChild(v)}}if(o)if(i===this.chestInv){const d=document.createElement("button");d.textContent="Move to pack",d.onclick=()=>{const p=i.slots.indexOf(o);i.slots.splice(p,1),ge.placeSlotFree(this.inv,o)||(i.slots.splice(p,0,o),nt("No room in your pack."),this.audio.error()),this.renderInv()},r.appendChild(d)}else{const d=document.createElement("button");d.textContent="Drop 1",d.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},r.appendChild(d)}}renderGrid(t,e){const n=ge.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const r=(i,o)=>t.slots.find(l=>{const h=Bn(l);return i>=l.x&&i<l.x+h.w&&o>=l.y&&o<l.y+h.h});for(let i=0;i<t.h;i++)for(let o=0;o<t.w;o++){const l=document.createElement("div");l.className="invcell";const h=r(o,i);if(h){const a=Nt[h.itemId],c=o-h.x,d=i-h.y,p=Ao(h.itemId),m=h.rot?(a.h-1-c)*a.w+d:d*a.w+c;l.style.background=a.color,l.style.backgroundImage=`url(${p[Math.min(m,p.length-1)]??""})`,t.slots.indexOf(h)===t.selected&&l.classList.add("active"),l.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${a.name} — ${a.desc}`},l.onmousedown=y=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,o,i):this.startInvDrag(y,h,t)}}else l.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,o,i)};e.appendChild(l)}}tapCell(t,e,n){const r=t.slots.find(l=>{const h=Bn(l);return e>=l.x&&e<l.x+h.w&&n>=l.y&&n<l.y+h.h}),i=t===this.inv?this.chestInv:this.inv;if(i){const l=i.selectedSlot();if(l&&l!==r){const h=Bn(l),a=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(a>=0&&c>=0&&t.fits(a,c,h.w,h.h,l)){i.slots.splice(i.slots.indexOf(l),1),i.selected=-1,l.x=a,l.y=c,t.slots.push(l),t.selected=t.slots.indexOf(l),this.audio.place(),this.renderInv(),this.renderHeld();return}nt("No room there."),this.audio.error();return}}const o=t.selectedSlot();if(o&&o!==r){const l=Bn(o),h=Math.min(e,t.w-l.w),a=Math.min(n,t.h-l.h);if(h>=0&&a>=0&&this.tapMove(t,o,r,h,a)){this.audio.place(),t.selected=t.slots.indexOf(o),this.renderInv();return}}r?(this.setSel(t,t.slots.indexOf(r)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,r,i){const o=Bn(e);if(t.fits(r,i,o.w,o.h,e))return t.move(e,r,i);if(!n)return!1;const l=Bn(n),h=t.slots.indexOf(e);t.slots.splice(h,1);const a=t.fits(e.x,e.y,l.w,l.h,n)&&t.fits(r,i,o.w,o.h,n)&&!(r<e.x+l.w&&e.x<r+o.w&&i<e.y+l.h&&e.y<i+o.h)&&t.move(n,e.x,e.y)&&t.move(e,r,i);return t.slots.splice(h,0,e),a}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const r=n.slots.indexOf(e);this.setSel(n,r),n.slots.splice(r,1);const i=this.temp;this.temp=e,this.tempOrigin=n,i&&(n.slots.push(i),n.move(i,e.x,e.y)||this.giveOrDrop(i.itemId,1));const o=(ge.CELL+ge.GAP)*this.uiZoom(),l=ge.GAP*this.uiZoom(),h=Bn(e),a=document.createElement("div");a.className="inv-ghost",a.style.width=h.w*o-l+"px",a.style.height=h.h*o-l+"px",a.style.background=Nt[e.itemId].color,a.style.backgroundImage=`url(${Ui(e.itemId,e.rot?1:0)})`,document.body.appendChild(a);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),d={gx:t.clientX-(c.left+e.x*o),gy:t.clientY-(c.top+e.y*o)},p=v=>{a.style.left=v.clientX-d.gx+"px",a.style.top=v.clientY-d.gy+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(v.clientX,v.clientY))},m=v=>{if(window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m),a.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(v.clientX,v.clientY)){this.binDiscard();return}const y=Bn(e);let x=null,_=0,R=0;for(const[T,S]of this.gridsEls()){const b=T.getBoundingClientRect();if(_=Math.round((v.clientX-b.left-d.gx)/o),R=Math.round((v.clientY-b.top-d.gy)/o),_>=0&&R>=0&&_<=S.w-y.w&&R<=S.h-y.h){x=S;break}}x&&(x.slots.push(e),x.move(e,_,R)||x===n&&x.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(x,x.slots.indexOf(e))):x.slots.splice(x.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",p),window.addEventListener("mouseup",m),p(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const o=e.slots.indexOf(t);if(e.slots.splice(o,1),!ge.placeSlotFree(n,t)){e.slots.splice(o,0,t),nt(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const r=e.slots.indexOf(t);this.setSel(e,r),e.slots.splice(r,1);const i=this.temp;this.temp=t,this.tempOrigin=e,i&&(e.slots.push(i),e.move(i,t.x,t.y)||this.giveOrDrop(i.itemId,1)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(ge.CELL+ge.GAP)*this.uiZoom(),r=ge.GAP*this.uiZoom(),i=Bn(e),o=document.createElement("div");o.className="inv-ghost",o.style.width=i.w*n-r+"px",o.style.height=i.h*n-r+"px",o.style.background=Nt[e.itemId].color,o.style.backgroundImage=`url(${Ui(e.itemId,e.rot?1:0)})`,document.body.appendChild(o);const l=a=>{o.style.left=a.clientX-i.w*n/2+"px",o.style.top=a.clientY-i.h*n/2+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(a.clientX,a.clientY))},h=a=>{if(window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",h),o.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(a.clientX,a.clientY)){this.binDiscard();return}const c=(i.w*n-r)/2,d=(i.h*n-r)/2;let p=null,m=0,v=0;for(const[y,x]of this.gridsEls()){const _=y.getBoundingClientRect();if(m=Math.round((a.clientX-_.left-c)/n),v=Math.round((a.clientY-_.top-d)/n),m>=0&&v>=0&&m<=x.w-i.w&&v<=x.h-i.h){p=x;break}}p&&(p.slots.push(e),p.move(e,m,v)?(this.temp=null,this.audio.place(),this.setSel(p,p.slots.indexOf(e))):(p.slots.splice(p.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",l),window.addEventListener("mouseup",h),l(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};ge.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(nt("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){nt("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":t==="armory"?"Armoury — gear that guards the body":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t!=="smelt")for(const r of Wu){if(t==="armory"?r.station!=="armory":r.station==="armory")continue;const i=document.createElement("div");i.className="craft-row";const o=`${Nt[r.out].name}${r.count>1?" ×"+r.count:""}`,l=Object.entries(r.needs).map(([c,d])=>`${d}× ${Nt[c].name}`).join(", "),h=Xu(this.inv,r);i.innerHTML=`<span class="what"><img class="craft-art" src="${Ui(r.out)}" alt="">${o} <span class="needs">(${l})</span></span>`;const a=document.createElement("button");a.textContent="Craft",a.disabled=!h,a.onclick=()=>{const c=ev(this.inv,r);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(r.out,c),this.tut?.notify("craft"),Nt[r.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft(t)},i.appendChild(a),e.appendChild(i)}else{const r=this.openStation,i=`${r[0]},${r[1]},${r[2]}`,o=this.campCharges.get(i)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){nt("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(i,o+3),this.renderCraft("smelt")};const l=this.equip.light;if(l){const h=l.charges??0,a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what">Head Lantern <span class="needs">(${h}/5 charges)</span></span>`;const c=document.createElement("button");c.textContent="Refuel Lantern (+1, uses 1 fuel)",c.disabled=h>=5||o<1,c.onclick=()=>{h>=5||o<1||(this.campCharges.set(i,o-1),l.charges=h+1,this.audio.place(),this.renderCraft("smelt"))},a.appendChild(c),e.appendChild(a)}for(const h of qu){const a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what"><img class="craft-art" src="${Ui(h.out)}" alt="">${Nt[h.in].name} → ${Nt[h.out].name}${h.n&&h.n>1?" ×"+h.n:""} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(h.in,1)||o<1,c.onclick=()=>{this.inv.removeItem(h.in,1),this.campCharges.set(i,o-1);const d=this.inv.addItem(h.out,h.n??1);d>0&&this.giveOrDrop(h.out,d),this.audio.place(),this.renderCraft("smelt")},a.appendChild(c),e.appendChild(a)}}}renderCache(){const t=this.caches.find(r=>r.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const r of t.items){const i=document.createElement("div");i.className="cache-item",i.textContent=`${r.count}× ${Nt[r.itemId].name}`,e.appendChild(i)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let r=!0;for(;r;){r=!1;for(const i of t.items){const o=this.inv.addItem(i.itemId,i.count);o<i.count&&(r=!0,i.count=o),o===0&&t.items.splice(t.items.indexOf(i),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const vv=["drone","wanderer","wanderer","caravan","caravan","nightwind"],xv=["drone","nightwind","nightwind","caravan","wanderer"],Jh={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},Qh=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],yv=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],tu=[0,2,4,2,3,5,4,1],Mv=[0,0,3,2,4,3,2,0],eu={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},bv=["pluck","saw","breath","bow"];class Sv{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=eu[this.genre];breathBuf=null;root=98;deg=Qh[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let r=0,i=0;for(let c=0;c<n.length;c++){const d=Math.random()*2-1;r=.99*r+.01*d,i=.96*i+.04*d,n[c]=(r+i)*2}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.noiseBuf=e;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=380;const h=this.ctx.createOscillator();h.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=100,h.connect(a).connect(l.frequency),h.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,o.connect(l).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=(.06+this.stormI*.28)*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setStorm(t){t!==this.stormI&&(this.stormI=t,this.windGain&&(this.windGain.gain.value=(.06+t*.28)*this.volume))}stormI=0;setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const r=t.createGain();r.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(r),r.connect(t.destination),[1,1.5,2].forEach((i,o)=>{const l=t.createOscillator();l.type=o===2?"sine":"triangle",l.frequency.value=this.root*i,l.detune.value=o*3-3;const h=t.createGain();h.gain.value=.03/(o+1);const a=t.createOscillator();a.frequency.value=.05+o*.017;const c=t.createGain();c.gain.value=.018,a.connect(c).connect(h.gain),a.start(),l.connect(h).connect(this.musicGain),l.start(),this.droneOscs.push(l)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?vv:xv;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=eu[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const r=this.isDay?Qh:yv;if(this.deg=r[Math.floor(Math.random()*r.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const i=this.ctx.currentTime;this.droneOscs.forEach((o,l)=>o.frequency.setTargetAtTime(this.root*[1,1.5,2][l],i,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=Jh[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,r=(o,l)=>e*o*2**(n[(l%n.length+n.length)%n.length]/12),i=Jh[this.genre];switch(this.genre){case"drone":{this.note(r(1,0),t,i*.95,.18),[0,2,4].forEach(o=>this.note(r(2,o),t+.05,i*.9,.03));for(let o=0;o<8;o++)Math.random()<.15||this.note(r(4,tu[o]),t+o*i/8,.9,.12);if(Math.random()<.6){const o=1+Math.floor(Math.random()*6);this.note(r(4,o),t+Math.floor(Math.random()*5)*(i/8),1.4,.13)}break}case"wanderer":{this.note(r(1,0),t,i*.55,.16);for(let o=0;o<8;o++)Math.random()<.1||this.note(r(Math.random()<.3?3:4,tu[o]),t+o*i/8,.55,.12);if(Math.random()<.7){const o=1+Math.floor(Math.random()*5);this.note(r(5,o),t+Math.floor(Math.random()*6)*(i/8),.8,.11)}break}case"nightwind":{this.note(r(1,0),t,i*.95,.15),Math.random()<.4&&[0,2,4].forEach(l=>this.note(r(2,l),t+.1,i*.85,.025));const o=1+Math.floor(Math.random()*3);for(let l=0;l<o;l++){const h=Math.floor(Math.random()*n.length),a=1.6+Math.random()*(i-1.2);this.note(r(4,h),t+Math.random()*(i-1),a,.12)}break}case"caravan":{for(let o=0;o<8;o++)(o===0||o===3||o===4)&&this.drum(t+o*i/8),o%2===1&&this.brush(t+o*i/8);this.note(r(1,0),t,i*.45,.17),this.note(r(1,3),t+i/2,i*.4,.14);for(let o=0;o<8;o++)Math.random()<.25||this.note(r(3,Mv[o]),t+o*i/8,.4,.1);if(Math.random()<.4){const o=1+Math.floor(Math.random()*4);this.note(r(4,o),t+Math.floor(Math.random()*4)*(i/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const r=this.ctx.createGain();r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(r).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=bv.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,r){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,r);break;case"saw":this.sawNote(t,e,n,r);break;case"breath":this.breathNote(t,e,n,r);break;case"bow":this.bowNote(t,e,n,r);break}}pluckNote(t,e,n,r){const i=this.ctx,o=Math.min(n,1),l=i.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(r,e+.006),l.gain.exponentialRampToValueAtTime(.001,e+o),l.connect(this.musicGain);const h=i.createOscillator();h.type="triangle",h.frequency.value=t,h.connect(l),h.start(e),h.stop(e+o+.05);const a=i.createOscillator();a.type="square",a.frequency.value=t*2.01;const c=i.createGain();c.gain.setValueAtTime(r*.22,e),c.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,o*.35)),a.connect(c).connect(l),a.start(e),a.stop(e+o)}sawNote(t,e,n,r){const i=this.ctx,o=i.createOscillator();o.type="sawtooth",o.frequency.value=t;const l=i.createBiquadFilter();l.type="lowpass",l.Q.value=.8,l.frequency.value=Math.min(3200,Math.max(700,t*6));const h=i.createGain();this.sustainEnv(h.gain,e,n,r*.7,.09),o.connect(l).connect(h).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}breathNote(t,e,n,r){const i=this.ctx;if(!this.breathBuf){const d=i.sampleRate,p=i.createBuffer(1,d*2,d),m=p.getChannelData(0);for(let v=0;v<m.length;v++)m[v]=Math.random()*2-1;this.breathBuf=p}const o=i.createBufferSource();o.buffer=this.breathBuf,o.loop=!0;const l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=10;const h=i.createGain();this.sustainEnv(h.gain,e,n,r*1.6,.22),o.connect(l).connect(h).connect(this.musicGain),o.start(e,Math.random()*1.9),o.stop(e+n+.05);const a=i.createOscillator();a.type="sine",a.frequency.value=t;const c=i.createGain();this.sustainEnv(c.gain,e,n,r*.8,.3),a.connect(c).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}bowNote(t,e,n,r){const i=this.ctx,o=i.createOscillator();o.type="sawtooth",o.frequency.value=t;const l=i.createOscillator();l.frequency.value=5.2;const h=i.createGain();h.gain.value=5,l.connect(h).connect(o.detune),l.start(e),l.stop(e+n+.05);const a=i.createBiquadFilter();a.type="lowpass",a.Q.value=.7,a.frequency.value=Math.min(2600,Math.max(600,t*4));const c=i.createGain();this.sustainEnv(c.gain,e,n,r*.8,Math.min(.35,n*.3)),o.connect(a).connect(c).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}sustainEnv(t,e,n,r,i){const o=Math.min(i,n*.5),l=e+o+(n-o)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(r,e+o),t.setValueAtTime(r,l),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,r=.2,i=0){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,o),i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+i),o+e),h.gain.setValueAtTime(r*this.volume,o),h.gain.exponentialRampToValueAtTime(.001,o+e),l.connect(h).connect(this.ctx.destination),l.start(o),l.stop(o+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const r=this.ctx.currentTime,i=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(i*t)),i),l=o.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=(Math.random()*2-1)*(1-d/l.length);const h=this.ctx.createBufferSource();h.buffer=o;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=e;const c=this.ctx.createGain();c.gain.value=n*this.volume,h.connect(a).connect(c).connect(this.ctx.destination),h.start(r)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const jt=s=>document.getElementById(s),nu=s=>jt(s).value,pn=(s,t=!0)=>jt(s).classList.toggle("hidden",!t),wv=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],mc=()=>wv.forEach(s=>pn(s,!1)),Uo=new Sv;let pe=av(),Ot=null;document.addEventListener("click",()=>Uo.resume(),{once:!0});document.addEventListener("touchstart",()=>Uo.resume(),{once:!0});function Zo(){mc(),pn("screen-title"),jt("best-score").textContent=Cr()>0?`Best run: ${Cr().toFixed(1)} days`:"";const s=jt("worldlist");s.innerHTML="";const t=jo();t.length||(s.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const r=Ju(e.id),i=document.createElement("span");i.textContent=`${e.name} — seed “${e.seedStr}” — ${r?`day ${r.days}, survived ${(r.playSec/Be).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>Jo(e,r);const l=document.createElement("button");l.textContent="Export",l.onclick=()=>{r?Qu(e,r):nt("Nothing saved for this world yet.")};const h=document.createElement("button");h.textContent="Delete",h.onclick=()=>{h.textContent==="Sure?"?(cv(e.id),Zo()):(h.textContent="Sure?",setTimeout(()=>h.textContent="Delete",2500))},n.append(i,o,l,h),s.appendChild(n)}}function Jo(s,t){mc(),pn("cheats",!1),jt("hud").classList.remove("hidden"),pe.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),jt("btn-save").classList.toggle("hidden",s.id.startsWith("guest")),jt("btn-exportworld").classList.toggle("hidden",s.id.startsWith("guest")),Uo.resume(),Ot=new ge(s,t,jt("game-wrap"),pe,Uo),globalThis.game=Ot,Ot.start(),t===null&&Ot.startTutorial()}function gc(){Ot&&(Ot.saveNow(),Ot.stop()),Ot=null,delete globalThis.game,jt("hud").classList.add("hidden"),Zo()}function _c(s){mc(),pn(s)}function Ev(){Ot&&(Ot.pauseSubmenu=null),pn("screen-settings",!1),pn("screen-instructions",!1),pn("screen-catalog",!1),Ot?(pn("ui-inventory",!1),pn("ui-craft",!1),pn("ui-cache",!1),pn("ui-trade",!1),pn("screen-pause",!1),Ot.paused=!1,Ot.relock()):Zo()}function vc(){Ot&&(Ot.pauseSubmenu=Ot.paused?"settings":null),_c("screen-settings");const s=jt("settings-body");s.innerHTML="";const t=(e,n,r,i)=>{const o=document.createElement("div");o.className="setting";const l=document.createElement("span");l.textContent=e;const h=document.createElement("div");h.className="seg";const a=[];for(const[c,d]of n){const p=document.createElement("button");p.type="button",p.textContent=c,String(d)===String(r)&&p.classList.add("on"),p.onclick=()=>{for(const m of a)m.classList.remove("on");p.classList.add("on"),i(d)},a.push(p),h.appendChild(p)}o.append(l,h),s.appendChild(o)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],pe.sens,e=>{pe.sens=e,Xn()}),t("Invert Y",[["Off",!1],["On",!0]],pe.invertY,e=>{pe.invertY=e,Xn()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],pe.volume,e=>{pe.volume=e,Xn()}),t("Music",[["Off",!1],["On",!0]],pe.music,e=>{pe.music=e,Xn()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],pe.fov,e=>{pe.fov=e,Xn()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],pe.renderDist,e=>{pe.renderDist=e,Xn()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],pe.quality,e=>{pe.quality=e,Xn()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],pe.lighting,e=>{pe.lighting=e,Xn()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],pe.units,e=>{pe.units=e,Xn()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],pe.uiScale,e=>{pe.uiScale=e,Xn()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],pe.fullscreen,e=>{pe.fullscreen=e,Xn(),e?document.documentElement.requestFullscreen().catch(()=>{pe.fullscreen=!1,Xn(),vc()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),s.appendChild(e)}}function ed(s){document.documentElement.style.setProperty("--ui-scale",String(s))}function Xn(){lv(pe),ed(pe.uiScale),Ot&&Ot.applySettings(pe)}let ql="items";function xc(){Ot&&(Ot.pauseSubmenu=Ot.paused?"catalog":null),_c("screen-catalog");for(const t of Array.from(jt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===ql);const s=jt("catalog-body");if(s.innerHTML="",ql==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,r,i,o)=>{const l=document.createElement("div");l.className="cat-card";const h=document.createElement("img");h.src=n,h.alt="";const a=document.createElement("div");a.innerHTML=`<b>${r}</b><div class="cat-meta">${i}</div><div class="cat-desc">${o}</div>`,l.append(h,a),t.append(l)};for(const n of Object.values(Nt).sort((r,i)=>r.name.localeCompare(i.name)))e(Ui(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of jn){if(n.id===0||n.name==="Air")continue;const r=Object.values(Nt).find(o=>o.block===n.id),i=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(r?Ui(r.id):uv(n.id),n.name,i,r?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}s.append(t)}else{const t=(e,n,r,i)=>{const o=document.createElement("div");o.className="cat-recipe";const l=document.createElement("img");l.src=e,l.alt="",l.style.width="36px",l.style.height="36px",l.style.imageRendering="pixelated",o.append(l,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${r}</b> <span class="needs">(${i})</span>`})),s.append(o)};for(const e of Wu){const n=Object.entries(e.needs).map(([r,i])=>`${i}× ${Nt[r].name}`).join(" + ");t(Ui(e.out),n,`${Nt[e.out].name}${e.count>1?" ×"+e.count:""}`,e.station===null?"hands":e.station==="armory"?"Armoury":"Crafting Bench")}for(const e of qu)t(Ui(e.out),`1× ${Nt[e.in].name}`,`${Nt[e.out].name}${e.n&&e.n>1?" ×"+e.n:""}`,"Campfire, 1 fuel charge")}}for(const s of Array.from(jt("catalog-tabs").querySelectorAll(".tab")))s.onclick=()=>{ql=s.dataset.tab,xc()};const Tv=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Falls","falling more than 4 blocks hurts — about 16 blocks without armour is fatal; land in water or climb down"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Iron Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches, trade with a camp Trader, Broken Thruster on a wingtip (needs a Thruster Nozzle)"],["T","toggle the Head Lantern — it burns one fuel charge per 4 game-minutes; refuel it at a Campfire"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 5 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],Av=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / LAMP / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function nd(){Ot&&(Ot.pauseSubmenu=Ot.paused?"instructions":null),_c("screen-instructions");const s=jt("instr-body");s.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?Av:Tv;for(const[n,r]of t){const i=document.createElement("div");i.innerHTML=`<b>${n}</b> — ${r}`,s.appendChild(i)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. Walls block the wind but not heat: a sealed room's air drifts toward the outside temperature. Only Heat Regulator blocks hold a sealed room at ~37 °C — each covers 150 cells, they stack in bigger rooms; the Ship Interior comes with one. Direct midday sun adds a punishing +8…18 °C — shade from rocks, dunes and walls cancels it; at night the desert freezes you. Dig into the Caves: two or more cells under the terrain the air sits at a constant mild ~22 °C, and shelter there lets your body claw back toward 36.6 °C. That is the refuge — but it is dark (wear a Head Lantern, toggle with T), Scorpions and Sand Wurms live only down there, and Cobalt Ore — the one thing that can fix the Ship's engines — hides there too. The goal: mine Cobalt, smelt and craft four Thruster Nozzles, press E at each Broken Thruster on the wingtips, and lift off. Or just keep surviving and beat your best day count. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, Kangaroo Rats bolt, Scorpions and Wurms ambush in the dark — hunt what you can, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor, Armour, Regulator and Light go in the five Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it. The desert is bigger than it looks: Trader Camps — a windmill, a hut, a farmstead — dot the wastes hundreds of steps out, and the robed Trader there barters goods for goods; no coin, and the offer table restocks every in-game day. Watch the sky: a Sandstorm rolls in without warning — when the wind roars, get behind walls or dig in, because the open air will bake you, drink you dry and scour your skin. Arched Cave Mouths gape in rocky slopes and lead straight down to the Caves. Vultures circle the healthy but dive at the wounded; hunt Thornback Tortoises for shell armour, Fennec Foxes for pelts, and bring the skins, shells and hides back to the Trader.",s.appendChild(e)}jt("btn-create").onclick=()=>{const s=nu("seed-input").trim()||Math.random().toString(36).slice(2,10),t=nu("world-name").trim()||s,e=ju(t,s);Jo(e,null)};jt("btn-guest").onclick=()=>{const s=Math.random().toString(36).slice(2,10);Jo({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:s,updated:Date.now()},null)};jt("btn-import").onclick=()=>jt("import-file").click();jt("import-file").onchange=async()=>{const s=jt("import-file").files?.[0];if(s)try{const t=await hv(s);nt("World imported."),Jo(t,Ju(t.id))}catch(t){nt(`Import failed: ${t.message}`)}};jt("btn-settings").onclick=vc;jt("btn-pause-settings").onclick=vc;jt("btn-instructions").onclick=nd;jt("btn-pause-instructions").onclick=nd;jt("btn-catalog").onclick=xc;jt("btn-catalog-title").onclick=xc;for(const s of document.querySelectorAll(".close-btn"))s.onclick=()=>{if(Ot&&Ot.pauseSubmenu){Ot.closePauseSubmenu();return}Ot&&Ot.closeUI(),(!Ot||!(Ot.ui==="inv"&&Ot.temp))&&Ev()};jt("btn-resume").onclick=()=>{Ot&&(Ot.paused=!1,pn("screen-pause",!1),pn("cheats",!1),Ot.relock())};jt("btn-save").onclick=()=>nt("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");jt("btn-exportworld").onclick=()=>{Ot&&Ot.exportWorld()};jt("btn-quit").onclick=()=>gc();jt("btn-cheats").onclick=()=>pn("cheats",jt("cheats").classList.contains("hidden"));const id=jt("cheat-item");for(const[s,t]of Object.entries(Nt).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=s,e.textContent=t.name,id.appendChild(e)}jt("btn-cheat-add").onclick=()=>{if(!Ot)return;const s=id.value;Ot.inv.addItem(s,1)?nt("No room in your pack."):nt(`Added ${Nt[s].name}.`)};const yc=jt("cheat-quest");gi.forEach((s,t)=>{const e=document.createElement("option");e.value=String(t),e.textContent=`${t+1}. ${s.title}`,yc.appendChild(e)});{const s=document.createElement("option");s.value=String(gi.length),s.textContent="Finish the whole chain",yc.appendChild(s)}jt("btn-cheat-quest").onclick=()=>{Ot&&Ot.questJump(Number(yc.value))};for(const s of Array.from(jt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))s.onclick=()=>{if(!Ot)return;if(s.dataset.speed!==void 0){Ot.speedMul=Number(s.dataset.speed),nt(`Player speed ×${s.dataset.speed}.`);return}if(s.dataset.immortal!==void 0){Ot.survival.invincible=s.dataset.immortal==="1",nt(`Immortality ${Ot.survival.invincible?"on":"off"}.`);return}const t=Number(s.dataset.frac);Ot.setClock(t),nt(`Clock set to ${s.textContent}.`)};jt("btn-respawn").onclick=()=>{Ot&&Ot.respawn()};jt("btn-death-title").onclick=()=>gc();jt("btn-win-continue").onclick=()=>{Ot&&(Ot.paused=!1,pn("screen-win",!1),Ot.relock())};jt("btn-win-title").onclick=()=>gc();document.addEventListener("keydown",s=>{if(s.code==="Escape"&&!jt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});ed(pe.uiScale);Zo();
