!function t(e,n,i){function a(r,s){if(!n[r]){if(!e[r]){var d="function"==typeof require&&require;if(!s&&d)return d(r,!0);if(o)return o(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[r]={exports:{}};e[r][0].call(c.exports,function(t){var n=e[r][1][t];return a(n?n:t)},c,c.exports,t,e,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=t("jQuery"),o=i(a);o["default"].entwine("ss",function(t){t(".cms-add-form .parent-mode :input").entwine({onclick:function(t){if("top"==this.val()){var e=this.closest("form").find("#Form_AddForm_ParentID_Holder .TreeDropdownField");e.setValue(""),e.setTitle("")}}}),t(".cms-add-form").entwine({ParentID:0,ParentCache:{},onadd:function(){var t=this;this.find("#Form_AddForm_ParentID_Holder .TreeDropdownField").bind("change",function(){t.updateTypeList()}),this.find(".SelectionGroup.parent-mode").bind("change",function(){t.updateTypeList()}),this.updateTypeList()},loadCachedChildren:function(t){var e=this.getParentCache();return"undefined"!=typeof e[t]?e[t]:null},saveCachedChildren:function(t,e){var n=this.getParentCache();n[t]=e,this.setParentCache(n)},updateTypeList:function(){var e=this.data("hints"),n=this.find("#Form_AddForm_ParentID_Holder .TreeDropdownField"),i=this.find("input[name=ParentModeField]:checked").val(),a=n.data("metadata"),o=a&&"child"===i?n.getValue()||this.getParentID():null,r=a?a.ClassName:null,s=r&&"child"===i?r:"Root",d="undefined"!=typeof e[s]?e[s]:null,l=this,c=d&&"undefined"!=typeof d.defaultChild?d.defaultChild:null,u=[];if(o){if(this.hasClass("loading"))return;return this.addClass("loading"),this.setParentID(o),n.getValue()||n.setValue(o),u=this.loadCachedChildren(o),null!==u?(this.updateSelectionFilter(u,c),void this.removeClass("loading")):(t.ajax({url:l.data("childfilter"),data:{ParentID:o},success:function(t){l.saveCachedChildren(o,t),l.updateSelectionFilter(t,c)},complete:function(){l.removeClass("loading")}}),!1)}u=d&&"undefined"!=typeof d.disallowedChildren?d.disallowedChildren:[],this.updateSelectionFilter(u,c)},updateSelectionFilter:function(e,n){var i=null;if(this.find("#Form_AddForm_PageType li").each(function(){var n=t(this).find("input").val(),a=-1===t.inArray(n,e);t(this).setEnabled(a),a||t(this).setSelected(!1),i=null===i?a:i&&a}),n)var a=this.find("#Form_AddForm_PageType li input[value="+n+"]").parents("li:first");else var a=this.find("#Form_AddForm_PageType li:not(.disabled):first");a.setSelected(!0),a.siblings().setSelected(!1);var o=this.find("#Form_AddForm_PageType li:not(.disabled)").length?"enable":"disable";this.find("button[name=action_doAdd]").button(o),this.find(".message-restricted")[i?"hide":"show"]()}}),t(".cms-add-form #Form_AddForm_PageType li").entwine({onclick:function(t){this.setSelected(!0)},setSelected:function(t){var e=this.find("input");t&&!e.is(":disabled")?(this.siblings().setSelected(!1),this.toggleClass("selected",!0),e.prop("checked",!0)):(this.toggleClass("selected",!1),e.prop("checked",!1))},setEnabled:function(e){t(this).toggleClass("disabled",!e),e?t(this).find("input").removeAttr("disabled"):t(this).find("input").attr("disabled","disabled").removeAttr("checked")}}),t(".cms-page-add-button").entwine({onclick:function(e){var n=t(".cms-tree"),i=t(".cms-list"),a=0;if(n.is(":visible")){var o=n.jstree("get_selected");a=o?t(o[0]).data("id"):null}else{var r=i.find('input[name="Page[GridState]"]').val();r&&(a=parseInt(JSON.parse(r).ParentID,10))}var s,d={selector:this.data("targetPanel"),pjax:this.data("pjax")};a?(extraParams=this.data("extraParams")?this.data("extraParams"):"",s=t.path.addSearchParams(i18n.sprintf(this.data("urlAddpage"),a),extraParams)):s=this.attr("href"),t(".cms-container").loadPanel(s,null,d),e.preventDefault(),this.blur()}})})},{jQuery:"jQuery"}],2:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=t("jQuery"),o=i(a),r=t("i18n"),s=i(r);o["default"].entwine("ss",function(t){t(".cms-edit-form :input[name=ClassName]").entwine({onchange:function(){alert(s["default"]._t("CMSMAIN.ALERTCLASSNAME"))}}),t(".cms-edit-form input[name=Title]").entwine({onmatch:function(){var e=this;e.data("OrigVal",e.val());var n=e.closest("form"),i=t("input:text[name=URLSegment]",n),a=t("input[name=LiveLink]",n);i.length>0&&(e._addActions(),this.bind("change",function(n){var o=e.data("OrigVal"),r=e.val();e.data("OrigVal",r),0===i.val().indexOf(i.data("defaultUrl"))&&""==a.val()?e.updateURLSegment(r):t(".update",e.parent()).show(),e.updateRelatedFields(r,o),e.updateBreadcrumbLabel(r)})),this._super()},onunmatch:function(){this._super()},updateRelatedFields:function(e,n){this.parents("form").find("input[name=MetaTitle], input[name=MenuTitle]").each(function(){var i=t(this);i.val()==n&&(i.val(e),i.updatedRelatedFields&&i.updatedRelatedFields())})},updateURLSegment:function(e){var n=t("input:text[name=URLSegment]",this.closest("form")),i=n.closest(".field.urlsegment"),a=t(".update",this.parent());i.update(e),a.is(":visible")&&a.hide()},updateBreadcrumbLabel:function(e){var n=(t(".cms-edit-form input[name=ID]").val(),t("span.cms-panel-link.crumb"));e&&""!=e&&n.text(e)},_addActions:function(){var e,n=this;e=t("<button />",{"class":"update ss-ui-button-small",text:s["default"]._t("URLSEGMENT.UpdateURL"),type:"button",click:function(t){t.preventDefault(),n.updateURLSegment(n.val())}}),e.insertAfter(n),e.hide()}}),t(".cms-edit-form .parentTypeSelector").entwine({onmatch:function(){var t=this;this.find(":input[name=ParentType]").bind("click",function(e){t._toggleSelection(e)}),this.find(".TreeDropdownField").bind("change",function(e){t._changeParentId(e)}),this._changeParentId(),this._toggleSelection(),this._super()},onunmatch:function(){this._super()},_toggleSelection:function(e){var n=this.find(":input[name=ParentType]:checked").val(),i=this.find("#Form_EditForm_ParentID_Holder");"root"==n?this.find(":input[name=ParentID]").val(0):this.find(":input[name=ParentID]").val(this.find("#Form_EditForm_ParentType_subpage").data("parentIdValue")),"root"!=n?i.slideDown(400,function(){t(this).css("overflow","visible")}):i.slideUp()},_changeParentId:function(t){var e=this.find(":input[name=ParentID]").val();this.find("#Form_EditForm_ParentType_subpage").data("parentIdValue",e)}}),t(".cms-edit-form #CanViewType, .cms-edit-form #CanEditType, .cms-edit-form #CanCreateTopLevelType").entwine({onmatch:function(){var e;"CanViewType"==this.attr("id")?e=t("#Form_EditForm_ViewerGroups_Holder"):"CanEditType"==this.attr("id")?e=t("#Form_EditForm_EditorGroups_Holder"):"CanCreateTopLevelType"==this.attr("id")&&(e=t("#Form_EditForm_CreateTopLevelGroups_Holder")),this.find(".optionset :input").bind("change",function(n){var i=t(this).closest(".middleColumn").parent("div");"OnlyTheseUsers"==n.target.value?(i.addClass("remove-splitter"),e.show()):(i.removeClass("remove-splitter"),e.hide())});var n=this.find("input[name="+this.attr("id")+"]:checked").val();e["OnlyTheseUsers"==n?"show":"hide"](),this._super()},onunmatch:function(){this._super()}}),t(".cms-edit-form .Actions #Form_EditForm_action_print").entwine({onclick:function(e){var n=t(this[0].form).attr("action").replace(/\?.*$/,"")+"/printable/"+t(":input[name=ID]",this[0].form).val();return"http://"!=n.substr(0,7)&&(n=t("base").attr("href")+n),window.open(n,"printable"),!1}}),t(".cms-edit-form .Actions #Form_EditForm_action_rollback").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),i="";return i=n?s["default"].sprintf(s["default"]._t("CMSMain.RollbackToVersion"),n):s["default"]._t("CMSMain.ConfirmRestoreFromLive"),confirm(i)?this._super(t):!1}}),t(".cms-edit-form .Actions #Form_EditForm_action_archive").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),i="";return i=s["default"].sprintf(s["default"]._t("CMSMain.Archive"),n),confirm(i)?this._super(t):!1}}),t(".cms-edit-form .Actions #Form_EditForm_action_restore").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),i="",a=this.data("toRoot");return i=s["default"].sprintf(s["default"]._t(a?"CMSMain.RestoreToRoot":"CMSMain.Restore"),n),confirm(i)?this._super(t):!1}}),t(".cms-edit-form .Actions #Form_EditForm_action_delete").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),i="";return i=s["default"].sprintf(s["default"]._t("CMSMain.DeleteFromDraft"),n),confirm(i)?this._super(t):!1}}),t(".cms-edit-form .Actions #Form_EditForm_action_unpublish").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),i="";return i=s["default"].sprintf(s["default"]._t("CMSMain.Unpublish"),n),confirm(i)?this._super(t):!1}}),t(".cms-edit-form.changed").entwine({onmatch:function(t){this.find("button[name=action_save]").button("option","showingAlternate",!0),this.find("button[name=action_publish]").button("option","showingAlternate",!0),this._super(t)},onunmatch:function(t){var e=this.find("button[name=action_save]");e.data("button")&&e.button("option","showingAlternate",!1);var n=this.find("button[name=action_publish]");n.data("button")&&n.button("option","showingAlternate",!1),this._super(t)}}),t(".cms-edit-form .Actions button[name=action_publish]").entwine({onbuttonafterrefreshalternate:function(){this.button("option","showingAlternate")?this.addClass("ss-ui-action-constructive"):this.removeClass("ss-ui-action-constructive")}}),t(".cms-edit-form .Actions button[name=action_save]").entwine({onbuttonafterrefreshalternate:function(){this.button("option","showingAlternate")?this.addClass("ss-ui-action-constructive"):this.removeClass("ss-ui-action-constructive")}}),t('.cms-edit-form.CMSPageSettingsController input[name="ParentType"]:checked').entwine({onmatch:function(){this.redraw(),this._super()},onunmatch:function(){this._super()},redraw:function(){var e=t(".cms-edit-form.CMSPageSettingsController #Form_EditForm_ParentID_Holder");"Form_EditForm_ParentType_root"==t(this).attr("id")?e.slideUp():e.slideDown()},onclick:function(){this.redraw()}}),"Form_EditForm_ParentType_root"==t('.cms-edit-form.CMSPageSettingsController input[name="ParentType"]:checked').attr("id")&&t(".cms-edit-form.CMSPageSettingsController #Form_EditForm_ParentID_Holder").hide()})},{i18n:"i18n",jQuery:"jQuery"}],3:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=t("jQuery"),o=i(a),r=t("i18n"),s=i(r);o["default"].entwine("ss.tree",function(t){t(".cms-tree").entwine({fromDocument:{"oncontext_show.vakata":function(t){this.adjustContextClass()}},adjustContextClass:function(){var e=t("#vakata-contextmenu").find("ul ul");e.each(function(n){var i="1",a=t(e[n]).find("li").length;a>20?i="3":a>10&&(i="2"),t(e[n]).addClass("col-"+i).removeClass("right"),t(e[n]).find("li").on("mouseenter",function(e){t(this).parent("ul").removeClass("right")})})},getTreeConfig:function(){var e=this,n=this._super();this.getHints();return n.plugins.push("contextmenu"),n.contextmenu={items:function(n){var i={edit:{label:s["default"]._t("Tree.EditPage","Edit page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(s["default"].sprintf(e.data("urlEditpage"),n.data("id")))}}};n.hasClass("nochildren")||(i.showaslist={label:s["default"]._t("Tree.ShowAsList"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(e.data("urlListview")+"&ParentID="+n.data("id"),null,{tabState:{"pages-controller-cms-content":{tabSelector:".content-listview"}}})}});var a=(n.data("pagetype"),n.data("id")),o=n.find(">a .item").data("allowedchildren"),r={},d=!1;return t.each(o,function(n,i){d=!0,r["allowedchildren-"+n]={label:'<span class="jstree-pageicon"></span>'+i,_class:"class-"+n,action:function(i){t(".cms-container").entwine(".ss").loadPanel(t.path.addSearchParams(s["default"].sprintf(e.data("urlAddpage"),a,n),e.data("extraParams")))}}}),d&&(i.addsubpage={label:s["default"]._t("Tree.AddSubPage","Add page under this page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"),submenu:r}),i.duplicate={label:s["default"]._t("Tree.Duplicate"),submenu:[{label:s["default"]._t("Tree.ThisPageOnly"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(t.path.addSearchParams(s["default"].sprintf(e.data("urlDuplicate"),n.data("id")),e.data("extraParams")))}},{label:s["default"]._t("Tree.ThisPageAndSubpages"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(t.path.addSearchParams(s["default"].sprintf(e.data("urlDuplicatewithchildren"),n.data("id")),e.data("extraParams")))}}]},i}},n}}),t(".cms-tree a.jstree-clicked").entwine({onmatch:function(){var t,e=this,n=e.parents(".cms-panel-content");(e.offset().top<0||e.offset().top>n.height()-e.height())&&(t=n.scrollTop()+e.offset().top+n.height()/2,n.animate({scrollTop:t},"slow"))}}),t(".cms-tree-filtered .clear-filter").entwine({onclick:function(){window.location=location.protocol+"//"+location.host+location.pathname}}),t(".cms-tree-filtered").entwine({onmatch:function(){var e=this,n=function(){var n=t(".cms-content-tools .cms-panel-content").height()-e.parent().siblings(".cms-content-toolbar").outerHeight(!0);e.css("height",n+"px")};n(),t(window).on("resize",window.ss.debounce(n,300))}})})},{i18n:"i18n",jQuery:"jQuery"}],4:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=t("jQuery"),o=i(a);o["default"].entwine("ss",function(t){t(".cms-content-header-info").entwine({"from .cms-panel":{ontoggle:function(t){var e=this.closest(".cms-content").find(t.target);0!==e.length&&this.parent()[e.hasClass("collapsed")?"addClass":"removeClass"]("collapsed")}}}),t(".cms-content-toolbar").entwine({onmatch:function(){var e=this;this._super(),t.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var n=t(this),i=n.data("toolid");n.hasClass("active");void 0!==i&&(n.data("active",!1).removeClass("active"),t("#"+i).hide(),e.bindActionButtonEvents(n))})},onunmatch:function(){var e=this;this._super(),t.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var n=t(this);e.unbindActionButtonEvents(n)})},bindActionButtonEvents:function(t){var e=this;t.on("click.cmsContentToolbar",function(n){e.showHideTool(t)})},unbindActionButtonEvents:function(t){t.off(".cmsContentToolbar")},showHideTool:function(e){var n=e.data("active"),i=e.data("toolid"),a=t("#"+i);t.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var e=t(this),n=t("#"+e.data("toolid"));e.data("toolid")!==i&&(n.hide(),e.data("active",!1))}),e[n?"removeClass":"addClass"]("active"),a[n?"hide":"show"](),e.data("active",!n)}})})},{jQuery:"jQuery"}],5:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=t("jQuery"),o=i(a),r=t("i18n"),s=i(r);o["default"].entwine("ss",function(t){t("#Form_VersionsForm").entwine({onmatch:function(){this._super()},onunmatch:function(){this._super()},onsubmit:function(e,n){e.preventDefault();var i;if(i=this.find(":input[name=ID]").val(),!i)return!1;var a,o,r,d,l,c;if(c=this.find(":input[name=CompareMode]").is(":checked"),r=this.find("table input[type=checkbox]").filter(":checked"),c){if(2!=r.length)return!1;d=r.eq(0).val(),l=r.eq(1).val(),a=this.find(":submit[name=action_doCompare]"),o=s["default"].sprintf(this.data("linkTmplCompare"),i,l,d)}else d=r.eq(0).val(),a=this.find(":submit[name=action_doShowVersion]"),o=s["default"].sprintf(this.data("linkTmplShow"),i,d);t(".cms-container").loadPanel(o,"",{pjax:"CurrentForm"})}}),t("#Form_VersionsForm input[name=ShowUnpublished]").entwine({onmatch:function(){this.toggle(),this._super()},onunmatch:function(){this._super()},onchange:function(){this.toggle()},toggle:function(){var e=t(this),n=e.parents("form");e.attr("checked")?n.find("tr[data-published=false]").show():n.find("tr[data-published=false]").hide()._unselect()}}),t("#Form_VersionsForm tbody tr").entwine({onclick:function(t){var e,n;return e=this.parents("form").find(":input[name=CompareMode]").attr("checked"),n=this.siblings(".active"),e&&this.hasClass("active")?void this._unselect():e?n.length>1?alert(s["default"]._t("ONLYSELECTTWO","You can only compare two versions at this time.")):(this._select(),void(1==n.length&&this.parents("form").submit())):(this._select(),n._unselect(),this.parents("form").submit(),void 0)},_unselect:function(){this.removeClass("active"),this.find(":input[type=checkbox]").attr("checked",!1)},_select:function(){this.addClass("active"),this.find(":input[type=checkbox]").attr("checked",!0)}})})},{i18n:"i18n",jQuery:"jQuery"}],6:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=t("jQuery"),o=i(a);o["default"].entwine("ss",function(t){t("#Form_EditForm_RedirectionType input").entwine({onmatch:function(){var e=t(this);e.attr("checked")&&this.toggle(),this._super()},onunmatch:function(){this._super()},onclick:function(){this.toggle()},toggle:function(){"Internal"==t(this).attr("value")?(t("#Form_EditForm_ExternalURL_Holder").hide(),t("#Form_EditForm_LinkToID_Holder").show()):(t("#Form_EditForm_ExternalURL_Holder").show(),t("#Form_EditForm_LinkToID_Holder").hide())}})})},{jQuery:"jQuery"}],7:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function a(t){var e=document.getElementsByTagName("base")[0].href.replace("http://","").replace(/\//g,"_").replace(/\./g,"_");return e+t}var o=t("jQuery"),r=i(o);(0,r["default"])(document).ready(function(){(0,r["default"])("#switchView a.newWindow").on("click",function(t){var e=window.open(this.href,a(this.target));return e.focus(),!1}),(0,r["default"])("#SilverStripeNavigatorLink").on("click",function(t){return(0,r["default"])("#SilverStripeNavigatorLinkPopup").toggle(),!1}),(0,r["default"])("#SilverStripeNavigatorLinkPopup a.close").on("click",function(t){return(0,r["default"])("#SilverStripeNavigatorLinkPopup").hide(),!1}),(0,r["default"])("#SilverStripeNavigatorLinkPopup input").on("focus",function(t){this.select()})})},{jQuery:"jQuery"}],8:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=t("jQuery"),o=i(a);o["default"].entwine("ss",function(t){t(".field.urlsegment:not(.readonly)").entwine({MaxPreviewLength:55,Ellipsis:"...",onmatch:function(){this.find(":text").length&&this.toggleEdit(!1),this.redraw(),this._super()},redraw:function(){var t=this.find(":text"),e=decodeURI(t.data("prefix")+t.val()),n=e;e.length>this.getMaxPreviewLength()&&(n=this.getEllipsis()+e.substr(e.length-this.getMaxPreviewLength(),e.length)),this.find(".preview").attr("href",encodeURI(e+t.data("suffix"))).text(n)},toggleEdit:function(t){var e=this.find(":text");this.find(".preview-holder")[t?"hide":"show"](),this.find(".edit-holder")[t?"show":"hide"](),t&&(e.data("origval",e.val()),e.focus())},update:function(){var t=this,e=this.find(":text"),n=e.data("origval"),i=arguments[0],a=i&&""!==i?i:e.val();n!=a?(this.addClass("loading"),this.suggest(a,function(n){e.val(decodeURIComponent(n.value)),t.toggleEdit(!1),t.removeClass("loading"),t.redraw()})):(this.toggleEdit(!1),this.redraw())},cancel:function(){var t=this.find(":text");t.val(t.data("origval")),this.toggleEdit(!1)},suggest:function(e,n){var i=this,a=i.find(":text"),o=t.path.parseUrl(i.closest("form").attr("action")),r=o.hrefNoSearch+"/field/"+a.attr("name")+"/suggest/?value="+encodeURIComponent(e);o.search&&(r+="&"+o.search.replace(/^\?/,"")),t.ajax({url:r,success:function(t){n.apply(this,arguments)},error:function(t,e){t.statusText=t.responseText},complete:function(){i.removeClass("loading")}})}}),t(".field.urlsegment .edit").entwine({onclick:function(t){t.preventDefault(),this.closest(".field").toggleEdit(!0)}}),t(".field.urlsegment .update").entwine({onclick:function(t){t.preventDefault(),this.closest(".field").update()}}),t(".field.urlsegment .cancel").entwine({onclick:function(t){t.preventDefault(),this.closest(".field").cancel()}})})},{jQuery:"jQuery"}],9:[function(t,e,n){"use strict";t("../../src/CMSMain.AddForm.js"),t("../../src/CMSMain.EditForm.js"),t("../../src/CMSMain.js"),t("../../src/CMSMain.Tree.js"),t("../../src/CMSPageHistoryController.js"),t("../../src/RedirectorPage.js"),t("../../src/SilverStripeNavigator.js"),t("../../src/SiteTreeURLSegmentField.js")},{"../../src/CMSMain.AddForm.js":1,"../../src/CMSMain.EditForm.js":2,"../../src/CMSMain.Tree.js":3,"../../src/CMSMain.js":4,"../../src/CMSPageHistoryController.js":5,"../../src/RedirectorPage.js":6,"../../src/SilverStripeNavigator.js":7,"../../src/SiteTreeURLSegmentField.js":8}]},{},[9]);
//# sourceMappingURL=bundle-legacy.js.map
