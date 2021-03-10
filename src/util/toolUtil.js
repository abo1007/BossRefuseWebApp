import axios from 'axios';
import APIUtil from "./APIUtil";

export default {
    getID(){
        return sessionStorage.getItem("ID");
    },
    getCandID(ID, callback){
        axios.get(APIUtil.API_GET_RESUME_ID + ID).then(res => {
            if(res.data.code === 200){
                callback(res.data.data.candId);
            }else{
                return null;
            }
        }).catch(err => {
            return null;
            console.log(err);
        })
    }
}
