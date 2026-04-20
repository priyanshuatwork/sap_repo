using { cuid, managed } from '@sap/cds/common';
namespace req;

@odata.draft.enabled
entity Requisitions : cuid, managed {
    title       : String(100);
    description : String(500);
    amount      : Decimal(15,2);
    currency    : String(3);
    status      : String(20) default 'DRAFT';
    requester   : String(100);
    approver    : String(100);
    comments    : String(500);
}