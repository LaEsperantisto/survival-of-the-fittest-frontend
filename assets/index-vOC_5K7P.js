(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="180",Hh=0,_c=1,Gh=2,kl=1,Vh=2,zn=3,ri=0,Ke=1,Ue=2,ni=0,ji=1,vc=2,xc=3,Mc=4,Wh=5,xi=100,Xh=101,qh=102,Yh=103,$h=104,Kh=200,Zh=201,jh=202,Jh=203,Do=204,Uo=205,Qh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,ou=213,au=214,No=0,Fo=1,ko=2,es=3,Oo=4,Bo=5,zo=6,Ho=7,Da=0,cu=1,lu=2,ii=0,hu=1,uu=2,du=3,fu=4,pu=5,mu=6,gu=7,Ol=300,ns=301,is=302,Go=303,Vo=304,Fr=306,Wo=1e3,Ei=1001,Xo=1002,on=1003,_u=1004,Ws=1005,Cn=1006,$r=1007,bi=1008,Pn=1009,Bl=1010,zl=1011,Ts=1012,Ua=1013,Ai=1014,Gn=1015,Us=1016,Na=1017,Fa=1018,As=1020,Hl=35902,Gl=35899,Vl=1021,Wl=1022,En=1023,Rs=1026,Cs=1027,Xl=1028,ka=1029,ql=1030,Oa=1031,Ba=1033,yr=33776,Sr=33777,Er=33778,br=33779,qo=35840,Yo=35841,$o=35842,Ko=35843,Zo=36196,jo=37492,Jo=37496,Qo=37808,ta=37809,ea=37810,na=37811,ia=37812,sa=37813,ra=37814,oa=37815,aa=37816,ca=37817,la=37818,ha=37819,ua=37820,da=37821,fa=36492,pa=36494,ma=36495,ga=36283,_a=36284,va=36285,xa=36286,vu=3200,xu=3201,Yl=0,Mu=1,ei="",$e="srgb",ss="srgb-linear",Cr="linear",re="srgb",Di=7680,yc=519,yu=512,Su=513,Eu=514,$l=515,bu=516,wu=517,Tu=518,Au=519,Sc=35044,Ec="300 es",In=2e3,Ir=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const Ji=Math.PI/180,Is=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function za(i,t){return(i%t+t)%t}function Ru(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cu(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function Iu(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function Lu(i,t=1){return t-Math.abs(za(i,t*2)-t)}function Pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Du(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Uu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nu(i,t){return i+Math.random()*(t-i)}function Fu(i){return i*(.5-Math.random())}function ku(i){i!==void 0&&(bc=i);let t=bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ou(i){return i*Ji}function Bu(i){return i*Is}function zu(i){return(i&i-1)===0&&i!==0}function Hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),d=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*d,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*d,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*d,a*l);break;case"XZX":i.set(a*d,c*m,c*u,a*l);break;case"YXY":i.set(c*u,a*d,c*m,a*l);break;case"ZYZ":i.set(c*m,c*u,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const si={DEG2RAD:Ji,RAD2DEG:Is,generateUUID:cs,clamp:qt,euclideanModulo:za,mapLinear:Ru,inverseLerp:Cu,lerp:ws,damp:Iu,pingpong:Lu,smoothstep:Pu,smootherstep:Du,randInt:Uu,randFloat:Nu,randFloatSpread:Fu,seededRandom:ku,degToRad:Ou,radToDeg:Bu,isPowerOfTwo:zu,ceilPowerOfTwo:Hu,floorPowerOfTwo:Gu,setQuaternionFromProperEuler:Vu,normalize:Oe,denormalize:Ki};class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ns{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3];const f=r[o+0],u=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=m,t[e+3]=x;return}if(h!==x||c!==f||l!==u||d!==m){let g=1-a;const p=c*f+l*u+d*m+h*x,T=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,p*T);g=Math.sin(g*A)/w,a=Math.sin(a*A)/w}const v=a*T;if(c=c*g+f*v,l=l*g+u*v,d=d*g+m*v,h=h*g+x*v,g===1-a){const w=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=w,l*=w,d*=w,h*=w}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+d*h+c*u-l*f,t[e+1]=c*m+d*f+l*h-a*u,t[e+2]=l*m+d*u+a*f-c*h,t[e+3]=d*m-a*h-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),h=a(r/2),f=c(n/2),u=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*d*h+l*u*m,this._y=l*u*h-f*d*m,this._z=l*d*m+f*u*h,this._w=l*d*h-f*u*m;break;case"YXZ":this._x=f*d*h+l*u*m,this._y=l*u*h-f*d*m,this._z=l*d*m-f*u*h,this._w=l*d*h+f*u*m;break;case"ZXY":this._x=f*d*h-l*u*m,this._y=l*u*h+f*d*m,this._z=l*d*m+f*u*h,this._w=l*d*h-f*u*m;break;case"ZYX":this._x=f*d*h-l*u*m,this._y=l*u*h+f*d*m,this._z=l*d*m-f*u*h,this._w=l*d*h+f*u*m;break;case"YZX":this._x=f*d*h+l*u*m,this._y=l*u*h+f*d*m,this._z=l*d*m-f*u*h,this._w=l*d*h-f*u*m;break;case"XZY":this._x=f*d*h-l*u*m,this._y=l*u*h-f*d*m,this._z=l*d*m+f*u*h,this._w=l*d*h+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],h=e[10],f=n+a+h;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>h){const u=2*Math.sqrt(1+n-a-h);this._w=(d-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-n-h);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+h-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-e)*d)/l,f=Math.sin(e*d)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),d=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*d,this.y=n+c*d+a*l-r*h,this.z=s+c*h+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new P,wc=new Ns;class Bt{constructor(t,e,n,s,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],u=n[5],m=n[8],x=s[0],g=s[3],p=s[6],T=s[1],_=s[4],v=s[7],w=s[2],A=s[5],R=s[8];return r[0]=o*x+a*T+c*w,r[3]=o*g+a*_+c*A,r[6]=o*p+a*v+c*R,r[1]=l*x+d*T+h*w,r[4]=l*g+d*_+h*A,r[7]=l*p+d*v+h*R,r[2]=f*x+u*T+m*w,r[5]=f*g+u*_+m*A,r[8]=f*p+u*v+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=d*o-a*l,f=a*c-d*r,u=l*r-o*c,m=e*h+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=h*x,t[1]=(s*l-d*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(d*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=u*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new Bt;function Kl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wu(){const i=Lr("canvas");return i.style.display="block",i}const Tc={};function Ls(i){i in Tc||(Tc[i]=!0,console.warn(i))}function Xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ac=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qu(){const i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:Cr,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const ne=qu();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Yu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=Lr("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $u=0;class Ha{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jr(s[o].image)):r.push(jr(s[o]))}else r=jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;const Jr=new P;class We extends as{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ei,s=Ei,r=Cn,o=bi,a=En,c=Pn,l=We.DEFAULT_ANISOTROPY,d=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=cs(),this.name="",this.source=new Ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Ol;We.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],d=c[4],h=c[8],f=c[1],u=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(u+1)/2,w=(p+1)/2,A=(d+f)/4,R=(h+x)/4,D=(m+g)/4;return _>v&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=D/r),this.set(n,s,r,e),this}let T=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(h-x)/T,this.z=(f-d)/T,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zu extends as{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new We(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ha(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zl extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ju extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),qs.subVectors(this.max,ds),Ni.subVectors(t.a,ds),Fi.subVectors(t.b,ds),ki.subVectors(t.c,ds),Kn.subVectors(Fi,Ni),Zn.subVectors(ki,Fi),hi.subVectors(Ni,ki);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!Qr(e,Ni,Fi,ki,qs)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,Ni,Fi,ki,qs))?!1:(Ys.crossVectors(Kn,Zn),e=[Ys.x,Ys.y,Ys.z],Qr(e,Ni,Fi,ki,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,Xs=new Fs,Ni=new P,Fi=new P,ki=new P,Kn=new P,Zn=new P,hi=new P,ds=new P,qs=new P,Ys=new P,ui=new P;function Qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),d=n.dot(ui);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Ju=new Fs,fs=new P,to=new P;class ks{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(to)),this.expandByPoint(fs.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fn=new P,eo=new P,$s=new P,jn=new P,no=new P,Ks=new P,io=new P;class Ga{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eo.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=jn.dot(this.direction),c=-jn.dot($s),l=jn.lengthSq(),d=Math.abs(1-o*o);let h,f,u,m;if(d>0)if(h=o*c-a,f=o*a-c,m=r*d,h>=0)if(f>=-m)if(f<=m){const x=1/d;h*=x,f*=x,u=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),u=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),u=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(eo).addScaledVector($s,f),u}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){no.subVectors(e,t),Ks.subVectors(n,t),io.crossVectors(no,Ks);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const c=a*this.direction.dot(Ks.crossVectors(jn,Ks));if(c<0)return null;const l=a*this.direction.dot(no.cross(jn));if(l<0||c+l>o)return null;const d=-a*jn.dot(io);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,r,o,a,c,l,d,h,f,u,m,x,g){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,d,h,f,u,m,x,g)}set(t,e,n,s,r,o,a,c,l,d,h,f,u,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=f,p[3]=u,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*d,u=o*h,m=a*d,x=a*h;e[0]=c*d,e[4]=-c*h,e[8]=l,e[1]=u+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+u*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*d,u=c*h,m=l*d,x=l*h;e[0]=f+x*a,e[4]=m*a-u,e[8]=o*l,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=u*a-m,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*d,u=c*h,m=l*d,x=l*h;e[0]=f-x*a,e[4]=-o*h,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*d,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*d,u=o*h,m=a*d,x=a*h;e[0]=c*d,e[4]=m*l-u,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=u*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,u=o*l,m=a*c,x=a*l;e[0]=c*d,e[4]=x-f*h,e[8]=m*h+u,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=u*h+m,e[10]=f-x*h}else if(t.order==="XZY"){const f=o*c,u=o*l,m=a*c,x=a*l;e[0]=c*d,e[4]=-h,e[8]=l*d,e[1]=f*h+x,e[5]=o*d,e[9]=u*h-m,e[2]=m*h-u,e[6]=a*d,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qu,t,td)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Jn.crossVectors(n,Je),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Jn.crossVectors(n,Je)),Jn.normalize(),Zs.crossVectors(Je,Jn),s[0]=Jn.x,s[4]=Zs.x,s[8]=Je.x,s[1]=Jn.y,s[5]=Zs.y,s[9]=Je.y,s[2]=Jn.z,s[6]=Zs.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],u=n[13],m=n[2],x=n[6],g=n[10],p=n[14],T=n[3],_=n[7],v=n[11],w=n[15],A=s[0],R=s[4],D=s[8],E=s[12],y=s[1],C=s[5],U=s[9],H=s[13],q=s[2],V=s[6],G=s[10],Y=s[14],O=s[3],it=s[7],at=s[11],ut=s[15];return r[0]=o*A+a*y+c*q+l*O,r[4]=o*R+a*C+c*V+l*it,r[8]=o*D+a*U+c*G+l*at,r[12]=o*E+a*H+c*Y+l*ut,r[1]=d*A+h*y+f*q+u*O,r[5]=d*R+h*C+f*V+u*it,r[9]=d*D+h*U+f*G+u*at,r[13]=d*E+h*H+f*Y+u*ut,r[2]=m*A+x*y+g*q+p*O,r[6]=m*R+x*C+g*V+p*it,r[10]=m*D+x*U+g*G+p*at,r[14]=m*E+x*H+g*Y+p*ut,r[3]=T*A+_*y+v*q+w*O,r[7]=T*R+_*C+v*V+w*it,r[11]=T*D+_*U+v*G+w*at,r[15]=T*E+_*H+v*Y+w*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],h=t[6],f=t[10],u=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*u-n*c*u)+x*(+e*c*u-e*l*f+r*o*f-s*o*u+s*l*d-r*c*d)+g*(+e*l*h-e*a*u-r*o*h+n*o*u+r*a*d-n*l*d)+p*(-s*a*d-e*c*h+e*a*f+s*o*h-n*o*f+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=t[9],f=t[10],u=t[11],m=t[12],x=t[13],g=t[14],p=t[15],T=h*g*l-x*f*l+x*c*u-a*g*u-h*c*p+a*f*p,_=m*f*l-d*g*l-m*c*u+o*g*u+d*c*p-o*f*p,v=d*x*l-m*h*l+m*a*u-o*x*u-d*a*p+o*h*p,w=m*h*c-d*x*c-m*a*f+o*x*f+d*a*g-o*h*g,A=e*T+n*_+s*v+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=T*R,t[1]=(x*f*r-h*g*r-x*s*u+n*g*u+h*s*p-n*f*p)*R,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*R,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*u-n*c*u)*R,t[4]=_*R,t[5]=(d*g*r-m*f*r+m*s*u-e*g*u-d*s*p+e*f*p)*R,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*R,t[7]=(o*f*r-d*c*r+d*s*l-e*f*l-o*s*u+e*c*u)*R,t[8]=v*R,t[9]=(m*h*r-d*x*r-m*n*u+e*x*u+d*n*p-e*h*p)*R,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*R,t[11]=(d*a*r-o*h*r-d*n*l+e*h*l+o*n*u-e*a*u)*R,t[12]=w*R,t[13]=(d*x*s-m*h*s+m*n*f-e*x*f-d*n*g+e*h*g)*R,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*g-e*a*g)*R,t[15]=(o*h*s-d*a*s+d*n*c-e*h*c-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,h=a+a,f=r*l,u=r*d,m=r*h,x=o*d,g=o*h,p=a*h,T=c*l,_=c*d,v=c*h,w=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*w,s[1]=(u+v)*w,s[2]=(m-_)*w,s[3]=0,s[4]=(u-v)*A,s[5]=(1-(f+p))*A,s[6]=(g+T)*A,s[7]=0,s[8]=(m+_)*R,s[9]=(g-T)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const l=1/r,d=1/o,h=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=d,gn.elements[5]*=d,gn.elements[6]*=d,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=In,c=!1){const l=this.elements,d=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===In)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ir)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=In,c=!1){const l=this.elements,d=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===In)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ir)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new P,gn=new pe,Qu=new P(0,0,0),td=new P(1,1,1),Jn=new P,Zs=new P,Je=new P,Cc=new pe,Ic=new Ns;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],h=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ed=0;const Lc=new P,Bi=new Ns,kn=new pe,js=new P,ps=new P,nd=new P,id=new Ns,Pc=new P(1,0,0),Dc=new P(0,1,0),Uc=new P(0,0,1),Nc={type:"added"},sd={type:"removed"},zi={type:"childadded",child:null},so={type:"childremoved",child:null};class be extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new P,e=new Dn,n=new Ns,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Bt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ps,js,this.up):kn.lookAt(js,ps,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(kn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sd),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),h=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new P(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,On=new P,ro=new P,Bn=new P,Hi=new P,Gi=new P,Fc=new P,oo=new P,ao=new P,co=new P,lo=new oe,ho=new oe,uo=new oe;class dn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),On.subVectors(n,e),ro.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(On),c=_n.dot(ro),l=On.dot(On),d=On.dot(ro),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,u=(l*c-a*d)*f,m=(o*d-a*c)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return lo.setScalar(0),ho.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lo,r.x),o.addScaledVector(ho,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),On.subVectors(t,e),_n.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),On.subVectors(this.a,this.b),_n.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Gi.subVectors(r,n),oo.subVectors(t,n);const c=Hi.dot(oo),l=Gi.dot(oo);if(c<=0&&l<=0)return e.copy(n);ao.subVectors(t,s);const d=Hi.dot(ao),h=Gi.dot(ao);if(d>=0&&h<=d)return e.copy(s);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Hi,o);co.subVectors(t,r);const u=Hi.dot(co),m=Gi.dot(co);if(m>=0&&u<=m)return e.copy(r);const x=u*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Gi,a);const g=d*m-u*h;if(g<=0&&h-d>=0&&u-m>=0)return Fc.subVectors(r,s),a=(h-d)/(h-d+(u-m)),e.copy(s).addScaledVector(Fc,a);const p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=za(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fo(o,r,t+1/3),this.g=fo(o,r,t),this.b=fo(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Jl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ne.workingToColorSpace(De.copy(this),t),Math.round(qt(De.r*255,0,255))*65536+Math.round(qt(De.g*255,0,255))*256+Math.round(qt(De.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=$e){ne.workingToColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Js);const n=ws(Qn.h,Js.h,e),s=ws(Qn.s,Js.s,e),r=ws(Qn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Gt;Gt.NAMES=Jl;let rd=0;class Li extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=ji,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Uo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Uo&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mi extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new P,Qs=new Kt;let od=0;class Ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}}class Ql extends Ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class th extends Ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends Ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ad=0;const ln=new pe,po=new be,Vi=new P,Qe=new Fs,ms=new Fs,Re=new P;class Xe extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?th:Ql)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Qe.min,ms.min),Qe.expandByPoint(Re),Re.addVectors(Qe.max,ms.max),Qe.expandByPoint(Re)):(Qe.expandByPoint(ms.min),Qe.expandByPoint(ms.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Re.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(t,l),Re.add(Vi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new P,c[D]=new P;const l=new P,d=new P,h=new P,f=new Kt,u=new Kt,m=new Kt,x=new P,g=new P;function p(D,E,y){l.fromBufferAttribute(n,D),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),u.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),d.sub(l),h.sub(l),u.sub(f),m.sub(f);const C=1/(u.x*m.y-m.x*u.y);isFinite(C)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(h,-u.y).multiplyScalar(C),g.copy(h).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(C),a[D].add(x),a[E].add(x),a[y].add(x),c[D].add(g),c[E].add(g),c[y].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,E=T.length;D<E;++D){const y=T[D],C=y.start,U=y.count;for(let H=C,q=C+U;H<q;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const _=new P,v=new P,w=new P,A=new P;function R(D){w.fromBufferAttribute(s,D),A.copy(w);const E=a[D];_.copy(E),_.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(A,E);const C=v.dot(c[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,C)}for(let D=0,E=T.length;D<E;++D){const y=T[D],C=y.start,U=y.count;for(let H=C,q=C+U;H<q;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,d=new P,h=new P;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(d),c.add(d),l.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,h=a.normalized,f=new l.constructor(c.length*d);let u=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*d;for(let p=0;p<d;p++)f[m++]=l[u++]}return new Ln(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,h=l.length;d<h;d++){const f=l[d],u=t(f,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const u=l[h];d.push(u.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],h=r[l];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new pe,di=new Ga,tr=new ks,Oc=new P,er=new P,nr=new P,ir=new P,mo=new P,sr=new P,Bc=new P,rr=new P;class Ne extends be{constructor(t=new Xe,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],h=r[c];d!==0&&(mo.fromBufferAttribute(h,t),o?sr.addScaledVector(mo,d):sr.addScaledVector(mo.sub(e),d))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(tr.containsPoint(di.origin)===!1&&(di.intersectSphere(tr,Oc)===null||di.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),di.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],T=Math.max(g.start,u.start),_=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=T,w=_;v<w;v+=3){const A=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);s=or(this,p,t,n,l,d,h,A,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){const T=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=or(this,o,t,n,l,d,h,T,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],T=Math.max(g.start,u.start),_=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=T,w=_;v<w;v+=3){const A=v,R=v+1,D=v+2;s=or(this,p,t,n,l,d,h,A,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){const T=g,_=g+1,v=g+2;s=or(this,o,t,n,l,d,h,T,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function cd(i,t,e,n,s,r,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ri,a),c===null)return null;rr.copy(a),rr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(rr);return l<e.near||l>e.far?null:{distance:l,point:rr.clone(),object:i}}function or(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,er),i.getVertexPosition(c,nr),i.getVertexPosition(l,ir);const d=cd(i,t,e,n,er,nr,ir,Bc);if(d){const h=new P;dn.getBarycoord(Bc,er,nr,ir,h),s&&(d.uv=dn.getInterpolatedAttribute(s,a,c,l,h,new Kt)),r&&(d.uv1=dn.getInterpolatedAttribute(r,a,c,l,h,new Kt)),o&&(d.normal=dn.getInterpolatedAttribute(o,a,c,l,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};dn.getNormal(er,nr,ir,f.normal),d.face=f,d.barycoord=h}return d}class oi extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],h=[];let f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(h,2));function m(x,g,p,T,_,v,w,A,R,D,E){const y=v/R,C=w/D,U=v/2,H=w/2,q=A/2,V=R+1,G=D+1;let Y=0,O=0;const it=new P;for(let at=0;at<G;at++){const ut=at*C-H;for(let At=0;At<V;At++){const Yt=At*y-U;it[x]=Yt*T,it[g]=ut*_,it[p]=q,l.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[p]=A>0?1:-1,d.push(it.x,it.y,it.z),h.push(At/R),h.push(1-at/D),Y+=1}}for(let at=0;at<D;at++)for(let ut=0;ut<R;ut++){const At=f+ut+V*at,Yt=f+ut+V*(at+1),te=f+(ut+1)+V*(at+1),$t=f+(ut+1)+V*at;c.push(At,Yt,$t),c.push(Yt,te,$t),O+=6}a.addGroup(u,O,E),u+=O,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const hd={clone:rs,merge:Be};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nh extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new P,zc=new Kt,Hc=new Kt;class nn extends nh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,zc,Hc),e.subVectors(Hc,zc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class fd extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new nn(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new nn(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new nn(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const c=new nn(Wi,Xi,t,e);c.layers=this.layers,this.add(c);const l=new nn(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ih extends We{constructor(t=[],e=ns,n,s,r,o,a,c,l,d){super(t,e,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pd extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ih(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oi(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ni});r.uniforms.tEquirect.value=e;const o=new Ne(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Cn),new fd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class fn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const md={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,m=.005;l.inputState.pinching&&f>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(md)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Va{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Va(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gd extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const _o=new P,_d=new P,vd=new Bt;class _i{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_o.subVectors(n,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vd.getNormalMatrix(t),s=this.coplanarPoint(_o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new ks,xd=new Kt(.5,.5),ar=new P;class Wa{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],h=r[5],f=r[6],u=r[7],m=r[8],x=r[9],g=r[10],p=r[11],T=r[12],_=r[13],v=r[14],w=r[15];if(s[0].setComponents(l-o,u-d,p-m,w-T).normalize(),s[1].setComponents(l+o,u+d,p+m,w+T).normalize(),s[2].setComponents(l+a,u+h,p+x,w+_).normalize(),s[3].setComponents(l-a,u-h,p-x,w-_).normalize(),n)s[4].setComponents(c,f,g,v).normalize(),s[5].setComponents(l-c,u-f,p-g,w-v).normalize();else if(s[4].setComponents(l-c,u-f,p-g,w-v).normalize(),e===In)s[5].setComponents(l+c,u+f,p+g,w+v).normalize();else if(e===Ir)s[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=xd.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sh extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pr=new P,Dr=new P,Gc=new pe,gs=new Ga,cr=new ks,vo=new P,Vc=new P;class Md extends be{constructor(t=new Xe,e=new sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pr.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Dr);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,t.ray.intersectsSphere(cr)===!1)return;Gc.copy(s).invert(),gs.copy(t.ray).applyMatrix4(Gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=u,g=m-1;x<g;x+=l){const p=d.getX(x),T=d.getX(x+1),_=lr(this,t,gs,c,p,T,x);_&&e.push(_)}if(this.isLineLoop){const x=d.getX(m-1),g=d.getX(u),p=lr(this,t,gs,c,x,g,m-1);p&&e.push(p)}}else{const u=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=u,g=m-1;x<g;x+=l){const p=lr(this,t,gs,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=lr(this,t,gs,c,m-1,u,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Pr.fromBufferAttribute(a,s),Dr.fromBufferAttribute(a,r),e.distanceSqToSegment(Pr,Dr,vo,Vc)>n)return;vo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(vo);if(!(l<t.near||l>t.far))return{distance:l,point:Vc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Wc=new P,Xc=new P;class yd extends Md{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Wc.fromBufferAttribute(e,s),Xc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wc.distanceTo(Xc);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rh extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qc=new pe,Ma=new Ga,hr=new ks,ur=new P;class Sd extends be{constructor(t=new Xe,e=new rh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;qc.copy(s).invert(),Ma.copy(t.ray).applyMatrix4(qc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let m=f,x=u;m<x;m++){const g=l.getX(m);ur.fromBufferAttribute(h,g),Yc(ur,g,c,s,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let m=f,x=u;m<x;m++)ur.fromBufferAttribute(h,m),Yc(ur,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yc(i,t,e,n,s,r,o){const a=Ma.distanceSqToPoint(i);if(a<e){const c=new P;Ma.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class oh extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ah extends We{constructor(t,e,n=Ai,s,r,o,a=on,c=on,l,d=Rs,h=1){if(d!==Rs&&d!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ha(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ch extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ur extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,d=new Kt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const u=n+h/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,c.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xa extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],f=[],u=[];let m=0;const x=[],g=n/2;let p=0;T(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(u,2));function T(){const v=new P,w=new P;let A=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const E=[],y=D/r,C=y*(e-t)+t;for(let U=0;U<=s;U++){const H=U/s,q=H*c+a,V=Math.sin(q),G=Math.cos(q);w.x=C*V,w.y=-y*n+g,w.z=C*G,h.push(w.x,w.y,w.z),v.set(V,R,G).normalize(),f.push(v.x,v.y,v.z),u.push(H,1-y),E.push(m++)}x.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const y=x[E][D],C=x[E+1][D],U=x[E+1][D+1],H=x[E][D+1];(t>0||E!==0)&&(d.push(y,C,H),A+=3),(e>0||E!==r-1)&&(d.push(C,U,H),A+=3)}l.addGroup(p,A,0),p+=A}function _(v){const w=m,A=new Kt,R=new P;let D=0;const E=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*y,0),f.push(0,y,0),u.push(.5,.5),m++;const C=m;for(let U=0;U<=s;U++){const q=U/s*c+a,V=Math.cos(q),G=Math.sin(q);R.x=E*G,R.y=g*y,R.z=E*V,h.push(R.x,R.y,R.z),f.push(0,y,0),A.x=V*.5+.5,A.y=G*.5*y+.5,u.push(A.x,A.y),m++}for(let U=0;U<s;U++){const H=w+U,q=C+U;v===!0?d.push(q,q+1,H):d.push(q+1,q,H),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const dr=new P,fr=new P,xo=new P,pr=new dn;class Ed extends Xe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ji*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],d=["a","b","c"],h=new Array(3),f={},u=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:x,b:g,c:p}=pr;if(x.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),pr.getNormal(xo),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const _=(T+1)%3,v=h[T],w=h[_],A=pr[d[T]],R=pr[d[_]],D=`${v}_${w}`,E=`${w}_${v}`;E in f&&f[E]?(xo.dot(f[E].normal)<=r&&(u.push(A.x,A.y,A.z),u.push(R.x,R.y,R.z)),f[E]=null):D in f||(f[D]={index0:l[T],index1:l[_],normal:xo.clone()})}}for(const m in f)if(f[m]){const{index0:x,index1:g}=f[m];dr.fromBufferAttribute(a,x),fr.fromBufferAttribute(a,g),u.push(dr.x,dr.y,dr.z),u.push(fr.x,fr.y,fr.z)}this.setAttribute("position",new _e(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class kr extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,h=t/a,f=e/c,u=[],m=[],x=[],g=[];for(let p=0;p<d;p++){const T=p*f-o;for(let _=0;_<l;_++){const v=_*h-r;m.push(v,-T,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const _=T+l*p,v=T+l*(p+1),w=T+1+l*(p+1),A=T+1+l*p;u.push(_,v,A),u.push(v,w,A)}this.setIndex(u),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}class qa extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],d=[];let h=t;const f=(e-t)/s,u=new P,m=new Kt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const p=r+g/n*o;u.x=h*Math.cos(p),u.y=h*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,d.push(m.x,m.y)}h+=f}for(let x=0;x<s;x++){const g=x*(n+1);for(let p=0;p<n;p++){const T=p+g,_=T,v=T+n+1,w=T+n+2,A=T+1;a.push(_,v,A),a.push(v,w,A)}}this.setIndex(a),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bn extends Li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bd extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wd extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ya extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Td extends Ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mo=new pe,$c=new P,Kc=new P;class lh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),Kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kc),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zc=new pe,_s=new P,yo=new P;class Ad extends lh{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),yo.copy(n.position),yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(yo),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,n.coordinateSystem,n.reversedDepth)}}class jc extends Ya{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ad}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hh extends nh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rd extends lh{constructor(){super(new hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cd extends Ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Rd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Id extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Jc(i,t,e,n){const s=Ld(n);switch(e){case Vl:return i*t;case Xl:return i*t/s.components*s.byteLength;case ka:return i*t/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case Oa:return i*t*2/s.components*s.byteLength;case Wl:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Ba:return i*t*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case qo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fa:case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ga:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case va:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ld(i){switch(i){case Pn:case Bl:return{byteLength:1,components:1};case Ts:case zl:case Us:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case Ai:case Ua:case Gn:return{byteLength:4,components:1};case Hl:case Gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,d);else{h.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<h.length;u++){const m=h[f],x=h[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let u=0,m=h.length;u<m;u++){const x=h[u];i.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
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
}`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,Df=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
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
}`,zp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,om=`#define TOON
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
}`,am=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Dd,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:kd,alphatest_pars_fragment:Od,aomap_fragment:Bd,aomap_pars_fragment:zd,batching_pars_vertex:Hd,batching_vertex:Gd,begin_vertex:Vd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:jd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Tf,envmap_vertex:gf,fog_vertex:_f,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:Mf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:bf,lights_pars_begin:wf,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:If,lights_physical_fragment:Lf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Df,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:zf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:$f,morphtarget_pars_vertex:Kf,morphtarget_vertex:Zf,normal_fragment_begin:jf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:_p,shadowmask_pars_fragment:vp,skinbase_vertex:xp,skinning_pars_vertex:Mp,skinning_vertex:yp,skinnormal_vertex:Sp,specularmap_fragment:Ep,specularmap_pars_fragment:bp,tonemapping_fragment:wp,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Ip,uv_vertex:Lp,worldpos_vertex:Pp,background_vert:Dp,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Fp,cube_vert:kp,cube_frag:Op,depth_vert:Bp,depth_frag:zp,distanceRGBA_vert:Hp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:Zp,meshmatcap_vert:jp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:om,points_vert:am,points_frag:cm,shadow_vert:lm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},An={basic:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Be([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Be([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Be([rt.points,rt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Be([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Be([rt.common,rt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Be([rt.sprite,rt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Be([rt.common,rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Be([rt.lights,rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};An.physical={uniforms:Be([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const mr={r:0,b:0,g:0},pi=new Dn,fm=new pe;function pm(i,t,e,n,s,r,o){const a=new Gt(0);let c=r===!0?0:1,l,d,h=null,f=0,u=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const w=m(_);w===null?p(a,c):w&&w.isColor&&(p(w,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){const w=m(v);w&&(w.isCubeTexture||w.mapping===Fr)?(d===void 0&&(d=new Ne(new oi(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:rs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),pi.copy(v.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(pi)),d.material.toneMapped=ne.getTransfer(w.colorSpace)!==re,(h!==w||f!==w.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,h=w,f=w.version,u=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ne(new kr(2,2),new ai({name:"BackgroundMaterial",uniforms:rs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ne.getTransfer(w.colorSpace)!==re,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,f=w.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(mr,eh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,v,o)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:g,dispose:T}}function mm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,C,U,H,q){let V=!1;const G=h(H,U,C);r!==G&&(r=G,l(r.object)),V=u(y,H,U,q),V&&m(y,H,U,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(y,C,U,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function h(y,C,U){const H=U.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let V=q[C.id];V===void 0&&(V={},q[C.id]=V);let G=V[H];return G===void 0&&(G=f(c()),V[H]=G),G}function f(y){const C=[],U=[],H=[];for(let q=0;q<e;q++)C[q]=0,U[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:H,object:y,attributes:{},index:null}}function u(y,C,U,H){const q=r.attributes,V=C.attributes;let G=0;const Y=U.getAttributes();for(const O in Y)if(Y[O].location>=0){const at=q[O];let ut=V[O];if(ut===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),at===void 0||at.attribute!==ut||ut&&at.data!==ut.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function m(y,C,U,H){const q={},V=C.attributes;let G=0;const Y=U.getAttributes();for(const O in Y)if(Y[O].location>=0){let at=V[O];at===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const ut={};ut.attribute=at,at&&at.data&&(ut.data=at.data),q[O]=ut,G++}r.attributes=q,r.attributesNum=G,r.index=H}function x(){const y=r.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function g(y){p(y,0)}function p(y,C){const U=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;U[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),q[y]!==C&&(i.vertexAttribDivisor(y,C),q[y]=C)}function T(){const y=r.newAttributes,C=r.enabledAttributes;for(let U=0,H=C.length;U<H;U++)C[U]!==y[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function _(y,C,U,H,q,V,G){G===!0?i.vertexAttribIPointer(y,C,U,q,V):i.vertexAttribPointer(y,C,U,H,q,V)}function v(y,C,U,H){x();const q=H.attributes,V=U.getAttributes(),G=C.defaultAttributeValues;for(const Y in V){const O=V[Y];if(O.location>=0){let it=q[Y];if(it===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){const at=it.normalized,ut=it.itemSize,At=t.get(it);if(At===void 0)continue;const Yt=At.buffer,te=At.type,$t=At.bytesPerElement,$=te===i.INT||te===i.UNSIGNED_INT||it.gpuType===Ua;if(it.isInterleavedBufferAttribute){const Z=it.data,ft=Z.stride,Dt=it.offset;if(Z.isInstancedInterleavedBuffer){for(let St=0;St<O.locationSize;St++)p(O.location+St,Z.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let St=0;St<O.locationSize;St++)g(O.location+St);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let St=0;St<O.locationSize;St++)_(O.location+St,ut/O.locationSize,te,at,ft*$t,(Dt+ut/O.locationSize*St)*$t,$)}else{if(it.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)p(O.location+Z,it.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Z=0;Z<O.locationSize;Z++)g(O.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Z=0;Z<O.locationSize;Z++)_(O.location+Z,ut/O.locationSize,te,at,ut*$t,ut/O.locationSize*Z*$t,$)}}else if(G!==void 0){const at=G[Y];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(O.location,at);break;case 3:i.vertexAttrib3fv(O.location,at);break;case 4:i.vertexAttrib4fv(O.location,at);break;default:i.vertexAttrib1fv(O.location,at)}}}}T()}function w(){D();for(const y in n){const C=n[y];for(const U in C){const H=C[U];for(const q in H)d(H[q].object),delete H[q];delete C[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const U in C){const H=C[U];for(const q in H)d(H[q].object),delete H[q];delete C[U]}delete n[y.id]}function R(y){for(const C in n){const U=n[C];if(U[y.id]===void 0)continue;const H=U[y.id];for(const q in H)d(H[q].object),delete H[q];delete U[y.id]}}function D(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function gm(i,t,e){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),e.update(d,n,h))}function a(l,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let u=0;for(let m=0;m<h;m++)u+=d[m];e.update(u,n,1)}function c(l,d,h,f){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<l.length;m++)o(l[m],d[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=d[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _m(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==En&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function vm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new _i,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const u=h.length!==0||f||n!==0||s;return s=f,n=h.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,u){const m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?d(null):l();else{const T=r?0:n,_=T*4;let v=p.clippingState||null;c.value=v,v=d(m,f,_,u);for(let w=0;w!==_;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,u,m){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=u+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=u;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(T,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function xm(i){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=ns:a===Vo&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Go||a===Vo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new pd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Zi=4,Qc=[.125,.215,.35,.446,.526,.582],yi=20,So=new hh,tl=new Gt;let Eo=null,bo=0,wo=0,To=!1;const vi=(1+Math.sqrt(5))/2,qi=1/vi,el=[new P(-vi,qi,0),new P(vi,qi,0),new P(-qi,0,vi),new P(qi,0,vi),new P(0,vi,-qi),new P(0,vi,qi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Mm=new P;class nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Mm}=r;Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,bo,wo),this._renderer.xr.enabled=To,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Us,format:En,colorSpace:ss,depthBuffer:!1},s=il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Sm(r,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s,r){const c=new nn(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(tl),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const x=new Mi({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new Ne(new oi,x);let p=!1;const T=t.background;T?T.isColor&&(x.color.copy(T),t.background=null,p=!0):(x.color.copy(tl),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[_],r.y,r.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[_]));const w=this._cubeSize;gr(s,v*w,_>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(g,c),h.render(t,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,So)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=el[(s-r-1)%el.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ne(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*yi-1),x=r/m,g=isFinite(r)?1+Math.floor(d*x):yi;g>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const p=[];let T=0;for(let R=0;R<yi;++R){const D=R/x,E=Math.exp(-D*D/2);p.push(E),R===0?T+=E:R<g&&(T+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const v=this._sizeLods[s],w=3*v*(s>_-Zi?s-_+Zi:0),A=4*(this._cubeSize-v);gr(e,w,A,3*v,2*v),c.setRenderTarget(e),c.render(h,So)}}function ym(i){const t=[],e=[],n=[];let s=i;const r=i-Zi+1+Qc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zi?c=Qc[o-i+Zi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],u=6,m=6,x=3,g=2,p=1,T=new Float32Array(x*m*u),_=new Float32Array(g*m*u),v=new Float32Array(p*m*u);for(let A=0;A<u;A++){const R=A%3*2/3-1,D=A>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];T.set(E,x*m*A),_.set(f,g*m*A);const y=[A,A,A,A,A,A];v.set(y,p*m*A)}const w=new Xe;w.setAttribute("position",new Ln(T,x)),w.setAttribute("uv",new Ln(_,g)),w.setAttribute("faceIndex",new Ln(v,p)),t.push(w),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function il(i,t,e){const n=new Ri(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sm(i,t,e){const n=new Float32Array(yi),s=new P(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function sl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function rl(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function Em(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Go||c===Vo,d=c===ns||c===is;if(l||d){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new nl(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const u=a.image;return l&&u&&u.height>0||d&&u&&s(u)?(e===null&&(e=new nl(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const u in f)t.update(f[u],i.ARRAY_BUFFER)}function l(h){const f=[],u=h.index,m=h.attributes.position;let x=0;if(u!==null){const T=u.array;x=u.version;for(let _=0,v=T.length;_<v;_+=3){const w=T[_+0],A=T[_+1],R=T[_+2];f.push(w,A,A,R,R,w)}}else if(m!==void 0){const T=m.array;x=m.version;for(let _=0,v=T.length/3-1;_<v;_+=3){const w=_+0,A=_+1,R=_+2;f.push(w,A,A,R,R,w)}}else return;const g=new(Kl(f)?th:Ql)(f,1);g.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function d(h){const f=r.get(h);if(f){const u=h.index;u!==null&&f.version<u.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function Tm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function l(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*o,m),e.update(u,n,m))}function d(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}function h(f,u,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,u[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,x,0,m);let p=0;for(let T=0;T<m;T++)p+=u[T]*x[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rm(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var u=y;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let w=a.attributes.position.count*v,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*A*4*h),D=new Zl(R,w,A,h);D.type=Gn,D.needsUpdate=!0;const E=v*4;for(let C=0;C<h;C++){const U=p[C],H=T[C],q=_[C],V=w*A*4*C;for(let G=0;G<U.count;G++){const Y=G*E;m===!0&&(s.fromBufferAttribute(U,G),R[V+Y+0]=s.x,R[V+Y+1]=s.y,R[V+Y+2]=s.z,R[V+Y+3]=0),x===!0&&(s.fromBufferAttribute(H,G),R[V+Y+4]=s.x,R[V+Y+5]=s.y,R[V+Y+6]=s.z,R[V+Y+7]=0),g===!0&&(s.fromBufferAttribute(q,G),R[V+Y+8]=s.x,R[V+Y+9]=s.y,R[V+Y+10]=s.z,R[V+Y+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new Kt(w,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const dh=new We,ol=new ah(1,1),fh=new Zl,ph=new ju,mh=new ih,al=[],cl=[],ll=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Or(i,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),Te(e,n)}}function Nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),Te(e,n)}}function Fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),Te(e,n)}}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=$l,r=ol):r=dh,e.setTexture2D(t||r,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ph,s)}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mh,s)}function $m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fh,s)}function Km(i){switch(i){case 5126:return Im;case 35664:return Lm;case 35665:return Pm;case 35666:return Dm;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return km;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}function Zm(i,t){i.uniform1fv(this.addr,t)}function jm(i,t){const e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function Jm(i,t){const e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function Qm(i,t){const e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function t0(i,t){const e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e0(i,t){const e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n0(i,t){const e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i0(i,t){i.uniform1iv(this.addr,t)}function s0(i,t){i.uniform2iv(this.addr,t)}function r0(i,t){i.uniform3iv(this.addr,t)}function o0(i,t){i.uniform4iv(this.addr,t)}function a0(i,t){i.uniform1uiv(this.addr,t)}function c0(i,t){i.uniform2uiv(this.addr,t)}function l0(i,t){i.uniform3uiv(this.addr,t)}function h0(i,t){i.uniform4uiv(this.addr,t)}function u0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||dh,r[o])}function d0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ph,r[o])}function f0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mh,r[o])}function p0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fh,r[o])}function m0(i){switch(i){case 5126:return Zm;case 35664:return jm;case 35665:return Jm;case 35666:return Qm;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return c0;case 36295:return l0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Km(e.type)}}class _0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}}class v0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function dl(i,t){i.seq.push(t),i.map[t.id]=t}function x0(i,t,e){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),o=Ao.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){dl(e,l===void 0?new g0(a,i,t):new _0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new v0(a),dl(e,h)),e=h}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);x0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function fl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const M0=37297;let y0=0;function S0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const pl=new Bt;function E0(i){ne._getMatrix(pl,ne.workingColorSpace,i);const t=`mat3( ${pl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ml(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+S0(i.getShaderSource(t),a)}else return r}function b0(i,t){const e=E0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(i,t){let e;switch(t){case hu:e="Linear";break;case uu:e="Reinhard";break;case du:e="Cineon";break;case fu:e="ACESFilmic";break;case mu:e="AgX";break;case gu:e="Neutral";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _r=new P;function T0(){ne.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),t=_r.y.toFixed(4),e=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function R0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ms(i){return i!==""}function gl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(I0,P0)}const L0=new Map;function P0(i,t){let e=Ht[t];if(e===void 0){const n=L0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(D0,U0)}function U0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function N0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function F0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function O0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case cu:t="ENVMAP_BLENDING_MIX";break;case lu:t="ENVMAP_BLENDING_ADD";break}return t}function B0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=N0(e),l=F0(e),d=k0(e),h=O0(e),f=B0(e),u=A0(e),m=R0(r),x=s.createProgram();let g,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ms).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(g=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ii?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),o=ya(o),o=gl(o,e),o=_l(o,e),a=ya(a),a=gl(a,e),a=_l(a,e),o=vl(o),a=vl(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=T+g+o,v=T+p+a,w=fl(s,s.VERTEX_SHADER,_),A=fl(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(A)||"",V=U.trim(),G=H.trim(),Y=q.trim();let O=!0,it=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const at=ml(s,w,"vertex"),ut=ml(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+at+`
`+ut)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||Y==="")&&(it=!1);it&&(C.diagnostics={runnable:O,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(w),s.deleteShader(A),D=new wr(s,x),E=C0(s,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,M0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let H0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V0(t),e.set(t,n)),n}}class V0{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}}function W0(i,t,e,n,s,r,o){const a=new jl,c=new G0,l=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,y,C,U,H){const q=U.fog,V=H.geometry,G=E.isMeshStandardMaterial?U.environment:null,Y=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),O=Y&&Y.mapping===Fr?Y.image.height:null,it=m[E.type];E.precision!==null&&(u=s.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=at!==void 0?at.length:0;let At=0;V.morphAttributes.position!==void 0&&(At=1),V.morphAttributes.normal!==void 0&&(At=2),V.morphAttributes.color!==void 0&&(At=3);let Yt,te,$t,$;if(it){const ie=An[it];Yt=ie.vertexShader,te=ie.fragmentShader}else Yt=E.vertexShader,te=E.fragmentShader,c.update(E),$t=c.getVertexShaderID(E),$=c.getFragmentShaderID(E);const Z=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Dt=H.isInstancedMesh===!0,St=H.isBatchedMesh===!0,Zt=!!E.map,Le=!!E.matcap,I=!!Y,ue=!!E.aoMap,kt=!!E.lightMap,Lt=!!E.bumpMap,gt=!!E.normalMap,de=!!E.displacementMap,_t=!!E.emissiveMap,zt=!!E.metalnessMap,Ae=!!E.roughnessMap,xe=E.anisotropy>0,b=E.clearcoat>0,M=E.dispersion>0,k=E.iridescence>0,X=E.sheen>0,j=E.transmission>0,W=xe&&!!E.anisotropyMap,yt=b&&!!E.clearcoatMap,nt=b&&!!E.clearcoatNormalMap,vt=b&&!!E.clearcoatRoughnessMap,xt=k&&!!E.iridescenceMap,tt=k&&!!E.iridescenceThicknessMap,lt=X&&!!E.sheenColorMap,It=X&&!!E.sheenRoughnessMap,Mt=!!E.specularMap,ot=!!E.specularColorMap,Ot=!!E.specularIntensityMap,L=j&&!!E.transmissionMap,et=j&&!!E.thicknessMap,st=!!E.gradientMap,dt=!!E.alphaMap,J=E.alphaTest>0,K=!!E.alphaHash,mt=!!E.extensions;let Nt=ii;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const le={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:te,defines:E.defines,customVertexShaderID:$t,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:St,batchingColor:St&&H._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&H.instanceColor!==null,instancingMorph:Dt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ss,alphaToCoverage:!!E.alphaToCoverage,map:Zt,matcap:Le,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:O,aoMap:ue,lightMap:kt,bumpMap:Lt,normalMap:gt,displacementMap:f&&de,emissiveMap:_t,normalMapObjectSpace:gt&&E.normalMapType===Mu,normalMapTangentSpace:gt&&E.normalMapType===Yl,metalnessMap:zt,roughnessMap:Ae,anisotropy:xe,anisotropyMap:W,clearcoat:b,clearcoatMap:yt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:M,iridescence:k,iridescenceMap:xt,iridescenceThicknessMap:tt,sheen:X,sheenColorMap:lt,sheenRoughnessMap:It,specularMap:Mt,specularColorMap:ot,specularIntensityMap:Ot,transmission:j,transmissionMap:L,thicknessMap:et,gradientMap:st,opaque:E.transparent===!1&&E.blending===ji&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:J,alphaHash:K,combine:E.combine,mapUv:Zt&&x(E.map.channel),aoMapUv:ue&&x(E.aoMap.channel),lightMapUv:kt&&x(E.lightMap.channel),bumpMapUv:Lt&&x(E.bumpMap.channel),normalMapUv:gt&&x(E.normalMap.channel),displacementMapUv:de&&x(E.displacementMap.channel),emissiveMapUv:_t&&x(E.emissiveMap.channel),metalnessMapUv:zt&&x(E.metalnessMap.channel),roughnessMapUv:Ae&&x(E.roughnessMap.channel),anisotropyMapUv:W&&x(E.anisotropyMap.channel),clearcoatMapUv:yt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:nt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(E.sheenRoughnessMap.channel),specularMapUv:Mt&&x(E.specularMap.channel),specularColorMapUv:ot&&x(E.specularColorMap.channel),specularIntensityMapUv:Ot&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:et&&x(E.thicknessMap.channel),alphaMapUv:dt&&x(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(gt||xe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(Zt||dt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:At,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Zt&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:_t&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ue,flipSided:E.side===Ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:mt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&E.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)y.push(C),y.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(T(y,E),_(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function T(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function _(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const y=m[E.type];let C;if(y){const U=An[y];C=hd.clone(U.uniforms)}else C=E.uniforms;return C}function w(E,y){let C;for(let U=0,H=d.length;U<H;U++){const q=d[U];if(q.cacheKey===y){C=q,++C.usedTimes;break}}return C===void 0&&(C=new z0(i,y,E,r),d.push(C)),C}function A(E){if(--E.usedTimes===0){const y=d.indexOf(E);d[y]=d[d.length-1],d.pop(),E.destroy()}}function R(E){c.remove(E)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:D}}function X0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ml(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,u,m,x,g){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:u,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=u,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),t++,p}function a(h,f,u,m,x,g){const p=o(h,f,u,m,x,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function c(h,f,u,m,x,g){const p=o(h,f,u,m,x,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||q0),n.length>1&&n.sort(f||Ml),s.length>1&&s.sort(f||Ml)}function d(){for(let h=t,f=i.length;h<f;h++){const u=i[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:d,sort:l}}function Y0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new yl,i.set(n,[o])):s>=r.length?(o=new yl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function K0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Z0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function J0(i){const t=new $0,e=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new pe,o=new pe;function a(l){let d=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,m=0,x=0,g=0,p=0,T=0,_=0,v=0,w=0,A=0,R=0;l.sort(j0);for(let E=0,y=l.length;E<y;E++){const C=l[E],U=C.color,H=C.intensity,q=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=U.r*H,h+=U.g*H,f+=U.b*H;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],H);R++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,O=e.get(C);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.directionalShadow[u]=O,n.directionalShadowMap[u]=V,n.directionalShadowMatrix[u]=C.shadow.matrix,T++}n.directional[u]=G,u++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(H),G.distance=q,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const Y=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,Y.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=Y.matrix,C.castShadow){const O=e.get(C);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=V,v++}x++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(U).multiplyScalar(H),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=G,g++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Y=C.shadow,O=e.get(C);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,O.shadowCameraNear=Y.camera.near,O.shadowCameraFar=Y.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=C.shadow.matrix,_++}n.point[m]=G,m++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(H),G.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==u||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==w||D.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=u,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=w,D.numLightProbes=R,n.version=Z0++)}function c(l,d){let h=0,f=0,u=0,m=0,x=0;const g=d.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const _=l[p];if(_.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(_.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Sl(i){const t=new J0(i),e=[],n=[];function s(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Q0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Sl(i),t.set(s,[a])):r>=o.length?(a=new Sl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
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
}`;function ng(i,t,e){let n=new Wa;const s=new Kt,r=new Kt,o=new oe,a=new bd({depthPacking:xu}),c=new wd,l={},d=e.maxTextureSize,h={[ri]:Ke,[Ke]:ri,[Ue]:Ue},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new Xe;m.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ne(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let p=this.type;this.render=function(A,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ni),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==zn&&this.type===zn,q=p===zn&&this.type!==zn;for(let V=0,G=A.length;V<G;V++){const Y=A[V],O=Y.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const it=O.getFrameExtents();if(s.multiply(it),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,O.mapSize.y=r.y)),O.map===null||H===!0||q===!0){const ut=this.type!==zn?{minFilter:on,magFilter:on}:{};O.map!==null&&O.map.dispose(),O.map=new Ri(s.x,s.y,ut),O.map.texture.name=Y.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const at=O.getViewportCount();for(let ut=0;ut<at;ut++){const At=O.getViewport(ut);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),U.viewport(o),O.updateMatrices(Y,ut),n=O.getFrustum(),v(R,D,O.camera,Y,this.type)}O.isPointLightShadow!==!0&&this.type===zn&&T(O,D),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,y,C)};function T(A,R){const D=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,D,u,x,null)}function _(A,R,D,E){let y=null;const C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=y.uuid,H=R.uuid;let q=l[U];q===void 0&&(q={},l[U]=q);let V=q[H];V===void 0&&(V=y.clone(),q[H]=V,R.addEventListener("dispose",w)),y=V}if(y.visible=R.visible,y.wireframe=R.wireframe,E===zn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=D}return y}function v(A,R,D,E,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const H=t.update(A),q=A.material;if(Array.isArray(q)){const V=H.groups;for(let G=0,Y=V.length;G<Y;G++){const O=V[G],it=q[O.materialIndex];if(it&&it.visible){const at=_(A,it,E,y);A.onBeforeShadow(i,A,R,D,H,at,O),i.renderBufferDirect(D,null,H,at,A,O),A.onAfterShadow(i,A,R,D,H,at,O)}}}else if(q.visible){const V=_(A,q,E,y);A.onBeforeShadow(i,A,R,D,H,V,null),i.renderBufferDirect(D,null,H,V,A,null),A.onAfterShadow(i,A,R,D,H,V,null)}}const U=A.children;for(let H=0,q=U.length;H<q;H++)v(U[H],R,D,E,y)}function w(A){A.target.removeEventListener("dispose",w);for(const D in l){const E=l[D],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const ig={[No]:Fo,[ko]:zo,[Oo]:Ho,[es]:Bo,[Fo]:No,[zo]:ko,[Ho]:Oo,[Bo]:es};function sg(i,t){function e(){let L=!1;const et=new oe;let st=null;const dt=new oe(0,0,0,0);return{setMask:function(J){st!==J&&!L&&(i.colorMask(J,J,J,J),st=J)},setLocked:function(J){L=J},setClear:function(J,K,mt,Nt,le){le===!0&&(J*=Nt,K*=Nt,mt*=Nt),et.set(J,K,mt,Nt),dt.equals(et)===!1&&(i.clearColor(J,K,mt,Nt),dt.copy(et))},reset:function(){L=!1,st=null,dt.set(-1,0,0,0)}}}function n(){let L=!1,et=!1,st=null,dt=null,J=null;return{setReversed:function(K){if(et!==K){const mt=t.get("EXT_clip_control");K?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),et=K;const Nt=J;J=null,this.setClear(Nt)}},getReversed:function(){return et},setTest:function(K){K?Z(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(K){st!==K&&!L&&(i.depthMask(K),st=K)},setFunc:function(K){if(et&&(K=ig[K]),dt!==K){switch(K){case No:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=K}},setLocked:function(K){L=K},setClear:function(K){J!==K&&(et&&(K=1-K),i.clearDepth(K),J=K)},reset:function(){L=!1,st=null,dt=null,J=null,et=!1}}}function s(){let L=!1,et=null,st=null,dt=null,J=null,K=null,mt=null,Nt=null,le=null;return{setTest:function(ie){L||(ie?Z(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(ie){et!==ie&&!L&&(i.stencilMask(ie),et=ie)},setFunc:function(ie,Un,wn){(st!==ie||dt!==Un||J!==wn)&&(i.stencilFunc(ie,Un,wn),st=ie,dt=Un,J=wn)},setOp:function(ie,Un,wn){(K!==ie||mt!==Un||Nt!==wn)&&(i.stencilOp(ie,Un,wn),K=ie,mt=Un,Nt=wn)},setLocked:function(ie){L=ie},setClear:function(ie){le!==ie&&(i.clearStencil(ie),le=ie)},reset:function(){L=!1,et=null,st=null,dt=null,J=null,K=null,mt=null,Nt=null,le=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,u=[],m=null,x=!1,g=null,p=null,T=null,_=null,v=null,w=null,A=null,R=new Gt(0,0,0),D=0,E=!1,y=null,C=null,U=null,H=null,q=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=Y>=2);let it=null,at={};const ut=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Yt=new oe().fromArray(ut),te=new oe().fromArray(At);function $t(L,et,st,dt){const J=new Uint8Array(4),K=i.createTexture();i.bindTexture(L,K),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<st;mt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(et+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return K}const $={};$[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(es),Lt(!1),gt(_c),Z(i.CULL_FACE),ue(ni);function Z(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function ft(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Dt(L,et){return h[L]!==et?(i.bindFramebuffer(L,et),h[L]=et,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=et),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=et),!0):!1}function St(L,et){let st=u,dt=!1;if(L){st=f.get(et),st===void 0&&(st=[],f.set(et,st));const J=L.textures;if(st.length!==J.length||st[0]!==i.COLOR_ATTACHMENT0){for(let K=0,mt=J.length;K<mt;K++)st[K]=i.COLOR_ATTACHMENT0+K;st.length=J.length,dt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,dt=!0);dt&&i.drawBuffers(st)}function Zt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const Le={[xi]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};Le[Yh]=i.MIN,Le[$h]=i.MAX;const I={[Kh]:i.ZERO,[Zh]:i.ONE,[jh]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[tu]:i.ONE_MINUS_DST_ALPHA,[su]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[au]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(L,et,st,dt,J,K,mt,Nt,le,ie){if(L===ni){x===!0&&(ft(i.BLEND),x=!1);return}if(x===!1&&(Z(i.BLEND),x=!0),L!==Wh){if(L!==g||ie!==E){if((p!==xi||v!==xi)&&(i.blendEquation(i.FUNC_ADD),p=xi,v=xi),ie)switch(L){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,_=null,w=null,A=null,R.set(0,0,0),D=0,g=L,E=ie}return}J=J||et,K=K||st,mt=mt||dt,(et!==p||J!==v)&&(i.blendEquationSeparate(Le[et],Le[J]),p=et,v=J),(st!==T||dt!==_||K!==w||mt!==A)&&(i.blendFuncSeparate(I[st],I[dt],I[K],I[mt]),T=st,_=dt,w=K,A=mt),(Nt.equals(R)===!1||le!==D)&&(i.blendColor(Nt.r,Nt.g,Nt.b,le),R.copy(Nt),D=le),g=L,E=!1}function kt(L,et){L.side===Ue?ft(i.CULL_FACE):Z(i.CULL_FACE);let st=L.side===Ke;et&&(st=!st),Lt(st),L.blending===ji&&L.transparent===!1?ue(ni):ue(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const dt=L.stencilWrite;a.setTest(dt),dt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function gt(L){L!==Hh?(Z(i.CULL_FACE),L!==C&&(L===_c?i.cullFace(i.BACK):L===Gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),C=L}function de(L){L!==U&&(G&&i.lineWidth(L),U=L)}function _t(L,et,st){L?(Z(i.POLYGON_OFFSET_FILL),(H!==et||q!==st)&&(i.polygonOffset(et,st),H=et,q=st)):ft(i.POLYGON_OFFSET_FILL)}function zt(L){L?Z(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function Ae(L){L===void 0&&(L=i.TEXTURE0+V-1),it!==L&&(i.activeTexture(L),it=L)}function xe(L,et,st){st===void 0&&(it===null?st=i.TEXTURE0+V-1:st=it);let dt=at[st];dt===void 0&&(dt={type:void 0,texture:void 0},at[st]=dt),(dt.type!==L||dt.texture!==et)&&(it!==st&&(i.activeTexture(st),it=st),i.bindTexture(L,et||$[L]),dt.type=L,dt.texture=et)}function b(){const L=at[it];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(L){Yt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Yt.copy(L))}function It(L){te.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),te.copy(L))}function Mt(L,et){let st=l.get(et);st===void 0&&(st=new WeakMap,l.set(et,st));let dt=st.get(L);dt===void 0&&(dt=i.getUniformBlockIndex(et,L.name),st.set(L,dt))}function ot(L,et){const dt=l.get(et).get(L);c.get(et)!==dt&&(i.uniformBlockBinding(et,dt,L.__bindingPointIndex),c.set(et,dt))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,at={},h={},f=new WeakMap,u=[],m=null,x=!1,g=null,p=null,T=null,_=null,v=null,w=null,A=null,R=new Gt(0,0,0),D=0,E=!1,y=null,C=null,U=null,H=null,q=null,Yt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ft,bindFramebuffer:Dt,drawBuffers:St,useProgram:Zt,setBlending:ue,setMaterial:kt,setFlipSided:Lt,setCullFace:gt,setLineWidth:de,setPolygonOffset:_t,setScissorTest:zt,activeTexture:Ae,bindTexture:xe,unbindTexture:b,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:xt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:ot,texStorage2D:nt,texStorage3D:vt,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:yt,scissor:lt,viewport:It,reset:Ot}}function rg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,d=new WeakMap;let h;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,M){return u?new OffscreenCanvas(b,M):Lr("canvas")}function x(b,M,k){let X=1;const j=xe(b);if((j.width>k||j.height>k)&&(X=k/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(X*j.width),yt=Math.floor(X*j.height);h===void 0&&(h=m(W,yt));const nt=M?m(W,yt):h;return nt.width=W,nt.height=yt,nt.getContext("2d").drawImage(b,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+yt+")."),nt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(b,M,k,X,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=M;if(M===i.RED&&(k===i.FLOAT&&(W=i.R32F),k===i.HALF_FLOAT&&(W=i.R16F),k===i.UNSIGNED_BYTE&&(W=i.R8)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.R8UI),k===i.UNSIGNED_SHORT&&(W=i.R16UI),k===i.UNSIGNED_INT&&(W=i.R32UI),k===i.BYTE&&(W=i.R8I),k===i.SHORT&&(W=i.R16I),k===i.INT&&(W=i.R32I)),M===i.RG&&(k===i.FLOAT&&(W=i.RG32F),k===i.HALF_FLOAT&&(W=i.RG16F),k===i.UNSIGNED_BYTE&&(W=i.RG8)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RG8UI),k===i.UNSIGNED_SHORT&&(W=i.RG16UI),k===i.UNSIGNED_INT&&(W=i.RG32UI),k===i.BYTE&&(W=i.RG8I),k===i.SHORT&&(W=i.RG16I),k===i.INT&&(W=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RGB8UI),k===i.UNSIGNED_SHORT&&(W=i.RGB16UI),k===i.UNSIGNED_INT&&(W=i.RGB32UI),k===i.BYTE&&(W=i.RGB8I),k===i.SHORT&&(W=i.RGB16I),k===i.INT&&(W=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),k===i.UNSIGNED_INT&&(W=i.RGBA32UI),k===i.BYTE&&(W=i.RGBA8I),k===i.SHORT&&(W=i.RGBA16I),k===i.INT&&(W=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),M===i.RGBA){const yt=j?Cr:ne.getTransfer(X);k===i.FLOAT&&(W=i.RGBA32F),k===i.HALF_FLOAT&&(W=i.RGBA16F),k===i.UNSIGNED_BYTE&&(W=yt===re?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(b,M){let k;return b?M===null||M===Ai||M===As?k=i.DEPTH24_STENCIL8:M===Gn?k=i.DEPTH32F_STENCIL8:M===Ts&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ai||M===As?k=i.DEPTH_COMPONENT24:M===Gn?k=i.DEPTH_COMPONENT32F:M===Ts&&(k=i.DEPTH_COMPONENT16),k}function w(b,M){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==on&&b.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){const M=b.target;M.removeEventListener("dispose",A),D(M),M.isVideoTexture&&d.delete(M)}function R(b){const M=b.target;M.removeEventListener("dispose",R),y(M)}function D(b){const M=n.get(b);if(M.__webglInit===void 0)return;const k=b.source,X=f.get(k);if(X){const j=X[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(b),Object.keys(X).length===0&&f.delete(k)}n.remove(b)}function E(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const k=b.source,X=f.get(k);delete X[M.__cacheKey],o.memory.textures--}function y(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let j=0;j<M.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[X][j]);else i.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)i.deleteFramebuffer(M.__webglFramebuffer[X]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=b.textures;for(let X=0,j=k.length;X<j;X++){const W=n.get(k[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(b)}let C=0;function U(){C=0}function H(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function q(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function V(b,M){const k=n.get(b);if(b.isVideoTexture&&zt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,b,M);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function G(b,M){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){$(k,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function Y(b,M){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){$(k,b,M);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function O(b,M){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Z(k,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}const it={[Wo]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},at={[on]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},ut={[yu]:i.NEVER,[Au]:i.ALWAYS,[Su]:i.LESS,[$l]:i.LEQUAL,[Eu]:i.EQUAL,[Tu]:i.GEQUAL,[bu]:i.GREATER,[wu]:i.NOTEQUAL};function At(b,M){if(M.type===Gn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===$r||M.magFilter===Ws||M.magFilter===bi||M.minFilter===Cn||M.minFilter===$r||M.minFilter===Ws||M.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,it[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,it[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,it[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,at[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==Ws&&M.minFilter!==bi||M.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Yt(b,M){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const X=M.source;let j=f.get(X);j===void 0&&(j={},f.set(X,j));const W=q(M);if(W!==b.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[W].usedTimes++;const yt=j[b.__cacheKey];yt!==void 0&&(j[b.__cacheKey].usedTimes--,yt.usedTimes===0&&E(M)),b.__cacheKey=W,b.__webglTexture=j[W].texture}return k}function te(b,M,k){return Math.floor(Math.floor(b/k)/M)}function $t(b,M,k,X){const W=b.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,X,M.data);else{W.sort((tt,lt)=>tt.start-lt.start);let yt=0;for(let tt=1;tt<W.length;tt++){const lt=W[yt],It=W[tt],Mt=lt.start+lt.count,ot=te(It.start,M.width,4),Ot=te(lt.start,M.width,4);It.start<=Mt+1&&ot===Ot&&te(It.start+It.count-1,M.width,4)===ot?lt.count=Math.max(lt.count,It.start+It.count-lt.start):(++yt,W[yt]=It)}W.length=yt+1;const nt=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),xt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let tt=0,lt=W.length;tt<lt;tt++){const It=W[tt],Mt=Math.floor(It.start/4),ot=Math.ceil(It.count/4),Ot=Mt%M.width,L=Math.floor(Mt/M.width),et=ot,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Ot,L,et,st,k,X,M.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,nt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function $(b,M,k){let X=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=i.TEXTURE_3D);const j=Yt(b,M),W=M.source;e.bindTexture(X,b.__webglTexture,i.TEXTURE0+k);const yt=n.get(W);if(W.version!==yt.__version||j===!0){e.activeTexture(i.TEXTURE0+k);const nt=ne.getPrimaries(ne.workingColorSpace),vt=M.colorSpace===ei?null:ne.getPrimaries(M.colorSpace),xt=M.colorSpace===ei||nt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let tt=x(M.image,!1,s.maxTextureSize);tt=Ae(M,tt);const lt=r.convert(M.format,M.colorSpace),It=r.convert(M.type);let Mt=_(M.internalFormat,lt,It,M.colorSpace,M.isVideoTexture);At(X,M);let ot;const Ot=M.mipmaps,L=M.isVideoTexture!==!0,et=yt.__version===void 0||j===!0,st=W.dataReady,dt=w(M,tt);if(M.isDepthTexture)Mt=v(M.format===Cs,M.type),et&&(L?e.texStorage2D(i.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,It,null));else if(M.isDataTexture)if(Ot.length>0){L&&et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,Ot[0].width,Ot[0].height);for(let J=0,K=Ot.length;J<K;J++)ot=Ot[J],L?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,lt,It,ot.data):e.texImage2D(i.TEXTURE_2D,J,Mt,ot.width,ot.height,0,lt,It,ot.data);M.generateMipmaps=!1}else L?(et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,tt.width,tt.height),st&&$t(M,tt,lt,It)):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,It,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,Ot[0].width,Ot[0].height,tt.depth);for(let J=0,K=Ot.length;J<K;J++)if(ot=Ot[J],M.format!==En)if(lt!==null)if(L){if(st)if(M.layerUpdates.size>0){const mt=Jc(ot.width,ot.height,M.format,M.type);for(const Nt of M.layerUpdates){const le=ot.data.subarray(Nt*mt/ot.data.BYTES_PER_ELEMENT,(Nt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Nt,ot.width,ot.height,1,lt,le)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,tt.depth,lt,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Mt,ot.width,ot.height,tt.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,tt.depth,lt,It,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Mt,ot.width,ot.height,tt.depth,0,lt,It,ot.data)}else{L&&et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,Ot[0].width,Ot[0].height);for(let J=0,K=Ot.length;J<K;J++)ot=Ot[J],M.format!==En?lt!==null?L?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,lt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Mt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,lt,It,ot.data):e.texImage2D(i.TEXTURE_2D,J,Mt,ot.width,ot.height,0,lt,It,ot.data)}else if(M.isDataArrayTexture)if(L){if(et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,tt.width,tt.height,tt.depth),st)if(M.layerUpdates.size>0){const J=Jc(tt.width,tt.height,M.format,M.type);for(const K of M.layerUpdates){const mt=tt.data.subarray(K*J/tt.data.BYTES_PER_ELEMENT,(K+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,lt,It,mt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,It,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,lt,It,tt.data);else if(M.isData3DTexture)L?(et&&e.texStorage3D(i.TEXTURE_3D,dt,Mt,tt.width,tt.height,tt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,It,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,lt,It,tt.data);else if(M.isFramebufferTexture){if(et)if(L)e.texStorage2D(i.TEXTURE_2D,dt,Mt,tt.width,tt.height);else{let J=tt.width,K=tt.height;for(let mt=0;mt<dt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Mt,J,K,0,lt,It,null),J>>=1,K>>=1}}else if(Ot.length>0){if(L&&et){const J=xe(Ot[0]);e.texStorage2D(i.TEXTURE_2D,dt,Mt,J.width,J.height)}for(let J=0,K=Ot.length;J<K;J++)ot=Ot[J],L?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,lt,It,ot):e.texImage2D(i.TEXTURE_2D,J,Mt,lt,It,ot);M.generateMipmaps=!1}else if(L){if(et){const J=xe(tt);e.texStorage2D(i.TEXTURE_2D,dt,Mt,J.width,J.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,It,tt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,lt,It,tt);g(M)&&p(X),yt.__version=W.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Z(b,M,k){if(M.image.length!==6)return;const X=Yt(b,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const W=n.get(j);if(j.version!==W.__version||X===!0){e.activeTexture(i.TEXTURE0+k);const yt=ne.getPrimaries(ne.workingColorSpace),nt=M.colorSpace===ei?null:ne.getPrimaries(M.colorSpace),vt=M.colorSpace===ei||yt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,lt=[];for(let K=0;K<6;K++)!xt&&!tt?lt[K]=x(M.image[K],!0,s.maxCubemapSize):lt[K]=tt?M.image[K].image:M.image[K],lt[K]=Ae(M,lt[K]);const It=lt[0],Mt=r.convert(M.format,M.colorSpace),ot=r.convert(M.type),Ot=_(M.internalFormat,Mt,ot,M.colorSpace),L=M.isVideoTexture!==!0,et=W.__version===void 0||X===!0,st=j.dataReady;let dt=w(M,It);At(i.TEXTURE_CUBE_MAP,M);let J;if(xt){L&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ot,It.width,It.height);for(let K=0;K<6;K++){J=lt[K].mipmaps;for(let mt=0;mt<J.length;mt++){const Nt=J[mt];M.format!==En?Mt!==null?L?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,Nt.width,Nt.height,Mt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Ot,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,Nt.width,Nt.height,Mt,ot,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Ot,Nt.width,Nt.height,0,Mt,ot,Nt.data)}}}else{if(J=M.mipmaps,L&&et){J.length>0&&dt++;const K=xe(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ot,K.width,K.height)}for(let K=0;K<6;K++)if(tt){L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,lt[K].width,lt[K].height,Mt,ot,lt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,lt[K].width,lt[K].height,0,Mt,ot,lt[K].data);for(let mt=0;mt<J.length;mt++){const le=J[mt].image[K].image;L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,le.width,le.height,Mt,ot,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Ot,le.width,le.height,0,Mt,ot,le.data)}}else{L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt,ot,lt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,Mt,ot,lt[K]);for(let mt=0;mt<J.length;mt++){const Nt=J[mt];L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Mt,ot,Nt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Ot,Mt,ot,Nt.image[K])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),W.__version=j.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ft(b,M,k,X,j,W){const yt=r.convert(k.format,k.colorSpace),nt=r.convert(k.type),vt=_(k.internalFormat,yt,nt,k.colorSpace),xt=n.get(M),tt=n.get(k);if(tt.__renderTarget=M,!xt.__hasExternalTextures){const lt=Math.max(1,M.width>>W),It=Math.max(1,M.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,vt,lt,It,M.depth,0,yt,nt,null):e.texImage2D(j,W,vt,lt,It,0,yt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),_t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,tt.__webglTexture,0,de(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,tt.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(b,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const X=M.depthTexture,j=X&&X.isDepthTexture?X.type:null,W=v(M.stencilBuffer,j),yt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=de(M);_t(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,W,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,W,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,W,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,b)}else{const X=M.textures;for(let j=0;j<X.length;j++){const W=X[j],yt=r.convert(W.format,W.colorSpace),nt=r.convert(W.type),vt=_(W.internalFormat,yt,nt,W.colorSpace),xt=de(M);k&&_t(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,vt,M.width,M.height):_t(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const j=X.__webglTexture,W=de(M);if(M.depthTexture.format===Rs)_t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===Cs)_t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Zt(b){const M=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=X}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const X=b.texture.mipmaps;X&&X.length>0?St(M.__webglFramebuffer[0],b):St(M.__webglFramebuffer,b)}else if(k){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=i.createRenderbuffer(),Dt(M.__webglDepthbuffer[X],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Dt(M.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(b,M,k){const X=n.get(b);M!==void 0&&ft(X.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Zt(b)}function I(b){const M=b.texture,k=n.get(b),X=n.get(M);b.addEventListener("dispose",R);const j=b.textures,W=b.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=M.version,o.memory.textures++),W){k.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[nt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)k.__webglFramebuffer[nt][vt]=i.createFramebuffer()}else k.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let nt=0;nt<M.mipmaps.length;nt++)k.__webglFramebuffer[nt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(yt)for(let nt=0,vt=j.length;nt<vt;nt++){const xt=n.get(j[nt]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&_t(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let nt=0;nt<j.length;nt++){const vt=j[nt];k.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[nt]);const xt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),lt=_(vt.internalFormat,xt,tt,vt.colorSpace,b.isXRRenderTarget===!0),It=de(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,lt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,k.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),At(i.TEXTURE_CUBE_MAP,M);for(let nt=0;nt<6;nt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ft(k.__webglFramebuffer[nt][vt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt);else ft(k.__webglFramebuffer[nt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);g(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let nt=0,vt=j.length;nt<vt;nt++){const xt=j[nt],tt=n.get(xt);let lt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),At(lt,xt),ft(k.__webglFramebuffer,b,xt,i.COLOR_ATTACHMENT0+nt,lt,0),g(xt)&&p(lt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(nt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,X.__webglTexture),At(nt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ft(k.__webglFramebuffer[vt],b,M,i.COLOR_ATTACHMENT0,nt,vt);else ft(k.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,nt,0);g(M)&&p(nt),e.unbindTexture()}b.depthBuffer&&Zt(b)}function ue(b){const M=b.textures;for(let k=0,X=M.length;k<X;k++){const j=M[k];if(g(j)){const W=T(b),yt=n.get(j).__webglTexture;e.bindTexture(W,yt),p(W),e.unbindTexture()}}}const kt=[],Lt=[];function gt(b){if(b.samples>0){if(_t(b)===!1){const M=b.textures,k=b.width,X=b.height;let j=i.COLOR_BUFFER_BIT;const W=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(b),nt=M.length>1;if(nt)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=b.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);const tt=n.get(M[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,j,i.NEAREST),c===!0&&(kt.length=0,Lt.length=0,kt.push(i.COLOR_ATTACHMENT0+xt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(kt.push(W),Lt.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);const tt=n.get(M[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function de(b){return Math.min(s.maxSamples,b.samples)}function _t(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function zt(b){const M=o.render.frame;d.get(b)!==M&&(d.set(b,M),b.update())}function Ae(b,M){const k=b.colorSpace,X=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==ss&&k!==ei&&(ne.getTransfer(k)===re?(X!==En||j!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=O,this.rebindTextures=Le,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=_t}function og(i,t){function e(n,s=ei){let r;const o=ne.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===zl)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===Vl)return i.ALPHA;if(n===Wl)return i.RGB;if(n===En)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===ql)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Er||n===br)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===$o||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===jo||n===Jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===jo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ra)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fa)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ga||n===_a||n===va||n===xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
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

}`;class lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ch(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ai({vertexShader:ag,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hg extends as{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,f=null,u=null,m=null;const x=typeof XRWebGLBinding<"u",g=new lg,p={},T=e.getContextAttributes();let _=null,v=null;const w=[],A=[],R=new Kt;let D=null;const E=new nn;E.viewport=new oe;const y=new nn;y.viewport=new oe;const C=[E,y],U=new Id;let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=w[$];return Z===void 0&&(Z=new go,w[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=w[$];return Z===void 0&&(Z=new go,w[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=w[$];return Z===void 0&&(Z=new go,w[$]=Z),Z.getHandSpace()};function V($){const Z=A.indexOf($.inputSource);if(Z===-1)return;const ft=w[Z];ft!==void 0&&(ft.update($.inputSource,$.frame,l||o),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<w.length;$++){const Z=A[$];Z!==null&&(A[$]=null,w[$].disconnect(Z))}H=null,q=null,g.reset();for(const $ in p)delete p[$];t.setRenderTarget(_),u=null,f=null,h=null,s=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Dt=null,St=null;T.depth&&(St=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=T.stencil?Cs:Rs,Dt=T.stencil?As:Ai);const Zt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ri(f.textureWidth,f.textureHeight,{format:En,type:Pn,depthTexture:new ah(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ft={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Ri(u.framebufferWidth,u.framebufferHeight,{format:En,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y($){for(let Z=0;Z<$.removed.length;Z++){const ft=$.removed[Z],Dt=A.indexOf(ft);Dt>=0&&(A[Dt]=null,w[Dt].disconnect(ft))}for(let Z=0;Z<$.added.length;Z++){const ft=$.added[Z];let Dt=A.indexOf(ft);if(Dt===-1){for(let Zt=0;Zt<w.length;Zt++)if(Zt>=A.length){A.push(ft),Dt=Zt;break}else if(A[Zt]===null){A[Zt]=ft,Dt=Zt;break}if(Dt===-1)break}const St=w[Dt];St&&St.connect(ft)}}const O=new P,it=new P;function at($,Z,ft){O.setFromMatrixPosition(Z.matrixWorld),it.setFromMatrixPosition(ft.matrixWorld);const Dt=O.distanceTo(it),St=Z.projectionMatrix.elements,Zt=ft.projectionMatrix.elements,Le=St[14]/(St[10]-1),I=St[14]/(St[10]+1),ue=(St[9]+1)/St[5],kt=(St[9]-1)/St[5],Lt=(St[8]-1)/St[0],gt=(Zt[8]+1)/Zt[0],de=Le*Lt,_t=Le*gt,zt=Dt/(-Lt+gt),Ae=zt*-Lt;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),St[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const xe=Le+zt,b=I+zt,M=de-Ae,k=_t+(Dt-Ae),X=ue*I/b*xe,j=kt*I/b*xe;$.projectionMatrix.makePerspective(M,k,X,j,xe,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ut($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Z=$.near,ft=$.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),U.near=y.near=E.near=Z,U.far=y.far=E.far=ft,(H!==U.near||q!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,q=U.far),U.layers.mask=$.layers.mask|6,E.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const Dt=$.parent,St=U.cameras;ut(U,Dt);for(let Zt=0;Zt<St.length;Zt++)ut(St[Zt],Dt);St.length===2?at(U,E,y):U.projectionMatrix.copy(E.projectionMatrix),At($,U,Dt)};function At($,Z,ft){ft===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Is*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return p[$]};let Yt=null;function te($,Z){if(d=Z.getViewerPose(l||o),m=Z,d!==null){const ft=d.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Dt=!1;ft.length!==U.cameras.length&&(U.cameras.length=0,Dt=!0);for(let I=0;I<ft.length;I++){const ue=ft[I];let kt=null;if(u!==null)kt=u.getViewport(ue);else{const gt=h.getViewSubImage(f,ue);kt=gt.viewport,I===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let Lt=C[I];Lt===void 0&&(Lt=new nn,Lt.layers.enable(I),Lt.viewport=new oe,C[I]=Lt),Lt.matrix.fromArray(ue.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ue.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(kt.x,kt.y,kt.width,kt.height),I===0&&(U.matrix.copy(Lt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Dt===!0&&U.cameras.push(Lt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const I=h.getDepthInformation(ft[0]);I&&I.isValid&&I.texture&&g.init(I,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let I=0;I<ft.length;I++){const ue=ft[I].camera;if(ue){let kt=p[ue];kt||(kt=new ch,p[ue]=kt);const Lt=h.getCameraImage(ue);kt.sourceTexture=Lt}}}}for(let ft=0;ft<w.length;ft++){const Dt=A[ft],St=w[ft];Dt!==null&&St!==void 0&&St.update(Dt,Z,l||o)}Yt&&Yt($,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const $t=new uh;$t.setAnimationLoop(te),this.setAnimationLoop=function($){Yt=$},this.dispose=function(){}}}const mi=new Dn,ug=new pe;function dg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,eh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,T,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=t.get(p),_=T.envMap,v=T.envMapRotation;_&&(g.envMap.value=_,mi.copy(v),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(mi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const T=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,_){const v=_.program;n.uniformBlockBinding(T,v)}function l(T,_){let v=s[T.id];v===void 0&&(m(T),v=d(T),s[T.id]=v,T.addEventListener("dispose",g));const w=_.program;n.updateUBOMapping(T,w);const A=t.render.frame;r[T.id]!==A&&(f(T),r[T.id]=A)}function d(T){const _=h();T.__bindingPointIndex=_;const v=i.createBuffer(),w=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const _=s[T.id],v=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=v.length;A<R;A++){const D=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,y=D.length;E<y;E++){const C=D[E];if(u(C,A,E,w)===!0){const U=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let V=0;V<H.length;V++){const G=H[V],Y=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+q,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(T,_,v,w){const A=T.value,R=_+"_"+v;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const D=w[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function m(T){const _=T.uniforms;let v=0;const w=16;for(let R=0,D=_.length;R<D;R++){const E=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,C=E.length;y<C;y++){const U=E[y],H=Array.isArray(U.value)?U.value:[U.value];for(let q=0,V=H.length;q<V;q++){const G=H[q],Y=x(G),O=v%w,it=O%Y.boundary,at=O+it;v+=it,at!==0&&w-at<Y.storage&&(v+=w-at),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const A=v%w;return A>0&&(v+=w-A),T.__size=v,T.__cache={},this}function x(T){const _={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(_.boundary=4,_.storage=4):T.isVector2?(_.boundary=8,_.storage=8):T.isVector3||T.isColor?(_.boundary=16,_.storage=12):T.isVector4?(_.boundary=16,_.storage=16):T.isMatrix3?(_.boundary=48,_.storage=48):T.isMatrix4?(_.boundary=64,_.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),_}function g(T){const _=T.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class pg{constructor(t={}){const{canvas:e=Wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const T=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=$e;let A=0,R=0,D=null,E=-1,y=null;const C=new oe,U=new oe;let H=null;const q=new Gt(0);let V=0,G=e.width,Y=e.height,O=1,it=null,at=null;const ut=new oe(0,0,G,Y),At=new oe(0,0,G,Y);let Yt=!1;const te=new Wa;let $t=!1,$=!1;const Z=new pe,ft=new P,Dt=new oe,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Le(){return D===null?O:1}let I=n;function ue(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pa}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",J,!1),I===null){const N="webgl2";if(I=ue(N,S),I===null)throw ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let kt,Lt,gt,de,_t,zt,Ae,xe,b,M,k,X,j,W,yt,nt,vt,xt,tt,lt,It,Mt,ot,Ot;function L(){kt=new bm(I),kt.init(),Mt=new og(I,kt),Lt=new _m(I,kt,t,Mt),gt=new sg(I,kt),Lt.reversedDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),de=new Am(I),_t=new X0,zt=new rg(I,kt,gt,_t,Lt,Mt,de),Ae=new xm(v),xe=new Em(v),b=new Pd(I),ot=new mm(I,b),M=new wm(I,b,de,ot),k=new Cm(I,M,b,de),tt=new Rm(I,Lt,zt),nt=new vm(_t),X=new W0(v,Ae,xe,kt,Lt,ot,nt),j=new dg(v,_t),W=new Y0,yt=new Q0(kt),xt=new pm(v,Ae,xe,gt,k,u,c),vt=new ng(v,k,Lt),Ot=new fg(I,de,Lt,gt),lt=new gm(I,kt,de),It=new Tm(I,kt,de),de.programs=X.programs,v.capabilities=Lt,v.extensions=kt,v.properties=_t,v.renderLists=W,v.shadowMap=vt,v.state=gt,v.info=de}L();const et=new hg(v,I);this.xr=et,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(G,Y,!1))},this.getSize=function(S){return S.set(G,Y)},this.setSize=function(S,N,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Y=N,e.width=Math.floor(S*O),e.height=Math.floor(N*O),B===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(G*O,Y*O).floor()},this.setDrawingBufferSize=function(S,N,B){G=S,Y=N,O=B,e.width=Math.floor(S*B),e.height=Math.floor(N*B),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(ut)},this.setViewport=function(S,N,B,z){S.isVector4?ut.set(S.x,S.y,S.z,S.w):ut.set(S,N,B,z),gt.viewport(C.copy(ut).multiplyScalar(O).round())},this.getScissor=function(S){return S.copy(At)},this.setScissor=function(S,N,B,z){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,N,B,z),gt.scissor(U.copy(At).multiplyScalar(O).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(S){gt.setScissorTest(Yt=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){at=S},this.getClearColor=function(S){return S.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,B=!0){let z=0;if(S){let F=!1;if(D!==null){const Q=D.texture.format;F=Q===Ba||Q===Oa||Q===ka}if(F){const Q=D.texture.type,ct=Q===Pn||Q===Ai||Q===Ts||Q===As||Q===Na||Q===Fa,pt=xt.getClearColor(),ht=xt.getClearAlpha(),Rt=pt.r,Pt=pt.g,Et=pt.b;ct?(m[0]=Rt,m[1]=Pt,m[2]=Et,m[3]=ht,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Rt,x[1]=Pt,x[2]=Et,x[3]=ht,I.clearBufferiv(I.COLOR,0,x))}else z|=I.COLOR_BUFFER_BIT}N&&(z|=I.DEPTH_BUFFER_BIT),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),xt.dispose(),W.dispose(),yt.dispose(),_t.dispose(),Ae.dispose(),xe.dispose(),k.dispose(),ot.dispose(),Ot.dispose(),X.dispose(),et.dispose(),et.removeEventListener("sessionstart",wn),et.removeEventListener("sessionend",uc),ci.stop()};function st(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=de.autoReset,N=vt.enabled,B=vt.autoUpdate,z=vt.needsUpdate,F=vt.type;L(),de.autoReset=S,vt.enabled=N,vt.autoUpdate=B,vt.needsUpdate=z,vt.type=F}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function K(S){const N=S.target;N.removeEventListener("dispose",K),mt(N)}function mt(S){Nt(S),_t.remove(S)}function Nt(S){const N=_t.get(S).programs;N!==void 0&&(N.forEach(function(B){X.releaseProgram(B)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,B,z,F,Q){N===null&&(N=St);const ct=F.isMesh&&F.matrixWorld.determinant()<0,pt=Nh(S,N,B,z,F);gt.setMaterial(z,ct);let ht=B.index,Rt=1;if(z.wireframe===!0){if(ht=M.getWireframeAttribute(B),ht===void 0)return;Rt=2}const Pt=B.drawRange,Et=B.attributes.position;let Xt=Pt.start*Rt,se=(Pt.start+Pt.count)*Rt;Q!==null&&(Xt=Math.max(Xt,Q.start*Rt),se=Math.min(se,(Q.start+Q.count)*Rt)),ht!==null?(Xt=Math.max(Xt,0),se=Math.min(se,ht.count)):Et!=null&&(Xt=Math.max(Xt,0),se=Math.min(se,Et.count));const ve=se-Xt;if(ve<0||ve===1/0)return;ot.setup(F,z,pt,B,ht);let he,ae=lt;if(ht!==null&&(he=b.get(ht),ae=It,ae.setIndex(he)),F.isMesh)z.wireframe===!0?(gt.setLineWidth(z.wireframeLinewidth*Le()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(F.isLine){let bt=z.linewidth;bt===void 0&&(bt=1),gt.setLineWidth(bt*Le()),F.isLineSegments?ae.setMode(I.LINES):F.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else F.isPoints?ae.setMode(I.POINTS):F.isSprite&&ae.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))ae.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,me=F._multiDrawCounts,ee=F._multiDrawCount,Ze=ht?b.get(ht).bytesPerElement:1,Pi=_t.get(z).currentProgram.getUniforms();for(let je=0;je<ee;je++)Pi.setValue(I,"_gl_DrawID",je),ae.render(bt[je]/Ze,me[je])}else if(F.isInstancedMesh)ae.renderInstances(Xt,ve,F.count);else if(B.isInstancedBufferGeometry){const bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,me=Math.min(B.instanceCount,bt);ae.renderInstances(Xt,ve,me)}else ae.render(Xt,ve)};function le(S,N,B){S.transparent===!0&&S.side===Ue&&S.forceSinglePass===!1?(S.side=Ke,S.needsUpdate=!0,Vs(S,N,B),S.side=ri,S.needsUpdate=!0,Vs(S,N,B),S.side=Ue):Vs(S,N,B)}this.compile=function(S,N,B=null){B===null&&(B=S),p=yt.get(B),p.init(N),_.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const z=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){const pt=Q[ct];le(pt,B,F),z.add(pt)}else le(Q,B,F),z.add(Q)}),p=_.pop(),z},this.compileAsync=function(S,N,B=null){const z=this.compile(S,N,B);return new Promise(F=>{function Q(){if(z.forEach(function(ct){_t.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){F(S);return}setTimeout(Q,10)}kt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ie=null;function Un(S){ie&&ie(S)}function wn(){ci.stop()}function uc(){ci.start()}const ci=new uh;ci.setAnimationLoop(Un),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(S){ie=S,et.setAnimationLoop(S),S===null?ci.stop():ci.start()},et.addEventListener("sessionstart",wn),et.addEventListener("sessionend",uc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,D),p=yt.get(S,_.length),p.init(N),_.push(p),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(Z,In,N.reversedDepth),$=this.localClippingEnabled,$t=nt.init(this.clippingPlanes,$),g=W.get(S,T.length),g.init(),T.push(g),et.enabled===!0&&et.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&qr(Q,N,-1/0,v.sortObjects)}qr(S,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(it,at),Zt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Zt&&xt.addToRenderList(g,S),this.info.render.frame++,$t===!0&&nt.beginShadows();const B=p.state.shadowsArray;vt.render(B,S,N),$t===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,F=g.transmissive;if(p.setupLights(),N.isArrayCamera){const Q=N.cameras;if(F.length>0)for(let ct=0,pt=Q.length;ct<pt;ct++){const ht=Q[ct];fc(z,F,S,ht)}Zt&&xt.render(S);for(let ct=0,pt=Q.length;ct<pt;ct++){const ht=Q[ct];dc(g,S,ht,ht.viewport)}}else F.length>0&&fc(z,F,S,N),Zt&&xt.render(S),dc(g,S,N);D!==null&&R===0&&(zt.updateMultisampleRenderTarget(D),zt.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(v,S,N),ot.resetDefaultState(),E=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],$t===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function qr(S,N,B,z){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){z&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const ct=k.update(S),pt=S.material;pt.visible&&g.push(S,ct,pt,B,Dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){const ct=k.update(S),pt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Dt.copy(ct.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(pt)){const ht=ct.groups;for(let Rt=0,Pt=ht.length;Rt<Pt;Rt++){const Et=ht[Rt],Xt=pt[Et.materialIndex];Xt&&Xt.visible&&g.push(S,ct,Xt,B,Dt.z,Et)}}else pt.visible&&g.push(S,ct,pt,B,Dt.z,null)}}const Q=S.children;for(let ct=0,pt=Q.length;ct<pt;ct++)qr(Q[ct],N,B,z)}function dc(S,N,B,z){const F=S.opaque,Q=S.transmissive,ct=S.transparent;p.setupLightsView(B),$t===!0&&nt.setGlobalState(v.clippingPlanes,B),z&&gt.viewport(C.copy(z)),F.length>0&&Gs(F,N,B),Q.length>0&&Gs(Q,N,B),ct.length>0&&Gs(ct,N,B),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function fc(S,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ri(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Us:Pn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const Q=p.state.transmissionRenderTarget[z.id],ct=z.viewport||C;Q.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const pt=v.getRenderTarget(),ht=v.getActiveCubeFace(),Rt=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(q),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Zt&&xt.render(B);const Pt=v.toneMapping;v.toneMapping=ii;const Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),$t===!0&&nt.setGlobalState(v.clippingPlanes,z),Gs(S,B,z),zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let se=0,ve=N.length;se<ve;se++){const he=N[se],ae=he.object,bt=he.geometry,me=he.material,ee=he.group;if(me.side===Ue&&ae.layers.test(z.layers)){const Ze=me.side;me.side=Ke,me.needsUpdate=!0,pc(ae,B,z,bt,me,ee),me.side=Ze,me.needsUpdate=!0,Xt=!0}}Xt===!0&&(zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q))}v.setRenderTarget(pt,ht,Rt),v.setClearColor(q,V),Et!==void 0&&(z.viewport=Et),v.toneMapping=Pt}function Gs(S,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,Q=S.length;F<Q;F++){const ct=S[F],pt=ct.object,ht=ct.geometry,Rt=ct.group;let Pt=ct.material;Pt.allowOverride===!0&&z!==null&&(Pt=z),pt.layers.test(B.layers)&&pc(pt,N,B,ht,Pt,Rt)}}function pc(S,N,B,z,F,Q){S.onBeforeRender(v,N,B,z,F,Q),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,N,B,z,S,Q),F.transparent===!0&&F.side===Ue&&F.forceSinglePass===!1?(F.side=Ke,F.needsUpdate=!0,v.renderBufferDirect(B,N,z,F,S,Q),F.side=ri,F.needsUpdate=!0,v.renderBufferDirect(B,N,z,F,S,Q),F.side=Ue):v.renderBufferDirect(B,N,z,F,S,Q),S.onAfterRender(v,N,B,z,F,Q)}function Vs(S,N,B){N.isScene!==!0&&(N=St);const z=_t.get(S),F=p.state.lights,Q=p.state.shadowsArray,ct=F.state.version,pt=X.getParameters(S,F.state,Q,N,B),ht=X.getProgramCacheKey(pt);let Rt=z.programs;z.environment=S.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(S.isMeshStandardMaterial?xe:Ae).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",K),Rt=new Map,z.programs=Rt);let Pt=Rt.get(ht);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===ct)return gc(S,pt),Pt}else pt.uniforms=X.getUniforms(S),S.onBeforeCompile(pt,v),Pt=X.acquireProgram(pt,ht),Rt.set(ht,Pt),z.uniforms=pt.uniforms;const Et=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=nt.uniform),gc(S,pt),z.needsLights=kh(S),z.lightsStateVersion=ct,z.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function mc(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=wr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function gc(S,N){const B=_t.get(S);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Nh(S,N,B,z,F){N.isScene!==!0&&(N=St),zt.resetTextureUnits();const Q=N.fog,ct=z.isMeshStandardMaterial?N.environment:null,pt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ss,ht=(z.isMeshStandardMaterial?xe:Ae).get(z.envMap||ct),Rt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,se=!!B.morphAttributes.color;let ve=ii;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ve=v.toneMapping);const he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=he!==void 0?he.length:0,bt=_t.get(z),me=p.state.lights;if($t===!0&&($===!0||S!==y)){const ke=S===y&&z.id===E;nt.setState(z,S,ke)}let ee=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==me.state.version||bt.outputColorSpace!==pt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==ht||z.fog===!0&&bt.fog!==Q||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Rt||bt.vertexTangents!==Pt||bt.morphTargets!==Et||bt.morphNormals!==Xt||bt.morphColors!==se||bt.toneMapping!==ve||bt.morphTargetsCount!==ae)&&(ee=!0):(ee=!0,bt.__version=z.version);let Ze=bt.currentProgram;ee===!0&&(Ze=Vs(z,N,F));let Pi=!1,je=!1,us=!1;const ge=Ze.getUniforms(),an=bt.uniforms;if(gt.useProgram(Ze.program)&&(Pi=!0,je=!0,us=!0),z.id!==E&&(E=z.id,je=!0),Pi||y!==S){gt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ge.setValue(I,"projectionMatrix",S.projectionMatrix),ge.setValue(I,"viewMatrix",S.matrixWorldInverse);const qe=ge.map.cameraPosition;qe!==void 0&&qe.setValue(I,ft.setFromMatrixPosition(S.matrixWorld)),Lt.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ge.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,je=!0,us=!0)}if(F.isSkinnedMesh){ge.setOptional(I,F,"bindMatrix"),ge.setOptional(I,F,"bindMatrixInverse");const ke=F.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ge.setValue(I,"boneTexture",ke.boneTexture,zt))}F.isBatchedMesh&&(ge.setOptional(I,F,"batchingTexture"),ge.setValue(I,"batchingTexture",F._matricesTexture,zt),ge.setOptional(I,F,"batchingIdTexture"),ge.setValue(I,"batchingIdTexture",F._indirectTexture,zt),ge.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&ge.setValue(I,"batchingColorTexture",F._colorsTexture,zt));const cn=B.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&tt.update(F,B,Ze),(je||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,ge.setValue(I,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(an.envMap.value=ht,an.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(an.envMapIntensity.value=N.environmentIntensity),je&&(ge.setValue(I,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&Fh(an,us),Q&&z.fog===!0&&j.refreshFogUniforms(an,Q),j.refreshMaterialUniforms(an,z,O,Y,p.state.transmissionRenderTarget[S.id]),wr.upload(I,mc(bt),an,zt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(wr.upload(I,mc(bt),an,zt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ge.setValue(I,"center",F.center),ge.setValue(I,"modelViewMatrix",F.modelViewMatrix),ge.setValue(I,"normalMatrix",F.normalMatrix),ge.setValue(I,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ke=z.uniformsGroups;for(let qe=0,Yr=ke.length;qe<Yr;qe++){const li=ke[qe];Ot.update(li,Ze),Ot.bind(li,Ze)}}return Ze}function Fh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function kh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,N,B){const z=_t.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_t.get(S.texture).__webglTexture=N,_t.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const B=_t.get(S);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const Oh=I.createFramebuffer();this.setRenderTarget=function(S,N=0,B=0){D=S,A=N,R=B;let z=!0,F=null,Q=!1,ct=!1;if(S){const ht=_t.get(S);if(ht.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(ht.__webglFramebuffer===void 0)zt.setupRenderTarget(S);else if(ht.__hasExternalTextures)zt.rebindTextures(S,_t.get(S.texture).__webglTexture,_t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Et=S.depthTexture;if(ht.__boundDepthTexture!==Et){if(Et!==null&&_t.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);const Pt=_t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[N])?F=Pt[N][B]:F=Pt[N],Q=!0):S.samples>0&&zt.useMultisampledRTT(S)===!1?F=_t.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[B]:F=Pt,C.copy(S.viewport),U.copy(S.scissor),H=S.scissorTest}else C.copy(ut).multiplyScalar(O).floor(),U.copy(At).multiplyScalar(O).floor(),H=Yt;if(B!==0&&(F=Oh),gt.bindFramebuffer(I.FRAMEBUFFER,F)&&z&&gt.drawBuffers(S,F),gt.viewport(C),gt.scissor(U),gt.setScissorTest(H),Q){const ht=_t.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,B)}else if(ct){const ht=N;for(let Rt=0;Rt<S.textures.length;Rt++){const Pt=_t.get(S.textures[Rt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Rt,Pt.__webglTexture,B,ht)}}else if(S!==null&&B!==0){const ht=_t.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ht.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(S,N,B,z,F,Q,ct,pt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht){gt.bindFramebuffer(I.FRAMEBUFFER,ht);try{const Rt=S.textures[pt],Pt=Rt.format,Et=Rt.type;if(!Lt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-z&&B>=0&&B<=S.height-F&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),I.readPixels(N,B,z,F,Mt.convert(Pt),Mt.convert(Et),Q))}finally{const Rt=D!==null?_t.get(D).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,N,B,z,F,Q,ct,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht)if(N>=0&&N<=S.width-z&&B>=0&&B<=S.height-F){gt.bindFramebuffer(I.FRAMEBUFFER,ht);const Rt=S.textures[pt],Pt=Rt.format,Et=Rt.type;if(!Lt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),I.readPixels(N,B,z,F,Mt.convert(Pt),Mt.convert(Et),0);const se=D!==null?_t.get(D).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,se);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xu(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Xt),I.deleteSync(ve),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,B=0){const z=Math.pow(2,-B),F=Math.floor(S.image.width*z),Q=Math.floor(S.image.height*z),ct=N!==null?N.x:0,pt=N!==null?N.y:0;zt.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ct,pt,F,Q),gt.unbindTexture()};const Bh=I.createFramebuffer(),zh=I.createFramebuffer();this.copyTextureToTexture=function(S,N,B=null,z=null,F=0,Q=null){Q===null&&(F!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let ct,pt,ht,Rt,Pt,Et,Xt,se,ve;const he=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(B!==null)ct=B.max.x-B.min.x,pt=B.max.y-B.min.y,ht=B.isBox3?B.max.z-B.min.z:1,Rt=B.min.x,Pt=B.min.y,Et=B.isBox3?B.min.z:0;else{const cn=Math.pow(2,-F);ct=Math.floor(he.width*cn),pt=Math.floor(he.height*cn),S.isDataArrayTexture?ht=he.depth:S.isData3DTexture?ht=Math.floor(he.depth*cn):ht=1,Rt=0,Pt=0,Et=0}z!==null?(Xt=z.x,se=z.y,ve=z.z):(Xt=0,se=0,ve=0);const ae=Mt.convert(N.format),bt=Mt.convert(N.type);let me;N.isData3DTexture?(zt.setTexture3D(N,0),me=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(zt.setTexture2DArray(N,0),me=I.TEXTURE_2D_ARRAY):(zt.setTexture2D(N,0),me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const ee=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pi=I.getParameter(I.UNPACK_SKIP_PIXELS),je=I.getParameter(I.UNPACK_SKIP_ROWS),us=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et);const ge=S.isDataArrayTexture||S.isData3DTexture,an=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const cn=_t.get(S),ke=_t.get(N),qe=_t.get(cn.__renderTarget),Yr=_t.get(ke.__renderTarget);gt.bindFramebuffer(I.READ_FRAMEBUFFER,qe.__webglFramebuffer),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let li=0;li<ht;li++)ge&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(S).__webglTexture,F,Et+li),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(N).__webglTexture,Q,ve+li)),I.blitFramebuffer(Rt,Pt,ct,pt,Xt,se,ct,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||_t.has(S)){const cn=_t.get(S),ke=_t.get(N);gt.bindFramebuffer(I.READ_FRAMEBUFFER,Bh),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,zh);for(let qe=0;qe<ht;qe++)ge?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,cn.__webglTexture,F,Et+qe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,cn.__webglTexture,F),an?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,Q,ve+qe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,Q),F!==0?I.blitFramebuffer(Rt,Pt,ct,pt,Xt,se,ct,pt,I.COLOR_BUFFER_BIT,I.NEAREST):an?I.copyTexSubImage3D(me,Q,Xt,se,ve+qe,Rt,Pt,ct,pt):I.copyTexSubImage2D(me,Q,Xt,se,Rt,Pt,ct,pt);gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else an?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(me,Q,Xt,se,ve,ct,pt,ht,ae,bt,he.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(me,Q,Xt,se,ve,ct,pt,ht,ae,he.data):I.texSubImage3D(me,Q,Xt,se,ve,ct,pt,ht,ae,bt,he):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Xt,se,ct,pt,ae,bt,he.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Xt,se,he.width,he.height,ae,he.data):I.texSubImage2D(I.TEXTURE_2D,Q,Xt,se,ct,pt,ae,bt,he);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pi),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,us),Q===0&&N.generateMipmaps&&I.generateMipmap(me),gt.unbindTexture()},this.initRenderTarget=function(S){_t.get(S).__webglFramebuffer===void 0&&zt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?zt.setTextureCube(S,0):S.isData3DTexture?zt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?zt.setTexture2DArray(S,0):zt.setTexture2D(S,0),gt.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,gt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const Jt=0,Xn=1,os=2,qn=3,Os=4,Br=5,Bs=6,hs=7,zr=8,zs=9,Mn=10,Fe=11,ye=12,yn=13,un=14,tn=15,en=16,Sn=17,pn=18,Hs=19,Ie=20,Ci=21,$n=22,Ye=23,Rn=24,Ii=25,Hr=26,Ka=27,Za=28,ja=29,Ja=30,Qa=31,Gr=32,Qt=i=>i,Yn=[Qt({id:Jt,name:"Air",solid:!1,opaque:!1,transparent:!1,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[0,0,0]}),Qt({id:Xn,name:"Sand",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.83,.72,.5]}),Qt({id:os,name:"Sandstone",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.2,breakTime:1.8,tool:"pickaxe",minTier:1,placeable:!0,color:[.76,.65,.44]}),Qt({id:qn,name:"Rock",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.5,breakTime:3.2,tool:"pickaxe",minTier:1,placeable:!0,color:[.45,.42,.4]}),Qt({id:Os,name:"Gravel",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.7,breakTime:.7,tool:"shovel",minTier:0,placeable:!0,color:[.55,.52,.5]}),Qt({id:Br,name:"Dirt",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.8,breakTime:.6,tool:"shovel",minTier:0,placeable:!0,color:[.42,.32,.22]}),Qt({id:Bs,name:"Salt Crust",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:.5,tool:"shovel",minTier:0,placeable:!0,color:[.85,.86,.84]}),Qt({id:hs,name:"Dead Wood",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.6,breakTime:1.2,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.38,.3,.22]}),Qt({id:zr,name:"Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:.15,breakTime:.4,tool:null,minTier:0,placeable:!0,color:[.65,.8,.9]}),Qt({id:zs,name:"Insulating Glass",solid:!0,opaque:!1,transparent:!0,emissive:!1,R:2,breakTime:1.2,tool:null,minTier:0,placeable:!0,color:[.55,.75,.62]}),Qt({id:Mn,name:"Hull Plating",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:6,tool:"disassembler",minTier:0,placeable:!0,color:[.52,.55,.6]}),Qt({id:Fe,name:"Door (closed)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Qt({id:ye,name:"Door (open)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:"disassembler",minTier:0,placeable:!1,color:[.35,.36,.4]}),Qt({id:yn,name:"Lamp",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:1,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[1,.9,.6]}),Qt({id:un,name:"Metal Block",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.3,breakTime:4,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.68]}),Qt({id:tn,name:"Save Beacon",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:-1,tool:null,minTier:0,placeable:!0,color:[.4,.9,.95]}),Qt({id:en,name:"Crafting Bench",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!0,color:[.5,.4,.3]}),Qt({id:Sn,name:"Campfire",solid:!0,opaque:!1,transparent:!1,emissive:!0,R:0,breakTime:.5,tool:null,minTier:0,placeable:!0,color:[.9,.45,.2]}),Qt({id:pn,name:"Water",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.35,.75]}),Qt({id:Hs,name:"Adobe Brick",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:1.6,breakTime:1.5,tool:"pickaxe",minTier:0,placeable:!0,color:[.7,.58,.42]}),Qt({id:Ie,name:"Door (closed top)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:3,breakTime:2,tool:"disassembler",minTier:0,placeable:!0,color:[.6,.62,.66]}),Qt({id:Ci,name:"Engine Core",solid:!0,opaque:!0,transparent:!1,emissive:!0,R:.5,breakTime:4,tool:null,minTier:0,placeable:!0,color:[.78,.42,.9]}),Qt({id:$n,name:"Heat Regulator",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1.5,tool:null,minTier:0,placeable:!0,color:[.35,.75,.8]}),Qt({id:Ye,name:"Supply Chest",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.9,breakTime:1.5,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.54,.43,.27]}),Qt({id:Rn,name:"Crafting Bench (frame)",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.5,breakTime:1,tool:null,minTier:0,placeable:!1,color:[.45,.36,.27]}),Qt({id:Ii,name:"Cactus",solid:!0,opaque:!0,transparent:!1,emissive:!1,R:.4,breakTime:.9,tool:null,fastTool:"axe",minTier:0,placeable:!0,color:[.24,.5,.26]}),Qt({id:Hr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.13,.4,.8]}),Qt({id:Ka,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.12,.39,.78]}),Qt({id:Za,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.11,.37,.76]}),Qt({id:ja,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.1,.36,.74]}),Qt({id:Ja,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.09,.34,.71]}),Qt({id:Qa,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.08,.31,.68]}),Qt({id:Gr,name:"Water (flowing)",solid:!1,opaque:!1,transparent:!0,emissive:!1,R:0,breakTime:0,tool:null,minTier:0,placeable:!1,color:[.07,.29,.64]})],Ee=96,Tt=16,sn=1440;function ze(i){return Yn[i].solid}function mg(i){return Yn[i].opaque}function wi(i){return i===pn||i>=Hr&&i<=Gr}function Yi(i){return i===pn?8:wi(i)?33-i:0}function El(i){return 33-i}function gg(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class tc{s;constructor(t){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function Ge(i,t,e){let n=i*374761393+t*668265263+e*2246822519>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function Sa(i){return i*i*(3-2*i)}function ec(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Sa(i-n),o=Sa(t-s),a=Ge(n,s,e),c=Ge(n+1,s,e),l=Ge(n,s+1,e),d=Ge(n+1,s+1,e);return a+(c-a)*r+(l-a)*o+(a-c-l+d)*r*o}function ys(i,t,e,n=4,s=2,r=.5){let o=0,a=1,c=1,l=0;for(let d=0;d<n;d++)o+=ec(i*c,t*c,e+d*101)*a,l+=a,a*=r,c*=s;return o/l}function _g(i,t,e,n=3){let s=0,r=1,o=1,a=0;for(let c=0;c<n;c++){const l=Math.abs(ec(i*o,t*o,e+c*101)*2-1);s+=(1-l)*r,a+=r,r*=.5,o*=2}return s/a}function gh(i,t){const e=Math.floor(i),n=Sa(i-e),s=Ge(e,0,t),r=Ge(e+1,0,t);return s+(r-s)*n}const bl=0,Ea=1,vg=2,ba=3,Tr=4,xg=1e6;class Mg{constructor(t){this.seed=t;const e=new tc(t^24378);for(let n=0;n<6;n++){const s=e.range(0,Math.PI*2),r=e.range(160,900);this.oases.push({x:Math.round(Math.cos(s)*r),z:Math.round(Math.sin(s)*r),r:e.int(3,5)})}for(let n=0;n<4;n++){const s=e.range(0,Math.PI*2),r=e.range(300,1e3);this.towns.push({x:Math.round(Math.cos(s)*r),z:Math.round(Math.sin(s)*r)})}{const n=e.range(0,Math.PI*2),s=e.range(450,700);this.secondShip={x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s)}}for(let n=0;n<13;n++){const s=e.range(0,Math.PI*2),r=e.range(30,600);this.canisters.push({x:Math.round(Math.cos(s)*r),z:Math.round(Math.sin(s)*r),buried:e.next()<.4})}}oases=[];towns=[];secondShip={x:0,z:0};canisters=[];nearOasis(t,e){for(const n of this.oases)if(Math.abs(n.x-t)<=n.r+1&&Math.abs(n.z-e)<=n.r+1)return n;return null}}function nc(i,t,e){const n=Math.min(.999,Math.max(.001,ys(i/900+.5,t/900+.5,e,3))),r=[.17,.42,.57,.72,.9].map(c=>Math.exp(-Math.abs(n-c)/.05)),o=Math.max(Math.abs(i),Math.abs(t));o<80&&(r[0]+=Math.pow(1-o/80,2)*6);const a=r.reduce((c,l)=>c+l,0);return r.map(c=>c/a)}function Ar(i,t,e){const n=nc(i,t,e);let s=0;for(let r=1;r<5;r++)n[r]>n[s]&&(s=r);return s}function yg(i,t,e){const n=nc(t,e,i),s=[30+ys(t/140,e/140,i+7)*8+Math.sin(t/9+e/13)*.9,29+ys(t/160,e/160,i+9)*6+Math.max(0,ec(t/26,e/26,i+11)-.72)*10,28+ys(t/220,e/220,i+5)*3,33+Math.floor(ys(t/170,e/170,i+13)*4.99)*5,29-_g(t/210,e/210,i+17)*9];let r=0;for(let o=0;o<5;o++)r+=n[o]*s[o];return r}function He(i,t,e){const n=Math.max(Math.abs(t),Math.abs(e)),s=yg(i,t,e);if(n>=30)return s;if(n<=14)return 30;const r=(n-14)/16,o=r*r*(3-2*r);return 30+(s-30)*o}function Sg(i,t,e,n,s){const r=nc(t,e,i);let o=0,a=1;r[1]>r[0]&&(o=1,a=0);for(let c=2;c<5;c++)r[c]>r[o]?(a=o,o=c):r[c]>r[a]&&(a=c);return r[a]/r[o]>.35&&Ge(t,e,i+45)<r[a]/(r[o]+r[a])&&(o=a),n===s?o===vg?Bs:o===Tr?qn:o===ba?os:o===Ea&&Ge(t,e,i+41)>.78?Os:Xn:n>=s-3?o===Tr?qn:Xn:o===ba||o===Tr?qn:os}function Eg(i){const n=(o,a)=>o===4||o===-6?Math.abs(a)<=4:a===5||a===-5?o>=-5&&o<=3:o>=-5&&o<=3&&a>=-4&&a<=4,s=(o,a,c)=>(o===4||o===-6)&&Math.abs(c)>=3&&(a===30||a===34);for(let o=-6;o<=4;o++)for(let a=-5;a<=5;a++)for(let c=30;c<=34;c++){if(!n(o,a)||s(o,c,a))continue;const l=o>=2&&Math.abs(a)>2,d=o>=-5&&o<=3&&a>=-4&&a<=4&&c>=31&&c<=33&&!l;i(o,c,a,d?Jt:c===30?un:Mn)}for(let o=-3;o<=1;o++)for(let a=-2;a<=2;a++)i(o,35,a,Mn);for(let o=-2;o<=0;o++)for(let a=-1;a<=1;a++)i(o,36,a,Mn);for(let o=-2;o<=1;o++)for(const a of[6,7,8,9,-6,-7,-8,-9])i(o,32,a,un);for(const o of[-3,2])for(const a of[6,7,8,-6,-7,-8])i(o,32,a,un);for(const o of[-1,0])i(o,31,10,un),i(o,31,-10,un);const r=(o,a,c)=>{i(o,a,c,Fe),i(o,a+1,c,Ie)};for(let o=-4;o<=4;o++)for(let a=31;a<=33;a++)i(1,a,o,Mn),i(-2,a,o,Mn);for(let o=-5;o<=-3;o++)for(const a of[-2,2])for(let c=31;c<=33;c++)i(o,c,a,Mn);r(1,31,0),r(-2,31,0),r(-2,31,3),r(-2,31,-3),r(-6,31,0);for(let o=-2;o<=2;o++)for(let a=32;a<=33;a++)i(4,a,o,zs);i(-4,30,4,pn),i(-4,29,4,pn),i(-3,30,4,pn),i(-4,31,-4,$n),i(-1,33,0,$n),i(-4,31,-1,tn),i(0,31,-3,en),i(0,31,-2,Rn);for(const[o,a]of[[3,0],[0,0],[-4,3],[-4,-3],[-5,0]])i(o,34,a,yn);for(const[o,a]of[[0,3],[0,4],[-1,4],[2,2]])i(o,31,a,un)}function bg(i,t,e){const n=new tc(xg+77);for(let s=0;s<40;s++){const r=t.x+n.int(-5,5),o=t.z+n.int(-5,5),a=Math.round(He(e,r,o));i(r,a+n.int(0,1),o,n.next()<.5?Mn:un)}i(t.x,Math.round(He(e,t.x,t.z))+1,t.z,Ci)}function wg(i,t,e){const n=Math.round(He(e,t.x,t.z));for(let s=-t.r-1;s<=t.r+1;s++)for(let r=-t.r-1;r<=t.r+1;r++){const o=t.x+s,a=t.z+r,c=Math.sqrt(s*s+r*r),l=Math.round(He(e,o,a));if(c<=t.r){for(let d=l;d>n-2;d--)i(o,d,a,Jt);i(o,n-2,a,Xn);for(let d=n-1;d<=n;d++)i(o,d,a,pn)}else if(c<=t.r+1)for(let d=l;d<n+1;d++)i(o,d,a,Xn)}for(let s=0;s<3;s++){const r=t.x+Math.round(Math.cos(s*2.1)*(t.r+2)),o=t.z+Math.round(Math.sin(s*2.1)*(t.r+2)),a=Math.round(He(e,r,o));for(let c=a+1;c<=a+4;c++)i(r,c,o,hs)}}function Tg(i,t,e){for(const[n,s]of[[-4,-3],[2,2],[-2,4]]){const r=Math.round(He(e,t.x+n,t.z+s));for(let o=0;o<4;o++)for(let a=0;a<4;a++)for(let c=r+1;c<=r+3;c++){if(!(o===0||o===3||a===0||a===3||c===r+1||c===r+3)){i(t.x+n+o,c,t.z+s+a,Jt);continue}o===0&&a===1&&c<=r+2||i(t.x+n+o,c,t.z+s+a,Hs)}i(t.x+n+1,r+2,t.z+s+2,un)}}function Ag(i,t,e,n){const s=new Uint8Array(Tt*Tt*Ee),r=(o,a,c,l)=>{const d=o-e*Tt,h=c-n*Tt;d>=0&&d<Tt&&h>=0&&h<Tt&&a>=0&&a<Ee&&(s[(d*Tt+h)*Ee+a]=l)};for(let o=0;o<Tt;o++)for(let a=0;a<Tt;a++){const c=e*Tt+o,l=n*Tt+a,d=Math.round(He(i,c,l));for(let f=0;f<=d;f++)s[(o*Tt+a)*Ee+f]=Sg(i,c,l,f,d);const h=c*c+l*l<240;if(!h&&Ge(c,l,i+21)>.988){const f=Ar(c,l,i);if(f===bl||f===Ea){for(let u=1;u<=2;u++)r(c,d+u,l,qn);o>0&&r(c-1,d+1,l,qn)}}if(!h&&Ge(c,l,i+23)>.9935){const f=Ar(c,l,i);if(f!==ba&&f!==Tr){const u=3+(Ge(c,l,i+29)*3|0);for(let m=d+1;m<=d+u;m++)r(c,m,l,hs)}}if(!h&&s[(o*Tt+a)*Ee+d+1]===0&&Ge(c,l,i+31)>.9915){const f=Ar(c,l,i);if(f===bl||f===Ea){const u=2+(Ge(c,l,i+37)*3|0);for(let m=d+1;m<=d+u;m++)r(c,m,l,Ii);u>=3&&Ge(c,l,i+41)>.55&&r(c+(Ge(c,l,i+43)>.5?1:-1),d+2,l,Ii)}}}e>=-1&&e<=0&&n>=-1&&n<=0&&Eg(r);for(const o of t.oases)Math.abs(e*Tt+8-o.x)<o.r+8&&Math.abs(n*Tt+8-o.z)<o.r+8&&wg(r,o,i);for(const o of t.towns)Math.abs(e*Tt+8-o.x)<12&&Math.abs(n*Tt+8-o.z)<12&&Tg(r,o,i);return Math.abs(e*Tt+8-t.secondShip.x)<12&&Math.abs(n*Tt+8-t.secondShip.z)<12&&bg(r,t.secondShip,i),s}const Ss=(i,t)=>i+","+t,wl=(i,t,e)=>(i*Tt+t)*Ee+e,Ro=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];class Rg{constructor(t){this.seed=t,this.gen=new Mg(t)}chunks=new Map;deltas=new Map;dirty=new Set;doorSwing=new Map;waterQ=new Set;gen;chunk(t,e){const n=Ss(t,e);let s=this.chunks.get(n);if(!s){s=Ag(this.seed,this.gen,t,e);const r=this.deltas.get(n);if(r)for(const[o,a]of r)s[o]=a;this.chunks.set(n,s)}return s}get(t,e,n){if(e<0||e>=Ee)return Jt;const s=Math.floor(t/Tt),r=Math.floor(n/Tt);return this.chunk(s,r)[wl(t-s*Tt,n-r*Tt,e)]}skyResistance(t,e,n,s=40){let r=0;for(let o=1;o<=s;o++){const a=this.get(t,e+o,n);if(a!==Jt&&(r+=Cg[a],r>=6))return{R:r,openSky:!1}}return{R:r,openSky:r===0}}roomInfo(t,e,n,s=400){if(this.get(t,e,n)!==Jt)return{size:0,sealed:!1,regulators:0,regCells:[]};const r=new Set([`${t},${e},${n}`]),o=[[t,e,n]],a=new Set;let c=0,l=!0;for(;o.length;){const[d,h,f]=o.pop();if(++c>s){l=!1;break}for(const[u,m,x]of Ro){const g=d+u,p=h+m,T=f+x;if(p>=Ee){l=!1;continue}const _=this.get(g,p,T);if(_===Jt||_===ye){const v=g+","+p+","+T;r.has(v)||(r.add(v),o.push([g,p,T]))}else _===$n&&a.add(g+","+p+","+T)}}return{size:c,sealed:l,regulators:a.size,regCells:[...a]}}set(t,e,n,s){if(e<0||e>=Ee)return;const r=Math.floor(t/Tt),o=Math.floor(n/Tt),a=this.chunk(r,o),c=wl(t-r*Tt,n-o*Tt,e);if(a[c]===s)return;const l=a[c];if(a[c]=s,wi(s)||wi(l)){this.queueWater(t,e,n);for(const[u,m,x]of Ro)this.queueWater(t+u,e+m,n+x)}let d=this.deltas.get(Ss(r,o));d||this.deltas.set(Ss(r,o),d=new Map),d.set(c,s),this.markDirty(r,o);const h=t-r*Tt,f=n-o*Tt;h===0&&this.markDirty(r-1,o),f===0&&this.markDirty(r,o-1),h===Tt-1&&this.markDirty(r+1,o),f===Tt-1&&this.markDirty(r,o+1)}markDirty(t,e){this.dirty.add(Ss(t,e))}queueWater(t,e,n){e>=0&&e<Ee&&this.waterQ.add(t+","+e+","+n)}processWater(t=4e3){let e=0;for(;this.waterQ.size&&e<t;){const n=this.waterQ.values().next().value;this.waterQ.delete(n);const[s,r,o]=n.split(",").map(Number);e+=this.drainFlow(s,r,o,t-e),e+=this.floodFrom(s,r,o,t-e)}return e}drainFlow(t,e,n,s){let r=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]],a=new Set;for(;o.length&&r++<s;){const[c,l,d]=o.pop(),h=Yi(this.get(c,l,d));if(!h||h===8)continue;const f=c+","+l+","+d;if(!a.has(f)&&(a.add(f),!this.waterSupported(c,l,d,h))){this.set(c,l,d,Jt);for(const[u,m,x]of Ro)o.push([c+u,l+m,d+x])}}return r}waterSupported(t,e,n,s){for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(Yi(this.get(t+r,e,n+o))>s)return!0;return Yi(this.get(t,e+1,n))>=s}floodFrom(t,e,n,s){let r=0;const o=[[t,e,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]];for(;o.length&&r++<s;){const[a,c,l]=o.shift(),d=Yi(this.get(a,c,l));if(!d)continue;if(c>0){const f=this.get(a,c-1,l);(f===Jt||wi(f))&&Yi(f)<d&&(this.set(a,c-1,l,El(d===8?7:d)),o.push([a,c-1,l]))}const h=d===8?7:d-1;if(!(h<1))for(const[f,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const m=this.get(a+f,c,l+u);(m===Jt||wi(m))&&Yi(m)<h&&(this.set(a+f,c,l+u,El(h)),o.push([a+f,c,l+u]))}}return r}surface(t,e){for(let n=Ee-1;n>=0;n--)if(this.get(t,n,e)!==Jt)return n;return 0}serializeDeltas(){const t={};for(const[e,n]of this.deltas){const s=[];for(const[r,o]of n)s.push(r,o);t[e]=s}return t}loadDeltas(t){this.deltas.clear();for(const[e,n]of Object.entries(t)){const s=new Map;for(let r=0;r<n.length;r+=2)s.set(n[r],n[r+1]);this.deltas.set(e,s)}this.chunks.clear(),this.dirty.clear();for(const e of this.deltas.keys())this.dirty.add(e)}}const Cg=Yn.map(i=>i.R);function Ig(i,t,e,n,s){const r=i.get(t,e,n);return r===Fe||r===Ie?!0:!(mg(r)||r===s)}const vr=.6,Lg=1.8,Tl=1.62;class Pg{constructor(t){this.world=t}pos=new P(.5,31.01,2.5);vel=new P;yaw=0;pitch=0;onGround=!1;sprinting=!1;inWater=!1;headUnder=!1;waterAt(t){return wi(this.world.get(Math.floor(this.pos.x),Math.floor(this.pos.y+t),Math.floor(this.pos.z)))}collides(t,e,n){const s=Math.floor(t-vr/2),r=Math.floor(t+vr/2),o=Math.floor(n-vr/2),a=Math.floor(n+vr/2),c=Math.floor(e),l=Math.floor(e+Lg-.001);for(let d=s;d<=r;d++)for(let h=o;h<=a;h++)for(let f=c;f<=l;f++)if(ze(this.world.get(d,f,h)))return!0;return!1}update(t,e,n,s,r,o){this.inWater=this.waterAt(.1)||this.waterAt(1),this.headUnder=this.waterAt(Tl);const a=this.inWater,c=(this.sprinting?7.2:4.5)*r*(o?.25:1)*(a?.55:1),l=new P(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),d=new P(-l.z,0,l.x),h=l.multiplyScalar(n).add(d.multiplyScalar(e));h.lengthSq()>1&&h.normalize();const f=this.onGround?40:a?12:8;this.vel.x+=(h.x*c-this.vel.x)*Math.min(1,f*t),this.vel.z+=(h.z*c-this.vel.z)*Math.min(1,f*t),a?(this.vel.y-=7*t,s&&(this.onGround?(this.vel.y=6,this.onGround=!1):this.vel.y+=22*t),this.vel.y=si.clamp(this.vel.y,-3.2,3.4),this.vel.y*=1-Math.min(.9,2.2*t)):(this.vel.y-=24*t,s&&this.onGround&&(this.vel.y=8.2,this.onGround=!1)),this.moveAxis(this.vel.x*t,0),this.moveAxis(this.vel.z*t,2),this.moveAxis(this.vel.y*t,1),this.pos.y<-5&&(this.pos.set(0,40,0),this.vel.set(0,0,0)),this.pos.y<=.5&&Math.abs(this.pos.x)<=24&&Math.abs(this.pos.z)<=24&&this.vel.y<=0&&(this.onGround=!0)}moveAxis(t,e){if(t===0)return;const n=this.pos,s=Math.max(1,Math.ceil(Math.abs(t)/.3)),r=t/s;for(let o=0;o<s;o++){const a=n.x+(e===0?r:0),c=n.y+(e===1?r:0),l=n.z+(e===2?r:0);if(!this.collides(a,c,l)){n.set(a,c,l);continue}e===1?(r<0&&(this.onGround=!0),this.vel.y=0):e===0?this.vel.x*=.25:this.vel.z*=.25;return}e===1&&t!==0&&(this.onGround=!1)}eye(){return new P(this.pos.x,this.pos.y+Tl,this.pos.z)}}const Si=20,Es=45,ic=36,sc=37.5,wa=39.5,Ta=31.5,Aa=5,Dg=27,Ug=25,Ra=100;class Ng{constructor(t){this.weatherSeed=t}health=100;water=100;body=36.6;invincible=!1;surgeCooldown=0;causeOfDeath=null;vision=0;lastAmbient=0;lastAmbientEff=0;lastShelterR=0;lastTarget=36.6;lastOpenSky=!1;lastRoom={size:0,sealed:!1,regulators:0};embedKey="";embedAir=null;worldTimeToDayFrac(t){return t%sn/sn}ambient(t,e,n){let s=Dg-Ug*Math.cos((e-.28)*Math.PI*2);t===2&&(s-=2),(t===3||t===4)&&(s+=3);const r=gh(Math.floor(n/10)/60,this.weatherSeed)*2-1;return s+r*8}update(t,e,n,s){if(this.health<=0)return;this.surgeCooldown>0&&(this.surgeCooldown-=t);const r=this.worldTimeToDayFrac(s.tSec),o=this.ambient(s.biome,r,s.tSec),a=Math.floor(n.x),c=Math.floor(n.y),l=Math.floor(n.z),d=(T,_,v)=>{const{R:w,openSky:A}=e.skyResistance(T,_,v);let R=1-Math.exp(-w),D=o;A&&s.sunElev>0&&(D+=8+10*s.sunElev);const E=e.roomInfo(T,_,v);return E.sealed&&(E.regulators*Ra>=E.size?(D=36.6,R=1):(D=o,R=0)),{R:w,openSky:A,shelter:R,ambEff:D,room:E}};let h=d(a,c,l);if(h.room.size===0){const T=`${a},${c},${l}|${Math.floor(s.tSec*2)}`;if(this.embedKey!==T){let _=h;for(let v=-1;v<=1;v++)for(let w=-1;w<=1;w++)for(let A=-1;A<=1;A++){if(!v&&!w&&!A)continue;const R=d(a+v,c+w,l+A);R.room.size!==0&&Math.abs(R.ambEff-37)<Math.abs(_.ambEff-37)&&(_=R)}this.embedKey=T,this.embedAir=_}this.embedAir&&(h=this.embedAir)}this.lastOpenSky=h.openSky;let f=h.shelter,u=h.ambEff;const m=h.room;if(this.lastRoom=m,s.inWater){const T=si.clamp(o,12,24)-3;u=(u+T)/2}const x=36.6+(u-36.6)*(1-f);this.lastAmbient=o,this.lastAmbientEff=u,this.lastShelterR=h.R,this.lastTarget=x;const g=m.sealed?.022:.0075;this.body+=(x-this.body)*g*t,this.body=si.clamp(this.body,12,44.5);let p=100/(sn*1.5);this.body>37&&(p+=(this.body-37)*.02),s.sprinting&&(p*=1.7),s.overencumbered&&(p+=.05),this.water=Math.max(0,this.water-p*t),this.body>wa&&this.hurt((this.body-wa)*.6,"heat stroke"),this.body<Ta&&this.hurt((Ta-this.body)*.7,"hypothermia"),this.water<=0?this.hurt(1.2,"dehydration"):this.water<Aa&&this.hurt((Aa-this.water)*.15,"dehydration"),this.water>25&&this.body>=ic&&this.body<=sc&&this.health>0&&(this.health=Math.min(100,this.health+.25*t)),this.vision=si.clamp((28-this.water)/28,0,1)}hurt(t,e){this.health<=0||this.invincible||(this.health-=t,this.health<=0&&(this.health=0,this.causeOfDeath=e))}surge(){return this.surgeCooldown>0?"cooling":this.water<20?"thirsty":(this.water-=10,this.body=Math.max(30,this.body-1.5),this.surgeCooldown=10,"ok")}drink(){this.water=Math.min(100,this.water+25),this.body>34&&(this.body=Math.max(34,this.body-Math.min(1.5,this.body-33.5)))}reset(){this.health=100,this.water=100,this.body=36.6,this.causeOfDeath=null}}const Fg=[{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],shade:1,uv:[0,2]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.45,uv:[0,2]},{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],shade:.8,uv:[2,1]},{dir:[-1,0,0],corners:[[0,0,0],[0,1,0],[0,1,1],[0,0,1]],shade:.7,uv:[2,1]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.85,uv:[0,1]},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],shade:.65,uv:[0,1]}],rn=16,ts=16,Ca=[Xn,os,qn,Os,Br,Bs,hs,zr,zs,Mn,Fe,Ie,yn,un,tn,en,Sn,pn,Hs,ye,Ci,$n,Ye,Rn,Ii,Hr,Ka,Za,ja,Ja,Qa,Gr];let Co=null;function _h(){if(Co)return Co;const i=document.createElement("canvas");i.width=i.height=ts*rn;const t=i.getContext("2d"),e=new tc(48879),n={};Ca.forEach((o,a)=>n[o]=a);const s=o=>Math.max(0,Math.min(1,o)),r=o=>{const a=n[o],c=a%ts*rn,l=(a/ts|0)*rn,[d,h,f]=Yn[o].color,u=(_,v=1,w=0,A=0,R=0)=>`rgba(${Math.round(s(d+_+w)*255)},${Math.round(s(h+_+A)*255)},${Math.round(s(f+_+R)*255)},${v})`,m=(_,v,w)=>{t.fillStyle=w,t.fillRect(c+_,l+v,1,1)},x=_=>{t.fillStyle=_,t.fillRect(c,l,rn,rn)},g=_=>(e.next()-.5)*_,p=(_,v)=>{for(let w=0;w<_;w++)m(e.int(0,15),e.int(0,15),u(g(v)))},T=(_,v)=>{let w=e.int(1,13),A=e.int(1,13);for(let R=0;R<_;R++)m(w,A,u(g(v)-.15)),w+=e.int(-1,1),A+=e.int(0,1),w=Math.max(0,Math.min(15,w)),A=Math.max(0,Math.min(15,A))};switch(o){case Xn:x(u(0)),p(50,.14);break;case os:x(u(0)),p(30,.1);for(const _ of[3,8,12])for(let v=0;v<16;v++)e.next()>.25&&m(v,_+v%2,u(-.12));break;case qn:x(u(g(.08))),p(40,.12),T(9,.05),T(7,.05);break;case Os:x(u(-.04));for(let _=0;_<14;_++){const v=e.int(1,14),w=e.int(1,14);m(v,w,u(.12)),m(v+1,w,u(.05)),m(v,w+1,u(-.15)),m(v-1,w,u(-.1))}break;case Br:x(u(0)),p(70,.22);break;case Bs:x(u(.04)),p(25,.08);for(let _=2;_<16;_+=5)for(let v=0;v<16;v++)e.next()>.4&&m(v,_+(v%3===2?1:0),u(-.12));break;case hs:x(u(0));for(let _=0;_<16;_++)for(let v=0;v<16;v++)m(_,v,u(g(.16)+Math.sin(v*.9+_)*.03));m(5,6,u(-.2)),m(6,6,u(-.25)),m(5,7,u(-.15));break;case zr:x(u(0,.16));for(let _=0;_<16;_++)m(_,0,u(.12,.4)),m(_,15,u(.12,.4)),m(0,_,u(.12,.4)),m(15,_,u(.12,.4));for(let _=2;_<8;_++)m(_,_+2,u(.3,.4));break;case zs:x(u(0,.26));for(let _=0;_<16;_++)m(_,0,u(.1,.55)),m(_,15,u(.1,.55)),m(0,_,u(.1,.55)),m(15,_,u(.1,.55)),m(8,_,u(.06,.5)),m(_,8,u(.06,.5));break;case Mn:x(u(0));for(let _=0;_<16;_++)for(let v=0;v<16;v++)m(v,_,u(-_*.006+g(.05)));for(let _=0;_<16;_++)m(_,10,u(-.22));for(const _ of[1,5,9,13])m(_,9,u(.18)),m(_,11,u(.12));break;case Fe:x(u(-.03)),p(12,.06);for(let _=0;_<16;_++)m(_,0,u(-.22)),m(_,15,u(-.22)),m(0,_,u(-.22)),m(15,_,u(-.22));t.strokeStyle=u(.08),t.strokeRect(c+3.5,l+2.5,8,10);for(let _=7;_<=9;_++)m(12,_,u(.3));break;case Ie:x(u(-.03)),p(12,.06);for(let _=0;_<16;_++)m(_,0,u(-.22)),m(_,15,u(-.22)),m(0,_,u(-.22)),m(15,_,u(-.22));for(let _=4;_<=11;_++)for(let v=5;v<=10;v++)m(v,_,u(-.3,1,-.1,-.02,.06));t.strokeStyle=u(.14),t.strokeRect(c+4.5,l+3.5,7,9);break;case ye:for(let _=0;_<16;_++)m(0,_,u(-.1,.9)),m(1,_,u(.05,.85)),m(2,_,u(-.15,.7));m(1,7,u(.3,.9)),m(1,8,u(.3,.9));break;case yn:x(u(-.25));for(let _=5;_<=10;_++)for(let v=5;v<=10;v++)m(v,_,u(_>5&&_<10&&v>5&&v<10?.38:.2));for(let _=4;_<=11;_++)m(_,4,u(-.15)),m(_,11,u(-.15));break;case un:x(u(0));for(let _=0;_<16;_++)for(let v=0;v<16;v++)m(v,_,u((_%3===0?-.06:.03)+g(.05)));for(const[_,v]of[[2,2],[13,2],[2,13],[13,13]])m(_,v,u(.2));break;case tn:x(u(-.25)),p(10,.08);for(let _=-3;_<=3;_++){const v=3-Math.abs(_);for(let w=-v;w<=v;w++)m(8+w,8+_,u(_===0?0:.05,1))}m(8,7,u(.3,1)),m(7,8,u(.2,1));break;case en:x(u(0)),p(14,.08);for(let _=0;_<16;_++)m(_,0,u(-.28)),m(_,1,u(.12)),m(_,5,u(-.22));for(let _=0;_<16;_++)for(let v=6;v<16;v++)m(_,v,u(-.12+(v%4===0?-.08:0)+g(.05)));for(let _=3;_<=12;_++)m(_,3,"rgba(150,156,168,1)");m(2,3,"rgba(90,64,40,1)"),m(2,4,"rgba(90,64,40,1)");for(let _=8;_<=11;_++)m(_,2,"rgba(110,80,50,1)");m(11,2,"rgba(150,156,168,1)"),m(12,2,"rgba(150,156,168,1)"),m(11,3,"rgba(150,156,168,1)"),m(12,3,"rgba(150,156,168,1)");break;case Rn:x(u(-.18)),p(10,.06);for(const _ of[1,2,13,14])for(let v=0;v<16;v++)m(_,v,u(.1));for(let _=3;_<=8;_++)for(let v=4;v<=11;v++)m(v,_,u(.06+g(.04)));for(let _=4;_<=11;_++)m(_,3,u(-.3)),m(_,8,u(-.3));m(7,5,"rgba(190,190,190,1)"),m(8,5,"rgba(190,190,190,1)");for(let _=3;_<=12;_++)m(_,12,u(.12));for(let _=3;_<=12;_++)m(_,13,u(-.25));break;case Sn:x(u(-.1));for(let _=0;_<16;_+=2)m(_,13,u(.15,1,.02,-.02,0)),m(_+1,14,u(.08));for(let _=2;_<12;_++)m(_,14-_+2,u(.05,1,-.1,-.15,-.25)),m(_,_-1,u(0,1,-.12,-.18,-.3));for(let _=5;_<=10;_++)for(let v=6;v<=9;v++)m(v,_,u(_<8?.3:.18,1,.25,-.05,-.3));m(7,6,u(.45,1,.3,.1,-.25)),m(8,5,u(.4,1,.25,.05,-.25));break;case Hr:case Ka:case Za:case ja:case Ja:case Qa:case Gr:case pn:x(u(0,.72));for(const _ of[2,6,10,14])for(let v=0;v<16;v++)e.next()>.45&&m(v,_+(v%4<2?0:1),u(.15,.8));p(10,.08);break;case Hs:x(u(g(.06)));for(const _ of[3,7,11])for(let v=0;v<16;v++)m(v,_,u(-.18));for(let _=0,v=0;v<16;v+=4,_++)for(let w=_%2*4;w<16;w+=8)for(let A=v;A<v+3;A++)m(w,A,u(-.15));break;case Ci:x(u(-.35,1,.05,0,.1));for(let _=0;_<24;_++)m(e.int(0,15),e.int(0,15),u(-.25,1,.1,0,.18));for(let _=4;_<=11;_++)for(let v=4;v<=11;v++){const w=Math.max(Math.abs(_-7.5),Math.abs(v-7.5));w>=3.5?m(_,v,u(.12,1,.55,.15,.85)):m(_,v,u(.3+(3-w)*.15,1,.75,.3,1))}break;case $n:x(u(-.08)),p(10,.05);for(const _ of[1,3,5])for(let v=2;v<=13;v++)m(v,_,u(-.25));for(let _=4;_<=11;_++)for(let v=7;v<=14;v++){const w=Math.max(Math.abs(_-7.5),Math.abs(v-10.5));w>=3.2?m(_,v,u(.12)):m(_,v,u(.22+(3-w)*.1,1,-.05,.15,.2))}break;case Ii:x(u(0)),p(36,.1);for(const _ of[2,7,12])for(let v=0;v<16;v++)m(_,v,u(-.14));for(const[_,v]of[[4,3],[9,5],[6,8],[11,10],[3,13],[8,14]])m(_,v,u(.22)),m(_+1,v,u(-.2)),m(_,v+1,u(-.2));m(13,1,"rgba(214,74,130,1)"),m(1,6,"rgba(198,58,114,1)"),m(5,11,"rgba(214,74,130,1)");break;case Ye:x(u(-.02)),p(18,.07);for(let _=0;_<16;_++)m(_,0,u(-.28)),m(_,7,u(-.24)),m(_,15,u(-.3));for(let _=0;_<16;_++)m(_,4,"rgba(148,154,166,1)"),m(_,5,"rgba(120,126,138,1)");for(let _=2;_<5;_++)for(const v of[7,8])m(v,_,"rgba(200,205,215,1)");m(7,6,"rgba(40,42,48,1)"),m(8,6,"rgba(40,42,48,1)");break}};for(const o of Ca)r(o);return Co=i,i}function kg(){const i=new oh(_h());return i.flipY=!1,i.magFilter=i.minFilter=on,i.generateMipmaps=!1,i.colorSpace=$e,i}const vh=[];Ca.forEach((i,t)=>vh[i]=t);const xr=ts*rn,Ia=i=>{const t=vh[i]??0;return[t%ts*rn,(t/ts|0)*rn]};class Og{scene=new gd;camera;three;chunkMeshes=new Map;group=new fn;entityGroup=new fn;sun;hemi;stars;sunDisc;moonDisc;highlight;renderDistance=7;atlas=kg();matOpaque=new bn({map:this.atlas,vertexColors:!0,side:Ue});matEmissive=new Mi({map:this.atlas,vertexColors:!0,side:Ue});matTrans=new bn({map:this.atlas,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ue});torch;dynLights=[];constructor(t){this.three=new pg({antialias:!1}),this.three.setPixelRatio(Math.min(devicePixelRatio,2)),this.three.setSize(innerWidth,innerHeight),t.appendChild(this.three.domElement),this.camera=new nn(75,innerWidth/innerHeight,.05,1200),this.scene.add(this.group,this.entityGroup,this.camera),this.torch=new jc(16765600,.4,17,1.4),this.torch.position.set(.25,-.15,.1),this.camera.add(this.torch),this.sun=new Cd(16777215,1),this.hemi=new Td(12571878,9073749,.55),this.scene.add(this.sun,this.hemi),this.scene.fog=new Va(14207392,40,this.renderDistance*Tt);const e=new Xe,n=[];for(let r=0;r<500;r++){const o=Math.random()*Math.PI*2,a=Math.acos(Math.random()*2-1);n.push(Math.sin(a)*Math.cos(o)*400,Math.abs(Math.cos(a))*400,Math.sin(a)*Math.sin(o)*400)}e.setAttribute("position",new _e(n,3)),this.stars=new Sd(e,new rh({color:16777215,size:1.6,transparent:!0,opacity:0,fog:!1})),this.scene.add(this.stars),this.sunDisc=new Ne(new Ur(24,24),new Mi({color:16771504,fog:!1,side:Ue,toneMapped:!1})),this.moonDisc=new Ne(new Ur(15,24),new Mi({color:14213877,fog:!1,side:Ue,toneMapped:!1})),this.scene.add(this.sunDisc,this.moonDisc);const s=new oi(1.002,1.002,1.002);this.highlight=new yd(new Ed(s),new sh({color:0})),this.highlight.visible=!1,this.scene.add(this.highlight),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.three.setSize(innerWidth,innerHeight)})}setQuality(t){this.three.setPixelRatio(t==="low"?.75:t==="med"?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,2))}canvasEl(){return this.three.domElement}resetChunkMeshes(){for(const t of this.chunkMeshes.values())for(const e of t)this.group.remove(e),e.geometry.dispose();this.chunkMeshes.clear()}addPointLight(t,e,n,s){if(this.dynLights.length>=12||this.dynLights.some(o=>o.x===t&&o.y===e&&o.z===n))return;const r=new jc(s==="lamp"?16773296:s==="fire"?16745280:9427199,s==="lamp"?.9:s==="fire"?1.1:.8,s==="lamp"?12:s==="fire"?9:10,1.3);r.position.set(t+.5,e+.6,n+.5),this.scene.add(r),this.dynLights.push({x:t,y:e,z:n,light:r,flame:s==="fire"})}removePointLight(t,e,n){const s=this.dynLights.findIndex(r=>r.x===t&&r.y===e&&r.z===n);s<0||(this.scene.remove(this.dynLights[s].light),this.dynLights.splice(s,1))}dispose(){this.resetChunkMeshes();for(const t of this.dynLights)this.scene.remove(t.light);this.dynLights.length=0,this.three.dispose(),this.three.domElement.remove()}keyframe(t){const e=(t-.25)*Math.PI*2,n=Math.sin(e),s=si.clamp(n*2.2,0,1),r=si.clamp(1-Math.abs(n)*5,0,1),o=new Gt(660006),a=new Gt(13201213),c=new Gt(12570592),l=o.clone().lerp(c,s);r>0&&l.lerp(a,r*.7);const d=new Gt(16767392).lerp(new Gt(16743231),r);return{sky:l,sunColor:d,sunElev:n,sunI:Math.max(.06,n*1.15)}}updateSky(t,e){const n=t%sn/sn,s=this.keyframe(n);this.scene.background=s.sky,this.scene.fog.color.copy(s.sky),this.scene.fog.far=this.renderDistance*Tt*.98,this.sun.color.copy(s.sunColor),this.sun.intensity=s.sunI,s.sunElev<0&&(this.sun.color.setHex(10335464),this.sun.intensity=.28),this.sun.position.set(e.x+Math.cos((n-.25)*Math.PI*2)*100,e.y+s.sunElev*100,e.z+40),this.hemi.intensity=.22+s.sunI*.35,this.stars.material.opacity=Math.max(0,1-s.sunI*3),this.stars.position.set(e.x,e.y,e.z);const r=(n-.25)*Math.PI*2,o=430;this.sunDisc.position.set(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,e.z+o*.4),this.moonDisc.position.set(e.x-Math.cos(r)*o,e.y-Math.sin(r)*o,e.z-o*.4),this.sunDisc.lookAt(this.camera.position),this.moonDisc.lookAt(this.camera.position),this.sunDisc.visible=Math.sin(r)>-.12,this.moonDisc.visible=Math.sin(r)<.12,this.torch.intensity=.12+(1-Math.min(1,s.sunI))*.85;for(const a of this.dynLights)a.flame&&(a.light.intensity=.9+gh(t*5.3+a.x*3.1+a.z,7)*.45);return s}setHighlight(t){if(!t){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5)}rebuildDirty(t){let e=3;for(const n of t.dirty){if(e<=0)break;this.buildChunk(t,n),t.dirty.delete(n),e--}}ensureChunks(t,e,n){for(let s=-this.renderDistance;s<=this.renderDistance;s++)for(let r=-this.renderDistance;r<=this.renderDistance;r++){const o=Ss(e+s,n+r);this.chunkMeshes.has(o)||t.markDirty(e+s,n+r)}}buildChunk(t,e){const[n,s]=e.split(",").map(Number),r=t.chunk(n,s),o=[],a=[],c=[],l=[],d=[],h=[],f=[],u=[],m=[],x=[],g=[],p=[];for(let w=0;w<Tt;w++)for(let A=0;A<Tt;A++)for(let R=0;R<Ee;R++){const D=r[(w*Tt+A)*Ee+R];if(D===Jt)continue;if(D===Fe||D===Ie||D===ye){this.emitDoor(o,a,c,l,t,w,R,A,n*Tt,s*Tt,D);continue}const E=Yn[D],y=E.emissive,C=E.transparent,U=C?m:y?d:o,H=C?x:y?h:a,q=C?g:y?f:c,V=C?p:y?u:l,[G,Y]=Ia(D);for(const O of Fg){const it=w+O.dir[0],at=R+O.dir[1],ut=A+O.dir[2];if(!Ig(t,n*Tt+it,at,s*Tt+ut,D))continue;const At=U.length/3,Yt=y?1:O.shade;for(const te of O.corners)U.push(w+te[0],R+te[1],A+te[2]),H.push(Yt,Yt,Yt),V.push((G+.5+te[O.uv[0]]*(rn-1))/xr,(Y+.5+te[O.uv[1]]*(rn-1))/xr);q.push(At,At+1,At+2,At,At+2,At+3)}}const T=this.chunkMeshes.get(e);if(T)for(const w of T)this.group.remove(w),w.geometry.dispose();const _=[],v=(w,A,R,D,E)=>{if(w.length===0)return;const y=new Xe;y.setAttribute("position",new _e(w,3)),y.setAttribute("color",new _e(A,3)),y.setAttribute("uv",new _e(D,2)),y.setIndex(R),y.computeVertexNormals();const C=new Ne(y,E);C.position.set(n*Tt,0,s*Tt),this.group.add(C),_.push(C)};v(o,a,c,l,this.matOpaque),v(d,h,f,u,this.matEmissive),v(m,x,g,p,this.matTrans),this.chunkMeshes.set(e,_)}emitDoor(t,e,n,s,r,o,a,c,l,d,h){const f=l+o,u=d+c,m=h===Ie||h===ye&&r.get(f,a-1,u)===ye,x=Ia(m?Ie:Fe),g=h===ye,T=!(ze(r.get(f-1,a,u))||ze(r.get(f+1,a,u)))&&(ze(r.get(f,a,u-1))||ze(r.get(f,a,u+1))),_=T?!ze(r.get(f-1,a,u)):!ze(r.get(f,a,u-1)),v=T?!ze(r.get(f+1,a,u)):!ze(r.get(f,a,u+1)),w=f+u&1;let A,R;w&&v?(A=1,R=1):!w&&_?(A=0,R=-1):v?(A=1,R=1):(A=0,R=-1);const D=r.doorSwing.get(f+","+u);D&&(R=D);const E=.04,y=.96,C=A?.84:.02,U=A?.98:.16,H=E,q=A?.98:.02,V=(O,it,at)=>{const ut=t.length/3;for(let At=0;At<4;At++){let[Yt,te,$t]=O[At];if(g){const $=Yt-H,Z=$t-q;Yt=H-R*Z,$t=q+R*$}t.push(T?o+$t:o+Yt,a+te,T?c+Yt:c+$t),e.push(at,at,at),s.push((x[0]+.5+it[At][0]*(rn-1))/xr,(x[1]+.5+it[At][1]*(rn-1))/xr)}n.push(ut,ut+1,ut+2,ut,ut+2,ut+3)},G=O=>(O-E)/(y-E),Y=O=>(O-C)/(U-C);V([[E,0,U],[y,0,U],[y,1,U],[E,1,U]],[[G(E),0],[G(y),0],[G(y),1],[G(E),1]],.85),V([[E,0,C],[y,0,C],[y,1,C],[E,1,C]],[[G(y),0],[G(E),0],[G(E),1],[G(y),1]],.7),V([[y,0,C],[y,0,U],[y,1,U],[y,1,C]],[[Y(C),0],[Y(U),0],[Y(U),1],[Y(C),1]],.6),V([[E,0,C],[E,0,U],[E,1,U],[E,1,C]],[[Y(U),0],[Y(C),0],[Y(C),1],[Y(U),1]],.6),V([[E,1,C],[y,1,C],[y,1,U],[E,1,U]],[[G(E),Y(C)],[G(y),Y(C)],[G(y),Y(U)],[G(E),Y(U)]],1),V([[E,0,C],[y,0,C],[y,0,U],[E,0,U]],[[G(E),Y(U)],[G(y),Y(U)],[G(y),Y(C)],[G(E),Y(C)]],.45)}addEntityMesh(t,e,n,s=.35){const r=new Ne(new oi(s,s,s),new bn({color:n}));return r.position.set(...e),r.userData.eid=t,this.entityGroup.add(r),r}removeEntityMesh(t){const e=this.entityGroup.children.find(n=>n.userData.eid===t);e&&(this.entityGroup.remove(e),e.geometry.dispose())}moveEntityMesh(t,e){const n=this.entityGroup.children.find(s=>s.userData.eid===t);n&&n.position.set(...e)}entityMesh(t){return this.entityGroup.children.find(e=>e.userData.eid===t)}addSceneObject(t){this.entityGroup.add(t)}removeSceneObject(t){this.entityGroup.remove(t)}nextEid=1e6;addBeam(t,e,n,s,r=14){const o=this.nextEid++,a=new Ne(new Xa(.14,.28,r,6,1,!0),new Mi({color:s,transparent:!0,opacity:.4,depthWrite:!1,side:Ue,fog:!1}));return a.position.set(t,e+r/2,n),a.userData.eid=o,this.entityGroup.add(a),o}addGroundRing(t,e,n,s,r=1.1){const o=this.nextEid++,a=new Ne(new qa(r*.55,r,24),new Mi({color:s,transparent:!0,opacity:.7,side:Ue,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(t,e+.06,n),a.userData.eid=o,this.entityGroup.add(a),o}render(){this.three.render(this.scene,this.camera)}}const jt=i=>i,Bg=(i,t)=>`${i.charAt(0).toUpperCase()+i.slice(1)} (tier ${t}). Higher tiers break faster and unlock harder blocks.`,Tn=(i,t,e,n)=>jt({id:`${e}_${i}`,name:`${e.charAt(0).toUpperCase()+e.slice(1)} ${i}`,desc:Bg(i,t),w:1,h:2,mass:1.2+t*.8,tool:{type:i,tier:t},color:n}),zg=[jt({id:"sand",name:"Sand",desc:"Loose desert sand. Smelt it for glass.",w:1,h:1,mass:.4,block:Xn,color:"#d4b880"}),jt({id:"sandstone",name:"Sandstone",desc:"Compacted sand. Decent building stone.",w:1,h:1,mass:.8,block:os,color:"#c2a670"}),jt({id:"rock",name:"Rock",desc:"Hard desert rock. Needs a pickaxe.",w:1,h:1,mass:1,block:qn,color:"#736d69"}),jt({id:"gravel",name:"Gravel",desc:"Loose stones.",w:1,h:1,mass:.5,block:Os,color:"#8d8680"}),jt({id:"dirt",name:"Dirt",desc:"Dry desert soil.",w:1,h:1,mass:.5,block:Br,color:"#6b5238"}),jt({id:"salt",name:"Salt",desc:"Crust from the salt flats. Bitter, useful.",w:1,h:1,mass:.4,block:Bs,color:"#d9dbd6"}),jt({id:"deadwood",name:"Dead Wood",desc:"Bone-dry wood from a dead tree. Fuel and tools.",w:1,h:1,mass:.4,block:hs,color:"#61492f"}),jt({id:"glass",name:"Glass",desc:"Lets light in and heat through. Caution.",w:1,h:1,mass:.6,block:zr,color:"#a6cfe6"}),jt({id:"insglass",name:"Insulating Glass",desc:"Transparent, and heat cannot pass. The wreck's cockpit is made of it. Craftable with a Catalyst.",w:1,h:1,mass:.9,block:zs,color:"#8cc0a0"}),jt({id:"hull",name:"Hull Plating",desc:"The ship's insulating wall block. Your best shelter material.",w:1,h:1,mass:2,block:Mn,color:"#858a99"}),jt({id:"door",name:"Door",desc:"Insulates exactly like hull plating while closed. Open it and the shelter leaks.",w:1,h:2,mass:3,block:Fe,color:"#999fa8"}),jt({id:"lamp",name:"Lamp",desc:"Glows in the dark.",w:1,h:1,mass:.5,block:yn,color:"#fff0a0"}),jt({id:"metal",name:"Metal Rod",desc:"Salvaged from the wreck. The backbone of every tool.",w:1,h:1,mass:1,block:un,color:"#9aa0aa"}),jt({id:"beacon",name:"Save Beacon",desc:"Place to permanently save. Death respawns at the newest intact beacon; beacons can never be picked back up.",w:1,h:2,mass:4,block:tn,color:"#66e5f0"}),jt({id:"bench",name:"Crafting Bench",desc:"Unlocks the full crafting list. Stands two blocks wide in the world.",w:1,h:2,mass:6,block:en,color:"#806647"}),jt({id:"campfire",name:"Campfire",desc:"Burns wood. Smelts sand into glass.",w:1,h:2,mass:3,block:Sn,color:"#e67333"}),jt({id:"regulator",name:"Heat Regulator",desc:"Holds a sealed room at comfortable body temperature — 100 open cells per Regulator, capacity stacks. Sealed means sealed — an open door disables it.",w:1,h:1,mass:2.5,block:$n,color:"#59bfcc"}),jt({id:"adobe",name:"Adobe Brick",desc:"Baked town mud. Warm, solid.",w:1,h:1,mass:.9,block:Hs,color:"#b3956b"}),jt({id:"chest",name:"Supply Chest",desc:"Stores gear in its own grid. Chests placed touching (orthogonally) merge into one bigger grid — 3×3 each, up to 3 wide, then taller.",w:1,h:1,mass:5,block:Ye,color:"#8a6d3b"}),jt({id:"canister_full",name:"Water Canister (full)",desc:"Drink to restore 25% Water. Refill at oases or the ship's water station.",w:1,h:2,mass:1,color:"#3f8fe0"}),jt({id:"canister_empty",name:"Water Canister (empty)",desc:"Lighter until you find water.",w:1,h:1,mass:.3,color:"#7fa8cc"}),jt({id:"catalyst",name:"Catalyst",desc:"Rare alien chemistry. Found in Towns and the second wreck. Needed for Insulating Glass (M2 craft chain).",w:1,h:1,mass:.3,color:"#c07fe0"}),jt({id:"engine_core",name:"Engine Core",desc:"The heart of the second wreck. Quest-exclusive — place it within reach of a Save Beacon to finish the Main Quest.",w:1,h:1,mass:6,block:Ci,color:"#c468e8"}),jt({id:"ironrod",name:"Iron Rod",desc:"Iron baked out of desert Rock at a Campfire. Two rods forge one Metal Rod at a Crafting Bench — tools without touching the wreck.",w:1,h:1,mass:1,color:"#b0683f"}),jt({id:"visor",name:"Surveyor's Visor",desc:"A Visor upgrade. Equipped in the Head slot, the HUD marks every Death Cache, Reward Cache and Supply Chest through walls with a beam.",w:1,h:1,mass:.8,equip:"head",color:"#66e5f0"}),Tn("pickaxe",1,"wood","#a8834f"),Tn("pickaxe",2,"stone","#8d8680"),Tn("pickaxe",3,"metal","#9aa0aa"),Tn("shovel",1,"wood","#a8834f"),Tn("shovel",2,"stone","#8d8680"),Tn("shovel",3,"metal","#9aa0aa"),Tn("axe",1,"wood","#a8834f"),Tn("axe",2,"stone","#8d8680"),Tn("axe",3,"metal","#9aa0aa"),Tn("disassembler",1,"metal","#c0c8d8"),jt({id:"sword",name:"Metal Sword",desc:"A forged blade. Hits Desert Snakes and rats far harder than any tool, and reaches farther.",w:1,h:2,mass:2.2,weapon:{reach:4.6,dmg:7},color:"#c9d2dc"}),jt({id:"backpack1",name:"Backpack I",desc:"Equipped in the Backpack slot: inventory grid grows to 4×5, weight limit +20 kg.",w:2,h:2,mass:2,equip:"backpack",color:"#7a5a3a"}),jt({id:"cactus",name:"Cactus",desc:"Tall desert column. Break it for a Prickly Pear and a block you can replant.",w:1,h:2,mass:1.5,block:Ii,color:"#3d8042"}),jt({id:"prickly_pear",name:"Prickly Pear",desc:"Cactus fruit. Eat it: +8 Water, +1 Health.",w:1,h:1,mass:.2,eat:{water:8,health:1},color:"#d64a82"}),jt({id:"snake_skin",name:"Snake Skin",desc:"Tough desert hide. Three of them stitch into Reptile Armour at a Crafting Bench.",w:1,h:2,mass:.6,color:"#b3946a"}),jt({id:"reptile_armor",name:"Reptile Armour",desc:"Equipped in the Body slot: scales shrug off 40% of all damage.",w:2,h:2,mass:3,equip:"body",color:"#8a6f4d"}),jt({id:"rat_raw",name:"Kangaroo Rat (raw)",desc:"Raw meat. Cook it at a Campfire before eating.",w:1,h:1,mass:.8,color:"#a86a5a"}),jt({id:"rat_cooked",name:"Cooked Rat",desc:"Roasted meat. Eat it: +25 Health.",w:1,h:1,mass:.7,eat:{health:25},color:"#c07a3a"})],Ft=Object.fromEntries(zg.map(i=>[i.id,i])),xh={};for(const i of Object.values(Ft))i.block!==void 0&&(xh[i.block]=i.id);xh[Ie]="door";function hn(i){const t=Ft[i.itemId];return i.rot?{w:t.h,h:t.w}:{w:t.w,h:t.h}}class Io{slots=[];w=3;h=4;baseLimit=30;bonusLimit=0;constructor(){this.addItem("canister_full",2)}capacity(){return{w:this.w,h:this.h}}setBackpack(t,e,n){const s=this.slots;this.w=t,this.h=e,this.bonusLimit=n,this.slots=[];for(const r of s)this.addItem(r.itemId,r.count)}weightLimit(){return this.baseLimit+this.bonusLimit}weight(){let t=0;for(const e of this.slots)t+=Ft[e.itemId].mass*e.count;return t}occupied(t,e,n){for(const s of this.slots){if(s===n)continue;const r=hn(s);if(t>=s.x&&t<s.x+r.w&&e>=s.y&&e<s.y+r.h)return s}return null}fits(t,e,n,s,r){if(t<0||e<0||t+n>this.w||e+s>this.h)return!1;for(let o=0;o<s;o++)for(let a=0;a<n;a++)if(this.occupied(t+a,e+o,r))return!1;return!0}move(t,e,n){const s=hn(t);return e===t.x&&n===t.y?!0:this.fits(e,n,s.w,s.h,t)?(t.x=e,t.y=n,!0):!1}rotate(t){const e=hn(t);return e.w===e.h||!this.fits(t.x,t.y,e.h,e.w,t)?!1:(t.rot=!t.rot,!0)}addItem(t,e=1){const n=Ft[t],s=n.w===n.h?[[n.w,n.h,!1]]:[[n.w,n.h,!1],[n.h,n.w,!0]];for(let r=0;r<e;r++){let o=!1;for(const[a,c,l]of s){for(let d=0;d<=this.h-c&&!o;d++)for(let h=0;h<=this.w-a&&!o;h++){let f=!0;for(let u=0;u<c&&f;u++)for(let m=0;m<a&&f;m++)this.occupied(h+m,d+u)&&(f=!1);f&&(this.slots.push(l?{itemId:t,count:1,x:h,y:d,rot:!0}:{itemId:t,count:1,x:h,y:d}),o=!0)}if(o)break}if(!o)return e-r}return 0}removeItem(t,e=1){let n=0;for(let s=this.slots.length-1;s>=0&&n<e;s--){const r=this.slots[s];if(r.itemId!==t)continue;const o=Math.min(r.count,e-n);r.count-=o,n+=o,r.count===0&&this.slots.splice(s,1)}return n}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&(e+=n.count);return e}has(t,e=1){return this.countOf(t)>=e}selected=0;selectedSlot(){return this.slots[this.selected]??null}}const vs={snake:{kind:"snake",name:"Desert Snake",hp:10,speed:1.3,aggroR:5,fleeR:0,biteDmg:6,biteCd:2,hitR:.45,height:.3,drops:[{itemId:"snake_skin",count:1}]},rat:{kind:"rat",name:"Kangaroo Rat",hp:4,speed:2.6,aggroR:0,fleeR:6,biteDmg:0,biteCd:0,hitR:.5,height:.5,drops:[{itemId:"rat_raw",count:1}]}},Hg=new oi(1,1,1);function Gg(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Mh(i){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");i(e,Gg(5370855));const n=new oh(t);return n.magFilter=n.minFilter=on,n.generateMipmaps=!1,n.colorSpace=$e,n}function Vg(){return Mh((i,t)=>{i.fillStyle="#c8a76d",i.fillRect(0,0,64,64);for(let n=0;n<420;n++){const s=.5+(t()-.5)*.22;i.fillStyle=s>.5?"#d4b781":"#b89359",i.fillRect(t()*64|0,t()*64|0,1,1)}const e=[4,16,28,40];for(const n of e){for(let s=0;s<9;s++){const r=5-Math.abs(s-4);i.fillStyle="#6f5230",i.fillRect(32-r,n+s,r*2,1),i.fillStyle="#8a6a3f",i.fillRect(32-r+1,n+s,Math.max(1,r*2-2),1)}i.fillStyle="#a9884f",i.fillRect(10+(t()*4|0),n+3,3,2),i.fillRect(48+(t()*4|0),n+5,3,2)}for(let n=52;n<64;n++)i.fillStyle=n>=56?"#e9dab1":"#d8c494",i.fillRect(0,n,64,1);for(let n=0;n<40;n++)i.fillStyle="#ddcba0",i.fillRect(t()*64|0,52+(t()*12|0),1,1)})}function Wg(){return Mh((i,t)=>{i.fillStyle="#c9a878",i.fillRect(0,0,64,64);for(let e=0;e<700;e++)i.fillStyle=t()>.5?"#ddc295":"#a9854f",i.fillRect(t()*64|0,t()*64|0,1,1);for(let e=0;e<60;e++)i.fillStyle="#8a6a3c",i.fillRect(t()*64|0,t()*48|0,1,2);for(let e=50;e<64;e++)i.fillStyle=e>=54?"#f2ead9":"#e2d4ba",i.fillRect(0,e,64,1);i.fillStyle="#efe6d2",i.beginPath(),i.arc(10,12,8,0,Math.PI*2),i.fill(),i.fillStyle="#6b4e2c",i.fillRect(8,10,4,4)})}let Lo=null,Po=null;function Xg(){return Lo||(Lo={body:new bn({map:Vg()}),ridge:new bn({color:7295536}),eye:new bn({color:1445898})}),Lo}function qg(){return Po||(Po={fur:new bn({map:Wg()}),pale:new bn({color:15260868}),dark:new bn({color:6045731}),pink:new bn({color:14196896})}),Po}function Me(i,t,e,n,s,r,o){const a=new Ne(Hg,n);return a.scale.set(i,t,e),a.position.set(s,r,o),a}function Yg(){const i=Xg(),t=new fn,e=[],n=[],s=[.36,.13,-.1,-.33,-.54,-.72],r=[.26,.27,.26,.23,.18,.12],o=[.22,.23,.22,.2,.16,.11],a=.24;for(let h=0;h<s.length;h++){const f=Math.sin(h*.8)*.05,u=Me(r[h],o[h],a,i.body,f,o[h]/2+.005,s[h]);e.push({mesh:u,bx:f,w:r[h],h:o[h],d:a}),n.push({mesh:Me(r[h]*.3,.02,a*.92,i.ridge,f,o[h]+.008,s[h]),w:r[h]}),t.add(u,n[h].mesh)}const c=new fn;c.position.set(Math.sin(0)*.05,.095+.005,.6);const l=Me(.27,.19,.27,i.body,0,.095,0);return c.add(l),c.add(Me(.035,.035,.03,i.eye,-.115,.14,.11)),c.add(Me(.035,.035,.03,i.eye,.115,.14,.11)),t.add(c),{group:t,animate:(h,f)=>{const u=Math.max(0,Math.min(1,f)),m=.015+.075*u,x=h*(3.2+2.6*u);for(let g=0;g<e.length;g++){const p=e[g],T=Math.sin(x-g*.85)*m;p.mesh.position.x=p.bx+T,p.mesh.rotation.y=-T*1.4;const _=1+Math.sin(h*1.9)*.03*(1-u*.6);p.mesh.scale.set(p.w*_,p.h,p.d);const v=n[g];v.mesh.position.x=p.mesh.position.x,v.mesh.rotation.y=p.mesh.rotation.y,v.mesh.scale.x=v.w*.3*_}c.position.x=Math.sin(x+.85)*m*.5,c.rotation.y=Math.sin(h*(2.2+2.4*u))*(.06+.14*u)}}}function $g(){const i=qg(),t=new fn,e=new fn;t.add(e);const n=Me(.22,.26,.34,i.fur,0,.26,-.02);e.add(n);const s=new fn;s.position.set(0,.31,.19),s.add(Me(.15,.14,.15,i.fur,0,0,.05)),s.add(Me(.045,.035,.04,i.pink,0,-.02,.13)),s.add(Me(.028,.028,.02,i.dark,-.062,.03,.1)),s.add(Me(.028,.028,.02,i.dark,.062,.03,.1)),e.add(s);const r=Me(.05,.12,.025,i.fur,-.075,.41,.16),o=Me(.05,.12,.025,i.fur,.075,.41,.16);r.rotation.z=.15,o.rotation.z=-.15,e.add(r,o);const a=Me(.09,.14,.11,i.fur,-.12,.14,-.06),c=Me(.09,.14,.11,i.fur,.12,.14,-.06),l=Me(.07,.05,.22,i.pale,-.13,.028,.02),d=Me(.07,.05,.22,i.pale,.13,.028,.02);e.add(a,c,l,d),e.add(Me(.035,.035,.07,i.pale,-.08,.11,.15)),e.add(Me(.035,.035,.07,i.pale,.08,.11,.15));const h=new fn;return h.position.set(0,.16,-.19),h.add(Me(.04,.04,.24,i.fur,0,0,-.12)),h.add(Me(.032,.032,.22,i.fur,0,-.045,-.34)),h.add(Me(.07,.055,.11,i.dark,0,-.075,-.5)),e.add(h),{group:t,animate:(u,m)=>{const x=Math.max(0,Math.min(1,m)),g=Math.abs(Math.sin(u*(2.6+2.4*x)));e.position.y=g*.13*x+Math.sin(u*1.7)*.004,n.scale.y=.26*(1+Math.sin(u*1.9)*.03*(1-x)),l.rotation.x=d.rotation.x=-.55*g*x,a.rotation.x=c.rotation.x=-.35*g*x,h.rotation.y=Math.sin(u*(1.8+3.4*x))*(.1+.3*x),h.rotation.x=-.12-.18*x+Math.sin(u*(2.6+2.4*x))*.06*x;const p=Math.max(0,Math.sin(u*6.3))**8*(1-x);r.rotation.z=.15+p*.25,o.rotation.z=-.15-Math.max(0,Math.sin(u*6.3+2.1))**8*(1-x)*.25,s.rotation.x=-.1*g*x+Math.sin(u*1.3)*.03*(1-x)}}}function Kg(i){return i==="snake"?Yg():$g()}const yh=[{out:"bench",count:1,needs:{deadwood:4},bench:!1},{out:"campfire",count:1,needs:{rock:6,deadwood:2},bench:!1},{out:"wood_pickaxe",count:1,needs:{deadwood:3},bench:!1},{out:"wood_shovel",count:1,needs:{deadwood:3},bench:!1},{out:"wood_axe",count:1,needs:{deadwood:3},bench:!1},{out:"stone_pickaxe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_shovel",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"stone_axe",count:1,needs:{rock:3,deadwood:2},bench:!0},{out:"metal_pickaxe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_shovel",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_axe",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"metal_disassembler",count:1,needs:{metal:4,rock:2},bench:!0},{out:"sword",count:1,needs:{metal:2,deadwood:1},bench:!0},{out:"door",count:1,needs:{metal:2,deadwood:2},bench:!0},{out:"hull",count:2,needs:{metal:2,sand:2},bench:!0},{out:"lamp",count:1,needs:{metal:1,glass:1,salt:2},bench:!0},{out:"beacon",count:1,needs:{metal:4,sandstone:6,lamp:1},bench:!0},{out:"backpack1",count:1,needs:{deadwood:6,metal:2},bench:!0},{out:"insglass",count:2,needs:{sand:2,catalyst:1,metal:1},bench:!0},{out:"regulator",count:1,needs:{metal:4,glass:1,salt:2},bench:!0},{out:"chest",count:1,needs:{deadwood:6,metal:1},bench:!0},{out:"metal",count:1,needs:{ironrod:2},bench:!0},{out:"visor",count:1,needs:{metal:2,glass:1,salt:2},bench:!0},{out:"reptile_armor",count:1,needs:{snake_skin:3},bench:!0}],Sh=[{in:"sand",out:"glass"},{in:"dirt",out:"adobe"},{in:"sandstone",out:"rock"},{in:"rock",out:"ironrod"},{in:"rat_raw",out:"rat_cooked"}];function Eh(i,t){return Object.entries(t.needs).every(([e,n])=>i.has(e,n))}function Zg(i,t){if(!Eh(i,t))return null;for(const[e,n]of Object.entries(t.needs))i.removeItem(e,n);return i.addItem(t.out,t.count)}const Ps=[{id:"air",kind:"sky",title:"Getting Air",desc:"Step out of the wreck and stand under open sky.",goal:1},{id:"salvage",kind:"mine",title:"Salvage Rights",desc:"Break blocks by hand to strip the desert for parts.",goal:20,reward:{item:"metal",n:3}},{id:"oasis",kind:"oasis",title:"Oases of the Dune",desc:"Find an oasis — open water on the horizon.",goal:1,reward:{item:"canister_empty",n:2}},{id:"bearer",kind:"water_home",title:"Water Bearer",desc:"Carry a full Water Canister within reach of a Save Beacon.",goal:1,reward:{item:"backpack1",n:1}},{id:"tool",kind:"tool",title:"Handy Work",desc:"Craft any tool at a Crafting Bench.",goal:1,reward:{item:"metal",n:4}},{id:"wreck",kind:"wreck",title:"The Second Wreck",desc:"Your visor flagged another impact site far out in the dunes. Reach it.",goal:1,reward:{item:"catalyst",n:1}},{id:"core",kind:"core",title:"Heart of the Wreck",desc:"Break the glowing Engine Core free from the second wreck.",goal:1,reward:{item:"metal",n:4}},{id:"finish",kind:"finish",title:"Escape Vector",desc:"Carry the Engine Core home and set it within reach of a Save Beacon.",goal:1}];function jg(){return{i:0,p:Ps.map(()=>0)}}function Jg(i){const t=jg();if(!i)return t;t.i=Math.max(0,Math.min(Ps.length,i.i|0));for(let e=0;e<t.p.length;e++){const n=Ps[e].goal;t.p[e]=Math.max(0,Math.min(n,(i.p&&i.p[e])|0))}return t}function bs(i){return i.i<Ps.length?Ps[i.i]:null}function Qg(i,t,e=1){const n=bs(i);if(!n||n.kind!==t||i.p[i.i]>=n.goal||(i.p[i.i]=Math.min(n.goal,i.p[i.i]+e),i.p[i.i]<n.goal))return null;const s=n;return i.i++,s}const t_=[{t0:0,t1:5.5,from:[26,38.5,15],to:[11,33.5,5],look:[-1,31.5,0]},{t0:5.5,t1:9.5,from:[11,33.5,5],to:[-9.5,31.9,0],look:[-6,31.7,0]},{t0:9.5,t1:13.5,from:[-9.5,31.9,0],to:[-.5,32.3,1.5],look:[-1.5,31.4,-2.5],openDoor:{t:10.2,x:-6,y:31,z:0}},{t0:13.5,t1:16.5,from:[-.5,32.3,1.5],to:[.5,32.62,2.5],look:[2.6,31.5,-1.5]}],xs=[{t:"Getting Out",cap:"The hull is what kept you breathing. Its one working exit is the stern hatch — follow the cyan beam, look at the door, press <b>E</b>, step outside.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},goal:"door",hold:90},{t:"The Furnace",cap:"Midday. Under open sky your body climbs toward 50 °C — watch the <b>TEMP</b> bar slide out of its white band. Walls, doors and shade push it back down.",guide:{name:"Stern Hatch",x:-6,y:31,z:0},enter:i=>i.setClock(.56),poll:i=>i.survival.body>37.6,hold:28},{t:"Sweat Surge",cap:"When the climb gets dangerous, press <b>X</b>: a Sweat Surge spends 10 water to force your body cool.",goal:"surge",hold:22},{t:"Water",cap:"Back inside — the ship's tank sits in the aft-left compartment. Look into the pool and press <b>E</b>; an empty canister is already in your pack.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"refill",enter:i=>{i.inv.has("canister_empty")||i.giveOrDrop("canister_empty",1)},hold:75},{t:"Drink",cap:"The full canister is already in your hands — press <b>Q</b> to drink: +25 water, and the cold water chases off a little heat. Q <i>uses whatever you hold</i>: food works the same way. Water is the desert's first tax — budget every trip around it.",guide:{name:"Water Tank",x:-4,y:30,z:4},goal:"drink",hold:30,enter:i=>i.selectHeld("canister_full")},{t:"Craft",cap:"The wreck's Crafting Bench stands in the hall — press <b>E</b> at it and make a Wood shovel; there is dead wood in your pack.",guide:{name:"Crafting Bench",x:0,y:31,z:-3},goal:"craft",enter:i=>i.giveOrDrop("deadwood",4),hold:60},{t:"Mine",cap:"Select the shovel on the bottom hotbar — click it, scroll, or press its number — then hold <b>Left-click</b> on sand until it breaks. Rock outcrops need a pickaxe; you will craft one soon enough.",goal:"mine",hold:45},{t:"Save Points",cap:"Last lesson: a Save Beacon waits in the aft cabin. Press <b>E</b> at it. Beacons are the only save points and the only respawns — craft more and set one before every long trip. After this, the desert is yours.",guide:{name:"Save Beacon",x:-4,y:31,z:-1},goal:"save",hold:30}];class e_{constructor(t){this.g=t,document.getElementById("btn-tut-skip").onclick=()=>this.finish(),this.card.classList.remove("hidden"),this.setCard("Crash Landing","Something gave out over the dunes. What is left is this wreck — and inside it, you are still safe.")}step=-1;acc=0;advanceAt=null;ended=!1;card=document.getElementById("tut-card");ttlEl=document.getElementById("tut-title");capEl=document.getElementById("tut-cap");dotsEl=document.getElementById("tut-dots");notify(t){this.step>=0&&this.advanceAt===null&&xs[this.step].goal===t&&(this.advanceAt=this.acc+1.4)}tick(t){if(this.step<0||this.ended)return;this.acc+=t;const e=xs[this.step];this.advanceAt===null?e.poll?.(this.g)?this.advanceAt=this.acc+1.4:this.acc>=e.hold&&this.advance():this.acc>=this.advanceAt&&this.advance()}onCineEnd(){const t=this.g.world;t.get(-6,31,0)===ye&&(t.set(-6,31,0,Fe),t.set(-6,32,0,Ie),t.doorSwing.delete("-6,0")),this.beginStep(0)}advance(){if(this.step+1>=xs.length){this.finish();return}this.beginStep(this.step+1)}beginStep(t){this.step=t,this.acc=0,this.advanceAt=null;const e=xs[t];this.setCard(e.t,e.cap),this.g.tutGuide=e.guide??null,e.enter?.(this.g)}setCard(t,e){this.ttlEl.textContent=t,this.capEl.innerHTML=e,this.dotsEl.textContent=xs.map((n,s)=>s===this.step?"●":s<this.step?"–":"○").join(" "),this.card.classList.remove("pop"),this.card.offsetWidth,this.card.classList.add("pop")}finish(){this.ended||(this.ended=!0,this.card.classList.add("hidden"),this.g.tutGuide=null,this.g.endTutorial())}}const bh="sotf:index",wh="sotf:settings",Th="sotf:best",Al={sens:1,invertY:!1,fov:70,renderDist:6,quality:"med",volume:.67,units:"C",fullscreen:!1,music:!0,uiScale:1};function n_(){try{return{...Al,...JSON.parse(localStorage.getItem(wh)||"{}")}}catch{return{...Al}}}function i_(i){localStorage.setItem(wh,JSON.stringify(i))}function Ds(){return Number(localStorage.getItem(Th)||0)}function Rl(i){i>Ds()&&localStorage.setItem(Th,String(i))}function Vr(){try{return JSON.parse(localStorage.getItem(bh)||"[]")}catch{return[]}}function rc(i){localStorage.setItem(bh,JSON.stringify(i))}function Ah(i,t){const n={id:"w"+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),name:i||t||"world",seedStr:t,updated:Date.now()},s=Vr();return s.unshift(n),rc(s),n}function s_(i){rc(Vr().filter(t=>t.id!==i)),localStorage.removeItem("sotf:w:"+i)}function Rh(i,t){try{localStorage.setItem("sotf:w:"+i.id,JSON.stringify(t));const e=Vr(),n=e.find(s=>s.id===i.id);return n&&(n.updated=Date.now(),rc(e)),!0}catch{return!1}}function Ch(i){try{const t=localStorage.getItem("sotf:w:"+i);return t?JSON.parse(t):null}catch{return null}}function Ih(i,t){const e=new Blob([JSON.stringify({meta:i,run:t})],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${i.name.replace(/[^\w.-]+/g,"_")}.sotfworld.json`,n.click(),URL.revokeObjectURL(n.href)}async function r_(i){const t=JSON.parse(await i.text());if(!t||t.run?.v!==1)throw new Error("Not a Survival of the Fittest world file.");const e=Ah(t.meta?.name??"imported",t.run.seedStr);return Rh(e,t.run),e}const Wt=rn;function Ti(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}const Hn=(i,t,e,n)=>{const[s,r]=Ia(n);i.drawImage(_h(),s,r,Wt,Wt,t,e,Wt,Wt)},Ut=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)},gi=(i,t,e,n,s,r)=>{i.strokeStyle=r,i.lineWidth=1,i.strokeRect(t+.5,e+.5,n-1,s-1)},vn=(i,t,e,n,s,r,o=2)=>{i.strokeStyle=r,i.lineWidth=o,i.beginPath(),i.moveTo(t,e),i.lineTo(n,s),i.stroke()};function Lh(i,t,e,n){const[s,r]=Ti(t*Wt,e*Wt);if(i.includes("_")&&(i.endsWith("pickaxe")||i.endsWith("shovel")||i.endsWith("axe")||i.endsWith("disassembler"))){const a=i.replace(/^(wood|stone|metal)_/,"");return Ut(r,7,16,2,14,"#6b5238"),Ut(r,6,14,4,3,"#4a4a52"),a==="pickaxe"?(vn(r,3,12,13,12,n,2),vn(r,3,12,3,15,n),vn(r,13,12,13,15,n),vn(r,4,9,12,9,"#00000022",1)):a==="shovel"?(Ut(r,5,6,6,7,n),gi(r,5,6,6,7,"#00000044"),vn(r,6,13,6,13,n),vn(r,9,13,9,13,n),vn(r,6,13,7,14,n,1),vn(r,9,13,8,14,n,1)):a==="axe"?(Ut(r,9,7,5,6,n),gi(r,9,7,5,6,"#00000044"),Ut(r,8,8,1,4,n)):(Ut(r,4,7,8,2,n),Ut(r,4,7,2,5,n),Ut(r,10,7,2,5,n),Ut(r,7,11,2,2,"#66e5f0"),Ut(r,6,12,4,1,"#2f97a6")),s}switch(i){case"canister_full":case"canister_empty":{const a=i==="canister_full",c=e*Wt;return Ut(r,6,0,4,3,"#8a98a8"),Ut(r,7,3,2,2,"#8a98a8"),Ut(r,4,5,8,c-7,a?"#2f7fd6":"#3a4750"),gi(r,4,5,8,c-7,"#dfe6ee"),a?(Ut(r,5,10,1,c-13,"#5fa3ea"),Ut(r,4,9,8,1,"#7f2b2b")):(Ut(r,4,14,8,4,"#c8d2da"),Ut(r,6,15,4,2,"#3a4750")),s}case"sword":return Ut(r,8,0,1,1,"#eef3f8"),Ut(r,7,1,3,17,"#c9d2dc"),Ut(r,8,1,1,17,"#eef3f8"),Ut(r,4,18,8,2,"#4a4a52"),Ut(r,7,20,3,9,"#6b5238"),Ut(r,7,22,3,1,"#4a3926"),Ut(r,7,25,3,1,"#4a3926"),Ut(r,6,29,5,2,"#4a4a52"),s;case"ironrod":Ut(r,6,1,3,14,"#8a4f2e"),Ut(r,7,2,1,12,"#d08a52"),r.fillStyle="#5c3319";for(const[a,c]of[[6,3],[8,7],[6,11],[8,13]])r.fillRect(a,c,1,1);return Ut(r,5,1,5,1,"#5c3319"),Ut(r,5,14,5,1,"#5c3319"),s;case"visor":return Ut(r,1,6,14,3,"#2e3a45"),Ut(r,3,4,10,6,"#123c44"),Ut(r,4,5,8,4,"#66e5f0"),Ut(r,5,5,2,1,"#d2f8ff"),gi(r,3,4,10,6,"#c8d2da"),Ut(r,1,5,2,1,"#5a6875"),Ut(r,13,5,2,1,"#5a6875"),s;case"catalyst":return Ut(r,7,3,2,2,"#8898a8"),r.fillStyle="#c07fe0",r.beginPath(),r.arc(8,10,4,0,Math.PI*2),r.fill(),r.strokeStyle="#7a4a9a",r.lineWidth=1,r.beginPath(),r.arc(8,10,4.5,0,Math.PI*2),r.stroke(),r.fillStyle="#e8b8ff",r.fillRect(6,8,2,1),r.fillRect(7,7,1,1),s;case"backpack1":return Ut(r,8,1,3,6,"#5a4229"),Ut(r,21,1,3,6,"#5a4229"),Ut(r,5,7,22,21,"#7a5a3a"),gi(r,5,7,22,21,"#4c3822"),Ut(r,5,7,22,8,"#8a6a48"),gi(r,5,7,22,8,"#4c3822"),Ut(r,13,13,6,3,"#d8b74f"),Ut(r,9,20,14,6,"#6b4d30"),gi(r,9,20,14,6,"#4c3822"),s;case"beacon":return r.fillStyle="#66e5f0",r.globalAlpha=.35,r.beginPath(),r.arc(8,5,6,0,Math.PI*2),r.fill(),r.globalAlpha=1,r.fillStyle="#66e5f0",r.beginPath(),r.arc(8,5,3,0,Math.PI*2),r.fill(),Ut(r,6,5,1,1,"#d2f8ff"),Ut(r,7,8,2,8,"#8a98a8"),Hn(r,0,Wt,tn),s;case"campfire":return vn(r,3,10,12,4,"#61492f",2),vn(r,4,4,13,10,"#61492f",2),vn(r,3,10,12,4,"#7d5f3d",1),Hn(r,0,Wt,Sn),s;case"door":return Hn(r,0,0,Ie),Hn(r,0,Wt,Fe),s;case"bench":return Hn(r,0,0,en),Hn(r,0,Wt,Rn),s}return null}const Mr=new Map;function Rr(i){const t=Mr.get(i);if(t)return t;const e=Ft[i];if(!e)return Mr.set(i,[]),Mr.get(i);let s=Lh(i,e.w,e.h,e.color);if(!s&&e.block!==void 0){const[o,a]=Ti(e.w*Wt,e.h*Wt);for(let c=0;c<e.h;c++)for(let l=0;l<e.w;l++)Hn(a,l*Wt,c*Wt,e.block);s=o}const r=[];if(s){const[o,a]=Ti(Wt,Wt);for(let c=0;c<e.h;c++)for(let l=0;l<e.w;l++)a.clearRect(0,0,Wt,Wt),a.drawImage(s,l*Wt,c*Wt,Wt,Wt,0,0,Wt,Wt),r.push(o.toDataURL())}else{const[o,a]=Ti(Wt,Wt);Ut(a,2,2,Wt-4,Wt-4,e.color),r.push(o.toDataURL())}return Mr.set(i,r),r}function Vn(i,t=0){const e=Ft[i];if(!e)return"";if(e.w===1&&e.h===1)return Rr(i)[0]??"";const[n,s]=Ti(e.w*Wt,e.h*Wt);s.imageSmoothingEnabled=!1;const r=Lh(i,e.w,e.h,e.color);if(r)s.drawImage(r,0,0);else if(e.block!==void 0)for(let c=0;c<e.h;c++)for(let l=0;l<e.w;l++)Hn(s,l*Wt,c*Wt,e.block);if(!t)return n.toDataURL();const[o,a]=Ti(e.h*Wt,e.w*Wt);return a.imageSmoothingEnabled=!1,a.translate(e.h*Wt,0),a.rotate(Math.PI/2),a.drawImage(n,0,0),o.toDataURL()}function o_(i){const[t,e]=Ti(Wt,Wt);return Hn(e,0,0,i),t.toDataURL()}const Ce=i=>document.getElementById(i);let Cl=0;function wt(i){const t=Ce("toast");t.textContent=i,t.style.opacity="1",clearTimeout(Cl),Cl=setTimeout(()=>t.style.opacity="0",2600)}function a_(i){const t=Ce("prompt");if(!i){t.classList.add("hidden");return}t.classList.remove("hidden"),t.textContent=i}function c_(i){Ce("vision-water").style.opacity=i?"1":"0"}function l_(i){const t=Ce("blockname");if(!i){t.classList.add("hidden");return}t.textContent=i,t.classList.remove("hidden")}function h_(){const i=Ce("vision-hit");i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash")}let Il="";function u_(i){const t=i.selectedSlot()?.itemId??"",e=i.slots.map(r=>r.itemId+":"+r.count).join(",")+"|"+t;if(e===Il)return;Il=e;const n=[];for(const r of i.slots){const o=n.find(a=>a.itemId===r.itemId);o?o.count+=r.count:n.push({itemId:r.itemId,count:r.count})}const s=Ce("hotbar");s.innerHTML="",n.slice(0,9).forEach((r,o)=>{const a=document.createElement("div");a.className="hb-slot"+(r.itemId===t?" sel":""),a.dataset.hb=String(o);const c=document.createElement("img");c.src=Vn(r.itemId),c.alt=Ft[r.itemId].name,a.appendChild(c);const l=document.createElement("span");if(l.className="hb-key",l.textContent=String(o+1),a.appendChild(l),r.count>1){const d=document.createElement("span");d.className="hb-count",d.textContent=String(r.count),a.appendChild(d)}s.appendChild(a)})}function d_(){const i=document.querySelector("#bar-water .safe");i.style.left="25%",i.style.right="0%";const t=document.querySelector("#bar-heat .safe");t.style.left=((ic-Si)/(Es-Si)*100).toFixed(1)+"%",t.style.right=((Es-sc)/(Es-Si)*100).toFixed(1)+"%",document.querySelector("#bar-health .safe").style.display="none";const e=(s,r,o)=>{const a=document.createElement("span");a.className="dmg",a.style.left=r.toFixed(1)+"%",a.title=o,document.getElementById(s).appendChild(a)};e("bar-water",Aa,"below this, dehydration drains Health");const n=s=>(s-Si)/(Es-Si)*100;e("bar-heat",n(Ta),"below this, hypothermia drains Health"),e("bar-heat",n(wa),"above this, heat stroke drains Health")}function Ll(i,t=0,e=0,n=0,s=0,r=0){const o=document.getElementById("waypoint");if(!i){o.classList.add("hidden");return}const a=t-n,c=e-s,l=Math.atan2(a,-c)+r;Ce("wp-arrow").style.transform=`rotate(${l*180/Math.PI}deg)`,Ce("wp-name").textContent=i,Ce("wp-dist").textContent=`${Math.round(Math.hypot(a,c))} m`,o.classList.remove("hidden")}function Pl(i,t,e,n,s,r){const o=p=>document.querySelector(`#${p} .fill`);o("bar-health").style.width=i.health+"%",o("bar-water").style.width=i.water+"%";const a=(i.body-Si)/(Es-Si)*100;o("bar-heat").style.width=a+"%";const c=e%sn/sn,l=String(Math.floor(c*24)).padStart(2,"0"),d=String(Math.floor(c*24%1*60)).padStart(2,"0");Ce("clock-day").textContent="Day "+n,Ce("clock-time").textContent=l+":"+d;const h=p=>s==="C"?Math.round(p)+"°C":Math.round(p*9/5+32)+"°F";Ce("clock-temp").textContent=`air ${h(i.lastAmbientEff)}  body ${h(i.body)}`;const f=t.selectedSlot();Ce("held").textContent=f?Ft[f.itemId].name:"—",u_(t),Ce("warn-hot").classList.toggle("hidden",i.body<=sc),Ce("warn-cold").classList.toggle("hidden",i.body>=ic);const u=t.weight(),m=t.weightLimit(),x=Ce("weight");x.textContent=`${u.toFixed(1)} / ${m} kg`,x.classList.toggle("encumbered",u>m),Ce("vision-vignette").style.opacity=String(i.vision*.85);const g=i.water<5||i.health<30;Ce("vision-red").style.opacity=g?String(.35+.25*Math.sin(r/220)):"0"}const $i=i=>i===Fe||i===Ie;class fe{constructor(t,e,n,s,r){this.meta=t,this.settings=s,this.audio=r,this.seed=gg(t.seedStr||t.id),this.world=new Rg(this.seed),this.survival=new Ng(this.seed^7),this.quests=Jg(e?.quest),this.renderer=new Og(n),this.player=new Pg(this.world),this.timeSec=e?.time??sn*.7,this.playSec=e?.playSec??0,document.addEventListener("touchstart",()=>{this.lastTouchTs=Date.now()},{passive:!0,capture:!0}),e?this.restore(e):this.spawnStarterEntities(),this.world.get(-6,35,0)===yn&&this.renderer.addPointLight(-6,35,0,"lamp"),this.world.get(6,35,0)===yn&&this.renderer.addPointLight(6,35,0,"lamp"),d_(),this.renderQuest(),this.attach(),this.mobile||document.getElementById("surge-btn").classList.remove("hidden"),this.mobile&&document.getElementById("mobile").classList.remove("hidden"),this.applySettings(s)}seed;world;survival;player;inv=new Io;renderer;timeSec;playSec=0;entities=[];caches=[];chests=new Map;chestInv=null;gridFocus="inv";campCharges=new Map;beaconMarks=[];mobs=[];mobSpawnAcc=9;attackCd=0;equip={backpack:null,head:null,body:null};collected=new Set;running=!1;paused=!1;escAt=0;relockAt=0;prevHp=100;lastHitFlash=-10;lastDmgAt=-10;ui=null;openCacheId=null;openStation=null;breaking=null;mouseDown=!1;breakMsg=!1;keys=new Set;stick={x:0,y:0};mobile=matchMedia("(pointer: coarse)").matches;speedMul=1;regGlow=new Map;regGlowMat=null;regTick=-1;mobileJump=!1;entitySeq=1;audioTickAcc=0;autosaveAcc=0;raf=0;last=0;bound=new Map;onDeathCb=null;deathCause="";quests;questShown="";pods=[];waypointEid=0;waypointKey="";tut=null;tutGuide=null;cine=null;cineSegs=[];cineOnEnd=null;visorBeams=new Map;lockAt=0;guideAcc=1;lastTouchTs=0;won=!1;spawnStarterEntities(){this.world.gen.canisters.forEach((t,e)=>{if(!t.buried)return;const n=Math.round(He(this.seed,t.x,t.z));this.entities.push({id:this.entitySeq++,x:t.x+.5,y:n,z:t.z+.5,itemId:"canister_full",count:1,buried:t.buried,buriedAt:t.buried?[t.x,n,t.z]:void 0,srcIndex:e})}),this.spawnStarterChest()}spawnStarterChest(){const[t,e,n]=[3,31,0];this.world.get(t,e,n)===Jt&&(this.world.set(t,e,n,Ye),this.chests.set(fe.chestKey([[t,e,n]]),[{itemId:"canister_full",count:1,x:0,y:0},{itemId:"canister_full",count:1,x:1,y:0},{itemId:"canister_full",count:1,x:2,y:0}]))}chestCluster(t,e,n){const s=new Set([`${t},${e},${n}`]),r=[[t,e,n]],o=[];for(;r.length;){const a=r.pop();o.push(a);for(const[c,l,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const h=a[0]+c,f=a[1]+l,u=a[2]+d,m=`${h},${f},${u}`;s.has(m)||this.world.get(h,f,u)!==Ye||(s.add(m),r.push([h,f,u]))}}return o}static chestKey(t){return[...t].sort((e,n)=>e[0]-n[0]||e[1]-n[1]||e[2]-n[2]).map(e=>e.join(",")).join(";")}static chestDims(t){return t<=3?[3*t,3]:[9,3+(t-3)]}static placeSlotFree(t,e){const n=Ft[e.itemId],s=n.w===n.h?[!!e.rot]:[!!e.rot,!e.rot];for(const r of s){const o=r?n.h:n.w,a=r?n.w:n.h;for(let c=0;c+a<=t.h;c++)for(let l=0;l+o<=t.w;l++)if(t.fits(l,c,o,a))return e.x=l,e.y=c,e.rot=r||void 0,t.slots.push(e),!0}return!1}emptyChestGrid(t){const e=new Io;e.slots=[];const[n,s]=fe.chestDims(t);return e.w=n,e.h=s,e.baseLimit=1e9,e}openChest(t,e,n){const s=this.chestCluster(t,e,n),r=fe.chestKey(s);this.chests.has(r)||this.chests.set(r,[]);const o=this.emptyChestGrid(s.length);o.slots=this.chests.get(r),this.chestInv=o,this.gridFocus="chest",this.ui="inv",this.unlockPointer(),this.audio.door(),this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden")}linkChests(t,e,n,s){const r=this.chestCluster(t,e,n),o=this.emptyChestGrid(r.length);for(const a of s)fe.placeSlotFree(o,a)||this.dropEntity(a.itemId,a.count,2);o.slots.length&&this.chests.set(fe.chestKey(r),o.slots),r.length>1&&wt(`Chests linked — one ${o.w}×${o.h} inventory.`)}adoptLegacyChest(t){if(this.world.get(t.x,t.y,t.z)!==Ye){if(ze(this.world.get(t.x,t.y,t.z))){for(const r of t.items)this.dropEntity(r.itemId,r.count,2);return}this.world.set(t.x,t.y,t.z,Ye)}const e=this.chestCluster(t.x,t.y,t.z),n=fe.chestKey(e);this.chests.has(n)||this.chests.set(n,[]);const s=this.emptyChestGrid(e.length);s.slots=this.chests.get(n);for(const r of t.items)for(let o=0;o<r.count;o++){const a={itemId:r.itemId,count:1,x:0,y:0};fe.placeSlotFree(s,a)||this.dropEntity(r.itemId,1,2)}}cacheColor(t){return t.kind==="reward"?11569726:7035460}cacheMeshPos(t){return[t.x,t.y+.5,t.z]}restore(t){this.world.loadDeltas(t.deltas),this.player.pos.set(t.player.x,t.player.y,t.player.z),this.player.yaw=t.player.yaw,this.player.pitch=t.player.pitch,this.survival.health=t.survival.health,this.survival.water=t.survival.water,this.survival.body=t.survival.body,this.inv.slots=t.inventory.slots.map(a=>({...a}));const e=this.inv.slots.filter(a=>a.count>1);if(e.length){this.inv.slots=this.inv.slots.filter(a=>a.count===1);for(const a of e)this.giveOrDrop(a.itemId,a.count)}this.inv.selected=t.inventory.selected,t.inventory.w!==this.inv.w||t.inventory.h!==this.inv.h?(this.inv.w=t.inventory.w,this.inv.h=t.inventory.h,this.inv.baseLimit=30,this.inv.bonusLimit=t.inventory.bonusLimit):this.inv.bonusLimit=t.inventory.bonusLimit;for(const a of["backpack","head","body"]){const c=t.equip?.[a];c&&(this.equip[a]={itemId:c,count:1,x:0,y:0})}this.beaconMarks=t.beaconMarks??[],this.collected=new Set(t.collected??[]);const n=this.collected;let s=0;const r=[];this.world.gen.canisters.forEach(a=>{if(a.buried&&!n.has(s)){const c=Math.round(He(this.seed,a.x,a.z));r.push({id:this.entitySeq++,x:a.x+.5,y:c,z:a.z+.5,itemId:"canister_full",count:1,buried:a.buried,buriedAt:a.buried?[a.x,c,a.z]:void 0,srcIndex:s})}s++});for(const a of t.entities)r.push({id:this.entitySeq++,...a});this.entities=r;const o=[];for(const a of t.caches){const c=a.kind??"death";if(c==="chest"){o.push(a);continue}const l={id:this.entitySeq++,x:a.x,y:a.y,z:a.z,kind:c,items:a.items.map(d=>({...d}))};this.caches.push(l),l.items.length&&this.renderer.addEntityMesh(l.id,this.cacheMeshPos(l),this.cacheColor(l),.7)}this.campCharges=new Map(Object.entries(t.campfires??{}).map(([a,c])=>[a,c])),this.chests=new Map((t.chests??[]).map(a=>[a.cells,a.slots.map(c=>({...c}))]));for(const a of o)this.adoptLegacyChest(a);this.pods=(t.pods??[]).map(a=>({...a,ringEid:this.renderer.addGroundRing(a.x+.5,Math.round(He(this.seed,a.x,a.z)),a.z+.5,13382434,1.1),beamEid:this.renderer.addBeam(a.x+.5,Math.round(He(this.seed,a.x,a.z)),a.z+.5,13382434)})),this.won=!!t.won;for(const[a,c]of this.world.deltas){const[l,d]=a.split(",").map(Number);for(const[h,f]of c){if(f!==yn&&f!==Sn)continue;const u=Math.floor(h/(Tt*Ee)),m=h%(Tt*Ee);this.renderer.addPointLight(l*Tt+u,m%Ee,d*Tt+Math.floor(m/Ee),f===yn?"lamp":"fire")}}}snapshot(){return{v:1,seedStr:this.meta.seedStr,time:this.timeSec,playSec:this.playSec,days:this.dayNumber(),player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch},survival:{health:this.survival.health,water:this.survival.water,body:this.survival.body},quest:{i:this.quests.i,p:this.quests.p.slice()},inventory:{slots:this.inv.slots.map(t=>({...t})),selected:this.inv.selected,w:this.inv.w,h:this.inv.h,bonusLimit:this.inv.bonusLimit},equip:{backpack:this.equip.backpack?.itemId,head:this.equip.head?.itemId,body:this.equip.body?.itemId},beaconMarks:this.beaconMarks,collected:this.collectedCanisterIndices(),entities:this.entities.filter(t=>!t.buried).map(t=>({x:t.x,y:t.y,z:t.z,itemId:t.itemId,count:t.count})),pods:this.pods,won:this.won||void 0,caches:this.caches.map(t=>({x:t.x,y:t.y,z:t.z,kind:t.kind,items:t.items.map(e=>({...e}))})),chests:[...this.chests].map(([t,e])=>({cells:t,slots:e.map(n=>({...n}))})),campfires:Object.fromEntries(this.campCharges),deltas:this.world.serializeDeltas()}}collectedCanisterIndices(){return[...this.collected]}get isGuest(){return this.meta.id.startsWith("guest")}setClock(t){const e=Math.floor(this.timeSec/sn);this.timeSec=(e+t)*sn}startTutorial(){this.survival.invincible=!0,this.setClock(.42),document.getElementById("quest").classList.add("hidden"),this.tut=new e_(this),this.startCine(t_,()=>this.tut?.onCineEnd())}endTutorial(){this.tut=null,this.tutGuide=null,this.survival.invincible=!1,document.getElementById("quest").classList.remove("hidden"),this.renderQuest(),wt("Tour complete. Now survive."),this.saveNow()}startCine(t,e){this.cineSegs=t,this.cine={t:0},this.cineOnEnd=e}cineFrame(t){const e=this.cine;e.t+=t;const n=this.cineSegs,s=n.find(c=>e.t<c.t1)??n[n.length-1];if(s.openDoor&&e.t>=s.openDoor.t){const{x:c,y:l,z:d}=s.openDoor;if(this.world.get(c,l,d)!==ye){this.world.set(c,l,d,ye);for(const h of[-1,1])$i(this.world.get(c,l+h,d))&&this.world.set(c,l+h,d,ye);this.audio.door()}}const r=Math.min(1,Math.max(0,(e.t-s.t0)/(s.t1-s.t0))),o=r*r*(3-2*r),a=this.renderer.camera;if(a.position.set(s.from[0]+(s.to[0]-s.from[0])*o,s.from[1]+(s.to[1]-s.from[1])*o,s.from[2]+(s.to[2]-s.from[2])*o),a.lookAt(s.look[0],s.look[1],s.look[2]),e.t>=n[n.length-1].t1){this.cine=null;const c=n[n.length-1];this.player.yaw=Math.atan2(-(c.look[0]-c.to[0]),-(c.look[2]-c.to[2])),this.player.pitch=0;const l=this.renderer.camera;l.position.copy(this.player.eye()),l.rotation.order="YXZ",l.rotation.set(0,this.player.yaw,0),this.cineOnEnd?.(),this.cineOnEnd=null}}saveNow(t=!1){if(this.isGuest)return t&&wt("Guest worlds are never saved."),!1;const e=Rh(this.meta,this.snapshot());return t&&wt(e?"Game saved.":"Storage full — use Export World."),e}exportWorld(){Ih(this.meta,this.snapshot())}start(){this.running=!0,this.last=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.1,(e-this.last)/1e3);this.last=e,this.frame(n,e)};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf);for(const[t,e]of this.bound)removeEventListener(t,e);this.bound.clear(),document.getElementById("mobile").classList.add("hidden"),this.renderer.dispose(),document.pointerLockElement&&document.exitPointerLock()}applySettings(t){this.settings=t,this.renderer.renderDistance=t.renderDist,this.renderer.camera.fov=t.fov,this.renderer.camera.updateProjectionMatrix(),this.renderer.setQuality(t.quality),this.audio.setVolume(t.volume),this.audio.setMusic(t.music),this.renderer.resetChunkMeshes();const e=Math.floor(this.player.pos.x/16),n=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,e,n)}dayNumber(){return 1+Math.floor(this.timeSec/sn)}questBump(t,e=1){if(this.tut)return;const n=Qg(this.quests,t,e);if(!n){t==="mine"&&this.renderQuest();return}wt(`Quest complete: ${n.title}`),n.reward&&this.crashPod(n.reward.item,n.reward.n),this.audio.savePing(),n.kind==="finish"&&this.win(),this.renderQuest(),this.saveNow(!0)}crashPod(t,e){const n=this.player.pos,s=Math.round(n.x)+2,r=Math.round(n.z)+1,o=Math.round(He(this.seed,s,r)),a=this.renderer.addGroundRing(s+.5,o,r+.5,13382434,1.1),c=this.renderer.addBeam(s+.5,o,r+.5,13382434);this.pods.push({x:s,z:r,t:3,itemId:t,n:e,ringEid:a,beamEid:c}),this.audio.warn(),setTimeout(()=>{this.running&&wt("⚠ Reward Cache inbound — follow the red marker.")},1200)}podFrame(t){for(let e=this.pods.length-1;e>=0;e--){const n=this.pods[e];if(n.t-=t,n.t>0)continue;this.renderer.removeEntityMesh(n.ringEid),this.renderer.removeEntityMesh(n.beamEid);const s=Math.round(He(this.seed,n.x,n.z));this.caches.push({id:this.entitySeq++,x:n.x,y:s,z:n.z,kind:"reward",items:[{itemId:n.itemId,count:n.n}]}),this.renderer.addEntityMesh(this.caches[this.caches.length-1].id,[n.x,s+.5,n.z],this.cacheColor(this.caches[this.caches.length-1]),.7),this.pods.splice(e,1),this.audio.thud(),wt("Reward Cache landed — claim it with E."),this.saveNow(!0)}}guideFrame(t){if(this.guideAcc+=t,this.guideAcc<.4)return;this.guideAcc=0;const e=this.player.pos,n=this.tut?this.tutGuide:this.waypointTarget();if(n){Ll(n.name,n.x,n.z,e.x,e.z,this.player.yaw);const r=`${n.name}|${Math.floor(n.x)},${Math.floor(n.z)}`;r!==this.waypointKey&&(this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey=r,this.waypointEid=this.renderer.addBeam(n.x,n.y,n.z,3531007,12))}else Ll(null),this.waypointEid&&(this.renderer.removeEntityMesh(this.waypointEid),this.waypointEid=0),this.waypointKey="";const s=new Map;if(this.equip.head?.itemId==="visor"){for(const r of this.caches)r.items.length&&s.set(`c${r.id}`,[r.x+.5,r.y,r.z+.5,r.kind==="reward"?14197322:13386803]);for(const r of this.chests.keys()){const[o,a,c]=r.split(";")[0].split(",").map(Number);s.set(`x${r}`,[o+.5,a,c+.5,15124842])}}for(const[r,o]of this.visorBeams)s.has(r)||(this.renderer.removeEntityMesh(o),this.visorBeams.delete(r));for(const[r,[o,a,c,l]]of s)this.visorBeams.has(r)||this.visorBeams.set(r,this.renderer.addBeam(o,a,c,l,10))}waypointTarget(){const t=bs(this.quests);if(!t)return null;const e=this.player.pos,n=(r,o)=>Math.round(He(this.seed,r,o))+1,s=r=>{let o=r[0],a=1/0;for(const c of r){const l=(c.x-e.x)**2+(c.z-e.z)**2;l<a&&(a=l,o=c)}return o};switch(t.kind){case"oasis":{const r=s(this.world.gen.oases);return r?{name:"Oasis",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}:null}case"water_home":case"finish":{const r=[...this.beaconMarks,{x:-4,y:31,z:-1}].reverse().find(o=>this.world.get(o.x,o.y,o.z)===tn);return r?{name:"Save Beacon",x:r.x+.5,y:r.y,z:r.z+.5}:null}case"wreck":{const r=this.world.gen.secondShip;return{name:"Second Wreck",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"core":{const r=this.world.gen.secondShip;return{name:"Engine Core",x:r.x+.5,y:n(r.x,r.z),z:r.z+.5}}case"tool":{const r=[];this.world.get(0,31,-3)===en&&r.push({x:0,y:31,z:-3});for(const[a,c]of this.world.deltas){const[l,d]=a.split(",").map(Number);for(const[h,f]of c){if(f!==en)continue;const u=h%Ee,m=Math.floor(h/Ee)%Tt,x=Math.floor(h/(Ee*Tt));r.push({x:l*Tt+x,y:u,z:d*Tt+m})}}if(!r.length)return null;const o=s(r);return{name:"Crafting Bench",x:o.x+.5,y:o.y,z:o.z+.5}}default:return null}}questFrame(){const t=bs(this.quests);if(!t)return;const e=this.player.pos;if(t.kind==="sky"&&this.survival.lastOpenSky)this.questBump("sky");else if(t.kind==="oasis"&&this.world.gen.nearOasis(Math.floor(e.x),Math.floor(e.z)))this.questBump("oasis");else if(t.kind==="water_home"&&this.inv.slots.some(n=>n.itemId==="canister_full")&&[...this.beaconMarks,{x:-4,y:31,z:-1}].some(n=>this.world.get(n.x,n.y,n.z)===tn&&(n.x+.5-e.x)**2+(n.y+1-e.y)**2+(n.z+.5-e.z)**2<25))this.questBump("water_home");else if(t.kind==="wreck"){const n=this.world.gen.secondShip;(n.x+.5-e.x)**2+(n.z+.5-e.z)**2<169&&this.questBump("wreck")}}renderQuest(){const t=document.getElementById("quest");if(!t)return;const e=bs(this.quests);if(!e){this.questShown!=="done"&&(this.questShown="done",t.innerHTML=this.won?'<div class="q-title">Main Quest complete</div><div class="q-desc">The beacon relay is live. Survive as long as you can while you wait for the rescue ship.</div>':'<div class="q-title">All quests complete</div><div class="q-desc">Now just survive as long as you can.</div>');return}const n=this.quests.p[this.quests.i],s=e.id+":"+n;s!==this.questShown&&(this.questShown=s,t.innerHTML=`<div class="q-title">Quest · ${e.title}${e.goal>1?` (${n}/${e.goal})`:""}</div><div class="q-desc">${e.desc}</div>`+(e.goal>1?`<div class="q-bar"><i style="width:${n/e.goal*100}%"></i></div>`:""))}attach(){const t=(n,s,r=window)=>{r.addEventListener(n,s),this.bound.set(n+(r===window?"":":el"),s)};t("keydown",n=>{const s=n;if(!s.repeat){if(this.keys.add(s.code),s.code==="KeyE"&&this.act(),s.code==="KeyQ"&&this.useItem(),s.code==="KeyX"&&this.surge(),s.code==="KeyI"&&this.toggleInv(),s.code==="KeyR"&&this.ui==="inv"){if(this.temp)this.temp.rot=!this.temp.rot,this.audio.place();else{const r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot();o&&!r.rotate(o)&&(wt("No room to rotate."),this.audio.error())}this.renderInv()}if(s.code==="Escape"){if(this.tut&&!this.ui){this.tut.finish();return}this.escape()}if(s.code==="KeyP"&&this.escape(!0),s.code.startsWith("Digit")){const r=Number(s.code.slice(5)),o=this.hotbarItems();if(r>=1&&r<=o.length){const a=o[r-1];this.inv.selectedSlot()?.itemId===a?this.inv.selected=-1:this.selectItem(a),this.renderHeld()}}}}),t("keyup",n=>this.keys.delete(n.code)),document.getElementById("surge-btn").onclick=()=>this.surge(),document.getElementById("hotbar").addEventListener("pointerdown",n=>{const s=n.target.closest("[data-hb]");if(!s)return;const r=this.hotbarItems()[Number(s.dataset.hb)];r&&(this.inv.selectedSlot()?.itemId===r?this.inv.selected=-1:this.selectItem(r),this.renderHeld())}),this.mobile&&document.getElementById("ui-inventory").addEventListener("touchstart",n=>{this.ui!=="inv"||this.inv.selected===-1||n.target.closest(".invcell, .equip-cell, #inv-temp, button")||(this.inv.selected=-1,this.renderInv())});const e=this.renderer.canvasEl();if(!this.mobile)t("click",()=>{!this.paused&&!this.ui&&this.requestLock()},e),t("mousedown",n=>{const s=n;s.button===0?(this.mouseDown=!0,this.breakMsg=!1):s.button===2&&!this.cine&&this.place()}),t("mouseup",()=>{this.mouseDown=!1,this.breaking=null}),t("mousemove",n=>{if(document.pointerLockElement!==e||this.ui)return;const s=n;this.player.yaw-=s.movementX*.0022*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*s.movementY*.0022*this.settings.sens,this.player.pitch=si.clamp(this.player.pitch,-1.55,1.55)}),t("wheel",n=>this.cycleItem(n.deltaY>0?1:-1)),t("contextmenu",n=>n.preventDefault());else{let n=-1,s=0,r=0;e.addEventListener("touchstart",u=>{if(n<0){const m=u.changedTouches[0];n=m.identifier,s=m.clientX,r=m.clientY}u.preventDefault()}),e.addEventListener("touchmove",u=>{for(const m of u.changedTouches)m.identifier===n&&(this.player.yaw-=(m.clientX-s)*.005*this.settings.sens,this.player.pitch-=(this.settings.invertY?-1:1)*(m.clientY-r)*.005*this.settings.sens,this.player.pitch=si.clamp(this.player.pitch,-1.55,1.55),s=m.clientX,r=m.clientY);u.preventDefault()});const o=u=>{for(const m of u.changedTouches)m.identifier===n&&(n=-1)};e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),document.addEventListener("contextmenu",u=>u.preventDefault());const a=document.getElementById("stick"),c=document.getElementById("knob");let l=-1;const d=u=>{const m=a.getBoundingClientRect();for(const x of u.changedTouches)if(x.identifier===l){const g=x.clientX-(m.left+m.width/2),p=x.clientY-(m.top+m.height/2),T=Math.max(1,Math.hypot(g,p)),_=Math.min(T,m.width/2)/(m.width/2);this.stick.x=g/T*_,this.stick.y=p/T*_,c.style.left=38+g/T*_*38+"px",c.style.top=38+p/T*_*38+"px"}};a.addEventListener("touchstart",u=>{l=u.changedTouches[0].identifier,d(u),u.preventDefault()}),a.addEventListener("touchmove",u=>{d(u),u.preventDefault()});const h=()=>{this.stick.x=0,this.stick.y=0,l=-1,c.style.left="38px",c.style.top="38px"};a.addEventListener("touchend",h),a.addEventListener("touchcancel",h);const f=(u,m,x)=>{const g=document.getElementById(u);g.addEventListener("touchstart",p=>{p.preventDefault(),m()}),g.addEventListener("touchend",p=>{p.preventDefault(),x&&x()}),g.addEventListener("touchcancel",()=>{x&&x()})};f("m-jump",()=>this.mobileJump=!0,()=>this.mobileJump=!1),f("m-break",()=>this.mouseDown=!0,()=>{this.mouseDown=!1,this.breaking=null}),f("m-place",()=>this.place()),f("m-act",()=>this.act()),f("m-use",()=>this.useItem()),f("m-surge",()=>this.surge()),f("m-next",()=>this.cycleItem(1)),f("m-inv",()=>this.toggleInv()),f("m-pause",()=>this.escape())}t("beforeunload",()=>this.saveNow()),t("pointerlockchange",()=>{if(document.pointerLockElement){this.lockAt=performance.now();return}this.running&&!this.paused&&!this.ui&&performance.now()-this.escAt>400&&performance.now()-Math.max(this.lockAt,this.relockAt)>900&&(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document),t("visibilitychange",()=>{if(!document.hidden||!this.running||this.paused||this.ui)return;const n=s=>!document.getElementById(s).classList.contains("hidden");n("screen-settings")||n("screen-instructions")||n("screen-death")||n("screen-win")||(this.paused=!0,document.getElementById("screen-pause").classList.remove("hidden"))},document)}pauseSubmenu=null;closePauseSubmenu(){if(!this.pauseSubmenu)return;const t=this.pauseSubmenu==="settings"?"screen-settings":this.pauseSubmenu==="catalog"?"screen-catalog":"screen-instructions";document.getElementById(t).classList.add("hidden"),this.pauseSubmenu=null,this.paused&&document.getElementById("screen-pause").classList.remove("hidden")}escape(t=!1){if(this.escAt=performance.now(),this.pauseSubmenu){this.closePauseSubmenu();return}if(this.ui){this.closeUI();return}const e=n=>document.getElementById(n).classList.contains("hidden");if(!(!e("screen-settings")||!e("screen-death")||!e("screen-win")||!e("screen-instructions"))){if(!t&&this.paused&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}this.paused=!this.paused,document.getElementById("screen-pause").classList.toggle("hidden",!this.paused),this.paused?document.pointerLockElement&&document.exitPointerLock():t&&this.relock()}}requestLock(){this.settings.fullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{});const t=this.renderer.canvasEl().requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}relock(){!this.paused&&!this.ui&&!document.pointerLockElement&&(this.relockAt=performance.now(),this.requestLock())}frame(t,e){if(this.paused){this.renderer.render();return}this.timeSec+=t,this.playSec+=t;const n=Math.floor(this.player.pos.x/16),s=Math.floor(this.player.pos.z/16);this.renderer.ensureChunks(this.world,n,s),this.renderer.rebuildDirty(this.world);const r=this.renderer.updateSky(this.timeSec,this.player.pos),o=Ar(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z),this.seed),a=this.inv.weight()>this.inv.weightLimit();if(!this.ui&&!this.cine){let h=this.stick.x,f=-this.stick.y;this.keys.has("KeyW")&&(f+=1),this.keys.has("KeyS")&&(f-=1),this.keys.has("KeyA")&&(h-=1),this.keys.has("KeyD")&&(h+=1);const u=this.keys.has("Space")||this.mobileJump;this.player.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),this.player.update(t,h,f,u,this.speedMul,a),this.survival.update(t,this.world,this.player.pos,{sprinting:this.player.sprinting&&(h!==0||f!==0),overencumbered:a,biome:o,tSec:this.timeSec,sunElev:r.sunElev,inWater:this.player.inWater}),this.updateBreaking(t),this.updatePickups()}if(this.audio.heartbeat(t,this.survival.health),this.cine)this.cineFrame(t);else{const h=this.renderer.camera;h.position.copy(this.player.eye()),h.rotation.order="YXZ",h.rotation.set(this.player.pitch,this.player.yaw,0)}const c=this.raycastTarget();this.renderer.setHighlight(this.ui||this.cine?null:c?.hit??null),a_(this.ui||this.cine?null:this.promptFor(c)),l_(this.ui||this.cine||!c?.hit?null:Yn[this.world.get(c.hit.x,c.hit.y,c.hit.z)].name),c_(this.player.headUnder);for(const h of this.entities){if(h.fall!==void 0){const u=Math.min(h.fall,14*t);h.y-=u,h.fall-=u,h.fall<=.001&&(h.fall=void 0,this.audio.thud()),this.renderer.moveEntityMesh(h.id,[h.x,h.y,h.z])}const f=this.renderer.entityMesh(h.id);h.buried&&h.buriedAt&&this.world.get(h.buriedAt[0],h.buriedAt[1],h.buriedAt[2])!==Jt?f&&this.renderer.removeEntityMesh(h.id):f||this.renderer.addEntityMesh(h.id,[h.x,h.y,h.z],parseInt(Ft[h.itemId].color.slice(1),16))}for(const h of this.caches){const f=this.renderer.entityMesh(h.id);!f&&h.items.length?(this.renderer.addEntityMesh(h.id,this.cacheMeshPos(h),this.cacheColor(h),.7),h.markerEid=this.renderer.addGroundRing(h.x+.5,h.y,h.z+.5,h.kind==="reward"?14197322:13382434,1.4)):f&&!h.items.length&&(this.renderer.removeEntityMesh(h.id),h.markerEid!==void 0&&(this.renderer.removeEntityMesh(h.markerEid),h.markerEid=void 0))}this.regulatorGlow();const l=this.survival.surgeCooldown>0;for(const h of["surge-btn","m-surge"]){const f=document.getElementById(h);f&&f.disabled!==l&&(f.disabled=l)}Pl(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,e),this.podFrame(t),this.questFrame(),this.guideFrame(t),this.tut?.tick(t),this.mobFrame(t),this.world.processWater(),this.audio.setDay(r.sunElev>0),this.autosaveAcc+=t,this.autosaveAcc>30&&(this.autosaveAcc=0,this.saveNow());const d=this.prevHp-this.survival.health;if(d>0){const h=this.timeSec-this.lastDmgAt>2.5;this.lastDmgAt=this.timeSec,(d>=2||this.timeSec-this.lastHitFlash>1.1)&&(this.lastHitFlash=this.timeSec,h_(),(d>=2||h)&&this.audio.hurt())}this.prevHp=this.survival.health,this.survival.health<=0&&this.running&&this.die(),this.renderer.render()}raycastTarget(){const t=this.player.eye(),e=new P;this.renderer.camera.getWorldDirection(e);let n=Math.floor(t.x),s=Math.floor(t.y),r=Math.floor(t.z);const o=new P(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)),a=new P(e.x!==0?Math.abs(1/e.x):1/0,e.y!==0?Math.abs(1/e.y):1/0,e.z!==0?Math.abs(1/e.z):1/0),c=(f,u)=>u>0?Math.ceil(f)-f||1:u<0?f-Math.floor(f)||1:1/0,l=new P(c(t.x,o.x)*a.x,c(t.y,o.y)*a.y,c(t.z,o.z)*a.z);let d=new P(n,s,r),h=null;for(let f=0;f<80;f++){const u=this.world.get(n,s,r);if(wi(u)){if(h||(h={x:n,y:s,z:r}),u===pn)return{hit:{x:n,y:s,z:r},water:h,face:new P(d.x-n,d.y-s,d.z-r)}}else if(u!==Jt&&u!==pn)return{hit:{x:n,y:s,z:r},water:h,face:new P(d.x-n,d.y-s,d.z-r)};if(d.set(n,s,r),l.x<l.y&&l.x<l.z?(n+=o.x,l.x+=a.x):l.y<l.z?(s+=o.y,l.y+=a.y):(r+=o.z,l.z+=a.z),new P(n-t.x,s-t.y,r-t.z).length()>5.5)break}return{hit:null,water:h,face:new P(0,0,0)}}promptFor(t){if(!t)return null;if(t.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Ye)return"E: Open Supply Chest";const e=this.nearestCache();if(e)return e.kind==="reward"?"E: Claim Reward Cache":"E: Open death cache";if(t.hit){const n=this.world.get(t.hit.x,t.hit.y,t.hit.z);if(n===Fe||n===Ie)return"E: Open door";if(n===ye)return"E: Close door";if(n===tn)return"E: Save game (respawn point)";if(n===en||n===Rn)return"E: Craft";if(n===Sn)return"E: Smelt";if(n===$n)return"E: Draw neutral air (37 °C)"}return t.water?"E: Refill canister":null}nearestCache(){for(const t of this.caches)if(t.items.length&&this.player.pos.distanceTo(new P(t.x+.5,t.y+.5,t.z+.5))<2.4)return t;return null}canBreakWith(t){const e=Yn[t];if(e.breakTime<=0)return{ok:!1,time:0,why:"cannot break"};const n=this.inv.selectedSlot(),s=n?Ft[n.itemId].tool:void 0;return e.tool!==null?!s||s.type!==e.tool?{ok:!1,time:0,why:`need a ${e.tool}`}:s.tier<e.minTier?{ok:!1,time:0,why:`need a tier ${e.minTier} ${e.tool}`}:{ok:!0,time:e.breakTime*Math.pow(.55,s.tier-1)}:{ok:!0,time:e.breakTime*(e.fastTool&&s&&s.type===e.fastTool?Math.pow(.55,s.tier):1)}}showBreakBar(t){const e=document.getElementById("breakbar");if(t===null){e.classList.add("hidden");return}e.classList.remove("hidden"),document.getElementById("breakfill").style.width=t*100+"%"}updateBreaking(t){if(!this.mouseDown){this.breaking=null,this.showBreakBar(null);return}const e=this.meleeMob();if(e){if(this.breaking=null,this.showBreakBar(null),this.attackCd<=0){this.attackCd=.5;const c=this.inv.selectedSlot(),l=c?Ft[c.itemId]:null,d=l?.weapon;e.hp-=d?d.dmg:3+(l?.tool?.tier??0),this.audio.thud();const h=e.x-this.player.pos.x,f=e.z-this.player.pos.z,u=Math.max(.2,Math.hypot(h,f)),m=d?1.1:.6;this.mobCanStand(e,e.x+h/u*m,e.z+f/u*m)&&(e.x+=h/u*m,e.z+=f/u*m,e.y=this.mobSurface(e.x,e.z)),e.hp<=0&&this.killMob(e)}return}const n=this.raycastTarget();if(!n?.hit){this.breaking=null,this.showBreakBar(null);return}const{x:s,y:r,z:o}=n.hit,a=this.world.get(s,r,o);if(!this.breaking||this.breaking.x!==s||this.breaking.y!==r||this.breaking.z!==o){const c=this.canBreakWith(a);if(!c.ok){c.why&&!this.breakMsg&&(this.breakMsg=!0,wt(c.why==="cannot break"?"That cannot be broken.":`You can't mine that — ${c.why}.`),this.audio.error()),this.breaking=null,this.showBreakBar(null);return}this.breaking={x:s,y:r,z:o,need:c.time,elapsed:0}}this.breaking.elapsed+=t,this.audioTickAcc+=t,this.audioTickAcc>.25&&(this.audioTickAcc=0,this.audio.tick()),this.showBreakBar(this.breaking.elapsed/this.breaking.need),this.breaking.elapsed>=this.breaking.need&&(this.breakBlock(s,r,o),this.breaking=null,this.showBreakBar(null))}breakBlock(t,e,n){this.tut?.notify("mine");const s=this.world.get(t,e,n);if(this.questBump("mine"),$i(s)||s===ye){this.world.set(t,e,n,Jt);for(const o of[-1,1]){const a=this.world.get(t,e+o,n);($i(a)||a===ye)&&this.world.set(t,e+o,n,Jt)}this.giveOrDrop("door",1),this.audio.blockBreak();return}if(s===tn){this.world.set(t,e,n,Jt),this.beaconMarks=this.beaconMarks.filter(o=>!(o.x===t&&o.y===e&&o.z===n)),wt("Save beacon destroyed. Respawn falls back to the newest intact beacon."),this.audio.blockBreak();return}if(s===Ii){this.world.set(t,e,n,Jt),this.giveOrDrop("prickly_pear",1),this.giveOrDrop("cactus",1),this.audio.blockBreak();return}if(s===Sn&&this.campCharges.delete(`${t},${e},${n}`),s===Ye){const o=this.chestCluster(t,e,n),a=this.chests.get(fe.chestKey(o))??[];this.chests.delete(fe.chestKey(o)),this.world.set(t,e,n,Jt);const c=o.filter(([h,f,u])=>h!==t||f!==e||u!==n),l=[];for(const h of c){const f=this.chestCluster(h[0],h[1],h[2]),u=fe.chestKey(f);l.some(([m])=>m===u)||l.push([u,this.emptyChestGrid(f.length)])}let d=!1;for(const h of a)l.some(([,f])=>fe.placeSlotFree(f,h))||(this.dropEntity(h.itemId,h.count,2),d=!0);for(const[h,f]of l)f.slots.length&&this.chests.set(h,f.slots);this.giveOrDrop("chest",1),this.audio.blockBreak(),d&&wt("The remaining chests were full — some contents fell to the sand.");return}if(s===Ci){this.world.set(t,e,n,Jt),this.giveOrDrop("engine_core",1),this.questBump("core"),this.audio.blockBreak();return}if(s===en||s===Rn){const o=this.benchPeer(t,e,n);this.world.set(t,e,n,Jt),o&&this.world.set(o[0],o[1],o[2],Jt),this.giveOrDrop("bench",1),this.audio.blockBreak();return}(s===yn||s===Sn)&&this.renderer.removePointLight(t,e,n),this.world.set(t,e,n,Jt);const r=this.blockItemId(s);r&&this.giveOrDrop(r,1),this.audio.blockBreak()}mobSurface(t,e){const n=Math.floor(t),s=Math.floor(e),r=Math.max(30,Math.round(He(this.seed,n,s))+8);for(let o=r;o>=0;o--){const a=this.world.get(n,o,s);if(a!==Jt&&Yn[a].solid)return o+1}return-1}mobCanStand(t,e,n){const s=this.mobSurface(e,n);return s<0||s>t.y+1.01?!1:this.world.get(Math.floor(e),s,Math.floor(n))===Jt}spawnMob(t,e,n,s){const r=Kg(t);r.group.position.set(e,n,s),r.group.rotation.y=Math.random()*Math.PI*2,this.renderer.addSceneObject(r.group),this.mobs.push({kind:t,hp:vs[t].hp,x:e,y:n,z:s,yaw:r.group.rotation.y,biteCd:0,wanderT:Math.random()*3,wanderYaw:Math.random()*Math.PI*2,wanderOn:!1,vis:r})}killMob(t){this.renderer.removeSceneObject(t.vis.group),this.mobs=this.mobs.filter(e=>e!==t);for(const e of vs[t.kind].drops)this.giveOrDrop(e.itemId,e.count);wt(`${vs[t.kind].name} killed.`)}topUpMobs(){const t={snake:4,rat:8},e={snake:0,rat:0};for(const s of this.mobs)e[s.kind]++;const n=this.player.pos;for(const s of["snake","rat"])for(;e[s]<t[s];){e[s]++;const r=Math.random()*Math.PI*2,o=30+Math.random()*30,a=Math.floor(n.x+Math.cos(r)*o)+.5,c=Math.floor(n.z+Math.sin(r)*o)+.5;if(Math.hypot(a,c)<24||this.beaconMarks.some(d=>Math.hypot(d.x+.5-a,d.z+.5-c)<16))continue;const l=this.mobSurface(a,c);l<=1||this.world.get(Math.floor(a),l,Math.floor(c))!==Jt||this.world.get(Math.floor(a),l+1,Math.floor(c))!==Jt||this.spawnMob(s,a,l,c)}}meleeMob(){const t=this.player.eye(),e=new P;this.renderer.camera.getWorldDirection(e);const n=this.inv.selectedSlot(),s=n?Ft[n.itemId].weapon?.reach??3.2:3.2,r=this.raycastTarget(),o=r?.hit?Math.hypot(r.hit.x+.5-t.x,r.hit.y+.5-t.y,r.hit.z+.5-t.z):1/0;let a=null,c=1/0;for(const l of this.mobs){const d=vs[l.kind],h=l.x-t.x,f=l.y+d.height/2-t.y,u=l.z-t.z,m=h*e.x+f*e.y+u*e.z;if(m<.2||m>s||m>o)continue;const x=t.x+e.x*m-l.x,g=t.y+e.y*m-(l.y+d.height/2),p=t.z+e.z*m-l.z;x*x+g*g+p*p>(d.hitR+.3)*(d.hitR+.3)||m<c&&(c=m,a=l)}return a}columnClear(t,e,n,s){const r=Math.floor(t),o=Math.floor(e);for(let a=Math.floor(n);a<=Math.floor(s);a++){const c=this.world.get(r,a,o);if(c!==Jt&&c!==pn)return!1}return!0}mobFrame(t){this.attackCd-=t,this.mobSpawnAcc+=t,this.mobSpawnAcc>4&&(this.mobSpawnAcc=0,this.topUpMobs());const e=this.player.pos,n=this.timeSec;for(const s of this.mobs.slice()){const r=vs[s.kind],o=e.x-s.x,a=e.z-s.z,c=Math.hypot(o,a);if(c>110){this.renderer.removeSceneObject(s.vis.group),this.mobs=this.mobs.filter(u=>u!==s);continue}let l=0,d=0;const h=this.columnClear(s.x,s.z,s.y+.2,e.y+1.4);if(r.aggroR>0&&c<r.aggroR&&c>.01&&h){if(l=o/c*r.speed,d=a/c*r.speed,s.yaw=Math.atan2(l,d),c<1.2+r.hitR&&s.biteCd<=0){s.biteCd=r.biteCd;const u=this.equip.body?.6:1;this.survival.hurt(r.biteDmg*u,`${r.name.toLowerCase()} bite`),wt(u<1?`A ${r.name.toLowerCase()} bites you — the Reptile Armour soaks some of it.`:`A ${r.name.toLowerCase()} bites you!`)}}else r.fleeR>0&&c<r.fleeR&&c>.01?(l=-o/c*r.speed,d=-a/c*r.speed,s.yaw=Math.atan2(l,d)):(s.wanderT-=t,s.wanderT<=0&&(s.wanderT=2+Math.random()*4,s.wanderYaw=Math.random()*Math.PI*2,s.wanderOn=Math.random()<.55),s.wanderOn&&(l=Math.sin(s.wanderYaw)*r.speed*.35,d=Math.cos(s.wanderYaw)*r.speed*.35,s.yaw=s.wanderYaw));s.biteCd-=t;let f=0;if(l!==0||d!==0){const u=s.x+l*t,m=s.z+d*t;this.mobCanStand(s,u,m)?(s.x=u,s.z=m,f=1):s.wanderYaw=s.yaw=Math.random()*Math.PI*2}s.y=this.mobSurface(s.x,s.z),s.vis.group.position.set(s.x,s.y,s.z),s.vis.group.rotation.y=s.yaw,s.vis.animate(n,f)}}gridFits(t,e){const n=new Io;n.slots=[],n.w=t,n.h=e;for(const s of this.inv.slots)if(!fe.placeSlotFree(n,{...s,x:0,y:0}))return!1;return!0}applyEquip(){const t=this.equip.backpack?4:3,e=this.equip.backpack?5:4;(this.inv.w!==t||this.inv.h!==e)&&this.inv.setBackpack(t,e,this.equip.backpack?20:0),this.inv.selected>=this.inv.slots.length&&(this.inv.selected=0),this.renderInv()}equipItem(){const t=this.inv.selectedSlot();if(!t)return;const e=Ft[t.itemId];if(!e.equip)return;const n=e.equip,s=this.equip[n];if(s&&this.inv.addItem(s.itemId,s.count)>0){this.inv.removeItem(s.itemId,1),wt("No room in your pack for the gear you are taking off."),this.audio.error();return}this.inv.slots.splice(this.inv.slots.indexOf(t),1),this.equip[n]=t,this.applyEquip(),this.audio.pickup(),wt(`${e.name} equipped in the ${n} slot.`)}unequipSlot(t){const e=this.equip[t];if(e){if(!this.gridFits(this.equip.backpack&&t==="backpack"?3:this.inv.w,this.equip.backpack&&t==="backpack"?5:this.inv.h)){wt("Your pack is too full — make room before taking it off."),this.audio.error();return}this.equip[t]=null,this.applyEquip(),this.inv.addItem(e.itemId,e.count),this.audio.place(),wt(`${Ft[e.itemId].name} taken off.`)}}benchPeer(t,e,n){for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.world.get(t+s,e,n+r);if(o===en||o===Rn)return[t+s,e,n+r]}return null}blockItemId(t){return{1:"sand",2:"sandstone",3:"rock",4:"gravel",5:"dirt",6:"salt",7:"deadwood",8:"glass",9:"insglass",10:"hull",11:"door",13:"lamp",14:"metal",16:"bench",17:"campfire",19:"adobe",21:"engine_core",22:"regulator",23:"chest",24:"bench"}[t]??null}giveOrDrop(t,e){const n=this.inv.addItem(t,e);n>0&&(this.dropEntity(t,n),wt(`No room: dropped ${Ft[t].name}`))}dropEntity(t,e,n=0){const s=this.player.pos,r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=(h,f)=>{const u=Math.floor(s.x+h),m=Math.floor(s.z+f);return!ze(this.world.get(u,Math.floor(s.y),m))&&!ze(this.world.get(u,Math.floor(s.y+1),m))},c=[[r*1.8,o*1.8],[-r*1.8,-o*1.8],[o*1.8,-r*1.8],[-o*1.8,r*1.8],[0,0]],[l,d]=c.find(([h,f])=>a(h,f))??[0,0];this.entities.push({id:this.entitySeq++,x:s.x+l,y:s.y+.35,z:s.z+d,itemId:t,count:e,repickAt:l===0&&d===0?this.timeSec+Math.max(n,2.5):this.timeSec+n})}place(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t)return;const e=Ft[t.itemId];if(e.block===void 0){wt("Not a placeable block"),this.audio.error();return}const n=this.raycastTarget();if(!n?.hit)return;const s=n.hit.x+n.face.x,r=n.hit.y+n.face.y,o=n.hit.z+n.face.z;if(this.world.get(s,r,o)!==Jt)return;if(ze(e.block)){const l=this.player.pos;if(s+1>l.x-.3&&s<l.x+.3&&o+1>l.z-.3&&o<l.z+.3&&r+1>l.y&&r<l.y+1.8)return}let a=[];if(e.block===Ye){const l=new Set;for(const[d,h,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){if(this.world.get(s+d,r+h,o+f)!==Ye)continue;const u=fe.chestKey(this.chestCluster(s+d,r+h,o+f));l.has(u)||(l.add(u),a.push(...this.chests.get(u)??[]),this.chests.delete(u))}}let c=null;if(e.block===en){const l=this.player.pos;for(const[d,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=s+d,u=o+h;if(this.world.get(f,r,u)===Jt&&!(f+1>l.x-.3&&f<l.x+.3&&u+1>l.z-.3&&u<l.z+.3&&r+1>l.y&&r<l.y+1.8)){c=[f,r,u];break}}if(!c){wt("The Crafting Bench needs an open block beside it."),this.audio.error();return}}if(this.world.set(s,r,o,e.block),c&&this.world.set(c[0],c[1],c[2],Rn),e.block===Fe&&this.world.get(s,r+1,o)===Jt&&this.world.set(s,r+1,o,Ie),e.block===Ci){const l=bs(this.quests);l&&l.kind==="finish"&&([...this.beaconMarks,{x:-4,y:31,z:-1}].some(h=>this.world.get(h.x,h.y,h.z)===tn&&(h.x+.5-s)**2+(h.z+.5-o)**2<100)?this.questBump("finish"):wt("Too far from a Save Beacon — the relay needs the Core within 10 m."))}e.block===yn?this.renderer.addPointLight(s,r,o,"lamp"):e.block===Sn&&this.renderer.addPointLight(s,r,o,"fire"),e.block===Ye&&this.linkChests(s,r,o,a),t.count-=1,t.count<=0&&this.inv.slots.splice(this.inv.selected,1),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderHeld(),this.audio.place()}act(){if(this.ui||this.paused||this.cine)return;const t=this.raycastTarget();if(t?.hit&&this.world.get(t.hit.x,t.hit.y,t.hit.z)===Ye){this.openChest(t.hit.x,t.hit.y,t.hit.z);return}const e=this.nearestCache();if(e){this.openCacheId=e.id,this.ui="cache",this.unlockPointer(),this.renderCache(),document.getElementById("ui-cache").classList.remove("hidden");return}if(t){if(t.hit){const{x:n,y:s,z:r}=t.hit,o=this.world.get(n,s,r);if($i(o)||o===ye){if(o===ye){const a=this.player.pos;if(a.x>n-.2&&a.x<n+1.2&&a.z>r-.2&&a.z<r+1.2){wt("Step out of the doorway first."),this.audio.error();return}this.world.get(n,s-1,r)===ye?(this.world.set(n,s,r,Ie),this.world.set(n,s-1,r,Fe)):this.world.get(n,s+1,r)===ye?(this.world.set(n,s,r,Fe),this.world.set(n,s+1,r,Ie)):this.world.set(n,s,r,$i(this.world.get(n,s+1,r))?Ie:Fe)}else{const a=ze(this.world.get(n-1,s,r))||ze(this.world.get(n+1,s,r)),c=this.player.pos,l=a?c.z-(r+.5):c.x-(n+.5),d=n+","+r;Math.abs(l)>.35?this.world.doorSwing.set(d,l>0?-1:1):this.world.doorSwing.delete(d),this.world.set(n,s,r,ye);for(const h of[-1,1])$i(this.world.get(n,s+h,r))&&this.world.set(n,s+h,r,ye);this.tut?.notify("door")}this.audio.door();return}if(o===tn){this.tut?.notify("save"),this.beaconMarks.some(a=>a.x===n&&a.y===s&&a.z===r)||this.beaconMarks.push({x:n,y:s,z:r}),this.audio.savePing(),this.saveNow()?wt("Saved. Death will respawn you at this beacon."):wt("This world is not saved — the beacon only marks it.");return}if(o===en||o===Rn){this.openStation=[n,s,r],this.ui="bench",this.unlockPointer(),this.renderCraft("bench");return}if(o===Sn){this.openStation=[n,s,r],this.ui="smelt",this.unlockPointer(),this.renderCraft("smelt");return}if(o===$n){let a=null;for(const[c,l,d]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const h=this.world.roomInfo(n+c,s+l,r+d);if(h.size>0){a=h;break}}a&&a.sealed&&a.regulators*Ra>=a.size?(this.survival.body=37,this.audio.drink(),wt("The Regulator's neutral air settles over you. (37 °C)")):(this.audio.error(),wt("That Regulator is idle — its space is unsealed or too big for it."));return}}t.water&&(this.inv.has("canister_empty")?(this.inv.removeItem("canister_empty",1),this.giveOrDrop("canister_full",1),this.audio.drink(),this.tut?.notify("refill"),wt(this.world.gen.nearOasis(Math.floor(this.player.pos.x),Math.floor(this.player.pos.z))?"Canister refilled at the oasis.":"Canister refilled from the ship's water tank.")):wt("You need an empty Water Canister."))}}useItem(){if(this.ui||this.paused)return;const t=this.inv.selectedSlot();if(!t){wt("Select an item first."),this.audio.error();return}const e=Ft[t.itemId];if(t.itemId==="canister_full"){this.drink();return}if(e.eat){this.eat(t,e);return}wt(`You can't use ${e.name}.`),this.audio.error()}eat(t,e){this.inv.removeItem(t.itemId,1);const n=[];e.eat.water&&(this.survival.water=Math.min(100,this.survival.water+e.eat.water),n.push(`+${e.eat.water} Water`)),e.eat.health&&(this.survival.health=Math.min(100,this.survival.health+e.eat.health),n.push(`+${e.eat.health} Health`)),this.audio.drink(),wt(`Ate ${e.name}: ${n.join(", ")}`),this.renderHeld(),this.renderInv()}drink(){if(this.ui||this.paused)return;if(!this.inv.has("canister_full")){wt("No full Water Canister."),this.audio.error();return}this.inv.removeItem("canister_full",1);const t=this.survival.body;this.survival.drink(),this.survival.body<t-.4&&wt("Cold water slides down your throat — your body cools."),this.inv.addItem("canister_empty",1),this.audio.drink(),this.tut?.notify("drink"),this.renderHeld()}surge(){if(this.ui||this.paused)return;const t=this.survival.surge();if(t==="thirsty"){wt("You need at least 20 water to sweat-surge."),this.audio.error();return}if(t==="cooling"){wt("Your body is still cooling — wait a moment."),this.audio.error();return}this.tut?.notify("surge"),wt("You force yourself to sweat — evaporation cools your skin. (-10 water)"),this.audio.drink()}regulatorGlow(){const t=Math.floor(this.timeSec*2);if(t===this.regTick)return;this.regTick=t;const e=this.player.pos,n=Math.floor(e.x),s=Math.floor(e.y),r=Math.floor(e.z);let o=this.world.roomInfo(n,s,r);if(o.size===0)t:for(let l=-1;l<=1;l++)for(let d=-1;d<=1;d++)for(let h=-1;h<=1;h++){const f=this.world.roomInfo(n+l,s+d,r+h);if(f.size>0){o=f;break t}}const a=o.sealed&&o.regulators>0&&o.regulators*Ra>=o.size,c=new Set(a?o.regCells:[]);for(const[l,d]of this.regGlow){if(c.has(l))continue;this.renderer.removeEntityMesh(d);const[h,f,u]=l.split(",").map(Number);this.renderer.removePointLight(h,f,u),this.regGlow.delete(l)}for(const l of c){if(this.regGlow.has(l))continue;const[d,h,f]=l.split(",").map(Number);this.regGlowMat||(this.regGlowMat=new bn({color:9427199,emissive:9427199,emissiveIntensity:.9,transparent:!0,opacity:.38,depthWrite:!1}));const u=this.entitySeq++,m=this.renderer.addEntityMesh(u,[d+.5,h+.5,f+.5],9427199,1.03);m.material=this.regGlowMat,this.renderer.addPointLight(d,h,f,"cool"),this.regGlow.set(l,u)}}updatePickups(){const t=this.player.pos;for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];if(!(n.buried&&n.buriedAt&&this.world.get(n.buriedAt[0],n.buriedAt[1],n.buriedAt[2])!==Jt)){if(n.repickAt!==void 0){if(this.timeSec<n.repickAt)continue;n.repickAt=void 0}if(t.distanceTo(new P(n.x,n.y,n.z))<1.3){const s=this.inv.addItem(n.itemId,n.count);s===0?(n.srcIndex!==void 0&&this.collected.add(n.srcIndex),this.entities.splice(e,1),this.renderer.removeEntityMesh(n.id),this.audio.pickup()):n.count=s}}}}win(){this.won||(this.won=!0,Rl(this.scoreDays()),this.audio.win(),this.paused=!0,document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-win").classList.remove("hidden"),document.getElementById("win-stats").textContent=`Main Quest complete. Survived ${this.scoreDays().toFixed(1)} days. Best: ${Ds().toFixed(1)} days. The beacon relay is live — rescuers are on their way.`)}die(){this.caches.some(t=>Math.abs(t.x-this.player.pos.x)<.5)||(this.deathCause=this.survival.causeOfDeath??"exposure",this.audio.death(),this.caches.push({id:this.entitySeq++,x:Math.floor(this.player.pos.x),y:Math.floor(this.player.pos.y),z:Math.floor(this.player.pos.z),kind:"death",items:this.inv.slots.map(t=>({itemId:t.itemId,count:t.count}))}),this.inv.slots=[],this.inv.selected=0,Rl(this.scoreDays()),this.survival.health=0,this.running=!0,this.paused=!0,document.getElementById("screen-death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),document.getElementById("death-cause").textContent=`Cause: ${this.deathCause}.`,document.getElementById("death-stats").textContent=`Survived ${this.scoreDays().toFixed(1)} days in this run. Best: ${Ds().toFixed(1)} days. Your belongings wait in a Death Cache where you fell.`,this.saveNow(),this.onDeathCb&&this.onDeathCb())}scoreDays(){return this.playSec/sn}respawn(){document.getElementById("screen-death").classList.add("hidden"),this.paused=!1,this.survival.reset();const t=[...this.beaconMarks].reverse().find(e=>this.world.get(e.x,e.y,e.z)===tn);t?this.player.pos.set(t.x+.5,t.y+1.01,t.z+.5):this.player.pos.set(.5,31.01,.5),this.player.vel.set(0,0,0),this.saveNow()}toggleInv(){this.ui==="inv"?this.closeUI():this.paused||(this.unlockPointer(),this.ui="inv",this.renderInv(),document.getElementById("ui-inventory").classList.remove("hidden"))}closeUI(){if(this.ui==="inv"&&this.temp){wt("Temporary storage is occupied — place or drop the item first."),this.audio.error();return}this.ui=null,this.openStation=null,this.openCacheId=null,this.chestInv=null,this.gridFocus="inv";for(const t of["ui-inventory","ui-craft","ui-cache"])document.getElementById(t).classList.add("hidden");this.paused&&(this.paused=!1,document.getElementById("screen-pause").classList.add("hidden")),this.relock()}renderHeld(){Pl(this.survival,this.inv,this.timeSec,this.dayNumber(),this.settings.units,performance.now())}hotbarItems(){const t=[];for(const e of this.inv.slots)t.includes(e.itemId)||t.push(e.itemId);return t}selectItem(t){this.inv.selected=this.inv.slots.findIndex(e=>e.itemId===t)}selectHeld(t){const e=this.inv.slots.findIndex(n=>n.itemId===t);e>=0&&(this.inv.selected=e,this.renderHeld())}cycleItem(t){const e=this.hotbarItems();if(!e.length){this.inv.selected=0,this.renderHeld();return}const n=e.indexOf(this.inv.selectedSlot()?.itemId??"");this.selectItem(e[((n+t)%e.length+e.length)%e.length]),this.renderHeld()}static CELL=64;static GAP=6;uiZoom(){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ui-scale"));return Number.isFinite(t)&&t>0?t:1}temp=null;renderInv(){this.renderGrid(this.inv,document.getElementById("inv-grid"));const t=document.getElementById("chest-section");this.chestInv?(t.classList.remove("hidden"),document.getElementById("chest-info").textContent=`(${this.chestInv.w}×${this.chestInv.h})`,this.renderGrid(this.chestInv,document.getElementById("chest-grid"))):t.classList.add("hidden");const e=document.getElementById("inv-temp");e.innerHTML="";const n=document.getElementById("btn-drop-temp");if(this.temp){const h=Ft[this.temp.itemId];e.classList.add("filled"),e.style.background=h.color,e.style.backgroundImage=`url(${Rr(this.temp.itemId)[0]??""})`,e.textContent=this.temp.count>1?`${this.temp.count}`:"",e.onmousedown=f=>this.startTempDrag(f),n.textContent=`Drop ${this.temp.count>1?this.temp.count+"× ":""}${h.name}`,n.onclick=()=>{this.temp&&(this.dropEntity(this.temp.itemId,this.temp.count,1),this.temp=null,this.audio.place(),this.renderInv())}}else e.classList.remove("filled"),e.style.background="",e.style.backgroundImage="",e.textContent="",e.onmousedown=null,n.onclick=null;n.classList.toggle("hidden",!this.temp);for(const h of["backpack","head","body"]){const f=document.getElementById("eq-"+h),u=this.equip[h];if(u){const m=Ft[u.itemId];f.classList.add("filled"),f.style.background=m.color,f.style.backgroundImage=`url(${Rr(u.itemId)[0]??""})`,f.title=`Click to take off the ${m.name}`,f.onclick=()=>this.unequipSlot(h)}else f.classList.remove("filled"),f.style.background="#23262e",f.style.backgroundImage="",f.title="",f.onclick=()=>{const m=this.inv.selectedSlot();m&&Ft[m.itemId].equip===h?this.equipItem():m&&(wt(`The ${Ft[m.itemId].name} does not fit the ${h} slot.`),this.audio.error())}}const s=document.getElementById("inv-side"),r=this.gridFocus==="chest"&&this.chestInv?this.chestInv:this.inv,o=r.selectedSlot(),a=this.temp??o,c=this.inv.weight()+(this.temp?Ft[this.temp.itemId].mass*this.temp.count:0),l=this.inv.weightLimit(),d=a?hn(a):null;if(s.textContent=a?`${Ft[a.itemId].name} — ${Ft[a.itemId].desc}`:"Click an item to inspect it; drag to move it.",s.textContent+=` Weight ${c.toFixed(1)} / ${l} kg`,a&&d&&d.w!==d.h){const h=document.createElement("button");h.textContent="Rotate",h.onclick=()=>{this.temp?this.temp.rot=!this.temp.rot:r.rotate(o)||(wt("No room to rotate."),this.audio.error()),this.renderInv()},s.appendChild(h)}if(o){const h=Ft[o.itemId];if(h.equip){const f=document.createElement("button");f.textContent=`Equip (${h.equip} slot)`,f.onclick=()=>this.equipItem(),s.appendChild(f)}}if(o)if(r===this.chestInv){const h=document.createElement("button");h.textContent="Move to pack",h.onclick=()=>{const f=r.slots.indexOf(o);r.slots.splice(f,1),fe.placeSlotFree(this.inv,o)||(r.slots.splice(f,0,o),wt("No room in your pack."),this.audio.error()),this.renderInv()},s.appendChild(h)}else{const h=document.createElement("button");h.textContent="Drop 1",h.onclick=()=>{this.inv.removeItem(o.itemId,1),this.dropEntity(o.itemId,1,1),this.renderInv()},s.appendChild(h)}}renderGrid(t,e){const n=fe.CELL;e.innerHTML="",e.style.gridTemplateColumns=`repeat(${t.w}, ${n}px)`;const s=(r,o)=>t.slots.find(a=>{const c=hn(a);return r>=a.x&&r<a.x+c.w&&o>=a.y&&o<a.y+c.h});for(let r=0;r<t.h;r++)for(let o=0;o<t.w;o++){const a=document.createElement("div");a.className="invcell";const c=s(o,r);if(c){const l=Ft[c.itemId],d=o-c.x,h=r-c.y,f=Rr(c.itemId),u=c.rot?(l.h-1-d)*l.w+h:h*l.w+d;if(a.style.background=l.color,a.style.backgroundImage=`url(${f[Math.min(u,f.length-1)]??""})`,c.count>1&&d===0&&h===0){const x=document.createElement("div");x.className="icon",x.textContent=`${c.count}`,a.appendChild(x)}t.slots.indexOf(c)===t.selected&&a.classList.add("active"),a.onmouseenter=()=>{document.getElementById("inv-side").textContent=`${l.name} — ${l.desc}`},a.onmousedown=x=>{Date.now()-this.lastTouchTs<700?this.tapCell(t,o,r):this.startInvDrag(x,c,t)}}else a.onmousedown=()=>{Date.now()-this.lastTouchTs<700&&this.tapCell(t,o,r)};e.appendChild(a)}}tapCell(t,e,n){const s=t.slots.find(o=>{const a=hn(o);return e>=o.x&&e<o.x+a.w&&n>=o.y&&n<o.y+a.h}),r=t.selectedSlot();if(r&&r!==s){const o=hn(r),a=Math.min(e,t.w-o.w),c=Math.min(n,t.h-o.h);if(a>=0&&c>=0&&this.tapMove(t,r,s,a,c)){this.audio.place(),t.selected=t.slots.indexOf(r),this.renderInv();return}}s?(t.selected=t.slots.indexOf(s),this.renderInv()):t.selected!==-1&&(t.selected=-1,this.renderInv())}tapMove(t,e,n,s,r){const o=hn(e);if(t.fits(s,r,o.w,o.h,e))return t.move(e,s,r);if(!n)return!1;const a=hn(n),c=t.slots.indexOf(e);t.slots.splice(c,1);const l=t.fits(e.x,e.y,a.w,a.h,n)&&t.fits(s,r,o.w,o.h,n)&&!(s<e.x+a.w&&e.x<s+o.w&&r<e.y+a.h&&e.y<r+o.h)&&t.move(n,e.x,e.y)&&t.move(e,s,r);return t.slots.splice(c,0,e),l}startInvDrag(t,e,n){if(t.button!==0)return;if(t.preventDefault(),t.shiftKey){this.shiftMove(e,n);return}const s=n.slots.indexOf(e);n.selected=s,n.slots.splice(s,1);const r=this.temp;this.temp=e,r&&(n.slots.push(r),n.move(r,e.x,e.y)||this.giveOrDrop(r.itemId,r.count));const o=(fe.CELL+fe.GAP)*this.uiZoom(),a=fe.GAP*this.uiZoom(),c=hn(e),l=document.createElement("div");l.className="inv-ghost",l.style.width=c.w*o-a+"px",l.style.height=c.h*o-a+"px",l.style.background=Ft[e.itemId].color,l.style.backgroundImage=`url(${Vn(e.itemId,e.rot?1:0)})`,document.body.appendChild(l);const d=(n===this.inv?document.getElementById("inv-grid"):document.getElementById("chest-grid")).getBoundingClientRect(),h={gx:t.clientX-(d.left+e.x*o),gy:t.clientY-(d.top+e.y*o)},f=m=>{l.style.left=m.clientX-h.gx+"px",l.style.top=m.clientY-h.gy+"px"},u=m=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",u),l.remove();const x=hn(e);let g=null,p=0,T=0;for(const[_,v]of this.gridsEls()){const w=_.getBoundingClientRect();if(p=Math.round((m.clientX-w.left-h.gx)/o),T=Math.round((m.clientY-w.top-h.gy)/o),p>=0&&T>=0&&p<=v.w-x.w&&T<=v.h-x.h){g=v;break}}g&&(g.slots.push(e),g.move(e,p,T)||g===n&&g.move(e,e.x,e.y)?(this.temp=null,this.audio.place(),g.selected=g.slots.indexOf(e)):g.slots.splice(g.slots.indexOf(e),1)),this.inv.selected=Math.min(this.inv.selected,Math.max(0,this.inv.slots.length-1)),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",f),window.addEventListener("mouseup",u),f(t)}shiftMove(t,e){const n=this.chestInv?e===this.inv?this.chestInv:e===this.chestInv?this.inv:null:null;if(n){const o=e.slots.indexOf(t);if(e.slots.splice(o,1),!fe.placeSlotFree(n,t)){e.slots.splice(o,0,t),wt(e===this.inv?"No room in the chest.":"No room in your pack."),this.audio.error(),this.renderInv();return}this.audio.place(),this.renderInv(),this.renderHeld();return}const s=e.slots.indexOf(t);e.selected=s,e.slots.splice(s,1);const r=this.temp;this.temp=t,r&&(e.slots.push(r),e.move(r,t.x,t.y)||this.giveOrDrop(r.itemId,r.count)),this.renderInv(),this.renderHeld()}gridsEls(){const t=[[document.getElementById("inv-grid"),this.inv]];return this.chestInv&&t.push([document.getElementById("chest-grid"),this.chestInv]),t}startTempDrag(t){if(t.button!==0||!this.temp)return;t.preventDefault();const e=this.temp,n=(fe.CELL+fe.GAP)*this.uiZoom(),s=fe.GAP*this.uiZoom(),r=hn(e),o=document.createElement("div");o.className="inv-ghost",o.style.width=r.w*n-s+"px",o.style.height=r.h*n-s+"px",o.style.background=Ft[e.itemId].color,o.style.backgroundImage=`url(${Vn(e.itemId,e.rot?1:0)})`,document.body.appendChild(o);const a=l=>{o.style.left=l.clientX-r.w*n/2+"px",o.style.top=l.clientY-r.h*n/2+"px"},c=l=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",c),o.remove();const d=(r.w*n-s)/2,h=(r.h*n-s)/2;let f=null,u=0,m=0;for(const[x,g]of this.gridsEls()){const p=x.getBoundingClientRect();if(u=Math.round((l.clientX-p.left-d)/n),m=Math.round((l.clientY-p.top-h)/n),u>=0&&m>=0&&u<=g.w-r.w&&m<=g.h-r.h){f=g;break}}f&&(f.slots.push(e),f.move(e,u,m)?(this.temp=null,this.audio.place(),f.selected=f.slots.indexOf(e),f===this.inv&&(this.inv.selected=f.selected)):(f.slots.splice(f.slots.indexOf(e),1),this.audio.error())),this.renderInv(),this.renderHeld()};window.addEventListener("mousemove",a),window.addEventListener("mouseup",c),a(t)}renderCraft(t){document.getElementById("ui-craft").classList.remove("hidden"),document.getElementById("craft-title").textContent=t==="bench"?"Crafting Bench":"Campfire Smelting";const e=document.getElementById("craft-list");if(e.innerHTML="",document.getElementById("smelt-ui").classList.toggle("hidden",t!=="smelt"),t==="bench")for(const s of yh){const r=document.createElement("div");r.className="craft-row";const o=`${Ft[s.out].name}${s.count>1?" ×"+s.count:""}`,a=Object.entries(s.needs).map(([d,h])=>`${h}× ${Ft[d].name}`).join(", "),c=Eh(this.inv,s);r.innerHTML=`<span class="what"><img class="craft-art" src="${Vn(s.out)}" alt="">${o} <span class="needs">(${a})</span></span>`;const l=document.createElement("button");l.textContent="Craft",l.disabled=!c,l.onclick=()=>{const d=Zg(this.inv,s);if(d===null){this.audio.error();return}d>0&&this.giveOrDrop(s.out,d),this.tut?.notify("craft"),Ft[s.out]?.tool&&this.questBump("tool"),this.audio.place(),this.renderCraft("bench")},r.appendChild(l),e.appendChild(r)}else{const s=this.openStation,r=`${s[0]},${s[1]},${s[2]}`,o=this.campCharges.get(r)??0;document.getElementById("smelt-fuel").textContent=`${o} charges`,document.getElementById("btn-addfuel").onclick=()=>{if(!this.inv.has("deadwood",1)){wt("No Dead Wood to burn."),this.audio.error();return}this.inv.removeItem("deadwood",1),this.campCharges.set(r,o+3),this.renderCraft("smelt")};for(const a of Sh){const c=document.createElement("div");c.className="craft-row",c.innerHTML=`<span class="what"><img class="craft-art" src="${Vn(a.out)}" alt="">${Ft[a.in].name} → ${Ft[a.out].name} <span class="needs">(1 fuel charge)</span></span>`;const l=document.createElement("button");l.textContent="Smelt",l.disabled=!this.inv.has(a.in,1)||o<1,l.onclick=()=>{this.inv.removeItem(a.in,1),this.campCharges.set(r,o-1);const d=this.inv.addItem(a.out,1);d>0&&this.giveOrDrop(a.out,d),this.audio.place(),this.renderCraft("smelt")},c.appendChild(l),e.appendChild(c)}}}renderCache(){const t=this.caches.find(s=>s.id===this.openCacheId);document.getElementById("cache-title").textContent=t?.kind==="reward"?"Reward Cache — claim your quest reward":"Death Cache — take your belongings";const e=document.getElementById("cache-list");if(e.innerHTML="",!t||!t.items.length){this.closeUI();return}for(const s of t.items){const r=document.createElement("div");r.className="cache-item",r.textContent=`${s.count}× ${Ft[s.itemId].name}`,e.appendChild(r)}const n=document.createElement("button");n.textContent="Take everything",n.onclick=()=>{let s=!0;for(;s;){s=!1;for(const r of t.items){const o=this.inv.addItem(r.itemId,r.count);o<r.count&&(s=!0,r.count=o),o===0&&t.items.splice(t.items.indexOf(r),1)}}t.items.length||this.renderer.removeEntityMesh(t.id),this.renderCache(),t.items.length||this.closeUI()},e.appendChild(n)}}const f_=["drone","wanderer","wanderer","caravan","caravan","nightwind"],p_=["drone","nightwind","nightwind","caravan","wanderer"],Dl={drone:3.2,wanderer:2.2,nightwind:4.4,caravan:2},Ul=[[0,4,7,9,12,16,19],[0,2,4,7,9,12,14,16],[0,2,5,7,9,12,14]],m_=[[0,1,4,5,7,8,10,12],[0,2,3,5,7,8,10,12],[0,3,5,7,10,12,15]],Nl=[0,2,4,2,3,5,4,1],g_=[0,0,3,2,4,3,2,0];class __{ctx=null;windGain=null;musicGain=null;droneOscs=[];musicTimer=0;nextBar=0;barCount=0;musicOn=!0;isDay=!0;genre="drone";genreEnd=0;root=98;deg=Ul[0];noiseBuf=null;volume=.7;heartTimer=0;resume(){if(!this.ctx){this.ctx=new AudioContext;const t=this.ctx.sampleRate,e=this.ctx.createBuffer(1,t*4,t),n=e.getChannelData(0);let s=0,r=0;for(let d=0;d<n.length;d++){const h=Math.random()*2-1;s=.99*s+.01*h,r=.96*r+.04*h,n[d]=(s+r)*2}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.noiseBuf=e;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const c=this.ctx.createOscillator();c.frequency.value=.13;const l=this.ctx.createGain();l.gain.value=100,c.connect(l).connect(a.frequency),c.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=.06*this.volume,o.connect(a).connect(this.windGain).connect(this.ctx.destination),o.start()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}setVolume(t){this.volume=t,this.windGain&&(this.windGain.gain.value=.06*t),this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((this.musicOn?.16:0)*t,this.ctx.currentTime,.4)}setMusic(t){this.musicOn=t,this.ctx&&this.musicGain&&this.musicGain.gain.setTargetAtTime((t?.16:0)*this.volume,this.ctx.currentTime,.6)}setDay(t){this.isDay!==t&&(this.isDay=t,!(!this.ctx||!this.droneOscs.length)&&this.rollGenre(this.ctx.currentTime))}startMusic(){if(!this.ctx||this.musicGain)return;const t=this.ctx;this.musicGain=t.createGain(),this.musicGain.gain.value=this.musicOn?.16*this.volume:0,this.musicGain.connect(t.destination);const e=t.createDelay(1);e.delayTime.value=.38;const n=t.createGain();n.gain.value=.35;const s=t.createGain();s.gain.value=.35,this.musicGain.connect(e),e.connect(n),n.connect(e),e.connect(s),s.connect(t.destination),[1,1.5,2].forEach((r,o)=>{const a=t.createOscillator();a.type=o===2?"sine":"triangle",a.frequency.value=this.root*r,a.detune.value=o*3-3;const c=t.createGain();c.gain.value=.03/(o+1);const l=t.createOscillator();l.frequency.value=.05+o*.017;const d=t.createGain();d.gain.value=.018,l.connect(d).connect(c.gain),l.start(),a.connect(c).connect(this.musicGain),a.start(),this.droneOscs.push(a)}),this.genreEnd=t.currentTime+90+Math.random()*150,this.musicTimer=window.setInterval(()=>this.compose(),500)}rollGenre(t){const e=this.isDay?f_:p_;let n=e[Math.floor(Math.random()*e.length)];n===this.genre&&(n=e[Math.floor(Math.random()*e.length)]),this.genre=n,this.root=55*2**((4+Math.floor(Math.random()*12))/12);const s=this.isDay?Ul:m_;if(this.deg=s[Math.floor(Math.random()*s.length)],this.genreEnd=t+90+Math.random()*150,this.ctx){const r=this.ctx.currentTime;this.droneOscs.forEach((o,a)=>o.frequency.setTargetAtTime(this.root*[1,1.5,2][a],r,5))}}compose(){if(!(!this.ctx||!this.musicGain||!this.musicOn))for(this.nextBar<this.ctx.currentTime-.2&&(this.nextBar=this.ctx.currentTime+.3);this.nextBar<this.ctx.currentTime+1.6;)this.nextBar>=this.genreEnd&&this.rollGenre(this.nextBar),this.scheduleBar(this.nextBar),this.nextBar+=Dl[this.genre],this.barCount++}scheduleBar(t){const e=this.root,n=this.deg,s=(o,a)=>e*o*2**(n[(a%n.length+n.length)%n.length]/12),r=Dl[this.genre];switch(this.genre){case"drone":{this.note(s(1,0),t,r*.95,"sine",.18,.15),[0,2,4].forEach(o=>this.note(s(2,o),t+.05,r*.9,"triangle",.03,.4));for(let o=0;o<8;o++)Math.random()<.15||this.note(s(4,Nl[o]),t+o*r/8,.9,"triangle",.12,.015);if(Math.random()<.6){const o=1+Math.floor(Math.random()*6);this.note(s(4,o),t+Math.floor(Math.random()*5)*(r/8),1.4,"sine",.13,.03)}break}case"wanderer":{this.note(s(1,0),t,r*.55,"sine",.16,.02);for(let o=0;o<8;o++)Math.random()<.1||this.note(s(Math.random()<.3?3:4,Nl[o]),t+o*r/8,.55,"triangle",.12,.01);if(Math.random()<.7){const o=1+Math.floor(Math.random()*5);this.note(s(5,o),t+Math.floor(Math.random()*6)*(r/8),.8,"sine",.11,.02)}break}case"nightwind":{this.note(s(1,0),t,r*.95,"sine",.15,.3),Math.random()<.4&&[0,2,4].forEach(a=>this.note(s(2,a),t+.1,r*.85,"triangle",.025,.6));const o=1+Math.floor(Math.random()*3);for(let a=0;a<o;a++){const c=Math.floor(Math.random()*n.length),l=1.6+Math.random()*(r-1.2);this.note(s(4,c),t+Math.random()*(r-1),l,"sine",.12,.35)}break}case"caravan":{for(let o=0;o<8;o++)(o===0||o===3||o===4)&&this.drum(t+o*r/8),o%2===1&&this.brush(t+o*r/8);this.note(s(1,0),t,r*.45,"sine",.17,.01),this.note(s(1,3),t+r/2,r*.4,"sine",.14,.01);for(let o=0;o<8;o++)Math.random()<.25||this.note(s(3,g_[o]),t+o*r/8,.4,"triangle",.1,.01);if(Math.random()<.4){const o=1+Math.floor(Math.random()*4);this.note(s(4,o),t+Math.floor(Math.random()*4)*(r/4),.7,"square",.05,.02)}break}}}drum(t){if(!this.ctx||!this.musicGain)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n).connect(this.musicGain),e.start(t),e.stop(t+.3)}brush(t){if(!this.ctx||!this.musicGain||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2600;const s=this.ctx.createGain();s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.09),e.connect(n).connect(s).connect(this.musicGain),e.start(t,Math.random()*3.9),e.stop(t+.1)}note(t,e,n,s,r,o){if(!this.ctx||!this.musicGain)return;const a=this.ctx.createOscillator();a.type=s,a.frequency.value=t;const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(r,e+o),c.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(c).connect(this.musicGain),a.start(e),a.stop(e+n+.05)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=0}blip(t,e,n,s=.2,r=0){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(t,o),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),c.gain.setValueAtTime(s*this.volume,o),c.gain.exponentialRampToValueAtTime(.001,o+e),a.connect(c).connect(this.ctx.destination),a.start(o),a.stop(o+e)}noiseHit(t,e,n=.25){if(!this.ctx)return;const s=this.ctx.currentTime,r=this.ctx.sampleRate,o=this.ctx.createBuffer(1,Math.max(1,Math.floor(r*t)),r),a=o.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=(Math.random()*2-1)*(1-h/a.length);const c=this.ctx.createBufferSource();c.buffer=o;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=e;const d=this.ctx.createGain();d.gain.value=n*this.volume,c.connect(l).connect(d).connect(this.ctx.destination),c.start(s)}tick(){this.noiseHit(.06,900,.14)}blockBreak(){this.noiseHit(.2,500,.3)}place(){this.blip(320,.07,"square",.12)}door(){this.blip(180,.25,"sawtooth",.12,-80)}drink(){this.blip(240,.18,"sine",.18,120)}pickup(){this.blip(660,.1,"sine",.16,200)}savePing(){this.blip(880,.35,"sine",.2,220)}error(){this.blip(140,.2,"square",.12,-40)}hurt(){this.noiseHit(.3,420,.38),this.blip(95,.35,"square",.3,-45),setTimeout(()=>this.blip(175,.16,"sawtooth",.18,-95),60)}death(){this.blip(90,1.2,"sawtooth",.35,-60)}warn(){this.blip(640,.4,"square",.14,-160),setTimeout(()=>this.blip(640,.4,"square",.14,-160),500)}thud(){this.noiseHit(.35,200,.35)}win(){[520,660,780,1040].forEach((t,e)=>setTimeout(()=>this.blip(t,.28,"sine",.2,30),e*170))}heartbeat(t,e){e<=0||e>30||(this.heartTimer-=t,this.heartTimer<=0&&(this.heartTimer=.9+e/30,this.blip(55,.12,"sine",.4),setTimeout(()=>this.blip(50,.1,"sine",.25),140)))}}const Vt=i=>document.getElementById(i),Fl=i=>Vt(i).value,Ve=(i,t=!0)=>Vt(i).classList.toggle("hidden",!t),v_=["screen-title","screen-settings","screen-instructions","screen-pause","screen-death","screen-win","screen-catalog","ui-inventory","ui-craft","ui-cache"],oc=()=>v_.forEach(i=>Ve(i,!1)),Nr=new __;let ce=n_(),Ct=null;document.addEventListener("click",()=>Nr.resume(),{once:!0});document.addEventListener("touchstart",()=>Nr.resume(),{once:!0});function Wr(){oc(),Ve("screen-title"),Vt("best-score").textContent=Ds()>0?`Best run: ${Ds().toFixed(1)} days`:"";const i=Vt("worldlist");i.innerHTML="";const t=Vr();t.length||(i.innerHTML='<div class="needs">No worlds yet. Type a seed (or leave it blank) and create one.</div>');for(const e of t){const n=document.createElement("div");n.className="world-row";const s=Ch(e.id),r=document.createElement("span");r.textContent=`${e.name} — seed “${e.seedStr}” — ${s?`day ${s.days}, survived ${(s.playSec/sn).toFixed(1)} days`:"never played"}`;const o=document.createElement("button");o.textContent="Load",o.onclick=()=>Xr(e,s);const a=document.createElement("button");a.textContent="Export",a.onclick=()=>{s?Ih(e,s):wt("Nothing saved for this world yet.")};const c=document.createElement("button");c.textContent="Delete",c.onclick=()=>{c.textContent==="Sure?"?(s_(e.id),Wr()):(c.textContent="Sure?",setTimeout(()=>c.textContent="Delete",2500))},n.append(r,o,a,c),i.appendChild(n)}}function Xr(i,t){oc(),Ve("cheats",!1),Vt("hud").classList.remove("hidden"),ce.fullscreen&&document.fullscreenEnabled&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),Vt("btn-save").classList.toggle("hidden",i.id.startsWith("guest")),Vt("btn-exportworld").classList.toggle("hidden",i.id.startsWith("guest")),Nr.resume(),Ct=new fe(i,t,Vt("game-wrap"),ce,Nr),globalThis.game=Ct,Ct.start(),t===null&&Ct.startTutorial()}function ac(){Ct&&(Ct.saveNow(),Ct.stop()),Ct=null,delete globalThis.game,Vt("hud").classList.add("hidden"),Wr()}function cc(i){oc(),Ve(i)}function x_(){Ct&&(Ct.pauseSubmenu=null),Ve("screen-settings",!1),Ve("screen-instructions",!1),Ve("screen-catalog",!1),Ct?(Ve("ui-inventory",!1),Ve("ui-craft",!1),Ve("ui-cache",!1),Ve("screen-pause",!1),Ct.paused=!1,Ct.relock()):Wr()}function lc(){Ct&&(Ct.pauseSubmenu=Ct.paused?"settings":null),cc("screen-settings");const i=Vt("settings-body");i.innerHTML="";const t=(e,n,s,r)=>{const o=document.createElement("div");o.className="setting";const a=document.createElement("span");a.textContent=e;const c=document.createElement("div");c.className="seg";const l=[];for(const[d,h]of n){const f=document.createElement("button");f.type="button",f.textContent=d,String(h)===String(s)&&f.classList.add("on"),f.onclick=()=>{for(const u of l)u.classList.remove("on");f.classList.add("on"),r(h)},l.push(f),c.appendChild(f)}o.append(a,c),i.appendChild(o)};if(t("Look sensitivity",[["Slow",.6],["Normal",1],["Fast",1.6],["Turbo",2.5]],ce.sens,e=>{ce.sens=e,xn()}),t("Invert Y",[["Off",!1],["On",!0]],ce.invertY,e=>{ce.invertY=e,xn()}),t("Volume",[["Mute",0],["Low",.34],["Medium",.67],["High",1]],ce.volume,e=>{ce.volume=e,xn()}),t("Music",[["Off",!1],["On",!0]],ce.music,e=>{ce.music=e,xn()}),t("Field of view",[["60",60],["70",70],["80",80],["90",90],["100",100]],ce.fov,e=>{ce.fov=e,xn()}),t("Render distance",[["Low",4],["Medium",6],["High",8],["Far",10],["Ultra",12]],ce.renderDist,e=>{ce.renderDist=e,xn()}),t("Quality",[["Low","low"],["Medium","med"],["High","high"]],ce.quality,e=>{ce.quality=e,xn()}),t("Temperature units",[["Celsius","C"],["Fahrenheit","F"]],ce.units,e=>{ce.units=e,xn()}),t("UI size",[["Small",.8],["Normal",1],["Large",1.25],["Huge",1.6]],ce.uiScale,e=>{ce.uiScale=e,xn()}),document.fullscreenEnabled)t("Fullscreen",[["Off",!1],["On",!0]],ce.fullscreen,e=>{ce.fullscreen=e,xn(),e?document.documentElement.requestFullscreen().catch(()=>{ce.fullscreen=!1,xn(),lc()}):document.fullscreenElement&&document.exitFullscreen().catch(()=>{})});else{const e=document.createElement("div");e.className="setting",e.append(document.createTextNode("Fullscreen"),Object.assign(document.createElement("span"),{className:"needs",textContent:"not available in this browser"})),i.appendChild(e)}}function Ph(i){document.documentElement.style.setProperty("--ui-scale",String(i))}function xn(){i_(ce),Ph(ce.uiScale),Ct&&Ct.applySettings(ce)}let La="items";function hc(){Ct&&(Ct.pauseSubmenu=Ct.paused?"catalog":null),cc("screen-catalog");for(const t of Array.from(Vt("catalog-tabs").querySelectorAll(".tab")))t.classList.toggle("active",t.dataset.tab===La);const i=Vt("catalog-body");if(i.innerHTML="",La==="items"){const t=document.createElement("div");t.className="cat-grid";const e=(n,s,r,o)=>{const a=document.createElement("div");a.className="cat-card";const c=document.createElement("img");c.src=n,c.alt="";const l=document.createElement("div");l.innerHTML=`<b>${s}</b><div class="cat-meta">${r}</div><div class="cat-desc">${o}</div>`,a.append(c,l),t.append(a)};for(const n of Object.values(Ft).sort((s,r)=>s.name.localeCompare(r.name)))e(Vn(n.id),n.name,`${n.w}×${n.h} cell · ${n.mass} kg${n.block!==void 0?" · placeable":""}`,n.desc);for(const n of Yn){if(n.id===0||n.name==="Air")continue;const s=Object.values(Ft).find(o=>o.block===n.id),r=`${n.placeable?"placeable":"world only"} · ${n.R>0?`R ${n.R}`:"no insulation"}${n.emissive?" · light source":""}`;e(s?Vn(s.id):o_(n.id),n.name,r,s?.desc??"Found in the world; mine it to collect it."+(n.minTier>0?` Needs a tier-${n.minTier} ${n.tool??"tool"}.`:""))}i.append(t)}else{const t=(e,n,s,r)=>{const o=document.createElement("div");o.className="cat-recipe";const a=document.createElement("img");a.src=e,a.alt="",a.style.width="36px",a.style.height="36px",a.style.imageRendering="pixelated",o.append(a,Object.assign(document.createElement("span"),{innerHTML:`${n} <span class="arrow">→</span> <b>${s}</b> <span class="needs">(${r})</span>`})),i.append(o)};for(const e of yh){const n=Object.entries(e.needs).map(([s,r])=>`${r}× ${Ft[s].name}`).join(" + ");t(Vn(e.out),n,`${Ft[e.out].name}${e.count>1?" ×"+e.count:""}`,e.bench?"Crafting Bench":"hands")}for(const e of Sh)t(Vn(e.out),`1× ${Ft[e.in].name}`,Ft[e.out].name,"Campfire, 1 fuel charge")}}for(const i of Array.from(Vt("catalog-tabs").querySelectorAll(".tab")))i.onclick=()=>{La=i.dataset.tab,hc()};const M_=[["WASD","move"],["Shift","sprint (sweats, costs water)"],["Space","jump one block"],["Mouse","look (click the world to capture the pointer)"],["Left click, hold","mine a block or hit a mob (right tool tier matters)"],["Metal Sword","Crafting Bench: 2 Metal Rods + 1 Dead Wood — far harder hits, longer reach (snake dies in 2 swings, rat in 1)"],["Right click","place the selected block"],["E","interact: doors, beacon save, bench, campfire, Heat Regulator (set body to 37 °C), oasis / water-station refill, death caches"],["Q","use the held item: drink a full canister (+25 water, cools you a little), or eat food"],["X","sweat surge: spend 10 water to force your body cool (needs 20+ water, 10 s cooldown)"],["I","inventory — Equip gear"],["1-9 / mouse wheel / click hotbar","select item — press the number or click the already-held item to empty your hands"],["Esc","close open menu, or pause"],["P","pause / resume"]],y_=[["Left stick","move"],["Drag the right half of the screen","look"],["JUMP / BREAK / PLACE / ACT / DRINK / SURGE / ITEM / BAG","buttons on the right"],["BREAK, aimed at a mob","fight it — hold the Metal Sword for far harder hits and longer reach"],["Tap an item, then another cell","move it there (occupants swap); tap an Armour Slot to wear the selected gear; tap empty space to deselect"],["Bottom hotbar","tap a slot to select that item; the ITEM button cycles through it"]];function Dh(){Ct&&(Ct.pauseSubmenu=Ct.paused?"instructions":null),cc("screen-instructions");const i=Vt("instr-body");i.innerHTML="";const t=matchMedia("(pointer: coarse)").matches?y_:M_;for(const[n,s]of t){const r=document.createElement("div");r.innerHTML=`<b>${n}</b> — ${s}`,i.appendChild(r)}const e=document.createElement("div");e.className="needs",e.textContent="Keep the three bars inside their white safe bands; a pulsing ☀ beside the TEMP bar means you are overheating, ❄ means freezing. The Ship Interior is always sealed: your body heat drifts back to 36.6 °C there. Outside, midday cooks you and night freezes you — shade, walls and doors change what you are exposed to. Death costs everything you carry: it waits in a Death Cache where you fell. Respawning only works at a Save Beacon you activated with E. Beacons are the only save points. The desert is alive: Desert Snakes bite anything that steps too close, and Kangaroo Rats bolt — hunt one, cook the meat at a Campfire, eat it to heal. Break Cacti for Prickly Pears to drink. Snake skins stitch into Reptile Armour. Backpack, Visor and Armour go in the three Armour Slots inside the inventory: select the gear, then click or tap the empty slot to wear it.",i.appendChild(e)}Vt("btn-create").onclick=()=>{const i=Fl("seed-input").trim()||Math.random().toString(36).slice(2,10),t=Fl("world-name").trim()||i,e=Ah(t,i);Xr(e,null)};Vt("btn-guest").onclick=()=>{const i=Math.random().toString(36).slice(2,10);Xr({id:"guest:"+Date.now().toString(36),name:"Guest world",seedStr:i,updated:Date.now()},null)};Vt("btn-import").onclick=()=>Vt("import-file").click();Vt("import-file").onchange=async()=>{const i=Vt("import-file").files?.[0];if(i)try{const t=await r_(i);wt("World imported."),Xr(t,Ch(t.id))}catch(t){wt(`Import failed: ${t.message}`)}};Vt("btn-settings").onclick=lc;Vt("btn-pause-settings").onclick=lc;Vt("btn-instructions").onclick=Dh;Vt("btn-pause-instructions").onclick=Dh;Vt("btn-catalog").onclick=hc;Vt("btn-catalog-title").onclick=hc;for(const i of document.querySelectorAll(".close-btn"))i.onclick=()=>{if(Ct&&Ct.pauseSubmenu){Ct.closePauseSubmenu();return}Ct&&Ct.closeUI(),(!Ct||!(Ct.ui==="inv"&&Ct.temp))&&x_()};Vt("btn-resume").onclick=()=>{Ct&&(Ct.paused=!1,Ve("screen-pause",!1),Ve("cheats",!1),Ct.relock())};Vt("btn-save").onclick=()=>wt("Manual saves are not allowed — save at Save Beacons (the world auto-persists).");Vt("btn-exportworld").onclick=()=>{Ct&&Ct.exportWorld()};Vt("btn-quit").onclick=()=>ac();Vt("btn-cheats").onclick=()=>Ve("cheats",Vt("cheats").classList.contains("hidden"));const Uh=Vt("cheat-item");for(const[i,t]of Object.entries(Ft).sort((e,n)=>e[1].name.localeCompare(n[1].name))){const e=document.createElement("option");e.value=i,e.textContent=t.name,Uh.appendChild(e)}Vt("btn-cheat-add").onclick=()=>{if(!Ct)return;const i=Uh.value;Ct.inv.addItem(i,1)?wt("No room in your pack."):wt(`Added ${Ft[i].name}.`)};for(const i of Array.from(Vt("cheats").querySelectorAll("button[data-speed], button[data-immortal], button[data-frac]")))i.onclick=()=>{if(!Ct)return;if(i.dataset.speed!==void 0){Ct.speedMul=Number(i.dataset.speed),wt(`Player speed ×${i.dataset.speed}.`);return}if(i.dataset.immortal!==void 0){Ct.survival.invincible=i.dataset.immortal==="1",wt(`Immortality ${Ct.survival.invincible?"on":"off"}.`);return}const t=Number(i.dataset.frac);Ct.setClock(t),wt(`Clock set to ${i.textContent}.`)};Vt("btn-respawn").onclick=()=>{Ct&&Ct.respawn()};Vt("btn-death-title").onclick=()=>ac();Vt("btn-win-continue").onclick=()=>{Ct&&(Ct.paused=!1,Ve("screen-win",!1),Ct.relock())};Vt("btn-win-title").onclick=()=>ac();document.addEventListener("keydown",i=>{if(i.code==="Escape"&&!Vt("screen-title").classList.contains("hidden")&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}});Ph(ce.uiScale);Wr();
