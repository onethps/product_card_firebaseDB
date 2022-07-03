import { cartSlice, initCartType, minusItemAC, plusItemAC } from "store/cart/cartSlice";
import { productReducer } from "store/product/productSlice";

let startState: initCartType = {items:[], totalPrice:0}

beforeEach(() => {
  startState = {
    items: [
      {
        adds: "Espresso",
        count: 0,
        id: "CFw7pYr221D2G5bvu1Ia",
        name: "Espresso",
        photo: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/alt-59554682a1f2e-3889-8df1ace0d81d030a9daf65b6c71e61b4@1x.jpg",
        price: "1"
      },
      {
        adds: "Matcha",
        count: 0,
        id: "UcL70Xfl7VgQKsDLzLUi",
        name: "Matcha",
        photo: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/alt-59554682a1f2e-3889-8df1ace0d81d030a9daf65b6c71e61b4@1x.jpg",
        price: "2"
      },
      {
        adds: "Capuccino",
        count: 0,
        id: "IRtEgwx2hwzsvBCoFyFO",
        name: "Capuccino",
        photo: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/alt-59554682a1f2e-3889-8df1ace0d81d030a9daf65b6c71e61b4@1x.jpg",
        price: "3"
      },

    ],
    totalPrice: 0
  }
})

test('correct product Item should be added to cart', () => {

  const data = {
    adds: "Capuccino",
    count: 0,
    id: "IRtEgwx2hwzsvBCoFyFO",
    name: "Capuccino",
    photo: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/alt-59554682a1f2e-3889-8df1ace0d81d030a9daf65b6c71e61b4@1x.jpg",
    price: "3"
  }

  const action = plusItemAC(data)

  const endState = cartSlice.reducer(startState, action)

  expect(endState.items.length).toBe(3)
})


test('correct product  should removed', () => {

  const data = {
    adds: "Capuccino",
    count: 0,
    id: "IRtEgwx2hwzsvBCoFyFO",
    name: "Capuccino",
    photo: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/alt-59554682a1f2e-3889-8df1ace0d81d030a9daf65b6c71e61b4@1x.jpg",
    price: "3"
  }

  const action = minusItemAC(data)

  const endState = cartSlice.reducer(startState, action)

  expect(endState.items.length).toBe(2)
})





















