'use strict';

const [args] = process.argv.slice(2);
const SHIPPING_COST = 400;
const INVENTORIES = {
    UK: {
        MASKS: {
            QUANTITY: 100,
            PRICE: 65
        },
        GLOVES: {
            QUANTITY: 100,
            PRICE: 100,
        },
        PASSPORTINITIAL: 'B',
    },
    GERMANY: {
        MASKS: {
            QUANTITY: 100,
            PRICE: 100
        },
        GLOVES: {
            QUANTITY: 50,
            PRICE: 150,
        },
        PASSPORTINITIAL: 'A',
    },
};


class Invertory {
    constructor() {
        this.originalInveroty = JSON.parse(JSON.stringify(INVENTORIES));
        // if (this.arguments.length < 1) {
        //     throw new Error({ message: 'invalid arguments' })
        // }
        const argumentsData = args.toUpperCase().split(':');
        this.passort = argumentsData.length > 5 ? argumentsData[1] : null;
        this.purchaseCountry = argumentsData[0];
        this.gloveUnits = parseInt(argumentsData[argumentsData.length - 3]);
        this.maskUnits = parseInt(argumentsData[argumentsData.length - 1]);
        this.totalAvailableMaskQuantity = INVENTORIES.UK.MASKS.QUANTITY +  INVENTORIES.GERMANY.MASKS.QUANTITY;
        this.totalAvailableGlovesQuantity =  INVENTORIES.UK.GLOVES.QUANTITY + INVENTORIES.GERMANY.GLOVES.QUANTITY;
    }

    vaidateArguments() {
        console.log(this.gloveUnits < this.totalAvailableGlovesQuantity)
        if(this.gloveUnits < this.totalAvailableGlovesQuantity) {
            throw new Error('sassa')
        }
        if(this.maskUnits < this.totalAvailableMaskQuantity) {
            throw new Error('sassa')
        }
        let maskPriceForUK, maskPriceForGermany = 0;
        if(this.passort) {
            maskPriceForUK = this.maskUnits * INVENTORIES.UK.MASKS.PRICE;
            maskPriceForGermany = this.maskUnits * INVENTORIES.GERMANY.MASKS.PRICE;    
        }
        console.log({
            maskPriceForUK, maskPriceForGermany
        })
        // let remainingMaskFromUkQuantity = 0;
        // let remainingMaskFromGermanyQuantity = 0;
        // // if(this.maskUnits > INVENTORIES.UK.MASKS.QUANTITY) {
        //     maskPriceForUK +=  INVENTORIES.UK.MASKS.QUANTITY * INVENTORIES.UK.MASKS.PRICE;
        //     remainingMaskQuantity = this.maskUnits - INVENTORIES.UK.MASKS.QUANTITY;
        // }else {
        //     maskPriceForUK +=  this.maskUnits * INVENTORIES.UK.MASKS.PRICE;
        // }

        // if(this.maskUnits > INVENTORIES.GERMANY.MASKS.QUANTITY) {
        //     maskPriceForUK +=  INVENTORIES.GERMANY.MASKS.QUANTITY * INVENTORIES.GERMANY.MASKS.PRICE;
        //     remainingMaskFromGermanyQuantity = this.maskUnits - INVENTORIES.GERMANY.MASKS.QUANTITY;
        // }else {
        //     maskPriceForUK +=  this.maskUnits * INVENTORIES.UK.MASKS.PRICE;
        // }
        // // console.log(this);
        // if (!this.hasPassport) {
        //     country = argumentsData[0];
        //     gloveUnits = (argumentsData[2]);
        //     maskUnits = (argumentsData[4]);
        //     // console.log(INVENTORIES[country]['MASKS']);
        //     let totalMaskPrice = INVENTORIES[country]['MASKS'].PRICE * maskUnits;
        //     let totalGlovePrice = INVENTORIES[country]['GLOVES'].PRICE * gloveUnits;
        //     // console.log(totalMaskPrice);
        //     // console.log(totalGlovePrice);
        //     INVENTORIES[country]['MASKS'].QUANTITY = INVENTORIES[country]['MASKS'].QUANTITY - maskUnits;
        //     INVENTORIES[country]['GLOVES'].QUANTITY = INVENTORIES[country]['GLOVES'].QUANTITY - gloveUnits;
        //     // <total_sale_price>:<Mask_UK_inventory>:<Mask_Germany_inventory>:<Gloves_UK_inventory>:<Gloves_Germany_inventory>
        //     if (INVENTORIES['UK']['MASKS'].QUANTITY < 0 || INVENTORIES['UK']['MASKS'].QUANTITY < 0) {
        //         // console.log(this.originalInveroty);
        //         return `OUT_OF_STOCK:${this.originalInveroty['UK']['MASKS'].QUANTITY} ${this.originalInveroty['GERMANY']['MASKS'].QUANTITY}:${this.originalInveroty['UK']['GLOVES'].QUANTITY} ${this.originalInveroty['GERMANY']['GLOVES'].QUANTITY}`;
        //     } else {
        //         return `${totalGlovePrice + totalMaskPrice}:${INVENTORIES['UK']['MASKS'].QUANTITY}:${INVENTORIES['GERMANY']['MASKS'].QUANTITY}:${INVENTORIES['UK']['GLOVES'].QUANTITY}:${INVENTORIES['GERMANY']['GLOVES'].QUANTITY}`
        //     }
        // } else {

        // }

    }

    run() {
        console.log(this.vaidateArguments());
        // return this.vaidateArguments();
    }

}
// const { argv } = process;
// console.log(argv);



// const products = [
//     {
//         name: 'Mask',
//         country: 'UK',
//         QUANTITY: 100,
//         PRICE:  65,
//     },
//     {
//         name: 'Mask',
//         country: 'Germany',
//         QUANTITY: 100,
//         PRICE: 100,
//     },
//     {
//         name: 'Gloves',
//         country: 'UK',
//         QUANTITY: 100,
//         PRICE: 100,
//     },
//     {
//         name: 'Mask',
//         country: 'UK',
//         QUANTITY: 50,
//         PRICE: 150,
//     },
// ]


const object = new Invertory();

object.run();
