const initialState = {
  basket: JSON.parse(window.localStorage.getItem("market"))
    ? JSON.parse(window.localStorage.getItem("market"))
    : [],
  favorite: JSON.parse(window.localStorage.getItem("favorite"))
    ? JSON.parse(window.localStorage.getItem("favorite"))
    : [],
  headerShow: true,
  peopleCount: Number(window.localStorage.getItem("peopleCount"))
    ? Number(window.localStorage.getItem("peopleCount"))
    : 2,
  dishCount: Number(window.localStorage.getItem("dishCount"))
    ? Number(window.localStorage.getItem("dishCount"))
    : 3,
  price: Number(window.localStorage.getItem("price"))
    ? Number(window.localStorage.getItem("price"))
    : 50,
  searchValue: "",
  loginShow: false,
  quickView: null,
  quickViewShow: false,
  quickViewMarket: null,
  quickViewShowMarket: false,
  modalConfirmationShow: false,
  basketError: false,
  basketConfirmation: false,
  switcher: Number(window.localStorage.getItem("mode"))
    ? Number(window.localStorage.getItem("mode"))
    : 0,
  tabCategory: 0,
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [...state.basket.filter((a) => a.id !== action.payload)],
      };
    case "ADD_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((a) =>
          a.id === action.payload ? { ...a, quantity: a.quantity + 1 } : a
        ),
      };
    case "SUB_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((a) =>
          a.id === action.payload
            ? {
                ...a,
                quantity: a.quantity !== 1 ? a.quantity - 1 : 1,
              }
            : a
        ),
      };
    case "ADD_TO_FAVORITES":
      return { ...state, favorite: [...state.favorite, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorite: [...state.favorite.filter((a) => a.id !== action.payload)],
      };
    case "HEADER_SHOW":
      return { ...state, headerShow: action.payload };
    case "PEOPLE_COUNT":
      return { ...state, peopleCount: action.payload };
    case "DISH_COUNT":
      return { ...state, dishCount: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "LOGIN_SHOW":
      return { ...state, loginShow: action.payload };
    case "QUICK_VIEW":
      return { ...state, quickView: action.payload };
    case "QUICK_VIEW_SHOW":
      return { ...state, quickViewShow: action.payload };
    case "QUICK_VIEW_MARKET":
      return { ...state, quickViewMarket: action.payload };
    case "QUICK_VIEW_SHOW_MARKET":
      return { ...state, quickViewShowMarket: action.payload };
    case "MODAL_CONFIRMATION_SHOW":
      return { ...state, modalConfirmationShow: action.payload };
    case "BASKET_ERROR":
      return { ...state, basketError: action.payload };
    case "BASKET_CONFIRMATION":
      return { ...state, basketConfirmation: action.payload };
    case "SWITCHER":
      return { ...state, switcher: action.payload };
    case "TABCATEGORY":
      return { ...state, tabCategory: action.payload };
    default:
      return state;
  }
}
