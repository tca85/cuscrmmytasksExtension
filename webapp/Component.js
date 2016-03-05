jQuery.sap.declare("cus.crm.mytasks.cuscrmmytasksExtension.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "cus.crm.mytasks",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on cloud
	url: jQuery.sap.getModulePath("cus.crm.mytasks.cuscrmmytasksExtension") + "/parent" // we use a URL relative to our own component
	// extension application is deployed with customer namespace
});
this.cus.crm.mytasks.Component.extend("cus.crm.mytasks.cuscrmmytasksExtension.Component", {
	metadata: {
		version: "1.0",
		config: {},
		customizing: {
			"sap.ui.viewModifications": {
				"cus.crm.mytasks.view.S3New": {
					"laPrivateSwitch": {
						"visible": false
					},
					"privateSwitch": {
						"visible": false
					}
				}
			},
			"sap.ui.viewExtensions": {
				"cus.crm.mytasks.view.S2": {
					"extFilterOptions": {
						"className": "sap.ui.core.Fragment",
						"fragmentName": "cus.crm.mytasks.cuscrmmytasksExtension.view.S2_extFilterOptionsCustom",
						"type": "XML"
					}
				}
			},
			"sap.ui.controllerExtensions": {
				"cus.crm.mytasks.view.S2": {
					"controllerName": "cus.crm.mytasks.cuscrmmytasksExtension.view.S2Custom"
				}
			}
		}
	}
});