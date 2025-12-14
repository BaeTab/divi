export const calculateDividends = (stocks = []) => {
    const annualTotal = stocks.reduce((sum, stock) => {
        const stockAnnual = stock.quantity * stock.amountPerShare * stock.months.length;
        return sum + stockAnnual;
    }, 0);

    const monthlyAverage = annualTotal / 12;

    const monthlyTotals = Array(12).fill(0).map(() => ({ total: 0, items: [] }));

    stocks.forEach(stock => {
        const monthlyAmount = stock.quantity * stock.amountPerShare;
        stock.months.forEach(month => {
            // month is 1-based (1-12)
            if (month >= 1 && month <= 12) {
                const index = month - 1;
                monthlyTotals[index].total += monthlyAmount;
                monthlyTotals[index].items.push({
                    name: stock.name,
                    amount: monthlyAmount
                });
            }
        });
    });

    // Reformat monthlyTotals for Recharts [ { name: '1월', total: 1000, items: [...] }, ... ]
    const monthlyData = monthlyTotals.map((data, index) => ({
        name: `${index + 1}월`,
        total: data.total,
        items: data.items,
        monthIndex: index + 1
    }));

    return {
        annualTotal,
        monthlyAverage,
        monthlyData
    };
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount).replace('₩', '') + '원';
};

export const formatCurrencySimple = (amount) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
}
