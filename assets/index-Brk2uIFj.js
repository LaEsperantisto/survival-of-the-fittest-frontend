(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="180",qc=0,Ca=1,Yc=2,Wl=1,$c=2,In=3,Yn=0,kt=1,Bt=2,Wn=0,Fi=1,Pa=2,La=3,Da=4,Kc=5,ai=100,Zc=101,jc=102,Jc=103,Qc=104,eh=200,th=201,nh=202,ih=203,lo=204,co=205,sh=206,rh=207,oh=208,ah=209,lh=210,ch=211,hh=212,uh=213,dh=214,ho=0,uo=1,fo=2,zi=3,po=4,mo=5,go=6,_o=7,na=0,fh=1,ph=2,Xn=0,mh=1,gh=2,_h=3,vh=4,xh=5,Mh=6,Sh=7,Xl=300,Hi=301,Gi=302,vo=303,xo=304,Sr=306,Mo=1e3,ci=1001,So=1002,on=1003,yh=1004,Cs=1005,vn=1006,Cr=1007,hi=1008,bn=1009,ql=1010,Yl=1011,fs=1012,ia=1013,ui=1014,Un=1015,Es=1016,sa=1017,ra=1018,ps=1020,$l=35902,Kl=35899,Zl=1021,jl=1022,un=1023,ms=1026,gs=1027,Jl=1028,oa=1029,Ql=1030,aa=1031,la=1033,rr=33776,or=33777,ar=33778,lr=33779,yo=35840,Eo=35841,bo=35842,To=35843,wo=36196,Ao=37492,Ro=37496,Co=37808,Po=37809,Lo=37810,Do=37811,Io=37812,Uo=37813,No=37814,Fo=37815,Oo=37816,Bo=37817,ko=37818,zo=37819,Ho=37820,Go=37821,Vo=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,$o=36285,Ko=36286,Eh=3200,bh=3201,ec=0,Th=1,Gn="",Xt="srgb",Vi="srgb-linear",pr="linear",Qe="srgb",xi=7680,Ia=519,wh=512,Ah=513,Rh=514,tc=515,Ch=516,Ph=517,Lh=518,Dh=519,Ua=35044,Na="300 es",xn=2e3,mr=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fa=1234567;const Oi=Math.PI/180,_s=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function ca(i,e){return(i%e+e)%e}function Ih(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Uh(i,e,t){return i!==e?(t-i)/(e-i):0}function hs(i,e,t){return(1-t)*i+t*e}function Nh(i,e,t,n){return hs(i,e,1-Math.exp(-t*n))}function Fh(i,e=1){return e-Math.abs(ca(i,e*2)-e)}function Oh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zh(i,e){return i+Math.random()*(e-i)}function Hh(i){return i*(.5-Math.random())}function Gh(i){i!==void 0&&(Fa=i);let e=Fa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vh(i){return i*Oi}function Wh(i){return i*_s}function Xh(i){return(i&i-1)===0&&i!==0}function qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $h(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qn={DEG2RAD:Oi,RAD2DEG:_s,generateUUID:Zi,clamp:He,euclideanModulo:ca,mapLinear:Ih,inverseLerp:Uh,lerp:hs,damp:Nh,pingpong:Fh,smoothstep:Oh,smootherstep:Bh,randInt:kh,randFloat:zh,randFloatSpread:Hh,seededRandom:Gh,degToRad:Vh,radToDeg:Wh,isPowerOfTwo:Xh,ceilPowerOfTwo:qh,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:$h,normalize:Pt,denormalize:Ii};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==m||u!==_){let p=1-a;const f=l*d+c*m+u*_+h*g,R=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const v=Math.sqrt(w),E=Math.atan2(v,f*R);p=Math.sin(p*E)/v,a=Math.sin(a*E)/v}const b=a*R;if(l=l*p+d*b,c=c*p+m*b,u=u*p+_*b,h=h*p+g*b,p===1-a){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-a*m,e[t+2]=c*_+u*m+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new I,Oa=new bs;class Ne{constructor(e,t,n,s,r,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],g=s[0],p=s[3],f=s[6],R=s[1],w=s[4],b=s[7],v=s[2],E=s[5],A=s[8];return r[0]=o*g+a*R+l*v,r[3]=o*p+a*w+l*E,r[6]=o*f+a*b+l*A,r[1]=c*g+u*R+h*v,r[4]=c*p+u*w+h*E,r[7]=c*f+u*b+h*A,r[2]=d*g+m*R+_*v,r[5]=d*p+m*w+_*E,r[8]=d*f+m*b+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,_=t*h+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-u*n)*g,e[2]=(a*n-s*o)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Ne;function nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){const i=gr("canvas");return i.style.display="block",i}const Ba={};function vs(i){i in Ba||(Ba[i]=!0,console.warn(i))}function Zh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ka=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){const i={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qe&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vi]:{primaries:e,whitePoint:n,transfer:pr,toXYZ:ka,fromXYZ:za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:ka,fromXYZ:za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const Ze=jh();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Jh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=gr("canvas")),Mi.width=e.width,Mi.height=e.height;const s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qh=0;class ha{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dr(s[o].image)):r.push(Dr(s[o]))}else r=Dr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;const Ir=new I;class Ut extends Ki{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=ci,s=ci,r=vn,o=hi,a=un,l=bn,c=Ut.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Zi(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ir).x}get height(){return this.source.getSize(Ir).y}get depth(){return this.source.getSize(Ir).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Xl;Ut.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(m+1)/2,v=(f+1)/2,E=(u+d)/4,A=(h+g)/4,D=(_+p)/4;return w>b&&w>v?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=A/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=D/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=D/r),this.set(n,s,r,t),this}let R=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(p-_)/R,this.y=(h-g)/R,this.z=(d-u)/R,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends Ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ha(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ic extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nu extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Ls.subVectors(this.max,es),Si.subVectors(e.a,es),yi.subVectors(e.b,es),Ei.subVectors(e.c,es),Fn.subVectors(yi,Si),On.subVectors(Ei,yi),Qn.subVectors(Si,Ei);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!Ur(t,Si,yi,Ei,Ls)||(t=[1,0,0,0,1,0,0,0,1],!Ur(t,Si,yi,Ei,Ls))?!1:(Ds.crossVectors(Fn,On),t=[Ds.x,Ds.y,Ds.z],Ur(t,Si,yi,Ei,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],an=new I,Ps=new Ts,Si=new I,yi=new I,Ei=new I,Fn=new I,On=new I,Qn=new I,es=new I,Ls=new I,Ds=new I,ei=new I;function Ur(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ei.fromArray(i,r);const a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iu=new Ts,ts=new I,Nr=new I;class ws{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Nr)),this.expandByPoint(ts.copy(e.center).sub(Nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new I,Fr=new I,Is=new I,Bn=new I,Or=new I,Us=new I,Br=new I;class ua{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fr.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Fr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Is),a=Bn.dot(this.direction),l=-Bn.dot(Is),c=Bn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fr).addScaledVector(Is,d),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Or.subVectors(t,e),Us.subVectors(n,e),Br.crossVectors(Or,Us);let o=this.direction.dot(Br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=a*this.direction.dot(Us.crossVectors(Bn,Us));if(l<0)return null;const c=a*this.direction.dot(Or.cross(Bn));if(c<0||l+c>o)return null;const u=-a*Bn.dot(Br);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,r,o,a,l,c,u,h,d,m,_,g,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,m,_,g,p)}set(e,t,n,s,r,o,a,l,c,u,h,d,m,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ru)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),kn.crossVectors(n,Gt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),kn.crossVectors(n,Gt)),kn.normalize(),Ns.crossVectors(Gt,kn),s[0]=kn.x,s[4]=Ns.x,s[8]=Gt.x,s[1]=kn.y,s[5]=Ns.y,s[9]=Gt.y,s[2]=kn.z,s[6]=Ns.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],R=n[3],w=n[7],b=n[11],v=n[15],E=s[0],A=s[4],D=s[8],S=s[12],y=s[1],P=s[5],F=s[9],G=s[13],K=s[2],W=s[6],H=s[10],q=s[14],B=s[3],ie=s[7],ae=s[11],ue=s[15];return r[0]=o*E+a*y+l*K+c*B,r[4]=o*A+a*P+l*W+c*ie,r[8]=o*D+a*F+l*H+c*ae,r[12]=o*S+a*G+l*q+c*ue,r[1]=u*E+h*y+d*K+m*B,r[5]=u*A+h*P+d*W+m*ie,r[9]=u*D+h*F+d*H+m*ae,r[13]=u*S+h*G+d*q+m*ue,r[2]=_*E+g*y+p*K+f*B,r[6]=_*A+g*P+p*W+f*ie,r[10]=_*D+g*F+p*H+f*ae,r[14]=_*S+g*G+p*q+f*ue,r[3]=R*E+w*y+b*K+v*B,r[7]=R*A+w*P+b*W+v*ie,r[11]=R*D+w*F+b*H+v*ae,r[15]=R*S+w*G+b*q+v*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*m-n*l*m)+g*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],f=e[15],R=h*p*c-g*d*c+g*l*m-a*p*m-h*l*f+a*d*f,w=_*d*c-u*p*c-_*l*m+o*p*m+u*l*f-o*d*f,b=u*g*c-_*h*c+_*a*m-o*g*m-u*a*f+o*h*f,v=_*h*l-u*g*l-_*a*d+o*g*d+u*a*p-o*h*p,E=t*R+n*w+s*b+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=R*A,e[1]=(g*d*r-h*p*r-g*s*m+n*p*m+h*s*f-n*d*f)*A,e[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*f+n*l*f)*A,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*m-n*l*m)*A,e[4]=w*A,e[5]=(u*p*r-_*d*r+_*s*m-t*p*m-u*s*f+t*d*f)*A,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*f-t*l*f)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*A,e[8]=b*A,e[9]=(_*h*r-u*g*r-_*n*m+t*g*m+u*n*f-t*h*f)*A,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*A,e[12]=v*A,e[13]=(u*g*s-_*h*s+_*n*d-t*g*d-u*n*p+t*h*p)*A,e[14]=(_*a*s-o*g*s-_*n*l+t*g*l+o*n*p-t*a*p)*A,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,_=r*h,g=o*u,p=o*h,f=a*h,R=l*c,w=l*u,b=l*h,v=n.x,E=n.y,A=n.z;return s[0]=(1-(g+f))*v,s[1]=(m+b)*v,s[2]=(_-w)*v,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(d+f))*E,s[6]=(p+R)*E,s[7]=0,s[8]=(_+w)*A,s[9]=(p-R)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=bi.set(s[0],s[1],s[2]).length();const o=bi.set(s[4],s[5],s[6]).length(),a=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const c=1/r,u=1/o,h=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=xn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s);let _,g;if(l)_=r/(o-r),g=o*r/(o-r);else if(a===xn)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===mr)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,g;if(l)_=1/(o-r),g=o/(o-r);else if(a===xn)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===mr)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new I,ln=new ct,su=new I(0,0,0),ru=new I(1,1,1),kn=new I,Ns=new I,Gt=new I,Ha=new ct,Ga=new bs;class Tn{constructor(e=0,t=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const Va=new I,Ti=new bs,Cn=new ct,Fs=new I,ns=new I,au=new I,lu=new bs,Wa=new I(1,0,0),Xa=new I(0,1,0),qa=new I(0,0,1),Ya={type:"added"},cu={type:"removed"},wi={type:"childadded",child:null},kr={type:"childremoved",child:null};class vt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new Tn,n=new bs,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ne}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Wa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(qa,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ns,Fs,this.up):Cn.lookAt(Fs,ns,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ya),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ya),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,Pn=new I,zr=new I,Ln=new I,Ai=new I,Ri=new I,$a=new I,Hr=new I,Gr=new I,Vr=new I,Wr=new et,Xr=new et,qr=new et;class sn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cn.subVectors(s,t),Pn.subVectors(n,t),zr.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Pn),l=cn.dot(zr),c=Pn.dot(Pn),u=Pn.dot(zr),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(e,t),Xr.fromBufferAttribute(e,n),qr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wr,r.x),o.addScaledVector(Xr,r.y),o.addScaledVector(qr,r.z),o}static isFrontFacing(e,t,n,s){return cn.subVectors(n,t),Pn.subVectors(e,t),cn.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ai.subVectors(s,n),Ri.subVectors(r,n),Hr.subVectors(e,n);const l=Ai.dot(Hr),c=Ri.dot(Hr);if(l<=0&&c<=0)return t.copy(n);Gr.subVectors(e,s);const u=Ai.dot(Gr),h=Ri.dot(Gr);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ai,o);Vr.subVectors(e,r);const m=Ai.dot(Vr),_=Ri.dot(Vr);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ri,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return $a.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector($a,a);const f=1/(p+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(Ai,o).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Yr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=ca(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yr(o,r,e+1/3),this.g=Yr(o,r,e),this.b=Yr(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ze.workingToColorSpace(At.copy(this),e),Math.round(He(At.r*255,0,255))*65536+Math.round(He(At.g*255,0,255))*256+Math.round(He(At.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Xt){Ze.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Os);const n=hs(zn.h,Os.h,t),s=hs(zn.s,Os.s,t),r=hs(zn.l,Os.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Be;Be.NAMES=rc;let hu=0;class _i extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Fi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class us extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,Bs=new Ye;let uu=0;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ua&&(e.usage=this.usage),e}}class oc extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ac extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let du=0;const Qt=new ct,$r=new vt,Ci=new I,Vt=new Ts,is=new Ts,yt=new I;class Zt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?ac:oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Vt.min,is.min),Vt.expandByPoint(yt),yt.addVectors(Vt.max,is.max),Vt.expandByPoint(yt)):(Vt.expandByPoint(is.min),Vt.expandByPoint(is.max))}Vt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(e,c),yt.add(Ci)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new I,l[D]=new I;const c=new I,u=new I,h=new I,d=new Ye,m=new Ye,_=new Ye,g=new I,p=new I;function f(D,S,y){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,S),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),a[D].add(g),a[S].add(g),a[y].add(g),l[D].add(p),l[S].add(p),l[y].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,S=R.length;D<S;++D){const y=R[D],P=y.start,F=y.count;for(let G=P,K=P+F;G<K;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new I,b=new I,v=new I,E=new I;function A(D){v.fromBufferAttribute(s,D),E.copy(v);const S=a[D];w.copy(S),w.sub(v.multiplyScalar(v.dot(S))).normalize(),b.crossVectors(E,S);const P=b.dot(l[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,P)}for(let D=0,S=R.length;D<S;++D){const y=R[D],P=y.start,F=y.count;for(let G=P,K=P+F;G<K;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[m++]}return new Mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new ct,ti=new ua,ks=new ws,Za=new I,zs=new I,Hs=new I,Gs=new I,Kr=new I,Vs=new I,ja=new I,Ws=new I;class Kt extends vt{constructor(e=new Zt,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Kr.fromBufferAttribute(h,e),o?Vs.addScaledVector(Kr,u):Vs.addScaledVector(Kr.sub(t),u))}t.add(Vs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(ks.containsPoint(ti.origin)===!1&&(ti.intersectSphere(ks,Za)===null||ti.origin.distanceToSquared(Za)>(e.far-e.near)**2))&&(Ka.copy(r).invert(),ti.copy(e.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],R=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=R,v=w;b<v;b+=3){const E=a.getX(b),A=a.getX(b+1),D=a.getX(b+2);s=Xs(this,f,e,n,c,u,h,E,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const R=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);s=Xs(this,o,e,n,c,u,h,R,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],R=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=R,v=w;b<v;b+=3){const E=b,A=b+1,D=b+2;s=Xs(this,f,e,n,c,u,h,E,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const R=p,w=p+1,b=p+2;s=Xs(this,o,e,n,c,u,h,R,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function fu(i,e,t,n,s,r,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Yn,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:i}}function Xs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,zs),i.getVertexPosition(l,Hs),i.getVertexPosition(c,Gs);const u=fu(i,e,t,n,zs,Hs,Gs,ja);if(u){const h=new I;sn.getBarycoord(ja,zs,Hs,Gs,h),s&&(u.uv=sn.getInterpolatedAttribute(s,a,l,c,h,new Ye)),r&&(u.uv1=sn.getInterpolatedAttribute(r,a,l,c,h,new Ye)),o&&(u.normal=sn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};sn.getNormal(zs,Hs,Gs,d.normal),u.face=d,u.barycoord=h}return u}class fi extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function _(g,p,f,R,w,b,v,E,A,D,S){const y=b/A,P=v/D,F=b/2,G=v/2,K=E/2,W=A+1,H=D+1;let q=0,B=0;const ie=new I;for(let ae=0;ae<H;ae++){const ue=ae*P-G;for(let Te=0;Te<W;Te++){const Ge=Te*y-F;ie[g]=Ge*R,ie[p]=ue*w,ie[f]=K,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[p]=0,ie[f]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Te/A),h.push(1-ae/D),q+=1}}for(let ae=0;ae<D;ae++)for(let ue=0;ue<A;ue++){const Te=d+ue+W*ae,Ge=d+ue+W*(ae+1),$e=d+(ue+1)+W*(ae+1),Ve=d+(ue+1)+W*ae;l.push(Te,Ge,Ve),l.push(Ge,$e,Ve),B+=6}a.addGroup(m,B,S),m+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const s in n)e[s]=n[s]}return e}function pu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const mu={clone:Wi,merge:Lt};var gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new I,Ja=new Ye,Qa=new Ye;class qt extends cc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,Ja,Qa),t.subVectors(Qa,Ja)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class vu extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Pi,Li,e,t);s.layers=this.layers,this.add(s);const r=new qt(Pi,Li,e,t);r.layers=this.layers,this.add(r);const o=new qt(Pi,Li,e,t);o.layers=this.layers,this.add(o);const a=new qt(Pi,Li,e,t);a.layers=this.layers,this.add(a);const l=new qt(Pi,Li,e,t);l.layers=this.layers,this.add(l);const c=new qt(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hc extends Ut{constructor(e=[],t=Hi,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xu extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Wn});r.uniforms.tEquirect.value=t;const o=new Kt(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=vn),new vu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ui extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mu={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class da{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new da(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Su extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jr=new I,yu=new I,Eu=new Ne;class ri{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=jr.subVectors(n,t).cross(yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eu.getNormalMatrix(e),s=this.coplanarPoint(jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new ws,bu=new Ye(.5,.5),qs=new I;class fa{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],m=r[7],_=r[8],g=r[9],p=r[10],f=r[11],R=r[12],w=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-o,m-u,f-_,v-R).normalize(),s[1].setComponents(c+o,m+u,f+_,v+R).normalize(),s[2].setComponents(c+a,m+h,f+g,v+w).normalize(),s[3].setComponents(c-a,m-h,f-g,v-w).normalize(),n)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,m-d,f-p,v-b).normalize();else if(s[4].setComponents(c-l,m-d,f-p,v-b).normalize(),t===xn)s[5].setComponents(c+l,m+d,f+p,v+b).normalize();else if(t===mr)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=bu.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qs.x=s.normal.x>0?e.max.x:e.min.x,qs.y=s.normal.y>0?e.max.y:e.min.y,qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uc extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _r=new I,vr=new I,el=new ct,ss=new ua,Ys=new ws,Jr=new I,tl=new I;class Tu extends vt{constructor(e=new Zt,t=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_r.fromBufferAttribute(t,s-1),vr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_r.distanceTo(vr);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;el.copy(s).invert(),ss.copy(e.ray).applyMatrix4(el);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const f=u.getX(g),R=u.getX(g+1),w=$s(this,e,ss,l,f,R,g);w&&t.push(w)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(m),f=$s(this,e,ss,l,g,p,_-1);f&&t.push(f)}}else{const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const f=$s(this,e,ss,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=$s(this,e,ss,l,_-1,m,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $s(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(_r.fromBufferAttribute(a,s),vr.fromBufferAttribute(a,r),t.distanceSqToSegment(_r,vr,Jr,tl)>n)return;Jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Jr);if(!(c<e.near||c>e.far))return{distance:c,point:tl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const nl=new I,il=new I;class wu extends Tu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)nl.fromBufferAttribute(t,s),il.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nl.distanceTo(il);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dc extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sl=new ct,Zo=new ua,Ks=new ws,Zs=new I;class Au extends vt{constructor(e=new Zt,t=new dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;sl.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(sl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,g=m;_<g;_++){const p=c.getX(_);Zs.fromBufferAttribute(h,p),rl(Zs,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m;_<g;_++)Zs.fromBufferAttribute(h,_),rl(Zs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rl(i,e,t,n,s,r,o){const a=Zo.distanceSqToPoint(i);if(a<t){const l=new I;Zo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ru extends Ut{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fc extends Ut{constructor(e,t,n=ui,s,r,o,a=on,l=on,c,u=ms,h=1){if(u!==ms&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pc extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xr extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new I,u=new Ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const m=n+h/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const js=new I,Js=new I,Qr=new I,Qs=new sn;class Cu extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Oi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:f}=Qs;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Qs.getNormal(Qr),h[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let R=0;R<3;R++){const w=(R+1)%3,b=h[R],v=h[w],E=Qs[u[R]],A=Qs[u[w]],D=`${b}_${v}`,S=`${v}_${b}`;S in d&&d[S]?(Qr.dot(d[S].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(A.x,A.y,A.z)),d[S]=null):D in d||(d[D]={index0:c[R],index1:c[w],normal:Qr.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:p}=d[_];js.fromBufferAttribute(a,g),Js.fromBufferAttribute(a,p),m.push(js.x,js.y,js.z),m.push(Js.x,Js.y,Js.z)}this.setAttribute("position",new bt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yr extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,m=[],_=[],g=[],p=[];for(let f=0;f<u;f++){const R=f*d-o;for(let w=0;w<c;w++){const b=w*h-r;_.push(b,-R,0),g.push(0,0,1),p.push(w/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<a;R++){const w=R+c*f,b=R+c*(f+1),v=R+1+c*(f+1),E=R+1+c*f;m.push(w,b,E),m.push(b,v,E)}this.setIndex(m),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(g,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class cr extends _i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pu extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lu extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pa extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Du extends pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const eo=new ct,ol=new I,al=new I;class mc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ll=new ct,rs=new I,to=new I;class Iu extends mc{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(rs),to.copy(n.position),to.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(to),n.updateMatrixWorld(),s.makeTranslation(-rs.x,-rs.y,-rs.z),ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll,n.coordinateSystem,n.reversedDepth)}}class cl extends pa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gc extends cc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uu extends mc{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nu extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Uu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fu extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hl(i,e,t,n){const s=Ou(n);switch(t){case Zl:return i*e;case Jl:return i*e/s.components*s.byteLength;case oa:return i*e/s.components*s.byteLength;case Ql:return i*e*2/s.components*s.byteLength;case aa:return i*e*2/s.components*s.byteLength;case jl:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case la:return i*e*4/s.components*s.byteLength;case rr:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ar:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:case To:return Math.max(i,16)*Math.max(e,8)/4;case yo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $o:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ou(i){switch(i){case bn:case ql:return{byteLength:1,components:1};case fs:case Yl:case Es:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case ui:case ia:case Un:return{byteLength:4,components:1};case $l:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _c(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bu(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const g=h[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
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
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
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
#endif`,$u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
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
#endif`,Qu=`#ifdef USE_BUMPMAP
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ld=`#define PI 3.141592653589793
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
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hd=`vec3 transformedNormal = objectNormal;
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
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,Od=`struct PhysicalMaterial {
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
}`,Bd=`
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$d=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
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
#endif`,tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
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
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bf=`float getShadowMask() {
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
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zf=`uniform sampler2D t2D;
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
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
}`,qf=`#if DEPTH_PACKING == 3200
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
}`,Yf=`#define DISTANCE
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
}`,$f=`#define DISTANCE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,ep=`uniform vec3 diffuse;
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
}`,tp=`#define LAMBERT
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
}`,np=`#define LAMBERT
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
}`,ip=`#define MATCAP
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
}`,sp=`#define MATCAP
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
}`,rp=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,ap=`#define PHONG
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
}`,lp=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,hp=`#define STANDARD
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
}`,up=`#define TOON
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
}`,dp=`#define TOON
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
}`,fp=`uniform float size;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 color;
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
}`,_p=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:ku,alphahash_pars_fragment:zu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Vu,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:qu,batching_pars_vertex:Yu,batching_vertex:$u,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:ju,iridescence_fragment:Ju,bumpmap_pars_fragment:Qu,clipping_planes_fragment:ed,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:nd,clipping_planes_vertex:id,color_fragment:sd,color_pars_fragment:rd,color_pars_vertex:od,color_vertex:ad,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:hd,displacementmap_pars_vertex:ud,displacementmap_vertex:dd,emissivemap_fragment:fd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:vd,envmap_pars_fragment:xd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:Sd,fog_vertex:yd,fog_pars_vertex:Ed,fog_fragment:bd,fog_pars_fragment:Td,gradientmap_pars_fragment:wd,lightmap_pars_fragment:Ad,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Cd,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Id,lights_phong_fragment:Ud,lights_phong_pars_fragment:Nd,lights_physical_fragment:Fd,lights_physical_pars_fragment:Od,lights_fragment_begin:Bd,lights_fragment_maps:kd,lights_fragment_end:zd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Wd,map_fragment:Xd,map_pars_fragment:qd,map_particle_fragment:Yd,map_particle_pars_fragment:$d,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:jd,morphcolor_vertex:Jd,morphnormal_vertex:Qd,morphtarget_pars_vertex:ef,morphtarget_vertex:tf,normal_fragment_begin:nf,normal_fragment_maps:sf,normal_pars_fragment:rf,normal_pars_vertex:of,normal_vertex:af,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:df,opaque_fragment:ff,packing:pf,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:_f,dithering_pars_fragment:vf,roughnessmap_fragment:xf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:yf,shadowmap_vertex:Ef,shadowmask_pars_fragment:bf,skinbase_vertex:Tf,skinning_pars_vertex:wf,skinning_vertex:Af,skinnormal_vertex:Rf,specularmap_fragment:Cf,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:If,transmission_pars_fragment:Uf,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Of,worldpos_vertex:Bf,background_vert:kf,background_frag:zf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:Vf,cube_frag:Wf,depth_vert:Xf,depth_frag:qf,distanceRGBA_vert:Yf,distanceRGBA_frag:$f,equirect_vert:Kf,equirect_frag:Zf,linedashed_vert:jf,linedashed_frag:Jf,meshbasic_vert:Qf,meshbasic_frag:ep,meshlambert_vert:tp,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:sp,meshnormal_vert:rp,meshnormal_frag:op,meshphong_vert:ap,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:hp,meshtoon_vert:up,meshtoon_frag:dp,points_vert:fp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:vp},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},_n={basic:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Lt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Lt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Lt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Lt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Lt([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};_n.physical={uniforms:Lt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const er={r:0,b:0,g:0},ii=new Tn,xp=new ct;function Mp(i,e,t,n,s,r,o){const a=new Be(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function _(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function g(w){let b=!1;const v=_(w);v===null?f(a,l):v&&v.isColor&&(f(v,1),b=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,b){const v=_(b);v&&(v.isCubeTexture||v.mapping===Sr)?(u===void 0&&(u=new Kt(new fi(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Wi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ii.copy(b.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xp.makeRotationFromEuler(ii)),u.material.toneMapped=Ze.getTransfer(v.colorSpace)!==Qe,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Kt(new yr(2,2),new $n({name:"BackgroundMaterial",uniforms:Wi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,b){w.getRGB(er,lc(i)),n.buffers.color.setClear(er.r,er.g,er.b,b,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:g,addToRenderList:p,dispose:R}}function Sp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,P,F,G,K){let W=!1;const H=h(G,F,P);r!==H&&(r=H,c(r.object)),W=m(y,G,F,K),W&&_(y,G,F,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,b(y,P,F,G),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,P,F){const G=F.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let W=K[P.id];W===void 0&&(W={},K[P.id]=W);let H=W[G];return H===void 0&&(H=d(l()),W[G]=H),H}function d(y){const P=[],F=[],G=[];for(let K=0;K<t;K++)P[K]=0,F[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:G,object:y,attributes:{},index:null}}function m(y,P,F,G){const K=r.attributes,W=P.attributes;let H=0;const q=F.getAttributes();for(const B in q)if(q[B].location>=0){const ae=K[B];let ue=W[B];if(ue===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function _(y,P,F,G){const K={},W=P.attributes;let H=0;const q=F.getAttributes();for(const B in q)if(q[B].location>=0){let ae=W[B];ae===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),K[B]=ue,H++}r.attributes=K,r.attributesNum=H,r.index=G}function g(){const y=r.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function p(y){f(y,0)}function f(y,P){const F=r.newAttributes,G=r.enabledAttributes,K=r.attributeDivisors;F[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),K[y]!==P&&(i.vertexAttribDivisor(y,P),K[y]=P)}function R(){const y=r.newAttributes,P=r.enabledAttributes;for(let F=0,G=P.length;F<G;F++)P[F]!==y[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function w(y,P,F,G,K,W,H){H===!0?i.vertexAttribIPointer(y,P,F,K,W):i.vertexAttribPointer(y,P,F,G,K,W)}function b(y,P,F,G){g();const K=G.attributes,W=F.getAttributes(),H=P.defaultAttributeValues;for(const q in W){const B=W[q];if(B.location>=0){let ie=K[q];if(ie===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const ae=ie.normalized,ue=ie.itemSize,Te=e.get(ie);if(Te===void 0)continue;const Ge=Te.buffer,$e=Te.type,Ve=Te.bytesPerElement,Y=$e===i.INT||$e===i.UNSIGNED_INT||ie.gpuType===ia;if(ie.isInterleavedBufferAttribute){const Z=ie.data,fe=Z.stride,Le=ie.offset;if(Z.isInstancedInterleavedBuffer){for(let ye=0;ye<B.locationSize;ye++)f(B.location+ye,Z.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ye=0;ye<B.locationSize;ye++)p(B.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ye=0;ye<B.locationSize;ye++)w(B.location+ye,ue/B.locationSize,$e,ae,fe*Ve,(Le+ue/B.locationSize*ye)*Ve,Y)}else{if(ie.isInstancedBufferAttribute){for(let Z=0;Z<B.locationSize;Z++)f(B.location+Z,ie.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Z=0;Z<B.locationSize;Z++)p(B.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Z=0;Z<B.locationSize;Z++)w(B.location+Z,ue/B.locationSize,$e,ae,ue*Ve,ue/B.locationSize*Z*Ve,Y)}}else if(H!==void 0){const ae=H[q];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(B.location,ae);break;case 3:i.vertexAttrib3fv(B.location,ae);break;case 4:i.vertexAttrib4fv(B.location,ae);break;default:i.vertexAttrib1fv(B.location,ae)}}}}R()}function v(){D();for(const y in n){const P=n[y];for(const F in P){const G=P[F];for(const K in G)u(G[K].object),delete G[K];delete P[F]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const F in P){const G=P[F];for(const K in G)u(G[K].object),delete G[K];delete P[F]}delete n[y.id]}function A(y){for(const P in n){const F=n[P];if(F[y.id]===void 0)continue;const G=F[y.id];for(const K in G)u(G[K].object),delete G[K];delete F[y.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:R}}function yp(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,n,1)}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ep(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:v,maxSamples:E}}function bp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ri,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const R=r?0:n,w=R*4;let b=f.clippingState||null;l.value=b,b=u(_,d,w,m);for(let v=0;v!==w;++v)b[v]=t[v];f.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,b=m;w!==g;++w,b+=4)o.copy(h[w]).applyMatrix4(R,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Tp(i){let e=new WeakMap;function t(o,a){return a===vo?o.mapping=Hi:a===xo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vo||a===xo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ni=4,ul=[.125,.215,.35,.446,.526,.582],li=20,no=new gc,dl=new Be;let io=null,so=0,ro=0,oo=!1;const oi=(1+Math.sqrt(5))/2,Di=1/oi,fl=[new I(-oi,Di,0),new I(oi,Di,0),new I(-Di,0,oi),new I(Di,0,oi),new I(0,oi,-Di),new I(0,oi,Di),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],wp=new I;class pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=wp}=r;io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io,so,ro),this._renderer.xr.enabled=oo,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Es,format:un,colorSpace:Vi,depthBuffer:!1},s=ml(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(r)),this._blurMaterial=Rp(r,e,t)}return s}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,n,s,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(dl),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const g=new us({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),p=new Kt(new fi,g);let f=!1;const R=e.background;R?R.isColor&&(g.color.copy(R),e.background=null,f=!0):(g.color.copy(dl),f=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const v=this._cubeSize;tr(s,b*v,w>2?v:0,v,v),h.setRenderTarget(s),f&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=d,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,no)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fl[(s-r-1)%fl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const f=[];let R=0;for(let A=0;A<li;++A){const D=A/g,S=Math.exp(-D*D/2);f.push(S),A===0?R+=S:A<p&&(R+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/R;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const b=this._sizeLods[s],v=3*b*(s>w-Ni?s-w+Ni:0),E=4*(this._cubeSize-b);tr(t,v,E,3*b,2*b),l.setRenderTarget(t),l.render(h,no)}}function Ap(i){const e=[],t=[],n=[];let s=i;const r=i-Ni+1+ul.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ni?l=ul[o-i+Ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,f=1,R=new Float32Array(g*_*m),w=new Float32Array(p*_*m),b=new Float32Array(f*_*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,D=E>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];R.set(S,g*_*E),w.set(d,p*_*E);const y=[E,E,E,E,E,E];b.set(y,f*_*E)}const v=new Zt;v.setAttribute("position",new Mn(R,g)),v.setAttribute("uv",new Mn(w,p)),v.setAttribute("faceIndex",new Mn(b,f)),e.push(v),s>Ni&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ml(i,e,t){const n=new di(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Rp(i,e,t){const n=new Float32Array(li),s=new I(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function gl(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function _l(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function Cp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vo||l===xo,u=l===Hi||l===Gi;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new pl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new pl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lp(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const R=m.array;g=m.version;for(let w=0,b=R.length;w<b;w+=3){const v=R[w+0],E=R[w+1],A=R[w+2];d.push(v,E,E,A,A,v)}}else if(_!==void 0){const R=_.array;g=_.version;for(let w=0,b=R.length/3-1;w<b;w+=3){const v=w+0,E=w+1,A=w+2;d.push(v,E,E,A,A,v)}}else return;const p=new(nc(d)?ac:oc)(d,1);p.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dp(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*o),t.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,d*o,_),t.update(m,n,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,n,1)}function h(d,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,_);let f=0;for(let R=0;R<_;R++)f+=m[R]*g[R];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ip(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Up(i,e,t){const n=new WeakMap,s=new et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),p===!0&&(b=3);let v=a.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const A=new Float32Array(v*E*4*h),D=new ic(A,v,E,h);D.type=Un,D.needsUpdate=!0;const S=b*4;for(let P=0;P<h;P++){const F=f[P],G=R[P],K=w[P],W=v*E*4*P;for(let H=0;H<F.count;H++){const q=H*S;_===!0&&(s.fromBufferAttribute(F,H),A[W+q+0]=s.x,A[W+q+1]=s.y,A[W+q+2]=s.z,A[W+q+3]=0),g===!0&&(s.fromBufferAttribute(G,H),A[W+q+4]=s.x,A[W+q+5]=s.y,A[W+q+6]=s.z,A[W+q+7]=0),p===!0&&(s.fromBufferAttribute(K,H),A[W+q+8]=s.x,A[W+q+9]=s.y,A[W+q+10]=s.z,A[W+q+11]=K.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new Ye(v,E)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Np(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const vc=new Ut,vl=new fc(1,1),xc=new ic,Mc=new nu,Sc=new hc,xl=[],Ml=[],Sl=new Float32Array(16),yl=new Float32Array(9),El=new Float32Array(4);function ji(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xl[s];if(r===void 0&&(r=new Float32Array(s),xl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Er(i,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),Mt(t,n)}}function Hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),Mt(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),Mt(t,n)}}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vl.compareFunction=tc,r=vl):r=vc,t.setTexture2D(e||r,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mc,s)}function Qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sc,s)}function em(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xc,s)}function tm(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return kp;case 35674:return zp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return $p;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}function nm(i,e){i.uniform1fv(this.addr,e)}function im(i,e){const t=ji(e,this.size,2);i.uniform2fv(this.addr,t)}function sm(i,e){const t=ji(e,this.size,3);i.uniform3fv(this.addr,t)}function rm(i,e){const t=ji(e,this.size,4);i.uniform4fv(this.addr,t)}function om(i,e){const t=ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function am(i,e){const t=ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lm(i,e){const t=ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cm(i,e){i.uniform1iv(this.addr,e)}function hm(i,e){i.uniform2iv(this.addr,e)}function um(i,e){i.uniform3iv(this.addr,e)}function dm(i,e){i.uniform4iv(this.addr,e)}function fm(i,e){i.uniform1uiv(this.addr,e)}function pm(i,e){i.uniform2uiv(this.addr,e)}function mm(i,e){i.uniform3uiv(this.addr,e)}function gm(i,e){i.uniform4uiv(this.addr,e)}function _m(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vc,r[o])}function vm(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mc,r[o])}function xm(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sc,r[o])}function Mm(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xc,r[o])}function Sm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tm(t.type)}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sm(t.type)}}class bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function bl(i,e){i.seq.push(e),i.map[e.id]=e}function Tm(i,e,t){const n=i.name,s=n.length;for(ao.lastIndex=0;;){const r=ao.exec(n),o=ao.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bl(t,c===void 0?new ym(a,i,e):new Em(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new bm(a),bl(t,h)),t=h}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wm=37297;let Am=0;function Rm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const wl=new Ne;function Cm(i){Ze._getMatrix(wl,Ze.workingColorSpace,i);const e=`mat3( ${wl.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case pr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Al(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Rm(i.getShaderSource(e),a)}else return r}function Pm(i,e){const t=Cm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lm(i,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case _h:t="Cineon";break;case vh:t="ACESFilmic";break;case Mh:t="AgX";break;case Sh:t="Neutral";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new I;function Dm(){Ze.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function Um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function as(i){return i!==""}function Rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(Fm,Bm)}const Om=new Map;function Bm(i,e){let t=Oe[e];if(t===void 0){const n=Om.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(i){return i.replace(km,zm)}function zm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ll(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Gm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case na:e="ENVMAP_BLENDING_MULTIPLY";break;case fh:e="ENVMAP_BLENDING_MIX";break;case ph:e="ENVMAP_BLENDING_ADD";break}return e}function Xm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hm(t),c=Gm(t),u=Vm(t),h=Wm(t),d=Xm(t),m=Im(t),_=Um(r),g=s.createProgram();let p,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(as).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(as).join(`
`),f.length>0&&(f+=`
`)):(p=[Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Pm("linearToOutputTexel",t.outputColorSpace),Dm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=jo(o),o=Rl(o,t),o=Cl(o,t),a=jo(a),a=Rl(a,t),a=Cl(a,t),o=Pl(o),a=Pl(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=R+p+o,b=R+f+a,v=Tl(s,s.VERTEX_SHADER,w),E=Tl(s,s.FRAGMENT_SHADER,b);s.attachShader(g,v),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(g)||"",G=s.getShaderInfoLog(v)||"",K=s.getShaderInfoLog(E)||"",W=F.trim(),H=G.trim(),q=K.trim();let B=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,E);else{const ae=Al(s,v,"vertex"),ue=Al(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ae+`
`+ue)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||q==="")&&(ie=!1);ie&&(P.diagnostics={runnable:B,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:q,prefix:f}})}s.deleteShader(v),s.deleteShader(E),D=new hr(s,g),S=Nm(s,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,wm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=E,this}let Ym=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Km(e),t.set(e,n)),n}}class Km{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}}function Zm(i,e,t,n,s,r,o){const a=new sc,l=new $m,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,y,P,F,G){const K=F.fog,W=G.geometry,H=S.isMeshStandardMaterial?F.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),B=q&&q.mapping===Sr?q.image.height:null,ie=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=ae!==void 0?ae.length:0;let Te=0;W.morphAttributes.position!==void 0&&(Te=1),W.morphAttributes.normal!==void 0&&(Te=2),W.morphAttributes.color!==void 0&&(Te=3);let Ge,$e,Ve,Y;if(ie){const je=_n[ie];Ge=je.vertexShader,$e=je.fragmentShader}else Ge=S.vertexShader,$e=S.fragmentShader,l.update(S),Ve=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const Z=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,ye=G.isBatchedMesh===!0,We=!!S.map,Tt=!!S.matcap,C=!!q,rt=!!S.aoMap,Ie=!!S.lightMap,Re=!!S.bumpMap,ge=!!S.normalMap,ot=!!S.displacementMap,_e=!!S.emissiveMap,Fe=!!S.metalnessMap,St=!!S.roughnessMap,mt=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,X=S.sheen>0,j=S.transmission>0,V=mt&&!!S.anisotropyMap,Se=T&&!!S.clearcoatMap,ne=T&&!!S.clearcoatNormalMap,ve=T&&!!S.clearcoatRoughnessMap,xe=O&&!!S.iridescenceMap,ee=O&&!!S.iridescenceThicknessMap,ce=X&&!!S.sheenColorMap,Ae=X&&!!S.sheenRoughnessMap,Me=!!S.specularMap,oe=!!S.specularColorMap,Ue=!!S.specularIntensityMap,L=j&&!!S.transmissionMap,te=j&&!!S.thicknessMap,se=!!S.gradientMap,de=!!S.alphaMap,J=S.alphaTest>0,$=!!S.alphaHash,me=!!S.extensions;let De=Xn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=i.toneMapping);const nt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:$e,defines:S.defines,customVertexShaderID:Ve,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ye,batchingColor:ye&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vi,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:Tt,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:B,aoMap:rt,lightMap:Ie,bumpMap:Re,normalMap:ge,displacementMap:d&&ot,emissiveMap:_e,normalMapObjectSpace:ge&&S.normalMapType===Th,normalMapTangentSpace:ge&&S.normalMapType===ec,metalnessMap:Fe,roughnessMap:St,anisotropy:mt,anisotropyMap:V,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:ne,clearcoatRoughnessMap:ve,dispersion:x,iridescence:O,iridescenceMap:xe,iridescenceThicknessMap:ee,sheen:X,sheenColorMap:ce,sheenRoughnessMap:Ae,specularMap:Me,specularColorMap:oe,specularIntensityMap:Ue,transmission:j,transmissionMap:L,thicknessMap:te,gradientMap:se,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:$,combine:S.combine,mapUv:We&&g(S.map.channel),aoMapUv:rt&&g(S.aoMap.channel),lightMapUv:Ie&&g(S.lightMap.channel),bumpMapUv:Re&&g(S.bumpMap.channel),normalMapUv:ge&&g(S.normalMap.channel),displacementMapUv:ot&&g(S.displacementMap.channel),emissiveMapUv:_e&&g(S.emissiveMap.channel),metalnessMapUv:Fe&&g(S.metalnessMap.channel),roughnessMapUv:St&&g(S.roughnessMap.channel),anisotropyMapUv:V&&g(S.anisotropyMap.channel),clearcoatMapUv:Se&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Me&&g(S.specularMap.channel),specularColorMapUv:oe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ue&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:te&&g(S.thicknessMap.channel),alphaMapUv:de&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ge||mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(We||de),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===Qe,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(R(y,S),w(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function R(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const y=_[S.type];let P;if(y){const F=_n[y];P=mu.clone(F.uniforms)}else P=S.uniforms;return P}function v(S,y){let P;for(let F=0,G=u.length;F<G;F++){const K=u[F];if(K.cacheKey===y){P=K,++P.usedTimes;break}}return P===void 0&&(P=new qm(i,y,S,r),u.push(P)),P}function E(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:D}}function jm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Il(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,m,_,g,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=p),e++,f}function a(h,d,m,_,g,p){const f=o(h,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(h,d,m,_,g,p){const f=o(h,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Jm),n.length>1&&n.sort(d||Dl),s.length>1&&s.sort(d||Dl)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Qm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Il,i.set(n,[o])):s>=r.length?(o=new Il,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function eg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ng=0;function ig(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sg(i){const e=new eg,t=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ct,o=new ct;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,R=0,w=0,b=0,v=0,E=0,A=0;c.sort(ig);for(let S=0,y=c.length;S<y;S++){const P=c[S],F=P.color,G=P.intensity,K=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*G,h+=F.g*G,d+=F.b*G;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],G);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,B=t.get(P);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=P.shadow.matrix,R++}n.directional[m]=H,m++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(G),H.distance=K,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[g]=H;const q=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=q.matrix,P.castShadow){const B=t.get(P);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=W,b++}g++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(F).multiplyScalar(G),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=H,p++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const q=P.shadow,B=t.get(P);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=P.shadow.matrix,w++}n.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(G),H.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[f]=H,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==R||D.numPointShadows!==w||D.numSpotShadows!==b||D.numSpotMaps!==v||D.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,D.directionalLength=m,D.pointLength=_,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=R,D.numPointShadows=w,D.numSpotShadows=b,D.numSpotMaps=v,D.numLightProbes=A,n.version=ng++)}function l(c,u){let h=0,d=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const w=c[f];if(w.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(w.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ul(i){const e=new sg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function rg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ul(i),e.set(s,[a])):r>=o.length?(a=new Ul(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function lg(i,e,t){let n=new fa;const s=new Ye,r=new Ye,o=new et,a=new Pu({depthPacking:bh}),l=new Lu,c={},u=t.maxTextureSize,h={[Yn]:kt,[kt]:Yn,[Bt]:Bt},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:og,fragmentShader:ag}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Zt;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Kt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let f=this.type;this.render=function(E,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Wn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=f!==In&&this.type===In,K=f===In&&this.type!==In;for(let W=0,H=E.length;W<H;W++){const q=E[W],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ie=B.getFrameExtents();if(s.multiply(ie),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,B.mapSize.y=r.y)),B.map===null||G===!0||K===!0){const ue=this.type!==In?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new di(s.x,s.y,ue),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ae=B.getViewportCount();for(let ue=0;ue<ae;ue++){const Te=B.getViewport(ue);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),F.viewport(o),B.updateMatrices(q,ue),n=B.getFrustum(),b(A,D,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===In&&R(B,D),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,y,P)};function R(E,A){const D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,D,m,g,null)}function w(E,A,D,S){let y=null;const P=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=y.uuid,G=A.uuid;let K=c[F];K===void 0&&(K={},c[F]=K);let W=K[G];W===void 0&&(W=y.clone(),K[G]=W,A.addEventListener("dispose",v)),y=W}if(y.visible=A.visible,y.wireframe=A.wireframe,S===In?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=D}return y}function b(E,A,D,S,y){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===In)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const G=e.update(E),K=E.material;if(Array.isArray(K)){const W=G.groups;for(let H=0,q=W.length;H<q;H++){const B=W[H],ie=K[B.materialIndex];if(ie&&ie.visible){const ae=w(E,ie,S,y);E.onBeforeShadow(i,E,A,D,G,ae,B),i.renderBufferDirect(D,null,G,ae,E,B),E.onAfterShadow(i,E,A,D,G,ae,B)}}}else if(K.visible){const W=w(E,K,S,y);E.onBeforeShadow(i,E,A,D,G,W,null),i.renderBufferDirect(D,null,G,W,E,null),E.onAfterShadow(i,E,A,D,G,W,null)}}const F=E.children;for(let G=0,K=F.length;G<K;G++)b(F[G],A,D,S,y)}function v(E){E.target.removeEventListener("dispose",v);for(const D in c){const S=c[D],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const cg={[ho]:uo,[fo]:go,[po]:_o,[zi]:mo,[uo]:ho,[go]:fo,[_o]:po,[mo]:zi};function hg(i,e){function t(){let L=!1;const te=new et;let se=null;const de=new et(0,0,0,0);return{setMask:function(J){se!==J&&!L&&(i.colorMask(J,J,J,J),se=J)},setLocked:function(J){L=J},setClear:function(J,$,me,De,nt){nt===!0&&(J*=De,$*=De,me*=De),te.set(J,$,me,De),de.equals(te)===!1&&(i.clearColor(J,$,me,De),de.copy(te))},reset:function(){L=!1,se=null,de.set(-1,0,0,0)}}}function n(){let L=!1,te=!1,se=null,de=null,J=null;return{setReversed:function($){if(te!==$){const me=e.get("EXT_clip_control");$?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=$;const De=J;J=null,this.setClear(De)}},getReversed:function(){return te},setTest:function($){$?Z(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function($){se!==$&&!L&&(i.depthMask($),se=$)},setFunc:function($){if(te&&($=cg[$]),de!==$){switch($){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case _o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=$}},setLocked:function($){L=$},setClear:function($){J!==$&&(te&&($=1-$),i.clearDepth($),J=$)},reset:function(){L=!1,se=null,de=null,J=null,te=!1}}}function s(){let L=!1,te=null,se=null,de=null,J=null,$=null,me=null,De=null,nt=null;return{setTest:function(je){L||(je?Z(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(je){te!==je&&!L&&(i.stencilMask(je),te=je)},setFunc:function(je,wn,pn){(se!==je||de!==wn||J!==pn)&&(i.stencilFunc(je,wn,pn),se=je,de=wn,J=pn)},setOp:function(je,wn,pn){($!==je||me!==wn||De!==pn)&&(i.stencilOp(je,wn,pn),$=je,me=wn,De=pn)},setLocked:function(je){L=je},setClear:function(je){nt!==je&&(i.clearStencil(je),nt=je)},reset:function(){L=!1,te=null,se=null,de=null,J=null,$=null,me=null,De=null,nt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,R=null,w=null,b=null,v=null,E=null,A=new Be(0,0,0),D=0,S=!1,y=null,P=null,F=null,G=null,K=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=q>=2);let ie=null,ae={};const ue=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Ge=new et().fromArray(ue),$e=new et().fromArray(Te);function Ve(L,te,se,de){const J=new Uint8Array(4),$=i.createTexture();i.bindTexture(L,$),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<se;me++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(te+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return $}const Y={};Y[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(zi),Re(!1),ge(Ca),Z(i.CULL_FACE),rt(Wn);function Z(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function fe(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Le(L,te){return h[L]!==te?(i.bindFramebuffer(L,te),h[L]=te,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=te),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=te),!0):!1}function ye(L,te){let se=m,de=!1;if(L){se=d.get(te),se===void 0&&(se=[],d.set(te,se));const J=L.textures;if(se.length!==J.length||se[0]!==i.COLOR_ATTACHMENT0){for(let $=0,me=J.length;$<me;$++)se[$]=i.COLOR_ATTACHMENT0+$;se.length=J.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function We(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Tt={[ai]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};Tt[Jc]=i.MIN,Tt[Qc]=i.MAX;const C={[eh]:i.ZERO,[th]:i.ONE,[nh]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[lh]:i.SRC_ALPHA_SATURATE,[oh]:i.DST_COLOR,[sh]:i.DST_ALPHA,[ih]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[hh]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[dh]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(L,te,se,de,J,$,me,De,nt,je){if(L===Wn){g===!0&&(fe(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),L!==Kc){if(L!==p||je!==S){if((f!==ai||b!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,b=ai),je)switch(L){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case La:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Da:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}R=null,w=null,v=null,E=null,A.set(0,0,0),D=0,p=L,S=je}return}J=J||te,$=$||se,me=me||de,(te!==f||J!==b)&&(i.blendEquationSeparate(Tt[te],Tt[J]),f=te,b=J),(se!==R||de!==w||$!==v||me!==E)&&(i.blendFuncSeparate(C[se],C[de],C[$],C[me]),R=se,w=de,v=$,E=me),(De.equals(A)===!1||nt!==D)&&(i.blendColor(De.r,De.g,De.b,nt),A.copy(De),D=nt),p=L,S=!1}function Ie(L,te){L.side===Bt?fe(i.CULL_FACE):Z(i.CULL_FACE);let se=L.side===kt;te&&(se=!se),Re(se),L.blending===Fi&&L.transparent===!1?rt(Wn):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;a.setTest(de),de&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function ge(L){L!==qc?(Z(i.CULL_FACE),L!==P&&(L===Ca?i.cullFace(i.BACK):L===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),P=L}function ot(L){L!==F&&(H&&i.lineWidth(L),F=L)}function _e(L,te,se){L?(Z(i.POLYGON_OFFSET_FILL),(G!==te||K!==se)&&(i.polygonOffset(te,se),G=te,K=se)):fe(i.POLYGON_OFFSET_FILL)}function Fe(L){L?Z(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function St(L){L===void 0&&(L=i.TEXTURE0+W-1),ie!==L&&(i.activeTexture(L),ie=L)}function mt(L,te,se){se===void 0&&(ie===null?se=i.TEXTURE0+W-1:se=ie);let de=ae[se];de===void 0&&(de={type:void 0,texture:void 0},ae[se]=de),(de.type!==L||de.texture!==te)&&(ie!==se&&(i.activeTexture(se),ie=se),i.bindTexture(L,te||Y[L]),de.type=L,de.texture=te)}function T(){const L=ae[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){Ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ge.copy(L))}function Ae(L){$e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$e.copy(L))}function Me(L,te){let se=c.get(te);se===void 0&&(se=new WeakMap,c.set(te,se));let de=se.get(L);de===void 0&&(de=i.getUniformBlockIndex(te,L.name),se.set(L,de))}function oe(L,te){const de=c.get(te).get(L);l.get(te)!==de&&(i.uniformBlockBinding(te,de,L.__bindingPointIndex),l.set(te,de))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,ae={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,R=null,w=null,b=null,v=null,E=null,A=new Be(0,0,0),D=0,S=!1,y=null,P=null,F=null,G=null,K=null,Ge.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:fe,bindFramebuffer:Le,drawBuffers:ye,useProgram:We,setBlending:rt,setMaterial:Ie,setFlipSided:Re,setCullFace:ge,setLineWidth:ot,setPolygonOffset:_e,setScissorTest:Fe,activeTexture:St,bindTexture:mt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:xe,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:ve,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:Se,scissor:ce,viewport:Ae,reset:Ue}}function ug(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return m?new OffscreenCanvas(T,x):gr("canvas")}function g(T,x,O){let X=1;const j=mt(T);if((j.width>O||j.height>O)&&(X=O/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(X*j.width),Se=Math.floor(X*j.height);h===void 0&&(h=_(V,Se));const ne=x?_(V,Se):h;return ne.width=V,ne.height=Se,ne.getContext("2d").drawImage(T,0,0,V,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+Se+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function p(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,x,O,X,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=x;if(x===i.RED&&(O===i.FLOAT&&(V=i.R32F),O===i.HALF_FLOAT&&(V=i.R16F),O===i.UNSIGNED_BYTE&&(V=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.R8UI),O===i.UNSIGNED_SHORT&&(V=i.R16UI),O===i.UNSIGNED_INT&&(V=i.R32UI),O===i.BYTE&&(V=i.R8I),O===i.SHORT&&(V=i.R16I),O===i.INT&&(V=i.R32I)),x===i.RG&&(O===i.FLOAT&&(V=i.RG32F),O===i.HALF_FLOAT&&(V=i.RG16F),O===i.UNSIGNED_BYTE&&(V=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RG8UI),O===i.UNSIGNED_SHORT&&(V=i.RG16UI),O===i.UNSIGNED_INT&&(V=i.RG32UI),O===i.BYTE&&(V=i.RG8I),O===i.SHORT&&(V=i.RG16I),O===i.INT&&(V=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RGB8UI),O===i.UNSIGNED_SHORT&&(V=i.RGB16UI),O===i.UNSIGNED_INT&&(V=i.RGB32UI),O===i.BYTE&&(V=i.RGB8I),O===i.SHORT&&(V=i.RGB16I),O===i.INT&&(V=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),O===i.UNSIGNED_INT&&(V=i.RGBA32UI),O===i.BYTE&&(V=i.RGBA8I),O===i.SHORT&&(V=i.RGBA16I),O===i.INT&&(V=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),x===i.RGBA){const Se=j?pr:Ze.getTransfer(X);O===i.FLOAT&&(V=i.RGBA32F),O===i.HALF_FLOAT&&(V=i.RGBA16F),O===i.UNSIGNED_BYTE&&(V=Se===Qe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function b(T,x){let O;return T?x===null||x===ui||x===ps?O=i.DEPTH24_STENCIL8:x===Un?O=i.DEPTH32F_STENCIL8:x===fs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ui||x===ps?O=i.DEPTH_COMPONENT24:x===Un?O=i.DEPTH_COMPONENT32F:x===fs&&(O=i.DEPTH_COMPONENT16),O}function v(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function E(T){const x=T.target;x.removeEventListener("dispose",E),D(x),x.isVideoTexture&&u.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),y(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,X=d.get(O);if(X){const j=X[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(T),Object.keys(X).length===0&&d.delete(O)}n.remove(T)}function S(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const O=T.source,X=d.get(O);delete X[x.__cacheKey],o.memory.textures--}function y(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let j=0;j<x.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[X][j]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let X=0,j=O.length;X<j;X++){const V=n.get(O[X]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(T)}let P=0;function F(){P=0}function G(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function K(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function W(T,x){const O=n.get(T);if(T.isVideoTexture&&Fe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function H(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function q(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function B(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Z(O,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const ie={[Mo]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},ae={[on]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ue={[wh]:i.NEVER,[Dh]:i.ALWAYS,[Ah]:i.LESS,[tc]:i.LEQUAL,[Rh]:i.EQUAL,[Lh]:i.GEQUAL,[Ch]:i.GREATER,[Ph]:i.NOTEQUAL};function Te(T,x){if(x.type===Un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===Cr||x.magFilter===Cs||x.magFilter===hi||x.minFilter===vn||x.minFilter===Cr||x.minFilter===Cs||x.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ie[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ie[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ie[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ae[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==Cs&&x.minFilter!==hi||x.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",E));const X=x.source;let j=d.get(X);j===void 0&&(j={},d.set(X,j));const V=K(x);if(V!==T.__cacheKey){j[V]===void 0&&(j[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[V].usedTimes++;const Se=j[T.__cacheKey];Se!==void 0&&(j[T.__cacheKey].usedTimes--,Se.usedTimes===0&&S(x)),T.__cacheKey=V,T.__webglTexture=j[V].texture}return O}function $e(T,x,O){return Math.floor(Math.floor(T/O)/x)}function Ve(T,x,O,X){const V=T.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{V.sort((ee,ce)=>ee.start-ce.start);let Se=0;for(let ee=1;ee<V.length;ee++){const ce=V[Se],Ae=V[ee],Me=ce.start+ce.count,oe=$e(Ae.start,x.width,4),Ue=$e(ce.start,x.width,4);Ae.start<=Me+1&&oe===Ue&&$e(Ae.start+Ae.count-1,x.width,4)===oe?ce.count=Math.max(ce.count,Ae.start+Ae.count-ce.start):(++Se,V[Se]=Ae)}V.length=Se+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ee=0,ce=V.length;ee<ce;ee++){const Ae=V[ee],Me=Math.floor(Ae.start/4),oe=Math.ceil(Ae.count/4),Ue=Me%x.width,L=Math.floor(Me/x.width),te=oe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ue,L,te,se,O,X,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Y(T,x,O){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const j=Ge(T,x),V=x.source;t.bindTexture(X,T.__webglTexture,i.TEXTURE0+O);const Se=n.get(V);if(V.version!==Se.__version||j===!0){t.activeTexture(i.TEXTURE0+O);const ne=Ze.getPrimaries(Ze.workingColorSpace),ve=x.colorSpace===Gn?null:Ze.getPrimaries(x.colorSpace),xe=x.colorSpace===Gn||ne===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ee=g(x.image,!1,s.maxTextureSize);ee=St(x,ee);const ce=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type);let Me=w(x.internalFormat,ce,Ae,x.colorSpace,x.isVideoTexture);Te(X,x);let oe;const Ue=x.mipmaps,L=x.isVideoTexture!==!0,te=Se.__version===void 0||j===!0,se=V.dataReady,de=v(x,ee);if(x.isDepthTexture)Me=b(x.format===gs,x.type),te&&(L?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,Ae,null));else if(x.isDataTexture)if(Ue.length>0){L&&te&&t.texStorage2D(i.TEXTURE_2D,de,Me,Ue[0].width,Ue[0].height);for(let J=0,$=Ue.length;J<$;J++)oe=Ue[J],L?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Ae,oe.data):t.texImage2D(i.TEXTURE_2D,J,Me,oe.width,oe.height,0,ce,Ae,oe.data);x.generateMipmaps=!1}else L?(te&&t.texStorage2D(i.TEXTURE_2D,de,Me,ee.width,ee.height),se&&Ve(x,ee,ce,Ae)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,Ae,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,Ue[0].width,Ue[0].height,ee.depth);for(let J=0,$=Ue.length;J<$;J++)if(oe=Ue[J],x.format!==un)if(ce!==null)if(L){if(se)if(x.layerUpdates.size>0){const me=hl(oe.width,oe.height,x.format,x.type);for(const De of x.layerUpdates){const nt=oe.data.subarray(De*me/oe.data.BYTES_PER_ELEMENT,(De+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,De,oe.width,oe.height,1,ce,nt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Me,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,Ae,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Me,oe.width,oe.height,ee.depth,0,ce,Ae,oe.data)}else{L&&te&&t.texStorage2D(i.TEXTURE_2D,de,Me,Ue[0].width,Ue[0].height);for(let J=0,$=Ue.length;J<$;J++)oe=Ue[J],x.format!==un?ce!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Me,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Ae,oe.data):t.texImage2D(i.TEXTURE_2D,J,Me,oe.width,oe.height,0,ce,Ae,oe.data)}else if(x.isDataArrayTexture)if(L){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,ee.width,ee.height,ee.depth),se)if(x.layerUpdates.size>0){const J=hl(ee.width,ee.height,x.format,x.type);for(const $ of x.layerUpdates){const me=ee.data.subarray($*J/ee.data.BYTES_PER_ELEMENT,($+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ce,Ae,me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ae,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ce,Ae,ee.data);else if(x.isData3DTexture)L?(te&&t.texStorage3D(i.TEXTURE_3D,de,Me,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ae,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ce,Ae,ee.data);else if(x.isFramebufferTexture){if(te)if(L)t.texStorage2D(i.TEXTURE_2D,de,Me,ee.width,ee.height);else{let J=ee.width,$=ee.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,Me,J,$,0,ce,Ae,null),J>>=1,$>>=1}}else if(Ue.length>0){if(L&&te){const J=mt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,de,Me,J.width,J.height)}for(let J=0,$=Ue.length;J<$;J++)oe=Ue[J],L?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce,Ae,oe):t.texImage2D(i.TEXTURE_2D,J,Me,ce,Ae,oe);x.generateMipmaps=!1}else if(L){if(te){const J=mt(ee);t.texStorage2D(i.TEXTURE_2D,de,Me,J.width,J.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ae,ee)}else t.texImage2D(i.TEXTURE_2D,0,Me,ce,Ae,ee);p(x)&&f(X),Se.__version=V.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Z(T,x,O){if(x.image.length!==6)return;const X=Ge(T,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const V=n.get(j);if(j.version!==V.__version||X===!0){t.activeTexture(i.TEXTURE0+O);const Se=Ze.getPrimaries(Ze.workingColorSpace),ne=x.colorSpace===Gn?null:Ze.getPrimaries(x.colorSpace),ve=x.colorSpace===Gn||Se===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const xe=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!xe&&!ee?ce[$]=g(x.image[$],!0,s.maxCubemapSize):ce[$]=ee?x.image[$].image:x.image[$],ce[$]=St(x,ce[$]);const Ae=ce[0],Me=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),Ue=w(x.internalFormat,Me,oe,x.colorSpace),L=x.isVideoTexture!==!0,te=V.__version===void 0||X===!0,se=j.dataReady;let de=v(x,Ae);Te(i.TEXTURE_CUBE_MAP,x);let J;if(xe){L&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ue,Ae.width,Ae.height);for(let $=0;$<6;$++){J=ce[$].mipmaps;for(let me=0;me<J.length;me++){const De=J[me];x.format!==un?Me!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,De.width,De.height,Me,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,De.width,De.height,Me,oe,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ue,De.width,De.height,0,Me,oe,De.data)}}}else{if(J=x.mipmaps,L&&te){J.length>0&&de++;const $=mt(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ue,$.width,$.height)}for(let $=0;$<6;$++)if(ee){L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,Me,oe,ce[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,ce[$].width,ce[$].height,0,Me,oe,ce[$].data);for(let me=0;me<J.length;me++){const nt=J[me].image[$].image;L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,nt.width,nt.height,Me,oe,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ue,nt.width,nt.height,0,Me,oe,nt.data)}}else{L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,oe,ce[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,Me,oe,ce[$]);for(let me=0;me<J.length;me++){const De=J[me];L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Me,oe,De.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ue,Me,oe,De.image[$])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),V.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function fe(T,x,O,X,j,V){const Se=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),ve=w(O.internalFormat,Se,ne,O.colorSpace),xe=n.get(x),ee=n.get(O);if(ee.__renderTarget=x,!xe.__hasExternalTextures){const ce=Math.max(1,x.width>>V),Ae=Math.max(1,x.height>>V);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,V,ve,ce,Ae,x.depth,0,Se,ne,null):t.texImage2D(j,V,ve,ce,Ae,0,Se,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,ee.__webglTexture,0,ot(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,ee.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const X=x.depthTexture,j=X&&X.isDepthTexture?X.type:null,V=b(x.stencilBuffer,j),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=ot(x);_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,V,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const X=x.textures;for(let j=0;j<X.length;j++){const V=X[j],Se=r.convert(V.format,V.colorSpace),ne=r.convert(V.type),ve=w(V.internalFormat,Se,ne,V.colorSpace),xe=ot(x);O&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ve,x.width,x.height):_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ve,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const j=X.__webglTexture,V=ot(x);if(x.depthTexture.format===ms)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===gs)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function We(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=X}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?ye(x.__webglFramebuffer[0],T):ye(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Le(x.__webglDepthbuffer[X],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Le(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(T,x,O){const X=n.get(T);x!==void 0&&fe(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&We(T)}function C(T){const x=T.texture,O=n.get(T),X=n.get(x);T.addEventListener("dispose",A);const j=T.textures,V=T.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,o.memory.textures++),V){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let ve=0;ve<x.mipmaps.length;ve++)O.__webglFramebuffer[ne][ve]=i.createFramebuffer()}else O.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)O.__webglFramebuffer[ne]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ne=0,ve=j.length;ne<ve;ne++){const xe=n.get(j[ne]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&_e(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<j.length;ne++){const ve=j[ne];O.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const xe=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),ce=w(ve.internalFormat,xe,ee,ve.colorSpace,T.isXRRenderTarget===!0),Ae=ot(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Te(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)fe(O.__webglFramebuffer[ne][ve],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve);else fe(O.__webglFramebuffer[ne],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,ve=j.length;ne<ve;ne++){const xe=j[ne],ee=n.get(xe);let ce=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Te(ce,xe),fe(O.__webglFramebuffer,T,xe,i.COLOR_ATTACHMENT0+ne,ce,0),p(xe)&&f(ce)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),Te(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)fe(O.__webglFramebuffer[ve],T,x,i.COLOR_ATTACHMENT0,ne,ve);else fe(O.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ne,0);p(x)&&f(ne),t.unbindTexture()}T.depthBuffer&&We(T)}function rt(T){const x=T.textures;for(let O=0,X=x.length;O<X;O++){const j=x[O];if(p(j)){const V=R(T),Se=n.get(j).__webglTexture;t.bindTexture(V,Se),f(V),t.unbindTexture()}}}const Ie=[],Re=[];function ge(T){if(T.samples>0){if(_e(T)===!1){const x=T.textures,O=T.width,X=T.height;let j=i.COLOR_BUFFER_BIT;const V=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),ne=x.length>1;if(ne)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ve=T.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[xe]);const ee=n.get(x[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,j,i.NEAREST),l===!0&&(Ie.length=0,Re.length=0,Ie.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ie.push(V),Re.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[xe]);const ee=n.get(x[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ot(T){return Math.min(s.maxSamples,T.samples)}function _e(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Fe(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function St(T,x){const O=T.colorSpace,X=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Vi&&O!==Gn&&(Ze.getTransfer(O)===Qe?(X!==un||j!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=Tt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function dg(i,e){function t(n,s=Gn){let r;const o=Ze.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Es)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===jl)return i.RGB;if(n===un)return i.RGBA;if(n===ms)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===rr||n===or||n===ar||n===lr)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===Eo||n===bo||n===To)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Ao)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===$o||n===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
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

}`;class mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $n({vertexShader:fg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gg extends Ki{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const g=typeof XRWebGLBinding<"u",p=new mg,f={},R=t.getContextAttributes();let w=null,b=null;const v=[],E=[],A=new Ye;let D=null;const S=new qt;S.viewport=new et;const y=new qt;y.viewport=new et;const P=[S,y],F=new Fu;let G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=v[Y];return Z===void 0&&(Z=new Zr,v[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=v[Y];return Z===void 0&&(Z=new Zr,v[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=v[Y];return Z===void 0&&(Z=new Zr,v[Y]=Z),Z.getHandSpace()};function W(Y){const Z=E.indexOf(Y.inputSource);if(Z===-1)return;const fe=v[Z];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const Z=E[Y];Z!==null&&(E[Y]=null,v[Y].disconnect(Z))}G=null,K=null,p.reset();for(const Y in f)delete f[Y];e.setRenderTarget(w),m=null,d=null,h=null,s=null,b=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Le=null,ye=null;R.depth&&(ye=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=R.stencil?gs:ms,Le=R.stencil?ps:ui);const We={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new di(d.textureWidth,d.textureHeight,{format:un,type:bn,depthTexture:new fc(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new di(m.framebufferWidth,m.framebufferHeight,{format:un,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(Y){for(let Z=0;Z<Y.removed.length;Z++){const fe=Y.removed[Z],Le=E.indexOf(fe);Le>=0&&(E[Le]=null,v[Le].disconnect(fe))}for(let Z=0;Z<Y.added.length;Z++){const fe=Y.added[Z];let Le=E.indexOf(fe);if(Le===-1){for(let We=0;We<v.length;We++)if(We>=E.length){E.push(fe),Le=We;break}else if(E[We]===null){E[We]=fe,Le=We;break}if(Le===-1)break}const ye=v[Le];ye&&ye.connect(fe)}}const B=new I,ie=new I;function ae(Y,Z,fe){B.setFromMatrixPosition(Z.matrixWorld),ie.setFromMatrixPosition(fe.matrixWorld);const Le=B.distanceTo(ie),ye=Z.projectionMatrix.elements,We=fe.projectionMatrix.elements,Tt=ye[14]/(ye[10]-1),C=ye[14]/(ye[10]+1),rt=(ye[9]+1)/ye[5],Ie=(ye[9]-1)/ye[5],Re=(ye[8]-1)/ye[0],ge=(We[8]+1)/We[0],ot=Tt*Re,_e=Tt*ge,Fe=Le/(-Re+ge),St=Fe*-Re;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(St),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ye[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const mt=Tt+Fe,T=C+Fe,x=ot-St,O=_e+(Le-St),X=rt*C/T*mt,j=Ie*C/T*mt;Y.projectionMatrix.makePerspective(x,O,X,j,mt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,fe=Y.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),F.near=y.near=S.near=Z,F.far=y.far=S.far=fe,(G!==F.near||K!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,K=F.far),F.layers.mask=Y.layers.mask|6,S.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const Le=Y.parent,ye=F.cameras;ue(F,Le);for(let We=0;We<ye.length;We++)ue(ye[We],Le);ye.length===2?ae(F,S,y):F.projectionMatrix.copy(S.projectionMatrix),Te(Y,F,Le)};function Te(Y,Z,fe){fe===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let Ge=null;function $e(Y,Z){if(u=Z.getViewerPose(c||o),_=Z,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Le=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let C=0;C<fe.length;C++){const rt=fe[C];let Ie=null;if(m!==null)Ie=m.getViewport(rt);else{const ge=h.getViewSubImage(d,rt);Ie=ge.viewport,C===0&&(e.setRenderTargetTextures(b,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(b))}let Re=P[C];Re===void 0&&(Re=new qt,Re.layers.enable(C),Re.viewport=new et,P[C]=Re),Re.matrix.fromArray(rt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(rt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),C===0&&(F.matrix.copy(Re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Re)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const C=h.getDepthInformation(fe[0]);C&&C.isValid&&C.texture&&p.init(C,s.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<fe.length;C++){const rt=fe[C].camera;if(rt){let Ie=f[rt];Ie||(Ie=new pc,f[rt]=Ie);const Re=h.getCameraImage(rt);Ie.sourceTexture=Re}}}}for(let fe=0;fe<v.length;fe++){const Le=E[fe],ye=v[fe];Le!==null&&ye!==void 0&&ye.update(Le,Z,c||o)}Ge&&Ge(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ve=new _c;Ve.setAnimationLoop($e),this.setAnimationLoop=function(Y){Ge=Y},this.dispose=function(){}}}const si=new Tn,_g=new ct;function vg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,lc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,R,w,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,R,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const R=e.get(f),w=R.envMap,b=R.envMapRotation;w&&(p.envMap.value=w,si.copy(b),si.x*=-1,si.y*=-1,si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),p.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(si)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,R,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*R,p.scale.value=w*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,R){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const R=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const b=w.program;n.uniformBlockBinding(R,b)}function c(R,w){let b=s[R.id];b===void 0&&(_(R),b=u(R),s[R.id]=b,R.addEventListener("dispose",p));const v=w.program;n.updateUBOMapping(R,v);const E=e.render.frame;r[R.id]!==E&&(d(R),r[R.id]=E)}function u(R){const w=h();R.__bindingPointIndex=w;const b=i.createBuffer(),v=R.__size,E=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const w=s[R.id],b=R.uniforms,v=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,A=b.length;E<A;E++){const D=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,y=D.length;S<y;S++){const P=D[S];if(m(P,E,S,v)===!0){const F=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let W=0;W<G.length;W++){const H=G[W],q=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+K,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,K),K+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,w,b,v){const E=R.value,A=w+"_"+b;if(v[A]===void 0)return typeof E=="number"||typeof E=="boolean"?v[A]=E:v[A]=E.clone(),!0;{const D=v[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return v[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function _(R){const w=R.uniforms;let b=0;const v=16;for(let A=0,D=w.length;A<D;A++){const S=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,P=S.length;y<P;y++){const F=S[y],G=Array.isArray(F.value)?F.value:[F.value];for(let K=0,W=G.length;K<W;K++){const H=G[K],q=g(H),B=b%v,ie=B%q.boundary,ae=B+ie;b+=ie,ae!==0&&v-ae<q.storage&&(b+=v-ae),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=q.storage}}}const E=b%v;return E>0&&(b+=v-E),R.__size=b,R.__cache={},this}function g(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function p(R){const w=R.target;w.removeEventListener("dispose",p);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(const R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Mg{constructor(e={}){const{canvas:t=Kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let v=!1;this._outputColorSpace=Xt;let E=0,A=0,D=null,S=-1,y=null;const P=new et,F=new et;let G=null;const K=new Be(0);let W=0,H=t.width,q=t.height,B=1,ie=null,ae=null;const ue=new et(0,0,H,q),Te=new et(0,0,H,q);let Ge=!1;const $e=new fa;let Ve=!1,Y=!1;const Z=new ct,fe=new I,Le=new et,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Tt(){return D===null?B:1}let C=n;function rt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const U="webgl2";if(C=rt(U,M),C===null)throw rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ie,Re,ge,ot,_e,Fe,St,mt,T,x,O,X,j,V,Se,ne,ve,xe,ee,ce,Ae,Me,oe,Ue;function L(){Ie=new Pp(C),Ie.init(),Me=new dg(C,Ie),Re=new Ep(C,Ie,e,Me),ge=new hg(C,Ie),Re.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),ot=new Ip(C),_e=new jm,Fe=new ug(C,Ie,ge,_e,Re,Me,ot),St=new Tp(b),mt=new Cp(b),T=new Bu(C),oe=new Sp(C,T),x=new Lp(C,T,ot,oe),O=new Np(C,x,T,ot),ee=new Up(C,Re,Fe),ne=new bp(_e),X=new Zm(b,St,mt,Ie,Re,oe,ne),j=new vg(b,_e),V=new Qm,Se=new rg(Ie),xe=new Mp(b,St,mt,ge,O,m,l),ve=new lg(b,O,Re),Ue=new xg(C,ot,Re,ge),ce=new yp(C,Ie,ot),Ae=new Dp(C,Ie,ot),ot.programs=X.programs,b.capabilities=Re,b.extensions=Ie,b.properties=_e,b.renderLists=V,b.shadowMap=ve,b.state=ge,b.info=ot}L();const te=new gg(b,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Ie.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ie.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(H,q,!1))},this.getSize=function(M){return M.set(H,q)},this.setSize=function(M,U,k=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,q=U,t.width=Math.floor(M*B),t.height=Math.floor(U*B),k===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(H*B,q*B).floor()},this.setDrawingBufferSize=function(M,U,k){H=M,q=U,B=k,t.width=Math.floor(M*k),t.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ue)},this.setViewport=function(M,U,k,z){M.isVector4?ue.set(M.x,M.y,M.z,M.w):ue.set(M,U,k,z),ge.viewport(P.copy(ue).multiplyScalar(B).round())},this.getScissor=function(M){return M.copy(Te)},this.setScissor=function(M,U,k,z){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,U,k,z),ge.scissor(F.copy(Te).multiplyScalar(B).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(M){ge.setScissorTest(Ge=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,k=!0){let z=0;if(M){let N=!1;if(D!==null){const Q=D.texture.format;N=Q===la||Q===aa||Q===oa}if(N){const Q=D.texture.type,le=Q===bn||Q===ui||Q===fs||Q===ps||Q===sa||Q===ra,pe=xe.getClearColor(),he=xe.getClearAlpha(),we=pe.r,Ce=pe.g,Ee=pe.b;le?(_[0]=we,_[1]=Ce,_[2]=Ee,_[3]=he,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=we,g[1]=Ce,g[2]=Ee,g[3]=he,C.clearBufferiv(C.COLOR,0,g))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT),k&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",J,!1),xe.dispose(),V.dispose(),Se.dispose(),_e.dispose(),St.dispose(),mt.dispose(),O.dispose(),oe.dispose(),Ue.dispose(),X.dispose(),te.dispose(),te.removeEventListener("sessionstart",pn),te.removeEventListener("sessionend",Ea),jn.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const M=ot.autoReset,U=ve.enabled,k=ve.autoUpdate,z=ve.needsUpdate,N=ve.type;L(),ot.autoReset=M,ve.enabled=U,ve.autoUpdate=k,ve.needsUpdate=z,ve.type=N}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $(M){const U=M.target;U.removeEventListener("dispose",$),me(U)}function me(M){De(M),_e.remove(M)}function De(M){const U=_e.get(M).programs;U!==void 0&&(U.forEach(function(k){X.releaseProgram(k)}),M.isShaderMaterial&&X.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,z,N,Q){U===null&&(U=ye);const le=N.isMesh&&N.matrixWorld.determinant()<0,pe=zc(M,U,k,z,N);ge.setMaterial(z,le);let he=k.index,we=1;if(z.wireframe===!0){if(he=x.getWireframeAttribute(k),he===void 0)return;we=2}const Ce=k.drawRange,Ee=k.attributes.position;let ze=Ce.start*we,Je=(Ce.start+Ce.count)*we;Q!==null&&(ze=Math.max(ze,Q.start*we),Je=Math.min(Je,(Q.start+Q.count)*we)),he!==null?(ze=Math.max(ze,0),Je=Math.min(Je,he.count)):Ee!=null&&(ze=Math.max(ze,0),Je=Math.min(Je,Ee.count));const ft=Je-ze;if(ft<0||ft===1/0)return;oe.setup(N,z,pe,k,he);let it,tt=ce;if(he!==null&&(it=T.get(he),tt=Ae,tt.setIndex(it)),N.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*Tt()),tt.setMode(C.LINES)):tt.setMode(C.TRIANGLES);else if(N.isLine){let be=z.linewidth;be===void 0&&(be=1),ge.setLineWidth(be*Tt()),N.isLineSegments?tt.setMode(C.LINES):N.isLineLoop?tt.setMode(C.LINE_LOOP):tt.setMode(C.LINE_STRIP)}else N.isPoints?tt.setMode(C.POINTS):N.isSprite&&tt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,ht=N._multiDrawCounts,Ke=N._multiDrawCount,zt=he?T.get(he).bytesPerElement:1,vi=_e.get(z).currentProgram.getUniforms();for(let Ht=0;Ht<Ke;Ht++)vi.setValue(C,"_gl_DrawID",Ht),tt.render(be[Ht]/zt,ht[Ht])}else if(N.isInstancedMesh)tt.renderInstances(ze,ft,N.count);else if(k.isInstancedBufferGeometry){const be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ht=Math.min(k.instanceCount,be);tt.renderInstances(ze,ft,ht)}else tt.render(ze,ft)};function nt(M,U,k){M.transparent===!0&&M.side===Bt&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,Rs(M,U,k),M.side=Yn,M.needsUpdate=!0,Rs(M,U,k),M.side=Bt):Rs(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),f=Se.get(k),f.init(U),w.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const pe=Q[le];nt(pe,k,N),z.add(pe)}else nt(Q,k,N),z.add(Q)}),f=w.pop(),z},this.compileAsync=function(M,U,k=null){const z=this.compile(M,U,k);return new Promise(N=>{function Q(){if(z.forEach(function(le){_e.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){N(M);return}setTimeout(Q,10)}Ie.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let je=null;function wn(M){je&&je(M)}function pn(){jn.stop()}function Ea(){jn.start()}const jn=new _c;jn.setAnimationLoop(wn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(M){je=M,te.setAnimationLoop(M),M===null?jn.stop():jn.start()},te.addEventListener("sessionstart",pn),te.addEventListener("sessionend",Ea),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,U,D),f=Se.get(M,w.length),f.init(U),w.push(f),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$e.setFromProjectionMatrix(Z,xn,U.reversedDepth),Y=this.localClippingEnabled,Ve=ne.init(this.clippingPlanes,Y),p=V.get(M,R.length),p.init(),R.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=b.xr.getDepthSensingMesh();Q!==null&&Ar(Q,U,-1/0,b.sortObjects)}Ar(M,U,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(ie,ae),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&xe.addToRenderList(p,M),this.info.render.frame++,Ve===!0&&ne.beginShadows();const k=f.state.shadowsArray;ve.render(k,M,U),Ve===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,N=p.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let le=0,pe=Q.length;le<pe;le++){const he=Q[le];Ta(z,N,M,he)}We&&xe.render(M);for(let le=0,pe=Q.length;le<pe;le++){const he=Q[le];ba(p,M,he,he.viewport)}}else N.length>0&&Ta(z,N,M,U),We&&xe.render(M),ba(p,M,U);D!==null&&A===0&&(Fe.updateMultisampleRenderTarget(D),Fe.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(b,M,U),oe.resetDefaultState(),S=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],Ve===!0&&ne.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function Ar(M,U,k,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){z&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const le=O.update(M),pe=M.material;pe.visible&&p.push(M,le,pe,k,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){const le=O.update(M),pe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Le.copy(le.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(Z)),Array.isArray(pe)){const he=le.groups;for(let we=0,Ce=he.length;we<Ce;we++){const Ee=he[we],ze=pe[Ee.materialIndex];ze&&ze.visible&&p.push(M,le,ze,k,Le.z,Ee)}}else pe.visible&&p.push(M,le,pe,k,Le.z,null)}}const Q=M.children;for(let le=0,pe=Q.length;le<pe;le++)Ar(Q[le],U,k,z)}function ba(M,U,k,z){const N=M.opaque,Q=M.transmissive,le=M.transparent;f.setupLightsView(k),Ve===!0&&ne.setGlobalState(b.clippingPlanes,k),z&&ge.viewport(P.copy(z)),N.length>0&&As(N,U,k),Q.length>0&&As(Q,U,k),le.length>0&&As(le,U,k),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ta(M,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new di(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Es:bn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const Q=f.state.transmissionRenderTarget[z.id],le=z.viewport||P;Q.setSize(le.z*b.transmissionResolutionScale,le.w*b.transmissionResolutionScale);const pe=b.getRenderTarget(),he=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(Q),b.getClearColor(K),W=b.getClearAlpha(),W<1&&b.setClearColor(16777215,.5),b.clear(),We&&xe.render(k);const Ce=b.toneMapping;b.toneMapping=Xn;const Ee=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Ve===!0&&ne.setGlobalState(b.clippingPlanes,z),As(M,k,z),Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Je=0,ft=U.length;Je<ft;Je++){const it=U[Je],tt=it.object,be=it.geometry,ht=it.material,Ke=it.group;if(ht.side===Bt&&tt.layers.test(z.layers)){const zt=ht.side;ht.side=kt,ht.needsUpdate=!0,wa(tt,k,z,be,ht,Ke),ht.side=zt,ht.needsUpdate=!0,ze=!0}}ze===!0&&(Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q))}b.setRenderTarget(pe,he,we),b.setClearColor(K,W),Ee!==void 0&&(z.viewport=Ee),b.toneMapping=Ce}function As(M,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=M.length;N<Q;N++){const le=M[N],pe=le.object,he=le.geometry,we=le.group;let Ce=le.material;Ce.allowOverride===!0&&z!==null&&(Ce=z),pe.layers.test(k.layers)&&wa(pe,U,k,he,Ce,we)}}function wa(M,U,k,z,N,Q){M.onBeforeRender(b,U,k,z,N,Q),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(b,U,k,z,M,Q),N.transparent===!0&&N.side===Bt&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,b.renderBufferDirect(k,U,z,N,M,Q),N.side=Yn,N.needsUpdate=!0,b.renderBufferDirect(k,U,z,N,M,Q),N.side=Bt):b.renderBufferDirect(k,U,z,N,M,Q),M.onAfterRender(b,U,k,z,N,Q)}function Rs(M,U,k){U.isScene!==!0&&(U=ye);const z=_e.get(M),N=f.state.lights,Q=f.state.shadowsArray,le=N.state.version,pe=X.getParameters(M,N.state,Q,U,k),he=X.getProgramCacheKey(pe);let we=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?mt:St).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",$),we=new Map,z.programs=we);let Ce=we.get(he);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===le)return Ra(M,pe),Ce}else pe.uniforms=X.getUniforms(M),M.onBeforeCompile(pe,b),Ce=X.acquireProgram(pe,he),we.set(he,Ce),z.uniforms=pe.uniforms;const Ee=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Ra(M,pe),z.needsLights=Gc(M),z.lightsStateVersion=le,z.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function Aa(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=hr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ra(M,U){const k=_e.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function zc(M,U,k,z,N){U.isScene!==!0&&(U=ye),Fe.resetTextureUnits();const Q=U.fog,le=z.isMeshStandardMaterial?U.environment:null,pe=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vi,he=(z.isMeshStandardMaterial?mt:St).get(z.envMap||le),we=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!k.morphAttributes.position,ze=!!k.morphAttributes.normal,Je=!!k.morphAttributes.color;let ft=Xn;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=b.toneMapping);const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=it!==void 0?it.length:0,be=_e.get(z),ht=f.state.lights;if(Ve===!0&&(Y===!0||M!==y)){const Ct=M===y&&z.id===S;ne.setState(z,M,Ct)}let Ke=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==ht.state.version||be.outputColorSpace!==pe||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==he||z.fog===!0&&be.fog!==Q||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==we||be.vertexTangents!==Ce||be.morphTargets!==Ee||be.morphNormals!==ze||be.morphColors!==Je||be.toneMapping!==ft||be.morphTargetsCount!==tt)&&(Ke=!0):(Ke=!0,be.__version=z.version);let zt=be.currentProgram;Ke===!0&&(zt=Rs(z,U,N));let vi=!1,Ht=!1,Qi=!1;const ut=zt.getUniforms(),jt=be.uniforms;if(ge.useProgram(zt.program)&&(vi=!0,Ht=!0,Qi=!0),z.id!==S&&(S=z.id,Ht=!0),vi||y!==M){ge.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",M.projectionMatrix),ut.setValue(C,"viewMatrix",M.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(C,fe.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ut.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ht=!0,Qi=!0)}if(N.isSkinnedMesh){ut.setOptional(C,N,"bindMatrix"),ut.setOptional(C,N,"bindMatrixInverse");const Ct=N.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ut.setValue(C,"boneTexture",Ct.boneTexture,Fe))}N.isBatchedMesh&&(ut.setOptional(C,N,"batchingTexture"),ut.setValue(C,"batchingTexture",N._matricesTexture,Fe),ut.setOptional(C,N,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",N._indirectTexture,Fe),ut.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",N._colorsTexture,Fe));const Jt=k.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ee.update(N,k,zt),(Ht||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,ut.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(jt.envMap.value=he,jt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(jt.envMapIntensity.value=U.environmentIntensity),Ht&&(ut.setValue(C,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&Hc(jt,Qi),Q&&z.fog===!0&&j.refreshFogUniforms(jt,Q),j.refreshMaterialUniforms(jt,z,B,q,f.state.transmissionRenderTarget[M.id]),hr.upload(C,Aa(be),jt,Fe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(hr.upload(C,Aa(be),jt,Fe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ut.setValue(C,"center",N.center),ut.setValue(C,"modelViewMatrix",N.modelViewMatrix),ut.setValue(C,"normalMatrix",N.normalMatrix),ut.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ct=z.uniformsGroups;for(let Nt=0,Rr=Ct.length;Nt<Rr;Nt++){const Jn=Ct[Nt];Ue.update(Jn,zt),Ue.bind(Jn,zt)}}return zt}function Hc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Gc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,U,k){const z=_e.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_e.get(M.texture).__webglTexture=U,_e.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const k=_e.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Vc=C.createFramebuffer();this.setRenderTarget=function(M,U=0,k=0){D=M,E=U,A=k;let z=!0,N=null,Q=!1,le=!1;if(M){const he=_e.get(M);if(he.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(he.__webglFramebuffer===void 0)Fe.setupRenderTarget(M);else if(he.__hasExternalTextures)Fe.rebindTextures(M,_e.get(M.texture).__webglTexture,_e.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ee=M.depthTexture;if(he.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(M.width!==Ee.image.width||M.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(M)}}const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(le=!0);const Ce=_e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?N=Ce[U][k]:N=Ce[U],Q=!0):M.samples>0&&Fe.useMultisampledRTT(M)===!1?N=_e.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[k]:N=Ce,P.copy(M.viewport),F.copy(M.scissor),G=M.scissorTest}else P.copy(ue).multiplyScalar(B).floor(),F.copy(Te).multiplyScalar(B).floor(),G=Ge;if(k!==0&&(N=Vc),ge.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&ge.drawBuffers(M,N),ge.viewport(P),ge.scissor(F),ge.setScissorTest(G),Q){const he=_e.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,k)}else if(le){const he=U;for(let we=0;we<M.textures.length;we++){const Ce=_e.get(M.textures[we]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+we,Ce.__webglTexture,k,he)}}else if(M!==null&&k!==0){const he=_e.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,he.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(M,U,k,z,N,Q,le,pe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he){ge.bindFramebuffer(C.FRAMEBUFFER,he);try{const we=M.textures[pe],Ce=we.format,Ee=we.type;if(!Re.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&k>=0&&k<=M.height-N&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(U,k,z,N,Me.convert(Ce),Me.convert(Ee),Q))}finally{const we=D!==null?_e.get(D).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,z,N,Q,le,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he)if(U>=0&&U<=M.width-z&&k>=0&&k<=M.height-N){ge.bindFramebuffer(C.FRAMEBUFFER,he);const we=M.textures[pe],Ce=we.format,Ee=we.type;if(!Re.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(U,k,z,N,Me.convert(Ce),Me.convert(Ee),0);const Je=D!==null?_e.get(D).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Je);const ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Zh(C,ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(ze),C.deleteSync(ft),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,k=0){const z=Math.pow(2,-k),N=Math.floor(M.image.width*z),Q=Math.floor(M.image.height*z),le=U!==null?U.x:0,pe=U!==null?U.y:0;Fe.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,le,pe,N,Q),ge.unbindTexture()};const Wc=C.createFramebuffer(),Xc=C.createFramebuffer();this.copyTextureToTexture=function(M,U,k=null,z=null,N=0,Q=null){Q===null&&(N!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let le,pe,he,we,Ce,Ee,ze,Je,ft;const it=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(k!==null)le=k.max.x-k.min.x,pe=k.max.y-k.min.y,he=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,Ce=k.min.y,Ee=k.isBox3?k.min.z:0;else{const Jt=Math.pow(2,-N);le=Math.floor(it.width*Jt),pe=Math.floor(it.height*Jt),M.isDataArrayTexture?he=it.depth:M.isData3DTexture?he=Math.floor(it.depth*Jt):he=1,we=0,Ce=0,Ee=0}z!==null?(ze=z.x,Je=z.y,ft=z.z):(ze=0,Je=0,ft=0);const tt=Me.convert(U.format),be=Me.convert(U.type);let ht;U.isData3DTexture?(Fe.setTexture3D(U,0),ht=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Fe.setTexture2DArray(U,0),ht=C.TEXTURE_2D_ARRAY):(Fe.setTexture2D(U,0),ht=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ke=C.getParameter(C.UNPACK_ROW_LENGTH),zt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ht=C.getParameter(C.UNPACK_SKIP_ROWS),Qi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,it.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,it.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,we),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee);const ut=M.isDataArrayTexture||M.isData3DTexture,jt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Jt=_e.get(M),Ct=_e.get(U),Nt=_e.get(Jt.__renderTarget),Rr=_e.get(Ct.__renderTarget);ge.bindFramebuffer(C.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Jn=0;Jn<he;Jn++)ut&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(M).__webglTexture,N,Ee+Jn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,Q,ft+Jn)),C.blitFramebuffer(we,Ce,le,pe,ze,Je,le,pe,C.DEPTH_BUFFER_BIT,C.NEAREST);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||_e.has(M)){const Jt=_e.get(M),Ct=_e.get(U);ge.bindFramebuffer(C.READ_FRAMEBUFFER,Wc),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xc);for(let Nt=0;Nt<he;Nt++)ut?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Jt.__webglTexture,N,Ee+Nt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Jt.__webglTexture,N),jt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,Q,ft+Nt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ct.__webglTexture,Q),N!==0?C.blitFramebuffer(we,Ce,le,pe,ze,Je,le,pe,C.COLOR_BUFFER_BIT,C.NEAREST):jt?C.copyTexSubImage3D(ht,Q,ze,Je,ft+Nt,we,Ce,le,pe):C.copyTexSubImage2D(ht,Q,ze,Je,we,Ce,le,pe);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else jt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ht,Q,ze,Je,ft,le,pe,he,tt,be,it.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ht,Q,ze,Je,ft,le,pe,he,tt,it.data):C.texSubImage3D(ht,Q,ze,Je,ft,le,pe,he,tt,be,it):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,ze,Je,le,pe,tt,be,it.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,ze,Je,it.width,it.height,tt,it.data):C.texSubImage2D(C.TEXTURE_2D,Q,ze,Je,le,pe,tt,be,it);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ke),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ht),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qi),Q===0&&U.generateMipmaps&&C.generateMipmap(ht),ge.unbindTexture()},this.initRenderTarget=function(M){_e.get(M).__webglFramebuffer===void 0&&Fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Fe.setTextureCube(M,0):M.isData3DTexture?Fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Fe.setTexture2DArray(M,0):Fe.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){E=0,A=0,D=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const pt=0,Sn=1,pi=2,yn=3,Xi=4,xs=5,qi=6,mi=7,Ms=8,Yi=9,en=10,Dt=11,Et=12,tn=13,Yt=14,nn=15,Kn=16,hn=17,fn=18,$i=19,Rt=20,Zn=21,gi=22,Wt=23,at=i=>i,Ji=[at({id:pt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),at({id:Sn,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),at({id:pi,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),at({id:yn,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),at({id:Xi,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),at({id:xs,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),at({id:qi,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),at({id:mi,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),at({id:Ms,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),at({id:Yi,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),at({id:en,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),at({id:Dt,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),at({id:Et,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),at({id:tn,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),at({id:Yt,name:"Metal Block",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),at({id:nn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),at({id:Kn,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),at({id:hn,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),at({id:fn,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),at({id:$i,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),at({id:Rt,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),at({id:Zn,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),at({id:gi,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:null,minTier:0,placeable:!0,color:[.35,.75,.8]}),at({id:Wt,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]})],It=96,Pe=16,$t=1440;function Ft(i){return Ji[i].solid}function Sg(i){return Ji[i].opaque}function yg(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}class ga{s;constructor(e){this.s=e>>>0||1}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}}function dn(i,e,t){let n=i*374761393+e*668265263+t*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function Jo(i){return i*i*(3-2*i)}function _a(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=Jo(i-n),o=Jo(e-s),a=dn(n,s,t),l=dn(n+1,s,t),c=dn(n,s+1,t),u=dn(n+1,s+1,t);return a+(l-a)*r+(c-a)*o+(a-l-c+u)*r*o}function ls(i,e,t,n=4,s=2,r=.5){let o=0,a=1,l=1,c=0;for(let u=0;u<n;u++)o+=_a(i*l,e*l,t+u*101)*a,c+=a,a*=r,l*=s;return o/c}function Eg(i,e,t,n=3){let s=0,r=1,o=1,a=0;for(let l=0;l<n;l++){const c=Math.abs(_a(i*o,e*o,t+l*101)*2-1);s+=(1-c)*r,a+=r,r*=.5,o*=2}return s/a}function yc(i,e){const t=Math.floor(i),n=Jo(i-t),s=dn(t,0,e),r=dn(t+1,0,e);return s+(r-s)*n}const bg=0,Ec=1,Tg=2,Qo=3,ur=4,wg=1e6;class Ag{constructor(e){this.seed=e;const t=new ga(e^24378);for(let n=0;n<6;n++){const s=t.range(0,Math.PI*2),r=t.range(160,900);this.oases.push({x:Math.round(Math.cos(s)*r),z:Math.round(Math.sin(s)*r),r:t.int(3,5)})}for(let n=0;n<4;n++){const s=t.range(0,Math.PI*2),r=t.range(300,1e3);this.towns.push({x:Math.round(Math.cos(s)*r),z:Math.round(Math.sin(s)*r)})}{const n=t.range(0,Math.PI*2),s=t.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s)}}for(let n=0;n<13;n++){const s=t.range(0,Math.PI*2),r=t.range(30,600);this.canisters.push({x:Math.round(Math.cos(s)*r),z:Math.round(Math.sin(s)*r),buried:t.next()<.4})}}oases=[];towns=[];secondShip={x:0,z:0};canisters=[];nearOasis(e,t){for(const n of this.oases)if(Math.abs(n.x-e)<=n.r+1&&Math.abs(n.z-t)<=n.r+1)return n;return null}}function va(i,e,t){const n=Math.min(.999,Math.max(.001,ls(i/900+.5,e/900+.5,t,3))),r=[.17,.42,.57,.72,.9].map(l=>Math.exp(-Math.abs(n-l)/.05)),o=Math.max(Math.abs(i),Math.abs(e));o<80&&(r[0]+=Math.pow(1-o/80,2)*6);const a=r.reduce((l,c)=>l+c,0);return r.map(l=>l/a)}function ea(i,e,t){const n=va(i,e,t);let s=0;for(let r=1;r<5;r++)n[r]>n[s]&&(s=r);return s}function Rg(i,e,t){const n=va(e,t,i),s=[30+ls(e/140,t/140,i+7)*8+Math.sin(e/9+t/13)*.9,29+ls(e/160,t/160,i+9)*6+Math.max(0,_a(e/26,t/26,i+11)-.72)*10,28+ls(e/220,t/220,i+5)*3,33+Math.floor(ls(e/170,t/170,i+13)*4.99)*5,29-Eg(e/210,t/210,i+17)*9];let r=0;for(let o=0;o<5;o++)r+=n[o]*s[o];return r}function En(i,e,t){const n=Math.max(Math.abs(e),Math.abs(t)),s=Rg(i,e,t);if(n>=30)return s;if(n<=14)return 30;const r=(n-14)/16,o=r*r*(3-2*r);return 30+(s-30)*o}function Cg(i,e,t,n,s){const r=va(e,t,i);let o=0,a=1;r[1]>r[0]&&(o=1,a=0);for(let l=2;l<5;l++)r[l]>r[o]?(a=o,o=l):r[l]>r[a]&&(a=l);return r[a]/r[o]>.35&&dn(e,t,i+45)<r[a]/(r[o]+r[a])&&(o=a),n===s?o===Tg?qi:o===ur?yn:o===Qo?pi:o===Ec&&dn(e,t,i+41)>.78?Xi:Sn:n>=s-3?o===ur?yn:Sn:o===Qo||o===ur?yn:pi}function Pg(i){const n=(o,a)=>o===4||o===-6?Math.abs(a)<=4:a===5||a===-5?o>=-5&&o<=3:o>=-5&&o<=3&&a>=-4&&a<=4,s=(o,a,l)=>(o===4||o===-6)&&Math.abs(l)>=3&&(a===30||a===34);for(let o=-6;o<=4;o++)for(let a=-5;a<=5;a++)for(let l=30;l<=34;l++){if(!n(o,a)||s(o,l,a))continue;const c=o>=2&&Math.abs(a)>2,u=o>=-5&&o<=3&&a>=-4&&a<=4&&l>=31&&l<=33&&!c;i(o,l,a,u?pt:l===30?Yt:en)}for(let o=-3;o<=1;o++)for(let a=-2;a<=2;a++)i(o,35,a,en);for(let o=-2;o<=0;o++)for(let a=-1;a<=1;a++)i(o,36,a,en);for(let o=-2;o<=1;o++)for(const a of[6,7,8,9,-6,-7,-8,-9])i(o,32,a,Yt);for(const o of[-3,2])for(const a of[6,7,8,-6,-7,-8])i(o,32,a,Yt);for(const o of[-1,0])i(o,31,10,Yt),i(o,31,-10,Yt);const r=(o,a,l)=>{i(o,a,l,Dt),i(o,a+1,l,Rt)};for(let o=-4;o<=4;o++)for(let a=31;a<=33;a++)i(1,a,o,en),i(-2,a,o,en);for(let o=-5;o<=-3;o++)for(const a of[-2,2])for(let l=31;l<=33;l++)i(o,l,a,en);r(1,31,0),r(-2,31,0),r(-2,31,3),r(-2,31,-3),r(-6,31,0);for(let o=-2;o<=2;o++)for(let a=32;a<=33;a++)i(4,a,o,Yi);i(-4,30,4,fn),i(-4,29,4,fn),i(-3,30,4,fn),i(-4,31,-4,gi),i(-4,31,-1,nn),i(0,31,-3,Kn);for(const[o,a]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])i(o,34,a,tn);for(const[o,a]of[[0,3],[0,4],[-1,4],[2,2]])i(o,31,a,Yt)}function Lg(i,e,t){const n=new ga(wg+77);for(let s=0;s<40;s++){const r=e.x+n.int(-5,5),o=e.z+n.int(-5,5),a=Math.round(En(t,r,o));i(r,a+n.int(0,1),o,n.next()<.5?en:Yt)}i(e.x,Math.round(En(t,e.x,e.z))+1,e.z,Zn)}function Dg(i,e,t){const n=Math.round(En(t,e.x,e.z));for(let s=-e.r-1;s<=e.r+1;s++)for(let r=-e.r-1;r<=e.r+1;r++){const o=e.x+s,a=e.z+r,l=Math.sqrt(s*s+r*r),c=Math.round(En(t,o,a));if(l<=e.r){for(let u=c;u>n-2;u--)i(o,u,a,pt);i(o,n-2,a,Sn);for(let u=n-1;u<=n;u++)i(o,u,a,fn)}else if(l<=e.r+1)for(let u=c;u<n+1;u++)i(o,u,a,Sn)}for(let s=0;s<3;s++){const r=e.x+Math.round(Math.cos(s*2.1)*(e.r+2)),o=e.z+Math.round(Math.sin(s*2.1)*(e.r+2)),a=Math.round(En(t,r,o));for(let l=a+1;l<=a+4;l++)i(r,l,o,mi)}}function Ig(i,e,t){for(const[n,s]of[[-4,-3],[2,2],[-2,4]]){const r=Math.round(En(t,e.x+n,e.z+s));for(let o=0;o<4;o++)for(let a=0;a<4;a++)for(let l=r+1;l<=r+3;l++){if(!(o===0||o===3||a===0||a===3||l===r+1||l===r+3)){i(e.x+n+o,l,e.z+s+a,pt);continue}o===0&&a===1&&l<=r+2||i(e.x+n+o,l,e.z+s+a,$i)}i(e.x+n+1,r+2,e.z+s+2,Yt)}}function Ug(i,e,t,n){const s=new Uint8Array(Pe*Pe*It),r=(o,a,l,c)=>{const u=o-t*Pe,h=l-n*Pe;u>=0&&u<Pe&&h>=0&&h<Pe&&a>=0&&a<It&&(s[(u*Pe+h)*It+a]=c)};for(let o=0;o<Pe;o++)for(let a=0;a<Pe;a++){const l=t*Pe+o,c=n*Pe+a,u=Math.round(En(i,l,c));for(let d=0;d<=u;d++)s[(o*Pe+a)*It+d]=Cg(i,l,c,d,u);const h=l*l+c*c<240;if(!h&&dn(l,c,i+21)>.988){const d=ea(l,c,i);if(d===bg||d===Ec){for(let m=1;m<=2;m++)r(l,u+m,c,yn);o>0&&r(l-1,u+1,c,yn)}}if(!h&&dn(l,c,i+23)>.9935){const d=ea(l,c,i);if(d!==Qo&&d!==ur){const m=3+(dn(l,c,i+29)*3|0);for(let _=u+1;_<=u+m;_++)r(l,_,c,mi)}}}t>=-1&&t<=0&&n>=-1&&n<=0&&Pg(r);for(const o of e.oases)Math.abs(t*Pe+8-o.x)<o.r+8&&Math.abs(n*Pe+8-o.z)<o.r+8&&Dg(r,o,i);for(const o of e.towns)Math.abs(t*Pe+8-o.x)<12&&Math.abs(n*Pe+8-o.z)<12&&Ig(r,o,i);return Math.abs(t*Pe+8-e.secondShip.x)<12&&Math.abs(n*Pe+8-e.secondShip.z)<12&&Lg(r,e.secondShip,i),s}const cs=(i,e)=>i+","+e,Nl=(i,e,t)=>(i*Pe+e)*It+t,Ng=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];class Fg{constructor(e){this.seed=e,this.gen=new Ag(e)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;gen;chunk(e,t){const n=cs(e,t);let s=this.chunks.get(n);if(!s){s=Ug(this.seed,this.gen,e,t);const r=this.deltas.get(n);if(r)for(const[o,a]of r)s[o]=a;this.chunks.set(n,s)}return s}get(e,t,n){if(t<0||t>=It)return pt;const s=Math.floor(e/Pe),r=Math.floor(n/Pe);return this.chunk(s,r)[Nl(e-s*Pe,n-r*Pe,t)]}skyResistance(e,t,n,s=40){let r=0;for(let o=1;o<=s;o++){const a=this.get(e,t+o,n);if(a!==pt&&(r+=Og[a],r>=6))return{R:r,openSky:!1}}return{R:r,openSky:r===0}}roomInfo(e,t,n,s=400){if(this.get(e,t,n)!==pt)return{size:0,sealed:!1,regulators:0,regCells:[]};const r=new Set([`${e},${t},${n}`]),o=[[e,t,n]],a=new Set;let l=0,c=!0;for(;o.length;){const[u,h,d]=o.pop();if(++l>s){c=!1;break}for(const[m,_,g]of Ng){const p=u+m,f=h+_,R=d+g;if(f>=It){c=!1;continue}const w=this.get(p,f,R);if(w===pt||w===Et){const b=p+","+f+","+R;r.has(b)||(r.add(b),o.push([p,f,R]))}else w===gi&&a.add(p+","+f+","+R)}}return{size:l,sealed:c,regulators:a.size,regCells:[...a]}}set(e,t,n,s){if(t<0||t>=It)return;const r=Math.floor(e/Pe),o=Math.floor(n/Pe),a=this.chunk(r,o),l=Nl(e-r*Pe,n-o*Pe,t);if(a[l]===s)return;a[l]=s;let c=this.deltas.get(cs(r,o));c||this.deltas.set(cs(r,o),c=new Map),c.set(l,s),this.markDirty(r,o);const u=e-r*Pe,h=n-o*Pe;u===0&&this.markDirty(r-1,o),h===0&&this.markDirty(r,o-1),u===Pe-1&&this.markDirty(r+1,o),h===Pe-1&&this.markDirty(r,o+1)}markDirty(e,t){this.dirty.add(cs(e,t))}surface(e,t){for(let n=It-1;n>=0;n--)if(this.get(e,n,t)!==pt)return n;return 0}serializeDeltas(){const e={};for(const[t,n]of this.deltas){const s=[];for(const[r,o]of n)s.push(r,o);e[t]=s}return e}loadDeltas(e){this.deltas.clear();for(const[t,n]of Object.entries(e)){const s=new Map;for(let r=0;r<n.length;r+=2)s.set(n[r],n[r+1]);this.deltas.set(t,s)}this.chunks.clear(),this.dirty.clear();for(const t of this.deltas.keys())this.dirty.add(t)}}const Og=Ji.map(i=>i.R);function Bg(i,e,t,n,s){const r=i.get(e,t,n);return r===Dt||r===Rt?!0:!(Sg(r)||r===s)}const ir=.6,kg=1.8,Fl=1.62;class zg{constructor(e){this.world=e}pos=new I(.5,31.01,2.5);vel=new I;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;waterAt(e){return this.world.get(Math.floor(this.pos.x),Math.floor(this.pos.y+e),Math.floor(this.pos.z))===fn}collides(e,t,n){const s=Math.floor(e-ir/2),r=Math.floor(e+ir/2),o=Math.floor(n-ir/2),a=Math.floor(n+ir/2),l=Math.floor(t),c=Math.floor(t+kg-.001);for(let u=s;u<=r;u++)for(let h=o;h<=a;h++)for(let d=l;d<=c;d++)if(Ft(this.world.get(u,d,h)))return!0;return!1}update(e,t,n,s,r,o){this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Fl);const a=this.inWater,l=(this.sprinting?7.2:4.5)*r*(o?.25:1)*(a?.55:1),c=new I(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),u=new I(-c.z,0,c.x),h=c.multiplyScalar(n).add(u.multiplyScalar(t));h.lengthSq()>1&&h.normalize();const d=this.onGround?40:a?12:8;this.vel.x+=(h.x*l-this.vel.x)*Math.min(1,d*e),this.vel.z+=(h.z*l-this.vel.z)*Math.min(1,d*e),a?(this.vel.y-=7*e,s&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*e),this.vel.y=qn.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*e)):(this.vel.y-=24*e,s&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*e,0),this.moveAxis(this.vel.z*e,2),this.moveAxis(this.vel.y*e,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0)),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(e,t){if(e===0)return;const n=this.pos,s=Math.max(1,Math.ceil(Math.abs(e)/.3)),r=e/s;for(let o=0;o<s;o++){const a=n.x+(t===0?r:0),l=n.y+(t===1?r:0),c=n.z+(t===2?r:0);if(!this.collides(a,l,c)){n.set(a,l,c);continue}t===1?(r<0&&(this.onGround=!0),this.vel.y=0):t===0?this.vel.x*=.25:this.vel.z*=.25;return}t===1&&e!==0&&(this.onGround=!1)}eye(){return new I(this.pos.x,this.pos.y+Fl,this.pos.z)}}const ds=20,dr=45,bc=36,Tc=37.5,Hg=21,Gg=26,wc=100;class Vg{constructor(e){this.weatherSeed=e}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};embedKey="";embedAir=null;worldTimeToDayFrac(e){return e%$t/$t}ambient(e,t,n){let s=Hg-Gg*Math.cos((t-.28)*Math.PI*2);e===2&&(s-=2),(e===3||e===4)&&(s+=3);const r=yc(Math.floor(n/10)/60,this.weatherSeed)*2-1;return s+r*8}update(e,t,n,s){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=e);const r=this.worldTimeToDayFrac(s.tSec),o=this.ambient(s.biome,r,s.tSec),a=Math.floor(n.x),l=Math.floor(n.y),c=Math.floor(n.z),u=(R,w,b)=>{const{R:v,openSky:E}=t.skyResistance(R,w,b);let A=1-Math.exp(-v),D=o;E&&s.sunElev>0&&(D+=8+10*s.sunElev);const S=t.roomInfo(R,w,b);return S.sealed&&(S.regulators*wc>=S.size?(D=36.6,A=1):(D=o,A=0)),{R:v,openSky:E,shelter:A,ambEff:D,room:S}};let h=u(a,l,c);if(h.room.size===0){const R=`${a},${l},${c}|${Math.floor(s.tSec*2)}`;if(this.embedKey!==R){let w=h;for(let b=-1;b<=1;b++)for(let v=-1;v<=1;v++)for(let E=-1;E<=1;E++){if(!b&&!v&&!E)continue;const A=u(a+b,l+v,c+E);A.room.size!==0&&Math.abs(A.ambEff-37)<Math.abs(w.ambEff-37)&&(w=A)}this.embedKey=R,this.embedAir=w}this.embedAir&&(h=this.embedAir)}this.lastOpenSky=h.openSky;let d=h.shelter,m=h.ambEff;const _=h.room;if(this.lastRoom=_,s.inWater){const R=qn.clamp(o,12,24)-3;m=(m+R)/2}const g=36.6+(m-36.6)*(1-d);this.lastAmbient=o,this.lastAmbientEff=m,this.lastShelterR=h.R,this.lastTarget=g;const p=_.sealed?.022:.0075;this.body+=(g-this.body)*p*e,this.body=qn.clamp(this.body,12,44.5);let f=100/($t*1.5);this.body>37&&(f+=(this.body-37)*.02),s.sprinting&&(f*=1.7),s.overencumbered&&(f+=.05),this.water=Math.max(0,this.water-f*e),this.body>39.5&&this.hurt((this.body-39.5)*.6,"heat stroke"),this.body<31.5&&this.hurt((31.5-this.body)*.7,"hypothermia"),this.water<=0?this.hurt(1.2,"dehydration"):this.water<5&&this.hurt((5-this.water)*.15,"dehydration"),this.water>25&&this.body>=bc&&this.body<=Tc&&this.health>0&&(this.health=Math.min(100,this.health+.25*e)),this.vision=qn.clamp((28-this.water)/28,0,1)}hurt(e,t){this.health<=0||this.invincible||(this.health-=e,this.health<=0&&(this.health=0,this.causeOfDeath=t))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=15,this.body=Math.max(30,this.body-2.5),this.surgeCooldown=10,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(3.5,this.body-33.5)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const Wg=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],rn=16,ki=16;function Xg(){const i=document.createElement("canvas");i.width=i.height=ki*rn;const e=i.getContext("2d"),t=new ga(48879),n=[Sn,pi,yn,Xi,xs,qi,mi,Ms,Yi,en,Dt,Rt,tn,Yt,nn,Kn,hn,fn,$i,Et,Zn,gi,Wt],s={};n.forEach((l,c)=>s[l]=c);const r=l=>Math.max(0,Math.min(1,l)),o=l=>{const c=s[l],u=c%ki*rn,h=(c/ki|0)*rn,[d,m,_]=Ji[l].color,g=(v,E=1,A=0,D=0,S=0)=>`rgba(${Math.round(r(d+v+A)*255)},${Math.round(r(m+v+D)*255)},${Math.round(r(_+v+S)*255)},${E})`,p=(v,E,A)=>{e.fillStyle=A,e.fillRect(u+v,h+E,1,1)},f=v=>{e.fillStyle=v,e.fillRect(u,h,rn,rn)},R=v=>(t.next()-.5)*v,w=(v,E)=>{for(let A=0;A<v;A++)p(t.int(0,15),t.int(0,15),g(R(E)))},b=(v,E)=>{let A=t.int(1,13),D=t.int(1,13);for(let S=0;S<v;S++)p(A,D,g(R(E)-.15)),A+=t.int(-1,1),D+=t.int(0,1),A=Math.max(0,Math.min(15,A)),D=Math.max(0,Math.min(15,D))};switch(l){case Sn:f(g(0)),w(50,.14);break;case pi:f(g(0)),w(30,.1);for(const v of[3,8,12])for(let E=0;E<16;E++)t.next()>.25&&p(E,v+E%2,g(-.12));break;case yn:f(g(R(.08))),w(40,.12),b(9,.05),b(7,.05);break;case Xi:f(g(-.04));for(let v=0;v<14;v++){const E=t.int(1,14),A=t.int(1,14);p(E,A,g(.12)),p(E+1,A,g(.05)),p(E,A+1,g(-.15)),p(E-1,A,g(-.1))}break;case xs:f(g(0)),w(70,.22);break;case qi:f(g(.04)),w(25,.08);for(let v=2;v<16;v+=5)for(let E=0;E<16;E++)t.next()>.4&&p(E,v+(E%3===2?1:0),g(-.12));break;case mi:f(g(0));for(let v=0;v<16;v++)for(let E=0;E<16;E++)p(v,E,g(R(.16)+Math.sin(E*.9+v)*.03));p(5,6,g(-.2)),p(6,6,g(-.25)),p(5,7,g(-.15));break;case Ms:f(g(0,.16));for(let v=0;v<16;v++)p(v,0,g(.12,.4)),p(v,15,g(.12,.4)),p(0,v,g(.12,.4)),p(15,v,g(.12,.4));for(let v=2;v<8;v++)p(v,v+2,g(.3,.4));break;case Yi:f(g(0,.26));for(let v=0;v<16;v++)p(v,0,g(.1,.55)),p(v,15,g(.1,.55)),p(0,v,g(.1,.55)),p(15,v,g(.1,.55)),p(8,v,g(.06,.5)),p(v,8,g(.06,.5));break;case en:f(g(0));for(let v=0;v<16;v++)for(let E=0;E<16;E++)p(E,v,g(-v*.006+R(.05)));for(let v=0;v<16;v++)p(v,10,g(-.22));for(const v of[1,5,9,13])p(v,9,g(.18)),p(v,11,g(.12));break;case Dt:f(g(-.03)),w(12,.06);for(let v=0;v<16;v++)p(v,0,g(-.22)),p(v,15,g(-.22)),p(0,v,g(-.22)),p(15,v,g(-.22));e.strokeStyle=g(.08),e.strokeRect(u+3.5,h+2.5,8,10);for(let v=7;v<=9;v++)p(12,v,g(.3));break;case Rt:f(g(-.03)),w(12,.06);for(let v=0;v<16;v++)p(v,0,g(-.22)),p(v,15,g(-.22)),p(0,v,g(-.22)),p(15,v,g(-.22));for(let v=4;v<=11;v++)for(let E=5;E<=10;E++)p(E,v,g(-.3,1,-.1,-.02,.06));e.strokeStyle=g(.14),e.strokeRect(u+4.5,h+3.5,7,9);break;case Et:for(let v=0;v<16;v++)p(0,v,g(-.1,.9)),p(1,v,g(.05,.85)),p(2,v,g(-.15,.7));p(1,7,g(.3,.9)),p(1,8,g(.3,.9));break;case tn:f(g(-.25));for(let v=5;v<=10;v++)for(let E=5;E<=10;E++)p(E,v,g(v>5&&v<10&&E>5&&E<10?.38:.2));for(let v=4;v<=11;v++)p(v,4,g(-.15)),p(v,11,g(-.15));break;case Yt:f(g(0));for(let v=0;v<16;v++)for(let E=0;E<16;E++)p(E,v,g((v%3===0?-.06:.03)+R(.05)));for(const[v,E]of[[2,2],[13,2],[2,13],[13,13]])p(v,E,g(.2));break;case nn:f(g(-.25)),w(10,.08);for(let v=-3;v<=3;v++){const E=3-Math.abs(v);for(let A=-E;A<=E;A++)p(8+A,8+v,g(v===0?0:.05,1))}p(8,7,g(.3,1)),p(7,8,g(.2,1));break;case Kn:f(g(0));for(const v of[5,11])for(let E=0;E<16;E++)p(E,v,g(-.2));w(25,.14);for(let v=0;v<6;v++)p(t.int(3,12),t.int(0,4),g(.1));break;case hn:f(g(-.1));for(let v=0;v<16;v+=2)p(v,13,g(.15,1,.02,-.02,0)),p(v+1,14,g(.08));for(let v=2;v<12;v++)p(v,14-v+2,g(.05,1,-.1,-.15,-.25)),p(v,v-1,g(0,1,-.12,-.18,-.3));for(let v=5;v<=10;v++)for(let E=6;E<=9;E++)p(E,v,g(v<8?.3:.18,1,.25,-.05,-.3));p(7,6,g(.45,1,.3,.1,-.25)),p(8,5,g(.4,1,.25,.05,-.25));break;case fn:f(g(0,.72));for(const v of[2,6,10,14])for(let E=0;E<16;E++)t.next()>.45&&p(E,v+(E%4<2?0:1),g(.15,.8));w(10,.08);break;case $i:f(g(R(.06)));for(const v of[3,7,11])for(let E=0;E<16;E++)p(E,v,g(-.18));for(let v=0,E=0;E<16;E+=4,v++)for(let A=v%2*4;A<16;A+=8)for(let D=E;D<E+3;D++)p(A,D,g(-.15));break;case Zn:f(g(-.35,1,.05,0,.1));for(let v=0;v<24;v++)p(t.int(0,15),t.int(0,15),g(-.25,1,.1,0,.18));for(let v=4;v<=11;v++)for(let E=4;E<=11;E++){const A=Math.max(Math.abs(v-7.5),Math.abs(E-7.5));A>=3.5?p(v,E,g(.12,1,.55,.15,.85)):p(v,E,g(.3+(3-A)*.15,1,.75,.3,1))}break;case gi:f(g(-.08)),w(10,.05);for(const v of[1,3,5])for(let E=2;E<=13;E++)p(E,v,g(-.25));for(let v=4;v<=11;v++)for(let E=7;E<=14;E++){const A=Math.max(Math.abs(v-7.5),Math.abs(E-10.5));A>=3.2?p(v,E,g(.12)):p(v,E,g(.22+(3-A)*.1,1,-.05,.15,.2))}break;case Wt:f(g(-.02)),w(18,.07);for(let v=0;v<16;v++)p(v,0,g(-.28)),p(v,7,g(-.24)),p(v,15,g(-.3));for(let v=0;v<16;v++)p(v,4,"rgba(148,154,166,1)"),p(v,5,"rgba(120,126,138,1)");for(let v=2;v<5;v++)for(const E of[7,8])p(E,v,"rgba(200,205,215,1)");p(7,6,"rgba(40,42,48,1)"),p(8,6,"rgba(40,42,48,1)");break}};for(const l of n)o(l);const a=new Ru(i);return a.flipY=!1,a.magFilter=a.minFilter=on,a.generateMipmaps=!1,a.colorSpace=Xt,a}const Ac=[];[Sn,pi,yn,Xi,xs,qi,mi,Ms,Yi,en,Dt,Rt,tn,Yt,nn,Kn,hn,fn,$i,Et,Zn,gi,Wt].forEach((e,t)=>Ac[e]=t);const sr=ki*rn,Ol=i=>{const e=Ac[i]??0;return[e%ki*rn,(e/ki|0)*rn]};class qg{scene=new Su;camera;three;chunkMeshes=new Map;group=new Ui;entityGroup=new Ui;sun;hemi;stars;sunDisc;moonDisc;highlight;renderDistance=7;atlas=Xg();matOpaque=new cr({map:this.atlas,vertexColors:!0,side:Bt});matEmissive=new us({map:this.atlas,vertexColors:!0,side:Bt});matTrans=new cr({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:Bt});torch;dynLights=[];constructor(e){this.three=new Mg({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),e.appendChild(this.three.domElement),this.camera=new qt(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new cl(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.sun=new Nu(16777215,1),this.hemi=new Du(12571878,9073749,.55),this.scene.add(this.sun,this.hemi),this.scene.fog=new da(14207392,40,this.renderDistance*Pe);const t=new Zt,n=[];for(let r=0;r<500;r++){const o=Math.random()*Math.PI*2,a=Math.acos(Math.random()*2-1);n.push(Math.sin(a)*Math.cos(o)*400,Math.abs(Math.cos(a))*400,Math.sin(a)*Math.sin(o)*400)}t.setAttribute("position",new bt(n,3)),this.stars=new Au(t,new dc({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new Kt(new xr(24,24),new us({color:16771504,fog:!1,side:Bt,toneMapped:!1})),this.moonDisc=new Kt(new xr(15,24),new us({color:14213877,fog:!1,side:Bt,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const s=new fi(1.002,1.002,1.002);this.highlight=new wu(new Cu(s),new uc({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(e){this.three.setPixelRatio(e==="low"?.75:e==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const e of this.chunkMeshes.values())for(const t of e)this.group.remove(t),t.geometry.dispose();this.chunkMeshes.clear()}addPointLight(e,t,n,s){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===e&&o.y===t&&o.z===n))return;const r=new cl(s==="lamp"?16773296:s==="fire"?16745280:9427199,s==="lamp"?.9:s==="fire"?1.1:.8,s==="lamp"?12:s==="fire"?9:10,1.3);r.position.set(e+.5,t+.6,n+.5),this.scene.add(r),this.dynLights.push({x:e,y:t,z:n,light:r,flame:s==="fire"})}removePointLight(e,t,n){const s=this.dynLights.findIndex(r=>r.x===e&&r.y===t&&r.z===n);s<0||(this.scene.remove(this.dynLights[s].light),this.dynLights.splice(s,1))}dispose(){this.resetChunkMeshes();for(const e of this.dynLights)this.scene.remove(e.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(e){const t=(e-.25)*Math.PI*2,n=Math.sin(t),s=qn.clamp(n*2.2,0,1),r=qn.clamp(1-Math.abs(n)*5,0,1),o=new Be(660006),a=new Be(13201213),l=new Be(12570592),c=o.clone().lerp(l,s);r>0&&c.lerp(a,r*.7);const u=new Be(16767392).lerp(new Be(16743231),r);return{sky:c,sunColor:u,sunElev:n,sunI:Math.max(.06,n*1.15)}}updateSky(e,t){const n=e%$t/$t,s=this.keyframe(n);this.scene.background=s.sky,this.scene.fog.color.copy(s.sky),this.scene.fog.far=this.renderDistance*Pe*.98,this.sun.color.copy(s.sunColor),this.sun.intensity=s.sunI,s.sunElev<0&&(this.sun.color.setHex(10335464),this.sun.intensity=.28),this.sun.position.set(t.x+Math.cos((n-.25)*Math.PI*2)*100,t.y+s.sunElev*100,t.z+40),this.hemi.intensity=.22+s.sunI*.35,this.stars.material.opacity=Math.max(0,1-s.sunI*3),this.stars.position.set(t.x,t.y,t.z);const r=(n-.25)*Math.PI*2,o=430;this.sunDisc.position.set(t.x+Math.cos(r)*o,t.y+Math.sin(r)*o,t.z+o*.4),this.moonDisc.position.set(t.x-Math.cos(r)*o,t.y-Math.sin(r)*o,t.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(r)>-.12,this.moonDisc.visible=Math.sin(r)<.12,this.torch.intensity=.12+(1-Math.min(1,s.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+yc(e*5.3+a.x*3.1+a.z,7)*.45);return s}setHighlight(e){if(!e){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(e.x+.5,e.y+.5,e.z+.5)}rebuildDirty(e){let t=3;for(const n of e.dirty){if(t<=0)break;this.buildChunk(e,n),e.dirty.delete(n),t--}}ensureChunks(e,t,n){for(let s=-this.renderDistance;s<=this.renderDistance;s++)for(let r=-this.renderDistance;r<=this.renderDistance;r++){const o=cs(t+s,n+r);this.chunkMeshes.has(o)||e.markDirty(t+s,n+r)}}buildChunk(e,t){const[n,s]=t.split(",").map(Number),r=e.chunk(n,s),o=[],a=[],l=[],c=[],u=[],h=[],d=[],m=[],_=[],g=[],p=[],f=[];for(let v=0;v<Pe;v++)for(let E=0;E<Pe;E++)for(let A=0;A<It;A++){const D=r[(v*Pe+E)*It+A];if(D===pt)continue;if(D===Dt||D===Rt||D===Et){this.emitDoor(o,a,l,c,e,v,A,E,n*Pe,s*Pe,D);continue}const S=Ji[D],y=S.emissive,P=S.transparent,F=P?_:y?u:o,G=P?g:y?h:a,K=P?p:y?d:l,W=P?f:y?m:c,[H,q]=Ol(D);for(const B of Wg){const ie=v+B.dir[0],ae=A+B.dir[1],ue=E+B.dir[2];if(!Bg(e,n*Pe+ie,ae,s*Pe+ue,D))continue;const Te=F.length/3,Ge=y?1:B.shade;for(const $e of B.corners)F.push(v+$e[0],A+$e[1],E+$e[2]),G.push(Ge,Ge,Ge),W.push((H+.5+$e[B.uv[0]]*(rn-1))/sr,(q+.5+$e[B.uv[1]]*(rn-1))/sr);K.push(Te,Te+1,Te+2,Te,Te+2,Te+3)}}const R=this.chunkMeshes.get(t);if(R)for(const v of R)this.group.remove(v),v.geometry.dispose();const w=[],b=(v,E,A,D,S)=>{if(v.length===0)return;const y=new Zt;y.setAttribute("position",new bt(v,3)),y.setAttribute("color",new bt(E,3)),y.setAttribute("uv",new bt(D,2)),y.setIndex(A),y.computeVertexNormals();const P=new Kt(y,S);P.position.set(n*Pe,0,s*Pe),this.group.add(P),w.push(P)};b(o,a,l,c,this.matOpaque),b(u,h,d,m,this.matEmissive),b(_,g,p,f,this.matTrans),this.chunkMeshes.set(t,w)}emitDoor(e,t,n,s,r,o,a,l,c,u,h){const d=c+o,m=u+l,_=h===Rt||h===Et&&r.get(d,a-1,m)===Et,g=Ol(_?Rt:Dt),p=h===Et,R=!(Ft(r.get(d-1,a,m))||Ft(r.get(d+1,a,m)))&&(Ft(r.get(d,a,m-1))||Ft(r.get(d,a,m+1))),w=R?!Ft(r.get(d-1,a,m)):!Ft(r.get(d,a,m-1)),b=R?!Ft(r.get(d+1,a,m)):!Ft(r.get(d,a,m+1)),v=d+m&1;let E,A;v&&b?(E=1,A=1):!v&&w?(E=0,A=-1):b?(E=1,A=1):(E=0,A=-1);const D=r.doorSwing.get(d+","+m);D&&(A=D);const S=.04,y=.96,P=E?.84:.02,F=E?.98:.16,G=S,K=E?.98:.02,W=(B,ie,ae)=>{const ue=e.length/3;for(let Te=0;Te<4;Te++){let[Ge,$e,Ve]=B[Te];if(p){const Y=Ge-G,Z=Ve-K;Ge=G-A*Z,Ve=K+A*Y}e.push(R?o+Ve:o+Ge,a+$e,R?l+Ge:l+Ve),t.push(ae,ae,ae),s.push((g[0]+.5+ie[Te][0]*(rn-1))/sr,(g[1]+.5+ie[Te][1]*(rn-1))/sr)}n.push(ue,ue+1,ue+2,ue,ue+2,ue+3)},H=B=>(B-S)/(y-S),q=B=>(B-P)/(F-P);W([[S,0,F],[y,0,F],[y,1,F],[S,1,F]],[[H(S),0],[H(y),0],[H(y),1],[H(S),1]],.85),W([[S,0,P],[y,0,P],[y,1,P],[S,1,P]],[[H(y),0],[H(S),0],[H(S),1],[H(y),1]],.7),W([[y,0,P],[y,0,F],[y,1,F],[y,1,P]],[[q(P),0],[q(F),0],[q(F),1],[q(P),1]],.6),W([[S,0,P],[S,0,F],[S,1,F],[S,1,P]],[[q(F),0],[q(P),0],[q(P),1],[q(F),1]],.6),W([[S,1,P],[y,1,P],[y,1,F],[S,1,F]],[[H(S),q(P)],[H(y),q(P)],[H(y),q(F)],[H(S),q(F)]],1),W([[S,0,P],[y,0,P],[y,0,F],[S,0,F]],[[H(S),q(F)],[H(y),q(F)],[H(y),q(P)],[H(S),q(P)]],.45)}addEntityMesh(e,t,n,s=.35){const r=new Kt(new fi(s,s,s),new cr({color:n}));return r.position.set(...t),r.userData.eid=e,this.entityGroup.add(r),r}removeEntityMesh(e){const t=this.entityGroup.children.find(n=>n.userData.eid===e);t&&(this.entityGroup.remove(t),t.geometry.dispose())}moveEntityMesh(e,t){const n=this.entityGroup.children.find(s=>s.userData.eid===e);n&&n.position.set(...t)}entityMesh(e){return this.entityGroup.children.find(t=>t.userData.eid===e)}render(){this.three.render(this.scene,this.camera)}}const st=i=>i,Yg=(i,e)=>`${i.charAt(0).toUpperCase()+i.slice(1)} (tier ${e}). Higher tiers break faster and unlock harder blocks.`,mn=(i,e,t,n)=>st({id:`${t}_${i}`,name:`${t.charAt(0).toUpperCase()+t.slice(1)} ${i}`,desc:Yg(i,e),w:1,h:2,mass:1.2+e*.8,tool:{type:i,tier:e},color:n}),$g=[st({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Sn,color:"#d4b880"}),st({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:pi,color:"#c2a670"}),st({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:yn,color:"#736d69"}),st({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Xi,color:"#8d8680"}),st({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:xs,color:"#6b5238"}),st({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:qi,color:"#d9dbd6"}),st({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:mi,color:"#61492f"}),st({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:Ms,color:"#a6cfe6"}),st({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:Yi,color:"#8cc0a0"}),st({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:en,color:"#858a99"}),st({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:Dt,color:"#999fa8"}),st({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:tn,color:"#fff0a0"}),st({id:"metal",name:"Metal Rod",desc:"Salvaged from the wreck. The backbone of every tool.",w:1,h:1,mass:1,block:Yt,color:"#9aa0aa"}),st({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:nn,color:"#66e5f0"}),st({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list.",w:1,h:2,mass:6,block:Kn,color:"#806647"}),st({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:hn,color:"#e67333"}),st({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:gi,color:"#59bfcc"}),st({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:$i,color:"#b3956b"}),st({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Wt,color:"#8a6d3b"}),st({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),st({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),st({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),st({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:Zn,color:"#c468e8"}),mn("pickaxe",1,"wood","#a8834f"),mn("pickaxe",2,"stone","#8d8680"),mn("pickaxe",3,"metal","#9aa0aa"),mn("shovel",1,"wood","#a8834f"),mn("shovel",2,"stone","#8d8680"),mn("shovel",3,"metal","#9aa0aa"),mn("axe",1,"wood","#a8834f"),mn("axe",2,"stone","#8d8680"),mn("axe",3,"metal","#9aa0aa"),mn("disassembler",1,"metal","#c0c8d8"),st({id:"backpack1",name:"Backpack I",desc:"Inventory grid grows to 4×5. Weight limit +20 kg.",w:2,h:2,mass:2,color:"#7a5a3a"})],dt=Object.fromEntries($g.map(i=>[i.id,i])),Rc={};for(const i of Object.values(dt))i.block!==void 0&&(Rc[i.block]=i.id);Rc[Rt]="door";function Vn(i){const e=dt[i.itemId];return i.rot?{w:e.h,h:e.w}:{w:e.w,h:e.h}}class Bl{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){this.addItem("canister_full",2)}capacity(){return{w:this.w,h:this.h}}setBackpack(e,t,n){const s=this.slots;this.w=e,this.h=t,this.bonusLimit=n,this.slots=[];for(const r of s)this.addItem(r.itemId,r.count)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let e=0;for(const t of this.slots)e+=dt[t.itemId].mass*t.count;return e}occupied(e,t,n){for(const s of this.slots){if(s===n)continue;const r=Vn(s);if(e>=s.x&&e<s.x+r.w&&t>=s.y&&t<s.y+r.h)return s}return null}fits(e,t,n,s,r){if(e<0||t<0||e+n>this.w||t+s>this.h)return!1;for(let o=0;o<s;o++)for(let a=0;a<n;a++)if(this.occupied(e+a,t+o,r))return!1;return!0}move(e,t,n){const s=Vn(e);return t===e.x&&n===e.y?!0:this.fits(t,n,s.w,s.h,e)?(e.x=t,e.y=n,!0):!1}rotate(e){const t=Vn(e);return t.w===t.h||!this.fits(e.x,e.y,t.h,t.w,e)?!1:(e.rot=!e.rot,!0)}addItem(e,t=1){const n=dt[e],s=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let r=0;r<t;r++){let o=!1;for(const[a,l,c]of s){for(let u=0;u<=this.h-l&&!o;u++)for(let h=0;h<=this.w-a&&!o;h++){let d=!0;for(let m=0;m<l&&d;m++)for(let _=0;_<a&&d;_++)this.occupied(h+_,u+m)&&(d=!1);d&&(this.slots.push(c?{itemId:e,count:1,x:h,y:u,rot:!0}:{itemId:e,count:1,x:h,y:u}),o=!0)}if(o)break}if(!o)return t-r}return 0}removeItem(e,t=1){let n=0;for(let s=this.slots.length-1;s>=0&&n<t;s--){const r=this.slots[s];if(r.itemId!==e)continue;const o=Math.min(r.count,t-n);r.count-=o,n+=o,r.count===0&&this.slots.splice(s,1)}return n}countOf(e){let t=0;for(const n of this.slots)n.itemId===e&&(t+=n.count);return t}has(e,t=1){return this.countOf(e)>=t}selected=0;selectedSlot(){return this.slots[this.selected]??null}cycle(e){if(this.slots.length===0){this.selected=0;return}this.selected=((this.selected+e)%this.slots.length+this.slots.length)%this.slots.length}}const Kg=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0}],Zg=[{in:"sand",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"}];function Cc(i,e){return Object.entries(e.needs).every(([t,n])=>i.has(t,n))}function jg(i,e){if(!Cc(i,e))return null;for(const[t,n]of Object.entries(e.needs))i.removeItem(t,n);return i.addItem(e.out,e.count)}const Ss=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"day4",kind:"day",title:"Day Walker",desc:"Survive until the dawn of day 4.",goal:1,reward:{item:"catalyst",n:1}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"canister_full",n:2}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it within reach of a Save Beacon.",goal:1}];function Jg(){return{i:0,p:Ss.map(()=>0)}}function Qg(i){const e=Jg();if(!i)return e;e.i=Math.max(0,Math.min(Ss.length,i.i|0));for(let t=0;t<e.p.length;t++){const n=Ss[t].goal;e.p[t]=Math.max(0,Math.min(n,(i.p&&i.p[t])|0))}return e}function fr(i){return i.i<Ss.length?Ss[i.i]:null}function e0(i,e,t=1){const n=fr(i);if(!n||n.kind!==e||i.p[i.i]>=n.goal||(i.p[i.i]=Math.min(n.goal,i.p[i.i]+t),i.p[i.i]<n.goal))return null;const s=n;return i.i++,s}const Pc="sotf:index",Lc="sotf:settings",Dc="sotf:best",kl={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1};function t0(){try{return{...kl,...JSON.parse(localStorage.getItem(Lc)||"{}")}}catch{return{...kl}}}function n0(i){localStorage.setItem(Lc,JSON.stringify(i))}function ys(){return Number(localStorage.getItem(Dc)||0)}function zl(i){i>ys()&&localStorage.setItem(Dc,String(i))}function br(){try{return JSON.parse(localStorage.getItem(Pc)||"[]")}catch{return[]}}function xa(i){localStorage.setItem(Pc,JSON.stringify(i))}function Ic(i,e){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:i||e||"world",seedStr:e,updated:Date.now()},s=br();return s.unshift(n),xa(s),n}function i0(i){xa(br().filter(e=>e.id!==i)),localStorage.removeItem("sotf:w:"+i)}function Uc(i,e){try{localStorage.setItem("sotf:w:"+i.id,JSON.stringify(e));const t=br(),n=t.find(s=>s.id===i.id);return n&&(n.updated=Date.now(),xa(t)),!0}catch{return!1}}function Nc(i){try{const e=localStorage.getItem("sotf:w:"+i);return e?JSON.parse(e):null}catch{return null}}function Fc(i,e){const t=new Blob([JSON.stringify({meta:i,run:e})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=`${i.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function s0(i){const e=JSON.parse(await i.text());if(!e||e.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const t=Ic(e.meta?.name??"imported",e.run.seedStr);return Uc(t,e.run),t}const gn=i=>document.getElementById(i);let Hl=0;function Xe(i){const e=gn("toast");e.textContent=i,e.style.opacity="1",clearTimeout(Hl),Hl=setTimeout(()=>e.style.opacity="0",2600)}function r0(i){const e=gn("prompt");if(!i){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=i}function o0(i){gn("vision-water").style.opacity=i?"1":"0"}function a0(){const i=document.querySelector("#bar-water .safe");i.style.left="25%",i.style.right="0%";const e=document.querySelector("#bar-heat .safe");e.style.left=((bc-ds)/(dr-ds)*100).toFixed(1)+"%",e.style.right=((dr-Tc)/(dr-ds)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none"}function Gl(i,e,t,n,s,r){const o=f=>document.querySelector(`#${f} .fill`);o("bar-health").style.width=i.health+"%",o("bar-water").style.width=i.water+"%";const a=(i.body-ds)/(dr-ds)*100;o("bar-heat").style.width=a+"%";const l=t%$t/$t,c=String(Math.floor(l*24)).padStart(2,"0"),u=String(Math.floor(l*24%1*60)).padStart(2,"0");gn("clock-day").textContent="Day "+n,gn("clock-time").textContent=c+":"+u;const h=f=>s==="C"?Math.round(f)+"°C":Math.round(f*9/5+32)+"°F";gn("clock-temp").textContent=`air ${h(i.lastAmbientEff)}  body ${h(i.body)}`;const d=e.selectedSlot();gn("held").textContent=d?dt[d.itemId].name:"—";const m=e.weight(),_=e.weightLimit(),g=gn("weight");g.textContent=`${m.toFixed(1)} / ${_} kg`,g.classList.toggle("encumbered",m>_),gn("vision-vignette").style.opacity=String(i.vision*.85);const p=i.water<5||i.health<30;gn("vision-red").style.opacity=p?String(.35+.25*Math.sin(r/220)):"0"}const os=i=>i===Dt||i===Rt,l0=.45;class lt{constructor(e,t,n,s,r){this.meta=e,this.settings=s,this.audio=r,this.seed=yg(e.seedStr||e.id),this.world=new Fg(this.seed),this.survival=new Vg(this.seed^7),this.quests=Qg(t?.quest),this.renderer=new qg(n),this.player=new zg(this.world),this.timeSec=t?.time??$t*.7,this.playSec=t?.playSec??0,t?this.restore(t):this.spawnStarterEntities(),this.world.get(-6,35,0)===tn&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===tn&&this.renderer.addPointLight(6,35,0,"lamp"),a0(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(s)}seed;world;survival;player;inv=new Bl;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];collected=new Set;running=!1;paused=!1;f1Paused=!1;escAt=0;ui=null;openCacheId=null;openStation=null;breaking=null;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((e,t)=>{if(!e.buried)return;const n=Math.round(En(this.seed,e.x,e.z));this.entities.push({id:this.entitySeq++,x:e.x+.5,y:n,z:e.z+.5,itemId:"canister_full",count:1,buried:e.buried,buriedAt:e.buried?[e.x,n,e.z]:void 0,srcIndex:t})}),this.spawnStarterChest()}spawnStarterChest(){const[e,t,n]=[3,31,0];this.world.get(e,t,n)===pt&&(this.world.set(e,t,n,Wt),this.chests.set(lt.chestKey([[e,t,n]]),[{itemId:"canister_full",count:1,x:0,y:0},{itemId:"canister_full",count:1,x:1,y:0},{itemId:"canister_full",count:1,x:2,y:0}]))}chestCluster(e,t,n){const s=new Set([`${e},${t},${n}`]),r=[[e,t,n]],o=[];for(;r.length;){const a=r.pop();o.push(a);for(const[l,c,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const h=a[0]+l,d=a[1]+c,m=a[2]+u,_=`${h},${d},${m}`;s.has(_)||this.world.get(h,d,m)!==Wt||(s.add(_),r.push([h,d,m]))}}return o}static chestKey(e){return[...e].sort((t,n)=>t[0]-n[0]||t[1]-n[1]||t[2]-n[2]).map(t=>t.join(",")).join(";")}static chestDims(e){return e<=3?[3*e,3]:[9,3+(e-3)]}static placeSlotFree(e,t){const n=dt[t.itemId],s=n.w===n.h?[!!t.rot]:[!!t.rot,!t.rot];for(const r of s){const o=r?n.h:n.w,a=r?n.w:n.h;for(let l=0;l+a<=e.h;l++)for(let c=0;c+o<=e.w;c++)if(e.fits(c,l,o,a))return t.x=c,t.y=l,t.rot=r||void 0,e.slots.push(t),!0}return!1}emptyChestGrid(e){const t=new Bl;t.slots=[];const[n,s]=lt.chestDims(e);return t.w=n,t.h=s,t.baseLimit=1e9,t}openChest(e,t,n){const s=this.chestCluster(e,t,n),r=lt.chestKey(s);this.chests.has(r)||this.chests.set(r,[]);const o=this.emptyChestGrid(s.length);o.slots=this.chests.get(r),this.chestInv=o,this.gridFocus="chest",this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(e,t,n,s){const r=this.chestCluster(e,t,n),o=this.emptyChestGrid(r.length);for(const a of s)lt.placeSlotFree(o,a)||this.dropEntity(a.itemId,a.count,2);o.slots.length&&this.chests.set(lt.chestKey(r),o.slots),r.length>1&&Xe(`Chests linked — one ${o.w}×${o.h} inventory.`)}cacheColor(e){return e.kind==="chest"?9071931:7035460}cacheMeshPos(e){return[e.x,e.y+(e.kind==="chest"?.36:.5),e.z]}restore(e){this.world.loadDeltas(e.deltas),this.player.pos.set(e.player.x,e.player.y,e.player.z),this.player.yaw=e.player.yaw,this.player.pitch=e.player.pitch,this.survival.health=e.survival.health,this.survival.water=e.survival.water,this.survival.body=e.survival.body,this.inv.slots=e.inventory.slots.map(o=>({...o}));const t=this.inv.slots.filter(o=>o.count>1);if(t.length){this.inv.slots=this.inv.slots.filter(o=>o.count===1);for(const o of t)this.giveOrDrop(o.itemId,o.count)}this.inv.selected=e.inventory.selected,e.inventory.w!==this.inv.w||e.inventory.h!==this.inv.h?(this.inv.w=e.inventory.w,this.inv.h=e.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=e.inventory.bonusLimit):this.inv.bonusLimit=e.inventory.bonusLimit,this.beaconMarks=e.beaconMarks??[],this.collected=new Set(e.collected??[]);const n=this.collected;let s=0;const r=[];this.world.gen.canisters.forEach(o=>{if(o.buried&&!n.has(s)){const a=Math.round(En(this.seed,o.x,o.z));r.push({id:this.entitySeq++,x:o.x+.5,y:a,z:o.z+.5,itemId:"canister_full",count:1,buried:o.buried,buriedAt:o.buried?[o.x,a,o.z]:void 0,srcIndex:s})}s++});for(const o of e.entities)r.push({id:this.entitySeq++,...o});this.entities=r;for(const o of e.caches){const a={id:this.entitySeq++,x:o.x,y:o.y,z:o.z,kind:o.kind??"death",items:o.items.map(l=>({...l}))};this.caches.push(a),a.items.length&&this.renderer.addEntityMesh(a.id,this.cacheMeshPos(a),this.cacheColor(a),.7)}this.campCharges=new Map(Object.entries(e.campfires??{}).map(([o,a])=>[o,a])),this.chests=new Map((e.chests??[]).map(o=>[o.cells,o.slots.map(a=>({...a}))])),this.pods=(e.pods??[]).map(o=>({...o})),this.won=!!e.won;for(const[o,a]of this.world.deltas){const[l,c]=o.split(",").map(Number);for(const[u,h]of a){if(h!==tn&&h!==hn)continue;const d=Math.floor(u/(Pe*It)),m=u%(Pe*It);this.renderer.addPointLight(l*Pe+d,m%It,c*Pe+Math.floor(m/It),h===tn?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(e=>({...e})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(e=>!e.buried).map(e=>({x:e.x,y:e.y,z:e.z,itemId:e.itemId,count:e.count})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(e=>({x:e.x,y:e.y,z:e.z,kind:e.kind,items:e.items.map(t=>({...t}))})),chests:[...this.chests].map(([e,t])=>({cells:e,slots:t.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(e){const t=Math.floor(this.timeSec/$t);this.timeSec=(t+e)*$t}saveNow(e=!1){if(this.isGuest)return e&&Xe("Guest worlds are never saved."),!1;const t=Uc(this.meta,this.snapshot());return e&&Xe(t?"Game saved.":"Storage full — use Export World."),t}exportWorld(){Fc(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const e=t=>{if(!this.running)return;this.raf=requestAnimationFrame(e);const n=Math.min(.1,(t-this.last)/1e3);this.last=t,this.frame(n,t)};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[e,t]of this.bound)removeEventListener(e,t);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(e){this.settings=e,this.renderer.renderDistance=e.renderDist,this.renderer.camera.fov=e.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(e.quality),this.audio.setVolume(e.volume),this.renderer.resetChunkMeshes();const t=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,t,n)}dayNumber(){return 1+Math.floor(this.timeSec/$t)}questBump(e,t=1){const n=e0(this.quests,e,t);if(!n){e==="mine"&&this.renderQuest();return}Xe(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&this.win(),this.renderQuest(),this.saveNow(!0)}crashPod(e,t){const n=this.player.pos;this.pods.push({x:Math.round(n.x)+2,z:Math.round(n.z)+1,t:3,itemId:e,n:t}),this.audio.warn(),setTimeout(()=>{this.running&&Xe("⚠ Crash pod inbound — look up.")},1200)}podFrame(e){for(let t=this.pods.length-1;t>=0;t--){const n=this.pods[t];if(n.t-=e,n.t>0)continue;const s=Math.round(En(this.seed,n.x,n.z));this.entities.push({id:this.entitySeq++,x:n.x+.5,y:s+10,z:n.z+.5,itemId:n.itemId,count:n.n,fall:10-l0}),this.pods.splice(t,1)}}questFrame(){const e=fr(this.quests);if(!e)return;const t=this.player.pos;if(e.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(e.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(t.x),Math.floor(t.z)))this.questBump("oasis");else if(e.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===nn&&(n.x+.5-t.x)**2+(n.y+1-t.y)**2+(n.z+.5-t.z)**2<25))this.questBump("water_home");else if(e.kind==="day"&&this.dayNumber()>=4)this.questBump("day");else if(e.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-t.x)**2+(n.z+.5-t.z)**2<169&&this.questBump("wreck")}}renderQuest(){const e=document.getElementById("quest");if(!e)return;const t=fr(this.quests);if(!t){this.questShown!=="done"&&(this.questShown="done",e.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],s=t.id+":"+n;s!==this.questShown&&(this.questShown=s,e.innerHTML=`<div class="q-title">Quest · ${t.title}${t.goal>1?` (${n}/${t.goal})`:""}</div><div class="q-desc">${t.desc}</div>`+(t.goal>1?`<div class="q-bar"><i style="width:${n/t.goal*100}%"></i></div>`:""))}attach(){const e=(n,s,r=window)=>{r.addEventListener(n,s),this.bound.set(n+(r===window?"":":el"),s)};e("keydown",n=>{const s=n;if(!s.repeat){if(this.keys.add(s.code),s.code==="KeyE"&&this.act(),s.code==="KeyQ"&&this.drink(),s.code==="KeyX"&&this.surge(),s.code==="KeyI"&&this.toggleInv(),s.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot();o&&!r.rotate(o)&&(Xe("No room to rotate."),this.audio.error())}this.renderInv()}if(s.code==="Escape"&&this.escape(),s.code.startsWith("Digit")){const r=Number(s.code.slice(5));r>=1&&r<=9&&this.inv.slots[r-1]&&(this.inv.selected=r-1,this.renderHeld())}}}),e("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge();const t=this.renderer.canvasEl();if(!this.mobile)e("click",()=>{!this.paused&&!this.ui&&t.requestPointerLock()},t),e("mousedown",n=>{const s=n;s.button===0?(this.mouseDown=!0,this.breakMsg=!1):s.button===2&&this.place()}),e("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),e("mousemove",n=>{if(document.pointerLockElement!==t||this.ui)return;const s=n;this.player.yaw-=s.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*s.movementY*.0022*this.settings.sens,this.player.pitch=qn.clamp(this.player.pitch,-1.55,1.55)}),e("wheel",n=>{this.inv.cycle(n.deltaY>0?1:-1),this.renderHeld()}),e("contextmenu",n=>n.preventDefault());else{let n=-1,s=0,r=0;t.addEventListener("touchstart",m=>{if(n<0){const _=m.changedTouches[0];n=_.identifier,s=_.clientX,r=_.clientY}m.preventDefault()}),t.addEventListener("touchmove",m=>{for(const _ of m.changedTouches)_.identifier===n&&(this.player.yaw-=(_.clientX-s)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(_.clientY-r)*.005*this.settings.sens,this.player.pitch=qn.clamp(this.player.pitch,-1.55,1.55),s=_.clientX,r=_.clientY);m.preventDefault()});const o=m=>{for(const _ of m.changedTouches)_.identifier===n&&(n=-1)};t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),document.addEventListener("contextmenu",m=>m.preventDefault());const a=document.getElementById("stick"),l=document.getElementById("knob");let c=-1;const u=m=>{const _=a.getBoundingClientRect();for(const g of m.changedTouches)if(g.identifier===c){const p=g.clientX-(_.left+_.width/2),f=g.clientY-(_.top+_.height/2),R=Math.max(1,Math.hypot(p,f)),w=Math.min(R,_.width/2)/(_.width/2);this.stick.x=p/R*w,this.stick.y=f/R*w,l.style.left=38+p/R*w*38+"px",l.style.top=38+f/R*w*38+"px"}};a.addEventListener("touchstart",m=>{c=m.changedTouches[0].identifier,u(m),m.preventDefault()}),a.addEventListener("touchmove",m=>{u(m),m.preventDefault()});const h=()=>{this.stick.x=0,this.stick.y=0,c=-1,l.style.left="38px",l.style.top="38px"};a.addEventListener("touchend",h),a.addEventListener("touchcancel",h);const d=(m,_,g)=>{const p=document.getElementById(m);p.addEventListener("touchstart",f=>{f.preventDefault(),_()}),p.addEventListener("touchend",f=>{f.preventDefault(),g&&g()}),p.addEventListener("touchcancel",()=>{g&&g()})};d("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),d("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),d("m-place",()=>this.place()),d("m-act",()=>this.act()),d("m-drink",()=>this.drink()),d("m-surge",()=>this.surge()),d("m-next",()=>{this.inv.cycle(1),this.renderHeld()}),d("m-inv",()=>this.toggleInv()),d("m-pause",()=>this.escape())}e("beforeunload",()=>this.saveNow()),e("pointerlockchange",()=>{!document.pointerLockElement&&this.running&&!this.paused&&!this.ui&&!this.f1Paused&&performance.now()-this.escAt>400&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),e("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui||this.f1Paused)return;const n=s=>!document.getElementById(s).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document)}escape(){if(this.escAt=performance.now(),this.ui){this.closeUI();return}const e=t=>document.getElementById(t).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win"))){if(!e("screen-instructions")){document.getElementById("screen-instructions").classList.add("hidden"),this.f1Paused?(this.paused=!1,this.f1Paused=!1,this.relock()):this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden"),this.relock());return}if(this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused&&document.pointerLockElement&&document.exitPointerLock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const e=this.renderer.canvasEl().requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&this.requestLock()}frame(e,t){if(this.paused){this.renderer.render();return}this.timeSec+=e,this.playSec+=e;const n=Math.floor(this.player.pos.x/16),s=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,s),this.renderer.rebuildDirty(this.world);const r=this.renderer.updateSky(this.timeSec,this.player.pos),o=ea(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),a=this.inv.weight()>this.inv.weightLimit();if(!this.ui){let h=this.stick.x,d=-this.stick.y;this.keys.has("KeyW")&&(d+=1),this.keys.has("KeyS")&&(d-=1),this.keys.has("KeyA")&&(h-=1),this.keys.has("KeyD")&&(h+=1);const m=this.keys.has("Space")||this.mobileJump;this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),this.player.update(e,h,d,m,this.speedMul,a),this.survival.update(e,this.world,this.player.pos,{sprinting:this.player.sprinting&&(h!==0||d!==0),overencumbered:a,biome:o,tSec:this.timeSec,sunElev:r.sunElev,inWater:this.player.inWater}),this.updateBreaking(e),this.updatePickups()}this.audio.heartbeat(e,this.survival.health);const l=this.renderer.camera;l.position.copy(this.player.eye()),l.rotation.order="YXZ",l.rotation.set(this.player.pitch,this.player.yaw,0);const c=this.raycastTarget();this.renderer.setHighlight(this.ui?null:c?.hit??null),r0(this.ui?null:this.promptFor(c)),o0(this.player.headUnder);for(const h of this.entities){if(h.fall!==void 0){const m=Math.min(h.fall,14*e);h.y-=m,h.fall-=m,h.fall<=.001&&(h.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(h.id,[h.x,h.y,h.z])}const d=this.renderer.entityMesh(h.id);h.buried&&h.buriedAt&&this.world.get(h.buriedAt[0],h.buriedAt[1],h.buriedAt[2])!==pt?d&&this.renderer.removeEntityMesh(h.id):d||this.renderer.addEntityMesh(h.id,[h.x,h.y,h.z],parseInt(dt[h.itemId].color.slice(1),16))}for(const h of this.caches)!this.renderer.entityMesh(h.id)&&h.items.length&&this.renderer.addEntityMesh(h.id,this.cacheMeshPos(h),this.cacheColor(h),.7);this.regulatorGlow();const u=this.survival.surgeCooldown>0;for(const h of["surge-btn","m-surge"]){const d=document.getElementById(h);d&&d.disabled!==u&&(d.disabled=u)}Gl(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,t),this.podFrame(e),this.questFrame(),this.autosaveAcc+=e,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow()),this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const e=this.player.eye(),t=new I;this.renderer.camera.getWorldDirection(t);let n=Math.floor(e.x),s=Math.floor(e.y),r=Math.floor(e.z);const o=new I(Math.sign(t.x),Math.sign(t.y),Math.sign(t.z)),a=new I(t.x!==0?Math.abs(1/t.x):1/0,t.y!==0?Math.abs(1/t.y):1/0,t.z!==0?Math.abs(1/t.z):1/0),l=(d,m)=>m>0?Math.ceil(d)-d:m<0?d-Math.floor(d):1/0,c=new I(l(e.x,o.x)*a.x,l(e.y,o.y)*a.y,l(e.z,o.z)*a.z);let u=new I(n,s,r),h=null;for(let d=0;d<80;d++){const m=this.world.get(n,s,r);if(m===fn&&!h)h={x:n,y:s,z:r};else if(m!==pt&&m!==fn)return{hit:{x:n,y:s,z:r},water:h,face:new I(u.x-n,u.y-s,u.z-r)};if(u.set(n,s,r),c.x<c.y&&c.x<c.z?(n+=o.x,c.x+=a.x):c.y<c.z?(s+=o.y,c.y+=a.y):(r+=o.z,c.z+=a.z),new I(n-e.x,s-e.y,r-e.z).length()>5.5)break}return{hit:null,water:h,face:new I(0,0,0)}}promptFor(e){if(!e)return null;if(e.hit&&this.world.get(e.hit.x,e.hit.y,e.hit.z)===Wt)return"E: Open Supply Chest";const t=this.nearestCache();if(t)return t.kind==="chest"?"E: Open supply chest":"E: Open death cache";if(e.hit){const n=this.world.get(e.hit.x,e.hit.y,e.hit.z);if(n===Dt||n===Rt)return"E: Open door";if(n===Et)return"E: Close door";if(n===nn)return"E: Save game (respawn point)";if(n===Kn)return"E: Craft";if(n===hn)return"E: Smelt"}return e.water?"E: Refill canister":null}nearestCache(){for(const e of this.caches)if(e.items.length&&this.player.pos.distanceTo(new I(e.x+.5,e.y+.5,e.z+.5))<2.4)return e;return null}canBreakWith(e){const t=Ji[e];if(t.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const n=this.inv.selectedSlot(),s=n?dt[n.itemId].tool:void 0;return t.tool!==null?!s||s.type!==t.tool?{ok:!1,time:0,why:`need a ${t.tool}`}:s.tier<t.minTier?{ok:!1,time:0,why:`need a tier ${t.minTier} ${t.tool}`}:{ok:!0,time:t.breakTime*Math.pow(.55,s.tier-1)}:{ok:!0,time:t.breakTime*(t.fastTool&&s&&s.type===t.fastTool?Math.pow(.55,s.tier):1)}}showBreakBar(e){const t=document.getElementById("breakbar");if(e===null){t.classList.add("hidden");return}t.classList.remove("hidden"),document.getElementById("breakfill").style.width=e*100+"%"}updateBreaking(e){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const t=this.raycastTarget();if(!t?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:n,y:s,z:r}=t.hit,o=this.world.get(n,s,r);if(!this.breaking||this.breaking.x!==n||this.breaking.y!==s||this.breaking.z!==r){const a=this.canBreakWith(o);if(!a.ok){a.why&&!this.breakMsg&&(this.breakMsg=!0,Xe(a.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${a.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:n,y:s,z:r,need:a.time,elapsed:0}}this.breaking.elapsed+=e,this.audioTickAcc+=e,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(n,s,r),this.breaking=null,this.showBreakBar(null))}breakBlock(e,t,n){const s=this.world.get(e,t,n);if(this.questBump("mine"),os(s)||s===Et){this.world.set(e,t,n,pt);for(const o of[-1,1]){const a=this.world.get(e,t+o,n);(os(a)||a===Et)&&this.world.set(e,t+o,n,pt)}this.giveOrDrop("door",1),this.audio.blockBreak();return}if(s===nn){this.world.set(e,t,n,pt),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===e&&o.y===t&&o.z===n)),Xe("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(s===hn&&this.campCharges.delete(`${e},${t},${n}`),s===Wt){const o=this.chestCluster(e,t,n),a=this.chests.get(lt.chestKey(o))??[];this.chests.delete(lt.chestKey(o)),this.world.set(e,t,n,pt);const l=o.filter(([h,d,m])=>h!==e||d!==t||m!==n),c=[];for(const h of l){const d=this.chestCluster(h[0],h[1],h[2]),m=lt.chestKey(d);c.some(([_])=>_===m)||c.push([m,this.emptyChestGrid(d.length)])}let u=!1;for(const h of a)c.some(([,d])=>lt.placeSlotFree(d,h))||(this.dropEntity(h.itemId,h.count,2),u=!0);for(const[h,d]of c)d.slots.length&&this.chests.set(h,d.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),u&&Xe("The remaining chests were full — some contents fell to the sand.");return}if(s===Zn){this.world.set(e,t,n,pt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}(s===tn||s===hn)&&this.renderer.removePointLight(e,t,n),this.world.set(e,t,n,pt);const r=this.blockItemId(s);r&&this.giveOrDrop(r,1),this.audio.blockBreak()}blockItemId(e){return{1:"sand",2:"sandstone",3:"rock",4:"gravel",5:"dirt",6:"salt",7:"deadwood",8:"glass",9:"insglass",10:"hull",11:"door",13:"lamp",14:"metal",16:"bench",17:"campfire",19:"adobe",21:"engine_core",22:"regulator"}[e]??null}giveOrDrop(e,t){const n=this.inv.addItem(e,t);n>0&&(this.dropEntity(e,n),Xe(`No room: dropped ${dt[e].name}`))}dropEntity(e,t,n=0){const s=this.player.pos,r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=(h,d)=>{const m=Math.floor(s.x+h),_=Math.floor(s.z+d);return!Ft(this.world.get(m,Math.floor(s.y),_))&&!Ft(this.world.get(m,Math.floor(s.y+1),_))},l=[[r*1.8,o*1.8],[-r*1.8,-o*1.8],[o*1.8,-r*1.8],[-o*1.8,r*1.8],[0,0]],[c,u]=l.find(([h,d])=>a(h,d))??[0,0];this.entities.push({id:this.entitySeq++,x:s.x+c,y:s.y+.35,z:s.z+u,itemId:e,count:t,repickAt:c===0&&u===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}place(){if(this.ui||this.paused)return;const e=this.inv.selectedSlot();if(!e)return;const t=dt[e.itemId];if(t.block===void 0){Xe("Not a placeable block"),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const s=n.hit.x+n.face.x,r=n.hit.y+n.face.y,o=n.hit.z+n.face.z;if(this.world.get(s,r,o)!==pt)return;if(Ft(t.block)){const l=this.player.pos;if(s+1>l.x-.3&&s<l.x+.3&&o+1>l.z-.3&&o<l.z+.3&&r+1>l.y&&r<l.y+1.8)return}let a=[];if(t.block===Wt){const l=new Set;for(const[c,u,h]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(s+c,r+u,o+h)!==Wt)continue;const d=lt.chestKey(this.chestCluster(s+c,r+u,o+h));l.has(d)||(l.add(d),a.push(...this.chests.get(d)??[]),this.chests.delete(d))}}if(this.world.set(s,r,o,t.block),t.block===Dt&&this.world.get(s,r+1,o)===pt&&this.world.set(s,r+1,o,Rt),t.block===Zn){const l=fr(this.quests);l&&l.kind==="finish"&&([...this.beaconMarks,{x:-4,y:31,z:-1}].some(u=>this.world.get(u.x,u.y,u.z)===nn&&(u.x+.5-s)**2+(u.z+.5-o)**2<100)?this.questBump("finish"):Xe("Too far from a Save Beacon — the relay needs the Core within 10 m."))}t.block===tn?this.renderer.addPointLight(s,r,o,"lamp"):t.block===hn&&this.renderer.addPointLight(s,r,o,"fire"),t.block===Wt&&this.linkChests(s,r,o,a),e.count-=1,e.count<=0&&this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}act(){if(this.ui||this.paused)return;const e=this.raycastTarget();if(e?.hit&&this.world.get(e.hit.x,e.hit.y,e.hit.z)===Wt){this.openChest(e.hit.x,e.hit.y,e.hit.z);return}const t=this.nearestCache();if(t){this.openCacheId=t.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(e){if(e.hit){const{x:n,y:s,z:r}=e.hit,o=this.world.get(n,s,r);if(os(o)||o===Et){if(o===Et){const a=this.player.pos;if(a.x>n-.2&&a.x<n+1.2&&a.z>r-.2&&a.z<r+1.2){Xe("Step out of the doorway first."),this.audio.error();return}this.world.get(n,s-1,r)===Et?(this.world.set(n,s,r,Rt),this.world.set(n,s-1,r,Dt)):this.world.get(n,s+1,r)===Et?(this.world.set(n,s,r,Dt),this.world.set(n,s+1,r,Rt)):this.world.set(n,s,r,os(this.world.get(n,s+1,r))?Rt:Dt)}else{const a=Ft(this.world.get(n-1,s,r))||Ft(this.world.get(n+1,s,r)),l=this.player.pos,c=a?l.z-(r+.5):l.x-(n+.5),u=n+","+r;Math.abs(c)>.35?this.world.doorSwing.set(u,c>0?-1:1):this.world.doorSwing.delete(u),this.world.set(n,s,r,Et);for(const h of[-1,1])os(this.world.get(n,s+h,r))&&this.world.set(n,s+h,r,Et)}this.audio.door();return}if(o===nn){this.beaconMarks.some(a=>a.x===n&&a.y===s&&a.z===r)||this.beaconMarks.push({x:n,y:s,z:r}),this.audio.savePing(),this.saveNow()?Xe("Saved. Death will respawn you at this beacon."):Xe("This world is not saved — the beacon only marks it.");return}if(o===Kn){this.openStation=[n,s,r],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(o===hn){this.openStation=[n,s,r],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}}e.water&&(this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),Xe(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):Xe("You need an empty Water Canister."))}}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){Xe("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const e=this.survival.body;this.survival.drink(),this.survival.body<e-.4&&Xe("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.renderHeld()}surge(){if(this.ui||this.paused)return;const e=this.survival.surge();if(e==="thirsty"){Xe("You need at least 20 water to sweat-surge."),this.audio.error();return}if(e==="cooling"){Xe("Your body is still cooling — wait a moment."),this.audio.error();return}Xe("You force yourself to sweat — evaporation cools your skin. (-15 water)"),this.audio.drink()}regulatorGlow(){const e=Math.floor(this.timeSec*2);if(e===this.regTick)return;this.regTick=e;const t=this.player.pos,n=Math.floor(t.x),s=Math.floor(t.y),r=Math.floor(t.z);let o=this.world.roomInfo(n,s,r);if(o.size===0)e:for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++)for(let h=-1;h<=1;h++){const d=this.world.roomInfo(n+c,s+u,r+h);if(d.size>0){o=d;break e}}const a=o.sealed&&o.regulators>0&&o.regulators*wc>=o.size,l=new Set(a?o.regCells:[]);for(const[c,u]of this.regGlow){if(l.has(c))continue;this.renderer.removeEntityMesh(u);const[h,d,m]=c.split(",").map(Number);this.renderer.removePointLight(h,d,m),this.regGlow.delete(c)}for(const c of l){if(this.regGlow.has(c))continue;const[u,h,d]=c.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new cr({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const m=this.entitySeq++,_=this.renderer.addEntityMesh(m,[u+.5,h+.5,d+.5],9427199,1.03);_.material=this.regGlowMat,this.renderer.addPointLight(u,h,d,"cool"),this.regGlow.set(c,m)}}updatePickups(){const e=this.player.pos;for(let t=this.entities.length-1;t>=0;t--){const n=this.entities[t];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==pt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}if(e.distanceTo(new I(n.x,n.y,n.z))<1.3){const s=this.inv.addItem(n.itemId,n.count);s===0?(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(t,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup()):n.count=s}}}}win(){this.won||(this.won=!0,zl(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`Main Quest complete. Survived ${this.scoreDays().toFixed(1)} days. Best: ${ys().toFixed(1)} days. The beacon relay is live — rescuers are on their way.`)}die(){this.caches.some(e=>Math.abs(e.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:this.inv.slots.map(e=>({itemId:e.itemId,count:e.count}))}),this.inv.slots=[],this.inv.selected=0,zl(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${ys().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/$t}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const e=[...this.beaconMarks].reverse().find(t=>this.world.get(t.x,t.y,t.z)===nn);e?this.player.pos.set(e.x+.5,e.y+1.01,e.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){Xe("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const e of["ui-inventory","ui-craft","ui-cache"])document.getElementById(e).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}renderHeld(){Gl(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now())}static CELL=64;static GAP=6;temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const e=document.getElementById("chest-section");this.chestInv?(e.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):e.classList.add("hidden");const t=document.getElementById("inv-temp");t.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const h=dt[this.temp.itemId];t.classList.add("filled"),t.style.background=h.color,t.textContent=h.name.split(" ")[0].slice(0,6),t.onmousedown=d=>this.startTempDrag(d),n.textContent=`Drop ${this.temp.count>1?this.temp.count+"× ":""}${h.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,this.temp.count,1),this.temp=null,this.audio.place(),this.renderInv())}}else t.classList.remove("filled"),t.style.background="",t.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);const s=document.getElementById("inv-side"),r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot(),a=this.temp??o,l=this.inv.weight()+(this.temp?dt[this.temp.itemId].mass*this.temp.count:0),c=this.inv.weightLimit(),u=a?Vn(a):null;if(s.textContent=a?`${dt[a.itemId].name} — ${dt[a.itemId].desc}`:"Click an item to inspect it; drag to move it.",s.textContent+=` Weight ${l.toFixed(1)} / ${c} kg`,a&&u&&u.w!==u.h){const h=document.createElement("button");h.textContent="Rotate",h.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:r.rotate(o)||(Xe("No room to rotate."),this.audio.error()),this.renderInv()},s.appendChild(h)}if(o&&o.itemId==="backpack1"){const h=document.createElement("button");h.textContent="Wear backpack",h.onclick=()=>{r.removeItem("backpack1",1),this.inv.setBackpack(4,5,20),Xe("Backpack I equipped: grid 4×5, +20 kg."),this.renderInv()},s.appendChild(h)}else if(o)if(r===this.chestInv){const h=document.createElement("button");h.textContent="Move to pack",h.onclick=()=>{const d=r.slots.indexOf(o);r.slots.splice(d,1),lt.placeSlotFree(this.inv,o)||(r.slots.splice(d,0,o),Xe("No room in your pack."),this.audio.error()),this.renderInv()},s.appendChild(h)}else{const h=document.createElement("button");h.textContent="Drop 1",h.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},s.appendChild(h)}}renderGrid(e,t){const n=lt.CELL;t.innerHTML="",t.style.gridTemplateColumns=`repeat(${e.w}, ${n}px)`;const s=(r,o)=>e.slots.find(a=>{const l=Vn(a);return r>=a.x&&r<a.x+l.w&&o>=a.y&&o<a.y+l.h});for(let r=0;r<e.h;r++)for(let o=0;o<e.w;o++){const a=document.createElement("div");a.className="invcell";const l=s(o,r);if(l){const c=dt[l.itemId];if(a.style.background=c.color,l.x===o&&l.y===r){const h=document.createElement("div");h.className="icon",h.textContent=c.name.split(" ")[0].slice(0,6),a.appendChild(h)}e.slots.indexOf(l)===e.selected&&a.classList.add("active"),a.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${c.name} — ${c.desc}`},a.onmousedown=h=>this.startInvDrag(h,l,e)}t.appendChild(a)}}startInvDrag(e,t,n){if(e.button!==0)return;e.preventDefault();const s=n.slots.indexOf(t);n.selected=s,n.slots.splice(s,1);const r=this.temp;this.temp=t,r&&(n.slots.push(r),n.move(r,t.x,t.y)||this.giveOrDrop(r.itemId,r.count));const o=lt.CELL+lt.GAP,a=Vn(t),l=document.createElement("div");l.className="inv-ghost",l.style.width=a.w*o-lt.GAP+"px",l.style.height=a.h*o-lt.GAP+"px",l.style.background=dt[t.itemId].color,document.body.appendChild(l);const c=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),u={gx:e.clientX-(c.left+t.x*o),gy:e.clientY-(c.top+t.y*o)},h=m=>{l.style.left=m.clientX-u.gx+"px",l.style.top=m.clientY-u.gy+"px"},d=m=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",d),l.remove();const _=Vn(t);let g=null,p=0,f=0;for(const[R,w]of this.gridsEls()){const b=R.getBoundingClientRect();if(p=Math.round((m.clientX-b.left-u.gx)/o),f=Math.round((m.clientY-b.top-u.gy)/o),p>=0&&f>=0&&p<=w.w-_.w&&f<=w.h-_.h){g=w;break}}g&&(g.slots.push(t),g.move(t,p,f)||g===n&&g.move(t,t.x,t.y)?(this.temp=null,this.audio.place()):g.slots.splice(g.slots.indexOf(t),1)),this.inv.selected=Math.min(this.inv.selected,this.inv.slots.length-1),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",h),window.addEventListener("mouseup",d),h(e)}gridsEls(){const e=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&e.push([document.getElementById("chest-grid"),this.chestInv]),e}startTempDrag(e){if(e.button!==0||!this.temp)return;e.preventDefault();const t=this.temp,n=lt.CELL+lt.GAP,s=Vn(t),r=document.createElement("div");r.className="inv-ghost",r.style.width=s.w*n-lt.GAP+"px",r.style.height=s.h*n-lt.GAP+"px",r.style.background=dt[t.itemId].color,document.body.appendChild(r);const o=l=>{r.style.left=l.clientX-s.w*n/2+"px",r.style.top=l.clientY-s.h*n/2+"px"},a=l=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a),r.remove();const c=(s.w*n-lt.GAP)/2,u=(s.h*n-lt.GAP)/2;let h=null,d=0,m=0;for(const[_,g]of this.gridsEls()){const p=_.getBoundingClientRect();if(d=Math.round((l.clientX-p.left-c)/n),m=Math.round((l.clientY-p.top-u)/n),d>=0&&m>=0&&d<=g.w-s.w&&m<=g.h-s.h){h=g;break}}h&&(h.slots.push(t),h.move(t,d,m)?(this.temp=null,this.audio.place(),h.selected=h.slots.indexOf(t),h===this.inv&&(this.inv.selected=h.selected)):(h.slots.splice(h.slots.indexOf(t),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),o(e)}renderCraft(e){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=e==="bench"?"Crafting Bench":"Campfire Smelting";const t=document.getElementById("craft-list");if(t.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",e!=="smelt"),e==="bench")for(const s of Kg){const r=document.createElement("div");r.className="craft-row";const o=`${dt[s.out].name}${s.count>1?" ×"+s.count:""}`,a=Object.entries(s.needs).map(([u,h])=>`${h}× ${dt[u].name}`).join(", "),l=Cc(this.inv,s);r.innerHTML=`<span>${o} <span class="needs">(${a})</span></span>`;const c=document.createElement("button");c.textContent="Craft",c.disabled=!l,c.onclick=()=>{const u=jg(this.inv,s);if(u===null){this.audio.error();return}u>0&&this.giveOrDrop(s.out,u),dt[s.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},r.appendChild(c),t.appendChild(r)}else{const s=this.openStation,r=`${s[0]},${s[1]},${s[2]}`,o=this.campCharges.get(r)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){Xe("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(r,o+3),this.renderCraft("smelt")};for(const a of Zg){const l=document.createElement("div");l.className="craft-row",l.innerHTML=`<span>${dt[a.in].name} → ${dt[a.out].name} <span class="needs">(1 fuel charge)</span></span>`;const c=document.createElement("button");c.textContent="Smelt",c.disabled=!this.inv.has(a.in,1)||o<1,c.onclick=()=>{this.inv.removeItem(a.in,1),this.campCharges.set(r,o-1);const u=this.inv.addItem(a.out,1);u>0&&this.giveOrDrop(a.out,u),this.audio.place(),this.renderCraft("smelt")},l.appendChild(c),t.appendChild(l)}}}renderCache(){const e=this.caches.find(s=>s.id===this.openCacheId);document.getElementById("cache-title").textContent=e?.kind==="chest"?"Supply Chest — take what you need":"Death Cache — take your belongings";const t=document.getElementById("cache-list");if(t.innerHTML="",!e||!e.items.length){this.closeUI();return}for(const s of e.items){const r=document.createElement("div");r.className="cache-item",r.textContent=`${s.count}× ${dt[s.itemId].name}`,t.appendChild(r)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let s=!0;for(;s;){s=!1;for(const r of e.items){const o=this.inv.addItem(r.itemId,r.count);o<r.count&&(s=!0,r.count=o),o===0&&e.items.splice(e.items.indexOf(r),1)}}e.items.length||this.renderer.removeEntityMesh(e.id),this.renderCache(),e.items.length||this.closeUI()},t.appendChild(n)}}class c0{ctx=null;windGain=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const e=this.ctx.sampleRate,t=this.ctx.createBuffer(1,e*4,e),n=t.getChannelData(0);let s=0,r=0;for(let u=0;u<n.length;u++){const h=Math.random()*2-1;s=.99*s+.01*h,r=.96*r+.04*h,n[u]=(s+r)*2}const o=this.ctx.createBufferSource();o.buffer=t,o.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const l=this.ctx.createOscillator();l.frequency.value=.13;const c=this.ctx.createGain();c.gain.value=140,l.connect(c).connect(a.frequency),l.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.12*this.volume,o.connect(a).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=e,this.windGain&&(this.windGain.gain.value=.12*e)}blip(e,t,n,s=.2,r=0){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(e,o),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,e+r),o+t),l.gain.setValueAtTime(s*this.volume,o),l.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(l).connect(this.ctx.destination),a.start(o),a.stop(o+t)}noiseHit(e,t,n=.25){if(!this.ctx)return;const s=this.ctx.currentTime,r=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(r*e)),r),a=o.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=(Math.random()*2-1)*(1-h/a.length);const l=this.ctx.createBufferSource();l.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=t;const u=this.ctx.createGain();u.gain.value=n*this.volume,l.connect(c).connect(u).connect(this.ctx.destination),l.start(s)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.blip(110,.25,"triangle",.3,-30)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((e,t)=>setTimeout(()=>this.blip(e,.28,"sine",.2,30),t*170))}heartbeat(e,t){t<=0||t>30||(this.heartTimer-=e,this.heartTimer<=0&&(this.heartTimer=.9+t/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const qe=i=>document.getElementById(i),Vl=i=>qe(i).value,Ot=(i,e=!0)=>qe(i).classList.toggle("hidden",!e),h0=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","ui-inventory","ui-craft","ui-cache"],Ma=()=>h0.forEach(i=>Ot(i,!1)),Mr=new c0;let _t=t0(),ke=null;document.addEventListener("click",()=>Mr.resume(),{once:!0});document.addEventListener("touchstart",()=>Mr.resume(),{once:!0});function Tr(){Ma(),Ot("screen-title"),qe("best-score").textContent=ys()>0?`Best run: ${ys().toFixed(1)} days`:"";const i=qe("worldlist");i.innerHTML="";const e=br();e.length||(i.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const t of e){const n=document.createElement("div");n.className="world-row";const s=Nc(t.id),r=document.createElement("span");r.textContent=`${t.name} — seed “${t.seedStr}” — ${s?`day ${s.days}, survived ${(s.playSec/$t).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>wr(t,s);const a=document.createElement("button");a.textContent="Export",a.onclick=()=>{s?Fc(t,s):Xe("Nothing saved for this world yet.")};const l=document.createElement("button");l.textContent="Delete",l.onclick=()=>{l.textContent==="Sure?"?(i0(t.id),Tr()):(l.textContent="Sure?",setTimeout(()=>l.textContent="Delete",2500))},n.append(r,o,a,l),i.appendChild(n)}}function wr(i,e){Ma(),Ot("cheats",!1),qe("hud").classList.remove("hidden"),qe("btn-save").classList.toggle("hidden",i.id.startsWith("guest")),qe("btn-exportworld").classList.toggle("hidden",i.id.startsWith("guest")),Mr.resume(),ke=new lt(i,e,qe("game-wrap"),_t,Mr),globalThis.game=ke,ke.start()}function Sa(){ke&&(ke.saveNow(),ke.stop()),ke=null,delete globalThis.game,qe("hud").classList.add("hidden"),Tr()}function Oc(i){Ma(),Ot(i)}function Bc(){Ot("screen-settings",!1),Ot("screen-instructions",!1),ke?(Ot("ui-inventory",!1),Ot("ui-craft",!1),Ot("ui-cache",!1),Ot("screen-pause",!1),ke.paused=!1,ke.f1Paused=!1,ke.relock()):Tr()}function ya(){Oc("screen-settings");const i=qe("settings-body");i.innerHTML="";const e=(t,n,s,r)=>{const o=document.createElement("div");o.className="setting";const a=document.createElement("span");a.textContent=t;const l=document.createElement("div");l.className="seg";const c=[];for(const[u,h]of n){const d=document.createElement("button");d.type="button",d.textContent=u,String(h)===String(s)&&d.classList.add("on"),d.onclick=()=>{for(const m of c)m.classList.remove("on");d.classList.add("on"),r(h)},c.push(d),l.appendChild(d)}o.append(a,l),i.appendChild(o)};if(e("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],_t.sens,t=>{_t.sens=t,Dn()}),e("Invert Y",[["Off",!1],["On",!0]],_t.invertY,t=>{_t.invertY=t,Dn()}),e("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],_t.volume,t=>{_t.volume=t,Dn()}),e("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],_t.fov,t=>{_t.fov=t,Dn()}),e("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],_t.renderDist,t=>{_t.renderDist=t,Dn()}),e("Quality",[["Low","low"],["Medium","med"],["High","high"]],_t.quality,t=>{_t.quality=t,Dn()}),e("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],_t.units,t=>{_t.units=t,Dn()}),document.fullscreenEnabled)e("Fullscreen",[["Off",!1],["On",!0]],_t.fullscreen,t=>{_t.fullscreen=t,Dn(),t?document.documentElement.requestFullscreen().catch(()=>{_t.fullscreen=!1,Dn(),ya()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const t=document.createElement("div");t.className="setting",t.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),i.appendChild(t)}}function Dn(){n0(_t),ke&&ke.applySettings(_t)}const u0=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block (right tool tier matters)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, oasis / water-station refill, death caches"],["Q","drink a full canister (+25 water)"],["I","inventory"],["1-9 / mouse wheel","select item"],["Esc","close open menu, or pause"],["F1","this screen"]],d0=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / ITEM / BAG","buttons on the right"]];function kc(){Oc("screen-instructions");const i=qe("instr-body");i.innerHTML="";const e=matchMedia("(pointer: coarse)").matches?d0:u0;for(const[n,s]of e){const r=document.createElement("div");r.innerHTML=`<b>${n}</b> — ${s}`,i.appendChild(r)}const t=document.createElement("div");t.className="needs",t.textContent="Keep the three bars inside their white safe bands. The Ship Interior is always sealed: your body heat drifts back to 36.6 °C there. Outside, midday cooks you and night freezes you — shade, walls and doors change what you are exposed to. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points.",i.appendChild(t)}qe("btn-create").onclick=()=>{const i=Vl("seed-input").trim()||Math.random().toString(36).slice(2,10),e=Vl("world-name").trim()||i,t=Ic(e,i);wr(t,null)};qe("btn-guest").onclick=()=>{const i=Math.random().toString(36).slice(2,10);wr({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:i,updated:Date.now()},null)};qe("btn-import").onclick=()=>qe("import-file").click();qe("import-file").onchange=async()=>{const i=qe("import-file").files?.[0];if(i)try{const e=await s0(i);Xe("World imported."),wr(e,Nc(e.id))}catch(e){Xe(`Import failed: ${e.message}`)}};qe("btn-settings").onclick=ya;qe("btn-pause-settings").onclick=ya;qe("btn-instructions").onclick=kc;for(const i of document.querySelectorAll(".close-btn"))i.onclick=()=>{ke&&ke.closeUI(),(!ke||!(ke.ui==="inv"&&ke.temp))&&Bc()};qe("btn-resume").onclick=()=>{ke&&(ke.paused=!1,Ot("screen-pause",!1),Ot("cheats",!1),ke.relock())};qe("btn-save").onclick=()=>Xe("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");qe("btn-exportworld").onclick=()=>{ke&&ke.exportWorld()};qe("btn-quit").onclick=()=>Sa();qe("btn-cheats").onclick=()=>Ot("cheats",qe("cheats").classList.contains("hidden"));for(const i of Array.from(qe("cheats").querySelectorAll("button")))i.onclick=()=>{if(!ke)return;if(i.dataset.speed!==void 0){ke.speedMul=Number(i.dataset.speed),Xe(`Player speed ×${i.dataset.speed}.`);return}if(i.dataset.immortal!==void 0){ke.survival.invincible=i.dataset.immortal==="1",Xe(`Immortality ${ke.survival.invincible?"on":"off"}.`);return}const e=Number(i.dataset.frac);ke.setClock(e),Xe(`Clock set to ${i.textContent}.`)};qe("btn-respawn").onclick=()=>{ke&&ke.respawn()};qe("btn-death-title").onclick=()=>Sa();qe("btn-win-continue").onclick=()=>{ke&&(ke.paused=!1,Ot("screen-win",!1),ke.relock())};qe("btn-win-title").onclick=()=>Sa();document.addEventListener("keydown",i=>{if(i.code==="Escape"&&!qe("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}i.code==="F1"&&(i.preventDefault(),qe("screen-instructions").classList.contains("hidden")?(kc(),ke&&!ke.paused&&(ke.paused=!0,ke.f1Paused=!0),document.pointerLockElement&&document.exitPointerLock()):Bc())});Tr();
