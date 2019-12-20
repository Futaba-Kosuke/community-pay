(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d3d7502"],{1681:function(t,e,n){},7724:function(t,e,n){"use strict";var a=n("afba"),i=n.n(a);i.a},"850b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLogin?n("v-container",{staticClass:"create_coin"},[n("b",[n("p",{staticClass:"items_explanation",staticStyle:{"font-size":"20px"}},[t._v("○コイン生成")])]),n("p",{staticClass:"items_explanation"},[t._v("1. コインの名前を記入してください")]),n("v-text-field",{staticClass:"input_boxes",attrs:{label:"コイン名",outlined:""},model:{value:t.coin.name,callback:function(e){t.$set(t.coin,"name",e)},expression:"coin.name"}}),n("p",{staticClass:"items_explanation"},[t._v("2. コインの変換レートを記入してください")]),n("v-row",[n("v-col",{staticStyle:{"padding-top":"0px","padding-bottom":"0px"}},[n("v-text-field",{staticClass:"input_boxes",attrs:{label:"日本円",outlined:""},model:{value:t.coin.yen_rate,callback:function(e){t.$set(t.coin,"yen_rate",e)},expression:"coin.yen_rate"}})],1),n("v-col",{staticStyle:{"padding-top":"0px","padding-bottom":"0px"}},[n("v-text-field",{staticClass:"input_boxes",attrs:{label:t.coin.name,outlined:""},model:{value:t.coin.coin_rate,callback:function(e){t.$set(t.coin,"coin_rate",e)},expression:"coin.coin_rate"}})],1)],1),n("p",{staticClass:"items_explanation"},[t._v("3. コインの使用期限を記入してください")]),n("v-select",{staticClass:"input_boxes",attrs:{items:this.deadlines,label:"使用期限",outlined:""},model:{value:t.coin.deadline,callback:function(e){t.$set(t.coin,"deadline",e)},expression:"coin.deadline"}}),n("p",{staticClass:"items_explanation"},[t._v("4. コインの詳細について自由に記入してください")]),n("v-textarea",{staticClass:"input_boxes",attrs:{label:"説明",outlined:""},model:{value:t.coin.explanation,callback:function(e){t.$set(t.coin,"explanation",e)},expression:"coin.explanation"}}),n("v-btn",{attrs:{disabled:t.isCoin},on:{click:function(e){return t.createCoin()}}},[t._v("この設定でコインを作成する")])],1):t._e(),t.isLogin?t._e():n("forced-login-button")],1)},i=[],o=(n("7f7f"),n("96cf"),n("3b8d")),s=n("dc59"),r=n("c0d6"),c=n("5253"),l={name:"create_coin",components:{ForcedLoginButton:c["a"]},data:function(){return{coin:{name:"",yen_rate:"",coin_rate:"",deadline:"無制限",explanation:"",owners:[],users:[]},deadlines:["無制限","1日","3日","5日","1週間","3週間","1ヵ月","3ヵ月","5ヵ月","10ヵ月","1年"]}},methods:{createCoin:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===this.coin.name||isNaN(this.coin.yen_rate)||isNaN(this.coin.coin_rate)||""===this.coin.explanation){t.next=15;break}return console.log("aaa"),e=s["a"].auth().currentUser,n=s["a"].firestore(),a=n.collection("user").doc(e.uid),this.coin.owners.push(a),t.next=8,n.collection("coin").add(this.coin).then((function(t){console.log("success!",t.id),n.collection("user").doc(e.uid).update({management_coins:s["a"].firestore.FieldValue.arrayUnion(t)})})).catch((function(t){console.error("Error: ",t)}));case 8:return t.next=10,n.collection("user").doc(e.uid).update({management_coin_names:s["a"].firestore.FieldValue.arrayUnion(this.coin.name)});case 10:return t.next=12,n.collection("coin_names").doc("mqZnSrGaIxXB3uZdMQdm").update({coin_names:s["a"].firestore.FieldValue.arrayUnion(this.coin.name)});case 12:alert(this.coin.name+"を作成しました！"),this.$router.push("/"),this.$router.go(0);case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:{isCoin:function(){return!(""!==this.coin.name&&""!==this.coin.yen_rate&&""!==this.coin.coin_rate&&""!==this.coin.deadline&&""!==this.coin.explanation&&!isNaN(this.coin.yen_rate)&&!isNaN(this.coin.coin_rate))},isLogin:function(){return r["a"].state.user_state}}},u=l,d=(n("7724"),n("2877")),p=n("6544"),h=n.n(p),f=n("8336"),m=n("62ad"),b=n("a523"),x=n("0fd9"),v=n("b974"),_=n("8654"),g=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),w=(n("c5f6"),n("1681"),n("58df"));function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C=Object(w["a"])(_["a"]),k=C.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return O({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},_["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=_["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){_["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),N=Object(d["a"])(u,a,i,!1,null,"1ae9d2ba",null);e["default"]=N.exports;h()(N,{VBtn:f["a"],VCol:m["a"],VContainer:b["a"],VRow:x["a"],VSelect:v["a"],VTextField:_["a"],VTextarea:k})},afba:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5d3d7502.eade237b.js.map