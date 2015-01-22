/* Egemen Mede (http://www.delipenguen.com) - 22.01.2015 */

define(function (require, exports, module) {
    "use strict";

    // dependencies'i çağır.
    var AppInit		   = brackets.getModule("utils/AppInit"),
        Menus          = brackets.getModule("command/Menus"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
    
    // menüye tıklandığı zaman urlyi aç
    function handleOpenURL() {
        brackets.app.openURLInDefaultBrowser('https://plus.google.com/communities/117075673032309282055');
    }

    // local modülleri yükle
	var btnToolbarHtml	= require("text!html/dp-btn-toolbar.html");
    var $toolbarIcon	= $(btnToolbarHtml);
    
    AppInit.appReady(function () {
        // iconu toolbara ekle.
		$toolbarIcon.appendTo("#main-toolbar .buttons");
        // click işlemi
		$toolbarIcon.on('click', handleOpenURL);
		// CSS
		ExtensionUtils.loadStyleSheet(module, 'dp.css');
        
        var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
        menu.addMenuItem(MY_COMMAND_ID);
	});
});