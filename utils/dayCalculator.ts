export const calculateDays = (date1: string | undefined, date2: string | undefined): number => {
    let date1Arr = date1?.split('-')?.splice(2);
    let date2Arr = date2?.split('-')?.splice(2);
    // @ts-ignore
    let firstDay:number = date1Arr && Number(date1Arr[0]);
    // @ts-ignore
    let secondDay: number = date2Arr && Number(date2Arr[0]);

    console.log(firstDay);
    console.log(secondDay);

    let dayDiff = secondDay && firstDay && (secondDay - firstDay);
    console.log(dayDiff);

    return dayDiff;
}