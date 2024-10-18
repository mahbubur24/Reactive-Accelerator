const balanceCheck = (stat) => {
  let sum = 0;
  if (stat === 1) {
    return balance.remain;
  }
  if (stat === 2) {
    sum = 0;
    let result = incomeList.map((item) => {
      sum = sum + Number(item.amount);
      return sum;
    });
    return result;
  }
  if (stat === 3) return balance.totalExpence;
};

export { balanceCheck };
