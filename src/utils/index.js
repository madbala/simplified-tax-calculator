export const toIndianCurrency = (num) => {
    const curr = parseInt(num)?.toLocaleString('en-IN', {
       style: 'currency',
       currency: 'INR'
    });
 return curr;
 };