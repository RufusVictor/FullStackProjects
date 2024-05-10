import requests

def get_user_input():
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    operation = input("Enter the operation (addition/subtraction/multiplication/division): ").lower()
    if num1<num2:
        num1,num2=num2,num1
    return num1, num2, operation

def perform_calculation(num1, num2, operation):
    payload = {"num1": num1, "num2": num2, "operation": operation}
    response = requests.post("http://localhost:8000/", json=payload)
    if response.status_code == 200:
        result = response.json()["result"]
        print("Result:", result)
    else:
        print("Error:", response.text)

if __name__ == "__main__":
    num1, num2, operation = get_user_input()
    perform_calculation(num1, num2, operation)
