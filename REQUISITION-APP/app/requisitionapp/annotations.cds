using RequisitionService from '../../srv/service';

annotate RequisitionService.Requisitions with @(
  UI.HeaderInfo : {
    TypeName : 'Requisition',
    TypeNamePlural : 'Requisitions',
    Title : { Value : title }
  },
  UI.SelectionFields : [
    status,
    requester
  ],
  UI.LineItem : [
    { Value : title, Label : 'Title' },
    { Value : amount, Label : 'Amount' },
    { Value : currency, Label : 'Currency' },
    { Value : status, Label : 'Status' },
    { Value : requester, Label : 'Requester' },
    { Value : approver, Label : 'Approver' }
  ],
  UI.FieldGroup #General : {
    Data : [
      { Value : title, Label : 'Title' },
      { Value : description, Label : 'Description' },
      { Value : amount, Label : 'Amount' },
      { Value : currency, Label : 'Currency' },
      { Value : status, Label : 'Status' },
      { Value : requester, Label : 'Requester' },
      { Value : approver, Label : 'Approver' },
      { Value : comments, Label : 'Comments' }
    ]
  },
  UI.Facets : [
    {
      $Type : 'UI.ReferenceFacet',
      Label : 'General Information',
      Target : '@UI.FieldGroup#General'
    }
  ],
  UI.Identification : [
    {
      $Type : 'UI.DataFieldForAction',
      Action : 'RequisitionService.approve',
      Label : 'Approve',
      RequiresContext : true,
      ![@Core.OperationAvailable] : {
        $edmJson : {
          $If : [
            { $Eq : [ { $Path : 'status' }, 'SUBMITTED' ] },
            true,
            false
          ]
        }
      }
    },
    {
      $Type : 'UI.DataFieldForAction',
      Action : 'RequisitionService.rejectRequest',
      Label : 'Reject',
      RequiresContext : true,
      ![@Core.OperationAvailable] : {
        $edmJson : {
          $If : [
            { $Eq : [ { $Path : 'status' }, 'SUBMITTED' ] },
            true,
            false
          ]
        }
      }
    }
  ]
);