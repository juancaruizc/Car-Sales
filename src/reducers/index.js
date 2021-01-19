import {ADD_FEATURE, CLEAR_FEATURE} from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_FEATURE):
        const newFeature = state.additionalFeatures.filter((item) => {
          if(item.id === action.payload) return item
        })[0]
        const addFeature = state.additionalFeatures.filter((item) => {
          if(item.id !== action.payload) return item
        })
        console.log('addFeatures',addFeature, 'newFeature',newFeature)
        return ({
          ...state, 
          car: {
            ...state.car,
            features: [...state.car.features, newFeature]
            },
          additionalFeatures: addFeature,
          additionalPrice: newFeature.price + state.additionalPrice
        })

        case(CLEAR_FEATURE):
        const subtractFeature = state.car.features.filter((item) => {
          if(item.id === action.payload) return item
        })[0]
        const removeFeature = state.car.features.filter((item) => {
           if(item.id !== action.payload) return item
        })
          return({
            ...state, 
            car: {
              ...state.car,
              features: removeFeature
              },
            additionalFeatures: [...state.additionalFeatures, subtractFeature],
            additionalPrice: state.additionalPrice - subtractFeature.price 
          })

        default: 
        return state
    }
}


