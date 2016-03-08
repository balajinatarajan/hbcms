function onClickSiriusAllLearMoreLink() {
    popUpLearnMore.lblPreGenMessage.setVisibility(false);
    popUpLearnMore.lblHeadr.text = {{RadioType}}{{PackageName}};
    popUpLearnMore.lblPriceHeader.text = frmSelectPackage.lblSiriusAllCost.text + "nth";
    
    popUpLearnMore.rchSiriusDesc1.setVisibility(true);
    popUpLearnMore.rchSiriusDesc1.text = "<b>{{Highlight}}</b><br><br>{{ShortDescription}}<br><br>";
    
    {{#Features}}
        popUpLearnMore.rchSiriusDesc1.text += "\u2022&nbsp&nbsp{{this}}<br>";
    {{/Features}}
    
    popShow(popUpLearnMore);
    gblpopUpLearnMoreVisible = true;
    gblpopOEMinternetRadioCredsVisible = false
}
     
//original
     
function onClickSiriusAllLearMoreLink() {
    popUpLearnMore.lblPreGenMessage.setVisibility(false);
    popUpLearnMore.lblHeadr.text = frmSelectPackage.lblSiriusAllAccess.text;
    popUpLearnMore.lblPriceHeader.text = frmSelectPackage.lblSiriusAllCost.text + "nth";
    if (gblSelectPackageResultSet.selfsxirPoint1 !== null && gblSelectPackageResultSet.selfsxirPoint1 !== "") {
        popUpLearnMore.rchSiriusDesc1.setVisibility(true);
        popUpLearnMore.rchSiriusDesc1.text = "<b>" + gblSelectPackageResultSet.siriusAllAccessDetails1 + "</b><br><br>" + gblSelectPackageResultSet.siriusAllAccessDetails3 + "&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails14 + "<br><br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails4 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails5 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails6 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails7 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails8 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails9 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails10 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails11 + "<br>\u2022&nbsp&nbsp" + gblSelectPackageResultSet.siriusAllAccessDetails12 + "<br>"
    } else {
        popUpLearnMore.rchSiriusDesc1.setVisibility(false)
    }
    if (gblSelectPackageResultSet.selfsxirPoint2 !== null && gblSelectPackageResultSet.selfsxirPoint2 !== "") {
        popUpLearnMore.rchSiriusDesc2.setVisibility(true);
        popUpLearnMore.rchSiriusDesc2.text = gblSelectPackageResultSet.selfsxirPoint2;
        if (gblSelectPackageResultSet.selfsxirPoint2.indexOf("View Channel Lineup") !== -1) {
            popUpLearnMore.rchSiriusDesc2.text = "*Satellite and streaming lineups vary slightly."
        }
    } else {
        popUpLearnMore.rchSiriusDesc2.setVisibility(false)
    }
    popUpLearnMore.lblPriceDesc.setVisibility(true);
    popUpLearnMore.lblPriceDesc.text = gblSelectPackageResultSet.siriusAllAccessDesc;
    if (gblSelectPackageResultSet.selfsxirPoint3A !== null && gblSelectPackageResultSet.selfsxirPoint3A !== "") {
        popUpLearnMore.lblDesc.setVisibility(true);
        popUpLearnMore.lblDesc.text = gblSelectPackageResultSet.selfsxirPoint3A
    } else {
        popUpLearnMore.lblDesc.setVisibility(false)
    }
    if (gblSelectPackageResultSet.selfsxirPoint3B != null && gblSelectPackageResultSet.selfsxirPoint3B !== "" && (gblSelectPackageResultSet.selfsxirPoint3B.indexOf(gblSelectPackageResultSet.selfsxirPoint3A) == -1)) {
        popUpLearnMore.lblDesc2.setVisibility(true);
        popUpLearnMore.lblDesc2.text = gblSelectPackageResultSet.selfsxirPoint3B
    } else {
        popUpLearnMore.lblDesc2.setVisibility(false)
    }
    if (gblSelectPackageResultSet.siriusAllAccessPreGen3 != null && gblSelectPackageResultSet.siriusAllAccessPreGen3 !== "") {
        popUpLearnMore.lblPreGenMessage.setVisibility(true);
        popUpLearnMore.lblPreGenMessage.text = gblSelectPackageResultSet.siriusAllAccessPreGen3
    } else {
        popUpLearnMore.lblPreGenMessage.setVisibility(false)
    }
    popShow(popUpLearnMore);
    gblpopUpLearnMoreVisible = true;
    gblpopOEMinternetRadioCredsVisible = false
}