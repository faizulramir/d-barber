export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
}

export function getTimeNow(separator=':', type='h'){

    let newDate = new Date()
    let hours = newDate.getHours();
    let minute = newDate.getMinutes();

    if (type == 'h') {
        return `${hours}${separator}00`
    }
    
    return `${hours}${separator}${minute<10?`0${minute}`:`${minute}`}`
}

export function getTimeSelection(){

    let time = [
        {
            time: '8:00',
            type: 'am'
        },
        {
            time: '9:00',
            type: 'am'
        },
        {
            time: '10:00',
            type: 'am'
        },
        {
            time: '11:00',
            type: 'am'
        },
        {
            time: '12:00',
            type: 'pm'
        },
        {
            time: '13:00',
            type: 'pm'
        },
        {
            time: '14:00',
            type: 'pm'
        },
        {
            time: '15:00',
            type: 'pm'
        },
        {
            time: '16:00',
            type: 'pm'
        },
        {
            time: '17:00',
            type: 'pm'
        },
        {
            time: '18:00',
            type: 'pm'
        },
        {
            time: '19:00',
            type: 'pm'
        },
        {
            time: '20:00',
            type: 'pm'
        },
        {
            time: '21:00',
            type: 'pm'
        },
        {
            time: '22:00',
            type: 'pm'
        },
        {
            time: '23:00',
            type: 'pm'
        },
    ]

    return time
}