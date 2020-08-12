import MobilenavActionType from'./mobilenav.types';
const INITIAL_STATE={
    mobileDisplay:true
};
const Mobilenavreducer =(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case MobilenavActionType.MobilenavDisplay:
            return{
                ...state,
                mobileDisplay: !state.mobileDisplay
            }
            default:
                return state;
    }
};
export default Mobilenavreducer;
