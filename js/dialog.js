var dialogId = -1, dialog_type = 0, response = 1, listitem = 0, inputtext = "aga da", max_listitem = 0;

function _0x43ca(){var _0x39ea02=['length','.dItem','115Wtaoor','span','className','1575XbkctI','7754528pcEbfo','43446bYTxvW','getElementsByTagName','1931292PnkDYT','forEach','hover','getElementsByClassName','querySelectorAll','3586CJNiKU','children','20657560SbIUyc','441SSYSdl','dItem','2744TqnmsM','set_focus','4631753VwPOuZ','dItem\x20dTablist'];_0x43ca=function(){return _0x39ea02;};return _0x43ca();}(function(_0x4d78f3,_0x492971){var _0x559464=_0xf4d1,_0xded341=_0x4d78f3();while(!![]){try{var _0x25a2ac=parseInt(_0x559464(0xae))/0x1*(parseInt(_0x559464(0xab))/0x2)+parseInt(_0x559464(0xb9))/0x3*(-parseInt(_0x559464(0xb0))/0x4)+-parseInt(_0x559464(0xb6))/0x5*(-parseInt(_0x559464(0xbb))/0x6)+-parseInt(_0x559464(0xb2))/0x7+-parseInt(_0x559464(0xba))/0x8+-parseInt(_0x559464(0xa6))/0x9+parseInt(_0x559464(0xad))/0xa;if(_0x25a2ac===_0x492971)break;else _0xded341['push'](_0xded341['shift']());}catch(_0x5416db){_0xded341['push'](_0xded341['shift']());}}}(_0x43ca,0xc787f),cef['on']('show_dialog',(_0xbecc4a,_0x506eec,_0x5625ae,_0x5ab974,_0x1923c3,_0x341178)=>{var _0x269b53=_0xf4d1;dialog(_0xbecc4a,_0x506eec,_0x5625ae,_0x5ab974,_0x1923c3,_0x341178),cef[_0x269b53(0xb1)](!![]);}));function _0xf4d1(_0x53299d,_0x212115){var _0x43cab5=_0x43ca();return _0xf4d1=function(_0xf4d1af,_0x144746){_0xf4d1af=_0xf4d1af-0xa6;var _0xa3f1bc=_0x43cab5[_0xf4d1af];return _0xa3f1bc;},_0xf4d1(_0x53299d,_0x212115);}function update_color_list(_0x40e2da){var _0x335b11=_0xf4d1;if(dialog_type===0x2){let _0xdf3f6f=document[_0x335b11(0xaa)](_0x335b11(0xb5));_0xdf3f6f[_0x335b11(0xa7)](_0x5845f2=>_0x5845f2[_0x335b11(0xb8)]=_0x335b11(0xaf));for(var _0x16751f=0x0;_0x16751f<document['getElementsByTagName']('span')[_0x335b11(0xb4)];_0x16751f++){document['getElementsByTagName'](_0x335b11(0xb7))[_0x16751f]['className']=_0x335b11(0xa8);}document[_0x335b11(0xa9)](_0x335b11(0xaf))[_0x40e2da]['className']=_0x335b11(0xaf);}else{let _0x1cee94=document[_0x335b11(0xaa)](_0x335b11(0xb5));_0x1cee94[_0x335b11(0xa7)](_0x43ebba=>_0x43ebba['className']=_0x335b11(0xb3));for(var _0x16751f=0x0;_0x16751f<document['getElementsByTagName'](_0x335b11(0xb7))[_0x335b11(0xb4)];_0x16751f++){document[_0x335b11(0xbc)](_0x335b11(0xb7))[_0x16751f][_0x335b11(0xb8)]=_0x335b11(0xa8);}document[_0x335b11(0xa9)](_0x335b11(0xaf))[_0x40e2da][_0x335b11(0xb8)]=_0x335b11(0xb3);for(var _0x16751f=0x0;_0x16751f<document[_0x335b11(0xa9)](_0x335b11(0xaf))[_0x40e2da][_0x335b11(0xac)][_0x335b11(0xb4)];_0x16751f++){var _0xa514c7=document[_0x335b11(0xa9)](_0x335b11(0xaf))[_0x40e2da][_0x335b11(0xac)][_0x16751f];}}}

window.onclick = function (event) {
	if(dialogId != -1) {
		if(event.target.parentNode.id === "dItem") {
			listitem = event.target.parentNode.getAttribute("data-value");
			callcack_dialog_response();		
		}
		if(event.target.id === "dItem") {
			if(listitem === event.target.getAttribute("data-value")) {
				return ;
			}
			
			listitem = event.target.getAttribute("data-value");
			update_color_list(listitem);

			callcack_dialog_response();
	    }
	}
};

window.addEventListener("keyup", (event) => {
	if(dialogId != -1) {
	    if(event.keyCode === 27) {
	    	response = 0;
	    	callcack_dialog_response();
	    }
	    if(event.keyCode === 13) {
	    	response = 1;
	    	callcack_dialog_response();
	    }
	    if(dialog_type === 2 || dialog_type === 5) {
		    if(event.keyCode === 40) {
		    	if(max_listitem === document.getElementsByClassName("dItem")[listitem].getAttribute("data-value")) return ;
		    	listitem++;
		    	update_color_list(listitem);
		    }
		    if(event.keyCode === 38) {
		    	if(listitem === document.getElementsByClassName("dItem")[0].getAttribute("data-value")) return ;
		    	listitem --;
		    	update_color_list(listitem);
		    }
	    }
	}
});

