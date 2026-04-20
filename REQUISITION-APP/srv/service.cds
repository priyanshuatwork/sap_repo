using {req as my } from '../db/schema';

service RequisitionService
{
    @odata.draft.enabled

    entity Requisitions as projection on my.Requisitions actions
    {
        @requires:'Manager'
        action approve(comments:String) returns String;
        
        @requires : 'Manager'
        action rejectRequest(comments:String) returns String;
    }
}