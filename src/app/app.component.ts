//----------------------------------------------------------
// Author - Marlon Von Hagt, ARB, August 2019
//----------------------------------------------------------

import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Observable } from 'rxjs'; // not req as we are not using observable
//import { Injectable } from '@angular/core'; // not required as we are not using dependency injecting

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  public url: string = `http://localhost:3000`;

  // this is the payload for http://meandv1:3000 (same as AIS token payload), 3001 is PP
  public loginData = {
    actionCode: "LOGIN",
    brand: " ",
    username: " ",
    password: " ",
  };

  public logOffData = {
    tokenToUse: " ",
  };

  public getPriceData = {
    actionCode: "PRICE",
    customer: "",
    itemNumber: "",
    businessUnit: "",
    quantity: "",
    currency: "",
    uom: "",
    getOtherSales: "",
    versionP58m006: "",
    internal: "",
    tokenToUse: "",
    overrideShowroomViewYN: "",
  };

  public getCustomerFuzzyData = {
    customerfuzzySearch: "",
    customerType: "",
    tokenToUse: "",
  };

  public getItemFuzzyData = {
    searchString: "",
    tokenToUse: "",
  };

  public getDuplicateCustomerFuzzyData = {
    fullName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address1: "",
    tokenToUse: "",
  };

  public getCustomerSummaryData = {
    actionCode: "CUSTOMER_Summary",
    customerNumberSearch: "",
    tokenToUse: "",
  };

  public getPartDetailsData = {
    orderNumberSearch: "",
    invoiceNumberSearch: "",
    tokenToUse: "",
    orderType: "",
  };

  public createCashCustomerData = {
    branch: " ",
    firstName: " ",
    surname: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    secContactName: " ",
    secContactPhone: " ",
    marketingOptInYN: " ",
    tokenToUse: "",
    useBusinessNameYN: "",
  };

  public updateCashCustomerData = {
    customerNumber: " ",
    branch: " ",
    firstName: " ",
    surname: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    secContactName: " ",
    secContactPhone: " ",
    marketingOptInYN: " ",
    tokenToUse: "",
  };

  public createShipToCustomerData = {
    soldTo: " ",
    branch: " ",
    name: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    defaultBillTo: " ",
    delInstructions1: " ",
    delInstructions2: " ",
    zone: " ",
    carrier: " ",
    route: " ",
    freightHandlingCode: " ",
    tokenToUse: "",
  };

  public updateShipToCustomerData = {
    soldTo: " ",
    branch: " ",
    name: " ",
    email: " ",
    phone: " ",
    phoneType: " ",
    addressLine1: " ",
    addressLine2: " ",
    suburb: " ",
    state: " ",
    postCode: " ",
    country: " ",
    defaultBillTo: " ",
    delInstructions1: " ",
    delInstructions2: " ",
    zone: " ",
    carrier: " ",
    route: " ",
    freightHandlingCode: " ",
    customerNumber: " ",
    tokenToUse: "",
  };

  public getStateData = {
    tokenToUse: "",
  };

  public getCountryData = {
    tokenToUse: "",
  };

  public getExternalCountryData = {
    brand: "",
  };

  public getZoneData = {
    tokenToUse: "",
  };

  public getRouteData = {
    tokenToUse: "",
  };

  public getFreightHandlingData = {
    tokenToUse: "",
  };

  public getColoursData = {
    tokenToUse: "",
  };

  public getCarrierData = {
    tokenToUse: "",
  };

  public getPhoneTypeData = {
    tokenToUse: "",
  };

  public getOrderTypeData = {
    tokenToUse: "",
  };

  public getProductGroupData = {
    tokenToUse: "",
  };

  public getCustomerChannelData = {
    tokenToUse: "",
  };

  public getEnteredByData = {
    tokenToUse: "",
  };

  public getVehicleRetiredReasonData = {
    tokenToUse: "",
  };

  public getBranchData = {
    actionCode: "BRANCH",
    tokenToUse: "",
  };

  public getJDEPrinterData = {
    brand: " ",
  };

  public fetchRegisteredUsersData = {
    CustomerABNumber: " ",
  };

  public createOrderData = {
    customerNumber: 0,
    shipToNumber: 0,
    orderType: "",
    partsVehicleID: 0,
    customerVehicleID: 0,
    vehicleShortDescription: "",
    reference: "",
    branch: "",
    requestDate: "",
    currencyCode: "",
    quickSaleYN: "",
  };

  public vehicleSelectedData = {
    partsVehicleID: 0,
    customerVehicleID: 0,
    vehicleDescription: "",
    jdeVehicleID: 0,
  };

  public fetchDefaultVehicleData = {
    customerNumber: 0,
  };

  public getOrderSummaryFreeData = {
    customerNumber: "",
    branch: "",
    orderType: "",
    orderStatus: "",
    fitOrderYN: "",
    enteredBy: "",
    customerChannel: "",
    customerPo: "",
    heldOrderFlag10: "",
    ordDateFrom: "",
    ordDateTo: "",
    invDateFrom: "",
    invDateTo: "",
    reqDateFrom: "",
    reqDateTo: "",
    vehicleGroupString: "",
    vehicleID: "",
    vehicleRego: "",
    orderNumber: "",
    invoiceNumber: "",
    partNumber: "",
    productGroup: "",
    revenueBunit: "",
    maxCloseOrders: "",
    tokenToUse: "",
  };

  public getOrderSummaryInvoicedData = {
    customerNumber: "",
    branch: "",
    orderType: "",
    orderStatus: "",
    fitOrderYN: "",
    enteredBy: "",
    customerChannel: "",
    customerPo: "",
    heldOrderFlag10: "",
    ordDateFrom: "",
    ordDateTo: "",
    invDateFrom: "",
    invDateTo: "",
    reqDateFrom: "",
    reqDateTo: "",
    vehicleGroupString: "",
    vehicleID: "",
    vehicleRego: "",
    orderNumber: "",
    invoiceNumber: "",
    partNumber: "",
    productGroup: "",
    revenueBunit: "",
    maxCloseOrders: "",
    invoicedOrders10: "",
    creditOrders10: "",
    tokenToUse: "",
  };

  public maintainBookmarkData = {
    actionCode: "",
    orderNumber: "",
    orderType: "",
    orderCompany: "",
    invoiceNumber: "",
    lineNumber: "",
    comment: "",
    tokenToUse: "",
  };

  public updateRequestDateData = {
    orderNumber: "",
    orderType: "",
    orderCompany: "",
    invoiceNumber: "",
    requestDate: "",
    tokenToUse: "",
  };

  public fetchHierarchyData = {
    searchString: "",
    year: "",
    make: "",
    model: "",
    generation: "",
    subModel: "",
    chassis: "",
    series: "",
    bodyType: "",
    driveType: "",
    transmissionType: "",
    engineCode: "",
    engineType: "",
    brand: "",
    tokenToUse: "",
  };

  public maintainVehicleData = {
    actionCode: "",
    customerVehicleID: "",
    customerNumber: "",
    vehicleID: "",
    regoNumber: "",
    regoState: "",
    vinNumber: "",
    colourCode: "",
    shortDescription: "",
    dateRetired: "",
    reasonCodeRetired: "",
    defaultFlag: "",
    tokenToUse: "",
  };

  public fetchVehicleListData = {
    tokenToUse: "",
    customerNumber: "",
    retiredVehicleYN: "",
  };

  public registerExternalUserPublicData = {
    email: "",
    name: "",
    postCode: "",
    countryCode: "",
    brand: "",
  };

  public resetUserPasswordData = {
    email: "",
    oldPassword: "",
    newPassword: "",
    brand: "",
    bypassPasswordCheck: "",
  };

  public getSecurityFunctionListData = {
    type: "",
  };

  public getJDEUsersListData = {
    userFilter: "",
    fetchRegistered: false,
  };

  public forgottenPasswordData = {
    email: "",
    brand: "",
  };
  public setUserSecurityData = {
    email: "",
    actionCode: "",
    parentCustomer: "",
    name: "",
    active: true,
    effectiveDate: "",
    expiryDate: "",
    securityFunctions: ["ManageUsers", "SeeBuyPrice", "AdminUser"],
  };

  public setJDEUserSecurityData = {
    userName: "",
    branch: "",
    printerRole: "",
    registered: true,
    securityFunctions: [],
    validOrderTypes: [],
  };

  public deleteOrderData = {
    orderNumber: "",
  };

  public fetchUserStateData = {};

  public fetchCustomerShipToData = {
    customerBillTo: 0,
  };

  public fetchCustomerBillToData = {
    customerShipTo: 0,
  };

  public fetchItemAvailabilityData = {
    itemNumber: "",
    lotSerialNumber: "",
  };
  public fetchOrderHeaderData = {
    orderNumber: "",
  };
  public removeItemFromOrderData = {
    orderNumber: "",
    orderLine: 0,
  };
  public fetchOrderDetailsData = {
    orderNumber: "",
    ooeLineNumber: 0,
  };
  public updateOrderHeaderData = {
    orderNumber: "",
    reference: "",
    requestDate: "",
    branch: "",
    currencyCode: "",
    customerVehicleID: 0,
    partsVehicleID: 0,
    vehicleDescription: " ",
    customerTaxRate: 0,
    quickSaleYN: "",
    customerNumber: 0,
    shipToNumber: 0,
    customerName: " ",
  };

  public unloadOrderData = {
    orderNumber: "",
  };
  public validateItemForOrderData = {
    itemNumber: "",
    vehicleID: 1234567890,
    customerNumber: 0,
    quantity: 0,
  };

  public logFeedbackData = {
    feedbackType: " ",
    feedback: "",
    includeCurrentOrderYN: "",
    replyEmail: "",
    currentURL: "",
    userEmail: "",
    orderNumber: "",
    brand: "",
  };

  public jsonString: string = "";
  public jsonObject = {};
  public tokenString: string = "";
  public priceArray: [] = [];
  public customerSearchArray: [] = [];
  public itemSearchArray: [] = [];
  public duplicateCustomerSearchArray: [] = [];
  public customerSummaryArray: [] = [];
  public orderSummarySearchArray: [] = [];
  public partDetailsSearchArray: [] = [];
  public stateSearchArray: [] = [];
  public countrySearchArray: [] = [];
  public countryExternalSearchArray: [] = [];
  public zoneSearchArray: [] = [];
  public routeSearchArray: [] = [];
  public freightHandlingSearchArray: [] = [];
  public coloursSearchArray: [] = [];
  public carrierSearchArray: [] = [];
  public phoneTypeSearchArray: [] = [];
  public orderTypeSearchArray: [] = [];
  public productGroupSearchArray: [] = [];
  public customerChannelSearchArray: [] = [];
  public enteredBySearchArray: [] = [];
  public vehicleRetiredReasonSearchArray: [] = [];
  public branchSearchArray: [] = [];
  public orderSummaryBookmarkedSearchArray: [] = [];
  public orderSummaryLastSearchArray: [] = [];
  public orderSummaryRequestSearchArray: [] = [];
  public orderSummaryFreeSearchArray: [] = [];
  public fetchHierarchySearchArray: [] = [];
  public fetchVehicleListSearchArray: [] = [];
  public securityFunctionSearchArray: [] = [];
  public jdeUsersSearchArray: [] = [];
  public jdePrinterSearchArray: [] = [];
  public fetchRegisteredUsersArray: [] = [];
  public showPriceRows: boolean = false;
  public showFuzzyRows: boolean = false;
  public showItemFuzzyRows: boolean = false;
  public showDuplicateFuzzyRows: boolean = false;
  public showCustomerSummaryRows: boolean = false;
  public showOrderSummaryRows: boolean = false;
  public showPartDetailsRows: boolean = false;
  public showStateRows: boolean = false;
  public showCountryRows: boolean = false;
  public showExternalCountryRows: boolean = false;
  public showSetUserSecurity: boolean = false;
  public showSetJDEUserSecurity: boolean = false;
  public showZoneRows: boolean = false;
  public showRouteRows: boolean = false;
  public showFreightHandlingRows: boolean = false;
  public showColoursRows: boolean = false;
  public showCarrierRows: boolean = false;
  public showPhoneTypeRows: boolean = false;
  public showOrderTypeRows: boolean = false;
  public showProductGroupRows: boolean = false;
  public showCustomerChannelRows: boolean = false;
  public showEnteredByRows: boolean = false;
  public showVehicleRetiredReasonRows: boolean = false;
  public showBranchRows: boolean = false;
  public showOrderSummaryBookmarkedRows: boolean = false;
  public showOrderSummaryLastRows: boolean = false;
  public showOrderSummaryRequestRows: boolean = false;
  public showOrderSummaryFreeRows: boolean = false;
  public showFetchHierarchyRows: boolean = false;
  public showFetchVehicleListRows: boolean = false;
  public showFetchRegisteredUsers: boolean = false;
  public showCreateOrder: boolean = false;
  public showDeleteOrder: boolean = false;
  public showFetchUserState: boolean = false;
  public showVehicleSelected: boolean = false;
  public showFetchDefaultVehicle: boolean = false;
  public showFetchItemAvailability: boolean = false;
  public showAddItemToOrder: boolean = false;
  public showUpdateItemOnOrder: boolean = false;
  public showFetchOrderDetails: boolean = false;
  public showUpdateOrderHeader: boolean = false;
  public showUnloadOrder: boolean = false;
  public showValidateItemForOrder: boolean = false;
  public showReSequenceLines: boolean = false;
  public showValidateOrderInJDE: boolean = false;
  public showJDEUser: boolean = false;
  public showLogFeedback: boolean = false;

  public newCustomer: string = "";
  public errorMessage: string = "";
  public newCustomerShipTo: string = "";
  public errorMessageShipTo: string = "";
  public errorMessageMaintainBookmark: string = "";
  public errorMessageUpdateRequestDate: string = "";
  public errorMessageMaintainVehicle: string = "";
  public keyStrokeValue: string = "";

  public showLogoff: boolean = false;
  public showLogin: boolean = false;
  public showPrice: boolean = false;
  public showCustFuzzy: boolean = false;
  public showItemFuzzy: boolean = false;
  public showDuplicateCustFuzzy: boolean = false;
  public showPartDetails: boolean = false;
  public showCashCustomer: boolean = false;
  public showShiptoCustomer: boolean = false;
  public showUpdateShiptoCustomer: boolean = false;
  public showMaintainBookmark: boolean = false;
  public showUpdateRequestDate: boolean = false;
  public showMaintainVehicle: boolean = false;
  public showState: boolean = false;
  public showBranch: boolean = false;

  public showOrderSummary: boolean = false;
  public showOrderSummaryBookmarked: boolean = false;
  public showOrderSummaryLast: boolean = false;
  public showOrderSummaryRequest: boolean = false;
  public showOrderSummaryFree: boolean = false;
  public showVehicleHierarchy: boolean = false;
  public showFetchVehicleList: boolean = false;
  public showJDEPrinters: boolean = false;
  public showFetchCustomerShipTo: boolean = false;
  public showFetchCustomerBillTo: boolean = false;
  public showFetchOrderHeader: boolean = false;
  public showRemoveItemFromOrder: boolean = false;
  public showInsertLineAter: boolean = false;
  public showFeedbackType: boolean = false;
  public showToggleShowroomView: boolean = false;
  public showUpdateAccountCustomerSettings: boolean = false;
  public showGetInventoryView: boolean = false;
  public showOutputType: boolean = false;
  public showDistributeOrder: boolean = false;
  public showCheckPriceLevel: boolean = false;
  public showFetchVehicleDescription: boolean = false;
  public showFetchUserType: boolean = false;
  public showUpdateCustomerEmail: boolean = false;
  public showFetchOrderFromJDE: boolean = false;
  public showOrderSummaryQuotes = false;
  public showOrderSummaryOpen = false;
  public showOrderSummaryInvoiced = false;
  public showFetchCashCustomer = false;
  public showCheckLineStockAllocation = false;
  public showListSuppliers = false;
  public showFetchCashDrawerManufacturer = false;
  public showFetchPayments = false;
  public showSavePayments = false;
  public showPostCodes = false;
  public showGiftCardActivation = false;
  public showGivexGetBalance = false;
  public showGivexRedemption = false;
  public showListRegisters = false;
  public showCheckCreditHistory = false;
  public showListReasonCodes = false;
  public showCheckUserForCredits = false;
  public showFetchDetailedInventory = false;
  public showFetchCrossDock = false;
  public showFetchInboundDetails = false;
  public showFetchCashRoundedAmount = false;
  public showSetRegisterForHost = false;
  public showFetchRegisterForHost = false;
  public showOpenCloseRegister = false;
  public showFetchCustomerDetails = false;
  public showSupplierSearch = false;
  public showCustomerDetailsExternal = false;
  public showInvoiceListExternal = false;
  public showStatementListExternal = false;
  public showCustomerSalesFigures = false;
  public showEmailStatementExternal = false;
  public showEmailInvoiceReprintExternal = false;
  public showFetchInvoicePayments = false;
  public showCopyOrder = false;
  public showFetchRecentOrders = false;
  public showCreateCreditOrder = false;
  public showPurgeStagingRecords = false;
  public showPurgeUserSessionRecords = false;
  public showQuicksaveOrderToJDE = false;
  public showFetchCatalogueStatus = false;
  public showListCustomerType = false;
  public showCheckSerialNumberOnHand = false;
  public showCheckPreviousCredit = false;
  public showSubmitWarranty = false;
  public showListWarrantyFaultCodes = false;
  public showCreateShowUser = false;
  public showRemoveShowCode = false;
  public showFetchShowList = false;
  public showFetchExternalUsers = false;
  public showCreateShowCode = false;
  public showLoginToShow = false;
  public showFetchShowUsers = false;
  public showFetchNonCorpStoresForShow = false;
  public showCheckForShowSales = false;
  public showFetchCustomerShowList = false;
  public showFetchShowPrinters = false;
  public showFetchShowSalesForExternal = false;

  //------------------------
  // Begin - Interfaces
  //------------------------
  public showFordEdiAsn856 = false;
  //------------------------
  // End - Interfaces
  //------------------------

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getJdeToken(brand: string, username: string, password: string) {
    this.loginData.brand = brand;
    this.loginData.username = username;
    this.loginData.password = password;
    // dont show the price rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;

    /*this.url = "http://localhost:131000/user/login";
    this.http
      .post(this.url, this.loginData)
      .toPromise()
      .then((responseData: any) => {
        this.jsonString = JSON.stringify(responseData);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
        //this.tokenString = this.tokenString.replace("\"]", "");
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }*/

    let headers = new HttpHeaders();
    headers = headers.set("user", username).set("password", password);

    this.url = "http://localhost:3000/user/LoginV2";
    this.http
      .post(this.url, this.loginData, { headers: headers, observe: "response" })
      .toPromise()
      .then((responseData: any) => {
        this.jsonString = JSON.stringify(responseData);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.body.Token;
        console.log(this.tokenString);
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  removeToken(token: string) {
    // dont show the price rows and fuzzy rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    // http call to node js server
    this.logOffData.tokenToUse = token;
    //    this.url = "http://localhost:3000/user/logout";
    this.url = "http://localhost:3000/user/LogoutV2";
    this.http
      .post(this.url, this.logOffData, {
        headers: new HttpHeaders().set("tokenToUse", token),
      })
      .toPromise()
      .then((responseData: any) => {
        this.jsonString = JSON.stringify(responseData);
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-----
  //-------------------------------------------
  getCustomerSummary(customerSummarySearch: string, tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showCarrierRows = false;
    this.showCustomerSummaryRows = true;
    // http call to node js server
    this.getCustomerSummaryData.customerNumberSearch = customerSummarySearch;
    this.getCustomerSummaryData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/summary";
    this.http
      .post(this.url, this.getCustomerSummaryData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.customerSummaryArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  getCustomerFuzzy(
    customerFuzzySearch: string,
    customerType: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCustomerSummaryRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showFuzzyRows = true;
    // http call to node js server
    this.getCustomerFuzzyData.customerfuzzySearch = customerFuzzySearch;
    this.getCustomerFuzzyData.customerType = customerType;
    this.getCustomerFuzzyData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/search";
    this.http
      .post(this.url, this.getCustomerFuzzyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.customerSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------

  getPartDetails(
    orderNumberSearch: string,
    invoiceNumberSearch: string,
    tokenToUse: string,
    orderType: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showPartDetailsRows = true;

    // http call to node js server
    this.getPartDetailsData.orderNumberSearch = orderNumberSearch;
    this.getPartDetailsData.invoiceNumberSearch = invoiceNumberSearch;
    this.getPartDetailsData.tokenToUse = tokenToUse;
    this.getPartDetailsData.orderType = orderType;
    this.url = "http://localhost:3000/sales/PartDetails";
    this.http
      .post(this.url, this.getPartDetailsData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.partDetailsSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  createCashCustomer(
    branch: string,
    firstName: string,
    surname: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    secContactName: string,
    secContactPhone: string,
    marketingOptInYN: string,
    tokenToUse: string,
    useBusinessNameYN: string
  ) {
    // http call to node js server
    this.createCashCustomerData.branch = branch;
    this.createCashCustomerData.firstName = firstName;
    this.createCashCustomerData.surname = surname;
    this.createCashCustomerData.email = email;
    this.createCashCustomerData.phone = phone;
    this.createCashCustomerData.phoneType = phoneType;
    this.createCashCustomerData.addressLine1 = addressLine1;
    this.createCashCustomerData.addressLine2 = addressLine2;
    this.createCashCustomerData.suburb = suburb;
    this.createCashCustomerData.state = state;
    this.createCashCustomerData.postCode = postCode;
    this.createCashCustomerData.country = country;
    this.createCashCustomerData.secContactName = secContactName;
    this.createCashCustomerData.secContactPhone = secContactPhone;
    this.createCashCustomerData.marketingOptInYN = marketingOptInYN;
    this.createCashCustomerData.tokenToUse = tokenToUse;
    this.createCashCustomerData.useBusinessNameYN = useBusinessNameYN;
    this.url = "http://localhost:3000/customer/CreateCashCustomer";
    this.http
      .post(this.url, this.createCashCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.newCustomer = responseData.CustomerNumber;
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  updateCashCustomer(
    customerNumber: string,
    branch: string,
    firstName: string,
    surname: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    secContactName: string,
    secContactPhone: string,
    marketingOptInYN: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.updateCashCustomerData.customerNumber = customerNumber;
    this.updateCashCustomerData.branch = branch;
    this.updateCashCustomerData.firstName = firstName;
    this.updateCashCustomerData.surname = surname;
    this.updateCashCustomerData.email = email;
    this.updateCashCustomerData.phone = phone;
    this.updateCashCustomerData.phoneType = phoneType;
    this.updateCashCustomerData.addressLine1 = addressLine1;
    this.updateCashCustomerData.addressLine2 = addressLine2;
    this.updateCashCustomerData.suburb = suburb;
    this.updateCashCustomerData.state = state;
    this.updateCashCustomerData.postCode = postCode;
    this.updateCashCustomerData.country = country;
    this.updateCashCustomerData.secContactName = secContactName;
    this.updateCashCustomerData.secContactPhone = secContactPhone;
    this.updateCashCustomerData.marketingOptInYN = marketingOptInYN;
    this.updateCashCustomerData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/UpdateCashCustomer";
    this.http
      .post(this.url, this.updateCashCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  createShipToCustomer(
    soldTo: string,
    branch: string,
    name: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    defaultBillTo: string,
    delInstructions1: string,
    delInstructions2: string,
    zone: string,
    carrier: string,
    route: string,
    freightHandlingCode: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.createShipToCustomerData.soldTo = soldTo;
    this.createShipToCustomerData.branch = branch;
    this.createShipToCustomerData.name = name;
    this.createShipToCustomerData.email = email;
    this.createShipToCustomerData.phone = phone;
    this.createShipToCustomerData.phoneType = phoneType;
    this.createShipToCustomerData.addressLine1 = addressLine1;
    this.createShipToCustomerData.addressLine2 = addressLine2;
    this.createShipToCustomerData.suburb = suburb;
    this.createShipToCustomerData.state = state;
    this.createShipToCustomerData.postCode = postCode;
    this.createShipToCustomerData.country = country;
    this.createShipToCustomerData.defaultBillTo = defaultBillTo;
    this.createShipToCustomerData.delInstructions1 = delInstructions1;
    this.createShipToCustomerData.delInstructions2 = delInstructions2;
    this.createShipToCustomerData.zone = zone;
    this.createShipToCustomerData.carrier = carrier;
    this.createShipToCustomerData.route = route;
    this.createShipToCustomerData.freightHandlingCode = freightHandlingCode;
    this.createShipToCustomerData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/customer/CreateShipToCustomer";
    this.http
      .post(this.url, this.createShipToCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.newCustomerShipTo = responseData.CustomerNumber;
        this.errorMessageShipTo = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessageShipTo = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  updateShipToCustomer(
    customerNumber: string,
    soldTo: string,
    branch: string,
    name: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    defaultBillTo: string,
    delInstructions1: string,
    delInstructions2: string,
    zone: string,
    carrier: string,
    route: string,
    freightHandlingCode: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.updateShipToCustomerData.soldTo = soldTo;
    this.updateShipToCustomerData.branch = branch;
    this.updateShipToCustomerData.name = name;
    this.updateShipToCustomerData.email = email;
    this.updateShipToCustomerData.phone = phone;
    this.updateShipToCustomerData.phoneType = phoneType;
    this.updateShipToCustomerData.addressLine1 = addressLine1;
    this.updateShipToCustomerData.addressLine2 = addressLine2;
    this.updateShipToCustomerData.suburb = suburb;
    this.updateShipToCustomerData.state = state;
    this.updateShipToCustomerData.postCode = postCode;
    this.updateShipToCustomerData.country = country;
    this.updateShipToCustomerData.defaultBillTo = defaultBillTo;
    this.updateShipToCustomerData.delInstructions1 = delInstructions1;
    this.updateShipToCustomerData.delInstructions2 = delInstructions2;
    this.updateShipToCustomerData.zone = zone;
    this.updateShipToCustomerData.carrier = carrier;
    this.updateShipToCustomerData.route = route;
    this.updateShipToCustomerData.freightHandlingCode = freightHandlingCode;
    this.updateShipToCustomerData.tokenToUse = tokenToUse;
    this.updateShipToCustomerData.customerNumber = customerNumber;

    this.url = "http://localhost:3000/customer/UpdateShipToCustomer";
    this.http
      .post(this.url, this.updateShipToCustomerData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageShipTo = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
        this.errorMessageShipTo = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  getStateList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showFreightHandlingRows = false;
    this.showStateRows = true;

    // http call to node js server
    this.getStateData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/state";

    this.http
      .post(this.url, this.getStateData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.stateSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        //this.tokenString = obj.Token;
      });
  }
  //-------------------------------------------

  getBranchList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showBranchRows = true;
    // http call to node js server
    this.getBranchData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/branch";

    this.http
      .post(this.url, this.getBranchData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.branchSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getOrderSummaryFree(
    customerNumber: string,
    branch: string,
    orderType: string,
    orderStatus: string,
    fitOrderYN: string,
    enteredBy: string,
    customerChannel: string,
    customerPo: string,
    heldOrderFlag10: string,
    ordDateFrom: string,
    ordDateTo: string,
    invDateFrom: string,
    invDateTo: string,
    reqDateFrom: string,
    reqDateTo: string,
    vehicleGroupString: string,
    vehicleID: string,
    vehicleRego: string,
    orderNumber: string,
    invoiceNumber: string,
    partNumber: string,
    productGroup: string,
    revenueBunit: string,
    maxCloseOrders: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showOrderSummaryFreeRows = true;
    // http call to node js server
    this.getOrderSummaryFreeData.customerNumber = customerNumber;
    this.getOrderSummaryFreeData.branch = branch;
    this.getOrderSummaryFreeData.orderType = orderType;
    this.getOrderSummaryFreeData.orderStatus = orderStatus;
    this.getOrderSummaryFreeData.fitOrderYN = fitOrderYN;
    this.getOrderSummaryFreeData.enteredBy = enteredBy;
    this.getOrderSummaryFreeData.customerChannel = customerChannel;
    this.getOrderSummaryFreeData.customerPo = customerPo;
    this.getOrderSummaryFreeData.heldOrderFlag10 = heldOrderFlag10;
    this.getOrderSummaryFreeData.ordDateFrom = ordDateFrom;
    this.getOrderSummaryFreeData.ordDateTo = ordDateTo;
    this.getOrderSummaryFreeData.invDateFrom = invDateFrom;
    this.getOrderSummaryFreeData.invDateTo = invDateTo;
    this.getOrderSummaryFreeData.reqDateFrom = reqDateFrom;
    this.getOrderSummaryFreeData.reqDateTo = reqDateTo;
    this.getOrderSummaryFreeData.vehicleGroupString = vehicleGroupString;
    this.getOrderSummaryFreeData.vehicleID = vehicleID;
    this.getOrderSummaryFreeData.vehicleRego = vehicleRego;
    this.getOrderSummaryFreeData.orderNumber = orderNumber;
    this.getOrderSummaryFreeData.invoiceNumber = invoiceNumber;
    this.getOrderSummaryFreeData.partNumber = partNumber;
    this.getOrderSummaryFreeData.productGroup = productGroup;
    this.getOrderSummaryFreeData.revenueBunit = revenueBunit;
    this.getOrderSummaryFreeData.maxCloseOrders = maxCloseOrders;
    this.getOrderSummaryFreeData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/sales/OrderSummary";
    this.http
      .post(this.url, this.getOrderSummaryFreeData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.orderSummaryFreeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }

  //-------------------------------------------
  maintainBookmark(
    actionCode: string,
    orderNumber: string,
    orderType: string,
    orderCompany: string,
    invoiceNumber: string,
    lineNumber: string,
    comment: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.maintainBookmarkData.actionCode = actionCode;
    this.maintainBookmarkData.orderNumber = orderNumber;
    this.maintainBookmarkData.orderType = orderType;
    this.maintainBookmarkData.orderCompany = orderCompany;
    this.maintainBookmarkData.invoiceNumber = invoiceNumber;
    this.maintainBookmarkData.lineNumber = lineNumber;
    this.maintainBookmarkData.comment = comment;
    this.maintainBookmarkData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/sales/MaintainBookmark";
    this.http
      .post(this.url, this.maintainBookmarkData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageMaintainBookmark = responseData.ErrorMessage;
      });
  }

  //-------------------------------------------
  updateRequestDate(
    orderNumber: string,
    orderType: string,
    orderCompany: string,
    invoiceNumber: string,
    requestDate: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.updateRequestDateData.orderNumber = orderNumber;
    this.updateRequestDateData.orderType = orderType;
    this.updateRequestDateData.orderCompany = orderCompany;
    this.updateRequestDateData.invoiceNumber = invoiceNumber;
    this.updateRequestDateData.requestDate = requestDate;
    this.updateRequestDateData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/sales/UpdateRequestDate";
    this.http
      .post(this.url, this.updateRequestDateData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageUpdateRequestDate = responseData.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchHierarchy(
    searchString: string,
    year: string,
    make: string,
    model: string,
    generation: string,
    subModel: string,
    chassis: string,
    series: string,
    bodyType: string,
    driveType: string,
    transmissionType: string,
    engineCode: string,
    engineType: string,
    brand: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchVehicleListRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFetchHierarchyRows = true;

    this.fetchHierarchyData.searchString = searchString;
    this.fetchHierarchyData.year = year;
    this.fetchHierarchyData.make = make;
    this.fetchHierarchyData.model = model;
    this.fetchHierarchyData.generation = generation;
    this.fetchHierarchyData.subModel = subModel;
    this.fetchHierarchyData.chassis = chassis;
    this.fetchHierarchyData.series = series;
    this.fetchHierarchyData.bodyType = bodyType;
    this.fetchHierarchyData.driveType = driveType;
    this.fetchHierarchyData.transmissionType = transmissionType;
    this.fetchHierarchyData.engineCode = engineCode;
    this.fetchHierarchyData.engineType = engineType;
    this.fetchHierarchyData.brand = brand;
    this.fetchHierarchyData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/api/vehicle/FetchHierarchy";
    this.http
      .post(this.url, this.fetchHierarchyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.fetchHierarchySearchArray = responseData.Vehicles;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  maintainVehicle(
    actionCode: string,
    customerVehicleID: string,
    customerNumber: string,
    vehicleID: string,
    regoNumber: string,
    regoState: string,
    vinNumber: string,
    colourCode: string,
    shortDescription: string,
    dateRetired: string,
    reasonCodeRetired: string,
    defaultFlag: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.maintainVehicleData.actionCode = actionCode;
    this.maintainVehicleData.customerVehicleID = customerVehicleID;
    this.maintainVehicleData.customerNumber = customerNumber;
    this.maintainVehicleData.vehicleID = vehicleID;
    this.maintainVehicleData.regoNumber = regoNumber;
    this.maintainVehicleData.regoState = regoState;
    this.maintainVehicleData.vinNumber = vinNumber;
    this.maintainVehicleData.colourCode = colourCode;
    this.maintainVehicleData.shortDescription = shortDescription;
    this.maintainVehicleData.dateRetired = dateRetired;
    this.maintainVehicleData.reasonCodeRetired = reasonCodeRetired;
    this.maintainVehicleData.defaultFlag = defaultFlag;
    this.maintainVehicleData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/customer/MaintainVehicle";
    this.http
      .post(this.url, this.maintainVehicleData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessageMaintainVehicle = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessageMaintainVehicle = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  fetchVehicleList(
    tokenToUse: string,
    customerNumber: string,
    retiredVehicleYN: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFetchVehicleListRows = true;

    // http call to node js server
    this.fetchVehicleListData.tokenToUse = tokenToUse;
    this.fetchVehicleListData.customerNumber = customerNumber;
    this.fetchVehicleListData.retiredVehicleYN = retiredVehicleYN;

    this.url = "http://localhost:3000/customer/FetchVehicleList";

    this.http
      .post(this.url, this.fetchVehicleListData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.fetchVehicleListSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getCountryList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showCountryRows = true;

    // http call to node js server
    this.getCountryData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/country";

    this.http
      .post(this.url, this.getCountryData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.countrySearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getZoneList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showZoneRows = true;

    // http call to node js server
    this.getZoneData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/zone";

    this.http
      .post(this.url, this.getZoneData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.zoneSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getRouteList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showRouteRows = true;

    // http call to node js server
    this.getRouteData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/route";

    this.http
      .post(this.url, this.getRouteData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.routeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getFreightHandlingList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFreightHandlingRows = true;

    // http call to node js server
    this.getFreightHandlingData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/FreightHandling";

    this.http
      .post(this.url, this.getFreightHandlingData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.freightHandlingSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getColoursList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showColoursRows = true;

    // http call to node js server
    this.getColoursData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/colours";

    this.http
      .post(this.url, this.getColoursData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.coloursSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getCarrierList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = true;

    // http call to node js server
    this.getCarrierData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/carrier";

    this.http
      .post(this.url, this.getCarrierData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.carrierSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------

  //-------------------------------------------
  getPhoneTypeList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = true;
    this.showVehicleRetiredReasonRows = false;
    this.showPhoneTypeRows = true;

    // http call to node js server
    this.getPhoneTypeData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/PhoneType";

    this.http
      .post(this.url, this.getPhoneTypeData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.phoneTypeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getOrderTypeList(tokenToUse: string) {
    // show search rows
    this.showOrderTypeRows = true;

    // http call to node js server
    this.getOrderTypeData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/OrderType";

    this.http
      .post(this.url, this.getOrderTypeData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.orderTypeSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getProductGroupList(tokenToUse: string) {
    // show search rows
    this.showProductGroupRows = true;

    // http call to node js server
    this.getProductGroupData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/ProductGroup";

    this.http
      .post(this.url, this.getProductGroupData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.productGroupSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getCustomerChannelList(tokenToUse: string) {
    // show search rows
    this.showCustomerChannelRows = true;

    // http call to node js server
    this.getCustomerChannelData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/CustomerChannel";

    this.http
      .post(this.url, this.getCustomerChannelData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.customerChannelSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getEnteredByList(tokenToUse: string) {
    // show search rows
    this.showEnteredByRows = true;

    // http call to node js server
    this.getEnteredByData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/EnteredBy";

    this.http
      .post(this.url, this.getEnteredByData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.enteredBySearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getVehicleRetiredReasonList(tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showCustomerSummaryRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showStateRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = true;
    this.showPhoneTypeRows = true;
    this.showVehicleRetiredReasonRows = true;

    // http call to node js server
    this.getVehicleRetiredReasonData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/lists/VehicleRetiredReason";

    this.http
      .post(this.url, this.getVehicleRetiredReasonData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.vehicleRetiredReasonSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }

  //-------------------------------------------
  getDuplicateCustomerFuzzy(
    fullName: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    address1: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCustomerSummaryRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showFuzzyRows = false;
    this.showDuplicateFuzzyRows = true;
    // http call to node js server
    this.getDuplicateCustomerFuzzyData.fullName = fullName;
    this.getDuplicateCustomerFuzzyData.firstName = firstName;
    this.getDuplicateCustomerFuzzyData.lastName = lastName;
    this.getDuplicateCustomerFuzzyData.phoneNumber = phoneNumber;
    this.getDuplicateCustomerFuzzyData.email = email;
    this.getDuplicateCustomerFuzzyData.address1 = address1;

    this.getDuplicateCustomerFuzzyData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/customer/DuplicateCustomerSearch";
    this.http
      .post(this.url, this.getDuplicateCustomerFuzzyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.duplicateCustomerSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }
  //-------------------------------------------
  getItemFuzzy(itemFuzzySearch: string, tokenToUse: string) {
    // show search rows
    this.showPriceRows = false;
    this.showOrderSummaryRows = false;
    this.showPartDetailsRows = false;
    this.showStateRows = false;
    this.showBranchRows = false;
    this.showOrderSummaryBookmarkedRows = false;
    this.showOrderSummaryLastRows = false;
    this.showOrderSummaryRequestRows = false;
    this.showOrderSummaryFreeRows = false;
    this.showFetchHierarchyRows = false;
    this.showFetchVehicleListRows = false;
    this.showCustomerSummaryRows = false;
    this.showCountryRows = false;
    this.showZoneRows = false;
    this.showRouteRows = false;
    this.showFreightHandlingRows = false;
    this.showColoursRows = false;
    this.showCarrierRows = false;
    this.showPhoneTypeRows = false;
    this.showVehicleRetiredReasonRows = false;
    this.showDuplicateFuzzyRows = false;
    this.showFuzzyRows = false;
    this.showItemFuzzyRows = true;
    // http call to node js server
    this.getItemFuzzyData.searchString = itemFuzzySearch;
    this.getItemFuzzyData.tokenToUse = tokenToUse;
    this.url = "http://localhost:3000/item/ItemSearch";
    this.http
      .post(this.url, this.getItemFuzzyData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.itemSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.tokenString = obj.Token;
      });
  }
  //-------------------------------------------

  //-------------------------------------------
  registerExternalUserPublic(
    email: string,
    name: string,
    postCode: string,
    countryCode: string,
    brand: string
  ) {
    // http call to node js server
    this.registerExternalUserPublicData.email = email;
    this.registerExternalUserPublicData.name = name;
    this.registerExternalUserPublicData.postCode = postCode;
    this.registerExternalUserPublicData.countryCode = countryCode;
    this.registerExternalUserPublicData.brand = brand;
    this.url = "http://localhost:3000/user/RegisterExternalUserPublic";
    this.http
      .post(this.url, this.registerExternalUserPublicData, {
        headers: new HttpHeaders().set("tokenToUse", " "),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  resetUserPassword(
    email: string,
    oldPassword: string,
    newPassword: string,
    brand: string,
    bypassPasswordCheck: string
  ) {
    // http call to node js server
    this.resetUserPasswordData.email = email;
    this.resetUserPasswordData.oldPassword = oldPassword;
    this.resetUserPasswordData.newPassword = newPassword;
    this.resetUserPasswordData.brand = brand;
    this.resetUserPasswordData.bypassPasswordCheck = bypassPasswordCheck;

    this.url = "http://localhost:3000/user/ResetUserPassword";
    this.http
      .post(this.url, this.resetUserPasswordData)
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  getSecurityFunctionList(tokenToUse: string, type: string) {
    // http call to node js server
    this.getSecurityFunctionListData.type = type;
    this.url = "http://localhost:3000/lists/FetchSecurityFunctionList";
    this.http
      .post(this.url, this.getSecurityFunctionListData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.securityFunctionSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  getJDEUsersList(
    tokenToUse: string,
    userFilter: string,
    fetchRegistered: string
  ) {
    // http call to node js server
    this.getJDEUsersListData.userFilter = userFilter;
    if (fetchRegistered == "true") {
      this.getJDEUsersListData.fetchRegistered = true;
    } else {
      this.getJDEUsersListData.fetchRegistered = false;
    }
    //arbpos-backend-arbaus-pp.azurewebsites.net
    //    this.url = "http://localhost:3000/user/FetchJDEUsers";
    https: this.url =
      " https://arbpos-backend-arbaus-pp.azurewebsites.net/user/FetchJDEUsers";
    this.http
      .post(this.url, this.getJDEUsersListData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.jdeUsersSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-----------------------------------------------
  //-----------------------------------------------
  forgottenPassword(email: string, brand: string) {
    // http call to node js server
    this.forgottenPasswordData.email = email;
    this.forgottenPasswordData.brand = brand;
    this.url = "http://localhost:3000/user/ForgottenPassword";
    this.http
      .post(this.url, this.forgottenPasswordData)
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-----------------------------------------------
  //-------------------------------------------
  getExternalCountryList(brand: string) {
    this.showExternalCountryRows = true;
    this.getExternalCountryData.brand = brand;
    // http call to node js server
    this.url = "http://localhost:3000/lists/CountryExternal";

    this.http
      .post(this.url, this.getExternalCountryData, {
        headers: new HttpHeaders().set("tokenToUse", " "),
      })
      .toPromise()
      .then((responseData: any) => {
        this.countryExternalSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  setUserSecurity(
    email: string,
    actionCode: string,
    parentCustomer: string,
    name: string,
    active: string,
    effectiveDate: string,
    expiryDate: string,
    securityFunctions: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.showSetUserSecurity = true;
    this.url = "http://localhost:3000/user/SetUserSecurity";
    this.setUserSecurityData.email = email;
    this.setUserSecurityData.actionCode = actionCode;
    this.setUserSecurityData.parentCustomer = parentCustomer;
    this.setUserSecurityData.name = name;
    this.setUserSecurityData.active = false;
    if (active == "1") {
      this.setUserSecurityData.active = true;
    }
    this.setUserSecurityData.effectiveDate = effectiveDate;
    this.setUserSecurityData.expiryDate = expiryDate;

    this.http
      .post(this.url, this.setUserSecurityData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------

  //-------------------------------------------
  setJDEUserSecurity(
    userName: string,
    branch: string,
    printerRole: string,
    registered: string,
    tokenToUse: string
  ) {
    // http call to node js server
    this.showSetJDEUserSecurity = true;
    this.url = "http://localhost:3000/user/SetJDEUserSecurity";
    this.setJDEUserSecurityData.userName = userName;
    this.setJDEUserSecurityData.branch = branch;
    this.setJDEUserSecurityData.printerRole = printerRole;
    this.setJDEUserSecurityData.registered = false;
    if (registered == "1") {
      this.setJDEUserSecurityData.registered = true;
    }
    this.setJDEUserSecurityData.securityFunctions = [
      "ManageUsers",
      "SeeBuyPrice",
      "AdminUser",
    ];
    this.setJDEUserSecurityData.validOrderTypes = [
      "SQ",
      "SO",
      "CO",
      "CV",
      "SX",
    ];

    this.http
      .post(this.url, this.setJDEUserSecurityData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  getJDEPrinters(brand: string, tokenToUse: string) {
    // show search rows
    this.showJDEPrinters = true;
    // http call to node js server
    this.getJDEPrinterData.brand = brand;
    this.url = "http://localhost:3000/lists/JDEPrinters";

    this.http
      .post(this.url, this.getJDEPrinterData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.jdePrinterSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  fetchRegisteredUsers(CustomerABNumber: string, tokenToUse: string) {
    // show search rows
    this.showFetchRegisteredUsers = true;
    // http call to node js server
    this.fetchRegisteredUsersData.CustomerABNumber = CustomerABNumber;
    this.url = "http://localhost:3000/user/FetchRegisteredUsers";

    this.http
      .post(this.url, this.fetchRegisteredUsersData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.fetchRegisteredUsersArray = responseData.SearchResults;
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  createOrder(
    customerNumber: string,
    shipToNumber: string,
    orderType: string,
    partsVehicleID: string,
    customerVehicleID: string,
    vehicleShortDescription: string,
    reference: string,
    branch: string,
    requestDate: string,
    currencyCode: string,
    tokenToUse: string,
    quickSaleYN: string
  ) {
    // show search rows
    this.showCreateOrder = true;
    // http call to node js server
    this.createOrderData.customerNumber = parseInt(customerNumber);
    this.createOrderData.shipToNumber = parseInt(shipToNumber);
    this.createOrderData.orderType = orderType;
    this.createOrderData.partsVehicleID = parseInt(partsVehicleID);
    this.createOrderData.customerVehicleID = parseInt(customerVehicleID);
    this.createOrderData.vehicleShortDescription = vehicleShortDescription;
    this.createOrderData.reference = reference;
    this.createOrderData.branch = branch;
    this.createOrderData.requestDate = requestDate;
    this.createOrderData.currencyCode = currencyCode;
    this.createOrderData.quickSaleYN = quickSaleYN;

    this.url = "http://localhost:3000/staging/CreateOrder";

    this.http
      .post(this.url, this.createOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  deleteOrder(orderNumber: string, tokenToUse: string) {
    // show search rows
    this.showDeleteOrder = true;
    // http call to node js server
    this.deleteOrderData.orderNumber = orderNumber;

    this.url = "http://localhost:3000/staging/DeleteOrder";

    this.http
      .post(this.url, this.deleteOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------

  //-------------------------------------------
  fetchUserState(tokenToUse: string) {
    // show search rows
    this.showFetchUserState = true;
    // http call to node js server

    this.url = "http://localhost:3000/api/userState/FetchUserState";

    this.http
      .post(this.url, this.fetchUserStateData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  vehicleSelected(
    partsVehicleID: string,
    customerVehicleID: string,
    vehicleDescription: string,
    tokenToUse: string,
    jdeVehicleID: string
  ) {
    this.showVehicleSelected = true;
    this.vehicleSelectedData.partsVehicleID = parseInt(partsVehicleID);
    this.vehicleSelectedData.customerVehicleID = parseInt(customerVehicleID);
    this.vehicleSelectedData.jdeVehicleID = parseInt(jdeVehicleID);
    this.vehicleSelectedData.vehicleDescription = vehicleDescription.trim();

    //this.url = "http://localhost:3000/userState/VehicleSelected";
    this.url = "http://localhost:3000/api/userState/UpdateSelectedVehicle";
    this.http
      .post(this.url, this.vehicleSelectedData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchDefaultVehicle(customerNumber: string, tokenToUse: string) {
    this.showFetchDefaultVehicle = true;
    this.fetchDefaultVehicleData.customerNumber = parseInt(customerNumber);

    this.url = "http://localhost:3000/api/vehicle/FetchDefaultVehicle";

    this.http
      .post(this.url, this.fetchDefaultVehicleData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCustomerShipTo(customerBillTo: string, tokenToUse: string) {
    this.showFetchCustomerShipTo = true;
    this.fetchCustomerShipToData.customerBillTo = parseInt(customerBillTo);

    this.url = "http://localhost:3000/customer/FetchCustomerShipTo";

    this.http
      .post(this.url, this.fetchCustomerShipToData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCustomerBillTo(customerShipTo: string, tokenToUse: string) {
    this.showFetchCustomerBillTo = true;
    this.fetchCustomerBillToData.customerShipTo = parseInt(customerShipTo);

    this.url = "http://localhost:3000/customer/FetchCustomerBillTo";

    this.http
      .post(this.url, this.fetchCustomerBillToData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchItemAvailability(
    itemNumber: string,
    tokenToUse: string,
    lotSerialNumber: string
  ) {
    this.showFetchItemAvailability = true;
    this.fetchItemAvailabilityData.itemNumber = itemNumber;
    this.fetchItemAvailabilityData.lotSerialNumber = lotSerialNumber;
    this.url = "http://localhost:3000/item/FetchItemAvailability";

    this.http
      .post(this.url, this.fetchItemAvailabilityData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  fetchOrderHeader(orderNumber: string, tokenToUse: string) {
    this.showFetchOrderHeader = true;
    this.fetchOrderHeaderData.orderNumber = orderNumber;

    this.url = "http://localhost:3000/staging/FetchOrderHeader";

    this.http
      .post(this.url, this.fetchOrderHeaderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  addItemToOrder(tokenToUse: string, orderNumber: string) {
    this.showAddItemToOrder = true;

    var addItemToOrderData = {
      orderNumber: orderNumber,
      brand: "ARBAUS_PY",
      parentItemCode: "GLOVES",
      parentItemDesc: "Summit bull bar",
      parentItemQty: 1,
      parentItemUOM: "EA",
      paintableYN: "Y",
      paintYN: "Y",
      fitableYN: "Y",

      fittedYN: "Y",
      unitPriceExTax: 10.1,
      unitPriceIncTax: 12.1,
      extPriceExTax: 1510.54,
      extPriceIncTax: 1750.54,
      partsVehicleID: 1023382525,
      overridePriceAllowedYN: " ",
      location: " ",
      serialNumber: " ",
      assocItems: [],
      fitProductCode: "FIT",
      fitProductDesc: "FIT; (V.MODEL); (REGO); (ITEM)",
      fitUnitPriceExTax: 600.0,
      fitUnitPriceIncTax: 660.0,
      paintProductCode: "CC9",
      paintDesc: "PAINT CODE ARB RSTB",
      parentLineNumber: 0,
      nonStockLineYN: " ",
      mandatoryPaintYN: "Y",
      overridePriceYN: "N",
      changeLineStatus: " ",
      reasonCode: " ",
    };

    /*var addItemToOrderData = {
      orderNumber: orderNumber,
      parentItemCode: "3440540",
      parentItemDesc: "SUMMIT STEEL BULLBAR, WINCH COMPATIBLE, ARB FOG MKII",
      parentItemQty: "1",
      parentItemUOM: "EA",
      paintableYN: "N",
      paintYN: "N",
      fitableYN: "Y",
      fittedYN: "N",
      unitPriceExTax: 1357.93,
      unitPriceIncTax: 1493.72,
      extPriceExTax: "1357.93",
      extPriceIncTax: "1493.72",
      partsVehicleID: null,
      parentLineNumber: 0,
      nonStockLineYN: "N",
      fitProductCode: "FIT",
      fitProductDesc: "FIT",
      fitUnitPriceExTax: 600,
      fitUnitPriceIncTax: 660,
      brand: "ARBAUS_PY",
    }; */

    /*
    var addItemToOrderData = {
      orderNumber: orderNumber,
      brand: "ARBAUS_PY",
      parentItemCode: "3440540",
      parentItemDesc: "Summit bull bar",
      parentItemQty: 1,
      parentItemUOM: "EA",
      paintableYN: "Y",
      paintYN: "Y",
      fitableYN: "Y",
      fittedYN: "Y",
      unitPriceExTax: 10.1,
      unitPriceIncTax: 12.1,
      extPriceExTax: 1510.54,
      extPriceIncTax: 1750.54,
      partsVehicleID: 1023382525,
      overridePriceAllowedYN: " ",
      location: " ",
      serialNumber: " ",
      assocItems: [
        {
          assocItemCode: "GLOVES",
          assocItemDesc: "Colour Code Charge",
          assocItemUOM: "EA",
          assocType: "Mandatory",
          assocQty: 2,
          assocUnitPriceExTax: 3.33,
          assocUnitPriceIncTax: 4.44,
          assocExtPriceExTax: 140.1,
          assocExtPriceIncTax: 141.12,
          nonStockLineYN: "",
          overridePriceAllowedYN: "",
          location: " ",
          serialNumber: " ",
        },
        {
          assocItemCode: "ADDFIT",
          assocItemDesc: "Colour Code Charge - 2nd ",
          assocItemUOM: "EA",
          assocType: "Mandatory",
          assocQty: 1,
          assocUnitPriceExTax: 150.0,
          assocUnitPriceIncTax: 150.0,
          assocExtPriceExTax: 140.1,
          assocExtPriceIncTax: 141.12,
          nonStockLineYN: "",
          overridePriceAllowedYN: "",
          overridePriceYN: "Y",
        },
      ],
      fitProductCode: "FIT",
      fitProductDesc: "FIT; (V.MODEL); (REGO); (ITEM)",
      fitUnitPriceExTax: 600.0,
      fitUnitPriceIncTax: 660.0,
      paintProductCode: "CC9",
      paintDesc: "PAINT CODE ARB RSTB",
      parentLineNumber: 0,
      nonStockLineYN: " ",
      mandatoryPaintYN: "Y",
      overridePriceYN: "Y",
    };

    /*    var addItemToOrderData = {
      orderNumber: "21388964",
      parentItemCode: "GLOVES",
      parentItemDesc: "WINCHING GLOVES",
      parentItemQty: "1",
      parentItemUOM: "PR",
      paintableYN: null,
      paintYN: "N",
      fitableYN: null,
      fittedYN: "N",
      unitPriceExTax: 6.87,
      unitPriceIncTax: 7.56,
      extPriceExTax: "6.8700",
      extPriceIncTax: "7.5600",
      partsVehicleID: 0,
      parentLineNumber: 0,
      nonStockLineYN: "N",
      overridePriceAllowedYN: "Y",
      miscChargeYN: "N",
      changeDescriptionAllowedYN: "N",
      mandatoryPaintYN: "N",
      brand: "ARBAUS_PY",
    }; */
    this.url = "http://localhost:3000/staging/AddItemToOrder";

    this.http
      .post(this.url, addItemToOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  removeItemFromOrder(
    orderNumber: string,
    orderLine: string,
    tokenToUse: string
  ) {
    this.showRemoveItemFromOrder = true;
    this.removeItemFromOrderData.orderNumber = orderNumber;
    this.removeItemFromOrderData.orderLine = parseFloat(orderLine);

    this.url = "http://localhost:3000/staging/RemoveItemFromOrder";

    this.http
      .post(this.url, this.removeItemFromOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  updateItemOnOrder(tokenToUse: string) {
    this.showUpdateItemOnOrder = true;
    var updateItemOnOrderData = {
      orderNumber: "21332727",
      brand: "ARBAUS_PY",
      orderLine: 3.0,
      itemQty: 2,
      paintYN: "Y",
      fittedYN: "Y",
      colourCode: "040 WHITE",
      itemDesc: "qwerty1111111111111",
      unitPriceExTax: 123.123,
      unitPriceIncTax: 124.347,
      extPriceExTax: 246.123,
      extPriceIncTax: 999.123,
      //partsVehicleID: 5001,
      fitProductCode: "FIT",
      fitProductDesc: "FIT; (V.MODEL); (REGO); (ITEM)",
      fitUnitPriceExTax: 600.0,
      fitUnitPriceIncTax: 660.0,
      paintProductCode: "CC9",
      paintDesc: "PAINT CODE ARB RSTB",
      overridePriceAllowedYN: "Q",
      location: "NEW",
      supplierCode: 1234,
    };

    this.url = "http://localhost:3000/staging/UpdateItemOnOrder";

    this.http
      .post(this.url, updateItemOnOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchOrderDetails(
    orderNumber: string,
    ooeLinenumber: string,
    tokenToUse: string
  ) {
    this.showFetchOrderDetails = true;
    this.fetchOrderDetailsData.orderNumber = orderNumber;
    this.fetchOrderDetailsData.ooeLineNumber = parseFloat(ooeLinenumber);

    this.url = "http://localhost:3000/staging/FetchOrderDetails";

    this.http
      .post(this.url, this.fetchOrderDetailsData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  updateOrderHeader(
    orderNumber: string,
    reference: string,
    requestDate: string,
    branch: string,
    currencyCode: string,
    tokenToUse: string
  ) {
    this.showUpdateOrderHeader = true;
    this.updateOrderHeaderData.orderNumber = orderNumber;
    this.updateOrderHeaderData.reference = reference;
    this.updateOrderHeaderData.requestDate = requestDate;
    this.updateOrderHeaderData.branch = branch;
    this.updateOrderHeaderData.currencyCode = currencyCode;
    this.updateOrderHeaderData.customerVehicleID = 0;
    this.updateOrderHeaderData.partsVehicleID = 0;
    this.updateOrderHeaderData.vehicleDescription = " ";
    this.updateOrderHeaderData.customerTaxRate = 10.1;
    this.updateOrderHeaderData.quickSaleYN = "N";
    this.updateOrderHeaderData.customerNumber = 101540;
    this.updateOrderHeaderData.shipToNumber = 101540;
    this.updateOrderHeaderData.customerName = "TEST Customer";

    this.url = "http://localhost:3000/staging/UpdateOrderHeader";

    this.http
      .post(this.url, this.updateOrderHeaderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  unloadOrder(orderNumber: string, tokenToUse: string) {
    this.showUnloadOrder = true;
    this.unloadOrderData.orderNumber = orderNumber;

    this.url = "http://localhost:3000/staging/UnloadOrder";

    this.http
      .post(this.url, this.unloadOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  validateItemForOrder(
    itemNumber: string,
    vehicleID: string,
    customerNumber: string,
    quantity: string,
    tokenToUse: string
  ) {
    this.showValidateItemForOrder = true;
    this.validateItemForOrderData.itemNumber = itemNumber;
    this.validateItemForOrderData.vehicleID = 1023382536;
    this.validateItemForOrderData.customerNumber = parseInt(customerNumber);
    this.validateItemForOrderData.quantity = parseFloat(quantity);

    this.url = "http://localhost:3000/staging/ValidateItemForOrder";

    this.http
      .post(this.url, this.validateItemForOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  getItemPrice(
    customerNumber: string,
    postCode: string,
    branch: string,
    brand: string,
    tokenToUse: string,
    overrideShowroomViewYN: string
  ) {
    // show price rows
    this.showPriceRows = true;
    var getPriceData = {
      customerNumber: 0,
      postCode: " ",
      branch: " ",
      brand: " ",
      overrideShowroomViewYN: " ",
      itemCodes: [{ code: "3440540", quantity: 1 }],
    };

    getPriceData.customerNumber = parseFloat(customerNumber);
    getPriceData.postCode = postCode;
    getPriceData.branch = branch;
    getPriceData.brand = brand;
    getPriceData.overrideShowroomViewYN = overrideShowroomViewYN;
    this.url = "http://localhost:3000/item/FetchItemPriceGroup";

    this.http
      .post(this.url, getPriceData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  insertLineAfter(
    orderNumber: string,
    insertLineAfter: string,
    tokenToUse: string
  ) {
    // show price rows
    this.showInsertLineAter = true;
    let insertLineAterData = {
      orderNumber: orderNumber,
      itemCode: "SUBTOTAL",
      itemDesc: "AAAAAAAAAAAAA",
      itemQty: 0,
      uom: " ",
      paintableYN: " ",
      paintYN: " ",
      fitableYN: " ",
      fittedYN: " ",
      unitPriceExTax: 700.0,
      unitPriceIncTax: 777.0,
      extPriceExTax: 800.0,
      extPriceIncTax: 888.88,
      partsVehicleID: 0,
      insertLineAfter: parseFloat(insertLineAfter),
    };

    this.url = "http://localhost:3000/staging/InsertLineAfter";

    this.http
      .post(this.url, insertLineAterData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  reSequenceLines(
    orderNumber: string,
    oldLineNumber: string,
    newLineNumber: string,
    tokenToUse: string
  ) {
    // show price rows
    this.showReSequenceLines = true;
    let reSequenceLinesData = {
      orderNumber: orderNumber,
      oldLineNumber: parseFloat(oldLineNumber),
      newLineNumber: parseFloat(newLineNumber),
    };

    this.url = "http://localhost:3000/staging/ReSequenceLines";

    this.http
      .post(this.url, reSequenceLinesData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------

  //-------------------------------------------
  validateOrderInJDE(
    orderNumber: string,
    finalModeYN: string,
    tokenToUse: string,
    overrideBranch: String
  ) {
    // show price rows
    this.showValidateOrderInJDE = true;
    let validateOrderInJDEData = {
      orderNumber: orderNumber,
      finalModeYN: finalModeYN,
      overrideBranch: overrideBranch,
    };

    this.url = "http://localhost:3000/staging/ValidateOrderInJDE";

    this.http
      .post(this.url, validateOrderInJDEData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  getJDESingleUser(
    tokenToUse: string,
    userFilter: string,
    fetchRegistered: string
  ) {
    // http call to node js server
    this.getJDEUsersListData.userFilter = userFilter;
    if (fetchRegistered == "true") {
      this.getJDEUsersListData.fetchRegistered = true;
    } else {
      this.getJDEUsersListData.fetchRegistered = false;
    }

    this.url = "http://localhost:3000/user/FetchJDESingleUser";
    this.http
      .post(this.url, this.getJDEUsersListData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.jdeUsersSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-----------------------------------------------
  feedbackType(brand: string) {
    this.showFeedbackType = true;
    let feedbackTypeData = {
      brand: brand,
    };

    this.url = "http://localhost:3000/api/feedback/types";
    this.http
      .post(this.url, feedbackTypeData, {
        headers: new HttpHeaders().set("tokenToUse", " "),
      })
      .toPromise()
      .then((responseData: any) => {
        this.jdeUsersSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-----------------------------------------------
  logFeedback(
    brand: string,
    feedbackType: string,
    feedback: string,
    includeCurrentOrderYN: string,
    replyEmail: string,
    currentURL: string,
    userEmail: string,
    orderNumber: string
  ) {
    this.showLogFeedback = true;

    this.logFeedbackData.brand = brand;
    this.logFeedbackData.feedbackType = feedbackType;
    this.logFeedbackData.feedback = feedback;
    this.logFeedbackData.includeCurrentOrderYN = includeCurrentOrderYN;
    this.logFeedbackData.replyEmail = replyEmail;
    this.logFeedbackData.currentURL = currentURL;
    this.logFeedbackData.userEmail = userEmail;
    this.logFeedbackData.orderNumber = orderNumber;

    this.url = "http://localhost:3000/api/feedback";
    this.http
      .post(this.url, this.logFeedbackData, {
        headers: new HttpHeaders().set("tokenToUse", " "),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-----------------------------------------------
  toggleShowroomView(showroomViewYN: string, tokenToUse: string) {
    this.showToggleShowroomView = true;
    let toggleShowroomViewData = {
      showroomViewYN: showroomViewYN,
    };

    this.url = "http://localhost:3000/userState/ToggleShowroomView";

    this.http
      .post(this.url, toggleShowroomViewData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  updateAccountCustomerSettings(
    customerNumber: string,
    branch: string,
    currencyCode: string,
    inventoryView: string,
    validOrderTypes: string,
    tokenToUse: string,
    inventoryBranches: string
  ) {
    this.showUpdateAccountCustomerSettings = true;
    let updateAccountCustomerSettingsData = {
      customerNumber: customerNumber,
      branch: branch,
      currencyCode: currencyCode,
      inventoryView: inventoryView,
      validOrderTypes: validOrderTypes.split(" "),
      inventoryBranches: inventoryBranches.split(" "),
    };
    console.log(updateAccountCustomerSettingsData);
    this.url = "http://localhost:3000/customer/UpdateAccountCustomerSettings";

    this.http
      .post(this.url, updateAccountCustomerSettingsData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------

  //-------------------------------------------
  getInventoryView(tokenToUse: string) {
    this.showGetInventoryView = true;

    this.url = "http://localhost:3000/lists/InventoryView";

    this.http
      .post(
        this.url,
        {},
        {
          headers: new HttpHeaders().set("tokenToUse", tokenToUse),
        }
      )
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  getOutputType(tokenToUse: string) {
    // show search rows
    this.showOutputType = true;

    // http call to node js server
    this.url = "http://localhost:3000/lists/OutputType";

    this.http
      .post(this.url, " ", {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.productGroupSearchArray = responseData.SearchResults;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
      });
  }
  //-------------------------------------------
  distributeOrder(
    orderNumber: string,
    orderType: string,
    outputType: string,
    email: string,
    printerID: string,
    tokenToUse: string
  ) {
    this.showDistributeOrder = true;

    let distributeOrderData = {
      orderNumber: parseInt(orderNumber),
      orderType: orderType,
      outputType: outputType,
      email: email,
      printerID: printerID,
    };

    this.url = "http://localhost:3000/order/DistributeOrder";
    this.http
      .post(this.url, distributeOrderData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  checkPriceLevel(
    orderNumber: string,
    ooeLineNumber: string,
    partNumber: string,
    customerNumber: string,
    unitPriceIncTax: string,
    tokenToUse: string
  ) {
    this.showCheckPriceLevel = true;

    let checkPriceLevelData = {
      orderNumber: orderNumber,
      ooeLineNumber: parseFloat(ooeLineNumber),
      partNumber: partNumber,
      customerNumber: parseInt(customerNumber),
      unitPriceIncTax: parseFloat(unitPriceIncTax),
    };

    this.url = "http://localhost:3000/item/CheckPriceLevel";
    this.http
      .post(this.url, checkPriceLevelData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchVehicleDescription(
    jdeVehicleID: string,
    partsVehicleID: string,
    brand: string
  ) {
    this.showFetchVehicleDescription = true;

    let fetchVehicleDescriptionData = {
      jdeVehicleID: parseInt(jdeVehicleID),
      partsVehicleID: parseInt(partsVehicleID),
      brand: brand,
    };

    this.url = "http://localhost:3000/vehicle/FetchVehicleDescription";
    this.http
      .post(this.url, fetchVehicleDescriptionData, {
        headers: new HttpHeaders().set("tokenToUse", ""),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchUserType(tokenToUse: string) {
    this.showFetchUserType = true;
    let fetchUserTypeData = {};
    this.url = "http://localhost:3000/user/FetchUserType";
    this.http
      .post(this.url, fetchUserTypeData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  updateCustomerEmail(
    customerNumber: string,
    emailAddress: string,
    tokenToUse: string
  ) {
    this.showUpdateCustomerEmail = true;
    let updateCustomerEmailData = {
      customerNumber: parseInt(customerNumber),
      emailAddress: emailAddress,
    };
    this.url = "http://localhost:3000/customer/UpdateCustomerEmail";
    this.http
      .post(this.url, updateCustomerEmailData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchOrderFromJDE(
    orderNumber: string,
    orderType: string,
    tokenToUse: string
  ) {
    this.showFetchOrderFromJDE = true;
    let fetchOrderFromJDEData = {
      orderNumber: parseInt(orderNumber),
      orderType: orderType,
    };
    this.url = "http://localhost:3000/order/FetchOrderFromJDE";
    this.http
      .post(this.url, fetchOrderFromJDEData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  orderSummaryQuoteOrders(
    customerNumber: string,
    branch: string,
    fitOrderYN: string,
    enteredBy: string,
    customerPo: string,
    ordDateFrom: string,
    ordDateTo: string,
    reqDateFrom: string,
    reqDateTo: string,
    vehicleGroupString: string,
    vehicleID: string,
    vehicleRego: string,
    orderNumber: string,
    partNumber: string,
    productGroup: string,
    revenueBunit: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showOrderSummaryQuotes = true;

    const apiData = {
      customerNumber: customerNumber,
      branch: branch,
      fitOrderYN: fitOrderYN,
      enteredBy: enteredBy,
      customerPo: customerPo,
      ordDateFrom: ordDateFrom,
      ordDateTo: ordDateTo,
      reqDateFrom: reqDateFrom,
      reqDateTo: reqDateTo,
      vehicleGroupString: vehicleGroupString,
      vehicleID: vehicleID,
      vehicleRego: vehicleRego,
      orderNumber: orderNumber,
      partNumber: partNumber,
      productGroup: productGroup,
      revenueBunit: revenueBunit,
      tokenToUse: "",
    };
    this.url = "http://localhost:3000/sales/OrderSummaryQuoteOrders";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  orderSummaryOpenOrders(
    customerNumber: string,
    branch: string,
    fitOrderYN: string,
    enteredBy: string,
    customerPo: string,
    ordDateFrom: string,
    ordDateTo: string,
    reqDateFrom: string,
    reqDateTo: string,
    vehicleGroupString: string,
    vehicleID: string,
    vehicleRego: string,
    orderNumber: string,
    partNumber: string,
    productGroup: string,
    revenueBunit: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showOrderSummaryOpen = true;

    const apiData = {
      customerNumber: customerNumber,
      branch: branch,
      fitOrderYN: fitOrderYN,
      enteredBy: enteredBy,
      customerPo: customerPo,
      ordDateFrom: ordDateFrom,
      ordDateTo: ordDateTo,
      reqDateFrom: reqDateFrom,
      reqDateTo: reqDateTo,
      vehicleGroupString: vehicleGroupString,
      vehicleID: vehicleID,
      vehicleRego: vehicleRego,
      orderNumber: orderNumber,
      partNumber: partNumber,
      productGroup: productGroup,
      revenueBunit: revenueBunit,
      tokenToUse: "",
    };
    this.url = "http://localhost:3000/sales/OrderSummaryOpenOrders";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------

  getOrderSummaryInvoiced(
    customerNumber: string,
    branch: string,
    orderType: string,
    orderStatus: string,
    fitOrderYN: string,
    enteredBy: string,
    customerChannel: string,
    customerPo: string,
    heldOrderFlag10: string,
    ordDateFrom: string,
    ordDateTo: string,
    invDateFrom: string,
    invDateTo: string,
    reqDateFrom: string,
    reqDateTo: string,
    vehicleGroupString: string,
    vehicleID: string,
    vehicleRego: string,
    orderNumber: string,
    invoiceNumber: string,
    partNumber: string,
    productGroup: string,
    revenueBunit: string,
    maxCloseOrders: string,
    invoicedOrders10: string,
    creditOrders10: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showOrderSummaryInvoiced = true;
    // http call to node js server
    this.getOrderSummaryInvoicedData.customerNumber = customerNumber;
    this.getOrderSummaryInvoicedData.branch = branch;
    this.getOrderSummaryInvoicedData.orderType = orderType;
    this.getOrderSummaryInvoicedData.orderStatus = orderStatus;
    this.getOrderSummaryInvoicedData.fitOrderYN = fitOrderYN;
    this.getOrderSummaryInvoicedData.enteredBy = enteredBy;
    this.getOrderSummaryInvoicedData.customerChannel = customerChannel;
    this.getOrderSummaryInvoicedData.customerPo = customerPo;
    this.getOrderSummaryInvoicedData.heldOrderFlag10 = heldOrderFlag10;
    this.getOrderSummaryInvoicedData.ordDateFrom = ordDateFrom;
    this.getOrderSummaryInvoicedData.ordDateTo = ordDateTo;
    this.getOrderSummaryInvoicedData.invDateFrom = invDateFrom;
    this.getOrderSummaryInvoicedData.invDateTo = invDateTo;
    this.getOrderSummaryInvoicedData.reqDateFrom = reqDateFrom;
    this.getOrderSummaryInvoicedData.reqDateTo = reqDateTo;
    this.getOrderSummaryInvoicedData.vehicleGroupString = vehicleGroupString;
    this.getOrderSummaryInvoicedData.vehicleID = vehicleID;
    this.getOrderSummaryInvoicedData.vehicleRego = vehicleRego;
    this.getOrderSummaryInvoicedData.orderNumber = orderNumber;
    this.getOrderSummaryInvoicedData.invoiceNumber = invoiceNumber;
    this.getOrderSummaryInvoicedData.partNumber = partNumber;
    this.getOrderSummaryInvoicedData.productGroup = productGroup;
    this.getOrderSummaryInvoicedData.revenueBunit = revenueBunit;
    this.getOrderSummaryInvoicedData.maxCloseOrders = maxCloseOrders;
    this.getOrderSummaryInvoicedData.invoicedOrders10 = invoicedOrders10;
    this.getOrderSummaryInvoicedData.creditOrders10 = creditOrders10;
    this.getOrderSummaryInvoicedData.tokenToUse = tokenToUse;

    this.url = "http://localhost:3000/sales/OrderSummaryInvoicedOrders";
    this.http
      .post(this.url, this.getOrderSummaryInvoicedData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCashCustomer(branch: string, tokenToUse: string) {
    // show search rows
    this.showFetchCashCustomer = true;
    // http call to node js server
    const apiData = {
      branch: branch,
    };

    this.url = "http://localhost:3000/customer/FetchCashCustomer";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  checkLineStockAllocation(
    itemNumber: string,
    branch: string,
    lotSerialNumber: string,
    tokenToUse: string
  ) {
    // show search rows
    this.showCheckLineStockAllocation = true;
    // http call to node js server
    const apiData = {
      itemNumber: itemNumber,
      branch: branch,
      lotSerialNumber: lotSerialNumber,
    };

    this.url = "http://localhost:3000/item/CheckLineStockAllocation";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  listSuppliers(tokenToUse: string) {
    // show search rows
    this.showListSuppliers = true;
    // http call to node js server
    const apiData = {};

    this.url = "http://localhost:3000/lists/ListSuppliers";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCashDrawerManufacturer(brand: string) {
    // show search rows
    this.showFetchCashDrawerManufacturer = true;
    // http call to node js server
    const apiData = { brand: brand };

    this.url = "http://localhost:3000/lists/FetchCashDrawerManufacturer";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", "NA"),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  paymentTypes(tokenToUse: string) {
    this.showFetchUserType = true;
    let fetchPaymentTypesData = {};
    this.url = "http://localhost:3000/lists/PaymentTypes";
    this.http
      .post(this.url, fetchPaymentTypesData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchPayments(tokenToUse: string, orderNumber: string) {
    this.showFetchPayments = true;
    let fetchPaymentsData = { orderNumber: orderNumber };
    this.url = "http://localhost:3000/lists/FetchPayments";
    this.http
      .post(this.url, fetchPaymentsData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  savePayments(
    tokenToUse: string,
    orderNumber: string,
    orderType: string,
    orderCompany: string,
    payInstrument: string,
    amount: string,
    creditCardType: string,
    authorisationNumber: string,
    creditCardReceipt: string,
    chequeNumber: string
  ) {
    this.showSavePayments = true;
    let savePaymentsData = {
      orderNumber: orderNumber,
      orderType: orderType,
      orderCompany: orderCompany,
      payInstrument: payInstrument,
      amount: parseFloat(amount),
      creditCardType: creditCardType,
      authorisationNumber: authorisationNumber,
      creditCardReceipt: creditCardReceipt,
      chequeNumber: chequeNumber,
    };

    this.url = "http://localhost:3000/staging/SavePayments";
    this.http
      .post(this.url, savePaymentsData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  postCodes(brand: string) {
    this.showPostCodes = true;
    let postCodesData = {
      brand: brand,
    };

    this.url = "http://localhost:3000/lists/PostCodes";
    this.http
      .post(this.url, postCodesData, {
        headers: new HttpHeaders().set("tokenToUse", ""),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  giftCardActivation(cardID: string, loadAmount: string, tokenToUse: string) {
    this.showGiftCardActivation = true;
    this.url = "http://localhost:3000/givex/GivexActivation";
    this.http
      .post(
        this.url,
        { cardID: cardID, loadAmount: parseFloat(loadAmount) },
        {
          headers: new HttpHeaders().set("tokenToUse", tokenToUse),
        }
      )
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  givexGetBalance(cardID: string, tokenToUse: string) {
    this.showGivexGetBalance = true;
    this.url = "http://localhost:3000/givex/GivexGetBalance";
    this.http
      .post(
        this.url,
        { cardID: cardID },
        {
          headers: new HttpHeaders().set("tokenToUse", tokenToUse),
        }
      )
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  givexRedemption(
    cardID: string,
    paymentAmount: string,
    tokenToUse: string,
    pin: string
  ) {
    this.showGivexRedemption = true;
    this.url = "http://localhost:3000/givex/GivexRedemption";
    this.http
      .post(
        this.url,
        { cardID: cardID, paymentAmount: parseFloat(paymentAmount), pin },
        {
          headers: new HttpHeaders().set("tokenToUse", tokenToUse),
        }
      )
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  listRegisters(tokenToUse: string, branch: string) {
    // show search rows
    this.showListRegisters = true;
    // http call to node js server
    const apiData = { branch: branch };

    this.url = "http://localhost:3000/lists/ListRegisters";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  checkCreditHistory(
    orderNumber: string,
    ooeLineNumber: string,
    tokenToUse: string
  ) {
    this.showCheckCreditHistory = true;
    let apiData = {
      orderNumber: orderNumber,
      ooeLineNumber: parseFloat(ooeLineNumber),
    };

    this.url = "http://localhost:3000/staging/CheckCreditHistory";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  listReasonCodes(tokenToUse: string) {
    this.showListReasonCodes = true;
    let apiData = {};
    this.url = "http://localhost:3000/lists/ListReasonCodes";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  checkUserForCredits(brand: string, username: string, password: string) {
    const apiData = {
      brand: brand,
      username: username,
    };
    // dont show the price rows
    this.showCheckUserForCredits = true;

    let headers = new HttpHeaders();
    headers = headers.set("user", username).set("password", password);

    this.url = "http://localhost:3000/user/CheckUserForCredits";
    this.http
      .post(this.url, apiData, { headers: headers, observe: "response" })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchDetailedInventory(
    itemNumber: string,
    branch: string,
    lotSerialNumber: string,
    tokenToUse: string
  ) {
    this.showFetchDetailedInventory = true;
    let apiData = {
      itemNumber: itemNumber,
      branch: branch,
      lotSerialNumber: lotSerialNumber,
    };

    this.url = "http://localhost:3000/item/FetchDetailedInventory";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCrossDock(
    itemNumber: string,
    branch: string,
    orderNumber: string,
    tokenToUse: string
  ) {
    this.showFetchCrossDock = true;
    let apiData = {
      itemNumber: itemNumber,
      branch: branch,
      orderNumber: parseFloat(orderNumber),
    };

    this.url = "http://localhost:3000/item/FetchCrossDock";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchInboundDetails(itemNumber: string, branch: string, tokenToUse: string) {
    this.showFetchInboundDetails = true;
    let apiData = {
      itemNumber: itemNumber,
      branch: branch,
    };

    this.url = "http://localhost:3000/item/FetchInboundDetails";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCashRoundedAmount(amount: string, tokenToUse: string) {
    this.showFetchCashRoundedAmount = true;
    let apiData = {
      amount: parseFloat(amount),
    };

    this.url = "http://localhost:3000/order/FetchCashRoundedAmount";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  setRegisterForHost(host: string, register: string, tokenToUse: string) {
    this.showSetRegisterForHost = true;
    let apiData = { host: host, register: register };

    this.url = "http://localhost:3000/registers/SetRegisterForHost";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchRegisterForHost(host: string, tokenToUse: string) {
    this.showFetchRegisterForHost = true;
    let apiData = { host: host };

    this.url = "http://localhost:3000/registers/FetchRegisterForHost";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  openCloseRegister(
    register: string,
    actionCode: string,
    dateTime: string,
    cashFloat: string,
    device: string,
    tokenToUse: string
  ) {
    this.showOpenCloseRegister = true;

    let apiData = {
      register: register,
      cashFloat: parseFloat(cashFloat),
      dateTime: dateTime,
      actionCode: actionCode,
      device: device,
    };
    this.url = "http://localhost:3000/registers/OpenCloseRegister";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCustomerDetails(customerNumber: string, tokenToUse: string) {
    this.showFetchCustomerDetails = true;

    let apiData = {
      customerNumber: parseFloat(customerNumber),
    };
    this.url = "http://localhost:3000/customer/FetchCustomerDetails";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  supplierSearch(
    supplierFuzzySearch: string,
    company: string,
    branch: string,
    tokenToUse: string
  ) {
    this.showSupplierSearch = true;

    let apiData = {
      supplierFuzzySearch: supplierFuzzySearch,
      company: company,
      branch: branch,
    };
    this.url = "http://localhost:3000/supplier/SupplierSearch";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  customerDetailsExternal(tokenToUse: string) {
    this.showCustomerDetailsExternal = true;

    let apiData = {
      // customerNumber: parseFloat(customerNumber),
    };
    this.url = "http://localhost:3000/sellarb/CustomerDetailsExternal";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  invoiceListExternal(tokenToUse: string) {
    this.showInvoiceListExternal = true;

    let apiData = {
      //customerNumber: parseFloat(customerNumber),
    };
    this.url = "http://localhost:3000/sellarb/InvoiceListExternal";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  statementListExternal(tokenToUse: string) {
    this.showStatementListExternal = true;

    let apiData = {
      //customerNumber: parseFloat(customerNumber),
    };
    this.url = "http://localhost:3000/sellarb/StatementListExternal";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  customerSalesFigures(customerNumber: string, tokenToUse: string) {
    this.showCustomerSalesFigures = true;

    let apiData = {
      customerNumberSearch: parseFloat(customerNumber),
    };
    this.url = "http://localhost:3000/customer/CustomerSalesFigures";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  emailStatementExternal(printUniqueKeyID: string, tokenToUse: string) {
    this.showEmailStatementExternal = true;

    let apiData = {
      printUniqueKeyID: parseFloat(printUniqueKeyID),
    };
    this.url = "http://localhost:3000/sellarb/EmailStatementExternal";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  emailInvoiceReprintExternal(
    invoiceNumber: string,
    invoiceType: string,
    tokenToUse: string
  ) {
    this.showEmailInvoiceReprintExternal = true;

    let apiData = {
      invoiceNumber: parseFloat(invoiceNumber),
      invoiceType: invoiceType,
    };
    this.url = "http://localhost:3000/sellarb/EmailInvoiceReprintExternal";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchInvoicePayments(
    orderNumber: string,
    orderType: string,
    orderCompany: string,
    tokenToUse: string
  ) {
    this.showFetchInvoicePayments = true;

    let apiData = {
      orderNumber: parseFloat(orderNumber),
      orderType: orderType,
      orderCompany: orderCompany,
    };
    this.url = "http://localhost:3000/sellarb/FetchInvoicePayments";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  copyOrder(tokenToUse: string) {
    this.showCopyOrder = true;

    let apiData = {};
    this.url = "http://localhost:3000/staging/CopyOrder";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchRecentOrders(tokenToUse: string) {
    this.showFetchRecentOrders = true;

    let apiData = {};
    this.url = "http://localhost:3000/order/FetchRecentOrders";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  createCreditOrder(orderNumber: string, tokenToUse: string) {
    this.showCreateCreditOrder = true;

    let apiData = { orderNumber: orderNumber };
    this.url = "http://localhost:3000/staging/CreateCreditOrder";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  purgeStagingRecords(hours: string, brand: string) {
    this.showPurgeStagingRecords = true;

    let apiData = { hours: parseFloat(hours), brand: brand };
    this.url = "http://localhost:3000/scheduler/PurgeStagingRecords";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", " "),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  purgeUserSessionRecords(hours: string, brand: string) {
    this.showPurgeUserSessionRecords = true;

    let apiData = { hours: parseFloat(hours), brand: brand };
    this.url = "http://localhost:3000/scheduler/PurgeUserSessionRecords";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", " "),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  quicksaveOrderToJDE(orderNumber: string, tokenToUse: string) {
    this.showQuicksaveOrderToJDE = true;

    let apiData = { orderNumber: orderNumber };
    this.url = "http://localhost:3000/quickOrder/QuicksaveOrderToJDE";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCatalogueStatus(tokenToUse: string) {
    this.showFetchCatalogueStatus = true;

    let apiData = {};
    this.url = "http://localhost:3000/user/FetchCatalogueStatus";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  listCustomerType(brand: string) {
    this.showListCustomerType = true;

    let apiData = { brand: brand };
    this.url = "http://localhost:3000/lists/ListCustomerType";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", ""),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  checkSerialNumberOnHand(
    tokenToUse: string,
    itemNumber: string,
    lotNumber: string
  ) {
    this.showCheckSerialNumberOnHand = true;

    let apiData = {
      itemNumber: itemNumber,
      lotNumber: lotNumber,
    };
    this.url = "http://localhost:3000/item/CheckSerialNumberOnHand";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  checkPreviousCredit(tokenToUse: string, orderNumber: string) {
    this.showCheckPreviousCredit = true;

    let apiData = {
      orderNumber: orderNumber,
    };
    this.url = "http://localhost:3000/order/CheckPreviousCredit";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  submitWarranty(
    tokenToUse: string,
    branch: string,
    shipToNumber: string,
    firstName: string,
    surname: string,
    email: string,
    phone: string,
    phoneType: string,
    addressLine1: string,
    addressLine2: string,
    suburb: string,
    state: string,
    postCode: string,
    country: string,
    secContactName: string,
    secContactPhone: string,
    marketingOptInYN: string,
    useBusinessNameYN: string,
    suppliedFittedBy: string,
    issueDescription: string,
    actionTaken: string,
    fittedFlag10: string,
    businessOrPersonalUseBP: string,
    distanceTravelledSinceFit: string,
    currentOdometer: string,
    accessoriesFitted: string,
    vehicleCondition: string,
    omeFlag10: string,
    wheelTyreSize: string,
    labourValue: string,
    freightValue: string,
    otherValue: string
  ) {
    this.showSubmitWarranty = true;

    let apiData = {
      branch: branch,
      shipToNumber: parseFloat(shipToNumber),
      firstName: firstName,
      surname: surname,
      email: email,
      phone: phone,
      phoneType: phoneType,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      suburb: suburb,
      state: state,
      postCode: postCode,
      country: country,
      secContactName: secContactName,
      secContactPhone: secContactPhone,
      marketingOptInYN: marketingOptInYN,
      useBusinessNameYN: useBusinessNameYN,
      suppliedFittedBy: suppliedFittedBy,
      issueDescription: issueDescription,
      actionTaken: actionTaken,
      fittedFlag10: fittedFlag10,
      businessOrPersonalUseBP: businessOrPersonalUseBP,
      distanceTravelledSinceFit: distanceTravelledSinceFit,
      currentOdometer: currentOdometer,
      accessoriesFitted: accessoriesFitted,
      vehicleCondition: vehicleCondition,
      omeFlag10: omeFlag10,
      wheelTyreSize: wheelTyreSize,
      labourValue: parseFloat(labourValue),
      freightValue: parseFloat(freightValue),
      otherValue: parseFloat(otherValue),
      photoIDArray: [
        "36ea2c61-7d10-4631-99e4-5ff1e8e639ea", // jpg
        "e59c4441-870c-436b-93d6-b310e07989b9", // excel
        "f5e53015-c4a3-408a-8c07-e0c4bb3c46fa", // note
      ],
      originalLines: [
        {
          itemNumber: "GLOVES", // mandatory
          description: "This is invalid",
          quantity: 2, // mandatory
          lotSerialNumber: " ",
          vehicleSelector: "PRODO TLY414", // mandatory if fitted
          invoiceNumber: 0,
          invoiceType: " ",
          invoiceCompany: " ",
          origOrderNumber: 0,
          origOrderType: " ",
          origOrderCompany: " ",
          origOrderLine: 0,
          dateSuppliedFitted: "04/03/2021", // dd/mm/yyyy
          faultDate: " ", // dd/mm/yyyy. Mandatory if ome
          faultCode: " ", // Mandatory if ome  (UDC list)
          returnConnote: "AAAAAAAAAAAAA ",
        },
        {
          itemNumber: "RK9", // mandatory
          description: "This is valid item",
          quantity: 3, // mandatory
          lotSerialNumber: " ",
          vehicleSelector: "PRODO TLY414", // mandatory if fitted
          invoiceNumber: 0,
          invoiceType: " ",
          invoiceCompany: " ",
          origOrderNumber: 0,
          origOrderType: " ",
          origOrderCompany: " ",
          origOrderLine: 0,
          dateSuppliedFitted: "04/04/2021", // dd/mm/yyyy
          faultDate: " ", // dd/mm/yyyy. Mandatory if ome
          faultCode: " ", // Mandatory if ome  (UDC list)
          returnConnote: "BBBBBBBBBBBBB",
        },
      ],
      replacementLines: [
        {
          itemNumber: "GLOVES", // mandatory
          description: "AAAAAAAA",
          quantity: 1, // mandatory
          lotSerialNumber: " ",
          vehicleSelector: "PRODO TLY414", // mandatory if fitted
          invoiceNumber: 0,
          invoiceType: " ",
          invoiceCompany: " ",
          origOrderNumber: 0,
          origOrderType: " ",
          origOrderCompany: " ",
          origOrderLine: 0,
          dateSuppliedFitted: "23/03/2021", // dd/mm/yyyy
          faultDate: " ", // dd/mm/yyyy. Mandatory if ome
          faultCode: " ", // Mandatory if ome  (UDC list)
          returnConnote: "AAAAAAAAAAAAA ",
        },
        {
          itemNumber: "3440540", // mandatory
          description: " ",
          quantity: 3, // mandatory
          lotSerialNumber: " ",
          vehicleSelector: "PRODO TLY414", // mandatory if fitted
          invoiceNumber: 0,
          invoiceType: " ",
          invoiceCompany: " ",
          origOrderNumber: 0,
          origOrderType: " ",
          origOrderCompany: " ",
          origOrderLine: 0,
          dateSuppliedFitted: "04/04/2021", // dd/mm/yyyy
          faultDate: " ", // dd/mm/yyyy. Mandatory if ome
          faultCode: " ", // Mandatory if ome  (UDC list)
          returnConnote: "BBBBBBBBBBBBB",
        },
      ],
    };
    this.url = "http://localhost:3000/warranty/SubmitWarranty";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  listWarrantyFaultCodes(faultCategory: string, tokenToUse: string) {
    this.showListWarrantyFaultCodes = true;
    let apiData = {
      faultCategory: faultCategory,
    };
    this.url = "http://localhost:3000/lists/ListWarrantyFaultCodes";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  createShowUser(
    brand: string,
    userEmail: string,
    password: string,
    name: string,
    tokenToUse: string,
    showCode: string
  ) {
    this.showCreateShowUser = true;
    let apiData = {
      brand: brand,
      userEmail: userEmail,
      userName: name,
      validOrderTypes: ["S6", "SQ", "SO"],
      showCode: showCode,
    };
    this.url = "http://localhost:3000/show/CreateShowUser";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders()
          .set("tokenToUse", tokenToUse)
          .set("password", password),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  removeShowCode(
    brand: string,
    userEmail: string,
    showCode: string,
    tokenToUse: string
  ) {
    this.showRemoveShowCode = true;
    let apiData = {
      brand: brand,
      userEmail: userEmail,
      showCode: showCode,
    };
    this.url = "http://localhost:3000/show/RemoveShowCode";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  createShowCode(userEmail: string, showCode: string, tokenToUse: string) {
    this.showCreateShowCode = true;
    let apiData = {
      userEmail: userEmail,
      showCode: showCode,
    };
    this.url = "http://localhost:3000/show/CreateShowCode";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchShowList(tokenToUse: string) {
    this.showFetchShowList = true;
    let apiData = {};
    this.url = "http://localhost:3000/show/FetchShowList";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchExternalUsers(tokenToUse: string) {
    this.showFetchExternalUsers = true;
    let apiData = {};
    this.url = "http://localhost:3000/lists/FetchExternalUsers";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  loginToShow(showCode: string, tokenToUse: string) {
    this.showLoginToShow = true;
    let apiData = { showCode: showCode };
    this.url = "http://localhost:3000/show/LoginToShow";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchShowUsers(showCode: string, tokenToUse: string) {
    this.showFetchShowUsers = true;
    let apiData = { showCode: showCode };
    this.url = "http://localhost:3000/show/FetchShowUsers";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchNonCorpStoresForShow(tokenToUse: string) {
    this.showFetchNonCorpStoresForShow = true;
    let apiData = {};
    this.url = "http://localhost:3000/show/FetchNonCorpStoresForShow";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  checkForShowSales(tokenToUse: string) {
    this.showCheckForShowSales = true;
    let apiData = {};
    this.url = "http://localhost:3000/show/CheckForShowSales";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchCustomerShowList(tokenToUse: string) {
    this.showFetchCustomerShowList = true;
    let apiData = {};
    this.url = "http://localhost:3000/show/FetchCustomerShowList";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchShowPrinters(tokenToUse: string) {
    this.showFetchShowPrinters = true;
    let apiData = {};
    this.url = "http://localhost:3000/show/FetchShowPrinters";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  fetchShowSalesForExternal(tokenToUse: string, showCode: string) {
    this.showFetchShowSalesForExternal = true;
    let apiData = { showCode: showCode };
    this.url = "http://localhost:3000/show/FetchShowSalesForExternal";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", tokenToUse),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }

  //-------------------------------------------
  //  Begin - Interfaces
  //-------------------------------------------

  //-------------------------------------------
  fordEdiAsn856(
    interfaceID: string,
    healthCheckMode10: string,
    partnerID: string
  ) {
    this.showFordEdiAsn856 = true;
    let apiData = {
      interfaceID: interfaceID,
      healthCheckMode10: healthCheckMode10,
      partnerID: partnerID,
    };
    this.url = "http://localhost:3001/ford/FordEdiAsn856";
    this.http
      .post(this.url, apiData, {
        headers: new HttpHeaders().set("tokenToUse", ""),
      })
      .toPromise()
      .then((responseData: any) => {
        this.errorMessage = responseData.ErrorMessage;
      })
      .catch((error: any) => {
        this.jsonString = JSON.stringify(error);
        var obj = JSON.parse(this.jsonString);
        this.errorMessage = error.error.ErrorMessage;
      });
  }
  //-------------------------------------------
  //-------------------------------------------
  //  End - Interfaces
  //-------------------------------------------
}