function dialog(dialog_id, dialogType, dHeader, dialogText, button_1, button_2) {

	dialogId = dialog_id, response = 1, listitem = 0, inputtext = "", dialog_type = dialogType;

	if(dialogType === 0 || dialogType === 1 || dialogType === 3) {
		dialogText = dialogText.replace(/[\n]/g, "<br />");
	}
    var replacedColors = dialogText.replace(/\{(\w{3}|\w{6})\}[^{}]*/gi, (textWithColor) => {
		return textWithColor.replace(/{\w*\}/, (colorInBrackets) => {
			return `<span class="hover" style='--i: #${colorInBrackets.slice(1, -1).toLowerCase()}; --g: #${colorInBrackets.slice(1, -1).toLowerCase()};'>`
		}) + '</span>';
	});
    var header = dHeader.replace(/\{(\w{3}|\w{6})\}[^{}]*/gi, (textWithColor) => {
		return textWithColor.replace(/{\w*\}/, (colorInBrackets) => {
			return `<span class="hover" style='--i: #${colorInBrackets.slice(1, -1).toLowerCase()};'>`
		}) + '</span>';
	});	

	var element = document.getElementById("dContainer");
    if(element) { element.remove(); }   

	var body = document.getElementsByTagName("body")[0];
	var dialog_container = document.createElement('div');

	dialog_container.id = "dContainer";
	body.append(dialog_container);

	var dHeader = document.createElement('div');
	dHeader.innerHTML = header;
	dHeader.className = "dHeader";
	dialog_container.append(dHeader);

	if(dialogType === 0 || dialogType === 1 || dialogType === 3) {
		var dialog_text = document.createElement('div');
		dialog_text.innerHTML = replacedColors;
		dialog_text.className = "dTextInput";
		dialog_container.append(dialog_text);

		if(dialogType === 1 || dialogType === 3) {
			var input = document.createElement('input');
			input.placeholder = "Введите текст";
			input.id = "dialogInput";
			input.className = "dInput";
			input.setAttribute("autofocus", "autofocus");
			if(dialogType == 3) { input.setAttribute("type", "password"); } 
			dialog_container.append(input);
			
			input.select();
		}	
	}

	var dialog_text = document.createElement('div');
	dialog_text.className = "dText";
	dialog_container.append(dialog_text);

	if(dialogType === 2) {
		var tabulations_delete = replacedColors.replace(/[\t]/, "");
        var lists = tabulations_delete.split(/[\n]/);      
        for(var i = 0; i < lists.length; i ++) {
        	if(lists[i].length === 0) continue;
        	else if (lists[i] === "</span>") continue;
	        var dialog_item = document.createElement("div");
	        dialog_item.innerHTML = `${lists[i]}`;     
	        dialog_item.id = "dItem";
	        dialog_item.setAttribute("data-value", i);

	        if(i === 0) {
				dialog_item.className = "dItem";

				for(var j = 0; j < dialog_item.children.length; j++) {
					dialog_item.children[j].style = "color: --i: #fff;";
				}
	        }
	       	else dialog_item.className = "dItem";
	        dialog_text.append(dialog_item);
	        max_listitem = dialog_item.getAttribute("data-value");
    	}
	}

	if(dialogType === 5) {
    	var replaceToDIV = (string) => {
			return string.split("\t").map((s) => `<div class="dItemHeader">${s}</div>`).join("");
		}
		var lists = replacedColors.split(/[\n]/);
		for(var i = 0; i < lists.length; i ++) {
        	if(lists[i].length === 0) continue;
        	else if (lists[i] === "</span>") continue;
			var set_tabulation = replaceToDIV(lists[i]);

            let count = lists[i].split("\t").length;

            if ( i == 0 ) {
	            var dialogTablist = document.createElement('div');
	            dialogTablist.className = "dDialogTablist dTablist";
	            dialogTablist.innerHTML = `${set_tabulation}`;
	            dialog_text.append(dialogTablist);
	            continue;
            }

			var dialog_item = document.createElement('div');
			dialog_text.className = "dTextHeaders";

			if(count === 1) dialog_item.innerHTML = `${lists[i]}`;
			else dialog_item.innerHTML = `${set_tabulation}`;
			dialog_item.id = "dItem";
			dialog_item.setAttribute("data-value", i - 1);
			
			if(i == 1) {
				if(count === 1) dialog_item.className = "dItem";
		    	else dialog_item.className = "dItem dTablist";
			}
			else {
				if(count === 1) dialog_item.className = "dItem";
		    	else dialog_item.className = "dItem dTablist";			    
			}
			
			if(lists[i].length === 1) { dialog_item.className = "dItem dTablist cefstudio"; }

			dialog_text.append(dialog_item);
            max_listitem = dialog_item.getAttribute("data-value");
		}
    	update_color_list(0);
	}

	var dButton = document.createElement('div');
	dButton.className = "dButton";
	dialog_container.append(dButton);

	var btn_1 = document.createElement('div');
	btn_1.innerText = button_1;
	btn_1.className = "dButtons";
	dButton.append(btn_1);
    
    btn_1.onclick = function () { response = 1; callcack_dialog_response(); };             	

	if(button_2 != "") {
	    var btn_2 = document.createElement('div');
	    btn_2.innerText = button_2;
	    btn_2.className = "dButtons";
	    btn_2.onclick = function () { response = 0; callcack_dialog_response(); };        
	    dButton.append(btn_2);
    }
}

function callcack_dialog_response() {
	cef.set_focus(false);
    if(dialog_type === 1 || dialog_type === 3) {
    	var text = document.getElementById("dialogInput").value;
        inputtext = `${text}`;
    }
    cef.emit("callback_dialog_response", dialogId, response, listitem, inputtext);
   	dialogId = 0;
   	var element = document.getElementById("dContainer");
    element.remove();               
}
