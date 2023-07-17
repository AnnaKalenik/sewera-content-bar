
(function(d){if(!String.prototype.includes){(function(){var j={}.toString;var g=(function(){try{var n={};var m=Object.defineProperty;var k=m(n,n,n)&&m}catch(l){}return k}());var i="".indexOf;var h=function(p){if(this==null){throw new TypeError()}var n=String(this);if(p&&j.call(p)=="[object RegExp]"){throw new TypeError()}var l=n.length;var m=String(p);var o=m.length;var k=arguments.length>1?arguments[1]:undefined;var r=k?Number(k):0;if(r!=r){r=0}var q=Math.min(Math.max(r,0),l);if(o+q>l){return false}return i.call(n,m,r)!=-1};if(g){g(String.prototype,"includes",{value:h,configurable:true,writable:true})}else{String.prototype.includes=h}}())}if(!String.prototype.startsWith){(function(){var g=(function(){try{var m={};var l=Object.defineProperty;var j=l(m,m,m)&&l}catch(k){}return j}());var i={}.toString;var h=function(q){if(this==null){throw new TypeError()}var n=String(this);if(q&&i.call(q)=="[object RegExp]"){throw new TypeError()}var j=n.length;var r=String(q);var l=r.length;var m=arguments.length>1?arguments[1]:undefined;var p=m?Number(m):0;if(p!=p){p=0}var k=Math.min(Math.max(p,0),j);if(l+k>j){return false}var o=-1;while(++o<l){if(n.charCodeAt(k+o)!=r.charCodeAt(o)){return false}}return true};if(g){g(String.prototype,"startsWith",{value:h,configurable:true,writable:true})}else{String.prototype.startsWith=h}}())}if(!Object.keys){Object.keys=function(i,g,h){h=[];for(g in i){h.hasOwnProperty.call(i,g)&&h.push(g)}return h}}d.fn.triggerNative=function(g){var h=this[0],i;if(h.dispatchEvent){if(typeof Event==="function"){i=new Event(g,{bubbles:true})}else{i=document.createEvent("Event");i.initEvent(g,true,false)}h.dispatchEvent(i)}else{if(h.fireEvent){i=document.createEventObject();i.eventType=g;h.fireEvent("on"+g,i)}this.trigger(g)}};d.expr[":"].icontains=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.text()).toUpperCase();return h.includes(i[3].toUpperCase())};d.expr[":"].ibegins=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.text()).toUpperCase();return h.startsWith(i[3].toUpperCase())};d.expr[":"].aicontains=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.data("normalizedText")||k.text()).toUpperCase();return h.includes(i[3].toUpperCase())};d.expr[":"].aibegins=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.data("normalizedText")||k.text()).toUpperCase();return h.startsWith(i[3].toUpperCase())};function f(h){var g=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];d.each(g,function(){h=h.replace(this.re,this.ch)});return h}function e(h){var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var l="(?:"+Object.keys(j).join("|")+")",k=new RegExp(l),i=new RegExp(l,"g"),g=h==null?"":""+h;return k.test(g)?g.replace(i,function(m){return j[m]}):g}var b=function(h,g,i){if(i){i.stopPropagation();i.preventDefault()}this.$element=d(h);this.$newElement=null;this.$button=null;this.$menu=null;this.$lis=null;this.options=g;if(this.options.title===null){this.options.title=this.$element.attr("title")}this.val=b.prototype.val;this.render=b.prototype.render;this.refresh=b.prototype.refresh;this.setStyle=b.prototype.setStyle;this.selectAll=b.prototype.selectAll;this.deselectAll=b.prototype.deselectAll;this.destroy=b.prototype.destroy;this.remove=b.prototype.remove;this.show=b.prototype.show;this.hide=b.prototype.hide;this.init()};b.VERSION="1.10.0";b.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(h,g){return(h==1)?"{0} item selected":"{0} items selected"},maxOptionsText:function(g,h){return[(g==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)",(h==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:false,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,liveSearchNormalize:false,liveSearchStyle:"contains",actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:false,template:{caret:'<span class="caret"></span>'},maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false};b.prototype={constructor:b,init:function(){var g=this,h=this.$element.attr("id");this.$element.addClass("bs-select-hidden");this.liObj={};this.multiple=this.$element.prop("multiple");this.autofocus=this.$element.prop("autofocus");this.$newElement=this.createView();this.$element.after(this.$newElement).appendTo(this.$newElement);this.$button=this.$newElement.children("button");this.$menu=this.$newElement.children(".dropdown-menu");this.$menuInner=this.$menu.children(".inner");this.$searchbox=this.$menu.find("input");this.$element.removeClass("bs-select-hidden");if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")}if(typeof h!=="undefined"){this.$button.attr("data-id",h);d('label[for="'+h+'"]').click(function(i){i.preventDefault();g.$button.focus()})}this.checkDisabled();this.clickListener();if(this.options.liveSearch){this.liveSearchListener()}this.render();this.setStyle();this.setWidth();if(this.options.container){this.selectPosition()}this.$menu.data("this",this);this.$newElement.data("this",this);if(this.options.mobile){this.mobile()}this.$newElement.on({"hide.bs.dropdown":function(i){g.$element.trigger("hide.bs.select",i)},"hidden.bs.dropdown":function(i){g.$element.trigger("hidden.bs.select",i)},"show.bs.dropdown":function(i){g.$element.trigger("show.bs.select",i)},"shown.bs.dropdown":function(i){g.$element.trigger("shown.bs.select",i)}});if(g.$element[0].hasAttribute("required")){this.$element.on("invalid",function(){g.$button.addClass("bs-invalid").focus();g.$element.on({"focus.bs.select":function(){g.$button.focus();g.$element.off("focus.bs.select")},"shown.bs.select":function(){g.$element.val(g.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){if(this.validity.valid){g.$button.removeClass("bs-invalid")}g.$element.off("rendered.bs.select")}})})}setTimeout(function(){g.$element.trigger("loaded.bs.select")})},createDropdown:function(){var l=(this.multiple||this.options.showTick)?" show-tick":"",h=this.$element.parent().hasClass("input-group")?" input-group-btn":"",n=this.autofocus?" autofocus":"";var m=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";var k=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+e(this.options.liveSearchPlaceholder)+'"')+"></div>":"";var j=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"";var g=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"";var i='<div class="btn-group bootstrap-select_mf'+l+h+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+n+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+m+k+j+'<ul class="dropdown-menu inner" role="menu"></ul>'+g+"</div></div>";return d(i)},createView:function(){var h=this.createDropdown(),g=this.createLi();h.find("ul")[0].innerHTML=g;return h},reloadLi:function(){this.destroyLi();var g=this.createLi();this.$menuInner[0].innerHTML=g},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var m=this,l=[],n=0,i=document.createElement("option"),h=-1;var g=function(r,p,q,o){return"<li"+((typeof q!=="undefined"&""!==q)?' class="'+q+'"':"")+((typeof p!=="undefined"&null!==p)?' data-original-index="'+p+'"':"")+((typeof o!=="undefined"&null!==o)?'data-optgroup="'+o+'"':"")+">"+r+"</li>"};var k=function(r,o,q,p){return'<a tabindex="0"'+(typeof o!=="undefined"?' class="'+o+'"':"")+(typeof q!=="undefined"?' style="'+q+'"':"")+(m.options.liveSearchNormalize?' data-normalized-text="'+f(e(r))+'"':"")+(typeof p!=="undefined"||p!==null?' data-tokens="'+p+'"':"")+">"+r+'<span class="'+m.options.iconBase+" "+m.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple){h--;if(!this.$element.find(".bs-title-option").length){var j=this.$element[0];i.className="bs-title-option";i.appendChild(document.createTextNode(this.options.title));i.value="";j.insertBefore(i,j.firstChild);if(d(j.options[j.selectedIndex]).attr("selected")===undefined){i.selected=true}}}this.$element.find("option").each(function(s){var u=d(this);h++;if(u.hasClass("bs-title-option")){return}var p=this.className||"",t=this.style.cssText,C=(u.data("content")?u.data("content"):u.html()).replace(/&amp;quot;/g,'"'),v=u.data("tokens")?u.data("tokens"):null,z=typeof u.data("subtext")!=="undefined"?'<small class="text-muted">'+u.data("subtext")+"</small>":"",x=typeof u.data("icon")!=="undefined"?'<span class="'+m.options.iconBase+" "+u.data("icon")+'"></span> ':"",B=this.parentNode.tagName==="OPTGROUP",A=this.disabled||(B&&this.parentNode.disabled),q=u.data("image")?u.data("image"):null,w=u.data("total")?'<small class="text-muted">('+u.data("total")+")</small>":"";if(x!==""&&A){x="<span>"+x+"</span>"}if(m.options.hideDisabled&&A&&!B){h--;return}if(!u.data("content")){C=x+'<span class="text">'+(q?'<img src="'+q+'" alt="" /> ':"")+C+z+w+"</span>"}if(B&&u.data("divider")!==true){var r=" "+this.parentNode.className||"";if(u.index()===0){n+=1;var y=this.parentNode.label,D=typeof u.parent().data("subtext")!=="undefined"?'<small class="text-muted">'+u.parent().data("subtext")+"</small>":"",o=u.parent().data("icon")?'<span class="'+m.options.iconBase+" "+u.parent().data("icon")+'"></span> ':"";y=o+'<span class="text">'+y+D+"</span>";if(s!==0&&l.length>0){h++;l.push(g("",null,"divider",n+"div"))}h++;l.push(g(y,null,"dropdown-header"+r,n))}if(m.options.hideDisabled&&A){h--;return}l.push(g(k(C,"opt "+p+r,t,v),s,"",n))}else{if(u.data("divider")===true){l.push(g("",s,"divider"))}else{if(u.data("hidden")===true){l.push(g(k(C,p,t,v),s,"hidden is-hidden"))}else{if(this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP"){h++;l.push(g("",null,"divider",n+"div"))}l.push(g(k(C,p,t,v),s))}}}m.liObj[s]=h});if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return l.join("")},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")}return this.$lis},render:function(j){var i=this,l;if(j!==false){this.$element.find("option").each(function(o){var p=i.findLis().eq(i.liObj[o]);i.setDisabled(o,this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled,p);i.setSelected(o,this.selected,p)})}this.tabIndex();var n=this.$element.find("option").map(function(){if(this.selected){if(i.options.hideDisabled&&(this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled)){return}var s=d(this),p=s.data("icon")&&i.options.showIcon?'<i class="'+i.options.iconBase+" "+s.data("icon")+'"></i> ':"",r=s.data("image")?'<img src="'+s.data("image")+'" alt="" /> ':"",o,q=s.data("total")?'<small class="text-muted">('+s.data("total")+")</small>":"";if(i.options.showSubtext&&s.data("subtext")&&!i.multiple){o=' <small class="text-muted">'+s.data("subtext")+"</small>"}else{o=""}if(typeof s.attr("title")!=="undefined"){return s.attr("title")}else{if(s.data("content")&&i.options.showContent){return s.data("content")}else{return p+r+s.html()+o+q}}}}).toArray();var k=!this.multiple?n[0]:n.join(this.options.multipleSeparator);if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if((g.length>1&&n.length>g[1])||(g.length==1&&n.length>=2)){l=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+l).length,m=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(n.length,h):this.options.countSelectedText;k=m.replace("{0}",n.length.toString()).replace("{1}",h.toString())}}if(this.options.title==undefined){this.options.title=this.$element.attr("title")}if(this.options.selectedTextFormat=="static"){k=this.options.title}if(!k){k=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText}k=k.replace(/&amp;quot;/g,'"');this.$button.attr("title",d.trim(k.replace(/<[^>]*>?/g,"")));this.$button.children(".filter-option").html(k);this.$element.trigger("rendered.bs.select")},setStyle:function(i,h){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/mf_selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""))}var g=i?i:this.options.style;if(h=="add"){this.$button.addClass(g)}else{if(h=="remove"){this.$button.removeClass(g)}else{this.$button.removeClass(this.options.style);this.$button.addClass(g)}}},liHeight:function(m){if(!m&&(this.options.size===false||this.sizeInfo)){return}var k=document.createElement("div"),g=document.createElement("div"),q=document.createElement("ul"),y=document.createElement("li"),x=document.createElement("li"),C=document.createElement("a"),w=document.createElement("span"),B=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(true):null,r=this.options.liveSearch?document.createElement("div"):null,s=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(true):null,j=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(true):null;w.className="text";k.className=this.$menu[0].parentNode.className+" open";g.className="dropdown-menu open";q.className="dropdown-menu inner";y.className="divider";w.appendChild(document.createTextNode("Inner text"));C.appendChild(w);x.appendChild(C);q.appendChild(x);q.appendChild(y);if(B){g.appendChild(B)}if(r){var u=document.createElement("span");r.className="bs-searchbox";u.className="form-control";r.appendChild(u);g.appendChild(r)}if(s){g.appendChild(s)}g.appendChild(q);if(j){g.appendChild(j)}k.appendChild(g);document.body.appendChild(k);var i=C.offsetHeight,A=B?B.offsetHeight:0,t=r?r.offsetHeight:0,p=s?s.offsetHeight:0,l=j?j.offsetHeight:0,v=d(y).outerHeight(true),h=typeof getComputedStyle==="function"?getComputedStyle(g):false,n=h?null:d(g),z=parseInt(h?h.paddingTop:n.css("paddingTop"))+parseInt(h?h.paddingBottom:n.css("paddingBottom"))+parseInt(h?h.borderTopWidth:n.css("borderTopWidth"))+parseInt(h?h.borderBottomWidth:n.css("borderBottomWidth")),o=z+parseInt(h?h.marginTop:n.css("marginTop"))+parseInt(h?h.marginBottom:n.css("marginBottom"))+2;document.body.removeChild(k);this.sizeInfo={liHeight:i,headerHeight:A,searchHeight:t,actionsHeight:p,doneButtonHeight:l,dividerHeight:v,menuPadding:z,menuExtras:o}},setSize:function(){this.findLis();this.liHeight();if(this.options.header){this.$menu.css("padding-top",0)}if(this.options.size===false){return}var o=this,l=this.$menu,i=this.$menuInner,u=d(window),A=this.$newElement[0].offsetHeight,j=this.sizeInfo.liHeight,y=this.sizeInfo.headerHeight,r=this.sizeInfo.searchHeight,n=this.sizeInfo.actionsHeight,k=this.sizeInfo.doneButtonHeight,q=this.sizeInfo.dividerHeight,x=this.sizeInfo.menuPadding,m=this.sizeInfo.menuExtras,v=this.options.hideDisabled?".disabled":"",w,s,B,z,p=function(){B=o.$newElement.offset().top-u.scrollTop();z=u.height()-B-A};p();if(this.options.size==="auto"){var h=function(){var F,E=function(I,H){return function(J){if(H){return(J.classList?J.classList.contains(I):d(J).hasClass(I))}else{return !(J.classList?J.classList.contains(I):d(J).hasClass(I))}}},D=o.$menuInner[0].getElementsByTagName("li"),C=Array.prototype.filter?Array.prototype.filter.call(D,E("hidden",false)):o.$lis.not(".hidden"),G=Array.prototype.filter?Array.prototype.filter.call(C,E("dropdown-header",true)):C.filter(".dropdown-header");p();w=z-m;if(o.options.container){if(!l.data("height")){l.data("height",l.height())}s=l.data("height")}else{s=l.height()}if(o.options.dropupAuto){o.$newElement.toggleClass("dropup",B>z&&(w-m)<s)}if(o.$newElement.hasClass("dropup")){w=B-m}if((C.length+G.length)>3){F=j*3+m-2}else{F=0}l.css({"max-height":w+"px",overflow:"hidden","min-height":F+y+r+n+k+"px"});i.css({"max-height":w-y-r-n-k-x+"px","overflow-y":"auto","min-height":Math.max(F-x,0)+"px"})};h();this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",h);u.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",h)}else{if(this.options.size&&this.options.size!="auto"&&this.$lis.not(v).length>this.options.size){var t=this.$lis.not(".divider").not(v).children().slice(0,this.options.size).last().parent().index(),g=this.$lis.slice(0,t+1).filter(".divider").length;w=j*this.options.size+g*q+x;if(o.options.container){if(!l.data("height")){l.data("height",l.height())}s=l.data("height")}else{s=l.height()}if(o.options.dropupAuto){this.$newElement.toggleClass("dropup",B>z&&(w-m)<s)}l.css({"max-height":w+y+r+n+k+"px",overflow:"hidden","min-height":""});i.css({"max-height":w-x+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");var h=this.$menu.parent().clone().appendTo("body"),g=this.options.container?this.$newElement.clone().appendTo("body"):h,i=h.children(".dropdown-menu").outerWidth(),j=g.css("width","auto").children("button").outerWidth();h.remove();g.remove();this.$newElement.css("width",Math.max(i,j)+"px")}else{if(this.options.width==="fit"){this.$menu.css("min-width","");this.$newElement.css("width","").addClass("fit-width")}else{if(this.options.width){this.$menu.css("min-width","");this.$newElement.css("width",this.options.width)}else{this.$menu.css("min-width","");this.$newElement.css("width","")}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")}},selectPosition:function(){this.$bsContainer=d('<div class="bs-container" />');var h=this,j,i,g=function(k){h.$bsContainer.addClass(k.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",k.hasClass("dropup"));j=k.offset();i=k.hasClass("dropup")?0:k[0].offsetHeight;h.$bsContainer.css({top:j.top+i,left:j.left,width:k[0].offsetWidth})};this.$button.on("click",function(){var k=d(this);if(h.isDisabled()){return}g(h.$newElement);h.$bsContainer.appendTo(h.options.container).toggleClass("open",!k.hasClass("open")).append(h.$menu)});d(window).on("resize scroll",function(){g(h.$newElement)});this.$element.on("hide.bs.select",function(){h.$menu.data("height",h.$menu.height());h.$bsContainer.detach()})},setSelected:function(g,i,h){if(!h){h=this.findLis().eq(this.liObj[g])}h.toggleClass("selected",i)},setDisabled:function(g,i,h){if(!h){h=this.findLis().eq(this.liObj[g])}if(i){h.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1)}else{h.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)}},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var g=this;if(this.isDisabled()){this.$newElement.addClass("disabled");this.$button.addClass("disabled").attr("tabindex",-1)}else{if(this.$button.hasClass("disabled")){this.$newElement.removeClass("disabled");this.$button.removeClass("disabled")}if(this.$button.attr("tabindex")==-1&&!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")}}this.$button.click(function(){return !g.isDisabled()})},tabIndex:function(){if(this.$element.data("tabindex")!==this.$element.attr("tabindex")&&(this.$element.attr("tabindex")!==-98&&this.$element.attr("tabindex")!=="-98")){this.$element.data("tabindex",this.$element.attr("tabindex"));this.$button.attr("tabindex",this.$element.data("tabindex"))}this.$element.attr("tabindex",-98)},clickListener:function(){var g=this,h=d(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(i){i.stopPropagation()});h.data("spaceSelect",false);this.$button.on("keyup",function(i){if(/(32)/.test(i.keyCode.toString(10))&&h.data("spaceSelect")){i.preventDefault();h.data("spaceSelect",false)}});this.$button.on("click",function(){g.setSize()});this.$element.on("shown.bs.select",function(){if(!g.options.liveSearch&&!g.multiple){g.$menuInner.find(".selected a").focus()}else{if(!g.multiple){var i=g.liObj[g.$element[0].selectedIndex];if(typeof i!=="number"||g.options.size===false){return}var j=g.$lis.eq(i)[0].offsetTop-g.$menuInner[0].offsetTop;j=j-g.$menuInner[0].offsetHeight/2+g.sizeInfo.liHeight/2;g.$menuInner[0].scrollTop=j}}});this.$menuInner.on("click","li a",function(x){var n=d(this),i=n.parent().data("originalIndex"),v=g.$element.val(),p=g.$element.prop("selectedIndex");if(g.multiple){x.stopPropagation()}x.preventDefault();if(!g.isDisabled()&&!n.parent().hasClass("disabled")){var t=g.$element.find("option"),u=t.eq(i),k=u.prop("selected"),s=u.parent("optgroup"),z=g.options.maxOptions,q=s.data("maxOptions")||false;if(!g.multiple){t.prop("selected",false);u.prop("selected",true);g.$menuInner.find(".selected").removeClass("selected");g.setSelected(i,true)}else{u.prop("selected",!k);g.setSelected(i,!k);n.blur();if(z!==false||q!==false){var j=z<t.filter(":selected").length,m=q<s.find("option:selected").length;if((z&&j)||(q&&m)){if(z&&z==1){t.prop("selected",false);u.prop("selected",true);g.$menuInner.find(".selected").removeClass("selected");g.setSelected(i,true)}else{if(q&&q==1){s.find("option:selected").prop("selected",false);u.prop("selected",true);var w=n.parent().data("optgroup");g.$menuInner.find('[data-optgroup="'+w+'"]').removeClass("selected");g.setSelected(i,true)}else{var l=(typeof g.options.maxOptionsText==="function")?g.options.maxOptionsText(z,q):g.options.maxOptionsText,y=l[0].replace("{n}",z),o=l[1].replace("{n}",q),r=d('<div class="notify"></div>');if(l[2]){y=y.replace("{var}",l[2][z>1?0:1]);o=o.replace("{var}",l[2][q>1?0:1])}u.prop("selected",false);g.$menu.append(r);if(z&&j){r.append(d("<div>"+y+"</div>"));g.$element.trigger("maxReached.bs.select")}if(q&&m){r.append(d("<div>"+o+"</div>"));g.$element.trigger("maxReachedGrp.bs.select")}setTimeout(function(){g.setSelected(i,false)},10);r.delay(750).fadeOut(300,function(){d(this).remove()})}}}}}if(!g.multiple){g.$button.focus()}else{if(g.options.liveSearch){g.$searchbox.focus()}}if((v!=g.$element.val()&&g.multiple)||(p!=g.$element.prop("selectedIndex")&&!g.multiple)){g.$element.trigger("changed.bs.select",[i,u.prop("selected"),k]).triggerNative("change")}}});this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(i){if(i.currentTarget==this){i.preventDefault();i.stopPropagation();if(g.options.liveSearch&&!d(i.target).hasClass("close")){g.$searchbox.focus()}else{g.$button.focus()}}});this.$menuInner.on("click",".divider, .dropdown-header",function(i){i.preventDefault();i.stopPropagation();if(g.options.liveSearch){g.$searchbox.focus()}else{g.$button.focus()}});this.$menu.on("click",".popover-title .close",function(){g.$button.click()});this.$searchbox.on("click",function(i){i.stopPropagation()});this.$menu.on("click",".actions-btn",function(i){if(g.options.liveSearch){g.$searchbox.focus()}else{g.$button.focus()}i.preventDefault();i.stopPropagation();if(d(this).hasClass("bs-select-all")){g.selectAll()}else{g.deselectAll()}});this.$element.change(function(){g.render(false)})},liveSearchListener:function(){var h=this,g=d('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){h.$menuInner.find(".active").removeClass("active");if(!!h.$searchbox.val()){h.$searchbox.val("");h.$lis.not(".is-hidden").removeClass("hidden");if(!!g.parent().length){g.remove()}}if(!h.multiple){h.$menuInner.find(".selected").addClass("active")}setTimeout(function(){h.$searchbox.focus()},10)});this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(i){i.stopPropagation()});this.$searchbox.on("input propertychange",function(){if(h.$searchbox.val()){var i=h.$lis.not(".is-hidden").removeClass("hidden").children("a");if(h.options.liveSearchNormalize){i=i.not(":a"+h._searchStyle()+'("'+f(h.$searchbox.val())+'")')}else{i=i.not(":"+h._searchStyle()+'("'+h.$searchbox.val()+'")')}i.parent().addClass("hidden");h.$lis.filter(".dropdown-header").each(function(){var l=d(this),k=l.data("optgroup");if(h.$lis.filter("[data-optgroup="+k+"]").not(l).not(".hidden").length===0){l.addClass("hidden");h.$lis.filter("[data-optgroup="+k+"div]").addClass("hidden")}});var j=h.$lis.not(".hidden");j.each(function(k){var l=d(this);if(l.hasClass("divider")&&(l.index()===j.first().index()||l.index()===j.last().index()||j.eq(k+1).hasClass("divider"))){l.addClass("hidden")}});if(!h.$lis.not(".hidden, .no-results").length){if(!!g.parent().length){g.remove()}g.html(h.options.noneResultsText.replace("{0}",'"'+e(h.$searchbox.val())+'"')).show();h.$menuInner.append(g)}else{if(!!g.parent().length){g.remove()}}}else{h.$lis.not(".is-hidden").removeClass("hidden");if(!!g.parent().length){g.remove()}}h.$lis.filter(".active").removeClass("active");if(h.$searchbox.val()){h.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus()}d(this).focus()})},_searchStyle:function(){var g={begins:"ibegins",startsWith:"ibegins"};return g[this.options.liveSearchStyle]||"icontains"},val:function(g){if(typeof g!=="undefined"){this.$element.val(g);this.render();return this.$element}else{return this.$element.val()}},changeAll:function(h){if(typeof h==="undefined"){h=true}this.findLis();var g=this.$element.find("option"),n=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",h),j=n.length,m=[];for(var k=0;k<j;k++){var l=n[k].getAttribute("data-original-index");m[m.length]=g.eq(l)[0]}d(m).prop("selected",h);this.render(false);this.$element.trigger("changed.bs.select").triggerNative("change")},selectAll:function(){return this.changeAll(true)},deselectAll:function(){return this.changeAll(false)},toggle:function(g){g=g||window.event;if(g){g.stopPropagation()}this.$button.trigger("click")},keydown:function(x){var i=d(this),r=i.is("input")?i.parent().parent():i.parent(),h,m=r.data("this"),j,t,l,p,s,g,n,v,u=":not(.disabled, .hidden, .dropdown-header, .divider)",q={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(m.options.liveSearch){r=i.parent().parent()}if(m.options.container){r=m.$menu}h=d("[role=menu] li",r);v=m.$newElement.hasClass("open");if(!v&&(x.keyCode>=48&&x.keyCode<=57||x.keyCode>=96&&x.keyCode<=105||x.keyCode>=65&&x.keyCode<=90)){if(!m.options.container){m.setSize();m.$menu.parent().addClass("open");v=true}else{m.$button.trigger("click")}m.$searchbox.focus()}if(m.options.liveSearch){if(/(^9$|27)/.test(x.keyCode.toString(10))&&v&&m.$menu.find(".active").length===0){x.preventDefault();m.$menu.parent().removeClass("open");if(m.options.container){m.$newElement.removeClass("open")}m.$button.focus()}h=d("[role=menu] li"+u,r);if(!i.val()&&!/(38|40)/.test(x.keyCode.toString(10))){if(h.filter(".active").length===0){h=m.$menuInner.find("li");if(m.options.liveSearchNormalize){h=h.filter(":a"+m._searchStyle()+"("+f(q[x.keyCode])+")")}else{h=h.filter(":"+m._searchStyle()+"("+q[x.keyCode]+")")}}}}if(!h.length){return}if(/(38|40)/.test(x.keyCode.toString(10))){j=h.index(h.find("a").filter(":focus").parent());l=h.filter(u).first().index();p=h.filter(u).last().index();t=h.eq(j).nextAll(u).eq(0).index();s=h.eq(j).prevAll(u).eq(0).index();g=h.eq(t).prevAll(u).eq(0).index();if(m.options.liveSearch){h.each(function(z){if(!d(this).hasClass("disabled")){d(this).data("index",z)}});j=h.index(h.filter(".active"));l=h.first().data("index");p=h.last().data("index");t=h.eq(j).nextAll().eq(0).data("index");s=h.eq(j).prevAll().eq(0).data("index");g=h.eq(t).prevAll().eq(0).data("index")}n=i.data("prevIndex");if(x.keyCode==38){if(m.options.liveSearch){j--}if(j!=g&&j>s){j=s}if(j<l){j=l}if(j==n){j=p}}else{if(x.keyCode==40){if(m.options.liveSearch){j++}if(j==-1){j=0}if(j!=g&&j<t){j=t}if(j>p){j=p}if(j==n){j=l}}}i.data("prevIndex",j);if(!m.options.liveSearch){h.eq(j).children("a").focus()}else{x.preventDefault();if(!i.hasClass("dropdown-toggle")){h.removeClass("active").eq(j).addClass("active").children("a").focus();i.focus()}}}else{if(!i.is("input")){var o=[],k,y;h.each(function(){if(!d(this).hasClass("disabled")){if(d.trim(d(this).children("a").text().toLowerCase()).substring(0,1)==q[x.keyCode]){o.push(d(this).index())}}});k=d(document).data("keycount");k++;d(document).data("keycount",k);y=d.trim(d(":focus").text().toLowerCase()).substring(0,1);if(y!=q[x.keyCode]){k=1;d(document).data("keycount",k)}else{if(k>=o.length){d(document).data("keycount",0);if(k>o.length){k=1}}}h.eq(o[k-1]).children("a").focus()}}if((/(13|32)/.test(x.keyCode.toString(10))||(/(^9$)/.test(x.keyCode.toString(10))&&m.options.selectOnTab))&&v){if(!/(32)/.test(x.keyCode.toString(10))){x.preventDefault()}if(!m.options.liveSearch){var w=d(":focus");w.click();w.focus();x.preventDefault();d(document).data("spaceSelect",true)}else{if(!/(32)/.test(x.keyCode.toString(10))){m.$menuInner.find(".active a").click();i.focus()}}d(document).data("keycount",0)}if((/(^9$|27)/.test(x.keyCode.toString(10))&&v&&(m.multiple||m.options.liveSearch))||(/(27)/.test(x.keyCode.toString(10))&&!v)){m.$menu.parent().removeClass("open");if(m.options.container){m.$newElement.removeClass("open")}m.$button.focus()}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null;this.liObj={};this.reloadLi();this.render();this.checkDisabled();this.liHeight(true);this.setStyle();this.setWidth();if(this.$lis){this.$searchbox.trigger("propertychange")}this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove();this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove();if(this.$bsContainer){this.$bsContainer.remove()}else{this.$menu.remove()}this.$element.off(".bs.select").removeData("mf_selectpicker").removeClass("bs-select-hidden mf_selectpicker")}};function c(j,k){var h=arguments;var m=j,g=k;[].shift.apply(h);var l;var i=this.each(function(){var r=d(this);if(r.is("select")){var q=r.data("mf_selectpicker"),o=typeof m=="object"&&m;if(!q){var n=d.extend({},b.DEFAULTS,d.fn.mf_selectpicker.defaults||{},r.data(),o);n.template=d.extend({},b.DEFAULTS.template,(d.fn.mf_selectpicker.defaults?d.fn.mf_selectpicker.defaults.template:{}),r.data().template,o.template);r.data("mf_selectpicker",(q=new b(this,n,g)))}else{if(o){for(var p in o){if(o.hasOwnProperty(p)){q.options[p]=o[p]}}}}if(typeof m=="string"){if(q[m] instanceof Function){l=q[m].apply(q,h)}else{l=q.options[m]}}}});if(typeof l!=="undefined"){return l}else{return i}}var a=d.fn.mf_selectpicker;d.fn.mf_selectpicker=c;d.fn.mf_selectpicker.Constructor=b;d.fn.mf_selectpicker.noConflict=function(){d.fn.mf_selectpicker=a;return this};d(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select_mf [data-toggle=dropdown], .bootstrap-select_mf [role="menu"], .bs-searchbox input',b.prototype.keydown).on("focusin.modal",'.bootstrap-select_mf [data-toggle=dropdown], .bootstrap-select_mf [role="menu"], .bs-searchbox input',function(g){g.stopPropagation()});d(window).on("load.bs.select.data-api",function(){d(".mf_selectpicker").each(function(){var g=d(this);c.call(g,g.data())})})})(jQuery);(function(a){a.fn.mf_selectpicker.defaults={noneSelectedText:"Nothing selected",noneResultsText:"No results match {0}",countSelectedText:function(c,b){return(c==1)?"{0} item selected":"{0} items selected"},maxOptionsText:function(b,c){return[(b==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)",(c==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",multipleSeparator:", "}})(jQuery);