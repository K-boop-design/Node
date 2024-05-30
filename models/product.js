const products = []
module.exports = class Product{
    constructor(t){
        this.name=t.name
        this.description=t.description
        this.details=t.details
        this.startDate=t.startDate
        this.endDate=t.endDate
        this.recurringInfo=t.recurringInfo
        this.category = t.category
        this.tags=t.tags
        this.relevance=t.relevance
        this.participationAccess=t.participationAccess
        this.paymentMethod=t.paymentMethod
        this.pricingInfo=t.pricingInfo
        console.log('inside constructor')
        console.log('Name:'+this.name)
        console.log('description:'+this.description)
        console.log('details:'+this.details)
        console.log('startDate:'+this.startDate)
        console.log('endDate:'+this.endDate)
        console.log('recurringInfo:'+this.recurringInfo)
        console.log('category:'+this.category)
        console.log('tags:'+this.tags)
        console.log('relevance:'+this.relevance)
        console.log('participationAccess:'+this.participationAccess)
        console.log('paymentMethod:'+this.paymentMethod)
        console.log('pricingInfo:'+this.pricingInfo)
        
    }

    save(){
        products.push(this.title)
        console.log(this.title);
        console.log('reached save')
    }

    static fetchall(){
        
        console.log('reached fetchall')
        return products
    }
}