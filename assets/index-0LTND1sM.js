(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="180",cd=0,Tc=1,hd=2,nu=1,ud=2,Ci=3,ji=0,bn=1,Ke=2,Xi=0,Hs=1,Ac=2,Rc=3,Cc=4,dd=5,hs=100,fd=101,pd=102,md=103,gd=104,_d=200,vd=201,xd=202,yd=203,$a=204,Ya=205,Md=206,bd=207,Sd=208,wd=209,Ed=210,Td=211,Ad=212,Rd=213,Cd=214,Ka=0,ja=1,Za=2,qs=3,Ja=4,Qa=5,tl=6,el=7,ql=0,Id=1,Pd=2,$i=0,Ld=1,Dd=2,kd=3,Ud=4,Nd=5,Fd=6,Od=7,iu=300,Xs=301,$s=302,nl=303,il=304,Uo=306,sl=1e3,ps=1001,rl=1002,Gn=1003,Bd=1004,Br=1005,hi=1006,Qo=1007,ms=1008,_i=1009,su=1010,ru=1011,yr=1012,Xl=1013,vs=1014,Di=1015,Cr=1016,$l=1017,Yl=1018,Mr=1020,ou=35902,au=35899,lu=1021,cu=1022,oi=1023,br=1026,Sr=1027,hu=1028,Kl=1029,uu=1030,jl=1031,Zl=1033,xo=33776,yo=33777,Mo=33778,bo=33779,ol=35840,al=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,vl=37813,xl=37814,yl=37815,Ml=37816,bl=37817,Sl=37818,wl=37819,El=37820,Tl=37821,Al=36492,Rl=36494,Cl=36495,Il=36283,Pl=36284,Ll=36285,Dl=36286,zd=3200,Hd=3201,du=0,Gd=1,qi="",Cn="srgb",Ys="srgb-linear",Ao="linear",_e="srgb",Es=7680,Ic=519,Vd=512,Wd=513,qd=514,fu=515,Xd=516,$d=517,Yd=518,Kd=519,Pc=35044,Lc="300 es",ui=2e3,Ro=2001;class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let i=0,o=r.length;i<o;i++)r[i].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dc=1234567;const Gs=Math.PI/180,wr=180/Math.PI;function Zs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function Jl(s,t){return(s%t+t)%t}function jd(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function Zd(s,t,e){return s!==t?(e-s)/(t-s):0}function gr(s,t,e){return(1-e)*s+e*t}function Jd(s,t,e,n){return gr(s,t,1-Math.exp(-e*n))}function Qd(s,t=1){return t-Math.abs(Jl(s,t*2)-t)}function tf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ef(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function nf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sf(s,t){return s+Math.random()*(t-s)}function rf(s){return s*(.5-Math.random())}function of(s){s!==void 0&&(Dc=s);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function af(s){return s*Gs}function lf(s){return s*wr}function cf(s){return(s&s-1)===0&&s!==0}function hf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function uf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function df(s,t,e,n,r){const i=Math.cos,o=Math.sin,l=i(e/2),h=o(e/2),a=i((t+n)/2),c=o((t+n)/2),u=i((t-n)/2),f=o((t-n)/2),m=i((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":s.set(l*c,h*u,h*f,l*a);break;case"YZY":s.set(h*f,l*c,h*u,l*a);break;case"ZXZ":s.set(h*u,h*f,l*c,l*a);break;case"XZX":s.set(l*c,h*v,h*m,l*a);break;case"YXY":s.set(h*m,l*c,h*v,l*a);break;case"ZYZ":s.set(h*v,h*m,l*c,l*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const di={DEG2RAD:Gs,RAD2DEG:wr,generateUUID:Zs,clamp:ae,euclideanModulo:Jl,mapLinear:jd,inverseLerp:Zd,lerp:gr,damp:Jd,pingpong:Qd,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:of,degToRad:af,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:hf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:df,normalize:yn,denormalize:Bs};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),i=this.x-t.x,o=this.y-t.y;return this.x=i*n-o*r+t.x,this.y=i*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,i,o,l){let h=n[r+0],a=n[r+1],c=n[r+2],u=n[r+3];const f=i[o+0],m=i[o+1],v=i[o+2],y=i[o+3];if(l===0){t[e+0]=h,t[e+1]=a,t[e+2]=c,t[e+3]=u;return}if(l===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=y;return}if(u!==y||h!==f||a!==m||c!==v){let x=1-l;const _=h*f+a*m+c*v+u*y,R=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const b=Math.sqrt(T),I=Math.atan2(b,_*R);x=Math.sin(x*I)/b,l=Math.sin(l*I)/b}const S=l*R;if(h=h*x+f*S,a=a*x+m*S,c=c*x+v*S,u=u*x+y*S,x===1-l){const b=1/Math.sqrt(h*h+a*a+c*c+u*u);h*=b,a*=b,c*=b,u*=b}}t[e]=h,t[e+1]=a,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,i,o){const l=n[r],h=n[r+1],a=n[r+2],c=n[r+3],u=i[o],f=i[o+1],m=i[o+2],v=i[o+3];return t[e]=l*v+c*u+h*m-a*f,t[e+1]=h*v+c*f+a*u-l*m,t[e+2]=a*v+c*m+l*f-h*u,t[e+3]=c*v-l*u-h*f-a*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,i=t._z,o=t._order,l=Math.cos,h=Math.sin,a=l(n/2),c=l(r/2),u=l(i/2),f=h(n/2),m=h(r/2),v=h(i/2);switch(o){case"XYZ":this._x=f*c*u+a*m*v,this._y=a*m*u-f*c*v,this._z=a*c*v+f*m*u,this._w=a*c*u-f*m*v;break;case"YXZ":this._x=f*c*u+a*m*v,this._y=a*m*u-f*c*v,this._z=a*c*v-f*m*u,this._w=a*c*u+f*m*v;break;case"ZXY":this._x=f*c*u-a*m*v,this._y=a*m*u+f*c*v,this._z=a*c*v+f*m*u,this._w=a*c*u-f*m*v;break;case"ZYX":this._x=f*c*u-a*m*v,this._y=a*m*u+f*c*v,this._z=a*c*v-f*m*u,this._w=a*c*u+f*m*v;break;case"YZX":this._x=f*c*u+a*m*v,this._y=a*m*u+f*c*v,this._z=a*c*v-f*m*u,this._w=a*c*u-f*m*v;break;case"XZY":this._x=f*c*u-a*m*v,this._y=a*m*u-f*c*v,this._z=a*c*v+f*m*u,this._w=a*c*u+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],i=e[8],o=e[1],l=e[5],h=e[9],a=e[2],c=e[6],u=e[10],f=n+l+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(i-a)*m,this._z=(o-r)*m}else if(n>l&&n>u){const m=2*Math.sqrt(1+n-l-u);this._w=(c-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(i+a)/m}else if(l>u){const m=2*Math.sqrt(1+l-n-u);this._w=(i-a)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+u-n-l);this._w=(o-r)/m,this._x=(i+a)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,i=t._z,o=t._w,l=e._x,h=e._y,a=e._z,c=e._w;return this._x=n*c+o*l+r*a-i*h,this._y=r*c+o*h+i*l-n*a,this._z=i*c+o*a+n*h-r*l,this._w=o*c-n*l-r*h-i*a,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,i=this._z,o=this._w;let l=o*t._w+n*t._x+r*t._y+i*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=r,this._z=i,this;const h=1-l*l;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*i+e*this._z,this.normalize(),this}const a=Math.sqrt(h),c=Math.atan2(a,l),u=Math.sin((1-e)*c)/a,f=Math.sin(e*c)/a;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*r,this.y=i[1]*e+i[4]*n+i[7]*r,this.z=i[2]*e+i[5]*n+i[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=t.elements,o=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*o,this.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*o,this.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,i=t.x,o=t.y,l=t.z,h=t.w,a=2*(o*r-l*n),c=2*(l*e-i*r),u=2*(i*n-o*e);return this.x=e+h*a+o*u-l*c,this.y=n+h*c+l*a-i*u,this.z=r+h*u+i*c-o*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*r,this.y=i[1]*e+i[5]*n+i[9]*r,this.z=i[2]*e+i[6]*n+i[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,i=t.z,o=e.x,l=e.y,h=e.z;return this.x=r*h-i*l,this.y=i*o-n*h,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new F,kc=new Ir;class Jt{constructor(t,e,n,r,i,o,l,h,a){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,o,l,h,a)}set(t,e,n,r,i,o,l,h,a){const c=this.elements;return c[0]=t,c[1]=r,c[2]=l,c[3]=e,c[4]=i,c[5]=h,c[6]=n,c[7]=o,c[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,o=n[0],l=n[3],h=n[6],a=n[1],c=n[4],u=n[7],f=n[2],m=n[5],v=n[8],y=r[0],x=r[3],_=r[6],R=r[1],T=r[4],S=r[7],b=r[2],I=r[5],A=r[8];return i[0]=o*y+l*R+h*b,i[3]=o*x+l*T+h*I,i[6]=o*_+l*S+h*A,i[1]=a*y+c*R+u*b,i[4]=a*x+c*T+u*I,i[7]=a*_+c*S+u*A,i[2]=f*y+m*R+v*b,i[5]=f*x+m*T+v*I,i[8]=f*_+m*S+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8];return e*o*c-e*l*a-n*i*c+n*l*h+r*i*a-r*o*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8],u=c*o-l*a,f=l*h-c*i,m=a*i-o*h,v=e*u+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=u*y,t[1]=(r*a-c*n)*y,t[2]=(l*n-r*o)*y,t[3]=f*y,t[4]=(c*e-r*h)*y,t[5]=(r*i-l*e)*y,t[6]=m*y,t[7]=(n*h-a*e)*y,t[8]=(o*e-n*i)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,i,o,l){const h=Math.cos(i),a=Math.sin(i);return this.set(n*h,n*a,-n*(h*o+a*l)+o+t,-r*a,r*h,-r*(-a*o+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(ea.makeScale(t,e)),this}rotate(t){return this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Jt;function pu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ff(){const s=Co("canvas");return s.style.display="block",s}const Uc={};function Er(s){s in Uc||(Uc[s]=!0,console.warn(s))}function pf(s,t,e){return new Promise(function(n,r){function i(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}const Nc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(r,i,o){return this.enabled===!1||i===o||!i||!o||(this.spaces[i].transfer===_e&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[i].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[i].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,i){return this.convert(r,this.workingColorSpace,i)},colorSpaceToWorking:function(r,i){return this.convert(r,i,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qi?Ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,i=this.workingColorSpace){return r.fromArray(this.spaces[i].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,i,o){return r.copy(this.spaces[i].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,i){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,i)},toWorkingColorSpace:function(r,i){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,i)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ys]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),s}const ue=mf();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class gf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ts===void 0&&(Ts=Co("canvas")),Ts.width=t.width,Ts.height=t.height;const r=Ts.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),i=r.data;for(let o=0;o<i.length;o++)i[o]=Ni(i[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _f=0;class Ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?i.push(na(r[o].image)):i.push(na(r[o]))}else i=na(r);n.url=i}return e||(t.images[this.uuid]=n),n}}function na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;const ia=new F;class Sn extends js{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=ps,r=ps,i=hi,o=ms,l=oi,h=_i,a=Sn.DEFAULT_ANISOTROPY,c=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Zs(),this.name="",this.source=new Ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sl:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sl:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=iu;Sn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*i,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*i,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*i,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,i;const h=t.elements,a=h[0],c=h[4],u=h[8],f=h[1],m=h[5],v=h[9],y=h[2],x=h[6],_=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+y)<.1&&Math.abs(v+x)<.1&&Math.abs(a+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(a+1)/2,S=(m+1)/2,b=(_+1)/2,I=(c+f)/4,A=(u+y)/4,p=(v+x)/4;return T>S&&T>b?T<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(T),r=I/n,i=A/n):S>b?S<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(S),n=I/r,i=p/r):b<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(b),n=A/i,r=p/i),this.set(n,r,i,e),this}let R=Math.sqrt((x-v)*(x-v)+(u-y)*(u-y)+(f-c)*(f-c));return Math.abs(R)<.001&&(R=1),this.x=(x-v)/R,this.y=(u-y)/R,this.z=(f-c)/R,this.w=Math.acos((a+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends js{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:n.depth},i=new Sn(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ql(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mu extends Sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends Sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=i.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(i,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}const r=t.children;for(let i=0,o=r.length;i<o;i++)this.expandByObject(r[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Hr.subVectors(this.max,sr),As.subVectors(t.a,sr),Rs.subVectors(t.b,sr),Cs.subVectors(t.c,sr),Oi.subVectors(Rs,As),Bi.subVectors(Cs,Rs),es.subVectors(As,Cs);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-es.z,es.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,es.z,0,-es.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-es.y,es.x,0];return!sa(e,As,Rs,Cs,Hr)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,As,Rs,Cs,Hr))?!1:(Gr.crossVectors(Oi,Bi),e=[Gr.x,Gr.y,Gr.z],sa(e,As,Rs,Cs,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wi=[new F,new F,new F,new F,new F,new F,new F,new F],ti=new F,zr=new Pr,As=new F,Rs=new F,Cs=new F,Oi=new F,Bi=new F,es=new F,sr=new F,Hr=new F,Gr=new F,ns=new F;function sa(s,t,e,n,r){for(let i=0,o=s.length-3;i<=o;i+=3){ns.fromArray(s,i);const l=r.x*Math.abs(ns.x)+r.y*Math.abs(ns.y)+r.z*Math.abs(ns.z),h=t.dot(ns),a=e.dot(ns),c=n.dot(ns);if(Math.max(-Math.max(h,a,c),Math.min(h,a,c))>l)return!1}return!0}const Mf=new Pr,rr=new F,ra=new F;class Lr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mf.setFromPoints(t).getCenter(n);let r=0;for(let i=0,o=t.length;i<o;i++)r=Math.max(r,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(rr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(ra)),this.expandByPoint(rr.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ei=new F,oa=new F,Vr=new F,zi=new F,aa=new F,Wr=new F,la=new F;class tc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){oa.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(oa);const i=t.distanceTo(e)*.5,o=-this.direction.dot(Vr),l=zi.dot(this.direction),h=-zi.dot(Vr),a=zi.lengthSq(),c=Math.abs(1-o*o);let u,f,m,v;if(c>0)if(u=o*h-l,f=o*l-h,v=i*c,u>=0)if(f>=-v)if(f<=v){const y=1/c;u*=y,f*=y,m=u*(u+o*f+2*l)+f*(o*u+f+2*h)+a}else f=i,u=Math.max(0,-(o*f+l)),m=-u*u+f*(f+2*h)+a;else f=-i,u=Math.max(0,-(o*f+l)),m=-u*u+f*(f+2*h)+a;else f<=-v?(u=Math.max(0,-(-o*i+l)),f=u>0?-i:Math.min(Math.max(-i,-h),i),m=-u*u+f*(f+2*h)+a):f<=v?(u=0,f=Math.min(Math.max(-i,-h),i),m=f*(f+2*h)+a):(u=Math.max(0,-(o*i+l)),f=u>0?i:Math.min(Math.max(-i,-h),i),m=-u*u+f*(f+2*h)+a);else f=o>0?-i:i,u=Math.max(0,-(o*f+l)),m=-u*u+f*(f+2*h)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oa).addScaledVector(Vr,f),m}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),r=Ei.dot(Ei)-n*n,i=t.radius*t.radius;if(r>i)return null;const o=Math.sqrt(i-r),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,i,o,l,h;const a=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return a>=0?(n=(t.min.x-f.x)*a,r=(t.max.x-f.x)*a):(n=(t.max.x-f.x)*a,r=(t.min.x-f.x)*a),c>=0?(i=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(i=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),n>o||i>r||((i>n||isNaN(n))&&(n=i),(o<r||isNaN(r))&&(r=o),u>=0?(l=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,r,i){aa.subVectors(e,t),Wr.subVectors(n,t),la.crossVectors(aa,Wr);let o=this.direction.dot(la),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;zi.subVectors(this.origin,t);const h=l*this.direction.dot(Wr.crossVectors(zi,Wr));if(h<0)return null;const a=l*this.direction.dot(aa.cross(zi));if(a<0||h+a>o)return null;const c=-l*zi.dot(la);return c<0?null:this.at(c/o,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,r,i,o,l,h,a,c,u,f,m,v,y,x){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,o,l,h,a,c,u,f,m,v,y,x)}set(t,e,n,r,i,o,l,h,a,c,u,f,m,v,y,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=i,_[5]=o,_[9]=l,_[13]=h,_[2]=a,_[6]=c,_[10]=u,_[14]=f,_[3]=m,_[7]=v,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Is.setFromMatrixColumn(t,0).length(),i=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,i=t.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(r),a=Math.sin(r),c=Math.cos(i),u=Math.sin(i);if(t.order==="XYZ"){const f=o*c,m=o*u,v=l*c,y=l*u;e[0]=h*c,e[4]=-h*u,e[8]=a,e[1]=m+v*a,e[5]=f-y*a,e[9]=-l*h,e[2]=y-f*a,e[6]=v+m*a,e[10]=o*h}else if(t.order==="YXZ"){const f=h*c,m=h*u,v=a*c,y=a*u;e[0]=f+y*l,e[4]=v*l-m,e[8]=o*a,e[1]=o*u,e[5]=o*c,e[9]=-l,e[2]=m*l-v,e[6]=y+f*l,e[10]=o*h}else if(t.order==="ZXY"){const f=h*c,m=h*u,v=a*c,y=a*u;e[0]=f-y*l,e[4]=-o*u,e[8]=v+m*l,e[1]=m+v*l,e[5]=o*c,e[9]=y-f*l,e[2]=-o*a,e[6]=l,e[10]=o*h}else if(t.order==="ZYX"){const f=o*c,m=o*u,v=l*c,y=l*u;e[0]=h*c,e[4]=v*a-m,e[8]=f*a+y,e[1]=h*u,e[5]=y*a+f,e[9]=m*a-v,e[2]=-a,e[6]=l*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,m=o*a,v=l*h,y=l*a;e[0]=h*c,e[4]=y-f*u,e[8]=v*u+m,e[1]=u,e[5]=o*c,e[9]=-l*c,e[2]=-a*c,e[6]=m*u+v,e[10]=f-y*u}else if(t.order==="XZY"){const f=o*h,m=o*a,v=l*h,y=l*a;e[0]=h*c,e[4]=-u,e[8]=a*c,e[1]=f*u+y,e[5]=o*c,e[9]=m*u-v,e[2]=v*u-m,e[6]=l*c,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Sf)}lookAt(t,e,n){const r=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Hi.crossVectors(n,Fn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Hi.crossVectors(n,Fn)),Hi.normalize(),qr.crossVectors(Fn,Hi),r[0]=Hi.x,r[4]=qr.x,r[8]=Fn.x,r[1]=Hi.y,r[5]=qr.y,r[9]=Fn.y,r[2]=Hi.z,r[6]=qr.z,r[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,o=n[0],l=n[4],h=n[8],a=n[12],c=n[1],u=n[5],f=n[9],m=n[13],v=n[2],y=n[6],x=n[10],_=n[14],R=n[3],T=n[7],S=n[11],b=n[15],I=r[0],A=r[4],p=r[8],d=r[12],g=r[1],M=r[5],C=r[9],L=r[13],k=r[2],U=r[6],H=r[10],$=r[14],V=r[3],J=r[7],et=r[11],gt=r[15];return i[0]=o*I+l*g+h*k+a*V,i[4]=o*A+l*M+h*U+a*J,i[8]=o*p+l*C+h*H+a*et,i[12]=o*d+l*L+h*$+a*gt,i[1]=c*I+u*g+f*k+m*V,i[5]=c*A+u*M+f*U+m*J,i[9]=c*p+u*C+f*H+m*et,i[13]=c*d+u*L+f*$+m*gt,i[2]=v*I+y*g+x*k+_*V,i[6]=v*A+y*M+x*U+_*J,i[10]=v*p+y*C+x*H+_*et,i[14]=v*d+y*L+x*$+_*gt,i[3]=R*I+T*g+S*k+b*V,i[7]=R*A+T*M+S*U+b*J,i[11]=R*p+T*C+S*H+b*et,i[15]=R*d+T*L+S*$+b*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],i=t[12],o=t[1],l=t[5],h=t[9],a=t[13],c=t[2],u=t[6],f=t[10],m=t[14],v=t[3],y=t[7],x=t[11],_=t[15];return v*(+i*h*u-r*a*u-i*l*f+n*a*f+r*l*m-n*h*m)+y*(+e*h*m-e*a*f+i*o*f-r*o*m+r*a*c-i*h*c)+x*(+e*a*u-e*l*m-i*o*u+n*o*m+i*l*c-n*a*c)+_*(-r*l*c-e*h*u+e*l*f+r*o*u-n*o*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],l=t[5],h=t[6],a=t[7],c=t[8],u=t[9],f=t[10],m=t[11],v=t[12],y=t[13],x=t[14],_=t[15],R=u*x*a-y*f*a+y*h*m-l*x*m-u*h*_+l*f*_,T=v*f*a-c*x*a-v*h*m+o*x*m+c*h*_-o*f*_,S=c*y*a-v*u*a+v*l*m-o*y*m-c*l*_+o*u*_,b=v*u*h-c*y*h-v*l*f+o*y*f+c*l*x-o*u*x,I=e*R+n*T+r*S+i*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/I;return t[0]=R*A,t[1]=(y*f*i-u*x*i-y*r*m+n*x*m+u*r*_-n*f*_)*A,t[2]=(l*x*i-y*h*i+y*r*a-n*x*a-l*r*_+n*h*_)*A,t[3]=(u*h*i-l*f*i-u*r*a+n*f*a+l*r*m-n*h*m)*A,t[4]=T*A,t[5]=(c*x*i-v*f*i+v*r*m-e*x*m-c*r*_+e*f*_)*A,t[6]=(v*h*i-o*x*i-v*r*a+e*x*a+o*r*_-e*h*_)*A,t[7]=(o*f*i-c*h*i+c*r*a-e*f*a-o*r*m+e*h*m)*A,t[8]=S*A,t[9]=(v*u*i-c*y*i-v*n*m+e*y*m+c*n*_-e*u*_)*A,t[10]=(o*y*i-v*l*i+v*n*a-e*y*a-o*n*_+e*l*_)*A,t[11]=(c*l*i-o*u*i-c*n*a+e*u*a+o*n*m-e*l*m)*A,t[12]=b*A,t[13]=(c*y*r-v*u*r+v*n*f-e*y*f-c*n*x+e*u*x)*A,t[14]=(v*l*r-o*y*r-v*n*h+e*y*h+o*n*x-e*l*x)*A,t[15]=(o*u*r-c*l*r+c*n*h-e*u*h-o*n*f+e*l*f)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,i=t.z;return e[0]*=n,e[4]*=r,e[8]*=i,e[1]*=n,e[5]*=r,e[9]*=i,e[2]*=n,e[6]*=r,e[10]*=i,e[3]*=n,e[7]*=r,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),i=1-n,o=t.x,l=t.y,h=t.z,a=i*o,c=i*l;return this.set(a*o+n,a*l-r*h,a*h+r*l,0,a*l+r*h,c*l+n,c*h-r*o,0,a*h-r*l,c*h+r*o,i*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,i,o){return this.set(1,n,i,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,i=e._x,o=e._y,l=e._z,h=e._w,a=i+i,c=o+o,u=l+l,f=i*a,m=i*c,v=i*u,y=o*c,x=o*u,_=l*u,R=h*a,T=h*c,S=h*u,b=n.x,I=n.y,A=n.z;return r[0]=(1-(y+_))*b,r[1]=(m+S)*b,r[2]=(v-T)*b,r[3]=0,r[4]=(m-S)*I,r[5]=(1-(f+_))*I,r[6]=(x+R)*I,r[7]=0,r[8]=(v+T)*A,r[9]=(x-R)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let i=Is.set(r[0],r[1],r[2]).length();const o=Is.set(r[4],r[5],r[6]).length(),l=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),t.x=r[12],t.y=r[13],t.z=r[14],ei.copy(this);const a=1/i,c=1/o,u=1/l;return ei.elements[0]*=a,ei.elements[1]*=a,ei.elements[2]*=a,ei.elements[4]*=c,ei.elements[5]*=c,ei.elements[6]*=c,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),n.x=i,n.y=o,n.z=l,this}makePerspective(t,e,n,r,i,o,l=ui,h=!1){const a=this.elements,c=2*i/(e-t),u=2*i/(n-r),f=(e+t)/(e-t),m=(n+r)/(n-r);let v,y;if(h)v=i/(o-i),y=o*i/(o-i);else if(l===ui)v=-(o+i)/(o-i),y=-2*o*i/(o-i);else if(l===Ro)v=-o/(o-i),y=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,r,i,o,l=ui,h=!1){const a=this.elements,c=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),m=-(n+r)/(n-r);let v,y;if(h)v=1/(o-i),y=o/(o-i);else if(l===ui)v=-2/(o-i),y=-(o+i)/(o-i);else if(l===Ro)v=-1/(o-i),y=-i/(o-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=u,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=v,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Is=new F,ei=new Ae,bf=new F(0,0,0),Sf=new F(1,1,1),Hi=new F,qr=new F,Fn=new F,Oc=new Ae,Bc=new Ir;class vi{constructor(t=0,e=0,n=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,i=r[0],o=r[4],l=r[8],h=r[1],a=r[5],c=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(h,a)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(h,i));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,i)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,a),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wf=0;const zc=new F,Ps=new Ir,Ti=new Ae,Xr=new F,or=new F,Ef=new F,Tf=new Ir,Hc=new F(1,0,0),Gc=new F(0,1,0),Vc=new F(0,0,1),Wc={type:"added"},Af={type:"removed"},Ls={type:"childadded",child:null},ca={type:"childremoved",child:null};class We extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new F,e=new vi,n=new Ir,r=new F(1,1,1);function i(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Jt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(Gc,t)}rotateZ(t){return this.rotateOnAxis(Vc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(Gc,t)}translateZ(t){return this.translateOnAxis(Vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(or,Xr,this.up):Ti.lookAt(Xr,or,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Ps.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Af),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let a=0,c=h.length;a<c;a++){const u=h[a];i(t.shapes,u)}else i(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,a=this.material.length;h<a;h++)l.push(i(t.materials,this.material[h]));r.material=l}else r.material=i(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(i(t.animations,h))}}if(e){const l=o(t.geometries),h=o(t.materials),a=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),v=o(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),a.length>0&&(n.textures=a),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(l){const h=[];for(const a in l){const c=l[a];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}We.DEFAULT_UP=new F(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new F,Ai=new F,ha=new F,Ri=new F,Ds=new F,ks=new F,qc=new F,ua=new F,da=new F,fa=new F,pa=new ve,ma=new ve,ga=new ve;class Kn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ni.subVectors(t,e),r.cross(ni);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(t,e,n,r,i){ni.subVectors(r,e),Ai.subVectors(n,e),ha.subVectors(t,e);const o=ni.dot(ni),l=ni.dot(Ai),h=ni.dot(ha),a=Ai.dot(Ai),c=Ai.dot(ha),u=o*a-l*l;if(u===0)return i.set(0,0,0),null;const f=1/u,m=(a*h-l*c)*f,v=(o*c-l*h)*f;return i.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,r,i,o,l,h){return this.getBarycoord(t,e,n,r,Ri)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(i,Ri.x),h.addScaledVector(o,Ri.y),h.addScaledVector(l,Ri.z),h)}static getInterpolatedAttribute(t,e,n,r,i,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(t,e),ma.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(pa,i.x),o.addScaledVector(ma,i.y),o.addScaledVector(ga,i.z),o}static isFrontFacing(t,e,n,r){return ni.subVectors(n,e),Ai.subVectors(t,e),ni.cross(Ai).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ni.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,i){return Kn.getInterpolation(t,this.a,this.b,this.c,e,n,r,i)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,i=this.c;let o,l;Ds.subVectors(r,n),ks.subVectors(i,n),ua.subVectors(t,n);const h=Ds.dot(ua),a=ks.dot(ua);if(h<=0&&a<=0)return e.copy(n);da.subVectors(t,r);const c=Ds.dot(da),u=ks.dot(da);if(c>=0&&u<=c)return e.copy(r);const f=h*u-c*a;if(f<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(n).addScaledVector(Ds,o);fa.subVectors(t,i);const m=Ds.dot(fa),v=ks.dot(fa);if(v>=0&&m<=v)return e.copy(i);const y=m*a-h*v;if(y<=0&&a>=0&&v<=0)return l=a/(a-v),e.copy(n).addScaledVector(ks,l);const x=c*v-m*u;if(x<=0&&u-c>=0&&m-v>=0)return qc.subVectors(i,r),l=(u-c)/(u-c+(m-v)),e.copy(r).addScaledVector(qc,l);const _=1/(x+y+f);return o=y*_,l=f*_,e.copy(n).addScaledVector(Ds,o).addScaledVector(ks,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function _a(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=Jl(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,o=2*n-i;this.r=_a(o,i,t+1/3),this.g=_a(o,i,t),this.b=_a(o,i,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=Cn){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=r[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return ue.workingToColorSpace(hn.copy(this),t),Math.round(ae(hn.r*255,0,255))*65536+Math.round(ae(hn.g*255,0,255))*256+Math.round(ae(hn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,i=hn.b,o=Math.max(n,r,i),l=Math.min(n,r,i);let h,a;const c=(l+o)/2;if(l===o)h=0,a=0;else{const u=o-l;switch(a=c<=.5?u/(o+l):u/(2-o-l),o){case n:h=(r-i)/u+(r<i?6:0);break;case r:h=(i-n)/u+2;break;case i:h=(n-r)/u+4;break}h/=6}return t.h=h,t.s=a,t.l=c,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Cn){ue.workingToColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,r=hn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL($r);const n=gr(Gi.h,$r.h,e),r=gr(Gi.s,$r.s,e),i=gr(Gi.l,$r.l,e);return this.setHSL(n,r,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*r,this.g=i[1]*e+i[4]*n+i[7]*r,this.b=i[2]*e+i[5]*n+i[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new $t;$t.NAMES=_u;let Rf=0;class Ms extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Hs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ya,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const o=[];for(const l in i){const h=i[l];delete h.metadata,o.push(h)}return o}if(e){const i=r(t.textures),o=r(t.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Wi extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new F,Yr=new ce;let Cf=0;class pi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,i){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),r=yn(r,this.array),i=yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}}class vu extends pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xu extends pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends pi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let If=0;const qn=new Ae,va=new We,Us=new F,On=new Pr,ar=new Pr,Ye=new F;class an extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pu(t)?xu:vu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Jt().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,i=t.length;r<i;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const i=t[r];e.setXYZ(r,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const i=e[n];On.setFromBufferAttribute(i),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const l=e[i];ar.setFromBufferAttribute(l),this.morphTargetsRelative?(Ye.addVectors(On.min,ar.min),On.expandByPoint(Ye),Ye.addVectors(On.max,ar.max),On.expandByPoint(Ye)):(On.expandByPoint(ar.min),On.expandByPoint(ar.max))}On.getCenter(n);let r=0;for(let i=0,o=t.count;i<o;i++)Ye.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Ye));if(e)for(let i=0,o=e.length;i<o;i++){const l=e[i],h=this.morphTargetsRelative;for(let a=0,c=l.count;a<c;a++)Ye.fromBufferAttribute(l,a),h&&(Us.fromBufferAttribute(t,a),Ye.add(Us)),r=Math.max(r,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],h=[];for(let p=0;p<n.count;p++)l[p]=new F,h[p]=new F;const a=new F,c=new F,u=new F,f=new ce,m=new ce,v=new ce,y=new F,x=new F;function _(p,d,g){a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),u.fromBufferAttribute(n,g),f.fromBufferAttribute(i,p),m.fromBufferAttribute(i,d),v.fromBufferAttribute(i,g),c.sub(a),u.sub(a),m.sub(f),v.sub(f);const M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(M),x.copy(u).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(M),l[p].add(y),l[d].add(y),l[g].add(y),h[p].add(x),h[d].add(x),h[g].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let p=0,d=R.length;p<d;++p){const g=R[p],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const T=new F,S=new F,b=new F,I=new F;function A(p){b.fromBufferAttribute(r,p),I.copy(b);const d=l[p];T.copy(d),T.sub(b.multiplyScalar(b.dot(d))).normalize(),S.crossVectors(I,d);const M=S.dot(h[p])<0?-1:1;o.setXYZW(p,T.x,T.y,T.z,M)}for(let p=0,d=R.length;p<d;++p){const g=R[p],M=g.start,C=g.count;for(let L=M,k=M+C;L<k;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,i=new F,o=new F,l=new F,h=new F,a=new F,c=new F,u=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),y=t.getX(f+1),x=t.getX(f+2);r.fromBufferAttribute(e,v),i.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),c.subVectors(o,i),u.subVectors(r,i),c.cross(u),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),l.add(c),h.add(c),a.add(c),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(x,a.x,a.y,a.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),i.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,i),u.subVectors(r,i),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(l,h){const a=l.array,c=l.itemSize,u=l.normalized,f=new a.constructor(h.length*c);let m=0,v=0;for(let y=0,x=h.length;y<x;y++){l.isInterleavedBufferAttribute?m=h[y]*l.data.stride+l.offset:m=h[y]*c;for(let _=0;_<c;_++)f[v++]=a[m++]}return new pi(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],a=t(h,n);e.setAttribute(l,a)}const i=this.morphAttributes;for(const l in i){const h=[],a=i[l];for(let c=0,u=a.length;c<u;c++){const f=a[c],m=t(f,n);h.push(m)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const a=o[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const a in h)h[a]!==void 0&&(t[a]=h[a]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const a=n[h];t.data.attributes[h]=a.toJSON(t.data)}const r={};let i=!1;for(const h in this.morphAttributes){const a=this.morphAttributes[h],c=[];for(let u=0,f=a.length;u<f;u++){const m=a[u];c.push(m.toJSON(t.data))}c.length>0&&(r[h]=c,i=!0)}i&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const a in r){const c=r[a];this.setAttribute(a,c.clone(e))}const i=t.morphAttributes;for(const a in i){const c=[],u=i[a];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(e));this.morphAttributes[a]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new Ae,is=new tc,Kr=new Lr,$c=new F,jr=new F,Zr=new F,Jr=new F,xa=new F,Qr=new F,Yc=new F,to=new F;class tn extends We{constructor(t=new an,e=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(i&&l){Qr.set(0,0,0);for(let h=0,a=i.length;h<a;h++){const c=l[h],u=i[h];c!==0&&(xa.fromBufferAttribute(u,t),o?Qr.addScaledVector(xa,c):Qr.addScaledVector(xa.sub(e),c))}e.add(Qr)}return e}raycast(t,e){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),is.copy(t.ray).recast(t.near),!(Kr.containsPoint(is.origin)===!1&&(is.intersectSphere(Kr,$c)===null||is.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Xc.copy(i).invert(),is.copy(t.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let r;const i=this.geometry,o=this.material,l=i.index,h=i.attributes.position,a=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,f=i.groups,m=i.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const x=f[v],_=o[x.materialIndex],R=Math.max(x.start,m.start),T=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=R,b=T;S<b;S+=3){const I=l.getX(S),A=l.getX(S+1),p=l.getX(S+2);r=eo(this,_,t,n,a,c,u,I,A,p),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const R=l.getX(x),T=l.getX(x+1),S=l.getX(x+2);r=eo(this,o,t,n,a,c,u,R,T,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const x=f[v],_=o[x.materialIndex],R=Math.max(x.start,m.start),T=Math.min(h.count,Math.min(x.start+x.count,m.start+m.count));for(let S=R,b=T;S<b;S+=3){const I=S,A=S+1,p=S+2;r=eo(this,_,t,n,a,c,u,I,A,p),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let x=v,_=y;x<_;x+=3){const R=x,T=x+1,S=x+2;r=eo(this,o,t,n,a,c,u,R,T,S),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function Pf(s,t,e,n,r,i,o,l){let h;if(t.side===bn?h=n.intersectTriangle(o,i,r,!0,l):h=n.intersectTriangle(r,i,o,t.side===ji,l),h===null)return null;to.copy(l),to.applyMatrix4(s.matrixWorld);const a=e.ray.origin.distanceTo(to);return a<e.near||a>e.far?null:{distance:a,point:to.clone(),object:s}}function eo(s,t,e,n,r,i,o,l,h,a){s.getVertexPosition(l,jr),s.getVertexPosition(h,Zr),s.getVertexPosition(a,Jr);const c=Pf(s,t,e,n,jr,Zr,Jr,Yc);if(c){const u=new F;Kn.getBarycoord(Yc,jr,Zr,Jr,u),r&&(c.uv=Kn.getInterpolatedAttribute(r,l,h,a,u,new ce)),i&&(c.uv1=Kn.getInterpolatedAttribute(i,l,h,a,u,new ce)),o&&(c.normal=Kn.getInterpolatedAttribute(o,l,h,a,u,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a:l,b:h,c:a,normal:new F,materialIndex:0};Kn.getNormal(jr,Zr,Jr,f.normal),c.face=f,c.barycoord=u}return c}class Zi extends an{constructor(t=1,e=1,n=1,r=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:i,depthSegments:o};const l=this;r=Math.floor(r),i=Math.floor(i),o=Math.floor(o);const h=[],a=[],c=[],u=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,o,i,0),v("z","y","x",1,-1,n,e,-t,o,i,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,i,4),v("x","y","z",-1,-1,t,e,-n,r,i,5),this.setIndex(h),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2));function v(y,x,_,R,T,S,b,I,A,p,d){const g=S/A,M=b/p,C=S/2,L=b/2,k=I/2,U=A+1,H=p+1;let $=0,V=0;const J=new F;for(let et=0;et<H;et++){const gt=et*M-L;for(let Rt=0;Rt<U;Rt++){const kt=Rt*g-C;J[y]=kt*R,J[x]=gt*T,J[_]=k,a.push(J.x,J.y,J.z),J[y]=0,J[x]=0,J[_]=I>0?1:-1,c.push(J.x,J.y,J.z),u.push(Rt/A),u.push(1-et/p),$+=1}}for(let et=0;et<p;et++)for(let gt=0;gt<A;gt++){const Rt=f+gt+U*et,kt=f+gt+U*(et+1),Dt=f+(gt+1)+U*(et+1),Xt=f+(gt+1)+U*et;h.push(Rt,kt,Xt),h.push(kt,Dt,Xt),V+=6}l.addGroup(m,V,d),m+=V,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Mn(s){const t={};for(let e=0;e<s.length;e++){const n=Ks(s[e]);for(const r in n)t[r]=n[r]}return t}function Lf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Df={clone:Ks,merge:Mn};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mu extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new F,Kc=new ce,jc=new ce;class zn extends Mu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,Kc,jc),e.subVectors(jc,Kc)}setViewOffset(t,e,n,r,i,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,i=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,a=o.fullHeight;i+=o.offsetX*r/h,e-=o.offsetY*n/a,r*=o.width/h,n*=o.height/a}const l=this.filmOffset;l!==0&&(i+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,Fs=1;class Nf extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Ns,Fs,t,e);r.layers=this.layers,this.add(r);const i=new zn(Ns,Fs,t,e);i.layers=this.layers,this.add(i);const o=new zn(Ns,Fs,t,e);o.layers=this.layers,this.add(o);const l=new zn(Ns,Fs,t,e);l.layers=this.layers,this.add(l);const h=new zn(Ns,Fs,t,e);h.layers=this.layers,this.add(h);const a=new zn(Ns,Fs,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,i,o,l,h]=e;for(const a of e)this.remove(a);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,o,l,h,a,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,i),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,a),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,c),t.setRenderTarget(u,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class bu extends Sn{constructor(t=[],e=Xs,n,r,i,o,l,h,a,c){super(t,e,n,r,i,o,l,h,a,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ff extends xs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new bu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zi(5,5,5),i=new xi({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Xi});i.uniforms.tEquirect.value=e;const o=new tn(r,i),l=e.minFilter;return e.minFilter===ms&&(e.minFilter=hi),new Nf(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const i=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(i)}}class le extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Of={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,i=null,o=null;const l=this._targetRay,h=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){o=!0;for(const y of t.hand.values()){const x=e.getJointPose(y,n),_=this._getHandJoint(a,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const c=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,v=.005;a.inputState.pinching&&f>m+v?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&f<=m-v&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(h.matrix.fromArray(i.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,i.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(i.linearVelocity)):h.hasLinearVelocity=!1,i.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(i.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Of)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=i!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ec{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bf extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ma=new F,zf=new F,Hf=new Jt;class as{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ma.subVectors(n,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hf.getNormalMatrix(t),r=this.coplanarPoint(Ma).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Lr,Gf=new ce(.5,.5),no=new F;class nc{constructor(t=new as,e=new as,n=new as,r=new as,i=new as,o=new as){this.planes=[t,e,n,r,i,o]}set(t,e,n,r,i,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(i),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){const r=this.planes,i=t.elements,o=i[0],l=i[1],h=i[2],a=i[3],c=i[4],u=i[5],f=i[6],m=i[7],v=i[8],y=i[9],x=i[10],_=i[11],R=i[12],T=i[13],S=i[14],b=i[15];if(r[0].setComponents(a-o,m-c,_-v,b-R).normalize(),r[1].setComponents(a+o,m+c,_+v,b+R).normalize(),r[2].setComponents(a+l,m+u,_+y,b+T).normalize(),r[3].setComponents(a-l,m-u,_-y,b-T).normalize(),n)r[4].setComponents(h,f,x,S).normalize(),r[5].setComponents(a-h,m-f,_-x,b-S).normalize();else if(r[4].setComponents(a-h,m-f,_-x,b-S).normalize(),e===ui)r[5].setComponents(a+h,m+f,_+x,b+S).normalize();else if(e===Ro)r[5].setComponents(h,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);const e=Gf.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(no.x=r.normal.x>0?t.max.x:t.min.x,no.y=r.normal.y>0?t.max.y:t.min.y,no.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Su extends Ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Io=new F,Po=new F,Zc=new Ae,lr=new tc,io=new Lr,ba=new F,Jc=new F;class Vf extends We{constructor(t=new an,e=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,i=e.count;r<i;r++)Io.fromBufferAttribute(e,r-1),Po.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Io.distanceTo(Po);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,i=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),io.radius+=i,t.ray.intersectsSphere(io)===!1)return;Zc.copy(r).invert(),lr.copy(t.ray).applyMatrix4(Zc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let y=m,x=v-1;y<x;y+=a){const _=c.getX(y),R=c.getX(y+1),T=so(this,t,lr,h,_,R,y);T&&e.push(T)}if(this.isLineLoop){const y=c.getX(v-1),x=c.getX(m),_=so(this,t,lr,h,y,x,v-1);_&&e.push(_)}}else{const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=m,x=v-1;y<x;y+=a){const _=so(this,t,lr,h,y,y+1,y);_&&e.push(_)}if(this.isLineLoop){const y=so(this,t,lr,h,v-1,m,v-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function so(s,t,e,n,r,i,o){const l=s.geometry.attributes.position;if(Io.fromBufferAttribute(l,r),Po.fromBufferAttribute(l,i),e.distanceSqToSegment(Io,Po,ba,Jc)>n)return;ba.applyMatrix4(s.matrixWorld);const a=t.ray.origin.distanceTo(ba);if(!(a<t.near||a>t.far))return{distance:a,point:Jc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Qc=new F,th=new F;class Wf extends Vf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,i=e.count;r<i;r+=2)Qc.fromBufferAttribute(e,r),th.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qc.distanceTo(th);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kl extends Ms{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const eh=new Ae,Ul=new tc,ro=new Lr,oo=new F;class nh extends We{constructor(t=new an,e=new kl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,i=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),ro.radius+=i,t.ray.intersectsSphere(ro)===!1)return;eh.copy(r).invert(),Ul.copy(t.ray).applyMatrix4(eh);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,a=n.index,u=n.attributes.position;if(a!==null){const f=Math.max(0,o.start),m=Math.min(a.count,o.start+o.count);for(let v=f,y=m;v<y;v++){const x=a.getX(v);oo.fromBufferAttribute(u,x),ih(oo,x,h,r,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,y=m;v<y;v++)oo.fromBufferAttribute(u,v),ih(oo,v,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const l=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function ih(s,t,e,n,r,i,o){const l=Ul.distanceSqToPoint(s);if(l<e){const h=new F;Ul.closestPointToPoint(s,h),h.applyMatrix4(n);const a=r.ray.origin.distanceTo(h);if(a<r.near||a>r.far)return;i.push({distance:a,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wu extends Sn{constructor(t,e,n,r,i,o,l,h,a){super(t,e,n,r,i,o,l,h,a),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eu extends Sn{constructor(t,e,n=vs,r,i,o,l=Gn,h=Gn,a,c=br,u=1){if(c!==br&&c!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,i,o,l,h,c,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ql(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tu extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Lo extends an{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const i=[],o=[],l=[],h=[],a=new F,c=new ce;o.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*r;a.x=t*Math.cos(m),a.y=t*Math.sin(m),o.push(a.x,a.y,a.z),l.push(0,0,1),c.x=(o[f]/t+1)/2,c.y=(o[f+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)i.push(u,u+1,0);this.setIndex(i),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ic extends an{constructor(t=1,e=1,n=1,r=32,i=1,o=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:l,thetaLength:h};const a=this;r=Math.floor(r),i=Math.floor(i);const c=[],u=[],f=[],m=[];let v=0;const y=[],x=n/2;let _=0;R(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(m,2));function R(){const S=new F,b=new F;let I=0;const A=(e-t)/n;for(let p=0;p<=i;p++){const d=[],g=p/i,M=g*(e-t)+t;for(let C=0;C<=r;C++){const L=C/r,k=L*h+l,U=Math.sin(k),H=Math.cos(k);b.x=M*U,b.y=-g*n+x,b.z=M*H,u.push(b.x,b.y,b.z),S.set(U,A,H).normalize(),f.push(S.x,S.y,S.z),m.push(L,1-g),d.push(v++)}y.push(d)}for(let p=0;p<r;p++)for(let d=0;d<i;d++){const g=y[d][p],M=y[d+1][p],C=y[d+1][p+1],L=y[d][p+1];(t>0||d!==0)&&(c.push(g,M,L),I+=3),(e>0||d!==i-1)&&(c.push(M,C,L),I+=3)}a.addGroup(_,I,0),_+=I}function T(S){const b=v,I=new ce,A=new F;let p=0;const d=S===!0?t:e,g=S===!0?1:-1;for(let C=1;C<=r;C++)u.push(0,x*g,0),f.push(0,g,0),m.push(.5,.5),v++;const M=v;for(let C=0;C<=r;C++){const k=C/r*h+l,U=Math.cos(k),H=Math.sin(k);A.x=d*H,A.y=x*g,A.z=d*U,u.push(A.x,A.y,A.z),f.push(0,g,0),I.x=U*.5+.5,I.y=H*.5*g+.5,m.push(I.x,I.y),v++}for(let C=0;C<r;C++){const L=b+C,k=M+C;S===!0?c.push(k,k+1,L):c.push(k+1,k,L),p+=3}a.addGroup(_,p,S===!0?1:2),_+=p}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ao=new F,lo=new F,Sa=new F,co=new Kn;class qf extends an{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),i=Math.cos(Gs*e),o=t.getIndex(),l=t.getAttribute("position"),h=o?o.count:l.count,a=[0,0,0],c=["a","b","c"],u=new Array(3),f={},m=[];for(let v=0;v<h;v+=3){o?(a[0]=o.getX(v),a[1]=o.getX(v+1),a[2]=o.getX(v+2)):(a[0]=v,a[1]=v+1,a[2]=v+2);const{a:y,b:x,c:_}=co;if(y.fromBufferAttribute(l,a[0]),x.fromBufferAttribute(l,a[1]),_.fromBufferAttribute(l,a[2]),co.getNormal(Sa),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let R=0;R<3;R++){const T=(R+1)%3,S=u[R],b=u[T],I=co[c[R]],A=co[c[T]],p=`${S}_${b}`,d=`${b}_${S}`;d in f&&f[d]?(Sa.dot(f[d].normal)<=i&&(m.push(I.x,I.y,I.z),m.push(A.x,A.y,A.z)),f[d]=null):p in f||(f[p]={index0:a[R],index1:a[T],normal:Sa.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:x}=f[v];ao.fromBufferAttribute(l,y),lo.fromBufferAttribute(l,x),m.push(ao.x,ao.y,ao.z),m.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new xe(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class No extends an{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const i=t/2,o=e/2,l=Math.floor(n),h=Math.floor(r),a=l+1,c=h+1,u=t/l,f=e/h,m=[],v=[],y=[],x=[];for(let _=0;_<c;_++){const R=_*f-o;for(let T=0;T<a;T++){const S=T*u-i;v.push(S,-R,0),y.push(0,0,1),x.push(T/l),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let R=0;R<l;R++){const T=R+a*_,S=R+a*(_+1),b=R+1+a*(_+1),I=R+1+a*_;m.push(T,S,I),m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.width,t.height,t.widthSegments,t.heightSegments)}}class sc extends an{constructor(t=.5,e=1,n=32,r=1,i=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const l=[],h=[],a=[],c=[];let u=t;const f=(e-t)/r,m=new F,v=new ce;for(let y=0;y<=r;y++){for(let x=0;x<=n;x++){const _=i+x/n*o;m.x=u*Math.cos(_),m.y=u*Math.sin(_),h.push(m.x,m.y,m.z),a.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,c.push(v.x,v.y)}u+=f}for(let y=0;y<r;y++){const x=y*(n+1);for(let _=0;_<n;_++){const R=_+x,T=R,S=R+n+1,b=R+n+2,I=R+1;l.push(T,S,I),l.push(S,b,I)}}this.setIndex(l),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fo extends an{constructor(t=1,e=32,n=16,r=0,i=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:i,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(o+l,Math.PI);let a=0;const c=[],u=new F,f=new F,m=[],v=[],y=[],x=[];for(let _=0;_<=n;_++){const R=[],T=_/n;let S=0;_===0&&o===0?S=.5/e:_===n&&h===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const I=b/e;u.x=-t*Math.cos(r+I*i)*Math.sin(o+T*l),u.y=t*Math.cos(o+T*l),u.z=t*Math.sin(r+I*i)*Math.sin(o+T*l),v.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),x.push(I+S,1-T),R.push(a++)}c.push(R)}for(let _=0;_<n;_++)for(let R=0;R<e;R++){const T=c[_][R+1],S=c[_][R],b=c[_+1][R],I=c[_+1][R+1];(_!==0||o>0)&&m.push(T,S,I),(_!==n-1||h<Math.PI)&&m.push(S,b,I)}this.setIndex(m),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class se extends Ms{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xf extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $f extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rc extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yf extends rc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wa=new Ae,sh=new F,rh=new F;class Au{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oh=new Ae,cr=new F,Ea=new F;class Kf extends Au{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,i=t.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(cr),Ea.copy(n.position),Ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ea),n.updateMatrixWorld(),r.makeTranslation(-cr.x,-cr.y,-cr.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh,n.coordinateSystem,n.reversedDepth)}}class Ta extends rc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Kf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ru extends Mu{constructor(t=-1,e=1,n=1,r=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-t,o=n+t,l=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=a*this.view.offsetX,o=i+a*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(i,o,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jf extends Au{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zf extends rc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new jf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jf extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ah(s,t,e,n){const r=Qf(n);switch(e){case lu:return s*t;case hu:return s*t/r.components*r.byteLength;case Kl:return s*t/r.components*r.byteLength;case uu:return s*t*2/r.components*r.byteLength;case jl:return s*t*2/r.components*r.byteLength;case cu:return s*t*3/r.components*r.byteLength;case oi:return s*t*4/r.components*r.byteLength;case Zl:return s*t*4/r.components*r.byteLength;case xo:case yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mo:case bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:case cl:return Math.max(s,16)*Math.max(t,8)/4;case ol:case ll:return Math.max(s,8)*Math.max(t,8)/2;case hl:case ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case bl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Il:case Pl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ll:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qf(s){switch(s){case _i:case su:return{byteLength:1,components:1};case yr:case ru:case Cr:return{byteLength:2,components:1};case $l:case Yl:return{byteLength:2,components:4};case vs:case Xl:case Di:return{byteLength:4,components:1};case ou:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cu(){let s=null,t=!1,e=null,n=null;function r(i,o){e(i,o),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){s=i}}}function tp(s){const t=new WeakMap;function e(l,h){const a=l.array,c=l.usage,u=a.byteLength,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,a,c),l.onUploadCallback();let m;if(a instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=s.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=s.SHORT;else if(a instanceof Uint32Array)m=s.UNSIGNED_INT;else if(a instanceof Int32Array)m=s.INT;else if(a instanceof Int8Array)m=s.BYTE;else if(a instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,h,a){const c=h.array,u=h.updateRanges;if(s.bindBuffer(a,l),u.length===0)s.bufferSubData(a,0,c);else{u.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<u.length;m++){const v=u[f],y=u[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,u[f]=y)}u.length=f+1;for(let m=0,v=u.length;m<v;m++){const y=u[m];s.bufferSubData(a,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(s.deleteBuffer(h.buffer),t.delete(l))}function o(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const a=t.get(l);if(a===void 0)t.set(l,e(l,h));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,h),a.version=l.version}}return{get:r,remove:i,update:o}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,S0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,E0=`#define STANDARD
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
}`,T0=`#define TOON
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
}`,A0=`#define TOON
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
}`,R0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,P0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,D0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:vp,clipping_planes_vertex:xp,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:bp,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Ip,colorspace_fragment:Pp,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Up,envmap_pars_vertex:Np,envmap_physical_pars_fragment:$p,envmap_vertex:Fp,fog_vertex:Op,fog_pars_vertex:Bp,fog_fragment:zp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Gp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:qp,lights_pars_begin:Xp,lights_toon_fragment:Yp,lights_toon_pars_fragment:Kp,lights_phong_fragment:jp,lights_phong_pars_fragment:Zp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:_m,normal_fragment_begin:vm,normal_fragment_maps:xm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:bm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Im,project_vertex:Pm,dithering_fragment:Lm,dithering_pars_fragment:Dm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:Hm,skinning_vertex:Gm,skinnormal_vertex:Vm,specularmap_fragment:Wm,specularmap_pars_fragment:qm,tonemapping_fragment:Xm,tonemapping_pars_fragment:$m,transmission_fragment:Ym,transmission_pars_fragment:Km,uv_pars_fragment:jm,uv_pars_vertex:Zm,uv_vertex:Jm,worldpos_vertex:Qm,background_vert:t0,background_frag:e0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:o0,depth_frag:a0,distanceRGBA_vert:l0,distanceRGBA_frag:c0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:_0,meshmatcap_vert:v0,meshmatcap_frag:x0,meshnormal_vert:y0,meshnormal_frag:M0,meshphong_vert:b0,meshphong_frag:S0,meshphysical_vert:w0,meshphysical_frag:E0,meshtoon_vert:T0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:I0,shadow_frag:P0,sprite_vert:L0,sprite_frag:D0},ut={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ci={basic:{uniforms:Mn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Mn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new $t(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Mn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Mn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Mn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new $t(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Mn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Mn([ut.points,ut.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Mn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Mn([ut.common,ut.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Mn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Mn([ut.sprite,ut.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Mn([ut.common,ut.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Mn([ut.lights,ut.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ci.physical={uniforms:Mn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const ho={r:0,b:0,g:0},rs=new vi,k0=new Ae;function U0(s,t,e,n,r,i,o){const l=new $t(0);let h=i===!0?0:1,a,c,u=null,f=0,m=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function y(T){let S=!1;const b=v(T);b===null?_(l,h):b&&b.isColor&&(_(b,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(T,S){const b=v(S);b&&(b.isCubeTexture||b.mapping===Uo)?(c===void 0&&(c=new tn(new Zi(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ks(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),rs.copy(S.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(rs)),c.material.toneMapped=ue.getTransfer(b.colorSpace)!==_e,(u!==b||f!==b.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,m=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(a===void 0&&(a=new tn(new No(2,2),new xi({name:"BackgroundMaterial",uniforms:Ks(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=b,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.toneMapped=ue.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),a.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==s.toneMapping)&&(a.material.needsUpdate=!0,u=b,f=b.version,m=s.toneMapping),a.layers.enableAll(),T.unshift(a,a.geometry,a.material,0,0,null))}function _(T,S){T.getRGB(ho,yu(s)),n.buffers.color.setClear(ho.r,ho.g,ho.b,S,o)}function R(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(T,S=1){l.set(T),h=S,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,_(l,h)},render:y,addToRenderList:x,dispose:R}}function N0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=f(null);let i=r,o=!1;function l(g,M,C,L,k){let U=!1;const H=u(L,C,M);i!==H&&(i=H,a(i.object)),U=m(g,L,C,k),U&&v(g,L,C,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(g,M,C,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return s.createVertexArray()}function a(g){return s.bindVertexArray(g)}function c(g){return s.deleteVertexArray(g)}function u(g,M,C){const L=C.wireframe===!0;let k=n[g.id];k===void 0&&(k={},n[g.id]=k);let U=k[M.id];U===void 0&&(U={},k[M.id]=U);let H=U[L];return H===void 0&&(H=f(h()),U[L]=H),H}function f(g){const M=[],C=[],L=[];for(let k=0;k<e;k++)M[k]=0,C[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:L,object:g,attributes:{},index:null}}function m(g,M,C,L){const k=i.attributes,U=M.attributes;let H=0;const $=C.getAttributes();for(const V in $)if($[V].location>=0){const et=k[V];let gt=U[V];if(gt===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(gt=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(gt=g.instanceColor)),et===void 0||et.attribute!==gt||gt&&et.data!==gt.data)return!0;H++}return i.attributesNum!==H||i.index!==L}function v(g,M,C,L){const k={},U=M.attributes;let H=0;const $=C.getAttributes();for(const V in $)if($[V].location>=0){let et=U[V];et===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(et=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(et=g.instanceColor));const gt={};gt.attribute=et,et&&et.data&&(gt.data=et.data),k[V]=gt,H++}i.attributes=k,i.attributesNum=H,i.index=L}function y(){const g=i.newAttributes;for(let M=0,C=g.length;M<C;M++)g[M]=0}function x(g){_(g,0)}function _(g,M){const C=i.newAttributes,L=i.enabledAttributes,k=i.attributeDivisors;C[g]=1,L[g]===0&&(s.enableVertexAttribArray(g),L[g]=1),k[g]!==M&&(s.vertexAttribDivisor(g,M),k[g]=M)}function R(){const g=i.newAttributes,M=i.enabledAttributes;for(let C=0,L=M.length;C<L;C++)M[C]!==g[C]&&(s.disableVertexAttribArray(C),M[C]=0)}function T(g,M,C,L,k,U,H){H===!0?s.vertexAttribIPointer(g,M,C,k,U):s.vertexAttribPointer(g,M,C,L,k,U)}function S(g,M,C,L){y();const k=L.attributes,U=C.getAttributes(),H=M.defaultAttributeValues;for(const $ in U){const V=U[$];if(V.location>=0){let J=k[$];if(J===void 0&&($==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),$==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),J!==void 0){const et=J.normalized,gt=J.itemSize,Rt=t.get(J);if(Rt===void 0)continue;const kt=Rt.buffer,Dt=Rt.type,Xt=Rt.bytesPerElement,Y=Dt===s.INT||Dt===s.UNSIGNED_INT||J.gpuType===Xl;if(J.isInterleavedBufferAttribute){const Z=J.data,ht=Z.stride,Pt=J.offset;if(Z.isInstancedInterleavedBuffer){for(let vt=0;vt<V.locationSize;vt++)_(V.location+vt,Z.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let vt=0;vt<V.locationSize;vt++)x(V.location+vt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let vt=0;vt<V.locationSize;vt++)T(V.location+vt,gt/V.locationSize,Dt,et,ht*Xt,(Pt+gt/V.locationSize*vt)*Xt,Y)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)_(V.location+Z,J.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<V.locationSize;Z++)x(V.location+Z);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Z=0;Z<V.locationSize;Z++)T(V.location+Z,gt/V.locationSize,Dt,et,gt*Xt,gt/V.locationSize*Z*Xt,Y)}}else if(H!==void 0){const et=H[$];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(V.location,et);break;case 3:s.vertexAttrib3fv(V.location,et);break;case 4:s.vertexAttrib4fv(V.location,et);break;default:s.vertexAttrib1fv(V.location,et)}}}}R()}function b(){p();for(const g in n){const M=n[g];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const C in M){const L=M[C];for(const k in L)c(L[k].object),delete L[k];delete M[C]}delete n[g.id]}function A(g){for(const M in n){const C=n[M];if(C[g.id]===void 0)continue;const L=C[g.id];for(const k in L)c(L[k].object),delete L[k];delete C[g.id]}}function p(){d(),o=!0,i!==r&&(i=r,a(i.object))}function d(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:p,resetDefaultState:d,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:x,disableUnusedAttributes:R}}function F0(s,t,e){let n;function r(a){n=a}function i(a,c){s.drawArrays(n,a,c),e.update(c,n,1)}function o(a,c,u){u!==0&&(s.drawArraysInstanced(n,a,c,u),e.update(c,n,u))}function l(a,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,u);let m=0;for(let v=0;v<u;v++)m+=c[v];e.update(m,n,1)}function h(a,c,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<a.length;v++)o(a[v],c[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,a,0,c,0,f,0,u);let v=0;for(let y=0;y<u;y++)v+=c[y]*f[y];e.update(v,n,1)}}this.setMode=r,this.render=i,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function O0(s,t,e,n){let r;function i(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==oi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const p=A===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_i&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!p)}function h(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const c=h(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:b,maxSamples:I}}function B0(s){const t=this;let e=null,n=0,r=!1,i=!1;const o=new as,l=new Jt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,m){const v=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,_=s.get(u);if(!r||v===null||v.length===0||i&&!x)i?c(null):a();else{const R=i?0:n,T=R*4;let S=_.clippingState||null;h.value=S,S=c(v,f,T,m);for(let b=0;b!==T;++b)S[b]=e[b];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function a(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,m,v){const y=u!==null?u.length:0;let x=null;if(y!==0){if(x=h.value,v!==!0||x===null){const _=m+y*4,R=f.matrixWorldInverse;l.getNormalMatrix(R),(x===null||x.length<_)&&(x=new Float32Array(_));for(let T=0,S=m;T!==y;++T,S+=4)o.copy(u[T]).applyMatrix4(R,l),o.normal.toArray(x,S),x[S+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function z0(s){let t=new WeakMap;function e(o,l){return l===nl?o.mapping=Xs:l===il&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===nl||l===il)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const a=new Ff(h.height);return a.fromEquirectangularTexture(s,o),t.set(o,a),o.addEventListener("dispose",r),e(a.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}const zs=4,lh=[.125,.215,.35,.446,.526,.582],us=20,Aa=new Ru,ch=new $t;let Ra=null,Ca=0,Ia=0,Pa=!1;const ls=(1+Math.sqrt(5))/2,Os=1/ls,hh=[new F(-ls,Os,0),new F(ls,Os,0),new F(-Os,0,ls),new F(Os,0,ls),new F(0,ls,-Os),new F(0,ls,Os),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],H0=new F;class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,i={}){const{size:o=256,position:l=H0}=i;Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,Ia),this._renderer.xr.enabled=Pa,t.scissorTest=!1,uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Cr,format:oi,colorSpace:Ys,depthBuffer:!1},r=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(i)),this._blurMaterial=V0(i,t,e)}return r}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,r,i){const h=new zn(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(ch),u.toneMapping=$i,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const y=new Wi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),x=new tn(new Zi,y);let _=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,_=!0):(y.color.copy(ch),_=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(h.up.set(0,a[T],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x+c[T],i.y,i.z)):S===1?(h.up.set(0,0,a[T]),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y+c[T],i.z)):(h.up.set(0,a[T],0),h.position.set(i.x,i.y,i.z),h.lookAt(i.x,i.y,i.z+c[T]));const b=this._cubeSize;uo(r,S*b,T>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(x,h),u.render(t,h)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Xs||t.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const i=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=t;const h=this._cubeSize;uo(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let i=1;i<r;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=hh[(r-i-1)%hh.length];this._blur(t,i-1,i,o,l)}e.autoClear=n}_blur(t,e,n,r,i){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",i),this._halfBlur(o,t,n,n,r,"longitudinal",i)}_halfBlur(t,e,n,r,i,o,l){const h=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new tn(this._lodPlanes[r],a),f=a.uniforms,m=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*us-1),y=i/v,x=isFinite(i)?1+Math.floor(c*y):us;x>us&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${us}`);const _=[];let R=0;for(let A=0;A<us;++A){const p=A/y,d=Math.exp(-p*p/2);_.push(d),A===0?R+=d:A<x&&(R+=2*d)}for(let A=0;A<_.length;A++)_[A]=_[A]/R;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=_,f.latitudinal.value=o==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-n;const S=this._sizeLods[r],b=3*S*(r>T-zs?r-T+zs:0),I=4*(this._cubeSize-S);uo(e,b,I,3*S,2*S),h.setRenderTarget(e),h.render(u,Aa)}}function G0(s){const t=[],e=[],n=[];let r=s;const i=s-zs+1+lh.length;for(let o=0;o<i;o++){const l=Math.pow(2,r);e.push(l);let h=1/l;o>s-zs?h=lh[o-s+zs-1]:o===0&&(h=0),n.push(h);const a=1/(l-2),c=-a,u=1+a,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,v=6,y=3,x=2,_=1,R=new Float32Array(y*v*m),T=new Float32Array(x*v*m),S=new Float32Array(_*v*m);for(let I=0;I<m;I++){const A=I%3*2/3-1,p=I>2?0:-1,d=[A,p,0,A+2/3,p,0,A+2/3,p+1,0,A,p,0,A+2/3,p+1,0,A,p+1,0];R.set(d,y*v*I),T.set(f,x*v*I);const g=[I,I,I,I,I,I];S.set(g,_*v*I)}const b=new an;b.setAttribute("position",new pi(R,y)),b.setAttribute("uv",new pi(T,x)),b.setAttribute("faceIndex",new pi(S,_)),t.push(b),r>zs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(s,t,e){const n=new xs(s,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function V0(s,t,e){const n=new Float32Array(us),r=new F(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function fh(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ph(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function W0(s){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,a=h===nl||h===il,c=h===Xs||h===$s;if(a||c){let u=t.get(l);const f=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new uh(s)),u=a?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const m=l.image;return a&&m&&m.height>0||c&&m&&r(m)?(e===null&&(e=new uh(s)),u=a?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",i),u.texture):null}}}return l}function r(l){let h=0;const a=6;for(let c=0;c<a;c++)l[c]!==void 0&&h++;return h===a}function i(l){const h=l.target;h.removeEventListener("dispose",i);const a=t.get(h);a!==void 0&&(t.delete(h),a.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function q0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function X0(s,t,e,n){const r={},i=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];const m=i.get(f);m&&(t.remove(m),i.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const m in f)t.update(f[m],s.ARRAY_BUFFER)}function a(u){const f=[],m=u.index,v=u.attributes.position;let y=0;if(m!==null){const R=m.array;y=m.version;for(let T=0,S=R.length;T<S;T+=3){const b=R[T+0],I=R[T+1],A=R[T+2];f.push(b,I,I,A,A,b)}}else if(v!==void 0){const R=v.array;y=v.version;for(let T=0,S=R.length/3-1;T<S;T+=3){const b=T+0,I=T+1,A=T+2;f.push(b,I,I,A,A,b)}}else return;const x=new(pu(f)?xu:vu)(f,1);x.version=y;const _=i.get(u);_&&t.remove(_),i.set(u,x)}function c(u){const f=i.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&a(u)}else a(u);return i.get(u)}return{get:l,update:h,getWireframeAttribute:c}}function $0(s,t,e){let n;function r(f){n=f}let i,o;function l(f){i=f.type,o=f.bytesPerElement}function h(f,m){s.drawElements(n,m,i,f*o),e.update(m,n,1)}function a(f,m,v){v!==0&&(s.drawElementsInstanced(n,m,i,f*o,v),e.update(m,n,v))}function c(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,i,f,0,v);let x=0;for(let _=0;_<v;_++)x+=m[_];e.update(x,n,1)}function u(f,m,v,y){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<f.length;_++)a(f[_]/o,m[_],y[_]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,i,f,0,y,0,v);let _=0;for(let R=0;R<v;R++)_+=m[R]*y[R];e.update(_,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Y0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,l){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=l*(i/3);break;case s.LINES:e.lines+=l*(i/2);break;case s.LINE_STRIP:e.lines+=l*(i-1);break;case s.LINE_LOOP:e.lines+=l*i;break;case s.POINTS:e.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function K0(s,t,e){const n=new WeakMap,r=new ve;function i(o,l,h){const a=o.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(l);if(f===void 0||f.count!==u){let g=function(){p.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var m=g;f!==void 0&&f.texture.dispose();const v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],R=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),x===!0&&(S=3);let b=l.attributes.position.count*S,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*I*4*u),p=new mu(A,b,I,u);p.type=Di,p.needsUpdate=!0;const d=S*4;for(let M=0;M<u;M++){const C=_[M],L=R[M],k=T[M],U=b*I*4*M;for(let H=0;H<C.count;H++){const $=H*d;v===!0&&(r.fromBufferAttribute(C,H),A[U+$+0]=r.x,A[U+$+1]=r.y,A[U+$+2]=r.z,A[U+$+3]=0),y===!0&&(r.fromBufferAttribute(L,H),A[U+$+4]=r.x,A[U+$+5]=r.y,A[U+$+6]=r.z,A[U+$+7]=0),x===!0&&(r.fromBufferAttribute(k,H),A[U+$+8]=r.x,A[U+$+9]=r.y,A[U+$+10]=r.z,A[U+$+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:p,size:new ce(b,I)},n.set(l,f),l.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let v=0;for(let x=0;x<a.length;x++)v+=a[x];const y=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",a)}h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:i}}function j0(s,t,e,n){let r=new WeakMap;function i(h){const a=n.render.frame,c=h.geometry,u=t.get(h,c);if(r.get(u)!==a&&(t.update(u),r.set(u,a)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==a&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,a))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==a&&(f.update(),r.set(f,a))}return u}function o(){r=new WeakMap}function l(h){const a=h.target;a.removeEventListener("dispose",l),e.remove(a.instanceMatrix),a.instanceColor!==null&&e.remove(a.instanceColor)}return{update:i,dispose:o}}const Iu=new Sn,mh=new Eu(1,1),Pu=new mu,Lu=new yf,Du=new bu,gh=[],_h=[],vh=new Float32Array(16),xh=new Float32Array(9),yh=new Float32Array(4);function Js(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let i=gh[r];if(i===void 0&&(i=new Float32Array(r),gh[r]=i),t!==0){n.toArray(i,0);for(let o=1,l=0;o!==t;++o)l+=e,s[o].toArray(i,l)}return i}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Oo(s,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Z0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function J0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function Q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;yh.set(n),s.uniformMatrix2fv(this.addr,!1,yh),Xe(e,n)}}function ng(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;xh.set(n),s.uniformMatrix3fv(this.addr,!1,xh),Xe(e,n)}}function ig(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;vh.set(n),s.uniformMatrix4fv(this.addr,!1,vh),Xe(e,n)}}function sg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function lg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function dg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let i;this.type===s.SAMPLER_2D_SHADOW?(mh.compareFunction=fu,i=mh):i=Iu,e.setTexture2D(t||i,r)}function fg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Lu,r)}function pg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Du,r)}function mg(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Pu,r)}function gg(s){switch(s){case 5126:return Z0;case 35664:return J0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(s,t){s.uniform1fv(this.addr,t)}function vg(s,t){const e=Js(t,this.size,2);s.uniform2fv(this.addr,e)}function xg(s,t){const e=Js(t,this.size,3);s.uniform3fv(this.addr,e)}function yg(s,t){const e=Js(t,this.size,4);s.uniform4fv(this.addr,e)}function Mg(s,t){const e=Js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bg(s,t){const e=Js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sg(s,t){const e=Js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wg(s,t){s.uniform1iv(this.addr,t)}function Eg(s,t){s.uniform2iv(this.addr,t)}function Tg(s,t){s.uniform3iv(this.addr,t)}function Ag(s,t){s.uniform4iv(this.addr,t)}function Rg(s,t){s.uniform1uiv(this.addr,t)}function Cg(s,t){s.uniform2uiv(this.addr,t)}function Ig(s,t){s.uniform3uiv(this.addr,t)}function Pg(s,t){s.uniform4uiv(this.addr,t)}function Lg(s,t,e){const n=this.cache,r=t.length,i=Oo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Iu,i[o])}function Dg(s,t,e){const n=this.cache,r=t.length,i=Oo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Lu,i[o])}function kg(s,t,e){const n=this.cache,r=t.length,i=Oo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Du,i[o])}function Ug(s,t,e){const n=this.cache,r=t.length,i=Oo(e,r);qe(n,i)||(s.uniform1iv(this.addr,i),Xe(n,i));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Pu,i[o])}function Ng(s){switch(s){case 5126:return _g;case 35664:return vg;case 35665:return xg;case 35666:return yg;case 35674:return Mg;case 35675:return bg;case 35676:return Sg;case 5124:case 35670:return wg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Ig;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Ug}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}}class Bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let i=0,o=r.length;i!==o;++i){const l=r[i];l.setValue(t,e[l.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Mh(s,t){s.seq.push(t),s.map[t.id]=t}function zg(s,t,e){const n=s.name,r=n.length;for(La.lastIndex=0;;){const i=La.exec(n),o=La.lastIndex;let l=i[1];const h=i[2]==="]",a=i[3];if(h&&(l=l|0),a===void 0||a==="["&&o+2===r){Mh(e,a===void 0?new Fg(l,s,t):new Og(l,s,t));break}else{let u=e.map[l];u===void 0&&(u=new Bg(l),Mh(e,u)),e=u}}}class So{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=t.getActiveUniform(e,r),o=t.getUniformLocation(e,i.name);zg(i,o,this)}}setValue(t,e,n,r){const i=this.map[e];i!==void 0&&i.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let i=0,o=e.length;i!==o;++i){const l=e[i],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,i=t.length;r!==i;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function bh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Hg=37297;let Gg=0;function Vg(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let o=r;o<i;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const Sh=new Jt;function Wg(s){ue._getMatrix(Sh,ue.workingColorSpace,s);const t=`mat3( ${Sh.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case Ao:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=(s.getShaderInfoLog(t)||"").trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Vg(s.getShaderSource(t),l)}else return i}function qg(s,t){const e=Wg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(s,t){let e;switch(t){case Ld:e="Linear";break;case Dd:e="Reinhard";break;case kd:e="Cineon";break;case Ud:e="ACESFilmic";break;case Fd:e="AgX";break;case Od:e="Neutral";break;case Nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new F;function $g(){ue.getLuminanceCoefficients(fo);const s=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Kg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=s.getActiveAttrib(t,r),o=i.name;let l=1;i.type===s.FLOAT_MAT2&&(l=2),i.type===s.FLOAT_MAT3&&(l=3),i.type===s.FLOAT_MAT4&&(l=4),e[o]={type:i.type,location:s.getAttribLocation(t,o),locationSize:l}}return e}function dr(s){return s!==""}function Eh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(s){return s.replace(Zg,Qg)}const Jg=new Map;function Qg(s,t){let e=te[t];if(e===void 0){const n=Jg.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(s){return s.replace(t1,e1)}function e1(s,t,e,n){let r="";for(let i=parseInt(t);i<parseInt(e);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Rh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function n1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function i1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case $s:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function r1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ql:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Pd:t="ENVMAP_BLENDING_ADD";break}return t}function o1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a1(s,t,e,n){const r=s.getContext(),i=e.defines;let o=e.vertexShader,l=e.fragmentShader;const h=n1(e),a=i1(e),c=s1(e),u=r1(e),f=o1(e),m=Yg(e),v=Kg(i),y=r.createProgram();let x,_,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(dr).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(dr).join(`
`),_.length>0&&(_+=`
`)):(x=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),_=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?te.tonemapping_pars_fragment:"",e.toneMapping!==$i?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=Nl(o),o=Eh(o,e),o=Th(o,e),l=Nl(l),l=Eh(l,e),l=Th(l,e),o=Ah(o),l=Ah(l),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=R+x+o,S=R+_+l,b=bh(r,r.VERTEX_SHADER,T),I=bh(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,I),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(M){if(s.debug.checkShaderErrors){const C=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(b)||"",k=r.getShaderInfoLog(I)||"",U=C.trim(),H=L.trim(),$=k.trim();let V=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,y,b,I);else{const et=wh(r,b,"vertex"),gt=wh(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+U+`
`+et+`
`+gt)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||$==="")&&(J=!1);J&&(M.diagnostics={runnable:V,programLog:U,vertexShader:{log:H,prefix:x},fragmentShader:{log:$,prefix:_}})}r.deleteShader(b),r.deleteShader(I),p=new So(r,y),d=jg(r,y)}let p;this.getUniforms=function(){return p===void 0&&A(this),p};let d;this.getAttributes=function(){return d===void 0&&A(this),d};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(y,Hg)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=I,this}let l1=0;class c1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h1(t),e.set(t,n)),n}}class h1{constructor(t){this.id=l1++,this.code=t,this.usedTimes=0}}function u1(s,t,e,n,r,i,o){const l=new gu,h=new c1,a=new Set,c=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(d){return a.add(d),d===0?"uv":`uv${d}`}function x(d,g,M,C,L){const k=C.fog,U=L.geometry,H=d.isMeshStandardMaterial?C.environment:null,$=(d.isMeshStandardMaterial?e:t).get(d.envMap||H),V=$&&$.mapping===Uo?$.image.height:null,J=v[d.type];d.precision!==null&&(m=r.getMaxPrecision(d.precision),m!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",m,"instead."));const et=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,gt=et!==void 0?et.length:0;let Rt=0;U.morphAttributes.position!==void 0&&(Rt=1),U.morphAttributes.normal!==void 0&&(Rt=2),U.morphAttributes.color!==void 0&&(Rt=3);let kt,Dt,Xt,Y;if(J){const de=ci[J];kt=de.vertexShader,Dt=de.fragmentShader}else kt=d.vertexShader,Dt=d.fragmentShader,h.update(d),Xt=h.getVertexShaderID(d),Y=h.getFragmentShaderID(d);const Z=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),Pt=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Gt=!!d.map,Re=!!d.matcap,D=!!$,Me=!!d.aoMap,zt=!!d.lightMap,Vt=!!d.bumpMap,wt=!!d.normalMap,Ee=!!d.displacementMap,Et=!!d.emissiveMap,Qt=!!d.metalnessMap,$e=!!d.roughnessMap,ke=d.anisotropy>0,P=d.clearcoat>0,w=d.dispersion>0,G=d.iridescence>0,j=d.sheen>0,tt=d.transmission>0,K=ke&&!!d.anisotropyMap,Lt=P&&!!d.clearcoatMap,at=P&&!!d.clearcoatNormalMap,At=P&&!!d.clearcoatRoughnessMap,Ct=G&&!!d.iridescenceMap,rt=G&&!!d.iridescenceThicknessMap,_t=j&&!!d.sheenColorMap,Ht=j&&!!d.sheenRoughnessMap,It=!!d.specularMap,dt=!!d.specularColorMap,Zt=!!d.specularIntensityMap,O=tt&&!!d.transmissionMap,ot=tt&&!!d.thicknessMap,ct=!!d.gradientMap,yt=!!d.alphaMap,it=d.alphaTest>0,Q=!!d.alphaHash,St=!!d.extensions;let Kt=$i;d.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Kt=s.toneMapping);const be={shaderID:J,shaderType:d.type,shaderName:d.name,vertexShader:kt,fragmentShader:Dt,defines:d.defines,customVertexShaderID:Xt,customFragmentShaderID:Y,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:m,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&L.instanceColor!==null,instancingMorph:Pt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ys,alphaToCoverage:!!d.alphaToCoverage,map:Gt,matcap:Re,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:V,aoMap:Me,lightMap:zt,bumpMap:Vt,normalMap:wt,displacementMap:f&&Ee,emissiveMap:Et,normalMapObjectSpace:wt&&d.normalMapType===Gd,normalMapTangentSpace:wt&&d.normalMapType===du,metalnessMap:Qt,roughnessMap:$e,anisotropy:ke,anisotropyMap:K,clearcoat:P,clearcoatMap:Lt,clearcoatNormalMap:at,clearcoatRoughnessMap:At,dispersion:w,iridescence:G,iridescenceMap:Ct,iridescenceThicknessMap:rt,sheen:j,sheenColorMap:_t,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:dt,specularIntensityMap:Zt,transmission:tt,transmissionMap:O,thicknessMap:ot,gradientMap:ct,opaque:d.transparent===!1&&d.blending===Hs&&d.alphaToCoverage===!1,alphaMap:yt,alphaTest:it,alphaHash:Q,combine:d.combine,mapUv:Gt&&y(d.map.channel),aoMapUv:Me&&y(d.aoMap.channel),lightMapUv:zt&&y(d.lightMap.channel),bumpMapUv:Vt&&y(d.bumpMap.channel),normalMapUv:wt&&y(d.normalMap.channel),displacementMapUv:Ee&&y(d.displacementMap.channel),emissiveMapUv:Et&&y(d.emissiveMap.channel),metalnessMapUv:Qt&&y(d.metalnessMap.channel),roughnessMapUv:$e&&y(d.roughnessMap.channel),anisotropyMapUv:K&&y(d.anisotropyMap.channel),clearcoatMapUv:Lt&&y(d.clearcoatMap.channel),clearcoatNormalMapUv:at&&y(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&y(d.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&y(d.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&y(d.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&y(d.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&y(d.sheenRoughnessMap.channel),specularMapUv:It&&y(d.specularMap.channel),specularColorMapUv:dt&&y(d.specularColorMap.channel),specularIntensityMapUv:Zt&&y(d.specularIntensityMap.channel),transmissionMapUv:O&&y(d.transmissionMap.channel),thicknessMapUv:ot&&y(d.thicknessMap.channel),alphaMapUv:yt&&y(d.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(wt||ke),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Gt||yt),fog:!!k,useFog:d.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:d.flatShading===!0&&d.wireframe===!1,sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ht,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Rt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:d.dithering,shadowMapEnabled:s.shadowMap.enabled&&M.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Gt&&d.map.isVideoTexture===!0&&ue.getTransfer(d.map.colorSpace)===_e,decodeVideoTextureEmissive:Et&&d.emissiveMap.isVideoTexture===!0&&ue.getTransfer(d.emissiveMap.colorSpace)===_e,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Ke,flipSided:d.side===bn,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:St&&d.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&d.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return be.vertexUv1s=a.has(1),be.vertexUv2s=a.has(2),be.vertexUv3s=a.has(3),a.clear(),be}function _(d){const g=[];if(d.shaderID?g.push(d.shaderID):(g.push(d.customVertexShaderID),g.push(d.customFragmentShaderID)),d.defines!==void 0)for(const M in d.defines)g.push(M),g.push(d.defines[M]);return d.isRawShaderMaterial===!1&&(R(g,d),T(g,d),g.push(s.outputColorSpace)),g.push(d.customProgramCacheKey),g.join()}function R(d,g){d.push(g.precision),d.push(g.outputColorSpace),d.push(g.envMapMode),d.push(g.envMapCubeUVHeight),d.push(g.mapUv),d.push(g.alphaMapUv),d.push(g.lightMapUv),d.push(g.aoMapUv),d.push(g.bumpMapUv),d.push(g.normalMapUv),d.push(g.displacementMapUv),d.push(g.emissiveMapUv),d.push(g.metalnessMapUv),d.push(g.roughnessMapUv),d.push(g.anisotropyMapUv),d.push(g.clearcoatMapUv),d.push(g.clearcoatNormalMapUv),d.push(g.clearcoatRoughnessMapUv),d.push(g.iridescenceMapUv),d.push(g.iridescenceThicknessMapUv),d.push(g.sheenColorMapUv),d.push(g.sheenRoughnessMapUv),d.push(g.specularMapUv),d.push(g.specularColorMapUv),d.push(g.specularIntensityMapUv),d.push(g.transmissionMapUv),d.push(g.thicknessMapUv),d.push(g.combine),d.push(g.fogExp2),d.push(g.sizeAttenuation),d.push(g.morphTargetsCount),d.push(g.morphAttributeCount),d.push(g.numDirLights),d.push(g.numPointLights),d.push(g.numSpotLights),d.push(g.numSpotLightMaps),d.push(g.numHemiLights),d.push(g.numRectAreaLights),d.push(g.numDirLightShadows),d.push(g.numPointLightShadows),d.push(g.numSpotLightShadows),d.push(g.numSpotLightShadowsWithMaps),d.push(g.numLightProbes),d.push(g.shadowMapType),d.push(g.toneMapping),d.push(g.numClippingPlanes),d.push(g.numClipIntersection),d.push(g.depthPacking)}function T(d,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),g.gradientMap&&l.enable(22),d.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.reversedDepthBuffer&&l.enable(4),g.skinning&&l.enable(5),g.morphTargets&&l.enable(6),g.morphNormals&&l.enable(7),g.morphColors&&l.enable(8),g.premultipliedAlpha&&l.enable(9),g.shadowMapEnabled&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),g.decodeVideoTextureEmissive&&l.enable(20),g.alphaToCoverage&&l.enable(21),d.push(l.mask)}function S(d){const g=v[d.type];let M;if(g){const C=ci[g];M=Df.clone(C.uniforms)}else M=d.uniforms;return M}function b(d,g){let M;for(let C=0,L=c.length;C<L;C++){const k=c[C];if(k.cacheKey===g){M=k,++M.usedTimes;break}}return M===void 0&&(M=new a1(s,g,d,i),c.push(M)),M}function I(d){if(--d.usedTimes===0){const g=c.indexOf(d);c[g]=c[c.length-1],c.pop(),d.destroy()}}function A(d){h.remove(d)}function p(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:S,acquireProgram:b,releaseProgram:I,releaseShaderCache:A,programs:c,dispose:p}}function d1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function r(o,l,h){s.get(o)[l]=h}function i(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:i}}function f1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ch(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ih(){const s=[];let t=0;const e=[],n=[],r=[];function i(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,m,v,y,x){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:y,group:x},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=y,_.group=x),t++,_}function l(u,f,m,v,y,x){const _=o(u,f,m,v,y,x);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function h(u,f,m,v,y,x){const _=o(u,f,m,v,y,x);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function a(u,f){e.length>1&&e.sort(u||f1),n.length>1&&n.sort(f||Ch),r.length>1&&r.sort(f||Ch)}function c(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:i,push:l,unshift:h,finish:c,sort:a}}function p1(){let s=new WeakMap;function t(n,r){const i=s.get(n);let o;return i===void 0?(o=new Ih,s.set(n,[o])):r>=i.length?(o=new Ih,i.push(o)):o=i[r],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function m1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new $t};break;case"SpotLight":e={position:new F,direction:new F,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function g1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let _1=0;function v1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function x1(s){const t=new m1,e=g1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new F);const r=new F,i=new Ae,o=new Ae;function l(a){let c=0,u=0,f=0;for(let d=0;d<9;d++)n.probe[d].set(0,0,0);let m=0,v=0,y=0,x=0,_=0,R=0,T=0,S=0,b=0,I=0,A=0;a.sort(v1);for(let d=0,g=a.length;d<g;d++){const M=a[d],C=M.color,L=M.intensity,k=M.distance,U=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=C.r*L,u+=C.g*L,f+=C.b*L;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],L);A++}else if(M.isDirectionalLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const $=M.shadow,V=e.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=U,n.directionalShadowMatrix[m]=M.shadow.matrix,R++}n.directional[m]=H,m++}else if(M.isSpotLight){const H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(C).multiplyScalar(L),H.distance=k,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[y]=H;const $=M.shadow;if(M.map&&(n.spotLightMap[b]=M.map,b++,$.updateMatrices(M),M.castShadow&&I++),n.spotLightMatrix[y]=$.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=U,S++}y++}else if(M.isRectAreaLight){const H=t.get(M);H.color.copy(C).multiplyScalar(L),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[x]=H,x++}else if(M.isPointLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const $=M.shadow,V=e.get(M);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=U,n.pointShadowMatrix[v]=M.shadow.matrix,T++}n.point[v]=H,v++}else if(M.isHemisphereLight){const H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(L),H.groundColor.copy(M.groundColor).multiplyScalar(L),n.hemi[_]=H,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const p=n.hash;(p.directionalLength!==m||p.pointLength!==v||p.spotLength!==y||p.rectAreaLength!==x||p.hemiLength!==_||p.numDirectionalShadows!==R||p.numPointShadows!==T||p.numSpotShadows!==S||p.numSpotMaps!==b||p.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=x,n.point.length=v,n.hemi.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,p.directionalLength=m,p.pointLength=v,p.spotLength=y,p.rectAreaLength=x,p.hemiLength=_,p.numDirectionalShadows=R,p.numPointShadows=T,p.numSpotShadows=S,p.numSpotMaps=b,p.numLightProbes=A,n.version=_1++)}function h(a,c){let u=0,f=0,m=0,v=0,y=0;const x=c.matrixWorldInverse;for(let _=0,R=a.length;_<R;_++){const T=a[_];if(T.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),u++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(T.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),o.identity(),i.copy(T.matrixWorld),i.premultiply(x),o.extractRotation(i),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),f++}else if(T.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),y++}}}return{setup:l,setupView:h,state:n}}function Ph(s){const t=new x1(s),e=[],n=[];function r(c){a.camera=c,e.length=0,n.length=0}function i(c){e.push(c)}function o(c){n.push(c)}function l(){t.setup(e)}function h(c){t.setupView(e,c)}const a={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:a,setupLights:l,setupLightsView:h,pushLight:i,pushShadow:o}}function y1(s){let t=new WeakMap;function e(r,i=0){const o=t.get(r);let l;return o===void 0?(l=new Ph(s),t.set(r,[l])):i>=o.length?(l=new Ph(s),o.push(l)):l=o[i],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b1=`uniform sampler2D shadow_pass;
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
}`;function S1(s,t,e){let n=new nc;const r=new ce,i=new ce,o=new ve,l=new Xf({depthPacking:Hd}),h=new $f,a={},c=e.maxTextureSize,u={[ji]:bn,[bn]:ji,[Ke]:Ke},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:M1,fragmentShader:b1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tn(v,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let _=this.type;this.render=function(I,A,p){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const d=s.getRenderTarget(),g=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Xi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=_!==Ci&&this.type===Ci,k=_===Ci&&this.type!==Ci;for(let U=0,H=I.length;U<H;U++){const $=I[U],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();if(r.multiply(J),i.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(i.x=Math.floor(c/J.x),r.x=i.x*J.x,V.mapSize.x=i.x),r.y>c&&(i.y=Math.floor(c/J.y),r.y=i.y*J.y,V.mapSize.y=i.y)),V.map===null||L===!0||k===!0){const gt=this.type!==Ci?{minFilter:Gn,magFilter:Gn}:{};V.map!==null&&V.map.dispose(),V.map=new xs(r.x,r.y,gt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const et=V.getViewportCount();for(let gt=0;gt<et;gt++){const Rt=V.getViewport(gt);o.set(i.x*Rt.x,i.y*Rt.y,i.x*Rt.z,i.y*Rt.w),C.viewport(o),V.updateMatrices($,gt),n=V.getFrustum(),S(A,p,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Ci&&R(V,p),V.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(d,g,M)};function R(I,A){const p=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new xs(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(A,null,p,f,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(A,null,p,m,y,null)}function T(I,A,p,d){let g=null;const M=p.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(M!==void 0)g=M;else if(g=p.isPointLight===!0?h:l,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const C=g.uuid,L=A.uuid;let k=a[C];k===void 0&&(k={},a[C]=k);let U=k[L];U===void 0&&(U=g.clone(),k[L]=U,A.addEventListener("dispose",b)),g=U}if(g.visible=A.visible,g.wireframe=A.wireframe,d===Ci?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:u[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,p.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const C=s.properties.get(g);C.light=p}return g}function S(I,A,p,d,g){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===Ci)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,I.matrixWorld);const L=t.update(I),k=I.material;if(Array.isArray(k)){const U=L.groups;for(let H=0,$=U.length;H<$;H++){const V=U[H],J=k[V.materialIndex];if(J&&J.visible){const et=T(I,J,d,g);I.onBeforeShadow(s,I,A,p,L,et,V),s.renderBufferDirect(p,null,L,et,I,V),I.onAfterShadow(s,I,A,p,L,et,V)}}}else if(k.visible){const U=T(I,k,d,g);I.onBeforeShadow(s,I,A,p,L,U,null),s.renderBufferDirect(p,null,L,U,I,null),I.onAfterShadow(s,I,A,p,L,U,null)}}const C=I.children;for(let L=0,k=C.length;L<k;L++)S(C[L],A,p,d,g)}function b(I){I.target.removeEventListener("dispose",b);for(const p in a){const d=a[p],g=I.target.uuid;g in d&&(d[g].dispose(),delete d[g])}}}const w1={[Ka]:ja,[Za]:tl,[Ja]:el,[qs]:Qa,[ja]:Ka,[tl]:Za,[el]:Ja,[Qa]:qs};function E1(s,t){function e(){let O=!1;const ot=new ve;let ct=null;const yt=new ve(0,0,0,0);return{setMask:function(it){ct!==it&&!O&&(s.colorMask(it,it,it,it),ct=it)},setLocked:function(it){O=it},setClear:function(it,Q,St,Kt,be){be===!0&&(it*=Kt,Q*=Kt,St*=Kt),ot.set(it,Q,St,Kt),yt.equals(ot)===!1&&(s.clearColor(it,Q,St,Kt),yt.copy(ot))},reset:function(){O=!1,ct=null,yt.set(-1,0,0,0)}}}function n(){let O=!1,ot=!1,ct=null,yt=null,it=null;return{setReversed:function(Q){if(ot!==Q){const St=t.get("EXT_clip_control");Q?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ot=Q;const Kt=it;it=null,this.setClear(Kt)}},getReversed:function(){return ot},setTest:function(Q){Q?Z(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(Q){ct!==Q&&!O&&(s.depthMask(Q),ct=Q)},setFunc:function(Q){if(ot&&(Q=w1[Q]),yt!==Q){switch(Q){case Ka:s.depthFunc(s.NEVER);break;case ja:s.depthFunc(s.ALWAYS);break;case Za:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case Ja:s.depthFunc(s.EQUAL);break;case Qa:s.depthFunc(s.GEQUAL);break;case tl:s.depthFunc(s.GREATER);break;case el:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Q}},setLocked:function(Q){O=Q},setClear:function(Q){it!==Q&&(ot&&(Q=1-Q),s.clearDepth(Q),it=Q)},reset:function(){O=!1,ct=null,yt=null,it=null,ot=!1}}}function r(){let O=!1,ot=null,ct=null,yt=null,it=null,Q=null,St=null,Kt=null,be=null;return{setTest:function(de){O||(de?Z(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(de){ot!==de&&!O&&(s.stencilMask(de),ot=de)},setFunc:function(de,Si,li){(ct!==de||yt!==Si||it!==li)&&(s.stencilFunc(de,Si,li),ct=de,yt=Si,it=li)},setOp:function(de,Si,li){(Q!==de||St!==Si||Kt!==li)&&(s.stencilOp(de,Si,li),Q=de,St=Si,Kt=li)},setLocked:function(de){O=de},setClear:function(de){be!==de&&(s.clearStencil(de),be=de)},reset:function(){O=!1,ot=null,ct=null,yt=null,it=null,Q=null,St=null,Kt=null,be=null}}}const i=new e,o=new n,l=new r,h=new WeakMap,a=new WeakMap;let c={},u={},f=new WeakMap,m=[],v=null,y=!1,x=null,_=null,R=null,T=null,S=null,b=null,I=null,A=new $t(0,0,0),p=0,d=!1,g=null,M=null,C=null,L=null,k=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let J=null,et={};const gt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),kt=new ve().fromArray(gt),Dt=new ve().fromArray(Rt);function Xt(O,ot,ct,yt){const it=new Uint8Array(4),Q=s.createTexture();s.bindTexture(O,Q),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<ct;St++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(ot+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return Q}const Y={};Y[s.TEXTURE_2D]=Xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Z(s.DEPTH_TEST),o.setFunc(qs),Vt(!1),wt(Tc),Z(s.CULL_FACE),Me(Xi);function Z(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function ht(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Pt(O,ot){return u[O]!==ot?(s.bindFramebuffer(O,ot),u[O]=ot,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ot),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function vt(O,ot){let ct=m,yt=!1;if(O){ct=f.get(ot),ct===void 0&&(ct=[],f.set(ot,ct));const it=O.textures;if(ct.length!==it.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,St=it.length;Q<St;Q++)ct[Q]=s.COLOR_ATTACHMENT0+Q;ct.length=it.length,yt=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ct)}function Gt(O){return v!==O?(s.useProgram(O),v=O,!0):!1}const Re={[hs]:s.FUNC_ADD,[fd]:s.FUNC_SUBTRACT,[pd]:s.FUNC_REVERSE_SUBTRACT};Re[md]=s.MIN,Re[gd]=s.MAX;const D={[_d]:s.ZERO,[vd]:s.ONE,[xd]:s.SRC_COLOR,[$a]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[Md]:s.DST_ALPHA,[yd]:s.ONE_MINUS_SRC_COLOR,[Ya]:s.ONE_MINUS_SRC_ALPHA,[wd]:s.ONE_MINUS_DST_COLOR,[bd]:s.ONE_MINUS_DST_ALPHA,[Td]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[Rd]:s.CONSTANT_ALPHA,[Cd]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(O,ot,ct,yt,it,Q,St,Kt,be,de){if(O===Xi){y===!0&&(ht(s.BLEND),y=!1);return}if(y===!1&&(Z(s.BLEND),y=!0),O!==dd){if(O!==x||de!==d){if((_!==hs||S!==hs)&&(s.blendEquation(s.FUNC_ADD),_=hs,S=hs),de)switch(O){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ac:s.blendFunc(s.ONE,s.ONE);break;case Rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ac:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,T=null,b=null,I=null,A.set(0,0,0),p=0,x=O,d=de}return}it=it||ot,Q=Q||ct,St=St||yt,(ot!==_||it!==S)&&(s.blendEquationSeparate(Re[ot],Re[it]),_=ot,S=it),(ct!==R||yt!==T||Q!==b||St!==I)&&(s.blendFuncSeparate(D[ct],D[yt],D[Q],D[St]),R=ct,T=yt,b=Q,I=St),(Kt.equals(A)===!1||be!==p)&&(s.blendColor(Kt.r,Kt.g,Kt.b,be),A.copy(Kt),p=be),x=O,d=!1}function zt(O,ot){O.side===Ke?ht(s.CULL_FACE):Z(s.CULL_FACE);let ct=O.side===bn;ot&&(ct=!ct),Vt(ct),O.blending===Hs&&O.transparent===!1?Me(Xi):Me(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),i.setMask(O.colorWrite);const yt=O.stencilWrite;l.setTest(yt),yt&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Et(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(O){g!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),g=O)}function wt(O){O!==cd?(Z(s.CULL_FACE),O!==M&&(O===Tc?s.cullFace(s.BACK):O===hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),M=O}function Ee(O){O!==C&&(H&&s.lineWidth(O),C=O)}function Et(O,ot,ct){O?(Z(s.POLYGON_OFFSET_FILL),(L!==ot||k!==ct)&&(s.polygonOffset(ot,ct),L=ot,k=ct)):ht(s.POLYGON_OFFSET_FILL)}function Qt(O){O?Z(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function $e(O){O===void 0&&(O=s.TEXTURE0+U-1),J!==O&&(s.activeTexture(O),J=O)}function ke(O,ot,ct){ct===void 0&&(J===null?ct=s.TEXTURE0+U-1:ct=J);let yt=et[ct];yt===void 0&&(yt={type:void 0,texture:void 0},et[ct]=yt),(yt.type!==O||yt.texture!==ot)&&(J!==ct&&(s.activeTexture(ct),J=ct),s.bindTexture(O,ot||Y[O]),yt.type=O,yt.texture=ot)}function P(){const O=et[J];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(O){kt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),kt.copy(O))}function Ht(O){Dt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Dt.copy(O))}function It(O,ot){let ct=a.get(ot);ct===void 0&&(ct=new WeakMap,a.set(ot,ct));let yt=ct.get(O);yt===void 0&&(yt=s.getUniformBlockIndex(ot,O.name),ct.set(O,yt))}function dt(O,ot){const yt=a.get(ot).get(O);h.get(ot)!==yt&&(s.uniformBlockBinding(ot,yt,O.__bindingPointIndex),h.set(ot,yt))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},J=null,et={},u={},f=new WeakMap,m=[],v=null,y=!1,x=null,_=null,R=null,T=null,S=null,b=null,I=null,A=new $t(0,0,0),p=0,d=!1,g=null,M=null,C=null,L=null,k=null,kt.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),o.reset(),l.reset()}return{buffers:{color:i,depth:o,stencil:l},enable:Z,disable:ht,bindFramebuffer:Pt,drawBuffers:vt,useProgram:Gt,setBlending:Me,setMaterial:zt,setFlipSided:Vt,setCullFace:wt,setLineWidth:Ee,setPolygonOffset:Et,setScissorTest:Qt,activeTexture:$e,bindTexture:ke,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Ct,texImage3D:rt,updateUBOMapping:It,uniformBlockBinding:dt,texStorage2D:at,texStorage3D:At,texSubImage2D:j,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:Lt,scissor:_t,viewport:Ht,reset:Zt}}function T1(s,t,e,n,r,i,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new ce,c=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return m?new OffscreenCanvas(P,w):Co("canvas")}function y(P,w,G){let j=1;const tt=ke(P);if((tt.width>G||tt.height>G)&&(j=G/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(j*tt.width),Lt=Math.floor(j*tt.height);u===void 0&&(u=v(K,Lt));const at=w?v(K,Lt):u;return at.width=K,at.height=Lt,at.getContext("2d").drawImage(P,0,0,K,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Lt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(P,w,G,j,tt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=w;if(w===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),w===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),w===s.RGBA){const Lt=tt?Ao:ue.getTransfer(j);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=Lt===_e?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(P,w){let G;return P?w===null||w===vs||w===Mr?G=s.DEPTH24_STENCIL8:w===Di?G=s.DEPTH32F_STENCIL8:w===yr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vs||w===Mr?G=s.DEPTH_COMPONENT24:w===Di?G=s.DEPTH_COMPONENT32F:w===yr&&(G=s.DEPTH_COMPONENT16),G}function b(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gn&&P.minFilter!==hi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){const w=P.target;w.removeEventListener("dispose",I),p(w),w.isVideoTexture&&c.delete(w)}function A(P){const w=P.target;w.removeEventListener("dispose",A),g(w)}function p(P){const w=n.get(P);if(w.__webglInit===void 0)return;const G=P.source,j=f.get(G);if(j){const tt=j[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&d(P),Object.keys(j).length===0&&f.delete(G)}n.remove(P)}function d(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const G=P.source,j=f.get(G);delete j[w.__cacheKey],o.memory.textures--}function g(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let tt=0;tt<w.__webglFramebuffer[j].length;tt++)s.deleteFramebuffer(w.__webglFramebuffer[j][tt]);else s.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)s.deleteFramebuffer(w.__webglFramebuffer[j]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=P.textures;for(let j=0,tt=G.length;j<tt;j++){const K=n.get(G[j]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(P)}let M=0;function C(){M=0}function L(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function k(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function U(P,w){const G=n.get(P);if(P.isVideoTexture&&Qt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,P,w);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function H(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Y(G,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function $(P,w){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Y(G,P,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function V(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Z(G,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const J={[sl]:s.REPEAT,[ps]:s.CLAMP_TO_EDGE,[rl]:s.MIRRORED_REPEAT},et={[Gn]:s.NEAREST,[Bd]:s.NEAREST_MIPMAP_NEAREST,[Br]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Qo]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},gt={[Vd]:s.NEVER,[Kd]:s.ALWAYS,[Wd]:s.LESS,[fu]:s.LEQUAL,[qd]:s.EQUAL,[Yd]:s.GEQUAL,[Xd]:s.GREATER,[$d]:s.NOTEQUAL};function Rt(P,w){if(w.type===Di&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===hi||w.magFilter===Qo||w.magFilter===Br||w.magFilter===ms||w.minFilter===hi||w.minFilter===Qo||w.minFilter===Br||w.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,J[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,J[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,J[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,et[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,et[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,gt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Gn||w.minFilter!==Br&&w.minFilter!==ms||w.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));const j=w.source;let tt=f.get(j);tt===void 0&&(tt={},f.set(j,tt));const K=k(w);if(K!==P.__cacheKey){tt[K]===void 0&&(tt[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[K].usedTimes++;const Lt=tt[P.__cacheKey];Lt!==void 0&&(tt[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&d(w)),P.__cacheKey=K,P.__webglTexture=tt[K].texture}return G}function Dt(P,w,G){return Math.floor(Math.floor(P/G)/w)}function Xt(P,w,G,j){const K=P.updateRanges;if(K.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,j,w.data);else{K.sort((rt,_t)=>rt.start-_t.start);let Lt=0;for(let rt=1;rt<K.length;rt++){const _t=K[Lt],Ht=K[rt],It=_t.start+_t.count,dt=Dt(Ht.start,w.width,4),Zt=Dt(_t.start,w.width,4);Ht.start<=It+1&&dt===Zt&&Dt(Ht.start+Ht.count-1,w.width,4)===dt?_t.count=Math.max(_t.count,Ht.start+Ht.count-_t.start):(++Lt,K[Lt]=Ht)}K.length=Lt+1;const at=s.getParameter(s.UNPACK_ROW_LENGTH),At=s.getParameter(s.UNPACK_SKIP_PIXELS),Ct=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let rt=0,_t=K.length;rt<_t;rt++){const Ht=K[rt],It=Math.floor(Ht.start/4),dt=Math.ceil(Ht.count/4),Zt=It%w.width,O=Math.floor(It/w.width),ot=dt,ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Zt,O,ot,ct,G,j,w.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,at),s.pixelStorei(s.UNPACK_SKIP_PIXELS,At),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function Y(P,w,G){let j=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=s.TEXTURE_3D);const tt=kt(P,w),K=w.source;e.bindTexture(j,P.__webglTexture,s.TEXTURE0+G);const Lt=n.get(K);if(K.version!==Lt.__version||tt===!0){e.activeTexture(s.TEXTURE0+G);const at=ue.getPrimaries(ue.workingColorSpace),At=w.colorSpace===qi?null:ue.getPrimaries(w.colorSpace),Ct=w.colorSpace===qi||at===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let rt=y(w.image,!1,r.maxTextureSize);rt=$e(w,rt);const _t=i.convert(w.format,w.colorSpace),Ht=i.convert(w.type);let It=T(w.internalFormat,_t,Ht,w.colorSpace,w.isVideoTexture);Rt(j,w);let dt;const Zt=w.mipmaps,O=w.isVideoTexture!==!0,ot=Lt.__version===void 0||tt===!0,ct=K.dataReady,yt=b(w,rt);if(w.isDepthTexture)It=S(w.format===Sr,w.type),ot&&(O?e.texStorage2D(s.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,_t,Ht,null));else if(w.isDataTexture)if(Zt.length>0){O&&ot&&e.texStorage2D(s.TEXTURE_2D,yt,It,Zt[0].width,Zt[0].height);for(let it=0,Q=Zt.length;it<Q;it++)dt=Zt[it],O?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,dt.width,dt.height,_t,Ht,dt.data):e.texImage2D(s.TEXTURE_2D,it,It,dt.width,dt.height,0,_t,Ht,dt.data);w.generateMipmaps=!1}else O?(ot&&e.texStorage2D(s.TEXTURE_2D,yt,It,rt.width,rt.height),ct&&Xt(w,rt,_t,Ht)):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,_t,Ht,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,It,Zt[0].width,Zt[0].height,rt.depth);for(let it=0,Q=Zt.length;it<Q;it++)if(dt=Zt[it],w.format!==oi)if(_t!==null)if(O){if(ct)if(w.layerUpdates.size>0){const St=ah(dt.width,dt.height,w.format,w.type);for(const Kt of w.layerUpdates){const be=dt.data.subarray(Kt*St/dt.data.BYTES_PER_ELEMENT,(Kt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,Kt,dt.width,dt.height,1,_t,be)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,rt.depth,_t,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,It,dt.width,dt.height,rt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,rt.depth,_t,Ht,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,It,dt.width,dt.height,rt.depth,0,_t,Ht,dt.data)}else{O&&ot&&e.texStorage2D(s.TEXTURE_2D,yt,It,Zt[0].width,Zt[0].height);for(let it=0,Q=Zt.length;it<Q;it++)dt=Zt[it],w.format!==oi?_t!==null?O?ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,it,It,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,dt.width,dt.height,_t,Ht,dt.data):e.texImage2D(s.TEXTURE_2D,it,It,dt.width,dt.height,0,_t,Ht,dt.data)}else if(w.isDataArrayTexture)if(O){if(ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,It,rt.width,rt.height,rt.depth),ct)if(w.layerUpdates.size>0){const it=ah(rt.width,rt.height,w.format,w.type);for(const Q of w.layerUpdates){const St=rt.data.subarray(Q*it/rt.data.BYTES_PER_ELEMENT,(Q+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,_t,Ht,St)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ht,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,_t,Ht,rt.data);else if(w.isData3DTexture)O?(ot&&e.texStorage3D(s.TEXTURE_3D,yt,It,rt.width,rt.height,rt.depth),ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ht,rt.data)):e.texImage3D(s.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,_t,Ht,rt.data);else if(w.isFramebufferTexture){if(ot)if(O)e.texStorage2D(s.TEXTURE_2D,yt,It,rt.width,rt.height);else{let it=rt.width,Q=rt.height;for(let St=0;St<yt;St++)e.texImage2D(s.TEXTURE_2D,St,It,it,Q,0,_t,Ht,null),it>>=1,Q>>=1}}else if(Zt.length>0){if(O&&ot){const it=ke(Zt[0]);e.texStorage2D(s.TEXTURE_2D,yt,It,it.width,it.height)}for(let it=0,Q=Zt.length;it<Q;it++)dt=Zt[it],O?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,_t,Ht,dt):e.texImage2D(s.TEXTURE_2D,it,It,_t,Ht,dt);w.generateMipmaps=!1}else if(O){if(ot){const it=ke(rt);e.texStorage2D(s.TEXTURE_2D,yt,It,it.width,it.height)}ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ht,rt)}else e.texImage2D(s.TEXTURE_2D,0,It,_t,Ht,rt);x(w)&&_(j),Lt.__version=K.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Z(P,w,G){if(w.image.length!==6)return;const j=kt(P,w),tt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const K=n.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(s.TEXTURE0+G);const Lt=ue.getPrimaries(ue.workingColorSpace),at=w.colorSpace===qi?null:ue.getPrimaries(w.colorSpace),At=w.colorSpace===qi||Lt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ct=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!Ct&&!rt?_t[Q]=y(w.image[Q],!0,r.maxCubemapSize):_t[Q]=rt?w.image[Q].image:w.image[Q],_t[Q]=$e(w,_t[Q]);const Ht=_t[0],It=i.convert(w.format,w.colorSpace),dt=i.convert(w.type),Zt=T(w.internalFormat,It,dt,w.colorSpace),O=w.isVideoTexture!==!0,ot=K.__version===void 0||j===!0,ct=tt.dataReady;let yt=b(w,Ht);Rt(s.TEXTURE_CUBE_MAP,w);let it;if(Ct){O&&ot&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Zt,Ht.width,Ht.height);for(let Q=0;Q<6;Q++){it=_t[Q].mipmaps;for(let St=0;St<it.length;St++){const Kt=it[St];w.format!==oi?It!==null?O?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Kt.width,Kt.height,It,Kt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,Zt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Kt.width,Kt.height,It,dt,Kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,Zt,Kt.width,Kt.height,0,It,dt,Kt.data)}}}else{if(it=w.mipmaps,O&&ot){it.length>0&&yt++;const Q=ke(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,It,dt,_t[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,_t[Q].width,_t[Q].height,0,It,dt,_t[Q].data);for(let St=0;St<it.length;St++){const be=it[St].image[Q].image;O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,be.width,be.height,It,dt,be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,Zt,be.width,be.height,0,It,dt,be.data)}}else{O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,dt,_t[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,It,dt,_t[Q]);for(let St=0;St<it.length;St++){const Kt=it[St];O?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,It,dt,Kt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,Zt,It,dt,Kt.image[Q])}}}x(w)&&_(s.TEXTURE_CUBE_MAP),K.__version=tt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ht(P,w,G,j,tt,K){const Lt=i.convert(G.format,G.colorSpace),at=i.convert(G.type),At=T(G.internalFormat,Lt,at,G.colorSpace),Ct=n.get(w),rt=n.get(G);if(rt.__renderTarget=w,!Ct.__hasExternalTextures){const _t=Math.max(1,w.width>>K),Ht=Math.max(1,w.height>>K);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,At,_t,Ht,w.depth,0,Lt,at,null):e.texImage2D(tt,K,At,_t,Ht,0,Lt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Et(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,tt,rt.__webglTexture,0,Ee(w)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,tt,rt.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const j=w.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=S(w.stencilBuffer,tt),Lt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Ee(w);Et(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,K,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,K,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,P)}else{const j=w.textures;for(let tt=0;tt<j.length;tt++){const K=j[tt],Lt=i.convert(K.format,K.colorSpace),at=i.convert(K.type),At=T(K.internalFormat,Lt,at,K.colorSpace),Ct=Ee(w);G&&Et(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,At,w.width,w.height):Et(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,At,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,At,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const tt=j.__webglTexture,K=Ee(w);if(w.depthTexture.format===br)Et(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(w.depthTexture.format===Sr)Et(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Gt(P){const w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=j}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?vt(w.__webglFramebuffer[0],P):vt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=s.createRenderbuffer(),Pt(w.__webglDepthbuffer[j],P,!1);else{const tt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Pt(w.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(P,w,G){const j=n.get(P);w!==void 0&&ht(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Gt(P)}function D(P){const w=P.texture,G=n.get(P),j=n.get(w);P.addEventListener("dispose",A);const tt=P.textures,K=P.isWebGLCubeRenderTarget===!0,Lt=tt.length>1;if(Lt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=w.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let At=0;At<w.mipmaps.length;At++)G.__webglFramebuffer[at][At]=s.createFramebuffer()}else G.__webglFramebuffer[at]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)G.__webglFramebuffer[at]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let at=0,At=tt.length;at<At;at++){const Ct=n.get(tt[at]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Et(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const At=tt[at];G.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const Ct=i.convert(At.format,At.colorSpace),rt=i.convert(At.type),_t=T(At.internalFormat,Ct,rt,At.colorSpace,P.isXRRenderTarget===!0),Ht=Ee(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,_t,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,G.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)ht(G.__webglFramebuffer[at][At],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At);else ht(G.__webglFramebuffer[at],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);x(w)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let at=0,At=tt.length;at<At;at++){const Ct=tt[at],rt=n.get(Ct);let _t=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),Rt(_t,Ct),ht(G.__webglFramebuffer,P,Ct,s.COLOR_ATTACHMENT0+at,_t,0),x(Ct)&&_(_t)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Rt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)ht(G.__webglFramebuffer[At],P,w,s.COLOR_ATTACHMENT0,at,At);else ht(G.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,at,0);x(w)&&_(at),e.unbindTexture()}P.depthBuffer&&Gt(P)}function Me(P){const w=P.textures;for(let G=0,j=w.length;G<j;G++){const tt=w[G];if(x(tt)){const K=R(P),Lt=n.get(tt).__webglTexture;e.bindTexture(K,Lt),_(K),e.unbindTexture()}}}const zt=[],Vt=[];function wt(P){if(P.samples>0){if(Et(P)===!1){const w=P.textures,G=P.width,j=P.height;let tt=s.COLOR_BUFFER_BIT;const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(P),at=w.length>1;if(at)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const At=P.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const rt=n.get(w[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,G,j,0,0,G,j,tt,s.NEAREST),h===!0&&(zt.length=0,Vt.length=0,zt.push(s.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(zt.push(K),Vt.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const rt=n.get(w[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ee(P){return Math.min(r.maxSamples,P.samples)}function Et(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qt(P){const w=o.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function $e(P,w){const G=P.colorSpace,j=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ys&&G!==qi&&(ue.getTransfer(G)===_e?(j!==oi||tt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(a.width=P.naturalWidth||P.width,a.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(a.width=P.displayWidth,a.height=P.displayHeight):(a.width=P.width,a.height=P.height),a}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Et}function A1(s,t){function e(n,r=qi){let i;const o=ue.getTransfer(r);if(n===_i)return s.UNSIGNED_BYTE;if(n===$l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===su)return s.BYTE;if(n===ru)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===Xl)return s.INT;if(n===vs)return s.UNSIGNED_INT;if(n===Di)return s.FLOAT;if(n===Cr)return s.HALF_FLOAT;if(n===lu)return s.ALPHA;if(n===cu)return s.RGB;if(n===oi)return s.RGBA;if(n===br)return s.DEPTH_COMPONENT;if(n===Sr)return s.DEPTH_STENCIL;if(n===hu)return s.RED;if(n===Kl)return s.RED_INTEGER;if(n===uu)return s.RG;if(n===jl)return s.RG_INTEGER;if(n===Zl)return s.RGBA_INTEGER;if(n===xo||n===yo||n===Mo||n===bo)if(o===_e)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===xo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===xo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===ol)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===hl||n===ul)return o===_e?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===dl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===fl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return o===_e?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===Al)return o===_e?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Pl||n===Ll||n===Dl)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===Il)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const R1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C1=`
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

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Tu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:R1,fragmentShader:C1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new No(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P1 extends js{constructor(t,e){super();const n=this;let r=null,i=1,o=null,l="local-floor",h=1,a=null,c=null,u=null,f=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",x=new I1,_={},R=e.getContextAttributes();let T=null,S=null;const b=[],I=[],A=new ce;let p=null;const d=new zn;d.viewport=new ve;const g=new zn;g.viewport=new ve;const M=[d,g],C=new Jf;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=b[Y];return Z===void 0&&(Z=new ya,b[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=b[Y];return Z===void 0&&(Z=new ya,b[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=b[Y];return Z===void 0&&(Z=new ya,b[Y]=Z),Z.getHandSpace()};function U(Y){const Z=I.indexOf(Y.inputSource);if(Z===-1)return;const ht=b[Z];ht!==void 0&&(ht.update(Y.inputSource,Y.frame,a||o),ht.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){const Z=I[Y];Z!==null&&(I[Y]=null,b[Y].disconnect(Z))}L=null,k=null,x.reset();for(const Y in _)delete _[Y];t.setRenderTarget(T),m=null,f=null,u=null,r=null,S=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(p),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){i=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(Y){a=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),R.xrCompatible!==!0&&await e.makeXRCompatible(),p=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Pt=null,vt=null;R.depth&&(vt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=R.stencil?Sr:br,Pt=R.stencil?Mr:vs);const Gt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(Gt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new xs(f.textureWidth,f.textureHeight,{format:oi,type:_i,depthTexture:new Eu(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ht={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,e,ht),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new xs(m.framebufferWidth,m.framebufferHeight,{format:oi,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),a=null,o=await r.requestReferenceSpace(l),Xt.setContext(r),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(Y){for(let Z=0;Z<Y.removed.length;Z++){const ht=Y.removed[Z],Pt=I.indexOf(ht);Pt>=0&&(I[Pt]=null,b[Pt].disconnect(ht))}for(let Z=0;Z<Y.added.length;Z++){const ht=Y.added[Z];let Pt=I.indexOf(ht);if(Pt===-1){for(let Gt=0;Gt<b.length;Gt++)if(Gt>=I.length){I.push(ht),Pt=Gt;break}else if(I[Gt]===null){I[Gt]=ht,Pt=Gt;break}if(Pt===-1)break}const vt=b[Pt];vt&&vt.connect(ht)}}const V=new F,J=new F;function et(Y,Z,ht){V.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ht.matrixWorld);const Pt=V.distanceTo(J),vt=Z.projectionMatrix.elements,Gt=ht.projectionMatrix.elements,Re=vt[14]/(vt[10]-1),D=vt[14]/(vt[10]+1),Me=(vt[9]+1)/vt[5],zt=(vt[9]-1)/vt[5],Vt=(vt[8]-1)/vt[0],wt=(Gt[8]+1)/Gt[0],Ee=Re*Vt,Et=Re*wt,Qt=Pt/(-Vt+wt),$e=Qt*-Vt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(Qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ke=Re+Qt,P=D+Qt,w=Ee-$e,G=Et+(Pt-$e),j=Me*D/P*ke,tt=zt*D/P*ke;Y.projectionMatrix.makePerspective(w,G,j,tt,ke,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function gt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,ht=Y.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),C.near=g.near=d.near=Z,C.far=g.far=d.far=ht,(L!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,k=C.far),C.layers.mask=Y.layers.mask|6,d.layers.mask=C.layers.mask&3,g.layers.mask=C.layers.mask&5;const Pt=Y.parent,vt=C.cameras;gt(C,Pt);for(let Gt=0;Gt<vt.length;Gt++)gt(vt[Gt],Pt);vt.length===2?et(C,d,g):C.projectionMatrix.copy(d.projectionMatrix),Rt(Y,C,Pt)};function Rt(Y,Z,ht){ht===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(ht.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(Y){h=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(Y){return _[Y]};let kt=null;function Dt(Y,Z){if(c=Z.getViewerPose(a||o),v=Z,c!==null){const ht=c.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Pt=!1;ht.length!==C.cameras.length&&(C.cameras.length=0,Pt=!0);for(let D=0;D<ht.length;D++){const Me=ht[D];let zt=null;if(m!==null)zt=m.getViewport(Me);else{const wt=u.getViewSubImage(f,Me);zt=wt.viewport,D===0&&(t.setRenderTargetTextures(S,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(S))}let Vt=M[D];Vt===void 0&&(Vt=new zn,Vt.layers.enable(D),Vt.viewport=new ve,M[D]=Vt),Vt.matrix.fromArray(Me.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Me.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(zt.x,zt.y,zt.width,zt.height),D===0&&(C.matrix.copy(Vt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Pt===!0&&C.cameras.push(Vt)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const D=u.getDepthInformation(ht[0]);D&&D.isValid&&D.texture&&x.init(D,r.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<ht.length;D++){const Me=ht[D].camera;if(Me){let zt=_[Me];zt||(zt=new Tu,_[Me]=zt);const Vt=u.getCameraImage(Me);zt.sourceTexture=Vt}}}}for(let ht=0;ht<b.length;ht++){const Pt=I[ht],vt=b[ht];Pt!==null&&vt!==void 0&&vt.update(Pt,Z,a||o)}kt&&kt(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),v=null}const Xt=new Cu;Xt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){kt=Y},this.dispose=function(){}}}const os=new vi,L1=new Ae;function D1(s,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,yu(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,R,T,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(x,_):_.isMeshToonMaterial?(i(x,_),u(x,_)):_.isMeshPhongMaterial?(i(x,_),c(x,_)):_.isMeshStandardMaterial?(i(x,_),f(x,_),_.isMeshPhysicalMaterial&&m(x,_,S)):_.isMeshMatcapMaterial?(i(x,_),v(x,_)):_.isMeshDepthMaterial?i(x,_):_.isMeshDistanceMaterial?(i(x,_),y(x,_)):_.isMeshNormalMaterial?i(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?h(x,_,R,T):_.isSpriteMaterial?a(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const R=t.get(_),T=R.envMap,S=R.envMapRotation;T&&(x.envMap.value=T,os.copy(S),os.x*=-1,os.y*=-1,os.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),x.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(os)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,R,T){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*R,x.scale.value=T*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function c(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function u(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function f(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,R){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){const R=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function k1(s,t,e,n){let r={},i={},o=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,T){const S=T.program;n.uniformBlockBinding(R,S)}function a(R,T){let S=r[R.id];S===void 0&&(v(R),S=c(R),r[R.id]=S,R.addEventListener("dispose",x));const b=T.program;n.updateUBOMapping(R,b);const I=t.render.frame;i[R.id]!==I&&(f(R),i[R.id]=I)}function c(R){const T=u();R.__bindingPointIndex=T;const S=s.createBuffer(),b=R.__size,I=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,b,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function u(){for(let R=0;R<l;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const T=r[R.id],S=R.uniforms,b=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let I=0,A=S.length;I<A;I++){const p=Array.isArray(S[I])?S[I]:[S[I]];for(let d=0,g=p.length;d<g;d++){const M=p[d];if(m(M,I,d,b)===!0){const C=M.__offset,L=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let U=0;U<L.length;U++){const H=L[U],$=y(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,C+k,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(R,T,S,b){const I=R.value,A=T+"_"+S;if(b[A]===void 0)return typeof I=="number"||typeof I=="boolean"?b[A]=I:b[A]=I.clone(),!0;{const p=b[A];if(typeof I=="number"||typeof I=="boolean"){if(p!==I)return b[A]=I,!0}else if(p.equals(I)===!1)return p.copy(I),!0}return!1}function v(R){const T=R.uniforms;let S=0;const b=16;for(let A=0,p=T.length;A<p;A++){const d=Array.isArray(T[A])?T[A]:[T[A]];for(let g=0,M=d.length;g<M;g++){const C=d[g],L=Array.isArray(C.value)?C.value:[C.value];for(let k=0,U=L.length;k<U;k++){const H=L[k],$=y(H),V=S%b,J=V%$.boundary,et=V+J;S+=J,et!==0&&b-et<$.storage&&(S+=b-et),C.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=$.storage}}}const I=S%b;return I>0&&(S+=b-I),R.__size=S,R.__cache={},this}function y(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function x(R){const T=R.target;T.removeEventListener("dispose",x);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(r[T.id]),delete r[T.id],delete i[T.id]}function _(){for(const R in r)s.deleteBuffer(r[R]);o=[],r={},i={}}return{bind:h,update:a,dispose:_}}class U1{constructor(t={}){const{canvas:e=ff(),context:n=null,depth:r=!0,stencil:i=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:a=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const R=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=Cn;let I=0,A=0,p=null,d=-1,g=null;const M=new ve,C=new ve;let L=null;const k=new $t(0);let U=0,H=e.width,$=e.height,V=1,J=null,et=null;const gt=new ve(0,0,H,$),Rt=new ve(0,0,H,$);let kt=!1;const Dt=new nc;let Xt=!1,Y=!1;const Z=new Ae,ht=new F,Pt=new ve,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Re(){return p===null?V:1}let D=n;function Me(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:i,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",it,!1),D===null){const B="webgl2";if(D=Me(B,E),D===null)throw Me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,Vt,wt,Ee,Et,Qt,$e,ke,P,w,G,j,tt,K,Lt,at,At,Ct,rt,_t,Ht,It,dt,Zt;function O(){zt=new q0(D),zt.init(),It=new A1(D,zt),Vt=new O0(D,zt,t,It),wt=new E1(D,zt),Vt.reversedDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),Ee=new Y0(D),Et=new d1,Qt=new T1(D,zt,wt,Et,Vt,It,Ee),$e=new z0(S),ke=new W0(S),P=new tp(D),dt=new N0(D,P),w=new X0(D,P,Ee,dt),G=new j0(D,w,P,Ee),rt=new K0(D,Vt,Qt),at=new B0(Et),j=new u1(S,$e,ke,zt,Vt,dt,at),tt=new D1(S,Et),K=new p1,Lt=new y1(zt),Ct=new U0(S,$e,ke,wt,G,m,h),At=new S1(S,G,Vt),Zt=new k1(D,Ee,Vt,wt),_t=new F0(D,zt,Ee),Ht=new $0(D,zt,Ee),Ee.programs=j.programs,S.capabilities=Vt,S.extensions=zt,S.properties=Et,S.renderLists=K,S.shadowMap=At,S.state=wt,S.info=Ee}O();const ot=new P1(S,D);this.xr=ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(H,$,!1))},this.getSize=function(E){return E.set(H,$)},this.setSize=function(E,B,W=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,$=B,e.width=Math.floor(E*V),e.height=Math.floor(B*V),W===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(E,B,W){H=E,$=B,V=W,e.width=Math.floor(E*W),e.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,B,W,q){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,B,W,q),wt.viewport(M.copy(gt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,B,W,q){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,B,W,q),wt.scissor(C.copy(Rt).multiplyScalar(V).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(E){wt.setScissorTest(kt=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,W=!0){let q=0;if(E){let z=!1;if(p!==null){const st=p.texture.format;z=st===Zl||st===jl||st===Kl}if(z){const st=p.texture.type,pt=st===_i||st===vs||st===yr||st===Mr||st===$l||st===Yl,bt=Ct.getClearColor(),xt=Ct.getClearAlpha(),Bt=bt.r,Wt=bt.g,Ut=bt.b;pt?(v[0]=Bt,v[1]=Wt,v[2]=Ut,v[3]=xt,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=Bt,y[1]=Wt,y[2]=Ut,y[3]=xt,D.clearBufferiv(D.COLOR,0,y))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Ct.dispose(),K.dispose(),Lt.dispose(),Et.dispose(),$e.dispose(),ke.dispose(),G.dispose(),dt.dispose(),Zt.dispose(),j.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",li),ot.removeEventListener("sessionend",yc),Qi.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Ee.autoReset,B=At.enabled,W=At.autoUpdate,q=At.needsUpdate,z=At.type;O(),Ee.autoReset=E,At.enabled=B,At.autoUpdate=W,At.needsUpdate=q,At.type=z}function it(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const B=E.target;B.removeEventListener("dispose",Q),St(B)}function St(E){Kt(E),Et.remove(E)}function Kt(E){const B=Et.get(E).programs;B!==void 0&&(B.forEach(function(W){j.releaseProgram(W)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,q,z,st){B===null&&(B=vt);const pt=z.isMesh&&z.matrixWorld.determinant()<0,bt=id(E,B,W,q,z);wt.setMaterial(q,pt);let xt=W.index,Bt=1;if(q.wireframe===!0){if(xt=w.getWireframeAttribute(W),xt===void 0)return;Bt=2}const Wt=W.drawRange,Ut=W.attributes.position;let oe=Wt.start*Bt,me=(Wt.start+Wt.count)*Bt;st!==null&&(oe=Math.max(oe,st.start*Bt),me=Math.min(me,(st.start+st.count)*Bt)),xt!==null?(oe=Math.max(oe,0),me=Math.min(me,xt.count)):Ut!=null&&(oe=Math.max(oe,0),me=Math.min(me,Ut.count));const Pe=me-oe;if(Pe<0||Pe===1/0)return;dt.setup(z,q,bt,W,xt);let Se,ye=_t;if(xt!==null&&(Se=P.get(xt),ye=Ht,ye.setIndex(Se)),z.isMesh)q.wireframe===!0?(wt.setLineWidth(q.wireframeLinewidth*Re()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(z.isLine){let Ft=q.linewidth;Ft===void 0&&(Ft=1),wt.setLineWidth(Ft*Re()),z.isLineSegments?ye.setMode(D.LINES):z.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else z.isPoints?ye.setMode(D.POINTS):z.isSprite&&ye.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ft=z._multiDrawStarts,Ce=z._multiDrawCounts,he=z._multiDrawCount,Un=xt?P.get(xt).bytesPerElement:1,ws=Et.get(q).currentProgram.getUniforms();for(let Nn=0;Nn<he;Nn++)ws.setValue(D,"_gl_DrawID",Nn),ye.render(Ft[Nn]/Un,Ce[Nn])}else if(z.isInstancedMesh)ye.renderInstances(oe,Pe,z.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ce=Math.min(W.instanceCount,Ft);ye.renderInstances(oe,Pe,Ce)}else ye.render(oe,Pe)};function be(E,B,W){E.transparent===!0&&E.side===Ke&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,Or(E,B,W),E.side=ji,E.needsUpdate=!0,Or(E,B,W),E.side=Ke):Or(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),_=Lt.get(W),_.init(B),T.push(_),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights();const q=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const st=z.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const bt=st[pt];be(bt,W,z),q.add(bt)}else be(st,W,z),q.add(st)}),_=T.pop(),q},this.compileAsync=function(E,B,W=null){const q=this.compile(E,B,W);return new Promise(z=>{function st(){if(q.forEach(function(pt){Et.get(pt).currentProgram.isReady()&&q.delete(pt)}),q.size===0){z(E);return}setTimeout(st,10)}zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let de=null;function Si(E){de&&de(E)}function li(){Qi.stop()}function yc(){Qi.start()}const Qi=new Cu;Qi.setAnimationLoop(Si),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(E){de=E,ot.setAnimationLoop(E),E===null?Qi.stop():Qi.start()},ot.addEventListener("sessionstart",li),ot.addEventListener("sessionend",yc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(B),B=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,B,p),_=Lt.get(E,T.length),_.init(B),T.push(_),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Dt.setFromProjectionMatrix(Z,ui,B.reversedDepth),Y=this.localClippingEnabled,Xt=at.init(this.clippingPlanes,Y),x=K.get(E,R.length),x.init(),R.push(x),ot.enabled===!0&&ot.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Zo(st,B,-1/0,S.sortObjects)}Zo(E,B,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(J,et),Gt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Gt&&Ct.addToRenderList(x,E),this.info.render.frame++,Xt===!0&&at.beginShadows();const W=_.state.shadowsArray;At.render(W,E,B),Xt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,z=x.transmissive;if(_.setupLights(),B.isArrayCamera){const st=B.cameras;if(z.length>0)for(let pt=0,bt=st.length;pt<bt;pt++){const xt=st[pt];bc(q,z,E,xt)}Gt&&Ct.render(E);for(let pt=0,bt=st.length;pt<bt;pt++){const xt=st[pt];Mc(x,E,xt,xt.viewport)}}else z.length>0&&bc(q,z,E,B),Gt&&Ct.render(E),Mc(x,E,B);p!==null&&A===0&&(Qt.updateMultisampleRenderTarget(p),Qt.updateRenderTargetMipmap(p)),E.isScene===!0&&E.onAfterRender(S,E,B),dt.resetDefaultState(),d=-1,g=null,T.pop(),T.length>0?(_=T[T.length-1],Xt===!0&&at.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function Zo(E,B,W,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Dt.intersectsSprite(E)){q&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const pt=G.update(E),bt=E.material;bt.visible&&x.push(E,pt,bt,W,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Dt.intersectsObject(E))){const pt=G.update(E),bt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(bt)){const xt=pt.groups;for(let Bt=0,Wt=xt.length;Bt<Wt;Bt++){const Ut=xt[Bt],oe=bt[Ut.materialIndex];oe&&oe.visible&&x.push(E,pt,oe,W,Pt.z,Ut)}}else bt.visible&&x.push(E,pt,bt,W,Pt.z,null)}}const st=E.children;for(let pt=0,bt=st.length;pt<bt;pt++)Zo(st[pt],B,W,q)}function Mc(E,B,W,q){const z=E.opaque,st=E.transmissive,pt=E.transparent;_.setupLightsView(W),Xt===!0&&at.setGlobalState(S.clippingPlanes,W),q&&wt.viewport(M.copy(q)),z.length>0&&Fr(z,B,W),st.length>0&&Fr(st,B,W),pt.length>0&&Fr(pt,B,W),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function bc(E,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new xs(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Cr:_i,minFilter:ms,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const st=_.state.transmissionRenderTarget[q.id],pt=q.viewport||M;st.setSize(pt.z*S.transmissionResolutionScale,pt.w*S.transmissionResolutionScale);const bt=S.getRenderTarget(),xt=S.getActiveCubeFace(),Bt=S.getActiveMipmapLevel();S.setRenderTarget(st),S.getClearColor(k),U=S.getClearAlpha(),U<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&Ct.render(W);const Wt=S.toneMapping;S.toneMapping=$i;const Ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),Xt===!0&&at.setGlobalState(S.clippingPlanes,q),Fr(E,W,q),Qt.updateMultisampleRenderTarget(st),Qt.updateRenderTargetMipmap(st),zt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let me=0,Pe=B.length;me<Pe;me++){const Se=B[me],ye=Se.object,Ft=Se.geometry,Ce=Se.material,he=Se.group;if(Ce.side===Ke&&ye.layers.test(q.layers)){const Un=Ce.side;Ce.side=bn,Ce.needsUpdate=!0,Sc(ye,W,q,Ft,Ce,he),Ce.side=Un,Ce.needsUpdate=!0,oe=!0}}oe===!0&&(Qt.updateMultisampleRenderTarget(st),Qt.updateRenderTargetMipmap(st))}S.setRenderTarget(bt,xt,Bt),S.setClearColor(k,U),Ut!==void 0&&(q.viewport=Ut),S.toneMapping=Wt}function Fr(E,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,st=E.length;z<st;z++){const pt=E[z],bt=pt.object,xt=pt.geometry,Bt=pt.group;let Wt=pt.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),bt.layers.test(W.layers)&&Sc(bt,B,W,xt,Wt,Bt)}}function Sc(E,B,W,q,z,st){E.onBeforeRender(S,B,W,q,z,st),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,B,W,q,E,st),z.transparent===!0&&z.side===Ke&&z.forceSinglePass===!1?(z.side=bn,z.needsUpdate=!0,S.renderBufferDirect(W,B,q,z,E,st),z.side=ji,z.needsUpdate=!0,S.renderBufferDirect(W,B,q,z,E,st),z.side=Ke):S.renderBufferDirect(W,B,q,z,E,st),E.onAfterRender(S,B,W,q,z,st)}function Or(E,B,W){B.isScene!==!0&&(B=vt);const q=Et.get(E),z=_.state.lights,st=_.state.shadowsArray,pt=z.state.version,bt=j.getParameters(E,z.state,st,B,W),xt=j.getProgramCacheKey(bt);let Bt=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?ke:$e).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Q),Bt=new Map,q.programs=Bt);let Wt=Bt.get(xt);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===pt)return Ec(E,bt),Wt}else bt.uniforms=j.getUniforms(E),E.onBeforeCompile(bt,S),Wt=j.acquireProgram(bt,xt),Bt.set(xt,Wt),q.uniforms=bt.uniforms;const Ut=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=at.uniform),Ec(E,bt),q.needsLights=rd(E),q.lightsStateVersion=pt,q.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function wc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=So.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ec(E,B){const W=Et.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function id(E,B,W,q,z){B.isScene!==!0&&(B=vt),Qt.resetTextureUnits();const st=B.fog,pt=q.isMeshStandardMaterial?B.environment:null,bt=p===null?S.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:Ys,xt=(q.isMeshStandardMaterial?ke:$e).get(q.envMap||pt),Bt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ut=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,me=!!W.morphAttributes.color;let Pe=$i;q.toneMapped&&(p===null||p.isXRRenderTarget===!0)&&(Pe=S.toneMapping);const Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=Se!==void 0?Se.length:0,Ft=Et.get(q),Ce=_.state.lights;if(Xt===!0&&(Y===!0||E!==g)){const xn=E===g&&q.id===d;at.setState(q,E,xn)}let he=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ce.state.version||Ft.outputColorSpace!==bt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==xt||q.fog===!0&&Ft.fog!==st||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==at.numPlanes||Ft.numIntersection!==at.numIntersection)||Ft.vertexAlphas!==Bt||Ft.vertexTangents!==Wt||Ft.morphTargets!==Ut||Ft.morphNormals!==oe||Ft.morphColors!==me||Ft.toneMapping!==Pe||Ft.morphTargetsCount!==ye)&&(he=!0):(he=!0,Ft.__version=q.version);let Un=Ft.currentProgram;he===!0&&(Un=Or(q,B,z));let ws=!1,Nn=!1,ir=!1;const Ie=Un.getUniforms(),Vn=Ft.uniforms;if(wt.useProgram(Un.program)&&(ws=!0,Nn=!0,ir=!0),q.id!==d&&(d=q.id,Nn=!0),ws||g!==E){wt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ie.setValue(D,"projectionMatrix",E.projectionMatrix),Ie.setValue(D,"viewMatrix",E.matrixWorldInverse);const wn=Ie.map.cameraPosition;wn!==void 0&&wn.setValue(D,ht.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&Ie.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ie.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),g!==E&&(g=E,Nn=!0,ir=!0)}if(z.isSkinnedMesh){Ie.setOptional(D,z,"bindMatrix"),Ie.setOptional(D,z,"bindMatrixInverse");const xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ie.setValue(D,"boneTexture",xn.boneTexture,Qt))}z.isBatchedMesh&&(Ie.setOptional(D,z,"batchingTexture"),Ie.setValue(D,"batchingTexture",z._matricesTexture,Qt),Ie.setOptional(D,z,"batchingIdTexture"),Ie.setValue(D,"batchingIdTexture",z._indirectTexture,Qt),Ie.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Ie.setValue(D,"batchingColorTexture",z._colorsTexture,Qt));const Wn=W.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&rt.update(z,W,Un),(Nn||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,Ie.setValue(D,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Vn.envMap.value=xt,Vn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Vn.envMapIntensity.value=B.environmentIntensity),Nn&&(Ie.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ft.needsLights&&sd(Vn,ir),st&&q.fog===!0&&tt.refreshFogUniforms(Vn,st),tt.refreshMaterialUniforms(Vn,q,V,$,_.state.transmissionRenderTarget[E.id]),So.upload(D,wc(Ft),Vn,Qt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(So.upload(D,wc(Ft),Vn,Qt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ie.setValue(D,"center",z.center),Ie.setValue(D,"modelViewMatrix",z.modelViewMatrix),Ie.setValue(D,"normalMatrix",z.normalMatrix),Ie.setValue(D,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const xn=q.uniformsGroups;for(let wn=0,Jo=xn.length;wn<Jo;wn++){const ts=xn[wn];Zt.update(ts,Un),Zt.bind(ts,Un)}}return Un}function sd(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function rd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(E,B,W){const q=Et.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Et.get(E.texture).__webglTexture=B,Et.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const W=Et.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const od=D.createFramebuffer();this.setRenderTarget=function(E,B=0,W=0){p=E,I=B,A=W;let q=!0,z=null,st=!1,pt=!1;if(E){const xt=Et.get(E);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(xt.__webglFramebuffer===void 0)Qt.setupRenderTarget(E);else if(xt.__hasExternalTextures)Qt.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(xt.__boundDepthTexture!==Ut){if(Ut!==null&&Et.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(pt=!0);const Wt=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?z=Wt[B][W]:z=Wt[B],st=!0):E.samples>0&&Qt.useMultisampledRTT(E)===!1?z=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?z=Wt[W]:z=Wt,M.copy(E.viewport),C.copy(E.scissor),L=E.scissorTest}else M.copy(gt).multiplyScalar(V).floor(),C.copy(Rt).multiplyScalar(V).floor(),L=kt;if(W!==0&&(z=od),wt.bindFramebuffer(D.FRAMEBUFFER,z)&&q&&wt.drawBuffers(E,z),wt.viewport(M),wt.scissor(C),wt.setScissorTest(L),st){const xt=Et.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,xt.__webglTexture,W)}else if(pt){const xt=B;for(let Bt=0;Bt<E.textures.length;Bt++){const Wt=Et.get(E.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Wt.__webglTexture,W,xt)}}else if(E!==null&&W!==0){const xt=Et.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,W)}d=-1},this.readRenderTargetPixels=function(E,B,W,q,z,st,pt,bt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){wt.bindFramebuffer(D.FRAMEBUFFER,xt);try{const Bt=E.textures[bt],Wt=Bt.format,Ut=Bt.type;if(!Vt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&W>=0&&W<=E.height-z&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(B,W,q,z,It.convert(Wt),It.convert(Ut),st))}finally{const Bt=p!==null?Et.get(p).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,q,z,st,pt,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt)if(B>=0&&B<=E.width-q&&W>=0&&W<=E.height-z){wt.bindFramebuffer(D.FRAMEBUFFER,xt);const Bt=E.textures[bt],Wt=Bt.format,Ut=Bt.type;if(!Vt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(B,W,q,z,It.convert(Wt),It.convert(Ut),0);const me=p!==null?Et.get(p).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,me);const Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await pf(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(oe),D.deleteSync(Pe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,W=0){const q=Math.pow(2,-W),z=Math.floor(E.image.width*q),st=Math.floor(E.image.height*q),pt=B!==null?B.x:0,bt=B!==null?B.y:0;Qt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,pt,bt,z,st),wt.unbindTexture()};const ad=D.createFramebuffer(),ld=D.createFramebuffer();this.copyTextureToTexture=function(E,B,W=null,q=null,z=0,st=null){st===null&&(z!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=z,z=0):st=0);let pt,bt,xt,Bt,Wt,Ut,oe,me,Pe;const Se=E.isCompressedTexture?E.mipmaps[st]:E.image;if(W!==null)pt=W.max.x-W.min.x,bt=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,Bt=W.min.x,Wt=W.min.y,Ut=W.isBox3?W.min.z:0;else{const Wn=Math.pow(2,-z);pt=Math.floor(Se.width*Wn),bt=Math.floor(Se.height*Wn),E.isDataArrayTexture?xt=Se.depth:E.isData3DTexture?xt=Math.floor(Se.depth*Wn):xt=1,Bt=0,Wt=0,Ut=0}q!==null?(oe=q.x,me=q.y,Pe=q.z):(oe=0,me=0,Pe=0);const ye=It.convert(B.format),Ft=It.convert(B.type);let Ce;B.isData3DTexture?(Qt.setTexture3D(B,0),Ce=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Qt.setTexture2DArray(B,0),Ce=D.TEXTURE_2D_ARRAY):(Qt.setTexture2D(B,0),Ce=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const he=D.getParameter(D.UNPACK_ROW_LENGTH),Un=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ws=D.getParameter(D.UNPACK_SKIP_PIXELS),Nn=D.getParameter(D.UNPACK_SKIP_ROWS),ir=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const Ie=E.isDataArrayTexture||E.isData3DTexture,Vn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Wn=Et.get(E),xn=Et.get(B),wn=Et.get(Wn.__renderTarget),Jo=Et.get(xn.__renderTarget);wt.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let ts=0;ts<xt;ts++)Ie&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,z,Ut+ts),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(B).__webglTexture,st,Pe+ts)),D.blitFramebuffer(Bt,Wt,pt,bt,oe,me,pt,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Et.has(E)){const Wn=Et.get(E),xn=Et.get(B);wt.bindFramebuffer(D.READ_FRAMEBUFFER,ad),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ld);for(let wn=0;wn<xt;wn++)Ie?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wn.__webglTexture,z,Ut+wn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wn.__webglTexture,z),Vn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,st,Pe+wn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,st),z!==0?D.blitFramebuffer(Bt,Wt,pt,bt,oe,me,pt,bt,D.COLOR_BUFFER_BIT,D.NEAREST):Vn?D.copyTexSubImage3D(Ce,st,oe,me,Pe+wn,Bt,Wt,pt,bt):D.copyTexSubImage2D(Ce,st,oe,me,Bt,Wt,pt,bt);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ce,st,oe,me,Pe,pt,bt,xt,ye,Ft,Se.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,st,oe,me,Pe,pt,bt,xt,ye,Se.data):D.texSubImage3D(Ce,st,oe,me,Pe,pt,bt,xt,ye,Ft,Se):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,oe,me,pt,bt,ye,Ft,Se.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,oe,me,Se.width,Se.height,ye,Se.data):D.texSubImage2D(D.TEXTURE_2D,st,oe,me,pt,bt,ye,Ft,Se);D.pixelStorei(D.UNPACK_ROW_LENGTH,he),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Un),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ws),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ir),st===0&&B.generateMipmaps&&D.generateMipmap(Ce),wt.unbindTexture()},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&Qt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Qt.setTextureCube(E,0):E.isData3DTexture?Qt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Qt.setTexture2DArray(E,0):Qt.setTexture2D(E,0),wt.unbindTexture()},this.resetState=function(){I=0,A=0,p=null,wt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const Mt=0,Zn=1,vn=2,De=3,Qs=4,Jn=5,bs=6,si=7,Bo=8,Ss=9,Ne=10,on=11,je=12,In=13,zo=14,Tn=15,Ze=16,sn=17,Ve=18,fi=19,nn=20,Yi=21,Fi=22,Le=23,mn=24,gn=25,tr=26,Ho=27,Go=28,Vo=29,Wo=30,qo=31,er=32,Ln=33,$n=34,Pn=35,Hn=36,dn=37,mi=38,Dr=39,Je=40,en=41,He=42,Qe=43,rn=44,_n=45,ai=46,kn=47,bi=48,Yn=49,yi=50,Mi=51,kr=52,Ur=53,nr=54,Nr=55,Ki=56,Tr=57,ki=58,Tt=s=>s,N1={[mn]:"Crafting Bench",[He]:"Inside Door",[Qe]:"Inside Door",[_n]:"Bed",[Mi]:"Curved Hull Plating"};function F1(s){return N1[s]??jn[s].name}const jn=[Tt({id:Mt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),Tt({id:Zn,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),Tt({id:vn,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),Tt({id:De,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),Tt({id:Qs,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),Tt({id:Jn,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),Tt({id:bs,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),Tt({id:si,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),Tt({id:Bo,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),Tt({id:Ss,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),Tt({id:Ne,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Tt({id:on,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Tt({id:je,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),Tt({id:In,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),Tt({id:zo,name:"Iron Rod",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),Tt({id:Tn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),Tt({id:Ze,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),Tt({id:sn,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),Tt({id:Ve,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),Tt({id:fi,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),Tt({id:nn,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Tt({id:Yi,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),Tt({id:Fi,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:"disassembler",minTier:1,placeable:!0,color:[.35,.75,.8]}),Tt({id:Le,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),Tt({id:mn,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),Tt({id:gn,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),Tt({id:tr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),Tt({id:Ho,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),Tt({id:Go,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),Tt({id:Vo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),Tt({id:Wo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),Tt({id:qo,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),Tt({id:er,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]}),Tt({id:Ln,name:"Farm Land",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:null,fastTool:"shovel",minTier:0,placeable:!0,color:[.34,.24,.14]}),Tt({id:$n,name:"Melon Sprout",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.28,.52,.28]}),Tt({id:Pn,name:"Dune Melon",solid:!1,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.42,.56,.24]}),Tt({id:Hn,name:"Wheat Sprout",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.66,.66,.34]}),Tt({id:dn,name:"Desert Wheat",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.3,tool:null,minTier:0,placeable:!1,color:[.84,.74,.32]}),Tt({id:mi,name:"Fruiting Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.3,.5,.34]}),Tt({id:Dr,name:"Chest Connector",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.48,.4,.26]}),Tt({id:Je,name:"Metal Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.58,.6,.66]}),Tt({id:en,name:"Inside Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Tt({id:He,name:"Inside Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:0,breakTime:1.5,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.52,.56]}),Tt({id:Qe,name:"Inside Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.3,.32,.36]}),Tt({id:rn,name:"Bed",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.72,.3,.28]}),Tt({id:_n,name:"Bed (pillow)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.8,tool:null,fastTool:"axe",minTier:0,placeable:!1,color:[.6,.25,.24]}),Tt({id:ai,name:"Grass",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.5,tool:"shovel",minTier:0,placeable:!1,color:[.34,.55,.28]}),Tt({id:kn,name:"Wood Log",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.1,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.44,.35,.24]}),Tt({id:bi,name:"Leaves",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.25,tool:null,minTier:0,placeable:!1,color:[.2,.45,.2]}),Tt({id:Yn,name:"Sapling",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:.2,tool:null,minTier:0,placeable:!1,color:[.3,.55,.3]}),Tt({id:yi,name:"Curved Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Tt({id:Mi,name:"Hull Slope",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.5,.53,.58]}),Tt({id:kr,name:"Iron Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.62,.52,.42]}),Tt({id:Ur,name:"Copper Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:2.6,tool:"pickaxe",minTier:1,placeable:!1,color:[.72,.42,.26]}),Tt({id:nr,name:"Alabaster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.4,breakTime:1.8,tool:"pickaxe",minTier:0,placeable:!1,color:[.86,.83,.74]}),Tt({id:Nr,name:"Cobalt Ore",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:4.2,tool:"pickaxe",minTier:3,placeable:!1,color:[.36,.46,.68]}),Tt({id:Ki,name:"Broken Thruster",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1,breakTime:-1,tool:null,minTier:0,placeable:!1,color:[.42,.44,.5]}),Tt({id:Tr,name:"Thruster (lit)",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:-1,tool:null,minTier:0,placeable:!1,color:[.9,.6,.3]}),Tt({id:ki,name:"Sandstorm Breaker",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.3,breakTime:5,tool:"disassembler",minTier:0,placeable:!0,color:[.72,.28,.24]})],ku=8,ee=96,X=16,Be=1440;function fn(s){return jn[s].solid}function Xo(s){return jn[s].opaque}function Dn(s){return s===Ve||s>=tr&&s<=er}function Pi(s){return s===Ve?8:Dn(s)?33-s:0}function Da(s){return 33-s}function O1(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class $o{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function mt(s,t,e){let n=s*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function Fl(s){return s*s*(3-2*s)}function ac(s,t,e){const n=Math.floor(s),r=Math.floor(t),i=Fl(s-n),o=Fl(t-r),l=mt(n,r,e),h=mt(n+1,r,e),a=mt(n,r+1,e),c=mt(n+1,r+1,e);return l+(h-l)*i+(a-l)*o+(l-h-a+c)*i*o}function cs(s,t,e,n=4,r=2,i=.5){let o=0,l=1,h=1,a=0;for(let c=0;c<n;c++)o+=ac(s*h,t*h,e+c*101)*l,a+=l,l*=i,h*=r;return o/a}function B1(s,t,e,n=3){let r=0,i=1,o=1,l=0;for(let h=0;h<n;h++){const a=Math.abs(ac(s*o,t*o,e+h*101)*2-1);r+=(1-a)*i,l+=i,i*=.5,o*=2}return r/l}function Ol(s,t){const e=Math.floor(s),n=Fl(s-e),r=mt(e,0,t),i=mt(e+1,0,t);return r+(i-r)*n}const z1=0,Bl=1,Uu=2,Do=3,_r=4,H1=1e6,ze=320,Te=380,An=150;class Nu{constructor(t){this.seed=t;const e=new $o(t^24378);for(let n=0;n<6;n++){const r=e.range(0,Math.PI*2),i=e.range(160,900);this.oases.push({x:Math.round(Math.cos(r)*i),z:Math.round(Math.sin(r)*i),r:e.int(3,5)})}{const n=e.range(0,Math.PI*2),r=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}{const n=Math.atan2(this.secondShip.z,this.secondShip.x)+.9,r=Math.hypot(this.secondShip.x,this.secondShip.z)*e.range(.8,1.15);this.homeTown={x:Math.round(Math.cos(n)*r),z:Math.round(Math.sin(n)*r)}}for(let n=0;n<13;n++){const r=e.range(0,Math.PI*2),i=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(r)*i),z:Math.round(Math.sin(r)*i),buried:e.next()<.4})}}oases=[];secondShip={x:0,z:0};homeTown={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}townCenter(t,e){if(t===this.gtx&&e===this.gtz)return this.homeTown;const n=(mt(t,e,this.seed+53)-.5)*110,r=(mt(t,e,this.seed+55)-.5)*110;return{x:Math.round(t*ze+n),z:Math.round(e*ze+r)}}get gtx(){return Math.round(this.homeTown.x/ze)}get gtz(){return Math.round(this.homeTown.z/ze)}townAt(t,e){if(t===this.gtx&&e===this.gtz)return!0;if(Math.abs(t)<2&&Math.abs(e)<2||mt(t,e,this.seed+51)>=.4)return!1;const n=this.townCenter(t,e);for(const r of this.oases)if(Math.hypot(r.x-n.x,r.z-n.z)<r.r+14)return!1;return!(Math.hypot(this.secondShip.x-n.x,this.secondShip.z-n.z)<30)}townNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/ze),l=Math.floor((t+n)/ze),h=Math.floor((e-n)/ze),a=Math.floor((e+n)/ze);for(let c=o;c<=l;c++)for(let u=h;u<=a;u++){if(!this.townAt(c,u))continue;const f=this.townCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=i&&(i=m,r=f)}return r}nearestTown(t,e){let n=null,r=1/0;const i=Math.floor(t/ze),o=Math.floor(e/ze);for(let l=i-4;l<=i+4;l++)for(let h=o-4;h<=o+4;h++){if(!this.townAt(l,h))continue;const a=this.townCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n=a)}return n??this.homeTown}mouthAt(t,e){if(!j1(this.seed,t,e))return!1;const n=this.mouthCenter(t,e);return!(this.nearOasis(n.x,n.z)||this.townNear(n.x,n.z,20))}mouthCenter(t,e){return Z1(this.seed,t,e)}mouthNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/An),l=Math.floor((t+n)/An),h=Math.floor((e-n)/An),a=Math.floor((e+n)/An);for(let c=o;c<=l;c++)for(let u=h;u<=a;u++){if(!this.mouthAt(c,u))continue;const f=this.mouthCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=i&&(i=m,r=f)}return r}campAt(t,e){return Bu(this.seed,t,e)}campCenter(t,e){return hc(this.seed,t,e)}campType(t,e){return t_(this.seed,t,e)}campNear(t,e,n){let r=null,i=n;const o=Math.floor((t-n)/Te),l=Math.floor((t+n)/Te),h=Math.floor((e-n)/Te),a=Math.floor((e+n)/Te);for(let c=o;c<=l;c++)for(let u=h;u<=a;u++){if(!this.campAt(c,u))continue;const f=this.campCenter(c,u),m=Math.hypot(f.x-t,f.z-e);m<=i&&(i=m,r={x:f.x,z:f.z,type:this.campType(c,u)})}return r}nearestCamp(t,e){let n=null,r=1/0;const i=Math.floor(t/Te),o=Math.floor(e/Te);for(let l=i-3;l<=i+3;l++)for(let h=o-3;h<=o+3;h++){if(!this.campAt(l,h))continue;const a=this.campCenter(l,h),c=Math.hypot(a.x-t,a.z-e);c<r&&(r=c,n={x:a.x,z:a.z,type:this.campType(l,h)})}return n}}function lc(s,t,e){const n=Math.min(.999,Math.max(.001,cs(s/900+.5,t/900+.5,e,3))),i=[.17,.42,.57,.72,.9].map(h=>Math.exp(-Math.abs(n-h)/.05)),o=Math.max(Math.abs(s),Math.abs(t));o<80&&(i[0]+=Math.pow(1-o/80,2)*6);const l=i.reduce((h,a)=>h+a,0);return i.map(h=>h/l)}function wo(s,t,e){const n=lc(s,t,e);let r=0;for(let i=1;i<5;i++)n[i]>n[r]&&(r=i);return r}function Lh(s,t,e){const n=lc(t,e,s),r=[30+cs(t/140,e/140,s+7)*12+cs(t/45,e/45,s+8)*3+Math.sin(t/9+e/13)*.9,29+cs(t/160,e/160,s+9)*12+Math.max(0,ac(t/55,e/55,s+11)-.5)*18,28+cs(t/220,e/220,s+5)*3,33+Math.floor(cs(t/170,e/170,s+13)*7.99)*6,27-B1(t/210,e/210,s+17)*13-Math.max(0,cs(t/500,e/500,s+19)-.55)*10];let i=0;for(let o=0;o<5;o++)i+=n[o]*r[o];return i}function re(s,t,e){const n=Math.max(Math.abs(t),Math.abs(e));if(n<=14)return 30;let r=Lh(s,t,e);if(n<30){const o=(n-14)/16,l=o*o*(3-2*o);return 30+(r-30)*l}const i=G1(s,t,e);if(i){const o=Math.round(Lh(s,i.cx,i.cz)),l=Math.min(1,(12-i.d)/3),h=l*l*(3-2*l);r+=(o-r)*h}return r}function G1(s,t,e){const n=Math.floor(t/Te),r=Math.floor(e/Te);let i=null;for(let o=n-1;o<=n+1;o++)for(let l=r-1;l<=r+1;l++){if(Math.abs(t-o*Te)>42||Math.abs(e-l*Te)>42||!Bu(s,o,l))continue;const h=hc(s,o,l),a=Math.max(Math.abs(h.x-t),Math.abs(h.z-e));a<=12&&(i===null||a<i.d)&&(i={cx:h.x,cz:h.z,d:a})}return i}function V1(s,t,e,n,r){const i=lc(t,e,s);let o=0,l=1;i[1]>i[0]&&(o=1,l=0);for(let h=2;h<5;h++)i[h]>i[o]?(l=o,o=h):i[h]>i[l]&&(l=h);return i[l]/i[o]>.35&&mt(t,e,s+45)<i[l]/(i[o]+i[l])&&(o=l),n===r?o===Uu?bs:o===_r?De:o===Do?vn:o===Bl&&mt(t,e,s+41)>.78?Qs:Zn:n>=r-3?o===_r?De:Zn:o===Do||o===_r?De:vn}function ds(s,t,e,n){const r=_=>_*_*(3-2*_),i=Math.floor(s),o=Math.floor(t),l=Math.floor(e),h=(_,R,T)=>mt(_+T*911,R+T*577,n),a=r(s-i),c=r(t-o),u=r(e-l),f=(_,R,T)=>_+(R-_)*T,m=f(h(i,o,l),h(i+1,o,l),a),v=f(h(i,o+1,l),h(i+1,o+1,l),a),y=f(h(i,o,l+1),h(i+1,o,l+1),a),x=f(h(i,o+1,l+1),h(i+1,o+1,l+1),a);return f(f(m,v,c),f(y,x,c),u)}const cc=s=>Math.min(s-4,30),Dh=new Map,vr=s=>{let t=Dh.get(s);return t||(t=new Nu(s),Dh.set(s,t)),t};function kh(s,t,e,n,r){if(e<3||t*t+n*n<240)return!1;const i=r??Math.round(re(s,t,n));let o=cc(i);for(const a of vr(s).oases)Math.abs(t-a.x)<=a.r+1&&Math.abs(n-a.z)<=a.r+1&&(o=Math.min(o,Math.round(re(s,a.x,a.z))-5));if(e>o)return!1;const l=ds(t/9,e/5.5,n/9,s+301),h=ds(t/23,e/15,n/23,s+307);return l*.55+h*.45>.575+Math.max(0,o-e-4)*.005}const Ii=(s,t,e)=>s+","+t+","+e;function W1(s,t,e){if(mt(s,t,e+121)>=.6)return null;const n=Math.round(re(e,s,t)),r=n-4,i=n-16;if(i<4)return null;const o=2+(mt(s,t,e+123)*3|0),l=[];for(let L=0;L<o;L++){const k=-1+(mt(s+L*3,t,e+125)*4|0),U=-1+(mt(s,t+L*3,e+127)*4|0);l.push({x:s+k*6,z:t+U*6,hx:1+(mt(s-L,t+L,e+129)*3|0),hz:1+(mt(s+L,t-L,e+131)*3|0)})}const h=new Set;let a=1/0,c=-1/0,u=1/0,f=-1/0,m=1/0,v=-1/0;const y=(L,k,U)=>{h.add(Ii(L,k,U)),L<a&&(a=L),L>c&&(c=L),U<u&&(u=U),U>f&&(f=U),k<m&&(m=k),k>v&&(v=k)},x=(L,k,U,H,$,V)=>{for(let J=Math.min(L,k);J<=Math.max(L,k);J++)for(let et=Math.min(U,H);et<=Math.max(U,H);et++)for(let gt=$;gt<=V;gt++)y(J,gt,et)};for(const L of l)x(L.x-L.hx,L.x+L.hx,L.z-L.hz,L.z+L.hz,i,r);for(let L=1;L<l.length;L++)x(l[L-1].x,l[L].x,l[L-1].z,l[L-1].z,i,r),x(l[L].x,l[L].x,l[L-1].z,l[L].z,i,r);const _=l[0],R=mt(s,t+1,e+133)>.5?1:-1,T=mt(s+1,t,e+135)>.5?1:-1,S=_.x+R*(_.hx+1),b=_.z+T*(_.hz+1);x(S,S+1,b,b+1,i,r-3);const A=[[9,-6],[9,7],[-11,-5]][mt(s,t,e+137)*3|0],p={x:s+A[0],z:t+A[1]},d=Math.round(re(e,p.x,p.z)),g=d,M=Math.min(r-8,d-3);if(g-M<4)return null;const C=[[0,0],[1,0],[1,1],[0,1]];for(let L=0;L<=g-M;L++){const k=C[L&3],U=g-L;y(p.x+k[0],U,p.z+k[1]),y(p.x+k[0],U+1,p.z+k[1])}return x(p.x,_.x,p.z,p.z,M,M+1),x(_.x,_.x,p.z,_.z,M,M+1),{x0:a,x1:c,z0:u,z1:f,y0:m,y1:v,air:h,sh:{...p,y0:g}}}function q1(s,t,e){const n=W1(t.x,t.z,e);if(n){for(let r=n.x0;r<=n.x1;r++)for(let i=n.z0;i<=n.z1;i++)for(let o=n.y0;o<=n.y1;o++)n.air.has(Ii(r,o,i))&&s(r,o,i,Mt);for(let r=n.x0-1;r<=n.x1+1;r++)for(let i=n.z0-1;i<=n.z1+1;i++)for(let o=n.y0-1;o<=n.y1+1;o++){if(n.air.has(Ii(r,o,i)))continue;(n.air.has(Ii(r+1,o,i))||n.air.has(Ii(r-1,o,i))||n.air.has(Ii(r,o+1,i))||n.air.has(Ii(r,o-1,i))||n.air.has(Ii(r,o,i+1))||n.air.has(Ii(r,o,i-1)))&&s(r,o,i,mt(r*3+i*7,o*5+i,e+139)<.16?nr:fi)}}}function X1(s){const n=(a,c)=>a===4||a===-6?Math.abs(c)<=4:c===5||c===-5?a>=-5&&a<=3:a>=-5&&a<=3&&c>=-4&&c<=4,r=(a,c,u)=>(a===4||a===-6)&&Math.abs(u)>=3&&(c===30||c===34),i=(a,c)=>Math.abs(c)===5&&(a===3||a===-5),o=(a,c,u)=>Math.abs(c)===5&&a>=-3&&a<=2&&u>=31&&u<=33;for(let a=-6;a<=4;a++)for(let c=-5;c<=5;c++)for(let u=30;u<=34;u++){if(!n(a,c)||r(a,u,c))continue;const f=a>=2&&Math.abs(c)>2,m=a>=-5&&a<=3&&c>=-4&&c<=4&&u>=31&&u<=33&&!f;s(a,u,c,m?Mt:i(a,c)||o(a,c,u)?yi:u===30?Je:Ne)}for(let a=-3;a<=1;a++)for(let c=-2;c<=2;c++)s(a,35,c,Mi);for(let a=-2;a<=0;a++)for(let c=-1;c<=1;c++)s(a,36,c,Mi);for(let a=-2;a<=1;a++)for(const c of[6,7,8,9,-6,-7,-8,-9])s(a,32,c,Je);for(const a of[-3,2])for(const c of[6,7,8,-6,-7,-8])s(a,32,c,Je);for(const a of[-1,0])s(a,31,10,Je),s(a,31,-10,Je);for(const a of[-1,0])s(a,31,11,Je),s(a,31,-11,Je);for(const a of[-1,0])s(a,32,11,Ki),s(a,32,-11,Ki);const l=(a,c,u)=>{s(a,c,u,on),s(a,c+1,u,nn)},h=(a,c,u)=>{s(a,c,u,en),s(a,c+1,u,He)};for(let a=-4;a<=4;a++)for(let c=31;c<=33;c++)s(1,c,a,Ne),s(-2,c,a,Ne);for(let a=-5;a<=-3;a++)for(const c of[-2,2])for(let u=31;u<=33;u++)s(a,u,c,Ne);h(1,31,0),h(-2,31,0),h(-2,31,3),h(-2,31,-3),l(-6,31,0);for(let a=-2;a<=2;a++)for(let c=32;c<=33;c++)s(4,c,a,Ss);s(-4,30,4,Ve),s(-4,29,4,Ve),s(-3,30,4,Ve),s(-4,31,-4,Fi),s(-4,31,-1,Tn),s(0,31,-3,Ze),s(0,31,-2,mn),s(-1,31,1,ki);for(const[a,c]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])s(a,34,c,In);for(const[a,c]of[[0,3],[0,4],[-1,4],[2,2]])s(a,31,c,Je)}function $1(s,t,e){const n=new $o(H1+77),r=Math.round(re(e,t.x,t.z));for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++){if(Math.abs(i)!==2&&Math.abs(o)!==2)continue;const l=Math.abs(i)===2&&Math.abs(o)===2;for(let h=r+1;h<=r+3;h++)s(t.x+i,h,t.z+o,l?yi:Ne)}for(let i=r+1;i<=r+2;i++)s(t.x,i,t.z-2,Mt);for(let i=0;i<40;i++){const o=t.x+n.int(-5,5),l=t.z+n.int(-5,5),h=Math.round(re(e,o,l)),a=n.next();s(o,h+n.int(0,1),l,a<.45?Ne:a<.55?yi:Je)}s(t.x,Math.round(re(e,t.x,t.z))+1,t.z,Yi)}function Fu(s,t,e,n){const r=5+Math.floor(n()*3),i=[],o=(u,f,m,v,y)=>i.push({x:u,y:f,z:m,b:v,stage:y});o(s,t,e,kn,1),o(s,t+1,e,kn,1);for(let u=2;u<r;u++)o(s,t+u,e,kn,2);const l=[[1,0],[-1,0],[0,1],[0,-1]],h=2+(n()<.5?1:0);for(let u=0;u<h;u++){const f=l[Math.floor(n()*4)];o(s+f[0],t+r-2+u%2,e+f[1],kn,2)}const a=new Set(i.map(u=>u.x+","+u.y+","+u.z)),c=t+r-1;for(let u=-1;u<=2;u++){const f=u===-1||u===2?1.7:2.4;for(let m=-3;m<=3;m++)for(let v=-3;v<=3;v++){const y=m*m+v*v+u*u*2.2;if(y>f*f||y>(f-.9)*(f-.9)&&n()<.3||m===0&&v===0)continue;const x=s+m,_=c+u,R=e+v;a.has(x+","+_+","+R)||o(x,_,R,bi,3)}}return i}function Ou(s,t,e,n,r,i){const o=new $o(mt(t,n,r+i)*4294967296>>>0||1);for(const l of Fu(t,e+1,n,()=>o.next()))s(l.x,l.y,l.z,l.b)}function Y1(s,t,e){const n=Math.round(re(e,t.x,t.z));for(let o=-t.r-1;o<=t.r+1;o++)for(let l=-t.r-1;l<=t.r+1;l++){const h=t.x+o,a=t.z+l,c=Math.sqrt(o*o+l*l),u=Math.round(re(e,h,a));if(c<=t.r){const f=Math.max(1,Math.round(2.7-1.7*(c/t.r)));for(let m=u;m>n-f;m--)s(h,m,a,Mt);s(h,n-f,a,Zn);for(let m=n-f+1;m<=n;m++)s(h,m,a,Ve);for(let m=n+1;m<=n+12;m++)s(h,m,a,Mt)}else if(c<=t.r+1)for(let f=u;f<n+1;f++)s(h,f,a,Zn)}const r=3+(mt(t.x,t.z,e+73)<.5?1:0);for(let o=-t.r-r;o<=t.r+r;o++)for(let l=-t.r-r;l<=t.r+r;l++){const h=Math.sqrt(o*o+l*l);if(h<=t.r||h>t.r+r)continue;const a=t.x+o,c=t.z+l,u=Math.max(Math.round(re(e,a,c)),n);for(let f=u-2;f<=u;f++)s(a,f,c,f===u?ai:Jn)}const i=4+Math.floor(mt(t.x,t.z,e+75)*4);for(let o=0;o<i;o++){const l=o*(Math.PI*2/i)+mt(t.x+o,t.z-o,e+77)*1.1,h=t.r+1.5+mt(t.x-o,t.z+o,e+79)*(r+2),a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h),u=Math.max(Math.round(re(e,a,c)),n);Ou((f,m,v,y)=>{m>n&&Math.hypot(f-t.x,v-t.z)<=t.r||s(f,m,v,y)},a,u,c,e,81)}for(let o=0;o<5;o++){if(mt(t.x,t.z,e+61+o)<.35)continue;const l=o*1.27+mt(t.z,t.x,e+67+o)*.8,h=t.r+.5,a=t.x+Math.round(Math.cos(l)*h),c=t.z+Math.round(Math.sin(l)*h);Math.hypot(a-t.x,c-t.z)<t.r+1||s(a,Math.max(Math.round(re(e,a,c)),n)+1,c,Pn)}}function K1(s,t,e){for(const[a,c]of[[-4,-3],[3,2],[-3,5]]){const u=Math.round(re(e,t.x+a,t.z+c));for(let f=0;f<5;f++)for(let m=0;m<5;m++)for(let v=u-1;v<=u+3;v++){const y=v===u-1,x=(f===0||f===4||m===0||m===4)&&v>=u&&v<=u+2,_=v===u+3,R=f===0&&(m===2||m===3)&&v>=u&&v<=u+2;if(!(y||x||_)||R){s(t.x+a+f,v,t.z+c+m,Mt);continue}s(t.x+a+f,v,t.z+c+m,fi)}s(t.x+a+1,u,t.z+c+1,Le),s(t.x+a+2,u,t.z+c+1,rn),s(t.x+a+3,u,t.z+c+1,_n)}const n=t.x+3+Math.round((mt(t.x,t.z,e+83)-.5)*8),r=t.z-3+Math.round((mt(t.z,t.x,e+85)-.5)*8),i=2.5+mt(t.x,t.z,e+87)*2,o=(a,c)=>[[-4,-3],[3,2],[-3,5]].some(([u,f])=>a>=u-1+t.x&&a<=u+5+t.x&&c>=f-1+t.z&&c<=f+5+t.z);for(let a=-5;a<=5;a++)for(let c=-5;c<=5;c++){if(Math.sqrt(a*a+c*c)>i)continue;const u=n+a,f=r+c;if(o(u,f))continue;const m=Math.round(re(e,u,f));for(let v=m-2;v<=m;v++)s(u,v,f,v===m?ai:Jn)}const l=3+Math.floor(mt(t.x,t.z,e+89)*4);for(let a=0;a<l;a++){const c=a*(Math.PI*2/l)+mt(t.x+a,t.z-a,e+91)*1.3,u=1+mt(t.x-a,t.z+a,e+93)*i,f=n+Math.round(Math.cos(c)*u),m=r+Math.round(Math.sin(c)*u);o(f,m)||Ou(s,f,Math.round(re(e,f,m)),m,e,95)}const h=Math.round(re(e,t.x,t.z+11));for(let a=0;a<5;a++)for(let c=0;c<3;c++)s(t.x-8+a,h,t.z+10+c,Ln);s(t.x-7,h+1,t.z+11,dn),s(t.x-5,h+1,t.z+10,dn),s(t.x-4,h+1,t.z+12,Pn)}function j1(s,t,e){return Math.abs(t)<=1&&Math.abs(e)<=1?!1:mt(t,e,s+311)<.55}function Z1(s,t,e){const n=(mt(t,e,s+313)-.5)*60,r=(mt(t,e,s+315)-.5)*60;return{x:Math.round(t*An+n),z:Math.round(e*An+r)}}const J1=[[1,0],[-1,0],[0,1],[0,-1]];function Q1(s,t,e){if(t.x*t.x+t.z*t.z<1600)return;const[n,r]=J1[mt(t.x,t.z,e+317)*4|0],[i,o]=[-r,n],l=Math.round(re(e,t.x,t.z));let h=-1;for(let b=1;b<=3;b++)if(Math.round(re(e,t.x+n*b,t.z+r*b))<=l-2){h=b;break}if(h<0)return;const a=t.x+n*(h-1),c=t.z+r*(h-1),u=Math.round(re(e,t.x+n*h,t.z+r*h)),f=Math.round(re(e,a,c)),m=Math.max(Math.min(u+1,f),8);if(f<m+2)return;const v=12+(mt(t.x,t.z,e+319)*5|0),y=a+n*v,x=c+r*v,_=cc(Math.round(re(e,y,x)))-1;if(_<6||_>m-4)return;for(let b=2;b<v;b++){const I=a+n*b,A=c+r*b,p=m-Math.round(b*(m-_)/v);if(Math.round(re(e,I,A))<p+2||Math.round(re(e,I+i,A+o))<p+2)return}const R=new Set,T=(b,I,A)=>{I<6||(R.add(b+","+I+","+A),s(b,I,A,Mt))};for(let b=0;b<=v;b++){const I=a+n*b,A=c+r*b,p=b===v?_:m-Math.round(b*(m-_)/v);for(const d of[0,1])T(I+i*d,p,A+o*d),T(I+i*d,p+1,A+o*d),b<=1&&T(I+i*d,p+2,A+o*d)}for(let b=y-2;b<=y+2;b++)for(let I=x-2;I<=x+2;I++){for(let A=_;A<=_+2;A++)T(b,A,I);s(b,_-1,I,De),s(b,_+3,I,De)}for(const b of R){const I=b.split(","),A=+I[0],p=+I[1],d=+I[2];for(const[g,M,C]of[[A+1,p,d],[A-1,p,d],[A,p+1,d],[A,p-1,d],[A,p,d+1],[A,p,d-1]])M<5||R.has(g+","+M+","+C)||M<=Math.round(re(e,g,C))&&s(g,M,C,De)}for(const[b,I]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){if(b===n&&I===r)continue;const A=a+b,p=c+I;s(A,Math.round(re(e,A,p)),p,De)}for(const b of[0,1])s(a+i*b,m-1,c+o*b,De);s(a+n,m+3,c+r,De);const S=2+(mt(t.x+7,t.z-3,e+321)*3|0);for(let b=0;b<S;b++){const I=1+(mt(t.x+b,t.z,e+323)*3|0),A=(mt(t.x-b,t.z,e+325)*3|0)-1,p=t.x+n*(h+I)+i*A,d=t.z+r*(h+I)+o*A;s(p,Math.round(re(e,p,d))+1,d,mt(p,d,e+327)>.5?Qs:De)}}function Bu(s,t,e){if(Math.abs(t)<=1&&Math.abs(e)<=1||mt(t,e,s+401)>=.8)return!1;const n=hc(s,t,e),r=vr(s);for(const i of r.oases)if(Math.hypot(i.x-n.x,i.z-n.z)<i.r+20)return!1;return!(Math.hypot(r.secondShip.x-n.x,r.secondShip.z-n.z)<40||r.townNear(n.x,n.z,25)!==null)}function hc(s,t,e){const n=(mt(t,e,s+403)-.5)*60,r=(mt(t,e,s+405)-.5)*60;return{x:Math.round(t*Te+n),z:Math.round(e*Te+r)}}function t_(s,t,e){return mt(t,e,s+407)*3|0}function e_(s){return{x:s.x+1.5,z:s.z-1.5}}function n_(s,t,e){const n=Math.round(re(e,t.x,t.z));s(t.x+2,n+1,t.z+1,fi);for(const[i,o]of[[3,1],[2,2],[3,2]])for(let l=n+1;l<=n+2;l++)s(t.x+i,l,t.z+o,kn);s(t.x+3,n+3,t.z+1,Je),s(t.x+2,n+3,t.z+2,Je),s(t.x+3,n+3,t.z+2,Je),s(t.x+2,n+3,t.z+1,In),s(t.x-2,n+1,t.type===1?t.z+3:t.z,sn);const r=(i,o,l,h)=>{const a=i-(l>>1),c=i+(l>>1),u=o-(h>>1),f=o+(h>>1);for(let m=a;m<=c;m++)for(let v=u;v<=f;v++)for(let y=n;y<=n+4;y++){const x=m===a||m===c||v===u||v===f,_=y===n||y===n+4||x&&y<=n+3;s(m,y,v,_?fi:Mt)}s(c,n+1,o,on),s(c,n+2,o,nn),s(c,n+1,o+1,Mt),s(c,n+2,o+1,Mt),s(a+1,n+1,o+1,Le),s(c-2,n+1,o-1,rn),s(c-2,n+1,o,_n),s(c-1,n+3,u+1,In)};if(t.type===0){for(let l=-2;l<=2;l++)for(let h=-2;h<=2;h++){if(l*l+h*h>4.5||l===2&&h===0)continue;const a=t.x-4+l,c=t.z+h,u=mt(a*3+1,c*5-2,e+411)>.62?fi:vn;for(let f=n;f<=n+9;f++)s(a,f,c,u)}for(let l=2;l<=3;l++)s(t.x-4-l,n+7,t.z,kn);s(t.x-7,n+7,t.z,Je);for(let l=1;l<=3;l++)s(t.x-7,n+7+l,t.z,si),s(t.x-7,n+7-l,t.z,si),s(t.x-7,n+7,t.z+l,si),s(t.x-7,n+7,t.z-l,si);const i=t.x-7,o=t.z+2;for(let l=i-1;l<=i+1;l++)for(let h=o-1;h<=o+1;h++)for(let a=n;a<=n+3;a++){const c=l===i+1&&h===o&&(a===n+1||a===n+2);!(a===n||a===n+3||(Math.abs(l-i)===1||Math.abs(h-o)===1)&&a<=n+2)||c?s(l,a,h,Mt):s(l,a,h,fi)}s(i,n+1,o,Le)}else if(t.type===1)r(t.x-4,t.z,5,5);else{r(t.x-5,t.z-3,7,5);for(let o=t.x+4;o<=t.x+9;o++)for(let l=t.z-4;l<=t.z-1;l++)s(o,n,l,Ln),o===t.x+4&&l===t.z-4||o===t.x+9&&l===t.z-1?s(o,n+1,l,Pn):s(o,n+1,l,(o+l)%2?Hn:dn);const i=(o,l)=>{s(o,n+1,l,si),s(o,n+2,l,si)};for(let o=t.x+3;o<=t.x+10;o+=2)i(o,t.z-5),i(o,t.z);for(let o=t.z-3;o<=t.z-1;o+=2)i(t.x+3,o),i(t.x+10,o);for(let o=t.x;o<=t.x+3;o++)for(let l=t.z+3;l<=t.z+5;l++){const h=o>=t.x+1&&o<=t.x+2&&l===t.z+4;s(o,n+1,l,h?Ve:De)}}}function i_(s,t,e,n){const r=new Uint8Array(X*X*ee),i=(A,p,d,g)=>{const M=A-e*X,C=d-n*X;M>=0&&M<X&&C>=0&&C<X&&p>=0&&p<ee&&(r[(M*X+C)*ee+p]=g)},o=X+2,l=new Uint8Array(o*o*ee),h=new Int16Array(o*o).fill(-1),a=(A,p)=>{const d=(A-e*X+1)*o+(p-n*X+1);return h[d]<0&&(h[d]=Math.round(re(s,A,p))),h[d]},c=(A,p,d)=>{const g=A-e*X+1,M=d-n*X+1;if(g<0||g>=o||M<0||M>=o)return kh(s,A,p,d);const C=(g*o+M)*ee+p;return l[C]||(l[C]=kh(s,A,p,d,a(A,d))?2:1),l[C]===2};for(let A=0;A<X;A++)for(let p=0;p<X;p++){const d=e*X+A,g=n*X+p,M=Math.round(re(s,d,g));for(let k=0;k<=M;k++)r[(A*X+p)*ee+k]=V1(s,d,g,k,M);const C=d*d+g*g<240,L=cc(M);if(!C)for(let k=3;k<=L;k++){const U=(A*X+p)*ee+k;if(c(d,k,g)){r[U]=k>=8&&k<=18&&ds(d/26,k/19,g/26,s+401)>.785?Ve:Mt;continue}const H=r[U];H!==De&&H!==vn||(c(d+1,k,g)||c(d-1,k,g)||c(d,k+1,g)||c(d,k-1,g)||c(d,k,g+1)||c(d,k,g-1))&&(k<=15&&mt(d*5+k,g*7-k,s+333)<.4&&ds(d/5+40,k/5,g/5,s+331)>.72?r[U]=Nr:k>=12&&ds(d/5,k/5,g/5,s+313)>.665?r[U]=kr:k>=12&&ds(d/5,k/5+60,g/5,s+317)>.7?r[U]=Ur:k>=8&&k<=24&&ds(d/5,k/5,g/5+70,s+321)>.715&&(r[U]=nr))}if(!C&&M>=12&&mt(d,g,s+201)>.984&&t.townNear(d,g,14)===null&&t.nearOasis(d,g)===null){const k=L-4;if(k>=7){for(let U=M-1;U>=k;U--)r[(A*X+p)*ee+U]=Mt;r[(A*X+p)*ee+(k-1)]=De}}if(!C&&mt(d,g,s+21)>.988){const k=wo(d,g,s),U=(H,$)=>H>=0&&H<X&&$>=0&&$<X;if(k===Do||k===_r){const H=3+(mt(d,g,s+22)*3|0);for(let $=1;$<=H;$++)i(d,M+$,g,De);A>0&&mt(d,g,s+27)>.5&&i(d-1,M+1,g,De)}else if(k===Bl){const H=2+(mt(d,g,s+24)*2|0),$=[[1,0],[-1,0],[0,1],[0,-1]][mt(d,g,s+25)*4|0];for(let V=0;V<H;V++)i(d,M+1+V,g,De);U(A+$[0],p+$[1])&&i(d+$[0],M+H,g+$[1],De)}else if(k===Uu)for(const[H,$]of[[0,0],[1,0],[0,1],[1,1]])U(A+H,p+$)&&i(d+H,M+1,g+$,bs);else{const H=2+(mt(d,g,s+26)*3|0);for(let $=0;$<H;$++){const V=(mt(d+$,g,s+33)*3|0)-1,J=(mt(d,g+$,s+35)*3|0)-1;U(A+V,p+J)&&i(d+V,M+1,g+J,mt(d+$,g-$,s+43)>.5?De:vn)}}}if(!C&&mt(d,g,s+23)>.9935){const k=wo(d,g,s);if(k!==Do&&k!==_r){const U=3+(mt(d,g,s+29)*3|0);for(let H=M+1;H<=M+U;H++)i(d,H,g,si)}}if(!C&&r[(A*X+p)*ee+M+1]===0&&mt(d,g,s+31)>.9915){const k=wo(d,g,s);if(k===z1||k===Bl){const U=2+(mt(d,g,s+37)*3|0);for(let H=M+1;H<=M+U;H++)i(d,H,g,gn);U>=3&&mt(d,g,s+41)>.55&&i(d+(mt(d,g,s+43)>.5?1:-1),M+2,g,gn),U>=3&&mt(d,g,s+47)>.7&&i(d,M+U,g,mi)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&X1(i);for(const A of t.oases)Math.abs(e*X+8-A.x)<A.r+24&&Math.abs(n*X+8-A.z)<A.r+24&&Y1(i,A,s);const u=Math.floor((e*X-14-ze)/ze),f=Math.floor((e*X+X+14+ze)/ze),m=Math.floor((n*X-14-ze)/ze),v=Math.floor((n*X+X+14+ze)/ze);for(let A=u;A<=f;A++)for(let p=m;p<=v;p++){if(!t.townAt(A,p))continue;const d=t.townCenter(A,p);e*X<=d.x+16&&e*X+X-1>=d.x-12&&n*X<=d.z+12&&n*X+X-1>=d.z-16&&K1(i,d,s),e*X<=d.x+30&&e*X+X-1>=d.x-30&&n*X<=d.z+30&&n*X+X-1>=d.z-30&&q1(i,d,s)}const y=Math.floor((e*X-48-Te)/Te),x=Math.floor((e*X+X-1+48+Te)/Te),_=Math.floor((n*X-48-Te)/Te),R=Math.floor((n*X+X-1+48+Te)/Te);for(let A=y;A<=x;A++)for(let p=_;p<=R;p++){if(!t.campAt(A,p))continue;const d=t.campCenter(A,p);e*X<=d.x+12&&e*X+X-1>=d.x-12&&n*X<=d.z+6&&n*X+X-1>=d.z-10&&n_(i,{x:d.x,z:d.z,type:t.campType(A,p)},s)}const T=Math.floor((e*X-54-An)/An),S=Math.floor((e*X+X-1+54+An)/An),b=Math.floor((n*X-54-An)/An),I=Math.floor((n*X+X-1+54+An)/An);for(let A=T;A<=S;A++)for(let p=b;p<=I;p++){if(!t.mouthAt(A,p))continue;const d=t.mouthCenter(A,p);e*X<=d.x+24&&e*X+X-1>=d.x-24&&n*X<=d.z+24&&n*X+X-1>=d.z-24&&Q1(i,d,s)}return Math.abs(e*X+8-t.secondShip.x)<12&&Math.abs(n*X+8-t.secondShip.z)<12&&$1(i,t.secondShip,s),r}const ri=(s,t)=>s+","+t,Uh=(s,t,e)=>(s*X+t)*ee+e,ka=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Nh=new Set([Mt,je,en,He,Qe,bi]);class s_{constructor(t){this.seed=t,this.gen=new Nu(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;waterQ=new Set;gen;chunk(t,e){const n=ri(t,e);let r=this.chunks.get(n);if(!r){r=i_(this.seed,this.gen,t,e);const i=this.deltas.get(n);if(i)for(const[o,l]of i)r[o]=l;this.chunks.set(n,r)}return r}get(t,e,n){if(e<0||e>=ee)return Mt;const r=Math.floor(t/X),i=Math.floor(n/X);return this.chunk(r,i)[Uh(t-r*X,n-i*X,e)]}skyResistance(t,e,n,r=40){let i=0,o=0;for(let l=1;l<=r;l++){const h=this.get(t,e+l,n);if(h===Mt)continue;const a=r_[h];if(a&&(i+=a,h!==bi&&(o+=a,o>=6)))return{R:i,openSky:!1}}return{R:i,openSky:o===0}}sunVisible(t,e,n,r,i,o,l=64){if(i<=0)return!1;let h=t,a=e,c=n;const u=Math.sign(r),f=1,m=Math.sign(o),v=u?Math.abs(1/r):1/0,y=1/i,x=m?Math.abs(1/o):1/0;let _=u?(u>0?h+1-(t+.5):t+.5-h)*v:1/0,R=(e+1-(e+.5))*y,T=m?(m>0?c+1-(n+.5):n+.5-c)*x:1/0;for(let S=0;S<192;S++){let b;if(_<=R&&_<=T?(h+=u,b=_,_+=v):R<=T?(a+=f,b=R,R+=y):(c+=m,b=T,T+=x),b>l)return!0;const I=this.get(h,a,c);if(I===Ss||Xo(I))return!1}return!0}roomInfo(t,e,n,r=400){if(!Nh.has(this.get(t,e,n)))return{size:0,sealed:!1,regulators:0,regCells:[]};const i=new Set([`${t},${e},${n}`]),o=[[t,e,n]],l=new Set;let h=0,a=!0;for(;o.length;){const[c,u,f]=o.pop();if(++h>r){a=!1;break}for(const[m,v,y]of ka){const x=c+m,_=u+v,R=f+y;if(_>=ee){a=!1;continue}const T=this.get(x,_,R);if(Nh.has(T)){const S=x+","+_+","+R;i.has(S)||(i.add(S),o.push([x,_,R]))}else T===Fi&&l.add(x+","+_+","+R)}}return{size:h,sealed:a,regulators:l.size,regCells:[...l]}}set(t,e,n,r){if(e<0||e>=ee)return;const i=Math.floor(t/X),o=Math.floor(n/X),l=this.chunk(i,o),h=Uh(t-i*X,n-o*X,e);if(l[h]===r)return;const a=l[h];if(l[h]=r,Dn(r)||Dn(a)||r===Mt){this.queueWater(t,e,n);for(const[m,v,y]of ka)this.queueWater(t+m,e+v,n+y)}let c=this.deltas.get(ri(i,o));c||this.deltas.set(ri(i,o),c=new Map),c.set(h,r),this.markDirty(i,o);const u=t-i*X,f=n-o*X;u===0&&this.markDirty(i-1,o),f===0&&this.markDirty(i,o-1),u===X-1&&this.markDirty(i+1,o),f===X-1&&this.markDirty(i,o+1)}markDirty(t,e){this.dirty.add(ri(t,e))}queueWater(t,e,n){e>=0&&e<ee&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;const n=[...this.waterQ];this.waterQ.clear();for(const r of n){if(e>=t)break;const[i,o,l]=r.split(",").map(Number);e+=this.drainFlow(i,o,l,t-e),e+=this.floodFrom(i,o,l,t-e)}return e}drainFlow(t,e,n,r){let i=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],l=new Set;for(;o.length&&i++<r;){const[h,a,c]=o.pop(),u=Pi(this.get(h,a,c));if(!u||u===8)continue;const f=h+","+a+","+c;if(!l.has(f)&&(l.add(f),!this.waterSupported(h,a,c,u))){this.set(h,a,c,Mt);for(const[m,v,y]of ka)o.push([h+m,a+v,c+y])}}return i}waterSupported(t,e,n,r){for(const[i,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(Pi(this.get(t+i,e,n+o))>r)return!0;return Pi(this.get(t,e+1,n))>0}floodFrom(t,e,n,r){let i=0;const o=[[t,e,n]];for(;o.length&&i++<r;){const[l,h,a]=o.shift(),c=this.get(l,h-1,a);let u=Pi(this.get(l,h,a));if(u&&u!==8&&u<7&&Pi(this.get(l,h+1,a))>0&&(this.set(l,h,a,Da(7)),u=7),!u||(h>0&&(c===Mt||Dn(c))&&Pi(c)<u&&this.set(l,h-1,a,Da(u===8?7:u)),c===Mt||Dn(c)))continue;const f=u===8?7:u-1;if(!(f<1))for(const[m,v]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=this.get(l+m,h,a+v);(y===Mt||Dn(y))&&Pi(y)<f&&this.set(l+m,h,a+v,Da(f))}}return i}surface(t,e){for(let n=ee-1;n>=0;n--)if(this.get(t,n,e)!==Mt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const r=[];for(const[i,o]of n)r.push(i,o);t[e]=r}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const r=new Map;for(let i=0;i<n.length;i+=2)r.set(n[i],n[i+1]);this.deltas.set(e,r)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}}const r_=jn.map(s=>s.R);function Ua(s,t,e,n,r){const i=s.get(t,e,n);return i===on||i===nn||i===en||i===He?!0:!(Xo(i)||i===r)}const po=.6,o_=1.8,Fh=1.62;class a_{constructor(t){this.world=t}pos=new F(.5,31.01,2.5);vel=new F;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;fallPeakY=this.pos.y;lastFallDist=0;waterAt(t){const e=this.pos.y+t,n=Math.floor(e),r=this.world.get(Math.floor(this.pos.x),n,Math.floor(this.pos.z));return Dn(r)?e-n<Pi(r)/8:!1}collides(t,e,n){const r=Math.floor(t-po/2),i=Math.floor(t+po/2),o=Math.floor(n-po/2),l=Math.floor(n+po/2),h=Math.floor(e),a=Math.floor(e+o_-.001);for(let c=r;c<=i;c++)for(let u=o;u<=l;u++)for(let f=h;f<=a;f++)if(fn(this.world.get(c,f,u)))return!0;return!1}update(t,e,n,r,i,o){this.onGround?this.fallPeakY=this.pos.y:this.pos.y>this.fallPeakY&&(this.fallPeakY=this.pos.y),this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Fh);const l=this.inWater,h=(this.sprinting?7.2:4.5)*i*(o?.25:1)*(l?.55:1),a=new F(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new F(-a.z,0,a.x),u=a.multiplyScalar(n).add(c.multiplyScalar(e));u.lengthSq()>1&&u.normalize();const f=this.onGround?40:l?12:8;this.vel.x+=(u.x*h-this.vel.x)*Math.min(1,f*t),this.vel.z+=(u.z*h-this.vel.z)*Math.min(1,f*t),l?(this.vel.y-=7*t,r&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=di.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,r&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0),this.fallPeakY=40,this.lastFallDist=0),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,r=Math.max(1,Math.ceil(Math.abs(t)/.3)),i=t/r;for(let o=0;o<r;o++){const l=n.x+(e===0?i:0),h=n.y+(e===1?i:0),a=n.z+(e===2?i:0);if(!this.collides(l,h,a)){n.set(l,h,a);continue}e===1?(i<0&&(this.lastFallDist=Math.max(0,this.fallPeakY-n.y),this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new F(this.pos.x,this.pos.y+Fh,this.pos.z)}}const fs=20,fr=45,uc=36,dc=37.5,zl=39.5,Hl=31.5,Gl=5,Oh=22,l_=27,c_=25,xr=150;class h_{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;storm=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};regulatedAir=!1;embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%Be/Be}ambient(t,e,n){const r=(e-.28+1)%1;let i=l_-c_*(r<=.3?Math.cos(r/.3*Math.PI):Math.cos((1+(r-.3)/.7)*Math.PI));t===2&&(i-=2),(t===3||t===4)&&(i+=3);const o=Ol(Math.floor(n/10)/60,this.weatherSeed)*2-1;return i+o*8}stormAt(t){const e=Ol(Math.floor(t/300)/15,this.weatherSeed+911);return e>.7?Math.min(1,(e-.7)/.15):0}update(t,e,n,r){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const i=this.worldTimeToDayFrac(r.tSec),o=this.ambient(r.biome,i,r.tSec),l=Math.floor(n.x),h=Math.floor(n.y),a=Math.floor(n.z),c=(S,b,I)=>{const A=b<=r.terrainH(S,I)-2,p=A?Oh:o,{R:d,openSky:g}=e.skyResistance(S,b,I);let M=1-Math.exp(-d),C=p;!A&&r.sunElev>0&&r.sunDir&&e.sunVisible(S,b,I,r.sunDir.x,r.sunDir.y,r.sunDir.z)&&(C+=8+10*r.sunElev);const L=e.roomInfo(S,b,I);return L.sealed&&(L.regulators*xr>=L.size?(C=36.6,M=1):(C=p,A||(M=0))),{R:d,openSky:g,shelter:M,ambEff:C,room:L,deep:A}};let u=c(l,h,a);if(u.room.size===0){const S=`${l},${h},${a}|${Math.floor(r.tSec*2)}`;if(this.embedKey!==S){let b=u;for(let I=-1;I<=1;I++)for(let A=-1;A<=1;A++)for(let p=-1;p<=1;p++){if(!I&&!A&&!p)continue;const d=c(l+I,h+A,a+p);d.room.size!==0&&Math.abs(d.ambEff-37)<Math.abs(b.ambEff-37)&&(b=d)}this.embedKey=S,this.embedAir=b}this.embedAir&&(u=this.embedAir)}this.lastOpenSky=u.openSky;let f=u.shelter,m=u.ambEff;const v=u.room,y=this.stormAt(r.tSec);this.storm+=(y-this.storm)*Math.min(1,t*.08);const x=r.stormShield?0:this.storm*r.stormMul;if(x>.02&&!u.deep&&u.shelter<.6&&(m=36.6+(m-36.6)*(1+.35*x)),this.lastRoom=v,this.regulatedAir=v.sealed&&v.regulators*xr>=v.size,r.inWater){const S=di.clamp(o,12,24)-3;m=(m+S)/2}r.warmth&&(m+=r.warmth);const _=r.regulator?36.6:36.6+(m-36.6)*(1-f);this.lastAmbient=u.deep?Oh:o,this.lastAmbientEff=m,this.lastShelterR=u.R,this.lastTarget=_;const R=v.sealed?.022:.0075;this.body+=(_-this.body)*R*t,this.body=di.clamp(this.body,12,44.5);let T=100/(Be*1.5);this.body>37&&(T+=(this.body-37)*.02),r.sprinting&&(T*=1.7),r.overencumbered&&(T+=.05),x>.05&&u.shelter<.8&&(T*=1+.7*x),this.water=Math.max(0,this.water-T*t),this.regulatedAir||(this.body>zl&&this.hurt((this.body-zl)*.15,"heat stroke"),this.body<Hl&&this.hurt((Hl-this.body)*.175,"hypothermia")),this.water<=0?this.hurt(.3,"dehydration"):this.water<Gl&&this.hurt((Gl-this.water)*.0375,"dehydration"),x>.35&&u.openSky&&this.hurt((x-.35)*.55*t,"sand blast"),this.water>25&&this.body>=uc&&this.body<=dc&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=di.clamp((28-this.water)/28,0,1)}airTempAt(t,e,n,r,i){const o=this.worldTimeToDayFrac(i),l=this.ambient(0,o,i);let h=l;const a=(o-.25)*Math.PI*2,c=Math.sin(a);if(c>0){const f=1/Math.hypot(Math.cos(a),c,.4);t.sunVisible(e,n,r,Math.cos(a)*f,c*f,.4*f)&&(h+=8+10*c)}const u=t.roomInfo(e,n,r);return u.sealed&&(h=u.regulators*xr>=u.size?36.6:l),h}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=5,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(.7,this.body-33.7)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const Eo=15,pr=X+2,gs=(s,t,e)=>((s+1)*pr+(t+1))*ee+e,u_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Bh(s){return s===bi?2:s===Mt?1:Xo(s)?-1:1}function d_(s){return s===bi?2:Dn(s)?1:s===Mt?0:Xo(s)?-1:0}class f_{maps=new Map;invalidate(t,e){this.maps.delete(ri(t,e))}lightAt(t,e,n){if(e<0||e>=ee)return 0;const r=Math.floor(t/X),i=Math.floor(n/X),o=this.maps.get(ri(r,i));return o?o[gs(t-r*X,n-i*X,e)]:0}bake(t,e,n,r){const i=t.chunk(e,n),o=new Uint8Array(pr*pr*ee),l=[],h=(c,u,f,m)=>{if(m<=0)return;const v=gs(c,u,f);m>o[v]&&(o[v]=m,l.push(v))},a=(c,u,f)=>c>=0&&c<X&&u>=0&&u<X?i[(c*X+u)*ee+f]:t.get(e*X+c,f,n*X+u);for(let c=-1;c<=X;c++)for(let u=-1;u<=X;u++){let f=Eo;for(let m=ee-1;m>=0;m--){const v=d_(a(c,u,m));if(v<0||(h(c,u,m,f),v>0&&(f-=v,f<=0)))break}}for(const[c,u]of[[-1,0],[1,0],[0,-1],[0,1]]){const f=this.maps.get(ri(e+c,n+u));if(f)for(let m=0;m<X;m++)for(let v=0;v<ee;v++){const y=c<0?-1:c>0?X:m,x=u<0?-1:u>0?X:m,_=c<0?X-1:c>0?0:m,R=u<0?X-1:u>0?0:m,T=f[gs(_,R,v)];T>0&&h(y,x,v,T)}}for(let c=0;c<l.length;c++){const u=l[c],f=o[u];if(f<=1)continue;const m=(u/(pr*ee)|0)-1,v=u%(pr*ee),y=(v/ee|0)-1,x=v%ee;for(const[_,R,T]of u_){const S=m+_,b=y+T,I=x+R;if(!(I<0||I>=ee))if(S>=-1&&S<=X&&b>=-1&&b<=X){const A=Bh(a(S,b,I));A>=0&&h(S,b,I,f-A)}else{const A=e*X+S,p=n*X+b,d=Bh(t.get(A,I,p));if(d<0)continue;const g=Math.floor(A/X),M=Math.floor(p/X),C=this.maps.get(ri(g,M));C&&C[gs(A-g*X,p-M*X,I)]+1<f-d&&r(g,M)}}}return this.maps.set(ri(e,n),o),o}}const p_=new Set([on,nn,je,en,He,Qe]),m_=new Set([Hn,dn,Yn]),mo=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],g_=.28;function Oe(s,t,e,n,r){const i=n[1].map((c,u)=>c-n[0][u]),o=n[2].map((c,u)=>c-n[0][u]),l=i[1]*o[2]-i[2]*o[1],h=i[2]*o[0]-i[0]*o[2],a=i[0]*o[1]-i[1]*o[0];return l*s[0]+h*s[1]+a*s[2]<0&&n.reverse(),{dir:s,kind:t,pts:n,sh:e,uv:r}}const __=(()=>{const s=g_,t=1-s,e=c=>[c[0],c[2]],n=c=>[c[0],c[1]],r=c=>[c[2],c[1]],i=c=>[(c[2]-c[0])/2+.5,c[1]],o=c=>[(c[0]+c[2])/2,c[1]],l=[[s,0],[t,0],[1,s],[1,t],[t,1],[s,1],[0,t],[0,s]],h=[Oe([0,1,0],0,1,l.map(([c,u])=>[c,1,u]),e),Oe([0,-1,0],1,.45,l.map(([c,u])=>[c,0,u]),e),Oe([1,0,0],2,.8,[[1,0,s],[1,0,t],[1,1,t],[1,1,s]],r),Oe([-1,0,0],2,.7,[[0,0,t],[0,1,t],[0,1,s],[0,0,s]],r),Oe([0,0,1],2,.85,[[s,0,1],[t,0,1],[t,1,1],[s,1,1]],n),Oe([0,0,-1],2,.65,[[s,0,0],[s,1,0],[t,1,0],[t,0,0]],n),Oe([-1,0,-1],2,.675,[[s,0,0],[s,1,0],[0,1,s],[0,0,s]],i),Oe([1,0,-1],2,.725,[[t,0,0],[t,1,0],[1,1,s],[1,0,s]],o),Oe([1,0,1],2,.825,[[1,0,t],[1,1,t],[t,1,1],[t,0,1]],i),Oe([-1,0,1],2,.775,[[0,0,t],[0,1,t],[s,1,1],[s,0,1]],o)],a=[Oe([0,1,0],0,1,[[s,1,s],[s,1,t],[t,1,t],[t,1,s]],e),Oe([0,-1,0],1,.45,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],e),Oe([1,0,0],2,.8,[[1,0,0],[1,0,1],[1,t,1],[1,t,0]],r),Oe([-1,0,0],2,.7,[[0,0,0],[0,t,0],[0,t,1],[0,0,1]],r),Oe([0,0,1],2,.85,[[0,0,1],[1,0,1],[1,t,1],[0,t,1]],n),Oe([0,0,-1],2,.65,[[0,0,0],[0,t,0],[1,t,0],[1,0,0]],n),Oe([0,1,-1],2,.825,[[0,t,0],[1,t,0],[1,1,s],[0,1,s]],n),Oe([0,1,1],2,.925,[[1,t,1],[0,t,1],[0,1,s],[1,1,s]],n),Oe([-1,1,0],2,.85,[[0,t,1],[0,t,0],[0,1,s],[0,1,t]],r),Oe([1,1,0],2,.9,[[1,t,0],[1,t,1],[1,1,t],[1,1,s]],r)];return{[yi]:h,[Mi]:a}})(),we=16,Rn=16,Ar=[Zn,vn,De,Qs,Jn,bs,si,Bo,Ss,Ne,on,nn,In,zo,Tn,Ze,sn,Ve,fi,je,Yi,Fi,Le,mn,gn,tr,Ho,Go,Vo,Wo,qo,er,Ln,$n,Pn,Hn,dn,mi,Dr,Je,en,He,Qe,rn,_n,ai,kn,bi,Yn,kr,Ur,Nr,nr,Ki,Tr,ki],zu=[["grass_top",ai],["grass_side",ai],["wood_top",kn],["farmland_side",Ln],["sandstone_top",vn],["hull_top",Ne],["water_side",Ve],["bed_side",rn],["chest_top",Le],["bench_top",Ze],["bench_ext_top",mn],["campfire_top",sn],["cactus_top",gn]],Ge={};zu.forEach(([s],t)=>Ge[s]=Ar.length+t);let Na=null;function Hu(){if(Na)return Na;const s=document.createElement("canvas");s.width=s.height=Rn*we;const t=s.getContext("2d"),e=new $o(48879);Ar.forEach((p,d)=>d);let n=0,r=0,i=0,o=0,l=0;const h=p=>Math.max(0,Math.min(1,p)),a=(p,d=1,g=0,M=0,C=0)=>`rgba(${Math.round(h(i+p+g)*255)},${Math.round(h(o+p+M)*255)},${Math.round(h(l+p+C)*255)},${d})`,c=(p,d,g)=>{t.fillStyle=g,t.fillRect(n+p,r+d,1,1)},u=p=>{t.fillStyle=p,t.fillRect(n,r,we,we)},f=p=>(e.next()-.5)*p,m=(p,d)=>{for(let g=0;g<p;g++)c(e.int(0,15),e.int(0,15),a(f(d)))},v=(p,d,g=-.15)=>{let M=e.int(1,13),C=e.int(1,13);for(let L=0;L<p;L++)c(M,C,a(g+f(d))),M+=e.int(-1,1),C+=e.int(0,1),M=Math.max(0,Math.min(15,M)),C=Math.max(0,Math.min(15,C))},y=()=>{const p=M=>{const C=[];for(let U=0;U<M*M;U++)C.push(e.next());const L=(U,H)=>C[H%M*M+U%M],k=[];for(let U=0;U<16;U++)for(let H=0;H<16;H++){const $=H*M/16,V=U*M/16,J=Math.floor($),et=Math.floor(V),gt=$-J,Rt=V-et,kt=L(J,et)+(L(J+1,et)-L(J,et))*gt,Dt=L(J,et+1)+(L(J+1,et+1)-L(J,et+1))*gt;k.push(kt+(Dt-kt)*Rt)}return k},d=p(4),g=p(8);return d.map((M,C)=>(M*.65+g[C]*.35-.5)*2)},x=p=>{const d=y();for(let g=0;g<16;g++)for(let M=0;M<16;M++)c(M,g,a(p(M,g,d[g*16+M])));return d},_=(p,d,g,M)=>{for(let C=-g;C<=g;C++)for(let L=-g;L<=g;L++){const k=Math.hypot(L,C);k>g+.3||c(p+L,d+C,a(M+(k>g-.6?-.2:L+C<-g*.5?.14:-.02)))}},R=(p,d,g=.25)=>{for(const M of p)for(let C=0;C<16;C++){const L=C-M;L>=0&&L<16&&c(C,L,a(g,d))}},T=(p,d,g,M,C,L)=>{for(let k=-g;k<=g;k++)for(let U=-g;U<=g;U++){const H=Math.hypot(U,k);H>g+.3||c(p+U,d+k,a(H>g-.5?-.22:U+k<0?.24:.04,1,M,C,L))}},S={},b=(p,d)=>S[p]=d;b(String(Zn),()=>{x((p,d,g)=>g*.07+Math.sin((p+d)*.55+g*5)*.03),m(24,.18);for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),a(-.14))}),b(String(vn),()=>{const p=y();for(let d=0;d<16;d++){const g=Math.floor((d+p[d*16+8]*1.2+16)%16/4),M=[-.05,.03,-.01,.05][g%4];for(let C=0;C<16;C++)c(C,d,a(M+p[d*16+C]*.05+(d%4===0?-.12:0)))}m(26,.08)}),b("sandstone_top",()=>{x((p,d,g)=>g*.06);for(let p=0;p<7;p++){const d=e.int(1,14),g=e.int(1,14);c(d,g,a(-.13)),c(d+1,g,a(-.06))}m(30,.1)}),b(String(De),()=>{x((p,d,g)=>g*.1),v(11,.06,-.14),v(8,.06,-.2);for(let p=0;p<4;p++)c(e.int(0,15),e.int(0,15),a(.2));m(16,.1)}),b(String(Qs),()=>{x((p,d,g)=>g*.08-.06);for(let p=0;p<9;p++)_(e.int(2,13),e.int(2,13),e.int(1,3),f(.18))}),b(String(Jn),()=>{x((p,d,g)=>g*.13+(Math.sin(p*1.4)+Math.cos(d*1.1))*.03),m(44,.2);for(let p=0;p<3;p++){const d=e.int(2,13),g=e.int(2,13);c(d,g,a(.16)),c(d+1,g,a(.08))}}),b(String(bs),()=>{x((p,d,g)=>g*.05+.04),v(10,.03,.06),v(8,.03,.09);for(let p=0;p<30;p++)c(e.int(0,15),e.int(0,15),a(.13))}),b(String(si),()=>{const p=x((d,g,M)=>M*.04-.05);for(let d=0;d<16;d++){for(let g=1;g<15;g++)Math.sin(g*.5+d*2.6+p[d*16+g]*4)>.7&&c(g,d,a(-.18));d%5===2&&e.next()>.4&&c(e.int(2,13),d,a(.12))}}),b(String(Bo),()=>{u("rgba(170,215,232,0.22)"),R([5,8,14],.5,.3),R([11],.32,.22)}),b(String(Ss),()=>{x((p,d,g)=>g*.05),v(7,.02,-.1),R([9],.18,.12)}),b(String(Ne),()=>{const p=x((d,g,M)=>M*.03);for(let d=0;d<16;d++)c(d,10,a(-.24)),d%2===0&&c(d,9,a(-.08));for(let d=0;d<16;d++)if(d%4===1)for(const g of[1,6,11])c(g,d,a(.22)),c(g+1,d,a(.05)),c(g,d+1,a(-.16)),c(g+1,d+1,a(-.12));for(let d=0;d<10;d++)c(e.int(0,15),e.int(0,15),a(-.02,1,.06,-.01,-.08));p[60]>.3&&c(12,3,a(.35,1,.1,0,0))}),b("hull_top",()=>{x((p,d,g)=>g*.03);for(const p of[4,12])for(let d=0;d<16;d++)c(d,p,a(-.22));for(const p of[2,7,12])for(let d=0;d<16;d++)d%4===2&&c(p,d,a(.2));for(let p=0;p<8;p++)c(e.int(0,15),e.int(0,15),a(.28,1,.05,-.02,-.06))}),b(String(on),()=>{x((p,d,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(0,p,a(-.26)),c(15,p,a(-.26));for(let p=2;p<=12;p++)for(let d=3;d<=12;d++)d===3||d===12||p===2||p===12?c(d,p,a(-.2)):d===4&&p>3&&p<11&&c(d,p,a(.08));for(let p=7;p<=9;p++)c(13,p,a(.35)),c(12,p,a(-.28));for(let p=5;p<11;p++)c(p,14,a(-.15,1,.1,0,-.02))}),b(String(nn),()=>{x((p,d,g)=>g*.03-.03);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(0,p,a(-.26)),c(15,p,a(-.26));for(let p=4;p<=11;p++)for(let d=5;d<=10;d++)c(d,p,a(-.32,1,-.1,-.02,.06));for(const p of[5,8])for(let d=5;d<=10;d++){const g=d-p+4;g>=4&&g<=11&&c(d,g,a(.35,.5))}for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,a(.2))}),b(String(je),()=>{for(let p=0;p<16;p++)c(0,p,a(-.1,.9)),c(1,p,a(.05,.85)),c(2,p,a(-.15,.7));c(1,7,a(.3,.9)),c(1,8,a(.3,.9))}),b(String(In),()=>{u(a(-.28));for(let p=4;p<=11;p++)for(let d=4;d<=11;d++){const g=Math.max(Math.abs(d-7.5),Math.abs(p-7.5));c(d,p,g>3?a(.12):a(.42-g*.06,1,.3,.18,-.02))}for(const[p,d]of[[4,4],[11,4],[4,11],[11,11]])c(p,d,a(.25))}),b(String(zo),()=>{x((p,d,g)=>g*.03+(d%2===0?.02:-.02));for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,a(.22));for(let p=0;p<5;p++){const d=e.int(2,13),g=e.int(2,13);c(d,g,a(-.12,1,.24,.02,-.14)),c(d+1,g,a(-.2,1,.16,0,-.1))}}),b(String(Tn),()=>{x((p,d,g)=>g*.03-.25);for(let p=-3;p<=3;p++){const d=3-Math.abs(p);for(let g=-d;g<=d;g++)Math.hypot(g,p)>d+.3||c(8+g,8+p,a(p===0?.05:0,1,.95-Math.abs(p)*.08,.15,.1))}for(let p=-1;p<=1;p++)for(let d=-1;d<=1;d++)Math.hypot(d,p)<1.6&&c(8+d,8+p,a(.4-Math.hypot(d,p)*.15,1,1,.3,.1));for(let p=0;p<16;p+=3){const d=3-Math.abs(p%6-3);for(let g=-d;g<=d;g++)c(8+g,p,a(.08))}}),b(String(Ze),()=>{const p=x((d,g,M)=>M*.05+(g<5?.02:-.14));for(let d=0;d<16;d++)c(d,0,a(.14)),c(d,1,a(.06)),c(d,4,a(-.26));for(let d=5;d<16;d++)for(const g of[1,2,13,14])c(g,d,a(.06+p[d*16+g]*.02));for(let d=6;d<=10;d++)for(let g=4;g<=11;g++)c(g,d,a(-.04+p[d*16+g]*.04));for(let d=4;d<=11;d++)c(d,6,a(-.28)),c(d,10,a(-.28));c(7,8,"rgba(190,190,190,1)"),c(8,8,"rgba(190,190,190,1)");for(let d=3;d<=12;d++)c(d,13,a(.1)),c(d,14,a(-.3))}),b("bench_top",()=>{x((p,d,g)=>g*.04+Math.sin(d*1.7+g*3)*.03);for(let p=0;p<16;p++)c(p,0,a(-.2)),c(p,15,a(-.2));for(let p=0;p<16;p++)if(p%5===4)for(let d=0;d<16;d++)c(d,p,a(-.14));for(let p=2;p<=11;p++)c(p,4,"rgba(160,166,178,1)");for(let p=2;p<=11;p+=2)c(p,5,"rgba(120,126,140,1)");c(12,4,"rgba(96,66,40,1)"),c(13,4,"rgba(96,66,40,1)"),c(12,5,"rgba(80,54,32,1)");for(let p=4;p<=6;p++)c(p,9,"rgba(120,88,54,1)");for(let p=4;p<=6;p++)c(p,10,"rgba(100,72,44,1)");c(5,11,"rgba(150,156,168,1)"),c(5,12,"rgba(150,156,168,1)"),c(5,13,"rgba(140,146,158,1)");for(let p=0;p<6;p++)c(e.int(0,15),e.int(0,15),a(-.06,1,.02,-.01,-.04))}),b(String(mn),()=>{x((p,d,g)=>g*.04-.14);for(let p=0;p<16;p++)c(p,0,a(.05)),c(p,2,a(-.24));for(let p=3;p<16;p++)for(const d of[1,2,13,14])c(d,p,a(.04));for(let p=3;p<=12;p++)c(p,11,a(.08)),c(p,12,a(-.26))}),b("bench_ext_top",()=>{x((p,d,g)=>g*.04+Math.sin(p*1.6+g*2)*.03);for(let p=0;p<16;p++)c(0,p,a(-.18)),c(15,p,a(-.18));for(let p=0;p<16;p++)for(let d=0;d<16;d++)d%6===3&&e.next()>.5&&c(d,p,a(-.1))}),b(String(sn),()=>{x((p,d,g)=>g*.05-.1);for(let p=0;p<5;p++)_(2+p*3,13,1,-.05);t.strokeStyle="rgba(70,50,32,1)",t.lineWidth=2,t.beginPath(),t.moveTo(n+4,r+13),t.lineTo(n+12,r+9),t.stroke(),t.beginPath(),t.moveTo(n+12,r+13),t.lineTo(n+4,r+9),t.stroke(),t.lineWidth=1;for(let p=2;p<10;p++){const d=Math.max(0,5-Math.abs(p-7)-(p<5?5-p:0));for(let g=-d;g<=d;g++){const M=Math.abs(g)/(d+1);c(8+g,p,a(M*.1,1,.85-M*.4,.35-M*.25,-.45))}}c(8,1,a(.2,1,.7,.15,-.4)),c(7,3,a(.3,1,.9,.4,-.4))}),b("campfire_top",()=>{x((p,d,g)=>-.12+g*.05);for(let p=0;p<16;p++){const d=p/16*Math.PI*2;c(8+Math.round(Math.cos(d)*5.5),8+Math.round(Math.sin(d)*5.5),a(.12)),c(8+Math.round(Math.cos(d)*4),8+Math.round(Math.sin(d)*4),a(-.3,1,.1,-.02,-.06))}for(let p=0;p<5;p++){const d=p/5*Math.PI*2+.5;_(8+Math.round(Math.cos(d)*6),8+Math.round(Math.sin(d)*6),1,0)}for(let p=0;p<3;p++)for(let d=0;d<8;d++){const g=d/8*Math.PI*2+p*.4;c(8+Math.round(Math.cos(g)*p*1.5),8+Math.round(Math.sin(g)*p*1.5),a(.2+(3-p)*.12,1,.5,-.05,-.35))}});for(const p of[tr,Ho,Go,Vo,Wo,qo,er,Ve])b(String(p),()=>{const d=x((g,M,C)=>C*.04+Math.sin((g+M*.5)*.8+C*4)*.04);for(const g of[2,6,10,14])for(let M=0;M<16;M++)d[g*16+M]>-.2&&c(M,g+(M%4<2?0:1),a(.16,.75));for(let g=0;g<5;g++)c(e.int(0,15),e.int(0,15),a(.3,.5))});b("water_side",()=>{x((p,d,g)=>g*.04+d*.004);for(let p=0;p<16;p++)e.next()>.3&&c(p,0,a(.22,.8)),p%3===0&&c(p,1+p%2,a(.1,.5));for(let p=2;p<16;p++)e.next()>.75&&c(e.int(0,15),p,a(.12,.4))}),b(String(fi),()=>{x((p,d,g)=>g*.08-.02);for(let p=0;p<16;p++)for(let d=0;d<16;d++)(p%5===4||(d+Math.floor(p/5)%2*4)%8===3)&&c(d,p,a(-.14+f(.03)));for(let p=0;p<3;p++)v(e.int(8,12),.05,-.1);for(let p=0;p<10;p++)c(e.int(0,15),e.int(0,15),a(.12))}),b(String(Yi),()=>{const p=x((d,g,M)=>M*.06-.35);for(let d=0;d<16;d++)p[d*16+1]>.2&&c(1,d,a(-.1,1,.04,0,.08));for(let d=0;d<=15;d+=5)c(d,0,a(.1,1,.1,0,.15)),c(d,15,a(.1,1,.1,0,.15));for(let d=3;d<=12;d++)for(let g=3;g<=12;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-7.5)),C=Math.max(Math.abs(d-7.5),Math.abs(g-7.5),Math.abs(d+g-15)/2);M>=4.2||(C>=3.4?c(d,g,a(.15,1,.55,.15,.85)):c(d,g,a(.32+(3-M)*.12,1,.75,.3,1)))}for(const[d,g]of[[5,5],[10,10],[10,5]])(d+g)%2===0&&c(d,g,a(.45,1,.8,.35,1))}),b(String(Fi),()=>{const p=x((d,g,M)=>M*.03+(g%2===0?.015:-.015)-.08);for(const d of[1,3,5]){for(let g=2;g<=13;g++)c(g,d,a(-.28));for(let g=2;g<=13;g+=3)c(g,d-1,a(.12))}for(let d=4;d<=11;d++)for(let g=7;g<=14;g++){const M=Math.max(Math.abs(d-7.5),Math.abs(g-10.5));M>=3.2?c(d,g,a(.1+p[g*16+d]*.05)):c(d,g,a(.24+(3-M)*.1,1,-.05,.2,.22))}c(5,12,a(.15,1,-.1,.12,.12)),c(10,9,a(.15,1,-.1,.12,.12));for(let d=7;d<=14;d++)d%2===1&&c(14,d,a(-.2))}),b(String(gn),()=>{const p=x((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,a(-.16+p[g*16+d]*.03));for(let d=0;d<16;d++)if(d%5!==2&&d%5!==3)for(let g=0;g<16;g+=3)e.next()>.4&&c(d,g,a(.5,1,.05,.02,-.05));for(const[d,g]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])c(d,g,a(.2)),c(d+1,g,a(-.2)),c(d,g+1,a(-.2));c(13,1,"rgba(214,74,130,1)"),c(1,6,"rgba(198,58,114,1)"),c(5,11,"rgba(214,74,130,1)")}),b("cactus_top",()=>{const p=x((d,g,M)=>M*.06);for(let d=2;d<=6;d+=2)for(let g=0;g<20;g++){const M=g/20*Math.PI*2;c(8+Math.round(Math.cos(M)*d),8+Math.round(Math.sin(M)*d),a(d===6?-.14:-.06+p[g]*.05))}for(let d=0;d<8;d++){const g=d/8*Math.PI*2;c(8+Math.round(Math.cos(g)*1.5),8+Math.round(Math.sin(g)*1.5),a(.45,1,.05,.03,-.04))}c(8,8,a(.15))}),b(String(mi),()=>{const p=x((d,g,M)=>M*.06);for(const d of[2,7,12])for(let g=0;g<16;g++)c(d,g,a(-.16+p[g*16+d]*.03));for(const[d,g]of[[4,4],[9,6],[6,10],[11,12],[3,14]])c(d,g,a(.2)),c(d+1,g,a(-.2)),c(d,g+1,a(-.2));for(let d=0;d<=3;d++)for(let g=5;g<=10;g++)(d===3||g===5||g===10||e.next()>.3)&&c(g,d,"rgba(214,74,130,1)");for(let d=0;d<9;d++)c(5+d%4*2,Math.floor(d/4),"rgba(238,150,190,1)");c(6,0,"rgba(238,150,190,1)"),c(9,1,"rgba(248,190,214,1)")}),b(String(Le),()=>{x((p,d,g)=>g*.05-.02+Math.sin(p*1.3+g*3)*.02);for(let p=0;p<16;p++)c(p,0,a(-.3)),c(p,7,a(-.24)),c(p,15,a(-.3));for(let p=0;p<16;p++)for(let d=0;d<16;d++)d%5===2&&p>7&&e.next()>.4&&c(d,p,a(-.12));for(let p=0;p<16;p++)c(p,4,"rgba(148,154,166,1)"),c(p,5,"rgba(120,126,138,1)");for(let p=2;p<5;p++)for(const d of[7,8])c(d,p,"rgba(200,205,215,1)");c(7,6,"rgba(40,42,48,1)"),c(8,6,"rgba(40,42,48,1)");for(let p=0;p<4;p++){const[d,g]=[[0,0],[15,0],[0,15],[15,15]][p];c(d,g,a(.2)),c(d+(d?-1:1),g,a(.1)),c(d,g+(g?-1:1),a(.1))}}),b("chest_top",()=>{x((p,d,g)=>g*.05+Math.sin(d*1.4+g*2)*.02);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26));for(let p=0;p<16;p++)p!==7&&p!==8&&(c(p,7,"rgba(148,154,166,1)"),c(p,8,"rgba(120,126,138,1)"));for(const[p,d]of[[2,2],[13,2],[2,13],[13,13]])c(p,d,"rgba(200,205,215,1)")}),b(String(Ln),()=>{const p=x((d,g,M)=>M*.1-.06);for(const d of[2,6,10,14])for(let g=0;g<16;g++)c(g,d,a(-.16+f(.03)));for(const d of[1,5,9,13])for(let g=0;g<16;g++)p[d*16+g]>-.1&&e.next()>.55&&c(g,d,a(.1));for(let d=0;d<8;d++)c(e.int(0,15),e.int(0,15),a(.05,1,0,-.02,.04))}),b("farmland_side",()=>{x((p,d,g)=>g*.09-.04);for(let p=0;p<16;p++)c(p,0,a(.14));for(let p=0;p<16;p++)for(let d=1;d<16;d++)e.next()>.88&&c(p,d,a(.14))}),b(String($n),()=>{u("rgba(0,0,0,0)");for(const[p,d]of[[7,13],[8,13],[7,12],[8,12],[9,13],[6,12]])c(p,d,a(.1));c(6,11,a(.16)),c(9,10,a(.12)),c(7,11,a(.02));for(let p=0;p<4;p++)c(e.int(5,10),e.int(12,15),a(-.05))}),b(String(Pn),()=>{x((p,d,g)=>g*.04-.02);for(let p=4;p<=13;p++)for(let d=2;d<=13;d++){const g=Math.hypot((d-7.5)*1.1,(p-8.5)*1.25);if(g>5.8)continue;const M=(d+(p/2|0))%4===0;c(d,p,a(M?-.18:.04)),g>5.2&&c(d,p,a(-.24)),d<5&&p<7&&!M&&c(d,p,a(.2))}c(8,3,a(-.1)),c(7,3,a(-.16)),c(8,4,a(-.08)),c(2,13,a(.1)),c(13,12,a(.06)),c(4,14,a(.08))}),b(String(Hn),()=>{u("rgba(0,0,0,0)");for(const p of[4,8,12]){for(let d=11;d<=15;d++)c(p,d,a(.08)),d<14&&c(p,d,a(.14));c(p-1,12,a(.06))}}),b(String(dn),()=>{u("rgba(0,0,0,0)");for(const p of[3,7,11,14]){const d=p%2?1:-1;for(let g=2;g<=15;g++)c(p+(g<6?d:0),g,a(g<7?.22:-.02));c(p-d,4,a(.18)),c(p-d,9,a(.06)),c(p+d,2,a(.3))}}),b(String(Dr),()=>{x((p,d,g)=>g*.03-.12);for(let p=0;p<16;p++)c(p,0,a(-.26)),c(p,15,a(-.26)),c(p,7,"rgba(150,156,168,1)"),c(p,8,"rgba(110,116,128,1)");for(const[p,d]of[[2,3],[13,3],[2,12],[13,12]])c(p,d,"rgba(200,205,215,1)"),c(p+1,d,"rgba(150,156,168,1)");for(let p=2;p<=5;p++)c(0,p,a(.14)),c(15,p,a(.14))}),b(String(Je),()=>{const p=x((d,g,M)=>M*.03+(d%4===0?-.04:.015));for(let d=0;d<16;d++)c(d,0,a(-.22)),c(d,15,a(-.22)),c(0,d,a(-.16)),c(15,d,a(-.16));for(const[d,g]of[[3,3],[12,3],[3,12],[12,12]])c(d,g,a(.24)),c(d+1,g,a(.08)),c(d,g+1,a(-.14));for(let d=0;d<6;d++)c(e.int(1,14),e.int(1,14),a(-.02,1,.05,-.01,-.06));if(p[8]>.4)for(let d=1;d<4;d++)c(12,d,a(.06,1,.2,.02,-.1))}),b(String(en),()=>{x((p,d,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,a(-.24)),c(p,15,a(-.24)),c(0,p,a(-.24)),c(15,p,a(-.24));for(let p=3;p<=12;p++)for(let d=4;d<=11;d++)(d===4||d===11||p===3||p===12)&&c(d,p,a(.1));for(let p=7;p<=9;p++)c(12,p,a(.26)),c(11,p,a(-.22))}),b(String(He),()=>{x((p,d,g)=>g*.03-.05);for(let p=0;p<16;p++)c(p,0,a(-.24)),c(p,15,a(-.24)),c(0,p,a(-.24)),c(15,p,a(-.24));for(let p=5;p<=10;p++)for(let d=6;d<=9;d++)c(d,p,a(.1,1,-.05,.1,.15));for(let p=6;p<=9;p++){const d=p-1;d>=5&&d<=10&&c(p,d,a(.3,.6))}for(let p=5;p<=10;p++)for(let d=6;d<=9;d++)(d===6||d===9||p===5||p===10)&&c(d,p,a(.1,1,-.05,.1,.15))}),b(String(Qe),()=>{for(let p=0;p<16;p++)c(0,p,a(-.12,.9)),c(1,p,a(.03,.85)),c(2,p,a(-.17,.7));c(1,7,a(.26,.9)),c(1,8,a(.26,.9))}),b(String(rn),()=>{x((p,d,g)=>g*.04+.02);for(let p=0;p<16;p++)for(let d=0;d<16;d++)(d+p)%5===0&&c(d,p,a(-.1));for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=0;p<16;p++)c(p,11,"rgba(90,40,36,1)"),c(p,12,"rgba(150,80,70,1)"),c(p,13,"rgba(120,60,52,1)");for(let p=1;p<11;p++)c(1,p,a(.12)),c(14,p,a(-.08))}),b("bed_side",()=>{x((p,d,g)=>g*.04-(d>11?-.1:.04));for(let p=0;p<16;p++)c(p,0,a(.14)),c(p,10,a(-.22));for(let p=1;p<10;p++)for(let d=0;d<16;d++)(d+p)%6===1&&c(d,p,a(-.06));for(let p=11;p<16;p++)for(let d=0;d<16;d++)c(d,p,"rgba(70,44,26,1)");for(let p=2;p<16;p+=5)c(p,12,"rgba(96,62,38,1)"),c(p,13,"rgba(52,32,18,1)")}),b(String(_n),()=>{x((p,d,g)=>g*.04+.02);for(let p=0;p<16;p++)c(p,0,"rgba(60,26,24,1)"),c(p,15,"rgba(60,26,24,1)"),c(0,p,"rgba(60,26,24,1)"),c(15,p,"rgba(60,26,24,1)");for(let p=3;p<=11;p++)for(let d=2;d<=13;d++)c(d,p,d===2||d===13||p===3||p===11?"rgba(200,192,176,1)":"rgba(226,220,206,1)"),p===4&&d>3&&d<11&&c(d,p,"rgba(240,236,226,1)");c(4,6,"rgba(208,200,184,1)"),c(10,9,"rgba(208,200,184,1)");for(let p=0;p<16;p++)c(p,12,"rgba(90,40,36,1)")}),b(String(ai),()=>{const p=x((d,g,M)=>M*.12-(g>4?.16:.02));for(let d=0;d<16;d++){const g=2+Math.round((p[d]+1)*1.5);for(let M=0;M<g;M++)c(d,M,a(f(.1)+(M===0?.1:0)));e.next()>.6&&c(d,g+1,a(-.2))}for(let d=0;d<16;d+=3){const g=7+d%5;c(d,g,a(.2))}}),b("grass_top",()=>{x((p,d,g)=>g*.08-.02);for(let p=0;p<40;p++){const d=e.int(0,15),g=e.int(0,14),M=e.int(1,3);for(let C=0;C<M;C++)c(d,g+C,a(C===0?.14:-.02+f(.08)))}for(let p=0;p<5;p++)c(e.int(0,15),e.int(0,15),a(-.3))}),b("grass_side",()=>{const p=x((d,g,M)=>M*.12+(g<3?.06:-.1));for(let d=0;d<16;d++){const g=1+Math.round((p[d+16]+1)*1.5);for(let M=0;M<g;M++)c(d,M,a(.08+f(.08)))}for(let d=0;d<16;d++)for(let g=3;g<16;g++)e.next()>.9&&c(d,g,a(.16,1,-.04,-.02,-.04))}),b(String(kn),()=>{const p=x((d,g,M)=>M*.05);for(let d=0;d<16;d++){const g=p[d]*2;for(let M=0;M<16;M++){const C=Math.sin(d*1.9+g+Math.sin(M*.35)*1.5);c(d,M,a(C>.75?-.26:C>.2?-.1:.06+f(.04)))}}for(let d=1;d<=2;d++)for(let g=0;g<10;g++){const M=g/10*Math.PI*2;c(9+Math.round(Math.cos(M)*d*1.4),7+Math.round(Math.sin(M)*d),a(d===2?-.3:-.2))}c(9,7,a(-.34)),c(10,7,a(-.28))}),b("wood_top",()=>{x((p,d,g)=>g*.04);for(let p=0;p<44;p++){const d=p/44*Math.PI*2;for(let g=1;g<7;g+=2){const M=g+(g%4===1?.6:0);c(8+Math.round(Math.cos(d)*M),8+Math.round(Math.sin(d)*M),a(g>4?-.12:.05))}}c(8,8,a(-.3)),c(8,7,a(-.2));for(let p=0;p<16;p++)c(p,0,a(-.3)),c(p,15,a(-.3)),c(0,p,a(-.3)),c(15,p,a(-.3))}),b(String(bi),()=>{x((p,d,g)=>g*.14);for(let p=0;p<26;p++){const d=e.int(0,14),g=e.int(0,14);c(d,g,a(.16)),c(d+1,g,a(.06)),c(d,g+1,a(-.1)),c(d+1,g+1,a(-.2))}for(let p=0;p<10;p++){const d=e.int(1,14),g=e.int(1,14);c(d,g,a(-.4)),c(d+1,g,a(-.25))}}),b(String(Yn),()=>{u("rgba(0,0,0,0)");for(let p=6;p<16;p++)c(8,p,a(-.28));c(7,15,a(-.2)),c(9,15,a(-.2)),c(7,5,a(.1)),c(8,5,a(.15)),c(9,5,a(.1)),c(6,4,a(.05)),c(7,4,a(.12)),c(8,4,a(.18)),c(9,4,a(.12)),c(10,4,a(.05)),c(7,3,a(.08)),c(8,3,a(.14)),c(9,3,a(.08)),c(8,2,a(.1)),c(6,5,a(.02)),c(10,5,a(.02))}),b(String(kr),()=>{x((p,d,g)=>g*.1-.02),v(11,.06,-.14),v(7,.06,-.18);for(let p=0;p<5;p++)T(e.int(3,12),e.int(3,12),e.int(1,2),-.06,-.05,.04);m(12,.1)}),b(String(Ur),()=>{x((p,d,g)=>g*.1-.04),v(9,.06,-.14);for(let p=0;p<3;p++)T(e.int(3,12),e.int(3,12),e.int(1,2),.26,.04,-.18);for(let p=0;p<2;p++)T(e.int(4,11),e.int(4,11),1,-.12,.16,0);m(10,.08)}),b(String(Nr),()=>{x((p,d,g)=>g*.07-.24),v(10,.04,-.08);for(let p=0;p<4;p++){const d=e.int(4,11),g=e.int(4,11),M=e.int(2,3);for(let C=-M;C<=M;C++){const L=M-Math.abs(C);for(let k=-L;k<=L;k++){const U=Math.abs(k)+Math.abs(C);c(d+k,g+C,a(U===M?-.16:U===0?.4:.16,1,-.16,-.06,.3))}}}}),b(String(nr),()=>{const p=y();for(let d=0;d<16;d++){const g=Math.floor((d+p[d*16+8]*2+16)%16/4),M=[-.02,.05,-.06,.02][g%4];for(let C=0;C<16;C++)c(C,d,a(M+p[d*16+C]*.03+(d%4===0?-.06:0)))}for(let d=0;d<3;d++)v(e.int(6,10),.02,.06);m(10,.05)});const I=p=>{for(let d=0;d<16;d++)c(d,0,a(-.22)),c(d,15,a(-.22));for(const d of[0,8])for(let g=1;g<15;g++)p[g*16+d]>-.2&&c(d,g,a(-.16)),d&&(g===3||g===7||g===11)&&c(d,g,a(.2));for(let d=0;d<4;d++){const g=e.int(1,14),M=e.int(1,5),C=e.int(4,8);for(let L=M;L<Math.min(15,M+C);L++)e.next()>.25&&c(g,L,a(-.06+f(.04),1,.3,.05,-.22))}for(let d=0;d<8;d++)c(e.int(1,14),e.int(1,14),a(-.05))};b(String(Ki),()=>{const p=x((d,g,M)=>M*.04-.1+(d%8===0?-.05:0));I(p);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.16)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.26))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++)Math.hypot(g,d)>4.2||c(8+g,8+d,a(-.34+p[(8+d)*16+8+g]*.06))}),b(String(Tr),()=>{const p=x((d,g,M)=>M*.04-.08+(d%8===0?-.05:0));I(p);for(let d=0;d<30;d++){const g=d/30*Math.PI*2;c(8+Math.round(Math.cos(g)*6),8+Math.round(Math.sin(g)*6),a(.2)),c(8+Math.round(Math.cos(g)*5),8+Math.round(Math.sin(g)*5),a(-.1,1,.35,.05,-.3))}for(let d=-4;d<=4;d++)for(let g=-4;g<=4;g++){const M=Math.hypot(g,d);M>4.2||c(8+g,8+d,a(.35-M*.08+p[(8+d)*16+8+g]*.08,1,.55-M*.05,.12-M*.04,-.45))}for(const[d,g]of[[3,2],[12,4],[5,13],[11,12]])c(d,g,a(.4,1,.5,.1,-.35))}),b(String(ki),()=>{x((p,d,g)=>g*.03-.22+(p%4===0?-.04:0));for(let p=0;p<16;p++)c(2,p,a(-.16)),c(13,p,a(-.16));for(const p of[2,13])for(let d=3;d<13;d++)c(d,p,a(.12));for(let p=4;p<=11;p++){const d=p===4||p===11?1:2;for(let g=-d;g<=d;g++){const M=d-Math.abs(g);c(8+g,p,a(.2+M*.15+p%2*.05,1,.45+M*.1,.18,-.5))}}for(let p=0;p<6;p++)c(e.int(3,12),e.int(3,12),a(-.05))});const A=(p,d,g)=>{S[p]&&(n=d%Rn*we,r=(d/Rn|0)*we,[i,o,l]=g,S[p]())};for(const[p,d]of Ar.entries())A(String(d),p,jn[d].color);for(const[p,d]of zu)A(p,Ge[p],jn[d].color);return Na=s,s}function v_(){const s=new wu(Hu());return s.flipY=!1,s.magFilter=s.minFilter=Gn,s.generateMipmaps=!1,s.colorSpace=Cn,s}const ne=[];Ar.forEach((s,t)=>ne[s]=t);ne[yi]=ne[Ne];ne[Mi]=ne[Ne];const un=Rn*we,Gu=s=>{const t=ne[s]??0;return[t%Rn*we,(t/Rn|0)*we]},Ws=[],ln=(s,t,e,n)=>{Ws[s*6]=t,Ws[s*6+1]=e;for(let r=2;r<6;r++)Ws[s*6+r]=n};for(const s of Ar)ln(s,ne[s],ne[s],ne[s]);ln(ai,Ge.grass_top,ne[Jn],Ge.grass_side);ln(kn,Ge.wood_top,Ge.wood_top,ne[kn]);ln(Ln,ne[Ln],ne[Jn],Ge.farmland_side);ln(vn,Ge.sandstone_top,ne[vn],ne[vn]);ln(Ne,Ge.hull_top,ne[Ne],ne[Ne]);ln(yi,Ge.hull_top,ne[Ne],ne[Ne]);ln(Mi,Ge.hull_top,ne[Ne],ne[Ne]);ln(rn,ne[rn],ne[rn],Ge.bed_side);ln(_n,ne[_n],ne[_n],Ge.bed_side);ln(Le,Ge.chest_top,ne[Le],ne[Le]);ln(Ze,Ge.bench_top,ne[Ze],ne[Ze]);ln(mn,Ge.bench_ext_top,ne[mn],ne[mn]);ln(sn,Ge.campfire_top,ne[sn],ne[sn]);ln(gn,Ge.cactus_top,ne[gn],ne[gn]);ln(mi,Ge.cactus_top,ne[gn],ne[mi]);for(const s of[Ve,tr,Ho,Go,Vo,Wo,qo,er])ln(s,ne[s],ne[s],Ge.water_side);const Li=16,zh=`
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
`,Hh=`
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
`,hr=new F,Gh=new F,x_=new $t(1,.97,.9),y_=new $t(.2,.27,.45),M_=new $t(.72,.55,.35);class b_{scene=new Bf;camera;three;chunkMeshes=new Map;group=new le;entityGroup=new le;sun;hemi;stars;sunDisc;dust;stormI=0;stormOpen=!0;moonDisc;highlight;renderDistance=7;atlas=v_();matOpaque=new se({map:this.atlas,vertexColors:!0,side:Ke});matEmissive=new Wi({map:this.atlas,vertexColors:!0,side:Ke});matTrans=new se({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ke});lightingMode="sky";skyLight=new f_;lightRecheck=new Set;skyU={map:{value:this.atlas},uAmbient:{value:new $t(1,1,1)},uFloor:{value:.16},uFogColor:{value:new $t(0,0,0)},uFogNear:{value:40},uFogFar:{value:340},uNumLights:{value:0},uLightPos:{value:Array.from({length:Li},()=>new F)},uLightCol:{value:Array.from({length:Li},()=>new F)},uLightRange:{value:new Float32Array(Li)}};matSky=new xi({uniforms:this.skyU,vertexShader:zh,fragmentShader:Hh,side:Ke,defines:{OPAQUE_PASS:"1"}});matSkyT=new xi({uniforms:this.skyU,vertexShader:zh,fragmentShader:Hh,side:Ke,transparent:!0,depthWrite:!1});torch;playerLight;dynLights=[];constructor(t){this.three=new U1({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new zn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new Ta(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.playerLight=new Ta(16766826,1.4,14,1.4),this.playerLight.visible=!1,this.scene.add(this.playerLight),this.sun=new Zf(16777215,1),this.hemi=new Yf(12571878,9073749,.55),this.scene.add(this.sun,this.hemi);const e=this.sun.shadow.camera;this.sun.shadow.mapSize.set(2048,2048),e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=1,e.far=320,e.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun.target),this.scene.fog=new ec(14207392,40,this.renderDistance*X);const n=new an,r=[];for(let h=0;h<500;h++){const a=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);r.push(Math.sin(c)*Math.cos(a)*400,Math.abs(Math.cos(c))*400,Math.sin(c)*Math.sin(a)*400)}n.setAttribute("position",new xe(r,3)),this.stars=new nh(n,new kl({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new tn(new Lo(24,24),new Wi({color:16771504,fog:!1,side:Ke,toneMapped:!1})),this.moonDisc=new tn(new Lo(15,24),new Wi({color:14213877,fog:!1,side:Ke,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const i=new an,o=[];for(let h=0;h<700;h++){const a=Math.random()*Math.PI*2,c=3+Math.random()*16;o.push(Math.cos(a)*c,(Math.random()-.35)*14,Math.sin(a)*c)}i.setAttribute("position",new xe(o,3)),this.dust=new nh(i,new kl({color:14072204,size:.3,transparent:!0,opacity:0,depthWrite:!1})),this.dust.frustumCulled=!1,this.scene.add(this.dust);const l=new Zi(1.002,1.002,1.002);this.highlight=new Wf(new qf(l),new Su({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,r){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===t&&o.y===e&&o.z===n))return;const i=new Ta(r==="lamp"?16773296:r==="fire"?16745280:9427199,r==="lamp"?.9:r==="fire"?1.1:.8,r==="lamp"?12:r==="fire"?9:10,1.3);i.position.set(t+.5,e+.6,n+.5),this.scene.add(i),this.dynLights.push({x:t,y:e,z:n,light:i,flame:r==="fire"})}removePointLight(t,e,n){const r=this.dynLights.findIndex(i=>i.x===t&&i.y===e&&i.z===n);r<0||(this.scene.remove(this.dynLights[r].light),this.dynLights.splice(r,1))}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),r=di.clamp(n*2.2,0,1),i=di.clamp(1-Math.abs(n)*5,0,1),o=new $t(660006),l=new $t(13201213),h=new $t(12570592),a=o.clone().lerp(h,r);i>0&&a.lerp(l,i*.7);const c=new $t(16767392).lerp(new $t(16743231),i);return{sky:a,sunColor:c,sunElev:n,sunI:Math.max(.06,n*1.15),dayT:r}}updateSky(t,e){const n=t%Be/Be,r=this.keyframe(n);if(this.scene.background=r.sky,this.scene.fog.color.copy(r.sky),this.scene.fog.far=this.renderDistance*X*.98,this.stormI>.01){const a=this.scene.fog;a.color.lerp(M_,Math.min(1,this.stormI*.85)),a.near=di.lerp(40,4,this.stormI),a.far=Math.min(a.far,di.lerp(this.renderDistance*X,24,this.stormI)),this.scene.background=a.color}const i=(n-.25)*Math.PI*2;hr.set(Math.cos(i),r.sunElev,.4).normalize(),r.sunElev<0?(this.sun.color.setHex(10335464),this.sun.intensity=.28,hr.negate()):(this.sun.color.copy(r.sunColor),this.sun.intensity=r.sunI),this.sun.position.set(e.x+hr.x*120,e.y+hr.y*120,e.z+hr.z*120),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.hemi.intensity=.22+r.sunI*.35,this.stars.material.opacity=Math.max(0,1-r.sunI*3),this.stars.position.set(e.x,e.y,e.z);const o=430;this.sunDisc.position.set(e.x+Math.cos(i)*o,e.y+Math.sin(i)*o,e.z+o*.4),this.moonDisc.position.set(e.x-Math.cos(i)*o,e.y-Math.sin(i)*o,e.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(i)>-.12,this.moonDisc.visible=Math.sin(i)<.12,this.stormI>.01?(this.sun.intensity*=1-this.stormI*.75,this.hemi.intensity*=1-this.stormI*.55,this.sunDisc.visible&&=this.stormI<.5,this.moonDisc.visible&&=this.stormI<.5,this.stars.material.opacity*=1-this.stormI,this.dust.material.opacity=this.stormOpen?this.stormI*.75:0,this.dust.position.set(this.camera.position.x,this.camera.position.y+2,this.camera.position.z),this.dust.rotation.y=t*.7):this.dust.material.opacity>0&&(this.dust.material.opacity=0),this.torch.intensity=.12+(1-Math.min(1,r.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+Ol(t*5.3+a.x*3.1+a.z,7)*.45);const l=this.skyU;l.uAmbient.value.copy(y_).lerp(x_,r.dayT);const h=this.scene.fog;return l.uFogColor.value.copy(h.color),l.uFogNear.value=h.near,l.uFogFar.value=h.far,this.syncSkyLights(),r}syncSkyLights(){const t=this.skyU;let e=0;this.torch.getWorldPosition(Gh),t.uLightPos.value[e].copy(Gh);const n=this.torch.color;if(t.uLightCol.value[e].set(n.r,n.g,n.b).multiplyScalar(this.torch.intensity),t.uLightRange.value[e]=this.torch.distance,e++,this.playerLight.visible&&e<Li){t.uLightPos.value[e].copy(this.playerLight.position);const r=this.playerLight.color;t.uLightCol.value[e].set(r.r,r.g,r.b).multiplyScalar(this.playerLight.intensity),t.uLightRange.value[e]=this.playerLight.distance,e++}for(const r of this.dynLights){if(e>=Li)break;t.uLightPos.value[e].copy(r.light.position);const i=r.light.color;t.uLightCol.value[e].set(i.r,i.g,i.b).multiplyScalar(r.light.intensity),t.uLightRange.value[e]=r.light.distance,e++}t.uNumLights.value=e}setStorm(t,e){this.stormI=t,this.stormOpen=e}stormDome=null;setStormDome(t){if(!t){this.stormDome&&(this.entityGroup.remove(this.stormDome),this.stormDome.geometry.dispose(),this.stormDome.material.dispose(),this.stormDome=null);return}if(!this.stormDome){const e=new tn(new Fo(ku,28,18),new Wi({color:14178376,transparent:!0,opacity:.05,side:bn,depthWrite:!1}));e.renderOrder=2,this.stormDome=e,this.entityGroup.add(e)}this.stormDome.position.set(t[0],t[1],t[2])}setLightingMode(t){t!==this.lightingMode&&(this.lightingMode=t,this.three.shadowMap.enabled=t==="shadow",this.sun.castShadow=t==="shadow")}rebuildLights(t){this.skyLight.maps.clear(),this.lightRecheck.clear();for(const e of this.chunkMeshes.keys())t.dirty.add(e)}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}setPlayerLight(t){if(!t){this.playerLight.visible=!1;return}this.playerLight.visible=!0,this.playerLight.position.set(t.x,t.y,t.z)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}for(const n of this.lightRecheck){if(e<=0)break;this.lightRecheck.delete(n),t.dirty.has(n)||t.dirty.add(n),e--}}ensureChunks(t,e,n){for(let r=-this.renderDistance;r<=this.renderDistance;r++)for(let i=-this.renderDistance;i<=this.renderDistance;i++){const o=ri(e+r,n+i);this.chunkMeshes.has(o)||t.markDirty(e+r,n+i)}}buildChunk(t,e){const[n,r]=e.split(",").map(Number),i=t.chunk(n,r),o=[],l=[],h=[],a=[],c=[],u=[],f=[],m=[],v=[],y=[],x=[],_=[],R=[],T=[],S=this.lightingMode==="sky"?this.skyLight.bake(t,n,r,(g,M)=>{const C=ri(g,M);!t.dirty.has(C)&&!this.lightRecheck.has(C)&&this.lightRecheck.add(C)}):null,b=(g,M,C)=>S&&M>=0&&M<ee?S[gs(g,C,M)]/Eo:0;for(let g=0;g<X;g++)for(let M=0;M<X;M++)for(let C=0;C<ee;C++){const L=i[(g*X+M)*ee+C];if(L===Mt)continue;if(p_.has(L)){let Rt=0;if(S)for(const[kt,Dt]of[[1,0],[-1,0],[0,1],[0,-1]])Rt=Math.max(Rt,S[gs(g+kt,M+Dt,C)]);this.emitDoor(o,l,h,a,c,Rt/Eo,t,g,C,M,n*X,r*X,L);continue}if(m_.has(L)){const Rt=ne[L],kt=Rt%Rn*we,Dt=(Rt/Rn|0)*we,Xt=S?S[gs(g,M,C)]/Eo:0,Y=(Z,ht,Pt,vt)=>{const Gt=y.length/3;y.push(Z,C,ht,Pt,C,vt,Pt,C+1,vt,Z,C+1,ht);for(let Re=0;Re<4;Re++)x.push(.92,.92,.92),T.push(Xt);R.push((kt+.5)/un,(Dt+15.5)/un,(kt+15.5)/un,(Dt+15.5)/un,(kt+15.5)/un,(Dt+.5)/un,(kt+.5)/un,(Dt+.5)/un),_.push(Gt,Gt+1,Gt+2,Gt,Gt+2,Gt+3)};Y(g,M,g+1,M+1),Y(g+1,M,g,M+1);continue}if(L===yi||L===Mi){this.emitShape(__[L],o,l,h,a,c,L,t,g,C,M,n*X,r*X,b);continue}if(L>=tr&&L<=er){const Rt=(33-L)/8;for(let kt=0;kt<mo.length;kt++){const Dt=mo[kt],Xt=g+Dt.dir[0],Y=C+Dt.dir[1],Z=M+Dt.dir[2],ht=t.get(n*X+Xt,Y,r*X+Z);let Pt=0;if(Dt.dir[1]===0&&Dn(ht)){if(Pt=Pi(ht)/8,Pt>=Rt)continue}else{if(Dn(ht))continue;if(!Ua(t,n*X+Xt,Y,r*X+Z,L))continue}const vt=Ws[L*6+kt],Gt=vt%Rn*we,Re=(vt/Rn|0)*we,D=y.length/3,Me=b(Xt,Y,Z);for(const zt of Dt.corners)y.push(g+zt[0],zt[1]?C+Rt:C+Pt,M+zt[2]),x.push(Dt.shade,Dt.shade,Dt.shade),T.push(Me),R.push((Gt+.5+zt[Dt.uv[0]]*(we-1))/un,(Re+.5+zt[Dt.uv[1]]*(we-1))/un);_.push(D,D+1,D+2,D,D+2,D+3)}continue}const k=jn[L],U=k.emissive,H=k.transparent,$=H?y:U?u:o,V=H?x:U?f:l,J=H?_:U?m:h,et=H?R:U?v:a,gt=H?T:U?null:c;for(let Rt=0;Rt<mo.length;Rt++){const kt=mo[Rt],Dt=g+kt.dir[0],Xt=C+kt.dir[1],Y=M+kt.dir[2];if(!Ua(t,n*X+Dt,Xt,r*X+Y,L))continue;const Z=Ws[L*6+Rt],ht=Z%Rn*we,Pt=(Z/Rn|0)*we,vt=$.length/3,Gt=U?1:kt.shade,Re=gt?b(Dt,Xt,Y):0;for(const D of kt.corners)$.push(g+D[0],C+D[1],M+D[2]),V.push(Gt,Gt,Gt),gt&&gt.push(Re),et.push((ht+.5+D[kt.uv[0]]*(we-1))/un,(Pt+.5+D[kt.uv[1]]*(we-1))/un);J.push(vt,vt+1,vt+2,vt,vt+2,vt+3)}}const I=this.chunkMeshes.get(e);if(I)for(const g of I)this.group.remove(g),g.geometry.dispose();const A=[],p=this.lightingMode==="sky",d=(g,M,C,L,k,U)=>{if(g.length===0)return;const H=new an;H.setAttribute("position",new xe(g,3)),H.setAttribute("color",new xe(M,3)),H.setAttribute("uv",new xe(L,2)),k&&k.length*3===g.length&&H.setAttribute("light",new xe(k,1)),H.setIndex(C),H.computeVertexNormals();const $=new tn(H,U);$.position.set(n*X,0,r*X),!p&&U!==this.matEmissive&&($.castShadow=U!==this.matTrans,$.receiveShadow=!0),this.group.add($),A.push($)};d(o,l,h,a,S?c:null,p?this.matSky:this.matOpaque),d(u,f,m,v,null,this.matEmissive),d(y,x,_,R,S?T:null,p?this.matSkyT:this.matTrans),this.chunkMeshes.set(e,A)}emitDoor(t,e,n,r,i,o,l,h,a,c,u,f,m){const v=u+h,y=f+c,x=m===en||m===He||m===Qe,_=m===nn||m===He||m===je&&l.get(v,a-1,y)===je||m===Qe&&l.get(v,a-1,y)===Qe,R=Gu(_?x?He:nn:x?en:on),T=m===je||m===Qe,b=!(fn(l.get(v-1,a,y))||fn(l.get(v+1,a,y)))&&(fn(l.get(v,a,y-1))||fn(l.get(v,a,y+1))),I=b?!fn(l.get(v-1,a,y)):!fn(l.get(v,a,y-1)),A=b?!fn(l.get(v+1,a,y)):!fn(l.get(v,a,y+1)),p=v+y&1;let d,g;p&&A?(d=1,g=1):!p&&I?(d=0,g=-1):A?(d=1,g=1):(d=0,g=-1);const M=l.doorSwing.get(v+","+y);M&&(g=M);const C=.04,L=.96,k=d?.84:.02,U=d?.98:.16,H=C,$=d?.98:.02,V=(gt,Rt,kt)=>{const Dt=t.length/3;for(let Xt=0;Xt<4;Xt++){let[Y,Z,ht]=gt[Xt];if(T){const Pt=Y-H,vt=ht-$;Y=H-g*vt,ht=$+g*Pt}t.push(b?h+ht:h+Y,a+Z,b?c+Y:c+ht),e.push(kt,kt,kt),i.push(o),r.push((R[0]+.5+Rt[Xt][0]*(we-1))/un,(R[1]+.5+Rt[Xt][1]*(we-1))/un)}n.push(Dt,Dt+1,Dt+2,Dt,Dt+2,Dt+3)},J=gt=>(gt-C)/(L-C),et=gt=>(gt-k)/(U-k);V([[C,0,U],[L,0,U],[L,1,U],[C,1,U]],[[J(C),0],[J(L),0],[J(L),1],[J(C),1]],.85),V([[C,0,k],[L,0,k],[L,1,k],[C,1,k]],[[J(L),0],[J(C),0],[J(C),1],[J(L),1]],.7),V([[L,0,k],[L,0,U],[L,1,U],[L,1,k]],[[et(k),0],[et(U),0],[et(U),1],[et(k),1]],.6),V([[C,0,k],[C,0,U],[C,1,U],[C,1,k]],[[et(U),0],[et(k),0],[et(k),1],[et(U),1]],.6),V([[C,1,k],[L,1,k],[L,1,U],[C,1,U]],[[J(C),et(k)],[J(L),et(k)],[J(L),et(U)],[J(C),et(U)]],1),V([[C,0,k],[L,0,k],[L,0,U],[C,0,U]],[[J(C),et(U)],[J(L),et(U)],[J(L),et(k)],[J(C),et(k)]],.45)}emitShape(t,e,n,r,i,o,l,h,a,c,u,f,m,v){for(const y of t){if((y.dir[0]?1:0)+(y.dir[1]?1:0)+(y.dir[2]?1:0)===1&&!Ua(h,f+a+y.dir[0],c+y.dir[1],m+u+y.dir[2],l))continue;const _=Ws[l*6+y.kind],R=_%Rn*we,T=(_/Rn|0)*we;let S=0;y.dir[0]&&(S=Math.max(S,v(a+y.dir[0],c,u))),y.dir[1]&&(S=Math.max(S,v(a,c+y.dir[1],u))),y.dir[2]&&(S=Math.max(S,v(a,c,u+y.dir[2])));const b=e.length/3;for(const I of y.pts){e.push(a+I[0],c+I[1],u+I[2]),n.push(y.sh,y.sh,y.sh),o.push(S);const[A,p]=y.uv(I);i.push((R+.5+A*(we-1))/un,(T+.5+p*(we-1))/un)}for(let I=1;I+1<y.pts.length;I++)r.push(b,b+I,b+I+1)}}addEntityMesh(t,e,n,r=.35){const i=new tn(new Zi(r,r,r),new se({color:n}));return i.position.set(...e),i.userData.eid=t,this.entityGroup.add(i),i}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(r=>r.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,r,i=14){const o=this.nextEid++,l=new tn(new ic(.14,.28,i,6,1,!0),new Wi({color:r,transparent:!0,opacity:.4,depthWrite:!1,side:Ke,fog:!1}));return l.position.set(t,e+i/2,n),l.userData.eid=o,this.entityGroup.add(l),o}addGroundRing(t,e,n,r,i=1.1){const o=this.nextEid++,l=new tn(new sc(i*.55,i,24),new Wi({color:r,transparent:!0,opacity:.7,side:Ke,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,e+.06,n),l.userData.eid=o,this.entityGroup.add(l),o}render(){this.three.render(this.scene,this.camera)}}const ft=s=>s,S_=(s,t)=>`${s.charAt(0).toUpperCase()+s.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,En=(s,t,e,n)=>ft({id:`${e}_${s}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${s}`,desc:S_(s,t),w:1,h:2,mass:1.2+t*.8,tool:{type:s,tier:t},color:n}),w_=[ft({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Zn,color:"#d4b880"}),ft({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:vn,color:"#c2a670"}),ft({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:De,color:"#736d69"}),ft({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Qs,color:"#8d8680"}),ft({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:Jn,color:"#6b5238"}),ft({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:bs,color:"#d9dbd6"}),ft({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:si,color:"#61492f"}),ft({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:Bo,color:"#a6cfe6"}),ft({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:Ss,color:"#8cc0a0"}),ft({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:Ne,color:"#858a99"}),ft({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:on,color:"#999fa8"}),ft({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:In,color:"#fff0a0"}),ft({id:"metal",name:"Iron Rod",desc:"Forged iron — salvaged from the wreck, or baked from Rock and Iron Ore at a Campfire. The backbone of every tool.",w:1,h:1,mass:1,block:zo,color:"#9aa0aa"}),ft({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:Tn,color:"#66e5f0"}),ft({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:Ze,color:"#806647"}),ft({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:sn,color:"#e67333"}),ft({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:Fi,color:"#59bfcc"}),ft({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:fi,color:"#b3956b"}),ft({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Le,color:"#8a6d3b"}),ft({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),ft({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),ft({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),ft({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:Yi,color:"#c468e8"}),ft({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),En("pickaxe",1,"wood","#a8834f"),En("pickaxe",2,"stone","#8d8680"),En("pickaxe",3,"metal","#9aa0aa"),En("shovel",1,"wood","#a8834f"),En("shovel",2,"stone","#8d8680"),En("shovel",3,"metal","#9aa0aa"),En("axe",1,"wood","#a8834f"),En("axe",2,"stone","#8d8680"),En("axe",3,"metal","#9aa0aa"),En("pickaxe",4,"alloy","#c07848"),En("shovel",4,"alloy","#c07848"),En("axe",4,"alloy","#c07848"),En("disassembler",1,"metal","#c0c8d8"),En("disassembler",2,"alloy","#c07848"),ft({id:"voidbreaker",name:"Voidbreaker",desc:"Cheat gear: every block — even Ship Hull and bedrock-hard stuff — shatters the instant you swing. There is no recipe: it only comes out of the cheat menu.",w:1,h:2,mass:2,instaBreak:!0,color:"#8a5ad6"}),ft({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),ft({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",bag:{w:4,h:5,kg:20},color:"#7a5a3a"}),ft({id:"cactus",name:"Cactus",desc:"Tall desert column. Replantable anywhere on sand or farm land; with water it fruits on its own. Break a fruit-topped one for the Prickly Pear.",w:1,h:2,mass:1.5,block:gn,color:"#3d8042"}),ft({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),ft({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),ft({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",armor:.4,color:"#8a6f4d"}),ft({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),ft({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"}),ft({id:"farmland",name:"Farm Land",desc:"Tilled ground. Melon and Wheat seeds must be planted on it; Cactus accepts sand too.",w:1,h:1,mass:1,block:Ln,color:"#573d23"}),ft({id:"seed_melon",name:"Melon Seed",desc:"Plant on Farm Land within 4 blocks of water. Loves heat (22-45 C air); stalls in the cold.",w:1,h:1,mass:.1,block:$n,color:"#c8b060"}),ft({id:"seed_wheat",name:"Wheat Seed",desc:"Plant on Farm Land within 4 blocks of water. Grows in the cool band (2-22 C) too.",w:1,h:1,mass:.1,block:Hn,color:"#d8c878"}),ft({id:"dune_melon",name:"Dune Melon",desc:"Harvested from a ripe Melon. Eat it: +30 Water, +5 Health.",w:2,h:1,mass:2,eat:{water:30,health:5},color:"#7a9a3a"}),ft({id:"wheat",name:"Desert Wheat",desc:"Cut from ripe Wheat. Too tough raw - smelt it at a Campfire into Cooked Wheat.",w:1,h:1,mass:.2,color:"#d8b048"}),ft({id:"cooked_wheat",name:"Cooked Wheat",desc:"Plain but dense. Eat it: +35 Health.",w:1,h:1,mass:.2,eat:{health:35},color:"#b8853a"}),ft({id:"wood_log",name:"Wood Log",desc:"Trunk of a Living Tree - the renewable counterpart of Dead Wood. Fuel and crafting.",w:1,h:1,mass:.5,block:kn,color:"#7a5c3a"}),ft({id:"kindling",name:"Kindling",desc:"Leaf scraps. Campfire fuel that burns fast and small.",w:1,h:1,mass:.1,color:"#9a8a5a"}),ft({id:"seed_tree",name:"Tree Seed",desc:"Plant in Dirt. Grows a Living Tree stage by stage over ~8 minutes while water stays within 6 blocks. Found in Town chests and from broken Leaves.",w:1,h:1,mass:.1,block:Yn,color:"#7fae54"}),ft({id:"bucket",name:"Bucket",desc:"Scoop a water Source with it, pour it back anywhere: moves water instead of drinking it.",w:1,h:1,mass:1,color:"#9aa0aa"}),ft({id:"bucket_full",name:"Bucket (full)",desc:"Water to pour. Right-click ground to place it as a new Source.",w:1,h:1,mass:3,color:"#3f8fe0"}),ft({id:"chest_connector",name:"Chest Connector",desc:"Steel rail between Supply Chests: links their grids into one bigger Inventory Grid. Stores nothing itself.",w:1,h:1,mass:1,block:Dr,color:"#8a744a"}),ft({id:"metal_plating",name:"Metal Plating",desc:"The ship's plated floor and skin. Same plate, same tools - disassemble it back.",w:1,h:1,mass:1.2,block:Je,color:"#9aa0ac"}),ft({id:"storm_breaker",name:"Sandstorm Breaker",desc:"A humming red pylon. Stand within 8 blocks of one and the Sandstorm loses all teeth — no scorching, no wind-thirst, no sand blast.",w:1,h:1,mass:4,block:ki,color:"#c04838"}),ft({id:"door_inner",name:"Inside Door",desc:"Interior bulkhead door. It divides rooms for sight and movement - and never insulates: in temperature terms it is just air, open or closed.",w:1,h:1,mass:2,block:en,color:"#82868e"}),ft({id:"bed",name:"Bed",desc:"Curtained sleep for 8 game hours, then the cool morning. One long sleep every 8 hours; press E at the bed. Takes a 2x1 floor span.",w:2,h:1,mass:6,block:rn,color:"#a84a42"}),ft({id:"iron_ore",name:"Iron Ore",desc:"Dense ore from Cave walls. Smelt it at a Campfire: one ore bakes two Iron Rods.",w:1,h:1,mass:1.6,block:kr,color:"#9e8468"}),ft({id:"copper_ore",name:"Copper Ore",desc:"Reddened Cave stone. Smelts into Copper Rods - the heart of tier-4 Alloy gear.",w:1,h:1,mass:1.6,block:Ur,color:"#b86b42"}),ft({id:"alabaster",name:"Alabaster",desc:"Pale Cave stone. Cuts soft, decorates well, and takes a Lamp's light like nothing else.",w:1,h:1,mass:1.2,block:nr,color:"#dcd5bd"}),ft({id:"cobalt_ore",name:"Cobalt Ore",desc:"Bluish ore of the deepest stone (Metal Pickaxe or better). The Ship's repair hangs on it.",w:1,h:1,mass:2.2,block:Nr,color:"#5c74a8"}),ft({id:"copperrod",name:"Copper Rod",desc:"Smelted from Copper Ore. Never a tool by itself - always a component of better things.",w:1,h:1,mass:1,color:"#c07848"}),ft({id:"cobaltrod",name:"Cobalt Rod",desc:"Smelted from Cobalt Ore, found only in the deep underground. One Thruster Nozzle needs one.",w:1,h:1,mass:1.4,color:"#6a84bc"}),ft({id:"backpack2",name:"Backpack II",desc:"The big pack: inventory grid grows to 5x6, weight limit +40 kg. Reptile-hide stitching.",w:2,h:2,mass:3.5,equip:"backpack",bag:{w:5,h:6,kg:40},color:"#6a4c30"}),ft({id:"body_regulator",name:"Body Heat Regulator",desc:"Worn in the Regulator slot: pins your Heat toward neutral while a Coolant Cell lasts. It regulates you - never a room.",w:2,h:2,mass:3,equip:"regulator",color:"#4fa8c8"}),ft({id:"coolant_cell",name:"Coolant Cell",desc:"Consumable fuel for the Body Heat Regulator: one cell carries about 2 game days of regulation. Spent cells are gone.",w:1,h:1,mass:.8,color:"#7fd4e8"}),ft({id:"head_lantern",name:"Head Lantern",desc:"The Portable Light: worn in the Light slot, toggled with T. Burns fuel charges (5 max) - refill at a Campfire or load Kindling.",w:1,h:1,mass:1,equip:"light",fuel:5,color:"#ffd76a"}),ft({id:"chitin",name:"Chitin",desc:"Dust Scorpion armor plate. Tough, thin, and very hard to burn.",w:1,h:1,mass:.3,color:"#6a4a3a"}),ft({id:"stinger",name:"Stinger",desc:"A Dust Scorpion's barb. Tipped onto a blade, it makes the deadliest weapon in the desert.",w:1,h:1,mass:.2,color:"#a84a3a"}),ft({id:"wurm_hide",name:"Wurm Hide",desc:"Sand Wurm skin - heat-tempered plating for the toughest Body gear.",w:1,h:2,mass:1.2,color:"#8a6a48"}),ft({id:"vulture_raw",name:"Vulture Fillet (raw)",desc:"Raw meat off a Sand Vulture. Cook it at a Campfire before eating.",w:1,h:1,mass:.7,color:"#7a5a4a"}),ft({id:"vulture_cooked",name:"Roasted Fillet",desc:"Cooked Vulture meat. Eat it: +25 Health.",w:1,h:1,mass:.6,eat:{health:25},color:"#b0764a"}),ft({id:"tortoise_shell",name:"Thornback Shell",desc:"The spiked dome of a Thornback Tortoise. Three plate a Cuirass; Traders always want them.",w:2,h:2,mass:6,color:"#5f5a4e"}),ft({id:"fennec_pelt",name:"Fennec Pelt",desc:"Soft pale fur off a Fennec Fox. Worth a real price at any Trader.",w:1,h:2,mass:.5,color:"#c99a62"}),ft({id:"tortoise_cuirass",name:"Thornback Cuirass",desc:"Body-slot breastplate of layered Shell and Metal: shrugs off 48% of every blow. Heavy going.",w:2,h:2,mass:9,equip:"body",armor:.48,color:"#6a6255"}),ft({id:"wurmsuit",name:"Wurmsuit",desc:"Body-slot armour of Wurm Hide and Chitin: shrugs off 45% of every blow, and the Chitin turns the Sandstorm aside — blast and wind-thirst bite at a quarter. Warmer against the cold night too.",w:2,h:2,mass:5,equip:"body",armor:.45,stormResist:!0,color:"#7a5c40"}),ft({id:"stinger_blade",name:"Stinger Blade",desc:"A Metal Sword tipped with a Scorpion Stinger: hits harder and farther than anything above ground.",w:1,h:2,mass:2.4,weapon:{reach:5.2,dmg:12},color:"#c9b048"}),ft({id:"curved_hull",name:"Curved Hull Plating",desc:"Hull Plating shaped as an elbow - insulates exactly like flat plating, and rounds any corner you build.",w:1,h:1,mass:2,block:yi,color:"#7d8390"}),ft({id:"hull_slope",name:"Hull Slope",desc:"A beveled hull block for spines, roofs and shoulders. Same insulation, rounder silhouette.",w:1,h:1,mass:2,block:Mi,color:"#767d88"}),ft({id:"thruster_nozzle",name:"Thruster Nozzle",desc:"Cobalt-and-Copper replacement engine part. Press E at a Broken Thruster to wake it. All four wake the Ship.",w:1,h:2,mass:3,color:"#c88a50"})],Nt=Object.fromEntries(w_.map(s=>[s.id,s])),Qn={};for(const s of Object.values(Nt))s.block!==void 0&&(Qn[s.block]=s.id);Qn[nn]="door";Qn[He]="door_inner";Qn[_n]="bed";Qn[ai]="dirt";Qn[bi]="kindling";Qn[$n]="seed_melon";Qn[Pn]="dune_melon";Qn[Hn]="seed_wheat";Qn[dn]="wheat";Qn[mi]="cactus";function Bn(s){const t=Nt[s.itemId];return s.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class Fa{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const r=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const i of r)this.addItem(i.itemId,1)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=Nt[e.itemId].mass;return t}occupied(t,e,n){for(const r of this.slots){if(r===n)continue;const i=Bn(r);if(t>=r.x&&t<r.x+i.w&&e>=r.y&&e<r.y+i.h)return r}return null}fits(t,e,n,r,i){if(t<0||e<0||t+n>this.w||e+r>this.h)return!1;for(let o=0;o<r;o++)for(let l=0;l<n;l++)if(this.occupied(t+l,e+o,i))return!1;return!0}move(t,e,n){const r=Bn(t);return e===t.x&&n===t.y?!0:this.fits(e,n,r.w,r.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=Bn(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addItem(t,e=1){const n=Nt[t],r=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let i=0;i<e;i++){let o=!1;for(const[l,h,a]of r){for(let c=0;c<=this.h-h&&!o;c++)for(let u=0;u<=this.w-l&&!o;u++){let f=!0;for(let m=0;m<h&&f;m++)for(let v=0;v<l&&f;v++)this.occupied(u+v,c+m)&&(f=!1);f&&(this.slots.push(a?{itemId:t,x:u,y:c,rot:!0}:{itemId:t,x:u,y:c}),o=!0)}if(o)break}if(!o)return e-i}return 0}removeItem(t,e=1){let n=0;for(let r=this.slots.length-1;r>=0&&n<e;r--)this.slots[r].itemId===t&&(this.slots.splice(r,1),n++);return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&e++;return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const go={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]},scorpion:{kind:"scorpion",name:"Dust Scorpion",hp:20,speed:1.9,aggroR:3.5,fleeR:0,biteDmg:7,biteCd:2.2,hitR:.6,height:.5,drops:[{itemId:"chitin",count:1},{itemId:"stinger",count:1}],dropChance:[1,.3]},wurm:{kind:"wurm",name:"Sand Wurm",hp:45,speed:1,aggroR:7,fleeR:0,biteDmg:12,biteCd:2.5,hitR:.8,height:.9,drops:[{itemId:"wurm_hide",count:2},{itemId:"chitin",count:1}],dropChance:[1,.5]},trader:{kind:"trader",name:"Trader",hp:9999,speed:0,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.5,height:1.8,drops:[]},vulture:{kind:"vulture",name:"Sand Vulture",hp:14,speed:2.6,aggroR:5,fleeR:8,biteDmg:5,biteCd:2.2,hitR:.55,height:.9,drops:[{itemId:"vulture_raw",count:1},{itemId:"vulture_raw",count:1}],dropChance:[1,.5]},tortoise:{kind:"tortoise",name:"Thornback Tortoise",hp:40,speed:.7,aggroR:0,fleeR:0,biteDmg:0,biteCd:0,hitR:.9,height:.8,drops:[{itemId:"tortoise_shell",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.4]},fennec:{kind:"fennec",name:"Fennec Fox",hp:6,speed:4.2,aggroR:0,fleeR:9,biteDmg:0,biteCd:0,hitR:.4,height:.45,drops:[{itemId:"fennec_pelt",count:1},{itemId:"rat_raw",count:1}],dropChance:[1,.3]}},E_=new Zi(1,1,1);function T_(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ji(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");s(e,T_(5370855));const n=new wu(t);return n.magFilter=n.minFilter=Gn,n.generateMipmaps=!1,n.colorSpace=Cn,n}function A_(){return Ji((s,t)=>{s.fillStyle="#c8a76d",s.fillRect(0,0,64,64);for(let n=0;n<420;n++){const r=.5+(t()-.5)*.22;s.fillStyle=r>.5?"#d4b781":"#b89359",s.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let r=0;r<9;r++){const i=5-Math.abs(r-4);s.fillStyle="#6f5230",s.fillRect(32-i,n+r,i*2,1),s.fillStyle="#8a6a3f",s.fillRect(32-i+1,n+r,Math.max(1,i*2-2),1)}s.fillStyle="#a9884f",s.fillRect(10+(t()*4|0),n+3,3,2),s.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)s.fillStyle=n>=56?"#e9dab1":"#d8c494",s.fillRect(0,n,64,1);for(let n=0;n<40;n++)s.fillStyle="#ddcba0",s.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function R_(){return Ji((s,t)=>{s.fillStyle="#c9a878",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#ddc295":"#a9854f",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)s.fillStyle="#8a6a3c",s.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)s.fillStyle=e>=54?"#f2ead9":"#e2d4ba",s.fillRect(0,e,64,1);s.fillStyle="#efe6d2",s.beginPath(),s.arc(10,12,8,0,Math.PI*2),s.fill(),s.fillStyle="#6b4e2c",s.fillRect(8,10,4,4)})}function C_(){return Ji((s,t)=>{s.fillStyle="#a4552e",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#b56a3c":"#8f4526",s.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[6,18,30,42])s.fillStyle="#6e3018",s.fillRect(0,e,64,2),s.fillStyle="#c47a4a",s.fillRect(0,e+2,64,1);s.fillStyle="#8a3f20",s.fillRect(30,0,4,50);for(let e=0;e<40;e++)s.fillStyle="#b56a3c",s.fillRect(30+(t()*4|0),t()*50|0,1,1);for(let e=52;e<64;e++)s.fillStyle=e>=56?"#e3cfa8":"#c9ae83",s.fillRect(0,e,64,1)})}function I_(){return Ji((s,t)=>{s.fillStyle="#c2a266",s.fillRect(0,0,64,64);for(let e=0;e<620;e++)s.fillStyle=t()>.5?"#d3b77e":"#ab8a52",s.fillRect(t()*64|0,t()*64|0,1,1);for(const e of[5,17,29,41]){s.fillStyle="#7d5f36",s.fillRect(0,e,64,3),s.fillStyle="#96744499";for(let n=0;n<64;n+=4)s.fillRect(n,e+3,2,1)}for(let e=54;e<64;e++)s.fillStyle=e>=58?"#e6d6ac":"#d2bf94",s.fillRect(0,e,64,1)})}function P_(){return Ji((s,t)=>{s.fillStyle="#a8906a",s.fillRect(0,0,64,64);for(let e=0;e<640;e++)s.fillStyle=t()>.5?"#b9a179":"#8f7854",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<70;e++)s.fillStyle="#75603f",s.fillRect(t()*64|0,t()*50|0,2,4);for(let e=0;e<6;e++)s.fillStyle=e>=3?"#c9b68e":"#b8a37b",s.fillRect(0,e,64,1)})}function L_(){return Ji((s,t)=>{s.fillStyle="#77744f",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#86825c":"#65613f",s.fillRect(t()*64|0,t()*64|0,1,1);s.fillStyle="#4c4930";for(const e of[10,31,52])s.fillRect(e,0,2,64);for(const e of[12,33,54])s.fillRect(0,e,64,2);for(const e of[16,37])for(const n of[3,22,43])s.fillStyle="#8f8b63",s.fillRect(e,n,11,7)})}function D_(){return Ji((s,t)=>{s.fillStyle="#d8bd8e",s.fillRect(0,0,64,64);for(let e=0;e<700;e++)s.fillStyle=t()>.5?"#e6cfa6":"#c2a271",s.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<8;e++)s.fillStyle=e>=4?"#b18f5c":"#a68351",s.fillRect(0,e,64,1);for(let e=54;e<64;e++)s.fillStyle=e>=58?"#f0e4c8":"#e3d3ac",s.fillRect(0,e,64,1)})}function k_(){return Ji((s,t)=>{s.fillStyle="#27474a",s.fillRect(0,0,64,64);for(let e=0;e<520;e++)s.fillStyle=t()>.5?"#2e5254":"#1f3b3e",s.fillRect(t()*64|0,t()*64|0,1,2);s.fillStyle="#5c2e46",s.fillRect(0,0,64,8),s.fillRect(0,46,64,8),s.fillStyle="#b99a5e",s.fillRect(0,8,64,1),s.fillRect(0,45,64,1);for(let e=0;e<34;e++)s.fillStyle="#6f4a5c",s.fillRect(t()*64|0,16+(t()*26|0),2,2)})}let Oa=null,Ba=null,za=null,Ha=null,Ga=null,Va=null,Wa=null,qa=null;function U_(){return Oa||(Oa={body:new se({map:A_()}),ridge:new se({color:7295536}),eye:new se({color:1445898})}),Oa}function N_(){return Ba||(Ba={fur:new se({map:R_()}),pale:new se({color:15260868}),dark:new se({color:6045731}),pink:new se({color:14196896})}),Ba}function F_(){return za||(za={shell:new se({map:C_()}),claw:new se({color:8272414}),stinger:new se({color:5579793}),eye:new se({color:1445898})}),za}function O_(){return Ha||(Ha={hide:new se({map:I_()}),ridge:new se({color:8216374}),eye:new se({color:1445898})}),Ha}function B_(){return Ga||(Ga={plumage:new se({map:P_()}),skin:new se({color:13077884}),feather:new se({color:6245427}),beak:new se({color:3486778}),eye:new se({color:1445898})}),Ga}function z_(){return Va||(Va={shell:new se({map:L_()}),skin:new se({color:9669214}),thorn:new se({color:5722426}),beak:new se({color:11575918}),eye:new se({color:1445898})}),Va}function H_(){return Wa||(Wa={fur:new se({map:D_()}),pale:new se({color:15721158}),dark:new se({color:7032364}),pink:new se({color:14196896})}),Wa}function G_(){return qa||(qa={robe:new se({map:k_()}),sash:new se({color:10246707}),skin:new se({color:13079398}),scarf:new se({color:14207920}),pouch:new se({color:7228204}),coin:new se({color:13216079}),eye:new se({color:1445898})}),qa}function lt(s,t,e,n,r,i,o){const l=new tn(E_,n);return l.scale.set(s,t,e),l.position.set(r,i,o),l}function V_(){const s=U_(),t=new le,e=[],n=[],r=[.36,.13,-.1,-.33,-.54,-.72],i=[.26,.27,.26,.23,.18,.12],o=[.22,.23,.22,.2,.16,.11],l=.24;for(let u=0;u<r.length;u++){const f=Math.sin(u*.8)*.05,m=lt(i[u],o[u],l,s.body,f,o[u]/2+.005,r[u]);e.push({mesh:m,bx:f,w:i[u],h:o[u],d:l}),n.push({mesh:lt(i[u]*.3,.02,l*.92,s.ridge,f,o[u]+.008,r[u]),w:i[u]}),t.add(m,n[u].mesh)}const h=new le;h.position.set(Math.sin(0)*.05,.095+.005,.6);const a=lt(.27,.19,.27,s.body,0,.095,0);return h.add(a),h.add(lt(.035,.035,.03,s.eye,-.115,.14,.11)),h.add(lt(.035,.035,.03,s.eye,.115,.14,.11)),t.add(h),{group:t,animate:(u,f)=>{const m=Math.max(0,Math.min(1,f)),v=.015+.075*m,y=u*(3.2+2.6*m);for(let x=0;x<e.length;x++){const _=e[x],R=Math.sin(y-x*.85)*v;_.mesh.position.x=_.bx+R,_.mesh.rotation.y=-R*1.4;const T=1+Math.sin(u*1.9)*.03*(1-m*.6);_.mesh.scale.set(_.w*T,_.h,_.d);const S=n[x];S.mesh.position.x=_.mesh.position.x,S.mesh.rotation.y=_.mesh.rotation.y,S.mesh.scale.x=S.w*.3*T}h.position.x=Math.sin(y+.85)*v*.5,h.rotation.y=Math.sin(u*(2.2+2.4*m))*(.06+.14*m)}}}function W_(){const s=N_(),t=new le,e=new le;t.add(e);const n=lt(.22,.26,.34,s.fur,0,.26,-.02);e.add(n);const r=new le;r.position.set(0,.31,.19),r.add(lt(.15,.14,.15,s.fur,0,0,.05)),r.add(lt(.045,.035,.04,s.pink,0,-.02,.13)),r.add(lt(.028,.028,.02,s.dark,-.062,.03,.1)),r.add(lt(.028,.028,.02,s.dark,.062,.03,.1)),e.add(r);const i=lt(.05,.12,.025,s.fur,-.075,.41,.16),o=lt(.05,.12,.025,s.fur,.075,.41,.16);i.rotation.z=.15,o.rotation.z=-.15,e.add(i,o);const l=lt(.09,.14,.11,s.fur,-.12,.14,-.06),h=lt(.09,.14,.11,s.fur,.12,.14,-.06),a=lt(.07,.05,.22,s.pale,-.13,.028,.02),c=lt(.07,.05,.22,s.pale,.13,.028,.02);e.add(l,h,a,c),e.add(lt(.035,.035,.07,s.pale,-.08,.11,.15)),e.add(lt(.035,.035,.07,s.pale,.08,.11,.15));const u=new le;return u.position.set(0,.16,-.19),u.add(lt(.04,.04,.24,s.fur,0,0,-.12)),u.add(lt(.032,.032,.22,s.fur,0,-.045,-.34)),u.add(lt(.07,.055,.11,s.dark,0,-.075,-.5)),e.add(u),{group:t,animate:(m,v)=>{const y=Math.max(0,Math.min(1,v)),x=Math.abs(Math.sin(m*(2.6+2.4*y)));e.position.y=x*.13*y+Math.sin(m*1.7)*.004,n.scale.y=.26*(1+Math.sin(m*1.9)*.03*(1-y)),a.rotation.x=c.rotation.x=-.55*x*y,l.rotation.x=h.rotation.x=-.35*x*y,u.rotation.y=Math.sin(m*(1.8+3.4*y))*(.1+.3*y),u.rotation.x=-.12-.18*y+Math.sin(m*(2.6+2.4*y))*.06*y;const _=Math.max(0,Math.sin(m*6.3))**8*(1-y);i.rotation.z=.15+_*.25,o.rotation.z=-.15-Math.max(0,Math.sin(m*6.3+2.1))**8*(1-y)*.25,r.rotation.x=-.1*x*y+Math.sin(m*1.3)*.03*(1-y)}}}const q_=new Fo(1,14,10);function ys(s,t,e,n,r,i,o){const l=new tn(q_,n);return l.scale.set(s,t,e),l.position.set(r,i,o),l}function X_(){const s=F_(),t=new le,e=new le;t.add(e);const n=.09,r=lt(.46,.14,.34,s.shell,0,n+.07,.02);e.add(r);const i=[],o=[-.26,-.45,-.62],l=[.4,.34,.26],h=[.13,.12,.1];for(let T=0;T<o.length;T++){const S=lt(l[T],h[T],.2,s.shell,0,n+h[T]/2,o[T]);i.push({mesh:S,bx:0,w:l[T],h:h[T],d:.2}),e.add(S)}const a=new le;a.position.set(0,n+.045,.25),a.add(lt(.26,.09,.13,s.shell,0,0,0)),a.add(lt(.03,.03,.02,s.eye,-.08,.05,.05)),a.add(lt(.03,.03,.02,s.eye,.08,.05,.05)),e.add(a);const c=[],u=[];for(const T of[-1,1]){const S=new le;S.position.set(T*.24,n+.04,.14),S.rotation.y=T*.5,S.add(lt(.075,.055,.2,s.shell,0,0,.1)),S.add(lt(.07,.05,.1,s.claw,0,0,.24));const b=lt(.025,.022,.13,s.claw,0,.026,.33),I=lt(.025,.022,.13,s.claw,0,-.026,.33);S.add(b,I),c.push({up:b,dn:I}),u.push(S),e.add(S)}const f=[];for(const T of[-1,1])for(let S=0;S<4;S++){const b=lt(.03,.11,.03,s.shell,T*.3,n*.5,.12-S*.14);b.rotation.z=-T*.55,f.push(b),e.add(b)}const m=new le;m.position.set(0,n+.1,-.7),m.rotation.x=.5,m.add(lt(.16,.16,.22,s.shell,0,0,-.11));const v=new le;v.position.set(0,.04,-.22),v.rotation.x=.7,v.add(lt(.13,.13,.18,s.shell,0,0,-.09));const y=new le;y.position.set(0,.03,-.18),y.rotation.x=.8,y.add(lt(.1,.1,.15,s.shell,0,0,-.075));const x=ys(.22,.2,.24,s.stinger,0,.06,-.22),_=lt(.035,.035,.13,s.stinger,0,.16,-.3);return _.rotation.x=.5,y.add(x,_),v.add(y),m.add(v),e.add(m),{group:t,animate:(T,S)=>{const b=Math.max(0,Math.min(1,S));e.position.y=Math.abs(Math.sin(T*(5.5+5*b)))*.012*b;const I=T*(6+6*b);for(let d=0;d<f.length;d++){const g=d%4,M=d<4?0:Math.PI;f[d].rotation.x=Math.sin(I+g*1.7+M)*.5*b}const A=1+Math.sin(T*1.6)*.03*(1-b*.5);for(const d of i)d.mesh.scale.set(d.w*A,d.h,d.d);for(let d=0;d<2;d++){const g=u[d],M=c[d];g.rotation.z=Math.sin(I+d*Math.PI)*.25*b;const C=.06+Math.abs(Math.sin(T*(1.4+1.6*b)+d*1.3))*(.08+.14*b);M.up.rotation.x=-C,M.dn.rotation.x=C}const p=.06+.14*b;m.rotation.y=Math.sin(T*(1.1+1.4*b))*p,y.rotation.x=.8+Math.sin(T*1.7)*.08,a.rotation.y=Math.sin(T*1.5)*.05*(1-b*.5)}}}function $_(){const s=O_(),t=new le,e=[],n=[],r=[-.95,-.45,.1,.62],i=[.34,.4,.44,.42],o=[.3,.37,.42,.4],l=[.4,.45,.48,.45];for(let c=0;c<r.length;c++){const u=o[c]+.01,f=ys(i[c]*2,o[c]*2,l[c]*2,s.hide,0,u,r[c]);e.push({mesh:f,bx:0,w:i[c]*2,h:o[c]*2,d:l[c]*2}),n.push({mesh:lt(i[c],.06,l[c]*.8,s.ridge,0,u+o[c]-.04,r[c]),w:i[c]}),t.add(f,n[c].mesh)}const h=new le;return h.position.set(0,.36,1.15),h.add(ys(.72,.68,.76,s.hide,0,0,0)),h.add(lt(.05,.05,.04,s.eye,-.19,.12,.26)),h.add(lt(.05,.05,.04,s.eye,.19,.12,.26)),t.add(h),{group:t,animate:(c,u)=>{const f=Math.max(0,Math.min(1,u)),m=.02+.11*f,v=c*(1.5+1.5*f);for(let y=0;y<e.length;y++){const x=e[y],_=Math.sin(v-y*.8)*m;x.mesh.position.x=x.bx+_,x.mesh.rotation.y=-_*1.1;const R=1+Math.sin(c*1.1-y*.6)*.03;x.mesh.scale.set(x.w*R,x.h,x.d*R);const T=n[y];T.mesh.position.x=x.mesh.position.x,T.mesh.rotation.y=x.mesh.rotation.y,T.mesh.scale.x=T.w*R}h.position.x=Math.sin(v+.8)*m*.7,h.rotation.y=Math.sin(c*(1.2+1.4*f))*(.07+.13*f)}}}function Y_(){const s=B_(),t=new le,e=new le;t.add(e);const n=ys(.52,.5,.68,s.plumage,0,.44,-.06);n.rotation.x=-.12,e.add(n);const r=new le;r.position.set(0,.6,.2),r.rotation.x=.25,r.add(lt(.13,.22,.13,s.skin,0,.09,0)),r.add(lt(.26,.09,.26,s.plumage,0,-.02,-.01));const i=new le;i.position.set(0,.22,.02),i.add(ys(.19,.17,.2,s.skin,0,0,.03)),i.add(lt(.09,.09,.13,s.beak,0,-.01,.14));const o=lt(.05,.07,.06,s.beak,0,-.06,.2);o.rotation.x=.5,i.add(o),i.add(lt(.03,.03,.02,s.eye,-.08,.04,.1)),i.add(lt(.03,.03,.02,s.eye,.08,.04,.1)),r.add(i),e.add(r);const l=[];for(const c of[-1,1]){const u=new le;u.position.set(c*.26,.52,-.04),u.rotation.z=c*.35,u.add(lt(.08,.34,.5,s.plumage,0,-.08,0)),u.add(lt(.05,.28,.42,s.feather,c*.04,-.2,-.06)),l.push(u),e.add(u)}const h=[];for(const c of[-1,1]){const u=lt(.09,.2,.09,s.feather,c*.13,.1,.02);h.push(u),e.add(u,lt(.1,.04,.16,s.beak,c*.13,.02,.08))}return{group:t,animate:(c,u)=>{const f=Math.max(0,Math.min(1,u));e.position.y=Math.sin(c*1.6)*.008+Math.abs(Math.sin(c*(3+2.6*f)))*.02*f,e.rotation.x=.12*f+Math.sin(c*1.3)*.012*(1-f);for(let v=0;v<2;v++){const y=v===0?-1:1,x=Math.sin(c*(4.5+3*f)+v*.9)*(.05+.22*f);l[v].rotation.z=y*(.35+x)}i.rotation.x=-.18+.28*f+Math.sin(c*1.1)*.04*(1-f);const m=c*(3.4+3*f);for(let v=0;v<h.length;v++)h[v].rotation.x=Math.sin(m+v*Math.PI)*.4*f}}}function K_(){const s=z_(),t=new le,e=new le;t.add(e);const n=.14;e.add(ys(1.05,.75,1.15,s.shell,0,n+.31,-.02));for(const l of[.9,1.4,1.9,2.4,2.9,Math.PI,3.3,3.8,4.3,4.8,5.3]){const h=lt(.09,.16,.09,s.thorn,Math.sin(l)*.52,n+.44,Math.cos(l)*.57-.02);h.rotation.z=-Math.sin(l)*.45,h.rotation.x=Math.cos(l)*.45,e.add(h)}const r=[];for(const l of[-1,1])for(const h of[.33,-.35]){const a=lt(.16,n+.06,.18,s.skin,l*.32,(n+.06)/2,h);r.push(a),e.add(a)}const i=new le;return i.position.set(0,n+.17,.66),i.add(lt(.2,.17,.18,s.skin,0,0,0)),i.add(lt(.12,.09,.1,s.beak,0,-.03,.13)),i.add(lt(.035,.035,.02,s.eye,-.08,.04,.09)),i.add(lt(.035,.035,.02,s.eye,.08,.04,.09)),e.add(i),e.add(lt(.09,.09,.16,s.skin,0,n+.12,-.66)),{group:t,animate:(l,h)=>{const a=Math.max(0,Math.min(1,h));e.position.y=Math.abs(Math.sin(l*(1.4+1.2*a)))*.008*a;const c=l*(1.6+1.4*a);for(let f=0;f<r.length;f++)r[f].rotation.x=Math.sin(c+f%2*Math.PI+(f<2?0:.6))*.3*a;const u=Math.sin(l*.9);i.position.z=.66+u*.05*(1-a)+.05*a,i.rotation.x=.05*a+u*.03*(1-a)}}}function j_(){const s=H_(),t=new le,e=new le;t.add(e),e.add(lt(.2,.2,.36,s.fur,0,.24,-.02));const n=new le;n.position.set(0,.3,.24),n.add(lt(.16,.15,.14,s.fur,0,0,0)),n.add(lt(.07,.06,.13,s.pale,0,-.04,.12)),n.add(lt(.03,.025,.02,s.dark,-.06,.03,.075)),n.add(lt(.03,.025,.02,s.dark,.06,.03,.075)),n.add(lt(.028,.022,.02,s.pink,0,-.03,.185)),e.add(n);const r=lt(.09,.2,.025,s.fur,-.09,.48,.18),i=lt(.09,.2,.025,s.fur,.09,.48,.18),o=lt(.055,.13,.02,s.pink,-.09,.47,.196),l=lt(.055,.13,.02,s.pink,.09,.47,.196);r.rotation.z=.28,i.rotation.z=-.28,e.add(r,i,o,l);const h=[];for(const u of[-1,1])for(const f of[.13,-.15]){const m=lt(.05,.16,.05,s.fur,u*.08,.08,f);h.push(m),e.add(m)}const a=new le;return a.position.set(0,.25,-.2),a.add(lt(.06,.06,.24,s.fur,0,-.02,-.12)),a.add(lt(.09,.09,.12,s.pale,0,-.03,-.3)),e.add(a),{group:t,animate:(u,f)=>{const m=Math.max(0,Math.min(1,f));e.position.y=Math.abs(Math.sin(u*(4+3*m)))*.02*m+Math.sin(u*2.2)*.003;const v=u*(6+4*m);for(let _=0;_<h.length;_++)h[_].rotation.x=Math.sin(v+_%2*Math.PI+(_<2?0:.7))*.55*m;a.rotation.y=Math.sin(u*(2.2+3.2*m))*(.14+.22*m),a.rotation.x=-.1+.25*m+Math.sin(u*(2.6+2.4*m))*.05*m;const y=Math.max(0,Math.sin(u*5.7))**8*(1-m),x=Math.max(0,Math.sin(u*5.7+2.3))**8*(1-m);r.rotation.z=.28+y*.3,i.rotation.z=-.28-x*.3,n.rotation.x=Math.sin(u*1.6)*.04*(1-m)-.06*m}}}function Z_(){const s=G_(),t=new le,e=new le;t.add(e),e.add(lt(.62,1.42,.42,s.robe,0,.71,0)),e.add(lt(.72,.18,.5,s.robe,0,.09,0)),e.add(lt(.66,.14,.46,s.sash,0,.86,0));for(const i of[-1,1])e.add(lt(.14,.8,.16,s.robe,i*.38,.8,.02)),e.add(lt(.1,.1,.1,s.skin,i*.16,.7,.18));e.add(ys(.2,.22,.16,s.pouch,.28,.82,.24)),e.add(lt(.06,.05,.05,s.coin,.28,.94,.24));const n=new le;return n.position.set(0,1.56,0),n.add(lt(.26,.26,.24,s.skin,0,0,0)),n.add(lt(.3,.1,.28,s.scarf,0,.15,0)),n.add(lt(.3,.09,.3,s.scarf,0,.21,-.05)),n.add(lt(.3,.1,.3,s.scarf,0,-.16,-.02)),n.add(lt(.04,.04,.03,s.eye,-.07,.02,.12)),n.add(lt(.04,.04,.03,s.eye,.07,.02,.12)),e.add(n),{group:t,animate:(i,o)=>{e.rotation.z=Math.sin(i*.6)*.01,n.position.y=1.56+Math.sin(i*.9)*.012,n.rotation.y=Math.sin(i*.35)*.08}}}function J_(s){switch(s){case"snake":return V_();case"rat":return W_();case"scorpion":return X_();case"wurm":return $_();case"trader":return Z_();case"vulture":return Y_();case"tortoise":return K_();case"fennec":return j_()}}const Xa=[{want:[{itemId:"rock",count:6}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"sand",count:8}],give:[{itemId:"glass",count:2}]},{want:[{itemId:"cactus",count:3}],give:[{itemId:"canister_empty",count:1}]},{want:[{itemId:"prickly_pear",count:5}],give:[{itemId:"canister_full",count:1}]},{want:[{itemId:"snake_skin",count:2}],give:[{itemId:"coolant_cell",count:1}]},{want:[{itemId:"wurm_hide",count:1}],give:[{itemId:"cobaltrod",count:2}]},{want:[{itemId:"chitin",count:4}],give:[{itemId:"catalyst",count:1}]},{want:[{itemId:"metal",count:4}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"fennec_pelt",count:2}],give:[{itemId:"metal",count:1}]},{want:[{itemId:"tortoise_shell",count:1}],give:[{itemId:"canister_full",count:2}]},{want:[{itemId:"deadwood",count:5}],give:[{itemId:"adobe",count:3}]},{want:[{itemId:"rat_raw",count:4}],give:[{itemId:"prickly_pear",count:3}]},{want:[{itemId:"stinger",count:1}],give:[{itemId:"copperrod",count:2}]},{want:[{itemId:"alabaster",count:4}],give:[{itemId:"glass",count:2}]}];function Q_(s,t,e,n){const r=[],i=new Set;for(let o=0;o<5;o++){let l=Math.floor(mt(t+o*7,e-o*13,s+n*101+317)*Xa.length);for(;i.has(l);)l=(l+1)%Xa.length;i.add(l),r.push(Xa[l])}return r}const Vu=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"alloy_pickaxe",count:1,needs:{metal:2,copperrod:2,deadwood:1},bench:!0},{out:"alloy_shovel",count:1,needs:{metal:2,copperrod:2,deadwood:1},bench:!0},{out:"alloy_axe",count:1,needs:{metal:2,copperrod:2,deadwood:1},bench:!0},{out:"alloy_disassembler",count:1,needs:{metal:3,copperrod:2,rock:2},bench:!0},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"backpack2",count:1,needs:{deadwood:10,metal:4,snake_skin:2},bench:!0},{out:"wurmsuit",count:1,needs:{wurm_hide:3,chitin:1},bench:!0},{out:"tortoise_cuirass",count:1,needs:{tortoise_shell:3,metal:1},bench:!0},{out:"stinger_blade",count:1,needs:{metal:2,stinger:1,deadwood:1},bench:!0},{out:"body_regulator",count:1,needs:{metal:4,copperrod:2,cobaltrod:1,catalyst:1},bench:!0},{out:"coolant_cell",count:1,needs:{salt:2,canister_empty:1,copperrod:1},bench:!0},{out:"head_lantern",count:1,needs:{metal:1,glass:1,copperrod:1,deadwood:1},bench:!0},{out:"curved_hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"hull_slope",count:2,needs:{metal:2,sand:2},bench:!0},{out:"thruster_nozzle",count:1,needs:{cobaltrod:1,copperrod:2,metal:1},bench:!0},{out:"sword",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},bench:!0},{out:"reptile_armor",count:1,needs:{snake_skin:3},bench:!0},{out:"farmland",count:1,needs:{dirt:1},bench:!1},{out:"deadwood",count:2,needs:{wood_log:1},bench:!1},{out:"chest_connector",count:1,needs:{deadwood:2,metal:1},bench:!1},{out:"metal_plating",count:1,needs:{metal:1},bench:!1},{out:"door_inner",count:1,needs:{metal:1},bench:!0},{out:"storm_breaker",count:1,needs:{metal:2,glass:1},bench:!0},{out:"bucket",count:1,needs:{metal:2},bench:!0},{out:"bed",count:1,needs:{deadwood:3,snake_skin:2},bench:!0}],Wu=[{in:"sand",out:"glass"},{in:"farmland",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"metal"},{in:"rat_raw",out:"rat_cooked"},{in:"vulture_raw",out:"vulture_cooked"},{in:"wheat",out:"cooked_wheat"},{in:"iron_ore",out:"metal",n:2},{in:"copper_ore",out:"copperrod",n:2},{in:"cobalt_ore",out:"cobaltrod",n:2}];function qu(s,t){return Object.entries(t.needs).every(([e,n])=>s.has(e,n))}function tv(s,t){if(!qu(s,t))return null;for(const[e,n]of Object.entries(t.needs))s.removeItem(e,n);return s.addItem(t.out,t.count)}const gi=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"farm",kind:"farm",title:"Green Thumbs",desc:"Till sand with a shovel, plant a seed near water, and harvest one ripe crop.",goal:1,reward:{item:"seed_melon",n:2}},{id:"supplies",kind:"supplies",title:"The Dwellers' Leftovers",desc:"The desert was lived in before you. Reach a Town and open a Supply Chest — the first chest of a cluster holds the loot.",goal:1,reward:{item:"canister_full",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it right next to a Save Beacon — that wakes the wreck's power.",goal:1},{id:"wings",kind:"thruster",title:"Wings of the Wreck",desc:"The Ship's four wingtip engines are dead. Mine Cobalt Ore in the deep Caves, smelt it at a Campfire, craft a Thruster Nozzle (Cobalt + Copper + Metal), and press E at each Broken Thruster. All four lit lifts the Ship.",goal:4}];function ev(){return{i:0,p:gi.map(()=>0)}}function nv(s){const t=ev();if(!s)return t;t.i=Math.max(0,Math.min(gi.length,s.i|0));for(let e=0;e<t.p.length;e++){const n=gi[e].goal;t.p[e]=Math.max(0,Math.min(n,(s.p&&s.p[e])|0))}return t}function mr(s){return s.i<gi.length?gi[s.i]:null}function iv(s,t,e=1){const n=mr(s);if(!n||n.kind!==t||s.p[s.i]>=n.goal||(s.p[s.i]=Math.min(n.goal,s.p[s.i]+e),s.p[s.i]<n.goal))return null;const r=n;return s.i++,r}const sv=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],ur=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside. Mind the drop: the first 4 blocks of a fall are free, every one after bites.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:s=>s.setClock(.56),poll:s=>s.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:s=>{s.inv.has("canister_empty")||s.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:s=>s.selectHeld("canister_full")},{t:"Supply Chest",cap:"The cockpit's Supply Chest is stocked — look at it and press <b>E</b>. Chests are real blocks: place them anywhere, and touching ones share one bigger grid.",guide:{name:"Supply Chest",x:3,y:31,z:0},goal:"chest",hold:60},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:s=>s.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Farming",cap:"A shovel has a second use: press <b>Q</b> while aiming at <b>dirt or grass</b> to till it into <b>Farm Land</b> — sand refuses the blade. Plant seeds in the tilled soil. Crops ripen only while water sits within 4 blocks and the air stays in their band — melons love the heat, wheat does not. Dirt is precious out here; oasis rims and town fields still hold it.",goal:"plant",hold:40,enter:s=>{s.giveOrDrop("seed_wheat",2),s.selectHeld("shovel");const t=s.player.pos,e=Math.floor(t.x),n=Math.floor(t.z);for(let r=Math.floor(t.y)-1;r>20;r--){const i=s.world.get(e,r,n);if(i===Zn||i===vn){s.world.set(e,r,n,Jn),s.tutGuide={name:"Dirt",x:e,y:r,z:n};break}}}},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class rv{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&ur[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=ur[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===je&&(t.set(-6,31,0,on),t.set(-6,32,0,nn),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=ur.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=ur[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=ur.map((n,r)=>r===this.step?"●":r<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const Xu="sotf:index",$u="sotf:settings",Yu="sotf:best",Vh={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1,lighting:"sky"};function ov(){try{return{...Vh,...JSON.parse(localStorage.getItem($u)||"{}")}}catch{return{...Vh}}}function av(s){localStorage.setItem($u,JSON.stringify(s))}function Rr(){return Number(localStorage.getItem(Yu)||0)}function Wh(s){s>Rr()&&localStorage.setItem(Yu,String(s))}function Yo(){try{return JSON.parse(localStorage.getItem(Xu)||"[]")}catch{return[]}}function fc(s){localStorage.setItem(Xu,JSON.stringify(s))}function Ku(s,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:s||t||"world",seedStr:t,updated:Date.now()},r=Yo();return r.unshift(n),fc(r),n}function lv(s){fc(Yo().filter(t=>t.id!==s)),localStorage.removeItem("sotf:w:"+s)}function ju(s,t){try{localStorage.setItem("sotf:w:"+s.id,JSON.stringify(t));const e=Yo(),n=e.find(r=>r.id===s.id);return n&&(n.updated=Date.now(),fc(e)),!0}catch{return!1}}function Zu(s){try{const t=localStorage.getItem("sotf:w:"+s);return t?JSON.parse(t):null}catch{return null}}function Ju(s,t){const e=new Blob([JSON.stringify({meta:s,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${s.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function cv(s){const t=JSON.parse(await s.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=Ku(t.meta?.name??"imported",t.run.seedStr);return ju(e,t.run),e}const ie=we;function _s(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}const ii=(s,t,e,n)=>{const[r,i]=Gu(n);s.drawImage(Hu(),r,i,ie,ie,t,e,ie,ie)},N=(s,t,e,n,r,i)=>{s.fillStyle=i,s.fillRect(t,e,n,r)},fe=(s,t,e,n,r,i)=>{s.strokeStyle=i,s.lineWidth=1,s.strokeRect(t+.5,e+.5,n-1,r-1)},Yt=(s,t,e,n,r,i,o=2)=>{s.strokeStyle=i,s.lineWidth=o,s.beginPath(),s.moveTo(t,e),s.lineTo(n,r),s.stroke()},qt=(s,t,e)=>{s.fillStyle=e,s.beginPath(),s.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)s.lineTo(t[n][0],t[n][1]);s.closePath(),s.fill()};function Qu(s,t,e,n){const[r,i]=_s(t*ie,e*ie),o=(a,c,u)=>{qt(i,[[3,12],[2,7],[5,3],[10,2],[14,6],[13,12],[8,14]],a),qt(i,[[5,3],[10,2],[11,6],[6,7]],c),qt(i,[[3,12],[13,12],[8,14]],u)},l=(a,c,u)=>{i.fillStyle=a;for(const[f,m]of u)i.fillRect(f,m,2,2);i.fillStyle=c;for(const[f,m]of u)i.fillRect(f,m,1,1)};if(s.includes("_")&&(s.endsWith("pickaxe")||s.endsWith("shovel")||s.endsWith("axe")||s.endsWith("disassembler"))){const a=s.replace(/^(wood|stone|metal|alloy)_/,""),c=s.startsWith("alloy_"),u=c?"#7a4a26":"#00000044";return N(i,7,16,2,14,"#6b5238"),N(i,6,14,4,3,"#4a4a52"),a==="pickaxe"?(Yt(i,3,12,13,12,n,2),Yt(i,3,12,3,15,n),Yt(i,13,12,13,15,n),Yt(i,4,9,12,9,"#00000022",1),c&&Yt(i,4,11,12,11,"#e89a62",1)):a==="shovel"?(N(i,5,6,6,7,n),fe(i,5,6,6,7,u),Yt(i,6,13,6,13,n),Yt(i,9,13,9,13,n),Yt(i,6,13,7,14,n,1),Yt(i,9,13,8,14,n,1),c&&N(i,6,7,2,4,"#e89a62")):a==="axe"?(N(i,9,7,5,6,n),fe(i,9,7,5,6,u),N(i,8,8,1,4,n),c&&N(i,10,8,2,3,"#e89a62")):(N(i,4,7,8,2,n),N(i,4,7,2,5,n),N(i,10,7,2,5,n),N(i,7,11,2,2,"#66e5f0"),N(i,6,12,4,1,"#2f97a6"),c&&(N(i,4,8,1,3,"#e89a62"),N(i,11,8,1,3,"#8a4a26"))),c&&(N(i,6,14,4,1,"#8a5a34"),N(i,6,15,4,1,"#c98a56"),N(i,6,16,4,1,"#5c3d22"),i.fillStyle="#f0c89a",i.fillRect(6,15,1,1),i.fillRect(9,15,1,1)),r}switch(s){case"canister_full":case"canister_empty":{const a=s==="canister_full",c=e*ie;return N(i,6,0,4,3,"#8a98a8"),N(i,7,3,2,2,"#8a98a8"),N(i,4,5,8,c-7,a?"#2f7fd6":"#3a4750"),fe(i,4,5,8,c-7,"#dfe6ee"),a?(N(i,5,10,1,c-13,"#5fa3ea"),N(i,4,9,8,1,"#7f2b2b")):(N(i,4,14,8,4,"#c8d2da"),N(i,6,15,4,2,"#3a4750")),r}case"sword":return N(i,8,0,1,1,"#eef3f8"),N(i,7,1,3,17,"#c9d2dc"),N(i,8,1,1,17,"#eef3f8"),N(i,4,18,8,2,"#4a4a52"),N(i,7,20,3,9,"#6b5238"),N(i,7,22,3,1,"#4a3926"),N(i,7,25,3,1,"#4a3926"),N(i,6,29,5,2,"#4a4a52"),r;case"voidbreaker":return N(i,7,16,2,14,"#2a1d3a"),N(i,6,14,4,3,"#180f24"),Yt(i,3,12,13,12,"#8a5ad6",2),Yt(i,3,12,3,15,"#8a5ad6"),Yt(i,13,12,13,15,"#8a5ad6"),i.fillStyle="#e8d6ff",i.fillRect(5,9,1,2),i.fillRect(10,10,1,1),i.fillRect(8,11,1,2),i.fillStyle="#00000088",i.fillRect(7,10,2,1),i.fillRect(6,11,1,2),r;case"visor":return N(i,1,6,14,3,"#2e3a45"),N(i,3,4,10,6,"#123c44"),N(i,4,5,8,4,"#66e5f0"),N(i,5,5,2,1,"#d2f8ff"),fe(i,3,4,10,6,"#c8d2da"),N(i,1,5,2,1,"#5a6875"),N(i,13,5,2,1,"#5a6875"),r;case"catalyst":return N(i,7,3,2,2,"#8898a8"),i.fillStyle="#c07fe0",i.beginPath(),i.arc(8,10,4,0,Math.PI*2),i.fill(),i.strokeStyle="#7a4a9a",i.lineWidth=1,i.beginPath(),i.arc(8,10,4.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,8,2,1),i.fillRect(7,7,1,1),r;case"iron_ore":return o("#5a5450","#78716c","#423d39"),l("#9e8468","#c4a878",[[5,6],[9,4],[10,9],[6,10]]),r;case"copper_ore":return o("#6a5a52","#8a7466","#4c403a"),l("#b86b42","#e8935e",[[5,6],[9,4],[10,9],[6,10]]),r;case"cobalt_ore":return o("#4e5666","#6a7488","#3a4050"),qt(i,[[7,4],[9,6],[7,8],[5,6]],"#5c74a8"),qt(i,[[10,8],[12,10],[10,12],[8,10]],"#5c74a8"),qt(i,[[7,4],[9,6],[7,6]],"#9ab8e8"),qt(i,[[10,8],[12,10],[10,10]],"#9ab8e8"),i.fillStyle="#c4dcf4",i.fillRect(7,4,1,1),i.fillRect(10,8,1,1),r;case"alabaster":return o("#cfc8b0","#eae3cd","#a89f88"),N(i,4,7,8,1,"#b4ab92"),N(i,6,10,7,1,"#b4ab92"),N(i,3,12,5,1,"#b4ab92"),i.fillStyle="#f7f2e2",i.fillRect(6,3,2,1),r;case"copperrod":N(i,6,1,3,14,"#a05a2e"),N(i,7,2,1,12,"#e89a62"),i.fillStyle="#6e3a1c";for(const[a,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(a,c,1,1);return N(i,5,1,5,1,"#6e3a1c"),N(i,5,14,5,1,"#6e3a1c"),r;case"cobaltrod":N(i,6,1,3,14,"#4a5a86"),N(i,7,2,1,12,"#8aa8dc"),i.fillStyle="#2e3a5c";for(const[a,c]of[[6,3],[8,7],[6,11],[8,13]])i.fillRect(a,c,1,1);return N(i,5,1,5,1,"#2e3a5c"),N(i,5,14,5,1,"#2e3a5c"),r;case"backpack2":{N(i,8,1,3,6,"#5a4229"),N(i,21,1,3,6,"#5a4229"),N(i,3,7,26,22,"#6a4c30"),fe(i,3,7,26,22,"#42301e"),N(i,3,7,26,8,"#7d5c3c"),fe(i,3,7,26,8,"#42301e"),N(i,9,7,4,22,"#6a4a3a"),N(i,19,7,4,22,"#6a4a3a"),i.fillStyle="#c8a878";for(let a=10;a<=27;a+=3)i.fillRect(9,a,1,1),i.fillRect(12,a,1,1),i.fillRect(19,a,1,1),i.fillRect(22,a,1,1);return N(i,13,17,6,4,"#8a6a4a"),fe(i,13,17,6,4,"#2e2018"),N(i,15,18,2,2,"#c8a878"),N(i,5,25,22,4,"#7a5a3a"),fe(i,5,25,22,4,"#42301e"),r}case"body_regulator":return N(i,4,2,3,28,"#4c3822"),N(i,25,2,3,28,"#4c3822"),i.strokeStyle="#3a4750",i.lineWidth=2,i.beginPath(),i.moveTo(10,12),i.quadraticCurveTo(4,10,5,3),i.stroke(),i.beginPath(),i.moveTo(22,12),i.quadraticCurveTo(28,10,27,3),i.stroke(),N(i,8,8,16,17,"#8a98a8"),fe(i,8,8,16,17,"#3c4650"),N(i,8,8,16,3,"#aab4c0"),N(i,8,22,16,3,"#6a7680"),N(i,10,13,12,2,"#2e6a78"),N(i,10,16,12,2,"#2e6a78"),N(i,10,19,12,2,"#2e6a78"),i.fillStyle="#5fb8cc",i.fillRect(11,13,2,2),i.fillRect(15,16,2,2),i.fillRect(19,19,2,2),i.fillStyle="#d2f8ff",i.fillRect(9,12,1,1),i.fillRect(22,15,1,1),i.fillRect(9,21,1,1),i.fillRect(21,12,1,1),r;case"coolant_cell":return i.fillStyle="#7fd4e8",i.globalAlpha=.22,i.beginPath(),i.arc(8,9,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,6,1,4,2,"#8a98a8"),N(i,7,3,2,1,"#8a98a8"),N(i,5,4,6,10,"#3a8ea8"),fe(i,5,4,6,10,"#bfeef8"),N(i,6,5,1,8,"#7fd4e8"),N(i,5,7,6,1,"#5fc0d8"),N(i,5,11,6,1,"#2e6e84"),i.fillStyle="#e8fbff",i.fillRect(9,6,1,1),i.fillRect(7,9,1,1),i.fillRect(10,12,1,1),i.fillRect(6,13,1,1),r;case"head_lantern":return i.fillStyle="#ffd76a",i.globalAlpha=.25,i.beginPath(),i.arc(8,9,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,1,7,14,3,"#4a4a52"),N(i,1,7,14,1,"#5f6670"),N(i,1,9,14,1,"#33373d"),N(i,7,4,2,2,"#5a6875"),N(i,5,6,6,8,"#2e3a45"),fe(i,5,6,6,8,"#8a98a8"),N(i,6,7,4,5,"#ffd76a"),N(i,7,8,2,2,"#fff3c0"),N(i,6,11,4,1,"#e8a83c"),N(i,5,13,6,1,"#232830"),r;case"chitin":return qt(i,[[8,3],[13,6],[14,11],[11,14],[5,14],[2,11],[3,6]],"#6a4a3a"),qt(i,[[8,3],[13,6],[8,7],[3,6]],"#8f6a50"),Yt(i,8,7,5,13,"#4c352a",1),Yt(i,8,7,8,14,"#4c352a",1),Yt(i,8,7,11,13,"#4c352a",1),N(i,4,13,8,1,"#3c2a20"),i.fillStyle="#b08860",i.fillRect(7,4,2,1),r;case"stinger":return i.strokeStyle="#8a7a5c",i.lineWidth=5,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#d8cbb0",i.lineWidth=3,i.beginPath(),i.moveTo(3,14),i.quadraticCurveTo(4,6,9,3),i.stroke(),i.strokeStyle="#b0a284",i.lineWidth=1,i.beginPath(),i.moveTo(5,13),i.quadraticCurveTo(5.5,7,8,4),i.stroke(),qt(i,[[9,0],[14,1],[11,6]],"#a84a3a"),qt(i,[[9,0],[11,.5],[10,3]],"#e0705a"),Yt(i,14,1,11,6,"#6e2f24",1),r;case"wurm_hide":{N(i,2,2,12,15,"#7a5c40"),fe(i,2,2,12,15,"#4c3822");for(let a=3;a<14;a+=3)N(i,3,a,10,2,"#8f6e4c"),N(i,3,a+2,10,1,"#5a4228");return N(i,2,17,12,2,"#6a4c30"),i.fillStyle="#8a6a48",i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.fill(),i.strokeStyle="#4c3822",i.lineWidth=1,i.beginPath(),i.arc(8,24,6,0,Math.PI*2),i.stroke(),i.strokeStyle="#5a4228",i.beginPath(),i.arc(8,24,3,0,Math.PI*2),i.stroke(),i.fillStyle="#6a4c30",i.fillRect(7,23,2,2),r}case"wurmsuit":{N(i,9,8,14,18,"#7a5c40"),fe(i,9,8,14,18,"#42301e");for(let a=10;a<=18;a+=4)N(i,10,a,12,3,"#8a6a48"),N(i,10,a+3,12,1,"#4c3822");N(i,11,5,10,3,"#5f4830"),fe(i,11,5,10,3,"#42301e"),qt(i,[[3,9],[10,6],[12,13],[5,15]],"#6a4a3a"),qt(i,[[29,9],[22,6],[20,13],[27,15]],"#6a4a3a"),qt(i,[[4,9],[10,6],[11,9],[5,11]],"#8f6a50"),qt(i,[[28,9],[22,6],[21,9],[27,11]],"#8f6a50"),Yt(i,6,8,7,14,"#4c352a",1),Yt(i,26,8,25,14,"#4c352a",1),i.fillStyle="#c8a878";for(let a=9;a<=14;a+=3)i.fillRect(4,a,1,1),i.fillRect(9,a,1,1),i.fillRect(22,a,1,1),i.fillRect(27,a,1,1);return N(i,9,24,14,3,"#4c3822"),N(i,13,24,6,3,"#6a4a3a"),fe(i,13,24,6,3,"#2e2018"),i.fillStyle="#c8a878",i.fillRect(15,25,2,1),r}case"vulture_raw":return qt(i,[[3,9],[4,5],[8,3],[12,4],[13,8],[11,12],[6,12]],"#8a332c"),qt(i,[[4,5],[8,3],[12,4],[10,7],[5,7]],"#a8453a"),qt(i,[[6,12],[11,12],[9,13],[6,13]],"#571f1b"),N(i,12,6,3,3,"#d8cbb0"),N(i,14,5,1,1,"#d8cbb0"),N(i,14,9,1,1,"#d8cbb0"),N(i,13,6,1,3,"#8a7a5c"),N(i,12,6,2,1,"#f0e6d0"),i.fillStyle="#c8705e",i.fillRect(5,7,3,1),i.fillRect(9,6,2,1),i.fillRect(6,10,4,1),i.fillStyle="#e8a08a",i.fillRect(6,7,1,1),i.fillRect(8,10,1,1),r;case"vulture_cooked":return i.fillStyle="#c8d2da",i.fillRect(5,2,1,2),i.fillRect(8,1,1,2),i.fillRect(11,2,1,2),i.fillStyle="#eef3f8",i.fillRect(5,1,1,1),i.fillRect(8,0,1,1),i.fillRect(11,1,1,1),qt(i,[[3,10],[4,6],[8,4],[12,5],[13,9],[11,13],[6,13]],"#9a6132"),qt(i,[[4,6],[8,4],[12,5],[10,8],[5,8]],"#c08348"),qt(i,[[6,13],[11,13],[9,14],[6,14]],"#5c3a1c"),Yt(i,6,6,8,12,"#4a2c14",1),Yt(i,9,5,11,11,"#4a2c14",1),i.fillStyle="#d8a05e",i.fillRect(6,5,3,1),i.fillRect(10,6,2,1),i.fillStyle="#f0c89a",i.fillRect(7,5,1,1),r;case"tortoise_shell":{qt(i,[[3,22],[5,12],[11,6],[17,4],[24,7],[29,14],[30,22]],"#5f5a4e"),qt(i,[[11,6],[17,4],[24,7],[20,13],[12,12]],"#7d7768"),qt(i,[[3,22],[30,22],[29,25],[4,25]],"#46423a"),i.strokeStyle="#46423a",i.lineWidth=1,i.beginPath(),i.moveTo(17,5),i.lineTo(9,22),i.moveTo(17,5),i.lineTo(17,23),i.moveTo(17,5),i.lineTo(25,22),i.stroke(),i.beginPath(),i.moveTo(6,15),i.lineTo(28,15),i.stroke(),i.fillStyle="#6e6858",i.fillRect(14,8,5,1),i.fillRect(8,17,6,1),i.fillRect(20,18,5,1),i.fillStyle="#8a8474",i.fillRect(15,6,2,1),i.fillStyle="#cfc7b2";for(const[a,c,u,f]of[[3,24,4,5],[9,25,4,6],[15,25,4,5],[21,24,4,6],[26,22,4,5]])qt(i,[[a,c],[a+u,c],[a+u/2,c+f]],"#cfc7b2");qt(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),qt(i,[[26,15],[29,15],[31,18]],"#cfc7b2"),i.fillStyle="#8f8874";for(const[a,c,u]of[[3,24,4],[9,25,4],[15,25,4],[21,24,4]])i.fillRect(a,c,u,1);return r}case"fennec_pelt":{qt(i,[[6,11],[2,1],[9,7]],"#c99a62"),qt(i,[[6,10],[3,3],[8,7]],"#8f6a44"),qt(i,[[10,11],[14,1],[7,7]],"#c99a62"),qt(i,[[10,10],[13,3],[8,7]],"#8f6a44"),i.fillStyle="#ead4b0",i.fillRect(2,3,1,3),i.fillRect(13,3,1,3),i.fillStyle="#d8b488",i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8a6540",i.lineWidth=1,i.beginPath(),i.ellipse(8,12,5,4,0,0,Math.PI*2),i.stroke(),i.fillStyle="#ead4b0",i.beginPath(),i.ellipse(8,14,2.5,2,0,0,Math.PI*2),i.fill(),i.fillStyle="#3a2a1c",i.fillRect(6,11,1,1),i.fillRect(9,11,1,1),i.fillStyle="#6a4a30",i.fillRect(7,14,2,1),N(i,4,15,8,12,"#d8b488"),fe(i,4,15,8,12,"#8a6540"),N(i,5,16,6,9,"#e8d0a8"),N(i,2,16,2,3,"#c99a62"),N(i,12,16,2,3,"#c99a62"),N(i,2,21,2,3,"#c99a62"),N(i,12,21,2,3,"#c99a62"),i.fillStyle="#8f6a44";for(let a=17;a<=25;a+=2)i.fillRect(4,a,1,1),i.fillRect(11,a,1,1);return N(i,6,27,4,3,"#c99a62"),N(i,6,30,4,2,"#ead4b0"),fe(i,6,27,4,5,"#8a6540"),r}case"tortoise_cuirass":{N(i,6,6,20,23,"#3b372f"),fe(i,6,6,20,23,"#2a2722");const a=(c,u,f)=>{N(i,c,u,f,6,"#5f5a4e"),N(i,c,u,f,2,"#7d7768"),N(i,c,u+5,f,1,"#3b372f"),i.fillStyle="#48443a",i.fillRect(c+Math.round(f/3),u+1,1,4),i.fillRect(c+Math.round(2*f/3),u+1,1,4)};a(8,8,16),a(6,14,20),a(7,20,18),N(i,10,4,12,4,"#8a98a8"),N(i,10,4,12,1,"#aab4c0"),fe(i,10,4,12,4,"#3c4650"),N(i,5,13,1,14,"#8a98a8"),N(i,26,13,1,14,"#8a98a8"),N(i,6,26,20,4,"#8a98a8"),N(i,6,26,20,1,"#aab4c0"),N(i,6,29,20,1,"#5c6670"),fe(i,6,26,20,4,"#3c4650"),N(i,14,26,4,4,"#c98a56"),N(i,14,26,4,1,"#f0c89a"),fe(i,14,26,4,4,"#5c3d22"),i.fillStyle="#cfc7b2",qt(i,[[3,16],[6,16],[1,19]],"#cfc7b2"),qt(i,[[26,16],[29,16],[31,19]],"#cfc7b2"),qt(i,[[9,29],[12,29],[10,31]],"#cfc7b2"),qt(i,[[19,29],[22,29],[21,31]],"#cfc7b2");for(const[c,u]of[[7,15],[23,15],[7,21],[23,21],[9,27],[21,27],[11,5],[18,5]])N(i,c,u,2,2,"#5c3d22"),N(i,c,u,2,1,"#c98a56"),i.fillStyle="#f0c89a",i.fillRect(c,u,1,1);return r}case"stinger_blade":return qt(i,[[8,0],[10,3],[6,3]],"#a84a3a"),qt(i,[[8,0],[9,2],[7,2]],"#e0705a"),qt(i,[[6,3],[10,3],[11,6],[5,6]],"#d8cbb0"),Yt(i,5,6,11,6,"#8a7a5c",1),N(i,6,6,4,15,"#c9d2dc"),N(i,7,7,1,14,"#eef3f8"),N(i,9,7,1,14,"#8a949e"),N(i,3,21,10,2,"#4a4a52"),N(i,3,21,10,1,"#6a7280"),N(i,6,23,4,6,"#6b5238"),N(i,6,24,4,1,"#4a3926"),N(i,6,27,4,1,"#4a3926"),N(i,5,29,6,2,"#6a4a3a"),fe(i,5,29,6,2,"#3c2a20"),r;case"curved_hull":{const a="#7d8390",c="#4e545e",u="#aab2bc";return N(i,6,2,8,2,a),N(i,3,4,12,2,a),N(i,2,6,13,8,a),i.clearRect(13,13,2,1),i.clearRect(14,12,1,1),N(i,6,2,8,1,u),N(i,3,4,1,2,u),N(i,2,6,1,8,u),N(i,2,13,11,1,c),N(i,14,6,1,6,c),N(i,12,13,1,1,c),N(i,3,9,12,1,"#6b7280"),i.fillStyle=c,i.fillRect(11,3,1,1),i.fillRect(12,7,1,1),i.fillRect(5,11,1,1),i.fillStyle=u,i.fillRect(11,4,1,1),i.fillRect(12,8,1,1),i.fillRect(5,12,1,1),r}case"hull_slope":return qt(i,[[2,14],[2,4],[11,2],[14,8],[14,14]],"#767d88"),qt(i,[[2,4],[11,2],[12,6],[2,8]],"#949ca8"),Yt(i,11,2,14,8,"#aab2bc",1),N(i,2,13,12,1,"#4e545e"),N(i,2,10,12,1,"#6b7280"),i.fillStyle="#5c636d",i.fillRect(4,6,1,1),i.fillRect(9,11,1,1),i.fillRect(12,9,1,1),r;case"thruster_nozzle":return N(i,8,2,16,5,"#8a98a8"),fe(i,8,2,16,5,"#3c4650"),N(i,8,2,16,1,"#aab4c0"),i.fillStyle="#c8d2da",i.fillRect(9,4,1,1),i.fillRect(22,4,1,1),Yt(i,12,3,14,5,"#5c6670",1),Yt(i,18,5,20,3,"#5c6670",1),qt(i,[[10,7],[22,7],[27,21],[5,21]],"#c88a50"),qt(i,[[10,7],[15,7],[13,21],[5,21]],"#e0a86a"),qt(i,[[20,7],[22,7],[27,21],[23,21]],"#96603a"),Yt(i,9,12,23,12,"#7a4a26",1),Yt(i,7,17,25,17,"#7a4a26",1),N(i,5,21,22,4,"#8a98a8"),fe(i,5,21,22,4,"#3c4650"),N(i,5,21,22,1,"#aab4c0"),i.fillStyle="#5c6670",i.fillRect(8,22,1,2),i.fillRect(16,22,1,2),i.fillRect(23,22,1,2),i.fillStyle="#c8d2da",i.fillRect(9,23,1,1),i.fillRect(17,23,1,1),i.fillRect(24,23,1,1),N(i,7,25,18,3,"#4a5560"),N(i,9,26,14,1,"#c85a2e"),N(i,11,27,10,1,"#8a3a1e"),r;case"backpack1":return N(i,8,1,3,6,"#5a4229"),N(i,21,1,3,6,"#5a4229"),N(i,5,7,22,21,"#7a5a3a"),fe(i,5,7,22,21,"#4c3822"),N(i,5,7,22,8,"#8a6a48"),fe(i,5,7,22,8,"#4c3822"),N(i,13,13,6,3,"#d8b74f"),N(i,9,20,14,6,"#6b4d30"),fe(i,9,20,14,6,"#4c3822"),r;case"beacon":return i.fillStyle="#66e5f0",i.globalAlpha=.35,i.beginPath(),i.arc(8,5,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.fillStyle="#66e5f0",i.beginPath(),i.arc(8,5,3,0,Math.PI*2),i.fill(),N(i,6,5,1,1,"#d2f8ff"),N(i,7,8,2,8,"#8a98a8"),ii(i,0,ie,Tn),r;case"campfire":return Yt(i,3,10,12,4,"#61492f",2),Yt(i,4,4,13,10,"#61492f",2),Yt(i,3,10,12,4,"#7d5f3d",1),ii(i,0,ie,sn),r;case"door":return ii(i,0,0,nn),ii(i,0,ie,on),r;case"bed":return ii(i,0,0,rn),ii(i,ie,0,_n),r;case"dune_melon":i.fillStyle="#5f7f2c",i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#3c541c",i.lineWidth=2,i.beginPath(),i.ellipse(16,11,12,8,0,0,Math.PI*2),i.stroke(),i.strokeStyle="#88a84c",i.lineWidth=1;for(const a of[-7,0,7])i.beginPath(),i.moveTo(16+a,3),i.lineTo(16+a,19),i.stroke();return N(i,15,1,2,3,"#6b5238"),r;case"wheat":{i.strokeStyle="#c8a844",i.lineWidth=2;for(const a of[4,8,12])i.beginPath(),i.moveTo(a,15),i.lineTo(a,3),i.stroke();i.fillStyle="#e0c860";for(const a of[4,8,12])for(let c=2;c<9;c+=2)i.fillRect(a-2,c,4,2);return i.strokeStyle="#7a5a30",i.lineWidth=1,i.beginPath(),i.moveTo(2,12),i.lineTo(14,12),i.stroke(),r}case"cooked_wheat":return i.fillStyle="#a8712e",i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.fill(),i.strokeStyle="#74501f",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,6.5,4.5,0,0,Math.PI*2),i.stroke(),i.fillStyle="#d8a860",i.fillRect(5,8,6,1),i.fillRect(6,7,4,1),r;case"bucket":case"bucket_full":{const a=s==="bucket_full";return N(i,4,6,8,9,a?"#2f7fd6":n),fe(i,4,6,8,9,"#dfe6ee"),N(i,3,5,10,2,"#c8d2da"),N(i,5,2,1,3,"#8a98a8"),N(i,10,2,1,3,"#8a98a8"),Yt(i,5,3,11,3,"#8a98a8",1),a&&N(i,5,7,6,1,"#5fa3ea"),r}case"kindling":return Yt(i,3,21,12,4,"#6b5238",2),Yt(i,6,22,14,8,"#5a4630",2),N(i,11,3,3,3,"#9a8a5a"),N(i,4,8,3,3,"#9a8a5a"),N(i,13,9,3,2,"#8a9a4a"),r;case"seed_tree":return N(i,7,14,6,6,"#8a6a3a"),N(i,7,13,6,2,"#5a4630"),N(i,9,9,2,4,"#5a8a3a"),N(i,6,7,3,2,"#7fae54"),N(i,11,8,3,2,"#7fae54"),r;case"rock":return o("#6a655f","#877f77","#4a4642"),Yt(i,5,9,11,10,"#55504b",1),i.fillStyle="#98907f",i.fillRect(7,4,2,1),r;case"gravel":{const a=(c,u,f,m)=>{i.fillStyle=m,i.beginPath(),i.arc(c,u,f,0,Math.PI*2),i.fill()};return a(5,11,3.2,"#7d766f"),a(11,12,3.6,"#6a645e"),a(8,7,3.6,"#8d8680"),i.fillStyle="#a49c94",i.fillRect(6,5,2,1),i.fillRect(3,9,2,1),i.fillStyle="#544e48",i.fillRect(10,14,3,1),i.fillRect(3,13,3,1),r}case"salt":return qt(i,[[3,12],[3,7],[6,3],[11,2],[13,6],[13,12]],"#d9dbd6"),qt(i,[[6,3],[11,2],[12,5],[7,6]],"#f2f4ef"),qt(i,[[3,12],[13,12],[8,14]],"#b4b8b2"),Yt(i,6,7,11,8,"#c2c5bf",1),i.fillStyle="#ffffff",i.fillRect(5,6,1,1),i.fillRect(9,8,1,1),i.fillRect(11,5,1,1),r;case"deadwood":return Yt(i,2,10,13,8,"#61492f",4),Yt(i,2,9,13,7,"#7d5f3d",1),Yt(i,4,11,11,9,"#4a3926",1),Yt(i,7,9,9,3,"#61492f",2),i.fillStyle="#8a6a44",i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.fill(),i.strokeStyle="#5c4630",i.lineWidth=1,i.beginPath(),i.arc(13.5,8,2,0,Math.PI*2),i.stroke(),r;case"metal":return Yt(i,3,13,12,3,"#9aa0aa",3),Yt(i,3,12,12,2,"#c8d2da",1),Yt(i,4,14,12,5,"#6a707a",1),i.fillStyle="#6a707a",i.fillRect(9,7,1,2),i.fillStyle="#e2e8f0",i.fillRect(6,9,1,1),r;case"lamp":return i.fillStyle="#fff0a0",i.globalAlpha=.28,i.beginPath(),i.arc(8,8,7,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,5,2,6,2,"#4a4a52"),N(i,5,2,6,1,"#6a7280"),N(i,4,4,1,9,"#3a3f46"),N(i,11,4,1,9,"#3a3f46"),N(i,5,4,6,9,"#fff0a0"),N(i,6,5,2,7,"#fff8d0"),N(i,6,10,4,2,"#e8a83c"),N(i,4,13,8,2,"#4a4a52"),r;case"regulator":{N(i,5,1,6,2,"#6a7680"),N(i,3,3,10,11,"#8a98a8"),fe(i,3,3,10,11,"#3c4650"),N(i,3,3,10,2,"#aab4c0");for(let a=4;a<=11;a+=2)N(i,a,6,1,6,"#5f6c78");return N(i,7,7,3,4,"#59bfcc"),N(i,8,8,1,1,"#d2f8ff"),N(i,3,12,10,2,"#3c4650"),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),r}case"engine_core":return i.fillStyle="#c468e8",i.globalAlpha=.25,i.beginPath(),i.arc(8,8,7.5,0,Math.PI*2),i.fill(),i.globalAlpha=1,N(i,4,3,8,11,"#6a6e78"),fe(i,4,3,8,11,"#3a3e46"),N(i,4,3,8,1,"#8d929c"),N(i,4,13,8,1,"#4a4e56"),i.fillStyle="#c468e8",i.beginPath(),i.arc(8,8,3.2,0,Math.PI*2),i.fill(),i.strokeStyle="#7a3a9a",i.lineWidth=1,i.beginPath(),i.arc(8,8,3.5,0,Math.PI*2),i.stroke(),i.fillStyle="#e8b8ff",i.fillRect(6,6,2,1),i.fillRect(7,5,1,1),i.fillStyle="#c8d2da",i.fillRect(4,4,1,1),i.fillRect(11,4,1,1),i.fillRect(4,12,1,1),i.fillRect(11,12,1,1),r;case"seed_melon":return i.fillStyle="#c8b060",i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.fill(),i.strokeStyle="#8f7a40",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,4,4.8,0,0,Math.PI*2),i.stroke(),i.fillStyle="#e0cc8c",i.beginPath(),i.ellipse(7,9,1.8,2.6,0,0,Math.PI*2),i.fill(),N(i,7,2,2,3,"#5a8a3a"),N(i,5,1,2,2,"#7fae54"),N(i,9,0,2,2,"#7fae54"),r;case"seed_wheat":return i.fillStyle="#d8c878",i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.fill(),i.strokeStyle="#9a8a48",i.lineWidth=1,i.beginPath(),i.ellipse(8,10,3.2,4.6,0,0,Math.PI*2),i.stroke(),Yt(i,8,6,8,14,"#b09a58",1),i.fillStyle="#f0e2a8",i.fillRect(6,8,1,4),Yt(i,8,5,7,2,"#9a8a48",1),Yt(i,8,5,9,2,"#9a8a48",1),r;case"bench":return ii(i,0,0,Ze),ii(i,0,ie,mn),r}return null}const _o=new Map;function To(s){const t=_o.get(s);if(t)return t;const e=Nt[s];if(!e)return _o.set(s,[]),_o.get(s);let r=Qu(s,e.w,e.h,e.color);if(!r&&e.block!==void 0){const[o,l]=_s(e.w*ie,e.h*ie);for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)ii(l,a*ie,h*ie,e.block);r=o}const i=[];if(r){const[o,l]=_s(ie,ie);for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)l.clearRect(0,0,ie,ie),l.drawImage(r,a*ie,h*ie,ie,ie,0,0,ie,ie),i.push(o.toDataURL())}else{const[o,l]=_s(ie,ie);N(l,2,2,ie-4,ie-4,e.color),i.push(o.toDataURL())}return _o.set(s,i),i}function Ui(s,t=0){const e=Nt[s];if(!e)return"";if(e.w===1&&e.h===1)return To(s)[0]??"";const[n,r]=_s(e.w*ie,e.h*ie);r.imageSmoothingEnabled=!1;const i=Qu(s,e.w,e.h,e.color);if(i)r.drawImage(i,0,0);else if(e.block!==void 0)for(let h=0;h<e.h;h++)for(let a=0;a<e.w;a++)ii(r,a*ie,h*ie,e.block);if(!t)return n.toDataURL();const[o,l]=_s(e.h*ie,e.w*ie);return l.imageSmoothingEnabled=!1,l.translate(e.h*ie,0),l.rotate(Math.PI/2),l.drawImage(n,0,0),o.toDataURL()}function hv(s){const[t,e]=_s(ie,ie);return ii(e,0,0,s),t.toDataURL()}const Ue=s=>document.getElementById(s);let qh=0;function nt(s){const t=Ue("toast");t.textContent=s,t.style.opacity="1",clearTimeout(qh),qh=setTimeout(()=>t.style.opacity="0",2600)}function uv(s){const t=Ue("prompt");if(!s){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=s}function dv(s){Ue("vision-water").style.opacity=s?"1":"0"}function fv(s){const t=Ue("blockname");if(!s){t.classList.add("hidden");return}t.textContent=s,t.classList.remove("hidden")}function Xh(){const s=Ue("vision-hit");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash")}let $h="";function pv(s){const t=s.selectedSlot()?.itemId??"",e=s.slots.map(i=>i.itemId).join(",")+"|"+t;if(e===$h)return;$h=e;const n=[];for(const i of s.slots){const o=n.find(l=>l.itemId===i.itemId);o?o.count+=1:n.push({itemId:i.itemId,count:1})}const r=Ue("hotbar");r.innerHTML="",n.slice(0,9).forEach((i,o)=>{const l=document.createElement("div");l.className="hb-slot"+(i.itemId===t?" sel":""),l.dataset.hb=String(o);const h=document.createElement("img");h.src=Ui(i.itemId),h.alt=Nt[i.itemId].name,l.appendChild(h);const a=document.createElement("span");if(a.className="hb-key",a.textContent=String(o+1),l.appendChild(a),i.count>1){const c=document.createElement("span");c.className="hb-count",c.textContent=String(i.count),l.appendChild(c)}r.appendChild(l)})}function mv(){const s=document.querySelector("#bar-water .safe");s.style.left="25%",s.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((uc-fs)/(fr-fs)*100).toFixed(1)+"%",t.style.right=((fr-dc)/(fr-fs)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(r,i,o)=>{const l=document.createElement("span");l.className="dmg",l.style.left=i.toFixed(1)+"%",l.title=o,document.getElementById(r).appendChild(l)};e("bar-water",Gl,"below this, dehydration drains Health");const n=r=>(r-fs)/(fr-fs)*100;e("bar-heat",n(Hl),"below this, hypothermia drains Health"),e("bar-heat",n(zl),"above this, heat stroke drains Health")}function Yh(s,t=0,e=0,n=0,r=0,i=0){const o=document.getElementById("waypoint");if(!s){o.classList.add("hidden");return}const l=t-n,h=e-r,a=Math.atan2(l,-h)+i;Ue("wp-arrow").style.transform=`rotate(${a*180/Math.PI}deg)`,Ue("wp-name").textContent=s,Ue("wp-dist").textContent=`${Math.round(Math.hypot(l,h))} m`,o.classList.remove("hidden")}function Kh(s,t,e,n,r,i,o){const l=R=>document.querySelector(`#${R} .fill`);l("bar-health").style.width=s.health+"%",l("bar-water").style.width=s.water+"%";const h=(s.body-fs)/(fr-fs)*100;l("bar-heat").style.width=h+"%";const a=e%Be/Be,c=String(Math.floor(a*24)).padStart(2,"0"),u=String(Math.floor(a*24%1*60)).padStart(2,"0");Ue("clock-day").textContent="Day "+n,Ue("clock-time").textContent=c+":"+u;const f=R=>r==="C"?Math.round(R)+"°C":Math.round(R*9/5+32)+"°F";Ue("clock-temp").textContent=`air ${f(s.lastAmbientEff)}  body ${f(s.body)}`;const m=t.selectedSlot();Ue("held").textContent=m?Nt[m.itemId].name:"—",pv(t),Ue("warn-hot").classList.toggle("hidden",s.body<=dc),Ue("warn-cold").classList.toggle("hidden",s.body>=uc),Ue("chip-reg").classList.toggle("hidden",!o?.regulated),Ue("chip-storm").classList.toggle("hidden",!o?.stormBroken),Ue("chip-nap").classList.toggle("hidden",!o?.napReady);const v=t.weight(),y=t.weightLimit(),x=Ue("weight");x.textContent=`${v.toFixed(1)} / ${y} kg`,x.classList.toggle("encumbered",v>y),Ue("vision-vignette").style.opacity=String(s.vision*.85);const _=s.water<5||s.health<30;Ue("vision-red").style.opacity=_?String(.35+.25*Math.sin(i/220)):"0"}const vo=s=>s===on||s===nn||s===en||s===He,jh=4,gv=8.5;class ge{constructor(t,e,n,r,i){this.meta=t,this.settings=r,this.audio=i,this.seed=O1(t.seedStr||t.id),this.world=new s_(this.seed),this.survival=new h_(this.seed^7),this.quests=nv(e?.quest),this.renderer=new b_(n),this.player=new a_(this.world),this.timeSec=e?.time??Be*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===In&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===In&&this.renderer.addPointLight(6,35,0,"lamp");for(let o=-10;o<=8;o++)for(let l=-14;l<=14;l++)for(let h=28;h<=36;h++)this.world.get(o,h,l)===ki&&this.breakers.add(`${o},${h},${l}`);for(const[o,l]of this.world.deltas){const[h,a]=o.split(",").map(Number);for(const[c,u]of l){if(u!==ki)continue;const f=c%ee,m=(c-f)/ee,v=m%X;this.breakers.add(`${h*X+v},${f},${a*X+(m-v)/X}`)}}mv(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(r)}seed;world;survival;player;inv=new Fa;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];traderAt=new Map;tradeOffers=[];tradeCamp=null;stormToast=!1;mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null,regulator:null,light:null};lanternOn=!1;lanternAcc=0;regulatorAcc=0;collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;crops=new Map;cropAcc=0;treeAcc=0;trees=new Map;treePlanCache=new Map;sprintOn=!1;lastPrick=-9;tempOrigin=null;lastSleep=-1e9;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;breakers=new Set;breakerTick=-1;stormShieldOn=!1;regActive=!1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;waterAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(re(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===Mt&&(this.world.set(t,e,n,Le),this.chests.set(ge.chestKey([[t,e,n]]),[{itemId:"canister_full",x:0,y:0},{itemId:"canister_full",x:1,y:0},{itemId:"canister_full",x:2,y:0}]))}chestCluster(t,e,n){const r=new Set([`${t},${e},${n}`]),i=[[t,e,n]],o=[];for(;i.length;){const l=i.pop();this.world.get(l[0],l[1],l[2])===Le&&o.push(l);for(const[h,a,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const u=l[0]+h,f=l[1]+a,m=l[2]+c,v=`${u},${f},${m}`,y=this.world.get(u,f,m);r.has(v)||y!==Le&&y!==Dr||(r.add(v),i.push([u,f,m]))}}return o}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=Nt[e.itemId],r=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const i of r){const o=i?n.h:n.w,l=i?n.w:n.h;for(let h=0;h+l<=t.h;h++)for(let a=0;a+o<=t.w;a++)if(t.fits(a,h,o,l))return e.x=a,e.y=h,e.rot=i||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new Fa;e.slots=[];const[n,r]=ge.chestDims(t);return e.w=n,e.h=r,e.baseLimit=1e9,e}inTown(t,e){const n=this.world.gen,r=Math.floor(t/ze),i=Math.floor(e/ze);for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){if(!n.townAt(r+o,i+l))continue;const h=n.townCenter(r+o,i+l);if(Math.abs(h.x-t)<=10&&Math.abs(h.z-e)<=10)return!0}return!1}townLoot(t,e){const n=i=>mt(t,e,this.seed+i),r=[{itemId:"canister_empty",count:2}];return n(11)<.7&&r.push({itemId:"seed_wheat",count:1+(n(12)<.5?1:0)}),n(13)<.4&&r.push({itemId:"seed_melon",count:1+(n(14)<.4?1:0)}),n(15)<.6&&r.push({itemId:"cooked_wheat",count:1+(n(16)<.35?1:0)}),n(17)<.5&&r.push({itemId:"metal",count:1+Math.floor(n(18)*3)}),n(19)<.45&&r.push({itemId:"chest_connector",count:1+Math.floor(n(20)*2)}),n(21)<.3&&r.push({itemId:"door_inner",count:1}),n(22)<.25&&r.push({itemId:"bed",count:1}),n(23)<.5&&r.push({itemId:"seed_tree",count:1+(n(24)<.4?1:0)+(n(25)<.2?1:0)}),r}openChest(t,e,n){const r=this.chestCluster(t,e,n),i=ge.chestKey(r),o=this.chests.has(i);this.chests.has(i)||this.chests.set(i,[]);const l=this.emptyChestGrid(r.length);if(l.slots=this.chests.get(i),!o&&r.some(([h,,a])=>this.inTown(h,a))){for(const h of this.townLoot(r[0][0],r[0][2]))for(let a=0;a<h.count;a++){const c={itemId:h.itemId,x:0,y:0};ge.placeSlotFree(l,c)||this.dropEntity(h.itemId,1,2)}nt("Someone's stores — untouched since the town emptied."),this.questBump("supplies")}this.chestInv=l,this.gridFocus="chest",this.tut?.notify("chest"),this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,r){const i=this.chestCluster(t,e,n),o=this.emptyChestGrid(i.length);for(const l of r)ge.placeSlotFree(o,l)||this.dropEntity(l.itemId,1,2);o.slots.length&&this.chests.set(ge.chestKey(i),o.slots),i.length>1&&nt(`Chests linked — one ${o.w}×${o.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==Le){if(fn(this.world.get(t.x,t.y,t.z))){for(const i of t.items)for(let o=0;o<i.count;o++)this.dropEntity(i.itemId,1,2);return}this.world.set(t.x,t.y,t.z,Le)}const e=this.chestCluster(t.x,t.y,t.z),n=ge.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const r=this.emptyChestGrid(e.length);r.slots=this.chests.get(n);for(const i of t.items)for(let o=0;o<i.count;o++){const l={itemId:i.itemId,x:0,y:0};ge.placeSlotFree(r,l)||this.dropEntity(i.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body;const e=[];this.inv.slots=t.inventory.slots.map(l=>{const h=l.count??1;for(let a=1;a<h;a++)e.push({itemId:l.itemId});return{itemId:l.itemId,x:l.x,y:l.y,rot:l.rot}});for(const l of e)this.giveOrDrop(l.itemId,1);this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const l of["backpack","head","body","regulator","light"]){const h=t.equip?.[l];h&&(this.equip[l]={itemId:h,x:0,y:0,charges:t.equip?.charges?.[l]})}this.beaconMarks=t.beaconMarks??[],this.trees=new Map(t.trees??[]),this.collected=new Set(t.collected??[]);const n=this.collected;let r=0;const i=[];this.world.gen.canisters.forEach(l=>{if(l.buried&&!n.has(r)){const h=Math.round(re(this.seed,l.x,l.z));i.push({id:this.entitySeq++,x:l.x+.5,y:h,z:l.z+.5,itemId:"canister_full",buried:l.buried,buriedAt:l.buried?[l.x,h,l.z]:void 0,srcIndex:r})}r++});for(const l of t.entities){const h=l.count??1;for(let a=0;a<h;a++)i.push({id:this.entitySeq++,x:l.x,y:l.y,z:l.z,itemId:l.itemId,age:l.age})}this.entities=i,this.chests=new Map((t.chests??[]).map(l=>{const h=this.emptyChestGrid(l.cells.split("|").length);for(const a of l.slots){h.slots.push({itemId:a.itemId,x:a.x,y:a.y,rot:a.rot});for(let c=1;c<(a.count??1);c++){const u={itemId:a.itemId,x:0,y:0};ge.placeSlotFree(h,u)||this.giveOrDrop(a.itemId,1)}}return[l.cells,h.slots]}));const o=[];for(const l of t.caches){const h=l.kind??"death";if(h==="chest"){o.push(l);continue}const a={id:this.entitySeq++,x:l.x,y:l.y,z:l.z,kind:h,items:l.items.map(c=>({...c}))};this.caches.push(a),a.items.length&&this.renderer.addEntityMesh(a.id,this.cacheMeshPos(a),this.cacheColor(a),.7)}this.campCharges=new Map(Object.entries(t.campfires??{}).map(([l,h])=>[l,h])),this.crops=new Map(t.crops??[]),t.lastSleep&&(this.lastSleep=t.lastSleep);for(const l of o)this.adoptLegacyChest(l);this.pods=(t.pods??[]).map(l=>({...l,ringEid:this.renderer.addGroundRing(l.x+.5,Math.round(re(this.seed,l.x,l.z)),l.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(l.x+.5,Math.round(re(this.seed,l.x,l.z)),l.z+.5,13382434)})),this.won=!!t.won;for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[u,f]of h){if(f!==In&&f!==sn)continue;const m=Math.floor(u/(X*ee)),v=u%(X*ee);this.renderer.addPointLight(a*X+m,v%ee,c*X+Math.floor(v/ee),f===In?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId,regulator:this.equip.regulator?.itemId,light:this.equip.light?.itemId,charges:{regulator:this.equip.regulator?.charges,light:this.equip.light?.charges}},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,age:Math.floor(t.age??0)})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),crops:[...this.crops],trees:[...this.trees],lastSleep:this.lastSleep>0?this.lastSleep:void 0,deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/Be);this.timeSec=(e+t)*Be}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new rv(this),this.startCine(sv,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),nt("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,r=n.find(h=>e.t<h.t1)??n[n.length-1];if(r.openDoor&&e.t>=r.openDoor.t){const{x:h,y:a,z:c}=r.openDoor;if(this.world.get(h,a,c)!==je){this.world.set(h,a,c,je);for(const u of[-1,1])vo(this.world.get(h,a+u,c))&&this.world.set(h,a+u,c,je);this.audio.door()}}const i=Math.min(1,Math.max(0,(e.t-r.t0)/(r.t1-r.t0))),o=i*i*(3-2*i),l=this.renderer.camera;if(l.position.set(r.from[0]+(r.to[0]-r.from[0])*o,r.from[1]+(r.to[1]-r.from[1])*o,r.from[2]+(r.to[2]-r.from[2])*o),l.lookAt(r.look[0],r.look[1],r.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const h=n[n.length-1];this.player.yaw=Math.atan2(-(h.look[0]-h.to[0]),-(h.look[2]-h.to[2])),this.player.pitch=0;const a=this.renderer.camera;a.position.copy(this.player.eye()),a.rotation.order="YXZ",a.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&nt("Guest worlds are never saved."),!1;const e=ju(this.meta,this.snapshot());return t&&nt(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){Ju(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.lightingMode!==t.lighting&&(this.renderer.setLightingMode(t.lighting),this.renderer.rebuildLights(this.world)),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/Be)}questBump(t,e=1){if(this.tut)return;const n=iv(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}nt(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&nt("Power runs through the wreck. Four dead engines left — find them a way to burn."),this.renderQuest(),this.saveNow(!0)}columnTop(t,e){for(let n=ee-1;n>=0;n--)if(this.world.get(t,n,e))return n;return Math.round(re(this.seed,t,e))}crashPod(t,e){const n=this.player.pos,r=Math.round(n.x)+2,i=Math.round(n.z)+1,o=this.columnTop(r,i),l=this.renderer.addGroundRing(r+.5,o,i+.5,13382434,1.1),h=this.renderer.addBeam(r+.5,o,i+.5,13382434);this.pods.push({x:r,z:i,t:3,itemId:t,n:e,ringEid:l,beamEid:h}),this.audio.warn(),setTimeout(()=>{this.running&&nt("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const r=this.columnTop(n.x,n.z);this.caches.push({id:this.entitySeq++,x:n.x,y:r,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,r+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),nt("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){Yh(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const i=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;i!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=i,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else Yh(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const r=new Map;if(this.equip.head?.itemId==="visor"){for(const i of this.caches)i.items.length&&r.set(`c${i.id}`,[i.x+.5,i.y,i.z+.5,i.kind==="reward"?14197322:13386803]);for(const i of this.chests.keys()){const[o,l,h]=i.split(";")[0].split(",").map(Number);r.set(`x${i}`,[o+.5,l,h+.5,15124842])}}for(const[i,o]of this.visorBeams)r.has(i)||(this.renderer.removeEntityMesh(o),this.visorBeams.delete(i));for(const[i,[o,l,h,a]]of r)this.visorBeams.has(i)||this.visorBeams.set(i,this.renderer.addBeam(o,l,h,a,10))}waypointTarget(){const t=mr(this.quests);if(!t)return null;const e=this.player.pos,n=(i,o)=>Math.round(re(this.seed,i,o))+1,r=i=>{let o=i[0],l=1/0;for(const h of i){const a=(h.x-e.x)**2+(h.z-e.z)**2;a<l&&(l=a,o=h)}return o};switch(t.kind){case"oasis":{const i=r(this.world.gen.oases);return i?{name:"Oasis",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"water_home":case"finish":{const i=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(o=>this.world.get(o.x,o.y,o.z)===Tn);return i?{name:"Save Beacon",x:i.x+.5,y:i.y,z:i.z+.5}:null}case"wreck":{const i=this.world.gen.secondShip;return{name:"Second Wreck",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"core":{const i=this.world.gen.secondShip;return{name:"Engine Core",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}}case"tool":{const i=[];this.world.get(0,31,-3)===Ze&&i.push({x:0,y:31,z:-3});for(const[l,h]of this.world.deltas){const[a,c]=l.split(",").map(Number);for(const[u,f]of h){if(f!==Ze)continue;const m=u%ee,v=Math.floor(u/ee)%X,y=Math.floor(u/(ee*X));i.push({x:a*X+y,y:m,z:c*X+v})}}if(!i.length)return null;const o=r(i);return{name:"Crafting Bench",x:o.x+.5,y:o.y,z:o.z+.5}}case"supplies":{const i=this.world.gen.nearestTown(e.x,e.z);return i?{name:"Town",x:i.x+.5,y:n(i.x,i.z),z:i.z+.5}:null}case"farm":{if(!this.crops.size)return null;let i=null,o=1/0;for(const c of this.crops.keys()){const[u,,f]=c.split(",").map(Number),m=(u+.5-e.x)**2+(f+.5-e.z)**2;m<o&&(o=m,i=c)}const[l,h,a]=i.split(",").map(Number);return{name:"Your Farm",x:l+.5,y:h+1,z:a+.5}}default:return null}}questFrame(){const t=mr(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===Tn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}questJump(t){this.tut&&this.tut.finish();const e=Math.max(0,Math.min(gi.length,t|0));this.quests.i=e,this.questShown="",this.renderQuest(),nt(e>=gi.length?"Quest chain skipped — every quest is done.":`Skipped to “${gi[e].title}”.`)}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=mr(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],r=e.id+":"+n;r!==this.questShown&&(this.questShown=r,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,r,i=window)=>{i.addEventListener(n,r),this.bound.set(n+(i===window?"":":el"),r)};t("keydown",n=>{const r=n;if(!r.repeat){if(this.keys.add(r.code),r.code==="KeyE"&&this.act(),r.code==="KeyQ"&&this.useItem(),r.code==="KeyX"&&this.surge(),r.code==="KeyT"&&this.toggleLantern(),r.code==="KeyI"&&this.toggleInv(),r.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=i.selectedSlot();o&&!i.rotate(o)&&(nt("No room to rotate."),this.audio.error())}this.renderInv()}if(r.code==="KeyR"&&!this.ui&&!this.paused&&!this.cine&&!this.liftoff){const i=this.inv.selectedSlot();i&&(this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.dropEntity(i.itemId,1,1),this.renderHeld(),this.audio.place())}if(r.code==="Escape"){if(this.liftoff)return;if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(r.code==="KeyP"&&!this.liftoff&&this.escape(!0),r.code.startsWith("Digit")){const i=Number(r.code.slice(5)),o=this.hotbarItems();if(i>=1&&i<=o.length){const l=o[i-1];this.inv.selectedSlot()?.itemId===l?this.inv.selected=-1:this.selectItem(l),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const r=n.target.closest("[data-hb]");if(!r)return;const i=this.hotbarItems()[Number(r.dataset.hb)];i&&(this.inv.selectedSlot()?.itemId===i?this.inv.selected=-1:this.selectItem(i),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const r=n;r.button===0?(this.mouseDown=!0,this.breakMsg=!1):r.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const r=n;this.player.yaw-=r.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*r.movementY*.0022*this.settings.sens,this.player.pitch=di.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>{this.ui||this.cycleItem(n.deltaY>0?1:-1)}),t("contextmenu",n=>n.preventDefault());else{let n=-1,r=0,i=0;e.addEventListener("touchstart",m=>{if(n<0){const v=m.changedTouches[0];n=v.identifier,r=v.clientX,i=v.clientY}m.preventDefault()}),e.addEventListener("touchmove",m=>{for(const v of m.changedTouches)v.identifier===n&&(this.player.yaw-=(v.clientX-r)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(v.clientY-i)*.005*this.settings.sens,this.player.pitch=di.clamp(this.player.pitch,-1.55,1.55),r=v.clientX,i=v.clientY);m.preventDefault()});const o=m=>{for(const v of m.changedTouches)v.identifier===n&&(n=-1)};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),document.addEventListener("contextmenu",m=>m.preventDefault());const l=document.getElementById("stick"),h=document.getElementById("knob");let a=-1;const c=m=>{const v=l.getBoundingClientRect();for(const y of m.changedTouches)if(y.identifier===a){const x=y.clientX-(v.left+v.width/2),_=y.clientY-(v.top+v.height/2),R=Math.max(1,Math.hypot(x,_)),T=Math.min(R,v.width/2)/(v.width/2);this.stick.x=x/R*T,this.stick.y=_/R*T,h.style.left=38+x/R*T*38+"px",h.style.top=38+_/R*T*38+"px"}};l.addEventListener("touchstart",m=>{a=m.changedTouches[0].identifier,c(m),m.preventDefault()}),l.addEventListener("touchmove",m=>{c(m),m.preventDefault()});const u=()=>{this.stick.x=0,this.stick.y=0,a=-1,h.style.left="38px",h.style.top="38px"};l.addEventListener("touchend",u),l.addEventListener("touchcancel",u);const f=(m,v,y)=>{const x=document.getElementById(m);x.addEventListener("touchstart",_=>{_.preventDefault(),v()}),x.addEventListener("touchend",_=>{_.preventDefault(),y&&y()}),x.addEventListener("touchcancel",()=>{y&&y()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-sprint",()=>{this.sprintOn=!this.sprintOn,document.getElementById("m-sprint").classList.toggle("on",this.sprintOn)}),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-lamp",()=>this.toggleLantern()),f("m-next",()=>this.cycleItem(1)),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=r=>!document.getElementById(r).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),document.getElementById("inv-bin").onclick=()=>this.binDiscard()}binDiscard(){if(this.temp){const n=Nt[this.temp.itemId].name;this.temp=null,this.tempOrigin=null,nt(`${n} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld();return}const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,e=t.selectedSlot();if(!e){nt("Select an item, then send it to the Bin."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),nt(`${Nt[e.itemId].name} goes into the Bin — gone for good.`),this.audio.place(),this.renderInv(),this.renderHeld()}overBin(t,e){const n=document.getElementById("inv-bin").getBoundingClientRect();return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),r=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,r),this.renderer.rebuildDirty(this.world);const i=this.renderer.updateSky(this.timeSec,this.player.pos),o=wo(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),l=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let u=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(u-=1),this.keys.has("KeyD")&&(u+=1);const m=this.keys.has("Space")||this.mobileJump;if(this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.sprintOn,this.player.update(t,u,f,m,this.speedMul,l),this.player.lastFallDist>0){const T=this.player.lastFallDist;if(this.player.lastFallDist=0,!this.player.inWater&&T>jh){const S=1-(this.equip.body?Nt[this.equip.body.itemId].armor??0:0),b=(T-jh)*gv*S;this.survival.hurt(b,"fall"),Xh(),this.audio.hurt(),this.survival.health>0&&b>=10&&nt("You hit the ground hard.")}}const y=(this.timeSec%Be/Be-.25)*Math.PI*2,x=i.sunElev>0?(()=>{const T=1/Math.hypot(Math.cos(y),i.sunElev,.4);return{x:Math.cos(y)*T,y:i.sunElev*T,z:.4*T}})():null;this.stormShieldTick(),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(u!==0||f!==0),overencumbered:l,biome:o,tSec:this.timeSec,sunElev:i.sunElev,sunDir:x,inWater:this.player.inWater,warmth:this.fireWarmth(this.player.pos),regulator:(this.equip.regulator?.charges??0)>0,terrainH:(T,S)=>re(this.seed,T,S),stormShield:this.stormShieldOn,stormMul:this.equip.body&&Nt[this.equip.body.itemId].stormResist?.25:1}),this.renderer.setStorm(this.survival.storm,this.survival.lastOpenSky),this.audio.setStorm(this.survival.storm),this.survival.storm>.5&&!this.stormToast?(this.stormToast=!0,nt("A Sandstorm rolls in — get out of the open."),this.audio.error()):this.survival.storm<.3&&this.stormToast&&(this.stormToast=!1,nt("The Sandstorm passes."));const _=this.equip.regulator;_&&(_.charges??0)>0&&(this.regulatorAcc+=t,this.regulatorAcc>=2880&&(this.regulatorAcc=0,_.charges=(_.charges??0)-1,_.charges<=0?(_.charges=0,nt("The Coolant Cell in your Regulator is spent."),this.audio.error()):nt("A Coolant Cell has been used up.")));const R=this.equip.light;this.lanternOn&&R&&((R.charges??0)<=0?this.toggleLantern():(this.lanternAcc+=t,this.lanternAcc>=240&&(this.lanternAcc=0,R.charges=(R.charges??0)-1,(R.charges??0)<=0&&(this.toggleLantern(),nt("The Head Lantern gutters out — refuel it at a Campfire."))))),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const u=this.renderer.camera;u.position.copy(this.player.eye()),u.rotation.order="YXZ",u.rotation.set(this.player.pitch,this.player.yaw,0),this.liftoff&&(u.position.x+=(Math.random()-.5)*.14,u.position.y+=(Math.random()-.5)*.1,u.position.z+=(Math.random()-.5)*.14)}this.liftoffFrame(t);const h=this.raycastTarget();this.renderer.setPlayerLight(this.lanternOn?this.player.eye():null),this.renderer.setHighlight(this.ui||this.cine?null:h?.hit??null),uv(this.ui||this.cine?null:this.promptFor(h)),fv(this.ui||this.cine||!h?.hit?null:F1(this.world.get(h.hit.x,h.hit.y,h.hit.z))),dv(this.player.headUnder);for(let u=this.entities.length-1;u>=0;u--){const f=this.entities[u];if(!f.buried&&(f.age=(f.age??0)+t,f.age>=300)){this.renderer.removeEntityMesh(f.id),this.entities.splice(u,1);continue}if(f.fall!==void 0){const v=Math.min(f.fall,14*t);f.y-=v,f.fall-=v,f.fall<=.001&&(f.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(f.id,[f.x,f.y,f.z])}const m=this.renderer.entityMesh(f.id);f.buried&&f.buriedAt&&this.world.get(f.buriedAt[0],f.buriedAt[1],f.buriedAt[2])!==Mt?m&&this.renderer.removeEntityMesh(f.id):m||this.renderer.addEntityMesh(f.id,[f.x,f.y,f.z],parseInt(Nt[f.itemId].color.slice(1),16))}for(const u of this.caches){const f=this.renderer.entityMesh(u.id);!f&&u.items.length?(this.renderer.addEntityMesh(u.id,this.cacheMeshPos(u),this.cacheColor(u),.7),u.markerEid=this.renderer.addGroundRing(u.x+.5,u.y,u.z+.5,u.kind==="reward"?14197322:13382434,1.4)):f&&!u.items.length&&(this.renderer.removeEntityMesh(u.id),u.markerEid!==void 0&&(this.renderer.removeEntityMesh(u.markerEid),u.markerEid=void 0))}this.regulatorGlow(),this.updateCrops(t),this.updateTrees(t),!this.ui&&!this.paused&&!this.cine&&this.cactusPrick();const a=this.survival.surgeCooldown>0;for(const u of["surge-btn","m-surge"]){const f=document.getElementById(u);f&&f.disabled!==a&&(f.disabled=a)}Kh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e,{regulated:this.roomRegulated(),stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=Be}),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.waterAcc+=t,this.waterAcc>.4&&(this.waterAcc=0,this.world.processWater()),this.audio.setDay(i.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const c=this.prevHp-this.survival.health;if(c>0){const u=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(c>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,Xh(),(c>=2||u)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),r=Math.floor(t.y),i=Math.floor(t.z);const o=new F(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),l=new F(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),h=(f,m)=>m>0?Math.ceil(f)-f||1:m<0?f-Math.floor(f)||1:1/0,a=new F(h(t.x,o.x)*l.x,h(t.y,o.y)*l.y,h(t.z,o.z)*l.z);let c=new F(n,r,i),u=null;for(let f=0;f<80;f++){const m=this.world.get(n,r,i);if(Dn(m)){if(u||(u={x:n,y:r,z:i}),m===Ve)return{hit:{x:n,y:r,z:i},water:u,face:new F(c.x-n,c.y-r,c.z-i)}}else if(m!==Mt&&m!==Ve)return{hit:{x:n,y:r,z:i},water:u,face:new F(c.x-n,c.y-r,c.z-i)};if(c.set(n,r,i),a.x<a.y&&a.x<a.z?(n+=o.x,a.x+=l.x):a.y<a.z?(r+=o.y,a.y+=l.y):(i+=o.z,a.z+=l.z),new F(n-t.x,r-t.y,i-t.z).length()>5.5)break}return{hit:null,water:u,face:new F(0,0,0)}}promptFor(t){if(this.nearestTrader())return"E: Trade with the Trader";if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Le)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===on||n===nn||n===en||n===He)return"E: Open door";if(n===je||n===Qe)return"E: Close door";if(n===Tn)return"E: Save game (respawn point)";if(n===Ze||n===mn)return"E: Craft";if(n===sn)return"E: Smelt";if(n===Fi)return"E: Draw neutral air (37 °C)";if(n===Ki)return this.inv.has("thruster_nozzle",1)?"E: Install Thruster Nozzle":null}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new F(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=this.inv.selectedSlot();if(e&&Nt[e.itemId].instaBreak)return{ok:!0,time:.01};const n=jn[t];if(n.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const r=e?Nt[e.itemId].tool:void 0;return n.tool!==null?!r||r.type!==n.tool?{ok:!1,time:0,why:`need a ${n.tool}`}:r.tier<n.minTier?{ok:!1,time:0,why:`need a tier ${n.minTier} ${n.tool}`}:{ok:!0,time:n.breakTime*Math.pow(.55,r.tier-1)}:{ok:!0,time:n.breakTime*(n.fastTool&&r&&r.type===n.fastTool?Math.pow(.55,r.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const h=this.inv.selectedSlot(),a=h?Nt[h.itemId]:null,c=a?.weapon;e.hp-=c?c.dmg:3+(a?.tool?.tier??0),this.audio.thud();const u=e.x-this.player.pos.x,f=e.z-this.player.pos.z,m=Math.max(.2,Math.hypot(u,f)),v=c?1.1:.6;this.mobCanStand(e,e.x+u/m*v,e.z+f/m*v)&&(e.x+=u/m*v,e.z+=f/m*v,e.y=this.mobGround(e,e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:r,y:i,z:o}=n.hit,l=this.world.get(r,i,o);if(!this.breaking||this.breaking.x!==r||this.breaking.y!==i||this.breaking.z!==o){const h=this.canBreakWith(l);if(!h.ok){h.why&&!this.breakMsg&&(this.breakMsg=!0,nt(h.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${h.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:r,y:i,z:o,need:h.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(r,i,o),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const r=this.world.get(t,e,n);if(this.questBump("mine"),vo(r)||r===je||r===Qe){const o=r===en||r===He||r===Qe;this.world.set(t,e,n,Mt);for(const l of[-1,1]){const h=this.world.get(t,e+l,n);(vo(h)||h===je||h===Qe)&&this.world.set(t,e+l,n,Mt)}this.giveOrDrop(o?"door_inner":"door",1),this.audio.blockBreak();return}if(r===Tn){this.world.set(t,e,n,Mt),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===t&&o.y===e&&o.z===n)),nt("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(r===gn){this.world.set(t,e,n,Mt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===mi){this.world.set(t,e,n,Mt),this.giveOrDrop("prickly_pear",2),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(r===Yn){this.world.set(t,e,n,Mt),this.trees.delete(`${t},${e},${n}`),this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===Pn||r===$n||r===dn||r===Hn){this.world.set(t,e,n,r===dn||r===Hn?Ln:Mt),this.crops.delete(`${t},${e},${n}`),r===Pn&&this.giveOrDrop("dune_melon",1),r===dn&&(this.giveOrDrop("wheat",1),this.giveOrDrop("seed_wheat",1)),r===$n&&this.giveOrDrop("seed_melon",1),r===Hn&&this.giveOrDrop("seed_wheat",1),this.audio.blockBreak();return}if(r===bi){this.world.set(t,e,n,Mt),this.giveOrDrop("kindling",1),mt(t+7*n,e,this.seed+91)<.2&&this.giveOrDrop("seed_tree",1),this.audio.blockBreak();return}if(r===rn||r===_n){this.world.set(t,e,n,Mt);const o=t+(r===rn?1:-1),l=this.world.get(o,e,n);(l===rn||l===_n)&&this.world.set(o,e,n,Mt),this.giveOrDrop("bed",1),this.audio.blockBreak();return}if(r===sn&&this.campCharges.delete(`${t},${e},${n}`),r===Le){const o=this.chestCluster(t,e,n),l=this.chests.get(ge.chestKey(o))??[];this.chests.delete(ge.chestKey(o)),this.world.set(t,e,n,Mt);const h=o.filter(([u,f,m])=>u!==t||f!==e||m!==n),a=[];for(const u of h){const f=this.chestCluster(u[0],u[1],u[2]),m=ge.chestKey(f);a.some(([v])=>v===m)||a.push([m,this.emptyChestGrid(f.length)])}let c=!1;for(const u of l)a.some(([,f])=>ge.placeSlotFree(f,u))||(this.dropEntity(u.itemId,1,2),c=!0);for(const[u,f]of a)f.slots.length&&this.chests.set(u,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),c&&nt("The remaining chests were full — some contents fell to the sand.");return}if(r===Yi){this.world.set(t,e,n,Mt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(r===Ze||r===mn){const o=this.benchPeer(t,e,n);this.world.set(t,e,n,Mt),o&&this.world.set(o[0],o[1],o[2],Mt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(r===In||r===sn)&&this.renderer.removePointLight(t,e,n),r===ki&&this.breakers.delete(`${t},${e},${n}`),this.world.set(t,e,n,Mt);const i=this.blockItemId(r);i&&this.giveOrDrop(i,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),r=Math.floor(e),i=Math.max(30,Math.round(re(this.seed,n,r))+8);for(let o=i;o>=0;o--){const l=this.world.get(n,o,r);if(l!==Mt&&jn[l].solid)return o+1}return-1}mobGround(t,e,n){if(t.kind!=="scorpion"&&t.kind!=="wurm")return this.mobSurface(e,n);const r=Math.floor(e),i=Math.floor(n);for(let o=Math.floor(t.y);o>=0;o--){const l=this.world.get(r,o,i);if(l!==Mt&&jn[l].solid)return o+1}return-1}mobCanStand(t,e,n){const r=this.mobGround(t,e,n);return r<0||r>t.y+1.01?!1:this.world.get(Math.floor(e),r,Math.floor(n))===Mt}spawnMob(t,e,n,r){const i=J_(t);i.group.position.set(e,n,r),i.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(i.group),this.mobs.push({kind:t,hp:go[t].hp,x:e,y:n,z:r,yaw:i.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:i})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(n=>n!==t);const e=go[t.kind];e.drops.forEach((n,r)=>{const i=e.dropChance?.[r]??1;(i>=1||Math.random()<i)&&this.giveOrDrop(n.itemId,n.count)}),nt(`${e.name} killed.`)}topUpMobs(){const t={snake:4,rat:8,scorpion:4,wurm:1,trader:0,vulture:3,tortoise:2,fennec:2},e={snake:0,rat:0,scorpion:0,wurm:0,trader:0,vulture:0,tortoise:0,fennec:0},n=this.player.pos;this.mobs=this.mobs.filter(i=>i.kind!=="trader"&&Math.abs(i.x-n.x)+Math.abs(i.z-n.z)>190?(this.renderer.removeSceneObject(i.vis.group),!1):!0);for(const i of this.mobs)e[i.kind]++;const r=this.player.pos;for(const i of["snake","rat","scorpion","wurm","vulture","tortoise","fennec"]){const o=i==="scorpion"||i==="wurm";if(!(o&&r.y>27))for(;e[i]<t[i];){e[i]++;const l=Math.random()*Math.PI*2,h=30+Math.random()*30,a=Math.floor(r.x+Math.cos(l)*h)+.5,c=Math.floor(r.z+Math.sin(l)*h)+.5;if(o){const u=i==="wurm"?5:8,f=i==="wurm"?16:24,m=this.caveSpot(a,c,u,f);if(m<0)continue;this.spawnMob(i,a,m,c)}else{if(Math.hypot(a,c)<24||this.beaconMarks.some(m=>Math.hypot(m.x+.5-a,m.z+.5-c)<16))continue;const u=vr(this.seed).nearestCamp(a,c);if(u&&Math.hypot(u.x-a,u.z-c)<34)continue;const f=this.mobSurface(a,c);if(f<=1||this.world.get(Math.floor(a),f,Math.floor(c))!==Mt||this.world.get(Math.floor(a),f+1,Math.floor(c))!==Mt)continue;this.spawnMob(i,a,f,c)}}}this.ensureTraders()}ensureTraders(){const t=vr(this.seed),e=this.player.pos,n=110,r=Math.floor((e.x-n)/Te),i=Math.floor((e.x+n)/Te),o=Math.floor((e.z-n)/Te),l=Math.floor((e.z+n)/Te);for(let h=r;h<=i;h++)for(let a=o;a<=l;a++){if(!t.campAt(h,a))continue;const c=t.campCenter(h,a);if(Math.hypot(c.x-e.x,c.z-e.z)>n)continue;const u=h+","+a,f=this.traderAt.get(u);if(f&&this.mobs.includes(f))continue;const m=e_(c),v=this.mobSurface(m.x,m.z);v<=1||(this.spawnMob("trader",m.x,v,m.z),this.traderAt.set(u,this.mobs[this.mobs.length-1]))}if(this.traderAt.size)for(const[h,a]of this.traderAt)this.mobs.includes(a)||this.traderAt.delete(h)}nearestTrader(){const t=this.player.pos;let e=null,n=3.6;for(const r of this.mobs){if(r.kind!=="trader")continue;const i=Math.hypot(r.x-t.x,r.z-t.z);i<n&&(n=i,e=r)}return e}openTrade(t){const e=vr(this.seed).nearestCamp(t.x,t.z);this.tradeCamp=e?{x:e.x,z:e.z}:{x:t.x,z:t.z},this.tradeOffers=Q_(this.seed,this.tradeCamp.x,this.tradeCamp.z,this.dayNumber()),this.ui="trade",this.unlockPointer(),this.renderTrade(),document.getElementById("ui-trade").classList.remove("hidden"),this.audio.pickup()}renderTrade(){const t=document.getElementById("trade-offers");t.innerHTML="";for(let e=0;e<this.tradeOffers.length;e++){const n=this.tradeOffers[e],r=document.createElement("div");r.className="trade-row";const i=l=>l.map(h=>`<span class="trade-item">${Nt[h.itemId].name}${h.count>1?" ×"+h.count:""}</span>`).join(" + ");r.innerHTML=`<span class="trade-side want">${i(n.want)}</span><span class="trade-arrow">→</span><span class="trade-side give">${i(n.give)}</span>`;const o=document.createElement("button");o.textContent="Trade",o.onclick=()=>this.trade(e),r.appendChild(o),t.appendChild(r)}document.getElementById("trade-note").textContent=`Day ${this.dayNumber()} — the Trader restocks the table at every dawn.`}trade(t){if(this.ui!=="trade")return;const e=this.tradeOffers[t];for(const n of e.want)if(!this.inv.has(n.itemId,n.count)){nt(`You don't have ${n.count} × ${Nt[n.itemId].name}.`),this.audio.error();return}for(const n of e.want)this.inv.removeItem(n.itemId,n.count);for(const n of e.give)this.giveOrDrop(n.itemId,n.count);nt("Traded."),this.audio.drink(),this.renderTrade()}caveSpot(t,e,n,r){const i=Math.floor(t),o=Math.floor(e);for(let l=r;l>=n;l--){if(this.world.get(i,l,o)!==Mt||this.world.get(i,l-1,o)===Mt||this.world.get(i,l+1,o)!==Mt)continue;let h=-1;for(let a=1;a<=3;a++)if(fn(this.world.get(i,l+a,o))){h=a;break}if(!(h<0))return l}return-1}meleeMob(){const t=this.player.eye(),e=new F;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),r=n?Nt[n.itemId].weapon?.reach??3.2:3.2,i=this.raycastTarget(),o=i?.hit?Math.hypot(i.hit.x+.5-t.x,i.hit.y+.5-t.y,i.hit.z+.5-t.z):1/0;let l=null,h=1/0;for(const a of this.mobs){if(a.kind==="trader")continue;const c=go[a.kind],u=a.x-t.x,f=a.y+c.height/2-t.y,m=a.z-t.z,v=u*e.x+f*e.y+m*e.z;if(v<.2||v>r||v>o)continue;const y=t.x+e.x*v-a.x,x=t.y+e.y*v-(a.y+c.height/2),_=t.z+e.z*v-a.z;y*y+x*x+_*_>(c.hitR+.3)*(c.hitR+.3)||v<h&&(h=v,l=a)}return l}columnClear(t,e,n,r){const i=Math.floor(t),o=Math.floor(e);for(let l=Math.floor(n);l<=Math.floor(r);l++){const h=this.world.get(i,l,o);if(h!==Mt&&h!==Ve)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const r of this.mobs.slice()){const i=go[r.kind];if(r.kind==="trader"){r.vis.animate(n,0);continue}const o=e.x-r.x,l=e.z-r.z,h=Math.hypot(o,l);if(h>110){this.renderer.removeSceneObject(r.vis.group),this.mobs=this.mobs.filter(x=>x!==r);continue}let a=0,c=0;const u=this.columnClear(r.x,r.z,r.y+.2,e.y+1.4),f=r.kind==="vulture"&&this.survival.health<60,m=r.kind==="vulture"?f?i.aggroR:0:i.aggroR,v=r.kind==="vulture"&&!f?i.fleeR:r.kind==="vulture"?0:i.fleeR;if(m>0&&h<m&&h>.01&&u){if(a=o/h*i.speed,c=l/h*i.speed,r.yaw=Math.atan2(a,c),h<1.2+i.hitR&&r.biteCd<=0){r.biteCd=i.biteCd;const x=1-(this.equip.body?Nt[this.equip.body.itemId].armor??0:0);this.survival.hurt(i.biteDmg*x,`${i.name.toLowerCase()} bite`),nt(x<1?`A ${i.name.toLowerCase()} bites you — the armour soaks some of it.`:`A ${i.name.toLowerCase()} bites you!`)}}else v>0&&h<v&&h>.01?(a=-o/h*i.speed,c=-l/h*i.speed,r.yaw=Math.atan2(a,c)):(r.wanderT-=t,r.wanderT<=0&&(r.wanderT=2+Math.random()*4,r.wanderYaw=Math.random()*Math.PI*2,r.wanderOn=Math.random()<.55),r.wanderOn&&(a=Math.sin(r.wanderYaw)*i.speed*.35,c=Math.cos(r.wanderYaw)*i.speed*.35,r.yaw=r.wanderYaw));r.biteCd-=t;let y=0;if(a!==0||c!==0){const x=r.x+a*t,_=r.z+c*t;this.mobCanStand(r,x,_)?(r.x=x,r.z=_,y=1):r.wanderYaw=r.yaw=Math.random()*Math.PI*2}r.y=this.mobGround(r,r.x,r.z),r.vis.group.position.set(r.x,r.y,r.z),r.vis.group.rotation.y=r.yaw,r.vis.animate(n,y)}}gridFits(t,e){const n=new Fa;n.slots=[],n.w=t,n.h=e;for(const r of this.inv.slots)if(!ge.placeSlotFree(n,{...r,x:0,y:0}))return!1;return!0}bagSize(){return(this.equip.backpack?Nt[this.equip.backpack.itemId].bag:null)??{w:3,h:4,kg:0}}applyEquip(){const t=this.bagSize();(this.inv.w!==t.w||this.inv.h!==t.h)&&this.inv.setBackpack(t.w,t.h,t.kg),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=Nt[t.itemId];if(!e.equip)return;const n=e.equip,r=this.equip[n];if(r&&this.inv.addItem(r.itemId,1)>0){nt("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),n==="light"&&(this.lanternOn=!1),(n==="light"||n==="regulator")&&t.charges===void 0&&(t.charges=0),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),nt(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(!e)return;const n=t==="backpack"?{w:3,h:4}:this.bagSize();if(!this.gridFits(n.w,n.h)){nt("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,t==="light"&&(this.lanternOn=!1),this.applyEquip(),this.inv.addItem(e.itemId,1),this.audio.place(),nt(`${Nt[e.itemId].name} taken off.`),this.renderInv()}benchPeer(t,e,n){for(const[r,i]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.world.get(t+r,e,n+i);if(o===Ze||o===mn)return[t+r,e,n+i]}return null}blockItemId(t){return Qn[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),nt(`No room: dropped ${Nt[t].name}`))}dropEntity(t,e,n=0){const r=this.player.pos,i=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),l=(u,f)=>{const m=Math.floor(r.x+u),v=Math.floor(r.z+f);return!fn(this.world.get(m,Math.floor(r.y),v))&&!fn(this.world.get(m,Math.floor(r.y+1),v))},h=[[i*1.8,o*1.8],[-i*1.8,-o*1.8],[o*1.8,-i*1.8],[-o*1.8,i*1.8],[0,0]],[a,c]=h.find(([u,f])=>l(u,f))??[0,0];for(let u=0;u<e;u++){const f=u===0?0:.3*Math.sin(u*2.4),m=u===0?0:.3*Math.cos(u*2.4);this.entities.push({id:this.entitySeq++,x:r.x+a+f,y:r.y+.35,z:r.z+c+m,itemId:t,repickAt:a===0&&c===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;if(t.itemId==="bucket"){this.bucketScoop();return}if(t.itemId==="bucket_full"){this.bucketPour();return}const e=Nt[t.itemId];if(e.block===void 0){nt("Not a placeable block"),this.audio.error();return}if(!jn[e.block].placeable){nt(`${e.name} is raw material, not a block to place.`),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const r=n.hit.x+n.face.x,i=n.hit.y+n.face.y,o=n.hit.z+n.face.z,l=this.world.get(r,i,o);if(l!==Mt&&!(Dn(l)&&l!==Ve))return;if(fn(e.block)){const c=this.player.pos;if(r+1>c.x-.3&&r<c.x+.3&&o+1>c.z-.3&&o<c.z+.3&&i+1>c.y&&i<c.y+1.8)return}let h=[];if(e.block===Le){const c=new Set;for(const[u,f,m]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(r+u,i+f,o+m)!==Le)continue;const v=ge.chestKey(this.chestCluster(r+u,i+f,o+m));c.has(v)||(c.add(v),h.push(...this.chests.get(v)??[]),this.chests.delete(v))}}let a=null;if(e.block===Ze){const c=this.player.pos;for(const[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){const m=r+u,v=o+f;if(this.world.get(m,i,v)===Mt&&!(m+1>c.x-.3&&m<c.x+.3&&v+1>c.z-.3&&v<c.z+.3&&i+1>c.y&&i<c.y+1.8)){a=[m,i,v];break}}if(!a){nt("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(e.block===$n||e.block===Hn||e.block===gn||e.block===Yn){const c=this.world.get(r,i-1,o);if(!(e.block===Yn?c===Jn||c===Ln||c===ai:c===Ln||e.block===gn&&(c===Zn||c===vn||c===Jn))){nt(e.block===Yn?"Tree Seeds go in Dirt — real soil, never sand.":"Plant on Farm Land (till with a shovel); a Cactus also accepts sand."),this.audio.error();return}}if(this.world.set(r,i,o,e.block),a&&this.world.set(a[0],a[1],a[2],mn),e.block===on&&this.world.get(r,i+1,o)===Mt&&this.world.set(r,i+1,o,nn),e.block===en&&this.world.get(r,i+1,o)===Mt&&this.world.set(r,i+1,o,He),e.block===rn&&this.world.get(r+1,i,o)===Mt&&this.world.set(r+1,i,o,_n),(e.block===$n||e.block===Hn)&&(this.crops.set(`${r},${i},${o}`,0),this.tut?.notify("plant")),e.block===Yn&&(this.trees.set(`${r},${i},${o}`,0),this.tut?.notify("plant"),nt("Seed in the soil. Keep water within 6 blocks and it climbs, stage by stage.")),e.block===Yi)if(this.beaconAdjacent(r,i,o)){const c=mr(this.quests);c&&c.kind==="finish"&&!this.tut?this.questBump("finish"):nt("The Core hums next to the beacon. Power runs — now wake the wingtip engines.")}else nt("The relay needs the Core right next to a Save Beacon.");e.block===In?this.renderer.addPointLight(r,i,o,"lamp"):e.block===sn&&this.renderer.addPointLight(r,i,o,"fire"),e.block===ki&&this.breakers.add(`${r},${i},${o}`),e.block===Le&&this.linkChests(r,i,o,h),this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}beaconAdjacent(t,e,n){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([r,i,o])=>this.world.get(t+r,e+i,n+o)===Tn)}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget(),e=this.nearestTrader();if(e){this.openTrade(e);return}if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Le){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const n=this.nearestCache();if(n){this.openCacheId=n.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:r,y:i,z:o}=t.hit,l=this.world.get(r,i,o);if(l===Pn||l===dn||l===mi){this.harvest(r,i,o,l);return}if(l===rn||l===_n){this.sleep();return}if(vo(l)||l===je||l===Qe){const h=l===en||l===He||l===Qe,a=h?Qe:je,c=m=>h?m===en||m===He:m===on||m===nn,u=h?en:on,f=h?He:nn;if(l===a){const m=this.player.pos;if(m.x>r-.2&&m.x<r+1.2&&m.z>o-.2&&m.z<o+1.2){nt("Step out of the doorway first."),this.audio.error();return}this.world.get(r,i-1,o)===a?(this.world.set(r,i,o,f),this.world.set(r,i-1,o,u)):this.world.get(r,i+1,o)===a?(this.world.set(r,i,o,u),this.world.set(r,i+1,o,f)):this.world.set(r,i,o,c(this.world.get(r,i+1,o))?f:u)}else{const m=fn(this.world.get(r-1,i,o))||fn(this.world.get(r+1,i,o)),v=this.player.pos,y=m?v.z-(o+.5):v.x-(r+.5),x=r+","+o;Math.abs(y)>.35?this.world.doorSwing.set(x,y>0?-1:1):this.world.doorSwing.delete(x),this.world.set(r,i,o,a);for(const _ of[-1,1])c(this.world.get(r,i+_,o))&&this.world.set(r,i+_,o,a);this.tut?.notify("door")}this.audio.door();return}if(l===Tn){this.tut?.notify("save"),this.beaconMarks.some(h=>h.x===r&&h.y===i&&h.z===o)||this.beaconMarks.push({x:r,y:i,z:o}),this.audio.savePing(),this.saveNow()?nt("Saved. Death will respawn you at this beacon."):nt("This world is not saved — the beacon only marks it.");return}if(l===Ze||l===mn){this.openStation=[r,i,o],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(l===sn){this.openStation=[r,i,o],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(l===Ki){if(!this.inv.has("thruster_nozzle",1)){this.audio.error(),nt("A dead wingtip engine. It needs a Thruster Nozzle — Cobalt from the deep Caves.");return}this.inv.removeItem("thruster_nozzle",1),this.world.set(r,i,o,Tr),this.renderer.addPointLight(r,i,o,"fire"),this.questBump("thruster"),this.audio.door(),this.audio.win(),nt("Nozzle seated. The engine coughs, catches, holds."),!this.liftoff&&this.thrustersAllLit()&&this.startLiftoff();return}if(l===Fi){let h=null;for(const[a,c,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const f=this.world.roomInfo(r+a,i+c,o+u);if(f.size>0){h=f;break}}h&&h.sealed&&h.regulators*xr>=h.size?(this.survival.body=37,this.audio.drink(),nt("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),nt("That Regulator is idle — its space is unsealed or too big for it."));return}}if(t.water){if(this.inv.selectedSlot()?.itemId==="bucket"){nt("E won't fill it — press Q or right-click with the Bucket to scoop."),this.audio.error();return}this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),nt(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):nt("You need an empty Water Canister.")}}}harvest(t,e,n,r){r===Pn?(this.world.set(t,e,n,$n),this.crops.set(`${t},${e},${n}`,30),this.giveOrDrop("dune_melon",1+(mt(t,n,this.seed+71)<.4?1:0)),this.questBump("farm"),this.audio.pickup(),nt("Dune Melon picked — the plant keeps growing.")):r===dn?(this.world.set(t,e,n,Ln),this.crops.delete(`${t},${e},${n}`),this.giveOrDrop("wheat",2),this.giveOrDrop("seed_wheat",1),this.questBump("farm"),this.audio.pickup(),nt("Desert Wheat cut — the Farmland stays tilled.")):(this.world.set(t,e,n,gn),this.giveOrDrop("prickly_pear",2),this.questBump("farm"),this.audio.pickup(),nt("Prickly Pears picked — the cactus goes on fruiting."))}sleep(){const t=this.timeSec-this.lastSleep;if(t<Be){const n=Math.ceil((Be-t)/60);nt(`You just slept. The next long sleep comes in ${n} min.`),this.audio.error();return}this.lastSleep=this.timeSec,this.timeSec+=Be/3;const e=document.getElementById("sleepfade");e.classList.add("on"),this.audio.door(),setTimeout(()=>e.classList.remove("on"),1200),nt("You sleep eight hours, to the cool of the morning."),this.saveNow()}fireWarmth(t){const e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);let i=0;for(let o=-6;o<=6;o++)for(let l=-6;l<=6;l++)for(let h=-2;h<=2;h++){if(this.world.get(e+o,n+h,r+l)!==sn)continue;const a=Math.max(Math.abs(o),Math.abs(l));i=Math.max(i,a<=4?18:9)}return i}updateCrops(t){if(this.cropAcc+=t,this.cropAcc<2)return;const e=this.cropAcc;this.cropAcc=0;for(const[n,r]of this.crops){const[i,o,l]=n.split(",").map(Number),h=this.world.get(i,o,l);if(h!==$n&&h!==Pn&&h!==Hn&&h!==dn){this.crops.delete(n);continue}if(h===Pn||h===dn)continue;const a=h===$n;let c=!1;t:for(let m=-4;m<=4;m++)for(let v=-4;v<=4;v++)for(let y=-2;y<=1;y++)if(Dn(this.world.get(i+m,o+y,l+v))){c=!0;break t}const u=this.survival.airTempAt(this.world,i,o,l,this.timeSec),f=a?u>=22&&u<=45:u>=2&&u<=42;if(c&&f){const m=r+e;this.crops.set(n,m),m>=(a?60:90)&&this.world.set(i,o,l,a?Pn:dn)}}}bucketScoop(){const t=this.raycastTarget();if(!t?.water){nt("Aim at water."),this.audio.error();return}const{x:e,y:n,z:r}=t.water;if(this.world.get(e,n,r)!==Ve){nt("Only a still Source fills the bucket — flowing water slips through."),this.audio.error();return}if(!this.inv.has("bucket",1)){nt("You need an empty Bucket."),this.audio.error();return}this.inv.removeItem("bucket",1),this.giveOrDrop("bucket_full",1),this.world.set(e,n,r,Mt),this.audio.drink(),nt("Bucket scooped from the Source — that water is gone from here."),this.renderHeld()}bucketPour(){const t=this.raycastTarget();if(!t?.hit)return;const e=t.hit.x+t.face.x,n=t.hit.y+t.face.y,r=t.hit.z+t.face.z;if(this.world.get(e,n,r)!==Mt){nt("Pour into open space."),this.audio.error();return}this.world.set(e,n,r,Ve),this.inv.removeItem("bucket_full",1),this.giveOrDrop("bucket",1),this.audio.drink(),nt("Water pours out and finds its level."),this.renderHeld()}updateTrees(t){if(!this.trees.size||(this.treeAcc+=t,this.treeAcc<2))return;const e=this.treeAcc;this.treeAcc=0;for(const[n,r]of this.trees){const[i,o,l]=n.split(",").map(Number),h=this.world.get(i,o,l);if(h!==Yn&&h!==kn){this.trees.delete(n);continue}let a=!1;t:for(let m=-6;m<=6;m++)for(let v=-6;v<=6;v++)for(let y=-3;y<=3;y++)if(Dn(this.world.get(i+m,o+y,l+v))){a=!0;break t}if(!a)continue;const c=Math.min(480,r+e);this.trees.set(n,c);const u=c>=480?3:c>=270?2:c>=120?1:0;if(u===0)continue;let f=this.treePlanCache.get(n);if(!f){let m=Math.floor(mt(i+7*l,o,this.seed+55)*1e9)+1;f=Fu(i,o,l,()=>(m=m*1103515245+12345&2147483647,m/2147483647)),this.treePlanCache.set(n,f)}for(const m of f){if(m.stage>u)continue;const v=this.world.get(m.x,m.y,m.z);(v===Mt||v===Yn)&&this.world.set(m.x,m.y,m.z,m.b)}}}cactusPrick(){const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),r=Math.floor(t.z);for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)for(let l=0;l<=2;l++){const h=this.world.get(e+i,n+l,r+o);if(!(h!==gn&&h!==mi)&&!(Math.abs(t.x-(e+i+.5))>1.15||Math.abs(t.z-(r+o+.5))>1.15)){this.timeSec-this.lastPrick>=1.5&&(this.lastPrick=this.timeSec,this.survival.hurt(1,"cactus spines"),this.audio.hurt(),nt("Cactus spines prick you!"));return}}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){nt("Select an item first."),this.audio.error();return}const e=Nt[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(t.itemId==="bucket"){this.bucketScoop();return}if(e.eat){this.eat(t,e);return}if(e.tool?.type==="shovel"){const n=this.raycastTarget();if(n?.hit){const{x:r,y:i,z:o}=n.hit,l=this.world.get(r,i,o);if(n.face.y===1&&(l===Jn||l===ai)){this.world.set(r,i,o,Ln),this.audio.place(),nt("Tilled into Farm Land — plant seeds here, keep water within 4 blocks.");return}if(n.face.y===1&&(l===Zn||l===vn||l===bs)){nt("Sand won't hold a furrow — Farm Land is made from Dirt."),this.audio.error();return}}}nt(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),nt(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){nt("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&nt("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}toggleLantern(){const t=this.equip.light;if(!t){nt("Nothing in your Light slot. A Head Lantern lights the dark."),this.audio.error();return}if(this.lanternOn){this.lanternOn=!1;return}if((t.charges??0)<=0){nt("The lantern is dry — press E at a Campfire to refuel it."),this.audio.error();return}this.lanternOn=!0,this.lanternAcc=0,nt("Head Lantern on. T puts it out.")}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){nt("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){nt("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),nt("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}stormShieldTick(){const t=Math.floor(this.timeSec*2);if(t===this.breakerTick)return;this.breakerTick=t;const e=this.player.pos;let n=null,r=1/0;for(const i of this.breakers){const[o,l,h]=i.split(",").map(Number),a=Math.hypot(e.x-(o+.5),e.y+.9-(l+.5),e.z-(h+.5));a<=ku&&a<r&&(r=a,n=[o,l,h])}this.stormShieldOn=n!==null,this.renderer.setStormDome(n?[n[0]+.5,n[1]+.5,n[2]+.5]:null)}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),r=Math.floor(e.y),i=Math.floor(e.z);let o=this.world.roomInfo(n,r,i);if(o.size===0)t:for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++){const f=this.world.roomInfo(n+a,r+c,i+u);if(f.size>0){o=f;break t}}const l=o.sealed&&o.regulators>0&&o.regulators*xr>=o.size;this.regActive=l;const h=new Set(l?o.regCells:[]);for(const[a,c]of this.regGlow){if(h.has(a))continue;this.renderer.removeEntityMesh(c);const[u,f,m]=a.split(",").map(Number);this.renderer.removePointLight(u,f,m),this.regGlow.delete(a)}for(const a of h){if(this.regGlow.has(a))continue;const[c,u,f]=a.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new se({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,v=this.renderer.addEntityMesh(m,[c+.5,u+.5,f+.5],9427199,1.03);v.material=this.regGlowMat,this.renderer.addPointLight(c,u,f,"cool"),this.regGlow.set(a,m)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==Mt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}t.distanceTo(new F(n.x,n.y,n.z))<1.3&&this.inv.addItem(n.itemId,1)===0&&(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup())}}}static SHIP_IDS=new Set([Ne,Je,yi,Mi,Ss,on,nn,je,en,He,Qe,In,Tn,Ze,mn,Fi,Yi,rn,_n]);liftoff=null;thrustersAllLit(){let t=0;for(let e=29;e<=37;e++)for(let n=-8;n<=6;n++)for(let r=-13;r<=13;r++){const i=this.world.get(n,e,r);if(i===Ki)return!1;i===Tr&&t++}return t>=4}startLiftoff(){const t=[];for(let n=37;n>=29;n--){const r=[];for(let i=-8;i<=6;i++)for(let o=-13;o<=13;o++){const l=this.world.get(i,n,o);ge.SHIP_IDS.has(l)&&r.push([i,n,o,l])}r.length&&t.push(r)}this.liftoff={t:0,rows:t,step:0,restored:0},this.ui="liftoff",document.pointerLockElement&&document.exitPointerLock();const e=document.getElementById("lift-fx");e.classList.remove("hidden"),e.textContent="ENGINE IGNITION",nt("The whole Ship shudders. Every plate rattles at once."),this.audio.win()}liftoffFrame(t){const e=this.liftoff;if(!e)return;e.t+=t;const n=2.2/e.rows.length,r=2.4,i=4.6,o=i+2.2,l=document.getElementById("lift-fx");for(l.textContent=e.t<r?"LIFT-OFF":e.t<i?"RESCUE SIGNAL LIVE":"TOUCHDOWN";e.step<e.rows.length&&e.t>=e.step*n;){for(const[h,a,c]of e.rows[e.step])this.world.set(h,a,c,Mt);this.audio.door(),e.step++}if(e.t>i)for(;e.restored<e.rows.length&&e.t-i>=e.restored*n;){for(const[h,a,c,u]of e.rows[e.rows.length-1-e.restored])this.world.set(h,a,c,u);this.audio.door(),e.restored++}e.t>=o+.4&&(this.liftoff=null,this.ui=null,l.classList.add("hidden"),this.saveNow(!0),this.win())}win(){this.won||(this.won=!0,Wh(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`The Ship lifts off. All four engines burn. Survived ${this.scoreDays().toFixed(1)} days. Best: ${Rr().toFixed(1)} days.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:[...this.inv.slots.map(t=>({itemId:t.itemId,count:1})),...["backpack","head","body","regulator","light"].map(t=>this.equip[t]).filter(t=>!!t).map(t=>({itemId:t.itemId,count:1}))]}),this.inv.slots=[],this.inv.selected=0,this.equip={backpack:null,head:null,body:null,regulator:null,light:null},this.lanternOn=!1,Wh(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${Rr().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/Be}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===Tn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){nt("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache","ui-trade"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}roomRegulated(){return this.regActive}renderHeld(){Kh(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now(),{regulated:this.regActive,stormBroken:this.stormShieldOn,napReady:this.timeSec-this.lastSleep>=Be})}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const u=Nt[this.temp.itemId];e.classList.add("filled"),e.style.background=u.color,e.style.backgroundImage=`url(${To(this.temp.itemId)[0]??""})`,e.onmousedown=f=>{if(Date.now()-this.lastTouchTs<700){this.tapTemp();return}this.startTempDrag(f)},n.textContent=`Drop ${u.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,1,1),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const u of["backpack","head","body","regulator","light"]){const f=document.getElementById("eq-"+u),m=this.equip[u];if(m){const v=Nt[m.itemId];f.classList.add("filled"),f.style.background=v.color,f.style.backgroundImage=`url(${To(m.itemId)[0]??""})`;const y=m.charges;f.textContent=y!==void 0&&y>0?String(y):"",f.title=y!==void 0?`Click to take off the ${v.name} — ${y} charge${y===1?"":"s"} left`:`Click to take off the ${v.name}`,f.onclick=()=>this.unequipSlot(u)}else f.classList.remove("filled"),f.style.background="#23262e",f.style.backgroundImage="",f.textContent="",f.title="",f.onclick=()=>{const v=this.inv.selectedSlot();v&&Nt[v.itemId].equip===u?this.equipItem():v&&(nt(`The ${Nt[v.itemId].name} does not fit the ${u} slot.`),this.audio.error())}}const r=document.getElementById("inv-side"),i=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=i.selectedSlot(),l=this.temp??o,h=this.inv.weight()+(this.temp?Nt[this.temp.itemId].mass:0),a=this.inv.weightLimit(),c=l?Bn(l):null;if(r.textContent=l?`${Nt[l.itemId].name} — ${Nt[l.itemId].desc}`:"Click an item to inspect it; drag to move it.",r.textContent+=` Weight ${h.toFixed(1)} / ${a} kg`,l&&c&&c.w!==c.h){const u=document.createElement("button");u.textContent="Rotate",u.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:i.rotate(o)||(nt("No room to rotate."),this.audio.error()),this.renderInv()},r.appendChild(u)}if(o){const u=Nt[o.itemId];if(u.equip){const f=document.createElement("button");f.textContent=`Equip (${u.equip} slot)`,f.onclick=()=>this.equipItem(),r.appendChild(f)}if(o.itemId==="coolant_cell"&&this.equip.regulator){const f=this.equip.regulator,m=(f.charges??0)>=3,v=document.createElement("button");v.textContent=m?"Regulator holds 3 cells already — that's six days of neutral air":"Load Coolant Cell into the Regulator (each lasts 2 game days)",v.disabled=m||!this.inv.has("coolant_cell",1),v.onclick=()=>{m||!this.inv.has("coolant_cell",1)||(this.inv.removeItem("coolant_cell",1),f.charges=(f.charges??0)+1,this.audio.pickup(),nt(`Coolant Cell loaded — ${f.charges} charge${f.charges===1?"":"s"} running.`),this.renderInv())},r.appendChild(v)}}if(o)if(i===this.chestInv){const u=document.createElement("button");u.textContent="Move to pack",u.onclick=()=>{const f=i.slots.indexOf(o);i.slots.splice(f,1),ge.placeSlotFree(this.inv,o)||(i.slots.splice(f,0,o),nt("No room in your pack."),this.audio.error()),this.renderInv()},r.appendChild(u)}else{const u=document.createElement("button");u.textContent="Drop 1",u.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},r.appendChild(u)}}renderGrid(t,e){const n=ge.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const r=(i,o)=>t.slots.find(l=>{const h=Bn(l);return i>=l.x&&i<l.x+h.w&&o>=l.y&&o<l.y+h.h});for(let i=0;i<t.h;i++)for(let o=0;o<t.w;o++){const l=document.createElement("div");l.className="invcell";const h=r(o,i);if(h){const a=Nt[h.itemId],c=o-h.x,u=i-h.y,f=To(h.itemId),m=h.rot?(a.h-1-c)*a.w+u:u*a.w+c;l.style.background=a.color,l.style.backgroundImage=`url(${f[Math.min(m,f.length-1)]??""})`,t.slots.indexOf(h)===t.selected&&l.classList.add("active"),l.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${a.name} — ${a.desc}`},l.onmousedown=y=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,o,i):this.startInvDrag(y,h,t)}}else l.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,o,i)};e.appendChild(l)}}tapCell(t,e,n){const r=t.slots.find(l=>{const h=Bn(l);return e>=l.x&&e<l.x+h.w&&n>=l.y&&n<l.y+h.h}),i=t===this.inv?this.chestInv:this.inv;if(i){const l=i.selectedSlot();if(l&&l!==r){const h=Bn(l),a=Math.min(e,t.w-h.w),c=Math.min(n,t.h-h.h);if(a>=0&&c>=0&&t.fits(a,c,h.w,h.h,l)){i.slots.splice(i.slots.indexOf(l),1),i.selected=-1,l.x=a,l.y=c,t.slots.push(l),t.selected=t.slots.indexOf(l),this.audio.place(),this.renderInv(),this.renderHeld();return}nt("No room there."),this.audio.error();return}}const o=t.selectedSlot();if(o&&o!==r){const l=Bn(o),h=Math.min(e,t.w-l.w),a=Math.min(n,t.h-l.h);if(h>=0&&a>=0&&this.tapMove(t,o,r,h,a)){this.audio.place(),t.selected=t.slots.indexOf(o),this.renderInv();return}}r?(this.setSel(t,t.slots.indexOf(r)),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,r,i){const o=Bn(e);if(t.fits(r,i,o.w,o.h,e))return t.move(e,r,i);if(!n)return!1;const l=Bn(n),h=t.slots.indexOf(e);t.slots.splice(h,1);const a=t.fits(e.x,e.y,l.w,l.h,n)&&t.fits(r,i,o.w,o.h,n)&&!(r<e.x+l.w&&e.x<r+o.w&&i<e.y+l.h&&e.y<i+o.h)&&t.move(n,e.x,e.y)&&t.move(e,r,i);return t.slots.splice(h,0,e),a}setSel(t,e){const n=t===this.inv?this.chestInv:this.inv;n&&(n.selected=-1),t.selected=e}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const r=n.slots.indexOf(e);this.setSel(n,r),n.slots.splice(r,1);const i=this.temp;this.temp=e,this.tempOrigin=n,i&&(n.slots.push(i),n.move(i,e.x,e.y)||this.giveOrDrop(i.itemId,1));const o=(ge.CELL+ge.GAP)*this.uiZoom(),l=ge.GAP*this.uiZoom(),h=Bn(e),a=document.createElement("div");a.className="inv-ghost",a.style.width=h.w*o-l+"px",a.style.height=h.h*o-l+"px",a.style.background=Nt[e.itemId].color,a.style.backgroundImage=`url(${Ui(e.itemId,e.rot?1:0)})`,document.body.appendChild(a);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:t.clientX-(c.left+e.x*o),gy:t.clientY-(c.top+e.y*o)},f=v=>{a.style.left=v.clientX-u.gx+"px",a.style.top=v.clientY-u.gy+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(v.clientX,v.clientY))},m=v=>{if(window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),a.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(v.clientX,v.clientY)){this.binDiscard();return}const y=Bn(e);let x=null,_=0,R=0;for(const[T,S]of this.gridsEls()){const b=T.getBoundingClientRect();if(_=Math.round((v.clientX-b.left-u.gx)/o),R=Math.round((v.clientY-b.top-u.gy)/o),_>=0&&R>=0&&_<=S.w-y.w&&R<=S.h-y.h){x=S;break}}x&&(x.slots.push(e),x.move(e,_,R)||x===n&&x.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),this.setSel(x,x.slots.indexOf(e))):x.slots.splice(x.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",m),f(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const o=e.slots.indexOf(t);if(e.slots.splice(o,1),!ge.placeSlotFree(n,t)){e.slots.splice(o,0,t),nt(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const r=e.slots.indexOf(t);this.setSel(e,r),e.slots.splice(r,1);const i=this.temp;this.temp=t,this.tempOrigin=e,i&&(e.slots.push(i),e.move(i,t.x,t.y)||this.giveOrDrop(i.itemId,1)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(ge.CELL+ge.GAP)*this.uiZoom(),r=ge.GAP*this.uiZoom(),i=Bn(e),o=document.createElement("div");o.className="inv-ghost",o.style.width=i.w*n-r+"px",o.style.height=i.h*n-r+"px",o.style.background=Nt[e.itemId].color,o.style.backgroundImage=`url(${Ui(e.itemId,e.rot?1:0)})`,document.body.appendChild(o);const l=a=>{o.style.left=a.clientX-i.w*n/2+"px",o.style.top=a.clientY-i.h*n/2+"px",document.getElementById("inv-bin").classList.toggle("hot",this.overBin(a.clientX,a.clientY))},h=a=>{if(window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",h),o.remove(),document.getElementById("inv-bin").classList.remove("hot"),this.overBin(a.clientX,a.clientY)){this.binDiscard();return}const c=(i.w*n-r)/2,u=(i.h*n-r)/2;let f=null,m=0,v=0;for(const[y,x]of this.gridsEls()){const _=y.getBoundingClientRect();if(m=Math.round((a.clientX-_.left-c)/n),v=Math.round((a.clientY-_.top-u)/n),m>=0&&v>=0&&m<=x.w-i.w&&v<=x.h-i.h){f=x;break}}f&&(f.slots.push(e),f.move(e,m,v)?(this.temp=null,this.audio.place(),this.setSel(f,f.slots.indexOf(e))):(f.slots.splice(f.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",l),window.addEventListener("mouseup",h),l(t)}tapTemp(){const t=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv;if(this.temp){const e=this.tempOrigin??t,n={...this.temp,x:0,y:0};ge.placeSlotFree(e,n)?(this.temp=null,this.tempOrigin=null,this.setSel(e,e.slots.indexOf(n)),this.audio.place()):(nt("No room to put it back."),this.audio.error())}else{const e=t.selectedSlot();if(!e){nt("Select an item first."),this.audio.error();return}t.slots.splice(t.slots.indexOf(e),1),this.temp={...e},this.tempOrigin=t,t.selected=-1,this.audio.place()}this.renderInv(),this.renderHeld()}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t==="bench")for(const r of Vu){const i=document.createElement("div");i.className="craft-row";const o=`${Nt[r.out].name}${r.count>1?" ×"+r.count:""}`,l=Object.entries(r.needs).map(([c,u])=>`${u}× ${Nt[c].name}`).join(", "),h=qu(this.inv,r);i.innerHTML=`<span class="what"><img class="craft-art" src="${Ui(r.out)}" alt="">${o} <span class="needs">(${l})</span></span>`;const a=document.createElement("button");a.textContent="Craft",a.disabled=!h,a.onclick=()=>{const c=tv(this.inv,r);if(c===null){this.audio.error();return}c>0&&this.giveOrDrop(r.out,c),this.tut?.notify("craft"),Nt[r.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},i.appendChild(a),e.appendChild(i)}else{const r=this.openStation,i=`${r[0]},${r[1]},${r[2]}`,o=this.campCharges.get(i)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){nt("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(i,o+3),this.renderCraft("smelt")};const l=this.equip.light;if(l){const h=l.charges??0,a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what">Head Lantern <span class="needs">(${h}/5 charges)</span></span>`;const c=document.createElement("button");c.textContent="Refuel Lantern (+1, uses 1 fuel)",c.disabled=h>=5||o<1,c.onclick=()=>{h>=5||o<1||(this.campCharges.set(i,o-1),l.charges=h+1,this.audio.place(),this.renderCraft("smelt"))},a.appendChild(c),e.appendChild(a)}for(const h of Wu){const a=document.createElement("div");a.className="craft-row",a.innerHTML=`<span class="what"><img class="craft-art" src="${Ui(h.out)}" alt="">${Nt[h.in].name} → ${Nt[h.out].name}${h.n&&h.n>1?" ×"+h.n:""} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(h.in,1)||o<1,c.onclick=()=>{this.inv.removeItem(h.in,1),this.campCharges.set(i,o-1);const u=this.inv.addItem(h.out,h.n??1);u>0&&this.giveOrDrop(h.out,u),this.audio.place(),this.renderCraft("smelt")},a.appendChild(c),e.appendChild(a)}}}renderCache(){const t=this.caches.find(r=>r.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const r of t.items){const i=document.createElement("div");i.className="cache-item",i.textContent=`${r.count}× ${Nt[r.itemId].name}`,e.appendChild(i)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let r=!0;for(;r;){r=!1;for(const i of t.items){const o=this.inv.addItem(i.itemId,i.count);o<i.count&&(r=!0,i.count=o),o===0&&t.items.splice(t.items.indexOf(i),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const _v=["drone","wanderer","wanderer","caravan","caravan","nightwind"],vv=["drone","nightwind","nightwind","caravan","wanderer"],Zh={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},Jh=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],xv=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],Qh=[0,2,4,2,3,5,4,1],yv=[0,0,3,2,4,3,2,0],tu={drone:"saw",wanderer:"pluck",nightwind:"breath",caravan:"bow"},Mv=["pluck","saw","breath","bow"];class bv{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;voice=tu[this.genre];breathBuf=null;root=98;deg=Jh[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let r=0,i=0;for(let c=0;c<n.length;c++){const u=Math.random()*2-1;r=.99*r+.01*u,i=.96*i+.04*u,n[c]=(r+i)*2}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.noiseBuf=e;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=380;const h=this.ctx.createOscillator();h.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=100,h.connect(a).connect(l.frequency),h.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,o.connect(l).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=(.06+this.stormI*.28)*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setStorm(t){t!==this.stormI&&(this.stormI=t,this.windGain&&(this.windGain.gain.value=(.06+t*.28)*this.volume))}stormI=0;setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const r=t.createGain();r.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(r),r.connect(t.destination),[1,1.5,2].forEach((i,o)=>{const l=t.createOscillator();l.type=o===2?"sine":"triangle",l.frequency.value=this.root*i,l.detune.value=o*3-3;const h=t.createGain();h.gain.value=.03/(o+1);const a=t.createOscillator();a.frequency.value=.05+o*.017;const c=t.createGain();c.gain.value=.018,a.connect(c).connect(h.gain),a.start(),l.connect(h).connect(this.musicGain),l.start(),this.droneOscs.push(l)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?_v:vv;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.voice=tu[n],this.root=55*2**((4+Math.floor(Math.random()*12))/12);const r=this.isDay?Jh:xv;if(this.deg=r[Math.floor(Math.random()*r.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const i=this.ctx.currentTime;this.droneOscs.forEach((o,l)=>o.frequency.setTargetAtTime(this.root*[1,1.5,2][l],i,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd?this.rollGenre(this.nextBar):Math.random()<.15&&this.rerollVoice(),this.scheduleBar(this.nextBar),this.nextBar+=Zh[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,r=(o,l)=>e*o*2**(n[(l%n.length+n.length)%n.length]/12),i=Zh[this.genre];switch(this.genre){case"drone":{this.note(r(1,0),t,i*.95,.18),[0,2,4].forEach(o=>this.note(r(2,o),t+.05,i*.9,.03));for(let o=0;o<8;o++)Math.random()<.15||this.note(r(4,Qh[o]),t+o*i/8,.9,.12);if(Math.random()<.6){const o=1+Math.floor(Math.random()*6);this.note(r(4,o),t+Math.floor(Math.random()*5)*(i/8),1.4,.13)}break}case"wanderer":{this.note(r(1,0),t,i*.55,.16);for(let o=0;o<8;o++)Math.random()<.1||this.note(r(Math.random()<.3?3:4,Qh[o]),t+o*i/8,.55,.12);if(Math.random()<.7){const o=1+Math.floor(Math.random()*5);this.note(r(5,o),t+Math.floor(Math.random()*6)*(i/8),.8,.11)}break}case"nightwind":{this.note(r(1,0),t,i*.95,.15),Math.random()<.4&&[0,2,4].forEach(l=>this.note(r(2,l),t+.1,i*.85,.025));const o=1+Math.floor(Math.random()*3);for(let l=0;l<o;l++){const h=Math.floor(Math.random()*n.length),a=1.6+Math.random()*(i-1.2);this.note(r(4,h),t+Math.random()*(i-1),a,.12)}break}case"caravan":{for(let o=0;o<8;o++)(o===0||o===3||o===4)&&this.drum(t+o*i/8),o%2===1&&this.brush(t+o*i/8);this.note(r(1,0),t,i*.45,.17),this.note(r(1,3),t+i/2,i*.4,.14);for(let o=0;o<8;o++)Math.random()<.25||this.note(r(3,yv[o]),t+o*i/8,.4,.1);if(Math.random()<.4){const o=1+Math.floor(Math.random()*4);this.note(r(4,o),t+Math.floor(Math.random()*4)*(i/4),.7,.07)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const r=this.ctx.createGain();r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(r).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}rerollVoice(){const t=Mv.filter(e=>e!==this.voice);this.voice=t[Math.floor(Math.random()*t.length)]}note(t,e,n,r){if(!(!this.ctx||!this.musicGain))switch(this.voice){case"pluck":this.pluckNote(t,e,n,r);break;case"saw":this.sawNote(t,e,n,r);break;case"breath":this.breathNote(t,e,n,r);break;case"bow":this.bowNote(t,e,n,r);break}}pluckNote(t,e,n,r){const i=this.ctx,o=Math.min(n,1),l=i.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(r,e+.006),l.gain.exponentialRampToValueAtTime(.001,e+o),l.connect(this.musicGain);const h=i.createOscillator();h.type="triangle",h.frequency.value=t,h.connect(l),h.start(e),h.stop(e+o+.05);const a=i.createOscillator();a.type="square",a.frequency.value=t*2.01;const c=i.createGain();c.gain.setValueAtTime(r*.22,e),c.gain.exponentialRampToValueAtTime(.001,e+Math.max(.08,o*.35)),a.connect(c).connect(l),a.start(e),a.stop(e+o)}sawNote(t,e,n,r){const i=this.ctx,o=i.createOscillator();o.type="sawtooth",o.frequency.value=t;const l=i.createBiquadFilter();l.type="lowpass",l.Q.value=.8,l.frequency.value=Math.min(3200,Math.max(700,t*6));const h=i.createGain();this.sustainEnv(h.gain,e,n,r*.7,.09),o.connect(l).connect(h).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}breathNote(t,e,n,r){const i=this.ctx;if(!this.breathBuf){const u=i.sampleRate,f=i.createBuffer(1,u*2,u),m=f.getChannelData(0);for(let v=0;v<m.length;v++)m[v]=Math.random()*2-1;this.breathBuf=f}const o=i.createBufferSource();o.buffer=this.breathBuf,o.loop=!0;const l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=10;const h=i.createGain();this.sustainEnv(h.gain,e,n,r*1.6,.22),o.connect(l).connect(h).connect(this.musicGain),o.start(e,Math.random()*1.9),o.stop(e+n+.05);const a=i.createOscillator();a.type="sine",a.frequency.value=t;const c=i.createGain();this.sustainEnv(c.gain,e,n,r*.8,.3),a.connect(c).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}bowNote(t,e,n,r){const i=this.ctx,o=i.createOscillator();o.type="sawtooth",o.frequency.value=t;const l=i.createOscillator();l.frequency.value=5.2;const h=i.createGain();h.gain.value=5,l.connect(h).connect(o.detune),l.start(e),l.stop(e+n+.05);const a=i.createBiquadFilter();a.type="lowpass",a.Q.value=.7,a.frequency.value=Math.min(2600,Math.max(600,t*4));const c=i.createGain();this.sustainEnv(c.gain,e,n,r*.8,Math.min(.35,n*.3)),o.connect(a).connect(c).connect(this.musicGain),o.start(e),o.stop(e+n+.05)}sustainEnv(t,e,n,r,i){const o=Math.min(i,n*.5),l=e+o+(n-o)*.75;t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(r,e+o),t.setValueAtTime(r,l),t.exponentialRampToValueAtTime(.001,e+n)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,r=.2,i=0){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,o),i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+i),o+e),h.gain.setValueAtTime(r*this.volume,o),h.gain.exponentialRampToValueAtTime(.001,o+e),l.connect(h).connect(this.ctx.destination),l.start(o),l.stop(o+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const r=this.ctx.currentTime,i=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(i*t)),i),l=o.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=(Math.random()*2-1)*(1-u/l.length);const h=this.ctx.createBufferSource();h.buffer=o;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=e;const c=this.ctx.createGain();c.gain.value=n*this.volume,h.connect(a).connect(c).connect(this.ctx.destination),h.start(r)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const jt=s=>document.getElementById(s),eu=s=>jt(s).value,pn=(s,t=!0)=>jt(s).classList.toggle("hidden",!t),Sv=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],pc=()=>Sv.forEach(s=>pn(s,!1)),ko=new bv;let pe=ov(),Ot=null;document.addEventListener("click",()=>ko.resume(),{once:!0});document.addEventListener("touchstart",()=>ko.resume(),{once:!0});function Ko(){pc(),pn("screen-title"),jt("best-score").textContent=Rr()>0?`Best run: ${Rr().toFixed(1)} days`:"";const s=jt("worldlist");s.innerHTML="";const t=Yo();t.length||(s.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const r=Zu(e.id),i=document.createElement("span");i.textContent=`${e.name} — seed “${e.seedStr}” — ${r?`day ${r.days}, survived ${(r.playSec/Be).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>jo(e,r);const l=document.createElement("button");l.textContent="Export",l.onclick=()=>{r?Ju(e,r):nt("Nothing saved for this world yet.")};const h=document.createElement("button");h.textContent="Delete",h.onclick=()=>{h.textContent==="Sure?"?(lv(e.id),Ko()):(h.textContent="Sure?",setTimeout(()=>h.textContent="Delete",2500))},n.append(i,o,l,h),s.appendChild(n)}}function jo(s,t){pc(),pn("cheats",!1),jt("hud").classList.remove("hidden"),pe.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),jt("btn-save").classList.toggle("hidden",s.id.startsWith("guest")),jt("btn-exportworld").classList.toggle("hidden",s.id.startsWith("guest")),ko.resume(),Ot=new ge(s,t,jt("game-wrap"),pe,ko),globalThis.game=Ot,Ot.start(),t===null&&Ot.startTutorial()}function mc(){Ot&&(Ot.saveNow(),Ot.stop()),Ot=null,delete globalThis.game,jt("hud").classList.add("hidden"),Ko()}function gc(s){pc(),pn(s)}function wv(){Ot&&(Ot.pauseSubmenu=null),pn("screen-settings",!1),pn("screen-instructions",!1),pn("screen-catalog",!1),Ot?(pn("ui-inventory",!1),pn("ui-craft",!1),pn("ui-cache",!1),pn("ui-trade",!1),pn("screen-pause",!1),Ot.paused=!1,Ot.relock()):Ko()}function _c(){Ot&&(Ot.pauseSubmenu=Ot.paused?"settings":null),gc("screen-settings");const s=jt("settings-body");s.innerHTML="";const t=(e,n,r,i)=>{const o=document.createElement("div");o.className="setting";const l=document.createElement("span");l.textContent=e;const h=document.createElement("div");h.className="seg";const a=[];for(const[c,u]of n){const f=document.createElement("button");f.type="button",f.textContent=c,String(u)===String(r)&&f.classList.add("on"),f.onclick=()=>{for(const m of a)m.classList.remove("on");f.classList.add("on"),i(u)},a.push(f),h.appendChild(f)}o.append(l,h),s.appendChild(o)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],pe.sens,e=>{pe.sens=e,Xn()}),t("Invert Y",[["Off",!1],["On",!0]],pe.invertY,e=>{pe.invertY=e,Xn()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],pe.volume,e=>{pe.volume=e,Xn()}),t("Music",[["Off",!1],["On",!0]],pe.music,e=>{pe.music=e,Xn()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],pe.fov,e=>{pe.fov=e,Xn()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],pe.renderDist,e=>{pe.renderDist=e,Xn()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],pe.quality,e=>{pe.quality=e,Xn()}),t("Lighting",[["Baked sky light","sky"],["Real-time shadows","shadow"]],pe.lighting,e=>{pe.lighting=e,Xn()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],pe.units,e=>{pe.units=e,Xn()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],pe.uiScale,e=>{pe.uiScale=e,Xn()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],pe.fullscreen,e=>{pe.fullscreen=e,Xn(),e?document.documentElement.requestFullscreen().catch(()=>{pe.fullscreen=!1,Xn(),_c()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),s.appendChild(e)}}function td(s){document.documentElement.style.setProperty("--ui-scale",String(s))}function Xn(){av(pe),td(pe.uiScale),Ot&&Ot.applySettings(pe)}let Vl="items";function vc(){Ot&&(Ot.pauseSubmenu=Ot.paused?"catalog":null),gc("screen-catalog");for(const t of Array.from(jt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===Vl);const s=jt("catalog-body");if(s.innerHTML="",Vl==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,r,i,o)=>{const l=document.createElement("div");l.className="cat-card";const h=document.createElement("img");h.src=n,h.alt="";const a=document.createElement("div");a.innerHTML=`<b>${r}</b><div class="cat-meta">${i}</div><div class="cat-desc">${o}</div>`,l.append(h,a),t.append(l)};for(const n of Object.values(Nt).sort((r,i)=>r.name.localeCompare(i.name)))e(Ui(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of jn){if(n.id===0||n.name==="Air")continue;const r=Object.values(Nt).find(o=>o.block===n.id),i=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(r?Ui(r.id):hv(n.id),n.name,i,r?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}s.append(t)}else{const t=(e,n,r,i)=>{const o=document.createElement("div");o.className="cat-recipe";const l=document.createElement("img");l.src=e,l.alt="",l.style.width="36px",l.style.height="36px",l.style.imageRendering="pixelated",o.append(l,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${r}</b> <span class="needs">(${i})</span>`})),s.append(o)};for(const e of Vu){const n=Object.entries(e.needs).map(([r,i])=>`${i}× ${Nt[r].name}`).join(" + ");t(Ui(e.out),n,`${Nt[e.out].name}${e.count>1?" ×"+e.count:""}`,e.bench?"Crafting Bench":"hands")}for(const e of Wu)t(Ui(e.out),`1× ${Nt[e.in].name}`,`${Nt[e.out].name}${e.n&&e.n>1?" ×"+e.n:""}`,"Campfire, 1 fuel charge")}}for(const s of Array.from(jt("catalog-tabs").querySelectorAll(".tab")))s.onclick=()=>{Vl=s.dataset.tab,vc()};const Ev=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Falls","falling more than 4 blocks hurts — about 16 blocks without armour is fatal; land in water or climb down"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Iron Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches, trade with a camp Trader, Broken Thruster on a wingtip (needs a Thruster Nozzle)"],["T","toggle the Head Lantern — it burns one fuel charge per 4 game-minutes; refuel it at a Campfire"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 5 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],Tv=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / LAMP / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function ed(){Ot&&(Ot.pauseSubmenu=Ot.paused?"instructions":null),gc("screen-instructions");const s=jt("instr-body");s.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?Tv:Ev;for(const[n,r]of t){const i=document.createElement("div");i.innerHTML=`<b>${n}</b> — ${r}`,s.appendChild(i)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. Walls block the wind but not heat: a sealed room's air drifts toward the outside temperature. Only Heat Regulator blocks hold a sealed room at ~37 °C — each covers 150 cells, they stack in bigger rooms; the Ship Interior comes with one. Direct midday sun adds a punishing +8…18 °C — shade from rocks, dunes and walls cancels it; at night the desert freezes you. Dig into the Caves: two or more cells under the terrain the air sits at a constant mild ~22 °C, and shelter there lets your body claw back toward 36.6 °C. That is the refuge — but it is dark (wear a Head Lantern, toggle with T), Scorpions and Sand Wurms live only down there, and Cobalt Ore — the one thing that can fix the Ship's engines — hides there too. The goal: mine Cobalt, smelt and craft four Thruster Nozzles, press E at each Broken Thruster on the wingtips, and lift off. Or just keep surviving and beat your best day count. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, Kangaroo Rats bolt, Scorpions and Wurms ambush in the dark — hunt what you can, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor, Armour, Regulator and Light go in the five Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it. The desert is bigger than it looks: Trader Camps — a windmill, a hut, a farmstead — dot the wastes hundreds of steps out, and the robed Trader there barters goods for goods; no coin, and the offer table restocks every in-game day. Watch the sky: a Sandstorm rolls in without warning — when the wind roars, get behind walls or dig in, because the open air will bake you, drink you dry and scour your skin. Arched Cave Mouths gape in rocky slopes and lead straight down to the Caves. Vultures circle the healthy but dive at the wounded; hunt Thornback Tortoises for shell armour, Fennec Foxes for pelts, and bring the skins, shells and hides back to the Trader.",s.appendChild(e)}jt("btn-create").onclick=()=>{const s=eu("seed-input").trim()||Math.random().toString(36).slice(2,10),t=eu("world-name").trim()||s,e=Ku(t,s);jo(e,null)};jt("btn-guest").onclick=()=>{const s=Math.random().toString(36).slice(2,10);jo({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:s,updated:Date.now()},null)};jt("btn-import").onclick=()=>jt("import-file").click();jt("import-file").onchange=async()=>{const s=jt("import-file").files?.[0];if(s)try{const t=await cv(s);nt("World imported."),jo(t,Zu(t.id))}catch(t){nt(`Import failed: ${t.message}`)}};jt("btn-settings").onclick=_c;jt("btn-pause-settings").onclick=_c;jt("btn-instructions").onclick=ed;jt("btn-pause-instructions").onclick=ed;jt("btn-catalog").onclick=vc;jt("btn-catalog-title").onclick=vc;for(const s of document.querySelectorAll(".close-btn"))s.onclick=()=>{if(Ot&&Ot.pauseSubmenu){Ot.closePauseSubmenu();return}Ot&&Ot.closeUI(),(!Ot||!(Ot.ui==="inv"&&Ot.temp))&&wv()};jt("btn-resume").onclick=()=>{Ot&&(Ot.paused=!1,pn("screen-pause",!1),pn("cheats",!1),Ot.relock())};jt("btn-save").onclick=()=>nt("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");jt("btn-exportworld").onclick=()=>{Ot&&Ot.exportWorld()};jt("btn-quit").onclick=()=>mc();jt("btn-cheats").onclick=()=>pn("cheats",jt("cheats").classList.contains("hidden"));const nd=jt("cheat-item");for(const[s,t]of Object.entries(Nt).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=s,e.textContent=t.name,nd.appendChild(e)}jt("btn-cheat-add").onclick=()=>{if(!Ot)return;const s=nd.value;Ot.inv.addItem(s,1)?nt("No room in your pack."):nt(`Added ${Nt[s].name}.`)};const xc=jt("cheat-quest");gi.forEach((s,t)=>{const e=document.createElement("option");e.value=String(t),e.textContent=`${t+1}. ${s.title}`,xc.appendChild(e)});{const s=document.createElement("option");s.value=String(gi.length),s.textContent="Finish the whole chain",xc.appendChild(s)}jt("btn-cheat-quest").onclick=()=>{Ot&&Ot.questJump(Number(xc.value))};for(const s of Array.from(jt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))s.onclick=()=>{if(!Ot)return;if(s.dataset.speed!==void 0){Ot.speedMul=Number(s.dataset.speed),nt(`Player speed ×${s.dataset.speed}.`);return}if(s.dataset.immortal!==void 0){Ot.survival.invincible=s.dataset.immortal==="1",nt(`Immortality ${Ot.survival.invincible?"on":"off"}.`);return}const t=Number(s.dataset.frac);Ot.setClock(t),nt(`Clock set to ${s.textContent}.`)};jt("btn-respawn").onclick=()=>{Ot&&Ot.respawn()};jt("btn-death-title").onclick=()=>mc();jt("btn-win-continue").onclick=()=>{Ot&&(Ot.paused=!1,pn("screen-win",!1),Ot.relock())};jt("btn-win-title").onclick=()=>mc();document.addEventListener("keydown",s=>{if(s.code==="Escape"&&!jt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});td(pe.uiScale);Ko();
