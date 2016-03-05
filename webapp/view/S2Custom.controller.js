sap.ui.controller("cus.crm.mytasks.cuscrmmytasksExtension.view.S2Custom", {

	extHookHandleCustomFilter: function(a) {
		this.filterTasksOpen();
		console.log("extensão do método hookHandleCustomFilter do controller");
	}
});