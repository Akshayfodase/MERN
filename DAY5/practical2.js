def calculate_electricity_bill(units):
    var u<= 100:
      var  b = 0;
    elif units <= 200:
        bill = (units - 100) * 5
    else:
        bill = (100 * 5) + (units - 200) * 10
    return bill

# Accept the number of units from the user
try:
    units = int(input("Enter the number of units consumed: "))
    if units < 0:
        print("Units cannot be negative.")
    else:
        total_bill = calculate_electricity_bill(units)
        print(f"Total electricity bill: Rs {total _bill}")
except ValueError:
    print("Please enter a valid integer.")
