export const toIndianCurrency = (num) => {
    const curr = parseInt(num?num:0)?.toLocaleString('en-IN', {
       style: 'currency',
       currency: 'INR'
    });
 return curr;
 };