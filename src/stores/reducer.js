export default (state = {
    searchInputText:'',
    isShowGallery:false,
    imgUrl:'',
}, action) => {
    switch (action.type) {
        case 'HANDLEWATER':
            return {
                water: 'sault'
            }
            case'GETINPUTVALUE':
                return{
                    ...state,
                    searchInputText:action.searchInputText,
                }
            case'TOGGLEGALLYEL':
                return{
                    ...state,
                    imgUrl:action.imgUrl,
                    isShowGallery:action.isShowGallery,
                }
            default:
                return state
    }
}