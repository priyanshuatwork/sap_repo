const cds = require('@sap/cds')
const { UPDATE, SELECT } = require('@sap/cds/lib/ql/cds-ql')

module.exports = cds.service.impl(async function () {

    const { Requisitions } = this.entities

    // CREATE validation
    this.before('CREATE', Requisitions, req => {
        const d = req.data

        if (!d.title) req.reject(400, 'Title is required')
        if (!d.amount || d.amount <= 0) {
            req.reject(400, 'Amount must be greater than 0')
        }

        d.status = 'SUBMITTED'
        d.requester = req.user?.id || 'anonymous'
    })

    // UPDATE restriction
    this.before('UPDATE', Requisitions, req => {
        if (req.data.status && ['APPROVED', 'REJECTED'].includes(req.data.status)) {
            req.reject(400, 'Status can only be changed via approve/reject actions')
        }
    })

    // APPROVE action
    this.on('approve', async req => {

        const ID = req.params[0].ID
        const { comments } = req.data

        const item = await SELECT.one.from(Requisitions).where({ ID })

        if (!item) req.reject(404, 'Requisition not found or not activated yet')

        if (item.status === 'APPROVED')
            req.reject(400, 'Already approved')

        if (item.status === 'REJECTED')
            req.reject(400, 'Already rejected')

        await UPDATE(Requisitions)
            .set({
                status: 'APPROVED',
                approver: req.user?.id,
                comments
            })
            .where({ ID })

        return 'Requisition approved'
    })

    // REJECT action
    this.on('rejectRequest', async req => {
        const { ID, comments } = req.data

        const item = await SELECT.one.from(Requisitions).where({ ID })
        if (!item) req.reject(404, 'Requisition not found')
        if (item.status === 'APPROVED') req.reject(400, 'Already approved')
        if (item.status === 'REJECTED') req.reject(400, 'Already rejected')

        await UPDATE(Requisitions)
            .set({
                status: 'REJECTED',
                approver: req.user?.id,
                comments
            })
            .where({ ID })

        return 'Requisition rejected'
    })

})