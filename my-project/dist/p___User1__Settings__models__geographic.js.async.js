(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{rl2b:function(e,n,t){"use strict";t.r(n);var a=t("MVZn"),r=t.n(a),c=t("o0o1"),i=t.n(c),p=t("yXPU"),o=t.n(p),s=t("t3Un");function u(){return h.apply(this,arguments)}function h(){return h=o()(i.a.mark(function e(){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s["a"])("/api/geographic/province"));case 1:case"end":return e.stop()}},e,this)})),h.apply(this,arguments)}function y(e){return d.apply(this,arguments)}function d(){return d=o()(i.a.mark(function e(n){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s["a"])("/api/geographic/city/".concat(n)));case 1:case"end":return e.stop()}},e,this)})),d.apply(this,arguments)}n["default"]={namespace:"geographic1",state:{province:[],city:[],isLoading:!1},effects:{fetchProvince:i.a.mark(function e(n,t){var a,r,c;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.call,r=t.put,e.next=3,r({type:"changeLoading",payload:!0});case 3:return e.next=5,a(u);case 5:return c=e.sent,e.next=8,r({type:"setProvince",payload:c});case 8:return e.next=10,r({type:"changeLoading",payload:!1});case 10:case"end":return e.stop()}},e,this)}),fetchCity:i.a.mark(function e(n,t){var a,r,c,p;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=n.payload,r=t.call,c=t.put,e.next=4,c({type:"changeLoading",payload:!0});case 4:return e.next=6,r(y,a);case 6:return p=e.sent,e.next=9,c({type:"setCity",payload:p});case 9:return e.next=11,c({type:"changeLoading",payload:!1});case 11:case"end":return e.stop()}},e,this)})},reducers:{setProvince:function(e,n){return r()({},e,{province:n.payload})},setCity:function(e,n){return r()({},e,{city:n.payload})},changeLoading:function(e,n){return r()({},e,{isLoading:n.payload})}}}}}]);