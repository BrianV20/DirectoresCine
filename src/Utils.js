export const getYear = (date) => {
    if(date != undefined){
        return date.split('-')[0];
    }
};