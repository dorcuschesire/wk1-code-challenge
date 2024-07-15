## challenge 1
1. Run the function 'calculateGrade()'
2. Input sstudent marks within the range of 0 to 100
3. the function will output the corresponding grade as per the defined criteria

## challenge 2
1. Input speed of the car
2. The  program will check if the speed is within the limit
3. if the speed is over limit demerit points will be calculated
4. If the driver accumulates more than 12 points their licence will be suspended 

    ## challenge 3

1. **Input Parameters**:
   - `basicSalary`: Numeric value representing the individual's basic salary.
   - `benefits`: Numeric value representing additional benefits or allowances.

2. **Calculations**:
   - **Gross Salary**: Sum of `basicSalary` and `benefits`.
   - **PAYE (Income Tax)**: Calculated using predefined tax brackets and assumes a personal relief of Ksh 2,400.
   - **NHIF Deduction**: Determined based on predefined contribution brackets.
   - **NSSF Deductions**: Computed as 6% of the `grossSalary` for both employee and employer contributions.
   - **Deductions Total**: Sum of PAYE, NHIF, and employee NSSF deductions.
   - **Net Salary**: Gross salary minus total deductions.
    
3. **Output**:
   - Returns an object containing the following properties:
     - `grossSalary`: Total salary before deductions.
     - `paye`: Amount deducted as PAYE.
     - `nhif`: Amount deducted as NHIF.
     - `nssfEmployee`: Employee's contribution deducted for NSSF.
     - `nssfEmployer`: Employer's contribution deducted for NSSF.
     - `deductionsTotal`: Sum of all deductions (PAYE, NHIF, and NSSF employee contribution).
     - `netSalary`: Final take-home salary after deductions.

