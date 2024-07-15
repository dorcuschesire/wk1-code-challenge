function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const { employee: nssfEmployee, employer: nssfEmployer } = calculateNSSF(grossSalary);

    const deductionsTotal = paye + nhif + nssfEmployee;
    const netSalary = grossSalary - deductionsTotal;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssfEmployee: nssfEmployee,
        nssfEmployer: nssfEmployer,
        deductionsTotal: deductionsTotal,
        netSalary: netSalary
    };
}
