from rest_framework import serializers

class CalculatorSerializer(serializers.Serializer):
    num1 = serializers.FloatField()
    num2 = serializers.FloatField()
    operation = serializers.CharField()