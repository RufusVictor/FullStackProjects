from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CalculatorSerializer

class CalculatorAPIView(APIView):
    def get(self, request):
        response_msg = "Welcome!"
        return Response({'message': response_msg}, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CalculatorSerializer(data=request.data)
        if serializer.is_valid():
            num1 = serializer.validated_data['num1']
            num2 = serializer.validated_data['num2']
            operation = serializer.validated_data['operation']

            if operation == 'addition':
                result = num1 + num2
            elif operation == 'subtraction':
                result = num1 - num2
            elif operation == 'multiplication':
                result = num1 * num2
            elif operation == 'division':
                if num2 != 0:
                    result = num1 / num2
                else:
                    return Response({'error': 'Division by zero!'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'error': 'Invalid operation'}, status=status.HTTP_400_BAD_REQUEST)

            return Response({'result': result}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
